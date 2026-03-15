# Technical Documentation — Actual

This folder contains the system-level technical reference for the Actual platform.
It is written for engineers, not for operators or investors.

---

## Contents

| File | Purpose |
|------|---------|
| [system-architecture.md](system-architecture.md) | End-to-end system diagram and component relationships |
| [hardware-spec.md](hardware-spec.md) | Badge and equipment tag hardware specifications |
| [firmware-architecture.md](firmware-architecture.md) | Firmware state machine, event model, power management |
| [event-schema.md](event-schema.md) | Canonical JSON contract for all badge-to-cloud events |
| [cloud-architecture.md](cloud-architecture.md) | Azure infrastructure, ingestion pipeline, data model |
| [api-reference.md](api-reference.md) | REST API endpoints: ingestion, provisioning, geofencing |
| [database-schema.md](database-schema.md) | Full PostgreSQL/PostGIS schema with annotated DDL |
| [deployment-runbook.md](deployment-runbook.md) | How to provision a badge, deploy Azure infrastructure, and push a firmware update |

---

## Design Principles

**1. Hardware is the authority.**
The badge is the record of truth. No cloud-side correction should overwrite a
badge-originated event. If a badge logs an event, that event is stored — even if
it contradicts what the schedule says should have happened.

**2. The crew does nothing.**
No app install, no tap, no clock-in. If the system requires any deliberate action
from a field worker to produce a record, the system has failed.

**3. Store-and-forward is non-negotiable.**
Cellular coverage is unreliable at job sites. Every badge must buffer events locally
and upload on a schedule. An upload failure must never lose a record.

**4. Identity is the badge, not the phone.**
Worker identity comes from the badge assignment at shift start, not from a phone
login. The badge belongs to a person for a shift. The event record inherits that
assignment.

**5. The data model is append-only.**
Events are written once and never modified. Corrections are made by writing a
correction event, not by editing the original. The audit trail is permanent.

---

## System Boundary Overview

```
[Field]                    [Edge]                  [Cloud]                [Reporting]
  Worker 
  wearing badge
  + BLE tag on  →  Badge firmware  →  Blues Notecard  →  Azure Functions  →  PostgreSQL
  equipment        (nRF52840 /          (cellular +         (ingest API)        (PostGIS)
                   ESP32-C3)             GPS upload)                                ↓
                                                                           Power BI
                                                                           (owner dashboard)
```

Data flows left to right. There is no right-to-left control at runtime — the badge
does not receive commands from the cloud during normal operation. OTA firmware updates
are the only cloud-to-device channel.

---

## Glossary

| Term | Definition |
|------|-----------|
| Badge | The wearable hardware device carried by a field crew member |
| Equipment tag | A BLE beacon attached to a piece of equipment (truck, trailer, mower) |
| Device ID | The unique identifier assigned to a badge at provisioning; immutable |
| Worker ID | The operator-assigned identifier that maps a badge to a person for a shift |
| Parcel | A land polygon from county GIS data representing one serviceable property |
| Session | A derived record representing one crew member's presence at one parcel for a contiguous period |
| Sequence number | A monotonically increasing integer per device; used for deduplication |
| Bound event | A GPS event that has been matched to a parcel polygon |
| Unbound event | A GPS event with no matching parcel polygon — stored but not counted in session records |
| Heartbeat | A periodic upload event confirming the badge is alive, even with no location change |
