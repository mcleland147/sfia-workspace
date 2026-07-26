/**
 * In-memory ReviewBundle store — NOT DATABASE SELECTED (U-M02 OPEN).
 */
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { ReviewBundleIdempotencyRecord } from "../ports/reviewBundleRepository";

export class MemoryReviewBundleStore {
  bundles = new Map<string, ReviewBundle>();
  idempotencyIndex = new Map<
    string,
    ReviewBundleIdempotencyRecord & { successorId?: string }
  >();
  failNextSave = false;
}
