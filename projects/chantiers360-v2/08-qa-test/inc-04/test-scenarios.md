# Test Scenarios — INC-04

## US-11 — Rédiger un compte rendu rapide

| # | Scénario | Type | Fichier |
|---|----------|------|---------|
| S-11-1 | Créer un CR texte et vérifier affichage avec date auto | E2E | `inc-04.spec.ts` |
| S-11-2 | Créer 2 CR, vérifier ordre décroissant et persistance après reload | E2E | `inc-04.spec.ts` |

## Régression

| Incrément | Tests |
|-----------|-------|
| INC-01 | 4 passed — US-03 adapté (onglet Comptes rendus actif) |
| INC-02 | 4 passed |
| INC-03 | 2 passed |

## Hors scope vérifié

- Pas de PDF, signature, pièces jointes
- Pas de prochaines actions (INC-05)
