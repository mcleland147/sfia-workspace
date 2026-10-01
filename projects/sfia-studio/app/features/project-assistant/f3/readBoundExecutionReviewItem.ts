/**
 * Shared bound read of Generic Execution Review items (CP2-07 / EP-15).
 *
 * Used by:
 * - Nora execution_review_read_item tool
 * - Pilot w2ReadExecutionReviewItemAction
 *
 * Client may only supply projectId + attemptId + itemId (opaque).
 * Server owns refsRoot + contentRef resolution — never trust client paths.
 */
import {
  loadGenericExecutionReviewMaterial,
  readExecutionReviewItemBytes,
  type ExecutionReviewCompleteness,
  type ExecutionReviewItem,
} from "./persistGenericExecutionReviewMaterial";
import { resolveProductEvidenceRefsRoot } from "./persistDocsWriteArtifactReviewMaterial";

export type BoundExecutionReviewItemReadResult =
  | {
      readonly ok: true;
      readonly item: ExecutionReviewItem;
      readonly content: string | null;
      readonly completeness: ExecutionReviewCompleteness;
      readonly digest: string | null;
      readonly reviewMaterialId: string;
      readonly claimFactMismatch: boolean;
      readonly verificationStatus: string;
      readonly reviewEndOfPresent: boolean;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

export function readBoundExecutionReviewItem(input: {
  readonly projectId: string;
  readonly attemptId: string;
  readonly itemId: string;
  /** Server-owned only — never from browser. */
  readonly refsRoot?: string;
}): BoundExecutionReviewItemReadResult {
  const projectId = input.projectId.trim();
  const attemptId = input.attemptId.trim();
  const itemId = input.itemId.trim();
  if (!projectId || !attemptId || !itemId) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_BINDING_REQUIRED",
      message: "projectId, attemptId and itemId required.",
    };
  }
  // Opaque itemId only — reject path-like client injection.
  if (
    itemId.includes("/") ||
    itemId.includes("\\") ||
    itemId.includes("..") ||
    itemId.includes("\0")
  ) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_ID_INVALID",
      message: "itemId must be an opaque ReviewItem id — paths rejected.",
    };
  }

  const refsRoot = input.refsRoot ?? resolveProductEvidenceRefsRoot();
  const loaded = loadGenericExecutionReviewMaterial({
    refsRoot,
    attemptId,
  });
  if (!loaded.ok) {
    return { ok: false, code: loaded.code, message: loaded.message };
  }
  if (loaded.manifest.projectId !== projectId) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_PROJECT_MISMATCH",
      message: "Review Material hors Project courant — fail-closed.",
    };
  }
  if (loaded.manifest.attemptId !== attemptId) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ATTEMPT_MISMATCH",
      message: "Review Material hors Attempt courant — fail-closed.",
    };
  }

  const item = loaded.manifest.reviewItems.find((i) => i.itemId === itemId);
  if (!item) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_NOT_FOUND",
      message: "ReviewItem inconnu pour cet Attempt.",
    };
  }

  if (!item.contentRef) {
    return {
      ok: true,
      item,
      content: null,
      completeness: "PARTIAL",
      digest: item.digest ?? null,
      reviewMaterialId: loaded.manifest.reviewMaterialId,
      claimFactMismatch: loaded.manifest.verifiedEffects.claimFactMismatch,
      verificationStatus:
        loaded.manifest.verifiedEffects.verificationStatus ?? "UNAVAILABLE",
      reviewEndOfPresent:
        loaded.manifest.executorClaims.cursorReviewEndOfRef != null,
    };
  }

  const bytes = readExecutionReviewItemBytes({
    refsRoot,
    contentRef: item.contentRef,
  });
  if (!bytes.ok) {
    return { ok: false, code: bytes.code, message: bytes.message };
  }

  // CP3-08 — fail-closed when durable bytes no longer match manifest digest.
  if (item.digest && bytes.digest !== item.digest) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_INTEGRITY_MISMATCH",
      message:
        "ReviewItem digest mismatch — bytes altérés; lecture refusée (Nora/Pilot).",
    };
  }

  return {
    ok: true,
    item,
    content: bytes.text,
    completeness: bytes.completeness,
    digest: bytes.digest,
    reviewMaterialId: loaded.manifest.reviewMaterialId,
    claimFactMismatch: loaded.manifest.verifiedEffects.claimFactMismatch,
    verificationStatus:
      loaded.manifest.verifiedEffects.verificationStatus ?? "UNAVAILABLE",
    reviewEndOfPresent:
      loaded.manifest.executorClaims.cursorReviewEndOfRef != null,
  };
}
