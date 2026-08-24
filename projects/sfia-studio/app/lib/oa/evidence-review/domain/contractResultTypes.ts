/**
 * W3-B Contract Result subject/mode — TD-W3B-01 / TD-W3B-02.
 * EO/ER identity is positional + EC semanticFingerprint bound (no cross-version matching).
 */

import type {
  ClaimConfirmationAuthority,
  ClaimEvaluationMethod,
} from "./claimEvaluationTypes";

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

export type ExpectedOutputAssessment = {
  readonly itemId: ContractResultItemId;
  readonly expectation: string;
  readonly result: ExpectedOutputAssessmentResult;
  readonly method: ClaimEvaluationMethod;
  readonly ruleRef?: string;
  readonly provenance: ContractResultAssessmentProvenance;
};

export type EvidenceRequirementAssessment = {
  readonly itemId: ContractResultItemId;
  readonly requirement: string;
  readonly result: EvidenceRequirementAssessmentResult;
  readonly method: ClaimEvaluationMethod;
  readonly ruleRef?: string;
  readonly provenance: ContractResultAssessmentProvenance;
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

/** TA-5 post-selection status transitions may bump EC.version without EO/ER drift. */
export const TA5_STATUS_VERSION_DRIFT_MAX = 2;

export function isAttemptContractVersionBound(input: {
  contract: { executionContractId: string; version: number };
  attempt: {
    executionContractId: string;
    executionContractVersion: number;
  };
}): boolean {
  if (
    input.contract.executionContractId !== input.attempt.executionContractId
  ) {
    return false;
  }
  const drift =
    input.contract.version - input.attempt.executionContractVersion;
  return drift >= 0 && drift <= TA5_STATUS_VERSION_DRIFT_MAX;
}
