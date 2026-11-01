/**
 * FINAL-REVIEW-CORR-635 — Blocker A: no silent narrative loss.
 * DETERMINISTIC — ZERO OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  NORA_ADAPTIVE_DIVERGENCE_NOTICE,
  NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE,
  buildDurableAssistantContentForTurn,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
  stripCognitiveDispositionFooters,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import { framingContinuityRecommendationReadyTitle } from "@/features/project-assistant/f2/chatFirstFramingContinuity";

const METIER_P1 = "Texte principal du métier ORION.";
const METIER_P2 = "Paragraphe métier important.";
const METIER_P3 = "Conclusion importante.";
const FOOTER_CANDIDATE =
  "[CONTRADICTION CANDIDATE] Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.";
const FOOTER_STOP_MULTILINE = [
  "[COGNITIVE STOP] Conflicting claims without decisive Evidence.",
  "Evidence: ev:1, ev:2",
  "Next: request_pilot_clarification",
].join("\n");
const FOOTER_EVIDENCE =
  "[EVIDENCE-BACKED CONTRADICTION] Decisive conflict retained with Evidence pointers.";

function orionPresentation() {
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

describe("FINAL-REVIEW-CORR-635 — footer extraction A01–A14", () => {
  it("A01 — valid terminal footer removed; full métier retained", () => {
    const source = `${METIER_P1}\n\n${METIER_P2}\n\n${METIER_P3}\n\n${FOOTER_CANDIDATE}`;
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual(["CONTRADICTION CANDIDATE"]);
    expect(core).toBe(`${METIER_P1}\n\n${METIER_P2}\n\n${METIER_P3}`);
    expect(core).toContain(METIER_P2);
    expect(core).toContain(METIER_P3);
  });

  it("A02 — marker in middle of answer: subsequent paragraphs preserved", () => {
    const source = `${METIER_P1}\n\n${FOOTER_CANDIDATE}\n${METIER_P2}\n\n${METIER_P3}`;
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toBe(source.trim());
    expect(core).toContain(METIER_P2);
    expect(core).toContain(METIER_P3);
    expect(core).toContain("CONTRADICTION CANDIDATE");
  });

  it("A03 — marker inside quoted text preserved with explanation", () => {
    const source = [
      METIER_P1,
      "",
      '> Exemple de diagnostic : "[CONTRADICTION CANDIDATE] Note technique."',
      "Cette citation illustre le jargon ; elle n'est pas un footer Studio.",
      METIER_P3,
    ].join("\n");
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toBe(source);
    expect(core).toContain("Cette citation illustre");
    expect(core).toContain(METIER_P3);
  });

  it("A04 — marker inside fenced code preserved", () => {
    const source = [
      METIER_P1,
      "",
      "```text",
      "[CONTRADICTION CANDIDATE] example footer line",
      "```",
      "",
      "Explication du bloc de code pour le Pilote.",
      METIER_P3,
    ].join("\n");
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toContain("```text");
    expect(core).toContain("[CONTRADICTION CANDIDATE] example footer line");
    expect(core).toContain("Explication du bloc de code");
    expect(core).toContain(METIER_P3);
  });

  it("A05 — inline marker within a sentence: no truncation", () => {
    const source =
      "Le jargon [CONTRADICTION CANDIDATE] ne doit pas tronquer cette phrase ni la suite.\n" +
      METIER_P2;
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toBe(source);
    expect(core).toContain("ni la suite.");
    expect(core).toContain(METIER_P2);
  });

  it("A06 — multiple legitimate paragraphs after marker: no data loss", () => {
    const source = [
      METIER_P1,
      "",
      FOOTER_CANDIDATE,
      METIER_P2,
      "",
      "Second paragraphe après le marqueur.",
      "",
      METIER_P3,
    ].join("\n");
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual([]);
    expect(core).toContain(METIER_P2);
    expect(core).toContain("Second paragraphe après le marqueur.");
    expect(core).toContain(METIER_P3);
    expect(core.split("\n").filter((l) => l.includes("paragraphe") || l === METIER_P2 || l === METIER_P3).length).toBeGreaterThanOrEqual(2);
  });

  it("A07 — multiple disposition types as terminal footers", () => {
    for (const footer of [
      FOOTER_CANDIDATE,
      "[COGNITIVE STOP] Stop reason only.",
      FOOTER_EVIDENCE,
    ]) {
      const source = `${METIER_P1}\n\n${METIER_P2}\n\n${footer}`;
      const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
      expect(core).toBe(`${METIER_P1}\n\n${METIER_P2}`);
      expect(strippedMarkers.length).toBe(1);
      expect(core).not.toMatch(
        /CONTRADICTION CANDIDATE|COGNITIVE STOP|EVIDENCE-BACKED CONTRADICTION/,
      );
    }
  });

  it("A08 — valid trusted multiline COGNITIVE STOP footer: only documented boundary", () => {
    const source = `${METIER_P1}\n\n${METIER_P2}\n\n${FOOTER_STOP_MULTILINE}`;
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(source);
    expect(strippedMarkers).toEqual(["COGNITIVE STOP"]);
    expect(core).toBe(`${METIER_P1}\n\n${METIER_P2}`);
    expect(core).not.toContain("Evidence:");
    expect(core).not.toContain("Next:");
  });

  it("A09 — untrusted/ambiguous marker: fail closed, preserve content", () => {
    const ambiguous = [
      METIER_P1,
      "",
      "[CONTRADICTION CANDIDATE] Note technique.",
      "Paragraphe métier important.",
      "Conclusion importante.",
    ].join("\n");
    const { core, strippedMarkers } = stripCognitiveDispositionFooters(ambiguous);
    expect(strippedMarkers).toEqual([]);
    expect(core).toBe(ambiguous);
    expect(core).toContain("Paragraphe métier important.");
    expect(core).toContain("Conclusion importante.");
  });

  it("A10 — empty narrative + trusted footer → presentation_only A1 eligible", () => {
    const p = orionPresentation();
    const contaminated = `\n\n${FOOTER_CANDIDATE}`;
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: contaminated,
      presentation: p,
    });
    expect(built.relation).toBe("presentation_only");
    expect(built.usedA1).toBe(true);
    expect(built.strippedDispositionMarkers).toContain("CONTRADICTION CANDIDATE");
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
  });

  it("A11 — actual narrative/presentation conflict remains divergent", () => {
    const p = orionPresentation();
    const opposing =
      "Au contraire, je retiens uniquement le Cadrage exploratoire et j'abandonne la Conception fonctionnelle.\n\n" +
      FOOTER_CANDIDATE;
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation: p,
      conversationGuidanceStatement:
        "Au contraire, je retiens uniquement le Cadrage exploratoire et j'abandonne la Conception fonctionnelle.",
    });
    expect(built.relation).toBe("divergent");
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("Cadrage exploratoire");
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
  });

  it("A12 — historical Memory B content not silently rewritten", () => {
    const historical = [
      METIER_P1,
      "",
      "[CONTRADICTION CANDIDATE] Note technique.",
      "Paragraphe métier important.",
      "Conclusion importante.",
    ].join("\n");
    const decision = resolveAdaptiveAssistantRender({
      content: historical,
      presentation: null,
      studioControlNotices: [],
    });
    expect(decision.mode).toBe("plain");
    expect(decision.plainText).toBe(historical);
    expect(decision.plainText).toContain("Paragraphe métier important.");
    expect(decision.plainText).toContain("Conclusion importante.");
  });

  it("A13 — authenticated typed Studio notice deduplicated and Pilot-intelligible", () => {
    expect(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE).toMatch(/Signal de cohérence/);
    expect(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE).not.toMatch(
      /CONTRADICTION CANDIDATE/,
    );
    const p = orionPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: `${guidance}\n\n${FOOTER_CANDIDATE}`,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(built.strippedDispositionMarkers).toContain("CONTRADICTION CANDIDATE");
    expect(built.contentCore).not.toContain("CONTRADICTION CANDIDATE");
    // Notice is typed separately — must not be duplicated into contentCore as jargon.
    expect(built.contentCore).not.toContain(NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE);
  });

  it("A14 — ORION Conception recommendation and card remain aligned", () => {
    const p = orionPresentation();
    const guidance =
      "La direction que je recommande est donc la Conception fonctionnelle ; tu peux l’examiner avant toute décision de préparation ou de démarrage.";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: `${guidance}\n\n${FOOTER_CANDIDATE}`,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    const cardTitle = framingContinuityRecommendationReadyTitle({
      catalogLabel: "Conception fonctionnelle",
      targetCycleTypeId: "cyc:functional-design",
    });
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toContain("Conception fonctionnelle");
    expect(cardTitle).toContain("Conception fonctionnelle");
    expect(cardTitle).not.toMatch(/Cadrage/);
    expect(built.contentCore).not.toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
  });
});
