/**
 * TD-W3B-02 + ARCH-R02 — deterministic EO/ER assessment for contract-result mode.
 * Identity: (semanticFingerprint, kind, ordinal). Semantic pass requires known applicable rule.
 */
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
import type {
  ContractResultAssessmentProvenance,
  ExpectedOutputAssessment,
  EvidenceRequirementAssessment,
} from "../domain/contractResultTypes";
import {
  buildContractResultItemId,
} from "../domain/contractResultTypes";
import {
  assessTempArtifactEvidenceRequirement,
  assessTempArtifactExpectedOutput,
  resolveApplicableContractResultRule,
} from "./contractResultSemanticEvaluator";

export type ContractResultAssessmentInput = {
  readonly contract: ExecutionContract;
  readonly attempt: ExecutionAttemptSnapshot;
  readonly evidence: Evidence;
  readonly evaluatedAt: string;
  readonly evaluatorRef?: string;
  readonly frozenEvidenceSnapshot?: {
    evidenceId: string;
    evidenceVersion: number;
    status: string;
    availability: string;
  };
};

function provenance(
  input: ContractResultAssessmentInput,
  ruleRef?: string,
): ContractResultAssessmentProvenance {
  return {
    evaluatorRef: input.evaluatorRef ?? "w3b-contract-result-assessor",
    evaluatedAt: input.evaluatedAt,
    ...(ruleRef ? { ruleRef } : {}),
  };
}

export function assessExpectedOutputs(
  input: ContractResultAssessmentInput,
): ExpectedOutputAssessment[] {
  const fp = input.contract.semanticFingerprint ?? "";
  const outputs = input.contract.expectedOutputs ?? [];
  const rule = resolveApplicableContractResultRule(input.contract);
  const ruleRef = rule.applicable ? rule.ruleRef : undefined;
  const prov = provenance(input, ruleRef);

  return outputs.map((expectation, ordinal) => {
    let result: ExpectedOutputAssessment["result"] = "NOT_PROVEN";
    if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
      result = "FAIL";
    } else if (
      input.attempt.status === "cancelled" &&
      input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
    ) {
      result = "NOT_PROVEN";
    } else if (rule.applicable) {
      result = assessTempArtifactExpectedOutput({
        expectation,
        ordinal,
        attempt: input.attempt,
        evidence: input.evidence,
      });
    }
    return {
      itemId: buildContractResultItemId({
        semanticFingerprint: fp,
        itemKind: "EO",
        ordinal,
      }),
      expectation,
      result,
      method: "deterministic",
      ruleRef,
      provenance: prov,
    };
  });
}

export function assessEvidenceRequirements(
  input: ContractResultAssessmentInput,
): EvidenceRequirementAssessment[] {
  const fp = input.contract.semanticFingerprint ?? "";
  const requirements = input.contract.evidenceRequirements ?? [];
  const rule = resolveApplicableContractResultRule(input.contract);
  const ruleRef = rule.applicable ? rule.ruleRef : undefined;
  const prov = provenance(input, ruleRef);

  return requirements.map((requirement, ordinal) => {
    let result: EvidenceRequirementAssessment["result"] = "NOT_PROVEN";
    if (
      input.attempt.status === "failed" ||
      input.attempt.status === "timeout"
    ) {
      result = "NOT_SATISFIED";
    } else if (rule.applicable) {
      result = assessTempArtifactEvidenceRequirement({
        requirement,
        ordinal,
        attempt: input.attempt,
        evidence: input.evidence,
        frozenSnapshot: input.frozenEvidenceSnapshot,
      });
    }
    return {
      itemId: buildContractResultItemId({
        semanticFingerprint: fp,
        itemKind: "ER",
        ordinal,
      }),
      requirement,
      result,
      method: "deterministic",
      ruleRef,
      provenance: prov,
    };
  });
}

export function deriveCanonicalContractResultStatus(input: {
  attemptStatus: string;
  expectedOutputAssessments: readonly ExpectedOutputAssessment[];
  evidenceRequirementAssessments: readonly EvidenceRequirementAssessment[];
}): "pass" | "fail" | "not_proven" {
  const allEoPass = input.expectedOutputAssessments.every((a) => a.result === "PASS");
  const allErSatisfied = input.evidenceRequirementAssessments.every(
    (a) => a.result === "SATISFIED",
  );
  const anyEoFail = input.expectedOutputAssessments.some((a) => a.result === "FAIL");
  const anyErNotSatisfied = input.evidenceRequirementAssessments.some(
    (a) => a.result === "NOT_SATISFIED",
  );

  if (anyEoFail || anyErNotSatisfied) return "fail";
  if (
    input.attemptStatus === "succeeded" &&
    allEoPass &&
    allErSatisfied &&
    input.expectedOutputAssessments.length > 0 &&
    input.evidenceRequirementAssessments.length > 0
  ) {
    return "pass";
  }
  return "not_proven";
}

export function buildContractResultClaimStatement(input: {
  contract: ExecutionContract;
  attemptStatus: string;
  status: "pass" | "fail" | "not_proven";
  boundContractVersion?: number;
  notApplicableReason?: string;
}): string {
  const eoCount = input.contract.expectedOutputs?.length ?? 0;
  const erCount = input.contract.evidenceRequirements?.length ?? 0;
  const version = input.boundContractVersion ?? input.contract.version;
  const suffix = input.notApplicableReason
    ? ` — ${input.notApplicableReason}`
    : "";
  return (
    `Contract result assessment (${input.status}) for EC ${input.contract.executionContractId}` +
    `@v${version} — attempt ${input.attemptStatus} — EO:${eoCount} ER:${erCount}${suffix}`
  );
}

/** Infer attempt terminal class from structured EO assessments for confirm re-derivation. */
export function inferAttemptStatusFromContractResultAssessments(
  expectedOutputAssessments: readonly ExpectedOutputAssessment[],
): string {
  if (expectedOutputAssessments.some((a) => a.result === "FAIL")) {
    return "failed";
  }
  if (
    expectedOutputAssessments.length > 0 &&
    expectedOutputAssessments.every((a) => a.result === "PASS")
  ) {
    return "succeeded";
  }
  return "unknown";
}
