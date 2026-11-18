/**
 * Conversational composition — Studio presentation subsystem.
 * Product responsibility: adaptive restitution of Nora replies.
 * Wire format today: validated `e05-visual-composition-v1` (COMPATIBILITÉ BORNÉE).
 * Presentation contract: `conversational-composition-v1` admission (CV-*).
 */

export {
  CONVERSATIONAL_COMPOSITION_CONTRACT,
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  mergeTextAlternative,
  projectionSubstanceRenderComplete,
  selectComparisonVariant,
  selectSequenceVariant,
  selectRelationsVariant,
  comparisonAlternativesExploitable,
  normalizeRelationsLayoutHint,
  structuredBlockSurface,
  visibleTextAlternativeComplement,
  normalizePresentationText,
  type AdmissionContext,
  type AdmissionResult,
  type AdmittedBlock,
  type BodyPresentationPolicy,
  type ComparisonVariant,
  type CompositionFamily,
  type RelationsVariant,
  type SequenceVariant,
} from "./admission";

export {
  extractProjectionAnchors,
  extractProjectionClaims,
  mayPresentGraphicComposition,
  maySubstituteNarrative,
  projectionAnchorsAlignWithCanonical,
  detectCrudeContradictions,
  detectPreferenceContradiction,
  claimsSupportedByCanonical,
} from "./fidelity";

export {
  validateRelationsTopology,
  validateDecisionTree,
  validateDependencies,
  validateParallelProcess,
  topologicalLayers,
  type TopologyVerdict,
} from "./topology";

export {
  deriveReplyDraftFromCanonicalSections,
  REPLY_DRAFT_MAX_CHARS,
  type DeriveReplyDraftResult,
} from "./derive-text";
