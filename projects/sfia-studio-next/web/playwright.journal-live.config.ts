import { defineConfig } from "@playwright/test";

/**
 * Journal CampusFlow LIVE 20-turn — real OpenAI via Nora, DEV only, port 3103.
 * GO Morris: STUDIO_ALLOW_LIVE_BOUNDED=1 + OPENAI_API_KEY. Ceiling $10.
 */
export default defineConfig({
  testDir: "tests/e2e",
  testMatch: "**/journal-nora-live-campusflow.spec.ts",
  timeout: 1_200_000,
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
