# Review Pack FULL — P6 Nora P0 Product Status Honesty Correction 01

at: 2026-10-12T04:05:00Z
local: 2026-10-12 06:05:00 CEST (Europe/Paris)
level: FULL
profile: CRITICAL
cycleType: 8 — Delivery / implémentation
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
increment: P0 — PRODUCT STATUS HONESTY CORRECTION 01
macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
incident: P6-MIN-09 — Guided Document Review interrupted by maxTurns
GO Morris: P0 DELIVERY UNIQUEMENT — accordé 2026-10-12
mode: IMPLEMENTATION + DETERMINISTIC VALIDATION — ZERO REAL

---

## 1. Local Git Truth Check (initial / final-pre-handoff)

| Check | Result |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| remote | origin https://github.com/mcleland147/sfia-workspace.git |
| expected repo | mcleland147/sfia-workspace — MATCH |
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| left-right origin/main...HEAD | `0	0` |
| expected main tip (ChatGPT) | f31bb8f610802c102edbe68889fb8ecf0339ec28 — MATCH |
| staged | none (`git diff --cached --name-status` empty) |
| prior handoff tip (not superseded at start) | da18768c / blob 70706a41 — remediation scoping |
| untracked preserved | `p6.nora.maxTurns.documentary.d0.test.ts` (NOT overwritten, NOT committed) |

```
git status --short:
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts

git diff --name-status:
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts

git diff --stat:
.tmp-sfia-review/chatgpt-review.md                 | 169 +--------------------
 .../project-assistant/ProjectAssistantPanel.tsx    |  29 +++-
 .../features/project-assistant/orchestrateTurn.ts  |  41 ++++-
 .../app/features/project-assistant/types.ts        |  14 +-
 4 files changed, 75 insertions(+), 178 deletions(-)

git diff --cached --name-status:
(none)
```

STOP Git: not triggered. No reset/clean/stash/rebase/destructive checkout.

---

## 2. Convergence / Sources / Capacité v3

READ ONLY (not modified):

- Build Doctrine, Roadmap, product-completion cadrage
- v3 framing 30 / 33 / 34
- CKC 08 delivery / 09 QA
- Product Simplification 01 / 04 / 07
- Nora trajectory 08 (OpenAI-native-first)
- External SFIA process templates (v2.6 process only — NOT Studio runtime doctrine)

| Item | Value |
|---|---|
| Capacité v3 served | Fiabilité cognitive Nora — honesté des états / pas d'invention de réussite |
| Milestone | P6 — GLOBAL INTEGRATED PRODUCT QA (IN PROGRESS) |
| Runtime v3 | NON ADOPTED |
| Roadmap link | P6-MIN-09 → maxTurns qualification → scoping P0/P1/P2 → GO Morris P0 → this delivery → ChatGPT review → reprise P6-MIN-09 |
| Next capability | P1 Adaptive Runner Budget (hors scope) ; P2 Controlled Continuation conditionnel (hors scope) |

KEEP (unchanged): OpenAI Agents Runner, runNoraAgentsTurn, runNoraCognitiveTurn, ProductSqliteSession, Memory B, Cycle Journal, campaignBudget, turnBudget, CognitiveWorkloadPolicy, CognitiveRoutingPolicy, existing Product guards.

ADAPT/COMPLETE P0: limitReached → Product status + DTO + durable-effect suppress + Pilote UX.

---

## 3. Diagnostic avant correction (P0 findings)

Chaîne tracée:

```
runNoraAgentsTurn (limitReached=true on maxTurns / tool-round cap / campaign)
  → runNoraCognitiveTurn (propagates limitReached)
    → orchestrateProjectAssistantTurn
      BEFORE: ignored limitReached for status; forced status:"ok"
      → ProjectAssistantSendSuccess (ok:true, status:"ok") — no limitReached field
        → sendProjectAssistantTurn / projectAssistantSendAction (passthrough)
          → ProjectAssistantPanel — presented as completed ANSWERED success
```

Validated defects (from prior scoping handoff da18768c):

1. `limitReached` reached cognitive result but NOT Product status calculation.
2. `ProjectAssistantSendSuccess` did not expose `limitReached`.
3. `orchestrateTurn` could return `ok:true` + `status:"ok"` for interrupted analysis.
4. Durable effects (LR / ACW / reservation / journalDelta-as-complete) were not gated on execution limit (only Cognitive STOP).

Distinction required (contract):

| Signal | Meaning |
|---|---|
| Transport ok | Request/response succeeded |
| Model executed | Provider ran |
| limitReached | Execution budget exhausted |
| Analysis complete | NOT implied by limitReached |
| Cognitive STOP | MW3 business stop ≠ budget |
| Provider error / cancel | Distinct existing paths |

---

## 4. Contrat Product retenu

Minimal compatible extension of existing success DTO:

```ts
status: "ok" | "cognitive_stop" | "incomplete"
limitReached?: boolean
```

Precedence: `cognitive_stop` > `incomplete` > `ok`.

Pilote notice constant: `EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE`.

Why not invent a new error category: `ok:true` remains (transport + recoverable partial text); status discloses non-completion. Matches Cognitive STOP pattern (`ok:true` + non-ok semantic status) already consumed by Panel.

Compatibility: `AssistantTurnStatus` already had room; success union narrowed previously to ok|cognitive_stop — extended with incomplete. Panel is primary chat-first consumer; send path passthrough unchanged structurally.

---

## 5. Before / After

| Aspect | Before | After |
|---|---|---|
| status when limitReached | `"ok"` | `"incomplete"` |
| DTO limitReached | absent | `true` |
| ephemeralNotice | no execution-limit notice | includes EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE |
| LR materialize | possible if structured candidate | suppressed (`suppressCompleteCognitiveEffects`) |
| ACW / reservation / journalDelta complete | possible | blocked when `executionLimitReached` |
| UI | treated as full answer | orange « Analyse inachevée » + `data-execution-incomplete=true` |
| Cognitive STOP | ok | unchanged; outranks incomplete |
| limitReached=false | ok | preserved |
| Budgets / Runner ceilings | n/a | UNCHANGED |
| RunState continuation | n/a | NOT implemented (P2) |

---

## 6. Fichiers modifiés / créés

### Modified (Product authorized)

1. `projects/sfia-studio/app/features/project-assistant/types.ts`
2. `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
3. `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`

### Created (tests)

4. `projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts`
5. `projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx`

### Preserved untracked (NOT modified this cycle)

6. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts`

### Explicitly NOT modified

Budgets, Runner ceilings, RunState, Memory B stores, doctrine/roadmap/v3, Prompt Catalog, SDK deps, protected paths.

No additional Product consumers required structural change beyond Panel (send/actions passthrough DTO as-is).

---

## 7. Diffs — fichiers modifiés (complet utile)

### 7.1 types.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 2c9db212..93d8530c 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -22,6 +22,8 @@ export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed"
 export type AssistantTurnStatus =
   | "ok"
   | "cognitive_stop"
+  /** Execution budget exhausted (e.g. maxTurns) — transport ok, analysis not complete. */
+  | "incomplete"
   | "stopped"
   | "provider_unavailable"
   | "provider_error"
@@ -195,7 +197,12 @@ export type ReservationResolutionProposalDto = {
 
 export type ProjectAssistantSendSuccess = {
   ok: true;
-  status: "ok" | "cognitive_stop";
+  /**
+   * "ok" — cognitive turn completed under Runner budget.
+   * "cognitive_stop" — MW3 business Cognitive STOP (≠ execution budget).
+   * "incomplete" — Runner/campaign execution limit reached; analysis not complete.
+   */
+  status: "ok" | "cognitive_stop" | "incomplete";
   text: string;
   mode: Exclude<AssistantUiMode, "unconfirmed">;
   presentation: "test_provider" | "openai_live";
@@ -207,6 +214,11 @@ export type ProjectAssistantSendSuccess = {
   toolEvents: AssistantToolEventDto[];
   project: ProjectAssistantContextDto;
   ephemeralNotice: string;
+  /**
+   * P0 — true when NoraTurnBudget / campaign stop set limitReached.
+   * Distinct from Cognitive STOP. Cause may be maxTurns or other Runner caps.
+   */
+  limitReached?: boolean;
   /** OD-04 Option C: always Agents Runner after Nora legacy retirement. */
   cognitiveRuntime?: "agents";
   /** Product SQLite Session id (Option C F1). */
```

### 7.2 orchestrateTurn.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 5c94a2da..68aa1795 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -108,12 +108,14 @@ function buildEphemeralNotice(
   stalePriorInvalidated?: boolean,
   cognitiveStopNotice?: string | null,
   lifecycleMaterializeNotice?: string | null,
+  executionLimitNotice?: string | null,
 ): string {
   const base = memoryBPiloteNotice(memoryBAvailability);
   const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
     stalePriorInvalidated,
   });
   const parts = [
+    executionLimitNotice,
     lifecycleMaterializeNotice,
     cognitiveStopNotice,
     compaction,
@@ -122,6 +124,10 @@ function buildEphemeralNotice(
   return parts.join(" ");
 }
 
+/** P0 — Pilote-facing notice when Runner/campaign execution limit stops analysis. */
+export const EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE =
+  "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée. Aucune décision Product n'a été inventée. Vous pouvez reformuler une nouvelle demande (aucune continuation automatique n'est garantie).";
+
 function toMw3Surface(
   turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
 ): Mw3CognitiveSurfaceDto | null {
@@ -517,6 +523,11 @@ export async function orchestrateProjectAssistantTurn(input: {
     // → LR only if stop=false → compose Pilot text from final coherent guidance.
     const cognitiveStopActive =
       turn.cognitiveStopDecision?.cognitiveStop === true;
+    /** P0 — Runner/campaign execution budget exhausted (≠ Cognitive STOP). */
+    const executionLimitReached = turn.limitReached === true;
+    /** Suppress durable complete-cognitive effects (LR/ACW/reservation/journal-as-complete). */
+    const suppressCompleteCognitiveEffects =
+      cognitiveStopActive || executionLimitReached;
 
     const preModelLrCurrent =
       input.studioCognitiveContext?.lifecycleRecommendation?.current ?? null;
@@ -536,7 +547,7 @@ export async function orchestrateProjectAssistantTurn(input: {
 
     if (
       turn.structuredOutput !== undefined &&
-      !cognitiveStopActive &&
+      !suppressCompleteCognitiveEffects &&
       turn.structuredOutput &&
       typeof turn.structuredOutput === "object"
     ) {
@@ -691,7 +702,8 @@ export async function orchestrateProjectAssistantTurn(input: {
     const coherentEarly =
       turn.structuredOutput !== undefined
         ? normalizeNoraProductTurnStructuredOutput(turn.structuredOutput, {
-            cognitiveStop: cognitiveStopActive,
+            // Fail-closed HOLD/null deltas when Cognitive STOP *or* execution limit.
+            cognitiveStop: suppressCompleteCognitiveEffects,
             currentLifecycleRecommendationSatisfiesTransition:
               postModelCurrentLrSatisfiesTransition,
           })
@@ -709,7 +721,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       const extracted = extractLifecycleCandidateFromStructuredOutput(
         turn.structuredOutput,
         {
-          cognitiveStop: cognitiveStopActive,
+          cognitiveStop: suppressCompleteCognitiveEffects,
           currentLifecycleRecommendationSatisfiesTransition:
             postModelCurrentLrSatisfiesTransition,
         },
@@ -753,7 +765,8 @@ export async function orchestrateProjectAssistantTurn(input: {
         reservationDelta: coherent?.reservationDelta ?? null,
       });
       const acwItems = strippedAcw?.items ?? [];
-      if (acwItems.length > 0) {
+      // P0 — no ACW durable writes when execution budget stopped the turn.
+      if (acwItems.length > 0 && !executionLimitReached) {
         // CORR-01 C2 — validate structured recommendedOptionRef against server
         // decision-support BEFORE any ACW write or Pilot structured display.
         const studioForRec = input.studioCognitiveContext ?? null;
@@ -1008,7 +1021,9 @@ export async function orchestrateProjectAssistantTurn(input: {
 
       // CYCLE-RESERVATION-PILOTING-01 — reservationDelta after ACW, same Product turn.
       // Never auto-RESOLVE; CREATE/UPDATE/PROPOSE_RESOLUTION only.
+      // P0 — no reservation durable writes when execution budget stopped the turn.
       if (
+        !executionLimitReached &&
         coherent?.reservationDelta &&
         coherent.reservationDelta.operations.length > 0 &&
         logicalTurnId
@@ -1090,7 +1105,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       // CR-NCI-03 — Cognitive Stop outranks NEW LR materialization this turn.
       // Reload durable basis so currentness binds post-ACW LPS version / epistemic.
       const lrCandidate =
-        !cognitiveStopActive &&
+        !suppressCompleteCognitiveEffects &&
         !coherent?.boundaryContradiction &&
         coherent?.lifecycleRecommendation
           ? coherent.lifecycleRecommendation
@@ -1378,7 +1393,10 @@ export async function orchestrateProjectAssistantTurn(input: {
             logicalTurnId,
             cycleInstanceId: activeCycleIdForJournal,
           });
+          // P0 — do not materialize journalDelta as completed mission when limitReached.
+          // Transcript of the interruption remains factual above.
           if (
+            !executionLimitReached &&
             activeCycleIdForJournal &&
             logicalTurnId &&
             coherentEarly?.journalDelta
@@ -1407,16 +1425,22 @@ export async function orchestrateProjectAssistantTurn(input: {
         materialized: lifecycleRecommendationMaterialized,
         code: lifecycleRecommendationCode,
       });
+    const executionLimitNotice = executionLimitReached
+      ? EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE
+      : null;
     const ephemeralNotice = buildEphemeralNotice(
       turn.memoryBAvailability,
       turn.memoryBCompactionState,
       turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
       stopNotice,
       lrMaterializeNotice,
+      executionLimitNotice,
     );
-    const status =
-      turn.cognitiveStopDecision?.cognitiveStop === true
-        ? ("cognitive_stop" as const)
+    // Cognitive STOP outranks incomplete; incomplete outranks ok.
+    const status = cognitiveStopActive
+      ? ("cognitive_stop" as const)
+      : executionLimitReached
+        ? ("incomplete" as const)
         : ("ok" as const);
 
     await cutDurableEffect(
@@ -1438,6 +1462,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       toolEvents,
       project,
       ephemeralNotice,
+      limitReached: executionLimitReached,
       cognitiveRuntime: turn.cognitiveRuntime,
       sessionId: turn.sessionId,
       memoryBAvailability: turn.memoryBAvailability,
```

### 7.3 ProjectAssistantPanel.tsx

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 25b70abe..0d0d4543 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -132,6 +132,8 @@ export function ProjectAssistantPanel({
   const [mw3Surface, setMw3Surface] = useState<Mw3CognitiveSurfaceDto | null>(
     null,
   );
+  /** P0 — last send hit Runner/campaign execution limit (status incomplete). */
+  const [executionIncomplete, setExecutionIncomplete] = useState(false);
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
   const [reservesText, setReservesText] = useState("");
   const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
@@ -414,6 +416,9 @@ export function ProjectAssistantPanel({
       );
       setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
       setMw3Surface(result.mw3 ?? null);
+      const incomplete =
+        result.status === "incomplete" || result.limitReached === true;
+      setExecutionIncomplete(incomplete);
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       if (result.toolEvents.length > 0) {
         setUiState("SOURCE_LOOKUP");
@@ -433,9 +438,8 @@ export function ProjectAssistantPanel({
         setF2(null);
         setActiveProposal(null);
       }
-      setUiState(
-        result.status === "cognitive_stop" ? "ANSWERED" : "ANSWERED",
-      );
+      // Incomplete remains ANSWERED transport-wise but surface discloses non-completion.
+      setUiState("ANSWERED");
     });
   }
 
@@ -683,6 +687,7 @@ export function ProjectAssistantPanel({
       className={styles.root}
       data-testid="project-assistant-panel"
       data-ui-state={uiState}
+      data-execution-incomplete={executionIncomplete ? "true" : "false"}
     >
       <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
         <StatusPill tone="green">Nora</StatusPill>
@@ -694,6 +699,24 @@ export function ProjectAssistantPanel({
       <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
         Morris pilote. Nora recommande — la décision vous appartient.
       </p>
+      {executionIncomplete ? (
+        <div
+          className={styles.scope}
+          data-testid="project-assistant-incomplete-surface"
+          role="status"
+        >
+          <StatusPill tone="orange">Analyse inachevée</StatusPill>
+          <p
+            className={styles.ephemeral}
+            data-testid="project-assistant-incomplete-notice"
+          >
+            Limite d&apos;exécution atteinte — cette réponse n&apos;est pas une
+            analyse complète. Aucune décision Product n&apos;a été inventée.
+            Reformulez une nouvelle demande si besoin (pas de continuation
+            automatique).
+          </p>
+        </div>
+      ) : null}
       {mw3Surface ? (
         <div
           className={styles.scope}
```

---

## 8. Contenu complet — fichiers créés

### 8.1 p6.nora.p0.productStatusHonesty.d0.test.ts

```ts
/**
 * P6 Nora P0 — Product Status Honesty (execution limit ≠ success).
 * Fake / mocked cognitive turn only — ZERO REAL.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE,
  orchestrateProjectAssistantTurn,
} from "@/features/project-assistant/orchestrateTurn";

const {
  getProjectRuntimeActionMock,
  runNoraCognitiveTurnMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  runNoraCognitiveTurnMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/lib/nora-cognitive-runtime", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/nora-cognitive-runtime")>();
  return {
    ...actual,
    runNoraCognitiveTurn: (...args: unknown[]) =>
      runNoraCognitiveTurnMock(...args),
  };
});

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:p0-honesty",
    name: "Projet P0",
    shortReference: "P0",
    objective: "Status honesty under execution limit.",
    contextSummary: "P0 D0",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:p0",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:p0",
    version: 1 as const,
    createdAt: "2026-10-12T00:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as const,
  },
};

function baseTurn(overrides: Record<string, unknown> = {}) {
  return {
    text: "Model-turn budget reached (maxTurns).",
    usage: {
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      model: "fake-test-model",
      providerResponseId: null,
    },
    toolRounds: 2,
    toolCalls: 2,
    limitReached: true,
    cognitiveRuntime: "agents" as const,
    sessionId: "sess:p0",
    memoryBAvailability: "unavailable" as const,
    memoryBCompactionState: "none" as const,
    memoryBCompactionDetails: null,
    ...overrides,
  };
}

describe("P6 Nora P0 — Product Status Honesty", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let sessionDir: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    runNoraCognitiveTurnMock.mockReset();
    setConversationProviderForTests(null);
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p0-orch-"));
    sessionDbPath = path.join(sessionDir, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
    fs.rmSync(sessionDir, { recursive: true, force: true });
  });

  it("T2/T3/T6/T12 — limitReached ⇒ status incomplete (not ok); DTO exposes limitReached", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(baseTurn());
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "Guided Document Review multi-source.",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("incomplete");
    expect(result.status).not.toBe("ok");
    expect(result.status).not.toBe("cognitive_stop");
    expect(result.limitReached).toBe(true);
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.ephemeralNotice).toContain(
      EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE.slice(0, 40),
    );
    expect(result.lifecycleRecommendationMaterialized).not.toBe(true);
  });

  it("T5 — structured LR candidate is not materialized when limitReached", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "partial narrative before budget",
        structuredOutput: {
          narrative: "partial narrative before budget",
          preCycleRoutingAssessment: {
            intentClarity: "clear",
            cycleTypeCandidatePresent: true,
            activeCycleAlreadyCoversWork: false,
            contradictionRisk: "none",
            readyToRecommendLifecycle: true,
          },
          lifecycleRecommendation: {
            kind: "NEXT_CYCLE",
            targetCycleTypeId: "cyc:framing",
            rationale: "should not materialize under limitReached",
            confidence: "medium",
          },
          activeCycleWork: {
            items: [
              {
                type: "WorkItem",
                title: "Should not write",
                summary: "blocked by P0",
              },
            ],
          },
          conversationGuidance: {
            mode: "CONTINUE",
            primaryAsk: null,
            suggestedNextUserActs: [],
          },
          journalDelta: {
            entries: [{ kind: "NOTE", text: "should not journal as complete" }],
          },
          reservationDelta: null,
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "Propose next cycle despite budget stop.",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("incomplete");
    expect(result.limitReached).toBe(true);
    expect(result.lifecycleRecommendationMaterialized).toBe(false);
    expect(result.reservationProposedIds ?? []).toEqual([]);
  });

  it("T7 — limitReached=false preserves status ok", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "[TEST/FAKE] complete reply",
        limitReached: false,
        toolRounds: 0,
        toolCalls: 0,
        structuredOutput: undefined,
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "Simple ping",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    expect(result.limitReached).toBe(false);
    expect(result.ephemeralNotice).not.toContain(
      "Limite d'exécution cognitive atteinte",
    );
  });

  it("T8 — Cognitive STOP remains distinct from incomplete", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "blocked by Cognitive STOP",
        limitReached: false,
        toolRounds: 0,
        toolCalls: 0,
        contradictionDisposition: {
          disposition: "evidence_backed",
          disclosure: "contradiction",
          acceptedEvidenceIds: ["ev:1"],
          acceptedSourceIds: ["src:a"],
          insufficiencyReasons: [],
        },
        cognitiveStopDecision: {
          progression: "cognitive_stop",
          outcome: "COGNITIVE_STOP",
          cognitiveStop: true,
          anatomy: {
            reason: "premise invalidated",
            contradictionEvidenceIds: ["ev:1"],
            sourceIds: ["src:a"],
            governingPremise: "X",
            nextAction: "replan",
          },
          surfacedDisposition: "evidence_backed",
          allowsSilentSuccess: false,
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "Evaluate contradiction",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("cognitive_stop");
    expect(result.limitReached).toBe(false);
    expect(result.mw3?.cognitiveStop).toBe(true);
  });

  it("T8b — Cognitive STOP outranks incomplete when both true", async () => {
    runNoraCognitiveTurnMock.mockResolvedValue(
      baseTurn({
        text: "stop and limit",
        limitReached: true,
        contradictionDisposition: {
          disposition: "evidence_backed",
          disclosure: "contradiction",
          acceptedEvidenceIds: ["ev:1"],
          acceptedSourceIds: [],
          insufficiencyReasons: [],
        },
        cognitiveStopDecision: {
          progression: "cognitive_stop",
          outcome: "COGNITIVE_STOP",
          cognitiveStop: true,
          anatomy: {
            reason: "premise invalidated",
            contradictionEvidenceIds: ["ev:1"],
            sourceIds: [],
            governingPremise: "X",
            nextAction: "replan",
          },
          surfacedDisposition: "evidence_backed",
          allowsSilentSuccess: false,
        },
      }),
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:p0-honesty",
      content: "both",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("cognitive_stop");
    expect(result.limitReached).toBe(true);
  });
});

```

### 8.2 p6.nora.p0.incomplete.panel.ux.d0.test.tsx

```tsx
/**
 * P6 Nora P0 — Panel surfaces incomplete execution limit (≠ full success).
 * Fake send action only — ZERO REAL.
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";

const {
  projectAssistantSendActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  projectAssistantSendActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantSendAction: (...args: unknown[]) =>
    projectAssistantSendActionMock(...args),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
    ok: true,
    status: "ok",
    selectedCycleInstanceId: null,
    selectedStatus: null,
    activeCycleInstanceId: null,
    selectionAmbiguous: false,
    cta: {
      canStart: false,
      canPause: false,
      canResume: false,
      canFinalize: false,
      canCancel: false,
    },
  })),
  projectAssistantPilotLifecycleAction: vi.fn(),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const PROJECT = {
  projectId: "prj:p0-ui",
  name: "Projet P0 UI",
  shortReference: "P0UI",
  objective: "Surface incomplete.",
  contextSummary: "P0 UX",
  criticality: "STANDARD" as const,
  constraints: [] as string[],
  lpsId: "lps:p0-ui",
  lpsVersion: 1,
  lpsCreatedAt: "2026-10-12T00:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:p0-ui",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
  readiness: "NOT_READY" as const,
};

describe("P6 Nora P0 — ProjectAssistantPanel incomplete UX", () => {
  beforeEach(() => {
    projectAssistantSendActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "error",
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "none",
      mode: "fixture",
      retryable: false,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("T4 — incomplete status shows Analyse inachevée (not full success)", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "incomplete",
      text: "Model-turn budget reached (maxTurns).",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 2,
      toolCalls: 2,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice:
        "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
      limitReached: true,
      cognitiveRuntime: "agents",
      sessionId: "sess:p0-ui",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      lifecycleRecommendationMaterialized: false,
    });

    render(<ProjectAssistantPanel projectId="prj:p0-ui" />);
    const input = screen.getByTestId("project-assistant-input");
    fireEvent.change(input, {
      target: { value: "Continuer l'analyse documentaire." },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });
    const panel = screen.getByTestId("project-assistant-panel");
    expect(panel.getAttribute("data-execution-incomplete")).toBe("true");
    expect(screen.getByTestId("project-assistant-incomplete-notice").textContent).toMatch(
      /Analyse|inachev|limite/i,
    );
    expect(screen.getByText(/Model-turn budget reached/i)).toBeTruthy();
    expect(screen.queryByTestId("project-assistant-mw3-surface")).toBeNull();
  });

  it("T7 UI — ok status does not show incomplete surface", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE] reply",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "Session ok.",
      limitReached: false,
      cognitiveRuntime: "agents",
      sessionId: "sess:p0-ui",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
    });

    render(<ProjectAssistantPanel projectId="prj:p0-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "ping" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByText(/TEST\/FAKE/i)).toBeTruthy();
    });
    expect(screen.queryByTestId("project-assistant-incomplete-surface")).toBeNull();
    expect(
      screen.getByTestId("project-assistant-panel").getAttribute(
        "data-execution-incomplete",
      ),
    ).toBe("false");
  });
});

```

---

## 9. Classification KEEP / ADAPT / COMPLETE

| Asset | Class |
|---|---|
| OpenAI Agents Runner / runNoraAgentsTurn | KEEP |
| runNoraCognitiveTurn / turnBudget / campaignBudget | KEEP |
| ProductSqliteSession / Memory B / Cycle Journal | KEEP |
| CognitiveWorkloadPolicy / RoutingPolicy | KEEP |
| ProjectAssistantSendSuccess status union | ADAPT — add `incomplete` |
| ProjectAssistantSendSuccess fields | COMPLETE — `limitReached?` |
| orchestrateTurn status + durable gates | ADAPT |
| ProjectAssistantPanel incomplete surface | COMPLETE (reuse StatusPill/scope/ephemeral) |
| Tests P0 honesty + panel UX | COMPLETE |

---

## 10. Preuves T1–T12

| ID | Claim | Evidence | Result |
|---|---|---|---|
| T1 | Runner signals limitReached | runner.d0 R5 + documentary V1 | PASS (adjacent) |
| T2 | Product frontier not status ok | p0.productStatusHonesty T2/T3 | PASS |
| T3 | DTO explicit incompleteness | status incomplete + limitReached | PASS |
| T4 | UI not full success | incomplete.panel.ux T4 | PASS |
| T5 | No unjustified LR/ACW/reservation | honesty T5 + orch gates | PASS |
| T6 | Partial text ≠ full success | honesty T2 text preserved + status incomplete | PASS |
| T7 | limitReached=false preserves ok | honesty T7 + panel T7 UI | PASS |
| T8 | Cognitive STOP distinct | honesty T8 + T8b + mw3 suites | PASS |
| T9 | Campaign budget no bypass | documentary V3 (adjacent) | PASS |
| T10 | Cancel/provider distinct | orchestrateTurn provider_error + existing cancel suites not regressed | PASS (orch suite); cancel suite not re-run this cycle — preexisting path untouched |
| T11 | Persistence factual | journalDelta not written as complete; transcript text may remain | PASS (T5/orch gates) |
| T12 | limitReached cause not assumed = only maxTurns | DTO comment + honesty T12 naming; no cause invention | PASS |

---

## 11. Tests exécutés (commandes exactes)

Working directory: `projects/sfia-studio/app`

```bash
npx vitest run \
  __tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts \
  __tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx \
  __tests__/project-assistant/orchestrateTurn.test.ts \
  __tests__/project-assistant/mw3.cognitiveStop.surface.d0.test.ts \
  __tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx \
  __tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts \
  __tests__/nora-cognitive-runtime/runner.d0.test.ts \
  --reporter=verbose
```

Result: **7 files / 41 tests PASS**

```bash
npx vitest run __tests__/project-assistant/ProjectAssistantPanel.test.tsx --reporter=dot
```

Result: **1 file / 8 tests PASS**

```bash
npx tsc -p tsconfig.json --noEmit
```

Result: **TSC_OK** (exit 0)

```bash
npx eslint --no-error-on-unmatched-pattern \
  features/project-assistant/types.ts \
  features/project-assistant/orchestrateTurn.ts \
  features/project-assistant/ProjectAssistantPanel.tsx \
  __tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts \
  __tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx
```

Result: **0 errors**, 2 pre-existing warnings in Panel (exhaustive-deps) — not introduced by P0 incomplete block.

`git diff --check`: clean (no whitespace errors reported in prior check).

### Not executed (justified)

- Global P6 campaign / REAL OpenAI — GO REAL NON
- P1/P2 suites — hors scope
- Full app vitest — disproportionate; targeted adjacent suites cover frontier
- p5 cancellation suite — path not modified; T10 covered by existing provider_error in orchestrateTurn.test.ts

---

## 12. Validation chemin frontend

Path: Panel `projectAssistantSendAction` → on success reads `result.status` / `result.limitReached` → `executionIncomplete` state → surface `project-assistant-incomplete-surface` + `data-execution-incomplete`.

No new modal / confirmation / resume flow. Reuses StatusPill (orange) + scope + ephemeral styles.

Figma: no structural redesign; no strong visual verdict without runtime capture — RESERVE minor.

---

## 13. Effets durables / guards

When `executionLimitReached`:

- structured complete-cognitive path suppressed (`suppressCompleteCognitiveEffects`)
- LR candidate not materialized
- ACW items not written
- reservationDelta operations not applied
- journalDelta not materialized as completed mission
- Cognitive STOP path remains primary when both true
- Conversation text / tool events / provenance still returnable (factual)

Truth C / HumanDecision authority: unchanged.

---

## 14. Fake / Real Qualification

| Item | Value |
|---|---|
| Applicable | YES |
| Fake | ScriptedModel / mocked runNoraCognitiveTurn / Fake send action |
| REAL boundary corresponding | OpenAI Agents Runner Product path |
| Entry level | STATIC QUALIFIED + DETERMINISTIC MAXTURNS PROVEN |
| Achieved | **DETERMINISTIC PROVEN AT P0 PRODUCT STATUS SCOPE** |
| NOT demonstrated | REAL BOUNDARY PROVEN; REAL GDR QUALITY; AUTONOMOUS CONTINUATION; P6 GLOBAL PASS; RUNTIME V3 ADOPTED |
| GO REAL | NON |
| OpenAI REAL calls | ZERO |

DETERMINISTIC PROVEN ≠ READY FOR REAL.

---

## 15. Dette / exit / réserves

Dette acceptée (hors GO):

- P1 Adaptive Runner Budget — workload-aware maxTurns still default 5
- P2 Controlled Cognitive Continuation — RunState Product not wired
- REAL GDR replay of MIN-09 — requires separate GO after review
- Panel eslint exhaustive-deps warnings pre-existing

Exit proof for P0: status incomplete + limitReached on DTO + UI surface + durable suppress + tests T1–T12 at deterministic scope.

---

## 16. Décisions Morris restantes

1. Review ChatGPT of this P0 local delivery.
2. Decide integration/commit on project branch (GO not granted this cycle).
3. Optional GO P1 Adaptive Runner Budget.
4. Conditional GO P2 Controlled Continuation.
5. Separate GO REAL for MIN-09 / GDR replay.
6. P6 GLOBAL PASS remains NOT claimed.

---

## 17. P1 / P2 hors scope (explicit)

- P1 Adaptive Runner Budget — NOT implemented
- P2 Controlled Cognitive Continuation / RunState Product — NOT implemented
- Production ceilings unchanged
- No cognitive architecture rewrite
- No new REAL campaign

---

## 18. Review Handoff plan

Mode: publish-in-cycle L3 borné
Branch: `sfia/review-handoff`
Canonical: `sfia-review-handoff/latest-chatgpt-review.md`
Commit message: `docs(review-handoff): publish P6 Nora P0 product status honesty`
No project commit / push / PR / merge / force-push.

---

## 19. Verdict

**P6 NORA P0 — LOCAL DELIVERY COMPLETE / READY FOR CHATGPT REVIEW**

Status: READY FOR REVIEW

QA level: DETERMINISTIC AT P0 SCOPE

Gate suivant: Revue ChatGPT + décision Morris d'intégration. REAL séparé.

Ne pas déclarer: P6 GLOBAL PASS · Product Completion READY · Runtime v3 ADOPTED · P1/P2 done · REAL GDR VALIDATED · READY FOR PR.
