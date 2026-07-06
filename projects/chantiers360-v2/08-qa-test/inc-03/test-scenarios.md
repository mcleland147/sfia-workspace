# Test Scenarios — INC-03

## US-10 — Renseigner des jalons simples

| # | Scénario | Type | Fichier |
|---|----------|------|---------|
| S-10-1 | Renseigner tous les champs optionnels et vérifier affichage résumé | E2E | `inc-03.spec.ts` |
| S-10-2 | Modifier un jalon existant | E2E | `inc-03.spec.ts` |

## Régression

| Incrément | Tests |
|-----------|-------|
| INC-01 | 4 passed — US-03 adapté (onglet Jalons actif) |
| INC-02 | 4 passed |

## Hors scope vérifié

- Pas de Gantt ni calendrier avancé
- Onglet Comptes rendus désactivé (INC-04)
