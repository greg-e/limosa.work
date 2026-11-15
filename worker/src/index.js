// Survey storage for limosa.work. One Worker, one D1 database, no framework.
// Stores only the answers the form already asks for, plus an id and a server timestamp.
// The client IP is hashed for rate limiting and is not written to the responses table.

export const ALLOWED_ORIGINS = new Set([
  "https://limosa.work",
  "https://www.limosa.work",
]);

export const LIMITS = {
  bodyBytes: 16 * 1024,
  perIpPerHour: 10,
  globalPerHour: 200,
};

export const ANSWER_FIELDS = [
  "role",
  "role_other",
  "trade",
  "trade_other",
  "field_headcount",
  "method",
  "method_other",
  "tools",
  "job_costing",
  "trust",
  "pain",
  "pain_other",
  "fix_hours",
  "one_fix",
  "name",
  "company",
  "email",
  "phone",
  "early_access",
];

const ENUMS = {
  role: [
    "Owner or general manager",
    "Office, payroll, or accounting",
    "Operations or account manager",
    "Crew lead or foreman",
    "Crew member",
    "Other",
  ],
  field_headcount: ["1-5", "6-20", "21-50", "51-200", "200+"],
  job_costing: [
    "Yes, every visit",
    "Some jobs or some crews",
    "We estimate from the schedule",
    "Total hours only",
  ],
  trust: ["1", "2", "3", "4", "5"],
  fix_hours: ["None", "Under 1 hour", "1-3 hours", "3-8 hours", "8+ hours"],
  early_access: ["Yes"],
};

const MULTIS = {
  trade: {
    max: 7,
    values: [
      "Landscape maintenance",
      "Landscape installation or hardscape",
      "Snow and ice",
      "Tree care",
      "Construction or trades",
      "Cleaning or facilities",
      "Other",
    ],
  },
  method: {
    max: 7,
    values: [
      "Paper timesheets",
      "Punch clock or kiosk at the shop",
      "Phone app clock-in",
      "GPS or vehicle tracking",
      "Crew lead reports hours for the crew",
      "Spreadsheet",
      "Other",
    ],
  },
  pain: {
    max: 3,
    values: [
      "Missed or forgotten punches",
      "Rounded or guessed hours",
      "Payroll corrections after the fact",
      "Disputes over pay",
      "No clear cost per job or property",
      "Drive time and shop time are a blur",
      "Crews push back on tracking",
      "Office time spent chasing timesheets",
      "Other",
    ],
  },
};

const TEXT = {
  role_other: 200,
  trade_other: 200,
  method_other: 200,
  tools: 300,
  pain_other: 200,
  one_fix: 4000,
  name: 200,
  company: 200,
  email: 254,
  phone: 40,
};

const MULTI_FIELDS = new Set(Object.keys(MULTIS));
const COLUMNS = ["id", "created_at", ...ANSWER_FIELDS];
const KNOWN_KEYS = new Set([...ANSWER_FIELDS, "website"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INSERT_SQL = `INSERT INTO responses (${COLUMNS.join(", ")}) VALUES (${COLUMNS.map(() => "?").join(", ")})`;
const SELECT_SQL = `SELECT ${COLUMNS.join(", ")} FROM responses ORDER BY created_at ASC`;
const RATE_SQL = `INSERT INTO rate_limits (ip_hash, window, count) VALUES (?, ?, 1)
ON CONFLICT(ip_hash, window) DO UPDATE SET count = count + 1
RETURNING count`;

export function normalizeSubmission(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { error: "invalid" };
  }

  const raw = Object.create(null);
  for (const key of Object.keys(input)) {
    if (KNOWN_KEYS.has(key)) raw[key] = input[key];
  }

  if (isFilled(raw.website)) return { honeypot: true };

  const answers = Object.create(null);
  for (const field of ANSWER_FIELDS) {
    if (!Object.prototype.hasOwnProperty.call(raw, field)) continue;
    const parsed = parseField(field, raw[field]);
    if (parsed.error) return { error: "invalid" };
    if (parsed.value == null) continue;
    answers[field] = parsed.value;
  }

  if (Object.keys(answers).length === 0) return { error: "invalid" };
  return { answers };
}

export function toCsv(rows) {
  const lines = [COLUMNS.map(csvCell).join(",")];
  for (const row of rows) {
    lines.push(COLUMNS.map((col) => csvCell(displayCell(col, row[col]))).join(","));
  }
  return `\uFEFF${lines.join("\r\n")}\r\n`;
}

export default {
  async fetch(request, env) {
    try {
      return await route(request, env);
    } catch (err) {
      console.error("survey worker failed", err && err.name);
      return json({ ok: false, error: "unavailable" }, 500, request.headers.get("Origin"));
    }
  },
};

async function route(request, env) {
  const origin = request.headers.get("Origin");
  const path = normalizePath(request);

  if (path === "/health" && request.method === "GET") {
    return json({ ok: true }, 200, null);
  }

  if (path === "/export.csv") {
    if (request.method !== "GET") return json({ ok: false, error: "method" }, 405, null);
    return exportCsv(request, env);
  }

  if (path === "/responses") {
    if (request.method === "OPTIONS") return preflight(origin);
    if (request.method !== "POST") return json({ ok: false, error: "method" }, 405, origin);
    return handlePost(request, env, origin);
  }

  return json({ ok: false, error: "not_found" }, 404, origin);
}

async function handlePost(request, env, origin) {
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return json({ ok: false, error: "forbidden" }, 403, null);
  }
  if (!env.DB) return json({ ok: false, error: "unavailable" }, 503, origin);

  const type = (request.headers.get("Content-Type") || "").split(";")[0].trim().toLowerCase();
  if (type !== "application/json") return json({ ok: false, error: "invalid" }, 415, origin);

  const declared = Number(request.headers.get("Content-Length") || 0);
  if (declared > LIMITS.bodyBytes) return json({ ok: false, error: "too_large" }, 413, origin);

  const bytes = await readCapped(request, LIMITS.bodyBytes);
  if (!bytes) return json({ ok: false, error: "too_large" }, 413, origin);

  const limited = await overRateLimit(request, env);

  let input;
  try {
    input = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    if (limited) return rateLimited(origin);
    return json({ ok: false, error: "invalid" }, 400, origin);
  }

  const result = normalizeSubmission(input);

  // Bots that fill the honeypot get the same response as a real save.
  if (result.honeypot) return json({ ok: true }, 200, origin);
  if (limited) return rateLimited(origin);
  if (result.error) return json({ ok: false, error: "invalid" }, 400, origin);

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  await env.DB.prepare(INSERT_SQL).bind(...rowValues(id, createdAt, result.answers)).run();
  return json({ ok: true }, 200, origin);
}

async function exportCsv(request, env) {
  if (!env.DB || !env.EXPORT_TOKEN) return json({ ok: false, error: "unauthorized" }, 401, null);
  const provided = bearer(request);
  if (!(await tokenMatches(provided, env.EXPORT_TOKEN))) {
    return json({ ok: false, error: "unauthorized" }, 401, null);
  }
  const { results } = await env.DB.prepare(SELECT_SQL).all();
  return new Response(toCsv(results || []), {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="survey-responses.csv"',
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

async function overRateLimit(request, env) {
  const window = Math.floor(Date.now() / 3_600_000);
  const caps = [
    ["global", intEnv(env.GLOBAL_PER_HOUR, LIMITS.globalPerHour)],
  ];
  const ipHash = await clientHash(request, env);
  if (ipHash) caps.push([ipHash, intEnv(env.PER_IP_LIMIT, LIMITS.perIpPerHour)]);

  let limited = false;
  for (const [hash, cap] of caps) {
    const row = await env.DB.prepare(RATE_SQL).bind(hash, window).first();
    if (row && row.count > cap) limited = true;
  }
  await env.DB.prepare("DELETE FROM rate_limits WHERE window < ?").bind(window - 48).run();
  return limited;
}

async function clientHash(request, env) {
  const ip = request.headers.get("CF-Connecting-IP") || "";
  if (!ip || !env.EXPORT_TOKEN) return null;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(env.EXPORT_TOKEN),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(ip));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function rowValues(id, createdAt, answers) {
  return COLUMNS.map((col) => {
    if (col === "id") return id;
    if (col === "created_at") return createdAt;
    const value = answers[col];
    if (value == null) return null;
    if (Array.isArray(value)) return JSON.stringify(value);
    return value;
  });
}

function parseField(field, value) {
  if (Object.prototype.hasOwnProperty.call(ENUMS, field)) return parseEnum(value, ENUMS[field]);
  if (Object.prototype.hasOwnProperty.call(MULTIS, field)) return parseMulti(value, MULTIS[field]);
  if (field === "one_fix") return parseBlock(value, TEXT.one_fix);
  const parsed = parseLine(value, TEXT[field]);
  if (field === "email" && parsed.value && !EMAIL.test(parsed.value)) return { error: true };
  return parsed;
}

function rateLimited(origin) {
  return json({ ok: false, error: "rate_limited" }, 429, origin, { "Retry-After": "3600" });
}

async function readCapped(request, max) {
  if (!request.body) return new Uint8Array();
  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > max) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return out;
}

function parseEnum(value, allowed) {
  if (typeof value !== "string") return { error: true };
  const cleaned = value.trim();
  if (!cleaned) return { value: null };
  if (!allowed.includes(cleaned)) return { error: true };
  return { value: cleaned };
}

function parseMulti(value, spec) {
  const items = typeof value === "string" ? [value] : value;
  if (!Array.isArray(items)) return { error: true };
  const out = [];
  for (const item of items) {
    if (typeof item !== "string") return { error: true };
    const cleaned = item.trim();
    if (!cleaned) continue;
    if (!spec.values.includes(cleaned)) return { error: true };
    if (!out.includes(cleaned)) out.push(cleaned);
  }
  if (out.length > spec.max) return { error: true };
  if (out.length === 0) return { value: null };
  return { value: out };
}

function parseLine(value, max) {
  if (typeof value !== "string") return { error: true };
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  if (!cleaned) return { value: null };
  if (cleaned.length > max) return { error: true };
  return { value: cleaned };
}

function parseBlock(value, max) {
  if (typeof value !== "string") return { error: true };
  const cleaned = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
  if (!cleaned) return { value: null };
  if (cleaned.length > max) return { error: true };
  return { value: cleaned };
}

function isFilled(value) {
  if (typeof value === "string") return value.trim() !== "";
  return value != null && value !== false;
}

function displayCell(col, value) {
  if (value == null) return "";
  if (MULTI_FIELDS.has(col)) {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed.join("; ");
    } catch {
      // Keep the stored text if it is not JSON.
    }
  }
  return String(value);
}

function csvCell(value) {
  if (value == null) return "";
  let text = String(value);
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function preflight(origin) {
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return new Response(null, { status: 403, headers: baseHeaders(null) });
  }
  return new Response(null, {
    status: 204,
    headers: {
      ...baseHeaders(origin),
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
    },
  });
}

function json(body, status, origin, extra) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...baseHeaders(origin),
      ...(extra || {}),
    },
  });
}

function baseHeaders(origin) {
  const headers = {
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
  }
  return headers;
}

function normalizePath(request) {
  let path = new URL(request.url).pathname;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path;
}

function bearer(request) {
  const header = request.headers.get("Authorization") || "";
  const match = /^Bearer\s+(\S+)\s*$/i.exec(header);
  return match ? match[1] : "";
}

async function tokenMatches(provided, expected) {
  if (!provided || !expected) return false;
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(provided)),
    crypto.subtle.digest("SHA-256", enc.encode(expected)),
  ]);
  const left = new Uint8Array(a);
  const right = new Uint8Array(b);
  let mismatch = 0;
  for (let i = 0; i < left.length; i++) mismatch |= left[i] ^ right[i];
  return mismatch === 0;
}

function intEnv(value, fallback) {
  const n = Number(value);
  if (!Number.isInteger(n) || n < 1 || n > 100_000) return fallback;
  return n;
}
