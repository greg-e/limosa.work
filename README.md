# Actual

**Proof of Work**  
A hardware + cloud platform that automatically captures verifiable operational truth
for field crews — without phones, apps, or manual data entry.

**Company:** Actual (operating under Limosa · limosa.work · greg@limosa.work)  
**Author:** Gregory Ehrenberg ("bruh")  
**Stage:** Early founder · self-funded · pre-prototype  
**Last updated:** March 2026

---

## What Actual Is

Actual produces a continuous, verifiable record of who worked, for how long, where, and
with what equipment — automatically. No timesheets. No job coding. No memory required.

The system runs on three components:

| Component | What it does |
|-----------|-------------|
| **Badge** | Worn by crew members. Captures GPS, accelerometer, and BLE proximity 4x/minute. Uploads in batches over cellular. Offline-first. No phone, no Wi-Fi, no manual entry. |
| **BLE Tags** | Attached to tools and equipment. Broadcast a unique ID. Badge detects tag presence and logs equipment usage automatically. |
| **Cloud Truth Layer** | Ingests badge uploads. Normalizes and deduplicates events. Binds events to job sites via tax-parcel geofencing. Writes canonical truth intervals to an immutable store. Feeds payroll, job costing, scheduling, and billing systems. |

**Architecture:** Edge Capture ? Cloud Truth ? Downstream Systems

**Target market:** Commercial landscaping, grounds management, and field services companies
with 5–50 crew members.

**Core pricing principle:** If you don't use it, you don't pay for it. Consumption-based
model — per badge-day, per active tag, per integration. No per-seat fees. Scales with
actual seasonal work volume.

---

## Repository Contents

### `docs/roles/`
Complete documentation for every role required to build and operate Actual through the
four-phase roadmap. Each file covers: why the role matters, scope of engagement, hiring
criteria, deliverables expected, where to find candidates, and known risks.

| File | Role | Phase |
|------|------|-------|
| [01-business-attorney.md](docs/roles/01-business-attorney.md) | Business Attorney | 1 |
| [02-patent-attorney.md](docs/roles/02-patent-attorney.md) | Patent Attorney | 1-2 |
| [03-firmware-engineer.md](docs/roles/03-firmware-engineer.md) | Embedded Firmware Engineer | 2 |
| [04-backend-developer.md](docs/roles/04-backend-developer.md) | Backend / Cloud Developer | 3 |
| [05-industrial-designer.md](docs/roles/05-industrial-designer.md) | Industrial Designer (Enclosure) | 2 |
| [06-charter-partner.md](docs/roles/06-charter-partner.md) | Charter Partner (first customer) | 4 |
| [07-field-ops-coordinator.md](docs/roles/07-field-ops-coordinator.md) | Field Ops Coordinator | Post-pilot |
| [08-cloud-backend-engineer.md](docs/roles/08-cloud-backend-engineer.md) | Full-Stack Cloud Engineer | Post-pilot |
| [09-enterprise-sales-director.md](docs/roles/09-enterprise-sales-director.md) | Enterprise Sales Director | Post-pilot |
| [10-hardware-ops-supply-chain.md](docs/roles/10-hardware-ops-supply-chain.md) | Hardware Ops / Supply Chain | Post-pilot |

### `pages/`
Public-facing site content served at limosa.work.

| File | Description |
|------|-------------|
| [manifesto.md](pages/manifesto.md) | The Actual Manifesto - product philosophy and core commitments |
| [product.md](pages/product.md) | Product description: badge, tag, cloud platform |
| [partners.md](pages/partners.md) | Charter partner program and pilot offer |
| [principles.md](pages/principles.md) | Guiding design and operational principles |
| [outcomes.md](pages/outcomes.md) | What Actual delivers: payroll, job costing, scheduling |
| [architecture.md](pages/architecture.md) | Technical architecture overview |
| [deck.md](pages/deck.md) | Link to the Actual Deck (principles card reference) |

### `zettels/`
Knowledge base: product philosophy, engineering principles, field practice, automation
patterns, data integrity rules, flow mechanics, finance alignment, and strategic vision.
Organized as a plain-Markdown Zettelkasten.

Key files:
- `Actual_Founders_Notebook_Revised_v2.md` - plain-language product spec, JTBD framework,
  roadmap, budget, and honest assessment of founder position
- `2025/202511/251115_actualZettelkasten.md` - master Zettelkasten (all 54 cards, indexed)
- `2025/202511/` - individual thematic decks: Principles, Field Practice, Automation,
  Data Integrity, Flow, Finance, Vision

### `assets/actual-deck/`
Interactive card deck application (React/TypeScript + Vite). Displays the Actual
principles deck at limosa.work/actual/. Each card covers: why a principle matters, how
it applies in practice, and where it connects in the system.

### `_layouts/`, `_includes/`, `_config.yml`
Jekyll site configuration for GitHub Pages deployment at limosa.work.

---

## Roadmap (4 Phases, Self-Funded)

| Phase | Scope | Budget | Exit Gate |
|-------|-------|--------|-----------|
| **1 - Business Foundation** | Georgia LLC, EIN, provisional patent, bank account | $3,000-$5,000 | LLC registered, bank open, patent filed |
| **2 - Hardware Prototype** | Working badge: GPS + BLE + cellular + store-and-forward on Blues Notecard | $6,000-$17,000 | 5 badges pass 72hr continuous test at spec |
| **3 - Cloud MVP** | Ingestion API, geofencing, Power BI dashboard showing live field data | $2,000-$5,000 | Badge data in Power BI within 30 min of capture |
| **4 - Charter Partner Pilot** | 1 real company, 1 crew, 10-20 sites, 60 days | included above | Partner says "I would pay for this" + payroll reconciliation from Actual data |

**Total budget range:** $13,300 (low) - $31,500 (high)

---

## Jobs-to-Be-Done (Prototype-Critical)

If these four cannot be proven, the product concept fails:

| JTBD | Description |
|------|-------------|
| **02** | Passively capture time and location without crew input |
| **03** | Capture data at the edge where errors originate |
| **04** | Store-and-forward without data loss (offline-first) |
| **06** | Detect BLE tool proximity and log usage automatically |

Everything else - identity assignment, geofencing, payroll integration, anomaly detection,
analytics - is downstream of these four.

---

## Current Status (March 2026)

| Item | Status |
|------|--------|
| Product concept and architecture | Defined |
| JTBD framework (12 cards) | Complete |
| Prototype roadmap | Complete |
| Founders Notebook | Complete |
| Role documentation (docs/roles/) | Complete |
| Hardware selection (Blues Notecard) | Decided |
| Pricing model | Defined, not yet validated |
| Georgia LLC | Not yet registered |
| Provisional patent | Not yet filed |
| Firmware engineer | Not yet hired |
| Charter partner | Not yet committed |
| Revenue | $0 |

---

## Key Principle

Every session must produce a specification, a decision, a document, or an action item.
Not a framework.
