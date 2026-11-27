/**
 * MP-08 / continuity §9.2 — canonical recent-item identity per consultation type.
 */

import type { TurnReference } from "@/domains/conversation/turn-projection";
import type { ProjectRecentItemKind } from "@/lib/project-recent-items";

export function recentItemFromDocumentConsultation(
  documentId: string,
  title: string,
  refLabel?: string | null,
): {
  id: string;
  kind: "document_nora";
  title: string;
  refLabel: string | null;
} {
  return {
    id: `doc:${documentId}`,
    kind: "document_nora",
    title: title.slice(0, 160),
    refLabel: refLabel ?? null,
  };
}

export function recentItemFromGitConsultation(input: {
  repositoryId: string;
  path: string;
  ref: string;
  title: string;
  commit?: string | null;
}): {
  id: string;
  kind: ProjectRecentItemKind;
  title: string;
  refLabel: string | null;
} {
  const isPdf = /\.pdf$/i.test(input.path);
  return {
    id: `git:${input.repositoryId}:${input.path}@${input.ref}`,
    kind: isPdf ? "document_git" : "file_git",
    title: input.title.slice(0, 160),
    refLabel: (input.commit?.slice(0, 12) ?? input.ref).slice(0, 40),
  };
}

/** Map Nora turn references opened in Travail viewer — null when identity incomplete. */
export function recentItemFromTurnReference(
  ref: TurnReference,
  titleOverride?: string,
): ReturnType<typeof recentItemFromDocumentConsultation> | ReturnType<typeof recentItemFromGitConsultation> | null {
  if (ref.kind === "document" && ref.resourceId) {
    const rev = ref.revisionId ? `v:${ref.revisionId}` : null;
    return recentItemFromDocumentConsultation(ref.resourceId, titleOverride ?? ref.label, rev);
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