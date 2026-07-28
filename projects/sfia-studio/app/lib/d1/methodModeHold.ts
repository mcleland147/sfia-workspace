/**
 * T-A7 Lot 1 — MethodMode hold (evaluation-only, no schema migration).
 * Default: ACTIVE while structural blockers remain open.
 * TEST/DIAGNOSTIC overrides are test-only and must not ship as product IAM.
 */

import { D1Error } from "./errors";
import { logD1 } from "./observability";

export const METHOD_MODE_HOLD_REASON_CODES = [
  "B5_OPEN",
  "R1_OPEN",
  "R_M01_OPEN",
  "HARD_OPEN",
  "T_A7_BOUNDED_LOT_ACTIVE",
  "F11_2_INCOMPLETE",
  "F13_4_INCOMPLETE",
] as const;

export type MethodModeHoldReasonCode =
  (typeof METHOD_MODE_HOLD_REASON_CODES)[number];

export interface MethodModeHoldReason {
  code: MethodModeHoldReasonCode;
  detail: string;
}

export interface MethodModeHoldState {
  active: boolean;
  reasons: readonly MethodModeHoldReason[];
  evaluatedAt: string;
  provenance: "governance-default" | "test-override";
  completeness: "BOUNDED_LOT_1";
}

export interface MethodModeTransitionDecision {
  allowed: boolean;
  hold: MethodModeHoldState;
  decision: "ALLOW" | "BLOCK";
  authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE" | "ALLOWED_WHEN_HOLD_INACTIVE";
}

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

let testOverride: MethodModeHoldState | null = null;

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
  if (testOverride) {
    return {
      ...testOverride,
      evaluatedAt,
      reasons: [...testOverride.reasons],
    };
  }
  return getDefaultMethodModeHoldState(evaluatedAt);
}

export function decideMethodModeTransition(): MethodModeTransitionDecision {
  const hold = readMethodModeHold();
  if (hold.active && hold.reasons.length > 0) {
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
    const codes = decision.hold.reasons.map((r) => r.code).join(",");
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

/** TEST ONLY — restore default conservative hold. */
export function resetMethodModeHoldForTests(): void {
  testOverride = null;
}

/** TEST ONLY — override hold state (e.g. inactive for legacy foundation tests). */
export function setMethodModeHoldForTests(
  state: Omit<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness"> &
    Partial<
      Pick<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness">
    >,
): void {
  testOverride = {
    active: state.active,
    reasons: Object.freeze([...state.reasons]),
    evaluatedAt: state.evaluatedAt ?? nowIso(),
    provenance: state.provenance ?? "test-override",
    completeness: state.completeness ?? "BOUNDED_LOT_1",
  };
}
