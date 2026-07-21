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
  | "ALLOWLIST_CORRECTION_REQUIRED";

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
