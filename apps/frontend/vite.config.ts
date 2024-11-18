import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@": join(process.cwd(), "src"),
    },
  },
});
