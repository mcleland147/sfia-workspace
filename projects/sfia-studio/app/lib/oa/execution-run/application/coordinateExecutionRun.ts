import { normalizedFailure } from "../domain/errors";
import {
  validateUntrustedProviderRequest,
  validateUntrustedProviderResult,
} from "../domain/providerBoundary";
import { evaluateSandboxPath } from "../domain/sandboxContract";
import type {
  ExecutionContext,
  ExecutionIntent,
  ExecutionRun,
  ExecutionSource,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
  ProviderLane,
  UsageSummary,
} from "../domain/types";
import type { ClockPort } from "../ports/clockPort";
import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
import type {
  ExecutionEvent,
  ExecutionEventSinkPort,
} from "../ports/executionEventSinkPort";
import type { GitReadPort } from "../ports/gitReadPort";
import type { AiExecutionPort } from "../ports/aiExecutionPort";
import type {
  AiCompletionRequest,
  CursorFixtureRequest,
  GitReadRequest,
  ProviderInvocationResult,
} from "../ports/providerResult";
import type { FinOpsCapturePort } from "../../finops/ports/finopsCapturePort";
import type { FinOpsCaptureDiagnostic } from "../../finops/application/types";
import {
  invokeWithTimeoutAndCancellation,
  type InvokeOutcome,
} from "./providerInvocation";
import type { CreateExecutionRunResult } from "./createExecutionRun";
import type { TransitionExecutionRunResult } from "./transitionExecutionRun";
import {
  readUntrustedPlainData,
  sanitizeLateEvidenceSummary,
} from "./untrustedExecutionData";

/**
 * Local D2-D3 implementation bound only.
 * Not a platform-wide timeout decision; future extension requires a dedicated cycle.
 */
export const MAX_COORDINATOR_TIMEOUT_MS = 60_000;

export type CoordinateProviderRequest =
  | AiCompletionRequest
  | GitReadRequest
  | CursorFixtureRequest;

export type ExecutionAuthority = {
  readonly createExecutionRun: (
    input: unknown,
  ) => Promise<CreateExecutionRunResult>;
  readonly transitionExecutionRun: (
    input: unknown,
  ) => Promise<TransitionExecutionRunResult>;
};

/**
 * Injection surface for the coordinator.
 * `availableSources` is intentionally absent — D2-D3 proves fixture only via
 * internal preflight, never via caller-supplied source authority.
 */
export type CoordinateExecutionRunDependencies = {
  readonly execution: ExecutionAuthority;
  readonly providers: {
    readonly ai: AiExecutionPort;
    readonly git: GitReadPort;
    readonly cursor: CursorExecutionPort;
  };
  readonly events: ExecutionEventSinkPort;
  readonly clock: ClockPort;
  /** Optional FinOps T1 capture boundary — absent ⇒ not_attempted/disabled. */
  readonly finops?: FinOpsCapturePort;
};

export type CoordinateExecutionRunInput = {
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly providerRequest?: CoordinateProviderRequest;
  readonly timeoutMs: number;
  readonly signal?: AbortSignal;
  /** Deterministic evidence-only simulation after a failed/cancelled/timed-out terminal. */
  readonly lateEvidenceSummary?: string;
};

export type EventDeliveryStatus = "complete" | "degraded";

export type CoordinateExecutionRunResult =
  | {
      readonly ok: true;
      readonly run: ExecutionRun;
      readonly providerAttempted: boolean;
      readonly providerInvoked: boolean;
      readonly providerCompleted: boolean;
      readonly stateTrace: readonly ExecutionRun["state"][];
      readonly validatedUsage: UsageSummary;
      readonly finopsCapture: FinOpsCaptureDiagnostic;
      readonly lateEvidenceRecorded: boolean;
      readonly eventDelivery: {
        readonly status: EventDeliveryStatus;
        readonly failureCount: number;
      };
    }
  | {
      readonly ok: false;
      readonly failure: NormalizedFailure;
      readonly run?: ExecutionRun;
      readonly providerAttempted: boolean;
      readonly providerInvoked: boolean;
      readonly providerCompleted: boolean;
      readonly stateTrace: readonly ExecutionRun["state"][];
      readonly validatedUsage: UsageSummary;
      readonly finopsCapture: FinOpsCaptureDiagnostic;
      readonly lateEvidenceRecorded: boolean;
      readonly eventDelivery: {
        readonly status: EventDeliveryStatus;
        readonly failureCount: number;
      };
    };

type PreflightOk = {
  readonly ok: true;
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly providerRequest: CoordinateProviderRequest | undefined;
  readonly timeoutMs: number;
  readonly signal: AbortSignal | undefined;
  readonly lateEvidenceSummary: unknown;
  readonly correlationId: string;
};

type PreflightFail = {
  readonly ok: false;
  readonly failure: NormalizedFailure;
};

type EventTracker = {
  failureCount: number;
};

const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];
const ALLOWED_SOURCES: readonly ExecutionSource[] = [
  "fixture",
  "sandbox-real",
  "real",
];

function unavailableUsage(reason: string): UsageSummary {
  return { status: "unavailable", reason };
}

function validatedUsage(input: unknown): UsageSummary {
  if (!input || typeof input !== "object") {
    return unavailableUsage("provider_usage_unavailable");
  }
  const usage = input as Record<string, unknown>;
  if (usage.status === "invalid") {
    return {
      status: "invalid",
      reason:
        typeof usage.reason === "string"
          ? usage.reason
          : "provider_usage_invalid",
      model: typeof usage.model === "string" ? usage.model : undefined,
      providerResponseId:
        typeof usage.providerResponseId === "string"
          ? usage.providerResponseId
          : undefined,
    };
  }
  if (usage.status === "unavailable") {
    return {
      status: "unavailable",
      reason:
        typeof usage.reason === "string"
          ? usage.reason
          : "provider_usage_unavailable",
      model: typeof usage.model === "string" ? usage.model : undefined,
      providerResponseId:
        typeof usage.providerResponseId === "string"
          ? usage.providerResponseId
          : undefined,
    };
  }
  if (usage.status !== "validated") {
    return unavailableUsage("provider_usage_unavailable");
  }
  for (const key of ["inputTokens", "outputTokens", "totalTokens"] as const) {
    const value = usage[key];
    if (
      value !== undefined &&
      (typeof value !== "number" || !Number.isFinite(value) || value < 0)
    ) {
      return {
        status: "invalid",
        reason: "provider_usage_invalid",
        model: typeof usage.model === "string" ? usage.model : undefined,
        providerResponseId:
          typeof usage.providerResponseId === "string"
            ? usage.providerResponseId
            : undefined,
      };
    }
  }
  if (usage.unit !== undefined && typeof usage.unit !== "string") {
    return {
      status: "invalid",
      reason: "provider_usage_invalid",
    };
  }
  return {
    status: "validated",
    inputTokens: usage.inputTokens as number | undefined,
    outputTokens: usage.outputTokens as number | undefined,
    totalTokens: usage.totalTokens as number | undefined,
    unit: usage.unit as string | undefined,
    model: typeof usage.model === "string" ? usage.model : undefined,
    providerResponseId:
      typeof usage.providerResponseId === "string"
        ? usage.providerResponseId
        : undefined,
  };
}

function finopsNotAttempted(reason: string): FinOpsCaptureDiagnostic {
  return { status: "not_attempted", reason };
}

function finopsDisabled(): FinOpsCaptureDiagnostic {
  return { status: "disabled", reason: "finops_dependency_not_injected" };
}

async function captureFinOpsAfterAiSuccess(args: {
  readonly deps: CoordinateExecutionRunDependencies;
  readonly run: ExecutionRun;
  readonly usage: UsageSummary;
  readonly providerSucceeded: boolean;
}): Promise<FinOpsCaptureDiagnostic> {
  if (args.run.intent.requestedLane !== "ai") {
    return finopsNotAttempted("non_ai_lane");
  }
  if (!args.providerSucceeded) {
    return finopsNotAttempted("provider_not_successful");
  }
  if (!args.deps.finops) {
    return finopsDisabled();
  }
  try {
    return await args.deps.finops.captureUsage({
      projectId: args.run.context.projectId,
      executionRunId: args.run.runId,
      correlationId: args.run.correlationId,
      provider: "openai",
      usage: {
        status: args.usage.status,
        ...(args.usage.status === "validated"
          ? {
              inputTokens: args.usage.inputTokens,
              outputTokens: args.usage.outputTokens,
              totalTokens: args.usage.totalTokens,
              unit: args.usage.unit,
              model: args.usage.model,
              providerResponseId: args.usage.providerResponseId,
            }
          : {
              reason: args.usage.reason,
              model: args.usage.model,
              providerResponseId: args.usage.providerResponseId,
            }),
      },
      occurredAt: args.deps.clock.nowIso(),
    });
  } catch {
    return {
      status: "failed",
      error: {
        code: "FINOPS_CAPTURE_FAILED",
        message: "FinOps capture failed",
        retryable: true,
        technicalDetailsRedacted: true,
      },
    };
  }
}

function invalidProviderFailure(correlationId: string): NormalizedFailure {
  return normalizedFailure({
    family: "invalid_provider_result",
    code: "INVALID_PROVIDER_RESULT",
    userMessage: "Provider returned an invalid or incomplete result",
    retryable: false,
    correlationId,
  });
}

function validationFailure(
  correlationId: string,
  userMessage: string,
): NormalizedFailure {
  return normalizedFailure({
    family: "validation",
    code: "VALIDATION_ERROR",
    userMessage,
    retryable: false,
    correlationId,
  });
}

function emptyDiagnostics(tracker: EventTracker) {
  return {
    providerAttempted: false,
    providerInvoked: false,
    providerCompleted: false,
    stateTrace: [] as ExecutionRun["state"][],
    validatedUsage: unavailableUsage("not_validated"),
    finopsCapture: finopsNotAttempted("preflight_or_early_exit"),
    lateEvidenceRecorded: false,
    eventDelivery: {
      status: (tracker.failureCount > 0
        ? "degraded"
        : "complete") as EventDeliveryStatus,
      failureCount: tracker.failureCount,
    },
  };
}

function safeEmit(
  deps: CoordinateExecutionRunDependencies,
  tracker: EventTracker,
  run: ExecutionRun,
  event: Pick<ExecutionEvent, "type" | "detail">,
): void {
  try {
    const result = deps.events.emit({
      ...event,
      correlationId: run.correlationId,
      runId: run.runId,
      providerLane: run.disclosure.providerLane,
      occurredAt: deps.clock.nowIso(),
    }) as unknown;
    if (
      result !== null &&
      result !== undefined &&
      typeof result === "object" &&
      typeof (result as { then?: unknown }).then === "function"
    ) {
      void Promise.resolve(result).catch(() => {
        tracker.failureCount += 1;
      });
    }
  } catch {
    tracker.failureCount += 1;
  }
}

function describeCapabilitySafe(
  lane: ProviderLane,
  deps: CoordinateExecutionRunDependencies,
  correlationId: string,
):
  | { ok: true; capability: ProviderCapabilityDescriptor }
  | { ok: false; failure: NormalizedFailure } {
  try {
    const described =
      lane === "ai"
        ? deps.providers.ai.describeCapability()
        : lane === "git"
          ? deps.providers.git.describeCapability()
          : deps.providers.cursor.describeCapability();
    const copied = readUntrustedPlainData(described, { redact: false });
    if (!copied.ok || !copied.value || typeof copied.value !== "object") {
      return {
        ok: false,
        failure: validationFailure(
          correlationId,
          "Provider capability descriptor rejected",
        ),
      };
    }
    const desc = copied.value as Record<string, unknown>;
    return {
      ok: true,
      capability: {
        lane,
        capabilityId:
          typeof desc.capabilityId === "string"
            ? desc.capabilityId
            : "unknown",
        available: desc.available === true,
        verified: false,
        readOnly: desc.readOnly === true,
        supportsCancellation: desc.supportsCancellation === true,
        supportsTimeout: desc.supportsTimeout === true,
      },
    };
  } catch {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "provider_unavailable",
        code: "PROVIDER_UNAVAILABLE",
        userMessage: "Provider capability description failed",
        retryable: true,
        correlationId,
      }),
    };
  }
}

function validateTimeout(
  value: unknown,
  correlationId: string,
): { ok: true; timeoutMs: number } | { ok: false; failure: NormalizedFailure } {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value) ||
    !Number.isInteger(value) ||
    value <= 0 ||
    value > MAX_COORDINATOR_TIMEOUT_MS
  ) {
    return {
      ok: false,
      failure: validationFailure(
        correlationId,
        "Coordinator timeoutMs must be a positive integer within the local D2-D3 bound",
      ),
    };
  }
  return { ok: true, timeoutMs: value };
}

function validatePathField(
  path: unknown,
  correlationId: string,
  allowlistRepos: readonly string[] | undefined,
  protectedPaths: readonly string[] | undefined,
): NormalizedFailure | undefined {
  if (path === undefined) return undefined;
  const decision = evaluateSandboxPath({
    path,
    allowlistRepos: allowlistRepos ?? ["projects/sfia-studio/"],
    protectedPaths: protectedPaths ?? [".env"],
  });
  if (!decision.allowed) {
    return normalizedFailure({
      family:
        decision.reason === "protected" || decision.reason === "traversal"
          ? "protected_path"
          : "validation",
      code:
        decision.reason === "protected" || decision.reason === "traversal"
          ? "PROTECTED_PATH"
          : "VALIDATION_ERROR",
      userMessage: "Path failed sandbox normalization or protection checks",
      retryable: false,
      correlationId,
    });
  }
  return undefined;
}

/**
 * Preflight without provider ports: safe-read, timeout, intent/context/source,
 * lane, correlation, provider request shape, and path guards.
 */
function preflightCoordinateInput(input: unknown): PreflightOk | PreflightFail {
  const unknownCid = "unknown";
  if (input === null || input === undefined || typeof input !== "object" || Array.isArray(input)) {
    return {
      ok: false,
      failure: validationFailure(unknownCid, "Coordinator input rejected"),
    };
  }

  // AbortSignal is a host object — extract by identity before plain-data copy.
  const signalCandidate = (input as { signal?: unknown }).signal;
  const signal =
    signalCandidate instanceof AbortSignal ? signalCandidate : undefined;

  const plainInput: Record<string, unknown> = {};
  for (const key of Object.getOwnPropertyNames(input)) {
    if (key === "signal") continue;
    const desc = Object.getOwnPropertyDescriptor(input, key);
    if (!desc || desc.get !== undefined || desc.set !== undefined) {
      return {
        ok: false,
        failure: validationFailure(unknownCid, "Coordinator input rejected"),
      };
    }
    plainInput[key] = desc.value;
  }

  const envelope = readUntrustedPlainData(plainInput, {
    redact: false,
    maxStringLength: 100_000,
  });
  if (!envelope.ok || !envelope.value || typeof envelope.value !== "object") {
    return {
      ok: false,
      failure: validationFailure(unknownCid, "Coordinator input rejected"),
    };
  }
  const raw = envelope.value as Record<string, unknown>;
  // Ignore any injected availableSources property — never treat it as authority.
  const intentRaw = raw.intent;
  const contextRaw = raw.context;
  if (!intentRaw || typeof intentRaw !== "object" || Array.isArray(intentRaw)) {
    return {
      ok: false,
      failure: validationFailure(unknownCid, "intent required"),
    };
  }
  if (
    !contextRaw ||
    typeof contextRaw !== "object" ||
    Array.isArray(contextRaw)
  ) {
    return {
      ok: false,
      failure: validationFailure(unknownCid, "context required"),
    };
  }
  const intentObj = intentRaw as Record<string, unknown>;
  const contextObj = contextRaw as Record<string, unknown>;
  const correlationId =
    typeof intentObj.correlationId === "string" && intentObj.correlationId.trim()
      ? intentObj.correlationId
      : unknownCid;

  if (
    typeof intentObj.intentId !== "string" ||
    !intentObj.intentId.trim() ||
    typeof intentObj.operation !== "string" ||
    !intentObj.operation.trim() ||
    typeof intentObj.requestedLane !== "string" ||
    !(ALLOWED_LANES as readonly string[]).includes(intentObj.requestedLane) ||
    typeof intentObj.requestedSource !== "string" ||
    !(ALLOWED_SOURCES as readonly string[]).includes(intentObj.requestedSource) ||
    typeof intentObj.requiresHumanGate !== "boolean" ||
    typeof intentObj.mutationRequested !== "boolean" ||
    typeof intentObj.arbitraryCommandRequested !== "boolean"
  ) {
    return {
      ok: false,
      failure: validationFailure(correlationId, "intent shape invalid"),
    };
  }

  if (
    typeof contextObj.projectId !== "string" ||
    typeof contextObj.actorId !== "string" ||
    typeof contextObj.declaredSource !== "string" ||
    !(ALLOWED_SOURCES as readonly string[]).includes(contextObj.declaredSource) ||
    !contextObj.permissions ||
    typeof contextObj.permissions !== "object"
  ) {
    return {
      ok: false,
      failure: validationFailure(correlationId, "context shape invalid"),
    };
  }

  // D2-D3 internal proof is fixture only. Block real / sandbox-real before any port.
  if (
    intentObj.requestedSource !== "fixture" ||
    contextObj.declaredSource !== "fixture"
  ) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "source_mismatch",
        code: "SOURCE_MISMATCH",
        userMessage:
          "D2-D3 demonstrates fixture only; real and sandbox-real remain blocked",
        retryable: false,
        correlationId,
      }),
    };
  }

  const timeout = validateTimeout(raw.timeoutMs, correlationId);
  if (!timeout.ok) return timeout;

  const permissions = contextObj.permissions as Record<string, unknown>;
  const context: ExecutionContext = {
    projectId: contextObj.projectId,
    actorId: contextObj.actorId,
    declaredSource: "fixture",
    permissions: {
      gitRead: permissions.gitRead === true,
      gitWrite: permissions.gitWrite === true,
      providerInvoke: permissions.providerInvoke === true,
    },
  };
  if (typeof contextObj.workspaceId === "string") {
    (context as { workspaceId?: string }).workspaceId = contextObj.workspaceId;
  }
  if (Array.isArray(contextObj.allowlistRepos)) {
    (context as { allowlistRepos?: string[] }).allowlistRepos =
      contextObj.allowlistRepos.filter((p) => typeof p === "string") as string[];
  }
  if (Array.isArray(contextObj.protectedPaths)) {
    (context as { protectedPaths?: string[] }).protectedPaths =
      contextObj.protectedPaths.filter((p) => typeof p === "string") as string[];
  }

  const intent: ExecutionIntent = {
    intentId: intentObj.intentId,
    correlationId,
    requestedLane: intentObj.requestedLane as ProviderLane,
    operation: intentObj.operation,
    requestedSource: "fixture",
    requiresHumanGate: intentObj.requiresHumanGate,
    mutationRequested: intentObj.mutationRequested,
    arbitraryCommandRequested: intentObj.arbitraryCommandRequested,
  };
  if (typeof intentObj.targetPath === "string") {
    (intent as { targetPath?: string }).targetPath = intentObj.targetPath;
  }
  if (
    intentObj.metadata &&
    typeof intentObj.metadata === "object" &&
    !Array.isArray(intentObj.metadata)
  ) {
    (intent as { metadata?: Readonly<Record<string, unknown>> }).metadata =
      intentObj.metadata as Readonly<Record<string, unknown>>;
  }

  if (intent.targetPath !== undefined) {
    const pathFailure = validatePathField(
      intent.targetPath,
      correlationId,
      context.allowlistRepos,
      context.protectedPaths,
    );
    if (pathFailure) return { ok: false, failure: pathFailure };
  }

  let providerRequest: CoordinateProviderRequest | undefined;
  if (raw.providerRequest !== undefined) {
    const requestCopy = readUntrustedPlainData(raw.providerRequest, {
      redact: false,
      maxStringLength: 100_000,
    });
    if (!requestCopy.ok) {
      return {
        ok: false,
        failure: validationFailure(
          correlationId,
          "Provider request rejected as untrusted data",
        ),
      };
    }
    const requestObj = requestCopy.value as Record<string, unknown>;
    // Validate original identity fields BEFORE any canonical rebuild.
    // Never rewrite a divergent correlationId to match the intent.
    const requestCorrelationId = requestObj.correlationId;
    if (
      typeof requestCorrelationId !== "string" ||
      !requestCorrelationId.trim()
    ) {
      return {
        ok: false,
        failure: validationFailure(
          correlationId,
          "Provider request correlationId required",
        ),
      };
    }
    if (requestCorrelationId !== correlationId) {
      return {
        ok: false,
        failure: validationFailure(
          correlationId,
          "Provider request correlationId does not match intent",
        ),
      };
    }
    const requestLane = requestObj.lane;
    if (
      typeof requestLane !== "string" ||
      requestLane !== intent.requestedLane
    ) {
      return {
        ok: false,
        failure: validationFailure(
          correlationId,
          "Provider request lane does not match intent",
        ),
      };
    }
    const boundary = validateUntrustedProviderRequest(
      requestCopy.value,
      correlationId,
    );
    if (!boundary.ok) {
      return { ok: false, failure: boundary.failure };
    }
    if (typeof requestObj.path === "string") {
      const pathFailure = validatePathField(
        requestObj.path,
        correlationId,
        context.allowlistRepos,
        context.protectedPaths,
      );
      if (pathFailure) return { ok: false, failure: pathFailure };
    }
    // Rebuild timeout from validated coordinator timeout only.
    // Keep the already-validated original correlationId (no silent rewrite).
    providerRequest = {
      ...(requestCopy.value as CoordinateProviderRequest),
      timeoutMs: timeout.timeoutMs,
      correlationId: requestCorrelationId,
    };
  }

  return {
    ok: true,
    intent,
    context,
    providerRequest,
    timeoutMs: timeout.timeoutMs,
    signal,
    lateEvidenceSummary: raw.lateEvidenceSummary,
    correlationId,
  };
}

async function blockIdleRun(
  run: ExecutionRun,
  failure: NormalizedFailure,
  deps: CoordinateExecutionRunDependencies,
): Promise<TransitionExecutionRunResult> {
  return deps.execution.transitionExecutionRun({
    runId: run.runId,
    reason: "pre_engagement_block",
    failure,
    blockingReason: failure.code,
  });
}

function requestMatchesRun(
  request: CoordinateProviderRequest | undefined,
  run: ExecutionRun,
): boolean {
  return Boolean(
    request &&
      request.lane === run.intent.requestedLane &&
      request.correlationId === run.correlationId,
  );
}

function resultFailure(
  result: ProviderInvocationResult,
  correlationId: string,
): NormalizedFailure {
  const allowedPairs: Readonly<Record<string, string>> = {
    VALIDATION_ERROR: "validation",
    AUTHENTICATION_ERROR: "authentication",
    AUTHORIZATION_ERROR: "authorization",
    PROVIDER_UNAVAILABLE: "provider_unavailable",
    RATE_LIMITED: "rate_limited",
    TIMED_OUT: "timed_out",
    CANCELLED: "cancelled",
    SANDBOX_BLOCKED: "sandbox_blocked",
    PROTECTED_PATH: "protected_path",
    MUTATION_FORBIDDEN: "mutation_forbidden",
    HUMAN_GATE_REQUIRED: "human_gate_required",
    INVALID_PROVIDER_RESULT: "invalid_provider_result",
    INTERNAL_NORMALIZED_FAILURE: "internal_normalized_failure",
    SOURCE_MISMATCH: "source_mismatch",
  };
  if (
    "failure" in result &&
    result.failure &&
    result.failure.correlationId === correlationId &&
    result.failure.technicalDetailsRedacted === true &&
    allowedPairs[result.failure.code] === result.failure.family
  ) {
    return normalizedFailure({
      family: result.failure.family,
      code: result.failure.code,
      userMessage: "Provider operation failed",
      retryable: result.failure.retryable,
      correlationId,
    });
  }
  return invalidProviderFailure(correlationId);
}

async function transitionFromInvocation(
  run: ExecutionRun,
  outcome: InvokeOutcome,
  deps: CoordinateExecutionRunDependencies,
): Promise<{ result: TransitionExecutionRunResult; usage: UsageSummary }> {
  if (outcome.status === "timed_out") {
    return {
      result: await deps.execution.transitionExecutionRun({
        runId: run.runId,
        reason: "time_limit",
        failure: outcome.failure,
      }),
      usage: unavailableUsage("provider_timed_out"),
    };
  }
  if (outcome.status === "cancelled") {
    return {
      result: await deps.execution.transitionExecutionRun({
        runId: run.runId,
        reason: "cancel_accepted",
        failure: outcome.failure,
      }),
      usage: unavailableUsage("provider_cancelled"),
    };
  }
  if (outcome.status === "failed") {
    return {
      result: await deps.execution.transitionExecutionRun({
        runId: run.runId,
        reason: "engaged_operation_failed",
        failure: outcome.failure,
      }),
      usage: unavailableUsage("provider_failed"),
    };
  }

  const providerResultRaw = outcome.result;
  const safeResult = readUntrustedPlainData(providerResultRaw, {
    redact: true,
    maxStringLength: 100_000,
  });
  if (!safeResult.ok) {
    return {
      result: await deps.execution.transitionExecutionRun({
        runId: run.runId,
        reason: "engaged_operation_failed",
        failure: invalidProviderFailure(run.correlationId),
      }),
      usage: unavailableUsage("provider_result_hostile"),
    };
  }

  const providerResult = safeResult.value as ProviderInvocationResult;
  const boundary = validateUntrustedProviderResult(
    providerResult,
    run.correlationId,
  );
  if (!boundary.ok) {
    return {
      result: await deps.execution.transitionExecutionRun({
        runId: run.runId,
        reason: "engaged_operation_failed",
        failure: boundary.failure,
      }),
      usage: unavailableUsage("provider_result_invalid"),
    };
  }

  if (providerResult.kind === "success") {
    const usage = validatedUsage(providerResult.usage);
    const externalResult = {
      kind: "success" as const,
      completeness: providerResult.completeness,
      redactedSummary: providerResult.redactedSummary,
      rawPresent: false as const,
    };
    if (providerResult.completeness === "partial") {
      const failure = invalidProviderFailure(run.correlationId);
      return {
        result: await deps.execution.transitionExecutionRun({
          runId: run.runId,
          reason: "engaged_operation_failed",
          externalResult,
          failure,
        }),
        usage,
      };
    }
    return {
      result: await deps.execution.transitionExecutionRun({
        runId: run.runId,
        reason: "outputs_validated",
        completeness: "complete",
        externalResult,
      }),
      usage,
    };
  }

  const failure = resultFailure(providerResult, run.correlationId);
  if (providerResult.kind === "timed_out") {
    return {
      result: await deps.execution.transitionExecutionRun({
        runId: run.runId,
        reason: "time_limit",
        failure,
      }),
      usage: unavailableUsage("provider_timed_out"),
    };
  }
  if (providerResult.kind === "cancelled") {
    return {
      result: await deps.execution.transitionExecutionRun({
        runId: run.runId,
        reason: "cancel_accepted",
        failure,
      }),
      usage: unavailableUsage("provider_cancelled"),
    };
  }
  return {
    result: await deps.execution.transitionExecutionRun({
      runId: run.runId,
      reason: "engaged_operation_failed",
      failure,
    }),
    usage: unavailableUsage("provider_failed"),
  };
}

function deliveryOf(tracker: EventTracker) {
  return {
    status: (tracker.failureCount > 0
      ? "degraded"
      : "complete") as EventDeliveryStatus,
    failureCount: tracker.failureCount,
  };
}

export async function coordinateExecutionRun(
  input: unknown,
  deps: CoordinateExecutionRunDependencies,
): Promise<CoordinateExecutionRunResult> {
  const tracker: EventTracker = { failureCount: 0 };
  const stateTrace: ExecutionRun["state"][] = [];
  const noUsage = unavailableUsage("not_validated");

  const preflight = preflightCoordinateInput(input);
  if (!preflight.ok) {
    return {
      ok: false,
      failure: preflight.failure,
      ...emptyDiagnostics(tracker),
    };
  }

  let capability: ProviderCapabilityDescriptor | undefined;
  if (preflight.intent.requestedLane !== "none") {
    const described = describeCapabilitySafe(
      preflight.intent.requestedLane,
      deps,
      preflight.correlationId,
    );
    if (!described.ok) {
      return {
        ok: false,
        failure: described.failure,
        ...emptyDiagnostics(tracker),
      };
    }
    capability = described.capability;
  }

  const created = await deps.execution.createExecutionRun({
    intent: preflight.intent,
    context: preflight.context,
    capability,
  });

  if (created.run) stateTrace.push(created.run.state);
  if (!created.ok) {
    if (created.run) {
      safeEmit(deps, tracker, created.run, {
        type: "validation",
        detail: {
          accepted: false,
          source: created.run.disclosure.source,
          failureCode: created.failure.code,
        },
      });
    }
    return {
      ok: false,
      failure: created.failure,
      run: created.run,
      providerAttempted: false,
      providerInvoked: false,
      providerCompleted: false,
      stateTrace,
      validatedUsage: noUsage,
      finopsCapture: finopsNotAttempted("create_failed"),
      lateEvidenceRecorded: false,
      eventDelivery: deliveryOf(tracker),
    };
  }

  let current = created.run;
  safeEmit(deps, tracker, current, {
    type: "validation",
    detail: { accepted: true, source: current.disclosure.source },
  });

  const preEngagementFailure =
    preflight.intent.requestedLane === "none"
      ? normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "No provider lane selected",
          retryable: true,
          correlationId: current.correlationId,
        })
      : !requestMatchesRun(preflight.providerRequest, current)
        ? validationFailure(
            current.correlationId,
            "Provider request does not match the validated run",
          )
        : undefined;

  if (preEngagementFailure) {
    const blocked = await blockIdleRun(current, preEngagementFailure, deps);
    if (blocked.run) {
      current = blocked.run;
      stateTrace.push(blocked.run.state);
    }
    return {
      ok: false,
      failure: blocked.ok ? preEngagementFailure : blocked.failure,
      run: blocked.run ?? current,
      providerAttempted: false,
      providerInvoked: false,
      providerCompleted: false,
      stateTrace,
      validatedUsage: noUsage,
      finopsCapture: finopsNotAttempted("pre_engagement_block"),
      lateEvidenceRecorded: false,
      eventDelivery: deliveryOf(tracker),
    };
  }

  const started = await deps.execution.transitionExecutionRun({
    runId: current.runId,
    reason: "intent_valid",
  });
  if (!started.ok) {
    return {
      ok: false,
      failure: started.failure,
      run: started.run ?? current,
      providerAttempted: false,
      providerInvoked: false,
      providerCompleted: false,
      stateTrace,
      validatedUsage: noUsage,
      finopsCapture: finopsNotAttempted("start_failed"),
      lateEvidenceRecorded: false,
      eventDelivery: deliveryOf(tracker),
    };
  }
  current = started.run;
  stateTrace.push(current.state);
  safeEmit(deps, tracker, current, {
    type: "run_transition",
    detail: { state: current.state, source: current.disclosure.source },
  });

  const providerAttempted = true;
  let providerInvoked = false;
  let providerCompleted = false;

  const invocation = await invokeWithTimeoutAndCancellation(
    (invokeSignal) => {
      // True only immediately before the effective provider port call.
      providerInvoked = true;
      const common = {
        ...preflight.providerRequest!,
        runId: current.runId,
        signal: invokeSignal,
        timeoutMs: preflight.timeoutMs,
      };
      switch (current.intent.requestedLane) {
        case "ai":
          return deps.providers.ai.complete(common as AiCompletionRequest);
        case "git":
          return deps.providers.git.read(common as GitReadRequest);
        case "cursor":
          return deps.providers.cursor.executeFixture(
            common as CursorFixtureRequest,
          );
        default:
          throw new Error("provider lane none cannot be invoked");
      }
    },
    {
      timeoutMs: preflight.timeoutMs,
      signal: preflight.signal,
      correlationId: current.correlationId,
      maxRetries: 0,
    },
  );
  providerCompleted = invocation.status === "completed";

  safeEmit(deps, tracker, current, {
    type: "provider_invocation",
    detail: {
      outcome: invocation.status,
      source: current.disclosure.source,
      providerAttempted,
      providerInvoked,
      providerCompleted,
    },
  });

  const terminal = await transitionFromInvocation(current, invocation, deps);
  let providerSucceeded = false;
  if (invocation.status === "completed") {
    try {
      providerSucceeded = invocation.result.kind === "success";
    } catch {
      providerSucceeded = false;
    }
  }

  // Fail-open FinOps capture: never convert provider success into user failure.
  const runForCapture = terminal.result.run ?? current;
  const finopsCapture = await captureFinOpsAfterAiSuccess({
    deps,
    run: runForCapture,
    usage: terminal.usage,
    providerSucceeded,
  });

  if (!terminal.result.ok) {
    return {
      ok: false,
      failure: terminal.result.failure,
      run: terminal.result.run ?? current,
      providerAttempted,
      providerInvoked,
      providerCompleted,
      stateTrace,
      validatedUsage: terminal.usage,
      finopsCapture,
      lateEvidenceRecorded: false,
      eventDelivery: deliveryOf(tracker),
    };
  }
  current = terminal.result.run;
  stateTrace.push(current.state);
  safeEmit(deps, tracker, current, {
    type: "run_transition",
    detail: { state: current.state, source: current.disclosure.source },
  });

  let lateEvidenceRecorded = false;
  if (preflight.lateEvidenceSummary !== undefined) {
    const summary = sanitizeLateEvidenceSummary(preflight.lateEvidenceSummary);
    const late = await deps.execution.transitionExecutionRun({
      runId: current.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: summary,
    });
    if (late.ok) {
      current = late.run;
      lateEvidenceRecorded = true;
      safeEmit(deps, tracker, current, {
        type: "late_result",
        detail: { late: true, stateUnchanged: true },
      });
    }
  }

  const successful = current.state === "succeeded";
  return successful
    ? {
        ok: true,
        run: current,
        providerAttempted,
        providerInvoked,
        providerCompleted,
        stateTrace,
        validatedUsage: terminal.usage,
        finopsCapture,
        lateEvidenceRecorded,
        eventDelivery: deliveryOf(tracker),
      }
    : {
        ok: false,
        failure:
          current.failure ??
          normalizedFailure({
            family:
              current.state === "timed_out"
                ? "timed_out"
                : current.state === "cancelled"
                  ? "cancelled"
                  : "internal_normalized_failure",
            code:
              current.state === "timed_out"
                ? "TIMED_OUT"
                : current.state === "cancelled"
                  ? "CANCELLED"
                  : "INTERNAL_NORMALIZED_FAILURE",
            userMessage: "Execution did not succeed",
            retryable: false,
            correlationId: current.correlationId,
          }),
        run: current,
        providerAttempted,
        providerInvoked,
        providerCompleted,
        stateTrace,
        validatedUsage: terminal.usage,
        finopsCapture,
        lateEvidenceRecorded,
        eventDelivery: deliveryOf(tracker),
      };
}
