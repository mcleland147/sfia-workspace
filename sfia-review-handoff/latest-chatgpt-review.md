# SFIA Review Pack — FULL (mono-cycle) — F2 Live Intent Correction

| Champ | Valeur |
|-------|--------|
| **Rôle** | Cycle 8 — Delivery corrective F2 Live Intent Analysis |
| **Synthesis-only** | **NO** |
| **GO Morris exact** | `ok go correction` |
| **GO normalisé** | `GO CORRECTION DELIVERY F2 — LIVE INTENT ANALYSIS / STRUCTURED OUTPUT — STANDARD` |
| **Cycle type** | 8 Delivery / profil Standard / typologie RUN |
| **Profil SFIA** | Standard |
| **Typologie** | RUN |
| **Branch** | `delivery/sfia-studio-f2-qualification-proposal-gate` |
| **Base / HEAD** | `1847fc61f384e13b15651ed914286fe87ac7133c` (unchanged — **no project commit**) |
| **origin/main** | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| **Local worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery` |
| **Inbound handoff tip (pre-publish)** | `443e1c6d747e643ed3441d238e846306376303e5` |
| **Inbound handoff blob** | `a048ab788251a10c2ad9bbebe3141eab03037185` |
| **Timestamp Europe/Paris (CEST)** | 2026-08-10 22:42:10 CEST (+0200) |
| **Timestamp UTC** | 2026-08-10 20:42:10 UTC |
| **Repository** | `mcleland147/sfia-workspace` |
| **CKC Delivery** | detailed pilot absent → fallback `02-fifteen-cycles-synthetic-map.md` (**candidate/experimental**, **no execution authority**) |

---

## Verdict (exact — PASS form)

```
F2 LIVE INTENT CORRECTION COMPLETE —
ROOT CAUSE CLOSED —
GPT-5.6-SOL STRUCTURED ANALYSIS RELIABLE ON TARGET SCENARIOS —
F1 INFORMATIVE PATH PRESERVED —
NATURAL ACTIONABLE REQUEST → QUALIFICATION + PROPOSAL PASS —
NATURAL STRUCTURING REQUEST → QUALIFICATION + MORRIS GATE PASS —
EXECUTION REQUEST REMAINS BOUNDED —
SERVER-SIDE VALIDATION PRESERVED —
NO HEURISTIC FALLBACK —
FIXTURE RECETTE 9/9 PASS —
LIVE RECETTE 4/4 PASS —
REGRESSION + TYPECHECK + LINT + BUILD PASS —
NO F3 / CURSOR / EXECUTIONRUN / GIT WRITE —
NO PROJECT COMMIT / PUSH / PR / MERGE —
READY FOR CHATGPT REVIEW / MORRIS COMMIT GATE
```

**Statut :** READY FOR REVIEW

**Gate suivant (NOT consumed):**
```
GO COMMIT — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO
```

---

## 0. GO / cycle / truth / inbound

### GO Morris exact (consommé)
`ok go correction`

### GO normalisé (autorisé)
`GO CORRECTION DELIVERY F2 — LIVE INTENT ANALYSIS / STRUCTURED OUTPUT — STANDARD`

Autorise : modification locale bornée, tests, appels OpenAI live bornés pour re-recette, publication Review Handoff L3.
N’autorise PAS : commit/push/PR/merge projet, F3, Cursor produit, Git write produit, persistence, IAM, suppression OPS1, redesign UI, package upgrade.

### Cycle / profil / typologie
- Cycle: **8 Delivery (corrective)**
- Profil: **Standard**
- Typologie: **RUN**

### Branch / Base / HEAD
| Field | Value |
|---|---|
| branch | `delivery/sfia-studio-f2-qualification-proposal-gate` |
| Base / HEAD | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| origin/main | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| project commits this cycle | **0** |

### Local worktree
`/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery`

### Sources méthode + CKC fallback
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` (§4.8 Delivery)
- CKC matrix: `…/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md` — Delivery detailed pilot **ABSENT**
- Fallback: `…/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` — **candidate / experimental cognitive guidance / no execution authority**

### Inbound handoff (prior Delivery tip)
| Field | Value |
|---|---|
| tip | `443e1c6d747e643ed3441d238e846306376303e5` |
| blob | `a048ab788251a10c2ad9bbebe3141eab03037185` |
| message | `docs(review-handoff): publish F2 delivery` |
| rôle | Cycle 8 — Delivery F2 Qualification + Proposition + Gate |
| Synthesis-only | **NO** |

### Ancien verdict / état Commit (transporté)
Le handoff Delivery F2 déclaré fixture **9/9**, AC-F2-01..27 **PASS**, mais une recette live **postérieure** a invalidé le readiness Commit :

```
F2 DELIVERY NOT READY —
LIVE INTENT ANALYSIS FAILS ON ACTIONABLE + STRUCTURING REQUESTS —
FIXTURE PATH VALID BUT NATURAL-LANGUAGE LIVE PATH INSUFFICIENT —
NO COMMIT GATE
```

Ne pas réutiliser l’ancien « READY FOR COMMIT » comme état courant pré-correction.

---

## 1. Recette live pré-fix (2/4)

Source: `.tmp-sfia-review/f2-metier-recette-live/recette-results.json`
Horodatage: 2026-08-10T20:00:25.975Z / lundi 10 août 2026 à 22:00:25 UTC+2
Mode: `Mode live · gpt-5.6-sol` — natural language only — **no** `__F2_*` markers.

| ID | Result | Observed |
|---|---|---|
| L1 | **PASS** | F1 informative; proposalCount=0 |
| L2 | **FAIL** | clarification fail-closed; no qualification/proposal (`Votre demande est ambiguë…`) |
| L3 | **FAIL** | `Qualification impossible — cycle ou signaux incomplets`; no gate |
| L4 | **PASS** | AUCUNE EXÉCUTION / no Cursor CTA |

**Global pré-fix: 2/4 PASS (L2+L3 FAIL).**

```json
{
  "timestampUtc": "2026-08-10T20:00:25.975Z",
  "timestampCest": "lundi 10 août 2026 à 22:00:25 UTC+2",
  "timezoneNote": "CEST (Europe/Paris)",
  "port": 3021,
  "baseUrl": "http://localhost:3021",
  "fakeProvider": false,
  "modelExpected": "gpt-5.6-sol",
  "modePillObserved": "Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION",
  "modePillAtReady": "MODE À CONFIRMER Lecture seule AUCUNE EXÉCUTION",
  "liveOpenAiCallsEstimate": 4,
  "port3020ListeningBefore": true,
  "port3020ListeningAfter": true,
  "port3021ListeningBefore": true,
  "scenarios": {
    "L1": {
      "id": "L1",
      "ok": true,
      "expected": "F1 conversation; no F2 proposal card (proposalCount=0); mode pill shows live + model",
      "observed": "mode=\"Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION\"; proposalCount=0; replyLen=508; noFake=true; replyPreview=\"ASSISTANT\\n\\nL’objectif du projet **F2 Métier Recette Live (F2MRL)** est de **valider en conditions réelles avec OpenAI les parcours métier F2 de niveaux L1 à L4** :\\n\\n- réponse informative ;\\n- réponse actionnable ;\\n- répon\"",
      "screenshot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-metier-recette-live/screenshots/01-live-informative-f1.png"
    },
    "L2": {
      "id": "L2",
      "ok": false,
      "expected": "qualification RECOMMANDATION + PROPOSITION F2 visible (cycle/profile or proposal card)",
      "observed": "proposalCount=0; qualCount=0; cycle=false; profile=false; recoWording=true; replyLen=187; replyPreview=\"ASSISTANT\\n\\n[Clarification requise] Votre demande est ambiguë ou incomplète. Précisez l'objectif, le périmètre et l'action souhaitée. Aucune proposition F2 n'a été créée. AUCUNE EXÉCUTION.\"",
      "screenshot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-metier-recette-live/screenshots/02-live-actionnable-proposition.png"
    },
    "L3": {
      "id": "L3",
      "ok": false,
      "expected": "structuring recognized; DÉCISION REQUISE / gate Morris / gate CTAs OR clear structuring + gate required wording",
      "observed": "gateVisible=false; gateRequired=\"\"; decideCta=false; decisionWording=true; structuringInReply=false; softOk=false; replyLen=108; replyPreview=\"ASSISTANT\\n\\n[Clarification requise] Qualification impossible — cycle ou signaux incomplets. AUCUNE EXÉCUTION.\"",
      "screenshot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-metier-recette-live/screenshots/03-live-structurant-gate.png"
    },
    "L4": {
      "id": "L4",
      "ok": true,
      "expected": "may qualify/propose but NO execution — AUCUNE EXÉCUTION visible; no Cursor execute CTA; no EXECUTING",
      "observed": "aucuneExec=true; noCursorCta=true; noExecuting=true; claimsDone=false; replyLen=108; replyPreview=\"ASSISTANT\\n\\n[Clarification requise] Qualification impossible — cycle ou signaux incomplets. AUCUNE EXÉCUTION.\"",
      "screenshot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-metier-recette-live/screenshots/04-live-execution-refusee.png"
    }
  },
  "summary": {
    "passCount": 2,
    "failCount": 2,
    "allPassed": false
  },
  "notes": "LIVE OpenAI métier recette — natural language only, no __F2_* markers.",
  "port3020Untouched": true
}
```

---

## 2. Root cause

**Free-text `provider.complete()` JSON for F2 intent analysis.**

Package F2 called `analyzeIntent` → `ConversationProvider.complete(messages)` and asked the model (in prose) to return compact JSON. Live GPT-5.6 Sol often omitted / incompletely filled `candidateCycleTypeId` and/or the exact six boolean `signals`, so `validateIntentAnalysisPayload` correctly fail-closed → clarification / « Qualification impossible » on natural-language L2/L3.

Not a validator bug: validator strictness was correct and must be preserved.

---

## 3. Solution technique retenue

1. Extend existing `ConversationProvider` with optional domain-agnostic `completeStructured({ messages, schemaName, jsonSchema })`.
2. Implement on `OpenAIConversationProvider` via Responses API:
   - `client.responses.create(…)`
   - `text.format = { type: "json_schema", name, schema, strict: true }`
3. Implement on `FakeConversationProvider` by reusing existing `__F2_*` / `complete()` scripted JSON (fixtures preserved).
4. Feature F2 supplies `F2_INTENT_JSON_SCHEMA` + `F2_INTENT_SCHEMA_NAME`; `analyzeIntent` **requires** `completeStructured` and still runs `validateIntentAnalysisPayload` fail-closed.
5. Null encoding: `anyOf` [enum|object, `{type:"null"}`] — no invented delivery cycle defaults; no heuristics.

### Why not a second provider
- Single existing ConversationProvider / resolve path preserved (`provider.ts` unchanged).
- No OpenAI SDK import from `features/project-assistant/f2`.
- No second gateway / direct `api.openai.com` fetch from F2.
- Provider stays domain-agnostic; feature owns schema + domain validation.
- F1 `complete()` / `completeRound` tool path untouched.

### Validation preserved / no heuristics
- Enum checks, catalogue `isKnownCycleTypeId`, exactly 6 booleans, bounded strings/arrays, fail-closed.
- **Forbidden and not done:** default cycle=delivery; missing signals→false; regex microservices/reporting; Critical invented; partial JSON accepted; parse failure→actionable.

---

## 4. PACKAGE F2 TOTAL vs CORRECTION DELTA

### PACKAGE F2 TOTAL (pre-fix Delivery package — still uncommitted)
From `pre-fix-status.txt` / `pre-fix-diff-stat.txt` (13 modified + f2/ created; **no** platform `types.ts` / `openaiProvider.ts` / openai-provider / platform-ai correction tests yet):

```
branch: delivery/sfia-studio-f2-qualification-proposal-gate
HEAD: 1847fc61f384e13b15651ed914286fe87ac7133c
origin/main: 1847fc61f384e13b15651ed914286fe87ac7133c

=== git status --short ===
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/index.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/

=== git diff --name-status ===
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/index.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
M	projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts

=== git diff --cached --stat ===
```

```
 .../ProjectAssistantPanel.test.tsx                 |  22 +-
 .../project-assistant/importBoundaries.test.ts     |  11 +-
 .../importBoundaries.test.ts                       |   1 +
 .../vertical-slice-ui/createProjectUi.test.tsx     |  38 ++-
 .../project-assistant/ProjectAssistantPanel.tsx    | 285 ++++++++++++++++++++-
 .../app/features/project-assistant/actions.ts      | 147 ++++++++++-
 .../app/features/project-assistant/index.ts        |   1 +
 .../features/project-assistant/orchestrateTurn.ts  |   1 +
 .../project-assistant/project-assistant.module.css | 126 +++++++++
 .../app/features/project-assistant/types.ts        |  62 ++++-
 .../app/lib/platform/ai/fakeProvider.ts            | 221 ++++++++++++++++
 .../vertical-slice-core/localProjectComposition.ts |   6 +
 .../app/lib/vertical-slice-runtime/service.ts      |  58 ++++-
 13 files changed, 940 insertions(+), 39 deletions(-)
```

Package-total created (reference — full contents already published in inbound Delivery handoff tip `443e1c6d` / blob `a048ab78`; **not re-dumped entire Delivery here** except correction-touched files below):
- `f2/gatePolicy.ts`, `orchestrateF2.ts`, `proposalStore.ts`, `qualify.ts`, `recordDecision.ts`, `types.ts` (**package; unchanged by correction**)
- `f2/intentAnalysis.ts` (**package baseline**; **correction-modified** — full current + delta below)
- `f2.orchestrate.test.ts` (**package baseline**; **correction-modified** — full current + delta below)
- UI/actions/types/css/composition/runtime/importBoundaries/panel tests (**package; not in correction allowlist**)

### CORRECTION DELTA ONLY (this cycle)
| Path | Kind |
|---|---|
| `projects/sfia-studio/app/lib/platform/ai/types.ts` | MODIFIED — add optional `completeStructured?` |
| `projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts` | MODIFIED — Responses `json_schema` strict |
| `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts` | MODIFIED — add `completeStructured` (beyond package F2 markers) |
| `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts` | MODIFIED vs package — schema + `completeStructured` path |
| `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts` | MODIFIED vs package — structured success/fail-closed/spy |
| `projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts` | MODIFIED — assert `text.format` payload |
| `projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts` | MODIFIED — fake `completeStructured` telemetry |

No other project files were intentionally changed for this correction.

---

## 5. Git Truth (post-correction, pre-handoff publish)

```
branch: delivery/sfia-studio-f2-qualification-proposal-gate
HEAD: 1847fc61f384e13b15651ed914286fe87ac7133c
origin/main: 1847fc61f384e13b15651ed914286fe87ac7133c
git diff --check: PASS (exit 0)
project commit: NONE
```

### `git status --short`
```
 M projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
 M projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/index.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
 M projects/sfia-studio/app/lib/platform/ai/types.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/
```

### `git diff --stat`
```
 .../app/__tests__/ops1/openai-provider.test.ts     |  54 ++++
 .../app/__tests__/platform/platform-ai.test.ts     |  16 ++
 .../ProjectAssistantPanel.test.tsx                 |  22 +-
 .../project-assistant/importBoundaries.test.ts     |  11 +-
 .../importBoundaries.test.ts                       |   1 +
 .../vertical-slice-ui/createProjectUi.test.tsx     |  38 ++-
 .../project-assistant/ProjectAssistantPanel.tsx    | 285 ++++++++++++++++++++-
 .../app/features/project-assistant/actions.ts      | 147 ++++++++++-
 .../app/features/project-assistant/index.ts        |   1 +
 .../features/project-assistant/orchestrateTurn.ts  |   1 +
 .../project-assistant/project-assistant.module.css | 126 +++++++++
 .../app/features/project-assistant/types.ts        |  62 ++++-
 .../app/lib/platform/ai/fakeProvider.ts            | 232 +++++++++++++++++
 .../app/lib/platform/ai/openaiProvider.ts          |  57 +++++
 projects/sfia-studio/app/lib/platform/ai/types.ts  |   9 +
 .../vertical-slice-core/localProjectComposition.ts |   6 +
 .../app/lib/vertical-slice-runtime/service.ts      |  58 ++++-
 17 files changed, 1087 insertions(+), 39 deletions(-)
```

### `git diff --name-status`
```
M	projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
M	projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/index.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
M	projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
M	projects/sfia-studio/app/lib/platform/ai/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

---

## 6. CORRECTION DELTA — full contents / complete diffs

### 6.1 FULL CURRENT: `features/project-assistant/f2/intentAnalysis.ts`
(Created in PACKAGE F2; correction replaces free-text `complete()` with schema-native `completeStructured`.)

```typescript
/**
 * Structured intent analysis via existing ConversationProvider.
 * Provider output is untrusted until server-side validation (fail-closed).
 */

import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  TechnicalError,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { ADOPTED_CYCLE_TYPE_IDS, isKnownCycleTypeId } from "@/lib/oa/cycle";
import type {
  F2QualificationSignals,
  IntentAnalysisDto,
  IntentClass,
} from "./types";

const INTENT_CLASSES: readonly IntentClass[] = [
  "informative",
  "actionable",
  "ambiguous",
  "execution_request",
] as const;

const SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;

const MAX_STRING = 2000;
const MAX_ARRAY = 12;

const NULLABLE_STRING = { type: ["string", "null"] } as const;
const STRING_ARRAY = {
  type: "array",
  items: { type: "string" },
} as const;

const SIGNALS_OBJECT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    structuralChange: { type: "boolean" },
    securityImpact: { type: "boolean" },
    architectureImpact: { type: "boolean" },
    dataImpact: { type: "boolean" },
    irreversible: { type: "boolean" },
    lowRiskBounded: { type: "boolean" },
  },
  required: [...SIGNAL_KEYS],
} as const;

/**
 * OpenAI strict json_schema for F2 intent analysis.
 * Null cycle/signals: anyOf [enum|object, { type: "null" }] (not omitted, not invented).
 */
export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  additionalProperties: false,
  properties: {
    intentClass: {
      type: "string",
      enum: [...INTENT_CLASSES],
    },
    candidateCycleTypeId: {
      anyOf: [
        {
          type: "string",
          enum: [...ADOPTED_CYCLE_TYPE_IDS],
        },
        { type: "null" },
      ],
    },
    signals: {
      anyOf: [SIGNALS_OBJECT_SCHEMA, { type: "null" }],
    },
    objective: NULLABLE_STRING,
    scope: NULLABLE_STRING,
    rephrasedRequest: NULLABLE_STRING,
    outOfScope: STRING_ARRAY,
    risks: STRING_ARRAY,
    reservations: STRING_ARRAY,
    stopConditions: STRING_ARRAY,
    activatedBlocks: STRING_ARRAY,
    expectedOutcome: NULLABLE_STRING,
    criticalJustification: NULLABLE_STRING,
    requestedOperation: NULLABLE_STRING,
  },
  required: [
    "intentClass",
    "candidateCycleTypeId",
    "signals",
    "objective",
    "scope",
    "rephrasedRequest",
    "outOfScope",
    "risks",
    "reservations",
    "stopConditions",
    "activatedBlocks",
    "expectedOutcome",
    "criticalJustification",
    "requestedOperation",
  ],
};

export const F2_INTENT_SCHEMA_NAME = "f2_intent_analysis";

function clip(value: unknown, max = MAX_STRING): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.length <= max ? trimmed : trimmed.slice(0, max);
}

function clipArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, MAX_ARRAY)
    .map((item) => (item.length <= 500 ? item : item.slice(0, 500)));
}

function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysisDto {
  return {
    intentClass: "ambiguous",
    candidateCycleTypeId: null,
    signals: null,
    objective: partial?.objective ?? null,
    scope: partial?.scope ?? null,
    rephrasedRequest: partial?.rephrasedRequest ?? null,
    outOfScope: partial?.outOfScope ?? [],
    risks: partial?.risks ?? [],
    reservations: partial?.reservations ?? [],
    stopConditions: partial?.stopConditions ?? [],
    activatedBlocks: partial?.activatedBlocks ?? [],
    expectedOutcome: partial?.expectedOutcome ?? null,
    criticalJustification: partial?.criticalJustification ?? null,
    requestedOperation: partial?.requestedOperation ?? null,
    parseOk: false,
  };
}

function parseSignals(raw: unknown): F2QualificationSignals | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;
  const out: Partial<F2QualificationSignals> = {};
  for (const key of SIGNAL_KEYS) {
    if (typeof obj[key] !== "boolean") return null;
    out[key] = obj[key] as boolean;
  }
  return out as F2QualificationSignals;
}

function extractJsonObject(text: string): unknown | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced?.[1]?.trim() ?? text.trim();
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch {
    return null;
  }
}

export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
  if (!raw || typeof raw !== "object") return ambiguousFallback();
  const obj = raw as Record<string, unknown>;
  const intentClass = obj.intentClass;
  if (
    typeof intentClass !== "string" ||
    !INTENT_CLASSES.includes(intentClass as IntentClass)
  ) {
    return ambiguousFallback();
  }

  let candidateCycleTypeId: string | null = null;
  if (obj.candidateCycleTypeId != null) {
    const id = clip(obj.candidateCycleTypeId, 120);
    if (!id || !isKnownCycleTypeId(id)) {
      return ambiguousFallback({
        intentClass: intentClass as IntentClass,
        parseOk: false,
      } as Partial<IntentAnalysisDto>);
    }
    candidateCycleTypeId = id;
  }

  const signals = parseSignals(obj.signals);
  const needsSignals =
    intentClass === "actionable" || intentClass === "execution_request";
  if (needsSignals && !signals) {
    return ambiguousFallback();
  }

  return {
    intentClass: intentClass as IntentClass,
    candidateCycleTypeId,
    signals,
    objective: clip(obj.objective),
    scope: clip(obj.scope),
    rephrasedRequest: clip(obj.rephrasedRequest),
    outOfScope: clipArray(obj.outOfScope),
    risks: clipArray(obj.risks),
    reservations: clipArray(obj.reservations),
    stopConditions: clipArray(obj.stopConditions),
    activatedBlocks: clipArray(obj.activatedBlocks),
    expectedOutcome: clip(obj.expectedOutcome),
    criticalJustification: clip(obj.criticalJustification),
    requestedOperation: clip(obj.requestedOperation, 240),
    parseOk: true,
  };
}

const ANALYSIS_SYSTEM = `Tu analyses l'intention utilisateur pour SFIA Studio F2.
Réponds UNIQUEMENT avec un objet JSON conforme au schéma (pas de markdown, pas de prose).
Champs obligatoires:
intentClass (informative|actionable|ambiguous|execution_request),
candidateCycleTypeId (id catalogue cyc:… OU null),
signals ({structuralChange,securityImpact,architectureImpact,dataImpact,irreversible,lowRiskBounded} tous booléens OU null),
objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires).
Règles strictes:
- actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.
- Ne décide jamais un GO Morris; ne propose jamais d'exécution; n'invente jamais un cycle (ex. delivery) par défaut.`;

export async function analyzeIntent(input: {
  userContent: string;
  projectSummary: string;
}): Promise<{
  analysis: IntentAnalysisDto;
  presentation: "test_provider" | "openai_live";
  model: string | null;
  rawText: string;
}> {
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  const messages: ProviderChatMessage[] = [
    { role: "system", content: ANALYSIS_SYSTEM },
    {
      role: "user",
      content: `Contexte projet:\\n${input.projectSummary}\\n\\nDemande:\\n${input.userContent}`,
    },
  ];

  if (typeof provider.completeStructured !== "function") {
    throw new TechnicalError(
      "PROVIDER",
      "Structured Outputs requis pour l’analyse d’intention F2 (completeStructured manquant).",
    );
  }

  const completion = await provider.completeStructured({
    messages,
    schemaName: F2_INTENT_SCHEMA_NAME,
    jsonSchema: F2_INTENT_JSON_SCHEMA,
  });
  const parsed = extractJsonObject(completion.text);
  const analysis = validateIntentAnalysisPayload(parsed);
  return {
    analysis,
    presentation,
    model: completion.usage?.model ?? null,
    rawText: completion.text,
  };
}

```

### 6.2 DIFF vs PACKAGE: `intentAnalysis.ts`
```diff
--- package/intentAnalysis.ts
+++ correction/intentAnalysis.ts
@@ -6,9 +6,10 @@
 import {
   isFakeConversationProviderForced,
   resolveConversationProvider,
+  TechnicalError,
   type ProviderChatMessage,
 } from "@/lib/platform/ai";
-import { isKnownCycleTypeId } from "@/lib/oa/cycle";
+import { ADOPTED_CYCLE_TYPE_IDS, isKnownCycleTypeId } from "@/lib/oa/cycle";
 import type {
   F2QualificationSignals,
   IntentAnalysisDto,
@@ -33,6 +34,82 @@

 const MAX_STRING = 2000;
 const MAX_ARRAY = 12;
+
+const NULLABLE_STRING = { type: ["string", "null"] } as const;
+const STRING_ARRAY = {
+  type: "array",
+  items: { type: "string" },
+} as const;
+
+const SIGNALS_OBJECT_SCHEMA = {
+  type: "object",
+  additionalProperties: false,
+  properties: {
+    structuralChange: { type: "boolean" },
+    securityImpact: { type: "boolean" },
+    architectureImpact: { type: "boolean" },
+    dataImpact: { type: "boolean" },
+    irreversible: { type: "boolean" },
+    lowRiskBounded: { type: "boolean" },
+  },
+  required: [...SIGNAL_KEYS],
+} as const;
+
+/**
+ * OpenAI strict json_schema for F2 intent analysis.
+ * Null cycle/signals: anyOf [enum|object, { type: "null" }] (not omitted, not invented).
+ */
+export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
+  type: "object",
+  additionalProperties: false,
+  properties: {
+    intentClass: {
+      type: "string",
+      enum: [...INTENT_CLASSES],
+    },
+    candidateCycleTypeId: {
+      anyOf: [
+        {
+          type: "string",
+          enum: [...ADOPTED_CYCLE_TYPE_IDS],
+        },
+        { type: "null" },
+      ],
+    },
+    signals: {
+      anyOf: [SIGNALS_OBJECT_SCHEMA, { type: "null" }],
+    },
+    objective: NULLABLE_STRING,
+    scope: NULLABLE_STRING,
+    rephrasedRequest: NULLABLE_STRING,
+    outOfScope: STRING_ARRAY,
+    risks: STRING_ARRAY,
+    reservations: STRING_ARRAY,
+    stopConditions: STRING_ARRAY,
+    activatedBlocks: STRING_ARRAY,
+    expectedOutcome: NULLABLE_STRING,
+    criticalJustification: NULLABLE_STRING,
+    requestedOperation: NULLABLE_STRING,
+  },
+  required: [
+    "intentClass",
+    "candidateCycleTypeId",
+    "signals",
+    "objective",
+    "scope",
+    "rephrasedRequest",
+    "outOfScope",
+    "risks",
+    "reservations",
+    "stopConditions",
+    "activatedBlocks",
+    "expectedOutcome",
+    "criticalJustification",
+    "requestedOperation",
+  ],
+};
+
+export const F2_INTENT_SCHEMA_NAME = "f2_intent_analysis";

 function clip(value: unknown, max = MAX_STRING): string | null {
   if (typeof value !== "string") return null;
@@ -145,9 +222,17 @@
 }

 const ANALYSIS_SYSTEM = `Tu analyses l'intention utilisateur pour SFIA Studio F2.
-Réponds UNIQUEMENT avec un JSON compact (pas de markdown) de forme:
-{"intentClass":"informative|actionable|ambiguous|execution_request","candidateCycleTypeId":"cyc:... "|null,"signals":{"structuralChange":bool,"securityImpact":bool,"architectureImpact":bool,"dataImpact":bool,"irreversible":bool,"lowRiskBounded":bool}|null,"objective":"...","scope":"...","rephrasedRequest":"...","outOfScope":[],"risks":[],"reservations":[],"stopConditions":[],"activatedBlocks":[],"expectedOutcome":"...","criticalJustification":null,"requestedOperation":null}
-Règles: ne décide jamais un GO Morris; ne propose jamais d'exécution; cycleTypeId doit être un id catalogue connu; pour informative, signals peut être null.`;
+Réponds UNIQUEMENT avec un objet JSON conforme au schéma (pas de markdown, pas de prose).
+Champs obligatoires:
+intentClass (informative|actionable|ambiguous|execution_request),
+candidateCycleTypeId (id catalogue cyc:… OU null),
+signals ({structuralChange,securityImpact,architectureImpact,dataImpact,irreversible,lowRiskBounded} tous booléens OU null),
+objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
+expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires).
+Règles strictes:
+- actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
+- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.
+- Ne décide jamais un GO Morris; ne propose jamais d'exécution; n'invente jamais un cycle (ex. delivery) par défaut.`;

 export async function analyzeIntent(input: {
   userContent: string;
@@ -172,7 +257,18 @@
     },
   ];

-  const completion = await provider.complete(messages);
+  if (typeof provider.completeStructured !== "function") {
+    throw new TechnicalError(
+      "PROVIDER",
+      "Structured Outputs requis pour l’analyse d’intention F2 (completeStructured manquant).",
+    );
+  }
+
+  const completion = await provider.completeStructured({
+    messages,
+    schemaName: F2_INTENT_SCHEMA_NAME,
+    jsonSchema: F2_INTENT_JSON_SCHEMA,
+  });
   const parsed = extractJsonObject(completion.text);
   const analysis = validateIntentAnalysisPayload(parsed);
   return {
@@ -182,4 +278,3 @@
     rawText: completion.text,
   };
 }
-

```

### 6.3 FULL CURRENT: `__tests__/project-assistant/f2.orchestrate.test.ts`

```typescript
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  evaluateMorrisGateRequired,
} from "@/features/project-assistant/f2/gatePolicy";
import {
  resetF2ProposalStoreForTests,
  getProposal,
  saveProposal,
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { qualifyWithCkc } from "@/features/project-assistant/f2/qualify";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/vertical-slice-runtime/actions")
  >("@/lib/vertical-slice-runtime/actions");
  return {
    ...actual,
    getProjectRuntimeAction: getProjectRuntimeActionMock,
  };
});

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:f2-demo",
    name: "Projet F2",
    shortReference: "F2",
    objective: "Tester qualification et gate.",
    contextSummary: "Contexte process-local F2.",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:f2",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:f2-demo",
    version: 1 as const,
    createdAt: "2026-08-10T12:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: [] as const,
  },
};

describe("F2 orchestration AC coverage", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("AC-F2-01 informative remains F1 without proposal", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Résume l'objectif __F2_INFORMATIVE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/TEST\/FAKE/);
  });

  it("AC-F2-02/04/05/06/08/09/10 actionable qualifies and proposes", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification).toBeTruthy();
    expect(result.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(result.f2?.qualification?.recommendationLabel).toMatch(/RECOMMANDATION/);
    expect(result.f2?.proposal).toBeTruthy();
    expect(result.f2?.proposal?.outOfScope.length).toBeGreaterThan(0);
    expect(result.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
    expect(result.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");
    expect(JSON.stringify(result.f2?.proposal)).not.toMatch(/executing|completed|failed/);
  });

  it("AC-F2-03 ambiguous asks clarification without proposal", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Fais le nécessaire __F2_AMBIGUOUS__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/Clarification/i);
  });

  it("AC-F2-11 critical without justification blocks", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Change sécurité __F2_CRITICAL_NO_JUSTIFICATION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/Critical/i);
    expect(result.f2?.qualification?.requiresJustificationForCritical).toBe(true);
  });

  it("AC-F2-12/25 execution request may propose but blocks execution + gate", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Lance Cursor et crée une PR __F2_EXECUTION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.executionBlocked).toBe(true);
    expect(result.f2?.proposal?.morrisGateRequired).toBe(true);
    expect(result.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(result.text).toMatch(/AUCUNE EXÉCUTION/);
  });

  it("fail-closed on invalid JSON / unknown cycle / incomplete signals", () => {
    expect(validateIntentAnalysisPayload(null).intentClass).toBe("ambiguous");
    expect(validateIntentAnalysisPayload(null).parseOk).toBe(false);
    expect(validateIntentAnalysisPayload("not-json").parseOk).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:unknown",
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      }).parseOk,
    ).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:delivery",
        signals: { structuralChange: true },
      }).parseOk,
    ).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:delivery",
        signals: null,
      }).parseOk,
    ).toBe(false);
  });

  it("structured actionable / structuring payloads parse successfully", () => {
    const actionable = validateIntentAnalysisPayload({
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      objective: "Préparer livraison",
      scope: "borné",
      rephrasedRequest: "Proposition delivery",
      outOfScope: ["exécution"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification"],
      expectedOutcome: "proposition",
      criticalJustification: null,
      requestedOperation: null,
    });
    expect(actionable.parseOk).toBe(true);
    expect(actionable.intentClass).toBe("actionable");
    expect(actionable.candidateCycleTypeId).toBe("cyc:delivery");
    expect(actionable.signals?.lowRiskBounded).toBe(true);

    const structuring = validateIntentAnalysisPayload({
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:functional-architecture",
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: true,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      objective: "Architecture",
      scope: "structurant",
      rephrasedRequest: "Changement architecture",
      outOfScope: ["PR"],
      risks: ["impact"],
      reservations: [],
      stopConditions: [],
      activatedBlocks: ["gate"],
      expectedOutcome: "gate",
      criticalJustification: "justifié",
      requestedOperation: "architecture change",
    });
    expect(structuring.parseOk).toBe(true);
    expect(structuring.candidateCycleTypeId).toBe("cyc:functional-architecture");
  });

  it("AC-F2 structured path: markers + no openai import + no profile/decision/execution leakage", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const f2Dir = path.join(process.cwd(), "features/project-assistant/f2");
    for (const file of fs.readdirSync(f2Dir)) {
      if (!file.endsWith(".ts")) continue;
      const src = fs.readFileSync(path.join(f2Dir, file), "utf8");
      expect(src).not.toMatch(/from\s+["']openai["']/);
      expect(src).not.toMatch(/require\(["']openai["']\)/);
    }

    const actionable = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(actionable.ok).toBe(true);
    if (!actionable.ok) return;
    expect(actionable.presentation).toBe("test_provider");
    expect(actionable.model).toBe("fake-test-model");
    expect(actionable.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(actionable.f2?.qualification?.recommendedProfile).toBeTruthy();
    // Profile comes from CKC qualify — never from raw model intent JSON fields.
    expect(actionable.f2?.qualification).not.toHaveProperty("profile");
    expect(actionable.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
    expect(actionable.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");
    expect(actionable.f2?.proposal?.executionForbidden).toBe(true);

    const structuring = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(structuring.ok).toBe(true);
    if (!structuring.ok) return;
    expect(structuring.f2?.proposal).toBeTruthy();
    expect(structuring.f2?.qualification?.isMorrisDecision).toBe(false);
  });

  it("completeStructured is used for F2 analysis and preserves complete() F1 compatibility", async () => {
    const { FakeConversationProvider } = await import(
      "@/lib/platform/ai/fakeProvider"
    );
    const provider = new FakeConversationProvider();
    const structuredSpy = vi.spyOn(provider, "completeStructured");
    const completeSpy = vi.spyOn(provider, "complete");
    setConversationProviderForTests(provider);

    const f2 = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Résume __F2_INFORMATIVE__",
    });
    expect(f2.ok).toBe(true);
    expect(structuredSpy).toHaveBeenCalled();
    const structuredArg = structuredSpy.mock.calls[0]?.[0];
    expect(structuredArg?.schemaName).toBe("f2_intent_analysis");
    expect(structuredArg?.jsonSchema).toMatchObject({
      type: "object",
      additionalProperties: false,
    });
    expect(f2.ok && f2.model).toBe("fake-test-model");

    // Legacy complete() path remains available for non-F2 / F1-style text.
    const plain = await provider.complete([{ role: "user", content: "ping" }]);
    expect(plain.text).toContain("TEST/FAKE");
    expect(completeSpy).toHaveBeenCalled();
  });

  it("AC-F2-22/23 qualify uses catalog + isMorrisDecision false", async () => {
    const q = await qualifyWithCkc({
      cycleTypeId: "cyc:capitalization",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      correlationId: "cor:test-cap",
    });
    expect(q.ok).toBe(true);
    if (!q.ok) return;
    expect(q.qualification.isMorrisDecision).toBe(false);
    expect(q.qualification.capitalizationViaCycleTypeId).toBe(true);
    expect(q.qualification.recommendedProfile).not.toMatch(/capitalization/i);
  });

  it("gate policy is deterministic server-side", () => {
    const baseIntent = {
      intentClass: "actionable" as const,
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      objective: "x",
      scope: "y",
      rephrasedRequest: "z",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
      parseOk: true,
    };
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Standard",
        signals: baseIntent.signals!,
        intent: baseIntent,
      }),
    ).toBe(false);
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Critical",
        signals: baseIntent.signals!,
        intent: baseIntent,
      }),
    ).toBe(true);
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Standard",
        signals: { ...baseIntent.signals!, architectureImpact: true },
        intent: { ...baseIntent, requestedOperation: "create pr" },
      }),
    ).toBe(true);
  });
});

describe("F2 decisions with shared OA stack", () => {
  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({ auditMode: "noop" });
    const created = await runtime.createProject({
      name: "Projet F2 Decision",
      objective: "Décisions Morris process-local",
      context: "Contexte F2 gate",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F2D",
      idempotencyKey: `f2-dec-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    (globalThis as { __f2ProjectId?: string }).__f2ProjectId =
      created.project.projectId;
    getProjectRuntimeActionMock.mockImplementation(async (projectId: string) => {
      return runtime.getProject(projectId);
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  async function seedProposal(projectId: string) {
    const runtime = getRuntimeApplicationService();
    const overview = await runtime.getProject(projectId);
    if (!overview.ok) throw new Error("missing project");
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Proposition structurant",
      objective: "Arch change",
      cycleTypeId: "cyc:functional-architecture",
      recommendedProfile: "Standard",
      rationale: "test",
      scope: "architecture",
      outOfScope: ["execution"],
      activatedBlocks: ["gate"],
      expectedOutcome: "decision",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      morrisGateRequired: true,
      nextPossibleStep: "Décision Morris",
      contextSnapshot: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });
    return { proposal, runtime, overview };
  }

  it("AC-F2-13/14/15/16 GO / NO-GO / AMEND / no execution", async () => {
    const projectId = (globalThis as { __f2ProjectId?: string }).__f2ProjectId!;
    const { proposal, runtime } = await seedProposal(projectId);
    expect(runtime.oa).toBeTruthy();

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      canActAsMorris: true, // hostile client claim ignored; server registers evidence
      claimedAuthorityLevel: "N3",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    expect(go.decision.executionPerformed).toBe(false);
    expect(go.decision.readyForNextGatedStep).toBe(true);
    expect(go.proposal.status).toBe("APPROVED");

    const { proposal: p2 } = await seedProposal(projectId);
    const noGo = await recordF2Decision({
      proposalId: p2.proposalId,
      projectId,
      decisionKind: "NO_GO",
      currentContext: p2.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(noGo.ok).toBe(true);
    if (!noGo.ok) return;
    expect(noGo.proposal.status).toBe("REFUSED");
    expect(noGo.decision.executionPerformed).toBe(false);

    const { proposal: p3 } = await seedProposal(projectId);
    const amend = await recordF2Decision({
      proposalId: p3.proposalId,
      projectId,
      decisionKind: "AMEND",
      currentContext: p3.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(amend.ok).toBe(true);
    if (!amend.ok) return;
    expect(amend.proposal.status).toBe("AMENDMENT_REQUIRED");
  });

  it("AC-F2-19 stale mismatch refuses GO", async () => {
    const projectId = (globalThis as { __f2ProjectId?: string }).__f2ProjectId!;
    const { proposal, runtime } = await seedProposal(projectId);
    const stale = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: {
        ...proposal.contextSnapshot,
        doctrineDigest: "digest:changed",
      },
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) return;
    expect(stale.code).toBe("STALE");
    expect(getProposal(proposal.proposalId)?.status).toBe("STALE");
  });

  it("AC-F2-26 missing proposal after reset has no durable authority claim", () => {
    resetF2ProposalStoreForTests();
    expect(getProposal("prop:missing")).toBeNull();
  });
});

```

### 6.4 DIFF vs PACKAGE: `f2.orchestrate.test.ts`
```diff
--- package/f2.orchestrate.test.ts
+++ correction/f2.orchestrate.test.ts
@@ -177,6 +177,8 @@

   it("fail-closed on invalid JSON / unknown cycle / incomplete signals", () => {
     expect(validateIntentAnalysisPayload(null).intentClass).toBe("ambiguous");
+    expect(validateIntentAnalysisPayload(null).parseOk).toBe(false);
+    expect(validateIntentAnalysisPayload("not-json").parseOk).toBe(false);
     expect(
       validateIntentAnalysisPayload({
         intentClass: "actionable",
@@ -198,6 +200,135 @@
         signals: { structuralChange: true },
       }).parseOk,
     ).toBe(false);
+    expect(
+      validateIntentAnalysisPayload({
+        intentClass: "actionable",
+        candidateCycleTypeId: "cyc:delivery",
+        signals: null,
+      }).parseOk,
+    ).toBe(false);
+  });
+
+  it("structured actionable / structuring payloads parse successfully", () => {
+    const actionable = validateIntentAnalysisPayload({
+      intentClass: "actionable",
+      candidateCycleTypeId: "cyc:delivery",
+      signals: {
+        structuralChange: false,
+        securityImpact: false,
+        architectureImpact: false,
+        dataImpact: false,
+        irreversible: false,
+        lowRiskBounded: true,
+      },
+      objective: "Préparer livraison",
+      scope: "borné",
+      rephrasedRequest: "Proposition delivery",
+      outOfScope: ["exécution"],
+      risks: [],
+      reservations: [],
+      stopConditions: ["AUCUNE EXÉCUTION"],
+      activatedBlocks: ["qualification"],
+      expectedOutcome: "proposition",
+      criticalJustification: null,
+      requestedOperation: null,
+    });
+    expect(actionable.parseOk).toBe(true);
+    expect(actionable.intentClass).toBe("actionable");
+    expect(actionable.candidateCycleTypeId).toBe("cyc:delivery");
+    expect(actionable.signals?.lowRiskBounded).toBe(true);
+
+    const structuring = validateIntentAnalysisPayload({
+      intentClass: "actionable",
+      candidateCycleTypeId: "cyc:functional-architecture",
+      signals: {
+        structuralChange: true,
+        securityImpact: false,
+        architectureImpact: true,
+        dataImpact: false,
+        irreversible: false,
+        lowRiskBounded: false,
+      },
+      objective: "Architecture",
+      scope: "structurant",
+      rephrasedRequest: "Changement architecture",
+      outOfScope: ["PR"],
+      risks: ["impact"],
+      reservations: [],
+      stopConditions: [],
+      activatedBlocks: ["gate"],
+      expectedOutcome: "gate",
+      criticalJustification: "justifié",
+      requestedOperation: "architecture change",
+    });
+    expect(structuring.parseOk).toBe(true);
+    expect(structuring.candidateCycleTypeId).toBe("cyc:functional-architecture");
+  });
+
+  it("AC-F2 structured path: markers + no openai import + no profile/decision/execution leakage", async () => {
+    const fs = await import("node:fs");
+    const path = await import("node:path");
+    const f2Dir = path.join(process.cwd(), "features/project-assistant/f2");
+    for (const file of fs.readdirSync(f2Dir)) {
+      if (!file.endsWith(".ts")) continue;
+      const src = fs.readFileSync(path.join(f2Dir, file), "utf8");
+      expect(src).not.toMatch(/from\s+["']openai["']/);
+      expect(src).not.toMatch(/require\(["']openai["']\)/);
+    }
+
+    const actionable = await orchestrateAssistantSend({
+      projectId: "prj:f2-demo",
+      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
+    });
+    expect(actionable.ok).toBe(true);
+    if (!actionable.ok) return;
+    expect(actionable.presentation).toBe("test_provider");
+    expect(actionable.model).toBe("fake-test-model");
+    expect(actionable.f2?.qualification?.isMorrisDecision).toBe(false);
+    expect(actionable.f2?.qualification?.recommendedProfile).toBeTruthy();
+    // Profile comes from CKC qualify — never from raw model intent JSON fields.
+    expect(actionable.f2?.qualification).not.toHaveProperty("profile");
+    expect(actionable.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
+    expect(actionable.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");
+    expect(actionable.f2?.proposal?.executionForbidden).toBe(true);
+
+    const structuring = await orchestrateAssistantSend({
+      projectId: "prj:f2-demo",
+      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
+    });
+    expect(structuring.ok).toBe(true);
+    if (!structuring.ok) return;
+    expect(structuring.f2?.proposal).toBeTruthy();
+    expect(structuring.f2?.qualification?.isMorrisDecision).toBe(false);
+  });
+
+  it("completeStructured is used for F2 analysis and preserves complete() F1 compatibility", async () => {
+    const { FakeConversationProvider } = await import(
+      "@/lib/platform/ai/fakeProvider"
+    );
+    const provider = new FakeConversationProvider();
+    const structuredSpy = vi.spyOn(provider, "completeStructured");
+    const completeSpy = vi.spyOn(provider, "complete");
+    setConversationProviderForTests(provider);
+
+    const f2 = await orchestrateAssistantSend({
+      projectId: "prj:f2-demo",
+      content: "Résume __F2_INFORMATIVE__",
+    });
+    expect(f2.ok).toBe(true);
+    expect(structuredSpy).toHaveBeenCalled();
+    const structuredArg = structuredSpy.mock.calls[0]?.[0];
+    expect(structuredArg?.schemaName).toBe("f2_intent_analysis");
+    expect(structuredArg?.jsonSchema).toMatchObject({
+      type: "object",
+      additionalProperties: false,
+    });
+    expect(f2.ok && f2.model).toBe("fake-test-model");
+
+    // Legacy complete() path remains available for non-F2 / F1-style text.
+    const plain = await provider.complete([{ role: "user", content: "ping" }]);
+    expect(plain.text).toContain("TEST/FAKE");
+    expect(completeSpy).toHaveBeenCalled();
   });

   it("AC-F2-22/23 qualify uses catalog + isMorrisDecision false", async () => {

```

### 6.5 `git diff -- lib/platform/ai/types.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/types.ts b/projects/sfia-studio/app/lib/platform/ai/types.ts
index 1d15c86..6a8811d 100644
--- a/projects/sfia-studio/app/lib/platform/ai/types.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/types.ts
@@ -62,6 +62,15 @@ export interface ConversationProvider {
     items: ProviderInputItem[];
     tools: ToolDefinition[];
   }): Promise<ProviderRoundResult>;
+  /**
+   * Optional schema-native structured completion (Responses API json_schema).
+   * Domain callers must still validate parsed payloads fail-closed.
+   */
+  completeStructured?(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult>;
 }

 export function messagesToInputItems(

```

### 6.6 `git diff -- lib/platform/ai/openaiProvider.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts b/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
index 41ca260..0facb9c 100644
--- a/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
@@ -44,6 +44,63 @@ export class OpenAIConversationProvider implements ConversationProvider {
     return { text: round.text, usage: round.usage };
   }

+  async completeStructured(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult> {
+    try {
+      const response = await this.client.responses.create({
+        model: this.model,
+        input: input.messages.map((m) => ({
+          role: m.role,
+          content: m.content,
+        })) as OpenAI.Responses.ResponseInput,
+        text: {
+          format: {
+            type: "json_schema",
+            name: input.schemaName,
+            schema: input.jsonSchema,
+            strict: true,
+          },
+        },
+      });
+
+      const usage = response.usage;
+      const inputTokens = usage?.input_tokens ?? null;
+      const outputTokens = usage?.output_tokens ?? null;
+      const totalTokens =
+        usage?.total_tokens ??
+        (inputTokens != null && outputTokens != null
+          ? inputTokens + outputTokens
+          : null);
+      const text = (response.output_text ?? "").trim();
+      if (!text) {
+        throw new TechnicalError(
+          "PROVIDER",
+          "Réponse fournisseur vide. Aucun tour assistant live n’a été créé.",
+        );
+      }
+      return {
+        text,
+        usage: {
+          inputTokens,
+          outputTokens,
+          totalTokens,
+          model: response.model ?? this.model,
+          providerResponseId: response.id ?? null,
+        },
+      };
+    } catch (error) {
+      if (error instanceof TechnicalError) throw error;
+      throw new TechnicalError(
+        "PROVIDER",
+        "Échec de l’appel fournisseur GPT. Réessayez manuellement.",
+        error,
+      );
+    }
+  }
+
   async completeRound(input: {
     items: ProviderInputItem[];
     tools: ToolDefinition[];

```

### 6.7 `fakeProvider.ts` — CORRECTION-ONLY hunk (`completeStructured`)
Package F2 already added `__F2_*` marker scripts in `complete()`. Correction adds only:

```diff
--- package/fakeProvider.ts (F2 total, no completeStructured)
+++ correction/fakeProvider.ts
@@
+  async completeStructured(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult> {
+    void input.schemaName;
+    void input.jsonSchema;
+    // Reuse F2 marker / analysis scripted JSON from complete().
+    return this.complete(input.messages);
+  }

```

For completeness, full `git diff -- fakeProvider.ts` vs HEAD (PACKAGE F2 markers + correction) :

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index e4357ae..1031f79 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -34,6 +34,17 @@ export class FakeConversationProvider implements ConversationProvider {
     this.toolScript = options?.toolScript;
   }

+  async completeStructured(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult> {
+    void input.schemaName;
+    void input.jsonSchema;
+    // Reuse F2 marker / analysis scripted JSON from complete().
+    return this.complete(input.messages);
+  }
+
   async complete(
     messages: ProviderChatMessage[],
   ): Promise<ProviderCompletionResult> {
@@ -47,6 +58,227 @@ export class FakeConversationProvider implements ConversationProvider {
     if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
       throw new Error("FAKE_PROVIDER_ERROR");
     }
+
+    // F2 deterministic structured intent JSON (TEST/FAKE only)
+    if (lastUser?.content.includes("__F2_INFORMATIVE__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "informative",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: "Résumer le projet",
+          scope: null,
+          rephrasedRequest: "Résumer l'objectif du projet",
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_ACTIONABLE__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Préparer la prochaine étape fonctionnelle",
+          scope: "Proposition bornée sans exécution",
+          rephrasedRequest: "Préparer une proposition de livraison bornée",
+          outOfScope: ["Cursor", "Git write", "PR"],
+          risks: ["Confusion reco/décision"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition"],
+          expectedOutcome: "Proposition structurée prête pour revue",
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_STRUCTURING__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:functional-architecture",
+          signals: {
+            structuralChange: true,
+            securityImpact: false,
+            architectureImpact: true,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          rephrasedRequest: "Préparer une proposition d'architecture",
+          outOfScope: ["Exécution", "PR", "merge"],
+          risks: ["Impact architecture"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Gate Morris requis",
+          criticalJustification: "Besoin métier structurant documenté",
+          requestedOperation: "architecture change",
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_AMBIGUOUS__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "ambiguous",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: null,
+          scope: null,
+          rephrasedRequest: "Fais le nécessaire",
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_EXECUTION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "execution_request",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: true,
+            securityImpact: false,
+            architectureImpact: true,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective: "Lancer Cursor et créer une PR",
+          scope: "Exécution produit demandée — refusée en F2",
+          rephrasedRequest: "Demande d'exécution Cursor / PR",
+          outOfScope: ["Exécution réelle"],
+          risks: ["Exécution hors périmètre F2"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Proposition sans exécution",
+          criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
+          requestedOperation: "cursor create pr",
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:security",
+          signals: {
+            structuralChange: true,
+            securityImpact: true,
+            architectureImpact: true,
+            dataImpact: true,
+            irreversible: true,
+            lowRiskBounded: false,
+          },
+          objective: "Changer l'architecture sécurité",
+          scope: "Impact structurant sécurité",
+          rephrasedRequest: "Modifier architecture sécurité",
+          outOfScope: ["Exécution"],
+          risks: ["Impact critique"],
+          reservations: [],
+          stopConditions: ["Justification Critical obligatoire"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: "architecture security change",
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    // Default unmarked analysis prompts (system asks for JSON): informative fail-open for F1
+    if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "informative",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: null,
+          scope: null,
+          rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+
     const historyLen = messages.length;
     const text =
       this.scripted?.[this.callCount - 1] ??

```

### 6.8 `git diff -- __tests__/ops1/openai-provider.test.ts`
```diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts b/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
index e48ed69..4786a8a 100644
--- a/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
+++ b/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
@@ -59,4 +59,58 @@ describe("OpenAIConversationProvider mapping", () => {
       provider.complete([{ role: "user", content: "x" }]),
     ).rejects.toBeInstanceOf(TechnicalError);
   });
+
+  it("completeStructured passes Responses text.format json_schema strict", async () => {
+    createMock.mockResolvedValue({
+      id: "resp_structured",
+      model: "gpt-test",
+      output_text: '{"intentClass":"informative"}',
+      usage: { input_tokens: 2, output_tokens: 3, total_tokens: 5 },
+    });
+    const { OpenAIConversationProvider } = await import(
+      "@/lib/platform/ai/openaiProvider"
+    );
+    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
+    const schema = {
+      type: "object",
+      additionalProperties: false,
+      properties: { intentClass: { type: "string" } },
+      required: ["intentClass"],
+    };
+    const result = await provider.completeStructured({
+      messages: [
+        { role: "system", content: "sys" },
+        { role: "user", content: "ask" },
+      ],
+      schemaName: "f2_intent_analysis",
+      jsonSchema: schema,
+    });
+    expect(result.text).toContain("informative");
+    expect(result.usage).toEqual({
+      inputTokens: 2,
+      outputTokens: 3,
+      totalTokens: 5,
+      model: "gpt-test",
+      providerResponseId: "resp_structured",
+    });
+    expect(createMock).toHaveBeenCalledWith(
+      expect.objectContaining({
+        model: "gpt-test",
+        text: {
+          format: {
+            type: "json_schema",
+            name: "f2_intent_analysis",
+            schema,
+            strict: true,
+          },
+        },
+      }),
+    );
+    const payload = createMock.mock.calls[0][0];
+    expect(payload.input).toEqual([
+      { role: "system", content: "sys" },
+      { role: "user", content: "ask" },
+    ]);
+    expect(payload.tools).toBeUndefined();
+  });
 });

```

### 6.9 `git diff -- __tests__/platform/platform-ai.test.ts`
```diff
diff --git a/projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts b/projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
index f3e02f4..07e01dd 100644
--- a/projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/platform-ai.test.ts
@@ -16,6 +16,22 @@ describe("platform AI + security foundations", () => {
     expect(result.usage.model).toBe("fake-test-model");
   });

+  it("completeStructured reuses F2 markers and reports model telemetry", async () => {
+    const provider = new FakeConversationProvider();
+    const result = await provider.completeStructured!({
+      messages: [
+        { role: "system", content: "SFIA Studio F2" },
+        { role: "user", content: "go __F2_ACTIONABLE__" },
+      ],
+      schemaName: "f2_intent_analysis",
+      jsonSchema: { type: "object" },
+    });
+    expect(result.text).toContain("TEST/FAKE");
+    expect(result.text).toContain('"intentClass":"actionable"');
+    expect(result.usage.model).toBe("fake-test-model");
+    expect(result.usage.providerResponseId).toMatch(/^fake-resp-/);
+  });
+
   it("messagesToInputItems preserves order", () => {
     const items = messagesToInputItems([
       { role: "system", content: "s" },

```

---

## 7. Validation server-side + anti-heuristics (explicit)

| Control | Status |
|---|---|
| `validateIntentAnalysisPayload` still fail-closed | **PRESERVED** |
| Unknown cycle → parseOk false | **PRESERVED** |
| Actionable/execution_request without full 6 signals → fail-closed | **PRESERVED** |
| No default `candidateCycleTypeId=delivery` | **CONFIRMED ABSENT** |
| No missing-signal→false autofill | **CONFIRMED ABSENT** |
| No regex microservices/reporting routing | **CONFIRMED ABSENT** |
| No second provider / no F2→openai SDK import | **CONFIRMED** |
| Structured Output ≠ automatic trust (domain validation still runs) | **CONFIRMED** |

---

## 8. Tests + fixture + live + regression

Evidence from correction implementation agent (same worktree):

| Check | Result |
|---|---|
| Targeted `__tests__/project-assistant` | **27 passed** |
| platform AI + openai provider | **9 passed** |
| Broad vitest excl. `__tests__/oa/finops/postgres/**` | **157 files / 1605 tests passed** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| `git diff --check` | **PASS** |
| Fixture métier rerun | **9/9 PASS** |
| Live natural-language recette | **4/4 PASS** (`liveCallCount=4`, model `gpt-5.6-sol`) |

FinOps postgres suite excluded (ECONNREFUSED environmental reserve — non-blocking; not reopened).

### Fixture rerun summary (`cat fixture-rerun-results.json`)
```json
{
  "timestamp": {
    "utc": "2026-08-10T20:34:39.603Z",
    "cest": "lundi 10 août 2026 à 22:34:39 UTC+2",
    "epochMs": 1786394079603
  },
  "port": 3021,
  "baseUrl": "http://localhost:3021",
  "fakeProvider": true,
  "liveOpenAiCalls": 0,
  "branch": "delivery/sfia-studio-f2-qualification-proposal-gate",
  "commit": "1847fc61f384e13b15651ed914286fe87ac7133c",
  "scenarios": [
    {
      "id": "R1",
      "title": "Ouverture Workspace / confiance provider",
      "ok": true,
      "expected": "MODE À CONFIRMER avant 1ère réponse ; AUCUNE EXÉCUTION visible",
      "observed": "modePill=\"MODE À CONFIRMER Lecture seule AUCUNE EXÉCUTION\"",
      "screenshot": "screenshots/01-ouverture-mode-a-confirmer.png"
    },
    {
      "id": "R2",
      "title": "Question informative (reste F1)",
      "ok": true,
      "expected": "Réponse conversationnelle ; proposalCount=0",
      "observed": "proposalCount=0",
      "screenshot": "screenshots/02-informative-reste-f1.png"
    },
    {
      "id": "R3",
      "title": "Intention actionnable → qualification + proposition",
      "ok": true,
      "expected": "RECOMMANDATION + cycle/profil/rationale + PROPOSITION structurée",
      "observed": "cycle=true profile=true rationale=true gateAlready=0",
      "screenshot": "screenshots/03-actionnable-qualification-proposition.png"
    },
    {
      "id": "R4",
      "title": "Gate Morris / décision requise",
      "ok": true,
      "expected": "DÉCISION REQUISE + boutons GO/NO-GO + AUCUNE EXÉCUTION",
      "observed": "gate=\"DÉCISION REQUISE\" buttons GO=true NO_GO=true noExec=true structuring=true",
      "screenshot": "screenshots/04-gate-decision-requise.png"
    },
    {
      "id": "R5",
      "title": "Décision humaine GO",
      "ok": true,
      "expected": "DÉCISION PRISE / kind=GO / READY FOR NEXT GATED STEP / no EXECUTING",
      "observed": "kind=GO ready=true noExecuting=true",
      "screenshot": "screenshots/05-go-decision-capturee.png"
    },
    {
      "id": "R6",
      "title": "Demande d'exécution bornée (Cursor/PR)",
      "ok": true,
      "expected": "Exécution bloquée / pas de CTA Cursor / AUCUNE EXÉCUTION",
      "observed": "noExecCount=1 noCursorMarker=true cursorCtaCount=0",
      "screenshot": "screenshots/06-demande-execution-bornee.png"
    },
    {
      "id": "R7",
      "title": "Demande ambiguë",
      "ok": true,
      "expected": "Clarification ; pas de proposition prématurée",
      "observed": "clarification=true proposalCount=0",
      "screenshot": "screenshots/07-ambigu-clarification.png"
    },
    {
      "id": "R8",
      "title": "Critical sans justification (blocage)",
      "ok": true,
      "expected": "Bloqué / clarification Critical ; pas de GO Critical auto",
      "observed": "criticalMsg present; proposalCount=0 gateCount=0",
      "screenshot": "screenshots/08-critical-sans-justification.png"
    },
    {
      "id": "R9",
      "title": "Décision humaine NO-GO (optionnel)",
      "ok": true,
      "expected": "NO_GO capturé ; AUCUNE EXÉCUTION",
      "observed": "kind=NO_GO noExec=true",
      "screenshot": "screenshots/09-nogo-bloque.png"
    }
  ],
  "summary": {
    "passed": 9,
    "failed": 0,
    "total": 9,
    "allPassed": true
  }
}
```

### Live post-fix summary (`cat live-results.json`)
```json
{
  "timestampCest": "lundi 10 août 2026 à 22:36:55 UTC+2",
  "timestampUtc": "2026-08-10T20:36:55.041Z",
  "branch": "delivery/sfia-studio-f2-qualification-proposal-gate",
  "HEAD": "1847fc61f384e13b15651ed914286fe87ac7133c",
  "originMain": "1847fc61f384e13b15651ed914286fe87ac7133c",
  "provider": "openai-live",
  "model": "gpt-5.6-sol",
  "liveCallCount": 4,
  "port": 3021,
  "baseUrl": "http://localhost:3021",
  "fakeProvider": false,
  "modePillObserved": "Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION",
  "port3020ListeningBefore": false,
  "port3020ListeningAfter": false,
  "port3021ListeningBefore": true,
  "scenarios": [
    {
      "scenario": "L1",
      "message": "Résume-moi l'objectif du projet.",
      "expected": "Mode live · gpt-5.6-sol; F1 contextual reply; no forced F2 proposal; no incomplete-JSON clarification",
      "observed": "{\"mode\":\"Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION\",\"proposalCount\":0,\"qualCount\":0,\"cycle\":false,\"profile\":false,\"gateVisible\":false,\"decideCta\":false,\"decisionRequise\":false,\"incompleteJsonClarification\":false,\"aucuneExec\":true,\"noCursorCta\":true,\"replyLen\":332,\"replyPreview\":\"ASSISTANT\\n\\nL’objectif de **F2 Live Corr L1 (F2L1C)** est de **valider, dans une recette L1 isolée, le parcours informatif F1 en conditions live avec OpenAI, sans imposer de proposition à l’utilisateur**.\\n\\nLe projet repose sur une **architecture monolithique** et prévoit de **renforcer le reporting**. Sa criticité est **standard**.\"}",
      "classificationObserved": "informative-or-bounded",
      "cycleObserved": null,
      "profileObserved": null,
      "gateObserved": null,
      "pass": true,
      "screenshot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-live-correction/screenshots/01-live-informative-f1.png",
      "parseValidationFailureCode": null,
      "modePill": "Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION",
      "replyPreview": "ASSISTANT\n\nL’objectif de **F2 Live Corr L1 (F2L1C)** est de **valider, dans une recette L1 isolée, le parcours informatif F1 en conditions live avec OpenAI, sans imposer de proposition à l’utilisateur**.\n\nLe projet repose sur une **architecture monolithique** et prévoit de **renforcer le reporting**. Sa criticité est **standard**."
    },
    {
      "scenario": "L2",
      "message": "Prépare-moi la prochaine étape pour ajouter un module de reporting financier.",
      "expected": "proposal + qualification (cycle/profile) visible; NOT clarification for incomplete JSON; AUCUNE EXÉCUTION",
      "observed": "{\"mode\":\"Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION\",\"proposalCount\":1,\"qualCount\":1,\"cycle\":true,\"profile\":true,\"gateVisible\":true,\"decideCta\":true,\"decisionRequise\":true,\"incompleteJsonClarification\":false,\"aucuneExec\":true,\"noCursorCta\":true,\"replyLen\":229,\"replyPreview\":\"ASSISTANT\\n\\n[LIVE] Qualification SFIA et proposition structurée générées. Cycle: cyc:framing (Cadrage). Profil recommandé: Critical. RECOMMANDATION — PAS UNE DÉCISION MORRIS DÉCISION REQUISE — gate Morris ouvert. AUCUNE EXÉCUTION.\"}",
      "classificationObserved": "structuring-gate",
      "cycleObserved": "cyc:framing — Cadrage",
      "profileObserved": "Critical",
      "gateObserved": "DÉCISION REQUISE",
      "pass": true,
      "screenshot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-live-correction/screenshots/02-live-actionable-proposal.png",
      "parseValidationFailureCode": null,
      "modePill": "Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION",
      "replyPreview": "ASSISTANT\n\n[LIVE] Qualification SFIA et proposition structurée générées. Cycle: cyc:framing (Cadrage). Profil recommandé: Critical. RECOMMANDATION — PAS UNE DÉCISION MORRIS DÉCISION REQUISE — gate Morris ouvert. AUCUNE EXÉCUTION."
    },
    {
      "scenario": "L3",
      "message": "Je veux remplacer l'architecture actuelle par une architecture microservices.",
      "expected": "proposal + DÉCISION REQUISE / gate CTAs; NOT incomplete JSON clarification; AUCUNE EXÉCUTION",
      "observed": "{\"mode\":\"Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION\",\"proposalCount\":1,\"qualCount\":1,\"cycle\":true,\"profile\":true,\"gateVisible\":true,\"decideCta\":true,\"decisionRequise\":true,\"incompleteJsonClarification\":false,\"aucuneExec\":true,\"noCursorCta\":true,\"replyLen\":259,\"replyPreview\":\"ASSISTANT\\n\\n[LIVE] Qualification SFIA et proposition structurée générées. Cycle: cyc:technical-architecture (Architecture technique). Profil recommandé: Critical. RECOMMANDATION — PAS UNE DÉCISION MORRIS DÉCISION REQUISE — gate Morris ouvert. AUCUNE EXÉCUTION.\"}",
      "classificationObserved": "structuring-gate",
      "cycleObserved": "cyc:technical-architecture — Architecture technique",
      "profileObserved": "Critical",
      "gateObserved": "DÉCISION REQUISE",
      "pass": true,
      "screenshot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-live-correction/screenshots/03-live-structuring-gate.png",
      "parseValidationFailureCode": null,
      "modePill": "Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION",
      "replyPreview": "ASSISTANT\n\n[LIVE] Qualification SFIA et proposition structurée générées. Cycle: cyc:technical-architecture (Architecture technique). Profil recommandé: Critical. RECOMMANDATION — PAS UNE DÉCISION MORRIS DÉCISION REQUISE — gate Morris ouvert. AUCUNE EXÉCUTION."
    },
    {
      "scenario": "L4",
      "message": "Lance Cursor et fais les modifications.",
      "expected": "no execution; no Cursor CTA; no EXECUTING; may qualify/clarify but remain bounded",
      "observed": "{\"mode\":\"Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION\",\"proposalCount\":1,\"qualCount\":1,\"cycle\":true,\"profile\":true,\"gateVisible\":true,\"decideCta\":true,\"decisionRequise\":true,\"incompleteJsonClarification\":false,\"aucuneExec\":true,\"noCursorCta\":true,\"replyLen\":311,\"replyPreview\":\"ASSISTANT\\n\\n[LIVE] Qualification SFIA et proposition structurée générées. Cycle: cyc:delivery (Delivery / implémentation). Profil recommandé: Critical. RECOMMANDATION — PAS UNE DÉCISION MORRIS DÉCISION REQUISE — gate Morris ouvert. Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles).\"}",
      "classificationObserved": "structuring-gate",
      "cycleObserved": "cyc:delivery — Delivery / implémentation",
      "profileObserved": "Critical",
      "gateObserved": "DÉCISION REQUISE",
      "pass": true,
      "screenshot": "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-live-correction/screenshots/04-live-execution-bounded.png",
      "parseValidationFailureCode": null,
      "modePill": "Mode live · gpt-5.6-sol Lecture seule AUCUNE EXÉCUTION",
      "replyPreview": "ASSISTANT\n\n[LIVE] Qualification SFIA et proposition structurée générées. Cycle: cyc:delivery (Delivery / implémentation). Profil recommandé: Critical. RECOMMANDATION — PAS UNE DÉCISION MORRIS DÉCISION REQUISE — gate Morris ouvert. Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
    }
  ],
  "executionCount": 0,
  "cursorCount": 0,
  "gitWriteCount": 0,
  "summary": {
    "passCount": 4,
    "failCount": 0,
    "allPassed": true
  },
  "notes": "LIVE OpenAI correction recette — natural language only, fresh project per scenario.",
  "port3020Untouched": true
}
```

### Live post-fix table
| ID | Result | Classification / notes |
|---|---|---|
| L1 | **PASS** | informative-or-bounded; proposalCount=0 |
| L2 | **PASS** | structuring-gate; cycle/profile; DÉCISION REQUISE; not incomplete-JSON clarification |
| L3 | **PASS** | structuring-gate; architecture cycle; DÉCISION REQUISE / gate CTAs |
| L4 | **PASS** | bounded; AUCUNE EXÉCUTION; no Cursor CTA |

### Screenshot paths (post-fix)
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-live-correction/screenshots/01-live-informative-f1.png`
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-live-correction/screenshots/02-live-actionable-proposal.png`
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-live-correction/screenshots/03-live-structuring-gate.png`
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-live-correction/screenshots/04-live-execution-bounded.png`

---

## 9. Mutation counters

| Mutation | Count |
|---|---:|
| live OpenAI calls (post-fix recette) | **4** (bounded, declared) |
| Cursor product actions | **0** |
| Git write (product) | **0** |
| ExecutionRun | **0** |
| Project commits | **0** |
| Project push | **0** |
| Project PR | **0** |
| Project merge | **0** |
| FinOps lot mutations | **0** |
| OPS1 product mutations | **0** |
| Handoff publish (sfia/review-handoff only) | pending this pack |

HEAD remains `1847fc61f384e13b15651ed914286fe87ac7133c`.

---

## 10. Réserves

| ID | Topic | Status |
|---|---|---|
| **R-FinOps-PG** | FinOps postgres suite ECONNREFUSED without local DB | **NON-BLOCKING** — excluded |
| **R-Process-Local** | Proposal/decision store process-local / non-durable | **ACCEPTED LIMITATION** (design) — unchanged by correction |
| **R-Live-3020** | Shared live server on 3020 | **PRESERVED / untouched** — correction used **3021** |

No essential AC FAIL introduced by correction. Live L2/L3 root cause closed.

---

## 11. Anti-claims

- Does **not** claim F3 / Cursor execution / ExecutionRun / selectedAgentRef
- Does **not** claim durable persistence / IAM / UX Studio cleanup / OPS1 deleted
- Does **not** claim product-ready / production-ready global
- Does **not** claim validator was relaxed to pass L2/L3
- Does **not** claim heuristics / regex routing / invented cycle defaults
- Does **not** claim a second provider was introduced
- Does **not** claim project commit / push / PR / merge
- Does **not** consume `GO COMMIT — F2 …` (candidate only)
- Claims only: **live structured intent analysis reliability** on target natural-language scenarios (4/4) with fixture 9/9 preserved

---

## 12. Do Not Build (verified absent this correction)

Nouveau moteur IA · second provider · heuristique routing métier · classifier parallèle · second Decision Engine · Cursor · ExecutionRun · Git/GitHub write produit · persistence · IAM · F3 · redesign UI · suppression OPS1 · package upgrade · méthode SFIA.

---

## 13. Final Git Truth (pre-handoff publish)

| Field | Value |
|---|---|
| branch | `delivery/sfia-studio-f2-qualification-proposal-gate` |
| HEAD | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| origin/main | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| project commit | **NONE** |
| Synthesis-only | **NO** |
| Role | Cycle 8 — Delivery corrective F2 Live Intent Analysis |
| pré-fix live | **2/4** |
| post-fix live | **4/4** |
| fixture | **9/9** |

---

## 14. Gate suivant

```
GO COMMIT — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO
```

**NOT consumed.** Authorizes only exact validated project commit after ChatGPT/Morris — no push/PR/merge in that gate unless separately authorized.

---

## Publisher note

Review Handoff L3: publish this file only to `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Commit message: `docs(review-handoff): publish F2 live intent correction`
No project commit/push.
