import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],                 // no root here
  build: {
    outDir: "../../assets/actual-deck",
    emptyOutDir: true,
    lib: {
      entry: "./main.jsx",            // entry is relative to cwd (app/actual-deck)
      formats: ["es"],
      fileName: () => "main"
    },
    rollupOptions: {
      output: {
        assetFileNames: (a) =>
          a.name && a.name.endsWith(".css") ? "style.css" : "[name][extname]"
      }
    }
  },
  base: "/"
});
