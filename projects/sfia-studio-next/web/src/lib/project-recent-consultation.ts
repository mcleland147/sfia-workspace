/**
 * MP-08 / continuity §9.2 — canonical recent-item identity per consultation type.
 * Document identity includes exact revision when known (never silently upgrade).
 */

import type { TurnReference } from "@/domains/conversation/turn-projection";
import type { ProjectRecentItem, ProjectRecentItemKind } from "@/lib/project-recent-items";

/** Hide a truncated technical revision id. A known version number stays a version. */
export function displayableRecentRef(refLabel?: string | null): string | null {
  const raw = refLabel?.trim() ?? "";
  if (!raw) return null;
  if (/^v\d+$/.test(raw)) return raw;
  if (/^rev:/i.test(raw) || /^v:/i.test(raw)) return null;
  return raw;
}

export function recentItemGlyph(kind: ProjectRecentItemKind): string {
  switch (kind) {
    case "document_nora":
      return "Doc";
    case "document_git":
      return "PDF";
    case "file_git":
      return "Git";
    case "execution":
      return "Exé";
    case "result":
      return "Rés";
    case "bilan":
      return "Bil";
    case "proof":
      return "Prv";
    default:
      return "•";
  }
}

export function recentItemMetaLabel(item: {
  kind: ProjectRecentItemKind;
  refLabel?: string | null;
  commit?: string | null;
  gitRef?: string | null;
}): string | null {
  if (item.kind === "file_git" || item.kind === "document_git") {
    if (item.commit && /^[0-9a-f]{7,64}$/i.test(item.commit)) {
      return `commit ${item.commit.slice(0, 12)}`;
    }
    if (item.gitRef) return `réf. ${item.gitRef}`;
  }
  const shown = displayableRecentRef(item.refLabel);
  if (shown && /^v\d+$/.test(shown)) return `Version ${shown.slice(1)}`;
  return shown;
}

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
    refLabel: displayableRecentRef(refLabel),
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
    refLabel: input.commit?.trim()
      ? `commit ${input.commit.trim().slice(0, 12)}`
      : `réf. ${input.ref}`.slice(0, 40),
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
  /** Distinguishes multiple proofs/results under the same attempt when known. */
  resourceKey?: string | null;
  resultId?: string | null;
}): Pick<
  ProjectRecentItem,
  "id" | "kind" | "title" | "refLabel" | "attemptId" | "resultId"
> {
  const resource = input.resourceKey?.trim() || input.resultId?.trim() || "";
  return {
    id: resource
      ? `${input.kind}:${input.attemptId}:${resource}`
      : `${input.kind}:${input.attemptId}`,
    kind: input.kind,
    title: input.title.slice(0, 160),
    refLabel: input.refLabel ?? null,
    attemptId: input.attemptId,
    resultId: input.resultId ?? null,
  };
}

/** Map Nora turn references opened in Travail viewer — null when identity incomplete. */
export function recentItemFromTurnReference(
  ref: TurnReference,
  titleOverride?: string,
): ReturnType<typeof recentItemFromDocumentConsultation> | ReturnType<typeof recentItemFromGitConsultation> | null {
  if (ref.kind === "document" && ref.resourceId) {
    const rev = ref.revisionId ?? null;
    return recentItemFromDocumentConsultation(
      ref.resourceId,
      titleOverride ?? ref.label,
      null,
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
