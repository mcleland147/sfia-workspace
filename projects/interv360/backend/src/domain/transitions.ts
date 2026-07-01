import type {
  RequestStatus,
  TransitionAction,
  WorkflowEventType,
} from "./types.js";

export type TransitionSuccess = {
  ok: true;
  fromStatus: RequestStatus;
  toStatus: RequestStatus;
  type: WorkflowEventType;
  label: string;
};

export type TransitionFailure = {
  ok: false;
  code: "INVALID_TRANSITION_ACTION" | "TRANSITION_NOT_ALLOWED";
};

export type TransitionResult = TransitionSuccess | TransitionFailure;

const TRANSITION_TABLE: Record<
  TransitionAction,
  {
    from: RequestStatus;
    to: RequestStatus;
    type: WorkflowEventType;
    label: string;
  }
> = {
  qualify: {
    from: "STAT-01",
    to: "STAT-02",
    type: "qualification.confirmed",
    label: "Qualification fictive confirmée",
  },
  plan: {
    from: "STAT-02",
    to: "STAT-03",
    type: "planning.confirmed",
    label: "Planification fictive confirmée",
  },
  complete_intervention: {
    from: "STAT-03",
    to: "STAT-04",
    type: "intervention.completed",
    label: "Intervention fictive réalisée",
  },
  close_report: {
    from: "STAT-04",
    to: "STAT-06",
    type: "report.closed",
    label: "Compte rendu fictif clôturé",
  },
};

const VALID_ACTIONS = new Set<string>(Object.keys(TRANSITION_TABLE));

export function resolveTransition(
  currentStatus: RequestStatus,
  action: string,
): TransitionResult {
  if (!VALID_ACTIONS.has(action)) {
    return { ok: false, code: "INVALID_TRANSITION_ACTION" };
  }

  if (currentStatus === "STAT-06") {
    return { ok: false, code: "TRANSITION_NOT_ALLOWED" };
  }

  const rule = TRANSITION_TABLE[action as TransitionAction];
  if (currentStatus !== rule.from) {
    return { ok: false, code: "TRANSITION_NOT_ALLOWED" };
  }

  return {
    ok: true,
    fromStatus: rule.from,
    toStatus: rule.to,
    type: rule.type,
    label: rule.label,
  };
}
