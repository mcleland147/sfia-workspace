/**
 * Product CursorExecutionReport — claim/report DTO (D-GCEC-11).
 * NOT trusted Evidence. REAL and Fake MUST share this shape.
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

export function isCursorExecutionReport(
  value: unknown,
): value is CursorExecutionReport {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_CURSOR_EXECUTION_REPORT_SCHEMA &&
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
