# SFIA Review Pack FULL — Ensemble 07 · PR #687 CI GREEN

> Review Pack FULL · Handoff L3 publish-in-cycle
> Merge automatique : **NON** — revue indépendante ChatGPT requise
> RECETTE / UX 11/11 / Ensemble 08 code : **NON**
> Required checks tip final : **SUCCESS**

## 1. Date et GO

| | |
|---|---|
| Date | 2026-11-21T13:42Z |
| GO Morris | CRITICAL — remédiation CI autonome · merge après revue PASS + required checks SUCCESS |
| Cycle | 13 — PR Readiness / Git Integration (poursuite corrective) |
| PR | https://github.com/mcleland147/sfia-workspace/pull/687 |
| Verdict | **ENSEMBLE 07 — PR #687 CI GREEN — SAS06 RESPONSIVE VERIFIED — DOCUMENTATION ALIGNED — READY FOR INDEPENDENT MERGE REVIEW** |

## 2. Git Truth

### Initial (reprise cycle)
| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche | `sfia/next-ensemble07-git-integration` |
| HEAD initial rapporté | `8b256c720f06a28eb6720b69813de5606f751875` |
| origin/main | `542da1de917867b6bbda8b2b57d100552711c9aa` |
| UAT / RECETTE | `5ad8fa57e4d529726244ddfae394074f5ea65432` · BUILD `BtZP6qDx5oAw8jwPQSEhc` |
| Run `44902434109` | **CANCELLED** Morris — ni PASS ni FAIL fonctionnel |

### Final
| | |
|---|---|
| HEAD final | `6a368653832be64d1da24f4a39b46fb1fb75a2d7` (docs delivery-history after CI GREEN `957737c3`) |
| Tree | `dd240acd196ade680a672e8062c0ef77bef348cd` |
| Tree `web/` | `eb301ee9a6825861421209b1a6d941fd83acc185` |
| Ascendance UAT | **YES** |
| Push | **OUI** |
| Merge main | **NON** |
| Dirty préservé | `.tmp-sfia-review/**`, evidence PNG, `_dbg*` (non commités) |

### Historique tip `origin/main..HEAD`
```
957737c3 docs(next): strip trailing whitespace in Figma↔Cursor methodo v1.1
f51f87c9 fix(next): align CI create/pilotage tests with E07 Trajectoire and ACK-loss paths
ef172241 fix(next): restore SAS06 Figma desktop padding while keeping 720p CTA reachable
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

## 3. Remédiation — causes et correctifs

### A1 — SAS06 viewport / Figma padding
| | |
|---|---|
| Cause | CTA hors viewport @1280×720 ; `min(124px,8vh)` dérivait padTop desktop (−46px @970h) |
| Fix | `clamp(16px, calc(100vh − 726px − 24px), 124px)` · carte 702×726 · scroll overlay/card |
| SHA | `ef172241` (+ helper `8b256c72` / `fbd232bb`) |
| Preuve | `sas06-responsive-viewports` desktop F2≤2 + short 720p **PASS** |

### A2 — d2-ack popup incorrect
| | |
|---|---|
| Cause | Test attendait SAS06 après ACK 502 ; produit fait `reconcile` + `router.push` sans popup |
| Fix | attente URL `/projects/` · popup count 0 |
| SHA | `f51f87c9` |

### A3 — ml3 PilotagePanel absent
| | |
|---|---|
| Cause | E07 Trajectoire = TrajectoryBoard only ; ML3 diagnostic panel non monté |
| Fix | remount `PilotagePanel` **uniquement** si `NEXT_PUBLIC_STUDIO_E2E=1` (e2e-web-server) — UX RECETTE/UAT inchangée |
| SHA | `f51f87c9` |
| Preuve | suite `ml3-pilotage` 7 tests **PASS** local |

### A4 — whitespace methodo
| | |
|---|---|
| Cause | `git diff --check` sur methodo v1.1 (docs #686) trailing spaces |
| Fix | strip trailing whitespace |
| SHA | `957737c3` |

### Historique CI (ne pas confondre)
| Run | HEAD | Conclusion | Lecture |
|---|---|---|---|
| 44896630792 | `5ebf074b` | failure Playwright | create-path SAS06 |
| 44902434109 | `8b256c72` | **cancelled** Morris | non concluant |
| 44904278689 | `ef172241` | failure Playwright | d2-ack + ml3 + journal (8) — 91 passed |
| 44906821785 | `f51f87c9` | failure whitespace | **Playwright SUCCESS** |
| **44908228223** | **`957737c3`** | **success** | **Required Gate SUCCESS** |

## 4. Inventaire exact PR (HEAD vs `origin/main`)

| Métrique | Valeur |
|---|---|
| Fichiers totaux | **92** |
| Créés (A) | **46** |
| Modifiés (M) | **46** |
| Diffstat |  92 files changed, 10233 insertions(+), 315 deletions(-) |

### Créés
- `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md`
- `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-dossier-architecture-fonctionnelle-technique-candidat.md`
- `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md`
- `projects/sfia-studio-next/validation-qualite/ensemble-07-recette-utilisateur-20261121.md`
- `projects/sfia-studio-next/web/public/figma/sas06/confirmation-cercle.svg`
- `projects/sfia-studio-next/web/public/figma/sas06/focus-halo.svg`
- `projects/sfia-studio-next/web/public/figma/sas06/icone-analyse.svg`
- `projects/sfia-studio-next/web/public/figma/sas06/icone-confirme.svg`
- `projects/sfia-studio-next/web/public/figma/sas06/icone-evaluation.svg`
- `projects/sfia-studio-next/web/public/figma/sas06/icone-halo.svg`
- `projects/sfia-studio-next/web/public/figma/sas06/icone-information.svg`
- `projects/sfia-studio-next/web/public/figma/sas06/repere-attente.svg`
- `projects/sfia-studio-next/web/scripts/e07-capture-sas-modal.mts`
- `projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts`
- `projects/sfia-studio-next/web/scripts/e07-cycle8-measure.mts`
- `projects/sfia-studio-next/web/scripts/e07-measure-acquis-panels.mts`
- `projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts`
- `projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts`
- `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/reconcile/route.ts`
- `projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx`
- `projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx`
- `projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql`
- `projects/sfia-studio-next/web/src/db/migrations/016_initial_qualification_expected.sql`
- `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/cki-editorial.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts`
- `projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts`
- `projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/helpers/create-project-from-prep.ts`
- `projects/sfia-studio-next/web/tests/e2e/sas06-responsive-viewports.spec.ts`
- `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts`
- `projects/sfia-studio-next/web/tests/unit/cki-editorial.test.ts`
- `projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts`
- `projects/sfia-studio-next/web/tests/unit/durable-refresh-guard.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts`
- `projects/sfia-studio-next/web/tests/unit/project-overview-next-envisaged.test.ts`

### Modifiés
- `projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md`
- `projects/sfia-studio-next/conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md`
- `projects/sfia-studio-next/conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md`
- `projects/sfia-studio-next/construction/convergence-ux-ui-globale/registre-central-revues.md`
- `projects/sfia-studio-next/construction/delivery-history.md`
- `projects/sfia-studio-next/ux-ui/methodologie-contrat-figma-cursor.md`
- `projects/sfia-studio-next/web/scripts/db-migrate.sh`
- `projects/sfia-studio-next/web/scripts/e2e-web-server.sh`
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts`
- `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts`
- `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`
- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
- `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`
- `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`
- `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx`
- `projects/sfia-studio-next/web/src/components/figma/tokens.css`
- `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`
- `projects/sfia-studio-next/web/src/components/shell/studio-shell.css`
- `projects/sfia-studio-next/web/src/db/schema.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/intent.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/service.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/types.ts`
- `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts`
- `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts`
- `projects/sfia-studio-next/web/src/lib/http-errors.ts`
- `projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/ensemble04-cp01-cp02-correction.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts`
- `projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts`


## 5. Tests locaux (identités)

| Scénario | Résultat |
|---|---|
| `sas06-responsive-viewports` desktop 1680×970 F2 | **PASS** |
| `sas06-responsive-viewports` short 1280×720 | **PASS** |
| `g4-b1-b4-correctifs` | **PASS** (batch antérieur) |
| `ensemble04-cp01-cp02-correction` | **PASS** (batch antérieur) |
| `d2-ack-loss-reconcile` | **PASS** |
| `journal-v4-parcours` (parcours métier) | **PASS** |
| `ml3-pilotage` (7 tests) | **PASS** |
| `tsc --noEmit` | **PASS** |
| UX 11/11 | **NOT RE-RUN** (UAT gelé `5ad8fa57`) |

## 6. CI finale

| | |
|---|---|
| Run | https://github.com/mcleland147/sfia-workspace/actions/runs/44910166518 |
| HEAD | `6a368653832be64d1da24f4a39b46fb1fb75a2d7` |
| Detect Next | **SUCCESS** |
| Build and validate Next | **SUCCESS** (21m8s) |
| SFIA Studio Next Required Gate | **SUCCESS** |
| SFIA Studio Required Gate | **SUCCESS** |

## 7. Documentation

| Doc | Action |
|---|---|
| As-built E07 | SAS06 clamp responsive |
| Delivery-history | entrées remédiation + verdict CI GREEN |
| Methodo Figma v1.1 | whitespace strip only |
| PV / registre #686 | blobs conservés |

## 8. Réserves gouvernées

- FIX-03 autonomie processus NOT PROVEN
- Nora LIVE globale NOT PROVEN
- Labels angles CKI ≠ Figma courts (historique)
- Gate C OPEN · NO RELEASE · pas STABLE · pas ADOPTED
- Collision cookies DEV/RECETTE (ENV-01) historique
- PilotagePanel diagnostic : **E2E-only** — hors Figma Trajectoire opérateur

## 9. Ensemble 08

Préparation registre **08 — Git, publication et intégrations** · **aucun code E08**.

## 10. Rapport A–G

**A — Correctifs :** SAS06 clamp · d2-ack · PilotagePanel E2E · whitespace methodo.

**B — Tests locaux :** §5.

**C — CI :** run 44908228223 · SUCCESS · Required Gate SUCCESS.

**D — Git :** `6a368653832be64d1da24f4a39b46fb1fb75a2d7` · UAT ancêtre · dirty préservé.

**E — Documentation :** as-built · delivery-history · methodo strip.

**F — Réserves :** §8 · merge conditionné revue ChatGPT.

**G — Handoff :** publish L3 ce cycle.

## 11. Verdict

**ENSEMBLE 07 — PR #687 CI GREEN — SAS06 RESPONSIVE VERIFIED — DOCUMENTATION ALIGNED — READY FOR INDEPENDENT MERGE REVIEW**
