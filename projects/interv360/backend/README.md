# Interv360 — Backend Minimal Prototype

Local Node.js / TypeScript / Express backend for the Interv360 demo API contract.

## Objective

Validate the path:

```text
Frontend React / TypeScript  (mode API local optionnel)
        ↓ REST
Backend Node.js / TypeScript / Express
        ↓
SQLite local (fictitious demo seed)
```

## Commands

From `projects/interv360/backend/`:

```bash
npm install
npm run dev      # start server on http://localhost:3001
npm run build    # TypeScript check
npm run test     # unit + API + persistence tests
```

## Environment

| Variable | Default | Purpose |
|----------|---------|---------|
| `PORT` | `3001` | HTTP port |
| `SQLITE_PATH` | `data/interv360.sqlite` | SQLite database file (`:memory:` supported) |
| `DEMO_MODE` | `true` (when unset) | Required for `POST /api/v1/demo/reset` |
| `INTERV360_CORS_ORIGINS` | *(see below)* | Optional comma-separated list of allowed browser origins |
| `CORS_ORIGIN` | *(legacy)* | Single allowed origin if `INTERV360_CORS_ORIGINS` is unset |

### Local CORS (demo API mode)

By default the backend allows common **local Vite dev server** origins:

- `http://localhost:5173`, `5174`, `5175`
- `http://127.0.0.1:5173`, `5174`, `5175`

If Vite picks an alternate port because `5173` is busy, the API mode still works without changing frontend env vars.

Override with a custom list when needed:

```bash
INTERV360_CORS_ORIGINS=http://localhost:5180,http://127.0.0.1:5180 npm run dev
```

Legacy single-origin override (still supported):

```bash
CORS_ORIGIN=http://localhost:5173 npm run dev
```

This is **local demo hardening only** — not a production CORS policy.

The local SQLite file is created automatically and ignored by Git (`data/`, `*.sqlite`).

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/v1/requests` | List fictitious requests |
| GET | `/api/v1/requests/:id` | Request + detail |
| GET | `/api/v1/requests/:id/events` | Workflow journal |
| GET | `/api/v1/users` | List active demo users |
| GET | `/api/v1/users/:id` | Get one demo user or `USER_NOT_FOUND` |
| POST | `/api/v1/requests/:id/transitions` | Apply nominal transition |
| POST | `/api/v1/demo/reset` | Reset demo seed and clear journal |

### Request detail productized fields

The request detail payload includes product-oriented fictitious fields:

- `category`
- `requestedDate`
- `equipmentLabel`
- `businessImpact`

The request list/detail also keeps `siteLabel` as the site-facing field on `Request`.

Notes:

- `businessImpact` is distinct from the existing short `impact` field.
- No user, role, CRM reference, real data or extended workflow status is introduced.
- For an existing local SQLite database, run the demo reset or remove `data/interv360.sqlite` to reload the enriched seed after schema migration.

### Enriched request model

The backend request model exposes additional MVP product fields:

- `requesterName`
- `requesterTeam`
- `assignedToUserId`
- `assignedToDisplayName`

The SQLite `requests` table is migrated compatibly with nullable columns:

- `requester_name`
- `requester_team`
- `assigned_to_user_id`
- `assigned_to_display_name`

Legacy fields remain available:

- `customerLabel`
- `assignedTechnicianLabel`

Request list endpoint:

```text
GET /api/v1/requests
```

Response shape:

```json
{
  "items": [
    {
      "id": "SAV-DEMO-001",
      "requesterName": "Alice Demandeur",
      "requesterTeam": "Centre demandeur",
      "assignedToUserId": "user-technician",
      "assignedToDisplayName": "Théo Technicien"
    }
  ]
}
```

Request detail endpoint:

```text
GET /api/v1/requests/:id
```

Response shape:

```json
{
  "request": {
    "id": "SAV-DEMO-001",
    "requesterName": "Alice Demandeur",
    "requesterTeam": "Centre demandeur",
    "assignedToUserId": "user-technician",
    "assignedToDisplayName": "Théo Technicien"
  },
  "detail": {
    "businessImpact": "...",
    "equipmentLabel": "...",
    "siteLabel": "..."
  }
}
```

This does not introduce request creation, a full CRUD API, real CRM data, or real authentication.

### API error contract

The backend API uses a structured error format for product API errors:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

The `code` field is the stable API contract.

The `message` field is intended for readable feedback and diagnostics.

Supported error codes include:

| Code | HTTP | Description |
|------|------|-------------|
| `REQUEST_NOT_FOUND` | 404 | Unknown request |
| `INVALID_TRANSITION_ACTION` | 400 | Missing, empty, invalid or unknown transition action |
| `TRANSITION_NOT_ALLOWED` | 409 | Business transition not allowed |
| `INVALID_JSON_BODY` | 400 | Invalid JSON body |
| `INVALID_ACTOR_USER` | 400 | Unknown, inactive or invalid actor |
| `USER_NOT_FOUND` | 404 | Unknown user when applicable |
| `DEMO_MODE_REQUIRED` | 403 | Demo-only operation outside demo mode |
| `INTERNAL_ERROR` | 500 | Controlled internal error |
| `ROUTE_NOT_FOUND` | 404 | Unknown API route |

Notes:

- `METHOD_NOT_ALLOWED` is intentionally not implemented in this lot.
- `DEMO_RESET_FAILED` was not introduced; the existing `DEMO_MODE_REQUIRED` contract is preserved.
- Product API errors must not expose stack traces.
- This lot does not introduce real authentication, tokens, OAuth/JWT/SSO, CRM data, request CRUD or new workflow statuses.

### API validation errors

Transition endpoints return structured API errors with the existing format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

Main validation cases:

| Case | HTTP | Code |
|------|------|------|
| Unknown request | 404 | `REQUEST_NOT_FOUND` |
| Missing transition action | 400 | `INVALID_TRANSITION_ACTION` |
| Non-string transition action | 400 | `INVALID_TRANSITION_ACTION` |
| Unknown transition action | 400 | `INVALID_TRANSITION_ACTION` |
| Business transition not allowed | 409 | `TRANSITION_NOT_ALLOWED` |
| Unknown or inactive actor user | 400 | `INVALID_ACTOR_USER` |
| Invalid JSON body | 400 | `INVALID_JSON_BODY` |

The demo reset keeps a stable response:

```json
{
  "status": "reset",
  "mode": "demo",
  "requestsCount": 3
}
```

No authentication session, CRM integration, real data or extended workflow status is introduced.

### Backend users

The backend now seeds a minimal `users` table.

Seeded users:

| ID | Role |
|----|------|
| `user-requester` | `requester` |
| `user-technician` | `technician` |
| `user-manager` | `manager` |
| `user-admin` | `admin` |
| `user-viewer` | `viewer` |

Available endpoints:

```text
GET /api/v1/users
GET /api/v1/users/:id
```

These endpoints return active demo users without sensitive authentication fields.

The backend does not provide login, logout, password, token, OAuth, JWT, SSO, or a real authentication session in this lot.

### Enriched workflow events

Workflow transitions can now receive an optional actor user id:

```json
{
  "action": "qualify",
  "actorUserId": "user-technician"
}
```

Rules:

- `action` is required;
- `actorUserId` is optional;
- when provided, `actorUserId` must match an active backend user;
- invalid or inactive users are rejected with `INVALID_ACTOR_USER`;
- no token, password, OAuth, JWT, SSO, or backend auth session is introduced.

Workflow events expose enriched audit fields through:

```text
GET /api/v1/requests/:id/events
```

Response shape:

```json
{
  "items": [
    {
      "id": "evt-...",
      "requestId": "SAV-DEMO-001",
      "type": "qualification.confirmed",
      "label": "Demande qualifiée",
      "action": "qualify",
      "fromStatus": "STAT-01",
      "toStatus": "STAT-02",
      "actorUserId": "user-technician",
      "actorDisplayName": "Théo Technicien",
      "actorRole": "technician",
      "createdAt": "..."
    }
  ]
}
```

When an actor is provided, the backend stores a snapshot (`actorDisplayName`, `actorRole`) at transition time.

Legacy events without actor fields remain compatible.

### Frontend UX compatibility

The Product UX Finalization lot does not change the backend contract.

The backend keeps:

- existing `/api/v1` endpoints;
- existing OK response formats;
- structured API errors `{ error: { code, message } }`;
- users API;
- request model;
- workflow transitions;
- audit trail events;
- demo reset behavior.

No authentication, token, CRM integration, real data, new workflow status or request CRUD API is introduced by the UX lot.

## Guardrails

- Fictitious data only (`isDemo: true`)
- SQLite local only — no PostgreSQL in this cycle
- No CRM, authentication, or multi-user
- Nominal workflow only (STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06)
- No STAT-05 / STAT-07 / STAT-08
- Frontend **mode local** remains the default demo mode

## Connexion frontend

Le frontend peut être lancé en mode API local avec :

```bash
cd ../app
VITE_INTERV360_DATA_SOURCE=api \
VITE_INTERV360_API_BASE_URL=http://localhost:3001/api/v1 \
npm run dev
```

Le mode local du frontend reste le mode par défaut.

Runbook E2E (local + API) : [`../08-presentation/interv360-e2e-demo-runbook.md`](../08-presentation/interv360-e2e-demo-runbook.md)

## Structure

```text
src/
  domain/       — types and transition rules
  seed/         — fictitious demo seed
  persistence/  — SQLite schema, connection, seed helpers
  store/        — demo store backed by SQLite
  api/          — Express routes
  app.ts        — Express app factory
  index.ts      — server entry
test/           — Vitest unit, API, and persistence tests
data/           — local SQLite file (gitignored)
```
