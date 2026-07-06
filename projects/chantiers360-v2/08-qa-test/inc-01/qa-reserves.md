# QA Reserves — INC-01

| # | Réserve | Gravité | Impact | Recommandation | Décision Morris |
|---|---------|---------|--------|----------------|-----------------|
| R-QA-01 | E2E Playwright non exécutés dans l'environnement Cursor (PostgreSQL absent) | **Majeure** | Preuves QA-G3 incomplètes sans run local | Morris exécute `npm run test:e2e` avec DB test | ⏳ Attendue |
| R-QA-02 | Écart statuts US-04 : backlog « En pause » vs code « En retard » (D-INC01-4) | **Mineure** | AC backlog non aligné mot pour mot | Accepter pour INC-01 ou micro-alignement backlog | ⏳ Optionnel |
| R-QA-03 | Validation serveur formulaire vide non testée (HTML5 `required` bloque submit) | **Mineure** | Message serveur non couvert E2E | Acceptable INC-01 — validation serveur documentée | ⏳ |
| R-QA-04 | Panneaux dashboard droite (mock spike) non assertés | **Mineure** | Hors périmètre US INC-01 | Aucune action | ⏳ |

## Synthèse

- **Bloquante :** aucune identifiée sur le code livré
- **Majeure ouverte :** R-QA-01 — exécution E2E locale requise pour QA-G3 GO sans réserves

## Recommandation QA

**GO QA WITH RESERVES** — en attente confirmation Morris après exécution locale `test:e2e` ou acceptation explicite de R-QA-01.
