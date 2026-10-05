import type { ProductSynthesisProjection } from "../domain/types";

export type SynthesisRepositoryPort = {
  create(synthesis: ProductSynthesisProjection): Promise<void>;
  update(synthesis: ProductSynthesisProjection): Promise<void>;
  findById(synthesisId: string): Promise<ProductSynthesisProjection | null>;
  findByFingerprint(
    projectId: string,
    fingerprint: string,
  ): Promise<ProductSynthesisProjection | null>;
  findCurrentByClaimEvaluationId(
    projectId: string,
    claimEvaluationId: string,
  ): Promise<ProductSynthesisProjection | null>;
  listByProject(projectId: string): Promise<ProductSynthesisProjection[]>;
  searchByProject(
    projectId: string,
    query: string,
  ): Promise<ProductSynthesisProjection[]>;
  /** Test/rebuild only — deletes derived projections; never touches Truth C. */
  deleteAllByProject(projectId: string): Promise<void>;
  softSupersede(synthesisId: string): Promise<ProductSynthesisProjection>;
};
