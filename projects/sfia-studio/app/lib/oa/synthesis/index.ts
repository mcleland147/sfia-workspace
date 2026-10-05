export type {
  ProductSynthesisProjection,
  SynthesisDetailCode,
  SynthesisSections,
  SynthesisSourceBindings,
  SynthesisStatus,
  SynthesisVerdictLabel,
} from "./domain/types";

export {
  SynthesisDomainError,
  isSynthesisDomainError,
} from "./domain/errors";

export {
  validateProductSynthesisShape,
  type SynthesisInvariantViolation,
} from "./domain/invariants";

export type { SynthesisRepositoryPort } from "./ports/synthesisRepositoryPort";

export {
  ABSENT_RECOMMENDATION_TEXT,
  SYNTHESIS_GENERATED_BY,
  buildProductSynthesis,
  buildSynthesisSearchText,
  buildSynthesisSourceMaterial,
  computeSynthesisSourceFingerprint,
  formatW3cRecommendationForSynthesis,
  presentProductOutcomeSubject,
  projectPilotRecommendationFromW3c,
  type BuildProductSynthesisAttemptSummary,
  type BuildProductSynthesisEvidenceSummary,
  type BuildProductSynthesisExecutionContractSummary,
  type BuildProductSynthesisInput,
  type BuildProductSynthesisRecommendation,
  type BuildProductSynthesisReviewBundleSummary,
} from "./application/buildProductSynthesis";
export {
  materializeProductSynthesis,
  type MaterializeProductSynthesisInput,
} from "./application/materializeProductSynthesis";

export { searchProductSyntheses } from "./application/searchProductSyntheses";

export {
  rebuildProductSynthesis,
  type RebuildProductSynthesisLineage,
} from "./application/rebuildProductSynthesis";

export { SqliteSynthesisRepository } from "./infrastructure/sqlite/sqliteSynthesisRepository";

export {
  createSqliteSynthesisServices,
  type CreateSqliteSynthesisServicesOptions,
  type SqliteSynthesisServices,
} from "./infrastructure/sqlite/createSqliteSynthesisServices";
