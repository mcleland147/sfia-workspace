import type {
  DemoRequest,
  RequestCriticality,
  RequestPriority,
  RequestStatus,
} from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";

const PRIORITY_LABELS: Record<RequestPriority, string> = {
  low: "Basse",
  medium: "Moyenne",
  high: "Haute",
};

const CRITICALITY_LABELS: Record<RequestCriticality, string> = {
  standard: "Standard",
  sensitive: "Sensible",
  urgent: "Urgente",
};

export function getPriorityLabel(priority: RequestPriority): string {
  return PRIORITY_LABELS[priority];
}

export function getCriticalityLabel(criticality: RequestCriticality): string {
  return CRITICALITY_LABELS[criticality];
}

export function getStatusBadgeClass(status: RequestStatus): string {
  return `request-badge request-badge--status request-badge--status-${status}`;
}

export function getPriorityBadgeClass(priority: RequestPriority): string {
  const tone =
    priority === "high"
      ? "request-badge--danger"
      : priority === "medium"
        ? "request-badge--warning"
        : "request-badge--neutral";

  return `request-badge request-badge--priority request-badge--priority-${priority} ${tone}`;
}

export function getCriticalityBadgeClass(
  criticality: RequestCriticality,
): string {
  const tone =
    criticality === "urgent"
      ? "request-badge--danger"
      : criticality === "sensitive"
        ? "request-badge--warning"
        : "request-badge--neutral";

  return `request-badge request-badge--criticality request-badge--criticality-${criticality} ${tone}`;
}

export function getChannelBadgeClass(): string {
  return "request-badge request-badge--channel request-badge--info";
}

export function getIndicatorBadgeClass(
  indicator: "retard" | "anomalie",
): string {
  return indicator === "retard"
    ? "request-badge request-badge--warning"
    : "request-badge request-badge--danger";
}

export function getRequesterDisplay(request: DemoRequest): string {
  return request.requesterName ?? request.customerLabel;
}

export function getAssignmentDisplay(
  request: DemoRequest,
): string | undefined {
  return request.assignedToDisplayName ?? request.assignedTechnicianLabel;
}

export function getStatusBadgeLabel(status: RequestStatus): string {
  return getRequestStatusLabel(status);
}

export function buildRequestSearchHaystack(request: DemoRequest): string {
  return [
    request.id,
    request.title,
    request.status,
    getRequestStatusLabel(request.status),
    request.priority,
    request.criticality,
    getPriorityLabel(request.priority),
    getCriticalityLabel(request.criticality),
    request.customerLabel,
    request.requesterName,
    request.requesterTeam,
    request.assignedToDisplayName,
    request.assignedToUserId,
    request.siteLabel,
    request.categoryLabel,
    request.channelLabel,
    request.impactLabel,
    request.equipmentLabel,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}
