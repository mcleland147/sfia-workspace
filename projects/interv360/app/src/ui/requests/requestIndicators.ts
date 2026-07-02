import type {
  DemoRequest,
  RequestCriticality,
  RequestPriority,
} from "../../domain/requestStatus";

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

export function getPriorityBadgeClass(priority: RequestPriority): string {
  return `request-badge request-badge--priority-${priority}`;
}

export function getCriticalityBadgeClass(
  criticality: RequestCriticality,
): string {
  return `request-badge request-badge--criticality-${criticality}`;
}

export function getRequesterDisplay(request: DemoRequest): string {
  return request.requesterName ?? request.customerLabel;
}

export function getAssignmentDisplay(
  request: DemoRequest,
): string | undefined {
  return request.assignedToDisplayName ?? request.assignedTechnicianLabel;
}

export function buildRequestSearchHaystack(request: DemoRequest): string {
  return [
    request.id,
    request.title,
    request.status,
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
