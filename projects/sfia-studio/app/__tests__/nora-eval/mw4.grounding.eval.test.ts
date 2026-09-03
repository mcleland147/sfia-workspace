/** @vitest-environment node */
/**
 * MW4 eval catalog scenario D0 — MODELED + EVAL.
 * Fake/deterministic only — ZERO REAL OpenAI.
 *
 * Helper (observeMw4FromRuntime) may still pass unit semantics.
 * Product-bound observeMw4FromProductPath MUST fail if L100-N/N classified full.
 */
import { describe, expect, it } from "vitest";
import { getScenario } from "@/lib/nora-eval/catalog";
import { runD0Scenario } from "@/lib/nora-eval/d0Runner";
import {
  observeMw4FromProductPath,
  observeMw4FromRuntime,
} from "@/lib/nora-eval/mw4Observe";
import {
  deriveReadCoverageFromToolEvent,
} from "@/lib/nora-cognitive-runtime";

describe("MW4 eval — grounding durability scenario", () => {
  it("catalog includes mw4.s01.grounding-durability", () => {
    const s = getScenario("mw4.s01.grounding-durability");
    expect(s).toBeDefined();
    expect(s?.storyIds).toEqual(["MW4-S01", "MW4-S02", "MW4-S03"]);
    expect(s?.hardInvariants).toContain("mw4_grounding_durability");
    expect(s?.hardInvariants).toContain("mw4_narrative_evidence_honesty");
    expect(s?.hardInvariants).toContain("mw4_read_partiality");
  });

  it("observeMw4FromRuntime (helper/scorer) passes MW4 facts", () => {
    const obs = observeMw4FromRuntime();
    expect(obs.mw4GroundingOk).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.grounding.durability");
    expect(obs.observedObservableIds).toContain("obs.read.partiality");
  });

  it("HARD — L100-N/N classified full would break product-bound gate", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/big.md#L100-200",
      summary: "read docs/big.md L100-200/200 (800 chars)",
    });
    // Precondition for product-bound eval: derivation itself must be partial.
    expect(fact?.coverage).toBe("partial");
    expect(fact?.coverage).not.toBe("full");
  });

  it("observeMw4FromProductPath passes and treats L100-N/N as partial", async () => {
    const obs = await observeMw4FromProductPath();
    expect(obs.mw4GroundingOk).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.read.partiality");
    expect(obs.observedObservableIds).toContain("obs.grounding.durability");
  });

  it("D0 scenario run includes MW4 hard invariants PASS (product-bound)", async () => {
    const result = await runD0Scenario("mw4.s01.grounding-durability");
    expect(result.passFail).toBe("PASS");
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw4_grounding" && s.passFail === "PASS",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw4_narrative" && s.passFail === "PASS",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw4_partiality" && s.passFail === "PASS",
      ),
    ).toBe(true);
  });
});
