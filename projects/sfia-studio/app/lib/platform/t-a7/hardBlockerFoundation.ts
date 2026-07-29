/**
 * T-A7 HARD foundation — INTERNAL_ONLY control contract.
 * Documents R-T-A3-1/2/3/4 evidence without closing HARD.
 * CI green alone never closes HARD; deliveryReady always false.
 */

export type HardReserveId =
  | "R_T_A3_1"
  | "R_T_A3_2"
  | "R_T_A3_3"
  | "R_T_A3_4";

export type HardEvidenceState =
  | "NONE"
  | "PARTIAL"
  | "FOUNDATION_PRESENT"
  | "UNKNOWN";

export interface HardReserveRecord {
  readonly id: HardReserveId;
  readonly severity: "HARD" | "OPEN";
  readonly label: string;
  readonly evidenceState: HardEvidenceState;
  readonly proofAvailable: readonly string[];
  readonly proofMissing: readonly string[];
  readonly openDependencies: readonly string[];
  readonly remainsOpen: true;
}

export interface HardFoundationSnapshot {
  readonly schemaVersion: "t-a7-hard-foundation.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly lifecycle: "REDUCED" | "OPEN";
  readonly openHard: true;
  readonly remainsOpen: true;
  readonly deliveryReady: false;
  readonly cutoverReady: false;
  readonly closedByCiGreen: false;
  readonly actionAuthorized: "CONTINUE_FOUNDATION_ONLY";
  readonly actionForbidden: readonly [
    "DELIVERY",
    "CUTOVER",
    "CLOSE_HARD",
    "IGNORE_HARD",
  ];
  readonly stopReason: string;
  readonly reserves: readonly HardReserveRecord[];
  readonly reductionEvidence: readonly string[];
  readonly closureCriteriaUnmet: readonly string[];
  readonly mutable: false;
  readonly writeCommands: false;
  readonly iam: "NOT_SELECTED";
  readonly persistenceProduct: "NOT_SELECTED";
}

export interface HardFoundationInput {
  readonly foundationPresent?: boolean;
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
 * Evaluate HARD foundation. Always remains OPEN HARD.
 * REDUCED only means simulation/foundation contracts exist.
 */
export function evaluateHardFoundation(
  input: HardFoundationInput = {},
): HardFoundationSnapshot {
  const foundationPresent = input.foundationPresent ?? true;
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const evidence: HardEvidenceState = foundationPresent
    ? "FOUNDATION_PRESENT"
    : "PARTIAL";

  const reserves: readonly HardReserveRecord[] = [
    {
      id: "R_T_A3_1",
      severity: "HARD",
      label: "Critical acknowledge / authority (no public Critical ack API)",
      evidenceState: evidence,
      proofAvailable: foundationPresent
        ? ["hard-foundation-contract", "fail-closed-hold"]
        : [],
      proofMissing: [
        "authenticated Critical acknowledge API",
        "IAM-backed authority",
        "Morris GO for real Critical execution",
      ],
      openDependencies: ["IAM", "DELIVERY_GATE"],
      remainsOpen: true,
    },
    {
      id: "R_T_A3_2",
      severity: "HARD",
      label: "Decision↔LPS/Epistemic and Project↔Cycle durable atomicity",
      evidenceState: evidence,
      proofAvailable: foundationPresent
        ? [
            "bounded-local-atomic-audit",
            "project-cycle-coordinator-sim",
            "idempotency-keys",
          ]
        : [],
      proofMissing: [
        "cross-store durable Project↔Cycle transaction",
        "authorized non-prod rollback drill",
        "production concurrency proof",
      ],
      openDependencies: ["R1", "PERSISTENCE_PRODUCT"],
      remainsOpen: true,
    },
    {
      id: "R_T_A3_3",
      severity: "OPEN",
      label: "Authority registry (in-memory)",
      evidenceState: "PARTIAL",
      proofAvailable: ["memory-authority-placeholder"],
      proofMissing: ["durable authority registry"],
      openDependencies: ["IAM"],
      remainsOpen: true,
    },
    {
      id: "R_T_A3_4",
      severity: "OPEN",
      label: "Enum mapping hygiene",
      evidenceState: "PARTIAL",
      proofAvailable: [],
      proofMissing: ["full enum hygiene audit"],
      openDependencies: [],
      remainsOpen: true,
    },
  ];

  return freezeDeep({
    schemaVersion: "t-a7-hard-foundation.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    lifecycle: foundationPresent ? "REDUCED" : "OPEN",
    openHard: true,
    remainsOpen: true,
    deliveryReady: false,
    cutoverReady: false,
    closedByCiGreen: false,
    actionAuthorized: "CONTINUE_FOUNDATION_ONLY",
    actionForbidden: [
      "DELIVERY",
      "CUTOVER",
      "CLOSE_HARD",
      "IGNORE_HARD",
    ],
    stopReason:
      "HARD remains OPEN HARD — authority/atomicity unresolved; SC-07 / TR-S-08 apply.",
    reserves,
    reductionEvidence: foundationPresent
      ? [
          "INTERNAL_ONLY hard foundation contract",
          "bounded local atomic audit (node:sqlite)",
          "project↔cycle coordinator with honest productionRollbackProven=false",
        ]
      : [],
    closureCriteriaUnmet: [
      "R-T-A3-1 authenticated Critical ack",
      "R-T-A3-2 durable cross-store atomicity",
      "Morris dedicated HARD closure gate",
      "No IAM/delivery/production requirement residual",
    ],
    mutable: false,
    writeCommands: false,
    iam: "NOT_SELECTED",
    persistenceProduct: "NOT_SELECTED",
  });
}

export function assertHardNeverClosedByCi(
  snap: HardFoundationSnapshot,
): void {
  if (snap.openHard !== true || snap.remainsOpen !== true) {
    throw new Error("HARD must remain OPEN HARD in this lot.");
  }
  if (snap.deliveryReady !== false || snap.closedByCiGreen !== false) {
    throw new Error("HARD must never be delivery-ready or closed by CI.");
  }
}
