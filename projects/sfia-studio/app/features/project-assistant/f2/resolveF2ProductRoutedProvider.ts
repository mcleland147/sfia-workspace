/**
 * P5-S05 — F2 Product cognitive routing alignment.
 *
 * ONE COGNITIVE SELECTION POLICY ≠ one function entry point.
 * F2 structured analyzeIntent reuses decideCognitiveStrategy + decideCognitiveRouting
 * without wrapping through runNoraCognitiveTurn.
 *
 * Pre-intent signals are factual-only (UNKNOWN ≠ LOW). No invented semantic workload.
 */

import {
  buildSignalsFromTurnContext,
  decideCognitiveRouting,
  decideCognitiveStrategy,
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  validateRuntimeReasoningCapability,
  type CognitiveRoutingDecision,
  type CognitiveStrategyDecision,
  type TurnWorkloadContext,
} from "@/lib/nora-cognitive-runtime";
import {
  createRoutedOpenAiConversationProvider,
  getConversationProviderOverrideForTests,
  isFakeConversationProviderForced,
  FakeConversationProvider,
  type ConversationProvider,
} from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability";
import { TechnicalError } from "@/lib/platform/ai/errors";

export const F2_COGNITIVE_PHASE = "f2_analyzeIntent" as const;

export type F2ProductRoutedProviderResolution = {
  provider: ConversationProvider;
  strategy: CognitiveStrategyDecision;
  routing: CognitiveRoutingDecision;
  policyVersion: typeof P5_COGNITIVE_ROUTING_POLICY_VERSION;
  cognitiveTaskId: string;
  /** Boundary substitution used for the call (Fake/override) — not production selection. */
  boundarySubstitution: boolean;
};

function emitF2CognitiveTelemetry(
  sink: EventSink | undefined,
  correlationId: string,
  strategy: CognitiveStrategyDecision,
  routing: CognitiveRoutingDecision,
): void {
  if (!sink) return;
  sink.emit({
    type: "COGNITIVE_STRATEGY_SELECTED",
    correlationId,
    detail: {
      phase: F2_COGNITIVE_PHASE,
      strategyClass: strategy.strategyClass,
      reasoningEffort: strategy.reasoningEffort,
      reasoningDemand: strategy.reasoningDemand,
      criticalChallengeArmed: strategy.criticalChallengeArmed,
      bootstrapUsed: strategy.bootstrapUsed,
      reasonCodes: strategy.reasonCodes,
      envelope: [...strategy.candidateEnvelope],
    },
  });
  sink.emit({
    type: "COGNITIVE_ROUTING_SELECTED",
    correlationId,
    detail: {
      phase: F2_COGNITIVE_PHASE,
      routingDecisionId: routing.routingDecisionId,
      cognitiveTaskId: routing.cognitiveTaskId,
      strategyClass: routing.strategyClass,
      selectedModel: routing.selectedModel,
      selectedEffort: routing.selectedReasoningEffort,
      reasoningMode: routing.reasoningMode,
      qualityFloor: {
        category: routing.qualityFloor.category,
        minModelRank: routing.qualityFloor.minModelRank,
        minEffortRank: routing.qualityFloor.minEffortRank,
        reasonCodes: routing.qualityFloor.reasonCodes,
      },
      reasonCodes: routing.reasonCodes,
      eligibleSummary: routing.eligibleConfigs.slice(0, 12).map((c) => ({
        modelId: c.modelId,
        reasoningEffort: c.reasoningEffort,
      })),
      escalationEligible: routing.escalationEligible,
      maxEscalations: routing.maxEscalations,
      providerCapabilitySnapshot: routing.providerSnapshotIdentity,
      routingPolicyVersion: routing.policyVersion,
      estimatedCostUsdHint: routing.estimatedCostUsdHint,
    },
  });
}

/**
 * Resolve F2 ConversationProvider under Product cognitiveRoutingPolicy.
 *
 * - Eval/explicit pin: caller supplies provider; this helper is not used.
 * - Fake / test override: still runs Strategy→Router for provenance; call uses boundary provider.
 * - Live Product: constructs OpenAI with router-selected model×effort (not OPENAI_MODEL).
 */
export function resolveF2ProductRoutedProvider(input: {
  turnContext: TurnWorkloadContext;
  /** Prefer logicalTurnId when present; else bounded phase task id. */
  cognitiveTaskId: string;
  correlationId: string;
  sink?: EventSink;
}): F2ProductRoutedProviderResolution {
  const cognitiveTaskId = input.cognitiveTaskId.trim();
  if (!cognitiveTaskId) {
    throw new TechnicalError(
      "CONFIG",
      "F2_COGNITIVE_TASK_ID_REQUIRED: Product F2 routing requires a stable cognitive task id.",
    );
  }

  const signals = buildSignalsFromTurnContext(input.turnContext);
  const strategy = decideCognitiveStrategy({
    signals,
    trustedSfiaProfile: null,
  });
  const routed = decideCognitiveRouting({
    strategy,
    cognitiveTaskId,
    signals: strategy.normalizedSignals,
  });
  if (!routed.ok) {
    throw new TechnicalError(
      "CONFIG",
      `P5 F2 cognitive routing: aucune configuration suffisante (quality floor). Codes: ${routed.reasonCodes.join(", ")}`,
    );
  }

  validateRuntimeReasoningCapability(
    routed.selectedModel,
    routed.selectedReasoningEffort,
  );

  emitF2CognitiveTelemetry(
    input.sink,
    input.correlationId,
    strategy,
    routed,
  );

  const override = getConversationProviderOverrideForTests();
  if (override) {
    return {
      provider: override,
      strategy,
      routing: routed,
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      cognitiveTaskId,
      boundarySubstitution: true,
    };
  }
  if (isFakeConversationProviderForced()) {
    return {
      provider: new FakeConversationProvider(),
      strategy,
      routing: routed,
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      cognitiveTaskId,
      boundarySubstitution: true,
    };
  }

  const provider = createRoutedOpenAiConversationProvider({
    model: routed.selectedModel,
    reasoningEffort: routed.selectedReasoningEffort,
  });

  return {
    provider,
    strategy,
    routing: routed,
    policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
    cognitiveTaskId,
    boundarySubstitution: false,
  };
}
