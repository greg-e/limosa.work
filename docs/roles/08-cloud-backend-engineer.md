# Role: Cloud / Backend Engineer (Full-Stack Platform Owner)

**Phase:** Post-pilot — second or third engineering hire
**Engagement type:** Full-time employee
**Budget:** $110,000–$140,000 base salary
**When to hire:** After charter pilot succeeds and the contract backend developer has
delivered ingestion + geofencing + Power BI layer; before scaling to 10+ customers
**Status:** Not yet relevant — do not hire until the contract backend developer's exit
gate has been verified

---

## Why This Role Comes After the Contract Developer

The contract backend developer (docs/roles/04-backend-developer.md) delivered:
- Raw event ingestion API
- Geofencing service
- Power BI data layer
- Azure deployment and documentation

That deliverable is a working prototype, not a production platform. It will need:
- Multi-tenant data isolation as the customer count grows beyond 3
- Scheduled jobs, retry queues, and failure handling
- CI/CD pipelines so the company is not manually deploying code changes
- Integration with Aspire, QuickBooks Time, or ADP
- Monitoring and alerting on platform health
- Security hardening before enterprise procurement processes scrutinize it

The contract developer will not own these things. This engineer does. This is the
role that owns the cloud platform for the life of the company.

---

## Responsibilities

### Platform Ownership
- Own the Azure infrastructure: App Service, Azure Functions, PostgreSQL (PostGIS),
  storage, networking, identity
- Write and maintain infrastructure-as-code (Bicep or Terraform preferred)
- Establish CI/CD pipelines (GitHub Actions) for all backend services
- Define and enforce multi-tenant data isolation — all SQL queries must scope to
  `company_id`; no cross-tenant data leakage acceptable

### Integration Development (Priority Order)
1. **Aspire (LMN/Aspire)** — Property management, job scheduling, crew assignment.
   This is the primary integration target. Most charter partners will use Aspire.
   - Export crew-to-job assignments nightly from Aspire
   - Reconcile Actual's badge-based presence data against Aspire's scheduled jobs
   - Flag discrepancies (crew on site without a job, job scheduled but no crew present)
2. **QuickBooks Time / QuickBooks Payroll** — Import time entries verified by Actual;
   reduce manual timesheet reconciliation for the customer
3. **ADP Workforce Now** — Enterprise payroll export; required for county/municipal
   contract customers

### Backend Feature Development
- Add job types: badge assignment to job, bulk geofence updates, tag grouping by zone
- Implement scheduled report delivery (weekly crew summary email to customer owner)
- Build re-notification logic for badges offline > threshold
- Implement audit log for all presence events (required for wage compliance use case)

### Security Baseline
- Enforce TLS 1.2+ on all API endpoints
- Implement API key rotation for customer-facing endpoints
- Validate all inputs at the API boundary; parameterized queries only (no string
  concatenation in SQL)
- Role-based access: read-only dashboard vs. admin account per customer tenant
- Penetration test readiness: no secrets in code, no default credentials, no
  unnecessary exposed ports

### Monitoring and Observability
- Azure Monitor + Application Insights dashboards for API latency, ingestion queue depth,
  badge uptime by customer, error rate
- Alert on: ingestion failures, geofence service downtime, Power BI dataset refresh
  failure, badge offline beyond threshold
- Provide the Field Ops Coordinator with a simple uptime view (not raw Azure dashboards)

---

## Skills Required

**Required:**
- 4+ years backend engineering experience: REST APIs, relational databases, cloud platforms
- Strong SQL — including PostGIS or geospatial queries a significant advantage
- Azure experience: Functions, PostgreSQL, App Service, Storage, Networking
- Infrastructure-as-code: Bicep or Terraform
- CI/CD pipeline ownership (GitHub Actions, Azure DevOps)
- Multi-tenant SaaS architecture experience
- Python or Node.js for backend services (existing codebase will use one of these)

**Strongly preferred:**
- Experience integrating with field service management software (Aspire, ServiceTitan,
  Jobber, Salesforce Field Service, or similar)
- IoT data pipeline experience (time-series ingest, device telemetry)
- OWASP awareness and API security hardening experience
- Power BI dataset ownership and refresh management

**Not required at this stage:**
- Mobile or frontend development
- Hardware or firmware experience
- Prior landscaping or field service domain knowledge

---

## Technical Context

The stack when this hire joins will be:
- **Ingest:** Azure Functions consuming Blues Wireless Notecard-routed JSON events
- **Database:** Azure Database for PostgreSQL with PostGIS extension; PostGIS installed
- **Reporting:** Power BI Premium per User license; datasets refreshed from PostgreSQL
- **API:** REST API for firmware event posting and for future integrations
- **Hosting:** Azure App Service (or Functions only — depends on contract dev choices)
- **Docs:** Architecture Decision Records in `/docs/architecture/`

The contract developer must hand off:
- Full database schema with documented indexes
- API endpoint documentation (OpenAPI spec preferred)
- Deployment runbook (how to deploy a new version manually if CI/CD is not yet built)
- All credentials stored in Azure Key Vault, not in code or config files

Verify this handoff before this engineer's first day.

---

## Exit Gate Before Scaling Sales

Before the enterprise sales director (role 09) starts their quota clock, this engineer
must deliver:
- Multi-tenant isolation verified: customer A's data is not accessible from customer B's
  Power BI workspace
- Aspire integration in staging (not necessarily production): crew assignment data can
  be reconciled with badge presence data
- CI/CD pipeline live: deploys can be done without manual Azure Portal interaction
- Monitoring dashboard live: Field Ops Coordinator can check badge uptime without
  asking an engineer

---

## Compensation Structure

| Component | Amount |
|-----------|--------|
| Base salary | $110,000–$140,000 |
| Benefits | Standard package (health, dental, vision) |
| Equity | 0.5–1.0% (4-year vest, 1-year cliff) |
| Remote | Remote-friendly; quarterly in-person for planning weeks preferred |

Equity note: this is a senior technical hire who will own the platform for years.
The equity range is meaningful. Do not undercut it.

---

## Where to Find

**Priority 1 — LinkedIn**
Search: "backend engineer Azure IoT", "platform engineer field service SaaS",
"full-stack engineer PostGIS". Atlanta or remote.

**Priority 2 — Aspire community**
Aspire has a developer community forum and sometimes developers who have built custom
Aspire integrations advertise their work. Posting there (or reaching out to contractors
listed in the marketplace) can surface engineers with direct integration experience.

**Priority 3 — Hired / Toptal**
For senior backend engineers with SaaS platform background, Hired and Toptal attract
candidates who are actively exploring growth-stage startups.

---

## Known Risks

**Risk:** Engineer comes from a large enterprise and is not comfortable owning
infrastructure end-to-end.
**Mitigation:** Interview question: "You wake up at 6am and the ingest API is returning
500s. No one else is awake. Walk me through your next 30 minutes." The right answer
involves: checking Azure Monitor, tailing logs, identifying the last deployment,
rolling back if needed, not filing a ticket.

**Risk:** Integration with Aspire stalls because API documentation is incomplete.
**Mitigation:** Aspire does publish an API (REST + webhooks for some events). Have
the engineer contact Aspire developer support before starting the integration sprint.
Budget 2 weeks for integration research before a single line of code is written.
