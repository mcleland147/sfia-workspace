/**
 * Read-only adapter over ClaimEvaluationRepository — never mutates.
 */
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { ClaimEvaluationReaderPort } from "../ports/claimEvaluationReader";
import type { MemoryClaimEvaluationStore } from "./memoryClaimEvaluationStore";

export class ClaimEvaluationRepositoryReader
  implements ClaimEvaluationReaderPort
{
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly store?: MemoryClaimEvaluationStore,
  ) {}

  async findById(
    claimEvaluationId: string,
  ): Promise<ClaimEvaluation | null> {
    return this.repo.findById(claimEvaluationId);
  }

  async isSuperseded(claimEvaluationId: string): Promise<boolean> {
    if (!this.store) return false;
    for (const claim of this.store.claims.values()) {
      if (claim.supersedesClaimEvaluationId === claimEvaluationId) {
        return true;
      }
    }
    return false;
  }
}
