# SFIA Review Pack FULL — Ensemble 07 · Git Integration PR #687

> Review Pack FULL · Handoff L3 publish-in-cycle
> Merge automatique : **NON** (revue indépendante ChatGPT requise)
> RECETTE / UX 11/11 / Ensemble 08 code : **NON**
> CI : **pas de re-poll aveugle** — cause racine SAS06 viewport diagnostiquée + fix prouvé localement

## 1. Date et GO

| | |
|---|---|
| Date | 2026-11-21T12:10Z |
| GO Morris | CRITICAL — publication + intégration Ensemble 07 · merge autorisé après revue PASS + required checks |
| Cycle | 13 — PR Readiness / Git Integration (+ remediation CI create-path) |
| PR produit | https://github.com/mcleland147/sfia-workspace/pull/687 |
| PR docs remplacée (après merge main) | https://github.com/mcleland147/sfia-workspace/pull/686 |

## 2. Git Truth

### Initial
| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche delivery | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| Tip intégration | `8b256c720f06a28eb6720b69813de5606f751875` |
| Code recetté UAT | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| BUILD UAT | `BtZP6qDx5oAw8jwPQSEhc` |
| origin/main | `542da1de917867b6bbda8b2b57d100552711c9aa` |
| Ascendance | `5ad8fa57` **ancêtre** de tip `8b256c72` — **PROUVÉ** |
| Dirty préservé | `.tmp-sfia-review/**`, scripts `_dbg*`, evidence PNG (non commités) |

### Branche d'intégration
| | |
|---|---|
| Branche | `sfia/next-ensemble07-git-integration` |
| HEAD / tip distant | `8b256c720f06a28eb6720b69813de5606f751875` |
| Tree | `ce7b5847117dcf357b8169a4d3b95f1638e4117e` |
| Tree `web/` | `faf11ec472320d6bb27a75cbec7e33b50dcaef9d` |
| Push projet | **OUI** (branche d'intégration uniquement) |
| Merge main | **NON** (attente revue ChatGPT) |

### Code recetté préservé + delta post-UAT (honnête)
| Contrôle | Résultat |
|---|---|
| `git merge-base --is-ancestor 5ad8fa57 HEAD` | YES |
| Diff runtime `web/src` + e2e depuis `5ad8fa57` | **non vide** — helpers create SAS06 + reachabilité CTA Accéder (viewport) |
| Commits post-UAT docs | `8a673dc7`, `e784dc93`, merge docs `5ebf074b` |
| Commits post-UAT test/fix CI | `fbd232bb` (helper dismiss), `8b256c72` (popup scrollable + scrollIntoView) |
| RECETTE `:3200` / BUILD UAT | **non mutés** ce cycle Git |

## 3. Documents PR #686 intégrés

Source : `docs/next-ensemble07-closeout-20261121@60fca17e52a6dcb987ea9b75a260f6a0da93fbad`

| Fichier | Blob (identique distant) | Résolution |
|---|---|---|
| PV UAT | `e749701ad79c4fa76fdb000211738df5ce14e7ad` | conflit add/add → **theirs = v0.3 closeout** |
| Registre revues | `2bbdb8981de4e690a2e5525981cc8e594ad01249` | merge auto (v0.18) |
| Methodo Figma↔Cursor v1.1 | `b18aa2f1764db60fa8d1129fa1fbe6d1b1610629` | ajout (absent delivery) |

Commit merge : `5ebf074b` — message docs closeout into product branch.

```
commit 5ebf074b71893a9a52a8a98ec7e27cac64ebb7a4
Merge: e784dc93 60fca17e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Nov 21 11:53:59 2026 +0100

    docs(next): integrate Ensemble 07 closeout docs (PR #686) into product branch

    Bring PV v0.3, registre revues v0.18, and Figma↔Cursor methodo v1.1 onto the recetted Ensemble 07 candidate without rewriting the runtime SHA 5ad8fa57. Resolve PV add/add by keeping the consolidated closeout v0.3.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../registre-central-revues.md                     |  40 ++-
 .../ux-ui/methodologie-contrat-figma-cursor.md     | 348 +++++++++++++++++++++
 .../ensemble-07-recette-utilisateur-20261121.md    |  47 ++-
 3 files changed, 420 insertions(+), 15 deletions(-)
```

## 4. Historique commits (origin/main..HEAD)

```
8b256c72 fix(next): keep SAS06 Accéder CTA reachable on default Playwright viewport
fbd232bb test(next): align Playwright create flow with Ensemble 07 SAS06 popup
5ebf074b docs(next): integrate Ensemble 07 closeout docs (PR #686) into product branch
60fca17e docs(next): record Ensemble 07 Figma UAT evidence, gates and Ensemble 08 handoff
9da05433 docs(next): update central ML4D review matrix through Ensemble 07 acceptance
a25a07eb docs(next): consolidate verified Figma Page 10 method and bounded Ensemble 07 REX
7da79ace docs(next): finalize Ensemble 07 Morris UAT and preserve historical reservations
e784dc93 docs(next): fix Ensemble 07 PV SHA/build identity for Acquis clearance
8a673dc7 docs(next): record Ensemble 07 Acquis reserve clearance SHA and RECETTE build
5ad8fa57 fix(next): balance Ensemble 07 Acquis/À clarifier panels 50/50
09a935bc fix(next): align Ensemble 07 to Figma Page 10 experiment
ce03f5a7 fix(next): align Ensemble 07 Figma runtime UX and CKI editorial
c500df9c fix(next): stabilize Ensemble 07 governed pilotage continuity
6ecdb987 feat(next): freeze Ensemble 07 project trajectory candidate
e36fd8b0 docs(next): integrate Morris-approved D5 trajectory projection, synchronization and history rules
29576429 docs(next): integrate Morris-approved D3 proactive trajectory and conversational guidance rules
f94a73b8 docs(next): integrate Morris-approved D2 rules for initial trajectory qualification
de8613b6 docs(next): record Morris approval of Ensemble 07 architecture dossier content
9075011e docs(next): propose Ensemble 07 functional and technical architecture dossier
e1c36d88 docs(next): record Morris UX acceptance of four Ensemble 07 companion frames
89947423 docs(next): refine synchronized trajectory UX, sequential proposal and composer lock
c1dd0ea5 docs(next): define proactive trajectory from SAS, resilient continuation and conversational cycle guidance
fe978887 docs(next): formalize validated Ensemble 07 functional and UX reference
```

## 5. Diff vs origin/main — inventaire

75 fichiers · +9990 / −261 · **uniquement** `projects/sfia-studio-next/**`

Migrations : `015_trajectory_qualification.sql`, `016_initial_qualification_expected.sql` (additives).

### name-status

```
M	projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md
M	projects/sfia-studio-next/conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md
M	projects/sfia-studio-next/conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md
A	projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
A	projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-dossier-architecture-fonctionnelle-technique-candidat.md
A	projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md
M	projects/sfia-studio-next/construction/convergence-ux-ui-globale/registre-central-revues.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/ux-ui/methodologie-contrat-figma-cursor.md
A	projects/sfia-studio-next/validation-qualite/ensemble-07-recette-utilisateur-20261121.md
A	projects/sfia-studio-next/web/public/figma/sas06/confirmation-cercle.svg
A	projects/sfia-studio-next/web/public/figma/sas06/focus-halo.svg
A	projects/sfia-studio-next/web/public/figma/sas06/icone-analyse.svg
A	projects/sfia-studio-next/web/public/figma/sas06/icone-confirme.svg
A	projects/sfia-studio-next/web/public/figma/sas06/icone-evaluation.svg
A	projects/sfia-studio-next/web/public/figma/sas06/icone-halo.svg
A	projects/sfia-studio-next/web/public/figma/sas06/icone-information.svg
A	projects/sfia-studio-next/web/public/figma/sas06/repere-attente.svg
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/scripts/e07-capture-sas-modal.mts
A	projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts
A	projects/sfia-studio-next/web/scripts/e07-cycle8-measure.mts
A	projects/sfia-studio-next/web/scripts/e07-measure-acquis-panels.mts
A	projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts
A	projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts
M	projects/sfia-studio-next/web/scripts/e2e-web-server.sh
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/reconcile/route.ts
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
M	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
A	projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
A	projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
M	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
M	projects/sfia-studio-next/web/src/components/shell/studio-shell.css
A	projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql
A	projects/sfia-studio-next/web/src/db/migrations/016_initial_qualification_expected.sql
M	projects/sfia-studio-next/web/src/db/schema.ts
M	projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
M	projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
A	projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/cki-editorial.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/service.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/types.ts
M	projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
M	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
A	projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts
M	projects/sfia-studio-next/web/src/lib/http-errors.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
A	projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/cki-editorial.test.ts
A	projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts
A	projects/sfia-studio-next/web/tests/unit/durable-refresh-guard.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
A	projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts
A	projects/sfia-studio-next/web/tests/unit/project-overview-next-envisaged.test.ts
```

### diffstat

```
.../contexte-et-conduite-gouvernee-de-nora.md      |   35 +
 .../creation-de-projet-et-continuite-du-sas.md     |   30 +
 .../trajectoire-cycles-et-guidance-cki.md          |   39 +
 .../ensemble-07-as-built-initial-qualification.md  |   76 ++
 ...rchitecture-fonctionnelle-technique-candidat.md |  530 +++++++++
 ...jectoire-conception-fonctionnelle-contrat-ux.md |  367 ++++++
 .../registre-central-revues.md                     |   40 +-
 .../construction/delivery-history.md               |  235 ++++
 .../ux-ui/methodologie-contrat-figma-cursor.md     |  111 +-
 .../ensemble-07-recette-utilisateur-20261121.md    |  340 ++++++
 .../web/public/figma/sas06/confirmation-cercle.svg |    3 +
 .../web/public/figma/sas06/focus-halo.svg          |    3 +
 .../web/public/figma/sas06/icone-analyse.svg       |    6 +
 .../web/public/figma/sas06/icone-confirme.svg      |    5 +
 .../web/public/figma/sas06/icone-evaluation.svg    |   11 +
 .../web/public/figma/sas06/icone-halo.svg          |    3 +
 .../web/public/figma/sas06/icone-information.svg   |    9 +
 .../web/public/figma/sas06/repere-attente.svg      |    3 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |    4 +-
 .../web/scripts/e07-capture-sas-modal.mts          |  147 +++
 .../web/scripts/e07-cycle8-measure-13.mts          |  273 +++++
 .../web/scripts/e07-cycle8-measure.mts             |  142 +++
 .../web/scripts/e07-measure-acquis-panels.mts      |  268 +++++
 .../web/scripts/e07-runtime-screenshots.mts        |  155 +++
 .../web/scripts/e07-seed-screenshot.mts            |  240 ++++
 .../sfia-studio-next/web/scripts/e2e-web-server.sh |    4 +
 .../[preparationId]/create-project/route.ts        |   63 +-
 .../initial-qualification/reconcile/route.ts       |   26 +
 .../web/src/app/api/projects/[projectId]/route.ts  |    2 +
 .../src/app/preparations/[preparationId]/page.tsx  |   77 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  233 +++-
 .../web/src/components/figma/NoraConversation.tsx  |   94 +-
 .../web/src/components/figma/ProjectChrome.tsx     |   16 +-
 .../web/src/components/figma/ProjectOverview.tsx   |  395 +++++--
 .../components/figma/SasCreateProgressPopup.tsx    |  242 ++++
 .../web/src/components/figma/TrajectoryBoard.tsx   | 1235 ++++++++++++++++++++
 .../web/src/components/figma/tokens.css            |   89 +-
 .../web/src/components/shell/StudioShell.tsx       |    7 +
 .../web/src/components/shell/studio-shell.css      |   19 +
 .../db/migrations/015_trajectory_qualification.sql |   33 +
 .../016_initial_qualification_expected.sql         |    5 +
 projects/sfia-studio-next/web/src/db/schema.ts     |   38 +
 .../conversation/fixture-semantic-qualify.ts       |   68 +-
 .../src/domains/conversation/intent-conduction.ts  |    7 +-
 .../conversation/pilotage-effect-restitution.ts    |  165 +++
 .../web/src/domains/conversation/service.ts        |   40 +-
 .../web/src/domains/pilotage/cki-editorial.ts      |  102 ++
 .../web/src/domains/pilotage/command-runner.ts     |   28 +
 .../src/domains/pilotage/conversation-authority.ts |   22 +
 .../domains/pilotage/cycle-objective-display.ts    |   47 +
 .../src/domains/pilotage/cycle-type-normalize.ts   |  107 ++
 .../web/src/domains/pilotage/forecast-builder.ts   |  219 ++++
 .../pilotage/initial-qualification-types.ts        |   33 +
 .../src/domains/pilotage/initial-qualification.ts  |  995 ++++++++++++++++
 .../web/src/domains/pilotage/intent.ts             |    5 +-
 .../web/src/domains/pilotage/nora-context.ts       |    4 +
 .../web/src/domains/pilotage/qualification-lock.ts |   33 +
 .../web/src/domains/pilotage/service.ts            |  119 +-
 .../web/src/domains/pilotage/types.ts              |   33 +
 .../web/src/domains/preparation/create-project.ts  |    7 +
 .../web/src/domains/preparation/project-context.ts |   53 +-
 .../web/src/lib/durable-refresh-guard.ts           |   27 +
 .../sfia-studio-next/web/src/lib/http-errors.ts    |    2 +
 .../e2e/ensemble07-browser-continuity.spec.ts      |  773 ++++++++++++
 .../web/tests/e2e/ensemble07-parcours-af.spec.ts   |  418 +++++++
 .../ensemble07-initial-qualification.pg.test.ts    |  745 ++++++++++++
 .../web/tests/unit/cki-editorial.test.ts           |   36 +
 .../web/tests/unit/cycle-objective-display.test.ts |   33 +
 .../web/tests/unit/durable-refresh-guard.test.ts   |   44 +
 .../unit/ensemble07-cycle-type-normalize.test.ts   |   60 +
 .../unit/ensemble07-ensure-idempotent.test.ts      |   49 +
 .../tests/unit/ensemble07-forecast-builder.test.ts |  139 +++
 .../ensemble07-pilotage-effect-restitution.test.ts |   97 ++
 .../unit/ensemble07-qualification-lock.test.ts     |   40 +
 .../unit/project-overview-next-envisaged.test.ts   |   48 +
 75 files changed, 9990 insertions(+), 261 deletions(-)
```

## 6. Qualification readiness (rejouée)

| Suite | Statut | Note |
|---|---|---|
| tsc | **PASS** | rejoué (tip docs merge) |
| unit E07 (9 files) | **34 PASS** | rejoué |
| PG ensemble07-initial-qualification | **15 PASS** | rejoué · DEV `:5433` |
| build production | **PASS** | rejoué · BUILD_ID local ≠ RECETTE |
| Playwright local create-path | **PASS** | `g4-b1-b4` + `project-space-ensemble04:11` · **2 passed (29.5s)** après fix viewport |
| UX 11/11 | **NOT RE-RUN** | UAT gelé `5ad8fa57` ; delta tip = SAS06 CTA reachability + e2e only |
| F2 Acquis | historique PASS | non rejoué |
| Nora LIVE | **NOT RUN** | hors scope |

## 7. CI / Required checks — diagnostic (pas de force)

### Cause racine (prouvée localement, pas re-poll)

Les e2e create-path timeoutaient avec le popup SAS06 **visible** et le bouton « Accéder au projet » présent mais **hors viewport** sous le viewport Playwright par défaut (~1280×720) : carte `minHeight: 726` + `paddingTop: 124` ≈ 850 px. Le seul spec F2 qui passait utilisait déjà `1680×970`.

| Correctif | SHA | Contenu |
|---|---|---|
| Helper dismiss | `fbd232bb` | `clickCreateProjectAndEnter` + dismiss CTA |
| Viewport reachability | `8b256c72` | overlay/card scrollables + `scrollIntoViewIfNeeded` ; stop poll step 3 |

### Runs

| Check | État au pack | Run / note |
|---|---|---|
| Next CI tip `5ebf074b` | **FAIL** (create-path / SAS06) | 44896630792 |
| Next CI tip `fbd232bb` | en cours / obsolète vs tip | 44899876707 — **ne pas forcer** |
| Next CI tip `8b256c72` | démarré après push du fix | **44902434109** |
| SFIA Studio Required Gate | PASS historique (non Next) | 44896630787 / 44902434102 |
| PR | ouverte, **pas mergée** | #687 |

## 8. PR produit

| | |
|---|---|
| Number | **#687** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/687 |
| Base | `main` |
| Head | `sfia/next-ensemble07-git-integration@8b256c72` |
| Merge effectué | **NON** |

## 9. Réserves gouvernées (conservées)

- FIX-03 autonomie processus NOT PROVEN
- Nora LIVE globale NOT PROVEN
- SAS06 modal PARTIAL
- Labels angles CKI ≠ Figma courts
- Gate C OPEN · NO RELEASE · pas STABLE · pas ADOPTED
- Collision cookies DEV/RECETTE (ENV-01 réserve A) historique

## 10. Préparation Ensemble 08 (sans développement)

| | |
|---|---|
| Famille registre | **08 — Git, publication et intégrations** · « À ouvrir — prochaine revue » |
| Après merge E07 | relever SHA `main` post-merge ; CI post-merge ; clôturer #686 si 3 fichiers présents |
| Capacités E07 livrées | SAS→projet, qualification initiale, Trajectoire/CKI, continuité Pilot/Nora, UX Page 10 + Acquis 50/50 |
| Methodo Figma v1.1 | dans l’arbre PR · **généralisation non ADOPTED** · limites MCP/frames NONE |
| Contrats à relire avant cadrage E08 | SEF, ENV-01, registres surfaces Git/intégrations, décisions publication, contrats UX Git existants |
| IN E08 (indicatif registre) | Surfaces Git, inspection/préparation, autorisation/états, paramètres intégrations, erreurs/refus **sans effet réel non autorisé** |
| OUT | nouveau code E08 ce cycle · Gate C · STABLE · ADOPTED |

## 11. Contenu complet — PV v0.3

```markdown
# SFIA Studio Next — Ensemble 07
## Dossier de recette utilisateur — Projet, Travail, Trajectoire et conduite de Nora

| Champ | Valeur |
| --- | --- |
| Version | **0.3 — 21 novembre 2026** |
| Autorité de recette | **Morris — acceptation UAT du 21/11/2026 avec réserve UX unique** |
| Périmètre | **R5 / ML4D / Ensemble 07** — SAS, création, Projet, Travail, Trajectoire, CKI, Nora |
| Projet de recette | **Equip'Campus**, projet fictif |
| Statut | **MORRIS UAT ACCEPTED — FINAL UX RESERVE TECHNICALLY CLEARED — GIT INTEGRATION PENDING** |
| Nature | PV évolutif, constats, réserves et demandes de diagnostic ; document **non normatif** |
| Publication documentaire | Version initiale sur `docs/next-ensemble07-recette-20261121` ; consolidation finale sur `docs/next-ensemble07-closeout-20261121` issue de `main@542da1de917867b6bbda8b2b57d100552711c9aa` ; **non mergée au moment de cette rédaction** |
| Acceptation | **ACCEPTÉE** (périmètre présenté) avec réserve UX unique Acquis/À clarifier ; **pas** de PR/merge/STABLE/ADOPTED |

> **Précédence des observations.** Le handoff technique de déploiement conclut « RECETTE AVAILABLE — MORRIS UAT REQUIRED » au moment de la mise à disposition. Les observations réelles de Morris du 21 novembre interviennent **après** ce handoff et ne modifient pas rétroactivement les tests techniques. Les captures de la conversation constituent ici les preuves visuelles disponibles ; elles ne sont pas encore archivées en binaires dans Git.

## 1. Objet, méthode et niveaux de preuve

Le scénario vise à vérifier qu'une intention suffisamment détaillée peut conduire, sans formalités excessives, à la création d'un projet, à une proposition de trajectoire, puis à une décision gouvernée d'ouverture de cycle. La campagne examine en parallèle la qualité cognitive de Nora, la continuité des états et la fidélité aux maquettes Figma.

**Lecture stricte des preuves :**
- **OBSERVÉ MORRIS** : écran, message ou comportement montré en capture et/ou relaté directement par le Pilote.
- **RAPPORTÉ CURSOR** : valeur de runtime, migration ou résultat technique consigné dans un Review Handoff, non réexécuté ici.
- **ANALYSE / HYPOTHÈSE** : lecture fonctionnelle ou cause possible à confirmer par diagnostic.
- **NON OBSERVÉ / NOT PROVEN** : absence de preuve suffisante ; ne vaut pas nécessairement preuve d'absence en base.
- **NOT RUN** : scénario non exercé au cours de cette campagne.

Les PASS métier et les échecs techniques ne sont pas inférés de la seule qualité linguistique de Nora. Une proposition ≠ un acte retenu ≠ un effet D5 vérifié.

## 2. Candidat et environnement de RECETTE — instantané initial historique

| Élément | Référence et niveau de preuve |
| --- | --- |
| Dépôt | mcleland147/sfia-workspace |
| Branche code candidate | sfia/next-ensemble07-projet-trajectoire-delivery — **locale**, non publiée selon Cursor |
| Commit candidat | **6ecdb987ee867a04ff816b699eb8870ac200db0a** — rapporté Cursor |
| Tree | **d0ad47ff515676f1c033a39030e886859f7272f7** — rapporté Cursor |
| Build servi | **armX_D1HJzN6q-4MuDpYv** — rapporté Cursor |
| URL de recette | http://127.0.0.1:3200 — utilisée par Morris |
| Service | com.sfia.studio.next.recette.ml4d-ux004 — rapporté Cursor |
| Base RECETTE | sfia_next_recette_ml4 sur port 5434 — rapporté Cursor |
| Migrations | 015 et 016 appliquées, selon Cursor |
| Versioning | NO RELEASE / Gate C OPEN / STABLE non promue |

**Particularité de l'environnement :** le handoff indique que le conteneur PostgreSQL RECETTE était absent, que Cursor l'a recréé, puis a restauré un dump du 20 novembre avant de sauvegarder à nouveau et d'appliquer 015/016. Les données modifiées après le dump source ne sont donc pas garanties récupérées. Les smoke tests E06/E07 étaient PASS selon Cursor, mais n'établissent pas l'acceptation utilisateur E07.

Handoff vérifié : [Ensemble 07 — mise à disposition RECETTE](https://github.com/mcleland147/sfia-workspace/blob/2dc3e178fd70a8d8a793e0ec863b917c50055737/sfia-review-handoff/latest-chatgpt-review.md).
Référence du gel local : [Ensemble 07 — PROJECT GIT FREEZE](https://github.com/mcleland147/sfia-workspace/blob/29277518bfd6702a7b358da43c9b0d6402e7d1a1/sfia-review-handoff/latest-chatgpt-review.md).

**Nora LIVE / déterministe :** Morris déclare travailler avec Nora LIVE ; une trace SAS visible mentionne « openai-agents-sdk-live ». Les E2E préalables ont été qualifiés en FAKE/DETERMINISTIC. Ce sont **deux périmètres différents**. L'identité effective du fournisseur et la qualification sémantique des tours de cette RECETTE seront établies, si nécessaire, depuis les traces runtime, sans supposer que les résultats E2E simulés prouvent ce comportement LIVE.

## 3. Intention du projet fictif Equip'Campus

Une organisation de formation technique souhaite centraliser les déclarations, affectations, suivis, résolutions et historiques d'incidents concernant des équipements pédagogiques, en remplacement d'échanges par e-mail, téléphone et tableurs.

**Périmètre pilote :** trois centres fictifs à Bordeaux, Nantes et Toulouse ; environ 120 équipements, 30 utilisateurs déclarants et 6 techniciens. Petite équipe projet avec notamment un développeur et deux référents métier. Objectif indicatif : démarrage opérationnel du pilote sous 12 semaines. Enveloppe indicative de 60 000 €, non validée.

**IN :** déclaration d'incident, suivi, traitement, clôture, historique, préparation des données, droits, accompagnement, indicateurs.

**OUT de la première étape :** maintenance prédictive, remplacement de la gestion des achats, application mobile native.

**Incertitudes volontairement conservées :** solution du marché ou développement spécifique, priorité des incidents, autorité de clôture, intégrations nécessaires, disponibilités réelles, calendrier exact et critères d'évaluation.

Ces éléments doivent permettre à Nora de raisonner et challenger sans présumer un budget acquis, un choix technique ou un GO de cycle.

## 4. Campagne réalisée — chronologie et verdicts

### E07-SC-01 — SAS : qualification et base suffisante

**OBSERVÉ MORRIS — SATISFAISANT SUR LE FOND.**

Nora analyse le besoin, les responsabilités, le référentiel d'équipements, les risques d'adoption, la confidentialité, les métriques du pilote et les contraintes de délai. Elle reformule le résultat, le premier périmètre et quatre questions encore ouvertes (échéance, existant, capacité, charge/criticité).

L'écran présente « Vous avez une base pour démarrer », un aperçu cohérent et le bouton « Créer le projet ». Les quatre questions ne bloquent pas la création.

**Réserve :** la pop-up et la géométrie des surfaces ne respectent pas suffisamment les maquettes UX validées.

### E07-SC-02 — Création explicite et transition

**OBSERVÉ MORRIS — CRÉATION ABOUTIE ; TRANSITION PARTIELLEMENT OBSERVÉE.**

Après clic sur « Créer le projet », une pop-up expose :
1. « Projet créé » ;
2. « Identification des cycles pertinents » ;
3. « Proposition ou clarification ».

Le projet Equip'Campus est accessible ensuite. Morris n'a pas observé attentivement le passage 2→3 ni la navigation durant l'analyse ; ne pas considérer l'animation, l'auto-actualisation et la reprise comme validées. Un nouveau projet pourra servir à cette recette spécifique.

### E07-SC-03 — Travail : continuité du fil et première restitution

**OBSERVÉ MORRIS — PARTIEL.**

Le contenu du SAS est retrouvé dans Travail ; le compositeur est utilisable après la restitution. Nora fournit une proposition initiale : **Cadrage → Conception fonctionnelle → Conception UX**, présentée comme une direction non retenue avec ouverture distincte du premier cycle.

**Écart important :** un message attribué à Nora, « Suite de mission », expose des identifiants et statuts techniques (projectId, status=COMPLETED, clientIntentKey, restitution=DELIVERED, références d'étape). Ces données n'ont pas leur place dans la conversation métier du Pilote. Ne pas confondre trace d'activité Studio et prise de parole cognitive Nora.

### E07-SC-04 — Trajectoire initiale et CKI avant cycle

**OBSERVÉ MORRIS — FONCTIONNELLEMENT PLAUSIBLE / UX NON CONFORME.**

Trajectoire affiche initialement trois cycles successifs envisagés : **Cadrage, Conception fonctionnelle, Conception UX**. Il ne s'agit pas de trois options concurrentes et aucun cycle n'est encore ouvert.

L'écran « CKI et méthode » indique « Aucun CKI principal actif » et « Aucune méthode retenue ». En l'absence de cycle effectif, **ces états sont cohérents** et ne doivent pas être corrigés artificiellement.

**Réserve UX :** dimensions des cartes et du grand conteneur, manques de séparateurs, hiérarchie et espacements, position du CTA « Examiner avec Nora dans Travail », libellés/statuts attendus.

### E07-SC-05 — Vue Projet sans cycle actif

**OBSERVÉ MORRIS — FONCTIONNELLEMENT PLAUSIBLE / UX NON CONFORME.**

L'écran Projet annonce « Aucun cycle en cours ». Dans Activité du projet : **1 sujet ouvert**, **0 décisions applicables**, **0 documents en cours**. Le sujet « Cadrage initial d'Equip'Campus » est affiché ; son contenu interne n'a pas été testé.

**Réserve UX :** carte d'état trop compacte et sans séparateur entre les deux explications ; trois cartes d'activité insuffisamment conformes aux dimensions, séparations internes et espaces du Figma validé.

### E07-SC-06 — Challenge du raisonnement et taxonomie des cycles

**OBSERVÉ MORRIS — BON RAISONNEMENT MÉTIER, ÉCART DE COHÉRENCE PRODUIT.**

Invitée à articuler les points de passage du SAS avec ses cycles, Nora propose une variante métier à quatre ensembles :
1. Cadrage métier et du pilote ;
2. Exploration des solutions et conception ciblée ;
3. Réalisation et mise en service du pilote ;
4. Expérimentation et évaluation.

La réponse mobilise convenablement les contraintes, les besoins et les arbitrages. **Mais ces quatre intitulés ne correspondent pas tels quels aux types de cycles reconnus par Studio.** Des phases/activités métier ont été présentées comme cycles envisagés.

Après objection de Morris, Nora reconnaît l'écart et revient aux cycles reconnus : Cadrage, Conception fonctionnelle, UX/UI. Elle distingue mieux activités métier, cycles et guidance CKI.

**Verdict borné :** capacité de challenge et d'autocorrection satisfaisante ; fiabilité spontanée de la taxonomie sous challenge non acquise.

Nora indique dans cet échange ne pas disposer du catalogue complet des cycles/CKI. Ce constat déclaratif justifie une inspection du contexte D3 réellement fourni ; il ne prouve pas à lui seul l'absence du catalogue au runtime. La proposition initiale UX vise un **horizon indicatif de 1 à 3 cycles**, non un plafond absolu de cycles sur tout le projet.

### E07-SC-07 — Orientation retenue et consentement historique

**OBSERVÉ MORRIS — ÉTAT RETENU VISUEL, ORIGINE À CORRÉLER.**

Une capture de Travail montre un accord antérieur du Pilote : **« ok ça me va »**. Nora l'interprète comme un accord sur la direction initiale, distinct d'une ouverture. L'ancien soupçon d'orientation retenue sans aucun accord exprimé est donc **retiré**.

Après rafraîchissement, Trajectoire affiche « Orientation retenue — aucun cycle n'est encore ouvert » avec la séquence Cadrage → Conception fonctionnelle → Conception UX.

Une **orientation retenue sans cycle actif est un état métier valide**. En revanche, la chronologie exacte de la persistance et de l'actualisation UI reste à diagnostiquer. La variante visuelle compacte n'est pas reconnue par Morris comme la représentation Figma attendue.

### E07-SC-08 — GO naturel explicite d'ouverture CADRAGE

**OBSERVÉ MORRIS — RÉSULTAT UTILISATEUR NON ABOUTI.**

Message du Pilote : confirmation de l'orientation, puis **« Je te donne maintenant mon accord explicite pour ouvrir le premier cycle de cadrage »**.

Nora répond que le GO est explicite, identifie correctement Equip'Campus et le cycle de cadrage, et précise qu'aucune confirmation supplémentaire n'est nécessaire. Elle ajoute cependant : **« l'ouverture effective reste à confirmer par Studio »** et poursuit des recommandations cognitives.

Les captures de contrôle montrent :
- Trajectoire : **orientation retenue, aucun cycle ouvert** ;
- CKI : **aucun CKI principal actif** ;
- Travail : **aucune restitution d'ouverture effectivement confirmée** ;
- après refresh : affichage modifié de Trajectoire, mais toujours sans cycle actif.

**Conclusion de recette : GO RECOGNIZED — OPENING NOT PROVEN — END-TO-END USER OUTCOME INCOMPLETE.**

L'absence de cycle visible ne détermine pas seule si OPEN_CYCLE a été non qualifié, non tenté, rejeté, en conflit, bloqué, appliqué mais non projeté, ou encore inconnu. Vérifier les commandes et données avant toute affirmation de cause racine. Ne pas renvoyer arbitrairement le même GO pendant l'investigation.

## 5. Registre des écarts et réserves

Les priorités sont proposées pour le triage, sans constituer des P0 techniques établis.

| Réf. | Surface / thème | Écart ou contrôle manquant | Priorité | État |
| --- | --- | --- | --- | --- |
| **E07-UAT-01** | Pop-up SAS | Dimensions, espacement, hiérarchie, layout des étapes peu fidèles à Figma | Moyenne | Ouvert UX |
| **E07-UAT-02** | Travail | Message de mission technique visible comme réponse de Nora | **Haute** | Ouvert |
| **E07-UAT-03** | Trajectoire initiale | Conteneur/cartes trop compacts, séparateurs, statut, alignements et CTA divergents | Moyenne | Ouvert UX |
| **E07-UAT-04** | Projet état vide | Séparateur et espacement entre explications manquants | Moyenne | Ouvert UX |
| **E07-UAT-05** | Activité Projet | Hiérarchie compteurs/titres/détails/liens et séparations visuelles divergentes | Moyenne | Ouvert UX |
| **E07-UAT-06** | SAS→Projet | Justification initiale insuffisante du passage des points métier aux cycles | Moyenne | Ouvert fonctionnel |
| **E07-UAT-07** | Création | Transition/popup, reprise et UI sans refresh insuffisamment observées | À qualifier | NOT RUN complet |
| **E07-UAT-08** | Taxonomie | Quatre phases métier proposées comme cycles ; correction après objection | **Haute** | Ouvert cognitif |
| **E07-UAT-09** | Contexte D3 | Nora déclare ne pas avoir le catalogue complet des cycles/CKI | **Haute** | Diagnostic |
| **E07-UAT-10** | OPEN_CYCLE | GO explicite sans cycle ACTIVE observable | **Bloquant pour ce parcours** | Diagnostic prioritaire |
| **E07-UAT-11** | Post-effet | Nora ne restitue pas le statut gouverné vérifié ni la suite post-ouverture | **Bloquant pour ce parcours** | Diagnostic prioritaire |
| **E07-UAT-12** | Rafraîchissement | Orientation retenue visible après refresh, synchronisation immédiate non vérifiée | Haute | Diagnostic |
| **E07-UAT-13** | Trajectoire retenue sans cycle | Variante compacte, fidélité/état Figma à clarifier | Moyenne | Ouvert UX |
| **E07-UAT-14** | Mode Nora | Déclaration LIVE et trace sdk-live, sans corrélation par tour aux preuves serveur | À qualifier | Provenance runtime |

**Écart retiré :** supposition d'une orientation retenue sans accord historique. La capture montrant « ok ça me va » modifie ce constat.

## 6. Analyse fonctionnelle transverse — boucle gouvernée

La vision validée distingue **Pilote décide**, **Nora comprend et restitue**, **D6 qualifie l'autorité**, **D5 applique/persiste l'état**. Le contrat n'impose pas de deuxième confirmation rituelle lorsqu'un GO suffisamment clair a déjà été émis.

**Chaîne attendue :**
1. Pilote exprime le GO en langage naturel.
2. Nora identifie une intention qualifiée, la cible et la portée.
3. Studio/D6 vérifie auteur, restrictions, autorité et état courant.
4. Studio/D5 applique ou refuse l'opération, conserve le résultat durable.
5. Le résultat effectif est récupéré/reconstitué de façon fiable après toute interruption.
6. Nora restitue en **langage métier** un succès vérifié, un refus, un conflit ou un état incertain ; elle propose la suite utile.
7. Projet, Travail, Trajectoire et CKI affichent des états cohérents, sans refresh manuel exigé pour constater un effet réussi.

La restitution post-effet doit être garantie **fonctionnellement**, sans imposer une deuxième invocation LLM si une autre solution respecte honnêteté, continuité et qualité métier. **Ne pas créer de moteur de conversation, de décisions ni de projection concurrent.**

Invariants :
- GO compris ≠ commande tentée ≠ commande appliquée ≠ cycle ACTIVE.
- D5 est seul propriétaire de l'état de cycle ; D6 de l'autorité ; D3 de la conduite et restitution.
- Un seul cycle ACTIVE par projet.
- CKI principal seulement lorsqu'un cycle reconnu a été effectivement ouvert.
- Une décision « retenue » peut exister sans cycle actif.
- Rejeu, retry et refresh ne créent pas de second effet ni de faux statut.
- Nora ne confirme jamais un effet sur la seule base de ses propres paroles.

## 7. Fidélité Figma — remarques Morris

Les écarts signalés concernent la **géométrie et le contrat visuel**, pas seulement des préférences de style : largeur du contenu principal, gabarits des cartes, séparateurs horizontaux, padding, gaps, alignements, ordre des informations, hiérarchie des titres et CTA.

Références de revue :
- SAS 06 — pop-up : [Figma node 1022:112](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1022-112).
- Trajectoire 09.11 : [Figma node 1034:505](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1034-505).
- Projet 09.06 : [Figma node 999:261](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=999-261).
- Travail : référence de conception 05.17, à ouvrir par identifiant exact dans les sources du projet.

**Questions de diagnostic :** les frames sont-ils structurés en vrais calques/Auto Layout ? Cursor lit-il le contexte de design structuré (MCP Figma) ou seulement des captures ? Les écarts sont-ils mesurés à viewport identique ? Ne pas imposer de pixel-perfect à partir de captures seules sans accès aux propriétés réelles.

**Aucune modification du design ou du code n'est décidée par cette section.**

## 8. Diagnostic Cursor demandé avant correction

**DIAG-01 — Tour GO / commande d'ouverture :** retrouver le projet et le message utilisateur durable (identifiants depuis la DB, sans divulgation inutile), intention sémantique et son schéma, opération qualifiée ou non, passage D6, commandes D5, décision, effets et statut APPLIED/ALREADY_APPLIED/REJECTED/CONFLICT/UNKNOWN, cycle et CKI réels. Établir l'endroit exact d'interruption ou de refus.

**DIAG-02 — Ordonnancement et restitution :** identifier chronologiquement l'exécution et la réponse Nora. Déterminer si Nora a répondu avant le résultat D5, si elle a eu accès au statut effectif et pourquoi l'accusé métier post-effet est absent. Examiner la reprise/idempotence sans appeler un second moteur.

**DIAG-03 — Synchronisation :** rapprocher D5 persistant, projections API, cache/client, navigation et refresh. Vérifier le moment de rétention de l'orientation sans déduire une ouverture d'un état RETAINED.

**DIAG-04 — Catalogue/CKI :** identifier le contexte de cycle effectivement disponible pour Nora et l'origine de l'affirmation d'indisponibilité du catalogue. Respecter la taxonomie du produit tout en préservant la liberté de raisonnement métier ; ne pas injecter les 15 fiches intégrales à chaque tour.

**DIAG-05 — Provenance LIVE :** vérifier configuration et traces propres aux tours Equip'Campus (fournisseur, éventuelles fixtures, résultat de qualification), distinguer LIVE réellement observé des preuves E2E déterministes. Ne jamais exposer des secrets.

**DIAG-06 — Géométrie Figma :** auditer 09.06 et 09.11 (plus SAS si utile), source structurée vs image et mesure des écarts de taille, gaps, paddings, alignements, séparateurs et CTA. Lecture seule ; distinguer maquette mal structurée, consommation incomplète ou CSS divergent.

**Sortie attendue du diagnostic :** observations vérifiables, causes racines prouvées ou NON OBSERVÉ, frontières impactées, sévérité, conditions d'exit, propositions de corrections groupables en macro-lot ; aucune correction ou mutation RECETTE sous ce mandat.

## 9. Scénarios restant à recetter

| Parcours | Statut |
| --- | --- |
| Nouvelle création — observer popup 1→2→3 et accès direct au projet | NOT RUN complet |
| Première restitution sans refresh et absence de doublon | PARTIAL |
| OPEN_CYCLE naturel appliqué jusqu'à ACTIVE | **NOT PROVEN** |
| CKI Cadrage principal effectivement disponible après ouverture | NOT PROVEN |
| Projet/Trajectoire/Travail synchronisés sur ouverture | NOT PROVEN |
| Conduite cognitive et CKI durant CADRAGE | NOT RUN |
| Progression/maturité et statut du cycle | NOT RUN |
| CLOSE gouverné et bilan | NOT RUN |
| Réorientation / transition vers cycle suivant | NOT RUN |
| Reprise après interruption / refresh sans nouvel effet | NOT RUN |
| Alignement Figma après correction | NON REQUALIFIÉ |

## 10. Réserves héritées et limites de l'acceptation

- FIX-03 : réconciliation contrôlée prouvée, autonomie du processus non démontrée.
- Clôture conversationnelle navigateur : NOT PROVEN dans la campagne technique précédente.
- Nora LIVE : des échanges utilisateur sont observés, mais la qualification LIVE globale n'est pas établie.
- Rendu Figma : non accepté dans cette campagne.
- Données RECETTE : restauration du dump du 20 novembre, delta post-dump non garanti.
- Absence de preuve directe des traces internes après GO : les causes sont à instruire avant correctifs.

**Verdict historique provisoire, antérieur à la décision Morris du 21/11 et à la levée de réserve (§12–13) :**

**ENSEMBLE 07 — MORRIS UAT IN PROGRESS — FUNCTIONAL GAPS OBSERVED — DIAGNOSIS REQUIRED.**

**Au moment de cet instantané uniquement**, Morris n'avait pas encore accepté l'Ensemble 07 ni autorisé les correctifs. **Cet état est remplacé pour le périmètre de recette par la décision explicite du 21/11 (§12) et sa confirmation visuelle finale (§13)**. Gate C, release, STABLE et ADOPTED demeurent non acquis.

## 11. Références / traçabilité

Sources de gouvernance et conception :
- [SEF](../governance/SEF.md), [Roadmap](../governance/roadmap.md), décisions ML4D applicables.
- [Nora — conduite gouvernée](../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md).
- [D6 — décisions](../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md).
- [D5 — trajectoire](../conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md).
- [Contrat fonctionnel/UX Ensemble 07](https://github.com/mcleland147/sfia-workspace/blob/docs/next-ensemble07-r2-cursor-contract-20261120/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md).
- [Review Pack E07 RECETTE](https://github.com/mcleland147/sfia-workspace/blob/2dc3e178fd70a8d8a793e0ec863b917c50055737/sfia-review-handoff/latest-chatgpt-review.md).

**Preuves utilisateur :** copies d'écran et réponses Nora/Pilote de la campagne conversationnelle du **21 novembre 2026** : SAS, création, Travail, Projet, Trajectoire, CKI, accord « ok ça me va », GO explicite et rafraîchissement. Les images ne sont **pas** déposées en pièce binaire Git par ce PV.

**Statut des sources Git :** main consultée à **6e93a33d64dfeea2eab88fb7896d733b34053f97** ; candidat produit E07 local non mergé ; présent PV documentaire indépendant.

## 12. Décision Morris — 21/11/2026 (acceptation avec réserve unique)

**Décision Morris du 21/11/2026 :**

> Ensemble 07 accepté en recette utilisateur, avec réserve UX unique concernant la répartition 50/50 des panneaux Acquis identifiés et À clarifier dans Trajectoire. Les autres éléments présentés sont acceptés. La levée de cette réserve nécessite la correction, sa preuve F2 et sa livraison en RECETTE.

### Levée technique de la réserve (Cursor — même journée)

| Champ | Valeur |
| --- | --- |
| Correctif | Conteneur commun `trajectory-cycle-knowledge-row` : `minmax(0,640fr) minmax(0,646fr)` + gap 24 · `min-w-0` · wrap |
| Fichier propriétaire | `web/src/components/figma/TrajectoryBoard.tsx` |
| Preuves F2 | `.tmp-sfia-review/ensemble07-acquis-panels-fix/` — 09.02 / 09.09 @ 1680×970 · Δ≤2 CSS px |
| Mesures typiques | acquis **639** · clarifier **645** · gap **24** · h **157** |
| Candidat code | `5ad8fa57e4d529726244ddfae394074f5ea65432` (runtime RECETTE / SFIA_SOURCE_SHA) |
| RECETTE | http://127.0.0.1:3200 · BUILD `BtZP6qDx5oAw8jwPQSEhc` · SHA runtime `5ad8fa57` · LaunchAgent ml4d-ux004 |
| Distinction | Acceptation utilisateur **déjà donnée** ; la présente ligne constate seulement la **levée technique** de la réserve UX |

### Réserves historiques hors correction (non rouvertes)

Les réserves UAT historiques (E07-UAT-01…14, FIX-03 autonomie, Nora LIVE globale, SAS06 modal PARTIAL, etc.) restent **identifiées** et ne sont pas traitées par ce correctif. Elles n'empêchent pas l'acceptation Morris du périmètre UX présenté le 21/11, sous la réserve unique désormais levée techniquement.

**Verdict documentaire :** `ENSEMBLE 07 — MORRIS UAT ACCEPTED — FINAL UX RESERVE TECHNICALLY CLEARED — READY FOR GIT INTEGRATION REVIEW` (sous réserve SHA/build RECETTE consignés dans le Review Pack du cycle).

**Historique :** v0.1 — consolidation initiale des constats Equip'Campus (21/11/2026). · v0.2 — acceptation Morris + levée technique réserve Acquis/À clarifier (21/11/2026). · v0.3 — confirmation visuelle finale, traçabilité de clôture et passage à la revue Git.


## 13. Confirmation visuelle finale Morris et préparation de clôture — 21/11/2026

**OBSERVÉ MORRIS — ACCEPTATION CONFIRMÉE.** Morris a fourni une nouvelle capture de Trajectoire après déploiement du correctif 50/50 et confirme explicitement : **« c'est ok »**. Il demande la finalisation de la recette, l'actualisation du registre central de revues, l'intégration Git de tous les travaux de l'Ensemble 07 et la préparation du passage à l'Ensemble 08.

### 13.1. Réserve UX finale — sortie

| Critère | Source et constat | Statut |
| --- | --- | --- |
| Répartition Acquis / À clarifier | Figma Page 10 : **640 / 646 px**, gap **24 px** ; mesures Playwright Cursor **639 / 645 / 24 px** sur variantes 09.02 / 09.09 | **TECHNICALLY CLEARED — F2 ≤2 px** |
| Non-régression spécifique | TypeScript PASS, 8 unitaires PASS, browser F2 sur 09.02/09.09 PASS, build PASS, responsive et wrapping ciblés PASS, selon Cursor | **PASS sur tests ciblés** |
| Revue visuelle Morris | Capture Trajectoire post-correctif fournie le 21/11 ; panneaux désormais équilibrés ; décision explicite d'acceptation | **USER ACCEPTED** |
| Campagne intégrale | 11 états exercés et 40/40 assertions critiques F2 du cycle Page 10 ; campagne 11/11 **non rejouée** après ce correctif mono-composant | **PASS historique borné ; pas de nouveau claim global** |

### 13.2. Identité technique et preuve

- **Candidat code réellement servi, selon Cursor :** `5ad8fa57e4d529726244ddfae394074f5ea65432` ; tree `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6`.
- **BUILD RECETTE :** `BtZP6qDx5oAw8jwPQSEhc` sur `127.0.0.1:3200` ; `sfia_next_recette_ml4:5434` ; sauvegarde `ml4d-e07-20261121T103623Z-pre-5ad8fa57.sql.gz`, rollback `09a935bc`.
- **Tip local après ajout du PV :** `e784dc93bc7816bc9724a95bc8abc2b3d633e140` ; ne pas confondre avec le SHA du code servi.
- **Handoff L3 :** [Review Pack LIGHT final](https://github.com/mcleland147/sfia-workspace/blob/b89ba35f83950c35cb572d1b13a675e3cce6d031/sfia-review-handoff/latest-chatgpt-review.md), blob `84859d271b6181823430b12b756e5d0ae1dc353d` (consulté à distance).
- **PV antérieur :** [commit documentaire `16e9107a`](https://github.com/mcleland147/sfia-workspace/commit/16e9107af6e733177dd8bfc534673918db13dd50).
- **Capture utilisateur :** présente dans la conversation du 21/11, **non versée en binaire dans Git** ; sa portée est la validation visuelle des surfaces affichées, pas la preuve de tous les scénarios E2E.

### 13.3. Clôture et frontières

**Décision :** `ENSEMBLE 07 — MORRIS UAT ACCEPTED — FINAL UX RESERVE TECHNICALLY CLEARED`. Le périmètre présenté a été accepté ; ne pas répéter la recette générale du seul fait de la préparation Git.

**Réserves héritées et hors champ du correctif :** celles des §9–12 demeurent consignées ; en particulier SAS06 modal PARTIAL, Nora LIVE globale non prouvée, certains parcours E2E non exercés, labels d'angles CKI, et distinction déterministe / LIVE. Ne pas les effacer ni en déduire Gate C.

**Gate Git restant :** le tip local `e784dc93…` et son ancêtre runtime `5ad8fa57…` ne sont pas disponibles parmi les objets du dépôt Git distant lors de la revue ChatGPT du 21/11. La publication du candidat **doit précéder** toute PR produit, vérification CI et merge ; vérifier le SHA UAT et ses fichiers/diff sans requalifier une autre version par erreur. La méthode Figma v1.1 est sur `docs/next-figma-cursor-experiment-20261121` et doit être intégrée dans le même dispositif de clôture. L'état Git local est **NON OBSERVÉ** par ChatGPT.

**Suite :** intégration projet par PR/merge sous GO Morris déjà formulé pour l'Ensemble 07 et gates CI appropriés ; publication du registre/présent PV/méthode dans un ensemble documentaire cohérent ; vérifier la CI après merge ; **préparer** la revue de l'Ensemble 08 « Git, publication et intégrations », sans engager automatiquement son implémentation. `NO RELEASE / STABLE NOT AVAILABLE / ADOPTED NOT ACQUIRED`.
```

## 12. Contenu complet — Methodo Figma↔Cursor v1.1

```markdown
# SFIA Studio Next — Méthodologie · Contrat Figma ↔ Cursor

**Version :** 1.1 — 21 novembre 2026 (expérimentation page 10, protocole renforcé)
**Nature :** guide opérationnel transversal de préparation Figma, extraction MCP, implémentation et preuve de fidélité.
**Périmètre :** SFIA Studio Next exclusivement, conception UX et delivery UI R3–R6.
**Statut :** GUIDE OPÉRATIONNEL MIS À JOUR — expérimentation Ensemble 07 **positive et vérifiée sur périmètre borné** (11 états Page 10 exercés, 40/40 assertions F2 critiques PASS selon Cursor, UAT Morris ACCEPTED le 21/11), **efficacité générale NON ADOPTED**. Cette validation n'emporte ni preuve pixel-perfect exhaustive de tous les composants ni adoption globale de la méthode. Aucun changement à SEF, F1/F2, SFIA v2.6 ou au template Cursor.
**Autorité :** Morris valide la cible UX et les exceptions ; Cursor réalise les opérations techniques sous contrat SFIA v2.6 ; ChatGPT prépare et revoit.
**Résultat attendu :** une maquette validée devient une **spécification exploitable et contrôlable**, pas une image dont Cursor interprète librement l'apparence.

> **Principe : une interface ne peut être déclarée fidèle à Figma que si sa structure, ses éléments, ses états, ses mesures et son rendu ont été confrontés à la source réellement extraite.** L'accès au MCP ou une capture visuellement ressemblante ne constituent pas cette preuve à eux seuls.

## 1. Positionnement et sources d'autorité

Ce guide **assemble la pratique** de références déjà présentes ; il ne les remplace pas :

1. [SEF v0.2](../governance/SEF.md) — macro-lots, responsabilités, preuves et gates.
2. [Décision Morris F1/F2](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md) — quatre variantes contextuelles du rail et fidélité géométrique mesurée.
3. [Contrat R3 de transposition](contrat-transposition-figma-code.md) — comportement, composants et propriétés natives.
4. [Protocole R3 de fidélité](protocole-fidelite-figma-runtime.md) — acquisition L0/L1/L2, mesure DOM, comparaisons et seuils.
5. [Préflight G2/G3](../construction/convergence-ux-parcours-pilote-nora/protocole-preflight-source-figma.md) — source figée, manifeste, couverture, distinctions avant/après code.
6. [Template SFIA v2.6, §6.6](../../../prompts/templates/sfia-cycle-execution-template.md) — **seule** base pour instancier un contrat Cursor UX/Figma.
7. [PV de recette Ensemble 07](https://github.com/mcleland147/sfia-workspace/blob/7c96bbed7b046b083f9b48b782ae9dcd730358d6/projects/sfia-studio-next/validation-qualite/ensemble-07-recette-utilisateur-20261121.md) et [diagnostic Figma Ensemble 07](https://github.com/mcleland147/sfia-workspace/blob/78824f1073a09210183ea70377459d2ce183899c/sfia-review-handoff/latest-chatgpt-review.md) — retour d'expérience, **pas** une preuve de fidélité des écrans.

**Ordre de vérité :** Git/décisions et exigences fonctionnelles applicables → référence UX/Figma validée pour sa portée → pack de propriétés natives vérifiables → code/DOM/preuves. Les nœuds Figma sont mutables : un lien n'est pas un snapshot.

**F1 déjà décidé :** un seul composant de navigation avec variantes **personnel 246 px, projet 246 px, conversation 240 px, inspection 244 px**. Ne pas transformer ces mesures différentes en une unique largeur forcée. **F2 déjà décidé :** objectif **0 CSS px**, borne **≤ 2 CSS px** pour x/y/w/h des **rectangles stables contractés** dans les mêmes conditions ; aucune tolérance universelle de diff pixel-image n'est validée.

## 2. Deux contrats successifs, un seul parcours de construction

| Moment | Responsable | Résultat obligatoire | État si incomplet |
| --- | --- | --- | --- |
| **A — Conception Figma** | Concepteur / Morris pour validation | **Frame complète et autonome** : rail + header + contenu, composants/instances, Auto Layout des flux, tokens, assets exacts, états et interactions | DESIGN SOURCE INCOMPLETE |
| **B — Extraction avant code (G2)** | Cursor via Figma MCP autorisé | Pack L0/L1/L2 **exhaustif des éléments contractuels visibles**, source autonome, PNG natif+hash, arborescence parentale, instances/overrides, variables, assets et manifeste nœud→DOM→test | FIGMA CONTRACT INCOMPLETE |
| **C — Transposition (G3/G4)** | Cursor sous GO technique | Mapping nœud → responsabilité produit → composant React/CSS + implémentation réutilisable | IMPLEMENTATION NOT READY |
| **D — Vérification runtime (G5)** | Cursor, puis revue ChatGPT/Morris | Fixtures de **chaque état**, assertions structurelles et éditoriales, styles calculés, F2 x/y/w/h, images par région, interactions browser et preuves corrélées au SHA/build | VISUAL / BEHAVIOR NOT PROVEN |

**Aucune étape de livraison séparée n'est imposée :** extraction, code, tests, capture et synchronisation documentaire peuvent appartenir au même macro-lot autorisé. En revanche, **B précède l'écriture du composant concerné**, et **D suit son rendu** ; il est impossible de calibrer un diff image Figma/runtime sans un premier runtime.

## 3. Construire la maquette Figma comme une spécification technique

### 3.1. Frame et état, sans ambiguïté

Pour chaque surface à reproduire :

- Nommer la **fonction produit** et l'**état visible** : exemple « Trajectoire — proposition initiale », « Trajectoire — orientation retenue, aucun cycle actif ».
- Associer **page, frame/node-id, route/surface, viewport de référence et état métier**. Les numéros 09.06/09.11 restent des repères de conception, pas des noms de composants de code.
- Distinguer explicitement frame de référence, maquette exploratoire, index de revue, variante, overlay, état caché et contenu illustratif.
- **Une variante visible et inspectable par état** est recommandée. Si plusieurs sous-frames hidden sont empilées dans une même frame, indiquer **laquelle** est contractuelle ; un nœud caché ne devient pas visible par interprétation de Cursor.
- Identifier les éléments superposés voulus (overlay, menu, modal, badge) et leur ordre de calques. Les overlays de navigation ne sont pas automatiquement des enfants d'un composant Auto Layout.
- Décrire la transition entre états et les actions associées, sans considérer le prototype comme preuve que l'application sait exécuter l'effet.

### 3.2. Structure et dimensionnement

Construire autant que possible une hiérarchie lisible :

**Frame écran → shell → zone contenu → section → composant → élément.**

Sur chaque conteneur pertinent, renseigner ou rendre extractibles :

- direction **horizontal / vertical / grille** ; ordre des enfants et alignements ;
- **padding top/right/bottom/left**, gap, distribution/alignement ;
- **FIXED / HUG / FILL** ou contraintes et redimensionnement équivalents ;
- largeur/hauteur, min/max si applicable, croissance du texte et overflow/scroll ;
- clipping, bordures, rayons, ombres et superpositions intentionnelles ;
- coordonnées **locales au parent** et chaîne parent/enfant.

**Pour toute nouvelle maquette préparée pour transposition, Auto Layout est le choix requis pour les structures de flux** (shell, en-tête, empilements de texte, rangées de cartes, panneaux, actions répétées). Conserver `FIXED/HUG/FILL`, paddings, gaps, alignements et ordre des enfants **nativement extractibles**. La position absolue demeure légitime pour les overlays, badges et emblèmes superposés intentionnels, à condition d'être **déclarée comme telle** dans le manifeste ; pas d'offset arbitraire pour compenser une composition non explicitée. Les maquettes existantes peuvent être restructurées progressivement sans en perdre le visuel. L'export MCP peut exprimer des positions absolues même lorsqu'Auto Layout existe : **inspecter `layoutMode` sur les nœuds natifs**, ne pas inférer la propriété d'une capture.

Une frame desktop de 1680×970 fixe **un point de référence de fidélité** : elle n'impose pas des coordonnées absolues à toutes les tailles d'écran.

### 3.3. Composants, variants et conventions

- Un **composant partagé par responsabilité** (rail, bouton, carte, en-tête, champ, panneau) ; décliner ses états via variants/props quand nécessaire. Pour chaque état, inclure une **instance explicite du shell complet dans la frame** et non une décoration flottante visible seulement sur le canvas Figma.
- Référencer le composant maître, l'instance, les propriétés de variante et les overrides voulus. Ne pas confondre variantes contextuelles légitimes et duplications accidentelles.
- Employer des noms durables par responsabilité produit, conformément à la [convention de nommage](../governance/product-naming-conventions.md), et non des identifiants de chantier.
- Définir styles/tokens pour fonds, bordures, typographie, espacements et états ; **conserver l'identité du token ou de la variable liée** lorsqu'elle existe. Un hexadécimal extrait d'une frame n'est pas automatiquement un token global.
- En cas de valeur divergente sur un même composant supposé partagé, vérifier les variantes puis **signaler l'écart** ; ne pas normaliser silencieusement.

### 3.4. Icônes, pictogrammes, images et assets — point critique

**Une icône n'est pas seulement un emplacement de 16×16 px. Sa forme est contractuelle.**

Pour **chaque icône visible**, définir/exposer :

| Champ | Ce que Cursor doit retrouver |
| --- | --- |
| Identité | Nom fonctionnel, node-id, parent, rôle (action, statut, décoration) |
| Provenance | Instance de bibliothèque + composant maître/variante, **ou** vecteur/source exportable |
| Dessin | SVG/paths ou référence exacte d'une bibliothèque/version connue ; pas de remplacement « similaire » |
| Géométrie | Boîte, viewBox si SVG, taille rendue, alignement, éventuelle rotation |
| Style | Fill/stroke, épaisseur, couleurs/tokens, opacité, rayon/caps/joins si pertinents |
| États | Default, hover, active, focus, disabled, sélectionné, erreur, avec différences réelles |
| Accessibilité | Nom accessible si fonctionnel ; masqué aux lecteurs d'écran si pure décoration |

**Règle d'exécution :** si la source Figma est une icône spécifique, Cursor réemploie **l'asset exact** ou l'instance de bibliothèque strictement équivalente et identifiée. Ne pas choisir une autre icône Lucide/Heroicons/emoji simplement parce qu'elle évoque la même action. Une substitution exige une justification et, si elle modifie la cible validée, un arbitrage Morris.

Même logique pour logos, illustrations, avatars, photos, séparateurs dessinés et motifs. Préciser format, dimensions, cadrage, ratio, mode cover/contain, variations et droit d'utilisation. Les fontes/ressources sous licence ne sont jamais ajoutées au dépôt sans vérification des droits.

### 3.5. Texte, états, interactions et responsive

- Indiquer **font family, poids exact, taille, line-height, letter-spacing, alignement**, segments mixtes, largeur, retour à la ligne et troncature volontaire. Une font « proche » change la géométrie : elle n'est pas conforme.
- Décrire les états réellement nécessaires : nominal, vide, loading, disabled, erreur, conflit, accès refusé, UNKNOWN, hover/focus, mobile. Si un état n'est pas maquetté, l'inscrire comme **SOURCE MANQUANTE** ou spécification fonctionnelle à appliquer, pas comme libre invention.
- Pour chaque contrôle visible : type, libellé, action/route, provenance du résultat, autorité et comportement si indisponible. Ne pas créer de bouton qui semble opérationnel sans capacité métier.
- Documenter explicitement les règles de reflow : colonnes, wrapping, disparition/réapparition de navigation, scrolleurs, texte long, zoom 200 %. Une planche Figma mobile **390×1350** ne définit pas un viewport navigateur de hauteur 1350.
- Contraster état/texte/icône au-delà de la couleur ; clavier, focus visible, ordre de lecture et alternative accessible.

## 4. Contrat d'extraction Cursor — obligatoire avant toute transposition

L'entrée n'est pas « voici un screenshot », mais **une référence Figma validée et des nœuds précis**.

### 4.1. Acquisition MCP et niveaux de profondeur

**L0 — Inventaire :** fileKey, page, frame, version/snapshot connu, route, état, viewport ; **rail, bandeau, contenu et overlays** présents dans la frame ; liste de tous les éléments contractuels visibles et de leurs rôles.

**L1 — Composition :** appeler les opérations Figma MCP disponibles, notamment **get_metadata** et **get_design_context** lorsque présentes, pour retrouver structure, noms/IDs, chaînes de parents, bounds, layout, overlays, instances et captures.

**L2 — Profondeur implémentable :** inspecter les descendants de **tous les composants concernés**, y compris shell, instances et overrides, et récupérer layoutMode, padding/gap, sizing, alignement, typo, variables/tokens, couleurs, strokes, icônes/paths/assets, ordre des enfants, états et propriétés de variantes. Une extraction limitée aux rectangles racines, ou qui manque les liens maître/instance, est **insuffisante** pour coder les cartes, séparateurs et icônes internes.

**Oracle image :** exporter la **vraie capture Figma de la frame/variante** à l'échelle de référence et la conserver avec son empreinte SHA-256, pas seulement son URL temporaire. L'export et l'empreinte ne remplacent pas L1/L2.

Les capacités exactes du MCP sont constatées dans l'environnement Cursor ; si une propriété native (variables, Auto Layout, SVG, source asset) n'est pas exposée, utiliser une autre lecture Figma permise et **documenter le manque**. Ne jamais inventer une valeur pour compléter une extraction.

**Important :** le React/Tailwind illustratif éventuellement renvoyé par get_design_context n'est **pas du code produit à coller mécaniquement**. Il sert à comprendre le design ; le code Studio conserve ses composants, ses contrats métier et son architecture.

### 4.2. Manifeste d'implémentation et provenance

Pour chaque frame/état traité, constituer un pack portant :

- Figma fileKey, pageId/frameId, node-ids critiques, date d'extraction et version/snapshot si accessible ;
- dimensions de conception, viewport de contrôle, état et fixture de données ;
- vrai PNG source + SHA-256 et inventaire des assets ;
- géométrie et styles natifs des nœuds L2 concernés ;
- mapping **exhaustif** node Figma / rôle / hiérarchie → composant React/DOM / sélecteur stable → assertion structure/style/F2/état ;
- empreinte du manifeste dans un sidecar (ne pas hacher un fichier contenant son propre hash) ;
- SHA Git et build de l'implémentation quand ils existent ;
- écarts/absences, propriétaire de décision et condition de sortie.

Utiliser la matrice par élément ci-dessous, ou une représentation structurée équivalente ; **les champs sont des catégories de mesure, pas un nouveau schéma runtime**.

| Champ de preuve | Exemple de contenu attendu |
| --- | --- |
| Figma | frameId / nodeId / parentChain / visible=true / variant=selected |
| Responsabilité | « carte d'activité Projet », « icône retour », « CTA examiner » |
| Propriétés L2 | rect local + rect absolu résolu / padding / gap / typography / asset exact |
| Implémentation | composant React / fichier CSS ou token / état ou prop |
| DOM | sélecteur ou identifiant de test stable / rect mesuré / computedStyle |
| Oracle | fichier Figma PNG + hash / fichier runtime PNG + SHA/build |
| Résultat | delta x/y/w/h, conformité des icônes, structure, texte, statut et réserve |

Pour la géométrie, **ne jamais comparer x/y locaux Figma avec x/y viewport DOM**. Résoudre la chaîne de parents, transformations/scroll et coordonnées effectives avant le calcul du delta.

### 4.3. Gate avant code

Chaque composant critique à réaliser doit avoir, **avant code** :

- une source **validée** et un état visible identifié ; **frame autonome** avec rail et bandeau natifs, ou composants référencés/présents explicitement dans la frame ;
- L1 et **L2 suffisants** ;
- ses icônes/assets identifiés ou le manque marqué ;
- ses contraintes et comportements connus ;
- un oracle PNG source archivé et identifiable ;
- un mapping et des assertions prévus, **y compris la présence, l'ordre, les couleurs, le dessin des icônes, la position des labels, les sections conditionnelles et les CTA** ;
- un **état navigateur reproductible**, ou un plan de fixture DEV isolée pour l'obtenir avant le gate G5, sans mutation d'une RECETTE métier.

**Source critique UNRESOLVED → STOP pour ce composant**, sans interprétation graphique. Le reste du macro-lot peut avancer si l'indépendance des composants est établie et si les interfaces sont maîtrisées.

Verdicts source : **COMPLETE_FOR_COMPONENT / PARTIAL / UNRESOLVED / OUT_OF_SCOPE**. Ne pas prétendre que toute la bibliothèque Figma est complète parce que la frame de référence s'affiche.

## 5. Méthode de transposition vers l'application

1. **Lire le produit existant :** identifier shell, composants réutilisables, tokens, états métier et contrats D1–D6 concernés. Ne pas reproduire des mécanismes fictifs issus d'un prototype.
2. **Fixer le mapping exhaustif** : chaque nœud/élément contractuel Figma visible, y compris descendance de composants/instances, → élément React/DOM et assertion ; chaque différence de variante → prop/style/état documenté. **L'absence d'un élément est un FAIL de structure**, même si le rectangle parent est conforme.
3. **Implémenter la structure d'abord :** hiérarchie, ordre, contraintes, Grid/Flex alignés sur la source. Utiliser absolute seulement pour overlays intentionnels, pas pour corriger artificiellement tous les gaps.
4. **Implémenter les détails exacts :** typographie, icônes d'origine, SVG/assets, rayons, bordures, couleurs et espacements. Des utilitaires CSS génériques sont permis **seulement si leur valeur calculée** est conforme au contrat.
5. **Comparer un premier rendu tôt puis tous les états :** mesurer et capturer un écran représentatif avec la bonne fixture, puis dérouler la matrice **sur chaque état contractuel sans exception silencieuse**. Corriger la **cause commune** (composant/token/layout), pas une série de marges spécifiques par écran.
6. **Ajouter les variantes et états** : nominal/erreur/chargement/absence/conflit/disabled et reflow applicable, puis tests accessibles au clavier.
7. **Synchroniser code, tests, preuves et as-built dans le même lot**. Pas de micro-cycle documentaire après coup.

Les tailles fixes extraites de Figma sont les cibles au viewport d'origine. Une implémentation responsive est souhaitable, mais **elle ne doit pas déjà déformer la cible au viewport contractuel**.

## 6. Contrôle de conformité — zéro confusion entre ressemblance et preuve

### 6.1. Conditions de comparaison

Même frame et **même état métier**, même jeu de données synthétiques, textes, thème, police chargée, locale FR, viewport, zoom, DPR, version navigateur et conditions de rendu connues. Stabiliser l'animation uniquement pour la capture ; ne pas masquer de contrôle ni tronquer de contenu pour faire passer l'image.

Capturer les deux oracles : **PNG Figma natif** et **screenshot navigateur réellement servi**. Conserver les preuves, leur source et le SHA/build. Une simple capture issue d'un autre projet ou une vieille version n'est pas comparable.

### 6.2. Matrice de vérification

| Axe | Test de conformité | Gate |
| --- | --- | --- |
| **Structure** | 100 % des éléments contractuels visibles présents, notamment shell/breadcrumb/badge, iconographie, sur-titres, colonnes, séparateurs, rubriques conditionnelles ; parent/ordre/état corrects ; pas d'élément inventé | **Zéro divergence non acceptée ; présence ≠ emplacement correct** |
| **Icônes/assets** | Source/identité et variante exactes ; géométrie et état conformes | **Pas de substitution par ressemblance** |
| **Géométrie** | DOM getBoundingClientRect : x/y/w/h des rectangles stables, alignements, gaps, hiérarchie | **F2 : cible 0 ; max 2 CSS px** |
| **Styles** | computedStyle : font, poids, taille, interligne, couleur, border, radius, opacité | Valeurs contractuelles exactes lorsque mesurables |
| **Contenu** | Texte, retours à la ligne, densité, scroll, clipping, troncature et focus | Aucun contenu/action perdu ou inaccessible |
| **Image** | Comparaison côte à côte + overlay/diff **par région** avec oracles de même état et provenance ; inspecter aussi les calques/éléments invisibles ou absents | Seuil global **non validé** ; examiner visuellement et corréler les écarts aux nœuds |
| **Fonctionnel** | Navigation, clavier, états, erreurs, permissions et absence de faux effets | Browser + contrat propriétaire ; capture ≠ preuve d'effet |
| **Adaptatif** | 1680×970, 1280×970, 390×844, 320×568 et zoom 200 % selon les références applicables | Reflow et actions utilisables ; pas de pixel-perfect sur frame absente |

La tolérance **≤2 px s'applique aux rectangles stables contractés** dans le cadre de F2, pas à chaque glyphe rasterisé, à une animation transitoire ou aux dimensions variables d'un texte long. Les autres écarts ne deviennent pas automatiquement acceptables : ils sont appréciés selon le contrat applicable et les preuves.

**Ne pas définir un seuil de pixel-diff universel non approuvé.** Neutraliser seulement les régions véritablement non contractuelles et variables, avec justification et une assertion fonctionnelle séparée. Un score image favorable ne compense jamais une mauvaise icône, un panneau manquant ou une action fictive.

### 6.3. Rapport d'écarts exigé

Une ligne par élément critique :

| Node Figma | Element DOM | Attendu | Mesuré | Delta | État |
| --- | --- | --- | --- | --- | --- |
| ID source | Composant / test-id | x,y,w,h ; style ; asset ; état | x,y,w,h ; computedStyle | Δx/Δy/Δw/Δh | Conforme / Écart / Source absente |

**Tout écart a une cause et une suite** : source incohérente, mesure manquante, police non chargée, mauvais asset, mauvaise hiérarchie, mauvais token, logique fonctionnelle incorrecte ou différence de viewport. Ne pas corriger une cause inconnue par une marge arbitraire.

## 7. Exemple concret — Ensemble 07 (observations, non valeurs universelles)

Sur **Figma 09.06 Projet** et **09.11 Trajectoire**, Cursor a rapporté lors du diagnostic :

| Élément / frame | Mesure extraite de la source | Erreur de traduction constatée ou risque |
| --- | --- | --- |
| Frames desktop 09.06/09.11 | 1680×970 | Utiliser la même taille de référence pour la mesure navigateur |
| Rail contextuel Projet | 246 px (variante F1) | Ne pas forcer à 240 px ou 244 px |
| Bandeau supérieur | 70 px | CSS relevé à 72 px dans le candidat |
| 09.06 panneau d'état | x284 / y289 / 1358×222 | Mesurer **ce panneau**, pas simplement la largeur du contenu parent |
| 09.06 cartes activité | 438×278 ; écart env. 22 px | gap-4 CSS = 16 px, donc potentiellement non conforme |
| 09.11 panneau de proposition | x284 / y287 / 1358×545 | Comparer le rectangle réel et ses enfants |
| 09.11 cartes cycles | 404×155 ; écart env. 49 px | flex-wrap et gaps génériques modifient la composition |
| Titres | env. 37–38 px | clamp() observé donnant env. 25–32 px |
| Variante 09.11 | Sous-frames hidden dans la source | Identifier exactement l'état visible avant extraction |

Ces valeurs sont **rapportées par le diagnostic Cursor**, pas re-mesurées directement depuis Figma lors de la rédaction de ce guide. Les revalider au node-id et à la version utilisés pour l'exécution ; ne pas les convertir en tokens globaux pour d'autres frames.

La défaillance E07 n'était **pas** « MCP indisponible » : les dimensions étaient récupérables, mais le mapping source → CSS et la vérification runtime n'étaient pas systématiquement assez contraignants.

## 8. Checklist courte à utiliser dans chaque delivery UX

### Avant de déclarer la maquette prête

- [ ] Frame/état/viewport explicites, validés par Morris.
- [ ] Hiérarchie complète **rail + header + contenu dans chaque frame** ; parent/enfant et couches visibles cohérentes, sans dépendance implicite à des éléments flottants hors frame.
- [ ] Auto Layout **natif sur chaque flux** (shell, stack de textes, rangées, panels) avec direction, alignements, padding/gap, sizing et ordre ; exceptions absolues intentionnelles nommées.
- [ ] Composants maîtres et variantes reconnus, **liens instance→maître, overrides, tokens et styles** réellement exploitables ; vérification de l'autonomie des copies expérimentales.
- [ ] **Chaque icône/image/asset** identifié, exact, accessible et autorisé.
- [ ] Typography, tokens, dimensions, overflow et responsive spécifiés.
- [ ] États/interactions/autorités connus ; éléments exploratoires exclus.
- [ ] Divergences de fondation listées, sans arbitrage implicite.

### Avant que Cursor écrive le code

- [ ] Ref Figma validée, source native réellement lue par MCP.
- [ ] Acquisition L0/L1/L2 suffisante jusqu'aux descendants utiles.
- [ ] Oracle PNG natif et hash conservés ; version/provenance indiquées.
- [ ] Manifeste exhaustif **nœud → composant/DOM → style/mesure → test** construit, avec fixtures DEV de chaque état ; source shell complète et référence native vérifiées.
- [ ] Aucun nœud/asset critique en UNRESOLVED.
- [ ] Fichiers et GO technique bornés selon le template SFIA v2.6.

### Avant que Cursor déclare l'interface conforme

- [ ] Comparaison DOM/Figma même état, viewport, police et fixture.
- [ ] x/y/w/h conformes à F2 pour rectangles stables.
- [ ] Icônes et contenus exacts ; **aucun composant, badge, séparateur, rubrique conditionnelle ni élément interne manquant** ; ordre et alignement vérifiés.
- [ ] Computed styles et overflow vérifiés.
- [ ] **Pour chaque état** : capture navigateur de la bonne fixture + PNG Figma + diff régional + rapport d'écarts, incluant labels, tokens, icônes, shell et descendants.
- [ ] Responsive, clavier et états dégradés examinés.
- [ ] Code/tests/docs/preuves corrélés au SHA ; revue Morris des exceptions.
- [ ] **Pas de verdict visuel fort sans capture runtime comparable.**

## 9. Conditions de STOP et verdicts

**STOP / arbitrage Morris** avant de poursuivre la famille concernée si : source Figma absente/non validée, frame visuellement incomplète hors du canvas, référence/état ambigu, nœud ou asset critique inaccessible, état de test impossible à construire, valeur structurante non extraite, conflit avec exigences métier ou décision F1/F2, besoin de substitution d'une icône validée, ou tolérance géométrique dépassée nécessitant une dérogation. **Un état seulement « examiné » ou une capture du mauvais état ne passe jamais G5.**

**En cas de limite du MCP**, déclarer ce qui est **OBSERVÉ / PARTIAL / NON ACCESSIBLE**, demander extraction native complémentaire dans le périmètre autorisé et **ne pas dessiner au jugé**.

Verdicts de travail :

- **FIGMA CONTRACT READY — READY FOR DELIVERY** : source validée et pack d'extraction complet pour les composants en scope ; autorisation technique distincte toujours requise.
- **FIGMA CONTRACT INCOMPLETE — MORRIS DECISION REQUIRED** : source critique non exploitable ou ambiguë.
- **FIGMA TO RUNTIME ALIGNED — READY** : structure, assets, mesures, styles et captures vérifiés ; tests fonctionnels applicables séparément.
- **FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED** : écarts prouvés restant à corriger.
- **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** : pas de preuve navigateur comparable.

**Pas d'assimilation entre :** Figma VALIDATED SPEC, code IMPLEMENTED, tests COVERAGE VERIFIED, comportement BEHAVIOR PROVEN et ADOPTED. Aucun merge, déploiement ou changement de doctrine n'est induit par ce guide.


## 10. Expérimentation contrôlée Ensemble 07 — Page 10 Figma (21/11/2026)

### 10.1. Statut et périmètre du test

**Décision Morris du 21/11/2026 :** la [page 10 — Projet & Trajectoire, expérimentation Auto Layout](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1069-100) est **validée visuellement pour servir de cible au test de transposition**. Elle conserve la direction artistique de la [page 09](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-46), avec quelques ajustements acceptés. **VALIDATED SPEC pour ce test ≠ pixel-perfect prouvé ≠ méthode adoptée globalement ≠ runtime validé.**

- **Scope de référence : onze états 09.01–09.11 sur la page 10**, chacun 1680×970. Ce nombre n'inclut ni SAS06 ni Travail 05.17, qui restent des références séparées pour leurs parcours et tests de régression.
- Les onze frames de la page 10 ont pour node-ids, dans l'ordre : `1069:101`, `1069:122`, `1069:161`, `1069:212`, `1069:235`, `1069:296`, `1069:317`, `1069:335`, `1069:359`, `1069:391`, `1069:409`.
- **Observations de préparation Figma :** 11 frames copiées ; quatre composants locaux dupliqués et reconnectés ; un composant partagé de shell projet (rail 246 px et bandeau haut 70 px) intégré comme instance dans chacune ; variables de couleurs/espacement expérimentales ; stacks de titres et rangées principales Auto Layout. Un contrôle natif a comparé **370/370 éléments de la page 09 à leurs équivalents page 10 sur x/y/w/h, delta 0 sur ces seuls éléments**. Il **n'établit pas** la conformité complète du nouveau shell, de toutes les propriétés textuelles, de tous les styles ni de l'image finale ; certaines couches restent en position absolue.
- **Source mutable :** les pages Figma et leurs ids n'enferment pas un snapshot immuable ; Cursor doit capturer PNG natifs + digests et enregistrer le moment/version des acquisitions. Le document Git n'affirme aucune preuve de fiabilité d'extraction MCP ni de runtime.

### 10.2. Test discriminant : qu'apporte réellement la nouvelle structure ?

**Hypothèse à éprouver :** une source Figma autonome et structurée (shell, Auto Layout, instances, tokens, descendants, assets), puis un contrat nœud→DOM→assertion, réduit les écarts de livraison sur des aspects que des mesures de rectangles parents n'ont pas détectés.

Le test ne se contente pas de reproduire le même résultat visuel ; il doit expliquer **ce qui change objectivement dans les données fournies à Cursor et dans les contrôles**. Constituer deux packs de lecture read-only : page 09 (référence historique, témoin) et page 10 (cible validée), en comparant des éléments représentatifs des mêmes responsabilités (shell, breadcrumbs, cards, status icons, panels).

Pour chaque élément test :

1. **Acquisition native Figma L0/L1/L2 :** récupérer `layoutMode`, parent/ordre des descendants, positionnement intentionnel, min/max/FIXED/HUG/FILL, paddings, gaps, styles/variables, maîtres/instances/overrides, vrais SVG et PNG.
2. **Comparaison de l'extractibilité :** noter les champs observés, manquants et les gains réellement obtenus page 10. Ne pas prétendre qu'Auto Layout corrige les icônes ou le métier sans oracle explicite.
3. **Correspondance produit :** identifier la responsabilité React/CSS existante et la différence entre une **variante de présentation** et un **état métier**. Ne pas reproduire les valeurs fictives « Projet Horizon », les dates, chiffres et étapes des maquettes comme données Equip'Campus.
4. **Fixture déterministe par état :** exposer la bonne variante dans un environnement DEV isolé, en lecture/rendu, sans muter Equip'Campus ni créer de moteur métier parallèle. Capturer le vrai écran, y compris 09.10 « analyse en cours », sans remplacer une modal ouverte par la page sous-jacente.
5. **Assert structure/style/F2 :** à chaque niveau contractuel, vérifier présence, ordre, alignements, texte/ellipsis, couleurs, polices, badges et icônes **exactes**, séparateurs, gaps, positions et rectangles stables F2 (≤2 CSS px). Une carte à la bonne taille mais au mauvais contenu est FAIL.
6. **Diff visuel régional + interactions :** comparer à Figma au même viewport, zoom, DPR, police, état et fixture. Aucun score image unique ne remplace le contrôle des éléments. Vérifier aussi navigation, clavier, absence de mutation par consultation et non-régression du produit.

### 10.3. Matrice et sorties de preuves obligatoires

Produire **une ligne par élément/état critique**, et un bilan par chaque frame (11/11) :

`frame & variant / Figma node/parent / layout mode / token/asset / product owner / DOM locator / expected style & rect / actual style & rect / delta / PNG source+hash / PNG runtime+SHA / browser interaction / PASS-FAIL-NOT PROVEN / root cause / exit`.

**Gates fermants :**

- **G2 SOURCE :** chaque frame self-contained, chaque élément contractuel extrait ; toute lacune critique = PARTIAL/STOP pour cette partie.
- **G4 IMPLEMENTATION :** aucun composant, icône ou état artificiellement créé pour satisfaire le dessin ; source métier et propriétaires existants préservés. Mapper les variantes plutôt que codifier les exemples.
- **G5 VISUAL/BROWSER :** **11/11 réellement exercés** sur les bons états ; zéro écart structurel/asset/style non accepté ; F2 ≤2 px pour les rectangles stables ; tests navigateur et techniques applicables PASS, ou verdict honnête PARTIAL. Une capture de fixture incomplète n'est jamais « PASS* » de l'écran entier.
- **DEPLOY/RECETTE :** seulement après gate de livraison technique conforme et préflight ENV-01 (backup, rollback, SHA/build/DB/ports et sauvegarde des données). Morris conserve seul la réception UX utilisateur ; la mise à disposition n'est pas une acceptation.

**Aucune dérogation F2 implicite :** si la méthode ne passe pas, documenter précisément *source défectueuse / extraction insuffisante / mapping faux / fixture absente / CSS / composant / mesure / process*, et le plus petit correctif possible ; ne pas annoncer « cette méthode fonctionne » avant confrontation au résultat.

### 10.4. Capitalisation et réutilisation conditionnelle

À la fin du test, fournir un **retour d'expérience probant**, pas un slogan : état page 09 vs page 10, propriétés effectivement récupérées, couverture des 11 frames, anomalies attrapées automatiquement avant UAT, anomalies encore manquées, coûts/limites et conditions reproductibles. Proposer **dans ce même guide** les ajustements opérationnels justifiés par la preuve, sous contrôle Morris, sans nouveau template Cursor ni seconde doctrine.

La chaîne à réutiliser pour les prochains écrans, et pour les anciens lors d'une reprise autorisée, est :
**source native complète → contrat/extraction/fixture → implémentation → contrôle structure + F2 + visuel + browser → preuve + gate**.

Cette chaîne est une exigence de travail pour l'expérimentation. Son **efficacité générale reste NON PROUVÉE** jusqu'au verdict de l'essai, et sa généralisation demeure un arbitrage Morris.


### 10.5. Résultat de l'expérimentation (21/11/2026) — capitalisation factuelle

**Observations rapportées dans le Review Pack FULL :** profondeur 3 Auto Layout dans la frame 09.01 : 0 (page 09) → 19 (page 10) ; structure shell/espacements/instances plus directement extractible ; 11/11 états DEV exercés et 40/40 assertions géométriques critiques F2 PASS. Corrections visibles : repères de cycles, hiérarchie, rubriques Acquis/À clarifier, suite envisagée issue des données métier et cas 09.10 contrôlé par fixture HOLD déterministe.

**Observation Morris post-déploiement :** le rendu Projet/Trajectoire/Étape envisagée est accepté le 21/11 après une unique correction résiduelle du ratio Acquis/À clarifier. Dernier correctif : largeurs runtime 639/645, gap 24, référents Figma 640/646, gap 24 ; F2 ≤2. [Review Pack L3 final](https://github.com/mcleland147/sfia-workspace/blob/b89ba35f83950c35cb572d1b13a675e3cce6d031/sfia-review-handoff/latest-chatgpt-review.md). [PV utilisateur](../validation-qualite/ensemble-07-recette-utilisateur-20261121.md).

**Limites :** ces contrôles prouvent une **amélioration de la chaîne d'extraction + qualification** et l'acceptation du périmètre observé, pas l'indépendance de l'effet Auto Layout par rapport aux nouvelles assertions, ni l'exhaustivité visuelle de chaque pixel, ni Nora LIVE globale. SAS06 et Travail 05.17 sont hors onze frames, avec réserves propres. Les fixtures HOLD restent des preuves déterministes et doivent être isolées hors des environnements opérationnels.

**Règle de réutilisation :** appliquer lors du prochain mandat UX les acquisitions natives et le contrôle contractuel de cette v1.1, avec preuves rapportées dans le même pack ; documenter un REX si une autre famille d'écrans révèle une limite. La **généralisation en standard adopté** reste une décision Morris distincte.

---

**Mode d'emploi :** lors de toute nouvelle conception Figma ou tout contrat Cursor UI de Next, référencer **ce guide + les sources F1/F2/R3 applicables**, puis instancier le **template SFIA v2.6 existant** sur les frames et composants du lot. Ne pas créer un deuxième prompt standard ou un second registre de décisions.
```

## 13. Contenu complet — Registre central revues (v0.18)

```markdown
# SFIA Studio Next — Registre central de revue et convergence UX/UI (ML4D)

| Métadonnée | Valeur |
|---|---|
| Version | **v0.18 — 21/11/2026 : Ensemble 07 UAT ACCEPTED, réserve UX finale techniquement levée, préparation de clôture et intégration Git** · registre documentaire évolutif ; Gate C / STABLE / ADOPTED non acquis |
| Finalité | Piloter les revues écran par écran, les décisions Morris, les ensembles de travaux et les preuves de recette, au fil de l'eau |
| Cadre | **Un macro-lot ML4D** ; séquences de revue ≠ neuf macro-lots ou neuf cycles Cursor |
| Référence Git contrôlée | `mcleland147/sfia-workspace` · `main@542da1de917867b6bbda8b2b57d100552711c9aa` (Ensemble 06 mergé via PR #683) · **Ensemble 07 candidat local non publié** : runtime `5ad8fa57…`, tip local `e784dc93…`, RECETTE build `BtZP6qDx5oAw8jwPQSEhc` selon Cursor |
| État programme à cette référence | **main contient Ensemble 06** (#683). **Ensemble 07 / Pilotage** : recette Morris **ACCEPTED** sur les surfaces présentées ; Figma Page 10, 11 états DEV exercés selon Cursor ; réserve Acquis/À clarifier corrigée puis confirmée visuellement ; **intégration Git PENDING** (code encore local). Revues 01–05 et réserves héritées conservées, **Gate C OPEN**, NO STABLE/RELEASE/ADOPTED. Voir §3.13 et [PV E07](../../validation-qualite/ensemble-07-recette-utilisateur-20261121.md). |
| Autorité | Morris arbitre le produit, la cible UX, les gates et les GO techniques ; ChatGPT documente et qualifie ; Cursor exécute sous contrat SFIA v2.6 |
| Publication | **v0.18 candidate sur `docs/next-ensemble07-closeout-20261121`**, consolidée depuis `main@542da1de…` ; historique v0.17 conservé, sans anticiper push produit/PR/merge ni CI post-merge E07. |

## 1. Règles de fonctionnement

1. **Revue écran par écran.** Morris ouvre l'application de recette et partage captures, parcours, contexte, appréciation et attentes. Comparer à Figma et aux contrats applicables avant d'arrêter une cible.
2. **Un écran = une entrée de parcours, pas nécessairement un composant ou un lot de code.** Les variantes (vide, chargement, erreur, confirmation, mobile, droits, etc.) sont rattachées à leur surface mère. On ne crée pas une ligne par frame Figma sans raison.
3. **Deux registres complémentaires dans ce fichier :** une vue d'avancement des 9 ensembles (§2) et un journal des observations/décisions/actions (§3). Ajouter des sous-écrans au besoin sans imposer une cartographie complète dès le départ.
4. **Décision explicite.** Capturer séparément : constat observable, référence applicable, proposition de cible, **décision Morris**, travaux nécessaires, preuve de recette et statut. Une proposition ChatGPT n'est pas une décision.
5. **Développement regroupé.** Consolider les corrections en ensembles cohérents, selon composants partagés, interfaces et risques. Une revue peut entraîner une correction transversale ; ne pas programmer automatiquement un cycle Cursor par écran.
6. **Frontière ML4D.** Les évolutions UX/UI des capacités déjà construites ML1–ML4 sont IN. Toute modification métier/API/données/autorité ou fonctionnalité non construite est signalée et soumise à arbitrage avant prise en charge. Ne pas anticiper ML5.
7. **Preuves proportionnées.** Comparaison datée Figma ↔ runtime sur viewport et état comparables ; navigation, interaction, responsive et accessibilité vérifiés selon la portée. Les exigences F1/F2 validées restent applicables ; aucun taux universel de diff image n'est présumé.
8. **Contrôle continu.** Réexaminer tôt la navigation et les variantes transverses, même si la revue de synthèse transversale est positionnée en étape 9. Revue faite ≠ code livré ≠ recette vérifiée ≠ Gate C accepté.

## 2. Plan directeur — ordre des revues

**États de revue :** `À ouvrir` · `En revue` · `Cible à arbitrer` · `Cible décidée` · `En réalisation` · `À recetter` · `Vérifié avec réserves` · `Accepté par Morris`.

| Ordre | Ensemble de surfaces | Points à examiner / variantes candidates | État initial | Dernière revue | Réception / preuve |
|---|---|---|---|---|---|
| **01** | **Connexion et accès** | Connexion, retour de session, états d'attente/refus/erreur, déconnexion si attendue ; présentation et responsive | **Accepté par Morris — avec réserves de preuve** | **16/11/2026** | **UX-003** : captures utilisateur desktop nominal + session expirée ; mobile accepté verbalement sans capture comparative ; OAuth LIVE / expiration réelle non prouvés ; voir §3.1 |
| **02** | **Portefeuille / cockpit** | Vue personnelle, liste/cartes projets, préparations ouvertes, accès rapides, états vide/chargement/erreur | **Accepté par Morris — avec réserves de preuve et techniques** | **16/11/2026** | **UX-004** : maquettes Figma validées ; captures RECETTE desktop, rail fixe et défilement examinés ; « Nouveau projet » → sas et fil d'Ariane Intégrations vérifiés par Morris sur le candidat final `b05dacf…` ; voir §3.2 |
| **03** | **Sas / préparation projet** | Ouverture/reprise, dialogue Nora, projection vivante, maturation, nomination, création explicite, passage au projet, continuité | **Vérifié avec réserves — parcours T1→T7 réussi ; acceptation formelle du lot non déclarée** | **16/11/2026** | **UX-005** : code `bd8e1672`, RECETTE `bURdIMEzv8pRSJCzgsiDf`, scénarios Morris conversationnels + création + rafraîchissement PASS ; **UX-005-R01** périmètre résumé appauvri après renommage ; voir §3.3 |
| **04** | **Espace projet — structure commune** | Rail projet, en-tête, navigation entre surfaces, contexte et droits visibles, états d'activation et retours | **Accepté par Morris — visuel avec réserves** | **17/11/2026** | **UX-006** : comparaison qualitative de la capture utilisateur RECETTE `984d77a3` avec Figma `652:8`, correctifs layout/CP01/CP02 ; quatre cadres Figma de référence ; contrôles privés OAuth et variantes non tous rejoués ; voir §3.4 |
| **05** | **Travail avec Nora** | Fil, compositeur, réponses/actions, activité/reprise, scroll et visionneuse | **Composition visuelle UAT acceptée avec réserves ; autres contrats UX en qualification** | **18/11/2026** | **UAT-01…08** sur candidat RECETTE rapporté `5c94c867` / build `IEINNuPl0bHWJOWkh0ZhG` : formes spontanées, séquence, matrice, graphes, arbre, parallélisme et synthèse examinés par Morris ; derniers correctifs UX-05 et UX-01 **acceptés**. [Dossier de réception bornée](grammaire-visuelle-conversationnelle/07-dossier-reconciliation-reception.md). **Ne vaut pas acceptation des 88 oracles de tous les sujets UX-002/007…010 ni clôture Ensemble 05/ML4D/Gate C**. |
| **06** | **Documents et journal** | Bibliothèque, inspection, versions/révisions, sujets et décisions, points ouverts et états documentaires | **Accepté avec réserves ; intégré sur main** | **20/11/2026** | Ensemble 06 / **PR #683 MERGED**, CI post-merge PASS selon Roadmap ; réserves conservées, Gate C OPEN |
| **07** | **Pilotage du projet** | Trajectoire, cycles, CKI, décisions, informations et états disponibles selon les capacités réellement construites | **Accepté Morris ; réserve UX finale techniquement levée** | **21/11/2026** | Ensemble 07 : RECETTE `5ad8fa57` / `BtZP6qDx5oAw8jwPQSEhc` rapportée ; F2 panneaux 639/645/gap24 PASS ; [PV E07](../../validation-qualite/ensemble-07-recette-utilisateur-20261121.md) ; **Git produit non publié** |
| **08** | **Git, publication et intégrations** | Surfaces Git, inspection/préparation, autorisation/états, paramètres intégrations, erreurs et refus, sans effet réel non autorisé | **À ouvrir — prochaine revue** | — | Préparation après intégration E07, sans développement anticipé |
| **09** | **Variantes et cohérence transverses** | Responsive, clavier/focus, accessibilité, typographie, densité, rail/shell, états vides/attente/erreur, non-régression | À ouvrir | — | — |

> Les surfaces ci-dessus sont des familles de revue, **pas un engagement que toutes leurs variantes sont actuellement implémentées**. Pour chaque entrée, identifier le Figma exact et vérifier la disponibilité réelle dans la version de recette. L'ordre est privilégié mais adaptable par décision Morris.

## 3. Registre des observations, décisions et travaux

**Règle d'identification :** `UX-001`, `UX-002`… identifient uniquement des entrées de suivi documentaire, et **non** des composants du produit.

| ID | Ensemble / écran | Observation et source | Cible / référence | Décision Morris | Travaux / rattachement | État et preuve |
|---|---|---|---|---|---|---|
| `UX-001` | 06 — Documents / inspection | Réserve UAT `S03-02-R01` (15/11) : confort de lecture insuffisant dans l'inspecteur de document pour les contenus longs. **À reproduire sur la recette courante.** | Référence Figma précise et largeur utilisable à confronter en revue | **Non décidée** | À définir après revue ; candidat ergonomie / disposition de l'inspecteur | **Signalement hérité — non requalifié ML4D** ; capture et viewport à associer |
| `UX-002` | 05 — Travail avec Nora / position de lecture | **REPRODUIT EN RECETTE le 17/11** : après Journal → Travail, le fil revient au premier message ; un rafraîchissement depuis une lecture intermédiaire produit le même défaut. Deux captures utilisateur du retour Journal ; rafraîchissement confirmé par Morris. | [Conception UX-002 v0.1](conception-ux-travail-avec-nora.md) : **dernier message par défaut** à l'ouverture, navigation, refresh, reconnexion et envoi ; suivre Nora si déjà en bas ; si relecture volontaire, maintenir la position et signaler la réponse avec flèche vers le bas. | **VALIDATED SPEC — Morris, 17/11/2026** ; arbitrage UX du défilement confirmé, sans GO technique ni adoption | Instruction de réalisation future à regrouper avec les besoins réels Ensemble 05 ; qualification code/scroll, tests retour/refresh, longs fils, réponse pendant relecture et accessibilité ; **pas de cycle Cursor engagé** | **Défaut observé / conception décidée / correction OPEN**. Candidat RECETTE `984d77a3` selon handoff ; aucune preuve corrective, aucun PASS post-correction |
| `UX-007` | 05 — Travail avec Nora / réponses structurées et interactions | **RECETTE CampusFlow du 17/11 :** titres, paragraphes et tableaux visibles ; composition enrichie interactive non démontrée dans la capture. R1 §2.32, R2 D3/D4/D8/D9 et R3 §§23–25 applicables. | [Contrat intégré v0.7 — §§6–9](conception-ux-travail-avec-nora.md) : liberté A–F, grammaire enrichie sobre, **une réponse composite**, **choix conversationnels transmis immédiatement puis tous expirés dès le prochain message Pilote**, brouillon intact, six règles de progression et six règles sources/preuves, consultation historique indépendante. | **VALIDATED SPEC — MORRIS 17/11/2026 ; SUJET 02 CLOS EN CONCEPTION UX.** Choix visuels détaillés, protocole/persistance, résolution d'actions et architecture **NON DÉCIDÉS** | Ensemble 05 : qualifier rendu/contrat sémantique, scroll UX-002, états progressifs/UNKNOWN, provenance et droits, affichage mobile/accessibilité, non-régression ; **Sujets 03 à 05 arbitrés ; synthèse transverse Ensemble 05 à conduire**. Aucun GO Cursor ni implémentation lancée. | **25 oracles UX-NORA-01..25 candidats, aucun test exécuté sur correctif** ; code/RECETTE, BROWSER/LIVE et gates NON PROUVÉS |
| `UX-008` | 05 — Travail avec Nora / Sujet 03 compositeur | **Figma Travail 652:8 / 94:214 et code main@997d4c4e** : compositeur sous le fil, `textarea`, `Envoyer`, mention PJ non fonctionnelle ; le brouillon libre est en `useState` dans le parcours inspecté. **Vidéo utilisateur du 17/11** : hauteur du compositeur ChatGPT augmente/réduit selon la saisie, avec plafond. **RECETTE locale du compositeur cible NON RÉEXAMINÉE**. | [Contrat intégré v0.7 — §10](conception-ux-travail-avec-nora.md) : **barre compacte une ligne**, `+` à gauche, envoi à droite, micro futur avant Envoi ; expansion fluide vers le haut, plafond adaptatif et scroll interne ; `Entrée` desktop = envoi, `Maj+Entrée` = nouvelle ligne, mobile nouvelle ligne + bouton ; brouillon conservé **par projet, navigateur courant, navigation et refresh**. | **VALIDATED SPEC BY MORRIS — 17/11/2026 ; SUJET 03 CLOS EN CONCEPTION UX**. Référence ergonomique vidéo approuvée, clavier desktop/mobile approuvé, option B conservation du brouillon approuvée ; **PJ/dictée reportées au chantier fonctionnel dédié**. | Qualifier implémentation du redimensionnement/accessibilité, isolation/persistance, états pending/UNKNOWN existants, non-effacement d'une saisie postérieure à l'envoi, non-régression UX-002/Sujet 02. **Aucun nouveau moteur, API/DB, GO Cursor ou lancement technique**. | **UX-COMP-01..13 candidats NON EXÉCUTÉS** ; vidéo utilisateur = référence de comportement souhaité, pas preuve Studio ; BROWSER/RECETTE mobile/desktop et stockage NON PROUVÉS. |
| `UX-009` | 05 — Travail avec Nora / Sujet 04 activité, erreurs et reprise | **Capture RECETTE CampusFlow du 17/11** : bandeau « Nora prépare une réponse… » statique, sans animation visible ; **vidéo utilisateur ChatGPT du 17/11** : annonce initiale, étapes d'action contextuelles, progression, conclusion et réponse. **Références** R2 D3/D4/D6/D7/D8, R3, Figma Travail et code `main@997d4c4e`. Vidéo et capture consultées en conversation, non déposées comme preuves Git. | [Contrat intégré v0.7 — §11](conception-ux-travail-avec-nora.md) : attente animée sobre, étapes issues d'événements **réellement disponibles**, résultats honnêtes, activité longue sans faux progrès, résumé compact dépliable, erreurs localisées, contrôle de reprise avant retransmission et dialogue cognitif indépendant d'une tentative métier `UNKNOWN` lorsque permis. | **VALIDATED SPEC BY MORRIS — 17/11/2026 ; SUJET 04 CLOS EN CONCEPTION UX**. Principes d'activité progressive, historique et reprise approuvés ; aucun moteur de streaming, schéma d'état, événement technique ou animation pixel décidé. | Qualifier contrat/événements D3, tracés D7/D8, vérités des états, actions vérifiables, architecture, fuite d'informations, persistance et permissions, séparation fil/compositeur, continuité UX-002, mobile/accessibilité et cas ACK perdu. **Aucun GO Cursor ni nouvelle API autorisée**. | **UX-ACT-01..16 candidats NON EXÉCUTÉS** ; comportement cible validé, activité réelle et provenance des étapes **NON PROUVÉES** ; RECETTE/BROWSER/LIVE/REAL à réaliser. |
| `UX-010` | 05 — Travail avec Nora / Sujet 05 visionneuse contextuelle | **Capture RECETTE CampusFlow du 17/11 :** rail gauche fixe, conversation/compositeur, panneau « En bref ». Figma Travail `652:8`, inspection `94:370`/`97:359` et code `main@997d4c4e` : chemin Documents dédié constaté, **visionneuse 50/50 intégrée à Travail non démontrée**. | [Contrat intégré v0.7 — §12](conception-ux-travail-avec-nora.md) : le panneau « En bref » est temporairement remplacé ; **rail fixe, moitié conversation + compositeur / moitié visionneuse sur l'espace hors rail**, agrandissement sur la zone utile, réduction/fermeture sans perdre le contexte ; **une seule visionneuse, changement d'objet sans nouveaux panneaux/onglets** ; lecture seule. | **VALIDATED SPEC BY MORRIS — 17/11/2026 ; SUJET 05 CLOS EN CONCEPTION UX**. Morris a confirmé la répartition moitié-moitié et la séparation **visualisation rapide Ensemble 05 / bibliothèque, édition et révision Ensemble 06**. La sélection d'extrait et l'action « Demander à Nora » dans Travail sont **hors de ce contrat**. | Qualifier structure CSS/rail, panneau « En bref », état de navigation, ressources réelles/provenance/droits, ouverture vers Documents, fil/brouillon/scroll UX-002, inspecteur mobile/zoom/focus, preuve Figma↔runtime. **Macro-lot de réalisation cohérent sous GO distinct ; aucun GO Cursor**. | **UX-VIEW-01..15 candidats NON EXÉCUTÉS** ; Figma référence, capture utilisateur et code main ne démontrent pas la disposition cible. **Ensemble 05 encore EN REVUE, synthèse transverse ouverte**. |
| `UX-003` | 01 — Connexion et accès / entrée unifiée | Ancien login avec rail et messages techniques ; besoin de réunir présentation Studio et connexion, sans page vitrine séparée. Incident de RECETTE : LaunchAgent ML4C servait l'ancien écran sur `:3200`, depuis corrigé sans changer le code UX-003. | **Figma validé Morris** : desktop `574:425`, mobile `574:466`, session expirée `574:490` ; une entrée directe Studio/Nora + CTA GitHub. | **Conception validée**, puis **réception UX acceptée** par Morris le 16/11 ; pastille GitHub sombre explicitement acceptée ; desktop non prioritaire pour son usage. | Livraison Cursor locale candidate `a77a3a2bf7b942038d771fdcdd2e7a6410330784`, build `vYeNRRzvLN03N73wmcKkR` ; RECETTE `:3200` rétablie ; **aucun nouveau correctif demandé**. | **Accepté par Morris avec réserves de preuve** : desktop et expiration simulée vus en capture ; mobile accepté par déclaration sans capture ; OAuth callback LIVE et détection réelle d'expiration **NON PROUVÉS**. Voir §3.1. |
| `UX-004` | 02 — Portefeuille / cockpit et rail personnel | Portefeuille initialement trop dispersé, rail non fixe, navigation redondante ; correction du lien « Nouveau projet » qui renvoyait sur le bouton du portefeuille et du breadcrumb « Portefeuille » sur Intégrations. | **Cinq frames Figma validées** (desktop nominal/défilé/vide, mobile nominal/défilé), rail personnel fixe 246 px ; démarrage de préparation D2 direct via le rail, sans création de projet implicite. | **Cible visuelle et réception utilisateur acceptées par Morris le 16/11**, après vérification des deux derniers parcours ; mobile explicitement non prioritaire et sans campagne visuelle Morris. | Candidat local final `b05dacf47983ed8d914c92619ede5ffe65ce9264`, tree web `467a46216d45651063c7fdfe328f15abec9fd2fc` ; RECETTE `:3200` build `20blGylSEta7201PgVvlw` ; création D2 `UNCERTAIN` honnête et single-flight document-scoped. | **Accepté par Morris avec réserves**, BROWSER 4 scénarios PASS selon Cursor, captures utilisateur desktop et confirmation directe des deux interactions ; F2/G5 mobile et OAuth LIVE non prouvés, pas d'idempotence multi-onglet/serveur. Voir §3.2. |
| `UX-005` | 03 — Sas Nora / préparation, aperçu, création et continuité | Première recette : création et reprise fonctionnelles, mais intention métier écrasée par le renommage, question résolue persistante, état « Première intention » et hauteur limitée, bouton « Ajuster l'aperçu ». Après correctifs : conversation et projection cohérentes, création explicite et fil durable. | Figma Sas `607:3` / `607:62` / `607:131` / `607:203` / `607:277` ; conversation-first, pas de correction manuelle de l'aperçu, décision de créer réservée au Pilote. | **Morris a explicitement décidé la suppression du bouton et du formulaire « Ajuster l'aperçu »** et a autorisé les correctifs puis la bascule RECETTE. Scénario utilisateur achevé ; **proposition d'acceptation avec réserves, pas de décision formelle distincte de clôture globale**. | C1–C4 dans `6798219f`, R1/R2 dans `bd8e1672` ; pas de migration ; build RECETTE `bURdIMEzv8pRSJCzgsiDf` ; reserve `UX-005-R01` ; D4 global hors Sas. | **Parcours RECETTE T1→T7 + rafraîchissement PASS observés**, UNIT 419, PG 484, BROWSER FAKE 5 et S01–S07 PASS rapportés par Cursor ; LIVE observé par Morris sur les échanges du Sas, sans qualification exhaustive de frontière provider ; voir §3.3. |

| `UX-006` | 04 — Espace projet / structure commune | Premières captures RECETTE : fil et compositeur englobés dans un même cadre, compositeur trop haut, vide inférieur, inspecteur trop court, introduction sur fond différencié sans séparateur ; correctif vertical `351aea96` ensuite bloqué par CP01 (réconciliation clippée) et CP02 (rail desktop absent sur mobile). | [Figma Travail `652:8`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-8), Projet `652:58`, Navigation `652:108`, Indisponible `652:158` ; deux cartes indépendantes, compositeur bas, inspecteur haut/bas aligné, intro compacte, navigation conservée ; mobile via `studio-rail-mobile`. | **Morris accepte visuellement l'Ensemble 04 avec réserves le 17/11/2026**, après capture de la RECETTE corrigée ; aucune réception globale ML4D/autorisation Git ou STABLE. | Itérations locales successives `20fb41ba` → `a30e75c7` (fidélité visuelle) → `351aea96` (layout vertical, **jamais déployé**) → **`984d77a3`** (CP01/CP02) ; cutover sur RECETTE existante `:3200`, build `3LzvYPTQc-Km7St6nF97r`. | **Accepté par Morris avec réserves** : capture RECETTE Travail observée ; CP01-A..E/CP02, E04/T13/T16/F2/long-thread et build PASS selon Cursor ; `SC03–SC09` privés **USER_RECETTE_REQUIRED**, TypeScript 32 erreurs préexistantes, 3 tests de configuration GitHub App FAIL préexistants ; voir §3.4. |

| `UX-011` | 07 — Projet / Trajectoire / CKI et méthode | RECETTE Equip'Campus du 21/11 : correction Figma Page 10 ; dernier déséquilibre Acquis/À clarifier (90/10) observé par Morris. | [Figma Page 10](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1069-100), frames 09.01–09.11 et méthode v1.1 ; exemples ≠ données réelles | **MORRIS UAT ACCEPTED** le 21/11, puis « c'est ok » après correction finale 50/50 | Ensemble 07 Cycle 8 / correctif final TrajectoryBoard ; F2 09.02/09.09 PASS ; PV et L3 | **ACCEPTED / TECHNICALLY CLEARED / GIT PENDING** ; réserves héritées hors périmètre conservées, §3.13 |

**Ajout d'une nouvelle ligne :** une observation peut produire zéro modification (déjà conforme), une correction locale, une correction transverse, ou un sujet **hors périmètre ML4D à arbitrer**. Ne pas inscrire « résolu » avant la re-recette.

### 3.1. Revue UX-003 — décision Morris et limites (16/11/2026)

| Objet | État / preuve |
|---|---|
| Cible | **VALIDATED SPEC par Morris** : entrée unifiée Studio/Nora + authentification ; pas de vitrine autonome. [Figma desktop](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-425), [mobile](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-466), [session expirée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-490). |
| Candidat | Branche de construction **locale non publiée** `feat/next-ml4d-ux003-unified-entry-20261116` ; SHA `a77a3a2bf7b942038d771fdcdd2e7a6410330784` ; build `vYeNRRzvLN03N73wmcKkR`. Ces éléments ont été rapportés par Cursor et recoupés dans le handoff, **pas relus dans un commit projet distant**. |
| Environnement | RECETTE locale `http://127.0.0.1:3200` ; processus UX-003 rétabli après conflit avec le LaunchAgent ML4C. [Handoff incident `63ab5a73`](https://github.com/mcleland147/sfia-workspace/blob/63ab5a731ebdf173fefab2e7152744bf617f9229/sfia-review-handoff/latest-chatgpt-review.md) ; serveur local non inspectable directement par ChatGPT. |
| Desktop nominal | Capture utilisateur de RECETTE examinée le 16/11 : en-tête et deux zones Studio/Nora + GitHub conformes en première lecture, sans rail. **Accepté visuellement par Morris** ; pastille `GH` sombre acceptée comme écart esthétique mineur. **F2 géométrique non certifié** sur cette capture (viewport/zoom non étalonnés). |
| Desktop session expirée | Capture utilisateur de `?reason=session_expired` examinée le 16/11 ; message « Retrouvons votre session » et CTA de reconnexion affichés. Morris : **« c'est ok »**. Ce contrôle est une **simulation par paramètre**, pas une preuve du mécanisme réel d'expiration ni du callback OAuth. |
| Mobile | Figma 390 × 844 disponible ; Morris indique ensuite **« finito c'est good »** et accepte l'ensemble sans nouvelle capture mobile versée à cette revue. **Acceptation utilisateur déclarative**, non comparaison visuelle F2/mobile ni preuve de navigation/accessibilité en contexte mobile. Cette préférence d'usage exprimée pendant UX-003 a été **révisée lors d'UX-004** : le mobile n'est plus prioritaire et Morris ne demande pas de recette visuelle mobile à ce stade. |
| Accès de test | Bandeau Pilote A/B **test / non OAuth** maintenu hors Figma en RECETTE, sous contrôle de configuration déclaré par Cursor. Ne pas assimiler sa réussite à un OAuth LIVE. |
| Réserves maintenues | OAuth GitHub callback LIVE non rejoué ; véritable expiration de session non prouvée ; isolation cookies sur `127.0.0.1` par port insuffisante (profil navigateur dédié) ; preuve comparative mobile non apportée ; G5 global et Gate C ouverts. |
| Arbitrage de sortie | **UX-003 : revue utilisateur close / ACCEPTÉ AVEC RÉSERVES**, sans correctif Cursor supplémentaire décidé. Ne vaut pas `ADOPTED`, promotion STABLE, preuve exhaustive F2 ou acceptation globale ML4D. |

**Traçabilité des captures Morris :** captures partagées dans la conversation de revue du 16/11/2026 (desktop nominal puis état expiré). Elles ne sont pas publiées comme artefacts Git dans ce registre ; ne pas inventer un lien fichier ni une preuve mobile absente.

### 3.2. Revue UX-004 — décision Morris et limites (16/11/2026)

| Objet | État / preuve |
|---|---|
| Résultat et cible | Portefeuille personnel **sobre, épuré et fonctionnel** ; cartes projets, liste compacte des préparations, rail fixe de 246 px, navigation personnelle réduite à « Portefeuille » et « Nouveau projet ». **VALIDATED SPEC par Morris**. |
| Figma | Fichier `itgvCulInEnFY6DvgIegvP` : [desktop nominal](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=591-425) (`591:425`), [desktop défilé](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=591-543) (`591:543`), [desktop vide](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=591-661) (`591:661`), [mobile nominal](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=591-721) (`591:721`), [mobile défilé](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=592-435) (`592:435`). Aucune réouverture Figma décidée. |
| Observation et arbitrage | Morris a examiné les captures du portefeuille initial, de la page défilée et des paramètres Intégrations ; a **validé le rail fixe, les cartes, les préparations et le menu**. Accordéon des préparations non retenu. Seules deux corrections regroupées ont été demandées : « Nouveau projet » ouvre directement le sas D2 ; breadcrumb « SFIA Studio / Intégrations » selon la route. |
| Chaîne candidat local | Branche projet **non poussée** `feat/next-ml4d-ux004-portfolio-20261116`, base UX-003 `a77a3a2bf7b942038d771fdcdd2e7a6410330784`, UX-004 initial `bc8785683c30430aa99bc76e138ba10f49c71c39`, correctif navigation `fb0ac5c865f1d562a3778e207e5e8729165c5c4d`, **candidat final** `b05dacf47983ed8d914c92619ede5ffe65ce9264`. Ascendance rapportée par Cursor, **commit projet local non inspectable directement sur GitHub**. |
| RECETTE finale | `http://127.0.0.1:3200` ; tree web `467a46216d45651063c7fdfe328f15abec9fd2fc` ; build servi `20blGylSEta7201PgVvlw` ; LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`. [Handoff de déploiement distant](https://github.com/mcleland147/sfia-workspace/blob/8c2160477809b79a74914f9e360b72d314ee3d54/sfia-review-handoff/latest-chatgpt-review.md), blob `62a2c0c480d62220ddb006153d4c91cd404c5069`. SHA/build/processus observés et rapportés par Cursor, **pas inspectés directement sur le Mac par ChatGPT**. |
| Preuves techniques | D'après Cursor : 20 UNIT PASS + 20 Playwright UX-003/UX-004 PASS (BROWSER/FAKE) sur le correctif D2, puis 4 scénarios smoke RECETTE PASS (BROWSER) sur le SHA final ; « Nouveau projet » depuis Intégrations → 1 POST → sas ; fil d'Ariane route-aware ; concurrence et ACK incertain testés avec fixtures ; reprise GET sans POST quand applicable. Les captures ops sont locales (`/tmp/ux004-recette-d2-smoke/`), **non publiées comme preuves Git vérifiables par ChatGPT**. |
| Réception Morris | Après livraison sur `b05dacf…`, Morris confirme expressément : **« tout est nickel, c'est bon. Ça fonctionne »**, le 16/11/2026. Cette réception concerne les deux interactions finales et confirme la validation visuelle du portefeuille précédemment exprimée. **Verdict : UX-004 ACCEPTÉ PAR MORRIS AVEC RÉSERVES**, sans changement visuel supplémentaire. |
| Mobile | Arbitrage Morris le 16/11 : application **non destinée à un usage mobile prioritaire** ; aucune revue visuelle mobile spécifique exigée pour UX-004. Smoke technique Cursor rapporté ; **aucune conformité F2/G5 mobile complète revendiquée**. Cet arbitrage UX-004 ne réécrit pas les critères normatifs F1/F2 de ML4D. |
| Réserves à porter | Single-flight frontend limité au **document navigateur**, pas d'idempotence prouvée multi-onglet/multi-session/serveur ; `router.push()` ne garantit pas, à lui seul, la fin effective de navigation avant libération du verrou ; OAuth callback LIVE et expiration authentique non rééprouvés ; isolation des cookies sur le même host par port insuffisante (profil RECETTE dédié) ; rollback `bc878568` préparé mais non rejoué après cutover ; F2/G5 mobile et comparaison géométrique exhaustive non certifiés. |
| Frontières / gates | **Revue utilisateur UX-004 reçue**, pas une réception globale ML4D ; pas de push projet, PR, merge, STABLE, release ou `ADOPTED` ; Gate C **OPEN**, ML5 non autorisé. Une décision et une opération Git distinctes seront nécessaires pour toute intégration future. |

**Traçabilité des captures Morris :** trois captures du portefeuille / défilement / Intégrations ont été partagées dans la conversation du 16/11/2026 ; la validation finale a été exprimée par Morris après remplacement de RECETTE. Aucun lien Git fictif vers ces captures. La recette utilisateur est distincte des preuves techniques Cursor, et l'état de `main` reste inchangé.


### 3.3. Revue UX-005 — Sas Nora, création de projet et continuité (16/11/2026)

**Périmètre et autorité.** Revue de l'ensemble **03 — Sas / préparation projet**, menée à partir de conversations utilisateur réelles en RECETTE ; entrée depuis le portefeuille, échange Nora, maturation de l'aperçu, choix du nom, création sur clic du Pilote et reprise du fil dans l'espace projet. La décision Morris du 16/11 supprime **« Ajuster l'aperçu » et le formulaire manuel**, au profit de corrections exclusivement conversationnelles ; **« Créer le projet » reste un acte humain explicite**. Le périmètre du présent suivi n'inclut pas l'évaluation fonctionnelle et UX globale de l'espace projet ou de la capitalisation D4.

| Élément | État / preuve / frontière |
|---|---|
| Figma de référence | Fichier `itgvCulInEnFY6DvgIegvP`, frames Sas : [première intention](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-3) `607:3`, [clarification](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-62) `607:62`, [proposition](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-131) `607:131`, [base suffisante](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-203) `607:203` et [reprise](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-277) `607:277`. Références de conception, pas preuve d'une conformité F2/G5 exhaustive. |
| Première recette avant corrections | Projet **« Cockpit Réunions Projet — Test 16-11 »** : maturation conversationnelle, nom proposé, création explicite, redirection, fil conservé et persistance fonctionnels sur `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e` / `67akzrr6bFEp4YOh7aHD7`. Anomalies constatées : intention devenue « Retenir le nom… », question « manuel ou automatique » restée ouverte malgré la décision, progression visuelle tardive, bande vide inférieure, bouton d'ajustement manuel. |
| C1 — Intention durable | `projectIntention` séparé de `goal` local ; le renommage ne remplace plus l'intention du projet. |
| C2 — Questions ouvertes | Le courant reflète les clarifications réévaluées ; la question résolue n'est plus recopiée depuis le merge historique / catalogue D4 affiché. |
| C3 — Présentation et hauteur | Clarification affichée dès la première interaction substantielle ; espace conversationnel, composer et aperçu occupent la hauteur utile, sans le plafond `655px`, avec défilement interne. |
| C4 — Interaction | Bouton **« Ajuster l'aperçu »** et formulaire retirés du Sas ; l'API PATCH technique subsiste par compatibilité, **sans parcours manuel utilisateur**. |
| R1 — Demande ponctuelle | Le `goal` du tour ne peut initialiser l'intention que si aucune intention n'existe encore (`allowGoalIntentionBootstrap`) ; les demandes de conseil ordinaires ne la remplacent plus. |
| R2 — Absence et résolution | `clarifications` omises = pas de réévaluation, conserver le courant ; liste explicite `[]` = aucune question encore ouverte ; liste explicite non vide = nouveau courant ; `UNAVAILABLE` n'applique pas de nouvelle projection. |
| Candidat correctif C1–C4 | Commit produit **local** `6798219fdb37af1b463326dc7015901b43b04acd`, tree web `b3d001f212387349fc1af135046ee4dad2321aea` ; [handoff FULL 26/26 diffs](https://github.com/mcleland147/sfia-workspace/blob/3ec1f37d887363ef9f4b6ea4a68e965a0ba773bf/sfia-review-handoff/latest-chatgpt-review.md). Revue ChatGPT : deux réserves R1/R2 ensuite corrigées. |
| Candidat final R1/R2 | Commit produit **local, non poussé** `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`, parent `6798219f` ; tree web `1abe4103eb16e4dc899a352206472753bbe9fb04` ; DEV `GIa-3DQDG_kcmC9uzzgbG` ; [handoff FULL 11/11 diffs](https://github.com/mcleland147/sfia-workspace/blob/10e6c9784de4ba03bb132e9b88bbea32e6879a75/sfia-review-handoff/latest-chatgpt-review.md). Critical Review ChatGPT **PASS avec réserves non bloquantes**, éligible RECETTE. |
| Tests techniques candidat | Selon Cursor : **419 UNIT PASS**, **484 PG PASS** (29 fichiers), **5 BROWSER FAKE PASS** sur `T1→T7` enrichi (dont R1-B/R2-C), build et lint PASS. La suite BROWSER FAKE n'est pas une preuve LIVE. |
| Bascule sous GO Morris | RECETTE `http://127.0.0.1:3200`, source `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`, build réellement servi rapporté `bURdIMEzv8pRSJCzgsiDf`, service `com.sfia.studio.next.recette.ml4d-ux004`, DB `sfia_next_recette_ml4` port `5434`, schéma 013 conservé, aucune migration. [Handoff déploiement](https://github.com/mcleland147/sfia-workspace/blob/f2bf090d03f4d075eef18d6b17c4c0e6437f7f26/sfia-review-handoff/latest-chatgpt-review.md). |
| Contrôles de lane | Cursor rapporte S01–S07 PASS, sauvegarde préalable et rollback **code** disponible vers `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` ; 21 projets et 474 messages préservés ; 2 préparations créées par les smoke tests (189→191), aucun nouveau projet de smoke. Aucune restauration DB exécutée. |
| Recette Morris sur candidat | Nouvelle préparation et dialogue Nora réellement observés dans l'application : progression, questions utiles, conservation d'intention, clôture de la question manuelle/automatique, nom choisi, création, redirection, fil conservé et **rafraîchissement confirmé « ok »**. Les captures sont dans la conversation du 16/11, pas dans Git ; qualification provider LIVE exhaustive/logs internes non auditée depuis cette revue. |
| Réception et limites | **Parcours T1→T7 fonctionnel et UX vérifié avec réserve par Morris**. L'assistant a recommandé `SAS NORA — USER RECETTE ACCEPTED WITH RESERVES` ; **aucune décision formelle distincte de clôture ML4D/Gate C, merge, STABLE ou ADOPTED n'est établie**. |

**Scénario de recette du candidat final — preuves utilisateur observées (16/11/2026)**

| Étape | Message / action Pilote | Attendu et constat |
|---|---|---|
| **T1** | Idée floue : application pour aider les chefs de projet à s'organiser | Nora identifie une intention sans inventer le périmètre, distingue hypothèses et besoins, pose des questions utiles ; **« Clarification en cours » immédiat**, colonnes étendues et pas de bouton manuel. |
| **T2 — R1** | Demande de conseil : « trois prochaines étapes pour mieux cadrer cette idée » | Nora propose des étapes sans modifier l'intention métier ; résultat visé et questions en cours conservés. **PASS utilisateur**. L'omission technique brute de `clarifications` reste prouvée par tests déterministes, non par seule capture LIVE. |
| **T3** | Cible : chefs de projet informatiques ; décisions, blocages, actions dispersés | Intention enrichie, ancienne question sur le public retirée, nouvelle question adaptée. Résultat encore générique à ce stade, puis **enrichi à T4**. |
| **T4** | Cas précis : après réunions de suivi ; Teams, Outlook, Word, Excel | Résultat devenu concret, premier périmètre identifié, question décisive **alimentation manuelle ou récupération automatique** affichée comme ouverte. |
| **T5 — R2** | V1 avec saisie/copier-coller manuels, trois rubriques ; intégrations reportées | Périmètre enrichi, **« Aucun point ouvert listé »**, passage à **« Création envisageable / Base suffisante »** ; aucun projet créé automatiquement. **PASS utilisateur**. |
| **T6 — C1/R1** | Nom choisi : **« Cockpit Réunions Projet — Recette R2 16-11 »** et confirmation du périmètre | Nom correctement proposé, intention et résultat durables préservés, ancienne question non réintroduite, CTA « Créer le projet » disponible. **PASS avec réserve UX-005-R01**. |
| **T7** | Clic explicite **« Créer le projet »** | Redirection vers espace projet, rail Travail/Pilotage/Documents/Journal, conversation Nora reprise, composer actif. Morris confirme ensuite **rafraîchissement OK**. Aucun test d'unicité de nom concurrent ou qualification D4 globale revendiqué. |

**Réserves et transmission à la suite**

| ID / portée | Observation fondée | Qualification / exit |
|---|---|---|
| **UX-005-R01 — Sas / projection structurée** | Entre T5 et T6, le champ **« Premier périmètre »** perd la mention explicite des **trois rubriques** (décisions, points bloquants, prochaines actions), alors que le dialogue Nora et le champ d'intention les conservent ; pas de perte démontrée du besoin global. | **Réserve fonctionnelle mineure observée**, non corrigée, non bloquante pour le parcours recetté. Éviter l'appauvrissement d'une projection déjà plus précise ; instruire son rattachement à un **lot cohérent**, sans micro-cycle correctif automatique. |
| **Observation UX mineure non arbitrée** | Avant nomination, **« Nom proposé : Projet envisagé »** est affiché comme s'il s'agissait d'une proposition, malgré l'absence de véritable nom. Disparaît après choix du nom. | Placeholder sémantiquement ambigu ; **aucun correctif ni GO décidé**. À garder pour revue transverse uniquement si confirmé utile. |
| **D4 / espace projet — hors revue 03** | Après création, panneau projet « Acquis : 0 · Ouverts : 0 » et « Aucun point ouvert capitalisé » ; le fil reste disponible. | **Ne pas conclure à une perte D4** : les compteurs peuvent mesurer une capitalisation distincte du fil/projection. Examiner propriétaire, contrats et preuves lors des revues **04/05/06**, sans détourner le Sas vers une refonte D4. |
| **Preuves non exhaustives** | Conversation RECETTE réellement observée, mais pas de traçabilité exhaustive du fournisseur, comparaison Figma/runtime calibrée sur toutes les variantes, responsive mobile, états négatifs, unicité concurrente ou couverture REAL globale de cette revue. | Hors verdict fort F2/G5, R6 et Gate C. Les preuves déterministes et l'observation utilisateur ne sont pas interchangeables. |

**État de sortie de l'ensemble 03 :** parcours **vérifié avec réserves**, création et continuité attestées sur la session utilisateur, **proposition d'acceptation Sas avec UX-005-R01** ; une réception formelle globale ML4D et les promotions Git demeurent des décisions ultérieures de Morris. **Ne pas relancer un cycle Cursor Sas par inertie.**

**Traçabilité :** les captures Morris du 16/11 montrent T1, conseil R1, clarification métier, arbitrage R2, nom, création et écran projet ; l'affirmation de persistance provient du « refresh ok » de Morris. Ces captures ne sont **pas** des artefacts Git de ce registre, et les handoffs historiques prouvent d'abord les opérations Cursor à leur date (la recette utilisateur est postérieure au handoff de bascule).


### 3.4. Revue UX-006 — Espace projet / structure commune (17/11/2026)

**Périmètre et décision.** L'ensemble **04** qualifie la **structure partagée de l'Espace projet** : rail, nom du projet actif, fil d'Ariane, navigation des surfaces, organisation de Travail (conversation/compositeur/inspecteur), états de projet et accès. La revue a utilisé une **conversation existante longue en RECETTE** et la cible Figma validée. La capture finale a été examinée par Morris et ChatGPT le **17/11/2026** ; Morris a proposé de valider l'ensemble, proposition confirmée par la revue ChatGPT. **Verdict utilisateur : ENSEMBLE 04 — ACCEPTÉ VISUELLEMENT AVEC RÉSERVES.** Ceci ne constitue ni réception exhaustive des quatre frames/états, ni validation fonctionnelle complète du fil Nora (ensemble 05).

| Élément | Décision / preuve / portée |
|---|---|
| Références UX | Fichier Figma `itgvCulInEnFY6DvgIegvP` : [Travail `652:8`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-8), [Projet `652:58`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-58), [Navigation `652:108`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-108), [Projet indisponible `652:158`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-158). **Capture utilisateur finale : Travail seulement**, non quatre réceptions distinctes. |
| Diagnostic initial | RECETTE : DA initiale jugée trop massive ; rail et titre de projet perfectibles ; conversation et saisie enfermées dans un cadre unique ; compositeur trop haut ; espace inférieur inutilisé ; inspecteur décalé ; introduction trop dominante, aplat sombre et absence de séparateur. Observations de Morris sur captures successives, sans métrique photographique certifiée. |
| Correction de fidélité visuelle | Commit produit **local** `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6`, parent `20fb41ba` ; rail 246 px, nom sur deux lignes, navigation/retour Portefeuille, proportions et typographies harmonisées, inspecteur unifié. RECETTE servie sur build `WUqfWdCB7T2rHzDvk-Hre` ; Morris constate une amélioration nette mais demande ensuite une correction verticale. |
| Composition verticale | Candidat **local** `351aea9607c5997f7343212a837dd13c0f1e4429`, parent `a30e75c7` : introduction sans bandeau et filet horizontal, conversation et compositeur en cartes indépendantes, fil scrollable, inspecteur aligné sur la hauteur utile. Mesures DEV 1680×970 / DPR 1 : gap 25 px, bas compositeur/inspecteur delta 0, haut intro/inspecteur delta 0, conversation ~594 px, compositeur ~142 px, marge basse 16 px. |
| STOP de cutover | Le cutover de `351aea96` a été **bloqué avant mutation** : CP01 FAIL (état pending : contrôle « Réconcilier » débordant du compositeur `max-height:160px` et clippé par le shell) ; CP02 mobile : rail desktop non trouvé, alors qu'une navigation mobile alternative existait. **Aucun déploiement du candidat `351aea96`.** |
| Correctif CP01/CP02 | Commit produit **local, non poussé** `984d77a36695c2f59ebbc18619e54eeeb43ad94e`, parent `351aea96` ; pile `nora-composer-stack`, bandeau pending **hors de la carte compositeur** Figma, reprise actionnable, reflow/scroll selon viewport. CP02 : `studio-rail-mobile` identifié et testé, le rail desktop étant volontairement masqué sur mobile. Aucun nouveau moteur pending, aucune modification API/DB/migration ni redesign Figma. |
| Qualification candidat | Selon le Review Pack Cursor régularisé : **CP01-A..E PASS** (nominal 1680×970 et pending 1680×970, 1280×600, 1024×768, 390×844) ; **CP02 PASS** (desktop, intermédiaire, mobile) ; E04/T13/T16/F2/long-thread, Vitest studio-rail 13/13 et build Next **PASS**. Tests **BROWSER/FAKE DEV**, non preuve Nora LIVE ; TypeScript workspace **32 erreurs préexistantes**, Vitest GitHub App lane **3 FAIL préexistants**. |
| Bascule finale RECETTE | Sous GO Morris du 17/11 pour régularisation et déploiement en cycle unique : RECETTE existante `http://127.0.0.1:3200` → **`984d77a36695c2f59ebbc18619e54eeeb43ad94e` / build `3LzvYPTQc-Km7St6nF97r`**, `next start`, même LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`. Sauvegarde préalable `ml4d-e04-20261117-pre-984d77a3`, ancien worktree/build `a30e75c7` / `WUqfWdCB7T2rHzDvk-Hre` conservés pour rollback ; **33 tables publiques inchangées** ; aucune migration. Constat et identité du runtime **rapportés par Cursor**, non accès direct de ChatGPT au Mac. |
| Smoke post-cutover | **SC01/SC02/SC10/SC11/SC12/SC13 PASS** sur les portions effectivement testées ; SC02 utilise un login DEV de test, non l'identité OAuth privée. **SC03–SC09 = USER_RECETTE_REQUIRED** pour le parcours personnel ; SC10 navigation mobile projet privée non complètement qualifiée. Aucun message Nora LIVE envoyé par l'automate ; SKIP ≠ PASS. |
| Réception utilisateur | Capture RECETTE fournie par Morris le **17/11/2026** : rail projet et titre sur deux lignes, introduction compacte + séparateur, cartes conversation/compositeur distinctes, compositeur en bas, inspecteur aligné verticalement. Morris : « pour moi ça a l'air plutôt bien dans l'ensemble » et propose de « valider l'ensemble 04 » ; ChatGPT confirme cette acceptation **visuelle avec réserves**. Capture consultée **dans la conversation**, sans artefact Git ni preuve F2 à viewport calibré. |
| Réserves et sortie | L'état pending et les variantes mobile sont démontrés en **DEV fixture**, pas directement par Morris sur son OAuth. Maintenir OAuth privé `SC03–SC09` non vérifié exhaustivement, glyphes Unicode/finitions et duplication du badge « Contexte conservé », densité des contenus longs, erreurs TypeScript préexistantes et écart « Résultats et preuves → publication » (KNOWN GAP). **La revue du fil, de sa reprise et du scroll (UX-002) appartient à l'ensemble 05.** Aucune correction graphique générale réouverte. |
| Statut/gates | **04 — ACCEPTÉ PAR MORRIS AVEC RÉSERVES (structure commune / visuel)**. Pas de clôture globale ML4D, Gate C **OPEN**, aucun push produit, PR/merge, STABLE, release ou ADOPTED. Le guide reste sur une **branche D1 documentaire**, non baseline `main`. |

**Sortie :** ne pas ouvrir de cycle de correction du layout par inertie. La réception de la structure commune est consignée ; les limitations de preuve restent explicites. La prochaine famille est **05 — Travail avec Nora**, pour la continuité conversationnelle, la position de lecture au retour (réserve `UX-002`), les messages longs, le scroll, le compositeur et les interactions réelles, sans supposer une nouvelle autorisation de code.

**Traçabilité :** la capture Morris de réception est dans la conversation du 17/11 (sans lien Git inventé) ; les handoffs indiqués en §7 constituent les preuves Cursor datées de réalisation, de STOP et de déploiement, et non un substitut à la décision utilisateur.


### 3.5. Revue UX-002 — Travail avec Nora, continuité de lecture (17/11/2026)

**Source de conception unique :** [Conception UX — Travail avec Nora, v0.1](conception-ux-travail-avec-nora.md), §3–§5. Ce document est le **support intégré évolutif de l’Ensemble 05**, pas un registre concurrent ; les sujets suivants n'y seront spécifiés qu'après revue et arbitrage.

| Objet | Résultat / frontière |
|---|---|
| Scénario S05-A01 — Journal → Travail | **Défaut REPRODUIT** : deux captures Morris montrent position intermédiaire avant navigation et premier message au retour, sur projet existant. |
| Scénario S05-A02 — Rafraîchissement | **Défaut REPRODUIT par déclaration utilisateur** : depuis le milieu du fil, refresh ramène au premier message. Pas de capture supplémentaire requise pour enregistrer ce constat, mais aucune preuve automatique n'est revendiquée. |
| Arbitrage Morris | **VALIDATED SPEC — 17/11/2026** : dernier message comme position par défaut sur ouverture, navigation, refresh, reconnexion et envoi ; suivi d'une réponse lorsque le Pilote est en bas ; relecture volontaire préservée face aux nouvelles réponses, avec indicateur et accès direct à la fin. |
| Implémentation / tests | **NON LIVRÉS / NON PROUVÉS** au périmètre UX-002. Ne pas assimiler le défaut observé, le contrat décidé et une correction effective. |
| Gates | Aucun code/DB/RECETTE modifié par cette contribution documentaire ; aucun GO Cursor, push produit, PR, merge, STABLE, Gate C ou ML5. |
| Suite de revue | Présentation et exploitation des réponses Nora : densité, Markdown structuré, sources/actions réelles, états de restitution. |

**Traçabilité :** captures de l'Ensemble 05 communiquées dans la conversation du 17/11/2026 ; aucun artefact image Git inventé. La correction UX-002 reste **OPEN**, et l'Ensemble 05 reste **EN REVUE**.

### 3.6. Revue UX-007 — Nora, réponse structurée adaptative et interactions, réponses progressives et sources/preuves (17/11/2026)

**Source intégrée :** [Conception UX Travail avec Nora v0.7, §§6–9](conception-ux-travail-avec-nora.md). Les exigences structurantes R1/R2 ne sont pas remplacées et les cinq blocs Figma R3 sont des exemples, non une matrice fixe. **Sujet 02 : CLOS EN CONCEPTION UX PAR MORRIS ; Ensemble 05 : EN REVUE.**

| Rubrique | État et décision |
|---|---|
| **Observation RECETTE CampusFlow** | Capture utilisateur : titres, paragraphes, tableaux de mesure/priorisation ; ni famille enrichie ni action contextuelle démontrée dans cette capture, sans claim d'absence globale. |
| **Références** | R1 §2.32 (VALIDATED), R2 D3 RG-CONV-006 / RG-UX-003 / PF-24 et PF-29, R3 §§23–25 et frames 94:214/162:817 ; en code main de référence, NoraConversation → SafeMarkdown, **pas une inspection de la totalité du runtime candidat**. |
| **Décision Morris A–F** | **VALIDATED SPEC** : liberté expressive, proportionnalité, réponse composite dans un seul fil, fidélité, interactions gouvernées, continuité. Pas de catalogue fermé ni d'habillage systématique. |
| **Décision Morris sur choix rapide** | **TRANSMISSION IMMÉDIATE** dans le fil pour les options de poursuite ; pas de mécanisme hybride/préremplissage obligatoire. **Tout le groupe de choix expiré** dès la prochaine réponse Pilote effectivement envoyée, qu'elle résulte d'un clic ou d'une saisie libre ; l'ancien groupe reste visible, inactif. |
| **Décision Morris sur brouillon** | Une action conversationnelle envoie sa **propre intention** ; **brouillon non envoyé préexistant conservé à l'identique**, jamais fusionné, écrasé, purgé ni envoyé implicitement. |
| **Grammaire visuelle validée** | Conversation enrichie, sobre et composable ; texte naturel par défaut, blocs spécialisés si utiles, sans cadres ou intitulés techniques systématiques ; variante pixel non adoptée. |
| **Réponse progressive validée** | Contenu fidèle dès disponibilité réelle, **un seul message évolutif**, bloc incomplet non interactif, UX-002 préserve la relecture, choix actifs seulement après finalisation, interruptions/UNKNOWN honnêtes. |
| **Sources, preuves et consultation** | Six règles validées : provenance proportionnée, consultation contextuelle, statut factuel D8, contradictions visibles, références historiques consultables sous droits actuels **malgré expiration des options de choix**, synthèse et détail D8 accessibles. |
| **Distinction d'autorité** | Choisir/approfondir ≠ HumanDecision, acte « Exécuter », publication Git ou création de document. Les ressources et droits sont résolus par leurs propriétaires réels. |
| **Restes ouverts** | Rendu visuel exact, modèle de blocs et persistance, action périmée, clic avec Nora déjà occupée, fiabilité/ACK, mobile/accessibilité ; **aucune architecture adoptée ni GO Cursor implicite**. |
| **Oracles futurs** | UX-NORA-01..25 (cas simples et composites, clic immédiat, brouillon, **expiration de tout le groupe**, réponse libre, double clic/UNKNOWN, progressif/interrompu, sources/provenances, bilan D8, UX-002, responsive/autorité) ; **non exécutés**. |

**Suite de l'Ensemble 05 :** Sujets 01–05 clos **en conception UX** ; **revue transverse documentée** au §3.10 et contrat intégré v0.7. Réalisation du macro-lot cohérent sous GO Morris distinct. Clôture de conception ≠ réception du runtime.

### 3.7. Revue UX-008 — Compositeur Nora : affichage, saisie et brouillon (17/11/2026)

**Source intégrée :** [Conception UX Travail avec Nora v0.7 §10](conception-ux-travail-avec-nora.md). **Sujet 03 : CLOS EN CONCEPTION UX par Morris** ; conception fonctionnelle des pièces jointes et de la dictée **non incluse**. L'Ensemble 05 demeure **EN REVUE**.

| Rubrique | État et arbitrage |
|---|---|
| **Référence UX et constat** | Morris a fourni une **vidéo de référence ChatGPT le 17/11** (contenu consulté en conversation, non publié comme pièce Git) : champ initial sur une ligne, croissance selon texte, plafond, défilement interne et réduction à l'effacement. Figma Travail `652:8` / `94:214` = cibles visuelles candidates ; code main comporte `textarea` et `Envoyer`, sans preuve de sauvegarde du brouillon libre au refresh. |
| **Disposition VALIDATED** | Barre **compacte au repos sur une ligne**, une seule surface, `+` à gauche, zone de texte centrale, envoi à l'extrémité droite et **dictée future immédiatement à gauche d'Envoyer**. Ne pas disposer deux rangs permanents. |
| **Redimensionnement VALIDATED** | Croissance/réduction fluide et réversible en fonction de la saisie, ancrage en bas et croissance vers le haut, hauteur maximale responsive protégeant le fil, scroll interne du texte au-delà, focus et curseur préservés. Pas de seuil pixel arrêté. |
| **Clavier VALIDATED** | Desktop `Entrée` pour envoyer et `Maj+Entrée` pour le retour à la ligne ; composition IME protégée. Mobile touche retour à la ligne + bouton Envoi distinct. Message vide non transmissible, aucun envoi au collage ou à la navigation. |
| **Brouillon VALIDATED** | **Option B : par projet et navigateur courant**, navigation entre surfaces et refresh sans effacement, isolation A/B ; choix de poursuite Nora transmis séparément du brouillon. Cible UX validée ≠ persistance runtime prouvée. |
| **PJ et dictée** | **Emplacements uniquement prévus** ; le fonctionnement des PJ, types de fichiers, autorisations/ingestion et dictée sont **reportés** au chantier des capacités concernées. Aucun bouton sans fonction réelle. |
| **Points techniques non décidés** | Support, politique et durée du stockage, logout/nettoyage, sûreté, couverture mobile, architecture de l'envoi, concurrence et `pending/UNKNOWN`. Ces derniers sont à approfondir au **Sujet 04**, sans second moteur. |
| **Oracles** | **UX-COMP-01..13**, couvrant saisie compacte/longue, redimensionnement/collage/suppression, clavier, IME, navigation/refresh, isolation projet, clic contextuel, envoi tardif, responsive/accessibilité, PJ/dictée indisponibles, états d'erreur. Tous **NON EXÉCUTÉS**. |

**Suite de l'Ensemble 05 :** Sujets 04–05 clos **en conception UX** (§§3.8–3.9) ; jointure documentée au §3.10, ensemble en revue jusqu'à la réalisation et aux preuves. Sans micro-lot PJ/dictée ni GO technique implicite.


### 3.8. Revue UX-009 — Activité de Nora, erreurs et reprise (17/11/2026)

**Source intégrée :** [Conception UX Travail avec Nora v0.7 §11](conception-ux-travail-avec-nora.md). **Sujet 04 : CLOS EN CONCEPTION UX par Morris** ; l'Ensemble 05 demeure **EN REVUE** et aucune activité runtime nouvelle n'est prouvée.

| Rubrique | État et arbitrage |
|---|---|
| **Capture RECETTE et source code** | CampusFlow : bandeau statique « Nora prépare une réponse… » sans loader visible. Sur `main@997d4c4e`, `NoraConversation` affiche un état `preparing`, et le parcours `sendMessage` gère notamment `busy`, `pending` et `UNKNOWN` ; le streaming/événement détaillé n'est **pas démontré**. Le candidat RECETTE local n'a pas été réinspecté techniquement. |
| **Référence utilisateur** | Vidéo ChatGPT fournie et analysée le 17/11 : activité générale, annonce de travail, étape de consultation Figma, évolution de statut et restitution. **Référence ergonomique, pas preuve de Studio ni fichier Git**. |
| **Activité et progression VALIDATED** | Indicateur **animé, discret et vivant** dès attente réelle ; étapes **contextuelles uniquement si événement fiable** (outil/source réellement mobilisé), résultat/échec/interruption qualifié ; aucun journal fictif, pourcentage non fondé, chaîne de pensée ou console technique. |
| **Attente longue et historique VALIDATED** | Indicateur connu maintenu sans faux jalon ; si activité devient inconnue, état requalifié honnêtement ; **résumé compact des étapes utiles, dépliable après réponse**, sans réécrire l'histoire et sous droits actuels. |
| **Erreurs contextualisées VALIDATED** | Échec d'envoi près du message ; interruption dans la réponse Nora ; consultation échouée près de l'étape ; `pending/UNKNOWN` près de l'opération ; session expirée sur surface adaptée. **Ne pas charger le compositeur compact**. |
| **Reprise et continuité VALIDATED** | Conserver brouillon et contenu authentique récupérable ; **vérifier/réconcilier avant retransmission incertaine**, sans double effet. Ne pas bloquer toute question cognitive indépendante d'un effet métier incertain si le service existant la permet. |
| **Contrats propriétaires et risques** | D3 = tour conversationnel ; D7 = tentative/opération ; D8 = conformité et preuve ; D6 = décisions ; droits/provenance à respecter. UI ne calcule pas un succès ni un `ADOPTED` ; aucun nouveau moteur d'envoi/streaming, modèle physique ou gate décidé. |
| **Oracles de validation** | **UX-ACT-01..16 candidats NON EXÉCUTÉS** : attente/animation, étapes réelles, progressif, erreur outil, long délai, historique, refresh, UX-002, ACK perdu, interruption, `UNKNOWN`, session, mobile/accessibilité et non-duplication. |

**Suite de l'Ensemble 05 :** Sujet 05 / UX-010 validé (§3.9), bilan transverse maintenant **documenté (§3.10)**. Qualifier ensuite les écarts techniques et Figma pour la réalisation cohérente après **GO Morris distinct**.


### 3.9. Revue UX-010 — Visionneuse contextuelle et cohérence du fil (17/11/2026)

**Source intégrée :** [Conception UX Travail avec Nora v0.7 §12](conception-ux-travail-avec-nora.md). **Sujet 05 : CLOS EN CONCEPTION UX par Morris ; Ensemble 05 : EN REVUE**, synthèse transverse et preuves non acquises.

| Rubrique | État et arbitrage |
|---|---|
| **Observation / références** | Capture CampusFlow : « En bref » occupe la zone droite réduite, fil/compositeur au centre, rail fixe. R3 inspection `94:370`/`97:359` et Travail `652:8` ; `main@997d4c4e` bascule vers une surface Documents distincte, pas de preuve de visionneuse 50/50. |
| **Disposition VALIDATED** | Sur ouverture : **rail gauche inchangé**, l'espace à droite du rail se répartit en **deux moitiés de principe** conversation/compositeur et visionneuse ; « En bref » est **remplacé**, pas utilisé à sa largeur initiale. |
| **Modes VALIDATED** | **Agrandir** = zone utile entière hors rail ; **réduire** = retour partagé sans changer la ressource/position ; **fermer** = restauration de « En bref » et de la largeur du fil. Adaptation mobile/étroite sans 50/50 illisible. |
| **Une visionneuse VALIDATED** | Cliquer une deuxième ressource **remplace le contenu de la visionneuse unique** ; aucun panneau ni onglet documentaire ajouté. Retour simple à la source précédente uniquement si réellement connue pendant la consultation. |
| **Frontière fonctionnelle décidée** | **Visualisation seule dans Travail** : documents Nora, aperçus de sources Git si réellement disponibles. **Gestion/édition/révision documentaire et inspection approfondie** à traiter en **Ensemble 06 — Documents et Journal**, via leurs propriétaires. Sélection d'extrait pour « Demander à Nora » non validée dans Travail. |
| **Cohérence du fil** | Conversation et compositeur conservés, navigation/reflow sans reset, UX-002 préservée ; source/version/statut/droits réels, lecture indépendante des choix conversationnels expirés ; « Ouvrir dans Documents » seulement sur ressource canonique existante. |
| **Oracles et preuves** | **UX-VIEW-01..15 candidats NON EXÉCUTÉS** ; comparatif Figma/runtime, zoom/mobile/focus, conservation de lecture, droits et sources manquantes, changement A→B, liens profonds, non-régression Ensemble 04 et Sujets 01–04 restent à conduire. |

**Suite actualisée :** revue transverse de cohérence **documentée au §3.10**, sans clôture Ensemble 05 ni GO technique, PR ou merge.


### 3.10. Revue transverse de cohérence — Sujets 01 à 05 (17/11/2026)

**Référence intégrée :** [Conception Travail avec Nora v0.7 §13](conception-ux-travail-avec-nora.md). **Mandat Morris :** réaliser la jointure autonome des cinq décisions déjà validées et corriger à la marge, sans nouveau choix produit. **Verdict : `SPEC CROSS-REVIEW CONSISTENT — DOCUMENTED`**, au niveau **conception uniquement** ; aucune recette ni implémentation prouvée.

| Jointure examinée | Clarification consignée | Réserve de preuve |
|---|---|---|
| **Fil UX-002 × Visionneuse UX-010** | **Retour depuis Documents vers Travail** = fin de fil ; **ouverture/agrandissement/fermeture dans Travail** = simple reflow sans changer la lecture volontaire. | Scroll, reflow et focus BROWSER non testés. |
| **Choix UX-007 × ACK incertain UX-009** | Clic = intention immédiate ; **geler le groupe pendant pending/UNKNOWN**, mais ne conclure à son expiration définitive **qu'après transmission réellement établie**. Vérifier avant tout réessai. | Admission et identité de tour D3 à qualifier. |
| **Choix × Brouillon UX-008** | Envoi de poursuite distinct ; brouillon libre conservé, y compris face à une réponse/ACK tardif. | Concurrence, droits actuels, stockage et nettoyage à qualifier. |
| **Réponse progressive × Activités** | Une réponse Nora et ses étapes observables rattachées ; pas de faux messages ni d'activités inventées ; choix actionnables après finalisation. | Streaming/événements réels non démontrés. |
| **Activité/pending × Composer** | Saisie possible, **envoi soumis aux conditions du service**, sans lancement d'un effet dépendant d'un état incertain. | Qualification D3/D7/D6 et idempotence à vérifier. |
| **Sources anciennes × Visionneuse** | Les liens historiques de lecture restent consultables sous droits actuels, indépendamment de l'expiration des choix ; une visionneuse unique remplace le contenu. | Versions, liens et droits Git à tester. |
| **Visionneuse × Ensemble 06** | Travail = **visionneuse rapide et lecture seule** ; Documents = bibliothèque, édition et révision sous leurs contrats. | Pas de second éditeur ni de second registre. |
| **Accès, identité et projets** | Un fil et un brouillon par projet, consultables/restaurables uniquement avec identité et droits actuels. | Restauration sous reconnexion/révocation non prouvée. |

**Parcours croisés :** `UX-CROSS-01..10` (brouillon/choix, ACK perdu, attente, streaming, relecture, sources anciennes, changement de visionneuse, activité en mode étendu, `UNKNOWN`, droits/refresh). **CANDIDATS NON EXÉCUTÉS** ; ce ne sont ni un nouveau sujet produit ni des cycles Cursor indépendants.

**Aucune contradiction structurante non arbitrée identifiée** dans les cinq décisions Morris, au niveau des sources vérifiées. Restent ouvertes les interfaces techniques, le contrat visuel Figma 50/50, le comportement runtime réel, les preuves BROWSER/LIVE/REAL et l'acceptation de l'Ensemble 05. **Suite :** un macro-lot intégré de réalisation/code/tests/docs/visuel après **GO Morris technique distinct**, sans PR/merge/Gate C/ADOPTED implicites.

### 3.11. Qualification technique et arbitrages de réalisation M1–M5 (17/11/2026)

**Source technique :** [Review Pack Full de qualification, cycle read-only](https://github.com/mcleland147/sfia-workspace/blob/1f93c421de3263cfe9f38b2d2ff94aa0862b2900/sfia-review-handoff/latest-chatgpt-review.md), verdict **TECHNICAL QUALIFICATION READY WITH RESERVES**. Cursor rapporte l'analyse sur un **candidat local** `984d77a3` et RECETTE `:3200` / `3LzvYPTQc-Km7St6nF97r` ; ce constat n'est pas une vérification Git distante du HEAD produit ni une preuve de réalisation de l'Ensemble 05. Aucun fichier produit modifié selon le cycle.

**Arbitrages individuels Morris post-qualification :** décisions exprimées en conversation et **intégrées à [contrat technique v0.2 §1.1](contrat-technique-travail-avec-nora.md)**. Elles valident les orientations, **pas** les types d'API, schémas de données physiques, nouvelles capacités ou preuves runtime.

| ID | Orientation approuvée | Conditions / frontières |
|---|---|---|
| **M1 — Projection D3** | Réponses structurées, typées et versionnées sous propriétaire D3 unique | Contenus/références/choix/finalisation ; réutiliser le stockage existant si compatible, pas d'action dérivée du Markdown ; détails d'interface à qualifier |
| **M2 — Activité et texte** | **V1 texte final-only admise** ; activité vivante, véridique et contextualisée lorsque les événements réels existent | Pas de streaming de tokens/SSE imposé ni étape fictive ; **texte progressif reste cible future à réexaminer avec preuve/exit**, sans PASS V1 des scénarios de diffusion progressive |
| **M3 — Brouillon** | **`sessionStorage` par Pilote et projet**, dans l'onglet courant | Navigation/refresh oui ; droit à la restauration, purge logout/révocation, ACK tardif ; fermeture onglet non garantie, pas de sync interappareils |
| **M4 — Visionneuse** | **État local intégré à Travail**, sans URL/deep-link dédié | Une seule visionneuse 50/50/agrandie, lecture seule, référence/version officielle ; « Ouvrir dans Documents » = vraie navigation sous droits |
| **M5 — Migration** | **Aucune migration par défaut pour la V1** | Réemploi compatible ; si nouvelle table/schéma/migration indispensable : **STOP, impacts documentés et arbitrage Morris distinct**, pas de contournement fragile |

**Statuts et décisions restantes :** `M1–M5 ORIENTATIONS VALIDATED BY MORRIS` ; `TECHNICAL CONTRACT v0.2 CANDIDATE/DOCUMENTED` ; `DELIVERY NOT AUTHORIZED` ; `E05 BEHAVIOR NOT PROVEN`. La qualification des interfaces exactes, événements observables, garde de session, références D4/D9, compatibilités de persistance et preuves reste au futur contrat de réalisation. Aucun changement UX v0.7 ou Figma 05 demandé par ces décisions.

**Suite utile :** pré-check local du futur cycle technique et cadrage de **l'unique réalisation intégrée Travail avec Nora**, code/tests/docs/visuel ; prérequis de décision Morris sur le **GO Delivery** et STOP distinct si une nouvelle architecture ou une migration s'avère indispensable. Pas de PR, merge, release, réception Gate C, ML5 ou adoption implicite.

### 3.12. Actualisation Ensemble 05 — composition visuelle RECETTE et validation Morris (18/11/2026)

**Source de vérité de cette actualisation :** [dossier de réconciliation et de préparation à la réception](grammaire-visuelle-conversationnelle/07-dossier-reconciliation-reception.md), [matrice canonique C-01…C-22 V0.10](grammaire-visuelle-conversationnelle/06-matrice-convergence-vision-realisation.md) publiée après la campagne, [dernier handoff Full](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md), captures et verdicts Morris partagés en conversation le 18/11. Le candidat produit est local, non disponible comme commit Git distant ; son SHA/build et les preuves de cutover sont **rapportés par Cursor**, pas inspectés directement par ChatGPT sur le Mac.

**Décision utilisateur :** la **campagne de huit restitutions visuelles** est acceptée par Morris après correction. UAT-01…06 validés avec réserves initiales, UAT-07/08 initialement partiels puis corrections visuelles ; dernier contrôle sur UAT-07 (connexions/single revue) et UX-01 (alignement titre/icône) **explicitement accepté**. Le scroll horizontal du diagramme parallèle est accepté. Cela **ne clôt pas** les autres capacités contractuelles du fil Travail (UX-002, UX-008…010 et 88 oracles candidats) ni le Gate C.

| UAT | Restitution vérifiée | Qualification utilisateur |
|---|---|---|
| UAT-01 | Trois cartes comparatives | Accepté avec correctifs UX |
| UAT-02 | Matrice de cinq options | Accepté, caption supprimée |
| UAT-03 | Six étapes | UNKNOWN initial ; correctif `detail.max(5000)` ; réponse LIVE retestée et acceptée |
| UAT-04 | Planning S1–S8 | Accepté, numérotation épurée |
| UAT-05 | Dépendances dirigées | Accepté, graphes sans icônes décoratives |
| UAT-06 | Arbre conditionnel | Accepté, décision humaine préservée |
| UAT-07 | Processus trois voies → synchronisation → revue → lancement | Partiel initial puis **accepté** après correction du double claim |
| UAT-08 | Synthèse COPIL et options | Partiel initial puis **accepté avec limites iconographiques restantes** |

**Réserves internes à la campagne, namespace distinct des IDs centraux :** `UX-01…UX-07` ici désignent sept irritants **UAT visuels**, et **non** les entrées `UX-001…UX-010` de ce registre. UX-01 (alignement), UX-02 (caption matrice), UX-03 (numéros), UX-04 (icônes graphiques), UX-05 (relations parallel), UX-06 (sémantique/padding icônes) et UX-07 (espaces dans les cartes) sont acceptés après livraisons ciblées. La diversité des icônes reste une limite esthétique mineure, non bloquante pour le corpus accepté.

**Intégrité à vérifier avant intégration :** le [handoff final](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md) décrit une mutation **temporaire** des `owner_pilot_id` en RECETTE pour capture, puis restauration déclarée. Les comptes avant/après sont identiques (23 projets, 560 messages, 196 conversations, 280 commandes), **sans preuve indépendante des valeurs ACL individuelles**. Requalification en lecture seule demandée ; aucune mutation supplémentaire autorisée ici.

**Gates :** `USER ACCEPTED WITH RESERVES — VISUAL COMPOSITION UAT SCOPE` / `RECONCILIATION PENDING`. La branche documentaire et les SHA candidats restent distincts de `main`; aucun GO pour push produit, PR, merge, Gate C, STABLE ou ADOPTED.

### 3.13. Revue Ensemble 07 — Projet, Trajectoire, CKI et expérience Figma Page 10 (21/11/2026)

**Périmètre :** Equip'Campus en RECETTE, Projet/Trajectoire, cycle CADRAGE actif, CKI lié, étapes envisagées et décisions applicables. Revue Morris sur captures réelles ; onze variantes Projet/Trajectoire réimplémentées d'après la [Page 10 Figma](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1069-100).

| Objet | État et preuve | Limites / réserves |
| --- | --- | --- |
| Parcours gouverné | Ouverture CADRAGE, 1 cycle ACTIVE, CKI 01-cadrage associé ; les étapes suivantes restent envisagées | Nora LIVE globale NOT PROVEN ; ne pas rejouer le GO pour une revue visuelle |
| Figma Page 10 | Cible validée Morris ; 11/11 états DEV exercés et 40/40 contrôles F2 critiques PASS selon Cursor ; Auto Layout et shell plus extractibles | Amélioration méthodologique probante, généralisation NON ADOPTED ; SAS06 modal PARTIAL et labels des angles CKI sous réserve |
| Trajectoire | Captures Morris post-déploiement : revue favorable ; dernier déséquilibre Acquis/À clarifier observé puis corrigé | Pas de réouverture de campagne UX générale ; données Figma illustrative ≠ données Equip'Campus |
| Correctif final | TrajectoryBoard, grid minmax(0,640fr) / minmax(0,646fr), gap 24, min-w-0, wrap ; DOM 639/645/24, h157 sur 09.02 et 09.09 | TypeScript, 8 unitaires, F2 ciblé, responsive et build PASS selon Cursor ; 11/11 non rejoués après correctif isolé |
| RECETTE | SHA runtime local 5ad8fa57e4d529726244ddfae394074f5ea65432, BUILD BtZP6qDx5oAw8jwPQSEhc, :3200 ; sauvegarde et rollback selon Cursor | Aucun commit produit disponible sur Git distant au pré-check de clôture ; PR/merge non effectués |
| Décision Morris | Après capture finale 21/11 : « c'est ok », demande de finaliser recette, registre et intégration Git, puis préparer Ensemble 08 | **MORRIS UAT ACCEPTED / FINAL UX RESERVE TECHNICALLY CLEARED** ; Gate C OPEN / NO STABLE / NO ADOPTED |

**Références :** [PV E07 final](../../validation-qualite/ensemble-07-recette-utilisateur-20261121.md) ; [méthodologie Figma v1.1](../../ux-ui/methodologie-contrat-figma-cursor.md) ; [Handoff final L3](https://github.com/mcleland147/sfia-workspace/blob/b89ba35f83950c35cb572d1b13a675e3cce6d031/sfia-review-handoff/latest-chatgpt-review.md) ; [Handoff expérimentation](https://github.com/mcleland147/sfia-workspace/blob/0b95a94d238fac668062e3499271dadd62813495/sfia-review-handoff/latest-chatgpt-review.md).

**Sortie Git :** publier d'abord le candidat réel de la branche locale, vérifier son SHA et l'ascendance du build UAT, rapprocher PV/registre/méthode dans la PR de consolidation, exécuter required checks, puis merger sous le GO Morris avec contrôle CI post-merge. Ne pas déclarer ce merge acquis d'avance. **Ensemble 08** est la prochaine famille de revue à préparer sans nouveau code ni décision de Gate C.

## 4. Fiche légère à renseigner pendant chaque revue

Copier ce bloc uniquement lorsqu'un sous-écran ou une variante mérite un suivi détaillé ; sinon une ligne dans le registre suffit.

```text
Parcours / écran :
Date et version de recette (URL/environnement, commit si connu) :
État testé / action réalisée / viewport :
Capture(s) runtime :
Référence Figma (page, frame, état, date/version si disponible) :
Observation factuelle :
Attendu / proposition UX (non décidée) :
Décision Morris (date / option retenue / réserve éventuelle) :
Impact (UI / navigation / fonctionnel / API-données / autorité / sécurité) :
Travaux regroupés (composant ou ensemble de surfaces concernés) :
Preuve après correction (capture + interaction + navigateur/viewport) :
Statut :
```

## 5. Regroupement des réalisations et réception

Les **ensembles de réalisation** ne sont créés qu'à partir des observations arbitrées. Ne pas les confondre avec les neuf ensembles de revue.

| Ensemble de réalisation | Écrans / observations liés | Résultat attendu | Frontières / risques | Preuves exigées | Statut / GO |
|---|---|---|---|---|---|
| **Entrée unifiée / UX-003** | 01 — Connexion et accès ; `UX-003` | Entrée Studio/Nora + GitHub, desktop/mobile et état session expirée | OAuth et sessions inchangés ; DEV test contrôlé ; isolation RECETTE ; LIVE non prouvé | Contrat Figma, tests Cursor, captures navigateur desktop/expiré, décision Morris ; F2 mobile non apportée | **Livré en candidat local ; recette UX Morris acceptée avec réserves le 16/11** ; aucun push projet / PR / merge / STABLE |
| **Portefeuille / UX-004** | 02 — Portefeuille et rail personnel ; `UX-004` | Portefeuille accessible, lisible, rail fixe et entrée directe vers le sas D2 ; breadcrumb cohérent | D1/D2 sans création de projet implicite ; garde single-flight document seulement ; aucun API/DB modifié ; F2 mobile non réceptionné | Cinq frames Figma, captures et validation utilisateur, 20 UNIT + 20 Playwright BROWSER/FAKE + 4 scénarios smoke RECETTE rapportés ; handoff distant | **RECETTE UX acceptée par Morris avec réserves le 16/11**, candidat local `b05dacf…` servi sur `:3200` ; sans push projet/PR/merge ni clôture ML4D |
| **Sas Nora conversationnel / UX-005** | 03 — Préparation de projet, aperçu, création, reprise ; `UX-005`, `UX-005-R01` | Évoluer librement d'une intention vague vers un périmètre nommé et un projet créé par acte explicite, sans formulaire d'ajustement | Propriétés D2/D3 séparées ; qualifications structurées, currentness et provenance ; R1/R2 ; aucun second moteur Nora ni migration ; D4 global hors périmètre | C1–C4 `6798219f` puis R1/R2 `bd8e1672` ; UNIT 419, PG 484, BROWSER FAKE 5 rapportés ; S01–S07 PASS ; recette Morris T1→T7 et refresh OK sur RECETTE `bURdIMEzv8pRSJCzgsiDf` | **Livré en RECETTE, vérifié avec réserves le 16/11** ; correction `UX-005-R01` à rattacher à un lot pertinent ; **pas de décision formelle de clôture ML4D ou Gate C** ; aucun push produit, PR, merge ni STABLE. |
| **Espace projet / structure commune — UX-006** | 04 — Rail projet, navigation, introduction, conversation/compositeur, inspecteur et états ; `UX-006` | Espace projet cohérent, fidèle aux frames de référence, lecture/saisie indépendantes, reprise accessible sans clipping et navigation desktop/mobile à leurs breakpoints | Ne pas transformer la structure commune en refonte fonctionnelle Nora ; OAuth privé et variantes non tous reçus par Morris ; aucune API/DB/migration ; `UX-002` reporté à l'ensemble 05 | Candidats locaux `a30e75c7` → `351aea96` (non déployé) → `984d77a3` ; CP01/CP02 et tests E04/F2/long-thread PASS DEV ; cutover RECETTE `3LzvYPTQc-Km7St6nF97r` ; capture et décision Morris du 17/11 ; handoff distant complet | **Accepté visuellement par Morris avec réserves le 17/11/2026** ; RECETTE sur `984d77a3` selon Cursor ; **aucun push projet/PR/merge/STABLE, Gate C OPEN**. |
| **Travail avec Nora — composition visuelle en RECETTE, autres sujets non clôturés** | 05 : UX-002, UX-007…010 + UX-CROSS-01…10 ; **sous-corpus UAT-01…08 de composition** | Restitution conversationnelle adaptative intégrée, fidèle et lisible ; autres contrats du fil, du compositeur, de l'activité et de la visionneuse à qualifier distinctement | [Contrat technique v0.2](contrat-technique-travail-avec-nora.md) et M1–M5 validés en orientation ; droits/ACL, UX-002, activité réelle, sessionStorage, visionneuse et compatibilité PG historique non entièrement couverts par les huit UAT | UAT-01…08 examinés, corrections UX-01…07, handoffs SFIA v2.6, candidat RECETTE UAT `5c94c867` désormais ancestral de `main@b7de1fb0` (PR #681, tip `ac08b381`), [handoff final](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md), [dossier](grammaire-visuelle-conversationnelle/07-dossier-reconciliation-reception.md). **88 oracles candidats ≠ huit UAT** | **Sous-campagne visuelle USER ACCEPTED WITH RESERVES — 18/11 ; produit mergé sur `main` (#681) ; docs PR #680 ; Ensemble 05 global NON CLOS ; Gate C OPEN ; NO STABLE/ADOPTED** |
| **Documents et Journal — Ensemble 06** | 06 — Bibliothèque et Journal V4 | Lecture, sujets/décisions, inspection | Capacités E06 acceptées avec réserves | PR #683 MERGED ; CI PASS ; PV E06 | **MERGED avec réserves conservées** |
| **Projet / Trajectoire / CKI — Ensemble 07** | 07 — Pilotage et cycle CADRAGE | Conduite de projet, continuité des étapes, UX Page 10 | Préserver invariants D5/D6 et provenance CKI | UAT ACCEPTED ; ratio 50/50 F2 PASS ; runtime local 5ad8fa57 | **RECETTE ACCEPTED, GIT PENDING** ; voir §3.13 / PV E07 |
| *Autres ensembles suivants à constituer après arbitrages* | 08–09 | — | — | — | **Aucun GO supplémentaire implicite** |

**Avant tout contrat Cursor :** consolider la cible décidée, la portée IN/OUT, les dépendances, le blast radius, les tests/navigateurs, les sources Figma applicables, les preuves de sortie, les réserves et le gate Morris ; relire depuis Git les sources applicables et le routage/template **SFIA v2.6**.

**Pour la réception globale ML4D :** couvrir les surfaces/états applicables réellement construits, arbitrer les écarts/réserves et obtenir un verdict Morris sur la convergence UX/UI. **Gate C demeure distinct et ouvert**, même après la réception d'un écran.

## 6. Ensemble 05 — historique de conception et actualisation de recette

**État acquis au 17/11/2026 :** les ensembles **01 Connexion (UX-003)** et **02 Portefeuille (UX-004)** sont acceptés par Morris avec réserves ; **03 Sas Nora (UX-005)** est vérifié avec la réserve mineure `UX-005-R01` ; **04 Espace projet / structure commune (UX-006) est accepté visuellement avec réserves** sur RECETTE `984d77a3` / build `3LzvYPTQc-Km7St6nF97r`. Cette décision s'applique à la **structure commune et à la capture Travail effectivement examinée**, sans réception intégrale de tous les états ni adoption produit.

**Suite engagée : Ensemble 05 — Travail avec Nora EN REVUE.** UX-002 / `S07-06-R01` reste **REPRODUITE / correction OPEN**. **Sujets 01–05 VALIDATED SPEC BY MORRIS** (UX-002, UX-007..010) ; **revue de jointure DOCUMENTED** (§3.10, [Conception Travail avec Nora v0.7 §13](conception-ux-travail-avec-nora.md)). **Aucune réalisation ni conformité runtime, streaming ou visionneuse 50/50 prouvés** par cette écriture. Suite : [page 05 Figma](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=700-38) réalisée et visuellement approuvée ; [contrat technique intégré v0.2](contrat-technique-travail-avec-nora.md) **CANDIDATE/DOCUMENTED**, [qualification technique FULL](https://github.com/mcleland147/sfia-workspace/blob/1f93c421de3263cfe9f38b2d2ff94aa0862b2900/sfia-review-handoff/latest-chatgpt-review.md) **READY WITH RESERVES**, **M1–M5 VALIDATED BY MORRIS en orientation**. Reste à établir les détails techniques et le mandat Cursor **sous GO Delivery distinct**, sans absorber Ensemble 06.

**La publication documentaire du contrat technique v0.2 enregistre les arbitrages M1–M5 sans adopter de schéma physique ni autoriser le développement ; Gate C reste OPEN.**

**Actualisation au 18/11/2026 (supplante uniquement le statut opérationnel daté du 17/11, sans réécrire l'historique) :** la chaîne de **composition visuelle Nora** a été construite, déployée en RECETTE sur le candidat `5c94c867` et reçue par Morris sur les **huit scénarios UAT** avec réserves. La preuve et les limites sont au [§3.12](#312-actualisation-ensemble-05--composition-visuelle-recette-et-validation-morris-18112026) et dans le [dossier de réconciliation V0.2](grammaire-visuelle-conversationnelle/07-dossier-reconciliation-reception.md). La matrice C-01…22, les sources 01–05, la conception UX Travail, le contrat technique et le journal delivery ont été synchronisés sur **la branche documentaire candidate**.

**Addendum intégration Git (même jour, v0.17) :** après remédiation CI (tests/fixtures alignés au produit actuel, Required Gate PASS run `44400455666`), le **produit ML4D a été mergé** via PR [#681](https://github.com/mcleland147/sfia-workspace/pull/681) → `main@b7de1fb0` (tip `ac08b381`). Le SHA UAT `5c94c867` / build `IEINNuPl0bHWJOWkh0ZhG` reste la **référence RECETTE immuable** (non redéployée). **Le reste des contrats de l'Ensemble 05 n'est pas réputé exhaustivement recetté** ; vérification ACL lecture seule et réconciliation documentaire encore ouvertes ; `Gate C OPEN`, `NO RELEASE`, `ADOPTED` non ; ML5 / Ensemble 06 NOT STARTED. Conserver `UX-005-R01` et les réserves UX-006.

- [Ensemble 06 — fiche de reprise Documents/Journal](ensemble-06-documents-journal-reprise.md) — reprise only, NOT STARTED.

## 7. Sources de cadrage (Git au SHA de référence)

**Ajout Ensemble 07 (21/11/2026) :** [PV final](../../validation-qualite/ensemble-07-recette-utilisateur-20261121.md), [méthode Figma v1.1](../../ux-ui/methodologie-contrat-figma-cursor.md), [page 10 Figma](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1069-100), [Review Handoff L3 final](https://github.com/mcleland147/sfia-workspace/blob/b89ba35f83950c35cb572d1b13a675e3cce6d031/sfia-review-handoff/latest-chatgpt-review.md). Les observations historiques demeurent datées et ne sont pas réécrites rétroactivement.


- [Dossier de réconciliation et préparation de réception — 18/11/2026](grammaire-visuelle-conversationnelle/07-dossier-reconciliation-reception.md) — campagne visuelle UAT-01…08 acceptée avec réserves ; preuves et gates, sans réception globale implicite.

- [Conception intégrée Ensemble 05 — Travail avec Nora v0.7](conception-ux-travail-avec-nora.md) — Sujets 01–05 **VALIDATED SPEC** ; revue transverse §13 **DOCUMENTED** ; **9 UX002 + 25 UX-NORA + 13 UX-COMP + 16 UX-ACT + 15 UX-VIEW + 10 UX-CROSS = 88 oracles candidats**, non exécutés sur correctif ; réalisation et preuves ouvertes.
- [Contrat technique intégré Ensemble 05 — Travail avec Nora v0.2](contrat-technique-travail-avec-nora.md) — **CANDIDATE / DOCUMENTED** sur branche documentaire ; **M1–M5 validés Morris en orientation**, CT-01..08, D3–D9, blast radius, limites V1 M2, compatibilité et preuves ; **aucun schéma ou transport physique adopté ni GO Delivery**.
- [Qualification technique Ensemble 05 — Review Pack Full](https://github.com/mcleland147/sfia-workspace/blob/1f93c421de3263cfe9f38b2d2ff94aa0862b2900/sfia-review-handoff/latest-chatgpt-review.md) — **TECHNICAL QUALIFICATION READY WITH RESERVES**, cycle read-only, observation du candidat local rapportée ; **ne constitue ni livraison ni preuve runtime des changements E05**.
- [Figma ML4D page 05 — Travail avec Nora (16 variantes)](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=700-38) — desktop/mobile, visionneuse lecture seule et compositeur aligné au bas du panneau ; cible visuelle approuvée en conversation, **sans démonstration runtime**.

- `projects/sfia-studio-next/governance/SEF.md` — macro-lots, valeur produit, preuves graduées, autonomie et gates.
- `projects/sfia-studio-next/governance/roadmap.md` — ML4D NEXT, Gate C OPEN et réserves héritées.
- `projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` — périmètre ML4D, Figma, variantes, F1/F2, frontière ML5 et réception G5.
- `projects/sfia-studio-next/governance/product-naming-conventions.md` — nommage par responsabilité produit.
- `projects/sfia-studio-next/construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md` — signalements UAT `S03-02-R01` et `S07-06-R01` (constats datés, non preuves de l'état actuel de ML4D).
- Figma R3 — frames `574:425`, `574:466`, `574:490` : spécifications UX-003 validées par Morris, sans effet Git normatif.
- [Review Handoff UX-003 / restauration RECETTE](https://github.com/mcleland147/sfia-workspace/blob/63ab5a731ebdf173fefab2e7152744bf617f9229/sfia-review-handoff/latest-chatgpt-review.md) — candidat local et incident de lane ; capture Morris et acceptation constatées dans la conversation du 16/11, **distinctes de ce handoff technique**.
- Figma UX-004 : cinq frames `591:425`, `591:543`, `591:661`, `591:721`, `592:435` ; conception validée Morris, les preuves runtime sont distinguées des frames.
- [Review Handoff UX-004 D2 Guards](https://github.com/mcleland147/sfia-workspace/blob/17d837af61a99202dbaacb2f7084c4f393326c8a/sfia-review-handoff/latest-chatgpt-review.md) — contenu du correctif et tests BROWSER/FAKE sur le candidat local `b05dacf…`.
- [Review Handoff UX-004 / déploiement RECETTE final](https://github.com/mcleland147/sfia-workspace/blob/8c2160477809b79a74914f9e360b72d314ee3d54/sfia-review-handoff/latest-chatgpt-review.md) — manifeste, build, smoke et rollback ; **la réception Morris est postérieure au rapport Cursor** et établie dans la présente revue conversationnelle.
- `conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md` — contrat R2 D2, distinction préparation/projet, création explicite, continuité, refus/incertitude ; source de la prochaine revue Sas.

- Figma Sas Nora — cinq frames de conception `607:3`, `607:62`, `607:131`, `607:203` et `607:277` ; sans preuve de conformité F2/G5 exhaustive.
- [Review Pack Sas C1–C4, FULL 26 diffs](https://github.com/mcleland147/sfia-workspace/blob/3ec1f37d887363ef9f4b6ea4a68e965a0ba773bf/sfia-review-handoff/latest-chatgpt-review.md) — candidat local `6798219f`, corrections de projection, questions, hauteur et suppression du formulaire manuel.
- [Review Pack Sas R1/R2, FULL 11 diffs](https://github.com/mcleland147/sfia-workspace/blob/10e6c9784de4ba03bb132e9b88bbea32e6879a75/sfia-review-handoff/latest-chatgpt-review.md) — candidat local `bd8e1672`, discriminants absence de `clarifications` vs `[]`, bootstrap intention.
- [Review Handoff — bascule RECETTE Sas](https://github.com/mcleland147/sfia-workspace/blob/f2bf090d03f4d075eef18d6b17c4c0e6437f7f26/sfia-review-handoff/latest-chatgpt-review.md) — build `bURdIMEzv8pRSJCzgsiDf` servi, schéma 013 conservé, S01–S07, inventaire et rollback ; capture/validation utilisateur Morris postérieures.
- `construction/as-built-ml4d-sas-nora-convergence-20261116.md` et `construction/delivery-history.md` — documents as-built/historique du **candidat produit local**, non réinterprétés comme baseline `main`.

- Figma Ensemble 04 : [Travail `652:8`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-8), [Projet `652:58`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-58), [Navigation `652:108`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-108), [indisponible `652:158`](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=652-158) — cible structurelle, pas attestation de réception des quatre variantes.
- [Review Handoff E04 — correction de fidélité visuelle](https://github.com/mcleland147/sfia-workspace/blob/93f5bec02c2707914b97e98c3837fac16c06ed00/sfia-review-handoff/latest-chatgpt-review.md) — candidat local `a30e75c7`, mesures et diff.
- [Review Handoff E04 — composition verticale](https://github.com/mcleland147/sfia-workspace/blob/9f26edaaffc16cdee02d4030f194bdf69ee19524/sfia-review-handoff/latest-chatgpt-review.md) — candidat local `351aea96`, distinct de sa mise à disposition.
- [Review Handoff E04 — cutover STOP CP01/CP02](https://github.com/mcleland147/sfia-workspace/blob/300b02f87f781bd7ac019c2bc7effd5a90fd39e5/sfia-review-handoff/latest-chatgpt-review.md) — aucune mutation de RECETTE sur `351aea96`.
- [Review Handoff E04 — qualification CP01/CP02 et RECETTE finale](https://github.com/mcleland147/sfia-workspace/blob/c35f0bbd0f3024f06c729511ad4c8824354e418e/sfia-review-handoff/latest-chatgpt-review.md) — full diffs et tests, candidat local `984d77a3`, BUILD_ID servi, sauvegarde, smoke et réserves OAuth.
- **Réception Morris E04 du 17/11/2026** : capture RECETTE Travail et décision conversationnelle d'acceptation visuelle avec réserves ; **pas d'artefact Git de capture utilisateur** dans ce registre.
```

## 14. Verdict

**`ENSEMBLE 07 — GIT INTEGRATION PR READY — UAT ACCEPTED — REQUIRED CHECKS QUALIFIED — INDEPENDENT REVIEW REQUIRED`**

*(Si Build Next encore IN_PROGRESS au moment L3 : qualifier explicitement « REQUIRED CHECKS PENDING » et ne pas déclarer QUALIFIED.)*

## Annexe — Instruction ChatGPT

Relire le diff distant de #687, vérifier ascendance `5ad8fa57`, présence des 3 blobs docs #686, CI Required Next, réserves, puis émettre le verdict de revue indépendante. **Ne pas merger** depuis ce pack ; GO Morris de merge déjà acquis après PASS.
