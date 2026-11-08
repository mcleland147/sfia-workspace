# Review Pack FULL — G4 RECETTE technique + PR readiness — 2026-11-08

**Verdict technique :** `RECETTE TECHNIQUE AUTOMATISÉE — PASS`
**Visuel :** `RECETTE UTILISATEUR / VISUELLE — NON EXÉCUTÉE SUR CE CANDIDAT, MORRIS ACCEPTE LA POURSUITE AVEC RÉSERVES` · `F2/G5 NOT PROVEN`
**PR readiness :** `READY FOR MORRIS INTEGRATION DECISION WITH RESERVES`
**NO PROJECT PUSH / NO PR / NO MERGE / NO STABLE / NO RELEASE**

## 1. Git Truth (construction WT)

| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-g4-construction` |
| Branch tip (docs) | `3206e15f2d07eecf1174c6cec3c0bf87dcdc7274` |
| RECETTE frozen SHA | `29535d07e9c14077b422020e25fbf54a98affe25` |
| RECETTE tree | `3f8038ceab95344acef9e3676dd294663a00f2cf` |
| origin/main | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/tmp/

```

## 2. Actions RECETTE exécutées

1. Detached worktree `.../sfia-workspace-next-g4-recette-build-29535d07` @ `29535d07`
2. DB isolée `sfia_next_recette_g4` on `sfia-next-recette-pg:5434` (migrations 001→007 with explicit container/db)
3. `npm ci` + `npm run build` → build id `U2HrgAwriuzf6f1YI0rRK`
4. Freed `:3200` by unloading launchd `com.sfia.studio.next.recette.ml3` (ML3 worktree+DB preserved)
5. `next start -H 127.0.0.1 -p 3200` PID 74165 — no hot reload
6. Smoke FAKE login + portfolio + prep + message + create project + surfaces + 401/404 isolation
7. DEV `:3100` left up

## 3. Manifest + PR readiness (full text)

### Manifest

```md
# ENV-01 — Manifeste RECETTE G4 (non secret)

```yaml
lane: RECETTE
repository: mcleland147/sfia-workspace
branch: feat/next-convergence-ux-g4-construction
base_main_sha: f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e
candidate_sha: 29535d07e9c14077b422020e25fbf54a98affe25
candidate_tree: 3f8038ceab95344acef9e3676dd294663a00f2cf
build_identifier: U2HrgAwriuzf6f1YI0rRK
product_version: NOT AVAILABLE
candidate_version: NOT AVAILABLE
release_tag: N/A
served_address: 'http://127.0.0.1:3200'
worktree: /Users/morris/Projects/sfia-workspace-next-g4-recette-build-29535d07
runtime: next start (production, no hot reload)
listen_pid: 74165
schema_revision: migrations 001→007 applied to sfia_next_recette_g4
test_data_revision: ephemeral RECETTE-only (created during smoke)
db:
  container: sfia-next-recette-pg
  host: 127.0.0.1:5434
  database: sfia_next_recette_g4
  note: distinct from DEV sfia_next_dev@5433 and ML3 sfia_next_recette_ml3
capabilities_observed:
  OpenAI: NOT LIVE — SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY; turn returned deterministic-fixture FAILED (fail-closed RECETTE)
  GitHub_OAuth: NOT CONFIGURED on this lane (no client secrets in RECETTE env)
  Cursor_GitHub_App: NOT USED
  Dev_test_login: FAKE ENABLED (STUDIO_DEV_TEST_LOGIN=1) — not OAuth proof
quality_evidence:
  login_GET: 200
  portfolio_unauth: 401
  portfolio_auth: 200
  prep_create_message_patch_create_project: 200/200/200/201
  project_surfaces_travail_document_journal_pilotage: 200
  api_project_unauth: 401
  foreign_prep_pilot_B: 404
  DEV_3100_still_up: 200
known_gaps:
  - F2/G5 visual NOT PROVEN; Morris accepts proceed WITH RESERVES
  - Nora LIVE not configured on RECETTE; fixture path FAILED (fail-closed) — messages persisted
  - USER/VISUAL RECETTE NOT RUN on this candidate
  - g2-source/scripts/tmp untracked (exclude from PR)
  - ML3 launchd com.sfia.studio.next.recette.ml3 unloaded to free :3200 (ML3 DB/worktree preserved)
review_decision: TECHNICAL RECETTE AUTOMATED PASS — USER/VISUAL NOT RUN, ACCEPTED TO PROCEED WITH RESERVES
```

## Relance / arrêt

```bash
# Arrêt
kill $(lsof -nP -iTCP:3200 -sTCP:LISTEN -t)

# Relance (SHA figé worktree)
cd /Users/morris/Projects/sfia-workspace-next-g4-recette-build-29535d07/projects/sfia-studio-next/web
set -a; source ./.env.local; set +a
npx next start -H 127.0.0.1 -p 3200

# Restaurer ML3 RECETTE (si besoin) — après arrêt G4 :
# launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml3.plist
```

## Isolation notes

- Cookie lane-scoped: `sfia_studio_session__RECETTE` vs DEV
- Réserve A ENV-01: same host `127.0.0.1` — use separate browser profiles if comparing DEV/RECETTE
- DEV :3100 left running (PID previously 59969) — not used as RECETTE

```

### PR readiness

```md
# PR readiness — G4 Convergence UX — `29535d07` (2026-11-08)

**Recommandation :** `READY FOR MORRIS INTEGRATION DECISION WITH RESERVES`
**Ce pack n’ouvre pas de PR et ne merge pas.**

## Base / tip

| | |
|---|---|
| `origin/main` | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| Candidate | `29535d07e9c14077b422020e25fbf54a98affe25` |
| Tree | `3f8038ceab95344acef9e3676dd294663a00f2cf` |
| Commits since main | 4 (`dbaccfda`, `d45f0962`, `c2af05cb`, `29535d07`) |
| Diffstat | ~152 files, +82642 / −556 (dont pack G2) |

## PR summary candidate

**Title:** `feat(next): G4 Pilote–Nora convergence UX (shell, A1/A2, chat-first sas)`

**Body (draft):**
- F1 shell 4 rail variants + A1 portfolio keyset/resume + A2 document deep-link/revise
- B1–B4 correctifs navigation/ownership/D4
- Chat-first sas (proposal inspectable, explicit D2 create) + Nora/Documents/Journal/Pilotage recomposition
- G2 source pack VERIFY PASS embedded under construction (evidence)

## Tests exécutés (TESTED)

| Check | Result | Lane |
|---|---|---|
| `tsc --noEmit` | PASS | construction/DEV |
| unit 123 | PASS | construction |
| integration PG 144 | PASS | construction/DEV DB patterns |
| `next build` | PASS | RECETTE worktree @ 29535d07 |
| Playwright `g4-chat-first-sas` + `g4-b1-b4` | PASS | E2E isolated (:3101) |
| RECETTE HTTP smoke | PASS | :3200 build `U2HrgAwriuzf6f1YI0rRK` |

## NOT RUN / KNOWN GAP

| Item | Status |
|---|---|
| F2 / UXC-13 visual | **NOT PROVEN** |
| G5 visual Morris | **NOT RUN** — proceed WITH RESERVES |
| Nora LIVE on RECETTE | **NOT CONFIGURED** — fixture FAILED fail-closed |
| GitHub OAuth RECETTE | **NOT CONFIGURED** — FAKE login only |
| CI GitHub Actions full | **NOT RE-RUN** in this cycle (local evidence only) |
| User visual on fed data | **NOT CLAIMED** |

## Réserves UX (non bloquantes techniques, ouvertes produit)

1. Écarts Figma constatés Morris (Nora / Documents / Journal) — acceptation de poursuite, pas conformité.
2. États vides ≠ preuve d’écrans alimentés.
3. Portefeuille macro OK avec réserves icônes/finition.
4. Historique documents construit en code ; densité visuelle à revoir ultérieurement.

## Bundle / hygiene avant PR

| Path | Decision |
|---|---|
| `g2-source/` PNG+manifests+verify | **KEEP** (preuve G2) |
| `g2-source/scripts/*.py` helpers | KEEP if needed for verify; review noise |
| `g2-source/scripts/tmp/` | **EXCLUDE** (untracked staging — do not add) |
| `.tmp-sfia-review/` | never in PR |

## Risks / rollback

- Cookie host collision DEV/RECETTE (ENV-01 réserve A) — separate browser profiles
- Large G2 binary/json footprint in PR
- Rollback: revert merge commit; RECETTE/DEV lanes independent

## Gates still required (Morris)

1. GO to **push** `feat/next-convergence-ux-g4-construction`
2. GO to **open PR** against `main`
3. CI green on PR
4. GO to **merge**
5. Separate GO for STABLE / RELEASE (NONE now)
6. Future UX remédiation cycle (out of this pack)

## Verdict readiness

**READY FOR MORRIS INTEGRATION DECISION WITH RESERVES**
Technical blockers for merge prep: none observed on automated smoke.
Visual/F2/G5: open reserves, not blockers for Morris’s stated proceed decision.

```

## 4. Fake/Real

| Proof | Class |
|---|---|
| Pilote A login RECETTE | FAKE (`dev-test-login`) |
| Nora turn | DETERMINISTIC/fixture path → FAILED fail-closed (no LIVE key) |
| Create project / ownership | REAL against isolated RECETTE DB |
| Playwright prior cycle | BROWSER on E2E lane (not this RECETTE process) |

## 5. Réserves

### Non-bloquantes (produit/UX)
- Figma gaps Morris (Nora/Docs/Journal); empty ≠ fed states; portfolio finitions
- F2/G5 NOT PROVEN

### Opérationnelles
- ML3 RECETTE agent unloaded; restore via launchctl if needed
- First migrate attempt hit wrong defaults — corrected with SFIA_PG_* targeting g4 DB
- Exclude `g2-source/scripts/tmp/` from any future PR

## 6. Verdict

TECHNICAL RECETTE PASS · USER/VISUAL NOT RUN WITH RESERVES · PR READY WITH RESERVES · NO PUSH/PR/MERGE/STABLE/RELEASE
