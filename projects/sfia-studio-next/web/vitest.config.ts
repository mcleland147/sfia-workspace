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
    // Before any test file / db client import: resolve DATABASE_URL to sfia_next_e2e only.
    setupFiles: [path.resolve(__dirname, "tests/setup/vitest-pg-target.ts")],
    env: {
      // DATABASE_URL must come from .env.local / process env — never hardcode credentials here.
      // Mutative PG target is enforced by tests/setup/vitest-pg-target.ts + db/client.ts (VITEST).
      STUDIO_DEV_TEST_LOGIN: process.env.STUDIO_DEV_TEST_LOGIN ?? "1",
      STUDIO_LANE: process.env.STUDIO_LANE ?? "DEV",
      // Explicit SCRIPTED GitHub auth for unit/integration fixtures only.
      STUDIO_ALLOW_SCRIPTED_GITHUB: process.env.STUDIO_ALLOW_SCRIPTED_GITHUB ?? "1",
      // Neutralize operator REAL flags from .env.local during DET suites.
      STUDIO_GITHUB_PROVIDER: "scripted",
      STUDIO_GITHUB_USER_OAUTH: "",
      STUDIO_GITHUB_ALLOW_MUTATIONS: "",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
