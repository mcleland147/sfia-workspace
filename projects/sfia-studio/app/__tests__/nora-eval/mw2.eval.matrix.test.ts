/** @vitest-environment node */
/**
 * MW2 deterministic EVAL matrix — CORR-MW2-DLV-03.
 *
 * Taxonomy: EVAL is an assessment matrix, not a new EvidenceTier.
 * Harness tiers remain D0/R1/R2/R3. This uses D0-tier mechanics.
 */
import { describe, expect, it } from "vitest";
import {
  evaluateMw2S01Matrix,
  evaluateMw2S02Matrix,
  summarizeMw2EvalMatrix,
} from "@/lib/nora-eval/mw2EvalMatrix";
import { getScenario, observeMw2S01FromRuntime, runD0Scenario } from "@/lib/nora-eval";

describe("MW2 deterministic EVAL matrix (CORR-MW2-DLV-03)", () => {
  it("taxonomy — EVAL is not a new EvidenceTier", () => {
    const s = getScenario("mw2.s01.strategy-effort-decoupling");
    expect(s?.requiredTier).toEqual(["D0"]);
  });

  it("S1–S6 MW2-S01 matrix all PASS", () => {
    const cases = evaluateMw2S01Matrix();
    expect(cases.map((c) => c.caseId)).toEqual([
      "S1",
      "S2",
      "S3",
      "S4",
      "S5",
      "S6",
    ]);
    for (const c of cases) {
      expect(c.passFail, `${c.caseId}: ${c.detail}`).toBe("PASS");
    }
  });

  it("CKC-E1–E5 MW2-S02 matrix all PASS", () => {
    const cases = evaluateMw2S02Matrix();
    expect(cases.map((c) => c.caseId)).toEqual([
      "CKC-E1",
      "CKC-E2",
      "CKC-E3",
      "CKC-E4",
      "CKC-E5",
    ]);
    for (const c of cases) {
      expect(c.passFail, `${c.caseId}: ${c.detail}`).toBe("PASS");
    }
  });

  it("summary allPass", () => {
    const summary = summarizeMw2EvalMatrix();
    expect(summary.s01Pass).toBe(true);
    expect(summary.s02Pass).toBe(true);
    expect(summary.allPass).toBe(true);
  });

  it("legacy decoupling scenario still PASS via D0 harness mechanics", async () => {
    const r = await runD0Scenario("mw2.s01.strategy-effort-decoupling");
    expect(r.passFail).toBe("PASS");
    const obs = await observeMw2S01FromRuntime();
    expect(obs.strategyDecoupledFromEffort).toBe(true);
  });
});
