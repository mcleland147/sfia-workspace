# Review Pack — MW2 Delivery Local Candidate (CORR — complete modified diffs)
# FULL / CRITICAL / CONTENT-COMPLETE

Status: **FULL** · **CRITICAL** · **CONTENT-COMPLETE**

Correction: **CORR-MW2-REVIEW-PACK-01** — all 11 modified production/eval files now include complete git diffs below (prior handoff omitted 9 modified-file diffs).

## 1. Timestamp Europe/Paris
2026-09-02 07:50:22 CEST

## 2. Cycle / typology / profile / CKC
- Cycle 8 — Delivery / implémentation
- Typologie v2.4: EVOL
- Profil: CRITICAL
- CKC Delivery: ABSENT — fallback synthetic map + Delivery template v2.6 (experimental only)

## 3. Exact Morris GO consumed
GO MORRIS — MW2 DELIVERY — MW2-S01 + MW2-S02 coherent lot — OD-02 Option B — F1 modelSettings.reasoning — D0 + deterministic EVAL — NO LIVE OPENAI — NO project Git integration

## 4. Local Git Truth
| Field | Value |
|-------|-------|
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-pre-mw2-main-b345f3b6` |
| Base HEAD | `b345f3b6c74d3eac0caca5bdd5525809dd80547a` |
| origin/main | `b345f3b6c74d3eac0caca5bdd5525809dd80547a` |
| Delivery branch | `delivery/sfia-studio-nora-mw2-cwp-strategy` |
| Project commit | **NO** |
| Project push | **NO** |

## 5. Modified files manifest (11 — all diffs included below)
1. `features/project-assistant/orchestrateTurn.ts`
2. `lib/nora-cognitive-runtime/index.ts`
3. `lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
4. `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
5. `lib/nora-cognitive-runtime/types.ts`
6. `lib/nora-eval/catalog.ts`
7. `lib/nora-eval/d0Runner.ts`
8. `lib/nora-eval/index.ts`
9. `lib/nora-eval/scorers.ts`
10. `lib/nora-eval/types.ts`
11. `lib/platform/observability/types.ts`

## 6. New files manifest (8 — full contents below)
1. `lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts`
2. `lib/nora-cognitive-runtime/reasoningCapability.ts`
3. `lib/nora-cognitive-runtime/reasoningModelSettings.ts`
4. `lib/nora-eval/mw2S01Observe.ts`
5. `__tests__/nora-cognitive-runtime/mw2.s01.cwpPolicy.d0.test.ts`
6. `__tests__/nora-cognitive-runtime/mw2.s01.f1ModelSettings.d0.test.ts`
7. `__tests__/nora-cognitive-runtime/mw2.s02.ckcAuthority.d0.test.ts`
8. `__tests__/nora-eval/mw2.s01.strategy.eval.test.ts`

## 7. D0 / EVAL / regression (unchanged from prior pack)
- MW2 D0: 25 tests PASS
- MW2 EVAL: 3 tests PASS
- npm test: 2355 passed, 132 skipped
- typecheck: PASS
- Live OpenAI: 0

## 8. Delivery verdict
**MW2 DELIVERY — LOCAL CANDIDATE IMPLEMENTED — READY FOR CHATGPT CRITICAL DELIVERY REVIEW**

---

# SECTION A — FULL NEW FILES

## FULL FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts
```typescript
/**
 * MW2-S01 — thin internal Cognitive Workload Profile / Strategy policy.
 * Pure, testable. Strategy Class ≠ SFIA Profile ≠ reasoning effort ≠ model.
 * OD-02 Option B: overlapping envelopes + minimum-sufficient workload-sensitive effort.
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";

export type SignalLevel = "low" | "medium" | "high";
export type SignalValue = SignalLevel | "unknown";

export const COGNITIVE_STRATEGY_CLASSES = [
  "Routine",
  "Focused",
  "Deep",
  "High-Assurance",
] as const;

export type CognitiveStrategyClass = (typeof COGNITIVE_STRATEGY_CLASSES)[number];

export type CognitiveWorkloadSignals = {
  ambiguity: SignalValue;
  reasoningDepth: SignalValue;
  sourceBreadth: SignalValue;
  toolDependency: SignalValue;
  contradictionRisk: SignalValue;
  contextSize: SignalValue;
  verificationNeed: SignalValue;
  multimodality: SignalValue;
  latencySensitivity: SignalValue;
  costBudget: SignalValue;
  rigorCriticality: SignalValue;
};

export type TurnWorkloadContext = {
  projectCriticality?: string | null;
  userContentLength: number;
  historyMessageCount: number;
  historyTotalChars?: number;
  enableTools?: boolean;
};

export type CognitiveStrategyDecision = {
  strategyClass: CognitiveStrategyClass;
  reasoningEffort: OpenAiReasoningEffort;
  criticalChallengeArmed: boolean;
  candidateEnvelope: readonly OpenAiReasoningEffort[];
  reasonCodes: string[];
  normalizedSignals: CognitiveWorkloadSignals;
  bootstrapUsed: boolean;
  reasoningDemand: OpenAiReasoningEffort;
};

/** Candidate overlapping envelopes — DELIVERY DESIGN PARAMETERS, not Morris doctrine. */
export const STRATEGY_REASONING_ENVELOPES: Record<
  CognitiveStrategyClass,
  readonly OpenAiReasoningEffort[]
> = {
  Routine: ["none", "low", "medium"],
  Focused: ["low", "medium", "high"],
  Deep: ["medium", "high", "xhigh"],
  "High-Assurance": ["high", "xhigh", "max"],
};

const EFFORT_RANK: Record<OpenAiReasoningEffort, number> = {
  none: 0,
  minimal: 0,
  low: 1,
  medium: 2,
  high: 3,
  xhigh: 4,
  max: 5,
};

function levelScore(value: SignalValue): number {
  if (value === "high") return 3;
  if (value === "medium") return 2;
  if (value === "low") return 1;
  return 0;
}

export function normalizeCognitiveWorkloadSignals(
  partial: Partial<CognitiveWorkloadSignals>,
): CognitiveWorkloadSignals {
  const unknown = "unknown" as const;
  return {
    ambiguity: partial.ambiguity ?? unknown,
    reasoningDepth: partial.reasoningDepth ?? unknown,
    sourceBreadth: partial.sourceBreadth ?? unknown,
    toolDependency: partial.toolDependency ?? unknown,
    contradictionRisk: partial.contradictionRisk ?? unknown,
    contextSize: partial.contextSize ?? unknown,
    verificationNeed: partial.verificationNeed ?? unknown,
    multimodality: partial.multimodality ?? unknown,
    latencySensitivity: partial.latencySensitivity ?? unknown,
    costBudget: partial.costBudget ?? unknown,
    rigorCriticality: partial.rigorCriticality ?? unknown,
  };
}

export function buildSignalsFromTurnContext(
  ctx: TurnWorkloadContext,
): CognitiveWorkloadSignals {
  const crit = (ctx.projectCriticality ?? "").trim().toUpperCase();
  let rigorCriticality: SignalValue = "unknown";
  if (crit === "CRITICAL") rigorCriticality = "high";
  else if (crit === "STANDARD") rigorCriticality = "medium";
  else if (crit === "LOW") rigorCriticality = "low";

  const historyChars = ctx.historyTotalChars ?? 0;
  const totalChars = ctx.userContentLength + historyChars;
  let contextSize: SignalValue = "low";
  if (totalChars > 8000) contextSize = "high";
  else if (totalChars > 2000) contextSize = "medium";

  const toolDependency: SignalValue = ctx.enableTools ? "medium" : "low";

  let verificationNeed: SignalValue = "unknown";
  if (rigorCriticality === "high") verificationNeed = "high";

  return normalizeCognitiveWorkloadSignals({
    rigorCriticality,
    contextSize,
    toolDependency,
    verificationNeed,
    multimodality: "low",
  });
}

function computeReasoningDemand(
  signals: CognitiveWorkloadSignals,
): OpenAiReasoningEffort {
  let score = 0;
  score += levelScore(signals.contextSize);
  score += levelScore(signals.verificationNeed);
  score += levelScore(signals.toolDependency);
  score += Math.floor(levelScore(signals.sourceBreadth) / 2);
  score += Math.floor(levelScore(signals.reasoningDepth) / 2);
  score += Math.floor(levelScore(signals.contradictionRisk) / 2);

  if (score >= 8) return "high";
  if (score >= 5) return "medium";
  if (score >= 2) return "low";
  return "none";
}

function selectStrategyClass(
  signals: CognitiveWorkloadSignals,
  trustedSfiaProfile: string | null | undefined,
): { strategyClass: CognitiveStrategyClass; bootstrapUsed: boolean; reasonCodes: string[] } {
  const reasonCodes: string[] = [];
  const rigor = levelScore(signals.rigorCriticality);
  const verification = levelScore(signals.verificationNeed);
  const contradiction = levelScore(signals.contradictionRisk);
  const breadth = levelScore(signals.sourceBreadth);
  const depth = levelScore(signals.reasoningDepth);
  const ambiguity = levelScore(signals.ambiguity);

  if (
    (rigor >= 3 && verification >= 2) ||
    (rigor >= 3 && contradiction >= 2) ||
    (verification >= 3 && contradiction >= 2)
  ) {
    reasonCodes.push("high_assurance_signals");
    return { strategyClass: "High-Assurance", bootstrapUsed: false, reasonCodes };
  }

  if (breadth >= 3 || depth >= 3 || (breadth >= 2 && depth >= 2)) {
    reasonCodes.push("deep_synthesis_signals");
    return { strategyClass: "Deep", bootstrapUsed: false, reasonCodes };
  }

  if (
    ambiguity <= 1 &&
    breadth <= 1 &&
    verification <= 1 &&
    rigor <= 2 &&
    depth <= 1 &&
    contradiction <= 1
  ) {
    reasonCodes.push("routine_low_pressure");
    return { strategyClass: "Routine", bootstrapUsed: false, reasonCodes };
  }

  if (!trustedSfiaProfile?.trim()) {
    reasonCodes.push("bootstrap_focused_no_trusted_profile");
    return { strategyClass: "Focused", bootstrapUsed: true, reasonCodes };
  }

  reasonCodes.push("focused_default");
  return { strategyClass: "Focused", bootstrapUsed: false, reasonCodes };
}

function selectMinimumSufficientEffort(
  envelope: readonly OpenAiReasoningEffort[],
  demand: OpenAiReasoningEffort,
): OpenAiReasoningEffort {
  const demandRank = EFFORT_RANK[demand];
  for (const effort of envelope) {
    if (EFFORT_RANK[effort] >= demandRank) return effort;
  }
  return envelope[envelope.length - 1];
}

export function decideCognitiveStrategy(input: {
  signals: CognitiveWorkloadSignals;
  trustedSfiaProfile?: string | null;
}): CognitiveStrategyDecision {
  const normalizedSignals = normalizeCognitiveWorkloadSignals(input.signals);
  const reasoningDemand = computeReasoningDemand(normalizedSignals);
  const { strategyClass, bootstrapUsed, reasonCodes } = selectStrategyClass(
    normalizedSignals,
    input.trustedSfiaProfile,
  );
  const candidateEnvelope = STRATEGY_REASONING_ENVELOPES[strategyClass];
  const reasoningEffort = selectMinimumSufficientEffort(
    candidateEnvelope,
    reasoningDemand,
  );
  const criticalChallengeArmed = strategyClass === "High-Assurance";
  if (criticalChallengeArmed) {
    reasonCodes.push("critical_challenge_armed_hook");
  }
  reasonCodes.push(`demand:${reasoningDemand}`, `effort:${reasoningEffort}`);

  return {
    strategyClass,
    reasoningEffort,
    criticalChallengeArmed,
    candidateEnvelope,
    reasonCodes,
    normalizedSignals,
    bootstrapUsed,
    reasoningDemand,
  };
}
```

## FULL FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
```typescript
/**
 * MW2 runtime model capability validation — fail-closed, no campaign allowlist.
 * Reuses dated manifest model lookup; NOT MW0 campaignEffectiveCapabilitySet.
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  buildMw0CapabilityManifest,
  modelCapabilitySet,
} from "@/lib/nora-eval/capabilityBudget";

export function validateRuntimeReasoningCapability(
  modelId: string,
  reasoningEffort: OpenAiReasoningEffort,
): void {
  const manifest = buildMw0CapabilityManifest(new Date().toISOString());
  const supported = modelCapabilitySet(manifest, modelId);
  if (!supported) {
    throw new TechnicalError(
      "CONFIG",
      `Modèle inconnu pour validation capability runtime : ${modelId}`,
    );
  }
  if (reasoningEffort === "minimal") {
    throw new TechnicalError(
      "PROVIDER",
      "minimal n'est pas supporté pour la famille GPT-5.6 courante",
    );
  }
  if (!supported.includes(reasoningEffort)) {
    throw new TechnicalError(
      "PROVIDER",
      `Effort ${reasoningEffort} non supporté pour le modèle ${modelId}`,
    );
  }
}
```

## FULL FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningModelSettings.ts
```typescript
/**
 * MW2-S01 — build Runner modelSettings preserving GPT-5.6 baseline text.verbosity.
 * reasoning.context and reasoning.mode intentionally omitted (EVALUATE/DEFER).
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";

export type NoraRunnerModelSettings = {
  reasoning: { effort: OpenAiReasoningEffort };
  text: { verbosity: "low" };
};

export function buildRunnerModelSettingsForEffort(
  effort: OpenAiReasoningEffort,
): NoraRunnerModelSettings {
  return {
    reasoning: { effort },
    text: { verbosity: "low" },
  };
}
```

## FULL FILE: projects/sfia-studio/app/lib/nora-eval/mw2S01Observe.ts
```typescript
/**
 * MW2-S01 — runtime-derived deterministic observations for nora-eval.
 */
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  runNoraCognitiveTurn,
  validateRuntimeReasoningCapability,
} from "@/lib/nora-cognitive-runtime";
import { TechnicalError } from "@/lib/platform/ai/errors";
import type { DeterministicObservation } from "./scorers";

export type Mw2S01RuntimeFacts = {
  strategyClassesObserved: string[];
  effortsObserved: string[];
  strategyDecoupledFromEffort: boolean;
  routineElevatedEffort: boolean;
  highAssuranceNotMax: boolean;
  capabilityFailClosed: boolean;
  noModelRouting: boolean;
};

export function observationFromMw2S01Facts(
  facts: Mw2S01RuntimeFacts,
): DeterministicObservation {
  const ok =
    facts.strategyClassesObserved.length >= 3 &&
    facts.strategyDecoupledFromEffort &&
    facts.routineElevatedEffort &&
    facts.highAssuranceNotMax &&
    facts.capabilityFailClosed &&
    facts.noModelRouting;

  return {
    productPath: "agents",
    strategyClassesObserved: facts.strategyClassesObserved,
    effortsObserved: facts.effortsObserved,
    strategyDecoupledFromEffort: facts.strategyDecoupledFromEffort,
    routineElevatedEffort: facts.routineElevatedEffort,
    highAssuranceNotMax: facts.highAssuranceNotMax,
    capabilityFailClosed: facts.capabilityFailClosed,
    observedObservableIds: ok ? ["obs.cwp.strategy_effort"] : [],
  };
}

export async function observeMw2S01FromRuntime(): Promise<DeterministicObservation> {
  const routineElevated = decideCognitiveStrategy({
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

  const highAssurance = decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "medium",
      contextSize: "medium",
    }),
    trustedSfiaProfile: "profile",
  });

  const focusedLow = decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals({
      ambiguity: "medium",
      rigorCriticality: "medium",
      contextSize: "low",
    }),
    trustedSfiaProfile: "profile",
  });

  const focusedHigh = decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals({
      ambiguity: "medium",
      rigorCriticality: "medium",
      contextSize: "high",
      toolDependency: "high",
      verificationNeed: "medium",
    }),
    trustedSfiaProfile: "profile",
  });

  let capabilityFailClosed = false;
  try {
    validateRuntimeReasoningCapability("gpt-unknown", "low");
  } catch (e) {
    capabilityFailClosed = e instanceof TechnicalError;
  }

  const provider = new FakeConversationProvider({
    toolScript: [{ kind: "message", text: "[TEST/FAKE] MW2 eval." }],
  });
  const turn = await runNoraCognitiveTurn({
    correlationId: "mw2-eval-runtime",
    projectId: "prj:mw2-eval",
    messages: [
      { role: "system", content: "SFIA boundary instructions." },
      { role: "user", content: "eval probe" },
    ],
    provider,
    enableTools: false,
    cognitiveWorkloadSignals: {
      rigorCriticality: "high",
      verificationNeed: "high",
    },
    trustedSfiaProfile: "profile",
  });

  const facts: Mw2S01RuntimeFacts = {
    strategyClassesObserved: [
      routineElevated.strategyClass,
      highAssurance.strategyClass,
      focusedLow.strategyClass,
      focusedHigh.strategyClass,
      turn.cognitiveStrategyClass ?? "unknown",
    ],
    effortsObserved: [
      routineElevated.reasoningEffort,
      highAssurance.reasoningEffort,
      focusedLow.reasoningEffort,
      focusedHigh.reasoningEffort,
      turn.selectedReasoningEffort ?? "unknown",
    ],
    strategyDecoupledFromEffort:
      focusedLow.strategyClass === focusedHigh.strategyClass &&
      focusedLow.reasoningEffort !== focusedHigh.reasoningEffort,
    routineElevatedEffort:
      routineElevated.strategyClass === "Routine" &&
      routineElevated.reasoningEffort === "medium",
    highAssuranceNotMax:
      highAssurance.strategyClass === "High-Assurance" &&
      highAssurance.reasoningEffort !== "max",
    capabilityFailClosed,
    noModelRouting: !("model" in routineElevated),
  };

  return observationFromMw2S01Facts(facts);
}
```

## FULL FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.cwpPolicy.d0.test.ts
```typescript
/** @vitest-environment node */
/**
 * MW2-S01 D0 — CWP policy / Strategy Class / OD-02 Option B mechanics.
 */
import { describe, expect, it } from "vitest";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  COGNITIVE_STRATEGY_CLASSES,
  decideCognitiveStrategy,
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

  it("D0-12 — minimal is rejected for GPT-5.6 family", () => {
    expect(() =>
      validateRuntimeReasoningCapability("gpt-5.6-luna", "minimal"),
    ).toThrow(TechnicalError);
  });

  it("D0-13 — unknown model fails closed", () => {
    expect(() =>
      validateRuntimeReasoningCapability("gpt-unknown-model", "low"),
    ).toThrow(TechnicalError);
  });

  it("D0-14 — unsupported effort fails closed without coercion", () => {
    expect(() =>
      validateRuntimeReasoningCapability("gpt-5.6-luna", "max"),
    ).not.toThrow();
    // hypothetical future model with restricted set would throw — luna supports max
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
});
```

## FULL FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.f1ModelSettings.d0.test.ts
```typescript
/** @vitest-environment node */
/**
 * MW2-S01 D0 — F1 Agents modelSettings.reasoning wiring proof.
 */
import { describe, expect, it } from "vitest";
import { Agent } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import {
  buildRunnerModelSettingsForEffort,
  createNoraAgentsRunner,
  runNoraAgentsTurn,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";

describe("MW2-S01 — F1 modelSettings D0", () => {
  it("D0-15 — selected policy effort reaches ModelRequest modelSettings.reasoning.effort", async () => {
    const model = new ScriptedModel([[assistantMessage("ok")]]);
    const runnerModelSettings = buildRunnerModelSettingsForEffort("medium");
    await runNoraAgentsTurn({
      correlationId: "mw2-d0-15",
      projectId: "prj:mw2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "probe",
      model,
      enableTools: false,
      runnerModelSettings,
    });
    expect(model.calls.length).toBeGreaterThan(0);
    const settings = model.calls[0]?.request.modelSettings;
    expect(settings?.reasoning?.effort).toBe("medium");
  });

  it("D0-16 — unrelated baseline text.verbosity preserved on Runner settings", async () => {
    const model = new ScriptedModel([[assistantMessage("ok")]]);
    const runnerModelSettings = buildRunnerModelSettingsForEffort("high");
    await runNoraAgentsTurn({
      correlationId: "mw2-d0-16",
      projectId: "prj:mw2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "probe",
      model,
      enableTools: false,
      runnerModelSettings,
    });
    const settings = model.calls[0]?.request.modelSettings;
    expect(settings?.text?.verbosity).toBe("low");
    expect(settings?.reasoning?.effort).toBe("high");
  });

  it("D0-19 — Fake path uses same Runner orchestration with modelSettings", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] MW2 probe." }],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "mw2-d0-19",
      projectId: "prj:mw2",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "probe" },
      ],
      provider,
      enableTools: false,
      cognitiveWorkloadSignals: {
        rigorCriticality: "high",
        verificationNeed: "high",
      },
      trustedSfiaProfile: "trusted-profile",
      skipCognitiveStrategy: false,
    });
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.selectedReasoningEffort).toBe("high");
    expect(result.criticalChallengeArmed).toBe(true);
  });

  it("Runner explicit modelSettings override via createNoraAgentsRunner", async () => {
    const model = new ScriptedModel([[assistantMessage("runner override")]]);
    const agent = new Agent({
      name: "Mw2Probe",
      instructions: sfiaBoundaryInstructions(),
      model,
    });
    const runner = createNoraAgentsRunner(
      sfiaBoundaryInstructions(),
      undefined,
      buildRunnerModelSettingsForEffort("low"),
    );
    await runner.run(agent, "probe");
    expect(model.calls[0]?.request.modelSettings?.reasoning?.effort).toBe(
      "low",
    );
  });
});
```

## FULL FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s02.ckcAuthority.d0.test.ts
```typescript
/** @vitest-environment node */
/**
 * MW2-S02 D0 — CKC semantic assistance authority boundary.
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  deriveCkcAttributedRecommendation,
  enrichQualificationWithCkcSemantics,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import type { QualificationDto } from "@/features/project-assistant/f2/types";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";

const APP_ROOT = path.resolve(__dirname, "../..");
const PRODUCT_REGISTRY_ROOT = resolveProductDoctrineRegistryRoot(APP_ROOT);

function baseQualification(): QualificationDto {
  return {
    cycleTypeId: "cyc:delivery",
    cycleLabel: "Delivery",
    recommendedProfile: "Light",
    rationale: "Qualification catalogue standard.",
    criticalSignalsPresent: false,
    requiresJustificationForCritical: false,
    capitalizationViaCycleTypeId: false,
    isMorrisDecision: false,
    catalogVersion: "test",
    catalogHash: "sha256:test",
    detailedStatus: "resolved_detailed",
    disclosures: [],
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    executionAuthority: false,
  };
}

function productNativeProof() {
  return {
    cycleTypeId: "cyc:delivery",
    detailedStatus: "resolved_detailed" as const,
    level: "detailed" as const,
    status: "resolved" as const,
    source: "product_package" as const,
    expectedPrimaryReference: "ckc:studio:delivery",
    usedReference: "ckc:studio:delivery",
    fallbackUsed: false,
    catalogVersion: "test",
    catalogHash: "sha256:test",
    correlationId: "cor:mw2-ckc",
    resolvedAt: "2026-08-22T12:00:00.000Z",
    doctrineStatus: "product-studio-native" as const,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: [] as readonly string[],
    doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    indexDigest:
      "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ckcId: "ckc:studio:delivery",
    ckcContractVersion: "0.1.0",
    sourceDigest:
      "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
    packageProvenance: {
      ckcId: "ckc:studio:delivery",
      cycleTypeId: "cyc:delivery",
      doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      contentDigest:
        "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
      doctrineStatus: "product-studio-native" as const,
    },
  };
}

describe("MW2-S02 — CKC authority D0", () => {
  it("D0-20/D0-21 — product CKC enriches Recommendation with provenance", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: productNativeProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      ckcCognitiveRecommendation:
        "[TEST] RECOMMANDATION CKC — borner le slice.",
    });
    expect(enriched.recommendationLabel).toBe(
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    );
    expect(enriched.ckcSemanticProvenance?.ckcId).toBe("ckc:studio:delivery");
    expect(enriched.ckcSemanticProvenance?.packageVersion).toBeTruthy();
  });

  it("D0-22/D0-23 — remains Recommendation-class with executionAuthority false", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: productNativeProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.executionAuthority).toBe(false);
    expect(enriched.isMorrisDecision).toBe(false);
    expect(enriched.recommendationLabel).toContain("RECOMMANDATION");
  });

  it("D0-24 — CKC enrichment does not grant HD / execution", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: productNativeProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.executionAuthority).toBe(false);
    expect(enriched.isMorrisDecision).toBe(false);
    expect(enriched).not.toHaveProperty("humanDecisionId");
  });

  it("D0-25 — non-product proof leaves qualification un-enriched", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: {
        ...productNativeProof(),
        source: "repository_candidate" as const,
        doctrineStatus: "method-candidate" as const,
      },
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.executionAuthority).toBe(false);
    expect(enriched.ckcSemanticProvenance).toBeUndefined();
  });

  it("D0-26 — business-first rationale scrubs technical CKC mechanics", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    const rationale = deriveCkcAttributedRecommendation({
      baseRationale: "Base rationale.",
      content,
    });
    expect(rationale).not.toMatch(/\[CKC:/);
    expect(rationale).not.toMatch(/ckc:studio:/);
    expect(rationale).toMatch(/Base rationale\./);
  });
});
```

## FULL FILE: projects/sfia-studio/app/__tests__/nora-eval/mw2.s01.strategy.eval.test.ts
```typescript
/** @vitest-environment node */
/**
 * MW2-S01 deterministic nora-eval binding.
 */
import { describe, expect, it } from "vitest";
import {
  getScenario,
  observeMw2S01FromRuntime,
  runD0Scenario,
} from "@/lib/nora-eval";

describe("MW2-S01 nora-eval — strategy / effort decoupling", () => {
  it("catalog includes mw2.s01.strategy-effort-decoupling", () => {
    const s = getScenario("mw2.s01.strategy-effort-decoupling");
    expect(s).toBeDefined();
    expect(s?.storyIds).toContain("MW2-S01");
  });

  it("D0 scenario PASS via runtime-derived observation", async () => {
    const r = await runD0Scenario("mw2.s01.strategy-effort-decoupling");
    expect(r.passFail).toBe("PASS");
    expect(r.productObservation?.strategyDecoupledFromEffort).toBe(true);
    expect(r.productObservation?.routineElevatedEffort).toBe(true);
    expect(r.productObservation?.highAssuranceNotMax).toBe(true);
  });

  it("observeMw2S01FromRuntime derives facts from execution", async () => {
    const obs = await observeMw2S01FromRuntime();
    expect(obs.strategyDecoupledFromEffort).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.cwp.strategy_effort");
  });
});
```

---

# SECTION B — COMPLETE MODIFIED FILE DIFFS (11/11)

## MODIFIED DIFF: projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 52d34b98..dc80acdd 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -163,6 +163,14 @@ export async function orchestrateProjectAssistantTurn(input: {
         lpsId: project.lpsId,
         lpsVersion: project.lpsVersion,
       },
+      turnWorkloadContext: {
+        projectCriticality: project.criticality,
+        userContentLength: content.length,
+        historyMessageCount: history.length,
+        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
+        enableTools: true,
+      },
+      trustedSfiaProfile: null,
     });

     const { toolEvents, sources } = collectToolTelemetry(sink.events);
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 7a56e630..980a2410 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -94,3 +94,21 @@ export {
 export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
 export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
 export type { RunNoraCognitiveTurnInput } from "./runNoraCognitiveTurn";
+export {
+  decideCognitiveStrategy,
+  normalizeCognitiveWorkloadSignals,
+  buildSignalsFromTurnContext,
+  STRATEGY_REASONING_ENVELOPES,
+  COGNITIVE_STRATEGY_CLASSES,
+} from "./cognitiveWorkloadPolicy";
+export type {
+  CognitiveStrategyClass,
+  CognitiveStrategyDecision,
+  CognitiveWorkloadSignals,
+  TurnWorkloadContext,
+} from "./cognitiveWorkloadPolicy";
+export { validateRuntimeReasoningCapability } from "./reasoningCapability";
+export {
+  buildRunnerModelSettingsForEffort,
+  type NoraRunnerModelSettings,
+} from "./reasoningModelSettings";
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index dfacaced..0320ba05 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -28,6 +28,7 @@ import {
   type NoraTurnBudget,
 } from "./turnBudget";
 import type { NoraCognitiveTurnResult } from "./types";
+import type { NoraRunnerModelSettings } from "./reasoningModelSettings";

 export type RunNoraAgentsTurnInput = {
   correlationId: string;
@@ -52,11 +53,14 @@ export type RunNoraAgentsTurnInput = {
   enableTools?: boolean;
   /** Optional shared budget (tests). */
   budget?: NoraTurnBudget;
+  /** MW2 — Runner modelSettings override (reasoning.effort + preserved text.verbosity). */
+  runnerModelSettings?: NoraRunnerModelSettings;
 };

 export function createNoraAgentsRunner(
   systemInstructions: string,
   budget?: NoraTurnBudget,
+  runnerModelSettings?: NoraRunnerModelSettings,
 ): Runner {
   return new Runner({
     tracingDisabled: true,
@@ -64,6 +68,7 @@ export function createNoraAgentsRunner(
       systemInstructions,
       budget,
     ),
+    ...(runnerModelSettings ? { modelSettings: runnerModelSettings } : {}),
   });
 }

@@ -103,7 +108,11 @@ export async function runNoraAgentsTurn(
     tools,
   });

-  const runner = createNoraAgentsRunner(input.systemInstructions, budget);
+  const runner = createNoraAgentsRunner(
+    input.systemInstructions,
+    budget,
+    input.runnerModelSettings,
+  );
   const maxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;
   const session = input.session ?? undefined;
   const memoryBAvailability: MemoryBAvailability =
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 255339ee..d6746a3b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -2,8 +2,10 @@
  * Nora cognitive turn entry — Option C single Agents Runner path.
  * MW1-S01: honest Memory B availability.
  * MW1-S02: governed compaction + Truth C revision invalidation before cognition.
+ * MW2-S01: CWP / Strategy → Runner modelSettings.reasoning (OD-02 Option B).
  */
 import type { ConversationProvider, ProviderChatMessage } from "@/lib/platform/ai";
+import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
 import type { EventSink } from "@/lib/platform/observability/eventSink";
 import {
   appendMemoryBCognitiveDisclosure,
@@ -18,6 +20,15 @@ import {
 import { resolveNoraSessionSqlitePath } from "./sessionPaths";
 import { runNoraAgentsTurn } from "./runNoraAgentsTurn";
 import type { NoraCognitiveTurnResult } from "./types";
+import {
+  buildSignalsFromTurnContext,
+  decideCognitiveStrategy,
+  normalizeCognitiveWorkloadSignals,
+  type CognitiveWorkloadSignals,
+  type TurnWorkloadContext,
+} from "./cognitiveWorkloadPolicy";
+import { validateRuntimeReasoningCapability } from "./reasoningCapability";
+import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";

 export type RunNoraCognitiveTurnInput = {
   correlationId: string;
@@ -34,11 +45,96 @@ export type RunNoraCognitiveTurnInput = {
   truthCRevision?: TruthCRevision;
   /** Test-only fixed timestamp for deterministic compaction. */
   compactionNowIso?: string;
+  /** MW2 — optional explicit workload signals (tests). */
+  cognitiveWorkloadSignals?: Partial<CognitiveWorkloadSignals>;
+  /** MW2 — trusted SFIA Profile only when actually available; never invented. */
+  trustedSfiaProfile?: string | null;
+  /** MW2 — product turn facts for signal derivation. */
+  turnWorkloadContext?: TurnWorkloadContext;
+  /** MW2 — skip policy for isolated tests. */
+  skipCognitiveStrategy?: boolean;
 };

+function emitCognitiveStrategyTelemetry(
+  sink: EventSink | undefined,
+  correlationId: string,
+  decision: ReturnType<typeof decideCognitiveStrategy>,
+): void {
+  if (!sink) return;
+  sink.emit({
+    type: "COGNITIVE_STRATEGY_SELECTED",
+    correlationId,
+    detail: {
+      strategyClass: decision.strategyClass,
+      reasoningEffort: decision.reasoningEffort,
+      reasoningDemand: decision.reasoningDemand,
+      criticalChallengeArmed: decision.criticalChallengeArmed,
+      bootstrapUsed: decision.bootstrapUsed,
+      reasonCodes: decision.reasonCodes,
+      envelope: [...decision.candidateEnvelope],
+    },
+  });
+}
+
+function resolveCognitiveStrategyForTurn(
+  input: RunNoraCognitiveTurnInput,
+): ReturnType<typeof decideCognitiveStrategy> | null {
+  if (input.skipCognitiveStrategy) return null;
+
+  const signals = input.cognitiveWorkloadSignals
+    ? normalizeCognitiveWorkloadSignals(input.cognitiveWorkloadSignals)
+    : input.turnWorkloadContext
+      ? buildSignalsFromTurnContext(input.turnWorkloadContext)
+      : normalizeCognitiveWorkloadSignals({});
+
+  return decideCognitiveStrategy({
+    signals,
+    trustedSfiaProfile: input.trustedSfiaProfile,
+  });
+}
+
+function resolveRunnerModelSettings(
+  input: RunNoraCognitiveTurnInput,
+  decision: ReturnType<typeof decideCognitiveStrategy> | null,
+): ReturnType<typeof buildRunnerModelSettingsForEffort> | undefined {
+  if (!decision) return undefined;
+
+  const model =
+    typeof input.provider?.providerId === "string" &&
+    input.provider.providerId.startsWith("fake")
+      ? process.env.OPENAI_MODEL?.trim() || "gpt-5.6-luna"
+      : requireLiveConversationSecrets().model;
+
+  validateRuntimeReasoningCapability(model, decision.reasoningEffort);
+  return buildRunnerModelSettingsForEffort(decision.reasoningEffort);
+}
+
+function withStrategyFields(
+  turn: NoraCognitiveTurnResult,
+  decision: ReturnType<typeof decideCognitiveStrategy> | null,
+): NoraCognitiveTurnResult {
+  if (!decision) return turn;
+  return {
+    ...turn,
+    cognitiveStrategyClass: decision.strategyClass,
+    selectedReasoningEffort: decision.reasoningEffort,
+    criticalChallengeArmed: decision.criticalChallengeArmed,
+  };
+}
+
 export async function runNoraCognitiveTurn(
   input: RunNoraCognitiveTurnInput,
 ): Promise<NoraCognitiveTurnResult> {
+  const strategyDecision = resolveCognitiveStrategyForTurn(input);
+  if (strategyDecision) {
+    emitCognitiveStrategyTelemetry(
+      input.sink,
+      input.correlationId,
+      strategyDecision,
+    );
+  }
+  const runnerModelSettings = resolveRunnerModelSettings(input, strategyDecision);
+
   const system = input.messages.find((m) => m.role === "system");
   const userMessages = input.messages.filter((m) => m.role === "user");
   const lastUser = userMessages[userMessages.length - 1];
@@ -65,12 +161,16 @@ export async function runNoraCognitiveTurn(
       sink: input.sink,
       enableTools: input.enableTools,
       provider: input.provider,
+      runnerModelSettings,
     });
-    return {
-      ...turn,
-      memoryBCompactionState: "none",
-      memoryBCompactionDetails: null,
-    };
+    return withStrategyFields(
+      {
+        ...turn,
+        memoryBCompactionState: "none",
+        memoryBCompactionDetails: null,
+      },
+      strategyDecision,
+    );
   }

   const probe = await probeMemoryBAvailability({
@@ -124,12 +224,16 @@ export async function runNoraCognitiveTurn(
       sink: input.sink,
       enableTools: input.enableTools,
       provider: input.provider,
+      runnerModelSettings,
     });
-    return {
-      ...turn,
-      memoryBCompactionState: compactionState,
-      memoryBCompactionDetails: compactionDetails,
-    };
+    return withStrategyFields(
+      {
+        ...turn,
+        memoryBCompactionState: compactionState,
+        memoryBCompactionDetails: compactionDetails,
+      },
+      strategyDecision,
+    );
   } finally {
     if (probe.session) {
       probe.session.close();
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 68366a82..53ef6442 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -4,6 +4,8 @@
  * Single Runner path after legacy Nora runtime retirement.
  */

+import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
+import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
 import type { MemoryBAvailability } from "./memoryBAvailability";
 import type {
   MemoryBCompactionDetails,
@@ -35,6 +37,10 @@ export type NoraCognitiveTurnResult = {
   memoryBCompactionState: MemoryBCompactionState;
   /** MW1-S02 — optional compaction details when relevant. */
   memoryBCompactionDetails: MemoryBCompactionDetails | null;
+  /** MW2-S01 — internal strategy telemetry (not Pilote authority). */
+  cognitiveStrategyClass?: CognitiveStrategyClass;
+  selectedReasoningEffort?: OpenAiReasoningEffort;
+  criticalChallengeArmed?: boolean;
 };

 export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-eval/catalog.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/catalog.ts b/projects/sfia-studio/app/lib/nora-eval/catalog.ts
index 365b4487..024326cb 100644
--- a/projects/sfia-studio/app/lib/nora-eval/catalog.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/catalog.ts
@@ -210,6 +210,24 @@ const SCENARIOS: ScenarioDefinition[] = [
     ],
     d0Expectations: { mustPass: true },
   },
+  {
+    scenarioId: "mw2.s01.strategy-effort-decoupling",
+    catalogVersion: NORA_EVAL_CATALOG_VERSION,
+    storyIds: ["MW2-S01"],
+    barIds: [],
+    kind: "cognitive_strategy",
+    title: "MW2-S01 — Strategy Class decoupled from reasoning effort",
+    prompt:
+      "Deterministic policy/runtime check: overlapping envelopes, minimum-sufficient effort, no model routing.",
+    requiredTier: ["D0"],
+    hardInvariants: [
+      "strategy_class_decoupled_from_effort",
+      "routine_elevated_effort_possible",
+      "high_assurance_not_auto_max",
+      "capability_fail_closed",
+    ],
+    d0Expectations: { mustPass: true },
+  },
 ];

 export function getCatalogVersion(): typeof NORA_EVAL_CATALOG_VERSION {
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
index 11960284..2018beb1 100644
--- a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
@@ -14,6 +14,7 @@ import type { RunEvidence, PassFail } from "./types";
 import { NORA_EVAL_CATALOG_VERSION } from "./types";
 import { observeMw1S01FromRuntime } from "./mw1S01Observe";
 import { observeMw1S02FromRuntime } from "./mw1S02Observe";
+import { observeMw2S01FromRuntime } from "./mw2S01Observe";

 function nowIso(): string {
   return new Date().toISOString();
@@ -103,6 +104,8 @@ async function observationForScenario(
       return observeMw1S01FromRuntime();
     case "mw1.s02.compaction-provenance-loss":
       return observeMw1S02FromRuntime();
+    case "mw2.s01.strategy-effort-decoupling":
+      return observeMw2S01FromRuntime();
     default:
       return { productPath: "none" };
   }
@@ -180,7 +183,18 @@ function toRunEvidence(
                 obs.stalePriorInvalidationSignaled ?? false,
               observedObservableIds: obs.observedObservableIds ?? [],
             }
-          : undefined,
+          : scenarioId === "mw2.s01.strategy-effort-decoupling"
+            ? {
+                strategyClassesObserved: obs.strategyClassesObserved ?? [],
+                effortsObserved: obs.effortsObserved ?? [],
+                strategyDecoupledFromEffort:
+                  obs.strategyDecoupledFromEffort ?? false,
+                routineElevatedEffort: obs.routineElevatedEffort ?? false,
+                highAssuranceNotMax: obs.highAssuranceNotMax ?? false,
+                capabilityFailClosed: obs.capabilityFailClosed ?? false,
+                observedObservableIds: obs.observedObservableIds ?? [],
+              }
+            : undefined,
   };
 }

```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-eval/index.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index 9a1ae81c..40b60122 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -20,6 +20,11 @@ export {
   observationFromMw1S02Facts,
   type Mw1S02RuntimeFacts,
 } from "./mw1S02Observe";
+export {
+  observeMw2S01FromRuntime,
+  observationFromMw2S01Facts,
+  type Mw2S01RuntimeFacts,
+} from "./mw2S01Observe";
 export * from "./meteredProvider";
 export * from "./r2Score";
 export * from "./offlineRescore";
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-eval/scorers.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/scorers.ts b/projects/sfia-studio/app/lib/nora-eval/scorers.ts
index 2933ceb3..497448aa 100644
--- a/projects/sfia-studio/app/lib/nora-eval/scorers.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/scorers.ts
@@ -54,6 +54,13 @@ export type DeterministicObservation = {
   crossRevisionRecompactionUsesCurrentTruthC?: boolean;
   currentRawProvenanceCoverageIndependent?: boolean;
   stalePriorInvalidationSignaled?: boolean;
+  /** MW2-S01 strategy / effort */
+  strategyClassesObserved?: string[];
+  effortsObserved?: string[];
+  strategyDecoupledFromEffort?: boolean;
+  routineElevatedEffort?: boolean;
+  highAssuranceNotMax?: boolean;
+  capabilityFailClosed?: boolean;
 };

 function hardFail(
@@ -201,6 +208,82 @@ export function scoreHardInvariants(
     }
   }

+  if (scenario.hardInvariants.includes("strategy_class_decoupled_from_effort")) {
+    if (obs.strategyDecoupledFromEffort) {
+      results.push(
+        pass(
+          "hard.strategy_effort_decoupled",
+          "Same strategy class with different efforts observed",
+          "NCC-BAR-01",
+        ),
+      );
+    } else {
+      results.push(
+        hardFail(
+          "hard.strategy_effort_decoupled",
+          "Strategy/effort coupling detected",
+          "NCC-BAR-01",
+        ),
+      );
+    }
+  }
+
+  if (scenario.hardInvariants.includes("routine_elevated_effort_possible")) {
+    if (obs.routineElevatedEffort) {
+      results.push(
+        pass(
+          "hard.routine_elevated",
+          "Routine class elevated effort under workload pressure",
+          "NCC-BAR-01",
+        ),
+      );
+    } else {
+      results.push(
+        hardFail(
+          "hard.routine_elevated",
+          "Routine elevated effort not demonstrated",
+          "NCC-BAR-01",
+        ),
+      );
+    }
+  }
+
+  if (scenario.hardInvariants.includes("high_assurance_not_auto_max")) {
+    if (obs.highAssuranceNotMax) {
+      results.push(
+        pass(
+          "hard.ha_not_max",
+          "High-Assurance did not auto-select max effort",
+          "NCC-BAR-01",
+        ),
+      );
+    } else {
+      results.push(
+        hardFail(
+          "hard.ha_not_max",
+          "High-Assurance auto-max or missing",
+          "NCC-BAR-01",
+        ),
+      );
+    }
+  }
+
+  if (scenario.hardInvariants.includes("capability_fail_closed")) {
+    if (obs.capabilityFailClosed) {
+      results.push(
+        pass("hard.capability_fail_closed", "Unknown model rejected", "NCC-BAR-01"),
+      );
+    } else {
+      results.push(
+        hardFail(
+          "hard.capability_fail_closed",
+          "Capability validator did not fail closed",
+          "NCC-BAR-01",
+        ),
+      );
+    }
+  }
+
   if (scenario.hardInvariants.includes("uses_f2_not_ops1")) {
     if (obs.productPath === "ops1") {
       results.push(
@@ -570,6 +653,15 @@ export function scoreScenarioD0(
     );
   }

+  if (scenario.kind === "cognitive_strategy") {
+    scorers.push(
+      pass(
+        "cwp.strategy_kind",
+        `strategies=${(obs.strategyClassesObserved ?? []).join(",")}`,
+      ),
+    );
+  }
+
   scorers.push(...scoreHardInvariants(scenario, obs));

   const hardFailAny = scorers.some((s) => s.hardInvariantViolation && s.passFail === "FAIL");
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/nora-eval/types.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/types.ts b/projects/sfia-studio/app/lib/nora-eval/types.ts
index 6de7182b..d2eab2b1 100644
--- a/projects/sfia-studio/app/lib/nora-eval/types.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/types.ts
@@ -16,7 +16,8 @@ export type ScenarioKind =
   | "authority_boundary"
   | "genericity"
   | "parity_metric"
-  | "memory_continuity";
+  | "memory_continuity"
+  | "cognitive_strategy";

 export type PassFail = "PASS" | "FAIL" | "INCONCLUSIVE" | "NOT_PROVEN";

@@ -71,7 +72,9 @@ export type Mw0StoryId =

 export type Mw1StoryId = "MW1-S01" | "MW1-S02" | "MW1-S03";

-export type CognitiveStoryId = Mw0StoryId | Mw1StoryId;
+export type Mw2StoryId = "MW2-S01" | "MW2-S02";
+
+export type CognitiveStoryId = Mw0StoryId | Mw1StoryId | Mw2StoryId;

 export type CycleTypeFixtureId =
   | "delivery_implementation"
```

## MODIFIED DIFF: projects/sfia-studio/app/lib/platform/observability/types.ts
```diff
diff --git a/projects/sfia-studio/app/lib/platform/observability/types.ts b/projects/sfia-studio/app/lib/platform/observability/types.ts
index 2ad41959..0530dfaa 100644
--- a/projects/sfia-studio/app/lib/platform/observability/types.ts
+++ b/projects/sfia-studio/app/lib/platform/observability/types.ts
@@ -14,7 +14,8 @@ export type TechnicalEventType =
   | "STRUCTURED_OUTPUT_VALIDATED"
   | "STRUCTURED_OUTPUT_REJECTED"
   | "TOOL_LOOP_COMPLETED"
-  | "TOOL_LOOP_LIMIT_REACHED";
+  | "TOOL_LOOP_LIMIT_REACHED"
+  | "COGNITIVE_STRATEGY_SELECTED";

 export interface TechnicalEvent {
   type: TechnicalEventType;
```

## MODIFIED DIFF STAT
```
 .../features/project-assistant/orchestrateTurn.ts  |   8 ++
 .../app/lib/nora-cognitive-runtime/index.ts        |  18 +++
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  11 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts | 124 +++++++++++++++++++--
 .../app/lib/nora-cognitive-runtime/types.ts        |   6 +
 projects/sfia-studio/app/lib/nora-eval/catalog.ts  |  18 +++
 projects/sfia-studio/app/lib/nora-eval/d0Runner.ts |  16 ++-
 projects/sfia-studio/app/lib/nora-eval/index.ts    |   5 +
 projects/sfia-studio/app/lib/nora-eval/scorers.ts  |  92 +++++++++++++++
 projects/sfia-studio/app/lib/nora-eval/types.ts    |   7 +-
 .../app/lib/platform/observability/types.ts        |   3 +-
 11 files changed, 293 insertions(+), 15 deletions(-)
```
