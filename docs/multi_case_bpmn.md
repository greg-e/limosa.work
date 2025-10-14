'''mermaid
flowchart TB
  %% ONE-PAGE VISUAL: Many-case routing with DMN + Call Activity
  classDef startend stroke-width:1.5;
  classDef gateway stroke-dasharray: 3 2;
  classDef important stroke-width:1.5,stroke:#000;

  Start([Start]):::startend --> Intake[Task: Intake / Qualify]
  Intake --> BR[Business Rule Task: Evaluate Case (DMN)]
  BR -->|sets caseKey| Decide{caseKey valid?}:::gateway

  Decide -->|Yes| CallAct[[Call Activity: Handle Case<br/>processId = = caseKey]]:::important
  Decide -->|No| Fallback[Task: Fallback / Manual triage]

  %% Subprocesses (external, referenced by processId)
  CallAct --> Merge{Done}:::gateway --> Post[Task: Post-processing / Handover] --> End([End]):::startend

  %% Legend
  subgraph Legend [Legend]
    L1([Start/End]):::startend
    L2[Task]
    L3((Business Rule Task = DMN)]
    L4{Gateway}
    L5[[Call Activity (calls subprocess by ID)]]
  end

  %% Case map (example)
  subgraph Cases [Case map (set by DMN → caseKey)]
    C1["'Case1-Process' = New Customer > $10k"]
    C2["'Case2-Process' = Returning + High Risk"]
    C3["'Case3-Process' = VIP Escalation"]
    C4["'Case4-Process' = Compliance Review"]
    C5["'Case5-Process' = Ops Exception"]
    C6["'Case6-Process' = Partner Fulfillment"]
    C7["'Case7-Process' = Fast-track (SLA<4h)"]
    C8["'Case8-Process' = Manual Review"]
  end
