/**
 * T-A1 Project / LPS Foundation — domain types (Option A v3-native).
 * Modeled schemas are the reference contract; adoption is T-A1-scoped only.
 */

import type {
  ActorReference,
  Digest,
  DoctrinePackagePin,
  DoctrinePackageRef,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine";
export type {
  ActorReference,
  Digest,
  DoctrinePackagePin,
  DoctrinePackageRef,
  ProvenanceRecord,
};

export const MAX_LPS_SNAPSHOT_BYTES = 256_000 as const;

export type ProjectStatus =
  | "draft"
  | "active"
  | "paused"
  | "closed"
  | "archived";

export type LivingProjectStateStatus =
  | "active"
  | "stale"
  | "conflict"
  | "superseded";

export type Project = {
  schemaVersion: "0.1.0-oa";
  projectId: string;
  title: string;
  status: ProjectStatus;
  currentLpsVersionId?: string;
  doctrinePackageRef?: DoctrinePackageRef;
  activeCycleInstanceId?: string;
  createdAt: string;
  updatedAt?: string;
  createdBy: ActorReference;
  provenance?: ProvenanceRecord;
};

export type LivingProjectState = {
  schemaVersion: "0.1.0-oa";
  lpsVersionId: string;
  projectId: string;
  version: number;
  supersedesLpsVersionId?: string;
  status: LivingProjectStateStatus;
  objective: string;
  context?: string;
  scope?: string;
  constraints?: string[];
  stakeholders?: string[];
  doctrinePackageRef: DoctrinePackageRef;
  ckcResolutionRef?: string;
  activeCycleInstanceId?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  epistemicItemIds?: string[];
  decisionIds?: string[];
  reservationIds?: string[];
  contradictionIds?: string[];
  evidenceIds?: string[];
  debtItemIds?: string[];
  riskItemIds?: string[];
  reviewBundleIds?: string[];
  maturityAssessmentId?: string;
  nextStep?: string;
  createdAt: string;
  createdBy: ActorReference;
  correlationId?: string;
  provenance?: ProvenanceRecord;
  uiOwnership?: false;
};

export type CreateProjectRequest = {
  projectId: string;
  title: string;
  objective: string;
  doctrinePackagePin: DoctrinePackagePin;
  createdBy: ActorReference;
  correlationId?: string;
  idempotencyKey?: string;
  /** Optional explicit LPS id; otherwise generated. */
  lpsVersionId?: string;
  context?: string;
  scope?: string;
};

export type AppendLivingProjectStateRequest = {
  projectId: string;
  expectedVersion: number;
  objective: string;
  createdBy: ActorReference;
  correlationId?: string;
  lpsVersionId?: string;
  context?: string;
  scope?: string;
  /**
   * Optional pin echo — must match Project.doctrinePackageRef (id+version+digest).
   * No re-resolve; mismatch → DOCTRINE_UNRESOLVED / LPS_INVALID.
   */
  doctrinePackagePin?: DoctrinePackagePin;
};

/** Modeled ErrorRecord codes applicable to Project/LPS (M-OA). */
export type ProjectModeledErrorCode =
  | "DOCTRINE_UNRESOLVED"
  | "STATE_CONFLICT";

/**
 * T-A1 detail codes — finer than modeled ErrorRecord enum.
 * Mapped onto ProjectModeledErrorCode for ErrorRecord-compatible emission (T-A1-D08).
 */
export type ProjectDetailCode =
  | "PROJECT_INVALID"
  | "PROJECT_ALREADY_EXISTS"
  | "PROJECT_NOT_FOUND"
  | "LPS_NOT_FOUND"
  | "LPS_VERSION_CONFLICT"
  | "LPS_INVALID"
  | "DOCTRINE_UNRESOLVED"
  | "PERSISTENCE_FAILURE";

export type ProjectStructuredError = {
  code: ProjectModeledErrorCode;
  detailCode: ProjectDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "C";
  correlationId?: string;
  projectId?: string;
  lpsVersionId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  doctrinePackageId?: string;
  version?: string;
  provenance?: ProvenanceRecord;
  timestamp: string;
  /** Opaque internal cause — never exposed to clients. */
  internalCauseRef?: string;
};

export type CreateProjectSuccess = {
  ok: true;
  project: Project;
  livingProjectState: LivingProjectState;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
};

export type CreateProjectFailure = {
  ok: false;
  error: ProjectStructuredError;
  durationMs: number;
};

export type CreateProjectResult = CreateProjectSuccess | CreateProjectFailure;

export type GetProjectSuccess = {
  ok: true;
  project: Project;
};

export type GetProjectFailure = {
  ok: false;
  error: ProjectStructuredError;
};

export type GetProjectResult = GetProjectSuccess | GetProjectFailure;

export type GetLpsSuccess = {
  ok: true;
  livingProjectState: LivingProjectState;
};

export type GetLpsFailure = {
  ok: false;
  error: ProjectStructuredError;
};

export type GetLpsResult = GetLpsSuccess | GetLpsFailure;

export type AppendLpsSuccess = {
  ok: true;
  project: Project;
  livingProjectState: LivingProjectState;
  previousLpsVersionId: string;
  durationMs: number;
};

export type AppendLpsFailure = {
  ok: false;
  error: ProjectStructuredError;
  durationMs: number;
};

export type AppendLpsResult = AppendLpsSuccess | AppendLpsFailure;
