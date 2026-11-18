import { defineConfig } from "@playwright/test";

/**
 * LIVE bounded campaign — real OpenAI provider, DEV only, port 3103.
 * Never reuse operator :3100. Never use e2e-web-server fixture script.
 */
export default defineConfig({
  testDir: "tests/e2e",
  testMatch: "**/ensemble05-live-bounded.spec.ts",
  timeout: 900_000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  use: {
    baseURL: "http://127.0.0.1:3103",
    trace: "retain-on-failure",
    screenshot: "off",
  },
  webServer: {
    command: "bash scripts/live-web-server.sh",
    url: "http://127.0.0.1:3103/login",
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
