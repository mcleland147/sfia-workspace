import { defineConfig } from "@playwright/test";

/**
 * ML1 E2E — owned isolated server on :3101 + dedicated DB `sfia_next_e2e`.
 * reuseExistingServer: false — never attach to operator DEV (:3100) which may hold OPENAI_API_KEY.
 * Nora is forced FAKE via STUDIO_E2E / neutralized OPENAI_API_KEY in scripts/e2e-web-server.sh.
 */
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 90_000,
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:3101",
    trace: "on-first-retry",
  },
  webServer: {
    command: "bash scripts/e2e-web-server.sh",
    url: "http://127.0.0.1:3101/login",
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
