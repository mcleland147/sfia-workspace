# QA Implementation Report — INC-05

**Branche :** `delivery/chantiers360-v2-inc-05`  
**Date :** 2026-07-06

## Tests ajoutés

Fichier `app/e2e/inc-05.spec.ts` :

| Test | US | Description |
|------|-----|-------------|
| consulter les prochaines actions dérivées | US-12 | Tâche ouverte listée |
| item disparaît quand tâche terminée | US-12 | Disparition après `Terminée` |
| naviguer vers section source | US-13 | Lien → `?tab=reserves` |
| inclure chantier en retard | US-12 | Item retard dérivé |

## Helpers

Réutilisation `e2e/helpers/db.ts` — `resetChantiers`, `hasDatabaseUrl`.

## Non couvert (accepté MVP)

- Agrégation jalon intervention/milestone en E2E dédié (couvert indirectement via jalons INC-03)
- Tests unitaires lib agrégation (E2E suffisant cycle SFIA v2)
