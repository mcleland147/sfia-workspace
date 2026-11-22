import { and, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  effectAttempts,
  observedGitFacts,
  projects,
} from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  projectPublicationFromRow,
  type ProjectPublicationListItem,
} from "./publication-projection";

export type { ProjectPublicationListItem } from "./publication-projection";

type FactRow = {
  factKind: string;
  sha: string;
  prNumber?: number | null;
  attemptId: string;
};

/**
 * Project-scoped Studio publications projection (D4/D7/D8/D9).
 * Read-only; owner-gated. Never treats an open PR as a verified merge.
 *
 * Publication and merge may be distinct effectAttempts. MERGE D8 facts belong
 * to the merge attempt and are correlated only via publicationAttemptId in the
 * merge plan (never by PR number alone across repositories).
 */
export async function listProjectPublications(
  pilotId: string,
  projectId: string,
): Promise<{ projectId: string; publications: ProjectPublicationListItem[] }> {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");

  const rows = await db
    .select({
      ref: documentPublicationRefs,
      fullName: authorizedRepositories.fullName,
      attempt: effectAttempts,
    })
    .from(documentPublicationRefs)
    .innerJoin(
      authorizedRepositories,
      eq(documentPublicationRefs.repositoryId, authorizedRepositories.id),
    )
    .leftJoin(effectAttempts, eq(documentPublicationRefs.effectAttemptId, effectAttempts.id))
    .where(
      and(
        eq(documentPublicationRefs.projectId, projectId),
        eq(documentPublicationRefs.pilotId, pilotId),
      ),
    )
    .orderBy(desc(documentPublicationRefs.updatedAt));

  const publicationAttemptIds = rows
    .map((r) => r.ref.effectAttemptId)
    .filter((id): id is string => Boolean(id));

  /** publicationAttemptId → merge attempt ids correlated by plan. */
  const mergeAttemptIdsByPub = new Map<string, string[]>();
  if (publicationAttemptIds.length > 0) {
    const mergeAttempts = await db
      .select({
        id: effectAttempts.id,
        planJson: effectAttempts.planJson,
      })
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.projectId, projectId),
          eq(effectAttempts.pilotId, pilotId),
          eq(effectAttempts.kind, "GIT_MERGE"),
        ),
      );

    for (const m of mergeAttempts) {
      let pubId: string | null = null;
      try {
        const plan = JSON.parse(m.planJson || "{}") as { publicationAttemptId?: string };
        pubId = plan.publicationAttemptId?.trim() || null;
      } catch {
        pubId = null;
      }
      if (!pubId || !publicationAttemptIds.includes(pubId)) continue;
      const bucket = mergeAttemptIdsByPub.get(pubId) ?? [];
      bucket.push(m.id);
      mergeAttemptIdsByPub.set(pubId, bucket);
    }
  }

  const allAttemptIds = [
    ...publicationAttemptIds,
    ...[...mergeAttemptIdsByPub.values()].flat(),
  ];
  const factsByAttempt = new Map<string, FactRow[]>();
  if (allAttemptIds.length > 0) {
    const facts = await db
      .select()
      .from(observedGitFacts)
      .where(
        and(
          eq(observedGitFacts.projectId, projectId),
          eq(observedGitFacts.pilotId, pilotId),
          inArray(observedGitFacts.attemptId, allAttemptIds),
        ),
      );
    for (const f of facts) {
      const bucket = factsByAttempt.get(f.attemptId) ?? [];
      bucket.push({
        factKind: f.factKind,
        sha: f.sha,
        prNumber: f.prNumber,
        attemptId: f.attemptId,
      });
      factsByAttempt.set(f.attemptId, bucket);
    }
  }

  const publications = rows.map((row) => {
    const pubAttemptId = row.ref.effectAttemptId ?? "";
    const pubFacts = factsByAttempt.get(pubAttemptId) ?? [];
    const mergeIds = mergeAttemptIdsByPub.get(pubAttemptId) ?? [];
    const mergeFacts = mergeIds.flatMap((id) => factsByAttempt.get(id) ?? []);
    // Correlate merge MERGE facts only when PR matches the publication ref (defense in depth).
    const correlatedMergeFacts = mergeFacts.filter((f) => {
      if (f.factKind !== "MERGE" && f.factKind !== "PR_MERGED") return true;
      if (row.ref.prNumber == null || f.prNumber == null) return f.factKind === "MERGE";
      return f.prNumber === row.ref.prNumber;
    });
    const facts = [...pubFacts, ...correlatedMergeFacts].map((f) => ({
      factKind: f.factKind,
      sha: f.sha,
      prNumber: f.prNumber,
    }));

    return projectPublicationFromRow({
      ref: row.ref,
      repositoryFullName: row.fullName,
      attempt: row.attempt
        ? { kind: row.attempt.kind, status: row.attempt.status }
        : null,
      facts,
    });
  });

  return { projectId, publications };
}
