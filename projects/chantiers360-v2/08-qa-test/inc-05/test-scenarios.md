# Test Scenarios — INC-05 Chantiers360 v2

## US-12 — Consulter les prochaines actions

| ID | Scénario | Type |
|----|----------|------|
| TS-12-01 | Tâche ouverte visible dans la vue dérivée | E2E |
| TS-12-02 | Tâche terminée disparaît de la vue | E2E |
| TS-12-03 | Chantier en retard visible | E2E |
| TS-12-04 | Aucun formulaire de saisie manuelle | Revue |

## US-13 — Naviguer depuis prochaines actions

| ID | Scénario | Type |
|----|----------|------|
| TS-13-01 | Clic item réserve → fiche `?tab=reserves` | E2E |
| TS-13-02 | Section source affichée après navigation | E2E |

## Régression

| Suite | Couverture |
|-------|------------|
| `inc-01.spec.ts` | Fondation chantiers |
| `inc-02.spec.ts` | Tâches / réserves |
| `inc-03.spec.ts` | Jalons |
| `inc-04.spec.ts` | Comptes rendus |
