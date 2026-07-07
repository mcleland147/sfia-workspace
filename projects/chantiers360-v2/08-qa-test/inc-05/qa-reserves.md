# QA Reserves — INC-05

**Branche :** `main` @ `6fe91df` (post-merge PR #125)  
**Cycle PR readiness :** 2026-07-07 — GO QA WITH RESERVES Morris  
**Cycle QA-G4 :** 2026-07-07 — **QA-G4 OK WITH RESERVES** — 16 E2E passed

## Nouvelles réserves INC-05

| # | Réserve | Sévérité | Statut |
|---|---------|----------|--------|
| R-UX-01 | Écran Prochaines actions sans frame Figma dédiée | UX / méthode | **Ouverte** — acceptée |
| — | Aucune nouvelle réserve bloquante identifiée | — | — |

### R-UX-01 — Écran Prochaines actions sans frame Figma dédiée

**Constat :** l'écran `/prochaines-actions` a été livré par extrapolation depuis les patterns UI existants, sans maquette Figma dédiée.

**Décision :** accepté pour INC-05. Aucun rattrapage design demandé dans ce cycle.

**Impact :** pas de blocage fonctionnel ni QA. Sujet à capitaliser dans les règles SFIA v2.0 de couverture design.

**Garde-fous :** pas de modification code UI, pas de frame Figma, pas de cycle polish, pas de blocage PR readiness INC-05 pour ce sujet.

## Réserves héritées

| # | Réserve | Statut INC-05 |
|---|---------|---------------|
| R-QA-03 | HTML5 `required` formulaire chantier | **Ouverte** — acceptée — hors périmètre |
| R-QA-04 | Panneaux dashboard droite mockés | **Ouverte** — acceptée — hors périmètre |
| R-QA-05 | Port 3000 occupé | **Ouverte** — environnementale |

INC-05 n'adresse pas R-QA-03 / R-QA-04 / R-QA-05 — aucun impact direct documenté.

## Verdict réserves

**READY WITH RESERVES** — R-UX-01 et réserves héritées acceptées, non bloquantes pour PR readiness.
