/** D1-I1 Project Foundation — domain types (bounded). */

export const D1_SCHEMA_VERSION = "0.1.0-d1" as const;

/** Method modes authorized for I1 — no V3-ADOPTED / V3-IMPLEMENTED claims. */
export const METHOD_MODES = ["SFIA_V2_6", "TRANSITION", "V3_CANDIDATE"] as const;
export type MethodMode = (typeof METHOD_MODES)[number];

/**
 * D1-C1: MethodMode is governance/system data, not a user product choice.
 * Manual creation uses this internal default (transitory prototype).
 */
export const D1_GOVERNANCE_METHOD_MODE: MethodMode = "V3_CANDIDATE";

export const PROJECT_STATES = ["DRAFT", "ACTIVE"] as const;
export type ProjectState = (typeof PROJECT_STATES)[number];

export const AUDIT_EVENT_TYPES = [
  "PROJECT_CREATED",
  "PROJECT_MODE_SELECTED",
  "PROJECT_ACTIVATED",
] as const;
export type D1AuditEventType = (typeof AUDIT_EVENT_TYPES)[number];

/** I1 temporary mono-operator — owner == decision maker (explicit). */
export const D1_MONO_OPERATOR_ACTOR_ID = "actor-mono-i1" as const;
export const D1_DEFAULT_WORKSPACE_ID = "ws-studio-default" as const;

export interface D1Project {
  projectId: string;
  workspaceId: string;
  name: string;
  objective: string;
  initialContextSummary: string | null;
  methodMode: MethodMode | null;
  state: ProjectState;
  ownerActorId: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface D1Assignment {
  principalId: string;
  projectId: string;
  role: "project_owner" | "decision_maker";
  createdAt: string;
}

export interface D1AuditEvent {
  eventId: string;
  eventType: D1AuditEventType;
  occurredAt: string;
  actorId: string;
  correlationId: string;
  projectId: string;
  payloadJson: string;
}

export interface CreateProjectInput {
  name: string;
  objective: string;
  initialContextSummary?: string;
  methodMode: MethodMode;
  activate: boolean;
  idempotencyKey: string;
  correlationId?: string;
}

export interface SelectMethodModeInput {
  projectId: string;
  methodMode: MethodMode;
  expectedVersion: number;
  activate?: boolean;
  correlationId?: string;
}

export const METHOD_MODE_LABELS: Record<MethodMode, string> = {
  SFIA_V2_6: "SFIA v2.6 (baseline opérationnelle)",
  TRANSITION: "Transition v2.6 → v3 candidate",
  V3_CANDIDATE: "SFIA v3.0 candidate (Studio-native) — non adopté",
};

export const METHOD_MODE_CLAIMS: Record<MethodMode, string> = {
  SFIA_V2_6: "Baseline v2.6 active. Aucun claim v3.",
  TRANSITION: "Mode transition. Pas d’adoption v3.",
  V3_CANDIDATE:
    "Claim limité à V3-MODELED CANDIDATE / prototype. Interdit : V3-ADOPTED, V3-IMPLEMENTED global.",
};
