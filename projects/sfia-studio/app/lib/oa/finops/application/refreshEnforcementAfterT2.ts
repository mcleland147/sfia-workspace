/**
 * FinOps T4 — post-T2 enforcement projection refresh orchestration.
 *
 * T4-owned wrappers around public T2 application boundaries WITHOUT modifying T2.
 * Refresh runs only AFTER T2 success returns; never inside T2 locks/txns.
 * T4 failure must not rewrite a successful T2 outcome.
 * Reuses rebuildEnforcementProjection (no duplicated SoT/Money/lock/replace).
 */

import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsEnforcementProjectionPort } from "../ports/finopsEnforcementProjectionPort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import { recomputeAggregates } from "./recomputeAggregates";
import {
  reconcileProjectPeriod,
  type ReconcileProjectPeriodDeps,
} from "./reconcileProjectPeriod";
import {
  rebuildEnforcementProjection,
  type RebuildEnforcementProjectionDeps,
} from "./rebuildEnforcementProjection";
import type {
  ReconcileProjectPeriodInput,
  ReconcileProjectPeriodResult,
  RecomputeAggregatesInput,
  RecomputeAggregatesResult,
} from "./types.aggregate";
import type { RebuildEnforcementProjectionResult } from "./types.enforcement";

export type RefreshEnforcementAfterT2Deps = {
  readonly aggregates: FinOpsAggregatePort;
  readonly reconciliation: FinOpsReconciliationPort;
  readonly projection: FinOpsEnforcementProjectionPort;
  readonly nowIso: () => string;
};

export type RefreshAfterRecomputeResult = {
  readonly t2: RecomputeAggregatesResult;
  readonly t4Refresh: RebuildEnforcementProjectionResult | null;
  /** True when T2 succeeded and T4 rebuild was attempted (success or failure). */
  readonly t4RefreshAttempted: boolean;
};

export type RefreshAfterReconcileResult = {
  readonly t2: ReconcileProjectPeriodResult;
  readonly t4Refresh: RebuildEnforcementProjectionResult | null;
  readonly t4RefreshAttempted: boolean;
};

function projectionDeps(
  deps: RefreshEnforcementAfterT2Deps,
): RebuildEnforcementProjectionDeps {
  return {
    projection: deps.projection,
    nowIso: deps.nowIso,
  };
}

/**
 * Defensive boundary: unexpected throws from rebuild must not reject the
 * wrapper promise or erase a successful T2 outcome. Sanitized FinOps-side only.
 */
async function safeRebuild(
  deps: RebuildEnforcementProjectionDeps,
  input: { readonly projectId: string; readonly periodStart: string },
): Promise<RebuildEnforcementProjectionResult> {
  try {
    return await rebuildEnforcementProjection(deps, input);
  } catch {
    return {
      outcome: "failed",
      code: "FINOPS_T4_REFRESH_THROWN",
      message: "Unexpected error while refreshing FinOps T4 enforcement projection",
      finopsSideOnly: true,
    };
  }
}

/**
 * Wrapper: recomputeAggregates → on success → rebuildEnforcementProjection once.
 */
export async function recomputeAggregatesThenRefreshEnforcementProjection(
  deps: RefreshEnforcementAfterT2Deps,
  input: RecomputeAggregatesInput,
): Promise<RefreshAfterRecomputeResult> {
  const t2 = await recomputeAggregates(
    { aggregates: deps.aggregates, nowIso: deps.nowIso },
    input,
  );
  if (t2.outcome !== "succeeded") {
    return { t2, t4Refresh: null, t4RefreshAttempted: false };
  }
  const t4Refresh = await safeRebuild(projectionDeps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
  });
  return { t2, t4Refresh, t4RefreshAttempted: true };
}

/**
 * Wrapper: reconcileProjectPeriod → on success → rebuildEnforcementProjection once.
 * Reconcile may recompute aggregates internally; this wrapper still refreshes T4
 * exactly once after the outer reconcile success (no double rebuild).
 */
export async function reconcileProjectPeriodThenRefreshEnforcementProjection(
  deps: RefreshEnforcementAfterT2Deps,
  input: ReconcileProjectPeriodInput,
): Promise<RefreshAfterReconcileResult> {
  const reconDeps: ReconcileProjectPeriodDeps = {
    reconciliation: deps.reconciliation,
    aggregates: deps.aggregates,
    nowIso: deps.nowIso,
  };
  const t2 = await reconcileProjectPeriod(reconDeps, input);
  if (t2.outcome !== "succeeded") {
    return { t2, t4Refresh: null, t4RefreshAttempted: false };
  }
  const t4Refresh = await safeRebuild(projectionDeps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
  });
  return { t2, t4Refresh, t4RefreshAttempted: true };
}
