# SFIA Studio — Review Pack FULL — Shared Technical Platform Delivery

**Date/heure :** 2026-07-23 06:46:53 CEST
**Niveau :** FULL
**Cycle :** Delivery projet — Shared Technical Platform
**Profil SFIA :** Critical
**Typologie :** EVOL / DELIVERY / ARCHITECTURE / SECURITY / MIGRATION / QA
**Gate consommé :** `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM`
**Gate proposé (NON consommé) :** `GO VALIDATION — SFIA STUDIO SHARED TECHNICAL PLATFORM`
**Repo :** `mcleland147/sfia-workspace`
**Worktree :** `/Users/morris/Projects/sfia-workspace-shared-platform-delivery`
**Branche :** `delivery/sfia-studio-shared-technical-platform`
**HEAD initial / base :** `88fa4658da07156614de270d8172f147535ddbf9`
**HEAD final :** `ea95a09b39eb6b9d9137c2bda8822b6f71468fbc`
**HEAD == origin/main tip + 5 commits locaux :** YES (no push)
**Baseline méthode :** SFIA v2.6
**Statut v3 :** V3-MODELED CANDIDATE
**Architecture handoff attendu :** commit `1c87b6e9…` / blob `dc647bfe…` (vérifié avant delivery)

---

## 1. État Git initial (delivery WT)

- Worktree créé propre depuis `origin/main` @ `88fa465…`
- Branche `delivery/sfia-studio-shared-technical-platform`
- Framing WT `/Users/morris/Projects/sfia-workspace-framing-next-increment` **préservé** (non utilisé pour delivery)

## 2. Tests baseline (avant modification)

- `npx vitest run __tests__/ops1 __tests__/d1` → **157/157 PASS** (~5s)

## 3. Sources

- Handoff architecture `1c87b6e9…` / `dc647bfe…`
- Docs 79/80 (cadrage WT) + 66–74 main
- Code `lib/ops1/**`, `lib/d1/**`, features, tests, package.json

## 4. Décisions Morris appliquées

Option B · `lib/platform/**` · EventSink · D1↛OPS1 · wrappers temporaires · pas de suppression OPS1 · live/B′ différés · pas de push/PR/merge

## 5. Architecture / structure réelle

```
app/lib/platform/{ai,tools,repository,sfia-context,security,observability}/**
```

Deps cibles : D1→platform · OPS1→platform · platform↛domaines · D1↛OPS1

## 6. Inventaire fichiers (name-status vs origin/main)

```
A	projects/sfia-studio/81-shared-technical-platform-delivery-report.md
M	projects/sfia-studio/README.md
M	projects/sfia-studio/app/__tests__/d1/intake-c3.test.ts
M	projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
A	projects/sfia-studio/app/__tests__/platform/import-boundaries.test.ts
A	projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
M	projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts
M	projects/sfia-studio/app/lib/d1/intake/resolveProvider.ts
M	projects/sfia-studio/app/lib/ops1/conversation/config.ts
M	projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
M	projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
M	projects/sfia-studio/app/lib/ops1/conversation/provider.ts
M	projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
M	projects/sfia-studio/app/lib/ops1/conversation/types.ts
M	projects/sfia-studio/app/lib/ops1/errors.ts
A	projects/sfia-studio/app/lib/ops1/ops1EventSink.ts
M	projects/sfia-studio/app/lib/ops1/sfia/canonicalPaths.ts
M	projects/sfia-studio/app/lib/ops1/sfia/contextResolver.ts
M	projects/sfia-studio/app/lib/ops1/sfia/sourceLoader.ts
M	projects/sfia-studio/app/lib/ops1/sfia/types.ts
M	projects/sfia-studio/app/lib/ops1/tools/gitLocalReadAdapter.ts
M	projects/sfia-studio/app/lib/ops1/tools/githubReadAdapter.ts
M	projects/sfia-studio/app/lib/ops1/tools/pathPolicy.ts
M	projects/sfia-studio/app/lib/ops1/tools/redaction.ts
M	projects/sfia-studio/app/lib/ops1/tools/toolRouter.ts
M	projects/sfia-studio/app/lib/ops1/tools/types.ts
A	projects/sfia-studio/app/lib/platform/ai/config.ts
A	projects/sfia-studio/app/lib/platform/ai/errors.ts
A	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
A	projects/sfia-studio/app/lib/platform/ai/index.ts
A	projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
A	projects/sfia-studio/app/lib/platform/ai/provider.ts
A	projects/sfia-studio/app/lib/platform/ai/types.ts
A	projects/sfia-studio/app/lib/platform/observability/eventSink.ts
A	projects/sfia-studio/app/lib/platform/observability/index.ts
A	projects/sfia-studio/app/lib/platform/observability/types.ts
A	projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
A	projects/sfia-studio/app/lib/platform/repository/githubReadAdapter.ts
A	projects/sfia-studio/app/lib/platform/repository/index.ts
A	projects/sfia-studio/app/lib/platform/repository/workspaceRoot.ts
A	projects/sfia-studio/app/lib/platform/security/index.ts
A	projects/sfia-studio/app/lib/platform/security/pathPolicy.ts
A	projects/sfia-studio/app/lib/platform/security/redaction.ts
A	projects/sfia-studio/app/lib/platform/sfia-context/canonicalPaths.ts
A	projects/sfia-studio/app/lib/platform/sfia-context/contextResolver.ts
A	projects/sfia-studio/app/lib/platform/sfia-context/index.ts
A	projects/sfia-studio/app/lib/platform/sfia-context/sourceLoader.ts
A	projects/sfia-studio/app/lib/platform/sfia-context/types.ts
A	projects/sfia-studio/app/lib/platform/tools/index.ts
A	projects/sfia-studio/app/lib/platform/tools/toolLoop.ts
A	projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
A	projects/sfia-studio/app/lib/platform/tools/types.ts
```

## 7. Diff stat

```
...81-shared-technical-platform-delivery-report.md | 155 ++++++
 projects/sfia-studio/README.md                     |  10 +
 .../sfia-studio/app/__tests__/d1/intake-c3.test.ts |   2 +-
 .../app/__tests__/ops1/openai-provider.test.ts     |  10 +-
 .../__tests__/platform/import-boundaries.test.ts   | 104 ++++
 .../app/__tests__/platform/platform-ai.test.ts     |  48 ++
 .../app/lib/d1/intake/fakeIntakeProvider.ts        |   4 +-
 .../app/lib/d1/intake/resolveProvider.ts           |   8 +-
 .../app/lib/ops1/conversation/config.ts            |  54 +-
 .../app/lib/ops1/conversation/fakeProvider.ts      | 173 +------
 .../app/lib/ops1/conversation/openaiProvider.ts    | 150 +-----
 .../app/lib/ops1/conversation/provider.ts          |  33 +-
 .../app/lib/ops1/conversation/toolLoop.ts          | 224 +-------
 .../sfia-studio/app/lib/ops1/conversation/types.ts |  97 +---
 projects/sfia-studio/app/lib/ops1/errors.ts        |  24 +
 projects/sfia-studio/app/lib/ops1/ops1EventSink.ts |  56 ++
 .../app/lib/ops1/sfia/canonicalPaths.ts            |  94 +---
 .../app/lib/ops1/sfia/contextResolver.ts           | 205 +-------
 .../sfia-studio/app/lib/ops1/sfia/sourceLoader.ts  | 166 +-----
 projects/sfia-studio/app/lib/ops1/sfia/types.ts    |  62 +--
 .../app/lib/ops1/tools/gitLocalReadAdapter.ts      | 230 +--------
 .../app/lib/ops1/tools/githubReadAdapter.ts        | 465 +----------------
 .../sfia-studio/app/lib/ops1/tools/pathPolicy.ts   | 150 +-----
 .../sfia-studio/app/lib/ops1/tools/redaction.ts    |  38 +-
 .../sfia-studio/app/lib/ops1/tools/toolRouter.ts   | 565 ++-------------------
 projects/sfia-studio/app/lib/ops1/tools/types.ts   | 267 +---------
 projects/sfia-studio/app/lib/platform/ai/config.ts |  42 ++
 projects/sfia-studio/app/lib/platform/ai/errors.ts |  22 +
 .../app/lib/platform/ai/fakeProvider.ts            | 171 +++++++
 projects/sfia-studio/app/lib/platform/ai/index.ts  |  26 +
 .../app/lib/platform/ai/openaiProvider.ts          | 149 ++++++
 .../sfia-studio/app/lib/platform/ai/provider.ts    |  25 +
 projects/sfia-studio/app/lib/platform/ai/types.ts  |  75 +++
 .../app/lib/platform/observability/eventSink.ts    |  14 +
 .../app/lib/platform/observability/index.ts        |   3 +
 .../app/lib/platform/observability/types.ts        |  24 +
 .../lib/platform/repository/gitLocalReadAdapter.ts | 229 +++++++++
 .../lib/platform/repository/githubReadAdapter.ts   | 450 ++++++++++++++++
 .../app/lib/platform/repository/index.ts           |  17 +
 .../app/lib/platform/repository/workspaceRoot.ts   |   8 +
 .../sfia-studio/app/lib/platform/security/index.ts |   7 +
 .../app/lib/platform/security/pathPolicy.ts        | 149 ++++++
 .../app/lib/platform/security/redaction.ts         |  33 ++
 .../lib/platform/sfia-context/canonicalPaths.ts    |  93 ++++
 .../lib/platform/sfia-context/contextResolver.ts   | 207 ++++++++
 .../app/lib/platform/sfia-context/index.ts         |   4 +
 .../app/lib/platform/sfia-context/sourceLoader.ts  | 165 ++++++
 .../app/lib/platform/sfia-context/types.ts         |  68 +++
 .../sfia-studio/app/lib/platform/tools/index.ts    |  30 ++
 .../sfia-studio/app/lib/platform/tools/toolLoop.ts | 211 ++++++++
 .../app/lib/platform/tools/toolRouter.ts           | 560 ++++++++++++++++++++
 .../sfia-studio/app/lib/platform/tools/types.ts    | 266 ++++++++++
 52 files changed, 3612 insertions(+), 2830 deletions(-)
```

## 8. Commits locaux

```
ea95a09 test(sfia-studio): enforce shared platform dependency boundaries
cf3747f refactor(d1): remove OPS1 technical dependency
957e1da refactor(sfia-studio): migrate OPS1 to shared platform
607487e refactor(platform): extract shared tools and repository adapters
c16f2b8 refactor(platform): extract shared AI and observability foundations
```

## 9. Imports D1→OPS1

**Avant :** resolveProvider + fakeIntakeProvider + tests → `@/lib/ops1/conversation/*`

**Après :**
```
(none)
```

## 10. Wrappers TEMP_OPS1_PLATFORM_WRAPPER

```
projects/sfia-studio/app/lib/ops1/conversation/config.ts
projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
projects/sfia-studio/app/lib/ops1/conversation/provider.ts
projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
projects/sfia-studio/app/lib/ops1/tools/githubReadAdapter.ts
projects/sfia-studio/app/lib/ops1/conversation/types.ts
projects/sfia-studio/app/lib/ops1/tools/toolRouter.ts
projects/sfia-studio/app/lib/ops1/tools/redaction.ts
projects/sfia-studio/app/lib/ops1/tools/pathPolicy.ts
projects/sfia-studio/app/lib/ops1/ops1EventSink.ts
projects/sfia-studio/app/lib/ops1/tools/gitLocalReadAdapter.ts
projects/sfia-studio/app/lib/ops1/tools/types.ts
projects/sfia-studio/app/lib/ops1/sfia/contextResolver.ts
projects/sfia-studio/app/lib/ops1/sfia/canonicalPaths.ts
projects/sfia-studio/app/lib/ops1/sfia/sourceLoader.ts
```

Critère retrait : gate `GO CLEANUP OPS1 WRAPPERS` après stabilité + D1 unifié.

## 11. EventSink

Platform toolRouter/toolLoop n’ouvrent plus OPS1 DB. OPS1 `createOps1SessionEventSink` mappe vers `session_events`.

## 12. Sécurité

RO Git/GitHub · allowlists · redaction · timeouts · 4×4 · fail-closed · pas de mutation platform · C4 inchangé.

## 13. Tests finaux

| Suite | Résultat |
|-------|----------|
| Vitest full | 205/205 |
| Platform + guards | 8/8 |
| lint | PASS |
| typecheck | PASS |
| build | PASS (~8s) |
| E2E CT+D1 ciblés | 36/36 PASS (~29s) |
| E2E increment-b harness | hors périmètre — timeouts observés (POC harness), non liés platform |

Aucun GPT live. Aucune mutation GitHub. Aucun push projet.

## 14. Réserves

- D1 tools + contexte canonique **non branchés** (lot suivant, sans élargissement UX ici).
- Wrappers OPS1 dette temporaire.
- increment-b harness E2E flaky/timeout hors scope.

## 15. Rollback

`git reset --hard origin/main` sur branche delivery (locale) ou revert des 5 commits.

## 16. Impacts Live / B′

Live unifié réalisable après lot D1 tools/context. Live exécution et B′ **différés**.

## 17. Actions non exécutées

push projet · PR · merge · GPT live · D1_INTAKE_LIVE · suppression OPS1 · B′ · OAuth · CI · Figma · modification 75–80

## 18. DIFF README

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index a3c088b..68d7721 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -503,3 +503,13 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [73-control-tower-fast-track-delivery-report.md](./73-control-tower-fast-track-delivery-report.md) | Rapport delivery local — **READY FOR MORRIS LIVE VALIDATION** |

 *SFIA Studio — Control Tower delivery **local** (`70`–`73`) — live Morris requis — commit/push/PR/MVP/production **fermés**.*
+
+### Shared Technical Platform (delivery local candidat)
+
+| Document | Rôle |
+|----------|------|
+| [81-shared-technical-platform-delivery-report.md](./81-shared-technical-platform-delivery-report.md) | Rapport delivery Option B — `lib/platform/**` — **`delivery-local-candidate`** |
+
+> **Statut :** delivery local **candidat** — validation Morris requise (`GO VALIDATION` **non** consommé).
+> **Séquence candidate :** Shared Technical Platform → D1 unifié (tools/context) → Live Product Validation → décision B′.
+> Push / PR / merge / live GPT / B′ : **fermés** dans ce cycle.
```

## 19. CONTENU COMPLET — Document 81

BEGIN_FILE projects/sfia-studio/81-shared-technical-platform-delivery-report.md
# SFIA Studio — Shared Technical Platform — Delivery Report

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `81-shared-technical-platform-delivery-report.md` |
| **Statut** | `delivery-local-candidate` — validation Morris **requise** |
| **Gate consommé** | `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Gate proposé** | `GO VALIDATION — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Branche** | `delivery/sfia-studio-shared-technical-platform` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-shared-platform-delivery` |
| **Option** | **B** (plateforme technique + EventSink) |
| **Structure** | `app/lib/platform/**` |

---

## 1. Décisions Morris appliquées

- Option B retenue.
- Structure `app/lib/platform/**`.
- EventSink local injectable.
- Aucun nouveau générique sous `lib/ops1/**` (wrappers temporaires uniquement).
- D1 ↛ OPS1.
- OPS1 consommateur temporaire via wrappers.
- Migration incrémentale / réversible.
- Pas de suppression OPS1.
- Live Product Validation et B′ différées.
- Aucun push / PR / merge projet.

---

## 2. Architecture livrée

```
D1 → platform
OPS1 → platform (via wrappers TEMP_OPS1_PLATFORM_WRAPPER)
platform ↛ D1
platform ↛ OPS1
D1 ↛ OPS1
```

### Structure réelle

```
app/lib/platform/
  ai/              ConversationProvider, OpenAI, Fake, config, TechnicalError
  tools/           ToolDefinition, toolRouter, toolLoop (+ EventSink)
  repository/      GitLocalReadAdapter, GithubReadAdapter, workspaceRoot
  sfia-context/    canonicalPaths, sourceLoader, contextResolver, context types
  security/        redaction, pathPolicy
  observability/   EventSink, NoopEventSink, TechnicalEvent
```

Pas d’`index.ts` racine fourre-tout. Modules bornés.

---

## 3. Composants extraits

| Zone | Extraits |
|------|----------|
| AI | types provider, openai, fake, config, resolve provider, TechnicalError |
| Tools | types CT tools, router, loop |
| Repository | git local RO, github RO transports |
| Security | redaction, path/repo policy |
| Observability | EventSink, NoopEventSink |
| SFIA context | paths, loader, resolver, SfiaCanonicalContext |

## 4. Composants non extraits (conservés domaine)

**OPS1 :** `conversation/service`, ActionCandidate / proposalSchema / actionCompiler / sessionContext / cursorPromptInstantiator, db/session, execution*, actionGate, reports, allowlistService (actions), UI OPS1.

**D1 :** proposal C2, matching C3, confirmation C4, createProject, audit, UI D1.

**Réserve :** D1 n’est **pas** encore branché sur tool loop ni contexte canonique (pas d’élargissement UX/fonctionnel dans ce delivery).

---

## 5. Migration OPS1

- Fichiers génériques remplacés par wrappers `TEMP_OPS1_PLATFORM_WRAPPER`.
- `ops1EventSink.ts` adapte EventSink → `session_events`.
- `toolLoop` / `toolRouter` wrappers injectent le sink OPS1.
- Comportement CT préservé (tests verts).

**Critère de retrait wrappers :** plus aucun import hors re-export ; D1 déjà sur platform ; tests verts ; gate `GO CLEANUP OPS1 WRAPPERS`.

## 6. Migration D1

- `resolveProvider` / `fakeIntakeProvider` importent `@/lib/platform/ai/**` uniquement.
- Flags `D1_INTAKE_LIVE` / fake / fail-closed conservés.
- C2/C3/C4 inchangés.

## 7. EventSink

- Contrat `EventSink.emit(TechnicalEvent)`.
- Platform tool router/loop n’ouvrent pas la DB OPS1.
- OPS1 : `createOps1SessionEventSink`.
- D1 : peut utiliser `NoopEventSink` (non branché tools dans ce lot).

## 8. Import guards

`__tests__/platform/import-boundaries.test.ts` :

- D1 ↛ OPS1
- platform ↛ OPS1/D1
- wrappers marqués `TEMP_OPS1_PLATFORM_WRAPPER`

## 9. Sécurité

Conservé : Git/GitHub RO, allowlists, redaction, timeouts, 4×4 rounds, fail-closed, pas de mutation platform, C4 humain inchangé, pas d’exécution Cursor depuis platform.

## 10. Tests

| Suite | Résultat |
|-------|----------|
| Baseline OPS1+D1 (avant) | 157/157 (~5s) |
| Après migration OPS1+D1 | 157/157 |
| Platform unit + guards | 8/8 |
| Vitest full | 205/205 (~4s) |
| typecheck | PASS (~1s) |
| lint | PASS (unused `_event` corrigé) |
| build | PASS (~8s) |
| E2E ciblés CT + D1 | **36/36 PASS** (~29s) |
| E2E `increment-b` harness POC | **hors périmètre platform** — timeouts observés (GO fixture harness) ; non liés aux imports platform ; non bloquants pour ce delivery |

Aucun GPT live. Aucune mutation GitHub.

## 11. Commits locaux (pas de push)

1. `refactor(platform): extract shared AI and observability foundations`
2. `refactor(platform): extract shared tools and repository adapters`
3. `refactor(sfia-studio): migrate OPS1 to shared platform`
4. `refactor(d1): remove OPS1 technical dependency`
5. `test(sfia-studio): enforce shared platform dependency boundaries` (+ doc 81)

## 12. Risques / réserves / dette

| Item | Note |
|------|------|
| Wrappers OPS1 | Dette temporaire acceptée |
| D1 tools/context unifiés | **Réserve** — lot suivant |
| EventSink mapping noms | OPS1 conserve types session historiques via adapter |
| Rollback | revert commits 1–5 ; wrappers isolent le changement |

## 13. Impacts

- **Live Product Validation :** unifié devient réalisable après branchement D1 tools/context (lot suivant) ; exécution live toujours différée.
- **B′ :** différée ; platform ne l’implémente pas.

## 14. Anti-claims

Pas READY production. Pas LIVE VALIDATED. Pas OPS1 décommissionné. Pas B′. Pas V3-ADOPTED. Pas push/PR/merge. Pas D1 tools unifiés livrés.

**Verdict delivery :** `SHARED TECHNICAL PLATFORM DELIVERED — READY FOR VALIDATION`

END_FILE projects/sfia-studio/81-shared-technical-platform-delivery-report.md

## 20. CONTRATS / WRAPPERS / GUARDS (contenu complet)

BEGIN_FILE ai/types.ts
import type { ToolDefinition } from "../tools/types";

/** Provider-facing roles — domain roles mapped without SDK types. */
export type ProviderChatRole = "system" | "user" | "assistant";

export interface ProviderChatMessage {
  role: ProviderChatRole;
  content: string;
}

export interface ProviderUsage {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  model: string | null;
  providerResponseId: string | null;
}

export interface ProviderCompletionResult {
  text: string;
  usage: ProviderUsage;
}

export interface ProviderToolCall {
  callId: string;
  name: string;
  argumentsJson: string;
}

export type ProviderInputItem =
  | { type: "message"; role: ProviderChatRole; content: string }
  | {
      type: "function_call";
      callId: string;
      name: string;
      argumentsJson: string;
    }
  | {
      type: "function_call_output";
      callId: string;
      output: string;
    };

export type ProviderRoundResult =
  | {
      kind: "message";
      text: string;
      usage: ProviderUsage;
    }
  | {
      kind: "tool_calls";
      toolCalls: ProviderToolCall[];
      usage: ProviderUsage;
    };

export interface ConversationProvider {
  readonly providerId: string;
  /** Legacy text-only completion (tools disabled). */
  complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult>;
  /** Optional tool-aware round — default falls back to complete(). */
  completeRound?(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult>;
}

export function messagesToInputItems(
  messages: ProviderChatMessage[],
): ProviderInputItem[] {
  return messages.map((m) => ({
    type: "message" as const,
    role: m.role,
    content: m.content,
  }));
}

END_FILE ai/types.ts

BEGIN_FILE ai/errors.ts
/** Platform technical errors — domain-agnostic. */
export type TechnicalErrorCode =
  | "CONFIG"
  | "PROVIDER"
  | "TIMEOUT"
  | "VALIDATION"
  | "INTERNAL";

export class TechnicalError extends Error {
  readonly code: TechnicalErrorCode;
  readonly safeMessage: string;

  constructor(code: TechnicalErrorCode, safeMessage: string, cause?: unknown) {
    super(safeMessage);
    this.name = "TechnicalError";
    this.code = code;
    this.safeMessage = safeMessage;
    if (cause !== undefined) {
      (this as Error & { cause?: unknown }).cause = cause;
    }
  }
}

END_FILE ai/errors.ts

BEGIN_FILE observability/eventSink.ts
import type { TechnicalEvent } from "./types";

/** Local injectable sink — no global bus, no shared storage. */
export interface EventSink {
  emit(event: TechnicalEvent): void;
}

export class NoopEventSink implements EventSink {
  emit(event: TechnicalEvent): void {
    void event;
  }
}

export const noopEventSink = new NoopEventSink();

END_FILE observability/eventSink.ts

BEGIN_FILE observability/types.ts
/** Generic technical event types for Studio platform. */
export type TechnicalEventType =
  | "AI_REQUESTED"
  | "AI_COMPLETED"
  | "AI_FAILED"
  | "TOOL_REQUESTED"
  | "TOOL_STARTED"
  | "TOOL_SUCCEEDED"
  | "TOOL_DENIED"
  | "TOOL_FAILED"
  | "SOURCE_LOADED"
  | "SOURCE_REJECTED"
  | "SOURCE_SEARCH_STARTED"
  | "STRUCTURED_OUTPUT_VALIDATED"
  | "STRUCTURED_OUTPUT_REJECTED"
  | "TOOL_LOOP_COMPLETED"
  | "TOOL_LOOP_LIMIT_REACHED";

export interface TechnicalEvent {
  type: TechnicalEventType;
  /** Correlation id (session, intake run, …) — opaque to platform. */
  correlationId?: string;
  detail: Record<string, unknown>;
}

END_FILE observability/types.ts

BEGIN_FILE ops1EventSink.ts
/**
 * TEMP_OPS1_PLATFORM_WRAPPER — EventSink → OPS1 session_events.
 * Remove when OPS1 session event store is retired or fully domain-owned.
 */
import type { DatabaseSync } from "node:sqlite";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { createEventId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { redactSecrets } from "@/lib/platform/security/redaction";
import type { SessionEventType } from "./types";

const TECHNICAL_TO_OPS1: Record<string, SessionEventType> = {
  TOOL_REQUESTED: "TOOL_CALL_REQUESTED",
  TOOL_STARTED: "TOOL_CALL_STARTED",
  TOOL_SUCCEEDED: "TOOL_CALL_SUCCEEDED",
  TOOL_DENIED: "TOOL_CALL_DENIED",
  TOOL_FAILED: "TOOL_CALL_FAILED",
  SOURCE_SEARCH_STARTED: "SOURCE_SEARCH_STARTED",
  TOOL_LOOP_COMPLETED: "TOOL_LOOP_COMPLETED",
  TOOL_LOOP_LIMIT_REACHED: "TOOL_LOOP_LIMIT_REACHED",
  SOURCE_LOADED: "SFIA_SOURCE_READ",
  SOURCE_REJECTED: "SFIA_CONTEXT_FAILED",
  AI_REQUESTED: "CONVERSATION_ATTEMPT_STARTED",
  AI_COMPLETED: "CONVERSATION_ATTEMPT_SUCCEEDED",
  AI_FAILED: "CONVERSATION_ATTEMPT_FAILED",
  STRUCTURED_OUTPUT_VALIDATED: "SFIA_PROPOSAL_RECEIVED",
  STRUCTURED_OUTPUT_REJECTED: "SFIA_PROPOSAL_INVALID",
};

export function createOps1SessionEventSink(
  sessionId: string,
  db?: DatabaseSync,
): EventSink {
  const database = db ?? openOps1Db();
  return {
    emit(event: TechnicalEvent): void {
      const type =
        TECHNICAL_TO_OPS1[event.type] ??
        ("TOOL_CALL_FAILED" as SessionEventType);
      const correlation = event.correlationId ?? sessionId;
      database
        .prepare(
          `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
           VALUES (?, ?, ?, ?, ?)`,
        )
        .run(
          createEventId(),
          correlation,
          type,
          nowIsoWithOffset(),
          redactSecrets(JSON.stringify(event.detail)),
        );
    },
  };
}

END_FILE ops1EventSink.ts

BEGIN_FILE import-boundaries.test.ts
/** @vitest-environment node */
/**
 * Import boundary guards for Shared Technical Platform.
 * Fails closed with an explicit message when forbidden edges appear.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      out.push(...listTsFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function collectForbiddenImports(
  files: string[],
  forbiddenPattern: RegExp,
): Array<{ file: string; line: string }> {
  const hits: Array<{ file: string; line: string }> = [];
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const line of text.split("\n")) {
      if (forbiddenPattern.test(line)) {
        hits.push({
          file: path.relative(APP_ROOT, file),
          line: line.trim(),
        });
      }
    }
  }
  return hits;
}

describe("shared platform import boundaries", () => {
  it("forbids lib/d1 from importing lib/ops1", () => {
    const files = [
      ...listTsFiles(path.join(APP_ROOT, "lib/d1")),
      ...listTsFiles(path.join(APP_ROOT, "features/d1")),
    ];
    const hits = collectForbiddenImports(
      files,
      /from\s+["']@\/lib\/ops1(?:\/|["'])|require\(["']@\/lib\/ops1/,
    );
    expect(
      hits,
      hits
        .map((h) => `${h.file}: ${h.line}`)
        .join("\n") || "D1 must not import OPS1",
    ).toEqual([]);
  });

  it("forbids lib/platform from importing lib/ops1 or lib/d1", () => {
    const files = listTsFiles(path.join(APP_ROOT, "lib/platform"));
    const hits = collectForbiddenImports(
      files,
      /from\s+["']@\/lib\/(?:ops1|d1)(?:\/|["'])|require\(["']@\/lib\/(?:ops1|d1)/,
    );
    expect(
      hits,
      hits
        .map((h) => `${h.file}: ${h.line}`)
        .join("\n") || "platform must not import domain modules",
    ).toEqual([]);
  });

  it("marks OPS1 platform wrappers as temporary", () => {
    const wrappers = [
      "lib/ops1/conversation/config.ts",
      "lib/ops1/conversation/openaiProvider.ts",
      "lib/ops1/conversation/fakeProvider.ts",
      "lib/ops1/conversation/provider.ts",
      "lib/ops1/conversation/toolLoop.ts",
      "lib/ops1/tools/types.ts",
      "lib/ops1/tools/redaction.ts",
      "lib/ops1/tools/pathPolicy.ts",
      "lib/ops1/tools/gitLocalReadAdapter.ts",
      "lib/ops1/tools/githubReadAdapter.ts",
      "lib/ops1/tools/toolRouter.ts",
      "lib/ops1/sfia/canonicalPaths.ts",
      "lib/ops1/sfia/sourceLoader.ts",
      "lib/ops1/sfia/contextResolver.ts",
      "lib/ops1/ops1EventSink.ts",
    ];
    for (const rel of wrappers) {
      const text = fs.readFileSync(path.join(APP_ROOT, rel), "utf8");
      expect(
        text.includes("TEMP_OPS1_PLATFORM_WRAPPER"),
        `${rel} missing TEMP_OPS1_PLATFORM_WRAPPER marker`,
      ).toBe(true);
    }
  });
});

END_FILE import-boundaries.test.ts

BEGIN_FILE d1/resolveProvider.ts
import type { ConversationProvider } from "@/lib/platform/ai/types";
import { D1Error } from "../errors";
import { FakeIntakeConversationProvider } from "./fakeIntakeProvider";
import { logIntakeEvent } from "../intakeObservability";

let override: ConversationProvider | null = null;

/** Test-only injection. */
export function setIntakeProviderForTests(
  provider: ConversationProvider | null,
): void {
  override = provider;
}

/**
 * Resolve intake provider.
 * Default = fake (deterministic).
 * Live only if D1_INTAKE_LIVE=1 AND secrets present — otherwise explicit CONFIG error
 * (no silent fake fallback when live was requested).
 * Imports shared platform only — never OPS1.
 */
export function resolveIntakeProvider(): {
  provider: ConversationProvider;
  mode: "fake" | "live";
} {
  if (override) {
    return {
      provider: override,
      mode: override.providerId.includes("fake") ? "fake" : "live",
    };
  }
  if (process.env.D1_INTAKE_PROVIDER === "fake") {
    return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
  }
  if (process.env.D1_INTAKE_LIVE === "1") {
    try {
      // Lazy require to avoid pulling OpenAI into client bundles via actions tree
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { requireLiveConversationSecrets } = require("@/lib/platform/ai/config") as typeof import("@/lib/platform/ai/config");
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { OpenAIConversationProvider } = require("@/lib/platform/ai/openaiProvider") as typeof import("@/lib/platform/ai/openaiProvider");
      const { apiKey, model } = requireLiveConversationSecrets();
      return {
        provider: new OpenAIConversationProvider(apiKey, model),
        mode: "live",
      };
    } catch (error) {
      logIntakeEvent("intake_provider_failed", {
        status: "CONFIG",
        providerMode: "live",
        errorCode: "CONFIG",
      });
      console.warn(
        JSON.stringify({
          event: "d1_intake_live_config_unavailable",
          ts: new Date().toISOString(),
          message:
            "D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback",
        }),
      );
      throw new D1Error(
        "CONFIG",
        "Mode live demandé (D1_INTAKE_LIVE=1) mais configuration indisponible. Aucun fallback fake silencieux.",
        error,
      );
    }
  }
  return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
}

END_FILE d1/resolveProvider.ts

BEGIN_FILE ops1/tools/toolRouter.ts (wrapper)
/**
 * TEMP_OPS1_PLATFORM_WRAPPER — re-export from shared platform.
 * Remove when no OPS1 consumer imports this path (Phase 6 cleanup gate).
 * Do not add generic logic here. Do not import from D1.
 */

import type { DatabaseSync } from "node:sqlite";
import {
  createToolCallId,
  listExposableTools,
  routeToolCall as platformRouteToolCall,
  toolResultForModel,
} from "@/lib/platform/tools/toolRouter";
import type {
  ToolCallRequest,
  ToolCallResult,
} from "@/lib/platform/tools/types";
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
import { createOps1SessionEventSink } from "../ops1EventSink";

export {
  createToolCallId,
  listExposableTools,
  toolResultForModel,
};

/** OPS1 adapter: default EventSink writes to session_events. */
export async function routeToolCall(
  request: ToolCallRequest,
  options?: {
    db?: DatabaseSync;
    workspaceRoot?: string;
    github?: GithubReadPort | null;
    githubUnavailableReason?: string;
  },
): Promise<ToolCallResult> {
  const sink = createOps1SessionEventSink(request.sessionId, options?.db);
  return platformRouteToolCall(request, {
    sink,
    workspaceRoot: options?.workspaceRoot,
    github: options?.github,
    githubUnavailableReason: options?.githubUnavailableReason,
  });
}

END_FILE ops1/tools/toolRouter.ts (wrapper)

BEGIN_FILE ops1/conversation/toolLoop.ts (wrapper)
/**
 * TEMP_OPS1_PLATFORM_WRAPPER — re-export from shared platform.
 * Remove when no OPS1 consumer imports this path (Phase 6 cleanup gate).
 * Do not add generic logic here. Do not import from D1.
 */

import type { DatabaseSync } from "node:sqlite";
import {
  runToolCallingLoop as platformRunToolCallingLoop,
  type ToolLoopResult,
} from "@/lib/platform/tools/toolLoop";
import type {
  ConversationProvider,
  ProviderChatMessage,
} from "@/lib/platform/ai/types";
import { createOps1SessionEventSink } from "../ops1EventSink";
import { openOps1Db } from "../db";

export type { ToolLoopResult };

/** OPS1 adapter: injects session EventSink + sessionId correlation. */
export async function runToolCallingLoop(input: {
  sessionId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  db?: DatabaseSync;
}): Promise<ToolLoopResult> {
  const db = input.db ?? openOps1Db();
  const sink = createOps1SessionEventSink(input.sessionId, db);
  return platformRunToolCallingLoop({
    correlationId: input.sessionId,
    messages: input.messages,
    provider: input.provider,
    enableTools: input.enableTools,
    sink,
  });
}

END_FILE ops1/conversation/toolLoop.ts (wrapper)

## 21. État Git final

```
?? .tmp-sfia-review/
```

HEAD `ea95a09b39eb6b9d9137c2bda8822b6f71468fbc` · staged vide · **aucun push** de la branche delivery.

## 22. Verdict

**SHARED TECHNICAL PLATFORM DELIVERED — READY FOR VALIDATION**

ChatGPT : lire branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`.
