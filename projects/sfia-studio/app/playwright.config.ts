import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://127.0.0.1:3020";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    trace: "on-first-retry",
    viewport: { width: 1440, height: 1024 },
  },
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3020",
    url: baseURL,
    // Prefer local reuse: port 3020 is often already served by `npm run dev`.
    reuseExistingServer: true,
    timeout: 180_000,
  },
});
