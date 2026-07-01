export type RequestStatus =
  | "STAT-01"
  | "STAT-02"
  | "STAT-03"
  | "STAT-04"
  | "STAT-06";

export type RequestPriority = "low" | "medium" | "high";

export type RequestCriticality = "standard" | "sensitive" | "urgent";

export type DemoWorkflowEventType =
  | "qualification.confirmed"
  | "planning.confirmed"
  | "intervention.completed"
  | "report.closed";

export interface DemoWorkflowEvent {
  type: DemoWorkflowEventType;
  requestId: string;
  fromStatus: RequestStatus;
  toStatus: RequestStatus;
  message: string;
  createdAt: string;
}

export interface DemoRequest {
  id: string;
  title: string;
  customerLabel: string;
  siteLabel: string;
  status: RequestStatus;
  priority: RequestPriority;
  criticality: RequestCriticality;
  categoryLabel?: string;
  channelLabel?: string;
  impactLabel?: string;
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
