```mermaid
flowchart TB
  Start(["Start"]) --> Intake["Task: Intake / Qualify"]
  Intake --> BR["Business Rule Task: Evaluate Case (DMN)"]
  BR --> Decide{"Is caseKey resolved?"}
  Decide --> CA[["Call Activity: Execute Case"]]
  Decide --> Fallback["Task: Manual triage"]
  CA --> Merge{"Merge (XOR)"}
  Fallback --> Merge
  Merge --> Post["Task: Post-processing / Handover"]
  Post --> End(["End"])

  %% Notes as simple nodes (no HTML, no edge labels)
  Note1["DMN outputs variable: caseKey (e.g., Case1-Process … Case8-Process)"]
  Note2["Call Activity selects subprocess via expression (e.g., processId == caseKey)"]
  BR --- Note1
  CA --- Note2
