import { defineConfig } from "@playwright/test";

/**
 * C24 — DEV qualification BROWSER (LIVE).
 * Targets operator DEV :3100 started via `npm run qualify:start`.
 * Never starts e2e-web-server.sh / never forces Nora FAKE.
 * Standard `npm run test:e2e` remains FAKE on :3101.
 */
const baseURL =
  process.env.SFIA_QUALIFY_BASE_URL || "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "tests/qualify",
  timeout: 180_000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"], ["json", { outputFile: ".sfia-evidence/qualify-playwright.json" }]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "off",
  },
  // Operator must have started qualify:start — do not spawn FAKE E2E server.
  webServer: undefined,
});
