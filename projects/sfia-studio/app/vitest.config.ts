import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./__tests__/setup.ts"],
    include: ["__tests__/**/*.test.{ts,tsx}"],
    /**
     * CI-only worker cap — causal, not accommodation.
     *
     * Post-merge push on identical tree to green PR head (61fb41f6 / 61ee233a)
     * failed with clustered 5s timeouts + `[vitest-worker]: Timeout calling
     * "onTaskUpdate"` while PR event CI stayed green. Local reproduction:
     * same 8-file failset flakes under default pool; `--maxWorkers=2` held
     * 4/4 green. Cap reduces GHA scheduler contention without skipping tests,
     * raising global testTimeout, or changing Evidence assertions.
     */
    ...(process.env.CI === "true" ? { maxWorkers: 2 } : {}),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
