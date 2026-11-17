# Actual Deck

The `/actual/` route is now powered by a single browser-ready ES module in `actual/assets/index.js`. The module pulls React, React DOM, Lucide icons, and HTM from the esm.sh CDN so the deck renders without a bundler or build step. Tailwind utility classes continue to come from the CDN snippet inside `actual/index.html`.

Card copy now lives in `assets/actual-deck/cards.json`, which the module fetches at runtime. Updating that JSON file is all that is required to ship new or edited cards.

## Editing the deck

1. Edit `assets/actual-deck/cards.json`.
2. Optional: run a lightweight static server (for example, `npx serve .`) and open <http://localhost:3000/actual/> to preview. Refresh the page to load the new JSON.
3. Commit the updated JSON (and any supporting tweaks such as preset changes in `actual/assets/index.js`).

### Stack presentation

The stack drawer now supports a presentation view. Add cards to the stack, click **Present**, and advance with the on-screen arrows while flipping between front/back content for facilitation. Collapse the drawer when you want more room to browse cards and expand it again to manage entries.

## Styling helpers

Global tweaks live in `actual/assets/style.css`. Tailwind-style utility classes are evaluated at runtime by the CDN script, so new class names in the module take effect immediately without configuration changes.

## Why the Vite project was removed

The previous build relied on a locally-built bundle that could not be regenerated in the restricted environment, so GitHub Pages continued to serve stale JavaScript. The new zero-build setup keeps the experience deterministic: whatever lands in `main` is exactly what renders in production.
