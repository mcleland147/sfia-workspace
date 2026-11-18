import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  deriveReplyDraftFromCanonicalSections,
  mayPresentGraphicComposition,
  validateDecisionTree,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
} from "@/domains/conversation/visual-composition";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";

describe("Strategy A — canonical semantic sections (C-01–C-04)", () => {
  it("SC-derive: projection-v1 sets contentAuthority and derives replyDraft on validate", () => {
    const raw = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      replyDraft: "TEXTE INDEPENDANT QUI DIVERGE",
      intents: [],
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [
          {
            kind: "text",
            id: "t1",
            markdown: "Prose naturelle : Option Alpha reste préférable si latence critique.",
          },
          {
            kind: "comparison",
            id: "c1",
            title: "Alpha vs Beta",
            alternatives: [
              { id: "a", title: "Option Alpha", summary: "latence basse" },
              { id: "b", title: "Option Beta", summary: "latence haute" },
            ],
            textAlternative: "Alpha vs Beta",
          },
        ],
      },
    };
    const v = validateNoraTurnQualification(raw);
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(
      (v.value.visualComposition as { contentAuthority?: string } | undefined)
        ?.contentAuthority,
    ).toBe("canonical_sections");
    expect(v.value.replyDraft).toContain("Prose naturelle");
    expect(v.value.replyDraft).toContain("Option Alpha");
    expect(v.value.replyDraft).not.toContain("TEXTE INDEPENDANT QUI DIVERGE");
  });

  it("SC-identity: graphics admitted without lexical claim matching when canonical", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c1",
          title: "A vs B",
          alternatives: [
            { id: "a", title: "Alpha", summary: "sa" },
            { id: "b", title: "Beta", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
      ],
    })!;
    expect(comp.contentAuthority).toBe("canonical_sections");
    const gate = mayPresentGraphicComposition(comp, "texte sans les titres");
    expect(gate.ok).toBe(true);
    expect(gate.reasonCodes).toContain("CV_FIDELITY_IDENTITY_CANONICAL_SECTIONS");
    const adm = admitConversationalComposition(comp, {
      canonicalText: "texte sans les titres",
      containerWidthPx: 900,
    });
    // C2 — Strategy A graphic: substitute (no dual prose + visual)
    expect(adm.bodyPolicy).toBe("substitute");
  });

  it("SC-legacy: e05 still requires claim support (Strategy B path)", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [
        {
          kind: "comparison",
          id: "c1",
          title: "A vs B",
          alternatives: [
            { id: "a", title: "Alpha", summary: "sa" },
            { id: "b", title: "Beta", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
      ],
    })!;
    expect(comp.contentAuthority).toBe("legacy_projection");
    const gate = mayPresentGraphicComposition(comp, "texte sans options");
    expect(gate.ok).toBe(false);
  });

  it("SC-10: derived text is exhaustive for structured blocks", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c1",
          title: "Choix",
          alternatives: [
            { id: "a", title: "Plan A", summary: "économe", pros: ["rapide"], cons: ["limité"] },
            { id: "b", title: "Plan B", summary: "complet", pros: ["riche"], cons: ["lourd"] },
          ],
          recommendation: "Préférer Plan A si budget serré.",
          textAlternative: "A vs B",
        },
      ],
    })!;
    const draft = deriveReplyDraftFromCanonicalSections(comp);
    expect(draft.ok).toBe(true);
    if (!draft.ok) return;
    expect(draft.text).toContain("Plan A");
    expect(draft.text).toContain("économe");
    expect(draft.text).toContain("rapide");
    expect(draft.text).toContain("Préférer Plan A");
  });
});

describe("Topology — true tree vs DAG (C-11)", () => {
  it("SC-20: shared child refuses decisionTree directed", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "DAG pas arbre",
          layoutHint: "decisionTree",
          nodes: [
            { id: "a", label: "Racine A", kind: "unknown" },
            { id: "b", label: "Racine B", kind: "unknown" },
            { id: "c", label: "Enfant partage", kind: "hypothesis" },
          ],
          edges: [
            { from: "a", to: "c", relation: "flow" },
            { from: "b", to: "c", relation: "flow" },
          ],
          textAlternative: "shared",
        },
      ],
    })!;
    const block = comp.blocks[0] as Extract<(typeof comp.blocks)[number], { kind: "relations" }>;
    // two roots → NOT_SINGLE_ROOT; if we force one root with shared child:
    const singleRootShared = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t2",
          title: "Enfant partage",
          layoutHint: "decisionTree",
          nodes: [
            { id: "r", label: "Racine", kind: "unknown" },
            { id: "x", label: "Branche X", kind: "hypothesis" },
            { id: "y", label: "Branche Y", kind: "hypothesis" },
            { id: "z", label: "Enfant partage", kind: "finding" },
          ],
          edges: [
            { from: "r", to: "x", relation: "condition_true" },
            { from: "r", to: "y", relation: "condition_false" },
            { from: "x", to: "z", relation: "flow" },
            { from: "y", to: "z", relation: "flow" },
          ],
          textAlternative: "diamond",
        },
      ],
    })!;
    const diamond = singleRootShared.blocks[0] as Extract<
      (typeof singleRootShared.blocks)[number],
      { kind: "relations" }
    >;
    expect(validateDecisionTree(block).ok).toBe(false);
    expect(validateDecisionTree(diamond).reasonCodes).toContain("CV_TOPOLOGY_TREE_SHARED_CHILD");
    const adm = admitConversationalComposition(singleRootShared, {
      canonicalText: "x",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("list");
  });
});
