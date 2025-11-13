# Actual Development Plan  
## Proof of Concept → Prototype → Pilot  
**Version:** 1.0  
**Author:** Gregory (“bruh”)  

**Purpose:**  
Build Actual into a parcel-aware, equipment-aware, truth-based field telemetry system that supports the two core use cases:

1. **Job Activity Data (Truth of Work)**  
2. **Reverse Engineering Schedule & Estimate (Flow of Value)**

---

# 1. PHASE 1 — PROOF OF CONCEPT  
## Objective  
Prove Actual’s **truth layer** is technically viable:

- Badge → Tag → Parcel Geofence → Cloud → Work Sessions → Equipment Sessions → Flow Analytics  
- Reliable, automatic, battery-efficient, parcel-anchored truth  

---

## 1.1 Core Outcomes  

### Worker Activity (Badge)
- Movement detection  
- Parcel entry/exit  
- Time-in-parcel sessions  
- Batch cellular upload every 30 minutes  
- Battery life ≥ 7 days  

### Equipment Activity (Tag)
- BLE broadcast every 500–750 ms  
- Reliable Badge detection  
- Equipment session derived from proximity + parcel  

### Parcel Geofencing
- Parcel polygon import  
- Point-in-polygon lookup  
- Assign `parcel_id` to each Badge event  

### Cloud Truth Pipeline
- Ingest raw JSON  
- Add parcel_id  
- Hash for provenance  
- Store immutably  
- Create WorkSessions + EquipmentSessions  

### Use Case Validation
- **Job Activity Data** per worker, per parcel  
- **Reverse-Engineered Schedule & Estimate** from real field truth  

---

## 1.2 Detailed Tasks & To-Dos  

### A. Badge (PoC Hardware + Firmware)
- [ ] Order dev board (BG95-M3 or Blues Notecard)  
- [ ] Add IMU + BLE module  
- [ ] Program firmware:  
  - [ ] Sample IMU movement  
  - [ ] BLE scan 1–2 sec  
  - [ ] Capture GPS/cell location  
  - [ ] Store locally  
  - [ ] Wake modem every 30 min → upload batch  
- [ ] Measure current draw  
- [ ] Log 7-day battery drain  
- [ ] Document baseline behavior  

---

### B. Tag (BLE Beacon PoC)
- [ ] Nordic dev board (nRF52832/52811)  
- [ ] Program advertiser:  
  - [ ] Unique ID  
  - [ ] Rolling counter  
  - [ ] 500–750 ms interval  
- [ ] Test detection at 1m, 3m, 5m  
- [ ] Benchmark battery consumption  
- [ ] Run 7-day drain test  

---

### C. Parcel Geofencing Engine  
- [ ] Acquire parcel shapefile  
- [ ] Normalize polygons  
- [ ] Import into PostGIS  
- [ ] Build point-in-polygon (PIP) with `ST_Contains`  
- [ ] Create Azure Function:  
  - Input: lat/lon  
  - Output: parcel_id  
- [ ] Build debounce rule (“stay in parcel ≥ X seconds”)  
- [ ] Walk test across boundaries  

---

### D. Cloud Pipeline  
- [ ] Setup Azure IoT Hub  
- [ ] Write ingestion Function:  
  - [ ] Validate packet  
  - [ ] Assign parcel_id via PIP  
  - [ ] Hash record  
  - [ ] Write to Data Lake  
- [ ] Create WorkSession derivation logic  
- [ ] Create EquipmentSession logic  
- [ ] Build Power BI model v0.1  

---

### E. Use Case Validation  
- [ ] Field test on real parcels  
- [ ] Compare WorkSessions to stopwatch  
- [ ] Validate:  
  - [ ] parcel entry/exit  
  - [ ] equipment detection  
  - [ ] duration accuracy  
- [ ] Create variance report  

---

## 1.3 Definition of Done (PoC)  
- End-to-end truth pipeline works  
- Parcel geofence accuracy ≥ 90%  
- Tag detection accuracy ≥ 95%  
- Badge battery ≥ 7 days  
- Reliable WorkSessions + EquipmentSessions  
- Reverse-engineered flow is possible  

---

## 1.4 Zettelkasten Entries (Phase 1)  
- **ZK-001 — Truth Layer Definition**  
- **ZK-002 — Parcel as Job Unit**  
- **ZK-003 — Motion → Work Session**  
- **ZK-004 — BLE Proximity = Equipment Usage**  
- **ZK-005 — Constructal Flow (Parcel Movement)**  
- **ZK-006 — Estimating From Truth**

---

# 2. PHASE 2 — PROTOTYPE  
## Objective  
Build **real hardware** + **middleware** usable in field trials.

Printed PCB + 3D-printed housings + parcel-aware cloud engine v1.

---

## 2.1 Core Outcomes  

### Badge v1.0
- Custom PCB  
- BLE + IMU + LTE-M  
- Replaceable 1500 mAh battery  
- 3D printed housing  
- OTA firmware  

### Tag v1.0
- Custom PCB  
- BLE beacon  
- IP54 enclosure  
- 6+ month battery life  

### Middleware v1
- WorkSession v2  
- EquipmentSession v2  
- Travel + setup + wait detection  
- Parcel engine v1.1  
- Power BI digital twin v1  
- Basic FSM integration  

### Field Trials
- 10 badges + 10 tags  
- 2–3 routes  
- Weekly firmware cycles  

---

## 2.2 Detailed Tasks & To-Dos  

### A. Badge Hardware v1.0
- [ ] Create PCB  
- [ ] Select LTE-M + BLE + IMU + PMIC  
- [ ] Layout & order 20–30 PCBs  
- [ ] Assemble units  
- [ ] Design & print 3D housings  
- [ ] Add waterproofing  
- [ ] Add OTA firmware support  

### Badge Firmware
- [ ] BLE session logic  
- [ ] Motion thresholds  
- [ ] GPS smoothing  
- [ ] Parcel confidence scoring  
- [ ] OTA updater  

---

### B. Tag Hardware v1.0
- [ ] Design PCB  
- [ ] Tune antenna  
- [ ] CR2032 mount  
- [ ] Seal housing  
- [ ] Rolling-counter advertiser firmware  
- [ ] Build 20–30 units  

---

### C. Parcel Engine v1.1
- [ ] Move PIP logic to Azure with caching  
- [ ] Add GPS drift correction  
- [ ] Add parcel adjacency graph  
- [ ] Optimize polygon indexing  
- [ ] Benchmark latency  

---

### D. Middleware v1
- [ ] WorkSession v2 derivation  
- [ ] EquipmentSession v2  
- [ ] TravelSession + setup/wait logic  
- [ ] FSM integration for Service Appointments  
- [ ] Power BI Digital Twin v1  

---

### E. Field Trials (2–3 Branches)
- [ ] Deploy hardware  
- [ ] Weekly firmware updates  
- [ ] Validate across 5–10 parcels  
- [ ] Weekly flow review  
- [ ] Record variance, drift, missed detections  

---

## 2.3 Definition of Done (Prototype)  
- Badge battery life ≥ 7–10 days  
- Tag battery life ≥ 4–6 months  
- Equipment detection reliable outdoors  
- Parcel geofence stable across 20+ parcels  
- Crew acceptance (“does not get in the way”)  
- Supervisors trust parcel-level truth  

---

## 2.4 Zettelkasten Entries (Phase 2)  
- **ZK-007 — OTA Firmware Strategy**  
- **ZK-008 — Badge Power Budgeting**  
- **ZK-009 — Parcel Drift Correction**  
- **ZK-010 — Equipment At Parcel**  
- **ZK-011 — Trustworthiness Metrics**

---

# 3. PHASE 3 — PILOT  
## Objective  
Deploy 100 badges + 200 tags + full parcel maps with a real partner.

Pilot = reliable, partner-ready, but not mass-production.

---

## 3.1 Core Outcomes  

### Hardware v1.2
- Improved PCB  
- Stronger 3D housings  
- Better waterproofing  
- Tag v1.2 sealed enclosure  

### Parcel Engine v2
- All county parcels imported  
- Polygon normalization  
- Pre-indexing  
- Geofence caching  
- High-performance PIP  

### Middleware v2
- Full automation rules  
- FSM integration at scale  
- Payroll export  
- Estimation improvement model  
- Route optimization feedback  

### Field Deployment
- Crews trained  
- Equipment tagged  
- Daily monitoring  
- Weekly reviews  
- Monthly ROI reports  

---

## 3.2 Detailed Tasks & To-Dos  

### A. Hardware Production (Pilot Scale)
- [ ] PCB v1.2  
- [ ] Housings (ABS)  
- [ ] Waterproof seals  
- [ ] 100 badges built  
- [ ] 200 tags built  
- [ ] Provisioning workflow (QR/NFC)  

---

### B. Parcel Engine v2
- [ ] Import all parcels  
- [ ] Fix geometry errors  
- [ ] Build index  
- [ ] Add caching  
- [ ] Benchmark < 50ms lookups  

---

### C. Middleware v2
- [ ] Automate:  
  - Start/stop work  
  - Equipment presence  
  - Parcel transitions  
- [ ] FSM sync  
- [ ] Payroll export  
- [ ] Estimating model  
- [ ] Power BI dashboards  

---

### D. Pilot Deployment
- [ ] Train partner crews  
- [ ] Install tags on equipment  
- [ ] Deploy badges  
- [ ] Monitor daily  
- [ ] Weekly partner reviews  
- [ ] Monthly ROI scoring  

---

## 3.3 Definition of Done (Pilot)
- ROI demonstrated  
- Supervisors rely on parcel data  
- Payroll accuracy delta ≤ 0.1%  
- Route optimization validated  
- Estimating model updated  
- Partner requests expansion  

---

## 3.4 Zettelkasten Entries (Phase 3)  
- **ZK-012 — ROI Friction Points**  
- **ZK-013 — Flow-Based Routing**  
- **ZK-014 — Pilot Lessons Learned**  
- **ZK-015 — Proof of Work Cycle**

---

# END OF DOCUMENT
