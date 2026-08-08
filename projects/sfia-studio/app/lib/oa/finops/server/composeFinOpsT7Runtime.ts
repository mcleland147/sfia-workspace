/**
 * FinOps T7 — canonical server-side foundation runtime composition (default-OFF).
 *
 * Reuses T6 composeFinOpsRuntime (ledger + audit + capture) without modification.
 * Wires T2 mutation / reconciliation through post-T2 T4 refresh wrappers.
 * Exposes T7 rollout resolution (read-only at composition boundary).
 *
 * Anti-claims:
 * - Foundation Ready ≠ SHADOW / MONITOR / E1 activated.
 * - Does not expose upsertProjectRollout as a product API.
 * - Does not modify composeFinOpsRuntime, execution-run, T3, T4, T6 sources.
 * - Does not create pools, read env, or close the injected pool.
 * - Does not create FinOpsEnforcementPort / provider consumers.
 */

import type { Pool } from "pg";
import {
  recomputeAggregatesThenRefreshEnforcementProjection,
  reconcileProjectPeriodThenRefreshEnforcementProjection,
  type RefreshAfterReconcileResult,
  type RefreshAfterRecomputeResult,
} from "../application/refreshEnforcementAfterT2";
import { resolveFinOpsRollout } from "../application/resolveFinOpsRollout";
import type {
  ReconcileProjectPeriodInput,
  RecomputeAggregatesInput,
} from "../application/types.aggregate";
import type { FinOpsRolloutInstruction } from "../application/types.rollout";
import { createPostgresFinOpsAggregateStore } from "../infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsEnforcementProjectionStore } from "../infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import { createPostgresFinOpsReconciliation } from "../infrastructure/postgres/postgresFinOpsReconciliation";
import { createPostgresFinOpsRolloutStore } from "../infrastructure/postgres/postgresFinOpsRolloutStore";
import type { FinOpsCapturePort } from "../ports/finopsCapturePort";
import {
  composeFinOpsRuntime,
  type FinOpsRuntimeComposition,
} from "./composeFinOpsRuntime";

export type ComposeFinOpsT7RuntimeInput = {
  /** Caller-owned pool. Composition never closes it. */
  readonly pool: Pool;
  readonly nowIso: () => string;
};

export type FinOpsT7RuntimeComposition = {
  readonly capture: FinOpsCapturePort;
  readonly flushAudit: () => Promise<void>;
  readonly resolveProjectRollout: (
    projectId: string,
  ) => Promise<FinOpsRolloutInstruction>;
  readonly recomputeAggregatesAndRefresh: (
    input: RecomputeAggregatesInput,
  ) => Promise<RefreshAfterRecomputeResult>;
  readonly reconcileProjectPeriodAndRefresh: (
    input: ReconcileProjectPeriodInput,
  ) => Promise<RefreshAfterReconcileResult>;
};

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/composeFinOpsT7Runtime is server-only and must not run in a browser context.",
    );
  }
}

/**
 * Compose the canonical T7 server foundation boundary.
 * T6 capture/audit reused; T2 mutations always route through T4 refresh wrappers.
 */
export function composeFinOpsT7Runtime(
  input: ComposeFinOpsT7RuntimeInput,
): FinOpsT7RuntimeComposition {
  assertServerOnly();
  const { pool, nowIso } = input;

  const t6: FinOpsRuntimeComposition = composeFinOpsRuntime({ pool });
  const aggregates = createPostgresFinOpsAggregateStore(pool);
  const reconciliation = createPostgresFinOpsReconciliation(pool);
  const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
  const rollout = createPostgresFinOpsRolloutStore(pool);

  const refreshDeps = {
    aggregates,
    reconciliation,
    projection,
    nowIso,
  };

  return {
    capture: t6.capture,
    flushAudit: t6.flushAudit,
    resolveProjectRollout: (projectId: string) =>
      resolveFinOpsRollout({ rollout }, projectId),
    recomputeAggregatesAndRefresh: (recomputeInput) =>
      recomputeAggregatesThenRefreshEnforcementProjection(
        refreshDeps,
        recomputeInput,
      ),
    reconcileProjectPeriodAndRefresh: (reconcileInput) =>
      reconcileProjectPeriodThenRefreshEnforcementProjection(
        refreshDeps,
        reconcileInput,
      ),
  };
}
