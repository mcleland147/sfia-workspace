export type RequestStatus =
  | "STAT-01"
  | "STAT-02"
  | "STAT-03"
  | "STAT-04"
  | "STAT-05"
  | "STAT-06"
  | "STAT-07";

export type RequestPriority = "low" | "medium" | "high";

export type RequestCriticality = "standard" | "sensitive" | "urgent";

export type DemoWorkflowEventType =
  | "qualification.confirmed"
  | "planning.confirmed"
  | "intervention.completed"
  | "report.closed"
  | "hold.placed"
  | "hold.resumed"
  | "request.cancelled"
  | "request.requalified";

export const requestStatusLabels: Record<RequestStatus, string> = {
  "STAT-01": "Qualifiée",
  "STAT-02": "Planifiée",
  "STAT-03": "En cours de traitement",
  "STAT-04": "Intervention réalisée",
  "STAT-05": "En attente",
  "STAT-06": "Clôturée",
  "STAT-07": "Annulée",
};

export function getRequestStatusLabel(status: RequestStatus): string {
  return requestStatusLabels[status];
}

export interface DemoWorkflowEvent {
  type: DemoWorkflowEventType;
  requestId: string;
  fromStatus: RequestStatus;
  toStatus: RequestStatus;
  message: string;
  createdAt: string;
  action?: string;
  actorUserId?: string;
  actorDisplayName?: string;
  actorRole?: string;
}

export interface DemoRequest {
  id: string;
  title: string;
  customerLabel: string;
  siteLabel: string;
  status: RequestStatus;
  priority: RequestPriority;
  criticality: RequestCriticality;
  requesterName?: string;
  requesterTeam?: string;
  assignedToUserId?: string;
  assignedToDisplayName?: string;
  categoryLabel?: string;
  channelLabel?: string;
  impactLabel?: string;
  requestedDate?: string;
  equipmentLabel?: string;
  businessImpact?: string;
  siteDetailLabel?: string;
  assignedTechnicianLabel?: string;
  description?: string;
  createdAtLabel?: string;
  qualificationSummary?: string;
  qualificationChecklist?: string[];
  qualificationReadonlyNotes?: string;
  planningSlotLabel?: string;
  planningTechnicianLabel?: string;
  planningReadonlyNotes?: string;
  interventionLocationLabel?: string;
  interventionWindowLabel?: string;
  interventionReadonlyNotes?: string;
  interventionSafetyChecklist?: string[];
  reportSummaryLabel?: string;
  reportResultLabel?: string;
  reportReadonlyNotes?: string;
  reportChecklist?: string[];
}
