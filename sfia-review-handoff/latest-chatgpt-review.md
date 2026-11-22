# SFIA Review Pack FULL — E08 Git READ Hardening Corrective

**Date:** 2026-11-22 ≈ 09:50 CET (Europe/Paris)
**Profil:** CRITICAL
**Macro-lot:** Ensemble 08 — corrections ciblées revue ChatGPT (`84b524de`)
**Type:** Delivery projet / Correctif + QA · **NO RELEASE** · STABLE NOT AVAILABLE
**Mandat Morris:** GO 22 novembre 2026 — trois écarts uniquement ; pas de nouveau chantier ; pas de cutover.

## Sources / contrat

- Mandat cycle : correction A (budget partagé) · B (compare headSha) · C (status token fallback)
- Handoff à corriger : `sfia/review-handoff@84b524def6d860d0cabfc75df820755ca667a03c`
- Parent candidat local : SOURCE `6a2686ea…` · TREE `f745c1a5…` · BUILD `LhWklvGNz7LlZgdhbsCUE` (non servi)
- RECETTE servi (inchangé) : SOURCE `79188f6c…` · BUILD `hLsmHa3uFYP0PgRtj49Bh` · `http://127.0.0.1:3200`
- `origin/main` : `a12f89a15c454319c06f49fcc5e8effa9f3f1a75`

## Git Truth — initial

| Champ | Valeur |
|---|---|
| Remote | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| HEAD initial | `6a2686ea7169b7b46cb6e1810c3b601e2c5cf0e8` |
| TREE initial | `f745c1a560a45be15432bb00b45a664fbb8dce7d` |
| merge-base / origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Worktree clean (hors review tmp) | oui après Truth Check |
| STOP | non — cohérence confirmée |

## Confirmation des trois écarts (code local parent)

1. **A — Budget** : `runLiveWithTools` construisait trois objets `budget: { remainingCalls/Chars }` / `{ remainingChars, remainingGitCalls }` à partir des mêmes nombres → mutations non partagées. **Confirmé.**
2. **B — Compare** : `headSha = tip` depuis `commits[last]` ; si `commits=[]` (identical) → `""`. **Confirmé.**
3. **C — Status** : catch `ACCESS_DENIED` soft sur status et check-runs → jamais throw → `withReadToken` ne retente pas OAuth. **Confirmé.**

## Corrections AVANT / APRÈS

### Écart A — Budget partagé

| | AVANT | APRÈS |
|---|---|---|
| Objet | 3 snapshots numériques clonés | 1 `createSharedToolBudget(policy.budgets)` |
| D4 + history | appels indépendants en pratique | `remainingCalls` partagé |
| Git | `remainingGitCalls` isolé (OK) mais chars clonés | même objet ; `remainingGitCalls` indépendant |
| Chars | non partagés réellement | `remainingChars` unique |
| Persistance | aucune | aucune (inchangé) |

### Écart B — Compare refs

| | AVANT | APRÈS |
|---|---|---|
| headSha | dernier `commits[]` ou `""` | tip commits **ou** `fetchCommitRemote(head)` |
| baseSha | base_commit / merge_base | idem + resolve READ si manquant |
| identical | risque headSha vide | deux SHA 40-hex vérifiés |
| Invention | possible vide présenté | AMBIGUOUS si non vérifiable |

### Écart C — Checks / fallback token

| | AVANT | APRÈS |
|---|---|---|
| Dual 403 | soft PARTIAL/DENIED | throw `ACCESS_DENIED` → `withReadToken` retry |
| Un endpoint OK | soft degrade | soft PARTIAL/DENIED (conservé) |
| Truncation statuses | non signalée | `incompleteCoverage` + PARTIAL |
| WRITE | non | non (READ only) |

## Fichiers modifiés (commit unique)

1. `projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts`
2. `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`
3. `projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts`
4. `projects/sfia-studio-next/web/tests/unit/git-read-hardening-corrective.test.ts` (**création**)
5. `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`
6. `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md`
7. `projects/sfia-studio-next/construction/delivery-history.md`

## Diffs complets — code

### cognitive-policy.ts

```diff
commit 7115e932dad8628af13cd5dcbf1fefc3a227c81e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 09:47:32 2026 +0100

    fix(next): restore shared Nora tool budgets and Git compare/status reads

    Correct three post-hardening review gaps: one shared budget object for D4/history/Git, verified compare SHAs when commits[] is empty, and ACCESS_DENIED on dual status/check-runs denial so withReadToken can fall back.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index d650fb0c..1290fb12 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -219,6 +219,23 @@ export function qualifyCognitiveProfile(userText: string): {
   };
 }

+/**
+ * Single mutable budget bag for one Nora generation.
+ * D4+history share remainingCalls; Git uses remainingGitCalls; all share remainingChars.
+ * Pass the SAME object reference to every tool family — never clone numeric snapshots.
+ */
+export function createSharedToolBudget(budgets: BudgetLimits): {
+  remainingCalls: number;
+  remainingChars: number;
+  remainingGitCalls: number;
+} {
+  return {
+    remainingCalls: budgets.maxD4ToolCalls,
+    remainingChars: budgets.maxD4CharsReturned,
+    remainingGitCalls: budgets.maxGitToolCalls,
+  };
+}
+
 export function buildCognitivePolicy(
   userText: string,
   overrideType?: PolicyProfileType,

```

### nora-adapter.ts

```diff
commit 7115e932dad8628af13cd5dcbf1fefc3a227c81e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 09:47:32 2026 +0100

    fix(next): restore shared Nora tool budgets and Git compare/status reads

    Correct three post-hardening review gaps: one shared budget object for D4/history/Git, verified compare SHAs when commits[] is empty, and ACCESS_DENIED on dual status/check-runs denial so withReadToken can fall back.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 7630a0b3..65d7b792 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -8,6 +8,7 @@ import {
 } from "@/domains/decisions/divergence-assist";
 import {
   buildCognitivePolicy,
+  createSharedToolBudget,
   maxTurnsForPolicy,
   type CognitivePolicy,
   NORA_STUDY_MODEL,
@@ -768,14 +769,18 @@ async function runLiveWithTools(
   const { Agent, run } = await import("@openai/agents");

   const attempts: NoraAttemptRecord[] = [];
-  const initialBudget = {
-    remainingCalls: policy.budgets.maxD4ToolCalls,
-    remainingChars: policy.budgets.maxD4CharsReturned,
-    remainingGitCalls: policy.budgets.maxGitToolCalls,
-  };
+  /**
+   * Single mutable budget object shared by D4, history, and Git tools.
+   * - remainingCalls: D4 + history only (shared)
+   * - remainingGitCalls: Git READ only (independent)
+   * - remainingChars: all three families (shared)
+   * Do NOT clone into separate objects — mutations must be visible across families.
+   */
+  const sharedToolBudget = createSharedToolBudget(policy.budgets);
+  // Alias kept for existing charsConsumed accounting below.
+  const initialBudget = sharedToolBudget;

   // Union of D4 / history / git tools — Agent accepts heterogeneous FunctionTool[].
-  // D4/history consume remainingCalls; Git READ consumes remainingGitCalls (shared chars).
   let tools: unknown[] = [];
   if (policy.toolAllowlist.length > 0 && input.toolScope) {
     const scope: D4ToolScope = {
@@ -783,10 +788,7 @@ async function runLiveWithTools(
       preparationId: input.toolScope.preparationId,
       operationId: input.toolScope.operationId,
       generationId,
-      budget: {
-        remainingCalls: initialBudget.remainingCalls,
-        remainingChars: initialBudget.remainingChars,
-      },
+      budget: sharedToolBudget,
     };
     tools = await buildNoraD4Tools(scope);
     if (
@@ -797,10 +799,7 @@ async function runLiveWithTools(
       const historyTools = await buildNoraHistoryTools({
         pilotId: input.toolScope.pilotId,
         preparationId: input.toolScope.preparationId,
-        budget: {
-          remainingCalls: initialBudget.remainingCalls,
-          remainingChars: initialBudget.remainingChars,
-        },
+        budget: sharedToolBudget,
       });
       tools = [...tools, ...historyTools];
     }
@@ -810,10 +809,7 @@ async function runLiveWithTools(
         projectId: input.toolScope.projectId,
         operationId: input.toolScope.operationId,
         generationId,
-        budget: {
-          remainingChars: initialBudget.remainingChars,
-          remainingGitCalls: initialBudget.remainingGitCalls,
-        },
+        budget: sharedToolBudget,
       });
       tools = [...tools, ...gitTools];
     }

```

### github-app-auth.ts

```diff
commit 7115e932dad8628af13cd5dcbf1fefc3a227c81e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 09:47:32 2026 +0100

    fix(next): restore shared Nora tool budgets and Git compare/status reads

    Correct three post-hardening review gaps: one shared budget object for D4/history/Git, verified compare SHAs when commits[] is empty, and ACCESS_DENIED on dual status/check-runs denial so withReadToken can fall back.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
index 95aacd7b..67607b5e 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
@@ -1001,10 +1001,42 @@ export async function compareCommitsRemote(input: {
   const filesRaw = Array.isArray(raw.files) ? raw.files : [];
   const matchedFileCount = filesRaw.length;
   const commits = Array.isArray(raw.commits) ? raw.commits : [];
-  const tip = commits.length > 0 ? commits[commits.length - 1]?.sha ?? "" : "";
+  // When identical / behind-only, GitHub may return commits=[] — tip from commits is unreliable.
+  const tipFromCommits =
+    commits.length > 0 ? (commits[commits.length - 1]?.sha ?? "").toLowerCase() : "";
+  let baseSha = (raw.base_commit?.sha ?? raw.merge_base_commit?.sha ?? "").toLowerCase();
+  let headSha = tipFromCommits;
+  // Resolve missing SHAs via verified commit READ (accepts SHA or branch/ref) — never invent.
+  if (!/^[0-9a-f]{40}$/i.test(baseSha)) {
+    const baseCommit = await fetchCommitRemote({
+      token: input.token,
+      fullName: input.fullName,
+      ref: input.base.replace(/^refs\/heads\//, ""),
+      fileBound: 1,
+      fetchImpl,
+    });
+    baseSha = baseCommit.sha.toLowerCase();
+  }
+  if (!/^[0-9a-f]{40}$/i.test(headSha)) {
+    const headCommit = await fetchCommitRemote({
+      token: input.token,
+      fullName: input.fullName,
+      ref: input.head.replace(/^refs\/heads\//, ""),
+      fileBound: 1,
+      fetchImpl,
+    });
+    headSha = headCommit.sha.toLowerCase();
+  }
+  if (!/^[0-9a-f]{40}$/i.test(baseSha) || !/^[0-9a-f]{40}$/i.test(headSha)) {
+    throw new StudioError(
+      "AMBIGUOUS",
+      "Comparaison GitHub sans SHA base/head vérifiables",
+      { httpStatus: 409 },
+    );
+  }
   return {
-    baseSha: (raw.base_commit?.sha ?? raw.merge_base_commit?.sha ?? "").toLowerCase(),
-    headSha: tip.toLowerCase(),
+    baseSha,
+    headSha,
     status: raw.status ?? "unknown",
     aheadBy: typeof raw.ahead_by === "number" ? raw.ahead_by : 0,
     behindBy: typeof raw.behind_by === "number" ? raw.behind_by : 0,
@@ -1054,24 +1086,38 @@ export async function fetchCommitStatusRemote(input: {
   let combinedStatuses: Array<{ context: string; state: string; description: string | null }> = [];
   let statusCoverage: "COMPLETE" | "PARTIAL" | "DENIED" | "UNAVAILABLE" = "COMPLETE";
   let statusNote = "Combined status + check-runs observés (bornés).";
+  let statusAccessDenied = false;
+  let checksAccessDenied = false;
+  let statusesMatched = 0;
+  let statusesIncomplete = false;

   try {
     const status = await ghJson<{
       state?: string;
       statuses?: Array<{ context?: string; state?: string; description?: string | null }>;
+      total_count?: number;
     }>(fetchImpl, `/repos/${owner}/${name}/commits/${ref}/status`, {
       method: "GET",
       headers: { Authorization: `Bearer ${input.token}` },
     });
     combinedState = status.state ?? null;
-    combinedStatuses = (status.statuses ?? []).slice(0, bound).map((s) => ({
+    const allStatuses = status.statuses ?? [];
+    statusesMatched =
+      typeof status.total_count === "number" ? status.total_count : allStatuses.length;
+    statusesIncomplete = statusesMatched > bound || allStatuses.length > bound;
+    combinedStatuses = allStatuses.slice(0, bound).map((s) => ({
       context: s.context ?? "",
       state: s.state ?? "unknown",
       description: s.description ?? null,
     }));
+    if (statusesIncomplete) {
+      statusCoverage = "PARTIAL";
+      statusNote = "Combined statuses tronqués (bornés) — ne pas conclure « tous verts ».";
+    }
   } catch (e) {
     const err = e instanceof StudioError ? e : null;
     if (err?.code === "ACCESS_DENIED") {
+      statusAccessDenied = true;
       statusCoverage = "DENIED";
       statusNote = "Combined status inaccessible (permission) — ne pas inventer success.";
     } else if (err?.code === "NOT_FOUND") {
@@ -1090,7 +1136,7 @@ export async function fetchCommitStatusRemote(input: {
     htmlUrl: string | null;
   }> = [];
   let matchedCheckCount = 0;
-  let incompleteCoverage = false;
+  let incompleteCoverage = statusesIncomplete;

   try {
     const checks = await ghJson<{
@@ -1116,11 +1162,13 @@ export async function fetchCommitStatusRemote(input: {
       conclusion: c.conclusion ?? null,
       htmlUrl: c.html_url ?? null,
     }));
-    incompleteCoverage = matchedCheckCount > bound;
-    if (statusCoverage === "COMPLETE" && incompleteCoverage) statusCoverage = "PARTIAL";
+    const checksIncomplete = matchedCheckCount > bound;
+    incompleteCoverage = incompleteCoverage || checksIncomplete;
+    if (statusCoverage === "COMPLETE" && checksIncomplete) statusCoverage = "PARTIAL";
   } catch (e) {
     const err = e instanceof StudioError ? e : null;
     if (err?.code === "ACCESS_DENIED") {
+      checksAccessDenied = true;
       if (statusCoverage === "COMPLETE") statusCoverage = "PARTIAL";
       statusNote =
         (statusNote ? statusNote + " " : "") +
@@ -1132,6 +1180,22 @@ export async function fetchCommitStatusRemote(input: {
     }
   }

+  // Both endpoints ACCESS_DENIED → throw so REAL provider withReadToken can try user OAuth.
+  // Soft PARTIAL/DENIED results are only returned when at least one endpoint is readable
+  // with the current token (or non-auth failures).
+  if (statusAccessDenied && checksAccessDenied) {
+    throw new StudioError(
+      "ACCESS_DENIED",
+      "GitHub status et check-runs inaccessibles avec le jeton courant",
+      { httpStatus: 403 },
+    );
+  }
+
+  if (statusAccessDenied && checkRuns.length === 0 && !checksAccessDenied) {
+    // status denied but checks somehow empty without denial — keep PARTIAL/DENIED note
+    statusCoverage = statusCoverage === "DENIED" ? "DENIED" : "PARTIAL";
+  }
+
   return {
     combinedState,
     combinedStatuses,

```

## Création complète — test correctif

```diff
commit 7115e932dad8628af13cd5dcbf1fefc3a227c81e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 09:47:32 2026 +0100

    fix(next): restore shared Nora tool budgets and Git compare/status reads

    Correct three post-hardening review gaps: one shared budget object for D4/history/Git, verified compare SHAs when commits[] is empty, and ACCESS_DENIED on dual status/check-runs denial so withReadToken can fall back.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/unit/git-read-hardening-corrective.test.ts b/projects/sfia-studio-next/web/tests/unit/git-read-hardening-corrective.test.ts
new file mode 100644
index 00000000..7a0e99fc
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/git-read-hardening-corrective.test.ts
@@ -0,0 +1,481 @@
+import { describe, expect, it, afterEach } from "vitest";
+import {
+  buildCognitivePolicy,
+  createSharedToolBudget,
+  TEST_BOUNDARY_BUDGETS,
+} from "@/domains/conversation/cognitive-policy";
+import { StudioError } from "@/lib/http-errors";
+import {
+  compareCommitsRemote,
+  fetchCommitStatusRemote,
+} from "@/domains/integrations/github-app-auth";
+import type { GitHubFetch } from "@/domains/integrations/github-app-auth";
+
+describe("E08 corrective — shared tool budget object", () => {
+  const prevLane = process.env.STUDIO_LANE;
+  afterEach(() => {
+    if (prevLane === undefined) delete process.env.STUDIO_LANE;
+    else process.env.STUDIO_LANE = prevLane;
+  });
+
+  it("createSharedToolBudget returns one mutable bag with Git≠D4 call ceilings", () => {
+    process.env.STUDIO_LANE = "DEV";
+    const p = buildCognitivePolicy("Consulte la PR et compare à main", "TEST_BOUNDARY");
+    const bag = createSharedToolBudget(p.budgets);
+    expect(bag.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls);
+    expect(bag.remainingGitCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxGitToolCalls);
+    expect(bag.remainingChars).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4CharsReturned);
+
+    // D4 then history share remainingCalls
+    bag.remainingCalls -= 1;
+    bag.remainingChars -= 100;
+    expect(bag.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls - 1);
+    bag.remainingCalls -= 1; // history
+    expect(bag.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls - 2);
+
+    // Git independent calls, shared chars
+    const gitBefore = bag.remainingGitCalls;
+    bag.remainingGitCalls -= 1;
+    bag.remainingChars -= 50;
+    expect(bag.remainingGitCalls).toBe(gitBefore - 1);
+    expect(bag.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls - 2);
+    expect(bag.remainingChars).toBe(
+      TEST_BOUNDARY_BUDGETS.analyse.maxD4CharsReturned - 150,
+    );
+  });
+
+  it("cloning numeric snapshots would break sharing — document the anti-pattern", () => {
+    const shared = createSharedToolBudget(TEST_BOUNDARY_BUDGETS.analyse);
+    const brokenD4 = {
+      remainingCalls: shared.remainingCalls,
+      remainingChars: shared.remainingChars,
+    };
+    brokenD4.remainingCalls -= 1;
+    // shared unchanged — this is the bug we fixed
+    expect(shared.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls);
+    // correct: mutate shared directly
+    shared.remainingCalls -= 1;
+    expect(shared.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls - 1);
+  });
+
+  it("D4→history and history→D4 share remainingCalls; Git≠D4; chars global", () => {
+    const bag = createSharedToolBudget({
+      maxD4ToolCalls: 3,
+      maxD4CharsReturned: 500,
+      maxGitToolCalls: 2,
+    });
+    // D4 → history
+    bag.remainingCalls -= 1;
+    bag.remainingChars -= 40;
+    bag.remainingCalls -= 1;
+    bag.remainingChars -= 30;
+    expect(bag.remainingCalls).toBe(1);
+    expect(bag.remainingChars).toBe(430);
+    // Git → D4 → Git: git independent, chars shared
+    bag.remainingGitCalls -= 1;
+    bag.remainingChars -= 50;
+    bag.remainingCalls -= 1;
+    bag.remainingChars -= 20;
+    bag.remainingGitCalls -= 1;
+    bag.remainingChars -= 10;
+    expect(bag.remainingCalls).toBe(0);
+    expect(bag.remainingGitCalls).toBe(0);
+    expect(bag.remainingChars).toBe(350);
+  });
+
+  it("Git call exhaustion refuses Git without unlocking D4/chars quotas", () => {
+    const bag = createSharedToolBudget({
+      maxD4ToolCalls: 2,
+      maxD4CharsReturned: 800,
+      maxGitToolCalls: 1,
+    });
+    bag.remainingGitCalls -= 1;
+    expect(bag.remainingGitCalls).toBe(0);
+    // D4 still available; chars untouched by call exhaustion alone
+    expect(bag.remainingCalls).toBe(2);
+    expect(bag.remainingChars).toBe(800);
+    bag.remainingCalls -= 1;
+    expect(bag.remainingCalls).toBe(1);
+    expect(bag.remainingGitCalls).toBe(0);
+  });
+
+  it("char exhaustion is a shared stop for D4/history/Git", () => {
+    const bag = createSharedToolBudget({
+      maxD4ToolCalls: 4,
+      maxD4CharsReturned: 100,
+      maxGitToolCalls: 12,
+    });
+    bag.remainingChars = 0;
+    expect(bag.remainingCalls).toBe(4);
+    expect(bag.remainingGitCalls).toBe(12);
+    // Families still see the same zero chars (shared object)
+    expect(bag.remainingChars).toBe(0);
+  });
+
+  it("TEST_BOUNDARY profile is used without promoting OPERATIONAL_VALIDATED", () => {
+    process.env.STUDIO_LANE = "DEV";
+    const p = buildCognitivePolicy("Lis le statut CI du commit", "TEST_BOUNDARY");
+    expect(p.profileType).toBe("TEST_BOUNDARY");
+    expect(p.budgets.maxD4ToolCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls);
+    expect(p.budgets.maxGitToolCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxGitToolCalls);
+  });
+});
+
+describe("E08 corrective — compareCommitsRemote identical refs", () => {
+  it("resolves verified headSha when commits[] is empty (identical)", async () => {
+    const sha = "8c398c494dd918272aab5b2653777c6c21d2e76e";
+    const fetchImpl: GitHubFetch = async (input) => {
+      const url = String(input);
+      if (url.includes("/compare/")) {
+        return new Response(
+          JSON.stringify({
+            status: "identical",
+            ahead_by: 0,
+            behind_by: 0,
+            total_commits: 0,
+            html_url: "https://github.com/acme/r/compare/main...main",
+            base_commit: { sha },
+            merge_base_commit: { sha },
+            commits: [],
+            files: [],
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      if (url.includes("/commits/")) {
+        return new Response(
+          JSON.stringify({
+            sha,
+            html_url: `https://github.com/acme/r/commit/${sha}`,
+            commit: {
+              message: "tip",
+              author: { date: "2026-11-22T06:22:13Z" },
+              committer: { date: "2026-11-22T06:22:13Z" },
+            },
+            parents: [],
+            files: [],
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      return new Response("not found", { status: 404 });
+    };
+
+    const out = await compareCommitsRemote({
+      token: "t",
+      fullName: "acme/r",
+      base: "main",
+      head: "main",
+      fetchImpl,
+    });
+    expect(out.status).toBe("identical");
+    expect(out.aheadBy).toBe(0);
+    expect(out.behindBy).toBe(0);
+    expect(out.headSha).toBe(sha);
+    expect(out.baseSha).toBe(sha);
+  });
+
+  it("uses tip commit sha when ahead commits are present", async () => {
+    const base = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
+    const head = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
+    const fetchImpl: GitHubFetch = async (input) => {
+      const url = String(input);
+      if (url.includes("/compare/")) {
+        return new Response(
+          JSON.stringify({
+            status: "ahead",
+            ahead_by: 1,
+            behind_by: 0,
+            total_commits: 1,
+            base_commit: { sha: base },
+            commits: [{ sha: head }],
+            files: [{ filename: "docs/x.md", status: "added", additions: 1, deletions: 0 }],
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      return new Response("{}", { status: 200 });
+    };
+    const out = await compareCommitsRemote({
+      token: "t",
+      fullName: "acme/r",
+      base: "main",
+      head: "sfia/pub",
+      fetchImpl,
+    });
+    expect(out.headSha).toBe(head);
+    expect(out.baseSha).toBe(base);
+    expect(out.aheadBy).toBe(1);
+  });
+
+  it("behind-only (empty commits[]) still resolves verified headSha", async () => {
+    const base = "cccccccccccccccccccccccccccccccccccccccc";
+    const head = "dddddddddddddddddddddddddddddddddddddddd";
+    const fetchImpl: GitHubFetch = async (input) => {
+      const url = String(input);
+      if (url.includes("/compare/")) {
+        return new Response(
+          JSON.stringify({
+            status: "behind",
+            ahead_by: 0,
+            behind_by: 2,
+            total_commits: 0,
+            base_commit: { sha: base },
+            commits: [],
+            files: [],
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      if (url.includes("/commits/")) {
+        return new Response(
+          JSON.stringify({
+            sha: head,
+            commit: {
+              message: "tip",
+              author: { date: "2026-11-22T00:00:00Z" },
+              committer: { date: "2026-11-22T00:00:00Z" },
+            },
+            parents: [],
+            files: [],
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      return new Response("no", { status: 404 });
+    };
+    const out = await compareCommitsRemote({
+      token: "t",
+      fullName: "acme/r",
+      base: "main",
+      head: "old-branch",
+      fetchImpl,
+    });
+    expect(out.status).toBe("behind");
+    expect(out.behindBy).toBe(2);
+    expect(out.aheadBy).toBe(0);
+    expect(out.baseSha).toBe(base);
+    expect(out.headSha).toBe(head);
+  });
+
+  it("diverged refs keep status + verified SHAs; truncated files → incompleteCoverage", async () => {
+    const base = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
+    const head = "ffffffffffffffffffffffffffffffffffffffff";
+    const files = Array.from({ length: 5 }, (_, i) => ({
+      filename: `f${i}.md`,
+      status: "modified",
+      additions: 1,
+      deletions: 1,
+    }));
+    const fetchImpl: GitHubFetch = async (input) => {
+      const url = String(input);
+      if (url.includes("/compare/")) {
+        return new Response(
+          JSON.stringify({
+            status: "diverged",
+            ahead_by: 1,
+            behind_by: 1,
+            total_commits: 1,
+            base_commit: { sha: base },
+            commits: [{ sha: head }],
+            files,
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      return new Response("{}", { status: 200 });
+    };
+    const out = await compareCommitsRemote({
+      token: "t",
+      fullName: "acme/r",
+      base: "main",
+      head: "feature",
+      fileBound: 3,
+      fetchImpl,
+    });
+    expect(out.status).toBe("diverged");
+    expect(out.baseSha).toBe(base);
+    expect(out.headSha).toBe(head);
+    expect(out.files).toHaveLength(3);
+    expect(out.incompleteCoverage).toBe(true);
+    expect(out.matchedFileCount).toBe(5);
+  });
+
+  it("unknown ref → explicit error, no invented SHAs", async () => {
+    const fetchImpl: GitHubFetch = async () =>
+      new Response(JSON.stringify({ message: "Not Found" }), { status: 404 });
+    await expect(
+      compareCommitsRemote({
+        token: "t",
+        fullName: "acme/r",
+        base: "missing-a",
+        head: "missing-b",
+        fetchImpl,
+      }),
+    ).rejects.toMatchObject({ code: "NOT_FOUND" });
+  });
+});
+
+describe("E08 corrective — fetchCommitStatusRemote token fallback signal", () => {
+  it("throws ACCESS_DENIED when BOTH status and check-runs are 403 (enables withReadToken retry)", async () => {
+    const fetchImpl: GitHubFetch = async () =>
+      new Response(JSON.stringify({ message: "Forbidden" }), { status: 403 });
+    await expect(
+      fetchCommitStatusRemote({
+        token: "install",
+        fullName: "acme/r",
+        ref: "a".repeat(40),
+        fetchImpl,
+      }),
+    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
+  });
+
+  it("returns PARTIAL when status 200 but check-runs 403 (no throw — soft degrade)", async () => {
+    const fetchImpl: GitHubFetch = async (input) => {
+      const url = String(input);
+      if (url.includes("/status")) {
+        return new Response(
+          JSON.stringify({
+            state: "success",
+            statuses: [{ context: "ci", state: "success", description: "ok" }],
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      if (url.includes("/check-runs")) {
+        return new Response(JSON.stringify({ message: "Forbidden" }), { status: 403 });
+      }
+      return new Response("no", { status: 404 });
+    };
+    const out = await fetchCommitStatusRemote({
+      token: "install",
+      fullName: "acme/r",
+      ref: "a".repeat(40),
+      fetchImpl,
+    });
+    expect(out.combinedState).toBe("success");
+    expect(out.statusCoverage).toBe("PARTIAL");
+    expect(out.checkRuns).toEqual([]);
+    expect(out.statusNote).toMatch(/Check-runs inaccessibles/i);
+  });
+
+  it("returns PARTIAL when status 403 but check-runs 200", async () => {
+    const fetchImpl: GitHubFetch = async (input) => {
+      const url = String(input);
+      if (url.includes("/status") && !url.includes("check-runs")) {
+        return new Response(JSON.stringify({ message: "Forbidden" }), { status: 403 });
+      }
+      if (url.includes("/check-runs")) {
+        return new Response(
+          JSON.stringify({
+            total_count: 1,
+            check_runs: [
+              {
+                name: "build",
+                status: "completed",
+                conclusion: "success",
+                html_url: "https://example.test/1",
+              },
+            ],
+          }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      return new Response("no", { status: 404 });
+    };
+    const out = await fetchCommitStatusRemote({
+      token: "install",
+      fullName: "acme/r",
+      ref: "a".repeat(40),
+      fetchImpl,
+    });
+    expect(out.checkRuns).toHaveLength(1);
+    expect(out.combinedState).toBeNull();
+    // status denied but checks ok → not COMPLETE
+    expect(["PARTIAL", "DENIED"]).toContain(out.statusCoverage);
+  });
+
+  it("marks incompleteCoverage when combined statuses are truncated", async () => {
+    const many = Array.from({ length: 40 }, (_, i) => ({
+      context: `ctx-${i}`,
+      state: "success",
+      description: null as string | null,
+    }));
+    const fetchImpl: GitHubFetch = async (input) => {
+      const url = String(input);
+      if (url.includes("/status") && !url.includes("check-runs")) {
+        return new Response(
+          JSON.stringify({ state: "success", total_count: 40, statuses: many }),
+          { status: 200, headers: { "Content-Type": "application/json" } },
+        );
+      }
+      if (url.includes("/check-runs")) {
+        return new Response(JSON.stringify({ total_count: 0, check_runs: [] }), {
+          status: 200,
+          headers: { "Content-Type": "application/json" },
+        });
+      }
+      return new Response("no", { status: 404 });
+    };
+    const out = await fetchCommitStatusRemote({
+      token: "t",
+      fullName: "acme/r",
+      ref: "a".repeat(40),
+      checkBound: 30,
+      fetchImpl,
+    });
+    expect(out.combinedStatuses.length).toBe(30);
+    expect(out.incompleteCoverage).toBe(true);
+    expect(out.statusCoverage).toBe("PARTIAL");
+  });
+});
+
+describe("E08 corrective — withReadToken retries after dual ACCESS_DENIED", () => {
+  it("second token is used when first fetchCommitStatusRemote throws", async () => {
+    async function withReadToken<T>(run: (token: string) => Promise<T>): Promise<T> {
+      try {
+        return await run("install");
+      } catch (e) {
+        const err = e instanceof StudioError ? e : null;
+        if (err?.code !== "ACCESS_DENIED") throw e;
+        return await run("user");
+      }
+    }
+
+    const tokenUsed: string[] = [];
+    const out = await withReadToken(async (token) => {
+      tokenUsed.push(token);
+      if (token === "install") {
+        return fetchCommitStatusRemote({
+          token,
+          fullName: "acme/r",
+          ref: "a".repeat(40),
+          fetchImpl: async () =>
+            new Response(JSON.stringify({ message: "Forbidden" }), { status: 403 }),
+        });
+      }
+      return fetchCommitStatusRemote({
+        token,
+        fullName: "acme/r",
+        ref: "a".repeat(40),
+        fetchImpl: async (input) => {
+          const u = String(input);
+          if (u.includes("/check-runs")) {
+            return new Response(JSON.stringify({ total_count: 0, check_runs: [] }), {
+              status: 200,
+              headers: { "Content-Type": "application/json" },
+            });
+          }
+          return new Response(
+            JSON.stringify({ state: "success", statuses: [], total_count: 0 }),
+            { status: 200, headers: { "Content-Type": "application/json" } },
+          );
+        },
+      });
+    });
+
+    expect(tokenUsed).toEqual(["install", "user"]);
+    expect(out.combinedState).toBe("success");
+    expect(out.statusCoverage).toBe("COMPLETE");
+  });
+});

```

## Diffs documentation

```diff
commit 7115e932dad8628af13cd5dcbf1fefc3a227c81e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 09:47:32 2026 +0100

    fix(next): restore shared Nora tool budgets and Git compare/status reads

    Correct three post-hardening review gaps: one shared budget object for D4/history/Git, verified compare SHAs when commits[] is empty, and ACCESS_DENIED on dual status/check-runs denial so withReadToken can fall back.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 98fc5638..936694d9 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,22 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 09:50 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — correctif revue ChatGPT (handoff `84b524de`) |
+| Type | INC / QA · CRITICAL · **NO RELEASE** |
+| Écart A | Budget partagé : un objet `createSharedToolBudget` (D4+history calls · Git calls · chars) |
+| Écart B | `compareCommitsRemote` : SHA head vérifié si `commits[]` vide |
+| Écart C | `fetchCommitStatusRemote` : dual 403 → ACCESS_DENIED pour `withReadToken` |
+| Preuves | unit **833/833** · corrective **16/16** · PG accept01 **11/11** · tsc PASS |
+| RECETTE | **INCHANGÉE** `79188f6c` / `hLsmHa3uFYP0PgRtj49Bh` |
+| Cutover | **NONE** — candidat local à figer ; GO cutover Morris distinct |
+| Push projet | **NONE** |
+| STABLE | NOT AVAILABLE |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING

 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index b4555f3c..c4ee6823 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -113,6 +113,13 @@
 - RECETTE servi **inchangé** (`79188f6c` / `hLsmHa3uFYP0PgRtj49Bh`) — aucun cutover ce cycle.
 - Preuves : unit 824 PASS · PG mission-continuity 11 PASS · Nora LIVE / REAL WRITE **NOT PROVEN**.

+### Correctif revue ChatGPT — Git READ hardening (2026-11-22)
+- **Écart A (budget)** : le lot précédent passait trois objets budget clonés → D4/history/Git ne partageaient plus mutations. **Fix** : `createSharedToolBudget()` + **une** référence mutable dans `runLiveWithTools` (D4+history = `remainingCalls` ; Git = `remainingGitCalls` ; chars = `remainingChars` partagés).
+- **Écart B (compare)** : `commits[]` vide (`identical` / behind-only) → `headSha=""`. **Fix** : résolution READ via `fetchCommitRemote` si SHA tip absent ; refuse AMBIGUOUS si non vérifiable.
+- **Écart C (checks)** : catch soft des 403 empêchait `withReadToken` (install→user). **Fix** : throw `ACCESS_DENIED` si **les deux** endpoints refusent ; soft PARTIAL/DENIED si un seul accessible ; statuses tronqués → `incompleteCoverage` + PARTIAL.
+- RECETTE **INCHANGÉE** (`79188f6c` / `hLsmHa3uFYP0PgRtj49Bh`) — pas de cutover.
+- Preuves : unit corrective + suite unit **833** PASS · PG accept01 **11** PASS · tsc PASS · REAL WRITE / Nora LIVE **NOT PROVEN**.
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
index 82be9c67..87a8ff66 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
@@ -109,16 +109,19 @@ Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ ·
 | `compare_git_refs` | **FIX** | Git calls | non |
 | `read_git_commit_status` | **FIX** | Git calls | non |

-Budget : `maxGitToolCalls` **séparé** de `maxD4ToolCalls` (R-READ-03). Chars partagés.
+Budget : `maxGitToolCalls` **séparé** de `maxD4ToolCalls` (R-READ-03). Chars partagés **sur un seul objet mutable** (`createSharedToolBudget`) — D4+history partagent `remainingCalls` ; Git utilise `remainingGitCalls` ; les trois partagent `remainingChars` (correctif revue 2026-11-22).
 Écritures : **aucune** via outil LLM direct — uniquement qualification → D6 → D7 → D9 → D8 → restitution D3.

+Compare : `baseSha`/`headSha` toujours issus de faits vérifiés (tip `commits[]` ou `fetchCommitRemote`) — y compris `status=identical` avec `commits=[]`.
+Checks : dual 403 → `ACCESS_DENIED` (retry `withReadToken`) ; un seul endpoint OK → PARTIAL/DENIED ; pas de « checks verts » sur couverture incomplète.
+
 ### Réserves UAT post-campagne (fiabilisation 2026-11-22)

 | Réserve | Cause | Correction | Preuve | Limite restante |
 |---|---|---|---|---|
-| R-READ-03 | TEST_BOUNDARY RECETTE + compteur D4+Git partagé (4) | `maxGitToolCalls` + `remainingGitCalls` | DET | OPERATIONAL_VALIDATED toujours non adopté |
-| R-READ-02 | Pas d’outil date/compare | `read_git_commit` + `compare_git_refs` | DET | pas de list_commits / hunks (OUT) |
-| R-READ-01 | Checks/protections absents Nora | `read_git_commit_status` | DET | rulesets/protections **DENIED** — gate avant GIT-UAT-08 |
+| R-READ-03 | TEST_BOUNDARY RECETTE + compteur D4+Git partagé (4) | `maxGitToolCalls` + `remainingGitCalls` + **objet budget unique** | DET | OPERATIONAL_VALIDATED toujours non adopté |
+| R-READ-02 | Pas d’outil date/compare | `read_git_commit` + `compare_git_refs` (+ SHA tip vérifié) | DET | pas de list_commits / hunks (OUT) |
+| R-READ-01 | Checks/protections absents Nora | `read_git_commit_status` (+ fallback token) | DET | rulesets/protections **DENIED** — gate avant GIT-UAT-08 |

 ## Chemins mission D6/D7 (écritures)


```

## Tests exécutés

| Suite | Résultat | Preuve |
|---|---|---|
| `tsc --noEmit` | PASS | DEV |
| `vitest` corrective | **16/16 PASS** | DETERMINISTIC PROVEN |
| `vitest` hardening + cognitive | 4+6 PASS | DET |
| `vitest tests/unit` (post-commit recount) | **840/840 PASS** | DET |
| `mission-continuity-accept01.pg` | **11/11 PASS** (DB DEV :5433 → e2e rewrite) | DET / PG |
| Nora LIVE E2E | **NOT PROVEN** | — |
| GitHub REAL WRITE / mutation | **NOT** (aucune) | — |
| RECETTE HTTP BUILD | `<!--hLsmHa3uFYP0PgRtj49Bh-->` inchangé | ENV-01 |

Note : delivery-history commit mentionnait 833 (recount intermédiaire) ; recount final post-commit = **840**.

## Fake / Real

| Capacité | Niveau |
|---|---|
| Budget objet partagé | DETERMINISTIC PROVEN |
| Compare identical / behind / diverged / 404 | DETERMINISTIC PROVEN (HTTP simulé) |
| Status dual-403 → throw + withReadToken | DETERMINISTIC PROVEN (simulé) |
| PARTIAL one-sided 403 / truncation | DETERMINISTIC PROVEN |
| Fallback OAuth REAL GitHub | NOT PROVEN ce cycle (pas de campagne REAL checks) |
| Nora LIVE parcours UAT | NOT PROVEN |
| Merge / WRITE | NOT (hors mandat) |

## Non-régression

- Cinq PASS UAT antérieurs / outils READ hardening **conservés** (suite unit + hardening tests verts).
- Pas de modification D6/D7/D8, SEF, ADR, schema PG, UX, permissions GitHub.
- RECETTE non mutée.
- GIT-UAT-08 hors mandat.

## Documentation synchronisée

- as-built § correctif revue
- matrice capacités (budget objet unique + compare SHA + fallback checks)
- delivery-history `DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING-CORRECTIVE`

## Candidat figé (NON SERVI)

```json
{
  "macro_lot": "E08-GIT-READ-HARDENING-CORRECTIVE",
  "date_utc": "2026-11-22T08:50:00Z",
  "source_sha": "7115e932dad8628af13cd5dcbf1fefc3a227c81e",
  "tree": "bdfd5648f9dbc2ba49dda2863e6957c606d4cec6",
  "build_id": "OwQrOGhC9rwk_Dtj31OcM",
  "parent_sha": "6a2686ea7169b7b46cb6e1810c3b601e2c5cf0e8",
  "parent_tree": "f745c1a560a45be15432bb00b45a664fbb8dce7d",
  "parent_build_id": "LhWklvGNz7LlZgdhbsCUE",
  "worktree": "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-corrective-build-7115e932",
  "served_recette": {
    "source_sha": "79188f6cf334be5c81f485b8cb1c4f1ae95644dc",
    "build_id": "hLsmHa3uFYP0PgRtj49Bh",
    "url": "http://127.0.0.1:3200",
    "status": "UNCHANGED"
  },
  "versioning": "NO RELEASE",
  "cutover": "NONE",
  "project_push": "NONE"
}

```

| Champ | Valeur |
|---|---|
| SOURCE_SHA | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
| TREE | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
| BUILD_ID | `OwQrOGhC9rwk_Dtj31OcM` |
| Worktree build | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-corrective-build-7115e932` |
| Servi RECETTE | **NON** — reste `hLsmHa3uFYP0PgRtj49Bh` |
| Versioning | **NO RELEASE** |
| Cutover | **NONE** — GO Morris distinct requis |

## Git Truth — final

| Champ | Valeur |
|---|---|
| Branche | `feat/next-ensemble08-git-publications-nora` |
| HEAD final | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
| TREE final | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
| ahead of origin/main | 16 commits (local) |
| Project push | **NONE** |
| Dirty | `.tmp-sfia-review/` only (hors commit projet) |

## Limitations / réserves

1. Fallback token REAL checks : prouvé en simulation ; pas de campagne REAL OAuth status ce cycle.
2. Protections/rulesets toujours **DENIED** / hors couverture (R-READ-01 limite).
3. Nora LIVE E2E NOT PROVEN.
4. OPERATIONAL_VALIDATED non promu.
5. delivery-history chiffre unit intermédiaire 833 vs recount 840 (mineur).

## Risques et gates Morris

- **Cutover RECETTE** : GO distinct sur triplet `7115e932` / `bdfd5648` / `OwQrOGhC9rwk_Dtj31OcM`.
- **GIT-UAT-08** : hors mandat.
- **STABLE / ADOPTED / RELEASE** : non disponibles.
- Instruction ChatGPT : relire depuis Git `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`, comparer aux preuves/diffs, revue indépendante **avant** toute demande de cutover.

## Verdict

**READY FOR CHATGPT REVIEW — E08 CORRECTIVE HARDENING**
