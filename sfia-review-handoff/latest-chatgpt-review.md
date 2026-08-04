# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Critical QA Revalidation 2

## 1. Date / heure / fuseau

2026-08-04 13:42:00 CEST (+0200)

## 2. Cycle

9 — QA / validation — QA Critical — Revalidation 2 après deuxième passe corrective

## 3. Profil

Critical

## 4. Typologie

EVOL

## 5. GO consommé

`GO QA SFIA STUDIO V3.1-D2-D3 — PROFILE CRITICAL — REVALIDATION 2`

Date/heure : 2026-08-04 13:32 CEST (+0200)

## 6. Gates non consommés

- G-D2D-CURSOR-01 — UNVERIFIED ; D2D3-04 BLOCKED
- G-D2D-PERSIST-01 — process-local ; D2D3-05 BLOCKED
- G-D2D-D2C-01 — R-QA-D2C-01 OPEN
- GO PUBLICATION / GO PR READINESS — non consommés

## 7. CKC recherché et absent

CKC recherché : oui — contrat détaillé : non — statut : absent

## 8. Fallback

routing guide ; validation checklist ; Delivery QA/Test standard ; template v2.6 ; documents D2-D 20–24 ; handoffs ; package local.

## 9. Sources consultées

1–7. template / routing / operating model / rules / checklist / QA standard / D2-D 20–24
8. QA initiale `2ea275d3…` / blob `a669da7f…`
9. Corrections 1 `6b00c678…` / blob `42f4b0b7…`
10. QA Revalidation 1 `5dbcee99…` / blob `e4c6d6ba…`
11. Corrections 2 `9b2d199…` / blob `208208a8…`
12–18. package 18 fichiers ; deps D2-D1/D2-D2 ; tests execution-run ; package.json/Vitest ; publish-review-handoff.sh

## 10. Local Git Truth Check initial

- branche : `delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination`
- HEAD / origin/main : `de2800aa836bb8221dc2912414126b7a3e6a1f58`
- upstream : aucun ; branche distante projet : absente ; staged : vide
- package local hors `.tmp-sfia-review/**` : 18 chemins manifest

## 11–12. Handoffs historiques

| Handoff | Commit | Blob |
|---|---|---|
| QA initiale | 2ea275d3e6266ba409e101ba4644102b5c25493c | a669da7fdc29acaf30446516229a1fcd9cbb9243 |
| Corrections 1 | 6b00c6785f3a2b317372c2f1d1450f5ce95fb26f | 42f4b0b72e1ea9f21309a4aec71cf5701952598f |
| QA Revalidation 1 | 5dbcee99f727d34761a784b5388f21d29d9c440c | e4c6d6bad6797a70bc82affbf05d4c20e5a6f3dc |
| Corrections 2 | 9b2d199aed9173add5de11adaaaa8d16adb1cabc | 208208a8283bb19ed3f7e7b2b2a29b87b054c8e7 |

Verdict Corrections 2 entrant (non preuve QA) : FOLLOW-UP CORRECTIONS COMPLETE / ADDRESSED / READY FOR CRITICAL QA REVALIDATION 2

## 13–14. Manifest et hash initial

count = 18

```
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
projects/sfia-studio/app/lib/oa/execution-run/index.ts
projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
```

SHA-256 length-prefixed = `1643016668d777162dd0250ed9f61169c5c58cffaec97551571ade04af0b7917`
Correspondance Corrections 2 : OUI

## 15. Inspection complète des 18 fichiers

Tous lus. Surfaces publiques inchangées hors exports déjà présents (`containsSensitiveLateContent` ajouté en Corrections 2). Aucun nouveau store/runtime/Git write/réseau. D2D3-04/05 absents.

## 16. Inspection du diff Corrections 2

Cinq fichiers touchés depuis `10c4d027…` → `16430166…` :

1. `coordinateExecutionRun.ts` — validate original correlationId/lane **before** rebuild ; rebuild conserve `requestCorrelationId` ; timeoutMs seule autorité reconstruite.
2. `untrustedExecutionData.ts` — detector unique `FORBIDDEN_VALUE` / `containsSensitiveLateContent` ; `sanitizeLateEvidenceSummary` fail-closed → `late_result_redacted`.
3–5. tests permanents étendus (REV-01, late secrets, negative resilience, evidence truthfulness).

Treize autres fichiers : contenu inchangé vs freeze Corrections 2 (hash package stable).

## 17. Représentation complète exploitable du package

### coordinateExecutionRun.ts (intégral)

```typescript
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
  if (usage.status !== "validated") {
    return unavailableUsage("provider_usage_unavailable");
  }
  for (const key of ["inputTokens", "outputTokens"] as const) {
    const value = usage[key];
    if (
      value !== undefined &&
      (typeof value !== "number" || !Number.isFinite(value) || value < 0)
    ) {
      return unavailableUsage("provider_usage_invalid");
    }
  }
  if (usage.unit !== undefined && typeof usage.unit !== "string") {
    return unavailableUsage("provider_usage_invalid");
  }
  return {
    status: "validated",
    inputTokens: usage.inputTokens as number | undefined,
    outputTokens: usage.outputTokens as number | undefined,
    unit: usage.unit as string | undefined,
  };
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
        lateEvidenceRecorded,
        eventDelivery: deliveryOf(tracker),
      };
}
```

### untrustedExecutionData.ts (intégral)

```typescript
/**
 * Pure application helper for untrusted execution payloads.
 * No Node, infrastructure, or provider imports.
 * Rejects accessors, non-plain prototypes, functions, symbols, and cycles.
 */

const DEFAULT_MAX_DEPTH = 8;
const DEFAULT_MAX_KEYS = 64;
const DEFAULT_MAX_ARRAY = 64;
const DEFAULT_MAX_STRING = 4096;

const FORBIDDEN_KEY =
  /^(.*[_-]?)?(secret|password|token|api[_-]?key|authorization|cookie|prompt|rawResponse|raw_prompt|raw_response)([_-].*)?$/i;

/**
 * Canonical D2-D3 late-evidence / display redaction detector.
 * Single source used by sanitizeLateEvidenceSummary and redactString.
 * Fail-closed: any hit means the whole late summary becomes late_result_redacted.
 */
const FORBIDDEN_VALUE =
  /sk-|ghp_|github_pat_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|private\s+key|xox[baprs]-|password\s*[:=]|secret\s*[:=]|(?:access_|refresh_|client_)?token\s*[:=]|api[_-]?key\s*[:=]|authorization\s*[:=]|authorization\s*:\s*bearer\b|\bbearer\s+[^\s]+|cookie\s*[:=]|session\s*[:=]|[?&](?:access_|refresh_|client_)?token=|"api[_-]?key"\s*:\s*"/i;

/** Local D2-D3 late-evidence sensitive content detector (canonical). */
export function containsSensitiveLateContent(value: string): boolean {
  if (typeof value !== "string" || value.length === 0) return false;
  return FORBIDDEN_VALUE.test(value);
}

export type UntrustedReadOk = {
  readonly ok: true;
  readonly value: unknown;
};

export type UntrustedReadFail = {
  readonly ok: false;
  readonly reason: string;
};

export type UntrustedReadResult = UntrustedReadOk | UntrustedReadFail;

export type UntrustedReadOptions = {
  readonly maxDepth?: number;
  readonly maxKeys?: number;
  readonly maxArrayLength?: number;
  readonly maxStringLength?: number;
  readonly redact?: boolean;
};

function isPlainObject(value: object): boolean {
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function ownDataKeys(obj: object): string[] | null {
  const names = Object.getOwnPropertyNames(obj);
  const symbols = Object.getOwnPropertySymbols(obj);
  if (symbols.length > 0) return null;
  for (const name of names) {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    if (!desc) return null;
    if (desc.get !== undefined || desc.set !== undefined) return null;
    if (typeof desc.value === "function" || typeof desc.value === "symbol") {
      return null;
    }
  }
  return names;
}

function redactString(value: string, maxLength: number): string {
  const cleaned = value.replace(FORBIDDEN_VALUE, "[REDACTED]");
  return cleaned.slice(0, maxLength);
}

function readInner(
  input: unknown,
  depth: number,
  ancestors: WeakSet<object>,
  options: Required<UntrustedReadOptions>,
): UntrustedReadResult {
  if (depth > options.maxDepth) {
    return { ok: false, reason: "depth_exceeded" };
  }
  if (input === null || typeof input === "boolean") {
    return { ok: true, value: input };
  }
  if (input === undefined) {
    return { ok: true, value: undefined };
  }
  if (typeof input === "number") {
    if (!Number.isFinite(input)) {
      return { ok: false, reason: "non_finite_number" };
    }
    return { ok: true, value: input };
  }
  if (typeof input === "string") {
    if (input.length > options.maxStringLength) {
      return { ok: false, reason: "string_too_long" };
    }
    if (options.redact && FORBIDDEN_VALUE.test(input)) {
      return { ok: true, value: redactString(input, options.maxStringLength) };
    }
    if (options.redact) {
      return { ok: true, value: input.slice(0, options.maxStringLength) };
    }
    return { ok: true, value: input };
  }
  if (typeof input === "function" || typeof input === "symbol") {
    return { ok: false, reason: "forbidden_type" };
  }
  if (typeof input !== "object") {
    return { ok: false, reason: "unsupported_type" };
  }
  if (ancestors.has(input)) {
    return { ok: false, reason: "cycle" };
  }
  ancestors.add(input);

  if (Array.isArray(input)) {
    if (input.length > options.maxArrayLength) {
      ancestors.delete(input);
      return { ok: false, reason: "array_too_large" };
    }
    const out: unknown[] = [];
    for (let i = 0; i < input.length; i += 1) {
      const desc = Object.getOwnPropertyDescriptor(input, i);
      if (!desc || desc.get !== undefined || desc.set !== undefined) {
        ancestors.delete(input);
        return { ok: false, reason: "array_accessor" };
      }
      const nested = readInner(desc.value, depth + 1, ancestors, options);
      if (!nested.ok) {
        ancestors.delete(input);
        return nested;
      }
      out.push(nested.value);
    }
    ancestors.delete(input);
    return { ok: true, value: out };
  }

  if (!isPlainObject(input)) {
    ancestors.delete(input);
    return { ok: false, reason: "non_plain_object" };
  }
  const keys = ownDataKeys(input);
  if (keys === null) {
    ancestors.delete(input);
    return { ok: false, reason: "accessors_or_symbols" };
  }
  if (keys.length > options.maxKeys) {
    ancestors.delete(input);
    return { ok: false, reason: "too_many_keys" };
  }
  const out: Record<string, unknown> = {};
  for (const key of keys) {
    if (options.redact && FORBIDDEN_KEY.test(key)) {
      ancestors.delete(input);
      return { ok: false, reason: `forbidden_key:${key}` };
    }
    const desc = Object.getOwnPropertyDescriptor(input, key);
    if (!desc || desc.get !== undefined || desc.set !== undefined) {
      ancestors.delete(input);
      return { ok: false, reason: "accessor" };
    }
    const nested = readInner(desc.value, depth + 1, ancestors, options);
    if (!nested.ok) {
      ancestors.delete(input);
      return nested;
    }
    out[key] = nested.value;
  }
  ancestors.delete(input);
  return { ok: true, value: out };
}

/**
 * Inspect descriptors without invoking getters. Produce a detached plain copy
 * or a structured rejection reason.
 */
export function readUntrustedPlainData(
  input: unknown,
  options?: UntrustedReadOptions,
): UntrustedReadResult {
  const resolved: Required<UntrustedReadOptions> = {
    maxDepth: options?.maxDepth ?? DEFAULT_MAX_DEPTH,
    maxKeys: options?.maxKeys ?? DEFAULT_MAX_KEYS,
    maxArrayLength: options?.maxArrayLength ?? DEFAULT_MAX_ARRAY,
    maxStringLength: options?.maxStringLength ?? DEFAULT_MAX_STRING,
    redact: options?.redact ?? false,
  };
  return readInner(input, 0, new WeakSet<object>(), resolved);
}

export function redactBoundedText(
  value: unknown,
  maxLength = 240,
): string | null {
  if (typeof value !== "string") return null;
  return redactString(value, maxLength);
}

export function sanitizeLateEvidenceSummary(input: unknown): string {
  // Official late evidence: non-string / hostile shapes never become caller content.
  if (typeof input !== "string") {
    return "late_result_redacted";
  }
  // Detect on the original before any truncation.
  if (containsSensitiveLateContent(input)) {
    return "late_result_redacted";
  }
  const bounded = input.slice(0, 240).trim();
  if (!bounded) {
    return "late_result_redacted";
  }
  // Re-check after normalization/bounding (fail closed on ambiguity).
  if (containsSensitiveLateContent(bounded)) {
    return "late_result_redacted";
  }
  return bounded;
}
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";

describe("D2-D3 fixture coordination", () => {
  it("coordinates AI through idle, running, succeeded and official evidence", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "bounded fixture summary" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(result.providerCompleted).toBe(true);
    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
    expect(result.run?.evidence).toHaveLength(1);
    expect(result.run?.evidence?.[0]).toMatchObject({
      official: true,
      source: "fixture",
      completeness: "complete",
      late: false,
    });

    if (!result.run) return;
    const projection = await composition.projectById(result.run.runId);
    expect(projection.ok).toBe(true);
    if (!projection.ok) return;
    expect(projection.projection.state).toBe("succeeded");
    expect(projection.projection.source).toBe("fixture");
    expect(projection.projection.providerLane).toBe("ai");
  });

  it("coordinates a read-only Git fixture without a write surface", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const intent = {
      ...fixture.intent,
      intentId: "intent:d2d3:git",
      correlationId: "corr:d2d3:git",
      requestedLane: "git" as const,
    };
    const result = await composition.coordinate({
      intent,
      context: fixture.context,
      providerRequest: {
        correlationId: intent.correlationId,
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "repository",
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.run?.state).toBe("succeeded");
    expect(result.run?.disclosure.providerLane).toBe("git");
    expect(composition.disclosure.gitWrite).toBe(false);
  });

  it("keeps Cursor fixture-only and blocked while Cursor is unverified", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const intent = {
      ...fixture.intent,
      intentId: "intent:d2d3:cursor",
      correlationId: "corr:d2d3:cursor",
      requestedLane: "cursor" as const,
    };
    const result = await composition.coordinate({
      intent,
      context: fixture.context,
      providerRequest: {
        correlationId: intent.correlationId,
        lane: "cursor",
        operation: "fixture",
        instructionSummary: "read-only fixture",
        allowlistRepos: ["projects/sfia-studio/"],
        protectedPaths: [".env"],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.ok).toBe(false);
    expect(result.run?.state).toBe("blocked");
    expect(result.providerInvoked).toBe(false);
    expect(composition.disclosure.cursorVerified).toBe(false);
  });

  it("blocks lane none without invoking a provider", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        requestedLane: "none",
        intentId: "intent:d2d3:none",
        correlationId: "corr:d2d3:none",
      },
      context: fixture.context,
      timeoutMs: 100,
    });

    expect(result.ok).toBe(false);
    expect(result.run?.state).toBe("blocked");
    expect(result.providerInvoked).toBe(false);
    expect(result.stateTrace).toEqual(["idle", "blocked"]);
  });

  it("does not invoke providers before validation and policy acceptance", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("validation_failure");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not execute" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.ok).toBe(false);
    expect(result.providerInvoked).toBe(false);
    expect(result.stateTrace).toEqual([]);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  getFixture,
  isIsoTimestamp,
  normalizedFailure,
  type AiExecutionPort,
} from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3,
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
} from "@/lib/oa/execution-run/server";

describe("D2-D3 evidence truthfulness", () => {
  it("keeps run, official evidence, and projection source on fixture", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "truthful fixture input" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    if (!result.run) throw new Error("expected run");
    const evidence = result.run.evidence?.[0];
    const projection = await composition.projectById(result.run.runId);
    expect(projection.ok).toBe(true);
    if (!projection.ok) return;

    expect(result.run.disclosure.source).toBe("fixture");
    expect(evidence?.source).toBe("fixture");
    expect(projection.projection.source).toBe("fixture");
    expect(evidence?.official).toBe(true);
    expect(evidence?.completeness).toBe("complete");
    expect(isIsoTimestamp(evidence?.producedAt ?? "")).toBe(true);
    expect(evidence?.evidenceId.length).toBeLessThan(128);
    expect(evidence).not.toHaveProperty("rawResult");
  });

  it.each(["sandbox-real", "real"] as const)(
    "blocks requested source %s without fallback or provider invocation",
    async (source) => {
      const composition = composeExecutionRunD2D3();
      const fixture = getFixture("nominal");
      const result = await composition.coordinate({
        intent: {
          ...fixture.intent,
          intentId: `intent:d2d3:${source}`,
          correlationId: `corr:d2d3:${source}`,
          requestedSource: source,
        },
        context: { ...fixture.context, declaredSource: source },
        providerRequest: {
          correlationId: `corr:d2d3:${source}`,
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "must not run" }],
          timeoutMs: 100,
        },
        timeoutMs: 100,
      });

      expect(result.ok).toBe(false);
      expect(result.run).toBeUndefined();
      expect(result.providerInvoked).toBe(false);
      expect(result.stateTrace).toEqual([]);
      if (result.ok) throw new Error("expected failure");
      expect(result.failure.code).toBe("SOURCE_MISMATCH");
    },
  );

  it("records late evidence without changing a cancelled terminal", async () => {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => ({
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "Cancelled fixture operation",
          retryable: false,
          correlationId: request.correlationId,
        }),
      }),
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const composition = composeExecutionRunD2D3({ providers });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "cancel fixture" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
      lateEvidenceSummary: "late bounded result",
    });

    expect(result.ok).toBe(false);
    expect(result.run?.state).toBe("cancelled");
    expect(result.lateEvidenceRecorded).toBe(true);
    expect(result.run?.evidence?.at(-1)).toMatchObject({
      source: "fixture",
      late: true,
      official: true,
    });
  });

  it("marks usage unavailable unless provider usage validates", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "usage fixture" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.validatedUsage.status).toBe("validated");
    expect(result.run?.usage.status).toBe("unavailable");
  });

  it.each([
    "token=abc",
    "apiKey=k",
    "Authorization: Bearer xyz",
  ])(
    "official late evidence redacts secret-like summary %j to late_result_redacted",
    async (summary) => {
      const base = composeExecutionRunProvidersFake();
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => base.ai.describeCapability(),
        complete: async (request) => ({
          kind: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "Cancelled fixture operation",
            retryable: false,
            correlationId: request.correlationId,
          }),
        }),
      };
      const providers = composeExecutionRunProviders({ ...base, ai });
      const composition = composeExecutionRunD2D3({ providers });
      const fixture = getFixture("nominal");
      const result = await composition.coordinate({
        intent: fixture.intent,
        context: fixture.context,
        providerRequest: {
          correlationId: fixture.intent.correlationId,
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "cancel fixture" }],
          timeoutMs: 100,
        },
        timeoutMs: 100,
        lateEvidenceSummary: summary,
      });

      expect(result.run?.state).toBe("cancelled");
      expect(result.lateEvidenceRecorded).toBe(true);
      expect(result.run?.evidence?.at(-1)).toMatchObject({
        source: "fixture",
        late: true,
        official: true,
        summary: "late_result_redacted",
      });
      expect(JSON.stringify(result)).not.toContain("abc");
      expect(JSON.stringify(result)).not.toContain("xyz");
      expect(JSON.stringify(result)).not.toMatch(/apiKey=k/i);
    },
  );
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  getFixture,
  normalizedFailure,
  type AiExecutionPort,
  type FailureCode,
  type FailureFamily,
  type ProviderInvocationResult,
} from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3,
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
} from "@/lib/oa/execution-run/server";

function failureResult(
  family: FailureFamily,
  code: FailureCode,
  correlationId: string,
): ProviderInvocationResult {
  return {
    kind: "failure",
    failure: normalizedFailure({
      family,
      code,
      userMessage: `Bounded ${family} fixture failure`,
      retryable: false,
      correlationId,
    }),
  };
}

async function runWithAiResult(
  makeResult: (correlationId: string) => ProviderInvocationResult,
  options?: { lateEvidenceSummary?: string },
) {
  const base = composeExecutionRunProvidersFake();
  let calls = 0;
  let receivedKeys: string[] = [];
  const ai: AiExecutionPort = {
    lane: "ai",
    describeCapability: () => base.ai.describeCapability(),
    complete: async (request) => {
      calls += 1;
      receivedKeys = Object.keys(request);
      return makeResult(request.correlationId);
    },
  };
  const providers = composeExecutionRunProviders({ ...base, ai });
  const composition = composeExecutionRunD2D3({ providers });
  const fixture = getFixture("nominal");
  const result = await composition.coordinate({
    intent: fixture.intent,
    context: fixture.context,
    providerRequest: {
      correlationId: fixture.intent.correlationId,
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "deterministic fixture" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
    ...options,
  });
  return { result, calls, receivedKeys };
}

describe("D2-D3 deterministic negative and resilience scenarios", () => {
  it.each([
    ["authentication", "AUTHENTICATION_ERROR"],
    ["authorization", "AUTHORIZATION_ERROR"],
    ["provider_unavailable", "PROVIDER_UNAVAILABLE"],
    ["rate_limited", "RATE_LIMITED"],
  ] as const)(
    "normalizes %s failure to the exact failed terminal",
    async (family, code) => {
      const { result, calls } = await runWithAiResult((correlationId) =>
        failureResult(family, code, correlationId),
      );
      expect(calls).toBe(1);
      expect(result.run?.state).toBe("failed");
      if (result.ok) throw new Error("expected failed result");
      expect(result.failure).toMatchObject({ family, code });
      expect(result.run?.evidence).toBeUndefined();
      expect(result.run?.disclosure.source).toBe("fixture");
    },
  );

  it("maps provider timeout to timed_out", async () => {
    const { result } = await runWithAiResult((correlationId) => ({
      kind: "timed_out",
      failure: normalizedFailure({
        family: "timed_out",
        code: "TIMED_OUT",
        userMessage: "Bounded timeout",
        retryable: true,
        correlationId,
      }),
    }));
    expect(result.run?.state).toBe("timed_out");
    if (result.ok) throw new Error("expected timed-out result");
    expect(result.failure.code).toBe("TIMED_OUT");
  });

  it("maps provider cancellation to cancelled and preserves it after late evidence", async () => {
    const { result } = await runWithAiResult(
      (correlationId) => ({
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "Bounded cancellation",
          retryable: false,
          correlationId,
        }),
      }),
      { lateEvidenceSummary: "late redacted fixture result" },
    );
    expect(result.run?.state).toBe("cancelled");
    if (result.ok) throw new Error("expected cancelled result");
    expect(result.failure.code).toBe("CANCELLED");
    expect(result.run?.evidence?.at(-1)?.late).toBe(true);
  });

  it("fails partial provider success and preserves explicit partiality", async () => {
    const { result } = await runWithAiResult(() => ({
      kind: "success",
      completeness: "partial",
      redactedSummary: "bounded partial result",
      rawPresent: false,
      usage: { status: "unavailable", reason: "partial" },
      disclosureNotes: ["fixture"],
    }));
    expect(result.run?.state).toBe("failed");
    if (result.ok) throw new Error("expected partial failure");
    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
    expect(result.run?.externalResult).toMatchObject({
      kind: "success",
      completeness: "partial",
    });
    expect(result.run?.state).not.toBe("succeeded");
  });

  it("rejects an invalid provider result without leaking raw content", async () => {
    const { result } = await runWithAiResult(
      () =>
        ({
          kind: "success",
          completeness: "complete",
          redactedSummary: "password=do-not-leak",
          rawPresent: true,
          usage: { status: "unavailable", reason: "invalid" },
          disclosureNotes: [],
        }) as ProviderInvocationResult,
    );
    expect(result.run?.state).toBe("failed");
    if (result.ok) throw new Error("expected invalid provider failure");
    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
    expect(JSON.stringify(result.run)).not.toContain("do-not-leak");
  });

  it.each([
    ["validation_failure", "VALIDATION_ERROR"],
    ["blocked_gate", "HUMAN_GATE_REQUIRED"],
    ["protected_path", "PROTECTED_PATH"],
    ["mutation_forbidden", "MUTATION_FORBIDDEN"],
    ["source_mismatch", "SOURCE_MISMATCH"],
  ] as const)("blocks %s before provider invocation", async (scenario, code) => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture(scenario);
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest:
        fixture.intent.requestedLane === "ai"
          ? {
              correlationId: fixture.intent.correlationId,
              lane: "ai",
              operation: "complete",
              messages: [{ role: "user", content: "must not execute" }],
              timeoutMs: 100,
            }
          : undefined,
      timeoutMs: 100,
    });
    expect(result.ok).toBe(false);
    expect(result.providerInvoked).toBe(false);
    if (result.ok) throw new Error("expected pre-engagement block");
    expect(result.failure.code).toBe(code);
    if (result.run) {
      expect(result.run.state).toBe("blocked");
      expect(result.run.evidence).toBeUndefined();
      expect(result.run.disclosure.source).toBe(
        fixture.context.declaredSource,
      );
    }
  });

  it("blocks a sensitive provider request at the boundary and redacts output", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const sensitive = "fixture-sensitive-value";
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "safe" }],
        timeoutMs: 100,
        apiKey: sensitive,
      } as never,
      timeoutMs: 100,
    });
    expect(result.ok).toBe(false);
    expect(result.run).toBeUndefined();
    expect(result.providerInvoked).toBe(false);
    expect(JSON.stringify(result)).not.toContain(sensitive);
    if (result.ok) throw new Error("expected failure");
    expect(result.failure.code).toBe("VALIDATION_ERROR");
  });

  it("blocks providerRequest correlationId mismatch before engagement", async () => {
    const base = composeExecutionRunProvidersFake();
    let describeCalls = 0;
    let completeCalls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => {
        describeCalls += 1;
        return base.ai.describeCapability();
      },
      complete: async (request) => {
        completeCalls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:neg:intent",
        intentId: "intent:neg:corr",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:neg:request",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not execute" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    expect(result.ok).toBe(false);
    expect(result.run).toBeUndefined();
    expect(result.stateTrace).toEqual([]);
    expect(result.providerAttempted).toBe(false);
    expect(result.providerInvoked).toBe(false);
    expect(result.providerCompleted).toBe(false);
    expect(describeCalls).toBe(0);
    expect(completeCalls).toBe(0);
    if (result.ok) throw new Error("expected correlation mismatch rejection");
    expect(result.failure.code).toBe("VALIDATION_ERROR");
    expect(result.failure.family).toBe("validation");
  });

  it("gives providers no run, repository, save, or transition authority", async () => {
    const { result, receivedKeys } = await runWithAiResult(() => ({
      kind: "success",
      completeness: "complete",
      redactedSummary: "bounded complete fixture",
      rawPresent: false,
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
      disclosureNotes: ["fixture"],
    }));
    expect(result.run?.state).toBe("succeeded");
    expect(receivedKeys).not.toEqual(
      expect.arrayContaining([
        "executionRun",
        "repository",
        "save",
        "transitionExecutionRun",
      ]),
    );
    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";

async function succeededProjection() {
  const composition = composeExecutionRunD2D3();
  const fixture = getFixture("nominal");
  const coordinated = await composition.coordinate({
    intent: fixture.intent,
    context: fixture.context,
    providerRequest: {
      correlationId: fixture.intent.correlationId,
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "fixture-only input" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  });
  if (!coordinated.run) throw new Error("expected run");
  const projection = await composition.projectById(coordinated.run.runId);
  if (!projection.ok) throw new Error(projection.failure.message);
  return projection.projection;
}

describe("D2-D3 provider-independent projection", () => {
  it("projects the bounded transport-neutral shape and disclosures", async () => {
    const projection = await succeededProjection();

    expect(projection).toMatchObject({
      state: "succeeded",
      source: "fixture",
      providerLane: "ai",
      phase: "terminal",
      completeness: "complete",
      cursorUnverified: true,
      gitWrite: false,
      persistence: {
        kind: "memory_process_local",
        durable: false,
        multiInstance: false,
        restartSafe: false,
      },
    });
    expect(projection.evidenceSummary[0]).toMatchObject({
      official: true,
      source: "fixture",
      late: false,
    });
    expect(projection.readinessAssessment.uiDelivery.status).toBe(
      "not_demonstrated",
    );
    expect(projection.readinessAssessment.strongRuntimeVerdict.status).toBe(
      "blocked",
    );
  });

  it("contains no executable, SDK, adapter, command, signal, or raw surface", async () => {
    const projection = await succeededProjection();
    const seenKeys: string[] = [];
    const visit = (value: unknown): void => {
      if (!value || typeof value !== "object") {
        expect(typeof value).not.toBe("function");
        return;
      }
      for (const [key, nested] of Object.entries(value)) {
        seenKeys.push(key);
        expect(typeof nested).not.toBe("function");
        visit(nested);
      }
    };
    visit(projection);

    expect(seenKeys).not.toEqual(
      expect.arrayContaining([
        "sdk",
        "adapter",
        "command",
        "signal",
        "abortSignal",
        "rawPrompt",
        "rawResponse",
        "rawError",
        "secret",
      ]),
    );
    expect(JSON.stringify(projection)).not.toMatch(
      /fixture-only input|AbortSignal|executeFixture|complete\(/,
    );
  });

  it("is JSON serializable and exposes no Git write capability", async () => {
    const projection = await succeededProjection();
    expect(() => JSON.stringify(projection)).not.toThrow();
    expect(JSON.parse(JSON.stringify(projection))).toEqual(projection);
    expect(Object.keys(projection)).not.toContain("gitWriteCommand");
    expect(projection.gitWrite).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts`

```typescript
/**
 * @vitest-environment node
 *
 * Permanent regression matrix for F-QA-D2D3-01…10.
 * Findings remain OPEN until Critical QA revalidation — these tests prove
 * technical addressing only.
 */
import { describe, expect, it } from "vitest";
import {
  assessExecutionReadiness,
  createExecutionProjection,
  getFixture,
  MAX_COORDINATOR_TIMEOUT_MS,
  normalizedFailure,
  type AiExecutionPort,
  type ProviderInvocationResult,
} from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3,
  composeExecutionRunMemory,
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
  coordinateExecutionRun,
} from "@/lib/oa/execution-run/server";

describe("F-QA-D2D3 permanent regression matrix", () => {
  it("F01 — fake provider cannot be promoted to real via injected availableSources", async () => {
    const core = composeExecutionRunMemory({
      clockIso: "2026-08-04T10:00:00.000Z",
    });
    const providers = composeExecutionRunProvidersFake();
    const fixture = getFixture("nominal");
    const result = await coordinateExecutionRun(
      {
        intent: {
          ...fixture.intent,
          correlationId: "corr:f01",
          intentId: "intent:f01",
          requestedSource: "real",
        },
        context: { ...fixture.context, declaredSource: "real" },
        providerRequest: {
          correlationId: "corr:f01",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "must not run" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
        availableSources: ["fixture", "real", "sandbox-real"],
      },
      {
        execution: core,
        providers,
        events: providers.events,
        clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
      },
    );

    expect(result.ok).toBe(false);
    expect(result.providerInvoked).toBe(false);
    expect(result.run).toBeUndefined();
    if (result.ok) throw new Error("expected failure");
    expect(result.failure.code).toBe("SOURCE_MISMATCH");
    expect(JSON.stringify(result)).not.toMatch(/"source":"real"/);
  });

  it("F02 — UX readiness cannot become demonstrated from boolean-only proofs", () => {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    expect(assessment.uxExploration.status).toBe("not_demonstrated");
    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
  });

  it.each([1, 2, 4] as const)(
    "F03 — sink throw at event %s continues workflow without raw error",
    async (throwAt) => {
      const core = composeExecutionRunMemory({
        clockIso: "2026-08-04T10:00:00.000Z",
      });
      const providers = composeExecutionRunProvidersFake();
      let eventCount = 0;
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => providers.ai.describeCapability(),
        complete: async (request) => providers.ai.complete(request),
      };
      const throwing = composeExecutionRunProviders({
        ...providers,
        ai,
        events: {
          emit: () => {
            eventCount += 1;
            if (eventCount === throwAt) {
              throw new Error(`sink_raw_${throwAt}`);
            }
          },
        },
      });
      const fixture = getFixture("nominal");
      let rawError = "";
      let result;
      try {
        result = await coordinateExecutionRun(
          {
            intent: {
              ...fixture.intent,
              correlationId: `corr:f03:${throwAt}`,
              intentId: `intent:f03:${throwAt}`,
            },
            context: fixture.context,
            providerRequest: {
              correlationId: `corr:f03:${throwAt}`,
              lane: "ai",
              operation: "complete",
              messages: [{ role: "user", content: "sink" }],
              timeoutMs: 50,
            },
            timeoutMs: 50,
          },
          {
            execution: core,
            providers: throwing,
            events: throwing.events,
            clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
          },
        );
      } catch (error) {
        rawError = error instanceof Error ? error.message : String(error);
      }

      expect(rawError).toBe("");
      expect(result).toBeDefined();
      const stored = await core.listByCorrelationId(`corr:f03:${throwAt}`);
      expect(stored.at(-1)?.state).toBe(result!.run?.state);
      expect(result!.run?.state).toBe("succeeded");
      expect(result!.ok).toBe(true);
      expect(result!.eventDelivery.status).toBe("degraded");
      expect(result!.eventDelivery.failureCount).toBeGreaterThan(0);
      expect(JSON.stringify(result)).not.toContain(`sink_raw_${throwAt}`);
    },
  );

  it("F04 — malicious projection rejects secrets, functions, and claim promotion", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const coordinated = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "proj" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    expect(coordinated.run?.state).toBe("succeeded");
    const injectedFunction = () => "executable";
    const malicious = {
      run: {
        ...coordinated.run,
        externalResult: {
          kind: "success",
          completeness: "complete",
          redactedSummary: "password=projection-plain-secret",
          rawPresent: false,
        },
        blockedReason: "apiKey=projection-key",
        disclosure: {
          ...coordinated.run!.disclosure,
          limits: [injectedFunction],
        },
        persistence: {
          kind: "memory_process_local",
          durable: true,
          multiInstance: true,
          restartSafe: true,
        },
        evidence: [
          {
            ...coordinated.run!.evidence![0],
            source: "real",
            official: false,
          },
        ],
      },
      openReserves: ["password=reserve-plain-secret"],
    };
    const projection = createExecutionProjection(malicious);
    expect(projection.ok).toBe(false);
    if (projection.ok) throw new Error("expected rejection");
    expect(JSON.stringify(projection)).not.toContain("projection-plain-secret");
    expect(JSON.stringify(projection)).not.toContain("reserve-plain-secret");
  });

  it("F05 — sensitive late evidence is redacted before persistence", async () => {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => ({
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "cancelled",
          retryable: false,
          correlationId: request.correlationId,
        }),
      }),
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:f05",
        intentId: "intent:f05",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:f05",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "late" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
      lateEvidenceSummary: "password=late-plain-secret",
    });

    expect(result.run?.state).toBe("cancelled");
    expect(result.lateEvidenceRecorded).toBe(true);
    const late = result.run?.evidence?.at(-1);
    expect(late).toMatchObject({
      late: true,
      official: true,
      source: "fixture",
    });
    expect(late?.summary).toBe("late_result_redacted");
    expect(late?.summary).not.toContain("late-plain-secret");
    expect(JSON.stringify(result)).not.toContain("late-plain-secret");
  });

  it("F-QA-REV-D2D3-01 — matching correlationId keeps nominal engagement", async () => {
    const base = composeExecutionRunProvidersFake();
    let describeCalls = 0;
    let completeCalls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => {
        describeCalls += 1;
        return base.ai.describeCapability();
      },
      complete: async (request) => {
        completeCalls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:rev01:match",
        intentId: "intent:rev01:match",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:rev01:match",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "match" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    expect(result.ok).toBe(true);
    expect(result.run?.state).toBe("succeeded");
    expect(describeCalls).toBeGreaterThan(0);
    expect(completeCalls).toBe(1);
    expect(result.providerInvoked).toBe(true);
  });

  it.each([
    {
      name: "different",
      requestCorrelationId: "corr:rev01:other",
      buildRequest: (base: Record<string, unknown>) => ({
        ...base,
        correlationId: "corr:rev01:other",
      }),
    },
    {
      name: "empty",
      requestCorrelationId: "",
      buildRequest: (base: Record<string, unknown>) => ({
        ...base,
        correlationId: "",
      }),
    },
    {
      name: "absent",
      requestCorrelationId: undefined,
      buildRequest: (base: Record<string, unknown>) => {
        const { correlationId: _omit, ...rest } = base as {
          correlationId: string;
        } & Record<string, unknown>;
        void _omit;
        return rest;
      },
    },
    {
      name: "hostile_getter",
      requestCorrelationId: "corr:rev01:match",
      buildRequest: (base: Record<string, unknown>) => {
        const hostile = Object.create(null);
        for (const [key, value] of Object.entries(base)) {
          if (key === "correlationId") {
            Object.defineProperty(hostile, key, {
              enumerable: true,
              get() {
                return "corr:rev01:hostile";
              },
            });
          } else {
            Object.defineProperty(hostile, key, {
              enumerable: true,
              value,
              writable: true,
              configurable: true,
            });
          }
        }
        return hostile;
      },
    },
    {
      name: "odd_prototype",
      requestCorrelationId: "corr:rev01:other",
      buildRequest: (base: Record<string, unknown>) =>
        Object.assign(Object.create({ polluted: true }), {
          ...base,
          correlationId: "corr:rev01:other",
        }),
    },
  ])(
    "F-QA-REV-D2D3-01 — correlationId $name rejects before provider engagement",
    async ({ buildRequest }) => {
      const base = composeExecutionRunProvidersFake();
      let describeCalls = 0;
      let completeCalls = 0;
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => {
          describeCalls += 1;
          return base.ai.describeCapability();
        },
        complete: async (request) => {
          completeCalls += 1;
          return base.ai.complete(request);
        },
      };
      const composition = composeExecutionRunD2D3({
        providers: composeExecutionRunProviders({ ...base, ai }),
      });
      const fixture = getFixture("nominal");
      const requestBase = {
        correlationId: "corr:rev01:match",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not run" }],
        timeoutMs: 50,
      };
      const result = await composition.coordinate({
        intent: {
          ...fixture.intent,
          correlationId: "corr:rev01:match",
          intentId: "intent:rev01:reject",
        },
        context: fixture.context,
        providerRequest: buildRequest(requestBase) as never,
        timeoutMs: 50,
      });

      expect(result.ok).toBe(false);
      expect(result.run).toBeUndefined();
      expect(result.stateTrace).toEqual([]);
      expect(result.providerAttempted).toBe(false);
      expect(result.providerInvoked).toBe(false);
      expect(result.providerCompleted).toBe(false);
      expect(describeCalls).toBe(0);
      expect(completeCalls).toBe(0);
      expect(result.lateEvidenceRecorded).toBe(false);
      if (result.ok) throw new Error("expected failure");
      expect(result.failure.family).toBe("validation");
      expect(result.failure.code).toBe("VALIDATION_ERROR");
    },
  );

  it.each([
    "password=late-secret",
    "token=abc",
    "token : abc",
    "apiKey=k",
    "api_key = k",
    "api-key: k",
    "Authorization Bearer xyz",
    "Authorization: Bearer xyz",
    "bearer xyz",
    "access_token=abc",
    "refresh_token=abc",
    "client_secret=abc",
    "cookie=session-value",
    '"apiKey":"value"',
    "?token=value",
    "&token=value",
    "contains private key material",
    "ghp_abcdefghij",
    "github_pat_abcdefghij",
    "sk-abcdefghij",
    "xoxb-abcdefghij",
    "ToKeN=AbC",
    "line1\ntoken=abc\nline3",
    `${"safe-".repeat(80)}token=abc`,
    "token=abc\u0000tail",
    { not: "a string" },
    null,
    ["array"],
    42,
    true,
  ])(
    "F-QA-D2D3-05 / F-QA-REV-D2D3-02 — late secret %j becomes late_result_redacted",
    async (summary) => {
      const base = composeExecutionRunProvidersFake();
      const sensitiveMarkers = [
        "late-secret",
        "token=abc",
        "token : abc",
        "apiKey=k",
        "api_key = k",
        "api-key: k",
        "Authorization Bearer xyz",
        "Authorization: Bearer xyz",
        "bearer xyz",
        "access_token=abc",
        "refresh_token=abc",
        "client_secret=abc",
        "cookie=session-value",
        '"apiKey":"value"',
        "?token=value",
        "&token=value",
        "private key",
        "ghp_abcdefghij",
        "github_pat_abcdefghij",
        "sk-abcdefghij",
        "xoxb-abcdefghij",
        "ToKeN=AbC",
        "token=abc",
      ];
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => base.ai.describeCapability(),
        complete: async (request) => ({
          kind: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "cancelled",
            retryable: false,
            correlationId: request.correlationId,
          }),
        }),
      };
      const composition = composeExecutionRunD2D3({
        providers: composeExecutionRunProviders({ ...base, ai }),
      });
      const fixture = getFixture("nominal");
      const result = await composition.coordinate({
        intent: {
          ...fixture.intent,
          correlationId: "corr:rev02",
          intentId: "intent:rev02",
        },
        context: fixture.context,
        providerRequest: {
          correlationId: "corr:rev02",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "late" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
        lateEvidenceSummary: summary as never,
      });

      expect(result.run?.state).toBe("cancelled");
      expect(result.lateEvidenceRecorded).toBe(true);
      const late = result.run?.evidence?.at(-1);
      expect(late).toMatchObject({
        late: true,
        official: true,
        source: "fixture",
        summary: "late_result_redacted",
      });
      const runJson = JSON.stringify(result.run);
      const projection = createExecutionProjection({
        run: result.run!,
        openReserves: [],
      });
      expect(projection.ok).toBe(true);
      const projJson = JSON.stringify(projection);
      for (const marker of sensitiveMarkers) {
        if (typeof summary === "string" && summary.includes(marker)) {
          expect(runJson).not.toContain(marker);
          expect(projJson).not.toContain(marker);
          expect(JSON.stringify(result)).not.toContain(marker);
        }
      }
      if (typeof summary === "string" && summary.includes("session-value")) {
        expect(runJson).not.toContain("session-value");
      }
      if (typeof summary === "string" && summary.includes("late-secret")) {
        expect(runJson).not.toContain("late-secret");
      }
    },
  );

  it("F06 — invalid intent yields zero describeCapability and zero provider calls", async () => {
    const base = composeExecutionRunProvidersFake();
    let describeCalls = 0;
    let completeCalls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => {
        describeCalls += 1;
        return base.ai.describeCapability();
      },
      complete: async (request) => {
        completeCalls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const fixture = getFixture("validation_failure");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not run" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });

    expect(result.ok).toBe(false);
    expect(describeCalls).toBe(0);
    expect(completeCalls).toBe(0);
    expect(result.run).toBeUndefined();
    expect(result.providerInvoked).toBe(false);
  });

  it("F07 — hostile request getter is rejected before run creation", async () => {
    const core = composeExecutionRunMemory({
      clockIso: "2026-08-04T10:00:00.000Z",
    });
    const providers = composeExecutionRunProvidersFake();
    const fixture = getFixture("nominal");
    const hostile = Object.create(null);
    Object.defineProperty(hostile, "lane", {
      enumerable: true,
      get() {
        throw new Error("hostile_request_getter");
      },
    });
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(
        {
          intent: {
            ...fixture.intent,
            correlationId: "corr:f07-req",
            intentId: "intent:f07-req",
          },
          context: fixture.context,
          providerRequest: hostile,
          timeoutMs: 50,
        },
        {
          execution: core,
          providers,
          events: providers.events,
          clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
        },
      );
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId("corr:f07-req");
    expect(rawError).toBe("");
    expect(result?.ok).toBe(false);
    expect(result?.providerInvoked).toBe(false);
    expect(stored).toEqual([]);
  });

  it("F07 — hostile result getter yields failed terminal without orphan running", async () => {
    const base = composeExecutionRunProvidersFake();
    const hostileResult = Object.create(null);
    Object.defineProperty(hostileResult, "kind", {
      enumerable: true,
      get() {
        throw new Error("hostile_result_getter");
      },
    });
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () =>
        hostileResult as unknown as ProviderInvocationResult,
    };
    const core = composeExecutionRunMemory({
      clockIso: "2026-08-04T10:00:00.000Z",
    });
    const providers = composeExecutionRunProviders({ ...base, ai });
    const fixture = getFixture("nominal");
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(
        {
          intent: {
            ...fixture.intent,
            correlationId: "corr:f07-res",
            intentId: "intent:f07-res",
          },
          context: fixture.context,
          providerRequest: {
            correlationId: "corr:f07-res",
            lane: "ai",
            operation: "complete",
            messages: [{ role: "user", content: "hostile" }],
            timeoutMs: 50,
          },
          timeoutMs: 50,
        },
        {
          execution: core,
          providers,
          events: providers.events,
          clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
        },
      );
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId("corr:f07-res");
    expect(rawError).toBe("");
    expect(result?.run?.state).toBe("failed");
    expect(stored.at(-1)?.state).toBe("failed");
    expect(stored.at(-1)?.state).not.toBe("running");
    expect(JSON.stringify(result)).not.toContain("hostile_result_getter");
  });

  it("F08 — pre-cancellation reports providerInvoked=false with zero calls", async () => {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        calls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const fixture = getFixture("nominal");
    const controller = new AbortController();
    controller.abort();
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:f08",
        intentId: "intent:f08",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:f08",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "cancel" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
      signal: controller.signal,
    });

    expect(result.run?.state).toBe("cancelled");
    expect(calls).toBe(0);
    expect(result.providerAttempted).toBe(true);
    expect(result.providerInvoked).toBe(false);
    expect(result.providerCompleted).toBe(false);
  });

  it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY, 1.5, MAX_COORDINATOR_TIMEOUT_MS + 1])(
    "F09 — invalid timeout %s creates no run and invokes nothing",
    async (timeoutMs) => {
      const base = composeExecutionRunProvidersFake();
      let describeCalls = 0;
      let completeCalls = 0;
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => {
          describeCalls += 1;
          return base.ai.describeCapability();
        },
        complete: async (request) => {
          completeCalls += 1;
          return base.ai.complete(request);
        },
      };
      const composition = composeExecutionRunD2D3({
        providers: composeExecutionRunProviders({ ...base, ai }),
      });
      const fixture = getFixture("nominal");
      const result = await composition.coordinate({
        intent: {
          ...fixture.intent,
          correlationId: `corr:f09:${String(timeoutMs)}`,
          intentId: `intent:f09:${String(timeoutMs)}`,
        },
        context: fixture.context,
        providerRequest: {
          correlationId: `corr:f09:${String(timeoutMs)}`,
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "timeout" }],
          timeoutMs: 50,
        },
        timeoutMs,
      });
      expect(result.ok).toBe(false);
      expect(result.run).toBeUndefined();
      expect(result.providerInvoked).toBe(false);
      expect(describeCalls).toBe(0);
      expect(completeCalls).toBe(0);
      if (result.ok) throw new Error("expected failure");
      expect(result.failure.code).toBe("VALIDATION_ERROR");
    },
  );

  it("F09 — valid timeout still succeeds", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        correlationId: "corr:f09:ok",
        intentId: "intent:f09:ok",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:f09:ok",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "ok" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    expect(result.ok).toBe(true);
    expect(result.run?.state).toBe("succeeded");
  });

  it.each([
    "projects/sfia-studio/%2e%2e/.env",
    "%2e%2e/.env",
    "%252e%252e/.env",
    "projects\\sfia-studio\\%2e%2e\\.env",
    "%2fetc%2fpasswd",
    "projects/sfia-studio/%00.env",
    "projects/sfia-studio/%zz",
  ])("F10 — encoded hostile path %s is blocked before provider", async (path) => {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({
        ...base,
        git: {
          ...base.git,
          read: async (request) => {
            calls += 1;
            return base.git.read(request);
          },
        },
      }),
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        intentId: `intent:f10:${path}`,
        correlationId: `corr:f10:${path}`,
        requestedLane: "git",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: `corr:f10:${path}`,
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "path_meta",
        path,
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    expect(result.ok).toBe(false);
    expect(calls).toBe(0);
    expect(result.providerInvoked).toBe(false);
    expect(result.run?.evidence).toBeUndefined();
    expect(result.run?.state === "succeeded").toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessExecutionReadiness,
  D2D3_OPEN_RESERVES,
  getFixture,
} from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";

describe("D2-D3 bounded readiness assessment", () => {
  it("rejects boolean-only proofs as not demonstrated", () => {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    expect(assessment.uxExploration.status).toBe("not_demonstrated");
  });

  it("demonstrates UX exploration only with linked run, projection, and evidence", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "readiness fixture" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    expect(result.run?.state).toBe("succeeded");
    const assessment = await composition.assessById(result.run!.runId);
    expect(assessment.uxExploration.status).toBe("demonstrated");
  });

  it("keeps UI delivery not demonstrated and strong runtime blocked", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "bounded" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    const assessment = await composition.assessById(result.run!.runId);

    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
    expect(assessment.strongRuntimeVerdict.reasons).toEqual([
      "G-D2D-CURSOR-01 not consumed",
      "G-D2D-PERSIST-01 not consumed",
      "Cursor unverified",
      "memory is process-local",
      "no live provider proof",
    ]);
  });

  it("carries every inherited reserve without lifting it", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "reserves" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    const assessment = await composition.assessById(result.run!.runId);

    expect(assessment.openReserves).toEqual(D2D3_OPEN_RESERVES);
    expect(assessment.openReserves).toHaveLength(6);
  });

  it("uses only the three bounded statuses and makes no excessive claim", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "status" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    const assessment = await composition.assessById(result.run!.runId);
    const statuses = [
      assessment.uxExploration.status,
      assessment.uiDelivery.status,
      assessment.strongRuntimeVerdict.status,
    ];
    const serialized = JSON.stringify(assessment);

    expect(statuses).toEqual([
      "demonstrated",
      "not_demonstrated",
      "blocked",
    ]);
    expect(serialized).not.toMatch(
      /production-ready|RUN READY|multi-instance ready|restart-safe|Cursor verified/i,
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/execution-run");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function importsOf(file: string): string[] {
  return fs
    .readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
}

describe("D2-D1 execution-run import boundaries", () => {
  it("domain stays pure", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:node:|next|react|ajv|@\/lib\/(?:ops1|d1|platform|vertical-slice|harness)|fs|path|child_process)/;
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
      }
    }
    expect(hits).toEqual([]);
  });

  it("application does not import infrastructure, AJV, Node, Next, or providers", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "application"));
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|@cursor\/|node:|from\s+["']next|from\s+["']react/.test(
            line,
          )
        ) {
          hits.push(`${file}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("module does not import harness, vertical-slice-runtime, execution-attempt, or execution-contract internals", () => {
    const files = listTsFiles(MODULE_ROOT);
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /vertical-slice-runtime|execution-attempt|execution-contract|harness\//.test(
            line,
          )
        ) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("root barrel does not export concrete composition", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/composeExecutionRunMemory/);
    expect(barrel).not.toMatch(/MemoryExecutionRunStore/);
    expect(barrel).not.toMatch(/AjvExecutionRunSchemaValidation/);
  });

  it("server composition lives under server/ with server-only guard", () => {
    const serverDir = path.join(MODULE_ROOT, "server");
    expect(fs.existsSync(serverDir)).toBe(true);
    const compose = fs.readFileSync(
      path.join(serverDir, "composeExecutionRunMemory.ts"),
      "utf8",
    );
    expect(compose).toMatch(/assertServerOnly/);
    expect(compose).toMatch(/infrastructure\//);
    const guard = fs.readFileSync(path.join(serverDir, "serverOnly.ts"), "utf8");
    expect(guard).toMatch(/typeof window/);
  });

  it("application folder no longer hosts concrete composition", () => {
    expect(
      fs.existsSync(path.join(MODULE_ROOT, "application/composeExecutionRun.ts")),
    ).toBe(false);
  });

  it("public persistExecutionRun is removed; helper lives under application/internal", () => {
    expect(
      fs.existsSync(path.join(MODULE_ROOT, "application/persistExecutionRun.ts")),
    ).toBe(false);
    expect(
      fs.existsSync(
        path.join(
          MODULE_ROOT,
          "application/internal/persistExecutionRunInternal.ts",
        ),
      ),
    ).toBe(true);
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/persistExecutionRun/);
  });
});


describe("D2-D2 execution-run provider boundary imports", () => {
  it("domain still has no platform/SDK imports after D2-D2", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:node:|openai|@octokit|@\/lib\/(?:platform|harness)|fs|path|child_process)/;
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
      }
    }
    expect(hits).toEqual([]);
  });

  it("application providerInvocation does not import platform adapters", () => {
    const file = path.join(MODULE_ROOT, "application/providerInvocation.ts");
    const src = fs.readFileSync(file, "utf8");
    expect(src).not.toMatch(/platform\//);
    expect(src).not.toMatch(/openai|@octokit|harness\//);
  });

  it("root barrel does not export concrete provider adapters", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/FakeAiExecutionAdapter/);
    expect(barrel).not.toMatch(/PlatformAiExecutionAdapter/);
    expect(barrel).not.toMatch(/FakeGitReadAdapter/);
    expect(barrel).not.toMatch(/FixtureCursorExecutionAdapter/);
    expect(barrel).not.toMatch(/composeExecutionRunProvidersFake/);
  });

  it("Git read port type file declares no mutation methods", () => {
    const src = fs.readFileSync(path.join(MODULE_ROOT, "ports/gitReadPort.ts"), "utf8");
    expect(src).not.toMatch(/\bpush\b/);
    expect(src).not.toMatch(/\bcommit\(/);
    expect(src).not.toMatch(/^\s*write\s*\(/m);
    expect(src).toMatch(/read\(request/);
  });

  it("public SecretSourcePort has no materialize surface", () => {
    const src = fs.readFileSync(path.join(MODULE_ROOT, "ports/secretSourcePort.ts"), "utf8");
    expect(src).not.toMatch(/materialize/);
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/serverOnlySecretMaterializer/);
    expect(barrel).not.toMatch(/materializeForServerOnly/);
  });
});

describe("D2-D3 coordination and projection boundaries", () => {
  it("keeps application code free of Node, Next, SDK, process, and infrastructure imports", () => {
    const files = [
      "application/coordinateExecutionRun.ts",
      "application/executionProjection.ts",
      "application/executionReadiness.ts",
      "application/untrustedExecutionData.ts",
    ];
    for (const relative of files) {
      const src = fs.readFileSync(path.join(MODULE_ROOT, relative), "utf8");
      expect(src).not.toMatch(
        /from\s+["'](?:node:|next|openai|@octokit)|\bchild_process\b|\bprocess\.|\binfrastructure\//,
      );
    }
  });

  it("keeps the concrete D2-D3 composition out of the public barrel", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/composeExecutionRunD2D3/);
    expect(barrel).not.toMatch(/composeExecutionRunProviders/);
    expect(barrel).not.toMatch(/MemoryExecutionRunRepository/);
    // Coordinator function must not be re-exported; timeout bound may import the module path.
    expect(barrel).not.toMatch(
      /export\s*\{[^}]*\bcoordinateExecutionRun\b[^}]*\}\s*from/,
    );
    expect(barrel).not.toMatch(/availableSources/);
  });

  it("reuses the existing single memory authority without a new store or repository", () => {
    const src = fs.readFileSync(
      path.join(MODULE_ROOT, "server/composeExecutionRunD2D3.ts"),
      "utf8",
    );
    expect(src).toMatch(/composeExecutionRunMemory/);
    expect(src).not.toMatch(/new\s+MemoryExecutionRunStore/);
    expect(src).not.toMatch(/new\s+MemoryExecutionRunRepository/);
    expect(src).not.toMatch(/\.save\(/);
    expect(src).not.toMatch(/availableSources/);
  });

  it("gives the coordinator only create and transition state authority", () => {
    const src = fs.readFileSync(
      path.join(MODULE_ROOT, "application/coordinateExecutionRun.ts"),
      "utf8",
    );
    expect(src).toMatch(/createExecutionRun/);
    expect(src).toMatch(/transitionExecutionRun/);
    expect(src).not.toMatch(/\.save\(/);
    expect(src).not.toMatch(/Object\.assign\([^)]*run/);
    expect(src).not.toMatch(/\brun\.state\s*=/);
    expect(src).not.toMatch(/availableSources:/);
  });

  it("keeps projection pure and free of secret materializers and transports", () => {
    const src = fs.readFileSync(
      path.join(MODULE_ROOT, "application/executionProjection.ts"),
      "utf8",
    );
    expect(src).not.toMatch(
      /materialize|NextResponse|fetch\(|from\s+["'](?:node:|next)/i,
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
  pathMatchesAllowlistPrefix,
} from "@/lib/oa/execution-run/domain/sandboxContract";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";

describe("D2D2-08 sandbox contract fixture", () => {
  it("deny-by-default and protects sensitive paths", () => {
    expect(
      evaluateSandboxPath({
        path: "secrets/x",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: ".git/config",
        allowlistRepos: ["projects/sfia-studio/", ".git/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/app/lib/oa/execution-run/index.ts",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(true);
  });

  it("blocks sibling prefix bypass and traversal", () => {
    expect(pathMatchesAllowlistPrefix("projects/sfia-studio-evil/secret.ts", "projects/sfia-studio")).toBe(
      false,
    );
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio-evil/secret.ts",
        allowlistRepos: ["projects/sfia-studio"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/deep/child.ts",
        allowlistRepos: ["projects/sfia-studio"],
      }).allowed,
    ).toBe(true);
    expect(
      evaluateSandboxPath({
        path: "../x",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "/abs",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects//sfia-studio/x",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
  });

  it("blocks percent-encoded traversal and protected paths", () => {
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/%2e%2e/.env",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "%2e%2e/.env",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "%252e%252e/.env",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects\\sfia-studio\\%2e%2e\\.env",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "%2fetc%2fpasswd",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/%00.env",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/%zz",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/app/lib/oa/execution-run/index.ts",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(true);
  });

  it("blocks git write and arbitrary commands", () => {
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: true,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
      }),
    ).toMatchObject({ allowed: false, reason: "git_write" });
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: true,
        gitWriteRequested: false,
      }),
    ).toMatchObject({ allowed: false, reason: "arbitrary_command" });
  });

  it("requires independent observed branch/HEAD anchors", () => {
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
        expectedBranch: "delivery/x",
      }),
    ).toMatchObject({ allowed: false, reason: "observed_missing" });
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
        expectedBranch: "delivery/x",
        observedBranch: "other",
      }),
    ).toMatchObject({ allowed: false, reason: "branch_mismatch" });
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
        expectedBranch: "delivery/x",
        observedBranch: "delivery/x",
        expectedHead: "abc",
        observedHead: "abc",
      }),
    ).toEqual({ allowed: true });
  });

  it("fixture cursor cannot claim live and stays unverified", async () => {
    const cursor = new FixtureCursorExecutionAdapter();
    expect(cursor.live).toBe(false);
    expect(cursor.describeCapability().verified).toBe(false);
    const denied = await cursor.executeFixture({
      correlationId: "cu1",
      lane: "cursor",
      operation: "fixture",
      instructionSummary: "path=.env",
      allowlistRepos: ["projects/sfia-studio/"],
      protectedPaths: [".env"],
      timeoutMs: 100,
    });
    expect(denied.kind).toBe("failure");

    const mismatch = await cursor.executeFixture({
      correlationId: "cu2",
      lane: "cursor",
      operation: "fixture",
      instructionSummary: "noop",
      allowlistRepos: ["projects/sfia-studio/"],
      protectedPaths: [],
      expectedBranch: "expected-only",
      observedBranch: "different",
      timeoutMs: 100,
    });
    expect(mismatch.kind).toBe("failure");
  });
});
```

### `projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts`

```typescript
import type {
  Completeness,
  ExecutionRun,
  ExecutionState,
  UsageSummary,
} from "../domain/types";
import {
  assessExecutionReadiness,
  type ExecutionReadinessAssessment,
} from "./executionReadiness";
import {
  readUntrustedPlainData,
  redactBoundedText,
} from "./untrustedExecutionData";

const MAX_TEXT = 240;

const ALLOWED_STATES = new Set<string>([
  "idle",
  "running",
  "awaiting_human",
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "blocked",
]);

const ALLOWED_SOURCES = new Set(["fixture", "sandbox-real", "real"]);
const ALLOWED_LANES = new Set(["ai", "git", "cursor", "none"]);
const ALLOWED_COMPLETENESS = new Set(["complete", "partial", "empty"]);

export type ExecutionProjection = {
  readonly runId: string;
  readonly correlationId: string;
  readonly state: ExecutionState;
  readonly source: ExecutionRun["disclosure"]["source"];
  readonly providerLane: ExecutionRun["disclosure"]["providerLane"];
  readonly phase: string;
  readonly completeness: Completeness | "unavailable";
  readonly resultSummary: string | null;
  readonly failure: {
    readonly family: string;
    readonly code: string;
    readonly message: string;
    readonly retryable: boolean;
  } | null;
  readonly blockedReason: string | null;
  readonly humanGate: {
    readonly gateId: string;
    readonly question: string;
    readonly required: boolean;
    readonly decision: "approve" | "reject" | "cancel" | null;
  } | null;
  readonly evidenceSummary: readonly {
    readonly evidenceId: string;
    readonly source: ExecutionRun["disclosure"]["source"];
    readonly completeness: Completeness;
    readonly producedAt: string;
    readonly late: boolean;
    readonly official: true;
  }[];
  readonly usage: UsageSummary;
  readonly openReserves: readonly string[];
  readonly readinessAssessment: ExecutionReadinessAssessment;
  readonly limits: readonly string[];
  readonly persistence: {
    readonly kind: "memory_process_local";
    readonly durable: false;
    readonly multiInstance: false;
    readonly restartSafe: false;
  };
  readonly cursorUnverified: true;
  readonly gitWrite: false;
};

export type CreateExecutionProjectionResult =
  | { readonly ok: true; readonly projection: ExecutionProjection }
  | {
      readonly ok: false;
      readonly failure: { readonly code: string; readonly message: string };
    };

function observablePhase(state: ExecutionState): string {
  switch (state) {
    case "idle":
      return "validated";
    case "running":
      return "provider_operation";
    case "awaiting_human":
      return "human_decision";
    default:
      return "terminal";
  }
}

function fail(
  code: string,
  message: string,
): CreateExecutionProjectionResult {
  return { ok: false, failure: { code, message } };
}

function asString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function readPersistence(raw: unknown): CreateExecutionProjectionResult | {
  ok: true;
  persistence: ExecutionProjection["persistence"];
} {
  const copied = readUntrustedPlainData(raw);
  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
    return fail("PERSISTENCE_INVALID", "persistence must be a plain object");
  }
  const p = copied.value as Record<string, unknown>;
  if (p.kind !== "memory_process_local") {
    return fail("PERSISTENCE_KIND", "persistence.kind must be memory_process_local");
  }
  if (p.durable !== false || p.multiInstance !== false || p.restartSafe !== false) {
    return fail(
      "PERSISTENCE_FLAGS",
      "persistence durable/multiInstance/restartSafe must be false",
    );
  }
  return {
    ok: true,
    persistence: {
      kind: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
  };
}

function readEvidence(
  raw: unknown,
  runId: string,
  correlationId: string,
  source: ExecutionRun["disclosure"]["source"],
): CreateExecutionProjectionResult | {
  ok: true;
  evidence: ExecutionProjection["evidenceSummary"];
} {
  if (raw === undefined) {
    return { ok: true, evidence: [] };
  }
  const copied = readUntrustedPlainData(raw, { redact: true });
  if (!copied.ok || !Array.isArray(copied.value)) {
    return fail("EVIDENCE_INVALID", "evidence must be a plain array");
  }
  const out: ExecutionProjection["evidenceSummary"][number][] = [];
  for (const item of copied.value) {
    if (!item || typeof item !== "object") {
      return fail("EVIDENCE_ENTRY", "evidence entry must be a plain object");
    }
    const e = item as Record<string, unknown>;
    if (e.official !== true) {
      return fail("EVIDENCE_OFFICIAL", "canonical evidence.official must be true");
    }
    if (e.runId !== runId || e.correlationId !== correlationId) {
      return fail("EVIDENCE_IDENTITY", "evidence identity must match the run");
    }
    if (e.source !== source) {
      return fail("EVIDENCE_SOURCE", "evidence source must match run disclosure source");
    }
    const evidenceId = asString(e.evidenceId);
    const producedAt = asString(e.producedAt);
    if (!evidenceId || !producedAt) {
      return fail("EVIDENCE_FIELDS", "evidence fields missing");
    }
    if (
      typeof e.completeness !== "string" ||
      !ALLOWED_COMPLETENESS.has(e.completeness)
    ) {
      return fail("EVIDENCE_COMPLETENESS", "evidence completeness invalid");
    }
    if (typeof e.late !== "boolean") {
      return fail("EVIDENCE_LATE", "evidence.late must be boolean");
    }
    if (
      typeof e.source !== "string" ||
      !ALLOWED_SOURCES.has(e.source)
    ) {
      return fail("EVIDENCE_SOURCE_VALUE", "evidence source invalid");
    }
    out.push({
      evidenceId,
      source: e.source as ExecutionRun["disclosure"]["source"],
      completeness: e.completeness as Completeness,
      producedAt,
      late: e.late,
      official: true,
    });
  }
  return { ok: true, evidence: out };
}

function readUsage(raw: unknown): UsageSummary {
  const copied = readUntrustedPlainData(raw, { redact: true });
  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
    return { status: "unavailable", reason: "usage_unavailable" };
  }
  const usage = copied.value as Record<string, unknown>;
  if (usage.status === "validated") {
    return {
      status: "validated",
      inputTokens:
        typeof usage.inputTokens === "number" ? usage.inputTokens : undefined,
      outputTokens:
        typeof usage.outputTokens === "number" ? usage.outputTokens : undefined,
      unit: typeof usage.unit === "string" ? usage.unit : undefined,
    };
  }
  return {
    status: "unavailable",
    reason:
      typeof usage.reason === "string"
        ? (redactBoundedText(usage.reason, MAX_TEXT) ?? "usage_unavailable")
        : "usage_unavailable",
  };
}

/**
 * Reconstruct a transport-neutral projection from unknown input.
 * TypeScript types are not trusted; values are allowlisted and redacted.
 */
export function createExecutionProjection(
  input: unknown,
): CreateExecutionProjectionResult {
  const envelope = readUntrustedPlainData(input, {
    redact: true,
    maxStringLength: 100_000,
  });
  if (!envelope.ok || !envelope.value || typeof envelope.value !== "object") {
    return fail("INPUT_REJECTED", "projection input rejected");
  }
  const root = envelope.value as Record<string, unknown>;
  const runRaw = root.run ?? root;
  if (!runRaw || typeof runRaw !== "object" || Array.isArray(runRaw)) {
    return fail("RUN_REQUIRED", "run object required");
  }
  const run = runRaw as Record<string, unknown>;

  const runId = asString(run.runId);
  const correlationId = asString(run.correlationId);
  if (!runId || !correlationId) {
    return fail("IDENTITY", "runId and correlationId required");
  }
  if (typeof run.state !== "string" || !ALLOWED_STATES.has(run.state)) {
    return fail("STATE", "run.state invalid");
  }
  const state = run.state as ExecutionState;

  const disclosureRaw = run.disclosure;
  if (!disclosureRaw || typeof disclosureRaw !== "object") {
    return fail("DISCLOSURE", "disclosure required");
  }
  const disclosure = disclosureRaw as Record<string, unknown>;
  if (
    typeof disclosure.source !== "string" ||
    !ALLOWED_SOURCES.has(disclosure.source) ||
    typeof disclosure.providerLane !== "string" ||
    !ALLOWED_LANES.has(disclosure.providerLane)
  ) {
    return fail("DISCLOSURE_FIELDS", "disclosure source/lane invalid");
  }
  const source = disclosure.source as ExecutionRun["disclosure"]["source"];
  const providerLane =
    disclosure.providerLane as ExecutionRun["disclosure"]["providerLane"];

  const limitsRaw = disclosure.limits;
  const limitsCopied = readUntrustedPlainData(limitsRaw);
  if (!limitsCopied.ok || !Array.isArray(limitsCopied.value)) {
    return fail("LIMITS", "disclosure.limits must be a string array");
  }
  const limits: string[] = [];
  for (const item of limitsCopied.value) {
    if (typeof item !== "string") {
      return fail("LIMITS_TYPE", "disclosure.limits entries must be strings");
    }
    limits.push(redactBoundedText(item, MAX_TEXT) ?? "");
  }

  const persistence = readPersistence(run.persistence);
  if (!("persistence" in persistence)) return persistence;

  const evidence = readEvidence(run.evidence, runId, correlationId, source);
  if (!("evidence" in evidence)) return evidence;

  let resultSummary: string | null = null;
  let completeness: Completeness | "unavailable" = "unavailable";
  if (run.externalResult && typeof run.externalResult === "object") {
    const ext = run.externalResult as Record<string, unknown>;
    if (ext.kind === "success") {
      resultSummary = redactBoundedText(ext.redactedSummary, MAX_TEXT);
      if (
        typeof ext.completeness === "string" &&
        ALLOWED_COMPLETENESS.has(ext.completeness)
      ) {
        completeness = ext.completeness as Completeness;
      }
    }
  }
  if (completeness === "unavailable" && evidence.evidence.length > 0) {
    completeness = evidence.evidence[evidence.evidence.length - 1]!.completeness;
  }

  let failure: ExecutionProjection["failure"] = null;
  if (run.failure && typeof run.failure === "object") {
    const f = run.failure as Record<string, unknown>;
    failure = {
      family: asString(f.family) ?? "internal_normalized_failure",
      code: asString(f.code) ?? "INTERNAL_NORMALIZED_FAILURE",
      message:
        redactBoundedText(f.userMessage, MAX_TEXT) ??
        "Failure details unavailable",
      retryable: f.retryable === true,
    };
  }

  let humanGate: ExecutionProjection["humanGate"] = null;
  if (run.gate && typeof run.gate === "object") {
    const g = run.gate as Record<string, unknown>;
    const gateId = asString(g.gateId);
    if (gateId) {
      humanGate = {
        gateId,
        question:
          redactBoundedText(g.question, MAX_TEXT) ?? "Human decision required",
        required: g.required === true,
        decision:
          g.decision === "approve" ||
          g.decision === "reject" ||
          g.decision === "cancel"
            ? g.decision
            : null,
      };
    }
  }

  const usage =
    root.validatedUsage !== undefined
      ? readUsage(root.validatedUsage)
      : readUsage(run.usage);

  const openReservesRaw = root.openReserves;
  let openReserves: readonly string[] | undefined;
  if (openReservesRaw !== undefined) {
    const copied = readUntrustedPlainData(openReservesRaw, { redact: true });
    if (!copied.ok || !Array.isArray(copied.value)) {
      return fail("RESERVES", "openReserves must be a string array");
    }
    openReserves = copied.value.map((item) => {
      if (typeof item !== "string") return "reserve_redacted";
      return redactBoundedText(item, MAX_TEXT) ?? "reserve_redacted";
    });
  }

  const readinessAssessment: ExecutionReadinessAssessment =
    root.readinessAssessment && typeof root.readinessAssessment === "object"
      ? (root.readinessAssessment as ExecutionReadinessAssessment)
      : assessExecutionReadiness({
          run: {
            runId,
            correlationId,
            state,
            disclosure: { source, providerLane, limits },
            evidence: evidence.evidence.map((e) => ({
              ...e,
              runId,
              correlationId,
              official: true as const,
              summary: "projection_internal",
            })),
            persistence: persistence.persistence,
          },
        });

  // Re-assess when caller supplied a readiness object that is not artifact-linked.
  const linkedReadiness = assessExecutionReadiness({
    run: {
      runId,
      correlationId,
      state,
      disclosure: {
        source,
        providerLane,
        limits,
        processLocalMemory: true,
        cursorUnverified: true,
      },
      evidence: evidence.evidence.map((e) => ({
        evidenceId: e.evidenceId,
        runId,
        correlationId,
        source: e.source,
        completeness: e.completeness,
        producedAt: e.producedAt,
        late: e.late,
        official: true as const,
        summary: "projection_internal",
      })),
      persistence: persistence.persistence,
    },
    projection: {
      runId,
      correlationId,
      source,
      state,
    },
  });

  const finalReadiness =
    root.readinessAssessment && typeof root.readinessAssessment === "object"
      ? linkedReadiness
      : readinessAssessment;

  return {
    ok: true,
    projection: {
      runId,
      correlationId,
      state,
      source,
      providerLane,
      phase: observablePhase(state),
      completeness,
      resultSummary,
      failure,
      blockedReason: redactBoundedText(run.blockedReason, MAX_TEXT),
      humanGate,
      evidenceSummary: evidence.evidence,
      usage,
      openReserves: openReserves ?? finalReadiness.openReserves,
      readinessAssessment: finalReadiness,
      limits,
      persistence: persistence.persistence,
      cursorUnverified: true,
      gitWrite: false,
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts`

```typescript
import { readUntrustedPlainData } from "./untrustedExecutionData";

export type ReadinessStatus =
  | "demonstrated"
  | "not_demonstrated"
  | "blocked";

export type ReadinessLevel = {
  readonly status: ReadinessStatus;
  readonly reasons: readonly string[];
};

export type ExecutionReadinessAssessment = {
  readonly uxExploration: ReadinessLevel;
  readonly uiDelivery: ReadinessLevel;
  readonly strongRuntimeVerdict: ReadinessLevel;
  readonly openReserves: readonly string[];
};

export const D2D3_OPEN_RESERVES = [
  "R-QA-REV-01 — OPEN NOT LIFTED",
  "R-QA-REV-02 — OPEN NOT LIFTED",
  "R-QA-D2C-01 — OPEN NOT LIFTED",
  "Cursor product capabilities — UNVERIFIED",
  "memory process-local only",
  "R-PR-D2D2-01 — MINOR",
] as const;

const UI_DELIVERY: ReadinessLevel = {
  status: "not_demonstrated",
  reasons: [
    "no UI or accessibility delivery",
    "no Figma evidence",
    "no D3 transport selected",
  ],
};

const STRONG_RUNTIME: ReadinessLevel = {
  status: "blocked",
  reasons: [
    "G-D2D-CURSOR-01 not consumed",
    "G-D2D-PERSIST-01 not consumed",
    "Cursor unverified",
    "memory is process-local",
    "no live provider proof",
  ],
};

function notDemonstrated(reasons: readonly string[]): ExecutionReadinessAssessment {
  return {
    uxExploration: { status: "not_demonstrated", reasons },
    uiDelivery: UI_DELIVERY,
    strongRuntimeVerdict: STRONG_RUNTIME,
    openReserves: D2D3_OPEN_RESERVES,
  };
}

function isOfficialCompleteEvidence(
  evidence: unknown,
  runId: string,
  correlationId: string,
  source: string,
): boolean {
  if (!Array.isArray(evidence) || evidence.length === 0) return false;
  return evidence.some((item) => {
    if (!item || typeof item !== "object") return false;
    const e = item as Record<string, unknown>;
    return (
      e.official === true &&
      e.completeness === "complete" &&
      e.late === false &&
      e.runId === runId &&
      e.correlationId === correlationId &&
      e.source === source &&
      source === "fixture"
    );
  });
}

/**
 * Readiness from linked, validated artifacts only.
 * Boolean-only caller proofs are rejected as not_demonstrated.
 */
export function assessExecutionReadiness(
  artifacts: unknown,
): ExecutionReadinessAssessment {
  const copied = readUntrustedPlainData(artifacts, { redact: true });
  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
    return notDemonstrated([
      "linked run, validated projection, and official evidence are required",
    ]);
  }
  const root = copied.value as Record<string, unknown>;

  // Explicitly reject the retired boolean-only proof API.
  if (
    "fixturePathDemonstrated" in root ||
    "projectionDemonstrated" in root ||
    "disclosuresDemonstrated" in root
  ) {
    return notDemonstrated([
      "boolean readiness proofs are not accepted; linked artifacts are required",
    ]);
  }

  const runRaw = root.run;
  if (!runRaw || typeof runRaw !== "object" || Array.isArray(runRaw)) {
    return notDemonstrated(["canonical ExecutionRun artifact is required"]);
  }
  const run = runRaw as Record<string, unknown>;
  const runId = typeof run.runId === "string" ? run.runId : null;
  const correlationId =
    typeof run.correlationId === "string" ? run.correlationId : null;
  const state = typeof run.state === "string" ? run.state : null;
  const disclosure =
    run.disclosure && typeof run.disclosure === "object"
      ? (run.disclosure as Record<string, unknown>)
      : null;
  const source =
    disclosure && typeof disclosure.source === "string"
      ? disclosure.source
      : null;

  if (!runId || !correlationId || !state || !source) {
    return notDemonstrated(["run identity, state, and source are required"]);
  }

  if (state !== "succeeded" || source !== "fixture") {
    return notDemonstrated([
      "UX exploration requires a succeeded fixture terminal",
    ]);
  }

  if (
    !isOfficialCompleteEvidence(run.evidence, runId, correlationId, source)
  ) {
    return notDemonstrated([
      "official complete non-late fixture evidence linked to the run is required",
    ]);
  }

  const persistence =
    run.persistence && typeof run.persistence === "object"
      ? (run.persistence as Record<string, unknown>)
      : null;
  if (
    !persistence ||
    persistence.kind !== "memory_process_local" ||
    persistence.durable !== false ||
    persistence.multiInstance !== false ||
    persistence.restartSafe !== false
  ) {
    return notDemonstrated(["process-local persistence disclosure is required"]);
  }

  const projectionRaw = root.projection;
  if (projectionRaw !== undefined) {
    if (typeof projectionRaw !== "object" || projectionRaw === null) {
      return notDemonstrated(["projection artifact must be a plain object"]);
    }
    const projection = projectionRaw as Record<string, unknown>;
    if (
      projection.runId !== runId ||
      projection.correlationId !== correlationId ||
      projection.source !== source
    ) {
      return notDemonstrated([
        "projection must share runId, correlationId, and source with the run",
      ]);
    }
  } else {
    // Composition may assess from run alone before projection materialization;
    // still require that a projection *could* be linked (same IDs present on run).
    // UX demonstrated only when a projection artifact is also supplied.
    return notDemonstrated([
      "validated projection of the same run is required for UX demonstration",
    ]);
  }

  const limits = disclosure?.limits;
  if (!Array.isArray(limits) || limits.length === 0) {
    return notDemonstrated(["source disclosure limits are required"]);
  }

  return {
    uxExploration: {
      status: "demonstrated",
      reasons: [
        "linked succeeded fixture run",
        "validated projection of the same run",
        "official complete evidence and disclosures demonstrated",
      ],
    },
    uiDelivery: UI_DELIVERY,
    strongRuntimeVerdict: STRONG_RUNTIME,
    openReserves: D2D3_OPEN_RESERVES,
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts`

```typescript
/**
 * Pure Validation & Read-only Policy foundation (FD-04 / CAD-04).
 * Operates on contracts only — no FS/Git/provider I/O.
 */
import { normalizedFailure } from "./errors";
import type {
  ExecutionContext,
  ExecutionIntent,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "./types";
import { normalizeCanonicalPath } from "./sandboxContract";

export type PolicyInput = {
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly gateSatisfied?: boolean;
};

export type PolicyDecision =
  | { readonly ok: true }
  | { readonly ok: false; readonly failure: NormalizedFailure };

export function evaluateReadOnlyPolicy(input: PolicyInput): PolicyDecision {
  const { intent, context, capability } = input;
  const cid = intent.correlationId;

  if (intent.mutationRequested || context.permissions.gitWrite) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "mutation_forbidden",
        code: "MUTATION_FORBIDDEN",
        userMessage: "Git write or mutation intent is forbidden in D2-D",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  if (intent.arbitraryCommandRequested) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Arbitrary commands are not permitted",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  if (intent.targetPath) {
    const canonical = normalizeCanonicalPath(intent.targetPath);
    if (!canonical.ok) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "protected_path",
          code: "PROTECTED_PATH",
          userMessage: "Target path is protected or invalid",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
    if (context.protectedPaths?.length) {
      const hit = context.protectedPaths.some((p) => {
        const protectedCanonical = normalizeCanonicalPath(p);
        const prefix = protectedCanonical.ok
          ? protectedCanonical.normalized
          : p.replace(/\\/g, "/").replace(/\/+$/, "");
        return (
          canonical.normalized === prefix ||
          canonical.normalized.startsWith(`${prefix}/`)
        );
      });
      if (hit) {
        return {
          ok: false,
          failure: normalizedFailure({
            family: "protected_path",
            code: "PROTECTED_PATH",
            userMessage: "Target path is protected",
            retryable: false,
            correlationId: cid,
          }),
        };
      }
    }
  }

  if (!context.permissions.gitRead && intent.requestedLane === "git") {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "authorization",
        code: "AUTHORIZATION_ERROR",
        userMessage: "Insufficient permission for Git read",
        retryable: true,
        correlationId: cid,
      }),
    };
  }

  if (intent.requestedLane !== "none") {
    if (!capability) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "Provider capability descriptor is required",
          retryable: true,
          correlationId: cid,
        }),
      };
    }
    if (!capability.available) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "Requested provider is unavailable",
          retryable: true,
          correlationId: cid,
        }),
      };
    }
    if (!capability.readOnly) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "mutation_forbidden",
          code: "MUTATION_FORBIDDEN",
          userMessage: "Provider must be read-only for D2-D",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
    // G-D2D-CURSOR-01 is not consumed: never treat capability.verified as authority.
    if (intent.requestedLane === "cursor" || capability.lane === "cursor") {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "sandbox_blocked",
          code: "SANDBOX_BLOCKED",
          userMessage: "Cursor product capabilities remain unverified",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
  }

  if (intent.requiresHumanGate && input.gateSatisfied === false) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "human_gate_required",
        code: "HUMAN_GATE_REQUIRED",
        userMessage: "A structural human gate is required",
        retryable: true,
        correlationId: cid,
      }),
    };
  }

  if (intent.requestedSource !== context.declaredSource) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "source_mismatch",
        code: "SOURCE_MISMATCH",
        userMessage: "Declared source does not match requested source",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  return { ok: true };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts`

```typescript
/**
 * D2D2-07 — adversarial validation of untrusted provider-ish payloads
 * BEFORE any metadata field is trusted.
 */
import { normalizedFailure } from "./errors";
import type { NormalizedFailure, ProviderLane } from "./types";
import { isIsoTimestamp } from "./evidence";
import { normalizeCanonicalPath } from "./sandboxContract";

const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];

const OPS_BY_LANE: Record<ProviderLane, readonly string[]> = {
  ai: ["complete"],
  git: ["read", "git_read"],
  cursor: ["fixture", "cursor_fixture"],
  none: ["event_emit"],
};

const COMMON_KEYS = new Set([
  "correlationId",
  "runId",
  "lane",
  "operation",
  "signal",
  "timeoutMs",
]);

const KEYS_BY_LANE: Record<ProviderLane, ReadonlySet<string>> = {
  ai: new Set([...COMMON_KEYS, "messages", "modelHint"]),
  git: new Set([...COMMON_KEYS, "owner", "repo", "ref", "path", "kind"]),
  cursor: new Set([
    ...COMMON_KEYS,
    "instructionSummary",
    "allowlistRepos",
    "protectedPaths",
    "expectedBranch",
    "expectedHead",
    "observedBranch",
    "observedHead",
  ]),
  none: new Set([...COMMON_KEYS, "detail"]),
};

const GIT_KINDS = new Set(["repository", "branch", "commit", "path_meta"]);

export type ProviderBoundaryOk = {
  readonly ok: true;
  readonly lane: ProviderLane;
  readonly correlationId: string;
  readonly operation: string;
};

export type ProviderBoundaryFail = {
  readonly ok: false;
  readonly failure: NormalizedFailure;
};

export function validateUntrustedProviderRequest(
  input: unknown,
  fallbackCorrelationId = "unknown",
): ProviderBoundaryOk | ProviderBoundaryFail {
  const fail = (userMessage: string): ProviderBoundaryFail => ({
    ok: false,
    failure: normalizedFailure({
      family: "validation",
      code: "VALIDATION_ERROR",
      userMessage,
      retryable: false,
      correlationId:
        typeof input === "object" &&
        input !== null &&
        typeof (input as { correlationId?: unknown }).correlationId === "string"
          ? ((input as { correlationId: string }).correlationId || fallbackCorrelationId)
          : fallbackCorrelationId,
    }),
  });

  if (input === null || input === undefined) {
    return fail("Provider request must be an object");
  }
  if (typeof input !== "object" || Array.isArray(input)) {
    return fail("Provider request must be a non-array object");
  }
  const obj = input as Record<string, unknown>;
  if (typeof obj.correlationId !== "string" || !obj.correlationId.trim()) {
    return fail("correlationId required");
  }
  if (typeof obj.lane !== "string" || !(ALLOWED_LANES as readonly string[]).includes(obj.lane)) {
    return fail("lane must be a valid ProviderLane");
  }
  const lane = obj.lane as ProviderLane;
  if (typeof obj.operation !== "string" || !obj.operation.trim()) {
    return fail("operation required");
  }
  if (!(OPS_BY_LANE[lane] as readonly string[]).includes(obj.operation)) {
    return fail(`operation not allowed for lane ${lane}`);
  }

  const allowedKeys = KEYS_BY_LANE[lane];
  for (const key of Object.keys(obj)) {
    if (!allowedKeys.has(key)) {
      return fail(`additional property forbidden: ${key}`);
    }
    if (/secret|password|token|api[_-]?key|authorization/i.test(key)) {
      return fail("forbidden sensitive field in provider request");
    }
  }

  if (obj.timeoutMs !== undefined) {
    if (typeof obj.timeoutMs !== "number" || !Number.isFinite(obj.timeoutMs) || obj.timeoutMs < 0) {
      return fail("timeoutMs must be a non-negative finite number");
    }
  }

  if (lane === "ai") {
    if (!Array.isArray(obj.messages)) return fail("messages required for ai complete");
    for (const m of obj.messages) {
      if (!m || typeof m !== "object" || Array.isArray(m)) return fail("invalid message entry");
      const msg = m as Record<string, unknown>;
      if (!["system", "user", "assistant"].includes(String(msg.role))) {
        return fail("invalid message role");
      }
      if (typeof msg.content !== "string") return fail("message content must be string");
      if (msg.content.length > 100_000) return fail("message content exceeds size limit");
    }
  }

  if (lane === "git") {
    if (typeof obj.owner !== "string" || !obj.owner.trim()) return fail("owner required");
    if (typeof obj.repo !== "string" || !obj.repo.trim()) return fail("repo required");
    if (typeof obj.kind !== "string" || !GIT_KINDS.has(obj.kind)) {
      return fail("kind must be repository|branch|commit|path_meta");
    }
    if (obj.path !== undefined) {
      if (typeof obj.path !== "string") return fail("path must be string");
      const canonical = normalizeCanonicalPath(obj.path);
      if (!canonical.ok) {
        return fail("path traversal, encoding, or absolute path forbidden");
      }
    }
  }

  if (lane === "cursor") {
    if (typeof obj.instructionSummary !== "string") return fail("instructionSummary required");
    if (!Array.isArray(obj.allowlistRepos)) return fail("allowlistRepos required");
    if (!Array.isArray(obj.protectedPaths)) return fail("protectedPaths required");
  }

  return {
    ok: true,
    lane,
    correlationId: obj.correlationId,
    operation: obj.operation,
  };
}

export function validateUntrustedProviderResult(
  input: unknown,
  correlationId: string,
): { ok: true } | { ok: false; failure: NormalizedFailure } {
  const fail = (userMessage: string) => ({
    ok: false as const,
    failure: normalizedFailure({
      family: "invalid_provider_result",
      code: "INVALID_PROVIDER_RESULT",
      userMessage,
      retryable: false,
      correlationId,
    }),
  });
  if (input === null || input === undefined || typeof input !== "object" || Array.isArray(input)) {
    return fail("provider result must be an object");
  }
  const obj = input as Record<string, unknown>;
  if (!["success", "failure", "cancelled", "timed_out"].includes(String(obj.kind))) {
    return fail("provider result kind invalid");
  }
  if (obj.kind === "success") {
    if (typeof obj.redactedSummary !== "string") return fail("redactedSummary required");
    if (/sk-|ghp_|@|password|BEGIN PRIVATE/i.test(obj.redactedSummary)) {
      return fail("redactedSummary appears to contain sensitive or user content");
    }
    if (obj.rawPresent === true) return fail("raw provider payload forbidden");
    if (obj.prompt !== undefined || obj.response !== undefined) {
      return fail("raw prompt/response fields forbidden");
    }
  }
  for (const key of Object.keys(obj)) {
    if (/secret|password|token|api[_-]?key/i.test(key)) {
      return fail("forbidden sensitive field in provider result");
    }
  }
  return { ok: true };
}

export function assertIsoOrFail(
  value: unknown,
  correlationId: string,
): { ok: true; iso: string } | { ok: false; failure: NormalizedFailure } {
  if (typeof value !== "string" || !isIsoTimestamp(value)) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "timestamp must be valid ISO-8601",
        retryable: false,
        correlationId,
      }),
    };
  }
  return { ok: true, iso: value };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts`

```typescript
/**
 * D2D2-08 — sandbox / protected-path contract (pure, fixture-verifiable).
 * Deny-by-default. Does not claim the sandbox is secure.
 *
 * Path comparisons use a shared canonical normalization that percent-decodes
 * once in a bounded way and rejects traversal / double-encoding / controls.
 */

export type SandboxPathDecision =
  | { readonly allowed: true; readonly normalized: string }
  | {
      readonly allowed: false;
      readonly reason:
        | "empty"
        | "absolute"
        | "traversal"
        | "protected"
        | "not_allowlisted"
        | "arbitrary_command"
        | "git_write"
        | "branch_mismatch"
        | "head_mismatch"
        | "observed_missing"
        | "invalid_encoding"
        | "control_or_null"
        | "double_encoding";
    };

export type CanonicalPathResult =
  | { readonly ok: true; readonly normalized: string }
  | {
      readonly ok: false;
      readonly reason:
        | "empty"
        | "absolute"
        | "traversal"
        | "invalid_encoding"
        | "control_or_null"
        | "double_encoding";
    };

const DEFAULT_PROTECTED = [
  ".git/",
  ".env",
  "method/",
  "prompts/",
  ".github/",
  ".sfia/",
  "node_modules/",
] as const;

const DANGEROUS_ENCODED = /%(?:00|2e|2f|5c)/i;

function decodePercentOnce(raw: string): CanonicalPathResult {
  let out = "";
  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];
    if (ch !== "%") {
      const code = ch.charCodeAt(0);
      if (code === 0 || (code < 0x20 && code !== 0x09) || code === 0x7f) {
        return { ok: false, reason: "control_or_null" };
      }
      out += ch;
      continue;
    }
    if (i + 2 >= raw.length) {
      return { ok: false, reason: "invalid_encoding" };
    }
    const hex = raw.slice(i + 1, i + 3);
    if (!/^[0-9A-Fa-f]{2}$/.test(hex)) {
      return { ok: false, reason: "invalid_encoding" };
    }
    const code = Number.parseInt(hex, 16);
    if (code === 0 || (code < 0x20 && code !== 0x09) || code === 0x7f) {
      return { ok: false, reason: "control_or_null" };
    }
    out += String.fromCharCode(code);
    i += 2;
  }
  return { ok: true, normalized: out };
}

/**
 * Canonical path normalization shared by sandbox, provider boundary, and policy.
 * Never normalizes a traversal into an allowlisted path.
 */
export function normalizeCanonicalPath(path: unknown): CanonicalPathResult {
  if (typeof path !== "string" || !path.trim()) {
    return { ok: false, reason: "empty" };
  }
  const replaced = path.trim().replace(/\\/g, "/");
  const first = decodePercentOnce(replaced);
  if (!first.ok) return first;

  // Residual encoded path metacharacters imply double-encoding or incomplete decode.
  if (DANGEROUS_ENCODED.test(first.normalized) || /%25(?:2e|2f|5c|00)/i.test(replaced)) {
    return { ok: false, reason: "double_encoding" };
  }
  if (/%[0-9A-Fa-f]{2}/.test(first.normalized)) {
    // Any remaining percent-encoding after one decode is rejected (fail closed).
    return { ok: false, reason: "double_encoding" };
  }

  const raw = first.normalized;
  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
    return { ok: false, reason: "absolute" };
  }
  const parts = raw.split("/");
  if (parts.some((p) => p === ".." || p === "")) {
    return { ok: false, reason: "traversal" };
  }
  const normalized = parts.filter((p) => p !== ".").join("/");
  if (!normalized) {
    return { ok: false, reason: "empty" };
  }
  return { ok: true, normalized };
}

/** Exact match or child under prefix with segment boundary (no sibling prefix bypass). */
export function pathMatchesAllowlistPrefix(
  normalized: string,
  prefixRaw: string,
): boolean {
  const prefix = prefixRaw.replace(/\\/g, "/").replace(/\/+$/, "");
  if (!prefix) return false;
  if (normalized === prefix) return true;
  return normalized.startsWith(prefix + "/");
}

export function evaluateSandboxPath(input: {
  path: unknown;
  allowlistRepos: readonly string[];
  protectedPaths?: readonly string[];
}): SandboxPathDecision {
  const canonical = normalizeCanonicalPath(input.path);
  if (!canonical.ok) {
    return { allowed: false, reason: canonical.reason };
  }
  const normalized = canonical.normalized;
  const protectedPaths = [
    ...DEFAULT_PROTECTED,
    ...(input.protectedPaths ?? []),
  ];
  for (const p of protectedPaths) {
    if (pathMatchesAllowlistPrefix(normalized, p)) {
      return { allowed: false, reason: "protected" };
    }
  }
  const allowed = input.allowlistRepos.some((prefix) =>
    pathMatchesAllowlistPrefix(normalized, prefix),
  );
  if (!allowed) return { allowed: false, reason: "not_allowlisted" };
  return { allowed: true, normalized };
}

export function evaluateSandboxMutationGuards(input: {
  mutationRequested: boolean;
  arbitraryCommandRequested: boolean;
  gitWriteRequested: boolean;
  /** Observed values must be independent of expected — never copy expected into observed. */
  observedBranch?: string;
  expectedBranch?: string;
  observedHead?: string;
  expectedHead?: string;
}): SandboxPathDecision | { allowed: true } {
  if (input.arbitraryCommandRequested) {
    return { allowed: false, reason: "arbitrary_command" };
  }
  if (input.mutationRequested || input.gitWriteRequested) {
    return { allowed: false, reason: "git_write" };
  }
  if (input.expectedBranch !== undefined) {
    if (input.observedBranch === undefined || input.observedBranch === "") {
      return { allowed: false, reason: "observed_missing" };
    }
    if (input.observedBranch !== input.expectedBranch) {
      return { allowed: false, reason: "branch_mismatch" };
    }
  }
  if (input.expectedHead !== undefined) {
    if (input.observedHead === undefined || input.observedHead === "") {
      return { allowed: false, reason: "observed_missing" };
    }
    if (input.observedHead !== input.expectedHead) {
      return { allowed: false, reason: "head_mismatch" };
    }
  }
  return { allowed: true };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/index.ts`

```typescript
/**
 * D2-D1 OA execution-run public barrel.
 * Sole D2-D technical state authority — memory/fixture-first only.
 * Concrete server composition is NOT exported here — use ./server.
 */
export { EXECUTION_RUN_SCHEMA_VERSION, EXECUTION_STATES, TERMINAL_STATES, isTerminalState } from "./domain/types";
export type {
  Completeness,
  ExecutionContext,
  ExecutionEvidence,
  ExecutionIntent,
  ExecutionRun,
  ExecutionSource,
  ExecutionState,
  ExternalResult,
  FailureCode,
  FailureFamily,
  HumanDecisionGate,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
  ProviderLane,
  SourceDisclosure,
  UsageSummary,
  ValidationOutcome,
} from "./domain/types";
export { normalizedFailure } from "./domain/errors";
export {
  decideTransition,
  isAllowedTransition,
  listAllowedTransitions,
} from "./domain/transitions";
export type { TransitionDecision, TransitionReason, TransitionRequest } from "./domain/transitions";
export { evaluateReadOnlyPolicy } from "./domain/policy";
export type { PolicyDecision, PolicyInput } from "./domain/policy";
export {
  assertSourceHonest,
  canSucceed,
  createOfficialEvidence,
  createSourceDisclosure,
  isIsoTimestamp,
  usageUnavailable,
} from "./domain/evidence";
export {
  canAcceptLateResult,
  checkExecutionRunInvariants,
  isCursorAssociated,
  LATE_RESULT_ELIGIBLE_STATES,
} from "./domain/invariants";
export { createExecutionRun } from "./application/createExecutionRun";
export type { CreateExecutionRunInput, CreateExecutionRunResult } from "./application/createExecutionRun";
export { transitionExecutionRun } from "./application/transitionExecutionRun";
export type {
  TransitionExecutionRunInput,
  TransitionExecutionRunResult,
} from "./application/transitionExecutionRun";
export type { ExecutionRunRepositoryPort } from "./ports/executionRunRepository";
export type {
  ExecutionRunSchemaName,
  ExecutionRunSchemaValidationPort,
} from "./ports/executionRunSchemaValidation";
export type { ClockPort } from "./ports/clockPort";
export type { IdentityPort } from "./ports/identityPort";
export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";

// D2-D2 provider boundary port types (no concrete adapters on root barrel)
export type {
  AiCompletionRequest,
  CursorFixtureRequest,
  GitReadRequest,
  LateProviderResultRecord,
  ProviderInvocationResult,
  ProviderOperationKind,
  ProviderRequestBase,
} from "./ports/providerResult";
export type { AiExecutionPort } from "./ports/aiExecutionPort";
export type { GitReadPort } from "./ports/gitReadPort";
export type { CursorExecutionPort } from "./ports/cursorExecutionPort";
export type {
  SecretHandle,
  SecretResolveResult,
  SecretSourcePort,
} from "./ports/secretSourcePort";
export type {
  ExecutionEvent,
  ExecutionEventSinkPort,
  ExecutionEventType,
} from "./ports/executionEventSinkPort";
export {
  assertIsoOrFail,
  validateUntrustedProviderRequest,
  validateUntrustedProviderResult,
} from "./domain/providerBoundary";
export {
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
  normalizeCanonicalPath,
  pathMatchesAllowlistPrefix,
} from "./domain/sandboxContract";
export type {
  CanonicalPathResult,
  SandboxPathDecision,
} from "./domain/sandboxContract";
export {
  invokeWithTimeoutAndCancellation,
  recordLateProviderResult,
} from "./application/providerInvocation";
export type {
  InvokeOptions,
  InvokeOutcome,
  RetryClass,
} from "./application/providerInvocation";
// Coordinator and injection deps are server-composition only (not client-safe).
export {
  createExecutionProjection,
} from "./application/executionProjection";
export type {
  CreateExecutionProjectionResult,
  ExecutionProjection,
} from "./application/executionProjection";
export {
  assessExecutionReadiness,
  D2D3_OPEN_RESERVES,
} from "./application/executionReadiness";
export type {
  ExecutionReadinessAssessment,
  ReadinessLevel,
  ReadinessStatus,
} from "./application/executionReadiness";
export {
  readUntrustedPlainData,
  redactBoundedText,
  sanitizeLateEvidenceSummary,
} from "./application/untrustedExecutionData";
export type {
  UntrustedReadOptions,
  UntrustedReadResult,
} from "./application/untrustedExecutionData";
export { MAX_COORDINATOR_TIMEOUT_MS } from "./application/coordinateExecutionRun";
```

### `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts`

```typescript
import {
  coordinateExecutionRun,
  type CoordinateExecutionRunResult,
} from "../application/coordinateExecutionRun";
import {
  createExecutionProjection,
  type CreateExecutionProjectionResult,
} from "../application/executionProjection";
import {
  assessExecutionReadiness,
  type ExecutionReadinessAssessment,
} from "../application/executionReadiness";
import type { ClockPort } from "../ports/clockPort";
import type { ExecutionRun } from "../domain/types";
import { composeExecutionRunMemory } from "./composeExecutionRunMemory";
import {
  composeExecutionRunProvidersFake,
  type ExecutionRunProviderComposition,
} from "./composeExecutionRunProviders";
import { assertServerOnly } from "./serverOnly";

export type ExecutionRunD2D3Composition = {
  readonly coordinate: (
    input: unknown,
  ) => Promise<CoordinateExecutionRunResult>;
  /** Project a stored run by canonical runId — never accept an arbitrary caller run object. */
  readonly projectById: (
    runId: string,
  ) => Promise<CreateExecutionProjectionResult>;
  /** Assess readiness from the stored run + a freshly validated projection. */
  readonly assessById: (
    runId: string,
  ) => Promise<ExecutionReadinessAssessment>;
  readonly getById: (runId: string) => Promise<ExecutionRun | null>;
  readonly disclosure: {
    readonly sources: readonly ["fixture"];
    readonly cursorLive: false;
    readonly cursorVerified: false;
    readonly providersLive: false;
    readonly gitWrite: false;
    readonly persistence: "memory_process_local";
    readonly durable: false;
    readonly multiInstance: false;
    readonly restartSafe: false;
    readonly gD2dCursor01: "NOT_CONSUMED";
    readonly gD2dPersist01: "NOT_CONSUMED";
  };
};

/**
 * D2-D3 fixture-first composition. It assembles the existing single memory
 * authority and D2-D2 ports; it does not introduce another store or runtime.
 * Source authority is fixture-only and is not injectable.
 */
export function composeExecutionRunD2D3(options?: {
  readonly providers?: ExecutionRunProviderComposition;
  readonly clock?: ClockPort;
  readonly clockIso?: string;
}): ExecutionRunD2D3Composition {
  assertServerOnly();
  const clockIso = options?.clockIso ?? "2026-08-04T09:15:00.000Z";
  const execution = composeExecutionRunMemory({ clockIso });
  const providers = options?.providers ?? composeExecutionRunProvidersFake();
  const clock: ClockPort = options?.clock ?? { nowIso: () => clockIso };

  const projectById = async (
    runId: string,
  ): Promise<CreateExecutionProjectionResult> => {
    const run = await execution.getById(runId);
    if (!run) {
      return {
        ok: false,
        failure: { code: "RUN_NOT_FOUND", message: "Execution run not found" },
      };
    }
    const provisional = createExecutionProjection({ run });
    if (!provisional.ok) return provisional;
    const readiness = assessExecutionReadiness({
      run,
      projection: provisional.projection,
    });
    return createExecutionProjection({
      run,
      readinessAssessment: readiness,
      openReserves: readiness.openReserves,
    });
  };

  return {
    coordinate: (input) =>
      coordinateExecutionRun(input, {
        execution,
        providers,
        events: providers.events,
        clock,
      }),
    projectById,
    assessById: async (runId) => {
      const projected = await projectById(runId);
      if (!projected.ok) {
        return assessExecutionReadiness({});
      }
      const run = await execution.getById(runId);
      if (!run) return assessExecutionReadiness({});
      return assessExecutionReadiness({
        run,
        projection: projected.projection,
      });
    },
    getById: execution.getById,
    disclosure: {
      sources: ["fixture"],
      cursorLive: false,
      cursorVerified: false,
      providersLive: false,
      gitWrite: false,
      persistence: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
      gD2dCursor01: "NOT_CONSUMED",
      gD2dPersist01: "NOT_CONSUMED",
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts`

```typescript
/**
 * Explicit server entrypoint for D2-D1 execution-run concrete composition.
 * Client surfaces must not import this module.
 */
export {
  composeExecutionRunMemory,
  type ExecutionRunServerComposition,
} from "./composeExecutionRunMemory";
export { assertServerOnly } from "./serverOnly";
export {
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
  type ExecutionRunProviderComposition,
} from "./composeExecutionRunProviders";
export {
  composeExecutionRunD2D3,
  type ExecutionRunD2D3Composition,
} from "./composeExecutionRunD2D3";
export {
  coordinateExecutionRun,
  MAX_COORDINATOR_TIMEOUT_MS,
  type CoordinateExecutionRunDependencies,
  type CoordinateExecutionRunInput,
  type CoordinateExecutionRunResult,
  type CoordinateProviderRequest,
  type ExecutionAuthority,
  type EventDeliveryStatus,
} from "../application/coordinateExecutionRun";
```

## 18. Matrice des douze findings

| Finding | Sévérité | Statut proposé | Preuve |
|---|---|---|---|
| F-QA-D2D3-01 | BLOCKER | VERIFIED — CLOSURE RECOMMENDED | P01/P-REV + tests + nonreg |
| F-QA-D2D3-02 | MAJOR | VERIFIED — CLOSURE RECOMMENDED | readiness boolean-only |
| F-QA-D2D3-03 | MAJOR | VERIFIED — CLOSURE RECOMMENDED | sink fail-safe |
| F-QA-D2D3-04 | BLOCKER | VERIFIED — CLOSURE RECOMMENDED | projection hostile |
| F-QA-D2D3-05 | BLOCKER | **PARTIALLY ADDRESSED** | token=/apiKey=/Bearer OK ; JSON `{"token":"value"}` fuit encore |
| F-QA-D2D3-06 | MAJOR | VERIFIED — CLOSURE RECOMMENDED | preflight before capability |
| F-QA-D2D3-07 | MAJOR | VERIFIED — CLOSURE RECOMMENDED | getters hostiles |
| F-QA-D2D3-08 | MINOR | VERIFIED — CLOSURE RECOMMENDED | flags provider |
| F-QA-D2D3-09 | MAJOR | VERIFIED — CLOSURE RECOMMENDED | timeout bounds |
| F-QA-D2D3-10 | MAJOR | VERIFIED — CLOSURE RECOMMENDED | encoded traversal |
| F-QA-REV-D2D3-01 | MAJOR | **VERIFIED — CLOSURE RECOMMENDED** | P19 + P-REV2-01…06 PASS |
| F-QA-REV-D2D3-02 | BLOCKER | **PARTIALLY ADDRESSED** | motifs assign/header OK ; JSON token object form FAIL |

## 19–22. Analyses

### correlationId
Ordre observé : plain copy → type/non-empty → strict `!== intent` → lane check → boundary → rebuild (`timeoutMs` + `correlationId: requestCorrelationId`). Aucune réécriture silencieuse. `requestMatchesRun` reste défense secondaire. Whitespace divergent rejeté (pas de trim identité).

### lane
Comparaison stricte avant rebuild ; mismatch / absent / type invalide / getter → rejet pré-engagement.

### late evidence
Source unique `FORBIDDEN_VALUE`. Analyse avant troncature + re-check. Non-string via sanitize → `late_result_redacted` **si** la valeur atteint sanitize. Function/symbol au top-level font échouer `readUntrustedPlainData` de l’enveloppe → rejet input entier (pas d’evidence).

### surfaces de fuite
Motifs assign/Bearer/query/prefixes : aucune fuite (P-REV2-07/08/10/11/13). **Fuite confirmée** : summary officielle `{"token":"value"}` (P-REV2-09).

## 23–24. Reproduction P-QA-D2D3-19 / P-REV-D2D3-08

| Probe | Verdict |
|---|---|
| P-QA-D2D3-19 | **PASS** — ok=false ; run absent ; stateTrace=[] ; provider flags false |
| P-REV-D2D3-08 | **PASS** — motifs liste historique redacted ; terminal cancelled ; source=fixture |

## 25–27. Suites de probes

| Suite | Résultat |
|---|---|
| 29 probes initiaux | **29/29 PASS** |
| 15 P-REV | **15/15 PASS** |
| P-CORR2-D2D3-01 | PASS |
| P-CORR2-D2D3-02 | PASS |
| P-CORR2-NONREG | PASS |
| P-REV2 (14) | **12 PASS / 2 FAIL** (09, 12) |

Core probes JSON : `.tmp-sfia-review/qa-revalidation-2-evidence/probe-results-core.json` (pass=44/44)
REV2 JSON : pass=15 fail=2

## 28. Contenu complet des nouveaux probes P-REV2

### rev2-adversarial-probes.ts

```typescript
/**
 * Independent QA Revalidation 2 adversarial probes (P-REV2 + CORR2 reproduction).
 * Temporary only — not part of delivery package.
 * Does not reuse Corrections 2 follow-up-probes.ts.
 */
import fs from "node:fs";
import path from "node:path";
import {
  assessExecutionReadiness,
  createExecutionProjection,
  evaluateSandboxPath,
  getFixture,
  MAX_COORDINATOR_TIMEOUT_MS,
  normalizeCanonicalPath,
  normalizedFailure,
  type AiExecutionPort,
  type ExecutionEvent,
} from "../../projects/sfia-studio/app/lib/oa/execution-run/index";
import {
  composeExecutionRunD2D3,
  composeExecutionRunMemory,
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
  coordinateExecutionRun,
} from "../../projects/sfia-studio/app/lib/oa/execution-run/server/index";

type Verdict = "PASS" | "FAIL" | "NOT_PROVEN";
type Probe = {
  id: string;
  family: "rev2" | "corr2" | "nonreg";
  objective: string;
  expected: string;
  observed: unknown;
  verdict: Verdict;
  finding?: string;
};

const probes: Probe[] = [];
const clock = { nowIso: () => "2026-08-04T12:35:00.000Z" };
const OUT = path.resolve(
  process.cwd(),
  ".tmp-sfia-review/qa-revalidation-2-evidence/probe-results-rev2.json",
);

function record(
  id: string,
  family: Probe["family"],
  objective: string,
  expected: string,
  observed: unknown,
  verdict: Verdict,
  finding?: string,
) {
  probes.push({ id, family, objective, expected, observed, verdict, finding });
}

function fixtureInput(correlationId: string, lane: "ai" | "git" = "ai") {
  const f = getFixture("nominal");
  return {
    intent: {
      ...f.intent,
      intentId: `intent:${correlationId}`,
      correlationId,
      requestedLane: lane,
    },
    context: f.context,
    providerRequest:
      lane === "ai"
        ? {
            correlationId,
            lane: "ai" as const,
            operation: "complete" as const,
            messages: [{ role: "user" as const, content: "rev2 probe" }],
            timeoutMs: 50,
          }
        : {
            correlationId,
            lane: "git" as const,
            operation: "read" as const,
            owner: "o",
            repo: "r",
            kind: "path_meta" as const,
            path: "projects/sfia-studio/README.md",
            timeoutMs: 50,
          },
    timeoutMs: 50,
  };
}

async function cancelledComposition(events?: ExecutionEvent[]) {
  const base = composeExecutionRunProvidersFake();
  const ai: AiExecutionPort = {
    lane: "ai",
    describeCapability: () => base.ai.describeCapability(),
    complete: async (request) => ({
      kind: "cancelled",
      failure: normalizedFailure({
        family: "cancelled",
        code: "CANCELLED",
        userMessage: "cancelled",
        retryable: false,
        correlationId: request.correlationId,
      }),
    }),
  };
  return composeExecutionRunD2D3({
    providers: composeExecutionRunProviders({
      ...base,
      ai,
      events: {
        emit: (event) => {
          events?.push(event);
        },
      },
    }),
  });
}

async function countedComposition() {
  const base = composeExecutionRunProvidersFake();
  let describe = 0;
  let complete = 0;
  const events: ExecutionEvent[] = [];
  const ai: AiExecutionPort = {
    lane: "ai",
    describeCapability: () => {
      describe += 1;
      return base.ai.describeCapability();
    },
    complete: async (request) => {
      complete += 1;
      return base.ai.complete(request);
    },
  };
  const composition = composeExecutionRunD2D3({
    providers: composeExecutionRunProviders({
      ...base,
      ai,
      events: { emit: (e) => events.push(e) },
    }),
  });
  return { composition, getDescribe: () => describe, getComplete: () => complete, events };
}

function noDownstream(result: {
  ok: boolean;
  run?: unknown;
  stateTrace: readonly string[];
  providerAttempted: boolean;
  providerInvoked: boolean;
  providerCompleted: boolean;
}, describe: number, complete: number, events: number) {
  return (
    result.ok === false &&
    result.run === undefined &&
    result.stateTrace.length === 0 &&
    result.providerAttempted === false &&
    result.providerInvoked === false &&
    result.providerCompleted === false &&
    describe === 0 &&
    complete === 0 &&
    events === 0
  );
}

async function main() {
  // ========== P-REV2-D2D3-01 simple mismatch ==========
  {
    const { composition, getDescribe, getComplete, events } = await countedComposition();
    const result = await composition.coordinate({
      ...fixtureInput("corr:canonical"),
      providerRequest: {
        ...fixtureInput("corr:canonical").providerRequest,
        correlationId: "corr:other",
      },
    });
    const ok = noDownstream(result, getDescribe(), getComplete(), events.length);
    record(
      "P-REV2-D2D3-01",
      "rev2",
      "correlationId mismatch simple",
      "reject pre-engagement; no run/provider/events",
      {
        ok: result.ok,
        run: result.run,
        describe: getDescribe(),
        complete: getComplete(),
        events: events.length,
        failure: result.ok ? null : result.failure,
      },
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV-D2D3-01",
    );
  }

  // ========== P-REV2-D2D3-02 whitespace ==========
  {
    const variants = [
      { name: "empty", correlationId: "" },
      { name: "spaces", correlationId: "   " },
      { name: "tab", correlationId: "\t" },
      { name: "newline", correlationId: "\n" },
      { name: "prefix_space", correlationId: " corr:canonical" },
      { name: "suffix_space", correlationId: "corr:canonical " },
    ];
    const rows = [];
    for (const v of variants) {
      const { composition, getDescribe, getComplete, events } = await countedComposition();
      const result = await composition.coordinate({
        ...fixtureInput("corr:canonical"),
        providerRequest: {
          ...fixtureInput("corr:canonical").providerRequest,
          correlationId: v.correlationId,
        },
      });
      rows.push({
        name: v.name,
        ok: noDownstream(result, getDescribe(), getComplete(), events.length),
        state: result.run?.state ?? null,
        describe: getDescribe(),
        complete: getComplete(),
      });
    }
    const ok = rows.every((r) => r.ok);
    record(
      "P-REV2-D2D3-02",
      "rev2",
      "correlationId whitespace variants",
      "all rejected without silent trim identity rewrite",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV-D2D3-01",
    );
  }

  // ========== P-REV2-D2D3-03 type hostile ==========
  {
    const variants: Array<{ name: string; build: () => unknown }> = [
      {
        name: "absent",
        build: () => {
          const { correlationId: _, ...rest } = fixtureInput("corr:canonical").providerRequest!;
          void _;
          return rest;
        },
      },
      {
        name: "null",
        build: () => ({
          ...fixtureInput("corr:canonical").providerRequest,
          correlationId: null,
        }),
      },
      {
        name: "number",
        build: () => ({
          ...fixtureInput("corr:canonical").providerRequest,
          correlationId: 42,
        }),
      },
      {
        name: "boxed_string",
        build: () => ({
          ...fixtureInput("corr:canonical").providerRequest,
          correlationId: Object("corr:canonical"),
        }),
      },
      {
        name: "array",
        build: () => ({
          ...fixtureInput("corr:canonical").providerRequest,
          correlationId: ["corr:canonical"],
        }),
      },
      {
        name: "object",
        build: () => ({
          ...fixtureInput("corr:canonical").providerRequest,
          correlationId: { id: "corr:canonical" },
        }),
      },
      {
        name: "getter",
        build: () => {
          const base = fixtureInput("corr:canonical").providerRequest!;
          const hostile = Object.create(null);
          for (const [k, v] of Object.entries(base)) {
            if (k === "correlationId") {
              Object.defineProperty(hostile, k, {
                enumerable: true,
                get() {
                  return "corr:hostile";
                },
              });
            } else {
              Object.defineProperty(hostile, k, {
                enumerable: true,
                value: v,
                writable: true,
                configurable: true,
              });
            }
          }
          return hostile;
        },
      },
      {
        name: "odd_proto",
        build: () =>
          Object.assign(Object.create({ polluted: true }), {
            ...fixtureInput("corr:canonical").providerRequest,
            correlationId: "corr:other",
          }),
      },
      {
        name: "oversized",
        build: () => ({
          ...fixtureInput("corr:canonical").providerRequest,
          correlationId: `corr:other:${"x".repeat(5000)}`,
        }),
      },
    ];
    const rows = [];
    for (const v of variants) {
      const { composition, getDescribe, getComplete, events } = await countedComposition();
      const result = await composition.coordinate({
        ...fixtureInput("corr:canonical"),
        providerRequest: v.build() as never,
      });
      rows.push({
        name: v.name,
        ok: noDownstream(result, getDescribe(), getComplete(), events.length),
        describe: getDescribe(),
        complete: getComplete(),
      });
    }
    const ok = rows.every((r) => r.ok);
    record(
      "P-REV2-D2D3-03",
      "rev2",
      "correlationId type hostile",
      "all rejected pre-engagement",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV-D2D3-01",
    );
  }

  // ========== P-REV2-D2D3-04 lane mismatch ==========
  {
    const variants: Array<{ name: string; build: () => Promise<{ result: Awaited<ReturnType<ReturnType<typeof composeExecutionRunD2D3>["coordinate"]>>; describe: number; complete: number; events: number }> }> = [
      {
        name: "ai_vs_git",
        build: async () => {
          const { composition, getDescribe, getComplete, events } = await countedComposition();
          const input = fixtureInput("corr:lane:ai", "ai");
          const result = await composition.coordinate({
            ...input,
            providerRequest: {
              ...fixtureInput("corr:lane:ai", "git").providerRequest!,
              correlationId: "corr:lane:ai",
            },
          });
          return { result, describe: getDescribe(), complete: getComplete(), events: events.length };
        },
      },
      {
        name: "git_vs_ai",
        build: async () => {
          const base = composeExecutionRunProvidersFake();
          let describe = 0;
          let complete = 0;
          let gitCalls = 0;
          const events: ExecutionEvent[] = [];
          const composition = composeExecutionRunD2D3({
            providers: composeExecutionRunProviders({
              ...base,
              ai: {
                lane: "ai",
                describeCapability: () => {
                  describe += 1;
                  return base.ai.describeCapability();
                },
                complete: async (r) => {
                  complete += 1;
                  return base.ai.complete(r);
                },
              },
              git: {
                ...base.git,
                describeCapability: () => {
                  describe += 1;
                  return base.git.describeCapability();
                },
                read: async (r) => {
                  gitCalls += 1;
                  return base.git.read(r);
                },
              },
              events: { emit: (e) => events.push(e) },
            }),
          });
          const input = fixtureInput("corr:lane:git", "git");
          const result = await composition.coordinate({
            ...input,
            providerRequest: {
              ...fixtureInput("corr:lane:git", "ai").providerRequest!,
              correlationId: "corr:lane:git",
            },
          });
          return {
            result,
            describe,
            complete: complete + gitCalls,
            events: events.length,
          };
        },
      },
      {
        name: "lane_absent",
        build: async () => {
          const { composition, getDescribe, getComplete, events } = await countedComposition();
          const baseReq = fixtureInput("corr:lane:abs").providerRequest!;
          const { lane: _, ...rest } = baseReq as { lane: string } & Record<string, unknown>;
          void _;
          const result = await composition.coordinate({
            ...fixtureInput("corr:lane:abs"),
            providerRequest: rest as never,
          });
          return { result, describe: getDescribe(), complete: getComplete(), events: events.length };
        },
      },
      {
        name: "lane_invalid_type",
        build: async () => {
          const { composition, getDescribe, getComplete, events } = await countedComposition();
          const result = await composition.coordinate({
            ...fixtureInput("corr:lane:bad"),
            providerRequest: {
              ...fixtureInput("corr:lane:bad").providerRequest,
              lane: 123,
            } as never,
          });
          return { result, describe: getDescribe(), complete: getComplete(), events: events.length };
        },
      },
      {
        name: "lane_getter",
        build: async () => {
          const { composition, getDescribe, getComplete, events } = await countedComposition();
          const base = fixtureInput("corr:lane:get").providerRequest!;
          const hostile = Object.create(null);
          for (const [k, v] of Object.entries(base)) {
            if (k === "lane") {
              Object.defineProperty(hostile, k, {
                enumerable: true,
                get() {
                  return "git";
                },
              });
            } else {
              Object.defineProperty(hostile, k, {
                enumerable: true,
                value: v,
                writable: true,
                configurable: true,
              });
            }
          }
          const result = await composition.coordinate({
            ...fixtureInput("corr:lane:get"),
            providerRequest: hostile as never,
          });
          return { result, describe: getDescribe(), complete: getComplete(), events: events.length };
        },
      },
    ];
    const rows = [];
    for (const v of variants) {
      const { result, describe, complete, events } = await v.build();
      rows.push({
        name: v.name,
        ok: noDownstream(result, describe, complete, events),
        describe,
        complete,
        events,
      });
    }
    const ok = rows.every((r) => r.ok);
    record(
      "P-REV2-D2D3-04",
      "rev2",
      "lane mismatch variants",
      "all rejected pre-engagement",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV-D2D3-01",
    );
  }

  // ========== P-REV2-D2D3-05 no downstream (aggregate check already in 01-04) ==========
  {
    const prior = probes.filter((p) =>
      ["P-REV2-D2D3-01", "P-REV2-D2D3-02", "P-REV2-D2D3-03", "P-REV2-D2D3-04"].includes(p.id),
    );
    const ok = prior.every((p) => p.verdict === "PASS");
    record(
      "P-REV2-D2D3-05",
      "rev2",
      "no downstream effect on invalid identity",
      "all prior mismatch probes PASS implies zero create/capability/provider/evidence",
      { prior: prior.map((p) => ({ id: p.id, verdict: p.verdict })) },
      ok ? "PASS" : "FAIL",
    );
  }

  // ========== P-REV2-D2D3-06 nominal ==========
  {
    const { composition, getDescribe, getComplete } = await countedComposition();
    const result = await composition.coordinate(fixtureInput("corr:nominal:match"));
    const evidence = result.run?.evidence?.[0];
    const ok =
      result.ok === true &&
      result.run?.state === "succeeded" &&
      result.run.disclosure.source === "fixture" &&
      evidence?.official === true &&
      evidence?.source === "fixture" &&
      getDescribe() > 0 &&
      getComplete() === 1 &&
      result.providerInvoked === true;
    record(
      "P-REV2-D2D3-06",
      "rev2",
      "nominal matching correlationId/lane preserved",
      "succeeded fixture path without silent rewrite dependency",
      {
        ok: result.ok,
        state: result.run?.state,
        source: result.run?.disclosure.source,
        describe: getDescribe(),
        complete: getComplete(),
        evidence,
      },
      ok ? "PASS" : "FAIL",
    );
  }

  // Helper for late evidence cases
  async function lateCase(summary: unknown, marker?: string | null) {
    const events: ExecutionEvent[] = [];
    const composition = await cancelledComposition(events);
    const result = await composition.coordinate({
      ...fixtureInput(`corr:late:${String(Math.random()).slice(2, 8)}`),
      lateEvidenceSummary: summary as never,
    });
    const late = result.run?.evidence?.at(-1);
    const projection = result.run
      ? createExecutionProjection({ run: result.run, openReserves: [] })
      : { ok: false as const };
    const surfaces = {
      result: JSON.stringify(result),
      run: JSON.stringify(result.run ?? null),
      evidence: JSON.stringify(late ?? null),
      projection: JSON.stringify(projection),
      events: JSON.stringify(events),
      failure: JSON.stringify(result.ok ? null : result.failure),
    };
    const leaked =
      marker != null &&
      Object.values(surfaces).some((s) => s.includes(marker));
    return {
      state: result.run?.state,
      lateRecorded: result.lateEvidenceRecorded,
      summary: late?.summary,
      late: late?.late,
      official: late?.official,
      source: late?.source,
      leaked,
      surfaces,
    };
  }

  // ========== P-REV2-D2D3-07 assignments ==========
  {
    const cases = [
      ["password=value", "value"],
      ["password : value", "value"],
      ["secret=value", "value"],
      ["token=value", "value"],
      ["token : value", "value"],
      ["access_token=value", "value"],
      ["refresh_token=value", "value"],
      ["client_secret=value", "value"],
      ["apiKey=value", "value"],
      ["api_key=value", "value"],
      ["api-key=value", "value"],
      ["cookie=value", "value"],
      ["session=value", "value"],
    ] as const;
    const rows = [];
    for (const [summary, marker] of cases) {
      const obs = await lateCase(summary, marker);
      rows.push({
        summary,
        pass:
          obs.state === "cancelled" &&
          obs.summary === "late_result_redacted" &&
          obs.late === true &&
          obs.official === true &&
          obs.source === "fixture" &&
          obs.leaked === false,
        ...obs,
        surfaces: undefined,
      });
    }
    const ok = rows.every((r) => r.pass);
    record(
      "P-REV2-D2D3-07",
      "rev2",
      "late evidence assignment forms",
      "all → late_result_redacted; no leak",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV-D2D3-02",
    );
  }

  // ========== P-REV2-D2D3-08 headers ==========
  {
    const cases = [
      ["Authorization Bearer value", "value"],
      ["Authorization: Bearer value", "value"],
      ["authorization = Bearer value", "value"],
      ["Bearer value", "value"],
      ["Authorization\tBearer\tvalue", "value"],
      ["aUtHoRiZaTiOn: bEaReR value", "value"],
      ["line1\nAuthorization: Bearer value\nline3", "value"],
    ] as const;
    const rows = [];
    for (const [summary, marker] of cases) {
      const obs = await lateCase(summary, marker);
      rows.push({
        summary,
        pass:
          obs.state === "cancelled" &&
          obs.summary === "late_result_redacted" &&
          obs.leaked === false,
        summaryOut: obs.summary,
        leaked: obs.leaked,
      });
    }
    const ok = rows.every((r) => r.pass);
    record(
      "P-REV2-D2D3-08",
      "rev2",
      "late evidence Authorization/Bearer headers",
      "all redacted; no leak",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV-D2D3-02",
    );
  }

  // ========== P-REV2-D2D3-09 structured text ==========
  {
    const cases = [
      ['"apiKey":"value"', "value"],
      ['{"token":"value"}', "value"],
      ["?token=value", "value"],
      ["&token=value", "value"],
      ["access_token=value&x=1", "value"],
      ["client-secret: value", "value"],
    ] as const;
    const rows = [];
    for (const [summary, marker] of cases) {
      const obs = await lateCase(summary, marker);
      rows.push({
        summary,
        pass:
          obs.state === "cancelled" &&
          obs.summary === "late_result_redacted" &&
          obs.leaked === false,
        summaryOut: obs.summary,
        leaked: obs.leaked,
        late: obs.late,
      });
    }
    const ok = rows.every((r) => r.pass);
    record(
      "P-REV2-D2D3-09",
      "rev2",
      "late evidence structured text forms",
      "JSON/query/secret forms redacted",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV2-D2D3-01",
    );
  }

  // ========== P-REV2-D2D3-10 prefixes ==========
  {
    const cases = [
      ["sk-testvalue", "sk-testvalue"],
      ["ghp_testvalue", "ghp_testvalue"],
      ["github_pat_testvalue", "github_pat_testvalue"],
      ["xoxb-testvalue", "xoxb-testvalue"],
      ["xoxp-testvalue", "xoxp-testvalue"],
      ["xoxa-testvalue", "xoxa-testvalue"],
      ["xoxr-testvalue", "xoxr-testvalue"],
      ["-----BEGIN PRIVATE KEY-----", "PRIVATE KEY"],
      ["contains private key material", "private key"],
    ] as const;
    const rows = [];
    for (const [summary, marker] of cases) {
      const obs = await lateCase(summary, marker);
      rows.push({
        summary,
        pass:
          obs.summary === "late_result_redacted" &&
          obs.leaked === false &&
          obs.state === "cancelled",
        summaryOut: obs.summary,
        leaked: obs.leaked,
      });
    }
    const ok = rows.every((r) => r.pass);
    record(
      "P-REV2-D2D3-10",
      "rev2",
      "late evidence known secret prefixes",
      "all redacted",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV-D2D3-02",
    );
  }

  // ========== P-REV2-D2D3-11 position/truncation ==========
  {
    const secret = "token=secret-after-truncation-boundary";
    const cases = [
      ["start", secret + " tail"],
      ["mid", "prefix " + secret + " suffix"],
      ["after240", "a".repeat(250) + secret],
      ["long", "safe-".repeat(100) + secret],
      ["multiline", "line1\n" + secret + "\nline3"],
      ["control", secret + "\u0000tail"],
    ] as const;
    const rows = [];
    for (const [name, summary] of cases) {
      const obs = await lateCase(summary, "secret-after-truncation-boundary");
      rows.push({
        name,
        pass:
          obs.summary === "late_result_redacted" &&
          obs.leaked === false &&
          obs.state === "cancelled",
        summaryOut: obs.summary,
        leaked: obs.leaked,
      });
    }
    const ok = rows.every((r) => r.pass);
    record(
      "P-REV2-D2D3-11",
      "rev2",
      "detection before truncation / position variants",
      "secret after char 240 still redacted",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV-D2D3-02",
    );
  }

  // ========== P-REV2-D2D3-12 non-string ==========
  {
    const cases: Array<{ name: string; value: unknown; expectRecorded: boolean }> = [
      { name: "null", value: null, expectRecorded: true },
      { name: "undefined", value: undefined, expectRecorded: false }, // coordinator skips when undefined
      { name: "object", value: { x: 1 }, expectRecorded: true },
      { name: "array", value: ["x"], expectRecorded: true },
      { name: "function", value: () => "x", expectRecorded: true },
      { name: "symbol", value: Symbol("x"), expectRecorded: true },
      { name: "number", value: 42, expectRecorded: true },
      { name: "bool", value: true, expectRecorded: true },
    ];
    const rows = [];
    for (const c of cases) {
      const events: ExecutionEvent[] = [];
      const composition = await cancelledComposition(events);
      let threw = false;
      let result: Awaited<ReturnType<typeof composition.coordinate>> | null = null;
      try {
        result = await composition.coordinate({
          ...fixtureInput(`corr:ns:${c.name}`),
          lateEvidenceSummary: c.value as never,
        });
      } catch {
        threw = true;
      }
      const late = result?.run?.evidence?.at(-1);
      const pass = c.expectRecorded
        ? !threw &&
          result?.run?.state === "cancelled" &&
          late?.summary === "late_result_redacted" &&
          late?.late === true
        : !threw &&
          result?.run?.state === "cancelled" &&
          result.lateEvidenceRecorded === false;
      rows.push({
        name: c.name,
        pass,
        threw,
        lateRecorded: result?.lateEvidenceRecorded,
        summary: late?.summary,
        note:
          c.name === "undefined"
            ? "undefined skips late recording (property absent semantics)"
            : undefined,
      });
    }
    // For undefined, QA accepts skip-as-absent OR redaction if recorded.
    // Strict GO text asked for late_result_redacted; we mark FAIL if expectRecorded false path is the observed contract.
    const ok = rows.every((r) => r.pass);
    record(
      "P-REV2-D2D3-12",
      "rev2",
      "non-string and hostile late summaries",
      "non-strings → late_result_redacted when recorded; no throw",
      rows,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-REV2-D2D3-02",
    );
  }

  // ========== P-REV2-D2D3-13 no leakage surfaces ==========
  {
    const secrets = [
      ["token=leak-surface-abc", "leak-surface-abc"],
      ["apiKey=leak-surface-key", "leak-surface-key"],
      ["Authorization: Bearer leak-surface-xyz", "leak-surface-xyz"],
    ] as const;
    const rows = [];
    for (const [summary, marker] of secrets) {
      const obs = await lateCase(summary, marker);
      rows.push({
        summary,
        pass: obs.leaked === false && obs.summary === "late_result_redacted",
        leaked: obs.leaked,
        summaryOut: obs.summary,
      });
    }
    const ok = rows.every((r) => r.pass);
    record(
      "P-REV2-D2D3-13",
      "rev2",
      "no leakage across run/projection/events/failure",
      "sensitive markers absent from all surfaces",
      rows,
      ok ? "PASS" : "FAIL",
    );
  }

  // ========== P-REV2-D2D3-14 safe bounded ==========
  {
    const summary = "late bounded fixture result without secrets";
    const obs = await lateCase(summary, "without secrets");
    // marker "without secrets" is part of safe text and SHOULD appear; use a fake secret marker instead
    const obs2 = await lateCase(summary, "token=should-not-exist");
    const ok =
      obs2.state === "cancelled" &&
      obs2.late === true &&
      obs2.official === true &&
      obs2.source === "fixture" &&
      obs2.summary === summary &&
      obs2.summary !== "late_result_redacted";
    record(
      "P-REV2-D2D3-14",
      "rev2",
      "safe bounded late summary preserved",
      "non-sensitive short summary accepted; not over-redacted",
      { summaryOut: obs2.summary, state: obs2.state, late: obs2.late },
      ok ? "PASS" : "FAIL",
    );
  }

  // ========== CORR2 reproductions (independent) ==========
  {
    const { composition, getDescribe, getComplete, events } = await countedComposition();
    const result = await composition.coordinate({
      ...fixtureInput("corr:c2:intent"),
      providerRequest: {
        ...fixtureInput("corr:c2:intent").providerRequest!,
        correlationId: "corr:c2:other",
      },
    });
    record(
      "P-CORR2-D2D3-01",
      "corr2",
      "CORR2 correlation mismatch reproduction",
      "reject before provider",
      {
        ok: noDownstream(result, getDescribe(), getComplete(), events.length),
        describe: getDescribe(),
        complete: getComplete(),
      },
      noDownstream(result, getDescribe(), getComplete(), events.length) ? "PASS" : "FAIL",
    );
  }
  {
    const secrets = [
      ["password=late-secret-unique-z9", "late-secret-unique-z9"],
      ["token=abc-unique-z9", "abc-unique-z9"],
      ["apiKey=key-unique-z9", "key-unique-z9"],
      ["Authorization Bearer xyz-unique-z9", "xyz-unique-z9"],
      ['"apiKey":"val-unique-z9"', "val-unique-z9"],
      ["?token=tok-unique-z9", "tok-unique-z9"],
    ] as const;
    const rows = [];
    for (const [s, marker] of secrets) {
      const obs = await lateCase(s, marker);
      rows.push({
        s,
        pass: obs.summary === "late_result_redacted" && !obs.leaked,
        summary: obs.summary,
        leaked: obs.leaked,
      });
    }
    record(
      "P-CORR2-D2D3-02",
      "corr2",
      "CORR2 late secret variants reproduction",
      "all redacted",
      rows,
      rows.every((r) => r.pass) ? "PASS" : "FAIL",
    );
  }
  {
    // Nonreg sample of previously verified findings
    const results: Array<{ id: string; pass: boolean }> = [];
    {
      const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
      const providers = composeExecutionRunProvidersFake();
      const result = await coordinateExecutionRun(
        {
          ...fixtureInput("corr:nr:f01"),
          intent: { ...fixtureInput("corr:nr:f01").intent, requestedSource: "real" },
          context: { ...fixtureInput("corr:nr:f01").context, declaredSource: "real" },
          availableSources: ["fixture", "real"],
        } as never,
        { execution: core, providers, events: providers.events, clock },
      );
      results.push({ id: "F01", pass: !result.ok && result.providerInvoked === false });
    }
    {
      const a = assessExecutionReadiness({
        fixturePathDemonstrated: true,
        projectionDemonstrated: true,
        disclosuresDemonstrated: true,
      });
      results.push({
        id: "F02",
        pass:
          a.uxExploration.status === "not_demonstrated" &&
          a.strongRuntimeVerdict.status === "blocked",
      });
    }
    {
      const composition = composeExecutionRunD2D3();
      const r = await composition.coordinate({
        ...fixtureInput("corr:nr:f09"),
        timeoutMs: MAX_COORDINATOR_TIMEOUT_MS + 1,
      });
      results.push({ id: "F09", pass: !r.ok && r.run === undefined });
    }
    {
      const pathCheck = normalizeCanonicalPath("projects/sfia-studio/%2e%2e/.env");
      const sandbox = evaluateSandboxPath({
        path: "projects/sfia-studio/%2e%2e/.env",
        allowlistRoots: ["projects/sfia-studio"],
        protectedPaths: [".env"],
      });
      results.push({
        id: "F10",
        pass: pathCheck.ok === false || sandbox.allowed === false,
      });
    }
    record(
      "P-CORR2-NONREG",
      "corr2",
      "CORR2 non-regression sample F01/F02/F09/F10",
      "all pass",
      results,
      results.every((r) => r.pass) ? "PASS" : "FAIL",
    );
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    pass: probes.filter((p) => p.verdict === "PASS").length,
    fail: probes.filter((p) => p.verdict === "FAIL").length,
    probes,
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(summary, null, 2));
  console.log(JSON.stringify({ pass: summary.pass, fail: summary.fail, probes: probes.map((p) => ({ id: p.id, verdict: p.verdict, finding: p.finding })) }, null, 2));
  if (summary.fail > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

### independent-revalidation-2-probes.ts (29+15)

```typescript
/**
 * Independent Critical QA Revalidation 2 probes for D2-D3 follow-up corrections.
 * Temporary only — not part of the delivery package.
 * Does not reuse Corrections 2 follow-up-probes.ts.
 * Extends independent QA revalidation lineage with P-REV2 + CORR2 reproductions.
 */
import fs from "node:fs";
import path from "node:path";
import {
  assessExecutionReadiness,
  createExecutionProjection,
  evaluateSandboxPath,
  getFixture,
  MAX_COORDINATOR_TIMEOUT_MS,
  normalizeCanonicalPath,
  normalizedFailure,
  validateUntrustedProviderRequest,
  type AiExecutionPort,
  type ProviderInvocationResult,
} from "../../projects/sfia-studio/app/lib/oa/execution-run/index";
import {
  composeExecutionRunD2D3,
  composeExecutionRunMemory,
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
  coordinateExecutionRun,
} from "../../projects/sfia-studio/app/lib/oa/execution-run/server/index";
import { evaluateReadOnlyPolicy } from "../../projects/sfia-studio/app/lib/oa/execution-run/domain/policy";

type Verdict = "PASS" | "FAIL" | "NOT_PROVEN";
type Probe = {
  id: string;
  family: "initial" | "revalidation";
  objective: string;
  expected: string;
  observed: unknown;
  verdict: Verdict;
  finding?: string;
};

const probes: Probe[] = [];
const clock = { nowIso: () => "2026-08-04T12:30:00.000Z" };
const OUT = path.resolve(process.cwd(), ".tmp-sfia-review/qa-revalidation-2-evidence/probe-results-core.json");

function record(
  id: string,
  family: Probe["family"],
  objective: string,
  expected: string,
  observed: unknown,
  verdict: Verdict,
  finding?: string,
) {
  probes.push({ id, family, objective, expected, observed, verdict, finding });
}

function fixtureInput(
  correlationId: string,
  source: "fixture" | "sandbox-real" | "real" = "fixture",
) {
  const f = getFixture("nominal");
  return {
    intent: {
      ...f.intent,
      intentId: `intent:${correlationId}`,
      correlationId,
      requestedSource: source,
    },
    context: { ...f.context, declaredSource: source },
    providerRequest: {
      correlationId,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "qa revalidation fixture" }],
      timeoutMs: 50,
    },
    timeoutMs: 50,
  };
}

async function main() {
  // ========== INITIAL 29 PROBES (independent reproduction) ==========

  // P01 — source spoof via injected availableSources (corrected: ignored + blocked)
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const result = await coordinateExecutionRun(
      {
        ...fixtureInput("corr:rev:source-spoof", "real"),
        availableSources: ["fixture", "real"],
      },
      { execution: core, providers, events: providers.events, clock },
    );
    const vulnerable =
      result.ok === true &&
      result.run?.state === "succeeded" &&
      result.run.disclosure.source === "real";
    record(
      "P-QA-D2D3-01",
      "initial",
      "Refuse fake provider promoted to real by injected source list",
      "blocked; provider not invoked; source real not evidenced",
      {
        ok: result.ok,
        state: result.run?.state,
        source: result.run?.disclosure.source,
        providerInvoked: result.providerInvoked,
        failure: result.ok ? null : result.failure,
      },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-01" : undefined,
    );
  }

  // P02 — boolean-only readiness
  {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    const vulnerable = assessment.uxExploration.status === "demonstrated";
    record(
      "P-QA-D2D3-02",
      "initial",
      "Reject UX readiness without a linked run, projection, or evidence",
      "not_demonstrated",
      assessment.uxExploration,
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-02" : undefined,
    );
  }

  // P03/P04/P05 — sink throws
  for (const [id, throwAt] of [
    ["P-QA-D2D3-03", 1],
    ["P-QA-D2D3-04", 2],
    ["P-QA-D2D3-05", 4],
  ] as const) {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    let eventCount = 0;
    const throwing = composeExecutionRunProviders({
      ...providers,
      events: {
        emit: () => {
          eventCount += 1;
          if (eventCount === throwAt) throw new Error(`sink_raw_${throwAt}`);
        },
      },
    });
    const input = fixtureInput(`corr:rev:sink:${throwAt}`);
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(input, {
        execution: core,
        providers: throwing,
        events: throwing.events,
        clock,
      });
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId(input.intent.correlationId);
    const coherent =
      rawError === "" &&
      result !== undefined &&
      stored.at(-1)?.state === result.run?.state &&
      result.eventDelivery.status === "degraded";
    record(
      id,
      "initial",
      `Contain event sink throw at event ${throwAt}`,
      "normalized coordinator result coherent with stored state",
      {
        rawError,
        storedState: stored.at(-1)?.state,
        returned: result?.run?.state,
        eventDelivery: result?.eventDelivery,
      },
      coherent ? "PASS" : "FAIL",
      coherent ? undefined : "F-QA-D2D3-03",
    );
  }

  // P06 — malicious projection
  {
    const composition = composeExecutionRunD2D3();
    const coordinated = await composition.coordinate(
      fixtureInput("corr:rev:projection"),
    );
    const injectedFunction = () => "executable";
    const malicious = {
      run: {
        ...coordinated.run!,
        externalResult: {
          kind: "success",
          completeness: "complete",
          redactedSummary: "password=projection-plain-secret",
          rawPresent: false,
        },
        blockedReason: "apiKey=projection-key",
        disclosure: {
          ...coordinated.run!.disclosure,
          limits: [injectedFunction],
        },
        persistence: {
          kind: "memory_process_local",
          durable: true,
          multiInstance: true,
          restartSafe: true,
        },
        evidence: [
          {
            ...coordinated.run!.evidence![0],
            source: "real",
            official: false,
          },
        ],
      },
      openReserves: ["password=reserve-plain-secret"],
    };
    const projection = createExecutionProjection(malicious);
    const leaked =
      projection.ok === true &&
      (JSON.stringify(projection).includes("projection-plain-secret") ||
        (projection.projection.persistence as { durable?: boolean }).durable ===
          true ||
        projection.projection.evidenceSummary[0]?.source === "real");
    record(
      "P-QA-D2D3-06",
      "initial",
      "Project malicious runtime data without leaks or claim promotion",
      "secrets/functions/spoofed persistence/evidence rejected or sanitized",
      projection,
      leaked ? "FAIL" : "PASS",
      leaked ? "F-QA-D2D3-04" : undefined,
    );
  }

  // P07 — late secret
  {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => ({
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "cancelled",
          retryable: false,
          correlationId: request.correlationId,
        }),
      }),
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const result = await composition.coordinate({
      ...fixtureInput("corr:rev:late-secret"),
      lateEvidenceSummary: "password=late-plain-secret",
    });
    const summary = result.run?.evidence?.at(-1)?.summary ?? "";
    const vulnerable =
      summary.includes("late-plain-secret") ||
      JSON.stringify(result).includes("late-plain-secret");
    record(
      "P-QA-D2D3-07",
      "initial",
      "Reject sensitive caller-supplied late evidence",
      "late evidence absent or redacted",
      { state: result.run?.state, summary, late: result.lateEvidenceRecorded },
      vulnerable ? "FAIL" : "PASS",
      vulnerable ? "F-QA-D2D3-05" : undefined,
    );
  }

  // P08 — describe before validation
  {
    const base = composeExecutionRunProvidersFake();
    let describeCalls = 0;
    let completeCalls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => {
        describeCalls += 1;
        return base.ai.describeCapability();
      },
      complete: async (request) => {
        completeCalls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const f = getFixture("validation_failure");
    await composition.coordinate({
      intent: f.intent,
      context: f.context,
      providerRequest: {
        correlationId: f.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not run" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    const ok = describeCalls === 0 && completeCalls === 0;
    record(
      "P-QA-D2D3-08",
      "initial",
      "Perform input validation before any provider port call",
      "describeCapability=0; complete=0",
      { describeCalls, completeCalls },
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-D2D3-06",
    );
  }

  // P09 — hostile request getter
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const input = fixtureInput("corr:rev:hostile-request");
    const hostile = Object.create(null);
    Object.defineProperty(hostile, "lane", {
      enumerable: true,
      get() {
        throw new Error("hostile_request_getter");
      },
    });
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(
        { ...input, providerRequest: hostile },
        { execution: core, providers, events: providers.events, clock },
      );
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId(input.intent.correlationId);
    const ok =
      rawError === "" &&
      result?.ok === false &&
      stored.length === 0 &&
      result.providerInvoked === false;
    record(
      "P-QA-D2D3-09",
      "initial",
      "Contain hostile provider request accessors",
      "normalized blocked result; no raw throw; no idle orphan",
      { rawError, storedCount: stored.length, failure: result?.ok ? null : result?.failure },
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-D2D3-07",
    );
  }

  // P10 — hostile result getter
  {
    const base = composeExecutionRunProvidersFake();
    const hostileResult = Object.create(null);
    Object.defineProperty(hostileResult, "kind", {
      enumerable: true,
      get() {
        throw new Error("hostile_result_getter");
      },
    });
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () =>
        hostileResult as unknown as ProviderInvocationResult,
    };
    const providers = composeExecutionRunProviders({ ...base, ai });
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const input = fixtureInput("corr:rev:hostile-result");
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(input, {
        execution: core,
        providers,
        events: providers.events,
        clock,
      });
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId(input.intent.correlationId);
    const ok =
      rawError === "" &&
      stored.at(-1)?.state === "failed" &&
      result?.run?.state === "failed" &&
      !JSON.stringify(result).includes("hostile_result_getter");
    record(
      "P-QA-D2D3-10",
      "initial",
      "Contain hostile provider result accessors",
      "normalized failed terminal; no raw throw; no running orphan",
      { rawError, storedState: stored.at(-1)?.state, returned: result?.run?.state },
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-D2D3-07",
    );
  }

  // P11 — provider mutation of request
  {
    const base = composeExecutionRunProvidersFake();
    let receivedKeys: string[] = [];
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        receivedKeys = Object.keys(request);
        (request as { runId?: string }).runId = "attacker";
        return {
          kind: "success",
          completeness: "complete",
          redactedSummary: "safe",
          rawPresent: false,
          usage: { status: "unavailable", reason: "qa" },
          disclosureNotes: [],
        };
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const result = await composition.coordinate(
      fixtureInput("corr:rev:provider-mutation"),
    );
    const ok =
      result.run?.state === "succeeded" &&
      result.run.runId !== "attacker" &&
      !receivedKeys.includes("repository") &&
      !receivedKeys.includes("transitionExecutionRun");
    record(
      "P-QA-D2D3-11",
      "initial",
      "Prevent malicious provider argument mutation from changing stored run",
      "stored canonical runId and succeeded state",
      { state: result.run?.state, runId: result.run?.runId, receivedKeys },
      ok ? "PASS" : "FAIL",
    );
  }

  // P12 — partial
  {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () => ({
        kind: "success",
        completeness: "partial",
        redactedSummary: "partial",
        rawPresent: false,
        usage: { status: "unavailable", reason: "qa" },
        disclosureNotes: [],
      }),
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const result = await composition.coordinate(fixtureInput("corr:rev:partial"));
    const ok =
      !result.ok &&
      result.run?.state === "failed" &&
      result.failure.code === "INVALID_PROVIDER_RESULT";
    record(
      "P-QA-D2D3-12",
      "initial",
      "Prevent partial provider success",
      "failed / INVALID_PROVIDER_RESULT",
      { state: result.run?.state, failure: result.ok ? null : result.failure },
      ok ? "PASS" : "FAIL",
    );
  }

  // P13/P14 — null / reject
  for (const [id, behavior] of [
    ["P-QA-D2D3-13", "null"],
    ["P-QA-D2D3-14", "reject"],
  ] as const) {
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () => {
        if (behavior === "reject") throw new Error("raw_provider_secret");
        return null as unknown as ProviderInvocationResult;
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const result = await composition.coordinate(
      fixtureInput(`corr:rev:${behavior}`),
    );
    const ok =
      !result.ok &&
      result.run?.state === "failed" &&
      !JSON.stringify(result).includes("raw_provider_secret");
    record(
      id,
      "initial",
      `Normalize provider ${behavior}`,
      "failed terminal with normalized failure and no raw error",
      { state: result.run?.state, failure: result.ok ? null : result.failure },
      ok ? "PASS" : "FAIL",
    );
  }

  // P15 — late timeout success ignored
  {
    const base = composeExecutionRunProvidersFake();
    let resolved = false;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async () => {
        await new Promise((r) => setTimeout(r, 20));
        resolved = true;
        return {
          kind: "success",
          completeness: "complete",
          redactedSummary: "late success",
          rawPresent: false,
          usage: { status: "unavailable", reason: "qa" },
          disclosureNotes: [],
        };
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const result = await composition.coordinate({
      ...fixtureInput("corr:rev:late-timeout"),
      timeoutMs: 2,
    });
    await new Promise((r) => setTimeout(r, 30));
    const stored = result.run
      ? await composition.getById(result.run.runId)
      : null;
    const ok =
      result.run?.state === "timed_out" &&
      stored?.state === "timed_out" &&
      resolved &&
      !stored.evidence;
    record(
      "P-QA-D2D3-15",
      "initial",
      "Ignore provider success resolving after timeout",
      "single timed_out terminal after late resolution",
      {
        returnedState: result.run?.state,
        storedState: stored?.state,
        resolved,
      },
      ok ? "PASS" : "FAIL",
    );
  }

  // P16 — pre-cancel
  {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        calls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const controller = new AbortController();
    controller.abort();
    const result = await composition.coordinate({
      ...fixtureInput("corr:rev:pre-cancel"),
      signal: controller.signal,
    });
    const ok =
      result.run?.state === "cancelled" &&
      calls === 0 &&
      result.providerInvoked === false;
    record(
      "P-QA-D2D3-16",
      "initial",
      "Cancel before provider operation",
      "cancelled; operation count 0; providerInvoked=false",
      {
        state: result.run?.state,
        calls,
        providerInvoked: result.providerInvoked,
        providerAttempted: result.providerAttempted,
      },
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-D2D3-08",
    );
  }

  // P17 — negative timeout
  {
    const composition = composeExecutionRunD2D3();
    const result = await composition.coordinate({
      ...fixtureInput("corr:rev:negative-timeout"),
      timeoutMs: -1,
    });
    const ok =
      !result.ok &&
      result.run === undefined &&
      result.providerInvoked === false &&
      result.failure.code === "VALIDATION_ERROR";
    record(
      "P-QA-D2D3-17",
      "initial",
      "Reject negative coordinator timeout before engagement",
      "validation failure; no run; provider not invoked",
      {
        state: result.run?.state,
        providerInvoked: result.providerInvoked,
        failure: result.ok ? null : result.failure,
      },
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-D2D3-09",
    );
  }

  // P18 — concurrent isolation
  {
    const composition = composeExecutionRunD2D3();
    const [a, b] = await Promise.all([
      composition.coordinate(fixtureInput("corr:rev:concurrent:a")),
      composition.coordinate(fixtureInput("corr:rev:concurrent:b")),
    ]);
    const ok =
      a.run?.state === "succeeded" &&
      b.run?.state === "succeeded" &&
      a.run!.runId !== b.run!.runId &&
      a.run!.evidence![0]!.evidenceId !== b.run!.evidence![0]!.evidenceId;
    record(
      "P-QA-D2D3-18",
      "initial",
      "Isolate concurrent process-local runs",
      "unique run/evidence IDs",
      { a: a.run?.runId, b: b.run?.runId },
      ok ? "PASS" : "FAIL",
    );
  }

  // P19 — correlation mismatch
  {
    const composition = composeExecutionRunD2D3();
    const input = fixtureInput("corr:rev:corr-mismatch");
    const result = await composition.coordinate({
      ...input,
      providerRequest: {
        ...input.providerRequest,
        correlationId: "corr:other",
      },
    });
    const ok =
      !result.ok &&
      result.run === undefined &&
      result.stateTrace.length === 0 &&
      result.providerAttempted === false &&
      result.providerInvoked === false &&
      result.providerCompleted === false;
    record(
      "P-QA-D2D3-19",
      "initial",
      "Reject provider request correlation mismatch",
      "blocked before provider",
      { state: result.run?.state, providerInvoked: result.providerInvoked },
      ok ? "PASS" : "FAIL",
    );
  }

  // P20 — sink detail mutation
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const mutating = composeExecutionRunProviders({
      ...providers,
      events: {
        emit: (event) => {
          (event as { detail?: unknown }).detail = {
            hijack: true,
            state: "failed",
          };
        },
      },
    });
    const result = await coordinateExecutionRun(
      fixtureInput("corr:rev:sink-mutate"),
      {
        execution: core,
        providers: mutating,
        events: mutating.events,
        clock,
      },
    );
    const stored = await core.listByCorrelationId("corr:rev:sink-mutate");
    const ok =
      result.run?.state === "succeeded" && stored.at(-1)?.state === "succeeded";
    record(
      "P-QA-D2D3-20",
      "initial",
      "Prevent event sink detail mutation from changing state",
      "succeeded unchanged",
      { returned: result.run?.state, stored: stored.at(-1)?.state },
      ok ? "PASS" : "FAIL",
    );
  }

  // P21 source matrix
  for (const [suffix, requested, declared] of [
    ["fixture-real", "fixture", "real"],
    ["real-real", "real", "real"],
    ["sandbox-sandbox", "sandbox-real", "sandbox-real"],
  ] as const) {
    const composition = composeExecutionRunD2D3();
    const f = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...f.intent,
        intentId: `intent:rev:src:${suffix}`,
        correlationId: `corr:rev:src:${suffix}`,
        requestedSource: requested,
      },
      context: { ...f.context, declaredSource: declared },
      providerRequest: {
        correlationId: `corr:rev:src:${suffix}`,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "src" }],
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    const ok = !result.ok && result.providerInvoked === false;
    record(
      `P-QA-D2D3-21-${suffix}`,
      "initial",
      `Source matrix requested=${requested}, declared=${declared}`,
      "blocked without provider",
      {
        ok: result.ok,
        state: result.run?.state,
        failure: result.ok ? null : result.failure,
      },
      ok ? "PASS" : "FAIL",
    );
  }

  // P22 pre-engagement fixtures
  for (const scenario of [
    "mutation_forbidden",
    "protected_path",
    "blocked_gate",
  ] as const) {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture(scenario);
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest:
        fixture.intent.requestedLane === "ai"
          ? {
              correlationId: fixture.intent.correlationId,
              lane: "ai",
              operation: "complete",
              messages: [{ role: "user", content: "block" }],
              timeoutMs: 50,
            }
          : undefined,
      timeoutMs: 50,
    });
    const ok = !result.ok && result.providerInvoked === false;
    record(
      `P-QA-D2D3-22-${scenario}`,
      "initial",
      `Pre-engagement block for ${scenario}`,
      "blocked before provider",
      {
        state: result.run?.state,
        failure: result.ok ? null : result.failure,
        providerInvoked: result.providerInvoked,
      },
      ok ? "PASS" : "FAIL",
    );
  }

  // P23 encoded path
  {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const pathHostile = "projects/sfia-studio/%2e%2e/.env";
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        intentId: "intent:rev:encoded-path",
        correlationId: "corr:rev:encoded-path",
        requestedLane: "git",
      },
      context: fixture.context,
      providerRequest: {
        correlationId: "corr:rev:encoded-path",
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "path_meta",
        path: pathHostile,
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    const ok = result.run?.state !== "succeeded" && result.providerInvoked === false;
    record(
      "P-QA-D2D3-23",
      "initial",
      "Reject encoded traversal/protected path",
      "blocked before provider; no success",
      {
        path: pathHostile,
        state: result.run?.state,
        providerInvoked: result.providerInvoked,
        failure: result.ok ? null : result.failure,
      },
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-D2D3-10",
    );
  }

  // P24 caller runId
  {
    const composition = composeExecutionRunD2D3();
    const input = fixtureInput("corr:rev:caller-run-id");
    const result = await composition.coordinate({
      ...input,
      providerRequest: {
        ...input.providerRequest,
        runId: "executionrun:attacker",
      },
    });
    const ok =
      result.run?.state === "succeeded" &&
      result.run.runId !== "executionrun:attacker";
    record(
      "P-QA-D2D3-24",
      "initial",
      "Prevent caller runId from selecting state authority target",
      "canonical generated runId",
      { state: result.run?.state, runId: result.run?.runId },
      ok ? "PASS" : "FAIL",
    );
  }

  // P25 extra readiness props
  {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
      uiDeliveryDemonstrated: true,
      strongRuntimeDemonstrated: true,
    } as never);
    const ok =
      assessment.uiDelivery.status === "not_demonstrated" &&
      assessment.strongRuntimeVerdict.status === "blocked" &&
      assessment.uxExploration.status === "not_demonstrated";
    record(
      "P-QA-D2D3-25",
      "initial",
      "Prevent additional readiness properties promoting UI/runtime",
      "UI not_demonstrated; strong blocked; UX not_demonstrated for bool-only",
      assessment,
      ok ? "PASS" : "FAIL",
    );
  }

  // ========== NEW P-REV PROBES ==========

  // P-REV-01 source via descriptor
  {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => ({
        ...base.ai.describeCapability(),
        // @ts-expect-error adversarial extra
        source: "real",
        available: true,
        verified: true,
      }),
      complete: async (request) => {
        calls += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const cases = [];
    for (const source of ["real", "sandbox-real"] as const) {
      const result = await composition.coordinate({
        ...fixtureInput(`corr:prev01:${source}`, source),
        availableSources: ["real", "sandbox-real", "fixture"],
      });
      cases.push({
        source,
        ok: result.ok,
        state: result.run?.state,
        calls,
        providerInvoked: result.providerInvoked,
      });
    }
    const ok = cases.every(
      (c) =>
        c.ok === false &&
        c.state === undefined &&
        c.providerInvoked === false &&
        c.calls === 0,
    );
    record(
      "P-REV-D2D3-01",
      "revalidation",
      "Source authority via descriptor / availableSources injection",
      "zero invocation; no run; no real evidence",
      cases,
      ok ? "PASS" : "FAIL",
      ok ? undefined : "F-QA-D2D3-01",
    );
  }

  // P-REV-02 composition options cannot become proof
  {
    const composition = composeExecutionRunD2D3({
      // @ts-expect-error adversarial
      availableSources: ["real"],
      // @ts-expect-error adversarial
      sources: ["real"],
    });
    const result = await composition.coordinate(
      fixtureInput("corr:prev02", "real"),
    );
    const ok =
      !result.ok &&
      composition.disclosure.sources[0] === "fixture" &&
      result.providerInvoked === false;
    record(
      "P-REV-D2D3-02",
      "revalidation",
      "Source authority via composition options",
      "disclosure.sources remains fixture; real blocked",
      {
        disclosure: composition.disclosure.sources,
        ok: result.ok,
        failure: result.ok ? null : result.failure,
      },
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-03 readiness artifact matrix
  {
    const composition = composeExecutionRunD2D3();
    const succeeded = await composition.coordinate(
      fixtureInput("corr:prev03:ok"),
    );
    const cases: { name: string; status: string }[] = [];
    const boolOnly = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    cases.push({ name: "bool-only", status: boolOnly.uxExploration.status });
    cases.push({
      name: "missing-run",
      status: assessExecutionReadiness({}).uxExploration.status,
    });
    const idleLike = assessExecutionReadiness({
      run: { ...succeeded.run!, state: "idle", evidence: undefined },
      projection: { runId: succeeded.run!.runId, correlationId: succeeded.run!.correlationId, source: "fixture" },
    });
    cases.push({ name: "idle", status: idleLike.uxExploration.status });
    const badEvidence = assessExecutionReadiness({
      run: {
        ...succeeded.run!,
        evidence: [
          {
            ...succeeded.run!.evidence![0],
            official: false,
            completeness: "partial",
            source: "real",
            runId: "other",
            correlationId: "other",
          },
        ],
      },
      projection: {
        runId: succeeded.run!.runId,
        correlationId: succeeded.run!.correlationId,
        source: "fixture",
      },
    });
    cases.push({
      name: "bad-evidence",
      status: badEvidence.uxExploration.status,
    });
    const good = await composition.assessById(succeeded.run!.runId);
    cases.push({ name: "canonical", status: good.uxExploration.status });
    const ok =
      cases
        .filter((c) => c.name !== "canonical")
        .every((c) => c.status === "not_demonstrated") &&
      good.uxExploration.status === "demonstrated" &&
      good.uiDelivery.status === "not_demonstrated" &&
      good.strongRuntimeVerdict.status === "blocked";
    record(
      "P-REV-D2D3-03",
      "revalidation",
      "Readiness linked to canonical artifacts",
      "UX demonstrated only for linked succeeded+projection+official complete evidence",
      { cases, ui: good.uiDelivery.status, strong: good.strongRuntimeVerdict.status },
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-04 sink multi-throw
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    let eventCount = 0;
    const throwing = composeExecutionRunProviders({
      ...providers,
      events: {
        emit: () => {
          eventCount += 1;
          throw new Error(`multi_sink_${eventCount}`);
        },
      },
    });
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(fixtureInput("corr:prev04"), {
        execution: core,
        providers: throwing,
        events: throwing.events,
        clock,
      });
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId("corr:prev04");
    const ok =
      rawError === "" &&
      result?.run?.state === "succeeded" &&
      stored.at(-1)?.state === "succeeded" &&
      result.eventDelivery.status === "degraded" &&
      result.eventDelivery.failureCount >= 1 &&
      !JSON.stringify(result).includes("multi_sink_");
    record(
      "P-REV-D2D3-04",
      "revalidation",
      "Event sink fail-safe with repeated synchronous throws",
      "succeeded; degraded; no raw sink message",
      {
        rawError,
        state: result?.run?.state,
        eventDelivery: result?.eventDelivery,
        eventCount,
      },
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-05 sink hostile detail
  {
    const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
    const providers = composeExecutionRunProvidersFake();
    const hostile = composeExecutionRunProviders({
      ...providers,
      events: {
        emit: (event) => {
          Object.defineProperty(event, "detail", {
            get() {
              throw new Error("sink_detail_getter");
            },
          });
        },
      },
    });
    let rawError = "";
    let result;
    try {
      result = await coordinateExecutionRun(fixtureInput("corr:prev05"), {
        execution: core,
        providers: hostile,
        events: hostile.events,
        clock,
      });
    } catch (error) {
      rawError = error instanceof Error ? error.message : String(error);
    }
    const stored = await core.listByCorrelationId("corr:prev05");
    const ok =
      rawError === "" &&
      result?.run?.state === stored.at(-1)?.state &&
      result?.run?.state === "succeeded";
    record(
      "P-REV-D2D3-05",
      "revalidation",
      "Event sink hostile detail accessors",
      "sink non-authoritative; run unchanged; no raw throw",
      { rawError, state: result?.run?.state },
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-06 deep hostile projection
  {
    const composition = composeExecutionRunD2D3();
    const coordinated = await composition.coordinate(
      fixtureInput("corr:prev06"),
    );
    const cycle: Record<string, unknown> = { a: 1 };
    cycle.self = cycle;
    const sym = Symbol("x");
    const deep = {
      run: {
        ...coordinated.run!,
        nested: { password: "deep-secret", token: "t" },
        [sym]: "sym",
        disclosure: {
          ...coordinated.run!.disclosure,
          limits: ["ok", () => 1],
        },
        persistence: {
          kind: "memory_process_local",
          durable: true,
          multiInstance: true,
          restartSafe: true,
        },
        evidence: [
          {
            ...coordinated.run!.evidence![0],
            source: "real",
            official: false,
            correlationId: "wrong",
          },
        ],
        cycle,
      },
    };
    const projection = createExecutionProjection(deep);
    const leaked =
      projection.ok === true &&
      JSON.stringify(projection).match(/deep-secret|durable.:true/);
    record(
      "P-REV-D2D3-06",
      "revalidation",
      "Projection hostile deep graph",
      "explicit reject or safe allowlist; no secret/claim promotion",
      projection,
      leaked || projection.ok === true ? "FAIL" : "PASS",
    );
  }

  // P-REV-07 projectById authority
  {
    const composition = composeExecutionRunD2D3();
    const coordinated = await composition.coordinate(
      fixtureInput("corr:prev07"),
    );
    const missing = await composition.projectById("executionrun:missing");
    const first = await composition.projectById(coordinated.run!.runId);
    const second = await composition.projectById(coordinated.run!.runId);
    // composition has no project(run) accepting arbitrary object
    const hasProjectFn = "project" in composition;
    const ok =
      missing.ok === false &&
      first.ok === true &&
      second.ok === true &&
      first.ok &&
      second.ok &&
      first.projection.runId === second.projection.runId &&
      first.projection.source === "fixture" &&
      hasProjectFn === false;
    record(
      "P-REV-D2D3-07",
      "revalidation",
      "Projection from canonical runId authority",
      "projectById only; deterministic; no arbitrary project(run)",
      {
        missing,
        runId: first.ok ? first.projection.runId : null,
        hasProjectFn,
      },
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-08 late evidence extended
  {
    const secrets = [
      "password=x",
      "token=abc",
      "apiKey=k",
      "Authorization Bearer xyz",
      "BEGIN RSA PRIVATE KEY",
      "ghp_abcdefghijklmnopqrstuvwxyz0123456789",
      "sk-abcdefghijklmnopqrstuvwxyz",
      "xoxb-1234567890-abcdefgh",
      "a".repeat(5000),
    ];
    const base = composeExecutionRunProvidersFake();
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => ({
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "cancelled",
          retryable: false,
          correlationId: request.correlationId,
        }),
      }),
    };
    const results = [];
    for (const [i, summary] of secrets.entries()) {
      const composition = composeExecutionRunD2D3({
        providers: composeExecutionRunProviders({ ...base, ai }),
      });
      const result = await composition.coordinate({
        ...fixtureInput(`corr:prev08:${i}`),
        lateEvidenceSummary: summary,
      });
      const late = result.run?.evidence?.at(-1);
      const blob = JSON.stringify(result);
      results.push({
        i,
        state: result.run?.state,
        summary: late?.summary,
        leaked: /password=x|token=abc|apiKey=k|Bearer xyz|PRIVATE KEY|ghp_|sk-abcdefghijklmnopqrst|xoxb-/.test(
          blob,
        ),
        late: late?.late,
        source: late?.source,
        official: late?.official,
      });
    }
    const ok = results.every(
      (r) =>
        r.state === "cancelled" &&
        r.leaked === false &&
        r.late === true &&
        r.source === "fixture" &&
        r.official === true &&
        (r.i === 8 || r.summary === "late_result_redacted"),
    );
    record(
      "P-REV-D2D3-08",
      "revalidation",
      "Late evidence redaction extended",
      "no sensitive residue; terminal unchanged; canonical identity/source",
      results,
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-09 preflight no provider effect
  {
    const base = composeExecutionRunProvidersFake();
    let describe = 0;
    let complete = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => {
        describe += 1;
        return base.ai.describeCapability();
      },
      complete: async (request) => {
        complete += 1;
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const cases = [];
    const invalids: unknown[] = [
      null,
      { intent: null, context: {}, timeoutMs: 50 },
      {
        ...fixtureInput("corr:prev09:getter"),
        intent: Object.defineProperty({ ...getFixture("nominal").intent }, "operation", {
          enumerable: true,
          get() {
            throw new Error("intent_getter");
          },
        }),
      },
      { ...fixtureInput("corr:prev09:to0"), timeoutMs: 0 },
      {
        ...fixtureInput("corr:prev09:path"),
        intent: {
          ...getFixture("nominal").intent,
          correlationId: "corr:prev09:path",
          intentId: "intent:prev09:path",
          requestedLane: "git",
          targetPath: "%2e%2e/.env",
        },
        providerRequest: {
          correlationId: "corr:prev09:path",
          lane: "git",
          operation: "read",
          owner: "o",
          repo: "r",
          kind: "path_meta",
          path: "%2e%2e/.env",
          timeoutMs: 50,
        },
      },
    ];
    let raw = 0;
    for (const input of invalids) {
      const beforeD = describe;
      const beforeC = complete;
      try {
        const result = await composition.coordinate(input);
        cases.push({
          ok: result.ok,
          dDelta: describe - beforeD,
          cDelta: complete - beforeC,
          run: result.run?.state,
        });
      } catch {
        raw += 1;
        cases.push({ threw: true, dDelta: describe - beforeD, cDelta: complete - beforeC });
      }
    }
    const ok =
      raw === 0 &&
      cases.every((c) => (c as { dDelta: number }).dDelta === 0 && (c as { cDelta: number }).cDelta === 0);
    record(
      "P-REV-D2D3-09",
      "revalidation",
      "Preflight without provider effect",
      "describe=0; complete=0; no raw throw",
      { cases, describe, complete, raw },
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-10 hostile provider results
  {
    const variants: Array<{
      name: string;
      make: () => ProviderInvocationResult | Promise<ProviderInvocationResult>;
    }> = [
      {
        name: "getter",
        make: () => {
          const o = Object.create(null);
          Object.defineProperty(o, "kind", {
            enumerable: true,
            get() {
              throw new Error("kind_getter");
            },
          });
          return o as ProviderInvocationResult;
        },
      },
      {
        name: "partial",
        make: () => ({
          kind: "success",
          completeness: "partial",
          redactedSummary: "p",
          rawPresent: false,
          usage: { status: "unavailable", reason: "p" },
          disclosureNotes: [],
        }),
      },
      {
        name: "raw",
        make: () =>
          ({
            kind: "success",
            completeness: "complete",
            redactedSummary: "password=raw-leak",
            rawPresent: true,
            usage: { status: "unavailable", reason: "x" },
            disclosureNotes: [],
          }) as ProviderInvocationResult,
      },
    ];
    const outcomes = [];
    for (const v of variants) {
      const base = composeExecutionRunProvidersFake();
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => base.ai.describeCapability(),
        complete: async () => v.make(),
      };
      const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
      const providers = composeExecutionRunProviders({ ...base, ai });
      let rawError = "";
      let result;
      try {
        result = await coordinateExecutionRun(
          fixtureInput(`corr:prev10:${v.name}`),
          { execution: core, providers, events: providers.events, clock },
        );
      } catch (error) {
        rawError = error instanceof Error ? error.message : String(error);
      }
      const stored = await core.listByCorrelationId(`corr:prev10:${v.name}`);
      outcomes.push({
        name: v.name,
        rawError,
        state: stored.at(-1)?.state,
        returned: result?.run?.state,
        leaked: JSON.stringify(result ?? {}).includes("raw-leak"),
      });
    }
    const ok = outcomes.every(
      (o) =>
        o.rawError === "" &&
        o.state === "failed" &&
        o.returned === "failed" &&
        o.leaked === false,
    );
    record(
      "P-REV-D2D3-10",
      "revalidation",
      "Hostile / invalid provider results",
      "failed terminal; no orphan running; no leak",
      outcomes,
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-11 diagnostics matrix
  {
    const matrix = [];
    // preflight reject
    {
      const composition = composeExecutionRunD2D3();
      const r = await composition.coordinate({
        ...fixtureInput("corr:prev11:pre"),
        timeoutMs: -1,
      });
      matrix.push({
        name: "preflight",
        attempted: r.providerAttempted,
        invoked: r.providerInvoked,
        completed: r.providerCompleted,
      });
    }
    // pre-cancel
    {
      const base = composeExecutionRunProvidersFake();
      let calls = 0;
      const ai: AiExecutionPort = {
        lane: "ai",
        describeCapability: () => base.ai.describeCapability(),
        complete: async (req) => {
          calls += 1;
          return base.ai.complete(req);
        },
      };
      const composition = composeExecutionRunD2D3({
        providers: composeExecutionRunProviders({ ...base, ai }),
      });
      const c = new AbortController();
      c.abort();
      const r = await composition.coordinate({
        ...fixtureInput("corr:prev11:cancel"),
        signal: c.signal,
      });
      matrix.push({
        name: "pre-cancel",
        attempted: r.providerAttempted,
        invoked: r.providerInvoked,
        completed: r.providerCompleted,
        calls,
      });
    }
    // success
    {
      const composition = composeExecutionRunD2D3();
      const r = await composition.coordinate(fixtureInput("corr:prev11:ok"));
      matrix.push({
        name: "success",
        attempted: r.providerAttempted,
        invoked: r.providerInvoked,
        completed: r.providerCompleted,
      });
    }
    const ok =
      matrix.find((m) => m.name === "preflight")!.invoked === false &&
      matrix.find((m) => m.name === "preflight")!.attempted === false &&
      matrix.find((m) => m.name === "pre-cancel")!.invoked === false &&
      matrix.find((m) => m.name === "pre-cancel")!.attempted === true &&
      matrix.find((m) => m.name === "pre-cancel")!.calls === 0 &&
      matrix.find((m) => m.name === "success")!.invoked === true &&
      matrix.find((m) => m.name === "success")!.completed === true;
    record(
      "P-REV-D2D3-11",
      "revalidation",
      "Provider diagnostics exactness",
      "attempted/invoked/completed match real call counts",
      matrix,
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-12 timeout boundary
  {
    const composition = composeExecutionRunD2D3();
    const samples: Array<{ label: string; value: unknown; expectOk: boolean }> =
      [
        { label: "undefined", value: undefined, expectOk: false },
        { label: "null", value: null, expectOk: false },
        { label: "string", value: "50", expectOk: false },
        { label: "0", value: 0, expectOk: false },
        { label: "neg", value: -1, expectOk: false },
        { label: "nan", value: Number.NaN, expectOk: false },
        { label: "inf", value: Number.POSITIVE_INFINITY, expectOk: false },
        { label: "frac", value: 1.5, expectOk: false },
        { label: "max", value: MAX_COORDINATOR_TIMEOUT_MS, expectOk: true },
        {
          label: "over",
          value: MAX_COORDINATOR_TIMEOUT_MS + 1,
          expectOk: false,
        },
        { label: "1", value: 1, expectOk: true },
      ];
    const rows = [];
    for (const s of samples) {
      const input = {
        ...fixtureInput(`corr:prev12:${s.label}`),
        timeoutMs: s.value as number,
      };
      const result = await composition.coordinate(input);
      rows.push({
        label: s.label,
        ok: result.ok,
        run: result.run?.state,
        invoked: result.providerInvoked,
        expectOk: s.expectOk,
      });
    }
    const ok = rows.every((r) =>
      r.expectOk
        ? r.ok === true && r.run === "succeeded"
        : r.ok === false && r.run === undefined && r.invoked === false,
    );
    record(
      "P-REV-D2D3-12",
      "revalidation",
      "Timeout boundary local 1..60000",
      "only positive integers <= MAX accepted; invalid before create/provider",
      { MAX_COORDINATOR_TIMEOUT_MS, rows },
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-13 path normalization consistency
  {
    const hostiles = [
      "%2e%2e/.env",
      "%252e%252e/.env",
      "%2f.env",
      "%252f.env",
      "%5c..%5c.env",
      "projects\\sfia-studio\\%2e%2e\\.env",
      "%00",
      "%2500",
      "%zz",
      "%2fetc%2fpasswd",
      "C:%5cWindows%5c.env",
    ];
    const legit = "projects/sfia-studio/app/lib/oa/execution-run/index.ts";
    const rows = [];
    for (const p of hostiles) {
      const sandbox = evaluateSandboxPath({
        path: p,
        allowlistRepos: ["projects/sfia-studio/"],
      });
      const canonical = normalizeCanonicalPath(p);
      const boundary = validateUntrustedProviderRequest({
        correlationId: "c",
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "path_meta",
        path: p,
        timeoutMs: 50,
      });
      const policy = evaluateReadOnlyPolicy({
        intent: {
          ...getFixture("nominal").intent,
          requestedLane: "none",
          targetPath: p,
          correlationId: "c",
        },
        context: {
          ...getFixture("nominal").context,
          protectedPaths: [".env"],
        },
      });
      rows.push({
        p,
        sandboxAllowed: sandbox.allowed,
        canonicalOk: canonical.ok,
        boundaryOk: boundary.ok,
        policyOk: policy.ok,
      });
    }
    const legitSandbox = evaluateSandboxPath({
      path: legit,
      allowlistRepos: ["projects/sfia-studio/"],
    });
    const ok =
      rows.every(
        (r) =>
          r.sandboxAllowed === false &&
          (r.canonicalOk === false || r.sandboxAllowed === false),
      ) &&
      rows.every((r) => r.boundaryOk === false || r.sandboxAllowed === false) &&
      legitSandbox.allowed === true;
    // also coordinator on intent+request path
    const composition = composeExecutionRunD2D3();
    const coord = await composition.coordinate({
      intent: {
        ...getFixture("nominal").intent,
        intentId: "intent:prev13",
        correlationId: "corr:prev13",
        requestedLane: "git",
        targetPath: "%2e%2e/.env",
      },
      context: getFixture("nominal").context,
      providerRequest: {
        correlationId: "corr:prev13",
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "path_meta",
        path: "%2e%2e/.env",
        timeoutMs: 50,
      },
      timeoutMs: 50,
    });
    const coordOk = !coord.ok && coord.providerInvoked === false;
    record(
      "P-REV-D2D3-13",
      "revalidation",
      "Path normalization shared across surfaces",
      "hostile blocked consistently; legitimate allowlisted path kept",
      { rows, legitAllowed: legitSandbox.allowed, coordOk },
      ok && coordOk ? "PASS" : "FAIL",
    );
  }

  // P-REV-14 import/public surface
  {
    const root = path.resolve(
      path.dirname(new URL(import.meta.url).pathname),
      "../../projects/sfia-studio/app/lib/oa/execution-run",
    );
    const barrel = fs.readFileSync(path.join(root, "index.ts"), "utf8");
    const compose = fs.readFileSync(
      path.join(root, "server/composeExecutionRunD2D3.ts"),
      "utf8",
    );
    const untrusted = fs.readFileSync(
      path.join(root, "application/untrustedExecutionData.ts"),
      "utf8",
    );
    const ok =
      !/export\s*\{[^}]*\bcoordinateExecutionRun\b[^}]*\}\s*from/.test(barrel) &&
      !barrel.includes("availableSources") &&
      !barrel.includes("composeExecutionRunD2D3") &&
      compose.includes("assertServerOnly") &&
      !compose.includes("availableSources") &&
      !/from\s+["'](?:node:|next|openai)/.test(untrusted) &&
      !compose.includes("D2D3-04") &&
      !untrusted.includes("materialize");
    record(
      "P-REV-D2D3-14",
      "revalidation",
      "Import and public surface boundaries",
      "coordinator not on public barrel; compose server-only; untrusted pure",
      {
        barrelHasCoordinateExport: /export\s*\{[^}]*\bcoordinateExecutionRun\b/.test(
          barrel,
        ),
        composeServerOnly: compose.includes("assertServerOnly"),
      },
      ok ? "PASS" : "FAIL",
    );
  }

  // P-REV-15 isolation in-process (single composition / single memory authority)
  {
    const base = composeExecutionRunProvidersFake();
    let calls = 0;
    const ai: AiExecutionPort = {
      lane: "ai",
      describeCapability: () => base.ai.describeCapability(),
      complete: async (request) => {
        calls += 1;
        if (request.correlationId.includes("timeout")) {
          await new Promise((r) => setTimeout(r, 25));
        }
        return base.ai.complete(request);
      },
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProviders({ ...base, ai }),
    });
    const [okRun, timed, cancelled, blocked] = await Promise.all([
      composition.coordinate(fixtureInput("corr:prev15:ok")),
      composition.coordinate({
        ...fixtureInput("corr:prev15:timeout"),
        timeoutMs: 2,
      }),
      (async () => {
        const c = new AbortController();
        c.abort();
        return composition.coordinate({
          ...fixtureInput("corr:prev15:cancel"),
          signal: c.signal,
        });
      })(),
      composition.coordinate(fixtureInput("corr:prev15:real", "real")),
    ]);
    const ids = [okRun.run?.runId, timed.run?.runId, cancelled.run?.runId].filter(
      Boolean,
    ) as string[];
    const evidences = [
      okRun.run?.evidence?.[0]?.evidenceId,
      timed.run?.evidence?.[0]?.evidenceId,
      cancelled.run?.evidence?.at(-1)?.evidenceId,
    ].filter(Boolean);
    const ok =
      okRun.run?.state === "succeeded" &&
      timed.run?.state === "timed_out" &&
      cancelled.run?.state === "cancelled" &&
      blocked.ok === false &&
      blocked.run === undefined &&
      new Set(ids).size === ids.length &&
      ids.length === 3;
    record(
      "P-REV-D2D3-15",
      "revalidation",
      "In-process isolation across success/timeout/cancel/blocked",
      "no contamination; unique IDs; no multi-instance claim",
      {
        ok: okRun.run?.state,
        timed: timed.run?.state,
        cancelled: cancelled.run?.state,
        blocked: blocked.ok,
        ids,
        evidences,
        calls,
      },
      ok ? "PASS" : "FAIL",
    );
  }

  const initial = probes.filter((p) => p.family === "initial");
  const rev = probes.filter((p) => p.family === "revalidation");
  const summary = {
    initialTotal: initial.length,
    initialPass: initial.filter((p) => p.verdict === "PASS").length,
    initialFail: initial.filter((p) => p.verdict === "FAIL").length,
    initialNotProven: initial.filter((p) => p.verdict === "NOT_PROVEN").length,
    revTotal: rev.length,
    revPass: rev.filter((p) => p.verdict === "PASS").length,
    revFail: rev.filter((p) => p.verdict === "FAIL").length,
    historicallyFailed: [
      "P-QA-D2D3-01",
      "P-QA-D2D3-02",
      "P-QA-D2D3-03",
      "P-QA-D2D3-04",
      "P-QA-D2D3-05",
      "P-QA-D2D3-06",
      "P-QA-D2D3-07",
      "P-QA-D2D3-08",
      "P-QA-D2D3-09",
      "P-QA-D2D3-10",
      "P-QA-D2D3-16",
      "P-QA-D2D3-17",
      "P-QA-D2D3-23",
    ].map((id) => {
      const p = probes.find((x) => x.id === id);
      return { id, verdict: p?.verdict ?? "MISSING" };
    }),
    probes,
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(summary, null, 2));
  console.log(
    JSON.stringify(
      {
        initial: {
          total: summary.initialTotal,
          pass: summary.initialPass,
          fail: summary.initialFail,
          notProven: summary.initialNotProven,
        },
        revalidation: {
          total: summary.revTotal,
          pass: summary.revPass,
          fail: summary.revFail,
        },
        historicallyFailed: summary.historicallyFailed,
        failedIds: probes.filter((p) => p.verdict !== "PASS").map((p) => p.id),
      },
      null,
      2,
    ),
  );
  if (probes.some((p) => p.verdict !== "PASS")) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## 29. Résultats détaillés P-REV2

```json
{
  "generatedAt": "2026-08-04T11:41:01.582Z",
  "pass": 15,
  "fail": 2,
  "probes": [
    {
      "id": "P-REV2-D2D3-01",
      "family": "rev2",
      "objective": "correlationId mismatch simple",
      "expected": "reject pre-engagement; no run/provider/events",
      "observed": {
        "ok": false,
        "describe": 0,
        "complete": 0,
        "events": 0,
        "failure": {
          "family": "validation",
          "code": "VALIDATION_ERROR",
          "userMessage": "Provider request correlationId does not match intent",
          "technicalDetailsRedacted": true,
          "retryable": false,
          "correlationId": "corr:canonical"
        }
      },
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-02",
      "family": "rev2",
      "objective": "correlationId whitespace variants",
      "expected": "all rejected without silent trim identity rewrite",
      "observed": [
        {
          "name": "empty",
          "ok": true,
          "state": null,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "spaces",
          "ok": true,
          "state": null,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "tab",
          "ok": true,
          "state": null,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "newline",
          "ok": true,
          "state": null,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "prefix_space",
          "ok": true,
          "state": null,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "suffix_space",
          "ok": true,
          "state": null,
          "describe": 0,
          "complete": 0
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-03",
      "family": "rev2",
      "objective": "correlationId type hostile",
      "expected": "all rejected pre-engagement",
      "observed": [
        {
          "name": "absent",
          "ok": true,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "null",
          "ok": true,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "number",
          "ok": true,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "boxed_string",
          "ok": true,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "array",
          "ok": true,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "object",
          "ok": true,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "getter",
          "ok": true,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "odd_proto",
          "ok": true,
          "describe": 0,
          "complete": 0
        },
        {
          "name": "oversized",
          "ok": true,
          "describe": 0,
          "complete": 0
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-04",
      "family": "rev2",
      "objective": "lane mismatch variants",
      "expected": "all rejected pre-engagement",
      "observed": [
        {
          "name": "ai_vs_git",
          "ok": true,
          "describe": 0,
          "complete": 0,
          "events": 0
        },
        {
          "name": "git_vs_ai",
          "ok": true,
          "describe": 0,
          "complete": 0,
          "events": 0
        },
        {
          "name": "lane_absent",
          "ok": true,
          "describe": 0,
          "complete": 0,
          "events": 0
        },
        {
          "name": "lane_invalid_type",
          "ok": true,
          "describe": 0,
          "complete": 0,
          "events": 0
        },
        {
          "name": "lane_getter",
          "ok": true,
          "describe": 0,
          "complete": 0,
          "events": 0
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-05",
      "family": "rev2",
      "objective": "no downstream effect on invalid identity",
      "expected": "all prior mismatch probes PASS implies zero create/capability/provider/evidence",
      "observed": {
        "prior": [
          {
            "id": "P-REV2-D2D3-01",
            "verdict": "PASS"
          },
          {
            "id": "P-REV2-D2D3-02",
            "verdict": "PASS"
          },
          {
            "id": "P-REV2-D2D3-03",
            "verdict": "PASS"
          },
          {
            "id": "P-REV2-D2D3-04",
            "verdict": "PASS"
          }
        ]
      },
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-06",
      "family": "rev2",
      "objective": "nominal matching correlationId/lane preserved",
      "expected": "succeeded fixture path without silent rewrite dependency",
      "observed": {
        "ok": true,
        "state": "succeeded",
        "source": "fixture",
        "describe": 1,
        "complete": 1,
        "evidence": {
          "evidenceId": "evidence:d2d1:0001",
          "runId": "executionrun:d2d1:0001",
          "correlationId": "corr:nominal:match",
          "source": "fixture",
          "completeness": "complete",
          "producedAt": "2026-08-04T09:15:00.000Z",
          "summary": "[FAKE/NON-LIVE] op=complete status=ok calls=1",
          "late": false,
          "official": true
        }
      },
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-07",
      "family": "rev2",
      "objective": "late evidence assignment forms",
      "expected": "all \u2192 late_result_redacted; no leak",
      "observed": [
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        },
        {
          "summary": "late_result_redacted",
          "pass": true,
          "state": "cancelled",
          "lateRecorded": true,
          "late": true,
          "official": true,
          "source": "fixture",
          "leaked": false
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-08",
      "family": "rev2",
      "objective": "late evidence Authorization/Bearer headers",
      "expected": "all redacted; no leak",
      "observed": [
        {
          "summary": "Authorization Bearer value",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "Authorization: Bearer value",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "authorization = Bearer value",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "Bearer value",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "Authorization\tBearer\tvalue",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "aUtHoRiZaTiOn: bEaReR value",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "line1\nAuthorization: Bearer value\nline3",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-09",
      "family": "rev2",
      "objective": "late evidence structured text forms",
      "expected": "JSON/query/secret forms redacted",
      "observed": [
        {
          "summary": "\"apiKey\":\"value\"",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false,
          "late": true
        },
        {
          "summary": "{\"token\":\"value\"}",
          "pass": false,
          "summaryOut": "{\"token\":\"value\"}",
          "leaked": true,
          "late": true
        },
        {
          "summary": "?token=value",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false,
          "late": true
        },
        {
          "summary": "&token=value",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false,
          "late": true
        },
        {
          "summary": "access_token=value&x=1",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false,
          "late": true
        },
        {
          "summary": "client-secret: value",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false,
          "late": true
        }
      ],
      "verdict": "FAIL",
      "finding": "F-QA-REV2-D2D3-01"
    },
    {
      "id": "P-REV2-D2D3-10",
      "family": "rev2",
      "objective": "late evidence known secret prefixes",
      "expected": "all redacted",
      "observed": [
        {
          "summary": "sk-testvalue",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "ghp_testvalue",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "github_pat_testvalue",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "xoxb-testvalue",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "xoxp-testvalue",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "xoxa-testvalue",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "xoxr-testvalue",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "-----BEGIN PRIVATE KEY-----",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "contains private key material",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-11",
      "family": "rev2",
      "objective": "detection before truncation / position variants",
      "expected": "secret after char 240 still redacted",
      "observed": [
        {
          "name": "start",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "name": "mid",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "name": "after240",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "name": "long",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "name": "multiline",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "name": "control",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-12",
      "family": "rev2",
      "objective": "non-string and hostile late summaries",
      "expected": "non-strings \u2192 late_result_redacted when recorded; no throw",
      "observed": [
        {
          "name": "null",
          "pass": true,
          "threw": false,
          "lateRecorded": true,
          "summary": "late_result_redacted"
        },
        {
          "name": "undefined",
          "pass": true,
          "threw": false,
          "lateRecorded": false,
          "note": "undefined skips late recording (property absent semantics)"
        },
        {
          "name": "object",
          "pass": true,
          "threw": false,
          "lateRecorded": true,
          "summary": "late_result_redacted"
        },
        {
          "name": "array",
          "pass": true,
          "threw": false,
          "lateRecorded": true,
          "summary": "late_result_redacted"
        },
        {
          "name": "function",
          "pass": false,
          "threw": false,
          "lateRecorded": false
        },
        {
          "name": "symbol",
          "pass": false,
          "threw": false,
          "lateRecorded": false
        },
        {
          "name": "number",
          "pass": true,
          "threw": false,
          "lateRecorded": true,
          "summary": "late_result_redacted"
        },
        {
          "name": "bool",
          "pass": true,
          "threw": false,
          "lateRecorded": true,
          "summary": "late_result_redacted"
        }
      ],
      "verdict": "FAIL",
      "finding": "F-QA-REV2-D2D3-02"
    },
    {
      "id": "P-REV2-D2D3-13",
      "family": "rev2",
      "objective": "no leakage across run/projection/events/failure",
      "expected": "sensitive markers absent from all surfaces",
      "observed": [
        {
          "summary": "token=leak-surface-abc",
          "pass": true,
          "leaked": false,
          "summaryOut": "late_result_redacted"
        },
        {
          "summary": "apiKey=leak-surface-key",
          "pass": true,
          "leaked": false,
          "summaryOut": "late_result_redacted"
        },
        {
          "summary": "Authorization: Bearer leak-surface-xyz",
          "pass": true,
          "leaked": false,
          "summaryOut": "late_result_redacted"
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-14",
      "family": "rev2",
      "objective": "safe bounded late summary preserved",
      "expected": "non-sensitive short summary accepted; not over-redacted",
      "observed": {
        "summaryOut": "late bounded fixture result without secrets",
        "state": "cancelled",
        "late": true
      },
      "verdict": "PASS"
    },
    {
      "id": "P-CORR2-D2D3-01",
      "family": "corr2",
      "objective": "CORR2 correlation mismatch reproduction",
      "expected": "reject before provider",
      "observed": {
        "ok": true,
        "describe": 0,
        "complete": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-CORR2-D2D3-02",
      "family": "corr2",
      "objective": "CORR2 late secret variants reproduction",
      "expected": "all redacted",
      "observed": [
        {
          "s": "password=late-secret-unique-z9",
          "pass": true,
          "summary": "late_result_redacted",
          "leaked": false
        },
        {
          "s": "token=abc-unique-z9",
          "pass": true,
          "summary": "late_result_redacted",
          "leaked": false
        },
        {
          "s": "apiKey=key-unique-z9",
          "pass": true,
          "summary": "late_result_redacted",
          "leaked": false
        },
        {
          "s": "Authorization Bearer xyz-unique-z9",
          "pass": true,
          "summary": "late_result_redacted",
          "leaked": false
        },
        {
          "s": "\"apiKey\":\"val-unique-z9\"",
          "pass": true,
          "summary": "late_result_redacted",
          "leaked": false
        },
        {
          "s": "?token=tok-unique-z9",
          "pass": true,
          "summary": "late_result_redacted",
          "leaked": false
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-CORR2-NONREG",
      "family": "corr2",
      "objective": "CORR2 non-regression sample F01/F02/F09/F10",
      "expected": "all pass",
      "observed": [
        {
          "id": "F01",
          "pass": true
        },
        {
          "id": "F02",
          "pass": true
        },
        {
          "id": "F09",
          "pass": true
        },
        {
          "id": "F10",
          "pass": true
        }
      ],
      "verdict": "PASS"
    }
  ]
}
```

## 30–41. Non-régression / domaines

F01–04/06–10 : VERIFIED — CLOSURE RECOMMENDED (inspection + probes initiaux/P-REV + tests + CORR2-NONREG).
Source truthfulness / readiness / sink / projection / preflight / getters / diagnostics / timeout / path / import boundaries / isolation : couverts par suites permanentes et probes 29+15 — PASS.

## 42–49. Validations observées

| Suite | Observé |
|---|---|
| regression permanente | 61 PASS |
| targeted (3 fichiers) | 85 PASS |
| execution-run | 28 fichiers / 234 PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| full Vitest | 130 / 1280 PASS |
| governance | 73 PASS |

## 50. Scans

```
## silent_correlation_rewrite (2)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts:59:correlationId: intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts:88:correlationId: intent.correlationId,

## requestCorrelationId_validated (1)
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:563:if (requestCorrelationId !== correlationId) {

## containsSensitive (3)
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:24:export function containsSensitiveLateContent(value: string): boolean {
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:208:if (containsSensitiveLateContent(input)) {
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:216:if (containsSensitiveLateContent(bounded)) {

## FORBIDDEN_VALUE (1)
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:20:const FORBIDDEN_VALUE =

## token_json_form (0)

## availableSources (7)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:27:it("F01 — fake provider cannot be promoted to real via injected availableSources", async () => {
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:50:availableSources: ["fixture", "real", "sandbox-real"],
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:199:expect(barrel).not.toMatch(/availableSources/);
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:211:expect(src).not.toMatch(/availableSources/);
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:224:expect(src).not.toMatch(/availableSources:/);
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:64:* `availableSources` is intentionally absent — D2-D3 proves fixture only via
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:397:// Ignore any injected availableSources property — never treat it as authority.

## durable_true (1)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:181:durable: true,

## fetch (0)

## only (0)

## skip (0)

## production_ready (1)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts:120:/production-ready|RUN READY|multi-instance ready|restart-safe|Cursor verified/i,

```

Qualification : occurrences secret-like hors detector = tests adversariaux. Pas de `.only`/`.skip`/fetch. Pas de rewrite `correlationId: intent.correlationId` en prod.

## 51. Nouveaux findings

### F-QA-REV2-D2D3-01 — BLOCKER
**Scénario :** late evidence officielle accepte et persiste `{"token":"value"}` (JSON object form) alors que `"apiKey":"value"` et `token=value` sont redigés.
**Preuve :** P-REV2-D2D3-09 FAIL — summaryOut=`{"token":"value"}`, leaked=true sur run/evidence.
**Impact :** donnée secret-like dans evidence officielle (late=true, official=true, source=fixture).
**Statut :** OPEN — correction requise.

### F-QA-REV2-D2D3-02 — MINOR
**Scénario :** `lateEvidenceSummary` function/symbol fait échouer l’enveloppe untrusted (rejet input) au lieu d’enregistrer `late_result_redacted` sur un terminal cancelled.
**Preuve :** P-REV2-D2D3-12 — function/symbol : lateRecorded=false (input rejected path).
**Impact :** pas de fuite ; fail-closed alternatif ; écart au contrat annoncé.
**Statut :** OPEN (non bloquant pour PASS WITH RESERVES si seuls MINOR — mais BLOCKER ci-dessus bloque déjà).

## 52. Réserves

Héritées (OPEN NOT LIFTED) : R-QA-REV-01, R-QA-REV-02, R-QA-D2C-01, Cursor UNVERIFIED, memory process-local, R-PR-D2D2-01.
Corrections : R-CORR-D2D3-01 OPEN ; R-CORR-D2D3-02 reste OPEN (findings ciblés non tous VERIFIED).
Nouvelles : liées à F-QA-REV2-D2D3-01/02.

## 53. Claims démontrés

- rejet strict correlationId/lane mismatch avant describe/create/provider (P19, P-REV2-01…06)
- redaction late pour password/token=/apiKey=/Bearer/query/prefixes (P-REV-08, P-REV2-07/08/10/11/13)
- non-régression F01–04/06–10
- package hash stable ; D2D3-04/05 bloquées ; aucune modif projet QA

## 54. Claims non démontrés

- redaction complète de toutes formes JSON token (`{"token":"value"}`)
- late_result_redacted pour function/symbol via sanitize (rejet enveloppe à la place)
- findings F05 / F-REV-02 CLOSED/VERIFIED
- Cursor/provider live/durable/RUN READY/production-ready

## 55. Hash final

count=18
hash=`1643016668d777162dd0250ed9f61169c5c58cffaec97551571ade04af0b7917`
identique initial Corrections 2 : OUI

## 56–58. Git Truth final / absence mutation

Branche delivery ; HEAD de2800aa… ; staged vide ; branche distante projet absente ; aucun fichier projet modifié par cette QA ; aucun commit/push/PR projet.

## 59. Review Handoff

- mode publish-in-cycle
- parent attendu : `9b2d199aed9173add5de11adaaaa8d16adb1cabc`
- message : `docs(review-handoff): publish D2-D3 QA revalidation 2 status`
- (commit/blob après publication)

## 60. Verdict unique

D2-D3 CRITICAL QA REVALIDATION 2 BLOCKED —
NEW BLOCKING FINDINGS DETECTED —
MORRIS CORRECTION DECISION REQUIRED

## 61. Prochaine décision candidate

`GO CORRECTIONS SFIA STUDIO V3.1-D2-D3 — APPLY FINDINGS REMAINING / NEW`

Statut : **candidate uniquement — non consommé**

Instruction : ChatGPT doit consulter `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` au commit/blob publiés par cette QA Revalidation 2 avant toute validation, fermeture de findings ou recommandation de publication.
