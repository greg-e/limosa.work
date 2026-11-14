import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";

const script = readFileSync(new URL("../../assets/js/survey.js", import.meta.url), "utf8");

function matches(el, selector) {
  return selector.split(",").some((part) => matchesSimple(el, part.trim()));
}

function matchesSimple(el, selector) {
  let sel = selector;
  let checked = false;
  if (sel.endsWith(":checked")) {
    checked = true;
    sel = sel.slice(0, -":checked".length);
  }
  if (sel.startsWith("[") && sel.endsWith("]") && !sel.includes("=")) {
    return el.attrs[sel.slice(1, -1)] != null && (!checked || el.checked);
  }
  let tag = "";
  let cls = "";
  const attrs = {};
  if (sel.startsWith(".")) {
    cls = sel.slice(1);
  } else {
    const tagMatch = sel.match(/^([a-zA-Z0-9]+)?([\s\S]*)$/);
    tag = tagMatch[1] || "";
    let rest = tagMatch[2] || "";
    if (rest.startsWith(".")) {
      cls = rest.slice(1);
      rest = "";
    }
    const attrRe = /\[([^\]=]+)="([^"]*)"\]/g;
    let found;
    while ((found = attrRe.exec(rest))) attrs[found[1]] = found[2];
  }
  if (tag && el.tag !== tag) return false;
  if (cls && !el.classList.contains(cls)) return false;
  for (const [key, value] of Object.entries(attrs)) {
    if (String(el.attrs[key]) !== value && String(el[key] ?? "") !== value) return false;
  }
  if (checked && !el.checked) return false;
  return true;
}

class ClassList {
  constructor(el) { this.el = el; }
  contains(name) { return this.el.classes.has(name); }
  toggle(name, on) {
    const force = on === undefined ? !this.el.classes.has(name) : Boolean(on);
    if (force) this.el.classes.add(name);
    else this.el.classes.delete(name);
    return force;
  }
}

class El {
  constructor(tag, attrs = {}) {
    this.tag = tag;
    this.attrs = { ...attrs };
    this.children = [];
    this.classes = new Set((attrs.class || "").split(/\s+/).filter(Boolean));
    this.classList = new ClassList(this);
    this.hidden = Boolean(attrs.hidden);
    this.value = attrs.value || "";
    this.checked = false;
    this.disabled = false;
    this.type = attrs.type || "";
    this.name = attrs.name || "";
    this.textContent = "";
    this.listeners = {};
  }
  getAttribute(name) { return this.attrs[name] ?? null; }
  addEventListener(type, fn) { (this.listeners[type] ||= []).push(fn); }
  dispatchEvent(event) {
    for (const fn of this.listeners[event.type] || []) fn(event);
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  querySelectorAll(selector) {
    const out = [];
    const walk = (node) => {
      for (const child of node.children) {
        if (matches(child, selector)) out.push(child);
        walk(child);
      }
    };
    walk(this);
    return out;
  }
  focus() { this.focused = true; }
  checkValidity() {
    if (this.type === "email" && this.value) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
    return true;
  }
}

function h(tag, attrs, children = []) {
  const el = new El(tag, attrs);
  for (const child of children) {
    child.parent = el;
    el.children.push(child);
  }
  return el;
}

function mount(attrs = {}) {
  const calls = [];
  const role = h("input", { type: "radio", name: "role", value: "Crew member" });
  const email = h("input", { type: "email", name: "email" });
  const website = h("input", { type: "text", name: "website" });
  const status = h("p", { class: "survey-status" });
  const button = h("button", { type: "submit" });
  const form = h("form", {
    id: "time-survey",
    "data-endpoint": "https://survey.limosa.work/responses",
    "data-fallback-email": "greg@limosa.work",
    ...attrs,
  }, [
    h("label", {}, [role]),
    email,
    website,
    status,
    button,
  ]);
  const intro = h("header", { class: "survey-intro" });
  const thanks = h("section", { class: "survey-thanks", hidden: true });
  const document = h("document", {}, [intro, form, thanks]);
  document.referrer = "https://secret.example/from";
  document.getElementById = (id) => document.querySelectorAll(`[id="${id}"]`)[0] || null;
  document.querySelector = (selector) => document.querySelectorAll(selector)[0] || null;

  const location = { search: "?utm_source=newsletter", pathname: "/pages/survey.html", href: "https://limosa.work/pages/survey.html" };
  const context = {
    document,
    location,
    window: { scrollTo() {}, location },
    URLSearchParams,
    AbortController,
    setTimeout,
    clearTimeout,
    fetch(...args) {
      calls.push(args);
      return context.fetchImpl(...args);
    },
    fetchImpl: async () => ({ ok: true, status: 200 }),
    FormData: class {
      constructor(target) {
        this.pairs = [];
        const walk = (node) => {
          for (const child of node.children) {
            const isChoice = child.type === "radio" || child.type === "checkbox";
            if (child.name && !child.disabled && child.tag !== "button" && (!isChoice || child.checked)) {
              this.pairs.push([child.name, child.value]);
            }
            walk(child);
          }
        };
        walk(target);
      }
      forEach(fn) { for (const [key, value] of this.pairs) fn(value, key); }
    },
  };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(script, context);
  return { form, role, email, website, status, button, intro, thanks, location, calls, context };
}

async function flush() {
  await new Promise((resolve) => setTimeout(resolve, 0));
}

function submit(form) {
  form.dispatchEvent({ type: "submit", preventDefault() {} });
}

test("a saved response shows the thank-you state and omits extra fields", async () => {
  const page = mount();
  page.role.checked = true;
  submit(page.form);
  await flush();
  assert.equal(page.calls.length, 1);
  const [url, opts] = page.calls[0];
  assert.equal(url, "https://survey.limosa.work/responses");
  assert.equal(opts.method, "POST");
  assert.equal(opts.referrerPolicy, "no-referrer");
  const body = JSON.parse(opts.body);
  assert.equal(body.role, "Crew member");
  assert.equal(body.referrer, undefined);
  assert.equal(body.utm_source, undefined);
  assert.equal(body.submitted_at, undefined);
  assert.equal(page.form.hidden, true);
  assert.equal(page.intro.hidden, true);
  assert.equal(page.thanks.hidden, false);
  assert.equal(page.location.href.startsWith("mailto:"), false);
});

test("a failed save opens the email draft and shows an error", async () => {
  const page = mount();
  page.context.fetchImpl = async () => { throw new Error("down"); };
  page.role.checked = true;
  submit(page.form);
  await flush();
  assert.equal(page.form.hidden, false);
  assert.equal(page.thanks.hidden, true);
  assert.equal(page.status.classList.contains("is-error"), true);
  assert.match(page.status.textContent, /email app should open/);
  assert.equal(page.button.disabled, false);
  const href = decodeURIComponent(page.location.href);
  assert.match(href, /^mailto:greg@limosa.work\?subject=How we track time&body=/);
  assert.match(href, /role: Crew member/);
  assert.match(href, /utm_source: newsletter/);
  assert.match(href, /referrer: https:\/\/secret.example\/from/);
});

test("an HTTP error uses the same email fallback", async () => {
  const page = mount();
  page.context.fetchImpl = async () => ({ ok: false, status: 503 });
  page.role.checked = true;
  submit(page.form);
  await flush();
  assert.match(page.location.href, /^mailto:greg@limosa.work/);
  assert.equal(page.status.classList.contains("is-error"), true);
});

test("with no endpoint the form only opens the email draft", async () => {
  const page = mount({ "data-endpoint": "" });
  page.role.checked = true;
  submit(page.form);
  await flush();
  assert.equal(page.calls.length, 0);
  assert.match(page.location.href, /^mailto:greg@limosa.work/);
  assert.equal(page.thanks.hidden, false);
});

test("empty, invalid, and honeypot submits never call the backend", async () => {
  const empty = mount();
  submit(empty.form);
  await flush();
  assert.equal(empty.calls.length, 0);
  assert.match(empty.status.textContent, /at least one question/);

  const bad = mount();
  bad.role.checked = true;
  bad.email.value = "not-an-email";
  submit(bad.form);
  await flush();
  assert.equal(bad.calls.length, 0);
  assert.match(bad.status.textContent, /doesn't look right/);
  assert.equal(bad.email.focused, true);

  const bot = mount();
  bot.role.checked = true;
  bot.website.value = "https://spam.example";
  submit(bot.form);
  await flush();
  assert.equal(bot.calls.length, 0);
  assert.equal(bot.thanks.hidden, false);
  assert.equal(bot.location.href.startsWith("mailto:"), false);
});

test("the page keeps its questions and points at the configured endpoint", () => {
  const html = readFileSync(new URL("../../pages/survey.html", import.meta.url), "utf8");
  const config = readFileSync(new URL("../../_config.yml", import.meta.url), "utf8");
  for (const line of [
    "What's your role?",
    "What kind of work does your company do?",
    "How many people work in the field during your busy season?",
    "How do you record hours today?",
    "Do you track time against individual jobs or properties?",
    "How much do you trust the hours you get?",
    "What causes the most trouble?",
    "how long does someone spend fixing or chasing timecards?",
    "If you could fix one thing about how time gets tracked, what would it be?",
    "Can we follow up?",
    'name="website"',
  ]) {
    assert.equal(html.includes(line), true, line);
  }
  assert.match(html, /data-endpoint="\{\{ site\.survey_endpoint \| escape \}\}"/);
  assert.match(config, /survey_endpoint:\s*"https:\/\/survey\.limosa\.work\/responses"/);
  assert.match(config, /^ {2}- worker$/m);
});
