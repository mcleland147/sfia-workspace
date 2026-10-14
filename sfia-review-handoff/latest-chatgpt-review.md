# P6 NORA EXTENDED COGNITIVE EXECUTION & LIVE ACTIVITY — Review Pack FULL

## A. Horodatage
2026-10-14 14:22:55 CEST

## B. GO Morris
CONSTRUCTION LOCALE AUTHORIZED / CONSUMED — 2026-10-14
Macro-lot unique : Nora Extended Cognitive Execution & Live Activity (Axes A/B/C).
Interdit sans GO distinct : push projet, PR, merge, REAL, mutation Studio :3020 / Human QA DBs, doctrine, runtime v3 adoption.

## C. Repository / Git Truth
- Repository : mcleland147/sfia-workspace
- Worktree isolé : `/Users/morris/Projects/sfia-workspace-p6-nora-extended-execution-live-activity`
- Branche locale : `delivery/sfia-studio-p6-nora-extended-execution-live-activity`
- HEAD local : `5e139627ff515cd36da5ce12d2c22f935adb139f` (= origin/main)
- origin/main : `5e139627ff515cd36da5ce12d2c22f935adb139f` (VÉRIFIÉ — aligné GO entrée 5e139627)
- Review Handoff distant d’entrée : `f76fd4674f98cfaa6a126d5f687b238892da59ba`
- Studio :3020 : **NON MODIFIÉ** — process actif sur `sfia-workspace-studio-runtime-main-bd3f440c` (VÉRIFIÉ)
- Bases Human QA : **NON TOUCHÉES** (VÉRIFIÉ — aucun chemin rec01 écrit)

Note Git Truth : worktree avait été ouvert par erreur sur `fix/p6-real-observability-option-b` @ b6eb7862 (4 commits derrière main). Remédiation dans le macro-lot : checkout de la branche delivery @ main + réapplication patch WIP (VÉRIFIÉ).

### git status --short (fin construction)
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts
 M projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/memoryEventSink.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/sendProjectAssistantTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts
 M projects/sfia-studio/app/lib/platform/tools/types.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/missionProgressGuard.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.extendedCorpusCaps.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/sendCancellableAssistantTurn.ndjson.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/stopAvailableEarly.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/liveActivityEvents.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/liveActivityEvents.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/missionProgressGuard.ts

```

## D. Sources lues
- Build Doctrine / Convergence Roadmap / Product Completion C1 / Product Simplification P6
- Doctrine Studio v3 (épistémologie / artifacts — applicable)
- Cycle template + routing guide
- Review Handoff initial (branche sfia/review-handoff)
- Code : `nora-cognitive-runtime/`, `platform/tools/`, `project-assistant/`, `pre-m6-product-ui/`
- OpenAI Agents JS guides (streaming / running / sessions) + package installé

## E. Convergence
- Milestone : P6 Global Integrated Product QA — **NOT PASSED** (entrée / sortie)
- Option B : INTEGRATED ON MAIN — KEEP
- O2 : INTEGRATED / POST-MERGE VERIFIED — KEEP
- Runtime v3 : NON ADOPTED — KEEP
- Capacité v3 ciblée : Collaboration Nora–Pilote missions longues + provenance + continuité + visibilité + contrôle humain

## F. Capacité v3 / milestone
Collaboration Nora–Pilote sur missions cognitives longues, avec provenance, continuité, visibilité live et arrêt réel — correction Product intégrée, **pas** P6 GLOBAL PASS.

## G. Diagnostic T2 (Human QA observation → causes)
| Gap | Cause (VÉRIFIÉ code) | Preuve | Correction minimale | Test |
|-----|----------------------|--------|---------------------|------|
| GAP-A Execution budget | Ceiling Product 10 + bases Focused/Deep trop bas pour multi-doc | `ADAPTIVE_MAX_TURNS_CEILING` was 10 | Ceiling 24 ; Focused 10 / Deep 16 / HA 20 ; bumps 16/14/10 ; segments 8 | adaptiveBudget + p1p2 DET |
| GAP-B Documentary corpus | `CT_MAX_TOOL_RESULT_CHARS=12000`, `CT_DEFAULT_READ_MAX_BYTES=32768` | types.ts historique | 100_000 / 200_000 (caps finis) | min09 + extendedCorpusCaps |
| GAP-C Live activity | Events EventSink non transportés au navigateur pendant le turn | route send JSON-only | NDJSON progressive + onLiveActivity + thread details | liveActivity + NDJSON DET |
| GAP-D Stop | `setCancellable(true)` seulement dans `startTransition` → UI “Nora travaille” + Envoyer | useProductConversation | cancellable avant startTransition ; stopAvailable = cancellable && !blocked && !f3Busy | stopAvailableEarly DET |

T2 OpenAI REAL : **NON RELANCÉ** (interdit).

## H. Diagnostic bouton Arrêter
Cause : race UI — état activité thread dérivé de busy/uiState avant que `cancellable` soit vrai.
Correction : activer AbortController + `setCancellable(true)` **avant** `startTransition`, clear au terminal.
Transport : `request.signal` → `sendProjectAssistantTurn` → Runner.
Stop ≠ SUCCESS (VÉRIFIÉ contrat existant + terminal activity `stop_confirmed`).

## I. OpenAI Capability Fit (R22)
- `@openai/agents` **0.17.0** (installé) — VÉRIFIÉ
- `openai` **6.48.0** — VÉRIFIÉ
- Primitives utilisées : Runner.run + RunState continuation, AbortSignal, Session ProductSqlite, errorHandlers.maxTurns, EventSink tools
- Compaction native : non adoptée comme preuve de lecture (B11)
- Pas de second Runner / pas de moteur documentaire parallèle

## J. Classification des actifs
| Actif | Décision |
|-------|----------|
| OpenAI Agents Runner | ADAPT (continuation + progress guard) |
| RunState continuation | ADAPT (MAX_SEGMENTS 8) |
| Adaptive Turn Budget | ADAPT |
| GitLocalReadAdapter / prepare / readCoverage | ADAPT (caps) |
| ToolRouter / EventSink | ADAPT (onEmit → live activity) |
| Product transport | ADAPT (NDJSON) |
| ConversationSurface | COMPLETE (activity details + Stop) |
| AbortController | KEEP / CORRECT (timing) |
| Product SQLite / Session | KEEP |
| Option B / O2 | KEEP |

## K. Contrat de budget (delivery parameters — non doctrine universelle)
- Floor 3 / Ceiling **24**
- Routine 5 / Focused **10** / Deep **16** / High-Assurance **20**
- Bumps known-high 16 / medium-doc 14 / mono-doc 10
- CONTINUATION_SEGMENT_MAX_TURNS 5 / CONTINUATION_MAX_SEGMENTS **8**
- MissionProgressGuard repeat limit **3** (targets distincts = progrès)
- Explicit caller maxTurns préservé (tests/eval/campaign)
- Pas de réactivation FinOps T7

## L. Contrat documentaire
- CT_MAX_TOOL_RESULT_CHARS = **100_000**
- CT_DEFAULT_READ_MAX_BYTES = **200_000**
- PARTIAL reste PARTIAL ; pas de faux FULL ; secrets redacted ; paths denied inchangés
- Taille document ≠ taille optimale résultat modèle (enveloppe séparée)

## M. Contrat streaming / événements
Kinds : mission_started, activity_update, tool_started/completed/failed, continuation_started, waiting, stop_requested/confirmed, mission_completed/incomplete/failed
Transport : `Accept: application/x-ndjson` → lignes `{type:activity|result}`
Autorité : résultat Product final seul ; events ≠ HumanDecision / Evidence
Aucun secret / payload doc intégral / chain-of-thought dans events

## N. Contrat Stop
IDLE → Envoyer ; STARTING/WORKING/WAITING/CONTINUING → Arrêter si cancellable
Abort → server signal → Runner ; pas de continuation après stop confirmé ; session récupérable ; pas de SUCCESS sur interrupt

## O. Figma frames / dimensions
- fileKey **m4g8j0gNbEzfIuH6S9AZJF** (VÉRIFIÉ MCP)
- Frame **46:2** « Project Workspace · DP01 v3 · BENCHMARK-ALIGNED · EXPLORATORY » — **1440×1024**
- Composer **46:126** ; Send **46:134** (idle Send only)
- Objects 46:98 / 46:107 présents (Recommendation / ExecutionContract)
- Capture Figma pack : `.tmp-sfia-review/assets/figma-46-2-conversation-surface.png`
- **Delta Product** (absent Figma) : bouton Arrêter, bloc activité live + timeline dépliable, prefers-reduced-motion déjà sur noraActivityTurn
- Runtime isolé screenshot Stop/live : **NON EXÉCUTÉ** (pas de serveur isolé UI lancé ; :3020 protégé) → réserve visuelle

## P. Architecture réutilisée
ConversationSurface + useProductConversation + send route + EventSink + runNoraAgentsTurn continuation + GitLocalReadAdapter — **aucune architecture parallèle**.

## Q. Fichiers modifiés / créés
### Modifiés
 .tmp-sfia-review/chatgpt-review.md                 | 169 +--------------------
 .../p6.nora.maxTurns.documentary.d0.test.ts        |  28 +++-
 ...p6.nora.min09.documentaryReliability.d0.test.ts |  71 ++++++---
 .../p6.nora.p1.adaptiveBudget.d0.test.ts           |  30 ++--
 .../p6.nora.p1p2.documentary.mission.d0.test.ts    |  27 +++-
 .../p6.nora.p1p2.targetedVerification.d0.test.ts   |  69 +++++++--
 .../projects/[projectId]/assistant/send/route.ts   | 147 ++++++++++++++++--
 .../hooks/sendCancellableAssistantTurn.ts          |  81 +++++++++-
 .../hooks/useProductConversation.ts                |  29 +++-
 .../surfaces/ConversationSurface.module.css        |  30 ++++
 .../surfaces/ConversationSurface.tsx               |  23 ++-
 .../features/project-assistant/f2/orchestrateF2.ts |  19 ++-
 .../features/project-assistant/memoryEventSink.ts  |  11 +-
 .../features/project-assistant/orchestrateTurn.ts  |  22 ++-
 .../project-assistant/sendProjectAssistantTurn.ts  |   5 +
 .../nora-cognitive-runtime/adaptiveTurnBudget.ts   |  22 +--
 .../nora-cognitive-runtime/callModelInputFilter.ts |   6 +
 .../controlledContinuation.ts                      |   9 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |  11 ++
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  40 ++++-
 .../lib/nora-cognitive-runtime/sfiaAgentsTools.ts  |  21 ++-
 .../sfia-studio/app/lib/platform/tools/types.ts    |  13 +-
 22 files changed, 622 insertions(+), 261 deletions(-)


### Créés (untracked)
```
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/missionProgressGuard.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.extendedCorpusCaps.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/sendCancellableAssistantTurn.ndjson.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/stopAvailableEarly.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/liveActivityEvents.d0.test.ts
projects/sfia-studio/app/features/project-assistant/liveActivityEvents.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/missionProgressGuard.ts
```

## R. Diff complet exploitable
### New files
```
===== NEW FILE: liveActivityEvents.ts =====
/**
 * P6 — Product live conversational activity events (browser-safe).
 * Intermediate observability only — never HumanDecision / Evidence / SUCCESS.
 */

export type NoraLiveActivityKind =
  | "mission_started"
  | "activity_update"
  | "tool_started"
  | "tool_completed"
  | "tool_failed"
  | "continuation_started"
  | "waiting"
  | "stop_requested"
  | "stop_confirmed"
  | "mission_completed"
  | "mission_incomplete"
  | "mission_failed";

export type NoraLiveActivityEvent = {
  kind: NoraLiveActivityKind;
  /** Stable ordinal within one mission transport. */
  seq: number;
  at: string;
  /** Short Pilote-facing label — never secrets / full docs / private chain-of-thought. */
  label: string;
  /** Optional verified tool name when event is tool-bound. */
  toolName?: string;
  /** Optional path / source identity when tool-bound and safe. */
  sourcePath?: string;
};

export function isNoraLiveActivityEvent(
  value: unknown,
): value is NoraLiveActivityEvent {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const row = value as Record<string, unknown>;
  return (
    typeof row.kind === "string" &&
    typeof row.seq === "number" &&
    Number.isFinite(row.seq) &&
    typeof row.at === "string" &&
    typeof row.label === "string" &&
    row.label.length > 0 &&
    row.label.length < 280
  );
}

/** Map redacted ToolRouter EventSink emissions → Pilote-safe activity rows. */
export function liveActivityFromTechnicalToolEvent(input: {
  type: string;
  detail: Record<string, unknown>;
  seq: number;
  at?: string;
}): NoraLiveActivityEvent | null {
  const toolName =
    typeof input.detail.toolName === "string"
      ? input.detail.toolName
      : typeof input.detail.name === "string"
        ? input.detail.name
        : undefined;
  const status =
    typeof input.detail.status === "string" ? input.detail.status : "";
  const sourcePath =
    typeof input.detail.path === "string"
      ? input.detail.path
      : typeof (input.detail.source as { path?: unknown } | undefined)?.path ===
          "string"
        ? String((input.detail.source as { path: string }).path)
        : undefined;
  const at = input.at ?? new Date().toISOString();

  if (status === "running" || /tool[_-]?start/i.test(input.type)) {
    return {
      kind: "tool_started",
      seq: input.seq,
      at,
      label: toolName
        ? `Consultation en cours — ${toolName}`
        : "Consultation d’outil en cours",
      toolName,
      sourcePath,
    };
  }
  if (status === "failed" || /tool[_-]?fail/i.test(input.type)) {
    return {
      kind: "tool_failed",
      seq: input.seq,
      at,
      label: toolName
        ? `Échec d’outil — ${toolName}`
        : "Échec d’une consultation d’outil",
      toolName,
      sourcePath,
    };
  }
  if (
    status === "succeeded" ||
    status === "ok" ||
    status === "completed" ||
    /tool[_-]?(complete|end|result)/i.test(input.type)
  ) {
    return {
      kind: "tool_completed",
      seq: input.seq,
      at,
      label: toolName
        ? sourcePath
          ? `Lecture terminée — ${sourcePath}`
          : `Outil terminé — ${toolName}`
        : "Consultation d’outil terminée",
      toolName,
      sourcePath,
    };
  }
  return {
    kind: "activity_update",
    seq: input.seq,
    at,
    label: toolName ? `Activité — ${toolName}` : "Nora poursuit la mission",
    toolName,
    sourcePath,
  };
}

===== NEW FILE: missionProgressGuard.ts =====
/**
 * P6 extended execution — progress guard against unproductive tool loops.
 * Observable tool identity only (never model self-declaration).
 */

export type MissionProgressSample = {
  toolName: string;
  /** Stable identity such as path / query — empty when unknown. */
  targetKey: string;
};

export type MissionProgressDecision =
  | { action: "continue"; reasonCodes: string[] }
  | { action: "stop_no_progress"; reasonCodes: string[] };

/** Delivery parameter — identical tool+target streaks before controlled stop. */
export const MISSION_NO_PROGRESS_REPEAT_LIMIT = 3;

export const MISSION_NO_PROGRESS_STOP_STOCK =
  "Mission arrêtée — même outil et même cible répétés sans progression observable. " +
  "Reformulez la demande ou changez de cible avant de relancer.";

/** Controlled stop when MissionProgressGuard fires (Product tool path). */
export class MissionNoProgressStoppedError extends Error {
  readonly code = "NORA_MISSION_NO_PROGRESS";
  readonly reasonCodes: readonly string[];

  constructor(reasonCodes: readonly string[]) {
    super(MISSION_NO_PROGRESS_STOP_STOCK);
    this.name = "MissionNoProgressStoppedError";
    this.reasonCodes = reasonCodes;
  }
}

/** Stable tool target from wire args only (never model narrative). */
export function missionProgressTargetKey(
  _toolName: string,
  args: Record<string, unknown>,
): string {
  const asTrim = (v: unknown): string =>
    typeof v === "string" ? v.trim() : "";
  const asLine = (v: unknown): string => {
    if (typeof v === "number" && Number.isFinite(v)) {
      return String(Math.trunc(v));
    }
    return asTrim(v);
  };

  const path = asTrim(args.path);
  const query = asTrim(args.query);
  const ref = asTrim(args.ref);
  const startLine = asLine(args.startLine);
  const endLine = asLine(args.endLine);

  if (path && (startLine || endLine)) {
    return `${path}@${startLine || "*"}-${endLine || "*"}`;
  }
  if (path && query) {
    return `${path}::${query}`;
  }
  if (path) return path;
  if (query) return query;
  if (ref) return ref;
  return "";
}

/**
 * Track consecutive identical tool targets. Distinct targets reset the streak.
 * Does not invent progress from model narrative.
 */
export class MissionProgressGuard {
  private lastKey: string | null = null;
  private streak = 0;
  private readonly limit: number;
  /** Set when observe returns stop_no_progress (same turn, before next model call). */
  stopped = false;
  stopReasonCodes: readonly string[] = [];

  constructor(limit = MISSION_NO_PROGRESS_REPEAT_LIMIT) {
    this.limit = Math.max(2, Math.trunc(limit));
  }

  observe(sample: MissionProgressSample): MissionProgressDecision {
    const tool = sample.toolName.trim() || "unknown_tool";
    const target = sample.targetKey.trim();
    const key = `${tool}::${target}`;
    if (this.lastKey === key) {
      this.streak += 1;
    } else {
      this.lastKey = key;
      this.streak = 1;
    }
    if (this.streak >= this.limit) {
      const reasonCodes = [
        "mission_no_progress_repeat",
        `streak:${this.streak}`,
        `tool:${tool}`,
      ];
      this.stopped = true;
      this.stopReasonCodes = reasonCodes;
      return {
        action: "stop_no_progress",
        reasonCodes,
      };
    }
    return {
      action: "continue",
      reasonCodes: [`progress_streak:${this.streak}`],
    };
  }
}

```

### Patch tracked (projects/sfia-studio/app)
```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
index 6c4b0350..3a4e9f2b 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
@@ -53,48 +53,64 @@ afterEach(() => {
   }
 });

+/** Distinct line windows so MissionProgressGuard (3 identical tool+target) does not stop early. */
+function documentaryReadArgs(pass: number): {
+  path: string;
+  maxBytes: number;
+  startLine: number;
+  endLine: number;
+} {
+  const startLine = (pass - 1) * 8 + 1;
+  return {
+    path: DOC_PATH,
+    maxBytes: 2048,
+    startLine,
+    endLine: startLine + 7,
+  };
+}
+
 /** Six sequential document reads then a final synthesis — needs 7 model turns. */
 function documentaryScriptNeedingSevenModelTurns() {
   return [
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(1),
         { callId: "doc_r1" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(2),
         { callId: "doc_r2" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(3),
         { callId: "doc_r3" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(4),
         { callId: "doc_r4" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(5),
         { callId: "doc_r5" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(6),
         { callId: "doc_r6" },
       ),
     ],
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts
index 57b8071a..d96a242b 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts
@@ -30,7 +30,10 @@ import {
   GitLocalReadAdapter,
   countCompleteReturnedLines,
 } from "@/lib/platform/repository/gitLocalReadAdapter";
-import { CT_MAX_TOOL_RESULT_CHARS } from "@/lib/platform/tools/types";
+import {
+  CT_DEFAULT_READ_MAX_BYTES,
+  CT_MAX_TOOL_RESULT_CHARS,
+} from "@/lib/platform/tools/types";
 import {
   createToolCallId,
   prepareGitLocalReadDataForModel,
@@ -48,6 +51,16 @@ Tu peux le consulter et m'en faire une synthèse de ce que tu en retiens ?`;

 const dirs: string[] = [];

+/**
+ * One complete line fits adapter caps at CT_MAX_TOOL_RESULT_CHARS but not the
+ * final model JSON envelope (metadata overhead vs Product ceiling).
+ */
+const ENVELOPE_OVERSIZE_LINE_PAYLOAD_CHARS = 99_600;
+
+function envelopeSkipLongLine(): string {
+  return `L1 ${"x".repeat(ENVELOPE_OVERSIZE_LINE_PAYLOAD_CHARS)}`;
+}
+
 function tmpGitRepo(lineCount: number, lineWidth = 40): string {
   const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-doc-"));
   dirs.push(dir);
@@ -181,7 +194,7 @@ describe("P6-MIN-09 — Axe B natural mono-file qualification", () => {
     expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
       ADAPTIVE_MAX_TURNS_CEILING,
     );
-    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(10);
+    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(24);
   });
 });

@@ -487,7 +500,7 @@ describe("P6-MIN-09 — Axe A/E/F observability + honest incomplete", () => {
     expect(events.some((e) => e.type === "CONTINUATION_OBSERVED")).toBe(true);
     const adaptive = events.find((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED");
     expect(adaptive?.detail.requestedMaxTurns).toBeTruthy();
-    expect(adaptive?.detail.ceiling).toBe(10);
+    expect(adaptive?.detail.ceiling).toBe(24);
     session.close();
   });

@@ -630,7 +643,7 @@ describe("P6-MIN-09 — R2 Runner maxTurns restitution integration", () => {
           {
             path: "projects/sfia-studio/app/package.json",
             startLine: 1,
-            endLine: 40,
+            endLine: 20,
           },
           { callId: "r2a" },
         ),
@@ -640,7 +653,7 @@ describe("P6-MIN-09 — R2 Runner maxTurns restitution integration", () => {
           "git_local_read_file",
           {
             path: "projects/sfia-studio/app/package.json",
-            startLine: 1,
+            startLine: 21,
             endLine: 40,
           },
           { callId: "r2b" },
@@ -695,8 +708,8 @@ describe("P6-MIN-09 — R2 Runner maxTurns restitution integration", () => {
         "git_local_read_file",
         {
           path: "projects/sfia-studio/app/package.json",
-          startLine: 1,
-          endLine: 5,
+          startLine: i * 5 + 1,
+          endLine: i * 5 + 5,
         },
         { callId: `seg${i + 1}` },
       ),
@@ -1098,7 +1111,7 @@ describe("P6-MIN-09 — R5 double truncation / final payload truth", () => {
     if (!result.ok) return;
     const raw = toolResultForModel(result);
     expect(() => JSON.parse(raw)).not.toThrow();
-    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(12000);
+    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(100_000);
   });

   it("R5-J — documentHasMore without size cut stays truncated=false", async () => {
@@ -1316,11 +1329,11 @@ describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
     expect(parsed.data.content).toContain("short line one");
   });

-  it("R6-B/C — line fits adapter (~11900) but not final envelope → explicit skip", async () => {
-    const longLine = `L1 ${"x".repeat(11900)}`;
+  it("R6-B/C — line fits adapter but not final envelope → explicit skip", async () => {
+    const longLine = envelopeSkipLongLine();
     const root = tmpGitRepoWithLines([longLine, "L2 ok", "L3 ok"]);
     const adapter = new GitLocalReadAdapter(root);
-    const adapterRead = adapter.readFile(DOC, 32768, {
+    const adapterRead = adapter.readFile(DOC, CT_DEFAULT_READ_MAX_BYTES, {
       startLine: 1,
       endLine: 1,
     });
@@ -1335,7 +1348,12 @@ describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
         toolCallId: createToolCallId(),
         sessionId: "cor:r6b",
         name: "git_local_read_file",
-        arguments: { path: DOC, startLine: 1, endLine: 1 },
+        arguments: {
+          path: DOC,
+          startLine: 1,
+          endLine: 1,
+          maxBytes: CT_DEFAULT_READ_MAX_BYTES,
+        },
       },
       { workspaceRoot: root },
     );
@@ -1368,7 +1386,7 @@ describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
     expect(parsed.data.nextStartLineHint).not.toBe(
       parsed.data.returnedStartLine,
     );
-    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(12000);
+    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(100_000);
   });

   it("R6-D — adapter lineExceedsCap still explicit and advances", async () => {
@@ -1438,7 +1456,7 @@ describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
   });

   it("R6-J/K/L — repeated reads progress; no loop; no false FULL", async () => {
-    const longLine = `L1 ${"x".repeat(11900)}`;
+    const longLine = envelopeSkipLongLine();
     const root = tmpGitRepoWithLines([longLine, "L2 ok", "L3 ok", "L4 ok"]);
     const hints: Array<number | null> = [];
     let start = 1;
@@ -1448,7 +1466,12 @@ describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
           toolCallId: createToolCallId(),
           sessionId: `cor:r6j-${i}`,
           name: "git_local_read_file",
-          arguments: { path: DOC, startLine: start, endLine: start },
+          arguments: {
+            path: DOC,
+            startLine: start,
+            endLine: start,
+            maxBytes: CT_DEFAULT_READ_MAX_BYTES,
+          },
         },
         { workspaceRoot: root },
       );
@@ -1485,7 +1508,7 @@ describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
   });

   it("R6-M/N — ceiling unchanged; other tools unaffected", () => {
-    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(12000);
+    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(100_000);
     const prepared = prepareToolDataForModel(
       { porcelain: " M other.txt\n", truncated: false },
       CT_MAX_TOOL_RESULT_CHARS,
@@ -1497,7 +1520,7 @@ describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
   });

   it("R6-O — ToolRouter integration path (model boundary substituted only)", async () => {
-    const longLine = `L1 ${"x".repeat(11900)}`;
+    const longLine = envelopeSkipLongLine();
     const root = tmpGitRepoWithLines([longLine, "L2 after-skip"]);
     const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r6o-"));
     dirs.push(dir);
@@ -1509,14 +1532,24 @@ describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
       [
         functionCall(
           "git_local_read_file",
-          { path: DOC, startLine: 1, endLine: 1 },
+          {
+            path: DOC,
+            startLine: 1,
+            endLine: 1,
+            maxBytes: CT_DEFAULT_READ_MAX_BYTES,
+          },
           { callId: "r6o1" },
         ),
       ],
       [
         functionCall(
           "git_local_read_file",
-          { path: DOC, startLine: 2, endLine: 2 },
+          {
+            path: DOC,
+            startLine: 2,
+            endLine: 2,
+            maxBytes: CT_DEFAULT_READ_MAX_BYTES,
+          },
           { callId: "r6o2" },
         ),
       ],
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
index 29cc8efc..2d2894a2 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
@@ -15,13 +15,15 @@ import {
 import { decideCognitiveStrategy } from "@/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy";

 describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
-  it("legacy default remains 5; ceiling is not experimental 12", () => {
+  it("legacy default remains 5; ceiling is finite safety envelope (not unlimited)", () => {
     expect(LEGACY_DEFAULT_MAX_TURNS).toBe(5);
-    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(10);
-    expect(ADAPTIVE_MAX_TURNS_CEILING).toBeLessThan(12);
+    // P6 extended execution — delivery ceiling for long documentary Product missions.
+    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(24);
+    expect(ADAPTIVE_MAX_TURNS_CEILING).toBeGreaterThan(12);
     expect(STRATEGY_BASE_MAX_TURNS.Routine).toBe(5);
-    expect(STRATEGY_BASE_MAX_TURNS.Focused).toBe(8);
-    expect(STRATEGY_BASE_MAX_TURNS.Deep).toBe(10);
+    expect(STRATEGY_BASE_MAX_TURNS.Focused).toBe(10);
+    expect(STRATEGY_BASE_MAX_TURNS.Deep).toBe(16);
+    expect(STRATEGY_BASE_MAX_TURNS["High-Assurance"]).toBe(20);
   });

   it("explicit maxTurns wins (tests / eval)", () => {
@@ -34,16 +36,20 @@ describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
     expect(d.reasonCodes).toContain("explicit_caller_maxTurns");
   });

-  it("Routine → 5; Focused → 8; Deep → 10; never above ceiling", () => {
+  it("Routine → 5; Focused → 10; Deep → 16; never above ceiling", () => {
     expect(
       resolveAdaptiveMaxTurns({ strategyClass: "Routine" }).requestedMaxTurns,
     ).toBe(5);
     expect(
       resolveAdaptiveMaxTurns({ strategyClass: "Focused" }).requestedMaxTurns,
-    ).toBe(8);
+    ).toBe(10);
     expect(
       resolveAdaptiveMaxTurns({ strategyClass: "Deep" }).requestedMaxTurns,
-    ).toBe(10);
+    ).toBe(16);
+    expect(
+      resolveAdaptiveMaxTurns({ strategyClass: "High-Assurance" })
+        .requestedMaxTurns,
+    ).toBe(20);
     expect(
       resolveAdaptiveMaxTurns({ strategyClass: "High-Assurance" })
         .requestedMaxTurns,
@@ -59,7 +65,7 @@ describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
         reasoningDepth: "unknown",
       },
     });
-    expect(d.requestedMaxTurns).toBe(8);
+    expect(d.requestedMaxTurns).toBe(10);
     expect(d.reasonCodes.some((c) => c.includes("unknown_signals"))).toBe(
       true,
     );
@@ -92,7 +98,7 @@ describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
       strategyClass: strategy.strategyClass,
       signals: strategy.normalizedSignals,
     });
-    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(8);
+    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(10);
     expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
       ADAPTIVE_MAX_TURNS_CEILING,
     );
@@ -112,8 +118,8 @@ describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
       strategyClass: "Routine",
       signals: hints,
     });
-    // Mono-doc tool+depth bump lifts Routine base to at least Focused floor (8).
-    expect(budget.requestedMaxTurns).toBe(8);
+    // Mono-doc tool+depth bump lifts Routine base to at least Focused base (10).
+    expect(budget.requestedMaxTurns).toBe(10);
     expect(budget.reasonCodes).toContain("known_mono_doc_tool_synthesis_bump");
   });

diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
index 0efa111c..90bf4c2a 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
@@ -53,48 +53,63 @@ afterEach(() => {
   }
 });

+function documentaryReadArgs(pass: number): {
+  path: string;
+  maxBytes: number;
+  startLine: number;
+  endLine: number;
+} {
+  const startLine = (pass - 1) * 8 + 1;
+  return {
+    path: DOC_PATH,
+    maxBytes: 2048,
+    startLine,
+    endLine: startLine + 7,
+  };
+}
+
 /** Six sequential document reads then a final synthesis — needs 7 model turns. */
 function documentaryScriptNeedingSevenModelTurns() {
   return [
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(1),
         { callId: "doc_r1" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(2),
         { callId: "doc_r2" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(3),
         { callId: "doc_r3" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(4),
         { callId: "doc_r4" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(5),
         { callId: "doc_r5" },
       ),
     ],
     [
       functionCall(
         "git_local_read_file",
-        { path: DOC_PATH, maxBytes: 2048 },
+        documentaryReadArgs(6),
         { callId: "doc_r6" },
       ),
     ],
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts
index 43e466f5..5a514850 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts
@@ -51,14 +51,65 @@ afterEach(() => {
   }
 });

+function documentaryReadArgs(pass: number): {
+  path: string;
+  maxBytes: number;
+  startLine: number;
+  endLine: number;
+} {
+  const startLine = (pass - 1) * 8 + 1;
+  return {
+    path: DOC_PATH,
+    maxBytes: 2048,
+    startLine,
+    endLine: startLine + 7,
+  };
+}
+
 function documentaryScriptNeedingSevenModelTurns() {
   return [
-    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r1" })],
-    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r2" })],
-    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r3" })],
-    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r4" })],
-    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r5" })],
-    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r6" })],
+    [
+      functionCall(
+        "git_local_read_file",
+        documentaryReadArgs(1),
+        { callId: "tv_r1" },
+      ),
+    ],
+    [
+      functionCall(
+        "git_local_read_file",
+        documentaryReadArgs(2),
+        { callId: "tv_r2" },
+      ),
+    ],
+    [
+      functionCall(
+        "git_local_read_file",
+        documentaryReadArgs(3),
+        { callId: "tv_r3" },
+      ),
+    ],
+    [
+      functionCall(
+        "git_local_read_file",
+        documentaryReadArgs(4),
+        { callId: "tv_r4" },
+      ),
+    ],
+    [
+      functionCall(
+        "git_local_read_file",
+        documentaryReadArgs(5),
+        { callId: "tv_r5" },
+      ),
+    ],
+    [
+      functionCall(
+        "git_local_read_file",
+        documentaryReadArgs(6),
+        { callId: "tv_r6" },
+      ),
+    ],
     [assistantMessage(COMPLETE_MARKER)],
   ];
 }
@@ -163,11 +214,11 @@ describe("FINAL PRODUCT PROOF — CR-TV01-01 Product adaptive wiring", () => {
     expect(result.adaptiveObserve).toBeTruthy();
     expect(result.adaptiveObserve?.explicitOverride).toBe(false);
     expect(result.adaptiveObserve?.requestedMaxTurns).toBeGreaterThanOrEqual(8);
-    expect(result.adaptiveObserve?.requestedMaxTurns).toBeLessThanOrEqual(10);
+    expect(result.adaptiveObserve?.requestedMaxTurns).toBeLessThanOrEqual(24);
     expect(result.adaptiveObserve?.effectiveMaxTurns).toBe(
       result.adaptiveObserve?.requestedMaxTurns,
     );
-    expect(result.adaptiveObserve?.ceiling).toBe(10);
+    expect(result.adaptiveObserve?.ceiling).toBe(24);
     expect(result.adaptiveObserve?.strategyClass).toBeTruthy();
     expect(["Focused", "Deep", "High-Assurance"]).toContain(
       result.adaptiveObserve?.strategyClass,
@@ -216,7 +267,7 @@ describe("FINAL PRODUCT PROOF — CR-TV01-01 Product adaptive wiring", () => {
       strategyClass: strategy.strategyClass,
       signals: strategy.normalizedSignals,
     });
-    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(8);
+    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(10);
   });

   it("CR-TV01-01c — multi-document analysis wording still elevates via Product hints", () => {
diff --git a/projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts b/projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts
index 0f30091a..39b7dd4f 100644
--- a/projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts
+++ b/projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts
@@ -2,11 +2,16 @@
  * Thin cancellable transport for Product Nora send.
  * Same canonical application seam as projectAssistantSendAction.
  * No client authority. AbortSignal = request.signal only.
+ *
+ * Progressive mode (Accept: application/x-ndjson):
+ * NDJSON lines `{type:"activity",event}` then `{type:"result",result}`.
+ * Classic JSON remains the default / fallback.
  */

 import { NextResponse } from "next/server";
 import { parseBrowserSafeAssistantSendBody } from "@/features/project-assistant/browserSafeAssistantSend";
 import { sendProjectAssistantTurn } from "@/features/project-assistant/sendProjectAssistantTurn";
+import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

 export const dynamic = "force-dynamic";

@@ -63,17 +68,135 @@ export async function POST(
     );
   }

-  const result = await sendProjectAssistantTurn(
-    {
-      projectId,
-      content: parsed.value.content,
-      history: parsed.value.history,
-      logicalTurnId: parsed.value.logicalTurnId,
-      turnRetryKey: parsed.value.turnRetryKey,
-      reinstructionOfProposalId: parsed.value.reinstructionOfProposalId,
-      reservationInteractionContext: parsed.value.reservationInteractionContext,
+  const accept = request.headers.get("accept") ?? "";
+  const wantsProgressive = accept.includes("application/x-ndjson");
+
+  if (!wantsProgressive) {
+    const result = await sendProjectAssistantTurn(
+      {
+        projectId,
+        content: parsed.value.content,
+        history: parsed.value.history,
+        logicalTurnId: parsed.value.logicalTurnId,
+        turnRetryKey: parsed.value.turnRetryKey,
+        reinstructionOfProposalId: parsed.value.reinstructionOfProposalId,
+        reservationInteractionContext:
+          parsed.value.reservationInteractionContext,
+      },
+      { signal: request.signal },
+    );
+    return NextResponse.json(result);
+  }
+
+  const encoder = new TextEncoder();
+  const stream = new TransformStream<Uint8Array, Uint8Array>();
+  const writer = stream.writable.getWriter();
+  let seq = 0;
+
+  const writeLine = async (payload: unknown) => {
+    await writer.write(encoder.encode(`${JSON.stringify(payload)}\n`));
+  };
+
+  void (async () => {
+    try {
+      const started: NoraLiveActivityEvent = {
+        kind: "mission_started",
+        seq: ++seq,
+        at: new Date().toISOString(),
+        label: "Nora démarre la mission",
+      };
+      await writeLine({ type: "activity", event: started });
+
+      const result = await sendProjectAssistantTurn(
+        {
+          projectId,
+          content: parsed.value.content,
+          history: parsed.value.history,
+          logicalTurnId: parsed.value.logicalTurnId,
+          turnRetryKey: parsed.value.turnRetryKey,
+          reinstructionOfProposalId: parsed.value.reinstructionOfProposalId,
+          reservationInteractionContext:
+            parsed.value.reservationInteractionContext,
+        },
+        {
+          signal: request.signal,
+          onLiveActivity: (event) => {
+            const stamped: NoraLiveActivityEvent = {
+              ...event,
+              seq: ++seq,
+            };
+            void writeLine({ type: "activity", event: stamped });
+          },
+        },
+      );
+
+      const terminalKind =
+        result.ok === true
+          ? "mission_completed"
+          : request.signal.aborted
+            ? "stop_confirmed"
+            : result.status === "incomplete" ||
+                (typeof result === "object" &&
+                  result !== null &&
+                  "executionIncomplete" in result)
+              ? "mission_incomplete"
+              : "mission_failed";
+      await writeLine({
+        type: "activity",
+        event: {
+          kind: terminalKind,
+          seq: ++seq,
+          at: new Date().toISOString(),
+          label:
+            terminalKind === "mission_completed"
+              ? "Mission terminée"
+              : terminalKind === "stop_confirmed"
+                ? "Arrêt confirmé"
+                : terminalKind === "mission_incomplete"
+                  ? "Mission incomplète — limite d’exécution"
+                  : "Mission en échec",
+        } satisfies NoraLiveActivityEvent,
+      });
+      await writeLine({ type: "result", result });
+    } catch (error) {
+      const aborted = request.signal.aborted;
+      await writeLine({
+        type: "activity",
+        event: {
+          kind: aborted ? "stop_confirmed" : "mission_failed",
+          seq: ++seq,
+          at: new Date().toISOString(),
+          label: aborted ? "Arrêt confirmé" : "Échec de transport Product",
+        } satisfies NoraLiveActivityEvent,
+      });
+      await writeLine({
+        type: "result",
+        result: {
+          ok: false,
+          status: aborted ? "stopped" : "unavailable",
+          code: aborted ? "NORA_TURN_STOPPED" : "PROGRESSIVE_TRANSPORT_ERROR",
+          message: aborted
+            ? "Réponse interrompue."
+            : error instanceof Error
+              ? error.message
+              : "Erreur de flux progressif.",
+          mode: "unavailable",
+          retryable: !aborted,
+        },
+      });
+    } finally {
+      try {
+        await writer.close();
+      } catch {
+        /* already closed */
+      }
+    }
+  })();
+
+  return new Response(stream.readable, {
+    headers: {
+      "content-type": "application/x-ndjson; charset=utf-8",
+      "cache-control": "no-store",
     },
-    { signal: request.signal },
-  );
-  return NextResponse.json(result);
+  });
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn.ts
index ae4646c0..e5218832 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn.ts
@@ -2,6 +2,10 @@ import type {
   AssistantHistoryMessage,
   ProjectAssistantSendResult,
 } from "@/features/project-assistant/types";
+import {
+  isNoraLiveActivityEvent,
+  type NoraLiveActivityEvent,
+} from "@/features/project-assistant/liveActivityEvents";

 export type CancellableAssistantSendInput = {
   projectId: string;
@@ -16,20 +20,31 @@ export type CancellableAssistantSendInput = {
   } | null;
 };

+export type CancellableAssistantSendOptions = {
+  /** Progressive activity from NDJSON transport — never fabricates events. */
+  onActivity?: (event: NoraLiveActivityEvent) => void;
+};
+
 /**
  * Browser fetch adapter — request-scoped AbortSignal only.
+ * Prefers NDJSON progressive responses when the server supports them;
+ * falls back to classic JSON for older deployments.
  * Does not own Product orchestration.
  */
 export async function sendCancellableAssistantTurn(
   input: CancellableAssistantSendInput,
   signal: AbortSignal,
+  options?: CancellableAssistantSendOptions,
 ): Promise<ProjectAssistantSendResult> {
   const response = await fetch(
     `/api/studio/projects/${encodeURIComponent(input.projectId)}/assistant/send`,
     {
       method: "POST",
       credentials: "same-origin",
-      headers: { "content-type": "application/json" },
+      headers: {
+        "content-type": "application/json",
+        accept: "application/x-ndjson, application/json",
+      },
       body: JSON.stringify({
         content: input.content,
         ...(input.history ? { history: input.history } : {}),
@@ -47,6 +62,70 @@ export async function sendCancellableAssistantTurn(
       signal,
     },
   );
+
+  const contentType = response.headers.get("content-type") ?? "";
+  if (contentType.includes("application/x-ndjson") && response.body) {
+    return readNdjsonProductResult(response.body, options?.onActivity);
+  }
+
   const payload = (await response.json()) as ProjectAssistantSendResult;
   return payload;
 }
+
+async function readNdjsonProductResult(
+  body: ReadableStream<Uint8Array>,
+  onActivity?: (event: NoraLiveActivityEvent) => void,
+): Promise<ProjectAssistantSendResult> {
+  const reader = body.getReader();
+  const decoder = new TextDecoder();
+  let buffer = "";
+  let finalResult: ProjectAssistantSendResult | null = null;
+
+  while (true) {
+    const { done, value } = await reader.read();
+    if (done) break;
+    buffer += decoder.decode(value, { stream: true });
+    let newline = buffer.indexOf("\n");
+    while (newline >= 0) {
+      const line = buffer.slice(0, newline).trim();
+      buffer = buffer.slice(newline + 1);
+      newline = buffer.indexOf("\n");
+      if (!line) continue;
+      let parsed: unknown;
+      try {
+        parsed = JSON.parse(line) as unknown;
+      } catch {
+        continue;
+      }
+      if (
+        parsed &&
+        typeof parsed === "object" &&
+        !Array.isArray(parsed) &&
+        (parsed as { type?: unknown }).type === "activity" &&
+        isNoraLiveActivityEvent((parsed as { event?: unknown }).event)
+      ) {
+        onActivity?.((parsed as { event: NoraLiveActivityEvent }).event);
+        continue;
+      }
+      if (
+        parsed &&
+        typeof parsed === "object" &&
+        !Array.isArray(parsed) &&
+        (parsed as { type?: unknown }).type === "result" &&
+        (parsed as { result?: unknown }).result != null
+      ) {
+        finalResult = (parsed as { result: ProjectAssistantSendResult }).result;
+      }
+    }
+  }
+
+  if (finalResult) return finalResult;
+  return {
+    ok: false,
+    status: "provider_unavailable",
+    code: "PROGRESSIVE_TRANSPORT_INCOMPLETE",
+    message: "Flux progressif terminé sans résultat Product.",
+    mode: "unavailable",
+    retryable: true,
+  };
+}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 6c1f0881..80e8e9c9 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -42,6 +42,7 @@ import {
 } from "@/features/project-assistant/turnPayloadCanonical";
 import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";
 import { sendCancellableAssistantTurn } from "./sendCancellableAssistantTurn";
+import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";
 import type { JournalSurfaceEntry } from "../surfaces/JournalSurface";
 import type {
   ActiveDecisionSubjectReadResult,
@@ -140,6 +141,9 @@ export function useProductConversation({
   const [messages, setMessages] = useState<ProductMessage[]>([]);
   const [draft, setDraft] = useState("");
   const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
+  const [liveActivityEvents, setLiveActivityEvents] = useState<
+    NoraLiveActivityEvent[]
+  >([]);
   const [uiState, setUiState] = useState<ProductConversationUiState>("INITIAL");
   const [error, setError] = useState<string | null>(null);
   /**
@@ -918,12 +922,17 @@ export function useProductConversation({
         ? options.reservationInteractionContext
         : armedReservationInteractionContext;

+    // P6 extended execution — Stop must be available as soon as a cancellable
+    // operation starts (SENDING/WORKING), not only after startTransition runs.
+    // Otherwise UI can show "Nora travaille…" while still rendering Envoyer ↑.
+    const generation = ++sendGenerationRef.current;
+    const controller = new AbortController();
+    abortControllerRef.current = controller;
+    setCancellable(true);
+    setLiveActivityEvents([]);
+
     startTransition(async () => {
       setUiState("ASSISTANT_WORKING");
-      const generation = ++sendGenerationRef.current;
-      const controller = new AbortController();
-      abortControllerRef.current = controller;
-      setCancellable(true);
       let result: Awaited<ReturnType<typeof sendCancellableAssistantTurn>>;
       try {
         result = await sendCancellableAssistantTurn(
@@ -943,6 +952,17 @@ export function useProductConversation({
               : {}),
           },
           controller.signal,
+          {
+            onActivity: (event) => {
+              if (
+                !mountedRef.current ||
+                generation !== sendGenerationRef.current
+              ) {
+                return;
+              }
+              setLiveActivityEvents((prev) => [...prev, event]);
+            },
+          },
         );
       } catch (error) {
         if (abortControllerRef.current === controller) {
@@ -1389,6 +1409,7 @@ export function useProductConversation({
     draft,
     setDraft,
     toolEvents,
+    liveActivityEvents,
     uiState,
     error,
     executionIncomplete,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
index 48a22ea7..60c9b9b9 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
@@ -190,6 +190,36 @@
   color: var(--pm6-accent);
 }

+.noraActivityDetails {
+  margin-top: 0.5rem;
+  font-size: 0.8125rem;
+  color: var(--sfia-text-muted, #5c6570);
+}
+
+.noraActivityDetails summary {
+  cursor: pointer;
+  list-style: disclosure-closed;
+}
+
+.noraActivityTimeline {
+  margin: 0.4rem 0 0;
+  padding-left: 1.1rem;
+  max-height: 10rem;
+  overflow-y: auto;
+}
+
+.noraActivityTimeline li {
+  margin: 0.2rem 0;
+}
+
+.noraActivityTimelineKind {
+  display: inline-block;
+  min-width: 7.5rem;
+  margin-right: 0.4rem;
+  opacity: 0.7;
+  font-variant: small-caps;
+}
+
 .noraActivityText {
   margin: 0;
   font-size: var(--pm6-text-subtitle);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 55a62bc7..2da31f3a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -198,6 +198,7 @@ export function ConversationSurface({
     draft,
     setDraft,
     toolEvents,
+    liveActivityEvents = [],
     uiState,
     error,
     executionIncomplete,
@@ -563,8 +564,28 @@ export function ConversationSurface({
                 className={styles.noraActivityText}
                 data-testid="project-assistant-nora-activity-label"
               >
-                {noraActivity.label}
+                {liveActivityEvents.length > 0
+                  ? liveActivityEvents[liveActivityEvents.length - 1]!.label
+                  : noraActivity.label}
               </p>
+              {liveActivityEvents.length > 0 ? (
+                <details
+                  className={styles.noraActivityDetails}
+                  data-testid="project-assistant-nora-activity-details"
+                >
+                  <summary>Détail de l’activité</summary>
+                  <ol className={styles.noraActivityTimeline}>
+                    {liveActivityEvents.map((event) => (
+                      <li key={`${event.seq}-${event.kind}-${event.at}`}>
+                        <span className={styles.noraActivityTimelineKind}>
+                          {event.kind}
+                        </span>
+                        <span>{event.label}</span>
+                      </li>
+                    ))}
+                  </ol>
+                </details>
+              ) : null}
             </div>
           </article>
         ) : null}
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 00c88d12..54e2e72c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -40,6 +40,7 @@ import { resolveAssistantMode } from "../resolveAssistantMode";
 import { analyzeIntent } from "./intentAnalysis";
 import { resolveF2ProductRoutedProvider } from "./resolveF2ProductRoutedProvider";
 import { ProjectAssistantMemoryEventSink } from "../memoryEventSink";
+import { liveActivityFromTechnicalToolEvent } from "../liveActivityEvents";
 import { resolveAvailableContradictionPointers } from "../mw3AvailableEvidence";
 import {
   deriveMw3ContradictionAssessment,
@@ -1040,6 +1041,10 @@ export async function orchestrateAssistantSend(input: {
   campaignBudget?: NoraCampaignBudget;
   /** Request-scoped AbortSignal from cancellable Product transport. */
   signal?: AbortSignal;
+  /** Progressive Pilote-safe activity during F1 cognitive segment. */
+  onLiveActivity?: (
+    event: import("../liveActivityEvents").NoraLiveActivityEvent,
+  ) => void;
   /**
    * TEST-ONLY — suspend immediately before an F2 effect cut-line.
    * Never Product truth; never a client DTO field.
@@ -1244,6 +1249,7 @@ export async function orchestrateAssistantSend(input: {
         typeof input.logicalTurnId === "string" && input.logicalTurnId.trim()
           ? input.logicalTurnId.trim()
           : `f2:${project.projectId}:${f2CorrelationId}`;
+      let f2RouteLiveActivitySeq = 0;
       const f2Routed = resolveF2ProductRoutedProvider({
         turnContext: {
           projectCriticality: project.criticality,
@@ -1256,7 +1262,17 @@ export async function orchestrateAssistantSend(input: {
         },
         cognitiveTaskId,
         correlationId: f2CorrelationId,
-        sink: new ProjectAssistantMemoryEventSink(),
+        sink: new ProjectAssistantMemoryEventSink({
+          onEmit: (event) => {
+            if (!input.onLiveActivity) return;
+            const mapped = liveActivityFromTechnicalToolEvent({
+              type: event.type,
+              detail: (event.detail ?? {}) as Record<string, unknown>,
+              seq: ++f2RouteLiveActivitySeq,
+            });
+            if (mapped) input.onLiveActivity(mapped);
+          },
+        }),
       });
       effectiveProvider = f2Routed.provider;
     }
@@ -1793,6 +1809,7 @@ export async function orchestrateAssistantSend(input: {
       evalModelReasoningControl: input.evalModelReasoningControl,
       usdAccounting: input.usdAccounting,
       campaignBudget: input.campaignBudget,
+      onLiveActivity: input.onLiveActivity,
     });
     if (!f1.ok) return f1;
     const reportedIntent =
diff --git a/projects/sfia-studio/app/features/project-assistant/memoryEventSink.ts b/projects/sfia-studio/app/features/project-assistant/memoryEventSink.ts
index 9a83f53a..c254f847 100644
--- a/projects/sfia-studio/app/features/project-assistant/memoryEventSink.ts
+++ b/projects/sfia-studio/app/features/project-assistant/memoryEventSink.ts
@@ -23,12 +23,19 @@ function redactDetail(

 export class ProjectAssistantMemoryEventSink implements EventSink {
   readonly events: TechnicalEvent[] = [];
+  private readonly onEmit?: (event: TechnicalEvent) => void;
+
+  constructor(options?: { onEmit?: (event: TechnicalEvent) => void }) {
+    this.onEmit = options?.onEmit;
+  }

   emit(event: TechnicalEvent): void {
-    this.events.push({
+    const redacted: TechnicalEvent = {
       type: event.type,
       correlationId: event.correlationId,
       detail: redactDetail(event.detail ?? {}),
-    });
+    };
+    this.events.push(redacted);
+    this.onEmit?.(redacted);
   }
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 0c267914..cc038f22 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -25,6 +25,10 @@ import {
   throwIfAborted,
 } from "@/lib/nora-cognitive-runtime/noraTurnAbort";
 import { noraTurnStoppedFailure } from "./noraTurnStopped";
+import {
+  liveActivityFromTechnicalToolEvent,
+  type NoraLiveActivityEvent,
+} from "./liveActivityEvents";
 import {
   appendPilotTranscriptTurn,
   materializeCycleJournalDelta,
@@ -303,6 +307,11 @@ export async function orchestrateProjectAssistantTurn(input: {
   turnCorrelationId?: string;
   /** Request-scoped AbortSignal from cancellable Product transport. */
   signal?: AbortSignal;
+  /**
+   * Progressive Pilote-safe activity during the turn (transport only).
+   * Never HumanDecision / Evidence / SUCCESS.
+   */
+  onLiveActivity?: (event: NoraLiveActivityEvent) => void;
   /**
    * TEST-ONLY — await immediately before each durable-effect cut-line.
    * Not Product-visible. Lets tests abort in the post-model / pre-write window.
@@ -437,7 +446,18 @@ export async function orchestrateProjectAssistantTurn(input: {
     { role: "user", content },
   ];

-  const sink = new ProjectAssistantMemoryEventSink();
+  let liveActivitySeq = 0;
+  const sink = new ProjectAssistantMemoryEventSink({
+    onEmit: (event) => {
+      if (!input.onLiveActivity) return;
+      const mapped = liveActivityFromTechnicalToolEvent({
+        type: event.type,
+        detail: (event.detail ?? {}) as Record<string, unknown>,
+        seq: ++liveActivitySeq,
+      });
+      if (mapped) input.onLiveActivity(mapped);
+    },
+  });
   const workspaceRoot = resolveWorkspaceRootFromAppCwd();
   const provider = input.provider ?? resolveConversationProvider();
   const presentation = modeResolution.presentation;
diff --git a/projects/sfia-studio/app/features/project-assistant/sendProjectAssistantTurn.ts b/projects/sfia-studio/app/features/project-assistant/sendProjectAssistantTurn.ts
index 2d9be35d..d6753d79 100644
--- a/projects/sfia-studio/app/features/project-assistant/sendProjectAssistantTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/sendProjectAssistantTurn.ts
@@ -44,6 +44,10 @@ export type SendProjectAssistantTurnInput = {
 export type SendProjectAssistantTurnOptions = {
   /** Request-scoped AbortSignal from cancellable transport. Never persisted. */
   signal?: AbortSignal;
+  /** Progressive Pilote-safe activity (NDJSON transport). Never Product truth. */
+  onLiveActivity?: (
+    event: import("./liveActivityEvents").NoraLiveActivityEvent,
+  ) => void;
 };

 export async function sendProjectAssistantTurn(
@@ -91,5 +95,6 @@ export async function sendProjectAssistantTurn(
     reinstructionOfProposalId,
     reservationInteractionContext: input.reservationInteractionContext,
     signal: options?.signal,
+    onLiveActivity: options?.onLiveActivity,
   });
 }
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
index 0772901a..47693013 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
@@ -21,20 +21,22 @@ export const LEGACY_DEFAULT_MAX_TURNS = CT_MAX_TOOL_ROUNDS + 1; // 5
 export const ADAPTIVE_MAX_TURNS_FLOOR = 3;

 /**
- * Absolute production ceiling — FinOps hard guard.
- * Intentionally NOT 12 (experimental documentary proof only).
+ * Absolute production ceiling — safety envelope (delivery parameter).
+ * Raised for long documentary Product missions (P6 extended execution).
+ * Still finite / never unlimited. Not FinOps T7 reactivation.
  */
-export const ADAPTIVE_MAX_TURNS_CEILING = 10;
+export const ADAPTIVE_MAX_TURNS_CEILING = 24;

 /**
  * Base mission maxTurns by strategy class (delivery parameters).
  * Routine preserves legacy default (5).
+ * Deep / High-Assurance sized for multi-document Product missions.
  */
 export const STRATEGY_BASE_MAX_TURNS: Record<CognitiveStrategyClass, number> = {
   Routine: LEGACY_DEFAULT_MAX_TURNS,
-  Focused: 8,
-  Deep: 10,
-  "High-Assurance": 10,
+  Focused: 10,
+  Deep: 16,
+  "High-Assurance": 20,
 };

 export type AdaptiveMaxTurnsDecision = {
@@ -173,7 +175,7 @@ export function resolveAdaptiveMaxTurns(input: {
     isKnownHigh(signals.sourceBreadth) ||
     isKnownHigh(signals.verificationNeed)
   ) {
-    const bumped = Math.min(ceiling, Math.max(base, 10));
+    const bumped = Math.min(ceiling, Math.max(base, 16));
     if (bumped > base) {
       reasonCodes.push("known_high_breadth_or_verification_bump");
       base = bumped;
@@ -182,18 +184,18 @@ export function resolveAdaptiveMaxTurns(input: {
     isKnownMediumOrHigh(signals.sourceBreadth) &&
     isKnownMediumOrHigh(signals.toolDependency)
   ) {
-    const bumped = Math.min(ceiling, Math.max(base, 8));
+    const bumped = Math.min(ceiling, Math.max(base, 14));
     if (bumped > base) {
       reasonCodes.push("known_medium_doc_tool_bump");
       base = bumped;
     }
   } else if (
     // Mono-file documentary synthesis: high toolDependency + medium/high depth
-    // → at least Focused base (8), never invents sourceBreadth, never exceeds ceiling.
+    // → at least Focused base, never invents sourceBreadth, never exceeds ceiling.
     isKnownHigh(signals.toolDependency) &&
     isKnownMediumOrHigh(signals.reasoningDepth)
   ) {
-    const bumped = Math.min(ceiling, Math.max(base, 8));
+    const bumped = Math.min(ceiling, Math.max(base, 10));
     if (bumped > base) {
       reasonCodes.push("known_mono_doc_tool_synthesis_bump");
       base = bumped;
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts
index 18f71809..ad036ba7 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts
@@ -15,6 +15,8 @@ import { markModelTurn } from "./turnBudget";
 import type { NoraCampaignBudget } from "./campaignBudget";
 import { claimModelInvocation } from "./campaignBudget";
 import type { NoraAgentsUsdAccounting } from "./agentsUsdAccounting";
+import type { MissionProgressGuard } from "./missionProgressGuard";
+import { MissionNoProgressStoppedError } from "./missionProgressGuard";

 export class CampaignModelInvocationDeniedError extends Error {
   readonly code = "NORA_CAMPAIGN_MODEL_INVOCATION_DENIED";
@@ -101,6 +103,7 @@ export function createSfiaCallModelInputFilter(
   budget?: NoraTurnBudget,
   campaignBudget?: NoraCampaignBudget,
   usdAccounting?: NoraAgentsUsdAccounting,
+  missionProgressGuard?: MissionProgressGuard | null,
 ): CallModelInputFilter {
   const instructions = [
     "=== SYSTEM / DEVELOPER INSTRUCTIONS (Studio-supplied product context) ===",
@@ -113,6 +116,9 @@ export function createSfiaCallModelInputFilter(
   ].join("\n");

   return ({ modelData }) => {
+    if (missionProgressGuard?.stopped) {
+      throw new MissionNoProgressStoppedError(missionProgressGuard.stopReasonCodes);
+    }
     // USD hard-cap preflight BEFORE model dispatch (no spend yet).
     let usdEstimate: number | null = null;
     if (usdAccounting) {
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
index 3c66eb8b..888b7b31 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
@@ -19,8 +19,12 @@ import { LEGACY_DEFAULT_MAX_TURNS } from "./adaptiveTurnBudget";
  */
 export const CONTINUATION_SEGMENT_MAX_TURNS = LEGACY_DEFAULT_MAX_TURNS; // 5

-/** Hard guard — prevent infinite segment loops even if counters desync. */
-export const CONTINUATION_MAX_SEGMENTS = 4;
+/**
+ * Hard guard — prevent infinite segment loops even if counters desync.
+ * Raised with mission ceiling so productive documentary work can continue
+ * without resetting counters (each segment resumes native RunState).
+ */
+export const CONTINUATION_MAX_SEGMENTS = 8;

 export type ContinuationStopReason =
   | "complete"
@@ -28,6 +32,7 @@ export type ContinuationStopReason =
   | "segment_limit_no_state"
   | "max_segments"
   | "campaign_or_provider_stop"
+  | "mission_no_progress"
   | "abort"
   | "disabled";

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 4bbc11a6..d473bd34 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -107,6 +107,17 @@ export {
   CONTINUATION_SEGMENT_MAX_TURNS,
   CONTINUATION_MAX_SEGMENTS,
 } from "./controlledContinuation";
+export {
+  MissionProgressGuard,
+  MISSION_NO_PROGRESS_REPEAT_LIMIT,
+  MISSION_NO_PROGRESS_STOP_STOCK,
+  MissionNoProgressStoppedError,
+  missionProgressTargetKey,
+} from "./missionProgressGuard";
+export type {
+  MissionProgressSample,
+  MissionProgressDecision,
+} from "./missionProgressGuard";
 export type {
   ControlledContinuationObserve,
   ContinuationStopReason,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 93cbf75c..87c41f84 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -55,6 +55,11 @@ import {
   normalizeNoraProductTurnStructuredOutput,
 } from "./noraProductTurnOutputType";
 import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
+import {
+  MISSION_NO_PROGRESS_STOP_STOCK,
+  MissionNoProgressStoppedError,
+  MissionProgressGuard,
+} from "./missionProgressGuard";
 import {
   createCycleJournalAgentsTools,
   type CycleJournalToolContext,
@@ -263,6 +268,7 @@ export function createNoraAgentsRunner(
   runnerModelSettings?: NoraRunnerModelSettings,
   campaignBudget?: NoraCampaignBudget,
   usdAccounting?: NoraAgentsUsdAccounting,
+  missionProgressGuard?: MissionProgressGuard | null,
 ): Runner {
   return new Runner({
     tracingDisabled: true,
@@ -271,6 +277,7 @@ export function createNoraAgentsRunner(
       budget,
       campaignBudget,
       usdAccounting,
+      missionProgressGuard,
     ),
     ...(runnerModelSettings ? { modelSettings: runnerModelSettings } : {}),
   });
@@ -388,12 +395,14 @@ export async function runNoraAgentsTurn(
     }
   }
   const enableTools = input.enableTools !== false;
+  const missionProgressGuard = enableTools ? new MissionProgressGuard() : null;
   const sfiaTools = enableTools
     ? createSfiaRouteToolAdapters({
         correlationId: input.correlationId,
         workspaceRoot: input.workspaceRoot,
         sink: input.sink,
         budget,
+        progressGuard: missionProgressGuard ?? undefined,
       })
     : [];

@@ -620,6 +629,7 @@ export async function runNoraAgentsTurn(
     runnerModelSettings,
     campaign,
     usdAccounting,
+    missionProgressGuard,
   );
   const maxTurns = clamp.maxTurns;
   const session = input.session ?? undefined;
@@ -817,9 +827,20 @@ export async function runNoraAgentsTurn(
           runNewItems = Array.isArray(result.newItems)
             ? [...result.newItems]
             : [];
-          stopReason = budget.limitReached
-            ? "mission_budget_exhausted"
-            : "complete";
+          if (missionProgressGuard?.stopped) {
+            budget.limitReached = true;
+            budgetStop = true;
+            text = MISSION_NO_PROGRESS_STOP_STOCK;
+            stopReason = "mission_no_progress";
+            continuationObserve.reasonCodes = [
+              ...continuationObserve.reasonCodes,
+              ...missionProgressGuard.stopReasonCodes,
+            ];
+          } else {
+            stopReason = budget.limitReached
+              ? "mission_budget_exhausted"
+              : "complete";
+          }
           break;
         } catch (segmentError) {
           if (isAbortLike(segmentError, input.signal)) {
@@ -838,6 +859,19 @@ export async function runNoraAgentsTurn(
             allottedTurns = absoluteCap;
             break;
           }
+          if (segmentError instanceof MissionNoProgressStoppedError) {
+            budget.limitReached = true;
+            budgetStop = true;
+            text = segmentError.message;
+            stopReason = "mission_no_progress";
+            continuationObserve.reasonCodes = [
+              ...continuationObserve.reasonCodes,
+              ...segmentError.reasonCodes,
+            ];
+            segmentsExecuted += 1;
+            allottedTurns = absoluteCap;
+            break;
+          }
           if (segmentError instanceof MaxTurnsExceededError) {
             segmentsExecuted += 1;
             allottedTurns = absoluteCap;
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts
index b9eb2baa..03f76aa1 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts
@@ -20,6 +20,10 @@ import {
   TOOL_TURN_BUDGET_EXCEEDED_RESULT,
   claimToolSlot,
 } from "./turnBudget";
+import {
+  MissionProgressGuard,
+  missionProgressTargetKey,
+} from "./missionProgressGuard";

 /**
  * Generic cognitive boundary notice — not a Studio business-authority engine.
@@ -95,6 +99,8 @@ export type SfiaAgentsToolOptions = {
   definitions?: ToolDefinition[];
   /** Shared run budget — per-model-turn tool slots (CORR-OPT-C-02). */
   budget?: NoraTurnBudget;
+  /** P6 — identical tool+target streak guard (one instance per Product turn). */
+  progressGuard?: MissionProgressGuard;
 };

 /** Wrap each exposable Control Tower tool; execute only via routeToolCall. */
@@ -117,14 +123,15 @@ export function createSfiaRouteToolAdapters(
         if (options.budget && !claimToolSlot(options.budget)) {
           return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
         }
+        const wireArgs =
+          args && typeof args === "object"
+            ? (args as Record<string, unknown>)
+            : {};
         const result = await routeToolCall(
           {
             toolCallId: `call_${randomUUID().slice(0, 12)}`,
             name: def.name,
-            arguments:
-              args && typeof args === "object"
-                ? (args as Record<string, unknown>)
-                : {},
+            arguments: wireArgs,
             sessionId: options.correlationId,
           },
           {
@@ -132,6 +139,12 @@ export function createSfiaRouteToolAdapters(
             workspaceRoot: options.workspaceRoot,
           },
         );
+        if (options.progressGuard) {
+          options.progressGuard.observe({
+            toolName: def.name,
+            targetKey: missionProgressTargetKey(def.name, wireArgs),
+          });
+        }
         return toolResultForModel(result);
       },
     });
diff --git a/projects/sfia-studio/app/lib/platform/tools/types.ts b/projects/sfia-studio/app/lib/platform/tools/types.ts
index 042b53ff..7d61a4fc 100644
--- a/projects/sfia-studio/app/lib/platform/tools/types.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/types.ts
@@ -112,9 +112,18 @@ export interface ToolExecutionEventDetail {

 export const CT_MAX_TOOL_ROUNDS = 4;
 export const CT_MAX_TOOL_CALLS_PER_ROUND = 4;
-export const CT_MAX_TOOL_RESULT_CHARS = 12_000;
+/**
+ * Model-visible tool result envelope (delivery parameter).
+ * Sized for representative 80–100k character documentary reads while
+ * remaining a hard finite safety cap (never unlimited).
+ */
+export const CT_MAX_TOOL_RESULT_CHARS = 100_000;
 export const CT_TOOL_TIMEOUT_MS = 15_000;
-export const CT_DEFAULT_READ_MAX_BYTES = 32_768;
+/**
+ * Default Git local read byte budget before model envelope truncation.
+ * ~200 KiB supports 80–100k char UTF-8 docs with metadata headroom.
+ */
+export const CT_DEFAULT_READ_MAX_BYTES = 200_000;
 export const CT_GITHUB_REPO_ALLOWLIST = [
   "mcleland147/sfia-workspace",
 ] as const;

```

## S. Tests et oracles (DET — ZERO *.real.test.ts — ZERO OpenAI)
Suite ciblée exécutée (VÉRIFIÉ) : **10 files / 97 tests PASS**
- p6.nora.p1.adaptiveBudget.d0.test.ts
- missionProgressGuard.d0.test.ts
- p6.extendedCorpusCaps.d0.test.ts
- p6.nora.maxTurns.documentary.d0.test.ts
- p6.nora.p1p2.documentary.mission.d0.test.ts
- p6.nora.p1p2.targetedVerification.d0.test.ts
- p6.nora.min09.documentaryReliability.d0.test.ts
- liveActivityEvents.d0.test.ts
- sendCancellableAssistantTurn.ndjson.d0.test.ts
- stopAvailableEarly.d0.test.ts

Scripts documentaires mis à jour : fenêtres startLine/endLine distinctes pour ne pas confondre progression légitime et boucle (garde limit=3 conservée).

## T. Typecheck / lint / build
- `npm run typecheck` — PASS (VÉRIFIÉ)
- `npm run lint` — PASS (VÉRIFIÉ)
- `npm run build` — PASS (VÉRIFIÉ)

## U. Tests UX
- stopAvailable formula DET
- Activity details markup + CSS reduced-motion existant
- Capture runtime isolée Stop/live : **NON EXÉCUTÉE**

## V. Capture runtime / comparaison Figma
- Figma 46:2 : idle Send — VÉRIFIÉ
- Runtime Stop/live activity : **NON PROUVÉ** (pas de screenshot runtime isolé)
- Verdict visuel : **DELIVERY WITH VISUAL RESERVE / REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** pour clôture visuelle stricte ; capacité logique Stop/live couverte en DET

## W. Sécurité
- Events browser-safe (label <280, pas de secrets)
- Redaction paths inchangés (min09 R4/R7 PASS)
- Annulation server-side via AbortSignal
- Pas d’effet métier depuis analyse incomplète (contrats incomplets préservés)

## X. Fake / Real
- Fake : ScriptedModel DET — PASS
- REAL : **NON AUTORISÉ** ce cycle
- Attendu sortie : DETERMINISTIC END-TO-END CANDIDATE
- Hors scope : REAL BOUNDARY PROVEN / P6 GLOBAL PASS / RUNTIME V3 ADOPTED
- Prochaine preuve REAL minimale : mission T2 multi-doc Product interactive sur runtime isolé (non :3020) avec budgets étendus + Stop + activity NDJSON — GO Morris distinct requis

## Y. Réserves
1. Runtime screenshot Stop/live manquant
2. Figma 46:2 n’encode pas Arrêter / live activity (delta Product documenté)
3. REAL T2 non rejoué
4. P6 GLOBAL toujours NOT PASSED

## Z. Dette / exit
- Qualifier frame Figma Stop/Working ou accepter delta Product
- Capture runtime isolée
- GO Git Integration après Critical Review PASS
- REAL T2 revalidation
- Pas de cleanup / suppression branche sans GO

## AA. Trajectoire P6
P6 failure → integrated correction (ce lot) → deterministic proof (ce lot) → ChatGPT Critical Review → Git integration gate → REAL qualification → Morris Human QA → P6 consolidation

## AB. Git Truth final
- Branche : `delivery/sfia-studio-p6-nora-extended-execution-live-activity`
- HEAD : `5e139627ff515cd36da5ce12d2c22f935adb139f`
- Dirty : modifications locales non poussées (attendu — CONSTRUCTION LOCALE)
- origin/main inchangé
- Studio :3020 intact

## AC. Actions autorisées consommées
Diagnostic ; worktree isolé ; branche delivery ; code A/B/C ; DET ; typecheck/lint/build ; Figma MCP read ; Review Pack FULL ; Review Handoff L3 (publication)

## AD. Actions non exécutées
Push projet ; Draft/Ready PR ; merge ; REAL ; restart :3020 ; mutation Human QA DBs ; doctrine ; runtime v3 ; cleanup

## AE. Verdict
**P6 NORA EXTENDED COGNITIVE EXECUTION & LIVE ACTIVITY**
**LOCAL DELIVERY COMPLETE / DETERMINISTIC QA PASS / READY FOR CHATGPT CRITICAL REVIEW**
avec **VISUAL RESERVE** (runtime screenshot Stop/live non produit).

Ne pas déclarer : MERGED / P6 GLOBAL PASS / READY FOR REAL / REAL BOUNDARY PROVEN / RUNTIME V3 ADOPTED.

## AF. Instruction ChatGPT
Lire ce Review Handoff distant. Contrôler Git Truth, budgets, corpus caps, NDJSON live activity, Stop server-side, MissionProgressGuard, continuité Session, DET 97, typecheck/lint/build, Figma 46:2 + delta, Fake/Real, absence architecture parallèle, absence mutation Studio actif. Rendre **CHATGPT CRITICAL MACRO-LOT REVIEW**. Si PASS : recommander GO Morris Git Integration (pas de microcycle hardening sans défaut bloquant). Ne pas merger automatiquement.
