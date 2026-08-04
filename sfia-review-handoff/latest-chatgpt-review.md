# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Critical Follow-up Corrections

## 1. Date / heure / fuseau

2026-08-04 13:25:00 CEST (+0200)

## 2. Cycle

8 — Delivery corrective après QA — Corrections ciblées de deuxième passe

## 3. Profil

Critical

## 4. Typologie

EVOL

## 5. GO consommé

`GO CORRECTIONS SFIA STUDIO V3.1-D2-D3 — APPLY F-QA-D2D3-05 + F-QA-REV-D2D3-01/02`

Date/heure : 2026-08-04 13:03 CEST (+0200)

## 6. Gates non consommés

- G-D2D-CURSOR-01 — Cursor UNVERIFIED ; D2D3-04 BLOCKED
- G-D2D-PERSIST-01 — process-local only ; D2D3-05 BLOCKED
- G-D2D-D2C-01 — R-QA-D2C-01 OPEN
- GO PUBLICATION — non consommé
- GO PR READINESS — non consommé

## 7. CKC recherché et absent

CKC recherché : oui
Contrat détaillé trouvé : non
Statut : absent

## 8. Fallback

routing guide ; template canonique v2.6 ; operating model ; rules and guardrails ; validation checklist ; documents D2-D 20–24 ; handoffs QA / Corrections / revalidation ; package local réel.

## 9. Sources consultées

1. prompts/templates/sfia-cycle-execution-template.md
2. method/sfia-fast-track/core/sfia-cycle-routing-guide.md
3. method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
4. method/sfia-fast-track/core/sfia-rules-and-guardrails.md
5. method/sfia-fast-track/checklists/sfia-validation-checklist.md
6. method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md
7. documents D2-D 20–24
8. handoff QA initial `2ea275d3e6266ba409e101ba4644102b5c25493c`
9. handoff Corrections `6b00c6785f3a2b317372c2f1d1450f5ce95fb26f`
10. handoff QA revalidation `5dbcee99f727d34761a784b5388f21d29d9c440c` / blob `e4c6d6bad6797a70bc82affbf05d4c20e5a6f3dc`
11. 18 fichiers package local
12. dépendances D2-D1/D2-D2 appelées
13. tests execution-run
14. scripts/sfia/publish-review-handoff.sh
15. scripts/sfia/README.md

## 10. Local Git Truth Check initial

- toplevel : worktree delivery-d2-d1
- branche : `delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination`
- HEAD : `de2800aa836bb8221dc2912414126b7a3e6a1f58`
- origin/main : `de2800aa836bb8221dc2912414126b7a3e6a1f58`
- upstream : aucun
- branche distante projet : absente
- staged : vide
- package hors `.tmp-sfia-review/**` uniquement

## 11–12. Handoff QA de revalidation

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- commit : `5dbcee99f727d34761a784b5388f21d29d9c440c`
- blob : `e4c6d6bad6797a70bc82affbf05d4c20e5a6f3dc`
- parent : `6b00c6785f3a2b317372c2f1d1450f5ce95fb26f`
- titre : ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Critical QA Revalidation
- verdict : D2-D3 CRITICAL QA REVALIDATION BLOCKED — NEW BLOCKING FINDINGS DETECTED — MORRIS CORRECTION DECISION REQUIRED

## 13. Freeze initial

- count : 18
- SHA-256 length-prefixed : `10c4d0278e10192aea7cf88b086df2ccc74252bc01e0f76e9ec1bbdbf522decb`
- base : `de2800aa836bb8221dc2912414126b7a3e6a1f58`
- correspondance exacte avant modification : OUI

## 14. Findings ciblés

| Finding | Sévérité entrante | Statut entrant |
|---|---|---|
| F-QA-D2D3-05 | BLOCKER initial | PARTIALLY ADDRESSED |
| F-QA-REV-D2D3-01 | MAJOR | ouvert (régression P-QA-D2D3-19) |
| F-QA-REV-D2D3-02 | BLOCKER | ouvert (P-REV-D2D3-08) |

## 15. Findings précédemment revalidés (non fermés ici)

F-QA-D2D3-01/02/03/04/06/07/08/09/10 — statut transporté : **VERIFIED — CLOSURE RECOMMENDED** (non fermés ; non modifiés ; non-régression PASS).

## 16. Analyse des causes racines (pré-implémentation)

### F-QA-REV-D2D3-01
**Cause racine exacte :** dans `preflightCoordinateInput`, après `readUntrustedPlainData`, la reconstruction faisait `correlationId: intent.correlationId` (ou `correlationId` du intent) **avant** toute comparaison avec la valeur originale du `providerRequest`. Le mismatch était effacé ; `requestMatchesRun` voyait toujours une identité cohérente ; le provider était invoqué (`state=succeeded`, `providerInvoked=true` sur P-QA-D2D3-19).

**Séquence actuelle (avant correction) :**
1. lire enveloppe unknown
2. lire providerRequest plain
3. validateUntrustedProviderRequest
4. **réécrire** `correlationId` = intent
5. poursuivre capability / create / invoke
6. requestMatchesRun toujours OK

**Ordre cible corrigé :**
1. lire enveloppe
2. copie plain détachée
3. lire correlationId original
4. exiger string non vide
5. comparer strictement à intent.correlationId
6. comparer lane originale à intent.requestedLane
7. rejeter toute divergence (pas de run, pas describe, pas provider)
8. seulement ensuite rebuild canonique (timeoutMs) en **conservant** le correlationId validé
9. validation provider existante
10. capability / create / invoke

### F-QA-D2D3-05 / F-QA-REV-D2D3-02
**Cause racine :** `sanitizeLateEvidenceSummary` / `FORBIDDEN_VALUE` couvraient `password=`, `sk-`, `ghp_`, private key et quelques tokens forts, mais **pas** `token=`, `apiKey=`, `Authorization Bearer` et variantes (espaces, `:`, JSON-like, query string, casse).

**Motifs déjà détectés (avant) :** password=, sk-, ghp_, BEGIN PRIVATE KEY, xox*, api_key partiel inconsistently.

**Motifs manquants :** token=/:, apiKey=/:, api_key, api-key, authorization, Bearer, access_token, refresh_token, client_secret, cookie, session, github_pat_, query `?token=`/`&token=`, JSON `"apiKey":"…"`, private key phrase.

**Stratégie fail-closed :** une seule source `containsSensitiveLateContent` / `FORBIDDEN_VALUE` dans `untrustedExecutionData.ts` ; détection sur chaîne originale avant troncature ; tout hit → exact `late_result_redacted` ; re-check après borne ; non-string → `late_result_redacted` ; jamais logger la brute.

## 17. Plan correctif

| Finding | Fichier | Test permanent |
|---|---|---|
| F-QA-REV-D2D3-01 | coordinateExecutionRun.ts | d2d3.qa-findings.regression + d2d3.negative.resilience |
| F-QA-D2D3-05 / F-QA-REV-D2D3-02 | untrustedExecutionData.ts | d2d3.qa-findings.regression + d2d3.evidence.truthfulness |

**Preuve neuf findings non touchés :** aucun changement dans policy/providerBoundary/sandbox/readiness/projection/compose ; tests F01–04/06–10 inchangés dans leur logique et PASS ; probe P-CORR2-NONREG PASS.

**Périmètre final :** 5 fichiers max, mêmes 18 chemins package.

**Anti-claims :** pas CLOSED/VERIFIED/LIFTED ; pas Cursor/provider live ; pas durable ; pas D2D3-04/05 ; pas commit/PR.

## 18. Fichiers modifiés

- `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts`

## 19. Sections modifiées complètes

### coordinateExecutionRun.ts — preflight providerRequest

```typescript
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
```

### untrustedExecutionData.ts — detector

```typescript
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

```

### untrustedExecutionData.ts — sanitizeLateEvidenceSummary

```typescript
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

## 20. Diff complet (fichiers modifiés cette passe)

Les cinq fichiers listés §18 constituent le delta utile de cette passe par rapport au freeze `10c4d027…`. Les 13 autres chemins du manifest sont inchangés.

Contenu intégral des cinq fichiers inclus §19 (sections prod) et §22 (tests).

## 21. Tests permanents ajoutés ou renforcés

- F-QA-REV-D2D3-01 : match nominal + 5 variantes rejet (different/empty/absent/hostile_getter/odd_prototype)
- F-QA-D2D3-05 / F-QA-REV-D2D3-02 : matrice ≥25 motifs late secrets → `late_result_redacted`
- F05 existant renforcé : `summary === late_result_redacted`
- evidence.truthfulness : contrat redaction late officielle (token/apiKey/Bearer)
- negative.resilience : non-régression correlation mismatch pré-engagement

## 22. Contenu complet des tests modifiés

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

### d2d3.negative.resilience.test.ts

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

## 23–26. Probes

Source temporaire : `.tmp-sfia-review/corrections-follow-up-probes/follow-up-probes.ts`

| Probe | Verdict | Notes |
|---|---|---|
| P-QA-D2D3-19 | **PASS** | rejet avant provider ; run absent ; describe=0 ; complete=0 |
| P-REV-D2D3-08 | **PASS** | motifs étendus sans fuite ; terminal cancelled ; source=fixture |
| P-CORR2-D2D3-01 | **PASS** | 8 variantes correlation |
| P-CORR2-D2D3-02 | **PASS** | variantes late secrets |
| P-CORR2-NONREG | **PASS** | F01/02/03/04/06/07/08/09/10 |

Synthèse probes : pass=5 fail=0

## 27. Non-régression F-01/02/03/04/06/07/08/09/10

Tous PASS via suite permanente (61 tests regression incluant F01–10) + P-CORR2-NONREG.
Statut rapporté inchangé : VERIFIED — CLOSURE RECOMMENDED (non fermés).

## 28–34. Validations observées

| Suite | Résultat |
|---|---|
| regression permanente | 61 tests PASS (baseline 25 → étendu) |
| targeted corrections (3 fichiers) | 85 tests PASS (baseline 64 → étendu) |
| execution-run | 28 fichiers / **234** tests PASS (baseline 194) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| full Vitest | 130 fichiers / **1280** tests PASS (baseline 1240) |
| governance | **73** tests PASS |
| git diff --check | clean |

## 35. Scans

```
## correlationId: intent.correlationId (61)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts:16:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts:59:correlationId: intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts:88:correlationId: intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts:132:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:25:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:93:correlationId: request.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:104:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:131:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:162:correlationId: request.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:173:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts:31:correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts:59:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts:100:correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts:117:correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts:180:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts:210:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts:15:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:155:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:214:correlationId: request.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:481:correlationId: request.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:562:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts:29:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts:49:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts:77:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts:98:correlationId: fixture.intent.correlationId,
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:186:correlationId,
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:199:correlationId,
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:229:correlationId: run.correlationId,
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:268:correlationId,
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:297:correlationId,
... +31 more

## availableSources (7)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:27:it("F01 — fake provider cannot be promoted to real via injected availableSources", async () => {
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:50:availableSources: ["fixture", "real", "sandbox-real"],
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:199:expect(barrel).not.toMatch(/availableSources/);
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:211:expect(src).not.toMatch(/availableSources/);
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:224:expect(src).not.toMatch(/availableSources:/);
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:64:* `availableSources` is intentionally absent — D2-D3 proves fixture only via
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:397:// Ignore any injected availableSources property — never treat it as authority.

## verified:true (4)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts:39:cursorUnverified: true,
projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts:73:readonly cursorUnverified: true;
projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts:392:cursorUnverified: true,
projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts:440:cursorUnverified: true,

## durable=true (1)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:181:durable: true,

## multiInstance=true (1)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:182:multiInstance: true,

## restartSafe=true (1)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:183:restartSafe: true,

## production-ready (1)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts:120:/production-ready|RUN READY|multi-instance ready|restart-safe|Cursor verified/i,

## RUN READY (1)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts:120:/production-ready|RUN READY|multi-instance ready|restart-safe|Cursor verified/i,

## strong runtime demonstrated (0)

## .only (0)

## .skip (0)

## fetch( (0)

## http:// (0)

## Server Action (0)

## token= (18)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:145:"token=abc",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:413:"token=abc",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:421:"access_token=abc",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:422:"refresh_token=abc",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:426:"?token=value",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:427:"&token=value",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:433:"ToKeN=AbC",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:434:"line1\ntoken=abc\nline3",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:435:`${"safe-".repeat(80)}token=abc`,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:436:"token=abc\u0000tail",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:448:"token=abc",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:456:"access_token=abc",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:457:"refresh_token=abc",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:461:"?token=value",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:462:"&token=value",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:468:"ToKeN=AbC",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:469:"token=abc",
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:21:/sk-|ghp_|github_pat_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|private\s+key|xox[baprs]-|password\s*[:=]|secret\s*[:=]|(?:acc

## apiKey (8)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:146:"apiKey=k",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:193:expect(JSON.stringify(result)).not.toMatch(/apiKey=k/i);
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts:215:apiKey: sensitive,
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:174:blockedReason: "apiKey=projection-key",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:415:"apiKey=k",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:425:'"apiKey":"value"',
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:450:"apiKey=k",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:460:'"apiKey":"value"',

## Authorization Bearer (5)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:147:"Authorization: Bearer xyz",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:418:"Authorization Bearer xyz",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:419:"Authorization: Bearer xyz",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:453:"Authorization Bearer xyz",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:454:"Authorization: Bearer xyz",

## ghp_ (4)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:429:"ghp_abcdefghij",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:464:"ghp_abcdefghij",
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:21:/sk-|ghp_|github_pat_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|private\s+key|xox[baprs]-|password\s*[:=]|secret\s*[:=]|(?:acc
projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts:180:if (/sk-|ghp_|@|password|BEGIN PRIVATE/i.test(obj.redactedSummary)) {

## sk- (4)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:431:"sk-abcdefghij",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:466:"sk-abcdefghij",
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:21:/sk-|ghp_|github_pat_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|private\s+key|xox[baprs]-|password\s*[:=]|secret\s*[:=]|(?:acc
projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts:180:if (/sk-|ghp_|@|password|BEGIN PRIVATE/i.test(obj.redactedSummary)) {

## xox (2)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:432:"xoxb-abcdefghij",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:467:"xoxb-abcdefghij",

## private key (3)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:428:"contains private key material",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:463:"private key",
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:21:/sk-|ghp_|github_pat_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|private\s+key|xox[baprs]-|password\s*[:=]|secret\s*[:=]|(?:acc

## late_result_redacted (10)
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:149:"official late evidence redacts secret-like summary %j to late_result_redacted",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts:189:summary: "late_result_redacted",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:248:expect(late?.summary).toBe("late_result_redacted");
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:443:"F-QA-D2D3-05 / F-QA-REV-D2D3-02 — late secret %j becomes late_result_redacted",
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts:514:summary: "late_result_redacted",
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:18:* Fail-closed: any hit means the whole late summary becomes late_result_redacted.
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:205:return "late_result_redacted";
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:209:return "late_result_redacted";
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:213:return "late_result_redacted";
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:217:return "late_result_redacted";

## containsSensitiveLateContent (3)
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:24:export function containsSensitiveLateContent(value: string): boolean {
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:208:if (containsSensitiveLateContent(input)) {
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts:216:if (containsSensitiveLateContent(bounded)) {

```

Qualification scans :
- Occurrences `token=` / `apiKey` / `Bearer` / `ghp_` / `sk-` / `xox` : **tests adversariaux uniquement** (sauf detector regex produit).
- `availableSources` : ignore comment + tests F01 / importBoundaries.
- `durable/multiInstance/restartSafe:true` : injection hostile F04 uniquement.
- `.only` / `.skip` / `fetch` / Server Action : 0.
- Pas de réécriture silencieuse `correlationId: intent.correlationId` dans le rebuild (strict match + `correlationId: requestCorrelationId`).

## 36. correlationId validation

Ordre imposé respecté : lecture plain → validation original (présence/type/égalité/lane) → rebuild timeout only → boundary → engagement.
Mismatch : ok=false, family=validation, code=VALIDATION_ERROR, run absent, stateTrace=[], providerAttempted/Invoked/Completed=false, describe=0, complete=0, aucune evidence.

## 37. Late evidence redaction

Source unique : `containsSensitiveLateContent` / `FORBIDDEN_VALUE` dans `untrustedExecutionData.ts`.
Toute détection → summary exact `late_result_redacted` ; late=true ; official=true ; source=fixture ; terminal inchangé ; aucune valeur sensible dans run/projection/events/diagnostics.

## 38. Matrice des trois findings

### F-QA-D2D3-05
- sévérité initiale : BLOCKER
- statut entrant : PARTIALLY ADDRESSED
- cause résiduelle : motifs token/apiKey/Bearer non couverts
- correction : detector fail-closed étendu + sanitizeLateEvidenceSummary
- tests : matrice permanente F05/REV-02
- probes : P-REV-D2D3-08 PASS ; P-CORR2-D2D3-02 PASS
- preuve : summary=`late_result_redacted` ; JSON sans résidu
- **statut proposé : ADDRESSED — REVALIDATION REQUIRED**

### F-QA-REV-D2D3-01
- sévérité : MAJOR
- cause racine : rewrite silencieux correlationId avant validation
- correction : validate-before-rebuild dans preflight
- tests : REV-01 match + reject variants ; negative resilience
- probes : P-QA-D2D3-19 PASS ; P-CORR2-D2D3-01 PASS
- preuve : no run / no provider on mismatch
- **statut proposé : ADDRESSED — REVALIDATION REQUIRED**

### F-QA-REV-D2D3-02
- sévérité : BLOCKER
- cause racine : même gap redaction late
- correction : même detector
- tests/probes : comme F05
- **statut proposé : ADDRESSED — REVALIDATION REQUIRED**

## 39. Réserves héritées

- R-QA-REV-01 — OPEN NOT LIFTED
- R-QA-REV-02 — OPEN NOT LIFTED
- R-QA-D2C-01 — OPEN NOT LIFTED
- Cursor product capabilities — UNVERIFIED
- memory process-local only
- R-PR-D2D2-01 — MINOR

## 40. Réserves Corrections

- R-CORR-D2D3-01 — timeout max 60 000 ms, borne locale D2-D3 — OPEN
- R-CORR-D2D3-02 — suivi findings jusqu’à QA — OPEN
- F-QA-D2D3-05 et F-QA-REV-D2D3-01/02 ouverts jusqu’à revalidation

## 41. Nouveaux findings éventuels

Aucun nouveau finding produit par cette passe.
Aucune nouvelle réserve R-CORR2 ouverte (corrections techniques complètes sous contrat autorisé).

## 42. Claims démontrés

- rejet strict correlationId mismatch avant describe/create/provider
- late evidence officielle redigée fail-closed pour motifs étendus (token/apiKey/Bearer/…)
- tests permanents non permissifs verts
- reproduction P-QA-D2D3-19 et P-REV-D2D3-08 PASS
- non-régression F01–04/06–10
- D2D3-04/05 toujours bloquées (gates non consommés)
- package 18 fichiers inchangé en chemins
- aucun commit/push projet/PR

## 43. Claims non démontrés

- findings CLOSED / VERIFIED / LIFTED (interdit ce cycle)
- Cursor sandbox-real / live
- provider réel / réseau
- persistance durable / multi-instance / restart-safe
- transport D3 / UI Delivery / RUN READY / production-ready
- QA Critical Revalidation 2 (candidate seulement)

## 44. Freeze final

- base : `de2800aa836bb8221dc2912414126b7a3e6a1f58`
- count : **18**
- SHA-256 length-prefixed : `1643016668d777162dd0250ed9f61169c5c58cffaec97551571ade04af0b7917`
- hash initial : `10c4d0278e10192aea7cf88b086df2ccc74252bc01e0f76e9ec1bbdbf522decb`
- hash différent : OUI (attendu)
- aucun nouveau chemin

Manifest trié :

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

## 45. Git Truth Check final

- branche delivery D2-D3
- HEAD / origin/main : `de2800aa…`
- staged vide
- branche distante projet absente
- modifications locales uniquement dans le manifest 18 fichiers
- artefacts sous `.tmp-sfia-review/**` hors package

## 46. Absence de staged / commit / push / PR

Confirmé : aucun `git add` / `git commit` / push projet / `gh pr create`.
Seule écriture distante autorisée : handoff L3 borné (ci-dessous).

## 47. Review Handoff

- mode : publish-in-cycle
- parent distant attendu : `5dbcee99f727d34761a784b5388f21d29d9c440c`
- message : `docs(review-handoff): publish D2-D3 follow-up corrections status`
- publisher : `scripts/sfia/publish-review-handoff.sh`
- (détails commit/blob après publication)

## 48. Verdict unique

D2-D3 FOLLOW-UP CORRECTIONS COMPLETE —
F-QA-D2D3-05 AND F-QA-REV-D2D3-01/02 ADDRESSED —
READY FOR CRITICAL QA REVALIDATION 2

## 49. Décision suivante candidate

`GO QA SFIA STUDIO V3.1-D2-D3 — PROFILE CRITICAL — REVALIDATION 2`

Statut : **candidate uniquement — non consommé**

Instruction : ChatGPT doit consulter `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` au commit/blob publiés par cette passe avant toute QA Critical Revalidation 2.
