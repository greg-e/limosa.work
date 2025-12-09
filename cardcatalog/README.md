# CardCatalog slip-box (static)

A tactile, drawer-like slip-box UI that runs as a static GitHub Pages view at `/cardcatalog/`. Cards are Markdown files with YAML front matter inside this repository (`cardcatalog/notes/`), and scans live under `cardcatalog/scans/`. The client pulls those files directly from the repo on Pages, and all creation/update flows are handled by GitHub itself (workflow dispatch or standard commits)—no local CLI or server process required.

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

## GitHub-only workflows
Everything happens inside GitHub: cards live in the repo, and Actions keep the static UI refreshed.

### 1) Create a card via GitHub Actions
Use the `CardCatalog` workflow (workflow_dispatch) in the Actions tab:

- Inputs: `id`, `title`, optional `body`, `links` (comma-separated IDs), `tags` (comma-separated), and optional `scanUrl` (public JPEG/PNG). 
- The workflow writes the Markdown file to `cardcatalog/notes/`, downloads the scan into `cardcatalog/scans/` (filename derived from the ID), updates backlinks, rebuilds `public/data/index.json`, and commits everything back to the repo.

### 2) Automatic index refresh on pushes
Any push touching `cardcatalog/notes/` or `cardcatalog/scans/` triggers the same workflow to rebuild `cardcatalog/public/data/index.json` and commit updates so Pages always serves a fresh drawer.

### 3) Manual edits through GitHub UI
You can also edit Markdown files directly in GitHub’s web editor; the push will fire the workflow to refresh backlinks and the index automatically.

If you prefer to run the indexer locally, `node scripts/build-cardcatalog.js` still works; commit the regenerated `public/data/index.json` along with your note changes.

## Using the static UI on Pages
- Open `/cardcatalog/` (see `pages/cardcatalog.html`) on GitHub Pages to load the drawer UI.
- Drawer, card view, register, and random pulls read from `public/data/index.json` and the published note files.
- “Download note file” in The Table and the edit overlay both emit Markdown files (and an image download if you attach a scan). Move them into `cardcatalog/notes/` and `cardcatalog/scans/`, rerun the build script, and commit.

## Slip-box flows preserved
- **Drawer:** scrolling column of IDs with short snippets.
- **Card view:** ID-forward layout with scans, links, backlinks (derived from links), and Markdown body rendering.
- **Table (Inbox):** stage scanned images locally and turn them into note files for the repo.
- **Register:** simple search over IDs, titles, and snippets—no semantic or AI search.
- **Pull a card:** random entry for serendipity.

The experience stays analog-first: fixed addresses, manual links, scans as the authoritative content, and no dashboards or AI conveniences.
