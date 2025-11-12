# Actual Deck Vite App

This directory now contains a ready-to-build Vite + React project that publishes the Actual Deck to the `/actual/` route on [limosa.work](https://limosa.work). The project lives under `app/` and builds straight into `actual/`, which is served verbatim by GitHub Pages.

## Local development

```bash
cd assets/actual-deck/app
npm install
npm run dev
```

The dev server runs on <http://localhost:5173>. Tailwind utility classes are provided via the CDN snippet that is already included in `index.html`.

## Building and committing the static assets

```bash
cd assets/actual-deck/app
npm run build
```

The build step wipes and recreates `actual/`. Commit the generated files so GitHub Pages can serve them without an additional pipeline.

## Updating the dataset or UI

1. Edit the React source in `assets/actual-deck/app/src/`.
2. Re-run `npm run build` to refresh `actual/`.
3. Commit both the source changes and the rebuilt static assets.

`pages/actual.html` is a very small shell that simply loads the compiled bundle from `/actual/assets/index.js`. As long as the output location and file names remain unchanged, GitHub Pages will automatically serve the updated experience after each push to `main`.
