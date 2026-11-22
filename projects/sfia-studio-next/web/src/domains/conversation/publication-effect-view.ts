/**
 * Hydrate PublicationEffectView from D7/D8 owner payloads — never from LLM prose.
 * Used for same-turn restitution and follow-up verification context.
 */

import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  effectAttempts,
  observedGitFacts,
} from "@/db/schema";
import { buildGitFilePermalink } from "@/domains/integrations/resource-service";
import type {
  PublicationEffectOutcome,
  PublicationEffectView,
} from "./publication-effect-restitution";

export type OwnerPublicationPlan = {
  documentTitle?: string | null;
  revisionNumber?: number | null;
  repositoryFullName?: string | null;
  publicationBranch?: string | null;
  targetPath?: string | null;
  targetBranch?: string | null;
};

export type OwnerPublicationResult = {
  commitSha?: string | null;
  sha?: string | null;
  prNumber?: number | null;
  repositoryFullName?: string | null;
  publicationBranch?: string | null;
  progress?: {
    commitSha?: string | null;
    prNumber?: number | null;
    prCreated?: boolean;
    prOpened?: boolean;
  } | null;
};

export function parseOwnerJson<T>(raw: string | null | undefined): T {
  try {
    return JSON.parse(raw || "{}") as T;
  } catch {
    return {} as T;
  }
}

/**
 * Pure merge of plan + result (+ optional PR htmlUrl) into a COMPLETED/UNKNOWN view.
 */
export function buildPublicationEffectViewFromOwnerPayload(input: {
  outcome: PublicationEffectOutcome;
  attemptId: string;
  decisionId?: string | null;
  reason?: string | null;
  documentTitle?: string | null;
  revisionNumber?: number | null;
  plan: OwnerPublicationPlan;
  result: OwnerPublicationResult;
  prHtmlUrl?: string | null;
  mergeObserved?: boolean;
}): NonNullable<PublicationEffectView> {
  const repo =
    input.result.repositoryFullName?.trim() ||
    input.plan.repositoryFullName?.trim() ||
    null;
  const branch =
    input.result.publicationBranch?.trim() ||
    input.plan.publicationBranch?.trim() ||
    null;
  const path = input.plan.targetPath?.trim() || null;
  const commitSha =
    input.result.commitSha?.trim() ||
    input.result.sha?.trim() ||
    input.result.progress?.commitSha?.trim() ||
    null;
  const prNumber =
    input.result.prNumber ?? input.result.progress?.prNumber ?? null;

  let prUrl = input.prHtmlUrl?.trim() || null;
  if (!prUrl && repo && prNumber != null) {
    prUrl = `https://github.com/${repo}/pull/${prNumber}`;
  }

  let fileUrl: string | null = null;
  if (repo && commitSha && path) {
    fileUrl = buildGitFilePermalink(repo, commitSha, path);
  }

  return {
    attempted: true,
    outcome: input.outcome,
    reason: input.reason ?? null,
    documentTitle: input.documentTitle ?? input.plan.documentTitle ?? null,
    revisionNumber: input.revisionNumber ?? input.plan.revisionNumber ?? null,
    repositoryFullName: repo,
    publicationBranch: branch,
    targetPath: path,
    baseBranch: input.plan.targetBranch?.trim() || null,
    commitSha,
    prNumber,
    prUrl,
    fileUrl,
    mergeObserved: input.mergeObserved === true,
    attemptId: input.attemptId,
    decisionId: input.decisionId ?? null,
  };
}

/**
 * Load attempt + publication ref + PR_OPEN fact → PublicationEffectView.
 */
export async function buildPublicationEffectViewFromAttempt(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  outcome: PublicationEffectOutcome;
  documentTitle?: string | null;
  revisionNumber?: number | null;
  decisionId?: string | null;
  reason?: string | null;
}): Promise<NonNullable<PublicationEffectView> | null> {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) return null;

  const plan = parseOwnerJson<OwnerPublicationPlan>(row.planJson);
  const result = parseOwnerJson<OwnerPublicationResult>(row.resultJson);

  const ref = (
    await db
      .select({
        ref: documentPublicationRefs,
        fullName: authorizedRepositories.fullName,
      })
      .from(documentPublicationRefs)
      .innerJoin(
        authorizedRepositories,
        eq(documentPublicationRefs.repositoryId, authorizedRepositories.id),
      )
      .where(eq(documentPublicationRefs.effectAttemptId, input.attemptId))
      .limit(1)
  )[0];

  if (ref?.ref.targetPath && !plan.targetPath) {
    plan.targetPath = ref.ref.targetPath;
  }
  if (ref?.fullName && !plan.repositoryFullName) {
    plan.repositoryFullName = ref.fullName;
  }
  if (ref?.ref.headSha && !result.commitSha) {
    result.commitSha = ref.ref.headSha;
  }
  if (ref?.ref.prNumber != null && result.prNumber == null) {
    result.prNumber = ref.ref.prNumber;
  }
  try {
    const detail = JSON.parse(ref?.ref.detailJson || "{}") as {
      publicationBranch?: string;
    };
    if (detail.publicationBranch && !plan.publicationBranch) {
      plan.publicationBranch = detail.publicationBranch;
    }
  } catch {
    /* keep */
  }

  const prFact = (
    await db
      .select()
      .from(observedGitFacts)
      .where(
        and(
          eq(observedGitFacts.attemptId, input.attemptId),
          eq(observedGitFacts.factKind, "PR_OPEN"),
        ),
      )
      .limit(1)
  )[0];
  let prHtmlUrl: string | null = null;
  if (prFact?.detailJson) {
    try {
      const d = JSON.parse(prFact.detailJson) as { htmlUrl?: string };
      prHtmlUrl = d.htmlUrl?.trim() || null;
    } catch {
      prHtmlUrl = null;
    }
  }

  const mergeFact = (
    await db
      .select({ id: observedGitFacts.id })
      .from(observedGitFacts)
      .where(
        and(
          eq(observedGitFacts.attemptId, input.attemptId),
          eq(observedGitFacts.factKind, "MERGE"),
        ),
      )
      .limit(1)
  )[0];

  return buildPublicationEffectViewFromOwnerPayload({
    outcome: input.outcome,
    attemptId: input.attemptId,
    decisionId: input.decisionId ?? row.decisionId,
    reason: input.reason,
    documentTitle: input.documentTitle,
    revisionNumber: input.revisionNumber,
    plan,
    result,
    prHtmlUrl,
    mergeObserved: Boolean(mergeFact),
  });
}

/** Bound owner snippets for Nora follow-up verification (no secrets). */
export function formatPublicationOwnerFactsSnippets(
  pubs: Array<{
    repositoryFullName: string;
    targetPath: string;
    publicationBranch: string | null;
    targetBranch: string;
    headSha: string | null;
    prNumber: number | null;
    publicationStatus: string;
    effectStatus: string | null;
    mergeObserved: boolean;
    prStatusLabel: string;
  }>,
  limit = 3,
): string[] {
  return pubs.slice(0, limit).map((p) => {
    const branch = p.publicationBranch?.trim() || "(branche publication inconnue)";
    const sha = p.headSha ? p.headSha.slice(0, 12) : "∅";
    const pr =
      p.prNumber != null
        ? `PR #${p.prNumber} (${p.prStatusLabel})`
        : "aucune PR enregistrée";
    const merge = p.mergeObserved
      ? "fusion D8 observée"
      : `non fusionné vers ${p.targetBranch} (Studio)`;
    return (
      `PUBLICATION_STUDIO repo=${p.repositoryFullName} path=${p.targetPath} ` +
      `branch=${branch} base=${p.targetBranch} commit=${sha} ${pr} ` +
      `effect=${p.effectStatus ?? "∅"} status=${p.publicationStatus} ${merge}`
    );
  });
}

/**
 * Latest COMPLETED publication attempt for a project — for follow-up questions
 * when the thread no longer holds full facts.
 */
export async function loadLatestCompletedPublicationSnippet(input: {
  pilotId: string;
  projectId: string;
}): Promise<string | null> {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.pilotId, input.pilotId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.kind, "GIT_PUBLICATION"),
          eq(effectAttempts.status, "COMPLETED"),
        ),
      )
      .orderBy(desc(effectAttempts.updatedAt))
      .limit(1)
  )[0];
  if (!row) return null;
  const view = await buildPublicationEffectViewFromAttempt({
    pilotId: input.pilotId,
    projectId: input.projectId,
    attemptId: row.id,
    outcome: "COMPLETED",
  });
  if (!view) return null;
  const parts = [
    `PUBLICATION_STUDIO_LATEST attemptId=${view.attemptId}`,
    view.repositoryFullName ? `repo=${view.repositoryFullName}` : null,
    view.publicationBranch ? `branch=${view.publicationBranch}` : null,
    view.targetPath ? `path=${view.targetPath}` : null,
    view.commitSha ? `commit=${view.commitSha}` : null,
    view.prNumber != null ? `pr=#${view.prNumber}` : null,
    view.prUrl ? `prUrl=${view.prUrl}` : null,
    view.fileUrl ? `fileUrl=${view.fileUrl}` : null,
    view.baseBranch
      ? `base=${view.baseBranch} mergeObserved=${view.mergeObserved === true}`
      : null,
  ].filter(Boolean);
  return parts.join(" ");
}
