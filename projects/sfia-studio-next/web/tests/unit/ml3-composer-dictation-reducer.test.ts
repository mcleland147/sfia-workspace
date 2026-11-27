import { describe, expect, it } from "vitest";
import {
  applyTranscriptCompleted,
  applyTranscriptDelta,
  assembleDictationTranscript,
  createDictationDraftSnapshot,
  mergeDictationIntoDraft,
  shouldAcceptDictationEvent,
} from "@/domains/conversation/composer-dictation-reducer";

describe("ml3 composer dictation reducer", () => {
  it("assembles out-of-order completions without duplicating deltas", () => {
    let snap = createDictationDraftSnapshot({ baselineDraft: "Bonjour" });
    snap = applyTranscriptDelta(snap, "item_b", " monde");
    snap = applyTranscriptDelta(snap, "item_a", "SFIA");
    snap = applyTranscriptCompleted(snap, "item_b", "monde");
    snap = applyTranscriptCompleted(snap, "item_a", "SFIA");
    expect(assembleDictationTranscript(snap)).toBe("SFIA monde");
    const merged = mergeDictationIntoDraft(snap, "finalize");
    expect(merged.draft).toBe("Bonjour SFIA monde");
  });

  it("cancel restores baseline only", () => {
    let snap = createDictationDraftSnapshot({
      baselineDraft: "existant",
      insertOffset: 8,
    });
    snap = applyTranscriptDelta(snap, "i1", "temp");
    const cancelled = mergeDictationIntoDraft(snap, "cancel");
    expect(cancelled.draft).toBe("existant");
    expect(cancelled.transcript).toBe("");
  });

  it("rejects late events after cancel", () => {
    expect(
      shouldAcceptDictationEvent({
        status: "cancelled",
        eventSessionId: "s1",
        activeSessionId: "s1",
      }),
    ).toBe(false);
    expect(
      shouldAcceptDictationEvent({
        status: "open",
        eventSessionId: "s1",
        activeSessionId: "s1",
      }),
    ).toBe(true);
  });
});
