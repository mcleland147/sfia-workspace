/**
 * In-memory ClaimEvaluation store — NOT DATABASE SELECTED (U-M02 OPEN).
 */
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type { ClaimEvaluationIdempotencyRecord } from "../ports/claimEvaluationRepository";

export class MemoryClaimEvaluationStore {
  claims = new Map<string, ClaimEvaluation>();
  idempotencyIndex = new Map<string, ClaimEvaluationIdempotencyRecord>();
  failNextSave = false;
}
