/**
 * Deterministic Sas Nora visual fixtures for DEV screenshots / Playwright.
 * Presentation-only — does not mutate persistence or D2 services.
 */

import type {
  PreparationProjection,
  ProjectionAssessment,
  ProposedField,
} from "@/domains/preparation/projection";
import type { SasPresentationStage } from "./sas-presentation";

export type SasVisualFixture = {
  stage: SasPresentationStage;
  messages: Array<{ id: string; role: string; content: string; status: string }>;
  projection: PreparationProjection;
  previewName: string;
  previewSummary: string;
  openPoints: Array<{ id: string; statement: string }>;
};

function field(
  value: string,
  status: ProposedField<string>["status"] = "NORA_PROPOSED",
): ProposedField<string> {
  return {
    value,
    status,
    source: { kind: "NORA_TURN", ref: "visual-fixture" },
    isCurrent: true,
  };
}

function projection(input: {
  assessment: ProjectionAssessment;
  explanation: string;
  name?: ProposedField<string> | null;
  intention?: ProposedField<string> | null;
  desiredOutcome?: ProposedField<string> | null;
  initialScope?: ProposedField<string> | null;
  openQuestions?: ProposedField<string>[];
}): PreparationProjection {
  return {
    schemaVersion: 1,
    preparationId: "visual-fixture",
    revision: 1,
    updatedFromTurnKey: "visual-fixture-turn",
    observedAt: "2026-11-16T12:00:00.000Z",
    name: input.name ?? null,
    intention: input.intention ?? null,
    desiredOutcome: input.desiredOutcome ?? null,
    initialScope: input.initialScope ?? null,
    openQuestions: input.openQuestions ?? [],
    suggestion: {
      assessment: input.assessment,
      explanation: input.explanation,
      sourceTurnKey: "visual-fixture-turn",
    },
  };
}

export const SAS_VISUAL_FIXTURES: Record<string, SasVisualFixture> = {
  first_intention: {
    stage: "first_intention",
    messages: [],
    projection: projection({
      assessment: "EXPLORING",
      explanation: "Exploration.",
    }),
    previewName: "",
    previewSummary: "",
    openPoints: [],
  },
  clarification: {
    stage: "clarification",
    messages: [
      {
        id: "m1",
        role: "user",
        content:
          "J'aimerais créer un outil qui aide les chefs de projet à garder le cap sans multiplier les tableaux et les applications.",
        status: "committed",
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "Si je comprends bien, votre besoin principal est de rendre les priorités, les décisions et les prochaines actions plus faciles à suivre.\n\nQuel est aujourd'hui le point qui vous fait perdre le plus de temps : retrouver l'information, décider, ou suivre les actions ?",
        status: "committed",
      },
      {
        id: "m3",
        role: "user",
        content: "Surtout retrouver les décisions et savoir ce qu'on doit faire ensuite.",
        status: "committed",
      },
    ],
    projection: projection({
      assessment: "CLARIFYING",
      explanation: "Clarification en cours.",
      intention: field("Simplifier le pilotage des projets"),
      desiredOutcome: field("Retrouver les décisions et la suite"),
      openQuestions: [field("Premier public et contexte d'usage", "NEEDS_CONFIRMATION")],
    }),
    previewName: "",
    previewSummary: "Simplifier le pilotage des projets",
    openPoints: [{ id: "o1", statement: "Premier public et contexte d'usage" }],
  },
  proposal: {
    stage: "proposal",
    messages: [
      {
        id: "m1",
        role: "user",
        content:
          "Je veux un outil qui centralise le contexte d'un projet et m'accompagne dans les décisions. Un espace simple, plutôt qu'un outil de plus.",
        status: "committed",
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "Je vous propose une première base : un espace de travail continu pour piloter un projet avec un copilote IA.\n\nLe premier résultat pourrait être de retrouver les décisions, les prochaines actions et leur contexte au même endroit.",
        status: "committed",
      },
      {
        id: "m3",
        role: "assistant",
        content:
          "Je garderais la collaboration multi-équipe comme question ouverte pour plus tard. Nous pouvons encore affiner ce premier périmètre.",
        status: "committed",
      },
    ],
    projection: projection({
      assessment: "PROPOSAL",
      explanation: "Proposition évolutive.",
      name: field("Assistant de conduite de projets"),
      intention: field("Un espace de projet sans dispersion"),
      desiredOutcome: field("Décisions et prochaines actions lisibles"),
      openQuestions: [field("Usage individuel ou en équipe", "NEEDS_CONFIRMATION")],
    }),
    previewName: "Assistant de conduite de projets",
    previewSummary: "Un espace de projet sans dispersion",
    openPoints: [{ id: "o1", statement: "Usage individuel ou en équipe" }],
  },
  base_sufficient: {
    stage: "base_sufficient",
    messages: [
      {
        id: "m1",
        role: "user",
        content:
          "On va commencer pour moi seul, avec le suivi des décisions, des points ouverts et des prochaines actions. On élargira plus tard.",
        status: "committed",
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "Nous avons une première intention claire, un utilisateur identifié et un résultat utile pour commencer.\n\nJe vous recommande de créer le projet sur cette base. Le périmètre pourra évoluer, et nous préciserons ensemble les autres fonctionnalités après sa création.",
        status: "committed",
      },
      {
        id: "m3",
        role: "assistant",
        content:
          "Je reste à vos côtés : le fil et les éléments déjà clarifiés vous suivront dans votre espace projet.",
        status: "committed",
      },
    ],
    projection: projection({
      assessment: "BASE_SUFFICIENTE",
      explanation:
        "Nora estime la base suffisante, sans créer le projet. La décision finale vous appartient.",
      name: field("Assistant de conduite de projets"),
      intention: field("Rendre les décisions actionnables"),
      desiredOutcome: field("Décisions et prochaines actions lisibles"),
      initialScope: field("Projet personnel · suivi des décisions"),
      openQuestions: [field("Collaboration multi-équipe", "NEEDS_CONFIRMATION")],
    }),
    previewName: "Assistant de conduite de projets",
    previewSummary: "Rendre les décisions actionnables",
    openPoints: [{ id: "o1", statement: "Collaboration multi-équipe" }],
  },
  resume: {
    stage: "resume",
    messages: [
      {
        id: "m1",
        role: "assistant",
        content:
          "Bon retour. Nous avions clarifié l'objectif : faciliter le suivi des décisions et des prochaines actions dans un espace de projet personnel.",
        status: "committed",
      },
      {
        id: "m2",
        role: "user",
        content: "Oui, je voudrais continuer à préciser la première version avant de lancer le projet.",
        status: "committed",
      },
      {
        id: "m3",
        role: "assistant",
        content:
          "Très bien. Nous avions laissé la collaboration en équipe pour plus tard.\n\nVoulez-vous commencer par le parcours quotidien d'un chef de projet, ou approfondir les informations à retrouver dans le cockpit ?",
        status: "committed",
      },
    ],
    projection: projection({
      assessment: "PROPOSAL",
      explanation: "Continuité conservée.",
      name: field("Assistant de conduite de projets"),
      intention: field("Assistant de conduite de projets"),
      desiredOutcome: field("Vision personnelle et premier résultat"),
      openQuestions: [field("Prioriser le premier parcours", "NEEDS_CONFIRMATION")],
    }),
    previewName: "Assistant de conduite de projets",
    previewSummary: "Vision personnelle et premier résultat",
    openPoints: [{ id: "o1", statement: "Prioriser le premier parcours" }],
  },
};

export function parseSasVisualFixture(
  raw: string | null | undefined,
): SasVisualFixture | null {
  if (!raw) return null;
  return SAS_VISUAL_FIXTURES[raw] ?? null;
}
