/** @vitest-environment node */
/**
 * MW5 eval catalog scenario D0 — MODELED + EVAL.
 * Independent observables + C5 BAR mapping (CORR-MW5-04). ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { getScenario } from "@/lib/nora-eval/catalog";
import { runD0Scenario } from "@/lib/nora-eval/d0Runner";
import {
  observeMw5FromProductPath,
  observeMw5FromRuntime,
  observationFromMw5Facts,
} from "@/lib/nora-eval/mw5Observe";
import { scoreScenarioD0 } from "@/lib/nora-eval/scorers";

describe("MW5 eval — challenge / clarification scenario", () => {
  it("catalog BAR mapping is C5 MW5 union (01/02/08/09/11)", () => {
    const s = getScenario("mw5.s01.challenge-clarification");
    expect(s).toBeDefined();
    expect(s?.storyIds).toEqual(["MW5-S01", "MW5-S02", "MW5-S03", "MW5-S04"]);
    expect(s?.barIds).toEqual([
      "NCC-BAR-01",
      "NCC-BAR-02",
      "NCC-BAR-08",
      "NCC-BAR-09",
      "NCC-BAR-11",
    ]);
    expect(s?.barIds).not.toContain("NCC-BAR-06");
    expect(s?.barIds).not.toContain("NCC-BAR-10");
    expect(s?.hardInvariants).toContain("mw5_challenge_bound");
    expect(s?.hardInvariants).toContain("mw5_critical_ordering");
    expect(s?.hardInvariants).toContain("mw5_no_synth_authority");
    expect(s?.hardInvariants).toContain(
      "mw5_cosmetic_qualification_robustness",
    );
  });

  it("observeMw5FromRuntime exposes independent observables", () => {
    const obs = observeMw5FromRuntime();
    expect(obs.mw5ChallengeBoundOk).toBe(true);
    expect(obs.mw5StructuralClarificationOk).toBe(true);
    expect(obs.mw5CriticalOrderingOk).toBe(true);
    expect(obs.mw5AuthorityBoundaryOk).toBe(true);
    expect(obs.mw5ChallengeSatisfactionFailClosedOk).toBe(true);
    expect(obs.mw5CosmeticQualificationRobustnessOk).toBe(false);
    expect(obs.observedObservableIds).toContain("obs.intent.clarification_bounded");
    expect(obs.observedObservableIds).toContain("obs.evidence.provenance");
    expect(obs.observedObservableIds).toContain("obs.authority.absolute_boundary");
  });

  it("scorer isolation — one invariant fail does not falsify others", () => {
    const scenario = getScenario("mw5.s01.challenge-clarification");
    expect(scenario).toBeDefined();
    if (!scenario) return;

    const obs = observationFromMw5Facts({
      mw5ChallengeBoundOk: false,
      mw5StructuralClarificationOk: true,
      mw5CriticalOrderingOk: true,
      mw5AuthorityBoundaryOk: true,
      mw5TruthCNoReopenOk: true,
      mw5ConsumedHdNoReopenOk: true,
      mw5ChallengeSatisfactionFailClosedOk: true,
      mw5ProductPathOrderingOk: true,
      mw5CosmeticQualificationRobustnessOk: true,
    });
    const scored = scoreScenarioD0(scenario, obs);
    const byId = Object.fromEntries(
      scored.scorers.map((s) => [s.scorerId, s.passFail]),
    );
    expect(byId["hard.mw5_challenge_bound"]).toBe("FAIL");
    expect(byId["hard.mw5_structural_clarification"]).toBe("PASS");
    expect(byId["hard.mw5_critical_ordering"]).toBe("PASS");
    expect(byId["hard.mw5_no_synth_authority"]).toBe("PASS");
    expect(byId["hard.mw5_cosmetic_qualification_robustness"]).toBe("PASS");
  });

  it("scorer isolation — cosmetic robustness fail does not falsify others", () => {
    const scenario = getScenario("mw5.s01.challenge-clarification");
    expect(scenario).toBeDefined();
    if (!scenario) return;

    const obs = observationFromMw5Facts({
      mw5ChallengeBoundOk: true,
      mw5StructuralClarificationOk: true,
      mw5CriticalOrderingOk: true,
      mw5AuthorityBoundaryOk: true,
      mw5TruthCNoReopenOk: true,
      mw5ConsumedHdNoReopenOk: true,
      mw5ChallengeSatisfactionFailClosedOk: true,
      mw5ProductPathOrderingOk: true,
      mw5CosmeticQualificationRobustnessOk: false,
    });
    const scored = scoreScenarioD0(scenario, obs);
    const byId = Object.fromEntries(
      scored.scorers.map((s) => [s.scorerId, s.passFail]),
    );
    expect(byId["hard.mw5_cosmetic_qualification_robustness"]).toBe("FAIL");
    expect(byId["hard.mw5_challenge_bound"]).toBe("PASS");
    expect(byId["hard.mw5_structural_clarification"]).toBe("PASS");
    expect(byId["hard.mw5_critical_ordering"]).toBe("PASS");
    expect(byId["hard.mw5_no_synth_authority"]).toBe("PASS");
  });

  it("observeMw5FromProductPath passes ordering on F2 Fake path", async () => {
    const obs = await observeMw5FromProductPath();
    expect(obs.mw5ProductPathOrderingOk).toBe(true);
    expect(obs.mw5ChallengeSatisfactionFailClosedOk).toBe(true);
    expect(obs.mw5CosmeticQualificationRobustnessOk).toBe(true);
    expect(obs.productPath).toBe("f2");
  });

  it("D0 scenario run includes MW5 hard invariants PASS", async () => {
    const result = await runD0Scenario("mw5.s01.challenge-clarification");
    expect(result.passFail).toBe("PASS");
    expect(
      result.scorers.some(
        (s) => s.scorerId === "hard.mw5_challenge_bound" && s.passFail === "PASS",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw5_critical_ordering" &&
          s.passFail === "PASS" &&
          s.barId === "NCC-BAR-02",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) => s.scorerId === "hard.mw5_no_synth_authority" && s.passFail === "PASS",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw5_cosmetic_qualification_robustness" &&
          s.passFail === "PASS",
      ),
    ).toBe(true);
  });
});
