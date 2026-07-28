/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertOperationalReadinessReadOnly,
  queryOperationalReadiness,
} from "@/lib/d1/operationalReadiness";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold.test-only";
import {
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import fs from "node:fs";
import path from "node:path";

describe("T-A7 L-F11F13 F11.2 operational readiness (internal-only)", () => {
  beforeEach(() => {
    resetMethodModeHoldForTests();
  });

  afterEach(() => {
    resetMethodModeHoldForTests();
  });

  it("returns a frozen INTERNAL_ONLY read-only snapshot with hold and blockers", () => {
    const snap = queryOperationalReadiness();
    expect(snap.schemaVersion).toBe("t-a7-f11.2-l-f11f13");
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
    expect(snap.mutable).toBe(false);
    expect(snap.adminUi).toBe(false);
    expect(snap.writeCommands).toBe(false);
    expect(snap.iam).toBe("NOT_SELECTED");
    expect(snap.persistence).toBe("NOT_SELECTED");
    expect(snap.audit.status).toBe("DEFERRED_EXPLICITLY");
    expect(snap.observed.hold.active).toBe(true);
    expect(snap.observed.openBlockers.length).toBeGreaterThan(0);
    expect(snap.decision).toBe("BLOCK");
    expect(snap.authorization).toBe("NOT_AUTHORIZED_WHEN_HOLD_ACTIVE");
    expect(snap.observed.migration.status).toBe("NOT_STARTED");
    expect(snap.observed.health.status).toBe("SIMULATED");
    expect(snap.observed.history.gitCanonical).toBe(true);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.observed.history.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
    expect(snap.readinessStatus).toBe("NOT_READY");
    expect(snap.readinessReasons).toContain("HOLD_ACTIVE");
    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
    assertOperationalReadinessReadOnly(snap);
    expect(() => {
      // @ts-expect-error intentional mutation attempt
      snap.mutable = true;
    }).toThrow();
  });

  it("never treats incomplete/simulated health as READY", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const snap = queryOperationalReadiness();
    expect(snap.decision).toBe("ALLOW");
    expect(snap.readinessStatus).toBe("UNKNOWN");
    expect(snap.readinessReasons).toContain("HEALTH_NOT_OBSERVED");
    expect(snap.readinessStatus).not.toBe("READY");
  });

  it("serializes stably for core contract fields", () => {
    const snap = queryOperationalReadiness();
    const json = JSON.stringify({
      schemaVersion: snap.schemaVersion,
      accessSurface: snap.accessSurface,
      readinessStatus: snap.readinessStatus,
      mutable: snap.mutable,
      writeCommands: snap.writeCommands,
      adminUi: snap.adminUi,
      iam: snap.iam,
      persistence: snap.persistence,
      audit: snap.audit.status,
      decision: snap.decision,
      blockers: snap.observed.openBlockers,
    });
    expect(json).toContain("t-a7-f11.2-l-f11f13");
    expect(json).toContain("INTERNAL_ONLY");
    expect(json).toContain("B5_OPEN");
    expect(json).toContain("DEFERRED_EXPLICITLY");
  });

  it("exposes NOT_AVAILABLE history without inventing READY", () => {
    const snap = queryOperationalReadiness({
      historyProvider: createUnavailableBoundedHistoryProvider(),
    });
    expect(snap.observed.history.availability).toBe("NOT_AVAILABLE");
    expect(snap.observed.history.returned).toBe(0);
    expect(snap.readinessStatus).not.toBe("READY");
  });

  it("reflects inactive hold without recommending keep", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const snap = queryOperationalReadiness();
    expect(snap.decision).toBe("ALLOW");
    expect(snap.recommendation).toBe("NO_RECOMMENDATION");
  });

  it("integrates PREFIX_ONLY history summary", () => {
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider(),
      historyLimit: 2,
    });
    expect(snap.observed.history.returned).toBe(2);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.completeness).toBe("BOUNDED_L_F11F13");
  });

  it("has no HTTP readiness route under app/", () => {
    const appRouter = path.resolve(__dirname, "../../app");
    if (!fs.existsSync(appRouter)) return;
    const hasReadinessRoute = fs
      .readdirSync(appRouter, { recursive: true })
      .map(String)
      .some((p) => /readiness|cutover/i.test(p) && /route\.ts$/.test(p));
    expect(hasReadinessRoute).toBe(false);
  });
});
