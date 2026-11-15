-- Survey responses. Apply once after creating the database:
--   npx wrangler d1 execute limosa-survey --remote --file=schema.sql

CREATE TABLE IF NOT EXISTS responses (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  role TEXT,
  role_other TEXT,
  trade TEXT,
  trade_other TEXT,
  field_headcount TEXT,
  method TEXT,
  method_other TEXT,
  tools TEXT,
  job_costing TEXT,
  trust TEXT,
  pain TEXT,
  pain_other TEXT,
  fix_hours TEXT,
  one_fix TEXT,
  name TEXT,
  company TEXT,
  email TEXT,
  phone TEXT,
  early_access TEXT
);

CREATE INDEX IF NOT EXISTS idx_responses_created_at ON responses (created_at);

-- Hour buckets for rate limiting. ip_hash is an HMAC, never the client IP.
CREATE TABLE IF NOT EXISTS rate_limits (
  ip_hash TEXT NOT NULL,
  window INTEGER NOT NULL,
  count INTEGER NOT NULL,
  PRIMARY KEY (ip_hash, window)
);
