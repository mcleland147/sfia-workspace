/**
 * Cursor Review End Of — EXECUTOR CLAIM (D-ER-05).
 *
 * Produced by Cursor at end of execution, alongside CursorExecutionReport.
 * Native = Studio binding / storage / consumption — Studio is NOT the producer.
 * NEVER Evidence, Verified Facts, ClaimEvaluation, or Nora Analysis.
 *
 * Packaging (nested in report transport vs sidecar file) is an implementation
 * detail; this type is the semantic contract.
 */

export const OA_CURSOR_REVIEW_END_OF_SCHEMA =
  "oa.cursor-review-end-of.1" as const;

export type CursorReviewEndOfVerdict =
  | "succeeded"
  | "failed"
  | "stopped"
  | "timeout"
  | "partial";

export type CursorReviewEndOf = {
  readonly schemaVersion: typeof OA_CURSOR_REVIEW_END_OF_SCHEMA;
  /** Distinct claim identity — not Evidence. */
  readonly reviewEndOfId: string;
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly timestamp: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  /** Cursor's claimed HEAD after work when known — CLAIM only. */
  readonly headSha?: string;
  readonly verdict: CursorReviewEndOfVerdict;
  readonly objective: string;
  readonly scopeTreated: string;
  readonly workPerformed: readonly string[];
  readonly filesCreated: readonly string[];
  readonly filesModified: readonly string[];
  readonly filesDeleted: readonly string[];
  readonly validations: readonly string[];
  readonly fullValidation?: string | null;
  readonly gitProof?: string | null;
  readonly deviations: readonly string[];
  readonly blockers: readonly string[];
  readonly reservations: readonly string[];
  readonly stopConditionsMet: readonly string[];
  readonly claims: readonly string[];
  readonly pointsRequiringReview: readonly string[];
};

export function mintCursorReviewEndOfId(input: {
  readonly attemptId: string;
  readonly executionContractId: string;
}): string {
  const safeAttempt = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(-24);
  const safeContract = input.executionContractId
    .replace(/[^a-zA-Z0-9:_-]/g, "")
    .slice(-24);
  return `reo:cursor:${safeContract}:${safeAttempt}`;
}

export function isCursorReviewEndOf(value: unknown): value is CursorReviewEndOf {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_CURSOR_REVIEW_END_OF_SCHEMA &&
    typeof v.reviewEndOfId === "string" &&
    (v.reviewEndOfId as string).trim().length > 0 &&
    typeof v.attemptId === "string" &&
    typeof v.executionContractId === "string" &&
    typeof v.timestamp === "string" &&
    typeof v.repositoryRef === "string" &&
    typeof v.baseSha === "string" &&
    typeof v.verdict === "string" &&
    typeof v.objective === "string" &&
    typeof v.scopeTreated === "string" &&
    Array.isArray(v.workPerformed) &&
    Array.isArray(v.filesCreated) &&
    Array.isArray(v.filesModified) &&
    Array.isArray(v.filesDeleted) &&
    Array.isArray(v.validations) &&
    Array.isArray(v.deviations) &&
    Array.isArray(v.blockers) &&
    Array.isArray(v.reservations) &&
    Array.isArray(v.stopConditionsMet) &&
    Array.isArray(v.claims) &&
    Array.isArray(v.pointsRequiringReview)
  );
}

export function parseCursorReviewEndOf(
  raw: unknown,
):
  | { ok: true; reviewEndOf: CursorReviewEndOf }
  | { ok: false; reason: string } {
  if (!isCursorReviewEndOf(raw)) {
    return { ok: false, reason: "cursor_review_end_of_invalid" };
  }
  return { ok: true, reviewEndOf: raw };
}

/**
 * CP3-05 — fail-closed REO ↔ Attempt / EC / repo / base binding.
 * Analogous to bindCursorExecutionReportToAttempt. REO remains CLAIM.
 */
export function bindCursorReviewEndOfToAttempt(input: {
  readonly reviewEndOf: CursorReviewEndOf;
  readonly expectedAttemptId: string;
  readonly expectedExecutionContractId: string;
  readonly expectedRepositoryRef?: string | null;
  readonly expectedBaseSha?: string | null;
}):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const { reviewEndOf: reo } = input;
  if (reo.attemptId !== input.expectedAttemptId) {
    return {
      ok: false,
      code: "REO_ATTEMPT_MISMATCH",
      message: "reviewEndOf.attemptId ≠ Attempt courant.",
    };
  }
  if (reo.executionContractId !== input.expectedExecutionContractId) {
    return {
      ok: false,
      code: "REO_CONTRACT_MISMATCH",
      message: "reviewEndOf.executionContractId ≠ ExecutionContract courant.",
    };
  }
  if (
    input.expectedRepositoryRef != null &&
    input.expectedRepositoryRef.trim() !== "" &&
    reo.repositoryRef !== input.expectedRepositoryRef
  ) {
    return {
      ok: false,
      code: "REO_REPOSITORY_MISMATCH",
      message: "reviewEndOf.repositoryRef ≠ trusted repository identity.",
    };
  }
  if (
    input.expectedBaseSha != null &&
    input.expectedBaseSha.trim() !== "" &&
    reo.baseSha.toLowerCase() !== input.expectedBaseSha.trim().toLowerCase()
  ) {
    return {
      ok: false,
      code: "REO_BASE_SHA_MISMATCH",
      message: "reviewEndOf.baseSha ≠ trusted baseSha.",
    };
  }
  return { ok: true };
}
