/**
 * MP-08 / continuity §9.2 — canonical recent-item identity per consultation type.
 * Document identity includes exact revision when known (never silently upgrade).
 */

import type { TurnReference } from "@/domains/conversation/turn-projection";
import type { ProjectRecentItem, ProjectRecentItemKind } from "@/lib/project-recent-items";

export function recentItemFromDocumentConsultation(
  documentId: string,
  title: string,
  refLabel?: string | null,
  revisionId?: string | null,
): Pick<
  ProjectRecentItem,
  "id" | "kind" | "title" | "refLabel" | "documentId" | "revisionId"
> {
  const rev = revisionId?.trim() || null;
  return {
    id: rev ? `doc:${documentId}:rev:${rev}` : `doc:${documentId}`,
    kind: "document_nora",
    title: title.slice(0, 160),
    refLabel: refLabel ?? (rev ? `rev:${rev.slice(0, 8)}` : null),
    documentId,
    revisionId: rev,
  };
}

export function recentItemFromGitConsultation(input: {
  repositoryId: string;
  path: string;
  ref: string;
  title: string;
  commit?: string | null;
}): Pick<
  ProjectRecentItem,
  | "id"
  | "kind"
  | "title"
  | "refLabel"
  | "repositoryId"
  | "path"
  | "gitRef"
  | "commit"
> {
  const isPdf = /\.pdf$/i.test(input.path);
  return {
    id: `git:${input.repositoryId}:${input.path}@${input.ref}`,
    kind: (isPdf ? "document_git" : "file_git") as ProjectRecentItemKind,
    title: input.title.slice(0, 160),
    refLabel: (input.commit?.slice(0, 12) ?? input.ref).slice(0, 40),
    repositoryId: input.repositoryId,
    path: input.path,
    gitRef: input.ref,
    commit: input.commit ?? null,
  };
}

/** Realization attempt / bilan / proof consultation (after successful open). */
export function recentItemFromAttemptConsultation(input: {
  kind: "execution" | "result" | "bilan" | "proof";
  attemptId: string;
  title: string;
  refLabel?: string | null;
}): Pick<ProjectRecentItem, "id" | "kind" | "title" | "refLabel" | "attemptId"> {
  return {
    id: `${input.kind}:${input.attemptId}`,
    kind: input.kind,
    title: input.title.slice(0, 160),
    refLabel: input.refLabel ?? null,
    attemptId: input.attemptId,
  };
}

/** Map Nora turn references opened in Travail viewer — null when identity incomplete. */
export function recentItemFromTurnReference(
  ref: TurnReference,
  titleOverride?: string,
): ReturnType<typeof recentItemFromDocumentConsultation> | ReturnType<typeof recentItemFromGitConsultation> | null {
  if (ref.kind === "document" && ref.resourceId) {
    const rev = ref.revisionId ?? null;
    const label = rev ? `v:${rev.slice(0, 8)}` : null;
    return recentItemFromDocumentConsultation(
      ref.resourceId,
      titleOverride ?? ref.label,
      label,
      rev,
    );
  }
  if (ref.kind === "git" && ref.repositoryId && ref.path && ref.ref) {
    return recentItemFromGitConsultation({
      repositoryId: ref.repositoryId,
      path: ref.path,
      ref: ref.ref,
      title: titleOverride ?? ref.label,
      commit: ref.commit ?? null,
    });
  }
  return null;
}
