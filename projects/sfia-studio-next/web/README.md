# SFIA Studio — web application (DEV lane)

Technical package under `projects/sfia-studio-next/web`.
**Product STABLE version: NOT AVAILABLE.** `package.json` version `0.0.0-dev` is technical only (`NO RELEASE`).

## Prerequisites

- Node ≥ 20
- Docker PostgreSQL DEV: container `sfia-next-dev-pg` on `127.0.0.1:5433`
- `.env.local` (not committed) — see `.env.example`

## Start DEV (port 3100)

```bash
# Postgres
docker start sfia-next-dev-pg || docker run -d --name sfia-next-dev-pg \
  -e POSTGRES_USER=sfia_next_dev \
  -e POSTGRES_PASSWORD='<local-dev-only>' \
  -e POSTGRES_DB=sfia_next_dev \
  -p 127.0.0.1:5433:5432 postgres:16-alpine

# Migrate
docker exec -i sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev \
  < src/db/migrations/001_initial_studio_core.sql

# App
npm install
npm run dev
```

Open `http://127.0.0.1:3100`. With `STUDIO_DEV_TEST_LOGIN=1`, use Pilote A/B on `/login`.
**DEV login is not GitHub OAuth proof.**

## Stack

- Next.js 15.5.29 (patched 15.5 line)
- Better Auth = OAuth session authority → PilotId provisioning; DEV loopback login adapter (not OAuth proof)
- OpenAI Agents SDK adapter (LIVE only with key)
- Project reopen: `GET /api/projects/:projectId` (owner-scoped, no `preparationId` query required)

## Tests

```bash
npm run test:unit
npm run test:integration
npm run test:e2e
```

## Fake / Real boundaries

| Boundary | Status |
|---|---|
| GitHub OAuth | BLOCKED without client secrets; simulated identity→Pilot tests are NOT LIVE proof |
| PostgreSQL | REAL DEV container on 5433 |
| Nora | Deterministic fixture unless `OPENAI_API_KEY` set (LIVE bounded) |
| Browser | Playwright REAL local browser + DEV fake identity |
| Figma native | PENDING — see `docs/ux-figma-pending.md` |
| RECETTE/STABLE | NOT AVAILABLE |
