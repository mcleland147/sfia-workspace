import type { DemoRequest } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import { getAssignmentDisplay } from "../requests/requestIndicators";
import { getUiIndicator } from "./requestDashboardStats";

/** Présentation UI premium — références affichées type Figma, IDs métier conservés en interne. */
const PRESENTATION_REFS: Record<string, string> = {
  "SAV-DEMO-001": "DEM-2481",
  "SAV-DEMO-002": "DEM-2480",
  "SAV-DEMO-003": "DEM-2475",
};

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

export function getPresentationRef(requestId: string): string {
  return PRESENTATION_REFS[requestId] ?? requestId;
}

export interface CommandCenterKpi {
  label: string;
  value: string;
  trend: string;
  trendGood: boolean | null;
  tone: string;
  spark: number[];
}

export function getCommandCenterKpis(_requests: DemoRequest[]): CommandCenterKpi[] {
  return [
    {
      label: "Demandes ouvertes",
      value: "10",
      trend: "+2",
      trendGood: false,
      tone: "teal",
      spark: [30, 55, 45, 70, 40, 80, 75],
    },
    {
      label: "À qualifier",
      value: "3",
      trend: "+1",
      trendGood: false,
      tone: "amber",
      spark: [20, 40, 30, 55, 35, 60, 50],
    },
    {
      label: "En retard",
      value: "3",
      trend: "-1",
      trendGood: true,
      tone: "orange",
      spark: [60, 50, 65, 45, 55, 40, 42],
    },
    {
      label: "Anomalies",
      value: "2",
      trend: "stable",
      trendGood: null,
      tone: "rose",
      spark: [15, 25, 20, 30, 25, 28, 25],
    },
    {
      label: "Planifiées auj.",
      value: "3",
      trend: "stable",
      trendGood: null,
      tone: "blue",
      spark: [40, 35, 50, 45, 55, 50, 48],
    },
    {
      label: "Charge qualif.",
      value: "70%",
      trend: "-5%",
      trendGood: true,
      tone: "purple",
      spark: [80, 75, 85, 72, 78, 68, 70],
    },
  ];
}

export interface FocusPresentationItem {
  requestId: string;
  ref: string;
  client: string;
  statusLabel: string;
  priorityLabel: string;
  indicator: "retard" | "anomalie" | null;
  tag: string;
  tagTone: "orange" | "rose" | "amber";
  assignee: string;
  initials: string;
  canal?: string;
  dateLabel?: string;
}

const FOCUS_PRESENTATION_META: Record<
  string,
  Pick<FocusPresentationItem, "statusLabel" | "priorityLabel" | "indicator" | "tag" | "tagTone">
> = {
  "SAV-DEMO-001": {
    statusLabel: "À qualifier",
    priorityLabel: "Haute",
    indicator: "retard",
    tag: "Retard +3h20",
    tagTone: "orange",
  },
  "SAV-DEMO-002": {
    statusLabel: "À qualifier",
    priorityLabel: "Haute",
    indicator: "retard",
    tag: "Retard +2h15",
    tagTone: "orange",
  },
  "SAV-DEMO-003": {
    statusLabel: "Qualifiée",
    priorityLabel: "Haute",
    indicator: "anomalie",
    tag: "Anomalie intégr.",
    tagTone: "rose",
  },
};

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getFocusPresentationItems(
  requests: DemoRequest[],
): FocusPresentationItem[] {
  const ordered = ["SAV-DEMO-001", "SAV-DEMO-002", "SAV-DEMO-003"]
    .map((id) => requests.find((request) => request.id === id))
    .filter((request): request is DemoRequest => request !== undefined);

  const pool = ordered.length > 0 ? ordered : requests.slice(0, 3);

  return pool.map((request) => {
    const assignee =
      PRESENTATION_ASSIGNEES[request.id] ??
      getAssignmentDisplay(request) ??
      "Non affecté";
    const meta = FOCUS_PRESENTATION_META[request.id];

    return {
      requestId: request.id,
      ref: getPresentationRef(request.id),
      client: PRESENTATION_CLIENTS[request.id] ?? request.customerLabel,
      statusLabel: meta?.statusLabel ?? getRequestStatusLabel(request.status),
      priorityLabel:
        meta?.priorityLabel ??
        (request.priority === "high"
          ? "Haute"
          : request.priority === "low"
            ? "Basse"
            : "Normale"),
      indicator: meta?.indicator ?? getUiIndicator(request),
      tag:
        meta?.tag ??
        (getUiIndicator(request) === "retard" ? "Retard" : "Anomalie"),
      tagTone:
        meta?.tagTone ??
        (getUiIndicator(request) === "anomalie" ? "rose" : "orange"),
      assignee,
      initials: getInitials(assignee),
      canal: request.channelLabel,
      dateLabel: request.requestedDate,
    };
  });
}

export interface TeamPresentationEntry {
  initials: string;
  name: string;
  role: string;
  total: number;
  critical: number;
  loadPercent: number;
  available: boolean;
}

export const COMMAND_CENTER_TEAM: TeamPresentationEntry[] = [
  {
    initials: "AM",
    name: "A. Moreau",
    role: "Technicien SAV",
    total: 4,
    critical: 2,
    loadPercent: 80,
    available: false,
  },
  {
    initials: "NP",
    name: "N. Perrin",
    role: "Technicien SAV",
    total: 3,
    critical: 0,
    loadPercent: 60,
    available: true,
  },
  {
    initials: "MD",
    name: "M. Dumas",
    role: "Technicien SAV",
    total: 2,
    critical: 1,
    loadPercent: 40,
    available: true,
  },
  {
    initials: "SB",
    name: "S. Bernard",
    role: "Superviseur SAV",
    total: 1,
    critical: 0,
    loadPercent: 20,
    available: true,
  },
];

export interface ActivityPresentationEntry {
  time: string;
  actor: string;
  action: string;
  ref: string;
  refTone: string;
  dot: string;
}

export const COMMAND_CENTER_ACTIVITY: ActivityPresentationEntry[] = [
  {
    time: "15:18",
    actor: "A. Moreau",
    action: "Note ajoutée",
    ref: "DEM-2481",
    refTone: "#0f766e",
    dot: "#3b82f6",
  },
  {
    time: "14:30",
    actor: "Système",
    action: "SLA dépassé · +3h20",
    ref: "DEM-2481",
    refTone: "#f97316",
    dot: "#f97316",
  },
  {
    time: "10:02",
    actor: "S. Bernard",
    action: "Demande affectée",
    ref: "DEM-2481",
    refTone: "#0f766e",
    dot: "#7c3aed",
  },
  {
    time: "09:15",
    actor: "Système CRM",
    action: "Anomalie d'intégration",
    ref: "DEM-2478",
    refTone: "#f43f5e",
    dot: "#f43f5e",
  },
  {
    time: "09:00",
    actor: "Système CRM",
    action: "Import CRM · 3 demandes",
    ref: "",
    refTone: "#0f766e",
    dot: "#0d9488",
  },
];

export interface InterventionPresentationEntry {
  time: string;
  client: string;
  tech: string;
  initials: string;
  status: string;
  done: boolean;
}

export const COMMAND_CENTER_INTERVENTIONS: InterventionPresentationEntry[] = [
  {
    time: "09:30",
    client: "Garage du Parc",
    tech: "N. Perrin",
    initials: "NP",
    status: "En cours",
    done: true,
  },
  {
    time: "11:00",
    client: "Auto Services Lyon",
    tech: "A. Moreau",
    initials: "AM",
    status: "Confirmée",
    done: false,
  },
  {
    time: "14:30",
    client: "Atelier Durand",
    tech: "S. Bernard",
    initials: "SB",
    status: "Confirmée",
    done: false,
  },
];

export interface DistributionPresentationEntry {
  label: string;
  count: number;
  color: string;
}

export const COMMAND_CENTER_STATUS_DIST: DistributionPresentationEntry[] = [
  { label: "À qualifier", count: 3, color: "#f59e0b" },
  { label: "Qualifiées", count: 4, color: "#3b82f6" },
  { label: "Planifiées", count: 3, color: "#10b981" },
  { label: "En retard", count: 3, color: "#f97316" },
  { label: "Anomalies", count: 2, color: "#f43f5e" },
];

export const COMMAND_CENTER_CHANNEL_DIST: DistributionPresentationEntry[] = [
  { label: "CRM", count: 6, color: "#7c3aed" },
  { label: "Email", count: 3, color: "#3b82f6" },
  { label: "Manuel", count: 1, color: "#94a3b8" },
];

export const COMMAND_CENTER_OPS_STATUS = {
  toQualify: 3,
  late: 3,
  anomalies: 2,
  qualificationLoad: 70,
};
