/**
 * E1 B.2 — order and resolve parent refs for SUBJECT proposals in one capitalisation batch.
 * parentSubjectId may be a persisted subj_* id, a co-proposal intent id, or a parent subjectTitle.
 */

export type SubjectCreateProposal = {
  intentId: string;
  title: string;
  /** Raw parentSubjectId / parentRef from qualification — not necessarily a DB id. */
  parentRef?: string;
};

export function normalizeSubjectTitle(title: string): string {
  return title.trim().replace(/\s+/g, " ").toLowerCase();
}

function looksLikePersistedSubjectId(ref: string): boolean {
  return ref.startsWith("subj_");
}

export type ParentResolveInput = {
  self: SubjectCreateProposal;
  batch: SubjectCreateProposal[];
  /** intentId → created subj_* id within this capitalisation turn */
  createdByIntentId: ReadonlyMap<string, string>;
};

export type ParentResolveResult =
  | { kind: "root" }
  | { kind: "resolved"; parentSubjectId: string }
  | { kind: "pending_batch"; parentIntentId: string }
  /** Not in this batch — Studio looks up an existing ACTIVE subject by title. */
  | { kind: "lookup_title"; title: string }
  | { kind: "error"; reason: string };

/**
 * Resolve a parent reference without DB access when possible.
 * `pending_batch` means the parent is another proposal in the same batch (not yet created).
 */
export function resolveBatchParentRef(ref: string, input: ParentResolveInput): ParentResolveResult {
  const trimmed = ref.trim();
  if (!trimmed) return { kind: "root" };

  if (trimmed === input.self.intentId) {
    return { kind: "error", reason: "SUBJECT_SELF_PARENT" };
  }
  const selfNorm = normalizeSubjectTitle(input.self.title);
  if (normalizeSubjectTitle(trimmed) === selfNorm) {
    return { kind: "error", reason: "SUBJECT_SELF_PARENT" };
  }

  if (looksLikePersistedSubjectId(trimmed)) {
    return { kind: "resolved", parentSubjectId: trimmed };
  }

  const byIntent = input.batch.find((p) => p.intentId === trimmed);
  if (byIntent) {
    const created = input.createdByIntentId.get(trimmed);
    if (created) return { kind: "resolved", parentSubjectId: created };
    return { kind: "pending_batch", parentIntentId: trimmed };
  }

  const refNorm = normalizeSubjectTitle(trimmed);
  const titleMatches = input.batch.filter(
    (p) => p.intentId !== input.self.intentId && normalizeSubjectTitle(p.title) === refNorm,
  );
  if (titleMatches.length === 1) {
    const parent = titleMatches[0]!;
    const created = input.createdByIntentId.get(parent.intentId);
    if (created) return { kind: "resolved", parentSubjectId: created };
    return { kind: "pending_batch", parentIntentId: parent.intentId };
  }
  if (titleMatches.length > 1) {
    return { kind: "error", reason: "AMBIGUOUS_PARENT_REF" };
  }

  // Title or opaque ref not found in batch — allow DB title lookup (same prep).
  return { kind: "lookup_title", title: trimmed };
}

export type OrderSubjectsResult =
  | { ordered: SubjectCreateProposal[] }
  | { error: string; reason: string };

/**
 * Topological order: parents before children. Detects cycles within the batch.
 */
export function orderSubjectCreatesByDependency(
  creates: SubjectCreateProposal[],
): OrderSubjectsResult {
  const byId = new Map(creates.map((c) => [c.intentId, c]));
  const inBatchParent = new Map<string, string>();

  for (const c of creates) {
    if (!c.parentRef?.trim()) continue;
    const trimmed = c.parentRef.trim();
    if (looksLikePersistedSubjectId(trimmed)) continue;
    if (trimmed === c.intentId) {
      return { error: c.intentId, reason: "SUBJECT_SELF_PARENT" };
    }
    if (byId.has(trimmed)) {
      inBatchParent.set(c.intentId, trimmed);
      continue;
    }
    const refNorm = normalizeSubjectTitle(trimmed);
    if (refNorm === normalizeSubjectTitle(c.title)) {
      return { error: c.intentId, reason: "SUBJECT_SELF_PARENT" };
    }
    const titleMatches = creates.filter(
      (p) => p.intentId !== c.intentId && normalizeSubjectTitle(p.title) === refNorm,
    );
    if (titleMatches.length > 1) {
      return { error: c.intentId, reason: "AMBIGUOUS_PARENT_REF" };
    }
    if (titleMatches.length === 1) {
      inBatchParent.set(c.intentId, titleMatches[0]!.intentId);
    }
  }

  const pendingBatchParent = new Map(inBatchParent);
  const ready = creates
    .filter((c) => !pendingBatchParent.has(c.intentId))
    .map((c) => c.intentId);

  const ordered: SubjectCreateProposal[] = [];
  while (ready.length > 0) {
    const id = ready.shift()!;
    const node = byId.get(id);
    if (node) ordered.push(node);
    for (const [childId, parentId] of [...pendingBatchParent]) {
      if (parentId === id) {
        pendingBatchParent.delete(childId);
        ready.push(childId);
      }
    }
  }

  if (ordered.length !== creates.length) {
    return { error: creates[0]?.intentId ?? "batch", reason: "SUBJECT_BATCH_CYCLE" };
  }

  return { ordered };
}