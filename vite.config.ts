import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: process.env.BASE_URL || mode === 'production' ? '/portfolio/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    sourcemap: true
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true
  }
}));