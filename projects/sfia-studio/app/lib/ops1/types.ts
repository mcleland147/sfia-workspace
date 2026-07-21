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
  | "CONVERSATION_ATTEMPT_FAILED";

export interface SessionEvent {
  eventId: string;
  sessionId: string | null;
  type: SessionEventType;
  createdAt: string;
  detail: string;
}

export const OPS1_PROJECT_KEY = "sfia-studio-ops1";

/** Local input guardrail — not a FinOps decision. */
export const OPS1_MAX_MESSAGE_CHARS = 4000;

export const LEGACY_SESSION_MODE_AMBIGUOUS =
  "MORRIS DECISION REQUIRED — LEGACY SESSION MODE AMBIGUOUS";
