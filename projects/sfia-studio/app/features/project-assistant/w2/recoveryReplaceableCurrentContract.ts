/**
 * R10 — UI/read-model only: qualify wrong pre-exec generic current as
 * replaceable by recovery PREPARE for next-action ownership.
 * Pure — no OA I/O, no Cancel, no persistence. Client-safe.
 *
 * No specialized document-write contract is recognized. Pre-exec generic
 * contracts that match the recovery binding are replaceable.
 */

const PRE_EXEC_REPLACEABLE_BY_RECOVERY_PREPARE = new Set([
  "draft",
  "proposed",
  "validated",
  "confirmation_required",
]);

export function isWrongGenericPreExecReplaceableByRecoveryPrepare(input: {
  readonly recoveryBinding:
    | { readonly kind: string }
    | null
    | undefined;
  readonly currentContract: {
    readonly action: string;
    readonly target: string;
    readonly status: string;
  } | null | undefined;
  readonly continuityDecisionRef: string | null | undefined;
  readonly recoveryDecisionId: string | null | undefined;
  readonly attemptPresent: boolean;
}): boolean {
  if (!input.recoveryBinding) return false;
  if (input.recoveryBinding.kind !== "post_evidence_recovery_execution") {
    return false;
  }
  if (!input.currentContract) return false;
  if (!input.recoveryDecisionId || !input.continuityDecisionRef) return false;
  if (input.continuityDecisionRef !== input.recoveryDecisionId) return false;
  if (input.attemptPresent) return false;
  if (!PRE_EXEC_REPLACEABLE_BY_RECOVERY_PREPARE.has(input.currentContract.status)) {
    return false;
  }
  return true;
}
