import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "app/actual-deck",
  plugins: [react()],
  build: {
    outDir: "../../assets/actual-deck",
    emptyOutDir: true,
    lib: {
      entry: "app/actual-deck/main.jsx",
      formats: ["es"],
      fileName: () => "main"
    },
    rollupOptions: {
      output: {
        // keep CSS stable too
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) return "style.css";
          return "[name][extname]";
        }
      }
    }
  },
  base: "/"
});
