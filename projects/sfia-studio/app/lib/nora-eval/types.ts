/**
 * Nora MW0 — Versioned Cognitive Eval Harness types.
 * Documentary readiness: projects/.../06-nora-mw0-...readiness.md
 */

import type { OpenAiReasoningEffort } from "@/lib/platform/ai";

export const NORA_EVAL_CATALOG_VERSION = "mw0-catalog-v1" as const;

export type EvidenceTier = "D0" | "R1" | "R2" | "R3";

export type ScenarioKind =
  | "harness_mechanics"
  | "intent_clarification"
  | "epistemic_separation"
  | "authority_boundary"
  | "genericity"
  | "parity_metric"
  | "memory_continuity"
  | "cognitive_strategy"
  | "contradiction_stop";

export type PassFail = "PASS" | "FAIL" | "INCONCLUSIVE" | "NOT_PROVEN";

export type FailureClass =
  | "NONE"
  | "MECHANICS"
  | "SCORER"
  | "MISSING_OBSERVABLE"
  | "HARD_INVARIANT"
  | "PROVIDER_CAPABILITY"
  | "PROVIDER_ERROR"
  | "PROVIDER"
  | "PRODUCT_PATH"
  | "CONFIG"
  | "BUDGET"
  | "BUDGET_STOP"
  | "SECURITY"
  | "DATA_SAFETY"
  | "INCONCLUSIVE";

export type EpistemicLabel =
  | "OBSERVATION"
  | "HYPOTHESIS"
  | "OPTION"
  | "RECOMMENDATION"
  | "DECISION";

export type NccBarId =
  | "NCC-BAR-01"
  | "NCC-BAR-02"
  | "NCC-BAR-03"
  | "NCC-BAR-04"
  | "NCC-BAR-05"
  | "NCC-BAR-06"
  | "NCC-BAR-07"
  | "NCC-BAR-08"
  | "NCC-BAR-09"
  | "NCC-BAR-10"
  | "NCC-BAR-11"
  | "NCC-BAR-12"
  | "NCC-BAR-13"
  | "NCC-BAR-14";

export type Mw0StoryId =
  | "MW0-S01"
  | "MW0-S02"
  | "MW0-S03"
  | "MW0-S04"
  | "MW0-S05"
  | "MW0-S06"
  | "MW0-S07";

export type Mw1StoryId = "MW1-S01" | "MW1-S02" | "MW1-S03";

export type Mw2StoryId = "MW2-S01" | "MW2-S02";

export type Mw3StoryId = "MW3-S01" | "MW3-S02";

export type CognitiveStoryId = Mw0StoryId | Mw1StoryId | Mw2StoryId | Mw3StoryId;

export type CycleTypeFixtureId =
  | "delivery_implementation"
  | "pr_readiness_integration"
  | "documentary_qualification";

export interface BarObservableBinding {
  barId: NccBarId;
  observableId: string;
  evidenceSemantics: string;
  required: boolean;
}

export interface ScenarioDefinition {
  scenarioId: string;
  catalogVersion: typeof NORA_EVAL_CATALOG_VERSION;
  storyIds: CognitiveStoryId[];
  barIds: NccBarId[];
  kind: ScenarioKind;
  title: string;
  prompt: string;
  /** Minimum evidence tier for a cognitive claim on this scenario. */
  requiredTier: EvidenceTier[];
  cycleTypeFixture?: CycleTypeFixtureId;
  /** Acceptable product cycleTypeId values for R2 genericity (expected, not observed). */
  acceptableCycleTypeIds?: string[];
  hardInvariants: string[];
  expectedEpistemicLabels?: EpistemicLabel[];
  /** Deterministic expected outcomes for D0 fixture runs. */
  d0Expectations: {
    mustPass: boolean;
    mustFailHardInvariant?: boolean;
    expectedIntentClass?: string;
    expectedClarificationBounded?: boolean;
    expectHumanDecisionActorPiloteOnly?: boolean;
    expectParityStatus?: "NOT_PROVEN";
  };
}

export interface ScorerResult {
  scorerId: string;
  passFail: PassFail;
  detail: string;
  hardInvariantViolation: boolean;
  barId?: NccBarId;
  observableId?: string;
  missingEvidenceClass?: string;
}

/** Explicit per-BAR runtime assessment (CORR-MW0-06). */
export type BarAssessmentStatus = "PROVEN" | "NOT_PROVEN";

export interface BarAssessment {
  barId: NccBarId;
  status: BarAssessmentStatus;
  /** false = non-blocking reserve (must not silently become PROVEN). */
  blocking: boolean;
  reason: string;
  expectedObservableId: string;
  observed: boolean;
}

export interface UsageCostRecord {
  inputTokens: number | null;
  outputTokens: number | null;
  /** null when ConversationProvider does not expose cached-input breakdown. */
  cachedInputTokens: number | null;
  /** null when ConversationProvider does not expose reasoning-token breakdown. */
  reasoningTokens: number | null;
  estimatedUsd: number;
  modelReturned: string | null;
  providerResponseId: string | null;
  providerCallCount?: number;
}

/** Historical first MW0 campaign usage-based estimated spend (not invoice). */
export const MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD = 0.026537;

export interface CampaignCellConfig {
  model: string;
  reasoningEffort: OpenAiReasoningEffort;
  scenarioId: string;
  scenarioVersion: typeof NORA_EVAL_CATALOG_VERSION;
  runIndex: number;
  campaignId: string;
  tier: EvidenceTier;
  sourceSet: "A" | "B" | "C" | "D" | "E";
  toolSet: "none" | "f1_tools" | "f2_pipeline";
}

export interface RunEvidence {
  campaignId: string;
  cell: CampaignCellConfig;
  startedAt: string;
  finishedAt: string;
  passFail: PassFail;
  failureClass: FailureClass;
  scorers: ScorerResult[];
  epistemicLabelsObserved: EpistemicLabel[];
  productPath: "none" | "r1_provider" | "f1" | "f2";
  /** Explicit F2 attempt flag for R2 (CORR-MW0-05). */
  productPathAttempted?: "f2";
  productPathSucceeded?: boolean;
  rawSummary: string;
  usage: UsageCostRecord | null;
  cumulativeSpendUsd: number;
  redacted: boolean;
  evidenceRefs: string[];
  /** Structured product observation — never synthesized from scenario metadata alone. */
  productObservation?: Record<string, unknown>;
  providerCallLedger?: Array<Record<string, unknown>>;
  /** Explicit BAR runtime assessments (e.g. BAR-09 NOT_PROVEN reserve). */
  barAssessments?: BarAssessment[];
}

export interface CampaignBudgetPolicy {
  targetUsd: number;
  softStopUsd: number;
  hardCapUsd: number;
}

export const MW0_BUDGET_POLICY: CampaignBudgetPolicy = {
  targetUsd: 3,
  softStopUsd: 4,
  hardCapUsd: 5,
};
