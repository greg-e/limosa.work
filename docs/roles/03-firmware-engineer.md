# Role: Embedded Firmware Engineer

**Phase:** 2 — Hardware Prototype
**Engagement type:** Contract (with option to convert to full-time post-pilot)
**Budget:** $5,000–$15,000 for 80–160 hours
**When to engage:** Month 2 — this is the first operational hire and the most critical
**Status:** Not yet hired
**Blocking:** This role blocks all of Phase 2. Nothing moves without it.

---

## Why This Role Matters

The founder is a business analyst proficient in Power BI, Power Apps, and cloud data
systems. He is not a firmware engineer. The badge firmware is not learnable on evenings
and weekends alongside a full-time job in the timeline required.

The four prototype-critical jobs — passively capturing time and location, capturing
data at the edge, storing-and-forwarding without data loss, and detecting BLE proximity
— are all firmware problems. If these four cannot be proven, the entire product concept
fails. No cloud platform, no charter partner, no business.

This is not a nice-to-have contractor. This is the person who determines whether
Actual exists as a product.

---

## Technical Requirements

The firmware engineer must be able to build firmware for the following hardware stack:

- **Primary platform:** Blues Wireless Notecard (Cellular + GPS)
- **MCU target:** nRF52840 or ESP32-C3 (selected during prototype phase)
- **Communication:** BLE 5.0 (scanner role for tag detection), cellular (Blues Notecard
  for GPS and upload)
- **Sensors:** Accelerometer (motion detection and activity classification), GPS
- **Display:** E-ink (SPI or I2C interface, U8g2 or similar library)
- **Storage:** Local flash buffer (event queue with store-and-forward logic)
- **Power:** Deep sleep / active duty cycle management targeting 7-day battery life

---

## Job-to-Be-Done Mapping

The firmware engineer is directly responsible for proving four prototype-critical jobs:

| JTBD | Description | Firmware Task |
|------|-------------|---------------|
| JTBD 02 | Passively capture time and location without crew input | GPS polling, accelerometer sampling, 4x/min event logging |
| JTBD 03 | Capture data at the edge where errors originate | Edge event generation, timestamp anchoring, local storage schema |
| JTBD 04 | Store-and-forward without data loss | Offline buffer with idempotent event IDs, cellular upload on schedule |
| JTBD 06 | Detect BLE tool proximity and log usage automatically | BLE scanner, tag RSSI threshold, proximity event generation |

---

## Deliverables Required

### Phase 2A — Core Prototype (first 40–80 hours)
- Firmware builds and flashes to target MCU without errors
- GPS samples at 4x/minute or configurable interval
- Accelerometer motion state logged (moving / stationary)
- BLE scanner active, detects tags by MAC address or UUID within 5m
- E-ink display shows worker ID and shift-start time
- All events logged to local storage in defined schema (see data model)
- Device operates continuously for 72+ hours on a single charge

### Phase 2B — Store-and-Forward (next 20–40 hours)
- Event queue persists through power interruption (no data loss on restart)
- Cellular upload triggered on schedule (30-minute batch) via Blues Notecard
- Upload is idempotent: duplicate events on retry do not corrupt the record
- Upload failure retry with exponential backoff
- Upload success confirmation logged locally

### Phase 2C — Integration Readiness (remaining hours)
- Event payload schema matches the cloud API contract (provided by founder)
- Firmware version embedded in every upload for traceability
- OTA firmware update capability via Blues Notecard (or documented path to it)
- Documented power consumption profile: active, BLE scanning, cellular upload, sleep

---

## Prototype Exit Gate

The firmware engineer's engagement is complete when 5 badges can:
- Run 72+ continuous hours without failure
- GPS locate within 15m of a known parcel boundary
- Detect a BLE tag at 5m with >85% accuracy over 100 test events
- Upload batches successfully >95% of the time
- Survive a simulated cellular outage and upload queued events when connectivity resumes

Every exit gate metric must be tested and documented before Phase 3 begins.

---

## Event Schema (Firmware Output Contract)

The firmware engineer works to this schema. The founder owns schema definition.

```json
{
  "device_id": "string (badge serial)",
  "firmware_version": "string (semver)",
  "event_type": "gps | ble_proximity | motion | shift_start | shift_end | upload_heartbeat",
  "timestamp_utc": "ISO 8601",
  "sequence_number": "integer (monotonic, per device)",
  "payload": {
    "lat": "float (GPS only)",
    "lon": "float (GPS only)",
    "accuracy_m": "float (GPS only)",
    "tag_id": "string (BLE only)",
    "rssi": "integer dBm (BLE only)",
    "motion_state": "moving | stationary (motion only)",
    "worker_id": "string (shift events only)"
  }
}
```

Every event must include `device_id`, `firmware_version`, `event_type`, `timestamp_utc`,
and `sequence_number`. Payload fields are event-type specific.

---

## Where to Find

**Priority 1 — Blues Wireless developer forums and community**
Blues Wireless (blues.com) has an active developer forum. Engineers who have already
built with the Notecard are the target. Post a specific, well-scoped job description
there first. URL: discuss.blues.com

**Priority 2 — Upwork**
Search: "Blues Notecard", "nRF52840 firmware", "Blues Wireless IoT", "BLE scanner
firmware embedded C".
Filter: 90%+ job success, >$50/hr, at least 3 completed IoT/embedded projects visible.
Do not hire anyone without reviewing actual firmware code samples.

**Priority 3 — Hackster.io project pages**
Find published projects using Blues Notecard or nRF52 + BLE + cellular. Contact the
author directly. People who publish working projects are real engineers.

**Priority 4 — Atlanta embedded engineering community**
Atlanta Embedded group on Meetup.com. Georgia Tech ECE department alumni network.
ATDC (Tech Square) connections.

---

## Interview / Vetting Requirements

Before hiring, require the candidate to:

1. **Show code**: Provide one example of a BLE scanner implementation in C/C++ (or
   equivalent) where the device is the scanner (not the advertiser). Bonus: Blues
   Notecard integration example.

2. **Explain store-and-forward**: Describe how they would implement a local event queue
   that persists through power loss and uploads idempotently on cellular reconnect.

3. **Discuss power budgeting**: What is their approach to achieving 7-day battery life
   on a device that scans BLE every 15 seconds, samples GPS 4x/minute, and uploads
   cellular every 30 minutes?

4. **Scope the work**: Given the deliverables listed above, ask them to estimate hours
   for Phase 2A and Phase 2B separately. A candidate who cannot scope the work has not
   done it before.

The right candidate will ask about the MCU selection, the BLE tag advertisement format,
the Notecard firmware library version, and the local storage medium. A candidate who
does not ask these questions does not have Notecard/nRF52 experience.

---

## Budget and Contract Structure

| Milestone | Hours | Payment |
|-----------|-------|---------|
| Phase 2A complete (core prototype, 5 working badges) | 40–80 hrs | 50% upfront, 50% on delivery |
| Phase 2B complete (store-and-forward validated) | 20–40 hrs | 100% on delivery |
| Phase 2C complete (integration-ready, exit gate met) | 20–40 hrs | 100% on delivery |

Do not pay 100% upfront for any milestone. Use a contract with clear deliverables,
IP assignment to Actual (Georgia LLC), and a confidentiality clause before any
proprietary technical details are shared.

**Post-pilot conversion:** If the prototype is successful and the charter partner pilot
validates the product, this contractor is the first candidate for a full-time engineering
role. The relationship built during prototype work is worth more than a fresh hire.

---

## Known Risks

**Risk:** Contractor delivers working firmware that the founder cannot maintain or extend.
**Mitigation:** Require commented, readable code. Require a technical handoff document
covering: build environment setup, flash procedure, key firmware parameters, known bugs
or limitations. The founder must be able to reflash a badge independently after the
engagement ends.

**Risk:** Contractor scopes Blues Notecard incorrectly and the cellular upload costs
exceed projections.
**Mitigation:** Agree on a data usage budget per badge per day before development starts.
Blues Notecard charges per packet sent. Have the contractor document projected Notehub
usage and SIM data consumption as part of Phase 2A.

**Risk:** Contractor availability drops to zero after Phase 2A, leaving Phase 2B
unfinished.
**Mitigation:** Stage the contract in discrete milestones. Do not proceed to Phase 2B
until Phase 2A is fully delivered. Keep a backup contractor identified but not engaged.

**Risk:** GPS accuracy is insufficient for parcel-level geofencing.
**Mitigation:** Test GPS accuracy against actual parcel boundaries in Phase 2A before
investing in Phase 2B. If GPS alone is insufficient, evaluate GNSS modules with RTK
assist or hybrid approaches. Do not assume GPS will work until tested against real
parcel polygons in the target operating area.
