/**
 * FinOps T2 — aggregate / cost-event / reconciliation application types.
 * Money amounts use canonical decimal strings (numeric(20,8) boundary).
 */

import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "../domain/types";

export const FINOPS_T2_IDENTITY_CONTRACT_VERSION = "t2-v1" as const;

export type FinOpsEstimationStatus =
  | "available"
  | "unavailable"
  | "unknown";

export type FinOpsAggregateKey = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly currency: string;
};

export type FinOpsProjectPeriodAggregate = {
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly estimatedAmount: string;
  readonly observedAmount: string;
  readonly billedAmount: string;
  readonly unknownAmount: string;
  readonly inputTokensSum: number | null;
  readonly outputTokensSum: number | null;
  readonly totalTokensSum: number | null;
  readonly costEventCount: number;
  readonly unavailableEstimationCount: number;
  readonly rebuildVersion: number;
  readonly rebuiltAt: string;
};

export type FinOpsCostEvent = {
  readonly costEventId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly executionRunId: string;
  readonly usageEventId: string | null;
  readonly periodStart: string;
  readonly currency: string;
  /** Canonical numeric(20,8) string when amount is known; null when unavailable. */
  readonly amount: string | null;
  readonly evidenceClass: FinOpsCostEvidenceClass;
  readonly sourceOfTruth: FinOpsSourceOfTruth;
  readonly estimationStatus: FinOpsEstimationStatus;
  readonly correctionRef: string | null;
  readonly catalogVersion: string | null;
  readonly provider: string;
  readonly model: string | null;
  readonly unit: string | null;
  readonly billingQuantum: string | null;
  readonly usageQuantity: string | null;
  readonly occurredAt: string;
};

export type FinOpsCostEventInsertResult =
  | { readonly outcome: "created"; readonly costEventId: string }
  | { readonly outcome: "duplicate"; readonly costEventId: string }
  | {
      readonly outcome: "conflict";
      readonly code: "FINOPS_COST_DEDUP_CONFLICT";
      readonly message: string;
    }
  | {
      readonly outcome: "failed";
      readonly code: "FINOPS_COST_PERSIST_FAILED";
      readonly message: string;
      readonly retryable: boolean;
    };

export type FinOpsReconciliationStatus = "succeeded" | "failed";

export type FinOpsReconciliationRecord = {
  readonly reconciliationId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly status: FinOpsReconciliationStatus;
  readonly processedCount: number;
  readonly errorCode: string | null;
  readonly errorMessage: string | null;
  readonly completedAt: string | null;
};

export type ReconcileFact = {
  readonly executionRunId: string;
  readonly usageEventId: string | null;
  readonly evidenceClass: "observed" | "billed";
  readonly sourceOfTruth: "PROVIDER_OBSERVED" | "BILLED";
  /** Canonical decimal string — already quantized Money (scale 8). */
  readonly amount: string;
  readonly currency: string;
  readonly correctionRef: string;
  readonly provider: string;
  readonly model: string | null;
  readonly occurredAt: string;
};

export type ReconcileProjectPeriodInput = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly facts: ReadonlyArray<ReconcileFact>;
  /** Soft bound on facts processed in one call (on-demand bounded batch). */
  readonly maxFacts?: number;
};

export type ReconcileProjectPeriodResult =
  | {
      readonly outcome: "succeeded";
      readonly reconciliationId: string;
      readonly processedCount: number;
      readonly createdCount: number;
      readonly duplicateCount: number;
      /** Full project/period projection after rebuild (all currencies). */
      readonly aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
      readonly idempotentReplay: boolean;
    }
  | {
      readonly outcome: "failed";
      readonly reconciliationId: string | null;
      readonly code: string;
      readonly message: string;
      /** FinOps-side only — never invalidates a successful user AI run. */
      readonly finopsSideOnly: true;
    };

/**
 * Full A1 rebuild for a project + UTC period.
 * Always rebuilds ALL currencies — no partial per-currency rebuild path.
 */
export type RecomputeAggregatesInput = {
  readonly projectId: string;
  readonly periodStart: string;
};

export type RecomputeAggregatesResult =
  | {
      readonly outcome: "succeeded";
      readonly aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
    };
