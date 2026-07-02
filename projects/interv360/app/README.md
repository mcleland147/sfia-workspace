# Interv360 — INC-01 App Foundation

> For the full Interv360 local installation and run guide, start with [`../README.md`](../README.md).

This application folder contains the first minimal foundation for INC-01.

## Starter choice

**React + TypeScript + Vite** — lightweight mono-app web starter aligned with `inc-01-stack-options.md` (Option A — mono-app web simple) and `inc-01-technical-scope.md` (logical separation without mandatory backend).

Rationale:

- simple setup and maintenance;
- clear folder structure for UI / domain / data / seed;
- no backend, API, or SQL required;
- built-in dev server and build tooling;
- Vitest available for minimal smoke tests.

## Scope

Authorized scope:

- mono-app web foundation;
- logical separation between UI, domain orchestration, data, and demo seed;
- fictitious demo data only;
- local persistence preparation only.

Out of scope:

- full STAT-01 to STAT-06 implementation;
- backend server;
- external API;
- CRM integration;
- server database;
- SQL / DDL / migration;
- real personal data;
- dashboard;
- multi-user flow;
- STAT-05 / STAT-07 / STAT-08.

## Logical structure

```text
src/
  app/      — application shell and entry UI
  ui/       — presentation (future INC-01 screens)
  domain/   — business orchestration (future STAT transitions)
  data/     — local persistence (future structured storage)
  seed/     — fictitious demo data (SAV-DEMO-001, INT-DEMO-001)
  tests/    — smoke tests and future QA
```

## Commands

From `projects/interv360/app/`:

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run test     # smoke tests (vitest)
npm run preview  # preview production build
```

## Environment variables

The frontend can run in two modes:

| Variable | Default | Usage |
|----------|---------|-------|
| `VITE_INTERV360_DATA_SOURCE` | `local` when absent or different from `api` | Selects the data source. Use `api` to connect to the backend. |
| `VITE_INTERV360_API_BASE_URL` | `http://localhost:3001/api/v1` | Backend API base URL used in API mode. |

### Local mode

No environment variable is required.

```bash
npm run dev
```

### API mode

```bash
VITE_INTERV360_DATA_SOURCE=api \
VITE_INTERV360_API_BASE_URL=http://localhost:3001/api/v1 \
npm run dev
```

If the backend is unavailable in API mode, the frontend displays an explicit error and does not silently fall back to local mode.

### Example file

Use `.env.example` as a local template if needed:

```bash
cp .env.example .env
```

The `.env` file must remain local and must not be committed.

## Scripts

| Command | Usage |
|---------|-------|
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Type-checks and builds the frontend into `dist/`. |
| `npm run test -- --run` | Runs the frontend test suite (191 tests or more). |
| `npm run preview` | Serves the production build locally. |

## Mode données local/API

Par défaut, l'application utilise le **mode local** basé sur `localStorage` (voir [Environment variables](#environment-variables) ci-dessus).

Le backend doit être lancé séparément en mode API depuis `projects/interv360/backend/` (`npm run dev` sur `http://localhost:3001`).

Le frontend Vite utilise par défaut le port **5173**. Si ce port est occupé, Vite bascule sur **5174** ou **5175** : le backend autorise ces origins locales sans modifier `VITE_INTERV360_API_BASE_URL`.

Les transitions et le journal en mode API sont **persistés côté backend** (SQLite). Un redémarrage du backend conserve l'état jusqu'au reset démo (`POST /api/v1/demo/reset` ou bouton **Réinitialiser la démo**).

La démo dispose d'une **navigation par écran** (vue d'ensemble, scénario, demandes, détail, journal) pour réduire le scroll en présentation.

Runbook E2E : [`../08-presentation/interv360-e2e-demo-runbook.md`](../08-presentation/interv360-e2e-demo-runbook.md)

### Productized request detail fields

The request detail view displays product-oriented fields in both local and API modes:

- `requestedDate` as **Date de demande**
- `equipmentLabel` as **Équipement / objet**
- `businessImpact` as **Impact métier**
- `siteLabel` as **Site**

Notes:

- `requestedDate` is distinct from the existing creation date label.
- `businessImpact` is distinct from the existing short impact label.
- The frontend keeps the current navigation, local mode, and API opt-in mode.
- Simulated roles are documented below via the demo user switcher; no real authentication, OAuth, JWT, SSO, backend user database, CRM integration, or real data is introduced.

### Enriched request model

The frontend supports the enriched Interv360 request model.

Requests can now expose:

- `requesterName`
- `requesterTeam`
- `assignedToUserId`
- `assignedToDisplayName`

Legacy fields remain supported for compatibility:

- `customerLabel`
- `assignedTechnicianLabel`

The request detail view displays the requester and assignment information when available, with fallback to legacy fields when needed.

The request list remains compatible and can display requester and assignment information.

Search also includes enriched request fields such as requester, requester team, assignment, category, and equipment.

Both local mode and API mode are supported.

### API error compatibility

In API mode, the frontend consumes the backend structured error format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

The frontend reads:

1. `error.message` when available ;
2. `error.code` as fallback ;
3. a generic fallback message when the response body is not usable.

This applies to request API calls and users API calls.

The API mode does not silently fall back to local mode when the backend is unavailable.

A visible error state is kept instead.

This does not introduce authentication, login, logout, password, token, OAuth/JWT/SSO or real sessions.

### Workflow light extension

The frontend exposes the workflow light extension:

- `STAT-05` — En attente
- `STAT-07` — Annulée
- `put_on_hold` — Mettre en attente
- `resume` — Reprendre
- `cancel` — Annuler la demande

The API contract remains unchanged:

```text
POST /api/v1/requests/:id/transitions
```

Role simulation still applies on top of workflow actions:

- `technician`, `manager`, and `admin` can put requests on hold and resume them.
- only `manager` and `admin` can cancel requests.
- `requester` and `viewer` remain read-only for workflow actions.

### Workflow requalification

The frontend exposes the lightweight requalification action:

- `requalify` — Requalifier

The action is available from:

- `STAT-02`
- `STAT-03`
- `STAT-05`

It returns the request to `STAT-02`.

No `STAT-08` status is introduced.

Role simulation applies:

- `technician`, `manager`, and `admin` can requalify requests.
- `requester` and `viewer` remain read-only for this action.

### Auth User Switcher

The frontend now exposes a demo user switcher.

This is not real authentication.

The active role is derived from the selected demo user.

Demo users:

| User | Role |
|------|------|
| Alice Demandeur | `requester` |
| Théo Technicien | `technician` |
| Maya Responsable | `manager` |
| Amin Admin | `admin` |
| Victor Lecteur | `viewer` |

Local session:

```text
interv360:current-user-id
```

Default user:

```text
user-technician
```

The previous direct role simulation key (`interv360:simulated-role`) is no longer the primary source for the active role.

The simulation controls existing workflow actions:

- `technician`, `manager`, and `admin` can perform nominal workflow transitions.
- `technician`, `manager`, and `admin` can put requests on hold and resume them.
- only `manager` and `admin` can cancel requests.
- `requester` and `viewer` cannot perform workflow transitions.
- Only `admin` can trigger the demo reset.

Unauthorized actions are blocked on the frontend and display a user message:

`Action non autorisée pour le rôle simulé : <role label>.`

The current demo user is preserved after a demo reset.

### Backend users in API mode

When API mode is enabled, the frontend loads demo users from the backend:

```text
GET /api/v1/users
```

The selected user is still stored locally with:

```text
interv360:current-user-id
```

User resolution rules:

1. keep the stored user if it exists in the backend users list;
2. fallback to `user-technician` when available;
3. fallback to the first active user if `user-technician` is not available.

Local mode still uses the frontend `DEMO_USERS` list.

### Enriched audit trail in API mode

When API mode is enabled, workflow transitions include the selected demo user as an optional actor:

```json
{
  "action": "qualify",
  "actorUserId": "user-technician"
}
```

`actorUserId` remains optional. Transitions without an actor remain compatible.

The frontend never sends authentication material in transition payloads.

It does not send:

- `token`
- `session`
- `password`
- `passwordHash`
- `actorDisplayName` or `actorRole` (the backend snapshots these from the user record)

The selected user still comes from the local demo user session:

```text
interv360:current-user-id
```

The workflow journal displays enriched events when available:

- actor display name;
- actor role;
- action;
- status transition (`fromStatus → toStatus`).

Legacy events without actor fields remain readable.

In local mode, the journal is enriched from the selected demo user without calling the events API.

This is still not real authentication.

No login, password, token, OAuth, JWT, SSO, Entra ID, or backend auth session is introduced.

Guardrails:

- no real login;
- no password;
- no token;
- no OAuth;
- no JWT;
- no SSO;
- no Entra ID;
- no backend auth session;
- `actorUserId` optional on transitions.

## Product UX MVP

The frontend provides a product-oriented MVP experience for Interv360.

The UX finalization keeps the existing product scope while improving readability:

- request cards use business status labels instead of raw technical status codes as the main label;
- the request detail page is structured into readable sections;
- workflow actions are grouped and explain why unavailable actions are disabled;
- the workflow journal highlights actor, action and date;
- the active simulated profile is visible;
- local/API mode indicators are explicit;
- API mode does not silently fall back to local mode when the backend is unavailable.

### Request detail

The request detail view highlights:

- request title and reference;
- business status label;
- requester and team;
- site and equipment;
- priority, criticality and business impact;
- assignment;
- additional details.

Sections: **Résumé**, **Site & équipement**, **Priorisation**, **Détails**.

### Workflow actions

Workflow actions keep the existing transition model and permissions.

The frontend only improves readability:

- available actions remain actionable;
- unavailable actions are disabled;
- unavailable actions provide a readable reason;
- transitions still send the current simulated user as `actorUserId`.

### Workflow journal

The journal keeps the existing audit trail data and displays it in a more readable way:

- actor;
- role;
- action;
- date;
- status transition.

### Local and API modes

Both modes are preserved:

- local mode uses the embedded demo dataset;
- API mode uses the local backend;
- no silent fallback to local mode occurs when API mode cannot reach the backend.

### Guardrails

This UX lot does not introduce:

- full CRUD;
- request creation form;
- real authentication;
- login/logout;
- password;
- token;
- OAuth/JWT/SSO;
- CRM integration;
- real data;
- new workflow status;
- `STAT-08`;
- new UI dependency;
- Figma export in the repository.

## Status

**Phase 2 — controlled local workflow skeleton on top of the readonly INC-01 demo foundation.**

Screens:

- `RequestsList` — fictitious demo requests list
- `RequestDetail` — fictitious detail for `SAV-DEMO-001`
- `QualificationReadonly` — fictitious qualification view for `SAV-DEMO-001` (read-only)
- `PlanningReadonly` — fictitious planning view for `SAV-DEMO-001` (read-only)
- `InterventionReadonly` — fictitious field intervention view for `SAV-DEMO-001` (read-only)
- `ReportReadonly` — fictitious report view for `SAV-DEMO-001` (read-only)
- `WorkflowActionControl` — single controlled workflow action for `SAV-DEMO-001`
- `WorkflowJournalReadonly` — fictitious local workflow journal (read-only)
- `DemoResetControl` — explicit demo reset (fictitious data only)

Controlled workflow (nominal INC-01 path only):

- `STAT-01 → STAT-02` — Qualifier la demande
- `STAT-02 → STAT-03` — Planifier l'intervention
- `STAT-03 → STAT-04` — Marquer l'intervention réalisée
- `STAT-04 → STAT-06` — Clôturer avec compte rendu fictif

Workflow rules:

- one visible action at a time, based on current status ;
- no action in `STAT-06` ;
- fictitious local journal via `src/data/` ;
- reset restores `SAV-DEMO-001` to `STAT-01` and clears the journal ;
- no transition outside the nominal INC-01 path ;
- no backend, API, server database or real data.

## INC-03 — Multi-request local demo

INC-03 extends the demonstrator with several fictitious local SAV requests.

Changes:

- three fictitious requests: `SAV-DEMO-001` (STAT-01), `SAV-DEMO-002` (STAT-02), `SAV-DEMO-003` (STAT-06);
- request selection from the list;
- detail, readonly journey, workflow action and journal scoped to the selected request;
- multi-request reset restores all seed data and default selection (`SAV-DEMO-001`).

Unchanged:

- controlled workflow transitions and rules per request;
- fictitious local data only;
- no backend, API, server database, SQL, CRM, or real data;
- no React routing or new dependency.

## INC-04 — Local list filtering and summary

INC-04 improves multi-request list exploitation with lightweight local filters.

Changes:

- local status summary (count per visible status);
- filter `Toutes` and per-status filters for existing requests;
- active filter indication;
- selection realigned when the active filter hides the selected request;
- reset restores filter to `Toutes`.

Unchanged:

- controlled workflow transitions and rules per request;
- fictitious local data only;
- no backend, API, server database, SQL, CRM, dashboard, chart, or export;
- no React routing or new dependency.

## Batch 01 — Demo credibility

Batch 01 groups several low-risk local demo enhancements into one coherent delivery lot.

Changes:

- fictitious priority indicators (`Basse` / `Moyenne` / `Haute`);
- lightweight criticality indicators (`Standard` / `Sensible` / `Urgente`);
- local in-memory search on id, title, status, priority and criticality;
- enriched fictitious request detail (category, channel, impact, demo centre, date);
- empty state when local filters and/or search return no request;
- reset restores seed data, filter `Toutes`, empty search and default selection (`SAV-DEMO-001`).

Unchanged:

- controlled workflow transitions and rules per request;
- fictitious local data only;
- no backend, API, server database, SQL, CRM, dashboard, chart, or export;
- no React routing or new dependency;
- nominal workflow path unchanged.

## Batch 02 — Demo control & scenario

Batch 02 improves demo presentation control with a guided local scenario layer.

Changes:

- guided demo scenario with six presenter steps;
- visual scenario progression (`Étape X sur Y`) and previous/next navigation;
- scenario reset back to step 1 without changing business data;
- contextual help per scenario step;
- overview panel showing current scenario step;
- global reset also restores scenario step 1.

Unchanged:

- controlled workflow transitions and rules per request;
- fictitious local data only;
- filters, search, selection, journal and Batch 01 indicators;
- no backend, API, server database, SQL, CRM, dashboard, chart, or export;
- no React routing or new dependency;
- nominal workflow path unchanged.

## Batch 03 — Demo readiness & presentation package

Batch 03 prepares the demonstrator for clearer presentation and reuse.

Changes:

- `DemoReadinessPanel` with demo readiness criteria and ready status;
- integrated static presentation checklist;
- compact summary of delivered capabilities;
- explicit assumed limitations;
- distinction between demonstrated, fictitious/local, and out-of-scope items;
- overview lead updated for presentation context;
- anchor navigation link to readiness section.

Unchanged:

- guided scenario, filters, search, selection, workflow, reset and journal;
- fictitious local data only;
- no backend, API, server database, SQL, CRM, dashboard, chart, or export;
- no React routing or new dependency;
- nominal workflow path unchanged.

## Batch 04 — Demo presentation package

Batch 04 adds a documentary presentation package to facilitate external demonstration of Interv360:

- presentation package (`projects/interv360/08-presentation/interv360-demo-presentation-package.md`);
- demo script (`interv360-demo-script.md`);
- one-page summary (`interv360-demo-one-page-summary.md`);
- reminder of demonstrated capabilities and assumed limits.

No application code change is introduced by this batch.

Report readonly:

- displays fictitious summary, result and checklist for `SAV-DEMO-001`;
- no STAT-06 transition;
- no enter/validate/close report action buttons;
- fictitious data only.

Intervention readonly:

- displays fictitious location, window, technician and safety checklist for `SAV-DEMO-001`;
- no STAT-04 transition;
- no start/finish/report action buttons;
- fictitious data only.

Planning readonly:

- displays fictitious slot and technician for `SAV-DEMO-001`;
- no STAT-03 transition;
- no plan/assign action buttons;
- fictitious data only.

Qualification readonly:

- displays fictitious checklist and summary for `SAV-DEMO-001`;
- no STAT-01 → STAT-02 transition;
- no qualify/validate action buttons;
- fictitious data only.

Demo reset:

- purges all `interv360-inc01:` localStorage keys via `src/data/`;
- reloads the fictitious seed (`SAV-DEMO-001`);
- refreshes list and detail views;
- no business workflow or status transitions.

The complete INC-01 flow (STAT-01 → STAT-06) is not implemented.
No business actions or status transitions are available.

## INC-02 — UX demo improvement

INC-02 improves demonstration readability without changing the INC-01 business workflow.

Changes:

- `DemoOverview` — local/fictitious context, nominal path, current status, demo limits;
- clearer page layout with separated controls, request, readonly journey and journal;
- simple internal anchor navigation (no React routing).

Unchanged:

- controlled workflow transitions and rules;
- fictitious local data only;
- no backend, API, server database, SQL, CRM, or real data;
- no new integration or Notion publication.
