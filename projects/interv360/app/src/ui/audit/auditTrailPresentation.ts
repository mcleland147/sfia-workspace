import type { DemoWorkflowEvent } from "../../domain/requestStatus";
import type { DemoTransitionAction } from "../../data/requestsRepository.types";
import { workflowActionLabels } from "../../data/requestsRepository.types";

export type AuditFilterId =
  | "all"
  | "workflow"
  | "sla"
  | "assignment"
  | "comments"
  | "anomalies";

export interface AuditFilterOption {
  id: AuditFilterId;
  label: string;
  match: (event: DemoWorkflowEvent) => boolean;
}

export const AUDIT_FILTERS: AuditFilterOption[] = [
  { id: "all", label: "Tous", match: () => true },
  {
    id: "workflow",
    label: "Workflow",
    match: (event) =>
      event.type.includes("qualification") ||
      event.type.includes("planning") ||
      event.type.includes("intervention") ||
      event.type.includes("report") ||
      event.type.includes("requalified"),
  },
  {
    id: "sla",
    label: "SLA",
    match: (event) =>
      event.message.toLowerCase().includes("sla") ||
      event.message.toLowerCase().includes("retard"),
  },
  {
    id: "assignment",
    label: "Affectation",
    match: (event) =>
      event.action === "assign" ||
      event.message.toLowerCase().includes("affect"),
  },
  {
    id: "comments",
    label: "Commentaires",
    match: (event) => event.message.toLowerCase().includes("note"),
  },
  {
    id: "anomalies",
    label: "Anomalies",
    match: (event) =>
      event.message.toLowerCase().includes("anomal") ||
      event.type.includes("cancelled"),
  },
];

export function filterAuditEvents(
  events: DemoWorkflowEvent[],
  filterId: AuditFilterId,
): DemoWorkflowEvent[] {
  const filter = AUDIT_FILTERS.find((item) => item.id === filterId) ?? AUDIT_FILTERS[0];
  return events.filter(filter.match);
}

export function countCriticalAuditEvents(events: DemoWorkflowEvent[]): number {
  return events.filter(
    (event) =>
      event.message.toLowerCase().includes("anomal") ||
      event.message.toLowerCase().includes("retard") ||
      event.message.toLowerCase().includes("sla"),
  ).length;
}

export function getAuditActionLabel(action?: string): string | undefined {
  if (!action) {
    return undefined;
  }

  return workflowActionLabels[action as DemoTransitionAction] ?? action;
}
