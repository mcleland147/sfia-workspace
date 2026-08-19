# AGENTS.md

## Cursor Cloud specific instructions

`sfia-workspace` is a **documentation/method monorepo** that also contains several
**independent Node.js applications**. There is **no root `package.json`** and it is
**not an npm workspace** — each app is installed and run on its own. Every app uses
**npm** (all lockfiles are `package-lock.json`). Node 20+ is required; the VM ships
Node 22, which satisfies every project.

The update script already runs `npm install` in each app directory on startup, so
dependencies are ready when a fresh agent begins. Do not add service startup to the
update script — start services yourself as described below.

### Applications and how to run them

Standard commands live in each app's `package.json`. Run them from the app directory.

| App | Path | Dev command | Port | Notes |
|-----|------|-------------|------|-------|
| SFIA Studio (primary) | `projects/sfia-studio/app` | `npm run dev` | 3020 | Next.js 15. `lint`, `typecheck`, `test` (vitest), `build` all run standalone with no external services. |
| SFIA Studio harness | `projects/sfia-studio/harness` | `npm run cli` | — | Node/TS CLI. `npm test` + `npm run typecheck` pass. See harness caveat below. |
| Interv360 app | `projects/interv360/app` | `npm run dev` | 5173 | Vite + React SPA. Local-only by default. |
| Interv360 backend | `projects/interv360/backend` | `npm run dev` | 3001 | Express + embedded SQLite (auto-seeded, no external DB). Only needed when the app runs in API mode (`VITE_INTERV360_DATA_SOURCE=api`). |
| Task Tracker | `projects/task-tracker/app` | `npm run dev` | 3010 | Next.js 15. Persistence via browser `localStorage`, no backend. |
| Chantiers360 v2 | `projects/chantiers360-v2/app` | `npm run dev` | 3000 | Next.js 15. Build/lint run without a DB, but **full run + Playwright E2E require PostgreSQL** (see caveat). |
| CMP-001 Notion Sync | `tools/cmp-001` | `node src/cli.js <cmd>` | — | Notion connector. **No offline mode** (see caveat). |

### Non-obvious caveats

- **SFIA Studio root redirect**: `http://localhost:3020/` returns a 307 redirect to
  `/synthese`. That is expected, not an error.
- **SFIA Studio optional integrations** (`projects/sfia-studio/app`) are **fail-closed
  and default to fixtures**. Postgres is only needed for `npm run test:db` /
  `npm run migrate:*` (set `DATABASE_URL` / `DATABASE_URL_DIRECT`); OpenAI
  (`OPENAI_API_KEY`) is only needed for live conversation mode. Core dev/lint/test/build
  need none of these.
- **SFIA Studio harness build is pre-existing broken**: `npm run build`
  (`tsc -p tsconfig.build.json`) fails with `TS6059 rootDir` because
  `fixtures/builders.ts` sits outside `src/`. This is a repo config issue, not an
  environment problem — use `npm run typecheck` and `npm test` to validate the harness.
- **Chantiers360 v2 needs PostgreSQL for full run / E2E**. Docker is **not installed**
  on the VM by default. The repo ships `docker-compose.test.yml` (Postgres 16 on host
  port 5433) used by `npm run db:test:up` / `npm run test:e2e:full`; install Docker
  first if you need the E2E flow. `npm run build` and `npm run lint` work without a DB.
- **CMP-001 requires live Notion access**: `create`, `export`, and `npm run test:all`
  all hit the real Notion API and need `NOTION_TOKEN` + database IDs in
  `tools/cmp-001/.env` (copy from `.env.example`). There is no fixtures/offline mode,
  so it cannot be exercised end to end without Notion credentials.
- **Playwright E2E** (`sfia-studio/app`, `chantiers360-v2/app`) needs browsers
  installed via `npx playwright install` before `npm run test:e2e`.
