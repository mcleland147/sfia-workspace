# 02 — Technical implementation

## Architecture
UI → Server Actions (`lib/d1/actions.ts`) → commands (`commands.ts`) → repository/tx → audit

## Modules
- `lib/d1/*` domain, db, repository, authz, commands, actions, observability
- `features/d1/*` AppShell, views, rail, badges, CSS
- Routes App Router sous `app/workspace`, `app/projects/**`

## Stack
Next 15 · React 19 · node:sqlite · Vitest · Playwright — **aucune nouvelle dépendance**

## Isolation
D1 AppShell séparé de `StudioShell` artboard 1440 pour ne pas casser OPS1.
