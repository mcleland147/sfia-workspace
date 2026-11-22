# SFIA Review Pack FULL — E08 Documentary REAL Merge CORRECTED

## 1. Date / heure

| Champ | Valeur |
| --- | --- |
| Europe/Paris | 2026-11-22 13:03:44 UTC+01:00 |
| UTC | 2026-11-22 12:03:44 UTC |
| Mandat | Correction revue ChatGPT — merge documentaire REAL |
| Classe | **NO RELEASE** · STABLE **NOT AVAILABLE** |

## 2. Git Truth initial / final

| Champ | Initial | Final |
| --- | --- | --- |
| Branche | feat/next-ensemble08-git-publications-nora | idem |
| HEAD | a087051a569a0bd6eaab935d674ac567ecfa6400 | 10128bdb6bb1020a0fd8d4976b91879bff26c3b3 |
| TREE | 7274dcc085d59e7332e9947c4931a95a0de5439a | be778f1bf461f15acf94bfed6879d43fa6256a0d |
| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 | inchangé |
| Push projet | — | **NONE** |

RECETTE protégée inchangée : 98118de0 / _U3Z92BCd0K_-hiMvgTP9 / :3200 / ml4d-ux004.
Handoff précédent relu : 430a1698ae7e992cdf16423937663452c8bb430d.

## 3. Diagnostic des écarts

| Correction | Écart | Remède |
| --- | --- | --- |
| C1 | dispatchMerge n'exigeait pas un mode historique prouvé | Fail-closed UNKNOWN/mismatch avant autorité/provider |
| C2 | reconcile sans provenance complète ; headSha écrasé par merge SHA | Gates dépôt/PR/refs/source HEAD/mergeCommitSha/publication ; headSha source préservé ; mergeCommitSha en detailJson |
| C3 | SCRIPTED avançait main même si base=release | Avance uniquement baseRef |

## 4. Fichiers

```
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
M	projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
M	projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
A	projects/sfia-studio-next/web/tests/integration/documentary-merge-corrections.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts
```

## 5. Diff commit (10128bdb6bb1)

```diff
commit 10128bdb6bb1020a0fd8d4976b91879bff26c3b3
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 13:03:02 2026 +0100

    fix(e08): harden documentary merge mode and reconcile provenance
    
    Fail-closed on unknown provider mode, require plan/remote provenance
    before attributing merges, and advance only the scripted target branch.
---
 .../construction/delivery-history.md               |  15 +
 .../ensemble-08-git-et-publications/as-built.md    |   9 +
 .../web/src/domains/execution/effect-service.ts    | 144 ++++++--
 .../integrations/scripted-github-provider.ts       |   2 +-
 .../documentary-merge-corrections.pg.test.ts       | 397 +++++++++++++++++++++
 .../tests/unit/documentary-merge-contract.test.ts  |  76 ++++
 6 files changed, 620 insertions(+), 23 deletions(-)

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 8db81465..9bb696a6 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,21 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-CORRECTED
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 13:02 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — correction revue merge documentaire REAL (DEV) |
+| Type | EVOL · CRITICAL · **NO RELEASE** |
+| Base candidat | `a087051a` / `7274dcc0` |
+| Fix | fail-closed mode UNKNOWN · reconcile provenance · D8 headSha source préservé · SCRIPTED cible seule |
+| Preuves | PG documentary-merge-corrections **8/8** · conversation-merge-security **5/5** · unit contract/sha/authority/preview · tsc PASS |
+| RECETTE | **INCHANGÉE** `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` |
+| Mutation GitHub REAL | **NONE** — **NOT PROVEN** |
+| Push projet | **NONE** |
+| Verdict | **READY FOR CHATGPT REVIEW — E08 DOCUMENTARY REAL MERGE CORRECTED** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 4e38df20..815d1a6e 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -191,3 +191,12 @@
 - **Preuves** : unit MERGE contract + merge SHA + merge authority ; PG `conversation-merge-security` ; slice `git-collaboration` B3/T20 ; `tsc` PASS.
 - **Hors cycle** : aucune fusion GitHub REAL exécutée ; RECETTE `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` **inchangée**.
 - **Niveau** : chemin REAL **implémenté / testé (SCRIPTED + interface mockée)** — **MERGE REAL NOT PROVEN**.
+
+### Correction revue — merge documentaire (DEV — 2026-11-22)
+
+1. **Fail-closed mode** : `dispatchMerge` exige un `effectProviderMode` historique explicite (REAL|SCRIPTED) égal au live **avant** toute autorité/provider ; UNKNOWN/absent → `REQUIRES_REQUALIFICATION` (zéro mutation).
+2. **Reconcile provenance** : attribution COMPLETED seulement si dépôt/PR/headRef/baseRef/source HEAD/`mergeCommitSha` + publication associée concordent ; base SHA cible non exigée post-fusion ; pas de succès inventé.
+3. **D8 headSha** : conserve le HEAD source de publication ; `mergeCommitSha` dans `detailJson` + fait MERGE (pas de substitution silencieuse).
+4. **SCRIPTED** : avance uniquement la branche cible (`baseRef`) — merge vers `release` ne touche pas `main`.
+5. **Preuves** : PG `documentary-merge-corrections` 8/8 · unit contract C3 · suites merge/preview ciblées · `tsc` PASS · RECETTE inchangée.
+6. **MERGE REAL** : toujours **NOT PROVEN**.
diff --git a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
index 01fc8973..ec704d23 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
@@ -2042,6 +2042,31 @@ export async function dispatchMerge(input: {
   const claimToken = claimed.claim.claimToken;
   const plan = JSON.parse(row.planJson) as MergePlan;
 
+  // Fail-closed BEFORE authority / provider calls: historical mode must be explicit + match live.
+  // UNKNOWN / absent → REQUIRES_REQUALIFICATION with zero mutative GitHub calls.
+  const liveEffectMode = resolveConfiguredEffectProviderMode();
+  const historicalMode = qualifyPlanEffectProviderMode(plan);
+  if (
+    historicalMode === "UNKNOWN" ||
+    (historicalMode !== "REAL" && historicalMode !== "SCRIPTED") ||
+    historicalMode !== liveEffectMode
+  ) {
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
+      historicalMode === "UNKNOWN"
+        ? "Mode fournisseur historique UNKNOWN — requalification obligatoire avant merge"
+        : `Mode fournisseur d'effet divergé (plan=${historicalMode}, live=${liveEffectMode})`,
+    );
+  }
+
   const mergeAuthCtx: AuthorityCtx = {
     pilotId: input.pilotId,
     projectId: input.projectId,
@@ -2087,22 +2112,6 @@ export async function dispatchMerge(input: {
     throw new StudioError("REQUIRES_REQUALIFICATION", "Provenance publication incohérente");
   }
 
-  const liveEffectMode = resolveConfiguredEffectProviderMode();
-  if (plan.effectProviderMode && plan.effectProviderMode !== liveEffectMode) {
-    const released = releaseClaim(readClaim(resultJson));
-    await casOwnedTransition({
-      attemptId: row.id,
-      claimToken,
-      fromStatus: "DISPATCHED",
-      toStatus: "REQUIRES_REQUALIFICATION",
-      resultJson: writeClaimInto(resultJson, released),
-    });
-    throw new StudioError(
-      "REQUIRES_REQUALIFICATION",
-      `Mode fournisseur d'effet divergé (plan=${plan.effectProviderMode}, live=${liveEffectMode})`,
-    );
-  }
-
   const provider = resolveGitHubProvider();
   try {
     await ExecutionBarrierRegistry.before("before:MERGE");
@@ -2171,11 +2180,31 @@ export async function dispatchMerge(input: {
       refName: pr.baseRef,
       sha: merged.sha,
       prNumber: plan.prNumber,
-      detail: { merged: merged.merged, publicationRefId: plan.publicationRefId },
+      detail: {
+        merged: merged.merged,
+        publicationRefId: plan.publicationRefId,
+        sourceHeadSha: plan.expectedHeadSha,
+        mergeCommitSha: merged.sha,
+      },
     });
+    // D8: keep headSha as the publication source HEAD; merge commit lives in detail + MERGE fact.
+    let nextDetail: Record<string, unknown> = {};
+    try {
+      nextDetail = JSON.parse(pubRef.detailJson || "{}") as Record<string, unknown>;
+    } catch {
+      nextDetail = {};
+    }
+    nextDetail.prCurrentState = "MERGED";
+    nextDetail.mergeCommitSha = merged.sha;
+    nextDetail.sourceHeadSha = pubRef.headSha ?? plan.expectedHeadSha;
     await db
       .update(documentPublicationRefs)
-      .set({ status: "MERGED", headSha: merged.sha, updatedAt: new Date() })
+      .set({
+        status: "MERGED",
+        headSha: pubRef.headSha ?? plan.expectedHeadSha,
+        detailJson: JSON.stringify(nextDetail),
+        updatedAt: new Date(),
+      })
       .where(eq(documentPublicationRefs.id, plan.publicationRefId));
     const released = releaseClaim(readClaim(resultJson));
     const ok = await casOwnedTransition({
@@ -2183,7 +2212,12 @@ export async function dispatchMerge(input: {
       claimToken,
       fromStatus: "DISPATCHED",
       toStatus: "COMPLETED",
-      resultJson: JSON.stringify({ merged: true, sha: merged.sha, claim: released }),
+      resultJson: JSON.stringify({
+        merged: true,
+        sha: merged.sha,
+        sourceHeadSha: plan.expectedHeadSha,
+        claim: released,
+      }),
     });
     if (!ok) {
       throw new StudioError("CONFLICT", "Complétion merge refusée — fencing SQL");
@@ -2802,11 +2836,19 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
     try {
       const pr = await provider.getPullRequest(pilotId, plan.repositoryFullName, plan.prNumber);
       if (pr.state === "merged" && (row.status === "AMBIGUOUS" || row.status === "DISPATCHED")) {
-        // P0-02 — never present source HEAD as the merge commit SHA.
+        // Provenance gate — attribute only when remote PR matches the frozen merge plan.
+        // Target base SHA may advance after merge; do not require expectedBaseSha equality.
         const mergeSha =
           typeof pr.mergeCommitSha === "string" && /^[0-9a-f]{40}$/i.test(pr.mergeCommitSha)
             ? pr.mergeCommitSha
             : null;
+        const provenanceOk =
+          pr.number === plan.prNumber &&
+          pr.headRef === plan.expectedHeadRef &&
+          pr.baseRef === plan.expectedBaseRef &&
+          pr.headSha.toLowerCase() === plan.expectedHeadSha.toLowerCase() &&
+          Boolean(mergeSha) &&
+          mergeSha!.toLowerCase() !== plan.expectedHeadSha.toLowerCase();
         if (!mergeSha) {
           return {
             attemptId,
@@ -2817,6 +2859,41 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
             note: "PR mergée — merge_commit_sha absent ; COMPLETED non inventé",
           };
         }
+        if (!provenanceOk) {
+          return {
+            attemptId,
+            status: row.status,
+            prState: pr.state,
+            prCurrentState: mapPrState(pr.state),
+            facts,
+            note: "PR mergée — provenance plan/distante insuffisante ou contradictoire ; succès non attribué",
+          };
+        }
+
+        const pubRef = (
+          await db
+            .select()
+            .from(documentPublicationRefs)
+            .where(eq(documentPublicationRefs.id, plan.publicationRefId))
+            .limit(1)
+        )[0];
+        if (
+          !pubRef ||
+          pubRef.projectId !== projectId ||
+          pubRef.pilotId !== pilotId ||
+          pubRef.prNumber !== plan.prNumber ||
+          pubRef.effectAttemptId !== plan.publicationAttemptId
+        ) {
+          return {
+            attemptId,
+            status: row.status,
+            prState: pr.state,
+            prCurrentState: mapPrState(pr.state),
+            facts,
+            note: "PR mergée — publication documentaire associée incohérente ; succès non attribué",
+          };
+        }
+
         const released = releaseClaim(claim);
         const cas = await casLiberateInactiveDispatch({
           attemptId: row.id,
@@ -2825,14 +2902,30 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
           resultJson: JSON.stringify({
             merged: true,
             sha: mergeSha,
+            sourceHeadSha: plan.expectedHeadSha,
             reconciled: true,
             claim: released,
           }),
         });
         if (cas) {
+          let nextDetail: Record<string, unknown> = {};
+          try {
+            nextDetail = JSON.parse(pubRef.detailJson || "{}") as Record<string, unknown>;
+          } catch {
+            nextDetail = {};
+          }
+          nextDetail.prCurrentState = "MERGED";
+          nextDetail.mergeCommitSha = mergeSha;
+          nextDetail.sourceHeadSha = pubRef.headSha ?? plan.expectedHeadSha;
           await db
             .update(documentPublicationRefs)
-            .set({ status: "MERGED", headSha: mergeSha, updatedAt: new Date() })
+            .set({
+              status: "MERGED",
+              // Preserve publication source HEAD — merge commit is in detail + MERGE fact.
+              headSha: pubRef.headSha ?? plan.expectedHeadSha,
+              detailJson: JSON.stringify(nextDetail),
+              updatedAt: new Date(),
+            })
             .where(eq(documentPublicationRefs.id, plan.publicationRefId));
           const hasMergeFact = facts.some((f) => f.factKind === "MERGE");
           if (!hasMergeFact) {
@@ -2845,7 +2938,13 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
               refName: plan.expectedBaseRef,
               sha: mergeSha,
               prNumber: plan.prNumber,
-              detail: { merged: true, reconciled: true, publicationRefId: plan.publicationRefId },
+              detail: {
+                merged: true,
+                reconciled: true,
+                publicationRefId: plan.publicationRefId,
+                sourceHeadSha: plan.expectedHeadSha,
+                mergeCommitSha: mergeSha,
+              },
             });
           }
         }
@@ -2855,6 +2954,7 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
           prState: pr.state,
           facts,
           mergeSha,
+          sourceHeadSha: plan.expectedHeadSha,
         };
       }
       return {
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
index c78ce0d2..a9f81bc4 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
@@ -563,8 +563,8 @@ class ScriptedGitHubProvider implements GitHubProvider {
     const mergeSha = createHash("sha1")
       .update(`scripted-merge:${input.fullName}:${input.prNumber}:${pr.headSha}:${pr.baseSha}`)
       .digest("hex");
+    // Advance only the PR target branch — never an unrelated default branch.
     s.branches[pr.baseRef] = mergeSha;
-    if (pr.baseRef !== "main") s.branches.main = mergeSha;
     pr.state = "merged";
     pr.mergeCommitSha = mergeSha;
     pr.mergeable = null;
diff --git a/projects/sfia-studio-next/web/tests/integration/documentary-merge-corrections.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/documentary-merge-corrections.pg.test.ts
new file mode 100644
index 00000000..042e160e
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/documentary-merge-corrections.pg.test.ts
@@ -0,0 +1,397 @@
+/**
+ * Review corrections — documentary merge fail-closed mode + reconcile provenance.
+ * SCRIPTED only. Zero GitHub REAL mutations. Mutative PG → sfia_next_e2e only.
+ */
+import { afterEach, beforeAll, describe, expect, it } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+import { and, eq } from "drizzle-orm";
+import { db } from "@/db/client";
+import {
+  documentPublicationRefs,
+  documentRevisions,
+  effectAttempts,
+  observedGitFacts,
+  pilots,
+  preparations,
+} from "@/db/schema";
+import { newId } from "@/lib/ids";
+import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
+import { createProjectCommand } from "@/domains/preparation/create-project";
+import {
+  completeGitHubAuthorization,
+  startGitHubAuthorization,
+} from "@/domains/integrations/authorization-service";
+import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
+import {
+  getScriptedGitHubProvider,
+  getScriptedMutationCounts,
+  resetScriptedMutationCounts,
+  resetScriptedStore,
+} from "@/domains/integrations/scripted-github-provider";
+import {
+  authorizeMerge,
+  authorizePublication,
+  dispatchMerge,
+  dispatchPublication,
+  prepareMerge,
+  preparePublication,
+  reconcileAttempt,
+} from "@/domains/execution/effect-service";
+import type { MergePlan, PublicationPlan } from "@/domains/execution/types";
+import { savePreparationDocument } from "@/domains/document/service";
+import { isStudioError } from "@/lib/http-errors";
+
+async function seedProject(label: string) {
+  resetScriptedStore();
+  process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+  process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
+  delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
+  const pilotId = newId("pilot");
+  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
+  const prep = await openOrCreatePreparation(pilotId);
+  await updatePreview(pilotId, prep.id, label, "s");
+  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
+  const created = await createProjectCommand({
+    pilotId,
+    preparationId: prep.id,
+    expectedCreationRevision: refreshed!.creationRevision,
+    projectName: label,
+    previewSummary: "s",
+    idempotencyKey: newId("idem"),
+  });
+  if (created.status !== "CREATED" || !created.projectId) {
+    throw new Error(`seed failed: ${created.status}`);
+  }
+  const sessionId = newId("sid");
+  const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
+  const status = await completeGitHubAuthorization({
+    pilotId,
+    state,
+    studioSessionId: sessionId,
+  });
+  const repositoryId = status.repositories[0]!.id;
+  await attachRepositoryToProject(pilotId, created.projectId, repositoryId);
+  getScriptedGitHubProvider();
+  return {
+    pilotId,
+    projectId: created.projectId,
+    preparationId: prep.id,
+    repositoryId,
+  };
+}
+
+async function availableDoc(pilotId: string, preparationId: string, title: string) {
+  const saved = await savePreparationDocument(pilotId, preparationId, title, `# ${title}\n`, undefined, {
+    correlationKey: newId("ck"),
+  });
+  expect(saved.status).toBe("AVAILABLE");
+  if (!("documentId" in saved) || !saved.documentId) throw new Error("documentId missing");
+  const rev = (
+    await db
+      .select()
+      .from(documentRevisions)
+      .where(
+        and(eq(documentRevisions.documentId, saved.documentId), eq(documentRevisions.status, "AVAILABLE")),
+      )
+      .limit(1)
+  )[0];
+  if (!rev) throw new Error("AVAILABLE revision missing");
+  return { documentId: saved.documentId, revisionId: rev.id };
+}
+
+async function publishThenPrepareMerge(label: string) {
+  const ctx = await seedProject(label);
+  const doc = await availableDoc(ctx.pilotId, ctx.preparationId, label);
+  const prepared = await preparePublication({
+    pilotId: ctx.pilotId,
+    projectId: ctx.projectId,
+    documentId: doc.documentId,
+    revisionId: doc.revisionId,
+    repositoryId: ctx.repositoryId,
+    targetPath: `docs/${label}.md`,
+    targetBranch: "main",
+    correlationKey: newId("pub"),
+  });
+  const plan =
+    prepared.plan ??
+    (JSON.parse(
+      (
+        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+      )[0]!.planJson,
+    ) as PublicationPlan);
+  await authorizePublication({
+    pilotId: ctx.pilotId,
+    projectId: ctx.projectId,
+    attemptId: prepared.attemptId,
+    statement: "GO pub",
+    inspectedFingerprint: plan.inspection.inspectionFingerprint,
+  });
+  const dispatched = await dispatchPublication({
+    pilotId: ctx.pilotId,
+    projectId: ctx.projectId,
+    attemptId: prepared.attemptId,
+  });
+  expect(dispatched.status).toBe("COMPLETED");
+  const mergePrep = await prepareMerge({
+    pilotId: ctx.pilotId,
+    projectId: ctx.projectId,
+    publicationAttemptId: prepared.attemptId,
+    correlationKey: newId("merge"),
+  });
+  expect(mergePrep.plan?.effectProviderMode).toBe("SCRIPTED");
+  await authorizeMerge({
+    pilotId: ctx.pilotId,
+    projectId: ctx.projectId,
+    attemptId: mergePrep.attemptId,
+    statement: "Je mandate la fusion documentaire",
+  });
+  return { ...ctx, pubAttemptId: prepared.attemptId, mergeAttemptId: mergePrep.attemptId, mergePlan: mergePrep.plan! };
+}
+
+async function forceMergePlanMode(attemptId: string, mode: "REAL" | "SCRIPTED" | null) {
+  const row = (
+    await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
+  )[0]!;
+  const plan = JSON.parse(row.planJson) as MergePlan;
+  if (mode === null) delete plan.effectProviderMode;
+  else plan.effectProviderMode = mode;
+  await db
+    .update(effectAttempts)
+    .set({ planJson: JSON.stringify(plan), updatedAt: new Date() })
+    .where(eq(effectAttempts.id, attemptId));
+  return plan;
+}
+
+describe("documentary merge corrections (PG)", () => {
+  beforeAll(() => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_E2E = "1";
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
+  });
+
+  afterEach(() => {
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
+  });
+
+  it("C1: mode absent/UNKNOWN → REQUIRES_REQUALIFICATION, zero merge mutation", async () => {
+    const ctx = await publishThenPrepareMerge("c1-unknown");
+    await forceMergePlanMode(ctx.mergeAttemptId, null);
+    resetScriptedMutationCounts(ctx.pilotId);
+    await expect(
+      dispatchMerge({
+        pilotId: ctx.pilotId,
+        projectId: ctx.projectId,
+        attemptId: ctx.mergeAttemptId,
+      }),
+    ).rejects.toSatisfy(
+      (e: unknown) =>
+        isStudioError(e) &&
+        e.code === "REQUIRES_REQUALIFICATION" &&
+        /UNKNOWN|requalification/i.test(e.message),
+    );
+    expect(getScriptedMutationCounts(ctx.pilotId).mergePR).toBe(0);
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, ctx.mergeAttemptId)).limit(1)
+    )[0]!;
+    expect(row.status).toBe("REQUIRES_REQUALIFICATION");
+  });
+
+  it("C1: plan SCRIPTED under live REAL → REQUIRES_REQUALIFICATION, zero merge", async () => {
+    const ctx = await publishThenPrepareMerge("c1-scripted-vs-real");
+    await forceMergePlanMode(ctx.mergeAttemptId, "SCRIPTED");
+    process.env.STUDIO_GITHUB_PROVIDER = "real";
+    resetScriptedMutationCounts(ctx.pilotId);
+    await expect(
+      dispatchMerge({
+        pilotId: ctx.pilotId,
+        projectId: ctx.projectId,
+        attemptId: ctx.mergeAttemptId,
+      }),
+    ).rejects.toSatisfy(
+      (e: unknown) => isStudioError(e) && e.code === "REQUIRES_REQUALIFICATION",
+    );
+    expect(getScriptedMutationCounts(ctx.pilotId).mergePR).toBe(0);
+  });
+
+  it("C1: plan REAL under live SCRIPTED → REQUIRES_REQUALIFICATION, zero merge", async () => {
+    const ctx = await publishThenPrepareMerge("c1-real-vs-scripted");
+    await forceMergePlanMode(ctx.mergeAttemptId, "REAL");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    resetScriptedMutationCounts(ctx.pilotId);
+    await expect(
+      dispatchMerge({
+        pilotId: ctx.pilotId,
+        projectId: ctx.projectId,
+        attemptId: ctx.mergeAttemptId,
+      }),
+    ).rejects.toSatisfy(
+      (e: unknown) => isStudioError(e) && e.code === "REQUIRES_REQUALIFICATION",
+    );
+    expect(getScriptedMutationCounts(ctx.pilotId).mergePR).toBe(0);
+  });
+
+  it("C1: plan SCRIPTED under SCRIPTED → dispatch COMPLETED; headSha stays source", async () => {
+    const ctx = await publishThenPrepareMerge("c1-scripted-ok");
+    const beforeRef = (
+      await db
+        .select()
+        .from(documentPublicationRefs)
+        .where(eq(documentPublicationRefs.effectAttemptId, ctx.pubAttemptId))
+        .limit(1)
+    )[0]!;
+    const sourceHead = beforeRef.headSha;
+    expect(sourceHead).toBeTruthy();
+    const merged = await dispatchMerge({
+      pilotId: ctx.pilotId,
+      projectId: ctx.projectId,
+      attemptId: ctx.mergeAttemptId,
+    });
+    expect(merged.status).toBe("COMPLETED");
+    expect(merged.sha).toMatch(/^[0-9a-f]{40}$/i);
+    expect(merged.sha).not.toBe(sourceHead);
+    const afterRef = (
+      await db
+        .select()
+        .from(documentPublicationRefs)
+        .where(eq(documentPublicationRefs.id, beforeRef.id))
+        .limit(1)
+    )[0]!;
+    expect(afterRef.status).toBe("MERGED");
+    expect(afterRef.headSha).toBe(sourceHead);
+    const detail = JSON.parse(afterRef.detailJson || "{}") as {
+      mergeCommitSha?: string;
+      sourceHeadSha?: string;
+    };
+    expect(detail.mergeCommitSha).toBe(merged.sha);
+    expect(detail.sourceHeadSha).toBe(sourceHead);
+    const facts = await db
+      .select()
+      .from(observedGitFacts)
+      .where(
+        and(eq(observedGitFacts.attemptId, ctx.mergeAttemptId), eq(observedGitFacts.factKind, "MERGE")),
+      );
+    expect(facts).toHaveLength(1);
+    expect(facts[0]!.sha).toBe(merged.sha);
+  });
+
+  it("C1: plan REAL under REAL reaches provider gate without scripted merge mutation", async () => {
+    const ctx = await publishThenPrepareMerge("c1-real-under-real");
+    await forceMergePlanMode(ctx.mergeAttemptId, "REAL");
+    process.env.STUDIO_GITHUB_PROVIDER = "real";
+    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
+    resetScriptedMutationCounts(ctx.pilotId);
+    await expect(
+      dispatchMerge({
+        pilotId: ctx.pilotId,
+        projectId: ctx.projectId,
+        attemptId: ctx.mergeAttemptId,
+      }),
+    ).rejects.toBeTruthy();
+    expect(getScriptedMutationCounts(ctx.pilotId).mergePR).toBe(0);
+  });
+
+  it("C2: reconcile positive with matching provenance + mergeCommitSha", async () => {
+    const ctx = await publishThenPrepareMerge("c2-reconcile-ok");
+    const plan = ctx.mergePlan;
+    // Simulate AMBIGUOUS after a lost ACK: PR already merged remotely with matching provenance.
+    const provider = getScriptedGitHubProvider();
+    const merged = await provider.mergePullRequest({
+      pilotId: ctx.pilotId,
+      fullName: plan.repositoryFullName,
+      prNumber: plan.prNumber,
+      expectedHeadSha: plan.expectedHeadSha,
+      expectedBaseSha: plan.expectedBaseSha,
+    });
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "AMBIGUOUS",
+        // claim key absent ⇒ sqlClaimInactive (JSON null claim is NOT SQL NULL).
+        resultJson: "{}",
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, ctx.mergeAttemptId));
+    const out = await reconcileAttempt(ctx.pilotId, ctx.projectId, ctx.mergeAttemptId);
+    expect(out.status).toBe("COMPLETED");
+    expect((out as { mergeSha?: string }).mergeSha).toBe(merged.sha);
+    const ref = (
+      await db
+        .select()
+        .from(documentPublicationRefs)
+        .where(eq(documentPublicationRefs.id, plan.publicationRefId))
+        .limit(1)
+    )[0]!;
+    expect(ref.status).toBe("MERGED");
+    expect(ref.headSha).toBe(plan.expectedHeadSha);
+    const detail = JSON.parse(ref.detailJson || "{}") as { mergeCommitSha?: string };
+    expect(detail.mergeCommitSha).toBe(merged.sha);
+  });
+
+  it("C2: divergent source HEAD → no invented COMPLETED", async () => {
+    const ctx = await publishThenPrepareMerge("c2-head-diverge");
+    const plan = ctx.mergePlan;
+    const provider = getScriptedGitHubProvider();
+    await provider.mergePullRequest({
+      pilotId: ctx.pilotId,
+      fullName: plan.repositoryFullName,
+      prNumber: plan.prNumber,
+      expectedHeadSha: plan.expectedHeadSha,
+      expectedBaseSha: plan.expectedBaseSha,
+    });
+    // Tamper frozen plan HEAD so provenance fails.
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, ctx.mergeAttemptId)).limit(1)
+    )[0]!;
+    const tampered = JSON.parse(row.planJson) as MergePlan;
+    tampered.expectedHeadSha = "ffffffffffffffffffffffffffffffffffffffff";
+    await db
+      .update(effectAttempts)
+      .set({
+        planJson: JSON.stringify(tampered),
+        status: "AMBIGUOUS",
+        resultJson: "{}",
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, ctx.mergeAttemptId));
+    const out = await reconcileAttempt(ctx.pilotId, ctx.projectId, ctx.mergeAttemptId);
+    expect(out.status).toBe("AMBIGUOUS");
+    expect(String((out as { note?: string }).note ?? "")).toMatch(/provenance|contradictoire/i);
+    const attempt = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, ctx.mergeAttemptId)).limit(1)
+    )[0]!;
+    expect(attempt.status).toBe("AMBIGUOUS");
+  });
+
+  it("C2: merged PR without mergeCommitSha → no invented COMPLETED", async () => {
+    const ctx = await publishThenPrepareMerge("c2-no-merge-sha");
+    const plan = ctx.mergePlan;
+    const provider = getScriptedGitHubProvider();
+    await provider.mergePullRequest({
+      pilotId: ctx.pilotId,
+      fullName: plan.repositoryFullName,
+      prNumber: plan.prNumber,
+      expectedHeadSha: plan.expectedHeadSha,
+      expectedBaseSha: plan.expectedBaseSha,
+    });
+    // Strip mergeCommitSha from scripted PR object.
+    const pr = await provider.getPullRequest(ctx.pilotId, plan.repositoryFullName, plan.prNumber);
+    (pr as { mergeCommitSha?: string | null }).mergeCommitSha = null;
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "AMBIGUOUS",
+        resultJson: "{}",
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, ctx.mergeAttemptId));
+    const out = await reconcileAttempt(ctx.pilotId, ctx.projectId, ctx.mergeAttemptId);
+    expect(out.status).toBe("AMBIGUOUS");
+    expect(String((out as { note?: string }).note ?? "")).toMatch(/merge_commit_sha absent/i);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts b/projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts
index 2acc6a11..9cd7072d 100644
--- a/projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/documentary-merge-contract.test.ts
@@ -240,4 +240,80 @@ describe("MERGE documentary contract (unit)", () => {
       "REAL",
     );
   });
+
+  it("C3: merge into release advances release only — main unchanged", async () => {
+    const provider = getScriptedGitHubProvider();
+    const pilotId = "pilot-c3-release";
+    const fullName = "acme/docs";
+    const mainBefore = await provider.getRefSha(pilotId, fullName, "main");
+    await provider.createBranch(pilotId, fullName, "release", mainBefore);
+    await provider.createBranch(pilotId, fullName, "studio/pub-rel", mainBefore);
+    await provider.putFileContents({
+      pilotId,
+      fullName,
+      path: "docs/rel.md",
+      branch: "studio/pub-rel",
+      message: "doc",
+      content: "# rel\n",
+    });
+    const pr = await provider.createPullRequest({
+      pilotId,
+      fullName,
+      title: "doc-rel",
+      head: "studio/pub-rel",
+      base: "release",
+      publicationMarker: "mk-rel",
+    });
+    const releaseBefore = await provider.getRefSha(pilotId, fullName, "release");
+    const merged = await provider.mergePullRequest({
+      pilotId,
+      fullName,
+      prNumber: pr.number,
+      expectedHeadSha: pr.headSha,
+      expectedBaseSha: pr.baseSha,
+    });
+    const mainAfter = await provider.getRefSha(pilotId, fullName, "main");
+    const releaseAfter = await provider.getRefSha(pilotId, fullName, "release");
+    expect(mainAfter).toBe(mainBefore);
+    expect(releaseAfter).toBe(merged.sha);
+    expect(releaseAfter).not.toBe(releaseBefore);
+  });
+
+  it("C3: merge into main advances main only", async () => {
+    const provider = getScriptedGitHubProvider();
+    const pilotId = "pilot-c3-main";
+    const fullName = "acme/docs";
+    const mainBefore = await provider.getRefSha(pilotId, fullName, "main");
+    await provider.createBranch(pilotId, fullName, "release", mainBefore);
+    await provider.createBranch(pilotId, fullName, "studio/pub-main", mainBefore);
+    await provider.putFileContents({
+      pilotId,
+      fullName,
+      path: "docs/main.md",
+      branch: "studio/pub-main",
+      message: "doc",
+      content: "# main\n",
+    });
+    const pr = await provider.createPullRequest({
+      pilotId,
+      fullName,
+      title: "doc-main",
+      head: "studio/pub-main",
+      base: "main",
+      publicationMarker: "mk-main",
+    });
+    const releaseBefore = await provider.getRefSha(pilotId, fullName, "release");
+    const merged = await provider.mergePullRequest({
+      pilotId,
+      fullName,
+      prNumber: pr.number,
+      expectedHeadSha: pr.headSha,
+      expectedBaseSha: pr.baseSha,
+    });
+    const mainAfter = await provider.getRefSha(pilotId, fullName, "main");
+    const releaseAfter = await provider.getRefSha(pilotId, fullName, "release");
+    expect(mainAfter).toBe(merged.sha);
+    expect(mainAfter).not.toBe(mainBefore);
+    expect(releaseAfter).toBe(releaseBefore);
+  });
 });

```

## 6. Tests exécutés (pas d'extrapolation globale)

Env: STUDIO_GITHUB_PROVIDER=scripted, STUDIO_ALLOW_SCRIPTED_GITHUB=1, DB e2e :5433.

| Suite | Résultat |
| --- | --- |
| documentary-merge-corrections.pg | **8/8 PASS** |
| conversation-merge-security.pg | **5/5 PASS** |
| documentary-merge-contract (unit) | **11/11 PASS** |
| merge-pull-request-sha | **9/9 PASS** |
| conversation-merge-authority | **12/12 PASS** |
| git-preview | **7/7 PASS** |
| git-collaboration B3/T20/AT-14/REC-01 slice | **31 PASS** (62 skipped) |
| tsc --noEmit | **PASS** |

## 7. Preuves de non-mutation

- C1 UNKNOWN / SCRIPTED-vs-REAL / REAL-vs-SCRIPTED : mergePR compteur = 0
- C1 REAL-under-REAL : zéro mutation scripted ; refus provider REAL attendu
- Aucune mutation GitHub distante ; aucun cutover RECETTE
- HTTP RECETTE post-cycle : <!--_U3Z92BCd0K__hiMvgTP9-->

## 8. SCRIPTED vs REAL

| Niveau | Statut |
| --- | --- |
| SCRIPTED corrections | PROVEN |
| Interface REAL path (mode gate) | PROVEN (refuse mismatch / UNKNOWN) |
| Mutation GitHub REAL | **NOT EXERCISED / NOT PROVEN** |

## 9. SOURCE / TREE final

- SOURCE_SHA : 10128bdb6bb1020a0fd8d4976b91879bff26c3b3
- TREE : be778f1bf461f15acf94bfed6879d43fa6256a0d

## 10. Réserves

1. MERGE REAL sandbox toujours NOT PROVEN.
2. Panel merge UI A8 hors périmètre de cette correction.
3. Nouveau candidat local — ne remplace pas RECETTE sans GO Morris distinct.

## 11. Verdict

**READY FOR CHATGPT REVIEW — E08 DOCUMENTARY REAL MERGE CORRECTED**

## 12. Décision Morris suivante

Revue ChatGPT, puis éventuel GO cutover RECETTE distinct. Ne pas déclarer E08 reçu / STABLE / RELEASE / ADOPTED.

