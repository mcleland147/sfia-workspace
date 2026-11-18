# As-built — UX-004 open-preparation + breadcrumb + D2 guards (2026-11-16)

## Scope

Borned shell/portfolio correctif on ML4D UX-004. No Figma change. No API/schema change. No RECETTE redeploy in this cycle.

## Correction A — Nouveau projet → D2

Canonical client action: `web/src/lib/open-preparation.ts` → `runOpenPreparation()`.

- One voluntary `POST /api/preparations`.
- Success (`OPENED`) → navigate to `/preparations/{preparationId}` (API id only).
- `REFUSED` / `UNAUTHORIZED` / `UNCERTAIN` → user-visible state; **no automatic second POST**.
- `UNCERTAIN` never upgrades to confirmed creation via portfolio id diff (no causal correlation in the current API).

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

## Correction C — D2 effect honesty (ACK)

| Kind | Condition |
| --- | --- |
| `opened` | HTTP OK + non-empty `preparationId` from this POST |
| `refused` | Explicit non-OK (≠ 401) |
| `unauthorized` | HTTP 401 |
| `uncertain` | Empty/incomplete ACK or network failure |

Portfolio re-read after `uncertain` is an aid to reprise only — it does **not** confirm creation and does **not** drive navigation.

## Correction D — Document-scoped single-flight

`runOpenPreparation` holds one in-memory lock for the current browser document until `onResult` completes (including navigation). Concurrent entry points receive `{ kind: "busy" }` and do not start a second POST. Busy state is shared via `subscribeOpenPreparationBusy`.

### Limits (not server idempotence)

This guard does **not** cover: multiple tabs, multiple sessions, multiple devices, or server-side duplicate processing. Stronger guarantees would require a server/persistence mandate.

## Non-goals preserved

D1 identity, durable project creation, Nora conversation, OAuth UX-003, rails projet/conversation/inspection, DB, permissions, ML5.
