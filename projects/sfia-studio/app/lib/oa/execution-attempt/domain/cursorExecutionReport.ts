/**
 * Product CursorExecutionReport — claim/report DTO (D-GCEC-11).
 * NOT trusted Evidence. REAL and Fake MUST share this shape.
 *
 * PJ-REPROOF-04 — report identity triad:
 *   reportId (independent)
 *   executionContractId (exact contract executed)
 *   attemptId (exact attempt producing report)
 */
export const OA_CURSOR_EXECUTION_REPORT_SCHEMA =
  "oa.cursor-execution-report.1" as const;

export type CursorFileEffectClaim = {
  created: string[];
  modified: string[];
  deleted: string[];
  /** Optional digests claimed by Cursor — Studio re-hashes independently. */
  digests?: Record<string, string>;
};

export type CursorValidationEffectClaim = {
  identity: string;
  result: "pass" | "fail" | "skipped";
  summary?: string;
};

export type CursorGitEffectClaims = {
  commit?: {
    branch: string;
    sha: string;
    parentSha?: string;
    message?: string;
  };
  push?: {
    remote: string;
    ref: string;
    sha: string;
  };
  pullRequest?: {
    number: number;
    url: string;
    headSha: string;
    baseBranch: string;
    state: "open" | "closed" | "merged";
  };
  ci?: {
    sha: string;
    status: "success" | "failure" | "pending";
  };
  review?: {
    prNumber: number;
    status: "approved" | "changes_requested" | "commented" | "pending";
  };
  merge?: {
    prNumber: number;
    mergeSha: string;
    targetBranch: string;
  };
};

export type CursorAuthorizedEffectId =
  | "filesystem.create"
  | "filesystem.modify"
  | "filesystem.delete"
  | "validation.run"
  | "git.commit"
  | "git.push"
  | "github.pr.create"
  | "github.pr.update"
  | "github.pr.merge";

export type CursorExecutionReport = {
  schemaVersion: typeof OA_CURSOR_EXECUTION_REPORT_SCHEMA;
  /** Independent report identity — distinct from attemptId / executionContractId. */
  reportId: string;
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
  status: "succeeded" | "failed" | "stopped" | "timeout";
  fileEffects?: CursorFileEffectClaim;
  validationEffects?: CursorValidationEffectClaim[];
  gitEffects?: CursorGitEffectClaims;
  /** Effects executed under the current AuthorizedExecutionSlice. */
  authorizedEffectsExecuted: CursorAuthorizedEffectId[];
  /** Protected effects not yet authorized — Cursor stopped. */
  stoppedBeforeEffects?: CursorAuthorizedEffectId[];
};

export function mintCursorExecutionReportId(input: {
  readonly attemptId: string;
  readonly executionContractId: string;
}): string {
  const safeAttempt = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(-24);
  const safeContract = input.executionContractId
    .replace(/[^a-zA-Z0-9:_-]/g, "")
    .slice(-24);
  return `rpt:cursor:${safeContract}:${safeAttempt}`;
}

export function isCursorExecutionReport(
  value: unknown,
): value is CursorExecutionReport {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_CURSOR_EXECUTION_REPORT_SCHEMA &&
    typeof v.reportId === "string" &&
    (v.reportId as string).trim().length > 0 &&
    typeof v.attemptId === "string" &&
    typeof v.executionContractId === "string" &&
    typeof v.repositoryRef === "string" &&
    typeof v.baseSha === "string" &&
    typeof v.status === "string" &&
    Array.isArray(v.authorizedEffectsExecuted)
  );
}

export function parseCursorExecutionReport(
  raw: unknown,
):
  | { ok: true; report: CursorExecutionReport }
  | { ok: false; reason: string } {
  if (!isCursorExecutionReport(raw)) {
    return { ok: false, reason: "cursor_execution_report_invalid" };
  }
  return { ok: true, report: raw };
}

/**
 * Fail-closed correspondence: report ↔ Attempt ↔ ExecutionContract.
 * Does NOT treat report as Evidence.
 */
export function bindCursorExecutionReportToAttempt(input: {
  readonly report: CursorExecutionReport;
  readonly expectedAttemptId: string;
  readonly expectedExecutionContractId: string;
  /** Optional: Attempt's bound contract id when loaded from store. */
  readonly attemptExecutionContractId?: string | null;
}):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const { report } = input;
  if (!report.reportId?.trim()) {
    return {
      ok: false,
      code: "REPORT_ID_REQUIRED",
      message: "CursorExecutionReport.reportId requis.",
    };
  }
  if (report.attemptId !== input.expectedAttemptId) {
    return {
      ok: false,
      code: "REPORT_ATTEMPT_MISMATCH",
      message: "report.attemptId ≠ Attempt courant.",
    };
  }
  if (report.executionContractId !== input.expectedExecutionContractId) {
    return {
      ok: false,
      code: "REPORT_CONTRACT_MISMATCH",
      message: "report.executionContractId ≠ ExecutionContract courant.",
    };
  }
  if (
    input.attemptExecutionContractId != null &&
    input.attemptExecutionContractId !== "" &&
    input.attemptExecutionContractId !== report.executionContractId
  ) {
    return {
      ok: false,
      code: "REPORT_ATTEMPT_CONTRACT_MISMATCH",
      message:
        "Attempt.executionContractId ≠ report.executionContractId — correspondance refusée.",
    };
  }
  return { ok: true };
}
