# SFIA STUDIO NEXT — R5 / ML4
# REVIEW PACK FULL — ML4-REC-01 RECONCILIATION PROVIDER PROVENANCE

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 02:44 CET |
| GO Morris | CRITICAL — Correctif ciblé réconciliation D7/D8 liée à la provenance fournisseur |
| Processus | SFIA v2.6 |
| Cycle | 8 — DELIVERY / IMPLÉMENTATION |
| Profil | CRITICAL |
| Typologie | INC / CORRECTIF PRODUCT |
| Version | 0.0.0-dev / NO RELEASE |
| ENV-01 | REQUIRED — DEV/E2E isolé ; RECETTE NOT RUN ; STABLE NOT AVAILABLE |

## 2. Git Truth — initial / final

### Initial (avant ce micro-correctif)
| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD local | `d4f158ce4abe793706d005fc7fafdfe365d2c207` |
| Tree | `d1cb657036139219f9f3e86d4381facfccc5bc01` |
| Parent | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
| Product distant | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| L3 distant | `f461f098f81bc11bd3f3641314de19ddd35c2826` |
| Hors Product | `.tmp-sfia-review/**`, `projects/.tmp-sfia-review/**`, qualify script — non stagés |

### Final
| Item | Valeur |
|---|---|
| HEAD local | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| Tree | `cdbd7e3763b835db5a58458191d4fb648d184fa0` |
| Parent | `d4f158ce4abe793706d005fc7fafdfe365d2c207` (= d4f158ce attendu) |
| Product distant | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` **INCHANGÉ** |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` **INCHANGÉ** |
| Push Product | **AUCUN** |

## 3. Sources Git lues

- SFIA v2.6 routing + cycle template (mandat)
- governance SEF/roadmap/ENV/versioning/naming + décision ML4 — **non mutés**
- conception/architecture/construction/ux ML4
- Handoff L3 `f461f098…` (correctif intégrité précédent)
- Code Product distant `79b10052` + cumul local `d4f158ce`

## 4. Git Review Index

| Path | Action |
|---|---|
| `web/src/domains/execution/effect-service.ts` | MODIFIED — gate ML4-REC-01 dans `reconcileAttempt` |
| `web/src/domains/execution/publication-steps.ts` | MODIFIED — `qualifyPlanEffectProviderMode` |
| `web/tests/unit/publication-steps.test.ts` | MODIFIED — UNKNOWN/REAL/SCRIPTED |
| `web/tests/integration/git-collaboration.pg.test.ts` | MODIFIED — REC-01…REC-10 |
| `construction/integration-git/matrice-acceptation.md` | MODIFIED — §23 ML4-REC-01 |
| `construction/integration-git/specification-technique.md` | MODIFIED — bandeau REC-01 + R1–R8 |
| `construction/delivery-history.md` | MODIFIED — DELIV REC-01 |

Migrations / governance / CI / secrets / App config : **inchangés**.

## 5. Cause racine — ML4-REC-01

`reconcileAttempt()` appelait `resolveGitHubProvider()` **avant** de comparer le mode figé de la tentative (`plan.effectProviderMode`) au mode live.

Conséquence : une tentative préparée REAL pouvait être observée/réconciliée via SCRIPTED (ou l'inverse), produisant une attribution D7/D8 entre frontières de fournisseur distinctes.

Le correctif `d4f158ce` fermait déjà ce contrôle dans `dispatchPublication`, pas dans reconcile.

## 6. Contrat d'identité du fournisseur

- Owner mode : `PublicationPlan.effectProviderMode` + `qualifyPlanEffectProviderMode()` + `resolveConfiguredEffectProviderMode()`
- Modes connus divergents → refus d'observation + `REQUIRES_REQUALIFICATION` si transition CAS applicable
- UNKNOWN → aucune attribution D7/D8 depuis provider live ; jamais REAL inventé
- COMPLETED historique → préservé ; D8 non réécrit depuis provider incompatible
- DISPATCHED + claim actif → READ-ONLY ownership
- Pas de fallback silencieux SCRIPTED

## 7. Modifications de reconcileAttempt

1. Charger tentative + plan
2. Qualifier mode historique REAL|SCRIPTED|UNKNOWN
3. Comparer au mode live **avant** `resolveGitHubProvider()`
4. Si mismatch/UNKNOWN : early return selon statut (COMPLETED préservé / claim actif / CAS requal ou AMBIGUOUS)
5. Seulement si modes connus égaux : résoudre provider, vérifier `provider.mode === liveMode`, puis observations existantes

Merge path : resolve provider localisé (hors gate publication).

## 8. Compatibilité historiques

- Plans avec mode : bound
- Plans sans mode : UNKNOWN fail-closed sur attribution
- COMPLETED + D8 existants : non rétrogradés / non réécrits
- Pas de backfill / migration / réinterprétation PR #18

## 9. Claim / lease / CAS

| Cas | Comportement |
|---|---|
| DISPATCHED + claim actif | statut inchangé, note READ-ONLY |
| DISPATCHED + claim inactif + mismatch | CAS → REQUIRES_REQUALIFICATION |
| AMBIGUOUS + mismatch | CAS → REQUIRES_REQUALIFICATION |
| UNKNOWN + AMBIGUOUS/DISPATCHED inactif | CAS → AMBIGUOUS (non-requalifié) |
| COMPLETED | aucun CAS libération ; D8 intact |

## 10. Cas REC-01…REC-10

| ID | Résultat |
|---|---|
| REC-01 REAL→SCRIPTED | REQUIRES_REQUALIFICATION ; 0 mutations ; 0 D8 ; faits inchangés |
| REC-02 SCRIPTED→REAL | REQUIRES_REQUALIFICATION sans credentials REAL |
| REC-03 DISPATCHED claim actif | DISPATCHED préservé |
| REC-04 claim expiré | REQUIRES_REQUALIFICATION via CAS |
| REC-05 AMBIGUOUS | pas de COMPLETED |
| REC-06 COMPLETED historique | COMPLETED + D8 detail/head préservés |
| REC-07 UNKNOWN | AMBIGUOUS ; pas de REAL inventé |
| REC-08 mode cohérent | COMPLETED sans régression |
| REC-09 marker incohérent | pas de D8 |
| REC-10 lost ACK | reprise + idempotence |

## 11. Suites exécutées (ce cycle)

| Gate | Résultat |
|---|---|
| tsc | PASS |
| Unit | **200** PASS |
| Integration PG SCRIPTED | **237** PASS |
| build | PASS |
| Playwright SCRIPTED | **13/13** PASS |
| diff --check | PASS |
| secrets | PASS |
| REAL mutation | NOT RUN / AUCUNE |

Baseline précédente rapportée (d4f158ce) : 199 / 227 / 13 — **non reprise artificielle**. Nouvelles valeurs ci-dessus.

## 12. Fake/Real Qualification §6.16

| Capacité | Statut |
|---|---|
| DETERMINISTIC CORRECTIVE (ML4-REC-01) | PROVEN ce cycle |
| OAuth READ REAL | PROVEN historique |
| Documentary REAL sandbox | PROVEN historique — non rejoué |
| MULTI-REPO REAL | NOT PROVEN |
| Merge REAL | HARD-BLOCKED / NOT PROVEN |
| USER E2E | NOT RUN — Morris RECETTE |
| Product push | NOT AUTHORIZED |

## 13. Risques R1–R8 (traçabilité corrigée)

| ID | Contenu historique | Statut |
|---|---|---|
| R1 | fallback D6 legacy effect_conditions | CARRIED |
| R2 | permissions App ∩ utilisateur | CARRIED |
| R3 | TOCTOU Git | CARRIED |
| R4 | fingerprint publication | CARRIED |
| R5 | cookies / isolation DEV-RECETTE | CARRIED |
| R6 | ENOENT/Turbopack | NON ISSUE (gel) |
| R7 | libellés REAL/SCRIPTED | corrigé candidat précédent |
| R8 | docs AS-IMPLEMENTED | corrigé candidat précédent |
| **ML4-REC-01** | reconcile provider provenance mismatch | **CORRIGÉ local ce cycle** |

Pas de renumérotation R1–R5 pour de nouveaux constats.

## 14–16. Diffs / fichiers / docs

### Commit
```
commit 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Mon Nov 9 02:43:28 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Mon Nov 9 02:43:28 2026 +0100

    fix(studio-next): bind publication reconciliation to effect provider provenance

    Prevent reconcileAttempt from attributing D7/D8 proof across mismatched
    REAL/SCRIPTED provider frontiers; preserve historical COMPLETED and UNKNOWN
    provenance without inventing REAL from live config.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../construction/delivery-history.md               |  14 +
 .../integration-git/matrice-acceptation.md         |  17 +
 .../integration-git/specification-technique.md     |   2 +
 .../web/src/domains/execution/effect-service.ts    |  87 +++-
 .../web/src/domains/execution/publication-steps.ts |  10 +
 .../tests/integration/git-collaboration.pg.test.ts | 459 ++++++++++++++++++++-
 .../web/tests/unit/publication-steps.test.ts       |   8 +
 7 files changed, 593 insertions(+), 4 deletions(-)

```

### Diff effect-service.ts
```
commit 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:43:28 2026 +0100

    fix(studio-next): bind publication reconciliation to effect provider provenance

    Prevent reconcileAttempt from attributing D7/D8 proof across mismatched
    REAL/SCRIPTED provider frontiers; preserve historical COMPLETED and UNKNOWN
    provenance without inventing REAL from live config.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
index 2506250c..02169f13 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
@@ -56,6 +56,7 @@ import type {
 import {
   assertPlanPublicationSteps,
   assertPublicationEffectProof,
+  qualifyPlanEffectProviderMode,
   resolvePublicationSteps,
 } from "./publication-steps";

@@ -2113,7 +2114,6 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
     .from(observedGitFacts)
     .where(eq(observedGitFacts.attemptId, attemptId));

-  const provider = resolveGitHubProvider();
   const claim = readClaim(row.resultJson);
   const claimActive = isClaimActive(claim);

@@ -2122,6 +2122,90 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
     const progress = readProgress(row.resultJson);
     const observed: PublicationProgress = { ...progress };

+    // ML4-REC-01 — bind reconcile observations to the attempt's frozen provider mode
+    // BEFORE selecting any Git provider. Wrong-provider observations are never D7/D8 proof.
+    const historicalMode = qualifyPlanEffectProviderMode(plan);
+    const liveMode = resolveConfiguredEffectProviderMode();
+    const providerMismatch =
+      (historicalMode === "REAL" || historicalMode === "SCRIPTED") &&
+      historicalMode !== liveMode;
+    const provenanceUnknown = historicalMode === "UNKNOWN";
+
+    if (providerMismatch || provenanceUnknown) {
+      const note = providerMismatch
+        ? `ML4-REC-01: mode fournisseur divergé (plan=${historicalMode}, live=${liveMode}) — observation refusée`
+        : "ML4-REC-01: provenance fournisseur UNKNOWN — aucune attribution D7/D8 depuis le provider live";
+
+      // D: COMPLETED historique — ne pas rétrograder ni réécrire D8 depuis le mauvais provider.
+      if (row.status === "COMPLETED") {
+        return {
+          attemptId,
+          status: "COMPLETED" as const,
+          progress: observed,
+          remoteHead: observed.branchSha ?? progress.branchSha ?? null,
+          facts,
+          prCurrentState: observed.prCurrentState ?? null,
+          note: `${note} — COMPLETED historique préservé`,
+        };
+      }
+
+      // A: DISPATCHED + claim actif — ownership préservé, aucune libération.
+      if (row.status === "DISPATCHED" && claimActive) {
+        return {
+          attemptId,
+          status: "DISPATCHED" as const,
+          progress: observed,
+          remoteHead: observed.branchSha ?? progress.branchSha ?? null,
+          facts,
+          prCurrentState: observed.prCurrentState ?? null,
+          note: `READ-ONLY: claim/lease actif — ${note}`,
+        };
+      }
+
+      // Known mismatch → REQUIRES_REQUALIFICATION when CAS liberation is applicable.
+      // UNKNOWN → leave non-requalified (AMBIGUOUS), never invent REAL / never COMPLETED.
+      const toStatus = providerMismatch ? "REQUIRES_REQUALIFICATION" : "AMBIGUOUS";
+      if (row.status === "AMBIGUOUS" || row.status === "DISPATCHED") {
+        const released = releaseClaim(claim);
+        const cas = await casLiberateInactiveDispatch({
+          attemptId: row.id,
+          fromStatus: row.status,
+          toStatus,
+          resultJson: writeProgress(row.resultJson, observed, released),
+        });
+        return {
+          attemptId,
+          status: cas ? toStatus : row.status,
+          progress: observed,
+          remoteHead: observed.branchSha ?? progress.branchSha ?? null,
+          facts,
+          prCurrentState: observed.prCurrentState ?? null,
+          note,
+        };
+      }
+
+      return {
+        attemptId,
+        status: row.status,
+        progress: observed,
+        remoteHead: observed.branchSha ?? progress.branchSha ?? null,
+        facts,
+        prCurrentState: observed.prCurrentState ?? null,
+        note,
+      };
+    }
+
+    // Modes match (known REAL|SCRIPTED) — provider may observe.
+    const provider = resolveGitHubProvider();
+    if (provider.mode !== liveMode) {
+      // Fail-closed: never silently fall back to a different provider identity.
+      throw new StudioError(
+        "DEPENDENCY_UNAVAILABLE",
+        `Fournisseur Git résolu incohérent (attendu ${liveMode}, obtenu ${provider.mode})`,
+        { httpStatus: 503 },
+      );
+    }
+
     // Historical malformed plans: never COMPLETED / D8 from reconcile.
     let planStepsValid = true;
     try {
@@ -2550,6 +2634,7 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
         note: "READ-ONLY: claim merge actif",
       };
     }
+    const provider = resolveGitHubProvider();
     try {
       const pr = await provider.getPullRequest(pilotId, plan.repositoryFullName, plan.prNumber);
       if (pr.state === "merged" && (row.status === "AMBIGUOUS" || row.status === "DISPATCHED")) {

```

### Diff publication-steps.ts
```
commit 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:43:28 2026 +0100

    fix(studio-next): bind publication reconciliation to effect provider provenance

    Prevent reconcileAttempt from attributing D7/D8 proof across mismatched
    REAL/SCRIPTED provider frontiers; preserve historical COMPLETED and UNKNOWN
    provenance without inventing REAL from live config.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/execution/publication-steps.ts b/projects/sfia-studio-next/web/src/domains/execution/publication-steps.ts
index 784dbeb9..64c10605 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/publication-steps.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/publication-steps.ts
@@ -56,6 +56,16 @@ export function assertPlanPublicationSteps(plan: Pick<PublicationPlan, "steps">)
   validatePublicationSteps(plan.steps);
 }

+/** Historical plans omit effectProviderMode → UNKNOWN (never invent REAL). */
+export function qualifyPlanEffectProviderMode(
+  plan: Pick<PublicationPlan, "effectProviderMode">,
+): "REAL" | "SCRIPTED" | "UNKNOWN" {
+  if (plan.effectProviderMode === "REAL" || plan.effectProviderMode === "SCRIPTED") {
+    return plan.effectProviderMode;
+  }
+  return "UNKNOWN";
+}
+
 /**
  * Fail-closed gate before COMPLETED / D8 publicationRef.
  * Base SHA alone is never documentary proof.

```

### Diff unit publication-steps.test.ts
```
commit 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:43:28 2026 +0100

    fix(studio-next): bind publication reconciliation to effect provider provenance

    Prevent reconcileAttempt from attributing D7/D8 proof across mismatched
    REAL/SCRIPTED provider frontiers; preserve historical COMPLETED and UNKNOWN
    provenance without inventing REAL from live config.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/unit/publication-steps.test.ts b/projects/sfia-studio-next/web/tests/unit/publication-steps.test.ts
index 8e5a7d96..2feb13ad 100644
--- a/projects/sfia-studio-next/web/tests/unit/publication-steps.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/publication-steps.test.ts
@@ -2,6 +2,7 @@ import { describe, expect, it } from "vitest";
 import {
   assertPublicationEffectProof,
   NOMINAL_PUBLICATION_STEPS,
+  qualifyPlanEffectProviderMode,
   resolvePublicationSteps,
   validatePublicationSteps,
 } from "@/domains/execution/publication-steps";
@@ -179,4 +180,11 @@ describe("T17: historique mode inconnu → UNKNOWN", () => {
     expect(effectProviderLabel("REAL")).toBe("REAL");
     expect(effectProviderLabel("SCRIPTED")).toBe("SCRIPTED");
   });
+
+  it("qualifyPlanEffectProviderMode ne déduit jamais REAL", () => {
+    expect(qualifyPlanEffectProviderMode({})).toBe("UNKNOWN");
+    expect(qualifyPlanEffectProviderMode({ effectProviderMode: undefined })).toBe("UNKNOWN");
+    expect(qualifyPlanEffectProviderMode({ effectProviderMode: "SCRIPTED" })).toBe("SCRIPTED");
+    expect(qualifyPlanEffectProviderMode({ effectProviderMode: "REAL" })).toBe("REAL");
+  });
 });

```

### Diff integration REC-01…REC-10
```
commit 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:43:28 2026 +0100

    fix(studio-next): bind publication reconciliation to effect provider provenance

    Prevent reconcileAttempt from attributing D7/D8 proof across mismatched
    REAL/SCRIPTED provider frontiers; preserve historical COMPLETED and UNKNOWN
    provenance without inventing REAL from live config.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
index 2265e750..395b4941 100644
--- a/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
@@ -1,4 +1,4 @@
-import { beforeAll, describe, expect, it } from "vitest";
+import { afterEach, beforeAll, describe, expect, it } from "vitest";
 import { config } from "dotenv";
 config({ path: ".env.local" });

@@ -47,7 +47,12 @@ import {
   preparePublication,
   reconcileAttempt,
 } from "@/domains/execution/effect-service";
-import { ExecutionBarrierRegistry, readClaim } from "@/domains/execution/claim-lease";
+import {
+  ExecutionBarrierRegistry,
+  mintClaim,
+  readClaim,
+  writeClaimInto,
+} from "@/domains/execution/claim-lease";
 import { publicationEffectFingerprint } from "@/domains/execution/fingerprint";
 import { insertRestriction, markDecisionState } from "@/domains/decisions/service";
 import { qualifyObservedFacts } from "@/domains/proofs/qualify";
@@ -3687,7 +3692,7 @@ describe("PostgreSQL ML4 publication integrity T01–T20 (SCRIPTED)", () => {
     // Same revisionId content diverges from plan.revisionFingerprint (D4 source drift).
     await db
       .update(documentRevisions)
-      .set({ contentMarkdown: "# Changed after inspection\n", updatedAt: new Date() })
+      .set({ contentMarkdown: "# Changed after inspection\n" })
       .where(eq(documentRevisions.id, revisionId));
     resetScriptedMutationCounts(pilotId);
     await expect(
@@ -3739,3 +3744,451 @@ describe("PostgreSQL ML4 publication integrity T01–T20 (SCRIPTED)", () => {
     expect(getScriptedMutationCounts(pilotId).mergePR).toBe(0);
   });
 });
+
+describe("PostgreSQL ML4-REC-01 reconcile provider provenance (SCRIPTED)", () => {
+  beforeAll(() => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+  });
+
+  afterEach(() => {
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
+    ScriptedFaultRegistry.clear();
+    ExecutionBarrierRegistry.clear();
+  });
+
+  async function seedPub(label: string) {
+    const ctx = await seedProject(label);
+    const { repoId } = await connectAndAttach(ctx.pilotId, ctx.projectId);
+    const doc = await availableDoc(ctx.pilotId, ctx.preparationId, label);
+    return { ...ctx, repoId, ...doc };
+  }
+
+  async function pubRefs(attemptId: string) {
+    return db
+      .select()
+      .from(documentPublicationRefs)
+      .where(eq(documentPublicationRefs.effectAttemptId, attemptId));
+  }
+
+  async function forcePlanMode(
+    attemptId: string,
+    mode: "REAL" | "SCRIPTED" | null,
+  ): Promise<PublicationPlan> {
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
+    )[0]!;
+    const plan = JSON.parse(row.planJson) as PublicationPlan;
+    if (mode === null) delete plan.effectProviderMode;
+    else plan.effectProviderMode = mode;
+    const fingerprint = publicationEffectFingerprint(plan);
+    await db
+      .update(effectAttempts)
+      .set({ planJson: JSON.stringify(plan), fingerprint, updatedAt: new Date() })
+      .where(eq(effectAttempts.id, attemptId));
+    return plan;
+  }
+
+  it("REC-01: REAL plan + SCRIPTED live — reconcile refuse attribution / pas de D8", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec01");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec01.md",
+      targetBranch: "main",
+      correlationKey: newId("rec01"),
+    });
+    const plan = await forcePlanMode(prepared.attemptId, "REAL");
+    await authzPub(pilotId, projectId, { attemptId: prepared.attemptId, plan });
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "AMBIGUOUS",
+        resultJson: JSON.stringify({
+          progress: {
+            branchCreated: true,
+            filePublished: true,
+            commitSha: "scripted-would-complete",
+            prCreated: true,
+            prOpened: true,
+            prNumber: 42,
+            prCurrentState: "OPEN",
+          },
+        }),
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const factsBefore = (
+      await db.select().from(observedGitFacts).where(eq(observedGitFacts.attemptId, prepared.attemptId))
+    ).length;
+    resetScriptedMutationCounts(pilotId);
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).toBe("REQUIRES_REQUALIFICATION");
+    expect(reconciled.note).toMatch(/ML4-REC-01/);
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
+    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);
+    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+    const factsAfter = (
+      await db.select().from(observedGitFacts).where(eq(observedGitFacts.attemptId, prepared.attemptId))
+    ).length;
+    expect(factsAfter).toBe(factsBefore);
+    const afterPlan = JSON.parse(
+      (
+        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+      )[0]!.planJson,
+    ) as PublicationPlan;
+    expect(afterPlan.effectProviderMode).toBe("REAL");
+  });
+
+  it("REC-02: SCRIPTED plan + REAL live — reconcile refuse sans credentials REAL", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec02");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec02.md",
+      targetBranch: "main",
+      correlationKey: newId("rec02"),
+    });
+    expect(prepared.plan.effectProviderMode).toBe("SCRIPTED");
+    await authzPub(pilotId, projectId, prepared);
+    await db
+      .update(effectAttempts)
+      .set({ status: "AMBIGUOUS", updatedAt: new Date() })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    process.env.STUDIO_GITHUB_PROVIDER = "real";
+    resetScriptedMutationCounts(pilotId);
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).toBe("REQUIRES_REQUALIFICATION");
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+  });
+
+  it("REC-03: DISPATCHED + claim actif — ownership préservé, pas de fausse complétion", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec03");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec03.md",
+      targetBranch: "main",
+      correlationKey: newId("rec03"),
+    });
+    const plan = await forcePlanMode(prepared.attemptId, "REAL");
+    await authzPub(pilotId, projectId, { attemptId: prepared.attemptId, plan });
+    const claim = mintClaim(null);
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "DISPATCHED",
+        resultJson: writeClaimInto(JSON.stringify({ progress: {} }), claim),
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).toBe("DISPATCHED");
+    expect(reconciled.note).toMatch(/claim/);
+    const after = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    expect(after.status).toBe("DISPATCHED");
+    expect(readClaim(after.resultJson)?.claimToken).toBe(claim.claimToken);
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("REC-04: DISPATCHED + claim expiré — CAS requalification, pas de faux effet", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec04");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec04.md",
+      targetBranch: "main",
+      correlationKey: newId("rec04"),
+    });
+    const plan = await forcePlanMode(prepared.attemptId, "REAL");
+    await authzPub(pilotId, projectId, { attemptId: prepared.attemptId, plan });
+    const claim = {
+      ...mintClaim(null),
+      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
+    };
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "DISPATCHED",
+        resultJson: writeClaimInto(JSON.stringify({ progress: {} }), claim),
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    resetScriptedMutationCounts(pilotId);
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).toBe("REQUIRES_REQUALIFICATION");
+    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("REC-05: AMBIGUOUS + changement provider — aucun COMPLETED", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec05");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec05.md",
+      targetBranch: "main",
+      correlationKey: newId("rec05"),
+    });
+    const plan = await forcePlanMode(prepared.attemptId, "REAL");
+    await authzPub(pilotId, projectId, { attemptId: prepared.attemptId, plan });
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "AMBIGUOUS",
+        resultJson: JSON.stringify({
+          progress: {
+            branchCreated: true,
+            filePublished: true,
+            commitSha: "would-complete-under-scripted",
+            prNumber: 7,
+            prCurrentState: "OPEN",
+            prCreated: true,
+            prOpened: true,
+          },
+        }),
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).not.toBe("COMPLETED");
+    expect(reconciled.status).toBe("REQUIRES_REQUALIFICATION");
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("REC-06: COMPLETED historique + changement provider — D8 préservée, pas de réécriture", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec06");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec06.md",
+      targetBranch: "main",
+      correlationKey: newId("rec06"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    const done = await dispatchPublication({
+      pilotId,
+      projectId,
+      attemptId: prepared.attemptId,
+    });
+    expect(done.status).toBe("COMPLETED");
+    const refsBefore = await pubRefs(prepared.attemptId);
+    expect(refsBefore).toHaveLength(1);
+    const detailBefore = refsBefore[0]!.detailJson;
+    const headBefore = refsBefore[0]!.headSha;
+    // Force historical mode REAL while live stays SCRIPTED (config change after success).
+    await forcePlanMode(prepared.attemptId, "REAL");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).toBe("COMPLETED");
+    expect(reconciled.note).toMatch(/COMPLETED historique préservé/);
+    const refsAfter = await pubRefs(prepared.attemptId);
+    expect(refsAfter).toHaveLength(1);
+    expect(refsAfter[0]!.detailJson).toBe(detailBefore);
+    expect(refsAfter[0]!.headSha).toBe(headBefore);
+  });
+
+  it("REC-07: plan historique sans mode — UNKNOWN, aucun REAL inventé, pas de complétion", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec07");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec07.md",
+      targetBranch: "main",
+      correlationKey: newId("rec07"),
+    });
+    await forcePlanMode(prepared.attemptId, null);
+    await authzPub(pilotId, projectId, {
+      attemptId: prepared.attemptId,
+      plan: JSON.parse(
+        (
+          await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+        )[0]!.planJson,
+      ),
+    });
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "AMBIGUOUS",
+        resultJson: JSON.stringify({
+          progress: {
+            branchCreated: true,
+            filePublished: true,
+            commitSha: "unknown-would-complete",
+            prNumber: 9,
+            prCurrentState: "OPEN",
+            prCreated: true,
+            prOpened: true,
+          },
+        }),
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).not.toBe("COMPLETED");
+    expect(reconciled.status).toBe("AMBIGUOUS");
+    expect(reconciled.note).toMatch(/UNKNOWN/);
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+    const plan = JSON.parse(
+      (
+        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+      )[0]!.planJson,
+    ) as PublicationPlan;
+    expect(plan.effectProviderMode).toBeUndefined();
+  });
+
+  it("REC-08: mode identique + séquence nominale — réconciliation valide sans régression", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec08");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec08.md",
+      targetBranch: "main",
+      correlationKey: newId("rec08"),
+    });
+    expect(prepared.plan.effectProviderMode).toBe("SCRIPTED");
+    await authzPub(pilotId, projectId, prepared);
+    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toBeTruthy();
+    ScriptedFaultRegistry.clear();
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    if (reconciled.status !== "COMPLETED") {
+      const resumed = await dispatchPublication({
+        pilotId,
+        projectId,
+        attemptId: prepared.attemptId,
+      });
+      expect(resumed.status).toBe("COMPLETED");
+    }
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(1);
+    const again = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(again.status).toBe("COMPLETED");
+  });
+
+  it("REC-09: PR marker incohérent — aucune D8 même avec bon provider", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec09");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec09.md",
+      targetBranch: "main",
+      correlationKey: newId("rec09"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toBeTruthy();
+    ScriptedFaultRegistry.clear();
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    const progress = JSON.parse(row.resultJson).progress as { prNumber?: number };
+    expect(progress.prNumber).toBeTruthy();
+    // Corrupt marker on the PR that was created (wrong provenance).
+    scriptedSetPrMarker(pilotId, progress.prNumber!, "wrong-marker-foreign");
+    const claim = {
+      ...mintClaim(null),
+      leaseExpiresAt: new Date(Date.now() - 1).toISOString(),
+      releasedAt: new Date().toISOString(),
+    };
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "AMBIGUOUS",
+        resultJson: writeClaimInto(row.resultJson, claim),
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).not.toBe("COMPLETED");
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("REC-10: reprise timeout/lost ACK — mode cohérent, idempotence", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("rec10");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/rec10.md",
+      targetBranch: "main",
+      correlationKey: newId("rec10"),
+    });
+    expect(prepared.plan.effectProviderMode).toBe("SCRIPTED");
+    await authzPub(pilotId, projectId, prepared);
+    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toBeTruthy();
+    ScriptedFaultRegistry.clear();
+    resetScriptedMutationCounts(pilotId);
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    let finalStatus = reconciled.status;
+    if (reconciled.status !== "COMPLETED") {
+      const resumed = await dispatchPublication({
+        pilotId,
+        projectId,
+        attemptId: prepared.attemptId,
+      });
+      finalStatus = resumed.status;
+    }
+    expect(finalStatus).toBe("COMPLETED");
+    expect(getScriptedMutationCounts(pilotId).createPR).toBeLessThanOrEqual(1);
+    const again = await dispatchPublication({
+      pilotId,
+      projectId,
+      attemptId: prepared.attemptId,
+    });
+    expect(again.status).toBe("COMPLETED");
+    expect(again.idempotent).toBe(true);
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(1);
+  });
+});

```

### Diff docs construction
```
commit 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:43:28 2026 +0100

    fix(studio-next): bind publication reconciliation to effect provider provenance

    Prevent reconcileAttempt from attributing D7/D8 proof across mismatched
    REAL/SCRIPTED provider frontiers; preserve historical COMPLETED and UNKNOWN
    provenance without inventing REAL from live config.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 15de2706..c4c27823 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1090,3 +1090,17 @@ Append-only logical journal of Cursor product deliveries.
 | REAL multi-repo | NOT PROVEN — réserve sandbox `chantiers360` |
 | Push Product distant | **AUCUN** — remote reste `79b10052…` |
 | Verdict candidat | `ML4 PUBLICATION INTEGRITY — CORRECTED AND LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL RE-REVIEW — PRODUCT PUSH NOT AUTHORIZED` |
+
+## delivery_id: DELIV-2026-11-09-ML4-REC-01-RECONCILE-PROVIDER-PROVENANCE
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~02:45 CET |
+| Macro-capacité | R5 / ML4 — Correctif `ML4-REC-01` réconciliation liée à la provenance fournisseur |
+| Type | INC / CORRECTIF PRODUCT — `NO RELEASE` / `0.0.0-dev` |
+| Parent Product | `d4f158ce4abe793706d005fc7fafdfe365d2c207` |
+| Correctif | `reconcileAttempt` : gate mode historique vs live **avant** observations provider ; COMPLETED/D8 protégés ; UNKNOWN fail-closed |
+| Risques | R1–R8 historiques préservés ; nouveau = `ML4-REC-01` (pas de renumérotation) |
+| Tests | REC-01…REC-10 DET SCRIPTED |
+| Push Product distant | **AUCUN** — remote reste `79b10052…` |
+| Verdict candidat | `ML4 PUBLICATION RECONCILIATION — PROVIDER PROVENANCE GUARDED — LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED` |
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index 8d4ae4fa..f5c75eac 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -483,3 +483,20 @@ GO Morris CRITICAL correctif — **aucune** mutation GitHub REAL ; push Product
 | USER E2E / RECETTE | NOT RUN | Morris |

 Verdict cycle : **ML4 PUBLICATION INTEGRITY — CORRECTED AND LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL RE-REVIEW — PRODUCT PUSH NOT AUTHORIZED**.
+
+## 23. ML4-REC-01 — Reconciliation provider provenance (2026-11-09)
+
+Identifiant distinct — **ne pas** réutiliser R1–R5 historiques.
+
+| Item | Statut | Note |
+|---|---|---|
+| Défaut | CORRIGÉ (local) | `reconcileAttempt` résolvait le provider live avant contrôle du mode de la tentative |
+| Gate | ENFORCED | `qualifyPlanEffectProviderMode` + `resolveConfiguredEffectProviderMode` **avant** toute observation |
+| Modes divergents | REQUIRES_REQUALIFICATION | aucune D8 / aucun COMPLETED nouveau / 0 mutation |
+| UNKNOWN historique | FAIL-CLOSED | pas de REAL inventé ; pas de complétion depuis provider live |
+| COMPLETED historique | PRÉSERVÉ | D8 non réécrit depuis provider incompatible |
+| Claim actif | READ-ONLY | ownership DISPATCHED préservé |
+| Tests | REC-01…REC-10 DET | service + DB SCRIPTED |
+| R1–R8 | INCHANGÉS | traçabilité historique conservée (voir spec § risques) |
+
+Verdict cycle : **ML4 PUBLICATION RECONCILIATION — PROVIDER PROVENANCE GUARDED — LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED**.
diff --git a/projects/sfia-studio-next/construction/integration-git/specification-technique.md b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
index be0a6f19..b1d3f395 100644
--- a/projects/sfia-studio-next/construction/integration-git/specification-technique.md
+++ b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
@@ -7,6 +7,8 @@
 > Mutations REAL **bornées documentary** si et seulement si `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` (aliases refusés ; merge HARD-BLOCKED). Flag ≠ autorité D6.
 > Séquence publication nominale **seule** autorisée : `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` (`publication-steps.ts`). Aucun COMPLETED / D8 sans preuve fichier + commitSha ≠ baseSha + PR distante.
 > Provenance d'effet : `plan.effectProviderMode` figé à prepare ; historique sans champ → UNKNOWN ; divergence live → REQUIRES_REQUALIFICATION.
+> **ML4-REC-01 :** `reconcileAttempt` contrôle le mode historique **avant** `resolveGitHubProvider()` — une observation SCRIPTED n'est jamais preuve d'un effet REAL (et inversement). COMPLETED historique non réécrit.
+> Risques historiques R1–R8 **conservés** (ne pas renuméroter). Nouveau défaut = `ML4-REC-01` seulement.
 > REAL sandbox actuel : allowlists `GITHUB_APP_ALLOWED_FULL_NAME` / App ID / installation — **mono-repo prouvé** (`mcleland147/chantiers360`) ; multi-repo REAL hors capacité.
 > Les sections bas du document portant « DOCUMENTED — DRAFT / NOT IMPLEMENTED » sont des **snapshots candidats historiques** — le bandeau ci-dessus prévaut pour l'état AS-IMPLEMENTED courant.


```

## 17. Risques résiduels / dette

- Couverture DETERMINISTIC des mismatch ; pas de claim global « impossible partout »
- MULTI-REPO REAL / MERGE REAL / USER E2E restent hors preuve
- Cumul local `d4f158ce` + `51b0c3b6` non poussé — candidat seulement

## 18. ENV-01 / versioning

DEV OK. E2E SCRIPTED OK. RECETTE NOT RUN. STABLE N/A. `0.0.0-dev` / NO RELEASE.

## 19. Commit Product LOCAL

| Champ | Valeur |
|---|---|
| SHA | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| Tree | `cdbd7e3763b835db5a58458191d4fb648d184fa0` |
| Parent | `d4f158ce4abe793706d005fc7fafdfe365d2c207` |
| Message | `fix(studio-next): bind publication reconciliation to effect provider provenance` |
| Files | 7 (+593 / −4) |

## 20. Product distant

`origin/feat/next-git-collaboration-20261108` = `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` (= 79b10052) — inchangé.

## 21. Gates restants

1. Critical Review ChatGPT
2. GO Morris distinct pour push du cumul correctif exact (`d4f158ce` + `51b0c3b6`)
3. Qualification REAL recettable
4. Candidat ENV-01 + RECETTE Morris

## 22. Verdict unique

**ML4 PUBLICATION RECONCILIATION — PROVIDER PROVENANCE GUARDED — LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED.**
