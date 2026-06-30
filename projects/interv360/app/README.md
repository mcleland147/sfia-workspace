# Interv360 — INC-01 App Foundation

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

## Status

**Foundation + requests list skeleton + request detail skeleton + explicit demo reset.**

Screens:

- `RequestsList` — fictitious demo requests list
- `RequestDetail` — fictitious detail for `SAV-DEMO-001`
- `DemoResetControl` — explicit demo reset (fictitious data only)

Demo reset:

- purges all `interv360-inc01:` localStorage keys via `src/data/`;
- reloads the fictitious seed (`SAV-DEMO-001`);
- refreshes list and detail views;
- no business workflow or status transitions.

The complete INC-01 flow (STAT-01 → STAT-06) is not implemented.
No business actions or status transitions are available.
