/**
 * FinOps T2 — reconciliation / adjacent Money cost-event port.
 * Append-only cost history; corrections are new events.
 */

import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsReconciliationRecord,
} from "../application/types.aggregate";

export type FinOpsReconciliationPort = {
  readonly insertCostEvent: (
    event: FinOpsCostEvent,
  ) => Promise<FinOpsCostEventInsertResult>;

  readonly listCostEventsForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly currency?: string;
  }) => Promise<ReadonlyArray<FinOpsCostEvent>>;

  readonly findReconciliationByDedup: (
    dedupKey: string,
  ) => Promise<FinOpsReconciliationRecord | null>;

  readonly insertReconciliationRecord: (
    record: FinOpsReconciliationRecord,
  ) => Promise<
    | { readonly outcome: "created" }
    | { readonly outcome: "duplicate"; readonly existing: FinOpsReconciliationRecord }
    | { readonly outcome: "failed"; readonly message: string; readonly retryable: boolean }
  >;

  readonly completeReconciliationRecord: (input: {
    readonly reconciliationId: string;
    readonly status: "succeeded" | "failed";
    readonly processedCount: number;
    readonly errorCode: string | null;
    readonly errorMessage: string | null;
    readonly completedAt: string;
  }) => Promise<void>;

  readonly withExclusiveProjectPeriodReconciliation: <T>(
    input: {
      readonly projectId: string;
      readonly periodStart: string;
    },
    work: (
      ops: Pick<
        FinOpsReconciliationPort,
        | "insertCostEvent"
        | "listCostEventsForProjectPeriod"
        | "findReconciliationByDedup"
        | "insertReconciliationRecord"
        | "completeReconciliationRecord"
      >,
    ) => Promise<T>,
  ) => Promise<T>;
};
