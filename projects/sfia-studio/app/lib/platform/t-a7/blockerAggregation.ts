/**
 * T-A7 consolidated lot — read-only aggregation of B5 / R1 / R-M01 / HARD.
 * INTERNAL_ONLY. No HTTP, UI, IAM, persistence, or mutations.
 */

import {
  evaluatePreDeliveryControl,
  type PreDeliveryControlDecision,
} from "./blockerControlPlane";
import {
  evaluateBoundedClaim,
  type BoundedClaimEvaluation,
} from "./boundedClaimEvaluator";

export type AggregatedBlockerReduction =
  | "REDUCED"
  | "PARTIAL"
  | "NOT_REDUCED"
  | "UNCHANGED";

export interface AggregatedBlockerEntry {
  readonly id: "B5" | "R1" | "R_M01" | "HARD";
  readonly lifecycle: "OPEN" | "REDUCED" | "OPEN_HARD";
  readonly reduction: AggregatedBlockerReduction;
  readonly remainsOpen: true;
  readonly reasonsOpen: readonly string[];
  readonly nextEvidenceRequired: readonly string[];
  readonly evidenceState: string;
}

export interface BlockerAggregationSnapshot {
  readonly schemaVersion: "t-a7-blocker-aggregation.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly preDelivery: PreDeliveryControlDecision;
  readonly sampleClaimGuard: BoundedClaimEvaluation;
  readonly blockers: readonly AggregatedBlockerEntry[];
  readonly hardUnchanged: true;
  readonly deliveryAuthorized: false;
  readonly cutoverAuthorized: false;
  readonly runReady: false;
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
  readonly httpRoute: false;
}

export interface BlockerAggregationInput {
  readonly b5FoundationPresent?: boolean;
  readonly r1SimulationEvidencePresent?: boolean;
  readonly rM01FoundationPresent?: boolean;
  readonly evaluatedAt?: string;
}

export function queryBlockerAggregation(
  input: BlockerAggregationInput = {},
): BlockerAggregationSnapshot {
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const b5FoundationPresent = input.b5FoundationPresent ?? true;
  const r1SimulationEvidencePresent =
    input.r1SimulationEvidencePresent ?? true;
  const rM01FoundationPresent = input.rM01FoundationPresent ?? true;

  const preDelivery = evaluatePreDeliveryControl({
    b5FoundationPresent,
    evaluatedAt,
  });

  const sampleClaimGuard = evaluateBoundedClaim({
    claimId: "DELIVERY_READY",
    hardOpen: true,
    tA6Complete: false,
    ciGreen: true,
    healthStatus: "SIMULATED",
  });

  const blockers: readonly AggregatedBlockerEntry[] = [
    {
      id: "B5",
      lifecycle: b5FoundationPresent ? "REDUCED" : "OPEN",
      reduction: b5FoundationPresent ? "REDUCED" : "NOT_REDUCED",
      remainsOpen: true,
      reasonsOpen: [
        "HARD remains OPEN HARD",
        "STOP BEFORE DELIVERY still applies",
        "No delivery authorization",
      ],
      nextEvidenceRequired: [
        "Morris delivery gate",
        "HARD resolution or accepted bounded waiver",
        "Real pre-delivery acceptance evidence",
      ],
      evidenceState: b5FoundationPresent
        ? "FOUNDATION_PRESENT"
        : "PARTIAL",
    },
    {
      id: "R1",
      lifecycle: r1SimulationEvidencePresent ? "REDUCED" : "OPEN",
      reduction: r1SimulationEvidencePresent ? "REDUCED" : "NOT_REDUCED",
      remainsOpen: true,
      reasonsOpen: [
        "Production rollback not proven",
        "Simulation/in-memory only",
        "HARD / Project↔Cycle atomicity unresolved",
      ],
      nextEvidenceRequired: [
        "Authorized rollback drill (non-prod)",
        "Durable atomicity before real execution",
      ],
      evidenceState: r1SimulationEvidencePresent
        ? "FOUNDATION_PRESENT"
        : "PARTIAL",
    },
    {
      id: "R_M01",
      lifecycle: rM01FoundationPresent ? "REDUCED" : "OPEN",
      reduction: rM01FoundationPresent ? "REDUCED" : "NOT_REDUCED",
      remainsOpen: true,
      reasonsOpen: [
        "T-A6 not declared complete",
        "Bounded evaluator ≠ production ClaimEvaluator closure",
        "Surclaim refusals do not close the reserve",
      ],
      nextEvidenceRequired: [
        "T-A6 completion gate",
        "Morris closure of R-M01",
      ],
      evidenceState: rM01FoundationPresent
        ? "FOUNDATION_PRESENT"
        : "PARTIAL",
    },
    {
      id: "HARD",
      lifecycle: "OPEN_HARD",
      reduction: "UNCHANGED",
      remainsOpen: true,
      reasonsOpen: [
        "Authority / atomicity OPEN HARD",
        "Lot explicitly does not modify HARD",
      ],
      nextEvidenceRequired: [
        "Dedicated HARD reduction gate",
      ],
      evidenceState: "NONE",
    },
  ];

  return Object.freeze({
    schemaVersion: "t-a7-blocker-aggregation.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    preDelivery,
    sampleClaimGuard,
    blockers: Object.freeze(blockers.map((b) => Object.freeze({ ...b }))),
    hardUnchanged: true,
    deliveryAuthorized: false,
    cutoverAuthorized: false,
    runReady: false,
    iam: "NOT_SELECTED",
    persistence: "NOT_SELECTED",
    mutable: false,
    adminUi: false,
    writeCommands: false,
    httpRoute: false,
  });
}
