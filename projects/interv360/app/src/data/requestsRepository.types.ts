import type {
  DemoRequest,
  DemoWorkflowEvent,
  RequestStatus,
} from "../domain/requestStatus";

export type DataSourceMode = "local" | "api";

export type DemoTransitionAction =
  | "qualify"
  | "plan"
  | "complete_intervention"
  | "close_report"
  | "put_on_hold"
  | "resume"
  | "cancel"
  | "requalify";

export const workflowActionLabels: Record<DemoTransitionAction, string> = {
  qualify: "Qualifier la demande",
  plan: "Planifier l'intervention",
  complete_intervention: "Marquer l'intervention réalisée",
  close_report: "Clôturer avec compte rendu fictif",
  put_on_hold: "Mettre en attente",
  resume: "Reprendre",
  requalify: "Requalifier",
  cancel: "Annuler la demande",
};

export interface RequestsRepository {
  listRequests(): Promise<DemoRequest[]>;
  getRequestById(id: string): Promise<DemoRequest | undefined>;
  listEventsForRequest(id: string): Promise<DemoWorkflowEvent[]>;
  applyTransition(
    id: string,
    action: DemoTransitionAction,
  ): Promise<DemoRequest | undefined>;
  resetDemo(): Promise<void>;
}

export class RequestsRepositoryError extends Error {
  readonly code: string;

  constructor(message: string, code: string = "UNKNOWN_ERROR") {
    super(message);
    this.name = "RequestsRepositoryError";
    this.code = code;
  }
}

export function getAvailableWorkflowActions(
  status: RequestStatus,
): DemoTransitionAction[] {
  switch (status) {
    case "STAT-01":
      return ["qualify", "cancel"];
    case "STAT-02":
      return ["plan", "requalify", "cancel"];
    case "STAT-03":
      return ["complete_intervention", "put_on_hold", "requalify", "cancel"];
    case "STAT-04":
      return ["close_report"];
    case "STAT-05":
      return ["resume", "requalify", "cancel"];
    case "STAT-06":
    case "STAT-07":
      return [];
    default:
      return [];
  }
}

/** @deprecated Use getAvailableWorkflowActions for multi-action statuses. */
export function getTransitionActionForStatus(
  status: RequestStatus,
): DemoTransitionAction | undefined {
  return getAvailableWorkflowActions(status)[0];
}

export function getWorkflowActionLabel(action: DemoTransitionAction): string {
  return workflowActionLabels[action];
}
