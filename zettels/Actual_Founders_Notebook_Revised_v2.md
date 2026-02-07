**ACTUAL**

PROOF OF WORK

Founder's Notebook --- Refined

From Vision to Working Prototype --- A Practical Plan

February 2026 \| limosa.work

+-----------------------------------------------------------------------+
| **What Changed in This Version**                                      |
|                                                                       |
| *Stripped the over-philosophical framing. Replaced per-device         |
| consumption pricing (badge-day/tag-day fees) with operation-based     |
| pricing tied to sites or crews served. Mapped the 12 JTBD cards to   |
| architecture and PoV metrics. Identified the specific help needed at  |
| each stage. Made every step concrete enough to act on this month.     |
| Scoped realistically: you may only make it through prototype, and     |
| that's a valid outcome if it's a solid prototype.*                    |
+-----------------------------------------------------------------------+

1\. Honest Assessment: Where You Stand

Before diving into the plan, here is a clear-eyed look at what you have,
what you lack, and what must change.

What You Have (Real Assets)

-   Deep domain expertise: 15+ years in landscape management means you
    know exactly how field crews lose time and money.

-   Business analyst skills: You understand data modeling, workflow
    design, and system integration from the inside.

-   Well-defined product concept: Badge + BLE tags + cellular upload +
    operation-based pricing. The core idea is tight.

-   12 validated JTBD cards with architecture mappings and measurable
    PoV metrics --- this is more structured than most seed-stage
    startups.

-   Blues Wireless Notecard as a proven prototyping platform with
    built-in cellular and accelerometer.

-   Biometric elimination decision: Removing the fingerprint scanner was
    the right call. It cuts \$12/unit, kills BIPA risk, and simplifies
    everything.

What You Lack (Gaps That Will Kill You)

-   No embedded firmware engineer. You cannot write the badge firmware
    yourself. This is the single biggest blocker.

-   No backend/cloud engineer. The ingestion pipeline, truth store, and
    API layer require backend expertise you don't have.

-   No working hardware prototype. The Blues Notecard is a dev kit, not
    a badge. You need someone to turn it into one.

-   No charter partner signed. The pitch materials exist but no one is
    committed with money or crews yet.

-   No revenue model validated. Operation-based pricing (per site or
    per crew) is the right direction, but the specific rates and
    thresholds are untested.

What Was Over-Philosophical (The Critique)

The previous roadmap treated 54 Zettelkasten cards, a manifesto, and 7
card families as engineering requirements. They are not. They are design
principles. The distinction matters: a design principle says "minimize
field burden." An engineering requirement says "badge must last 7 days
on a single charge at 4 samples per minute." The Zettelkasten is useful
for maintaining product coherence, but it was taking up space that
should have been occupied by specifications, cost models, and hiring
plans. This version keeps the philosophy where it belongs --- as a
filter, not a deliverable.

2\. The Product, Plainly Stated

Actual is a hardware + cloud platform that automatically captures time,
location, and tool usage for field crews. Badges worn by workers and BLE
tags attached to equipment create a continuous, verifiable record of
work without any manual data entry. The data feeds payroll, job costing,
billing, and scheduling systems that companies already use.

What the Badge Does

-   Captures GPS position, accelerometer data, and BLE proximity scans 4
    times per minute.

-   Stores all data locally in a buffer. Uploads in batches over
    cellular (Blues Notecard).

-   Operates offline-first: no Wi-Fi, no phone, no gateway
    infrastructure needed.

-   Identity is assigned by supervisor at start of shift. No biometrics,
    no login, no app.

-   Target battery life: 7 days active use, weeks on standby.

-   Target production cost: \$30/unit at volume. Prototype cost:
    \~\$137/unit with dev kit components.

What the BLE Tags Do

-   Attach to tools and equipment. Broadcast a unique ID.

-   When a badge detects a tag, it logs tool proximity with timestamp.

-   Enables automatic equipment usage tracking without manual logging.

-   Target cost: \$5--10/tag at volume. Simple, replaceable,
    battery-powered.

What the Cloud Does

-   Ingests batch uploads via idempotent API. Normalizes and
    deduplicates events.

-   Binds events to job sites via tax-parcel geofencing. Binds tool
    usage via BLE tag registry.

-   Writes canonical truth intervals to an immutable store.

-   Exposes truth via APIs and connectors to payroll, ERP, scheduling,
    and billing systems.

-   Anomaly detection flags exceptions for human review --- the system
    does not auto-correct.

3\. Pricing Model: Operation-Based, Not Per-Device

Actual does not charge per user, per seat, or per device. The hardware
is a one-time commodity purchase. Recurring revenue comes from the cloud
value the system creates --- not from counting badges or tags.

This distinction matters. If pricing is tied to badge-days or tag-days,
customers will do the math and arrive at a per-worker-per-month number.
At that point, it looks and feels exactly like per-user SaaS pricing
dressed up with different words. That will feel deceptive to a buyer who
was told this was consumption-based. The unit of pricing must be tied to
the value delivered, not the devices deployed.

Pricing Structure

  -------------------- ------------------ ---------------------------------------
  **Component**        **Unit**           **Rationale**

  Badge Hardware       One-time purchase  Customer owns the device. Commodity
                       or lease per badge price target: \$30/unit at volume.
                                          Replaceable. Not a recurring cost.

  Tag Hardware         One-time purchase  Simple BLE beacon. Commodity item.
                       per tag            Target: \$5--10/tag at volume.

  Cloud Platform Fee   Per active job     Core recurring revenue. Tied to the
                       site per month     operation, not the headcount. A site
                       (or per crew per   that generates verified data in a
                       month)             given month = 1 unit. Scales with
                                          seasonal workload automatically.

  Connectors           Per active         Payroll, ERP, scheduling connectors.
                       integration per    Charges only for integrations actually
                       month              pushing data.

  Insights/Analytics   Per report or      Reverse-Engineered Schedule,
                       dashboard access   Reverse-Engineered Estimate outputs.
                       (future tier)      
  -------------------- ------------------ ---------------------------------------

+-----------------------------------------------------------------------+
| **Why Operation-Based, Not Per-Device**                               |
|                                                                       |
| *Landscape and construction crews fluctuate seasonally. A 50-person   |
| company might run 50 badges in summer and 15 in winter. Per-user      |
| pricing punishes them in the off-season. But per-badge-day or         |
| per-tag-day pricing has the same problem --- it's per-user pricing    |
| with extra arithmetic. The customer will divide the monthly bill by   |
| headcount and compare to a \$5/user SaaS. If the number is higher,   |
| you lose. If it's lower, they wonder why you didn't just say          |
| \$X/user.                                                             |
|                                                                       |
| Operation-based pricing (per site, per crew, or tiered by scale)      |
| avoids this entirely. The customer thinks about their business ---    |
| "we service 40 properties" or "we run 6 crews" --- not about          |
| counting devices. Hardware is a one-time buy at commodity cost. The    |
| recurring cloud fee scales with the operation. Try it with one crew,  |
| pay only for what that crew covers."*                                 |
+-----------------------------------------------------------------------+

Pricing Thresholds to Validate

These are the questions that only real pilots will answer. Do not set
final prices before charter partner feedback.

-   What is the per-site or per-crew monthly rate that makes this
    cheaper than the labor cost of manual timesheets?

-   What is the minimum monthly commitment that makes the cloud
    infrastructure viable? (Floor pricing.)

-   Should pricing tier by number of sites, number of crews, or total
    event volume? Which unit feels most natural to the buyer?

-   At what scale does a flat monthly rate become more attractive than
    per-unit pricing? (Enterprise threshold.)

-   Does the customer perceive hardware as an asset (purchase) or an
    expense (lease)? This affects cash flow positioning.

4\. The 12 Jobs To Be Done --- Grounded

The JTBD deck defines 12 jobs that Actual performs. Each card now maps
to a specific architecture component, a proof-of-value metric, and a
prototype priority. Cards marked PROTOTYPE are what you must prove in
the prototype phase. Cards marked PILOT require charter partner data.
Cards marked SCALE are future capabilities.

  -------- ----------------------------- ----------- --------------------------
  **\#**   **Job**                       **Phase**   **Key PoV Metric**

  01       Single Source of Operational  PILOT       Cross-system variance rate
           Truth                                     down 80%

  02       Capture Field Truth Without   PROTOTYPE   Daily crew interaction \<
           Human Action                              2 min/day

  03       Place Automation at the       PROTOTYPE   Downstream error rate down
           Constraint                                materially

  04       Preserve Truth Through        PROTOTYPE   Event loss rate near 0%
           Failure and Time                          

  05       Bind Work to Context          PILOT       Auto-attribution rate \>=
           Automatically                             95%

  06       Track Equipment Presence and  PROTOTYPE   Tool encounter log
           Use                                       completeness \>= 90%

  07       Shorten Distance Between Work PILOT       Books close duration down
           and Finance                               30-50%

  08       Reduce Administrative Drag to PILOT       Admin hours per crew/week
           Near Zero                                 down 50%

  09       Enable Management Without     SCALE       Manager validation time
           Policing                                  down 50%

  10       Strengthen Existing Systems,  PILOT       Net-new logins introduced:
           Not Replace                               0

  11       Maintain Verifiable Chain of  SCALE       Traceability rate: 100%
           Custody                                   

  12       Turn Verified Reality Into    SCALE       Forecast accuracy
           Foresight                                 improvement
  -------- ----------------------------- ----------- --------------------------

+-----------------------------------------------------------------------+
| **Prototype Must-Prove Jobs**                                         |
|                                                                       |
| *Cards 02, 03, 04, and 06 are the only ones that matter in the        |
| prototype phase. If the badge can passively capture time and location |
| (02), store-and-forward without data loss (04), detect BLE tool       |
| proximity (06), and do all of this at the edge where errors originate |
| (03), you have a viable prototype. Everything else depends on these   |
| four working.*                                                        |
+-----------------------------------------------------------------------+

5\. Practical Roadmap: What to Do and When

This roadmap is compressed to reflect reality: you are a solo founder
with a day job, building in evenings and weekends. The phases below are
sequential, and each has a clear exit gate. If you cannot pass a gate,
you stop and reassess. There is no shame in stopping at prototype with a
solid proof of concept.

Phase 1: Business Foundation (Months 1--2)

Goal: Legal entity exists, IP is documented, and you can legally accept
charter partner money.

  -------------------- --------------------- ------------------ ----------------
  **Task**             **Deliverable**       **Help Needed**    **Est. Cost**

  Register Georgia LLC Operating agreement,  Business attorney  \$500--800
                       EIN, state            (1--2 hrs)         
                       registration                             

  Open business bank   Separate accounts for None               \$0
  account              Actual                                   

  File provisional     Provisional patent    Patent attorney    \$2,000--4,000
  patent               application covering                     
                       badge-as-identity +                      
                       passive provenance                       
                       architecture                             

  Document IP:         Written technical     Patent attorney    Included above
  badge-as-identity,   descriptions in       review             
  passive association,  patent-ready format                      
  operation-based                                                
  pricing model                                                  

  Set up basic         QuickBooks or Wave,   None (your BA      \$0--25/mo
  accounting           chart of accounts     skills cover this) 

  Product liability    Quote for hardware    Insurance broker   Quote only
  insurance quote      product liability                        
  -------------------- --------------------- ------------------ ----------------

**Exit Gate:** LLC registered, bank account open, provisional patent
filed. Total budget: \$3,000--5,000.

Phase 2: Hardware Prototype (Months 2--6)

Goal: A working badge on Blues Notecard hardware that proves JTBD cards
02, 03, 04, and 06. This is the phase where you most need outside help.

  ---------------- --------------------- --------------------- -----------------
  **Task**         **Deliverable**       **Help Needed**       **Est. Cost**

  Hire freelance   Contracted developer  Upwork,               \$5,000--15,000
  embedded         with Blues/nRF        freelancer.com, or    for prototype
  firmware         experience            embedded systems      firmware
  engineer                               community. Look for   
                                         Blues Wireless        
                                         experience            
                                         specifically.         

  Define firmware  Written spec: GPS     You write this.       \$0
  requirements     sampling rate, BLE    Firmware engineer     
  spec             scan interval,        reviews for           
                   accelerometer wake    feasibility.          
                   logic, cellular batch                       
                   upload, local buffer,                       
                   power management                            

  Assemble         Blues Notecard +      Firmware engineer     \$137/unit x 5
  prototype badge  Notecarrier + BLE     assembles; you source units = \$685
                   module + GPS          components            
                   antenna + LiPo                              
                   battery in a                                
                   ruggedized enclosure                        
                   (3D printed or                              
                   off-shelf box)                              

  Write BLE tag    Simple BLE beacon     Same firmware         \$500--1,000
  firmware         advertising unique ID engineer or cheaper;  
                   at set interval       this is simple        

  Source BLE tags  5--10 BLE beacon tags Off-shelf BLE beacons \$50--100
                   for prototype testing (Minew, Radioland,    
                                         etc.)                 

  Test badge in    72-hour field test:   You do this yourself. \$0
  field conditions GPS accuracy, BLE     Your landscape        
                   range, battery life,  background is the     
                   data completeness,    asset here.           
                   cellular upload                             
                   reliability                                 

  Document test    Test report: power    You write this        \$0
  results          consumption in all                          
                   modes, GPS accuracy                         
                   at parcel level, BLE                        
                   detection range,                            
                   buffer integrity                            
                   after offline period,                       
                   batch upload success                        
                   rate                                        
  ---------------- --------------------- --------------------- -----------------

+-----------------------------------------------------------------------+
| **The Firmware Engineer Is Your Most Critical Hire**                  |
|                                                                       |
| *You cannot build the prototype without an embedded firmware          |
| developer. This person writes the code that runs on the badge itself  |
| --- the GPS sampling, BLE scanning, accelerometer wake logic, local   |
| buffering, and cellular upload via the Blues Notecard API. Budget     |
| \$5K--15K for this work. Look for someone who has shipped a product   |
| on Nordic nRF or similar MCU platforms and ideally has Blues Wireless |
| experience. This is a contract role, not a cofounder.*                |
+-----------------------------------------------------------------------+

**Exit Gate:** 5 working prototype badges that run for 72+ hours,
capture GPS + BLE + accelerometer data, and successfully batch-upload to
Blues Notehub. Total budget: \$6,000--17,000.

Phase 3: Cloud MVP (Months 4--8, overlapping with Phase 2)

Goal: Data from the prototype badges flows into a usable backend. You
can see badge data on a dashboard and export it. This does not need to
be production-grade --- it needs to be demonstrable.

  ---------------- --------------------- ------------------- ----------------
  **Task**         **Deliverable**       **Help Needed**     **Est. Cost**

  Blues Notehub    Notehub routes badge  You can likely do   \$0--50/mo cloud
  route to cloud   events to your cloud  this with your      costs
                   endpoint (AWS Lambda, BA/Power BI         
                   Azure Function, or    skills + learning.  
                   simple server)        Blues has good      
                                         docs.               

  Event ingestion  Idempotent endpoint   Backend developer   \$2,000--5,000
  API              that receives,        (contract) or you   if contracted
                   deduplicates, and     learning            
                   stores badge events   Python/Node         

  Data store       PostgreSQL or similar Same backend        Included above
                   with schema for:      developer           
                   events, badges, tags,                     
                   sites, workers                            

  Basic geofencing Tax-parcel boundary   You can build this  \$0
                   lookup: given GPS     in Python with      
                   coords, return site   shapely + parcel    
                   ID                    GIS data            

  Power BI         Dashboard showing:    This is your        \$0 (Pro license
  dashboard        badge status, daily   wheelhouse. Build   you already
                   events, site visits,  it yourself.        have)
                   tool encounters, data                     
                   quality metrics                           

  Badge assignment Simple web form or    Basic web dev or    \$0
  workflow         API: supervisor       even a Power App    
                   assigns badge serial                      
                   to worker name for                        
                   the day                                   
  ---------------- --------------------- ------------------- ----------------

+-----------------------------------------------------------------------+
| **Build What You Can, Contract What You Can't**                       |
|                                                                       |
| *You have Power BI skills and business analyst experience. Use them.  |
| The dashboard, the geofencing logic, the badge assignment workflow    |
| --- these are all within your capability. The ingestion API and data  |
| store are where you need backend help. A competent backend developer  |
| can build an MVP ingestion pipeline in 2--4 weeks.*                   |
+-----------------------------------------------------------------------+

**Exit Gate:** Badge data appears in a Power BI dashboard within 30
minutes of field capture. You can see which badge was at which site, for
how long, and which tools were nearby. Total budget: \$2,000--5,000.

Phase 4: Charter Partner Pilot (Months 6--12)

Goal: One real company uses the prototype badges with real crews on real
job sites. This is where JTBD cards 02, 04, 05, and 06 get validated
with actual data. This is also where your pricing model gets its first
test.

  ---------------- ---------------------- ------------------ ----------------
  **Task**         **Deliverable**        **Help Needed**    **Est. Cost**

  Identify charter 1 landscape or field   Your professional  \$0
  partner          services company with  network from       
                   5--20 crew members     landscape          
                   willing to pilot       management. This   
                                          is your unfair     
                                          advantage.         

  Charter partner  Simple agreement: they Business attorney  \$300--500
  agreement        get discounted         review (1 hr)      
                   hardware + free data                      
                   during pilot. You get                     
                   feedback + permission                     
                   to use anonymized                         
                   results.                                  

  Deploy 5--10     Badges assigned to     You manage         \$1,370--2,740
  badges + 10--20  crew, tags on key      deployment.        hardware
  tags             equipment, running for Firmware engineer  
                   30--60 days            on call for bugs.  

  Daily data       Dashboard tracking:    You do this in     \$0
  quality          event completeness,    Power BI           
  monitoring       GPS accuracy, BLE                         
                   detection rate, upload                    
                   success, battery                          
                   levels                                    

  Weekly partner   Structured feedback    You conduct these  \$0
  feedback         sessions with                             
                   supervisor and 2--3                       
                   crew members                              

  Pilot report     Written report: what   You write this     \$0
                   worked, what failed,                      
                   operation data (sites                     
                   active, crews served,                     
                   events processed),                        
                   crew feedback, cost                       
                   per site-month                            

  Validate         Compare actual         You do this        \$0
  operation-based  operation data against analysis           
  pricing          proposed pricing                          
                   tiers. Does the math                      
                   work for both sides?                      
  ---------------- ---------------------- ------------------ ----------------

**Exit Gate:** 30-day pilot complete. Data quality metrics hit: \>90%
event completeness, \<2 min/day crew interaction, BLE tool detection
\>85%. Charter partner says "I would pay for this." Operation-based
pricing model validated against real data. Total budget: \$1,700--3,300.

6\. The Help You Need --- Specific Roles and When

This is the section the previous roadmap was missing entirely. You
cannot build Actual alone. Here is exactly who you need, when, and what
it costs.

  ------------ ---------- ---------------- ----------------- ---------------------------
  **Role**     **When**   **Engagement**   **Budget**        **Where to Find**

  Business     Phase 1    2--4 hours       \$500--1,500      Local Atlanta business
  Attorney     (Month 1)                                     attorney. LegalZoom for LLC
                                                             if budget-constrained.

  Patent       Phase 1    Provisional      \$2,000--4,000    IP attorney with
  Attorney     (Month     filing                             IoT/hardware experience.
               1--2)                                         Ask for provisional-only
                                                             engagement.

  Embedded     Phase 2    Contract,        \$5,000--15,000   Upwork (search: Blues
  Firmware     (Months    80--160 hours                      Wireless, nRF52, embedded
  Engineer     2--6)                                         IoT). Hackster.io
                                                             community. Blues Wireless
                                                             developer forums.

  Backend      Phase 3    Contract, 40--80 \$2,000--5,000    Upwork. Look for
  Developer    (Months    hours                              Python/Node + PostgreSQL +
               4--8)                                         REST API experience. AWS
                                                             Lambda or Azure Functions
                                                             experience is a plus.

  Industrial   Phase 2    Contract, 20--40 \$1,000--3,000    Freelance ID on Upwork or
  Designer     (Month     hours                              local Atlanta maker
  (optional)   4--6)                                         community. 3D-printed
                                                             enclosure for prototype.

  Charter      Phase 4    Ongoing          \$0 (they pay     Your landscape management
  Partner (not (Month 6+) relationship     you)              network. Former employers,
  a hire)                                                    competitors, industry
                                                             contacts.
  ------------ ---------- ---------------- ----------------- ---------------------------

What You Do Yourself

-   Product management: requirements, specs, priorities, trade-off
    decisions.

-   Firmware requirements spec: you define what the badge must do; the
    firmware engineer implements it.

-   Data modeling and schema design: your BA skills directly apply here.

-   Geofencing logic: tax-parcel data + Python/shapely. Learnable with
    your SQL background.

-   Power BI dashboards: pilot monitoring, data quality, operation
    metrics.

-   Badge assignment workflow: Power Apps or simple web form.

-   All charter partner engagement: sales, deployment, feedback,
    relationship management.

-   Pricing model validation: financial analysis against real pilot
    data.

-   All documentation and pitch materials.

+-----------------------------------------------------------------------+
| **The Learning You Need to Do**                                       |
|                                                                       |
| *Your stated goal is to learn more about SQL, DAX, and AI. The SQL    |
| and DAX learning directly serves this project --- the event store,    |
| the truth queries, the Power BI operations dashboards all require     |
| it. AI is a future-phase capability (JTBD Card 12: predictive         |
| analytics). Focus SQL learning on PostgreSQL specifically, as it      |
| handles both relational data and geospatial queries (PostGIS) that    |
| the geofencing layer needs.*                                          |
+-----------------------------------------------------------------------+

7\. Total Budget: Concept Through Pilot

This is the real number. Not a fundraising fantasy. This is what it
costs a solo founder to get from idea to validated pilot.

  --------------------- -------------- -------------- ----------------------
  **Phase**             **Low          **High         **Key Variable**
                        Estimate**     Estimate**     

  1\. Business          \$3,000        \$5,000        Patent attorney cost
  Foundation                                          

  2\. Hardware          \$6,000        \$17,000       Firmware engineer rate
  Prototype                                           and hours

  3\. Cloud MVP         \$2,000        \$5,000        How much backend work
                                                      you do yourself

  4\. Charter Partner   \$1,700        \$3,300        Number of badges
  Pilot                                               deployed

  Monthly cloud/hosting \$50--100/mo x \$600--1,200   AWS/Azure consumption
                        12                            

  TOTAL                 \$13,300       \$31,500       
  --------------------- -------------- -------------- ----------------------

This is achievable as a self-funded side project over 12 months. The
high end (\$31.5K) is significant but not unreasonable for someone with
a full-time BA salary in Atlanta. The low end (\$13.3K) is achievable if
you do more of the backend work yourself and find a firmware engineer on
the lower end of the rate scale.

+-----------------------------------------------------------------------+
| **If You Stop After Prototype**                                       |
|                                                                       |
| *If you complete Phases 1--2 and produce 5 working badges with        |
| documented test results, you have spent \$9K--22K and you own: a      |
| registered business, a provisional patent, working prototype          |
| hardware, firmware source code, and documented performance data. That |
| is a fundable asset. You can seek investment, find a technical        |
| cofounder, or license the design. Stopping at prototype with solid    |
| documentation is not failure --- it's a defensible position.*         |
+-----------------------------------------------------------------------+

8\. Architecture: Edge → Cloud → Truth → Consumer

The JTBD deck defines a three-layer architecture that every card maps
to. This is the system you are building, simplified to its essential
components.

  ------------ ------------------------ ------------------ -------------------
  **Layer**    **Components**           **Prototype        **Pilot Scope**
                                        Scope**            

  Edge Capture Badge (GPS + BLE + IMU + All components     Same hardware, more
               cellular), BLE Tags,     present via Blues  units deployed
               Local Buffer             Notecard dev kit   

  Cloud Truth  Ingestion API,           Ingestion API +    Add geofencing, tag
               Normalization, Context   basic storage only binding, anomaly
               Binding (geofence + tag                     flags
               registry), Truth Store                      
               (PostgreSQL), Anomaly                       
               Detection                                   

  Downstream   Power BI dashboards,     Power BI dashboard Add one connector
  Consumers    REST APIs, Connectors to only               (payroll export or
               payroll/ERP/scheduling                      job costing)
  ------------ ------------------------ ------------------ -------------------

Data Flow (Prototype)

Badge captures GPS + BLE + accelerometer events at 4 samples/min. Events
buffer locally on the Notecard. Every 30 minutes (or on connectivity),
badge sends batch to Blues Notehub. Notehub routes events to your cloud
endpoint. Endpoint writes to PostgreSQL. Power BI connects to PostgreSQL
and displays dashboards. Supervisor views daily summaries, site
visits, tool encounters.

Operation Metering Points

The pricing model requires metering at specific points in the data flow.
These meters track operation-level usage, not device-level counts.

-   Site Activity Meter: Count distinct sites where badge events were
    recorded per billing period. Each active site = 1 billable unit.
    (Alternative: count distinct crews with activity per period.)

-   Event Volume Meter: Count total events ingested per billing period.
    Used internally for infrastructure cost modeling, not exposed as a
    customer-facing charge.

-   Connector Meter: Count active integrations pushing data per month.
    Each active integration = 1 billable unit.

9\. Risks That Will Actually Hit You

Not theoretical risks. These are the problems most likely to derail you
in the next 12 months.

  -------------- ---------------- ---------------- ------------------------------------
  **Risk**       **Likelihood**   **Impact**       **Mitigation**

  Can't find a   Medium-High      Blocks entire    Start looking NOW. Post on Blues
  firmware                        prototype        forums, Hackster, Upwork. Have
  engineer in                                      backup plan: pay more. This is not
  budget                                           where you cut costs.

  Blues Notecard Medium           Badge needs      Test early. If power budget fails,
  power                           daily charging   reduce GPS sampling rate.
  consumption                     (kills adoption) Accelerometer-based motion detection
  too high for                                     can gate GPS wake.
  7-day battery                                    
  life                                             

  GPS accuracy   Medium           Can't            Accept 10--15m accuracy. Use parcel
  insufficient                    auto-attribute   boundary buffers. Supplement with
  for                             work to job      BLE anchor beacons at high-value
  parcel-level                    sites            sites.
  geofencing                                       

  No charter     Medium           No real-world    Start conversations now, before
  partner                         validation       hardware is ready. Your landscape
  willing to                                       network is the asset. One "yes" is
  pilot                                            enough.

  Consumption    Low-Medium       Unprofitable     Model your cloud costs per site-month
  pricing                         unit economics   now. Blues Notecard has per-device
  doesn't cover                                    per-month fees (\$0.49 at Starter
  costs                                            tier). Layer your margin on top.
                                                   Per-site pricing must cover cloud
                                                   costs for all badges at that site.

  Scope creep:   High             Burns time and   The prototype proves 4 JTBD cards.
  building                        money on things  That's it. Everything else waits.
  features                        that don't       
  before proving                  matter yet       
  the core                                         

  You burn out   Medium-High      Project stalls   Contract the firmware and backend
  trying to                                        work. Your job is product
  build                                            management, not engineering. Spend
  everything                                       money to save time.
  yourself                                         
  -------------- ---------------- ---------------- ------------------------------------

10\. Where the Philosophy Lives Now

The Zettelkasten, the manifesto, and the 7 card families are not
deleted. They are repositioned. Here is where they actually add value,
and where they were causing harm.

Where Philosophy Helps

-   Trade-off decisions: When you have to choose between two features,
    the principles filter the decision. Example: should the badge
    auto-correct anomalous GPS data? The principle "Correction is
    Commentary" says no --- flag it, don't fix it. That's a useful
    filter.

-   Charter partner pitch: "Testimony over tracking" is a genuine
    differentiator for companies worried about employee pushback on
    surveillance tools. Keep it in sales materials.

-   Product coherence: As you add features over time, the principles
    prevent feature bloat and surveillance creep. They are guardrails,
    not deliverables.

-   Hiring filter: When you evaluate firmware engineers or backend
    developers, the principles help you assess whether they build the
    kind of product you want.

Where Philosophy Was Causing Harm

-   54 Zettelkasten cards as "engineering requirements": They are not.
    An engineering requirement has a number, a unit, and a test. "Truth
    as Infrastructure" is a slogan, not a spec.

-   Phase-by-phase card alignment tables: Mapping 3--5 cards to each
    phase created the illusion of rigor without adding practical
    guidance. Cut.

-   Manifesto quotes between every action item: Inspirational, but they
    padded the roadmap to 40+ pages and diluted the actual work. Moved
    to an appendix mindset.

-   The 30-month timeline: Unrealistic for a solo founder. This version
    scopes to 12 months through pilot, with honest acknowledgment that
    you may stop at prototype.

11\. Your Next 30 Days

Stop reading and start doing. Here are the actions for the next 30 days,
in priority order.

1.  Register Georgia LLC. Use LegalZoom if you want to save on attorney
    fees for the formation itself. Budget: \$500.

2.  Post a firmware engineer contract job. Upwork, Hackster.io forums,
    Blues Wireless community Discord. Write a clear scope: "Prototype
    firmware for IoT badge using Blues Notecard. GPS + BLE +
    accelerometer + cellular batch upload. Budget: \$5K--15K."

3.  Order 5 Blues Notecard Starter Kits + Notecarriers. You need
    hardware in hand to test with candidates. Budget: \~\$350.

4.  Order 10 off-shelf BLE beacon tags. Minew or Radioland. Budget:
    \~\$50--100.

5.  Write the firmware requirements spec. Define: GPS sample rate, BLE
    scan interval and duration, accelerometer wake threshold, batch
    upload frequency, local buffer size, power budget target. This is
    your most important document right now.

6.  Call 3 former landscape industry contacts about charter partnership.
    You are not selling anything yet. You are asking: "If I could give
    you an automatic, no-paperwork record of crew hours and equipment
    use, what would that be worth to you?"

7.  File provisional patent application. Engage a patent attorney this
    week. The core claims: badge-as-identity via supervisor assignment,
    passive association of worker-to-site via GPS and worker-to-tool via
    BLE, operation-based pricing for field truth capture.

8.  Set up a Blues Notehub account and route test data to a simple cloud
    endpoint. Follow the Blues quickstart. This validates that the data
    pipeline concept works before your firmware engineer starts.

+-----------------------------------------------------------------------+
| **The One Thing That Matters Most**                                   |
|                                                                       |
| *Find the firmware engineer. Everything else is paperwork and         |
| preparation. The firmware engineer is the difference between a        |
| concept and a prototype. Every day you delay this search is a day the |
| project stays on paper.*                                              |
+-----------------------------------------------------------------------+

12\. Success Criteria: How You Know It's Working

At each phase gate, here are the specific, measurable criteria that
determine whether you proceed or stop.

  ------------- ---------------------------- ----------------------------
  **Gate**      **Criteria**                 **Pass/Fail Test**

  Prototype     5 badges run 72+ hours       Binary: they either run or
  Complete      continuously                 they don't

  Prototype     GPS accuracy within 15m at   Measure against known parcel
  Complete      parcel boundaries            corners with surveyed
                                             coordinates

  Prototype     BLE tag detection at 5m      Place tag at known distance,
  Complete      range, \>85% scan success    measure detection rate over
                                             1 hour

  Prototype     Batch upload success rate    Count uploads sent vs.
  Complete      \>95% over 72 hours          uploads received

  Prototype     Battery life \>72 hours at 4 Measure from full charge to
  Complete      samples/min                  dead at target sample rate

  Cloud MVP     Data visible in Power BI     Timestamp comparison: badge
  Complete      within 30 min of field       event time vs. dashboard
                capture                      display time

  Pilot         Charter partner crew         Survey + observation
  Complete      interaction \<2 min/day      

  Pilot         Event completeness \>90%     Expected events vs. actual
  Complete      over 30-day period           events received

  Pilot         Charter partner verbal       They say yes or they don't
  Complete      commitment to pay at         
                proposed rates               

  Pilot         Pricing covers cloud costs   Unit economics calculation
  Complete      with \>30% margin            against real data
  ------------- ---------------------------- ----------------------------

This is your notebook, bruh. The philosophy is still there --- it's just
been put to work instead of being displayed. The JTBD cards now have
metrics. The pricing model matches how your customers actually operate.
The help you need is named and budgeted. The timeline is honest. Now go
find that firmware engineer.
