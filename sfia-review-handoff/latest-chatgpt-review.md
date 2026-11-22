# SFIA Review Pack FULL — E08 PR #690 CI Stabilization (SUCCESS)

## 1. Date / mandat / cycle

| Champ | Valeur |
| --- | --- |
| Europe/Paris | 2026-11-22 16:29:04 UTC+01:00 |
| UTC | 2026-11-22 15:29:04 UTC |
| Mandat | GO Morris autonomie correction/validation PR #690 |
| Cycle | 8 — Delivery / correctif · contrôles 9 QA |
| Profil | Standard · CORRECTIF · NO RELEASE |
| Handoff | required / publish-in-cycle |

## 2. Verdict

**E08 PR #690 — CI PASS — READY FOR CHATGPT MERGE REVIEW**

- PR #690 OPEN · mergeable · HEAD distant = local.
- Contrôles requis Next + gates : **PASS**.
- Studio Build : **SKIPPED** (conception workflow — Next in scope).
- Merge / STABLE / release / cutover RECETTE : **NONE**.

## 3. Git Truth initial / final

| Champ | Début cycle stabilisation | Final |
| --- | --- | --- |
| Branche | `feat/next-ensemble08-git-publications-nora` | idem |
| HEAD | `f3b68855b50e8158ea700144c36c5a354f01ae41` | `f11de65f98c3a0429e45c9f2c3935633840aec12` |
| TREE | (pré-stabilisation) | `8786e7d39d2653fdad78d65e41c062b4b09b6e2e` |
| Remote product | `f3b68855…` | `f11de65f98c3a0429e45c9f2c3935633840aec12` |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| PR | https://github.com/mcleland147/sfia-workspace/pull/690 | OPEN |

```
## feat/next-ensemble08-git-publications-nora...origin/feat/next-ensemble08-git-publications-nora
 M .tmp-sfia-review/chatgpt-review.md
```

## 4. Sources consultées

- SEF, roadmap, decisions, ENV-01, versioning, naming
- Méthode SFIA v2.6 routing + cycle template
- Contrats E08 D2 / architecture §8.3 / as-built / PV
- Specs e2e + page.tsx routing documents / GitRepositoriesSurface
- CI runs `45027000918` (échec initial) · `45031336684` · `45033933398` · **`45036729361` (PASS)**
- Handoff précédent `4c797066` / STOP pack `43c5c739`

## 5. Inventaire des échecs rencontrés (chronologie)

| Run | HEAD | Échec | Qualification |
| --- | --- | --- | --- |
| `45027000918` | `f3b68855` | Playwright : `git-preview-actions` + `documentId` deep-link | A (ordre test après detach) + B (race load/URL) |
| `45031336684` | `09b1b34e` | Playwright **109 PASS** puis `git diff --check` trailing whitespace docs | C / qualité CI (whitespace Markdown) |
| `45033933398` | `883c1578` | Playwright 1 FAIL : rail `nav-documents` reste sur `pilotage` | D (course load vs Link rail) |
| **`45036729361`** | **`f11de65f`** | — | **SUCCESS** |

## 6. Corrections réalisées

### Round 1 — `09b1b34e` `fix(e08): stabilize PR #690 git preview and document deep-link`

- **Cas A (test)** : `ensemble08-git-surface.spec.ts` — preview fichier **avant** detach/manage.
- **Cas B (runtime localisé)** : `page.tsx` — `pendingDocumentOpenIdRef` pour ne pas laisser `load()`/URL normalize stripper `documentId` pendant un Ouvrir en vol ; lookup `documentsRef` sur `onOpen`.
- Blast radius : navigation URL document uniquement ; pas D6/D7/D8/D9 métier ; RECETTE non re-cutover.
- Qualifié **postérieur au build RECETTE accepté** (`10128bdb` / `2uHrYBsQ`).

### Round 2 — `883c1578` `chore(e08): strip trailing whitespace blocking CI diff --check`

- Cosmétique docs E08 (`asis-capacite-b`, `g5-exit-matrix`, PV) + note PROVENANCE.
- Aucun changement sémantique de contrat ; empreinte PV mise à jour après normalisation.

### Round 3 — `f11de65f` `test(e08): settle project load before G4 rail surface switches`

- **Cas D (test)** : attendre `project-load-state=ready` + `data-project-surface` avant enchaînement rail Pilotage→Documents.
- Aligné sur le contrat déjà prouvé par `project-surface-nav-intent.spec.ts`.

## 7. Diffs du cycle de stabilisation (`f3b68855..HEAD`)

### Commits

```
f11de65f98c3a0429e45c9f2c3935633840aec12 test(e08): settle project load before G4 rail surface switches
883c1578c38a7241e063b1c1da6a29c72a795a38 chore(e08): strip trailing whitespace blocking CI diff --check
09b1b34edb34e8f4b7299bfd2636e019db35fac3 fix(e08): stabilize PR #690 git preview and document deep-link

```

### Stat

```
 .../construction/delivery-history.md               | 15 +++++++++++
 .../PROVENANCE-contrats-e08.md                     |  6 +++++
 .../asis-capacite-b-nora-d6.md                     |  8 +++---
 .../figma-evidence/g5-exit-matrix.md               |  1 -
 .../recette-acceptation-partielle-2026-11-22.md    | 16 ++++++------
 .../web/src/app/projects/[projectId]/page.tsx      | 29 ++++++++++++++++++++--
 .../web/tests/e2e/ensemble08-git-surface.spec.ts   | 27 ++++++++++----------
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      | 23 ++++++++++++++---
 8 files changed, 94 insertions(+), 31 deletions(-)

```

### Diff complet

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 26ee4d6f..ab2038b5 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,21 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-CI-STABILIZATION-PR690
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 (Europe/Paris) |
+| Macro-lot | Ensemble 08 — stabilisation CI PR #690 |
+| Type | CORRECTIF · STANDARD · **NO RELEASE** |
+| Fixes | (A) E2E git-surface preview avant detach · (B) race deep-link `documentId` vs `load()` URL normalize |
+| Runtime | `page.tsx` — `pendingDocumentOpenIdRef` + préservation documentId à la normalisation |
+| Tests | ensemble08-git-surface · g4-b1-b4-correctifs |
+| Preuves locales | Playwright **109 PASS / 5 SKIPPED** · RECETTE inchangée |
+| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQ` — runtime correctif **postérieur** au build accepté |
+| Push | PR #690 only |
+| Merge | **NONE** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOC-ALIGN-D2-PR-PUBLICATION

 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md
index 3015e7d1..e8bdd3b6 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/PROVENANCE-contrats-e08.md
@@ -42,3 +42,9 @@

 - Candidat utilisateur recetté (runtime): SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` / TREE `be778f1bf461f15acf94bfed6879d43fa6256a0d` / BUILD `2uHrYBsQUvf6aii40hMpj`
 - Un HEAD produit ultérieur **uniquement documentaire** ne remplace pas rétroactivement ce SOURCE pour le build RECETTE servi.
+
+## Normalisation whitespace CI (2026-11-22)
+
+- `git diff --check` vs `main` échouait sur espaces fin de ligne Markdown (PV, asis-capacite-b, g5-exit-matrix).
+- Correction cosmétique sans changement sémantique. PV blob après normalisation : `2517c69ac1b214010a7153d7d9f1d96034acb68a`.
+- Contenu D2 inchangé sur le fond ; empreinte blob mise à jour.
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-capacite-b-nora-d6.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-capacite-b-nora-d6.md
index 50687508..65583777 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-capacite-b-nora-d6.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/asis-capacite-b-nora-d6.md
@@ -2,7 +2,7 @@

 ### 1. Current flow: USER → semantic qual → plan → HumanDecision → authorizePublication → D7 → D9

-**Turn entry (`postUserMessageAndNora`)**
+**Turn entry (`postUserMessageAndNora`)**
 `/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/web/src/domains/conversation/service.ts`

 1. **Recovery hooks** (project linked): `recoverAuthorizedNoraMissions`, `recoverPendingMissionContinuation`.
@@ -18,11 +18,11 @@
 - `insertHumanDecision` with `kind: GIT_PUBLICATION_MANDATE`, `sourceKind: GIT_EFFECT`, `sourceRef` / `objectRef` = `attemptId`, `effectConditions` JSON (publication + inspection fingerprints + envelope).
 - Then `AUTHORIZED` on `effect_attempts`.

-**Dispatch / D9**
+**Dispatch / D9**
 - Classic: `POST .../dispatch` → `dispatchPublication` → `assertCurrentGitAuthority` at each mutation step.
 - Nora mission: `authorize` route may call `resumeMissionAfterPublicationAuthorize` when `attemptIsNoraMission` (`correlationKey` prefix `pub:mission:`) → auto `dispatchPublication` + reconcile + thread restitution.

-**D8 / proofs**
+**D8 / proofs**
 `assertPublicationEffectProof` (`publication-steps.ts`) before `COMPLETED`; `qualifyObservedFacts` (`proofs/qualify.ts`) does not infer acceptance from Git alone.

 ```920:1021:projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
@@ -200,4 +200,4 @@ Without conversational mandate admission:

 ---

-**Bottom line for Ensemble 08 B:** Infrastructure for Nora-conducted **prepare → await authorize → resume dispatch** is in place and tested; the **E08 differentiator** — treating an explicit USER chat message as sufficient D6 mandate on the exact plan without redundant confirmation — is **not implemented**. The smallest addition is a **USER-message-correlated caller of `authorizePublication`** plus a **mandate⊆plan** check, reusing `resumeMissionAfterPublicationAuthorize` and all fingerprint/D6/D7 gates—not Nora qual as `HumanDecision` and not a new bypass around `authorizePublication`.
\ No newline at end of file
+**Bottom line for Ensemble 08 B:** Infrastructure for Nora-conducted **prepare → await authorize → resume dispatch** is in place and tested; the **E08 differentiator** — treating an explicit USER chat message as sufficient D6 mandate on the exact plan without redundant confirmation — is **not implemented**. The smallest addition is a **USER-message-correlated caller of `authorizePublication`** plus a **mandate⊆plan** check, reusing `resumeMissionAfterPublicationAuthorize` and all fingerprint/D6/D7 gates—not Nora qual as `HumanDecision` and not a new bypass around `authorizePublication`.
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/g5-exit-matrix.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/g5-exit-matrix.md
index b149544a..4fa9b26d 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/g5-exit-matrix.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/g5-exit-matrix.md
@@ -23,4 +23,3 @@ Viewport primary: 1680×970

 ## Verdict G5
 **NOT PROVEN (PARTIAL evidence)** — runtime captures + oracles present; full geometric F2 matrix across 11.01–11.16 / multi-viewport / ≤2px not completed this cycle.
-
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md
index bd06957b..2517c69a 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md
@@ -155,7 +155,7 @@ Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif

 ### GIT-UAT-01 — Consulter une PR en temps réel

-**Nature :** Lecture seule
+**Nature :** Lecture seule
 **État :** **PARTIAL / FAIL UAT** — branches et SHA lus ; statut actuel et fusion non consultables via les capacités Nora exposées.

 **Prompt exact proposé à Morris :**
@@ -166,7 +166,7 @@ Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif

 ### GIT-UAT-02 — Examiner les changements de la PR

-**Nature :** Lecture seule
+**Nature :** Lecture seule
 **État :** NON TESTÉ

 **Prompt exact proposé à Morris :**
@@ -177,7 +177,7 @@ Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif

 ### GIT-UAT-03 — Vérifier la possibilité de fusionner

-**Nature :** Lecture seule
+**Nature :** Lecture seule
 **État :** NON TESTÉ

 **Prompt exact proposé à Morris :**
@@ -188,7 +188,7 @@ Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif

 ### GIT-UAT-04 — Consulter et comparer les commits

-**Nature :** Lecture seule
+**Nature :** Lecture seule
 **État :** NON TESTÉ

 **Prompt exact proposé à Morris :**
@@ -199,7 +199,7 @@ Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif

 ### GIT-UAT-05 — Identifier les droits Git effectifs

-**Nature :** Lecture seule
+**Nature :** Lecture seule
 **État :** NON TESTÉ

 **Prompt exact proposé à Morris :**
@@ -210,7 +210,7 @@ Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif

 ### GIT-UAT-06 — Retrouver une publication sans la dupliquer

-**Nature :** Lecture seule
+**Nature :** Lecture seule
 **État :** NON TESTÉ

 **Prompt exact proposé à Morris :**
@@ -221,7 +221,7 @@ Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif

 ### GIT-UAT-07 — Vérifier la continuité après rechargement

-**Nature :** Lecture seule
+**Nature :** Lecture seule
 **État :** NON TESTÉ

 **Prompt exact proposé à Morris :**
@@ -232,7 +232,7 @@ Sept scénarios en **lecture seule** et un huitième à **effet réel facultatif

 ### GIT-UAT-08 — Fusion gouvernée par Nora — optionnel

-**Nature :** MUTATION RÉELLE — NE PAS EXÉCUTER SANS GO EXPLICITE
+**Nature :** MUTATION RÉELLE — NE PAS EXÉCUTER SANS GO EXPLICITE
 **État :** NON TESTÉ — GO de fusion non accordé

 **Prompt exact proposé à Morris :**
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index a894e245..65fa2643 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -346,6 +346,11 @@ export default function ProjectPage() {
   const reviseDraftRef = useRef("");
   /** Surface chosen by chrome/rail while project load() is still in flight — must not be clobbered. */
   const pendingSurfaceRef = useRef<Surface | null>(null);
+  /**
+   * Document open in flight — load()/URL normalize must not replace away `documentId`
+   * before router.push from openDocumentReadView is visible on window.location.
+   */
+  const pendingDocumentOpenIdRef = useRef<string | null>(null);
   /** C1 — ignore stale async viewer responses after A→B / close / project change. */
   const viewerRequestSeqRef = useRef(0);
   const viewerOpenRef = useRef(false);
@@ -942,6 +947,7 @@ export default function ProjectPage() {
     setSurface(next);
     setDocMissing("");
     if (next !== "document") {
+      pendingDocumentOpenIdRef.current = null;
       setInspect(null);
       setDocUi("READING");
       setReviseDraft("");
@@ -951,6 +957,7 @@ export default function ProjectPage() {
       resetDocumentBibliothequeState();
       syncSurfaceUrl(next, null, "push");
     } else {
+      pendingDocumentOpenIdRef.current = null;
       resetDocumentBibliothequeState();
       syncSurfaceUrl(next, null, "push");
     }
@@ -1086,6 +1093,7 @@ export default function ProjectPage() {
     revisionId?: string | null,
     mode: "push" | "replace" = "push",
   ) {
+    pendingDocumentOpenIdRef.current = doc.document.id;
     setInspect(doc);
     setDocMissing("");
     setSelectedLibraryId(doc.document.id);
@@ -1227,12 +1235,17 @@ export default function ProjectPage() {

     if (qSurface === "document") {
       if (!qDocId) {
+        // In-flight Ouvrir: do not clobber read state / pending deep-link before URL catches up.
+        if (pendingDocumentOpenIdRef.current) return;
         setInspect(null);
         setDocMissing("");
         setDocView("library");
         setSelectedLibraryId(null);
         return;
       }
+      if (pendingDocumentOpenIdRef.current === qDocId) {
+        pendingDocumentOpenIdRef.current = null;
+      }
       const match = docs.find((d) => d.document.id === qDocId);
       if (match) {
         setInspect(match);
@@ -1256,6 +1269,7 @@ export default function ProjectPage() {
       }
       return;
     }
+    pendingDocumentOpenIdRef.current = null;
     setInspect(null);
     setDocMissing("");
   }
@@ -1817,7 +1831,16 @@ export default function ProjectPage() {
       applyUrlDocumentState(docs, decision.effectiveSurface as Surface, qDocId);
       if (decision.shouldNormalizeUrl) {
         const target = decision.effectiveSurface as Surface;
-        syncSurfaceUrl(target, target === "document" ? qDocId : null, "replace");
+        // Prefer live window URL + pending open so concurrent load() cannot strip documentId.
+        const liveDocId =
+          typeof window !== "undefined"
+            ? new URL(window.location.href).searchParams.get("documentId")
+            : qDocId;
+        const docIdForUrl =
+          target === "document"
+            ? liveDocId ?? qDocId ?? pendingDocumentOpenIdRef.current
+            : null;
+        syncSurfaceUrl(target, docIdForUrl, "replace");
       }
       if (qSurface && pendingSurface && qSurface === pendingSurface) {
         pendingSurfaceRef.current = null;
@@ -2827,7 +2850,9 @@ export default function ProjectPage() {
           projectName={projectName}
           onSelect={(d) => setSelectedLibraryId(d.document.id)}
           onOpen={(d) => {
-            const match = documents.find((x) => x.document.id === d.document.id);
+            const match =
+              documents.find((x) => x.document.id === d.document.id) ??
+              documentsRef.current.find((x) => x.document.id === d.document.id);
             if (match) openDocumentReadView(match, match.latestRevision?.id ?? null);
           }}
           onResumeNora={(d) => {
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
index 50d36b40..cc63574d 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
@@ -74,6 +74,20 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
     });
     await page.getByTestId("git-branch-select").click(); // close if still open

+    // Preview enlarge while a repo is still attached — after detach the tree/context
+    // can remount and a stale file click yields error (no git-preview-actions).
+    await page.getByTestId("git-tab-files").click();
+    await expect(page.getByTestId("git-tree")).toBeVisible({ timeout: 20_000 });
+    const fileBtn = page.locator('[data-testid^="git-tree-file-"]').first();
+    await expect(fileBtn).toBeVisible({ timeout: 20_000 });
+    await fileBtn.click();
+    await expect(page.getByTestId("git-preview-actions")).toBeVisible({ timeout: 20_000 });
+    await expect(page.getByTestId("git-action-enlarge")).toHaveAttribute(
+      "aria-label",
+      /Agrandir/i,
+    );
+    await expect(page.getByTestId("git-action-enlarge")).not.toContainText(/Agrandir/i);
+
     // Publications tab — project-scale, historical wording (E08-S04)
     await page.getByTestId("git-tab-publications").click();
     await expect(page.getByTestId("git-publications")).toBeVisible();
@@ -103,19 +117,6 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
       await expect(page.getByTestId("git-detach-confirm")).toBeVisible({ timeout: 10_000 });
       await page.getByTestId("git-detach-confirm-yes").click();
     }
-
-    // Enlarge control is icon-only with aria-label when a file is open — skip if empty tree
-    await page.getByTestId("git-tab-files").click();
-    const fileBtn = page.locator('[data-testid^="git-tree-file-"]').first();
-    if (await fileBtn.isVisible().catch(() => false)) {
-      await fileBtn.click();
-      await expect(page.getByTestId("git-preview-actions")).toBeVisible();
-      await expect(page.getByTestId("git-action-enlarge")).toHaveAttribute(
-        "aria-label",
-        /Agrandir/i,
-      );
-      await expect(page.getByTestId("git-action-enlarge")).not.toContainText(/Agrandir/i);
-    }
   });

   test("mobile viewport keeps git empty / manage usable", async ({ page }) => {
diff --git a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
index 58a0f51c..2f8ae780 100644
--- a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
@@ -49,6 +49,14 @@ test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABL
   const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
   expect(projectId).toBeTruthy();

+  // Settle project load before rail surface switches (avoids lost Link navigations
+  // while load()/URL normalize is still racing — same contract as nav-intent specs).
+  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+    "data-project-load-state",
+    "ready",
+    { timeout: 30_000 },
+  );
+
   // B1 — real rail links with surface query
   const rail = page.getByTestId("studio-rail");
   await expect(rail.getByTestId("nav-travail")).toHaveAttribute(
@@ -57,8 +65,16 @@ test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABL
   );
   await rail.getByTestId("nav-pilotage").click();
   await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=pilotage`));
+  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+    "data-project-surface",
+    "pilotage",
+  );
   await rail.getByTestId("nav-documents").click();
-  await expect(page).toHaveURL(new RegExp(`surface=document`));
+  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=document`));
+  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+    "data-project-surface",
+    "document",
+  );
   await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "inspection");
   await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 10000 });

@@ -73,8 +89,9 @@ test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABL
   // Selection must not push documentId into the URL.
   await expect(page).not.toHaveURL(new RegExp(`documentId=${documentId}`));
   await page.getByTestId("doc-action-open").click();
-  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
-  await expect(page.getByTestId("document-read")).toBeVisible();
+  // Deep-link is contractual — wait for URL + read surface (guards load()/URL race).
+  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`), { timeout: 20_000 });
+  await expect(page.getByTestId("document-read")).toBeVisible({ timeout: 15_000 });

   // B2 — reload keeps deep-link; no mutation claimed on open
   await page.reload();

```

## 8. Tests locaux exécutés

| Suite | Résultat |
| --- | --- |
| Playwright ciblé (git-surface, g4, nora-pub, git-collab) | PASS |
| Playwright **full** local | **109 PASS / 5 SKIPPED** |
| g4 rejoué 3× après fix nav settle | 3/3 PASS |
| Vitest unit/PG | non rejoués ce cycle final (PASS CI) |

## 9. Runtime / RECETTE

| Champ | Statut |
| --- | --- |
| Correction runtime | Oui — race deep-link document (page projet) |
| RECETTE SOURCE/BUILD | **INCHANGÉS** `10128bdb` / `2uHrYBsQUvf6aii40hMpj` |
| Cutover / migration / secrets | **NONE** |
| Acceptation Morris du nouveau runtime | **NON** — postérieur au build RECETTE ; GO merge distinct |

## 10. Commits / pushes PR #690

- Fast-forward successive jusqu'à `f11de65f98c3a0429e45c9f2c3935633840aec12`
- Force-push : **NONE**
- Nouvelle PR : **NONE**

## 11. CI finale (HEAD exact)

- Run Next : https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361
- headSha : `f11de65f98c3a0429e45c9f2c3935633840aec12`
- conclusion : **success**

### Jobs

- Detect SFIA Studio Next changes: completed/success url=https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361/job/137252033079
- Build and validate SFIA Studio Next: completed/success url=https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361/job/137252094334
- SFIA Studio Next Required Gate: completed/success url=https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361/job/137256921296

### `gh pr checks`

```
Build and validate SFIA Studio Next	pass	16m43s	https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361/job/137252094334
SFIA Studio Next Required Gate	pass	2s	https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361/job/137256921296
SFIA Studio Required Gate	pass	4s	https://github.com/mcleland147/sfia-workspace/actions/runs/45036729287/job/137252091698
Build and validate SFIA Studio	skipping	0	https://github.com/mcleland147/sfia-workspace/actions/runs/45036729287/job/137252093000
Detect SFIA Studio Next changes	pass	11s	https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361/job/137252033079
Detect SFIA Studio changes	pass	11s	https://github.com/mcleland147/sfia-workspace/actions/runs/45036729287/job/137252033036

```

| Contrôle | Statut |
| --- | --- |
| Detect Next | PASS |
| TypeScript / ESLint / Build / Vitest unit / Vitest PG | PASS (dans job validate) |
| Playwright BROWSER FAKE | PASS |
| Secret scan / whitespace | PASS |
| SFIA Studio Next Required Gate | **PASS** |
| SFIA Studio Required Gate | PASS |
| Build SFIA Studio | SKIPPED (hors scope Next) |

## 12. Réserves E08 inchangées

MERGE REAL NOT PROVEN · Nora LIVE merge non exercé · WRITE-07 · PREVIEW PARTIAL · audits REAL partiels · protections GitHub non totalement observables · R6 non effectué · NO RELEASE · STABLE NOT AVAILABLE · E08 NOT ADOPTED.

## 13. Gate Morris suivant

1. ChatGPT relit ce handoff + PR #690 @ `f11de65f…` + checks GitHub.
2. Morris prononce séparément le **GO merge**.
3. Après merge seulement : post-merge, sync roadmap, clôture documentaire.

**Aucun merge automatique.**

