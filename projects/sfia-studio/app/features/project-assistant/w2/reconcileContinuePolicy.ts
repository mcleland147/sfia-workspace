/**
 * Client-side continuation policy for Reconciler anti-stall (D-ER-08 / CP2-08).
 *
 * Owner remains reconcileGovernedExecution. UI only triggers continue.
 * No worker / queue / scheduler platform.
 *
 * CP2-08: NO total continue-budget abandonment. Mounted surface schedules
 * one-step continues with backoff until durable projection is stable.
 * Remount re-derives Product Truth and resumes automatically.
 * Reconciler keeps its own MAX_TRANSITIONS per call (sync loop guard).
 */

export type ContinuityStageLike =
  | "RUNNING"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "POST_EVIDENCE_PENDING"
  | "ATTEMPT_ACCEPTED"
  | string;

export type ContinuityProjectionLike = {
  readonly stage: ContinuityStageLike;
  readonly nextDeterministicAction?: string | null;
  readonly recoveryRequired?: boolean;
};

/** Legacy NoteLite-era UI bound (~8). Must be exceeded by nominal policy. */
export const LEGACY_UI_RUNNING_POLL_BUDGET = 8;

/**
 * @deprecated CP2-08 — no total session budget. Kept for test comparison only.
 * Correctness must NOT depend on exhausting this number.
 */
export const NOMINAL_RECONCILE_CONTINUE_BUDGET = Number.POSITIVE_INFINITY;

/** Backoff between scheduled continue intents (ms). */
export const RECONCILE_CONTINUE_BACKOFF_MS = 250;

/** Soft ceiling for backoff growth (ms) — still schedules forever while mounted. */
export const RECONCILE_CONTINUE_BACKOFF_MAX_MS = 2000;

export function shouldContinueReconcileNominally(
  projection: ContinuityProjectionLike | null | undefined,
): boolean {
  if (!projection) return false;
  if (projection.recoveryRequired) return false;
  if (
    projection.stage === "RUNNING" ||
    projection.stage === "ATTEMPT_ACCEPTED"
  ) {
    return true;
  }
  const next = projection.nextDeterministicAction ?? "NONE";
  return (
    next === "MATERIALIZE_PRODUCT" ||
    next === "RUN_POST_EVIDENCE" ||
    next === "AWAIT_EXTERNAL" ||
    projection.stage === "PRODUCT_MATERIALIZATION_PENDING" ||
    projection.stage === "POST_EVIDENCE_PENDING"
  );
}

/**
 * Remount / reload resume: durable projection still has deterministic work
 * → automatic continue intent (no « Recharger résultat produit » nominal click).
 */
export function shouldAutoResumeReconcileOnRemount(
  projection: ContinuityProjectionLike | null | undefined,
): boolean {
  return shouldContinueReconcileNominally(projection);
}

/**
 * Next backoff delay for scheduled continue (capped).
 * Not a correctness-bearing total budget.
 */
export function nextReconcileContinueDelayMs(attemptIndex: number): number {
  const raw =
    RECONCILE_CONTINUE_BACKOFF_MS * Math.min(8, Math.max(1, attemptIndex));
  return Math.min(raw, RECONCILE_CONTINUE_BACKOFF_MAX_MS);
}

/**
 * @deprecated CP2-08 — always returns Infinity when continuation needed.
 * Prefer shouldContinueReconcileNominally + scheduled one-step continues.
 */
export function nominalContinueIterationsRemaining(
  _alreadyUsed: number,
  projection: ContinuityProjectionLike | null | undefined,
  _budget: number = NOMINAL_RECONCILE_CONTINUE_BUDGET,
): number {
  if (!shouldContinueReconcileNominally(projection)) return 0;
  return Number.POSITIVE_INFINITY;
}
