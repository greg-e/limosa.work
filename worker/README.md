# Survey backend

A Cloudflare Worker stores answers from the time-tracking survey. The site itself stays a static Jekyll site on GitHub Pages. The form POSTs JSON to this Worker. If that request fails, the page opens the existing email draft so the answer is not lost.

## Why this and not a server

A Worker plus [D1](https://developers.cloudflare.com/d1/) (SQLite) fits a single form: no process to keep running, no framework, and the free tier covers a survey (100,000 Worker requests a day, and D1 storage well past any reasonable number of responses). Rate limiting lives in D1, so it does not need the paid Workers rate-limiting add-on. The CSV download is one protected route.

The Worker's `workers.dev` hostname needs no DNS change. That matters because limosa.work currently points at GitHub Pages. Moving the domain's nameservers is optional and easy to get wrong.

## What is stored

Each row has `id`, `created_at` (UTC, set by the Worker), and the survey fields: role, trade, crew size, how hours are recorded, job costing, trust, troubles, time spent fixing timecards, the one thing to fix, and the optional name, company, email, and phone.

Not stored: IP address, user agent, cookies, referrer, the page path, or the honeypot. The IP is used only to build an HMAC for the hourly rate limit, and only after `EXPORT_TOKEN` is set. The hash is not reversible from the database alone and is not included in the CSV.

Limits: 16 KB per request, answers must match the form's choices, text fields are length-capped, the honeypot field `website` is discarded, browsers may call the Worker only from `https://limosa.work` and `https://www.limosa.work`, 10 saves per IP per hour, and 200 saves per hour overall.

## Deploy

You need a free Cloudflare account and Node.js. From this directory:

```bash
npx wrangler@4 login
npx wrangler@4 d1 create limosa-survey
```

`wrangler.toml` already has the D1 database id for this account. Database ids are not secret. Create the tables if you have not, and set the export secret. Wrangler will prompt for the token; paste it so it is not stored in your shell history.

```bash
npx wrangler@4 d1 execute limosa-survey --remote --file=schema.sql
openssl rand -base64 32
npx wrangler@4 secret put EXPORT_TOKEN
npx wrangler@4 deploy
```

The deployed Worker is at `https://limosa-survey.limosa.workers.dev`. The submit endpoint is `https://limosa-survey.limosa.workers.dev/responses`.

Check it:

```bash
curl -sS https://limosa-survey.limosa.workers.dev/health
```

A healthy Worker returns `{"ok":true}`.

## Point the site at it

The form reads `survey_endpoint` in the repo root `_config.yml`. It is set to `https://limosa-survey.limosa.workers.dev/responses`, the deployed Worker. GitHub Pages picks that up when this change is on `main`.

A successful save shows the thank-you screen. If that URL does not answer, submitting shows an error and opens the email draft instead. The answers are in that draft.

### Custom hostname

Attach `survey.limosa.work` only after limosa.work is on the same Cloudflare account as the Worker:

```bash
npx wrangler@4 domains add survey.limosa.work
```

The apex currently resolves to GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153). The SOA is on GoDaddy nameservers (`domaincontrol.com`). If you move nameservers to Cloudflare, copy those four A records first or the website goes down. Using the `workers.dev` URL instead avoids that DNS change. No other DNS record is required.

## Read the responses

CSV, using the same token you set as `EXPORT_TOKEN`:

```bash
curl -sS \
  -H "Authorization: Bearer $EXPORT_TOKEN" \
  -o survey-responses.csv \
  https://limosa-survey.limosa.workers.dev/export.csv
```

Do not put the token in the URL. A wrong or missing token gets `401`. The file opens in a spreadsheet; `created_at` is the first data column after `id`.

The same rows are visible with your Cloudflare login, without the token:

```bash
npx wrangler@4 d1 execute limosa-survey --remote \
  --command "SELECT created_at, role, company, email FROM responses ORDER BY created_at;"
```

## Local development

```bash
cp .dev.vars.example .dev.vars
npx wrangler@4 d1 execute limosa-survey --local --file=schema.sql
npx wrangler@4 dev
```

Edit `.dev.vars` and put in a token. `.dev.vars` is gitignored.

Run the tests with `node --test` from this directory. They do not need Cloudflare.

## Secrets

| Name | Where it lives | Purpose |
| --- | --- | --- |
| `EXPORT_TOKEN` | `wrangler secret put`, or `.dev.vars` locally | Protects `GET /export.csv`. Also the HMAC key for per-IP rate limits. |

Nothing else is secret. Do not commit `.dev.vars` or a real token.
