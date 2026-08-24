/**
 * W3-B ARCH-R02 — bounded server-owned Contract Result semantic evaluator.
 * No NLP, no resultRef-alone PASS, no Evidence-available-alone ER satisfaction.
 */
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";

export const W3B_TEMP_ARTIFACT_RULE_REF =
  "w3b-contract-result/product-generate-temporary-artifact-v1" as const;

export const W3B_TEMP_ARTIFACT_OPERATION_KEY =
  "product:generate-temporary-artifact" as const;

export const W3B_TEMP_ARTIFACT_CAPABILITY = "cap:product-temp-artifact" as const;

export const W3B_TEMP_ARTIFACT_EO_TEMPLATE =
  "Résultat d'exécution — generate-temporary-artifact" as const;

export const W3B_TEMP_ARTIFACT_ER_KEY = "evreq:generate-temporary-artifact" as const;

/** Governed W3-A execute path mints res:w3a:<hex> — server-owned shape only. */
const W3A_RESULT_REF_PATTERN = /^res:w3a:[a-f0-9]+$/;

export type ApplicableContractResultRule =
  | { readonly applicable: true; readonly ruleRef: typeof W3B_TEMP_ARTIFACT_RULE_REF }
  | { readonly applicable: false; readonly ruleRef: null };

export function resolveApplicableContractResultRule(
  contract: Pick<ExecutionContract, "action" | "requiredCapabilities">,
): ApplicableContractResultRule {
  if (contract.action !== W3B_TEMP_ARTIFACT_OPERATION_KEY) {
    return { applicable: false, ruleRef: null };
  }
  if (!contract.requiredCapabilities?.includes(W3B_TEMP_ARTIFACT_CAPABILITY)) {
    return { applicable: false, ruleRef: null };
  }
  return { applicable: true, ruleRef: W3B_TEMP_ARTIFACT_RULE_REF };
}

export function tempArtifactExecutionFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): boolean {
  if (input.attempt.status !== "succeeded") return false;
  const resultRef = input.attempt.resultRef?.trim();
  if (!resultRef || !W3A_RESULT_REF_PATTERN.test(resultRef)) return false;
  return input.evidence.technicalResultRef === resultRef;
}

export function evidenceMatchesFrozenSnapshot(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  if (!input.snapshot) return false;
  if (input.snapshot.evidenceId !== input.evidence.evidenceId) return false;
  if (input.snapshot.evidenceVersion !== input.evidence.version) return false;
  if (
    input.snapshot.availability === "unavailable" ||
    input.snapshot.status === "unavailable"
  ) {
    return false;
  }
  return true;
}

export function assessTempArtifactExpectedOutput(input: {
  expectation: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): "PASS" | "NOT_PROVEN" | "FAIL" {
  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    return "FAIL";
  }
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.expectation !== W3B_TEMP_ARTIFACT_EO_TEMPLATE) return "NOT_PROVEN";
  if (!tempArtifactExecutionFactsHold(input)) return "NOT_PROVEN";
  return "PASS";
}

export function assessTempArtifactEvidenceRequirement(input: {
  requirement: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.requirement !== W3B_TEMP_ARTIFACT_ER_KEY) return "NOT_PROVEN";
  if (!evidenceMatchesFrozenSnapshot({ evidence: input.evidence, snapshot: input.frozenSnapshot })) {
    return "NOT_PROVEN";
  }
  if (!tempArtifactExecutionFactsHold(input)) return "NOT_SATISFIED";
  return "SATISFIED";
}
