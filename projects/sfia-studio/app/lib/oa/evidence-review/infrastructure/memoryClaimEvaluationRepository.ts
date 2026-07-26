import { ClaimEvaluationDomainError } from "../domain/claimEvaluationErrors";
import { validateClaimEvaluationShape } from "../domain/claimEvaluationInvariants";
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type {
  ClaimEvaluationIdempotencyRecord,
  ClaimEvaluationRepositoryPort,
} from "../ports/claimEvaluationRepository";
import type { MemoryClaimEvaluationStore } from "./memoryClaimEvaluationStore";

export class MemoryClaimEvaluationRepository
  implements ClaimEvaluationRepositoryPort
{
  constructor(private readonly store: MemoryClaimEvaluationStore) {}

  async findById(claimEvaluationId: string): Promise<ClaimEvaluation | null> {
    const found = this.store.claims.get(claimEvaluationId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    claimEvaluation: ClaimEvaluation;
    record: ClaimEvaluationIdempotencyRecord;
  } | null> {
    const record = this.store.idempotencyIndex.get(idempotencyKey);
    if (!record) return null;
    const claimEvaluation = await this.findById(record.claimEvaluationId);
    if (!claimEvaluation) return null;
    return {
      claimEvaluation,
      record: structuredClone(record),
    };
  }

  async exists(claimEvaluationId: string): Promise<boolean> {
    return this.store.claims.has(claimEvaluationId);
  }

  async create(
    claim: ClaimEvaluation,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void> {
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      throw new ClaimEvaluationDomainError(shape.detailCode, shape.reason);
    }
    if (claim.version !== 1) {
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_INVALID",
        "create_requires_version_1",
      );
    }
    if (this.store.claims.has(claim.claimEvaluationId)) {
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_ALREADY_EXISTS",
        "claim_evaluation_id_taken",
      );
    }
    this.failIfForced();
    this.store.claims.set(claim.claimEvaluationId, structuredClone(claim));
    if (record && claim.idempotencyKey) {
      this.store.idempotencyIndex.set(
        claim.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  async update(
    claim: ClaimEvaluation,
    expectedVersion: number,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void> {
    const current = this.store.claims.get(claim.claimEvaluationId);
    if (!current) {
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_NOT_FOUND",
        "update_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ClaimEvaluationDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (claim.version !== expectedVersion + 1) {
      throw new ClaimEvaluationDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      throw new ClaimEvaluationDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.claims.set(claim.claimEvaluationId, structuredClone(claim));
    if (record && claim.idempotencyKey) {
      this.store.idempotencyIndex.set(
        claim.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
        "forced_claim_evaluation_save_failure",
      );
    }
  }
}
