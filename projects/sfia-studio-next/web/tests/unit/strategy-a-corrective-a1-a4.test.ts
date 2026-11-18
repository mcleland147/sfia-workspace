import { describe, expect, it } from "vitest";
import {
  buildExhaustiveBlockFallback,
  deriveReplyDraftFromCanonicalSections,
  REPLY_DRAFT_MAX_CHARS,
} from "@/domains/conversation/conversational-composition";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
  VisualCompositionAgentOutputSchema,
} from "@/domains/conversation/visual-composition";

function canonicalTextBlock(markdown: string) {
  return {
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [{ kind: "text" as const, id: "t1", markdown }],
  };
}

/** Build composition whose derived join exceeds MAX without per-field parse truncation. */
function multiTextOverLimit(total: number) {
  const chunk = 3500;
  const blocks = [];
  let left = total;
  let i = 0;
  while (left > 0) {
    const n = Math.min(chunk, left);
    blocks.push({ kind: "text" as const, id: `t${i}`, markdown: "y".repeat(n) });
    left -= n;
    i += 1;
  }
  return { schemaVersion: VISUAL_COMPOSITION_SCHEMA, blocks };
}

describe("A1 — no silent truncation (exact oracles)", () => {
  /** Bypass per-field Zod caps; measure post-assembly length only. */
  function assembledAuthority(len: number) {
    return {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      contentAuthority: "canonical_sections" as const,
      blocks: [{ kind: "text" as const, id: "t1", markdown: "x".repeat(len) }],
    };
  }

  it("A1 exact: 11999 and 12000 succeed; 12001 overflows", () => {
    const a = deriveReplyDraftFromCanonicalSections(assembledAuthority(11999));
    const b = deriveReplyDraftFromCanonicalSections(assembledAuthority(12000));
    const c = deriveReplyDraftFromCanonicalSections(assembledAuthority(12001));
    expect(a.ok).toBe(true);
    if (a.ok) expect(a.length).toBe(11999);
    expect(b.ok).toBe(true);
    if (b.ok) expect(b.length).toBe(REPLY_DRAFT_MAX_CHARS);
    expect(c.ok).toBe(false);
    if (!c.ok && c.reason === "CV_DERIVE_OVERFLOW") {
      expect(c.length).toBe(12001);
      expect(c.max).toBe(REPLY_DRAFT_MAX_CHARS);
    }
  });

  it("A1 multi-block: separators included; over limit refuses (no slice)", () => {
    // 4×3500 = 14000 + 3×"\n\n" > 12000
    const over = multiTextOverLimit(14000);
    const comp = parseVisualComposition(over)!;
    expect(comp).toBeTruthy();
    const d = deriveReplyDraftFromCanonicalSections(comp);
    expect(d.ok).toBe(false);
    if (!d.ok && d.reason === "CV_DERIVE_OVERFLOW") {
      expect(d.length).toBeGreaterThan(REPLY_DRAFT_MAX_CHARS);
    }
    // under with separators still exact
    const under = parseVisualComposition(canonicalTextBlock("x".repeat(3000)))!;
    const du = deriveReplyDraftFromCanonicalSections(under);
    expect(du.ok).toBe(true);
    if (du.ok) expect(du.length).toBe(3000);
  });

  it("A1 reserve/important after limit + qualification refuse (not FINAL truncated)", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      replyDraft: "ignored",
      intents: [],
      visualComposition: multiTextOverLimit(14000),
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toMatch(/^CANONICAL_REPLY_OVERFLOW:/);
  });
});

describe("A2 — exhaustive section fields by family", () => {
  it("A2-text: markdown preserved as-is", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "Prose essentielle A2." }],
    })!;
    const d = deriveReplyDraftFromCanonicalSections(comp);
    expect(d.ok).toBe(true);
    if (d.ok) expect(d.text).toBe("Prose essentielle A2.");
  });

  it("A2-comparison: title/pros/cons/criteria/recommendation/provenance", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c",
          title: "Options",
          alternatives: [
            {
              id: "a1",
              title: "Option A",
              summary: "Résumé A",
              pros: ["rapide"],
              cons: ["coût"],
            },
            {
              id: "a2",
              title: "Option B",
              summary: "Résumé B",
              pros: ["robuste"],
              cons: ["lent"],
            },
          ],
          criteria: [
            {
              id: "cr1",
              label: "Délai (j)",
              unit: "j",
              values: { a1: "3", a2: "10" },
            },
          ],
          recommendation: "Préférer A si urgence",
          provenance: [{ label: "Note N1", kind: "document" }],
          textAlternative: "alt comparaison",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fb).toContain("Options");
    expect(fb).toContain("Avantages — rapide");
    expect(fb).toContain("Limites — coût");
    expect(fb).toContain("Délai (j)");
    expect(fb).toContain("Option A: 3");
    expect(fb).toContain("Recommandation: Préférer A si urgence");
    expect(fb).toContain("Sources: Note N1");
  });

  it("A2-sequence: role/detail/dependsOn/dateLabel", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s",
          title: "Trajectoire",
          steps: [
            {
              id: "s1",
              title: "Cadrage",
              role: "hypothesis",
              detail: "périmètre initial",
              dateLabel: "S1",
            },
            {
              id: "s2",
              title: "Validation",
              role: "decision",
              detail: "go/no-go",
              dependsOn: ["s1"],
              dateLabel: "S2",
            },
          ],
          textAlternative: "alt seq",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fb).toContain("1. Cadrage (hypothèse) — périmètre initial [S1]");
    expect(fb).toContain("dépend de: Cadrage");
    expect(fb).toContain("(décision)");
    expect(fb).toContain("[S2]");
  });

  it("A2-relations: detail/kind/lane/relation/conditions", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Graphe",
          layoutHint: "decisionTree",
          nodes: [
            { id: "c", label: "Condition", kind: "unknown", detail: "détail condition" },
            {
              id: "y",
              label: "Branche oui",
              kind: "hypothesis",
              laneId: "voie-oui",
              detail: "détail oui",
            },
            { id: "n", label: "Branche non", kind: "finding", detail: "détail non" },
          ],
          edges: [
            { from: "c", to: "y", relation: "condition_true", label: "oui" },
            { from: "c", to: "n", relation: "condition_false", label: "non" },
          ],
          textAlternative: "alt arbre",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fb).toContain("détail condition");
    expect(fb).toContain("(indéterminé)");
    expect(fb).toContain("(hypothèse)");
    expect(fb).toContain("voie « voie-oui »");
    expect(fb).toContain("Si oui");
    expect(fb).toContain("Si non");
    expect(fb).not.toContain("relation=");
    expect(fb).not.toContain("condition_true");
    expect(fb).not.toContain("Disposition:");
  });

  it("A2-sync: sync expressed as directed sync vers (not reciprocal)", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "p",
          title: "Par",
          layoutHint: "parallelProcess",
          nodes: [
            { id: "a", label: "A", kind: "observation", laneId: "Voie A" },
            { id: "g", label: "Gate", kind: "finding", laneId: "Gate" },
          ],
          edges: [{ from: "a", to: "g", relation: "sync", label: "prêt" }],
          textAlternative: "sync",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fb).toContain("synchronise vers");
    expect(fb).not.toContain("↔");
  });

  it("A2-synthesis: tone/role/detail preserved", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "synthesis",
          id: "sy",
          title: "Synthèse",
          items: [
            {
              id: "i1",
              label: "Risque",
              detail: "dépendance externe",
              tone: "risk",
              role: "hypothesis",
            },
          ],
          textAlternative: "alt synth",
        },
      ],
    })!;
    expect(comp).toBeTruthy();
    const fb = buildExhaustiveBlockFallback(comp!.blocks[0]!);
    expect(fb).toContain("Risque: dépendance externe");
    expect(fb).toContain("(risque)");
    expect(fb).toContain("hypothèse");
  });

  it("A2-choices/references: owned by owners — not in derived draft body", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t", markdown: "Corps principal." },
        { kind: "choices", id: "ch", choiceIds: ["c1"] },
        { kind: "references", id: "rf", referenceIds: ["r1"] },
      ],
    })!;
    const d = deriveReplyDraftFromCanonicalSections(comp);
    expect(d.ok).toBe(true);
    if (d.ok) {
      expect(d.text).toBe("Corps principal.");
      expect(d.text).not.toContain("c1");
      expect(d.text).not.toContain("r1");
    }
  });
});

describe("A3 — authority versioning", () => {
  it("A3-01 e05 → legacy_projection", () => {
    const c = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [{ kind: "text", id: "t", markdown: "hi" }],
    })!;
    expect(c!.contentAuthority).toBe("legacy_projection");
  });

  it("A3-02 projection-v1 Strategy B → legacy_projection (not retrofitted)", () => {
    const c = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
      blocks: [{ kind: "text", id: "t", markdown: "hi" }],
    })!;
    expect(c!.schemaVersion).toBe(VISUAL_COMPOSITION_SCHEMA_PROJECTION);
    expect(c!.contentAuthority).toBe("legacy_projection");
  });

  it("A3-03/07 canonical-v1 WRITE only", () => {
    const c = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "canon" }],
    })!;
    expect(c!.contentAuthority).toBe("canonical_sections");
    expect(VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
      blocks: [{ kind: "text", id: "t", markdown: "x" }],
    }).success).toBe(false);
    expect(VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "x" }],
    }).success).toBe(true);
  });

  it("A3-06 unknown schema rejected", () => {
    expect(
      parseVisualComposition({
        schemaVersion: "unknown-composition-v9",
        blocks: [{ kind: "text", id: "t", markdown: "x" }],
      }),
    ).toBeNull();
  });
});

describe("A4 — fixture/LIVE same gate (divergent replyDraft)", () => {
  it("A4-01: divergent replyDraft overwritten by canonical derive", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      replyDraft: "TEXTE DIVERGENT QUI NE DOIT PAS SURVIVRE",
      intents: [],
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [
          {
            kind: "text",
            id: "t1",
            markdown: "Prose canonique unique issue des sections.",
          },
        ],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.replyDraft).toBe("Prose canonique unique issue des sections.");
    expect(v.value.replyDraft).not.toContain("DIVERGENT");
    const auth = (v.value.visualComposition as { contentAuthority?: string } | undefined)
      ?.contentAuthority;
    expect(auth).toBe("canonical_sections");
  });

  it("A4-02: projection-v1 does not derive (Strategy B path)", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      replyDraft: "Autorité replyDraft Strategy B",
      intents: [],
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
        blocks: [{ kind: "text", id: "t1", markdown: "Projection secondaire" }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.replyDraft).toBe("Autorité replyDraft Strategy B");
    const auth = (v.value.visualComposition as { contentAuthority?: string } | undefined)
      ?.contentAuthority;
    expect(auth).toBe("legacy_projection");
  });
});
