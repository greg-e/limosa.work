---
title: "Product: Godwit Badge & Tags"
layout: page
---

## Badge (crew wearable)
- **Sensors:** GNSS + IMU; optional BLE for tag proximity.
- **Comms:** Cellular; batches telemetry ~ every 30 minutes to conserve battery.
- **Store-and-forward:** All events buffered locally when offline.
- **Attestation:** Daily confirmation step (on ReTerminal/portal/IVR/SMS link) to close service appointments.
- **Ruggedization:** Field-ready enclosure, clip/lanyard, IP-friendly.

## Tags (equipment & asset presence)
- Low-power beacons the badge can detect for **crew↔equipment** association.
- Supports job costing and asset utilization.

## Event Model (simplified)
```json
{
  "deviceId": "badge-123",
  "ts": "2025-09-30T14:25:00Z",
  "gnss": {"lat": 34.0001, "lon": -84.0002, "hdop": 0.9},
  "motion": {"speed": 0.3, "state": "stationary"},
  "nearby": [{"tagId": "mower-07", "rssi": -62}],
  "batchId": "2025-09-30T14:30:00Z"
}
