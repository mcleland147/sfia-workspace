/**
 * Discriminant selection scenarios — Ensemble 05 consolidation.
 * Oracles check form relevance, not mere component presence.
 * Proof level: UNIT / ADAPTER FAKE (no LIVE).
 */
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  comparisonAlternativesExploitable,
  normalizeRelationsLayoutHint,
  selectComparisonVariant,
  selectRelationsVariant,
  selectSequenceVariant,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  type VisualComposition,
} from "@/domains/conversation/visual-composition";

function cmp(opts: {
  n: number;
  criteria?: number;
  incomplete?: boolean;
  raggedCriteria?: boolean;
}): VisualComposition {
  const alternatives = Array.from({ length: opts.n }, (_, i) => ({
    id: `a${i}`,
    title: opts.incomplete && i === opts.n - 1 ? `Option ${i}` : `Option ${i}`,
    summary:
      opts.incomplete && i === opts.n - 1
        ? ""
        : `Résumé distinct de l'option ${i}`,
    pros: opts.incomplete && i === opts.n - 1 ? [] : [`Avantage ${i}`],
    cons: opts.incomplete && i === opts.n - 1 ? [] : [`Limite ${i}`],
  }));
  const criteria =
    (opts.criteria ?? 0) > 0
      ? Array.from({ length: opts.criteria! }, (_, i) => ({
          id: `c${i}`,
          label: `Critère ${i}`,
          values: Object.fromEntries(
            alternatives.map((a, ai) => [
              a.id,
              opts.raggedCriteria && ai === alternatives.length - 1 ? "" : `v${i}-${ai}`,
            ]),
          ),
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
        criteria,
        recommendation: "Recommandation conditionnelle — pas une décision.",
        textAlternative: alternatives.map((a) => a.title).join(" / "),
      },
    ],
  })!;
}

function rel(opts: {
  hint?: "dependencies" | "decisionTree" | "parallelProcess";
  lanes?: boolean;
  sync?: boolean;
  tree?: boolean;
}): VisualComposition {
  if (opts.tree) {
    return parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "tree",
          title: "Arbre",
          layoutHint: "decisionTree",
          nodes: [
            { id: "r", label: "Support saturé ?", kind: "unknown" },
            { id: "y", label: "Oui", kind: "hypothesis" },
            { id: "n", label: "Non", kind: "hypothesis" },
            { id: "y2", label: "Rythme progressif", kind: "finding" },
            { id: "n2", label: "Pilote", kind: "finding" },
          ],
          edges: [
            { from: "r", to: "y", relation: "condition_true" },
            { from: "r", to: "n", relation: "condition_false" },
            { from: "y", to: "y2", relation: "flow" },
            { from: "n", to: "n2", relation: "flow" },
          ],
          textAlternative: "Arbre conditionnel.",
        },
      ],
    })!;
  }
  const nodes = opts.lanes
    ? [
        { id: "a1", label: "Accès 1", kind: "observation" as const, laneId: "acces" },
        { id: "a2", label: "Accès 2", kind: "finding" as const, laneId: "acces" },
        { id: "d1", label: "Données 1", kind: "observation" as const, laneId: "donnees" },
        { id: "d2", label: "Données 2", kind: "finding" as const, laneId: "donnees" },
        { id: "c1", label: "Accomp. 1", kind: "observation" as const, laneId: "accomp" },
        { id: "c2", label: "Accomp. 2", kind: "finding" as const, laneId: "accomp" },
        { id: "sync", label: "Contrôle commun", kind: "finding" as const },
      ]
    : [
        { id: "a1", label: "Accès réseau", kind: "observation" as const },
        { id: "a2", label: "Comptes", kind: "finding" as const },
        { id: "b1", label: "Données", kind: "observation" as const },
        { id: "b2", label: "Qualité", kind: "finding" as const },
        { id: "c1", label: "Support", kind: "observation" as const },
        { id: "c2", label: "Comms", kind: "finding" as const },
        { id: "gate", label: "Prérequis", kind: "finding" as const },
        { id: "go", label: "Mise en service", kind: "hypothesis" as const },
      ];
  const edges = opts.lanes
    ? [
        { from: "a1", to: "a2", relation: "flow" as const },
        { from: "d1", to: "d2", relation: "flow" as const },
        { from: "c1", to: "c2", relation: "flow" as const },
        ...(opts.sync
          ? [
              { from: "a2", to: "sync", relation: "sync" as const },
              { from: "d2", to: "sync", relation: "sync" as const },
              { from: "c2", to: "sync", relation: "sync" as const },
            ]
          : [
              { from: "a2", to: "sync", relation: "flow" as const },
              { from: "d2", to: "sync", relation: "flow" as const },
              { from: "c2", to: "sync", relation: "flow" as const },
            ]),
      ]
    : [
        { from: "a1", to: "a2", relation: "depends_on" as const },
        { from: "a2", to: "gate", relation: "depends_on" as const },
        { from: "b1", to: "b2", relation: "depends_on" as const },
        { from: "b2", to: "gate", relation: "depends_on" as const },
        { from: "c1", to: "c2", relation: "depends_on" as const },
        { from: "c2", to: "gate", relation: "depends_on" as const },
        { from: "gate", to: "go", relation: "depends_on" as const },
      ];
  return parseVisualComposition({
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "relations",
        id: "rel",
        title: "Relations",
        layoutHint: opts.hint,
        nodes,
        edges,
        textAlternative: "Relations structurées.",
      },
    ],
  })!;
}

describe("composition selection discriminants (Ensemble 05 consolidation)", () => {
  it("three structured independent options → cards (wide)", () => {
    const c = selectComparisonVariant(cmp({ n: 3 }).blocks[0] as never, 960);
    expect(c.variant).toBe("cards");
  });

  it("three incomplete options → text (no invented limits)", () => {
    const base = cmp({ n: 3 })!.blocks[0] as Extract<
      VisualComposition["blocks"][number],
      { kind: "comparison" }
    >;
    const block = {
      ...base,
      alternatives: base.alternatives.map((a) => ({
        ...a,
        summary: "",
        pros: [] as string[],
        cons: [] as string[],
      })),
    };
    const substance = comparisonAlternativesExploitable(block);
    expect(substance.ok).toBe(false);
    const c = selectComparisonVariant(block, 960);
    expect(c.variant).toBe("text");
  });

  it("five options with homogeneous criteria → matrix", () => {
    const c = selectComparisonVariant(cmp({ n: 5, criteria: 3 })!.blocks[0] as never, 1040);
    expect(c.variant).toBe("matrix");
  });

  it("five options with ragged criteria → matrix by cardinality; criteria path skipped", () => {
    const base = cmp({ n: 5, criteria: 3 })!.blocks[0] as Extract<
      VisualComposition["blocks"][number],
      { kind: "comparison" }
    >;
    const lastId = base.alternatives[base.alternatives.length - 1]!.id;
    const block = {
      ...base,
      criteria: (base.criteria ?? []).map((c) => ({
        ...c,
        values: { ...c.values, [lastId]: "" },
      })),
    };
    const ragged = selectComparisonVariant(block, 1040);
    expect(ragged.variant).toBe("matrix");
    expect(ragged.reasonCodes).toContain("CV_COMPARISON_CRITERIA_INCOMPLETE");
    expect(ragged.reasonCodes).not.toContain("CV_COMPARISON_MATRIX_CRITERIA");
  });

  it("dense comparison in narrow Travail → stacked not cards", () => {
    const c = selectComparisonVariant(cmp({ n: 3 }).blocks[0] as never, 390);
    expect(["stacked", "text"]).toContain(c.variant);
  });

  it("convergent dependencies → directed + dependencies family", () => {
    const composition = rel({ hint: "dependencies" });
    const adm = admitConversationalComposition(composition, { containerWidthPx: 960 });
    const r = adm.admitted.find((a) => a.block.kind === "relations")!;
    expect(r.family).toBe("dependencies");
    expect(r.variant).toBe("directed");
  });

  it("parallel lanes + sync → parallelProcess family", () => {
    const composition = rel({ hint: "parallelProcess", lanes: true, sync: true });
    const adm = admitConversationalComposition(composition, { containerWidthPx: 960 });
    const r = adm.admitted.find((a) => a.block.kind === "relations")!;
    expect(r.family).toBe("parallelProcess");
    expect(r.variant).toBe("directed");
  });

  it("parallel hint without lanes → coerced to dependencies", () => {
    const n = normalizeRelationsLayoutHint(rel({ hint: "parallelProcess" }).blocks[0] as never);
    expect(n.block.layoutHint).toBe("dependencies");
    expect(n.reasonCodes).toContain("CV_HINT_PARALLEL_WITHOUT_LANES_TO_DEPS");
    const sel = selectRelationsVariant(n.block, 960);
    expect(sel.variant).toBe("directed");
  });

  it("LIVE L07-shaped hybrid (lanes + convergence, no sync) keeps parallel", () => {
    const composition = rel({ hint: "parallelProcess", lanes: true, sync: false });
    const adm = admitConversationalComposition(composition, { containerWidthPx: 1440 });
    const r = adm.admitted.find((a) => a.block.kind === "relations")!;
    expect(r.family).toBe("parallelProcess");
  });

  it("ambiguous relations without hint/lanes/edges → conservative list/text path", () => {
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "amb",
          title: "Ambigu",
          nodes: [
            { id: "a", label: "A", kind: "observation" },
            { id: "b", label: "B", kind: "observation" },
          ],
          edges: [],
          textAlternative: "A et B mentionnés sans relation.",
        },
      ],
    })!;
    expect(composition).toBeTruthy();
    const sel = selectRelationsVariant(composition!.blocks[0] as never, 960);
    expect(sel.variant).toBe("list");
  });

  it("conditional multinivel tree → decisionPaths directed", () => {
    const adm = admitConversationalComposition(rel({ tree: true }), { containerWidthPx: 960 });
    const r = adm.admitted.find((a) => a.block.kind === "relations")!;
    expect(r.family).toBe("decisionPaths");
    expect(r.variant).toBe("directed");
  });

  it("simple text → no graphic ownership forced", () => {
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "Explication simple." }],
    })!;
    const adm = admitConversationalComposition(composition, {
      canonicalText: "Explication simple.",
    });
    expect(adm.fallbackReasons).toContain("CV_NARRATIVE_ONLY");
    expect(adm.admitted.every((a) => a.family === "narrative")).toBe(true);
  });

  it("sequence without reliable dates stays sequence (not fake Gantt obligation)", () => {
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s",
          title: "Parcours",
          steps: [
            { id: "1", title: "Cadrer", detail: "Sans date" },
            { id: "2", title: "Préparer", detail: "Sans date" },
            { id: "3", title: "Déployer", detail: "Sans date" },
          ],
          textAlternative: "Trois étapes sans chronologie chiffrée.",
        },
      ],
    })!;
    const sel = selectSequenceVariant(composition.blocks[0] as never, 960);
    expect(["horizontal", "vertical"]).toContain(sel.variant);
  });

  it("cardinality sweep 2/3/5/8/12 — schema max 12; >18 → text at selector", () => {
    for (const n of [2, 3, 5, 8, 12]) {
      const parsed = cmp({ n });
      expect(parsed).toBeTruthy();
      const v = selectComparisonVariant(parsed!.blocks[0] as never, 1280);
      expect(["cards", "stacked", "matrix"]).toContain(v.variant);
    }
    const tooMany = {
      ...(cmp({ n: 3 }).blocks[0] as Extract<
        VisualComposition["blocks"][number],
        { kind: "comparison" }
      >),
      alternatives: Array.from({ length: 19 }, (_, i) => ({
        id: `x${i}`,
        title: `O${i}`,
        summary: `S${i}`,
      })),
    };
    expect(selectComparisonVariant(tooMany, 1280).variant).toBe("text");
  });

  it("LIVE replay L03-shaped comparison (REPLAY FAKE) → cards when structured", () => {
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "l03-replay",
          title: "Trois approches de déploiement multisite",
          lead: "Comparaison sur le rythme — pas l'architecture. Hypothèses de travail.",
          alternatives: [
            {
              id: "sim",
              title: "Déploiement simultané",
              summary: "Tous les sites basculent au même moment.",
              pros: ["Généralisation rapide", "Fonctionnement homogène"],
              cons: ["Défaut commun", "Pic support", "Retour arrière complexe"],
            },
            {
              id: "waves",
              title: "Déploiement par vagues",
              summary: "Groupes successifs avec bilan entre vagues.",
              pros: ["Risque limité par vague", "Corrections réutilisables"],
              cons: ["Coexistence", "Coordination répétée"],
            },
            {
              id: "pilot",
              title: "Pilote puis extension",
              summary: "Un site d'apprentissage avant généralisation.",
              pros: ["Apprentissage ciblé"],
              cons: ["Transfert d'apprentissage à sécuriser"],
            },
          ],
          recommendation:
            "Recommandation conditionnelle : si le support est saturé, éviter la bascule simultanée.",
          textAlternative:
            "Simultané / vagues / pilote — avantages et limites distincts ; aucune décision.",
        },
      ],
    })!;
    const adm = admitConversationalComposition(composition, { containerWidthPx: 1440 });
    const c = adm.admitted.find((a) => a.block.kind === "comparison")!;
    expect(c.variant).toBe("cards");
  });

  it("LIVE replay L04-shaped matrix (REPLAY FAKE) → matrix with Effort/Risque/Délai", () => {
    const ids = ["a", "b", "c", "d", "e"] as const;
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "l04-replay",
          title: "Cinq possibilités de déploiement",
          alternatives: ids.map((id, i) => ({
            id,
            title: `Possibilité ${i + 1}`,
            summary: `Principe ${i + 1}`,
          })),
          criteria: [
            {
              id: "effort",
              label: "Effort",
              values: Object.fromEntries(ids.map((id) => [id, "Relatif"])),
            },
            {
              id: "risque",
              label: "Risque",
              values: Object.fromEntries(ids.map((id) => [id, "Relatif"])),
            },
            {
              id: "delai",
              label: "Délai",
              values: Object.fromEntries(ids.map((id) => [id, "Relatif"])),
            },
          ],
          editorialNote: "Niveaux relatifs — pas des estimations de projet.",
          textAlternative: "Cinq possibilités · Effort / Risque / Délai.",
        },
      ],
    })!;
    const adm = admitConversationalComposition(composition, { containerWidthPx: 1440 });
    const c = adm.admitted.find((a) => a.block.kind === "comparison")!;
    expect(c.variant).toBe("matrix");
  });
});
