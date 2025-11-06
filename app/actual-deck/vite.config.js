import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../../assets/actual-deck",
    emptyOutDir: true,
    rollupOptions: {
      input: "./main.jsx",
      output: {
        entryFileNames: "main.js",
        assetFileNames: (a) =>
          a.name && a.name.endsWith(".css") ? "style.css" : "[name][extname]"
      }
    }
  },
  base: "/"
});
