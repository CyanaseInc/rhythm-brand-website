import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import reactInspector from "vite-plugin-react-inspector";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && reactInspector(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));