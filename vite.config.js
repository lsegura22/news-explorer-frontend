import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/news-explorer-frontend/", // <-- Add your repo name here (with the slashes)
});
