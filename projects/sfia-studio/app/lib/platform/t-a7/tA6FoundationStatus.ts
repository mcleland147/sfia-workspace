/**
 * T-A6 foundation status — INTERNAL_ONLY.
 * Advances evidence model without declaring T-A6 COMPLETE.
 */

import { evaluateBoundedClaim } from "./boundedClaimEvaluator";

export type TA6CapabilityId =
  | "D1_EVIDENCE"
  | "D2_REVIEW_BUNDLE"
  | "D3_CLAIM_EVALUATION"
  | "D4_MATURITY"
  | "D5_NEXT_GATE"
  | "R_M01_BOUNDED_EVALUATOR"
  | "T6_C11_RESERVES"
  | "T6_C15_MORRIS_GO";

export interface TA6CapabilityRow {
  readonly id: TA6CapabilityId;
  readonly contract: string;
  readonly state: "PRESENT" | "PARTIAL" | "MISSING";
  readonly reducibleInThisLot: boolean;
  readonly note: string;
}

export interface TA6FoundationSnapshot {
  readonly schemaVersion: "t-a7-ta6-foundation.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly status: "FOUNDATION_ADVANCED";
  readonly remainsIncomplete: true;
  readonly tA6Complete: false;
  readonly optionAComplete: false;
  readonly rM01RemainsOpen: true;
  readonly capabilities: readonly TA6CapabilityRow[];
  readonly sampleSurclaimGuard: "BLOCKED" | "UNSUPPORTED";
  readonly mutable: false;
  readonly iam: "NOT_SELECTED";
  readonly persistenceProduct: "NOT_SELECTED";
}

export interface TA6FoundationInput {
  readonly evaluatedAt?: string;
  readonly foundationEvidencePresent?: boolean;
}

export function evaluateTA6Foundation(
  input: TA6FoundationInput = {},
): TA6FoundationSnapshot {
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const foundationEvidencePresent = input.foundationEvidencePresent ?? true;

  const capabilities: readonly TA6CapabilityRow[] = [
    {
      id: "D1_EVIDENCE",
      contract: "Evidence register/ingest/verify (OA memory)",
      state: "PRESENT",
      reducibleInThisLot: false,
      note: "Already integrated in-memory; not closed by this lot.",
    },
    {
      id: "D2_REVIEW_BUNDLE",
      contract: "ReviewBundle lifecycle",
      state: "PRESENT",
      reducibleInThisLot: false,
      note: "Memory-bounded OA capability.",
    },
    {
      id: "D3_CLAIM_EVALUATION",
      contract: "Evaluate/confirm/reject claims",
      state: "PRESENT",
      reducibleInThisLot: true,
      note: "Bounded anti-surclaim evaluator reinforced; production ClaimEvaluator ≠ closed.",
    },
    {
      id: "D4_MATURITY",
      contract: "Maturity propose/confirm/downgrade",
      state: "PRESENT",
      reducibleInThisLot: false,
      note: "Existing OA memory path.",
    },
    {
      id: "D5_NEXT_GATE",
      contract: "RecommendNextGate read-only",
      state: "PRESENT",
      reducibleInThisLot: false,
      note: "Auto-launch forbidden preserved.",
    },
    {
      id: "R_M01_BOUNDED_EVALUATOR",
      contract: "Governance ClaimEvaluator readiness",
      state: foundationEvidencePresent ? "PARTIAL" : "MISSING",
      reducibleInThisLot: true,
      note: "Further reduced via foundation evidence; R-M01 remains OPEN.",
    },
    {
      id: "T6_C11_RESERVES",
      contract: "R-M01 / U-M02 / C1–C4 resolved or bounded",
      state: "MISSING",
      reducibleInThisLot: false,
      note: "Blocks T-A6 COMPLETE declaration.",
    },
    {
      id: "T6_C15_MORRIS_GO",
      contract: "GO DECLARE T-A6 COMPLETE",
      state: "MISSING",
      reducibleInThisLot: false,
      note: "Requires distinct Morris gate.",
    },
  ];

  const surclaim = evaluateBoundedClaim({
    claimId: "T_A6_COMPLETE",
    tA6Complete: false,
    hardOpen: true,
  });

  return Object.freeze({
    schemaVersion: "t-a7-ta6-foundation.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    status: "FOUNDATION_ADVANCED",
    remainsIncomplete: true,
    tA6Complete: false,
    optionAComplete: false,
    rM01RemainsOpen: true,
    capabilities: Object.freeze(capabilities.map((c) => Object.freeze({ ...c }))),
    sampleSurclaimGuard: surclaim.status === "BLOCKED" ? "BLOCKED" : "UNSUPPORTED",
    mutable: false,
    iam: "NOT_SELECTED",
    persistenceProduct: "NOT_SELECTED",
  });
}
