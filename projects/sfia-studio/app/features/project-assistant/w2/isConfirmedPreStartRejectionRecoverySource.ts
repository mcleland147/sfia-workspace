/**
 * CLASS 2 recovery source — confirmed EC + deterministic pre-start Attempt failure.
 *
 * StartExecution intentionally keeps EC `confirmed` on deterministic launch
 * rejection (retry-eligible) while marking Attempt `failed`. Recovery ownership
 * must recognize this without rewriting EC → failed.
 *
 * Narrow: does NOT treat every confirmed EC as recoverable.
 */
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";

/**
 * StopReason families produced by StartExecution when a launch is refused
 * before acknowledgement / running, while EC remains confirmed.
 */
export function isDeterministicPreStartLaunchRejectionStopReason(
  stopReason: string | null | undefined,
): boolean {
  if (typeof stopReason !== "string") return false;
  const s = stopReason.trim();
  if (s.length === 0) return false;
  // Non-REAL adapter reject path (failLaunch cause=reject).
  if (/^EXECUTION_LAUNCH_FAILED:\s*reject:/i.test(s)) return true;
  // REAL pre-start deterministic rejects (failRealLaunch with non-indeterminate
  // detailCode → EC stays confirmed). stopReason is always prefixed
  // REAL_LAUNCH_FAILED: even when detailCode is REAL_WORKSPACE_INVALID etc.
  if (/^REAL_LAUNCH_FAILED:\s*REAL_WORKSPACE_INVALID\b/i.test(s)) return true;
  if (/^REAL_LAUNCH_FAILED:\s*REAL_BOUNDARY_DISABLED\b/i.test(s)) return true;
  if (/^REAL_LAUNCH_FAILED:\s*REAL_AGENT_PROFILE_INVALID\b/i.test(s)) return true;
  // Docs-write execution-time write-mode guard rejects BEFORE Cursor process
  // invocation (REAL gateway boundary reached ≠ process invoked).
  if (
    /^REAL_LAUNCH_FAILED:\s*ARTIFACT_WRITE_MODE_UNRESOLVED\b/i.test(s)
  ) {
    return true;
  }
  return false;
}

/**
 * Whether a confirmed EC + failed Attempt is an admissible CLASS 2 recovery source.
 */
export function isConfirmedPreStartRejectionRecoverySource(input: {
  readonly contract: ExecutionContract;
  readonly attempt: ExecutionAttempt;
}): boolean {
  const { contract, attempt } = input;
  if (contract.status !== "confirmed") return false;
  if (attempt.status !== "failed") return false;
  if (attempt.executionContractId !== contract.executionContractId) return false;

  // Attempt must cohere with a version of this contract (not a future OCC tip).
  if (
    typeof attempt.executionContractVersion !== "number" ||
    attempt.executionContractVersion < 1 ||
    attempt.executionContractVersion > contract.version
  ) {
    return false;
  }

  // Did not reach running / acknowledged business execution.
  if (typeof attempt.startedAt === "string" && attempt.startedAt.trim()) {
    return false;
  }
  if (typeof attempt.launchedAt === "string" && attempt.launchedAt.trim()) {
    return false;
  }

  if (attempt.irreversibleEffectsPossible === true) return false;
  if (attempt.processDiagnostic?.realProcessInvoked === true) return false;

  return isDeterministicPreStartLaunchRejectionStopReason(attempt.stopReason);
}
