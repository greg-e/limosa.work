---
title: Actual Zettelkasten · Data Integrity & Provenance
created: 2025-11-15
tags:
  - actual
  - zettelkasten
  - data-integrity
  - provenance
---

# Actual Zettelkasten · Data Integrity & Provenance

## 4. Data Integrity & Provenance

### Integrity by Design
**ID:** data-integrity-integrity-by-design  
**Family:** Data Integrity & Provenance  
**Tagline:** Make it impossible for truth to break without noticing.  
**Quote:** "If it can break quietly, it will."

#### Why This Matters
Data that silently corrupts destroys trust. Time, location, and proximity must be captured defensively with guardrails that detect failure immediately.

#### How It Works
- Validate every payload as it arrives.  
- Use checksums and hash chains to prevent tampering.  
- Detect gaps, backward timestamps, or missing intervals.  
- Highlight anomalies instead of hiding them.

#### Reflection
When integrity is structural, truth becomes dependable.

#### Links
- Provenance of Truth  
- Lineage Is the Ledger  
- Truth You Can Stand On  

#### Audiences
Engineering, Leadership, Finance

---

### Provenance of Truth
**ID:** data-integrity-provenance-of-truth  
**Family:** Data Integrity & Provenance  
**Tagline:** Every record must know where it came from.  
**Quote:** "A fact without a history is a guess."

#### Why This Matters
Raw data is meaningless without lineage. When payroll, costing, or customer disputes arise, the system must show exactly how each number was built.

#### How It Works
- Attach source timestamps, coordinates, and device IDs.  
- Store original packets unmodified.  
- Derive sessions from immutable truth.  
- Provide drill-down from totals to raw packets.

#### Reflection
Provenance transforms raw data into trustworthy evidence.

#### Links
- Integrity by Design  
- Lineage Is the Ledger  
- Truth You Can Stand On  

#### Audiences
Engineering, Finance, Leadership

---

### Lineage Is the Ledger
**ID:** data-integrity-lineage-is-the-ledger  
**Family:** Data Integrity & Provenance  
**Tagline:** The event trail is the real book of record.  
**Quote:** "Ledgers don’t lie when they’re built from truth."

#### Why This Matters
Summaries change; events don’t. Keeping the full chain of events makes reconciliation fast and disputes rare.

#### How It Works
- Maintain event-level history for every action.  
- Tie each event to badge, tag, and parcel.  
- Build totals from events, not edits.  
- Keep derived outputs separate from immutable logs.

#### Reflection
When the ledger is built from events, the math speaks for itself.

#### Links
- Provenance of Truth  
- Integrity by Design  
- 395… Exactly  

#### Audiences
Finance, Engineering

---

### No Edits Without Evidence
**ID:** data-integrity-no-edits-without-evidence  
**Family:** Data Integrity & Provenance  
**Tagline:** Changes must be justified, not casual.  
**Quote:** "Correction is not creation."

#### Why This Matters
Allowing arbitrary edits destroys confidence. Only documented evidence should permit altering derived totals.

#### How It Works
- Keep raw events untouched.  
- Allow corrections only through exception workflows.  
- Require reason codes, attachments, or witness notes.  
- Track who made the change and when.

#### Reflection
When corrections leave a trail, the truth stays intact.

#### Links
- Lineage Is the Ledger  
- Provenance of Truth  
- Truth You Can Stand On  

#### Audiences
Finance, Leadership

---

### Evidence Over Opinion
**ID:** data-integrity-evidence-over-opinion  
**Family:** Data Integrity & Provenance  
**Tagline:** Let the events speak louder than memories.  
**Quote:** "Memory is soft; events are hard."

#### Why This Matters
End-of-day recollection is famously inaccurate. Evidence collected continuously resolves disputes before they start.

#### How It Works
- Capture truth autonomously.  
- Show event trails instead of asking what happened.  
- Use presence and motion as neutral signals.  
- Disable “free typing” except when truly needed.

#### Reflection
When evidence is clear, arguments fade away.

#### Links
- Presence Becomes Proof  
- 395… Exactly  
- Integrity by Design  

#### Audiences
Field, Leadership, Finance

---

### Immutable Truth
**ID:** data-integrity-immutable-truth  
**Family:** Data Integrity & Provenance  
**Tagline:** Facts don’t change, even if interpretations do.  
**Quote:** "Truth is upstream from decisions."

#### Why This Matters
If raw truth can be modified, every downstream decision becomes questionable. Immutable truth ensures stable foundations.

#### How It Works
- Store raw telemetry as write-once records.  
- Never delete or alter original events.  
- Interpretations live as separate layers.  
- Keep truth static even when business rules change.

#### Reflection
When truth is fixed, decisions can evolve safely.

#### Links
- Lineage Is the Ledger  
- Provenance of Truth  
- Automate Association, Not Judgment  

#### Audiences
Engineering, Finance, Leadership

---

### Reality Before Model
**ID:** data-integrity-reality-before-model  
**Family:** Data Integrity & Provenance  
**Tagline:** Understand the real behavior before defining the rule.  
**Quote:** "The model must serve the truth, not the other way around."

#### Why This Matters
Premature rules distort reality. Observing actual flow and truth first ensures models fit the work rather than force the work to fit the model.

#### How It Works
- Watch how crews move and tools behave.  
- Build rules from common patterns, not assumptions.  
- Let parcel-based truth reveal real task sequences.  
- Test models against raw events before locking them in.

#### Reflection
When truth shapes the model, the model becomes trustworthy.

#### Links
- Constructal Flow (Parcel Movement)  
- Automate the Constraint  
- Evidence Over Opinion  

#### Audiences
Engineering, Leadership

---

### Consistency Beats Completeness
**ID:** data-integrity-consistency-beats-completeness  
**Family:** Data Integrity & Provenance  
**Tagline:** A small set of reliable signals outperforms a big set of unreliable ones.  
**Quote:** "Better fewer, but better."

#### Why This Matters
Too many input types create confusion. A limited set of consistent signals — presence, motion, parcel, proximity — creates strong truth.

#### How It Works
- Prefer stable signals over extra signals.  
- Drop noisy or fragile inputs even if they seem “useful.”  
- Allow pattern recognition to fill gaps.

#### Reflection
Clarity is more important than quantity.

#### Links
- Presence Over Precision  
- Parcel as Job Unit  
- Effortless Proof  

#### Audiences
Engineering

---

### Correction Is Commentary
**ID:** data-integrity-correction-is-commentary  
**Family:** Data Integrity & Provenance  
**Tagline:** Corrections add meaning to truth, not replacements for it.  
**Quote:** "Truth stays; commentary explains."

#### Why This Matters
Corrections are necessary, but they must complement truth rather than overwrite it.

#### How It Works
- Keep all edits separate from original truth.  
- Store corrections as “annotations.”  
- Allow supervisors to add clarification, not changes.  
- Preserve the event trail beneath every explanation.

#### Reflection
Truth supports commentary; commentary never replaces truth.

#### Links
- No Edits Without Evidence  
- Immutable Truth  
- Provenance of Truth  

#### Audiences
Leadership, Finance

---

### Truth Survives Hand-Offs
**ID:** data-integrity-truth-survives-hand-offs  
**Family:** Data Integrity & Provenance  
**Tagline:** Truth must remain intact as it flows across teams and systems.  
**Quote:** "Every transfer is a point of failure."

#### Why This Matters
When time or location data passes through systems, transformation risk grows. Truth must remain unchanged through every hand-off.

#### How It Works
- Keep original truth at rest in a central, immutable store.  
- Prevent transformations that lose raw detail.  
- Export views, not rewritten facts.  
- Use IDs that persist end-to-end.

#### Reflection
When truth survives the journey, everything stays reconciled.

#### Links
- Lineage Is the Ledger  
- Integrity by Design  
- Immutable Truth  

#### Audiences
Engineering, Finance

---

### Drift Is a Signal
**ID:** data-integrity-drift-is-a-signal  
**Family:** Data Integrity & Provenance  
**Tagline:** When truth deviates, it reveals something important.  
**Quote:** "Anomalies are messages."

#### Why This Matters
GPS drift, odd movement patterns, or missing packets aren’t just errors — they’re clues about conditions, equipment, or workflow problems.

#### How It Works
- Track variance instead of hiding it.  
- Use drift to detect interference or equipment issues.  
- Flag movement anomalies for safety review.  
- Treat gaps as diagnostic, not failure.

#### Reflection
Anomalies are opportunities to learn how the work actually behaves.

#### Links
- Reality Before Model  
- Presence Over Precision  
- Integrity by Design  

#### Audiences
Engineering, Leadership

---

