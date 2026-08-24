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

/** TD-W3B-02 — exact EC id + version + semanticFingerprint binding (zero drift tolerance). */
export function isAttemptContractExactlyBound(input: {
  contract: {
    executionContractId: string;
    version: number;
    semanticFingerprint?: string;
  };
  attempt: {
    executionContractId: string;
    executionContractVersion: number;
    executionContractSemanticFingerprint?: string;
  };
}): boolean {
  const contractFp = (input.contract.semanticFingerprint ?? "").trim();
  const attemptFp = (input.attempt.executionContractSemanticFingerprint ?? "").trim();
  if (!contractFp || !attemptFp) return false;
  return (
    input.contract.executionContractId === input.attempt.executionContractId &&
    input.contract.version === input.attempt.executionContractVersion &&
    contractFp === attemptFp
  );
}

export function contractResultBindingsMatchCurrentFacts(input: {
  bindings: ContractResultBindings;
  contract: {
    projectId: string;
    cycleInstanceId?: string | null;
    executionContractId: string;
    version: number;
    semanticFingerprint?: string;
  };
  attempt: {
    attemptId: string;
    executionContractId: string;
    executionContractVersion: number;
    executionContractSemanticFingerprint?: string;
  };
  reviewBundle: {
    reviewBundleId: string;
    frozenVersion?: number;
  };
  evidenceIds: readonly string[];
}): boolean {
  const fp = (input.contract.semanticFingerprint ?? "").trim();
  if (
    input.bindings.projectId !== input.contract.projectId ||
    input.bindings.executionContractId !== input.contract.executionContractId ||
    input.bindings.executionContractVersion !== input.contract.version ||
    input.bindings.executionContractSemanticFingerprint !== fp ||
    input.bindings.executionAttemptId !== input.attempt.attemptId ||
    input.bindings.reviewBundleId !== input.reviewBundle.reviewBundleId ||
    input.bindings.reviewBundleVersion !== input.reviewBundle.frozenVersion
  ) {
    return false;
  }
  if (
    (input.contract.cycleInstanceId ?? null) !==
    (input.bindings.cycleInstanceId ?? null)
  ) {
    return false;
  }
  if (!isAttemptContractExactlyBound({ contract: input.contract, attempt: input.attempt })) {
    return false;
  }
  if (input.bindings.evidenceRefs.length !== input.evidenceIds.length) return false;
  for (let i = 0; i < input.evidenceIds.length; i += 1) {
    if (input.bindings.evidenceRefs[i] !== input.evidenceIds[i]) return false;
  }
  return true;
}
