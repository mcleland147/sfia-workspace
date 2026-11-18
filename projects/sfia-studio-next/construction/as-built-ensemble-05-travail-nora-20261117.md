# As-built — Ensemble 05 Travail avec Nora

| Métadonnée | Valeur |
|---|---|
| Date | 2026-11-17 |
| Macro-lot | R5 / ML4D Ensemble 05 |
| Type | Delivery locale · gel candidat · **NO RELEASE** · **pas de déploiement RECETTE** |
| Branche | `feat/next-ml4d-project-space-20261116` |
| Parent tip | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| Gel contenu (code+preuves) | `1a820ad489f001bfeef4a9958d1de92e6ab1b5f7` / tree `58baf7b016ddf6a76328120a8a4329185a6880bd` |
| Tip local docs | voir `git rev-parse HEAD` au handoff (descendant de `1a820ad4`) |
| BUILD_ID local | `jYz7jUBt1ewRBNp6HbCgs` |
| Statut | **E05 RECETTE CANDIDATE FROZEN — PREPARATION VERIFIED — MORRIS DEPLOY GO REQUIRED** |

## Capacités conservées

- Grammaire visuelle native ; composition ordonnée ; P1-A fail-closed ; P1-B provenance canonique ; ancres ; T05 ; S1–S8 fixtures.

## Finitions UX (ce cycle)

| ID | Défaut | Correctif |
|---|---|---|
| V01 | `**si**` littéral dans recommandation | `SafeMarkdown` sur recommendation / détails structurés |
| V02 | `Dépend de : t1` | Résolution id → titre d’étape |
| V03 | Double « Consulter · Note… » | Déduplication : provenance consultable first-claim ; refs ancre saute la même identité |
| V04 | Diagramme S2 | Pas d’anomalie layout reproductible hors capture partielle — non reconstruit |

## Preuves DEV

- Vitest **32 PASS** · Playwright E05 **7 PASS** · `next build` PASS · BUILD_ID `jYz7jUBt1ewRBNp6HbCgs`
- LIVE form-choice : **NOT EXECUTED**
- RECETTE `:3200` / `slh3bItXudDCIEaR2WYho` / `cb638613` — **inchangée**
- Rollback worktree : `…ensemble04-recette-build-984d77a3`

## Manifeste

`construction/ensemble-05-recette-candidate-manifest.md`

## Fake / Real

| Frontière | Qualification |
|---|---|
| Fixtures S1–S8 / V* | DETERMINISTIC |
| UI | BROWSER |
| Build | REAL local |
| Nora LIVE | NOT EXECUTED (préparation seulement) |
| RECETTE mutation | NONE |

## Protocole réception LIVE (R01–R08)

Prêt pour session Morris après GO déploiement distinct — résultats non préremplis.
