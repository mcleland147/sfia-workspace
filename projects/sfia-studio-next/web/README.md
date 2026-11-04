# SFIA Studio — web application (DEV lane)

Technical package under `projects/sfia-studio-next/web`.
**Product STABLE version: NOT AVAILABLE.** `package.json` version `0.0.0-dev` is technical only (`NO RELEASE`).

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

## Fake / Real boundaries

| Boundary | Status |
|---|---|
| GitHub OAuth | BLOCKED without client secrets; simulated identity→Pilot tests are NOT LIVE proof |
| PostgreSQL | REAL DEV container on 5433 (`sfia_next_dev`); E2E uses sibling DB `sfia_next_e2e` |
| Nora | Deterministic fixture unless `OPENAI_API_KEY` set outside E2E; E2E always fixture |
| Browser | Playwright REAL local browser + DEV fake identity on owned :3101 |
| Figma native | PENDING — see `docs/ux-figma-pending.md` |
| RECETTE/STABLE | NOT AVAILABLE |
