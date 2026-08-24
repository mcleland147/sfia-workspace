/**
 * W3-B Contract Result subject/mode — TD-W3B-01 / TD-W3B-02 Option B.
 * EO/ER identity is positional + bound semanticFingerprint (no cross-version matching).
 * Assessment material = Attempt.boundExecutionContract only.
 */

import type {
  ClaimConfirmationAuthority,
  ClaimEvaluationMethod,
} from "./claimEvaluationTypes";
import type { ActorReference } from "@/lib/oa/doctrine";
import { validateBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import type { ExecutionAttemptSnapshot } from "./types";

export const CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT =
  "execution_contract_result" as const;

export type ClaimEvaluationSubjectKind =
  | typeof CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT;

export type ContractResultItemKind = "EO" | "ER";

export type ExpectedOutputAssessmentResult = "PASS" | "NOT_PROVEN" | "FAIL";

export type EvidenceRequirementAssessmentResult =
  | "SATISFIED"
  | "NOT_SATISFIED"
  | "NOT_PROVEN";

/** Deterministic item identity: (semanticFingerprint, kind, ordinal). */
export type ContractResultItemId = {
  readonly semanticFingerprint: string;
  readonly itemKind: ContractResultItemKind;
  readonly ordinal: number;
};

export type ContractResultBindings = {
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly executionContractSemanticFingerprint: string;
  readonly executionAttemptId: string;
  readonly reviewBundleId: string;
  readonly reviewBundleVersion: number;
  readonly evidenceRefs: readonly string[];
};

export type ContractResultAssessmentProvenance = {
  readonly evaluatorRef: string;
  readonly evaluatedAt: string;
  readonly ruleRef?: string;
};

export type ContractResultReviewConfirmation = {
  readonly confirmedBy: ActorReference;
  readonly confirmedAt: string;
};

export type ExpectedOutputAssessment = {
  readonly itemId: ContractResultItemId;
  readonly expectation: string;
  readonly result: ExpectedOutputAssessmentResult;
  readonly method: ClaimEvaluationMethod;
  readonly ruleRef?: string;
  readonly provenance: ContractResultAssessmentProvenance;
  readonly reviewConfirmation?: ContractResultReviewConfirmation;
};

export type EvidenceRequirementAssessment = {
  readonly itemId: ContractResultItemId;
  readonly requirement: string;
  readonly result: EvidenceRequirementAssessmentResult;
  readonly method: ClaimEvaluationMethod;
  readonly ruleRef?: string;
  readonly provenance: ContractResultAssessmentProvenance;
  readonly reviewConfirmation?: ContractResultReviewConfirmation;
};

/** Server-derived projection only — NOT durable SoT (ARCH-R06-A). */
export type ContractResultVerdict = "PASS" | "NOT_PROVEN" | "FAIL";

export const W3B_CONTRACT_RESULT_RULE_REF =
  "w3b-product-completion-contract-result-v1" as const;

export const W3B_CONTRACT_RESULT_REVIEW_POLICY_REF =
  "w3b-product-completion-contract-result-review-v1" as const;

export function buildContractResultItemId(input: {
  semanticFingerprint: string;
  itemKind: ContractResultItemKind;
  ordinal: number;
}): ContractResultItemId {
  return {
    semanticFingerprint: input.semanticFingerprint,
    itemKind: input.itemKind,
    ordinal: input.ordinal,
  };
}

export function resolveContractResultConfirmationAuthority(
  method: ClaimEvaluationMethod,
): ClaimConfirmationAuthority {
  if (method === "deterministic") return "system_deterministic";
  return "authorized_human";
}

export type BoundSnapshotValidityExpectations = {
  readonly expectedProjectId?: string;
  readonly expectedCycleInstanceId?: string | null;
};

/**
 * TD-W3B-02 Option B — Contract Result snapshot validity.
 * Thin wrapper over canonical validateBoundExecutionContractSnapshot (requirePresent).
 * Does NOT consult latest ExecutionContract.
 */
export function isAttemptBoundSnapshotValid(
  attempt: Pick<
    ExecutionAttemptSnapshot,
    | "executionContractId"
    | "executionContractVersion"
    | "executionContractSemanticFingerprint"
    | "boundExecutionContract"
  >,
  expectations?: BoundSnapshotValidityExpectations,
): boolean {
  return validateBoundExecutionContractSnapshot({
    attempt,
    requirePresent: true,
    expectedProjectId: expectations?.expectedProjectId,
    expectedCycleInstanceId: expectations?.expectedCycleInstanceId,
  }).ok;
}

/**
 * @deprecated Option B — use isAttemptBoundSnapshotValid. Kept as alias for tests
 * that only need id+fingerprint presence against a bound attempt identity.
 */
export function isAttemptContractImmutablyBound(input: {
  contract: {
    executionContractId: string;
    semanticFingerprint?: string;
  };
  attempt: {
    executionContractId: string;
    executionContractVersion: number;
    executionContractSemanticFingerprint?: string;
    boundExecutionContract?: ExecutionAttemptSnapshot["boundExecutionContract"];
  };
}): boolean {
  if (input.attempt.boundExecutionContract) {
    return (
      input.contract.executionContractId === input.attempt.executionContractId &&
      isAttemptBoundSnapshotValid(input.attempt)
    );
  }
  // Historical missing snapshot — not immutably bound for Contract Result PASS.
  return false;
}

/** @deprecated alias */
export const isAttemptContractExactlyBound = isAttemptContractImmutablyBound;

/**
 * FC-11 / readback — CE bindings must match Attempt + bound snapshot (not latest EC).
 */
export function contractResultBindingsMatchCurrentFacts(input: {
  bindings: ContractResultBindings;
  attempt: {
    attemptId: string;
    executionContractId: string;
    executionContractVersion: number;
    executionContractSemanticFingerprint?: string;
    boundExecutionContract?: ExecutionAttemptSnapshot["boundExecutionContract"];
  };
  reviewBundle: {
    reviewBundleId: string;
    frozenVersion?: number;
  };
  evidenceIds: readonly string[];
  /** Optional project/cycle cross-check from durable CE bindings / material. */
  projectId?: string;
  cycleInstanceId?: string | null;
}): boolean {
  const snap = input.attempt.boundExecutionContract;
  if (!snap) return false;
  const expectedProjectId = input.projectId ?? input.bindings.projectId;
  const expectedCycleInstanceId =
    input.cycleInstanceId !== undefined
      ? input.cycleInstanceId
      : (input.bindings.cycleInstanceId ?? null);
  if (
    !isAttemptBoundSnapshotValid(input.attempt, {
      expectedProjectId,
      expectedCycleInstanceId,
    })
  ) {
    return false;
  }
  const attemptFp = snap.semanticFingerprint;

  if (
    input.bindings.projectId !== expectedProjectId ||
    input.bindings.executionContractId !== input.attempt.executionContractId ||
    input.bindings.executionContractVersion !==
      input.attempt.executionContractVersion ||
    input.bindings.executionContractSemanticFingerprint !== attemptFp ||
    input.bindings.executionAttemptId !== input.attempt.attemptId ||
    input.bindings.reviewBundleId !== input.reviewBundle.reviewBundleId ||
    input.bindings.reviewBundleVersion !== input.reviewBundle.frozenVersion
  ) {
    return false;
  }
  if (
    (input.bindings.cycleInstanceId ?? null) !==
    (expectedCycleInstanceId ?? null)
  ) {
    return false;
  }
  if (input.bindings.evidenceRefs.length !== input.evidenceIds.length) {
    return false;
  }
  for (let i = 0; i < input.evidenceIds.length; i += 1) {
    if (input.bindings.evidenceRefs[i] !== input.evidenceIds[i]) return false;
  }
  return true;
}
