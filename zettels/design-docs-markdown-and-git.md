# Design Docs, Markdown, and Git

*Mar 29, 2020*

About a year ago my software engineering team, the Azure Sphere Security Services (AS3) team, found ourselves struggling with our design document process. So we ran an experiment, moving all our design documents to be written in Markdown, checked into Git, and reviewed via a pull request (PR). The experiment has been incredibly successful, so we’ve iterated and refined it, and have even expanded it to the broader Azure Sphere team. The goal of this document is to share our process and what we learned along the way.

## Original Process

Our original design doc process involved writing a Microsoft Word document and sharing it via SharePoint. Feedback was gathered via in‑person reviews, document comments, and emails. Approval was then done over email. To signal that a document was the “approved plan of record” versus “an under review draft”, we toggled a property on the document.

This worked fine when we were a small team with a small number of documents, but became challenging as the team grew rapidly.

## Challenges

Several challenges were identified during retrospectives:

### Comments
Tracking comments across Word documents, meetings, and emails was cumbersome. It was often unclear when comments were resolved or what the resolution was. Once a document was approved, comments were hidden and valuable context was lost.

### Approval Process
It was often unclear who had approved a document or how approval worked. Many approved documents were missing the approved property, leaving SharePoint cluttered with documents in unclear states.

### Context Switching
Switching from engineering tools to Word and SharePoint created friction for engineers and discouraged participation.

### Versioning
Word and SharePoint did not provide a clear or easy way to version documents over time.

## The Experiment

To address these issues, the AS3 team began writing design documents in Markdown and checking them into a dedicated EngineeringDocs Git repository. Reviews are conducted via pull requests, comments are resolved directly, and approval is granted by signing off on the PR. Anything merged into `master` is considered the plan of record.

## Single Repo vs. Next to Code

Two options were considered:

- A single repository for all design documents
- Storing design documents alongside the code they implement

A single repository was chosen for the following reasons:

- **Discoverability:** Easier to find all design decisions in one place.
- **Large Designs:** Designs spanning multiple services don’t map cleanly to one repo.
- **Unconstrained Design:** Authors are free to design across the system without being constrained by repo boundaries.

## Conducting a Design Review

The team uses the OARP decision‑making model. The first pull request identifies stakeholders and includes a table listing OARP assignments. The pull request author is always the Owner.

This approach:

- Makes the decision process explicit
- Signals that the problem is actively being worked on
- Allows people to opt in or out early
- Prevents late‑stage surprises

Once stakeholders are identified, Approvers approve the pull request and the Owner merges it.

## Writing the Design Document

The Owner creates a new branch and authors the document in Markdown. Informal feedback is gathered early through whiteboard sessions or conversations to avoid surprises during formal review.

Architectural diagrams can be added as images or via Mermaid. Visio source files are also checked in to allow easy future edits.

Once ready, a pull request is submitted and all OARP participants are added as reviewers.

## Design Pull Request

Feedback is provided through pull request comments. All comments must be addressed and marked as resolved or won’t fix. Once approved, the document is merged and becomes the plan of record.

## Design Review Meeting

Design review meetings are optional but common. Owners, Approvers, and Reviewers are required attendees; Participants are optional.

Meetings include time to read the document and add comments directly to the pull request. Discussion then focuses on resolving feedback, with decisions recorded in PR comments.

## Updating the Design

Design documents may be updated later as implementation changes or new requirements emerge. Updates follow the same pull request process, with the original Owner and Approver as required reviewers.

## Conclusion

The experiment proved highly successful and has been adopted more broadly across the Azure Sphere team.

Using Git and Markdown addressed all major pain points:

- **Comments:** Clear resolution tracking and durable discussion history
- **Approval:** Transparent stakeholder identification and recorded sign‑off
- **Context Switching:** Engineers stay in familiar tools
- **Versioning:** Easy updates with full history

By using tools engineers already rely on, the process feels lightweight and sustainable. One of the biggest benefits has been increased clarity around decision‑making and durable communication—both critical for scaling a fast‑growing team.
