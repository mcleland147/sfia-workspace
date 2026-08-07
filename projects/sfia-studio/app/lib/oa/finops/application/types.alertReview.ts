/**
 * FinOps T3 — Alert & Morris Review State application types (A1 + D2 + F3).
 *
 * F3: no default / production threshold amounts. Callers inject definitions.
 * E1: lifecycle includes acknowledged/resolved conceptually; no product write APIs.
 */

export const FINOPS_T3_IDENTITY_CONTRACT_VERSION = "t3-v1" as const;

export type FinOpsThresholdKind = "informational_alert" | "morris_review";

export type FinOpsThresholdBasis = "estimated" | "observed" | "billed";

/**
 * Injected threshold rule — never a built-in production catalog.
 * Amount is a canonical Money decimal string (scale 8).
 */
export type FinOpsThresholdDefinition = {
  readonly thresholdCode: string;
  readonly kind: FinOpsThresholdKind;
  readonly currency: string;
  readonly basis: FinOpsThresholdBasis;
  readonly amount: string;
};

export type FinOpsAlertLifecycleState = "open" | "cleared";

export type FinOpsMorrisReviewLifecycleState =
  | "pending"
  | "acknowledged"
  | "resolved"
  | "superseded";

export type FinOpsAlertState = {
  readonly alertId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly thresholdCode: string;
  readonly evaluationBasis: FinOpsThresholdBasis;
  readonly thresholdAmount: string;
  readonly evaluatedAmount: string;
  readonly rebuildVersion: number;
  readonly state: FinOpsAlertLifecycleState;
  readonly firstCrossedAt: string;
  readonly lastEvaluatedAt: string;
  readonly clearedAt: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
};

export type FinOpsMorrisReviewState = {
  readonly reviewId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly thresholdCode: string;
  readonly evaluationBasis: FinOpsThresholdBasis;
  readonly thresholdAmount: string;
  readonly evaluatedAmount: string;
  readonly rebuildVersion: number;
  readonly state: FinOpsMorrisReviewLifecycleState;
  readonly firstRequiredAt: string;
  readonly lastEvaluatedAt: string;
  readonly supersededAt: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
};

/**
 * Engine outcome for one injected threshold definition against one currency bucket.
 * Identity is C1 (kind/basis/amount/rebuildVersion are NOT part of identity).
 */
export type FinOpsThresholdEvaluationOutcome = {
  readonly kind: FinOpsThresholdKind;
  readonly thresholdCode: string;
  readonly currency: string;
  readonly evaluationBasis: FinOpsThresholdBasis;
  readonly thresholdAmount: string;
  readonly evaluatedAmount: string;
  readonly rebuildVersion: number;
  readonly crossed: boolean;
  readonly dedupKey: string;
  readonly alertId: string;
  readonly reviewId: string;
};

export type ApplyProjectPeriodEvaluationInput = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly outcomes: ReadonlyArray<FinOpsThresholdEvaluationOutcome>;
  /** Injected evaluation clock (ISO). */
  readonly evaluatedAt: string;
};

export type ApplyProjectPeriodEvaluationResult =
  | {
      readonly outcome: "succeeded";
      readonly alerts: ReadonlyArray<FinOpsAlertState>;
      readonly reviews: ReadonlyArray<FinOpsMorrisReviewState>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
      readonly finopsSideOnly: true;
    };

export type EvaluateProjectPeriodThresholdsInput = {
  readonly projectId: string;
  readonly periodStart: string;
  readonly definitions: ReadonlyArray<FinOpsThresholdDefinition>;
};

export type EvaluateProjectPeriodThresholdsResult =
  | {
      readonly outcome: "succeeded";
      readonly noop: boolean;
      readonly evaluatedDefinitionCount: number;
      readonly alerts: ReadonlyArray<FinOpsAlertState>;
      readonly reviews: ReadonlyArray<FinOpsMorrisReviewState>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
      readonly finopsSideOnly: true;
    };
