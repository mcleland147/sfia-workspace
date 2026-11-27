import { rmSync } from "node:fs";
import { afterEach, describe, expect, it } from "vitest";
import {
  contentFingerprint,
  derivedIndexRoot,
  isMobilizable,
  makeIndexRef,
  markSourceLifecycle,
  searchDerivedIndex,
  writeDerivedIndex,
  type DerivedIndexEntry,
} from "@/domains/knowledge/derived-embedding-index";
import {
  assertNoRevokedMobilized,
  mergeLexicalAndDerived,
} from "@/domains/knowledge/hybrid-knowledge-search";
import {
  assessUncertainty,
  shouldFallbackToResponses,
} from "@/domains/conversation/bounded-judgment";

const PROJECT = "proj_ml2_unit_test";

afterEach(() => {
  try {
    rmSync(derivedIndexRoot(PROJECT), { recursive: true, force: true });
  } catch {
    /* ignore */
  }
  delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
});

function entry(
  partial: Partial<DerivedIndexEntry> & { sourceId: string; text: string },
): DerivedIndexEntry {
  const fp = contentFingerprint(partial.text);
  return {
    sourceId: partial.sourceId,
    sourceKind: partial.sourceKind ?? "acquis",
    projectId: PROJECT,
    preparationId: "prep_test",
    contentFingerprint: fp,
    model: "text-embedding-3-small",
    dims: 3,
    revoked: partial.revoked ?? false,
    deleted: partial.deleted ?? false,
    versionLabel: partial.versionLabel ?? "v1",
    indexRef: makeIndexRef({
      projectId: PROJECT,
      sourceId: partial.sourceId,
      contentFingerprint: fp,
    }),
    updatedAt: new Date().toISOString(),
    text: partial.text,
  };
}

describe("ml2 derived embedding index", () => {
  it("filters revoked/deleted/foreign project from mobilization", () => {
    expect(
      isMobilizable(
        {
          projectId: PROJECT,
          revoked: false,
          deleted: false,
          model: "text-embedding-3-small",
        },
        PROJECT,
      ),
    ).toBe(true);
    expect(
      isMobilizable(
        {
          projectId: PROJECT,
          revoked: true,
          deleted: false,
          model: "text-embedding-3-small",
        },
        PROJECT,
      ),
    ).toBe(false);
    expect(
      isMobilizable(
        {
          projectId: "other",
          revoked: false,
          deleted: false,
          model: "text-embedding-3-small",
        },
        PROJECT,
      ),
    ).toBe(false);
  });

  it("search omits revoked after lifecycle mark (CONV-F23)", () => {
    process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
    const a = entry({ sourceId: "syn-a", text: "alpha capacity twelve" });
    const b = entry({ sourceId: "syn-b", text: "billing tariff luna" });
    const vectors = new Map<string, number[]>([
      ["syn-a", [1, 0, 0]],
      ["syn-b", [0, 1, 0]],
    ]);
    writeDerivedIndex({ projectId: PROJECT, entries: [a, b], vectors });
    const before = searchDerivedIndex({
      projectId: PROJECT,
      queryVector: [1, 0, 0],
      limit: 5,
    });
    expect(before.map((h) => h.sourceId)).toContain("syn-a");
    markSourceLifecycle(PROJECT, "syn-a", { revoked: true });
    const after = searchDerivedIndex({
      projectId: PROJECT,
      queryVector: [1, 0, 0],
      limit: 5,
    });
    expect(after.map((h) => h.sourceId)).not.toContain("syn-a");
    const leak = assertNoRevokedMobilized(after, new Set(["syn-a"]));
    expect(leak.ok).toBe(true);
  });

  it("hybrid merge keeps lexical and tags both", () => {
    process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
    const a = entry({ sourceId: "syn-a", text: "alpha" });
    writeDerivedIndex({
      projectId: PROJECT,
      entries: [a],
      vectors: new Map([["syn-a", [1, 0, 0]]]),
    });
    const merged = mergeLexicalAndDerived({
      projectId: PROJECT,
      lexical: [
        {
          sourceId: "syn-a",
          title: "A",
          snippet: "alpha",
          matchKind: "title",
          channel: "lexical",
        },
      ],
      queryVector: [1, 0, 0],
      limit: 5,
    });
    expect(merged.derivedUsed).toBe(true);
    expect(merged.hits[0]?.channel).toBe("both");
  });
});

describe("ml2 bounded judgment uncertainty", () => {
  it("mid-band is uncertain and triggers Responses fallback", () => {
    expect(assessUncertainty(0.5)).toBe(true);
    expect(assessUncertainty(0.95)).toBe(false);
    expect(
      shouldFallbackToResponses({
        uncertain: true,
        abstain: false,
        probability: 0.5,
        value: true,
      }),
    ).toBe(true);
    expect(
      shouldFallbackToResponses({
        uncertain: false,
        abstain: false,
        probability: 0.99,
        value: true,
      }),
    ).toBe(false);
  });
});
