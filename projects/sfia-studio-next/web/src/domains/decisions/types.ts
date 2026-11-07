/** D6 decision kinds stored on human_decisions.kind. */
export const DECISION_KINDS = [
  "RETAIN_TRAJECTORY",
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "REVOKE_DECISION",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "RECORD_DECISION",
  "REVISE_DECISION",
] as const;

export type DecisionKind = (typeof DECISION_KINDS)[number];

export type DecisionState = "APPLICABLE" | "REVISED" | "REVOKED" | "SUPERSEDED";

/** Restriction target kinds understood by evaluateCurrentAuthority. */
export const RESTRICTION_TARGETS = ["CYCLE_MUTATION", "METHOD_USE", "PILOTAGE_EFFECT"] as const;

export type RestrictionTargetKind = (typeof RESTRICTION_TARGETS)[number];

export type AuthorityRestriction = {
  id: string;
  targetKind: string;
  targetRef: string;
  status: string;
};

export type AuthorityVerdict = {
  allowed: boolean;
  usageRestricted: boolean;
  restrictionId?: string;
  reason?: string;
};
