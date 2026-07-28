/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — updated after T-A7 lot 1 foundations.
 * Asserts foundations exist as bounded lot-1 modules (not final API/UI/cutover).
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");

describe("T-A7 lot1 foundation presence (bounded)", () => {
  it("exposes MethodMode hold module", () => {
    expect(
      fs.existsSync(path.join(APP_ROOT, "lib/d1/methodModeHold.ts")),
    ).toBe(true);
  });

  it("exposes F11.2 operational readiness module (no HTTP route required)", () => {
    expect(
      fs.existsSync(path.join(APP_ROOT, "lib/d1/operationalReadiness.ts")),
    ).toBe(true);
    const appRouter = path.join(APP_ROOT, "app");
    const hasReadinessRoute =
      fs.existsSync(appRouter) &&
      fs
        .readdirSync(appRouter, { recursive: true })
        .map(String)
        .some((p) => /readiness|cutover/i.test(p) && /route\.ts$/.test(p));
    expect(hasReadinessRoute).toBe(false);
  });

  it("exposes F13.4 bounded history foundation under platform/t-a7", () => {
    expect(
      fs.existsSync(
        path.join(APP_ROOT, "lib/platform/t-a7/boundedHistoryRead.ts"),
      ),
    ).toBe(true);
  });
});
