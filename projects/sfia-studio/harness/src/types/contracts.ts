/** Shared contracts for POC S1 harness (Option B — harness autonomous). */

export type ScenarioId = "S1";
export type GitEffect = "none-remote";
export type CursorMode = "fixture";
export type GateDecisionKind = "GO" | "CORRIGER" | "STOP" | "CLOSE";

export type ExecutionState =
  | "CREATED"
  | "CONTRACT_VALIDATED"
  | "AWAITING_GATE"
  | "AUTHORIZED"
  | "RUNNING"
  | "STOP_REQUESTED"
  | "REJECTED"
  | "FAILED"
  | "COMPLETED"
  | "CLOSED";

export interface POCRequest {
  requestId: string;
  title: string;
  cycle: string;
  scope: string;
  operator: string;
  createdAt: string;
}

export interface ExecutionContract {
  contractId: string;
  requestId: string;
  scenario: ScenarioId;
  repositoryRoot: string;
  allowedPaths: string[];
  allowedCommands: string[];
  gitEffect: GitEffect;
  cursorMode: CursorMode;
  timeoutMs: number;
  proofDir: string;
  schemaVersion: string;
  maxFiles?: number;
  maxFileBytes?: number;
  maxAggregateBytes?: number;
  allowedExtensions?: string[];
  decidedByAllowlist?: string[];
  gateExpiresAt?: string;
}

export interface GateDecision {
  decisionId: string;
  requestId: string;
  contractHash: string;
  decision: GateDecisionKind;
  decidedBy: string;
  decidedAt: string;
  scope: string;
  expiresAt?: string;
}

export interface ExecutionContext {
  executionId: string;
  requestId: string;
  contractId: string;
  correlationId: string;
  startedAt: string;
}

export interface AdapterEnvelope {
  schemaVersion: string;
  correlationId: string;
  messageType: "intent" | "gate" | "stop" | "statusQuery" | "status" | "proof";
  payload: unknown;
  emittedAt: string;
}

export interface JournalEvent {
  schemaVersion: string;
  eventId: string;
  eventType: string;
  timestamp: string;
  requestId: string;
  executionId?: string;
  correlationId: string;
  contractHash?: string;
  stateBefore?: ExecutionState;
  stateAfter?: ExecutionState;
  result?: string;
  errorCode?: string;
  detail?: Record<string, unknown>;
}

export type GitOp =
  | { op: "branch-show-current" }
  | { op: "rev-parse"; ref: string }
  | { op: "merge-base"; a: string; b: string }
  | { op: "status-short" }
  | { op: "diff-check" }
  | { op: "diff-stat" }
  | { op: "diff-name-status" }
  | { op: "log"; maxCount: number }
  | { op: "show"; revPath: string }
  | { op: "ls-remote"; remote?: string };

export interface GitCommandResult {
  argv: string[];
  stdout: string;
  stderr: string;
  exitCode: number;
  durationMs: number;
}

export interface CursorInstruction {
  requestId: string;
  executionId: string;
  mode: CursorMode;
  objective: string;
  timeoutMs: number;
  simulate?: "success" | "timeout" | "error";
}

export interface CursorResult {
  ok: boolean;
  mode: CursorMode;
  summary: string;
  artifacts: string[];
  errorCode?: string;
  durationMs: number;
  realCursorClaimed: false;
}

export class HarnessError extends Error {
  constructor(
    readonly code: string,
    message: string,
    readonly detail?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "HarnessError";
  }
}
