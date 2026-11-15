import { describe, expect, it } from "vitest";
import { e2eFixtureMutationsAllowed } from "@/lib/e2e-fixture-gate";
import { readFileSync } from "fs";
import { join } from "path";

describe("C-03 E2E fixture mutation gate", () => {
  it("FIX-01: RECETTE + E2E → refuse", () => {
    const r = e2eFixtureMutationsAllowed({
      NODE_ENV: "development",
      STUDIO_LANE: "RECETTE",
      STUDIO_E2E: "1",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("LANE_NOT_DEV");
  });

  it("FIX-02: STABLE + E2E → refuse", () => {
    const r = e2eFixtureMutationsAllowed({
      NODE_ENV: "development",
      STUDIO_LANE: "STABLE",
      STUDIO_E2E: "1",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("LANE_NOT_DEV");
  });

  it("FIX-03: production NODE_ENV even with DEV+E2E → refuse", () => {
    const r = e2eFixtureMutationsAllowed({
      NODE_ENV: "production",
      STUDIO_LANE: "DEV",
      STUDIO_E2E: "1",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("NODE_ENV_PRODUCTION");
  });

  it("FIX-04: DEV + FORCE_NORA alone (no E2E) → refuse", () => {
    const r = e2eFixtureMutationsAllowed({
      NODE_ENV: "development",
      STUDIO_LANE: "DEV",
      STUDIO_FORCE_NORA_FIXTURE: "1",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("STUDIO_E2E_REQUIRED");
  });

  it("FIX-08: DEV + E2E + non-production → allow", () => {
    const r = e2eFixtureMutationsAllowed({
      NODE_ENV: "development",
      STUDIO_LANE: "DEV",
      STUDIO_E2E: "1",
      STUDIO_FORCE_NORA_FIXTURE: "1",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(true);
  });

  it("FIX-09/10: route uses gate lib; no decision/Git mutation surface", () => {
    const route = readFileSync(
      join(__dirname, "../../src/app/api/dev/e2e/s05-fixture/route.ts"),
      "utf8",
    );
    const gate = readFileSync(join(__dirname, "../../src/lib/e2e-fixture-gate.ts"), "utf8");
    expect(route).toMatch(/e2eFixtureMutationsAllowed/);
    expect(gate).toMatch(/STUDIO_E2E_REQUIRED/);
    expect(gate).toMatch(/NODE_ENV_PRODUCTION/);
    expect(gate).toMatch(/STUDIO_E2E/);
    expect(gate).not.toMatch(/STUDIO_FORCE_NORA_FIXTURE\s*===/);
    expect(route).not.toMatch(/authorizePublication|dispatchPublication|insertHumanDecision/);
    expect(route).toMatch(/Does NOT create HumanDecision/);
  });
});
