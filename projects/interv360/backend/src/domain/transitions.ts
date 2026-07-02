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

type TransitionRule = {
  action: TransitionAction;
  from: RequestStatus | RequestStatus[];
  to: RequestStatus;
  type: WorkflowEventType;
  label: string;
};

const TERMINAL_STATUSES = new Set<RequestStatus>(["STAT-06", "STAT-07"]);

const TRANSITION_RULES: TransitionRule[] = [
  {
    action: "qualify",
    from: "STAT-01",
    to: "STAT-02",
    type: "qualification.confirmed",
    label: "Qualification fictive confirmée",
  },
  {
    action: "plan",
    from: "STAT-02",
    to: "STAT-03",
    type: "planning.confirmed",
    label: "Planification fictive confirmée",
  },
  {
    action: "complete_intervention",
    from: "STAT-03",
    to: "STAT-04",
    type: "intervention.completed",
    label: "Intervention fictive réalisée",
  },
  {
    action: "close_report",
    from: "STAT-04",
    to: "STAT-06",
    type: "report.closed",
    label: "Compte rendu fictif clôturé",
  },
  {
    action: "put_on_hold",
    from: "STAT-03",
    to: "STAT-05",
    type: "hold.placed",
    label: "Demande fictive mise en attente",
  },
  {
    action: "resume",
    from: "STAT-05",
    to: "STAT-03",
    type: "hold.resumed",
    label: "Reprise fictive du traitement",
  },
  {
    action: "cancel",
    from: ["STAT-01", "STAT-02", "STAT-03", "STAT-05"],
    to: "STAT-07",
    type: "request.cancelled",
    label: "Demande fictive annulée",
  },
];

const VALID_ACTIONS = new Set<string>(
  TRANSITION_RULES.map((rule) => rule.action),
);

function matchesFrom(
  currentStatus: RequestStatus,
  from: RequestStatus | RequestStatus[],
): boolean {
  return Array.isArray(from)
    ? from.includes(currentStatus)
    : currentStatus === from;
}

export function resolveTransition(
  currentStatus: RequestStatus,
  action: string,
): TransitionResult {
  if (!VALID_ACTIONS.has(action)) {
    return { ok: false, code: "INVALID_TRANSITION_ACTION" };
  }

  if (TERMINAL_STATUSES.has(currentStatus)) {
    return { ok: false, code: "TRANSITION_NOT_ALLOWED" };
  }

  const rule = TRANSITION_RULES.find(
    (entry) =>
      entry.action === action && matchesFrom(currentStatus, entry.from),
  );

  if (!rule) {
    return { ok: false, code: "TRANSITION_NOT_ALLOWED" };
  }

  const fromStatus = Array.isArray(rule.from)
    ? currentStatus
    : rule.from;

  return {
    ok: true,
    fromStatus,
    toStatus: rule.to,
    type: rule.type,
    label: rule.label,
  };
}
