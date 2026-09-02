# Review Pack — MW2 Delivery CORR-05 Internal Boundary Correction
# FULL / CRITICAL / CONTENT-COMPLETE

Status: **FULL** · **CRITICAL** · **CONTENT-COMPLETE**

## 1. Timestamp Europe/Paris
2026-09-02 09:11:50 CEST

## 2. Cycle / typology / profile
- Cycle 8 — Delivery / implémentation
- Typologie: EVOL
- Profil: CRITICAL

## 3. Morris GO lineage
- GO MORRIS — MW2 DELIVERY (consumed)
- CORR-MW2-DLV-01..04 (retained SATISFIED)
- CORR-MW2-DLV-05 — KEEP CWP INTERNAL / remove client DTO serialization

## 4. Local Git Truth
| Field | Value |
|-------|-------|
| Worktree | `/Users/morris/Projects/sfia-workspace-pre-mw2-main-b345f3b6` |
| Branch | `delivery/sfia-studio-nora-mw2-cwp-strategy` |
| HEAD | `b345f3b6c74d3eac0caca5bdd5525809dd80547a` |
| origin/main | `b345f3b6c74d3eac0caca5bdd5525809dd80547a` |
| Prior handoff | `d394c535c6612819bc36eb1122781346334d120b` |
| Prior blob | `cc5441a7c5bb4ed4927938caffc769e834266cf5` |
| Project commit / push / PR / merge | **NO** |

## 5. CORR-01..04 retained
**SATISFIED** — UNKNOWN≠LOW, signal honesty, S1–S6 + CKC-E1..E5, D0-14 naming.

## 6. CORR-05 problem
Previous candidate projected internal CWP fields into `ProjectAssistantSendSuccess`, which crosses server→client via `projectAssistantSendAction` → F2 → `ProjectAssistantPanel`.

## 7. Client boundary before → after
**BEFORE (removed):**
- `cognitiveStrategyClass`
- `selectedReasoningEffort`
- `criticalChallengeArmed`
on `ProjectAssistantSendSuccess` + projected from `orchestrateProjectAssistantTurn`.

**AFTER:**
- These fields absent from client DTO / F1 return / features/project-assistant search (0 hits).
- Retained on internal `NoraCognitiveTurnResult` + `COGNITIVE_STRATEGY_SELECTED` EventSink.

## 8. Files changed by CORR-05 specifically
- `features/project-assistant/types.ts` — reverted client fields (now matches HEAD; no net diff)
- `features/project-assistant/orchestrateTurn.ts` — removed DTO projection (keeps turnWorkloadContext)
- `__tests__/nora-cognitive-runtime/mw2.s01.bootstrap.product.d0.test.ts` — EventSink spy proof
- `__tests__/nora-cognitive-runtime/mw2.s01.clientBoundary.d0.test.ts` — NEW boundary D0

## 9. ProjectAssistantPanel dependency check
**NONE** — no references to the three fields. No UI change required.

## 10. collectToolTelemetry non-leak
Only processes `TOOL_SUCCEEDED|DENIED|FAILED`. CORR-D0-10 PASS.

## 11. Product bootstrap proof mechanism
Spy on `ProjectAssistantMemoryEventSink.prototype.emit` → assert `COGNITIVE_STRATEGY_SELECTED` detail (`strategyClass=Focused`, `bootstrapUsed=true`) + assert client result has no CWP properties.

## 12. Field-search classification
| Location | Classification |
|----------|----------------|
| `features/project-assistant/**` | **ZERO hits — PASS** |
| `NoraCognitiveTurnResult` / policy / runNoraCognitiveTurn | ALLOWED internal |
| EventSink COGNITIVE_STRATEGY_SELECTED | ALLOWED internal telemetry |
| Tests / mw2EvalMatrix / mw2S01Observe | ALLOWED test/eval internals |

## 13. D0 verdict
**PASS** — CORR-05 boundary + CORR-01/02/04 + F1 modelSettings + CKC authority + product bootstrap

## 14. Deterministic EVAL
**PASS** — S1–S6 + CKC-E1..E5
Taxonomy: EVAL = assessment matrix; tiers remain D0/R1/R2/R3.

## 15. Regression
- typecheck: PASS
- npm test: **2372 passed**, 132 skipped, 0 failed
- Live OpenAI: **ZERO**

## 16. Fake/Real
DETERMINISTIC / MODELED only. REAL NOT EXECUTED.

## 17. reasoning.context / mode
**DEFER**

## 18. Final verdict
**MW2 DELIVERY CORRECTION — CORR-MW2-DLV-05 SATISFIED — CWP / COGNITIVE STRATEGY REMAINS INTERNAL — ProjectAssistantSendResult CLIENT BOUNDARY CONTAINS NO STRATEGY CLASS / REASONING EFFORT / CHALLENGE HOOK — INTERNAL EventSink TELEMETRY PRESERVED — PRODUCT BOOTSTRAP PROVEN VIA INTERNAL TELEMETRY — CORR-MW2-DLV-01..04 REMAIN SATISFIED — F1 modelSettings WIRING PASS — MW2-S01 S1–S6 PASS — MW2-S02 CKC-E1..E5 PASS — D0 PASS — TYPECHECK PASS — FULL REGRESSION PASS — ZERO LIVE OPENAI — NO REAL — MW2 CLOSURE NOT CLAIMED — READY FOR CHATGPT FINAL CRITICAL DELIVERY REVIEW**

## 19. Next gate
ChatGPT FINAL CRITICAL DELIVERY REVIEW. Only on PASS may ChatGPT surface Morris gate for MW2 project Git integration / PR preparation.

---

# SECTION A — FULL NEW FILES

## FULL FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts
```typescript
/**
 * MW2-S01 — thin internal Cognitive Workload Profile / Strategy policy.
 * Pure, testable. Strategy Class ≠ SFIA Profile ≠ reasoning effort ≠ model.
 * OD-02 Option B: overlapping envelopes + minimum-sufficient workload-sensitive effort.
 *
 * CORR-MW2-DLV-01: UNKNOWN ≠ LOW — Routine requires sufficient KNOWN-low evidence.
 * CORR-MW2-DLV-02: signal honesty — capability available ≠ workload dependency.
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
  /**
   * Product tool capability flag — NOT a workload dependency fact.
   * Retained for orchestration transport; does not fabricate toolDependency.
   */
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

/** Discriminating dimensions that must be explicitly known-low for Routine. */
export const ROUTINE_KNOWN_LOW_DIMENSIONS = [
  "ambiguity",
  "sourceBreadth",
  "verificationNeed",
  "reasoningDepth",
  "contradictionRisk",
] as const;

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

function isKnownLow(value: SignalValue): boolean {
  return value === "low";
}

/**
 * Routine eligibility requires sufficient KNOWN-low evidence on discriminating
 * dimensions. Unknown must NOT count as low (CORR-MW2-DLV-01).
 */
export function isRoutineEligible(
  signals: CognitiveWorkloadSignals,
): boolean {
  for (const key of ROUTINE_KNOWN_LOW_DIMENSIONS) {
    if (!isKnownLow(signals[key])) return false;
  }
  // rigor must be known and not High-Assurance pressure
  if (signals.rigorCriticality === "unknown") return false;
  if (signals.rigorCriticality === "high") return false;
  return true;
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

/**
 * Derive only from observable product facts.
 * CORR-MW2-DLV-02: enableTools does NOT imply toolDependency;
 * multimodality stays unknown unless an actual multimodal fact exists.
 * projectCriticality may feed rigorCriticality but never trustedSfiaProfile.
 */
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

  // Capability available ≠ workload dependency — leave unknown.
  const toolDependency: SignalValue = "unknown";
  // No multimodal fact in turn context — leave unknown.
  const multimodality: SignalValue = "unknown";

  let verificationNeed: SignalValue = "unknown";
  if (rigorCriticality === "high") verificationNeed = "high";

  return normalizeCognitiveWorkloadSignals({
    rigorCriticality,
    contextSize,
    toolDependency,
    verificationNeed,
    multimodality,
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

  // Strong KNOWN signals may elevate without trusted Profile.
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

  // Routine only with sufficient KNOWN-low evidence (UNKNOWN ≠ LOW).
  if (isRoutineEligible(signals)) {
    reasonCodes.push("routine_known_low_evidence");
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

## FULL FILE: projects/sfia-studio/app/lib/nora-eval/mw2EvalMatrix.ts
```typescript
/**
 * MW2 deterministic EVAL matrix (CORR-MW2-DLV-03).
 *
 * Taxonomy note:
 * EVAL is an assessment matrix, not a new EvidenceTier.
 * Existing harness tiers remain D0 / R1 / R2 / R3.
 * This module uses D0-tier harness mechanics for deterministic observation/scoring.
 */
import {
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  validateRuntimeReasoningCapability,
  type CognitiveStrategyClass,
} from "@/lib/nora-cognitive-runtime";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  deriveCkcAttributedRecommendation,
  enrichQualificationWithCkcSemantics,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import type { QualificationDto } from "@/features/project-assistant/f2/types";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import path from "node:path";

export type Mw2EvalCaseResult = {
  caseId: string;
  story: "MW2-S01" | "MW2-S02";
  inputSummary: string;
  observedStrategy?: CognitiveStrategyClass | null;
  observedEffort?: string | null;
  expectedStrategy?: CognitiveStrategyClass | string;
  capabilityResult?: "ok" | "fail_closed";
  authorityResult?: string;
  passFail: "PASS" | "FAIL";
  detail: string;
  observableIds: string[];
};

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
    correlationId: "cor:mw2-eval-ckc",
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

export function evaluateMw2S01Matrix(): Mw2EvalCaseResult[] {
  const results: Mw2EvalCaseResult[] = [];

  // S1 ROUTINE
  {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        reasoningDepth: "low",
        contradictionRisk: "low",
        rigorCriticality: "low",
        contextSize: "low",
      }),
      trustedSfiaProfile: "profile",
    });
    const ok =
      d.strategyClass === "Routine" &&
      ["none", "low", "medium"].includes(d.reasoningEffort) &&
      !("model" in d);
    results.push({
      caseId: "S1",
      story: "MW2-S01",
      inputSummary: "known low ambiguity/breadth/verification/contradiction",
      observedStrategy: d.strategyClass,
      observedEffort: d.reasoningEffort,
      expectedStrategy: "Routine",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "Routine + envelope effort" : "S1 mismatch",
      observableIds: ok ? ["obs.cwp.s1_routine"] : [],
    });
  }

  // S2 FOCUSED (bootstrap / insufficient truth)
  {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
      }),
      trustedSfiaProfile: null,
    });
    const ok = d.strategyClass === "Focused" && d.bootstrapUsed === true;
    results.push({
      caseId: "S2",
      story: "MW2-S01",
      inputSummary: "moderate/insufficient truth + no trusted Profile",
      observedStrategy: d.strategyClass,
      observedEffort: d.reasoningEffort,
      expectedStrategy: "Focused",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "Focused bootstrap" : "S2 mismatch",
      observableIds: ok ? ["obs.cwp.s2_focused"] : [],
    });
  }

  // S3 DEEP
  {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        sourceBreadth: "high",
        reasoningDepth: "high",
      }),
      trustedSfiaProfile: "profile",
    });
    const ok =
      d.strategyClass === "Deep" &&
      ["medium", "high", "xhigh"].includes(d.reasoningEffort);
    results.push({
      caseId: "S3",
      story: "MW2-S01",
      inputSummary: "known high depth + multi-source breadth",
      observedStrategy: d.strategyClass,
      observedEffort: d.reasoningEffort,
      expectedStrategy: "Deep",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "Deep envelope" : "S3 mismatch",
      observableIds: ok ? ["obs.cwp.s3_deep"] : [],
    });
  }

  // S4 HIGH-ASSURANCE
  {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        rigorCriticality: "high",
        verificationNeed: "high",
        contradictionRisk: "medium",
        contextSize: "medium",
      }),
      trustedSfiaProfile: "profile",
    });
    const ok =
      d.strategyClass === "High-Assurance" &&
      d.criticalChallengeArmed === true &&
      d.reasoningEffort !== "max";
    results.push({
      caseId: "S4",
      story: "MW2-S01",
      inputSummary: "critical rigor + verification",
      observedStrategy: d.strategyClass,
      observedEffort: d.reasoningEffort,
      expectedStrategy: "High-Assurance",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "HA armed, not auto-max" : "S4 mismatch",
      observableIds: ok ? ["obs.cwp.s4_high_assurance"] : [],
    });
  }

  // S5 SAME PROFILE / DIFFERENT WORKLOAD
  {
    const profile = "SFIA-Profile-Exact";
    const a = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        reasoningDepth: "low",
        contradictionRisk: "low",
        rigorCriticality: "low",
      }),
      trustedSfiaProfile: profile,
    });
    const b = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        sourceBreadth: "high",
        reasoningDepth: "high",
      }),
      trustedSfiaProfile: profile,
    });
    const sameClassDiffEffortLow = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
        contextSize: "low",
      }),
      trustedSfiaProfile: profile,
    });
    const sameClassDiffEffortHigh = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
        contextSize: "high",
        toolDependency: "high",
        verificationNeed: "medium",
      }),
      trustedSfiaProfile: profile,
    });
    const ok =
      a.strategyClass !== b.strategyClass &&
      a.strategyClass === "Routine" &&
      b.strategyClass === "Deep" &&
      sameClassDiffEffortLow.strategyClass ===
        sameClassDiffEffortHigh.strategyClass &&
      sameClassDiffEffortLow.reasoningEffort !==
        sameClassDiffEffortHigh.reasoningEffort;
    results.push({
      caseId: "S5",
      story: "MW2-S01",
      inputSummary: "same trusted Profile, different workloads",
      observedStrategy: a.strategyClass,
      observedEffort: `${a.strategyClass}/${b.strategyClass}`,
      expectedStrategy: "Routine≠Deep + same-class different efforts",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok
        ? "Strategy≠Profile rename; Strategy≠effort"
        : "S5 mismatch",
      observableIds: ok ? ["obs.cwp.s5_profile_independence"] : [],
    });
  }

  // S6 UNSUPPORTED CAPABILITY
  {
    let failClosed = false;
    try {
      validateRuntimeReasoningCapability("gpt-unknown-model", "low");
    } catch (e) {
      failClosed = e instanceof TechnicalError;
    }
    let minimalRejected = false;
    try {
      validateRuntimeReasoningCapability("gpt-5.6-luna", "minimal");
    } catch (e) {
      minimalRejected = e instanceof TechnicalError;
    }
    const ok = failClosed && minimalRejected;
    results.push({
      caseId: "S6",
      story: "MW2-S01",
      inputSummary: "unknown model + unsupported minimal effort",
      capabilityResult: ok ? "fail_closed" : "ok",
      expectedStrategy: "n/a",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "fail-closed, no coercion" : "S6 mismatch",
      observableIds: ok ? ["obs.cwp.s6_capability"] : [],
    });
  }

  return results;
}

export function evaluateMw2S02Matrix(): Mw2EvalCaseResult[] {
  const results: Mw2EvalCaseResult[] = [];
  const APP_ROOT = path.resolve(__dirname, "../..");
  const PRODUCT_REGISTRY_ROOT = resolveProductDoctrineRegistryRoot(APP_ROOT);

  const withCkc = enrichQualificationWithCkcSemantics({
    qualification: baseQualification(),
    proof: productNativeProof(),
    registryRoot: PRODUCT_REGISTRY_ROOT,
    packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    ckcCognitiveRecommendation:
      "[TEST] RECOMMANDATION CKC — anti scope creep : borner le slice Delivery.",
  });

  const withoutCkc = enrichQualificationWithCkcSemantics({
    qualification: baseQualification(),
    proof: {
      ...productNativeProof(),
      source: "repository_candidate" as const,
      doctrineStatus: "method-candidate" as const,
    },
    registryRoot: PRODUCT_REGISTRY_ROOT,
    packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    ckcCognitiveRecommendation:
      "[TEST] RECOMMANDATION CKC — anti scope creep : borner le slice Delivery.",
  });

  // CKC-E1
  {
    const ok =
      withCkc.recommendationLabel ===
        "RECOMMANDATION — PAS UNE DÉCISION HUMAINE" &&
      withCkc.executionAuthority === false &&
      withCkc.isMorrisDecision === false &&
      !!withCkc.ckcSemanticProvenance?.ckcId &&
      /anti scope creep|borner/i.test(withCkc.rationale);
    results.push({
      caseId: "CKC-E1",
      story: "MW2-S02",
      inputSummary: "product-native CKC + semantic guidance",
      authorityResult: `executionAuthority=${withCkc.executionAuthority}`,
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "enriched Recommendation + provenance" : "E1 mismatch",
      observableIds: ok ? ["obs.ckc.e1_enrich"] : [],
    });
  }

  // CKC-E2 — semantic delta vs baseline without applicable CKC
  {
    const delta =
      withCkc.rationale !== withoutCkc.rationale &&
      /anti scope creep|borner/i.test(withCkc.rationale) &&
      withoutCkc.ckcSemanticProvenance === undefined;
    results.push({
      caseId: "CKC-E2",
      story: "MW2-S02",
      inputSummary: "with vs without applicable CKC semantic guidance",
      passFail: delta ? "PASS" : "FAIL",
      detail: delta
        ? "observable semantic delta attributable to CKC"
        : "E2 no semantic delta",
      observableIds: delta ? ["obs.ckc.e2_semantic_delta"] : [],
    });
  }

  // CKC-E3
  {
    const ok =
      withoutCkc.ckcSemanticProvenance === undefined &&
      withoutCkc.executionAuthority === false;
    results.push({
      caseId: "CKC-E3",
      story: "MW2-S02",
      inputSummary: "non-product-native / fallback proof",
      authorityResult: `executionAuthority=${withoutCkc.executionAuthority}`,
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "no trusted enrichment" : "E3 mismatch",
      observableIds: ok ? ["obs.ckc.e3_fallback"] : [],
    });
  }

  // CKC-E4
  {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    const rationale = deriveCkcAttributedRecommendation({
      baseRationale: "Base rationale.",
      content,
    });
    const ok =
      !/\[CKC:/.test(rationale) &&
      !/ckc:studio:/.test(rationale) &&
      !/sha256:/.test(rationale);
    results.push({
      caseId: "CKC-E4",
      story: "MW2-S02",
      inputSummary: "business-first rationale scrubbing",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "no technical CKC leakage" : "E4 leakage",
      observableIds: ok ? ["obs.ckc.e4_business_first"] : [],
    });
  }

  // CKC-E5
  {
    const ok =
      withCkc.executionAuthority === false &&
      withCkc.isMorrisDecision === false &&
      !("humanDecisionId" in withCkc) &&
      !("confirmationId" in withCkc) &&
      !("executionContractId" in withCkc);
    results.push({
      caseId: "CKC-E5",
      story: "MW2-S02",
      inputSummary: "no HD/Confirmation/EC/write/execute shortcut",
      authorityResult: "no authority expansion",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "CKC ≠ authority" : "E5 authority leak",
      observableIds: ok ? ["obs.ckc.e5_no_shortcut"] : [],
    });
  }

  return results;
}

export function summarizeMw2EvalMatrix(): {
  s01: Mw2EvalCaseResult[];
  s02: Mw2EvalCaseResult[];
  s01Pass: boolean;
  s02Pass: boolean;
  allPass: boolean;
} {
  const s01 = evaluateMw2S01Matrix();
  const s02 = evaluateMw2S02Matrix();
  const s01Pass = s01.every((c) => c.passFail === "PASS");
  const s02Pass = s02.every((c) => c.passFail === "PASS");
  return { s01, s02, s01Pass, s02Pass, allPass: s01Pass && s02Pass };
}
```

## FULL FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.cwpPolicy.d0.test.ts
```typescript
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

## FULL FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.bootstrap.product.d0.test.ts
```typescript
/** @vitest-environment node */
/**
 * CORR-MW2-DLV-01 + CORR-MW2-DLV-05 — product orchestration seam bootstrap
 * and client-boundary proof.
 *
 * Strategy is observed via INTERNAL EventSink telemetry
 * (COGNITIVE_STRATEGY_SELECTED), NOT via ProjectAssistantSendResult.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

const tempDirs: string[] = [];

describe("CORR-MW2-DLV-01/05 — product path CWP bootstrap + client boundary", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  let emitSpy: ReturnType<typeof vi.spyOn> | undefined;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    emitSpy?.mockRestore();
    emitSpy = undefined;
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    }
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it("CORR-D0-06 — ordinary product turn Focused via internal EventSink, not client DTO", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw2-boot-"));
    tempDirs.push(dir);
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const sessionDbPath = path.join(dir, "nora-session.sqlite");

    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: "MW2 Bootstrap",
      objective: "Ordinary informative ask",
      context: "Insufficient CWP truth",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "MW2B",
      idempotencyKey: `idem:mw2-boot-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");

    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    emitSpy = vi
      .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
      .mockImplementation(function (
        this: ProjectAssistantMemoryEventSink,
        event: TechnicalEvent,
      ) {
        emitted.push(event);
        return originalEmit.call(this, event);
      });

    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Ordinary informative answer. AUCUNE EXÉCUTION.",
        },
      ],
    });

    const result = await orchestrateProjectAssistantTurn({
      projectId: created.projectId,
      content: "Quel est le statut du projet ?",
      provider,
      sessionDbPath,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("turn failed");

    // CORR-D0-09 — internal EventSink observes strategy selection
    const strategyEvents = emitted.filter(
      (e) => e.type === "COGNITIVE_STRATEGY_SELECTED",
    );
    expect(strategyEvents.length).toBeGreaterThanOrEqual(1);
    const detail = strategyEvents[0]!.detail;
    expect(detail.strategyClass).toBe("Focused");
    expect(detail.bootstrapUsed).toBe(true);
    expect(detail.criticalChallengeArmed).not.toBe(true);

    // CORR-D0-08 — client DTO must not serialize CWP internals
    expect(result).not.toHaveProperty("cognitiveStrategyClass");
    expect(result).not.toHaveProperty("selectedReasoningEffort");
    expect(result).not.toHaveProperty("criticalChallengeArmed");

    // CORR-D0-11 — expected user/business + MW1 fields remain
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.memoryBAvailability).toBeDefined();
    expect(result.ephemeralNotice).toBeTruthy();
    expect(result.project.projectId).toBe(created.projectId);

    // CORR-D0-10 — strategy telemetry not converted to toolEvents/sources
    const { toolEvents, sources } = collectToolTelemetry(emitted);
    expect(JSON.stringify(toolEvents)).not.toContain("strategyClass");
    expect(JSON.stringify(sources)).not.toContain("strategyClass");
    expect(
      toolEvents.some((t) => /COGNITIVE_STRATEGY/i.test(t.toolName)),
    ).toBe(false);
  });
});
```

## FULL FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.clientBoundary.d0.test.ts
```typescript
/** @vitest-environment node */
/**
 * CORR-MW2-DLV-05 — internal runtime retains Strategy metadata;
 * client DTO / tool telemetry do not leak it.
 */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import {
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

describe("CORR-MW2-DLV-05 — internal Strategy vs client boundary", () => {
  it("CORR-D0-07 — NoraCognitiveTurnResult retains internal Strategy metadata", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] internal." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw2-corr05-d0-07",
      projectId: "prj:mw2-corr05",
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
    });
    expect(turn.cognitiveStrategyClass).toBe("High-Assurance");
    expect(turn.selectedReasoningEffort).toBeDefined();
    expect(turn.criticalChallengeArmed).toBe(true);
  });

  it("CORR-D0-10 — collectToolTelemetry ignores COGNITIVE_STRATEGY_SELECTED", () => {
    const events: TechnicalEvent[] = [
      {
        type: "COGNITIVE_STRATEGY_SELECTED",
        correlationId: "c",
        detail: {
          strategyClass: "Focused",
          reasoningEffort: "low",
          criticalChallengeArmed: false,
          bootstrapUsed: true,
        },
      },
      {
        type: "TOOL_SUCCEEDED",
        correlationId: "c",
        detail: {
          toolName: "git_local_get_head",
          status: "succeeded",
          summary: "ok",
        },
      },
    ];
    const { toolEvents, sources } = collectToolTelemetry(events);
    expect(toolEvents).toHaveLength(1);
    expect(toolEvents[0]?.toolName).toBe("git_local_get_head");
    expect(JSON.stringify({ toolEvents, sources })).not.toContain(
      "strategyClass",
    );
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

## FULL FILE: projects/sfia-studio/app/__tests__/nora-eval/mw2.eval.matrix.test.ts
```typescript
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
```

---

# SECTION B — COMPLETE MODIFIED FILE DIFFS

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
index 7a56e630..832c4db3 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -94,3 +94,23 @@ export {
 export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
 export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
 export type { RunNoraCognitiveTurnInput } from "./runNoraCognitiveTurn";
+export {
+  decideCognitiveStrategy,
+  normalizeCognitiveWorkloadSignals,
+  buildSignalsFromTurnContext,
+  isRoutineEligible,
+  STRATEGY_REASONING_ENVELOPES,
+  COGNITIVE_STRATEGY_CLASSES,
+  ROUTINE_KNOWN_LOW_DIMENSIONS,
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
index 9a1ae81c..ed3f1459 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -20,6 +20,17 @@ export {
   observationFromMw1S02Facts,
   type Mw1S02RuntimeFacts,
 } from "./mw1S02Observe";
+export {
+  observeMw2S01FromRuntime,
+  observationFromMw2S01Facts,
+  type Mw2S01RuntimeFacts,
+} from "./mw2S01Observe";
+export {
+  evaluateMw2S01Matrix,
+  evaluateMw2S02Matrix,
+  summarizeMw2EvalMatrix,
+  type Mw2EvalCaseResult,
+} from "./mw2EvalMatrix";
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

## CORR-05 NOTE: features/project-assistant/types.ts
ProjectAssistantSendSuccess no longer declares cognitiveStrategyClass / selectedReasoningEffort / criticalChallengeArmed. Net git diff vs HEAD for this file: empty (fields added then removed).

## MODIFIED DIFF STAT
```
 .../features/project-assistant/orchestrateTurn.ts  |   8 ++
 .../app/lib/nora-cognitive-runtime/index.ts        |  20 ++++
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  11 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts | 124 +++++++++++++++++++--
 .../app/lib/nora-cognitive-runtime/types.ts        |   6 +
 projects/sfia-studio/app/lib/nora-eval/catalog.ts  |  18 +++
 projects/sfia-studio/app/lib/nora-eval/d0Runner.ts |  16 ++-
 projects/sfia-studio/app/lib/nora-eval/index.ts    |  11 ++
 projects/sfia-studio/app/lib/nora-eval/scorers.ts  |  92 +++++++++++++++
 projects/sfia-studio/app/lib/nora-eval/types.ts    |   7 +-
 .../app/lib/platform/observability/types.ts        |   3 +-
 11 files changed, 301 insertions(+), 15 deletions(-)
```

## UNTRACKED NEW FILES
```
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.bootstrap.product.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.clientBoundary.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.cwpPolicy.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s01.f1ModelSettings.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.s02.ckcAuthority.d0.test.ts
projects/sfia-studio/app/__tests__/nora-eval/mw2.eval.matrix.test.ts
projects/sfia-studio/app/__tests__/nora-eval/mw2.s01.strategy.eval.test.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningModelSettings.ts
projects/sfia-studio/app/lib/nora-eval/mw2EvalMatrix.ts
projects/sfia-studio/app/lib/nora-eval/mw2S01Observe.ts
```
