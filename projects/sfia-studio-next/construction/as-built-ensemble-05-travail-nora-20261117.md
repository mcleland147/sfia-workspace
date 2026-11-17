# As-built — Ensemble 05 Travail avec Nora

| Métadonnée | Valeur |
|---|---|
| Date | 2026-11-17 |
| Macro-lot | R5 / ML4D Ensemble 05 |
| Type | Delivery locale DEV · **NO RELEASE** |
| Branche produit | `feat/next-ml4d-project-space-20261116` |
| HEAD de base | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Statut | **E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION** (as-built non normatif) |
| Cycles | Delivery + correctif + consolidation + finalisation technique (même macro-lot) |

## Sources

- UX v0.7 — blob `dc5ef25f…` VALIDATED SPEC
- Tech v0.2 — blob `5f389688…` M1–M5 VALIDATED
- Figma page 05 — référence comportementale ; **revue visuelle réservée à Morris en RECETTE**
- Manifeste prep RECETTE — `construction/ensemble-05-recette-prep-manifest.md`

## Capacités

| Capacité | Implémentation |
|---|---|
| M1–M5 | Projection D3 ; final-only ; draft sessionStorage ; viewer local ; no migration |
| Choix | `continueChoices` ≠ clarifications |
| Final A | Toute ouverture Travail revalide D4 (list + revisionId) — pas de latest React en autorité |
| Final B | ACK perdu → pending obligatoire → reconcile click → 1 tour Pilote |
| C3 | Purge same-tab login ; `session.pilotId` |
| C5 | Git path existant ; REAL NOT EXECUTED |

## Preuves techniques (DEV)

- Vitest E05 9 + studio-rail 13 PASS
- Playwright E05 5 PASS (viewer, C1, C2 reconcile obligatoire, C3, isolation)
- Playwright E04 3 PASS
- `next build` PASS
- `tsc` workspace : 32 erreurs hors E05 (tests historiques) — **NO_E05_TSC_HITS**

## RECETTE

- Existante inventoriée `:3200` / BUILD `3LzvYPTQc-Km7St6nF97r` / SHA `984d77a3`
- **Aucun déploiement** dans ce cycle
- Mise à disposition future documentée dans le manifeste

## Réserves acceptables (décision Morris)

1. Streaming M2 hors V1
2. Git D9 REAL non exécuté
3. OAuth LIVE ≠ adaptateur DEV
4. Revue visuelle Morris en RECETTE (pas de gate F2 Cursor)
