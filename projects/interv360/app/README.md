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

## Mode données local/API

Par défaut, l'application utilise le **mode local** basé sur `localStorage`.

Un **mode API local** peut être activé explicitement pour tester le backend minimal :

```bash
VITE_INTERV360_DATA_SOURCE=api \
VITE_INTERV360_API_BASE_URL=http://localhost:3001/api/v1 \
npm run dev
```

Le backend doit alors être lancé séparément depuis `projects/interv360/backend/` (`npm run dev`).

Le mode local reste le mode de démonstration par défaut. Aucun fallback automatique vers le local n'est activé en cas d'erreur API.

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
