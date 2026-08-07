/**
 * FinOps T3 — B3 orchestration wrappers around T2 WITHOUT modifying T2.
 *
 * T3 evaluation runs only AFTER T2 success returns; never inside T2 locks/txns.
 * T3 failure must not rewrite a successful T2 outcome.
 */

import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsAlertReviewPort } from "../ports/finopsAlertReviewPort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import { recomputeAggregates } from "./recomputeAggregates";
import {
  reconcileProjectPeriod,
  type ReconcileProjectPeriodDeps,
} from "./reconcileProjectPeriod";
import {
  evaluateProjectPeriodThresholds,
  type EvaluateProjectPeriodThresholdsDeps,
} from "./evaluateProjectPeriodThresholds";
import type {
  EvaluateProjectPeriodThresholdsResult,
  FinOpsThresholdDefinition,
} from "./types.alertReview";
import type {
  ReconcileProjectPeriodInput,
  ReconcileProjectPeriodResult,
  RecomputeAggregatesInput,
  RecomputeAggregatesResult,
} from "./types.aggregate";

export type EvaluateAfterT2Deps = {
  readonly aggregates: FinOpsAggregatePort;
  readonly reconciliation: FinOpsReconciliationPort;
  readonly alertReview: FinOpsAlertReviewPort;
  readonly nowIso: () => string;
  readonly definitions: ReadonlyArray<FinOpsThresholdDefinition>;
};

export type EvaluateAfterRecomputeResult = {
  readonly t2: RecomputeAggregatesResult;
  readonly t3: EvaluateProjectPeriodThresholdsResult | null;
  /** True when T2 succeeded and T3 was attempted (success or failure). */
  readonly t3Attempted: boolean;
};

export type EvaluateAfterReconcileResult = {
  readonly t2: ReconcileProjectPeriodResult;
  readonly t3: EvaluateProjectPeriodThresholdsResult | null;
  readonly t3Attempted: boolean;
};

function t3Deps(
  deps: EvaluateAfterT2Deps,
): EvaluateProjectPeriodThresholdsDeps {
  return {
    aggregates: deps.aggregates,
    alertReview: deps.alertReview,
    nowIso: deps.nowIso,
  };
}

/**
 * B3 defensive boundary: unexpected throws from evaluate must not reject the
 * wrapper promise or erase a successful T2 outcome.
 */
async function safeEvaluate(
  deps: EvaluateProjectPeriodThresholdsDeps,
  input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly definitions: ReadonlyArray<FinOpsThresholdDefinition>;
  },
): Promise<EvaluateProjectPeriodThresholdsResult> {
  try {
    return await evaluateProjectPeriodThresholds(deps, input);
  } catch {
    return {
      outcome: "failed",
      code: "FINOPS_T3_EVALUATION_THROWN",
      message: "Unexpected error while evaluating FinOps T3 thresholds",
      finopsSideOnly: true,
    };
  }
}

/**
 * Wrapper: recomputeAggregates → on success → evaluateProjectPeriodThresholds.
 */
export async function recomputeAggregatesThenEvaluateThresholds(
  deps: EvaluateAfterT2Deps,
  input: RecomputeAggregatesInput,
): Promise<EvaluateAfterRecomputeResult> {
  const t2 = await recomputeAggregates(
    { aggregates: deps.aggregates, nowIso: deps.nowIso },
    input,
  );
  if (t2.outcome !== "succeeded") {
    return { t2, t3: null, t3Attempted: false };
  }
  const t3 = await safeEvaluate(t3Deps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
    definitions: deps.definitions,
  });
  return { t2, t3, t3Attempted: true };
}

/**
 * Wrapper: reconcileProjectPeriod → on success → evaluateProjectPeriodThresholds.
 */
export async function reconcileProjectPeriodThenEvaluateThresholds(
  deps: EvaluateAfterT2Deps,
  input: ReconcileProjectPeriodInput,
): Promise<EvaluateAfterReconcileResult> {
  const reconDeps: ReconcileProjectPeriodDeps = {
    reconciliation: deps.reconciliation,
    aggregates: deps.aggregates,
    nowIso: deps.nowIso,
  };
  const t2 = await reconcileProjectPeriod(reconDeps, input);
  if (t2.outcome !== "succeeded") {
    return { t2, t3: null, t3Attempted: false };
  }
  const t3 = await safeEvaluate(t3Deps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
    definitions: deps.definitions,
  });
  return { t2, t3, t3Attempted: true };
}
