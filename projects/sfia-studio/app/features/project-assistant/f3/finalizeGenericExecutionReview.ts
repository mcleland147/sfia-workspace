/**
 * Finalize Generic Execution Review Material after Studio observation (D-ER-04/06).
 * Called after Cursor terminal + independent worktree observation.
 * Does NOT create Evidence — Evidence ingest remains separate.
 *
 * CR-02 / CP2-02: NO OBSERVATION ≠ VERIFIED ZERO CHANGE.
 * - OBSERVED: VerifiedChangeSet present (may be empty = verified zero change)
 * - UNAVAILABLE / NOT_PERFORMED: VerifiedChangeSet ABSENT — never invent empty FACTS
 *
 * CP2-03 / D-ER-05: Cursor Review End Of is CLAIM produced by Cursor/executor ONLY.
 * Studio NEVER synthesizes CursorReviewEndOf. Missing REO ⇒ PARTIAL + blocker.
 */
import {
  bindCursorReviewEndOfToAttempt,
  observeVerifiedChangeSetStrict,
  parseCursorReviewEndOf,
  type CursorExecutionReport,
  type CursorReviewEndOf,
  type VerifiedChangeSet,
} from "@/lib/oa/execution-attempt";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import {
  persistGenericExecutionReviewMaterial,
  type ExecutionReviewMaterialManifest,
  type ExecutionReviewVerificationStatus,
} from "./persistGenericExecutionReviewMaterial";

export type FinalizeGenericExecutionReviewResult =
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      /** Present only when verificationStatus === "OBSERVED". */
      verifiedChangeSet: VerifiedChangeSet | null;
      verificationStatus: ExecutionReviewVerificationStatus;
      reviewEndOf: CursorReviewEndOf | null;
      reviewEndOfPresent: boolean;
      claimFactMismatch: boolean;
      /** Digest of durable verified-changeset.json bytes — null when not OBSERVED. */
      durableVerifiedChangeSetDigest: string | null;
      verifiedChangeSetRef: string | null;
      /** Binding mismatch / missing REO blockers already on manifest. */
      reoBindingCode: string | null;
    }
  | { ok: false; code: string; message: string };

export const CURSOR_REVIEW_END_OF_MISSING =
  "CURSOR_REVIEW_END_OF_MISSING" as const;

export const CURSOR_REVIEW_END_OF_BINDING_MISMATCH =
  "CURSOR_REVIEW_END_OF_BINDING_MISMATCH" as const;

/**
 * Resolve native Cursor Review End Of CLAIM from the report — NEVER synthesize.
 * CP2-03 / CP3-05: absent/invalid/unbound ⇒ null (PARTIAL + blocker).
 */
export function resolveCursorReviewEndOfClaim(
  report: CursorExecutionReport,
  binding?: {
    readonly expectedAttemptId: string;
    readonly expectedExecutionContractId: string;
    readonly expectedRepositoryRef?: string | null;
    readonly expectedBaseSha?: string | null;
  },
): {
  reviewEndOf: CursorReviewEndOf | null;
  present: boolean;
  bindingCode: string | null;
} {
  if (report.reviewEndOf) {
    const parsed = parseCursorReviewEndOf(report.reviewEndOf);
    if (!parsed.ok) {
      return { reviewEndOf: null, present: false, bindingCode: null };
    }
    if (binding) {
      const bound = bindCursorReviewEndOfToAttempt({
        reviewEndOf: parsed.reviewEndOf,
        expectedAttemptId: binding.expectedAttemptId,
        expectedExecutionContractId: binding.expectedExecutionContractId,
        expectedRepositoryRef: binding.expectedRepositoryRef,
        expectedBaseSha: binding.expectedBaseSha,
      });
      if (!bound.ok) {
        return {
          reviewEndOf: null,
          present: false,
          bindingCode: bound.code,
        };
      }
    }
    return {
      reviewEndOf: parsed.reviewEndOf,
      present: true,
      bindingCode: null,
    };
  }
  return { reviewEndOf: null, present: false, bindingCode: null };
}

/**
 * Presentation-only summary derived from the machine report when REO is missing.
 * Does NOT have type CursorReviewEndOf, does NOT get cursorReviewEndOfRef,
 * does NOT satisfy reportRequirements.
 */
export function presentationSummaryFromCursorReport(
  report: CursorExecutionReport,
): {
  readonly kind: "presentation_only_report_summary";
  readonly attemptId: string;
  readonly status: string;
  readonly workPerformed: readonly string[];
  readonly filesCreated: readonly string[];
  readonly filesModified: readonly string[];
  readonly note: string;
} {
  return {
    kind: "presentation_only_report_summary",
    attemptId: report.attemptId,
    status: report.status,
    workPerformed: report.workPerformed ?? [],
    filesCreated: report.fileEffects?.created ?? [],
    filesModified: report.fileEffects?.modified ?? [],
    note:
      "Presentation only — NOT CursorReviewEndOf; does not satisfy reportRequirements",
  };
}

export async function finalizeGenericExecutionReview(input: {
  readonly refsRoot: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly cursorReport: CursorExecutionReport;
  /** Server-owned worktree path. Absence ⇒ verification UNAVAILABLE — never empty FACTS. */
  readonly worktreePath?: string | null;
  readonly statusDiffPort?: LocalGitStatusDiffPort;
  readonly nameStatusText?: string;
  /**
   * git (default for real worktree) — uses NodeLocalGitStatusDiffPort when
   * statusDiffPort omitted.
   * test_non_git — explicit Fake/non-Git only (injected status or scoped listing).
   */
  readonly observationMode?: "git" | "test_non_git";
  /**
   * CP3-03 — nominal Git mode verifies worktree HEAD == EC/report baseSha.
   * Only pass false from explicit test-only fixtures that intentionally
   * decouple Fake worktree identity from Product pinned base (rare).
   * Default: HEAD-bound (undefined/true).
   */
  readonly requireHeadMatch?: boolean;
  readonly extraReviewItems?: Parameters<
    typeof persistGenericExecutionReviewMaterial
  >[0]["reviewItems"];
}): Promise<FinalizeGenericExecutionReviewResult> {
  const reoResolved = resolveCursorReviewEndOfClaim(input.cursorReport, {
    expectedAttemptId: input.attemptId,
    expectedExecutionContractId: input.executionContractId,
    expectedRepositoryRef: input.repositoryRef,
    expectedBaseSha: input.baseSha,
  });
  const reviewEndOf = reoResolved.reviewEndOf;
  const reviewEndOfPresent = reoResolved.present;
  const reoBindingCode = reoResolved.bindingCode;

  const worktreePath =
    typeof input.worktreePath === "string" && input.worktreePath.trim()
      ? input.worktreePath.trim()
      : null;

  let verificationStatus: ExecutionReviewVerificationStatus;
  let verifiedChangeSet: VerifiedChangeSet | null = null;

  if (worktreePath) {
    const mode =
      input.observationMode ??
      (input.nameStatusText != null && !input.statusDiffPort
        ? "test_non_git"
        : "git");
    const statusDiffPort =
      input.statusDiffPort ??
      (mode === "git" ? new NodeLocalGitStatusDiffPort() : undefined);
    const expectedBaseSha =
      input.requireHeadMatch === false
        ? null
        : input.cursorReport.baseSha?.trim() || input.baseSha || null;
    const observed = await observeVerifiedChangeSetStrict({
      worktreePath,
      report: input.cursorReport,
      statusDiffPort,
      nameStatusText: input.nameStatusText,
      computeDigests: true,
      observationMode: mode,
      expectedBaseSha,
    });
    if (observed.ok) {
      verifiedChangeSet = observed.changeSet;
      verificationStatus = "OBSERVED";
    } else {
      verificationStatus = "UNAVAILABLE";
      verifiedChangeSet = null;
    }
  } else {
    verificationStatus = "UNAVAILABLE";
    verifiedChangeSet = null;
  }

  const reviewItems: {
    kind: import("./persistGenericExecutionReviewMaterial").ExecutionReviewItemKind;
    logicalPath?: string;
    label: string;
    bytes?: Buffer;
    text?: string;
    summary?: string;
  }[] = [...(input.extraReviewItems ?? [])];

  if (verifiedChangeSet) {
    for (const entry of verifiedChangeSet.all) {
      if (entry.status === "deleted" || !entry.contentAbsolutePath) continue;
      try {
        const fs = await import("node:fs");
        if (!fs.existsSync(entry.contentAbsolutePath)) continue;
        const bytes = fs.readFileSync(entry.contentAbsolutePath);
        reviewItems.push({
          kind: "file",
          logicalPath: entry.path,
          label: `${entry.status}: ${entry.path}`,
          bytes,
          summary: entry.afterDigest,
        });
      } catch {
        // keep PARTIAL
      }
    }
  }

  for (const v of input.cursorReport.validationEffects ?? []) {
    reviewItems.push({
      kind: "validation",
      label: v.identity,
      text: JSON.stringify(v),
      summary: v.result,
    });
  }

  const claimFactMismatch = verifiedChangeSet?.claimFactMismatch === true;
  const observationMissing = verificationStatus !== "OBSERVED";
  const reoMissing = !reviewEndOfPresent;

  const blockers = [
    ...(input.cursorReport.blockers ?? []),
    ...(reoMissing && !reoBindingCode ? [CURSOR_REVIEW_END_OF_MISSING] : []),
    ...(reoBindingCode
      ? [`${CURSOR_REVIEW_END_OF_BINDING_MISMATCH}:${reoBindingCode}`]
      : []),
    ...(claimFactMismatch
      ? [
          `CLAIM_FACT_MISMATCH unclaimed=${verifiedChangeSet!.unclaimedObservedPaths.join(",")}`,
        ]
      : []),
    ...(observationMissing
      ? ["VERIFICATION_UNAVAILABLE — worktree observation not performed"]
      : []),
  ];

  const reservations = [
    ...(input.cursorReport.reservations ?? []),
    ...(reoMissing
      ? [
          reoBindingCode
            ? `Cursor Review End Of binding refused (${reoBindingCode}) — CLAIM incomplete; Studio did not synthesize REO`
            : "Cursor Review End Of absent — CLAIM incomplete; Studio did not synthesize REO",
        ]
      : []),
    ...(observationMissing
      ? ["Studio VerifiedChangeSet not available — FACTS incomplete"]
      : []),
    ...(claimFactMismatch
      ? ["Cursor CLAIM incomplete vs Studio OBSERVED FACTS"]
      : []),
  ];

  const persisted = persistGenericExecutionReviewMaterial({
    refsRoot: input.refsRoot,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    cursorReport: input.cursorReport,
    reviewEndOf, // null when missing/unbound — never synthetic
    verifiedChangeSet,
    verificationStatus,
    reviewItems,
    completeness:
      reoMissing || claimFactMismatch || observationMissing
        ? "PARTIAL"
        : undefined,
    blockers,
    reservations,
  });

  if (!persisted.ok) {
    return {
      ok: false,
      code: persisted.code,
      message: persisted.message,
    };
  }

  return {
    ok: true,
    manifest: persisted.manifest,
    verifiedChangeSet,
    verificationStatus,
    reviewEndOf,
    reviewEndOfPresent,
    claimFactMismatch,
    durableVerifiedChangeSetDigest: persisted.durableVerifiedChangeSetDigest,
    verifiedChangeSetRef: persisted.verifiedChangeSetRef,
    reoBindingCode,
  };
}
