# CardCatalog slip-box (static)

A minimal slip-box web UI that runs as a static page on GitHub Pages. Cards are Markdown files with YAML front matter inside this repository (`cardcatalog/notes/`), and scans live under `cardcatalog/scans/`. The client reads those files directly; saving creates downloadable files for you to place in the repo before committing.

## Storage layout
- `cardcatalog/notes/` — one Markdown file per card (filename derived from the Zettel ID; `/` becomes `_`).
- `cardcatalog/scans/` — JPEG/PNG scans referenced by the `scanImage` field in notes.
- `cardcatalog/public/data/index.json` — generated drawer index the client loads on Pages.

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

## Building the static drawer index
Run this script whenever you add or edit notes locally so the static UI has an updated list:
```bash
node scripts/build-cardcatalog.js
```
This writes `cardcatalog/public/data/index.json`. Commit that file along with your note changes before pushing to Pages.

## Using the static UI on Pages
- The UI lives in `cardcatalog/public/` and works directly from GitHub Pages (no backend needed).
- Drawer, card view, register search, and random pulls read from `data/index.json` and the `notes/` files published with the site.
- “Save & download” in the editor and “Create note file” in The Table generate Markdown (and optional scan files) for you to place into `cardcatalog/notes/` and `cardcatalog/scans/`. After copying them into the repo, rerun the build script and commit.

## Slip-box flows preserved
- **Drawer:** scrolling column of IDs with short snippets.
- **Card view:** ID-forward layout with scans, links, backlinks (derived from links), and Markdown body rendering.
- **Table (Inbox):** stage scanned images locally and turn them into note files for the repo.
- **Register:** simple search over IDs, titles, and snippets—no semantic or AI search.
- **Pull a card:** random entry for serendipity.

The experience stays analog-first: fixed addresses, manual links, scans as the authoritative content, and no dashboards or AI conveniences.
