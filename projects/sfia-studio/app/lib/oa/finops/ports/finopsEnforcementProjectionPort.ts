/**
 * FinOps T4 — Enforcement projection port (dedicated derived store).
 * Does not depend on FinOpsAggregatePort. Ledger remains authoritative.
 */

import type { FinOpsCostEvent } from "../application/types.aggregate";
import type { FinOpsEnforcementProjection } from "../application/types.enforcement";

/**
 * Ops bound to one exclusive short project/period session
 * (rebuild or decision read). Must not escape across provider I/O.
 */
export type FinOpsExclusiveEnforcementOps = {
  readonly listAllCostEventsForPeriod: () => Promise<
    ReadonlyArray<FinOpsCostEvent>
  >;
  readonly listProjections: () => Promise<
    ReadonlyArray<FinOpsEnforcementProjection>
  >;
  /**
   * Atomically replace ALL T4 projection rows for the project/period
   * (all currencies). Obsolete currencies are removed.
   */
  readonly replaceProjections: (
    projections: ReadonlyArray<FinOpsEnforcementProjection>,
  ) => Promise<void>;
  readonly readProjection: (currency: string) => Promise<
    FinOpsEnforcementProjection | null
  >;
};

export type FinOpsEnforcementProjectionPort = {
  /**
   * Short exclusive project/period serialization shared by rebuild and
   * decision reads so a decision cannot observe a partial replace.
   */
  readonly withExclusiveProjectPeriod: <T>(
    input: {
      readonly projectId: string;
      readonly periodStart: string;
    },
    work: (ops: FinOpsExclusiveEnforcementOps) => Promise<T>,
  ) => Promise<T>;
};
