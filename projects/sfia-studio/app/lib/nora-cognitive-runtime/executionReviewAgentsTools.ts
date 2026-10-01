/**
 * Bounded READ-ONLY Execution Review tools for Nora Deep Review (D-ER-09 / CP2-05).
 *
 * Project-bound + Attempt-bound + ref-bound.
 * No arbitrary filesystem paths, no mutation, no Evidence creation, no HD.
 * Prefer KEEP shared Agents runtime + ADAPT/COMPLETE these tools (R22).
 *
 * CP2-07 — read_item delegates to shared readBoundExecutionReviewItem
 * (same primitive as Pilot server action).
 */
import { tool } from "@openai/agents";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { readBoundExecutionReviewItem } from "@/features/project-assistant/f3/readBoundExecutionReviewItem";

export type ExecutionReviewToolContext = {
  readonly projectId: string;
  readonly attemptId: string;
  readonly refsRoot?: string;
  readonly budget?: NoraTurnBudget;
};

function deny(code: string, message: string): string {
  return JSON.stringify({ ok: false, code, message });
}

export function createExecutionReviewAgentsTools(
  ctx: ExecutionReviewToolContext,
) {
  const refsRoot = ctx.refsRoot ?? resolveProductEvidenceRefsRoot();
  const projectId = ctx.projectId.trim();
  const attemptId = ctx.attemptId.trim();

  const getManifest = tool({
    name: "execution_review_get_manifest",
    description:
      "Load the compact Generic Execution Review Material manifest for the CURRENT Project Attempt only. " +
      "Returns executorClaims (report + Review End Of refs — CLAIMS), verifiedEffects summary, reviewItems list, completeness. " +
      "READ-ONLY. Never invent FULL when completeness is PARTIAL. " +
      "When claimFactMismatch, report unclaimedObservedPaths (Studio FACT exclusive to Review Material).",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {},
    } as never,
    strict: false,
    execute: async () => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      if (!projectId || !attemptId) {
        return deny(
          "EXECUTION_REVIEW_BINDING_REQUIRED",
          "projectId and attemptId required.",
        );
      }
      const loaded = loadGenericExecutionReviewMaterial({
        refsRoot,
        attemptId,
      });
      if (!loaded.ok) {
        return deny(loaded.code, loaded.message);
      }
      if (loaded.manifest.projectId !== projectId) {
        return deny(
          "EXECUTION_REVIEW_PROJECT_MISMATCH",
          "Review Material hors Project courant — fail-closed.",
        );
      }
      if (loaded.manifest.attemptId !== attemptId) {
        return deny(
          "EXECUTION_REVIEW_ATTEMPT_MISMATCH",
          "Review Material hors Attempt courant — fail-closed.",
        );
      }
      return JSON.stringify({
        ok: true,
        completeness: loaded.manifest.completeness,
        retentionState: loaded.manifest.retentionState,
        executorClaims: {
          cursorReportPresent: Boolean(loaded.cursorReport),
          reviewEndOfPresent: Boolean(loaded.reviewEndOf),
          disclosure: "CLAIM_NOT_EVIDENCE",
        },
        verifiedEffects: {
          present: Boolean(loaded.verifiedChangeSet),
          verificationStatus:
            loaded.manifest.verifiedEffects.verificationStatus ??
            (loaded.verifiedChangeSet ? "OBSERVED" : "UNAVAILABLE"),
          claimFactMismatch:
            loaded.manifest.verifiedEffects.claimFactMismatch === true ||
            loaded.verifiedChangeSet?.claimFactMismatch === true,
          createdCount: loaded.verifiedChangeSet?.created.length ?? 0,
          modifiedCount: loaded.verifiedChangeSet?.modified.length ?? 0,
          deletedCount: loaded.verifiedChangeSet?.deleted.length ?? 0,
          unclaimedObservedPaths:
            loaded.verifiedChangeSet?.unclaimedObservedPaths ?? [],
        },
        reviewItems: loaded.manifest.reviewItems.map((i) => ({
          itemId: i.itemId,
          kind: i.kind,
          logicalPath: i.logicalPath ?? null,
          label: i.label,
          hasContent: Boolean(i.contentRef),
          digest: i.digest ?? null,
        })),
        blockers: loaded.manifest.blockers,
        reservations: loaded.manifest.reservations,
        note:
          "Cursor report / Review End Of remain CLAIMS. Prefer verifiedEffects when claimFactMismatch.",
      });
    },
  });

  const readItem = tool({
    name: "execution_review_read_item",
    description:
      "Read one ReviewItem by itemId from the CURRENT Attempt Review Material. " +
      "Ref-bound only — no arbitrary path. May return PARTIAL if truncated.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["itemId"],
      properties: {
        itemId: { type: "string", description: "Review item id from manifest." },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const itemId =
        args && typeof args === "object"
          ? String((args as { itemId?: unknown }).itemId ?? "").trim()
          : "";
      if (!itemId) {
        return deny("EXECUTION_REVIEW_ITEM_ID_REQUIRED", "itemId requis.");
      }
      const read = readBoundExecutionReviewItem({
        projectId,
        attemptId,
        itemId,
        refsRoot,
      });
      if (!read.ok) return deny(read.code, read.message);
      return JSON.stringify({
        ok: true,
        itemId: read.item.itemId,
        kind: read.item.kind,
        logicalPath: read.item.logicalPath ?? null,
        label: read.item.label,
        summary: read.item.summary ?? null,
        content: read.content,
        completeness: read.completeness,
        digest: read.digest,
      });
    },
  });

  return [getManifest, readItem] as const;
}
