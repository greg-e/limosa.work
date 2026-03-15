# Deployment Runbook

Step-by-step procedures for the three operational deployment tasks:
1. Provision a new badge
2. Deploy or update Azure infrastructure
3. Push a firmware update

---

## Part 1 — Provision a New Badge

Badge provisioning assigns a Device ID, API key, and customer configuration to a
physical badge before it ships to a customer.

**Prerequisites:**
- Badge hardware assembled and powered on
- Firmware flashed (see firmware-architecture.md for OTA, or use a USB/JTAG
  connection for first flash)
- Azure Functions ingest API deployed and accessible
- PostgreSQL running with `actual` schema initialized
- Provisioning API key available (stored in Azure Key Vault as `provisioning-api-key`)

---

### Step 1.1 — Generate a Device ID

Device ID format: `ACT-` + 8 uppercase hex characters

```powershell
# Generate a random Device ID (PowerShell)
$id = "ACT-" + (-join ((1..8) | ForEach-Object { "{0:X}" -f (Get-Random -Max 16) }))
Write-Host $id
# Example output: ACT-3F8A21B4
```

Record the Device ID. It will be stamped on the enclosure label and registered in
the device registry.

---

### Step 1.2 — Register the Device in the Cloud

```bash
curl -X POST https://func-actual-ingest-prod.azurewebsites.net/api/devices \
  -H "Content-Type: application/json" \
  -H "X-Actual-Api-Key: PROVISIONING_API_KEY" \
  -d '{
    "device_id": "ACT-3F8A21B4",
    "company_id": "cust-001",
    "notes": "Charter pilot batch 1 — badge 3 of 5"
  }'
```

**Response (save this):**
```json
{
  "device_id": "ACT-3F8A21B4",
  "company_id": "cust-001",
  "status": "inventory",
  "provisioned_at": "2026-03-14T09:00:00Z",
  "api_key": "ak_3F8A21B4_7a2f9e..."
}
```

The `api_key` is returned once. **Copy it immediately.** It will be written to
the badge's flash in the next step. It is not stored in plaintext in the database
after this point.

---

### Step 1.3 — Prepare the Device Configuration File

Create `device_config.json` for this badge:

```json
{
  "device_id": "ACT-3F8A21B4",
  "company_id": "cust-001",
  "api_key": "ak_3F8A21B4_7a2f9e...",
  "gps_interval_s": 15,
  "upload_interval_s": 1800,
  "ble_rssi_threshold": -70,
  "ble_detection_count_threshold": 3,
  "known_equipment_tags": [
    "F4:A7:2E:11:03:BC",
    "D3:11:CC:88:42:01"
  ],
  "worker_ids": [
    "W-001", "W-002", "W-003", "W-004", "W-005"
  ]
}
```

`known_equipment_tags`: The MAC addresses of the equipment tags assigned to this
customer. Get these from the equipment tag registry (see Step 1.5).

`worker_ids`: The customer's worker list. Get this from the customer onboarding form.

---

### Step 1.4 — Write Configuration to Badge Flash

Two options depending on firmware implementation:

**Option A: USB serial (for first provisioning)**
Connect badge to USB. Use the provisioning CLI tool (see `infra/tools/provision.py`):

```bash
python infra/tools/provision.py \
  --port COM3 \
  --config device_config.json
```

The script writes the config to the firmware's NVS config partition and reboots
the badge. After reboot, the badge should log a `reboot` event with
`reason: power_on` within 30 seconds.

**Option B: OTA via Notehub (for re-provisioning)**
If the badge is already connected to Notehub, push the config via the Notehub
web console as a note to the device's `config.db` Notefile.

---

### Step 1.5 — Register Equipment Tags

For each piece of equipment the customer uses:

```bash
curl -X POST https://func-actual-ingest-prod.azurewebsites.net/api/equipment-tags \
  -H "Content-Type: application/json" \
  -H "X-Actual-Api-Key: PROVISIONING_API_KEY" \
  -d '{
    "tag_mac": "F4:A7:2E:11:03:BC",
    "company_id": "cust-001",
    "equipment_name": "Truck 03",
    "equipment_type": "truck"
  }'
```

After registering tags, update the `known_equipment_tags` list in the device config
file for each badge assigned to this customer and re-provision (OTA config push).

---

### Step 1.6 — Load Customer Parcels

Customer parcels are loaded from county GIS shapefile data.

```bash
# Download parcel shapefile for the relevant county
# Georgia open GIS data: https://opendata.georgiagio.ga.gov

# Run the bulk parcel loader
python infra/scripts/load_parcels.py \
  --file fulton_parcels.geojson \
  --company-id cust-001 \
  --parcel-ids 13121-0042-0003,13121-0042-0004,13121-0099-0001 \
  --env prod
```

Alternatively, use the single-parcel API endpoint for small customer portfolios
(see api-reference.md POST /parcels).

---

### Step 1.7 — Verify Provisioning

After writing config and rebooting:

1. Check Notehub console: the device should appear as connected
2. Check ingest API logs: a `reboot` event should be visible for this device
3. Run the status endpoint:

```bash
curl https://func-actual-ingest-prod.azurewebsites.net/api/devices/ACT-3F8A21B4/status \
  -H "X-Actual-Api-Key: ADMIN_API_KEY"
```

Expected: `"status": "inventory"`, `"last_seen_at"` within the last 5 minutes.

4. Update device status to `deployed` when shipping to customer:

```sql
UPDATE actual.devices
SET status = 'deployed', updated_at = NOW()
WHERE device_id = 'ACT-3F8A21B4';
```

---

### Step 1.8 — Physical Preparation

Before shipping:
- Label the enclosure with the Device ID (printed label, visible exterior)
- Charge to ≥ 90% battery
- Attach lanyard or clip
- Photograph each badge with its Device ID label
- Record the badge-to-customer mapping in the hardware inventory sheet

---

## Part 2 — Deploy Azure Infrastructure

**Prerequisites:**
- Azure CLI installed and authenticated (`az login`)
- Access to the `rg-actual-prod` resource group
- Bicep infrastructure files in `infra/bicep/`

---

### Step 2.1 — Deploy to Development First

```powershell
az deployment group create `
  --resource-group rg-actual-dev `
  --template-file infra/bicep/main.bicep `
  --parameters environment=dev
```

Review output. Verify all resources created successfully.

---

### Step 2.2 — Run Database Migrations

```powershell
# Set connection string from Key Vault
$conn = az keyvault secret show `
  --vault-name kv-actual-dev `
  --name db-connection-string `
  --query value -o tsv

# Run migrations
psql $conn -f infra/migrations/001_initial_schema.sql
psql $conn -f infra/migrations/002_add_rls_policies.sql
# ... apply all pending migrations in order
```

**Migration file naming convention:** `NNN_description.sql` where NNN is a
zero-padded sequential number. Never reuse or modify an applied migration file —
write a new one.

---

### Step 2.3 — Deploy Functions

```powershell
# From repo root
func azure functionapp publish func-actual-ingest-dev
```

Or via GitHub Actions (preferred for production):
```
Push to main → deploy-functions.yml → deploys to dev → smoke test → awaits approval → deploys to prod
```

---

### Step 2.4 — Configure Notehub Webhook

In Blues Notehub web console (notehub.io):
1. Navigate to your project → Routes
2. Create or update the production route:
   - URL: `https://func-actual-ingest-prod.azurewebsites.net/api/events`
   - Method: POST
   - Custom header: `X-Actual-Api-Key: {ingest-api-key}`
3. Test the route with a sample payload
4. Confirm the ingest API returns 202

---

### Step 2.5 — Validate Production Deployment

Checklist before declaring production ready:

- [ ] Azure Functions app running and returning 200 on health check
- [ ] PostgreSQL accessible from Functions app (test with connection string in Key Vault)
- [ ] PostGIS extension installed: `SELECT PostGIS_Version();`
- [ ] All schema migrations applied: check `information_schema.tables`
- [ ] Notehub webhook routing to production ingest API
- [ ] Application Insights receiving telemetry
- [ ] Alert rules active (device offline, error rate, DB CPU)
- [ ] Power BI dataset connected to production PostgreSQL

---

## Part 3 — Push a Firmware Update

**Prerequisites:**
- New firmware binary compiled and tested in development
- Exit gate tests passed on the new firmware version (see firmware-architecture.md)
- Firmware binary uploaded to Azure Blob Storage firmware-updates container

---

### Step 3.1 — Upload Firmware Binary to Azure Storage

```powershell
az storage blob upload `
  --account-name stacualprod `
  --container-name firmware-updates `
  --name "actual-firmware-v0.4.0.bin" `
  --file "build/actual-firmware-v0.4.0.bin"
```

Note the blob URL. You will need it in the next step.

---

### Step 3.2 — Create Firmware Update in Notehub

In Blues Notehub web console:
1. Navigate to your project → Firmware
2. Upload the firmware binary
3. Set the target firmware version (must match `firmware_version` in event payloads)
4. Set the target device(s): **start with one device only**

---

### Step 3.3 — Push to One Device First

Select a single test device (not a customer-deployed badge). Push the update.

Monitor:
- Notehub: device downloads binary
- Device reboots → logs `reboot` event with `reason: firmware_update`
- Verify new `firmware_version` field appears in next upload from this device

If the device does not recover and upload a heartbeat within 10 minutes:
1. Check Notehub for rollback status
2. If no auto-rollback: physically connect to device via USB serial and reflash
   previous firmware manually
3. Investigate failure before proceeding

---

### Step 3.4 — Roll Out to All Customer Devices

Once the test device is confirmed healthy on the new firmware, push to all devices
via Notehub's bulk update targeting.

**Never push to all devices simultaneously.** Push in batches:
1. All inventory devices (no customer impact)
2. 1 deployed customer device (lowest-risk customer first)
3. Remaining deployed devices after 24-hour observation

---

### Step 3.5 — Verify Rollout

After rollout, run:

```sql
SELECT firmware_version, COUNT(*) AS device_count
FROM actual.devices
WHERE status = 'deployed'
GROUP BY firmware_version
ORDER BY firmware_version;
```

All deployed devices should show the new version within 24 hours of the bulk push
(depends on their upload schedule and connectivity).

---

## Quick Reference — Common Operations

### Check badge uptime for a customer

```sql
SELECT
  d.device_id,
  d.current_worker_id,
  d.last_seen_at,
  EXTRACT(EPOCH FROM (NOW() - d.last_seen_at)) / 3600 AS hours_since_last_seen
FROM actual.devices d
WHERE d.company_id = 'cust-001'
  AND d.status = 'deployed'
ORDER BY d.last_seen_at ASC;
```

### Find all unbound GPS events for a customer (geofencing gap)

```sql
SELECT COUNT(*)
FROM actual.canonical_events
WHERE company_id = 'cust-001'
  AND event_type = 'gps'
  AND unbound = TRUE
  AND event_timestamp > NOW() - INTERVAL '7 days';
```

### Manually refresh work_sessions view

```sql
REFRESH MATERIALIZED VIEW CONCURRENTLY actual.work_sessions;
```

### Update device status after hardware return

```sql
UPDATE actual.devices
SET status = 'returned', updated_at = NOW()
WHERE device_id = 'ACT-3F8A21B4';
```
