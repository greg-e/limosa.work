# Zettelkasten UI (GitHub Pages)

This repository publishes a browser-only Zettelkasten reader at `/zettelkasten/`.
It runs entirely on GitHub Pages and pulls markdown straight from `zettels/<year>/<yyyymm>/<id>.md`—no CLI or backend services required.

## How it works
- The page `pages/zettelkasten.md` loads `/assets/data/zettelkasten-index.json` for a fast first pass, then can rebuild the list live from GitHub on demand.
- A small inline markdown renderer in `assets/js/zettelkasten.js` handles headings, lists, emphasis, blockquotes, links, and inline code without external dependencies.
- Styling lives in `assets/css/zettelkasten.css` to avoid conflicts with the rest of the site.
- Quick authoring hooks are wired directly to GitHub: the **New note** button opens a pre-filled `zettels/<year>/<yyyymm>/<id>.md` draft in the repo’s `main` branch, and the **Edit selected** link jumps to the GitHub editor for the currently selected note.

Use the **Refresh** button after removing, renaming, or adding a note. It will pull a fresh list from GitHub if the static index hasn’t caught up and keep your search term in place while reselecting the closest available entry.

## Zettel layout
- Notes live under `zettels/<year>/<yyyymm>/<id>.md` (e.g., `zettels/2025/202511/251115_example.md`).
- A starter template is available at `templates/zettel_template.md`.
- Maps of Content live in `MOCs/` and binaries live in `attachments/`.

## Updating the index
Run the helper script whenever you add or rename files in `zettels/`:

```bash
node scripts/build-zk-index.js
```

The script scans `zettels/**.md`, extracts the first heading as the title, captures a short excerpt, and writes the fresh index to
`assets/data/zettelkasten-index.json` for the UI to consume.
