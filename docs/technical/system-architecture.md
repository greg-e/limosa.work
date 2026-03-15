# System Architecture

## Overview

Actual is a hardware-first field truth platform. The data origin is a physical badge
carried by a crew member. The badge generates events. Those events flow through a
cellular modem to a cloud ingestion layer, are processed against spatial data, and
appear in a Power BI dashboard the operator can read without touching any of the
upstream system.

No intermediary app is involved. No crew member interaction is required after
shift-start badge assignment.

---

## Component Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  FIELD                                                                      │
│                                                                             │
│  ┌──────────────────┐        BLE advertisement                             │
│  │  Equipment Tag   │ ──────────────────────────────────┐                  │
│  │  (truck/mower)   │                                   ▼                  │
│  └──────────────────┘                        ┌──────────────────┐          │
│                                              │   Actual Badge   │          │
│                                              │  ┌────────────┐  │          │
│                                              │  │  nRF52840  │  │          │
│                                              │  │  or        │  │          │
│                                              │  │  ESP32-C3  │  │          │
│                                              │  └────────────┘  │          │
│                                              │  ┌────────────┐  │          │
│                                              │  │  Blues     │  │          │
│                                              │  │  Notecard  │  │          │
│                                              │  │ (cell+GPS) │  │          │
│                                              │  └────────────┘  │          │
│                                              │  ┌────────────┐  │          │
│                                              │  │ E-ink      │  │          │
│                                              │  │ display    │  │          │
│                                              │  └────────────┘  │          │
│                                              └────────┬─────────┘          │
└───────────────────────────────────────────────────────┼─────────────────── ┘
                                                        │ JSON batch (HTTPS)
                                                        │ via LTE cellular
                                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  CLOUD (Azure)                                                              │
│                                                                             │
│  ┌──────────────────────┐     ┌───────────────────────────────────────┐    │
│  │  Azure Functions     │     │  Azure Database for PostgreSQL        │    │
│  │  (Ingest API)        │────▶│  + PostGIS                            │    │
│  │                      │     │                                       │    │
│  │  POST /events        │     │  raw_events                           │    │
│  │  - validate          │     │  canonical_events                     │    │
│  │  - deduplicate       │     │  parcels (geometry)                   │    │
│  │  - write to DB       │     │  work_sessions (materialized view)    │    │
│  └──────────────────────┘     │  devices                              │    │
│                               │  workers                              │    │
│  ┌──────────────────────┐     └───────────────────────────────────────┘    │
│  │  Geofencing Service  │              │                                   │
│  │  (scheduled job)     │◀───reads unbound GPS events                      │
│  │                      │             │                                    │
│  │  - point-in-polygon  │─────writes bound events───────────────────────▶ │
│  │  - session assembly  │                                                  │
│  └──────────────────────┘                                                  │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  Azure Key Vault — all secrets (connection strings, API keys)        │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────┬────────────────────────────── ┘
                                             │ PostgreSQL direct connector
                                             ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  REPORTING                                                                  │
│                                                                             │
│  Power BI (Premium Per User)                                                │
│  - Dataset: work_sessions view (refreshed every 30 min via scheduled       │
│    refresh or DirectQuery)                                                  │
│  - Reports: crew summary, property coverage, equipment pairing, anomalies  │
│  - Audience: landscape company owner or ops manager (read-only access)     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow — Normal Operation

### Step 1: Shift Start
The crew foreman assigns a badge to each crew member before leaving the yard.
The assignment is entered on the badge (button press selects worker ID from a
pre-loaded list) or auto-assigned from the previous shift record.

The badge logs a `shift_start` event with the worker ID and timestamp.

### Step 2: Field Operation
While the crew works, the badge:
- Samples GPS position every 15 seconds (configurable)
- Monitors BLE for equipment tag advertisements every 5 seconds
- Logs a `motion` event whenever accelerometer state changes
- Holds all events in a local flash queue in event schema order (see event-schema.md)

The badge does NOT require cellular connectivity during operation. All events are
written to local storage first.

### Step 3: Batch Upload
Every 30 minutes (configurable), the badge hands the event queue to the Blues
Notecard for upload. The Notecard:
- Establishes an LTE-M connection
- POSTs the batch as a JSON array to the ingest API endpoint
- Returns the HTTP response to the MCU firmware
- On 202 Accepted: firmware marks events as uploaded (not deleted — kept for
  configurable retention period)
- On failure: firmware retries with exponential backoff; events are never deleted
  on upload failure

### Step 4: Ingestion
The Azure Functions ingest API:
- Validates each event in the batch against the schema
- Deduplicates by `(device_id, sequence_number)` — idempotent
- Writes valid events to `raw_events`
- Returns 202 with count of accepted events
- Returns 207 Multi-Status if some events in the batch failed validation

### Step 5: Geofencing
A scheduled job (runs every 5 minutes) processes unbound GPS events in `raw_events`:
- Runs point-in-polygon against the `parcels` table (PostGIS GIST index)
- Assigns `parcel_id` to events that fall within a known parcel
- Writes bound events to `canonical_events`
- Events outside all parcels are written to `canonical_events` with `parcel_id = NULL`
  and `unbound = TRUE`

### Step 6: Session Assembly
The `work_sessions` materialized view aggregates `canonical_events` into intervals:
- A session begins when a `gps` event is bound to a parcel after a parcel entry occurs
- A session ends when the worker's GPS exits the parcel polygon (with dwell-time
  debounce) or a `shift_end` event is received
- Equipment presence is recorded if a `ble_proximity` event for an equipment tag
  associated with this worker occurred within the session window

### Step 7: Reporting
Power BI reads from `work_sessions` on a 30-minute refresh schedule. The owner
opens Power BI on any device and sees:
- Which crews were at which properties, when, and for how long
- Equipment pairing status per session
- Any sessions where GPS was present but equipment was not (anomaly flag)
- Weekly totals vs. submitted timesheets (if timesheet data is provided)

---

## Failure Modes and Recovery

| Failure | Effect | Recovery |
|---------|--------|---------|
| Cellular outage at job site | Events queued locally | Upload resumes when connectivity returns; no data loss |
| Badge battery dies mid-shift | Events up to last upload are preserved | Next shift: re-flash or replace badge; review last upload timestamp |
| GPS fix not obtained | Event logged with `accuracy_m = null` | Stored as unbound event; not counted in session |
| Azure Functions downtime | Upload fails after retry | Badge holds queue; retry continues until success; no event loss |
| PostgreSQL downtime | Ingest API returns 503 | Blues Notecard retries upload; idempotency prevents duplicates on recovery |
| Power BI refresh fails | Dashboard stale by one refresh cycle | Monitored via Azure Monitor alert; no data loss |

---

## Security Boundaries

- All badge-to-cloud communication uses HTTPS (TLS 1.2+)
- API key authentication on the ingest endpoint; key stored in device flash
  at provisioning time, rotatable via OTA
- No public-facing admin interface; all management via Azure Portal with
  Entra ID authentication
- All secrets in Azure Key Vault; no credentials in code, config files, or
  environment variables at rest in source control
- Customer data is tenant-scoped at the `company_id` column level; all queries
  filter by `company_id`; no cross-tenant access is possible via the API

---

## Technology Stack Summary

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Badge MCU | nRF52840 or ESP32-C3 | Low power, BLE 5.0, broad community support |
| Cellular + GPS modem | Blues Wireless Notecard | Integrated LTE-M + GPS, JSON-native API, developer-friendly |
| Firmware language | C / C++ (Zephyr RTOS or Arduino framework) | Standard embedded toolchain for target MCUs |
| BLE equipment tag | Off-the-shelf BLE 5.0 beacon (Nordic or Ruuvi) | Low cost, weatherproof options available, standard advertisement format |
| Cloud host | Microsoft Azure | Founder's existing toolchain (Power BI, Power Apps, Azure); reduces context switching |
| API runtime | Azure Functions (Python) | Serverless; low operational overhead at prototype scale |
| Database | Azure Database for PostgreSQL with PostGIS | Spatial indexing for geofencing; managed service reduces ops burden |
| Reporting | Power BI Premium Per User | Founder owns this layer; no new tool introduction for customer |
| Secrets management | Azure Key Vault | Standard Azure-native secret store |
| IaC | Bicep (target) | Azure-native; no Terraform dependency |
| CI/CD | GitHub Actions | Repo is on GitHub; no additional tooling required |
