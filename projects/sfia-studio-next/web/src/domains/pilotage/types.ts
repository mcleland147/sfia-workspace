import type { CkiAvailability } from "@/domains/pilotage/cki-resolve";
import type { CycleType } from "@/domains/pilotage/cki-resolve";

/** Internal command outcomes. PARTIAL is intentionally absent: CLOSE+OPEN share one commit. */
export const COMMAND_STATUSES = [
  "APPLIED",
  "ALREADY_APPLIED",
  "REJECTED",
  "CONFLICT",
  "UNKNOWN",
] as const;

export type CommandStatus = (typeof COMMAND_STATUSES)[number];

export const PILOTAGE_OPERATIONS = [
  "PROPOSE_TRAJECTORY",
  "RETAIN_TRAJECTORY",
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "REVOKE_DECISION",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "RECORD_DECISION",
  "REVISE_DECISION",
] as const;

export type PilotageOperation = (typeof PILOTAGE_OPERATIONS)[number];

export const SOURCE_KINDS = ["USER_MESSAGE", "EXPLICIT_INTERACTION", "COGNITIVE_PROPOSAL"] as const;

export type SourceKind = (typeof SOURCE_KINDS)[number];

export type CommandEffectView = {
  effectKind: string;
  targetRef: string;
  outcome: string;
  ordinal: number;
};

export type CommandResult = {
  status: CommandStatus;
  commandId: string | null;
  projectId: string;
  revision: number | null;
  decisionId: string | null;
  effects: CommandEffectView[];
  reason?: string;
  reasonCode?: string;
};

export type PilotageRequestBody = {
  clientCommandKey?: string;
  expectedRevision?: number;
  operation?: string;
  utterance?: string;
  sourceKind?: string;
  sourceRef?: string;
  objective?: string;
  cycleType?: string;
  cycleId?: string;
  toCycleType?: string;
  orientation?: string;
  trajectoryRevisionId?: string;
  methodRef?: string;
  methodVersion?: string;
  decisionId?: string;
  restrictionId?: string;
  targetKind?: string;
  targetRef?: string;
  statement?: string;
  balanceNote?: string;
  /** Stable id of one human gesture. Reused on retry; a new gesture sends a new id. */
  actInstanceId?: string;
  /** Exact decision object. Empty does not participate in contradiction matching. */
  objectRef?: string;
};

export type ClassifiedCommand = {
  operation: PilotageOperation;
  sourceActionKey: string;
  sourceKind: SourceKind;
  sourceRef: string;
  objective: string;
  cycleType: CycleType | null;
  cycleId: string | null;
  toCycleType: CycleType | null;
  orientation: string;
  trajectoryRevisionId: string | null;
  methodRef: string;
  methodVersion: string;
  decisionId: string | null;
  restrictionId: string | null;
  targetKind: string;
  targetRef: string;
  statement: string;
  balanceNote: string;
  actInstanceId: string;
  objectRef: string;
};

export type TrajectoryView = {
  id: string;
  revisionNumber: number;
  status: string;
  orientation: string;
  decisionId: string | null;
} | null;

export type PilotageProjection = {
  projectId: string;
  revision: number;
  trajectory: {
    retained: TrajectoryView;
    proposed: TrajectoryView;
  };
  cycle: {
    id: string;
    cycleType: string;
    status: string;
    objective: string;
    revision: number;
    cki: {
      ckiId: string;
      pinnedVersion: string | null;
      contentDigest: string | null;
      manifestRef: string | null;
      pinOrigin: string | null;
      availability: CkiAvailability;
    };
  } | null;
  method:
    | { presence: "ABSENT"; usageRestricted: false }
    | {
        presence: "RETAINED";
        usageRestricted: boolean;
        /** Set when usageRestricted: the retained method is not fully applicable. */
        usageNote: string | null;
        methodRef: string;
        methodVersion: string;
        decisionId: string;
        applicationId: string;
        scope: string;
      };
  restrictions: Array<{ id: string; targetKind: string; targetRef: string; status: string }>;
};

export function pilotageCommandHttpStatus(result: CommandResult): number {
  if (result.status === "CONFLICT") return 409;
  if (
    result.status === "REJECTED" &&
    (result.reasonCode === "AMBIGUOUS" || result.reasonCode === "INVALID")
  ) {
    return 400;
  }
  if (result.status === "UNKNOWN") return 503;
  return 200;
}
