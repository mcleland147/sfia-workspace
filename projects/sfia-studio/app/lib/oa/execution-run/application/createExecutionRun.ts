import { createSourceDisclosure, usageUnavailable } from "../domain/evidence";
import { evaluateReadOnlyPolicy } from "../domain/policy";
import { normalizedFailure } from "../domain/errors";
import type {
  ExecutionContext,
  ExecutionIntent,
  ExecutionRun,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "../domain/types";
import { EXECUTION_RUN_SCHEMA_VERSION } from "../domain/types";
import type { ClockPort } from "../ports/clockPort";
import type { IdentityPort } from "../ports/identityPort";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
import { persistExecutionRunInternal } from "./internal/persistExecutionRunInternal";

export type CreateExecutionRunInput = {
  intent: ExecutionIntent;
  context: ExecutionContext;
  capability?: ProviderCapabilityDescriptor;
};

export type CreateExecutionRunResult =
  | { ok: true; run: ExecutionRun }
  | { ok: false; failure: NormalizedFailure; run?: ExecutionRun };

/**
 * Untrusted boundary: validates CreateExecutionRunInput before any metadata access,
 * identity allocation, or persistence.
 */
export async function createExecutionRun(
  input: unknown,
  deps: {
    clock: ClockPort;
    identity: IdentityPort;
    repository: ExecutionRunRepositoryPort;
    schemas: ExecutionRunSchemaValidationPort;
  },
): Promise<CreateExecutionRunResult> {
  const boundary = await deps.schemas.validate("create-execution-run-input", input);
  if (!boundary.ok) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Create execution run input failed schema validation",
        retryable: true,
        correlationId: "unknown",
      }),
    };
  }

  const validated = input as CreateExecutionRunInput;

  // Fail-closed Cursor verified claim before clock, identity, run construction, or save.
  if (
    validated.intent.requestedLane === "cursor" &&
    validated.capability?.verified === true
  ) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "sandbox_blocked",
        code: "SANDBOX_BLOCKED",
        userMessage: "Cursor product capabilities remain unverified",
        retryable: false,
        correlationId:
          typeof validated.intent.correlationId === "string"
            ? validated.intent.correlationId
            : "unknown",
      }),
    };
  }

  const now = deps.clock.nowIso();
  const policy = evaluateReadOnlyPolicy({
    intent: validated.intent,
    context: validated.context,
    capability: validated.capability,
    gateSatisfied: validated.intent.requiresHumanGate ? false : undefined,
  });

  const disclosure = createSourceDisclosure({
    source: validated.context.declaredSource,
    providerLane: validated.intent.requestedLane,
    limits: ["d2-d1-fixture-first", "memory-process-local"],
    cursorUnverified: validated.intent.requestedLane === "cursor",
  });

  const runId = deps.identity.nextRunId();
  const base: ExecutionRun = {
    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
    runId,
    correlationId: validated.intent.correlationId,
    state: policy.ok ? "idle" : "blocked",
    intent: validated.intent,
    context: validated.context,
    disclosure,
    createdAt: now,
    updatedAt: now,
    version: 1,
    capability: validated.capability,
    usage: usageUnavailable("not_provided"),
    persistence: {
      kind: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
    validation: policy.ok
      ? { ok: true, validatedAt: now }
      : { ok: false, validatedAt: now, failure: policy.failure },
    failure: policy.ok ? undefined : policy.failure,
    blockedReason: policy.ok ? undefined : policy.failure.code,
  };

  const persisted = await persistExecutionRunInternal(base, deps);
  if (!persisted.ok) {
    return { ok: false, failure: persisted.failure };
  }
  if (!policy.ok) {
    return { ok: false, failure: policy.failure, run: base };
  }
  return { ok: true, run: base };
}
