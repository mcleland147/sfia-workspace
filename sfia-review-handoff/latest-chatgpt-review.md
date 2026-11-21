# SFIA Review Pack FULL — Ensemble 07 · Gel Git local correctif + preuve concurrence GET A/B

> Mono-cycle de finalisation. Handoffs antérieurs :
> - Diagnostic Equip'Campus `78824f10`
> - Correctif fonctionnel `f346a531`
> - Qualification navigateur `79c3a528`
> - Consolidation QA finale `83c364f6` / blob `a6740ae8`
> - PV utilisateur `7c96bbed`

## 1. GO Morris et périmètre

| | |
|---|---|
| Date | 2026-11-21 |
| GO Morris | finaliser preuve concurrence réseau + **commit local unique** de gel Ensemble 07 |
| Environnement | DEV/test isolé Playwright `:3101` + `sfia_next_e2e@:5433` + fixture Nora |
| Interdit | push projet · PR · merge · déploiement RECETTE · Nora LIVE · `git add -A` |
| Versioning | NO RELEASE · classe PATCH envisagée sans numéro · Gate C OPEN |
| Macro-lot | Ensemble 07 existant — pas de nouveau macro-lot |

## 2. Git Truth avant / après

### Avant (préconditions vérifiées)

| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD | `6ecdb987ee867a04ff816b699eb8870ac200db0a` |
| Tree | `d0ad47ff515676f1c033a39030e886859f7272f7` |
| Base construction | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| origin/main | `542da1de917867b6bbda8b2b57d100552711c9aa` |
| merge-base HEAD/main | `6e93a33d…` (ascendance préservée — **pas** de rebase) |

### Après gel local

| | |
|---|---|
| HEAD local | `c500df9ce58575783bcb842bf83658e1837990a3` |
| Tree | `3794e3443906e144460e3f00ba1e82bb3504fdd3` |
| Parent | `6ecdb987ee867a04ff816b699eb8870ac200db0a` (= HEAD historique attendu) |
| origin/main | `542da1de917867b6bbda8b2b57d100552711c9aa` (inchangé pour ce cycle) |
| merge-base | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| Push projet | **NONE** (branche sans upstream / non poussée) |

```
HEAD=c500df9ce58575783bcb842bf83658e1837990a3
TREE=3794e3443906e144460e3f00ba1e82bb3504fdd3
PARENT=6ecdb987ee867a04ff816b699eb8870ac200db0a
BRANCH=sfia/next-ensemble07-projet-trajectoire-delivery
MAIN=542da1de917867b6bbda8b2b57d100552711c9aa
MB=6e93a33d64dfeea2eab88fb7896d733b34053f97
commit c500df9ce58575783bcb842bf83658e1837990a3
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Sat Nov 21 04:07:48 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Sat Nov 21 04:07:48 2026 +0100

    fix(next): stabilize Ensemble 07 governed pilotage continuity

    Consolidate post-Equip'Campus continuity corrective with durable stale-GET
    guard, rail URL revalidation, restitution/normalize owners, and browser A/B
    race proof — local freeze only, no project push.

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
M	projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
M	projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
A	projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/service.ts
A	projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
M	projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/durable-refresh-guard.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts

```

## 3. État DEV / RECETTE / LIVE

| Lane | État |
|---|---|
| Playwright E2E | `:3101` / DB `sfia_next_e2e` / `STUDIO_FORCE_NORA_FIXTURE=1` — OK |
| Operator PG | `:5433` container `sfia-next-dev-pg` — OK |
| RECETTE | `:3200` HTTP **200** RO · BUILD `armX_D1HJzN6q-4MuDpYv` · SHA `6ecdb987…` · DB `:5434` — **non mutée** |
| LIVE Nora | **NOT RUN** — aucun nouvel appel fournisseur |
| STABLE | NOT AVAILABLE |

## 4. Sources lues (SHA)

- Handoff QA finale `83c364f6` / blob `a6740ae8` — `sfia-review-handoff/latest-chatgpt-review.md`
- Contrat d'exécution Morris 2026-11-21 (ce cycle)
- As-built + delivery-history locaux (mis à jour dans le commit)
- Code propriétaire `page.tsx` / `durable-refresh-guard.ts` / Continuity spec

## 5. Réserve concurrence (avant ce cycle)

La revue ChatGPT sur `83c364f6` acceptait le garde unitaire mais jugeait le scénario Playwright insuffisamment discriminant : pas de preuve explicite que A et B ont été interceptés, que B a été appliquée avant libération de A, ni qu'une projection périmée n'écrase pas B. Un simple `setTimeout(50)` n'était pas une preuve d'ordonnancement.

## 6. Modification exacte (preuve + correctif propriétaire)

### 6.1 Test QA-FINAL-01 (renforcé)

Fichier : `ensemble07-browser-continuity.spec.ts`

- Phases explicites `await_a|hold_a|await_b|done`
- Barrières/promesses : `aIntercepted`, `releaseA`, `bIntercepted`, `bFulfilled`, `aFulfilled` + timeouts diagnostiques
- Marqueurs UI : `E07_FRESH_B_PROJECTION_MARKER` / `E07_STALE_A_PROJECTION_MARKER` (objective)
- Ordre imposé : A intercepté+tenu → B fulfilled+visible → A relâché → assert pas d'écrasement
- Assert GET métier post-course inchangé (cycleId/status/type)
- Strict Mode : tous les GET de phase A restent stale+held

### 6.2 Correctif produit révélé par le test

Le rail Studio navigue via `<Link>` (URL), pas via `selectSurface`. L'effet `searchParams` incrémentait la génération **sans** appeler `refreshDurablePilotage` → aucun GET concurrent n'était produit sur le chemin réel.

Correctif borné dans `page.tsx` (effet URL) : après `surfaceNavGenRef++`, appeler `refreshDurablePilotage({ generation, projectId })`. Propriétaire existant de la revalidation — pas de nouveau bus/cache.

## 7–8. Git Review Index (commit local non poussé)

**Commit :** `c500df9ce58575783bcb842bf83658e1837990a3`
**Tree :** `3794e3443906e144460e3f00ba1e82bb3504fdd3`
**Parent :** `6ecdb987ee867a04ff816b699eb8870ac200db0a`

### Fichiers ajoutés (A) — contenu intégral § ci-dessous

| Path | Blob HEAD |
|---|---|
| `projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts` | `f2d121f71e17813690703ade5fb2b730eeb9ab1b` |
| `projects/sfia-studio-next/web/tests/unit/durable-refresh-guard.test.ts` | `0fc1004c0e18b421d8d8b43d40942fd087277727` |
| `projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts` | `f23edac86f7720a9e6f51a20844193bd00fc2bbc` |
| `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts` | `74998a428caa1619aad1883fc2514b98429a4371` |
| `projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts` | `75c77d97d5b6371d7e5ce755f32040b513be17c5` |
| `projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts` | `df2f12331e26be52ce6559a1d4513849aa337d9e` |
| `projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts` | `dbd802d762f4d3254bd646a955877e9dfa862623` |

### Fichiers modifiés (M)

| Path | Statut |
|---|---|
| `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md` | M |
| `projects/sfia-studio-next/construction/delivery-history.md` | M |
| `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` | M |
| `projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx` | M |
| `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts` | M |
| `projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts` | M |
| `projects/sfia-studio-next/web/src/domains/conversation/service.ts` | M |
| `projects/sfia-studio-next/web/src/domains/pilotage/intent.ts` | M |
| `projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts` | M |
| `projects/sfia-studio-next/web/src/domains/pilotage/service.ts` | M |
| `projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts` | M |
| `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts` | M |

**19 chemins** au total (7 A + 12 M). Stage par chemins explicites — **pas** `git add -A`.

## 9. Protocole scénario A/B

1. Baseline ACTIVE Cadrage sans interception
2. Installer route exacte `/api/projects/:id` (pas `/pilotage`)
3. Phase A : openSurface(pilotage) → GET(s) tenus ; payload STALE_MARKER
4. Phase B : openSurface(projet) → GET fresh FRESH_MARKER ; attendre visible
5. Assert STALE absent
6. releaseA ; await aFulfilled
7. Assert FRESH toujours visible ; STALE toujours absent ; API durable inchangée

## 10. Preuve ordonnancement

Résultat suite continuity (après correctif URL) :

```
7 passed (30.2s)
… QA-FINAL-01 — stale GET must not overwrite newer projection (1.4s) ✓
… BROWSER-06 … ✓
```

Le test **échoue** si A/B non interceptés, B non traité avant A, A jamais revenu, projection fraîche absente, ou écrasement stale.

## 11. Tests de régression (arbre final = tree du commit)

| Contrôle | Résultat |
|---|---|
| TypeScript `tsc --noEmit` | PASS (exit 0) |
| Unitaires globaux | **706 PASS** / 88 files |
| PostgreSQL globaux | **525 PASS** / 34 files |
| BROWSER Continuity | **7 PASS** |
| QA-FINAL-01 concurrence | **PASS** (ordonnancement prouvé) |
| Parcours A–F | **7 PASS / 2 SKIP** (A2, D2 justifiés) |
| Build Next | PASS |
| LIVE | NOT RUN |
| RECETTE | non mutée (HTTP 200 RO) |

## 12. Stage et exclusions

### Inclus (commités)

Voir Git Review Index §7–8.

### Exclus et **préservés** (hors commit)

- `.tmp-sfia-review/chatgpt-review.md` (pack local)
- `projects/.tmp-sfia-review/ensemble07-browser-evidence/*.png`
- scripts E07 non suivis (`e07-*.mts`, `_dbg-e07-process.mts`, `_e07-recapture-08.mts`)
- `node_modules/`, `.env*`, builds, logs, caches

Aucun secret stageé. Aucun changement étranger dans l'index.

## 13. Commit local — identité

| | |
|---|---|
| SHA | `{head}` |
| Tree | `{tree}` |
| Parent | `{parent}` |
| Message | `fix(next): stabilize Ensemble 07 governed pilotage continuity` |
| Fichiers | 19 (1584 insertions, 51 deletions) |

## 14. Relecture du diff commité

Diffs des fichiers **modifiés** (complets) :

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
index 7c7ac2f0..1915e58a 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
@@ -1,13 +1,13 @@
 # Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

-**Statut:** construction DEV corrective — NO RELEASE · stabilisation fonctionnelle
-**Base Git:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
-**Branche:** `sfia/next-ensemble07-projet-trajectoire-delivery`
-**Date:** 2026-11-20 (stabilisation fonctionnelle — UX gelée)
+**Statut:** construction DEV corrective — NO RELEASE · candidat Git local figé (post-RECETTE Equip'Campus)
+**Base Git figée RECETTE (immuable):** `6ecdb987ee867a04ff816b699eb8870ac200db0a` · tree `d0ad47ff515676f1c033a39030e886859f7272f7`
+**Branche DEV:** `sfia/next-ensemble07-projet-trajectoire-delivery` — gel local correctif (parent = base RECETTE)
+**Date:** 2026-11-21 (correctif intégré UAT-02/06/08/09/10/11/12 + QA concurrence GET)

 ## Architecture retenue

-Option A hybride (dossier §8.1) + corrections P0 stabilisation :
+Option A hybride (dossier §8.1) + corrections P0 stabilisation + **correctif continuité Pilot/Nora/Studio** :

 1. Après `createProjectCommand` confirmé : `ensureInitialQualification` (retry) **avant** `continueAfterProjectCreated`, puis `kickInitialQualificationProcessing` (P0-05).
 2. Kick uniquement depuis create / reconcile POST — **jamais depuis GET**.
@@ -15,8 +15,19 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation :
 4. `resultJson.assistantContent` durable pour reprise exacte message (P0-02).
 5. Lien `preparation_project_links.initial_qualification_expected` (migration 016) : legacy = false → pas de verrou synthétique (P0-04).
 6. RETAIN conversationnel résout la PROPOSED courante côté serveur (FIX-08) — pas de cible D5 dans le body USER_MESSAGE.
-7. Forecast déterministe + `validateStructuredForecast` (FIX-07) — LIVE Nora NOT PROVEN.
+7. Forecast déterministe + `validateStructuredForecast` (FIX-07) — LIVE Nora NOT PROVEN ce cycle.
 8. Documents « en cours » = statut `SAVING` uniquement (FIX-11).
+9. **Normalisation `cycleType`** à la frontière classify D5 (`cycle-type-normalize.ts`) — variants sûrs (`cadrage`→`CADRAGE`) ; inconnus refusés sans remap silencieux.
+10. **Catalogue cycles** injecté dans le contexte Nora (`nora-context.ts`) — identifiants + libellés seulement, pas les fiches CKI.
+11. **Restitution post-effet** déterministe (`composePilotageEffectRestitution`) avant persistance du message assistant — APPLIED / REJECTED / CONFLICT / UNKNOWN / ALREADY_APPLIED.
+12. **Projection fil Travail** : dumps techniques mission filtrés en lecture (`listMessages`) ; nouveaux continues métier sans `projectId=` brut.
+13. **Sync surfaces** : `selectSurface` et l'effet URL `searchParams` (rail `<Link>`) déclenchent `refreshDurablePilotage` — projection pilotage complète (+ messages) via GET projet, sans F5, sans mutation.
+14. **Projections de tour** : `listTurnProjections` expose aussi `pilotageEffect` (sibling `resultJson`) pour corrélation API/UI.
+15. **Fixture E2E** : OPEN émet `cycleType="cadrage"` (frontière LIVE) ; GO naturel + RETAIN + type inconnu enregistrés.
+16. **Stale GET guard** : `shouldApplyDurableRefresh` (génération + projectId) appliqué **avant** tout `setState` dans `refreshDurablePilotage`.
+17. **Trajectoire vs ACTIVE** : si cycle ACTIVE, les bandeaux qualification (CLARIFICATION/…) n'occultent plus parcours/CKI.
+18. **CKI UI** : `data-testid=trajectory-cki-id|trajectory-cki-absent` pour assertions navigateur strictes.
+19. **Course GET A/B** : QA-FINAL-01 Playwright prouve barrières A tenu → B appliqué+observable → A relâché sans écrasement (marqueurs objectifs).

 ## Persistance

@@ -32,6 +43,11 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation :
 | `web/src/domains/pilotage/initial-qualification.ts` | ensure / process / assert admission |
 | `web/src/domains/pilotage/forecast-builder.ts` | séquence 1–3 cycles (déterministe FAKE) |
 | `web/src/domains/pilotage/qualification-lock.ts` | règles de verrou compositeur |
+| `web/src/domains/pilotage/cycle-type-normalize.ts` | normalisation cycleType LIVE→D5 |
+| `web/src/domains/pilotage/nora-context.ts` | snippets pilotage + catalogue cycles |
+| `web/src/domains/conversation/pilotage-effect-restitution.ts` | restitution métier post-effet + filtre dumps |
+| `web/src/domains/conversation/service.ts` | compose restitution avant commit ; `listMessages` projection |
+| `web/src/app/projects/[projectId]/page.tsx` | refresh pilotage au changement de surface |
 | `web/src/components/figma/TrajectoryBoard.tsx` | surface Trajectoire 09.02/07/10/11 |
 | `web/src/components/figma/SasCreateProgressPopup.tsx` | pop-up SAS 06 allégée |
 | `web/src/components/figma/ProjectOverview.tsx` | 09.01 / 09.06 |
@@ -39,14 +55,14 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation :

 ## Preuves

-- Unit: `ensemble07-forecast-builder`, `ensemble07-qualification-lock`, `ensemble07-ensure-idempotent`
-- Integration PG: `ensemble07-initial-qualification.pg.test.ts` (create→propose, idempotence, lock admission, clarification, failure)
-- Build: `npm run build` OK
-- Figma: 13/13 captures MCP locales sous `.tmp-sfia-review/ensemble07-evidence/figma/`
+- Unit: `ensemble07-forecast-builder`, `ensemble07-qualification-lock`, `ensemble07-ensure-idempotent`, `ensemble07-cycle-type-normalize` (`cadrage`→`CADRAGE`), `ensemble07-pilotage-effect-restitution`
+- Integration PG: `ensemble07-initial-qualification.pg.test.ts` (OPEN avec `cycleType=cadrage` → ACTIVE CADRAGE), `ml3-pilotage`, `intent-continuity-global`
+- LIVE Nora fournisseur : **NOT RUN — GATE REQUIRED** (pas de nouvel appel fournisseur ce cycle)
+- RECETTE `:3200` : **non mutée**

 ## Réserves connues

-- Fidélité visuelle pixel des 13 frames : itérations runtime encore requises avant READY visuel.
-- Vues détail 09.03 / 09.04 / 09.05 : projection partielle (bilan / CKI éditorial) à enrichir.
-- GO conversationnel D6→D5 : capacités PilotagePanel conservées ; parcours conversationnel principal à prouver en e2e navigateur.
-- LIVE Nora fournisseur : NOT PROVEN (fixture DEV).
+- Fidélité visuelle pixel des 13 frames : hors mandat correctif (OUT Figma).
+- LIVE cognitive réelle sur projet synthétique DEV : gate Morris + autorisation fournisseur requises.
+- CONFLICT/UNKNOWN : UNIT DETERMINISTIC ; BROWSER NOT RUN ce cycle.
+- LIVE Nora fournisseur : NOT RUN.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 1031bd24..2e292dc4 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,64 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-LOCAL-GIT-FREEZE-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — gel Git local du correctif continuité (post-QA concurrence) |
+| Type | INC / gel candidat DEV · **NO RELEASE** · Gate C OPEN |
+| Parent | `6ecdb987ee867a04ff816b699eb8870ac200db0a` (RECETTE figée immuable) |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
+| QA-FINAL-01 | Course GET A/B : barrières + marqueurs ; rail URL effect appelle `refreshDurablePilotage` |
+| Tests gel | tsc PASS · unit **706** · PG **525** · browser continuity **7** · parcours-af **7 PASS / 2 SKIP** · build PASS |
+| LIVE / RECETTE | NOT RUN / non mutée (`:3200` HTTP 200 RO) |
+| Push projet | **NONE** |
+| Verdict | **ENSEMBLE 07 — LOCAL GIT CANDIDATE FROZEN — MORRIS RECETTE GATE REQUIRED** |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FINAL-QA-CONSOLIDATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — consolidation QA finale avant gel Git |
+| Type | INC / QA corrective · **NO RELEASE** · Gate C OPEN |
+| QA-01 | Guard `shouldApplyDurableRefresh` **avant** setState ; Playwright race stale GET |
+| QA-02 | CKI UI strict (`trajectory-cki-id` / absent) ; matrice Trajectoire n'occulte plus le parcours si ACTIVE |
+| QA-03 | Second OPEN corrélé au tour assistant (messageId ↔ turnProjection.pilotageEffect) |
+| CONFLICT/UNKNOWN | UNIT DETERMINISTIC ; BROWSER NOT RUN (déclaré) |
+| Tests | unit 706 PASS · PG 525 PASS · browser continuity 7 PASS · parcours-af 7/2 · build PASS |
+| Verdict | **ENSEMBLE 07 — DEV FINAL QA QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED** |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-BROWSER-CONTINUITY-QUALIFICATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — qualification navigateur du correctif continuité pilotage |
+| Type | INC / QA incrément · **NO RELEASE** · Gate C OPEN |
+| Worktree | même arbre DEV local non commité · parent RECETTE `6ecdb987` |
+| Preuves | BROWSER-01…06 Playwright `:3101` / `sfia_next_e2e` · fixture `cycleType=cadrage` · captures `.tmp-sfia-review/ensemble07-browser-evidence/` |
+| Correctifs QA | `listTurnProjections` expose `pilotageEffect` · `refreshDurablePilotage` recharge projection complète |
+| Tests | unit 702 PASS · PG 525 PASS · tsc PASS · browser continuity 6 PASS · LIVE NOT RUN |
+| RECETTE | non mutée |
+| Verdict | **ENSEMBLE 07 — DEV BROWSER QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED** |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-GOVERNED-PILOTAGE-CONTINUITY-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — continuité du pilotage gouverné (correctif post-UAT Equip'Campus) |
+| Type | INC / correctif fonctionnel intégré · **NO RELEASE** · Gate C OPEN |
+| Worktree | `sfia-wt-ensemble07-projet-trajectoire-20261120` · branche `sfia/next-ensemble07-projet-trajectoire-delivery` · HEAD parent figé RECETTE `6ecdb987` (arbre DEV non commité) |
+| IN | UAT-10 normalize cycleType · UAT-11 restitution post-effet · UAT-08/09 catalogue Nora · UAT-02 filtre messages techniques · UAT-12 sync surfaces · UAT-06 taxonomie concernée |
+| OUT | Figma polish · mutation RECETTE · push projet · LIVE fournisseur · migration DB |
+| Tests | unit 702 PASS · PG 525 PASS · tsc PASS · OPEN `cadrage`→CADRAGE PG PROVEN · LIVE NOT RUN — GATE REQUIRED |
+| RECETTE | inchangée (`:3200` / BUILD `armX_D1HJzN6q-4MuDpYv` / SHA `6ecdb987`) |
+| Verdict | **ENSEMBLE 07 — DEV CORRECTIVE QUALIFIED WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED** |
+
+
 ## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FUNCTIONAL-STABILIZATION-CANDIDATE

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 5fada7f5..4dd1389e 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -31,6 +31,7 @@ import {
   type RevisionRow,
   revisionCurrencyLabel,
 } from "@/components/figma/DocumentSurfaces";
+import { shouldApplyDurableRefresh } from "@/lib/durable-refresh-guard";
 import {
   conversationalClientCommandKey,
   mayClearComposerDraftOnReconcile,
@@ -911,6 +912,8 @@ export default function ProjectPage() {

   function selectSurface(next: Surface) {
     surfaceNavGenRef.current += 1;
+    const navGen = surfaceNavGenRef.current;
+    const projectIdAtNav = params.projectId;
     pendingSurfaceRef.current = next;
     noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
     setSurface(next);
@@ -928,6 +931,11 @@ export default function ProjectPage() {
       resetDocumentBibliothequeState();
       syncSurfaceUrl(next, null, "push");
     }
+    // E07 — revalidate durable pilotage on surface change (GET only, no métier mutation).
+    // Stale-response guard lives inside refreshDurablePilotage (before setState).
+    void refreshDurablePilotage({ generation: navGen, projectId: projectIdAtNav }).catch(() => {
+      /* best-effort — navigation must stay non-blocking */
+    });
   }

   function headRevisionFromRows(rows: RevisionRow[]): RevisionRow | null {
@@ -1252,11 +1260,55 @@ export default function ProjectPage() {
     }
   }

-  async function refreshDurablePilotage() {
-    const projRes = await fetch(`/api/projects/${params.projectId}/pilotage`);
+  async function refreshDurablePilotage(opts?: { generation?: number; projectId?: string }) {
+    const request = {
+      generation: opts?.generation ?? surfaceNavGenRef.current,
+      projectId: opts?.projectId ?? params.projectId,
+    };
+    const stillApplicable = () =>
+      shouldApplyDurableRefresh({
+        request,
+        currentGeneration: surfaceNavGenRef.current,
+        currentProjectId: params.projectId,
+      });
+
+    // Prefer full project GET so surfaces (Projet / Trajectoire / CKI) share one durable snapshot.
+    const projRes = await fetch(`/api/projects/${request.projectId}`);
+    // Guard BEFORE any React mutation — out-of-order GETs must not clobber newer state.
+    if (!stillApplicable()) return;
+
     if (projRes.ok) {
-      const pj = await projRes.json();
-      const cycle = pj.pilotage?.cycle ?? pj.cycle;
+      const pj = (await projRes.json()) as {
+        pilotage?: PilotageProjection | null;
+        messages?: Msg[];
+      };
+      if (!stillApplicable()) return;
+      if (pj.pilotage) {
+        setPilotageProjection(pj.pilotage);
+      }
+      if (Array.isArray(pj.messages)) {
+        setMessages(pj.messages);
+      }
+      const cycle = pj.pilotage?.cycle;
+      if (cycle?.status === "ACTIVE") {
+        setPilotageStatus((prev) =>
+          prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
+            ? prev
+            : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
+        );
+      }
+      return;
+    }
+
+    // Fallback: dedicated pilotage route (same applicability gate)
+    const only = await fetch(`/api/projects/${request.projectId}/pilotage`);
+    if (!stillApplicable()) return;
+    if (only.ok) {
+      const pj = await only.json();
+      if (!stillApplicable()) return;
+      const pilotage = (pj.pilotage ?? pj) as PilotageProjection;
+      setPilotageProjection(pilotage);
+      const cycle = pilotage?.cycle;
       if (cycle?.status === "ACTIVE") {
         setPilotageStatus((prev) =>
           prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
@@ -1896,8 +1948,12 @@ export default function ProjectPage() {
   }, [params.projectId, initialQualification?.status, initialQualification?.operationId]);

   // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
+  // Rail <Link> navigation converges here (not selectSurface). Own durable GET revalidation
+  // + generation bump so concurrent/stale project GETs cannot clobber a newer surface.
   useEffect(() => {
     surfaceNavGenRef.current += 1;
+    const navGen = surfaceNavGenRef.current;
+    const projectIdAtNav = params.projectId;
     const qSurface = parseSurface(searchParams.get("surface"));
     const qDocId = searchParams.get("documentId");
     applyUrlDocumentState(documentsRef.current, qSurface, qDocId);
@@ -1907,6 +1963,9 @@ export default function ProjectPage() {
     if (qSurface && peekProjectSurfaceNavIntent(params.projectId) === qSurface) {
       clearProjectSurfaceNavIntent(params.projectId, qSurface);
     }
+    void refreshDurablePilotage({ generation: navGen, projectId: projectIdAtNav }).catch(() => {
+      /* best-effort — URL surface sync must stay non-blocking */
+    });
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchParams]);

diff --git a/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx b/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
index 97196e5f..99d366df 100644
--- a/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
@@ -52,12 +52,13 @@ export function TrajectoryBoard(props: {
     proposed?.forecastSteps ?? retained?.forecastSteps ?? q?.forecastSteps ?? null;
   const closed = props.pilotage?.closedCycles ?? [];
   // E07-COR-12 — exclusive display matrix (no stacked contradiction).
-  const showUnknown = q?.status === "UNKNOWN";
-  const showAnalyzing = Boolean(
-    q && (q.status === "PENDING" || q.status === "RUNNING"),
-  );
-  const showClarification = q?.status === "CLARIFICATION";
-  const showFailed = q?.status === "FAILED";
+  // QA-FINAL — an ACTIVE cycle owns Trajectoire: qualification banners must not hide parcours/CKI.
+  const hasActiveCycle = Boolean(cycle && cycle.status === "ACTIVE");
+  const showUnknown = !hasActiveCycle && q?.status === "UNKNOWN";
+  const showAnalyzing =
+    !hasActiveCycle && Boolean(q && (q.status === "PENDING" || q.status === "RUNNING"));
+  const showClarification = !hasActiveCycle && q?.status === "CLARIFICATION";
+  const showFailed = !hasActiveCycle && q?.status === "FAILED";
   const hasRetained = Boolean(retained);
   const hasProposedOnly = Boolean(proposed) && !hasRetained;
   // E07-COR-11 — proposition initiale only when PROPOSED (not already RETAINED).
@@ -66,7 +67,7 @@ export function TrajectoryBoard(props: {
     !showUnknown &&
     !showClarification &&
     !showFailed &&
-    !cycle &&
+    !hasActiveCycle &&
     closed.length === 0 &&
     hasProposedOnly &&
     Boolean(forecast && forecast.length > 0);
@@ -248,6 +249,14 @@ export function TrajectoryBoard(props: {
           onOpenTravail={props.onOpenTravail}
         />
       ) : null}
+
+      {/* Always offer CKI entry when parcours banner is absent (clarification / retained / etc.). */}
+      {(showClarification || showFailed || showRetainedWithoutCycle || showUnknown) &&
+      !showProposal ? (
+        <div className="flex justify-end pt-2">
+          <CkiShortcut onOpen={() => setDetail({ kind: "cki" })} />
+        </div>
+      ) : null}
     </div>
   );
 }
@@ -598,6 +607,7 @@ function ParcoursPrincipal(props: {
             <button
               type="button"
               className="text-sm font-semibold text-[#7477ed] hover:underline"
+              data-testid="trajectory-open-cki"
               onClick={props.onOpenCki}
             >
               Accès CKI et méthode
@@ -836,7 +846,13 @@ function CkiMethodeView(props: {
           <p className="fig-kicker text-[#7477ed]">GUIDANCE CKI PRINCIPALE</p>
           {cycle?.cki.ckiId ? (
             <>
-              <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">{cycle.cki.ckiId}</h3>
+              <h3
+                className="text-[1.45rem] font-semibold text-[#f3f5ff]"
+                data-testid="trajectory-cki-id"
+                data-cki-id={cycle.cki.ckiId}
+              >
+                {cycle.cki.ckiId}
+              </h3>
               <p className="text-sm text-[#a3b0c7]">
                 Référence applicable au cycle {labelCycle(cycle.cycleType)}
                 {cycle.cki.pinnedVersion ? ` · version ${cycle.cki.pinnedVersion}` : ""}
@@ -853,7 +869,12 @@ function CkiMethodeView(props: {
             </>
           ) : (
             <>
-              <h3 className="text-lg font-semibold text-[#f3f5ff]">Aucun CKI principal actif</h3>
+              <h3
+                className="text-lg font-semibold text-[#f3f5ff]"
+                data-testid="trajectory-cki-absent"
+              >
+                Aucun CKI principal actif
+              </h3>
               <p className="text-sm text-[#a3b0c7]">
                 Un CKI principal n&apos;existe qu&apos;avec un cycle réellement ouvert. Aucune
                 génération automatique à l&apos;ouverture.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 093927d1..7deeff73 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -527,14 +527,22 @@ for (const msg of [
   );
 }

+/**
+ * E07 corrective — LIVE EquipCampus emitted cycleType="cadrage" (lowercase).
+ * Fixture intentionally mirrors that semantic frontier; D5 classify must canonicalize.
+ * replyDraft includes the pre-effect hedge so post-effect restitution can be asserted.
+ */
+const OPEN_CADRAGE_REPLY =
+  "Je note votre accord pour ouvrir le cycle de cadrage. L'ouverture effective reste à confirmer par Studio.";
+
 register(
   "Ouvre le cycle cadrage.",
-  effect("Ouvrir cycle", "Intention d'ouverture de cycle — vérification propriétaire D5.", [
+  effect("Ouvrir cycle", OPEN_CADRAGE_REPLY, [
     {
       capabilityId: "d5.pilotage_command",
       mode: "REQUEST_EFFECT",
       summary: "OPEN_CYCLE CADRAGE",
-      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
+      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
       constraints: [],
       dependsOn: [],
       sourceEvidence: [],
@@ -542,6 +550,62 @@ register(
   ]),
 );

+register(
+  "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.",
+  effect("Ouvrir cycle GO naturel", OPEN_CADRAGE_REPLY, [
+    {
+      capabilityId: "d5.pilotage_command",
+      mode: "REQUEST_EFFECT",
+      summary: "OPEN_CYCLE CADRAGE (GO naturel)",
+      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
+      constraints: [],
+      dependsOn: [],
+      sourceEvidence: [],
+    },
+  ]),
+);
+
+register(
+  "Je retiens cette trajectoire.",
+  effect(
+    "Retenir trajectoire",
+    "Je note votre rétention de l'orientation. L'ouverture d'un cycle reste une décision distincte — confirmation Studio à suivre.",
+    [
+      {
+        capabilityId: "d5.pilotage_command",
+        mode: "REQUEST_EFFECT",
+        summary: "RETAIN_TRAJECTORY",
+        parameters: { pilotageOperation: "RETAIN_TRAJECTORY" },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+    ],
+  ),
+);
+
+register(
+  "Ouvre le cycle comparaison_de_solutions.",
+  effect(
+    "Ouvrir type inconnu",
+    "Je vais demander l'ouverture du cycle comparaison_de_solutions. L'ouverture effective reste à confirmer par Studio.",
+    [
+      {
+        capabilityId: "d5.pilotage_command",
+        mode: "REQUEST_EFFECT",
+        summary: "OPEN_CYCLE type inconnu",
+        parameters: {
+          pilotageOperation: "OPEN_CYCLE",
+          cycleType: "comparaison_de_solutions",
+        },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+    ],
+  ),
+);
+
 register(
   "Rédige un document de synthèse sur les options A et B",
   effect(
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 19d4b0a9..33a92fa0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -31,7 +31,6 @@ import { TURN_RUNNING_STALE_MS, turnClock } from "./turn-command";
 import {
   appendMissionAck,
   composeCanonicalMissionRestitution,
-  formatMissionAck,
   type MissionOwnerActBinding,
   type MissionProjection,
   type MissionStep,
@@ -997,10 +996,10 @@ export async function continueAfterProjectCreated(input: {
   if (!pendingDoc) {
     mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
     generationId = `mission-continue-d2:${mission.clientIntentKey}:${input.projectId}`;
+    // E07 — métier restitution only in the thread; keep structured missionProjection for audit.
     assistantContent =
-      `### Suite de mission\nProjet créé (projectId=${input.projectId}). ` +
-      `Aucune étape documentaire dépendante dans l'intention initiale.\n\n` +
-      formatMissionAck(mission);
+      "Le projet a bien été créé. Vous pouvez poursuivre dans Travail, consulter la Trajectoire " +
+      "et décider avec Nora de l'ouverture du premier cycle lorsque vous serez prêt.";
   } else {
     const original =
       mission.originalUserText ??
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 83bc164d..0fd75b69 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -72,6 +72,11 @@ import {
 } from "@/domains/pilotage/conversation-authority";
 import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";
 import { assertPilotTurnNotBlockedByQualification } from "@/domains/pilotage/initial-qualification";
+import {
+  composePilotageEffectRestitution,
+  isTechnicalMissionAssistantContent,
+  projectMetierMissionMessage,
+} from "@/domains/conversation/pilotage-effect-restitution";
 import {
   appendDocumentEffectAck,
   applyTargetedSectionRevision,
@@ -407,11 +412,21 @@ export async function listMessages(pilotId: string, preparationId: string) {
   // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
   const ctx = await getPreparationContext(pilotId, preparationId);
   if (!ctx.conversation) return [];
-  return db
+  const rows = await db
     .select()
     .from(messages)
     .where(eq(messages.conversationId, ctx.conversation.id))
     .orderBy(asc(messages.ordinal));
+  // E07 — project technical mission dumps as métier text (no DB rewrite).
+  return rows.map((m) => {
+    if (
+      m.role === "assistant" &&
+      isTechnicalMissionAssistantContent(m.content, m.generationId)
+    ) {
+      return { ...m, content: projectMetierMissionMessage(m.content) };
+    }
+    return m;
+  });
 }

 /**
@@ -534,12 +549,23 @@ export async function listTurnProjections(pilotId: string, preparationId: string
     if (!row.assistantMessageId || !row.resultJson) continue;
     const proj = extractTurnProjectionFromResultJson(row.resultJson);
     if (!proj) continue;
+    // E07 — surface durable Studio effect alongside turnProjection (sibling in resultJson).
+    let pilotageEffect: TurnResult["pilotageEffect"] = null;
+    try {
+      const parsed = JSON.parse(row.resultJson) as {
+        pilotageEffect?: TurnResult["pilotageEffect"];
+      };
+      pilotageEffect = parsed.pilotageEffect ?? null;
+    } catch {
+      pilotageEffect = null;
+    }
     out.push({
       ...proj,
       messageId: proj.messageId ?? row.assistantMessageId,
       turnCommandId: proj.turnCommandId ?? row.id,
       finalized: proj.finalized || row.status === "COMPLETE",
       status: proj.status || row.status,
+      pilotageEffect,
     });
   }
   return out;
@@ -2737,6 +2763,14 @@ export async function postUserMessageAndNora(
     assistantBody = [narrative.trimEnd(), fenced].filter((s) => s.length > 0).join("\n\n");
   }

+  // E07 — post-effect métier restitution: final assistant text must match Studio outcome.
+  if (!ownershipLostBeforeD4 && authority?.attempted) {
+    assistantBody = composePilotageEffectRestitution({
+      priorContent: assistantBody,
+      effect: pilotageEffectFromAuthority(authority) ?? null,
+    });
+  }
+
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
     : appendMissionAck(
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
index 680c3156..7364a0a4 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
@@ -9,8 +9,9 @@ export type IntentQualification =
   | {
       clarity: "CLEAR";
       operation: PilotageOperation;
-      cycleType?: CycleType;
-      toCycleType?: CycleType;
+      /** Raw semantic / LIVE value — normalized at D5 classify boundary. */
+      cycleType?: CycleType | string;
+      toCycleType?: CycleType | string;
       methodRef?: string;
       methodVersion?: string;
       objective?: string;
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts b/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
index 53266fcc..d798e484 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
@@ -15,6 +15,7 @@ import {
   loadVerifiedCkiText,
   type CkiDelivery,
 } from "@/domains/pilotage/cki-resolve";
+import { formatRecognizedCycleCatalogueSnippet } from "@/domains/pilotage/cycle-type-normalize";
 import { getPilotageProjection } from "@/domains/pilotage/service";

 export type NoraPilotageContext = {
@@ -52,6 +53,8 @@ export async function buildNoraPilotageContext(
       snippets: [
         "### Pilotage D5/D6",
         "(préparation sans projet — pas de cycle/méthode/CKI ; Nora reste générale)",
+        "",
+        ...formatRecognizedCycleCatalogueSnippet(),
       ],
       ckiContentAttached: false,
       ckiDelivery: "NONE",
@@ -103,6 +106,7 @@ export async function buildNoraPilotageContext(
   snippets.push(
     "Rappel: le contenu CKI guide la spécialité cognitive en silence ; il n'autorise aucun GO, cycle, méthode ni effet.",
   );
+  snippets.push("", ...formatRecognizedCycleCatalogueSnippet());

   const decisionRows = await db
     .select({
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index f094dfcb..7cfafe04 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -22,6 +22,7 @@ import {
   markDecisionState,
 } from "@/domains/decisions/service";
 import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@/domains/pilotage/cki-resolve";
+import { tryCanonicalCycleType } from "@/domains/pilotage/cycle-type-normalize";
 import { parseForecastJson } from "@/domains/pilotage/forecast-builder";
 import { getQualificationProjection } from "@/domains/pilotage/initial-qualification";
 import {
@@ -375,9 +376,12 @@ function fromClearIntent(
   // carry server-authenticated envelope (keys, actInstanceId). Never fill gaps
   // from client-supplied cycleType/decisionId/objectRef/targetRef/"*".
   const fromDurable = sourceKind === "USER_MESSAGE";
-  const cycleType = fromDurable
-    ? qualified.cycleType ?? null
-    : qualified.cycleType ?? (body.cycleType && isCycleType(body.cycleType) ? body.cycleType : null);
+  // E07 — normalize at classify boundary (LIVE may emit "cadrage").
+  const cycleType =
+    tryCanonicalCycleType(qualified.cycleType) ??
+    (!fromDurable ? tryCanonicalCycleType(body.cycleType) : undefined) ??
+    null;
+  const toCycleType = tryCanonicalCycleType(qualified.toCycleType) ?? null;
   if (qualified.operation === "REVISE_DECISION" && !(qualified.decisionId ?? (!fromDurable ? body.decisionId : null))) {
     return {
       ok: false,
@@ -403,7 +407,7 @@ function fromClearIntent(
     ).trim() || (cycleType ? `Cycle ${cycleType}` : ""),
     cycleType,
     cycleId: fromDurable ? null : (body.cycleId ?? null),
-    toCycleType: qualified.toCycleType ?? null,
+    toCycleType,
     orientation: fromDurable ? "" : (body.orientation ?? "").trim(),
     trajectoryRevisionId: fromDurable ? null : (body.trajectoryRevisionId ?? null),
     methodRef: (qualified.methodRef ?? (!fromDurable ? body.methodRef : undefined) ?? "").trim(),
@@ -627,9 +631,8 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
       restrictionTargetRefHint: matched.restrictionTargetRefHint,
       semanticIntentId: matched.intentId,
       semanticSchemaVersion: matched.schemaVersion,
-      cycleType: matched.cycleType && isCycleType(matched.cycleType) ? matched.cycleType : undefined,
-      toCycleType:
-        matched.toCycleType && isCycleType(matched.toCycleType) ? matched.toCycleType : undefined,
+      cycleType: tryCanonicalCycleType(matched.cycleType),
+      toCycleType: tryCanonicalCycleType(matched.toCycleType),
     };
     // Server-stable human-act identity: never accept client actInstanceId for USER_MESSAGE.
     // Same message + same intent ⇒ same act even if clientCommandKey / actInstanceId change.
@@ -680,11 +683,11 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
   }

   const operation = body.operation as PilotageOperation;
-  const cycleType = body.cycleType ? (isCycleType(body.cycleType) ? body.cycleType : null) : null;
+  const cycleType = body.cycleType ? (tryCanonicalCycleType(body.cycleType) ?? null) : null;
   if (body.cycleType && !cycleType) {
     return { ok: false, reasonCode: "INVALID", reason: "Type de cycle inconnu", sourceActionKey: "REJECT|INVALID|cycle" };
   }
-  const toCycleType = body.toCycleType ? (isCycleType(body.toCycleType) ? body.toCycleType : null) : null;
+  const toCycleType = body.toCycleType ? (tryCanonicalCycleType(body.toCycleType) ?? null) : null;
   if (body.toCycleType && !toCycleType) {
     return { ok: false, reasonCode: "INVALID", reason: "Type de cycle cible inconnu", sourceActionKey: "REJECT|INVALID|target-cycle" };
   }
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
index ab8b392d..db5e78fe 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
@@ -306,12 +306,13 @@ test.describe("Ensemble 07 parcours A–F (BROWSER FAKE — honest oracles)", ()
     expect(snap, "project snap missing").toBeTruthy();
     expect(snap!.cycleStatus, "C2 requires persisted ACTIVE cycle — no soft-pass").toBe("ACTIVE");
     expect(snap!.cycleId, "ACTIVE cycle must have durable id").toBeTruthy();
-    expect(snap!.cycleType).toBeTruthy();
+    // Fixture emits cycleType="cadrage"; classify must canonicalize to CADRAGE.
+    expect(snap!.cycleType).toBe("CADRAGE");
     // Projection exposes at most one ACTIVE (single object); closedCycles are separate.
     expect(snap!.closedCycleCount).toBeGreaterThanOrEqual(0);
     test.info().annotations.push({
       type: "note",
-      description: `C2 PASS — BROWSER DETERMINISTIC — GOVERNED OPEN PROVEN; cycleId=${snap!.cycleId}; type=${snap!.cycleType}; retained=${snap!.trajectoryRetained}; lastEffect=${snap!.lastPilotageEffect}; LIVE NL NOT PROVEN`,
+      description: `C2 PASS — BROWSER DETERMINISTIC — GOVERNED OPEN PROVEN (cadrage→CADRAGE); cycleId=${snap!.cycleId}; type=${snap!.cycleType}; retained=${snap!.trajectoryRetained}; lastEffect=${snap!.lastPilotageEffect}; LIVE NL NOT PROVEN`,
     });
   });

diff --git a/projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
index 6a33a906..3fc4838b 100644
--- a/projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
@@ -675,22 +675,26 @@ describe("Ensemble 07 initial qualification (PG)", () => {
     expect(["APPLIED", "ALREADY_APPLIED"]).toContain(retain.command?.status);
     expect(retain.humanDecisionCreated || retain.decisionId).toBeTruthy();

+    // LIVE EquipCampus regression: semantic cycleType arrives as lowercase "cadrage".
     const openQual = d5PilotageEnvelope({
       operation: "OPEN_CYCLE",
-      cycleType: "CADRAGE",
+      cycleType: "cadrage",
       objective: "Clarifier le besoin",
     });
-    const openMsgId = await seedUserTurn("Ouvre le cycle cadrage.", openQual);
+    const openMsgId = await seedUserTurn(
+      "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.",
+      openQual,
+    );
     const open = await applyConversationalAuthority({
       pilotId,
       projectId,
       userMessageId: openMsgId,
-      content: "Ouvre le cycle cadrage.",
+      content: "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.",
       clientTurnKey: newId("ctk"),
       preQualified: {
         clarity: "CLEAR",
         operation: "OPEN_CYCLE",
-        cycleType: "CADRAGE",
+        cycleType: "cadrage",
         objective: "Clarifier le besoin",
         semanticIntentId: openQual.intents[0]?.id,
         semanticSchemaVersion: openQual.schemaVersion,

```

## 15. Contenus complets des fichiers **créés**

===== BEGIN FILE projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts =====
/**
 * Guard for applying durable GET revalidation results.
 * Reject stale responses BEFORE any React state mutation.
 *
 * A response is applicable only when:
 * - its generation token still matches the latest requester generation, AND
 * - it targets the same project id currently mounted.
 *
 * Navigation generation ≠ métier revision: we discard out-of-order reads for the
 * same surface refresh sequence / project identity, not because métier changed.
 */

export type DurableRefreshRequestIdentity = {
  generation: number;
  projectId: string;
};

export function shouldApplyDurableRefresh(input: {
  request: DurableRefreshRequestIdentity;
  currentGeneration: number;
  currentProjectId: string;
}): boolean {
  if (!input.request.projectId || !input.currentProjectId) return false;
  if (input.request.projectId !== input.currentProjectId) return false;
  if (input.request.generation !== input.currentGeneration) return false;
  return true;
}
===== END FILE projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts =====
===== BEGIN FILE projects/sfia-studio-next/web/tests/unit/durable-refresh-guard.test.ts =====
import { describe, expect, it } from "vitest";
import { shouldApplyDurableRefresh } from "@/lib/durable-refresh-guard";

describe("durable-refresh-guard (QA-FINAL-01)", () => {
  it("applies when generation and projectId still match", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 3, projectId: "proj_a" },
        currentGeneration: 3,
        currentProjectId: "proj_a",
      }),
    ).toBe(true);
  });

  it("rejects stale generation (request A after B advanced the counter)", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 1, projectId: "proj_a" },
        currentGeneration: 2,
        currentProjectId: "proj_a",
      }),
    ).toBe(false);
  });

  it("rejects response for a different mounted project", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 5, projectId: "proj_old" },
        currentGeneration: 5,
        currentProjectId: "proj_new",
      }),
    ).toBe(false);
  });

  it("rejects empty project identities", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 1, projectId: "" },
        currentGeneration: 1,
        currentProjectId: "proj_a",
      }),
    ).toBe(false);
  });
});
===== END FILE projects/sfia-studio-next/web/tests/unit/durable-refresh-guard.test.ts =====
===== BEGIN FILE projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts =====
/**
 * Deterministic cycle-type normalization at the semantic → D5 boundary.
 * Reuses CYCLE_TYPES / official labels — does not create a parallel catalogue.
 */
import { CYCLE_TYPES, type CycleType, isCycleType } from "@/domains/pilotage/cki-resolve";

/** Official French / display labels (same vocabulary as forecast-builder). */
export const CYCLE_TYPE_LABELS: Record<CycleType, string> = {
  CADRAGE: "cadrage",
  CONCEPTION_FONCTIONNELLE: "conception fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "architecture fonctionnelle",
  UX_UI: "conception UX",
  BACKLOG: "backlog",
  ARCHITECTURE_TECHNIQUE: "architecture technique",
  INTEGRATION_DEVOPS: "intégration DevOps",
  DELIVERY: "delivery",
  QA_VALIDATION: "validation qualité",
  SECURITE: "sécurité",
  DEPLOIEMENT_RELEASE: "déploiement release",
  OBSERVABILITE: "observabilité",
  PR_READINESS: "préparation PR",
  POST_MERGE: "post-merge",
  CAPITALISATION: "capitalisation",
};

/** Extra unambiguous aliases → canonical enum (never invent new cycle types). */
const ALIASES: Record<string, CycleType> = {
  ux: "UX_UI",
  "ux/ui": "UX_UI",
  "ux-ui": "UX_UI",
  "conception ux": "UX_UI",
  "conception ux/ui": "UX_UI",
  "experience utilisateur": "UX_UI",
  "expérience utilisateur": "UX_UI",
  "cycle de cadrage": "CADRAGE",
  "premier cycle de cadrage": "CADRAGE",
  "cycle cadrage": "CADRAGE",
};

export type CycleTypeNormalizeResult =
  | { ok: true; cycleType: CycleType; raw: string; via: "enum" | "case" | "label" | "alias" }
  | { ok: false; reason: "EMPTY" | "UNKNOWN" | "AMBIGUOUS"; raw: string; candidates?: CycleType[] };

function fold(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Map a semantic / LIVE cycleType string to a canonical CycleType.
 * Safe variants: enum exact, case, official label, known aliases.
 * Never silently maps an unknown string to another type.
 */
export function normalizeCycleType(input: string | null | undefined): CycleTypeNormalizeResult {
  if (input == null) return { ok: false, reason: "EMPTY", raw: "" };
  const raw = String(input).trim();
  if (!raw) return { ok: false, reason: "EMPTY", raw: "" };

  if (isCycleType(raw)) {
    return { ok: true, cycleType: raw, raw, via: "enum" };
  }

  const upper = raw.toUpperCase().replace(/[\s-]+/g, "_");
  if (isCycleType(upper)) {
    return { ok: true, cycleType: upper, raw, via: "case" };
  }

  const folded = fold(raw);
  const labelHits = (CYCLE_TYPES as readonly CycleType[]).filter(
    (t) => fold(CYCLE_TYPE_LABELS[t]) === folded || fold(t.replace(/_/g, " ")) === folded,
  );
  if (labelHits.length === 1) {
    return { ok: true, cycleType: labelHits[0]!, raw, via: "label" };
  }
  if (labelHits.length > 1) {
    return { ok: false, reason: "AMBIGUOUS", raw, candidates: labelHits };
  }

  const alias = ALIASES[folded];
  if (alias) {
    return { ok: true, cycleType: alias, raw, via: "alias" };
  }

  return { ok: false, reason: "UNKNOWN", raw };
}

/** Convenience: canonical type or undefined (never invent). */
export function tryCanonicalCycleType(input: string | null | undefined): CycleType | undefined {
  const r = normalizeCycleType(input);
  return r.ok ? r.cycleType : undefined;
}

/** Short catalogue for Nora context — identifiers + labels only (not full CKI bodies). */
export function formatRecognizedCycleCatalogueSnippet(): string[] {
  return [
    "### Types de cycles Studio reconnus (identifiants canoniques)",
    "Utilise UNIQUEMENT ces identifiants dans parameters.cycleType / toCycleType pour d5.pilotage_command.",
    "Les travaux métier (comparaison de solutions, expérimentation, évaluation…) peuvent être décrits librement,",
    "mais ne sont PAS des types de cycles — place-les dans le raisonnement / rationale, pas dans cycleType.",
    ...CYCLE_TYPES.map((t) => `- ${t} (« ${CYCLE_TYPE_LABELS[t]} »)`),
  ];
}
===== END FILE projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts =====
===== BEGIN FILE projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts =====
/**
 * Deterministic métier restitution after a governed D5/D6 conversational effect.
 * Facts come from Studio (pilotageEffect); Nora prior prose may be adjusted, never invented as authority.
 */

export type PilotageEffectView = {
  attempted?: boolean;
  intentClarity?: string | null;
  operation?: string | null;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  clarification?: string | null;
  decisionId?: string | null;
  effects?: Array<{ effectKind?: string; targetRef?: string }> | null;
} | null;

const PRE_EFFECT_PENDING =
  /l['']ouverture effective reste à confirmer par Studio\.?/gi;

function operationLabel(op: string | null | undefined): string {
  switch (op) {
    case "OPEN_CYCLE":
      return "ouverture de cycle";
    case "CLOSE_CYCLE":
      return "clôture de cycle";
    case "TRANSITION_CYCLE":
      return "transition de cycle";
    case "RETAIN_TRAJECTORY":
      return "rétention de trajectoire";
    case "PROPOSE_TRAJECTORY":
      return "proposition de trajectoire";
    case "RECORD_DECISION":
      return "enregistrement de décision";
    case "REVISE_DECISION":
      return "révision de décision";
    default:
      return op ? `opération ${op}` : "opération gouvernée";
  }
}

function stripPreEffectHedges(text: string): string {
  return text
    .replace(PRE_EFFECT_PENDING, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
  const op = operationLabel(effect.operation);
  const status = (effect.status ?? "").toUpperCase();
  const reason = (effect.reason ?? effect.clarification ?? "").trim();

  switch (status) {
    case "APPLIED":
      return [
        `**Résultat Studio :** la ${op} a été **appliquée**.`,
        effect.operation === "OPEN_CYCLE"
          ? "Le cycle demandé est désormais actif ; la guidance spécialisée associée sera disponible sur Trajectoire / CKI."
          : effect.operation === "RETAIN_TRAJECTORY"
            ? "L'orientation est retenue. L'ouverture d'un cycle reste une décision distincte."
            : "L'état du projet a été mis à jour en conséquence.",
      ];
    case "ALREADY_APPLIED":
      return [
        `**Résultat Studio :** cette ${op} était **déjà appliquée** — aucun nouvel effet n'a été créé.`,
      ];
    case "REJECTED":
      return [
        `**Résultat Studio :** la ${op} a été **refusée**.`,
        reason
          ? `Motif : ${reason}.`
          : "Le contrôle d'autorité ou d'état n'a pas autorisé l'effet.",
        "Aucun cycle ni décision n'a été créé par cette demande. Vous pouvez reformuler ou préciser le type de cycle reconnu.",
      ];
    case "CONFLICT":
      return [
        `**Résultat Studio :** **conflit d'état** sur la ${op}.`,
        reason ? `Détail : ${reason}.` : "Rechargez l'état du projet puis réessayez si pertinent.",
      ];
    case "UNKNOWN":
      return [
        `**Résultat Studio :** l'issue de la ${op} est **encore en vérification**.`,
        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
      ];
    default:
      if (effect.intentClarity === "AMBIGUOUS") {
        return [
          "**Résultat Studio :** aucune commande n'a été exécutée — intention ambiguë.",
          reason ? `Précision utile : ${reason}.` : "Pouvez-vous préciser le cycle et l'acte souhaités ?",
        ];
      }
      if (effect.attempted === false) {
        return [];
      }
      return [
        `**Résultat Studio :** statut « ${status || "indéterminé"} » pour la ${op}.`,
        reason ? `Information : ${reason}.` : "",
      ].filter(Boolean);
  }
}

/**
 * Compose final assistant text: keep useful prior narrative, remove contradictory
 * pre-effect hedges, append durable Studio outcome in métier language.
 */
export function composePilotageEffectRestitution(input: {
  priorContent: string;
  effect: PilotageEffectView;
}): string {
  const prior = stripPreEffectHedges(input.priorContent ?? "");
  const effect = input.effect;
  if (!effect?.attempted) {
    return prior;
  }
  const facts = effectFactLines(effect);
  if (facts.length === 0) return prior;
  const block = ["", "---", "", ...facts].join("\n");
  if (!prior.trim()) return facts.join("\n");
  return `${prior.trimEnd()}\n${block}`;
}

/** True when a persisted assistant message is a raw technical mission dump (not métier Nora). */
export function isTechnicalMissionAssistantContent(content: string, generationId?: string | null): boolean {
  // Provenance hint alone is insufficient — a mission-continue may already carry métier D4 ACK.
  if (/Résultat d'enregistrement|Nouvelle version disponible|encore incertain/i.test(content)) {
    return false;
  }
  if (/^### Suite de mission/m.test(content) && /projectId=|clientIntentKey=|status=COMPLETED/.test(content)) {
    return true;
  }
  if (/^### Suite de mission \(projection D3/m.test(content)) return true;
  if (/^### Restitution de mission \(faits propriétaires\)/m.test(content)) return true;
  const gen = (generationId ?? "").trim();
  if (
    gen.startsWith("mission-continue") &&
    /projectId=proj_|clientIntentKey=|status=COMPLETED|status=AWAITING_/.test(content)
  ) {
    return true;
  }
  return false;
}

/** Métier projection for historical technical mission messages (READ path — no DB rewrite). */
export function projectMetierMissionMessage(content: string): string {
  if (/Projet créé \(projectId=/.test(content) || /projectId=proj_/.test(content)) {
    return (
      "Le projet a bien été créé. Vous pouvez poursuivre dans Travail, consulter la Trajectoire " +
      "et décider avec Nora de l'ouverture du premier cycle lorsque vous serez prêt."
    );
  }
  if (/AWAITING_PILOT_ACT/.test(content)) {
    return "Une action explicite de votre part est encore requise pour poursuivre (par exemple créer le projet).";
  }
  if (/AWAITING_PILOT_AUTH/.test(content)) {
    return "Une autorisation de votre part est requise avant publication Git.";
  }
  if (/AWAITING_CLARIFICATION/.test(content)) {
    return "Une précision de votre part est requise avant de poursuivre la préparation.";
  }
  if (/RESTITUTION_PENDING/.test(content)) {
    return "Les effets déjà enregistrés sont conservés ; la restitution détaillée reste en attente.";
  }
  return "Suite de mission enregistrée par Studio — détails techniques masqués dans le fil métier.";
}
===== END FILE projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts =====
===== BEGIN FILE projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts =====
import { describe, expect, it } from "vitest";
import { CYCLE_TYPES } from "@/domains/pilotage/cki-resolve";
import {
  CYCLE_TYPE_LABELS,
  formatRecognizedCycleCatalogueSnippet,
  normalizeCycleType,
  tryCanonicalCycleType,
} from "@/domains/pilotage/cycle-type-normalize";

describe("E07 cycle-type normalize (LIVE → D5)", () => {
  it("maps LIVE lowercase cadrage → CADRAGE (EquipCampus root cause)", () => {
    expect(normalizeCycleType("cadrage")).toEqual({
      ok: true,
      cycleType: "CADRAGE",
      raw: "cadrage",
      via: "case",
    });
    expect(tryCanonicalCycleType("cadrage")).toBe("CADRAGE");
  });

  it("accepts Cadrage / CADRAGE / underscored case variants", () => {
    expect(tryCanonicalCycleType("Cadrage")).toBe("CADRAGE");
    expect(tryCanonicalCycleType("CADRAGE")).toBe("CADRAGE");
    expect(tryCanonicalCycleType("conception_fonctionnelle")).toBe("CONCEPTION_FONCTIONNELLE");
    expect(tryCanonicalCycleType("CONCEPTION_FONCTIONNELLE")).toBe("CONCEPTION_FONCTIONNELLE");
  });

  it("maps official labels and safe aliases without inventing types", () => {
    expect(tryCanonicalCycleType("conception fonctionnelle")).toBe("CONCEPTION_FONCTIONNELLE");
    expect(tryCanonicalCycleType("ux/ui")).toBe("UX_UI");
    expect(tryCanonicalCycleType("premier cycle de cadrage")).toBe("CADRAGE");
  });

  it("refuses unknown / empty without silent remap", () => {
    expect(normalizeCycleType("comparaison_de_solutions")).toMatchObject({
      ok: false,
      reason: "UNKNOWN",
    });
    expect(normalizeCycleType("")).toMatchObject({ ok: false, reason: "EMPTY" });
    expect(normalizeCycleType(null)).toMatchObject({ ok: false, reason: "EMPTY" });
    expect(tryCanonicalCycleType("phase métier inventée")).toBeUndefined();
  });

  it("covers every CYCLE_TYPES enum + label round-trip", () => {
    for (const t of CYCLE_TYPES) {
      expect(tryCanonicalCycleType(t)).toBe(t);
      expect(tryCanonicalCycleType(t.toLowerCase())).toBe(t);
      expect(tryCanonicalCycleType(CYCLE_TYPE_LABELS[t])).toBe(t);
    }
  });

  it("catalogue snippet lists recognized identifiers and warns against métier-as-type", () => {
    const snip = formatRecognizedCycleCatalogueSnippet().join("\n");
    expect(snip).toContain("CADRAGE");
    expect(snip).toContain("CONCEPTION_FONCTIONNELLE");
    expect(snip).toContain("identifiants canoniques");
    expect(snip).toMatch(/ne sont PAS des types de cycles/i);
    expect(CYCLE_TYPES).toHaveLength(15);
  });
});
===== END FILE projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts =====
===== BEGIN FILE projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts =====
import { describe, expect, it } from "vitest";
import {
  composePilotageEffectRestitution,
  isTechnicalMissionAssistantContent,
  projectMetierMissionMessage,
} from "@/domains/conversation/pilotage-effect-restitution";

describe("E07 post-effect métier restitution", () => {
  it("APPLIED OPEN_CYCLE replaces pending-Studio hedge with confirmation", () => {
    const prior =
      "Je note votre accord. L'ouverture effective reste à confirmer par Studio.";
    const out = composePilotageEffectRestitution({
      priorContent: prior,
      effect: {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "APPLIED",
      },
    });
    expect(out).not.toMatch(/reste à confirmer par Studio/i);
    expect(out).toMatch(/appliquée/i);
    expect(out).toMatch(/cycle demandé est désormais actif/i);
  });

  it("REJECTED INVALID surfaces motif without false success", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Je vais demander l'ouverture du cycle de cadrage.",
      effect: {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "REJECTED",
        reasonCode: "INVALID",
        reason: "Type de cycle requis",
      },
    });
    expect(out).toMatch(/refusée/i);
    expect(out).toMatch(/Type de cycle requis/);
    expect(out).not.toMatch(/appliquée/i);
  });

  it("ALREADY_APPLIED / CONFLICT / UNKNOWN each have distinct métier wording", () => {
    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "RETAIN_TRAJECTORY", status: "ALREADY_APPLIED" },
      }),
    ).toMatch(/déjà appliquée/i);

    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "OPEN_CYCLE", status: "CONFLICT", reason: "revision" },
      }),
    ).toMatch(/conflit/i);

    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "OPEN_CYCLE", status: "UNKNOWN" },
      }),
    ).toMatch(/en vérification/i);
  });

  it("no effect attempted leaves cognitive reply unchanged", () => {
    const prior = "Voici une analyse sans commande.";
    expect(
      composePilotageEffectRestitution({
        priorContent: prior,
        effect: { attempted: false },
      }),
    ).toBe(prior);
  });
});

describe("E07 technical mission message projection", () => {
  const dump =
    "### Suite de mission\nProjet créé (projectId=proj_abc). Aucune étape.\n\n" +
    "### Suite de mission (projection D3 — refs owners)\nstatus=COMPLETED\nclientIntentKey=k1";

  it("detects raw dumps; preserves métier D4 ACK even with mission-continue id", () => {
    expect(isTechnicalMissionAssistantContent(dump, "mission-continue-d2:k1:proj")).toBe(true);
    expect(isTechnicalMissionAssistantContent("Bonjour", "gen-nora-1")).toBe(false);
    expect(
      isTechnicalMissionAssistantContent(
        "Résultat d'enregistrement : document disponible.",
        "mission-continue-d2:k1:proj",
      ),
    ).toBe(false);
  });

  it("projects métier text without projectId leak", () => {
    const projected = projectMetierMissionMessage(dump);
    expect(projected).toMatch(/projet a bien été créé/i);
    expect(projected).not.toMatch(/projectId=/);
    expect(projected).not.toMatch(/clientIntentKey=/);
  });
});
===== END FILE projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts =====
===== BEGIN FILE projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts =====
import { test, expect, type Page, type APIRequestContext } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  seedInspectedNameViaApi,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 07 — BROWSER continuity qualification (BROWSER-01…06).
 * Lane: Playwright :3101 + sfia_next_e2e + STUDIO_FORCE_NORA_FIXTURE.
 * LIVE Nora: NOT RUN. Fixture emits cycleType="cadrage" (LIVE frontier regression).
 */

const EVIDENCE = path.resolve(
  __dirname,
  "../../../../.tmp-sfia-review/ensemble07-browser-evidence",
);

type PilotageEffectSnap = {
  operation?: string | null;
  status?: string | null;
  reason?: string | null;
  reasonCode?: string | null;
  attempted?: boolean;
};

type ProjectSnap = {
  messageCount: number;
  messages: Array<{
    id?: string;
    role?: string;
    content?: string;
    generationId?: string | null;
    ordinal?: number | null;
  }>;
  turnProjections: Array<{
    messageId?: string | null;
    turnCommandId?: string | null;
    pilotageEffect?: PilotageEffectSnap | null;
  }>;
  cycleStatus: string | null;
  cycleId: string | null;
  cycleType: string | null;
  ckiId: string | null;
  trajectoryRetained: boolean;
  trajectoryProposed: boolean;
  lastPilotageEffect: PilotageEffectSnap | null;
  iqStatus: string | null;
};

async function loginPilotA(page: Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

async function openSurface(page: Page, key: string) {
  await page.getByTestId("studio-rail").getByTestId(`nav-${key}`).click();
  await expect(page.getByTestId(`surface-${key}`)).toHaveAttribute(
    "data-surface-active",
    "1",
    { timeout: 15000 },
  );
}

async function shot(page: Page, name: string) {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await page.screenshot({
    path: path.join(EVIDENCE, `${name}.png`),
    fullPage: true,
  });
}

async function getProjectSnap(
  request: APIRequestContext,
  projectId: string,
): Promise<ProjectSnap> {
  const getRes = await request.get(`/api/projects/${projectId}`, { timeout: 10000 });
  expect(getRes.ok()).toBeTruthy();
  const body = (await getRes.json()) as {
    messages?: Array<{
      id?: string;
      role?: string;
      content?: string;
      generationId?: string | null;
      ordinal?: number | null;
    }>;
    turnProjections?: Array<{
      messageId?: string | null;
      turnCommandId?: string | null;
      pilotageEffect?: PilotageEffectSnap | null;
    }>;
    initialQualification?: { status?: string } | null;
    pilotage?: {
      cycle?: {
        id?: string;
        status?: string;
        cycleType?: string;
        cki?: { ckiId?: string | null };
      } | null;
      trajectory?: { proposed?: unknown | null; retained?: unknown | null };
    };
  };
  const turns = Array.isArray(body.turnProjections) ? body.turnProjections : [];
  const lastEffect =
    [...turns]
      .reverse()
      .map((t) => t.pilotageEffect)
      .find((e) => e && e.attempted) ?? null;
  return {
    messageCount: Array.isArray(body.messages) ? body.messages.length : 0,
    messages: Array.isArray(body.messages) ? body.messages : [],
    turnProjections: turns,
    cycleStatus: body.pilotage?.cycle?.status ?? null,
    cycleId: body.pilotage?.cycle?.id ?? null,
    cycleType: body.pilotage?.cycle?.cycleType ?? null,
    ckiId: body.pilotage?.cycle?.cki?.ckiId ?? null,
    trajectoryRetained: Boolean(body.pilotage?.trajectory?.retained),
    trajectoryProposed: Boolean(body.pilotage?.trajectory?.proposed),
    lastPilotageEffect: lastEffect,
    iqStatus: body.initialQualification?.status ?? null,
  };
}

/** Correlate durable pilotageEffect to the assistant that answers a specific user utterance. */
function effectForUserUtterance(
  snap: ProjectSnap,
  utterance: string,
  opts?: { minUserIndex?: number },
): { userId: string; assistantId: string; effect: PilotageEffectSnap } {
  const needle = utterance.slice(0, Math.min(48, utterance.length));
  const minIdx = opts?.minUserIndex ?? 0;
  let userIdx = -1;
  for (let i = snap.messages.length - 1; i >= minIdx; i--) {
    const m = snap.messages[i]!;
    if (m.role === "user" && (m.content ?? "").includes(needle)) {
      userIdx = i;
      break;
    }
  }
  expect(userIdx, `user utterance not found: ${needle}`).toBeGreaterThanOrEqual(0);
  const user = snap.messages[userIdx]!;
  expect(user.id, "user message id required for correlation").toBeTruthy();
  const assistant = snap.messages.slice(userIdx + 1).find((m) => m.role === "assistant");
  expect(assistant?.id, "assistant reply after user turn required").toBeTruthy();
  const turn = snap.turnProjections.find((t) => t.messageId === assistant!.id);
  expect(turn?.pilotageEffect?.attempted, "turnProjection.pilotageEffect for this assistant").toBe(
    true,
  );
  return {
    userId: user.id!,
    assistantId: assistant!.id!,
    effect: turn!.pilotageEffect!,
  };
}

async function pollUntil(
  request: APIRequestContext,
  projectId: string,
  pred: (s: ProjectSnap) => boolean,
  opts?: { maxMs?: number; stepMs?: number },
): Promise<ProjectSnap> {
  const maxMs = opts?.maxMs ?? 25000;
  const stepMs = opts?.stepMs ?? 500;
  const start = Date.now();
  let last = await getProjectSnap(request, projectId);
  while (Date.now() - start < maxMs) {
    if (pred(last)) return last;
    await new Promise((r) => setTimeout(r, stepMs));
    last = await getProjectSnap(request, projectId);
  }
  return last;
}

async function waitIqTerminal(
  request: APIRequestContext,
  projectId: string,
): Promise<ProjectSnap> {
  let last = await pollUntil(
    request,
    projectId,
    (s) => ["PROPOSED", "CLARIFICATION", "FAILED"].includes(s.iqStatus ?? ""),
    { maxMs: 12000 },
  );
  if (["PROPOSED", "CLARIFICATION"].includes(last.iqStatus ?? "")) return last;
  for (let i = 0; i < 3; i++) {
    await request.post(`/api/projects/${projectId}/initial-qualification/reconcile`, {
      timeout: 12000,
    });
    last = await pollUntil(
      request,
      projectId,
      (s) => ["PROPOSED", "CLARIFICATION", "FAILED"].includes(s.iqStatus ?? ""),
      { maxMs: 8000 },
    );
    if (["PROPOSED", "CLARIFICATION"].includes(last.iqStatus ?? "")) return last;
  }
  return last;
}

async function createSyntheticProject(page: Page): Promise<{ projectId: string; name: string }> {
  const name = uniqueProjectName("E07Browser Cont");
  await openNewPreparation(page);
  await sendPrepMessage(
    page,
    `Je veux un cadrage pour clarifier le périmètre d'un cockpit produit, nommé ${name}.`,
  );
  await seedInspectedNameViaApi(page, {
    name,
    summary: "E07 browser continuity synthetic",
  });
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await page.getByTestId("prep-create-project").click();
  const access = page.getByRole("button", { name: /Accéder au projet/i });
  await expect(access).toBeEnabled({ timeout: 60000 });
  await access.click();
  await page.waitForURL("**/projects/**", { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return { projectId: projectId!, name };
}

async function sendTravail(page: Page, text: string) {
  const draft = page.getByTestId("thread-draft").first();
  const send = page.getByTestId("thread-send").first();
  await expect(draft).toBeEditable({ timeout: 20000 });
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 10000 });
  await send.click();
  await expect(page.getByText(text.slice(0, Math.min(40, text.length)), { exact: false }).last()).toBeVisible({
    timeout: 30000,
  });
  await expect(draft).toHaveValue("", { timeout: 60000 });
}

test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {
  test.describe.configure({ mode: "serial", timeout: 240_000 });

  let projectId = "";
  let rejectProjectId = "";

  test("BROWSER-05 prep — create project without technical mission dump", async ({ page }) => {
    await loginPilotA(page);
    const created = await createSyntheticProject(page);
    projectId = created.projectId;

    const iq = await waitIqTerminal(page.request, projectId);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(iq.iqStatus);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    await shot(page, "b05-travail-after-create");

    const snap = await getProjectSnap(page.request, projectId);
    const assistant = snap.messages.filter((m) => m.role === "assistant");
    for (const m of assistant) {
      expect(m.content ?? "").not.toMatch(/### Suite de mission/i);
      expect(m.content ?? "").not.toMatch(/projectId=proj_/);
      expect(m.content ?? "").not.toMatch(/clientIntentKey=/);
    }
    // UI: no raw mission dump as Nora speech
    await expect(page.getByText(/### Suite de mission/i)).toHaveCount(0);
    await expect(page.getByText(/projectId=proj_/)).toHaveCount(0);

    // Reload — projection still métier
    await page.reload();
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    await expect(page.getByText(/### Suite de mission/i)).toHaveCount(0);
    await expect(page.getByText(/projectId=proj_/)).toHaveCount(0);
    test.info().annotations.push({
      type: "note",
      description: `BROWSER-05 PASS — projectId=${projectId}; assistantMsgs=${assistant.length}; no tech dump`,
    });
  });

  test("BROWSER-01 — GO naturel cadrage → ACTIVE CADRAGE + restitution + surfaces sans F5", async ({
    page,
  }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);

    // RETAIN when a proposed trajectory exists (fixture now registered).
    const before = await getProjectSnap(page.request, projectId);
    if (before.trajectoryProposed && !before.trajectoryRetained) {
      await sendTravail(page, "Je retiens cette trajectoire.");
      const retained = await pollUntil(
        page.request,
        projectId,
        (s) => s.trajectoryRetained === true,
        { maxMs: 20000 },
      );
      expect(retained.trajectoryRetained).toBe(true);
      expect(retained.lastPilotageEffect?.operation).toBe("RETAIN_TRAJECTORY");
      expect(["APPLIED", "ALREADY_APPLIED"]).toContain(retained.lastPilotageEffect?.status ?? "");
    }

    const go =
      "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.";
    await sendTravail(page, go);
    await shot(page, "b01-travail-after-go");

    const open = await pollUntil(
      page.request,
      projectId,
      (s) =>
        s.cycleStatus === "ACTIVE" &&
        s.cycleType === "CADRAGE" &&
        s.lastPilotageEffect?.operation === "OPEN_CYCLE" &&
        ["APPLIED", "ALREADY_APPLIED"].includes(s.lastPilotageEffect?.status ?? ""),
      { maxMs: 30000 },
    );

    expect(open.cycleStatus, "durable ACTIVE required").toBe("ACTIVE");
    expect(open.cycleId).toBeTruthy();
    expect(open.cycleType, "canonical CADRAGE after cadrage semantic").toBe("CADRAGE");
    expect(open.ckiId, "CKI principal associé").toBeTruthy();
    expect(open.lastPilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(["APPLIED", "ALREADY_APPLIED"]).toContain(open.lastPilotageEffect?.status ?? "");

    // Restitution métier in API messages (durable) — no pre-effect hedge, success facts.
    const lastAssistant = [...open.messages].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);
    expect(lastAssistant?.content ?? "").toMatch(/appliquée|déjà appliquée/i);
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/reste à confirmer par Studio/i)).toHaveCount(0);

    // Surfaces without F5 — wait for refreshed durable pilotage (not the static card shell).
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-cycle-card")).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/CYCLE EN COURS|● Actif/i).first()).toBeVisible({
      timeout: 20000,
    });
    await expect(
      page.getByTestId("project-overview-cycle-card").getByRole("heading", { name: /Cadrage/i }),
    ).toBeVisible({ timeout: 10000 });
    await shot(page, "b01-projet-after-open");

    await openSurface(page, "pilotage");
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
    // Wait for durable ACTIVE panel (not merely forecast wording).
    await expect(page.getByTestId("trajectory-cycle-actif-panel")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("trajectory-cki-banner")).toBeVisible({ timeout: 15000 });
    await shot(page, "b01-trajectoire-after-open");

    // QA-02 — open dedicated CKI surface; assert identity matches durable projection (no soft if).
    await expect(page.getByTestId("trajectory-cki-banner")).toContainText(open.ckiId!, {
      timeout: 15000,
    });
    await page.getByTestId("trajectory-cki-banner").click();
    await expect(page.getByTestId("trajectory-cki-methode")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("trajectory-cki-layout")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("trajectory-cki-main")).toBeVisible();
    await expect(page.getByTestId("trajectory-cki-absent")).toHaveCount(0);
    const ckiNode = page.getByTestId("trajectory-cki-id");
    await expect(ckiNode).toBeVisible({ timeout: 15000 });
    await expect(ckiNode).toHaveAttribute("data-cki-id", open.ckiId!);
    await expect(ckiNode).toHaveText(open.ckiId!);
    await shot(page, "b01-cki-region");

    // Sans F5: leave CKI, return, same identity
    await page.getByRole("button", { name: /Retour à la trajectoire/i }).click();
    await expect(page.getByTestId("trajectory-cycle-actif-panel")).toBeVisible({ timeout: 10000 });
    await expect(page.getByTestId("trajectory-cki-banner")).toContainText(open.ckiId!);
    await page.getByTestId("trajectory-cki-banner").click();
    await expect(page.getByTestId("trajectory-cki-id")).toHaveAttribute(
      "data-cki-id",
      open.ckiId!,
    );

    await openSurface(page, "travail");
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });

    // Refresh volontaire — CKI facts still match
    await page.reload();
    await openSurface(page, "pilotage");
    await expect(page.getByTestId("trajectory-cycle-actif-panel")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("trajectory-cki-banner")).toContainText(open.ckiId!);
    await page.getByTestId("trajectory-cki-banner").click();
    await expect(page.getByTestId("trajectory-cki-id")).toHaveAttribute(
      "data-cki-id",
      open.ckiId!,
    );

    test.info().annotations.push({
      type: "note",
      description: `BROWSER-01 PASS — cycleId=${open.cycleId}; type=${open.cycleType}; cki=${open.ckiId}; effect=${open.lastPilotageEffect?.status}; LIVE NOT PROVEN`,
    });
  });

  test("BROWSER-04 — sync sans F5 + contrôle refresh volontaire", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);

    const before = await getProjectSnap(page.request, projectId);
    expect(before.cycleStatus).toBe("ACTIVE");
    expect(before.cycleType).toBe("CADRAGE");

    // Change surface after effect already applied (situation 1)
    await openSurface(page, "pilotage");
    await expect(page.getByText(/Cadrage|CADRAGE/i).first()).toBeVisible({ timeout: 15000 });
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-cycle-card")).toBeVisible({ timeout: 15000 });
    await openSurface(page, "travail");
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });

    // Voluntary refresh control — same durable facts
    await page.reload();
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    const after = await getProjectSnap(page.request, projectId);
    expect(after.cycleId).toBe(before.cycleId);
    expect(after.cycleType).toBe("CADRAGE");
    expect(after.cycleStatus).toBe("ACTIVE");
    await shot(page, "b04-after-voluntary-refresh");

    test.info().annotations.push({
      type: "note",
      description:
        "BROWSER-04 PASS — surface change after effect without F5; situation-2 live multi-tab push NOT claimed (no universal realtime bus)",
    });
  });

  test("BROWSER-02 — REJECTED unknown cycleType + no ACTIVE fictif", async ({ page }) => {
    await loginPilotA(page);
    const created = await createSyntheticProject(page);
    rejectProjectId = created.projectId;
    const iq = await waitIqTerminal(page.request, rejectProjectId);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(iq.iqStatus);

    await page.goto(`/projects/${rejectProjectId}?surface=travail`);
    await sendTravail(page, "Ouvre le cycle comparaison_de_solutions.");

    const snap = await pollUntil(
      page.request,
      rejectProjectId,
      (s) =>
        s.lastPilotageEffect?.operation === "OPEN_CYCLE" &&
        s.lastPilotageEffect?.status === "REJECTED",
      { maxMs: 25000 },
    );

    expect(snap.lastPilotageEffect?.status).toBe("REJECTED");
    expect(snap.cycleStatus).toBeNull();
    expect(snap.cycleId).toBeNull();

    const lastAssistant = [...snap.messages].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/refusée|refus/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/a été \*\*appliquée\*\*|désormais actif/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);

    // Correlate REJECTED to this utterance's assistant turn (not a prior OPEN).
    const rejectedCorr = effectForUserUtterance(
      snap,
      "Ouvre le cycle comparaison_de_solutions.",
    );
    expect(rejectedCorr.effect.operation).toBe("OPEN_CYCLE");
    expect(rejectedCorr.effect.status).toBe("REJECTED");

    await expect(page.getByText(/refusée|refus/i).last()).toBeVisible({ timeout: 15000 });
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-no-cycle")).toBeVisible({ timeout: 15000 });

    // QA-FINAL-04 — no active CKI when no cycle
    await openSurface(page, "pilotage");
    const openCkiAbsent = page
      .getByTestId("trajectory-cki-banner")
      .or(page.getByTestId("trajectory-open-cki"));
    await expect(openCkiAbsent.first()).toBeVisible({ timeout: 15000 });
    await openCkiAbsent.first().click();
    await expect(page.getByTestId("trajectory-cki-absent")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("trajectory-cki-id")).toHaveCount(0);
    await shot(page, "b02-rejected-no-cycle");

    test.info().annotations.push({
      type: "note",
      description: `BROWSER-02 PASS — REJECTED correlated assistant=${rejectedCorr.assistantId}; reason=${rejectedCorr.effect.reason ?? "?"}; no ACTIVE; CKI absent`,
    });
  });

  test("BROWSER-03 — restitution coherente (hedge strip); CONFLICT/UNKNOWN levels declared", async ({
    page,
  }) => {
    // APPLIED / REJECTED browser paths: BROWSER-01 / BROWSER-02.
    // CONFLICT / UNKNOWN composer wording: unit ensemble07-pilotage-effect-restitution — NOT BROWSER.
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await page.reload();
    const snap = await getProjectSnap(page.request, projectId);
    const assistants = snap.messages.filter((m) => m.role === "assistant").map((m) => m.content ?? "");
    for (const c of assistants) {
      if (/Résultat Studio/i.test(c) && /appliquée|refusée|conflit|vérification/i.test(c)) {
        expect(c).not.toMatch(/reste à confirmer par Studio/i);
      }
    }
    test.info().annotations.push({
      type: "note",
      description:
        "BROWSER-03 PARTIAL — hedge/coherence BROWSER PROVEN; CONFLICT/UNKNOWN = UNIT DETERMINISTIC ONLY — BROWSER NOT RUN (no reliable non-fraudulent conflict injection in lane)",
    });
  });

  test("QA-FINAL-01 — stale GET must not overwrite newer projection", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    // Baseline load WITHOUT race interception — prove ACTIVE first.
    await page.goto(`/projects/${projectId}?surface=projet`);
    await expect(
      page.getByTestId("project-overview-cycle-card").getByRole("heading", { name: /Cadrage/i }),
    ).toBeVisible({ timeout: 20000 });
    const baselineCycleId = (await getProjectSnap(page.request, projectId)).cycleId;
    expect(baselineCycleId).toBeTruthy();

    const FRESH_MARKER = "E07_FRESH_B_PROJECTION_MARKER";
    const STALE_MARKER = "E07_STALE_A_PROJECTION_MARKER";

    type Gate = { promise: Promise<void>; resolve: () => void };
    const makeGate = (): Gate => {
      let resolve!: () => void;
      const promise = new Promise<void>((r) => {
        resolve = r;
      });
      return { promise, resolve };
    };

    let getA = 0;
    let getB = 0;
    let otherGets = 0;
    let aFulfilledCount = 0;
    let bSeenInUi = false;
    /** Explicit phases — Strict Mode may double-invoke the URL effect; all A-phase GETs stay stale+held. */
    let phase: "await_a" | "hold_a" | "await_b" | "done" = "await_a";

    const awaitGate = async (gate: Gate, label: string, ms = 15000) => {
      await Promise.race([
        gate.promise,
        new Promise<void>((_, reject) => {
          setTimeout(() => {
            reject(
              new Error(
                `QA-FINAL-01 timeout waiting for ${label} (phase=${phase}, getA=${getA}, getB=${getB}, otherGets=${otherGets}, bSeenInUi=${bSeenInUi})`,
              ),
            );
          }, ms);
        }),
      ]);
    };

    const releaseA = makeGate();
    const aIntercepted = makeGate();
    const bIntercepted = makeGate();
    const bFulfilled = makeGate();
    const aFulfilled = makeGate();

    const staleBody = JSON.stringify({
      pilotage: {
        projectId,
        revision: 1,
        cycle: {
          id: baselineCycleId,
          status: "ACTIVE",
          cycleType: "CADRAGE",
          objective: STALE_MARKER,
          cki: { ckiId: "stale-cki-should-not-win", availability: "ASSOCIATED" },
        },
        closedCycles: [],
        trajectory: { proposed: null, retained: null },
        method: { presence: "ABSENT" },
        restrictions: [],
      },
      messages: [],
    });
    const freshBody = JSON.stringify({
      pilotage: {
        projectId,
        revision: 99,
        cycle: {
          id: baselineCycleId,
          status: "ACTIVE",
          cycleType: "CADRAGE",
          objective: FRESH_MARKER,
          cki: { ckiId: "fresh-cki-b", availability: "ASSOCIATED" },
        },
        closedCycles: [],
        trajectory: { proposed: null, retained: { id: "traj_fresh" } },
        method: { presence: "ABSENT" },
        restrictions: [],
      },
      messages: [],
    });

    const matchProjectGet = (url: URL) =>
      url.pathname === `/api/projects/${projectId}` ||
      url.pathname === `/api/projects/${projectId}/`;

    // Exact project resource only — do not swallow /pilotage sub-routes.
    await page.route(matchProjectGet, async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      if (phase === "await_a" || phase === "hold_a") {
        getA += 1;
        if (phase === "await_a") {
          phase = "hold_a";
          aIntercepted.resolve();
        }
        await releaseA.promise;
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: staleBody,
        });
        aFulfilledCount += 1;
        if (aFulfilledCount === 1) aFulfilled.resolve();
        return;
      }
      if (phase === "await_b") {
        getB += 1;
        if (getB === 1) bIntercepted.resolve();
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: freshBody,
        });
        if (getB === 1) {
          phase = "done";
          bFulfilled.resolve();
        }
        return;
      }
      otherGets += 1;
      await route.continue();
    });

    // A then B: two rail surface changes → two URL-effect refreshDurablePilotage generations.
    const navA = openSurface(page, "pilotage");
    await awaitGate(aIntercepted, "GET A intercept");
    expect(getA, "GET A must be intercepted at least once").toBeGreaterThanOrEqual(1);
    expect(getB, "GET B must not start before phase flip").toBe(0);
    await navA; // surface flip; A-phase GETs remain held

    phase = "await_b";
    const navB = openSurface(page, "projet");
    await awaitGate(bIntercepted, "GET B intercept");
    expect(getB, "GET B must be intercepted").toBeGreaterThanOrEqual(1);

    // B must complete and be observable BEFORE A is released.
    await awaitGate(bFulfilled, "GET B fulfill");
    await expect(page.getByText(FRESH_MARKER, { exact: false })).toBeVisible({ timeout: 20000 });
    bSeenInUi = true;
    await expect(page.getByText(STALE_MARKER, { exact: false })).toHaveCount(0);
    await navB;

    // Now release stale A-phase GETs and wait until at least one fulfill finishes.
    releaseA.resolve();
    await awaitGate(aFulfilled, "GET A fulfill after release");
    // Allow React to process any late setState from stale A.
    await page.waitForTimeout(250);

    // A must NOT overwrite B's identifiable fresh projection.
    await expect(page.getByText(FRESH_MARKER, { exact: false })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(STALE_MARKER, { exact: false })).toHaveCount(0);
    await expect(
      page.getByTestId("project-overview-cycle-card").getByRole("heading", { name: /Cadrage/i }),
    ).toBeVisible();
    await expect(page.getByTestId("project-overview-no-cycle")).toHaveCount(0);

    await page.unroute(matchProjectGet);

    // Durable API still ACTIVE — GET race must not mutate métier.
    const after = await getProjectSnap(page.request, projectId);
    expect(after.cycleId).toBe(baselineCycleId);
    expect(after.cycleStatus).toBe("ACTIVE");
    expect(after.cycleType).toBe("CADRAGE");

    expect(getA, "GET A must have run").toBeGreaterThanOrEqual(1);
    expect(getB, "GET B must have run").toBeGreaterThanOrEqual(1);
    expect(aFulfilledCount, "GET A must have completed after release").toBeGreaterThanOrEqual(1);
    expect(bSeenInUi, "fresh B projection must have been observable before A release").toBe(true);

    test.info().annotations.push({
      type: "note",
      description: `QA-FINAL-01 PASS — A held (getA=${getA}), B fulfilled+visible (${FRESH_MARKER}) before A release (aFulfilled=${aFulfilledCount}), no stale overwrite; otherGets=${otherGets}`,
    });
  });

  test("BROWSER-06 — correlated second OPEN + GET immutability", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);

    const before = await getProjectSnap(page.request, projectId);
    expect(before.cycleStatus).toBe("ACTIVE");
    const beforeCycleId = before.cycleId;
    const beforeMsgCount = before.messageCount;

    // Ambiguous / unmatched utterance → dialogue only, no second ACTIVE
    await sendTravail(page, "Ce serait intéressant de commencer.");
    const afterAmb = await getProjectSnap(page.request, projectId);
    expect(afterAmb.cycleId).toBe(beforeCycleId);
    expect(afterAmb.cycleStatus).toBe("ACTIVE");

    // GET-only polls — no mutation
    const a = await getProjectSnap(page.request, projectId);
    const b = await getProjectSnap(page.request, projectId);
    expect(b.cycleId).toBe(a.cycleId);
    expect(b.cycleType).toBe(a.cycleType);
    expect(b.messageCount).toBe(a.messageCount);

    // QA-03 — Repeat OPEN: correlate the NEW turn, not a historical OPEN effect.
    const repeatGo = "Ouvre le cycle cadrage.";
    const minUserIndex = afterAmb.messageCount;
    await sendTravail(page, repeatGo);

    const afterRepeat = await pollUntil(
      page.request,
      projectId,
      (s) => {
        if (s.messageCount <= beforeMsgCount) return false;
        try {
          const corr = effectForUserUtterance(s, repeatGo, { minUserIndex });
          return (
            corr.effect.operation === "OPEN_CYCLE" &&
            ["ALREADY_APPLIED", "REJECTED"].includes(corr.effect.status ?? "")
          );
        } catch {
          return false;
        }
      },
      { maxMs: 30000 },
    );

    const corr = effectForUserUtterance(afterRepeat, repeatGo, { minUserIndex });
    // With an ACTIVE cycle already present, D5 must refuse a second OPEN (not soft-pass on first APPLIED).
    expect(["ALREADY_APPLIED", "REJECTED"]).toContain(corr.effect.status ?? "");
    if (corr.effect.status === "REJECTED") {
      expect(corr.effect.reasonCode ?? corr.effect.reason ?? "").toMatch(/ACTIVE|cycle/i);
    }
    expect(afterRepeat.cycleId).toBe(beforeCycleId);
    expect(afterRepeat.cycleStatus).toBe("ACTIVE");
    expect(afterRepeat.cycleType).toBe("CADRAGE");

    // Nora restitution for THIS assistant must not claim a fresh applied success as if first open.
    const assistantMsg = afterRepeat.messages.find((m) => m.id === corr.assistantId);
    expect(assistantMsg?.content ?? "").toMatch(/Résultat Studio/i);
    expect(assistantMsg?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);

    // Cross-project isolation: reject project still has no cycle
    if (rejectProjectId) {
      const other = await getProjectSnap(page.request, rejectProjectId);
      expect(other.cycleStatus).toBeNull();
      expect(other.cycleId).toBeNull();
    }

    await shot(page, "b06-idempotence");
    test.info().annotations.push({
      type: "note",
      description: `BROWSER-06 PASS — correlated assistant=${corr.assistantId} status=${corr.effect.status}; cycleId=${beforeCycleId}`,
    });
  });
});
===== END FILE projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts =====


## 16. État tracked / untracked après commit

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/.tmp-sfia-review/ensemble07-browser-evidence/b01-cki-region.png
?? projects/.tmp-sfia-review/ensemble07-browser-evidence/b01-projet-after-open.png
?? projects/.tmp-sfia-review/ensemble07-browser-evidence/b01-trajectoire-after-open.png
?? projects/.tmp-sfia-review/ensemble07-browser-evidence/b01-travail-after-go.png
?? projects/.tmp-sfia-review/ensemble07-browser-evidence/b02-rejected-no-cycle.png
?? projects/.tmp-sfia-review/ensemble07-browser-evidence/b04-after-voluntary-refresh.png
?? projects/.tmp-sfia-review/ensemble07-browser-evidence/b05-travail-after-create.png
?? projects/.tmp-sfia-review/ensemble07-browser-evidence/b06-idempotence.png
?? projects/sfia-studio-next/web/scripts/_dbg-e07-process.mts
?? projects/sfia-studio-next/web/scripts/_e07-recapture-08.mts
?? projects/sfia-studio-next/web/scripts/e07-capture-sas-modal.mts
?? projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts
?? projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts

```

Modifications produit tracked absentes hors `.tmp-sfia-review/chatgpt-review.md` (pack). Untracked préexistants conservés.

## 17. Absence de push projet / mutation RECETTE

- `git status -sb` : branche locale sans tracking distant de publication ce cycle
- Aucun `git push` de la branche produit
- RECETTE `:3200` toujours HTTP 200 ; SHA runtime historique `6ecdb987` non remplacé
- main inchangée (`542da1de917867b6bbda8b2b57d100552711c9aa`)

## 18. Niveau exact de preuve LIVE

**NOT RUN** — fixture déterministe uniquement. Ne constitue **pas** une certification fournisseur réel.

CONFLICT/UNKNOWN : UNIT DETERMINISTIC ; BROWSER NOT RUN (inchangé).

## 19. Réserves restant ouvertes

1. LIVE Nora fournisseur — gate Morris distinct
2. CONFLICT/UNKNOWN browser — NOT RUN
3. A2 / D2 parcours — SKIP justifiés (failure path / conversational CLOSE)
4. Candidat **local** — non publié ; décision RECETTE Morris distincte
5. Fidélité visuelle Figma 13 frames — hors mandat correctif

## 20. Verdict

**ENSEMBLE 07 — LOCAL GIT CANDIDATE FROZEN — MORRIS RECETTE GATE REQUIRED**

## 21. Gate Morris suivant

Décision distincte de mise à disposition RECETTE (build/deploy) — **non autorisée** par ce GO. Aucun push projet, PR, merge, déploiement ni appel Nora LIVE effectué.

Le candidat Ensemble 07 est figé localement. Aucun push projet, PR, merge, déploiement RECETTE ni appel Nora LIVE n'a été effectué.
