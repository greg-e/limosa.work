# Event Schema

The event schema is the contract between the badge firmware and the cloud ingestion
layer. All events written to the cloud — regardless of type — share a common envelope.
Type-specific fields are in the `payload` object.

**This schema is founder-owned.** The firmware engineer implements to it. The backend
developer validates against it. Neither party changes it unilaterally.

---

## Envelope (All Event Types)

```json
{
  "device_id":        "string",
  "firmware_version": "string",
  "event_type":       "string",
  "timestamp_utc":    "string (ISO 8601)",
  "sequence_number":  "integer",
  "payload":          "object"
}
```

### Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `device_id` | string | always | Badge serial number, assigned at provisioning. Immutable. Format: `ACT-XXXXXXXX` (8 hex chars). |
| `firmware_version` | string | always | Semantic version of the firmware that generated this event. Format: `major.minor.patch` (e.g. `0.3.1`). |
| `event_type` | string | always | One of the values in the Event Types table below. |
| `timestamp_utc` | string | always | ISO 8601 UTC timestamp at event origin. Not at upload time — at the moment the event was generated on the badge. Format: `2026-03-14T08:32:15Z`. |
| `sequence_number` | integer | always | Monotonically increasing integer, per device, starting at 1. Never resets across reboots (persisted to flash). Used for deduplication: `(device_id, sequence_number)` is globally unique per device. |
| `payload` | object | always | Event-type-specific fields. May be an empty object `{}` for types with no payload. |

---

## Event Types

| `event_type` | Description | Trigger |
|-------------|-------------|---------|
| `shift_start` | Worker assigned to badge for a shift | Foreman input on badge at start of workday |
| `shift_end` | Worker unassigned from badge | Manual input or auto-detect: extended stationary + time threshold |
| `gps` | Badge GPS position sample | Periodic: every 15 seconds (configurable) when GPS fix available |
| `gps_no_fix` | GPS sample attempted but no fix obtained | Periodic: GPS polled but fix not acquired within timeout |
| `ble_proximity` | Equipment tag detected within RSSI threshold | BLE scanner detects a known tag MAC above threshold |
| `ble_lost` | Previously detected equipment tag no longer detected | Tag RSSI drops below threshold for N consecutive scans |
| `motion` | Accelerometer motion state change | Moving → stationary or stationary → moving |
| `upload_heartbeat` | Badge is alive and connected; no other events in this batch | Sent if no events generated in the last upload window |
| `low_battery` | Battery level below threshold | On detection; once per threshold crossing (10%, 5%) |
| `reboot` | Device restarted | On power-on or watchdog reset; captures reboot reason |

---

## Payload Definitions by Event Type

### `shift_start`

```json
{
  "worker_id": "string",
  "assigned_by": "string (optional)"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `worker_id` | string | yes | Operator-assigned worker identifier. Format is customer-defined; Actual does not enforce a format. Example: `W-042`, `jsmith`. |
| `assigned_by` | string | no | If a foreman assigned the badge (rather than self-assignment), the foreman's worker ID. |

---

### `shift_end`

```json
{
  "worker_id": "string",
  "end_reason": "manual | auto_stationary | low_battery | reboot"
}
```

---

### `gps`

```json
{
  "lat":        "float",
  "lon":        "float",
  "accuracy_m": "float",
  "altitude_m": "float (optional)",
  "speed_kmh":  "float (optional)",
  "fix_type":   "string"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `lat` | float | yes | WGS84 decimal degrees. 6 decimal places minimum (~0.1m precision). |
| `lon` | float | yes | WGS84 decimal degrees. |
| `accuracy_m` | float | yes | Estimated horizontal accuracy in meters from GPS module. |
| `altitude_m` | float | no | Altitude in meters above sea level. Not required for geofencing. |
| `speed_kmh` | float | no | Speed from GPS module if available. |
| `fix_type` | string | yes | One of: `3d`, `2d`, `dead_reckoning`. |

---

### `gps_no_fix`

```json
{
  "timeout_s": "integer",
  "last_known_lat": "float (optional)",
  "last_known_lon": "float (optional)"
}
```

`last_known_lat` / `last_known_lon` included only if a valid GPS fix was obtained
within the last 5 minutes. Helps the cloud reconstruct likely location during
no-fix gaps.

---

### `ble_proximity`

```json
{
  "tag_mac":    "string",
  "rssi":       "integer",
  "detection_count": "integer"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tag_mac` | string | yes | Bluetooth MAC address of detected tag. Format: `AA:BB:CC:DD:EE:FF` (uppercase). |
| `rssi` | integer | yes | Signal strength in dBm at time of event generation. Negative integer. |
| `detection_count` | integer | yes | Number of consecutive scans the tag was detected above threshold before this event was generated (for filtering spurious detections). |

**Event generation rule:** A `ble_proximity` event is generated when a tag is detected
at or above RSSI threshold for 3 consecutive scans (configurable). A single detection
does not generate an event. This prevents spurious events from passing trucks.

---

### `ble_lost`

```json
{
  "tag_mac": "string",
  "last_rssi": "integer",
  "duration_s": "integer"
}
```

`duration_s` is the number of seconds from the corresponding `ble_proximity` event
to this `ble_lost` event — i.e., how long the equipment was detected as present.

---

### `motion`

```json
{
  "previous_state": "moving | stationary",
  "new_state":      "moving | stationary",
  "duration_s":     "integer"
}
```

`duration_s` is how long the device was in `previous_state` before this change.

---

### `upload_heartbeat`

```json
{}
```

Empty payload. Used by the cloud to confirm the device is alive and uploading
even when no field events have occurred (e.g., badge sitting in the truck during
an office day, charged and active but not moving).

---

### `low_battery`

```json
{
  "battery_pct": "integer",
  "voltage_mv":  "integer (optional)"
}
```

Generated at two thresholds: 10% and 5%. Not generated again at the same threshold
unless battery charges back above it and drops again.

---

### `reboot`

```json
{
  "reason":              "power_on | watchdog | user_reset | firmware_update",
  "previous_uptime_s":   "integer",
  "events_in_queue":     "integer"
}
```

`events_in_queue` at reboot time helps diagnose if events were pending upload.

---

## Batch Upload Format

The Blues Notecard uploads events as a JSON array. Each upload is one HTTP POST.

```json
[
  {
    "device_id": "ACT-3F8A21B4",
    "firmware_version": "0.3.1",
    "event_type": "shift_start",
    "timestamp_utc": "2026-03-14T06:47:00Z",
    "sequence_number": 1041,
    "payload": {
      "worker_id": "W-007"
    }
  },
  {
    "device_id": "ACT-3F8A21B4",
    "firmware_version": "0.3.1",
    "event_type": "gps",
    "timestamp_utc": "2026-03-14T06:47:15Z",
    "sequence_number": 1042,
    "payload": {
      "lat": 33.749001,
      "lon": -84.387982,
      "accuracy_m": 4.2,
      "fix_type": "3d"
    }
  },
  {
    "device_id": "ACT-3F8A21B4",
    "firmware_version": "0.3.1",
    "event_type": "ble_proximity",
    "timestamp_utc": "2026-03-14T06:47:20Z",
    "sequence_number": 1043,
    "payload": {
      "tag_mac": "F4:A7:2E:11:03:BC",
      "rssi": -62,
      "detection_count": 4
    }
  }
]
```

**Batch constraints:**
- Maximum events per batch: 500 (enforced by ingest API; Blues Notecard default
  upload window is 30 min at ~4 events/min = ~120 events typical)
- Minimum: 1 event per upload (heartbeat counts)
- All events in a batch must share the same `device_id`; mixed-device batches
  are rejected

---

## Schema Versioning

The `firmware_version` field in every event allows the cloud to apply version-specific
validation logic when the schema changes.

**Versioning rules:**
- Additive changes to `payload` (new optional fields) do not require a version bump
- Removing or renaming fields requires a firmware version bump and a cloud migration
- The cloud ingest API maintains a compatibility matrix of firmware versions to
  schema versions
- Events from firmware versions older than the last 3 minor versions may be rejected
  (generates a `schema_deprecated` response in the API; device must update firmware)
