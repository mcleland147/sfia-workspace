/**
 * Increment D — CursorExecutionReport (canonical harness report).
 * Candidate proof only — Morris decision still required. Never authorizes analysis.
 */

export const CURSOR_EXECUTION_REPORT_SCHEMA = "cursor-execution-report-1.0.0" as const;

export type CursorExecutionStatus =
  | "SUCCEEDED"
  | "REFUSED_NO_GO"
  | "REFUSED_STALE_GO"
  | "REFUSED_SCOPE"
  | "CURSOR_UNAVAILABLE"
  | "FAILED_EXIT_CODE"
  | "STOPPED"
  | "TIMED_OUT"
  | "POLICY_VIOLATION"
  | "REPORT_INCOMPLETE";

export interface CursorExecutionReport {
  schemaVersion: typeof CURSOR_EXECUTION_REPORT_SCHEMA;
  executionId: string;
  requestId: string;
  correlationId: string;
  contractId: string;
  contractHash: string;
  expectedBranch: string;
  actualBranch: string;
  expectedHead: string;
  actualHead: string;
  allowlistedWritePaths: string[];
  status: CursorExecutionStatus;
  startedAt: string;
  completedAt: string;
  durationMs: number;
  exitCode: number | null;
  signal: string | null;
  timeout: boolean;
  stopRequested: boolean;
  cursorAvailable: boolean;
  filesCreated: string[];
  filesModified: string[];
  filesDeleted: string[];
  outOfAllowlistChanges: string[];
  stdoutPreview: string;
  stderrPreview: string;
  remoteGitWrites: 0;
  networkUsed: false;
  reservations: string[];
  authority: {
    candidateOnly: true;
    morrisDecisionRequired: true;
    executionAuthorized: false;
    analysisAuthorized: false;
  };
  morrisDecisionRequired: true;
  analysisAuthorized: false;
  /**
   * Authoritative Increment D process path for this report.
   * Do not confuse with S1 ExecutionContract.cursorMode (always "fixture").
   */
  mode: "fixture" | "live";
  /** True only when a real Cursor child process was spawned. */
  realCursorProcessInvoked: boolean;
  /**
   * Echo of S1 ExecutionContract.cursorMode — PolicyEngine schema slot only.
   * Always "fixture". Never means the process was a fixture when mode=live.
   */
  s1ContractCursorMode: "fixture";
}
