/**
 * TD-W3B-02 Option B + ARCH-R02 — deterministic EO/ER assessment for contract-result mode.
 * Identity: (bound semanticFingerprint, kind, ordinal). Material from Attempt snapshot only.
 * Dispatches to the applicable Result Semantics Registry entry (AND over evidences).
 */
import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import type {
  ContractResultAssessmentProvenance,
  ExpectedOutputAssessment,
  EvidenceRequirementAssessment,
} from "../domain/contractResultTypes";
import { buildContractResultItemId } from "../domain/contractResultTypes";
import {
  resolveApplicableContractResultSemantics,
  type ContractResultSemantic,
} from "./contractResultSemantics";

export type ContractResultAssessmentInput = {
  /** Bound semantic material from Attempt.boundExecutionContract — not latest EC. */
  readonly semanticMaterial: ExecutionContractSemanticMaterial;
  readonly semanticFingerprint: string;
  readonly attempt: ExecutionAttemptSnapshot;
  /** @deprecated prefer evidences — single Evidence kept for back-compat call sites. */
  readonly evidence?: Evidence;
  readonly evidences?: readonly Evidence[];
  readonly evaluatedAt: string;
  readonly evaluatorRef?: string;
  readonly frozenEvidenceSnapshot?: ReviewBundleEvidenceSnapshot;
  readonly frozenEvidenceSnapshots?: readonly ReviewBundleEvidenceSnapshot[];
};

function resolveEvidences(
  input: ContractResultAssessmentInput,
): readonly Evidence[] {
  if (input.evidences && input.evidences.length > 0) return input.evidences;
  if (input.evidence) return [input.evidence];
  return [];
}

function resolveFrozenSnapshots(
  input: ContractResultAssessmentInput,
): readonly ReviewBundleEvidenceSnapshot[] {
  if (input.frozenEvidenceSnapshots) return input.frozenEvidenceSnapshots;
  if (input.frozenEvidenceSnapshot) return [input.frozenEvidenceSnapshot];
  return [];
}

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

function resolveSemantic(
  material: ExecutionContractSemanticMaterial,
): ContractResultSemantic | null {
  const resolved = resolveApplicableContractResultSemantics(material);
  if (resolved.status === "one") return resolved.semantic;
  return null;
}

export function assessExpectedOutputs(
  input: ContractResultAssessmentInput,
): ExpectedOutputAssessment[] {
  const fp = input.semanticFingerprint;
  const outputs = input.semanticMaterial.expectedOutputs ?? [];
  const semantic = resolveSemantic(input.semanticMaterial);
  const ruleRef = semantic?.ruleRef;
  const prov = provenance(input, ruleRef);
  const evidences = resolveEvidences(input);

  return outputs.map((expectation, ordinal) => {
    let result: ExpectedOutputAssessment["result"] = "NOT_PROVEN";
    if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
      result = "FAIL";
    } else if (
      input.attempt.status === "cancelled" &&
      input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
    ) {
      result = "NOT_PROVEN";
    } else if (semantic) {
      result = semantic.assessExpectedOutput({
        expectation,
        ordinal,
        attempt: input.attempt,
        evidences,
        material: input.semanticMaterial,
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
  const semantic = resolveSemantic(input.semanticMaterial);
  const ruleRef = semantic?.ruleRef;
  const prov = provenance(input, ruleRef);
  const evidences = resolveEvidences(input);
  const frozenSnapshots = resolveFrozenSnapshots(input);

  return requirements.map((requirement, ordinal) => {
    let result: EvidenceRequirementAssessment["result"] = "NOT_PROVEN";
    if (
      input.attempt.status === "failed" ||
      input.attempt.status === "timeout"
    ) {
      result = "NOT_SATISFIED";
    } else if (semantic) {
      result = semantic.assessEvidenceRequirement({
        requirement,
        ordinal,
        attempt: input.attempt,
        evidences,
        frozenSnapshots,
        material: input.semanticMaterial,
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
