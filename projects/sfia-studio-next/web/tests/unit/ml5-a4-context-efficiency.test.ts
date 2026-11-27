import { describe, expect, it } from "vitest";
import {
  CONTINUATION_KNOWLEDGE_OMIT_MARKER,
  isJournalKnowledgeSnippet,
  isPreferredKnowledgeSnippet,
  partitionKnowledgeSnippets,
  resolveContinuationContextSnippets,
  resolveContinuationKnowledgeSnippets,
} from "@/domains/conversation/segment-context-efficiency";

describe("A.4 — segment context efficiency", () => {
  it("partitions journal vs auxiliary snippets", () => {
    const snippets = [
      "ACQUIS[FACT/id1/AVAILABLE] subject=∅: stmt",
      "DOCUMENT[doc_1] «T» v1 status=AVAILABLE",
      "SUJET[subj_1/ACTIVE/AVAILABLE]: Title",
    ];
    const { journal, auxiliary } = partitionKnowledgeSnippets(snippets);
    expect(journal).toHaveLength(2);
    expect(auxiliary).toEqual(["DOCUMENT[doc_1] «T» v1 status=AVAILABLE"]);
    expect(isJournalKnowledgeSnippet("ACQUIS[FACT/x/PREFERRED] a")).toBe(true);
    expect(isPreferredKnowledgeSnippet("ACQUIS[FACT/x/PREFERRED] a")).toBe(true);
  });

  it("omits bulk journal on continuation with prior acquis but keeps PREFERRED", () => {
    const base = [
      "ACQUIS[FACT/a/PREFERRED] subject=∅: keep",
      "ACQUIS[FACT/b/AVAILABLE] subject=∅: drop",
      "DOCUMENT[doc] meta",
    ];
    const out = resolveContinuationKnowledgeSnippets(base, {
      useContinuation: true,
      hasPriorAcquis: true,
    });
    expect(out[0]).toBe(CONTINUATION_KNOWLEDGE_OMIT_MARKER);
    expect(out.some((s) => s.includes("keep"))).toBe(true);
    expect(out.some((s) => s.includes("drop"))).toBe(false);
    expect(out.some((s) => s.startsWith("DOCUMENT"))).toBe(true);
  });

  it("keeps full listing on first segment without prior acquis", () => {
    const base = ["ACQUIS[FACT/b/AVAILABLE] subject=∅: x"];
    expect(
      resolveContinuationKnowledgeSnippets(base, {
        useContinuation: false,
        hasPriorAcquis: false,
      }),
    ).toEqual(base);
  });

  it("trims recent message snippets on continuation", () => {
    const recent = ["USER: a", "ASSISTANT: b", "USER: c", "ASSISTANT: d"];
    expect(
      resolveContinuationContextSnippets(recent, {
        useContinuation: true,
        hasPriorAcquis: true,
        maxRecent: 2,
      }),
    ).toEqual(["USER: c", "ASSISTANT: d"]);
  });
});