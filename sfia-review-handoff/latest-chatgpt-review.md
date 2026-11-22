# SFIA Studio Next — Review Pack FULL — E08 GIT READ HARDENING

| Champ | Valeur |
| --- | --- |
| Date / fuseau | 2026-11-22 ≈ 09:35 CET (Europe/Paris) |
| Contrat | CRITICAL · INC/EVOL/QA · fiabilisation Git READ avant WRITE UAT |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Push projet / PR / merge | **NONE** |
| Cutover RECETTE | **NONE** (interdit) |
| Product versioning | **NO RELEASE** · STABLE NOT AVAILABLE · PATCH correctif candidat |
| E08 ADOPTED | **NON** |

## 1. Mandat et Git Truth

| Élément | Valeur |
| --- | --- |
| HEAD avant | `8d11bccc…` (docs cutover) |
| HEAD après | `6a2686ea7169b7b46cb6e1810c3b601e2c5cf0e8` |
| TREE | `f745c1a560a45be15432bb00b45a664fbb8dce7d` |
| BUILD_ID (détaché, non servi) | `LhWklvGNz7LlZgdhbsCUE` |
| Worktree build | `…/sfia-workspace-next-ml4d-ensemble08-readharden-build-6a2686ea` |
| RECETTE toujours servi | SOURCE `79188f6c…` · BUILD `hLsmHa3uFYP0PgRtj49Bh` · `:3200` |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Dirty hors pack | `.tmp-sfia-review/*` uniquement |

## 2. Sources

- PV §15 @ `b36f4f23` (docs/next-git-recette-20261122) — 5 PASS / 2 PARTIAL
- Handoffs `01ec2e01` (audit) · `7a22aabd` (cutover)
- Code candidat local + matrice/as-built
- Décision sémantique 12/11/2026 — pas de routeur lexical

## 3. Diagnostic causal des réserves

### E08-R-READ-03 — Budget (PRIORITÉ 1)

**Cause prouvée :** RECETTE exécute `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY` (OPERATIONAL_* interdit hors DEV). Les outils Git et D4/history partageaient `maxD4ToolCalls` (analyse=**4**). Un parcours nominal UAT-04/06 (sources + PR + files + commit + compare + éventuellement D4) épuise le budget → `GIT_TOOL_BUDGET_EXHAUSTED`. Ce n'est pas une « limite volontaire correctement atteinte » pour un usage nominal : c'est un **défaut d'orchestration budgétaire** (TEST_BOUNDARY stress utilisé comme plafond opérationnel RECETTE + compteur fusionné).

**Correction :** `BudgetLimits.maxGitToolCalls` + `remainingGitCalls` séparés ; Git READ décrémente uniquement le compteur Git ; D4/history gardent `maxD4ToolCalls`. TEST_BOUNDARY analyse : D4=4, Git=12. Pas de suppression des protections ; pas d'OPERATIONAL_VALIDATED silencieux.

**Niveau :** DETERMINISTIC PROVEN · Nora LIVE post-cutover **NOT PROVEN**.

### E08-R-READ-02 — Historique / date / compare (PRIORITÉ 2)

**Cause prouvée :** absence d'outil commit-metadata / compare borné (list_commits générique OUT par contrat). Nora pouvait connaître le SHA via D8/PR mais pas la date ni ahead/behind détaillé.

**Correction :** `read_git_commit` (dates auteur/committer, parents, fichiers bornés) · `compare_git_refs` (ahead/behind + fichiers/statuts, **sans hunks**). Réutilise D9 provider REAL/SCRIPTED.

**Non ajouté :** `list_commits` générique, diff hunks — restent OUT.

**Niveau :** DETERMINISTIC PROVEN · REAL READ via gh déjà connu pour oracle · Nora LIVE **NOT PROVEN**.

### E08-R-READ-01 — Checks / protections (PRIORITÉ 3)

**Cause :** seuls `mergeable` / `mergeableState` exposés ; pas de check-runs ; protections/rulesets souvent admin.

**Correction partielle :** `read_git_commit_status` (combined status + check-runs bornés). `protectionCoverage=DENIED` explicite avec note — ne pas inventer de rulesets.

**Limite restante :** lecture fine des branch protections/rulesets **hors périmètre** sans nouveaux droits GitHub — **arbitrage Morris / gate avant GIT-UAT-08**. Ne bloque pas une publication documentaire WRITE.

**Niveau :** DETERMINISTIC PROVEN (outil) · REAL BOUNDARY PARTIAL (permissions) · END-TO-END REAL **NOT PROVEN**.

## 4. Blast radius

| Zone | Fichiers |
| --- | --- |
| D3 policy/tools | `cognitive-policy.ts`, `git-read-tools.ts`, `nora-adapter.ts` |
| D9 | `github-provider.ts`, `github-app-auth.ts`, `real-github-provider.ts`, `scripted-github-provider.ts`, `resource-service.ts` |
| Tests | `git-read-hardening.test.ts` (+ non-régression unit suite) |
| Docs | as-built, matrice, delivery-history |

Hors périmètre : SEF, Roadmap normative, RECETTE runtime, mutations GitHub, UX Figma.

## 5. Preuves

| Suite | Résultat |
| --- | --- |
| `tsc --noEmit` | PASS |
| unit `tests/unit` | **824/824 PASS** |
| PG `mission-continuity-accept01` | **11/11 PASS** |
| RECETTE HTTP | toujours `<!--hLsmHa3uFYP0PgRtj49Bh-->` |
| Mutation GitHub | **NONE** |
| Nora LIVE / REAL WRITE | **NOT PROVEN** |

## 6. Impact UAT WRITE

- Réconciliation READ avant publication : budget Git séparé réduit le risque d'épuisement avant D6.
- GIT-UAT-01/02/05/06/07 : non régressés en DET (outils existants conservés + budgets Git élargis).
- GIT-UAT-03/04 : capacités manquantes comblées en code ; **rejeu LIVE Morris** requis après cutover.
- GIT-UAT-08 : toujours HORS MANDAT ; protections rulesets encore gate.

## 7. Candidat figé (non servi)

| | Valeur |
| --- | --- |
| SOURCE_SHA | `6a2686ea7169b7b46cb6e1810c3b601e2c5cf0e8` |
| TREE | `f745c1a560a45be15432bb00b45a664fbb8dce7d` |
| BUILD_ID | `LhWklvGNz7LlZgdhbsCUE` |

Cutover : **GO Morris distinct requis** — non exécuté.

## 8. Diffs complets (`8d11bccc..6a2686ea`)

### Stat
```
 .../construction/delivery-history.md               |  16 ++
 .../ensemble-08-git-et-publications/as-built.md    |   7 +
 .../matrice-capacites-git-chaine-2026-11-22.md     |  28 ++-
 .../src/domains/conversation/cognitive-policy.ts   |  28 ++-
 .../web/src/domains/conversation/git-read-tools.ts | 240 +++++++++++++++++--
 .../web/src/domains/conversation/nora-adapter.ts   |  20 +-
 .../src/domains/integrations/github-app-auth.ts    | 263 +++++++++++++++++++++
 .../src/domains/integrations/github-provider.ts    |  57 +++++
 .../domains/integrations/real-github-provider.ts   |  43 ++++
 .../src/domains/integrations/resource-service.ts   | 131 ++++++++++
 .../integrations/scripted-github-provider.ts       |  94 ++++++++
 .../web/tests/unit/git-read-hardening.test.ts      |  76 ++++++
 12 files changed, 967 insertions(+), 36 deletions(-)

```

### Code
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 1e09a0bd..d650fb0c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -20,6 +20,13 @@ export const NORA_STUDY_MODEL = "gpt-6.1-sol" as const;
 export type BudgetLimits = {
   maxProviderCalls: number;
   maxD4ToolCalls: number;
+  /**
+   * Separate Git READ call budget (D9 tools).
+   * Must not share the D4/history call counter — otherwise a nominal PR consult
+   * (sources + PR + files + commit + compare) exhausts TEST_BOUNDARY analyse (4)
+   * before reconciliation completes. Chars remain shared via maxD4CharsReturned.
+   */
+  maxGitToolCalls: number;
   wallClockMs: number;
   maxD4CharsReturned: number;
 };
@@ -27,24 +34,32 @@ export type BudgetLimits = {
 /**
  * Artificial stress ceilings for qualification only.
  * MUST NOT become implicit operational defaults.
+ *
+ * RECETTE currently runs SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY (OPERATIONAL_*
+ * forbidden on protected lanes until OPERATIONAL_VALIDATED). Git call ceilings
+ * below are sized for a nominal multi-tool Git READ (UAT-01..07), not for
+ * unbounded exploration — D4 call stress ceilings stay tighter.
  */
 export const TEST_BOUNDARY_BUDGETS: Record<CognitiveProfile, BudgetLimits> = {
   // Lot E/D5: short messages must still be able to call authorized read tools.
   simple: {
     maxProviderCalls: 4,
     maxD4ToolCalls: 2,
+    maxGitToolCalls: 6,
     wallClockMs: 60_000,
     maxD4CharsReturned: 16_000,
   },
   analyse: {
-    maxProviderCalls: 6,
+    maxProviderCalls: 8,
     maxD4ToolCalls: 4,
+    maxGitToolCalls: 12,
     wallClockMs: 120_000,
     maxD4CharsReturned: 32_000,
   },
   investigation: {
-    maxProviderCalls: 10,
+    maxProviderCalls: 12,
     maxD4ToolCalls: 8,
+    maxGitToolCalls: 16,
     wallClockMs: 180_000,
     maxD4CharsReturned: 64_000,
   },
@@ -59,18 +74,21 @@ export const OPERATIONAL_BUDGETS_PROVISIONAL: Record<CognitiveProfile, BudgetLim
   simple: {
     maxProviderCalls: 2,
     maxD4ToolCalls: 2,
+    maxGitToolCalls: 6,
     wallClockMs: 600_000,
     maxD4CharsReturned: 100_000,
   },
   analyse: {
     maxProviderCalls: 20,
     maxD4ToolCalls: 20,
+    maxGitToolCalls: 24,
     wallClockMs: 600_000,
     maxD4CharsReturned: 500_000,
   },
   investigation: {
     maxProviderCalls: 40,
     maxD4ToolCalls: 40,
+    maxGitToolCalls: 40,
     wallClockMs: 900_000,
     maxD4CharsReturned: 2_000_000,
   },
@@ -94,6 +112,9 @@ export type CognitivePolicy = {
     | "read_git_pull_request"
     | "list_git_pull_requests"
     | "list_git_pull_request_files"
+    | "read_git_commit"
+    | "compare_git_refs"
+    | "read_git_commit_status"
   >;
   budgets: BudgetLimits;
   reasonCodes: string[];
@@ -223,6 +244,9 @@ export function buildCognitivePolicy(
     "read_git_pull_request",
     "list_git_pull_requests",
     "list_git_pull_request_files",
+    "read_git_commit",
+    "compare_git_refs",
+    "read_git_commit_status",
   ];
 
   return {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
index 76fe8e6d..a0eaddd4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
@@ -3,11 +3,14 @@ import {
   NOT_A_DIRECTORY,
   READ_NOT_FOUND_UNQUALIFIED,
   REF_UNRESOLVED,
+  compareGitRefs,
   listGitDirectory,
   listGitPullRequestFiles,
   listGitPullRequests,
   listGitRefs,
   listProjectGitSources,
+  readGitCommit,
+  readGitCommitStatus,
   readGitFile,
   readGitPullRequest,
 } from "@/domains/integrations/resource-service";
@@ -20,9 +23,47 @@ export type GitToolScope = {
   projectId: string;
   operationId: string;
   generationId: string;
-  budget: { remainingCalls: number; remainingChars: number };
+  budget: {
+    /** Shared char budget with D4 (file excerpts dominate). */
+    remainingChars: number;
+    /**
+     * Git-only call budget (separate from D4/history remainingCalls).
+     * Prefer remainingGitCalls; fall back to remainingCalls for older callers.
+     */
+    remainingGitCalls?: number;
+    remainingCalls?: number;
+  };
 };
 
+function gitCallsRemaining(scope: GitToolScope): number {
+  if (typeof scope.budget.remainingGitCalls === "number") {
+    return scope.budget.remainingGitCalls;
+  }
+  return scope.budget.remainingCalls ?? 0;
+}
+
+function consumeGitCall(scope: GitToolScope): void {
+  if (typeof scope.budget.remainingGitCalls === "number") {
+    scope.budget.remainingGitCalls = Math.max(0, scope.budget.remainingGitCalls - 1);
+    return;
+  }
+  if (typeof scope.budget.remainingCalls === "number") {
+    scope.budget.remainingCalls = Math.max(0, scope.budget.remainingCalls - 1);
+  }
+}
+
+function budgetExhaustedPayload() {
+  return {
+    status: "DENIED" as const,
+    reason: "GIT_TOOL_BUDGET_EXHAUSTED",
+    coverage: "DENIED" as ToolCoverage,
+    guidance:
+      "Budget d'appels Git READ épuisé pour ce tour — ne pas inventer de métadonnées Git. " +
+      "Prioriser les outils restants au prochain tour ou demander une question plus ciblée.",
+    authorityReminder: "Budget exhaustion is not a publication or merge grant.",
+  };
+}
+
 /**
  * Structured read outcomes for Nora — never authority for D6/D7 publication.
  * FILE_ABSENT means path missing under a verified ref tip; it does not authorize write.
@@ -182,10 +223,10 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         "List Git repositories attached to the current project (read-only). Requires explicit project binding.",
       parameters: z.object({}),
       execute: async () => {
-        if (scope.budget.remainingCalls <= 0) {
-          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        if (gitCallsRemaining(scope) <= 0) {
+          return budgetExhaustedPayload();
         }
-        scope.budget.remainingCalls -= 1;
+        consumeGitCall(scope);
         const sources = await listProjectGitSources(scope.pilotId, scope.projectId);
         const payload = {
           status: "AVAILABLE",
@@ -217,10 +258,10 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         ref: z.string(),
       }),
       execute: async (args) => {
-        if (scope.budget.remainingCalls <= 0) {
-          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        if (gitCallsRemaining(scope) <= 0) {
+          return budgetExhaustedPayload();
         }
-        scope.budget.remainingCalls -= 1;
+        consumeGitCall(scope);
         try {
           const result = await readGitFile({
             pilotId: scope.pilotId,
@@ -311,10 +352,10 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         refPrefix: z.string().nullable().optional(),
       }),
       execute: async (args) => {
-        if (scope.budget.remainingCalls <= 0) {
-          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        if (gitCallsRemaining(scope) <= 0) {
+          return budgetExhaustedPayload();
         }
-        scope.budget.remainingCalls -= 1;
+        consumeGitCall(scope);
         const refs = await listGitRefs({
           pilotId: scope.pilotId,
           projectId: scope.projectId,
@@ -337,10 +378,10 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         ref: z.string(),
       }),
       execute: async (args) => {
-        if (scope.budget.remainingCalls <= 0) {
-          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        if (gitCallsRemaining(scope) <= 0) {
+          return budgetExhaustedPayload();
         }
-        scope.budget.remainingCalls -= 1;
+        consumeGitCall(scope);
         try {
           const result = await listGitDirectory({
             pilotId: scope.pilotId,
@@ -400,10 +441,10 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         prNumber: z.number().int().positive(),
       }),
       execute: async (args) => {
-        if (scope.budget.remainingCalls <= 0) {
-          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        if (gitCallsRemaining(scope) <= 0) {
+          return budgetExhaustedPayload();
         }
-        scope.budget.remainingCalls -= 1;
+        consumeGitCall(scope);
         try {
           const result = await readGitPullRequest({
             pilotId: scope.pilotId,
@@ -476,10 +517,10 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         state: z.enum(["open", "closed", "all"]).nullable().optional(),
       }),
       execute: async (args) => {
-        if (scope.budget.remainingCalls <= 0) {
-          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        if (gitCallsRemaining(scope) <= 0) {
+          return budgetExhaustedPayload();
         }
-        scope.budget.remainingCalls -= 1;
+        consumeGitCall(scope);
         try {
           const result = await listGitPullRequests({
             pilotId: scope.pilotId,
@@ -533,10 +574,10 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         prNumber: z.number().int().positive(),
       }),
       execute: async (args) => {
-        if (scope.budget.remainingCalls <= 0) {
-          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        if (gitCallsRemaining(scope) <= 0) {
+          return budgetExhaustedPayload();
         }
-        scope.budget.remainingCalls -= 1;
+        consumeGitCall(scope);
         try {
           const result = await listGitPullRequestFiles({
             pilotId: scope.pilotId,
@@ -583,5 +624,160 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         }
       },
     }),
+    tool({
+      name: "read_git_commit",
+      description:
+        "Read metadata for one commit (SHA or resolvable ref): author/committer dates, message, parents, " +
+        "bounded changed-file list. Prefer an exact commit SHA from a publication or PR head. " +
+        "Not a generic commit-history crawl. Never merges.",
+      parameters: z.object({
+        repositoryId: z.string(),
+        ref: z.string(),
+      }),
+      execute: async (args) => {
+        if (gitCallsRemaining(scope) <= 0) return budgetExhaustedPayload();
+        consumeGitCall(scope);
+        try {
+          const result = await readGitCommit({
+            pilotId: scope.pilotId,
+            projectId: scope.projectId,
+            repositoryId: args.repositoryId,
+            ref: args.ref,
+          });
+          const payload = {
+            ...result,
+            coverage: (result.incompleteCoverage ? "PARTIAL" : "COMPLETE") as ToolCoverage,
+          };
+          const charsCharged = chargeBudget(scope, payload);
+          emitObs({
+            event_name: "d3.tool.read_git_commit",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "SUCCESS",
+            meta: { sha: result.sha, chars_charged: charsCharged },
+          });
+          return { ...payload, charsCharged };
+        } catch (e) {
+          const err = isStudioError(e) ? e : toStudioError(e);
+          return {
+            status: err.code === "NOT_FOUND" ? ("AMBIGUOUS" as const) : ("DENIED" as const),
+            reason: err.message,
+            code: err.code,
+            coverage: "DENIED" as ToolCoverage,
+            guidance: "Commit inaccessible — ne pas inventer de date ni de parents.",
+            authorityReminder: "read_git_commit never authorizes merge.",
+            charsCharged: 0,
+          };
+        }
+      },
+    }),
+    tool({
+      name: "compare_git_refs",
+      description:
+        "Compare two refs/commits (base...head): ahead/behind counts, compare status, bounded file list " +
+        "with status/additions/deletions. No patch hunks. Use to compare a published commit to main. Never merges.",
+      parameters: z.object({
+        repositoryId: z.string(),
+        base: z.string(),
+        head: z.string(),
+      }),
+      execute: async (args) => {
+        if (gitCallsRemaining(scope) <= 0) return budgetExhaustedPayload();
+        consumeGitCall(scope);
+        try {
+          const result = await compareGitRefs({
+            pilotId: scope.pilotId,
+            projectId: scope.projectId,
+            repositoryId: args.repositoryId,
+            base: args.base,
+            head: args.head,
+          });
+          const payload = {
+            ...result,
+            coverage: (result.incompleteCoverage ? "PARTIAL" : "COMPLETE") as ToolCoverage,
+          };
+          const charsCharged = chargeBudget(scope, payload);
+          emitObs({
+            event_name: "d3.tool.compare_git_refs",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "SUCCESS",
+            meta: {
+              ahead: result.aheadBy,
+              behind: result.behindBy,
+              chars_charged: charsCharged,
+            },
+          });
+          return { ...payload, charsCharged };
+        } catch (e) {
+          const err = isStudioError(e) ? e : toStudioError(e);
+          return {
+            status: "DENIED" as const,
+            reason: err.message,
+            code: err.code,
+            coverage: "DENIED" as ToolCoverage,
+            guidance: "Comparaison inaccessible — ne pas inventer ahead/behind.",
+            authorityReminder: "compare_git_refs never authorizes merge.",
+            charsCharged: 0,
+          };
+        }
+      },
+    }),
+    tool({
+      name: "read_git_commit_status",
+      description:
+        "Read combined commit status and bounded check-runs for a commit/ref (READ). " +
+        "Use after read_git_pull_request when explaining merge conditions. " +
+        "Branch protection/rulesets are NOT returned here — report that limit honestly. " +
+        "mergeable=true does not authorize merge. Never merges.",
+      parameters: z.object({
+        repositoryId: z.string(),
+        ref: z.string(),
+      }),
+      execute: async (args) => {
+        if (gitCallsRemaining(scope) <= 0) return budgetExhaustedPayload();
+        consumeGitCall(scope);
+        try {
+          const result = await readGitCommitStatus({
+            pilotId: scope.pilotId,
+            projectId: scope.projectId,
+            repositoryId: args.repositoryId,
+            ref: args.ref,
+          });
+          const payload = {
+            ...result,
+            coverage: result.statusCoverage as ToolCoverage,
+          };
+          const charsCharged = chargeBudget(scope, payload);
+          emitObs({
+            event_name: "d3.tool.read_git_commit_status",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "SUCCESS",
+            meta: {
+              combined: result.combinedState,
+              checks: result.matchedCheckCount,
+              chars_charged: charsCharged,
+            },
+          });
+          return { ...payload, charsCharged };
+        } catch (e) {
+          const err = isStudioError(e) ? e : toStudioError(e);
+          return {
+            status: "DENIED" as const,
+            reason: err.message,
+            code: err.code,
+            coverage: "DENIED" as ToolCoverage,
+            guidance:
+              "Status/checks inaccessibles — ne pas certifier que GitHub autoriserait le merge.",
+            authorityReminder: "read_git_commit_status never authorizes merge.",
+            charsCharged: 0,
+          };
+        }
+      },
+    }),
   ];
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 81daf52d..7630a0b3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -129,7 +129,7 @@ const SYSTEM_INSTRUCTIONS = [
   "- Révision ciblée: dans la fence, fournis la section demandée mise à jour (titre ATX inclus); ne réécris pas les autres sections; ne place aucun compte rendu opérationnel ni statut transactionnel dans la fence.",
   "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils; n'invente jamais d'URL /blob/{blobSha}/… ; utilise permalink seulement si commitShaVerified=true.",
   "- Lecture Git: AVAILABLE = contenu; FILE_ABSENT = chemin absent à une ref tip vérifiée (pas une autorisation d'écriture); DENIED/REF_UNRESOLVED/AMBIGUOUS/UNAVAILABLE = aucune conclusion d'absence ni de CREATE.",
-  "- Consultation PR: `list_project_git_sources` → `list_git_pull_requests` (trouver par branche head/base si numéro inconnu) → `read_git_pull_request` (statut live open/closed/merged, HEAD/base SHA, mergeability) → `list_git_pull_request_files` (chemins modifiés). Ne jamais affirmer que les outils ne permettent pas de lire/lister une PR si ces outils sont disponibles. Ne jamais fusionner via un outil de lecture. Un fait D8 historique ne remplace pas une observation live. `list_project_git_sources` expose aussi les permissions Studio sanitizées du dépôt (sans secrets).",
+  "- Consultation Git READ: `list_project_git_sources` → `list_git_pull_requests` / `read_git_pull_request` → `list_git_pull_request_files` → `read_git_commit` (dates auteur/committer, parents) → `compare_git_refs` (ahead/behind + fichiers, sans hunks) → `read_git_commit_status` (combined status + check-runs bornés). Protections/rulesets de branche : non exposées — le dire explicitement. `mergeable=true` ≠ autorisation de fusion. Budget Git (appels) est séparé du budget D4/documents. Ne jamais fusionner via un outil de lecture. Un fait D8 historique ne remplace pas une observation live.",
   "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
 ].join("\n");
 
@@ -771,9 +771,11 @@ async function runLiveWithTools(
   const initialBudget = {
     remainingCalls: policy.budgets.maxD4ToolCalls,
     remainingChars: policy.budgets.maxD4CharsReturned,
+    remainingGitCalls: policy.budgets.maxGitToolCalls,
   };
 
   // Union of D4 / history / git tools — Agent accepts heterogeneous FunctionTool[].
+  // D4/history consume remainingCalls; Git READ consumes remainingGitCalls (shared chars).
   let tools: unknown[] = [];
   if (policy.toolAllowlist.length > 0 && input.toolScope) {
     const scope: D4ToolScope = {
@@ -781,7 +783,10 @@ async function runLiveWithTools(
       preparationId: input.toolScope.preparationId,
       operationId: input.toolScope.operationId,
       generationId,
-      budget: initialBudget,
+      budget: {
+        remainingCalls: initialBudget.remainingCalls,
+        remainingChars: initialBudget.remainingChars,
+      },
     };
     tools = await buildNoraD4Tools(scope);
     if (
@@ -792,7 +797,10 @@ async function runLiveWithTools(
       const historyTools = await buildNoraHistoryTools({
         pilotId: input.toolScope.pilotId,
         preparationId: input.toolScope.preparationId,
-        budget: initialBudget,
+        budget: {
+          remainingCalls: initialBudget.remainingCalls,
+          remainingChars: initialBudget.remainingChars,
+        },
       });
       tools = [...tools, ...historyTools];
     }
@@ -802,7 +810,10 @@ async function runLiveWithTools(
         projectId: input.toolScope.projectId,
         operationId: input.toolScope.operationId,
         generationId,
-        budget: initialBudget,
+        budget: {
+          remainingChars: initialBudget.remainingChars,
+          remainingGitCalls: initialBudget.remainingGitCalls,
+        },
       });
       tools = [...tools, ...gitTools];
     }
@@ -1139,6 +1150,7 @@ function minimalBoundaryPolicy(reasonCode: string): CognitivePolicy {
     budgets: {
       maxProviderCalls: 0,
       maxD4ToolCalls: 0,
+      maxGitToolCalls: 0,
       wallClockMs: 1_000,
       maxD4CharsReturned: 0,
     },
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
index 1c85d9b7..95aacd7b 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
@@ -880,6 +880,269 @@ export async function listPullRequestFilesRemote(input: {
   };
 }
 
+/** READ: single commit metadata + bounded file list. No list_commits crawl. */
+export async function fetchCommitRemote(input: {
+  token: string;
+  fullName: string;
+  /** Commit SHA (preferred) or resolvable ref. */
+  ref: string;
+  fileBound?: number;
+  fetchImpl?: GitHubFetch;
+}): Promise<{
+  sha: string;
+  message: string;
+  authorName: string | null;
+  authorEmail: string | null;
+  authorDate: string | null;
+  committerName: string | null;
+  committerEmail: string | null;
+  committerDate: string | null;
+  parents: string[];
+  htmlUrl: string;
+  files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
+  incompleteCoverage: boolean;
+  matchedFileCount: number;
+}> {
+  const fetchImpl = input.fetchImpl ?? fetch;
+  const bound = Math.max(1, Math.min(input.fileBound ?? 40, 100));
+  const { owner, name } = parseFullName(input.fullName);
+  const ref = encodeURIComponent(input.ref.replace(/^refs\/heads\//, ""));
+  const raw = await ghJson<{
+    sha?: string;
+    html_url?: string;
+    commit?: {
+      message?: string;
+      author?: { name?: string; email?: string; date?: string };
+      committer?: { name?: string; email?: string; date?: string };
+    };
+    parents?: Array<{ sha?: string }>;
+    files?: Array<{
+      filename?: string;
+      status?: string;
+      additions?: number;
+      deletions?: number;
+    }>;
+  }>(fetchImpl, `/repos/${owner}/${name}/commits/${ref}`, {
+    method: "GET",
+    headers: { Authorization: `Bearer ${input.token}` },
+  });
+  const filesRaw = Array.isArray(raw.files) ? raw.files : [];
+  const matchedFileCount = filesRaw.length;
+  const files = filesRaw.slice(0, bound).map((f) => ({
+    filename: f.filename ?? "",
+    status: f.status ?? "unknown",
+    additions: typeof f.additions === "number" ? f.additions : 0,
+    deletions: typeof f.deletions === "number" ? f.deletions : 0,
+  }));
+  return {
+    sha: (raw.sha ?? "").toLowerCase(),
+    message: raw.commit?.message ?? "",
+    authorName: raw.commit?.author?.name ?? null,
+    authorEmail: raw.commit?.author?.email ?? null,
+    authorDate: raw.commit?.author?.date ?? null,
+    committerName: raw.commit?.committer?.name ?? null,
+    committerEmail: raw.commit?.committer?.email ?? null,
+    committerDate: raw.commit?.committer?.date ?? null,
+    parents: (raw.parents ?? []).map((p) => (p.sha ?? "").toLowerCase()).filter(Boolean),
+    htmlUrl: raw.html_url ?? "",
+    files,
+    incompleteCoverage: matchedFileCount > bound,
+    matchedFileCount,
+  };
+}
+
+/**
+ * READ: bounded compare base...head (ahead/behind + file statuses).
+ * No patch hunks — filenames/status only. Not a generic list_commits crawl.
+ */
+export async function compareCommitsRemote(input: {
+  token: string;
+  fullName: string;
+  base: string;
+  head: string;
+  fileBound?: number;
+  fetchImpl?: GitHubFetch;
+}): Promise<{
+  baseSha: string;
+  headSha: string;
+  status: string;
+  aheadBy: number;
+  behindBy: number;
+  totalCommits: number;
+  files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
+  incompleteCoverage: boolean;
+  matchedFileCount: number;
+  htmlUrl: string;
+}> {
+  const fetchImpl = input.fetchImpl ?? fetch;
+  const bound = Math.max(1, Math.min(input.fileBound ?? 40, 100));
+  const { owner, name } = parseFullName(input.fullName);
+  const base = encodeURIComponent(input.base.replace(/^refs\/heads\//, ""));
+  const head = encodeURIComponent(input.head.replace(/^refs\/heads\//, ""));
+  const raw = await ghJson<{
+    status?: string;
+    ahead_by?: number;
+    behind_by?: number;
+    total_commits?: number;
+    html_url?: string;
+    base_commit?: { sha?: string };
+    merge_base_commit?: { sha?: string };
+    commits?: Array<{ sha?: string }>;
+    files?: Array<{
+      filename?: string;
+      status?: string;
+      additions?: number;
+      deletions?: number;
+    }>;
+  }>(fetchImpl, `/repos/${owner}/${name}/compare/${base}...${head}`, {
+    method: "GET",
+    headers: { Authorization: `Bearer ${input.token}` },
+  });
+  const filesRaw = Array.isArray(raw.files) ? raw.files : [];
+  const matchedFileCount = filesRaw.length;
+  const commits = Array.isArray(raw.commits) ? raw.commits : [];
+  const tip = commits.length > 0 ? commits[commits.length - 1]?.sha ?? "" : "";
+  return {
+    baseSha: (raw.base_commit?.sha ?? raw.merge_base_commit?.sha ?? "").toLowerCase(),
+    headSha: tip.toLowerCase(),
+    status: raw.status ?? "unknown",
+    aheadBy: typeof raw.ahead_by === "number" ? raw.ahead_by : 0,
+    behindBy: typeof raw.behind_by === "number" ? raw.behind_by : 0,
+    totalCommits: typeof raw.total_commits === "number" ? raw.total_commits : 0,
+    files: filesRaw.slice(0, bound).map((f) => ({
+      filename: f.filename ?? "",
+      status: f.status ?? "unknown",
+      additions: typeof f.additions === "number" ? f.additions : 0,
+      deletions: typeof f.deletions === "number" ? f.deletions : 0,
+    })),
+    incompleteCoverage: matchedFileCount > bound,
+    matchedFileCount,
+    htmlUrl: raw.html_url ?? "",
+  };
+}
+
+/**
+ * READ: combined commit status + bounded check-runs summary.
+ * Never authorizes merge. Protection/ruleset details may be DENIED by permission.
+ */
+export async function fetchCommitStatusRemote(input: {
+  token: string;
+  fullName: string;
+  ref: string;
+  checkBound?: number;
+  fetchImpl?: GitHubFetch;
+}): Promise<{
+  combinedState: string | null;
+  combinedStatuses: Array<{ context: string; state: string; description: string | null }>;
+  checkRuns: Array<{
+    name: string;
+    status: string;
+    conclusion: string | null;
+    htmlUrl: string | null;
+  }>;
+  incompleteCoverage: boolean;
+  matchedCheckCount: number;
+  statusCoverage: "COMPLETE" | "PARTIAL" | "DENIED" | "UNAVAILABLE";
+  statusNote: string;
+}> {
+  const fetchImpl = input.fetchImpl ?? fetch;
+  const bound = Math.max(1, Math.min(input.checkBound ?? 30, 60));
+  const { owner, name } = parseFullName(input.fullName);
+  const ref = encodeURIComponent(input.ref.replace(/^refs\/heads\//, ""));
+
+  let combinedState: string | null = null;
+  let combinedStatuses: Array<{ context: string; state: string; description: string | null }> = [];
+  let statusCoverage: "COMPLETE" | "PARTIAL" | "DENIED" | "UNAVAILABLE" = "COMPLETE";
+  let statusNote = "Combined status + check-runs observés (bornés).";
+
+  try {
+    const status = await ghJson<{
+      state?: string;
+      statuses?: Array<{ context?: string; state?: string; description?: string | null }>;
+    }>(fetchImpl, `/repos/${owner}/${name}/commits/${ref}/status`, {
+      method: "GET",
+      headers: { Authorization: `Bearer ${input.token}` },
+    });
+    combinedState = status.state ?? null;
+    combinedStatuses = (status.statuses ?? []).slice(0, bound).map((s) => ({
+      context: s.context ?? "",
+      state: s.state ?? "unknown",
+      description: s.description ?? null,
+    }));
+  } catch (e) {
+    const err = e instanceof StudioError ? e : null;
+    if (err?.code === "ACCESS_DENIED") {
+      statusCoverage = "DENIED";
+      statusNote = "Combined status inaccessible (permission) — ne pas inventer success.";
+    } else if (err?.code === "NOT_FOUND") {
+      statusCoverage = "PARTIAL";
+      statusNote = "Combined status introuvable pour cette ref.";
+    } else {
+      statusCoverage = "UNAVAILABLE";
+      statusNote = "Combined status temporairement indisponible.";
+    }
+  }
+
+  let checkRuns: Array<{
+    name: string;
+    status: string;
+    conclusion: string | null;
+    htmlUrl: string | null;
+  }> = [];
+  let matchedCheckCount = 0;
+  let incompleteCoverage = false;
+
+  try {
+    const checks = await ghJson<{
+      total_count?: number;
+      check_runs?: Array<{
+        name?: string;
+        status?: string;
+        conclusion?: string | null;
+        html_url?: string | null;
+      }>;
+    }>(fetchImpl, `/repos/${owner}/${name}/commits/${ref}/check-runs?per_page=${bound}`, {
+      method: "GET",
+      headers: {
+        Authorization: `Bearer ${input.token}`,
+        Accept: "application/vnd.github+json",
+      },
+    });
+    matchedCheckCount =
+      typeof checks.total_count === "number" ? checks.total_count : (checks.check_runs ?? []).length;
+    checkRuns = (checks.check_runs ?? []).slice(0, bound).map((c) => ({
+      name: c.name ?? "",
+      status: c.status ?? "unknown",
+      conclusion: c.conclusion ?? null,
+      htmlUrl: c.html_url ?? null,
+    }));
+    incompleteCoverage = matchedCheckCount > bound;
+    if (statusCoverage === "COMPLETE" && incompleteCoverage) statusCoverage = "PARTIAL";
+  } catch (e) {
+    const err = e instanceof StudioError ? e : null;
+    if (err?.code === "ACCESS_DENIED") {
+      if (statusCoverage === "COMPLETE") statusCoverage = "PARTIAL";
+      statusNote =
+        (statusNote ? statusNote + " " : "") +
+        "Check-runs inaccessibles (permission) — mergeability ≠ checks verts.";
+    } else if (statusCoverage === "COMPLETE") {
+      statusCoverage = "PARTIAL";
+      statusNote =
+        (statusNote ? statusNote + " " : "") + "Check-runs non disponibles pour cette ref.";
+    }
+  }
+
+  return {
+    combinedState,
+    combinedStatuses,
+    checkRuns,
+    incompleteCoverage,
+    matchedCheckCount,
+    statusCoverage,
+    statusNote,
+  };
+}
+
 /**
  * Merge a pull request with GitHub SHA precondition.
  * Caller must enforce D6/D7 mandate and documentary path policy separately.
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
index fd7f1958..7c2ff16a 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
@@ -162,6 +162,63 @@ export interface GitHubProvider {
     incompleteCoverage: boolean;
     matchedCount: number;
   }>;
+  /** Single-commit metadata + bounded files (READ). */
+  getCommit(
+    pilotId: string,
+    fullName: string,
+    ref: string,
+  ): Promise<{
+    sha: string;
+    message: string;
+    authorName: string | null;
+    authorEmail: string | null;
+    authorDate: string | null;
+    committerName: string | null;
+    committerEmail: string | null;
+    committerDate: string | null;
+    parents: string[];
+    htmlUrl: string;
+    files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
+    incompleteCoverage: boolean;
+    matchedFileCount: number;
+  }>;
+  /** Bounded compare base...head (READ). No patch hunks. */
+  compareRefs(
+    pilotId: string,
+    fullName: string,
+    base: string,
+    head: string,
+  ): Promise<{
+    baseSha: string;
+    headSha: string;
+    status: string;
+    aheadBy: number;
+    behindBy: number;
+    totalCommits: number;
+    files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
+    incompleteCoverage: boolean;
+    matchedFileCount: number;
+    htmlUrl: string;
+  }>;
+  /** Combined status + check-runs for a commit/ref (READ). Never authorizes merge. */
+  getCommitStatus(
+    pilotId: string,
+    fullName: string,
+    ref: string,
+  ): Promise<{
+    combinedState: string | null;
+    combinedStatuses: Array<{ context: string; state: string; description: string | null }>;
+    checkRuns: Array<{
+      name: string;
+      status: string;
+      conclusion: string | null;
+      htmlUrl: string | null;
+    }>;
+    incompleteCoverage: boolean;
+    matchedCheckCount: number;
+    statusCoverage: "COMPLETE" | "PARTIAL" | "DENIED" | "UNAVAILABLE";
+    statusNote: string;
+  }>;
   /** Deterministic mutation counters for SCRIPTED concurrency proofs (optionally per repo). */
   getMutationCounts?(
     pilotId?: string,
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
index 14ccd302..e726e263 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
@@ -14,6 +14,9 @@ import {
   fetchRefSha,
   fetchRepositoryMetadata,
   listInstallationRepositories,
+  compareCommitsRemote,
+  fetchCommitRemote,
+  fetchCommitStatusRemote,
   listPullRequestFilesRemote,
   listPullRequestsRemote,
   mergePullRequestRemote,
@@ -566,6 +569,46 @@ export class RealGitHubReadProvider implements GitHubProvider {
     };
   }
 
+  async getCommit(pilotId: string, fullName: string, ref: string) {
+    assertAllowedRepo(this.creds, fullName);
+    return this.withReadToken(pilotId, (token) =>
+      fetchCommitRemote({
+        token,
+        fullName,
+        ref,
+        fileBound: 40,
+        fetchImpl: this.fetchImpl,
+      }),
+    );
+  }
+
+  async compareRefs(pilotId: string, fullName: string, base: string, head: string) {
+    assertAllowedRepo(this.creds, fullName);
+    return this.withReadToken(pilotId, (token) =>
+      compareCommitsRemote({
+        token,
+        fullName,
+        base,
+        head,
+        fileBound: 40,
+        fetchImpl: this.fetchImpl,
+      }),
+    );
+  }
+
+  async getCommitStatus(pilotId: string, fullName: string, ref: string) {
+    assertAllowedRepo(this.creds, fullName);
+    return this.withReadToken(pilotId, (token) =>
+      fetchCommitStatusRemote({
+        token,
+        fullName,
+        ref,
+        checkBound: 30,
+        fetchImpl: this.fetchImpl,
+      }),
+    );
+  }
+
   /** Qualification helper: repo metadata + default branch HEAD (no secrets). */
   async observeAllowedRepository(): Promise<{
     repositoryId: number;
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
index ebecfd2f..571cf71a 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
@@ -602,3 +602,134 @@ export async function listGitPullRequestFiles(input: {
     throw isRethrowableStudio(e) ? e : err;
   }
 }
+
+/** READ: single commit metadata (dates, parents, bounded files). Not list_commits. */
+export async function readGitCommit(input: {
+  pilotId: string;
+  projectId: string;
+  repositoryId: string;
+  ref: string;
+}) {
+  const ref = input.ref?.trim();
+  if (!ref) {
+    throw new StudioError("INVALID_REQUEST", "ref/commit SHA requis", { httpStatus: 400 });
+  }
+  const repo = await gateRead(input.pilotId, input.projectId, input.repositoryId);
+  const provider = resolveGitHubProvider();
+  try {
+    const c = await provider.getCommit(input.pilotId, repo.fullName, ref);
+    return {
+      status: "AVAILABLE" as const,
+      repositoryFullName: repo.fullName,
+      requestedRef: ref,
+      sha: c.sha,
+      message: c.message,
+      authorName: c.authorName,
+      authorEmail: c.authorEmail,
+      authorDate: c.authorDate,
+      committerName: c.committerName,
+      committerEmail: c.committerEmail,
+      committerDate: c.committerDate,
+      parents: c.parents,
+      htmlUrl: c.htmlUrl,
+      files: c.files,
+      incompleteCoverage: c.incompleteCoverage,
+      matchedFileCount: c.matchedFileCount,
+      observedAt: new Date().toISOString(),
+      identityReminder:
+        "sha est un commit (révision). Ne pas confondre avec blobSha de contenu fichier.",
+      authorityReminder: "Lecture commit — jamais un mandat D6 ni une autorisation de merge.",
+    };
+  } catch (e) {
+    const err = toStudioError(e);
+    throw isRethrowableStudio(e) ? e : err;
+  }
+}
+
+/** READ: bounded compare base...head (ahead/behind + file statuses, no hunks). */
+export async function compareGitRefs(input: {
+  pilotId: string;
+  projectId: string;
+  repositoryId: string;
+  base: string;
+  head: string;
+}) {
+  const base = input.base?.trim();
+  const head = input.head?.trim();
+  if (!base || !head) {
+    throw new StudioError("INVALID_REQUEST", "base et head requis pour compare", {
+      httpStatus: 400,
+    });
+  }
+  const repo = await gateRead(input.pilotId, input.projectId, input.repositoryId);
+  const provider = resolveGitHubProvider();
+  try {
+    const c = await provider.compareRefs(input.pilotId, repo.fullName, base, head);
+    return {
+      status: "AVAILABLE" as const,
+      repositoryFullName: repo.fullName,
+      base,
+      head,
+      baseSha: c.baseSha,
+      headSha: c.headSha,
+      compareStatus: c.status,
+      aheadBy: c.aheadBy,
+      behindBy: c.behindBy,
+      totalCommits: c.totalCommits,
+      files: c.files,
+      incompleteCoverage: c.incompleteCoverage,
+      matchedFileCount: c.matchedFileCount,
+      htmlUrl: c.htmlUrl,
+      observedAt: new Date().toISOString(),
+      coverageNote:
+        "Comparaison bornée (fichiers/statuts) — pas de diff hunks arbitraires ni historique générique.",
+      authorityReminder: "Compare READ — jamais une autorisation de merge ou de publication.",
+    };
+  } catch (e) {
+    const err = toStudioError(e);
+    throw isRethrowableStudio(e) ? e : err;
+  }
+}
+
+/**
+ * READ: combined status + check-runs for a commit/ref.
+ * Does not fetch branch protection/rulesets (often admin-only) — reports permission limits honestly.
+ */
+export async function readGitCommitStatus(input: {
+  pilotId: string;
+  projectId: string;
+  repositoryId: string;
+  ref: string;
+}) {
+  const ref = input.ref?.trim();
+  if (!ref) {
+    throw new StudioError("INVALID_REQUEST", "ref/commit SHA requis", { httpStatus: 400 });
+  }
+  const repo = await gateRead(input.pilotId, input.projectId, input.repositoryId);
+  const provider = resolveGitHubProvider();
+  try {
+    const s = await provider.getCommitStatus(input.pilotId, repo.fullName, ref);
+    return {
+      status: "AVAILABLE" as const,
+      repositoryFullName: repo.fullName,
+      requestedRef: ref,
+      combinedState: s.combinedState,
+      combinedStatuses: s.combinedStatuses,
+      checkRuns: s.checkRuns,
+      incompleteCoverage: s.incompleteCoverage,
+      matchedCheckCount: s.matchedCheckCount,
+      statusCoverage: s.statusCoverage,
+      statusNote: s.statusNote,
+      protectionCoverage: "DENIED" as const,
+      protectionNote:
+        "Protections/rulesets de branche non exposées via cet outil (souvent admin). " +
+        "mergeable/mergeableState (read_git_pull_request) ≠ autorisation de fusion.",
+      observedAt: new Date().toISOString(),
+      authorityReminder:
+        "Checks/status READ — jamais un mandat D6. Absence de conflit ≠ merge autorisé.",
+    };
+  } catch (e) {
+    const err = toStudioError(e);
+    throw isRethrowableStudio(e) ? e : err;
+  }
+}
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
index a23cf3b8..0e9d84ea 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
@@ -644,6 +644,100 @@ class ScriptedGitHubProvider implements GitHubProvider {
       matchedCount: files.length,
     };
   }
+
+  async getCommit(pilotId: string, fullName: string, ref: string) {
+    if (ScriptedFaultRegistry.current(pilotId, fullName) === "read_unavailable") {
+      ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    }
+    ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    const s = repoStore(pilotId, fullName);
+    const sha = /^[0-9a-f]{40}$/i.test(ref)
+      ? ref.toLowerCase()
+      : (s.branches[ref.replace(/^refs\/heads\//, "")] ?? s.branches.main ?? "a".repeat(40));
+    const paths = Object.keys(s.files);
+    const files = paths.slice(0, 40).map((filename) => ({
+      filename,
+      status: "modified" as const,
+      additions: 1,
+      deletions: 0,
+    }));
+    return {
+      sha,
+      message: "scripted commit",
+      authorName: "Scripted Author",
+      authorEmail: "scripted@example.test",
+      authorDate: "2026-11-22T06:22:13Z",
+      committerName: "Scripted Committer",
+      committerEmail: "scripted@example.test",
+      committerDate: "2026-11-22T06:22:13Z",
+      parents: [s.branches.main ?? "b".repeat(40)],
+      htmlUrl: `https://github.scripted/${fullName}/commit/${sha}`,
+      files,
+      incompleteCoverage: paths.length > 40,
+      matchedFileCount: paths.length,
+    };
+  }
+
+  async compareRefs(pilotId: string, fullName: string, base: string, head: string) {
+    if (ScriptedFaultRegistry.current(pilotId, fullName) === "read_unavailable") {
+      ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    }
+    ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    const s = repoStore(pilotId, fullName);
+    const baseShort = base.replace(/^refs\/heads\//, "");
+    const headShort = head.replace(/^refs\/heads\//, "");
+    const baseSha =
+      (/^[0-9a-f]{40}$/i.test(baseShort) ? baseShort : s.branches[baseShort] ?? s.branches.main) ??
+      "b".repeat(40);
+    const headSha =
+      (/^[0-9a-f]{40}$/i.test(headShort) ? headShort : s.branches[headShort] ?? s.branches.main) ??
+      "a".repeat(40);
+    const paths = Object.keys(s.files);
+    const files = paths.slice(0, 40).map((filename) => ({
+      filename,
+      status: "added" as const,
+      additions: 1,
+      deletions: 0,
+    }));
+    const aheadBy = baseSha === headSha ? 0 : 1;
+    return {
+      baseSha: baseSha.toLowerCase(),
+      headSha: headSha.toLowerCase(),
+      status: aheadBy === 0 ? "identical" : "ahead",
+      aheadBy,
+      behindBy: 0,
+      totalCommits: aheadBy,
+      files,
+      incompleteCoverage: paths.length > 40,
+      matchedFileCount: paths.length,
+      htmlUrl: `https://github.scripted/${fullName}/compare/${baseShort}...${headShort}`,
+    };
+  }
+
+  async getCommitStatus(pilotId: string, fullName: string, ref: string) {
+    if (ScriptedFaultRegistry.current(pilotId, fullName) === "read_unavailable") {
+      ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    }
+    ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    void ref;
+    return {
+      combinedState: "success",
+      combinedStatuses: [{ context: "scripted/ci", state: "success", description: "ok" }],
+      checkRuns: [
+        {
+          name: "scripted-check",
+          status: "completed",
+          conclusion: "success",
+          htmlUrl: `https://github.scripted/${fullName}/runs/1`,
+        },
+      ],
+      incompleteCoverage: false,
+      matchedCheckCount: 1,
+      statusCoverage: "COMPLETE" as const,
+      statusNote:
+        "SCRIPTED status — mergeability ≠ autorisation D6. Protections/rulesets non simulées ici.",
+    };
+  }
 }
 
 export function getScriptedGitHubProvider(): GitHubProvider {

```

### Tests + construction
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f263d7bb..98fc5638 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,22 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 09:35 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — fiabilisation Git READ (réserves UAT) |
+| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
+| R-READ-03 | Budget Git séparé (`maxGitToolCalls`) — cause TEST_BOUNDARY partagé |
+| R-READ-02 | `read_git_commit` + `compare_git_refs` |
+| R-READ-01 | `read_git_commit_status` ; protections/rulesets **DENIED** explicite |
+| Preuves | unit **824/824** · PG accept01 **11/11** · tsc PASS |
+| RECETTE | **INCHANGÉE** `79188f6c` / `hLsmHa3uFYP0PgRtj49Bh` |
+| Cutover | **NONE** — candidat local à figer ; GO cutover ultérieur |
+| Push projet | **NONE** |
+| STABLE | NOT AVAILABLE |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-AUDIT-CUTOVER
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 8a7f6213..b4555f3c 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -106,6 +106,13 @@
 - Manifeste : `manifeste-cutover-recette-e07-plus-e08.md` (section courante).
 - **UAT Morris** : GIT-UAT-01..07 · GIT-UAT-08 hors mandat · Nora LIVE E2E **NOT PROVEN** par smoke.
 
+### Fiabilisation Git READ — réserves UAT (2026-11-22)
+- **R-READ-03 (budget)** : cause prouvée — RECETTE force `TEST_BOUNDARY` ; budget d’appels **partagé** D4+Git (analyse=4) insuffisant pour un parcours PR+commit+compare. **Correction** : `maxGitToolCalls` séparé ; Git consomme `remainingGitCalls` ; D4/history gardent `maxD4ToolCalls` (stress). TEST_BOUNDARY analyse : Git=12 / D4=4.
+- **R-READ-02 (historique/date/compare)** : **Correction** outils `read_git_commit` + `compare_git_refs` (ahead/behind + fichiers bornés, **pas** list_commits ni hunks).
+- **R-READ-01 (checks)** : **Correction partielle** `read_git_commit_status` (combined status + check-runs). Protections/rulesets : **DENIED** explicite (souvent admin) — marge avant GIT-UAT-08.
+- RECETTE servi **inchangé** (`79188f6c` / `hLsmHa3uFYP0PgRtj49Bh`) — aucun cutover ce cycle.
+- Preuves : unit 824 PASS · PG mission-continuity 11 PASS · Nora LIVE / REAL WRITE **NOT PROVEN**.
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
index af66f6dc..82be9c67 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
@@ -98,16 +98,28 @@ Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ ·
 
 | Outil | Allowlist | Budget | Mutation |
 |---|---|---|---|
-| `list_project_git_sources` | oui | D4 chars/calls | non |
-| `read_git_file` | oui | oui | non |
-| `list_git_refs` | oui | oui | non |
-| `list_git_directory` | oui | oui | non |
-| `read_git_pull_request` | oui | oui | non |
-| `list_git_pull_requests` | **FIX oui** | oui | non |
-| `list_git_pull_request_files` | **FIX oui** | oui | non |
-
+| `list_project_git_sources` | oui | **Git calls** + chars | non |
+| `read_git_file` | oui | Git calls + chars | non |
+| `list_git_refs` | oui | Git calls | non |
+| `list_git_directory` | oui | Git calls | non |
+| `read_git_pull_request` | oui | Git calls | non |
+| `list_git_pull_requests` | oui | Git calls | non |
+| `list_git_pull_request_files` | oui | Git calls | non |
+| `read_git_commit` | **FIX** | Git calls | non |
+| `compare_git_refs` | **FIX** | Git calls | non |
+| `read_git_commit_status` | **FIX** | Git calls | non |
+
+Budget : `maxGitToolCalls` **séparé** de `maxD4ToolCalls` (R-READ-03). Chars partagés.  
 Écritures : **aucune** via outil LLM direct — uniquement qualification → D6 → D7 → D9 → D8 → restitution D3.
 
+### Réserves UAT post-campagne (fiabilisation 2026-11-22)
+
+| Réserve | Cause | Correction | Preuve | Limite restante |
+|---|---|---|---|---|
+| R-READ-03 | TEST_BOUNDARY RECETTE + compteur D4+Git partagé (4) | `maxGitToolCalls` + `remainingGitCalls` | DET | OPERATIONAL_VALIDATED toujours non adopté |
+| R-READ-02 | Pas d’outil date/compare | `read_git_commit` + `compare_git_refs` | DET | pas de list_commits / hunks (OUT) |
+| R-READ-01 | Checks/protections absents Nora | `read_git_commit_status` | DET | rulesets/protections **DENIED** — gate avant GIT-UAT-08 |
+
 ## Chemins mission D6/D7 (écritures)
 
 | Effet | Capability | Mandat | Preuve |
diff --git a/projects/sfia-studio-next/web/tests/unit/git-read-hardening.test.ts b/projects/sfia-studio-next/web/tests/unit/git-read-hardening.test.ts
new file mode 100644
index 00000000..a7a7f05e
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/git-read-hardening.test.ts
@@ -0,0 +1,76 @@
+import { describe, expect, it, afterEach } from "vitest";
+import {
+  buildCognitivePolicy,
+  TEST_BOUNDARY_BUDGETS,
+} from "@/domains/conversation/cognitive-policy";
+import { buildNoraGitReadTools } from "@/domains/conversation/git-read-tools";
+import {
+  getScriptedGitHubProvider,
+  resetScriptedMutationCounts,
+} from "@/domains/integrations/scripted-github-provider";
+
+describe("E08 Git READ hardening — budget split + commit/compare/status", () => {
+  const prevLane = process.env.STUDIO_LANE;
+  const prevProfile = process.env.SFIA_COG_PROFILE_TYPE;
+
+  afterEach(() => {
+    resetScriptedMutationCounts();
+    if (prevLane === undefined) delete process.env.STUDIO_LANE;
+    else process.env.STUDIO_LANE = prevLane;
+    if (prevProfile === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
+    else process.env.SFIA_COG_PROFILE_TYPE = prevProfile;
+  });
+
+  it("TEST_BOUNDARY analyse keeps tight D4 calls but separate Git call budget ≥12", () => {
+    const p = buildCognitivePolicy(
+      "Compare le commit publié à main et donne la date",
+      "TEST_BOUNDARY",
+    );
+    expect(p.profile).toBe("analyse");
+    expect(p.budgets.maxD4ToolCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls);
+    expect(p.budgets.maxD4ToolCalls).toBe(4);
+    expect(p.budgets.maxGitToolCalls).toBe(12);
+    expect(p.budgets.maxGitToolCalls).toBeGreaterThan(p.budgets.maxD4ToolCalls);
+  });
+
+  it("allowlist exposes commit / compare / status tools", () => {
+    const p = buildCognitivePolicy("Vérifie les checks de la PR #19", "TEST_BOUNDARY");
+    expect(p.toolAllowlist).toContain("read_git_commit");
+    expect(p.toolAllowlist).toContain("compare_git_refs");
+    expect(p.toolAllowlist).toContain("read_git_commit_status");
+  });
+
+  it("buildNoraGitReadTools exposes the new READ tools and not merge", async () => {
+    const tools = await buildNoraGitReadTools({
+      pilotId: "pilot_test",
+      projectId: "proj_test",
+      operationId: "op_test",
+      generationId: "gen_test",
+      budget: { remainingChars: 50_000, remainingGitCalls: 12 },
+    });
+    const names = tools.map((t) => (t as { name?: string }).name);
+    expect(names).toContain("read_git_commit");
+    expect(names).toContain("compare_git_refs");
+    expect(names).toContain("read_git_commit_status");
+    expect(names).not.toContain("merge_pull_request");
+  });
+
+  it("scripted getCommit / compareRefs / getCommitStatus are read-only", async () => {
+    const provider = getScriptedGitHubProvider();
+    const pilotId = `pilot_harden_${Date.now()}`;
+    const fullName = "acme/docs-projet";
+    resetScriptedMutationCounts(pilotId, fullName);
+    const before = provider.getMutationCounts?.(pilotId, fullName);
+    const commit = await provider.getCommit(pilotId, fullName, "main");
+    expect(commit.authorDate).toMatch(/2026-11-22/);
+    expect(commit.sha).toBeTruthy();
+    const cmp = await provider.compareRefs(pilotId, fullName, "main", "main");
+    expect(cmp.aheadBy).toBe(0);
+    const st = await provider.getCommitStatus(pilotId, fullName, commit.sha);
+    expect(st.statusCoverage).toBe("COMPLETE");
+    expect(st.statusNote).toMatch(/SCRIPTED|mergeability/i);
+    const after = provider.getMutationCounts?.(pilotId, fullName);
+    expect(after?.mergePR ?? 0).toBe(before?.mergePR ?? 0);
+    expect(after?.createPR ?? 0).toBe(before?.createPR ?? 0);
+  });
+});

```

## 9. Gates Morris

- Push projet / PR / merge : **NON**
- Cutover RECETTE : **NON** (GO ultérieur)
- REAL WRITE / GIT-UAT-08 : **NON**
- OPERATIONAL_VALIDATED : **NON ADOPTÉ**
- Protections/rulesets admin : **arbitrage** si exigé avant merge UAT

## 10. Verdict unique

**READY WITH RESERVES — MORRIS DECISION REQUIRED**

Réserves résiduelles : (1) Nora LIVE non rejouée sur nouveau build ; (2) protections/rulesets non exposées ; (3) cutover non autorisé ce cycle.

**Instruction ChatGPT :** lire depuis Git `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`, vérifier contenus/preuves/SHAs, produire une revue indépendante avant tout nouveau GO Morris.
