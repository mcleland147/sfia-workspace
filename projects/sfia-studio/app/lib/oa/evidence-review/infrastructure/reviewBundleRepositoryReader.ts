import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import type { ReviewBundleReaderPort } from "../ports/reviewBundleReader";

export class ReviewBundleRepositoryReader implements ReviewBundleReaderPort {
  constructor(private readonly repo: ReviewBundleRepositoryPort) {}

  findById(reviewBundleId: string): Promise<ReviewBundle | null> {
    return this.repo.findById(reviewBundleId);
  }
}
