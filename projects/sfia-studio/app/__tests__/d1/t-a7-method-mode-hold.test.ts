/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createProject, selectMethodMode } from "@/lib/d1/commands";
import { resetD1DbForTests } from "@/lib/d1/db";
import { D1Error } from "@/lib/d1/errors";
import {
  assertMethodModeTransitionAllowed,
  decideMethodModeTransition,
  getDefaultMethodModeHoldState,
  readMethodModeHold,
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold";

describe("T-A7 lot1 MethodMode hold", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-hold-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("defaults to an active conservative hold with structured reasons", () => {
    const hold = getDefaultMethodModeHoldState();
    expect(hold.active).toBe(true);
    expect(hold.reasons.length).toBeGreaterThanOrEqual(7);
    expect(hold.reasons.map((r) => r.code)).toEqual(
      expect.arrayContaining([
        "B5_OPEN",
        "R1_OPEN",
        "R_M01_OPEN",
        "HARD_OPEN",
        "T_A7_BOUNDED_LOT_ACTIVE",
        "F11_2_INCOMPLETE",
        "F13_4_INCOMPLETE",
      ]),
    );
  });

  it("blocks transitions while hold is active", () => {
    const decision = decideMethodModeTransition();
    expect(decision.allowed).toBe(false);
    expect(decision.decision).toBe("BLOCK");
    expect(() => assertMethodModeTransitionAllowed()).toThrow(D1Error);

    const { project } = createProject({
      name: "Hold Block",
      objective: "cannot switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "hold-block-1",
    });
    expect(() =>
      selectMethodMode({
        projectId: project.projectId,
        methodMode: "TRANSITION",
        expectedVersion: project.version,
      }),
    ).toThrow(/hold/i);
  });

  it("allows transitions when hold is inactive (test override)", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const decision = decideMethodModeTransition();
    expect(decision.allowed).toBe(true);
    expect(decision.decision).toBe("ALLOW");

    const { project } = createProject({
      name: "Hold Allow",
      objective: "can switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "hold-allow-1",
    });
    const updated = selectMethodMode({
      projectId: project.projectId,
      methodMode: "TRANSITION",
      expectedVersion: project.version,
      activate: true,
    });
    expect(updated.methodMode).toBe("TRANSITION");
  });

  it("readMethodModeHold is deterministic for reason codes", () => {
    const a = readMethodModeHold("2026-07-28T19:00:00.000Z");
    const b = readMethodModeHold("2026-07-28T19:00:00.000Z");
    expect(a.reasons.map((r) => r.code)).toEqual(b.reasons.map((r) => r.code));
    expect(a.active).toBe(b.active);
  });
});
