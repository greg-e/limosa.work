# Architecture (High-Level)

1. Badge collects {timestamp, GNSS, motion, proximity}.
2. Batch uplink → secure endpoint.
3. Stream processing → truth/audit log + integrations (FSM/Payroll).
4. Dashboards for Ops & Finance; exception queue for human review.
