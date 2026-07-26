import type { Evidence } from "../domain/types";

export type IdempotencyRecord = {
  evidenceId: string;
  fingerprint: string;
  operation:
    | "register"
    | "ingest_attempt"
    | "mark_unavailable"
    | "verify_integrity";
};

/**
 * Evidence repository — memory OCC via expectedVersion (D-T-A6-DEL-05).
 * No durability claim. No cross-aggregate transaction.
 */
export interface EvidenceRepositoryPort {
  findById(evidenceId: string): Promise<Evidence | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<{
    evidence: Evidence;
    record: IdempotencyRecord;
  } | null>;
  exists(evidenceId: string): Promise<boolean>;
  create(evidence: Evidence, record?: IdempotencyRecord): Promise<void>;
  update(
    evidence: Evidence,
    expectedVersion: number,
    record?: IdempotencyRecord,
  ): Promise<void>;
}
