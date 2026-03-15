# API Reference

Base URL: `https://func-actual-ingest-{env}.azurewebsites.net/api`

All endpoints require the `X-Actual-Api-Key` header. Keys are provisioned per device
at manufacturing time and per integration at setup time.

---

## Authentication

```
X-Actual-Api-Key: {api_key}
```

An invalid or missing key returns:

```
HTTP 401 Unauthorized
{"error": "Invalid or missing API key"}
```

---

## Endpoints

---

### POST /events

Ingest a batch of events from a badge.

**Auth:** Badge API key (provisioned at device registration)

**Request**

```
POST /api/events
Content-Type: application/json
X-Actual-Api-Key: {device_api_key}
```

Body: JSON array of 1–500 event objects. See [event-schema.md](event-schema.md) for
full field definitions.

```json
[
  {
    "device_id": "ACT-3F8A21B4",
    "firmware_version": "0.3.1",
    "event_type": "gps",
    "timestamp_utc": "2026-03-14T08:32:15Z",
    "sequence_number": 1042,
    "payload": {
      "lat": 33.749001,
      "lon": -84.387982,
      "accuracy_m": 4.2,
      "fix_type": "3d"
    }
  }
]
```

**Responses**

`202 Accepted` — All events accepted

```json
{
  "accepted": 47,
  "rejected": 0,
  "rejected_events": []
}
```

`207 Multi-Status` — Partial acceptance (some events failed validation)

```json
{
  "accepted": 45,
  "rejected": 2,
  "rejected_events": [
    {
      "sequence_number": 1089,
      "reason": "Missing required field: timestamp_utc"
    },
    {
      "sequence_number": 1091,
      "reason": "Invalid event_type: 'gps_update'"
    }
  ]
}
```

`400 Bad Request` — All events rejected (payload, schema, or structural error)

```json
{
  "error": "Request body must be a JSON array",
  "accepted": 0
}
```

`413 Payload Too Large` — More than 500 events in batch

```json
{
  "error": "Batch limit is 500 events. Received 612.",
  "accepted": 0
}
```

**Idempotency**

Duplicate events (same `device_id` + `sequence_number`) are silently accepted
and counted as accepted. The underlying `ON CONFLICT DO NOTHING` means no duplicate
is written. The response includes them in `accepted` count. This allows the device
to safely retry any upload without risk of duplication.

---

### POST /devices

Provision a new badge. Called during the manufacturing/provisioning workflow — not
called from the badge itself.

**Auth:** Provisioning API key (separate from device API key; stored in provisioning
tool only)

**Request**

```
POST /api/devices
Content-Type: application/json
X-Actual-Api-Key: {provisioning_api_key}
```

```json
{
  "device_id": "ACT-3F8A21B4",
  "company_id": "cust-001",
  "notes_device_uid": "dev:000000000000000",
  "notes": "Pilot batch 1, badge #3"
}
```

**Response**

`201 Created`

```json
{
  "device_id": "ACT-3F8A21B4",
  "company_id": "cust-001",
  "status": "inventory",
  "provisioned_at": "2026-03-14T09:00:00Z",
  "api_key": "ak_3F8A21B4_7a2f9e..."
}
```

The `api_key` in the response is the device's ingest API key. This is returned
**exactly once** at provisioning. Store it immediately. It is written to the
badge's flash storage during the provisioning step.

---

### GET /devices/{device_id}/status

Return current device status and last-seen information. Used by the field ops
coordinator to check a specific badge without opening Azure Portal.

**Auth:** Admin API key

**Request**

```
GET /api/devices/ACT-3F8A21B4/status
X-Actual-Api-Key: {admin_api_key}
```

**Response**

`200 OK`

```json
{
  "device_id": "ACT-3F8A21B4",
  "company_id": "cust-001",
  "status": "deployed",
  "current_worker_id": "W-007",
  "firmware_version": "0.3.1",
  "last_seen_at": "2026-03-14T07:45:00Z",
  "last_seen_minutes_ago": 47,
  "battery_pct": 72
}
```

`404 Not Found`

```json
{"error": "Device not found"}
```

---

### POST /equipment-tags

Register a BLE equipment tag.

**Auth:** Admin API key

**Request**

```
POST /api/equipment-tags
Content-Type: application/json
X-Actual-Api-Key: {admin_api_key}
```

```json
{
  "tag_mac": "F4:A7:2E:11:03:BC",
  "company_id": "cust-001",
  "equipment_name": "Truck 03",
  "equipment_type": "truck"
}
```

**Response**

`201 Created`

```json
{
  "tag_mac": "F4:A7:2E:11:03:BC",
  "company_id": "cust-001",
  "equipment_name": "Truck 03",
  "equipment_type": "truck",
  "status": "deployed",
  "created_at": "2026-03-14T09:05:00Z"
}
```

---

### POST /parcels

Load a parcel polygon for a customer. Typically called from the parcel loading
utility when onboarding a new customer or adding new properties.

**Auth:** Admin API key

**Request**

```
POST /api/parcels
Content-Type: application/json
X-Actual-Api-Key: {admin_api_key}
```

```json
{
  "company_id": "cust-001",
  "parcel_id": "13121-0042-0003",
  "county": "Fulton",
  "state": "GA",
  "address": "1234 Peachtree Rd NW, Atlanta, GA 30309",
  "customer_label": "HOA North Campus",
  "geojson": {
    "type": "Polygon",
    "coordinates": [[
      [-84.389, 33.752],
      [-84.388, 33.752],
      [-84.388, 33.751],
      [-84.389, 33.751],
      [-84.389, 33.752]
    ]]
  }
}
```

**Response**

`201 Created`

```json
{
  "parcel_id": "13121-0042-0003",
  "company_id": "cust-001",
  "loaded_at": "2026-03-14T09:10:00Z"
}
```

**Bulk parcel loading:**

Use the parcel loading utility script (`infra/scripts/load_parcels.py`) rather than
calling this endpoint one-by-one when loading a full county shapefile. The script
reads a GeoJSON or Shapefile, filters to a specific county and parcel ID list, and
POSTs in batches of 100.

---

## Error Response Format

All error responses follow this structure:

```json
{
  "error": "Human-readable error message",
  "code": "MACHINE_READABLE_CODE",
  "detail": "Optional additional context"
}
```

| HTTP Code | Meaning |
|-----------|---------|
| 400 | Bad request — caller error (malformed JSON, missing fields) |
| 401 | Invalid or missing API key |
| 404 | Resource not found |
| 409 | Conflict — resource already exists (use existing) |
| 413 | Payload too large |
| 422 | Unprocessable entity — schema validation failure |
| 500 | Internal server error — Actual's problem; logged to App Insights |
| 503 | Service unavailable — database or upstream unavailable |

---

## Rate Limits

At prototype scale, no rate limiting is enforced. Before production launch:

- Device ingest endpoint: 100 requests/minute per device (Blues Notecard uploads
  once every 30 min; this is orders of magnitude headroom)
- Admin endpoints: 60 requests/minute per API key

---

## Testing

A Postman collection is maintained at `infra/postman/actual-api.postman_collection.json`.

**Quick smoke test (curl):**

```bash
# Ingest a synthetic GPS event
curl -X POST https://func-actual-ingest-dev.azurewebsites.net/api/events \
  -H "Content-Type: application/json" \
  -H "X-Actual-Api-Key: YOUR_DEV_API_KEY" \
  -d '[{
    "device_id": "ACT-00000001",
    "firmware_version": "0.0.1",
    "event_type": "upload_heartbeat",
    "timestamp_utc": "2026-03-14T12:00:00Z",
    "sequence_number": 1,
    "payload": {}
  }]'

# Expected response:
# HTTP 202: {"accepted": 1, "rejected": 0, "rejected_events": []}
```
