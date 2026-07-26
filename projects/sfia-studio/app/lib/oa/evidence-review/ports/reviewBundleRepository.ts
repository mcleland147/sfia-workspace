import type { ReviewBundle } from "../domain/reviewBundleTypes";

export type ReviewBundleIdempotencyRecord = {
  reviewBundleId: string;
  fingerprint: string;
  operation:
    | "create"
    | "attach"
    | "remove"
    | "freeze"
    | "start_review"
    | "complete_review"
    | "reopen_review";
  /** Set by ReopenReview so idempotent reuse can resolve the successor draft. */
  successorId?: string;
};

export interface ReviewBundleRepositoryPort {
  findById(reviewBundleId: string): Promise<ReviewBundle | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<{
    reviewBundle: ReviewBundle;
    record: ReviewBundleIdempotencyRecord;
    successor?: ReviewBundle;
  } | null>;
  exists(reviewBundleId: string): Promise<boolean>;
  create(
    bundle: ReviewBundle,
    record?: ReviewBundleIdempotencyRecord,
  ): Promise<void>;
  update(
    bundle: ReviewBundle,
    expectedVersion: number,
    record?: ReviewBundleIdempotencyRecord,
  ): Promise<void>;
  /**
   * Atomic reopen for memory D2: create successor draft + mark source
   * superseded + write idempotency index, or mutate nothing.
   */
  createSuccessorAndMarkSuperseded(
    successor: ReviewBundle,
    superseded: ReviewBundle,
    expectedVersion: number,
    record: ReviewBundleIdempotencyRecord & { successorId: string },
  ): Promise<void>;
}
