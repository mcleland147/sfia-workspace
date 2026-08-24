/**
 * W3-B Contract Result subject/mode — TD-W3B-01 / TD-W3B-02.
 * EO/ER identity is positional + EC semanticFingerprint bound (no cross-version matching).
 */

import type {
  ClaimConfirmationAuthority,
  ClaimEvaluationMethod,
} from "./claimEvaluationTypes";
import type { ActorReference } from "@/lib/oa/doctrine";

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

/**
 * TD-W3B-02 — immutable Attempt EC binding (acceptance-time id + version + fingerprint).
 * Latest EC lifecycle/OCC bumps do NOT move Attempt binding; semantic material is
 * resolved via fingerprint match against latest repository payload (Solution B/C hybrid).
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
  };
}): boolean {
  const contractFp = (input.contract.semanticFingerprint ?? "").trim();
  const attemptFp = (input.attempt.executionContractSemanticFingerprint ?? "").trim();
  if (!contractFp || !attemptFp || !input.attempt.executionContractVersion) {
    return false;
  }
  return (
    input.contract.executionContractId === input.attempt.executionContractId &&
    contractFp === attemptFp
  );
}

/** @deprecated alias — Pass 2: binding is immutable acceptance-time, not latest EC.version */
export const isAttemptContractExactlyBound = isAttemptContractImmutablyBound;

export function contractResultBindingsMatchCurrentFacts(input: {
  bindings: ContractResultBindings;
  contract: {
    projectId: string;
    cycleInstanceId?: string | null;
    executionContractId: string;
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
  const attemptFp = (input.attempt.executionContractSemanticFingerprint ?? "").trim();
  if (
    input.bindings.projectId !== input.contract.projectId ||
    input.bindings.executionContractId !== input.contract.executionContractId ||
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
    (input.contract.cycleInstanceId ?? null) !==
    (input.bindings.cycleInstanceId ?? null)
  ) {
    return false;
  }
  if (!isAttemptContractImmutablyBound({ contract: input.contract, attempt: input.attempt })) {
    return false;
  }
  if (input.bindings.evidenceRefs.length !== input.evidenceIds.length) return false;
  for (let i = 0; i < input.evidenceIds.length; i += 1) {
    if (input.bindings.evidenceRefs[i] !== input.evidenceIds[i]) return false;
  }
  return true;
}
