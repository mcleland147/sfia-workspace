/**
 * P5-S01 — Strategy-first bounded cognitive routing policy.
 *
 * Pure / non-persistent / non-authoritative. Not a RouterService.
 * Pipeline (P4 contract — Correction Pass 01):
 *   candidate generation
 *   → Quality Floor filter
 *   → provider capability filter
 *   → optional budget filter among sufficient/compatible
 *   → minimum-sufficient selection.
 *
 * Nominal target cohort: gpt-6-luna · gpt-6.1-sol · gpt-6-astra.
 * GPT-5.6 is excluded from nominal TARGET routing (historical evidence FREEZE).
 */
import { createHash, randomUUID } from "node:crypto";
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import {
  buildP5TargetCapabilityManifest,
  estimateCostUsd,
  modelCapabilitySet,
  type CapabilityManifest,
} from "@/lib/nora-eval/capabilityBudget";
import type {
  CognitiveStrategyDecision,
  CognitiveWorkloadSignals,
} from "./cognitiveWorkloadPolicy";

export const P5_COGNITIVE_ROUTING_POLICY_VERSION = "p5-s01-routing-v1" as const;

export const P5_TARGET_MODEL_COHORT = [
  "gpt-6-luna",
  "gpt-6.1-sol",
  "gpt-6-astra",
] as const;

export type P5TargetModelId = (typeof P5_TARGET_MODEL_COHORT)[number];

export const P5_REASONING_MODE_NOMINAL = "standard" as const;

/** Max cognitive escalations per stable cognitive task (P4). */
export const P5_MAX_ESCALATIONS_PER_TASK = 1 as const;

const EFFORT_RANK: Record<OpenAiReasoningEffort, number> = {
  none: 0,
  minimal: 0,
  low: 1,
  medium: 2,
  high: 3,
  xhigh: 4,
  max: 5,
};

/** Relative model capability rank for quality-floor comparison (not authority). */
const MODEL_CAPABILITY_RANK: Record<P5TargetModelId, number> = {
  "gpt-6-luna": 1,
  "gpt-6.1-sol": 2,
  "gpt-6-astra": 3,
};

export type CognitiveQualityFloor = {
  /** Minimum model capability rank (1=Luna … 3=Astra). */
  minModelRank: number;
  /** Minimum reasoning effort rank. */
  minEffortRank: number;
  /** Categorical label for reconstructibility. */
  category:
    | "routine-sufficient"
    | "focused-sufficient"
    | "deep-sufficient"
    | "high-assurance-sufficient";
  reasonCodes: string[];
};

export type CognitiveRoutingConfig = {
  modelId: P5TargetModelId;
  reasoningEffort: OpenAiReasoningEffort;
};

export type CognitiveRoutingDecision = {
  ok: true;
  routingDecisionId: string;
  cognitiveTaskId: string;
  strategyClass: CognitiveStrategyDecision["strategyClass"];
  qualityFloor: CognitiveQualityFloor;
  eligibleConfigs: CognitiveRoutingConfig[];
  selectedModel: P5TargetModelId;
  selectedReasoningEffort: OpenAiReasoningEffort;
  reasoningMode: typeof P5_REASONING_MODE_NOMINAL;
  reasonCodes: string[];
  escalationEligible: boolean;
  maxEscalations: typeof P5_MAX_ESCALATIONS_PER_TASK;
  providerSnapshotIdentity: string;
  policyVersion: typeof P5_COGNITIVE_ROUTING_POLICY_VERSION;
  estimatedCostUsdHint: number | null;
};

export type CognitiveRoutingLimitation = {
  ok: false;
  routingDecisionId: string;
  cognitiveTaskId: string;
  strategyClass: CognitiveStrategyDecision["strategyClass"];
  qualityFloor: CognitiveQualityFloor;
  reasonCodes: string[];
  policyVersion: typeof P5_COGNITIVE_ROUTING_POLICY_VERSION;
  providerSnapshotIdentity: string;
};

export type DecideCognitiveRoutingInput = {
  strategy: CognitiveStrategyDecision;
  /** Stable cognitive task identity — prefer logicalTurnId / correlation. */
  cognitiveTaskId: string;
  /** Optional workload signals for quality-floor reasons (already in strategy). */
  signals?: CognitiveWorkloadSignals;
  /** Override manifest (tests). Default: P5 target cohort snapshot. */
  manifest?: CapabilityManifest;
  /** Optional budget ceiling — never silently downgrades below quality floor. */
  maxBudgetUsd?: number | null;
  /** Prior escalations already consumed for this task. */
  escalationsUsed?: number;
};

function signalRank(
  value: CognitiveWorkloadSignals[keyof CognitiveWorkloadSignals] | undefined,
): number {
  if (value === "high") return 3;
  if (value === "medium") return 2;
  if (value === "low") return 1;
  return 0; // unknown
}

/**
 * Derive categorical Quality Floor from strategy + signals.
 * Explainable / reconstructible — NOT a 0–100 score.
 */
export function deriveQualityFloor(
  strategy: CognitiveStrategyDecision,
  signals?: CognitiveWorkloadSignals,
): CognitiveQualityFloor {
  const s = signals ?? strategy.normalizedSignals;
  const reasonCodes: string[] = [
    `strategy:${strategy.strategyClass}`,
    `reasoningDemand:${strategy.reasoningDemand}`,
  ];

  let minModelRank = 1;
  let minEffortRank = EFFORT_RANK[strategy.reasoningDemand] ?? 1;
  let category: CognitiveQualityFloor["category"] = "routine-sufficient";

  switch (strategy.strategyClass) {
    case "Routine":
      category = "routine-sufficient";
      minModelRank = 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.none);
      break;
    case "Focused":
      category = "focused-sufficient";
      minModelRank = 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.low);
      if (signalRank(s.verificationNeed) >= 2 || signalRank(s.ambiguity) >= 2) {
        minEffortRank = Math.max(minEffortRank, EFFORT_RANK.medium);
        reasonCodes.push("focused:elevated-verification-or-ambiguity");
      }
      break;
    case "Deep":
      category = "deep-sufficient";
      // Deep may still use Luna at high effort; Sol is preferred floor when rigor high.
      minModelRank =
        signalRank(s.rigorCriticality) >= 3 ||
        signalRank(s.verificationNeed) >= 3 ||
        signalRank(s.contradictionRisk) >= 3
          ? 2
          : 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.medium);
      reasonCodes.push(
        minModelRank >= 2
          ? "deep:sol-floor-for-high-rigor"
          : "deep:luna-eligible-at-sufficient-effort",
      );
      break;
    case "High-Assurance":
      category = "high-assurance-sufficient";
      minModelRank = 2; // Sol minimum — Astra optional among sufficient
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.high);
      reasonCodes.push("high-assurance:sol-or-stronger");
      break;
  }

  if (signalRank(s.contradictionRisk) >= 3) {
    minModelRank = Math.max(minModelRank, 2);
    reasonCodes.push("contradictionRisk:high→sol-floor");
  }
  if (strategy.criticalChallengeArmed) {
    minEffortRank = Math.max(minEffortRank, EFFORT_RANK.high);
    reasonCodes.push("criticalChallengeArmed→effort-floor-high");
  }

  return {
    minModelRank,
    minEffortRank,
    category,
    reasonCodes,
  };
}

function meetsQualityFloor(
  config: CognitiveRoutingConfig,
  floor: CognitiveQualityFloor,
): boolean {
  const modelRank = MODEL_CAPABILITY_RANK[config.modelId];
  const effortRank = EFFORT_RANK[config.reasoningEffort] ?? -1;
  return modelRank >= floor.minModelRank && effortRank >= floor.minEffortRank;
}

/**
 * Candidate generation: Strategy envelope × target cohort, NOT fixed Strategy→Model.
 * Model × effort remain independent. Quality Floor applies next (before provider).
 */
export function generateCandidateConfigs(
  strategy: CognitiveStrategyDecision,
): CognitiveRoutingConfig[] {
  const efforts = strategy.candidateEnvelope;
  const configs: CognitiveRoutingConfig[] = [];
  for (const modelId of P5_TARGET_MODEL_COHORT) {
    for (const reasoningEffort of efforts) {
      configs.push({ modelId, reasoningEffort });
    }
  }
  return configs;
}

function filterByQualityFloor(
  configs: CognitiveRoutingConfig[],
  floor: CognitiveQualityFloor,
): { sufficient: CognitiveRoutingConfig[]; rejected: string[] } {
  const sufficient: CognitiveRoutingConfig[] = [];
  const rejected: string[] = [];
  for (const c of configs) {
    if (meetsQualityFloor(c, floor)) {
      sufficient.push(c);
    } else {
      rejected.push(`below-quality-floor:${c.modelId}/${c.reasoningEffort}`);
    }
  }
  return { sufficient, rejected };
}

function filterByProviderCapability(
  configs: CognitiveRoutingConfig[],
  manifest: CapabilityManifest,
): { eligible: CognitiveRoutingConfig[]; rejected: string[] } {
  const eligible: CognitiveRoutingConfig[] = [];
  const rejected: string[] = [];
  for (const c of configs) {
    const supported = modelCapabilitySet(manifest, c.modelId);
    if (!supported) {
      rejected.push(`unknown-model:${c.modelId}`);
      continue;
    }
    if (c.reasoningEffort === "minimal") {
      rejected.push(`unsupported-effort:${c.modelId}/minimal`);
      continue;
    }
    if (!supported.includes(c.reasoningEffort)) {
      rejected.push(`unsupported-effort:${c.modelId}/${c.reasoningEffort}`);
      continue;
    }
    // Nominal cohort allowlist — GPT-5.6 never appears here.
    if (
      !(P5_TARGET_MODEL_COHORT as readonly string[]).includes(c.modelId)
    ) {
      rejected.push(`outside-target-cohort:${c.modelId}`);
      continue;
    }
    eligible.push(c);
  }
  return { eligible, rejected };
}

function sortMinimumSufficient(
  configs: CognitiveRoutingConfig[],
  manifest: CapabilityManifest,
): CognitiveRoutingConfig[] {
  return [...configs].sort((a, b) => {
    const costA = estimateCostUsd({
      manifest,
      modelId: a.modelId,
      inputTokens: 4000,
      outputTokens: 1200,
    });
    const costB = estimateCostUsd({
      manifest,
      modelId: b.modelId,
      inputTokens: 4000,
      outputTokens: 1200,
    });
    if (costA !== costB) return costA - costB;
    const modelDiff =
      MODEL_CAPABILITY_RANK[a.modelId] - MODEL_CAPABILITY_RANK[b.modelId];
    if (modelDiff !== 0) return modelDiff;
    return (
      (EFFORT_RANK[a.reasoningEffort] ?? 0) -
      (EFFORT_RANK[b.reasoningEffort] ?? 0)
    );
  });
}

function providerSnapshotIdentity(manifest: CapabilityManifest): string {
  // Identity is content-stable: exclude retrievedAt (call-time) so the same
  // cohort/capability set hashes identically across turns.
  const payload = JSON.stringify({
    sourceName: manifest.sourceName,
    models: manifest.models.map((m) => ({
      id: m.modelId,
      efforts: m.reasoningEfforts,
      inputUsdPerMTok: m.inputUsdPerMTok,
      outputUsdPerMTok: m.outputUsdPerMTok,
    })),
    allowlist: manifest.campaignAllowlist,
  });
  return createHash("sha256").update(payload).digest("hex").slice(0, 16);
}

/**
 * Decide nominal Product cognitive routing.
 * Fail-closed when no sufficient config remains — never silently downgrade.
 */
export function decideCognitiveRouting(
  input: DecideCognitiveRoutingInput,
): CognitiveRoutingDecision | CognitiveRoutingLimitation {
  const routingDecisionId = randomUUID();
  const cognitiveTaskId = input.cognitiveTaskId.trim();
  if (!cognitiveTaskId) {
    throw new Error("COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID");
  }

  const manifest =
    input.manifest ??
    buildP5TargetCapabilityManifest(new Date().toISOString());
  const snapshotId = providerSnapshotIdentity(manifest);
  const qualityFloor = deriveQualityFloor(input.strategy, input.signals);

  // P4 order: candidates → Quality Floor → provider capability → FinOps.
  const candidates = generateCandidateConfigs(input.strategy);
  const {
    sufficient: qualitySufficient,
    rejected: qualityRejected,
  } = filterByQualityFloor(candidates, qualityFloor);

  const reasonCodes = [
    ...qualityFloor.reasonCodes,
    `candidates:${candidates.length}`,
    `qualitySufficient:${qualitySufficient.length}`,
    `qualityRejected:${qualityRejected.length}`,
    ...qualityRejected.slice(0, 8).map((r) => `qualityRejected:${r}`),
  ];

  if (qualitySufficient.length === 0) {
    return {
      ok: false,
      routingDecisionId,
      cognitiveTaskId,
      strategyClass: input.strategy.strategyClass,
      qualityFloor,
      reasonCodes: [
        ...reasonCodes,
        "NO_SUFFICIENT_CONFIG",
        "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
      ],
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      providerSnapshotIdentity: snapshotId,
    };
  }

  const {
    eligible: providerCompatible,
    rejected: providerRejected,
  } = filterByProviderCapability(qualitySufficient, manifest);

  reasonCodes.push(
    `providerCompatible:${providerCompatible.length}`,
    `providerRejected:${providerRejected.length}`,
    ...providerRejected.slice(0, 8).map((r) => `providerRejected:${r}`),
  );

  if (providerCompatible.length === 0) {
    return {
      ok: false,
      routingDecisionId,
      cognitiveTaskId,
      strategyClass: input.strategy.strategyClass,
      qualityFloor,
      reasonCodes: [
        ...reasonCodes,
        "PROVIDER_INCOMPATIBLE_WITH_QUALITY_FLOOR",
        "NO_SUFFICIENT_CONFIG",
        "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
      ],
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      providerSnapshotIdentity: snapshotId,
    };
  }

  const ordered = sortMinimumSufficient(providerCompatible, manifest);
  let selected = ordered[0]!;
  let budgetEligibleCount = ordered.length;

  // Budget may eliminate higher-cost options only among quality+provider-sufficient.
  if (input.maxBudgetUsd != null && Number.isFinite(input.maxBudgetUsd)) {
    const withinBudget = ordered.filter((c) => {
      const est = estimateCostUsd({
        manifest,
        modelId: c.modelId,
        inputTokens: 4000,
        outputTokens: 1200,
      });
      return est <= input.maxBudgetUsd!;
    });
    budgetEligibleCount = withinBudget.length;
    reasonCodes.push(`budgetEligible:${budgetEligibleCount}`);
    if (withinBudget.length === 0) {
      return {
        ok: false,
        routingDecisionId,
        cognitiveTaskId,
        strategyClass: input.strategy.strategyClass,
        qualityFloor,
        reasonCodes: [
          ...reasonCodes,
          "BUDGET_EXCLUDES_ALL_SUFFICIENT",
          "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
        ],
        policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
        providerSnapshotIdentity: snapshotId,
      };
    }
    selected = withinBudget[0]!;
    reasonCodes.push("budget:filtered-among-sufficient");
  }

  const escalationsUsed = input.escalationsUsed ?? 0;
  const escalationEligible = escalationsUsed < P5_MAX_ESCALATIONS_PER_TASK;

  const estimatedCostUsdHint = estimateCostUsd({
    manifest,
    modelId: selected.modelId,
    inputTokens: 4000,
    outputTokens: 1200,
  });

  reasonCodes.push(
    `selected:${selected.modelId}/${selected.reasoningEffort}`,
    "reasoningMode:standard",
    "finops:among-sufficient-only",
    "pipeline:quality→provider→finops",
  );

  return {
    ok: true,
    routingDecisionId,
    cognitiveTaskId,
    strategyClass: input.strategy.strategyClass,
    qualityFloor,
    eligibleConfigs: ordered,
    selectedModel: selected.modelId,
    selectedReasoningEffort: selected.reasoningEffort,
    reasoningMode: P5_REASONING_MODE_NOMINAL,
    reasonCodes,
    escalationEligible,
    maxEscalations: P5_MAX_ESCALATIONS_PER_TASK,
    providerSnapshotIdentity: snapshotId,
    policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
    estimatedCostUsdHint,
  };
}

/** True when model id is outside the P5 nominal target cohort. */
export function isOutsideP5TargetCohort(modelId: string): boolean {
  return !(P5_TARGET_MODEL_COHORT as readonly string[]).includes(modelId);
}
