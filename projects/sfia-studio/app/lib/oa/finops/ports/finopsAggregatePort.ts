/**
 * FinOps T2 — durable A1 aggregate port (derived; fully rebuildable).
 */

import type {
  FinOpsAggregateKey,
  FinOpsCostEvent,
  FinOpsProjectPeriodAggregate,
} from "../application/types.aggregate";

/**
 * Transactional ops bound to one exclusive project/period rebuild session.
 * Callers must not escape this boundary (no pool reuse outside these ops).
 */
export type FinOpsExclusiveProjectPeriodRebuildOps = {
  /** Authoritative cost events for the full project/period (all currencies). */
  readonly listAllCostEventsForPeriod: () => Promise<
    ReadonlyArray<FinOpsCostEvent>
  >;
  readonly listAggregates: () => Promise<
    ReadonlyArray<FinOpsProjectPeriodAggregate>
  >;
  /**
   * Replace the entire project/period projection (all currencies) atomically
   * within the exclusive session.
   */
  readonly replaceAggregates: (
    aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>,
  ) => Promise<void>;
};

export type FinOpsAggregatePort = {
  /**
   * Replace all aggregate rows for a project+period (full rebuild write).
   * Prefer `withExclusiveProjectPeriodRebuild` for production rebuilds so
   * authoritative read → derive → replace stays serialized.
   */
  readonly replaceProjectPeriodAggregates: (input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
  }) => Promise<void>;

  readonly readAggregate: (
    key: FinOpsAggregateKey,
  ) => Promise<FinOpsProjectPeriodAggregate | null>;

  readonly listAggregatesForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
  }) => Promise<ReadonlyArray<FinOpsProjectPeriodAggregate>>;

  /**
   * Serialize the full A1 rebuild critical section for one project+period:
   * acquire → read cost events → read aggregates → derive → replace → release.
   * PostgreSQL: one connection + transaction advisory lock (no pool starvation).
   */
  readonly withExclusiveProjectPeriodRebuild: <T>(
    input: {
      readonly projectId: string;
      readonly periodStart: string;
    },
    work: (ops: FinOpsExclusiveProjectPeriodRebuildOps) => Promise<T>,
  ) => Promise<T>;
};
