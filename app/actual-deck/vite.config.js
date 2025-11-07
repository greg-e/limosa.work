import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import crypto from "crypto";

const hash = crypto.randomBytes(4).toString("hex");

export default defineConfig({
  plugins: [react()],
  define: { __BUILD_HASH__: JSON.stringify(hash) },
  build: {
    // build a plain ES module bundle with main.jsx as the entry
    lib: {
      entry: "./main.jsx",
      formats: ["es"],
      fileName: () => "main"
    },
    outDir: "../../assets/actual-deck",
    emptyOutDir: false,
    // keep filenames stable; CSS is produced by Tailwind step, not Vite
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name && assetInfo.name.endsWith(".css") ? "ignore.css" : "[name][extname]"
      }
    }
  }
});
