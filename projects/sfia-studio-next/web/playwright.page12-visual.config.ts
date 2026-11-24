import { defineConfig } from "@playwright/test";

/**
 * C24 — visual fixture captures against qualify DEV :3100.
 * Does not spawn FAKE E2E :3101. Operator must have `qualify:start`.
 */
export default defineConfig({
  testDir: "tests/e2e",
  testMatch: ["**/ml5-c24-page12-visual.spec.ts", "**/ml5-c24-product-*.spec.ts"],
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: process.env.SFIA_QUALIFY_BASE_URL || "http://127.0.0.1:3100",
    viewport: { width: 1680, height: 970 },
    trace: "off",
    screenshot: "off",
    video: "off",
  },
  webServer: undefined,
});
