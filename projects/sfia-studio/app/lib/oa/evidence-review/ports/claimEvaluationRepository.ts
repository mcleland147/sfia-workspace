import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";

export type ClaimEvaluationIdempotencyRecord = {
  claimEvaluationId: string;
  fingerprint: string;
  operation:
    | "evaluate_claim"
    | "confirm_claim"
    | "reject_claim"
    | "evaluate_contract_result";
};

export interface ClaimEvaluationRepositoryPort {
  findById(claimEvaluationId: string): Promise<ClaimEvaluation | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<{
    claimEvaluation: ClaimEvaluation;
    record: ClaimEvaluationIdempotencyRecord;
  } | null>;
  exists(claimEvaluationId: string): Promise<boolean>;
  create(
    claim: ClaimEvaluation,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void>;
  update(
    claim: ClaimEvaluation,
    expectedVersion: number,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void>;
}
