# Firmware Architecture

## Overview

The badge firmware runs on an nRF52840 or ESP32-C3 MCU. It has one purpose: generate
accurate, timestamped, sequenced events and deliver them to the Blues Notecard for
upload. Every design decision is subordinate to that purpose.

---

## Firmware Responsibilities

1. Sample GPS position on a schedule
2. Scan BLE for equipment tag advertisements
3. Monitor accelerometer for motion state changes
4. Maintain a local event queue in flash (store-and-forward)
5. Hand batches to the Blues Notecard for upload on a schedule
6. Display worker ID and shift status on the e-ink display
7. Accept worker assignment via button input (shift start)
8. Never lose an event due to cellular unavailability

---

## RTOS / Framework Selection

**Preference: Zephyr RTOS (nRF52840)**
- Native support for nRF52840 via nRF Connect SDK
- BLE stack (SoftDevice or Zephyr BT) included
- Power management subsystem for deep sleep + wake-on-interrupt
- I2C/SPI device driver abstractions for display and accelerometer
- Blues Wireless has Zephyr sample code for Notecard I2C integration

**Fallback: Arduino framework (ESP32-C3 or nRF52840 via Adafruit BSP)**
- Faster prototyping; larger available library surface
- Acceptable for prototype; not recommended for production
- If Arduino is used: must eliminate `delay()` calls that block BLE scanning;
  use FreeRTOS tasks with `vTaskDelay()` instead

Final framework choice is the firmware engineer's call. The event schema and the
store-and-forward requirements are framework-agnostic.

---

## State Machine

```
              ┌──────────────┐
              │    BOOTING   │
              └──────┬───────┘
                     │ hardware init complete
                     ▼
              ┌──────────────┐
  ┌──────────▶│  UNASSIGNED  │◀──────────────────────────┐
  │           └──────┬───────┘                           │
  │                  │ worker assigned (button)          │
  │                  ▼                                   │
  │           ┌──────────────┐                           │
  │           │  SHIFT_START │ — logs shift_start event  │
  │           └──────┬───────┘                           │
  │                  │                                   │
  │                  ▼                                   │
  │  ┌───────────────────────────────┐                  │
  │  │          ACTIVE               │                  │
  │  │  - GPS sampling loop          │                  │
  │  │  - BLE scan loop              │                  │
  │  │  - Accelerometer monitoring   │                  │
  │  │  - Upload timer (30 min)      │                  │
  │  └──────┬──────────────┬─────────┘                  │
  │         │              │                             │
  │ manual  │      extended stationary                   │
  │ end     │      + time threshold                      │
  │         ▼              ▼                             │
  │  ┌──────────────────────────┐                       │
  │  │       SHIFT_END          │ — logs shift_end event │
  │  └──────────────────────────┘                       │
  │                  │                                   │
  │                  │ final upload attempt               │
  │                  ▼                                   │
  └──────────────────────────────────────────────────────┘
```

**BOOTING:** Hardware initialization. Accelerometer, BLE radio, display, Notecard
I2C bus. Logs a `reboot` event immediately on power-on.

**UNASSIGNED:** Badge is powered but no worker is assigned. GPS is off (saves power).
BLE scanner is off. Display shows "Unassigned." Notecard is in low-power idle.

**SHIFT_START:** Worker assignment input received (button + worker selection, or
NFC tap if implemented later). Logs `shift_start` event. Transitions to ACTIVE.

**ACTIVE:** Main operating state. All subsystems running. Handles all loops.

**SHIFT_END:** Logs `shift_end` event. Triggers a final upload attempt. Transitions
to UNASSIGNED. Does not power off — badge stays on for next shift assignment.

---

## Task / Loop Architecture (Zephyr RTOS)

Zephyr implementation uses cooperative threads. Alternative: FreeRTOS task model
(identical concept, different API).

```c
// Thread priorities (lower number = higher priority in Zephyr)
// K_PRIO_COOP(n) = cooperative; K_PRIO_PREEMPT(n) = preemptible

THREAD: gps_sample_thread      // priority: preempt(5)
THREAD: ble_scan_thread        // priority: preempt(6)
THREAD: accel_monitor_thread   // priority: preempt(7)
THREAD: upload_thread          // priority: preempt(8)
THREAD: display_update_thread  // priority: preempt(9)
THREAD: button_handler_thread  // priority: coop(0) — highest; UI responsiveness
```

**Event queue:** A ring buffer in flash (or SRAM for prototype) shared across threads.
Each thread writes events to the queue. The upload thread drains the queue on a timer.

```c
// Event queue — flash-backed ring buffer
// Capacity: 2000 events (covers 7 days of normal operation if upload fails for 72h)
// Each event: ~200 bytes max → 400 KB flash reservation
K_MSGQ_DEFINE(event_queue, sizeof(actual_event_t), 2000, 4);
```

---

## GPS Sampling Loop

```
Period: 15 seconds (configurable via compile-time constant)

Every 15s:
  1. Wake GPS (Blues Notecard handles GPS; request GPS fix via I2C)
  2. Wait up to 10s for fix (configurable timeout)
  3. If fix obtained: write gps event to queue
  4. If fix not obtained: write gps_no_fix event to queue
  5. Apply motion gate: if accelerometer reports stationary for > 5 consecutive
     samples, reduce GPS sample rate to 60s (power optimization)
  6. Resume 15s rate on next motion detected
```

**Note on GPS via Blues Notecard:** The Notecard integrates GPS. The MCU requests
a GPS reading via the Notecard's JSON API over I2C (`{"req":"card.location"}`).
The MCU does not talk to a separate GPS chip. This simplifies the hardware and the
firmware — but it means GPS warm-up time is subject to the Notecard's internal state.
Budget 5–10s for a GPS fix after the Notecard wakes from sleep.

---

## BLE Scanner Loop

```
Period: 200ms scan interval, 50ms scan window

Continuously:
  1. Receive BLE advertisements from nearby devices
  2. Filter: keep only advertisements whose MAC is in the known_equipment_tags list
     (loaded from flash at boot; updated via OTA configuration)
  3. For each known tag detected:
     a. Increment consecutive_detection_count[tag_mac]
     b. Record RSSI
     c. If consecutive_detection_count >= 3 AND tag not currently "present":
        - Write ble_proximity event to queue
        - Set tag state to "present"
  4. For each known tag currently "present" that was NOT seen in this scan window:
     a. Increment consecutive_miss_count[tag_mac]
     b. If consecutive_miss_count >= 5:
        - Write ble_lost event to queue (with duration)
        - Set tag state to "absent"
        - Reset consecutive_detection_count and consecutive_miss_count
```

**Spurious detection filtering:** Requiring 3 consecutive detections before generating
a `ble_proximity` event filters out a truck driving past a job site. A passing vehicle
at typical road speed will be in range for < 3 scan windows.

**Known tags list:** A list of equipment tag MAC addresses assigned to this device's
customer at provisioning. Updated via OTA configuration push (not via firmware update).
Format: a small JSON config file written to flash by the provisioning tool.

---

## Store-and-Forward

The event queue is the central data structure. Its design guarantees no data loss.

**Write path (any event-generating loop):**
```c
int ret = k_msgq_put(&event_queue, &event, K_NO_WAIT);
if (ret == -ENOMSG) {
    // Queue full: overwrite oldest event with special overflow marker
    // Log overflow_event to a separate overflow counter (not to the main queue)
    // This is a last-resort path; should never occur in normal operation
    // at 2000-event capacity
}
```

**Upload path (upload_thread, runs every 30 minutes):**
```c
// 1. Drain up to 100 events from queue into upload_buffer[]
// 2. Serialize to JSON array
// 3. Send to Blues Notecard via I2C
//    {"req":"note.add","file":"data.qo","body":upload_buffer,"sync":true}
// 4. Wait for Notecard sync confirmation (with timeout)
// 5. On success: mark events as uploaded (do not pop from queue yet in prototype;
//    maintain a high-water mark pointer)
// 6. On failure: leave queue unchanged; Notecard will retry on next interval
// 7. After N successful uploads: compact queue (remove uploaded events)
```

**Persistence across reboots:** The event queue must survive a power cycle. Options:
- Write queue to flash after each event append (safest; higher write wear)
- Write queue to flash on each upload batch (acceptable; may lose up to 30 min
  of events on unexpected power loss)
- Use Zephyr NVS (non-volatile storage) or LittleFS on external flash

**Minimum requirement (exit gate):** No events lost during a simulated power cycle
when there are unuploaded events in the queue. The firmware engineer must demonstrate
this with a test: write 50 events, cut power, restore power, upload — all 50 events
must appear in the cloud.

---

## Sequence Number Management

The sequence number is a monotonically increasing integer per device. It:
- Starts at 1 on first boot (persisted to flash)
- Increments by 1 for every event written to the queue
- Is persisted to NVS after each increment (so it survives reboots)
- Never resets — even after firmware updates

**Persistence implementation (Zephyr NVS):**
```c
struct nvs_fs fs;
uint16_t SEQ_ID = 1;  // NVS entry ID for sequence number

// Read on boot
nvs_read(&fs, SEQ_ID, &sequence_number, sizeof(uint32_t));

// Write after each event
sequence_number++;
nvs_write(&fs, SEQ_ID, &sequence_number, sizeof(uint32_t));
```

---

## Display Management

The e-ink display updates only when content changes. It does not refresh on a timer.

**Content rules:**

| State | Display content |
|-------|----------------|
| UNASSIGNED | `UNASSIGNED` + firmware version |
| ACTIVE | Worker ID (large) + shift start time (small) + battery % |
| SHIFT_END | `SHIFT ENDED` + total shift duration |
| Low battery (≤10%) | Add battery warning icon to ACTIVE display |
| No cellular | Add cellular-off icon to ACTIVE display |

e-ink refresh triggers:
- State change (UNASSIGNED → ACTIVE → etc.)
- Battery level crosses 10% or 5% threshold
- Cellular status changes (connected ↔ offline)

**Do not** refresh the display on every GPS event or every BLE detection. e-ink
refresh takes 2 seconds and draws current. Unnecessary refreshes degrade battery life.

---

## OTA Firmware Update

OTA firmware updates are delivered via the Blues Notecard. The Notecard supports
DFU (Device Firmware Update) over-the-air via Notehub.

**Protocol:**
1. New firmware binary compiled and uploaded to Azure Blob Storage (firmware-updates container)
2. Blues Notehub configured with the firmware update URL
3. Notehub pushes a firmware update notification to the Notecard on next sync
4. Notecard downloads the binary and triggers MCU firmware update via DFU
5. MCU reboots into new firmware
6. New firmware logs `reboot` event with `reason: firmware_update`

**OTA safety requirements:**
- Rollback must be possible: if the new firmware fails to log a heartbeat within
  10 minutes of reboot, the Notecard should trigger rollback (requires MCU bootloader
  support; implement before first production firmware push to customers)
- Firmware version must be embedded via build-time constant, not runtime configuration
- Never push a firmware update to all devices simultaneously; use Notehub's
  targeted update feature to push to one device first, verify, then roll out

---

## Firmware Configuration (Flash-Stored)

Device-specific configuration stored in flash at provisioning. Updated via OTA
configuration push (not a firmware update).

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
    "D3:11:CC:88:42:01",
    "A1:B2:C3:D4:E5:F6"
  ],
  "worker_ids": [
    "W-001", "W-002", "W-003", "W-004", "W-005",
    "W-006", "W-007"
  ]
}
```

The `worker_ids` list is what populates the badge's shift-assignment menu. When the
customer adds or removes workers, this list is updated via OTA configuration push —
no new firmware needed.

---

## Exit Gate Test Protocol

Before Phase 2 is complete, the firmware engineer must run and document all five
exit gate tests.

### Test 1: 72-hour continuous operation
- Flash 5 badges with production firmware
- Leave running in normal office environment (GPS signal available)
- Check upload logs at 24h, 48h, 72h
- **Pass:** All 5 badges online, no reboots, event count matches expected rate

### Test 2: GPS accuracy at known boundary
- Plant badge at a measured point 10m from a known parcel boundary
- Run for 30 GPS samples
- **Pass:** ≥ 85% of samples within 15m of known position by cross-referencing
  with ground truth GPS (phone GPS or survey instrument)

### Test 3: BLE detection rate at 5m
- Place a Ruuvi Tag at 5m from badge in open air
- Run 100 scan cycles
- **Pass:** ≥ 85% of cycles produce a `ble_proximity` event
- **Also test:** Place a tag at 10m — confirm detection rate drops below 50%
  (confirms RSSI threshold is calibrated)

### Test 4: Upload reliability (95% target)
- Run badge for 8 hours in a location with normal cellular coverage
- Count upload attempts vs. confirmed successes in Notehub logs
- **Pass:** ≥ 95% of upload attempts result in a confirmed 202 from the ingest API

### Test 5: Power cycle with unuploaded events
- Write 50 events to the queue without triggering an upload
- Cut power (simulate battery disconnect)
- Restore power
- Allow upload to run
- Check cloud: all 50 events must appear
- **Pass:** 50/50 events in cloud after recovery
