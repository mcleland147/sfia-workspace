/**
 * Nora Option C cognitive runtime — public surface.
 * OD-04: Runner + Product SQLite Session + callModelInputFilter + routeToolCall.
 * Single Agents path (Fake + target). No Nora runtime selector.
 */

export type {
  NoraCognitiveRuntimeKind,
  NoraCognitiveTurnResult,
} from "./types";
export { ProductSqliteSession, userTextItem, assistantTextItem } from "./productSqliteSession";
export type { ProductSqliteSessionOptions } from "./productSqliteSession";
export {
  probeMemoryBAvailability,
  appendMemoryBCognitiveDisclosure,
  memoryBPiloteNotice,
  MEMORY_B_COGNITIVE_DISCLOSURE,
  MEMORY_B_PILOTE_NOTICE,
} from "./memoryBAvailability";
export type {
  MemoryBAvailability,
  MemoryBProbeResult,
  ProbeMemoryBAvailabilityOptions,
} from "./memoryBAvailability";
export {
  COMPACTION_COGNITIVE_DISCLOSURE,
  COMPACTION_PILOTE_NOTICE,
  DEFAULT_COMPACTION_POLICY,
  MemoryBSessionView,
  STALE_PRIOR_INVALIDATED_COGNITIVE_ADDENDUM,
  STALE_PRIOR_INVALIDATED_PILOTE_ADDENDUM,
  applyCompactionIfNeeded,
  appendMemoryBCompactionDisclosure,
  buildCompactionRecord,
  buildInvalidatedPriorMeta,
  computeRawProvenanceCoverage,
  contentHash,
  createMemoryBSessionView,
  extractItemText,
  loadSessionRows,
  memoryBCompactionPiloteNotice,
  parseStoredCompactionRecord,
  partitionMemoryBForCompaction,
  prepareMemoryBForTurn,
  resolveReplayItems,
  shouldCompactItemCount,
  staleDisclosureMatchesReplaySemantics,
  truthCRevisionKey,
  truthCRevisionsMatch,
} from "./memoryBCompaction";
export type {
  CompactionPolicy,
  CompactionProvenanceEntry,
  InvalidatedPriorCompactionMeta,
  LoadedSessionRows,
  MemoryBCompactionDetails,
  MemoryBCompactionLoss,
  MemoryBCompactionRecord,
  MemoryBCompactionState,
  ProvenanceCoverageFacts,
  TruthCRevision,
} from "./memoryBCompaction";
export { resolveNoraSessionSqlitePath } from "./sessionPaths";
export {
  sfiaBoundaryInstructions,
  createSfiaRouteToolAdapters,
  invokeSfiaToolViaRoute,
  assertRawJsonObjectSchema,
  sdkToolParametersOf,
} from "./sfiaAgentsTools";
export type { SfiaJsonObjectSchema, SfiaAgentsToolOptions } from "./sfiaAgentsTools";
export {
  createSfiaCallModelInputFilter,
  preserveStructuralRoles,
} from "./callModelInputFilter";
export {
  createNoraTurnBudget,
  claimToolSlot,
  markModelTurn,
  toolRoundsFromBudget,
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
} from "./turnBudget";
export type { NoraTurnBudget } from "./turnBudget";
export {
  createProviderAgentsModel,
  isFakeConversationProvider,
  agentInputToProviderItems,
  toolDefinitionsFromModelRequest,
} from "./providerAgentsModel";
export {
  createNoraAgentsRunner,
  runNoraAgentsTurn,
  resolveNoraAgentsF1Model,
  shouldUseProviderAgentsModelAdapter,
  isOpenAiLiveF1Provider,
} from "./runNoraAgentsTurn";
export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
export type {
  RunNoraCognitiveTurnInput,
  Mw3ContradictionAssessmentInput,
} from "./runNoraCognitiveTurn";
export {
  disposeContradiction,
  dispositionIndependentOfStrategy,
} from "./contradictionDisposition";
export type {
  ContradictionConflictInput,
  ContradictionEvidencePointer,
} from "./contradictionDisposition";
export {
  decideCognitiveStop,
  cognitiveStopAllowsProductSuccess,
  formatCognitiveStopPiloteNotice,
} from "./cognitiveStop";
export {
  deriveMw3ContradictionAssessment,
  MW3_STUDIO_REQUIRED_SOURCE_COUNT,
  MW3_STUDIO_FRESHNESS_MATTERS,
  type Mw3ContradictionCandidateSignal,
} from "./deriveMw3Assessment";
export {
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  buildSignalsFromTurnContext,
  mergeCognitiveWorkloadSignals,
  normalizeSemanticCognitiveWorkloadAssessment,
  isRoutineEligible,
  STRATEGY_REASONING_ENVELOPES,
  COGNITIVE_STRATEGY_CLASSES,
  ROUTINE_KNOWN_LOW_DIMENSIONS,
  SEMANTIC_CWP_DIMENSIONS,
} from "./cognitiveWorkloadPolicy";
export type {
  CognitiveStrategyClass,
  CognitiveStrategyDecision,
  CognitiveWorkloadSignals,
  SemanticCognitiveWorkloadAssessment,
  TurnWorkloadContext,
} from "./cognitiveWorkloadPolicy";
export { validateRuntimeReasoningCapability } from "./reasoningCapability";
export {
  buildRunnerModelSettingsForEffort,
  type NoraRunnerModelSettings,
} from "./reasoningModelSettings";
export {
  GROUNDING_REFS_TYPE,
  acceptGroundingRefsForProject,
  appendGroundingCognitiveDisclosure,
  buildClaimSpecificProvenanceDisclosure,
  buildGroundingCognitiveDisclosure,
  classifyRememberedEvidence,
  groundingRecordToStoredItem,
  isGroundingRefsRecord,
  isNonReplaySessionMarker,
  loadGroundingRefsFromSession,
  parseStoredGroundingRefsRecord,
  rememberEvidenceIds,
  rememberReadCoverage,
  toMw4GroundingTurnSurface,
  upsertGroundingRefsRecord,
} from "./groundingDurability";
export type {
  GroundingEvidenceRef,
  GroundingReadCoverageKind,
  GroundingReadCoverageRef,
  GroundingRefsRecord,
  Mw4GroundingTurnSurface,
  RememberedEvidenceDowngradeReason,
  RememberedEvidenceMissingReason,
  RememberedEvidenceResolution,
} from "./groundingDurability";
export {
  POST_EVIDENCE_NARRATIVE_POLICY,
  appendPostEvidenceNarrativePolicyDisclosure,
  buildPostEvidenceNarrativePolicyDisclosure,
} from "./postEvidenceNarrativePolicy";
export type { PostEvidenceNarrativePolicy } from "./postEvidenceNarrativePolicy";
export {
  aggregateReadCoverage,
  appendReadCoverageDisclosure,
  buildReadCoverageDisclosure,
  classifyGitLocalReadCompleteness,
  deriveReadCoverageFromToolEvent,
  mergeCurrentAndRememberedCoverage,
  MW4_DOCUMENT_READ_TOOL,
  overallToGroundingCoverageKind,
  parseGitLocalReadCoverageSignals,
} from "./readCoverage";
export type {
  ParsedReadRange,
  ReadCoverageAggregate,
  ReadCoverageFact,
  ReadCoverageKind,
} from "./readCoverage";
