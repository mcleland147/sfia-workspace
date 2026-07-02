import type {
  DemoRequest,
  DemoWorkflowEvent,
  DemoWorkflowEventType,
  RequestCriticality,
  RequestPriority,
  RequestStatus,
} from "../domain/requestStatus";
import type { ApplyTransitionOptions, RequestsRepository } from "./requestsRepository.types";
import { RequestsRepositoryError } from "./requestsRepository.types";

const DEFAULT_API_BASE_URL = "http://localhost:3001/api/v1";

interface ApiListItem {
  id: string;
  title: string;
  status: RequestStatus;
  priority: RequestPriority;
  criticality: RequestCriticality;
  customerLabel: string;
  siteLabel: string;
  assignedTechnicianLabel: string | null;
  requesterName?: string;
  requesterTeam?: string;
  assignedToUserId?: string;
  assignedToDisplayName?: string;
  createdAt: string;
  updatedAt: string;
  detailId: string;
  isDemo: true;
}

interface ApiDetailPayload {
  request: ApiListItem;
  detail: {
    id: string;
    requestId: string;
    category: string;
    channel: string;
    impact: string;
    requestedDate?: string;
    equipmentLabel?: string;
    businessImpact?: string;
    demoCenter: string;
    description: string;
    readonlyBlocks: {
      qualification: Record<string, unknown>;
      planning: Record<string, unknown>;
      intervention: Record<string, unknown>;
      report: Record<string, unknown>;
    };
  };
}

interface ApiWorkflowEvent {
  id: string;
  requestId: string;
  type: DemoWorkflowEventType;
  fromStatus: RequestStatus;
  toStatus: RequestStatus;
  label: string;
  createdAt: string;
  source: "demo";
  isDemo: true;
  action?: string;
  actorUserId?: string;
  actorDisplayName?: string;
  actorRole?: string;
}

interface ApiErrorBody {
  error?: {
    code?: string;
    message?: string;
  };
}

function getApiBaseUrl(): string {
  return import.meta.env.VITE_INTERV360_API_BASE_URL ?? DEFAULT_API_BASE_URL;
}

function formatIsoLabel(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return `${iso} (fictif)`;
  }

  return `${date.toLocaleString("fr-FR")} (fictif)`;
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function asStringArray(value: unknown): string[] | undefined {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : undefined;
}

function mapRequestModelFields(
  item: Pick<
    ApiListItem,
    | "requesterName"
    | "requesterTeam"
    | "assignedToUserId"
    | "assignedToDisplayName"
  >,
): Pick<
  DemoRequest,
  | "requesterName"
  | "requesterTeam"
  | "assignedToUserId"
  | "assignedToDisplayName"
> {
  const mapped: Pick<
    DemoRequest,
    | "requesterName"
    | "requesterTeam"
    | "assignedToUserId"
    | "assignedToDisplayName"
  > = {};

  if (item.requesterName) {
    mapped.requesterName = item.requesterName;
  }
  if (item.requesterTeam) {
    mapped.requesterTeam = item.requesterTeam;
  }
  if (item.assignedToUserId) {
    mapped.assignedToUserId = item.assignedToUserId;
  }
  if (item.assignedToDisplayName) {
    mapped.assignedToDisplayName = item.assignedToDisplayName;
  }

  return mapped;
}

function mapApiDetailToDemoRequest(payload: ApiDetailPayload): DemoRequest {
  const { request, detail } = payload;
  const qualification = detail.readonlyBlocks.qualification;
  const planning = detail.readonlyBlocks.planning;
  const intervention = detail.readonlyBlocks.intervention;
  const report = detail.readonlyBlocks.report;

  return {
    id: request.id,
    title: request.title,
    customerLabel: request.customerLabel,
    siteLabel: request.siteLabel,
    status: request.status,
    priority: request.priority,
    criticality: request.criticality,
    ...mapRequestModelFields(request),
    categoryLabel: detail.category,
    channelLabel: detail.channel,
    impactLabel: detail.impact,
    requestedDate: detail.requestedDate
      ? formatIsoLabel(detail.requestedDate)
      : undefined,
    equipmentLabel: detail.equipmentLabel,
    businessImpact: detail.businessImpact,
    siteDetailLabel: detail.demoCenter,
    assignedTechnicianLabel: request.assignedTechnicianLabel ?? undefined,
    description: detail.description,
    createdAtLabel: formatIsoLabel(request.createdAt),
    qualificationSummary: asString(qualification.summary),
    qualificationChecklist: asStringArray(qualification.checklist),
    qualificationReadonlyNotes: asString(qualification.notes),
    planningSlotLabel: asString(planning.slot),
    planningTechnicianLabel: asString(planning.technician),
    planningReadonlyNotes: asString(planning.notes),
    interventionLocationLabel: asString(intervention.location),
    interventionWindowLabel: asString(intervention.window),
    interventionReadonlyNotes: asString(intervention.notes),
    interventionSafetyChecklist: asStringArray(intervention.safetyChecklist),
    reportSummaryLabel: asString(report.summary),
    reportResultLabel: asString(report.result),
    reportReadonlyNotes: asString(report.notes),
    reportChecklist: asStringArray(report.checklist),
  };
}

function mapListItemToDemoRequest(item: ApiListItem): DemoRequest {
  return {
    id: item.id,
    title: item.title,
    customerLabel: item.customerLabel,
    siteLabel: item.siteLabel,
    status: item.status,
    priority: item.priority,
    criticality: item.criticality,
    ...mapRequestModelFields(item),
    assignedTechnicianLabel: item.assignedTechnicianLabel ?? undefined,
    createdAtLabel: formatIsoLabel(item.createdAt),
  };
}

function mapApiEvent(event: ApiWorkflowEvent): DemoWorkflowEvent {
  const mapped: DemoWorkflowEvent = {
    type: event.type,
    requestId: event.requestId,
    fromStatus: event.fromStatus,
    toStatus: event.toStatus,
    message: event.label,
    createdAt: formatIsoLabel(event.createdAt),
  };

  if (event.action) {
    mapped.action = event.action;
  }
  if (event.actorUserId) {
    mapped.actorUserId = event.actorUserId;
  }
  if (event.actorDisplayName) {
    mapped.actorDisplayName = event.actorDisplayName;
  }
  if (event.actorRole) {
    mapped.actorRole = event.actorRole;
  }

  return mapped;
}

async function parseApiError(response: Response): Promise<never> {
  try {
    const body = (await response.json()) as ApiErrorBody;
    throw new RequestsRepositoryError(
      body.error?.message ?? "Request failed",
      body.error?.code ?? "UNKNOWN_ERROR",
    );
  } catch (error) {
    if (error instanceof RequestsRepositoryError) {
      throw error;
    }

    throw new RequestsRepositoryError("Request failed", "UNKNOWN_ERROR");
  }
}

async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  try {
    return await fetch(`${getApiBaseUrl()}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
    });
  } catch {
    throw new RequestsRepositoryError(
      "Backend indisponible en mode API local. Vérifiez que le backend Interv360 est lancé.",
      "BACKEND_UNAVAILABLE",
    );
  }
}

export function createApiRequestsRepository(): RequestsRepository {
  return {
    listRequests: async () => {
      const response = await apiFetch("/requests");
      if (!response.ok) {
        await parseApiError(response);
      }

      const body = (await response.json()) as { items: ApiListItem[] };
      return body.items.map(mapListItemToDemoRequest);
    },

    getRequestById: async (id) => {
      const response = await apiFetch(`/requests/${encodeURIComponent(id)}`);
      if (response.status === 404) {
        return undefined;
      }

      if (!response.ok) {
        await parseApiError(response);
      }

      const body = (await response.json()) as ApiDetailPayload;
      return mapApiDetailToDemoRequest(body);
    },

    listEventsForRequest: async (id) => {
      const response = await apiFetch(
        `/requests/${encodeURIComponent(id)}/events`,
      );
      if (response.status === 404) {
        return [];
      }

      if (!response.ok) {
        await parseApiError(response);
      }

      const body = (await response.json()) as { items: ApiWorkflowEvent[] };
      return body.items.map(mapApiEvent);
    },

    applyTransition: async (
      id,
      action,
      options?: ApplyTransitionOptions,
    ) => {
      const payload: { action: string; actorUserId?: string } = { action };
      if (options?.actorUserId) {
        payload.actorUserId = options.actorUserId;
      }

      const response = await apiFetch(
        `/requests/${encodeURIComponent(id)}/transitions`,
        {
          method: "POST",
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        await parseApiError(response);
      }

      const body = (await response.json()) as {
        request: ApiListItem;
      };

      return mapListItemToDemoRequest(body.request);
    },

    resetDemo: async () => {
      const response = await apiFetch("/demo/reset", { method: "POST" });
      if (!response.ok) {
        await parseApiError(response);
      }
    },
  };
}
