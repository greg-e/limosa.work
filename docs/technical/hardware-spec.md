# Hardware Specification

## Actual Badge (Prototype / v0.1)

The badge is the product's primary hardware artifact. Everything else is infrastructure
for it.

---

### Functional Requirements

| Requirement | Target | Notes |
|-------------|--------|-------|
| Battery life | ≥ 7 days continuous operation | Single charge, normal duty cycle |
| GPS accuracy | ≤ 15m from known property boundary | Under open sky; degraded in dense tree cover |
| BLE detection range | ≥ 5m reliable, ≥ 10m line-of-sight | Equipment tag detection |
| BLE detection rate | > 85% over 100 test events at 5m | Exit gate metric |
| Upload reliability | > 95% of scheduled batch uploads succeed | Under normal cellular coverage |
| Operating temperature | -10°C to 55°C | Field conditions in Southeast US |
| Weather resistance | IP54 minimum | Rain and dust exposure expected |
| Display | Worker ID + shift start time readable in sunlight | E-ink; no backlight required |
| Form factor | Wearable; lanyard or badge clip compatible | Not to exceed credit card footprint by > 2x |

---

### Component Stack

#### MCU — Primary candidates

**Option A: Nordic nRF52840**
- Architecture: ARM Cortex-M4F, 64 MHz
- RAM: 256 KB, Flash: 1 MB
- BLE: 5.0 (scanner + peripheral in simultaneous roles)
- Power: Deep sleep ~1.5 µA; BLE advertising ~4 mA; active ~5 mA
- SDK: Zephyr RTOS (recommended) or Nordic nRF5 SDK
- Reason to prefer: Best-in-class BLE power profile; Zephyr has strong community
  and Blues Wireless examples

**Option B: Espressif ESP32-C3**
- Architecture: RISC-V single-core, 160 MHz
- RAM: 400 KB, Flash: 4 MB (module dependent)
- BLE: 5.0
- Power: Deep sleep ~5 µA; active ~80 mA (higher than nRF; manage with duty cycle)
- SDK: ESP-IDF or Arduino framework
- Reason to prefer: Lower cost, faster firmware prototyping, large community
- Reason to prefer nRF instead: Better power efficiency for 7-day target

**Selection note:** MCU is finalized during Phase 2 by the firmware engineer. The
firmware architecture document covers both paths. The hardware spec will be updated
to reflect the final selection after the first 72-hour battery test.

---

#### Cellular + GPS Module — Blues Wireless Notecard

**Model:** NOTE-WBEX (LTE-M/NB-IoT + GPS, worldwide)
- Connectivity: LTE-M (Cat-M1) and NB-IoT on global bands
- GPS: u-blox SARA-R4 integrated (same module)
- Interface to MCU: I2C or UART (I2C preferred for simplicity)
- API: JSON over I2C/UART — no AT commands; human-readable request/response
- Data routing: Notehub (Blues cloud router) → HTTPS webhook to ingest API
- Power: Active ~400 mA (cellular transmit peak); idle ~7 mA; sleep ~8 µA
- Operating temp: -40°C to 85°C

**Notehub routing configuration:**
Events from the Notecard are routed through Blues Notehub to a configurable HTTPS
endpoint. The ingest API URL and API key are provisioned in Notehub at device
registration time. The MCU sends events to the Notecard as JSON; the Notecard
batches and uploads them to Notehub; Notehub forwards to the ingest API.

**Why Blues Notecard:**
- Eliminates the need to manage SIM cards, APN configuration, or cellular
  provider relationships
- GPS is collocated with cellular in one module — no separate GPS chip required
- JSON-native API dramatically reduces firmware complexity
- Blues Developer Relations is reachable and responsive (community forum + Discord)
- Dataplan included in hardware cost at low volumes; bulk plan available at scale

**Single-source risk:** See [docs/roles/10-hardware-ops-supply-chain.md] for
mitigation strategy and alternative modem candidates.

---

#### BLE Scanner (on MCU)

The MCU BLE radio operates in scanner role to detect equipment tag advertisements.

- Scan interval: 200ms (configurable to balance power vs. detection latency)
- Scan window: 50ms per interval
- Detection criterion: RSSI > -70 dBm (configurable; corresponds to ~5m range
  in open air)
- Tag identification: by Bluetooth MAC address or UUID (protocol TBD by firmware
  engineer; MAC preferred for simplicity at prototype)
- Event generated: `ble_proximity` event when a known tag MAC/UUID is detected
  above threshold

---

#### Accelerometer

**Purpose:** Motion state classification (moving vs. stationary). Used to:
- Tag GPS events with motion context
- Suppress spurious GPS pings during stationary periods (power optimization)
- Detect shift-end condition (extended stationary period at end of day)

**Candidate:** Bosch BMA400 or STMicroelectronics LIS2DH12
- Both support hardware low-power wake-on-motion interrupt
- SPI or I2C interface
- Current draw in low-power mode: < 5 µA

---

#### E-ink Display

**Purpose:** Worker-facing status without requiring a phone or backlit screen.

Displays:
- Worker ID (assigned at shift start)
- Shift start time
- Badge status: charging / active / offline (no cellular)

**Candidate:** Waveshare 2.13" e-ink HAT (212 × 104, black/white) or equivalent
- SPI interface
- Refresh rate: ~2 seconds (acceptable for shift-start assignment; not used for
  real-time data)
- Power: ~26 mW active; ~0 µW holding static image

---

#### Power

**Battery target:** Lithium polymer (LiPo), 2000–3000 mAh
**Charging:** USB-C, 5V charging circuit
**Power management:** Hardware duty cycling on MCU + Notecard sleep modes

**Rough power budget (for 7-day target at 2000 mAh):**

| Mode | Current draw | Duty cycle | Avg contribution |
|------|-------------|------------|-----------------|
| MCU active (GPS + BLE scan) | ~10 mA | 20% | 2.0 mA |
| Notecard cellular upload | ~400 mA | 0.5% (2 min/30 min) | 2.0 mA |
| Notecard idle | ~7 mA | 79.5% | 5.6 mA |
| MCU sleep | ~2 µA | 0% (not used for main loop) | ~0 mA |
| **Estimated average** | | | **~9.6 mA** |

At 2000 mAh ÷ 9.6 mA = ~208 hours ≈ 8.7 days of operation.

This is a first-order estimate. Actual will be lower due to GPS cold starts,
startup current spikes, and accelerometer overhead. Firmware engineer validates
against the 7-day exit gate.

---

#### Enclosure

**Version at prototype:** 3D-printed PLA or PETG
- IP54 rating is the target (see Industrial Designer role doc)
- Dimensions: TBD by Industrial Designer during Phase 2 optional engagement
- Mounting: Lanyard attachment point + belt clip hole
- At prototype: enclosure is functional but not production-grade

**Note:** Do not engage the Industrial Designer until the firmware exit gate is met.
The enclosure design should follow a working firmware, not precede it.

---

## Equipment Tag (BLE Beacon)

The equipment tag is a passive BLE beacon attached to a truck, trailer, or mower.
It is not made by Actual. It advertises over BLE on a standard profile.

### Requirements

| Requirement | Target |
|-------------|--------|
| BLE version | 5.0 |
| Advertisement interval | ≤ 200ms (ensures fast detection by badge scanner) |
| RSSI at 1m | ≥ -50 dBm |
| Battery life | ≥ 12 months |
| Weather resistance | IP65 minimum (outdoor equipment exposure) |
| Mounting | Adhesive + optional screw mount |
| Form factor | < 50mm × 50mm × 15mm |

### Candidate Devices

**Option A: Ruuvi Tag (RuuviTag Pro)**
- IP67, weatherproof, CR2477 battery (~12-18 months)
- Open-source firmware; configurable advertisement interval
- Available in bulk from Ruuvi.com

**Option B: Nordic Semiconductor Thingy:53 (repurposed)**
- Development kit option only; not a production recommendation

**Option C: Generic iBeacon / Eddystone beacon (various manufacturers)**
- Search: "IP65 BLE beacon industrial" on Alibaba or Mouser
- Verify: advertisement interval, battery life, temperature rating before ordering
- Risk: firmware is not field-upgradeable on generic beacons

**Recommended for prototype:** Ruuvi Tag. Known quality, IP67, field-proven.
Switch to a lower-cost generic at scale once detection is validated.

---

### Tag-to-Equipment Assignment

Each tag has a MAC address. The MAC address is recorded at provisioning and mapped
to a piece of equipment (e.g., `truck-001`, `trailer-003`, `mower-005`) in the
device registry in PostgreSQL.

When a badge detects a tag MAC, the cloud system resolves the MAC to equipment ID.
The engineer does not hard-code equipment names in firmware — firmware reports the
MAC address; the cloud resolves identity.

---

## Hardware BOM (Prototype Estimate)

| Component | Unit cost (est.) | Qty per badge kit | Notes |
|-----------|-----------------|-------------------|-------|
| Blues Notecard NOTE-WBEX | $49.00 | 1 | Retail; bulk pricing available |
| Blues Notecarrier (breakout board) | $12.00 | 1 | Dev use; custom PCB replaces this in v1 |
| nRF52840 module (Adafruit Feather nRF52840) | $25.00 | 1 | Prototype; custom PCB in v1 |
| LiPo battery 2000 mAh | $10.00 | 1 | |
| USB-C charging board | $5.00 | 1 | |
| E-ink display (2.13") | $15.00 | 1 | |
| Accelerometer module | $3.00 | 1 | |
| Misc (connectors, wire, headers) | $5.00 | 1 | |
| 3D-printed enclosure | $5.00 | 1 | Material cost only |
| **Badge total (prototype)** | **~$129.00** | | |
| Ruuvi Tag (equipment tag) | $35.00 | per equipment unit | |

**Per crew deployment (5 crew members, 4 equipment units):**
- 5 badges × $129 = $645
- 4 equipment tags × $35 = $140
- **Total hardware per crew: ~$785**

This is prototype BOM. Production PCB integration of MCU + Notecard + sensors
will reduce the badge BOM to an estimated $40–$60 per unit at 100-unit volume.
