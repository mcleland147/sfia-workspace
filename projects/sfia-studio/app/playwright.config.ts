import { defineConfig, devices } from "@playwright/test";

const playwrightPort = process.env.PLAYWRIGHT_PORT?.trim() || "3020";
// Align with Better Auth local origin (BETTER_AUTH_URL default = localhost:3020).
// Authenticated visual QA must not default to 127.0.0.1 (cookie host mismatch).
const baseURL =
  process.env.PLAYWRIGHT_BASE_URL?.trim() ||
  `http://localhost:${playwrightPort}`;
const baseHost = new URL(baseURL).hostname;

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
    command: `npm run dev -- --hostname ${baseHost} --port ${playwrightPort}`,
    url: baseURL,
    reuseExistingServer:
      process.env.PLAYWRIGHT_FORCE_WEBSERVER === "1" ? false : true,
    timeout: 180_000,
    env: {
      ...process.env,
      OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      SFIA_STUDIO_E2E_QA_CONTROL: "1",
      // Local Pilote authority TEMPORARY WITH EXIT — required for /studio HD path.
      SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY: "1",
      D1_INTAKE_PROVIDER: process.env.D1_INTAKE_PROVIDER || "fake",
      // Deterministic E2E must never inherit a parent CURSOR_REAL=1 gate
      // (disables W3-B boundary arming / recovery FAIL fixtures).
      SFIA_STUDIO_CURSOR_REAL: "",
      OPS1_CURSOR_REAL: "",
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
