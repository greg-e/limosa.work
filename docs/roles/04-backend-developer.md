# Role: Backend / Cloud Developer

**Phase:** 3 — Cloud MVP
**Engagement type:** Contract
**Budget:** $2,000–$5,000 for 40–80 hours
**When to engage:** Month 4–6, concurrent with Phase 2 hardware completion
**Status:** Not yet hired

---

## Why This Role Matters

The cloud pipeline is the product's second half. Without it, the badge produces data
that goes nowhere useful. The backend developer builds the ingestion layer, event store,
and geofencing service that transform raw badge uploads into verified truth intervals
visible in Power BI.

The founder handles the Power BI layer and data modeling independently. The backend
developer builds from the raw API inbound to the normalized event store. Those are
distinctly separate responsibilities.

This is not a senior architect role. The scope is narrow and concrete: ingest badge
events, deduplicate them, bind them to parcels via geofencing, and write them to a
structured store. The founder's existing Power Apps and Power BI background means the
BI layer is owned in-house. The backend developer does not need to touch reporting.

---

## Technical Requirements

The backend developer must be proficient in:

- **Python** (primary) or Node.js (acceptable alternative)
- **PostgreSQL** with PostGIS extension (spatial queries for geofencing)
- **REST API design** (JSON, idempotent endpoints, proper HTTP semantics)
- **Azure** (Azure Functions or App Service, Azure Database for PostgreSQL)
- **Shapely** (Python geospatial library) or equivalent PostGIS-native approach for
  point-in-polygon operations

The founder is learning PostgreSQL and can contribute to schema design and query review.
The backend developer does not need to babysit the founder's SQL learning — they need
to ship working code and document it well enough that the founder can extend it.

---

## Deliverables Required

### Deliverable 1 — Ingestion API (20–30 hours)

REST endpoint that:
- Accepts batch JSON uploads from the Blues Notecard (array of events per upload)
- Validates payload schema
- Rejects malformed payloads with descriptive errors (logged, not silently dropped)
- Deduplicates events by `(device_id, sequence_number)` — idempotent on retry
- Writes validated, deduplicated events to the raw event store (PostgreSQL)
- Returns 202 Accepted for valid uploads, with event count in response body
- Handles partial batch failures: accept valid events, reject invalid ones,
  return which events were accepted

Not in scope for this deliverable: geofencing, analytics, integrations.

### Deliverable 2 — Parcel Geofencing Service (15–25 hours)

A service or scheduled job that:
- Loads parcel polygon data from public GIS sources (county assessor shapefiles,
  loaded into PostGIS)
- For each unbound GPS event in the raw store, runs point-in-polygon to assign a
  `parcel_id`
- Writes bound events to a canonical event store (separate from raw store)
- Handles GPS points that fall outside all known parcels (flagged as unbound, not
  discarded)
- Handles GPS drift at parcel boundaries (configurable dwell-time debounce: point must
  be inside polygon for N consecutive samples before triggering a parcel entry event)

Parcel data source: Georgia county assessor parcel shapefiles (public domain). The
founder handles sourcing the specific county files needed for the pilot.

### Deliverable 3 — Power BI–Ready Data Layer (5–15 hours)

- A PostgreSQL view or materialized view that aggregates canonical events into work
  sessions: `(worker_id, parcel_id, session_start, session_end, duration_minutes,
  equipment_present[])`
- Power BI can connect directly to PostgreSQL via the PostgreSQL connector
- The founder builds the Power BI report; the developer builds the view
- Documentation of the schema: table names, column definitions, foreign keys, indexes

### Deliverable 4 — Deployment and Documentation (5–10 hours)

- Deployed on Azure (Azure Functions for API, Azure Database for PostgreSQL)
- Environment variables for secrets (no hardcoded credentials anywhere)
- README covering: local setup, deployment steps, API endpoint reference, schema
  reference, how to load parcel data, known limitations
- Postman collection or curl examples for testing the ingestion endpoint

---

## Schema Contract (Founder-Owned)

**raw_events table**
```sql
CREATE TABLE raw_events (
    id              BIGSERIAL PRIMARY KEY,
    device_id       TEXT NOT NULL,
    firmware_version TEXT NOT NULL,
    event_type      TEXT NOT NULL,
    event_timestamp TIMESTAMPTZ NOT NULL,
    sequence_number BIGINT NOT NULL,
    payload         JSONB NOT NULL,
    received_at     TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (device_id, sequence_number)
);
```

**canonical_events table**
```sql
CREATE TABLE canonical_events (
    id              BIGSERIAL PRIMARY KEY,
    raw_event_id    BIGINT REFERENCES raw_events(id),
    device_id       TEXT NOT NULL,
    event_type      TEXT NOT NULL,
    event_timestamp TIMESTAMPTZ NOT NULL,
    parcel_id       TEXT,
    worker_id       TEXT,
    payload         JSONB NOT NULL,
    bound_at        TIMESTAMPTZ DEFAULT NOW()
);
```

**parcels table (PostGIS)**
```sql
CREATE TABLE parcels (
    parcel_id   TEXT PRIMARY KEY,
    geom        GEOMETRY(POLYGON, 4326) NOT NULL,
    address     TEXT,
    county      TEXT,
    loaded_at   TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX parcels_geom_idx ON parcels USING GIST(geom);
```

---

## Where to Find

**Priority 1 — Upwork**
Search: "Python REST API PostgreSQL", "PostGIS geofencing", "Azure Functions IoT".
Filter: 90%+ success, visible PostGIS or spatial data projects, $40–$80/hr range.

**Priority 2 — Atlanta Python/Django community**
PyATL meetup group. Atlanta Python user community.

**Priority 3 — Referral from firmware engineer**
The firmware contractor may know backend engineers who have worked on similar IoT
pipelines. Ask.

---

## Interview / Vetting Requirements

1. Ask them to describe how they would implement idempotent event ingestion for a
   device that may retry uploads. Expect: unique constraint on (device_id, sequence_number),
   ON CONFLICT DO NOTHING, and acknowledgment in the response.

2. Ask them to explain the difference between running point-in-polygon in PostGIS
   versus in application code (Python/Shapely). Correct answer: PostGIS is faster at
   scale because of spatial indexing (GIST); Python/Shapely is acceptable for low volume
   but does not scale. A candidate who does not know this distinction has not built
   production geofencing.

3. Ask them to explain what happens when a GPS event falls on a parcel boundary.
   They should raise: boundary cases, floating-point tolerance, and dwell-time debounce
   without being prompted.

4. Review a code sample: ask for an example REST API they have built with validation and
   error handling. Look for: proper HTTP status codes, input validation, error logging,
   no secrets in code.

---

## Budget Breakdown

| Deliverable | Low Hours | High Hours | Rate ($60/hr midpoint) |
|-------------|-----------|------------|------------------------|
| Ingestion API | 20 | 30 | $1,200–$1,800 |
| Geofencing service | 15 | 25 | $900–$1,500 |
| Power BI data layer | 5 | 15 | $300–$900 |
| Deployment and docs | 5 | 10 | $300–$600 |
| **Total** | **45 hrs** | **80 hrs** | **$2,700–$4,800** |

---

## Exit Gate

The backend developer's engagement is complete when:
- Badge data uploaded from the field is visible in Power BI within 30 minutes of capture
- Correct parcel binding is visible for GPS events within tested parcel polygons
- Duplicate uploads produce no duplicate events in the canonical store
- A failed upload retried by the badge produces the same result as a successful first upload

---

## Known Risks

**Risk:** Developer builds a system only they can maintain.
**Mitigation:** The README must be complete enough for the founder to restart a crashed
service, add a new parcel file, or trace a missing event through the pipeline without
the developer's help. Review the README before final payment.

**Risk:** Azure infrastructure costs exceed projections at pilot scale.
**Mitigation:** Before deployment, have the developer estimate monthly Azure costs for
the pilot. Get line-item estimates for Azure Functions invocations, PostgreSQL Flexible
Server tier, and storage. Anything above $50/month for the pilot is a red flag — the
pilot scale is tiny.

**Risk:** PostGIS geofencing is slow because parcel data is not properly indexed.
**Mitigation:** Confirm the GIST spatial index is created and benchmark a PIP query
against the pilot parcel set before declaring Deliverable 2 complete.
