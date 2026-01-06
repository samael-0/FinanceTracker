import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://6934145d4090fe3bf01ed82a.mockapi.io/",
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
