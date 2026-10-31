---
title: Product
layout: default
---

*Actual is a concept in development. Nothing below has been built yet. This page describes the design we're working toward and looking for [co-builders](/pages/partners.html) to help build.*

## The Objective

We're building a self-contained wearable badge that delivers automated, verifiable proof of work: who worked, where they went, the path they walked, and what tasks they performed. The goal is no user interaction, no equipment tags, and no reliance on GPS or cellular networks.

## Autonomous Proof of Work via Infrastructure-Free Edge Intelligence

Field service businesses lose money to inaccurate payroll, guessed job costing, and inefficient scheduling. Existing solutions depend either on human compliance (apps, forms, manual check-ins) or on fragile secondary infrastructure (GPS, cellular data, and Bluetooth beacons attached to tools).

We're designing a single rugged badge that records a field crew's workday on its own. Workers clip on the badge at the start of their shift and go to work. Working offline, the badge would use inertial sensors, a barometer for terrain profiling, and on-device models for motion and sound to log movement and physical labor all shift.

When the worker returns to the shop, the badge uploads its log. The cloud then rebuilds the driving route, identifies each job site visited, maps the on-foot work path across each property, and breaks down active labor by task type.

## Why This Architecture

### Infrastructure-Free Deployment
No beacons installed at job sites, no Bluetooth tags epoxied onto vibrating tools, no trackers wired into vehicles, and no monthly cellular data plans. The badge is the entire hardware deployment.

### No Burden on the Worker
No phones, no apps, no buttons, no tap-to-check-in. If the worker is wearing the badge, the data is captured passively.

### Route and Site Discovery Without GPS
Every shift starts and ends at a known location: the shop. Because the loop closes, the cloud can smooth the inertial data in both directions and match it against road and elevation maps. That corrects sensor drift, finds scheduled and unscheduled stops, and rebuilds walking paths on each property without a satellite connection.

### Labor Verification Beyond Presence
GPS and Bluetooth tags can only show that a device was *near* a job site or tool. Actual's on-device motion and vibration models are designed to read the work itself and tell apart riding in a truck, standing idle, running power equipment, and hand labor. That's a stronger basis for payroll, job costing, and client billing than presence alone.

## The Target Outcome

### For the Worker
Technology that stays out of the way, protects them from timesheet disputes, and never touches their personal phone.

### For the Business Owner
Automated, verifiable records for payroll, granular job costing, and scheduling, with hardware that's quick to deploy and has nothing to install or maintain in the field.
