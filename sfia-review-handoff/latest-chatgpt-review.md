# SFIA Review Pack — Validation D1 Shared Platform Integration

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 08:40:37 CEST |
| Cycle | QA / validation |
| Profil | Critical |
| Gate consommé | `GO VALIDATION — D1 SHARED PLATFORM INTEGRATION` |
| Gate Live | **non consommé** |
| Repo | mcleland147/sfia-workspace |
| Branche | `delivery/sfia-studio-d1-shared-platform-integration` |
| Base | `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` |
| HEAD code validé | `67d946f883c224f47ac269f07056928b63ecff39` |
| HEAD final (docs validation) | `97d0a65eb88d1a465ea2f6c18fec54bad67c3b02` |
| OpenAI réel | non exécuté |
| Push projet | non |

## Verdict

**D1 SHARED PLATFORM INTEGRATION VALIDATED WITH RESERVES — MORRIS LIVE DECISION REQUIRED**

## Local Git Truth Check

- HEAD code attendu `67d946f883c224f47ac269f07056928b63ecff39` confirmé avant commit docs
- origin/main `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` inchangé
- untracked = `.tmp-sfia-review/**`
- handoff delivery `1652735…` / `54ce74ba…` vérifié
- État final :

```
## delivery/sfia-studio-d1-shared-platform-integration...origin/main [ahead 5]
?? .tmp-sfia-review/
```

## Commits origin/main..HEAD

```
97d0a65 (HEAD -> delivery/sfia-studio-d1-shared-platform-integration) docs(sfia-studio): validate D1 shared platform integration
67d946f docs(sfia-studio): document D1 shared platform delivery
3e7f863 test(sfia-studio): validate unified D1 platform flow
0ef37d4 feat(sfia-studio): expose D1 tools and canonical sources
28e9900 feat(sfia-studio): integrate D1 with shared platform
```

## Diff name-status (final)

```
A	projects/sfia-studio/84-d1-shared-platform-integration-delivery-report.md
A	projects/sfia-studio/85-d1-shared-platform-integration-validation-report.md
M	projects/sfia-studio/README.md
A	projects/sfia-studio/app/__tests__/d1/intake-platform-integration.test.ts
A	projects/sfia-studio/app/e2e/d1-platform-integration.spec.ts
M	projects/sfia-studio/app/features/d1/intake/IntakeView.tsx
M	projects/sfia-studio/app/lib/d1/intake/actions.ts
M	projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts
A	projects/sfia-studio/app/lib/d1/intake/canonicalContext.ts
A	projects/sfia-studio/app/lib/d1/intake/d1EventSink.ts
M	projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts
M	projects/sfia-studio/app/lib/d1/intake/index.ts
A	projects/sfia-studio/app/lib/d1/intake/platformFlag.ts
```

## Diff stat (final)

```
...-shared-platform-integration-delivery-report.md | 130 ++++++++++++
 ...hared-platform-integration-validation-report.md | 140 +++++++++++++
 projects/sfia-studio/README.md                     |   8 +-
 .../d1/intake-platform-integration.test.ts         |  84 ++++++++
 .../app/e2e/d1-platform-integration.spec.ts        |  71 +++++++
 .../app/features/d1/intake/IntakeView.tsx          |  60 +++++-
 projects/sfia-studio/app/lib/d1/intake/actions.ts  |  25 ++-
 .../sfia-studio/app/lib/d1/intake/analyzeIntent.ts | 228 ++++++++++++++++-----
 .../app/lib/d1/intake/canonicalContext.ts          |  63 ++++++
 .../sfia-studio/app/lib/d1/intake/d1EventSink.ts   |  92 +++++++++
 .../app/lib/d1/intake/fakeIntakeProvider.ts        | 121 ++++++++++-
 projects/sfia-studio/app/lib/d1/intake/index.ts    |   5 +
 .../sfia-studio/app/lib/d1/intake/platformFlag.ts  |  16 ++
 13 files changed, 973 insertions(+), 70 deletions(-)
```

## Diff code delivery (hors commit 85)

```
A	projects/sfia-studio/84-d1-shared-platform-integration-delivery-report.md
M	projects/sfia-studio/README.md
A	projects/sfia-studio/app/__tests__/d1/intake-platform-integration.test.ts
A	projects/sfia-studio/app/e2e/d1-platform-integration.spec.ts
M	projects/sfia-studio/app/features/d1/intake/IntakeView.tsx
M	projects/sfia-studio/app/lib/d1/intake/actions.ts
M	projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts
A	projects/sfia-studio/app/lib/d1/intake/canonicalContext.ts
A	projects/sfia-studio/app/lib/d1/intake/d1EventSink.ts
M	projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts
M	projects/sfia-studio/app/lib/d1/intake/index.ts
A	projects/sfia-studio/app/lib/d1/intake/platformFlag.ts
```

## Sources consultées

Méthode (template, routing, operating model, guardrails) · docs 77–82 · 84 · README · handoff delivery · diff intégral origin/main..HEAD · fichiers analyzeIntent / canonicalContext / d1EventSink / platformFlag / fakeIntake / IntakeView / actions

## Architecture

Voir document 85 §4 — PASS sur imports, flag, sink technique, allowlist 4 sources, tool loop partagé, métier D1/OPS1 séparés.

## Sécurité

Voir document 85 §5 — tools RO only · deny .env · redaction · fail-closed · C4 mutation · NO_MUTATION · secrets absents du diff.

## Fonctionnel fake

Voir document 85 §6 — PASS avec réserve UX OPEN_CYCLE + anti-claim banner.

## Tests (ce cycle)

| Suite | Résultat |
|-------|----------|
| Vitest | 210/210 PASS (~4.5s) |
| Lint | PASS |
| Typecheck | PASS |
| Build | PASS |
| E2E requis (39) | 39/39 PASS (~34s) |
| CI GitHub | absente ≠ PASS |
| OpenAI | non exécuté |

Extrait E2E final :

```
atching › context unavailable is honest (forced query) (420ms)
  ✓  26 e2e/d1-c3-context-matching.spec.ts:230:7 › D1-C3 Existing Context Matching › workspace and OPS1 legacy remain reachable (512ms)
  ✓  27 e2e/d1-c4-confirmation-mutation.spec.ts:29:7 › D1-C4 Human Confirmation and Bounded Project Mutation › no-match → prepare create → edit → confirm → cockpit + idempotent replay (852ms)
  ✓  28 e2e/d1-c4-confirmation-mutation.spec.ts:84:7 › D1-C4 Human Confirmation and Bounded Project Mutation › idempotent replay via second create with same key path (unit covered; UI double-guard) (548ms)
  ✓  29 e2e/d1-c4-confirmation-mutation.spec.ts:111:7 › D1-C4 Human Confirmation and Bounded Project Mutation › existing project confirm → NO_MUTATION + persistence note (812ms)
  ✓  30 e2e/d1-c4-confirmation-mutation.spec.ts:149:7 › D1-C4 Human Confirmation and Bounded Project Mutation › analyze-only confirmation closes without mutation (502ms)
  ✓  31 e2e/d1-c4-confirmation-mutation.spec.ts:173:7 › D1-C4 Human Confirmation and Bounded Project Mutation › cancel confirmation without mutation (434ms)
  ✓  32 e2e/d1-c4-confirmation-mutation.spec.ts:186:7 › D1-C4 Human Confirmation and Bounded Project Mutation › inactive project warning on existing confirm path (788ms)
  ✓  33 e2e/d1-c4-confirmation-mutation.spec.ts:215:9 › D1-C4 Human Confirmation and Bounded Project Mutation › confirm create responsive no H-scroll at 1728 (570ms)
  ✓  34 e2e/d1-c4-confirmation-mutation.spec.ts:215:9 › D1-C4 Human Confirmation and Bounded Project Mutation › confirm create responsive no H-scroll at 1280 (473ms)
  ✓  35 e2e/d1-c4-confirmation-mutation.spec.ts:215:9 › D1-C4 Human Confirmation and Bounded Project Mutation › confirm create responsive no H-scroll at 1024 (443ms)
  ✓  36 e2e/d1-c4-confirmation-mutation.spec.ts:239:7 › D1-C4 Human Confirmation and Bounded Project Mutation › mutation error shown for invalid draft fields (536ms)
  ✓  37 e2e/d1-platform-integration.spec.ts:9:7 › D1 Shared Platform Integration — unified fixture › fake provider + canonical sources + optional tool + C2→C3→C4 create (589ms)
  ✓  38 e2e/d1-platform-integration.spec.ts:54:7 › D1 Shared Platform Integration — unified fixture › tool deny path remains visible without secrets (392ms)
[WebServer]  ⨯ [Error: aborted] { code: 'ECONNRESET', digest: '2652521801' }
  ✓  39 e2e/ops1-i1-session.spec.ts:15:7 › OPS1 I1 session + journal › creates session, appends turns, persists after reload (3.3s)

  39 passed (34.0s)

```

## Contenu complet — document 85

```markdown
# SFIA Studio — D1 Shared Platform Integration — Validation Report

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `85-d1-shared-platform-integration-validation-report.md` |
| **Statut** | `validation-local-candidate` |
| **Cycle** | QA / validation |
| **Profil** | Critical |
| **Gate consommé** | `GO VALIDATION — D1 SHARED PLATFORM INTEGRATION` |
| **Branche** | `delivery/sfia-studio-d1-shared-platform-integration` |
| **Base** | `origin/main` @ `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` |
| **HEAD validé** | `67d946f883c224f47ac269f07056928b63ecff39` |
| **Rapport delivery** | `84-d1-shared-platform-integration-delivery-report.md` |
| **Handoff delivery** | commit `1652735…` · blob `54ce74ba…` (vérifié) |
| **OpenAI réel** | **non exécuté** |
| **Gate suivant candidat** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` (non consommé) |

---

## 1. Objectif

Valider techniquement le delivery D1 ↔ Shared Platform (diff, architecture, sécurité, tests fake) avant toute Live Product Validation.

## 2. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| Branche | `delivery/sfia-studio-d1-shared-platform-integration` |
| HEAD | `67d946f883c224f47ac269f07056928b63ecff39` — conforme |
| origin/main | `416af8a5…` — inchangé |
| merge-base | = origin/main |
| staged | vide |
| untracked | `.tmp-sfia-review/**` seulement |
| `git diff --check` | PASS |
| Handoff delivery distant | conforme |

## 3. Diff contrôlé

- **12 fichiers** · **+826 / −70**
- Périmètre D1 intake/UI + tests + doc 84 + README
- Absents : method/prompts/.github/package.json/lockfiles/migrations/secrets/writes/B′/Cycle/GuidedSession/suppression OPS1

## 4. Architecture

| Règle | Verdict |
|-------|---------|
| D1 → OPS1 = 0 | PASS |
| platform → D1/OPS1 = 0 | PASS |
| Wrappers OPS1 conservés | PASS |
| Métier C2/C3/C4 dans D1 | PASS |
| ActionCandidate OPS1 | PASS |
| EventSink D1 technique only | PASS |
| Sources = 4 paths méthode allowlistés | PASS |
| Tool loop partagé platform | PASS |
| Flag `D1_PLATFORM_INTEGRATION` (legacy `=0`) | PASS |

## 5. Sécurité

| Contrôle | Verdict |
|----------|---------|
| Tools exposés = Git/GitHub **read-only** uniquement | PASS (13 tools `get_/search_/read_/list_`) |
| Deny `.env` (POLICY/DENIED) | PASS (unit + E2E) |
| Redaction EventSink | PASS |
| Secrets dans diff | ABSENTS |
| Live fail-closed / pas de fake silencieux | PASS (`resolveProvider`) |
| Mutation Project uniquement après C4 | PASS (E2E) |
| Existing Project = NO_MUTATION | PASS (E2E d1-c4) |
| Digests / modèle / tool names non secrets | PASS |

## 6. Fonctionnel fake

| Scénario | Verdict |
|----------|---------|
| Proposition directe sans tool | PASS |
| Tool RO succès (`__D1_TOOL_GIT_*__`) | PASS |
| Tool denied | PASS |
| 4 sources canoniques | PASS |
| Télémétrie UI (mode, modèle, sources, tools, rounds) | PASS |
| Clarification / C3 / C4 create | PASS |
| Existing NO_MUTATION | PASS |
| Aucune ouverture Cycle réelle | PASS (banner anti-claim) |

**Réserve UX :** libellé « Ouvrir un cycle (proposition) » — anti-claim banner présent (« Aucun projet ni cycle n’a été créé ») ; libellé à clarifier éventuellement en cycle UX séparé.

## 7. Tests (rejoués ce cycle)

| Suite | Commande | Résultat |
|-------|----------|----------|
| Vitest | `npx vitest run` | **210/210 PASS** (~4.5s) |
| Import boundaries | inclus Vitest | PASS |
| Lint | `npx next lint` | PASS |
| Typecheck | `npx tsc --noEmit` | PASS |
| Build | `npx next build` | PASS |
| E2E batch requis | playwright 7 fichiers | **39/39 PASS** (~34s) |
| CI GitHub | — | **absente** (≠ PASS) |
| OpenAI réel | — | **non exécuté** |

Note opérationnelle : serveur dev corrompu (`.next`) relancé proprement pour E2E ; aucun reset Git.

## 8. Rapport 84

Contenu obligatoire présent (métadonnées, architecture, tests, différés, anti-claims, rollback).
Statut **conservé** `delivery-local-candidate` (pas promu « validated » ici).
Gate suivant du 84 historiquement « GO VALIDATION » — désormais consommé ; la suite est documentée ici (85).

## 9. Réserves (non bloquantes)

1. Appels tools fake principalement via markers de fixture
2. Libellé OPEN_CYCLE_CANDIDATE (anti-claim banner OK)
3. Docs 77/78 encore dual-track historique
4. CI GitHub absente
5. Live / GPT réel non exécutés (interdit)

## 10. Dette

- Actualiser 77/78 après live unifié
- Cleanup wrappers OPS1 sous gate dédié
- Clarification microcopy OPEN_CYCLE si Morris l’exige

## 11. Non testé live

Appels OpenAI · Live Product Validation · OAuth · GitHub auth produit · CI

## 12. Rollback

Revert commits delivery `28e9900..67d946f` ou `D1_PLATFORM_INTEGRATION=0`.

## 13. Anti-claims

Pas LIVE PRODUCT VALIDATED · pas D1 COMPLETE · pas PROJECT LINKED · pas CYCLE OPENED · pas B′ · pas OPS1 DECOMMISSIONED · pas V3-ADOPTED · pas push/PR/merge · gate Live **non consommé**.

## 14. Gate suivant candidat

`GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION`

Activable seulement après analyse ChatGPT de ce rapport + confirmation Morris. **Non lancé ici.**

## 15. Verdict

**D1 SHARED PLATFORM INTEGRATION VALIDATED WITH RESERVES — MORRIS LIVE DECISION REQUIRED**
```

## Diff docs validation (84 note + README + 85)

```diff
diff --git a/projects/sfia-studio/84-d1-shared-platform-integration-delivery-report.md b/projects/sfia-studio/84-d1-shared-platform-integration-delivery-report.md
index 1a26535..788aae0 100644
--- a/projects/sfia-studio/84-d1-shared-platform-integration-delivery-report.md
+++ b/projects/sfia-studio/84-d1-shared-platform-integration-delivery-report.md
@@ -122,3 +122,9 @@ Puis, uniquement après validation technique :
 ## 12. Verdict delivery

 **D1 SHARED PLATFORM INTEGRATION DELIVERED — READY FOR VALIDATION**
+
+---
+
+## Note postérieure (non décisionnelle)
+
+**Observation (Git / cycle).** Le gate `GO VALIDATION — D1 SHARED PLATFORM INTEGRATION` a ensuite été consommé. Voir `85-d1-shared-platform-integration-validation-report.md`. Ce document **84** conserve son statut `delivery-local-candidate`. Le gate Live n’est pas consommé ici.
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1720b46..75f0598 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -525,6 +525,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [82-shared-technical-platform-validation-and-pr-readiness.md](./82-shared-technical-platform-validation-and-pr-readiness.md) | Validation / PR readiness — [#255](https://github.com/mcleland147/sfia-workspace/pull/255) **MERGED** |
 | [83-unmerged-docs-consolidation-pr-readiness.md](./83-unmerged-docs-consolidation-pr-readiness.md) | Consolidation docs 75–80 + alignement post-merge — **`draft-pr-candidate`** (historique post-#256) |
 | [84-d1-shared-platform-integration-delivery-report.md](./84-d1-shared-platform-integration-delivery-report.md) | Delivery D1 ↔ Shared Platform (tools + contexte) — **`delivery-local-candidate`** |
+| [85-d1-shared-platform-integration-validation-report.md](./85-d1-shared-platform-integration-validation-report.md) | Validation technique fake — **`validation-local-candidate`** |

 > **Statut Git :** Shared Technical Platform **MERGED** sur `main` @ `445702dc…` (PR #255, squash). Docs 75–80 consolidés via [#256](https://github.com/mcleland147/sfia-workspace/pull/256) @ `416af8a…`.
-> **Séquence active :** Platform intégrée → **D1 unifié (tools/context) livré localement** → validation → Live Product Validation → décision B′.
+> **Séquence active :** Platform intégrée → D1 unifié livré localement → **validation technique locale (85)** → Live Product Validation (gate Morris) → décision B′.
```

## Fichiers code clés (contenu)

### platformFlag.ts

```typescript
/**
 * Feature flag — D1 Shared Platform Integration (tools + canonical context).
 * Default ON. Set D1_PLATFORM_INTEGRATION=0 to force legacy complete()-only path.
 */
export function isD1PlatformIntegrationEnabled(): boolean {
  return process.env.D1_PLATFORM_INTEGRATION !== "0";
}

/** Test helper — temporarily force flag via env (caller restores). */
export function setD1PlatformIntegrationForTests(enabled: boolean | null): void {
  if (enabled === null) {
    delete process.env.D1_PLATFORM_INTEGRATION;
    return;
  }
  process.env.D1_PLATFORM_INTEGRATION = enabled ? "1" : "0";
}
```

### canonicalContext.ts

```typescript
/**
 * Load D1-bounded canonical method sources (core allowlist only — no CT project docs).
 */
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { loadCanonicalCoreSources } from "@/lib/platform/sfia-context/sourceLoader";
import { SFIA_METHOD_BASELINE } from "@/lib/platform/sfia-context/canonicalPaths";
import type { D1SourceTelemetry } from "./d1EventSink";

const PLATFORM_APPENDIX = `
## Shared platform (D1 unified — read-only)
- Un contexte SFIA canonique (méthode) est injecté ci-dessous.
- Des outils Git/GitHub READ-ONLY peuvent être disponibles.
- Utilise les tools uniquement pour des faits techniques (HEAD, status, repo) — jamais pour inventer un Project existant.
- proposedProjectId et proposedCycleId restent TOUJOURS null (matching = C3).
- Aucune mutation Project/Cycle. Pas de claim LIVE VALIDATED / D1 COMPLETE / PROJECT LINKED / CYCLE OPENED / V3-ADOPTED.
`.trim();

export function loadD1CanonicalContext(input: {
  workspaceRoot: string;
  correlationId: string;
  sink: EventSink;
}): {
  sources: D1SourceTelemetry[];
  systemAppendix: string;
} {
  const docs = loadCanonicalCoreSources(input.workspaceRoot);
  const sources: D1SourceTelemetry[] = [];

  for (const doc of docs) {
    const digestPrefix = doc.digest.slice(0, 16);
    input.sink.emit({
      type: "SOURCE_LOADED",
      correlationId: input.correlationId,
      detail: {
        path: doc.path,
        digestPrefix,
        role: doc.role,
      },
    });
    sources.push({
      path: doc.path,
      digestPrefix,
      role: doc.role,
    });
  }

  const compact = {
    methodBaseline: SFIA_METHOD_BASELINE,
    sourceDocuments: sources,
    note: "Excerpts omitted — digests only. Doctrine remains in Git.",
  };

  const systemAppendix = [
    PLATFORM_APPENDIX,
    "",
    "### Canonical sources (digests)",
    "```json",
    JSON.stringify(compact, null, 2),
    "```",
  ].join("\n");

  return { sources, systemAppendix };
}
```

### d1EventSink.ts

```typescript
/**
 * Minimal D1 EventSink — in-memory collector for intake telemetry.
 * No Project DB writes. Secrets must be redacted before emit when needed.
 */
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { redactSecrets } from "@/lib/platform/security/redaction";

function redactDetail(
  detail: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(detail)) {
    if (typeof v === "string") {
      out[k] = redactSecrets(v);
    } else if (v && typeof v === "object" && !Array.isArray(v)) {
      out[k] = redactDetail(v as Record<string, unknown>);
    } else {
      out[k] = v;
    }
  }
  return out;
}

export class D1MemoryEventSink implements EventSink {
  readonly events: TechnicalEvent[] = [];

  emit(event: TechnicalEvent): void {
    this.events.push({
      type: event.type,
      correlationId: event.correlationId,
      detail: redactDetail(event.detail ?? {}),
    });
  }
}

export type D1ToolTelemetry = {
  name: string;
  status: "OK" | "DENIED" | "FAILED" | "UNKNOWN";
};

export type D1SourceTelemetry = {
  path: string;
  digestPrefix: string;
  role?: string;
};

export function summarizeD1Telemetry(events: TechnicalEvent[]): {
  tools: D1ToolTelemetry[];
  sources: D1SourceTelemetry[];
  errors: Array<{ type: string; code?: string }>;
} {
  const tools: D1ToolTelemetry[] = [];
  const sources: D1SourceTelemetry[] = [];
  const errors: Array<{ type: string; code?: string }> = [];

  for (const e of events) {
    if (e.type === "SOURCE_LOADED") {
      sources.push({
        path: String(e.detail.path ?? ""),
        digestPrefix: String(e.detail.digestPrefix ?? e.detail.digest ?? ""),
        role: e.detail.role ? String(e.detail.role) : undefined,
      });
    }
    if (e.type === "TOOL_SUCCEEDED") {
      tools.push({
        name: String(e.detail.toolName ?? e.detail.name ?? e.detail.tool ?? "unknown"),
        status: "OK",
      });
    }
    if (e.type === "TOOL_DENIED") {
      tools.push({
        name: String(e.detail.toolName ?? e.detail.name ?? e.detail.tool ?? "unknown"),
        status: "DENIED",
      });
    }
    if (e.type === "TOOL_FAILED") {
      tools.push({
        name: String(e.detail.toolName ?? e.detail.name ?? e.detail.tool ?? "unknown"),
        status: "FAILED",
      });
    }
    if (e.type === "AI_FAILED" || e.type === "SOURCE_REJECTED") {
      errors.push({
        type: e.type,
        code: e.detail.code ? String(e.detail.code) : undefined,
      });
    }
  }

  return { tools, sources, errors };
}
```

## Diff utile analyzeIntent (delivery)

```diff
diff --git a/projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts b/projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts
index 9247025..30d02ef 100644
--- a/projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts
+++ b/projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts
@@ -13,6 +13,16 @@ import {
   type RequestRoutingProposal,
 } from "./types";
 import { logIntakeEvent } from "../intakeObservability";
+import { isD1PlatformIntegrationEnabled } from "./platformFlag";
+import {
+  D1MemoryEventSink,
+  summarizeD1Telemetry,
+  type D1SourceTelemetry,
+  type D1ToolTelemetry,
+} from "./d1EventSink";
+import { loadD1CanonicalContext } from "./canonicalContext";
+import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
+import { runToolCallingLoop } from "@/lib/platform/tools/toolLoop";

 function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
   return new Promise((resolve, reject) => {
@@ -58,17 +68,79 @@ function buildUserEnvelope(
   return lines.join("\n\n");
 }

+export interface AnalyzeIntentPlatformRun {
+  enabled: boolean;
+  toolRounds: number;
+  toolCalls: number;
+  sources: D1SourceTelemetry[];
+  tools: D1ToolTelemetry[];
+  model: string | null;
+  events: Array<{ type: string; detail: Record<string, unknown> }>;
+}
+
 export interface AnalyzeIntentResult {
   proposal: RequestRoutingProposal;
   providerMode: "fake" | "live";
   providerId: string;
   durationMs: number;
   clarificationTurnCount: number;
+  platform: AnalyzeIntentPlatformRun;
+}
+
+function finalizeProposal(
+  proposal: RequestRoutingProposal,
+  intent: string,
+  userAnswers: string[],
+): RequestRoutingProposal {
+  if (
+    userAnswers.length >= D1_INTAKE_MAX_CLARIFICATION_TURNS &&
+    proposal.proposedOutcomeType === "NEED_CLARIFICATION"
+  ) {
+    return validateRequestRoutingProposal({
+      ...proposal,
+      rawIntent: intent,
+      proposedOutcomeType: "UNDETERMINED",
+      status: "UNDETERMINED",
+      clarificationQuestion: null,
+      confidence: Math.min(proposal.confidence, 0.25),
+      missingInformation: [
+        ...proposal.missingInformation,
+        "informations insuffisantes après les tours de clarification",
+      ],
+      rationale:
+        "Après le maximum de clarifications, la suite reste indéterminée. Aucune mutation n’a été effectuée.",
+      requiresHumanConfirmation: true,
+    });
+  }
+  return proposal;
+}
+
+function parseAndValidate(
+  text: string,
+  intent: string,
+): RequestRoutingProposal {
+  const parsed = parseProposalJsonText(text);
+  if (typeof parsed === "object" && parsed && !Array.isArray(parsed)) {
+    (parsed as Record<string, unknown>).rawIntent = intent;
+    if (!(parsed as Record<string, unknown>).proposalId) {
+      (parsed as Record<string, unknown>).proposalId = `rrp-${Date.now()}`;
+    }
+    if (!(parsed as Record<string, unknown>).createdAt) {
+      (parsed as Record<string, unknown>).createdAt = new Date().toISOString();
+    }
+    if (!(parsed as Record<string, unknown>).schemaVersion) {
+      (parsed as Record<string, unknown>).schemaVersion = "0.1.0-d1-c2";
+    }
+    (parsed as Record<string, unknown>).proposedProjectId = null;
+    (parsed as Record<string, unknown>).proposedCycleId = null;
+  }
+  return validateRequestRoutingProposal(parsed);
 }

 /**
  * Analyze a free-form intent into a non-executable RequestRoutingProposal.
- * No Project/Cycle mutation. No context matching.
+ * No Project/Cycle mutation. No context matching (C3).
+ * When platform integration is enabled: loads canonical sources + optional tool loop.
  */
 export async function analyzeIntent(
   input: AnalyzeIntentInput,
@@ -88,7 +160,6 @@ export async function analyzeIntent(
     .map((t) => t.content.trim())
     .filter(Boolean);

-  // Cap user clarification answers
   if (userAnswers.length > D1_INTAKE_MAX_CLARIFICATION_TURNS) {
     throw new D1Error(
       "VALIDATION",
@@ -103,73 +174,111 @@ export async function analyzeIntent(
   });

   const { provider, mode } = resolveIntakeProvider();
+  const platformEnabled = isD1PlatformIntegrationEnabled();
+  const sink = new D1MemoryEventSink();
+  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
+
+  let systemContent = D1_C2_SYSTEM_PROMPT;
+  let loadedSources: D1SourceTelemetry[] = [];
+
+  if (platformEnabled) {
+    const canonical = loadD1CanonicalContext({
+      workspaceRoot,
+      correlationId: input.sessionLocalId,
+      sink,
+    });
+    loadedSources = canonical.sources;
+    systemContent = `${D1_C2_SYSTEM_PROMPT}\n\n${canonical.systemAppendix}`;
+  }
+
   const messages = [
-    { role: "system" as const, content: D1_C2_SYSTEM_PROMPT },
+    { role: "system" as const, content: systemContent },
     { role: "user" as const, content: buildUserEnvelope(intent, userAnswers) },
   ];

+  sink.emit({
+    type: "AI_REQUESTED",
+    correlationId: input.sessionLocalId,
+    detail: {
+      providerMode: mode,
+      providerId: provider.providerId,
+      platformIntegration: platformEnabled,
+    },
+  });
+
   try {
-    const completion = await withTimeout(
-      provider.complete(messages),
-      D1_INTAKE_PROVIDER_TIMEOUT_MS,
-    );
+    let text: string;
+    let toolRounds = 0;
+    let toolCalls = 0;
+    let model: string | null = null;

-    const parsed = parseProposalJsonText(completion.text);
-    // Ensure rawIntent reflects original user intent
-    if (typeof parsed === "object" && parsed && !Array.isArray(parsed)) {
-      (parsed as Record<string, unknown>).rawIntent = intent;
-      if (!(parsed as Record<string, unknown>).proposalId) {
-        (parsed as Record<string, unknown>).proposalId = `rrp-${Date.now()}`;
-      }
-      if (!(parsed as Record<string, unknown>).createdAt) {
-        (parsed as Record<string, unknown>).createdAt = new Date().toISOString();
-      }
-      if (!(parsed as Record<string, unknown>).schemaVersion) {
-        (parsed as Record<string, unknown>).schemaVersion = "0.1.0-d1-c2";
-      }
-      (parsed as Record<string, unknown>).proposedProjectId = null;
-      (parsed as Record<string, unknown>).proposedCycleId = null;
+    if (platformEnabled) {
+      const loop = await withTimeout(
+        runToolCallingLoop({
+          correlationId: input.sessionLocalId,
+          messages,
+          provider,
+          enableTools: true,
+          sink,
+          workspaceRoot,
+        }),
+        D1_INTAKE_PROVIDER_TIMEOUT_MS,
+      );
+      text = loop.text;
+      toolRounds = loop.toolRounds;
+      toolCalls = loop.toolCalls;
+      model = loop.usage.model;
+    } else {
+      const completion = await withTimeout(
+        provider.complete(messages),
+        D1_INTAKE_PROVIDER_TIMEOUT_MS,
+      );
+      text = completion.text;
+      model = completion.usage.model;
     }

-    const proposal = validateRequestRoutingProposal(parsed);
-
-    // After max clarification turns, never stay in clarification loop
-    let finalProposal = proposal;
-    if (
-      userAnswers.length >= D1_INTAKE_MAX_CLARIFICATION_TURNS &&
-      proposal.proposedOutcomeType === "NEED_CLARIFICATION"
-    ) {
-      finalProposal = validateRequestRoutingProposal({
-        ...proposal,
-        proposedOutcomeType: "UNDETERMINED",
-        status: "UNDETERMINED",
-        clarificationQuestion: null,
-        confidence: Math.min(proposal.confidence, 0.25),
-        missingInformation: [
-          ...proposal.missingInformation,
-          "informations insuffisantes après les tours de clarification",
-        ],
-        rationale:
-          "Après le maximum de clarifications, la suite reste indéterminée. Aucune mutation n’a été effectuée.",
-        requiresHumanConfirmation: true,
-      });
-    }
+    sink.emit({
+      type: "AI_COMPLETED",
+      correlationId: input.sessionLocalId,
+      detail: {
+        providerMode: mode,
+        toolRounds,
+        toolCalls,
+        model,
+      },
+    });
+
+    const proposal = finalizeProposal(
+      parseAndValidate(text, intent),
+      intent,
+      userAnswers,
+    );
+
+    sink.emit({
+      type: "STRUCTURED_OUTPUT_VALIDATED",
+      correlationId: input.sessionLocalId,
+      detail: {
+        outcome: proposal.proposedOutcomeType,
+        status: proposal.status,
+      },
+    });

     const durationMs = Date.now() - started;
+    const telemetry = summarizeD1Telemetry(sink.events);

-    if (finalProposal.status === "CLARIFICATION_REQUIRED") {
+    if (proposal.status === "CLARIFICATION_REQUIRED") {
       logIntakeEvent("intake_clarification_requested", {
         sessionLocalId: input.sessionLocalId,
         intentLength: intent.length,
-        status: finalProposal.proposedOutcomeType,
+        status: proposal.proposedOutcomeType,
         durationMs,
         providerMode: mode,
       });
-    } else if (finalProposal.status === "ANALYSIS_ONLY") {
+    } else if (proposal.status === "ANALYSIS_ONLY") {
       logIntakeEvent("intake_analysis_only_generated", {
         sessionLocalId: input.sessionLocalId,
         intentLength: intent.length,
-        status: finalProposal.proposedOutcomeType,
+        status: proposal.proposedOutcomeType,
         durationMs,
         providerMode: mode,
       });
@@ -177,18 +286,30 @@ export async function analyzeIntent(
       logIntakeEvent("intake_proposal_generated", {
         sessionLocalId: input.sessionLocalId,
         intentLength: intent.length,
-        status: finalProposal.proposedOutcomeType,
+        status: proposal.proposedOutcomeType,
         durationMs,
         providerMode: mode,
       });
     }

     return {
-      proposal: finalProposal,
+      proposal,
       providerMode: mode,
       providerId: provider.providerId,
       durationMs,
       clarificationTurnCount: userAnswers.length,
+      platform: {
+        enabled: platformEnabled,
+        toolRounds,
+        toolCalls,
+        sources: loadedSources.length ? loadedSources : telemetry.sources,
+        tools: telemetry.tools,
+        model,
+        events: sink.events.map((e) => ({
+          type: e.type,
+          detail: e.detail,
+        })),
+      },
     };
   } catch (error) {
     const durationMs = Date.now() - started;
@@ -198,6 +319,11 @@ export async function analyzeIntent(
         : error instanceof Error && /timeout/i.test(error.message)
           ? "TIMEOUT"
           : "PROVIDER";
+    sink.emit({
+      type: "AI_FAILED",
+      correlationId: input.sessionLocalId,
+      detail: { code, providerMode: mode },
+    });
     logIntakeEvent("intake_provider_failed", {
       sessionLocalId: input.sessionLocalId,
       intentLength: intent.length,
```

## Réserves / dette / anti-claims

Voir 85 §§9–13.

## Décisions Morris

- GO VALIDATION consommé
- GO EXÉCUTION LIVE **non** consommé
- Pas push/PR/merge

## Actions non exécutées

Live GPT · push branche · PR · merge · B′ · cleanup OPS1 · method/prompts

## Rollback

Revert delivery commits ou `D1_PLATFORM_INTEGRATION=0`.

## Gate suivant candidat

`GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` — après analyse ChatGPT + confirmation Morris.

## Verdict final

**D1 SHARED PLATFORM INTEGRATION VALIDATED WITH RESERVES — MORRIS LIVE DECISION REQUIRED**
