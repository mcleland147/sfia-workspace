# Review Pack FULL — G4 post-merge Pilotage CI stabilisation — 2026-11-08T13:30:57+01:00

**Verdict :** `G4 POST-MERGE STABILIZED — FIX PR MERGED — MAIN CI GREEN — NO RELEASE`
**PR #670 MERGED** · **ML4 NOT STARTED** · **NO ADOPTED / F2/G5 NOT PROVEN** · **STABLE/RELEASE NOT AVAILABLE**

## 1. Date / fuseau / cycle

- Date: 2026-11-08 · fuseau Europe/Paris (CET)
- Cycle: 14 Post-merge (+9 QA +8 Delivery +13 PR readiness) · RUN corrective · Critical
- Knowledge Contract: SFIA v2.6 routing/template ; CKC cycle-14 dédié ABSENT — FALLBACK

## 2. Git Truth Check (worktree correctif isolé)

| | |
|---|---|
| pwd | `/Users/morris/Projects/sfia-workspace-next-g4-fix-postmerge-ci` |
| branch | `fix/next-g4-postmerge-pilotage-ci-stability` |
| Base | `origin/main@ebf3d1503f6dd3c0180e1dec5ffeca82eb136d45` (pre-fix) |
| Tip correctif | `0b5326d6e169861d25b01821aafd319a33cdcc93` |
| origin/main (après merge #670) | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| Merge parents | `ebf3d150…` + `0b5326d6…` |
| Tree merge | `7969b45559e9bbfe2c855e9a44be2b9ccb5341fc` |
| Non touchés | WT G4 construction ; RECETTE figée `29535d07`/`U2HrgAwriuzf6f1YI0rRK` ; `.tmp-sfia-review` evidence historique + `g2-source/scripts/tmp/` **jamais ajoutés** |

## 3. Incident initial (post-merge #669)

| | |
|---|---|
| Merge #669 | `ebf3d150` tree `6f144851` |
| CI PR pré-merge | https://github.com/mcleland147/sfia-workspace/actions/runs/42475102674 — Playwright **12/12 PASS** sur `ee6d11e9` |
| CI main post #669 | https://github.com/mcleland147/sfia-workspace/actions/runs/42477468119 — **FAIL** Playwright **10/12** |
| Échecs | `pilotage-panel` ; `b13-authority-legend` après clic Pilotage |

## 4. Diagnostic discriminant

- Reproduction locale E2E isolée : flaky/race sur navigation Pilotage juste après bootstrap projet.
- Cause racine **produit** (pas « flaky alone ») : course entre `load()` et `selectSurface('pilotage')`. Si `load()` termine avant que `router.push(?surface=pilotage)` ait mis à jour `window.location`, `applyUrlDocumentState` réapplique `travail` et écrase Pilotage → panneau / légende B13 absents.
- Explique PR 12/12 vs main 10/12 sur arbre identique : timing CI / merge commit timing.

## 5. Correctif

Fichiers (tip `0b5326d6`) :

1. `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` — `pendingSurfaceRef` conserve l'intention chrome/rail pendant `load()` ; `searchParams` effect clear quand URL rattrape.
2. `projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts` — `openPilotageSurface` : click `surface-pilotage` + URL `/[?&]surface=pilotage\b/` + `pilotage-panel` visible (15s). Assertions D5/D6 / B13 / cycle ACTIVE **conservées**.
3. `construction/.../incident-postmerge-pilotage-ci-2026-11-08.md` — compte-rendu factuel.
4. `construction/delivery-history.md` — `DELIV-2026-11-08-G4-POSTMERGE-PILOTAGE-CI`.

### Diff complet — page.tsx

```diff
@@ -112,6 +112,8 @@ export default function ProjectPage() {
   const documentsRef = useRef<Doc[]>([]);
   const docUiRef = useRef<DocUiState>("READING");
   const reviseDraftRef = useRef("");
+  /** Surface chosen by chrome/rail while project load() is still in flight — must not be clobbered. */
+  const pendingSurfaceRef = useRef<Surface | null>(null);
@@ -142,6 +144,7 @@ export default function ProjectPage() {
   function selectSurface(next: Surface) {
+    pendingSurfaceRef.current = next;
     setSurface(next);
@@ -405,17 +408,26 @@
+      // If the user already selected a surface while load() was in flight, prefer that intent
+      // when the URL has not yet caught up (router.push pending) — otherwise Pilotage/Journal
+      // flash back to travail and e2e/CI lose pilotage-panel.
       const live = ...
       const qSurface = parseSurface(live.get("surface"));
       const qDocId = live.get("documentId");
-      applyUrlDocumentState(docs, qSurface, qDocId);
+      const pendingSurface = pendingSurfaceRef.current;
+      const effectiveSurface = qSurface ?? pendingSurface;
+      applyUrlDocumentState(docs, effectiveSurface, qDocId);
       const rawSurface = live.get("surface");
       if (!rawSurface || (rawSurface && !qSurface)) {
-        syncSurfaceUrl(qSurface ?? "travail", qSurface === "document" ? qDocId : null, "replace");
+        const target = effectiveSurface ?? "travail";
+        syncSurfaceUrl(target, target === "document" ? qDocId : null, "replace");
+      }
+      if (qSurface && pendingSurface && qSurface === pendingSurface) {
+        pendingSurfaceRef.current = null;
       }
@@ -440,6 +452,9 @@
     applyUrlDocumentState(documentsRef.current, qSurface, qDocId);
+    if (qSurface && pendingSurfaceRef.current === qSurface) {
+      pendingSurfaceRef.current = null;
+    }
```

### Diff complet — ml3-pilotage.spec.ts (extrait)

```diff
+async function openPilotageSurface(page: import("@playwright/test").Page) {
+  await page.getByTestId("surface-pilotage").click();
+  await expect(page).toHaveURL(/[?&]surface=pilotage\b/);
+  await expect(page.getByTestId("pilotage-panel")).toBeVisible({ timeout: 15000 });
+}
-  await page.getByRole("button", { name: "Pilotage" }).click();
-  await expect(page.getByTestId("pilotage-panel")).toBeVisible();
+  await openPilotageSurface(page);
```
(même helper appliqué aux scénarios B13 C02/R1, F01/F02, C03 — assertions métier inchangées)

## 6. QA locale (fix WT)

| Contrôle | Résultat |
|---|---|
| tsc | OK |
| unit (`STUDIO_LANE=DEV`) | **123 PASS** |
| PG integration | **144 PASS** |
| Playwright full | **12/12 ×2 PASS** |
| Preuves | BROWSER FAKE + PG réel isolé E2E ; Nora LIVE / OAuth **NOT PROVEN** |

## 7. DEV 500 diagnostic + restore

- PID 59969 / parent 59964 : `next dev --turbopack -p 3100` sur WT **construction** G4.
- Cause opérationnelle : flake `next/font`/turbopack (connue) → `/login` 500.
- Restore **non destructive** : kill listen 3100 ; `next dev` **sans** turbopack sur WT construction attendu → `/login` **200**.
- RECETTE `:3200` inchangée : build id HTML `U2HrgAwriuzf6f1YI0rRK` ; `/login` **200**.

## 8. PR #670 + CI + merge conditionnel

| | |
|---|---|
| PR | https://github.com/mcleland147/sfia-workspace/pull/670 |
| Head | `0b5326d6e169861d25b01821aafd319a33cdcc93` |
| CI PR | https://github.com/mcleland147/sfia-workspace/actions/runs/42479791621 — **SUCCESS** ; unit 123 ; PG 144 ; Playwright **12 passed** |
| Gates | Next Required Gate SUCCESS ; Studio Required Gate SUCCESS ; Studio build SKIPPED (path filter) |
| Merge | `gh pr merge 670 --merge` (merge commit, pas squash/rebase, branche non supprimée) |
| Merge SHA | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| Pre-merge | MERGEABLE · CLEAN · tip inchangé |

## 9. Post-merge CI sur `main@c658f590`

| | |
|---|---|
| Run | https://github.com/mcleland147/sfia-workspace/actions/runs/42480139564 |
| Conclusion | **SUCCESS** |
| unit / PG / e2e | 123 / 144 / **12 passed** |
| Next Required Gate | SUCCESS |

**POST-MERGE GREEN** confirmé.

## 10. Git Review Index

| SHA | Rôle |
|---|---|
| `ebf3d150…` | main pré-correctif (merge #669) |
| `0b5326d6…` | tip correctif PR #670 |
| `c658f590…` | main post-merge #670 |
| tree `7969b455…` | arbre intégré |

## 11. Niveaux de preuve / fake-real

- D5/D6 Pilotage : BROWSER FAKE + PG E2E — **PASS** local ×2 + CI PR + CI main
- F2/G5 pixel : **NOT PROVEN**
- OAuth GitHub LIVE / Nora LIVE : **NOT PROVEN** (RECETTE fail-closed attendu)
- STABLE / RELEASE : **NOT AVAILABLE** · `NO RELEASE`
- ML4 : **NOT STARTED**

## 12. Réserves reportées

- F2/G5 NOT PROVEN
- OAuth / Nora LIVE NOT PROVEN sur RECETTE
- RECETTE G4 frozen `29535d07` / `U2HrgAwriuzf6f1YI0rRK` (non mutée)
- Roadmap/SEF/décisions non modifiés (proposition : noter G4 post-merge CI stabilized dans prochain cycle docs)
- DEV restored sans turbopack ; construction WT tip historique non avancé sur ce correctif

## 13. Verdict / recommandation

`G4 POST-MERGE STABILIZED — FIX PR MERGED — MAIN CI GREEN — NO RELEASE`

Reprise ML4 possible dès GO Morris distinct (build ML4 non démarré ici). Aucun STABLE/release.
