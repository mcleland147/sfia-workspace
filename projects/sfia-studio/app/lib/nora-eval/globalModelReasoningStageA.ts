/**
 * Global Model × Reasoning — Stage A driver + derived call envelope (nora-eval).
 *
 * CELL EXECUTIONS ≠ MODEL INVOCATIONS.
 * Caps for model/aggregate are DERIVED from product-path ceilings.
 * USD 15/18/20 is Morris-decided authorization envelope (≠ invoice; ≠ Stage A REAL).
 * ZERO REAL by default: injectable executor; canonical NoraCampaignBudget is SoT.
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import {
  acquireNoraCampaignBudget,
  campaignBudgetSnapshot,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import {
  NORA_EVAL_GLOBAL_CATALOG_VERSION,
  type CampaignCellConfig,
  type CampaignBudgetPolicy,
  type FailureClass,
  type PassFail,
  type RunEvidence,
} from "./types";
import {
  BudgetTracker,
  buildGlobalModelReasoningCapabilityManifest,
  conservativePreCallEstimateUsd,
  OPENAI_WEB_SEARCH_TOOL_CALL_USD,
  validateCellAgainstManifest,
  type CapabilityManifest,
} from "./capabilityBudget";
import { getScenario } from "./catalog";

export const GLOBAL_MR_STAGE_A_CONTRACT_VERSION =
  "global-mr-campaign-contract-v3-candidate" as const;

/** Primary GPT-5.6 cohort — preserved Cartesian product (Option C). */
export const GLOBAL_MR_STAGE_A_PRIMARY_MODELS = [
  "gpt-5.6-luna",
  "gpt-5.6-terra",
  "gpt-5.6-sol",
] as const;

/** @deprecated Alias — prefer PRIMARY_MODELS; does NOT include Astra. */
export const GLOBAL_MR_STAGE_A_MODELS = GLOBAL_MR_STAGE_A_PRIMARY_MODELS;

export const GLOBAL_MR_STAGE_A_EFFORTS = [
  "none",
  "medium",
  "high",
] as const satisfies readonly OpenAiReasoningEffort[];

/** Bounded Astra challenger — medium only; ONE-SHOT (no selective repeats). */
export const GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER = {
  modelId: "gpt-6-astra",
  reasoningEffort: "medium",
} as const satisfies {
  modelId: "gpt-6-astra";
  reasoningEffort: OpenAiReasoningEffort;
};

export type GlobalMrStageAPrimaryModel =
  (typeof GLOBAL_MR_STAGE_A_PRIMARY_MODELS)[number];

export type GlobalMrStageAModelId =
  | GlobalMrStageAPrimaryModel
  | typeof GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.modelId;

/** Full Stage A model universe (primary + challenger). */
export const GLOBAL_MR_STAGE_A_MODEL_UNIVERSE = [
  ...GLOBAL_MR_STAGE_A_PRIMARY_MODELS,
  GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.modelId,
] as const;

export const GLOBAL_MR_STAGE_A_WORKLOADS = [
  "W-Routine",
  "W-Clarification",
  "W-Analysis",
  "W-High-Assurance",
  "W-Memory",
  "W-Sources",
] as const;

export type GlobalMrStageAWorkloadId =
  (typeof GLOBAL_MR_STAGE_A_WORKLOADS)[number];

export const GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS: Record<
  GlobalMrStageAWorkloadId,
  string
> = {
  "W-Routine": "mw2.s01.strategy-effort-decoupling",
  "W-Clarification": "mw5.s01.challenge-clarification",
  "W-Analysis": "mw3.s01.disposition-matrix",
  "W-High-Assurance": "mw4.s01.grounding-durability",
  "W-Memory": "mw1.s01.honest-memory-b-availability",
  "W-Sources": "mw6.s02.read-search-partiality-failclosed",
};

/**
 * Product-path Agents model-turn ceiling for Stage A cells.
 * Derived from runNoraAgentsTurn default: CT_MAX_TOOL_ROUNDS + 1.
 */
export const GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS =
  CT_MAX_TOOL_ROUNDS + 1;

export type GlobalMrStageAProductPath =
  | "agents_cognitive"
  | "f2_product"
  | "mw6_governed";

/**
 * Per-workload constitutive call plan (deterministic product-path ceilings).
 * F2 informative Stage A framing: analyzeIntent structured + Agents F1 path.
 * Does not include optional CKC actionable extra structured call (not constitutive
 * of the Stage A informative comparison cells).
 */
export type GlobalMrStageAWorkloadCallPlan = {
  workloadId: GlobalMrStageAWorkloadId;
  productPath: GlobalMrStageAProductPath;
  /** ConversationProvider completeStructured calls before Agents. */
  preAgentsStructuredModelCalls: number;
  /** Max Agents Runner model turns (claimModelInvocation each). */
  maxAgentsModelTurns: number;
  /** Max constitutive model invocations for ONE cell execution. */
  maxModelInvocationsPerCell: number;
  /** Max hosted web ops claimable for ONE cell (Sources only). */
  maxHostedWebOperationsPerCell: number;
  proofNote: string;
};

export function buildGlobalMrStageAWorkloadCallPlans(): Record<
  GlobalMrStageAWorkloadId,
  GlobalMrStageAWorkloadCallPlan
> {
  const agentsTurns = GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS;
  const mk = (
    workloadId: GlobalMrStageAWorkloadId,
    productPath: GlobalMrStageAProductPath,
    pre: number,
    hosted: number,
    proofNote: string,
  ): GlobalMrStageAWorkloadCallPlan => ({
    workloadId,
    productPath,
    preAgentsStructuredModelCalls: pre,
    maxAgentsModelTurns: agentsTurns,
    maxModelInvocationsPerCell: pre + agentsTurns,
    maxHostedWebOperationsPerCell: hosted,
    proofNote,
  });
  return {
    "W-Routine": mk(
      "W-Routine",
      "agents_cognitive",
      0,
      0,
      "runNoraCognitiveTurn → runNoraAgentsTurn; default maxTurns=CT_MAX_TOOL_ROUNDS+1",
    ),
    "W-Clarification": mk(
      "W-Clarification",
      "f2_product",
      1,
      0,
      "orchestrateAssistantSend → analyzeIntent.completeStructured(1) + F1 Agents turns",
    ),
    "W-Analysis": mk(
      "W-Analysis",
      "f2_product",
      1,
      0,
      "orchestrateAssistantSend → analyzeIntent(1) + F1 Agents turns",
    ),
    "W-High-Assurance": mk(
      "W-High-Assurance",
      "f2_product",
      1,
      0,
      "orchestrateAssistantSend → analyzeIntent(1) + F1 Agents turns",
    ),
    "W-Memory": mk(
      "W-Memory",
      "agents_cognitive",
      0,
      0,
      "Option C / Agents cognitive path; maxTurns=CT_MAX_TOOL_ROUNDS+1",
    ),
    "W-Sources": mk(
      "W-Sources",
      "mw6_governed",
      0,
      GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
      "runMw6GovernedNoraProductTurn → Agents; hosted capped per cell at provider tool-calls/response",
    ),
  };
}

/** Candidate hosted tool-calls/response (campaign). */
export const GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE = 2;

/** Cell execution envelope — NOT model invocations. Option C: 54 primary + 6 Astra + 18 primary repeats. */
export const GLOBAL_MR_STAGE_A_CELL_CAPS = {
  primaryBaseCells: 54,
  astraChallengerCells: 6,
  baseCells: 54 + 6,
  maxSelectiveRepeats: 18,
  /** One selective extra run per *primary* base cell (runIndex 0 base + runIndex 1 repeat). */
  maxRepeatsPerCell: 1,
  /** Astra challenger cells are ONE-SHOT — not selective-repeat eligible. */
  astraSelectiveRepeats: 0,
  maxCellExecutions: 54 + 6 + 18,
  /** Hosted: primary pool 24 + Astra W-Sources challenger +2. */
  maxHostedWebOperations: 24 + 2,
} as const;

/** Candidate USD envelope — Morris D-GMR-FINOPS-01: 15/18/20. Authorization ≠ invoice. */
export const GLOBAL_MR_STAGE_A_USD_POLICY: CampaignBudgetPolicy = {
  targetUsd: 15,
  softStopUsd: 18,
  hardCapUsd: 20,
};

export type GlobalMrStageADerivedEnvelope = {
  contractVersion: typeof GLOBAL_MR_STAGE_A_CONTRACT_VERSION;
  maxCellExecutions: number;
  maxSelectiveRepeats: number;
  primaryBaseCells: number;
  astraChallengerCells: number;
  baseCells: number;
  primaryBaseModelInvocationCeiling: number;
  astraBaseModelInvocationCeiling: number;
  baseModelInvocationCeiling: number;
  repeatModelInvocationCeiling: number;
  astraRepeatModelInvocationCeiling: number;
  maxModelInvocations: number;
  maxHostedWebOperations: number;
  maxAggregateRealCalls: number;
  perWorkload: Record<GlobalMrStageAWorkloadId, GlobalMrStageAWorkloadCallPlan>;
  usd: CampaignBudgetPolicy;
  usdFeasibility: {
    ok: boolean;
    /** Model-token planned reserve (4k/1.2k assumptions) — NOT total provider cost. */
    plannedModelTokenReserveUsd: number;
    /** Model-token base cells only (no repeats). */
    plannedReserveUsdBase: number;
    /**
     * @deprecated Alias of plannedModelTokenReserveUsd — model-token only.
     * Do NOT treat as known planned subtotal or invoice ceiling.
     */
    plannedReserveUsdWorstCaseWithRepeats: number;
    webSearchToolCallUsd: number;
    plannedHostedWebSearchToolFeesUsd: number;
    /** model-token reserve + max fixed web-search tool-call fees. ≠ invoice. */
    knownPlannedSubtotalUsd: number;
    searchContentTokenExposure: "VARIABLE_PROVIDER_USAGE_DEPENDENT";
    cacheWritePricingDocumented: true;
    cacheWriteQuantityDeterministicallyKnown: false;
    invoice: "NOT_OBSERVED";
    hardCapUsd: number;
    status: "COMPATIBLE_WITH_CURRENT_POLICY" | "REQUIRES_MORRIS_BUDGET_DECISION";
  };
  derivationNotes: string[];
};

/**
 * Derive Stage A model/aggregate ceilings from product-path plans.
 * Worst-case selective repeats: up to 18 highest per-cell model costs
 * (at most one repeat per base cell).
 */
export function deriveGlobalMrStageAEnvelope(): GlobalMrStageADerivedEnvelope {
  const plans = buildGlobalMrStageAWorkloadCallPlans();
  const basePlan = buildGlobalMrStageABaseCellPlan();
  const derivationNotes: string[] = [
    "Option C: primary 54 (3×3×6) + Astra challenger 6 (medium×6) = 60 base cells.",
    "maxCellExecutions = 60 base + 18 primary selective repeats = 78 (Astra repeats = 0).",
    `maxAgentsModelTurns = CT_MAX_TOOL_ROUNDS+1 = ${GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS}.`,
    "F2 workloads include 1 constitutive analyzeIntent structured model call.",
    "Repeat ceiling uses the 18 highest *primary* per-cell model-call costs (≤1 repeat/primary base cell).",
    "USD 15/18/20 policy DECIDED BY MORRIS (D-GMR-FINOPS-01); known planned subtotal (model-token + fixed hosted fees) COMPATIBLE_WITH_CURRENT_POLICY.",
    "plannedModelTokenReserveUsd ≠ total provider cost; search-content/cache exposure VARIABLE; invoice NOT_OBSERVED; Stage A REAL NOT AUTHORIZED by financial decision alone.",
  ];

  const primaryCellCosts: Array<{
    model: GlobalMrStageAPrimaryModel;
    effort: (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number];
    workloadId: GlobalMrStageAWorkloadId;
    modelCalls: number;
    estimatedUsd: number;
  }> = [];

  let primaryBaseModelInvocationCeiling = 0;
  let astraBaseModelInvocationCeiling = 0;
  let plannedReserveUsdBase = 0;

  const manifest = buildGlobalModelReasoningCapabilityManifest(
    "2026-09-05T00:00:00.000Z",
  );

  for (const entry of basePlan) {
    const plan = plans[entry.workloadId];
    const modelCalls = plan.maxModelInvocationsPerCell;
    const perCall = conservativePreCallEstimateUsd({
      manifest,
      modelId: entry.model,
    });
    const estimatedUsd = perCall * modelCalls;
    plannedReserveUsdBase += estimatedUsd;
    if (entry.isChallenger) {
      astraBaseModelInvocationCeiling += modelCalls;
    } else {
      primaryBaseModelInvocationCeiling += modelCalls;
      primaryCellCosts.push({
        model: entry.model as GlobalMrStageAPrimaryModel,
        effort: entry.reasoningEffort as (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number],
        workloadId: entry.workloadId,
        modelCalls,
        estimatedUsd,
      });
    }
  }

  primaryCellCosts.sort(
    (a, b) =>
      b.modelCalls - a.modelCalls || b.estimatedUsd - a.estimatedUsd,
  );
  const topRepeats = primaryCellCosts.slice(
    0,
    GLOBAL_MR_STAGE_A_CELL_CAPS.maxSelectiveRepeats,
  );
  const repeatModelInvocationCeiling = topRepeats.reduce(
    (s, c) => s + c.modelCalls,
    0,
  );
  const plannedReserveUsdRepeats = topRepeats.reduce(
    (s, c) => s + c.estimatedUsd,
    0,
  );
  const plannedModelTokenReserveUsd =
    plannedReserveUsdBase + plannedReserveUsdRepeats;

  const baseModelInvocationCeiling =
    primaryBaseModelInvocationCeiling + astraBaseModelInvocationCeiling;
  const maxModelInvocations =
    baseModelInvocationCeiling + repeatModelInvocationCeiling;
  const maxHostedWebOperations =
    GLOBAL_MR_STAGE_A_CELL_CAPS.maxHostedWebOperations;
  const maxAggregateRealCalls = maxModelInvocations + maxHostedWebOperations;

  const webSearchToolCallUsd = OPENAI_WEB_SEARCH_TOOL_CALL_USD;
  const plannedHostedWebSearchToolFeesUsd =
    maxHostedWebOperations * webSearchToolCallUsd;
  const knownPlannedSubtotalUsd =
    plannedModelTokenReserveUsd + plannedHostedWebSearchToolFeesUsd;

  const usdOk =
    knownPlannedSubtotalUsd <=
    GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd + 1e-12;

  return {
    contractVersion: GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
    maxCellExecutions: GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions,
    maxSelectiveRepeats: GLOBAL_MR_STAGE_A_CELL_CAPS.maxSelectiveRepeats,
    primaryBaseCells: GLOBAL_MR_STAGE_A_CELL_CAPS.primaryBaseCells,
    astraChallengerCells: GLOBAL_MR_STAGE_A_CELL_CAPS.astraChallengerCells,
    baseCells: GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells,
    primaryBaseModelInvocationCeiling,
    astraBaseModelInvocationCeiling,
    baseModelInvocationCeiling,
    repeatModelInvocationCeiling,
    astraRepeatModelInvocationCeiling: 0,
    maxModelInvocations,
    maxHostedWebOperations,
    maxAggregateRealCalls,
    perWorkload: plans,
    usd: GLOBAL_MR_STAGE_A_USD_POLICY,
    usdFeasibility: {
      ok: usdOk,
      plannedModelTokenReserveUsd,
      plannedReserveUsdBase,
      plannedReserveUsdWorstCaseWithRepeats: plannedModelTokenReserveUsd,
      webSearchToolCallUsd,
      plannedHostedWebSearchToolFeesUsd,
      knownPlannedSubtotalUsd,
      searchContentTokenExposure: "VARIABLE_PROVIDER_USAGE_DEPENDENT",
      cacheWritePricingDocumented: true,
      cacheWriteQuantityDeterministicallyKnown: false,
      invoice: "NOT_OBSERVED",
      hardCapUsd: GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd,
      status: usdOk
        ? "COMPATIBLE_WITH_CURRENT_POLICY"
        : "REQUIRES_MORRIS_BUDGET_DECISION",
    },
    derivationNotes,
  };
}

/** Cached derived envelope (pure; recomputed on call — cheap). */
export function globalMrStageAEnvelopeProof(): GlobalMrStageADerivedEnvelope & {
  distinctFromMw0AndH17: true;
  usdSemantics: "pre_dispatch_reservation_authorization_envelope";
} {
  const derived = deriveGlobalMrStageAEnvelope();
  return {
    ...derived,
    distinctFromMw0AndH17: true,
    usdSemantics: "pre_dispatch_reservation_authorization_envelope",
  };
}

/**
 * @deprecated Use GLOBAL_MR_STAGE_A_CELL_CAPS + deriveGlobalMrStageAEnvelope().
 * Retained shape for migration: maxModelInvocations is now DERIVED.
 */
export const GLOBAL_MR_STAGE_A_CALL_CAPS = (() => {
  const d = deriveGlobalMrStageAEnvelope();
  return {
    maxCellExecutions: d.maxCellExecutions,
    maxModelInvocations: d.maxModelInvocations,
    maxHostedWebOperations: d.maxHostedWebOperations,
    maxAggregateRealCalls: d.maxAggregateRealCalls,
    maxSelectiveRepeats: d.maxSelectiveRepeats,
    maxRepeatsPerCell: GLOBAL_MR_STAGE_A_CELL_CAPS.maxRepeatsPerCell,
    providerToolCallsPerResponse:
      GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
  } as const;
})();

export type GlobalMrStageAExecutionKind = GlobalMrStageAProductPath;

export type GlobalMrStageACell = {
  campaignId: string;
  stage: "A";
  workloadId: GlobalMrStageAWorkloadId;
  scenarioId: string;
  scenarioVersion: typeof NORA_EVAL_GLOBAL_CATALOG_VERSION;
  model: GlobalMrStageAModelId;
  reasoningEffort: OpenAiReasoningEffort;
  runIndex: number;
  isSelectiveRepeat: boolean;
  /** True for Astra Stage A challenger cells. */
  isChallenger: boolean;
  /** False for Astra ONE-SHOT challenger cells. */
  selectiveRepeatEligible: boolean;
  executionKind: GlobalMrStageAExecutionKind;
  attachHostedWebSearch: boolean;
  cell: CampaignCellConfig;
};

export type GlobalMrStageABaseCellPlanEntry = {
  model: GlobalMrStageAModelId;
  reasoningEffort: OpenAiReasoningEffort;
  workloadId: GlobalMrStageAWorkloadId;
  isChallenger: boolean;
  selectiveRepeatEligible: boolean;
};

/**
 * Shared base-cell plan — single SoT for matrix builder + envelope derivation.
 * Primary Cartesian product + explicit Astra medium×6 challenger (NOT full 4×3×6).
 */
export function buildGlobalMrStageABaseCellPlan(): GlobalMrStageABaseCellPlanEntry[] {
  const plan: GlobalMrStageABaseCellPlanEntry[] = [];
  for (const model of GLOBAL_MR_STAGE_A_PRIMARY_MODELS) {
    for (const reasoningEffort of GLOBAL_MR_STAGE_A_EFFORTS) {
      for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
        plan.push({
          model,
          reasoningEffort,
          workloadId,
          isChallenger: false,
          selectiveRepeatEligible: true,
        });
      }
    }
  }
  for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
    plan.push({
      model: GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.modelId,
      reasoningEffort: GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.reasoningEffort,
      workloadId,
      isChallenger: true,
      selectiveRepeatEligible: false,
    });
  }
  if (plan.length !== GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells) {
    throw new Error(
      `GLOBAL_MR_STAGE_A_BASE_PLAN_SIZE_INVALID: expected ${GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells}, got ${plan.length}`,
    );
  }
  return plan;
}

export type GlobalMrStageAStopReason =
  | "NONE"
  | "HARD_USD_CAP"
  | "SOFT_USD_REVIEW"
  | "MODEL_INVOCATION_CAP"
  | "HOSTED_CAP"
  | "AGGREGATE_CAP"
  | "UNSUPPORTED_CELL"
  | "CAMPAIGN_STOP"
  | "EXECUTOR_DENIED";

/** Per-cell denial — never latches campaign-wide stop. */
export type GlobalMrStageACellDenialReason =
  | "SELECTIVE_REPEAT_POOL_EXHAUSTED"
  | "SELECTIVE_REPEAT_DENIED"
  | "RUN_INDEX_INVALID";

export type GlobalMrStageAExecutorResult = {
  passFail: PassFail;
  failureClass: FailureClass;
  rawSummary: string;
  usage: RunEvidence["usage"];
  scorers?: RunEvidence["scorers"];
  productObservation?: Record<string, unknown>;
  /**
   * DIAGNOSTIC ONLY — not enforcement authority.
   * Driver compares against canonical NoraCampaignBudget deltas when present.
   */
  reportedModelInvocationsConsumed?: number;
  reportedHostedOperationsConsumed?: number;
};

export type GlobalMrStageAExecutor = (
  cell: GlobalMrStageACell,
  ctx: {
    manifest: CapabilityManifest;
    budget: BudgetTracker;
    campaignBudget: NoraCampaignBudget;
    stop: () => GlobalMrStageAStopReason;
  },
) => Promise<GlobalMrStageAExecutorResult>;

export function globalMrStageABaseCellKey(cell: {
  model: string;
  reasoningEffort: string;
  workloadId: string;
  scenarioId: string;
  scenarioVersion?: string;
}): string {
  const catalog = cell.scenarioVersion ?? NORA_EVAL_GLOBAL_CATALOG_VERSION;
  return `${cell.model}|${cell.reasoningEffort}|${cell.workloadId}|${cell.scenarioId}|${catalog}`;
}

export function buildGlobalMrStageAMatrix(input: {
  campaignId: string;
}): GlobalMrStageACell[] {
  const plans = buildGlobalMrStageAWorkloadCallPlans();
  const cells: GlobalMrStageACell[] = [];
  for (const entry of buildGlobalMrStageABaseCellPlan()) {
    const scenarioId = GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS[entry.workloadId];
    const plan = plans[entry.workloadId];
    const executionKind = plan.productPath;
    const cellConfig: CampaignCellConfig = {
      model: entry.model,
      reasoningEffort: entry.reasoningEffort,
      scenarioId,
      scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
      runIndex: 0,
      campaignId: input.campaignId,
      tier: "R2",
      sourceSet: entry.workloadId === "W-Sources" ? "E" : "C",
      toolSet: entry.workloadId === "W-Sources" ? "f1_tools" : "none",
    };
    cells.push({
      campaignId: input.campaignId,
      stage: "A",
      workloadId: entry.workloadId,
      scenarioId,
      scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
      model: entry.model,
      reasoningEffort: entry.reasoningEffort,
      runIndex: 0,
      isSelectiveRepeat: false,
      isChallenger: entry.isChallenger,
      selectiveRepeatEligible: entry.selectiveRepeatEligible,
      executionKind,
      attachHostedWebSearch: entry.workloadId === "W-Sources",
      cell: cellConfig,
    });
  }
  if (cells.length !== GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells) {
    throw new Error(
      `GLOBAL_MR_STAGE_A_MATRIX_SIZE_INVALID: expected ${GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells}, got ${cells.length}`,
    );
  }
  return cells;
}

export function assertGlobalMrStageAMatrixInvariants(
  cells: GlobalMrStageACell[],
): { ok: boolean; issues: string[] } {
  const plans = buildGlobalMrStageAWorkloadCallPlans();
  const issues: string[] = [];
  const expected = GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells;
  if (cells.length !== expected) issues.push(`size=${cells.length}`);
  const primary = cells.filter((c) => !c.isChallenger);
  const challengers = cells.filter((c) => c.isChallenger);
  if (primary.length !== GLOBAL_MR_STAGE_A_CELL_CAPS.primaryBaseCells) {
    issues.push(`primary=${primary.length}`);
  }
  if (challengers.length !== GLOBAL_MR_STAGE_A_CELL_CAPS.astraChallengerCells) {
    issues.push(`astra=${challengers.length}`);
  }
  const keys = new Set<string>();
  for (const c of cells) {
    if (c.scenarioVersion !== NORA_EVAL_GLOBAL_CATALOG_VERSION) {
      issues.push(`catalog:${c.scenarioId}`);
    }
    if (c.reasoningEffort === ("minimal" as OpenAiReasoningEffort)) {
      issues.push(`minimal:${c.scenarioId}`);
    }
    if (c.executionKind !== plans[c.workloadId].productPath) {
      issues.push(`path-mismatch:${c.workloadId}`);
    }
    if (
      c.workloadId === "W-Sources" &&
      (c.executionKind !== "mw6_governed" || !c.attachHostedWebSearch)
    ) {
      issues.push(`sources-routing:${c.model}/${c.reasoningEffort}`);
    }
    if (c.workloadId !== "W-Sources" && c.attachHostedWebSearch) {
      issues.push(`hosted-default:${c.workloadId}`);
    }
    if (c.isChallenger) {
      if (c.model !== GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.modelId) {
        issues.push(`challenger-model:${c.model}`);
      }
      if (c.reasoningEffort !== GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.reasoningEffort) {
        issues.push(`challenger-effort:${c.reasoningEffort}`);
      }
      if (c.selectiveRepeatEligible) {
        issues.push(`challenger-repeat-eligible:${c.workloadId}`);
      }
    } else if (!c.selectiveRepeatEligible) {
      issues.push(`primary-not-repeat-eligible:${c.workloadId}`);
    }
    const key = `${c.model}|${c.reasoningEffort}|${c.workloadId}`;
    if (keys.has(key)) issues.push(`dup:${key}`);
    keys.add(key);
    const scenario = getScenario(c.scenarioId, NORA_EVAL_GLOBAL_CATALOG_VERSION);
    if (!scenario) issues.push(`missing-scenario:${c.scenarioId}`);
  }
  if (keys.size !== expected) issues.push(`unique=${keys.size}`);
  return { ok: issues.length === 0, issues };
}

export type GlobalMrStageADriverState = {
  campaignId: string;
  manifest: CapabilityManifest;
  budget: BudgetTracker;
  campaignBudget: NoraCampaignBudget;
  derivedEnvelope: GlobalMrStageADerivedEnvelope;
  /** Mirror of canonical consumedModelInvocations (Evidence). */
  modelInvocations: number;
  hostedOperations: number;
  aggregateRealCalls: number;
  selectiveRepeatsUsed: number;
  baseCellsWithRepeatConsumed: Set<string>;
  softReviewRequired: boolean;
  softReviewCleared: boolean;
  softReviewAcknowledgments: string[];
  stopReason: GlobalMrStageAStopReason;
  lastCellDenialReason: GlobalMrStageACellDenialReason | null;
  evidence: RunEvidence[];
  cellsCompleted: number;
};

export function createGlobalMrStageADriver(input: {
  campaignId: string;
  retrievedAtIso?: string;
  carryInUsd?: number;
}): GlobalMrStageADriverState {
  const derived = deriveGlobalMrStageAEnvelope();
  // Option C may be DETERMINISTIC PROVEN while usdFeasibility.ok=false.
  // Do NOT raise hardCap here — REAL authorization still requires Morris budget decision.
  const manifest = buildGlobalModelReasoningCapabilityManifest(
    input.retrievedAtIso ?? new Date().toISOString(),
  );
  const campaignBudget = acquireNoraCampaignBudget({
    campaignId: input.campaignId,
    maxModelInvocations: derived.maxModelInvocations,
    maxHostedWebOperations: derived.maxHostedWebOperations,
    maxAggregateRealCalls: derived.maxAggregateRealCalls,
    hostedHardCapCapability: "provider_max_tool_calls",
  });
  const budget = new BudgetTracker(
    GLOBAL_MR_STAGE_A_USD_POLICY,
    input.carryInUsd ?? 0,
  );
  const softArmed =
    budget.softStopTriggered ||
    budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.softStopUsd;
  return {
    campaignId: input.campaignId,
    manifest,
    budget,
    campaignBudget,
    derivedEnvelope: derived,
    modelInvocations: 0,
    hostedOperations: 0,
    aggregateRealCalls: 0,
    selectiveRepeatsUsed: 0,
    baseCellsWithRepeatConsumed: new Set(),
    softReviewRequired: softArmed,
    softReviewCleared: false,
    softReviewAcknowledgments: [],
    stopReason: softArmed ? "SOFT_USD_REVIEW" : "NONE",
    lastCellDenialReason: null,
    evidence: [],
    cellsCompleted: 0,
  };
}

export function evaluateGlobalMrStageAStop(
  state: GlobalMrStageADriverState,
): GlobalMrStageAStopReason {
  if (
    state.stopReason !== "NONE" &&
    state.stopReason !== "SOFT_USD_REVIEW"
  ) {
    return state.stopReason;
  }
  const snap = campaignBudgetSnapshot(state.campaignBudget);
  if (
    state.budget.hardStopTriggered ||
    state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd
  ) {
    return "HARD_USD_CAP";
  }
  if (snap.consumedModelInvocations >= state.derivedEnvelope.maxModelInvocations) {
    return "MODEL_INVOCATION_CAP";
  }
  if (
    snap.consumedHostedWebOperations >=
    state.derivedEnvelope.maxHostedWebOperations
  ) {
    return "HOSTED_CAP";
  }
  if (
    snap.consumedAggregateRealCalls >=
    state.derivedEnvelope.maxAggregateRealCalls
  ) {
    return "AGGREGATE_CAP";
  }
  if (state.softReviewRequired) return "SOFT_USD_REVIEW";
  return "NONE";
}

export function acknowledgeGlobalMrStageASoftReview(
  state: GlobalMrStageADriverState,
  reviewRef: string,
): { ok: true } | { ok: false; reason: string } {
  const ref = reviewRef.trim();
  if (!ref) return { ok: false, reason: "review_ref_required" };
  if (!state.softReviewRequired) {
    return { ok: false, reason: "no_soft_review_pending" };
  }
  if (
    state.budget.hardStopTriggered ||
    state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd
  ) {
    return { ok: false, reason: "hard_cap_not_resumable" };
  }
  state.softReviewAcknowledgments.push(ref);
  state.softReviewRequired = false;
  state.softReviewCleared = true;
  if (state.stopReason === "SOFT_USD_REVIEW") state.stopReason = "NONE";
  return { ok: true };
}

export function canScheduleSelectiveRepeat(
  state: GlobalMrStageADriverState,
  baseCell: GlobalMrStageACell,
): { allowed: boolean; reason?: GlobalMrStageACellDenialReason | string } {
  if (baseCell.isSelectiveRepeat) {
    return { allowed: false, reason: "already_a_repeat" };
  }
  if (baseCell.isChallenger || !baseCell.selectiveRepeatEligible) {
    return { allowed: false, reason: "SELECTIVE_REPEAT_DENIED" };
  }
  if (baseCell.runIndex >= 1) {
    return { allowed: false, reason: "cell_already_repeated" };
  }
  const key = globalMrStageABaseCellKey(baseCell);
  if (state.baseCellsWithRepeatConsumed.has(key)) {
    return { allowed: false, reason: "base_cell_repeat_already_consumed" };
  }
  if (
    state.selectiveRepeatsUsed >=
    state.derivedEnvelope.maxSelectiveRepeats
  ) {
    return { allowed: false, reason: "SELECTIVE_REPEAT_POOL_EXHAUSTED" };
  }
  return { allowed: true };
}

export function materializeSelectiveRepeat(
  baseCell: GlobalMrStageACell,
): GlobalMrStageACell {
  if (baseCell.runIndex > 0 || baseCell.isSelectiveRepeat) {
    throw new Error(
      "SELECTIVE_REPEAT_RUN_INDEX_INVALID: runIndex>0 cannot be re-materialized",
    );
  }
  if (baseCell.isChallenger || !baseCell.selectiveRepeatEligible) {
    throw new Error(
      "SELECTIVE_REPEAT_DENIED: Astra Stage A challenger cells are ONE-SHOT",
    );
  }
  return {
    ...baseCell,
    runIndex: 1,
    isSelectiveRepeat: true,
    cell: { ...baseCell.cell, runIndex: 1 },
  };
}

function toRunEvidence(
  cell: GlobalMrStageACell,
  result: GlobalMrStageAExecutorResult,
  cumulativeSpendUsd: number,
  startedAt: string,
  finishedAt: string,
  softReviewRefs: string[],
  canonicalDelta: {
    model: number;
    hosted: number;
    aggregate: number;
    reportedMismatch: boolean;
  },
): RunEvidence {
  return {
    campaignId: cell.campaignId,
    cell: cell.cell,
    startedAt,
    finishedAt,
    passFail: result.passFail,
    failureClass: result.failureClass,
    scorers: result.scorers ?? [],
    epistemicLabelsObserved: [],
    productPath:
      cell.executionKind === "f2_product"
        ? "f2"
        : cell.executionKind === "mw6_governed"
          ? "f1"
          : "none",
    productPathAttempted:
      cell.executionKind === "f2_product" ? "f2" : undefined,
    productPathSucceeded:
      cell.executionKind === "f2_product"
        ? result.passFail === "PASS"
        : undefined,
    rawSummary: result.rawSummary,
    usage: result.usage,
    cumulativeSpendUsd,
    redacted: true,
    evidenceRefs: [
      `catalog:${cell.scenarioVersion}`,
      `contract:${GLOBAL_MR_STAGE_A_CONTRACT_VERSION}`,
      `workload:${cell.workloadId}`,
      `stage:A`,
      `model:${cell.model}`,
      `effort:${cell.reasoningEffort}`,
      `executionKind:${cell.executionKind}`,
      `challenger:${cell.isChallenger}`,
      `selectiveRepeatEligible:${cell.selectiveRepeatEligible}`,
      `canonicalDeltaModel:${canonicalDelta.model}`,
      `canonicalDeltaHosted:${canonicalDelta.hosted}`,
      ...softReviewRefs.map((r) => `soft-review-ack:${r}`),
    ],
    productObservation: {
      ...(result.productObservation ?? {}),
      executionKind: cell.executionKind,
      isChallenger: cell.isChallenger,
      selectiveRepeatEligible: cell.selectiveRepeatEligible,
      canonicalDelta,
      reportedModelInvocationsConsumed:
        result.reportedModelInvocationsConsumed ?? null,
      reportedHostedOperationsConsumed:
        result.reportedHostedOperationsConsumed ?? null,
    },
  };
}

export async function runGlobalMrStageACell(input: {
  state: GlobalMrStageADriverState;
  cell: GlobalMrStageACell;
  executor: GlobalMrStageAExecutor;
}): Promise<{
  state: GlobalMrStageADriverState;
  evidence: RunEvidence | null;
  stopped: boolean;
  cellDenied?: GlobalMrStageACellDenialReason;
}> {
  const state = input.state;
  state.lastCellDenialReason = null;

  if (state.softReviewRequired) {
    state.stopReason = "SOFT_USD_REVIEW";
    return { state, evidence: null, stopped: true };
  }

  const stopNow = evaluateGlobalMrStageAStop(state);
  if (stopNow !== "NONE") {
    state.stopReason = stopNow;
    return { state, evidence: null, stopped: true };
  }

  if (input.cell.runIndex > 1) {
    state.lastCellDenialReason = "RUN_INDEX_INVALID";
    return {
      state,
      evidence: null,
      stopped: true,
      cellDenied: "RUN_INDEX_INVALID",
    };
  }

  if (input.cell.isSelectiveRepeat) {
    const baseIdentity: GlobalMrStageACell = {
      ...input.cell,
      runIndex: 0,
      isSelectiveRepeat: false,
      cell: { ...input.cell.cell, runIndex: 0 },
    };
    const gate = canScheduleSelectiveRepeat(state, baseIdentity);
    if (!gate.allowed) {
      const denial: GlobalMrStageACellDenialReason =
        gate.reason === "SELECTIVE_REPEAT_POOL_EXHAUSTED"
          ? "SELECTIVE_REPEAT_POOL_EXHAUSTED"
          : "SELECTIVE_REPEAT_DENIED";
      state.lastCellDenialReason = denial;
      // Per-cell only — do NOT latch campaign-wide stopReason.
      return { state, evidence: null, stopped: true, cellDenied: denial };
    }
  }

  const cellCheck = validateCellAgainstManifest({
    manifest: state.manifest,
    modelId: input.cell.model,
    reasoningEffort: input.cell.reasoningEffort,
  });
  if (!cellCheck.ok) {
    const startedAt = new Date().toISOString();
    const evidence = toRunEvidence(
      input.cell,
      {
        passFail: "FAIL",
        failureClass: (cellCheck.failureClass ?? "CONFIG") as FailureClass,
        rawSummary: cellCheck.detail,
        usage: null,
      },
      state.budget.cumulativeUsd,
      startedAt,
      new Date().toISOString(),
      state.softReviewAcknowledgments,
      { model: 0, hosted: 0, aggregate: 0, reportedMismatch: false },
    );
    state.evidence.push(evidence);
    state.stopReason = "UNSUPPORTED_CELL";
    return { state, evidence, stopped: true };
  }

  const before = campaignBudgetSnapshot(state.campaignBudget);
  const startedAt = new Date().toISOString();
  const result = await input.executor(input.cell, {
    manifest: state.manifest,
    budget: state.budget,
    campaignBudget: state.campaignBudget,
    stop: () => evaluateGlobalMrStageAStop(state),
  });
  const finishedAt = new Date().toISOString();
  const after = campaignBudgetSnapshot(state.campaignBudget);

  const deltaModel =
    after.consumedModelInvocations - before.consumedModelInvocations;
  const deltaHosted =
    after.consumedHostedWebOperations - before.consumedHostedWebOperations;
  const deltaAgg =
    after.consumedAggregateRealCalls - before.consumedAggregateRealCalls;

  const reportedMismatch =
    (result.reportedModelInvocationsConsumed != null &&
      result.reportedModelInvocationsConsumed !== deltaModel) ||
    (result.reportedHostedOperationsConsumed != null &&
      result.reportedHostedOperationsConsumed !== deltaHosted);

  // Canonical SoT mirrors — never trust executor-reported counts for enforcement.
  state.modelInvocations = after.consumedModelInvocations;
  state.hostedOperations = after.consumedHostedWebOperations;
  state.aggregateRealCalls = after.consumedAggregateRealCalls;

  if (input.cell.isSelectiveRepeat) {
    state.selectiveRepeatsUsed += 1;
    state.baseCellsWithRepeatConsumed.add(
      globalMrStageABaseCellKey({
        model: input.cell.model,
        reasoningEffort: input.cell.reasoningEffort,
        workloadId: input.cell.workloadId,
        scenarioId: input.cell.scenarioId,
        scenarioVersion: input.cell.scenarioVersion,
      }),
    );
  }
  state.cellsCompleted += 1;

  const evidence = toRunEvidence(
    input.cell,
    result,
    state.budget.cumulativeUsd,
    startedAt,
    finishedAt,
    state.softReviewAcknowledgments,
    {
      model: deltaModel,
      hosted: deltaHosted,
      aggregate: deltaAgg,
      reportedMismatch,
    },
  );
  state.evidence.push(evidence);

  if (
    !state.softReviewCleared &&
    (state.budget.softStopTriggered ||
      state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.softStopUsd)
  ) {
    state.softReviewRequired = true;
    state.stopReason = "SOFT_USD_REVIEW";
    return { state, evidence, stopped: true };
  }

  const afterStop = evaluateGlobalMrStageAStop(state);
  if (afterStop !== "NONE") {
    state.stopReason = afterStop;
    return { state, evidence, stopped: true };
  }
  return { state, evidence, stopped: false };
}
