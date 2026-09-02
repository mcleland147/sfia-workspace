/** @vitest-environment node */
/**
 * MW3 eval catalog scenario D0 — MODELED + EVAL.
 * Fake/deterministic only — ZERO REAL OpenAI.
 */
import { describe, expect, it } from "vitest";
import { getScenario } from "@/lib/nora-eval/catalog";
import { runD0Scenario } from "@/lib/nora-eval/d0Runner";
import { observeMw3FromRuntime } from "@/lib/nora-eval/mw3Observe";

describe("MW3 eval — disposition matrix scenario", () => {
  it("catalog includes mw3.s01.disposition-matrix", () => {
    const s = getScenario("mw3.s01.disposition-matrix");
    expect(s).toBeDefined();
    expect(s?.storyIds).toEqual(["MW3-S01", "MW3-S02"]);
    expect(s?.hardInvariants).toContain("mw3_disposition_matrix");
    expect(s?.hardInvariants).toContain("mw3_cognitive_stop_honesty");
  });

  it("observeMw3FromRuntime passes T01–T14 facts", () => {
    const obs = observeMw3FromRuntime();
    expect(obs.mw3DispositionOk).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.contradiction.disposition");
    expect(obs.observedObservableIds).toContain("obs.cognitive_stop.honesty");
  });

  it("D0 scenario run includes MW3 hard invariants PASS", async () => {
    const result = await runD0Scenario("mw3.s01.disposition-matrix");
    expect(result.passFail).toBe("PASS");
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw3_disposition" && s.passFail === "PASS",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw3_cognitive_stop" && s.passFail === "PASS",
      ),
    ).toBe(true);
  });
});

