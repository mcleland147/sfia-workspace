# E5 validations summary — 2026-11-27

## Candidate identity
- PUBLISHED INPUT SNAPSHOT: `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` / tree `72405eddfdd10deea324a5c0dd01a073b30c5f85`
- LOCAL QUALIFIED CANDIDATE: uncommitted delta under `projects/sfia-studio-next/web` (+ evidence/docs)
- local-delta.sha256: see sibling file
- BUILD_ID (qualify after E5 CSS): `y06_YWoJEwb4zZZwRW26H`
- digest: `8380c0cd4578a25f83ffcf5fd5e7e259dd9641ea8d6ab0fc4ddc4aec7da710f4`
- Lane: DEV :3100 / PG :5433 — RECETTE :3200 untouched

## Suites
| Command | Result | Notes |
|---|---|---|
| `npm run test:unit` | EXIT 0 · 1531 PASS / 214 files | includes E5 unit deltas |
| `npm run lint` | EXIT 0 | pre-existing unused-var warnings only |
| `npm run qualify:build` | EXIT 0 | BUILD `y06_YWoJEwb4zZZwRW26H` |
| dictation PG integrated | EXIT 0 · 8 PASS | T02/T11 fixed (completed-before-committed) |
| e2 unified + finops + e5-knowledge unit | EXIT 0 · 13 PASS | NR Option B / FinOps |
| browser E5 discriminating | EXIT 0 · 3 PASS | sas mic, rail hit, panel empty honest |
| browser prior (panel/rail/ux/sas/dict harness) | EXIT 0 · 5 PASS | re-used qualify specs |

## Full integration suite
Not re-run wholesale: historically ~22 FAIL pre-existing (schema 008/019 / ml4c). Targeted NR only.

## LIVE / RECETTE
None executed. RECETTE process on :3200 preserved.
