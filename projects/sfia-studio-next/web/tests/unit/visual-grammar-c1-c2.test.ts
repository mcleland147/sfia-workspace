/**
 * C1 natural fallback language + C2 Strategy A bodyPolicy substitute.
 */
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
} from "@/domains/conversation/visual-composition";

const TECHNICAL_MARKERS = [
  "relation=",
  "layoutHint",
  "condition_true",
  "condition_false",
  "parallelProcess",
  "decisionTree",
  "depends_on",
  "Disposition:",
];

describe("C1 — natural French fallback", () => {
  it("relations fallback has no wire codes", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Graphe",
          layoutHint: "decisionTree",
          nodes: [
            { id: "c", label: "Condition", kind: "unknown", detail: "détail" },
            { id: "y", label: "Oui", kind: "hypothesis", laneId: "voie-oui" },
            { id: "n", label: "Non", kind: "finding" },
          ],
          edges: [
            { from: "c", to: "y", relation: "condition_true", label: "ok" },
            { from: "c", to: "n", relation: "condition_false", label: "ko" },
          ],
          textAlternative: "alt",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    for (const m of TECHNICAL_MARKERS) {
      expect(fb, `must not contain ${m}`).not.toContain(m);
    }
    expect(fb).toContain("Arbre conditionnel");
    expect(fb).toContain("(hypothèse)");
    expect(fb).toContain("Si oui");
    expect(fb).toContain("voie « voie-oui »");
  });
});

describe("C2 — Strategy A display policy", () => {
  it("canonical graphic → substitute (no dual prose)", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t", markdown: "Intro." },
        {
          kind: "comparison",
          id: "c",
          title: "Opts",
          alternatives: [
            { id: "a", title: "A", summary: "sa" },
            { id: "b", title: "B", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Intro. A sa B sb",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    expect(adm.fallbackReasons).toContain("CV_BODY_CANONICAL_GRAPHIC_SUBSTITUTE");
  });

  it("legacy graphic → complement when fidelity ok", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [
        {
          kind: "comparison",
          id: "c",
          title: "Opts",
          alternatives: [
            { id: "a", title: "Alpha", summary: "latence basse", pros: ["rapide"], cons: ["x"] },
            { id: "b", title: "Beta", summary: "latence haute", pros: ["y"], cons: ["lent"] },
          ],
          textAlternative: "Alpha vs Beta",
        },
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Option Alpha latence basse rapide Option Beta latence haute lent",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("complement");
  });
});
