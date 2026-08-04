/**
 * D2-D1 OA execution-run public barrel.
 * Sole D2-D technical state authority — memory/fixture-first only.
 * Concrete server composition is NOT exported here — use ./server.
 */
export { EXECUTION_RUN_SCHEMA_VERSION, EXECUTION_STATES, TERMINAL_STATES, isTerminalState } from "./domain/types";
export type {
  Completeness,
  ExecutionContext,
  ExecutionEvidence,
  ExecutionIntent,
  ExecutionRun,
  ExecutionSource,
  ExecutionState,
  ExternalResult,
  FailureCode,
  FailureFamily,
  HumanDecisionGate,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
  ProviderLane,
  SourceDisclosure,
  UsageSummary,
  ValidationOutcome,
} from "./domain/types";
export { normalizedFailure } from "./domain/errors";
export {
  decideTransition,
  isAllowedTransition,
  listAllowedTransitions,
} from "./domain/transitions";
export type { TransitionDecision, TransitionReason, TransitionRequest } from "./domain/transitions";
export { evaluateReadOnlyPolicy } from "./domain/policy";
export type { PolicyDecision, PolicyInput } from "./domain/policy";
export {
  assertSourceHonest,
  canSucceed,
  createOfficialEvidence,
  createSourceDisclosure,
  isIsoTimestamp,
  usageUnavailable,
} from "./domain/evidence";
export {
  canAcceptLateResult,
  checkExecutionRunInvariants,
  isCursorAssociated,
  LATE_RESULT_ELIGIBLE_STATES,
} from "./domain/invariants";
export { createExecutionRun } from "./application/createExecutionRun";
export type { CreateExecutionRunInput, CreateExecutionRunResult } from "./application/createExecutionRun";
export { transitionExecutionRun } from "./application/transitionExecutionRun";
export type {
  TransitionExecutionRunInput,
  TransitionExecutionRunResult,
} from "./application/transitionExecutionRun";
export type { ExecutionRunRepositoryPort } from "./ports/executionRunRepository";
export type {
  ExecutionRunSchemaName,
  ExecutionRunSchemaValidationPort,
} from "./ports/executionRunSchemaValidation";
export type { ClockPort } from "./ports/clockPort";
export type { IdentityPort } from "./ports/identityPort";
export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";

// D2-D2 provider boundary port types (no concrete adapters on root barrel)
export type {
  AiCompletionRequest,
  CursorFixtureRequest,
  GitReadRequest,
  LateProviderResultRecord,
  ProviderInvocationResult,
  ProviderOperationKind,
  ProviderRequestBase,
} from "./ports/providerResult";
export type { AiExecutionPort } from "./ports/aiExecutionPort";
export type { GitReadPort } from "./ports/gitReadPort";
export type { CursorExecutionPort } from "./ports/cursorExecutionPort";
export type {
  SecretHandle,
  SecretResolveResult,
  SecretSourcePort,
} from "./ports/secretSourcePort";
export type {
  ExecutionEvent,
  ExecutionEventSinkPort,
  ExecutionEventType,
} from "./ports/executionEventSinkPort";
export {
  assertIsoOrFail,
  validateUntrustedProviderRequest,
  validateUntrustedProviderResult,
} from "./domain/providerBoundary";
export {
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
  normalizeCanonicalPath,
  pathMatchesAllowlistPrefix,
} from "./domain/sandboxContract";
export type {
  CanonicalPathResult,
  SandboxPathDecision,
} from "./domain/sandboxContract";
export {
  invokeWithTimeoutAndCancellation,
  recordLateProviderResult,
} from "./application/providerInvocation";
export type {
  InvokeOptions,
  InvokeOutcome,
  RetryClass,
} from "./application/providerInvocation";
// Coordinator and injection deps are server-composition only (not client-safe).
export {
  createExecutionProjection,
} from "./application/executionProjection";
export type {
  CreateExecutionProjectionResult,
  ExecutionProjection,
} from "./application/executionProjection";
export {
  assessExecutionReadiness,
  D2D3_OPEN_RESERVES,
} from "./application/executionReadiness";
export type {
  ExecutionReadinessAssessment,
  ReadinessLevel,
  ReadinessStatus,
} from "./application/executionReadiness";
export {
  readUntrustedPlainData,
  redactBoundedText,
  sanitizeLateEvidenceSummary,
} from "./application/untrustedExecutionData";
export type {
  UntrustedReadOptions,
  UntrustedReadResult,
} from "./application/untrustedExecutionData";
export { MAX_COORDINATOR_TIMEOUT_MS } from "./application/coordinateExecutionRun";
