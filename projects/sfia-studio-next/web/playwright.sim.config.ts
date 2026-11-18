import { defineConfig } from "@playwright/test";

/**
 * Level-B E2E — provider-simulated D3 boundary (no UI-key fixtures).
 * Port 3102 to avoid colliding with default fixture e2e on 3101.
 */
export default defineConfig({
  testDir: "tests/e2e",
  testMatch: "**/ensemble05-level-b-sim.spec.ts",
  timeout: 120_000,
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:3102",
    trace: "on-first-retry",
  },
  webServer: {
    command: "SFIA_E2E_PORT=3102 bash scripts/e2e-web-server-sim.sh",
    url: "http://127.0.0.1:3102/login",
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
