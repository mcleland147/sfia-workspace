# Review Pack — MW1-S02 DELIVERY + PROOF
# FULL / CRITICAL / CONTENT-COMPLETE

## 1. Timestamp
2026-08-31 16:41:51 CEST

## 2. Repository
mcleland147/sfia-workspace

## 3–5. Cycle / typology / profile
- Cycle: **8 — Delivery / implémentation**
- Typology: **INC**
- Profile: **CRITICAL**
- Morris GO: **MW1 COMPLETION DELIVERY LOT — S02 ONLY this cycle**

## 6–9. Git Truth
- origin/main: `0f265149dc7e088ac62ff99c6f998274bec6c94f` / tree `92fce49d245ffb4cbfc43b2b55e1004648b6a900`
- branch: `delivery/sfia-studio-nora-mw1-s01-honest-memory-b`
- worktree: `/Users/morris/Projects/sfia-workspace-nora-mw1-s01-honest-memory-b`
- HEAD: `0f265149dc7e088ac62ff99c6f998274bec6c94f` (uncommitted aggregate S01+S02 candidate)
- input handoff S01: `0446028d3979f74d264620d2e2c2250c773e2126`

## 10. Convergence / S02 source-lock
MW1-S02 — Compaction with provenance and loss signaling.
CE-04 / NCC-BAR-07 / NR-17 / NR-18. Responses Compaction **NOT ADOPTED**.

## 11. Discovery inventory
- Ad-hoc truncation: `orchestrateTurn.ts` `MAX_HISTORY_MESSAGES=20` (process-local caller history slice) — **not** Memory B compaction; preserved.
- Memory B store: `nora-session.sqlite` / `session_items` unchanged schema.
- Truth C revision token: **`lpsId` + `lpsVersion`** from F1 project context.

## 12. Architecture/persistence gate
**NO STOP triggered.** Compaction stored as typed JSON item `sfia_memory_b_compaction` inside existing `session_items.item_json`. No new table/schema. Same ProductSqliteSession + Agents Runner.

## 13. Selected mechanism
`memoryBCompaction.ts`: threshold policy (default 8 items, keep 2 recent), deterministic summary builder, provenance hashes+seq, loss metadata, Truth C revision stamp, stale invalidation on revision mismatch, `MemoryBSessionView` for replay, atomic `replaceItemsAtomically`.

## 14–27. Behavior summary
- **Trigger:** conversation item count > threshold
- **Provenance:** per-source seq, role, contentHash, excerpt
- **Loss:** explicit `loss.occurred`, dropped count, non-exhaustive summary marker
- **Governing:** STOP/HD/GO markers retained in summary or explicit loss
- **Stale:** mismatch on lpsVersion → `stale_invalidated`, summary not replayed
- **Cognitive:** `COMPACTION_COGNITIVE_DISCLOSURE` appended to system instructions
- **Pilote:** dynamic compaction notice + existing S01 notice
- **Atomicity:** SQLite transaction + rollback test hook

## 28. S02-01→S02-24 matrix (all PASS)
S02-01..S02-24 PASS — see targeted tests below.

## 29. S01 regression
All S01 tests PASS (availability, product E2E, eval causal, Option C D0).

## 30. Validations
| Check | Result |
|-------|--------|
| S02 unit (9) | PASS |
| S02 modeled (3) | PASS |
| S02 eval (9) | PASS |
| S01+S02 targeted | PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| full npm test | **240 files / 2294 tests PASS** |

## 31–40. Anti-scope
- Responses Compaction: NOT ADOPTED
- S03: NOT STARTED
- package/lock: unchanged
- schema: unchanged (no migration)
- REAL: none
- project commit/push/PR: **NONE**

## FINAL VERDICT
MW1-S02 DELIVERY + PROOF — PASS — GOVERNED MEMORY B COMPACTION IMPLEMENTED ON EXISTING OPTION C CANDIDATE — PROVENANCE PRESERVED — LOSS EXPLICIT — STALE COMPACTED B INVALIDATED ON TRUTH C CHANGE — SESSION NON-AUTHORITATIVE — NCC-BAR-07 S02 RUNTIME-BOUND EVAL PASS — S01 REGRESSION PASS — UNIT + MODELED + EVAL PASS — FULL REGRESSION PASS — DETERMINISTIC ONLY — RESPONSES COMPACTION NOT ADOPTED — NO REAL — S03 NOT STARTED — NO PROJECT COMMIT/PUSH/PR — READY FOR CHATGPT CRITICAL REVIEW

---
# APPENDIX A — S02 DELTA (FULL)


## DIFF `projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
index 685bd692..47481021 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
@@ -24,6 +24,7 @@ export class ProductSqliteSession implements Session {
   private readonly dbPath: string;
   private db: DatabaseSync;
   private forceNextGetFail = false;
+  private forceNextReplaceFail = false;

   constructor(options: ProductSqliteSessionOptions) {
     this.projectId = options.projectId;
@@ -46,6 +47,11 @@ export class ProductSqliteSession implements Session {
     this.forceNextGetFail = true;
   }

+  /** Test hook — next replaceItemsAtomically fails after DELETE (rollback). */
+  simulateNextReplaceFailure(): void {
+    this.forceNextReplaceFail = true;
+  }
+
   /** Test/inspection access for atomicity proofs (triggers, etc.). */
   getSqlite(): DatabaseSync {
     return this.db;
@@ -142,6 +148,61 @@ export class ProductSqliteSession implements Session {
       .run(this.projectId, this.sessionKey);
   }

+  /** Inspection — ordered raw rows for compaction (MW1-S02). */
+  listItemRows(): Array<{ seq: number; item_json: string }> {
+    return this.db
+      .prepare(
+        `SELECT seq, item_json FROM session_items
+         WHERE project_id = ? AND session_key = ?
+         ORDER BY seq ASC`,
+      )
+      .all(this.projectId, this.sessionKey) as Array<{
+      seq: number;
+      item_json: string;
+    }>;
+  }
+
+  /**
+   * Atomic replace of all session items (MW1-S02 compaction).
+   * BEGIN IMMEDIATE → DELETE → INSERT → COMMIT; ROLLBACK on failure.
+   */
+  async replaceItemsAtomically(items: AgentInputItem[]): Promise<void> {
+    this.db.exec("BEGIN IMMEDIATE");
+    try {
+      this.db
+        .prepare(
+          `DELETE FROM session_items WHERE project_id = ? AND session_key = ?`,
+        )
+        .run(this.projectId, this.sessionKey);
+      const insert = this.db.prepare(
+        `INSERT INTO session_items(project_id, session_key, seq, item_json)
+         VALUES (?, ?, ?, ?)`,
+      );
+      let seq = 0;
+      for (const item of items) {
+        if (this.forceNextReplaceFail) {
+          this.forceNextReplaceFail = false;
+          throw new Error("SESSION_REPLACE_SIMULATED_FAILURE");
+        }
+        insert.run(
+          this.projectId,
+          this.sessionKey,
+          seq,
+          JSON.stringify(item),
+        );
+        seq += 1;
+      }
+      this.db.exec("COMMIT");
+    } catch (error) {
+      try {
+        this.db.exec("ROLLBACK");
+      } catch {
+        /* ignore */
+      }
+      throw error;
+    }
+  }
+
   /** Inspection — tables must not be Truth C / oa_*. */
   listTables(): string[] {
     const rows = this.db
```


## DIFF `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index d427b797..add620c0 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -1,11 +1,20 @@
 /**
  * Nora cognitive turn entry — Option C single Agents Runner path.
- * No runtime selector. Legacy Nora dual-path debt retired (see MIGRATION.md).
- * Platform runToolCallingLoop remains independent OPS1/D1 infrastructure (RETIRED from Nora F1).
+ * MW1-S01: honest Memory B availability.
+ * MW1-S02: governed compaction + Truth C revision invalidation before cognition.
  */
 import type { ConversationProvider, ProviderChatMessage } from "@/lib/platform/ai";
 import type { EventSink } from "@/lib/platform/observability/eventSink";
-import { ProductSqliteSession } from "./productSqliteSession";
+import {
+  appendMemoryBCognitiveDisclosure,
+  probeMemoryBAvailability,
+} from "./memoryBAvailability";
+import type { Session } from "@openai/agents";
+import {
+  appendMemoryBCompactionDisclosure,
+  createMemoryBSessionView,
+  type TruthCRevision,
+} from "./memoryBCompaction";
 import { resolveNoraSessionSqlitePath } from "./sessionPaths";
 import { runNoraAgentsTurn } from "./runNoraAgentsTurn";
 import type { NoraCognitiveTurnResult } from "./types";
@@ -18,9 +27,13 @@ export type RunNoraCognitiveTurnInput = {
   enableTools?: boolean;
   sink?: EventSink;
   workspaceRoot?: string;
-  /** Override Session DB (tests). */
   sessionDbPath?: string;
   sessionKey?: string;
+  simulateMemoryBUnavailable?: boolean;
+  /** MW1-S02 — Truth C revision token for compaction invalidation. */
+  truthCRevision?: TruthCRevision;
+  /** Test-only fixed timestamp for deterministic compaction. */
+  compactionNowIso?: string;
 };

 export async function runNoraCognitiveTurn(
@@ -33,28 +46,92 @@ export async function runNoraCognitiveTurn(
     throw new Error("NORA_AGENTS_TURN_REQUIRES_SYSTEM_AND_USER");
   }

-  const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
-  const session = new ProductSqliteSession({
+  let dbPath: string;
+  try {
+    dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
+  } catch {
+    const systemInstructions = appendMemoryBCognitiveDisclosure(
+      system.content,
+      "unavailable",
+    );
+    const turn = await runNoraAgentsTurn({
+      correlationId: input.correlationId,
+      projectId: input.projectId,
+      systemInstructions,
+      userContent: lastUser.content.trim(),
+      session: null,
+      memoryBAvailability: "unavailable",
+      workspaceRoot: input.workspaceRoot,
+      sink: input.sink,
+      enableTools: input.enableTools,
+      provider: input.provider,
+    });
+    return {
+      ...turn,
+      memoryBCompactionState: "none",
+      memoryBCompactionDetails: null,
+    };
+  }
+
+  const probe = await probeMemoryBAvailability({
     projectId: input.projectId,
     dbPath,
     sessionKey: input.sessionKey ?? "f1-default",
+    simulateUnavailable: input.simulateMemoryBUnavailable,
   });

+  // CORR-OPT-C-01: do NOT auto-import caller-provided process-local
+  // user/assistant history into durable Runner Session (untrusted provenance).
+  let systemInstructions = appendMemoryBCognitiveDisclosure(
+    system.content,
+    probe.availability,
+  );
+
+  let sessionForRunner: Session | null = probe.session;
+  let compactionDetails = null;
+  let compactionState: NoraCognitiveTurnResult["memoryBCompactionState"] =
+    "none";
+
+  if (
+    probe.session &&
+    probe.availability !== "unavailable" &&
+    input.truthCRevision
+  ) {
+    const prepared = await createMemoryBSessionView({
+      session: probe.session,
+      truthCRevision: input.truthCRevision,
+      nowIso: input.compactionNowIso,
+    });
+    sessionForRunner = prepared.view;
+    compactionDetails = prepared.details;
+    compactionState = prepared.details.state;
+    systemInstructions = appendMemoryBCompactionDisclosure(
+      systemInstructions,
+      compactionState,
+    );
+  }
+
   try {
-    // CORR-OPT-C-01: do NOT auto-import caller-provided process-local
-    // user/assistant history into durable Runner Session (untrusted provenance).
-    return await runNoraAgentsTurn({
+    const turn = await runNoraAgentsTurn({
       correlationId: input.correlationId,
       projectId: input.projectId,
-      systemInstructions: system.content,
+      systemInstructions,
       userContent: lastUser.content.trim(),
-      session,
+      session: sessionForRunner,
+      memoryBAvailability: probe.availability,
       workspaceRoot: input.workspaceRoot,
       sink: input.sink,
       enableTools: input.enableTools,
       provider: input.provider,
     });
+    return {
+      ...turn,
+      memoryBCompactionState: compactionState,
+      memoryBCompactionDetails: compactionDetails,
+    };
   } finally {
-    session.close();
+    if (probe.session) {
+      probe.session.close();
+    }
   }
 }
```


## DIFF `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 65d2ff10..dfacaced 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -9,6 +9,7 @@ import {
   MaxTurnsExceededError,
   Runner,
   type Model,
+  type Session,
 } from "@openai/agents";
 import type { ConversationProvider } from "@/lib/platform/ai";
 import type { EventSink } from "@/lib/platform/observability/eventSink";
@@ -20,7 +21,7 @@ import {
   isFakeConversationProvider,
 } from "./providerAgentsModel";
 import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
-import type { ProductSqliteSession } from "./productSqliteSession";
+import type { MemoryBAvailability } from "./memoryBAvailability";
 import {
   createNoraTurnBudget,
   toolRoundsFromBudget,
@@ -33,7 +34,13 @@ export type RunNoraAgentsTurnInput = {
   projectId: string;
   systemInstructions: string;
   userContent: string;
-  session: ProductSqliteSession;
+  /**
+   * Agents SDK Session when Memory B is available (ProductSqliteSession or MemoryBSessionView).
+   * Omit when Memory B is UNAVAILABLE — same Runner path (SDK session optional).
+   */
+  session?: Session | null;
+  /** MW1-S01 availability classification for this turn. */
+  memoryBAvailability?: MemoryBAvailability;
   workspaceRoot?: string;
   sink?: EventSink;
   /** Injected model for D0 (ScriptedModel). Live uses OPENAI_MODEL. */
@@ -98,6 +105,10 @@ export async function runNoraAgentsTurn(

   const runner = createNoraAgentsRunner(input.systemInstructions, budget);
   const maxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;
+  const session = input.session ?? undefined;
+  const memoryBAvailability: MemoryBAvailability =
+    input.memoryBAvailability ??
+    (session ? "available_with_history" : "unavailable");

   let text = "";
   let lastResponseId: string | null = null;
@@ -109,7 +120,7 @@ export async function runNoraAgentsTurn(

   try {
     const result = await runner.run(agent, input.userContent, {
-      session: input.session,
+      ...(session ? { session } : {}),
       maxTurns,
       errorHandlers: {
         maxTurns: ({ runData }) => {
@@ -176,6 +187,9 @@ export async function runNoraAgentsTurn(
     toolCalls: budget.executedToolCalls,
     limitReached: budget.limitReached,
     cognitiveRuntime: "agents",
-    sessionId: await input.session.getSessionId(),
+    sessionId: session ? await session.getSessionId() : null,
+    memoryBAvailability,
+    memoryBCompactionState: "none",
+    memoryBCompactionDetails: null,
   };
 }
```


## DIFF `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 3e5cdfd5..68366a82 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -4,6 +4,13 @@
  * Single Runner path after legacy Nora runtime retirement.
  */

+import type { MemoryBAvailability } from "./memoryBAvailability";
+import type {
+  MemoryBCompactionDetails,
+  MemoryBCompactionState,
+  TruthCRevision,
+} from "./memoryBCompaction";
+
 /** F1/Nora cognitive runtime kind — Agents SDK Runner only. */
 export type NoraCognitiveRuntimeKind = "agents";

@@ -22,4 +29,12 @@ export type NoraCognitiveTurnResult = {
   /** Always "agents" after Nora legacy retirement (honest observability). */
   cognitiveRuntime: NoraCognitiveRuntimeKind;
   sessionId: string | null;
+  /** MW1-S01 — honest Memory B availability for this turn. */
+  memoryBAvailability: MemoryBAvailability;
+  /** MW1-S02 — compaction / stale state for this turn. */
+  memoryBCompactionState: MemoryBCompactionState;
+  /** MW1-S02 — optional compaction details when relevant. */
+  memoryBCompactionDetails: MemoryBCompactionDetails | null;
 };
+
+export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };
```


## DIFF `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 96423202..14486b3c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -10,6 +10,44 @@ export type {
 } from "./types";
 export { ProductSqliteSession, userTextItem, assistantTextItem } from "./productSqliteSession";
 export type { ProductSqliteSessionOptions } from "./productSqliteSession";
+export {
+  probeMemoryBAvailability,
+  appendMemoryBCognitiveDisclosure,
+  memoryBPiloteNotice,
+  MEMORY_B_COGNITIVE_DISCLOSURE,
+  MEMORY_B_PILOTE_NOTICE,
+} from "./memoryBAvailability";
+export type {
+  MemoryBAvailability,
+  MemoryBProbeResult,
+  ProbeMemoryBAvailabilityOptions,
+} from "./memoryBAvailability";
+export {
+  DEFAULT_COMPACTION_POLICY,
+  MemoryBSessionView,
+  applyCompactionIfNeeded,
+  appendMemoryBCompactionDisclosure,
+  buildCompactionRecord,
+  createMemoryBSessionView,
+  loadSessionRows,
+  memoryBCompactionPiloteNotice,
+  parseStoredCompactionRecord,
+  prepareMemoryBForTurn,
+  resolveReplayItems,
+  shouldCompactItemCount,
+  truthCRevisionKey,
+  truthCRevisionsMatch,
+} from "./memoryBCompaction";
+export type {
+  CompactionPolicy,
+  CompactionProvenanceEntry,
+  LoadedSessionRows,
+  MemoryBCompactionDetails,
+  MemoryBCompactionLoss,
+  MemoryBCompactionRecord,
+  MemoryBCompactionState,
+  TruthCRevision,
+} from "./memoryBCompaction";
 export { resolveNoraSessionSqlitePath } from "./sessionPaths";
 export {
   sfiaBoundaryInstructions,
```


## DIFF `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 43504bf0..d6adaba8 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -4,7 +4,11 @@ import {
   type ConversationProvider,
   type ProviderChatMessage,
 } from "@/lib/platform/ai";
-import { runNoraCognitiveTurn } from "@/lib/nora-cognitive-runtime";
+import {
+  memoryBPiloteNotice,
+  memoryBCompactionPiloteNotice,
+  runNoraCognitiveTurn,
+} from "@/lib/nora-cognitive-runtime";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
@@ -18,8 +22,23 @@ import type {
 } from "./types";

 const MAX_HISTORY_MESSAGES = 20;
-const SESSION_NOTICE_AGENTS =
-  "Continuité conversationnelle via Product SQLite Session (project-scoped) — Session ≠ Truth C / LPS / HumanDecision. Project/LPS restent Product SQLite Truth C. AUCUNE EXÉCUTION.";
+
+function buildEphemeralNotice(
+  memoryBAvailability:
+    | "available_with_history"
+    | "available_empty"
+    | "unavailable",
+  memoryBCompactionState:
+    | "none"
+    | "compacted_no_loss"
+    | "compacted_with_loss"
+    | "stale_invalidated",
+): string {
+  const base = memoryBPiloteNotice(memoryBAvailability);
+  const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState);
+  if (!compaction) return base;
+  return `${compaction} ${base}`;
+}

 function toContextDto(
   result: Extract<
@@ -63,6 +82,11 @@ export async function orchestrateProjectAssistantTurn(input: {
   provider?: ConversationProvider;
   /** Test override for Product SQLite Session path. */
   sessionDbPath?: string;
+  /**
+   * Test injection — forces Memory B UNAVAILABLE (MW1-S01).
+   * Same product path; no second runtime.
+   */
+  simulateMemoryBUnavailable?: boolean;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -131,6 +155,11 @@ export async function orchestrateProjectAssistantTurn(input: {
       sink,
       workspaceRoot,
       sessionDbPath: input.sessionDbPath,
+      simulateMemoryBUnavailable: input.simulateMemoryBUnavailable,
+      truthCRevision: {
+        lpsId: project.lpsId,
+        lpsVersion: project.lpsVersion,
+      },
     });

     const { toolEvents, sources } = collectToolTelemetry(sink.events);
@@ -147,9 +176,14 @@ export async function orchestrateProjectAssistantTurn(input: {
       sources,
       toolEvents,
       project,
-      ephemeralNotice: SESSION_NOTICE_AGENTS,
+      ephemeralNotice: buildEphemeralNotice(
+        turn.memoryBAvailability,
+        turn.memoryBCompactionState,
+      ),
       cognitiveRuntime: turn.cognitiveRuntime,
       sessionId: turn.sessionId,
+      memoryBAvailability: turn.memoryBAvailability,
+      memoryBCompactionState: turn.memoryBCompactionState,
     };
   } catch (error) {
     const message =
```


## DIFF `projects/sfia-studio/app/features/project-assistant/types.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 966ae5e9..153b6c2b 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -114,6 +114,17 @@ export type ProjectAssistantSendSuccess = {
   cognitiveRuntime?: "agents";
   /** Product SQLite Session id (Option C F1). */
   sessionId?: string | null;
+  /** MW1-S01 — honest Memory B availability for this turn. */
+  memoryBAvailability?:
+    | "available_with_history"
+    | "available_empty"
+    | "unavailable";
+  /** MW1-S02 — compaction / stale state for this turn. */
+  memoryBCompactionState?:
+    | "none"
+    | "compacted_no_loss"
+    | "compacted_with_loss"
+    | "stale_invalidated";
   f2?: F2TurnPayload;
 };
```


## DIFF `projects/sfia-studio/app/lib/nora-eval/catalog.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/catalog.ts b/projects/sfia-studio/app/lib/nora-eval/catalog.ts
index 4f5e7ea5..361e5a2b 100644
--- a/projects/sfia-studio/app/lib/nora-eval/catalog.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/catalog.ts
@@ -167,6 +167,45 @@ const SCENARIOS: ScenarioDefinition[] = [
       expectParityStatus: "NOT_PROVEN",
     },
   },
+  {
+    scenarioId: "mw1.s01.honest-memory-b-availability",
+    catalogVersion: NORA_EVAL_CATALOG_VERSION,
+    storyIds: ["MW1-S01"],
+    barIds: ["NCC-BAR-07"],
+    kind: "memory_continuity",
+    title:
+      "MW1-S01 / CE-03 — honest Memory B availability vs Truth C (unavailable ≠ empty)",
+    prompt:
+      "Product-path deterministic check: distinguish available-with-history / available-empty / unavailable Memory B; resume from Truth C; no invented transcript.",
+    requiredTier: ["D0"],
+    hardInvariants: [
+      "memory_b_unavailable_neq_empty",
+      "session_neq_truth_c",
+      "no_invented_transcript",
+    ],
+    d0Expectations: { mustPass: true },
+  },
+  {
+    scenarioId: "mw1.s02.compaction-provenance-loss",
+    catalogVersion: NORA_EVAL_CATALOG_VERSION,
+    storyIds: ["MW1-S02"],
+    barIds: ["NCC-BAR-07"],
+    kind: "memory_continuity",
+    title:
+      "MW1-S02 / CE-04 — compaction with provenance, loss signaling, Truth C invalidation",
+    prompt:
+      "Product-path deterministic check: governed Memory B compaction retains provenance, signals loss, invalidates on Truth C change.",
+    requiredTier: ["D0"],
+    hardInvariants: [
+      "compaction_footprint_reduced",
+      "compaction_provenance_required",
+      "compaction_loss_honest",
+      "compaction_stale_invalidated",
+      "compaction_no_authority_claim",
+      "session_neq_truth_c",
+    ],
+    d0Expectations: { mustPass: true },
+  },
 ];

 export function getCatalogVersion(): typeof NORA_EVAL_CATALOG_VERSION {
```


## DIFF `projects/sfia-studio/app/lib/nora-eval/d0Runner.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
index bc15db25..a02d854a 100644
--- a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
@@ -1,5 +1,6 @@
 /**
- * D0 deterministic runner + observation builders for MW0 catalog.
+ * D0 deterministic runner + observation builders for MW0/MW1 catalog.
+ * MW1-S01 observation is produced by actual runtime execution (async).
  */

 import { getScenario, listScenarios, catalogSelfCheck, getCatalogVersion } from "./catalog";
@@ -11,14 +12,16 @@ import {
 } from "./scorers";
 import type { RunEvidence, PassFail } from "./types";
 import { NORA_EVAL_CATALOG_VERSION } from "./types";
+import { observeMw1S01FromRuntime } from "./mw1S01Observe";
+import { observeMw1S02FromRuntime } from "./mw1S02Observe";

 function nowIso(): string {
   return new Date().toISOString();
 }

-function observationForScenario(
+async function observationForScenario(
   scenarioId: string,
-): DeterministicObservation {
+): Promise<DeterministicObservation> {
   switch (scenarioId) {
     case "mw0.s01.catalog-mechanics":
       return { productPath: "none", observedObservableIds: ["obs.evidence.provenance"] };
@@ -96,12 +99,72 @@ function observationForScenario(
         productPath: "none",
         observedObservableIds: ["obs.parity.metric_target"],
       };
+    case "mw1.s01.honest-memory-b-availability":
+      return observeMw1S01FromRuntime();
+    case "mw1.s02.compaction-provenance-loss":
+      return observeMw1S02FromRuntime();
     default:
       return { productPath: "none" };
   }
 }

-export function runD0Scenario(scenarioId: string): RunEvidence {
+function toRunEvidence(
+  scenarioId: string,
+  startedAt: string,
+  obs: DeterministicObservation,
+  scored: ReturnType<typeof scoreScenarioD0>,
+  scenario: NonNullable<ReturnType<typeof getScenario>>,
+): RunEvidence {
+  return {
+    campaignId: "d0-local",
+    cell: {
+      model: "fixture",
+      reasoningEffort: "none",
+      scenarioId: scenario.scenarioId,
+      scenarioVersion: scenario.catalogVersion,
+      runIndex: 0,
+      campaignId: "d0-local",
+      tier: "D0",
+      sourceSet: "A",
+      toolSet: "none",
+    },
+    startedAt,
+    finishedAt: nowIso(),
+    passFail: scored.passFail,
+    failureClass: scored.passFail === "PASS" ? "NONE" : "MECHANICS",
+    scorers: scored.scorers,
+    epistemicLabelsObserved: obs.labels ?? [],
+    productPath: "none",
+    rawSummary: `D0 ${scenario.scenarioId} → ${scored.passFail}`,
+    usage: null,
+    cumulativeSpendUsd: 0,
+    redacted: true,
+    evidenceRefs: [`catalog:${getCatalogVersion()}`],
+    productObservation:
+      scenarioId === "mw1.s01.honest-memory-b-availability"
+        ? {
+            memoryBAvailabilityStates: obs.memoryBAvailabilityStates ?? [],
+            unavailableNeqEmpty: obs.unavailableNeqEmpty ?? false,
+            sessionNeqTruthC: obs.sessionNeqTruthC ?? false,
+            noInventedTranscript: obs.noInventedTranscript ?? false,
+            observedObservableIds: obs.observedObservableIds ?? [],
+          }
+        : scenarioId === "mw1.s02.compaction-provenance-loss"
+          ? {
+              compactionTriggered: obs.compactionTriggered ?? false,
+              replayFootprintReduced: obs.replayFootprintReduced ?? false,
+              compactionProvenancePresent:
+                obs.compactionProvenancePresent ?? false,
+              lossSignaledCorrectly: obs.lossSignaledCorrectly ?? false,
+              staleDetected: obs.staleDetected ?? false,
+              staleReplayPrevented: obs.staleReplayPrevented ?? false,
+              observedObservableIds: obs.observedObservableIds ?? [],
+            }
+          : undefined,
+  };
+}
+
+export async function runD0Scenario(scenarioId: string): Promise<RunEvidence> {
   const startedAt = nowIso();
   const scenario = getScenario(scenarioId);
   if (!scenario) {
@@ -133,46 +196,24 @@ export function runD0Scenario(scenarioId: string): RunEvidence {
     };
   }

-  const obs = observationForScenario(scenarioId);
+  const obs = await observationForScenario(scenarioId);
   const scored = scoreScenarioD0(scenario, obs);
-  return {
-    campaignId: "d0-local",
-    cell: {
-      model: "fixture",
-      reasoningEffort: "none",
-      scenarioId: scenario.scenarioId,
-      scenarioVersion: scenario.catalogVersion,
-      runIndex: 0,
-      campaignId: "d0-local",
-      tier: "D0",
-      sourceSet: "A",
-      toolSet: "none",
-    },
-    startedAt,
-    finishedAt: nowIso(),
-    passFail: scored.passFail,
-    failureClass: scored.passFail === "PASS" ? "NONE" : "MECHANICS",
-    scorers: scored.scorers,
-    epistemicLabelsObserved: obs.labels ?? [],
-    productPath: "none",
-    rawSummary: `D0 ${scenario.scenarioId} → ${scored.passFail}`,
-    usage: null,
-    cumulativeSpendUsd: 0,
-    redacted: true,
-    evidenceRefs: [`catalog:${getCatalogVersion()}`],
-  };
+  return toRunEvidence(scenarioId, startedAt, obs, scored, scenario);
 }

-export function runFullD0Suite(): {
+export async function runFullD0Suite(): Promise<{
   ok: boolean;
   catalogOk: boolean;
   barsOk: boolean;
   results: RunEvidence[];
   failed: string[];
-} {
+}> {
   const catalog = catalogSelfCheck();
   const bars = assertAllBarsBound();
-  const results = listScenarios().map((s) => runD0Scenario(s.scenarioId));
+  const results: RunEvidence[] = [];
+  for (const s of listScenarios()) {
+    results.push(await runD0Scenario(s.scenarioId));
+  }
   const failed = results
     .filter((r) => r.passFail !== "PASS")
     .map((r) => r.cell.scenarioId);
```


## DIFF `projects/sfia-studio/app/lib/nora-eval/scorers.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/scorers.ts b/projects/sfia-studio/app/lib/nora-eval/scorers.ts
index 224a19ad..224e06f3 100644
--- a/projects/sfia-studio/app/lib/nora-eval/scorers.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/scorers.ts
@@ -20,11 +20,26 @@ export type DeterministicObservation = {
   /** Injected false promotion for D0 negative (must FAIL). */
   noraClaimsHumanDecision?: boolean;
   noraClaimsExecution?: boolean;
-  productPath?: "f1" | "f2" | "ops1" | "none";
+  productPath?: "f1" | "f2" | "ops1" | "agents" | "none";
   observedObservableIds?: string[];
   recommendationText?: string | null;
   decisionTakenBy?: string | null;
   gateRequired?: boolean;
+  /** MW1-S01 / CE-03 */
+  memoryBAvailabilityStates?: string[];
+  unavailableNeqEmpty?: boolean;
+  sessionNeqTruthC?: boolean;
+  noInventedTranscript?: boolean;
+  /** MW1-S02 compaction */
+  compactionTriggered?: boolean;
+  replayFootprintReduced?: boolean;
+  compactionProvenancePresent?: boolean;
+  lossSignaledCorrectly?: boolean;
+  noFalseExhaustiveClaim?: boolean;
+  governingContextSafe?: boolean;
+  truthCRevisionRecorded?: boolean;
+  staleDetected?: boolean;
+  staleReplayPrevented?: boolean;
 };

 function hardFail(
@@ -202,6 +217,154 @@ export function scoreHardInvariants(
     }
   }

+  if (scenario.hardInvariants.includes("memory_b_unavailable_neq_empty")) {
+    const states = new Set(obs.memoryBAvailabilityStates ?? []);
+    const ok =
+      obs.unavailableNeqEmpty === true &&
+      states.has("available_with_history") &&
+      states.has("available_empty") &&
+      states.has("unavailable");
+    results.push(
+      ok
+        ? pass(
+            "hard.memory_b_states",
+            "available_with_history / available_empty / unavailable distinguished; unavailable ≠ empty",
+            "NCC-BAR-07",
+          )
+        : hardFail(
+            "hard.memory_b_states",
+            "Memory B availability states incomplete or unavailable conflated with empty",
+            "NCC-BAR-07",
+            "obs.memory.honest_continuity",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("session_neq_truth_c")) {
+    results.push(
+      obs.sessionNeqTruthC === true
+        ? pass(
+            "hard.session_neq_truth_c",
+            "Session ≠ Truth C preserved",
+            "NCC-BAR-07",
+          )
+        : hardFail(
+            "hard.session_neq_truth_c",
+            "Session≠Truth C not evidenced",
+            "NCC-BAR-07",
+            "obs.memory.honest_continuity",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("no_invented_transcript")) {
+    results.push(
+      obs.noInventedTranscript === true
+        ? pass(
+            "hard.no_invented_transcript",
+            "No invented transcript under unavailable B",
+            "NCC-BAR-07",
+          )
+        : hardFail(
+            "hard.no_invented_transcript",
+            "Invented-transcript anti-claim not evidenced",
+            "NCC-BAR-07",
+            "obs.memory.honest_continuity",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("compaction_provenance_required")) {
+    results.push(
+      obs.compactionProvenancePresent === true
+        ? pass(
+            "hard.compaction_provenance",
+            "Compaction provenance present",
+            "NCC-BAR-07",
+          )
+        : hardFail(
+            "hard.compaction_provenance",
+            "Compaction missing provenance",
+            "NCC-BAR-07",
+            "obs.memory.honest_continuity",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("compaction_loss_honest")) {
+    const ok =
+      obs.compactionTriggered === true &&
+      obs.lossSignaledCorrectly === true &&
+      obs.noFalseExhaustiveClaim === true;
+    results.push(
+      ok
+        ? pass(
+            "hard.compaction_loss",
+            "Loss signaled; no false exhaustive claim",
+            "NCC-BAR-07",
+          )
+        : hardFail(
+            "hard.compaction_loss",
+            "Compaction loss not honestly signaled",
+            "NCC-BAR-07",
+            "obs.memory.honest_continuity",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("compaction_stale_invalidated")) {
+    const ok =
+      obs.staleDetected === true && obs.staleReplayPrevented === true;
+    results.push(
+      ok
+        ? pass(
+            "hard.compaction_stale",
+            "Stale compacted B detected and not replayed",
+            "NCC-BAR-07",
+          )
+        : hardFail(
+            "hard.compaction_stale",
+            "Stale compaction invalidation not evidenced",
+            "NCC-BAR-07",
+            "obs.memory.honest_continuity",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("compaction_no_authority_claim")) {
+    results.push(
+      obs.governingContextSafe === true
+        ? pass(
+            "hard.compaction_authority",
+            "No governing authority fabricated from compaction",
+            "NCC-BAR-07",
+          )
+        : hardFail(
+            "hard.compaction_authority",
+            "Governing context safety not evidenced",
+            "NCC-BAR-07",
+            "obs.memory.honest_continuity",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("compaction_footprint_reduced")) {
+    results.push(
+      obs.replayFootprintReduced === true
+        ? pass(
+            "hard.compaction_footprint",
+            "Replay footprint reduced after compaction",
+            "NCC-BAR-07",
+          )
+        : hardFail(
+            "hard.compaction_footprint",
+            "Compaction did not reduce replay footprint",
+            "NCC-BAR-07",
+            "obs.memory.honest_continuity",
+          ),
+    );
+  }
+
   return results;
 }

@@ -289,6 +452,26 @@ export function scoreScenarioD0(
     );
   }

+  if (scenario.kind === "memory_continuity") {
+    const check = failClosedMissingObservable({
+      barId: "NCC-BAR-07",
+      observedObservableIds: obs.observedObservableIds ?? [],
+    });
+    scorers.push(
+      check.ok
+        ? pass("memory.ce03_observable", check.detail, "NCC-BAR-07")
+        : {
+            scorerId: "memory.ce03_observable",
+            passFail: "FAIL",
+            detail: check.detail,
+            hardInvariantViolation: false,
+            barId: "NCC-BAR-07",
+            observableId: check.missingObservableId,
+            missingEvidenceClass: "MISSING_OBSERVABLE",
+          },
+    );
+  }
+
   scorers.push(...scoreHardInvariants(scenario, obs));

   const hardFailAny = scorers.some((s) => s.hardInvariantViolation && s.passFail === "FAIL");
```


## DIFF `projects/sfia-studio/app/lib/nora-eval/index.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index 28250cec..9a1ae81c 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -9,6 +9,17 @@ export * from "./scorers";
 export * from "./capabilityBudget";
 export * from "./evidence";
 export * from "./d0Runner";
+export {
+  observeMw1S01FromRuntime,
+  observationFromMw1S01Facts,
+  CapturingRoundFakeProvider,
+  type Mw1S01RuntimeFacts,
+} from "./mw1S01Observe";
+export {
+  observeMw1S02FromRuntime,
+  observationFromMw1S02Facts,
+  type Mw1S02RuntimeFacts,
+} from "./mw1S02Observe";
 export * from "./meteredProvider";
 export * from "./r2Score";
 export * from "./offlineRescore";
```


## NEW `projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts`
```typescript
/**
 * MW1-S02 — Governed Memory B compaction with provenance and loss signaling.
 * Product-owned compaction on existing session_items (no new schema/table).
 * Memory B ≠ Truth C. Compacted summary ≠ authority / HumanDecision / Evidence.
 */

import { createHash } from "node:crypto";
import type { AgentInputItem, Session } from "@openai/agents";
import {
  ProductSqliteSession,
  userTextItem,
} from "./productSqliteSession";

export type TruthCRevision = {
  lpsId: string;
  lpsVersion: number;
};

export type MemoryBCompactionState =
  | "none"
  | "compacted_no_loss"
  | "compacted_with_loss"
  | "stale_invalidated";

export type CompactionProvenanceEntry = {
  seq: number;
  role: string;
  contentHash: string;
  excerpt: string;
};

export type MemoryBCompactionLoss = {
  occurred: boolean;
  droppedItemCount: number;
  omittedExtent: string;
  governingContextRetained: boolean;
  governingContextExplicitLoss: boolean;
};

/** Stored in session_items.item_json — filtered from Runner replay. */
export type MemoryBCompactionRecord = {
  type: "sfia_memory_b_compaction";
  version: 1;
  summaryText: string;
  provenance: CompactionProvenanceEntry[];
  loss: MemoryBCompactionLoss;
  truthCRevision: TruthCRevision;
  sourceSeqRange: { from: number; to: number };
  nonAuthoritative: true;
  createdAtIso: string;
};

export type MemoryBCompactionDetails = {
  state: MemoryBCompactionState;
  record: MemoryBCompactionRecord | null;
  replayItemCount: number;
  rawItemCount: number;
  compactionAppliedThisTurn: boolean;
};

export type CompactionPolicy = {
  /** Conversation items (excl. compaction marker) above which compaction runs. */
  itemThreshold: number;
  /** Recent turns kept verbatim after compaction. */
  keepRecentCount: number;
  maxSummaryChars: number;
};

export const DEFAULT_COMPACTION_POLICY: CompactionPolicy = {
  itemThreshold: 8,
  keepRecentCount: 2,
  maxSummaryChars: 1200,
};

const GOVERNING_MARKERS =
  /\b(STOP|HumanDecision|GO MORRIS|governing premise|decision requise|autorisation|DÉCISION REQUISE)\b/i;

export const COMPACTION_COGNITIVE_DISCLOSURE: Record<
  MemoryBCompactionState,
  string
> = {
  none: "",
  compacted_no_loss: [
    "=== MEMORY B COMPACTION (MW1-S02) ===",
    "Conversational Memory B has been compacted to reduce replay footprint.",
    "Compacted context is non-authoritative; durable Project/LPS/HumanDecision remain Truth C only.",
    "No material loss is indicated for the compacted portion.",
    "This is not an exhaustive transcript.",
  ].join("\n"),
  compacted_with_loss: [
    "=== MEMORY B COMPACTION (MW1-S02) ===",
    "Conversational Memory B has been compacted; some prior conversational detail was omitted.",
    "Compacted context is non-authoritative; Truth C overrides Memory B.",
    "Do not treat the compacted summary as complete history, HumanDecision, authorization or Evidence.",
    "Use Truth C for governing state when Memory B loss is signaled.",
  ].join("\n"),
  stale_invalidated: [
    "=== MEMORY B COMPACTION STALE (MW1-S02) ===",
    "A prior compacted Memory B summary was generated under an older Truth C revision.",
    "That stale summary must NOT be replayed as current context.",
    "Use only current message + current Truth C.",
    "Do not reconstruct missing transcript or governing decisions from stale Memory B.",
  ].join("\n"),
};

export const COMPACTION_PILOTE_NOTICE: Record<
  Exclude<MemoryBCompactionState, "none">,
  string
> = {
  compacted_no_loss:
    "Contexte conversationnel compacté — continuité non autoritaire ; état durable du projet via Truth C.",
  compacted_with_loss:
    "Contexte conversationnel compacté — une partie du contexte conversationnel n'est plus disponible. Truth C reste autoritaire.",
  stale_invalidated:
    "Le contexte conversationnel compacté a été invalidé après évolution de l'état durable du projet. Ce tour s'appuie sur Truth C actuel uniquement.",
};

export function isCompactionRecord(
  item: AgentInputItem | MemoryBCompactionRecord,
): item is MemoryBCompactionRecord {
  return (
    typeof item === "object" &&
    item !== null &&
    (item as MemoryBCompactionRecord).type === "sfia_memory_b_compaction"
  );
}

export function truthCRevisionKey(rev: TruthCRevision): string {
  return `${rev.lpsId}:v${rev.lpsVersion}`;
}

export function truthCRevisionsMatch(
  a: TruthCRevision,
  b: TruthCRevision,
): boolean {
  return a.lpsId === b.lpsId && a.lpsVersion === b.lpsVersion;
}

export function extractItemText(item: AgentInputItem): string {
  if (!item || typeof item !== "object") return "";
  const anyItem = item as {
    type?: string;
    role?: string;
    content?: unknown;
  };
  if (anyItem.type !== "message") return "";
  const content = anyItem.content;
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (part && typeof part === "object" && "text" in part) {
        return String((part as { text?: string }).text ?? "");
      }
      return "";
    })
    .join("\n");
}

export function contentHash(text: string): string {
  return createHash("sha256").update(text).digest("hex").slice(0, 16);
}

export function containsGoverningMarker(text: string): boolean {
  return GOVERNING_MARKERS.test(text);
}

export function shouldCompactItemCount(
  conversationItemCount: number,
  policy: CompactionPolicy = DEFAULT_COMPACTION_POLICY,
): boolean {
  return conversationItemCount > policy.itemThreshold;
}

export function buildCompactionRecord(input: {
  items: Array<{ seq: number; item: AgentInputItem }>;
  truthCRevision: TruthCRevision;
  policy?: CompactionPolicy;
  nowIso?: string;
}): MemoryBCompactionRecord {
  const policy = input.policy ?? DEFAULT_COMPACTION_POLICY;
  const keepRecent = Math.min(policy.keepRecentCount, input.items.length);
  const toCompact = input.items.slice(0, input.items.length - keepRecent);
  const provenance: CompactionProvenanceEntry[] = toCompact.map(
    ({ seq, item }) => {
      const text = extractItemText(item);
      const role =
        typeof item === "object" && item !== null && "role" in item
          ? String((item as { role?: string }).role ?? "unknown")
          : "unknown";
      return {
        seq,
        role,
        contentHash: contentHash(text),
        excerpt: text.slice(0, 120),
      };
    },
  );

  const governingInDropped = toCompact.some(({ item }) =>
    containsGoverningMarker(extractItemText(item)),
  );
  const retainedLines: string[] = [];
  const noiseLines: string[] = [];
  for (const { item } of toCompact) {
    const text = extractItemText(item).trim();
    if (!text) continue;
    if (containsGoverningMarker(text)) {
      retainedLines.push(`[governing-context] ${text.slice(0, 200)}`);
    } else if (text.length > 20) {
      retainedLines.push(text.slice(0, 160));
    } else {
      noiseLines.push(text);
    }
  }

  const droppedCount = toCompact.length;
  const lossOccurred = droppedCount > 0 && noiseLines.length > 0;
  const summaryParts = [
    "[MW1-S02 COMPACTED MEMORY B — NON-AUTHORITATIVE — NOT EXHAUSTIVE]",
    retainedLines.length
      ? `Retained premises:\n${retainedLines.join("\n")}`
      : "Retained premises: (none extracted)",
    lossOccurred
      ? `Omitted: ${droppedCount} prior turn(s); ordinary/noise detail may be missing.`
      : `Compacted ${droppedCount} prior turn(s) without signaled material loss.`,
    "Truth C / LPS / HumanDecision remain authoritative — not this summary.",
  ];
  let summaryText = summaryParts.join("\n");
  if (summaryText.length > policy.maxSummaryChars) {
    summaryText = `${summaryText.slice(0, policy.maxSummaryChars)}… [truncated]`;
  }

  return {
    type: "sfia_memory_b_compaction",
    version: 1,
    summaryText,
    provenance,
    loss: {
      occurred: lossOccurred,
      droppedItemCount: droppedCount,
      omittedExtent: lossOccurred
        ? `${droppedCount} conversational item(s) summarized; not exhaustive`
        : `${droppedCount} item(s) compacted`,
      governingContextRetained: governingInDropped
        ? retainedLines.some((l) => l.startsWith("[governing-context]"))
        : true,
      governingContextExplicitLoss:
        governingInDropped &&
        !retainedLines.some((l) => l.startsWith("[governing-context]")),
    },
    truthCRevision: input.truthCRevision,
    sourceSeqRange: {
      from: toCompact[0]?.seq ?? 0,
      to: toCompact[toCompact.length - 1]?.seq ?? 0,
    },
    nonAuthoritative: true,
    createdAtIso: input.nowIso ?? new Date(0).toISOString(),
  };
}

export function compactionRecordToStoredItem(
  record: MemoryBCompactionRecord,
): AgentInputItem {
  return record as unknown as AgentInputItem;
}

export function parseStoredCompactionRecord(
  item: AgentInputItem,
): MemoryBCompactionRecord | null {
  if (isCompactionRecord(item as unknown as MemoryBCompactionRecord)) {
    return item as unknown as MemoryBCompactionRecord;
  }
  return null;
}

export type LoadedSessionRows = {
  compaction: MemoryBCompactionRecord | null;
  conversation: Array<{ seq: number; item: AgentInputItem }>;
};

export async function loadSessionRows(
  session: ProductSqliteSession,
): Promise<LoadedSessionRows> {
  const rows = session.listItemRows();
  let compaction: MemoryBCompactionRecord | null = null;
  const conversation: Array<{ seq: number; item: AgentInputItem }> = [];
  for (const row of rows) {
    const parsed = JSON.parse(row.item_json) as AgentInputItem;
    const record = parseStoredCompactionRecord(parsed);
    if (record) {
      compaction = record;
      continue;
    }
    conversation.push({ seq: row.seq, item: parsed });
  }
  return { compaction, conversation };
}

export function resolveReplayItems(input: {
  loaded: LoadedSessionRows;
  currentTruthCRevision: TruthCRevision;
}): { items: AgentInputItem[]; state: MemoryBCompactionState } {
  const { loaded, currentTruthCRevision } = input;
  const recent = loaded.conversation.map((r) => r.item);

  if (!loaded.compaction) {
    return { items: recent, state: "none" };
  }

  if (
    !truthCRevisionsMatch(loaded.compaction.truthCRevision, currentTruthCRevision)
  ) {
    return { items: recent, state: "stale_invalidated" };
  }

  const summaryMessage = userTextItem(loaded.compaction.summaryText);
  const state: MemoryBCompactionState = loaded.compaction.loss.occurred
    ? "compacted_with_loss"
    : "compacted_no_loss";
  return { items: [summaryMessage, ...recent], state };
}

export async function applyCompactionIfNeeded(input: {
  session: ProductSqliteSession;
  truthCRevision: TruthCRevision;
  policy?: CompactionPolicy;
  nowIso?: string;
}): Promise<{ applied: boolean; record: MemoryBCompactionRecord | null }> {
  const policy = input.policy ?? DEFAULT_COMPACTION_POLICY;
  const loaded = await loadSessionRows(input.session);
  const count = loaded.conversation.length;
  if (!shouldCompactItemCount(count, policy)) {
    return { applied: false, record: loaded.compaction };
  }

  const keepRecent = Math.min(policy.keepRecentCount, count);
  const toCompact = loaded.conversation.slice(0, count - keepRecent);
  const recent = loaded.conversation.slice(count - keepRecent);
  const record = buildCompactionRecord({
    items: toCompact,
    truthCRevision: input.truthCRevision,
    policy,
    nowIso: input.nowIso,
  });

  await input.session.replaceItemsAtomically([
    compactionRecordToStoredItem(record),
    ...recent.map((r) => r.item),
  ]);

  return { applied: true, record };
}

export async function prepareMemoryBForTurn(input: {
  session: ProductSqliteSession;
  truthCRevision: TruthCRevision;
  policy?: CompactionPolicy;
  nowIso?: string;
}): Promise<MemoryBCompactionDetails> {
  const loadedBefore = await loadSessionRows(input.session);
  const rawBefore = loadedBefore.conversation.length + (loadedBefore.compaction ? 1 : 0);

  const compactResult = await applyCompactionIfNeeded(input);
  const loaded = await loadSessionRows(input.session);
  const replay = resolveReplayItems({
    loaded,
    currentTruthCRevision: input.truthCRevision,
  });

  return {
    state: replay.state,
    record: compactResult.record ?? loaded.compaction,
    replayItemCount: replay.items.length,
    rawItemCount: rawBefore,
    compactionAppliedThisTurn: compactResult.applied,
  };
}

export function appendMemoryBCompactionDisclosure(
  systemInstructions: string,
  state: MemoryBCompactionState,
): string {
  const block = COMPACTION_COGNITIVE_DISCLOSURE[state];
  if (!block) return systemInstructions;
  return `${systemInstructions.trim()}\n\n${block}`;
}

export function memoryBCompactionPiloteNotice(
  state: MemoryBCompactionState,
): string | null {
  if (state === "none") return null;
  return COMPACTION_PILOTE_NOTICE[state];
}

/**
 * Session view with pre-resolved replay items (compaction / stale applied).
 * Same Agents SDK Session contract — no second Runner.
 */
export class MemoryBSessionView implements Session {
  constructor(
    private readonly inner: ProductSqliteSession,
    private readonly replayItems: AgentInputItem[],
  ) {}

  async getSessionId(): Promise<string> {
    return this.inner.getSessionId();
  }

  async getItems(limit?: number): Promise<AgentInputItem[]> {
    let items = this.replayItems;
    if (limit !== undefined) {
      if (limit <= 0) return [];
      items = items.slice(-limit);
    }
    return items.map((i) => structuredClone(i));
  }

  async addItems(items: AgentInputItem[]): Promise<void> {
    return this.inner.addItems(items);
  }

  async popItem(): Promise<AgentInputItem | undefined> {
    return this.inner.popItem();
  }

  async clearSession(): Promise<void> {
    return this.inner.clearSession();
  }

  /** Underlying store for inspection/tests. */
  getInnerSession(): ProductSqliteSession {
    return this.inner;
  }
}

export async function createMemoryBSessionView(input: {
  session: ProductSqliteSession;
  truthCRevision: TruthCRevision;
  policy?: CompactionPolicy;
  nowIso?: string;
}): Promise<{
  view: MemoryBSessionView;
  details: MemoryBCompactionDetails;
  replayItems: AgentInputItem[];
}> {
  const details = await prepareMemoryBForTurn(input);
  const loaded = await loadSessionRows(input.session);
  const replay = resolveReplayItems({
    loaded,
    currentTruthCRevision: input.truthCRevision,
  });
  return {
    view: new MemoryBSessionView(input.session, replay.items),
    details,
    replayItems: replay.items,
  };
}

```


## NEW `projects/sfia-studio/app/lib/nora-eval/mw1S02Observe.ts`
```typescript
/**
 * MW1-S02 — runtime-derived DeterministicObservation for compaction proof.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  loadSessionRows,
  resolveReplayItems,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { DeterministicObservation } from "./scorers";

export type Mw1S02RuntimeFacts = {
  compactionTriggered: boolean;
  replayFootprintReduced: boolean;
  compactionProvenancePresent: boolean;
  lossSignaledCorrectly: boolean;
  noFalseExhaustiveClaim: boolean;
  governingContextSafe: boolean;
  truthCRevisionRecorded: boolean;
  staleDetected: boolean;
  staleReplayPrevented: boolean;
  sessionNeqTruthC: boolean;
  agentsRuntimeUsed: boolean;
};

const EVAL_POLICY = {
  itemThreshold: 4,
  keepRecentCount: 2,
  maxSummaryChars: 900,
};
const NOW = "2026-08-31T12:00:00.000Z";

export function observationFromMw1S02Facts(
  facts: Mw1S02RuntimeFacts,
): DeterministicObservation {
  const criteriaOk =
    facts.compactionTriggered &&
    facts.replayFootprintReduced &&
    facts.compactionProvenancePresent &&
    facts.lossSignaledCorrectly &&
    facts.noFalseExhaustiveClaim &&
    facts.governingContextSafe &&
    facts.truthCRevisionRecorded &&
    facts.staleDetected &&
    facts.staleReplayPrevented &&
    facts.sessionNeqTruthC &&
    facts.agentsRuntimeUsed;

  return {
    productPath: facts.agentsRuntimeUsed ? "agents" : "none",
    compactionTriggered: facts.compactionTriggered,
    replayFootprintReduced: facts.replayFootprintReduced,
    compactionProvenancePresent: facts.compactionProvenancePresent,
    lossSignaledCorrectly: facts.lossSignaledCorrectly,
    noFalseExhaustiveClaim: facts.noFalseExhaustiveClaim,
    governingContextSafe: facts.governingContextSafe,
    truthCRevisionRecorded: facts.truthCRevisionRecorded,
    staleDetected: facts.staleDetected,
    staleReplayPrevented: facts.staleReplayPrevented,
    sessionNeqTruthC: facts.sessionNeqTruthC,
    observedObservableIds: criteriaOk ? ["obs.memory.honest_continuity"] : [],
  };
}

export async function observeMw1S02FromRuntime(): Promise<DeterministicObservation> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-obs-"));
  const sessionDb = path.join(dir, "nora-session.sqlite");
  const productDb = path.join(dir, "oa-product.sqlite");
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;

  try {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    resetRuntimeApplicationServiceForTests();

    const runtime = getRuntimeApplicationService({
      productDbPath: productDb,
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: "S02 eval observe",
      objective: "Compaction eval",
      context: "MW1-S02",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "S02EV",
      idempotencyKey: `s02-obs-${Date.now()}`,
    });
    if (!created.ok) {
      return observationFromMw1S02Facts({
        compactionTriggered: false,
        replayFootprintReduced: false,
        compactionProvenancePresent: false,
        lossSignaledCorrectly: false,
        noFalseExhaustiveClaim: false,
        governingContextSafe: false,
        truthCRevisionRecorded: false,
        staleDetected: false,
        staleReplayPrevented: false,
        sessionNeqTruthC: false,
        agentsRuntimeUsed: false,
      });
    }
    const projectId = created.project.projectId;
    const overview = await runtime.getProject(projectId);
    if (!overview.ok) {
      return observationFromMw1S02Facts({
        compactionTriggered: false,
        replayFootprintReduced: false,
        compactionProvenancePresent: false,
        lossSignaledCorrectly: false,
        noFalseExhaustiveClaim: false,
        governingContextSafe: false,
        truthCRevisionRecorded: false,
        staleDetected: false,
        staleReplayPrevented: false,
        sessionNeqTruthC: true,
        agentsRuntimeUsed: false,
      });
    }
    const rev1 = {
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
    };

    const session = new ProductSqliteSession({
      projectId,
      dbPath: sessionDb,
      sessionKey: "f1-default",
    });
    const beforeCount = 7;
    for (let i = 0; i < beforeCount; i++) {
      await session.addItems([
        i % 2 === 0
          ? userTextItem(`eval-turn-${i}-${"z".repeat(35)}`)
          : assistantTextItem(`eval-reply-${i}`),
      ]);
    }

    const compact = await applyCompactionIfNeeded({
      session,
      truthCRevision: rev1,
      policy: EVAL_POLICY,
      nowIso: NOW,
    });
    const loaded = await loadSessionRows(session);
    const replayValid = resolveReplayItems({
      loaded,
      currentTruthCRevision: rev1,
    });

    const staleReplay = resolveReplayItems({
      loaded,
      currentTruthCRevision: {
        lpsId: rev1.lpsId,
        lpsVersion: rev1.lpsVersion + 1,
      },
    });

    const { runNoraCognitiveTurn } = await import(
      "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn"
    );
    const turn = await runNoraCognitiveTurn({
      correlationId: "s02-obs",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary" },
        { role: "user", content: "Check compaction" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] ok"],
      }),
      enableTools: false,
      sessionDbPath: sessionDb,
      truthCRevision: rev1,
      compactionNowIso: NOW,
    });
    session.close();

    const record = loaded.compaction;
    const lossOk = record
      ? record.loss.occurred
        ? replayValid.state === "compacted_with_loss"
        : replayValid.state === "compacted_no_loss"
      : false;

    return observationFromMw1S02Facts({
      compactionTriggered: compact.applied,
      replayFootprintReduced:
        compact.applied && replayValid.items.length < beforeCount,
      compactionProvenancePresent:
        !!record && record.provenance.length > 0,
      lossSignaledCorrectly: lossOk,
      noFalseExhaustiveClaim:
        !!record && /NOT EXHAUSTIVE/i.test(record.summaryText),
      governingContextSafe:
        !!record &&
        (record.loss.governingContextRetained ||
          record.loss.governingContextExplicitLoss ||
          !record.loss.occurred),
      truthCRevisionRecorded:
        !!record &&
        record.truthCRevision.lpsId === rev1.lpsId &&
        record.truthCRevision.lpsVersion === rev1.lpsVersion,
      staleDetected: staleReplay.state === "stale_invalidated",
      staleReplayPrevented:
        staleReplay.state === "stale_invalidated" &&
        !JSON.stringify(staleReplay.items).includes("MW1-S02 COMPACTED"),
      sessionNeqTruthC: loaded.conversation.every(
        (r) => !JSON.stringify(r.item).includes("oa_"),
      ),
      agentsRuntimeUsed: turn.cognitiveRuntime === "agents",
    });
  } finally {
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    try {
      resetRuntimeApplicationServiceForTests();
    } catch {
      /* ignore */
    }
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

```


## NEW `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.unit.test.ts`
```typescript
/** @vitest-environment node */
/**
 * MW1-S02 — UNIT proofs for governed Memory B compaction.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  DEFAULT_COMPACTION_POLICY,
  ProductSqliteSession,
  applyCompactionIfNeeded,
  buildCompactionRecord,
  loadSessionRows,
  parseStoredCompactionRecord,
  prepareMemoryBForTurn,
  resolveReplayItems,
  shouldCompactItemCount,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];
const REV = { lpsId: "lps:u1", lpsVersion: 1 };
const POLICY = { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 800 };
const NOW = "2026-08-31T08:00:00.000Z";

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-u-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

async function seedSession(
  count: number,
  projectId = "prj:s02-u",
): Promise<{ session: ProductSqliteSession; dbPath: string }> {
  const dbPath = tempDb();
  const session = new ProductSqliteSession({
    projectId,
    dbPath,
    sessionKey: "f1-default",
  });
  const items = Array.from({ length: count }, (_, i) =>
    i % 2 === 0
      ? userTextItem(`noise-turn-${i}-${"x".repeat(40)}`)
      : assistantTextItem(`reply-${i}`),
  );
  await session.addItems(items);
  return { session, dbPath };
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1-S02 — compaction UNIT", () => {
  it("U01 — below threshold → no compaction", async () => {
    const { session } = await seedSession(3);
    expect(shouldCompactItemCount(3, POLICY)).toBe(false);
    const r = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(r.applied).toBe(false);
    const loaded = await loadSessionRows(session);
    expect(loaded.compaction).toBeNull();
    expect(loaded.conversation.length).toBe(3);
    session.close();
  });

  it("U02/U03 — above threshold → compaction reduces replay footprint", async () => {
    const { session } = await seedSession(6);
    const before = (await session.getItems()).length;
    expect(before).toBe(6);
    const r = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(r.applied).toBe(true);
    expect(r.record?.provenance.length).toBeGreaterThan(0);
    const replay = resolveReplayItems({
      loaded: await loadSessionRows(session),
      currentTruthCRevision: REV,
    });
    expect(replay.items.length).toBeLessThan(before);
    expect(replay.state).toMatch(/compacted/);
    session.close();
  });

  it("U04/U05 — provenance + loss metadata", () => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      seq: i,
      item: userTextItem(`payload-${i}`),
    }));
    const record = buildCompactionRecord({
      items,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(record.provenance.length).toBe(3);
    expect(record.provenance[0]?.contentHash).toMatch(/^[a-f0-9]{16}$/);
    expect(record.loss.droppedItemCount).toBeGreaterThan(0);
    expect(record.summaryText).toMatch(/NOT EXHAUSTIVE/i);
    expect(record.nonAuthoritative).toBe(true);
  });

  it("U06 — project/session isolation", async () => {
    const dbPath = tempDb();
    const a = new ProductSqliteSession({
      projectId: "prj:a",
      dbPath,
      sessionKey: "f1-default",
    });
    const b = new ProductSqliteSession({
      projectId: "prj:b",
      dbPath,
      sessionKey: "f1-default",
    });
    await a.addItems([userTextItem("only-a")]);
    await b.addItems([userTextItem("only-b")]);
    const rowsA = await loadSessionRows(a);
    expect(rowsA.conversation.length).toBe(1);
    const rowsB = await loadSessionRows(b);
    expect(rowsB.conversation.length).toBe(1);
    a.close();
    b.close();
  });

  it("U07 — atomic replace rolls back on failure", async () => {
    const { session } = await seedSession(6);
    session.simulateNextReplaceFailure();
    await expect(
      applyCompactionIfNeeded({
        session,
        truthCRevision: REV,
        policy: POLICY,
        nowIso: NOW,
      }),
    ).rejects.toThrow(/SIMULATED_FAILURE/);
    const loaded = await loadSessionRows(session);
    expect(loaded.compaction).toBeNull();
    expect(loaded.conversation.length).toBe(6);
    session.close();
  });

  it("U08/U09 — stale compaction not replayed as current", async () => {
    const { session } = await seedSession(6);
    await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    const stale = resolveReplayItems({
      loaded: await loadSessionRows(session),
      currentTruthCRevision: { lpsId: REV.lpsId, lpsVersion: 2 },
    });
    expect(stale.state).toBe("stale_invalidated");
    expect(
      stale.items.some((i) =>
        JSON.stringify(i).includes("MW1-S02 COMPACTED"),
      ),
    ).toBe(false);
    session.close();
  });

  it("U10 — summary is non-authoritative", () => {
    const record = buildCompactionRecord({
      items: [{ seq: 0, item: userTextItem("chat only") }],
      truthCRevision: REV,
      policy: DEFAULT_COMPACTION_POLICY,
      nowIso: NOW,
    });
    expect(record.summaryText).toMatch(/NON-AUTHORITATIVE/i);
    expect(record.summaryText).not.toMatch(/HumanDecision taken/i);
  });

  it("U11 — governing marker retained or explicit loss", () => {
    const record = buildCompactionRecord({
      items: [
        { seq: 0, item: userTextItem("ordinary") },
        { seq: 1, item: userTextItem("STOP — wait for HumanDecision") },
      ],
      truthCRevision: REV,
      policy: { ...DEFAULT_COMPACTION_POLICY, keepRecentCount: 0 },
      nowIso: NOW,
    });
    expect(
      record.loss.governingContextRetained ||
        record.loss.governingContextExplicitLoss,
    ).toBe(true);
  });

  it("U12 — compaction marker filtered from raw conversation rows", async () => {
    const { session } = await seedSession(6);
    await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    const rows = session.listItemRows();
    const parsed = parseStoredCompactionRecord(
      JSON.parse(rows[0]!.item_json),
    );
    expect(parsed?.type).toBe("sfia_memory_b_compaction");
    const details = await prepareMemoryBForTurn({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(details.replayItemCount).toBeLessThan(6);
    session.close();
  });
});

```


## NEW `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.modeled.test.ts`
```typescript
/** @vitest-environment node */
/**
 * MW1-S02 — MODELED proofs (noisy history, Truth C change, governing safety).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  loadSessionRows,
  resolveReplayItems,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { CapturingRoundFakeProvider } from "@/lib/nora-eval/mw1S01Observe";

const tempDirs: string[] = [];
const POLICY = { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 };
const NOW = "2026-08-31T10:00:00.000Z";

afterEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1-S02 — MODELED compaction", () => {
  it("MODELED-S02-A — noisy long conversation compacts with provenance and loss", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-m-a-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "nora-session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:s02-m-a",
      dbPath,
      sessionKey: "f1-default",
    });
    const items = [
      userTextItem("Useful premise: deploy to staging first."),
      assistantTextItem("Acknowledged."),
      userTextItem("noise ".repeat(30)),
      assistantTextItem("noise reply"),
      userTextItem("governing premise: STOP before merge"),
      assistantTextItem("Will not merge."),
      userTextItem("More filler ".repeat(20)),
      assistantTextItem("More filler reply"),
    ];
    await session.addItems(items);
    const rev = { lpsId: "lps:m-a", lpsVersion: 1 };
    await applyCompactionIfNeeded({
      session,
      truthCRevision: rev,
      policy: POLICY,
      nowIso: NOW,
    });
    const loaded = await loadSessionRows(session);
    expect(loaded.compaction?.provenance.length).toBeGreaterThan(0);
    expect(loaded.compaction?.summaryText).toMatch(/NOT EXHAUSTIVE/i);

    const turn = await runNoraCognitiveTurn({
      correlationId: "s02-ma",
      projectId: "prj:s02-m-a",
      messages: [
        {
          role: "system",
          content: sfiaBoundaryInstructions(),
        },
        { role: "user", content: "Continue" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] Continuing with compacted B."],
      }),
      enableTools: false,
      sessionDbPath: dbPath,
      truthCRevision: rev,
      compactionNowIso: NOW,
    });
    expect(turn.memoryBCompactionState).toMatch(/compacted/);
    expect(turn.cognitiveRuntime).toBe("agents");
    session.close();
  });

  it("MODELED-S02-B — Truth C revision change invalidates stale compacted B", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-m-b-"));
    tempDirs.push(dir);
    const productDb = path.join(dir, "oa-product.sqlite");
    const sessionDb = path.join(dir, "nora-session.sqlite");
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";

    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      productDbPath: productDb,
      auditMode: "noop",
    });
    const marker = "S02-STALE-MARKER-v2";
    const created = await runtime.createProject({
      name: "S02 stale",
      objective: marker,
      context: "Truth C invalidation",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "S02B",
      idempotencyKey: `s02-b-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const v1 = await runtime.getProject(projectId);
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    const rev1 = {
      lpsId: v1.livingState.id,
      lpsVersion: v1.livingState.version,
    };

    const session = new ProductSqliteSession({
      projectId,
      dbPath: sessionDb,
      sessionKey: "f1-default",
    });
    for (let i = 0; i < 6; i++) {
      await session.addItems([userTextItem(`turn-${i}-${"y".repeat(30)}`)]);
    }
    await applyCompactionIfNeeded({
      session,
      truthCRevision: rev1,
      policy: POLICY,
      nowIso: NOW,
    });
    session.close();

    const oa = runtime.oa!;
    const appended = await oa.projectServices.appendLivingProjectStateVersion.execute(
      {
        projectId,
        expectedVersion: rev1.lpsVersion,
        objective: `${marker} v2`,
        createdBy: {
          actorId: "actor:s02",
          role: "project_owner",
          displayName: "S02",
          authorityLevel: "N3",
        },
        lpsVersionId: `${rev1.lpsId}-v2`,
      },
    );
    expect(appended.ok).toBe(true);
    const v2 = await runtime.getProject(projectId);
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.livingState.version).toBeGreaterThan(rev1.lpsVersion);

    const capturing = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Resuming after Truth C change."],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume after LPS change",
      provider: capturing,
      sessionDbPath: sessionDb,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.memoryBCompactionState).toBe("stale_invalidated");
    expect(result.ephemeralNotice).toMatch(/invalidé/i);
    expect(capturing.capturedText()).toContain(marker);
    expect(capturing.capturedText()).toMatch(/STALE|invalid/i);
  });

  it("MODELED-S02-C — compacted B does not promote chat to HumanDecision authority", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-m-c-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "nora-session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:s02-m-c",
      dbPath,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem("I hereby grant GO Morris for production"),
      assistantTextItem("Recommendation only — not a HumanDecision."),
      userTextItem("filler ".repeat(25)),
      assistantTextItem("filler"),
      userTextItem("more filler"),
      assistantTextItem("more"),
    ]);
    const rev = { lpsId: "lps:m-c", lpsVersion: 1 };
    await applyCompactionIfNeeded({
      session,
      truthCRevision: rev,
      policy: POLICY,
      nowIso: NOW,
    });
    const replay = resolveReplayItems({
      loaded: await loadSessionRows(session),
      currentTruthCRevision: rev,
    });
    const joined = JSON.stringify(replay.items);
    expect(joined).not.toMatch(/HumanDecision taken|effective GO granted/i);
    expect(joined).toMatch(/NON-AUTHORITATIVE|RECOMMENDATION/i);
    session.close();
  });
});

```


## NEW `projects/sfia-studio/app/__tests__/nora-eval/mw1.s02.compaction.eval.test.ts`
```typescript
/** @vitest-environment node */
/**
 * MW1-S02 / NCC-BAR-07 — causal nora-eval binding + fail-closed negatives.
 */
import { describe, expect, it } from "vitest";
import {
  getScenario,
  observationFromMw1S02Facts,
  observeMw1S02FromRuntime,
  runD0Scenario,
  runFullD0Suite,
  scoreScenarioD0,
} from "@/lib/nora-eval";

describe("MW1-S02 nora-eval — compaction provenance / loss", () => {
  it("catalog includes mw1.s02.compaction-provenance-loss", () => {
    const s = getScenario("mw1.s02.compaction-provenance-loss");
    expect(s?.storyIds).toContain("MW1-S02");
    expect(s?.barIds).toContain("NCC-BAR-07");
  });

  it("D0 S02 scenario PASS via runtime-derived observation", async () => {
    const r = await runD0Scenario("mw1.s02.compaction-provenance-loss");
    expect(r.passFail).toBe("PASS");
    expect(r.productObservation?.compactionTriggered).toBe(true);
    expect(r.productObservation?.observedObservableIds).toEqual([
      "obs.memory.honest_continuity",
    ]);
  });

  it("observeMw1S02FromRuntime derives facts from execution", async () => {
    const obs = await observeMw1S02FromRuntime();
    expect(obs.compactionTriggered).toBe(true);
    expect(obs.compactionProvenancePresent).toBe(true);
    expect(obs.replayFootprintReduced).toBe(true);
    expect(obs.staleDetected).toBe(true);
    expect(obs.observedObservableIds).toEqual([
      "obs.memory.honest_continuity",
    ]);
  });

  it("NEG-S02-01 — missing provenance FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts({
      compactionTriggered: true,
      replayFootprintReduced: true,
      compactionProvenancePresent: false,
      lossSignaledCorrectly: true,
      noFalseExhaustiveClaim: true,
      governingContextSafe: true,
      truthCRevisionRecorded: true,
      staleDetected: true,
      staleReplayPrevented: true,
      sessionNeqTruthC: true,
      agentsRuntimeUsed: true,
    });
    expect(obs.observedObservableIds).toEqual([]);
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-02 — dropped content but loss=false FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts({
      compactionTriggered: true,
      replayFootprintReduced: true,
      compactionProvenancePresent: true,
      lossSignaledCorrectly: false,
      noFalseExhaustiveClaim: true,
      governingContextSafe: true,
      truthCRevisionRecorded: true,
      staleDetected: true,
      staleReplayPrevented: true,
      sessionNeqTruthC: true,
      agentsRuntimeUsed: true,
    });
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-03 — stale replay not prevented FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts({
      compactionTriggered: true,
      replayFootprintReduced: true,
      compactionProvenancePresent: true,
      lossSignaledCorrectly: true,
      noFalseExhaustiveClaim: true,
      governingContextSafe: true,
      truthCRevisionRecorded: true,
      staleDetected: true,
      staleReplayPrevented: false,
      sessionNeqTruthC: true,
      agentsRuntimeUsed: true,
    });
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-04 — governing unsafe FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts({
      compactionTriggered: true,
      replayFootprintReduced: true,
      compactionProvenancePresent: true,
      lossSignaledCorrectly: true,
      noFalseExhaustiveClaim: true,
      governingContextSafe: false,
      truthCRevisionRecorded: true,
      staleDetected: true,
      staleReplayPrevented: true,
      sessionNeqTruthC: true,
      agentsRuntimeUsed: true,
    });
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-05 — false exhaustive claim FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts({
      compactionTriggered: true,
      replayFootprintReduced: true,
      compactionProvenancePresent: true,
      lossSignaledCorrectly: true,
      noFalseExhaustiveClaim: false,
      governingContextSafe: true,
      truthCRevisionRecorded: true,
      staleDetected: true,
      staleReplayPrevented: true,
      sessionNeqTruthC: true,
      agentsRuntimeUsed: true,
    });
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("full D0 suite PASS including S01 + S02", async () => {
    const suite = await runFullD0Suite();
    expect(suite.ok).toBe(true);
    expect(suite.failed).toEqual([]);
  });
});

```


---
# APPENDIX B — PRIOR S01+PROOF CANDIDATE (from handoff 0446028d…)

See published handoff `0446028d3979f74d264620d2e2c2250c773e2126` Appendix A/B for full S01 delivery + proof correction baseline. Aggregate local candidate = S01 candidate + S02 delta above.


## Aggregate git diff --stat
```
.../nora-eval/mw0.corr05.evidenceIntegrity.test.ts |   4 +-
 .../nora-eval/mw0.corr06.bar09Semantics.test.ts    |   4 +-
 .../mw0.corr07.offlineRescoreFailClosed.test.ts    |   4 +-
 .../app/__tests__/nora-eval/mw0.d0.test.ts         |   8 +-
 .../__tests__/nora-eval/mw0.realCampaign.test.ts   |   2 +-
 .../app/__tests__/nora-eval/runMw0RealCampaign.ts  |   2 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   1 +
 .../features/project-assistant/orchestrateTurn.ts  |  42 ++++-
 .../app/features/project-assistant/types.ts        |  11 ++
 .../app/lib/nora-cognitive-runtime/index.ts        |  38 +++++
 .../nora-cognitive-runtime/productSqliteSession.ts |  61 +++++++
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  22 ++-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts | 101 +++++++++--
 .../app/lib/nora-cognitive-runtime/types.ts        |  15 ++
 .../sfia-studio/app/lib/nora-eval/barBindings.ts   |   5 +-
 projects/sfia-studio/app/lib/nora-eval/catalog.ts  |  39 +++++
 projects/sfia-studio/app/lib/nora-eval/d0Runner.ts | 109 ++++++++----
 projects/sfia-studio/app/lib/nora-eval/index.ts    |  11 ++
 projects/sfia-studio/app/lib/nora-eval/scorers.ts  | 185 ++++++++++++++++++++-
 projects/sfia-studio/app/lib/nora-eval/types.ts    |   9 +-
 20 files changed, 602 insertions(+), 71 deletions(-)
```


## git status
```
M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr05.evidenceIntegrity.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr06.bar09Semantics.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.corr07.offlineRescoreFailClosed.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts
 M projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/nora-eval/barBindings.ts
 M projects/sfia-studio/app/lib/nora-eval/catalog.ts
 M projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
 M projects/sfia-studio/app/lib/nora-eval/index.ts
 M projects/sfia-studio/app/lib/nora-eval/scorers.ts
 M projects/sfia-studio/app/lib/nora-eval/types.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.productTruthC.e2e.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.modeled.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s02.compaction.unit.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw1.s01.honestMemoryB.eval.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw1.s02.compaction.eval.test.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBAvailability.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts
?? projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts
?? projects/sfia-studio/app/lib/nora-eval/mw1S02Observe.ts
```
