import type { ReviewBundle } from "../domain/reviewBundleTypes";

/** Read-only ReviewBundle access for ClaimEvaluation (never mutates). */
export interface ReviewBundleReaderPort {
  findById(reviewBundleId: string): Promise<ReviewBundle | null>;
}
