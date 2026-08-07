/**
 * FinOps T3 — durable Alert / Morris Review port (A1 + D2).
 *
 * E1: no acknowledge / resolve / override product mutations in this Delivery.
 */

import type {
  ApplyProjectPeriodEvaluationInput,
  ApplyProjectPeriodEvaluationResult,
  FinOpsAlertState,
  FinOpsMorrisReviewState,
} from "../application/types.alertReview";

export type FinOpsAlertReviewPort = {
  /**
   * Atomically apply computed threshold outcomes for one project/period.
   * Owns system transitions (open/cleared, pending/superseded) + C1 idempotence.
   */
  readonly applyProjectPeriodEvaluation: (
    input: ApplyProjectPeriodEvaluationInput,
  ) => Promise<ApplyProjectPeriodEvaluationResult>;

  readonly listAlertsForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
  }) => Promise<ReadonlyArray<FinOpsAlertState>>;

  readonly listReviewsForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
  }) => Promise<ReadonlyArray<FinOpsMorrisReviewState>>;
};
