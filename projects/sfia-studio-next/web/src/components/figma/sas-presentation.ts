/**
 * Sas Nora presentation stage — derived from preparation data (assessment / resume),
 * not from free-text heuristics. Shared by page chrome and living preview.
 */

import type { ProjectionAssessment } from "@/domains/preparation/projection";

export type SasPresentationStage =
  | "first_intention"
  | "clarification"
  | "proposal"
  | "base_sufficient"
  | "resume";

export type SasPresentationCopy = {
  stage: SasPresentationStage;
  kicker: string;
  title: string;
  subtitle: string;
  panelBadge: string;
  panelBadgeTone: "muted" | "amber" | "green" | "accent";
  maturityTitle: string;
  maturityBody: string;
  headerBreadcrumb: string;
};

const ASSESSMENT_TO_STAGE: Record<string, SasPresentationStage> = {
  EXPLORING: "first_intention",
  CLARIFYING: "clarification",
  PROPOSAL: "proposal",
  BASE_SUFFICIENTE: "base_sufficient",
};

export function resolveSasPresentationStage(input: {
  isResumed: boolean;
  assessment: ProjectionAssessment | null | undefined;
  messageCount: number;
}): SasPresentationStage {
  if (input.isResumed) return "resume";
  if (input.assessment && ASSESSMENT_TO_STAGE[input.assessment]) {
    return ASSESSMENT_TO_STAGE[input.assessment];
  }
  if (input.messageCount === 0) return "first_intention";
  return "clarification";
}

export function sasPresentationCopy(stage: SasPresentationStage): SasPresentationCopy {
  switch (stage) {
    case "clarification":
      return {
        stage,
        kicker: "CLARIFICATION EN COURS",
        title: "Donnons une forme à votre idée",
        subtitle: "Nora reformule ce qu'elle comprend et vous pose une question utile à la fois.",
        panelBadge: "Clarification",
        panelBadgeTone: "amber",
        maturityTitle: "●  Clarification",
        maturityBody:
          "Compris à ce stade. Nora continue à explorer les points réellement utiles, sans imposer de questionnaire.",
        headerBreadcrumb: "Nouvelle préparation",
      };
    case "proposal":
      return {
        stage,
        kicker: "PROPOSITION ÉVOLUTIVE",
        title: "Une proposition prend forme",
        subtitle:
          "Ce que Nora propose apparaît ici, avec ce qui est compris et ce qui reste ouvert.",
        panelBadge: "En construction",
        panelBadgeTone: "amber",
        maturityTitle: "●  En construction",
        maturityBody:
          "Proposition de Nora, non décision du Pilote. Corrigez-la simplement dans la conversation.",
        headerBreadcrumb: "Nouvelle préparation",
      };
    case "base_sufficient":
      return {
        stage,
        kicker: "CRÉATION ENVISAGEABLE",
        title: "Vous avez une base pour démarrer",
        subtitle:
          "Nora explique pourquoi le projet peut commencer, sans vous imposer un cadrage exhaustif.",
        panelBadge: "Base suffisante",
        panelBadgeTone: "green",
        maturityTitle: "✓  Vous pouvez démarrer",
        maturityBody:
          "Nora estime la base suffisante, sans créer le projet. La décision finale vous appartient.",
        headerBreadcrumb: "Nouvelle préparation",
      };
    case "resume":
      return {
        stage,
        kicker: "PRÉPARATION RETROUVÉE",
        title: "Reprenons là où vous en étiez",
        subtitle:
          "Votre intention et les échanges précédents restent disponibles, sans repartir de zéro.",
        panelBadge: "Reprise",
        panelBadgeTone: "accent",
        maturityTitle: "●  Continuité conservée",
        maturityBody:
          "Le même fil est repris. Aucune préparation parallèle ni projet définitif créé.",
        headerBreadcrumb: "Préparation reprise",
      };
    case "first_intention":
    default:
      return {
        stage: "first_intention",
        kicker: "PREMIÈRE INTENTION",
        title: "Parlons de votre projet",
        subtitle:
          "Vous n'avez pas besoin d'avoir tout prévu. Commencez par ce qui vous motive.",
        panelBadge: "Exploration",
        panelBadgeTone: "muted",
        maturityTitle: "●  Exploration",
        maturityBody:
          "L'aperçu se construit à mesure que Nora comprend votre intention. Aucun formulaire préalable.",
        headerBreadcrumb: "Nouvelle préparation",
      };
  }
}
