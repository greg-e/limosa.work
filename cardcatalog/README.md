# CardCatalog slip-box

A minimal slip-box web app that runs against Markdown files stored in this repository. Notes are plain files with YAML front matter; scans live in a `scans/` folder. The app serves a single-page React UI that feels like leafing through a drawer of index cards.

## Storage layout
- `cardcatalog/notes/` — one Markdown file per card (filename derived from the Zettel ID; `/` becomes `_`).
- `cardcatalog/scans/` — uploaded JPEG/PNG scans tied to cards.
- `cardcatalog/config.json` — optional overrides for `notesDir` and `scansDir` if you want to point at another repo path.

Example note file:
```markdown
---
id: "21/3d7a7"
title: "Causality within systems theory"
links: ["21/3d7a6", "99a2"]
backlinks: []
tags: ["systems", "causality"]
created: "2025-02-10T14:22:00.000Z"
scanImage: "scans/21_3d7a7.jpg"
---

Body text starts here.
```

## Running the app locally
```bash
npm install
npm run cardcatalog
# visit http://localhost:4000
```

The server reads `cardcatalog/config.json` to find the notes and scans directories. All changes are simple file writes—commit and push the repo yourself when ready.

## API sketch
- `GET /api/notes` — list drawer summaries.
- `GET /api/notes/:id` — full card.
- `POST /api/notes` — create; adds backlinks on linked notes.
- `PUT /api/notes/:id` — update metadata/body; refreshes backlinks.
- `GET /api/random-note` — pull a random card.
- `GET /api/search?q=` — register search over title/body.
- `GET /api/suggest-next-id?parent=` — helper for branching.
- `POST /api/scans` — multipart upload for scans; attach to a card when `id` is provided.
- `GET /api/scans/:filename` — serve an image from scans.

## Frontend flows
- **Drawer:** scrolling column of cards showing ID, title, and a short snippet.
- **Card view:** centered card with ID, title, body, links/backlinks, optional scan thumbnail, and a lightweight editor.
- **Table (Inbox):** upload a scan, type an ID/title, and create a new note that writes straight to the `notes/` directory.
- **Register:** small search box over titles/bodies; click through to open a card.
- **Pull a card:** jumps to a random card for serendipitous browsing.

The UI keeps the card image and fixed ID front-and-center to preserve the tactile slip-box feel—no dashboards, AI helpers, or auto-linking.
