/**
 * Server-derived Contract Result verdict projection (ARCH-R06-A).
 * Canonical SoT remains ClaimEvaluation.status — never arbitrate two truths.
 */
import type { ClaimEvaluationStatus } from "../domain/claimEvaluationTypes";
import type { ContractResultVerdict } from "../domain/contractResultTypes";

export function projectContractResultVerdict(
  status: ClaimEvaluationStatus,
): ContractResultVerdict {
  if (status === "pass") return "PASS";
  if (status === "fail") return "FAIL";
  return "NOT_PROVEN";
}

export function contractResultVerdictAgreesWithStatus(input: {
  status: ClaimEvaluationStatus;
  verdict: ContractResultVerdict;
}): boolean {
  return projectContractResultVerdict(input.status) === input.verdict;
}
