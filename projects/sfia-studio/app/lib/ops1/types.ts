/** OPS1 I1 — Session + journal (fixture/local). CLOSED reserved; not mutated in I1. */

export type SessionStatus = "OPEN" | "CLOSED";

export type TurnRole = "user" | "assistant_fixture";

export interface CycleSession {
  sessionId: string;
  projectKey: string;
  status: SessionStatus;
  createdAt: string;
  updatedAt: string;
  parentSessionId: string | null;
  fixtureMode: boolean;
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

export type SessionEventType =
  | "SESSION_OPENED"
  | "TURN_APPENDED"
  | "SESSION_PERSISTENCE_FAILED"
  | "TURN_PERSISTENCE_FAILED";

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
