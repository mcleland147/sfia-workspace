import { EvidenceDomainError } from "../domain/errors";
import { validateEvidenceShape } from "../domain/invariants";
import type { Evidence } from "../domain/types";
import type {
  EvidenceRepositoryPort,
  IdempotencyRecord,
} from "../ports/evidenceRepository";
import type { MemoryEvidenceStore } from "./memoryEvidenceStore";

export class MemoryEvidenceRepository implements EvidenceRepositoryPort {
  constructor(private readonly store: MemoryEvidenceStore) {}

  async findById(evidenceId: string): Promise<Evidence | null> {
    const found = this.store.evidences.get(evidenceId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    evidence: Evidence;
    record: IdempotencyRecord;
  } | null> {
    const record = this.store.idempotencyIndex.get(idempotencyKey);
    if (!record) return null;
    const evidence = await this.findById(record.evidenceId);
    if (!evidence) return null;
    return { evidence, record: structuredClone(record) };
  }

  async exists(evidenceId: string): Promise<boolean> {
    return this.store.evidences.has(evidenceId);
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
    if (this.store.evidences.has(evidence.evidenceId)) {
      throw new EvidenceDomainError(
        "EVIDENCE_ALREADY_EXISTS",
        "evidence_id_taken",
      );
    }
    if (record) {
      const existing = this.store.idempotencyIndex.get(
        evidence.idempotencyKey ?? "",
      );
      if (existing && existing.evidenceId !== evidence.evidenceId) {
        throw new EvidenceDomainError(
          "IDEMPOTENCY_CONFLICT",
          "idempotency_key_taken",
        );
      }
    }
    this.failIfForced();
    this.store.evidences.set(evidence.evidenceId, structuredClone(evidence));
    if (record && evidence.idempotencyKey) {
      this.store.idempotencyIndex.set(
        evidence.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  async update(
    evidence: Evidence,
    expectedVersion: number,
    record?: IdempotencyRecord,
  ): Promise<void> {
    const current = this.store.evidences.get(evidence.evidenceId);
    if (!current) {
      throw new EvidenceDomainError(
        "EVIDENCE_NOT_FOUND",
        "update_missing_evidence",
      );
    }
    if (current.version !== expectedVersion) {
      throw new EvidenceDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (evidence.version !== expectedVersion + 1) {
      throw new EvidenceDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateEvidenceShape(evidence);
    if (shape) {
      throw new EvidenceDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.evidences.set(evidence.evidenceId, structuredClone(evidence));
    if (record && evidence.idempotencyKey) {
      this.store.idempotencyIndex.set(
        evidence.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new EvidenceDomainError(
        "EVIDENCE_PERSISTENCE_FAILED",
        "forced_evidence_save_failure",
      );
    }
  }
}
