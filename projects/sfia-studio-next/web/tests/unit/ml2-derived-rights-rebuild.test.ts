import { describe, expect, it } from "vitest";
import { mergeLexicalAndDerived } from "@/domains/knowledge/hybrid-knowledge-search";
import { collectAdmissibleKnowledgeSources } from "@/domains/knowledge/derived-embedding-service";

describe("ml2 derived rights + admissible rebuild filter", () => {
  it("collectAdmissibleKnowledgeSources excludes non-CURRENT / non-OPEN / ARCHIVED", () => {
    const sources = collectAdmissibleKnowledgeSources({
      preparationIds: ["prep-1"],
      subjects: [
        { id: "s1", title: "Live", status: "ACTIVE" },
        { id: "s2", title: "Gone", status: "ARCHIVED" },
      ] as never,
      acquis: [
        { id: "a1", kind: "FACT", statement: "ok", status: "CURRENT" },
        { id: "a2", kind: "FACT", statement: "old", status: "SUPERSEDED" },
      ] as never,
      openPoints: [
        { id: "o1", statement: "open", status: "OPEN" },
        { id: "o2", statement: "closed", status: "CLOSED" },
      ] as never,
      summariesBySubjectId: {},
    });
    const ids = sources.map((s) => s.sourceId).sort();
    expect(ids).toEqual(["a1", "o1", "s1"]);
  });

  it("mergeLexicalAndDerived drops derived hits outside allowedSourceIds", () => {
    const allowed = new Set(["lex-1"]);
    const { hits } = mergeLexicalAndDerived({
      projectId: "proj-x",
      lexical: [
        {
          sourceId: "lex-1",
          snippet: "exact",
          matchKind: "title",
          channel: "lexical",
        },
      ],
      queryVector: null,
      allowedSourceIds: allowed,
      env: { SFIA_DERIVED_EMBEDDING_SEARCH: "0" } as NodeJS.ProcessEnv,
    });
    expect(hits.every((h) => allowed.has(h.sourceId))).toBe(true);
    expect(hits).toHaveLength(1);
  });
});
