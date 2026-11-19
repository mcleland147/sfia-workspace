# As-built — Ensemble 06 / Journal V4 (candidat local)

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 (cycle 3 — E06-01..06) |
| Branche | `sfia/next-journal-delivery-20261119` |
| Base docs cycle 1 | `6879d34e` |
| Matrice docs distante (lue, non fusionnée) | `2ae685a5` (v0.2) |
| Base `main` | `d3d199ad` |
| Versioning | `NO RELEASE` / `0.0.0-dev` |
| Lane | DEV / e2e (`127.0.0.1:5433`, `:3101`) — RECETTE/STABLE non mutées |

## Cycles 1–2 (conservés)

- Migration additive `014` + `db-migrate.sh` 001→014
- Journal D4 revisions, UI V4, API, recherche, explications D6
- Helpers cognition J-C04/06 + deep-link message/document

## Cycle 3 — corrections E06

### E06-05 — portée sécurité
- `markOpenPointReactivated` utilise `loadOwnedOpenPoint(pilot, project, id)`
- Refus interprojets même Pilote ; zéro écriture si refus ; idempotence conservée

### E06-03 — currentness Git
- `main`+SHA déclarés → **UNVERIFIED** (jamais CURRENT sans vérification distante)
- Ref non-main → **CANDIDATE**
- Overclaim gate traite UNVERIFIED

### E06-04 — message exact
- Deep-link : reload canonique ou insertion par `createdAt` (pas d’append aveugle)
- Brouillon préservé ; zéro auto-send

### E06-01 — BROWSER non vide
- Fixture DEV `/api/dev/e2e/journal-fixture` (gate STUDIO_E2E)
- Playwright assertions obligatoires sur sujets/40-60/recherche/décisions/message/document

### E06-02 — mémoire D3/D4 déterministe
- Tests PG : révisions de synthèse + réactivation pertinente / négative
- LIVE Nora : toujours NOT RUN / hors GO

### E06-06 — D6 / documents / migrate
- Resolve factuel exige source document/message **réellement accessible**
- Restriction D6 ACTIVE intacte après resolve
- `db-migrate.sh` inclut `014`

## Preuves (cycle 3)

| Commande | Résultat |
|---|---|
| `tsc --noEmit` | PASS |
| unit journal-cognition | PASS |
| PG journal-d4-revisions | PASS (12+) |
| Playwright journal-v4-parcours (seeded) | PASS |
| LIVE Nora / REAL Git | NOT RUN |
| VISUAL REVIEW | PENDING MORRIS — RECETTE |

## Autorité

- D6 non muté depuis Journal
- Aucun push projet / PR / merge
- Revue visuelle Morris en RECETTE uniquement
