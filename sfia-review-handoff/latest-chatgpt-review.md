# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Critical QA Revalidation

## 1. Qualification

- Date/heure/fuseau : 2026-08-04 12:56:40 CEST (+0200).
- Cycle : 9 — QA / validation.
- Sous-cycle : QA Critical de revalidation après corrections.
- Profil : Critical.
- Typologie : EVOL.
- GO consommé : `GO QA SFIA STUDIO V3.1-D2-D3 — PROFILE CRITICAL — REVALIDATION` (2026-08-04 12:45 CEST).
- Gates non consommés : G-D2D-CURSOR-01, G-D2D-PERSIST-01, G-D2D-D2C-01, GO PUBLICATION, GO PR READINESS.
- CKC recherché : oui — contrat détaillé absent.
- Fallback : routing guide, validation checklist, Delivery QA/Test standard, template v2.6, docs D2-D 20–24, handoffs QA+Corrections, code local.

## 2. Sources consultées

- Handoff QA initial : commit `2ea275d3e6266ba409e101ba4644102b5c25493c`, blob `a669da7fdc29acaf30446516229a1fcd9cbb9243`.
- Handoff Corrections : commit `6b00c6785f3a2b317372c2f1d1450f5ce95fb26f`, blob `42f4b0b72e1ea9f21309a4aec71cf5701952598f`, parent `2ea275d3…`.
- Verdict Corrections (non-preuve) : D2-D3 CORRECTIONS COMPLETE — F-QA-D2D3-01…10 ADDRESSED — READY FOR CRITICAL QA REVALIDATION.
- Package corrigé 18 fichiers + dépendances D2-D1/D2-D2 appelées + tests execution-run + publisher.

## 3. Local Git Truth Check initial

- Branche : `delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination`.
- HEAD / origin/main : `de2800aa836bb8221dc2912414126b7a3e6a1f58`.
- Upstream : aucun.
- Branche distante projet : absente.
- Staged : vide.
- Hors package : `.tmp-sfia-review/**` uniquement.

## 4. Freeze initial / final

- Count : 18.
- Hash length-prefixed : `10c4d0278e10192aea7cf88b086df2ccc74252bc01e0f76e9ec1bbdbf522decb`.
- Manifest exact vs handoff Corrections : OK.
- Freeze final identique après probes/validations.

## 5. Manifest corrigé

1. projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
2. projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
3. projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
4. projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
5. projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts
6. projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
7. projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
8. projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
9. projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
10. projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
11. projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
12. projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts
13. projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
14. projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
15. projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
16. projects/sfia-studio/app/lib/oa/execution-run/index.ts
17. projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
18. projects/sfia-studio/app/lib/oa/execution-run/server/index.ts

## 6. Inspection des corrections (indépendante)

| Finding | Cause initiale | Correction déclarée | Correction observée | Test permanent | Probe | Statut revalidation |
|---|---|---|---|---|---|---|
| F-01 | availableSources injectable | fixture-only preflight | `availableSources` absent des deps ; injection ignorée ; real/sandbox-real rejetés avant port | regression F01 | P01 + P-REV-01/02 | VERIFIED — CLOSURE RECOMMENDED |
| F-02 | readiness booléenne | artefacts liés | bool-only → not_demonstrated ; assessById nécessite run+projection+evidence | readiness + F02 | P02 + P-REV-03 | VERIFIED — CLOSURE RECOMMENDED |
| F-03 | sink throw brut | safeEmit + eventDelivery | throws capturés ; état cohérent ; degraded | F03 | P03–05 + P-REV-04/05 | VERIFIED — CLOSURE RECOMMENDED |
| F-04 | projection pass-through | unknown + allowlist | refus explicite sur secrets/fonctions/claims | F04 | P06 + P-REV-06/07 | VERIFIED — CLOSURE RECOMMENDED |
| F-05 | late summary brut | sanitizeLateEvidenceSummary | `password=` redacted ; **mais** `token=`, `apiKey=`, `Authorization Bearer` peuvent persister | F05 (password only) | P07 PASS ; **P-REV-08 FAIL** | PARTIALLY ADDRESSED |
| F-06 | describe avant validation | preflight unknown | describe=0 sur intent invalide | F06 | P08 + P-REV-09 | VERIFIED — CLOSURE RECOMMENDED |
| F-07 | getters hostiles | untrustedExecutionData | request rejetée sans run ; result → failed | F07 | P09–10 + P-REV-10 | VERIFIED — CLOSURE RECOMMENDED |
| F-08 | providerInvoked faux | attempted/invoked/completed | pre-cancel invoked=false | F08 | P16 + P-REV-11 | VERIFIED — CLOSURE RECOMMENDED |
| F-09 | timeout invalide | MAX 60000 local | -1 → no run | F09 | P17 + P-REV-12 | VERIFIED — CLOSURE RECOMMENDED |
| F-10 | path %2e%2e | normalizeCanonicalPath | blocked shared surfaces | F10 | P23 + P-REV-13 | VERIFIED — CLOSURE RECOMMENDED |

## 7. Régression découverte hors findings initiaux

### F-QA-REV-D2D3-01 — MAJOR — REGRESSION

- Problème : un `providerRequest.correlationId` divergent est **réécrit** avec le correlationId d’intent pendant le preflight (`coordinateExecutionRun.ts` ~565–568), puis l’engagement réussit.
- Preuve : P-QA-D2D3-19 — historiquement PASS — désormais FAIL (`state=succeeded`, `providerInvoked=true`).
- Impact : la validation de cohérence lane/correlation n’est plus une barrière d’engagement pour ce mismatch.

### F-QA-REV-D2D3-02 — BLOCKER — Late evidence redaction incomplete

- Problème : `sanitizeLateEvidenceSummary` redige surtout des motifs forts (`password=`, `sk-`, `ghp_`, private key) mais laisse persister comme evidence officielle late :
  - `token=abc`
  - `apiKey=k`
  - `Authorization Bearer xyz`
- Preuve : P-REV-D2D3-08.
- Impact : secret-like content in official late evidence (même famille que F-05).

## 8. Résultats des 29 probes initiaux

Total initial : 29 — PASS 28 — FAIL 1 — NOT PROVEN 0.

13 historiquement FAIL :

| P-QA-D2D3-01 | PASS |
| P-QA-D2D3-02 | PASS |
| P-QA-D2D3-03 | PASS |
| P-QA-D2D3-04 | PASS |
| P-QA-D2D3-05 | PASS |
| P-QA-D2D3-06 | PASS |
| P-QA-D2D3-07 | PASS |
| P-QA-D2D3-08 | PASS |
| P-QA-D2D3-09 | PASS |
| P-QA-D2D3-10 | PASS |
| P-QA-D2D3-16 | PASS |
| P-QA-D2D3-17 | PASS |
| P-QA-D2D3-23 | PASS |

Seul échec initial restant : **P-QA-D2D3-19** (régression, pas un des 13 historiques).

Table complète :

| id | verdict | finding | objective |
|---|---|---|---|
| P-QA-D2D3-01 | PASS | — | Refuse fake provider promoted to real by injected source list |
| P-QA-D2D3-02 | PASS | — | Reject UX readiness without a linked run, projection, or evidence |
| P-QA-D2D3-03 | PASS | — | Contain event sink throw at event 1 |
| P-QA-D2D3-04 | PASS | — | Contain event sink throw at event 2 |
| P-QA-D2D3-05 | PASS | — | Contain event sink throw at event 4 |
| P-QA-D2D3-06 | PASS | — | Project malicious runtime data without leaks or claim promotion |
| P-QA-D2D3-07 | PASS | — | Reject sensitive caller-supplied late evidence |
| P-QA-D2D3-08 | PASS | — | Perform input validation before any provider port call |
| P-QA-D2D3-09 | PASS | — | Contain hostile provider request accessors |
| P-QA-D2D3-10 | PASS | — | Contain hostile provider result accessors |
| P-QA-D2D3-11 | PASS | — | Prevent malicious provider argument mutation from changing stored run |
| P-QA-D2D3-12 | PASS | — | Prevent partial provider success |
| P-QA-D2D3-13 | PASS | — | Normalize provider null |
| P-QA-D2D3-14 | PASS | — | Normalize provider reject |
| P-QA-D2D3-15 | PASS | — | Ignore provider success resolving after timeout |
| P-QA-D2D3-16 | PASS | — | Cancel before provider operation |
| P-QA-D2D3-17 | PASS | — | Reject negative coordinator timeout before engagement |
| P-QA-D2D3-18 | PASS | — | Isolate concurrent process-local runs |
| P-QA-D2D3-19 | FAIL | — | Reject provider request correlation mismatch |
| P-QA-D2D3-20 | PASS | — | Prevent event sink detail mutation from changing state |
| P-QA-D2D3-21-fixture-real | PASS | — | Source matrix requested=fixture, declared=real |
| P-QA-D2D3-21-real-real | PASS | — | Source matrix requested=real, declared=real |
| P-QA-D2D3-21-sandbox-sandbox | PASS | — | Source matrix requested=sandbox-real, declared=sandbox-real |
| P-QA-D2D3-22-mutation_forbidden | PASS | — | Pre-engagement block for mutation_forbidden |
| P-QA-D2D3-22-protected_path | PASS | — | Pre-engagement block for protected_path |
| P-QA-D2D3-22-blocked_gate | PASS | — | Pre-engagement block for blocked_gate |
| P-QA-D2D3-23 | PASS | — | Reject encoded traversal/protected path |
| P-QA-D2D3-24 | PASS | — | Prevent caller runId from selecting state authority target |
| P-QA-D2D3-25 | PASS | — | Prevent additional readiness properties promoting UI/runtime |

## 9. Nouveaux probes P-REV

Total : 15 — PASS 14 — FAIL 1 (P-REV-08).

| id | verdict | finding | objective |
|---|---|---|---|
| P-REV-D2D3-01 | PASS | — | Source authority via descriptor / availableSources injection |
| P-REV-D2D3-02 | PASS | — | Source authority via composition options |
| P-REV-D2D3-03 | PASS | — | Readiness linked to canonical artifacts |
| P-REV-D2D3-04 | PASS | — | Event sink fail-safe with repeated synchronous throws |
| P-REV-D2D3-05 | PASS | — | Event sink hostile detail accessors |
| P-REV-D2D3-06 | PASS | — | Projection hostile deep graph |
| P-REV-D2D3-07 | PASS | — | Projection from canonical runId authority |
| P-REV-D2D3-08 | FAIL | — | Late evidence redaction extended |
| P-REV-D2D3-09 | PASS | — | Preflight without provider effect |
| P-REV-D2D3-10 | PASS | — | Hostile / invalid provider results |
| P-REV-D2D3-11 | PASS | — | Provider diagnostics exactness |
| P-REV-D2D3-12 | PASS | — | Timeout boundary local 1..60000 |
| P-REV-D2D3-13 | PASS | — | Path normalization shared across surfaces |
| P-REV-D2D3-14 | PASS | — | Import and public surface boundaries |
| P-REV-D2D3-15 | PASS | — | In-process isolation across success/timeout/cancel/blocked |

## 10. Détails des échecs

### P-QA-D2D3-19

```json
{
  "id": "P-QA-D2D3-19",
  "family": "initial",
  "objective": "Reject provider request correlation mismatch",
  "expected": "blocked before provider",
  "observed": {
    "state": "succeeded",
    "providerInvoked": true
  },
  "verdict": "FAIL"
}
```
### P-REV-D2D3-08

```json
{
  "id": "P-REV-D2D3-08",
  "family": "revalidation",
  "objective": "Late evidence redaction extended",
  "expected": "no sensitive residue; terminal unchanged; canonical identity/source",
  "observed": [
    {
      "i": 0,
      "state": "cancelled",
      "summary": "late_result_redacted",
      "leaked": false,
      "late": true,
      "source": "fixture",
      "official": true
    },
    {
      "i": 1,
      "state": "cancelled",
      "summary": "token=abc",
      "leaked": true,
      "late": true,
      "source": "fixture",
      "official": true
    },
    {
      "i": 2,
      "state": "cancelled",
      "summary": "apiKey=k",
      "leaked": true,
      "late": true,
      "source": "fixture",
      "official": true
    },
    {
      "i": 3,
      "state": "cancelled",
      "summary": "Authorization Bearer xyz",
      "leaked": true,
      "late": true,
      "source": "fixture",
      "official": true
    },
    {
      "i": 4,
      "state": "cancelled",
      "summary": "late_result_redacted",
      "leaked": false,
      "late": true,
      "source": "fixture",
      "official": true
    },
    {
      "i": 5,
      "state": "cancelled",
      "summary": "late_result_redacted",
      "leaked": false,
      "late": true,
      "source": "fixture",
      "official": true
    },
    {
      "i": 6,
      "state": "cancelled",
      "summary": "late_result_redacted",
      "leaked": false,
      "late": true,
      "source": "fixture",
      "official": true
    },
    {
      "i": 7,
      "state": "cancelled",
      "summary": "[REDACTED]1234567890-abcdefgh",
      "leaked": false,
      "late": true,
      "source": "fixture",
      "official": true
    },
    {
      "i": 8,
      "state": "cancelled",
      "summary": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "leaked": false,
      "late": true,
      "source": "fixture",
      "official": true
    }
  ],
  "verdict": "FAIL"
}
```


## 11. Contenu complet des probes temporaires

Fichier : `.tmp-sfia-review/qa-revalidation-probes/independent-revalidation-probes.ts`

```typescript
/**
 * Independent Critical QA revalidation probes for D2-D3 corrected package.
 * Temporary only — not part of the delivery package.
 * Does not reuse Corrections' revalidate-failed-probes.ts.
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
const clock = { nowIso: () => "2026-08-04T11:00:00.000Z" };
const OUT = path.resolve(process.cwd(), ".tmp-sfia-review/qa-revalidation-evidence/probe-results.json");

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
      result.providerInvoked === false &&
      (result.run?.state === "blocked" || result.run === undefined);
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
        r.official === true,
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

## 12. Matrices thématiques

### Source truthfulness
- Fake + real/sandbox-real : bloqués, zéro invocation (P01, P-REV-01/02, P21).
- Composition options ne promeuvent pas la source.
- **OK** pour F-01.

### Readiness
- Booléens → not_demonstrated.
- UX demonstrated seulement artefacts liés succeeded.
- UI not_demonstrated ; strong blocked.
- **OK** pour F-02.

### Event sink
- Throws sync répétés → succeeded + degraded, pas d’erreur brute.
- Detail hostile non autoritatif.
- **OK** pour F-03.

### Projection
- Malicious deep → reject ; projectById canonique ; pas de `project(run)` public sur compose.
- **OK** pour F-04.

### Late evidence
- password= OK ; token=/apiKey=/Authorization **FAIL**.
- **PARTIEL** pour F-05 + nouveau BLOCKER.

### Preflight / getters / diagnostics / timeout / paths / imports / isolation
- PASS sur P-REV-09…15 (après correction du montage P-REV-15 single composition).
- Exception : correlation mismatch (P19) contredit l’attente historique.

## 13. Validations obligatoires (observées)

- Régression permanente : **25/25 PASS**.
- Targeted : **64/64 PASS**.
- execution-run : **28 fichiers / 194 tests PASS**.
- typecheck : PASS.
- lint : PASS.
- build : PASS.
- full Vitest : **130 fichiers / 1240 tests PASS**.
- governance : **73/73 PASS**.

Les suites projet restent vertes ; elles ne couvrent pas P19 ni la redaction late étendue.

## 14. Scans

Occurrences adversariales/tests uniquement pour durable:true, availableSources, materialize (négations), production-ready (anti-claim regex).
`providerInvoked = true` uniquement dans le callback d’invocation effective.
Aucun `.save`, fetch, `.only`/`.skip`.
Scan JSON : `.tmp-sfia-review/qa-revalidation-evidence/scans.json`.

## 15. Statut findings F-QA-D2D3-01…10

| Finding | Sévérité initiale | Statut revalidation |
|---|---|---|
| F-01 | BLOCKER | VERIFIED — CLOSURE RECOMMENDED |
| F-02 | MAJOR | VERIFIED — CLOSURE RECOMMENDED |
| F-03 | MAJOR | VERIFIED — CLOSURE RECOMMENDED |
| F-04 | BLOCKER | VERIFIED — CLOSURE RECOMMENDED |
| F-05 | BLOCKER | **PARTIALLY ADDRESSED** |
| F-06 | MAJOR | VERIFIED — CLOSURE RECOMMENDED |
| F-07 | MAJOR | VERIFIED — CLOSURE RECOMMENDED |
| F-08 | MINOR | VERIFIED — CLOSURE RECOMMENDED |
| F-09 | MAJOR | VERIFIED — CLOSURE RECOMMENDED |
| F-10 | MAJOR | VERIFIED — CLOSURE RECOMMENDED |

## 16. Nouveaux findings

1. **F-QA-REV-D2D3-01 — MAJOR** — correlationId providerRequest mismatch silencieusement réécrit → engagement réussi (régression P19).
2. **F-QA-REV-D2D3-02 — BLOCKER** — late evidence officielle peut conserver token=/apiKey=/Authorization Bearer.

## 17. Réserves

Héritées OPEN NOT LIFTED :
- R-QA-REV-01, R-QA-REV-02, R-QA-D2C-01, Cursor UNVERIFIED, memory process-local only, R-PR-D2D2-01.

Corrections :
- R-CORR-D2D3-01 — timeout max 60000 local — OPEN (toujours pertinent).
- R-CORR-D2D3-02 — findings ouverts jusqu’à revalidation — **REMAINS OPEN** (non SATISFIED).

Nouvelles :
- R-QA-REV-D2D3-01 — P19 regression / correlation rewrite.
- R-QA-REV-D2D3-02 — late redaction incomplete beyond password=/sk-/ghp_.

## 18. Claims démontrés / non démontrés

Démontrés : F01–F04, F06–F10 techniquement revalidés ; 13/13 historiques FAIL → PASS ; D2D3-04/05 absents ; package hash stable ; suites vertes.

Non démontrés : F05 clôture complète ; absence de régression P19 ; redaction late universelle ; findings CLOSED/LIFTED ; Cursor verified ; provider real ; persistence durable ; UI/strong/RUN/production-ready ; publication autorisée.

## 19. D2D3-04 / D2D3-05

Toujours BLOCKED — aucune surface live Cursor ni persistence durable observée.

## 20. Absence de mutation projet

- Aucun fichier projet modifié par cette QA.
- Aucun commit / push projet / PR.
- Probes uniquement sous `.tmp-sfia-review/qa-revalidation-probes/**`.

## 21. Git Truth Check final

- Branche/HEAD inchangés.
- Staged vide.
- Branche distante projet absente.
- Package 18 / hash inchangé.

## 22. Review Handoff

- Parent attendu : `6b00c6785f3a2b317372c2f1d1450f5ce95fb26f`.
- Message : `docs(review-handoff): publish D2-D3 QA revalidation status`.
- Publisher : `scripts/sfia/publish-review-handoff.sh`.

## 23. Verdict

D2-D3 CRITICAL QA REVALIDATION BLOCKED —
NEW BLOCKING FINDINGS DETECTED —
MORRIS CORRECTION DECISION REQUIRED

Justification :
- F-QA-D2D3-05 reste PARTIALLY ADDRESSED (BLOCKER initial) ;
- F-QA-REV-D2D3-02 BLOCKER nouveau (late secrets) ;
- F-QA-REV-D2D3-01 MAJOR (régression P19).

## 24. Décision suivante candidate (non consommée)

GO CORRECTIONS SFIA STUDIO V3.1-D2-D3 —
APPLY FINDINGS REMAINING / NEW

Ne pas publier. Ne pas commit. Ne pas push. Ne pas créer de PR.

Instruction : ChatGPT doit consulter `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md` au commit et blob publiés par cette revalidation avant toute validation QA, fermeture des findings ou recommandation de publication à Morris.
