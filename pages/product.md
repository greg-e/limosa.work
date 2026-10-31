---
title: Product
layout: default
---

*Actual is in development. Nothing below has been built yet. This page describes the design we're looking for [co-builders](/pages/partners.html) to help build.*

## The Objective

A wearable badge that records who worked, where they went, the path they walked, and what they did. It needs no worker interaction, equipment tags, GPS, or cellular.

## How It Works

Field service businesses lose money to wrong payroll, guessed job costs, and poor scheduling. Current tools depend either on workers doing something (apps, forms, check-ins) or on fragile add-on hardware (GPS, cellular data, and Bluetooth beacons stuck to tools).

The badge would record a crew's workday on its own. Workers clip it on at the start of their shift and go to work. It would work offline, logging movement and labor all shift with motion sensors, a barometer for terrain, and on-device models for motion and sound.

When the worker returns to the shop, the badge uploads its log. The cloud rebuilds the driving route, finds each job site, maps the walking path on each property, and breaks down labor by type.

## Why This Architecture

### Nothing Installed in the Field
No beacons at job sites, no Bluetooth tags glued to vibrating tools, no trackers wired into vehicles, and no monthly data plans. The badge is the whole deployment.

### Nothing Asked of the Worker
No phones, apps, buttons, or check-ins. If the worker wears the badge, the work gets recorded.

### Routes and Job Sites Without GPS
Every shift starts and ends at the shop, a known location. Because the loop closes, the cloud can smooth the motion data in both directions and match it to road and elevation maps. That corrects sensor drift, finds scheduled and unscheduled stops, and rebuilds walking paths on each property.

### What Kind of Work
GPS and Bluetooth tags only show that a device was *near* a job site or tool. Actual's on-device models read the motion and vibration of the work and tell apart riding in a truck, standing idle, running power equipment, and hand labor. Payroll, job costing, and billing can rest on that.

## The Target Outcome

### For the Worker
A badge that stays out of the way, settles timesheet disputes, and never touches their personal phone.

### For the Business Owner
Records for payroll, job costing, and scheduling, from hardware that's quick to set up and needs no field maintenance.
