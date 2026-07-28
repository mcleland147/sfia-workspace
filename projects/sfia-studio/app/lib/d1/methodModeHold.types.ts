/**
 * Shared MethodMode hold types (no mutable state).
 */

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
