# Qualification — UX-05 / UX-01

## Déterministe (Vitest)

- `tests/unit/ux-correctives-ensemble05.test.ts` — 10 tests PASS (dont 2 formes UAT-07 RECETTE exactes)
- `tests/unit/directed-layout-candidate.test.ts` — 4 tests PASS
- Journal : `00-vitest-summary.txt`

Critères couverts sur formes réelles :

- unicité des ids de nœuds dans le layout
- convergence unique
- chemin revue → lancement / sync → revue → lancement
- conservation des edges

## Navigateur (Playwright DEV isolé :3101)

- Spec : `tests/e2e/ensemble05-uat07-ux05.spec.ts`
- Fixture : `E05_UAT07_REAL` = shape exacte `msg_84ae0ce0`
- Résultat : **1 passed** (`00-playwright-uat07.txt`)
- Captures :
  - `screenshots/uat07-parallel-full-element-1440.png` — diagramme complet
  - `screenshots/uat07-parallel-viewport-1440.png`
  - `screenshots/uat07-scroll-metrics.json` — positions + métriques
  - `screenshots/ux01-composition-icon-align-1440.png`

Positions observées (pas de duplication) :

```
infrastructure/metier/accompagnement  y=24  (x=24/274/524)
synchronisation                       y=132
revue                                 y=248
lancement                             y=327
```

## Non-régression (périmètre fermé)

UX-02…04, UX-06, UX-07 : **non rouverts** — aucun changement intentionnel hors classification exclusive, CSS UX-01, `data-node-id`, fixture/tests UAT-07.

## LIVE

Aucun appel Nora LIVE — données persistées + fixture déterministe uniquement.
