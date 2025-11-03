import { defineConfig } from "vite";

export default defineConfig({
  root: "app/actual-deck",
  build: {
    outDir: "../../assets/actual-deck",
    emptyOutDir: true,
    rollupOptions: {
      input: "app/actual-deck/main.jsx",
      output: {
        entryFileNames: "main.js",   // stable filename
        assetFileNames: "[name].[ext]"
      }
    }
  },
  base: "/"
});

