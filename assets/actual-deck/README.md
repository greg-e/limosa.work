# Actual Deck App

This folder contains the standalone React component (`ActualDeckApp.tsx`) and the prebuilt assets that were generated for the preview on limosa.work.

If you want to experiment with the deck locally or embed it elsewhere, the easiest path is to drop the component into a small Vite React project. The steps below assume you have Node.js 18+ installed.

## 1. Scaffold a playground project

```bash
npm create vite@latest actual-deck-playground -- --template react-ts
cd actual-deck-playground
npm install
```

## 2. Install the UI dependencies

The component uses Framer Motion for animation and lucide-react for the icons. Install them in the playground project:

```bash
npm install framer-motion lucide-react
```

Tailwind utility classes are referenced throughout the JSX. For a quick preview you can use the precompiled stylesheet that ships in this repository instead of wiring Tailwind from scratch:

```bash
curl -o src/actual-deck.css \
  https://raw.githubusercontent.com/<your-github-username>/<your-repo>/main/assets/actual-deck/style.css
```

(Replace the URL above with the raw URL to `assets/actual-deck/style.css` from wherever you cloned this repo—adjusting the branch name if you are not on `main`. If you prefer a full Tailwind build, follow the [official Tailwind + Vite guide](https://tailwindcss.com/docs/guides/vite) and skip the curl step.)

## 3. Drop in the component

Copy `assets/actual-deck/ActualDeckApp.tsx` into `src/ActualDeckApp.tsx` inside the Vite project. Then update `src/main.tsx` to render it and import the stylesheet:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import ActualDeckApp from "./ActualDeckApp";
import "./actual-deck.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActualDeckApp />
  </React.StrictMode>
);
```

If your project already has Tailwind wired up, replace the stylesheet import with your existing `index.css` that includes the Tailwind layers.

## 4. Run the dev server

```bash
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). Open it in the browser to see the deck. The app hot-reloads as you edit the dataset or UI.

## 5. Build for static hosting (optional)

When you are happy with the configuration, build the static assets:

```bash
npm run build
```

The production bundle will be written to `dist/`; you can deploy those files to any static host.

---

Because the deck is a regular React component, you can also mount it inside an existing application shell. The steps above just provide a clean sandbox for experimentation.
