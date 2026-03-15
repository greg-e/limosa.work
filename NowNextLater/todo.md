# Now / Next / Later

**As of:** March 15, 2026
**Stage:** Pre-prototype. Self-funded. $0 revenue.

This file is the single source of what to do and in what order. It is not aspirational.
Every item here has a specific exit condition. When that condition is met, cross it off.

---

## NOW — Do These Before Anything Else

*These are the only things that move the business forward in the next 30 days.
Nothing in Next or Later matters until these are done.*

---

### 1. Register the Georgia LLC

**Why now:** You cannot open a business bank account, sign a charter partner agreement,
or receive money without a legal entity.

**Who does it:** You, with guidance from the business attorney (role 01).

**Steps:**
- [ ] 1.1 — Engage a business attorney (see docs/roles/01-business-attorney.md for
      where to find, vetting questions, and budget)
- [ ] 1.2 — Choose the LLC name: confirm "Actual Technologies LLC" or your preferred
      name is available on the Georgia SOS name search
      (sos.ga.gov/corporations-divisions-bureaus)
- [ ] 1.3 — Attorney files Articles of Organization with the Georgia Secretary of State
- [ ] 1.4 — Obtain the EIN from the IRS (same day online: irs.gov/ein)
- [ ] 1.5 — Attorney drafts operating agreement (single-member; founder owns 100%)
- [ ] 1.6 — Open a business bank account (Wells Fargo, Chase, or Relay for startups)

**Exit:** LLC registered, EIN in hand, bank account open, operating agreement signed
**Budget:** $500–$1,500 (attorney fee)
**Deadline:** End of March 2026

---

### 2. File a Provisional Patent

**Why now:** The moment you describe the system publicly to a charter partner candidate,
the 12-month window to file a non-provisional patent starts. A provisional stakes your
priority date and costs far less than a non-provisional.

**Who does it:** Patent attorney (role 02), with your technical documentation as input.

**Steps:**
- [ ] 2.1 — Engage a patent attorney with hardware + software experience
      (see docs/roles/02-patent-attorney.md)
- [ ] 2.2 — Provide the attorney with docs/technical/system-architecture.md,
      docs/technical/hardware-spec.md, and docs/technical/event-schema.md
      as the technical disclosure
- [ ] 2.3 — Define the two core claims with the attorney:
      - Claim 1: Badge-as-identity (wearable device that is the identity record, not
        a phone app)
      - Claim 2: Passive provenance architecture (equipment tag + badge proximity =
        automatic labor-to-task binding without crew action)
- [ ] 2.4 — Attorney files provisional application with USPTO
      (micro-entity filing fee: ~$320)
- [ ] 2.5 — Receive USPTO confirmation and file number; note the priority date

**Exit:** Provisional patent filed, priority date established, USB filing confirmation
saved
**Budget:** $2,000–$4,000 (attorney fee + USPTO micro-entity fee)
**Deadline:** Before first charter partner outreach call

---

### 3. Buy the Hardware — Phase 2 Prototype Kit

**Why now:** The firmware engineer (Step 4) cannot start without hardware in hand.
Ordering takes time. The kit needs to arrive before the engagement begins.

**Who does it:** You.

**Steps:**
- [ ] 3.1 — Order Blues Wireless Notecard (NOTE-WBEX) × 7
      (5 production + 2 spares)
      from blues.com or Mouser; estimated ~$49 each
- [ ] 3.2 — Order Blues Notecarrier (breakout) × 7
      from blues.com; ~$12 each
- [ ] 3.3 — Order Adafruit Feather nRF52840 Express × 7
      from adafruit.com; ~$25 each
- [ ] 3.4 — Order LiPo batteries 2000mAh × 7
      (Adafruit #2011 or similar); ~$10 each
- [ ] 3.5 — Order E-ink display 2.13" (212x104) × 7
      (Waveshare or Adafruit equivalent)
- [ ] 3.6 — Order Ruuvi Tag Pro × 8
      (5 equipment tags + 3 spares) from ruuvi.com; ~$35 each
- [ ] 3.7 — Order accelerometer breakout × 7
      (Adafruit BMA400 or LIS2DH12)
- [ ] 3.8 — Sign up for Blues Notehub account and create the Actual project
      (notehub.io — free tier sufficient for prototype)
- [ ] 3.9 — Confirm Blues Connectivity Plan: Developer plan free for prototype
      (covers cellular data); confirm plan tier before production

**Exit:** All components received and confirmed functional with a basic I2C communication
test between the Feather and the Notecard
**Budget:** ~$785–$900 (full kit for 5 badges + spares + equipment tags)
**Deadline:** Order by end of this week; delivery expected within 7–14 days

---

### 4. Hire the Firmware Engineer

**Why now:** This is the blocking role. Phase 2 cannot proceed without it. Nothing
else in the prototype timeline moves until this person is found and engaged.

**Steps:**
- [ ] 4.1 — Post on Upwork with the role requirements from
      docs/roles/03-firmware-engineer.md (copy the technical requirements section
      directly into the job post)
- [ ] 4.2 — Search Blues Wireless community forum for engineers who have posted
      nRF52840 + Notecard integration work (notehub.io/community, Blues Discord)
- [ ] 4.3 — Post in Nordic Semiconductor developer forum (devzone.nordicsemi.com)
- [ ] 4.4 — Screen candidates using the vetting questions in the role doc (do all
      three vetting questions in the first message; do not schedule a call for
      anyone who cannot answer them)
- [ ] 4.5 — Review code samples from 2–3 top candidates
- [ ] 4.6 — Issue a paid scoping task ($200–$500): candidate must build a minimal
      Zephyr or Arduino firmware that reads GPS from a Blues Notecard and uploads
      one event to Notehub — this is the minimal proof of eligibility
- [ ] 4.7 — Select the candidate who completes the scoping task with the cleanest
      output and sign a contract using the LLC's agreement template
      (attorney from Step 1 drafts the contract)
- [ ] 4.8 — Ship prototype hardware kit to the firmware engineer

**Exit:** Contract signed, hardware shipped, firmware engineer has acknowledged 
Phase 2A deliverables and the exit gate metrics
**Budget:** $5,000–$15,000 (engagement); $200–$500 (scoping task)
**Deadline:** Firmware engineer engaged by mid-April 2026

---

### 5. Begin Charter Partner Outreach — Ring 1

**Why now:** The charter partner conversation takes time. Starting outreach now
means you have active conversations by the time the hardware prototype is ready for
a pilot. Do not wait for the prototype to be finished before starting Ring 1.

**Steps:**
- [ ] 5.1 — Build your Ring 1 contact list: 20–30 names from your direct network
      (former clients, colleagues, industry contacts). Use the target profile from
      docs/charter-partner/README.md and outreach-sequence.md.
- [ ] 5.2 — Send 10 Ring 1 messages this week (text or DM; use the templates
      in outreach-sequence.md verbatim for the first round)
- [ ] 5.3 — Send the remaining Ring 1 messages next week
- [ ] 5.4 — Log every contact in a tracking sheet (Name / Company / Ring / Channel
      / Date Sent / Status / Notes)
- [ ] 5.5 — For every response, run the first call script (first-call-script.md)
      and score the prospect on the qualification scorecard
- [ ] 5.6 — Follow up once on non-responders at day 5; then stop Ring 1 and begin
      Ring 2 for any remaining gaps

**Exit:** At least 3 qualified conversations scored 7+ on the scorecard, willing to
hear more; at least 1 calendar invitation for a demo call booked
**Budget:** $0
**Deadline:** Ring 1 complete by April 15, 2026

---

## NEXT — Do These Once NOW Items Are Complete

*These require the LLC, the provisional patent, and the firmware engineer to be in place.
Do not start these in parallel with NOW items unless specifically noted.*

---

### 6. Phase 2A — Firmware Prototype (Core)

**Depends on:** Step 3 (hardware delivered), Step 4 (firmware engineer hired)

**Steps:**
- [ ] 6.1 — Provide the firmware engineer with docs/technical/event-schema.md
      and docs/technical/firmware-architecture.md as the specification
- [ ] 6.2 — Firmware engineer builds Phase 2A core (40–80 hours):
      GPS sampling, BLE scanning, accelerometer, e-ink display, event queue,
      basic upload to Notehub
- [ ] 6.3 — Weekly 30-minute check-ins with firmware engineer; review event logs
      from Notehub after each upload
- [ ] 6.4 — Run preliminary GPS accuracy test: place badge at a known location;
      compare logged coordinates against map ground truth
- [ ] 6.5 — Run preliminary BLE detection test: place Ruuvi Tag at 5m, confirm
      detection rate > 85% over 50 test events

**Exit:** Gateway check — GPS is logging, BLE is detecting, events are appearing in
Notehub. Phase 2B can begin.

---

### 7. Phase 2B — Store-and-Forward

**Depends on:** Step 6 complete

**Steps:**
- [ ] 7.1 — Firmware engineer implements flash-backed event queue with persistence
      across power cycles
- [ ] 7.2 — Run the power-cycle test: write 50 events without upload, cut power,
      restore, confirm all 50 events appear in cloud after recovery
- [ ] 7.3 — Simulate 4-hour cellular outage (disable Notecard); confirm queue holds
      and uploads on reconnect
- [ ] 7.4 — Firmware engineer implements exponential backoff on upload failure
- [ ] 7.5 — Run 72-hour continuous test on 3 badges (not yet 5 — 3 is enough to
      confirm before finalizing Phase 2A)

**Exit:** Power-cycle test passes; 72-hour test passes on 3 badges

---

### 8. Deploy Azure Infrastructure (Phase 3 Cloud MVP — Begin Parallel)

**Depends on:** LLC registered (Step 1), backend developer hired (Step 9)
**Can begin:** While firmware Phase 2B is in progress

**Steps:**
- [ ] 8.1 — Create Azure subscription under the LLC (use Azure free tier initially)
- [ ] 8.2 — Provision Azure resources using the Bicep template in infra/bicep/
      (see docs/technical/deployment-runbook.md Part 2)
- [ ] 8.3 — Initialize PostgreSQL database with the schema in
      docs/technical/database-schema.md
- [ ] 8.4 — Confirm PostGIS extension installed and working
- [ ] 8.5 — Load parcel polygons for the pilot customer's service area
      (Georgia county assessor GIS data — Fulton, Gwinnett, Cobb, or relevant county)
- [ ] 8.6 — Deploy ingest API (Azure Functions) and confirm a synthetic heartbeat
      event is accepted (use the curl smoke test from api-reference.md)
- [ ] 8.7 — Configure Notehub webhook route to the Azure ingest API (see
      docs/technical/cloud-architecture.md Notehub routing section)

**Exit:** Synthetic event posted from curl → appears in raw_events table in PostgreSQL

---

### 9. Hire the Backend Developer (Contract)

**Depends on:** LLC registered (Step 1)
**Can run parallel with:** Step 7

**Steps:**
- [ ] 9.1 — Post on Upwork using docs/roles/04-backend-developer.md requirements
- [ ] 9.2 — Run the three vetting questions from the role doc in the first message
- [ ] 9.3 — Focus candidates: must know PostGIS + point-in-polygon; Python preferred
- [ ] 9.4 — Issue a scoping task: implement idempotent event insert for a sample
      schema; verify they use ON CONFLICT correctly
- [ ] 9.5 — Sign contract; provide docs/technical/event-schema.md and
      docs/technical/database-schema.md as the specification

**Exit:** Contract signed, deliverable scope agreed, schema contract understood

---

### 10. Phase 2C + 3 — Integration and Cloud Pipeline Complete

**Depends on:** Steps 7, 8, 9 all complete

**Steps:**
- [ ] 10.1 — Firmware engineer updates event payload to match the final schema
       contract (any changes found during Phase 2A/2B); freezes firmware version
- [ ] 10.2 — Backend developer builds geofencing service (deliverable 2 from role doc)
- [ ] 10.3 — Backend developer builds Power BI data layer / work_sessions view
       (deliverable 3)
- [ ] 10.4 — Founder builds Power BI report consuming work_sessions:
       crew summary, equipment pairing, anomaly flag
- [ ] 10.5 — End-to-end test: badge in the field → event in raw_events →
       geofenced to parcel → appears as session in Power BI within 30 minutes
- [ ] 10.6 — Run full exit gate test on 5 badges (docs/technical/firmware-architecture.md
       exit gate test protocol — all 5 tests)

**Exit:** Phase 3 exit gate — badge data visible in Power BI within 30 minutes of
capture; all 5 firmware exit gate criteria met with documented results

---

### 11. Secure First Charter Partner Commitment

**Depends on:** Step 5 (Ring 1 outreach already in progress from NOW)

**Steps:**
- [ ] 11.1 — Run Ring 2 outreach (warm introductions) in parallel with firmware
       Phase 2A/2B (the product does not need to be ready to have these conversations)
- [ ] 11.2 — Demo call with any prospect scored 8+ on the scorecard: walk them through
       the actual system using Notehub event logs and the Power BI dashboard
- [ ] 11.3 — Present pilot terms (docs/charter-partner/pilot-terms.md) to the
       right prospect
- [ ] 11.4 — Business attorney reviews charter partner agreement before signing
- [ ] 11.5 — Collect pilot fee ($1,500) and hardware deposit ($500)
- [ ] 11.6 — Schedule on-site deployment session

**Exit:** Charter partner agreement signed, payment received, deployment date on calendar

---

### 12. Charter Partner Pilot Deployment

**Depends on:** Steps 10, 11

**Steps:**
- [ ] 12.1 — Provision badges for the charter partner (deployment-runbook.md Part 1)
- [ ] 12.2 — Register equipment tags for all customer trucks, trailers, mowers
- [ ] 12.3 — Load parcel polygons for all properties in the customer's service area
- [ ] 12.4 — Conduct on-site deployment session: badge introduction with the crew,
       equipment tag installation, confirm Power BI access with the owner
- [ ] 12.5 — Monitor daily for the first two weeks: badge uptime, GPS events in cloud,
       equipment tag detections
- [ ] 12.6 — Call the customer owner at day 7: "Is anything confusing? Are your crew
       members wearing the badges?"
- [ ] 12.7 — Day 45 mid-pilot review: pull metrics dashboard, share with customer
- [ ] 12.8 — Day 90 final debrief: metric scorecard review, refund or conversion decision

**Exit:** All 6 pilot success metrics met; customer says "I would pay for this";
case study draft approved by customer (optional)

---

## LATER — After First Paying Customer

*Do not plan or spend time on these until the charter pilot succeeds and the first
monthly subscription payment is in the bank.*

---

### L1. Post-Pilot: Convert Charter Partner to Paid Subscription
- [ ] L1.1 — Activate charter monthly subscription at $149/crew/month
- [ ] L1.2 — Set up recurring invoice (bank or Stripe)
- [ ] L1.3 — Confirm hardware in good state; replace any damaged badges

### L2. Hire Field Ops Coordinator
- See docs/roles/07-field-ops-coordinator.md
- Trigger: founder can no longer handle hardware logistics for 3+ active pilots
- Budget: $50,000–$65,000

### L3. Begin Charter Partner 2 and 3 (Scale to 3 Pilots)
- Use charter partner 1's case study (with permission) as proof for Ring 2 outreach
- Run the Ring 2 and Ring 3 outreach sequence for the next two partners
- Aim for 3 active paying pilots before seeking outside funding

### L4. Hire Cloud / Backend Engineer (FT)
- See docs/roles/08-cloud-backend-engineer.md
- Trigger: contract backend developer's engagement ends; platform needs full-time owner
- Priority integrations: Aspire → QuickBooks Time → ADP
- Budget: $110,000–$140,000

### L5. Build Aspire Integration
- Charter partners who use Aspire are the highest-value conversion targets
- Requires the cloud engineer (L4) — do not attempt this with the contract developer
- Deliverable: crew assignment data from Aspire reconciled against badge presence data

### L6. Develop Production PCB Design
- Replace Adafruit Feather + Notecarrier dev breakout with a custom PCB
- Engages an electronics design engineer (not yet in the role docs)
- Target: badge BOM drops from ~$129 (prototype) to $40–$60 (production, 100-unit run)
- Trigger: 3+ pilot customers validate the design; justifies tooling investment

### L7. Provisional Patent → Non-Provisional
- File non-provisional patent before the 12-month priority window closes
- Re-engage the patent attorney (role 02)
- Input: pilot data validating the two core claims
- Budget: $8,000–$15,000

### L8. Hire Enterprise Sales Director
- See docs/roles/09-enterprise-sales-director.md
- Trigger: 3–5 paying customers; founder cannot manage pipeline + product + operations
- Budget: $85,000–$95,000 base, OTE $130,000–$160,000

### L9. Hire Hardware Ops / Supply Chain Manager
- See docs/roles/10-hardware-ops-supply-chain.md
- Trigger: 10+ active deployments; Badge inventory exceeds 200 units in field
- Budget: $65,000–$85,000

### L10. Seed Round (if needed)
- Target: $500,000–$1,500,000 on a SAFE
- Trigger: 3–5 paying customers, validated unit economics, Aspire integration live
- Do not raise before charter pilot success — no leverage without proof
- Use the role docs and technical docs as the data room foundation

---

## Dependency Map

```
Step 1 (LLC)──────────────────────────────────────────────┐
Step 2 (Patent)────────────────────────────────────┐      │
Step 3 (Hardware order)──────┐                     │      │
Step 4 (Firmware eng.)───────┤                     │      │
Step 5 (Outreach Ring 1)─────┼──────┐              │      │
                              │      │              │      │
                              ▼      │              ▼      ▼
                        Step 6/7 ────┤         Step 11 ── Step 8/9
                        (Firmware    │         (Charter   (Cloud
                         Phase 2)    │          partner   infra)
                              │      │          commit)    │
                              ▼      ▼              │      │
                         Step 10 ◀──────────────────┘      │
                         (Integration exit gate)────────────┘
                              │
                              ▼
                         Step 12 (Pilot deployment)
                              │
                              ▼
                           LATER
```

---

## Budget Tracker

| Step | Item | Low | High | Status |
|------|------|-----|------|--------|
| 1 | Business attorney (LLC + operating agreement) | $500 | $1,500 | Not started |
| 2 | Patent attorney (provisional) | $2,000 | $4,000 | Not started |
| 3 | Hardware kit (5 badges + equipment tags + spares) | $785 | $900 | Not started |
| 4 | Firmware engineer (scoping task) | $200 | $500 | Not started |
| 4 | Firmware engineer (full engagement) | $5,000 | $15,000 | Not started |
| 8 | Azure infrastructure (dev/prod) | $50 | $200/mo | Not started |
| 9 | Backend developer (contract) | $2,000 | $5,000 | Not started |
| **Total (Phase 1–4)** | | **$10,535** | **$27,100** | |

Current revenue: **$0**
Current spend: **$0**

---

## Decision Log

*Record decisions here as they are made. Date + decision + reason.*

| Date | Decision | Reason |
|------|----------|--------|
| March 2026 | Blues Wireless Notecard selected as cellular + GPS platform | Integrated LTE-M + GPS, JSON-native API, developer-friendly, no SIM management |
| March 2026 | BLE tags on equipment (not properties) | Equipment pairing proves active work, not just proximity to a property |
| March 2026 | nRF52840 as preferred MCU | Best BLE power profile for 7-day battery target; Zephyr RTOS support |
| March 2026 | Azure as cloud platform | Founder's existing toolchain (Power BI, Power Apps); reduces context switching |
