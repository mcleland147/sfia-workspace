export type RequestStatus =
  | "STAT-01"
  | "STAT-02"
  | "STAT-03"
  | "STAT-04"
  | "STAT-06";

export interface DemoRequest {
  id: string;
  title: string;
  customerLabel: string;
  siteLabel: string;
  status: RequestStatus;
  assignedTechnicianLabel?: string;
  description?: string;
  priorityLabel?: string;
  createdAtLabel?: string;
  qualificationSummary?: string;
  qualificationChecklist?: string[];
  qualificationReadonlyNotes?: string;
}
