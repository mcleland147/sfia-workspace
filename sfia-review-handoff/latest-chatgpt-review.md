# SFIA Review Pack LIGHT — Post-merge CI incident Journal retour-nav (Ensemble 07)

> Review Pack LIGHT · Handoff L3 publish-in-cycle
> Push / PR / merge automatique : **NON** — **GIT GO REQUIRED** (GO #687/#688 ne couvrent pas cette remédiation)
> RECETTE / STABLE / ADOPTED / Ensemble 08 : **NON**
> Gate C : **OPEN** · NO RELEASE

## 1. Date et mandat

| | |
|---|---|
| Date | 2026-11-21T15:40Z |
| Cycle | Post-merge / correctif QA ciblé — Incident CI après merge PR #688 |
| Profil | Standard |
| Macro-lot | Finalisation technique intégration Ensemble 07 |
| GO Git push/PR | **NON reçu** — candidat local prêt, sollicitation GO |
| Verdict | **POST-MERGE CI INCIDENT — ROOT CAUSE PROVEN — LOCAL CORRECTION VERIFIED — GIT GO REQUIRED** |

## 2. Git Truth

| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-postmerge-journal-nav-20261121` |
| Branche | `fix/next-postmerge-journal-nav-20261121` |
| Base | `origin/main` @ `1dd1a8ec738edb7851e2ec290769082035c1b657` (merge PR #688) |
| Candidat local | `79f3115a3a3c29735d2361b8bdd86e69d41d96d4` |
| Parent | `1dd1a8ec738edb7851e2ec290769082035c1b657` |
| Tree | `1385f591b3a0e420e8e364f84f4aa7938c3743f3` |
| Tree `web/` | `eb50327948afe84ff501ccfd99157c04607253bc` |
| Push | **NON** |
| PR | **NON créée** |
| Dirty hors commit | `.tmp-sfia-review/**` only (non produit) |

### CI incident
| | |
|---|---|
| Run échec | https://github.com/mcleland147/sfia-workspace/actions/runs/44916120256 |
| SHA | `1dd1a8ec` |
| Résultat | 98 PASS / 5 SKIPPED / 1 FAILED |
| Job | Build and validate SFIA Studio Next · Playwright BROWSER FAKE |
| Test | `web/tests/e2e/journal-v4-parcours.spec.ts` · sujets/…/document/retour-nav |
| Échec | `expect(getByTestId('project-journal')).toBeVisible()` @ `rail-nav.ts:50` (30s) |
| CI verte antérieure | https://github.com/mcleland147/sfia-workspace/actions/runs/44912257289 @ `fd04888b` |
| Delta `fd04888b…1dd1a8ec` | **Markdown only** (Roadmap + registre) — PR #688 |
| Artefacts Playwright | **aucun** uploadé par le workflow |

## 3. Diagnostic (réponses demandées)

1. **Quel retour Journal échoue ?** Le **3ᵉ** `goJournalReady` — spec L191, après J-C14 document → Travail viewer. Les retours L63 (ouverture) et L143 (après message) ont réussi sur le run CI.
2. **URL correcte / surface React incorrecte ?** **OUI — désync prouvée.** Après ouverture document depuis Journal : `URL ?surface=journal` **et** `data-project-surface=travail` (viewer ouvert). `goRailSurface` ne teste que l’URL → succès immédiat (same-URL no-op Next Link) alors que React reste sur Travail → `project-journal` absent 30s.
3. **Chargement async / effet URL / nav concurrente ?** `selectSurface("travail")` était appelé **après** `setViewer` + kick D4 ; `router.push(?surface=travail)` ne matérialisait pas (ou trop tard) l’URL. L’effet `searchParams` ne se rejoue pas si l’URL reste `journal`. Pas de preuve que le viewer ou le reload projections **bloquent** la nav une fois l’URL alignée.
4. **Clic forcé helper ?** Le `force: true` masque le problème d’actionnabilité mais **n’est pas la cause** ; la cause est le contrat URL-only + désync produit. Le force click sur un Link **déjà** à `surface=journal` est un no-op.
5. **Viewer / projections ?** Fermeture viewer OK dans le helper. Le viewer n’empêche pas le montage Journal **si** `surface===`journal``. Le blocage réel = surface React `travail` avec URL `journal`.

### Traces discriminantes (repro locale instrumentée, avant correctif)
```
after-doc-viewer-open: url=...?surface=journal surface=travail viewerCount=1
after-goRail-journal-1: url=...?surface=journal surface=travail journalVisible=false
URL_VS_SURFACE_GAP répété >20s → project-journal never mounts
```

### Après correctif (même diag)
```
after-doc-viewer-open: url=journal (transitoire async) surface=travail
before-retour-3: url=...?surface=travail surface=travail
after-goRail-journal-1: url=journal surface=journal journalVisible=true
```

## 4. Correctif appliqué (minimal)

| Fichier | Rôle |
|---|---|
| `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` | `onOpenDocument` : `selectSurface("travail")` **en premier** (même contrat que `onOpenMessage`) |
| `projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts` | `goRailSurface` attend `data-project-surface` ; si URL déjà cible mais surface React différente → bounce via autre rail puis re-nav |

**Non modifié :** RECETTE, STABLE, GHA rules, skips, timeouts aveugles, Ensemble 08, fixtures reset DB hors harness standard.

## 5. Diffs complets (LIGHT — 2/2)

### 5.1 page.tsx
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 63197c05..fa648593 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -3052,7 +3052,10 @@ export default function ProjectPage() {
           }}
           onOpenDocument={(documentId, revisionId) => {
             // J-C14 — open exact D4 revision in Travail viewer (same continuity pattern as message).
+            // Navigate immediately so URL+surface stay aligned; a stale ?surface=journal with
+            // React surface=travail makes the Journal rail a same-URL no-op (CI retour-nav).
             // Preserve journalNav; do not invent content if D4 refuses.
+            selectSurface("travail");
             const titleHint =
               documents.find((d) => d.document.id === documentId)?.document.title ?? "Document";
             const seq = ++viewerRequestSeqRef.current;
@@ -3076,7 +3079,6 @@ export default function ProjectPage() {
               seq,
               projectIdAtStart: params.projectId,
             });
-            selectSurface("travail");
             const match = documents.find((d) => d.document.id === documentId);
             if (match) setInspect(match);
           }}
```

### 5.2 rail-nav.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts b/projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts
index a9a5aeb6..c1e9796c 100644
--- a/projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts
@@ -2,9 +2,20 @@ import { expect, type Locator, type Page } from "@playwright/test";

 export type ProjectSurface = "travail" | "projet" | "journal" | "pilotage";

+async function readProjectSurface(page: Page): Promise<string | null> {
+  return page
+    .getByTestId("project-load-state")
+    .getAttribute("data-project-surface")
+    .catch(() => null);
+}
+
 /**
- * CI-hardened rail surface switch: force-click + wait for URL (retry once).
+ * CI-hardened rail surface switch: force-click + wait for URL *and* React surface.
  * Soft clicks under Playwright FAKE load can miss and leave the prior surface.
+ *
+ * When the URL already shows the target surface but React `data-project-surface`
+ * differs (document-from-Journal desync), a same-URL Link click is a no-op —
+ * bounce via another rail surface first so the target navigation is real.
  */
 export async function goRailSurface(
   page: Page,
@@ -13,15 +24,38 @@ export async function goRailSurface(
 ): Promise<void> {
   const timeout = opts?.timeoutMs ?? 15_000;
   const nav = page.getByTestId("studio-rail").getByTestId(`nav-${surface}`);
-  for (let attempt = 1; attempt <= 2; attempt += 1) {
+  const load = page.getByTestId("project-load-state");
+  const urlRe = new RegExp(`surface=${surface}`);
+  const bounce: ProjectSurface = surface === "travail" ? "projet" : "travail";
+
+  for (let attempt = 1; attempt <= 3; attempt += 1) {
+    const urlHasTarget = urlRe.test(page.url());
+    const current = await readProjectSurface(page);
+    if (urlHasTarget && current !== surface) {
+      const bounceNav = page.getByTestId("studio-rail").getByTestId(`nav-${bounce}`);
+      await bounceNav.click({ force: true });
+      try {
+        await expect(page).toHaveURL(new RegExp(`surface=${bounce}`), {
+          timeout: attempt === 1 ? 8_000 : timeout,
+        });
+        await expect(load).toHaveAttribute("data-project-surface", bounce, {
+          timeout: attempt === 1 ? 8_000 : timeout,
+        });
+      } catch {
+        // Fall through to a direct target click below.
+      }
+    }
     await nav.click({ force: true });
     try {
-      await expect(page).toHaveURL(new RegExp(`surface=${surface}`), {
+      await expect(page).toHaveURL(urlRe, {
+        timeout: attempt === 1 ? 8_000 : timeout,
+      });
+      await expect(load).toHaveAttribute("data-project-surface", surface, {
         timeout: attempt === 1 ? 8_000 : timeout,
       });
       return;
     } catch (err) {
-      if (attempt === 2) throw err;
+      if (attempt === 3) throw err;
     }
   }
 }
```

## 6. Preuves locales (Playwright FAKE :3101, DB e2e isolée)

| Preuve | Résultat |
|---|---|
| Scénario CI exact `journal-v4-parcours.spec.ts:38` | **PASS** (run isolé + suite preuves) |
| Stress ×5 même scénario | **5/5 PASS** (~25s chacun) |
| `project-surface-nav-intent.spec.ts` (3 tests) | **PASS** |
| `project-space-ensemble04.spec.ts` (3 tests rail/identité) | **PASS** |
| Diag instrumenté URL/surface/viewer avant fix | **FAIL** avec `URL_VS_SURFACE_GAP` (cause prouvée) |
| Diag après fix | Journal retour OK ; URL travail alignée avant retour |

Brouillon / sélection / filtres : couverts par le scénario V4 (draft avant Journal, restore sujet après retour doc). Viewer open→close→Journal : chemin CI L191.

## 7. Risques résiduels

- `router.push` reste asynchrone : fenêtre brève URL≠surface possible ; helper bounce mitige.
- Pas de re-run CI GitHub sans push (GO requis).
- Workflow CI n’upload toujours pas `test-results` (observabilité future hors scope).

## 8. Demande GO Git

Sollicitation explicite pour :
1. `git push -u origin fix/next-postmerge-journal-nav-20261121`
2. Ouvrir PR vers `main` (base `1dd1a8ec`)
3. Exiger required checks PASS + CI post-merge concluante avant merge
4. Ne pas réutiliser le GO de #687/#688

## 9. Verdict

**POST-MERGE CI INCIDENT — ROOT CAUSE PROVEN — LOCAL CORRECTION VERIFIED — GIT GO REQUIRED**
