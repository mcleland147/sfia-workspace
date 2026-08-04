# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Critical Delivery

## 1. Qualification et décision

- Date/heure/fuseau : 2026-08-04 11:41:49 CEST (+0200).
- Cycle : 8 — Delivery.
- Profil : Critical.
- Typologie : EVOL.
- GO consommé : `GO DELIVERY SFIA STUDIO V3.1-D2-D3`, 2026-08-04 11:15 CEST (+0200).
- Stories incluses : D2D3-01, D2D3-02, D2D3-03, D2D3-06, D2D3-07.
- Stories bloquées : D2D3-04 et D2D3-05.
- Gates non consommés : `G-D2D-CURSOR-01`, `G-D2D-PERSIST-01`, `G-D2D-D2C-01`.
- CKC recherché : oui ; contrat détaillé trouvé : non ; statut : absent.
- Fallback documentaire : carte synthétique des cycles, méthode des cycles, template canonique v2.6, documents D2-D 20–24, handoff post-merge D2-D2. Aucune autorité supplémentaire inventée.

## 2. Sources consultées intégralement

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
6. documents D2-D `20-v3-1...` à `24-v3-1...`
7. handoff D2-D2 au commit `3aaf5768fd874b46d95a03fe012746026d9c6ff2`, blob `8645564917d041368d9061e1df511cecb0361378`
8. package courant `app/lib/oa/execution-run/**`
9. tests courants `app/__tests__/oa/execution-run/**`
10. `projects/sfia-studio/app/package.json`
11. `scripts/sfia/publish-review-handoff.sh`
12. `scripts/sfia/README.md`

## 3. Local Git Truth Check initial et branche

- Repository : `mcleland147/sfia-workspace`.
- Branche initiale : `main`.
- HEAD et `origin/main` : `de2800aa836bb8221dc2912414126b7a3e6a1f58`.
- Tracked tree propre ; staged vide ; non-trackés limités à `.tmp-sfia-review/**`.
- Branche locale et distante D2-D3 absentes ; aucun worktree détenteur.
- Handoff post-merge D2-D2 vérifié : titre, commit, blob, verdict, main, cleanup et réserves conformes ; D2-D3 non ouvert par l'amont.
- Branche locale créée : `delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination`.
- Aucun upstream ; aucune branche projet distante.

## 4. Baseline D2-D1/D2-D2

- Targeted baseline : 22 fichiers / 130 tests PASS.
- Typecheck baseline : PASS.
- Package intégré D2-D2 : count 34 ; SHA-256 `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d`.
- Base package D2-D3 : `de2800aa836bb8221dc2912414126b7a3e6a1f58`.

## 5. Design pré-implémentation

### APIs D2-D1 réutilisées

- `createExecutionRun` : validation AJV, policy pré-engagement, création/persistance.
- `transitionExecutionRun` : seule mutation après création, transitions terminales et late evidence.
- Types canoniques `ExecutionRun`, `ExecutionIntent`, `ExecutionContext`, `ProviderCapabilityDescriptor`, `NormalizedFailure`, `UsageSummary`.
- `validateUntrustedProviderRequest`, `validateUntrustedProviderResult`, `normalizedFailure`, `isIsoTimestamp`.

### Ports D2-D2 réutilisés

- `AiExecutionPort`, `GitReadPort`, `CursorExecutionPort`.
- `ExecutionEventSinkPort`, `ClockPort`.
- `ProviderInvocationResult` et requêtes provider-independent.
- `invokeWithTimeoutAndCancellation`.
- compositions existantes `composeExecutionRunMemory` et `composeExecutionRunProvidersFake`.

### Ordre d'autorité

1. `createExecutionRun` valide l'intent, le contexte, la policy, la capability et les gates.
2. Un run bloqué ne déclenche jamais un provider.
3. Le coordinator sélectionne le port depuis le lane du run validé.
4. `transitionExecutionRun(intent_valid)` décide l'engagement.
5. Le provider reçoit une requête bornée, jamais le run ni un mutateur.
6. Le résultat provider est validé et normalisé.
7. `transitionExecutionRun` décide seul du terminal et de l'evidence officielle.
8. Une late evidence passe par la transition evidence-only et ne change pas le terminal.
9. Projection et readiness sont pures et en lecture seule.

```text
validated intent
→ createExecutionRun
→ policy / capability / gate check
→ transitionExecutionRun(running)
→ provider port invocation
→ normalized provider outcome
→ transitionExecutionRun(terminal)
→ official evidence
→ provider-independent projection
→ readiness assessment
```

### Mapping stories → fichiers → tests

- D2D3-01 : `coordinateExecutionRun.ts`, `composeExecutionRunD2D3.ts` → `d2d3.coordination.fixture.test.ts`.
- D2D3-02 : `executionProjection.ts` → `d2d3.projection.test.ts`.
- D2D3-03 : coordinator + projection → `d2d3.evidence.truthfulness.test.ts`.
- D2D3-06 : coordinator + stubs injectés → `d2d3.negative.resilience.test.ts`.
- D2D3-07 : `executionReadiness.ts` → `d2d3.readiness.test.ts`.
- Frontières : exports bornés + `importBoundaries.test.ts`.

### Preuves d'exclusion et d'autorité unique

- Aucun second runtime : D2-D3 assemble `composeExecutionRunMemory` existant ; aucun nouveau store/repository/runtime.
- Aucun `.save`, aucune mutation directe de `ExecutionRun`, aucun état nouveau.
- D2D3-04 bloquée : Cursor fixture-only, `live=false`, `verified=false`, gate non consommé, aucune source sandbox-real attribuée.
- D2D3-05 bloquée : mémoire process-local ; flags durable, multi-instance et restart-safe à false ; aucun worker, queue ou locking distribué.

## 6. Fichiers du cycle

### Créés

- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts`

### Modifiés

- `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/index.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts`

- Nombre de chemins : 12 / 12 maximum.
- Aucun fichier hors périmètre.
- Stat package : 1705 insertions, 1 suppressions, 63570 bytes courants.

## 7. Package D2-D3 freeze

### Manifest trié

- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts` — 4735 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts` — 4841 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts` — 8177 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts` — 3180 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts` — 2487 bytes
- `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts` — 8423 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts` — 16983 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts` — 4538 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts` — 2172 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/index.ts` — 4186 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts` — 3287 bytes
- `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts` — 561 bytes

- Count : 12.
- Hash avant validation, length-prefixed : `55e0819f6e8ef0887cd7306df4528d2a7f9090d4e8f8e8f20c55471abf37e0be`.
- Hash après validation, length-prefixed : `55e0819f6e8ef0887cd7306df4528d2a7f9090d4e8f8e8f20c55471abf37e0be`.
- Identité : stable avant/après validation.
- `.tmp-sfia-review/**` exclu du package.

## 8. Résultats de validation

- Targeted `npm test -- __tests__/oa/execution-run/` : PASS — 27 fichiers / 167 tests.
- Typecheck `npm run typecheck` : PASS — 0 erreur.
- Lint `npm run lint` : PASS — 0 warning, 0 erreur (avertissement de dépréciation Next lint non bloquant).
- Build `npm run build` : PASS — compilation, type validation et 10 pages statiques générées.
- Full Vitest `npm test` : PASS — 129 fichiers / 1213 tests.
- Governance : PASS — 73 tests / 0 échec.
- `git diff --check` : PASS.

## 9. Scans obligatoires qualifiés

- Secrets/credentials : aucun secret réel ; occurrences `password=do-not-leak` et `apiKey` exclusivement sentinelles négatives ; signatures `sk-/ghp_/xox/private key` exclusivement règles de redaction.
- Materialize / prompts-réponses-erreurs brutes : aucun chemin de matérialisation ; clés interdites uniquement assertées dans les tests de projection.
- Git write / commit / push / branch / PR / merge produit : aucune surface ni commande produit.
- SDK provider / réseau / HTTP / Server Action : aucun import SDK, aucun `fetch`, aucun transport.
- Node/process/fs/child_process en application : aucun ; contrôlé par import boundaries.
- `verified: true`, durable/multiInstance/restartSafe à true : aucun. `cursorUnverified: true` est le disclosure négatif attendu.
- Claims excessifs : les chaînes interdites n'apparaissent que dans une assertion négative anti-claims.
- `.only` / `.skip` : aucun.
- Fallback source : aucun ; l'occurrence `without fallback` est le nom d'un test qui vérifie le refus.
- Mutation repository/run : aucun `.save`, aucune assignation de state, aucun repository exposé au coordinator.
- Nouveau state/store/runtime : aucun.
- Dépendance/configuration : aucune modification.

## 10. Matrice stories et scénarios

- D2D3-01 : AI fixture complète et Git read-only réussissent ; Cursor fixture reste bloqué comme unverified ; lane none bloquée ; validation/policy avant invocation ; trace exacte idle→running→terminal.
- D2D3-02 : projection JSON transport-neutral, provider-independent, redacted, sans SDK/adapter/signal/commande/fonction ; disclosures source, limites, persistence, Cursor et Git write visibles.
- D2D3-03 : source run=evidence=projection sur fixture ; sandbox-real/real bloquées sans fallback ; evidence officielle complète ; timestamps ISO ; identity bornée ; usage validé ou unavailable ; late evidence sans changement terminal.
- D2D3-06 : validation, authentication, authorization, unavailable, rate-limit, timeout, cancellation, human gate, invalid result, partial, late, redaction, source mismatch, protected path et mutation forbidden couverts déterministement sans réseau.
- D2D3-07 : UX exploration `demonstrated` uniquement avec les trois preuves fixture ; UI Delivery `not_demonstrated` ; strong runtime `blocked`.

## 11. Truthfulness, projection et readiness

- Source réellement exécutée : `fixture` uniquement.
- `sandbox-real` et `real` : demandes préservées dans le diagnostic, parcours bloqué, aucun provider appelé, aucune substitution.
- Cursor : UNVERIFIED ; aucune preuve sandbox-real/live.
- Evidence provider-independent, distincte du résultat provider ; résultat brut absent.
- Failure provider reconstruite avec message canonique borné ; aucune exception brute.
- Partial : terminal `failed`, code `INVALID_PROVIDER_RESULT`, partialité conservée.
- Timeout/cancellation : terminaux exacts ; late evidence ne change pas le terminal.
- Persistence : memory process-local uniquement.

Readiness :
- UX exploration readiness : `demonstrated` sous preuves fixture complètes.
- UI Delivery readiness : `not_demonstrated`.
- Strong runtime verdict readiness : `blocked`.

## 12. Réserves ouvertes

- R-QA-REV-01 — OPEN NOT LIFTED.
- R-QA-REV-02 — OPEN NOT LIFTED.
- R-QA-D2C-01 — OPEN NOT LIFTED.
- Cursor product capabilities — UNVERIFIED.
- memory process-local only.
- R-PR-D2D2-01 — MINOR.

Aucune réserve existante fermée. Aucune nouvelle réserve D2-D3 nécessaire.

## 13. Claims démontrés / non démontrés

Démontrés : coordination read-only fixture-first, projection provider-independent, evidence truthful, terminaux résilients, readiness bornée, autorité d'état unique.

Non démontrés : Cursor sandbox-real/live, provider réel, persistance durable, restart safety, multi-instance, UI/accessibilité/Figma, transport D3, strong runtime, RUN readiness, publication/PR readiness.

## 14. Git Truth Check final

- Branche : `delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination`.
- HEAD : `de2800aa836bb8221dc2912414126b7a3e6a1f58`.
- `origin/main` : `de2800aa836bb8221dc2912414126b7a3e6a1f58`.
- Staged : vide.
- Tracked modifications et nouveaux fichiers : exactement les 12 chemins du manifest.
- Non-trackés additionnels : `.tmp-sfia-review/**` uniquement.
- Aucun commit projet ; aucun push projet ; aucune PR ; aucune branche projet distante.

## 15. Review Handoff

- Required, mode publish-in-cycle, L3 borné.
- Branche : `sfia/review-handoff`.
- Parent distant attendu et vérifié avant publication : `3aaf5768fd874b46d95a03fe012746026d9c6ff2`.
- Fichier canonique : `sfia-review-handoff/latest-chatgpt-review.md`.
- Publisher unique : `scripts/sfia/publish-review-handoff.sh`.
- Message : `docs(review-handoff): publish D2-D3 delivery status`.
- La publication et la vérification commit/blob suivent le freeze de ce rapport ; leurs identifiants sont reportés dans le rapport Cursor final.

## 16. Verdict unique

D2-D3 AUTHORIZED DELIVERY COMPLETE —
D2D3-01/02/03/06/07 IMPLEMENTED —
D2D3-04/05 REMAIN BLOCKED —
READY FOR INDEPENDENT CRITICAL QA

Prochaine décision candidate non consommée : `GO QA SFIA STUDIO V3.1-D2-D3 — PROFILE CRITICAL`.

ChatGPT doit consulter la branche sfia/review-handoff et le fichier sfia-review-handoff/latest-chatgpt-review.md au commit et blob publiés par ce cycle avant toute validation Delivery, QA ou recommandation de publication.

## 17. Contenu complet des fichiers créés

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts`
```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";

const completeProof = {
  fixturePathDemonstrated: true,
  projectionDemonstrated: true,
  disclosuresDemonstrated: true,
} as const;

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
    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
    expect(result.run?.evidence).toHaveLength(1);
    expect(result.run?.evidence?.[0]).toMatchObject({
      official: true,
      source: "fixture",
      completeness: "complete",
      late: false,
    });

    if (!result.run) return;
    const projection = composition.project(result.run, completeProof);
    expect(projection.state).toBe("succeeded");
    expect(projection.source).toBe("fixture");
    expect(projection.providerLane).toBe("ai");
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
    const projection = composition.project(result.run, {
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });

    expect(result.run.disclosure.source).toBe("fixture");
    expect(evidence?.source).toBe("fixture");
    expect(projection.source).toBe("fixture");
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
      expect(result.run?.state).toBe("blocked");
      expect(result.run?.disclosure.source).toBe(source);
      expect(result.providerInvoked).toBe(false);
      expect(result.run?.evidence).toBeUndefined();
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
    expect(result.run?.state).toBe("blocked");
    expect(result.providerInvoked).toBe(false);
    expect(JSON.stringify(result)).not.toContain(sensitive);
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

const proof = {
  fixturePathDemonstrated: true,
  projectionDemonstrated: true,
  disclosuresDemonstrated: true,
} as const;

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
  return composition.project(coordinated.run, proof);
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

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts`
```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessExecutionReadiness,
  D2D3_OPEN_RESERVES,
} from "@/lib/oa/execution-run";

describe("D2-D3 bounded readiness assessment", () => {
  it("demonstrates UX exploration only when every fixture proof is present", () => {
    const demonstrated = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    const incomplete = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: false,
      disclosuresDemonstrated: true,
    });

    expect(demonstrated.uxExploration.status).toBe("demonstrated");
    expect(incomplete.uxExploration.status).toBe("not_demonstrated");
  });

  it("keeps UI delivery not demonstrated and strong runtime blocked", () => {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });

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

  it("carries every inherited reserve without lifting it", () => {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });

    expect(assessment.openReserves).toEqual(D2D3_OPEN_RESERVES);
    expect(assessment.openReserves).toHaveLength(6);
  });

  it("uses only the three bounded statuses and makes no excessive claim", () => {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
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

### `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
```typescript
import { normalizedFailure } from "../domain/errors";
import {
  validateUntrustedProviderRequest,
  validateUntrustedProviderResult,
} from "../domain/providerBoundary";
import type {
  ExecutionContext,
  ExecutionIntent,
  ExecutionRun,
  ExecutionSource,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
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
import type {
  CreateExecutionRunResult,
} from "./createExecutionRun";
import type {
  TransitionExecutionRunResult,
} from "./transitionExecutionRun";

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

export type CoordinateExecutionRunDependencies = {
  readonly execution: ExecutionAuthority;
  readonly providers: {
    readonly ai: AiExecutionPort;
    readonly git: GitReadPort;
    readonly cursor: CursorExecutionPort;
  };
  readonly events: ExecutionEventSinkPort;
  readonly clock: ClockPort;
  readonly availableSources: readonly ExecutionSource[];
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

export type CoordinateExecutionRunResult =
  | {
      readonly ok: true;
      readonly run: ExecutionRun;
      readonly providerInvoked: boolean;
      readonly stateTrace: readonly ExecutionRun["state"][];
      readonly validatedUsage: UsageSummary;
      readonly lateEvidenceRecorded: boolean;
    }
  | {
      readonly ok: false;
      readonly failure: NormalizedFailure;
      readonly run?: ExecutionRun;
      readonly providerInvoked: boolean;
      readonly stateTrace: readonly ExecutionRun["state"][];
      readonly validatedUsage: UsageSummary;
      readonly lateEvidenceRecorded: boolean;
    };

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

function emit(
  deps: CoordinateExecutionRunDependencies,
  run: ExecutionRun,
  event: Pick<ExecutionEvent, "type" | "detail">,
): void {
  deps.events.emit({
    ...event,
    correlationId: run.correlationId,
    runId: run.runId,
    providerLane: run.disclosure.providerLane,
    occurredAt: deps.clock.nowIso(),
  });
}

function capabilityFor(
  input: CoordinateExecutionRunInput,
  deps: CoordinateExecutionRunDependencies,
): ProviderCapabilityDescriptor | undefined {
  const lane = input.intent.requestedLane;
  if (lane === "none") return undefined;
  const described =
    lane === "ai"
      ? deps.providers.ai.describeCapability()
      : lane === "git"
        ? deps.providers.git.describeCapability()
        : deps.providers.cursor.describeCapability();
  const sourceAvailable = deps.availableSources.includes(
    input.intent.requestedSource,
  );
  const declaredSourceMatches =
    input.context.declaredSource === input.intent.requestedSource;
  return {
    ...described,
    lane,
    available:
      described.available && (!declaredSourceMatches || sourceAvailable),
    verified: lane === "cursor" ? false : described.verified,
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

async function invokeProvider(
  request: CoordinateProviderRequest,
  run: ExecutionRun,
  input: CoordinateExecutionRunInput,
  deps: CoordinateExecutionRunDependencies,
): Promise<InvokeOutcome> {
  return invokeWithTimeoutAndCancellation(
    (signal) => {
      const common = {
        ...request,
        runId: run.runId,
        signal,
        timeoutMs: input.timeoutMs,
      };
      switch (run.intent.requestedLane) {
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
      timeoutMs: input.timeoutMs,
      signal: input.signal,
      correlationId: run.correlationId,
      maxRetries: 0,
    },
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

  const providerResult = outcome.result;
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

export async function coordinateExecutionRun(
  input: CoordinateExecutionRunInput,
  deps: CoordinateExecutionRunDependencies,
): Promise<CoordinateExecutionRunResult> {
  const stateTrace: ExecutionRun["state"][] = [];
  const noUsage = unavailableUsage("not_validated");
  const capability = capabilityFor(input, deps);
  const created = await deps.execution.createExecutionRun({
    intent: input.intent,
    context: input.context,
    capability,
  });

  if (created.run) stateTrace.push(created.run.state);
  if (!created.ok) {
    if (created.run) {
      emit(deps, created.run, {
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
      providerInvoked: false,
      stateTrace,
      validatedUsage: noUsage,
      lateEvidenceRecorded: false,
    };
  }

  let current = created.run;
  emit(deps, current, {
    type: "validation",
    detail: { accepted: true, source: current.disclosure.source },
  });

  const preEngagementFailure =
    input.intent.requestedLane === "none"
      ? normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "No provider lane selected",
          retryable: true,
          correlationId: current.correlationId,
        })
      : !requestMatchesRun(input.providerRequest, current)
        ? normalizedFailure({
            family: "validation",
            code: "VALIDATION_ERROR",
            userMessage: "Provider request does not match the validated run",
            retryable: false,
            correlationId: current.correlationId,
          })
        : input.providerRequest &&
            !validateUntrustedProviderRequest(
              input.providerRequest,
              current.correlationId,
            ).ok
          ? normalizedFailure({
              family: "validation",
              code: "VALIDATION_ERROR",
              userMessage: "Provider request failed boundary validation",
              retryable: false,
              correlationId: current.correlationId,
            })
        : undefined;

  if (preEngagementFailure) {
    const blocked = await blockIdleRun(current, preEngagementFailure, deps);
    if (blocked.run) stateTrace.push(blocked.run.state);
    return {
      ok: false,
      failure: blocked.ok ? preEngagementFailure : blocked.failure,
      run: blocked.run ?? current,
      providerInvoked: false,
      stateTrace,
      validatedUsage: noUsage,
      lateEvidenceRecorded: false,
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
      providerInvoked: false,
      stateTrace,
      validatedUsage: noUsage,
      lateEvidenceRecorded: false,
    };
  }
  current = started.run;
  stateTrace.push(current.state);
  emit(deps, current, {
    type: "run_transition",
    detail: { state: current.state, source: current.disclosure.source },
  });

  const invocation = await invokeProvider(
    input.providerRequest!,
    current,
    input,
    deps,
  );
  emit(deps, current, {
    type: "provider_invocation",
    detail: { outcome: invocation.status, source: current.disclosure.source },
  });

  const terminal = await transitionFromInvocation(current, invocation, deps);
  if (!terminal.result.ok) {
    return {
      ok: false,
      failure: terminal.result.failure,
      run: terminal.result.run ?? current,
      providerInvoked: true,
      stateTrace,
      validatedUsage: terminal.usage,
      lateEvidenceRecorded: false,
    };
  }
  current = terminal.result.run;
  stateTrace.push(current.state);
  emit(deps, current, {
    type: "run_transition",
    detail: { state: current.state, source: current.disclosure.source },
  });

  let lateEvidenceRecorded = false;
  if (input.lateEvidenceSummary) {
    const late = await deps.execution.transitionExecutionRun({
      runId: current.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: input.lateEvidenceSummary,
    });
    if (late.ok) {
      current = late.run;
      lateEvidenceRecorded = true;
      emit(deps, current, {
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
        providerInvoked: true,
        stateTrace,
        validatedUsage: terminal.usage,
        lateEvidenceRecorded,
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
        providerInvoked: true,
        stateTrace,
        validatedUsage: terminal.usage,
        lateEvidenceRecorded,
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
import type { ExecutionReadinessAssessment } from "./executionReadiness";

const MAX_TEXT = 240;
const SENSITIVE =
  /sk-[a-zA-Z0-9_-]{8,}|ghp_[a-zA-Z0-9]{8,}|xox[baprs]-[a-zA-Z0-9-]+|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY/gi;

function boundedRedacted(value: string | undefined): string | null {
  if (!value) return null;
  return value.replace(SENSITIVE, "[REDACTED]").slice(0, MAX_TEXT);
}

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

function runCompleteness(run: ExecutionRun): Completeness | "unavailable" {
  if (run.externalResult?.kind === "success") {
    return run.externalResult.completeness;
  }
  const evidence = run.evidence?.at(-1);
  return evidence?.completeness ?? "unavailable";
}

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

/**
 * Transport-neutral D3 projection. It deliberately omits provider requests,
 * raw results, adapter objects, signals, commands, and executable values.
 */
export function createExecutionProjection(input: {
  readonly run: ExecutionRun;
  readonly readinessAssessment: ExecutionReadinessAssessment;
  readonly validatedUsage?: UsageSummary;
  readonly openReserves?: readonly string[];
}): ExecutionProjection {
  const { run } = input;
  const resultSummary =
    run.externalResult?.kind === "success"
      ? boundedRedacted(run.externalResult.redactedSummary)
      : null;

  return {
    runId: run.runId,
    correlationId: run.correlationId,
    state: run.state,
    source: run.disclosure.source,
    providerLane: run.disclosure.providerLane,
    phase: observablePhase(run.state),
    completeness: runCompleteness(run),
    resultSummary,
    failure: run.failure
      ? {
          family: run.failure.family,
          code: run.failure.code,
          message:
            boundedRedacted(run.failure.userMessage) ?? "Failure details unavailable",
          retryable: run.failure.retryable,
        }
      : null,
    blockedReason: boundedRedacted(run.blockedReason),
    humanGate: run.gate
      ? {
          gateId: run.gate.gateId,
          question:
            boundedRedacted(run.gate.question) ?? "Human decision required",
          required: run.gate.required,
          decision: run.gate.decision ?? null,
        }
      : null,
    evidenceSummary: (run.evidence ?? []).map((evidence) => ({
      evidenceId: evidence.evidenceId,
      source: evidence.source,
      completeness: evidence.completeness,
      producedAt: evidence.producedAt,
      late: evidence.late,
      official: true,
    })),
    usage: input.validatedUsage ?? run.usage,
    openReserves:
      input.openReserves ?? input.readinessAssessment.openReserves,
    readinessAssessment: input.readinessAssessment,
    limits: run.disclosure.limits,
    persistence: run.persistence,
    cursorUnverified: true,
    gitWrite: false,
  };
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts`
```typescript
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

export type ExecutionReadinessProof = {
  readonly fixturePathDemonstrated: boolean;
  readonly projectionDemonstrated: boolean;
  readonly disclosuresDemonstrated: boolean;
};

export const D2D3_OPEN_RESERVES = [
  "R-QA-REV-01 — OPEN NOT LIFTED",
  "R-QA-REV-02 — OPEN NOT LIFTED",
  "R-QA-D2C-01 — OPEN NOT LIFTED",
  "Cursor product capabilities — UNVERIFIED",
  "memory process-local only",
  "R-PR-D2D2-01 — MINOR",
] as const;

/**
 * Pure D2-D3 readiness assessment. Higher readiness levels are deliberately
 * bounded by the gates and artifacts that this delivery does not consume.
 */
export function assessExecutionReadiness(
  proof: ExecutionReadinessProof,
): ExecutionReadinessAssessment {
  const uxDemonstrated =
    proof.fixturePathDemonstrated &&
    proof.projectionDemonstrated &&
    proof.disclosuresDemonstrated;

  return {
    uxExploration: {
      status: uxDemonstrated ? "demonstrated" : "not_demonstrated",
      reasons: uxDemonstrated
        ? [
            "fixture path demonstrated",
            "provider-independent projection demonstrated",
            "source and persistence disclosures demonstrated",
          ]
        : ["fixture path, projection, and disclosures are all required"],
    },
    uiDelivery: {
      status: "not_demonstrated",
      reasons: [
        "no UI or accessibility delivery",
        "no Figma evidence",
        "no D3 transport selected",
      ],
    },
    strongRuntimeVerdict: {
      status: "blocked",
      reasons: [
        "G-D2D-CURSOR-01 not consumed",
        "G-D2D-PERSIST-01 not consumed",
        "Cursor unverified",
        "memory is process-local",
        "no live provider proof",
      ],
    },
    openReserves: D2D3_OPEN_RESERVES,
  };
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts`
```typescript
import {
  coordinateExecutionRun,
  type CoordinateExecutionRunInput,
  type CoordinateExecutionRunResult,
} from "../application/coordinateExecutionRun";
import {
  createExecutionProjection,
  type ExecutionProjection,
} from "../application/executionProjection";
import {
  assessExecutionReadiness,
  type ExecutionReadinessAssessment,
  type ExecutionReadinessProof,
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
    input: CoordinateExecutionRunInput,
  ) => Promise<CoordinateExecutionRunResult>;
  readonly project: (
    run: ExecutionRun,
    proof: ExecutionReadinessProof,
  ) => ExecutionProjection;
  readonly assessReadiness: (
    proof: ExecutionReadinessProof,
  ) => ExecutionReadinessAssessment;
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

  const assessReadiness = (proof: ExecutionReadinessProof) =>
    assessExecutionReadiness(proof);

  return {
    coordinate: (input) =>
      coordinateExecutionRun(input, {
        execution,
        providers,
        events: providers.events,
        clock,
        availableSources: ["fixture"],
      }),
    project: (run, proof) => {
      const readinessAssessment = assessReadiness(proof);
      return createExecutionProjection({
        run,
        readinessAssessment,
        openReserves: readinessAssessment.openReserves,
      });
    },
    assessReadiness,
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

## 18. Diff complet contre `de2800aa836bb8221dc2912414126b7a3e6a1f58`

```diff
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
@@ -0,0 +1,148 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+const completeProof = {
+  fixturePathDemonstrated: true,
+  projectionDemonstrated: true,
+  disclosuresDemonstrated: true,
+} as const;
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
+    const projection = composition.project(result.run, completeProof);
+    expect(projection.state).toBe("succeeded");
+    expect(projection.source).toBe("fixture");
+    expect(projection.providerLane).toBe("ai");
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
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
@@ -0,0 +1,144 @@
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
+    const projection = composition.project(result.run, {
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+
+    expect(result.run.disclosure.source).toBe("fixture");
+    expect(evidence?.source).toBe("fixture");
+    expect(projection.source).toBe("fixture");
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
+      expect(result.run?.state).toBe("blocked");
+      expect(result.run?.disclosure.source).toBe(source);
+      expect(result.providerInvoked).toBe(false);
+      expect(result.run?.evidence).toBeUndefined();
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
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
@@ -0,0 +1,244 @@
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
+    expect(result.run?.state).toBe("blocked");
+    expect(result.providerInvoked).toBe(false);
+    expect(JSON.stringify(result)).not.toContain(sensitive);
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
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
@@ -0,0 +1,106 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+const proof = {
+  fixturePathDemonstrated: true,
+  projectionDemonstrated: true,
+  disclosuresDemonstrated: true,
+} as const;
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
+  return composition.project(coordinated.run, proof);
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
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
@@ -0,0 +1,78 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assessExecutionReadiness,
+  D2D3_OPEN_RESERVES,
+} from "@/lib/oa/execution-run";
+
+describe("D2-D3 bounded readiness assessment", () => {
+  it("demonstrates UX exploration only when every fixture proof is present", () => {
+    const demonstrated = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+    const incomplete = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: false,
+      disclosuresDemonstrated: true,
+    });
+
+    expect(demonstrated.uxExploration.status).toBe("demonstrated");
+    expect(incomplete.uxExploration.status).toBe("not_demonstrated");
+  });
+
+  it("keeps UI delivery not demonstrated and strong runtime blocked", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
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
+  it("carries every inherited reserve without lifting it", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+
+    expect(assessment.openReserves).toEqual(D2D3_OPEN_RESERVES);
+    expect(assessment.openReserves).toHaveLength(6);
+  });
+
+  it("uses only the three bounded statuses and makes no excessive claim", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
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
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
@@ -52,7 +52,7 @@
     for (const file of files) {
       for (const line of importsOf(file)) {
         if (
-          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|cursor|node:|from\s+["']next|from\s+["']react/.test(
+          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|@cursor\/|node:|from\s+["']next|from\s+["']react/.test(
             line,
           )
         ) {
@@ -170,3 +170,59 @@
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
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
@@ -0,0 +1,582 @@
+import { normalizedFailure } from "../domain/errors";
+import {
+  validateUntrustedProviderRequest,
+  validateUntrustedProviderResult,
+} from "../domain/providerBoundary";
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  ExecutionRun,
+  ExecutionSource,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
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
+import type {
+  CreateExecutionRunResult,
+} from "./createExecutionRun";
+import type {
+  TransitionExecutionRunResult,
+} from "./transitionExecutionRun";
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
+export type CoordinateExecutionRunDependencies = {
+  readonly execution: ExecutionAuthority;
+  readonly providers: {
+    readonly ai: AiExecutionPort;
+    readonly git: GitReadPort;
+    readonly cursor: CursorExecutionPort;
+  };
+  readonly events: ExecutionEventSinkPort;
+  readonly clock: ClockPort;
+  readonly availableSources: readonly ExecutionSource[];
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
+export type CoordinateExecutionRunResult =
+  | {
+      readonly ok: true;
+      readonly run: ExecutionRun;
+      readonly providerInvoked: boolean;
+      readonly stateTrace: readonly ExecutionRun["state"][];
+      readonly validatedUsage: UsageSummary;
+      readonly lateEvidenceRecorded: boolean;
+    }
+  | {
+      readonly ok: false;
+      readonly failure: NormalizedFailure;
+      readonly run?: ExecutionRun;
+      readonly providerInvoked: boolean;
+      readonly stateTrace: readonly ExecutionRun["state"][];
+      readonly validatedUsage: UsageSummary;
+      readonly lateEvidenceRecorded: boolean;
+    };
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
+function emit(
+  deps: CoordinateExecutionRunDependencies,
+  run: ExecutionRun,
+  event: Pick<ExecutionEvent, "type" | "detail">,
+): void {
+  deps.events.emit({
+    ...event,
+    correlationId: run.correlationId,
+    runId: run.runId,
+    providerLane: run.disclosure.providerLane,
+    occurredAt: deps.clock.nowIso(),
+  });
+}
+
+function capabilityFor(
+  input: CoordinateExecutionRunInput,
+  deps: CoordinateExecutionRunDependencies,
+): ProviderCapabilityDescriptor | undefined {
+  const lane = input.intent.requestedLane;
+  if (lane === "none") return undefined;
+  const described =
+    lane === "ai"
+      ? deps.providers.ai.describeCapability()
+      : lane === "git"
+        ? deps.providers.git.describeCapability()
+        : deps.providers.cursor.describeCapability();
+  const sourceAvailable = deps.availableSources.includes(
+    input.intent.requestedSource,
+  );
+  const declaredSourceMatches =
+    input.context.declaredSource === input.intent.requestedSource;
+  return {
+    ...described,
+    lane,
+    available:
+      described.available && (!declaredSourceMatches || sourceAvailable),
+    verified: lane === "cursor" ? false : described.verified,
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
+async function invokeProvider(
+  request: CoordinateProviderRequest,
+  run: ExecutionRun,
+  input: CoordinateExecutionRunInput,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<InvokeOutcome> {
+  return invokeWithTimeoutAndCancellation(
+    (signal) => {
+      const common = {
+        ...request,
+        runId: run.runId,
+        signal,
+        timeoutMs: input.timeoutMs,
+      };
+      switch (run.intent.requestedLane) {
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
+      timeoutMs: input.timeoutMs,
+      signal: input.signal,
+      correlationId: run.correlationId,
+      maxRetries: 0,
+    },
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
+  const providerResult = outcome.result;
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
+export async function coordinateExecutionRun(
+  input: CoordinateExecutionRunInput,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<CoordinateExecutionRunResult> {
+  const stateTrace: ExecutionRun["state"][] = [];
+  const noUsage = unavailableUsage("not_validated");
+  const capability = capabilityFor(input, deps);
+  const created = await deps.execution.createExecutionRun({
+    intent: input.intent,
+    context: input.context,
+    capability,
+  });
+
+  if (created.run) stateTrace.push(created.run.state);
+  if (!created.ok) {
+    if (created.run) {
+      emit(deps, created.run, {
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
+      providerInvoked: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+    };
+  }
+
+  let current = created.run;
+  emit(deps, current, {
+    type: "validation",
+    detail: { accepted: true, source: current.disclosure.source },
+  });
+
+  const preEngagementFailure =
+    input.intent.requestedLane === "none"
+      ? normalizedFailure({
+          family: "provider_unavailable",
+          code: "PROVIDER_UNAVAILABLE",
+          userMessage: "No provider lane selected",
+          retryable: true,
+          correlationId: current.correlationId,
+        })
+      : !requestMatchesRun(input.providerRequest, current)
+        ? normalizedFailure({
+            family: "validation",
+            code: "VALIDATION_ERROR",
+            userMessage: "Provider request does not match the validated run",
+            retryable: false,
+            correlationId: current.correlationId,
+          })
+        : input.providerRequest &&
+            !validateUntrustedProviderRequest(
+              input.providerRequest,
+              current.correlationId,
+            ).ok
+          ? normalizedFailure({
+              family: "validation",
+              code: "VALIDATION_ERROR",
+              userMessage: "Provider request failed boundary validation",
+              retryable: false,
+              correlationId: current.correlationId,
+            })
+        : undefined;
+
+  if (preEngagementFailure) {
+    const blocked = await blockIdleRun(current, preEngagementFailure, deps);
+    if (blocked.run) stateTrace.push(blocked.run.state);
+    return {
+      ok: false,
+      failure: blocked.ok ? preEngagementFailure : blocked.failure,
+      run: blocked.run ?? current,
+      providerInvoked: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
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
+      providerInvoked: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+    };
+  }
+  current = started.run;
+  stateTrace.push(current.state);
+  emit(deps, current, {
+    type: "run_transition",
+    detail: { state: current.state, source: current.disclosure.source },
+  });
+
+  const invocation = await invokeProvider(
+    input.providerRequest!,
+    current,
+    input,
+    deps,
+  );
+  emit(deps, current, {
+    type: "provider_invocation",
+    detail: { outcome: invocation.status, source: current.disclosure.source },
+  });
+
+  const terminal = await transitionFromInvocation(current, invocation, deps);
+  if (!terminal.result.ok) {
+    return {
+      ok: false,
+      failure: terminal.result.failure,
+      run: terminal.result.run ?? current,
+      providerInvoked: true,
+      stateTrace,
+      validatedUsage: terminal.usage,
+      lateEvidenceRecorded: false,
+    };
+  }
+  current = terminal.result.run;
+  stateTrace.push(current.state);
+  emit(deps, current, {
+    type: "run_transition",
+    detail: { state: current.state, source: current.disclosure.source },
+  });
+
+  let lateEvidenceRecorded = false;
+  if (input.lateEvidenceSummary) {
+    const late = await deps.execution.transitionExecutionRun({
+      runId: current.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: input.lateEvidenceSummary,
+    });
+    if (late.ok) {
+      current = late.run;
+      lateEvidenceRecorded = true;
+      emit(deps, current, {
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
+        providerInvoked: true,
+        stateTrace,
+        validatedUsage: terminal.usage,
+        lateEvidenceRecorded,
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
+        providerInvoked: true,
+        stateTrace,
+        validatedUsage: terminal.usage,
+        lateEvidenceRecorded,
+      };
+}
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
@@ -0,0 +1,144 @@
+import type {
+  Completeness,
+  ExecutionRun,
+  ExecutionState,
+  UsageSummary,
+} from "../domain/types";
+import type { ExecutionReadinessAssessment } from "./executionReadiness";
+
+const MAX_TEXT = 240;
+const SENSITIVE =
+  /sk-[a-zA-Z0-9_-]{8,}|ghp_[a-zA-Z0-9]{8,}|xox[baprs]-[a-zA-Z0-9-]+|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY/gi;
+
+function boundedRedacted(value: string | undefined): string | null {
+  if (!value) return null;
+  return value.replace(SENSITIVE, "[REDACTED]").slice(0, MAX_TEXT);
+}
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
+function runCompleteness(run: ExecutionRun): Completeness | "unavailable" {
+  if (run.externalResult?.kind === "success") {
+    return run.externalResult.completeness;
+  }
+  const evidence = run.evidence?.at(-1);
+  return evidence?.completeness ?? "unavailable";
+}
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
+/**
+ * Transport-neutral D3 projection. It deliberately omits provider requests,
+ * raw results, adapter objects, signals, commands, and executable values.
+ */
+export function createExecutionProjection(input: {
+  readonly run: ExecutionRun;
+  readonly readinessAssessment: ExecutionReadinessAssessment;
+  readonly validatedUsage?: UsageSummary;
+  readonly openReserves?: readonly string[];
+}): ExecutionProjection {
+  const { run } = input;
+  const resultSummary =
+    run.externalResult?.kind === "success"
+      ? boundedRedacted(run.externalResult.redactedSummary)
+      : null;
+
+  return {
+    runId: run.runId,
+    correlationId: run.correlationId,
+    state: run.state,
+    source: run.disclosure.source,
+    providerLane: run.disclosure.providerLane,
+    phase: observablePhase(run.state),
+    completeness: runCompleteness(run),
+    resultSummary,
+    failure: run.failure
+      ? {
+          family: run.failure.family,
+          code: run.failure.code,
+          message:
+            boundedRedacted(run.failure.userMessage) ?? "Failure details unavailable",
+          retryable: run.failure.retryable,
+        }
+      : null,
+    blockedReason: boundedRedacted(run.blockedReason),
+    humanGate: run.gate
+      ? {
+          gateId: run.gate.gateId,
+          question:
+            boundedRedacted(run.gate.question) ?? "Human decision required",
+          required: run.gate.required,
+          decision: run.gate.decision ?? null,
+        }
+      : null,
+    evidenceSummary: (run.evidence ?? []).map((evidence) => ({
+      evidenceId: evidence.evidenceId,
+      source: evidence.source,
+      completeness: evidence.completeness,
+      producedAt: evidence.producedAt,
+      late: evidence.late,
+      official: true,
+    })),
+    usage: input.validatedUsage ?? run.usage,
+    openReserves:
+      input.openReserves ?? input.readinessAssessment.openReserves,
+    readinessAssessment: input.readinessAssessment,
+    limits: run.disclosure.limits,
+    persistence: run.persistence,
+    cursorUnverified: true,
+    gitWrite: false,
+  };
+}
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
@@ -0,0 +1,76 @@
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
+export type ExecutionReadinessProof = {
+  readonly fixturePathDemonstrated: boolean;
+  readonly projectionDemonstrated: boolean;
+  readonly disclosuresDemonstrated: boolean;
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
+/**
+ * Pure D2-D3 readiness assessment. Higher readiness levels are deliberately
+ * bounded by the gates and artifacts that this delivery does not consume.
+ */
+export function assessExecutionReadiness(
+  proof: ExecutionReadinessProof,
+): ExecutionReadinessAssessment {
+  const uxDemonstrated =
+    proof.fixturePathDemonstrated &&
+    proof.projectionDemonstrated &&
+    proof.disclosuresDemonstrated;
+
+  return {
+    uxExploration: {
+      status: uxDemonstrated ? "demonstrated" : "not_demonstrated",
+      reasons: uxDemonstrated
+        ? [
+            "fixture path demonstrated",
+            "provider-independent projection demonstrated",
+            "source and persistence disclosures demonstrated",
+          ]
+        : ["fixture path, projection, and disclosures are all required"],
+    },
+    uiDelivery: {
+      status: "not_demonstrated",
+      reasons: [
+        "no UI or accessibility delivery",
+        "no Figma evidence",
+        "no D3 transport selected",
+      ],
+    },
+    strongRuntimeVerdict: {
+      status: "blocked",
+      reasons: [
+        "G-D2D-CURSOR-01 not consumed",
+        "G-D2D-PERSIST-01 not consumed",
+        "Cursor unverified",
+        "memory is process-local",
+        "no live provider proof",
+      ],
+    },
+    openReserves: D2D3_OPEN_RESERVES,
+  };
+}
--- a/projects/sfia-studio/app/lib/oa/execution-run/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -106,3 +106,23 @@
   InvokeOutcome,
   RetryClass,
 } from "./application/providerInvocation";
+export { coordinateExecutionRun } from "./application/coordinateExecutionRun";
+export type {
+  CoordinateExecutionRunDependencies,
+  CoordinateExecutionRunInput,
+  CoordinateExecutionRunResult,
+  CoordinateProviderRequest,
+  ExecutionAuthority,
+} from "./application/coordinateExecutionRun";
+export { createExecutionProjection } from "./application/executionProjection";
+export type { ExecutionProjection } from "./application/executionProjection";
+export {
+  assessExecutionReadiness,
+  D2D3_OPEN_RESERVES,
+} from "./application/executionReadiness";
+export type {
+  ExecutionReadinessAssessment,
+  ExecutionReadinessProof,
+  ReadinessLevel,
+  ReadinessStatus,
+} from "./application/executionReadiness";
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
@@ -0,0 +1,102 @@
+import {
+  coordinateExecutionRun,
+  type CoordinateExecutionRunInput,
+  type CoordinateExecutionRunResult,
+} from "../application/coordinateExecutionRun";
+import {
+  createExecutionProjection,
+  type ExecutionProjection,
+} from "../application/executionProjection";
+import {
+  assessExecutionReadiness,
+  type ExecutionReadinessAssessment,
+  type ExecutionReadinessProof,
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
+    input: CoordinateExecutionRunInput,
+  ) => Promise<CoordinateExecutionRunResult>;
+  readonly project: (
+    run: ExecutionRun,
+    proof: ExecutionReadinessProof,
+  ) => ExecutionProjection;
+  readonly assessReadiness: (
+    proof: ExecutionReadinessProof,
+  ) => ExecutionReadinessAssessment;
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
+  const assessReadiness = (proof: ExecutionReadinessProof) =>
+    assessExecutionReadiness(proof);
+
+  return {
+    coordinate: (input) =>
+      coordinateExecutionRun(input, {
+        execution,
+        providers,
+        events: providers.events,
+        clock,
+        availableSources: ["fixture"],
+      }),
+    project: (run, proof) => {
+      const readinessAssessment = assessReadiness(proof);
+      return createExecutionProjection({
+        run,
+        readinessAssessment,
+        openReserves: readinessAssessment.openReserves,
+      });
+    },
+    assessReadiness,
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
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
@@ -12,3 +12,7 @@
   composeExecutionRunProvidersFake,
   type ExecutionRunProviderComposition,
 } from "./composeExecutionRunProviders";
+export {
+  composeExecutionRunD2D3,
+  type ExecutionRunD2D3Composition,
+} from "./composeExecutionRunD2D3";
```
