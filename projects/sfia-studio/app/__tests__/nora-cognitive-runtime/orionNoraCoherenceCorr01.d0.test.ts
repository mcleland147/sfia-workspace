/**
 * ORION-NORA-COHERENCE-CORR-01 — DET T01–T12 + ORION clarification case.
 * DETERMINISTIC only — ZERO OpenAI LIVE — ZERO campaign DB writes.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  NORA_ADAPTIVE_DIVERGENCE_NOTICE,
  NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE,
  buildDurableAssistantContentForTurn,
  classifyNarrativePresentationRelation,
  composeCanonicalFromPresentation,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
  stripCognitiveDispositionFooters,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import {
  framingContinuityPilotMessage,
  framingContinuityRecommendationReadyTitle,
  isFramingExploratoryCycleLabel,
} from "@/features/project-assistant/f2/chatFirstFramingContinuity";

function orionComparisonPresentation() {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: null,
    title: "Cadrage exploratoire ou Conception fonctionnelle ?",
    lead: null,
    blocks: [
      {
        kind: "plain",
        text: "Je clarifie d’abord l’écart : dans le contexte projet, la recommandation en vigueur est la Conception fonctionnelle.",
      },
      {
        kind: "comparison_table",
        title: "La différence pour ORION",
        columns: ["Étape", "Question principale", "Produit"],
        rows: [
          [
            "Cadrage exploratoire",
            "Quel problème traiter ?",
            "Compréhension partagée du besoin.",
          ],
          [
            "Conception fonctionnelle",
            "Comment le service doit-il se comporter ?",
            "Parcours et règles cohérents.",
          ],
        ],
      },
      {
        kind: "recommendation",
        title: "Ma recommandation pour ORION",
        statement:
          "Commencer par la Conception fonctionnelle, en prenant les demandes de matériel, les incidents informatiques et les demandes d’accès comme périmètre proposé.",
        disclaimer:
          "Proposition uniquement — aucune décision du Pilote enregistrée.",
      },
      {
        kind: "section",
        title: "Pourquoi ce choix",
        body: "Les trois catégories de demandes sont déjà assez explicités pour examiner les parcours. Aucune préparation ni aucun démarrage de cycle n’est engagé.",
      },
    ],
    provenanceNote: null,
    noGovernedActionNote: "Pas d'action gouvernée issue de ces blocs de présentation.",
  })!;
}

function simplePresentation(statement: string) {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: null,
    title: "Orientation",
    lead: null,
    blocks: [
      {
        kind: "recommendation",
        title: "Recommandation",
        statement,
        disclaimer: "Proposition uniquement.",
      },
    ],
    provenanceNote: null,
    noGovernedActionNote: null,
  })!;
}

describe("ORION-NORA-COHERENCE-CORR-01 — NAP T01–T04 / T09 / T12", () => {
  it("T01 — structured ≡ narrative → A1 unique", () => {
    const p = simplePresentation("Commencer par la Conception fonctionnelle.");
    const composed = composeCanonicalFromPresentation(p);
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: composed,
      presentation: p,
    });
    expect(built.relation).toBe("equivalent");
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toBe(composed);
  });

  it("T02 — structured complete, narrative empty → presentation_only A1", () => {
    const p = orionComparisonPresentation();
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: "",
      presentation: p,
    });
    expect(built.relation).toBe("presentation_only");
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
  });

  it("T03 — narrative complementary with guidance provenance → A1 complete", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: guidance,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.relation).toBe("complementary");
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toContain("La différence pour ORION");
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
  });

  it("T04 — real divergence → no arbitrary promotion", () => {
    const p = simplePresentation("Commencer par la Conception fonctionnelle.");
    const opposing =
      "Au contraire, je retiens uniquement le Cadrage exploratoire et j'abandonne la Conception fonctionnelle.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation: p,
      conversationGuidanceStatement: opposing,
    });
    expect(built.relation).toBe("divergent");
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("— Version structurée —");
    expect(built.contentCore).toContain("— Version narrative —");
    expect(built.presentation).toBeNull();
  });

  it("T09 — long comparative response preserved without truncation", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: guidance,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.contentCore.length).toBeGreaterThan(400);
    expect(built.contentCore).toContain("demandes de matériel");
    expect(built.contentCore).toContain("incidents informatiques");
  });

  it("T12 — contradiction diagnosed: proof kept, UX non-technical", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const contaminated = `${guidance}\n\n[CONTRADICTION CANDIDATE] Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.`;
    const stripped = stripCognitiveDispositionFooters(contaminated);
    expect(stripped.strippedMarkers).toContain("CONTRADICTION CANDIDATE");
    expect(stripped.core).toBe(guidance);

    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: contaminated,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.relation).toBe("complementary");
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
    expect(built.strippedDispositionMarkers).toContain("CONTRADICTION CANDIDATE");
    expect(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE).toMatch(/Signal de cohérence/);
    expect(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE).not.toMatch(
      /CONTRADICTION CANDIDATE/,
    );
  });
});

describe("ORION-NORA-COHERENCE-CORR-01 — Framing card / CURRENT T05–T08 / T10–T11", () => {
  it("T05/T07 — CURRENT Conception label; never invent Cadrage exploratoire", () => {
    expect(
      framingContinuityRecommendationReadyTitle({
        catalogLabel: "Conception fonctionnelle",
        targetCycleTypeId: "cyc:functional-design",
      }),
    ).toBe("Commencer par un « Conception fonctionnelle »");
    expect(
      framingContinuityRecommendationReadyTitle({
        catalogLabel: null,
        targetCycleTypeId: null,
      }),
    ).not.toMatch(/Cadrage/);
    expect(
      isFramingExploratoryCycleLabel({
        catalogLabel: "Conception fonctionnelle",
        targetCycleTypeId: "cyc:functional-design",
      }),
    ).toBe(false);
    expect(
      framingContinuityPilotMessage(
        "recommendation_ready",
        "Conception fonctionnelle",
        "cyc:functional-design",
      ),
    ).not.toMatch(/exploratoire/);
  });

  it("T06 — Framing/Cadrage still may use exploratoire qualifier", () => {
    expect(
      framingContinuityRecommendationReadyTitle({
        catalogLabel: "Cadrage",
        targetCycleTypeId: "cyc:framing",
      }),
    ).toBe("Commencer par un « Cadrage » exploratoire");
    expect(
      framingContinuityPilotMessage(
        "recommendation_ready",
        "Cadrage",
        "cyc:framing",
      ),
    ).toMatch(/exploratoire/);
  });

  it("T08 — reload render: divergence notice keeps plain; no invented HD", () => {
    const p = orionComparisonPresentation();
    const plain = [
      NORA_ADAPTIVE_DIVERGENCE_NOTICE,
      "",
      "— Version structurée —",
      composeCanonicalFromPresentation(p),
      "",
      "— Version narrative —",
      "Autre orientation.",
    ].join("\n");
    const decision = resolveAdaptiveAssistantRender({
      content: plain,
      presentation: p,
      studioControlNotices: [],
    });
    expect(decision.mode).toBe("plain");
    expect(decision.usedA1).toBe(false);
    expect(decision.plainText).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
  });

  it("T10 — HumanDecision/START never implied by recommendation_ready copy", () => {
    const msg = framingContinuityPilotMessage(
      "recommendation_ready",
      "Conception fonctionnelle",
      "cyc:functional-design",
    );
    expect(msg).not.toMatch(/HumanDecision|START|démarré automatiquement/i);
    expect(msg).toMatch(/préparer cette direction/i);
  });

  it("T11 — NAP R1/R2/R3: complementary guidance still A1; conflict still divergent", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: guidance,
        presentation: p,
        conversationGuidanceStatement: guidance,
      }).kind,
    ).toBe("complementary");
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore:
          "Au contraire, je choisis uniquement le Cadrage exploratoire.",
        presentation: p,
        conversationGuidanceStatement:
          "Au contraire, je choisis uniquement le Cadrage exploratoire.",
      }).kind,
    ).toBe("divergent");
  });
});

describe("ORION-NORA-COHERENCE-CORR-01 — ORION clarification incident", () => {
  it("CURRENT=Conception, candidate guidance=Conception, contaminated footer → A1 aligned", () => {
    const p = orionComparisonPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const core = `${guidance}\n\n[CONTRADICTION CANDIDATE] Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.`;
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: core,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.usedA1).toBe(true);
    expect(built.relation).toBe("complementary");
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");

    const cardTitle = framingContinuityRecommendationReadyTitle({
      catalogLabel: "Conception fonctionnelle",
      targetCycleTypeId: "cyc:functional-design",
    });
    expect(cardTitle).toContain("Conception fonctionnelle");
    expect(cardTitle).not.toContain("Cadrage");
    // Card and restitution both point at Conception — no unexplained Cadrage.
    expect(built.contentCore).toContain("Conception fonctionnelle");
  });
});
