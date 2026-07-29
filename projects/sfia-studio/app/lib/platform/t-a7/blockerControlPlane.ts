/**
 * T-A7 consolidated lot — B5 pre-delivery control plane (INTERNAL_ONLY).
 * Deterministic stop conditions. Never produces delivery-ready while HARD is open.
 * No real delivery mechanism.
 */

export type BlockerId = "B5" | "R1" | "R_M01" | "HARD";

export type BlockerLifecycleStatus = "OPEN" | "REDUCED" | "UNKNOWN";

export type BlockerSeverity = "STOP_BEFORE_DELIVERY" | "ATOMICITY" | "CLAIM_EVAL" | "HARD";

export type EvidenceState =
  | "NONE"
  | "PARTIAL"
  | "FOUNDATION_PRESENT"
  | "UNKNOWN";

export type PreDeliveryAction =
  | "STOP_BEFORE_DELIVERY"
  | "CONTINUE_FRAMING_ONLY"
  | "UNKNOWN";

export interface PreDeliveryBlockerRecord {
  readonly id: BlockerId;
  readonly status: BlockerLifecycleStatus;
  readonly severity: BlockerSeverity;
  readonly openDependencies: readonly BlockerId[];
  readonly evidenceState: EvidenceState;
  readonly stopReason: string;
  readonly actionAuthorized: PreDeliveryAction;
  readonly deliveryReady: false;
  readonly detail: string;
}

export interface PreDeliveryControlDecision {
  readonly schemaVersion: "t-a7-b5-control-plane.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly blockers: readonly PreDeliveryBlockerRecord[];
  readonly hardOpen: true;
  readonly b5Open: true;
  readonly deliveryReady: false;
  readonly stopReason: string;
  readonly actionAuthorized: "STOP_BEFORE_DELIVERY";
  readonly mutable: false;
  readonly writeCommands: false;
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
}

export interface PreDeliveryControlInput {
  /** When true, B5 control evidence foundation is considered present (still OPEN). */
  readonly b5FoundationPresent?: boolean;
  /** Optional evaluation timestamp (ISO-8601). */
  readonly evaluatedAt?: string;
}

function freezeDeep<T extends object>(value: T): T {
  Object.freeze(value);
  for (const v of Object.values(value)) {
    if (v && typeof v === "object" && !Object.isFrozen(v)) {
      freezeDeep(v as object);
    }
  }
  return value;
}

/**
 * Evaluate pre-delivery control. HARD and B5 remain open by contract in this lot.
 * deliveryReady is always false.
 */
export function evaluatePreDeliveryControl(
  input: PreDeliveryControlInput = {},
): PreDeliveryControlDecision {
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const b5Evidence: EvidenceState = input.b5FoundationPresent
    ? "FOUNDATION_PRESENT"
    : "PARTIAL";

  const hard: PreDeliveryBlockerRecord = {
    id: "HARD",
    status: "OPEN",
    severity: "HARD",
    openDependencies: [],
    evidenceState: "NONE",
    stopReason: "HARD remains OPEN HARD — authority/atomicity unresolved.",
    actionAuthorized: "STOP_BEFORE_DELIVERY",
    deliveryReady: false,
    detail: "UNCHANGED — lot does not reduce HARD.",
  };

  const b5: PreDeliveryBlockerRecord = {
    id: "B5",
    status: input.b5FoundationPresent ? "REDUCED" : "OPEN",
    severity: "STOP_BEFORE_DELIVERY",
    openDependencies: ["HARD"],
    evidenceState: b5Evidence,
    stopReason:
      "B5 remains OPEN — STOP BEFORE DELIVERY while HARD is open and delivery is unauthorized.",
    actionAuthorized: "STOP_BEFORE_DELIVERY",
    deliveryReady: false,
    detail: input.b5FoundationPresent
      ? "Control-plane foundation present; blocker REDUCED but still OPEN for delivery."
      : "Control-plane foundation incomplete; blocker OPEN.",
  };

  const r1: PreDeliveryBlockerRecord = {
    id: "R1",
    status: "OPEN",
    severity: "ATOMICITY",
    openDependencies: ["HARD"],
    evidenceState: "PARTIAL",
    stopReason: "R1 atomicity reserve remains OPEN.",
    actionAuthorized: "CONTINUE_FRAMING_ONLY",
    deliveryReady: false,
    detail: "Atomicity/rollback evidence may reduce R1 separately; never delivery-ready.",
  };

  const rm01: PreDeliveryBlockerRecord = {
    id: "R_M01",
    status: "OPEN",
    severity: "CLAIM_EVAL",
    openDependencies: [],
    evidenceState: "PARTIAL",
    stopReason: "R-M01 ClaimEvaluator readiness remains OPEN (T-A6 incomplete).",
    actionAuthorized: "CONTINUE_FRAMING_ONLY",
    deliveryReady: false,
    detail: "Bounded claim evaluation may reduce R-M01; never closes T-A6.",
  };

  const decision: PreDeliveryControlDecision = {
    schemaVersion: "t-a7-b5-control-plane.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    blockers: [b5, r1, rm01, hard],
    hardOpen: true,
    b5Open: true,
    deliveryReady: false,
    stopReason:
      "STOP BEFORE DELIVERY — B5 OPEN and HARD OPEN HARD; no delivery authorization.",
    actionAuthorized: "STOP_BEFORE_DELIVERY",
    mutable: false,
    writeCommands: false,
    iam: "NOT_SELECTED",
    persistence: "NOT_SELECTED",
  };

  return freezeDeep(decision);
}

export function assertNeverDeliveryReady(
  decision: PreDeliveryControlDecision,
): void {
  if (decision.deliveryReady !== false || decision.actionAuthorized !== "STOP_BEFORE_DELIVERY") {
    throw new Error(
      "Pre-delivery control violated: deliveryReady must be false and action STOP_BEFORE_DELIVERY.",
    );
  }
  if (!decision.hardOpen || !decision.b5Open) {
    throw new Error(
      "Pre-delivery control violated: HARD and B5 must remain open in this lot.",
    );
  }
  for (const b of decision.blockers) {
    if (b.deliveryReady !== false) {
      throw new Error(`Blocker ${b.id} must never report deliveryReady.`);
    }
  }
}
