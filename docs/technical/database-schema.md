# Database Schema

Full PostgreSQL DDL for the Actual data store. All tables use the `actual` schema.
PostGIS extension is required for the `parcels` table.

---

## Setup

```sql
-- Run once on database creation
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE SCHEMA IF NOT EXISTS actual;
SET search_path = actual, public;
```

---

## Tables

### `devices`

Registry of all provisioned badges. One row per badge, created at provisioning time.

```sql
CREATE TABLE actual.devices (
    device_id           TEXT PRIMARY KEY,
    -- Format: ACT-XXXXXXXX (8 hex chars, uppercase)
    -- Assigned at manufacturing/provisioning; immutable

    company_id          TEXT NOT NULL,
    -- Tenant identifier; all queries must filter by this column

    notes_device_uid    TEXT,
    -- Blues Wireless Notecard DeviceUID; used for Notehub provisioning

    provisioned_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status              TEXT NOT NULL DEFAULT 'inventory',
    -- One of: inventory | deployed | returned | refurbished | retired | rma

    current_worker_id   TEXT,
    -- Denormalized: current shift assignment; updated on shift_start / shift_end
    -- NULL when badge is unassigned

    firmware_version    TEXT,
    -- Last seen firmware version from most recent upload

    last_seen_at        TIMESTAMPTZ,
    -- Timestamp of most recent event received from this device

    notes               TEXT,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX devices_company_id_idx ON actual.devices (company_id);
CREATE INDEX devices_status_idx ON actual.devices (status);
```

---

### `equipment_tags`

Registry of BLE equipment tags, mapped to customer equipment.

```sql
CREATE TABLE actual.equipment_tags (
    tag_mac             TEXT PRIMARY KEY,
    -- Bluetooth MAC address; format: 'AA:BB:CC:DD:EE:FF' (uppercase)

    company_id          TEXT NOT NULL,
    equipment_name      TEXT NOT NULL,
    -- Human-readable name; e.g. 'Truck 03', 'Zero-Turn Mower 1'

    equipment_type      TEXT,
    -- e.g. 'truck', 'trailer', 'mower', 'other'

    status              TEXT NOT NULL DEFAULT 'deployed',
    -- One of: inventory | deployed | retired

    deployed_at         TIMESTAMPTZ,
    notes               TEXT,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX equipment_tags_company_id_idx ON actual.equipment_tags (company_id);
```

---

### `workers`

Registry of worker IDs per customer. Worker IDs are operator-assigned strings.

```sql
CREATE TABLE actual.workers (
    id                  BIGSERIAL PRIMARY KEY,
    company_id          TEXT NOT NULL,
    worker_id           TEXT NOT NULL,
    -- Operator-assigned identifier; must be unique per company
    -- Examples: 'W-042', 'jsmith', 'Crew Lead 1'

    display_name        TEXT,
    active              BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    UNIQUE (company_id, worker_id)
);

CREATE INDEX workers_company_id_idx ON actual.workers (company_id);
```

---

### `parcels`

Polygon geometries for serviceable properties. Loaded from county GIS parcel data.
PostGIS is required.

```sql
CREATE TABLE actual.parcels (
    parcel_id           TEXT NOT NULL,
    -- County assessor parcel ID; format varies by county

    company_id          TEXT NOT NULL,
    -- A parcel is associated with a specific customer tenant
    -- (a customer may service only a subset of parcels in a county)

    geom                GEOMETRY(POLYGON, 4326) NOT NULL,
    -- WGS84 geographic coordinates
    -- SRID 4326 must match GPS coordinates in raw_events

    address             TEXT,
    county              TEXT,
    state               TEXT DEFAULT 'GA',
    customer_label      TEXT,
    -- Optional: customer's own name for this property (e.g. 'HOA - North Campus')

    active              BOOLEAN NOT NULL DEFAULT TRUE,
    loaded_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    PRIMARY KEY (parcel_id, company_id)
);

-- Spatial index — required for point-in-polygon query performance
CREATE INDEX parcels_geom_idx ON actual.parcels USING GIST (geom);
CREATE INDEX parcels_company_id_idx ON actual.parcels (company_id);
```

---

### `raw_events`

Append-only store for all events received from badges exactly as received.
No transformation. No deletion.

```sql
CREATE TABLE actual.raw_events (
    id                  BIGSERIAL PRIMARY KEY,
    device_id           TEXT NOT NULL REFERENCES actual.devices (device_id),
    company_id          TEXT NOT NULL,
    -- Denormalized from devices table for query efficiency

    firmware_version    TEXT NOT NULL,
    event_type          TEXT NOT NULL,
    event_timestamp     TIMESTAMPTZ NOT NULL,
    -- Timestamp as reported by the badge (not the server receive time)

    sequence_number     BIGINT NOT NULL,
    payload             JSONB NOT NULL,
    received_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    -- Server-side receive time; used for upload latency tracking

    UNIQUE (device_id, sequence_number)
    -- Deduplication constraint; ON CONFLICT DO NOTHING on insert
);

CREATE INDEX raw_events_device_id_idx ON actual.raw_events (device_id);
CREATE INDEX raw_events_company_id_idx ON actual.raw_events (company_id);
CREATE INDEX raw_events_event_type_idx ON actual.raw_events (event_type);
CREATE INDEX raw_events_event_timestamp_idx ON actual.raw_events (event_timestamp);
-- Partial index for unprocessed GPS events (geofencing job target)
CREATE INDEX raw_events_unbound_gps_idx ON actual.raw_events (id)
    WHERE event_type = 'gps' AND id NOT IN (
        SELECT raw_event_id FROM actual.canonical_events
        WHERE raw_event_id IS NOT NULL
    );
-- Note: replace with a processed_at column approach at scale (partial index
-- re-computation is expensive on large tables)
```

---

### `canonical_events`

Processed events: GPS events bound to parcels, or marked as unbound.
One canonical event per raw event that requires binding.

```sql
CREATE TABLE actual.canonical_events (
    id                  BIGSERIAL PRIMARY KEY,
    raw_event_id        BIGINT REFERENCES actual.raw_events (id),
    device_id           TEXT NOT NULL,
    company_id          TEXT NOT NULL,
    worker_id           TEXT,
    -- Populated by resolving the active shift assignment at event_timestamp

    event_type          TEXT NOT NULL,
    event_timestamp     TIMESTAMPTZ NOT NULL,

    parcel_id           TEXT,
    -- NULL if event falls outside all known parcels (unbound)

    unbound             BOOLEAN NOT NULL DEFAULT FALSE,
    -- TRUE when parcel_id IS NULL and binding was attempted

    payload             JSONB NOT NULL,
    bound_at            TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX canonical_events_device_id_idx ON actual.canonical_events (device_id);
CREATE INDEX canonical_events_company_id_idx ON actual.canonical_events (company_id);
CREATE INDEX canonical_events_worker_id_idx ON actual.canonical_events (worker_id);
CREATE INDEX canonical_events_parcel_id_idx ON actual.canonical_events (parcel_id);
CREATE INDEX canonical_events_event_timestamp_idx ON actual.canonical_events (event_timestamp);
```

---

### `work_sessions`

Materialized view that aggregates canonical events into human-readable work sessions.
Refreshed on a schedule (every 30 minutes) or on demand.

```sql
CREATE MATERIALIZED VIEW actual.work_sessions AS
WITH session_bounds AS (
    -- Detect parcel entry and exit events by looking at consecutive GPS events
    -- A session starts when parcel_id is non-null after a null or different parcel_id
    -- A session ends when parcel_id changes or a shift_end event is received
    SELECT
        ce.company_id,
        ce.worker_id,
        ce.parcel_id,
        ce.device_id,
        MIN(ce.event_timestamp) AS session_start,
        MAX(ce.event_timestamp) AS session_end,
        EXTRACT(EPOCH FROM (MAX(ce.event_timestamp) - MIN(ce.event_timestamp))) / 60
            AS duration_minutes
    FROM actual.canonical_events ce
    WHERE ce.event_type = 'gps'
      AND ce.parcel_id IS NOT NULL
      AND ce.worker_id IS NOT NULL
    GROUP BY
        ce.company_id,
        ce.worker_id,
        ce.parcel_id,
        ce.device_id,
        -- Session grouping: consecutive GPS events within 20 minutes are the same session
        -- (gap-based session detection; refine with window functions at scale)
        DATE_TRUNC('hour', ce.event_timestamp)
        -- NOTE: this is a simplified grouping. The cloud engineer must replace
        -- this with proper gap-detection using LAG() window functions.
),
equipment_presence AS (
    SELECT
        ce.device_id,
        ce.worker_id,
        DATE_TRUNC('hour', ce.event_timestamp) AS hour_bucket,
        ARRAY_AGG(DISTINCT et.equipment_name) AS equipment_detected
    FROM actual.canonical_events ce
    JOIN actual.equipment_tags et
        ON et.tag_mac = ce.payload->>'tag_mac'
       AND et.company_id = ce.company_id
    WHERE ce.event_type = 'ble_proximity'
      AND ce.worker_id IS NOT NULL
    GROUP BY ce.device_id, ce.worker_id, DATE_TRUNC('hour', ce.event_timestamp)
)
SELECT
    sb.company_id,
    sb.worker_id,
    sb.parcel_id,
    sb.device_id,
    sb.session_start,
    sb.session_end,
    sb.duration_minutes,
    COALESCE(ep.equipment_detected, ARRAY[]::TEXT[]) AS equipment_present,
    (ep.equipment_detected IS NOT NULL) AS equipment_verified
FROM session_bounds sb
LEFT JOIN equipment_presence ep
    ON ep.device_id = sb.device_id
   AND ep.worker_id = sb.worker_id
   AND ep.hour_bucket = DATE_TRUNC('hour', sb.session_start);

-- Refresh index
CREATE UNIQUE INDEX work_sessions_unique_idx
    ON actual.work_sessions (company_id, worker_id, parcel_id, session_start);
```

**Note to cloud engineer:** The session grouping in this view uses a simplified
`DATE_TRUNC` approach. Replace with proper LAG()-based gap detection before the
first paying customer is live. See the cloud architecture doc for the gap-detection
pattern.

---

## Indexes Summary

| Table | Index | Type | Purpose |
|-------|-------|------|---------|
| devices | company_id | B-tree | Tenant isolation |
| equipment_tags | company_id | B-tree | Tenant isolation |
| parcels | geom | GIST | Point-in-polygon (PostGIS) |
| parcels | company_id | B-tree | Tenant isolation |
| raw_events | device_id | B-tree | Per-device queries |
| raw_events | company_id | B-tree | Tenant isolation |
| raw_events | event_timestamp | B-tree | Time-range queries |
| raw_events | (device_id, seq_num) | Unique | Deduplication constraint |
| canonical_events | worker_id | B-tree | Worker-level reporting |
| canonical_events | parcel_id | B-tree | Property-level reporting |
| canonical_events | event_timestamp | B-tree | Time-range queries |

---

## Multi-Tenant Design Notes

Every table that contains customer data includes `company_id`. Every application
query must include a `WHERE company_id = $1` clause. There is no database-level
row-level security (RLS) at prototype; this must be added before the cloud engineer
considers the platform production-ready.

Add RLS policies when the customer count exceeds 5:

```sql
-- Example RLS policy on raw_events
ALTER TABLE actual.raw_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON actual.raw_events
    USING (company_id = current_setting('app.current_company_id'));
```

The application sets `app.current_company_id` at the start of each request.
