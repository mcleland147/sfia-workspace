/**
 * ML5 MP-08 — pilot-consulted « Éléments récents » (max 5).
 * Client-scoped persistence only (no schema). Isolation: pilotId + projectId.
 * A Nora-only read or a mere mention does NOT populate this list — callers must
 * invoke recordProjectRecentItem on explicit successful Pilote consultation.
 *
 * Pure merge helpers are exported for deterministic unit tests without DOM storage.
 */

export type ProjectRecentItemKind =
  | "document_nora"
  | "file_git"
  | "document_git"
  | "execution"
  | "result"
  | "bilan"
  | "proof";

export type ProjectRecentItem = {
  id: string;
  kind: ProjectRecentItemKind;
  title: string;
  href?: string | null;
  /** Opaque version/ref for display continuity. */
  refLabel?: string | null;
  consultedAtMs: number;
  /** Exact resource coordinates for direct reopen (never invent). */
  documentId?: string | null;
  revisionId?: string | null;
  repositoryId?: string | null;
  path?: string | null;
  gitRef?: string | null;
  commit?: string | null;
  attemptId?: string | null;
  resultId?: string | null;
};

const STORAGE_PREFIX = "sfia.projectRecent.v1:";
export const PROJECT_RECENT_MAX_ITEMS = 5;

function storageKey(pilotId: string, projectId: string): string {
  return `${STORAGE_PREFIX}${pilotId}:${projectId}`;
}

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function mergeProjectRecentItems(
  existing: ProjectRecentItem[],
  nextItem: ProjectRecentItem,
  maxItems: number = PROJECT_RECENT_MAX_ITEMS,
): ProjectRecentItem[] {
  return [nextItem, ...existing.filter((x) => x.id !== nextItem.id)]
    .sort((a, b) => {
      if (b.consultedAtMs !== a.consultedAtMs) return b.consultedAtMs - a.consultedAtMs;
      return a.id.localeCompare(b.id);
    })
    .slice(0, maxItems);
}

export function readProjectRecentItems(
  pilotId: string,
  projectId: string,
): ProjectRecentItem[] {
  if (!canUseStorage() || !pilotId || !projectId) return [];
  try {
    const raw = window.localStorage.getItem(storageKey(pilotId, projectId));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((x): x is ProjectRecentItem => {
        if (!x || typeof x !== "object") return false;
        const r = x as ProjectRecentItem;
        return Boolean(r.id && r.kind && r.title && typeof r.consultedAtMs === "number");
      })
      .sort((a, b) => {
        if (b.consultedAtMs !== a.consultedAtMs) return b.consultedAtMs - a.consultedAtMs;
        return a.id.localeCompare(b.id);
      })
      .slice(0, PROJECT_RECENT_MAX_ITEMS);
  } catch {
    return [];
  }
}

export function recordProjectRecentItem(input: {
  pilotId: string;
  projectId: string;
  item: Omit<ProjectRecentItem, "consultedAtMs"> & { consultedAtMs?: number };
}): ProjectRecentItem[] {
  if (!input.pilotId || !input.projectId) return [];
  const nextItem: ProjectRecentItem = {
    id: input.item.id,
    kind: input.item.kind,
    title: input.item.title.slice(0, 160),
    href: input.item.href ?? null,
    refLabel: input.item.refLabel ?? null,
    consultedAtMs: input.item.consultedAtMs ?? Date.now(),
    documentId: input.item.documentId ?? null,
    revisionId: input.item.revisionId ?? null,
    repositoryId: input.item.repositoryId ?? null,
    path: input.item.path ?? null,
    gitRef: input.item.gitRef ?? null,
    commit: input.item.commit ?? null,
    attemptId: input.item.attemptId ?? null,
    resultId: input.item.resultId ?? null,
  };
  const existing = readProjectRecentItems(input.pilotId, input.projectId);
  const merged = mergeProjectRecentItems(existing, nextItem);
  if (canUseStorage()) {
    try {
      window.localStorage.setItem(
        storageKey(input.pilotId, input.projectId),
        JSON.stringify(merged),
      );
    } catch {
      /* quota / private mode — ignore */
    }
  }
  return merged;
}

export function clearProjectRecentItems(pilotId: string, projectId: string): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.removeItem(storageKey(pilotId, projectId));
  } catch {
    /* ignore */
  }
}

export type ProjectRecentExposureAllowlist = {
  /** Project load finished — fail-closed before this. */
  loadReady: boolean;
  /** Nora document ids currently visible to the pilot in this project. */
  documentIds: ReadonlySet<string>;
  /** Git repositories linked to this project (local binding — not LIVE content ACL). */
  repositoryIds: ReadonlySet<string>;
  /** Realization attempt ids owned by this pilot/project. */
  attemptIds: ReadonlySet<string>;
  /**
   * When false, allowlists for git/attempts are not yet known → hide those kinds.
   * Documents still use documentIds once loadReady.
   */
  accessListsReady: boolean;
};

/**
 * Fail-closed exposure filter before rendering recent titles/refs.
 * localStorage is not an authority — membership in project-scoped allowlists is required.
 */
export function filterProjectRecentItemsForExposure(
  items: ProjectRecentItem[],
  allow: ProjectRecentExposureAllowlist,
): ProjectRecentItem[] {
  if (!allow.loadReady) return [];
  return items.filter((item) => {
    if (item.kind === "document_nora") {
      const id =
        item.documentId ??
        item.id.replace(/^doc:/, "").replace(/:rev:.*$/, "");
      return Boolean(id) && allow.documentIds.has(id);
    }
    if (!allow.accessListsReady) return false;
    if (item.kind === "file_git" || item.kind === "document_git") {
      const repo = item.repositoryId?.trim() || "";
      return Boolean(repo) && Boolean(item.path?.trim()) && allow.repositoryIds.has(repo);
    }
    if (
      item.kind === "execution" ||
      item.kind === "result" ||
      item.kind === "bilan" ||
      item.kind === "proof"
    ) {
      const attempt = item.attemptId?.trim() || "";
      return Boolean(attempt) && allow.attemptIds.has(attempt);
    }
    return false;
  });
}
