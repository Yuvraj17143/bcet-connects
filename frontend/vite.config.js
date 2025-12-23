// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // 🔹 Path aliases (unchanged, already perfect)
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@context": path.resolve(__dirname, "src/context"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@services": path.resolve(__dirname, "src/services"),
      "@": path.resolve(__dirname, "src"),
    },
  },

  // 🔹 Dev server config (sirf LOCAL ke liye)
  server: {
    port: 5173,
    open: true,

    // ⚠️ Proxy ONLY for local development
    // Production (Vercel) me ye use nahi hota
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  // 🔹 Global SCSS support
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },

  // 🔹 Production build options (safe defaults)
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
