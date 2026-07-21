/** OPS1 I1/I2 — Session + journal. CLOSED reserved; not mutated in I1/I2. */

export type SessionStatus = "OPEN" | "CLOSED";

/** I2 extends roles with assistant_live; fixture role retained for non-live. */
export type TurnRole = "user" | "assistant_fixture" | "assistant_live";

/** Immutable session conversation mode — chosen at creation, never mixed. */
export type ConversationMode = "fixture" | "live";

export type ConversationAttemptStatus =
  | "started"
  | "succeeded"
  | "failed";

/**
 * Runtime presentation kind for UI signalétique.
 * Distinct from ConversationMode: a live-mode session can still be served
 * by the fake test provider (TEST / NON LIVE), never as genuine GPT live.
 */
export type ProviderPresentation =
  | "fixture"
  | "test_provider"
  | "openai_live";

export interface CycleSession {
  sessionId: string;
  projectKey: string;
  status: SessionStatus;
  createdAt: string;
  updatedAt: string;
  parentSessionId: string | null;
  /** Continuation context — sealed report id of the closed parent session. */
  sourceReportId?: string | null;
  /** @deprecated Prefer conversationMode; kept as mirror of fixture mode. */
  fixtureMode: boolean;
  /** Immutable conversation mode for the whole session lifetime. */
  conversationMode: ConversationMode;
}

export interface JournalTurn {
  turnId: string;
  sessionId: string;
  sequence: number;
  role: TurnRole;
  content: string;
  fixture: boolean;
  createdAt: string;
}

export interface ConversationAttempt {
  attemptId: string;
  sessionId: string;
  userTurnId: string | null;
  assistantTurnId: string | null;
  provider: string;
  status: ConversationAttemptStatus;
  providerResponseId: string | null;
  model: string | null;
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  requestStartedAt: string;
  requestCompletedAt: string | null;
  errorCode: string | null;
}

export interface ConversationUsageCounters {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  model: string | null;
  provider: string;
  attemptId: string;
  durationMs: number | null;
}

export type SessionEventType =
  | "SESSION_OPENED"
  | "TURN_APPENDED"
  | "SESSION_PERSISTENCE_FAILED"
  | "TURN_PERSISTENCE_FAILED"
  | "CONVERSATION_ATTEMPT_STARTED"
  | "CONVERSATION_ATTEMPT_SUCCEEDED"
  | "CONVERSATION_ATTEMPT_FAILED"
  | "ACTION_QUALIFIED_NOT_REQUIRED"
  | "ACTION_CANDIDATE_CREATED"
  | "ACTION_CANDIDATE_REFINED"
  | "GATE_DECISION_RECORDED"
  | "EXECUTION_REFUSED"
  | "ALLOWLIST_EVALUATION_STARTED"
  | "ALLOWLIST_EVALUATION_SUCCEEDED"
  | "ALLOWLIST_EVALUATION_FAILED"
  | "ALLOWLIST_CORRECTION_REQUIRED"
  | "EXECUTION_CONTRACT_CREATED"
  | "EXECUTION_CONTRACT_HASHED"
  | "EXECUTION_GATE_RECORDED"
  | "EXECUTION_REVALIDATION_STARTED"
  | "EXECUTION_REVALIDATION_FAILED"
  | "EXECUTION_WORKTREE_CREATED"
  | "CURSOR_EXECUTION_STARTED"
  | "CURSOR_EXECUTION_SUCCEEDED"
  | "CURSOR_EXECUTION_FAILED"
  | "EXECUTION_OUT_OF_SCOPE_DETECTED"
  | "EXECUTION_STOPPED"
  | "EXECUTION_REPORT_STARTED"
  | "EXECUTION_REPORT_COMPLETED"
  | "EXECUTION_REPORT_INCOMPLETE"
  | "EXECUTION_REPORT_FAILED"
  | "POST_REPORT_CHAT_RESUMED"
  | "SESSION_CLOSED"
  | "SESSION_CONTINUATION_OPENED"
  | "CLOSED_SESSION_MUTATION_REFUSED";

export interface SessionEvent {
  eventId: string;
  sessionId: string | null;
  type: SessionEventType;
  createdAt: string;
  detail: string;
}

/** I3 — qualification outcome for a session (no execution). */
export type ActionQualification = "ACTION_REQUIRED" | "ACTION_NOT_REQUIRED";

/**
 * I3 ActionCandidate lifecycle — no execution states.
 * GO → APPROVED means "validated for I4 preparation", never "executed".
 */
export type ActionCandidateStatus =
  | "PROPOSED"
  | "UNDER_REVIEW"
  | "APPROVED"
  | "REJECTED"
  | "CHANGES_REQUESTED"
  | "ABANDONED"
  | "NOT_REQUIRED";

export type GateDecisionKind = "GO" | "NO_GO" | "CORRIGER" | "ABANDONNER";

export interface ActionCandidate {
  actionCandidateId: string;
  sessionId: string;
  status: ActionCandidateStatus;
  title: string;
  objective: string;
  scopeSummary: string;
  riskSummary: string;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface GateDecision {
  gateDecisionId: string;
  sessionId: string;
  actionCandidateId: string;
  actionVersion: number;
  kind: GateDecisionKind;
  motif: string | null;
  createdAt: string;
}

export interface SessionQualification {
  sessionId: string;
  qualification: ActionQualification;
  updatedAt: string;
}

export const OPS1_PROJECT_KEY = "sfia-studio-ops1";

/** Local input guardrail — not a FinOps decision. */
export const OPS1_MAX_MESSAGE_CHARS = 4000;

export const LEGACY_SESSION_MODE_AMBIGUOUS =
  "MORRIS DECISION REQUIRED — LEGACY SESSION MODE AMBIGUOUS";

/** I3 microcopy — GO never means execution started. */
export const OPS1_I3_GO_MICROCOPY =
  "Proposition validée. Aucune exécution n’est lancée dans I3.";

export const OPS1_I3_STATUS_UNAUTHORIZED = "ACTION PROPOSÉE — NON AUTORISÉE";
export const OPS1_I3_STATUS_VALIDATED_NOT_EXECUTED =
  "ACTION VALIDÉE — NON EXÉCUTÉE";
export const OPS1_I3_GO_NE_PAS_EXEC =
  "GO ≠ exécution — préparation I4 uniquement";

/* ─── OPS1 I4 — allowlist evaluation (no execution) ─── */

export type AllowlistMode = "READ" | "CREATE" | "MODIFY";

export type AllowlistEvaluationStatus = "ALLOWED" | "DENIED" | "INVALID";

export type AllowlistGlobalStatus =
  | "VALID"
  | "INVALID"
  | "REQUIRES_CORRECTION";

export interface AllowlistInputEntry {
  path: string;
  mode: AllowlistMode;
}

export interface AllowlistEntry {
  path: string;
  mode: AllowlistMode;
  normalizedPath: string;
  evaluationStatus: AllowlistEvaluationStatus;
  evaluationReason: string | null;
}

export interface ActionAllowlistEvaluation {
  evaluationId?: string;
  actionCandidateId: string;
  actionVersion: number;
  evaluatedEntries: AllowlistEntry[];
  allowedReads: string[];
  allowedCreates: string[];
  allowedModifies: string[];
  deniedPaths: string[];
  status: AllowlistGlobalStatus;
  uiStatusLabel: string;
  evaluatedAt: string;
  supersededAt?: string | null;
}

export const CAMPUS360_ROOT_PREFIX = "projects/campus360";

export const CAMPUS360_PROTECTED_MODIFY =
  "projects/campus360/03-pre-framing-decision-pack.md";

/** I4 microcopies — evaluation never means execution. */
export const OPS1_I4_ELIGIBLE_NE_AUTHORIZED = "Éligible ≠ autorisé";
export const OPS1_I4_NOT_LISTED_FORBIDDEN = "Non listé = interdit";
export const OPS1_I4_EXHAUSTIVE = "Allowlist exhaustive 1..n";
export const OPS1_I4_NO_EXEC =
  "Aucune exécution n’est lancée dans I4";
export const OPS1_I4_GO_I3_NE_EXEC = "GO I3 ≠ exécution";

export const OPS1_I4_STATUS_VALID =
  "ALLOWLIST VALIDE — AUCUNE EXÉCUTION";
export const OPS1_I4_STATUS_CORRECTION =
  "CORRECTION REQUISE — AUCUNE EXÉCUTION";
export const OPS1_I4_STATUS_REFUSED =
  "ALLOWLIST REFUSÉE — AUCUNE EXÉCUTION";

/* ─── OPS1 I5 — execution contract + bounded Cursor run ─── */

export type ExecutionContractStatus =
  | "DRAFT"
  | "READY_FOR_GATE"
  | "APPROVED"
  | "SUPERSEDED"
  | "INVALID";

export type ExecutionAttemptStatus =
  | "PREPARING"
  | "REVALIDATING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "REFUSED"
  | "STOPPED"
  | "TIMED_OUT";

export type CursorAdapterMode = "fixture" | "real";

/** Immutable executable contract (pre-hash payload + frozen hash). */
export interface ExecutionContractPayload {
  contractVersion: string;
  sessionId: string;
  actionCandidateId: string;
  actionVersion: number;
  gateDecisionId: string | null;
  gateDecisionType: "GO" | null;
  gateDecidedBy: "Morris" | null;
  gateDecidedAt: string | null;
  repositoryRoot: string;
  baseBranch: string;
  baseHeadSha: string;
  executionBranchName: string;
  actionObjective: string;
  actionInstructions: string;
  allowedReads: string[];
  allowedCreates: string[];
  allowedModifies: string[];
  forbiddenPaths: string[];
  allowedOperations: AllowlistMode[];
  maxFilesRead: number;
  maxFilesCreated: number;
  maxFilesModified: number;
  maxDiffLines: number;
  timeoutSeconds: number;
  noRemoteGit: true;
  noCommit: true;
  noPush: true;
  noPr: true;
  noMerge: true;
  createdAt: string;
}

export interface ExecutionContract extends ExecutionContractPayload {
  contractId: string;
  contractHash: string;
  status: ExecutionContractStatus;
  allowlistEvaluationId: string;
  adapterMode: CursorAdapterMode;
  supersededAt?: string | null;
}

export interface ExecutionGateRecord {
  executionGateId: string;
  contractId: string;
  contractHash: string;
  actionCandidateId: string;
  actionVersion: number;
  baseHeadSha: string;
  decidedBy: "Morris";
  decidedAt: string;
  supersededAt?: string | null;
}

export interface MinimalExecutionResult {
  resultId: string;
  executionAttemptId: string;
  contractHash: string;
  status: ExecutionAttemptStatus;
  adapterMode: CursorAdapterMode;
  worktreePath: string | null;
  exitCode: number | null;
  timedOut: boolean;
  stdoutDigest: string;
  stderrDigest: string;
  filesRead: string[];
  filesCreated: string[];
  filesModified: string[];
  filesDeleted: string[];
  filesRenamed: string[];
  diffStat: string;
  outOfContract: boolean;
  refusalReason: string | null;
  completedAt: string;
}

export interface ExecutionAttempt {
  executionAttemptId: string;
  contractId: string;
  contractHash: string;
  sessionId: string;
  status: ExecutionAttemptStatus;
  worktreePath: string | null;
  localBranchName: string | null;
  adapterMode: CursorAdapterMode;
  startedAt: string;
  completedAt: string | null;
  result?: MinimalExecutionResult | null;
}

export const OPS1_I5_CONTRACT_VERSION = "ops1-i5-1.0.0";

export const OPS1_I5_GO_DELIVERY_NE_EXEC =
  "GO DELIVERY ≠ GO D’EXÉCUTION";
export const OPS1_I5_GO_LINKED_HASH = "GO LIÉ AU CONTRACT HASH";
export const OPS1_I5_CONTRACT_FROZEN = "CONTRAT GELÉ APRÈS GO";
export const OPS1_I5_WORKTREE_NO_PUSH = "WORKTREE LOCAL — PAS DE PUSH";
export const OPS1_I5_CURSOR_BOUNDED = "CURSOR RÉEL — EXÉCUTION BORNÉE";
export const OPS1_I5_NO_AUTO_RETRY = "AUCUN RETRY AUTOMATIQUE";
export const OPS1_I5_I6_BOUNDARY =
  "I5 EXÉCUTE — I6 ANALYSE LE RAPPORT";

/* ─── OPS1 I6 — post-execution report + continuation ─── */

export type ExecutionReportStatus =
  | "PENDING"
  | "GENERATING"
  | "COMPLETED"
  | "REPORT_INCOMPLETE"
  | "FAILED";

export type ReportCoverageStatus =
  | "COVERED"
  | "MISSING"
  | "UNEXPECTED"
  | "NOT_APPLICABLE";

export interface ReportFileCoverage {
  path: string;
  expectedMode: AllowlistMode;
  observed: boolean;
  coverageStatus: ReportCoverageStatus;
  evidenceAvailable: boolean;
  gapReason: string | null;
}

export interface ExecutionReportMetrics {
  durationMs: number | null;
  metricsIncomplete: boolean;
  metricsIncompleteReason: string | null;
  expectedPathCount: number;
  touchedPathCount: number;
  createCount: number;
  modifyCount: number;
  deleteCount: number;
  outOfContract: boolean;
}

export interface ExecutionReport {
  reportId: string;
  sessionId: string;
  contractId: string;
  contractHash: string;
  executionAttemptId: string;
  adapterMode: CursorAdapterMode;
  executionStatus: ExecutionAttemptStatus;
  reportStatus: ExecutionReportStatus;
  baseHeadSha: string;
  startedAt: string;
  finishedAt: string | null;
  durationMs: number | null;
  expectedPaths: string[];
  filesCreated: string[];
  filesModified: string[];
  filesDeleted: string[];
  filesOutOfContract: string[];
  outOfContract: boolean;
  exitCode: number | null;
  timedOut: boolean;
  worktreeRef: string | null;
  reserves: string[];
  errors: string[];
  incompletenessReason: string | null;
  metrics: ExecutionReportMetrics;
  coverage: ReportFileCoverage[];
  sealed: boolean;
  createdAt: string;
  sealedAt: string | null;
}

export const OPS1_I6_REPORT_BOUNDARY =
  "I6 ANALYSE — I5 EXÉCUTE — I7 ABSENT";
export const OPS1_I6_CHAT_NE_EXEC =
  "REPRISE CHAT ≠ NOUVELLE EXÉCUTION";
export const OPS1_I6_CLOSED_IMMUTABLE = "SESSION CLOSED — IMMUABLE";
export const OPS1_I6_CONTINUATION_NEW =
  "CONTINUATION = NOUVELLE SESSION + PARENT";
export const OPS1_I6_NO_AUTO_RETRY = "AUCUN RETRY AUTOMATIQUE DE RAPPORT";

export const OPS1_DEFAULT_FORBIDDEN_PATHS = [
  "method/",
  "prompts/",
  "docs/",
  "scripts/",
  ".github/",
  "projects/sfia-studio/",
  "projects/chantiers360-v2/",
  "projects/interv360/",
  "projects/task-tracker/",
] as const;
