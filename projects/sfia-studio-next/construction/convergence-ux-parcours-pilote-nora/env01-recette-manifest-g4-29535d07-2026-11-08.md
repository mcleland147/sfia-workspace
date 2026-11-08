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
