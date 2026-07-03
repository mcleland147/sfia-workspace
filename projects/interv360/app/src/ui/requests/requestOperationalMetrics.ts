import type { DemoRequest } from "../../domain/requestStatus";
import { getAssignmentDisplay } from "./requestIndicators";
import { getUiIndicator } from "../dashboard/requestDashboardStats";

export interface OperationalMetrics {
  urgencyScore: number;
  urgencyLevel: "Critique" | "Élevée" | "Modérée" | "Faible";
  slaOverdue: boolean;
  slaLabel: string;
  slaDelay?: string;
  nextActionTitle: string;
  nextActionTasks: string[];
  assignee: string;
  assigneeRole: string;
}

export function getOperationalMetrics(request: DemoRequest): OperationalMetrics {
  const indicator = getUiIndicator(request);
  const assignee = getAssignmentDisplay(request) ?? "Non affecté";

  let urgencyScore = 4;
  if (request.priority === "high" && request.criticality === "urgent") {
    urgencyScore = 8.5;
  } else if (request.priority === "high" || request.criticality === "urgent") {
    urgencyScore = 7;
  } else if (request.priority === "medium" || request.criticality === "sensitive") {
    urgencyScore = 5.5;
  } else {
    urgencyScore = 3.5;
  }

  const urgencyLevel =
    urgencyScore >= 8
      ? "Critique"
      : urgencyScore >= 6.5
        ? "Élevée"
        : urgencyScore >= 4.5
          ? "Modérée"
          : "Faible";

  const slaOverdue = indicator === "retard";

  let nextActionTitle = "Suivre la demande";
  const nextActionTasks: string[] = [];

  if (request.status === "STAT-01") {
    nextActionTitle = "Qualifier la demande";
    nextActionTasks.push(
      "Confirmer la nature de panne",
      "Compléter les champs requis",
      "Valider le niveau d'urgence",
    );
  } else if (request.status === "STAT-02") {
    nextActionTitle = "Préparer l'intervention";
    nextActionTasks.push(
      "Confirmer le créneau planifié",
      "Vérifier le matériel nécessaire",
      "Contacter le client si besoin",
    );
  } else if (request.status === "STAT-03") {
    nextActionTitle = "Suivre l'intervention";
    nextActionTasks.push(
      "Mettre à jour l'avancement terrain",
      "Documenter les constats",
      "Préparer le compte rendu",
    );
  } else if (request.status === "STAT-06" || request.status === "STAT-07") {
    nextActionTitle = "Demande terminée";
    nextActionTasks.push("Consulter l'historique pour traçabilité");
  } else {
    nextActionTasks.push(
      "Consulter la fiche demande",
      "Vérifier les indicateurs",
    );
  }

  return {
    urgencyScore,
    urgencyLevel,
    slaOverdue,
    slaLabel: slaOverdue ? "DÉPASSÉ" : "SOUS CONTRÔLE",
    slaDelay: slaOverdue ? "+3h20" : undefined,
    nextActionTitle,
    nextActionTasks,
    assignee,
    assigneeRole: "Technicien SAV",
  };
}

export function getAssigneeInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
