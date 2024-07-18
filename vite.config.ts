import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, UserConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTest.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(new URL(".", import.meta.url).pathname, "./src"),
    },
  },
} as UserConfig);
