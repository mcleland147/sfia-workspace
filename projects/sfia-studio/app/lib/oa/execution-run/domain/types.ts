/**
 * D2-D1 Execution Run — canonical domain vocabulary (twelve functional objects).
 * Pure domain: no Next/Node/fs/process/network/SDK/AJV.
 * Authority: sole D2-D technical state authority (TECH-RUN-B).
 */

export const EXECUTION_RUN_SCHEMA_VERSION = "0.1.0-d2d1" as const;

/** Eight persistent states exactly (FD-02). No STATE-B. */
export type ExecutionState =
  | "idle"
  | "running"
  | "awaiting_human"
  | "succeeded"
  | "failed"
  | "cancelled"
  | "timed_out"
  | "blocked";

export const EXECUTION_STATES: readonly ExecutionState[] = [
  "idle",
  "running",
  "awaiting_human",
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "blocked",
] as const;

export type TerminalExecutionState =
  | "succeeded"
  | "failed"
  | "cancelled"
  | "timed_out"
  | "blocked";

export const TERMINAL_STATES: readonly TerminalExecutionState[] = [
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "blocked",
] as const;

export type ExecutionSource = "fixture" | "sandbox-real" | "real";

export type Completeness = "complete" | "partial";

export type ProviderLane = "ai" | "git" | "cursor" | "none";

export type FailureFamily =
  | "validation"
  | "authentication"
  | "authorization"
  | "provider_unavailable"
  | "rate_limited"
  | "timed_out"
  | "cancelled"
  | "sandbox_blocked"
  | "protected_path"
  | "mutation_forbidden"
  | "human_gate_required"
  | "invalid_provider_result"
  | "internal_normalized_failure"
  | "source_mismatch";

export type FailureCode =
  | "VALIDATION_ERROR"
  | "AUTHENTICATION_ERROR"
  | "AUTHORIZATION_ERROR"
  | "PROVIDER_UNAVAILABLE"
  | "RATE_LIMITED"
  | "TIMED_OUT"
  | "CANCELLED"
  | "SANDBOX_BLOCKED"
  | "PROTECTED_PATH"
  | "MUTATION_FORBIDDEN"
  | "HUMAN_GATE_REQUIRED"
  | "INVALID_PROVIDER_RESULT"
  | "INTERNAL_NORMALIZED_FAILURE"
  | "SOURCE_MISMATCH";

/** 1. ExecutionIntent */
export type ExecutionIntent = {
  readonly intentId: string;
  readonly correlationId: string;
  readonly requestedLane: ProviderLane;
  readonly operation: string;
  readonly requestedSource: ExecutionSource;
  readonly requiresHumanGate: boolean;
  readonly mutationRequested: boolean;
  readonly arbitraryCommandRequested: boolean;
  readonly targetPath?: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
};

/** 2. ExecutionContext */
export type ExecutionContext = {
  readonly projectId: string;
  readonly workspaceId?: string;
  readonly actorId: string;
  readonly declaredSource: ExecutionSource;
  readonly allowlistRepos?: readonly string[];
  readonly protectedPaths?: readonly string[];
  readonly permissions: {
    readonly gitRead: boolean;
    readonly gitWrite: boolean;
    readonly providerInvoke: boolean;
  };
};

/** 3. ProviderCapabilityDescriptor — provider-independent */
export type ProviderCapabilityDescriptor = {
  readonly lane: ProviderLane;
  readonly capabilityId: string;
  readonly available: boolean;
  readonly verified: boolean;
  readonly readOnly: boolean;
  readonly supportsCancellation: boolean;
  readonly supportsTimeout: boolean;
};

/** 4. ValidationOutcome */
export type ValidationOutcome =
  | {
      readonly ok: true;
      readonly validatedAt: string;
    }
  | {
      readonly ok: false;
      readonly validatedAt: string;
      readonly failure: NormalizedFailure;
    };

/** 6. ExecutionState — see union above */

/** 7. ExternalResult */
export type ExternalResult =
  | {
      readonly kind: "success";
      readonly completeness: Completeness;
      readonly redactedSummary: string;
      readonly rawPresent: false;
    }
  | {
      readonly kind: "failure";
      readonly failure: NormalizedFailure;
    }
  | {
      readonly kind: "empty";
    };

/** 8. ExecutionEvidence */
export type ExecutionEvidence = {
  readonly evidenceId: string;
  readonly runId: string;
  readonly correlationId: string;
  readonly source: ExecutionSource;
  readonly completeness: Completeness;
  readonly producedAt: string;
  readonly digest?: string;
  readonly summary: string;
  readonly late: boolean;
  readonly official: true;
};

/** 9. SourceDisclosure */
export type SourceDisclosure = {
  readonly source: ExecutionSource;
  readonly providerLane: ProviderLane;
  readonly limits: readonly string[];
  readonly processLocalMemory: boolean;
  readonly cursorUnverified: boolean;
};

/** 10. HumanDecisionGate */
export type HumanDecisionGate = {
  readonly gateId: string;
  readonly question: string;
  readonly required: boolean;
  readonly decision?: "approve" | "reject" | "cancel";
  readonly decidedAt?: string;
  readonly expiresAt?: string;
};

/** 11. UsageSummary — T1 optional transport fields are additive (no Money). */
export type UsageSummary =
  | {
      readonly status: "validated";
      readonly inputTokens?: number;
      readonly outputTokens?: number;
      readonly totalTokens?: number;
      readonly unit?: string;
      readonly model?: string;
      readonly providerResponseId?: string;
    }
  | {
      readonly status: "unavailable";
      readonly reason: string;
      readonly model?: string;
      readonly providerResponseId?: string;
    }
  | {
      readonly status: "invalid";
      readonly reason: string;
      readonly model?: string;
      readonly providerResponseId?: string;
    };

/** 12. NormalizedFailure */
export type NormalizedFailure = {
  readonly family: FailureFamily;
  readonly code: FailureCode;
  readonly userMessage: string;
  readonly technicalDetailsRedacted: true;
  readonly retryable: boolean;
  readonly correlationId: string;
};

/** 5. ExecutionRun — aggregate holding state authority fields */
export type ExecutionRun = {
  readonly schemaVersion: typeof EXECUTION_RUN_SCHEMA_VERSION;
  readonly runId: string;
  readonly correlationId: string;
  readonly state: ExecutionState;
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly disclosure: SourceDisclosure;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly version: number;
  readonly validation?: ValidationOutcome;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly gate?: HumanDecisionGate;
  readonly externalResult?: ExternalResult;
  readonly evidence?: readonly ExecutionEvidence[];
  readonly usage: UsageSummary;
  readonly failure?: NormalizedFailure;
  readonly blockedReason?: string;
  /** Process-local memory disclosure (STORE-B stage 1). */
  readonly persistence: {
    readonly kind: "memory_process_local";
    readonly durable: false;
    readonly multiInstance: false;
    readonly restartSafe: false;
  };
};

export function isTerminalState(state: ExecutionState): state is TerminalExecutionState {
  return (TERMINAL_STATES as readonly string[]).includes(state);
}
