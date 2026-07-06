# QA Reserves — INC-01

| # | Réserve | Gravité | Impact | Statut | Décision Morris |
|---|---------|---------|--------|--------|-----------------|
| R-QA-01 | E2E Playwright non exécutés (env. Cursor) | ~~Majeure~~ | — | **Levée** — 4 passed + validation Morris | ✅ Confirmée |
| R-QA-02 | Backlog « En pause » vs code « En retard » (D-INC01-4) | **Mineure** | AC backlog non aligné mot pour mot | **Ouverte** | Acceptée — GO QA WITH RESERVES |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | **Mineure** | Message serveur non couvert E2E | **Ouverte** | Acceptée |
| R-QA-04 | Panneaux dashboard droite mockés | **Mineure** | Hors périmètre US INC-01 | **Ouverte** | Acceptée |

## Synthèse

- **Bloquante :** aucune
- **Majeure :** R-QA-01 **levée et confirmée Morris**
- **Mineures ouvertes :** R-QA-02 à R-QA-04 — **acceptées** pour INC-01 (GO QA WITH RESERVES)

## Post-merge QA-G4 (PR #108 — `main` @ `1b9e41f`)

| # | Réserve | Statut post-merge |
|---|---------|-------------------|
| R-QA-01 | E2E exécutés | **Levée** — 4 passed post-merge confirmés |
| R-QA-02 à R-QA-04 | Mineures | **Ouvertes** — inchangées, acceptées |
| R-QA-05 | Port 3000 occupé bloque `test:e2e:full` | **Environnementale** — workaround port 3001 documenté dans `qa-g4-post-merge-report.md` |

## Recommandation QA

**GO QA WITH RESERVES** — acté Morris (QA-G3). PR #108 mergée. **QA-G4 OK WITH RESERVES** — en attente clôture Morris.
