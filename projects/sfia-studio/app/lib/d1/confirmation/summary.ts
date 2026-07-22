import type { D1Project } from "../types";
import type {
  ConfirmationActionType,
  ConfirmationSummary,
  ProjectDraftFields,
} from "./types";
import { EXISTING_PROJECT_PERSISTENCE_NOTE } from "./types";

export function buildConfirmationSummary(input: {
  actionType: ConfirmationActionType;
  draft?: ProjectDraftFields | null;
  project?: D1Project | null;
}): ConfirmationSummary {
  switch (input.actionType) {
    case "CREATE_PROJECT": {
      const d = input.draft!;
      return {
        actionLabel: "Créer ce projet",
        targetLabel: d.name,
        consequences: [
          "Un nouveau Project sera créé dans le workspace Studio.",
          "Des événements d’audit PROJECT_CREATED seront append-only.",
          "Aucun Cycle ni Action ne sera créé.",
        ],
        dataToPersist: [
          `Nom : ${d.name}`,
          `Objectif : ${d.objective.slice(0, 120)}${d.objective.length > 120 ? "…" : ""}`,
          d.initialContextSummary
            ? `Contexte : ${d.initialContextSummary.slice(0, 80)}…`
            : "Contexte : (vide)",
          `Activation : ${d.activate ? "ACTIVE" : "DRAFT"}`,
        ],
        warnings: [
          "Cette action est confirmée explicitement par vous.",
          "Un double clic avec la même clé d’idempotence ne créera pas de doublon.",
        ],
        irreversibleEffects: [
          "Le Project créé restera visible dans le Workspace (pas de suppression dans C4).",
        ],
        confirmationRequired: true,
      };
    }
    case "CONFIRM_EXISTING_PROJECT_CONTEXT": {
      const p = input.project!;
      return {
        actionLabel: "Confirmer ce projet pour la suite",
        targetLabel: p.name,
        consequences: [
          "Le Project sera relu et confirmé comme contexte de travail.",
          "Aucune relation persistante d’intake n’existe encore dans le domaine.",
          "Aucun Cycle ni Action ne sera ouvert.",
        ],
        dataToPersist: [
          "Aucune écriture métier de rattachement (contrat domaine absent).",
          `Project relu : ${p.projectId}`,
          `Statut : ${p.state}`,
        ],
        warnings: [
          EXISTING_PROJECT_PERSISTENCE_NOTE,
          p.state !== "ACTIVE"
            ? "Project inactif (DRAFT) — confirmation possible mais sans reprise automatique."
            : "Sélection confirmée localement uniquement.",
        ].filter(Boolean),
        irreversibleEffects: [],
        confirmationRequired: true,
      };
    }
    case "ANALYZE_ONLY":
      return {
        actionLabel: "Continuer sans créer",
        targetLabel: "Analyse seule",
        consequences: [
          "Aucune mutation Project.",
          "Clôture explicite de l’intake pour cette intention.",
        ],
        dataToPersist: ["Aucune donnée métier persistée."],
        warnings: [],
        irreversibleEffects: [],
        confirmationRequired: true,
      };
    case "CANCEL":
      return {
        actionLabel: "Annuler",
        targetLabel: "Annulation",
        consequences: ["Aucune mutation.", "Retour à la proposition / matching."],
        dataToPersist: [],
        warnings: [],
        irreversibleEffects: [],
        confirmationRequired: true,
      };
  }
}
