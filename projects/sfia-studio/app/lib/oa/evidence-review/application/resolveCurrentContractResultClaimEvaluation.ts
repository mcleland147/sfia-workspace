/**
 * Resolve the current (non-superseded) Contract Result ClaimEvaluation for an Attempt.
 *
 * Fail-closed lineage:
 * - 0 active CE → none
 * - exactly 1 active CE → one
 * - >1 active non-superseded CE → ambiguous (never pick by timestamp/id)
 */
import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "../domain/contractResultTypes";
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";

export type ResolveCurrentContractResultClaimEvaluationResult =
  | { readonly status: "none" }
  | { readonly status: "one"; readonly claimEvaluation: ClaimEvaluation }
  | {
      readonly status: "ambiguous";
      readonly claimEvaluationIds: readonly string[];
    };

export async function resolveCurrentContractResultClaimEvaluation(input: {
  repo: ClaimEvaluationRepositoryPort;
  projectId: string;
  executionAttemptId: string;
}): Promise<ResolveCurrentContractResultClaimEvaluationResult> {
  const all = await input.repo.listByProject(input.projectId);
  const forAttempt = all.filter(
    (c) =>
      c.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT &&
      c.contractResultBindings?.executionAttemptId ===
        input.executionAttemptId,
  );
  if (forAttempt.length === 0) return { status: "none" };

  const superseded = new Set<string>();
  for (const c of forAttempt) {
    if (c.supersedesClaimEvaluationId) {
      superseded.add(c.supersedesClaimEvaluationId);
    }
  }

  const current = forAttempt.filter(
    (c) => !superseded.has(c.claimEvaluationId),
  );
  if (current.length === 0) return { status: "none" };
  if (current.length === 1) {
    return {
      status: "one",
      claimEvaluation: structuredClone(current[0]!),
    };
  }

  const claimEvaluationIds = [...current.map((c) => c.claimEvaluationId)].sort();
  return { status: "ambiguous", claimEvaluationIds };
}
