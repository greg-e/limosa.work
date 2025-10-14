```mermaid
flowchart TB
  Start(["Start"]) --> Intake["Task: Intake / Qualify"]
  Intake --> Decide{"Determine Case (XOR)"}

  Decide --> CA1[["Call Activity: Case 1 – New Customer"]]
  Decide --> CA2[["Call Activity: Case 2 – Returning Customer"]]
  Decide --> CA3[["Call Activity: Case 3 – VIP Handling"]]
  Decide --> CA4[["Call Activity: Case 4 – High Risk Review"]]
  Decide --> CA5[["Call Activity: Case 5 – Manual Documents"]]
  Decide --> CA6[["Call Activity: Case 6 – Compliance Path"]]
  Decide --> CA7[["Call Activity: Case 7 – Escalation Flow"]]
  Decide --> CA8[["Call Activity: Case 8 – Fast-Track"]]

  CA1 --> Merge{"Merge (XOR)"}
  CA2 --> Merge
  CA3 --> Merge
  CA4 --> Merge
  CA5 --> Merge
  CA6 --> Merge
  CA7 --> Merge
  CA8 --> Merge

  Merge --> Post["Task: Post-processing / Handover"]
  Post --> End(["End"])

  Note1["Each Call Activity invokes its own subprocess (e.g., processId == caseKey)"]
  Decide --- Note1
