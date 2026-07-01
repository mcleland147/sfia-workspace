export type RequestStatus =
  | "STAT-01"
  | "STAT-02"
  | "STAT-03"
  | "STAT-04"
  | "STAT-06";

export type RequestPriority = "low" | "medium" | "high";

export type RequestCriticality = "standard" | "sensitive" | "urgent";

export type TransitionAction =
  | "qualify"
  | "plan"
  | "complete_intervention"
  | "close_report";

export type WorkflowEventType =
  | "qualification.confirmed"
  | "planning.confirmed"
  | "intervention.completed"
  | "report.closed";

export interface DemoRequest {
  id: string;
  title: string;
  status: RequestStatus;
  priority: RequestPriority;
  criticality: RequestCriticality;
  customerLabel: string;
  siteLabel: string;
  assignedTechnicianLabel: string | null;
  createdAt: string;
  updatedAt: string;
  detailId: string;
  isDemo: true;
}

export interface DemoRequestDetail {
  id: string;
  requestId: string;
  category: string;
  channel: string;
  impact: string;
  requestedDate: string;
  equipmentLabel: string;
  businessImpact: string;
  demoCenter: string;
  description: string;
  readonlyBlocks: {
    qualification: Record<string, unknown>;
    planning: Record<string, unknown>;
    intervention: Record<string, unknown>;
    report: Record<string, unknown>;
  };
}

export interface WorkflowEvent {
  id: string;
  requestId: string;
  type: WorkflowEventType;
  fromStatus: RequestStatus;
  toStatus: RequestStatus;
  label: string;
  createdAt: string;
  source: "demo";
  isDemo: true;
}

export interface ApiErrorBody {
  error: {
    code: string;
    message: string;
  };
}

export type StoreErrorCode =
  | "REQUEST_NOT_FOUND"
  | "INVALID_TRANSITION_ACTION"
  | "TRANSITION_NOT_ALLOWED"
  | "DEMO_MODE_REQUIRED";

export class StoreError extends Error {
  constructor(
    public readonly code: StoreErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "StoreError";
  }
}
