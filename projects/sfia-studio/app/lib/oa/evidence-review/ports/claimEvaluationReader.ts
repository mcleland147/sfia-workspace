/**
 * Read-only ClaimEvaluation access for MaturityAssessment (D4).
 * Never mutates ClaimEvaluation.
 */
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";

export interface ClaimEvaluationReaderPort {
  findById(claimEvaluationId: string): Promise<ClaimEvaluation | null>;
  /** True when another ClaimEvaluation supersedes this id. */
  isSuperseded(claimEvaluationId: string): Promise<boolean>;
}
