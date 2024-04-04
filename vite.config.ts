import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/challenge": {
        target: "https://cdn-dev.preoday.com/challenge",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/challenge/, ""),
      },
    },
  },
});
