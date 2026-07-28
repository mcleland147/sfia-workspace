/**
 * T-A7 Lot 1 — MethodMode hold (evaluation-only, no schema migration).
 * Default: ACTIVE while structural blockers remain open.
 *
 * Test overrides: `methodModeHold.test-only.ts` only (never barrel-exported).
 */

import { D1Error } from "./errors";
import { logD1 } from "./observability";
import { methodModeHoldOverrideSlot } from "./methodModeHold.store";
import type {
  MethodModeHoldReason,
  MethodModeHoldState,
  MethodModeTransitionDecision,
} from "./methodModeHold.types";

export {
  METHOD_MODE_HOLD_REASON_CODES,
  type MethodModeHoldReasonCode,
  type MethodModeHoldReason,
  type MethodModeHoldState,
  type MethodModeTransitionDecision,
} from "./methodModeHold.types";

const DEFAULT_REASONS: readonly MethodModeHoldReason[] = [
  {
    code: "B5_OPEN",
    detail: "B5 remains OPEN — STOP BEFORE DELIVERY.",
  },
  {
    code: "R1_OPEN",
    detail: "R1 atomicity reserve remains OPEN.",
  },
  {
    code: "R_M01_OPEN",
    detail: "R-M01 ClaimEvaluator readiness remains OPEN.",
  },
  {
    code: "HARD_OPEN",
    detail: "HARD blockers remain OPEN HARD.",
  },
  {
    code: "T_A7_BOUNDED_LOT_ACTIVE",
    detail: "T-A7 OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY.",
  },
  {
    code: "F11_2_INCOMPLETE",
    detail: "F11.2 readiness foundation is incomplete vs cutover.",
  },
  {
    code: "F13_4_INCOMPLETE",
    detail: "F13.4 read-only foundation is incomplete vs final runtime view.",
  },
] as const;

function nowIso(): string {
  return new Date().toISOString();
}

export function getDefaultMethodModeHoldState(
  evaluatedAt = nowIso(),
): MethodModeHoldState {
  return {
    active: true,
    reasons: DEFAULT_REASONS,
    evaluatedAt,
    provenance: "governance-default",
    completeness: "BOUNDED_LOT_1",
  };
}

export function readMethodModeHold(
  evaluatedAt = nowIso(),
): MethodModeHoldState {
  const override = methodModeHoldOverrideSlot.current;
  if (override) {
    return {
      ...override,
      evaluatedAt,
      reasons: [...override.reasons],
    };
  }
  return getDefaultMethodModeHoldState(evaluatedAt);
}

export function decideMethodModeTransition(): MethodModeTransitionDecision {
  const hold = readMethodModeHold();
  // Conservative: any active hold blocks, even with empty reasons.
  if (hold.active) {
    return {
      allowed: false,
      hold,
      decision: "BLOCK",
      authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE",
    };
  }
  return {
    allowed: true,
    hold,
    decision: "ALLOW",
    authorization: "ALLOWED_WHEN_HOLD_INACTIVE",
  };
}

export function assertMethodModeTransitionAllowed(): MethodModeTransitionDecision {
  const decision = decideMethodModeTransition();
  if (!decision.allowed) {
    const codes =
      decision.hold.reasons.map((r) => r.code).join(",") || "ACTIVE_NO_REASONS";
    logD1("method_mode_hold_blocked", {
      status: "blocked",
      reasonCount: decision.hold.reasons.length,
      codes,
    });
    throw new D1Error(
      "CONFLICT",
      `MethodMode transition blocked by active hold (${codes}).`,
    );
  }
  logD1("method_mode_hold_allowed", {
    status: "allowed",
    provenance: decision.hold.provenance,
  });
  return decision;
}
