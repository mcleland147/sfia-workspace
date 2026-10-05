/** @vitest-environment node */
/**
 * P5-S01 — Product semantic invariants at tested D0 scope (ZERO REAL).
 */
import { describe, expect, it } from "vitest";
import {
  decideCognitiveRouting,
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  P5_TARGET_MODEL_COHORT,
} from "@/lib/nora-cognitive-runtime";

describe("P5-S01 — semantic invariants D0", () => {
  it("P5-SEM-05 — model choice cannot encode Product authority fields", () => {
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        rigorCriticality: "high",
        verificationNeed: "high",
        contradictionRisk: "high",
        ambiguity: "high",
        reasoningDepth: "high",
      }),
      trustedSfiaProfile: "trusted-profile",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-sem-05",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(P5_TARGET_MODEL_COHORT).toContain(decision.selectedModel);
    const keys = Object.keys(decision);
    expect(keys.some((k) => /authority|humanDecision|confirmation/i.test(k))).toBe(
      false,
    );
  });

  it("P5-SEM-02/03 — routing decision is not HumanDecision / Recommendation disposition", () => {
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        reasoningDepth: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contradictionRisk: "low",
      }),
      trustedSfiaProfile: "trusted-profile",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-sem-02",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect("humanDecisionId" in decision).toBe(false);
    expect("recommendationDisposition" in decision).toBe(false);
    expect(decision.reasoningMode).toBe("standard");
  });

  it("P5-SEM-08 — Strategy Proposed trajectory semantics remain outside router", () => {
    // Router must not invent ProjectTrajectory decided/proposed states.
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({}),
      trustedSfiaProfile: null,
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-sem-08",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(JSON.stringify(decision)).not.toMatch(/ProjectTrajectory|Terminé|Proposé/);
  });
});
