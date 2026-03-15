# Role: Hardware Operations / Supply Chain Manager

**Phase:** Post-pilot — hired when 10+ active deployments exist and hardware logistics
are consuming more than 20% of the Field Ops Coordinator's time
**Engagement type:** Full-time employee
**Budget:** $65,000–$85,000 base salary
**When to hire:** After 10 active customer deployments; when device procurement,
provisioning, and failure management can no longer be handled ad hoc
**Status:** Not yet relevant — do not hire until scaled deployments confirm the need

---

## Why This Role Becomes Necessary

At 5 customers, the Field Ops Coordinator can manage hardware logistics alongside
customer success. At 10, the volume of devices, the variation in failure modes,
the BOM cost tracking, and the provisioning complexity exceed what one person can
absorb alongside customer-facing work.

The specific triggers that indicate this role is needed:
- More than 200 badges in the field across active deployments
- Contract manufacturer relationship requires a single owned contact on Actual's side
- Blues Wireless Notecard supply chain risk is unmanaged (single-source dependency)
- Battery replacement cycles, RMAs, and device refurb are undocumented
- BOM cost per badge is not being tracked at the line-item level

This person does not design hardware — the Firmware Engineer (role 03) and Industrial
Designer (role 05) own that. This person makes sure hardware gets made, shipped,
provisioned, deployed, tracked, serviced, and returned correctly at scale.

---

## Responsibilities

### Bill of Materials Management
- Maintain a versioned BOM for every hardware configuration in production:
  - Actual Badge (development version and production version if different)
  - Jobsite BLE Tag
  - Vehicle Mount Tag (if applicable)
  - All cables, enclosures, mounting hardware included in deployment kit
- Track unit cost at the component level and total landed cost per device
- Flag when component prices change more than 10% quarter over quarter
- Identify second-source options for all critical single-source components

**Blues Wireless Notecard — specific risk tracking:**
The Blues Notecard is currently the single-source cellular + GPS modem for the Actual
Badge. If Blues raises prices, changes the API, or has supply constraints, the badge
hardware is affected. This role must maintain:
- Current pricing tier and renewal date
- Minimum order quantities and lead times
- Alternative modems evaluated and documented (Quectel, u-blox, SIM7670C considered)
- Contact at Blues Developer Relations for escalation

### Contract Manufacturer Coordination
- Manage the relationship with the contract PCB assembly and enclosure partner
- Issue purchase orders, track delivery timelines, and inspect incoming inventory
- Coordinate engineering change orders (ECOs) when the Firmware Engineer or Industrial
  Designer modifies a hardware design
- Maintain qualification records for any new CM

### Device Provisioning
- Manage the process of assigning a serial number and cloud identity to each badge
  before it ships to a customer
- Maintain the device registry: serial number → Blues Notecard DeviceUID →
  customer_id → deployment date → current status
- Coordinate with the Cloud/Backend Engineer to ensure the provisioning API is
  current and reliable
- Verify each badge connects to the cloud and posts a test event before shipping

### Hardware Lifecycle Tracking

Device states (each badge must be in exactly one state at all times):

| State | Definition |
|-------|-----------|
| Inventory | In stock, provisioned, ready to deploy |
| Deployed | Assigned to an active customer, in the field |
| Returned | Received back from customer, not yet evaluated |
| Refurbished | Inspected, battery replaced, firmware updated, returned to Inventory |
| Retired | Beyond repair or end of certified life; documented and disposed |
| RMA | Sent to component vendor for warranty or defect review |

### RMA and Failure Tracking
- Define the failure threshold that triggers an RMA vs. in-house refurb
- File Blues Notecard warranty claims for connectivity failures within warranty period
- Track failure rate by hardware batch and firmware version
- Report quarterly: failure rate by state, average device lifespan, RMA cost,
  refurb yield rate
- Escalate to Firmware Engineer if failure rate in a batch exceeds 5%

### Inventory Buffer Policy
Maintain a 90-day rolling inventory buffer based on current deployment rate.

Example at 100 badges deployed / quarter:
- 90-day buffer = 100 units in Inventory state at all times
- If Inventory drops below 60 units, issue a purchase order immediately
- Never wait for inventory to reach zero before ordering; lead times can be 6–10 weeks

---

## Skills Required

**Required:**
- 3+ years in hardware operations, supply chain, or manufacturing operations
- BOM management experience with physical electronics or electromechanical products
- Experience managing a vendor or contract manufacturer relationship
- Proficiency with inventory tracking systems (even if just structured spreadsheets
  at this stage; the company will graduate to proper ERP later)
- Strong attention to process detail — this role sets the standards others follow

**Strongly preferred:**
- Experience with IoT or connected device hardware (cellular, GPS, BLE)
- PCB assembly or electronics manufacturing context — must understand what "ECO" means
  and why a gerber file revision matters
- Familiarity with device provisioning concepts: serial number assignment, cloud
  identity, firmware OTA
- Experience working within a small team where the role boundary is owned entirely
  by one person

**Not required:**
- Firmware or software development
- Prior startup experience
- Field service industry knowledge

---

## Quality and Compliance Posture

At 10+ deployments:
- Every badge in the field must carry a hardware serial number traceable to a BOM version
- Every deployment must have a documented deployment checklist (date, customer, badge
  serials, tag MAC addresses, installer, site survey record)
- Every RMA must have a documented failure mode, resolution, and disposition

This documentation is not optional. It is required for:
- Enterprise customer procurement reviews
- Warranty claim processing with component vendors
- Future FCC certification if the hardware design changes
- Any future insurance review for product liability

---

## Compensation Structure

| Component | Amount |
|-----------|--------|
| Base salary | $65,000–$85,000 |
| Benefits | Standard package |
| Equity | 0.1–0.25% (4-year vest, 1-year cliff) |
| Target bonus | 5–10% of base tied to inventory accuracy, on-time deployment rate,
and failure rate targets |

---

## Where to Find

**Priority 1 — LinkedIn**
Search: "hardware operations manager IoT", "supply chain manager connected devices",
"NPI coordinator electronics startup". Remote or Atlanta.

**Priority 2 — Contract recruiter with hardware ops focus**
For a role this specific, a recruiter who focuses on hardware startups (not general
tech recruiting) will have a better pipeline. Firms like Riviera Partners (hardware
focused) or referrals from Blues Wireless developer community.

**Priority 3 — Internal promotion**
If the Field Ops Coordinator has grown into hardware logistics deeply, consider
splitting the role at the 10-deployment threshold and promoting internally.
More likely if the person has strong operational instincts and is ready to specialize.

---

## Known Risks

**Risk:** Blues Wireless Notecard becomes unavailable or doubles in price.
**Mitigation:** This is the company's largest single-source hardware risk. This role
must maintain an active second-source evaluation at all times. The Firmware Engineer
must confirm that the firmware HAL (hardware abstraction layer) makes modem swapping
a firmware project, not a full redesign.

**Risk:** Inventory buffer lapses and a customer deployment is delayed 8 weeks because
components are on order.
**Mitigation:** The 90-day buffer policy is a hard rule. If the company cannot afford
the buffer at current revenue, that is a cash flow planning problem — escalate to the
founder immediately rather than reduce the buffer.
