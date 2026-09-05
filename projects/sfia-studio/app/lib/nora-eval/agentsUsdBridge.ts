/**
 * Eval-only bridge: BudgetTracker USD ↔ native Agents usdAccounting hook.
 *
 * Semantics (honest):
 * - hardCapUsd = PRE-DISPATCH ESTIMATED / RESERVED AUTHORIZATION ENVELOPE
 * - NOT a guaranteed provider invoice ceiling
 * - observed estimate may exceed reserved after a response → Evidence + fail-close
 * - invoice = NOT OBSERVED
 */
import type {
  NoraAgentsUsdAccounting,
  NoraAgentsUsdSettleObservation,
  NoraAgentsUsdSettleResult,
} from "@/lib/nora-cognitive-runtime";
import {
  BudgetTracker,
  conservativePreCallEstimateUsd,
  estimateCostUsd,
  type CapabilityManifest,
} from "./capabilityBudget";

export type CreateEvalAgentsUsdAccountingInput = {
  budget: BudgetTracker;
  manifest: CapabilityManifest;
  modelId: string;
  assumedInputTokens?: number;
  assumedOutputTokens?: number;
};

export function createEvalAgentsUsdAccounting(
  input: CreateEvalAgentsUsdAccountingInput,
): NoraAgentsUsdAccounting {
  let turnReservedUsd = 0;
  let turnReservedInvocations = 0;
  let cumulativeReservedUsd = 0;
  let cumulativeObservedEstimatedUsd = 0;
  let totalReservedInvocations = 0;
  let authorizationEnvelopeExceeded = false;
  const assumedIn = input.assumedInputTokens ?? 4000;
  const assumedOut = input.assumedOutputTokens ?? 1200;
  const hardCap = input.budget.policy.hardCapUsd;

  return {
    estimateNextInvocationUsd(): number {
      return conservativePreCallEstimateUsd({
        manifest: input.manifest,
        modelId: input.modelId,
        assumedInputTokens: assumedIn,
        assumedOutputTokens: assumedOut,
      });
    },

    canDispatchUnderHardCap(estimateUsd: number): {
      allowed: boolean;
      reason?: string;
    } {
      if (authorizationEnvelopeExceeded) {
        return {
          allowed: false,
          reason: "OBSERVED_AUTHORIZATION_ENVELOPE_EXCEEDED",
        };
      }
      // Pre-dispatch envelope uses cumulative reserved (not post-observed top-ups alone).
      if (cumulativeReservedUsd + estimateUsd > hardCap + 1e-12) {
        return {
          allowed: false,
          reason: "PRECALL_WOULD_EXCEED_AUTHORIZATION_ENVELOPE",
        };
      }
      // Also respect BudgetTracker hard-stop (covers observed top-up paths).
      return input.budget.canContinueEssential(estimateUsd);
    },

    commitReserve(estimateUsd: number): void {
      input.budget.recordSpend(
        estimateUsd,
        `agents-usd-reserve:inv${totalReservedInvocations + 1}`,
      );
      turnReservedUsd += estimateUsd;
      turnReservedInvocations += 1;
      cumulativeReservedUsd += estimateUsd;
      totalReservedInvocations += 1;
    },

    reservedInvocationCount(): number {
      return turnReservedInvocations;
    },

    totalReservedInvocations(): number {
      return totalReservedInvocations;
    },

    settleTurn(
      observation: NoraAgentsUsdSettleObservation,
    ): NoraAgentsUsdSettleResult {
      const hasObserved =
        observation.inputTokens != null || observation.outputTokens != null;
      let usedConservativeFallback = !hasObserved;
      let observedEstimate: number;
      if (hasObserved) {
        observedEstimate = estimateCostUsd({
          manifest: input.manifest,
          modelId: input.modelId,
          inputTokens: observation.inputTokens ?? assumedIn,
          outputTokens: observation.outputTokens ?? assumedOut,
        });
      } else {
        observedEstimate = turnReservedUsd;
        usedConservativeFallback = true;
      }

      const observedOverrun = observedEstimate > turnReservedUsd + 1e-12;

      // Monotone top-up of BudgetTracker when observed > reserved.
      if (observedOverrun) {
        const delta = observedEstimate - turnReservedUsd;
        input.budget.recordSpend(delta, "agents-usd-observed-overrun-topup");
      }

      cumulativeObservedEstimatedUsd += observedEstimate;
      if (cumulativeObservedEstimatedUsd > hardCap + 1e-12) {
        authorizationEnvelopeExceeded = true;
        input.budget.hardStopTriggered = true;
      }

      const result: NoraAgentsUsdSettleResult = {
        reservedUsd: turnReservedUsd,
        observedEstimatedUsd: observedEstimate,
        estimatedUsd: observedEstimate,
        cumulativeReservedUsd,
        cumulativeObservedEstimatedUsd,
        cumulativeUsd: input.budget.cumulativeUsd,
        usedConservativeFallback,
        observedOverrun,
        authorizationEnvelopeExceeded,
        invoice: "NOT_OBSERVED",
      };

      turnReservedUsd = 0;
      turnReservedInvocations = 0;
      return result;
    },
  };
}
