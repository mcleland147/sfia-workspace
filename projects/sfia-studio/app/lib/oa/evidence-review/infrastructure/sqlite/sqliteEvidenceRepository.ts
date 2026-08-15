import type { ProductSqliteHandle } from "@/lib/oa/project";
import { EvidenceDomainError } from "../../domain/errors";
import { validateEvidenceShape } from "../../domain/invariants";
import type { Evidence } from "../../domain/types";
import type {
  EvidenceRepositoryPort,
  IdempotencyRecord,
} from "../../ports/evidenceRepository";

type EvidenceRow = {
  evidence_id: string;
  project_id: string | null;
  status: string;
  idempotency_key: string | null;
  version: number;
  payload_json: string;
};

type IdempotencyRow = {
  idempotency_key: string;
  evidence_id: string;
  fingerprint: string;
  operation: string;
};

function cloneEvidence(evidence: Evidence): Evidence {
  return structuredClone(evidence);
}

/**
 * Durable Evidence repository on Product SQLite (M5).
 * Mirrors MemoryEvidenceRepository OCC + IdempotencyRecord semantics.
 */
export class SqliteEvidenceRepository implements EvidenceRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(evidenceId: string): Promise<Evidence | null> {
    const row = this.store.db
      .prepare(
        `SELECT evidence_id, project_id, status, idempotency_key, version, payload_json
         FROM oa_evidence WHERE evidence_id = ?`,
      )
      .get(evidenceId) as EvidenceRow | undefined;
    if (!row) return null;
    return cloneEvidence(JSON.parse(row.payload_json) as Evidence);
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    evidence: Evidence;
    record: IdempotencyRecord;
  } | null> {
    const row = this.store.db
      .prepare(
        `SELECT idempotency_key, evidence_id, fingerprint, operation
         FROM oa_evidence_idempotency WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as IdempotencyRow | undefined;
    if (!row) return null;
    const evidence = await this.findById(row.evidence_id);
    if (!evidence) return null;
    return {
      evidence,
      record: {
        evidenceId: row.evidence_id,
        fingerprint: row.fingerprint,
        operation: row.operation as IdempotencyRecord["operation"],
      },
    };
  }

  async exists(evidenceId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_evidence WHERE evidence_id = ?`)
      .get(evidenceId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async create(
    evidence: Evidence,
    record?: IdempotencyRecord,
  ): Promise<void> {
    const shape = validateEvidenceShape(evidence);
    if (shape) {
      throw new EvidenceDomainError(shape.detailCode, shape.reason);
    }
    if (evidence.version !== 1) {
      throw new EvidenceDomainError(
        "EVIDENCE_INVALID",
        "create_requires_version_1",
      );
    }
    if (await this.exists(evidence.evidenceId)) {
      throw new EvidenceDomainError(
        "EVIDENCE_ALREADY_EXISTS",
        "evidence_id_taken",
      );
    }
    if (record) {
      const existing = await this.findByIdempotencyKey(
        evidence.idempotencyKey ?? "",
      );
      if (existing && existing.evidence.evidenceId !== evidence.evidenceId) {
        throw new EvidenceDomainError(
          "IDEMPOTENCY_CONFLICT",
          "idempotency_key_taken",
        );
      }
    }
    this.failIfForced();
    const now = evidence.createdAt;
    const payload = JSON.stringify(cloneEvidence(evidence));
    this.store.db
      .prepare(
        `INSERT INTO oa_evidence(
           evidence_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        evidence.evidenceId,
        evidence.bindings.projectId ?? null,
        evidence.status,
        evidence.idempotencyKey ?? null,
        evidence.version,
        payload,
        now,
        now,
      );
    if (record && evidence.idempotencyKey) {
      this.upsertIdempotency(evidence.idempotencyKey, record);
    }
  }

  async update(
    evidence: Evidence,
    expectedVersion: number,
    record?: IdempotencyRecord,
  ): Promise<void> {
    if (evidence.version !== expectedVersion + 1) {
      throw new EvidenceDomainError("VERSION_CONFLICT", "version_not_monotone", {
        expectedVersion,
      });
    }
    const shape = validateEvidenceShape(evidence);
    if (shape) {
      throw new EvidenceDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    const now = evidence.updatedAt ?? evidence.createdAt;
    const payload = JSON.stringify(cloneEvidence(evidence));
    await this.store.runInTransaction(async () => {
      const result = this.store.db
        .prepare(
          `UPDATE oa_evidence SET
             project_id = ?,
             status = ?,
             idempotency_key = ?,
             version = ?,
             payload_json = ?,
             updated_at = ?
           WHERE evidence_id = ? AND version = ?`,
        )
        .run(
          evidence.bindings.projectId ?? null,
          evidence.status,
          evidence.idempotencyKey ?? null,
          evidence.version,
          payload,
          now,
          evidence.evidenceId,
          expectedVersion,
        );
      if (Number(result.changes) !== 1) {
        const current = await this.findById(evidence.evidenceId);
        if (!current) {
          throw new EvidenceDomainError(
            "EVIDENCE_NOT_FOUND",
            "update_missing_evidence",
          );
        }
        throw new EvidenceDomainError("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion,
          currentVersion: current.version,
        });
      }
      if (record && evidence.idempotencyKey) {
        this.upsertIdempotency(evidence.idempotencyKey, record);
      }
    });
  }

  private upsertIdempotency(
    idempotencyKey: string,
    record: IdempotencyRecord,
  ): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_evidence_idempotency(
           idempotency_key, evidence_id, fingerprint, operation
         ) VALUES (?, ?, ?, ?)
         ON CONFLICT(idempotency_key) DO UPDATE SET
           evidence_id = excluded.evidence_id,
           fingerprint = excluded.fingerprint,
           operation = excluded.operation`,
      )
      .run(
        idempotencyKey,
        record.evidenceId,
        record.fingerprint,
        record.operation,
      );
  }

  private failIfForced(): void {
    if (this.store.failNextSave === "evidence") {
      this.store.failNextSave = null;
      throw new EvidenceDomainError(
        "EVIDENCE_PERSISTENCE_FAILED",
        "forced_evidence_save_failure",
      );
    }
  }
}
