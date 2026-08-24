/**
 * TD-W3B-02 Option B + ARCH-R02 — deterministic EO/ER assessment for contract-result mode.
 * Identity: (bound semanticFingerprint, kind, ordinal). Material from Attempt snapshot only.
 */
import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
import type {
  ContractResultAssessmentProvenance,
  ExpectedOutputAssessment,
  EvidenceRequirementAssessment,
} from "../domain/contractResultTypes";
import { buildContractResultItemId } from "../domain/contractResultTypes";
import {
  assessTempArtifactEvidenceRequirement,
  assessTempArtifactExpectedOutput,
  resolveApplicableContractResultRule,
} from "./contractResultSemanticEvaluator";

export type ContractResultAssessmentInput = {
  /** Bound semantic material from Attempt.boundExecutionContract — not latest EC. */
  readonly semanticMaterial: ExecutionContractSemanticMaterial;
  readonly semanticFingerprint: string;
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
  const fp = input.semanticFingerprint;
  const outputs = input.semanticMaterial.expectedOutputs ?? [];
  const rule = resolveApplicableContractResultRule(input.semanticMaterial);
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
      method: "deterministic" as const,
      ...(ruleRef ? { ruleRef } : {}),
      provenance: prov,
    };
  });
}

export function assessEvidenceRequirements(
  input: ContractResultAssessmentInput,
): EvidenceRequirementAssessment[] {
  const fp = input.semanticFingerprint;
  const requirements = input.semanticMaterial.evidenceRequirements ?? [];
  const rule = resolveApplicableContractResultRule(input.semanticMaterial);
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
      method: "deterministic" as const,
      ...(ruleRef ? { ruleRef } : {}),
      provenance: prov,
    };
  });
}

export function deriveCanonicalContractResultStatus(input: {
  attemptStatus: string;
  expectedOutputAssessments: readonly ExpectedOutputAssessment[];
  evidenceRequirementAssessments: readonly EvidenceRequirementAssessment[];
}): "pass" | "fail" | "not_proven" {
  const allEoPass = input.expectedOutputAssessments.every(
    (a) => a.result === "PASS",
  );
  const allErSatisfied = input.evidenceRequirementAssessments.every(
    (a) => a.result === "SATISFIED",
  );
  const anyEoFail = input.expectedOutputAssessments.some(
    (a) => a.result === "FAIL",
  );
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
  executionContractId: string;
  attemptStatus: string;
  status: "pass" | "fail" | "not_proven";
  boundContractVersion: number;
  expectedOutputCount?: number;
  evidenceRequirementCount?: number;
  notApplicableReason?: string;
}): string {
  const eoCount = input.expectedOutputCount ?? 0;
  const erCount = input.evidenceRequirementCount ?? 0;
  const suffix = input.notApplicableReason
    ? ` — ${input.notApplicableReason}`
    : "";
  return (
    `Contract result assessment (${input.status}) for EC ${input.executionContractId}` +
    `@v${input.boundContractVersion} — attempt ${input.attemptStatus} — EO:${eoCount} ER:${erCount}${suffix}`
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
