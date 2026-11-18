/**
 * C2 — exhaustivité visible sous bodyPolicy=substitute.
 * Oracles C2-01…C2-10 : substance consultable, pas de dual prose intégrale,
 * pas de preuve sr-only seule.
 */
import { describe, expect, it } from "vitest";
import React, { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  visibleTextAlternativeComplement,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
} from "@/domains/conversation/visual-composition";

// Classic JSX runtime (Vitest/esbuild) expects a global React binding.
(globalThis as typeof globalThis & { React: typeof React }).React = React;

const RESERVE =
  "Réserve : l'arbitrage des responsabilités n'est pas encore décidé — ne pas conclure.";

async function renderComposition(
  composition: NonNullable<ReturnType<typeof parseVisualComposition>>,
  canonicalText: string,
): Promise<string> {
  const { NoraComposition } = await import("@/components/figma/NoraComposition");
  return renderToStaticMarkup(
    createElement(NoraComposition, { composition, canonicalText }),
  );
}

function comparisonWithReserve() {
  return parseVisualComposition({
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "comparison",
        id: "c",
        title: "Options de déploiement",
        alternatives: [
          {
            id: "a",
            title: "Progressif",
            summary: "vagues courtes",
            pros: ["réversible"],
            cons: ["plus long"],
          },
          {
            id: "b",
            title: "Simultané",
            summary: "bascule unique",
            pros: ["rapide"],
            cons: ["risqué"],
          },
        ],
        criteria: [
          { id: "lat", label: "Latence", values: { a: "basse", b: "haute" } },
          { id: "ris", label: "Risque", values: { a: "limité", b: "élevé" } },
          { id: "cout", label: "Coût", values: { a: "étalé", b: "concentré" } },
        ],
        recommendation: "Préférer le progressif si l'arbitrage est flou.",
        textAlternative: `Progressif vagues courtes. Simultané bascule unique.\n${RESERVE}`,
      },
    ],
  })!;
}

describe("C2 substance exhaustiveness", () => {
  it("C2-01 — no composition → policy markdown_only (texte libre inchangé)", () => {
    const adm = admitConversationalComposition(null, { canonicalText: "Bonjour." });
    expect(adm.bodyPolicy).toBe("markdown_only");
    expect(adm.admitted).toHaveLength(0);
  });

  it("C2-02 — composition canonique simple : chaque info consultable", async () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "Synthèse courte du projet." }],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Synthèse courte du projet.",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    const html = await renderComposition(comp, "Synthèse courte du projet.");
    expect(html).toContain("Synthèse courte du projet.");
    expect(html).not.toContain("nora-composition-substance-complement");
  });

  it("C2-03 — comparaison graphique : critères + réserve complémentaire accessibles", async () => {
    const comp = comparisonWithReserve();
    const adm = admitConversationalComposition(comp, {
      canonicalText: buildExhaustiveBlockFallback(comp.blocks[0]!),
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    expect(visibleTextAlternativeComplement(comp.blocks[0]!)).toContain(RESERVE);

    const html = await renderComposition(
      comp,
      buildExhaustiveBlockFallback(comp.blocks[0]!),
    );
    expect(html).toContain("Progressif");
    expect(html).toContain("Simultané");
    expect(html).toContain("Latence");
    expect(html).toContain("Risque");
    expect(html).toContain("Coût");
    expect(html).toContain('data-testid="nora-composition-substance-complement"');
    // Apostrophe may be HTML-escaped in SSR markup.
    expect(html).toMatch(/Réserve\s*:\s*l(?:'|&#x27;|&#39;)arbitrage des responsabilités/);
    expect(html).toContain("fig-comp-substance-complement");
    expect(html).not.toMatch(/sr-only[^>]*>[^<]*Réserve/);
  });

  it("C2-04 — textAlternative préfixe redondant + suffixe substantiel", () => {
    const block = comparisonWithReserve().blocks[0]!;
    const complement = visibleTextAlternativeComplement(block);
    // Exact-identity only: paraphrase lines may remain (fail-open) but reserve MUST stay.
    expect(complement).toContain(RESERVE);
    // When the first line is an exact structured field, it is dropped:
    const exactPrefix = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c2",
          title: "Options de déploiement",
          alternatives: [
            { id: "a", title: "Progressif", summary: "vagues courtes" },
            { id: "b", title: "Simultané", summary: "bascule unique" },
          ],
          textAlternative: `Progressif: vagues courtes\n${RESERVE}`,
        },
      ],
    })!.blocks[0]!;
    const exactComplement = visibleTextAlternativeComplement(exactPrefix);
    expect(exactComplement).toBe(RESERVE);
  });

  it("C2-05 — séquence : condition absente du libellé court n'est pas perdue", async () => {
    const condition =
      "Condition : ne démarrer la vague 2 que si le support est mobilisable.";
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s",
          title: "Trajectoire",
          steps: [
            { id: "s1", title: "Cadrage", detail: "périmètre" },
            { id: "s2", title: "Vague 1", detail: "pilote" },
            { id: "s3", title: "Vague 2", detail: "extension" },
          ],
          textAlternative: `Cadrage. Vague 1. Vague 2.\n${condition}`,
        },
      ],
    })!;
    expect(visibleTextAlternativeComplement(comp.blocks[0]!)).toContain(condition);
    const html = await renderComposition(comp, "x");
    expect(html).toContain(condition);
    expect(html).toContain("nora-composition-substance-complement");
  });

  it("C2-06 — relations : qualifications/limites lisibles", async () => {
    const limit = "Limite : les liens représentent des conditions, pas un état prouvé.";
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Dépendances",
          layoutHint: "dependencies",
          nodes: [
            { id: "a", label: "Pratiques locales", kind: "observation" },
            { id: "b", label: "Friction", kind: "finding" },
          ],
          edges: [{ from: "a", to: "b", relation: "depends_on" }],
          textAlternative: `Pratiques locales → Friction.\n${limit}`,
        },
      ],
    })!;
    expect(visibleTextAlternativeComplement(comp.blocks[0]!)).toContain(limit);
    const html = await renderComposition(comp, "x");
    expect(html).toContain(limit);
  });

  it("C2-07 — synthèse : complément ne disparaît pas", async () => {
    const note = "Hypothèse non prouvée : le pic de charge reste à confirmer.";
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "synthesis",
          id: "sy",
          title: "À surveiller",
          items: [
            { id: "i1", label: "Coordination", detail: "rôles flous", tone: "risk" },
            { id: "i2", label: "Support", detail: "capacité locale", tone: "observation" },
          ],
          textAlternative: `Coordination. Support.\n${note}`,
        },
      ],
    })!;
    expect(visibleTextAlternativeComplement(comp.blocks[0]!)).toContain(note);
    const html = await renderComposition(comp, "x");
    expect(html).toContain(note);
    expect(html).not.toMatch(/class="sr-only"[^>]*>[^<]*Hypothèse non prouvée/);
  });

  it("C2-08 — erreur composant : fallback exhaustif via boundary text", () => {
    const comp = comparisonWithReserve();
    const fallback = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fallback).toContain(RESERVE);
    expect(fallback).toContain("Progressif");
  });

  it("C2-09 — legacy : complement policy conservée (pas substitute forcé)", () => {
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

  it("C2-10 — rendu composite : pas de duplication intégrale automatique du replyDraft", async () => {
    const draft =
      "Intro narrative unique. Progressif vagues courtes. Simultané bascule unique. " + RESERVE;
    const comparison = comparisonWithReserve().blocks[0]!;
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t", markdown: "Intro narrative unique." },
        comparison,
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: draft,
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    const html = await renderComposition(comp, draft);
    const occurrences = html.split(draft).length - 1;
    expect(occurrences).toBe(0);
    expect(html).toMatch(/Réserve\s*:\s*l(?:'|&#x27;|&#39;)arbitrage des responsabilités/);
    expect(html).toContain("Intro narrative unique.");
  });
});
