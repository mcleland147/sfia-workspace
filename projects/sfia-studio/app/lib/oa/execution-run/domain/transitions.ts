/**
 * Pure eight-state transition authority (FD-02/03/04/06).
 * Sole decision of whether a transition is valid for D2-D.
 */
import type { Completeness, ExecutionState } from "./types";
import { isTerminalState } from "./types";

export type TransitionReason =
  | "intent_valid"
  | "pre_engagement_block"
  | "human_gate_required"
  | "outputs_validated"
  | "engaged_operation_failed"
  | "time_limit"
  | "cancel_accepted"
  | "human_approve"
  | "human_cancel"
  | "human_reject_or_unsatisfied"
  | "human_gate_expired"
  | "late_result_evidence_only"
  | "forbidden";

export type TransitionRequest = {
  readonly from: ExecutionState;
  readonly to: ExecutionState;
  readonly reason: TransitionReason;
  /** Required when to === succeeded */
  readonly completeness?: Completeness;
};

export type TransitionDecision =
  | { readonly allowed: true }
  | { readonly allowed: false; readonly code: string; readonly message: string };

/** Allowed edges from documents 21 §J + FD-06 (awaiting_human → timed_out). */
const ALLOWED: ReadonlyArray<readonly [ExecutionState, ExecutionState, TransitionReason]> = [
  ["idle", "running", "intent_valid"],
  ["idle", "blocked", "pre_engagement_block"],
  ["running", "awaiting_human", "human_gate_required"],
  ["running", "succeeded", "outputs_validated"],
  ["running", "failed", "engaged_operation_failed"],
  ["running", "timed_out", "time_limit"],
  ["running", "cancelled", "cancel_accepted"],
  ["awaiting_human", "running", "human_approve"],
  ["awaiting_human", "cancelled", "human_cancel"],
  ["awaiting_human", "blocked", "human_reject_or_unsatisfied"],
  ["awaiting_human", "timed_out", "human_gate_expired"],
];

export function isAllowedTransition(
  from: ExecutionState,
  to: ExecutionState,
  reason: TransitionReason,
): boolean {
  return ALLOWED.some(([f, t, r]) => f === from && t === to && r === reason);
}

export function decideTransition(req: TransitionRequest): TransitionDecision {
  if (req.reason === "late_result_evidence_only") {
    return {
      allowed: false,
      code: "LATE_RESULT_NO_STATE_MUTATION",
      message: "Late result is evidence-only and must not mutate state",
    };
  }

  if (isTerminalState(req.from)) {
    return {
      allowed: false,
      code: "TERMINAL_REQUIRES_NEW_RUN",
      message: "Terminal state requires a new run identity",
    };
  }

  if (req.to === "succeeded") {
    if (req.completeness === "partial") {
      return {
        allowed: false,
        code: "PARTIAL_NEVER_SUCCEEDED",
        message: "Partial completeness cannot transition to succeeded",
      };
    }
    if (req.completeness !== "complete") {
      return {
        allowed: false,
        code: "SUCCEEDED_REQUIRES_COMPLETE",
        message: "succeeded requires completeness complete",
      };
    }
  }

  if (!isAllowedTransition(req.from, req.to, req.reason)) {
    return {
      allowed: false,
      code: "TRANSITION_FORBIDDEN",
      message: `Transition ${req.from}→${req.to} (${req.reason}) is not allowed`,
    };
  }

  return { allowed: true };
}

export function listAllowedTransitions(): ReadonlyArray<{
  from: ExecutionState;
  to: ExecutionState;
  reason: TransitionReason;
}> {
  return ALLOWED.map(([from, to, reason]) => ({ from, to, reason }));
}
