/**
 * Product CursorExecutionReport — claim/report DTO (D-GCEC-11).
 * NOT trusted Evidence. REAL and Fake MUST share this shape.
 *
 * PJ-REPROOF-04 — report identity triad:
 *   reportId (independent)
 *   executionContractId (exact contract executed)
 *   attemptId (exact attempt producing report)
 *
 * NELC-01 — additive optional fields remain under schema
 * `oa.cursor-execution-report.1` (compat, no parallel report type).
 * Assessments and narrative fields are CLAIMS until Studio requalifies them.
 */

export const OA_CURSOR_EXECUTION_REPORT_SCHEMA =
  "oa.cursor-execution-report.1" as const;

export type CursorExecutionReportStatus =
  | "succeeded"
  | "failed"
  | "stopped"
  | "timeout";

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

export type CursorClaimAssessmentResult =
  | "pass"
  | "fail"
  | "not_proven"
  | "skipped";

export type CursorClaimAssessment = {
  readonly id: string;
  readonly statement: string;
  readonly result: CursorClaimAssessmentResult;
  readonly notes?: string;
};

export type CursorExecutionReport = {
  schemaVersion: typeof OA_CURSOR_EXECUTION_REPORT_SCHEMA;
  /** Independent report identity — distinct from attemptId / executionContractId. */
  reportId: string;
  attemptId: string;
  executionContractId: string;
  /** Optional EC version when known — claim, verified at bind when expected. */
  executionContractVersion?: number;
  /** Optional semantic fingerprint — claim, verified at bind when expected. */
  contractFingerprint?: string;
  repositoryRef: string;
  baseSha: string;
  branch?: string;
  status: CursorExecutionReportStatus;
  /** Bounded claim of work performed (never Evidence by itself). */
  workPerformed?: string[];
  fileEffects?: CursorFileEffectClaim;
  validationEffects?: CursorValidationEffectClaim[];
  gitEffects?: CursorGitEffectClaims;
  /** Effects executed under the current AuthorizedExecutionSlice. */
  authorizedEffectsExecuted: CursorAuthorizedEffectId[];
  /** Protected effects not yet authorized — Cursor stopped. */
  stoppedBeforeEffects?: CursorAuthorizedEffectId[];
  expectedOutputAssessments?: CursorClaimAssessment[];
  acceptanceCriteriaAssessments?: CursorClaimAssessment[];
  validationsPerformed?: string[];
  deviations?: string[];
  blockers?: string[];
  stopConditionTriggered?: string | null;
  reservations?: string[];
  evidenceClaims?: string[];
  /**
   * Optional structured mission/diagnostic claim (additive).
   * NOT Evidence — must be validated and persisted as MissionResultPayload.
   */
  missionResult?: {
    diagnosticSummary: string;
    recommendedNextProductStep: string;
    inspectedDurableTrace?: string;
  };
  /** Top-level narrative claim aliases (optional; prefer missionResult). */
  diagnosticSummary?: string;
  recommendedNextProductStep?: string;
  /**
   * Optional nested Cursor Review End Of CLAIM (D-ER-05).
   * Logical distinctness from the machine report is required even when
   * transport reuses this enveloppe. Studio never treats this as Fact/Evidence.
   */
  reviewEndOf?: import("./cursorReviewEndOf").CursorReviewEndOf;
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

const REPORT_STATUSES: readonly CursorExecutionReportStatus[] = [
  "succeeded",
  "failed",
  "stopped",
  "timeout",
];

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
    (REPORT_STATUSES as readonly string[]).includes(v.status as string) &&
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
  /** Optional trusted launch correspondence (generic Product REAL). */
  readonly expectedRepositoryRef?: string | null;
  readonly expectedBaseSha?: string | null;
  readonly expectedContractVersion?: number | null;
  readonly expectedContractFingerprint?: string | null;
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
  if (
    input.expectedRepositoryRef != null &&
    input.expectedRepositoryRef.trim() !== "" &&
    report.repositoryRef !== input.expectedRepositoryRef
  ) {
    return {
      ok: false,
      code: "REPORT_REPOSITORY_MISMATCH",
      message: "report.repositoryRef ≠ trusted repository identity.",
    };
  }
  if (
    input.expectedBaseSha != null &&
    input.expectedBaseSha.trim() !== "" &&
    report.baseSha !== input.expectedBaseSha
  ) {
    return {
      ok: false,
      code: "REPORT_BASE_SHA_MISMATCH",
      message: "report.baseSha ≠ pinned baseHeadSha.",
    };
  }
  if (
    input.expectedContractVersion != null &&
    report.executionContractVersion != null &&
    report.executionContractVersion !== input.expectedContractVersion
  ) {
    return {
      ok: false,
      code: "REPORT_CONTRACT_VERSION_MISMATCH",
      message: "report.executionContractVersion ≠ ExecutionContract.version.",
    };
  }
  if (
    input.expectedContractFingerprint != null &&
    input.expectedContractFingerprint.trim() !== "" &&
    report.contractFingerprint != null &&
    report.contractFingerprint !== input.expectedContractFingerprint
  ) {
    return {
      ok: false,
      code: "REPORT_FINGERPRINT_MISMATCH",
      message: "report.contractFingerprint ≠ ExecutionContract.semanticFingerprint.",
    };
  }
  return { ok: true };
}
