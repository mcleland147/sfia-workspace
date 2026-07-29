# 08 — Implementation backlog and slicing

## Stratégie de livraison (recommandation, non décision)

**Plusieurs PR** (V1…V5), chacune mergeable ; commits atomiques 1–3.
Branche framing docs séparée. Pas de big-bang unique.

## Lot V1 — Composition locale Project

**Statut au 2026-07-29** : `EXECUTED LOCALLY — TESTS GREEN — PROJECT BRANCH NOT PUSHED`. Voir `11-v1-local-project-core-composition.md`. Ce statut d'exécution complète le backlog historique sans autoriser V2.

| Item | Contenu |
|------|---------|
| Objectif | Facade + CreateProject/LPS + doctrine resolve + tests |
| Fichiers probables | `app/lib/studio-vertical-slice/**` (nouveau), tests |
| Dépendances | T-A0/T-A1 memory factories |
| Tests | unit facade, idempotency, doctrine fail |
| Captures | non (pas UI obligatoire) |
| Stop | IAM, HTTP, package.json sans GO |
| Dette | facade initiale |
| Gate | `GO IMPLEMENT … LOT V1 …` |
| Verdict attendu | V1 COMPLETE — NO UI REQUIRED OR MINIMAL HOOK |

## Lot V2 — Parcours Create Project

**Statut** : `NOT AUTHORIZED`.

| Item | Contenu |
|------|---------|
| Objectif | Écran create + validation + navigation overview |
| UI | StudioShell + form |
| Tests | component + parcours |
| Captures | desktop create + error |
| Gate | distinct après V1 |

## Lot V3 — Cycle Recommendation

T-A2 qualify/create + projection + bandeau ≠ décision.

## Lot V4 — Morris Decision

T-A3 record + LOCAL DEMO mode + Critical blocked + history.

## Lot V5 — Readiness Dashboard

T-A6/T-A7 projections + anti-claims + blockers.

## Lot V6 — Consolidation visuelle

Responsive, a11y, captures, Figma page compare, REX.

## D-VS-04 recommandation

Commencer par **V1 only** (composition). Ne pas livrer V1–V5 d’un coup.
