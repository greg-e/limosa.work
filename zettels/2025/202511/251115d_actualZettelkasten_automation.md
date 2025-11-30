---
title: Actual Zettelkasten · Automation & Mechanisms
created: 2025-11-15
tags:
  - actual
  - zettelkasten
  - automation
  - mechanisms
---

# Actual Zettelkasten · Automation & Mechanisms

## 3. Automation & Mechanisms

### Automating Hidden Steps
**ID:** automation-automating-hidden-steps  
**Family:** Automation & Mechanisms  
**Tagline:** Remove the invisible friction that slows the day.  
**Quote:** "Little steps add up to big delays."

#### Why This Matters
Workers often spend time on small motions: typing job codes, tapping through menus, checking boxes, or confirming tasks. These steps seem minor individually but compound into serious drag.

#### How It Works
- Detect location, tools, and presence without asking.  
- Trigger job context automatically from parcel and tags.  
- Let the system fill in metadata crews shouldn’t touch.  
- Keep human attention for judgment, not setup.

#### Reflection
When invisible friction disappears, the day flows the way it should.

#### Links
- Passive Association  
- Smart Intervals  
- Less Admin, More Work  

#### Audiences
Field, Engineering

---

### Edge Autonomy
**ID:** automation-edge-autonomy  
**Family:** Automation & Mechanisms  
**Tagline:** Let the device make decisions at the edge.  
**Quote:** "Decide near the work."

#### Why This Matters
Cloud round-trips slow response and drain batteries. Decisions that can be made locally should be — fast, cheap, and without waiting.

#### How It Works
- Use IMU + BLE + GPS locally to determine context.  
- Wake radios only when data needs to move.  
- Buffer events for later upload without losing truth.  
- Let the badge classify motion events instantly.

#### Reflection
Local brains make global systems smoother.

#### Links
- Smart Intervals  
- Automate the Constraint  
- Flow Starts at the Edge  

#### Audiences
Engineering

---

### Passive Association
**ID:** automation-passive-association  
**Family:** Automation & Mechanisms  
**Tagline:** Connect people, places, and tools automatically.  
**Quote:** "Let the world tag itself."

#### Why This Matters
Workers shouldn’t choose job codes, equipment IDs, or context lists. Proximity and place already contain that information — if we listen.

#### How It Works
- Use BLE tags to identify equipment automatically.  
- Use parcel shapes to identify job sites.  
- Associate encounters with time without asking the user.  
- Resolve ambiguity only when two contexts overlap.

#### Reflection
When the system understands context, crews don’t have to.

#### Links
- Context Without Effort  
- Automating Hidden Steps  
- BLE Proximity = Equipment Usage  

#### Audiences
Field, Engineering

---

### Smart Intervals
**ID:** automation-smart-intervals  
**Family:** Automation & Mechanisms  
**Tagline:** Wake radios with intention, not habit.  
**Quote:** "Do less, but do it better."

#### Why This Matters
Constant radio usage kills battery and creates noise. Radio wake-ups must match real-world rhythm, not rigid timers.

#### How It Works
- Use IMU triggers to wake BLE scans.  
- Upload in 30-minute batches unless behavior changes.  
- Increase frequency when motion is complex.  
- Decrease frequency when still or traveling steadily.

#### Reflection
Save power by matching the cadence of real work.

#### Links
- Edge Autonomy  
- Automating Hidden Steps  
- One Badge, Whole Day  

#### Audiences
Engineering

---

### Battery as Constraint
**ID:** automation-battery-as-constraint  
**Family:** Automation & Mechanisms  
**Tagline:** Every system decision must respect the battery.  
**Quote:** "If it dies, it lies."

#### Why This Matters
Truth depends on uptime. A dead badge erases trust and breaks the chain of evidence.

#### How It Works
- Budget current draw per component and mode.  
- Tune BLE interval, GPS sampling, and uploads to last a full week.  
- Use deep sleep whenever possible.  
- Let battery percentage influence sampling logic.

#### Reflection
Power is the real boss on the edge.

#### Links
- Smart Intervals  
- Edge Autonomy  
- Flow Starts at the Edge  

#### Audiences
Engineering

---

### Automate Association, Not Judgment
**ID:** automation-automate-association-not-judgment  
**Family:** Automation & Mechanisms  
**Tagline:** Let machines collect facts; let people decide what they mean.  
**Quote:** "Automation records — humans interpret."

#### Why This Matters
Systems that try to judge work quality or intent alienate users. Systems that humbly record truth empower them.

#### How It Works
- Capture presence, movement, proximity, entry/exit.  
- Leave “was the job done?” to humans.  
- Reduce the burden of paperwork while keeping human judgment central.

#### Reflection
Good automation gives people better judgment, not less.

#### Links
- Truth You Can Stand On  
- Convivial Tools  
- Passive Association  

#### Audiences
Field, Leadership, Engineering

---

### Edge Is the Source of Truth
**ID:** automation-edge-is-the-source-of-truth  
**Family:** Automation & Mechanisms  
**Tagline:** Capture truth where it happens — on the worker.  
**Quote:** "Reality begins at the edge."

#### Why This Matters
Most errors happen when workers manually summarize memory at the end of the day. Raw truth must begin where the work is done.

#### How It Works
- All payloads originate on the badge.  
- Cloud validates but does not invent.  
- No records created retroactively.  
- The edge produces immutable timestamps.

#### Reflection
Start truth at the source and everything stays clean downstream.

#### Links
- Truth You Can Stand On  
- Effortless Proof  
- Lineage Is the Ledger  

#### Audiences
Engineering, Leadership

---

### Presence Over Precision
**ID:** automation-presence-over-precision  
**Family:** Automation & Mechanisms  
**Tagline:** Reliable presence beats perfect coordinates.  
**Quote:** "Done is better than exact — when exact is fragile."

#### Why This Matters
GPS drift can mislead. Parcel-based presence is more stable, more contextual, and more fair.

#### How It Works
- Use parcels for truth of “on-site” rather than raw GPS.  
- Smooth noisy signals.  
- Prefer reliable boundaries over perfect points.

#### Reflection
The field needs fairness, not false precision.

#### Links
- Parcel as Job Unit  
- Presence Becomes Proof  
- Automate the Constraint  

#### Audiences
Field, Engineering

---

### The World as the Interface
**ID:** automation-the-world-as-the-interface  
**Family:** Automation & Mechanisms  
**Tagline:** Let the place and tools drive the system.  
**Quote:** "The job site is the UI."

#### Why This Matters
Screens fail. Context doesn’t. When the environment itself provides intent, there is less cognitive load on the worker.

#### How It Works
- Tags turn tools into UI triggers.  
- Parcels turn land into UI context.  
- Movement turns time into UI input.

#### Reflection
The world is already telling us the story — we just need to listen.

#### Links
- Passive Association  
- Context Without Effort  
- Flow Starts at the Edge  

#### Audiences
Field, Engineering

---

### Continuous Sensing, Occasional Sending
**ID:** automation-continuous-sensing-occasional-sending  
**Family:** Automation & Mechanisms  
**Tagline:** Stay aware locally, sync sparingly.  
**Quote:** "Feel everything, transmit little."

#### Why This Matters
Sensors need to track reality all day — but radios only need to speak occasionally to preserve power.

#### How It Works
- Track motion and tags in real time on-device.  
- Batch data for 30-minute uploads.  
- Burst transmit only when major transitions occur.  
- Keep truth full while keeping radio use low.

#### Reflection
Local vigilance + rare transmission = long life + strong truth.

#### Links
- Smart Intervals  
- Edge Autonomy  
- Battery as Constraint  

#### Audiences
Engineering

---

