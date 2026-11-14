import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import worker, { normalizeSubmission, toCsv } from "../src/index.js";
import { createMemoryDb } from "./memory-db.js";

const ORIGIN = "https://limosa.work";
const TOKEN = "test-export-token";

function env(extra = {}) {
  return { DB: createMemoryDb(), EXPORT_TOKEN: TOKEN, ...extra };
}

function post(body, headers = {}) {
  return new Request("https://survey.limosa.work/responses", {
    method: "POST",
    headers: {
      Origin: ORIGIN,
      "Content-Type": "application/json",
      "CF-Connecting-IP": "203.0.113.10",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("accepts a full answer and stamps a server timestamp", async () => {
  const dbEnv = env();
  const res = await worker.fetch(post({
    role: "Office, payroll, or accounting",
    trade: ["Snow and ice", "Tree care"],
    field_headcount: "6-20",
    method: "Paper timesheets",
    tools: " a spreadsheet ",
    job_costing: "Total hours only",
    trust: "2",
    pain: ["Missed or forgotten punches", "Disputes over pay"],
    fix_hours: "1-3 hours",
    one_fix: "Stop guessing\ndrive time",
    name: "Ada",
    company: "North Crew",
    email: "ada@example.com",
    phone: "+1 555 0100",
    referrer: "https://secret.example/hidden",
    page: "/pages/survey.html",
    submitted_at: "2000-01-01T00:00:00.000Z",
    utm_source: "newsletter",
  }), dbEnv);

  assert.equal(res.status, 200);
  assert.equal(res.headers.get("Access-Control-Allow-Origin"), ORIGIN);
  assert.deepEqual(await res.json(), { ok: true });

  const row = dbEnv.DB.responses[0];
  assert.match(row.id, /^[0-9a-f-]{36}$/);
  assert.match(row.created_at, /^\d{4}-\d{2}-\d{2}T/);
  assert.notEqual(row.created_at, "2000-01-01T00:00:00.000Z");
  assert.equal(row.role, "Office, payroll, or accounting");
  assert.equal(row.trade, JSON.stringify(["Snow and ice", "Tree care"]));
  assert.equal(row.method, JSON.stringify(["Paper timesheets"]));
  assert.equal(row.tools, "a spreadsheet");
  assert.equal(row.one_fix, "Stop guessing\ndrive time");
  assert.equal(row.email, "ada@example.com");
  assert.equal(row.referrer, undefined);
  assert.equal(row.page, undefined);
  assert.equal(JSON.stringify(row).includes("secret.example"), false);
  assert.equal(JSON.stringify(row).includes("203.0.113.10"), false);
  assert.equal([...dbEnv.DB.limits.keys()].some((key) => key.includes("203.0.113.10")), false);
});

test("drops the honeypot without storing a row", async () => {
  const dbEnv = env();
  const res = await worker.fetch(post({
    website: "https://spam.example",
    role: "not-a-real-role",
  }), dbEnv);
  assert.equal(res.status, 200);
  assert.equal(dbEnv.DB.responses.length, 0);
});

test("rejects unknown choices, bad email, too many pains, and empty forms", async () => {
  const cases = [
    { role: "Intern" },
    { email: "not-an-email" },
    { pain: ["Missed or forgotten punches", "Rounded or guessed hours", "Disputes over pay", "Other"] },
    {},
    { one_fix: "   " },
    { role_other: "x".repeat(201) },
    [],
    null,
  ];
  for (const body of cases) {
    const dbEnv = env();
    const res = await worker.fetch(post(body), dbEnv);
    assert.equal(res.status, 400, JSON.stringify(body));
    assert.equal(dbEnv.DB.responses.length, 0);
  }
  assert.equal(normalizeSubmission({ trust: "5" }).answers.trust, "5");
  assert.equal(normalizeSubmission({ website: "bot" }).honeypot, true);
});

test("refuses other origins and answers the preflight for the site", async () => {
  const dbEnv = env();
  const blocked = await worker.fetch(post({ role: "Crew member" }, { Origin: "https://evil.example" }), dbEnv);
  assert.equal(blocked.status, 403);
  assert.equal(blocked.headers.get("Access-Control-Allow-Origin"), null);
  assert.equal(dbEnv.DB.responses.length, 0);

  const missing = await worker.fetch(post({ role: "Crew member" }, { Origin: "" }), dbEnv);
  assert.equal(missing.status, 403);

  const preflight = await worker.fetch(new Request("https://survey.limosa.work/responses", {
    method: "OPTIONS",
    headers: { Origin: "https://www.limosa.work", "Access-Control-Request-Method": "POST" },
  }), dbEnv);
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get("Access-Control-Allow-Origin"), "https://www.limosa.work");
  assert.match(preflight.headers.get("Access-Control-Allow-Methods"), /POST/);

  const foreign = await worker.fetch(new Request("https://survey.limosa.work/responses", {
    method: "OPTIONS",
    headers: { Origin: "https://limosa.work.evil.com" },
  }), dbEnv);
  assert.equal(foreign.status, 403);
  assert.equal(foreign.headers.get("Access-Control-Allow-Origin"), null);
});

test("rate limits per IP and globally", async () => {
  const perIp = env({ PER_IP_LIMIT: "2", GLOBAL_PER_HOUR: "100" });
  for (let i = 0; i < 2; i++) {
    const res = await worker.fetch(post({ role: "Crew member" }), perIp);
    assert.equal(res.status, 200);
  }
  const third = await worker.fetch(post({ role: "Crew member" }), perIp);
  assert.equal(third.status, 429);
  assert.equal(third.headers.get("Retry-After"), "3600");
  assert.equal(perIp.DB.responses.length, 2);

  const global = env({ PER_IP_LIMIT: "100", GLOBAL_PER_HOUR: "2" });
  for (let i = 0; i < 2; i++) {
    const res = await worker.fetch(post({ role: "Crew lead or foreman" }, { "CF-Connecting-IP": `203.0.113.${i}` }), global);
    assert.equal(res.status, 200);
  }
  const capped = await worker.fetch(post({ role: "Crew lead or foreman" }, { "CF-Connecting-IP": "203.0.113.99" }), global);
  assert.equal(capped.status, 429);
  assert.equal(global.DB.responses.length, 2);
});

test("does not store the IP when the export token is unset", async () => {
  const dbEnv = env({ EXPORT_TOKEN: undefined });
  const res = await worker.fetch(post({ company: "Field Co" }), dbEnv);
  assert.equal(res.status, 200);
  const keys = [...dbEnv.DB.limits.keys()];
  assert.equal(keys.length, 1);
  assert.match(keys[0], /^global\|/);
});

test("rejects oversized and non-JSON bodies", async () => {
  const dbEnv = env();
  const big = await worker.fetch(post(JSON.stringify({ one_fix: "x".repeat(20 * 1024) })), dbEnv);
  assert.equal(big.status, 413);
  assert.equal(dbEnv.DB.responses.length, 0);

  const text = await worker.fetch(post("hello", { "Content-Type": "text/plain" }), dbEnv);
  assert.equal(text.status, 415);
});

test("CSV export requires the bearer token and flattens answers", async () => {
  const dbEnv = env();
  await worker.fetch(post({
    role: "Crew member",
    trade: ["Landscape maintenance", "Other"],
    one_fix: 'He said "hours"',
    name: "=HYPERLINK(\"http://evil\")",
    email: "ada@example.com",
  }), dbEnv);

  const denied = await worker.fetch(new Request("https://survey.limosa.work/export.csv"), dbEnv);
  assert.equal(denied.status, 401);

  const wrong = await worker.fetch(new Request("https://survey.limosa.work/export.csv", {
    headers: { Authorization: "Bearer nope" },
  }), dbEnv);
  assert.equal(wrong.status, 401);

  const ok = await worker.fetch(new Request("https://survey.limosa.work/export.csv", {
    headers: { Authorization: `Bearer ${TOKEN}` },
  }), dbEnv);
  assert.equal(ok.status, 200);
  assert.match(ok.headers.get("Content-Type"), /text\/csv/);
  const bytes = new Uint8Array(await ok.arrayBuffer());
  assert.deepEqual([bytes[0], bytes[1], bytes[2]], [0xef, 0xbb, 0xbf]);
  const csv = new TextDecoder().decode(bytes.subarray(3));
  assert.match(csv, /created_at/);
  assert.match(csv, /Crew member/);
  assert.match(csv, /Landscape maintenance; Other/);
  assert.match(csv, /"He said ""hours"""/);
  assert.match(csv, /'=HYPERLINK/);
  assert.equal(csv.includes("203.0.113.10"), false);
  assert.equal(csv.includes("referrer"), false);
});

test("toCsv escapes commas and keeps an empty export to a header", () => {
  const csv = toCsv([{ role: "Office, payroll, or accounting", created_at: "2026-11-14T00:00:00.000Z", id: "1" }]);
  assert.match(csv, /"Office, payroll, or accounting"/);
  const empty = toCsv([]);
  assert.equal(empty.startsWith(`\uFEFFid,created_at,`), true);
});

test("schema matches the stored fields and has no extra personal data", () => {
  const schema = readFileSync(new URL("../schema.sql", import.meta.url), "utf8");
  for (const name of ["id", "created_at", "role", "trade", "pain", "one_fix", "email", "phone"]) {
    assert.match(schema, new RegExp(`\\b${name}\\b`));
  }
  assert.doesNotMatch(schema, /user_agent|referrer|submitted_at|cf_connecting/i);
});

test("health stays free of response data", async () => {
  const res = await worker.fetch(new Request("https://survey.limosa.work/health"));
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true });
});
