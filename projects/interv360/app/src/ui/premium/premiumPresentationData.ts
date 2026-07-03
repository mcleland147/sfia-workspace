export {
  COMMAND_CENTER_ACTIVITY,
  COMMAND_CENTER_CHANNEL_DIST,
  COMMAND_CENTER_INTERVENTIONS,
  COMMAND_CENTER_OPS_STATUS,
  COMMAND_CENTER_STATUS_DIST,
  COMMAND_CENTER_TEAM,
  getCommandCenterKpis,
  getFocusPresentationItems,
  getPresentationRef,
  type ActivityPresentationEntry,
  type CommandCenterKpi,
  type FocusPresentationItem,
  type TeamPresentationEntry,
} from "../dashboard/commandCenterPresentation";

import type { DemoRequest } from "../../domain/requestStatus";
import { getPresentationRef } from "../dashboard/commandCenterPresentation";

const PRESENTATION_CLIENTS: Record<string, string> = {
  "SAV-DEMO-001": "Garage Martin",
  "SAV-DEMO-002": "Centre Auto Lille",
  "SAV-DEMO-003": "Mécanique Rousseau",
};

const PRESENTATION_ASSIGNEES: Record<string, string> = {
  "SAV-DEMO-001": "A. Moreau",
  "SAV-DEMO-002": "M. Dumas",
  "SAV-DEMO-003": "N. Perrin",
};

const PRESENTATION_STATUS: Record<string, string> = {
  "SAV-DEMO-001": "À qualifier",
  "SAV-DEMO-002": "À qualifier",
  "SAV-DEMO-003": "Qualifiée",
};

const PRESENTATION_PRIORITY: Record<string, string> = {
  "SAV-DEMO-001": "Haute",
  "SAV-DEMO-002": "Haute",
  "SAV-DEMO-003": "Haute",
};

const PRESENTATION_CHANNEL: Record<string, string> = {
  "SAV-DEMO-001": "CRM",
  "SAV-DEMO-002": "Email",
  "SAV-DEMO-003": "Manuel",
};

export interface PremiumRequestRow {
  requestId: string;
  ref: string;
  client: string;
  statusLabel: string;
  priorityLabel: string;
  channelLabel: string;
  assignee: string;
  dateLabel: string;
  indicator: "retard" | "anomalie" | null;
  indicatorLabel?: string;
}

export function getPremiumRequestRows(requests: DemoRequest[]): PremiumRequestRow[] {
  return requests.map((request) => ({
    requestId: request.id,
    ref: getPresentationRef(request.id),
    client: PRESENTATION_CLIENTS[request.id] ?? request.customerLabel,
    statusLabel: PRESENTATION_STATUS[request.id] ?? request.status,
    priorityLabel: PRESENTATION_PRIORITY[request.id] ?? "Normale",
    channelLabel: PRESENTATION_CHANNEL[request.id] ?? request.channelLabel ?? "—",
    assignee: PRESENTATION_ASSIGNEES[request.id] ?? "—",
    dateLabel: request.requestedDate ?? "—",
    indicator:
      request.id === "SAV-DEMO-003"
        ? "anomalie"
        : request.id === "SAV-DEMO-001" || request.id === "SAV-DEMO-002"
          ? "retard"
          : null,
    indicatorLabel:
      request.id === "SAV-DEMO-001"
        ? "+3h20"
        : request.id === "SAV-DEMO-002"
          ? "+2h15"
          : request.id === "SAV-DEMO-003"
            ? "Intégr."
            : undefined,
  }));
}

export function getPremiumClientName(requestId: string, fallback: string): string {
  return PRESENTATION_CLIENTS[requestId] ?? fallback;
}

export function getPremiumAssignee(requestId: string, fallback?: string): string {
  return PRESENTATION_ASSIGNEES[requestId] ?? fallback ?? "—";
}
