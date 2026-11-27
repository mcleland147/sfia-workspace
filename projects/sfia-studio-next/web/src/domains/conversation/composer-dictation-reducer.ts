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
  };
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

/** Ordered assembly: finals first (by key), then provisional remainders. */
export function assembleDictationTranscript(snap: DictationDraftSnapshot): string {
  const parts: string[] = [];
  const finalIds = Object.keys(snap.finalByItem).sort();
  for (const id of finalIds) {
    const t = snap.finalByItem[id]?.trim();
    if (t) parts.push(t);
  }
  const provIds = Object.keys(snap.provisionalByItem).sort();
  for (const id of provIds) {
    if (snap.finalByItem[id]) continue;
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
