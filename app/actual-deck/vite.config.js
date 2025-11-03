import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "app/actual-deck",
  plugins: [react()],
  build: {
    outDir: "../../assets/actual-deck",
    emptyOutDir: true,
    lib: {
      entry: "main.jsx",          // <-- correct entry relative to root
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
