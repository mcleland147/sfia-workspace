import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  integrationAuthorizations,
  projectGitLinks,
  projects,
} from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

async function assertProject(pilotId: string, projectId: string) {
  const row = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Projet introuvable");
}

async function assertConnected(pilotId: string) {
  const auth = (
    await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      )
      .limit(1)
  )[0];
  if (!auth) throw new StudioError("ACCESS_DENIED", "Intégration GitHub non connectée");
  return auth;
}

export async function listProjectGitLinks(pilotId: string, projectId: string) {
  await assertProject(pilotId, projectId);
  return db
    .select({
      id: projectGitLinks.id,
      repositoryId: projectGitLinks.repositoryId,
      status: projectGitLinks.status,
      attachedAt: projectGitLinks.attachedAt,
      fullName: authorizedRepositories.fullName,
      defaultBranch: authorizedRepositories.defaultBranch,
    })
    .from(projectGitLinks)
    .innerJoin(authorizedRepositories, eq(projectGitLinks.repositoryId, authorizedRepositories.id))
    .where(and(eq(projectGitLinks.projectId, projectId), eq(projectGitLinks.status, "ATTACHED")));
}

export async function attachRepositoryToProject(
  pilotId: string,
  projectId: string,
  repositoryId: string,
) {
  await assertProject(pilotId, projectId);
  await assertConnected(pilotId);
  const repo = (
    await db
      .select()
      .from(authorizedRepositories)
      .where(
        and(
          eq(authorizedRepositories.id, repositoryId),
          eq(authorizedRepositories.pilotId, pilotId),
          eq(authorizedRepositories.status, "ACTIVE"),
        ),
      )
      .limit(1)
  )[0];
  if (!repo) throw new StudioError("NOT_FOUND", "Dépôt non autorisé");

  const existing = (
    await db
      .select()
      .from(projectGitLinks)
      .where(
        and(eq(projectGitLinks.projectId, projectId), eq(projectGitLinks.repositoryId, repositoryId)),
      )
      .limit(1)
  )[0];

  const now = new Date();
  if (existing) {
    if (existing.status === "ATTACHED") {
      return { linkId: existing.id, status: "ALREADY_ATTACHED" as const };
    }
    await db
      .update(projectGitLinks)
      .set({ status: "ATTACHED", attachedAt: now, detachedAt: null })
      .where(eq(projectGitLinks.id, existing.id));
    return { linkId: existing.id, status: "ATTACHED" as const };
  }

  const linkId = newId("pgl");
  await db.insert(projectGitLinks).values({
    id: linkId,
    projectId,
    pilotId,
    repositoryId,
    status: "ATTACHED",
    attachedAt: now,
    createdAt: now,
  });
  return { linkId, status: "ATTACHED" as const };
}

export async function detachProjectLink(pilotId: string, projectId: string, linkId: string) {
  await assertProject(pilotId, projectId);
  const row = (
    await db
      .select()
      .from(projectGitLinks)
      .where(
        and(
          eq(projectGitLinks.id, linkId),
          eq(projectGitLinks.projectId, projectId),
          eq(projectGitLinks.pilotId, pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Lien projet introuvable");
  if (row.status === "DETACHED") return { status: "ALREADY_DETACHED" as const };
  await db
    .update(projectGitLinks)
    .set({ status: "DETACHED", detachedAt: new Date() })
    .where(eq(projectGitLinks.id, linkId));
  return { status: "DETACHED" as const };
}
