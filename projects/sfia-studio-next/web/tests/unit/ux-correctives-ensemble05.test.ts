import React, { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GraphNodeCard } from "@/components/figma/nora-composition/GraphNodeCard";
import { EditorialSequence } from "@/components/figma/nora-composition/EditorialSequence";
import { EditorialSynthesis } from "@/components/figma/nora-composition/EditorialSynthesis";
import { stripLeadingOrdinal } from "@/components/figma/nora-composition/editorial-title";
import { computeElkDirectedLayout } from "@/domains/conversation/directed-layout";
import type {
  ComparisonBlock,
  RelationsBlock,
  SequenceBlock,
  SynthesisBlock,
  VisualComposition,
} from "@/domains/conversation/visual-composition";

(globalThis as typeof globalThis & { React: typeof React }).React = React;

function composition(blocks: VisualComposition["blocks"]): VisualComposition {
  return {
    schemaVersion: "conversational-composition-canonical-v1",
    blocks,
    contentAuthority: "canonical_sections",
  };
}

describe("UX-03 stripLeadingOrdinal", () => {
  it("strips duplicated step prefixes", () => {
    expect(stripLeadingOrdinal("1. Cadrer les besoins")).toBe("Cadrer les besoins");
    expect(stripLeadingOrdinal("01 — 1. Cadrer les besoins")).toBe("Cadrer les besoins");
    expect(stripLeadingOrdinal("02. Préparer")).toBe("Préparer");
  });
  it("preserves métier digits mid-title", () => {
    expect(stripLeadingOrdinal("Fenêtre de 8 semaines")).toBe("Fenêtre de 8 semaines");
  });
});

describe("UX-01/02/03/07 renderer", () => {
  it("keeps text icon inline (no lone head stack)", async () => {
    const { NoraComposition } = await import("@/components/figma/NoraComposition");
    const html = renderToStaticMarkup(
      createElement(NoraComposition, {
        composition: composition([
          {
            kind: "text",
            id: "t1",
            markdown: "## Introduction\n\nCorps.",
            role: "hypothesis",
            icon: "hypothesis",
          },
        ]),
      }),
    );
    expect(html).toContain("fig-visual-text-with-icon");
    expect(html).not.toContain("fig-visual-text-head");
  });

  it("omits visible matrix caption (UX-02)", async () => {
    const { NoraComposition } = await import("@/components/figma/NoraComposition");
    const block: ComparisonBlock = {
      kind: "comparison",
      id: "c1",
      title: "Effort, délai et risque",
      alternatives: [
        { id: "a", title: "A", summary: "nature A" },
        { id: "b", title: "B", summary: "nature B" },
      ],
      criteria: [
        { id: "effort", label: "Effort", values: { a: "faible", b: "fort" } },
        { id: "delai", label: "Délai", values: { a: "court", b: "long" } },
        { id: "risque", label: "Risque", values: { a: "bas", b: "haut" } },
      ],
      textAlternative: "matrice",
    };
    const html = renderToStaticMarkup(
      createElement(NoraComposition, {
        composition: composition([block]),
        canonicalText: "Effort, délai et risque",
      }),
    );
    expect(html).toContain("nora-composition-matrix-five");
    expect(html).not.toMatch(/<caption[^>]*>\s*Matrice de comparaison/i);
  });

  it("uses a single step ordinal without section 01 (UX-03)", () => {
    const block: SequenceBlock = {
      kind: "sequence",
      id: "s1",
      title: "Parcours",
      steps: [
        { id: "st1", title: "1. Cadrer les besoins", detail: "ok" },
        { id: "st2", title: "Préparer", detail: "ok" },
      ],
      textAlternative: "seq",
    };
    const html = renderToStaticMarkup(
      createElement(EditorialSequence, { block, variant: "vertical" }),
    );
    expect(html).toContain("Cadrer les besoins");
    expect(html).not.toContain(">1. Cadrer");
    expect(html).not.toMatch(/fig-nc-section-num[^>]*>\s*01/);
  });
});

describe("UX-04 graph icons", () => {
  it("hides decorative observation icons on activity nodes", () => {
    const plain = renderToStaticMarkup(
      createElement(GraphNodeCard, {
        node: { id: "n1", label: "Infrastructure", kind: "observation" },
      }),
    );
    expect(plain).toContain('data-icon="0"');
    expect(plain).not.toContain("nora-visual-icon");

    const hypo = renderToStaticMarkup(
      createElement(GraphNodeCard, {
        node: { id: "n2", label: "Hypothèse", kind: "hypothesis" },
      }),
    );
    expect(hypo).toContain('data-icon="1"');
    expect(hypo).toContain("nora-visual-icon");
  });
});

describe("UX-05 parallel flow-only convergence", () => {
  it("places unlaned revue + lancement below three lanes without a fourth voie", async () => {
    const block: RelationsBlock = {
      kind: "relations",
      id: "uat07",
      title: "Processus parallèle",
      layoutHint: "parallelProcess",
      nodes: [
        { id: "infra", label: "Infrastructure", kind: "observation", laneId: "Infrastructure" },
        { id: "metier", label: "Métier", kind: "observation", laneId: "Métier" },
        {
          id: "accomp",
          label: "Accompagnement",
          kind: "observation",
          laneId: "Accompagnement",
        },
        { id: "revue", label: "Revue commune", kind: "finding" },
        { id: "lanc", label: "Lancement envisagé", kind: "hypothesis" },
      ],
      edges: [
        { from: "infra", to: "revue", relation: "flow" },
        { from: "metier", to: "revue", relation: "flow" },
        { from: "accomp", to: "revue", relation: "flow" },
        { from: "revue", to: "lanc", relation: "flow" },
      ],
      textAlternative: "trois équipes puis revue puis lancement",
    };
    const result = await computeElkDirectedLayout(block);
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;
    const infra = result.nodes.find((n) => n.id === "infra")!;
    const metier = result.nodes.find((n) => n.id === "metier")!;
    const accomp = result.nodes.find((n) => n.id === "accomp")!;
    const revue = result.nodes.find((n) => n.id === "revue")!;
    const lanc = result.nodes.find((n) => n.id === "lanc")!;
    expect(Math.abs(infra.x - metier.x)).toBeGreaterThan(80);
    expect(Math.abs(metier.x - accomp.x)).toBeGreaterThan(80);
    expect(revue.y).toBeGreaterThan(infra.y + 20);
    expect(lanc.y).toBeGreaterThan(revue.y);
    const width = Math.max(...result.nodes.map((n) => n.x + n.width));
    // Three readable swimlanes must fit the Travail column without a fourth voie strip.
    expect(width).toBeLessThan(780);
  });
});

describe("UX-06 residual icon semantics", () => {
  it("maps acquis/anomalie/decision pending distinctly", () => {
    const block: SynthesisBlock = {
      kind: "synthesis",
      id: "syn",
      title: "Synthèse",
      items: [
        { id: "i1", label: "Acquis", detail: "Confirmé", tone: "observation" },
        { id: "i2", label: "Anomalies", detail: "Écarts", tone: "observation" },
        { id: "i3", label: "Décision", detail: "Arbitrage attendu", tone: "observation" },
      ],
      textAlternative: "synth",
    };
    const html = renderToStaticMarkup(createElement(EditorialSynthesis, { block }));
    expect(html).toMatch(/data-role="fact"/);
    expect(html).toMatch(/data-role="risk"/);
    expect(html).toMatch(/data-role="recommendation"/);
  });
});
