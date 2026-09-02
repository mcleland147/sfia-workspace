/** @vitest-environment node */
/**
 * MW2-S01 D0 — CWP policy / Strategy Class / OD-02 Option B mechanics.
 * Includes CORR-MW2-DLV-01 (UNKNOWN≠LOW), CORR-MW2-DLV-02 (signal honesty),
 * CORR-MW2-DLV-04 (D0-14 naming alignment).
 */
import { describe, expect, it } from "vitest";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  buildSignalsFromTurnContext,
  COGNITIVE_STRATEGY_CLASSES,
  decideCognitiveStrategy,
  isRoutineEligible,
  normalizeCognitiveWorkloadSignals,
  STRATEGY_REASONING_ENVELOPES,
  validateRuntimeReasoningCapability,
} from "@/lib/nora-cognitive-runtime";

describe("MW2-S01 — cognitive workload policy D0", () => {
  it("D0-01 — signal normalization keeps unknown signals unknown", () => {
    const s = normalizeCognitiveWorkloadSignals({ contextSize: "high" });
    expect(s.contextSize).toBe("high");
    expect(s.ambiguity).toBe("unknown");
    expect(s.reasoningDepth).toBe("unknown");
  });

  it("D0-02 — strategy classes use exact source vocabulary", () => {
    expect(COGNITIVE_STRATEGY_CLASSES).toEqual([
      "Routine",
      "Focused",
      "Deep",
      "High-Assurance",
    ]);
  });

  it("D0-03 — trusted SFIA Profile is never invented by policy", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({ ambiguity: "medium" }),
      trustedSfiaProfile: null,
    });
    expect(d.bootstrapUsed).toBe(true);
    expect(d.strategyClass).toBe("Focused");
    expect(d.reasonCodes).toContain("bootstrap_focused_no_trusted_profile");
  });

  it("D0-04 — same profile + different workloads → different Strategy Classes", () => {
    const profile = "SFIA-Profile-Trusted";
    const routine = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        rigorCriticality: "low",
        reasoningDepth: "low",
        contradictionRisk: "low",
      }),
      trustedSfiaProfile: profile,
    });
    const deep = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        sourceBreadth: "high",
        reasoningDepth: "high",
        rigorCriticality: "medium",
      }),
      trustedSfiaProfile: profile,
    });
    expect(routine.strategyClass).toBe("Routine");
    expect(deep.strategyClass).toBe("Deep");
    expect(routine.strategyClass).not.toBe(deep.strategyClass);
  });

  it("D0-05 — Strategy Class is not a fixed effort alias", () => {
    const envelopes = STRATEGY_REASONING_ENVELOPES;
    for (const cls of COGNITIVE_STRATEGY_CLASSES) {
      expect(envelopes[cls].length).toBeGreaterThan(1);
    }
  });

  it("D0-06 — same Strategy Class can yield different minimum-sufficient efforts", () => {
    const lowPressure = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
        contextSize: "low",
        toolDependency: "low",
      }),
      trustedSfiaProfile: "profile",
    });
    const highPressure = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
        contextSize: "high",
        toolDependency: "high",
        verificationNeed: "medium",
      }),
      trustedSfiaProfile: "profile",
    });
    expect(lowPressure.strategyClass).toBe("Focused");
    expect(highPressure.strategyClass).toBe("Focused");
    expect(lowPressure.reasoningEffort).not.toBe(highPressure.reasoningEffort);
  });

  it("D0-07 — Routine class can receive elevated effort under volume/context pressure", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contextSize: "high",
        toolDependency: "high",
        rigorCriticality: "low",
        reasoningDepth: "low",
        contradictionRisk: "low",
      }),
      trustedSfiaProfile: "profile",
    });
    expect(d.strategyClass).toBe("Routine");
    expect(d.reasoningEffort).toBe("medium");
  });

  it("D0-08 — High-Assurance does not automatically select max", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        rigorCriticality: "high",
        verificationNeed: "high",
        contradictionRisk: "medium",
        contextSize: "medium",
      }),
      trustedSfiaProfile: "profile",
    });
    expect(d.strategyClass).toBe("High-Assurance");
    expect(d.reasoningEffort).toBe("high");
    expect(d.reasoningEffort).not.toBe("max");
  });

  it("D0-09 — High-Assurance arms criticalChallengeArmed hook", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        rigorCriticality: "high",
        verificationNeed: "high",
      }),
      trustedSfiaProfile: "profile",
    });
    expect(d.criticalChallengeArmed).toBe(true);
    expect(d.reasonCodes).toContain("critical_challenge_armed_hook");
  });

  it("D0-10 — policy has no model routing fields", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({}),
    });
    expect(Object.keys(d)).not.toContain("model");
    expect(Object.keys(d)).not.toContain("modelId");
  });

  it("D0-11 — capability validator accepts supported GPT-5.6 combinations", () => {
    expect(() =>
      validateRuntimeReasoningCapability("gpt-5.6-luna", "none"),
    ).not.toThrow();
    expect(() =>
      validateRuntimeReasoningCapability("gpt-5.6-luna", "medium"),
    ).not.toThrow();
  });

  it("D0-12 — minimal is rejected for GPT-5.6 family without coercion", () => {
    try {
      validateRuntimeReasoningCapability("gpt-5.6-luna", "minimal");
      expect.fail("expected TechnicalError");
    } catch (e) {
      expect(e).toBeInstanceOf(TechnicalError);
      expect((e as TechnicalError).code).toBe("PROVIDER");
      expect((e as TechnicalError).safeMessage).toMatch(/minimal/i);
    }
  });

  it("D0-13 — unknown model fails closed", () => {
    expect(() =>
      validateRuntimeReasoningCapability("gpt-unknown-model", "low"),
    ).toThrow(TechnicalError);
  });

  it("D0-14 — supported max effort remains accepted for Luna (boundary)", () => {
    expect(() =>
      validateRuntimeReasoningCapability("gpt-5.6-luna", "max"),
    ).not.toThrow();
  });

  it("D0-17 — reasoning.context is not wired in policy output", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({}),
    });
    expect(JSON.stringify(d)).not.toMatch(/"context"\s*:/);
    expect(d).not.toHaveProperty("reasoningContext");
  });

  it("D0-18 — reasoning.mode is not part of policy output", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({}),
    });
    expect(JSON.stringify(d)).not.toContain('"mode"');
  });

  // --- CORR-MW2-DLV-01 ---

  it("CORR-D0-01 — all unknown + no trusted profile → Focused bootstrap", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({}),
      trustedSfiaProfile: null,
    });
    expect(d.strategyClass).toBe("Focused");
    expect(d.bootstrapUsed).toBe(true);
    expect(isRoutineEligible(d.normalizedSignals)).toBe(false);
  });

  it("CORR-D0-02 — sufficient explicitly known-low signals → Routine possible", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        reasoningDepth: "low",
        contradictionRisk: "low",
        rigorCriticality: "low",
      }),
      trustedSfiaProfile: null,
    });
    expect(d.strategyClass).toBe("Routine");
    expect(d.bootstrapUsed).toBe(false);
  });

  it("CORR-D0-03 — unknown is preserved as unknown (not coerced to low/medium)", () => {
    const s = buildSignalsFromTurnContext({
      userContentLength: 10,
      historyMessageCount: 0,
      enableTools: true,
    });
    expect(s.toolDependency).toBe("unknown");
    expect(s.multimodality).toBe("unknown");
    expect(s.ambiguity).toBe("unknown");
  });

  it("CORR-D0-04 — strong known Deep signals + no trusted profile → Deep", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        sourceBreadth: "high",
        reasoningDepth: "high",
      }),
      trustedSfiaProfile: null,
    });
    expect(d.strategyClass).toBe("Deep");
    expect(d.bootstrapUsed).toBe(false);
  });

  it("CORR-D0-05 — strong known High-Assurance + no trusted profile → High-Assurance", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        rigorCriticality: "high",
        verificationNeed: "high",
      }),
      trustedSfiaProfile: null,
    });
    expect(d.strategyClass).toBe("High-Assurance");
    expect(d.bootstrapUsed).toBe(false);
  });

  // --- CORR-MW2-DLV-02 ---

  it("CORR-D0-02a — enableTools=true without dependency fact → toolDependency unknown", () => {
    const s = buildSignalsFromTurnContext({
      userContentLength: 100,
      historyMessageCount: 1,
      enableTools: true,
      projectCriticality: "STANDARD",
    });
    expect(s.toolDependency).toBe("unknown");
  });

  it("CORR-D0-02b — multimodality unavailable → unknown", () => {
    const s = buildSignalsFromTurnContext({
      userContentLength: 100,
      historyMessageCount: 0,
    });
    expect(s.multimodality).toBe("unknown");
  });

  it("CORR-D0-02c — explicit toolDependency high remains high", () => {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
        toolDependency: "high",
        contextSize: "high",
      }),
      trustedSfiaProfile: "profile",
    });
    expect(d.normalizedSignals.toolDependency).toBe("high");
  });

  it("CORR-D0-02d — projectCriticality CRITICAL affects rigor without inventing Profile", () => {
    const s = buildSignalsFromTurnContext({
      projectCriticality: "CRITICAL",
      userContentLength: 50,
      historyMessageCount: 0,
    });
    expect(s.rigorCriticality).toBe("high");
    const d = decideCognitiveStrategy({
      signals: s,
      trustedSfiaProfile: null,
    });
    // High rigor + high verification (derived) → High-Assurance without inventing profile
    expect(d.strategyClass).toBe("High-Assurance");
    expect(d.bootstrapUsed).toBe(false);
  });
});
