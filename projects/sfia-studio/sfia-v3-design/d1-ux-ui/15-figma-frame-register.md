# 15 — Figma frame register

| Champ | Valeur |
|-------|--------|
| **Plan** | L'équipe de Morris CLELAND (`team::1653291379918403018`) — unique |
| **File** | SFIA Studio — D1 Doctrine-aligned UX |
| **fileKey** | `IS70XDnBMvZuJYmaI5eZT2` |
| **URL** | https://www.figma.com/design/IS70XDnBMvZuJYmaI5eZT2 |
| **Page** | D1 — Project Framing UX (`1:2`) |
| **Statut** | Frames éditables Auto Layout · dimensions confirmées |

## Frames

| Frame | node id | W×H | Layout | Source doctrinale | Runtime correspondant | Statut |
|-------|---------|-----|--------|-------------------|----------------------|--------|
| D1 / Components | `1:3` | 364×79 | HORIZONTAL | tokens/components | — | primitives |
| D1 / 1440 / Workspace Home | `2:2` | **1440×1024** | HORIZONTAL AL | framing 11/15 · design 08 | aucun (cible) ; legacy `/` | OK |
| D1 / 1440 / New Project | `2:24` | **1440×1024** | HORIZONTAL AL | design 07 · UX 07 | — | OK |
| D1 / 1440 / Project Cockpit | `2:46` | **1440×1024** | HORIZONTAL AL | design 08 · UX 08 | — | OK I1 |
| D1 / 1440 / Method Mode | `3:2` | **1440×1024** | HORIZONTAL AL | modeled mode · UX 07 | — | OK I1 |
| D1 / 1440 / Guided Session | `3:25` | **1440×1024** | HORIZONTAL AL | design 06/09 · UX 09 | `/nouvelle-demande` (écart) | OK |
| D1 / 1440 / Decision Center | `3:51` | **1440×1024** | HORIZONTAL AL | design 07/10 · UX 10 | OPS1 action gate (écart) | OK |
| D1 / 1440 / Cycle Review | `3:73` | **1440×1024** | HORIZONTAL AL | modeled 07 · UX 11 | — | OK |
| D1 / 1728 / Project Cockpit | `3:97` | **1728×1024** | HORIZONTAL AL | UX 12 large | runtime unusedRight 288px | OK |
| D1 / 1728 / Guided Session | `3:120` | **1728×1024** | HORIZONTAL AL | UX 12 | runtime 1728 | OK |
| D1 / 1280 / Project Cockpit | `3:143` | **1280×1024** | HORIZONTAL AL | UX 12 | runtime overflow H | OK |
| D1 / 1280 / Guided Session | `3:165` | **1280×1024** | HORIZONTAL AL | UX 12 | runtime 1280 | OK |
| D1 / 1024 / Project Cockpit | `3:187` | **1024×1024** | HORIZONTAL AL | UX 12 tablet | runtime 1024 | OK |
| D1 / 1024 / Guided Session | `3:209` | **1024×1024** | HORIZONTAL AL | UX 12 tablet | runtime 1024 | OK |

## Shell contract encoded in frames

`Nav 72` + `Main FILL` + `ContextualRail` (≈320–415 selon largeur) · gutters 24 · Auto Layout HORIZONTAL.

## Réserves Figma

- UX-R02 : composants from-scratch (pas de Code Connect Studio riche)
- Capture runtime Figma : via injection navigateur (sans modif source) — voir registre preuves
- Mobile frames non produites (documentées doc 12)


## Runtime capture in Figma

| Item | Value |
|------|-------|
| node | `4:2` (renamed evidence) |
| URL | https://www.figma.com/design/IS70XDnBMvZuJYmaI5eZT2?node-id=4-2 |
| Role | **Preuve existant** — pas la cible D1 |
| Local screenshots | `.tmp-sfia-review/screenshots-d1-ux/runtime-*.png` |
| Metrics | `.tmp-sfia-review/screenshots-d1-ux/runtime-metrics.json` |
