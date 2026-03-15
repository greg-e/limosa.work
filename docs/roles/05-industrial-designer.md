# Role: Industrial Designer (Enclosure)

**Phase:** 2 — Hardware Prototype (optional)
**Engagement type:** Contract
**Budget:** $1,000–$3,000
**When to engage:** Month 3–5, after core firmware is working
**Status:** Not yet engaged
**Priority:** Optional — do not engage until firmware is validated

---

## Why This Role May (or May Not) Matter

The firmware engineer produces a working badge on a dev board. That is adequate for
Phase 2 testing and the Phase 4 charter partner pilot.

An industrial designer becomes necessary when:
- The charter partner requires hardware that workers will actually wear without
  complaint (ergonomics, clip mounting, weatherproofing)
- The prototype is being demonstrated to potential partners or investors who need
  to see a product, not a dev board with wires

An industrial designer is NOT necessary when:
- The firmware is still being debugged
- The charter partner has not yet been identified
- The budget is constrained and firmware and cloud are not yet complete

Default position: skip this role until the Phase 2 firmware exit gate is met and
a charter partner candidate is confirmed. A 3D-printed enclosure built from existing
parametric badge designs is adequate for proof-of-concept.

---

## Scope (If Engaged)

### Deliverables

- 3D-printable enclosure design (STL files) for badge hardware
  - Houses the Blues Notecard, MCU, battery, e-ink display
  - Clip or belt/pocket mount for field wear
  - Weatherproof (IP54 minimum — splash resistant, not submersible)
  - Tool-free battery access
  - No exposed connectors in wear position
- 3D-printable enclosure for BLE site tag
  - Magnetic mount or adhesive mount variant
  - Weatherproof
  - Indicator LED or visual identifier accessible without disassembly
- Print-ready files tested on a consumer FDM printer (PLA or PETG)
- Bill of materials for enclosure components (screws, gaskets, clips)

### What Is NOT in Scope

- Injection mold-ready designs (that is a Phase 3 / manufacturing scale decision)
- UX/UI design (the e-ink display interface is firmware-controlled)
- Branding or aesthetic treatment (functional prototype only)
- PCB design

---

## Where to Find

**Priority 1 — Freelance industrial designers on Upwork or Contra**
Search: "wearable enclosure design", "3D printed IoT enclosure", "product design
freelance CAD".
Filter: Portfolio showing enclosures for wearables or electronic devices. FDM print
experience required. Onshape, Fusion 360, or SolidWorks proficiency.

**Priority 2 — Makerspace community (Atlanta)**
Atlanta Makers, Decatur Makers, or similar. Look for members with product design or
engineering backgrounds who do contract CAD work.

**Priority 3 — Thingiverse / Printables precedent search**
Before engaging a designer, search for existing parametric badge or IoT device
enclosure designs that could be adapted. If an adequate open-source enclosure already
exists, this role may not be needed at all.

---

## Budget Breakdown

| Deliverable | Low | High |
|-------------|-----|------|
| Badge enclosure design and print-ready files | $700 | $1,500 |
| Tag enclosure design and print-ready files | $300 | $800 |
| Iteration and refinement (1–2 rounds) | included | $700 |
| **Total** | **$1,000** | **$3,000** |

---

## Exit Gate

This role is complete when:
- 3D-printed badge enclosure fits the actual hardware (test-fit confirmed)
- Badge can be worn on a belt or clipped to a pocket without interference with
  GPS antenna or BLE radio
- Enclosure withstands a 5-second water spray test (hose or faucet, not submersion)
- Tag enclosure mounts securely to a metal surface with the specified mount system
- All files are delivered as STL and source CAD format

---

## Known Risks

**Risk:** Enclosure design is aesthetically polished but not field-practical.
**Mitigation:** The designer must understand that this device will be worn by
landscaping crews in outdoor conditions: heat, sweat, rain, rough handling. Show the
designer photos of field crews at work before the brief. The brief should state
explicitly: function over form.

**Risk:** The firmware engineer's hardware layout changes after the enclosure is designed.
**Mitigation:** Do not engage the industrial designer until the PCB layout (or dev board
layout) is finalized. Designing an enclosure around a moving hardware target wastes the
budget.
