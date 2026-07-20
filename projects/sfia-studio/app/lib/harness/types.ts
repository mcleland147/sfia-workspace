/** Derived Studio view of harness Incremental B responses (no second truth). */

export type StudioHarnessAction =
  | "run-fixture"
  | "stop"
  | "resume"
  | "probe-invalid-hash"
  | "probe-invalid-branch"
  | "probe-invalid-head"
  | "probe-invalid-allowlist"
  | "probe-missing-decider"
  | "probe-timeout"
  | "probe-incomplete-report"
  | "probe-missing-proof"
  | "probe-live-port"
  | "probe-write-escape";

export interface StudioHarnessRequest {
  requestId: string;
  correlationId: string;
  contractId: string;
  contractHash: string;
  branch: string;
  head: string;
  allowlist: string[];
  morrisDecision: "GO" | "NO-GO" | "CORRIGER" | "STOP" | "CLOSE";
  decidedAt: string;
  action: StudioHarnessAction;
  proofDir?: string;
  decisionId?: string;
}

export interface StudioHarnessEvent {
  eventId: string;
  eventType: string;
  timestamp: string;
  requestId: string;
  correlationId: string;
  result?: string;
  errorCode?: string;
  detail?: Record<string, unknown>;
}

export interface StudioHarnessView {
  ok: boolean;
  statusSource: "harness";
  mode: "fixture" | "simulation";
  canonicalStatus: string;
  goValid: boolean;
  errorCode?: string;
  refusalReason?: string;
  stopOrTimeout?: "STOP" | "timeout" | "refusal" | null;
  contractHash: string;
  executionId?: string;
  correlationId: string;
  proofDir: string;
  journalPath?: string;
  events: StudioHarnessEvent[];
  report?: Record<string, unknown> | null;
  proofPack?: {
    ok: boolean;
    missing: string[];
    present: string[];
    integrityNotes: string[];
  };
  reserves: string[];
  timestamps: { decidedAt?: string; completedAt: string };
  realGptClaimed: false;
  realCursorClaimed: false;
  remoteGitWrite: false;
}
