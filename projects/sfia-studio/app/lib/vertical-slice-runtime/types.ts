import "./serverGuard";
import type {
  LocalAuditStatus,
  LocalProjectCreationView,
  LocalProjectError,
  LocalProjectErrorCode,
  PerceivedCriticality,
} from "@/lib/vertical-slice-core";
import type {
  RuntimeDisclosures,
  RuntimeReadinessProjection,
} from "./disclosures";

export type RuntimeCriticality = PerceivedCriticality;

/**
 * Serializable Create Project input for future Server Actions / UI.
 * `criticality` maps to V1 `perceivedCriticality` without duplicating T-A1 rules.
 */
export interface CreateProjectRuntimeInput {
  readonly name: string;
  readonly objective: string;
  readonly context: string;
  readonly criticality: RuntimeCriticality;
  readonly constraints: readonly string[];
  readonly shortReference?: string;
  readonly idempotencyKey: string;
}

export interface RuntimeDoctrineState {
  readonly id: string;
  readonly version: string;
  readonly digest: string;
  readonly status: string;
}

export interface RuntimeLivingProjectState {
  readonly id: string;
  readonly version: number;
  readonly createdAt: string;
  readonly activeCycleInstanceId?: string | null;
  readonly ckcResolutionRef?: string | null;
}

export interface RuntimeProjectState {
  readonly projectId: string;
  readonly name: string;
  readonly shortReference?: string;
  readonly objective: string;
  readonly contextSummary: string;
  readonly criticality: RuntimeCriticality;
  readonly constraints: readonly string[];
  readonly localMode: true;
  readonly source: "REAL_LOCAL_CORE";
  readonly fixture: false;
}

export interface RuntimeErrorDto {
  readonly code: LocalProjectErrorCode;
  readonly message: string;
  readonly retryable: boolean;
  readonly field?: string;
  readonly doctrineDetailCode?: string;
  readonly projectDetailCode?: string;
}

export type CreateProjectRuntimeResult =
  | {
      readonly ok: true;
      readonly projectId: string;
      readonly project: RuntimeProjectState;
      readonly doctrine: RuntimeDoctrineState;
      readonly livingState: RuntimeLivingProjectState;
      readonly readiness: RuntimeReadinessProjection;
      readonly disclosures: RuntimeDisclosures;
      readonly reusedFromIdempotencyKey: boolean;
      readonly auditStatus: LocalAuditStatus;
    }
  | {
      readonly ok: false;
      readonly error: RuntimeErrorDto;
      readonly disclosures: RuntimeDisclosures;
      readonly auditStatus: LocalAuditStatus;
    };

export type GetProjectRuntimeResult =
  | {
      readonly ok: true;
      readonly project: RuntimeProjectState;
      readonly livingState: RuntimeLivingProjectState;
      readonly doctrine: RuntimeDoctrineState;
      readonly readiness: RuntimeReadinessProjection;
      readonly disclosures: RuntimeDisclosures;
    }
  | {
      readonly ok: false;
      readonly error: RuntimeErrorDto;
      readonly disclosures: RuntimeDisclosures;
    };

/** @deprecated Prefer LocalProjectCreationView typing via mapping helpers. */
export type RuntimeProjectView = LocalProjectCreationView;

export type { LocalProjectError };
