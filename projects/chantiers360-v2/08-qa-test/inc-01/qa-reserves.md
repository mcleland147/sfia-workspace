# QA Reserves — INC-01

| # | Réserve | Gravité | Impact | Statut | Décision Morris |
|---|---------|---------|--------|--------|-----------------|
| R-QA-01 | E2E Playwright non exécutés (env. Cursor) | ~~Majeure~~ | — | **Levée** — 4 passed + validation Morris | ✅ Confirmée |
| R-QA-02 | Backlog « En pause » vs code « En retard » (D-INC01-4) | ~~Mineure~~ | — | **Levée** — backlog US-04 / AC alignés sur « En retard » | ✅ Micro-cycle Morris |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | **Mineure** | Message serveur non couvert E2E | **Ouverte** | Acceptée |
| R-QA-04 | Panneaux dashboard droite mockés | ~~Mineure~~ | — | **CLOSED** — PR #151 @ `2aa68f4` | ✅ Morris 2026-07-09 |

## Synthèse

- **Bloquante :** aucune
- **Majeure :** R-QA-01 **levée et confirmée Morris**
- **Mineures ouvertes :** R-QA-03 — **acceptée** pour INC-01 (GO QA WITH RESERVES)
- **Levée post-clôture :** R-QA-02 — alignement backlog documentaire (aucun impact code INC-01)
- **Clôturée post-MVP :** R-QA-04 — panneaux dashboard droits données réelles — PR #151 @ `2aa68f4` (2026-07-09, Morris)

## Post-merge QA-G4 (PR #108 — `main` @ `1b9e41f`)

| # | Réserve | Statut post-merge |
|---|---------|-------------------|
| R-QA-01 | E2E exécutés | **Levée** — 4 passed post-merge confirmés |
| R-QA-02 | Écart backlog / code | **Levée** — micro-cycle R-QA-02 |
| R-QA-03 | Mineure | **Ouverte** — acceptée |
| R-QA-04 | Panneaux dashboard mockés | **CLOSED** — PR #151 @ `2aa68f4` (2026-07-09) |
| R-QA-05 | Port 3000 occupé bloque `test:e2e:full` | **Environnementale** — workaround port 3001 documenté dans `2026-07-07-qa-g4-post-merge-report.md` |

## Clôture R-QA-04 (post-merge PR #151 — 2026-07-09)

| Élément | Valeur |
|---------|--------|
| **Réserve** | R-QA-04 — panneaux dashboard droite mockés |
| **Statut** | **CLOSED** |
| **Date clôture** | 2026-07-09 |
| **Motif** | PR #151 mergée — panneaux droits alimentés par données réelles ; E2E ciblé PASS |
| **PR** | #151 |
| **Merge commit** | `2aa68f4` |
| **Périmètre** | Dashboard panneaux droits — « À faire aujourd'hui » + « Répartition » |
| **Décision** | Clôture documentaire Morris |

**Rapport cycle :** `08-qa-test/2026-07-09-r-qa-04-dashboard-real-data-report.md`

## Recommandation QA

**GO QA WITH RESERVES** — acté Morris (QA-G3). PR #108 mergée. **QA-G4 OK WITH RESERVES** — clôture Morris accordée. **R-QA-02 levée** en micro-cycle post-capitalisation — R-QA-03 à R-QA-05 inchangées. **R-QA-04 clôturée** post-MVP — PR #151 (2026-07-09).
