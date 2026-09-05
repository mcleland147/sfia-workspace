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
  createNoraTurnBudget,
  claimToolSlot,
  markModelTurn,
  toolRoundsFromBudget,
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
} from "./turnBudget";
export type { NoraTurnBudget } from "./turnBudget";
export {
  createNoraCampaignBudget,
  acquireNoraCampaignBudget,
  isCanonicalCampaignBudget,
  requireCanonicalCampaignBudget,
  markCampaignBudgetBlocked,
  claimModelInvocation,
  claimHostedWebOperations,
  clampRunnerBudgetForCampaign,
  resolveMaxToolCallsProviderData,
  evaluateCampaignBudgetCapabilityOnly,
  evaluateRealSourceExecutionPreflight,
  remainingModelInvocations,
  remainingHostedWebOperations,
  remainingAggregateRealCalls,
  campaignBudgetSnapshot,
  requireSafeNonNegativeInteger,
  CampaignLeaseError,
  H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
  H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS,
} from "./campaignBudget";
export type {
  NoraCampaignBudget,
  NoraCampaignBudgetSpec,
  CampaignBudgetDenialCode,
  HostedHardCapCapability,
  RealSourceExecutionPreflightResult,
  Mw6GovernedAuthorityContext,
  Mw6CurrentProductContext,
  Mw6GetExecutionContractPort,
  Mw6CheckExecutionAuthorizationPort,
  Mw6AuthorizedExternalDiscoveryContract,
  Mw6ExternalDiscoveryContractInput,
  RunnerBudgetClamp,
  CreateNoraCampaignBudgetInput,
} from "./campaignBudget";
export {
  MW6_REAL_PROOF_GRANT_ENV,
  MW6_REAL_PROOF_PURPOSE,
  MW6_REAL_PROOF_GRANT_VERSION,
  parseMw6RealProofGrantJson,
  matchMw6RealProofGrant,
  resolveMw6RealAuthorization,
} from "./mw6RealAuthorization";
export type {
  Mw6RealProofGrantV1,
  Mw6RealAuthorizationMatchContext,
  Mw6RealAuthorizationDecision,
} from "./mw6RealAuthorization";
export {
  CampaignModelInvocationDeniedError,
  CampaignUsdHardCapDeniedError,
  createSfiaCallModelInputFilter,
  preserveStructuralRoles,
} from "./callModelInputFilter";
export type {
  NoraAgentsUsdAccounting,
  NoraAgentsUsdSettleObservation,
  NoraAgentsUsdSettleResult,
} from "./agentsUsdAccounting";
// R-PRE-REAL-07: withMaxToolCallsProviderData intentionally NOT exported from barrel.
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
export type {
  RunNoraAgentsTurnInput,
  RunNoraAgentsTurnUsdObserve,
} from "./runNoraAgentsTurn";
export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
export type {
  RunNoraCognitiveTurnInput,
  Mw3ContradictionAssessmentInput,
  NoraEvalModelReasoningControl,
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
  MW5_MAX_STRUCTURAL_CHALLENGES,
  MW5_CHALLENGE_MARKER,
  MW5_CLARIFY_MARKER,
  MW5_ESCALATE_MARKER,
  MW5_TEST_MARKERS,
  capStructuralChallenges,
  containsSynthesizedHumanAct,
  decideMw5Disposition,
  deriveMw5FactsFromF2Turn,
  formatMw5AssistantText,
  isCriticalProfile,
  isMw5ChallengeSatisfied,
  looksLikeQuestionnaire,
  parseIssuedChallengeCount,
  toMw5TurnSurface,
} from "./criticalChallengeClarification";
export type {
  DeriveMw5FactsInput,
  Mw5Disposition,
  Mw5PolicyInput,
  Mw5PolicyResult,
  Mw5TurnSurface,
  Mw5UncertaintyClass,
} from "./criticalChallengeClarification";
export {
  parseChallengeResponseAssessment,
  resolveMw5ProductAuthorityFacts,
  truthCMatchesClaimStructured,
  decisionBasisMatchesClaimStructured,
  formatMw5ChallengeContextForProvider,
} from "./mw5ProductAuthorityFacts";
export type {
  ChallengeResponseAssessment,
  Mw5ChallengeContextForAnalysis,
  Mw5ChallengeContextInput,
  Mw5ClaimProjection,
  Mw5ConsumedDecisionProjection,
  Mw5ProductAuthorityFacts,
  Mw5TruthCProjection,
} from "./mw5ProductAuthorityFacts";
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

/* MW6 — External Source Intelligence */
export type {
  Mw6SourceIntelligenceSurface,
  SemanticSourceClass,
  SourceAccessState,
  SourceAcquisitionRequirement,
  SourceClass,
  SourceCoverageKind,
  SourceFreshnessRequirement,
  SourceFreshnessState,
  SourceKind,
  SourceNeedKind,
  SourceObservationFact,
  SourceOperationIntent,
  SourceOperationKind,
  SourceProvenancePlan,
  SourceProvenanceState,
  SourceProviderBinding,
  SourceProviderId,
  SourceStrategyDecision,
} from "./sourceIntelligenceContract";
export {
  MW6_SOURCE_AUTHORITY_BOUNDARY,
  SOURCE_STRATEGY_PROVIDER_LEAK_PATTERNS,
} from "./sourceIntelligenceContract";
export {
  appendSourceStrategyDisclosure,
  bindSourceProviderCapability,
  buildSourceStrategyDisclosure,
  decideSourceStrategy,
  inferClaimDomain,
  planForDomainNeed,
  strategyContractLeaksProviderIdentity,
} from "./sourceStrategyPolicy";
export type { SourceStrategyInput } from "./sourceStrategyPolicy";
export {
  appendSourceObservationDisclosure,
  authorityIsolationHeld,
  buildSourceObservationDisclosure,
  coverageForExternalOperation,
  freshnessForExternalObservation,
  normalizeHostedWebSearchCall,
  observationsRefuseFabrication,
} from "./externalSourceNormalization";
export type { HostedWebSearchCallLike } from "./externalSourceNormalization";
export {
  assertExternalSourceHasZeroAuthority,
  buildAuthorityIsolationDisclosure,
  detectAuthorityEscalationAttempts,
} from "./externalSourceAuthority";
export {
  appendSourceNarrativeConstraintDisclosure,
  applySourceNarrativeCompatibility,
  buildSourceNarrativeConstraintDisclosure,
  requiredSourceEvidenceMissing,
} from "./sourceNarrativeCompatibility";
export type {
  SourceNarrativeCompatibilityResult,
  SourceNarrativeViolation,
} from "./sourceNarrativeCompatibility";
export {
  composeMw3ConflictFromExternalSources,
  deriveConflictPresentFromExternalObservations,
} from "./externalContradictionComposition";
export type {
  DerivedExternalConflict,
  ExternalGoverningContext,
} from "./externalContradictionComposition";
export {
  createNoraHostedWebSearchTool,
  describeNoraHostedWebSearchPublicSurface,
  extractHostedWebSearchCallsFromRunItems,
  normalizeOpenAiHostedWebSearchObservations,
} from "./openaiHostedWebSearchAdapter";
export type { NoraHostedWebSearchToolOptions } from "./openaiHostedWebSearchAdapter";
