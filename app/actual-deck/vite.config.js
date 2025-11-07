import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import crypto from "crypto";

const hash = crypto.randomBytes(4).toString("hex");

export default defineConfig({
  plugins: [react()],
  define: { __BUILD_HASH__: JSON.stringify(hash) },
  build: {
    outDir: "../../assets/actual-deck",
    emptyOutDir: false,
    rollupOptions: { output: { entryFileNames: "main.js", assetFileNames: "style.css" } }
  }
});
