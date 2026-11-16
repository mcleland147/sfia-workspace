# As-built — UX-004 correctif open-preparation + breadcrumb (2026-11-16)

## Scope

Borned shell/portfolio correctif on ML4D UX-004. No Figma change. No API/schema change. No RECETTE redeploy in this cycle.

## Correction A — Nouveau projet → D2

Canonical client action: `web/src/lib/open-preparation.ts` → `openPreparation()`.

- One voluntary `POST /api/preparations`.
- Success → navigate to `/preparations/{preparationId}` (real id only).
- Refused / unauthorized / uncertain ACK → user-visible state; **no automatic second POST**.
- Callers guard concurrency (`openingRef` / `creatingRef`).

Entry points sharing this action:

| UI | Location |
| --- | --- |
| Rail « Nouveau projet » | `StudioShell` via `ShellNavItem.action = "open-preparation"` |
| Mobile « Créer » | bottom nav button |
| Portefeuille « Créer un projet » | `portfolio/page.tsx` `startPreparation()` |

Removed: hash navigation `/portfolio#nouvelle-preparation` as the rail/mobile create path.

## Correction B — Fil d'Ariane

`resolvePersonalBreadcrumb(pathname)` in `studio-rail.ts`:

| Route | Label |
| --- | --- |
| `/portfolio` | Portefeuille |
| `/settings/integrations` | Intégrations |
| `/settings` (other) | Paramètres |
| unknown | `null` → shell shows `SFIA Studio` only (never invent / never keep Portefeuille by default) |

## Non-goals preserved

D1 identity, durable project creation, Nora conversation, OAuth UX-003, rails projet/conversation/inspection, DB, permissions, ML5.
