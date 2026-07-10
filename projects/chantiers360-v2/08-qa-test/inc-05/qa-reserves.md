# QA Reserves — INC-05

**Branche :** `main` @ `6e5ec82` (post-merge PR #125 / #126)  
**Cycle PR readiness :** 2026-07-07 — GO QA WITH RESERVES Morris  
**Cycle QA-G4 :** 2026-07-07 — **QA-G4 OK WITH RESERVES** — 16 E2E passed  
**Clôture INC-05 :** 2026-07-07 — **INC-05 CLOSED WITH RESERVES**

## Nouvelles réserves INC-05

| # | Réserve | Sévérité | Statut |
|---|---------|----------|--------|
| R-UX-01 | Écran Prochaines actions — frame Figma P2 + alignement UI | UX / méthode | **CLOSED** — 2026-07-10 |
| — | Aucune nouvelle réserve bloquante identifiée | — | — |

### R-UX-01 — Écran Prochaines actions

**Constat initial :** l'écran `/prochaines-actions` avait été livré par extrapolation depuis les patterns UI existants, sans maquette Figma dédiée.

**Traitement post-MVP :** frames Figma P2 (nominal + vide), delivery UI d'alignement, validation Morris acceptable (2026-07-10).

**Statut :** **CLOSED** — clôture documentaire 2026-07-10. Enseignements Figma-to-code à capitaliser REX post-MVP.

## Réserves héritées

| # | Réserve | Statut INC-05 |
|---|---------|---------------|
| R-QA-03 | HTML5 `required` formulaire chantier | **Ouverte** — acceptée — hors périmètre |
| R-QA-04 | Panneaux dashboard droite mockés | **CLOSED** — PR #151 @ `2aa68f4` (2026-07-09) — hors périmètre INC-05 |
| R-QA-05 | Port 3000 occupé | **Ouverte** — environnementale |

INC-05 n'adresse pas R-QA-03 / R-QA-05 — aucun impact direct documenté. **R-QA-04 clôturée** post-MVP — cycle Option A2, PR #151 (2026-07-09).

## Verdict réserves

**INC-05 CLOSED WITH RESERVES** — **R-UX-01 CLOSED** post-MVP (2026-07-10). Réserves héritées R-QA-03 / R-QA-05 ouvertes. **R-QA-04** clôturée post-MVP (PR #151, 2026-07-09).
