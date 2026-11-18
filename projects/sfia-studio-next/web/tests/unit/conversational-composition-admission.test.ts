import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  CONVERSATIONAL_COMPOSITION_CONTRACT,
  projectionSubstanceRenderComplete,
  selectComparisonVariant,
  selectRelationsVariant,
  selectSequenceVariant,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  type VisualComposition,
} from "@/domains/conversation/visual-composition";

function comparisonFixture(nAlts: number, criteria = 0, long = false): VisualComposition {
  const alternatives = Array.from({ length: nAlts }, (_, i) => ({
    id: `a${i}`,
    title: long ? `Option ${i} ${"x".repeat(80)}` : `Option ${i}`,
    summary: long ? `${"long ".repeat(40)}summary ${i}` : `Summary ${i}`,
    pros: long ? [`Pro ${"y".repeat(60)}`] : [`Pro ${i}`],
    cons: [`Con ${i}`],
  }));
  const crit =
    criteria > 0
      ? Array.from({ length: criteria }, (_, i) => ({
          id: `c${i}`,
          label: `Critère ${i}`,
          values: Object.fromEntries(alternatives.map((a) => [a.id, `v${i}`])),
        }))
      : undefined;
  return parseVisualComposition({
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "comparison",
        id: "cmp",
        title: "Comparaison",
        alternatives,
        criteria: crit,
        recommendation: "Si latence critique, préférer Option 0.",
        provenance: [{ label: "Note architecture", note: "hypothèse" }],
        textAlternative: alternatives.map((a) => `${a.title}: ${a.summary}`).join(" | "),
      },
    ],
  })!;
}

describe("conversational composition admission (CV-*)", () => {
  it("CV-T01 — narrative-only / no composition → no graphic ownership", () => {
    const empty = admitConversationalComposition(null);
    expect(empty.contract).toBe(CONVERSATIONAL_COMPOSITION_CONTRACT);
    expect(empty.ownsBody).toBe(false);
    expect(empty.bodyPolicy).toBe("markdown_only");
    expect(empty.admitted).toHaveLength(0);
    expect(empty.fallbackReasons).toContain("CV_NO_COMPOSITION");

    const textOnly = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t1", markdown: "Réponse simple." }],
    })!;
    const adm = admitConversationalComposition(textOnly, {
      canonicalText: "Réponse simple.",
    });
    expect(adm.ownsBody).toBe(true);
    expect(adm.bodyPolicy).toBe("substitute");
    expect(adm.admitted).toHaveLength(1);
    expect(adm.admitted[0]?.family).toBe("narrative");
    expect(adm.fallbackReasons).toContain("CV_NARRATIVE_ONLY");
  });

  it("CV-T03/T04 — 2–3 options → cards; 5 options + criteria → matrix (wide)", () => {
    const three = comparisonFixture(3);
    const c3 = selectComparisonVariant(three.blocks[0] as never, 960);
    expect(c3.variant).toBe("cards");

    const five = comparisonFixture(5, 4);
    const c5 = selectComparisonVariant(five.blocks[0] as never, 960);
    expect(c5.variant).toBe("matrix");
    expect(c5.reasonCodes.some((r) => r.includes("MATRIX"))).toBe(true);

    const block = five.blocks[0];
    const parts: string[] = ["Comparaison"];
    if (block && block.kind === "comparison") {
      for (const a of block.alternatives) {
        parts.push(a.title, a.summary, ...(a.pros ?? []), ...(a.cons ?? []));
      }
      if (block.criteria) {
        for (const c of block.criteria) {
          parts.push(c.label, ...Object.values(c.values));
        }
      }
      if (block.recommendation) parts.push(block.recommendation);
    }
    const adm = admitConversationalComposition(five, {
      containerWidthPx: 960,
      canonicalText: parts.join(" "),
    });
    expect(adm.bodyPolicy).toBe("substitute");
    expect(projectionSubstanceRenderComplete(five)).toBe(true);
  });

  it("CV-T05 — wire path 8 options: parser accepts (MAX_ALTS=12); 18 still rejects", () => {
    const eight = {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "cmp",
          title: "Huit options",
          alternatives: Array.from({ length: 8 }, (_, i) => ({
            id: `a${i}`,
            title: `Option ${i}`,
            summary: `Summary ${i}`,
            pros: [`Pro ${i}`],
            cons: [`Con ${i}`],
          })),
          textAlternative: "huit options",
        },
      ],
    };
    const parsed8 = parseVisualComposition(eight);
    expect(parsed8).not.toBeNull();
    expect(parsed8!.blocks[0]).toMatchObject({ kind: "comparison" });

    const eighteen = {
      ...eight,
      blocks: [
        {
          ...eight.blocks[0],
          alternatives: Array.from({ length: 18 }, (_, i) => ({
            id: `a${i}`,
            title: `Option ${i}`,
            summary: `Summary ${i}`,
          })),
          textAlternative: "dix-huit options",
        },
      ],
    };
    expect(parseVisualComposition(eighteen)).toBeNull();

    const withinWire = admitConversationalComposition(comparisonFixture(5, 1), {
      canonicalText: "Option 0 Option 1 Option 2 Option 3 Option 4",
    });
    expect(withinWire.capacityNotes).toContain("CV_WIRE_MAX_ALTS_12");
  });

  it("CV-T05 — long copy / narrow → stacked; over-capacity defensive → text", () => {
    const many = comparisonFixture(5, 0, true);
    const narrow = selectComparisonVariant(many.blocks[0] as never, 480);
    expect(["stacked", "text", "matrix"]).toContain(narrow.variant);
    expect(narrow.variant).not.toBe("cards");

    const overBlock = {
      kind: "comparison" as const,
      id: "cmp",
      title: "Over",
      alternatives: Array.from({ length: 20 }, (_, i) => ({
        id: `a${i}`,
        title: `O${i}`,
        summary: `s${i}`,
      })),
      textAlternative: "trop d'options",
    };
    const o = selectComparisonVariant(overBlock, 1200);
    expect(o.variant).toBe("text");
  });

  it("CV-T06 — sequence narrow → vertical", () => {
    const seq = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s1",
          title: "Parcours",
          steps: Array.from({ length: 5 }, (_, i) => ({
            id: `st${i}`,
            title: `Étape ${i}`,
            detail: "détail",
          })),
          textAlternative: "Cinq étapes",
        },
      ],
    })!;
    const v = selectSequenceVariant(seq.blocks[0] as never, 500);
    expect(v.variant).toBe("vertical");
  });

  it("CV-T10 — dense relations → structured list (never svg)", () => {
    const dense = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r1",
          title: "Dépendances",
          nodes: Array.from({ length: 11 }, (_, i) => ({
            id: `n${i}`,
            label: `Nœud ${i} with a very long human label that must remain readable`,
            kind: "observation",
          })),
          edges: Array.from({ length: 15 }, (_, i) => ({
            from: `n${i % 11}`,
            to: `n${(i + 1) % 11}`,
            label: "lié",
          })),
          textAlternative: "Graphe dense",
        },
      ],
    })!;
    expect(dense).not.toBeNull();
    const sel = selectRelationsVariant(dense!.blocks[0] as never, 900);
    expect(sel.variant).toBe("list");
  });

  it("C-10 directed dependencies when layoutHint set and envelope OK", () => {
    const dep = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r1",
          title: "Deps",
          layoutHint: "dependencies",
          nodes: [
            { id: "a", label: "Amont", kind: "observation" },
            { id: "b", label: "Aval", kind: "hypothesis" },
            { id: "c", label: "Convergence", kind: "finding" },
          ],
          edges: [
            { from: "a", to: "c", relation: "depends_on", label: "alimente" },
            { from: "b", to: "c", relation: "depends_on", label: "alimente" },
          ],
          textAlternative: "A et B convergent vers C",
        },
      ],
    })!;
    const sel = selectRelationsVariant(dep.blocks[0] as never, 900);
    expect(sel.variant).toBe("directed");
    const adm = admitConversationalComposition(dep, {
      canonicalText: "Amont Aval Convergence alimente",
    });
    expect(adm.admitted[0]?.family).toBe("dependencies");
    expect(adm.bodyPolicy).toBe("substitute");
  });

  it("CV-T14 — admission never invents quantitative chart family", () => {
    const adm = admitConversationalComposition(comparisonFixture(3), {
      canonicalText: "Option 0 Option 1 Option 2",
    });
    expect(adm.admitted.every((a) => a.family !== ("chart" as never))).toBe(true);
  });

  it("Defect C — exhaustive fallback never truncates long text", () => {
    const longMd = "A".repeat(2500);
    const block = { kind: "text" as const, id: "t1", markdown: longMd };
    const fb = buildExhaustiveBlockFallback(block);
    expect(fb.length).toBe(2500);
    expect(fb).toBe(longMd);
  });

  it("Defect A — matrix fixture preserves all alt substance in exhaustive fallback", () => {
    const five = comparisonFixture(5, 3);
    const block = five.blocks[0]!;
    const fb = buildExhaustiveBlockFallback(block);
    expect(fb).toContain("Option 0");
    expect(fb).toContain("Summary 0");
    expect(fb).toContain("Pro 0");
    expect(fb).toContain("Con 0");
    expect(fb).toContain("Critère 0");
    expect(fb).toContain("Recommandation");
  });

  it("admit preserves block order and reason codes", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t1", markdown: "Intro" },
        {
          kind: "comparison",
          id: "c1",
          title: "Opts",
          alternatives: [
            { id: "a", title: "A", summary: "sa" },
            { id: "b", title: "B", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
        { kind: "choices", id: "ch" },
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      containerWidthPx: 800,
      canonicalText: "Intro A sa B sb",
    });
    expect(adm.admitted.map((a) => a.block.kind)).toEqual([
      "text",
      "comparison",
      "choices",
    ]);
    expect(adm.admitted[1]?.reasonCodes.length).toBeGreaterThan(0);
    expect(adm.bodyPolicy).toBe("substitute");
  });
});
