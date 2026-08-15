import type { ProductSqliteHandle } from "@/lib/oa/project";
import { ReviewBundleDomainError } from "../../domain/reviewBundleErrors";
import { validateReviewBundleShape } from "../../domain/reviewBundleInvariants";
import type { ReviewBundle } from "../../domain/reviewBundleTypes";
import type {
  ReviewBundleIdempotencyRecord,
  ReviewBundleRepositoryPort,
} from "../../ports/reviewBundleRepository";

type BundleRow = {
  review_bundle_id: string;
  project_id: string;
  status: string;
  idempotency_key: string | null;
  version: number;
  payload_json: string;
};

type IdempotencyRow = {
  idempotency_key: string;
  review_bundle_id: string;
  fingerprint: string;
  operation: string;
  successor_id: string | null;
};

function cloneBundle(bundle: ReviewBundle): ReviewBundle {
  return structuredClone(bundle);
}

/**
 * Durable ReviewBundle repository on Product SQLite (M5).
 * createSuccessorAndMarkSuperseded runs inside productStore.runInTransaction.
 */
export class SqliteReviewBundleRepository
  implements ReviewBundleRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(reviewBundleId: string): Promise<ReviewBundle | null> {
    const row = this.store.db
      .prepare(
        `SELECT review_bundle_id, project_id, status, idempotency_key, version, payload_json
         FROM oa_review_bundles WHERE review_bundle_id = ?`,
      )
      .get(reviewBundleId) as BundleRow | undefined;
    if (!row) return null;
    return cloneBundle(JSON.parse(row.payload_json) as ReviewBundle);
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    reviewBundle: ReviewBundle;
    record: ReviewBundleIdempotencyRecord;
    successor?: ReviewBundle;
  } | null> {
    const row = this.store.db
      .prepare(
        `SELECT idempotency_key, review_bundle_id, fingerprint, operation, successor_id
         FROM oa_review_bundle_idempotency WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as IdempotencyRow | undefined;
    if (!row) return null;
    const reviewBundle = await this.findById(row.review_bundle_id);
    if (!reviewBundle) return null;
    const successor = row.successor_id
      ? ((await this.findById(row.successor_id)) ?? undefined)
      : undefined;
    return {
      reviewBundle,
      record: {
        reviewBundleId: row.review_bundle_id,
        fingerprint: row.fingerprint,
        operation: row.operation as ReviewBundleIdempotencyRecord["operation"],
      },
      successor,
    };
  }

  async exists(reviewBundleId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(
        `SELECT 1 AS ok FROM oa_review_bundles WHERE review_bundle_id = ?`,
      )
      .get(reviewBundleId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async create(
    bundle: ReviewBundle,
    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): Promise<void> {
    const shape = validateReviewBundleShape(bundle);
    if (shape) {
      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
    }
    if (bundle.version !== 1) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "create_requires_version_1",
      );
    }
    if (await this.exists(bundle.reviewBundleId)) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_ALREADY_EXISTS",
        "review_bundle_id_taken",
      );
    }
    this.failIfForced();
    this.insertBundle(bundle);
    if (record && bundle.idempotencyKey) {
      this.upsertIdempotency(bundle.idempotencyKey, record);
    }
  }

  async update(
    bundle: ReviewBundle,
    expectedVersion: number,
    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): Promise<void> {
    if (bundle.version !== expectedVersion + 1) {
      throw new ReviewBundleDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion },
      );
    }
    const shape = validateReviewBundleShape(bundle);
    if (shape) {
      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    await this.store.runInTransaction(async () => {
      const changes = this.updateBundleRowCas(bundle, expectedVersion);
      if (changes !== 1) {
        const current = await this.findById(bundle.reviewBundleId);
        if (!current) {
          throw new ReviewBundleDomainError(
            "REVIEW_BUNDLE_NOT_FOUND",
            "update_missing",
          );
        }
        throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion,
          currentVersion: current.version,
        });
      }
      if (record) {
        const key = bundle.idempotencyKey;
        if (key) {
          this.upsertIdempotency(key, record);
        }
      }
    });
  }

  async createSuccessorAndMarkSuperseded(
    successor: ReviewBundle,
    superseded: ReviewBundle,
    expectedVersion: number,
    record: ReviewBundleIdempotencyRecord & { successorId: string },
  ): Promise<void> {
    const successorShape = validateReviewBundleShape(successor);
    if (successorShape) {
      throw new ReviewBundleDomainError(
        successorShape.detailCode,
        successorShape.reason,
      );
    }
    const supersededShape = validateReviewBundleShape(superseded);
    if (supersededShape) {
      throw new ReviewBundleDomainError(
        supersededShape.detailCode,
        supersededShape.reason,
      );
    }
    if (successor.version !== 1) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "successor_requires_version_1",
      );
    }
    if (superseded.status !== "superseded") {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "source_must_be_superseded",
      );
    }
    if (record.successorId !== successor.reviewBundleId) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "record_successor_id_mismatch",
      );
    }
    if (successor.reviewBundleId === superseded.reviewBundleId) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "successor_must_differ_from_source",
      );
    }
    if (superseded.version !== expectedVersion + 1) {
      throw new ReviewBundleDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion },
      );
    }
    if (!superseded.idempotencyKey) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "reopen_idempotency_key_required",
      );
    }

    await this.store.runInTransaction(async () => {
      if (await this.exists(successor.reviewBundleId)) {
        throw new ReviewBundleDomainError(
          "REVIEW_BUNDLE_ALREADY_EXISTS",
          "successor_review_bundle_id_taken",
        );
      }
      this.failIfForced();
      this.insertBundle(successor);
      const changes = this.updateBundleRowCas(superseded, expectedVersion);
      if (changes !== 1) {
        const current = await this.findById(superseded.reviewBundleId);
        if (!current) {
          throw new ReviewBundleDomainError(
            "REVIEW_BUNDLE_NOT_FOUND",
            "reopen_source_missing",
          );
        }
        throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion,
          currentVersion: current.version,
        });
      }
      this.upsertIdempotency(superseded.idempotencyKey!, record);
    });
  }

  private insertBundle(bundle: ReviewBundle): void {
    const now = bundle.createdAt;
    const payload = JSON.stringify(cloneBundle(bundle));
    this.store.db
      .prepare(
        `INSERT INTO oa_review_bundles(
           review_bundle_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        bundle.reviewBundleId,
        bundle.projectId,
        bundle.status,
        bundle.idempotencyKey ?? null,
        bundle.version,
        payload,
        now,
        now,
      );
  }

  /** Atomic CAS update — returns sqlite changes count. */
  private updateBundleRowCas(
    bundle: ReviewBundle,
    expectedVersion: number,
  ): number {
    const now = bundle.updatedAt ?? bundle.createdAt;
    const payload = JSON.stringify(cloneBundle(bundle));
    const result = this.store.db
      .prepare(
        `UPDATE oa_review_bundles SET
           project_id = ?,
           status = ?,
           idempotency_key = ?,
           version = ?,
           payload_json = ?,
           updated_at = ?
         WHERE review_bundle_id = ? AND version = ?`,
      )
      .run(
        bundle.projectId,
        bundle.status,
        bundle.idempotencyKey ?? null,
        bundle.version,
        payload,
        now,
        bundle.reviewBundleId,
        expectedVersion,
      );
    return Number(result.changes);
  }

  private upsertIdempotency(
    idempotencyKey: string,
    record: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_review_bundle_idempotency(
           idempotency_key, review_bundle_id, fingerprint, operation, successor_id
         ) VALUES (?, ?, ?, ?, ?)
         ON CONFLICT(idempotency_key) DO UPDATE SET
           review_bundle_id = excluded.review_bundle_id,
           fingerprint = excluded.fingerprint,
           operation = excluded.operation,
           successor_id = excluded.successor_id`,
      )
      .run(
        idempotencyKey,
        record.reviewBundleId,
        record.fingerprint,
        record.operation,
        record.successorId ?? null,
      );
  }

  private failIfForced(): void {
    if (this.store.failNextSave === "review_bundle") {
      this.store.failNextSave = null;
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "forced_review_bundle_save_failure",
      );
    }
  }
}
