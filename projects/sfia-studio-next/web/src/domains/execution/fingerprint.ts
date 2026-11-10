import { createHash } from "crypto";
import type { MergePlan, PublicationPlan } from "./types";

function canonical(payload: unknown): string {
  return JSON.stringify(payload);
}

export function revisionContentFingerprint(contentMarkdown: string): string {
  return createHash("sha256").update(contentMarkdown).digest("hex");
}

/**
 * Stable, collision-resistant publication branch from full correlationKey.
 * Replaces prefix truncation (`slice(0,12)`) which mapped distinct keys to one ref.
 */
export function publicationBranchFromCorrelationKey(correlationKey: string): string {
  const slug = createHash("sha256").update(correlationKey, "utf8").digest("hex").slice(0, 16);
  return `sfia/pub-${slug}`;
}

export function inspectionFingerprint(input: {
  revisionId: string;
  revisionFingerprint: string;
  targetPath: string;
  baseSha: string | null;
  baseContent: string | null;
  proposedContent: string;
  unifiedDiff: string;
}): string {
  return createHash("sha256")
    .update(
      canonical({
        revisionId: input.revisionId,
        revisionFingerprint: input.revisionFingerprint,
        targetPath: input.targetPath,
        baseSha: input.baseSha,
        baseContentFp: input.baseContent == null ? null : revisionContentFingerprint(input.baseContent),
        proposedFp: revisionContentFingerprint(input.proposedContent),
        unifiedDiffFp: revisionContentFingerprint(input.unifiedDiff),
      }),
    )
    .digest("hex");
}

/** Canonical effect conditions — pilot/project bound outside the hash via attempt row. */
export function publicationEffectFingerprint(plan: PublicationPlan): string {
  // Historical plans omit effectProviderMode — keep payload shape identical so D6
  // fingerprints remain stable. New prepares always set REAL|SCRIPTED and bind it.
  const payload: Record<string, unknown> = {
    kind: "GIT_PUBLICATION",
    documentId: plan.documentId,
    revisionId: plan.revisionId,
    preparationId: plan.preparationId,
    repositoryId: plan.repositoryId,
    repositoryFullName: plan.repositoryFullName,
    authorizationId: plan.authorizationId,
    installationId: plan.installationId,
    actorLogin: plan.actorLogin,
    permissions: plan.permissions,
    targetPath: plan.targetPath,
    targetBranch: plan.targetBranch,
    publicationBranch: plan.publicationBranch,
    baseSha: plan.baseSha,
    revisionFingerprint: plan.revisionFingerprint,
    inspectionFingerprint: plan.inspection.inspectionFingerprint,
    steps: plan.steps,
  };
  if (plan.effectProviderMode === "REAL" || plan.effectProviderMode === "SCRIPTED") {
    payload.effectProviderMode = plan.effectProviderMode;
  }
  return createHash("sha256").update(canonical(payload)).digest("hex");
}

export function mergeEffectFingerprint(plan: MergePlan): string {
  return createHash("sha256")
    .update(
      canonical({
        kind: "GIT_MERGE",
        repositoryId: plan.repositoryId,
        repositoryFullName: plan.repositoryFullName,
        authorizationId: plan.authorizationId,
        installationId: plan.installationId,
        actorLogin: plan.actorLogin,
        publicationAttemptId: plan.publicationAttemptId,
        publicationRefId: plan.publicationRefId,
        documentId: plan.documentId,
        revisionId: plan.revisionId,
        targetPath: plan.targetPath,
        prNumber: plan.prNumber,
        expectedHeadSha: plan.expectedHeadSha,
        expectedBaseSha: plan.expectedBaseSha,
        expectedHeadRef: plan.expectedHeadRef,
        expectedBaseRef: plan.expectedBaseRef,
        publicationBranch: plan.publicationBranch,
      }),
    )
    .digest("hex");
}

/** Simple unified diff for documentary inspection (not a Git patch applicator). */
export function buildUnifiedDiff(path: string, before: string | null, after: string): string {
  const a = (before ?? "").split("\n");
  const b = after.split("\n");
  const lines: string[] = [
    `--- a/${path}`,
    `+++ b/${path}`,
    `@@ -1,${a.length || 1} +1,${b.length || 1} @@`,
  ];
  if (before == null) {
    for (const line of b) lines.push(`+${line}`);
  } else if (before === after) {
    for (const line of b) lines.push(` ${line}`);
  } else {
    for (const line of a) lines.push(`-${line}`);
    for (const line of b) lines.push(`+${line}`);
  }
  return lines.join("\n");
}
