import { describe, expect, it } from "vitest";
import React, { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { EditorialSynthesis } from "@/components/figma/nora-composition/EditorialSynthesis";
import { VISUAL_COMPOSITION_SCHEMA } from "@/domains/conversation/visual-composition";

(globalThis as typeof globalThis & { React: typeof React }).React = React;

describe("C2 editorial integrity correctives", () => {
  it("keeps distinct residual synthesis items even when strategyCards exist", () => {
    const block = {
      kind: "synthesis" as const,
      id: "s",
      title: "Titre",
      items: [
        {
          id: "x",
          label: "Nuance distincte",
          detail: "Cette réserve n'apparaît dans aucune carte stratégique.",
          tone: "priority" as const,
        },
      ],
      strategyCards: [
        {
          id: "b",
          eyebrow: "B",
          title: "Carte B",
          summary: "Autre contenu",
          positive: "Avantage",
          counterpart: "Contrepartie",
          accent: "blue" as const,
        },
      ],
      textAlternative: "alt",
    };
    const html = renderToStaticMarkup(createElement(EditorialSynthesis, { block }));
    expect(html).toContain("Nuance distincte");
    expect(html).toContain("Cette réserve n'apparaît dans aucune carte stratégique.");
  });

  it("does not suppress via substring includes (negation / exception / chiffre)", () => {
    const block = {
      kind: "synthesis" as const,
      id: "s",
      title: "Titre",
      items: [
        {
          id: "neg",
          label: "Charge",
          detail: "La charge n'est pas confirmée.",
          tone: "risk" as const,
        },
        {
          id: "num",
          label: "Délai",
          detail: "8 semaines",
          tone: "observation" as const,
        },
        {
          id: "exc",
          label: "Exception",
          detail: "Sauf pour le site pilote.",
          tone: "finding" as const,
        },
      ],
      strategyCards: [
        {
          id: "b",
          eyebrow: "B",
          title: "Charge support",
          summary: "La charge est confirmée sur cinq sites pendant huit semaines au total.",
          positive: "Maîtrise",
          counterpart: "Sauf urgence majeure",
          accent: "blue" as const,
        },
      ],
      textAlternative: "alt",
    };
    const html = renderToStaticMarkup(createElement(EditorialSynthesis, { block }));
    expect(html).toContain("n'est pas confirmée");
    expect(html).toContain("8 semaines");
    expect(html).toContain("Sauf pour le site pilote");
  });

  it("drops residual only on exact-identity duplication with checklist", () => {
    const block = {
      kind: "synthesis" as const,
      id: "s",
      title: "Titre",
      items: [
        {
          id: "dup",
          label: "Capacité support",
          detail: "Absorber les sollicitations.",
          tone: "watch" as const,
        },
      ],
      checklist: [
        { id: "k1", label: "Capacité support", detail: "Absorber les sollicitations." },
      ],
      textAlternative: "alt",
    };
    const html = renderToStaticMarkup(createElement(EditorialSynthesis, { block }));
    expect(html).toContain("Capacité support");
    expect(html).not.toMatch(/data-tone="watch"/);
  });

  it("renders all distinct cons on comparison cards", async () => {
    const { NoraComposition } = await import("@/components/figma/NoraComposition");
    const composition = {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      contentAuthority: "canonical_sections" as const,
      blocks: [
        {
          kind: "comparison" as const,
          id: "c",
          title: "Options",
          alternatives: [
            {
              id: "a",
              title: "A",
              summary: "Résumé",
              cons: ["Limite 1", "Limite 2", "Limite 3"],
            },
            {
              id: "b",
              title: "B",
              summary: "Résumé B",
              cons: ["Seule limite"],
            },
          ],
          textAlternative: "A et B",
        },
      ],
    };
    const html = renderToStaticMarkup(
      createElement(NoraComposition, { composition, canonicalText: "A et B" }),
    );
    expect(html).toContain("Limite 1");
    expect(html).toContain("Limite 2");
    expect(html).toContain("Limite 3");
    expect(html).toContain("Seule limite");
  });
});
