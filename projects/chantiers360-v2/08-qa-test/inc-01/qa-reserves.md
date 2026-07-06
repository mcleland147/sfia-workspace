# QA Reserves — INC-01

| # | Réserve | Gravité | Impact | Statut | Décision Morris |
|---|---------|---------|--------|--------|-----------------|
| R-QA-01 | E2E Playwright non exécutés (PostgreSQL absent) | ~~Majeure~~ | — | **Levée** — 4 passed via Docker `db:test:up` | ⏳ Confirmer |
| R-QA-02 | Écart statuts US-04 : backlog « En pause » vs code « En retard » (D-INC01-4) | **Mineure** | AC backlog non aligné mot pour mot | Ouverte | ⏳ Optionnel |
| R-QA-03 | Validation serveur formulaire vide non testée (HTML5 `required`) | **Mineure** | Message serveur non couvert E2E | Ouverte | ⏳ |
| R-QA-04 | Panneaux dashboard droite (mock spike) non assertés | **Mineure** | Hors périmètre US INC-01 | Ouverte | ⏳ |

## Synthèse

- **Bloquante :** aucune
- **Majeure :** R-QA-01 **levée** — infra Docker + exécution réelle documentée
- **Mineures ouvertes :** R-QA-02, R-QA-03, R-QA-04 — non bloquantes QA-G3

## Recommandation QA

**GO QA** — ou **GO QA WITH RESERVES** si Morris souhaite conserver les mineures documentées dans la PR INC-01.
