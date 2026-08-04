# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Critical Corrections

## 1. Qualification

- Date/heure/fuseau : 2026-08-04 12:40:26 CEST (+0200).
- Cycle : 8 — Delivery corrective après QA.
- Profil : Critical.
- Typologie : EVOL — correction de Delivery non publiée.
- GO consommé : `GO CORRECTIONS SFIA STUDIO V3.1-D2-D3 — APPLY F-QA-D2D3-01…10` (2026-08-04 12:13 CEST).
- Gates non consommés : G-D2D-CURSOR-01, G-D2D-PERSIST-01, G-D2D-D2C-01, GO PUBLICATION, GO PR READINESS.
- CKC recherché : absent pour ce cycle.
- Fallback : handoff QA autoritatif + package Delivery local.

## 2. Sources consultées

- Handoff QA : commit `2ea275d3e6266ba409e101ba4644102b5c25493c`, blob `a669da7fdc29acaf30446516229a1fcd9cbb9243`, parent `156f68b3345f26e70009ccc2c9a3a8bf3f5169b2`.
- Titre QA : ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Independent Critical QA.
- Verdict QA : D2-D3 QA BLOCKED — BLOCKING FINDINGS REQUIRE MORRIS CORRECTION DECISION.
- 29 probes / 10 findings ; aucune correction dans la QA.

## 3. Local Git Truth Check initial

- Repository : mcleland147/sfia-workspace.
- Branche : `delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination`.
- HEAD / origin/main : `de2800aa836bb8221dc2912414126b7a3e6a1f58`.
- Upstream : aucun.
- Branche distante projet : absente.
- Staged : vide.
- Package initial : 12 fichiers ; hash `55e0819f6e8ef0887cd7306df4528d2a7f9090d4e8f8e8f20c55471abf37e0be` ; 1705/1.
- Hors package : `.tmp-sfia-review/**` uniquement.

## 4. Freeze initial

Confirmé exact avant corrections.

## 5. Matrice findings initiale → corrections

| Finding | Sévérité | Cause racine | Correction | Fichiers | Tests | Probe | Statut proposé |
|---|---|---|---|---|---|---|---|
| F-01 | BLOCKER | `availableSources` injectable | Fixture-only interne ; ignore injection ; coordinator hors barrel public | coordinate, compose, index | regression F01 | P01 | ADDRESSED — REVALIDATION REQUIRED |
| F-02 | MAJOR | readiness = 3 booléens | Artefacts liés run+projection+evidence | readiness, compose | readiness + F02 | P02 | ADDRESSED — REVALIDATION REQUIRED |
| F-03 | MAJOR | sink throw après persist | Wrapper emit fail-safe + eventDelivery | coordinate | F03 | P03-05 | ADDRESSED — REVALIDATION REQUIRED |
| F-04 | BLOCKER | projection trust TS | `unknown` + allowlist + reject | projection, untrusted | F04 | P06 | ADDRESSED — REVALIDATION REQUIRED |
| F-05 | BLOCKER | late summary brut | sanitizeLateEvidenceSummary | coordinate, untrusted | F05 | P07 | ADDRESSED — REVALIDATION REQUIRED |
| F-06 | MAJOR | describe avant validation | preflight unknown avant ports | coordinate | F06 | P08 | ADDRESSED — REVALIDATION REQUIRED |
| F-07 | MAJOR | getters hostiles | untrustedExecutionData | untrusted, coordinate | F07 | P09-10 | ADDRESSED — REVALIDATION REQUIRED |
| F-08 | MINOR | providerInvoked avant appel | Attempted/Invoked/Completed | coordinate | F08 | P16 | ADDRESSED — REVALIDATION REQUIRED |
| F-09 | MAJOR | timeout invalide engagé | Validation locale ≤60000 avant create | coordinate | F09 | P17 | ADDRESSED — REVALIDATION REQUIRED |
| F-10 | MAJOR | path %2e%2e | normalizeCanonicalPath partagé | sandbox, providerBoundary, policy | F10 + sandbox | P23 | ADDRESSED — REVALIDATION REQUIRED |

Aucun finding CLOSED / VERIFIED / LIFTED.

## 6. Plan de corrections (exécuté)

1. untrustedExecutionData 2. path normalization 3. preflight coordinator 4. source authority 5. event sink 6. late evidence 7. projection 8. readiness 9. diagnostics provider 10. tests.

## 7. API avant / après

Avant : barrel public exportait `coordinateExecutionRun` + deps avec `availableSources` ; readiness booléenne ; projection typée pass-through ; compose `project(run, proof)`.

Après : barrel public sans coordinator ; source fixture-only non injectable ; `coordinate(input: unknown)` via server ; `projectById` / `assessById` ; `createExecutionProjection(unknown)→{ok}` ; readiness artefacts liés ; diagnostics `providerAttempted|Invoked|Completed` + `eventDelivery`.

## 8. Preuves d’absence de nouvelle autorité

- Mutations uniquement via create/transition.
- compose réutilise `composeExecutionRunMemory`.
- Aucun store/runtime/repository/SDK/réseau/Server Action.
- D2D3-04/05 restent BLOCKED.
- MAX_COORDINATOR_TIMEOUT_MS = 60000 = borne locale d’implémentation, pas décision plateforme.

## 9. Fichiers créés / modifiés

Créés :
- application/untrustedExecutionData.ts
- __tests__/…/d2d3.qa-findings.regression.test.ts
(+ package Delivery D2-D3 existant conservé et étendu)

Modifiés (périmètre ≤18) : coordinate, projection, readiness, compose, index×2, sandboxContract, providerBoundary, policy, tests D2-D3 + sandbox + importBoundaries.

Package final count : **18** (maximum autorisé).

## 10. Contenu complet des fichiers du package corrigé


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
    expect(late?.summary).not.toContain("late-plain-secret");
    expect(JSON.stringify(result)).not.toContain("late-plain-secret");
  });

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

### `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`

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
    const boundary = validateUntrustedProviderRequest(
      requestCopy.value,
      correlationId,
    );
    if (!boundary.ok) {
      return { ok: false, failure: boundary.failure };
    }
    const requestObj = requestCopy.value as Record<string, unknown>;
    if (typeof requestObj.path === "string") {
      const pathFailure = validatePathField(
        requestObj.path,
        correlationId,
        context.allowlistRepos,
        context.protectedPaths,
      );
      if (pathFailure) return { ok: false, failure: pathFailure };
    }
    // Rebuild timeout from validated coordinator timeout — request timeout is not authority.
    providerRequest = {
      ...(requestCopy.value as CoordinateProviderRequest),
      timeoutMs: timeout.timeoutMs,
      correlationId,
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

### `projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts`

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

const FORBIDDEN_VALUE =
  /sk-[a-zA-Z0-9]{10,}|ghp_[A-Za-z0-9]{10,}|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|xox[baprs]-|password\s*=/i;

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
  if (typeof input !== "string") {
    return "late_result_redacted";
  }
  const redacted = redactString(input, 240);
  if (!redacted.trim() || FORBIDDEN_VALUE.test(input)) {
    // Explicit secret patterns become a canonical placeholder (no secret residue).
    if (
      /password\s*=|sk-|ghp_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|api[_-]?key/i.test(
        input,
      )
    ) {
      return "late_result_redacted";
    }
  }
  return redacted.trim() || "late_result_redacted";
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


## 11. Diff complet vs `de2800aa836bb8221dc2912414126b7a3e6a1f58`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
index 046d5ce..576338c 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
@@ -52,7 +52,7 @@ describe("D2-D1 execution-run import boundaries", () => {
     for (const file of files) {
       for (const line of importsOf(file)) {
         if (
-          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|cursor|node:|from\s+["']next|from\s+["']react/.test(
+          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|@cursor\/|node:|from\s+["']next|from\s+["']react/.test(
             line,
           )
         ) {
@@ -170,3 +170,67 @@ describe("D2-D2 execution-run provider boundary imports", () => {
     expect(barrel).not.toMatch(/materializeForServerOnly/);
   });
 });
+
+describe("D2-D3 coordination and projection boundaries", () => {
+  it("keeps application code free of Node, Next, SDK, process, and infrastructure imports", () => {
+    const files = [
+      "application/coordinateExecutionRun.ts",
+      "application/executionProjection.ts",
+      "application/executionReadiness.ts",
+      "application/untrustedExecutionData.ts",
+    ];
+    for (const relative of files) {
+      const src = fs.readFileSync(path.join(MODULE_ROOT, relative), "utf8");
+      expect(src).not.toMatch(
+        /from\s+["'](?:node:|next|openai|@octokit)|\bchild_process\b|\bprocess\.|\binfrastructure\//,
+      );
+    }
+  });
+
+  it("keeps the concrete D2-D3 composition out of the public barrel", () => {
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/composeExecutionRunD2D3/);
+    expect(barrel).not.toMatch(/composeExecutionRunProviders/);
+    expect(barrel).not.toMatch(/MemoryExecutionRunRepository/);
+    // Coordinator function must not be re-exported; timeout bound may import the module path.
+    expect(barrel).not.toMatch(
+      /export\s*\{[^}]*\bcoordinateExecutionRun\b[^}]*\}\s*from/,
+    );
+    expect(barrel).not.toMatch(/availableSources/);
+  });
+
+  it("reuses the existing single memory authority without a new store or repository", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "server/composeExecutionRunD2D3.ts"),
+      "utf8",
+    );
+    expect(src).toMatch(/composeExecutionRunMemory/);
+    expect(src).not.toMatch(/new\s+MemoryExecutionRunStore/);
+    expect(src).not.toMatch(/new\s+MemoryExecutionRunRepository/);
+    expect(src).not.toMatch(/\.save\(/);
+    expect(src).not.toMatch(/availableSources/);
+  });
+
+  it("gives the coordinator only create and transition state authority", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "application/coordinateExecutionRun.ts"),
+      "utf8",
+    );
+    expect(src).toMatch(/createExecutionRun/);
+    expect(src).toMatch(/transitionExecutionRun/);
+    expect(src).not.toMatch(/\.save\(/);
+    expect(src).not.toMatch(/Object\.assign\([^)]*run/);
+    expect(src).not.toMatch(/\brun\.state\s*=/);
+    expect(src).not.toMatch(/availableSources:/);
+  });
+
+  it("keeps projection pure and free of secret materializers and transports", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "application/executionProjection.ts"),
+      "utf8",
+    );
+    expect(src).not.toMatch(
+      /materialize|NextResponse|fetch\(|from\s+["'](?:node:|next)/i,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
index 238a4d5..0bc230b 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
@@ -67,6 +67,57 @@ describe("D2D2-08 sandbox contract fixture", () => {
     ).toBe(false);
   });

+  it("blocks percent-encoded traversal and protected paths", () => {
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/%2e%2e/.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "%2e%2e/.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "%252e%252e/.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects\\sfia-studio\\%2e%2e\\.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "%2fetc%2fpasswd",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/%00.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/%zz",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/app/lib/oa/execution-run/index.ts",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(true);
+  });
+
   it("blocks git write and arbitrary commands", () => {
     expect(
       evaluateSandboxMutationGuards({
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
index 83d3841..7655434 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
@@ -9,6 +9,7 @@ import type {
   NormalizedFailure,
   ProviderCapabilityDescriptor,
 } from "./types";
+import { normalizeCanonicalPath } from "./sandboxContract";

 export type PolicyInput = {
   readonly intent: ExecutionIntent;
@@ -51,22 +52,44 @@ export function evaluateReadOnlyPolicy(input: PolicyInput): PolicyDecision {
     };
   }

-  if (intent.targetPath && context.protectedPaths?.length) {
-    const hit = context.protectedPaths.some(
-      (p) => intent.targetPath === p || intent.targetPath!.startsWith(`${p}/`),
-    );
-    if (hit) {
+  if (intent.targetPath) {
+    const canonical = normalizeCanonicalPath(intent.targetPath);
+    if (!canonical.ok) {
       return {
         ok: false,
         failure: normalizedFailure({
           family: "protected_path",
           code: "PROTECTED_PATH",
-          userMessage: "Target path is protected",
+          userMessage: "Target path is protected or invalid",
           retryable: false,
           correlationId: cid,
         }),
       };
     }
+    if (context.protectedPaths?.length) {
+      const hit = context.protectedPaths.some((p) => {
+        const protectedCanonical = normalizeCanonicalPath(p);
+        const prefix = protectedCanonical.ok
+          ? protectedCanonical.normalized
+          : p.replace(/\\/g, "/").replace(/\/+$/, "");
+        return (
+          canonical.normalized === prefix ||
+          canonical.normalized.startsWith(`${prefix}/`)
+        );
+      });
+      if (hit) {
+        return {
+          ok: false,
+          failure: normalizedFailure({
+            family: "protected_path",
+            code: "PROTECTED_PATH",
+            userMessage: "Target path is protected",
+            retryable: false,
+            correlationId: cid,
+          }),
+        };
+      }
+    }
   }

   if (!context.permissions.gitRead && intent.requestedLane === "git") {
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
index 9b12ef9..b3ca7b7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
@@ -5,6 +5,7 @@
 import { normalizedFailure } from "./errors";
 import type { NormalizedFailure, ProviderLane } from "./types";
 import { isIsoTimestamp } from "./evidence";
+import { normalizeCanonicalPath } from "./sandboxContract";

 const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];

@@ -132,8 +133,9 @@ export function validateUntrustedProviderRequest(
     }
     if (obj.path !== undefined) {
       if (typeof obj.path !== "string") return fail("path must be string");
-      if (obj.path.includes("..") || obj.path.startsWith("/") || obj.path.includes("\\")) {
-        return fail("path traversal or absolute path forbidden");
+      const canonical = normalizeCanonicalPath(obj.path);
+      if (!canonical.ok) {
+        return fail("path traversal, encoding, or absolute path forbidden");
       }
     }
   }
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
index 4b351eb..49fc905 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
@@ -1,7 +1,11 @@
 /**
  * D2D2-08 — sandbox / protected-path contract (pure, fixture-verifiable).
  * Deny-by-default. Does not claim the sandbox is secure.
+ *
+ * Path comparisons use a shared canonical normalization that percent-decodes
+ * once in a bounded way and rejects traversal / double-encoding / controls.
  */
+
 export type SandboxPathDecision =
   | { readonly allowed: true; readonly normalized: string }
   | {
@@ -16,7 +20,23 @@ export type SandboxPathDecision =
         | "git_write"
         | "branch_mismatch"
         | "head_mismatch"
-        | "observed_missing";
+        | "observed_missing"
+        | "invalid_encoding"
+        | "control_or_null"
+        | "double_encoding";
+    };
+
+export type CanonicalPathResult =
+  | { readonly ok: true; readonly normalized: string }
+  | {
+      readonly ok: false;
+      readonly reason:
+        | "empty"
+        | "absolute"
+        | "traversal"
+        | "invalid_encoding"
+        | "control_or_null"
+        | "double_encoding";
     };

 const DEFAULT_PROTECTED = [
@@ -29,6 +49,73 @@ const DEFAULT_PROTECTED = [
   "node_modules/",
 ] as const;

+const DANGEROUS_ENCODED = /%(?:00|2e|2f|5c)/i;
+
+function decodePercentOnce(raw: string): CanonicalPathResult {
+  let out = "";
+  for (let i = 0; i < raw.length; i += 1) {
+    const ch = raw[i];
+    if (ch !== "%") {
+      const code = ch.charCodeAt(0);
+      if (code === 0 || (code < 0x20 && code !== 0x09) || code === 0x7f) {
+        return { ok: false, reason: "control_or_null" };
+      }
+      out += ch;
+      continue;
+    }
+    if (i + 2 >= raw.length) {
+      return { ok: false, reason: "invalid_encoding" };
+    }
+    const hex = raw.slice(i + 1, i + 3);
+    if (!/^[0-9A-Fa-f]{2}$/.test(hex)) {
+      return { ok: false, reason: "invalid_encoding" };
+    }
+    const code = Number.parseInt(hex, 16);
+    if (code === 0 || (code < 0x20 && code !== 0x09) || code === 0x7f) {
+      return { ok: false, reason: "control_or_null" };
+    }
+    out += String.fromCharCode(code);
+    i += 2;
+  }
+  return { ok: true, normalized: out };
+}
+
+/**
+ * Canonical path normalization shared by sandbox, provider boundary, and policy.
+ * Never normalizes a traversal into an allowlisted path.
+ */
+export function normalizeCanonicalPath(path: unknown): CanonicalPathResult {
+  if (typeof path !== "string" || !path.trim()) {
+    return { ok: false, reason: "empty" };
+  }
+  const replaced = path.trim().replace(/\\/g, "/");
+  const first = decodePercentOnce(replaced);
+  if (!first.ok) return first;
+
+  // Residual encoded path metacharacters imply double-encoding or incomplete decode.
+  if (DANGEROUS_ENCODED.test(first.normalized) || /%25(?:2e|2f|5c|00)/i.test(replaced)) {
+    return { ok: false, reason: "double_encoding" };
+  }
+  if (/%[0-9A-Fa-f]{2}/.test(first.normalized)) {
+    // Any remaining percent-encoding after one decode is rejected (fail closed).
+    return { ok: false, reason: "double_encoding" };
+  }
+
+  const raw = first.normalized;
+  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
+    return { ok: false, reason: "absolute" };
+  }
+  const parts = raw.split("/");
+  if (parts.some((p) => p === ".." || p === "")) {
+    return { ok: false, reason: "traversal" };
+  }
+  const normalized = parts.filter((p) => p !== ".").join("/");
+  if (!normalized) {
+    return { ok: false, reason: "empty" };
+  }
+  return { ok: true, normalized };
+}
+
 /** Exact match or child under prefix with segment boundary (no sibling prefix bypass). */
 export function pathMatchesAllowlistPrefix(
   normalized: string,
@@ -45,18 +132,11 @@ export function evaluateSandboxPath(input: {
   allowlistRepos: readonly string[];
   protectedPaths?: readonly string[];
 }): SandboxPathDecision {
-  if (typeof input.path !== "string" || !input.path.trim()) {
-    return { allowed: false, reason: "empty" };
-  }
-  const raw = input.path.trim().replace(/\\/g, "/");
-  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
-    return { allowed: false, reason: "absolute" };
+  const canonical = normalizeCanonicalPath(input.path);
+  if (!canonical.ok) {
+    return { allowed: false, reason: canonical.reason };
   }
-  const parts = raw.split("/");
-  if (parts.some((p) => p === ".." || p === "")) {
-    return { allowed: false, reason: "traversal" };
-  }
-  const normalized = parts.filter((p) => p !== ".").join("/");
+  const normalized = canonical.normalized;
   const protectedPaths = [
     ...DEFAULT_PROTECTED,
     ...(input.protectedPaths ?? []),
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
index a6fab28..f16739a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -94,9 +94,13 @@ export {
 export {
   evaluateSandboxMutationGuards,
   evaluateSandboxPath,
+  normalizeCanonicalPath,
   pathMatchesAllowlistPrefix,
 } from "./domain/sandboxContract";
-export type { SandboxPathDecision } from "./domain/sandboxContract";
+export type {
+  CanonicalPathResult,
+  SandboxPathDecision,
+} from "./domain/sandboxContract";
 export {
   invokeWithTimeoutAndCancellation,
   recordLateProviderResult,
@@ -106,3 +110,30 @@ export type {
   InvokeOutcome,
   RetryClass,
 } from "./application/providerInvocation";
+// Coordinator and injection deps are server-composition only (not client-safe).
+export {
+  createExecutionProjection,
+} from "./application/executionProjection";
+export type {
+  CreateExecutionProjectionResult,
+  ExecutionProjection,
+} from "./application/executionProjection";
+export {
+  assessExecutionReadiness,
+  D2D3_OPEN_RESERVES,
+} from "./application/executionReadiness";
+export type {
+  ExecutionReadinessAssessment,
+  ReadinessLevel,
+  ReadinessStatus,
+} from "./application/executionReadiness";
+export {
+  readUntrustedPlainData,
+  redactBoundedText,
+  sanitizeLateEvidenceSummary,
+} from "./application/untrustedExecutionData";
+export type {
+  UntrustedReadOptions,
+  UntrustedReadResult,
+} from "./application/untrustedExecutionData";
+export { MAX_COORDINATOR_TIMEOUT_MS } from "./application/coordinateExecutionRun";
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
index 1d967e6..485f3a2 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
@@ -12,3 +12,17 @@ export {
   composeExecutionRunProvidersFake,
   type ExecutionRunProviderComposition,
 } from "./composeExecutionRunProviders";
+export {
+  composeExecutionRunD2D3,
+  type ExecutionRunD2D3Composition,
+} from "./composeExecutionRunD2D3";
+export {
+  coordinateExecutionRun,
+  MAX_COORDINATOR_TIMEOUT_MS,
+  type CoordinateExecutionRunDependencies,
+  type CoordinateExecutionRunInput,
+  type CoordinateExecutionRunResult,
+  type CoordinateProviderRequest,
+  type ExecutionAuthority,
+  type EventDeliveryStatus,
+} from "../application/coordinateExecutionRun";

diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+describe("D2-D3 fixture coordination", () => {
+  it("coordinates AI through idle, running, succeeded and official evidence", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "bounded fixture summary" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(result.providerCompleted).toBe(true);
+    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
+    expect(result.run?.evidence).toHaveLength(1);
+    expect(result.run?.evidence?.[0]).toMatchObject({
+      official: true,
+      source: "fixture",
+      completeness: "complete",
+      late: false,
+    });
+
+    if (!result.run) return;
+    const projection = await composition.projectById(result.run.runId);
+    expect(projection.ok).toBe(true);
+    if (!projection.ok) return;
+    expect(projection.projection.state).toBe("succeeded");
+    expect(projection.projection.source).toBe("fixture");
+    expect(projection.projection.providerLane).toBe("ai");
+  });
+
+  it("coordinates a read-only Git fixture without a write surface", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const intent = {
+      ...fixture.intent,
+      intentId: "intent:d2d3:git",
+      correlationId: "corr:d2d3:git",
+      requestedLane: "git" as const,
+    };
+    const result = await composition.coordinate({
+      intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: intent.correlationId,
+        lane: "git",
+        operation: "read",
+        owner: "o",
+        repo: "r",
+        kind: "repository",
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.run?.state).toBe("succeeded");
+    expect(result.run?.disclosure.providerLane).toBe("git");
+    expect(composition.disclosure.gitWrite).toBe(false);
+  });
+
+  it("keeps Cursor fixture-only and blocked while Cursor is unverified", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const intent = {
+      ...fixture.intent,
+      intentId: "intent:d2d3:cursor",
+      correlationId: "corr:d2d3:cursor",
+      requestedLane: "cursor" as const,
+    };
+    const result = await composition.coordinate({
+      intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: intent.correlationId,
+        lane: "cursor",
+        operation: "fixture",
+        instructionSummary: "read-only fixture",
+        allowlistRepos: ["projects/sfia-studio/"],
+        protectedPaths: [".env"],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("blocked");
+    expect(result.providerInvoked).toBe(false);
+    expect(composition.disclosure.cursorVerified).toBe(false);
+  });
+
+  it("blocks lane none without invoking a provider", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        requestedLane: "none",
+        intentId: "intent:d2d3:none",
+        correlationId: "corr:d2d3:none",
+      },
+      context: fixture.context,
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("blocked");
+    expect(result.providerInvoked).toBe(false);
+    expect(result.stateTrace).toEqual(["idle", "blocked"]);
+  });
+
+  it("does not invoke providers before validation and policy acceptance", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("validation_failure");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "must not execute" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.stateTrace).toEqual([]);
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  getFixture,
+  isIsoTimestamp,
+  normalizedFailure,
+  type AiExecutionPort,
+} from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3,
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+} from "@/lib/oa/execution-run/server";
+
+describe("D2-D3 evidence truthfulness", () => {
+  it("keeps run, official evidence, and projection source on fixture", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "truthful fixture input" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    if (!result.run) throw new Error("expected run");
+    const evidence = result.run.evidence?.[0];
+    const projection = await composition.projectById(result.run.runId);
+    expect(projection.ok).toBe(true);
+    if (!projection.ok) return;
+
+    expect(result.run.disclosure.source).toBe("fixture");
+    expect(evidence?.source).toBe("fixture");
+    expect(projection.projection.source).toBe("fixture");
+    expect(evidence?.official).toBe(true);
+    expect(evidence?.completeness).toBe("complete");
+    expect(isIsoTimestamp(evidence?.producedAt ?? "")).toBe(true);
+    expect(evidence?.evidenceId.length).toBeLessThan(128);
+    expect(evidence).not.toHaveProperty("rawResult");
+  });
+
+  it.each(["sandbox-real", "real"] as const)(
+    "blocks requested source %s without fallback or provider invocation",
+    async (source) => {
+      const composition = composeExecutionRunD2D3();
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          intentId: `intent:d2d3:${source}`,
+          correlationId: `corr:d2d3:${source}`,
+          requestedSource: source,
+        },
+        context: { ...fixture.context, declaredSource: source },
+        providerRequest: {
+          correlationId: `corr:d2d3:${source}`,
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "must not run" }],
+          timeoutMs: 100,
+        },
+        timeoutMs: 100,
+      });
+
+      expect(result.ok).toBe(false);
+      expect(result.run).toBeUndefined();
+      expect(result.providerInvoked).toBe(false);
+      expect(result.stateTrace).toEqual([]);
+      if (result.ok) throw new Error("expected failure");
+      expect(result.failure.code).toBe("SOURCE_MISMATCH");
+    },
+  );
+
+  it("records late evidence without changing a cancelled terminal", async () => {
+    const base = composeExecutionRunProvidersFake();
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async (request) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "Cancelled fixture operation",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      }),
+    };
+    const providers = composeExecutionRunProviders({ ...base, ai });
+    const composition = composeExecutionRunD2D3({ providers });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "cancel fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+      lateEvidenceSummary: "late bounded result",
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("cancelled");
+    expect(result.lateEvidenceRecorded).toBe(true);
+    expect(result.run?.evidence?.at(-1)).toMatchObject({
+      source: "fixture",
+      late: true,
+      official: true,
+    });
+  });
+
+  it("marks usage unavailable unless provider usage validates", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "usage fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.validatedUsage.status).toBe("validated");
+    expect(result.run?.usage.status).toBe("unavailable");
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  getFixture,
+  normalizedFailure,
+  type AiExecutionPort,
+  type FailureCode,
+  type FailureFamily,
+  type ProviderInvocationResult,
+} from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3,
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+} from "@/lib/oa/execution-run/server";
+
+function failureResult(
+  family: FailureFamily,
+  code: FailureCode,
+  correlationId: string,
+): ProviderInvocationResult {
+  return {
+    kind: "failure",
+    failure: normalizedFailure({
+      family,
+      code,
+      userMessage: `Bounded ${family} fixture failure`,
+      retryable: false,
+      correlationId,
+    }),
+  };
+}
+
+async function runWithAiResult(
+  makeResult: (correlationId: string) => ProviderInvocationResult,
+  options?: { lateEvidenceSummary?: string },
+) {
+  const base = composeExecutionRunProvidersFake();
+  let calls = 0;
+  let receivedKeys: string[] = [];
+  const ai: AiExecutionPort = {
+    lane: "ai",
+    describeCapability: () => base.ai.describeCapability(),
+    complete: async (request) => {
+      calls += 1;
+      receivedKeys = Object.keys(request);
+      return makeResult(request.correlationId);
+    },
+  };
+  const providers = composeExecutionRunProviders({ ...base, ai });
+  const composition = composeExecutionRunD2D3({ providers });
+  const fixture = getFixture("nominal");
+  const result = await composition.coordinate({
+    intent: fixture.intent,
+    context: fixture.context,
+    providerRequest: {
+      correlationId: fixture.intent.correlationId,
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "deterministic fixture" }],
+      timeoutMs: 100,
+    },
+    timeoutMs: 100,
+    ...options,
+  });
+  return { result, calls, receivedKeys };
+}
+
+describe("D2-D3 deterministic negative and resilience scenarios", () => {
+  it.each([
+    ["authentication", "AUTHENTICATION_ERROR"],
+    ["authorization", "AUTHORIZATION_ERROR"],
+    ["provider_unavailable", "PROVIDER_UNAVAILABLE"],
+    ["rate_limited", "RATE_LIMITED"],
+  ] as const)(
+    "normalizes %s failure to the exact failed terminal",
+    async (family, code) => {
+      const { result, calls } = await runWithAiResult((correlationId) =>
+        failureResult(family, code, correlationId),
+      );
+      expect(calls).toBe(1);
+      expect(result.run?.state).toBe("failed");
+      if (result.ok) throw new Error("expected failed result");
+      expect(result.failure).toMatchObject({ family, code });
+      expect(result.run?.evidence).toBeUndefined();
+      expect(result.run?.disclosure.source).toBe("fixture");
+    },
+  );
+
+  it("maps provider timeout to timed_out", async () => {
+    const { result } = await runWithAiResult((correlationId) => ({
+      kind: "timed_out",
+      failure: normalizedFailure({
+        family: "timed_out",
+        code: "TIMED_OUT",
+        userMessage: "Bounded timeout",
+        retryable: true,
+        correlationId,
+      }),
+    }));
+    expect(result.run?.state).toBe("timed_out");
+    if (result.ok) throw new Error("expected timed-out result");
+    expect(result.failure.code).toBe("TIMED_OUT");
+  });
+
+  it("maps provider cancellation to cancelled and preserves it after late evidence", async () => {
+    const { result } = await runWithAiResult(
+      (correlationId) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "Bounded cancellation",
+          retryable: false,
+          correlationId,
+        }),
+      }),
+      { lateEvidenceSummary: "late redacted fixture result" },
+    );
+    expect(result.run?.state).toBe("cancelled");
+    if (result.ok) throw new Error("expected cancelled result");
+    expect(result.failure.code).toBe("CANCELLED");
+    expect(result.run?.evidence?.at(-1)?.late).toBe(true);
+  });
+
+  it("fails partial provider success and preserves explicit partiality", async () => {
+    const { result } = await runWithAiResult(() => ({
+      kind: "success",
+      completeness: "partial",
+      redactedSummary: "bounded partial result",
+      rawPresent: false,
+      usage: { status: "unavailable", reason: "partial" },
+      disclosureNotes: ["fixture"],
+    }));
+    expect(result.run?.state).toBe("failed");
+    if (result.ok) throw new Error("expected partial failure");
+    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
+    expect(result.run?.externalResult).toMatchObject({
+      kind: "success",
+      completeness: "partial",
+    });
+    expect(result.run?.state).not.toBe("succeeded");
+  });
+
+  it("rejects an invalid provider result without leaking raw content", async () => {
+    const { result } = await runWithAiResult(
+      () =>
+        ({
+          kind: "success",
+          completeness: "complete",
+          redactedSummary: "password=do-not-leak",
+          rawPresent: true,
+          usage: { status: "unavailable", reason: "invalid" },
+          disclosureNotes: [],
+        }) as ProviderInvocationResult,
+    );
+    expect(result.run?.state).toBe("failed");
+    if (result.ok) throw new Error("expected invalid provider failure");
+    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
+    expect(JSON.stringify(result.run)).not.toContain("do-not-leak");
+  });
+
+  it.each([
+    ["validation_failure", "VALIDATION_ERROR"],
+    ["blocked_gate", "HUMAN_GATE_REQUIRED"],
+    ["protected_path", "PROTECTED_PATH"],
+    ["mutation_forbidden", "MUTATION_FORBIDDEN"],
+    ["source_mismatch", "SOURCE_MISMATCH"],
+  ] as const)("blocks %s before provider invocation", async (scenario, code) => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture(scenario);
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest:
+        fixture.intent.requestedLane === "ai"
+          ? {
+              correlationId: fixture.intent.correlationId,
+              lane: "ai",
+              operation: "complete",
+              messages: [{ role: "user", content: "must not execute" }],
+              timeoutMs: 100,
+            }
+          : undefined,
+      timeoutMs: 100,
+    });
+    expect(result.ok).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    if (result.ok) throw new Error("expected pre-engagement block");
+    expect(result.failure.code).toBe(code);
+    if (result.run) {
+      expect(result.run.state).toBe("blocked");
+      expect(result.run.evidence).toBeUndefined();
+      expect(result.run.disclosure.source).toBe(
+        fixture.context.declaredSource,
+      );
+    }
+  });
+
+  it("blocks a sensitive provider request at the boundary and redacts output", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const sensitive = "fixture-sensitive-value";
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "safe" }],
+        timeoutMs: 100,
+        apiKey: sensitive,
+      } as never,
+      timeoutMs: 100,
+    });
+    expect(result.ok).toBe(false);
+    expect(result.run).toBeUndefined();
+    expect(result.providerInvoked).toBe(false);
+    expect(JSON.stringify(result)).not.toContain(sensitive);
+    if (result.ok) throw new Error("expected failure");
+    expect(result.failure.code).toBe("VALIDATION_ERROR");
+  });
+
+  it("gives providers no run, repository, save, or transition authority", async () => {
+    const { result, receivedKeys } = await runWithAiResult(() => ({
+      kind: "success",
+      completeness: "complete",
+      redactedSummary: "bounded complete fixture",
+      rawPresent: false,
+      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
+      disclosureNotes: ["fixture"],
+    }));
+    expect(result.run?.state).toBe("succeeded");
+    expect(receivedKeys).not.toEqual(
+      expect.arrayContaining([
+        "executionRun",
+        "repository",
+        "save",
+        "transitionExecutionRun",
+      ]),
+    );
+    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+async function succeededProjection() {
+  const composition = composeExecutionRunD2D3();
+  const fixture = getFixture("nominal");
+  const coordinated = await composition.coordinate({
+    intent: fixture.intent,
+    context: fixture.context,
+    providerRequest: {
+      correlationId: fixture.intent.correlationId,
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "fixture-only input" }],
+      timeoutMs: 100,
+    },
+    timeoutMs: 100,
+  });
+  if (!coordinated.run) throw new Error("expected run");
+  const projection = await composition.projectById(coordinated.run.runId);
+  if (!projection.ok) throw new Error(projection.failure.message);
+  return projection.projection;
+}
+
+describe("D2-D3 provider-independent projection", () => {
+  it("projects the bounded transport-neutral shape and disclosures", async () => {
+    const projection = await succeededProjection();
+
+    expect(projection).toMatchObject({
+      state: "succeeded",
+      source: "fixture",
+      providerLane: "ai",
+      phase: "terminal",
+      completeness: "complete",
+      cursorUnverified: true,
+      gitWrite: false,
+      persistence: {
+        kind: "memory_process_local",
+        durable: false,
+        multiInstance: false,
+        restartSafe: false,
+      },
+    });
+    expect(projection.evidenceSummary[0]).toMatchObject({
+      official: true,
+      source: "fixture",
+      late: false,
+    });
+    expect(projection.readinessAssessment.uiDelivery.status).toBe(
+      "not_demonstrated",
+    );
+    expect(projection.readinessAssessment.strongRuntimeVerdict.status).toBe(
+      "blocked",
+    );
+  });
+
+  it("contains no executable, SDK, adapter, command, signal, or raw surface", async () => {
+    const projection = await succeededProjection();
+    const seenKeys: string[] = [];
+    const visit = (value: unknown): void => {
+      if (!value || typeof value !== "object") {
+        expect(typeof value).not.toBe("function");
+        return;
+      }
+      for (const [key, nested] of Object.entries(value)) {
+        seenKeys.push(key);
+        expect(typeof nested).not.toBe("function");
+        visit(nested);
+      }
+    };
+    visit(projection);
+
+    expect(seenKeys).not.toEqual(
+      expect.arrayContaining([
+        "sdk",
+        "adapter",
+        "command",
+        "signal",
+        "abortSignal",
+        "rawPrompt",
+        "rawResponse",
+        "rawError",
+        "secret",
+      ]),
+    );
+    expect(JSON.stringify(projection)).not.toMatch(
+      /fixture-only input|AbortSignal|executeFixture|complete\(/,
+    );
+  });
+
+  it("is JSON serializable and exposes no Git write capability", async () => {
+    const projection = await succeededProjection();
+    expect(() => JSON.stringify(projection)).not.toThrow();
+    expect(JSON.parse(JSON.stringify(projection))).toEqual(projection);
+    expect(Object.keys(projection)).not.toContain("gitWriteCommand");
+    expect(projection.gitWrite).toBe(false);
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts
+/**
+ * @vitest-environment node
+ *
+ * Permanent regression matrix for F-QA-D2D3-01…10.
+ * Findings remain OPEN until Critical QA revalidation — these tests prove
+ * technical addressing only.
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assessExecutionReadiness,
+  createExecutionProjection,
+  getFixture,
+  MAX_COORDINATOR_TIMEOUT_MS,
+  normalizedFailure,
+  type AiExecutionPort,
+  type ProviderInvocationResult,
+} from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3,
+  composeExecutionRunMemory,
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+  coordinateExecutionRun,
+} from "@/lib/oa/execution-run/server";
+
+describe("F-QA-D2D3 permanent regression matrix", () => {
+  it("F01 — fake provider cannot be promoted to real via injected availableSources", async () => {
+    const core = composeExecutionRunMemory({
+      clockIso: "2026-08-04T10:00:00.000Z",
+    });
+    const providers = composeExecutionRunProvidersFake();
+    const fixture = getFixture("nominal");
+    const result = await coordinateExecutionRun(
+      {
+        intent: {
+          ...fixture.intent,
+          correlationId: "corr:f01",
+          intentId: "intent:f01",
+          requestedSource: "real",
+        },
+        context: { ...fixture.context, declaredSource: "real" },
+        providerRequest: {
+          correlationId: "corr:f01",
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "must not run" }],
+          timeoutMs: 50,
+        },
+        timeoutMs: 50,
+        availableSources: ["fixture", "real", "sandbox-real"],
+      },
+      {
+        execution: core,
+        providers,
+        events: providers.events,
+        clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
+      },
+    );
+
+    expect(result.ok).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.run).toBeUndefined();
+    if (result.ok) throw new Error("expected failure");
+    expect(result.failure.code).toBe("SOURCE_MISMATCH");
+    expect(JSON.stringify(result)).not.toMatch(/"source":"real"/);
+  });
+
+  it("F02 — UX readiness cannot become demonstrated from boolean-only proofs", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+    expect(assessment.uxExploration.status).toBe("not_demonstrated");
+    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
+    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
+  });
+
+  it.each([1, 2, 4] as const)(
+    "F03 — sink throw at event %s continues workflow without raw error",
+    async (throwAt) => {
+      const core = composeExecutionRunMemory({
+        clockIso: "2026-08-04T10:00:00.000Z",
+      });
+      const providers = composeExecutionRunProvidersFake();
+      let eventCount = 0;
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => providers.ai.describeCapability(),
+        complete: async (request) => providers.ai.complete(request),
+      };
+      const throwing = composeExecutionRunProviders({
+        ...providers,
+        ai,
+        events: {
+          emit: () => {
+            eventCount += 1;
+            if (eventCount === throwAt) {
+              throw new Error(`sink_raw_${throwAt}`);
+            }
+          },
+        },
+      });
+      const fixture = getFixture("nominal");
+      let rawError = "";
+      let result;
+      try {
+        result = await coordinateExecutionRun(
+          {
+            intent: {
+              ...fixture.intent,
+              correlationId: `corr:f03:${throwAt}`,
+              intentId: `intent:f03:${throwAt}`,
+            },
+            context: fixture.context,
+            providerRequest: {
+              correlationId: `corr:f03:${throwAt}`,
+              lane: "ai",
+              operation: "complete",
+              messages: [{ role: "user", content: "sink" }],
+              timeoutMs: 50,
+            },
+            timeoutMs: 50,
+          },
+          {
+            execution: core,
+            providers: throwing,
+            events: throwing.events,
+            clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
+          },
+        );
+      } catch (error) {
+        rawError = error instanceof Error ? error.message : String(error);
+      }
+
+      expect(rawError).toBe("");
+      expect(result).toBeDefined();
+      const stored = await core.listByCorrelationId(`corr:f03:${throwAt}`);
+      expect(stored.at(-1)?.state).toBe(result!.run?.state);
+      expect(result!.run?.state).toBe("succeeded");
+      expect(result!.ok).toBe(true);
+      expect(result!.eventDelivery.status).toBe("degraded");
+      expect(result!.eventDelivery.failureCount).toBeGreaterThan(0);
+      expect(JSON.stringify(result)).not.toContain(`sink_raw_${throwAt}`);
+    },
+  );
+
+  it("F04 — malicious projection rejects secrets, functions, and claim promotion", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const coordinated = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "proj" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+    expect(coordinated.run?.state).toBe("succeeded");
+    const injectedFunction = () => "executable";
+    const malicious = {
+      run: {
+        ...coordinated.run,
+        externalResult: {
+          kind: "success",
+          completeness: "complete",
+          redactedSummary: "password=projection-plain-secret",
+          rawPresent: false,
+        },
+        blockedReason: "apiKey=projection-key",
+        disclosure: {
+          ...coordinated.run!.disclosure,
+          limits: [injectedFunction],
+        },
+        persistence: {
+          kind: "memory_process_local",
+          durable: true,
+          multiInstance: true,
+          restartSafe: true,
+        },
+        evidence: [
+          {
+            ...coordinated.run!.evidence![0],
+            source: "real",
+            official: false,
+          },
+        ],
+      },
+      openReserves: ["password=reserve-plain-secret"],
+    };
+    const projection = createExecutionProjection(malicious);
+    expect(projection.ok).toBe(false);
+    if (projection.ok) throw new Error("expected rejection");
+    expect(JSON.stringify(projection)).not.toContain("projection-plain-secret");
+    expect(JSON.stringify(projection)).not.toContain("reserve-plain-secret");
+  });
+
+  it("F05 — sensitive late evidence is redacted before persistence", async () => {
+    const base = composeExecutionRunProvidersFake();
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async (request) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "cancelled",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      }),
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({ ...base, ai }),
+    });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        correlationId: "corr:f05",
+        intentId: "intent:f05",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: "corr:f05",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "late" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+      lateEvidenceSummary: "password=late-plain-secret",
+    });
+
+    expect(result.run?.state).toBe("cancelled");
+    expect(result.lateEvidenceRecorded).toBe(true);
+    const late = result.run?.evidence?.at(-1);
+    expect(late).toMatchObject({
+      late: true,
+      official: true,
+      source: "fixture",
+    });
+    expect(late?.summary).not.toContain("late-plain-secret");
+    expect(JSON.stringify(result)).not.toContain("late-plain-secret");
+  });
+
+  it("F06 — invalid intent yields zero describeCapability and zero provider calls", async () => {
+    const base = composeExecutionRunProvidersFake();
+    let describeCalls = 0;
+    let completeCalls = 0;
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => {
+        describeCalls += 1;
+        return base.ai.describeCapability();
+      },
+      complete: async (request) => {
+        completeCalls += 1;
+        return base.ai.complete(request);
+      },
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({ ...base, ai }),
+    });
+    const fixture = getFixture("validation_failure");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "must not run" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(describeCalls).toBe(0);
+    expect(completeCalls).toBe(0);
+    expect(result.run).toBeUndefined();
+    expect(result.providerInvoked).toBe(false);
+  });
+
+  it("F07 — hostile request getter is rejected before run creation", async () => {
+    const core = composeExecutionRunMemory({
+      clockIso: "2026-08-04T10:00:00.000Z",
+    });
+    const providers = composeExecutionRunProvidersFake();
+    const fixture = getFixture("nominal");
+    const hostile = Object.create(null);
+    Object.defineProperty(hostile, "lane", {
+      enumerable: true,
+      get() {
+        throw new Error("hostile_request_getter");
+      },
+    });
+    let rawError = "";
+    let result;
+    try {
+      result = await coordinateExecutionRun(
+        {
+          intent: {
+            ...fixture.intent,
+            correlationId: "corr:f07-req",
+            intentId: "intent:f07-req",
+          },
+          context: fixture.context,
+          providerRequest: hostile,
+          timeoutMs: 50,
+        },
+        {
+          execution: core,
+          providers,
+          events: providers.events,
+          clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
+        },
+      );
+    } catch (error) {
+      rawError = error instanceof Error ? error.message : String(error);
+    }
+    const stored = await core.listByCorrelationId("corr:f07-req");
+    expect(rawError).toBe("");
+    expect(result?.ok).toBe(false);
+    expect(result?.providerInvoked).toBe(false);
+    expect(stored).toEqual([]);
+  });
+
+  it("F07 — hostile result getter yields failed terminal without orphan running", async () => {
+    const base = composeExecutionRunProvidersFake();
+    const hostileResult = Object.create(null);
+    Object.defineProperty(hostileResult, "kind", {
+      enumerable: true,
+      get() {
+        throw new Error("hostile_result_getter");
+      },
+    });
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async () =>
+        hostileResult as unknown as ProviderInvocationResult,
+    };
+    const core = composeExecutionRunMemory({
+      clockIso: "2026-08-04T10:00:00.000Z",
+    });
+    const providers = composeExecutionRunProviders({ ...base, ai });
+    const fixture = getFixture("nominal");
+    let rawError = "";
+    let result;
+    try {
+      result = await coordinateExecutionRun(
+        {
+          intent: {
+            ...fixture.intent,
+            correlationId: "corr:f07-res",
+            intentId: "intent:f07-res",
+          },
+          context: fixture.context,
+          providerRequest: {
+            correlationId: "corr:f07-res",
+            lane: "ai",
+            operation: "complete",
+            messages: [{ role: "user", content: "hostile" }],
+            timeoutMs: 50,
+          },
+          timeoutMs: 50,
+        },
+        {
+          execution: core,
+          providers,
+          events: providers.events,
+          clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
+        },
+      );
+    } catch (error) {
+      rawError = error instanceof Error ? error.message : String(error);
+    }
+    const stored = await core.listByCorrelationId("corr:f07-res");
+    expect(rawError).toBe("");
+    expect(result?.run?.state).toBe("failed");
+    expect(stored.at(-1)?.state).toBe("failed");
+    expect(stored.at(-1)?.state).not.toBe("running");
+    expect(JSON.stringify(result)).not.toContain("hostile_result_getter");
+  });
+
+  it("F08 — pre-cancellation reports providerInvoked=false with zero calls", async () => {
+    const base = composeExecutionRunProvidersFake();
+    let calls = 0;
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async (request) => {
+        calls += 1;
+        return base.ai.complete(request);
+      },
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({ ...base, ai }),
+    });
+    const fixture = getFixture("nominal");
+    const controller = new AbortController();
+    controller.abort();
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        correlationId: "corr:f08",
+        intentId: "intent:f08",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: "corr:f08",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "cancel" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+      signal: controller.signal,
+    });
+
+    expect(result.run?.state).toBe("cancelled");
+    expect(calls).toBe(0);
+    expect(result.providerAttempted).toBe(true);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.providerCompleted).toBe(false);
+  });
+
+  it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY, 1.5, MAX_COORDINATOR_TIMEOUT_MS + 1])(
+    "F09 — invalid timeout %s creates no run and invokes nothing",
+    async (timeoutMs) => {
+      const base = composeExecutionRunProvidersFake();
+      let describeCalls = 0;
+      let completeCalls = 0;
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => {
+          describeCalls += 1;
+          return base.ai.describeCapability();
+        },
+        complete: async (request) => {
+          completeCalls += 1;
+          return base.ai.complete(request);
+        },
+      };
+      const composition = composeExecutionRunD2D3({
+        providers: composeExecutionRunProviders({ ...base, ai }),
+      });
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          correlationId: `corr:f09:${String(timeoutMs)}`,
+          intentId: `intent:f09:${String(timeoutMs)}`,
+        },
+        context: fixture.context,
+        providerRequest: {
+          correlationId: `corr:f09:${String(timeoutMs)}`,
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "timeout" }],
+          timeoutMs: 50,
+        },
+        timeoutMs,
+      });
+      expect(result.ok).toBe(false);
+      expect(result.run).toBeUndefined();
+      expect(result.providerInvoked).toBe(false);
+      expect(describeCalls).toBe(0);
+      expect(completeCalls).toBe(0);
+      if (result.ok) throw new Error("expected failure");
+      expect(result.failure.code).toBe("VALIDATION_ERROR");
+    },
+  );
+
+  it("F09 — valid timeout still succeeds", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        correlationId: "corr:f09:ok",
+        intentId: "intent:f09:ok",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: "corr:f09:ok",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "ok" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+    expect(result.ok).toBe(true);
+    expect(result.run?.state).toBe("succeeded");
+  });
+
+  it.each([
+    "projects/sfia-studio/%2e%2e/.env",
+    "%2e%2e/.env",
+    "%252e%252e/.env",
+    "projects\\sfia-studio\\%2e%2e\\.env",
+    "%2fetc%2fpasswd",
+    "projects/sfia-studio/%00.env",
+    "projects/sfia-studio/%zz",
+  ])("F10 — encoded hostile path %s is blocked before provider", async (path) => {
+    const base = composeExecutionRunProvidersFake();
+    let calls = 0;
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({
+        ...base,
+        git: {
+          ...base.git,
+          read: async (request) => {
+            calls += 1;
+            return base.git.read(request);
+          },
+        },
+      }),
+    });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        intentId: `intent:f10:${path}`,
+        correlationId: `corr:f10:${path}`,
+        requestedLane: "git",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: `corr:f10:${path}`,
+        lane: "git",
+        operation: "read",
+        owner: "o",
+        repo: "r",
+        kind: "path_meta",
+        path,
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+    expect(result.ok).toBe(false);
+    expect(calls).toBe(0);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.run?.evidence).toBeUndefined();
+    expect(result.run?.state === "succeeded").toBe(false);
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assessExecutionReadiness,
+  D2D3_OPEN_RESERVES,
+  getFixture,
+} from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+describe("D2-D3 bounded readiness assessment", () => {
+  it("rejects boolean-only proofs as not demonstrated", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+    expect(assessment.uxExploration.status).toBe("not_demonstrated");
+  });
+
+  it("demonstrates UX exploration only with linked run, projection, and evidence", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "readiness fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    expect(result.run?.state).toBe("succeeded");
+    const assessment = await composition.assessById(result.run!.runId);
+    expect(assessment.uxExploration.status).toBe("demonstrated");
+  });
+
+  it("keeps UI delivery not demonstrated and strong runtime blocked", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "bounded" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    const assessment = await composition.assessById(result.run!.runId);
+
+    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
+    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
+    expect(assessment.strongRuntimeVerdict.reasons).toEqual([
+      "G-D2D-CURSOR-01 not consumed",
+      "G-D2D-PERSIST-01 not consumed",
+      "Cursor unverified",
+      "memory is process-local",
+      "no live provider proof",
+    ]);
+  });
+
+  it("carries every inherited reserve without lifting it", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "reserves" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    const assessment = await composition.assessById(result.run!.runId);
+
+    expect(assessment.openReserves).toEqual(D2D3_OPEN_RESERVES);
+    expect(assessment.openReserves).toHaveLength(6);
+  });
+
+  it("uses only the three bounded statuses and makes no excessive claim", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "status" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    const assessment = await composition.assessById(result.run!.runId);
+    const statuses = [
+      assessment.uxExploration.status,
+      assessment.uiDelivery.status,
+      assessment.strongRuntimeVerdict.status,
+    ];
+    const serialized = JSON.stringify(assessment);
+
+    expect(statuses).toEqual([
+      "demonstrated",
+      "not_demonstrated",
+      "blocked",
+    ]);
+    expect(serialized).not.toMatch(
+      /production-ready|RUN READY|multi-instance ready|restart-safe|Cursor verified/i,
+    );
+  });
+});

diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
+import { normalizedFailure } from "../domain/errors";
+import {
+  validateUntrustedProviderRequest,
+  validateUntrustedProviderResult,
+} from "../domain/providerBoundary";
+import { evaluateSandboxPath } from "../domain/sandboxContract";
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  ExecutionRun,
+  ExecutionSource,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+  ProviderLane,
+  UsageSummary,
+} from "../domain/types";
+import type { ClockPort } from "../ports/clockPort";
+import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
+import type {
+  ExecutionEvent,
+  ExecutionEventSinkPort,
+} from "../ports/executionEventSinkPort";
+import type { GitReadPort } from "../ports/gitReadPort";
+import type { AiExecutionPort } from "../ports/aiExecutionPort";
+import type {
+  AiCompletionRequest,
+  CursorFixtureRequest,
+  GitReadRequest,
+  ProviderInvocationResult,
+} from "../ports/providerResult";
+import {
+  invokeWithTimeoutAndCancellation,
+  type InvokeOutcome,
+} from "./providerInvocation";
+import type { CreateExecutionRunResult } from "./createExecutionRun";
+import type { TransitionExecutionRunResult } from "./transitionExecutionRun";
+import {
+  readUntrustedPlainData,
+  sanitizeLateEvidenceSummary,
+} from "./untrustedExecutionData";
+
+/**
+ * Local D2-D3 implementation bound only.
+ * Not a platform-wide timeout decision; future extension requires a dedicated cycle.
+ */
+export const MAX_COORDINATOR_TIMEOUT_MS = 60_000;
+
+export type CoordinateProviderRequest =
+  | AiCompletionRequest
+  | GitReadRequest
+  | CursorFixtureRequest;
+
+export type ExecutionAuthority = {
+  readonly createExecutionRun: (
+    input: unknown,
+  ) => Promise<CreateExecutionRunResult>;
+  readonly transitionExecutionRun: (
+    input: unknown,
+  ) => Promise<TransitionExecutionRunResult>;
+};
+
+/**
+ * Injection surface for the coordinator.
+ * `availableSources` is intentionally absent — D2-D3 proves fixture only via
+ * internal preflight, never via caller-supplied source authority.
+ */
+export type CoordinateExecutionRunDependencies = {
+  readonly execution: ExecutionAuthority;
+  readonly providers: {
+    readonly ai: AiExecutionPort;
+    readonly git: GitReadPort;
+    readonly cursor: CursorExecutionPort;
+  };
+  readonly events: ExecutionEventSinkPort;
+  readonly clock: ClockPort;
+};
+
+export type CoordinateExecutionRunInput = {
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly providerRequest?: CoordinateProviderRequest;
+  readonly timeoutMs: number;
+  readonly signal?: AbortSignal;
+  /** Deterministic evidence-only simulation after a failed/cancelled/timed-out terminal. */
+  readonly lateEvidenceSummary?: string;
+};
+
+export type EventDeliveryStatus = "complete" | "degraded";
+
+export type CoordinateExecutionRunResult =
+  | {
+      readonly ok: true;
+      readonly run: ExecutionRun;
+      readonly providerAttempted: boolean;
+      readonly providerInvoked: boolean;
+      readonly providerCompleted: boolean;
+      readonly stateTrace: readonly ExecutionRun["state"][];
+      readonly validatedUsage: UsageSummary;
+      readonly lateEvidenceRecorded: boolean;
+      readonly eventDelivery: {
+        readonly status: EventDeliveryStatus;
+        readonly failureCount: number;
+      };
+    }
+  | {
+      readonly ok: false;
+      readonly failure: NormalizedFailure;
+      readonly run?: ExecutionRun;
+      readonly providerAttempted: boolean;
+      readonly providerInvoked: boolean;
+      readonly providerCompleted: boolean;
+      readonly stateTrace: readonly ExecutionRun["state"][];
+      readonly validatedUsage: UsageSummary;
+      readonly lateEvidenceRecorded: boolean;
+      readonly eventDelivery: {
+        readonly status: EventDeliveryStatus;
+        readonly failureCount: number;
+      };
+    };
+
+type PreflightOk = {
+  readonly ok: true;
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly providerRequest: CoordinateProviderRequest | undefined;
+  readonly timeoutMs: number;
+  readonly signal: AbortSignal | undefined;
+  readonly lateEvidenceSummary: unknown;
+  readonly correlationId: string;
+};
+
+type PreflightFail = {
+  readonly ok: false;
+  readonly failure: NormalizedFailure;
+};
+
+type EventTracker = {
+  failureCount: number;
+};
+
+const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];
+const ALLOWED_SOURCES: readonly ExecutionSource[] = [
+  "fixture",
+  "sandbox-real",
+  "real",
+];
+
+function unavailableUsage(reason: string): UsageSummary {
+  return { status: "unavailable", reason };
+}
+
+function validatedUsage(input: unknown): UsageSummary {
+  if (!input || typeof input !== "object") {
+    return unavailableUsage("provider_usage_unavailable");
+  }
+  const usage = input as Record<string, unknown>;
+  if (usage.status !== "validated") {
+    return unavailableUsage("provider_usage_unavailable");
+  }
+  for (const key of ["inputTokens", "outputTokens"] as const) {
+    const value = usage[key];
+    if (
+      value !== undefined &&
+      (typeof value !== "number" || !Number.isFinite(value) || value < 0)
+    ) {
+      return unavailableUsage("provider_usage_invalid");
+    }
+  }
+  if (usage.unit !== undefined && typeof usage.unit !== "string") {
+    return unavailableUsage("provider_usage_invalid");
+  }
+  return {
+    status: "validated",
+    inputTokens: usage.inputTokens as number | undefined,
+    outputTokens: usage.outputTokens as number | undefined,
+    unit: usage.unit as string | undefined,
+  };
+}
+
+function invalidProviderFailure(correlationId: string): NormalizedFailure {
+  return normalizedFailure({
+    family: "invalid_provider_result",
+    code: "INVALID_PROVIDER_RESULT",
+    userMessage: "Provider returned an invalid or incomplete result",
+    retryable: false,
+    correlationId,
+  });
+}
+
+function validationFailure(
+  correlationId: string,
+  userMessage: string,
+): NormalizedFailure {
+  return normalizedFailure({
+    family: "validation",
+    code: "VALIDATION_ERROR",
+    userMessage,
+    retryable: false,
+    correlationId,
+  });
+}
+
+function emptyDiagnostics(tracker: EventTracker) {
+  return {
+    providerAttempted: false,
+    providerInvoked: false,
+    providerCompleted: false,
+    stateTrace: [] as ExecutionRun["state"][],
+    validatedUsage: unavailableUsage("not_validated"),
+    lateEvidenceRecorded: false,
+    eventDelivery: {
+      status: (tracker.failureCount > 0
+        ? "degraded"
+        : "complete") as EventDeliveryStatus,
+      failureCount: tracker.failureCount,
+    },
+  };
+}
+
+function safeEmit(
+  deps: CoordinateExecutionRunDependencies,
+  tracker: EventTracker,
+  run: ExecutionRun,
+  event: Pick<ExecutionEvent, "type" | "detail">,
+): void {
+  try {
+    const result = deps.events.emit({
+      ...event,
+      correlationId: run.correlationId,
+      runId: run.runId,
+      providerLane: run.disclosure.providerLane,
+      occurredAt: deps.clock.nowIso(),
+    }) as unknown;
+    if (
+      result !== null &&
+      result !== undefined &&
+      typeof result === "object" &&
+      typeof (result as { then?: unknown }).then === "function"
+    ) {
+      void Promise.resolve(result).catch(() => {
+        tracker.failureCount += 1;
+      });
+    }
+  } catch {
+    tracker.failureCount += 1;
+  }
+}
+
+function describeCapabilitySafe(
+  lane: ProviderLane,
+  deps: CoordinateExecutionRunDependencies,
+  correlationId: string,
+):
+  | { ok: true; capability: ProviderCapabilityDescriptor }
+  | { ok: false; failure: NormalizedFailure } {
+  try {
+    const described =
+      lane === "ai"
+        ? deps.providers.ai.describeCapability()
+        : lane === "git"
+          ? deps.providers.git.describeCapability()
+          : deps.providers.cursor.describeCapability();
+    const copied = readUntrustedPlainData(described, { redact: false });
+    if (!copied.ok || !copied.value || typeof copied.value !== "object") {
+      return {
+        ok: false,
+        failure: validationFailure(
+          correlationId,
+          "Provider capability descriptor rejected",
+        ),
+      };
+    }
+    const desc = copied.value as Record<string, unknown>;
+    return {
+      ok: true,
+      capability: {
+        lane,
+        capabilityId:
+          typeof desc.capabilityId === "string"
+            ? desc.capabilityId
+            : "unknown",
+        available: desc.available === true,
+        verified: false,
+        readOnly: desc.readOnly === true,
+        supportsCancellation: desc.supportsCancellation === true,
+        supportsTimeout: desc.supportsTimeout === true,
+      },
+    };
+  } catch {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "provider_unavailable",
+        code: "PROVIDER_UNAVAILABLE",
+        userMessage: "Provider capability description failed",
+        retryable: true,
+        correlationId,
+      }),
+    };
+  }
+}
+
+function validateTimeout(
+  value: unknown,
+  correlationId: string,
+): { ok: true; timeoutMs: number } | { ok: false; failure: NormalizedFailure } {
+  if (
+    typeof value !== "number" ||
+    !Number.isFinite(value) ||
+    !Number.isInteger(value) ||
+    value <= 0 ||
+    value > MAX_COORDINATOR_TIMEOUT_MS
+  ) {
+    return {
+      ok: false,
+      failure: validationFailure(
+        correlationId,
+        "Coordinator timeoutMs must be a positive integer within the local D2-D3 bound",
+      ),
+    };
+  }
+  return { ok: true, timeoutMs: value };
+}
+
+function validatePathField(
+  path: unknown,
+  correlationId: string,
+  allowlistRepos: readonly string[] | undefined,
+  protectedPaths: readonly string[] | undefined,
+): NormalizedFailure | undefined {
+  if (path === undefined) return undefined;
+  const decision = evaluateSandboxPath({
+    path,
+    allowlistRepos: allowlistRepos ?? ["projects/sfia-studio/"],
+    protectedPaths: protectedPaths ?? [".env"],
+  });
+  if (!decision.allowed) {
+    return normalizedFailure({
+      family:
+        decision.reason === "protected" || decision.reason === "traversal"
+          ? "protected_path"
+          : "validation",
+      code:
+        decision.reason === "protected" || decision.reason === "traversal"
+          ? "PROTECTED_PATH"
+          : "VALIDATION_ERROR",
+      userMessage: "Path failed sandbox normalization or protection checks",
+      retryable: false,
+      correlationId,
+    });
+  }
+  return undefined;
+}
+
+/**
+ * Preflight without provider ports: safe-read, timeout, intent/context/source,
+ * lane, correlation, provider request shape, and path guards.
+ */
+function preflightCoordinateInput(input: unknown): PreflightOk | PreflightFail {
+  const unknownCid = "unknown";
+  if (input === null || input === undefined || typeof input !== "object" || Array.isArray(input)) {
+    return {
+      ok: false,
+      failure: validationFailure(unknownCid, "Coordinator input rejected"),
+    };
+  }
+
+  // AbortSignal is a host object — extract by identity before plain-data copy.
+  const signalCandidate = (input as { signal?: unknown }).signal;
+  const signal =
+    signalCandidate instanceof AbortSignal ? signalCandidate : undefined;
+
+  const plainInput: Record<string, unknown> = {};
+  for (const key of Object.getOwnPropertyNames(input)) {
+    if (key === "signal") continue;
+    const desc = Object.getOwnPropertyDescriptor(input, key);
+    if (!desc || desc.get !== undefined || desc.set !== undefined) {
+      return {
+        ok: false,
+        failure: validationFailure(unknownCid, "Coordinator input rejected"),
+      };
+    }
+    plainInput[key] = desc.value;
+  }
+
+  const envelope = readUntrustedPlainData(plainInput, {
+    redact: false,
+    maxStringLength: 100_000,
+  });
+  if (!envelope.ok || !envelope.value || typeof envelope.value !== "object") {
+    return {
+      ok: false,
+      failure: validationFailure(unknownCid, "Coordinator input rejected"),
+    };
+  }
+  const raw = envelope.value as Record<string, unknown>;
+  // Ignore any injected availableSources property — never treat it as authority.
+  const intentRaw = raw.intent;
+  const contextRaw = raw.context;
+  if (!intentRaw || typeof intentRaw !== "object" || Array.isArray(intentRaw)) {
+    return {
+      ok: false,
+      failure: validationFailure(unknownCid, "intent required"),
+    };
+  }
+  if (
+    !contextRaw ||
+    typeof contextRaw !== "object" ||
+    Array.isArray(contextRaw)
+  ) {
+    return {
+      ok: false,
+      failure: validationFailure(unknownCid, "context required"),
+    };
+  }
+  const intentObj = intentRaw as Record<string, unknown>;
+  const contextObj = contextRaw as Record<string, unknown>;
+  const correlationId =
+    typeof intentObj.correlationId === "string" && intentObj.correlationId.trim()
+      ? intentObj.correlationId
+      : unknownCid;
+
+  if (
+    typeof intentObj.intentId !== "string" ||
+    !intentObj.intentId.trim() ||
+    typeof intentObj.operation !== "string" ||
+    !intentObj.operation.trim() ||
+    typeof intentObj.requestedLane !== "string" ||
+    !(ALLOWED_LANES as readonly string[]).includes(intentObj.requestedLane) ||
+    typeof intentObj.requestedSource !== "string" ||
+    !(ALLOWED_SOURCES as readonly string[]).includes(intentObj.requestedSource) ||
+    typeof intentObj.requiresHumanGate !== "boolean" ||
+    typeof intentObj.mutationRequested !== "boolean" ||
+    typeof intentObj.arbitraryCommandRequested !== "boolean"
+  ) {
+    return {
+      ok: false,
+      failure: validationFailure(correlationId, "intent shape invalid"),
+    };
+  }
+
+  if (
+    typeof contextObj.projectId !== "string" ||
+    typeof contextObj.actorId !== "string" ||
+    typeof contextObj.declaredSource !== "string" ||
+    !(ALLOWED_SOURCES as readonly string[]).includes(contextObj.declaredSource) ||
+    !contextObj.permissions ||
+    typeof contextObj.permissions !== "object"
+  ) {
+    return {
+      ok: false,
+      failure: validationFailure(correlationId, "context shape invalid"),
+    };
+  }
+
+  // D2-D3 internal proof is fixture only. Block real / sandbox-real before any port.
+  if (
+    intentObj.requestedSource !== "fixture" ||
+    contextObj.declaredSource !== "fixture"
+  ) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "source_mismatch",
+        code: "SOURCE_MISMATCH",
+        userMessage:
+          "D2-D3 demonstrates fixture only; real and sandbox-real remain blocked",
+        retryable: false,
+        correlationId,
+      }),
+    };
+  }
+
+  const timeout = validateTimeout(raw.timeoutMs, correlationId);
+  if (!timeout.ok) return timeout;
+
+  const permissions = contextObj.permissions as Record<string, unknown>;
+  const context: ExecutionContext = {
+    projectId: contextObj.projectId,
+    actorId: contextObj.actorId,
+    declaredSource: "fixture",
+    permissions: {
+      gitRead: permissions.gitRead === true,
+      gitWrite: permissions.gitWrite === true,
+      providerInvoke: permissions.providerInvoke === true,
+    },
+  };
+  if (typeof contextObj.workspaceId === "string") {
+    (context as { workspaceId?: string }).workspaceId = contextObj.workspaceId;
+  }
+  if (Array.isArray(contextObj.allowlistRepos)) {
+    (context as { allowlistRepos?: string[] }).allowlistRepos =
+      contextObj.allowlistRepos.filter((p) => typeof p === "string") as string[];
+  }
+  if (Array.isArray(contextObj.protectedPaths)) {
+    (context as { protectedPaths?: string[] }).protectedPaths =
+      contextObj.protectedPaths.filter((p) => typeof p === "string") as string[];
+  }
+
+  const intent: ExecutionIntent = {
+    intentId: intentObj.intentId,
+    correlationId,
+    requestedLane: intentObj.requestedLane as ProviderLane,
+    operation: intentObj.operation,
+    requestedSource: "fixture",
+    requiresHumanGate: intentObj.requiresHumanGate,
+    mutationRequested: intentObj.mutationRequested,
+    arbitraryCommandRequested: intentObj.arbitraryCommandRequested,
+  };
+  if (typeof intentObj.targetPath === "string") {
+    (intent as { targetPath?: string }).targetPath = intentObj.targetPath;
+  }
+  if (
+    intentObj.metadata &&
+    typeof intentObj.metadata === "object" &&
+    !Array.isArray(intentObj.metadata)
+  ) {
+    (intent as { metadata?: Readonly<Record<string, unknown>> }).metadata =
+      intentObj.metadata as Readonly<Record<string, unknown>>;
+  }
+
+  if (intent.targetPath !== undefined) {
+    const pathFailure = validatePathField(
+      intent.targetPath,
+      correlationId,
+      context.allowlistRepos,
+      context.protectedPaths,
+    );
+    if (pathFailure) return { ok: false, failure: pathFailure };
+  }
+
+  let providerRequest: CoordinateProviderRequest | undefined;
+  if (raw.providerRequest !== undefined) {
+    const requestCopy = readUntrustedPlainData(raw.providerRequest, {
+      redact: false,
+      maxStringLength: 100_000,
+    });
+    if (!requestCopy.ok) {
+      return {
+        ok: false,
+        failure: validationFailure(
+          correlationId,
+          "Provider request rejected as untrusted data",
+        ),
+      };
+    }
+    const boundary = validateUntrustedProviderRequest(
+      requestCopy.value,
+      correlationId,
+    );
+    if (!boundary.ok) {
+      return { ok: false, failure: boundary.failure };
+    }
+    const requestObj = requestCopy.value as Record<string, unknown>;
+    if (typeof requestObj.path === "string") {
+      const pathFailure = validatePathField(
+        requestObj.path,
+        correlationId,
+        context.allowlistRepos,
+        context.protectedPaths,
+      );
+      if (pathFailure) return { ok: false, failure: pathFailure };
+    }
+    // Rebuild timeout from validated coordinator timeout — request timeout is not authority.
+    providerRequest = {
+      ...(requestCopy.value as CoordinateProviderRequest),
+      timeoutMs: timeout.timeoutMs,
+      correlationId,
+    };
+  }
+
+  return {
+    ok: true,
+    intent,
+    context,
+    providerRequest,
+    timeoutMs: timeout.timeoutMs,
+    signal,
+    lateEvidenceSummary: raw.lateEvidenceSummary,
+    correlationId,
+  };
+}
+
+async function blockIdleRun(
+  run: ExecutionRun,
+  failure: NormalizedFailure,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<TransitionExecutionRunResult> {
+  return deps.execution.transitionExecutionRun({
+    runId: run.runId,
+    reason: "pre_engagement_block",
+    failure,
+    blockingReason: failure.code,
+  });
+}
+
+function requestMatchesRun(
+  request: CoordinateProviderRequest | undefined,
+  run: ExecutionRun,
+): boolean {
+  return Boolean(
+    request &&
+      request.lane === run.intent.requestedLane &&
+      request.correlationId === run.correlationId,
+  );
+}
+
+function resultFailure(
+  result: ProviderInvocationResult,
+  correlationId: string,
+): NormalizedFailure {
+  const allowedPairs: Readonly<Record<string, string>> = {
+    VALIDATION_ERROR: "validation",
+    AUTHENTICATION_ERROR: "authentication",
+    AUTHORIZATION_ERROR: "authorization",
+    PROVIDER_UNAVAILABLE: "provider_unavailable",
+    RATE_LIMITED: "rate_limited",
+    TIMED_OUT: "timed_out",
+    CANCELLED: "cancelled",
+    SANDBOX_BLOCKED: "sandbox_blocked",
+    PROTECTED_PATH: "protected_path",
+    MUTATION_FORBIDDEN: "mutation_forbidden",
+    HUMAN_GATE_REQUIRED: "human_gate_required",
+    INVALID_PROVIDER_RESULT: "invalid_provider_result",
+    INTERNAL_NORMALIZED_FAILURE: "internal_normalized_failure",
+    SOURCE_MISMATCH: "source_mismatch",
+  };
+  if (
+    "failure" in result &&
+    result.failure &&
+    result.failure.correlationId === correlationId &&
+    result.failure.technicalDetailsRedacted === true &&
+    allowedPairs[result.failure.code] === result.failure.family
+  ) {
+    return normalizedFailure({
+      family: result.failure.family,
+      code: result.failure.code,
+      userMessage: "Provider operation failed",
+      retryable: result.failure.retryable,
+      correlationId,
+    });
+  }
+  return invalidProviderFailure(correlationId);
+}
+
+async function transitionFromInvocation(
+  run: ExecutionRun,
+  outcome: InvokeOutcome,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<{ result: TransitionExecutionRunResult; usage: UsageSummary }> {
+  if (outcome.status === "timed_out") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "time_limit",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_timed_out"),
+    };
+  }
+  if (outcome.status === "cancelled") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "cancel_accepted",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_cancelled"),
+    };
+  }
+  if (outcome.status === "failed") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "engaged_operation_failed",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_failed"),
+    };
+  }
+
+  const providerResultRaw = outcome.result;
+  const safeResult = readUntrustedPlainData(providerResultRaw, {
+    redact: true,
+    maxStringLength: 100_000,
+  });
+  if (!safeResult.ok) {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "engaged_operation_failed",
+        failure: invalidProviderFailure(run.correlationId),
+      }),
+      usage: unavailableUsage("provider_result_hostile"),
+    };
+  }
+
+  const providerResult = safeResult.value as ProviderInvocationResult;
+  const boundary = validateUntrustedProviderResult(
+    providerResult,
+    run.correlationId,
+  );
+  if (!boundary.ok) {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "engaged_operation_failed",
+        failure: boundary.failure,
+      }),
+      usage: unavailableUsage("provider_result_invalid"),
+    };
+  }
+
+  if (providerResult.kind === "success") {
+    const usage = validatedUsage(providerResult.usage);
+    const externalResult = {
+      kind: "success" as const,
+      completeness: providerResult.completeness,
+      redactedSummary: providerResult.redactedSummary,
+      rawPresent: false as const,
+    };
+    if (providerResult.completeness === "partial") {
+      const failure = invalidProviderFailure(run.correlationId);
+      return {
+        result: await deps.execution.transitionExecutionRun({
+          runId: run.runId,
+          reason: "engaged_operation_failed",
+          externalResult,
+          failure,
+        }),
+        usage,
+      };
+    }
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "outputs_validated",
+        completeness: "complete",
+        externalResult,
+      }),
+      usage,
+    };
+  }
+
+  const failure = resultFailure(providerResult, run.correlationId);
+  if (providerResult.kind === "timed_out") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "time_limit",
+        failure,
+      }),
+      usage: unavailableUsage("provider_timed_out"),
+    };
+  }
+  if (providerResult.kind === "cancelled") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "cancel_accepted",
+        failure,
+      }),
+      usage: unavailableUsage("provider_cancelled"),
+    };
+  }
+  return {
+    result: await deps.execution.transitionExecutionRun({
+      runId: run.runId,
+      reason: "engaged_operation_failed",
+      failure,
+    }),
+    usage: unavailableUsage("provider_failed"),
+  };
+}
+
+function deliveryOf(tracker: EventTracker) {
+  return {
+    status: (tracker.failureCount > 0
+      ? "degraded"
+      : "complete") as EventDeliveryStatus,
+    failureCount: tracker.failureCount,
+  };
+}
+
+export async function coordinateExecutionRun(
+  input: unknown,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<CoordinateExecutionRunResult> {
+  const tracker: EventTracker = { failureCount: 0 };
+  const stateTrace: ExecutionRun["state"][] = [];
+  const noUsage = unavailableUsage("not_validated");
+
+  const preflight = preflightCoordinateInput(input);
+  if (!preflight.ok) {
+    return {
+      ok: false,
+      failure: preflight.failure,
+      ...emptyDiagnostics(tracker),
+    };
+  }
+
+  let capability: ProviderCapabilityDescriptor | undefined;
+  if (preflight.intent.requestedLane !== "none") {
+    const described = describeCapabilitySafe(
+      preflight.intent.requestedLane,
+      deps,
+      preflight.correlationId,
+    );
+    if (!described.ok) {
+      return {
+        ok: false,
+        failure: described.failure,
+        ...emptyDiagnostics(tracker),
+      };
+    }
+    capability = described.capability;
+  }
+
+  const created = await deps.execution.createExecutionRun({
+    intent: preflight.intent,
+    context: preflight.context,
+    capability,
+  });
+
+  if (created.run) stateTrace.push(created.run.state);
+  if (!created.ok) {
+    if (created.run) {
+      safeEmit(deps, tracker, created.run, {
+        type: "validation",
+        detail: {
+          accepted: false,
+          source: created.run.disclosure.source,
+          failureCode: created.failure.code,
+        },
+      });
+    }
+    return {
+      ok: false,
+      failure: created.failure,
+      run: created.run,
+      providerAttempted: false,
+      providerInvoked: false,
+      providerCompleted: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+      eventDelivery: deliveryOf(tracker),
+    };
+  }
+
+  let current = created.run;
+  safeEmit(deps, tracker, current, {
+    type: "validation",
+    detail: { accepted: true, source: current.disclosure.source },
+  });
+
+  const preEngagementFailure =
+    preflight.intent.requestedLane === "none"
+      ? normalizedFailure({
+          family: "provider_unavailable",
+          code: "PROVIDER_UNAVAILABLE",
+          userMessage: "No provider lane selected",
+          retryable: true,
+          correlationId: current.correlationId,
+        })
+      : !requestMatchesRun(preflight.providerRequest, current)
+        ? validationFailure(
+            current.correlationId,
+            "Provider request does not match the validated run",
+          )
+        : undefined;
+
+  if (preEngagementFailure) {
+    const blocked = await blockIdleRun(current, preEngagementFailure, deps);
+    if (blocked.run) {
+      current = blocked.run;
+      stateTrace.push(blocked.run.state);
+    }
+    return {
+      ok: false,
+      failure: blocked.ok ? preEngagementFailure : blocked.failure,
+      run: blocked.run ?? current,
+      providerAttempted: false,
+      providerInvoked: false,
+      providerCompleted: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+      eventDelivery: deliveryOf(tracker),
+    };
+  }
+
+  const started = await deps.execution.transitionExecutionRun({
+    runId: current.runId,
+    reason: "intent_valid",
+  });
+  if (!started.ok) {
+    return {
+      ok: false,
+      failure: started.failure,
+      run: started.run ?? current,
+      providerAttempted: false,
+      providerInvoked: false,
+      providerCompleted: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+      eventDelivery: deliveryOf(tracker),
+    };
+  }
+  current = started.run;
+  stateTrace.push(current.state);
+  safeEmit(deps, tracker, current, {
+    type: "run_transition",
+    detail: { state: current.state, source: current.disclosure.source },
+  });
+
+  const providerAttempted = true;
+  let providerInvoked = false;
+  let providerCompleted = false;
+
+  const invocation = await invokeWithTimeoutAndCancellation(
+    (invokeSignal) => {
+      // True only immediately before the effective provider port call.
+      providerInvoked = true;
+      const common = {
+        ...preflight.providerRequest!,
+        runId: current.runId,
+        signal: invokeSignal,
+        timeoutMs: preflight.timeoutMs,
+      };
+      switch (current.intent.requestedLane) {
+        case "ai":
+          return deps.providers.ai.complete(common as AiCompletionRequest);
+        case "git":
+          return deps.providers.git.read(common as GitReadRequest);
+        case "cursor":
+          return deps.providers.cursor.executeFixture(
+            common as CursorFixtureRequest,
+          );
+        default:
+          throw new Error("provider lane none cannot be invoked");
+      }
+    },
+    {
+      timeoutMs: preflight.timeoutMs,
+      signal: preflight.signal,
+      correlationId: current.correlationId,
+      maxRetries: 0,
+    },
+  );
+  providerCompleted = invocation.status === "completed";
+
+  safeEmit(deps, tracker, current, {
+    type: "provider_invocation",
+    detail: {
+      outcome: invocation.status,
+      source: current.disclosure.source,
+      providerAttempted,
+      providerInvoked,
+      providerCompleted,
+    },
+  });
+
+  const terminal = await transitionFromInvocation(current, invocation, deps);
+  if (!terminal.result.ok) {
+    return {
+      ok: false,
+      failure: terminal.result.failure,
+      run: terminal.result.run ?? current,
+      providerAttempted,
+      providerInvoked,
+      providerCompleted,
+      stateTrace,
+      validatedUsage: terminal.usage,
+      lateEvidenceRecorded: false,
+      eventDelivery: deliveryOf(tracker),
+    };
+  }
+  current = terminal.result.run;
+  stateTrace.push(current.state);
+  safeEmit(deps, tracker, current, {
+    type: "run_transition",
+    detail: { state: current.state, source: current.disclosure.source },
+  });
+
+  let lateEvidenceRecorded = false;
+  if (preflight.lateEvidenceSummary !== undefined) {
+    const summary = sanitizeLateEvidenceSummary(preflight.lateEvidenceSummary);
+    const late = await deps.execution.transitionExecutionRun({
+      runId: current.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: summary,
+    });
+    if (late.ok) {
+      current = late.run;
+      lateEvidenceRecorded = true;
+      safeEmit(deps, tracker, current, {
+        type: "late_result",
+        detail: { late: true, stateUnchanged: true },
+      });
+    }
+  }
+
+  const successful = current.state === "succeeded";
+  return successful
+    ? {
+        ok: true,
+        run: current,
+        providerAttempted,
+        providerInvoked,
+        providerCompleted,
+        stateTrace,
+        validatedUsage: terminal.usage,
+        lateEvidenceRecorded,
+        eventDelivery: deliveryOf(tracker),
+      }
+    : {
+        ok: false,
+        failure:
+          current.failure ??
+          normalizedFailure({
+            family:
+              current.state === "timed_out"
+                ? "timed_out"
+                : current.state === "cancelled"
+                  ? "cancelled"
+                  : "internal_normalized_failure",
+            code:
+              current.state === "timed_out"
+                ? "TIMED_OUT"
+                : current.state === "cancelled"
+                  ? "CANCELLED"
+                  : "INTERNAL_NORMALIZED_FAILURE",
+            userMessage: "Execution did not succeed",
+            retryable: false,
+            correlationId: current.correlationId,
+          }),
+        run: current,
+        providerAttempted,
+        providerInvoked,
+        providerCompleted,
+        stateTrace,
+        validatedUsage: terminal.usage,
+        lateEvidenceRecorded,
+        eventDelivery: deliveryOf(tracker),
+      };
+}

diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
+import type {
+  Completeness,
+  ExecutionRun,
+  ExecutionState,
+  UsageSummary,
+} from "../domain/types";
+import {
+  assessExecutionReadiness,
+  type ExecutionReadinessAssessment,
+} from "./executionReadiness";
+import {
+  readUntrustedPlainData,
+  redactBoundedText,
+} from "./untrustedExecutionData";
+
+const MAX_TEXT = 240;
+
+const ALLOWED_STATES = new Set<string>([
+  "idle",
+  "running",
+  "awaiting_human",
+  "succeeded",
+  "failed",
+  "cancelled",
+  "timed_out",
+  "blocked",
+]);
+
+const ALLOWED_SOURCES = new Set(["fixture", "sandbox-real", "real"]);
+const ALLOWED_LANES = new Set(["ai", "git", "cursor", "none"]);
+const ALLOWED_COMPLETENESS = new Set(["complete", "partial", "empty"]);
+
+export type ExecutionProjection = {
+  readonly runId: string;
+  readonly correlationId: string;
+  readonly state: ExecutionState;
+  readonly source: ExecutionRun["disclosure"]["source"];
+  readonly providerLane: ExecutionRun["disclosure"]["providerLane"];
+  readonly phase: string;
+  readonly completeness: Completeness | "unavailable";
+  readonly resultSummary: string | null;
+  readonly failure: {
+    readonly family: string;
+    readonly code: string;
+    readonly message: string;
+    readonly retryable: boolean;
+  } | null;
+  readonly blockedReason: string | null;
+  readonly humanGate: {
+    readonly gateId: string;
+    readonly question: string;
+    readonly required: boolean;
+    readonly decision: "approve" | "reject" | "cancel" | null;
+  } | null;
+  readonly evidenceSummary: readonly {
+    readonly evidenceId: string;
+    readonly source: ExecutionRun["disclosure"]["source"];
+    readonly completeness: Completeness;
+    readonly producedAt: string;
+    readonly late: boolean;
+    readonly official: true;
+  }[];
+  readonly usage: UsageSummary;
+  readonly openReserves: readonly string[];
+  readonly readinessAssessment: ExecutionReadinessAssessment;
+  readonly limits: readonly string[];
+  readonly persistence: {
+    readonly kind: "memory_process_local";
+    readonly durable: false;
+    readonly multiInstance: false;
+    readonly restartSafe: false;
+  };
+  readonly cursorUnverified: true;
+  readonly gitWrite: false;
+};
+
+export type CreateExecutionProjectionResult =
+  | { readonly ok: true; readonly projection: ExecutionProjection }
+  | {
+      readonly ok: false;
+      readonly failure: { readonly code: string; readonly message: string };
+    };
+
+function observablePhase(state: ExecutionState): string {
+  switch (state) {
+    case "idle":
+      return "validated";
+    case "running":
+      return "provider_operation";
+    case "awaiting_human":
+      return "human_decision";
+    default:
+      return "terminal";
+  }
+}
+
+function fail(
+  code: string,
+  message: string,
+): CreateExecutionProjectionResult {
+  return { ok: false, failure: { code, message } };
+}
+
+function asString(value: unknown): string | null {
+  return typeof value === "string" ? value : null;
+}
+
+function readPersistence(raw: unknown): CreateExecutionProjectionResult | {
+  ok: true;
+  persistence: ExecutionProjection["persistence"];
+} {
+  const copied = readUntrustedPlainData(raw);
+  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
+    return fail("PERSISTENCE_INVALID", "persistence must be a plain object");
+  }
+  const p = copied.value as Record<string, unknown>;
+  if (p.kind !== "memory_process_local") {
+    return fail("PERSISTENCE_KIND", "persistence.kind must be memory_process_local");
+  }
+  if (p.durable !== false || p.multiInstance !== false || p.restartSafe !== false) {
+    return fail(
+      "PERSISTENCE_FLAGS",
+      "persistence durable/multiInstance/restartSafe must be false",
+    );
+  }
+  return {
+    ok: true,
+    persistence: {
+      kind: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    },
+  };
+}
+
+function readEvidence(
+  raw: unknown,
+  runId: string,
+  correlationId: string,
+  source: ExecutionRun["disclosure"]["source"],
+): CreateExecutionProjectionResult | {
+  ok: true;
+  evidence: ExecutionProjection["evidenceSummary"];
+} {
+  if (raw === undefined) {
+    return { ok: true, evidence: [] };
+  }
+  const copied = readUntrustedPlainData(raw, { redact: true });
+  if (!copied.ok || !Array.isArray(copied.value)) {
+    return fail("EVIDENCE_INVALID", "evidence must be a plain array");
+  }
+  const out: ExecutionProjection["evidenceSummary"][number][] = [];
+  for (const item of copied.value) {
+    if (!item || typeof item !== "object") {
+      return fail("EVIDENCE_ENTRY", "evidence entry must be a plain object");
+    }
+    const e = item as Record<string, unknown>;
+    if (e.official !== true) {
+      return fail("EVIDENCE_OFFICIAL", "canonical evidence.official must be true");
+    }
+    if (e.runId !== runId || e.correlationId !== correlationId) {
+      return fail("EVIDENCE_IDENTITY", "evidence identity must match the run");
+    }
+    if (e.source !== source) {
+      return fail("EVIDENCE_SOURCE", "evidence source must match run disclosure source");
+    }
+    const evidenceId = asString(e.evidenceId);
+    const producedAt = asString(e.producedAt);
+    if (!evidenceId || !producedAt) {
+      return fail("EVIDENCE_FIELDS", "evidence fields missing");
+    }
+    if (
+      typeof e.completeness !== "string" ||
+      !ALLOWED_COMPLETENESS.has(e.completeness)
+    ) {
+      return fail("EVIDENCE_COMPLETENESS", "evidence completeness invalid");
+    }
+    if (typeof e.late !== "boolean") {
+      return fail("EVIDENCE_LATE", "evidence.late must be boolean");
+    }
+    if (
+      typeof e.source !== "string" ||
+      !ALLOWED_SOURCES.has(e.source)
+    ) {
+      return fail("EVIDENCE_SOURCE_VALUE", "evidence source invalid");
+    }
+    out.push({
+      evidenceId,
+      source: e.source as ExecutionRun["disclosure"]["source"],
+      completeness: e.completeness as Completeness,
+      producedAt,
+      late: e.late,
+      official: true,
+    });
+  }
+  return { ok: true, evidence: out };
+}
+
+function readUsage(raw: unknown): UsageSummary {
+  const copied = readUntrustedPlainData(raw, { redact: true });
+  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
+    return { status: "unavailable", reason: "usage_unavailable" };
+  }
+  const usage = copied.value as Record<string, unknown>;
+  if (usage.status === "validated") {
+    return {
+      status: "validated",
+      inputTokens:
+        typeof usage.inputTokens === "number" ? usage.inputTokens : undefined,
+      outputTokens:
+        typeof usage.outputTokens === "number" ? usage.outputTokens : undefined,
+      unit: typeof usage.unit === "string" ? usage.unit : undefined,
+    };
+  }
+  return {
+    status: "unavailable",
+    reason:
+      typeof usage.reason === "string"
+        ? (redactBoundedText(usage.reason, MAX_TEXT) ?? "usage_unavailable")
+        : "usage_unavailable",
+  };
+}
+
+/**
+ * Reconstruct a transport-neutral projection from unknown input.
+ * TypeScript types are not trusted; values are allowlisted and redacted.
+ */
+export function createExecutionProjection(
+  input: unknown,
+): CreateExecutionProjectionResult {
+  const envelope = readUntrustedPlainData(input, {
+    redact: true,
+    maxStringLength: 100_000,
+  });
+  if (!envelope.ok || !envelope.value || typeof envelope.value !== "object") {
+    return fail("INPUT_REJECTED", "projection input rejected");
+  }
+  const root = envelope.value as Record<string, unknown>;
+  const runRaw = root.run ?? root;
+  if (!runRaw || typeof runRaw !== "object" || Array.isArray(runRaw)) {
+    return fail("RUN_REQUIRED", "run object required");
+  }
+  const run = runRaw as Record<string, unknown>;
+
+  const runId = asString(run.runId);
+  const correlationId = asString(run.correlationId);
+  if (!runId || !correlationId) {
+    return fail("IDENTITY", "runId and correlationId required");
+  }
+  if (typeof run.state !== "string" || !ALLOWED_STATES.has(run.state)) {
+    return fail("STATE", "run.state invalid");
+  }
+  const state = run.state as ExecutionState;
+
+  const disclosureRaw = run.disclosure;
+  if (!disclosureRaw || typeof disclosureRaw !== "object") {
+    return fail("DISCLOSURE", "disclosure required");
+  }
+  const disclosure = disclosureRaw as Record<string, unknown>;
+  if (
+    typeof disclosure.source !== "string" ||
+    !ALLOWED_SOURCES.has(disclosure.source) ||
+    typeof disclosure.providerLane !== "string" ||
+    !ALLOWED_LANES.has(disclosure.providerLane)
+  ) {
+    return fail("DISCLOSURE_FIELDS", "disclosure source/lane invalid");
+  }
+  const source = disclosure.source as ExecutionRun["disclosure"]["source"];
+  const providerLane =
+    disclosure.providerLane as ExecutionRun["disclosure"]["providerLane"];
+
+  const limitsRaw = disclosure.limits;
+  const limitsCopied = readUntrustedPlainData(limitsRaw);
+  if (!limitsCopied.ok || !Array.isArray(limitsCopied.value)) {
+    return fail("LIMITS", "disclosure.limits must be a string array");
+  }
+  const limits: string[] = [];
+  for (const item of limitsCopied.value) {
+    if (typeof item !== "string") {
+      return fail("LIMITS_TYPE", "disclosure.limits entries must be strings");
+    }
+    limits.push(redactBoundedText(item, MAX_TEXT) ?? "");
+  }
+
+  const persistence = readPersistence(run.persistence);
+  if (!("persistence" in persistence)) return persistence;
+
+  const evidence = readEvidence(run.evidence, runId, correlationId, source);
+  if (!("evidence" in evidence)) return evidence;
+
+  let resultSummary: string | null = null;
+  let completeness: Completeness | "unavailable" = "unavailable";
+  if (run.externalResult && typeof run.externalResult === "object") {
+    const ext = run.externalResult as Record<string, unknown>;
+    if (ext.kind === "success") {
+      resultSummary = redactBoundedText(ext.redactedSummary, MAX_TEXT);
+      if (
+        typeof ext.completeness === "string" &&
+        ALLOWED_COMPLETENESS.has(ext.completeness)
+      ) {
+        completeness = ext.completeness as Completeness;
+      }
+    }
+  }
+  if (completeness === "unavailable" && evidence.evidence.length > 0) {
+    completeness = evidence.evidence[evidence.evidence.length - 1]!.completeness;
+  }
+
+  let failure: ExecutionProjection["failure"] = null;
+  if (run.failure && typeof run.failure === "object") {
+    const f = run.failure as Record<string, unknown>;
+    failure = {
+      family: asString(f.family) ?? "internal_normalized_failure",
+      code: asString(f.code) ?? "INTERNAL_NORMALIZED_FAILURE",
+      message:
+        redactBoundedText(f.userMessage, MAX_TEXT) ??
+        "Failure details unavailable",
+      retryable: f.retryable === true,
+    };
+  }
+
+  let humanGate: ExecutionProjection["humanGate"] = null;
+  if (run.gate && typeof run.gate === "object") {
+    const g = run.gate as Record<string, unknown>;
+    const gateId = asString(g.gateId);
+    if (gateId) {
+      humanGate = {
+        gateId,
+        question:
+          redactBoundedText(g.question, MAX_TEXT) ?? "Human decision required",
+        required: g.required === true,
+        decision:
+          g.decision === "approve" ||
+          g.decision === "reject" ||
+          g.decision === "cancel"
+            ? g.decision
+            : null,
+      };
+    }
+  }
+
+  const usage =
+    root.validatedUsage !== undefined
+      ? readUsage(root.validatedUsage)
+      : readUsage(run.usage);
+
+  const openReservesRaw = root.openReserves;
+  let openReserves: readonly string[] | undefined;
+  if (openReservesRaw !== undefined) {
+    const copied = readUntrustedPlainData(openReservesRaw, { redact: true });
+    if (!copied.ok || !Array.isArray(copied.value)) {
+      return fail("RESERVES", "openReserves must be a string array");
+    }
+    openReserves = copied.value.map((item) => {
+      if (typeof item !== "string") return "reserve_redacted";
+      return redactBoundedText(item, MAX_TEXT) ?? "reserve_redacted";
+    });
+  }
+
+  const readinessAssessment: ExecutionReadinessAssessment =
+    root.readinessAssessment && typeof root.readinessAssessment === "object"
+      ? (root.readinessAssessment as ExecutionReadinessAssessment)
+      : assessExecutionReadiness({
+          run: {
+            runId,
+            correlationId,
+            state,
+            disclosure: { source, providerLane, limits },
+            evidence: evidence.evidence.map((e) => ({
+              ...e,
+              runId,
+              correlationId,
+              official: true as const,
+              summary: "projection_internal",
+            })),
+            persistence: persistence.persistence,
+          },
+        });
+
+  // Re-assess when caller supplied a readiness object that is not artifact-linked.
+  const linkedReadiness = assessExecutionReadiness({
+    run: {
+      runId,
+      correlationId,
+      state,
+      disclosure: {
+        source,
+        providerLane,
+        limits,
+        processLocalMemory: true,
+        cursorUnverified: true,
+      },
+      evidence: evidence.evidence.map((e) => ({
+        evidenceId: e.evidenceId,
+        runId,
+        correlationId,
+        source: e.source,
+        completeness: e.completeness,
+        producedAt: e.producedAt,
+        late: e.late,
+        official: true as const,
+        summary: "projection_internal",
+      })),
+      persistence: persistence.persistence,
+    },
+    projection: {
+      runId,
+      correlationId,
+      source,
+      state,
+    },
+  });
+
+  const finalReadiness =
+    root.readinessAssessment && typeof root.readinessAssessment === "object"
+      ? linkedReadiness
+      : readinessAssessment;
+
+  return {
+    ok: true,
+    projection: {
+      runId,
+      correlationId,
+      state,
+      source,
+      providerLane,
+      phase: observablePhase(state),
+      completeness,
+      resultSummary,
+      failure,
+      blockedReason: redactBoundedText(run.blockedReason, MAX_TEXT),
+      humanGate,
+      evidenceSummary: evidence.evidence,
+      usage,
+      openReserves: openReserves ?? finalReadiness.openReserves,
+      readinessAssessment: finalReadiness,
+      limits,
+      persistence: persistence.persistence,
+      cursorUnverified: true,
+      gitWrite: false,
+    },
+  };
+}

diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
+import { readUntrustedPlainData } from "./untrustedExecutionData";
+
+export type ReadinessStatus =
+  | "demonstrated"
+  | "not_demonstrated"
+  | "blocked";
+
+export type ReadinessLevel = {
+  readonly status: ReadinessStatus;
+  readonly reasons: readonly string[];
+};
+
+export type ExecutionReadinessAssessment = {
+  readonly uxExploration: ReadinessLevel;
+  readonly uiDelivery: ReadinessLevel;
+  readonly strongRuntimeVerdict: ReadinessLevel;
+  readonly openReserves: readonly string[];
+};
+
+export const D2D3_OPEN_RESERVES = [
+  "R-QA-REV-01 — OPEN NOT LIFTED",
+  "R-QA-REV-02 — OPEN NOT LIFTED",
+  "R-QA-D2C-01 — OPEN NOT LIFTED",
+  "Cursor product capabilities — UNVERIFIED",
+  "memory process-local only",
+  "R-PR-D2D2-01 — MINOR",
+] as const;
+
+const UI_DELIVERY: ReadinessLevel = {
+  status: "not_demonstrated",
+  reasons: [
+    "no UI or accessibility delivery",
+    "no Figma evidence",
+    "no D3 transport selected",
+  ],
+};
+
+const STRONG_RUNTIME: ReadinessLevel = {
+  status: "blocked",
+  reasons: [
+    "G-D2D-CURSOR-01 not consumed",
+    "G-D2D-PERSIST-01 not consumed",
+    "Cursor unverified",
+    "memory is process-local",
+    "no live provider proof",
+  ],
+};
+
+function notDemonstrated(reasons: readonly string[]): ExecutionReadinessAssessment {
+  return {
+    uxExploration: { status: "not_demonstrated", reasons },
+    uiDelivery: UI_DELIVERY,
+    strongRuntimeVerdict: STRONG_RUNTIME,
+    openReserves: D2D3_OPEN_RESERVES,
+  };
+}
+
+function isOfficialCompleteEvidence(
+  evidence: unknown,
+  runId: string,
+  correlationId: string,
+  source: string,
+): boolean {
+  if (!Array.isArray(evidence) || evidence.length === 0) return false;
+  return evidence.some((item) => {
+    if (!item || typeof item !== "object") return false;
+    const e = item as Record<string, unknown>;
+    return (
+      e.official === true &&
+      e.completeness === "complete" &&
+      e.late === false &&
+      e.runId === runId &&
+      e.correlationId === correlationId &&
+      e.source === source &&
+      source === "fixture"
+    );
+  });
+}
+
+/**
+ * Readiness from linked, validated artifacts only.
+ * Boolean-only caller proofs are rejected as not_demonstrated.
+ */
+export function assessExecutionReadiness(
+  artifacts: unknown,
+): ExecutionReadinessAssessment {
+  const copied = readUntrustedPlainData(artifacts, { redact: true });
+  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
+    return notDemonstrated([
+      "linked run, validated projection, and official evidence are required",
+    ]);
+  }
+  const root = copied.value as Record<string, unknown>;
+
+  // Explicitly reject the retired boolean-only proof API.
+  if (
+    "fixturePathDemonstrated" in root ||
+    "projectionDemonstrated" in root ||
+    "disclosuresDemonstrated" in root
+  ) {
+    return notDemonstrated([
+      "boolean readiness proofs are not accepted; linked artifacts are required",
+    ]);
+  }
+
+  const runRaw = root.run;
+  if (!runRaw || typeof runRaw !== "object" || Array.isArray(runRaw)) {
+    return notDemonstrated(["canonical ExecutionRun artifact is required"]);
+  }
+  const run = runRaw as Record<string, unknown>;
+  const runId = typeof run.runId === "string" ? run.runId : null;
+  const correlationId =
+    typeof run.correlationId === "string" ? run.correlationId : null;
+  const state = typeof run.state === "string" ? run.state : null;
+  const disclosure =
+    run.disclosure && typeof run.disclosure === "object"
+      ? (run.disclosure as Record<string, unknown>)
+      : null;
+  const source =
+    disclosure && typeof disclosure.source === "string"
+      ? disclosure.source
+      : null;
+
+  if (!runId || !correlationId || !state || !source) {
+    return notDemonstrated(["run identity, state, and source are required"]);
+  }
+
+  if (state !== "succeeded" || source !== "fixture") {
+    return notDemonstrated([
+      "UX exploration requires a succeeded fixture terminal",
+    ]);
+  }
+
+  if (
+    !isOfficialCompleteEvidence(run.evidence, runId, correlationId, source)
+  ) {
+    return notDemonstrated([
+      "official complete non-late fixture evidence linked to the run is required",
+    ]);
+  }
+
+  const persistence =
+    run.persistence && typeof run.persistence === "object"
+      ? (run.persistence as Record<string, unknown>)
+      : null;
+  if (
+    !persistence ||
+    persistence.kind !== "memory_process_local" ||
+    persistence.durable !== false ||
+    persistence.multiInstance !== false ||
+    persistence.restartSafe !== false
+  ) {
+    return notDemonstrated(["process-local persistence disclosure is required"]);
+  }
+
+  const projectionRaw = root.projection;
+  if (projectionRaw !== undefined) {
+    if (typeof projectionRaw !== "object" || projectionRaw === null) {
+      return notDemonstrated(["projection artifact must be a plain object"]);
+    }
+    const projection = projectionRaw as Record<string, unknown>;
+    if (
+      projection.runId !== runId ||
+      projection.correlationId !== correlationId ||
+      projection.source !== source
+    ) {
+      return notDemonstrated([
+        "projection must share runId, correlationId, and source with the run",
+      ]);
+    }
+  } else {
+    // Composition may assess from run alone before projection materialization;
+    // still require that a projection *could* be linked (same IDs present on run).
+    // UX demonstrated only when a projection artifact is also supplied.
+    return notDemonstrated([
+      "validated projection of the same run is required for UX demonstration",
+    ]);
+  }
+
+  const limits = disclosure?.limits;
+  if (!Array.isArray(limits) || limits.length === 0) {
+    return notDemonstrated(["source disclosure limits are required"]);
+  }
+
+  return {
+    uxExploration: {
+      status: "demonstrated",
+      reasons: [
+        "linked succeeded fixture run",
+        "validated projection of the same run",
+        "official complete evidence and disclosures demonstrated",
+      ],
+    },
+    uiDelivery: UI_DELIVERY,
+    strongRuntimeVerdict: STRONG_RUNTIME,
+    openReserves: D2D3_OPEN_RESERVES,
+  };
+}

diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts
+/**
+ * Pure application helper for untrusted execution payloads.
+ * No Node, infrastructure, or provider imports.
+ * Rejects accessors, non-plain prototypes, functions, symbols, and cycles.
+ */
+
+const DEFAULT_MAX_DEPTH = 8;
+const DEFAULT_MAX_KEYS = 64;
+const DEFAULT_MAX_ARRAY = 64;
+const DEFAULT_MAX_STRING = 4096;
+
+const FORBIDDEN_KEY =
+  /^(.*[_-]?)?(secret|password|token|api[_-]?key|authorization|cookie|prompt|rawResponse|raw_prompt|raw_response)([_-].*)?$/i;
+
+const FORBIDDEN_VALUE =
+  /sk-[a-zA-Z0-9]{10,}|ghp_[A-Za-z0-9]{10,}|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|xox[baprs]-|password\s*=/i;
+
+export type UntrustedReadOk = {
+  readonly ok: true;
+  readonly value: unknown;
+};
+
+export type UntrustedReadFail = {
+  readonly ok: false;
+  readonly reason: string;
+};
+
+export type UntrustedReadResult = UntrustedReadOk | UntrustedReadFail;
+
+export type UntrustedReadOptions = {
+  readonly maxDepth?: number;
+  readonly maxKeys?: number;
+  readonly maxArrayLength?: number;
+  readonly maxStringLength?: number;
+  readonly redact?: boolean;
+};
+
+function isPlainObject(value: object): boolean {
+  const proto = Object.getPrototypeOf(value);
+  return proto === Object.prototype || proto === null;
+}
+
+function ownDataKeys(obj: object): string[] | null {
+  const names = Object.getOwnPropertyNames(obj);
+  const symbols = Object.getOwnPropertySymbols(obj);
+  if (symbols.length > 0) return null;
+  for (const name of names) {
+    const desc = Object.getOwnPropertyDescriptor(obj, name);
+    if (!desc) return null;
+    if (desc.get !== undefined || desc.set !== undefined) return null;
+    if (typeof desc.value === "function" || typeof desc.value === "symbol") {
+      return null;
+    }
+  }
+  return names;
+}
+
+function redactString(value: string, maxLength: number): string {
+  const cleaned = value.replace(FORBIDDEN_VALUE, "[REDACTED]");
+  return cleaned.slice(0, maxLength);
+}
+
+function readInner(
+  input: unknown,
+  depth: number,
+  ancestors: WeakSet<object>,
+  options: Required<UntrustedReadOptions>,
+): UntrustedReadResult {
+  if (depth > options.maxDepth) {
+    return { ok: false, reason: "depth_exceeded" };
+  }
+  if (input === null || typeof input === "boolean") {
+    return { ok: true, value: input };
+  }
+  if (input === undefined) {
+    return { ok: true, value: undefined };
+  }
+  if (typeof input === "number") {
+    if (!Number.isFinite(input)) {
+      return { ok: false, reason: "non_finite_number" };
+    }
+    return { ok: true, value: input };
+  }
+  if (typeof input === "string") {
+    if (input.length > options.maxStringLength) {
+      return { ok: false, reason: "string_too_long" };
+    }
+    if (options.redact && FORBIDDEN_VALUE.test(input)) {
+      return { ok: true, value: redactString(input, options.maxStringLength) };
+    }
+    if (options.redact) {
+      return { ok: true, value: input.slice(0, options.maxStringLength) };
+    }
+    return { ok: true, value: input };
+  }
+  if (typeof input === "function" || typeof input === "symbol") {
+    return { ok: false, reason: "forbidden_type" };
+  }
+  if (typeof input !== "object") {
+    return { ok: false, reason: "unsupported_type" };
+  }
+  if (ancestors.has(input)) {
+    return { ok: false, reason: "cycle" };
+  }
+  ancestors.add(input);
+
+  if (Array.isArray(input)) {
+    if (input.length > options.maxArrayLength) {
+      ancestors.delete(input);
+      return { ok: false, reason: "array_too_large" };
+    }
+    const out: unknown[] = [];
+    for (let i = 0; i < input.length; i += 1) {
+      const desc = Object.getOwnPropertyDescriptor(input, i);
+      if (!desc || desc.get !== undefined || desc.set !== undefined) {
+        ancestors.delete(input);
+        return { ok: false, reason: "array_accessor" };
+      }
+      const nested = readInner(desc.value, depth + 1, ancestors, options);
+      if (!nested.ok) {
+        ancestors.delete(input);
+        return nested;
+      }
+      out.push(nested.value);
+    }
+    ancestors.delete(input);
+    return { ok: true, value: out };
+  }
+
+  if (!isPlainObject(input)) {
+    ancestors.delete(input);
+    return { ok: false, reason: "non_plain_object" };
+  }
+  const keys = ownDataKeys(input);
+  if (keys === null) {
+    ancestors.delete(input);
+    return { ok: false, reason: "accessors_or_symbols" };
+  }
+  if (keys.length > options.maxKeys) {
+    ancestors.delete(input);
+    return { ok: false, reason: "too_many_keys" };
+  }
+  const out: Record<string, unknown> = {};
+  for (const key of keys) {
+    if (options.redact && FORBIDDEN_KEY.test(key)) {
+      ancestors.delete(input);
+      return { ok: false, reason: `forbidden_key:${key}` };
+    }
+    const desc = Object.getOwnPropertyDescriptor(input, key);
+    if (!desc || desc.get !== undefined || desc.set !== undefined) {
+      ancestors.delete(input);
+      return { ok: false, reason: "accessor" };
+    }
+    const nested = readInner(desc.value, depth + 1, ancestors, options);
+    if (!nested.ok) {
+      ancestors.delete(input);
+      return nested;
+    }
+    out[key] = nested.value;
+  }
+  ancestors.delete(input);
+  return { ok: true, value: out };
+}
+
+/**
+ * Inspect descriptors without invoking getters. Produce a detached plain copy
+ * or a structured rejection reason.
+ */
+export function readUntrustedPlainData(
+  input: unknown,
+  options?: UntrustedReadOptions,
+): UntrustedReadResult {
+  const resolved: Required<UntrustedReadOptions> = {
+    maxDepth: options?.maxDepth ?? DEFAULT_MAX_DEPTH,
+    maxKeys: options?.maxKeys ?? DEFAULT_MAX_KEYS,
+    maxArrayLength: options?.maxArrayLength ?? DEFAULT_MAX_ARRAY,
+    maxStringLength: options?.maxStringLength ?? DEFAULT_MAX_STRING,
+    redact: options?.redact ?? false,
+  };
+  return readInner(input, 0, new WeakSet<object>(), resolved);
+}
+
+export function redactBoundedText(
+  value: unknown,
+  maxLength = 240,
+): string | null {
+  if (typeof value !== "string") return null;
+  return redactString(value, maxLength);
+}
+
+export function sanitizeLateEvidenceSummary(input: unknown): string {
+  if (typeof input !== "string") {
+    return "late_result_redacted";
+  }
+  const redacted = redactString(input, 240);
+  if (!redacted.trim() || FORBIDDEN_VALUE.test(input)) {
+    // Explicit secret patterns become a canonical placeholder (no secret residue).
+    if (
+      /password\s*=|sk-|ghp_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|api[_-]?key/i.test(
+        input,
+      )
+    ) {
+      return "late_result_redacted";
+    }
+  }
+  return redacted.trim() || "late_result_redacted";
+}

diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
+import {
+  coordinateExecutionRun,
+  type CoordinateExecutionRunResult,
+} from "../application/coordinateExecutionRun";
+import {
+  createExecutionProjection,
+  type CreateExecutionProjectionResult,
+} from "../application/executionProjection";
+import {
+  assessExecutionReadiness,
+  type ExecutionReadinessAssessment,
+} from "../application/executionReadiness";
+import type { ClockPort } from "../ports/clockPort";
+import type { ExecutionRun } from "../domain/types";
+import { composeExecutionRunMemory } from "./composeExecutionRunMemory";
+import {
+  composeExecutionRunProvidersFake,
+  type ExecutionRunProviderComposition,
+} from "./composeExecutionRunProviders";
+import { assertServerOnly } from "./serverOnly";
+
+export type ExecutionRunD2D3Composition = {
+  readonly coordinate: (
+    input: unknown,
+  ) => Promise<CoordinateExecutionRunResult>;
+  /** Project a stored run by canonical runId — never accept an arbitrary caller run object. */
+  readonly projectById: (
+    runId: string,
+  ) => Promise<CreateExecutionProjectionResult>;
+  /** Assess readiness from the stored run + a freshly validated projection. */
+  readonly assessById: (
+    runId: string,
+  ) => Promise<ExecutionReadinessAssessment>;
+  readonly getById: (runId: string) => Promise<ExecutionRun | null>;
+  readonly disclosure: {
+    readonly sources: readonly ["fixture"];
+    readonly cursorLive: false;
+    readonly cursorVerified: false;
+    readonly providersLive: false;
+    readonly gitWrite: false;
+    readonly persistence: "memory_process_local";
+    readonly durable: false;
+    readonly multiInstance: false;
+    readonly restartSafe: false;
+    readonly gD2dCursor01: "NOT_CONSUMED";
+    readonly gD2dPersist01: "NOT_CONSUMED";
+  };
+};
+
+/**
+ * D2-D3 fixture-first composition. It assembles the existing single memory
+ * authority and D2-D2 ports; it does not introduce another store or runtime.
+ * Source authority is fixture-only and is not injectable.
+ */
+export function composeExecutionRunD2D3(options?: {
+  readonly providers?: ExecutionRunProviderComposition;
+  readonly clock?: ClockPort;
+  readonly clockIso?: string;
+}): ExecutionRunD2D3Composition {
+  assertServerOnly();
+  const clockIso = options?.clockIso ?? "2026-08-04T09:15:00.000Z";
+  const execution = composeExecutionRunMemory({ clockIso });
+  const providers = options?.providers ?? composeExecutionRunProvidersFake();
+  const clock: ClockPort = options?.clock ?? { nowIso: () => clockIso };
+
+  const projectById = async (
+    runId: string,
+  ): Promise<CreateExecutionProjectionResult> => {
+    const run = await execution.getById(runId);
+    if (!run) {
+      return {
+        ok: false,
+        failure: { code: "RUN_NOT_FOUND", message: "Execution run not found" },
+      };
+    }
+    const provisional = createExecutionProjection({ run });
+    if (!provisional.ok) return provisional;
+    const readiness = assessExecutionReadiness({
+      run,
+      projection: provisional.projection,
+    });
+    return createExecutionProjection({
+      run,
+      readinessAssessment: readiness,
+      openReserves: readiness.openReserves,
+    });
+  };
+
+  return {
+    coordinate: (input) =>
+      coordinateExecutionRun(input, {
+        execution,
+        providers,
+        events: providers.events,
+        clock,
+      }),
+    projectById,
+    assessById: async (runId) => {
+      const projected = await projectById(runId);
+      if (!projected.ok) {
+        return assessExecutionReadiness({});
+      }
+      const run = await execution.getById(runId);
+      if (!run) return assessExecutionReadiness({});
+      return assessExecutionReadiness({
+        run,
+        projection: projected.projection,
+      });
+    },
+    getById: execution.getById,
+    disclosure: {
+      sources: ["fixture"],
+      cursorLive: false,
+      cursorVerified: false,
+      providersLive: false,
+      gitWrite: false,
+      persistence: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+      gD2dCursor01: "NOT_CONSUMED",
+      gD2dPersist01: "NOT_CONSUMED",
+    },
+  };
+}

```

## 12. Tests permanents

Fichier : `d2d3.qa-findings.regression.test.ts` — 25 tests (matrice F01–F10).

Contenu intégral :

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
    expect(late?.summary).not.toContain("late-plain-secret");
    expect(JSON.stringify(result)).not.toContain("late-plain-secret");
  });

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

## 13. Probes QA reproduits

13/13 historiquement échoués : **PASS** (script temporaire `.tmp-sfia-review/qa-probes/revalidate-failed-probes.ts`).
P01,P02,P03,P04,P05,P06,P07,P08,P09,P10,P16,P17,P23.

## 14. Validations

- Targeted (7 fichiers) : 64/64 PASS.
- execution-run : 28 fichiers / 194 tests PASS.
- Full Vitest : 130 fichiers / 1240 tests PASS.
- typecheck : PASS.
- lint : PASS (No ESLint warnings or errors).
- build : PASS.
- governance : 73/73 PASS.
- git diff --check : clean.

## 15. Scans

Occurrences adversariales/tests uniquement pour secrets, durable:true, availableSources injectés, real/sandbox-real bloqués.
`providerInvoked = true` uniquement immédiatement avant l’appel port.
Aucun `.save`, fetch, Server Action, materialize runtime, `.only`/`.skip`, production-ready claim.

## 16. Stratégies démontrées

- Source truthfulness : fixture interne ; availableSources ignoré/absent.
- Readiness liée : booléens → not_demonstrated ; UX demonstrated seulement avec run+projection+evidence officielle complete fixture succeeded.
- Event sink fail-safe : exceptions sync/async confinées ; eventDelivery complete|degraded.
- Projection reconstruction allowlist + redaction ; reject accessors/functions/claims.
- Late evidence sanitized ; IDs/source depuis run stocké (transition).
- Preflight avant describeCapability/provider.
- Getters hostiles confinés.
- Timeout validé (entier fini >0 ≤60000).
- Paths encodés normalisés/bloqués.
- Diagnostics provider exacts.

## 17. Réserves

Transportées OPEN NOT LIFTED :
- R-QA-REV-01, R-QA-REV-02, R-QA-D2C-01, Cursor UNVERIFIED, memory process-local only, R-PR-D2D2-01.

Nouvelles :
- R-CORR-D2D3-01 — MAX_COORDINATOR_TIMEOUT_MS borne locale D2-D3, pas plateforme.
- R-CORR-D2D3-02 — Findings F-QA-D2D3-01…10 restent ouverts jusqu’à QA Critical de revalidation.

## 18. Claims démontrés / non démontrés

Démontrés : corrections techniques F01–F10 ; probes 13/13 ; tests/typecheck/lint/build/governance verts ; package ≤18 ; D2D3-04/05 non implémentés.

Non démontrés : findings CLOSED/VERIFIED ; Cursor verified ; provider real/sandbox-real ; persistence durable ; UI Delivery ; strong runtime ; RUN READY ; production-ready ; transport D3 ; publication/PR.

## 19. Freeze final

- Manifest trié : projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
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
- Count : 18
- Hash length-prefixed : `10c4d0278e10192aea7cf88b086df2ccc74252bc01e0f76e9ec1bbdbf522decb`
- Identique après validations / avant handoff.

## 20. Git Truth Check final

- Branche / HEAD inchangés.
- Staged vide.
- Aucun commit projet.
- Aucun push projet.
- Aucune PR.
- Branche distante projet absente.

## 21. Review Handoff

- Mode : publish-in-cycle L3.
- Parent attendu : `2ea275d3e6266ba409e101ba4644102b5c25493c`.
- Message : `docs(review-handoff): publish D2-D3 corrections status`.
- Publisher : `scripts/sfia/publish-review-handoff.sh`.

## 22. Verdict

D2-D3 CORRECTIONS COMPLETE —
F-QA-D2D3-01…10 ADDRESSED —
READY FOR CRITICAL QA REVALIDATION

## 23. Prochain gate candidat (non consommé)

GO QA SFIA STUDIO V3.1-D2-D3 — PROFILE CRITICAL — REVALIDATION

Instruction : ChatGPT doit consulter `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md` au commit et blob publiés par ce cycle avant toute validation des corrections ou génération du prompt de QA Critical de revalidation.
