# SFIA Review Pack FULL — E08 Playwright assertion corrective (STOP)

## 1. Date / Git Truth

| Champ | Valeur |
| --- | --- |
| Europe/Paris | 2026-11-22 14:14:42 UTC+01:00 |
| UTC | 2026-11-22 13:14:42 UTC |
| Cycle | 8 — Delivery / correctif test ciblé |
| Profil | Standard · CORRECTIF · NO RELEASE |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| HEAD local = distant PR | `796b79c3e4982a45a2897a111618a84df6f60afa` |
| TREE | `b0783fdc0706aa802dfdc0be42a5d86b47b4f7c0` |
| Remote product | `796b79c3e4982a45a2897a111618a84df6f60afa` |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| PR | https://github.com/mcleland147/sfia-workspace/pull/690 |
| Commit correctif | **NONE** (STOP avant commit/push) |
| Push | **NONE** |

```
## feat/next-ensemble08-git-publications-nora...origin/feat/next-ensemble08-git-publications-nora
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
 M projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
```

## 2. Verdict

**E08 PR #690 — CORRECTIVE PREPARED — STOP — SECONDARY E2E FAILURE OUTSIDE MANDATE**

Les deux assertions autorisées sont corrigées en working tree et le motif connecté est prouvé.
`ensemble08-git-surface.spec.ts` : scénarios complets **3/3 PASS**.
`git-collaboration.spec.ts` : assertion connectée **PASS**, puis échec **hors mandat** sur `publication-inspection` (panneau non monté sur la page projet E08).
Conformément au mandat : pas d'élargissement des modifications, **pas de commit, pas de push**.

## 3. Décision Morris / périmètre

GO Morris : remplacer uniquement `/GitHub connecté/i` → `/GitHub est connecté/i` dans deux fichiers e2e.
Interdit : merge, nouvelle PR, runtime/UX, CI config, cutover, release/STABLE, contournement.

## 4. Sources consultées

- SEF, roadmap, decisions, environnements-recette, product-versioning
- routing guide + cycle execution template
- `.github/workflows/sfia-studio-next-ci.yml`
- Handoff précédent `sfia/review-handoff@e795d698…`
- Logs CI run `45023976388` (échec prouvé sur les deux assertions)

## 5. Cause exacte de l'échec CI initial

Workflow : https://github.com/mcleland147/sfia-workspace/actions/runs/45023976388
Job : Build and validate SFIA Studio Next — Playwright 107 PASS / **2 FAIL** / 5 SKIPPED.

Assertion obsolète : `toContainText(/GitHub connecté/i)`
Texte UX réel : `Votre compte GitHub est connecté. Vos dépôts autorisés sont accessibles.`
Le motif `GitHub connecté` n'accepte pas `GitHub est connecté` (token `est` intercalé).
Required Gate Next : FAIL par propagation.
TypeScript / ESLint / Build / Vitest unit / Vitest PG : PASS sur cette exécution.

## 6. Diff complet des deux assertions (working tree, non commité)

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
index a82cac55..50d36b40 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
@@ -37,7 +37,7 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
       await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
     }
     await page.getByTestId("connect-github").click();
-    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub connecté/i, {
+    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub est connecté/i, {
       timeout: 20_000,
     });
     await expect(page.getByTestId("github-connected-badge")).toBeVisible();
diff --git a/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts b/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
index 2b74ecc1..c1b0d50a 100644
--- a/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
@@ -43,7 +43,7 @@ test.describe("ML4 git collaboration corrective (SCRIPTED)", () => {
       await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
     }
     await page.getByTestId("connect-github").click();
-    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub connecté/i, {
+    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub est connecté/i, {
       timeout: 20_000,
     });
     // Refresh repos so SCRIPTED permission snapshot is current (write for documentary publish).

```

### Non-permissivité

| Texte | `/GitHub est connecté/i` |
| --- | --- |
| `…GitHub est connecté…` | MATCH |
| `GitHub n'est pas connecté` | **NO MATCH** |

## 7. Résultats Playwright ciblés (local SCRIPTED/FAKE)

Environnement : `STUDIO_E2E=1`, Nora fixture FAKE, `e2e-web-server.sh` force `STUDIO_GITHUB_PROVIDER=scripted`,
`DATABASE_URL` héritée RECETTE (:5434) **unset** pour laisser `.env.local` DEV (:5433).
Aucun `GITHUB_CLIENT_*` / App REAL injecté pour la course.

### Run 1 — deux fichiers

```
[WebServer] ◇ injected env (1) from .env.local

[WebServer] e2e-preflight OK: operator=sfia_next_dev → e2e=sfia_next_e2e container=sfia-next-dev-pg port=5433


Running 4 tests using 1 worker

(node:26234) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)


[1/4] tests/e2e/ensemble08-git-surface.spec.ts:14:7 › E08 GitRepositoriesSurface (SCRIPTED) › empty → explicit attach → tree → pubs → manage detach
[2/4] tests/e2e/ensemble08-git-surface.spec.ts:121:7 › E08 GitRepositoriesSurface (SCRIPTED) › mobile viewport keeps git empty / manage usable
[3/4] tests/e2e/ensemble08-git-surface.spec.ts:147:7 › E08 GitRepositoriesSurface (SCRIPTED) › disconnect confirmation can be cancelled without effect (11.07)
[4/4] tests/e2e/git-collaboration.spec.ts:13:7 › ML4 git collaboration corrective (SCRIPTED) › AT journey: inspect diff → authorize → dispatch → merge distinct
  1) tests/e2e/git-collaboration.spec.ts:13:7 › ML4 git collaboration corrective (SCRIPTED) › AT journey: inspect diff → authorize → dispatch → merge distinct 

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('main').getByTestId('git-surface').getByTestId('publication-inspection')
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('main').getByTestId('git-surface').getByTestId('publication-inspection') with timeout 5000ms
      - waiting for getByRole('main').getByTestId('git-surface').getByTestId('publication-inspection')


      56 |     const gitSurface = page.getByRole("main").getByTestId("git-surface");
      57 |     await expect(gitSurface).toBeVisible({ timeout: 20_000 });
    > 58 |     await expect(gitSurface.getByTestId("publication-inspection")).toBeVisible();
         |                                                                    ^
      59 |
      60 |     const panel = gitSurface.getByTestId("publication-inspection");
      61 |     const attach = panel.locator('[data-testid^="attach-repo-"]').first();
        at /Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts:58:68

    Error Context: test-results/git-collaboration-ML4-git--16ebc-→-dispatch-→-merge-distinct/error-context.md


  1 failed
    tests/e2e/git-collaboration.spec.ts:13:7 › ML4 git collaboration corrective (SCRIPTED) › AT journey: inspect diff → authorize → dispatch → merge distinct 
  3 passed (41.9s)

```

### Retry — git-collaboration seul

```
[WebServer] ◇ injected env (1) from .env.local

[WebServer] e2e-preflight OK: operator=sfia_next_dev → e2e=sfia_next_e2e container=sfia-next-dev-pg port=5433


Running 1 test using 1 worker

(node:26940) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)


[1/1] tests/e2e/git-collaboration.spec.ts:13:7 › ML4 git collaboration corrective (SCRIPTED) › AT journey: inspect diff → authorize → dispatch → merge distinct
  1) tests/e2e/git-collaboration.spec.ts:13:7 › ML4 git collaboration corrective (SCRIPTED) › AT journey: inspect diff → authorize → dispatch → merge distinct 

    Error: expect(locator).toBeVisible() failed

    Locator: getByRole('main').getByTestId('git-surface').getByTestId('publication-inspection')
    Expected: visible
    Timeout: 5000ms
    Error: element(s) not found

    Call log:
      - Expect "toBeVisible" getByRole('main').getByTestId('git-surface').getByTestId('publication-inspection') with timeout 5000ms
      - waiting for getByRole('main').getByTestId('git-surface').getByTestId('publication-inspection')


      56 |     const gitSurface = page.getByRole("main").getByTestId("git-surface");
      57 |     await expect(gitSurface).toBeVisible({ timeout: 20_000 });
    > 58 |     await expect(gitSurface.getByTestId("publication-inspection")).toBeVisible();
         |                                                                    ^
      59 |
      60 |     const panel = gitSurface.getByTestId("publication-inspection");
      61 |     const attach = panel.locator('[data-testid^="attach-repo-"]').first();
        at /Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts:58:68

    Error Context: test-results/git-collaboration-ML4-git--16ebc-→-dispatch-→-merge-distinct/error-context.md


  1 failed
    tests/e2e/git-collaboration.spec.ts:13:7 › ML4 git collaboration corrective (SCRIPTED) › AT journey: inspect diff → authorize → dispatch → merge distinct 

```

### Synthèse

| Spec | Résultat |
| --- | --- |
| `ensemble08-git-surface.spec.ts` (3 tests) | **PASS** |
| `git-collaboration.spec.ts` — assertion connectée | **PASS** (dépassée) |
| `git-collaboration.spec.ts` — `publication-inspection` visible | **FAIL** (5s, element not found) |

## 8. Analyse de l'échec secondaire (hors mandat)

Snapshot Playwright : surface Git E08 en état **empty** (`git-empty` / boutons Associer), sans `data-testid=publication-inspection`.

Preuve Git :
- `origin/main` monte encore `PublicationInspectionPanel` dans `app/projects/[projectId]/page.tsx`.
- HEAD E08 (`796b79c3…`) : **aucun** import/montage de `PublicationInspectionPanel` sous `web/src/app`.
- Le composant existe encore sous `web/src/components/integrations/PublicationInspectionPanel.tsx` mais n'est plus branché à la page projet.

Conséquence : si le correctif d'assertion seul était poussé, la CI passerait probablement l'assertion puis **échouerait ensuite** sur `publication-inspection` (défaut latente masquée par l'échec connecté).

Aucune adaptation de scénario n'a été entreprise (hors fichiers/motifs autorisés).

## 9. Preuve d'absence de modification runtime

- Diff suivi produit : uniquement les 2 fichiers e2e ( + `.tmp-sfia-review` non publié projet).
- `git diff HEAD -- projects/sfia-studio-next/web/src` : **vide** (0 octets).
- Aucun changement package/next config.
- RECETTE HTTP BUILD observé avant/après courses : `2uHrYBsQUvf6aii40hMpj` (**inchangé**).
- SOURCE runtime de référence reste `10128bdb…` / BUILD `2uHrYBsQ…`.

## 10. Commit / push / CI nouvelle

| Étape | Statut |
| --- | --- |
| Commit correctif | **NONE** |
| Push FF branche produit | **NONE** |
| Nouvelle exécution CI | **NONE** (HEAD PR toujours `796b79c3…`) |
| PR #690 base/head | `main` @ `a12f89a…` / head `796b79c3…` inchangé |

CI antérieure toujours la référence d'échec : run `45023976388`.

## 11. Réserves E08 inchangées

MERGE REAL NOT PROVEN · Nora LIVE merge non exercé · WRITE-07 · PREVIEW PARTIAL · audit D6/D7/D8 REAL partiel · protections GitHub non totalement observables · R6 non effectué · NO RELEASE · STABLE NOT AVAILABLE · E08 NOT ADOPTED.

## 12. Gate Morris / ChatGPT suivant

1. Qualifier l'échec secondaire `publication-inspection` (panneau démonté E08 vs test ML4 historique).
2. Autoriser explicitement **soit** :
   - un mandat élargi d'adaptation e2e `git-collaboration` au parcours E08 (attach `git-empty` + chemin publications actuel), **soit**
   - un push assertion-only en connaissance de cause (CI attendue rouge sur le défaut suivant).
3. Après CI verte seulement : GO merge Morris distinct pour PR #690.

**Aucun merge automatique.**

