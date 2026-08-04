/**
 * Domain late-result eligibility and strengthened persistence invariants.
 */
import type { ExecutionEvidence, ExecutionRun, ExecutionState } from "./types";
import { canSucceed } from "./evidence";

export type InvariantIssue = { readonly code: string; readonly message: string };

/** Terminal states where an external op may have been engaged (FD-05 late evidence). */
export const LATE_RESULT_ELIGIBLE_STATES = [
  "cancelled",
  "timed_out",
  "failed",
] as const satisfies readonly ExecutionState[];

export type LateResultEligibleState = (typeof LATE_RESULT_ELIGIBLE_STATES)[number];

export function canAcceptLateResult(state: ExecutionState): state is LateResultEligibleState {
  return (LATE_RESULT_ELIGIBLE_STATES as readonly string[]).includes(state);
}

function hasOfficialSuccessEvidence(
  evidence: readonly ExecutionEvidence[] | undefined,
  disclosureSource: ExecutionRun["disclosure"]["source"],
): boolean {
  if (!evidence || evidence.length === 0) return false;
  return evidence.some(
    (e) =>
      e.official === true &&
      e.late === false &&
      e.completeness === "complete" &&
      e.source === disclosureSource,
  );
}

/** Cursor association until G-D2D-CURSOR-01 is consumed (never by this package). */
export function isCursorAssociated(run: ExecutionRun): boolean {
  return (
    run.intent.requestedLane === "cursor" ||
    run.disclosure.providerLane === "cursor" ||
    run.capability?.lane === "cursor"
  );
}

export function checkExecutionRunInvariants(run: ExecutionRun): InvariantIssue[] {
  const issues: InvariantIssue[] = [];
  if (run.persistence.kind !== "memory_process_local") {
    issues.push({ code: "PERSISTENCE", message: "Only memory_process_local allowed in D2-D1" });
  }
  if (run.persistence.durable || run.persistence.multiInstance || run.persistence.restartSafe) {
    issues.push({ code: "CLAIM", message: "Durable/multi-instance/restart-safe claims forbidden" });
  }
  if (run.disclosure.source !== run.context.declaredSource) {
    issues.push({ code: "SOURCE", message: "disclosure source mismatch vs declared context source" });
  }

  if (isCursorAssociated(run)) {
    if (run.disclosure.cursorUnverified !== true) {
      issues.push({
        code: "CURSOR_UNVERIFIED_DISCLOSURE_REQUIRED",
        message: "Cursor-associated runs require disclosure.cursorUnverified === true",
      });
    }
    if (run.capability?.verified === true) {
      issues.push({
        code: "CURSOR_VERIFIED_CLAIM_FORBIDDEN",
        message: "Cursor capability.verified=true is forbidden until G-D2D-CURSOR-01 is consumed",
      });
    }
  }

  if (run.state === "succeeded") {
    const external = run.externalResult;
    if (!external || external.kind !== "success") {
      issues.push({
        code: "SUCCEEDED_EXTERNAL_RESULT",
        message: "succeeded requires ExternalResult kind success",
      });
    } else if (!canSucceed(external.completeness)) {
      issues.push({
        code: "PARTIAL_SUCCESS",
        message: "succeeded requires complete external result",
      });
    }
    if (!hasOfficialSuccessEvidence(run.evidence, run.disclosure.source)) {
      issues.push({
        code: "SUCCEEDED_EVIDENCE",
        message: "succeeded requires official complete non-late evidence",
      });
    }
  }

  if (run.state === "failed") {
    if (!run.failure) {
      issues.push({ code: "FAILED_FAILURE", message: "failed requires NormalizedFailure" });
    }
  }

  if (run.state === "blocked") {
    const hasFailure = Boolean(run.failure);
    const hasReason =
      typeof run.blockedReason === "string" && run.blockedReason.trim().length > 0;
    if (!hasFailure && !hasReason) {
      issues.push({
        code: "BLOCKED_REASON",
        message: "blocked requires NormalizedFailure or non-empty blockedReason",
      });
    }
  }

  return issues;
}
