import type { DemoRequest, RequestStatus } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import { getAssignmentDisplay } from "../requests/requestIndicators";

export type UiIndicator = "retard" | "anomalie" | null;

const CLOSED_STATUSES: RequestStatus[] = ["STAT-06", "STAT-07"];

export function isOpenRequest(request: DemoRequest): boolean {
  return !CLOSED_STATUSES.includes(request.status);
}

export function getUiIndicator(request: DemoRequest): UiIndicator {
  if (
    request.priority === "high" &&
    request.criticality === "urgent" &&
    isOpenRequest(request)
  ) {
    return "retard";
  }

  if (request.criticality === "sensitive" && isOpenRequest(request)) {
    return "anomalie";
  }

  if (
    request.criticality === "urgent" &&
    request.status === "STAT-03"
  ) {
    return "retard";
  }

  return null;
}

export function countOpenRequests(requests: DemoRequest[]): number {
  return requests.filter(isOpenRequest).length;
}

export function countByStatus(
  requests: DemoRequest[],
  status: RequestStatus,
): number {
  return requests.filter((request) => request.status === status).length;
}

export function countWithIndicator(
  requests: DemoRequest[],
  indicator: Exclude<UiIndicator, null>,
): number {
  return requests.filter((request) => getUiIndicator(request) === indicator)
    .length;
}

export function getQualificationLoadPercent(requests: DemoRequest[]): number {
  if (requests.length === 0) {
    return 0;
  }

  const qualifiedOrBeyond = requests.filter(
    (request) => request.status !== "STAT-01" || request.criticality !== "urgent",
  ).length;

  return Math.round((qualifiedOrBeyond / requests.length) * 100);
}

export function getFocusRequests(requests: DemoRequest[]): DemoRequest[] {
  return requests
    .filter((request) => {
      const indicator = getUiIndicator(request);
      return (
        isOpenRequest(request) &&
        (indicator !== null || request.priority === "high")
      );
    })
    .slice(0, 3);
}

export interface TeamLoadEntry {
  initials: string;
  name: string;
  role: string;
  total: number;
  critical: number;
  loadPercent: number;
  available: boolean;
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getTeamLoad(requests: DemoRequest[]): TeamLoadEntry[] {
  const byAssignee = new Map<string, DemoRequest[]>();

  for (const request of requests) {
    const assignee = getAssignmentDisplay(request) ?? "Non affecté";
    const bucket = byAssignee.get(assignee) ?? [];
    bucket.push(request);
    byAssignee.set(assignee, bucket);
  }

  return [...byAssignee.entries()].map(([name, assigneeRequests]) => {
    const critical = assigneeRequests.filter(
      (request) => getUiIndicator(request) !== null,
    ).length;
    const total = assigneeRequests.length;
    const loadPercent = Math.min(100, total * 25 + critical * 15);

    return {
      initials: getInitials(name),
      name,
      role: "Technicien SAV",
      total,
      critical,
      loadPercent,
      available: loadPercent < 70,
    };
  });
}

export interface ActivityEntry {
  time: string;
  actor: string;
  action: string;
  ref: string;
  tone: "info" | "warning" | "danger" | "success";
}

export function getRecentActivity(requests: DemoRequest[]): ActivityEntry[] {
  const entries: ActivityEntry[] = [];

  for (const request of requests) {
    const indicator = getUiIndicator(request);

    if (indicator === "retard") {
      entries.push({
        time: "14:30",
        actor: "Moteur de règles",
        action: "SLA dépassé — suivi requis",
        ref: request.id,
        tone: "warning",
      });
    }

    if (indicator === "anomalie") {
      entries.push({
        time: "09:15",
        actor: "Système",
        action: "Anomalie d'intégration signalée",
        ref: request.id,
        tone: "danger",
      });
    }

    if (request.channelLabel) {
      entries.push({
        time: "09:00",
        actor: request.requesterName ?? "Demandeur",
        action: `Demande reçue via ${request.channelLabel}`,
        ref: request.id,
        tone: "info",
      });
    }
  }

  return entries.slice(0, 5);
}

export interface PlanningEntry {
  time: string;
  client: string;
  tech: string;
  initials: string;
  status: string;
  done: boolean;
}

export function getTodayInterventions(requests: DemoRequest[]): PlanningEntry[] {
  return requests
    .filter((request) => request.status === "STAT-02" || request.status === "STAT-03")
    .slice(0, 3)
    .map((request, index) => ({
      time: index === 0 ? "09:30" : index === 1 ? "11:00" : "14:30",
      client: request.customerLabel,
      tech: getAssignmentDisplay(request) ?? "Technicien SAV",
      initials: getInitials(getAssignmentDisplay(request) ?? "TS"),
      status: request.status === "STAT-03" ? "En cours" : "Confirmée",
      done: request.status === "STAT-03",
    }));
}

export interface DistributionEntry {
  label: string;
  count: number;
  color: string;
}

export function getStatusDistribution(
  requests: DemoRequest[],
): DistributionEntry[] {
  const statuses: RequestStatus[] = [
    "STAT-01",
    "STAT-02",
    "STAT-03",
    "STAT-05",
    "STAT-06",
  ];
  const colors: Record<string, string> = {
    "STAT-01": "#f59e0b",
    "STAT-02": "#10b981",
    "STAT-03": "#3b82f6",
    "STAT-05": "#f97316",
    "STAT-06": "#64748b",
  };

  return statuses
    .map((status) => ({
      label: getRequestStatusLabel(status),
      count: countByStatus(requests, status),
      color: colors[status] ?? "#94a3b8",
    }))
    .filter((entry) => entry.count > 0);
}

export function getChannelDistribution(
  requests: DemoRequest[],
): DistributionEntry[] {
  const counts = new Map<string, number>();

  for (const request of requests) {
    const channel = request.channelLabel ?? "Autre";
    counts.set(channel, (counts.get(channel) ?? 0) + 1);
  }

  const palette = ["#7c3aed", "#3b82f6", "#64748b", "#0d9488"];

  return [...counts.entries()].map(([label, count], index) => ({
    label,
    count,
    color: palette[index % palette.length],
  }));
}
