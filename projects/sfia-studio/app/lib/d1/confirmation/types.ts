/** D1-C4 — Human confirmation & bounded Project mutation (candidate contracts). */

export const CONFIRMATION_SCHEMA_VERSION = "0.1.0-d1-c4" as const;

export const CONFIRMATION_ACTION_TYPES = [
  "CREATE_PROJECT",
  "CONFIRM_EXISTING_PROJECT_CONTEXT",
  "ANALYZE_ONLY",
  "CANCEL",
] as const;
export type ConfirmationActionType = (typeof CONFIRMATION_ACTION_TYPES)[number];

export const MUTATION_STATUSES = [
  "SUCCEEDED",
  "ALREADY_APPLIED",
  "CANCELLED",
  "CONFLICT",
  "REJECTED",
  "FAILED",
  "NO_MUTATION",
] as const;
export type MutationStatus = (typeof MUTATION_STATUSES)[number];

export interface ProjectDraftFields {
  name: string;
  objective: string;
  initialContextSummary: string;
  activate: boolean;
}

export interface ConfirmationIntent {
  schemaVersion: typeof CONFIRMATION_SCHEMA_VERSION;
  confirmationId: string;
  sessionLocalId: string;
  proposalId: string;
  matchId: string | null;
  actionType: ConfirmationActionType;
  targetProjectId: string | null;
  projectDraft: ProjectDraftFields | null;
  /** Snapshot version/updatedAt for conflict detection on existing project. */
  expectedProjectVersion: number | null;
  expectedUpdatedAt: string | null;
  idempotencyKey: string;
  confirmedAt: string;
  confirmedBy: string;
  requiresHumanConfirmation: true;
  /** Server-enforced explicit confirmation marker. */
  explicitConfirmation: true;
}

export interface ConfirmationSummary {
  actionLabel: string;
  targetLabel: string;
  consequences: string[];
  dataToPersist: string[];
  warnings: string[];
  irreversibleEffects: string[];
  confirmationRequired: true;
}

export interface BoundedMutationResult {
  schemaVersion: typeof CONFIRMATION_SCHEMA_VERSION;
  mutationId: string;
  confirmationId: string;
  status: MutationStatus;
  actionType: ConfirmationActionType;
  projectId: string | null;
  idempotentReplay: boolean;
  auditEventId: string | null;
  occurredAt: string;
  warnings: string[];
  errorCode: string | null;
  /** Honest note when existing project has no persistence contract. */
  persistenceNote: string | null;
  summary: ConfirmationSummary | null;
}

export interface ExecuteConfirmationInput {
  sessionLocalId: string;
  proposalId: string;
  matchId: string | null;
  actionType: ConfirmationActionType;
  targetProjectId: string | null;
  projectDraft: ProjectDraftFields | null;
  expectedProjectVersion: number | null;
  expectedUpdatedAt: string | null;
  idempotencyKey: string;
  /** Must be true — no implicit confirmation. */
  explicitConfirmation: boolean;
  /** Optional pre-generated confirmation id (client may send; server may replace). */
  confirmationId?: string;
}

export const EXISTING_PROJECT_PERSISTENCE_NOTE =
  "EXISTING PROJECT CONFIRMATION PERSISTENCE NOT IMPLEMENTED — DOMAIN CONTRACT REQUIRED" as const;
