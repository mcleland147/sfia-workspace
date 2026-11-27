/**
 * Deterministic dictation transcript assembly — no provider I/O.
 * Completions may arrive out of order; correlate by item_id.
 */
import type { DictationDraftSnapshot } from "./composer-dictation-types";

export function createDictationDraftSnapshot(input: {
  baselineDraft: string;
  insertOffset?: number | null;
}): DictationDraftSnapshot {
  return {
    baselineDraft: input.baselineDraft,
    insertOffset:
      input.insertOffset == null || !Number.isFinite(input.insertOffset)
        ? input.baselineDraft.length
        : Math.max(0, Math.min(input.baselineDraft.length, Math.floor(input.insertOffset))),
    provisionalByItem: {},
    finalByItem: {},
    textHidden: false,
    itemOrder: [],
  };
}

function trackItemOrder(snap: DictationDraftSnapshot, itemId: string): string[] {
  if (!itemId || snap.itemOrder.includes(itemId)) return snap.itemOrder;
  return [...snap.itemOrder, itemId];
}

export function applyTranscriptDelta(
  snap: DictationDraftSnapshot,
  itemId: string,
  delta: string,
): DictationDraftSnapshot {
  if (!itemId || !delta) return snap;
  const prev = snap.provisionalByItem[itemId] ?? "";
  return {
    ...snap,
    itemOrder: trackItemOrder(snap, itemId),
    provisionalByItem: {
      ...snap.provisionalByItem,
      [itemId]: prev + delta,
    },
  };
}

export function applyTranscriptCompleted(
  snap: DictationDraftSnapshot,
  itemId: string,
  transcript: string,
): DictationDraftSnapshot {
  if (!itemId) return snap;
  const nextProv = { ...snap.provisionalByItem };
  delete nextProv[itemId];
  return {
    ...snap,
    itemOrder: trackItemOrder(snap, itemId),
    provisionalByItem: nextProv,
    finalByItem: {
      ...snap.finalByItem,
      [itemId]: transcript,
    },
  };
}

export function setDictationTextHidden(
  snap: DictationDraftSnapshot,
  hidden: boolean,
): DictationDraftSnapshot {
  return { ...snap, textHidden: hidden };
}

/** Ordered assembly by first-seen item_id (itemOrder), not lexical key order. */
export function assembleDictationTranscript(snap: DictationDraftSnapshot): string {
  const parts: string[] = [];
  const seen = new Set<string>();
  for (const id of snap.itemOrder) {
    const t = snap.finalByItem[id]?.trim() || snap.provisionalByItem[id]?.trim();
    if (t) {
      parts.push(t);
      seen.add(id);
    }
  }
  for (const id of Object.keys(snap.provisionalByItem)) {
    if (seen.has(id) || snap.finalByItem[id]) continue;
    const t = snap.provisionalByItem[id]?.trim();
    if (t) parts.push(t);
  }
  return parts.join(" ").trim();
}

/**
 * Merge finalized dictation into baseline draft at insert offset.
 * Cancel restores baseline only.
 */
export function mergeDictationIntoDraft(
  snap: DictationDraftSnapshot,
  mode: "finalize" | "cancel" | "partial",
): { draft: string; transcript: string; partial: boolean } {
  if (mode === "cancel") {
    return { draft: snap.baselineDraft, transcript: "", partial: false };
  }
  const transcript = assembleDictationTranscript(snap);
  if (!transcript) {
    return {
      draft: snap.baselineDraft,
      transcript: "",
      partial: mode === "partial",
    };
  }
  const offset = snap.insertOffset ?? snap.baselineDraft.length;
  const before = snap.baselineDraft.slice(0, offset);
  const after = snap.baselineDraft.slice(offset);
  const needsSpaceBefore =
    before.length > 0 && !/\s$/.test(before) && !/^\s/.test(transcript);
  const needsSpaceAfter =
    after.length > 0 && !/\s$/.test(transcript) && !/^\s/.test(after);
  const draft =
    before +
    (needsSpaceBefore ? " " : "") +
    transcript +
    (needsSpaceAfter ? " " : "") +
    after;
  return { draft, transcript, partial: mode === "partial" };
}

/** Ignore late events after cancel/complete. */
export function shouldAcceptDictationEvent(input: {
  status: string;
  eventSessionId: string;
  activeSessionId: string;
}): boolean {
  if (input.eventSessionId !== input.activeSessionId) return false;
  if (
    input.status === "cancelled" ||
    input.status === "completed" ||
    input.status === "failed" ||
    input.status === "expired"
  ) {
    return false;
  }
  return true;
}
