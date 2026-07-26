import {
  ReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import { validateReviewBundleShape } from "../domain/reviewBundleInvariants";
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type {
  ReviewBundleIdempotencyRecord,
  ReviewBundleRepositoryPort,
} from "../ports/reviewBundleRepository";
import type { MemoryReviewBundleStore } from "./memoryReviewBundleStore";

export class MemoryReviewBundleRepository
  implements ReviewBundleRepositoryPort
{
  constructor(private readonly store: MemoryReviewBundleStore) {}

  async findById(reviewBundleId: string): Promise<ReviewBundle | null> {
    const found = this.store.bundles.get(reviewBundleId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    reviewBundle: ReviewBundle;
    record: ReviewBundleIdempotencyRecord;
    successor?: ReviewBundle;
  } | null> {
    const record = this.store.idempotencyIndex.get(idempotencyKey);
    if (!record) return null;
    const reviewBundle = await this.findById(record.reviewBundleId);
    if (!reviewBundle) return null;
    const successor = record.successorId
      ? ((await this.findById(record.successorId)) ?? undefined)
      : undefined;
    return {
      reviewBundle,
      record: {
        reviewBundleId: record.reviewBundleId,
        fingerprint: record.fingerprint,
        operation: record.operation,
      },
      successor,
    };
  }

  async exists(reviewBundleId: string): Promise<boolean> {
    return this.store.bundles.has(reviewBundleId);
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
    if (this.store.bundles.has(bundle.reviewBundleId)) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_ALREADY_EXISTS",
        "review_bundle_id_taken",
      );
    }
    this.failIfForced();
    this.store.bundles.set(bundle.reviewBundleId, structuredClone(bundle));
    if (record && bundle.idempotencyKey) {
      this.store.idempotencyIndex.set(bundle.idempotencyKey, {
        ...structuredClone(record),
      });
    }
  }

  async update(
    bundle: ReviewBundle,
    expectedVersion: number,
    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): Promise<void> {
    const current = this.store.bundles.get(bundle.reviewBundleId);
    if (!current) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_NOT_FOUND",
        "update_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (bundle.version !== expectedVersion + 1) {
      throw new ReviewBundleDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateReviewBundleShape(bundle);
    if (shape) {
      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.bundles.set(bundle.reviewBundleId, structuredClone(bundle));
    if (record) {
      const key = bundle.idempotencyKey;
      if (key) {
        this.store.idempotencyIndex.set(key, { ...structuredClone(record) });
      }
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "forced_review_bundle_save_failure",
      );
    }
  }
}
