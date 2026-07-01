# Interv360 — Backend Minimal Prototype

Local Node.js / TypeScript / Express backend for the Interv360 demo API contract.

## Objective

Validate the path:

```text
Frontend React / TypeScript  (not connected in this cycle)
        ↓ REST
Backend Node.js / TypeScript / Express
        ↓
In-memory demo store (seed from TypeScript — JSON-first palier)
```

## Commands

From `projects/interv360/backend/`:

```bash
npm install
npm run dev      # start server on http://localhost:3001
npm run build    # TypeScript check
npm run test     # unit + API tests
```

## Environment

| Variable | Default | Purpose |
|----------|---------|---------|
| `PORT` | `3001` | HTTP port |
| `DEMO_MODE` | `true` (when unset) | Required for `POST /api/v1/demo/reset` |
| `CORS_ORIGIN` | `http://localhost:5173` | Allowed frontend origin (not used yet) |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/v1/requests` | List fictitious requests |
| GET | `/api/v1/requests/:id` | Request + detail |
| GET | `/api/v1/requests/:id/events` | Workflow journal |
| POST | `/api/v1/requests/:id/transitions` | Apply nominal transition |
| POST | `/api/v1/demo/reset` | Reset demo seed and clear journal |

## Guardrails

- Fictitious data only (`isDemo: true`)
- No SQL / SQLite / PostgreSQL
- No CRM, authentication, or multi-user
- Nominal workflow only (STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06)
- No STAT-05 / STAT-07 / STAT-08
- **Frontend is not connected** in this cycle

## Structure

```text
src/
  domain/     — types and transition rules
  seed/       — fictitious demo seed
  store/      — in-memory demo store
  api/        — Express routes
  app.ts      — Express app factory
  index.ts    — server entry
test/         — Vitest unit and API tests
```
