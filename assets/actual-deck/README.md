# Actual Deck

The `/actual/` route is now powered by a single browser-ready ES module in `actual/assets/index.js`. The module pulls React, React DOM, Lucide icons, and HTM from the esm.sh CDN so the deck renders without a bundler or build step. Tailwind utility classes continue to come from the CDN snippet inside `pages/actual.html`.

## Editing the deck

1. Update copy, cards, or audience presets directly in `actual/assets/index.js`, or use the in-app **New Card** / **Edit** controls to compose changes and then export the JSON snippets you need.
2. Optional: run a lightweight static server (for example, `npx serve .`) and open <http://localhost:3000/actual/> to preview live changes. The in-app editor persists updates in memory so you can copy them back into the source file when you're happy with the wording.
3. Commit the edited module and any supporting assets.

### Stack presentation

The stack drawer now supports a presentation view. Add cards to the stack, click **Present**, and advance with the on-screen arrows while flipping between front/back content for facilitation.

## Styling helpers

Global tweaks live in `actual/assets/style.css`. Tailwind-style utility classes are evaluated at runtime by the CDN script, so new class names in the module take effect immediately without configuration changes.

## Why the Vite project was removed

The previous build relied on a locally-built bundle that could not be regenerated in the restricted environment, so GitHub Pages continued to serve stale JavaScript. The new zero-build setup keeps the experience deterministic: whatever lands in `main` is exactly what renders in production.
