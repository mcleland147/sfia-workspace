import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  mayPresentGraphicComposition,
  maySubstituteNarrative,
  validateDecisionTree,
  validateDependencies,
  validateParallelProcess,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
  VisualCompositionAgentOutputSchema,
} from "@/domains/conversation/visual-composition";

const comparisonRaw = {
  schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
  blocks: [
    {
      kind: "comparison",
      id: "cmp",
      title: "A vs B",
      alternatives: [
        {
          id: "a",
          title: "Option Alpha",
          summary: "latence basse",
          pros: ["rapide"],
          cons: ["couteux"],
        },
        {
          id: "b",
          title: "Option Beta",
          summary: "latence haute",
          pros: ["econome"],
          cons: ["lent"],
        },
      ],
      recommendation: "Preferer Option Alpha si latence critique.",
      textAlternative: "Alpha vs Beta",
    },
  ],
};

const faithfulCanon = [
  "Comparaison Option Alpha (latence basse, rapide, couteux)",
  "et Option Beta (latence haute, econome, lent).",
  "Preferer Option Alpha si latence critique.",
].join(" ");

describe("F1 canonical fidelity — adversarial", () => {
  it("F1-01 refuses opposite recommendation (titles alone insufficient)", () => {
    const opposite = {
      ...comparisonRaw,
      blocks: [
        {
          ...comparisonRaw.blocks[0],
          recommendation: "Preferer Option Beta pour le budget.",
        },
      ],
    };
    const comp = parseVisualComposition(opposite)!;
    // Canon prefers Alpha; projection recommends Beta
    const canon = [
      "Option Alpha latence basse rapide couteux.",
      "Option Beta latence haute econome lent.",
      "Preferer Option Alpha si latence critique.",
      "Preferer Option Beta pour le budget.", // claim support — but preference contradiction
    ].join(" ");
    // Without Beta preference phrase matching Alpha preference detector:
    // Use canon that supports all claims of opposite rec but prefers Alpha explicitly
    const canonPreferAlpha = [
      "Option Alpha latence basse rapide couteux.",
      "Option Beta latence haute econome lent.",
      "Preferer Option Beta pour le budget.",
      "Je recommande Option Alpha en priorite.",
    ].join(" ");
    const gate = mayPresentGraphicComposition(comp, canonPreferAlpha);
    // All substance claims present → preference detector may fire
    expect(gate.ok).toBe(false);
  });

  it("F1-02 refuses inverted pros/cons not supported by canonical", () => {
    const comp = parseVisualComposition(comparisonRaw)!;
    const titlesOnly =
      "Option Alpha et Option Beta sont comparees. Preferer Option Alpha si latence critique.";
    const gate = mayPresentGraphicComposition(comp, titlesOnly);
    expect(gate.ok).toBe(false);
    expect(gate.reasonCodes).toContain("CV_FIDELITY_CLAIM_MISSING_IN_CANONICAL");
  });

  it("F1-04 refuses unfounded numeric criteria (legacy dual-author)", () => {
    const withNums = {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [
        {
          kind: "comparison",
          id: "cmp",
          title: "Couts",
          alternatives: [
            { id: "a", title: "Plan A", summary: "economique" },
            { id: "b", title: "Plan B", summary: "premium" },
          ],
          criteria: [
            { id: "c", label: "Budget", values: { a: "12000 EUR", b: "45000 EUR" } },
          ],
          textAlternative: "A vs B",
        },
      ],
    };
    const comp = parseVisualComposition(withNums)!;
    expect(comp.contentAuthority).toBe("legacy_projection");
    const gate = mayPresentGraphicComposition(
      comp,
      "Plan A economique et Plan B premium. Budget qualitatif seulement.",
    );
    expect(gate.ok).toBe(false);
  });

  it("F1-06 refuses narrative substitute when text differs (legacy dual-author)", () => {
    const textOnly = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [{ kind: "text", id: "t1", markdown: "Texte invente divergent." }],
    })!;
    expect(textOnly.contentAuthority).toBe("legacy_projection");
    const narr = maySubstituteNarrative(textOnly, "Reponse canonique reelle.");
    expect(narr.ok).toBe(false);
    const adm = admitConversationalComposition(textOnly, {
      canonicalText: "Reponse canonique reelle.",
    });
    expect(adm.bodyPolicy).toBe("markdown_only");
  });

  it("F1-07 allows complement when all claims supported", () => {
    const comp = parseVisualComposition(comparisonRaw)!;
    const adm = admitConversationalComposition(comp, { canonicalText: faithfulCanon });
    expect(adm.bodyPolicy).toBe("complement");
    expect(adm.fallbackReasons).toContain("CV_BODY_GRAPHIC_COMPLEMENT_ONLY");
  });

  it("narrative-only may substitute when text ⊆ canonical", () => {
    const textOnly = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t1", markdown: "Reponse simple." }],
    })!;
    const adm = admitConversationalComposition(textOnly, {
      canonicalText: "Reponse simple.",
    });
    expect(adm.bodyPolicy).toBe("substitute");
  });

  it("legacy e05 schema still parses (F4 read)", () => {
    const legacy = parseVisualComposition(comparisonRaw);
    expect(legacy?.schemaVersion).toBe(VISUAL_COMPOSITION_SCHEMA_LEGACY);
  });

  it("active schema parses; agent write rejects legacy (F4)", () => {
    const modern = parseVisualComposition({
      ...comparisonRaw,
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    });
    expect(modern?.schemaVersion).toBe(VISUAL_COMPOSITION_SCHEMA);
    const writeLegacy = VisualCompositionAgentOutputSchema.safeParse(comparisonRaw);
    expect(writeLegacy.success).toBe(false);
    const writeModern = VisualCompositionAgentOutputSchema.safeParse({
      ...comparisonRaw,
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    });
    expect(writeModern.success).toBe(true);
  });
});

describe("F2 topology validation", () => {
  it("F2-01 refuses decisionTree with cycle → list", () => {
    const tree = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "Cycle",
          layoutHint: "decisionTree",
          nodes: [
            { id: "a", label: "Noeud A", kind: "unknown" },
            { id: "b", label: "Noeud B", kind: "unknown" },
          ],
          edges: [
            { from: "a", to: "b", relation: "flow" },
            { from: "b", to: "a", relation: "flow" },
          ],
          textAlternative: "cycle",
        },
      ],
    })!;
    expect(tree).toBeTruthy();
    const block = tree.blocks[0] as Extract<(typeof tree.blocks)[number], { kind: "relations" }>;
    expect(validateDecisionTree(block).ok).toBe(false);
    const adm = admitConversationalComposition(tree, {
      canonicalText: "Noeud A Noeud B",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("list");
    expect(adm.admitted[0]?.reasonCodes).toContain("CV_TOPOLOGY_TREE_CYCLE");
  });

  it("F2-02 refuses multi-root tree → list", () => {
    const tree = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "Foret",
          layoutHint: "decisionTree",
          nodes: [
            { id: "a", label: "Racine A", kind: "unknown" },
            { id: "b", label: "Racine B", kind: "unknown" },
            { id: "c", label: "Feuille", kind: "hypothesis" },
          ],
          edges: [{ from: "a", to: "c", relation: "flow" }],
          textAlternative: "foret",
        },
      ],
    })!;
    expect(tree).toBeTruthy();
    const block = tree.blocks[0] as Extract<(typeof tree.blocks)[number], { kind: "relations" }>;
    expect(validateDecisionTree(block).reasonCodes).toContain(
      "CV_TOPOLOGY_TREE_NOT_SINGLE_ROOT",
    );
    const adm = admitConversationalComposition(tree, {
      canonicalText: "Racine A Racine B Feuille",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("list");
  });

  it("F2-03 dependencies cycle → list", () => {
    const deps = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "d",
          title: "Deps",
          layoutHint: "dependencies",
          nodes: [
            { id: "x", label: "Etape X", kind: "observation" },
            { id: "y", label: "Etape Y", kind: "hypothesis" },
          ],
          edges: [
            { from: "x", to: "y", relation: "depends_on" },
            { from: "y", to: "x", relation: "depends_on" },
          ],
          textAlternative: "cycle deps",
        },
      ],
    })!;
    expect(deps).toBeTruthy();
    const block = deps.blocks[0] as Extract<(typeof deps.blocks)[number], { kind: "relations" }>;
    expect(validateDependencies(block).ok).toBe(false);
    const adm = admitConversationalComposition(deps, {
      canonicalText: "Etape X Etape Y",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("list");
  });

  it("F2-04 valid parallel → directed", () => {
    const par = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "p",
          title: "Parallele",
          layoutHint: "parallelProcess",
          nodes: [
            {
              id: "a1",
              label: "Inventaire site A",
              kind: "observation",
              laneId: "Voie A",
            },
            {
              id: "b1",
              label: "Inventaire site B",
              kind: "observation",
              laneId: "Voie B",
            },
          ],
          edges: [],
          textAlternative: "parallel",
        },
      ],
    })!;
    expect(par).toBeTruthy();
    const block = par.blocks[0] as Extract<(typeof par.blocks)[number], { kind: "relations" }>;
    expect(validateParallelProcess(block).ok).toBe(true);
    const adm = admitConversationalComposition(par, {
      canonicalText: "Inventaire site A Inventaire site B",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("directed");
    expect(adm.admitted[0]?.family).toBe("parallelProcess");
  });

  it("valid decisionTree → directed", () => {
    const tree = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "Arbre",
          layoutHint: "decisionTree",
          nodes: [
            { id: "c", label: "Condition roles clarifies", kind: "unknown" },
            { id: "y", label: "Approche progressive", kind: "hypothesis" },
            { id: "n", label: "Reporter le deploiement", kind: "hypothesis" },
          ],
          edges: [
            { from: "c", to: "y", relation: "condition_true", label: "oui" },
            { from: "c", to: "n", relation: "condition_false", label: "non" },
          ],
          textAlternative: "arbre",
        },
      ],
    })!;
    expect(tree).toBeTruthy();
    const adm = admitConversationalComposition(tree, {
      canonicalText:
        "Condition roles clarifies Approche progressive Reporter le deploiement oui non",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.family).toBe("decisionPaths");
    expect(adm.admitted[0]?.variant).toBe("directed");
  });
});
