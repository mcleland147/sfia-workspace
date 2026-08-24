import type { ProductSqliteHandle } from "@/lib/oa/project";
import { ClaimEvaluationDomainError } from "../../domain/claimEvaluationErrors";
import { validateClaimEvaluationShape } from "../../domain/claimEvaluationInvariants";
import type { ClaimEvaluation } from "../../domain/claimEvaluationTypes";
import type {
  ClaimEvaluationIdempotencyRecord,
  ClaimEvaluationRepositoryPort,
} from "../../ports/claimEvaluationRepository";

type ClaimRow = {
  claim_evaluation_id: string;
  project_id: string | null;
  status: string;
  idempotency_key: string | null;
  version: number;
  payload_json: string;
};

type IdempotencyRow = {
  idempotency_key: string;
  claim_evaluation_id: string;
  fingerprint: string;
  operation: string;
};

function cloneClaim(claim: ClaimEvaluation): ClaimEvaluation {
  return structuredClone(claim);
}

/**
 * Durable ClaimEvaluation repository on Product SQLite (M8).
 */
export class SqliteClaimEvaluationRepository
  implements ClaimEvaluationRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(claimEvaluationId: string): Promise<ClaimEvaluation | null> {
    const row = this.store.db
      .prepare(
        `SELECT claim_evaluation_id, project_id, status, idempotency_key, version, payload_json
         FROM oa_claim_evaluations WHERE claim_evaluation_id = ?`,
      )
      .get(claimEvaluationId) as ClaimRow | undefined;
    if (!row) return null;
    return cloneClaim(JSON.parse(row.payload_json) as ClaimEvaluation);
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    claimEvaluation: ClaimEvaluation;
    record: ClaimEvaluationIdempotencyRecord;
  } | null> {
    const row = this.store.db
      .prepare(
        `SELECT idempotency_key, claim_evaluation_id, fingerprint, operation
         FROM oa_claim_evaluation_idempotency WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as IdempotencyRow | undefined;
    if (!row) return null;
    const claimEvaluation = await this.findById(row.claim_evaluation_id);
    if (!claimEvaluation) return null;
    return {
      claimEvaluation,
      record: {
        claimEvaluationId: row.claim_evaluation_id,
        fingerprint: row.fingerprint,
        operation: row.operation as ClaimEvaluationIdempotencyRecord["operation"],
      },
    };
  }

  async exists(claimEvaluationId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_claim_evaluations WHERE claim_evaluation_id = ?`)
      .get(claimEvaluationId) as { ok?: number } | undefined;
    return row?.ok === 1;
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
    if (await this.exists(claim.claimEvaluationId)) {
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_ALREADY_EXISTS",
        "claim_evaluation_id_taken",
      );
    }
    this.failIfForced();
    this.insertClaim(claim);
    if (record && claim.idempotencyKey) {
      this.upsertIdempotency(claim.idempotencyKey, record);
    }
  }

  async update(
    claim: ClaimEvaluation,
    expectedVersion: number,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void> {
    if (claim.version !== expectedVersion + 1) {
      throw new ClaimEvaluationDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion },
      );
    }
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      throw new ClaimEvaluationDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    await this.store.runInTransaction(async () => {
      const changes = this.updateClaimRowCas(claim, expectedVersion);
      if (changes !== 1) {
        const current = await this.findById(claim.claimEvaluationId);
        if (!current) {
          throw new ClaimEvaluationDomainError(
            "CLAIM_EVALUATION_NOT_FOUND",
            "update_missing",
          );
        }
        throw new ClaimEvaluationDomainError("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion,
          currentVersion: current.version,
        });
      }
      if (record) {
        const key = claim.idempotencyKey;
        if (key) this.upsertIdempotency(key, record);
      }
    });
  }

  private insertClaim(claim: ClaimEvaluation): void {
    const now = claim.proposedAt;
    const projectId = claim.contractResultBindings?.projectId ?? null;
    const payload = JSON.stringify(cloneClaim(claim));
    this.store.db
      .prepare(
        `INSERT INTO oa_claim_evaluations(
           claim_evaluation_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        claim.claimEvaluationId,
        projectId,
        claim.status,
        claim.idempotencyKey ?? null,
        claim.version,
        payload,
        now,
        now,
      );
  }

  private updateClaimRowCas(
    claim: ClaimEvaluation,
    expectedVersion: number,
  ): number {
    const now = claim.updatedAt ?? claim.evaluatedAt ?? claim.proposedAt;
    const projectId = claim.contractResultBindings?.projectId ?? null;
    const payload = JSON.stringify(cloneClaim(claim));
    const result = this.store.db
      .prepare(
        `UPDATE oa_claim_evaluations SET
           project_id = ?,
           status = ?,
           idempotency_key = ?,
           version = ?,
           payload_json = ?,
           updated_at = ?
         WHERE claim_evaluation_id = ? AND version = ?`,
      )
      .run(
        projectId,
        claim.status,
        claim.idempotencyKey ?? null,
        claim.version,
        payload,
        now,
        claim.claimEvaluationId,
        expectedVersion,
      );
    return Number(result.changes);
  }

  private upsertIdempotency(
    idempotencyKey: string,
    record: ClaimEvaluationIdempotencyRecord,
  ): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_claim_evaluation_idempotency(
           idempotency_key, claim_evaluation_id, fingerprint, operation
         ) VALUES (?, ?, ?, ?)
         ON CONFLICT(idempotency_key) DO UPDATE SET
           claim_evaluation_id = excluded.claim_evaluation_id,
           fingerprint = excluded.fingerprint,
           operation = excluded.operation`,
      )
      .run(
        idempotencyKey,
        record.claimEvaluationId,
        record.fingerprint,
        record.operation,
      );
  }

  private failIfForced(): void {
    if (this.store.failNextSave === "claim_evaluation") {
      this.store.failNextSave = null;
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
        "forced_claim_evaluation_save_failure",
      );
    }
  }
}
