import { defineConfig } from "vitest/config";
import path from "path";
import { config } from "dotenv";

config({ path: path.resolve(__dirname, ".env.local") });

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    fileParallelism: false,
    sequence: { concurrent: false },
    env: {
      // DATABASE_URL must come from .env.local / process env — never hardcode credentials here.
      STUDIO_DEV_TEST_LOGIN: process.env.STUDIO_DEV_TEST_LOGIN ?? "1",
      STUDIO_LANE: process.env.STUDIO_LANE ?? "DEV",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
