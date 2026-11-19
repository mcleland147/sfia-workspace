# As-built — Ensemble 06 / Journal V4 (candidat local)

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 (cycle 4 — complétude §5 + LIVE borné arrêté) |
| Branche | `sfia/next-journal-delivery-20261119` |
| Base docs cycle 1 | `6879d34e` |
| Matrice docs distante (lue, non fusionnée) | `c3f1254c` (v0.3 §14) |
| Base `main` | `d3d199ad` |
| Versioning | `NO RELEASE` / `0.0.0-dev` |
| Lane | DEV / e2e (`127.0.0.1:5433`, `:3101`) — LIVE tenté `:3103` — RECETTE/STABLE non mutées |

## Cycles 1–3 (conservés)

- Migration additive `014` + Journal D4/UI/API
- E06-01..06 : scope projet, UNVERIFIED Git, message chrono, seed BROWSER, resolve source réelle

## Cycle 4 — correctifs matrice §14 + LIVE

### §5 déterministe

| ID | Correction |
|---|---|
| J-C08 | Seed : titre feuille sans token « traçabilité » ; badge match `acquis` en BROWSER |
| J-C11 | Recherche décisions : explication-only (`multicritèreorion`) ; UI n’utilise plus `kind` comme hit |
| J-C13 | Retour Journal via rail (pas `page.goto` comme preuve) ; search/filtre/layout conservés |
| J-C14 | Clic source document → Travail viewer exact (`viewerOpenRef`) ; contenu v2 asserté |
| J-C07 | PG : deux préparations liées au même projet, sujets homonymes non fusionnés |
| J-C05 | Resolve refusé si révision non AVAILABLE |
| J-C16 | Gate route journal-fixture + refus DEV sans STUDIO_E2E |

### LIVE CampusFlow (GO Morris, arrêté sur demande)

- Projet DEV fictif créé ; provider `openai-agents-sdk-live` constaté sur **E01**
- Durée E01 ≈ 647 s ; réponse Nora réelle archivée
- **E02–E20 / T10 / T20 : NON EXÉCUTÉS** (arrêt Morris/opérateur)
- Journal T0 : vide (attendu avant capitalisation)
- Preuves locales : `.tmp-sfia-review/journal-live-campusflow-20261119/` (non commit)

### Artefacts test LIVE (conservés pour reprise manuelle)

- `web/tests/e2e/journal-nora-live-campusflow.spec.ts`
- `web/playwright.journal-live.config.ts`
- Commande : `STUDIO_ALLOW_LIVE_BOUNDED=1` + `OPENAI_API_KEY` + `npx playwright test --config=playwright.journal-live.config.ts`

## Preuves

| Commande | Résultat |
|---|---|
| `tsc --noEmit` | PASS |
| `npm run lint` | PASS (warnings préexistants) |
| `next build` | PASS |
| unit journal-cognition + fixture-gate | PASS |
| PG journal-d4-revisions | PASS (15) |
| PG ml3-pilotage | PASS (49) |
| Playwright journal-v4-parcours | PASS (2) |
| LIVE 20 tours | **1/20 PARTIAL** — arrêté après E01 |
| ML2/ML4C/E05 full e2e | NOT RUN |
| VISUAL REVIEW | PENDING MORRIS — RECETTE |

## Autorité

- D6 non muté depuis Journal
- Aucun push projet / PR / merge
- Revue visuelle Morris en RECETTE uniquement
