# SFIA Review Pack FULL — E08 Documentary GitHub REAL Merge (DEV)

## 1. Date / heure

| Champ | Valeur |
| --- | --- |
| Europe/Paris | 2026-11-22 12:55:07 UTC+01:00 |
| UTC | 2026-11-22 11:55:07 UTC |
| Mandat | GO Morris — fusion documentaire REAL gouvernée via Nora (DEV) |
| Classe | **NO RELEASE** · STABLE **NOT AVAILABLE** · E08 **NON ADOPTED** |

## 2. Git Truth initial / final

| Champ | Initial | Final |
| --- | --- | --- |
| Branche | feat/next-ensemble08-git-publications-nora | idem |
| HEAD | 98118de073e9df5f2446592a281060ddb64369fe | a087051a569a0bd6eaab935d674ac567ecfa6400 |
| TREE | 51694a4dbe160e1caedab53c809e27d67d1cd150 | 7274dcc085d59e7332e9947c4931a95a0de5439a |
| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 | inchangé |
| Push projet | — | **NONE** |

Worktree: /Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora
RECETTE figée preview-build-98118de0 **non mutée**.

## 3. Sources Git consultées

- Gouvernance Next / SEF / ENV-01 / versioning (refs main)
- Handoff cutover preview a0bacdcf
- Code AS-IS: effect-service, real-github-provider, conversation-merge-authority, github-app-auth

## 4. Diagnostic AS-IS / TO-BE

| Zone | AS-IS (98118de0) | TO-BE livré |
| --- | --- | --- |
| D9 mergePullRequest | Gate documentary + mergePullRequestRemote | + éligibilité clean/blocked/dirty/null refusée |
| D7 MergePlan | Sans effectProviderMode | Mode figé REAL/SCRIPTED + fingerprint |
| D7 reconcile GIT_MERGE | Écrivait pr.headSha | mergeCommitSha only + ML4-REC-01 |
| SCRIPTED merge | Retournait HEAD | SHA fusion synthétique + mergeCommitSha |
| publication-effect-view | MERGE sur attempt pub seul | Corrélation via publicationAttemptId |
| Nora→D6→D7 | Présent | Conservé — aucune fusion REAL exécutée |

## 5. Chaîne Nora → D6 → D7 → D9 → D8

Pilote USER → d7.merge_publication → admitConversationalMergeMandate → prepareMerge → authorizeMerge (GIT_MERGE_MANDATE) → dispatchMerge → provider.mergePullRequest → fait MERGE + D8 MERGED → restitution Nora.
Publication simple n'autorise jamais le merge.

## 6. Fichiers créés / modifiés

```
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
M	projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts
M	projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
M	projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
M	projects/sfia-studio-next/web/src/domains/execution/types.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
M	projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
M	projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
A	projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts
M	projects/sfia-studio-next/web/tests/unit/merge-pull-request-sha.test.ts
```

## 7. Diff commit complet (a087051a569a)

```diff
commit a087051a569a0bd6eaab935d674ac567ecfa6400
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 12:53:53 2026 +0100

    feat(e08): govern documentary GitHub REAL merge via Nora
    
    Close merge reconcile/SHA and eligibility gaps so D9 can execute a
    documentary merge under D6/D7 without inventing proof from mocks.
---
 .../construction/delivery-history.md               |  15 ++
 .../ensemble-08-git-et-publications/as-built.md    |  11 +
 .../conversation/publication-effect-view.ts        |  47 +++-
 .../web/src/domains/execution/effect-service.ts    |  90 +++++++-
 .../web/src/domains/execution/fingerprint.ts       |  48 ++--
 .../web/src/domains/execution/types.ts             |   5 +
 .../src/domains/integrations/github-app-auth.ts    |  25 +++
 .../src/domains/integrations/github-provider.ts    |   3 +-
 .../integrations/scripted-github-provider.ts       |  19 +-
 .../tests/unit/documentary-merge-contract.test.ts  | 243 +++++++++++++++++++++
 .../web/tests/unit/merge-pull-request-sha.test.ts  |  84 +++++++
 11 files changed, 559 insertions(+), 31 deletions(-)

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index d176cadb..8db81465 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,21 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 12:53 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — fusion documentaire GitHub REAL gouvernée via Nora (DEV) |
+| Type | EVOL · CRITICAL · **NO RELEASE** |
+| AS-IS | Chaîne Nora→D6→D7→D9 merge déjà présente ; gaps reconcile `headSha`, pas de `effectProviderMode` merge, éligibilité GitHub insuffisante, SCRIPTED réutilisait HEAD |
+| Fix | `MergePlan.effectProviderMode` · reconcile merge_commit_sha + ML4-REC-01 · eligibility clean · SCRIPTED merge SHA distinct · vue MERGE corrélée |
+| Preuves | unit documentary-merge-contract + merge-sha + authority · PG conversation-merge-security · git-collaboration B3/T20 slice · tsc PASS |
+| RECETTE | **INCHANGÉE** `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` · ml4d-ux004 |
+| Mutation GitHub REAL | **NONE** — merge REAL **NOT PROVEN** |
+| Push projet | **NONE** |
+| Verdict | **DEVELOPMENT COMPLETE WITH RESERVES — REAL MERGE NOT YET PROVEN** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UNIVERSAL-PREVIEW-FALLBACK
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index cc0e00d2..4e38df20 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -180,3 +180,14 @@
 | GitHub REAL READ (RECETTE) | BOUNDARY — smoke post-cutover |
 | GitHub REAL WRITE / MERGE | NOT PROVEN |
 | Nora LIVE E2E | NOT PROVEN |
+
+### Documentary GitHub REAL merge path (DEV — 2026-11-22)
+
+- **Chaîne** Nora `d7.merge_publication` → `admitConversationalMergeMandate` → D6 `GIT_MERGE_MANDATE` → D7 `prepareMerge` / `authorizeMerge` / `dispatchMerge` → D9 `mergePullRequest` → D8 `MERGED` + fait `MERGE`.
+- **D9 REAL** : `mergePullRequest` sous gate `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` + WRITE allowlist + user OAuth ; `mergePullRequestRemote` avec précondition `sha`, refus dirty/blocked/non-démontré, idempotence via `merge_commit_sha` (jamais HEAD source).
+- **D7** : `MergePlan.effectProviderMode` figé au prepare ; dispatch refuse divergence de mode ; `reconcileAttempt(GIT_MERGE)` ML4-REC-01 + SHA = `mergeCommitSha` uniquement.
+- **SCRIPTED** : commit de fusion synthétique distinct du HEAD source ; `mergeCommitSha` exposé.
+- **Restitution** : `publication-effect-view` corrèle les faits MERGE via `publicationAttemptId`.
+- **Preuves** : unit MERGE contract + merge SHA + merge authority ; PG `conversation-merge-security` ; slice `git-collaboration` B3/T20 ; `tsc` PASS.
+- **Hors cycle** : aucune fusion GitHub REAL exécutée ; RECETTE `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` **inchangée**.
+- **Niveau** : chemin REAL **implémenté / testé (SCRIPTED + interface mockée)** — **MERGE REAL NOT PROVEN**.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts b/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts
index e2caa664..5d28cf16 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts
@@ -201,7 +201,9 @@ export async function buildPublicationEffectViewFromAttempt(input: {
     }
   }
 
-  const mergeFact = (
+  // MERGE facts live on the GIT_MERGE attempt — correlate via publicationAttemptId.
+  let mergeObserved = false;
+  const directMergeFact = (
     await db
       .select({ id: observedGitFacts.id })
       .from(observedGitFacts)
@@ -213,6 +215,47 @@ export async function buildPublicationEffectViewFromAttempt(input: {
       )
       .limit(1)
   )[0];
+  if (directMergeFact) {
+    mergeObserved = true;
+  } else {
+    const mergeAttempts = await db
+      .select({ id: effectAttempts.id, planJson: effectAttempts.planJson })
+      .from(effectAttempts)
+      .where(
+        and(
+          eq(effectAttempts.projectId, row.projectId),
+          eq(effectAttempts.pilotId, row.pilotId),
+          eq(effectAttempts.kind, "GIT_MERGE"),
+        ),
+      );
+    const correlatedIds = mergeAttempts
+      .filter((m) => {
+        try {
+          const p = JSON.parse(m.planJson || "{}") as { publicationAttemptId?: string };
+          return p.publicationAttemptId === input.attemptId;
+        } catch {
+          return false;
+        }
+      })
+      .map((m) => m.id);
+    if (correlatedIds.length > 0) {
+      for (const mid of correlatedIds) {
+        const mf = (
+          await db
+            .select({ id: observedGitFacts.id })
+            .from(observedGitFacts)
+            .where(
+              and(eq(observedGitFacts.attemptId, mid), eq(observedGitFacts.factKind, "MERGE")),
+            )
+            .limit(1)
+        )[0];
+        if (mf) {
+          mergeObserved = true;
+          break;
+        }
+      }
+    }
+  }
 
   return buildPublicationEffectViewFromOwnerPayload({
     outcome: input.outcome,
@@ -224,7 +267,7 @@ export async function buildPublicationEffectViewFromAttempt(input: {
     plan,
     result,
     prHtmlUrl,
-    mergeObserved: Boolean(mergeFact),
+    mergeObserved,
   });
 }
 
diff --git a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
index 2977338f..01fc8973 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
@@ -1825,6 +1825,7 @@ export async function prepareMerge(input: {
     throw new StudioError("REQUIRES_REQUALIFICATION", "baseRef PR inattendue");
   }
 
+  const effectProviderMode = resolveConfiguredEffectProviderMode();
   const plan: MergePlan = {
     repositoryId: pubRef.repositoryId,
     repositoryFullName: repo.fullName,
@@ -1842,6 +1843,7 @@ export async function prepareMerge(input: {
     expectedHeadRef: pr.headRef,
     expectedBaseRef: pr.baseRef,
     publicationBranch: pubPlan.publicationBranch,
+    effectProviderMode,
   };
   const fingerprint = mergeEffectFingerprint(plan);
 
@@ -2085,6 +2087,22 @@ export async function dispatchMerge(input: {
     throw new StudioError("REQUIRES_REQUALIFICATION", "Provenance publication incohérente");
   }
 
+  const liveEffectMode = resolveConfiguredEffectProviderMode();
+  if (plan.effectProviderMode && plan.effectProviderMode !== liveEffectMode) {
+    const released = releaseClaim(readClaim(resultJson));
+    await casOwnedTransition({
+      attemptId: row.id,
+      claimToken,
+      fromStatus: "DISPATCHED",
+      toStatus: "REQUIRES_REQUALIFICATION",
+      resultJson: writeClaimInto(resultJson, released),
+    });
+    throw new StudioError(
+      "REQUIRES_REQUALIFICATION",
+      `Mode fournisseur d'effet divergé (plan=${plan.effectProviderMode}, live=${liveEffectMode})`,
+    );
+  }
+
   const provider = resolveGitHubProvider();
   try {
     await ExecutionBarrierRegistry.before("before:MERGE");
@@ -2742,10 +2760,63 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
         note: "READ-ONLY: claim merge actif",
       };
     }
+
+    // ML4-REC-01 parity — never attribute a merge COMPLETED from the wrong provider mode.
+    const historicalMode = qualifyPlanEffectProviderMode(plan);
+    const liveMode = resolveConfiguredEffectProviderMode();
+    const providerMismatch =
+      (historicalMode === "REAL" || historicalMode === "SCRIPTED") &&
+      historicalMode !== liveMode;
+    const provenanceUnknown = historicalMode === "UNKNOWN";
+    if (providerMismatch || provenanceUnknown) {
+      const note = providerMismatch
+        ? `ML4-REC-01: mode fournisseur divergé (plan=${historicalMode}, live=${liveMode}) — observation merge refusée`
+        : "ML4-REC-01: provenance fournisseur UNKNOWN — aucune attribution D7/D8 merge depuis le provider live";
+      if (row.status === "COMPLETED") {
+        return {
+          attemptId,
+          status: "COMPLETED" as const,
+          facts,
+          note: `${note} — COMPLETED historique préservé`,
+        };
+      }
+      if (providerMismatch && (row.status === "AMBIGUOUS" || row.status === "DISPATCHED")) {
+        const released = releaseClaim(claim);
+        const cas = await casLiberateInactiveDispatch({
+          attemptId: row.id,
+          fromStatus: row.status,
+          toStatus: "REQUIRES_REQUALIFICATION",
+          resultJson: writeClaimInto(row.resultJson, released),
+        });
+        return {
+          attemptId,
+          status: cas ? ("REQUIRES_REQUALIFICATION" as const) : row.status,
+          facts,
+          note,
+        };
+      }
+      return { attemptId, status: row.status, facts, note };
+    }
+
     const provider = resolveGitHubProvider();
     try {
       const pr = await provider.getPullRequest(pilotId, plan.repositoryFullName, plan.prNumber);
       if (pr.state === "merged" && (row.status === "AMBIGUOUS" || row.status === "DISPATCHED")) {
+        // P0-02 — never present source HEAD as the merge commit SHA.
+        const mergeSha =
+          typeof pr.mergeCommitSha === "string" && /^[0-9a-f]{40}$/i.test(pr.mergeCommitSha)
+            ? pr.mergeCommitSha
+            : null;
+        if (!mergeSha) {
+          return {
+            attemptId,
+            status: row.status,
+            prState: pr.state,
+            prCurrentState: mapPrState(pr.state),
+            facts,
+            note: "PR mergée — merge_commit_sha absent ; COMPLETED non inventé",
+          };
+        }
         const released = releaseClaim(claim);
         const cas = await casLiberateInactiveDispatch({
           attemptId: row.id,
@@ -2753,7 +2824,7 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
           toStatus: "COMPLETED",
           resultJson: JSON.stringify({
             merged: true,
-            sha: pr.headSha,
+            sha: mergeSha,
             reconciled: true,
             claim: released,
           }),
@@ -2761,14 +2832,29 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
         if (cas) {
           await db
             .update(documentPublicationRefs)
-            .set({ status: "MERGED", headSha: pr.headSha, updatedAt: new Date() })
+            .set({ status: "MERGED", headSha: mergeSha, updatedAt: new Date() })
             .where(eq(documentPublicationRefs.id, plan.publicationRefId));
+          const hasMergeFact = facts.some((f) => f.factKind === "MERGE");
+          if (!hasMergeFact) {
+            await recordFact({
+              attemptId: row.id,
+              pilotId,
+              projectId,
+              factKind: "MERGE",
+              repositoryFullName: plan.repositoryFullName,
+              refName: plan.expectedBaseRef,
+              sha: mergeSha,
+              prNumber: plan.prNumber,
+              detail: { merged: true, reconciled: true, publicationRefId: plan.publicationRefId },
+            });
+          }
         }
         return {
           attemptId,
           status: cas ? "COMPLETED" : row.status,
           prState: pr.state,
           facts,
+          mergeSha,
         };
       }
       return {
diff --git a/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts b/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
index c793edc3..ccf3bdab 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
@@ -98,29 +98,31 @@ export function publicationEffectFingerprint(plan: PublicationPlan): string {
 }
 
 export function mergeEffectFingerprint(plan: MergePlan): string {
-  return createHash("sha256")
-    .update(
-      canonical({
-        kind: "GIT_MERGE",
-        repositoryId: plan.repositoryId,
-        repositoryFullName: plan.repositoryFullName,
-        authorizationId: plan.authorizationId,
-        installationId: plan.installationId,
-        actorLogin: plan.actorLogin,
-        publicationAttemptId: plan.publicationAttemptId,
-        publicationRefId: plan.publicationRefId,
-        documentId: plan.documentId,
-        revisionId: plan.revisionId,
-        targetPath: plan.targetPath,
-        prNumber: plan.prNumber,
-        expectedHeadSha: plan.expectedHeadSha,
-        expectedBaseSha: plan.expectedBaseSha,
-        expectedHeadRef: plan.expectedHeadRef,
-        expectedBaseRef: plan.expectedBaseRef,
-        publicationBranch: plan.publicationBranch,
-      }),
-    )
-    .digest("hex");
+  const payload: Record<string, unknown> = {
+    kind: "GIT_MERGE",
+    repositoryId: plan.repositoryId,
+    repositoryFullName: plan.repositoryFullName,
+    authorizationId: plan.authorizationId,
+    installationId: plan.installationId,
+    actorLogin: plan.actorLogin,
+    publicationAttemptId: plan.publicationAttemptId,
+    publicationRefId: plan.publicationRefId,
+    documentId: plan.documentId,
+    revisionId: plan.revisionId,
+    targetPath: plan.targetPath,
+    prNumber: plan.prNumber,
+    expectedHeadSha: plan.expectedHeadSha,
+    expectedBaseSha: plan.expectedBaseSha,
+    expectedHeadRef: plan.expectedHeadRef,
+    expectedBaseRef: plan.expectedBaseRef,
+    publicationBranch: plan.publicationBranch,
+  };
+  // Historical merge plans omit effectProviderMode — keep payload identical so D6
+  // fingerprints remain stable until a new prepare freezes the mode.
+  if (plan.effectProviderMode === "REAL" || plan.effectProviderMode === "SCRIPTED") {
+    payload.effectProviderMode = plan.effectProviderMode;
+  }
+  return createHash("sha256").update(canonical(payload)).digest("hex");
 }
 
 /** Simple unified diff for documentary inspection (not a Git patch applicator). */
diff --git a/projects/sfia-studio-next/web/src/domains/execution/types.ts b/projects/sfia-studio-next/web/src/domains/execution/types.ts
index 686470f7..cd7ab77a 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/types.ts
@@ -102,4 +102,9 @@ export type MergePlan = {
   expectedHeadRef: string;
   expectedBaseRef: string;
   publicationBranch: string;
+  /**
+   * Effect provider mode frozen at prepare (REAL|SCRIPTED).
+   * Historical plans may omit → UNKNOWN provenance on reconcile (ML4-REC-01 parity).
+   */
+  effectProviderMode?: "REAL" | "SCRIPTED";
 };
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
index 67607b5e..0dd27d22 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
@@ -1264,6 +1264,31 @@ export async function mergePullRequestRemote(input: {
     throw new StudioError("CONFLICT", "Base de PR périmée avant merge", { httpStatus: 409 });
   }
 
+  // Eligibility is observational — mergeable=true is never a D6/D7 mandate.
+  // Refuse when GitHub reports blocked/dirty/false, or when eligibility is not yet demonstrated.
+  const mergeableState = (current.mergeableState ?? "").toLowerCase();
+  if (current.mergeable === false || mergeableState === "dirty" || mergeableState === "blocked") {
+    throw new StudioError(
+      "ACCESS_DENIED",
+      `Fusion refusée — éligibilité GitHub insuffisante (mergeable=${String(current.mergeable)}, state=${current.mergeableState ?? "null"})`,
+      { httpStatus: 403 },
+    );
+  }
+  if (current.mergeable !== true || mergeableState === "unstable" || mergeableState === "unknown" || !mergeableState) {
+    throw new StudioError(
+      "ACCESS_DENIED",
+      `Fusion refusée — éligibilité GitHub non démontrée (mergeable=${String(current.mergeable)}, state=${current.mergeableState ?? "null"}) ; mergeable=true ≠ autorisation`,
+      { httpStatus: 403 },
+    );
+  }
+  if (mergeableState !== "clean") {
+    throw new StudioError(
+      "ACCESS_DENIED",
+      `Fusion refusée — mergeable_state=${mergeableState} (attendu clean)`,
+      { httpStatus: 403 },
+    );
+  }
+
   const raw = await ghJson<{
     merged?: boolean;
     sha?: string;
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
index 7c2ff16a..bf292bc9 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
@@ -245,7 +245,8 @@ function realAppReadConfigured(): boolean {
  * Default SCRIPTED.
  * REAL only when STUDIO_GITHUB_PROVIDER=real AND App read credentials are present.
  * Product user paths must not set STUDIO_GITHUB_PROVIDER=real before D1/user-auth gates.
- * REAL mutations require STUDIO_GITHUB_ALLOW_MUTATIONS=documentary exactly (merge always blocked).
+ * REAL mutations (branch/file/PR/merge) require STUDIO_GITHUB_ALLOW_MUTATIONS=documentary exactly.
+ * Merge uses the same documentary gate + WRITE allowlist + D6/D7 SHA gates — not a separate hard-block.
  * The flag is an operator env gate only — never a substitute for D6/D7 authority.
  */
 /**
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
index 0e9d84ea..c78ce0d2 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
@@ -497,6 +497,9 @@ class ScriptedGitHubProvider implements GitHubProvider {
       headRef: input.head,
       baseRef: input.base,
       htmlUrl: `https://github.scripted/${input.fullName}/pull/${s.nextPr - 1}`,
+      mergeable: true,
+      mergeableState: "clean",
+      mergeCommitSha: null,
       publicationMarker: marker,
       body,
     };
@@ -553,10 +556,20 @@ class ScriptedGitHubProvider implements GitHubProvider {
     if (input.expectedBaseSha != null && pr.baseSha !== input.expectedBaseSha) {
       throw Object.assign(new Error("PR_BASE_STALE"), { code: "CONFLICT" });
     }
-    s.branches[pr.baseRef] = pr.headSha;
-    s.branches.main = pr.headSha;
+    if (pr.mergeable === false || pr.mergeableState === "dirty" || pr.mergeableState === "blocked") {
+      throw Object.assign(new Error("PR_NOT_MERGEABLE"), { code: "ACCESS_DENIED" });
+    }
+    // Synthetic merge commit — never reuse source HEAD as merge SHA (P0-02 fidelity).
+    const mergeSha = createHash("sha1")
+      .update(`scripted-merge:${input.fullName}:${input.prNumber}:${pr.headSha}:${pr.baseSha}`)
+      .digest("hex");
+    s.branches[pr.baseRef] = mergeSha;
+    if (pr.baseRef !== "main") s.branches.main = mergeSha;
     pr.state = "merged";
-    const result = { merged: true, sha: pr.headSha };
+    pr.mergeCommitSha = mergeSha;
+    pr.mergeable = null;
+    pr.mergeableState = null;
+    const result = { merged: true, sha: mergeSha };
     if (ScriptedFaultRegistry.current(input.pilotId, input.fullName) === "timeout_after_merge") {
       const err = new Error("SCRIPTED_TIMEOUT_AFTER_MERGE") as Error & {
         code: string;
diff --git a/projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts b/projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts
new file mode 100644
index 00000000..2acc6a11
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts
@@ -0,0 +1,243 @@
+/**
+ * MERGE-01..12 — deterministic documentary merge contract (no GitHub REAL mutation).
+ * Complements PG integration suites; focuses on fingerprint/mode/SHA/eligibility gates.
+ */
+import { afterEach, describe, expect, it } from "vitest";
+import { mergeEffectFingerprint } from "@/domains/execution/fingerprint";
+import type { MergePlan } from "@/domains/execution/types";
+import { qualifyPlanEffectProviderMode } from "@/domains/execution/publication-steps";
+import { mergePullRequestRemote } from "@/domains/integrations/github-app-auth";
+import {
+  getScriptedGitHubProvider,
+  resetScriptedStore,
+} from "@/domains/integrations/scripted-github-provider";
+import { isStudioError } from "@/lib/http-errors";
+import {
+  userStatementRequestsMergeOnly,
+} from "@/domains/conversation/conversation-publication-mandate-guards";
+import {
+  userStatementHasOpenMergeCondition,
+  userStatementRefusesMerge,
+  userStatementRequestsPositiveMerge,
+} from "@/domains/conversation/conversation-merge-authority";
+
+const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
+const BASE = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
+const MERGE = "cccccccccccccccccccccccccccccccccccccccc";
+
+function sampleMergePlan(over: Partial<MergePlan> = {}): MergePlan {
+  return {
+    repositoryId: "r1",
+    repositoryFullName: "acme/docs",
+    authorizationId: "a1",
+    installationId: "i1",
+    actorLogin: "pilot",
+    publicationAttemptId: "efx_pub",
+    publicationRefId: "dpr1",
+    documentId: "doc1",
+    revisionId: "rev1",
+    targetPath: "docs/a.md",
+    prNumber: 21,
+    expectedHeadSha: HEAD,
+    expectedBaseSha: BASE,
+    expectedHeadRef: "studio/pub-21",
+    expectedBaseRef: "main",
+    publicationBranch: "studio/pub-21",
+    effectProviderMode: "SCRIPTED",
+    ...over,
+  };
+}
+
+function jsonResponse(status: number, body: unknown) {
+  return new Response(JSON.stringify(body), {
+    status,
+    headers: { "Content-Type": "application/json" },
+  });
+}
+
+describe("MERGE documentary contract (unit)", () => {
+  afterEach(() => {
+    resetScriptedStore();
+  });
+
+  it("MERGE-01 fingerprint binds publication provenance + PR", () => {
+    const fp = mergeEffectFingerprint(sampleMergePlan());
+    expect(fp).toHaveLength(64);
+    expect(mergeEffectFingerprint(sampleMergePlan({ publicationAttemptId: "other" }))).not.toBe(fp);
+    expect(mergeEffectFingerprint(sampleMergePlan({ prNumber: 99 }))).not.toBe(fp);
+  });
+
+  it("MERGE-02 mandate fingerprint includes frozen provider mode when set", () => {
+    const without = sampleMergePlan();
+    delete without.effectProviderMode;
+    const withMode = sampleMergePlan({ effectProviderMode: "SCRIPTED" });
+    expect(mergeEffectFingerprint(without)).not.toBe(mergeEffectFingerprint(withMode));
+    expect(qualifyPlanEffectProviderMode(without)).toBe("UNKNOWN");
+    expect(qualifyPlanEffectProviderMode(withMode)).toBe("SCRIPTED");
+  });
+
+  it("MERGE-03/11 publish≠merge lexical guards", () => {
+    expect(userStatementRequestsMergeOnly("Fusionne la PR #21")).toBe(true);
+    expect(userStatementRequestsPositiveMerge("Fusionne la PR documentaire #21")).toBe(true);
+    expect(userStatementRequestsMergeOnly("Publie ce document sur GitHub")).toBe(false);
+    expect(userStatementRefusesMerge("Ne fusionne pas")).toBe(true);
+    expect(userStatementHasOpenMergeCondition("Fusionne uniquement après validation")).toBe(true);
+  });
+
+  it("MERGE-05 HEAD drift refuses before PUT", async () => {
+    const fetchImpl = async () =>
+      jsonResponse(200, {
+        number: 21,
+        title: "doc",
+        state: "open",
+        html_url: "https://github.com/o/r/pull/21",
+        merged: false,
+        mergeable: true,
+        mergeable_state: "clean",
+        head: { sha: MERGE, ref: "studio/pub-21" },
+        base: { sha: BASE, ref: "main" },
+      });
+    await expect(
+      mergePullRequestRemote({
+        token: "t",
+        fullName: "o/r",
+        prNumber: 21,
+        expectedHeadSha: HEAD,
+        fetchImpl: fetchImpl as unknown as typeof fetch,
+      }),
+    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "CONFLICT");
+  });
+
+  it("MERGE-06 BASE drift refuses before PUT", async () => {
+    const fetchImpl = async () =>
+      jsonResponse(200, {
+        number: 21,
+        title: "doc",
+        state: "open",
+        html_url: "https://github.com/o/r/pull/21",
+        merged: false,
+        mergeable: true,
+        mergeable_state: "clean",
+        head: { sha: HEAD, ref: "studio/pub-21" },
+        base: { sha: MERGE, ref: "main" },
+      });
+    await expect(
+      mergePullRequestRemote({
+        token: "t",
+        fullName: "o/r",
+        prNumber: 21,
+        expectedHeadSha: HEAD,
+        expectedBaseSha: BASE,
+        fetchImpl: fetchImpl as unknown as typeof fetch,
+      }),
+    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "CONFLICT");
+  });
+
+  it("MERGE-07 permissions/rules refuse when not clean", async () => {
+    const fetchImpl = async () =>
+      jsonResponse(200, {
+        number: 21,
+        title: "doc",
+        state: "open",
+        html_url: "https://github.com/o/r/pull/21",
+        merged: false,
+        mergeable: true,
+        mergeable_state: "blocked",
+        head: { sha: HEAD, ref: "studio/pub-21" },
+        base: { sha: BASE, ref: "main" },
+      });
+    await expect(
+      mergePullRequestRemote({
+        token: "t",
+        fullName: "o/r",
+        prNumber: 21,
+        expectedHeadSha: HEAD,
+        fetchImpl: fetchImpl as unknown as typeof fetch,
+      }),
+    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED");
+  });
+
+  it("MERGE-08 scripted success returns distinct merge commit SHA", async () => {
+    const provider = getScriptedGitHubProvider();
+    const pilotId = "pilot-merge-08";
+    const fullName = "acme/docs";
+    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
+    await provider.createBranch(pilotId, fullName, "studio/pub-21", mainSha);
+    await provider.putFileContents({
+      pilotId,
+      fullName,
+      path: "docs/a.md",
+      branch: "studio/pub-21",
+      message: "doc",
+      content: "# a\n",
+    });
+    const pr = await provider.createPullRequest({
+      pilotId,
+      fullName,
+      title: "doc",
+      head: "studio/pub-21",
+      base: "main",
+      publicationMarker: "mk-21",
+    });
+    const merged = await provider.mergePullRequest({
+      pilotId,
+      fullName,
+      prNumber: pr.number,
+      expectedHeadSha: pr.headSha,
+      expectedBaseSha: pr.baseSha,
+    });
+    expect(merged.merged).toBe(true);
+    expect(merged.sha).toMatch(/^[0-9a-f]{40}$/);
+    expect(merged.sha).not.toBe(pr.headSha);
+    const after = await provider.getPullRequest(pilotId, fullName, pr.number);
+    expect(after.state).toBe("merged");
+    expect(after.mergeCommitSha).toBe(merged.sha);
+  });
+
+  it("MERGE-09/10 already-merged returns merge_commit_sha without second PUT", async () => {
+    let puts = 0;
+    const fetchImpl = async (_input: RequestInfo | URL, init?: RequestInit) => {
+      const method = (init?.method ?? "GET").toUpperCase();
+      if (method === "PUT") {
+        puts += 1;
+        return jsonResponse(500, { message: "no second merge" });
+      }
+      return jsonResponse(200, {
+        number: 21,
+        title: "doc",
+        state: "closed",
+        html_url: "https://github.com/o/r/pull/21",
+        merged: true,
+        merge_commit_sha: MERGE,
+        head: { sha: HEAD, ref: "studio/pub-21" },
+        base: { sha: BASE, ref: "main" },
+      });
+    };
+    const first = await mergePullRequestRemote({
+      token: "t",
+      fullName: "o/r",
+      prNumber: 21,
+      expectedHeadSha: HEAD,
+      fetchImpl: fetchImpl as unknown as typeof fetch,
+    });
+    const second = await mergePullRequestRemote({
+      token: "t",
+      fullName: "o/r",
+      prNumber: 21,
+      expectedHeadSha: HEAD,
+      fetchImpl: fetchImpl as unknown as typeof fetch,
+    });
+    expect(first.sha).toBe(MERGE);
+    expect(second.sha).toBe(MERGE);
+    expect(puts).toBe(0);
+  });
+
+  it("MERGE-12 fingerprint stability without inventing REAL mode", () => {
+    const historical = sampleMergePlan();
+    delete historical.effectProviderMode;
+    expect(qualifyPlanEffectProviderMode(historical)).toBe("UNKNOWN");
+    expect(qualifyPlanEffectProviderMode(sampleMergePlan({ effectProviderMode: "REAL" }))).toBe(
+      "REAL",
+    );
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/merge-pull-request-sha.test.ts b/projects/sfia-studio-next/web/tests/unit/merge-pull-request-sha.test.ts
index 61ee17c6..15954b69 100644
--- a/projects/sfia-studio-next/web/tests/unit/merge-pull-request-sha.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/merge-pull-request-sha.test.ts
@@ -113,6 +113,8 @@ describe("P0-02 mergePullRequestRemote SHA proof", () => {
           state: "open",
           html_url: "https://github.com/o/r/pull/10",
           merged: false,
+          mergeable: true,
+          mergeable_state: "clean",
           head: { sha: HEAD, ref: "studio/pub" },
           base: { sha: OTHER, ref: "main" },
         });
@@ -134,6 +136,86 @@ describe("P0-02 mergePullRequestRemote SHA proof", () => {
     expect(result.sha).toBe(MERGE);
   });
 
+  it("ACCESS_DENIED when mergeable=false (eligibility not demonstrated)", async () => {
+    const fetchImpl = vi.fn(async () =>
+      jsonResponse(200, {
+        number: 13,
+        title: "doc",
+        state: "open",
+        html_url: "https://github.com/o/r/pull/13",
+        merged: false,
+        mergeable: false,
+        mergeable_state: "dirty",
+        head: { sha: HEAD, ref: "studio/pub" },
+        base: { sha: OTHER, ref: "main" },
+      }),
+    );
+
+    await expect(
+      mergePullRequestRemote({
+        token: "t",
+        fullName: "o/r",
+        prNumber: 13,
+        expectedHeadSha: HEAD,
+        fetchImpl: fetchImpl as unknown as typeof fetch,
+      }),
+    ).rejects.toSatisfy(
+      (e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED" && /éligibilité/i.test(e.message),
+    );
+  });
+
+  it("ACCESS_DENIED when mergeable_state=blocked", async () => {
+    const fetchImpl = vi.fn(async () =>
+      jsonResponse(200, {
+        number: 14,
+        title: "doc",
+        state: "open",
+        html_url: "https://github.com/o/r/pull/14",
+        merged: false,
+        mergeable: true,
+        mergeable_state: "blocked",
+        head: { sha: HEAD, ref: "studio/pub" },
+        base: { sha: OTHER, ref: "main" },
+      }),
+    );
+
+    await expect(
+      mergePullRequestRemote({
+        token: "t",
+        fullName: "o/r",
+        prNumber: 14,
+        expectedHeadSha: HEAD,
+        fetchImpl: fetchImpl as unknown as typeof fetch,
+      }),
+    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED");
+  });
+
+  it("ACCESS_DENIED when eligibility not yet demonstrated (mergeable null)", async () => {
+    const fetchImpl = vi.fn(async () =>
+      jsonResponse(200, {
+        number: 15,
+        title: "doc",
+        state: "open",
+        html_url: "https://github.com/o/r/pull/15",
+        merged: false,
+        mergeable: null,
+        mergeable_state: null,
+        head: { sha: HEAD, ref: "studio/pub" },
+        base: { sha: OTHER, ref: "main" },
+      }),
+    );
+
+    await expect(
+      mergePullRequestRemote({
+        token: "t",
+        fullName: "o/r",
+        prNumber: 15,
+        expectedHeadSha: HEAD,
+        fetchImpl: fetchImpl as unknown as typeof fetch,
+      }),
+    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED");
+  });
+
   it("CONFLICT on HEAD drift before merge", async () => {
     const fetchImpl = vi.fn(async () =>
       jsonResponse(200, {
@@ -142,6 +224,8 @@ describe("P0-02 mergePullRequestRemote SHA proof", () => {
         state: "open",
         html_url: "https://github.com/o/r/pull/11",
         merged: false,
+        mergeable: true,
+        mergeable_state: "clean",
         head: { sha: OTHER, ref: "studio/pub" },
         base: { sha: HEAD, ref: "main" },
       }),
```

## 8. Tests

Env: STUDIO_GITHUB_PROVIDER=scripted, STUDIO_ALLOW_SCRIPTED_GITHUB=1, DB e2e :5433 (jamais RECETTE :5434).

| Suite | Résultat |
| --- | --- |
| documentary-merge-contract | 9 PASS |
| merge-pull-request-sha | 9 PASS |
| conversation-merge-authority | 12 PASS |
| unit merge-related bundle (8 files) | 53 PASS |
| conversation-merge-security.pg | 5 PASS |
| git-collaboration B3/T20/AT-14 slice | 21 PASS |
| tsc --noEmit | PASS |

## 9. Non-régression

- git-preview 7 PASS · scripted-repo-isolation 3 PASS
- Publication ≠ merge conservé
- RECETTE HTTP <!--_U3Z92BCd0K__hiMvgTP9--> inchangé

## 10. Sécurité / autorité

- D6 GIT_MERGE_MANDATE distinct
- User OAuth pour merge REAL (pas installation admin)
- Pas de force-merge / bypass
- mergeable=true ≠ autorisation (state clean requis)
- Déjà mergé: merge_commit_sha, zéro second PUT

## 11. SCRIPTED vs REAL

| Niveau | Statut |
| --- | --- |
| SCRIPTED / mock API | PROVEN |
| Interface REAL mergePullRequestRemote | PROVEN (fetch mock) |
| Mutation GitHub REAL | **NOT EXERCISED / NOT PROVEN** |
| RECETTE cutover | **NONE** |

## 12. RECETTE

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| SOURCE servi | 98118de073e9df5f2446592a281060ddb64369fe |
| BUILD | _U3Z92BCd0K_-hiMvgTP9 |
| Service | com.sfia.studio.next.recette.ml4d-ux004 |
| Modification | **NONE** |

## 13. Réserves

1. Aucune fusion REAL sandbox exécutée — gate Morris distinct après cutover.
2. Protections/rulesets non exposées — refus si éligibilité non démontrée.
3. Panel merge UI hors A8 Nora-only — non retiré ce lot.
4. Nouveau candidat local a087051a569a0bd6eaab935d674ac567ecfa6400 — ne remplace pas automatiquement RECETTE.

## 14. SOURCE_SHA / TREE candidat

- SOURCE_SHA : a087051a569a0bd6eaab935d674ac567ecfa6400
- TREE : 7274dcc085d59e7332e9947c4931a95a0de5439a

## 15. Verdict

**DEVELOPMENT COMPLETE WITH RESERVES — REAL MERGE NOT YET PROVEN**

## 16. Décision Morris suivante

Après validation ChatGPT : GO cutover RECETTE du nouveau candidat, puis autorisation explicite d'une fusion documentaire sandbox (PR précisément identifiée). Ne pas déclarer E08 reçu / STABLE / RELEASE / ADOPTED.

