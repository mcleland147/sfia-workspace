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
  | "close_report";

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

export function getTransitionActionForStatus(
  status: RequestStatus,
): DemoTransitionAction | undefined {
  switch (status) {
    case "STAT-01":
      return "qualify";
    case "STAT-02":
      return "plan";
    case "STAT-03":
      return "complete_intervention";
    case "STAT-04":
      return "close_report";
    default:
      return undefined;
  }
}
