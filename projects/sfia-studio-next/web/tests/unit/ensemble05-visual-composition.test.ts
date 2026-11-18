import { describe, expect, it } from "vitest";
import {
  parseVisualComposition,
  parseVisualCompositionDetailed,
  validateVisualComposition,
  hasGraphicBlocks,
  compositionOwnsBody,
  compositionAnchorsChoices,
  blockOrderKinds,
  provenanceIsConsultable,
  provenanceConsultableKeys,
  canonicalReferenceKey,
  resolveProvenanceReference,
  resolveVisualIcon,
  partitionChoicesForAnchors,
  partitionReferencesForAnchors,
  VISUAL_COMPOSITION_SCHEMA,
} from "@/domains/conversation/visual-composition";
import {
  buildTurnProjection,
  parseTurnProjection,
  TURN_PROJECTION_SCHEMA,
} from "@/domains/conversation/turn-projection";
import {
  E05_S1_SIMPLE,
  E05_S3_COMPARISON,
  E05_S5_COMPOSITE,
  E05_S7_INSUFFICIENT,
  fixtureSemanticQualify,
} from "@/domains/conversation/fixture-semantic-qualify";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";

describe("e05 visual composition consolidation + corrective", () => {
  it("rejects invalid / empty compositions (fail-closed)", () => {
    expect(parseVisualComposition(null)).toBeNull();
    expect(parseVisualComposition({ schemaVersion: "other", blocks: [] })).toBeNull();
    expect(validateVisualComposition({}).ok).toBe(false);
  });

  it("F01 — parses complete short ordered composition", () => {
    const raw = {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t1", markdown: "Intro", role: "information", icon: "not-real" },
        {
          kind: "relations",
          id: "r1",
          title: "Liens",
          nodes: [
            { id: "a", label: "A", kind: "observation" },
            { id: "b", label: "B", kind: "hypothesis" },
          ],
          edges: [{ from: "a", to: "b", label: "ok" }],
          textAlternative: "A lié à B",
        },
        { kind: "choices", id: "ch" },
        { kind: "references", id: "rf", resourceIds: ["doc_1"] },
      ],
    };
    const parsed = parseVisualComposition(raw)!;
    expect(blockOrderKinds(parsed)).toEqual(["text", "relations", "choices", "references"]);
    expect(compositionOwnsBody(parsed)).toBe(true);
    expect(compositionAnchorsChoices(parsed)).toBe(true);
    expect(parsed.blocks[0]).toMatchObject({ kind: "text", icon: undefined });
  });

  it("F02 — >10 blocks rejects entire composition (no silent drop)", () => {
    const blocks = Array.from({ length: 11 }, (_, i) => ({
      kind: "text",
      id: `t${i}`,
      markdown: `Block ${i}`,
    }));
    const r = parseVisualCompositionDetailed({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("VISUAL_COMPOSITION_BLOCK_OVERFLOW");
    expect(compositionOwnsBody(parseVisualComposition({ schemaVersion: VISUAL_COMPOSITION_SCHEMA, blocks }))).toBe(
      false,
    );
  });

  it("F03 — over-limit markdown rejects (no silent truncation)", () => {
    const r = parseVisualCompositionDetailed({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t1", markdown: "x".repeat(4001) }],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("VISUAL_COMPOSITION_TRUNCATION");
  });

  it("F04 — unknown block in the middle rejects whole composition", () => {
    const r = parseVisualCompositionDetailed({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t1", markdown: "Intro" },
        { kind: "magic-chart", id: "bad", data: [1, 2, 3] },
        { kind: "text", id: "t2", markdown: "Suite" },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("VISUAL_COMPOSITION_UNKNOWN_BLOCK");
  });

  it("F05 — partially invalid block rejects (ghost edge / incomplete)", () => {
    const r = parseVisualCompositionDetailed({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r1",
          title: "Liens",
          nodes: [
            { id: "a", label: "A", kind: "observation" },
            { id: "b", label: "B", kind: "hypothesis" },
          ],
          edges: [
            { from: "a", to: "b", label: "ok" },
            { from: "a", to: "ghost" },
          ],
          textAlternative: "A lié à B",
        },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("VISUAL_COMPOSITION_INVALID_BLOCK");
  });

  it("F06 — long recommendation over MAX_STR rejects (reserve not clipped)", () => {
    const r = parseVisualCompositionDetailed({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c1",
          title: "A vs B",
          alternatives: [
            { id: "a", title: "A", summary: "Option A" },
            { id: "b", title: "B", summary: "Option B" },
          ],
          recommendation: "R".repeat(401),
          textAlternative: "A ou B",
        },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("VISUAL_COMPOSITION_TRUNCATION");
  });

  it("F07 — legacy projection without composition still parses", () => {
    const legacy = buildTurnProjection({
      messageId: "m1",
      status: "COMPLETE",
      finalized: true,
    });
    expect(legacy.visualComposition).toBeUndefined();
    expect(parseTurnProjection(legacy)?.messageId).toBe("m1");
  });

  it("F08 — complete composition round-trips on projection", () => {
    const withVisual = buildTurnProjection({
      messageId: "m2",
      status: "COMPLETE",
      finalized: true,
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [
          {
            kind: "synthesis",
            id: "s1",
            title: "Synthèse",
            items: [{ id: "i1", label: "Priorité", tone: "priority" }],
            textAlternative: "Priorité unique",
          },
        ],
      },
    });
    expect(hasGraphicBlocks(withVisual.visualComposition)).toBe(true);
    const roundTrip = parseTurnProjection(withVisual);
    expect(roundTrip?.schemaVersion).toBe(TURN_PROJECTION_SCHEMA);
    expect(roundTrip?.visualComposition?.blocks[0]?.kind).toBe("synthesis");
    expect(compositionOwnsBody(roundTrip?.visualComposition)).toBe(true);
  });

  it("maps semantic roles; declarative provenance alone is never consultable (P1-B)", () => {
    expect(resolveVisualIcon({ role: "hypothesis" })).toBe("hypothesis");
    expect(resolveVisualIcon({ icon: "risk" })).toBe("risk");
    expect(provenanceIsConsultable({ label: "Note vague" })).toBe(false);
    expect(
      provenanceIsConsultable({
        label: "Doc",
        kind: "document",
        resourceId: "doc_1",
      }),
    ).toBe(false);
  });

  it("P01 — document provenance resolves only against canonical turn refs", () => {
    const p = { label: "Note", kind: "document" as const, resourceId: "doc_1", revisionId: "rev_a" };
    expect(resolveProvenanceReference(p, [])).toBeNull();
    expect(
      resolveProvenanceReference(p, [
        { kind: "document", label: "Note", resourceId: "doc_1", revisionId: "rev_a", available: true },
      ]),
    ).toMatchObject({ resourceId: "doc_1", revisionId: "rev_a" });
  });

  it("P02 — label-only stays descriptive", () => {
    expect(resolveProvenanceReference({ label: "Vague" }, [
      { kind: "document", label: "Vague", resourceId: "doc_x" },
    ])).toBeNull();
  });

  it("P03 — invented resourceId does not become consultable", () => {
    expect(
      resolveProvenanceReference(
        { label: "Fake", kind: "document", resourceId: "invented" },
        [{ kind: "document", label: "Real", resourceId: "doc_real" }],
      ),
    ).toBeNull();
  });

  it("P04/P05 — wrong revision or unavailable keeps canonical available flag", () => {
    expect(
      resolveProvenanceReference(
        { label: "Doc", kind: "document", resourceId: "doc_1", revisionId: "rev_missing" },
        [{ kind: "document", label: "Doc", resourceId: "doc_1", revisionId: "rev_a" }],
      ),
    ).toBeNull();
    const resolved = resolveProvenanceReference(
      { label: "Doc", kind: "document", resourceId: "doc_1" },
      [{ kind: "document", label: "Doc", resourceId: "doc_1", available: false }],
    );
    expect(resolved?.available).toBe(false);
  });

  it("P06 — git path without repositoryId is not consultable", () => {
    expect(
      resolveProvenanceReference(
        { label: "file", kind: "git", path: "README.md", ref: "main" },
        [{ kind: "git", label: "file", repositoryId: "repo_1", path: "README.md", ref: "main" }],
      ),
    ).toBeNull();
  });

  it("P07 — git canonical match requires repositoryId (+ optional path/ref)", () => {
    const hit = resolveProvenanceReference(
      { label: "file", kind: "git", repositoryId: "repo_1", path: "a.ts", ref: "main" },
      [
        {
          kind: "git",
          label: "file",
          repositoryId: "repo_1",
          path: "a.ts",
          ref: "main",
          commit: "abc",
        },
      ],
    );
    expect(hit?.repositoryId).toBe("repo_1");
    expect(hit?.commit).toBe("abc");
  });

  it("P08 — external HTTPS alone is insufficient without canonical match", () => {
    expect(
      resolveProvenanceReference(
        { label: "ext", kind: "external", href: "https://example.com/x" },
        [],
      ),
    ).toBeNull();
    expect(
      resolveProvenanceReference(
        { label: "ext", kind: "external", href: "https://example.com/x" },
        [{ kind: "external", label: "ext", href: "https://example.com/x" }],
      ),
    ).toMatchObject({ href: "https://example.com/x" });
  });

  it("V03 — provenance consultable keys dedupe identical canonical refs", () => {
    const blocks = [
      {
        kind: "comparison" as const,
        id: "c1",
        title: "A/B",
        alternatives: [
          { id: "a", title: "A", summary: "sa" },
          { id: "b", title: "B", summary: "sb" },
        ],
        textAlternative: "A ou B",
        provenance: [
          { label: "Note", kind: "document" as const, resourceId: "doc_1" },
          { label: "Vague" },
        ],
      },
    ];
    const canonical = [
      { kind: "document" as const, label: "Note", resourceId: "doc_1" },
      { kind: "document" as const, label: "Other", resourceId: "doc_2" },
    ];
    const keys = provenanceConsultableKeys(blocks, canonical);
    expect([...keys]).toEqual([canonicalReferenceKey(canonical[0]!)]);
  });

  it("anchors — first-claim, unknown ids ignored, residuals preserved, no double claim", () => {
    const blocks = [
      { kind: "choices" as const, id: "a1", choiceIds: ["c1", "missing"] },
      { kind: "choices" as const, id: "a2", choiceIds: ["c1", "c2"] },
      { kind: "references" as const, id: "r1", resourceIds: ["doc_1", "by-label-only"] },
    ];
    const choices = [
      { id: "c1", label: "One" },
      { id: "c2", label: "Two" },
      { id: "c3", label: "Three" },
    ];
    const refs = [
      { kind: "document" as const, label: "Doc 1", resourceId: "doc_1" },
      { kind: "document" as const, label: "by-label-only", resourceId: "doc_other" },
    ];
    const cp = partitionChoicesForAnchors(blocks, choices);
    expect(cp.byAnchorId.get("a1")?.map((c) => c.id)).toEqual(["c1"]);
    expect(cp.byAnchorId.get("a2")?.map((c) => c.id)).toEqual(["c2"]);
    expect(cp.residual.map((c) => c.id)).toEqual(["c3"]);

    const rp = partitionReferencesForAnchors(blocks, refs);
    expect(rp.byAnchorId.get("r1")?.map((r) => r.resourceId)).toEqual(["doc_1"]);
    expect(rp.residual.map((r) => r.resourceId)).toEqual(["doc_other"]);
  });

  it("fixtures: S1 text-only; S3/S5 ordered; S7 no fake chart", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    const simple = fixtureSemanticQualify(E05_S1_SIMPLE);
    expect(simple.visualComposition).toBeUndefined();

    const cmp = validateNoraTurnQualification(fixtureSemanticQualify(E05_S3_COMPARISON));
    expect(cmp.ok).toBe(true);
    if (cmp.ok) {
      const c = parseVisualComposition(cmp.value.visualComposition)!;
      expect(blockOrderKinds(c)[0]).toBe("text");
      expect(blockOrderKinds(c)).toContain("comparison");
      expect(compositionAnchorsChoices(c)).toBe(true);
    }

    const composite = validateNoraTurnQualification(fixtureSemanticQualify(E05_S5_COMPOSITE));
    expect(composite.ok).toBe(true);
    if (composite.ok) {
      const c = parseVisualComposition(composite.value.visualComposition)!;
      expect(blockOrderKinds(c)).toEqual([
        "text",
        "synthesis",
        "text",
        "comparison",
        "text",
        "references",
        "choices",
      ]);
    }

    const insuff = fixtureSemanticQualify(E05_S7_INSUFFICIENT);
    expect(insuff.visualComposition).toBeUndefined();
    expect(insuff.replyDraft.toLowerCase()).toMatch(/trompeur|chiffre/);
  });
});
