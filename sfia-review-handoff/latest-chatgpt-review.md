# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Critical Final Follow-up Corrections

## 1. Date / heure / fuseau

2026-08-04 14:05:00 CEST (+0200)

## 2. Cycle

8 — Delivery corrective — Corrections ciblées de troisième passe

## 3. Profil

Critical

## 4. Typologie

EVOL

## 5. GO consommé

`GO CORRECTIONS SFIA STUDIO V3.1-D2-D3 — APPLY F-QA-REV2-D2D3-01 — ARBITRATE F-QA-REV2-D2D3-02`

2026-08-04 13:50 CEST (+0200)

## 6. Gates non consommés

G-D2D-CURSOR-01 ; G-D2D-PERSIST-01 ; G-D2D-D2C-01 ; GO PUBLICATION ; GO PR READINESS

## 7–8. CKC / Fallback

CKC absent. Fallback : routing, template, operating model, rules, checklist, D2-D 20–24, handoffs, package.

## 9. Sources consultées

Template/routing/OM/rules/checklist/QA standard/D2-D 20–24 ; handoffs 2ea275d3 / 6b00c678 / 5dbcee99 / 9b2d199 / 4b031e2 ; package 18 ; tests ; publisher.

## 10. Local Git Truth Check initial

Branche delivery D2-D3 ; HEAD/main `de2800aa…` ; staged vide ; remote delivery absente.

## 11–12. Handoff Revalidation 2

commit `4b031e2d7901a86c539d7207b665d150eaff41c4` ; blob `770f27f4694c9613916102c3fb74f4812bfb778e` ; parent `9b2d199…`
Verdict : CRITICAL QA REVALIDATION 2 BLOCKED — NEW BLOCKING FINDINGS DETECTED

## 13. Freeze initial

count=18 ; hash=`1643016668d777162dd0250ed9f61169c5c58cffaec97551571ade04af0b7917` ; match OUI

## 14. Findings entrants

F-QA-REV2-D2D3-01 BLOCKER OPEN ; F-QA-REV2-D2D3-02 MINOR OPEN ; F-QA-D2D3-05 / F-QA-REV-D2D3-02 PARTIALLY ADDRESSED

## 15. Arbitrage F-QA-REV2-D2D3-02

Fonction/symbole/getter/prototype non plain → rejet préflight validation ; aucun run/evidence/provider.
late_result_redacted uniquement si enveloppe valide + run engagé + résumé plain non sûr.

## 16–19. Analyse pré-implémentation / cause / stratégie

**Cause :** `token\s*[:=]` ne matche pas `"token":` (guillemet entre nom et `:`). Seul `"apiKey":` était couvert.

**Correctif :** `STRUCTURED_SENSITIVE_KEY` = clés exactes quotées + `\s*:` ; agrégé dans `containsSensitiveLateContent` avec assignations/préfixes existants.

**Anti-faux-positifs :** clés exactes entre quotes — `tokenCount`, `authorizationStatus`, `apiVersion`, etc. non matchés.

**Coordinator :** non modifié (gap 100 % dans untrustedExecutionData).

## 20. Fichiers modifiés

1. `untrustedExecutionData.ts`
2. `d2d3.qa-findings.regression.test.ts`
3. `d2d3.evidence.truthfulness.test.ts`

## 21. Contenu complet des fichiers modifiés

### untrustedExecutionData.ts

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
 * Canonical D2-D3 late-evidence / display redaction detectors.
 * Single aggregation point: containsSensitiveLateContent → sanitizeLateEvidenceSummary.
 * Fail-closed: any hit means the whole late summary becomes late_result_redacted.
 */

/** Assignments, headers, query params, and known secret prefixes. */
const FORBIDDEN_ASSIGNMENT_OR_PREFIX =
  /sk-|ghp_|github_pat_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|private\s+key|xox[baprs]-|password\s*[:=]|secret\s*[:=]|(?:access_|refresh_|client_)?token\s*[:=]|api[_-]?key\s*[:=]|authorization\s*[:=]|authorization\s*:\s*bearer\b|\bbearer\s+[^\s]+|cookie\s*[:=]|session\s*[:=]|[?&](?:access_|refresh_|client_)?token=/i;

/**
 * JSON-like structured sensitive keys (exact key names inside quotes).
 * Matches "token": / 'token': / with optional whitespace around ':'.
 * Does NOT match longer keys such as tokenCount, authorizationStatus, apiVersion.
 */
const STRUCTURED_SENSITIVE_KEY =
  /['"](?:password|secret|token|access[_-]token|refresh[_-]token|client[_-]secret|api[_-]?key|authorization|cookie|session)['"]\s*:/i;

/** Local D2-D3 late-evidence sensitive content detector (canonical). */
export function containsSensitiveLateContent(value: string): boolean {
  if (typeof value !== "string" || value.length === 0) return false;
  if (STRUCTURED_SENSITIVE_KEY.test(value)) return true;
  if (FORBIDDEN_ASSIGNMENT_OR_PREFIX.test(value)) return true;
  return false;
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
  const cleaned = value
    .replace(STRUCTURED_SENSITIVE_KEY, '"[REDACTED_KEY]":')
    .replace(FORBIDDEN_ASSIGNMENT_OR_PREFIX, "[REDACTED]");
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
    if (options.redact && containsSensitiveLateContent(input)) {
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

### d2d3.qa-findings.regression.test.ts

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

  it.each([
    '{"token":"value"}',
    '{"token":123}',
    '{"token":true}',
    '{"token":null}',
    '{"token":[]}',
    '{"token":{}}',
    '{"access_token":"value"}',
    '{"access-token":"value"}',
    '{"refresh_token":"value"}',
    '{"refresh-token":"value"}',
    '{"client_secret":"value"}',
    '{"client-secret":"value"}',
    '{"apiKey":"value"}',
    '{"api_key":"value"}',
    '{"api-key":"value"}',
    '{"authorization":"Bearer value"}',
    '{"cookie":"value"}',
    '{"session":"value"}',
    "'token':'value'",
    '{"ToKeN":"value"}',
    '{"token" : "value"}',
    '{"token"\t:\t"value"}',
    '{\n"token": "value"\n}',
    `${"a".repeat(250)}{"token":"secret-after-240"}`,
  ])(
    "F-QA-REV2-D2D3-01 — structured secret %j → late_result_redacted",
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
          correlationId: "corr:rev2:01",
          intentId: "intent:rev2:01",
        },
        context: fixture.context,
        providerRequest: {
          correlationId: "corr:rev2:01",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "late" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
        lateEvidenceSummary: summary,
      });
      expect(result.run?.state).toBe("cancelled");
      expect(result.lateEvidenceRecorded).toBe(true);
      expect(result.run?.evidence?.at(-1)).toMatchObject({
        late: true,
        official: true,
        source: "fixture",
        summary: "late_result_redacted",
      });
      const blob = JSON.stringify(result);
      expect(result.run?.evidence?.at(-1)?.summary).toBe("late_result_redacted");
      if (summary.includes("secret-after-240")) {
        expect(blob).not.toContain("secret-after-240");
      }
      if (summary.includes("Bearer value")) {
        expect(blob).not.toContain("Bearer value");
      }
      expect(blob).not.toMatch(
        /['"](?:password|secret|token|access[_-]token|refresh[_-]token|client[_-]secret|api[_-]?key|authorization|cookie|session)['"]\s*:\s*[^,\}\s]/i,
      );
      const projection = createExecutionProjection({
        run: result.run!,
        openReserves: [],
      });
      expect(projection.ok).toBe(true);
      expect(JSON.stringify(projection)).not.toContain("secret-after-240");
      expect(JSON.stringify(projection)).not.toContain("Bearer value");
    },
  );

  it.each([
    '{"status":"complete"}',
    '{"tokenCount":12}',
    '{"authorizationStatus":"missing"}',
    '{"sessionCount":1}',
    '{"cookiePolicy":"strict"}',
    '{"apiVersion":"v1"}',
  ])(
    "F-QA-REV2-D2D3-01 — non-sensitive structured %j preserved (not over-redacted)",
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
          correlationId: "corr:rev2:safe",
          intentId: "intent:rev2:safe",
        },
        context: fixture.context,
        providerRequest: {
          correlationId: "corr:rev2:safe",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "late" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
        lateEvidenceSummary: summary,
      });
      expect(result.run?.state).toBe("cancelled");
      expect(result.lateEvidenceRecorded).toBe(true);
      expect(result.run?.evidence?.at(-1)?.summary).toBe(summary);
      expect(result.run?.evidence?.at(-1)?.summary).not.toBe(
        "late_result_redacted",
      );
    },
  );

  it.each([
    {
      name: "function",
      build: () => {
        const input: Record<string, unknown> = {
          intent: null,
          context: null,
          providerRequest: null,
          timeoutMs: 50,
        };
        // placeholders replaced below
        return { kind: "function" as const, late: (() => "fn") as unknown };
      },
    },
    {
      name: "symbol",
      build: () => ({ kind: "symbol" as const, late: Symbol("x") as unknown }),
    },
    {
      name: "getter",
      build: () => ({ kind: "getter" as const }),
    },
    {
      name: "odd_prototype",
      build: () => ({ kind: "odd_prototype" as const }),
    },
  ])(
    "F-QA-REV2-D2D3-02 — arbitrated fail-closed hostile envelope ($name)",
    async ({ name, build }) => {
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
      const built = build();
      const coordInput: Record<string, unknown> = {
        intent: {
          ...fixture.intent,
          correlationId: "corr:rev2:02",
          intentId: "intent:rev2:02",
        },
        context: fixture.context,
        providerRequest: {
          correlationId: "corr:rev2:02",
          lane: "ai",
          operation: "complete",
          messages: [{ role: "user", content: "must not run" }],
          timeoutMs: 50,
        },
        timeoutMs: 50,
      };
      if (built.kind === "function" || built.kind === "symbol") {
        coordInput.lateEvidenceSummary = built.late;
      } else if (built.kind === "getter") {
        Object.defineProperty(coordInput, "lateEvidenceSummary", {
          enumerable: true,
          configurable: true,
          get() {
            return "hostile-getter-value";
          },
        });
      } else {
        // Nested non-plain object forces envelope untrusted rejection.
        coordInput.lateEvidenceSummary = Object.assign(
          Object.create({ polluted: true }),
          { nested: "hostile-proto-value" },
        );
      }
      const result = await composition.coordinate(coordInput as never);
      expect(result.ok).toBe(false);
      expect(result.run).toBeUndefined();
      expect(result.stateTrace).toEqual([]);
      expect(result.providerAttempted).toBe(false);
      expect(result.providerInvoked).toBe(false);
      expect(result.providerCompleted).toBe(false);
      expect(result.lateEvidenceRecorded).toBe(false);
      expect(describeCalls).toBe(0);
      expect(completeCalls).toBe(0);
      if (result.ok) throw new Error("expected failure");
      expect(result.failure.family).toBe("validation");
      expect(JSON.stringify(result)).not.toContain("hostile-getter-value");
      expect(JSON.stringify(result)).not.toContain("hostile-proto-value");
    },
  );
});
```

### d2d3.evidence.truthfulness.test.ts

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
    '{"token":"structured-secret-z9"}',
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
      expect(JSON.stringify(result)).not.toContain("structured-secret-z9");
    },
  );

  it('preserves non-sensitive structured late summary {"status":"complete"}', async () => {
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
    const summary = '{"status":"complete"}';
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
      summary,
    });
  });
});
```

## 22. Diff complet

Delta utile vs freeze `16430166…` : uniquement les trois fichiers §20. Package count reste 18.

## 23–24. Tests permanents

Sections F-QA-REV2-D2D3-01 (structured secrets + safe near-keys) et F-QA-REV2-D2D3-02 (arbitrage fail-closed). Contenu intégral §21.

## 25–26. P-REV2-D2D3-09 / P-REV2-D2D3-12

| Probe | Historique | Contrat | Observé |
|---|---|---|---|
| P-REV2-D2D3-09 | FAIL (`{"token":"value"}` persisté) | late_result_redacted | **PASS** |
| P-REV2-D2D3-12 | FAIL vs late_result_redacted | **Arbitrage** : rejet préflight | **PASS** (requalifié) |

## 27–28. Probes P-CORR3 (contenu complet)

```typescript
/**
 * Temporary final follow-up correction probes (P-CORR3).
 * Not part of the delivery package. Independent of permanent tests.
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

type Verdict = "PASS" | "FAIL";
type Probe = {
  id: string;
  objective: string;
  expected: string;
  observed: unknown;
  verdict: Verdict;
};

const probes: Probe[] = [];
const clock = { nowIso: () => "2026-08-04T12:50:00.000Z" };
const OUT = path.resolve(
  process.cwd(),
  ".tmp-sfia-review/final-follow-up-probes/probe-results.json",
);

function record(
  id: string,
  objective: string,
  expected: string,
  observed: unknown,
  verdict: Verdict,
) {
  probes.push({ id, objective, expected, observed, verdict });
}

function fixtureInput(correlationId: string) {
  const f = getFixture("nominal");
  return {
    intent: {
      ...f.intent,
      intentId: `intent:${correlationId}`,
      correlationId,
    },
    context: f.context,
    providerRequest: {
      correlationId,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "corr3 probe" }],
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
      events: { emit: (e) => events?.push(e) },
    }),
  });
}

async function lateCase(summary: unknown, marker?: string | null) {
  const events: ExecutionEvent[] = [];
  const composition = await cancelledComposition(events);
  const result = await composition.coordinate({
    ...fixtureInput(`corr3:${String(Math.random()).slice(2, 10)}`),
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
    marker != null && Object.values(surfaces).some((s) => s.includes(marker));
  return {
    state: result.run?.state,
    lateRecorded: result.lateEvidenceRecorded,
    summary: late?.summary,
    late: late?.late,
    official: late?.official,
    source: late?.source,
    leaked,
    ok: result.ok,
    runAbsent: result.run === undefined,
    providerInvoked: result.providerInvoked,
  };
}

async function main() {
  // P-CORR3-D2D3-01 structured JSON secrets
  {
    const secrets = [
      ['{"token":"corr3-tok-z9"}', "corr3-tok-z9"],
      ['{"token":123}', null],
      ['{"token":true}', null],
      ['{"token":null}', null],
      ['{"token":[]}', null],
      ['{"token":{}}', null],
      ['{"access_token":"corr3-at-z9"}', "corr3-at-z9"],
      ['{"access-token":"corr3-at2-z9"}', "corr3-at2-z9"],
      ['{"refresh_token":"corr3-rt-z9"}', "corr3-rt-z9"],
      ['{"refresh-token":"corr3-rt2-z9"}', "corr3-rt2-z9"],
      ['{"client_secret":"corr3-cs-z9"}', "corr3-cs-z9"],
      ['{"client-secret":"corr3-cs2-z9"}', "corr3-cs2-z9"],
      ['{"apiKey":"corr3-ak-z9"}', "corr3-ak-z9"],
      ['{"api_key":"corr3-ak2-z9"}', "corr3-ak2-z9"],
      ['{"api-key":"corr3-ak3-z9"}', "corr3-ak3-z9"],
      ['{"authorization":"Bearer corr3-auth-z9"}', "corr3-auth-z9"],
      ['{"cookie":"corr3-ck-z9"}', "corr3-ck-z9"],
      ['{"session":"corr3-ss-z9"}', "corr3-ss-z9"],
      ["'token':'corr3-sq-z9'", "corr3-sq-z9"],
      ['{"ToKeN":"corr3-case-z9"}', "corr3-case-z9"],
      ['{"token" : "corr3-sp-z9"}', "corr3-sp-z9"],
      ['{\n"token": "corr3-ml-z9"\n}', "corr3-ml-z9"],
      [`${"a".repeat(250)}{"token":"corr3-trunc-z9"}`, "corr3-trunc-z9"],
    ] as const;
    const rows = [];
    for (const [summary, marker] of secrets) {
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
        summaryOut: obs.summary,
        leaked: obs.leaked,
      });
    }
    record(
      "P-CORR3-D2D3-01",
      "Structured JSON secrets",
      "all → late_result_redacted; no leak",
      rows,
      rows.every((r) => r.pass) ? "PASS" : "FAIL",
    );
  }

  // P-CORR3-D2D3-02 exact-key discrimination
  {
    const sensitive = [
      ['{"token":"disc-tok-z9"}', "disc-tok-z9"],
      ['{"password":"disc-pw-z9"}', "disc-pw-z9"],
      ['{"authorization":"disc-az-z9"}', "disc-az-z9"],
    ] as const;
    const safe = [
      '{"status":"complete"}',
      '{"tokenCount":12}',
      '{"authorizationStatus":"missing"}',
      '{"sessionCount":1}',
      '{"cookiePolicy":"strict"}',
      '{"apiVersion":"v1"}',
    ];
    const rows = [];
    for (const [s, m] of sensitive) {
      const obs = await lateCase(s, m);
      rows.push({
        kind: "sensitive",
        s,
        pass: obs.summary === "late_result_redacted" && !obs.leaked,
        summary: obs.summary,
      });
    }
    for (const s of safe) {
      const obs = await lateCase(s, null);
      rows.push({
        kind: "safe",
        s,
        pass: obs.summary === s && obs.summary !== "late_result_redacted",
        summary: obs.summary,
      });
    }
    record(
      "P-CORR3-D2D3-02",
      "Exact-key discrimination",
      "sensitive redacted; near-keys preserved",
      rows,
      rows.every((r) => r.pass) ? "PASS" : "FAIL",
    );
  }

  // P-CORR3-D2D3-03 arbitrated hostile envelope
  {
    const cases: Array<{ name: string; apply: (input: Record<string, unknown>) => void }> = [
      {
        name: "function",
        apply: (input) => {
          input.lateEvidenceSummary = () => "fn";
        },
      },
      {
        name: "symbol",
        apply: (input) => {
          input.lateEvidenceSummary = Symbol("x");
        },
      },
      {
        name: "getter",
        apply: (input) => {
          Object.defineProperty(input, "lateEvidenceSummary", {
            enumerable: true,
            get() {
              return "hostile-corr3";
            },
          });
        },
      },
      {
        name: "odd_prototype",
        apply: (input) => {
          input.lateEvidenceSummary = Object.assign(Object.create({ p: true }), {
            nested: "hostile-corr3-proto",
          });
        },
      },
    ];
    const rows = [];
    for (const c of cases) {
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
      const input: Record<string, unknown> = { ...fixtureInput(`corr3:h:${c.name}`) };
      c.apply(input);
      const result = await composition.coordinate(input as never);
      const pass =
        result.ok === false &&
        result.run === undefined &&
        result.stateTrace.length === 0 &&
        result.providerAttempted === false &&
        result.providerInvoked === false &&
        result.providerCompleted === false &&
        result.lateEvidenceRecorded === false &&
        describe === 0 &&
        complete === 0 &&
        events.length === 0 &&
        !JSON.stringify(result).includes("hostile-corr3");
      rows.push({
        name: c.name,
        pass,
        ok: result.ok,
        describe,
        complete,
        events: events.length,
        failureFamily: result.ok ? null : result.failure.family,
      });
    }
    record(
      "P-CORR3-D2D3-03",
      "Arbitrated hostile envelope",
      "preflight reject; no run/evidence/provider/event",
      rows,
      rows.every((r) => r.pass) ? "PASS" : "FAIL",
    );
  }

  // P-CORR3-D2D3-04 leakage surfaces (+ P-REV2-09/12 reproduction)
  {
    const obs = await lateCase('{"token":"leak-surface-corr3-z9"}', "leak-surface-corr3-z9");
    const rev209 =
      obs.summary === "late_result_redacted" &&
      obs.leaked === false &&
      obs.state === "cancelled";
    record(
      "P-REV2-D2D3-09",
      "Reproduce structured token JSON (historical FAIL → expected PASS)",
      "summary late_result_redacted; no leak",
      obs,
      rev209 ? "PASS" : "FAIL",
    );

    // P-REV2-12 requalified per Morris arbitration
    const base = composeExecutionRunProvidersFake();
    let describe = 0;
    let complete = 0;
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
      }),
    });
    const fnResult = await composition.coordinate({
      ...fixtureInput("corr3:rev212:fn"),
      lateEvidenceSummary: (() => "x") as never,
    });
    const symResult = await composition.coordinate({
      ...fixtureInput("corr3:rev212:sym"),
      lateEvidenceSummary: Symbol("x") as never,
    });
    const rev212 =
      fnResult.ok === false &&
      fnResult.run === undefined &&
      symResult.ok === false &&
      symResult.run === undefined &&
      describe === 0 &&
      complete === 0;
    record(
      "P-REV2-D2D3-12",
      "Requalified: function/symbol → preflight reject (arbitration)",
      "historical expected late_result_redacted; arbitrated: reject, no evidence",
      {
        historicalExpected: "late_result_redacted on cancelled terminal",
        arbitratedExpected: "preflight validation reject; no run/evidence",
        fn: { ok: fnResult.ok, run: fnResult.run },
        sym: { ok: symResult.ok, run: symResult.run },
        describe,
        complete,
      },
      rev212 ? "PASS" : "FAIL",
    );

    const markers = [
      "leak-surface-corr3-z9",
      "corr3-tok-z9",
      "corr3-auth-z9",
    ];
    const leakRows = [];
    for (const m of markers) {
      const o = await lateCase(`{"token":"${m}"}`, m);
      leakRows.push({
        marker: m,
        pass: o.leaked === false && o.summary === "late_result_redacted",
        leaked: o.leaked,
      });
    }
    record(
      "P-CORR3-D2D3-04",
      "Leakage surfaces",
      "no sensitive markers in any surface",
      leakRows,
      leakRows.every((r) => r.pass) ? "PASS" : "FAIL",
    );
  }

  // P-CORR3-NONREG
  {
    const results: Array<{ id: string; pass: boolean }> = [];
    {
      const core = composeExecutionRunMemory({ clockIso: clock.nowIso() });
      const providers = composeExecutionRunProvidersFake();
      const result = await coordinateExecutionRun(
        {
          ...fixtureInput("corr3:nr:f01"),
          intent: {
            ...fixtureInput("corr3:nr:f01").intent,
            requestedSource: "real",
          },
          context: {
            ...fixtureInput("corr3:nr:f01").context,
            declaredSource: "real",
          },
          availableSources: ["fixture", "real"],
        } as never,
        { execution: core, providers, events: providers.events, clock },
      );
      results.push({ id: "F01", pass: !result.ok && !result.providerInvoked });
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
      const { composition } = {
        composition: composeExecutionRunD2D3(),
      };
      const r = await composition.coordinate({
        ...fixtureInput("corr3:nr:corr"),
        providerRequest: {
          ...fixtureInput("corr3:nr:corr").providerRequest,
          correlationId: "corr3:nr:other",
        },
      });
      results.push({
        id: "REV01",
        pass: !r.ok && r.run === undefined && !r.providerInvoked,
      });
    }
    {
      const r = await composeExecutionRunD2D3().coordinate({
        ...fixtureInput("corr3:nr:f09"),
        timeoutMs: MAX_COORDINATOR_TIMEOUT_MS + 1,
      });
      results.push({ id: "F09", pass: !r.ok && r.run === undefined });
    }
    {
      const pathCheck = normalizeCanonicalPath(
        "projects/sfia-studio/%2e%2e/.env",
      );
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
      "P-CORR3-NONREG",
      "Non-regression sample",
      "F01/F02/REV01/F09/F10 PASS",
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
  console.log(
    JSON.stringify(
      {
        pass: summary.pass,
        fail: summary.fail,
        probes: probes.map((p) => ({ id: p.id, verdict: p.verdict })),
      },
      null,
      2,
    ),
  );
  if (summary.fail > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

## 29. Résultats probes

```json
{
  "generatedAt": "2026-08-04T12:01:07.659Z",
  "pass": 7,
  "fail": 0,
  "probes": [
    {
      "id": "P-CORR3-D2D3-01",
      "objective": "Structured JSON secrets",
      "expected": "all \u2192 late_result_redacted; no leak",
      "observed": [
        {
          "summary": "{\"token\":\"corr3-tok-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"token\":123}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"token\":true}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"token\":null}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"token\":[]}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"token\":{}}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"access_token\":\"corr3-at-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"access-token\":\"corr3-at2-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"refresh_token\":\"corr3-rt-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"refresh-token\":\"corr3-rt2-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"client_secret\":\"corr3-cs-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"client-secret\":\"corr3-cs2-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"apiKey\":\"corr3-ak-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"api_key\":\"corr3-ak2-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"api-key\":\"corr3-ak3-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"authorization\":\"Bearer corr3-auth-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"cookie\":\"corr3-ck-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"session\":\"corr3-ss-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "'token':'corr3-sq-z9'",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"ToKeN\":\"corr3-case-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\"token\" : \"corr3-sp-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "{\n\"token\": \"corr3-ml-z9\"\n}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        },
        {
          "summary": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{\"token\":\"corr3-trunc-z9\"}",
          "pass": true,
          "summaryOut": "late_result_redacted",
          "leaked": false
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-CORR3-D2D3-02",
      "objective": "Exact-key discrimination",
      "expected": "sensitive redacted; near-keys preserved",
      "observed": [
        {
          "kind": "sensitive",
          "s": "{\"token\":\"disc-tok-z9\"}",
          "pass": true,
          "summary": "late_result_redacted"
        },
        {
          "kind": "sensitive",
          "s": "{\"password\":\"disc-pw-z9\"}",
          "pass": true,
          "summary": "late_result_redacted"
        },
        {
          "kind": "sensitive",
          "s": "{\"authorization\":\"disc-az-z9\"}",
          "pass": true,
          "summary": "late_result_redacted"
        },
        {
          "kind": "safe",
          "s": "{\"status\":\"complete\"}",
          "pass": true,
          "summary": "{\"status\":\"complete\"}"
        },
        {
          "kind": "safe",
          "s": "{\"tokenCount\":12}",
          "pass": true,
          "summary": "{\"tokenCount\":12}"
        },
        {
          "kind": "safe",
          "s": "{\"authorizationStatus\":\"missing\"}",
          "pass": true,
          "summary": "{\"authorizationStatus\":\"missing\"}"
        },
        {
          "kind": "safe",
          "s": "{\"sessionCount\":1}",
          "pass": true,
          "summary": "{\"sessionCount\":1}"
        },
        {
          "kind": "safe",
          "s": "{\"cookiePolicy\":\"strict\"}",
          "pass": true,
          "summary": "{\"cookiePolicy\":\"strict\"}"
        },
        {
          "kind": "safe",
          "s": "{\"apiVersion\":\"v1\"}",
          "pass": true,
          "summary": "{\"apiVersion\":\"v1\"}"
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-CORR3-D2D3-03",
      "objective": "Arbitrated hostile envelope",
      "expected": "preflight reject; no run/evidence/provider/event",
      "observed": [
        {
          "name": "function",
          "pass": true,
          "ok": false,
          "describe": 0,
          "complete": 0,
          "events": 0,
          "failureFamily": "validation"
        },
        {
          "name": "symbol",
          "pass": true,
          "ok": false,
          "describe": 0,
          "complete": 0,
          "events": 0,
          "failureFamily": "validation"
        },
        {
          "name": "getter",
          "pass": true,
          "ok": false,
          "describe": 0,
          "complete": 0,
          "events": 0,
          "failureFamily": "validation"
        },
        {
          "name": "odd_prototype",
          "pass": true,
          "ok": false,
          "describe": 0,
          "complete": 0,
          "events": 0,
          "failureFamily": "validation"
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-09",
      "objective": "Reproduce structured token JSON (historical FAIL \u2192 expected PASS)",
      "expected": "summary late_result_redacted; no leak",
      "observed": {
        "state": "cancelled",
        "lateRecorded": true,
        "summary": "late_result_redacted",
        "late": true,
        "official": true,
        "source": "fixture",
        "leaked": false,
        "ok": false,
        "runAbsent": false,
        "providerInvoked": true
      },
      "verdict": "PASS"
    },
    {
      "id": "P-REV2-D2D3-12",
      "objective": "Requalified: function/symbol \u2192 preflight reject (arbitration)",
      "expected": "historical expected late_result_redacted; arbitrated: reject, no evidence",
      "observed": {
        "historicalExpected": "late_result_redacted on cancelled terminal",
        "arbitratedExpected": "preflight validation reject; no run/evidence",
        "fn": {
          "ok": false
        },
        "sym": {
          "ok": false
        },
        "describe": 0,
        "complete": 0
      },
      "verdict": "PASS"
    },
    {
      "id": "P-CORR3-D2D3-04",
      "objective": "Leakage surfaces",
      "expected": "no sensitive markers in any surface",
      "observed": [
        {
          "marker": "leak-surface-corr3-z9",
          "pass": true,
          "leaked": false
        },
        {
          "marker": "corr3-tok-z9",
          "pass": true,
          "leaked": false
        },
        {
          "marker": "corr3-auth-z9",
          "pass": true,
          "leaked": false
        }
      ],
      "verdict": "PASS"
    },
    {
      "id": "P-CORR3-NONREG",
      "objective": "Non-regression sample",
      "expected": "F01/F02/REV01/F09/F10 PASS",
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
          "id": "REV01",
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

## 30–31. Surfaces de fuite / discrimination

P-CORR3-04 PASS — aucune fuite.
P-CORR3-02 PASS — clés sensibles redacted ; tokenCount/authorizationStatus/sessionCount/cookiePolicy/apiVersion préservés.

## 32. Non-régression

F01–04/06–10 et F-QA-REV-D2D3-01 : VERIFIED — CLOSURE RECOMMENDED (transporté, non fermé).
P-CORR3-NONREG PASS.

## 33–39. Validations observées

| Suite | Observé |
|---|---|
| regression | **95** PASS (baseline 61) |
| targeted (reg+evidence) | **105** PASS |
| execution-run | 28 / **270** PASS (baseline 234) |
| typecheck | PASS |
| lint | PASS (0 warnings) |
| build | PASS |
| full Vitest | 130 / **1316** PASS (baseline 1280) |
| governance | **73** PASS |

## 40. Scans

STRUCTURED_SENSITIVE_KEY + FORBIDDEN_ASSIGNMENT_OR_PREFIX uniques dans untrustedExecutionData.
Occurrences token/apiKey JSON dans tests adversariaux uniquement.
Pas de `.only`/`.skip`/fetch/Server Action.
Pas de durable=true hors tests hostiles F04.

## 41. Matrice des findings

### F-QA-REV2-D2D3-01 — BLOCKER
Correction STRUCTURED_SENSITIVE_KEY ; tests + P-CORR3-01/04 + P-REV2-09 PASS.
**Statut proposé : ADDRESSED — REVALIDATION REQUIRED**

### F-QA-REV2-D2D3-02 — MINOR
Arbitrage appliqué (tests documentent rejet préflight). P-CORR3-03 + P-REV2-12 PASS.
**Statut proposé : ARBITRATED — ACCEPTED FAIL-CLOSED CONTRACT — REVALIDATION REQUIRED**

### F-QA-D2D3-05 / F-QA-REV-D2D3-02
Complétés par la couverture JSON structurée.
**Statut proposé : ADDRESSED — REVALIDATION REQUIRED**

## 42. Réserves

Héritées OPEN NOT LIFTED : R-QA-REV-01/02, R-QA-D2C-01, Cursor UNVERIFIED, memory process-local, R-PR-D2D2-01.
R-CORR-D2D3-01/02 OPEN.
Findings ouverts jusqu’à revalidation : F05, F-REV-D2D3-02, F-REV2-01, F-REV2-02.

## 43. Claims démontrés

- `{"token":"value"}` et clés structurées listées → late_result_redacted
- discrimination exact-key (tokenCount etc. préservés)
- arbitrage hostile envelope documenté et testé
- non-régression findings revalidés
- package 18 chemins ; D2D3-04/05 bloquées

## 44. Claims non démontrés

- findings CLOSED/VERIFIED/LIFTED
- QA Revalidation 3
- Cursor/provider live/durable/RUN READY

## 45. Freeze final

count=18
hash=`cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f`
(initial `16430166…` → final distinct OUI)

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

## 46–47. Git Truth final / absence mutation projet

staged vide ; remote delivery absente ; aucun commit/push/PR projet.

## 48. Review Handoff

parent attendu `4b031e2…` ; message `docs(review-handoff): publish D2-D3 final follow-up corrections status`

## 49. Verdict unique

D2-D3 FINAL FOLLOW-UP CORRECTIONS COMPLETE —
F-QA-REV2-D2D3-01 ADDRESSED —
F-QA-REV2-D2D3-02 ARBITRATED —
READY FOR CRITICAL QA REVALIDATION 3

## 50. Décision suivante candidate

`GO QA SFIA STUDIO V3.1-D2-D3 — PROFILE CRITICAL — REVALIDATION 3`

candidate uniquement — non consommé

ChatGPT doit consulter sfia/review-handoff → latest-chatgpt-review.md au commit/blob publiés avant QA Revalidation 3.
