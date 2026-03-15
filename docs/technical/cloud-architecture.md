# Cloud Architecture

## Overview

The Actual cloud layer has one job at prototype stage: ingest badge events, bind them
to parcel geometries, and make the resulting data available to Power BI.

It is not trying to be a general-purpose IoT platform. Scope is deliberately narrow.
Every component serves either ingestion, geofencing, or reporting — nothing else.

---

## Infrastructure (Azure)

```
Azure Resource Group: rg-actual-{env}
├── Azure Functions App — func-actual-ingest-{env}
│   ├── POST /events  (ingest API)
│   └── Timer trigger — geofencing job (every 5 min)
│
├── Azure Database for PostgreSQL Flexible Server — psql-actual-{env}
│   └── Database: actual_db
│       └── Schema: actual (all tables; see database-schema.md)
│
├── Azure Key Vault — kv-actual-{env}
│   ├── db-connection-string
│   ├── ingest-api-key
│   └── notehub-webhook-secret
│
├── Azure Storage Account — stactual{env}
│   └── Blob container: firmware-updates (OTA firmware binaries)
│
└── Application Insights — appi-actual-{env}
    └── Telemetry for API latency, error rates, function execution
```

Environment naming: `{env}` = `dev` | `staging` | `prod`

---

## Azure Functions

### Ingest API — `POST /events`

**Trigger:** HTTP (POST)
**Auth:** API key in `X-Actual-Api-Key` header
**Input:** JSON array of badge events (see event-schema.md)
**Output:** HTTP 202 with accepted event count, or 400/207 on validation failures

```python
# Function signature (Python)
@app.route(route="events", methods=["POST"], auth_level=func.AuthLevel.ANONYMOUS)
def ingest_events(req: func.HttpRequest) -> func.HttpResponse:
    ...
```

Note: Auth is handled at the application level (API key validation), not at the
Azure Function auth level. `ANONYMOUS` auth level means Azure does not enforce a
function key — our application key takes over.

**Processing steps:**
1. Read raw body
2. Validate `X-Actual-Api-Key` header against value in Key Vault
3. Parse JSON array; reject if not array or if array length > 500
4. For each event in array:
   a. Validate required envelope fields
   b. Validate `event_type` is in allowed set
   c. Validate `timestamp_utc` is valid ISO 8601
   d. Validate `sequence_number` is positive integer
5. Classify events: valid vs. invalid
6. Batch INSERT valid events to `raw_events` using `ON CONFLICT (device_id, sequence_number) DO NOTHING`
7. Return 202 if all valid, 207 if partial, 400 if all invalid

**Response format:**

```json
{
  "accepted": 47,
  "rejected": 2,
  "rejected_events": [
    {
      "sequence_number": 1089,
      "reason": "Invalid event_type: 'gps_update'"
    }
  ]
}
```

---

### Geofencing Job — Timer Trigger

**Trigger:** Timer (every 5 minutes: `0 */5 * * * *`)
**Purpose:** Bind unprocessed GPS events to parcel polygons

```python
@app.schedule(schedule="0 */5 * * * *", arg_name="timer")
def geofencing_job(timer: func.TimerRequest) -> None:
    ...
```

**Processing steps:**
1. Query `raw_events` for unprocessed GPS events:
   ```sql
   SELECT re.*
   FROM actual.raw_events re
   LEFT JOIN actual.canonical_events ce ON ce.raw_event_id = re.id
   WHERE re.event_type = 'gps'
     AND ce.id IS NULL
   ORDER BY re.event_timestamp
   LIMIT 1000;
   ```
2. For each GPS event, run point-in-polygon:
   ```sql
   SELECT parcel_id
   FROM actual.parcels
   WHERE company_id = $1
     AND ST_Contains(geom, ST_SetSRID(ST_MakePoint($lon, $lat), 4326))
   LIMIT 1;
   ```
3. Resolve `worker_id` from active shift at event timestamp:
   ```sql
   SELECT payload->>'worker_id' AS worker_id
   FROM actual.raw_events
   WHERE device_id = $1
     AND event_type = 'shift_start'
     AND event_timestamp <= $event_timestamp
   ORDER BY event_timestamp DESC
   LIMIT 1;
   ```
4. Write to `canonical_events` (parcel_id may be NULL if no polygon matched)
5. Log count of bound vs. unbound events to Application Insights

**Performance note:** The PostGIS GIST index on `parcels.geom` handles the spatial
query efficiently. At prototype scale (< 10 customers, < 100 parcels each), this
runs in < 1ms per event. At 1,000+ parcels, test and add a bounding-box pre-filter
if query time degrades.

---

## PostgreSQL Configuration

**Service:** Azure Database for PostgreSQL Flexible Server
**Tier:** Burstable B2s (2 vCore, 4 GiB RAM) — adequate for prototype; scale up
at 10+ customers
**Extensions required:**
```sql
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS pg_trgm; -- for text search on worker_id (future)
```

**Connection pooling:** Use PgBouncer in transaction mode if connection count exceeds
50 concurrent. Azure Flexible Server supports built-in PgBouncer via configuration
flag — enable before first production customer.

**Backup:** Automated backup enabled, 7-day retention (default). Increase to 35 days
before first enterprise customer.

---

## Key Vault

All secrets accessed via managed identity. The Azure Functions app has a
system-assigned managed identity with `Key Vault Secrets User` role.

**No secrets in code or config files.** Reference secrets in function app settings
as Key Vault references:

```
@Microsoft.KeyVault(VaultName=kv-actual-prod;SecretName=db-connection-string)
```

**Secrets inventory:**

| Secret name | Description | Rotation trigger |
|-------------|-------------|-----------------|
| `db-connection-string` | PostgreSQL connection string | Quarterly or on staff change |
| `ingest-api-key` | Shared secret for badge-to-cloud auth | On device firmware update |
| `notehub-webhook-secret` | HMAC secret for Blues Notehub webhook validation | Quarterly |

---

## Blues Notehub Routing

The Blues Notecard does not POST directly to the Azure ingest API. It posts to
Blues Notehub (Blues's managed cloud router), which then forwards to the ingest API.

**Notehub routing configuration:**
- Route type: HTTP/HTTPS
- URL: `https://func-actual-ingest-prod.azurewebsites.net/api/events`
- Method: POST
- Custom header: `X-Actual-Api-Key: {ingest-api-key}`
- Retry on failure: yes (Notehub queues and retries failed webhook deliveries)
- Transform: None (forward raw Notecard JSON; the ingest API handles transformation)

**Notehub event format:** Blues Notehub wraps the Notecard payload in a Notehub
envelope. The ingest API must unwrap this. The outer envelope fields to be aware of:

```json
{
  "device": "dev:000000000000000",
  "product": "product:com.blues.actual",
  "received": 1741947600.0,
  "body": { /* the actual event payload */ },
  "note": "data.qo"
}
```

The ingest API extracts `body` and processes it as the badge event. `received` is
the Notehub receipt time (not the badge event timestamp — `timestamp_utc` inside
`body` is the authoritative time).

---

## Session Assembly — Gap-Based Detection

The `work_sessions` materialized view in the database schema uses a simplified
grouping. The cloud engineer must replace it with proper gap-based session detection
using window functions.

**Target logic:**

A session is a contiguous sequence of GPS events for a given (worker_id, parcel_id)
pair where no gap between consecutive events exceeds a threshold (default: 20 minutes).

```sql
-- Gap detection pattern
WITH ordered_events AS (
    SELECT
        worker_id,
        parcel_id,
        company_id,
        event_timestamp,
        LAG(event_timestamp) OVER (
            PARTITION BY worker_id, parcel_id
            ORDER BY event_timestamp
        ) AS prev_timestamp
    FROM actual.canonical_events
    WHERE event_type = 'gps'
      AND parcel_id IS NOT NULL
      AND worker_id IS NOT NULL
),
session_starts AS (
    SELECT *,
        CASE
            WHEN prev_timestamp IS NULL
              OR EXTRACT(EPOCH FROM (event_timestamp - prev_timestamp)) > 1200
            THEN 1 ELSE 0
        END AS is_session_start
    FROM ordered_events
),
session_ids AS (
    SELECT *,
        SUM(is_session_start) OVER (
            PARTITION BY worker_id, parcel_id
            ORDER BY event_timestamp
            ROWS UNBOUNDED PRECEDING
        ) AS session_id
    FROM session_starts
)
SELECT
    company_id,
    worker_id,
    parcel_id,
    session_id,
    MIN(event_timestamp) AS session_start,
    MAX(event_timestamp) AS session_end,
    COUNT(*) AS event_count
FROM session_ids
GROUP BY company_id, worker_id, parcel_id, session_id;
```

Gap threshold (1200 seconds = 20 minutes) is configurable per company once
multi-tenant settings are implemented.

---

## Monitoring

**Application Insights custom events:**

| Event name | Logged when | Dimensions |
|-----------|-------------|-----------|
| `events_ingested` | Per batch upload | device_id, count_accepted, count_rejected |
| `events_bound` | Per geofencing run | company_id, count_bound, count_unbound |
| `device_offline` | Badge not seen in > 48h | device_id, company_id, last_seen_at |
| `upload_latency` | Per batch | device_id, latency_seconds (event_timestamp to received_at) |

**Alerts (Azure Monitor):**

| Alert | Threshold | Action |
|-------|-----------|--------|
| Ingest API error rate | > 5% of requests return 5xx over 10 min | Email founder |
| Geofencing job failure | Any timer trigger exception | Email founder |
| Database CPU | > 80% for 5 min | Email founder |
| Device offline (per device) | No events for > 48 hours during expected active period | Notify field ops coordinator |

---

## CI/CD (GitHub Actions)

Three workflows:

**1. `deploy-functions.yml` — triggered on push to `main`**
- Run tests (pytest)
- Deploy Azure Functions using `Azure/functions-action`
- Smoke test: POST a synthetic event to staging; confirm 202

**2. `deploy-infrastructure.yml` — triggered manually or on infrastructure changes**
- Run `az deployment group create` with Bicep template
- Does not touch production without explicit approval gate

**3. `db-migrate.yml` — triggered manually**
- Run any pending schema migration files in `infra/migrations/`
- Uses `psql` against staging first; requires manual approval for production

---

## Environment Promotion

```
dev  →  (automated on push to main)  →  staging  →  (manual gate)  →  prod
```

No code ships to `prod` without running in `staging` first. The gate is a GitHub
Actions environment protection rule requiring the founder's approval.
