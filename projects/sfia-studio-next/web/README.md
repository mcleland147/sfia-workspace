# SFIA Studio Next — web application (DEV / RECETTE)

Technical package under `projects/sfia-studio-next/web`.
**Product STABLE version: NOT AVAILABLE.** `package.json` version `0.0.0-dev` is technical only (`NO RELEASE`).

**ML1 integration snapshot (2026-11-04):** PR [#649](https://github.com/mcleland147/sfia-workspace/pull/649) merged, `main@747cbec0ac9c161306db34121b0447391b23589c` ; C3 candidate `0db58be8240a00593092048ee74299f19374f489` / RECETTE build `PMCGeil9wv8DZNBfEGf4H`. Morris accepted functional RECETTE (GitHub OAuth and Nora LIVE included) **with carried reserves**. This does not prove an independent post-merge runtime smoke, current server availability, STABLE or R6.

## Prerequisites

- Node ≥ 20
- Docker PostgreSQL DEV: container `sfia-next-dev-pg` on `127.0.0.1:5433`
- `.env.local` (not committed) — see `.env.example` for required keys (blank placeholders only)

## Start DEV (port 3100)

```bash
# Postgres
docker start sfia-next-dev-pg || docker run -d --name sfia-next-dev-pg \
  -e POSTGRES_USER=sfia_next_dev \
  -e POSTGRES_PASSWORD='<local-dev-only>' \
  -e POSTGRES_DB=sfia_next_dev \
  -p 127.0.0.1:5433:5432 postgres:16-alpine

# Migrate (applies 001_initial_studio_core.sql then 002_session_auth_mode.sql; ON_ERROR_STOP)
npm run db:migrate

# App
npm install
npm run dev
```

Override target DB when needed:

```bash
SFIA_PG_DATABASE=other_db npm run db:migrate
```

Open `http://127.0.0.1:3100`. With `STUDIO_DEV_TEST_LOGIN=1` and `STUDIO_LANE=DEV`, use Pilote A/B on `/login`.
**DEV login is not GitHub OAuth proof.** Emission and consumption both require DEV lane + loopback.

## Stack

- Next.js 15.5.29 (patched 15.5 line)
- Better Auth = OAuth session authority → PilotId provisioning; DEV loopback login adapter (not OAuth proof)
- OpenAI Agents SDK adapter (LIVE only with key and outside E2E fixture force)
- Project reopen: `GET /api/projects/:projectId` (owner-scoped, no `preparationId` query required)

## Tests

```bash
npm run test:unit
npm run test:integration
npm run test:e2e
```

`test:e2e` starts an **owned** server on `127.0.0.1:3101` against isolated DB `sfia_next_e2e` (same Postgres instance, separate database). Preflight (`scripts/e2e-preflight.ts`) validates operator `DATABASE_URL` (loopback `:5433` / `sfia_next_dev`) and Docker port mapping **before** any `CREATE DATABASE` or migrate. Nora fixture FAKE requires `STUDIO_LANE=DEV` + `STUDIO_E2E=1` (`OPENAI_API_KEY` neutralized). Cache dir: `.next-e2e` (operator DEV keeps `.next`). Does **not** reuse `:3100`. Operator data in `sfia_next_dev` (including project « Test 1 ») is untouched.


Historical local ML1 candidate evidence: 22 unit and 26 PostgreSQL integration tests PASS; 1 Playwright E2E PASS using DEV fake identity and Nora fixture. The legacy GitHub Required Gate for PR #649 was SUCCESS but **did not execute Next CI**; a dedicated Next workflow remains open (reserve B). These results must not be presented as remote Next CI proof.

## Fake / Real boundaries

| Boundary | Status |
|---|---|
| GitHub OAuth | LIVE interactive flow observed and functionally accepted by Morris in RECETTE at C3; local activation still requires lane-specific credentials. DEV fake identity is not OAuth proof. |
| PostgreSQL | REAL DEV container on 5433 (`sfia_next_dev`); E2E uses sibling DB `sfia_next_e2e` |
| Nora | Bounded LIVE flow accepted in RECETTE; unit/integration/E2E fixture tests are deterministic and must not be labeled LIVE. E2E always fixture. |
| Browser | Playwright REAL local browser + DEV fake identity on owned :3101 |
| Figma native | Partial native extraction (rail 246 px), component fidelity and runtime screenshot comparison still open; see `docs/ux-figma-pending.md`. Rich Markdown rendering is not implemented. |
| RECETTE/STABLE | RECETTE used and accepted at C3 build (current process status not observed); STABLE NOT AVAILABLE. Reserve A: DEV and RECETTE sharing `127.0.0.1` may collide session cookies across ports; use separate browser profiles temporarily, technical isolation/re-test required before STABLE. |
