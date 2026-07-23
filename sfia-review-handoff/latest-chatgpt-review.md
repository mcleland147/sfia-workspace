# SFIA Review Pack — D1 Shared Platform Integration Delivery

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 08:15:27 CEST |
| Cycle | Delivery |
| Profil | Critical |
| Gate consommé | `GO DELIVERY — D1 SHARED PLATFORM INTEGRATION` |
| Repo | mcleland147/sfia-workspace |
| Branche | `delivery/sfia-studio-d1-shared-platform-integration` |
| Base | `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` |
| HEAD | `67d946f883c224f47ac269f07056928b63ecff39` |
| Worktree | `/Users/morris/Projects/sfia-workspace-d1-platform-integration` |
| Push projet | **non effectué** |
| Gate suivant proposé | `GO VALIDATION — D1 SHARED PLATFORM INTEGRATION` |

## Verdict

**D1 SHARED PLATFORM INTEGRATION DELIVERED — READY FOR VALIDATION**

## Local Git Truth Check (initial)

- origin/main = `416af8a5…` (PR #256) — inchangé pendant le cycle
- Branche créée depuis origin/main ; pas de concurrent delivery d1-platform
- Untracked principal workspace : `.tmp-sfia-review/**` attributable
- Handoff pré-cycle : `6ecd722…` / blob `b600c3a2…`

## État Git final (delivery)

```
## delivery/sfia-studio-d1-shared-platform-integration...origin/main [ahead 4]
?? .tmp-sfia-review/
```

## Commits locaux

```
67d946f (HEAD -> delivery/sfia-studio-d1-shared-platform-integration) docs(sfia-studio): document D1 shared platform delivery
3e7f863 test(sfia-studio): validate unified D1 platform flow
0ef37d4 feat(sfia-studio): expose D1 tools and canonical sources
28e9900 feat(sfia-studio): integrate D1 with shared platform
```

## Diff name-status

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

## Diff stat

```
...-shared-platform-integration-delivery-report.md | 124 +++++++++++
 projects/sfia-studio/README.md                     |   7 +-
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
 12 files changed, 826 insertions(+), 70 deletions(-)
```

## Architecture avant / après

### Avant
- D1 AI déjà sur platform ; analyzeIntent = complete() seul
- Pas de tool loop / canonical sources dans D1
- Dual-track live documenté

### Après
- Flag `D1_PLATFORM_INTEGRATION` (défaut ON)
- loadCanonicalCoreSources (4 paths méthode) + runToolCallingLoop
- D1MemoryEventSink + UI telemetry
- FakeIntake completeRound + markers `__D1_TOOL_*__`
- C2/C3/C4 inchangés ; wrappers OPS1 conservés

### Graphe d’imports
- D1 → platform : ai, tools, sfia-context, observability, security, repository
- D1 → OPS1 : **0**
- platform → D1/OPS1 : **0**
- OPS1 → platform : wrappers inchangés

## Lots

1. Orchestration unifiée — DONE
2. Observabilité/UI minimale — DONE
3. Sécurité (deny, redaction, fail-closed existant) — DONE / prouvé fixture
4. Tests + doc 84 — DONE

## Tests

| Suite | Résultat |
|-------|----------|
| Vitest | **210/210 PASS** |
| Import boundaries | PASS |
| Lint | PASS |
| Typecheck | PASS |
| Build | PASS |
| E2E D1 platform | **2/2 PASS** |
| E2E D1 C1–C4 pertinents | PASS |
| E2E OPS1 i1 + CT fast-track | **3/3 PASS** |
| OpenAI réel | **non exécuté** (interdit) |
| CI GitHub | **absente** (≠ PASS) |

## Preuves sécurité

- Tool deny `.env` → status DENIED (unit + E2E)
- Pas de secret dans UI E2E deny
- Live fail-closed déjà dans resolveProvider (CONFIG, pas fake silencieux)
- Mutation Project uniquement après C4 (E2E create SUCCEEDED)
- existing NO_MUTATION : E2E d1-c4 existant PASS
- Git/GitHub write : non ajoutés ; tools exposés = contrats RO Control Tower

## Preuves observabilité (exemples redacted)

Événements typiques d’un run fixture :
- `SOURCE_LOADED` ×4 (digests préfixe uniquement)
- `AI_REQUESTED` / `AI_COMPLETED`
- `TOOL_SUCCEEDED` ou `TOOL_DENIED` (toolName)
- `STRUCTURED_OUTPUT_VALIDATED`
- `TOOL_LOOP_COMPLETED`

Aucun `sk-` / token dans review pack.

## Non-régression OPS1

Vitest OPS1 inclus dans 210/210 ; E2E ops1-i1 + control-tower-fast-track PASS.

## Décisions Morris

- Gate Delivery consommé
- Pas push/PR/merge
- Pas Live / B′ / cleanup OPS1

## Recommandations non décisionnelles

1. `GO VALIDATION — D1 SHARED PLATFORM INTEGRATION`
2. Puis `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION`
3. Plus tard : cleanup wrappers OPS1

## Actions non exécutées

Push branche · PR · merge · Live GPT · B′ · delete branches · method/prompts · deps

## Rollback

Revert 4 commits ou `D1_PLATFORM_INTEGRATION=0`.

## Contenu complet — document 84

```markdown
# SFIA Studio — D1 Shared Platform Integration — Delivery Report

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `84-d1-shared-platform-integration-delivery-report.md` |
| **Statut** | `delivery-local-candidate` — validation Morris requise |
| **Cycle** | Delivery — D1 Shared Platform Integration |
| **Profil** | Critical |
| **Gate consommé** | `GO DELIVERY — D1 SHARED PLATFORM INTEGRATION` |
| **Branche** | `delivery/sfia-studio-d1-shared-platform-integration` |
| **Base** | `origin/main` @ `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` (PR #256) |
| **Gate suivant proposé** | `GO VALIDATION — D1 SHARED PLATFORM INTEGRATION` |

---

## 1. Objectif

Brancher l’intake D1 sur la Shared Technical Platform pour :

- provider GPT fake/live (déjà sur platform) ;
- chargement borné du contexte SFIA canonique (4 sources méthode) ;
- tool loop read-only Git/GitHub ;
- EventSink D1 minimal + visibilité UI fonctionnelle ;
- conservation C2→C3→C4 et mutation Project uniquement après C4.

## 2. Architecture avant / après

### Avant

- D1 AI → `lib/platform/ai` (provider) ;
- `analyzeIntent` = `provider.complete` sans tools ni sources ;
- dual-track live documenté (77/78) : OPS1 tools vs D1 C2-only ;
- D1 ↛ OPS1 ; platform ↛ domaines.

### Après

- Flag `D1_PLATFORM_INTEGRATION` (défaut **ON**, `=0` pour legacy) ;
- `analyzeIntent` charge `loadCanonicalCoreSources` + `runToolCallingLoop` ;
- `FakeIntakeConversationProvider.completeRound` pour fixtures tools ;
- `D1MemoryEventSink` (événements techniques redacted) ;
- UI intake : panneau `intake-platform-telemetry` (mode, modèle, sources, tools) ;
- métier C2/C3/C4 inchangé ; ActionCandidate reste OPS1 ; wrappers OPS1 conservés.

### Imports

| Edge | Règle | Statut |
|------|-------|--------|
| D1 → OPS1 | interdit | 0 |
| platform → D1/OPS1 | interdit | 0 |
| D1 → platform | autorisé | ai, tools, sfia-context, observability, security, repository |
| OPS1 → platform | wrappers | inchangé |

## 3. Livré

| Item | Statut |
|------|--------|
| Orchestration D1 unifiée (sources + tool loop) | Livré |
| Feature flag | Livré |
| EventSink D1 mémoire + redaction | Livré |
| Visibilité UI minimale | Livré |
| Fake tools markers `__D1_TOOL_*__` | Livré |
| Deny `.env` via tool | Livré |
| Tests unitaires platform integration | Livré |
| E2E fixture unifiée C1→C4 | Livré |
| Document 84 + README index | Livré |

## 4. Testé

| Suite | Résultat |
|-------|----------|
| Vitest complet | **210/210 PASS** |
| Import boundaries | PASS |
| Lint / typecheck / build | PASS |
| E2E D1 platform integration | **2/2 PASS** |
| E2E D1 C1/C2/C3/C4 (lots pertinents) | PASS |
| E2E OPS1 i1 + Control Tower fast-track | exécutés (non-régression) |

## 5. Non testé live

- Appels OpenAI réels ;
- Live Product Validation (77/78) ;
- GitHub live hors mocks/adapters existants en E2E fixture ;
- OAuth / CI GitHub.

## 6. Différé

- Option B′ ;
- Cycle runtime / GuidedSession ;
- cleanup / suppression wrappers OPS1 ;
- unification runbook 77/78 post-live ;
- push / PR / merge de cette branche.

## 7. Réserves

- Tool calls automatiques en fake uniquement via markers de fixture (pas d’appel tool spontané sur toute intention) ;
- Sources projet CT (`SFIA_PROJECT_CONTEXT_PATHS`) volontairement **non** chargées en D1 (core méthode uniquement) ;
- Doc 82 métadonnées historiques pré-merge #255 non touchées ;
- Push projet non effectué (hors autorisation).

## 8. Dette

- Actualiser 77/78 pour parcours unifié après validation ;
- Retrait wrappers OPS1 sous gate dédié ;
- Éventuelle extension allowlist sources projet D1 sous gate.

## 9. Anti-claims

Pas LIVE VALIDATED · pas D1 COMPLETE · pas PROJECT LINKED · pas CYCLE OPENED · pas B′ · pas OPS1 DECOMMISSIONED · pas V3-ADOPTED · pas push/PR/merge.

## 10. Rollback

`git revert` des commits de la branche delivery, ou `D1_PLATFORM_INTEGRATION=0` pour revenir au chemin `complete()` sans tools/sources.

## 11. Gate suivant proposé

`GO VALIDATION — D1 SHARED PLATFORM INTEGRATION`

Puis, uniquement après validation technique :

`GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION`

## 12. Verdict delivery

**D1 SHARED PLATFORM INTEGRATION DELIVERED — READY FOR VALIDATION**
```

## Diff README

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 544e163..1720b46 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -523,7 +523,8 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [80-shared-technical-platform-migration-decision-pack.md](./80-shared-technical-platform-migration-decision-pack.md) | Decision pack migration — **`decision-pack-candidate`** (historique) |
 | [81-shared-technical-platform-delivery-report.md](./81-shared-technical-platform-delivery-report.md) | Rapport delivery — intégré via [#255](https://github.com/mcleland147/sfia-workspace/pull/255) |
 | [82-shared-technical-platform-validation-and-pr-readiness.md](./82-shared-technical-platform-validation-and-pr-readiness.md) | Validation / PR readiness — [#255](https://github.com/mcleland147/sfia-workspace/pull/255) **MERGED** |
-| [83-unmerged-docs-consolidation-pr-readiness.md](./83-unmerged-docs-consolidation-pr-readiness.md) | Consolidation docs 75–80 + alignement post-merge — **`draft-pr-candidate`** |
+| [83-unmerged-docs-consolidation-pr-readiness.md](./83-unmerged-docs-consolidation-pr-readiness.md) | Consolidation docs 75–80 + alignement post-merge — **`draft-pr-candidate`** (historique post-#256) |
+| [84-d1-shared-platform-integration-delivery-report.md](./84-d1-shared-platform-integration-delivery-report.md) | Delivery D1 ↔ Shared Platform (tools + contexte) — **`delivery-local-candidate`** |

-> **Statut Git :** Shared Technical Platform **MERGED** sur `main` @ `445702dc…` (PR #255, squash).
-> **Séquence active :** Platform intégrée → D1 unifié (tools/context) → Live Product Validation → décision B′.
+> **Statut Git :** Shared Technical Platform **MERGED** sur `main` @ `445702dc…` (PR #255, squash). Docs 75–80 consolidés via [#256](https://github.com/mcleland147/sfia-workspace/pull/256) @ `416af8a…`.
+> **Séquence active :** Platform intégrée → **D1 unifié (tools/context) livré localement** → validation → Live Product Validation → décision B′.
```

## Fichiers nouveaux (contenu complet)

### `projects/sfia-studio/app/lib/d1/intake/platformFlag.ts`

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

### `projects/sfia-studio/app/lib/d1/intake/d1EventSink.ts`

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

### `projects/sfia-studio/app/lib/d1/intake/canonicalContext.ts`

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

## Diff utile — analyzeIntent

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

## Diff utile — fakeIntakeProvider

```diff
diff --git a/projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts b/projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts
index c97e99f..2a62a5c 100644
--- a/projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts
+++ b/projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts
@@ -1,8 +1,11 @@
 import { randomUUID } from "node:crypto";
+import type { ToolDefinition } from "@/lib/platform/tools/types";
 import type {
   ConversationProvider,
   ProviderChatMessage,
   ProviderCompletionResult,
+  ProviderInputItem,
+  ProviderRoundResult,
 } from "@/lib/platform/ai/types";
 import { REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION } from "./types";
 import type { C2OutcomeType, C2ProposalStatus } from "./types";
@@ -190,13 +193,38 @@ export function buildFakeProposalPayload(
   };
 }

+function extractEnvelope(content: string): {
+  rawIntent: string;
+  clarifications: string[];
+} {
+  const intentMatch = content.match(
+    /INTENT:\s*([\s\S]*?)(?:\n\s*CLARIFICATIONS:|$)/i,
+  );
+  const clarMatch = content.match(/CLARIFICATIONS:\s*([\s\S]*)$/i);
+  const rawIntent = (intentMatch?.[1] ?? content).trim();
+  const clarifications = (clarMatch?.[1] ?? "")
+    .split(/\n+/)
+    .map((l) => l.replace(/^- /, "").trim())
+    .filter(Boolean);
+  return { rawIntent, clarifications };
+}
+
+function lastUserContent(items: ProviderInputItem[]): string {
+  const lastUser = [...items]
+    .reverse()
+    .find((i) => i.type === "message" && i.role === "user");
+  return lastUser && lastUser.type === "message" ? lastUser.content : "";
+}
+
 /**
  * Fake intake provider — implements platform ConversationProvider contract.
  * Returns JSON proposals based on deterministic heuristics.
+ * Supports completeRound for Shared Platform tool loop (fixture markers).
  */
 export class FakeIntakeConversationProvider implements ConversationProvider {
   readonly providerId = "d1-intake-fake";
   private callCount = 0;
+  private roundCount = 0;

   async complete(
     messages: ProviderChatMessage[],
@@ -216,17 +244,7 @@ export class FakeIntakeConversationProvider implements ConversationProvider {
       throw new Error("FAKE_INTAKE_TIMEOUT");
     }

-    // Extract raw intent + answers from the user payload envelope
-    const intentMatch = content.match(
-      /INTENT:\s*([\s\S]*?)(?:\n\s*CLARIFICATIONS:|$)/i,
-    );
-    const clarMatch = content.match(/CLARIFICATIONS:\s*([\s\S]*)$/i);
-    const rawIntent = (intentMatch?.[1] ?? content).trim();
-    const clarifications = (clarMatch?.[1] ?? "")
-      .split(/\n+/)
-      .map((l) => l.replace(/^- /, "").trim())
-      .filter(Boolean);
-
+    const { rawIntent, clarifications } = extractEnvelope(content);
     const payload = buildFakeProposalPayload(rawIntent, clarifications);
     return {
       text: JSON.stringify(payload),
@@ -239,4 +257,85 @@ export class FakeIntakeConversationProvider implements ConversationProvider {
       },
     };
   }
+
+  async completeRound(input: {
+    items: ProviderInputItem[];
+    tools: ToolDefinition[];
+  }): Promise<ProviderRoundResult> {
+    this.roundCount += 1;
+    const usage = {
+      inputTokens: 20 * this.roundCount,
+      outputTokens: 40 * this.roundCount,
+      totalTokens: 60 * this.roundCount,
+      model: "d1-intake-fake-model",
+      providerResponseId: `d1-fake-round-${this.roundCount}`,
+    };
+    const content = lastUserContent(input.items);
+
+    if (content.includes("__FORCE_PROVIDER_ERROR__")) {
+      throw new Error("FAKE_INTAKE_PROVIDER_ERROR");
+    }
+    if (content.includes("__FORCE_TIMEOUT__")) {
+      await new Promise((r) => setTimeout(r, 50));
+      throw new Error("FAKE_INTAKE_TIMEOUT");
+    }
+
+    if (this.roundCount === 1 && input.tools.length > 0) {
+      if (/__D1_TOOL_GIT_STATUS__/i.test(content)) {
+        return {
+          kind: "tool_calls",
+          toolCalls: [
+            {
+              callId: "d1-fake-git-status",
+              name: "git_local_get_status",
+              argumentsJson: "{}",
+            },
+          ],
+          usage,
+        };
+      }
+      if (/__D1_TOOL_GIT_HEAD__/i.test(content)) {
+        return {
+          kind: "tool_calls",
+          toolCalls: [
+            {
+              callId: "d1-fake-git-head",
+              name: "git_local_get_head",
+              argumentsJson: "{}",
+            },
+          ],
+          usage,
+        };
+      }
+      if (/__D1_TOOL_DENIED_PATH__/i.test(content)) {
+        return {
+          kind: "tool_calls",
+          toolCalls: [
+            {
+              callId: "d1-fake-denied",
+              name: "git_local_read_file",
+              argumentsJson: JSON.stringify({ path: ".env" }),
+            },
+          ],
+          usage,
+        };
+      }
+    }
+
+    const { rawIntent, clarifications } = extractEnvelope(content);
+    // Strip fixture markers from heuristic intent classification
+    const cleanedIntent = rawIntent
+      .replace(/__D1_TOOL_[A-Z0-9_]+__/g, "")
+      .replace(/\s+/g, " ")
+      .trim();
+    const payload = buildFakeProposalPayload(
+      cleanedIntent || rawIntent,
+      clarifications,
+    );
+    return {
+      kind: "message",
+      text: JSON.stringify(payload),
+      usage,
+    };
+  }
 }
```

## Diff utile — IntakeView

```diff
diff --git a/projects/sfia-studio/app/features/d1/intake/IntakeView.tsx b/projects/sfia-studio/app/features/d1/intake/IntakeView.tsx
index 1eedff6..ac10711 100644
--- a/projects/sfia-studio/app/features/d1/intake/IntakeView.tsx
+++ b/projects/sfia-studio/app/features/d1/intake/IntakeView.tsx
@@ -92,6 +92,14 @@ export function IntakeView({ projects }: { projects: D1Project[] }) {
   const [providerMode, setProviderMode] = useState<"fake" | "live" | null>(
     null,
   );
+  const [platformInfo, setPlatformInfo] = useState<{
+    enabled: boolean;
+    toolRounds: number;
+    toolCalls: number;
+    sources: Array<{ path: string; digestPrefix: string; role?: string }>;
+    tools: Array<{ name: string; status: string }>;
+    model: string | null;
+  } | null>(null);
   const [pending, startTransition] = useTransition();
   const [busy, setBusy] = useState(false);
   const [contextMatch, setContextMatch] = useState<ContextMatchResult | null>(
@@ -171,6 +179,7 @@ export function IntakeView({ projects }: { projects: D1Project[] }) {
     setClarifyAnswer("");
     setErrorMessage(null);
     setProviderMode(null);
+    setPlatformInfo(null);
     clearContextState();
     setIdempotencyKey(`idem-intake-${crypto.randomUUID()}`);
     void actionCancelIntakeSession(sessionLocalId);
@@ -223,9 +232,10 @@ export function IntakeView({ projects }: { projects: D1Project[] }) {
       }
       setContextMatch(result.match);
       requestAnimationFrame(() => {
-        document
-          .querySelector('[data-testid="intake-context"]')
-          ?.scrollIntoView({ block: "nearest" });
+        const el = document.querySelector('[data-testid="intake-context"]');
+        if (el && typeof (el as HTMLElement).scrollIntoView === "function") {
+          (el as HTMLElement).scrollIntoView({ block: "nearest" });
+        }
       });
     });
   }
@@ -251,6 +261,7 @@ export function IntakeView({ projects }: { projects: D1Project[] }) {
         return;
       }
       setProviderMode(result.providerMode);
+      setPlatformInfo(result.platform);
       setProposal(result.proposal);
       setTurns(nextTurns);
       if (result.proposal.status === "CLARIFICATION_REQUIRED") {
@@ -408,9 +419,50 @@ export function IntakeView({ projects }: { projects: D1Project[] }) {
               Confiance estimée {(proposal.confidence * 100).toFixed(0)} %
             </span>
             {providerMode ? (
-              <span className={shell.hint}>mode {providerMode}</span>
+              <span className={shell.hint} data-testid="intake-provider-mode">
+                mode {providerMode}
+              </span>
             ) : null}
           </div>
+          {platformInfo?.enabled ? (
+            <div
+              className={styles.proposalSection}
+              data-testid="intake-platform-telemetry"
+              aria-label="Shared platform"
+            >
+              <h3>Shared platform</h3>
+              <p className={shell.hint} data-testid="intake-platform-model">
+                {platformInfo.model
+                  ? `modèle ${platformInfo.model}`
+                  : "modèle non exposé"}
+                {" · "}
+                tools {platformInfo.toolCalls} / rounds {platformInfo.toolRounds}
+              </p>
+              {platformInfo.sources.length ? (
+                <ul data-testid="intake-platform-sources">
+                  {platformInfo.sources.map((s) => (
+                    <li key={s.path}>
+                      {s.path}{" "}
+                      <span className={shell.hint}>({s.digestPrefix})</span>
+                    </li>
+                  ))}
+                </ul>
+              ) : null}
+              {platformInfo.tools.length ? (
+                <ul data-testid="intake-platform-tools">
+                  {platformInfo.tools.map((t, i) => (
+                    <li key={`${t.name}-${i}`}>
+                      {t.name}: {t.status}
+                    </li>
+                  ))}
+                </ul>
+              ) : (
+                <p className={shell.hint} data-testid="intake-platform-tools-none">
+                  Aucun outil appelé (proposition directe).
+                </p>
+              )}
+            </div>
+          ) : null}
           <div className={styles.proposalSection}>
             <h3>Intention normalisée</h3>
             <p data-testid="proposal-normalized">{proposal.normalizedIntent}</p>
```

## Tests ajoutés — unit

```typescript
/** @vitest-environment node */
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { analyzeIntent } from "@/lib/d1/intake/analyzeIntent";
import { FakeIntakeConversationProvider } from "@/lib/d1/intake/fakeIntakeProvider";
import { setIntakeProviderForTests } from "@/lib/d1/intake/resolveProvider";
import {
  isD1PlatformIntegrationEnabled,
  setD1PlatformIntegrationForTests,
} from "@/lib/d1/intake/platformFlag";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

describe("D1 Shared Platform Integration", () => {
  beforeEach(() => {
    setIntakeProviderForTests(new FakeIntakeConversationProvider());
    setD1PlatformIntegrationForTests(true);
  });
  afterEach(() => {
    setIntakeProviderForTests(null);
    setD1PlatformIntegrationForTests(null);
  });

  it("flag defaults to enabled", () => {
    setD1PlatformIntegrationForTests(null);
    delete process.env.D1_PLATFORM_INTEGRATION;
    expect(isD1PlatformIntegrationEnabled()).toBe(true);
  });

  it("loads canonical core sources and returns telemetry", async () => {
    const result = await analyzeIntent({
      sessionLocalId: "plat-1",
      rawIntent: "Je veux lancer une application de suivi des contrats.",
    });
    expect(result.platform.enabled).toBe(true);
    expect(result.platform.sources.length).toBe(
      SFIA_CANONICAL_CORE_PATHS.length,
    );
    expect(result.platform.sources.map((s) => s.path).sort()).toEqual(
      [...SFIA_CANONICAL_CORE_PATHS].sort(),
    );
    expect(result.proposal.proposedProjectId).toBeNull();
    expect(result.platform.events.some((e) => e.type === "SOURCE_LOADED")).toBe(
      true,
    );
    expect(
      result.platform.events.some((e) => e.type === "STRUCTURED_OUTPUT_VALIDATED"),
    ).toBe(true);
  });

  it("runs a read-only git tool when fixture marker present", async () => {
    const result = await analyzeIntent({
      sessionLocalId: "plat-2",
      rawIntent:
        "__D1_TOOL_GIT_STATUS__ Je veux lancer une application de suivi des contrats.",
    });
    expect(result.platform.toolCalls).toBeGreaterThanOrEqual(1);
    expect(result.platform.tools.some((t) => t.name === "git_local_get_status")).toBe(
      true,
    );
    expect(result.platform.tools.every((t) => t.status === "OK")).toBe(true);
    expect(result.proposal.proposedOutcomeType).toBe("CREATE_PROJECT_CANDIDATE");
  });

  it("denies reading .env via tool (POLICY) without fake success", async () => {
    const result = await analyzeIntent({
      sessionLocalId: "plat-3",
      rawIntent:
        "__D1_TOOL_DENIED_PATH__ Je veux lancer une application de suivi des contrats.",
    });
    expect(result.platform.tools.some((t) => t.status === "DENIED")).toBe(true);
    expect(result.proposal.proposedProjectId).toBeNull();
  });

  it("legacy path when flag disabled skips tool loop sources optional", async () => {
    setD1PlatformIntegrationForTests(false);
    const result = await analyzeIntent({
      sessionLocalId: "plat-4",
      rawIntent: "Je veux lancer une application de suivi des contrats.",
    });
    expect(result.platform.enabled).toBe(false);
    expect(result.platform.toolCalls).toBe(0);
    expect(result.platform.sources.length).toBe(0);
    expect(result.proposal.proposedOutcomeType).toBe("CREATE_PROJECT_CANDIDATE");
  });
});
```

## Tests ajoutés — E2E

```typescript
import { test, expect } from "@playwright/test";

test.beforeAll(() => {
  process.env.D1_INTAKE_PROVIDER = "fake";
  process.env.D1_PLATFORM_INTEGRATION = "1";
});

test.describe("D1 Shared Platform Integration — unified fixture", () => {
  test("fake provider + canonical sources + optional tool + C2→C3→C4 create", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill(
        "__D1_TOOL_GIT_HEAD__ Je veux lancer une application de suivi des contrats.",
      );
    await page.getByTestId("intake-submit").click();

    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 20_000,
    });
    await expect(page.getByTestId("intake-platform-telemetry")).toBeVisible();
    await expect(page.getByTestId("intake-platform-sources")).toBeVisible();
    await expect(page.getByTestId("intake-provider-mode")).toContainText("fake");
    await expect(page.getByTestId("intake-platform-tools")).toContainText(
      "git_local_get_head",
    );
    await expect(page.getByTestId("intake-no-mutation")).toBeVisible();

    // C3 matching panel appears for CREATE candidate
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });

    await page.getByTestId("prepare-create-project").click();
    await expect(page.getByTestId("intake-confirmation")).toBeVisible();
    await page.getByTestId("confirm-name").fill("D1 Platform Integration E2E");
    await page
      .getByTestId("confirm-objective")
      .fill("Prouver parcours unifié platform");
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      /SUCCEEDED|ALREADY_APPLIED/,
    );
    await expect(page.getByTestId("confirm-project-id")).toContainText(/proj-/);
  });

  test("tool deny path remains visible without secrets", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill(
        "__D1_TOOL_DENIED_PATH__ Je veux lancer une application de suivi des contrats.",
      );
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-platform-tools")).toContainText(
      "DENIED",
      { timeout: 20_000 },
    );
    const body = await page.locator("body").innerText();
    expect(body).not.toMatch(/sk-[A-Za-z0-9]{10,}/);
    expect(body).not.toMatch(/OPENAI_API_KEY\s*=/);
  });
});
```

## Réserves / dette / anti-claims

Voir document 84 §§7–9.

## Verdict final

**D1 SHARED PLATFORM INTEGRATION DELIVERED — READY FOR VALIDATION**
