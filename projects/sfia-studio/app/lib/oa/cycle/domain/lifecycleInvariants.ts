/**
 * CORR-PROOF-05 — Pilot-governed CycleInstance lifecycle invariants.
 * Application/domain enforcement (not UI-only).
 */
import type { CycleInstance, CycleInstanceStatus } from "./types";
import type { InvariantViolation } from "./invariants";

/** Authority-bearing working status for ≤1 ACTIVE enforcement. */
export const ACTIVE_AUTHORITY_STATUS: CycleInstanceStatus = "active";

export type PilotLifecycleAction =
  | "START"
  | "PAUSE"
  | "RESUME"
  | "FINALIZE"
  | "CANCEL"
  | "COMPLETE"
  | "BLOCK";

export function isTerminalCycleStatus(status: CycleInstanceStatus): boolean {
  return status === "completed" || status === "cancelled";
}

export function isActiveAuthorityStatus(status: CycleInstanceStatus): boolean {
  return status === ACTIVE_AUTHORITY_STATUS;
}

export function isPausedStatus(status: CycleInstanceStatus): boolean {
  return status === "paused";
}

export function isCandidateNonActiveStatus(status: CycleInstanceStatus): boolean {
  return (
    status === "proposed" ||
    status === "acknowledged" ||
    status === "superseded"
  );
}

/** Startable non-active statuses only — superseded is historical, not startable. */
export function isStartableCandidateStatus(status: CycleInstanceStatus): boolean {
  return status === "proposed" || status === "acknowledged";
}

export function listActiveAuthorityCycles(
  cycles: readonly CycleInstance[],
): CycleInstance[] {
  return cycles.filter((c) => isActiveAuthorityStatus(c.status));
}

/**
 * ≤1 ACTIVE CycleInstance per Project.
 * Optional excludeId allows the cycle being activated to pass through.
 */
export function assertAtMostOneActiveCycle(input: {
  cycles: readonly CycleInstance[];
  excludeCycleInstanceId?: string;
}): InvariantViolation | null {
  const actives = listActiveAuthorityCycles(input.cycles).filter(
    (c) => c.cycleInstanceId !== input.excludeCycleInstanceId,
  );
  if (actives.length > 0) {
    return {
      detailCode: "CYCLE_ALREADY_ACTIVE_EXISTS",
      reason: `active_exists:${actives.map((c) => c.cycleInstanceId).join(",")}`,
    };
  }
  return null;
}

export function assertNotTerminal(
  cycle: CycleInstance,
): InvariantViolation | null {
  if (isTerminalCycleStatus(cycle.status)) {
    return {
      detailCode: "CYCLE_TERMINAL",
      reason: `terminal_${cycle.status}`,
    };
  }
  return null;
}

/**
 * Allowed Pilot lifecycle transitions (domain matrix).
 * BLOCKED remains distinct from PAUSED.
 */
export function assertLifecycleTransition(input: {
  from: CycleInstanceStatus;
  action: PilotLifecycleAction;
}): InvariantViolation | null {
  const { from, action } = input;
  if (isTerminalCycleStatus(from) && action !== "COMPLETE") {
    return {
      detailCode: "CYCLE_TERMINAL",
      reason: `no_transition_from_${from}`,
    };
  }

  const ok = (allowed: boolean, reason: string): InvariantViolation | null =>
    allowed
      ? null
      : { detailCode: "CYCLE_TRANSITION_INVALID", reason };

  switch (action) {
    case "START":
      return ok(
        from === "proposed" || from === "acknowledged",
        `start_from_${from}`,
      );
    case "PAUSE":
      return ok(from === "active", `pause_from_${from}`);
    case "RESUME":
      return ok(from === "paused", `resume_from_${from}`);
    case "FINALIZE":
      return ok(
        from === "active" || from === "paused" || from === "blocked",
        `finalize_from_${from}`,
      );
    case "CANCEL":
      return ok(!isTerminalCycleStatus(from), `cancel_from_${from}`);
    case "COMPLETE":
      return ok(
        from === "active" || from === "paused" || from === "blocked",
        `complete_from_${from}`,
      );
    case "BLOCK":
      return ok(from === "active" || from === "paused", `block_from_${from}`);
    default: {
      const _exhaustive: never = action;
      void _exhaustive;
      return { detailCode: "CYCLE_TRANSITION_INVALID", reason: "unknown_action" };
    }
  }
}

export function targetStatusForAction(
  action: PilotLifecycleAction,
): CycleInstanceStatus | null {
  switch (action) {
    case "START":
    case "RESUME":
      return "active";
    case "PAUSE":
      return "paused";
    case "CANCEL":
      return "cancelled";
    case "COMPLETE":
      return "completed";
    case "BLOCK":
      return "blocked";
    case "FINALIZE":
      // FINALIZE does not by itself complete; status unchanged until COMPLETE.
      return null;
    default: {
      const _exhaustive: never = action;
      void _exhaustive;
      return null;
    }
  }
}
