/**
 * LUMEN integrated A+B — CORR-A1B-01 + PREPARE consent (TEST-15 hardening).
 * Deterministic only — ZERO OpenAI LIVE — ZERO Cursor REAL — ZERO campaign DB writes.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  hasExplicitPrepareContractIntent,
  hasExplicitPrepareContractRefusal,
  resolveChatFirstGenericPrepareGo,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  buildDurableAssistantContentForTurn,
  classifyNarrativePresentationRelation,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";

const baseProject = (): ProjectAssistantContextDto =>
  ({
    projectId: "prj:lumen-test",
    displayName: "LUMEN test",
    shortReference: "LUMEN",
    contextSummary: "Atelier initiation numérique",
    constraints: [],
    activeCycleInstanceId: "cyc:test",
  }) as unknown as ProjectAssistantContextDto;

describe("LUMEN cog+prepare corr-01 — Axis A prompt primacy", () => {
  it("system prompt requires ANSWER before ORIENT for analytical asks", () => {
    const prompt = buildProjectSystemPrompt(baseProject());
    expect(prompt).toMatch(/RÉPONSE MÉTIER SUBSTANTIELLE/);
    expect(prompt).toMatch(/UNDERSTAND → REASON → ANSWER → puis ORIENT/);
    expect(prompt).toMatch(/conversationGuidance\.statement N'EST PAS un substitut/);
    expect(prompt).toMatch(/Comparaison demandée → comparaison exploitable/);
    expect(prompt).toMatch(/request_generic_execution_prepare/);
    expect(prompt).toMatch(/n'annonce jamais qu'un contrat a été préparé/);
  });
});

describe("LUMEN cog+prepare corr-01 — Axis B PREPARE consent hardened", () => {
  const negatives = [
    "Ne prépare pas de contrat d'exécution.",
    "Ne prépare surtout pas le contrat d'exécution.",
    "Je refuse que tu prépares un contrat.",
    "Prépare l'analyse, mais ne crée aucun contrat d'exécution.",
    "Je ne veux pas de contrat.",
    "Analyse seulement, sans lancer de mission.",
    "Ne prépare rien pour Cursor.",
    "Nous verrons l'exécution plus tard. Pas de contrat d'exécution.",
    "Prépare une analyse, pas un contrat.",
    "Je souhaite examiner cette proposition. Ne prépare pas de contrat d'exécution et ne lance aucune action technique pour le moment.",
    "Prépare une analyse comparative et une proposition de cadrage détaillée pour LUMEN. Ne prépare pas de contrat d'exécution.",
  ];
  const positives = [
    "Prépare le contrat d'exécution pour la fiche d'animation.",
    "OK, prépare le contrat pour cette mission.",
    "Tu avais dit ne prépare pas. Maintenant prépare le contrat d'exécution pour LUMEN.",
    "Avant je ne voulais pas de contrat. Maintenant prépare le contrat.",
    "J'avais dit ne prépare pas. Cette fois, prépare le contrat.",
  ];

  const temporalRefusals = [
    "Maintenant prépare le contrat d'exécution. Finalement, ne prépare pas de contrat d'exécution.",
    "Prépare le contrat. Non, finalement ne le prépare pas.",
  ];

  it("negations are refusal and not lexical prepare GO", () => {
    for (const text of [...negatives, ...temporalRefusals]) {
      expect(hasExplicitPrepareContractRefusal(text), text).toBe(true);
      expect(hasExplicitPrepareContractIntent(text), text).toBe(false);
      expect(
        resolveChatFirstGenericPrepareGo({
          projectId: "prj:x",
          cycleInstanceId: "cyc:x",
          text,
        }).kind,
        text,
      ).toBe("no_go");
    }
  });

  it("positive explicit prepare remains lexical GO", () => {
    for (const text of positives) {
      expect(hasExplicitPrepareContractRefusal(text), text).toBe(false);
      expect(hasExplicitPrepareContractIntent(text), text).toBe(true);
      expect(
        resolveChatFirstGenericPrepareGo({
          projectId: "prj:x",
          cycleInstanceId: "cyc:x",
          text,
        }).kind,
        text,
      ).toBe("explicit_lexical_prepare");
    }
  });

  it("last explicit refuse wins over earlier maintenant prépare", () => {
    const text =
      "Maintenant prépare le contrat d'exécution. Finalement, ne prépare pas de contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(text)).toBe(true);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:x",
        cycleInstanceId: "cyc:x",
        text,
      }),
    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
  });

  it("A+B integrated utterance: framing ask + refusal → no_go", () => {
    const text =
      "Prépare une analyse comparative et une proposition de cadrage détaillée pour LUMEN. " +
      "Ne prépare pas de contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(text)).toBe(true);
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }),
    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
  });

  it("solicitGenericExecutionPrepare fail-closes on pilotUtterance refusal without OA", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:lumen",
      cycleInstanceId: null,
      pilotUtterance:
        "Prépare une analyse. Ne prépare pas de contrat d'exécution.",
      requirePositivePilotAdmission: true,
      mission: {
        objective: "should not matter",
        expectedOutcome: "should not matter",
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("EXPLICIT_PREPARE_REFUSAL");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("B1 — quoted PREPARE command under analysis ask is not consent", () => {
    const text =
      "Voici une phrase à analyser :\n« Prépare le contrat d'exécution ».\nExplique ce qu'elle signifie.";
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(hasExplicitPrepareContractRefusal(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }),
    ).toEqual({
      kind: "no_go",
      reason: "prepare_citation_or_analysis_not_consent",
    });
  });

  it("B2 — pedagogical documentation example is not consent", () => {
    const text =
      "Dans notre documentation, on trouve : Prépare le contrat d'exécution. Que signifie cette instruction ?";
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("no_go");
  });

  it("B3 — fenced code with positive PREPARE is not consent", () => {
    const text =
      "Que fait cette commande ?\n```\nPrépare le contrat d'exécution\n```\nExplique.";
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("no_go");
  });

  it("B4 — reported Nora offer + comprehension ask is not consent", () => {
    const text =
      "Nora m'a proposé de préparer un contrat. Je voudrais comprendre pourquoi.";
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("no_go");
  });

  it("B11 — citation + refusal + analysis → no_go", () => {
    const text =
      "Voici une phrase : « Prépare le contrat d'exécution ». " +
      "Ne prépare pas de contrat d'exécution. Explique ce qu'elle signifie.";
    expect(hasExplicitPrepareContractRefusal(text)).toBe(true);
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("no_go");
  });

  it("B13 — solicit fail-closes on citation-only utterance (no EC)", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:lumen",
      cycleInstanceId: null,
      pilotUtterance:
        "Voici une phrase à analyser : « Prépare le contrat d'exécution ». Explique ce qu'elle signifie.",
      mission: {
        objective: "should not matter",
        expectedOutcome: "should not matter",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("B9 — direct prepare command remains lexical GO", () => {
    const text =
      "Prépare le contrat d'exécution pour la mission LUMEN.";
    expect(hasExplicitPrepareContractIntent(text)).toBe(true);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("explicit_lexical_prepare");
  });
});

describe("LUMEN cog+prepare corr-01 — A+B product effects", () => {
  it("Scénario 1 — analysis + cited PREPARE: durable comparison, no prepare GO", () => {
    const utterance =
      "Compare les trois formats pédagogiques du projet LUMEN et recommande une approche. " +
      "Voici une commande utilisée dans un exemple : « Prépare le contrat d'exécution ». " +
      "Pour l'instant, je veux seulement une analyse.";
    expect(hasExplicitPrepareContractIntent(utterance)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text: utterance,
      }),
    ).toEqual({
      kind: "no_go",
      reason: "prepare_citation_or_analysis_not_consent",
    });

    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "LUMEN",
      title: "Comparaison des trois formats",
      lead: null,
      blocks: [
        {
          kind: "comparison_table",
          title: "Formats",
          columns: ["Format", "Avantages", "Limites", "Ressources"],
          rows: [
            ["Atelier court", "Rapide", "Peu de reprise", "1 salle"],
            ["Parcours multi-séances", "Progression", "Créneaux", "Postes"],
            ["Accompagnement long", "Sur-mesure", "Charge", "Tuteur"],
          ],
        },
        {
          kind: "recommendation",
          title: "Orientation",
          statement:
            "Sous l'hypothèse de créneaux hebdomadaires, je recommande le parcours multi-séances.",
          disclaimer: null,
        },
        {
          kind: "plain",
          text: "Hypothèse non confirmée : disponibilité réelle du centre.",
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    });
    expect(presentation).not.toBeNull();
    const shortOrient =
      "Je te propose de valider ensuite les moyens du centre avant d'arrêter le format.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: shortOrient,
        presentation,
        conversationGuidanceStatement: shortOrient,
      }).kind,
    ).toBe("complementary");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: shortOrient,
      presentation,
      conversationGuidanceStatement: shortOrient,
    });
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toMatch(/Atelier court/);
    expect(built.contentCore).toMatch(/recommande le parcours multi-séances/);
    expect(built.contentCore).toMatch(/Hypothèse non confirmée/);
    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: built.presentation,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.blocks.some((b) => b.kind === "comparison_table")).toBe(
      true,
    );
  });

  it("Scénario 2 — framing ask + refuse PREPARE: analysis A1 + no_go", () => {
    const utterance =
      "Prépare une analyse comparative des trois formats, mais ne prépare aucun contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(utterance)).toBe(true);
    expect(hasExplicitPrepareContractIntent(utterance)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text: utterance,
      }).kind,
    ).toBe("no_go");
  });

  it("Scénario 4 — opposing narrative not folded as complementary", () => {
    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "LUMEN",
      title: "Comparaison",
      lead: null,
      blocks: [
        {
          kind: "recommendation",
          title: "Orientation",
          statement:
            "Je recommande un parcours structuré sur plusieurs séances.",
          disclaimer: null,
        },
        {
          kind: "plain",
          text: "Sous réserve des créneaux du centre.",
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    });
    expect(presentation).not.toBeNull();
    const opposing =
      "Je te propose d'abandonner le parcours structuré sur plusieurs séances.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: opposing,
        presentation,
        conversationGuidanceStatement: opposing,
      }).kind,
    ).toBe("divergent");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation,
      conversationGuidanceStatement: opposing,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toMatch(/abandonner/);
    expect(built.contentCore).toMatch(/parcours structuré/);
  });
});
