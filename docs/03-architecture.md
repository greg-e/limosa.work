
---

### `docs/03-architecture.md`
```markdown
---
title: "Architecture (High-Level)"
layout: page
---

# Architecture (High-Level)

## Flow
1. **Edge:** Badge captures `{ts, GNSS, motion, proximity}` continuously; stores locally.
2. **Uplink:** Every ~30 minutes, batches sent via secure cellular.
3. **Ingest:** API gateway → queue → stream processor.
4. **Truth Layer:** Immutable audit log; normalized “truth table” for reports.
5. **Integrations:** Connectors to FSM/Payroll/HRIS for closeout & costing.
6. **Apps:** Ops & Finance dashboards; exception queue; device health.

## Security & Privacy
- TLS in transit, encrypted storage at rest.
- Least-privilege service accounts; scoped API tokens.
- PII boundary: only what’s required for payroll/attestation.
- Full event auditability (who/what/when).

## Reliability
- Store-and-forward, idempotent ingest, back-pressure handling.
- Replayable streams; dead-letter queue with alerts.
- Observability: ingest lag, exception counts, device heartbeat, battery state.

## Data Shapes
- **Events:** Append-only (raw).
- **Facts:** Derived spans (on-site intervals), allocations, closeouts.
- **Dimensions:** Crew, asset, property (tax parcel), service appointment.

## Integration Patterns
- **Outbound:** Webhooks/ETL for SA close, timecards, job costs.
- **Inbound:** Master data sync (crews, properties, contracts).
