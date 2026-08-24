/**
 * TD-W3B-02 — deterministic EO/ER assessment for contract-result mode.
 * Free-text expectations remain EC source; identity is positional + fingerprint bound.
 */
import type { ExecutionAttemptSnapshot } from "../domain/types";
import type { Evidence } from "../domain/types";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type {
  ContractResultAssessmentProvenance,
  ExpectedOutputAssessment,
  EvidenceRequirementAssessment,
} from "../domain/contractResultTypes";
import {
  W3B_CONTRACT_RESULT_RULE_REF,
  buildContractResultItemId,
} from "../domain/contractResultTypes";

export type ContractResultAssessmentInput = {
  readonly contract: ExecutionContract;
  readonly attempt: ExecutionAttemptSnapshot;
  readonly evidence: Evidence;
  readonly evaluatedAt: string;
  readonly evaluatorRef?: string;
};

function provenance(
  input: ContractResultAssessmentInput,
): ContractResultAssessmentProvenance {
  return {
    evaluatorRef: input.evaluatorRef ?? "w3b-contract-result-assessor",
    evaluatedAt: input.evaluatedAt,
    ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
  };
}

function eoPassEligible(input: ContractResultAssessmentInput): boolean {
  if (input.attempt.status !== "succeeded") return false;
  if (!input.attempt.resultRef?.trim()) return false;
  if (!input.contract.scope?.trim()) return false;
  if (input.evidence.technicalResultRef !== input.attempt.resultRef) return false;
  return true;
}

export function assessExpectedOutputs(
  input: ContractResultAssessmentInput,
): ExpectedOutputAssessment[] {
  const fp = input.contract.semanticFingerprint ?? "";
  const outputs = input.contract.expectedOutputs ?? [];
  const prov = provenance(input);
  const passEligible = eoPassEligible(input);

  return outputs.map((expectation, ordinal) => {
    let result: ExpectedOutputAssessment["result"] = "NOT_PROVEN";
    if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
      result = "FAIL";
    } else if (
      input.attempt.status === "cancelled" &&
      input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
    ) {
      result = "NOT_PROVEN";
    } else if (passEligible) {
      result = "PASS";
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
      ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
      provenance: prov,
    };
  });
}

export function assessEvidenceRequirements(
  input: ContractResultAssessmentInput,
): EvidenceRequirementAssessment[] {
  const fp = input.contract.semanticFingerprint ?? "";
  const requirements = input.contract.evidenceRequirements ?? [];
  const prov = provenance(input);
  const evidenceOk =
    input.evidence.status === "available" || input.evidence.status === "verified";

  return requirements.map((requirement, ordinal) => {
    let result: EvidenceRequirementAssessment["result"] = "NOT_PROVEN";
    if (!evidenceOk) {
      result = "NOT_SATISFIED";
    } else if (
      input.attempt.status === "failed" ||
      input.attempt.status === "timeout"
    ) {
      result = "NOT_SATISFIED";
    } else {
      result = "SATISFIED";
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
      ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
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
    input.expectedOutputAssessments.length > 0
  ) {
    return "pass";
  }
  return "not_proven";
}

export function buildContractResultClaimStatement(input: {
  contract: ExecutionContract;
  attemptStatus: string;
  status: "pass" | "fail" | "not_proven";
}): string {
  const eoCount = input.contract.expectedOutputs?.length ?? 0;
  const erCount = input.contract.evidenceRequirements?.length ?? 0;
  return (
    `Contract result assessment (${input.status}) for EC ${input.contract.executionContractId}` +
    `@v${input.contract.version} — attempt ${input.attemptStatus} — EO:${eoCount} ER:${erCount}`
  );
}
