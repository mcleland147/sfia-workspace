/**
 * Generic Execution Review Material — durable review payload (D-ER-04).
 *
 * Reuses the existing mission-result-refs filesystem layout (no new store/table).
 * Artifact documentaire is only ONE possible ReviewItem.
 * 0 Artifact + 0 changed file is valid when other reviewables exist.
 *
 * FINAL SCHEMA NOT ADOPTED as Product aggregate — operational payload only.
 * RAW capture ≠ finalized material (caller decides when to finalize after verify).
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type {
  CursorExecutionReport,
  CursorReviewEndOf,
  VerifiedChangeSet,
} from "@/lib/oa/execution-attempt";

export const OA_EXECUTION_REVIEW_MATERIAL_SCHEMA =
  "oa.execution-review-material.1" as const;

export type ExecutionReviewCompleteness = "FULL" | "PARTIAL";

/**
 * CR-02 — distinguish observed zero-change from missing observation.
 * OBSERVED: VerifiedChangeSet present (may be empty = verified zero change).
 * UNAVAILABLE / NOT_PERFORMED: VerifiedChangeSet ABSENT — never invent empty FACTS.
 * NOT_APPLICABLE: observation intentionally not required for this Attempt.
 */
export type ExecutionReviewVerificationStatus =
  | "OBSERVED"
  | "UNAVAILABLE"
  | "NOT_PERFORMED"
  | "NOT_APPLICABLE";

export type ExecutionReviewRetentionState =
  | "HOT"
  | "ARCHIVABLE"
  | "PRUNABLE"
  | "PRUNED";

export type ExecutionReviewItemKind =
  | "file"
  | "diff"
  | "validation"
  | "test_output"
  | "log"
  | "artifact"
  | "git_result"
  | "external_result"
  | "other";

export type ExecutionReviewItem = {
  readonly itemId: string;
  readonly kind: ExecutionReviewItemKind;
  /** Logical repository path when applicable — never `.sfia-exec` as métier. */
  readonly logicalPath?: string;
  readonly label: string;
  readonly contentRef?: string;
  readonly digest?: string;
  readonly summary?: string;
};

export type ExecutionReviewMaterialManifest = {
  readonly schemaVersion: typeof OA_EXECUTION_REVIEW_MATERIAL_SCHEMA;
  readonly reviewMaterialId: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly executorClaims: {
    readonly cursorExecutionReportRef: string | null;
    readonly cursorReviewEndOfRef: string | null;
  };
  readonly verifiedEffects: {
    /** OBSERVED ⇒ verifiedChangeSetRef may be set (incl. empty set). Else ABSENT. */
    readonly verificationStatus: ExecutionReviewVerificationStatus;
    readonly verifiedChangeSetRef: string | null;
    readonly claimFactMismatch: boolean;
    readonly gitFacts: readonly string[];
    readonly validationFacts: readonly string[];
  };
  readonly reviewItems: readonly ExecutionReviewItem[];
  readonly blockers: readonly string[];
  readonly reservations: readonly string[];
  readonly completeness: ExecutionReviewCompleteness;
  readonly retentionState: ExecutionReviewRetentionState;
  readonly createdAt: string;
};

function safeAttemptSegment(attemptId: string): string {
  return attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
}

export function genericExecutionReviewMaterialRefsRelative(
  attemptId: string,
): {
  readonly root: string;
  readonly manifest: string;
  readonly cursorReport: string;
  readonly reviewEndOf: string;
  readonly verifiedChangeSet: string;
  readonly itemsDir: string;
} {
  const segment = safeAttemptSegment(attemptId);
  const root = `refs/attempts/${segment}/execution-review`;
  return {
    root,
    manifest: `${root}/manifest.json`,
    cursorReport: `${root}/cursor-execution-report.json`,
    reviewEndOf: `${root}/cursor-review-end-of.json`,
    verifiedChangeSet: `${root}/verified-changeset.json`,
    itemsDir: `${root}/items`,
  };
}

export function digestUtf8(content: string | Buffer): string {
  const buf = typeof content === "string" ? Buffer.from(content, "utf8") : content;
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

export function persistGenericExecutionReviewMaterial(input: {
  readonly refsRoot: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly cursorReport?: CursorExecutionReport | null;
  readonly reviewEndOf?: CursorReviewEndOf | null;
  readonly verifiedChangeSet?: VerifiedChangeSet | null;
  /** Required when VerifiedChangeSet may be absent — defaults UNAVAILABLE if unset + no VCS. */
  readonly verificationStatus?: ExecutionReviewVerificationStatus;
  readonly reviewItems?: readonly {
    readonly kind: ExecutionReviewItemKind;
    readonly logicalPath?: string;
    readonly label: string;
    readonly bytes?: Buffer;
    readonly text?: string;
    readonly summary?: string;
  }[];
  readonly blockers?: readonly string[];
  readonly reservations?: readonly string[];
  readonly completeness?: ExecutionReviewCompleteness;
  readonly retentionState?: ExecutionReviewRetentionState;
  readonly createdAt?: string;
}):
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      manifestAbsolutePath: string;
      /** Relative ref under refsRoot when OBSERVED; else null. */
      verifiedChangeSetRef: string | null;
      /** Digest of exact durable verified-changeset.json bytes (CP3-04). */
      durableVerifiedChangeSetDigest: string | null;
    }
  | { ok: false; code: string; message: string } {
  try {
    const rel = genericExecutionReviewMaterialRefsRelative(input.attemptId);
    const rootAbs = path.join(input.refsRoot, rel.root);
    fs.mkdirSync(rootAbs, { recursive: true });
    fs.mkdirSync(path.join(input.refsRoot, rel.itemsDir), { recursive: true });

    let cursorExecutionReportRef: string | null = null;
    if (input.cursorReport) {
      const abs = path.join(input.refsRoot, rel.cursorReport);
      fs.writeFileSync(abs, `${JSON.stringify(input.cursorReport)}\n`, "utf8");
      cursorExecutionReportRef = rel.cursorReport;
    }

    let cursorReviewEndOfRef: string | null = null;
    if (input.reviewEndOf) {
      const abs = path.join(input.refsRoot, rel.reviewEndOf);
      fs.writeFileSync(abs, `${JSON.stringify(input.reviewEndOf)}\n`, "utf8");
      cursorReviewEndOfRef = rel.reviewEndOf;
    }

    let verifiedChangeSetRef: string | null = null;
    let durableVerifiedChangeSetDigest: string | null = null;
    const gitFacts: string[] = [];
    const validationFacts: string[] = [];
    const claimFactMismatch =
      input.verifiedChangeSet?.claimFactMismatch === true;
    // CR-02: only persist VerifiedChangeSet when observation actually ran.
    const verificationStatus: ExecutionReviewVerificationStatus =
      input.verificationStatus ??
      (input.verifiedChangeSet ? "OBSERVED" : "UNAVAILABLE");
    if (verificationStatus === "OBSERVED" && input.verifiedChangeSet) {
      const abs = path.join(input.refsRoot, rel.verifiedChangeSet);
      // Strip absolute worktree paths from durable payload — logical facts only.
      const durable = {
        ...input.verifiedChangeSet,
        worktreePath: "<disposed-or-ephemeral>",
        all: input.verifiedChangeSet.all.map(({ contentAbsolutePath: _, ...e }) => e),
        created: input.verifiedChangeSet.created.map(
          ({ contentAbsolutePath: _, ...e }) => e,
        ),
        modified: input.verifiedChangeSet.modified.map(
          ({ contentAbsolutePath: _, ...e }) => e,
        ),
        deleted: input.verifiedChangeSet.deleted,
        renamed: input.verifiedChangeSet.renamed,
      };
      // CP3-04 — digest MUST be of the exact durable bytes persisted (not the
      // in-memory VerifiedChangeSet that still carries absolute paths).
      const durableBytes = `${JSON.stringify(durable)}\n`;
      fs.writeFileSync(abs, durableBytes, "utf8");
      durableVerifiedChangeSetDigest = digestUtf8(durableBytes);
      verifiedChangeSetRef = rel.verifiedChangeSet;
      if (claimFactMismatch) {
        gitFacts.push(
          `claim_fact_mismatch unclaimed=${input.verifiedChangeSet.unclaimedObservedPaths.join(",")}`,
        );
      }
      if (input.verifiedChangeSet.all.length === 0) {
        gitFacts.push("verified_zero_change");
      }
    } else if (verificationStatus !== "OBSERVED") {
      gitFacts.push(`verification_status=${verificationStatus}`);
    }

    const reviewItems: ExecutionReviewItem[] = [];
    let ordinal = 0;
    for (const item of input.reviewItems ?? []) {
      ordinal += 1;
      const itemId = `ri:${String(ordinal).padStart(3, "0")}`;
      let contentRef: string | undefined;
      let digest: string | undefined;
      if (item.bytes || item.text) {
        const bytes =
          item.bytes ?? Buffer.from(item.text ?? "", "utf8");
        digest = digestUtf8(bytes);
        const fileName = `${itemId}.bin`;
        const itemRel = `${rel.itemsDir}/${fileName}`;
        fs.writeFileSync(path.join(input.refsRoot, itemRel), bytes);
        contentRef = itemRel;
      }
      reviewItems.push({
        itemId,
        kind: item.kind,
        logicalPath: item.logicalPath,
        label: item.label,
        contentRef,
        digest,
        summary: item.summary,
      });
    }

    for (const v of input.cursorReport?.validationEffects ?? []) {
      validationFacts.push(`${v.identity}:${v.result}`);
    }

    const completeness: ExecutionReviewCompleteness =
      input.completeness ??
      (verificationStatus !== "OBSERVED" ||
      claimFactMismatch ||
      !cursorExecutionReportRef
        ? "PARTIAL"
        : cursorExecutionReportRef &&
            (reviewItems.length > 0 ||
              verifiedChangeSetRef ||
              cursorReviewEndOfRef)
          ? "FULL"
          : "PARTIAL");

    const manifest: ExecutionReviewMaterialManifest = {
      schemaVersion: OA_EXECUTION_REVIEW_MATERIAL_SCHEMA,
      reviewMaterialId: `erm:${safeAttemptSegment(input.attemptId)}`,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      attemptId: input.attemptId,
      repositoryRef: input.repositoryRef,
      baseSha: input.baseSha,
      executorClaims: {
        cursorExecutionReportRef,
        cursorReviewEndOfRef,
      },
      verifiedEffects: {
        verificationStatus,
        verifiedChangeSetRef:
          verificationStatus === "OBSERVED" ? verifiedChangeSetRef : null,
        claimFactMismatch,
        gitFacts,
        validationFacts,
      },
      reviewItems,
      blockers: [...(input.blockers ?? input.cursorReport?.blockers ?? [])],
      reservations: [
        ...(input.reservations ?? input.cursorReport?.reservations ?? []),
      ],
      completeness,
      retentionState: input.retentionState ?? "HOT",
      createdAt: input.createdAt ?? new Date().toISOString(),
    };

    const manifestAbsolutePath = path.join(input.refsRoot, rel.manifest);
    fs.writeFileSync(
      manifestAbsolutePath,
      `${JSON.stringify(manifest, null, 2)}\n`,
      "utf8",
    );

    return {
      ok: true,
      manifest,
      manifestAbsolutePath,
      verifiedChangeSetRef,
      durableVerifiedChangeSetDigest,
    };
  } catch (err) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function loadGenericExecutionReviewMaterial(input: {
  readonly refsRoot: string;
  readonly attemptId: string;
}):
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      cursorReport: CursorExecutionReport | null;
      reviewEndOf: CursorReviewEndOf | null;
      verifiedChangeSet: VerifiedChangeSet | null;
    }
  | { ok: false; code: string; message: string } {
  const rel = genericExecutionReviewMaterialRefsRelative(input.attemptId);
  const manifestAbs = path.join(input.refsRoot, rel.manifest);
  if (!fs.existsSync(manifestAbs)) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_MISSING",
      message: "Generic Execution Review Material introuvable.",
    };
  }
  try {
    const manifest = JSON.parse(
      fs.readFileSync(manifestAbs, "utf8"),
    ) as ExecutionReviewMaterialManifest;
    let cursorReport: CursorExecutionReport | null = null;
    let reviewEndOf: CursorReviewEndOf | null = null;
    let verifiedChangeSet: VerifiedChangeSet | null = null;
    if (manifest.executorClaims.cursorExecutionReportRef) {
      const p = path.join(
        input.refsRoot,
        manifest.executorClaims.cursorExecutionReportRef,
      );
      if (fs.existsSync(p)) {
        cursorReport = JSON.parse(
          fs.readFileSync(p, "utf8"),
        ) as CursorExecutionReport;
      }
    }
    if (manifest.executorClaims.cursorReviewEndOfRef) {
      const p = path.join(
        input.refsRoot,
        manifest.executorClaims.cursorReviewEndOfRef,
      );
      if (fs.existsSync(p)) {
        reviewEndOf = JSON.parse(fs.readFileSync(p, "utf8")) as CursorReviewEndOf;
      }
    }
    if (
      manifest.verifiedEffects.verificationStatus === "OBSERVED" &&
      manifest.verifiedEffects.verifiedChangeSetRef
    ) {
      const p = path.join(
        input.refsRoot,
        manifest.verifiedEffects.verifiedChangeSetRef,
      );
      if (fs.existsSync(p)) {
        verifiedChangeSet = JSON.parse(
          fs.readFileSync(p, "utf8"),
        ) as VerifiedChangeSet;
      }
    }
    return { ok: true, manifest, cursorReport, reviewEndOf, verifiedChangeSet };
  } catch (err) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_LOAD_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function readExecutionReviewItemBytes(input: {
  readonly refsRoot: string;
  readonly contentRef: string;
  readonly byteCap?: number;
}):
  | {
      ok: true;
      text: string;
      completeness: ExecutionReviewCompleteness;
      digest: string;
    }
  | { ok: false; code: string; message: string } {
  // Fail-closed: only relative refs under execution-review/items/
  const norm = input.contentRef.replace(/\\/g, "/");
  if (
    norm.includes("..") ||
    path.isAbsolute(norm) ||
    !norm.includes("/execution-review/items/")
  ) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_REF_DENIED",
      message: "Review item ref must be Attempt-bound under execution-review/items.",
    };
  }
  const abs = path.join(input.refsRoot, norm);
  if (!fs.existsSync(abs)) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_MISSING",
      message: "Review item content introuvable.",
    };
  }
  const bytes = fs.readFileSync(abs);
  const cap = input.byteCap ?? 24_000;
  const truncated = bytes.byteLength > cap;
  const slice = truncated ? bytes.subarray(0, cap) : bytes;
  return {
    ok: true,
    text: slice.toString("utf8"),
    completeness: truncated ? "PARTIAL" : "FULL",
    digest: digestUtf8(bytes),
  };
}

/** Default refs root beside Product SQLite (same convention as docs_write / mission-result). */
export function defaultMissionResultRefsRoot(sqliteDbPath: string): string {
  return path.join(path.dirname(sqliteDbPath), "mission-result-refs");
}
