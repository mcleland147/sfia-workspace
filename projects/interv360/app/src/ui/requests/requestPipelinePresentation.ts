import type { DemoRequest, RequestStatus } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import { getAssignmentDisplay } from "./requestIndicators";
import { getUiIndicator } from "../dashboard/requestDashboardStats";

export interface PipelineStep {
  label: string;
  subLabel: string;
  state: "done" | "active" | "upcoming";
}

const PIPELINE_LABELS = [
  "À qualifier",
  "Qualifiée",
  "Planifiée",
  "Clôturée",
] as const;

function getActiveStepIndex(status: RequestStatus): number {
  switch (status) {
    case "STAT-01":
      return 0;
    case "STAT-02":
      return 1;
    case "STAT-03":
    case "STAT-04":
    case "STAT-05":
      return 2;
    case "STAT-06":
    case "STAT-07":
      return 3;
    default:
      return 0;
  }
}

export function getPipelineSteps(request: DemoRequest): PipelineStep[] {
  const activeIndex = getActiveStepIndex(request.status);

  return PIPELINE_LABELS.map((label, index) => ({
    label,
    subLabel:
      index < activeIndex
        ? "Terminée"
        : index === activeIndex
          ? "En cours"
          : "À venir",
    state:
      index < activeIndex
        ? "done"
        : index === activeIndex
          ? "active"
          : "upcoming",
  }));
}

export function getPipelinePresentation(request: DemoRequest) {
  const steps = getPipelineSteps(request);
  const activeIndex = getActiveStepIndex(request.status);
  const indicator = getUiIndicator(request);
  const assignee = getAssignmentDisplay(request) ?? "Non affecté";

  return {
    steps,
    activeIndex,
    currentStep: activeIndex + 1,
    totalSteps: steps.length,
    statusLabel: getRequestStatusLabel(request.status),
    assignee,
    slaOverdue: indicator === "retard",
    slaDelay: indicator === "retard" ? "+3h20" : undefined,
    nextAction:
      request.status === "STAT-06" || request.status === "STAT-07"
        ? "Demande terminée — aucune action requise."
        : request.status === "STAT-01"
          ? "Compléter la qualification pour débloquer l'étape suivante."
          : request.status === "STAT-02"
            ? "Préparer l'intervention terrain."
            : "Suivre l'intervention en cours.",
    ctaLabel:
      request.status === "STAT-01"
        ? "Qualifier la demande"
        : request.status === "STAT-02"
          ? "Planifier l'intervention"
          : request.status === "STAT-03"
            ? "Mettre en attente"
            : "Suivre la demande",
  };
}
