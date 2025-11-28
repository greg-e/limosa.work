# Zettelkasten UI (GitHub Pages)

This repository publishes a browser-only Zettelkasten reader at `/zettelkasten/`.
It runs entirely on GitHub Pages and pulls markdown straight from the `notes/` folder—no CLI or backend services required.

## How it works
- The page `pages/zettelkasten.md` loads `/assets/data/zettelkasten-index.json` for a fast first pass, then can rebuild the list live from GitHub on demand.
- A small inline markdown renderer in `assets/js/zettelkasten.js` handles headings, lists, emphasis, blockquotes, links, and inline code without external dependencies.
- Styling lives in `assets/css/zettelkasten.css` to avoid conflicts with the rest of the site.
- Quick authoring hooks are wired directly to GitHub: the **New note** button opens a pre-filled `notes/<id>.md` draft in the repo’s `main` branch, and the **Edit selected** link jumps to the GitHub editor for the currently selected note.

Use the **Refresh** button after removing, renaming, or adding a note. It will pull a fresh list from GitHub if the static index hasn’t caught up and keep your search term in place while reselecting the closest available entry.

## Updating the index
Run the helper script whenever you add or rename files in `notes/`:

```bash
node scripts/build-zk-index.js
```

The script scans `notes/*.md`, extracts the first heading as the title, captures a short excerpt, and writes the fresh index to
`assets/data/zettelkasten-index.json` for the UI to consume.
