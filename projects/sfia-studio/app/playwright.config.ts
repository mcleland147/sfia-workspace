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
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      ...process.env,
      OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      D1_INTAKE_PROVIDER: process.env.D1_INTAKE_PROVIDER || "fake",
      // Default E2E: fake provider. Real live capture/smoke: OPS1_ALLOW_LIVE_SMOKE=1
      // without forcing fake (secrets must already be in the environment).
      ...(process.env.OPS1_ALLOW_LIVE_SMOKE === "1"
        ? {
            OPS1_CONVERSATION_PROVIDER: "",
          }
        : {
            OPS1_CONVERSATION_PROVIDER: "fake",
            OPENAI_API_KEY:
              process.env.OPENAI_API_KEY || "sk-e2e-fake-not-a-real-key",
            OPENAI_MODEL: process.env.OPENAI_MODEL || "fake-e2e-model",
          }),
    },
  },
});
