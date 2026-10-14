# SFIA STUDIO — P6 NORA EXTENDED COGNITIVE EXECUTION & LIVE ACTIVITY
## Cycle 13 — PR Readiness / Git Integration — Review Pack FULL

**A. Horodatage (Europe/Paris):** 2026-10-14 17:12:56 CEST
**B. GO Morris:** COMMIT + PUSH + DRAFT PR + CI — AUTHORIZED / CONSUMED
**C. Cycle / profil:** Cycle 13 — CRITICAL — EVOL / Cumulative Product Delivery
**D. Repository:** `mcleland147/sfia-workspace`
**Worktree:** `/Users/morris/Projects/sfia-workspace-p6-nora-extended-execution-live-activity`
**Branche projet:** `delivery/sfia-studio-p6-nora-extended-execution-live-activity`

---

## E. Git Truth initial (VÉRIFIÉ)

| Check | Value |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-workspace-p6-nora-extended-execution-live-activity` |
| branch | `delivery/sfia-studio-p6-nora-extended-execution-live-activity` |
| HEAD initial | `5e139627ff515cd36da5ce12d2c22f935adb139f` |
| origin/main | `5e139627ff515cd36da5ce12d2c22f935adb139f` (identique) |
| origin/delivery… | absent avant push |
| dirty | 23 M + 13 U = 36 candidat ; `.tmp-sfia-review` exclu |
| staged initial | vide |

Review Handoff d'entrée (consulté, non substitué au diff):
- commit `53acca5b43f32688cdcc2c6b0de94c59269b984a`
- blob `3041d1b0667f5c1730c8fdb58055f67bacf8d18b`

---

## F. Sources consultées

- Build Doctrine / Roadmap / Product Completion C1 (lecture ; non mutés)
- Doctrine Studio v3: epistemology/provenance, artifact-evidence (lecture)
- P6 GLOBAL doc + cycle routing / Operating Model (guidance)
- Review Handoff d'entrée 53acca5b
- Diff Git local cumulatif réel (source de vérité)

## G. Build Doctrine / Roadmap / C1

- Build Doctrine: VALIDATED / ACTIVE ON MAIN — **non modifié**
- Roadmap: VALIDATED / ACTIVE LIVING — **non modifié**
- Product Completion C1: VALIDATED — **non modifié**

## H. Capacité v3 / milestone

Milestone P6 — Nora Extended Cognitive Execution & Live Activity.
Runtime v3: **NON ADOPTED**. Option B/O2: KEEP. P6 GLOBAL: **NOT PASSED**.

## I. Classification des actifs

| Actif | Classification |
|---|---|
| Runner OpenAI Agents | KEEP / ADAPT |
| RunState | KEEP |
| Adaptive Budget | ADAPT (ceiling 24, envelope 36, max 3 extensions) |
| MissionProgressGuard | COMPLETE (+ empty-target skip CI fix) |
| GitLocalReadAdapter / ToolRouter | ADAPT (caps 100k/200k) |
| Product Session | KEEP |
| Transport NDJSON | COMPLETE |
| ConversationSurface | ADAPT |
| AbortController | KEEP / CORRECT |
| PRR Manifest | SYNC |

## J. Critical Re-Review d'entrée

ChatGPT Critical Macro-Lot Re-Review: **PASS WITH RESERVES / READY FOR MORRIS GIT INTEGRATION GATE**.
R-EXT-01…05 CLOSED au périmètre déterministe (avec réserves Fake/Real / browser).

---

## K. Manifest projet exact (cumulatif HEAD)

**36 fichiers** (23 M + 13 A) dans le commit feature ; fix CI borné sur 2 fichiers déjà du manifest.

### Modified (23)

1. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts`
2. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts`
3. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts`
4. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts`
5. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts`
6. `projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts`
7. `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn.ts`
8. `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`
9. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css`
10. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
11. `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
12. `projects/sfia-studio/app/features/project-assistant/memoryEventSink.ts`
13. `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
14. `projects/sfia-studio/app/features/project-assistant/sendProjectAssistantTurn.ts`
15. `projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts`
16. `projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts`
17. `projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts`
18. `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
19. `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
20. `projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts`
21. `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts`
22. `projects/sfia-studio/app/lib/platform/tools/types.ts`
23. `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

### New (13)

1. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/missionProgressGuard.d0.test.ts`
2. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.extendedCorpusCaps.d0.test.ts`
3. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts`
4. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.representativeCorpus.d0.test.ts`
5. `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/runnerAbortSignal.d0.test.ts`
6. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/conversationSurface.liveActivityStop.d0.test.tsx`
7. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/sendCancellableAssistantTurn.ndjson.d0.test.ts`
8. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/serverCancellation.d0.test.ts`
9. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/stopAvailableEarly.d0.test.ts`
10. `projects/sfia-studio/app/__tests__/project-assistant/liveActivityEvents.d0.test.ts`
11. `projects/sfia-studio/app/__tests__/project-assistant/terminalLiveActivity.d0.test.ts`
12. `projects/sfia-studio/app/features/project-assistant/liveActivityEvents.ts`
13. `projects/sfia-studio/app/lib/nora-cognitive-runtime/missionProgressGuard.ts`

**Exclusions (non staged):** `.tmp-sfia-review/**`, doctrine/roadmap/C1, REAL, DBs, secrets.

---

## L–N. Diff cumulatif + nouveaux fichiers

Voir sections **APPENDIX A (modified diffs)** et **APPENDIX B (new files full)** ci-dessous — contenu intégral exploitable.

### Capacités contrôlées (synthèse vérifiée sur diff)

**Budget:** floor 3 / ceiling 24 / envelope 36 / max 3 productive extensions ; progress = usefulCompletions > checkpoint ; fail/denied ≠ progress ; explicitOverride / campaign opposables.

**Corpus:** CT_MAX_TOOL_RESULT_CHARS=100_000 ; CT_DEFAULT_READ_MAX_BYTES=200_000 ; DET 5/10/15 docs lus ; pas de claim REAL.

**Live Activity:** NDJSON activity→result ; terminalité unique ; labels FR ; pas de chaîne de pensée privée.

**Stop:** AbortSignal→Runner ; transport interrupted ≠ Product stopped ; pas de faux stop_confirmed.

**CI fix (borné):** MissionProgressGuard ignore streak si `targetKey` vide (évite faux stop sur `git_local_get_head` ×3) — corrige régression `runner.d0` hors manifest, fix dans fichiers autorisés.

---

## N. Tests locaux (VÉRIFIÉ)

Pré-commit candidat:
- 16 suites / **147 PASS**
- `git diff --check` PASS

Post-fix CI:
- 17 suites (16 + runner.d0) / **159 PASS**
- typecheck PASS

Aucune exécution `*.real.test.ts`. Aucun OpenAI REAL. Aucune mutation Product / :3020 / Human QA DB.

## O. Typecheck / lint / build (VÉRIFIÉ local)

- typecheck PASS
- lint PASS (`next lint` — No ESLint warnings or errors)
- build PASS

## P. PRR (VÉRIFIÉ)

`node scripts/check-production-runtime-reference.mjs` → **PRODUCTION RUNTIME REFERENCE CONFORMANCE OK**
Un seul fichier PRR manifest modifié (digests). ≠ validation sémantique auto.

## Q. Security (VÉRIFIÉ / CI)

- Aucun secret dans le commit
- CI: Secret pattern scan (targeted) PASS
- Trailing whitespace PASS
- Aucune suppression d'autorité / coupe-circuit / FinOps T7

## R. Fake / Real

| Niveau | Statut |
|---|---|
| DETERMINISTIC E2E AT TESTED SCOPE | PASS |
| GIT INTEGRATED CANDIDATE / CI VERIFIED | PASS (après fix) |
| REAL BOUNDARY PROVEN | NON PROUVÉ |
| END-TO-END REAL PROVEN | NON PROUVÉ |
| READY FOR REAL | NON |
| P6 GLOBAL PASS | NON |
| RUNTIME V3 ADOPTED | NON |

ScriptedModel ≠ qualité OpenAI REAL.

## S. Figma / runtime

- Figma idle Send contract référencé (file m4g8j0gNbEzfIuH6S9AZJF / node 46:2) — **non pixel-perfect revendiqué**
- React RTL ConversationSurface: prouvé DET
- CSS harness ≠ browser screenshot
- Captures navigateur React: **réserve**
- Runtime v3: **NON ADOPTED**

## T. Réserves ouvertes

1. Qualité cognitive REAL non prouvée
2. Captures navigateur React non disponibles
3. CSS harness ≠ preuve navigateur
4. Validation Figma pixel-perfect non revendiquée
5. P6 GLOBAL NOT PASSED
6. Runtime v3 NON ADOPTED
7. REAL T2 non exécuté
8. Human QA non rejouée
9. Merge GO distinct requis
10. NOT MERGED

---

## U. Commit SHA / messages (VÉRIFIÉ)

| Commit | Message |
|---|---|
| `0f857b6596bc6ffe79cf6a86dd1cdc09e98ceffd` | `feat(studio): extend Nora execution and live activity` (36 files) |
| `3d8acf3475c2180b8135379b110995b455f037ee` | `fix(studio): skip MissionProgressGuard streak on empty targets` (2 files) |

Parent feature: `5e139627ff515cd36da5ce12d2c22f935adb139f`
HEAD projet actuel: `3d8acf3475c2180b8135379b110995b455f037ee`

## V. Push verification (VÉRIFIÉ)

- origin/delivery… = `3d8acf3475c2180b8135379b110995b455f037ee`
- origin/main inchangé = `5e139627ff515cd36da5ce12d2c22f935adb139f`
- Push normal (pas de force)

## W. Draft PR (VÉRIFIÉ)

- **PR #582** — OPEN / **DRAFT**
- URL: https://github.com/mcleland147/sfia-workspace/pull/582
- base: `main`
- head: `delivery/sfia-studio-p6-nora-extended-execution-live-activity`
- head SHA: `3d8acf3475c2180b8135379b110995b455f037ee`
- commits: **2**
- changed files: **36**

## X. CI (VÉRIFIÉ)

| Run | SHA | Conclusion |
|---|---|---|
| 38585217755 (échec initial) | `0f857b65…` | failure — runner.d0 limitReached (MissionProgressGuard empty target) |
| **38586427633** | `3d8acf34…` | **success** |

URL: https://github.com/mcleland147/sfia-workspace/actions/runs/38586427633
Jobs: Detect PASS · Build and validate PASS · **SFIA Studio Required Gate PASS**

## Y. Required Gate

**PASS** — run head SHA = commit poussé `3d8acf3475c2180b8135379b110995b455f037ee`

## Z. Git Truth final (VÉRIFIÉ)

- branch delivery… @ `3d8acf34…` = remote
- main remote `5e139627…` inchangé
- dirty: `.tmp-sfia-review/chatgpt-review.md` only (pack, non commit projet)
- NOT MERGED

## AA. Dette / exit

Aucune nouvelle dette intentionnelle.
Exit proof cycle 13: Commit + push + Draft PR + CI Required Gate PASS avec manifest et réserves exacts — **ATTEINT**.

## AB. Prochaine preuve P6

ChatGPT CRITICAL PR REVIEW → Morris MERGE GO (distinct) → post-merge verification → REAL T2 (GO distinct) → Human QA → P6 consolidation.

## AC. Gates Morris restants

- G8 ChatGPT Critical PR Review — **à consommer**
- G9 Morris MERGE GO — **non autorisé ici**

## AD. Verdict

**P6 NORA EXTENDED COGNITIVE EXECUTION & LIVE ACTIVITY**
**CUMULATIVE GIT INTEGRATION COMMIT/PUSH/DRAFT PR COMPLETE / CI PASS / READY FOR CHATGPT CRITICAL PR REVIEW.**

Réserves: NOT MERGED · NOT REAL PROVEN · P6 GLOBAL NOT PASSED · RUNTIME V3 NON ADOPTED · HUMAN QA OPEN · VISUAL BROWSER RESERVE.

## AE. Instruction ChatGPT

Consulter Git distant. Vérifier main inchangé, branche publiée, HEAD `3d8acf34…`, 2 commits, 36 fichiers, Draft PR #582, CI run 38586427633 Required Gate PASS, Review Handoff distant, réserves Fake/Real/Figma. Rendre **CHATGPT CRITICAL PR REVIEW**. Si PASS: recommander MORRIS MERGE GO. Ne pas merger automatiquement.

---


# APPENDIX A — Modified files full diff (5e139627...HEAD)

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
index 0f30091a..1e23b35a 100644
--- a/projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts
+++ b/projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts
@@ -2,11 +2,19 @@
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
+import {
+  terminalLiveActivityFromProductResult,
+  type NoraLiveActivityEvent,
+} from "@/features/project-assistant/liveActivityEvents";

 export const dynamic = "force-dynamic";

@@ -63,17 +71,176 @@ export async function POST(
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
+  let writeChain: Promise<void> = Promise.resolve();
+  let streamClosed = false;
+  let terminalEmitted = false;
+
+  const writeLine = (payload: unknown): Promise<void> => {
+    writeChain = writeChain
+      .then(async () => {
+        if (streamClosed) return;
+        await writer.write(encoder.encode(`${JSON.stringify(payload)}\n`));
+      })
+      .catch((err) => {
+        streamClosed = true;
+        throw err;
+      });
+    return writeChain;
+  };
+
+  void (async () => {
+    try {
+      const started: NoraLiveActivityEvent = {
+        kind: "mission_started",
+        seq: ++seq,
+        at: new Date().toISOString(),
+        label: "Nora prépare la consultation des sources.",
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
+            if (terminalEmitted || streamClosed) return;
+            const stamped: NoraLiveActivityEvent = {
+              ...event,
+              seq: ++seq,
+            };
+            void writeLine({ type: "activity", event: stamped });
+          },
+        },
+      );
+
+      // Drain pending activity writes before terminal so order is preserved.
+      await writeChain;
+
+      const transportAbortedWithoutAck =
+        request.signal.aborted &&
+        !(
+          typeof result === "object" &&
+          result !== null &&
+          "status" in result &&
+          (result as { status?: string }).status === "stopped"
+        );
+
+      const terminal = terminalLiveActivityFromProductResult({
+        result: result as {
+          ok?: boolean;
+          status?: string;
+          executionIncomplete?: boolean;
+        },
+        runnerStopConfirmed:
+          typeof result === "object" &&
+          result !== null &&
+          "status" in result &&
+          (result as { status?: string }).status === "stopped",
+        transportAbortedWithoutAck,
+      });
+
+      terminalEmitted = true;
+      await writeLine({
+        type: "activity",
+        event: {
+          kind: terminal.kind,
+          seq: ++seq,
+          at: new Date().toISOString(),
+          label: terminal.label,
+        } satisfies NoraLiveActivityEvent,
+      });
+      await writeLine({ type: "result", result });
+    } catch (error) {
+      await writeChain.catch(() => undefined);
+      const aborted = request.signal.aborted;
+      // Browser/transport abort alone ≠ Runner stop_confirmed (R-EXT-01 / R-EXT-05).
+      const terminal = terminalLiveActivityFromProductResult({
+        result: {
+          ok: false,
+          status: aborted ? "provider_unavailable" : "provider_error",
+        },
+        transportAbortedWithoutAck: aborted,
+      });
+      terminalEmitted = true;
+      try {
+        await writeLine({
+          type: "activity",
+          event: {
+            kind: terminal.kind,
+            seq: ++seq,
+            at: new Date().toISOString(),
+            label: terminal.label,
+          } satisfies NoraLiveActivityEvent,
+        });
+        await writeLine({
+          type: "result",
+          result: {
+            ok: false,
+            // Transport abort alone ≠ Product status=stopped (Runner stop must be acked).
+            status: "provider_unavailable",
+            code: aborted
+              ? "NORA_TURN_TRANSPORT_INTERRUPTED"
+              : "PROGRESSIVE_TRANSPORT_ERROR",
+            message: aborted
+              ? "Connexion interrompue — arrêt Runner non confirmé dans ce transport."
+              : error instanceof Error
+                ? error.message
+                : "Erreur de flux progressif.",
+            mode: "unavailable",
+            retryable: !aborted,
+          },
+        });
+      } catch {
+        /* writer already failed — fail closed */
+      }
+    } finally {
+      try {
+        await writeChain.catch(() => undefined);
+        streamClosed = true;
+        await writer.close();
+      } catch {
+        streamClosed = true;
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
index ae4646c0..82736853 100644
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
@@ -47,6 +62,74 @@ export async function sendCancellableAssistantTurn(
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
+        (parsed as { type?: unknown }).type === "result" &&
+        (parsed as { result?: unknown }).result != null
+      ) {
+        finalResult = (parsed as { result: ProjectAssistantSendResult }).result;
+        continue;
+      }
+      if (
+        finalResult != null ||
+        !(
+          parsed &&
+          typeof parsed === "object" &&
+          !Array.isArray(parsed) &&
+          (parsed as { type?: unknown }).type === "activity" &&
+          isNoraLiveActivityEvent((parsed as { event?: unknown }).event)
+        )
+      ) {
+        continue;
+      }
+      onActivity?.((parsed as { event: NoraLiveActivityEvent }).event);
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
index 0772901a..0fffb6b4 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
@@ -21,20 +21,30 @@ export const LEGACY_DEFAULT_MAX_TURNS = CT_MAX_TOOL_ROUNDS + 1; // 5
 export const ADAPTIVE_MAX_TURNS_FLOOR = 3;

 /**
- * Absolute production ceiling — FinOps hard guard.
- * Intentionally NOT 12 (experimental documentary proof only).
+ * Initial mission ceiling (delivery parameter) — adaptive requested max.
+ * Productive extensions may raise the absolute Runner cap toward
+ * ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE when observable tool progress exists.
+ * Still finite / never unlimited. Not FinOps T7 reactivation.
  */
-export const ADAPTIVE_MAX_TURNS_CEILING = 10;
+export const ADAPTIVE_MAX_TURNS_CEILING = 24;
+
+/**
+ * Hard safety envelope for automatic productive extensions (delivery parameter).
+ * Never exceeded without explicit caller maxTurns (tests/eval) or campaign lease.
+ * Sized for representative 10–15 doc Product missions under native RunState resume.
+ */
+export const ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE = 36;

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
@@ -173,7 +183,7 @@ export function resolveAdaptiveMaxTurns(input: {
     isKnownHigh(signals.sourceBreadth) ||
     isKnownHigh(signals.verificationNeed)
   ) {
-    const bumped = Math.min(ceiling, Math.max(base, 10));
+    const bumped = Math.min(ceiling, Math.max(base, 16));
     if (bumped > base) {
       reasonCodes.push("known_high_breadth_or_verification_bump");
       base = bumped;
@@ -182,18 +192,18 @@ export function resolveAdaptiveMaxTurns(input: {
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
index 3c66eb8b..d81eb60b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
@@ -19,8 +19,15 @@ import { LEGACY_DEFAULT_MAX_TURNS } from "./adaptiveTurnBudget";
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
+
+/** Max automatic productive extensions beyond the initial mission budget. */
+export const PRODUCTIVE_EXTENSION_MAX = 3;

 export type ContinuationStopReason =
   | "complete"
@@ -28,6 +35,8 @@ export type ContinuationStopReason =
   | "segment_limit_no_state"
   | "max_segments"
   | "campaign_or_provider_stop"
+  | "mission_no_progress"
+  | "safety_envelope_exhausted"
   | "abort"
   | "disabled";

@@ -42,6 +51,12 @@ export type ControlledContinuationObserve = {
    * (SDK maxTurns is absolute vs state._currentTurn — not a sum of segment sizes).
    */
   allottedTurns: number;
+  /** Initial adaptive/requested mission budget before productive extensions. */
+  initialMissionMaxTurns?: number;
+  /** Absolute safety envelope for productive extensions. */
+  safetyEnvelope?: number;
+  /** Count of automatic productive extensions beyond the initial mission budget. */
+  productiveExtensions?: number;
   stopReason: ContinuationStopReason;
   reasonCodes: string[];
 };
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 4bbc11a6..af928c48 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -89,6 +89,7 @@ export {
   LEGACY_DEFAULT_MAX_TURNS,
   ADAPTIVE_MAX_TURNS_FLOOR,
   ADAPTIVE_MAX_TURNS_CEILING,
+  ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE,
   STRATEGY_BASE_MAX_TURNS,
 } from "./adaptiveTurnBudget";
 export type { AdaptiveMaxTurnsDecision } from "./adaptiveTurnBudget";
@@ -106,7 +107,21 @@ export {
   emptyContinuationObserve,
   CONTINUATION_SEGMENT_MAX_TURNS,
   CONTINUATION_MAX_SEGMENTS,
+  PRODUCTIVE_EXTENSION_MAX,
 } from "./controlledContinuation";
+export {
+  MissionProgressGuard,
+  MISSION_NO_PROGRESS_REPEAT_LIMIT,
+  MISSION_NO_PROGRESS_STOP_STOCK,
+  MissionNoProgressStoppedError,
+  missionProgressTargetKey,
+  missionProgressResultFingerprint,
+  isUsefulMissionProgressFingerprint,
+} from "./missionProgressGuard";
+export type {
+  MissionProgressSample,
+  MissionProgressDecision,
+} from "./missionProgressGuard";
 export type {
   ControlledContinuationObserve,
   ContinuationStopReason,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 93cbf75c..f3c32dc1 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -21,6 +21,7 @@ import type { ConversationProvider } from "@/lib/platform/ai";
 import type { EventSink } from "@/lib/platform/observability/eventSink";
 import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
 import {
+  ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE,
   resolveAdaptiveMaxTurns,
   type AdaptiveMaxTurnsDecision,
 } from "./adaptiveTurnBudget";
@@ -31,6 +32,7 @@ import {
 import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
 import {
   CONTINUATION_MAX_SEGMENTS,
+  PRODUCTIVE_EXTENSION_MAX,
   emptyContinuationObserve,
   planContinuationSegments,
   type ControlledContinuationObserve,
@@ -55,6 +57,11 @@ import {
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
@@ -263,6 +270,7 @@ export function createNoraAgentsRunner(
   runnerModelSettings?: NoraRunnerModelSettings,
   campaignBudget?: NoraCampaignBudget,
   usdAccounting?: NoraAgentsUsdAccounting,
+  missionProgressGuard?: MissionProgressGuard | null,
 ): Runner {
   return new Runner({
     tracingDisabled: true,
@@ -271,6 +279,7 @@ export function createNoraAgentsRunner(
       budget,
       campaignBudget,
       usdAccounting,
+      missionProgressGuard,
     ),
     ...(runnerModelSettings ? { modelSettings: runnerModelSettings } : {}),
   });
@@ -388,12 +397,14 @@ export async function runNoraAgentsTurn(
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

@@ -620,6 +631,7 @@ export async function runNoraAgentsTurn(
     runnerModelSettings,
     campaign,
     usdAccounting,
+    missionProgressGuard,
   );
   const maxTurns = clamp.maxTurns;
   const session = input.session ?? undefined;
@@ -775,20 +787,29 @@ export async function runNoraAgentsTurn(
   } else {
     // SDK maxTurns is ABSOLUTE against state._currentTurn (not remaining).
     // Segment 1 may stop early; resume raises absolute cap toward missionMaxTurns.
+    // Productive extensions may raise the effective mission cap toward the safety
+    // envelope when MissionProgressGuard reports verifiable tool progress.
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     let runInput: string | RunState<any, Agent<any, any>> = input.userContent;
+    const initialMissionMaxTurns = maxTurns;
+    const safetyEnvelope = adaptiveDecision.explicitOverride
+      ? maxTurns
+      : ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE;
+    let effectiveMissionCap = maxTurns;
     let absoluteCap = continuationPlan.enable
-      ? Math.min(maxTurns, continuationPlan.segmentMaxTurns)
-      : maxTurns;
+      ? Math.min(effectiveMissionCap, continuationPlan.segmentMaxTurns)
+      : effectiveMissionCap;
     let allottedTurns = 0;
     let segmentsExecuted = 0;
     let continued = false;
+    let productiveExtensions = 0;
     let stopReason: ControlledContinuationObserve["stopReason"] = "complete";

     try {
       while (segmentsExecuted < CONTINUATION_MAX_SEGMENTS) {
         throwIfAborted(input.signal);
-        const atMissionCeiling = absoluteCap >= maxTurns;
+        const atMissionCeiling = absoluteCap >= effectiveMissionCap;
+        const atSafetyEnvelope = absoluteCap >= safetyEnvelope;

         try {
           const result = await runner.run(agent, runInput as never, {
@@ -798,8 +819,8 @@ export async function runNoraAgentsTurn(
             ...(session ? { session } : {}),
             ...(input.signal ? { signal: input.signal } : {}),
             maxTurns: absoluteCap,
-            // Soft handler only at mission ceiling — earlier segments throw for RunState.
-            ...(atMissionCeiling
+            // Soft handler only at safety envelope — earlier segments throw for RunState.
+            ...(atSafetyEnvelope
               ? {
                   errorHandlers: {
                     maxTurns: softMaxTurnsHandler,
@@ -817,9 +838,20 @@ export async function runNoraAgentsTurn(
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
@@ -838,6 +870,19 @@ export async function runNoraAgentsTurn(
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
@@ -857,9 +902,9 @@ export async function runNoraAgentsTurn(
               state &&
               segmentsExecuted < CONTINUATION_MAX_SEGMENTS
             ) {
-              // Raise absolute cap toward mission budget — native RunState resume.
+              // Raise absolute cap toward current effective mission — native RunState resume.
               absoluteCap = Math.min(
-                maxTurns,
+                effectiveMissionCap,
                 absoluteCap + continuationPlan.segmentMaxTurns,
               );
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
@@ -873,11 +918,47 @@ export async function runNoraAgentsTurn(
               continue;
             }

+            // R-EXT-02 — productive extension beyond initial mission budget when
+            // tool fingerprints advanced (never model self-declaration).
+            if (
+              continuationPlan.enable &&
+              atMissionCeiling &&
+              !atSafetyEnvelope &&
+              !adaptiveDecision.explicitOverride &&
+              state &&
+              productiveExtensions < PRODUCTIVE_EXTENSION_MAX &&
+              segmentsExecuted < CONTINUATION_MAX_SEGMENTS &&
+              missionProgressGuard?.hasVerifiableProgressForExtension()
+            ) {
+              const nextCap = Math.min(
+                safetyEnvelope,
+                absoluteCap + continuationPlan.segmentMaxTurns,
+              );
+              if (nextCap > absoluteCap) {
+                productiveExtensions += 1;
+                effectiveMissionCap = nextCap;
+                absoluteCap = nextCap;
+                missionProgressGuard.markExtensionConsumed();
+                // eslint-disable-next-line @typescript-eslint/no-explicit-any
+                runInput = state as RunState<any, Agent<any, any>>;
+                continued = true;
+                budget.limitReached = false;
+                continuationObserve.reasonCodes = [
+                  ...continuationObserve.reasonCodes,
+                  `productive_extension_${productiveExtensions}`,
+                  `extended_absolute_cap_${absoluteCap}`,
+                ];
+                continue;
+              }
+            }
+
             budget.limitReached = true;
             text = partial;
-            stopReason = state
-              ? "mission_budget_exhausted"
-              : "segment_limit_no_state";
+            stopReason = !state
+              ? "segment_limit_no_state"
+              : atSafetyEnvelope || absoluteCap >= safetyEnvelope
+                ? "safety_envelope_exhausted"
+                : "mission_budget_exhausted";
             break;
           }
           throw segmentError;
@@ -906,9 +987,12 @@ export async function runNoraAgentsTurn(
     continuationObserve = {
       continued,
       segmentsExecuted,
-      missionMaxTurns: maxTurns,
+      missionMaxTurns: effectiveMissionCap,
       segmentMaxTurns: continuationPlan.segmentMaxTurns,
       allottedTurns,
+      initialMissionMaxTurns,
+      safetyEnvelope,
+      productiveExtensions,
       stopReason,
       reasonCodes: continuationObserve.reasonCodes,
     };
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts
index b9eb2baa..cfc8f95b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts
@@ -20,6 +20,11 @@ import {
   TOOL_TURN_BUDGET_EXCEEDED_RESULT,
   claimToolSlot,
 } from "./turnBudget";
+import {
+  MissionProgressGuard,
+  missionProgressResultFingerprint,
+  missionProgressTargetKey,
+} from "./missionProgressGuard";

 /**
  * Generic cognitive boundary notice — not a Studio business-authority engine.
@@ -95,6 +100,8 @@ export type SfiaAgentsToolOptions = {
   definitions?: ToolDefinition[];
   /** Shared run budget — per-model-turn tool slots (CORR-OPT-C-02). */
   budget?: NoraTurnBudget;
+  /** P6 — identical tool+target streak guard (one instance per Product turn). */
+  progressGuard?: MissionProgressGuard;
 };

 /** Wrap each exposable Control Tower tool; execute only via routeToolCall. */
@@ -117,14 +124,15 @@ export function createSfiaRouteToolAdapters(
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
@@ -132,6 +140,13 @@ export function createSfiaRouteToolAdapters(
             workspaceRoot: options.workspaceRoot,
           },
         );
+        if (options.progressGuard) {
+          options.progressGuard.observe({
+            toolName: def.name,
+            targetKey: missionProgressTargetKey(def.name, wireArgs),
+            resultFingerprint: missionProgressResultFingerprint(result),
+          });
+        }
         return toolResultForModel(result);
       },
     });
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index de836ca6..261af218 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -106,6 +106,9 @@ export type NoraCognitiveTurnResult = {
     missionMaxTurns: number;
     segmentMaxTurns: number;
     allottedTurns: number;
+    initialMissionMaxTurns?: number;
+    safetyEnvelope?: number;
+    productiveExtensions?: number;
     stopReason: string;
     reasonCodes: string[];
   };
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
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index c9b64340..83cea00f 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -582,11 +582,11 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "8ab5951b261e6063"
+      "sha256_16": "1b8d5cd3ff4f3383"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "d064b36ddc2f21cd"
+      "sha256_16": "7781362a64d98c01"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
@@ -678,7 +678,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
-      "sha256_16": "17e442645cd02afb"
+      "sha256_16": "4c5a9ff205c86d83"
     },
     {
       "path": "projects/sfia-studio/app/.env.example",
```

# APPENDIX B — New files full content (HEAD)

===== BEGIN NEW FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/missionProgressGuard.ts =====
/**
 * P6 extended execution — progress guard against unproductive tool loops
 * and observable progress signals for productive budget extension.
 * Never invents progress from model narrative.
 */

export type MissionProgressSample = {
  toolName: string;
  /** Stable identity such as path / query — empty when unknown. */
  targetKey: string;
  /**
   * Observable result fingerprint when available (returned range, status, bytes).
   * Distinct fingerprints on the same target count as progress (e.g. advancing windows).
   * Identical fingerprints on the same target count toward the no-progress streak.
   */
  resultFingerprint?: string;
};

export type MissionProgressDecision =
  | { action: "continue"; reasonCodes: string[] }
  | { action: "stop_no_progress"; reasonCodes: string[] };

/** Delivery parameter — identical tool+target+result streaks before controlled stop. */
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

/** True when fingerprint represents a successful, information-bearing tool result. */
export function isUsefulMissionProgressFingerprint(fp: string): boolean {
  const t = fp.trim();
  if (!t || t === "nofp" || t === "empty") return false;
  if (t.startsWith("fail") || t.startsWith("denied") || t.startsWith("?")) {
    return false;
  }
  // ToolCallResult ok path: "ok|..."
  return t.startsWith("ok|") || t.startsWith("ok");
}

/** Result fingerprint from tool route payload (observable only). */
export function missionProgressResultFingerprint(result: unknown): string {
  if (result == null || typeof result !== "object") {
    return typeof result === "string" ? `s:${result.length}` : "empty";
  }
  const row = result as Record<string, unknown>;
  const status =
    typeof row.status === "string" ? row.status.toLowerCase() : "";
  if (status === "denied" || status === "failed") {
    return `fail|status:${status}`;
  }
  const ok = row.ok === true ? "ok" : row.ok === false ? "fail" : "?";
  const data =
    row.data && typeof row.data === "object"
      ? (row.data as Record<string, unknown>)
      : row;
  const path = typeof data.path === "string" ? data.path : "";
  const rs =
    typeof data.returnedStartLine === "number"
      ? data.returnedStartLine
      : typeof data.startLine === "number"
        ? data.startLine
        : "";
  const re =
    typeof data.returnedEndLine === "number"
      ? data.returnedEndLine
      : typeof data.endLine === "number"
        ? data.endLine
        : "";
  const bytes =
    typeof data.bytes === "number"
      ? data.bytes
      : typeof data.completeLineCount === "number"
        ? data.completeLineCount
        : "";
  const truncated = data.truncated === true ? "t" : "f";
  return `${ok}|${path}|${rs}-${re}|${bytes}|${truncated}`;
}

/**
 * Track consecutive identical tool targets+results.
 * Productive extension requires NEW useful completions since the last extension
 * checkpoint — failed/denied fingerprints never unlock an extension.
 */
export class MissionProgressGuard {
  private lastKey: string | null = null;
  private streak = 0;
  private readonly limit: number;
  private readonly seenFingerprints = new Set<string>();
  private uniqueTargets = 0;
  /** Count of distinct useful (ok) fingerprints observed. */
  private usefulCompletions = 0;
  /** Checkpoint: usefulCompletions at last productive extension (or 0 at start). */
  private usefulCompletionsAtExtension = 0;

  /** Set when observe returns stop_no_progress (same turn, before next model call). */
  stopped = false;
  stopReasonCodes: readonly string[] = [];

  constructor(limit = MISSION_NO_PROGRESS_REPEAT_LIMIT) {
    this.limit = Math.max(2, Math.trunc(limit));
  }

  observe(sample: MissionProgressSample): MissionProgressDecision {
    const tool = sample.toolName.trim() || "unknown_tool";
    const target = sample.targetKey.trim();
    const fp = (sample.resultFingerprint ?? "").trim() || "nofp";
    const key = `${tool}::${target}::${fp}`;

    // Empty target (e.g. git_local_get_head with {}) is not a documentary
    // loop identity — never trip no-progress stop and never unlock extensions.
    // Per-round tool-call caps remain the authority for parallel status probes.
    if (!target) {
      return {
        action: "continue",
        reasonCodes: ["progress_no_target_skip_streak"],
      };
    }

    if (!this.seenFingerprints.has(key)) {
      this.seenFingerprints.add(key);
      this.uniqueTargets += 1;
      if (isUsefulMissionProgressFingerprint(fp)) {
        this.usefulCompletions += 1;
      }
    }

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

  /**
   * True only when NEW useful tool completions occurred since the last extension
   * (or since mission start). New FAILED/DENIED fingerprints never qualify.
   */
  hasVerifiableProgressForExtension(): boolean {
    if (this.stopped) return false;
    return this.usefulCompletions > this.usefulCompletionsAtExtension;
  }

  /** Mark that a productive extension consumed the current useful-progress window. */
  markExtensionConsumed(): void {
    this.usefulCompletionsAtExtension = this.usefulCompletions;
  }

  snapshot(): {
    uniqueTargets: number;
    fingerprintCount: number;
    usefulCompletions: number;
    usefulCompletionsAtExtension: number;
    stopped: boolean;
  } {
    return {
      uniqueTargets: this.uniqueTargets,
      fingerprintCount: this.seenFingerprints.size,
      usefulCompletions: this.usefulCompletions,
      usefulCompletionsAtExtension: this.usefulCompletionsAtExtension,
      stopped: this.stopped,
    };
  }
}
===== END NEW FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/missionProgressGuard.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/features/project-assistant/liveActivityEvents.ts =====
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
  | "mission_cognitive_stop"
  | "mission_failed"
  | "transport_interrupted";

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

function basenamePath(path: string | undefined): string | undefined {
  if (!path) return undefined;
  const parts = path.split("/").filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1] : path;
}

function friendlyToolVerb(toolName: string | undefined): string {
  if (!toolName) return "consultation";
  if (/read_file|read_file_at_ref/i.test(toolName)) return "lecture";
  if (/search_content|search_files/i.test(toolName)) return "recherche";
  if (/get_diff|compare/i.test(toolName)) return "comparaison";
  if (/get_status|get_head|get_log/i.test(toolName)) return "inspection Git";
  return "consultation";
}

/**
 * Map Product send result → terminal activity kind.
 * Never treat ok=true alone as completed (incomplete / cognitive_stop share ok=true).
 * Browser abort alone is NOT Runner stop_confirmed.
 */
export function terminalLiveActivityFromProductResult(input: {
  result: {
    ok?: boolean;
    status?: string;
    executionIncomplete?: boolean;
  };
  /** True only when Product/orchestrator confirmed Runner stop (status stopped). */
  runnerStopConfirmed?: boolean;
  /** Transport aborted without authoritative Product stopped status. */
  transportAbortedWithoutAck?: boolean;
}): Pick<NoraLiveActivityEvent, "kind" | "label"> {
  const status = input.result.status ?? "";
  if (status === "incomplete" || input.result.executionIncomplete === true) {
    return {
      kind: "mission_incomplete",
      label: "Mission incomplète — une limite de sécurité a été atteinte",
    };
  }
  if (status === "ok" && input.result.ok === true) {
    return { kind: "mission_completed", label: "Mission terminée" };
  }
  if (status === "cognitive_stop") {
    return {
      kind: "mission_cognitive_stop",
      label: "Arrêt cognitif — Nora s’est arrêtée sur une contradiction structurante",
    };
  }
  if (input.transportAbortedWithoutAck) {
    return {
      kind: "transport_interrupted",
      label: "Connexion interrompue — arrêt serveur non confirmé",
    };
  }
  if (status === "stopped" || input.runnerStopConfirmed) {
    return { kind: "stop_confirmed", label: "Arrêt confirmé" };
  }
  if (status === "provider_error" || status === "provider_unavailable") {
    return {
      kind: "mission_failed",
      label: "Échec fournisseur — la mission n’a pas pu aboutir",
    };
  }
  return { kind: "mission_failed", label: "Mission en échec" };
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
  const shortName = basenamePath(sourcePath);
  const at = input.at ?? new Date().toISOString();
  const verb = friendlyToolVerb(toolName);

  if (status === "running" || /tool[_-]?start/i.test(input.type)) {
    return {
      kind: "tool_started",
      seq: input.seq,
      at,
      label: shortName
        ? `Consultation du document « ${shortName} ».`
        : `Nora prépare une ${verb} des sources.`,
      toolName,
      sourcePath,
    };
  }
  if (status === "failed" || /tool[_-]?fail/i.test(input.type)) {
    return {
      kind: "tool_failed",
      seq: input.seq,
      at,
      label: shortName
        ? `Échec de consultation — « ${shortName} ».`
        : `Échec d’une ${verb}.`,
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
      label: shortName
        ? `Document consulté — « ${shortName} ».`
        : `Nora a terminé une ${verb}.`,
      toolName,
      sourcePath,
    };
  }
  return {
    kind: "activity_update",
    seq: input.seq,
    at,
    label: "Nora poursuit l’analyse des sources.",
    toolName,
    sourcePath,
  };
}
===== END NEW FILE: projects/sfia-studio/app/features/project-assistant/liveActivityEvents.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/missionProgressGuard.d0.test.ts =====
/**
 * P6 — MissionProgressGuard deterministic unit tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assistantMessage,
  functionCall,
  ScriptedModel,
} from "@openai/agents/testing";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  MISSION_NO_PROGRESS_REPEAT_LIMIT,
  MISSION_NO_PROGRESS_STOP_STOCK,
  MissionProgressGuard,
  isUsefulMissionProgressFingerprint,
  missionProgressResultFingerprint,
  missionProgressTargetKey,
} from "@/lib/nora-cognitive-runtime/missionProgressGuard";

describe("MissionProgressGuard", () => {
  it("continues until identical tool+target reaches repeat limit", () => {
    const guard = new MissionProgressGuard(MISSION_NO_PROGRESS_REPEAT_LIMIT);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "projects/sfia-studio/app/package.json",
    };

    const first = guard.observe(sample);
    expect(first.action).toBe("continue");
    expect(first.reasonCodes).toContain("progress_streak:1");

    const second = guard.observe(sample);
    expect(second.action).toBe("continue");
    expect(second.reasonCodes).toContain("progress_streak:2");

    const third = guard.observe(sample);
    expect(third.action).toBe("stop_no_progress");
    expect(third.reasonCodes).toContain("mission_no_progress_repeat");
    expect(third.reasonCodes).toContain("streak:3");
    expect(third.reasonCodes).toContain("tool:git_local_read_file");
  });

  it("empty target never trips no-progress streak (status probes)", () => {
    const guard = new MissionProgressGuard(2);
    for (let i = 0; i < 6; i += 1) {
      const decision = guard.observe({
        toolName: "git_local_get_head",
        targetKey: "",
        resultFingerprint: "ok|||12|f",
      });
      expect(decision.action).toBe("continue");
      expect(decision.reasonCodes).toContain("progress_no_target_skip_streak");
    }
    expect(guard.stopped).toBe(false);
    expect(guard.snapshot().usefulCompletions).toBe(0);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("resets streak when target changes", () => {
    const guard = new MissionProgressGuard(3);
    const tool = "git_local_read_file";

    guard.observe({ toolName: tool, targetKey: "a.txt" });
    guard.observe({ toolName: tool, targetKey: "a.txt" });
    const afterSwitch = guard.observe({ toolName: tool, targetKey: "b.txt" });
    expect(afterSwitch.action).toBe("continue");
    expect(afterSwitch.reasonCodes).toContain("progress_streak:1");
  });

  it("same target without fingerprint still stops at repeat limit", () => {
    const guard = new MissionProgressGuard(3);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "projects/sfia-studio/app/package.json",
    };
    guard.observe(sample);
    guard.observe(sample);
    const third = guard.observe(sample);
    expect(third.action).toBe("stop_no_progress");
  });

  it("BUD-01 — no useful completions → extension gate closed", () => {
    const guard = new MissionProgressGuard();
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "missing.md",
      resultFingerprint: "fail|status:failed",
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-02 — useful success unlocks extension", () => {
    const guard = new MissionProgressGuard();
    const fp = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 1, returnedEndLine: 5, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md",
      resultFingerprint: fp,
    });
    expect(isUsefulMissionProgressFingerprint(fp)).toBe(true);
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);
  });

  it("BUD-03 — markExtensionConsumed closes gate until new useful progress", () => {
    const guard = new MissionProgressGuard();
    const fp = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 1, returnedEndLine: 5, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md",
      resultFingerprint: fp,
    });
    guard.markExtensionConsumed();
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-04 — after checkpoint, new useful fingerprint reopens extension", () => {
    const guard = new MissionProgressGuard();
    const fp1 = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 1, returnedEndLine: 5, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@1-5",
      resultFingerprint: fp1,
    });
    guard.markExtensionConsumed();
    const fp2 = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 6, returnedEndLine: 10, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@6-10",
      resultFingerprint: fp2,
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);
  });

  it("BUD-05 — after checkpoint, new fail fingerprints never reopen extension", () => {
    const guard = new MissionProgressGuard();
    const okFp = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 1, returnedEndLine: 5, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@1-5",
      resultFingerprint: okFp,
    });
    guard.markExtensionConsumed();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "b.md",
      resultFingerprint: "fail|status:failed",
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "c.md",
      resultFingerprint: "denied|x",
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
    expect(guard.snapshot().usefulCompletions).toBe(1);
  });

  it("BUD-06 — repeated identical useful fingerprint does not increment useful count", () => {
    const guard = new MissionProgressGuard();
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "doc.md",
      resultFingerprint: "ok|doc.md|1-5|100|f",
    };
    guard.observe(sample);
    guard.observe(sample);
    guard.markExtensionConsumed();
    expect(guard.snapshot().usefulCompletions).toBe(1);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-07..08 — isUsefulMissionProgressFingerprint classifies ok vs fail/empty", () => {
    expect(isUsefulMissionProgressFingerprint("ok|p|1-2|10|f")).toBe(true);
    expect(isUsefulMissionProgressFingerprint("ok")).toBe(true);
    expect(isUsefulMissionProgressFingerprint("fail|status:failed")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("denied|x")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("?|x")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("nofp")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("empty")).toBe(false);
  });

  it("BUD-09 — all distinct failed fingerprints never unlock extension", () => {
    const guard = new MissionProgressGuard();
    for (let i = 0; i < 5; i += 1) {
      guard.observe({
        toolName: "git_local_read_file",
        targetKey: `fail-${i}.md`,
        resultFingerprint: `fail|status:failed|${i}`,
      });
    }
    expect(guard.snapshot().usefulCompletions).toBe(0);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-10 — stopped guard blocks extension even with useful delta", () => {
    const guard = new MissionProgressGuard(3);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "loop.md",
      resultFingerprint: "ok|loop.md|1-1|1|f",
    };
    guard.observe(sample);
    guard.observe(sample);
    guard.observe(sample);
    expect(guard.stopped).toBe(true);
    guard.markExtensionConsumed();
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-11 — fail then useful allows extension", () => {
    const guard = new MissionProgressGuard();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "x.md",
      resultFingerprint: "fail|status:failed",
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "y.md",
      resultFingerprint: "ok|y.md|1-2|20|f",
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);
  });

  it("BUD-12 — snapshot tracks extension checkpoint", () => {
    const guard = new MissionProgressGuard();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md",
      resultFingerprint: "ok|a.md|1-1|1|f",
    });
    guard.markExtensionConsumed();
    const snap = guard.snapshot();
    expect(snap.usefulCompletions).toBe(1);
    expect(snap.usefulCompletionsAtExtension).toBe(1);
  });

  it("BUD-13 — distinct fail targets do not count as useful completions", () => {
    const guard = new MissionProgressGuard();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md",
      resultFingerprint: missionProgressResultFingerprint({ ok: false, data: { path: "a.md" } }),
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "b.md",
      resultFingerprint: missionProgressResultFingerprint({
        status: "denied",
        data: { path: "b.md" },
      }),
    });
    expect(guard.snapshot().usefulCompletions).toBe(0);
    expect(guard.snapshot().fingerprintCount).toBe(2);
  });

  it("BUD-14 — useful consumed then only fails keeps gate closed", () => {
    const guard = new MissionProgressGuard();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "good.md",
      resultFingerprint: "ok|good.md|1-3|30|f",
    });
    guard.markExtensionConsumed();
    for (const target of ["f1.md", "f2.md", "f3.md"]) {
      guard.observe({
        toolName: "git_local_read_file",
        targetKey: target,
        resultFingerprint: `fail|${target}`,
      });
    }
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("distinct result fingerprints on same target reset streak", () => {
    const guard = new MissionProgressGuard(3);
    const tool = "git_local_read_file";
    const target = "doc.md@1-50";
    const fpA = missionProgressResultFingerprint({
      ok: true,
      data: { returnedStartLine: 1, returnedEndLine: 10, bytes: 50, truncated: false },
    });
    const fpB = missionProgressResultFingerprint({
      ok: true,
      data: { returnedStartLine: 11, returnedEndLine: 20, bytes: 50, truncated: false },
    });
    guard.observe({ toolName: tool, targetKey: target, resultFingerprint: fpA });
    guard.observe({ toolName: tool, targetKey: target, resultFingerprint: fpA });
    const afterAdvance = guard.observe({
      toolName: tool,
      targetKey: target,
      resultFingerprint: fpB,
    });
    expect(afterAdvance.action).toBe("continue");
    expect(afterAdvance.reasonCodes).toContain("progress_streak:1");
  });
});

describe("missionProgressTargetKey", () => {
  it("includes line window for read_file", () => {
    expect(
      missionProgressTargetKey("git_local_read_file", {
        path: "doc.md",
        startLine: 10,
        endLine: 20,
      }),
    ).toBe("doc.md@10-20");
  });

  it("distinguishes path-only reads", () => {
    expect(
      missionProgressTargetKey("git_local_read_file", { path: "doc.md" }),
    ).toBe("doc.md");
  });
});

describe("MissionProgressGuard — Product tool adapters", () => {
  it("stops runNoraAgentsTurn after three identical read targets", async () => {
    const path = "projects/sfia-studio/app/package.json";
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path, maxBytes: 512 },
          { callId: "loop1" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path, maxBytes: 512 },
          { callId: "loop2" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path, maxBytes: 512 },
          { callId: "loop3" },
        ),
      ],
      [assistantMessage("unreachable")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:mission-progress-guard",
      projectId: "prj:mission-progress-guard",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Read the same file repeatedly.",
      model,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      maxTurns: 8,
    });
    expect(turn.toolCalls).toBeGreaterThanOrEqual(3);
    expect(turn.limitReached).toBe(true);
    expect(turn.continuationObserve?.stopReason).toBe("mission_no_progress");
    expect(turn.continuationObserve?.reasonCodes).toContain(
      "mission_no_progress_repeat",
    );
    expect(turn.text).toBe(MISSION_NO_PROGRESS_STOP_STOCK);
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/missionProgressGuard.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.extendedCorpusCaps.d0.test.ts =====
/**
 * P6 — Large documentary corpus delivery caps (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  CT_DEFAULT_READ_MAX_BYTES,
  CT_MAX_TOOL_RESULT_CHARS,
} from "@/lib/platform/tools/types";
import { prepareGitLocalReadDataForModel } from "@/lib/platform/tools/toolRouter";

describe("P6 extended documentary corpus caps", () => {
  it("raises tool-result and default read caps for long documents", () => {
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(100_000);
    expect(CT_DEFAULT_READ_MAX_BYTES).toBe(200_000);
    // Former experimental universal 12k is no longer the Product ceiling.
    expect(CT_MAX_TOOL_RESULT_CHARS).toBeGreaterThan(12_000);
  });

  it("returns a ~90k character document within the raised model envelope", () => {
    const body = `${"α".repeat(90_000)}\n`;
    const prepared = prepareGitLocalReadDataForModel({
      path: "docs/long.md",
      content: body,
      startLine: 1,
      endLine: 1,
      requestedStartLine: 1,
      requestedEndLine: 1,
      returnedStartLine: 1,
      totalLines: 1,
      documentHasMore: false,
      truncated: false,
    });
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(typeof prepared.data).toBe("object");
  });

  it("keeps short documents fully within the raised envelope", () => {
    const body = "short doc\nline 2\n";
    const prepared = prepareGitLocalReadDataForModel({
      path: "docs/short.md",
      content: body,
      startLine: 1,
      endLine: 2,
      requestedStartLine: 1,
      requestedEndLine: 2,
      returnedStartLine: 1,
      totalLines: 2,
      documentHasMore: false,
      truncated: false,
    });
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(prepared.json).toContain("short doc");
    expect(prepared.truncated).toBe(false);
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.extendedCorpusCaps.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts =====
/**
 * R-EXT-02 — Productive mission budget extension (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE,
  ProductSqliteSession,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { PRODUCTIVE_EXTENSION_MAX } from "@/lib/nora-cognitive-runtime/controlledContinuation";
import {
  MISSION_NO_PROGRESS_REPEAT_LIMIT,
  MissionProgressGuard,
  missionProgressResultFingerprint,
} from "@/lib/nora-cognitive-runtime/missionProgressGuard";

const DOC_PATH = "projects/sfia-studio/app/package.json";
const COMPLETE_MARKER = "PRODUCTIVE_EXT_COMPLETE";

const dirs: string[] = [];

function tmpSession(projectId: string): ProductSqliteSession {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-ext-"));
  dirs.push(dir);
  return new ProductSqliteSession({
    projectId,
    dbPath: path.join(dir, "session.sqlite"),
  });
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function readWindow(pass: number) {
  const startLine = (pass - 1) * 8 + 1;
  return {
    path: DOC_PATH,
    maxBytes: 2048,
    startLine,
    endLine: startLine + 7,
  };
}

function sevenTurnDocumentaryScript() {
  return [
    [functionCall("git_local_read_file", readWindow(1), { callId: "e1" })],
    [functionCall("git_local_read_file", readWindow(2), { callId: "e2" })],
    [functionCall("git_local_read_file", readWindow(3), { callId: "e3" })],
    [functionCall("git_local_read_file", readWindow(4), { callId: "e4" })],
    [functionCall("git_local_read_file", readWindow(5), { callId: "e5" })],
    [functionCall("git_local_read_file", readWindow(6), { callId: "e6" })],
    [assistantMessage(`${COMPLETE_MARKER} — synthesis after six reads.`)],
  ];
}

describe("R-EXT-02 — MissionProgressGuard extension signals", () => {
  it("exports safety envelope and productive extension cap", () => {
    expect(ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE).toBe(36);
    expect(PRODUCTIVE_EXTENSION_MAX).toBe(3);
  });

  it("BUD-02/03/04 — useful unlocks extension; checkpoint; new useful reopens", () => {
    const guard = new MissionProgressGuard(MISSION_NO_PROGRESS_REPEAT_LIMIT);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);

    const fp1 = missionProgressResultFingerprint({
      ok: true,
      data: {
        path: "a.md",
        returnedStartLine: 1,
        returnedEndLine: 10,
        bytes: 100,
        truncated: false,
      },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@1-10",
      resultFingerprint: fp1,
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);

    guard.markExtensionConsumed();
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);

    const fp2 = missionProgressResultFingerprint({
      ok: true,
      data: {
        path: "a.md",
        returnedStartLine: 11,
        returnedEndLine: 20,
        bytes: 100,
        truncated: false,
      },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@11-20",
      resultFingerprint: fp2,
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);
  });

  it("BUD-06 — identical useful fingerprint does not add useful completions", () => {
    const guard = new MissionProgressGuard(3);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "doc.md",
      resultFingerprint: "ok|doc.md|1-5|100|f",
    };
    guard.observe(sample);
    guard.observe(sample);
    guard.markExtensionConsumed();
    expect(guard.snapshot().usefulCompletions).toBe(1);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-05/09/14 — fail-only fingerprints never unlock extension after checkpoint", () => {
    const guard = new MissionProgressGuard(MISSION_NO_PROGRESS_REPEAT_LIMIT);
    const okFp = missionProgressResultFingerprint({
      ok: true,
      data: {
        path: "seed.md",
        returnedStartLine: 1,
        returnedEndLine: 3,
        bytes: 40,
        truncated: false,
      },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "seed.md",
      resultFingerprint: okFp,
    });
    guard.markExtensionConsumed();
    for (let i = 0; i < 4; i += 1) {
      guard.observe({
        toolName: "git_local_read_file",
        targetKey: `miss-${i}.md`,
        resultFingerprint: missionProgressResultFingerprint({
          ok: false,
          data: { path: `miss-${i}.md` },
        }),
      });
    }
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("identical tool+target+fingerprint streak stops at repeat limit", () => {
    const guard = new MissionProgressGuard(3);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "doc.md",
      resultFingerprint: "ok|doc.md|1-5|100|f",
    };
    guard.observe(sample);
    guard.observe(sample);
    const third = guard.observe(sample);
    expect(third.action).toBe("stop_no_progress");
  });

  it("distinct fingerprints on same target reset streak (advancing windows)", () => {
    const guard = new MissionProgressGuard(3);
    const tool = "git_local_read_file";
    const target = "doc.md@1-100";
    guard.observe({
      toolName: tool,
      targetKey: target,
      resultFingerprint: "ok|doc.md|1-10|100|f",
    });
    guard.observe({
      toolName: tool,
      targetKey: target,
      resultFingerprint: "ok|doc.md|1-10|100|f",
    });
    const afterNewWindow = guard.observe({
      toolName: tool,
      targetKey: target,
      resultFingerprint: "ok|doc.md|11-20|100|f",
    });
    expect(afterNewWindow.action).toBe("continue");
    expect(afterNewWindow.reasonCodes).toContain("progress_streak:1");
  });
});

describe("R-EXT-02 — productive extension integration (ScriptedModel)", () => {
  it("mission maxTurns=6 continues via productive extension when reads advance", async () => {
    const session = tmpSession("prj:p6-productive-ext");
    const model = new ScriptedModel(sevenTurnDocumentaryScript());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-productive-ext",
      projectId: "prj:p6-productive-ext",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
      adaptiveMaxTurnsDecision: {
        requestedMaxTurns: 6,
        strategyClass: "Deep",
        reasonCodes: ["test_adaptive_pin_6"],
        floor: 3,
        ceiling: 24,
        explicitOverride: false,
      },
    });

    const ext = result.continuationObserve?.productiveExtensions ?? 0;
    const codes = result.continuationObserve?.reasonCodes ?? [];
    expect(
      ext >= 1 || codes.some((c) => c.startsWith("productive_extension_")),
    ).toBe(true);
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    session.close();
  });

  it("explicit maxTurns pins safety envelope — no productive extension beyond explicit cap", async () => {
    const session = tmpSession("prj:p6-explicit-cap");
    const model = new ScriptedModel(sevenTurnDocumentaryScript());
    const explicitMax = 8;
    const result = await runNoraAgentsTurn({
      correlationId: "p6-explicit-cap",
      projectId: "prj:p6-explicit-cap",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: explicitMax,
      enableControlledContinuation: true,
    });

    expect(result.continuationObserve?.safetyEnvelope).toBe(explicitMax);
    expect(result.continuationObserve?.productiveExtensions ?? 0).toBe(0);
    expect(
      (result.continuationObserve?.reasonCodes ?? []).some((c) =>
        c.startsWith("productive_extension_"),
      ),
    ).toBe(false);
    session.close();
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.representativeCorpus.d0.test.ts =====
/**
 * R-EXT-04 — Representative documentary corpus (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import { GitLocalReadAdapter } from "@/lib/platform/repository/gitLocalReadAdapter";
import {
  CT_MAX_TOOL_RESULT_CHARS,
  CT_DEFAULT_READ_MAX_BYTES,
} from "@/lib/platform/tools/types";
import {
  createToolCallId,
  prepareGitLocalReadDataForModel,
  routeToolCall,
} from "@/lib/platform/tools/toolRouter";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import {
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";

const dirs: string[] = [];

function initGitRepo(root: string): void {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: root });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: root,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: root });
  execFileSync("git", ["add", "."], { cwd: root });
  execFileSync("git", ["commit", "-m", "init"], { cwd: root });
}

function tmpCorpusRepo(docSpecs: { rel: string; body: string }[]): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-corpus-"));
  dirs.push(dir);
  for (const spec of docSpecs) {
    fs.mkdirSync(path.join(dir, path.dirname(spec.rel)), { recursive: true });
    fs.writeFileSync(path.join(dir, spec.rel), spec.body, "utf8");
  }
  initGitRepo(dir);
  return dir;
}

function corpusReadScript(relPaths: string[]): unknown[][] {
  const steps: unknown[][] = relPaths.map((rel, i) => [
    functionCall(
      "git_local_read_file",
      { path: rel, maxBytes: CT_DEFAULT_READ_MAX_BYTES },
      { callId: `corpus-read-${i + 1}` },
    ),
  ]);
  steps.push([
    assistantMessage(
      `Corpus review complete — ${relPaths.length} documents read.`,
    ),
  ]);
  return steps;
}

afterEach(() => {
  vi.restoreAllMocks();
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("R-EXT-04 — representative corpus capacity", () => {
  it("~90k char mono-doc: adapter read + prepareGitLocalReadDataForModel within CT_MAX_TOOL_RESULT_CHARS", () => {
    const token = "FACT_MONO_90K_UNIQUE_ALPHA";
    const body = `${token}\n${"ζ".repeat(90_000 - token.length - 1)}\n`;
    const rel = "projects/sfia-studio/docs/mono-long.md";
    const root = tmpCorpusRepo([{ rel, body }]);
    const adapter = new GitLocalReadAdapter(root);
    const read = adapter.readFile(rel, CT_DEFAULT_READ_MAX_BYTES);
    expect(read.truncated).toBe(false);
    expect(read.content).toContain(token);

    const prepared = prepareGitLocalReadDataForModel({
      path: rel,
      content: read.content,
      startLine: read.startLine,
      endLine: read.returnedEndLine ?? read.endLine,
      requestedStartLine: read.startLine,
      requestedEndLine: read.endLine,
      returnedStartLine: read.returnedStartLine,
      totalLines: read.totalLines,
      documentHasMore: read.documentHasMore,
      truncated: read.truncated,
    });
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(prepared.json).toContain(token);
  });

  for (const count of [5, 10, 15] as const) {
    it(`${count} docs — runNoraAgentsTurn reads each doc; FACT-i in tool payloads`, async () => {
      const relPaths = Array.from(
        { length: count },
        (_, i) => `projects/sfia-studio/docs/corpus/doc-${i + 1}.md`,
      );
      const specs = relPaths.map((rel, i) => ({
        rel,
        body: `FACT-${i + 1}-UNIQUE\nline-${i + 1}-body\n`,
      }));
      const root = tmpCorpusRepo(specs);
      const events: TechnicalEvent[] = [];
      const toolPayloads: string[] = [];

      const routeModule = await import("@/lib/platform/tools/toolRouter");
      const originalRoute = routeModule.routeToolCall;
      vi.spyOn(routeModule, "routeToolCall").mockImplementation(
        async (request, ctx) => {
          const result = await originalRoute(request, ctx);
          if (result.ok && request.name === "git_local_read_file") {
            toolPayloads.push(JSON.stringify(result.data));
          }
          return result;
        },
      );

      const turn = await runNoraAgentsTurn({
        correlationId: `p6-corpus-${count}`,
        projectId: `prj:p6-corpus-${count}`,
        systemInstructions: sfiaBoundaryInstructions(),
        userContent: `Read all ${count} corpus documents in order.`,
        model: new ScriptedModel(corpusReadScript(relPaths) as never),
        workspaceRoot: root,
        enableTools: true,
        maxTurns: Math.max(24, count * 2 + 4),
        sink: { emit: (e) => events.push(e) },
      });

      expect(turn.toolCalls).toBe(count);
      expect(
        events.filter((e) => e.type === "TOOL_SUCCEEDED").length,
      ).toBe(count);

      const haystack = [turn.text, JSON.stringify(events), ...toolPayloads].join(
        "\n",
      );
      for (let i = 1; i <= count; i += 1) {
        expect(haystack).toContain(`FACT-${i}-UNIQUE`);
      }

      const cov = collectToolTelemetry(events).readCoverage;
      expect(cov.facts.length).toBeGreaterThanOrEqual(count);
      expect(cov.facts.filter((f) => f.coverage === "full").length).toBe(
        count,
      );
    });
  }

  it("partial range read — PARTIAL coverage, not FULL", async () => {
    const rel = "projects/sfia-studio/docs/partial.md";
    const lines = Array.from({ length: 40 }, (_, i) => `FACT-P-${i + 1}`).join(
      "\n",
    );
    const root = tmpCorpusRepo([{ rel, body: `${lines}\n` }]);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: { path: rel, startLine: 1, endLine: 5 },
        sessionId: "p6-corpus-partial",
      },
      { workspaceRoot: root, sink: { emit: (e) => events.push(e) } },
    );
    expect(result.ok).toBe(true);
    const cov = collectToolTelemetry(events).readCoverage;
    expect(cov.facts[0]?.coverage).toBe("partial");
    expect(cov.facts[0]?.coverage).not.toBe("full");
    if (result.ok) {
      const content = String((result.data as { content?: string }).content ?? "");
      expect(content).toContain("FACT-P-1");
      expect(content).not.toContain("FACT-P-40");
    }
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.representativeCorpus.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/runnerAbortSignal.d0.test.ts =====
/**
 * P6 — AbortSignal reaches Agents runner mid tool sequence (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import type { Model, ModelRequest, ModelResponse } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import {
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { NoraTurnAbortedError, abortError } from "@/lib/nora-cognitive-runtime/noraTurnAbort";

const dirs: string[] = [];

function tmpReadRepo(relPath: string, body: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-abort-read-"));
  dirs.push(dir);
  fs.mkdirSync(path.join(dir, path.dirname(relPath)), { recursive: true });
  fs.writeFileSync(path.join(dir, relPath), body, "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "t@e.com"], { cwd: dir });
  execFileSync("git", ["config", "user.name", "t"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

function abortAfterFirstToolModel(
  relPath: string,
  hooks: { onSecondModelCall?: () => void; modelCalls?: number },
): Model {
  const inner = new ScriptedModel([
    [functionCall("git_local_read_file", { path: relPath }, { callId: "r1" })],
    [functionCall("git_local_read_file", { path: relPath }, { callId: "r2" })],
    [functionCall("git_local_read_file", { path: relPath }, { callId: "r3" })],
    [assistantMessage("unreachable-after-abort")],
  ]);
  let calls = 0;
  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      calls += 1;
      hooks.modelCalls = calls;
      if (calls === 1) {
        return inner.getResponse(request);
      }
      if (calls === 2) {
        hooks.onSecondModelCall?.();
      }
      await new Promise<void>((_resolve, reject) => {
        const fail = () => reject(abortError());
        if (request.signal?.aborted) {
          fail();
          return;
        }
        request.signal?.addEventListener("abort", fail, { once: true });
      });
      throw new Error("unreachable");
    },
    async *getStreamedResponse(): AsyncIterable<never> {
      throw new Error("streaming not used");
    },
  };
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("P6 — runner AbortSignal mid tool sequence", () => {
  it("aborts during multi-step ScriptedModel tools — one read, no final assistant", async () => {
    const rel = "projects/sfia-studio/docs/abort-probe.md";
    const root = tmpReadRepo(rel, "ABORT_PROBE_FACT\n");
    const hooks: { onSecondModelCall?: () => void; modelCalls?: number } = {};
    const controller = new AbortController();

    const pending = runNoraAgentsTurn({
      correlationId: "p6-runner-abort-mid-tools",
      projectId: "prj:runner-abort",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Read the probe file repeatedly.",
      model: abortAfterFirstToolModel(rel, hooks),
      workspaceRoot: root,
      enableTools: true,
      maxTurns: 12,
      signal: controller.signal,
    });

    const started = Date.now();
    while (hooks.modelCalls !== 2 && Date.now() - started < 5000) {
      await new Promise((r) => setTimeout(r, 15));
    }
    expect(hooks.modelCalls).toBe(2);
    controller.abort();

    await expect(pending).rejects.toBeInstanceOf(NoraTurnAbortedError);
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/nora-cognitive-runtime/runnerAbortSignal.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/conversationSurface.liveActivityStop.d0.test.tsx =====
/** @vitest-environment jsdom */
/**
 * P6 — REAL ConversationSurface (React + RTL), not static CSS harness HTML.
 * Proves idle Send, working Stop + in-thread Nora activity, live activity
 * timeline disclosure, and stopped / incomplete banners via data-testid contract.
 * ZERO OpenAI / ZERO :3020.
 */
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

afterEach(() => {
  cleanup();
});

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    liveActivityEvents: [],
    uiState: "READY",
    error: null,
    executionIncomplete: false,
    modeLabel: "fixture",
    ephemeralNotice: "notice",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: "none",
    qualificationFreshness: "none",
    durableOutcomeFreshness: "none",
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    transcriptAvailability: "available",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

const SAMPLE_EVENTS: readonly NoraLiveActivityEvent[] = [
  {
    kind: "mission_started",
    seq: 1,
    at: "2026-10-14T12:00:00.000Z",
    label: "Mission démarrée",
  },
  {
    kind: "tool_started",
    seq: 2,
    at: "2026-10-14T12:00:01.000Z",
    label: "Lecture du dépôt",
    toolName: "read_file",
    sourcePath: "docs/plan.md",
  },
  {
    kind: "activity_update",
    seq: 3,
    at: "2026-10-14T12:00:02.000Z",
    label: "Analyse en cours…",
  },
];

describe("ConversationSurface live activity + Stop (REAL React DET)", () => {
  it("idle — stopAvailable false shows Envoyer, hides Arrêter", () => {
    render(
      <ConversationSurface
        controller={stubController({
          stopAvailable: false,
          busy: false,
          canSend: true,
          draft: "Bonjour Nora",
          uiState: "READY",
        })}
      />,
    );

    expect(screen.queryByTestId("project-assistant-stop")).toBeNull();
    const send = screen.getByTestId("project-assistant-send");
    expect(send).toHaveTextContent("Envoyer");
    expect(send).not.toBeDisabled();
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-stop",
      "unavailable",
    );
    expect(
      screen.queryByTestId("project-assistant-nora-activity"),
    ).toBeNull();
  });

  it("working — stopAvailable true + in-thread activity shows Arrêter and live label", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          stopAvailable: true,
          uiState: "ASSISTANT_WORKING",
          messages: [
            { id: "m-user-1", role: "user", content: "Analyser le périmètre." },
          ],
        })}
      />,
    );

    expect(screen.queryByTestId("project-assistant-send")).toBeNull();
    const stop = screen.getByTestId("project-assistant-stop");
    expect(stop).toHaveTextContent("Arrêter");
    expect(stop).toHaveAttribute("aria-label", "Arrêter la réponse de Nora");

    const activity = screen.getByTestId("project-assistant-nora-activity");
    expect(screen.getByTestId("project-assistant-messages").contains(activity)).toBe(
      true,
    );
    expect(
      screen.getByTestId("project-assistant-nora-activity-label"),
    ).toHaveTextContent("Nora travaille…");
    expect(activity).toHaveAttribute("data-nora-stop", "available");
  });

  it("liveActivityEvents — Détail de l’activité lists timeline events", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          stopAvailable: true,
          uiState: "ASSISTANT_WORKING",
          liveActivityEvents: [...SAMPLE_EVENTS],
          messages: [
            { id: "m-user-1", role: "user", content: "Mission longue." },
          ],
        })}
      />,
    );

    expect(
      screen.getByTestId("project-assistant-nora-activity-label"),
    ).toHaveTextContent("Analyse en cours…");

    const details = screen.getByTestId("project-assistant-nora-activity-details");
    expect(within(details).getByText("Détail de l’activité")).toBeInTheDocument();

    fireEvent.click(within(details).getByText("Détail de l’activité"));

    const timeline = details.querySelector("ol");
    expect(timeline).toBeTruthy();
    expect(timeline!.textContent).toMatch(/mission_started/);
    expect(timeline!.textContent).toMatch(/Mission démarrée/);
    expect(timeline!.textContent).toMatch(/tool_started/);
    expect(timeline!.textContent).toMatch(/Lecture du dépôt/);
    expect(timeline!.textContent).toMatch(/activity_update/);
  });

  it("STOPPED banner — Réponse interrompue + retry; Send returns when idle", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: false,
          canSend: true,
          stopAvailable: false,
          uiState: "STOPPED",
          error: null,
          draft: "",
        })}
      />,
    );

    expect(screen.getByTestId("project-assistant-stopped")).toHaveTextContent(
      "Réponse interrompue",
    );
    expect(screen.getByTestId("project-assistant-retry-stopped")).toHaveTextContent(
      "Réessayer",
    );
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    expect(screen.getByTestId("project-assistant-send")).toBeInTheDocument();
  });

  it("executionIncomplete — Analyse inachevée banner on REAL panel root", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: false,
          canSend: true,
          stopAvailable: false,
          uiState: "ANSWERED",
          executionIncomplete: true,
          messages: [
            { id: "m-user-1", role: "user", content: "Question." },
            {
              id: "m-asst-1",
              role: "assistant",
              content: "Réponse partielle (budget).",
            },
          ],
        })}
      />,
    );

    const panel = screen.getByTestId("project-assistant-panel");
    expect(panel.getAttribute("data-execution-incomplete")).toBe("true");
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toHaveTextContent("Analyse inachevée");
    expect(
      screen.getByTestId("project-assistant-incomplete-notice").textContent,
    ).toMatch(/limite|inachev|analyse complète/i);
    expect(screen.queryByTestId("project-assistant-stopped")).toBeNull();
  });

  it("Stop click invokes stopCurrentResponse once", async () => {
    const stopCurrentResponse = vi.fn();
    const user = userEvent.setup();
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          stopAvailable: true,
          uiState: "ASSISTANT_WORKING",
          stopCurrentResponse,
        })}
      />,
    );
    await user.click(screen.getByTestId("project-assistant-stop"));
    expect(stopCurrentResponse).toHaveBeenCalledTimes(1);
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/conversationSurface.liveActivityStop.d0.test.tsx =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/sendCancellableAssistantTurn.ndjson.d0.test.ts =====
/**
 * P6 — NDJSON progressive send transport (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { sendCancellableAssistantTurn } from "@/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn";
import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

function ndjsonBody(lines: unknown[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const text = lines.map((l) => `${JSON.stringify(l)}\n`).join("");
  return new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(text));
      controller.close();
    },
  });
}

describe("P6 sendCancellableAssistantTurn NDJSON", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("emits activity events before the Product result", async () => {
    const activities: NoraLiveActivityEvent[] = [];
    const started: NoraLiveActivityEvent = {
      kind: "mission_started",
      seq: 1,
      at: "2026-10-14T12:00:00.000Z",
      label: "Nora démarre la mission",
    };
    const tool: NoraLiveActivityEvent = {
      kind: "tool_started",
      seq: 2,
      at: "2026-10-14T12:00:01.000Z",
      label: "Consultation en cours — git_local_read_file",
      toolName: "git_local_read_file",
    };
    const result = {
      ok: true,
      status: "ok",
      mode: "assisted",
      assistantMessage: { role: "assistant", content: "done" },
    };

    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        headers: {
          get: (name: string) =>
            name.toLowerCase() === "content-type"
              ? "application/x-ndjson"
              : null,
        },
        body: ndjsonBody([
          { type: "activity", event: started },
          { type: "activity", event: tool },
          { type: "result", result },
        ]),
        json: async () => result,
      })),
    );

    const out = await sendCancellableAssistantTurn(
      { projectId: "proj_test", content: "hello" },
      new AbortController().signal,
      { onActivity: (e) => activities.push(e) },
    );

    expect(activities.map((a) => a.kind)).toEqual([
      "mission_started",
      "tool_started",
    ]);
    expect(out).toEqual(result);
  });

  it("falls back to JSON when content-type is application/json", async () => {
    const result = {
      ok: true,
      status: "ok",
      mode: "assisted",
      assistantMessage: { role: "assistant", content: "json" },
    };
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        headers: {
          get: (name: string) =>
            name.toLowerCase() === "content-type"
              ? "application/json"
              : null,
        },
        body: null,
        json: async () => result,
      })),
    );
    const out = await sendCancellableAssistantTurn(
      { projectId: "proj_test", content: "hello" },
      new AbortController().signal,
    );
    expect(out).toEqual(result);
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/sendCancellableAssistantTurn.ndjson.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/serverCancellation.d0.test.ts =====
/**
 * R-EXT-05 — Server cancellation + NDJSON transport (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { sendCancellableAssistantTurn } from "@/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn";
import { terminalLiveActivityFromProductResult } from "@/features/project-assistant/liveActivityEvents";
import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

function stopAvailable(input: {
  cancellable: boolean;
  blocked: boolean;
  f3Busy: boolean;
}): boolean {
  return input.cancellable && !input.blocked && !input.f3Busy;
}

function ndjsonBody(lines: unknown[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const text = lines.map((l) => `${JSON.stringify(l)}\n`).join("");
  return new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(text));
      controller.close();
    },
  });
}

describe("R-EXT-05 — AbortSignal reaches fetch", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("passes AbortSignal to fetch and records abort on controller", async () => {
    let capturedSignal: AbortSignal | undefined;
    const controller = new AbortController();

    vi.stubGlobal(
      "fetch",
      vi.fn(async (_url: string, init?: RequestInit) => {
        capturedSignal = init?.signal ?? undefined;
        await new Promise((resolve) => setTimeout(resolve, 50));
        return {
          ok: true,
          headers: { get: () => "application/json" },
          json: async () => ({
            ok: true,
            status: "ok",
            mode: "assisted",
            assistantMessage: { role: "assistant", content: "x" },
          }),
        };
      }),
    );

    const pending = sendCancellableAssistantTurn(
      { projectId: "proj_abort", content: "hi" },
      controller.signal,
    );
    controller.abort();
    await pending.catch(() => undefined);

    expect(capturedSignal).toBe(controller.signal);
    expect(capturedSignal?.aborted).toBe(true);
  });
});

describe("R-EXT-05 — stopAvailable early formula", () => {
  it("cancellable live turn → stop available", () => {
    expect(
      stopAvailable({ cancellable: true, blocked: false, f3Busy: false }),
    ).toBe(true);
  });

  it("idle or blocked → stop unavailable", () => {
    expect(
      stopAvailable({ cancellable: false, blocked: false, f3Busy: false }),
    ).toBe(false);
    expect(
      stopAvailable({ cancellable: true, blocked: true, f3Busy: false }),
    ).toBe(false);
  });
});

describe("R-EXT-05 — NDJSON progressive parser", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("emits activity before result; skips malformed lines; ignores activity after result", async () => {
    const activities: NoraLiveActivityEvent[] = [];
    const before: NoraLiveActivityEvent = {
      kind: "tool_started",
      seq: 1,
      at: "2026-10-14T12:00:00.000Z",
      label: "before",
    };
    const after: NoraLiveActivityEvent = {
      kind: "activity_update",
      seq: 99,
      at: "2026-10-14T12:00:01.000Z",
      label: "after-result-should-drop",
    };
    const result = {
      ok: true,
      status: "ok",
      mode: "assisted",
      assistantMessage: { role: "assistant", content: "done" },
    };

    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        headers: {
          get: (name: string) =>
            name.toLowerCase() === "content-type"
              ? "application/x-ndjson"
              : null,
        },
        body: new ReadableStream<Uint8Array>({
          start(controller) {
            const enc = new TextEncoder();
            controller.enqueue(
              enc.encode(
                [
                  JSON.stringify({ type: "activity", event: before }),
                  "{not-valid-json",
                  JSON.stringify({ type: "result", result }),
                  JSON.stringify({ type: "activity", event: after }),
                ].join("\n") + "\n",
              ),
            );
            controller.close();
          },
        }),
        json: async () => result,
      })),
    );

    const out = await sendCancellableAssistantTurn(
      { projectId: "proj_ndjson", content: "hello" },
      new AbortController().signal,
      { onActivity: (e) => activities.push(e) },
    );

    expect(activities.map((a) => a.label)).toEqual(["before"]);
    expect(out).toEqual(result);
  });
});

describe("R-EXT-05 — transport abort ≠ stop_confirmed", () => {
  it("terminalLiveActivityFromProductResult maps transport abort to provider_unavailable + transport_interrupted", () => {
    const terminal = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_unavailable" },
      transportAbortedWithoutAck: true,
    });
    expect(terminal.kind).toBe("transport_interrupted");
    expect(terminal.kind).not.toBe("stop_confirmed");
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/serverCancellation.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/stopAvailableEarly.d0.test.ts =====
/**
 * P6 — Stop availability contract (deterministic unit of the busy/cancellable rule).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";

/**
 * Mirrors useProductConversation stopAvailable formula.
 * Stop must replace Send whenever an AbortController-backed turn is live,
 * even before React startTransition flips uiState to ASSISTANT_WORKING.
 */
function stopAvailable(input: {
  cancellable: boolean;
  blocked: boolean;
  f3Busy: boolean;
}): boolean {
  return input.cancellable && !input.blocked && !input.f3Busy;
}

describe("P6 stopAvailable early cancellable contract", () => {
  it("SENDING/WORKING: cancellable true → Arrêter available", () => {
    expect(
      stopAvailable({ cancellable: true, blocked: false, f3Busy: false }),
    ).toBe(true);
  });

  it("IDLE: cancellable false → Envoyer path (stop unavailable)", () => {
    expect(
      stopAvailable({ cancellable: false, blocked: false, f3Busy: false }),
    ).toBe(false);
  });

  it("blocked or f3Busy suppresses stop even if cancellable", () => {
    expect(
      stopAvailable({ cancellable: true, blocked: true, f3Busy: false }),
    ).toBe(false);
    expect(
      stopAvailable({ cancellable: true, blocked: false, f3Busy: true }),
    ).toBe(false);
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/stopAvailableEarly.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/project-assistant/liveActivityEvents.d0.test.ts =====
/**
 * P6 — Live activity event contract (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  isNoraLiveActivityEvent,
  liveActivityFromTechnicalToolEvent,
  terminalLiveActivityFromProductResult,
  type NoraLiveActivityEvent,
} from "@/features/project-assistant/liveActivityEvents";

describe("P6 live activity events", () => {
  it("accepts well-formed browser-safe events", () => {
    const event: NoraLiveActivityEvent = {
      kind: "tool_started",
      seq: 1,
      at: "2026-10-14T12:00:00.000Z",
      label: "Consultation en cours — git_local_read_file",
      toolName: "git_local_read_file",
      sourcePath: "docs/a.md",
    };
    expect(isNoraLiveActivityEvent(event)).toBe(true);
  });

  it("rejects oversized or empty labels and non-finite seq", () => {
    expect(
      isNoraLiveActivityEvent({
        kind: "activity_update",
        seq: Number.NaN,
        at: "x",
        label: "ok",
      }),
    ).toBe(false);
    expect(
      isNoraLiveActivityEvent({
        kind: "activity_update",
        seq: 1,
        at: "x",
        label: "",
      }),
    ).toBe(false);
    expect(
      isNoraLiveActivityEvent({
        kind: "activity_update",
        seq: 1,
        at: "x",
        label: "x".repeat(280),
      }),
    ).toBe(false);
  });

  it("maps tool running → tool_started without inventing secrets", () => {
    const mapped = liveActivityFromTechnicalToolEvent({
      type: "tool.start",
      detail: {
        toolName: "git_local_read_file",
        status: "running",
        path: "projects/sfia-studio/docs/a.md",
      },
      seq: 2,
      at: "2026-10-14T12:00:01.000Z",
    });
    expect(mapped?.kind).toBe("tool_started");
    expect(mapped?.sourcePath).toBe("projects/sfia-studio/docs/a.md");
    expect(mapped?.label).toContain("a.md");
    expect(mapped?.label).toMatch(/consultation/i);
  });

  it("maps tool succeeded → tool_completed with basename label when present", () => {
    const mapped = liveActivityFromTechnicalToolEvent({
      type: "tool.result",
      detail: {
        toolName: "git_local_read_file",
        status: "succeeded",
        path: "docs/b.md",
      },
      seq: 3,
    });
    expect(mapped?.kind).toBe("tool_completed");
    expect(mapped?.label).toContain("b.md");
    expect(mapped?.label).toMatch(/consulté/i);
  });

  it("maps tool failed → tool_failed", () => {
    const mapped = liveActivityFromTechnicalToolEvent({
      type: "tool.fail",
      detail: { toolName: "git_local_read_file", status: "failed" },
      seq: 4,
    });
    expect(mapped?.kind).toBe("tool_failed");
    expect(mapped?.label).toMatch(/échec/i);
  });

  it("terminal kinds expose Pilote-safe French labels", () => {
    expect(
      terminalLiveActivityFromProductResult({
        result: { ok: true, status: "ok" },
      }).label,
    ).toMatch(/Mission terminée/);
    expect(
      terminalLiveActivityFromProductResult({
        result: { ok: true, status: "cognitive_stop" },
      }).kind,
    ).toBe("mission_cognitive_stop");
    expect(
      terminalLiveActivityFromProductResult({
        result: { ok: false, status: "provider_unavailable" },
        transportAbortedWithoutAck: true,
      }).kind,
    ).toBe("transport_interrupted");
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/project-assistant/liveActivityEvents.d0.test.ts =====
===== BEGIN NEW FILE: projects/sfia-studio/app/__tests__/project-assistant/terminalLiveActivity.d0.test.ts =====
/**
 * R-EXT-01 — terminalLiveActivityFromProductResult (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { terminalLiveActivityFromProductResult } from "@/features/project-assistant/liveActivityEvents";

describe("R-EXT-01 — terminalLiveActivityFromProductResult", () => {
  it("ok + status=ok → mission_completed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: true, status: "ok" },
    });
    expect(t.kind).toBe("mission_completed");
    expect(t.label).toMatch(/terminée/i);
  });

  it("ok + status=incomplete → mission_incomplete (not completed)", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: true, status: "incomplete" },
    });
    expect(t.kind).toBe("mission_incomplete");
    expect(t.kind).not.toBe("mission_completed");
  });

  it("executionIncomplete flag → mission_incomplete", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: true, status: "ok", executionIncomplete: true },
    });
    expect(t.kind).toBe("mission_incomplete");
  });

  it("ok + status=cognitive_stop → mission_cognitive_stop (not completed)", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: true, status: "cognitive_stop" },
    });
    expect(t.kind).toBe("mission_cognitive_stop");
    expect(t.kind).not.toBe("mission_completed");
  });

  it("status=stopped → stop_confirmed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "stopped" },
    });
    expect(t.kind).toBe("stop_confirmed");
  });

  it("runnerStopConfirmed → stop_confirmed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_error" },
      runnerStopConfirmed: true,
    });
    expect(t.kind).toBe("stop_confirmed");
  });

  it("transportAbortedWithoutAck + provider_unavailable → transport_interrupted (not stop_confirmed)", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_unavailable" },
      transportAbortedWithoutAck: true,
    });
    expect(t.kind).toBe("transport_interrupted");
    expect(t.kind).not.toBe("stop_confirmed");
    expect(t.kind).not.toBe("mission_failed");
  });

  it("provider_error → mission_failed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_error" },
    });
    expect(t.kind).toBe("mission_failed");
    expect(t.label).toMatch(/fournisseur/i);
  });

  it("provider_unavailable → mission_failed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_unavailable" },
    });
    expect(t.kind).toBe("mission_failed");
  });
});
===== END NEW FILE: projects/sfia-studio/app/__tests__/project-assistant/terminalLiveActivity.d0.test.ts =====
