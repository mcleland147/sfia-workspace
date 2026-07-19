# SFIA Studio — Delivery P0

Frontend Next.js 15 pour les 4 écrans Figma P0 (`lrjA1WEyRpL05vKR8k29LO`).

## Stack

- Next.js 15 App Router, React 19, TypeScript strict
- CSS Modules + variables `--sfia-*` (`styles/tokens.css`)
- Port local : **3020**
- Fixtures locales uniquement — **aucun backend**

## Scripts

```bash
npm install
npm run dev          # http://127.0.0.1:3020
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
npm start
```

## Routes P0

| Écran Figma | Route |
|-------------|-------|
| P0-01C Vue synthèse | `/synthese` (hub, redirect depuis `/`) |
| P0-00C Nouvelle demande | `/nouvelle-demande` |
| P0-02C Cycle actif | `/cycle-actif` |
| P0-03C Décision Morris | `/decision` |

## Contraintes P0

- **Pas** de `app/api`, middleware auth, `.env`, Tailwind, ni appels Git distants
- Actions Git/Cursor **simulées** (`Simulation — aucune action Git réelle`)
- `Recommendation` (copilot) ≠ `MorrisDecision` (gate humain)
- Onglet **Preuves** et gear rail : désactivés (simulation)
- Captures E2E 1440×1024 → `../../.tmp-sfia-review/screenshots/`

## Structure

```
app/                 # App Router pages
components/shell/    # StudioShell, rail, topbar, copilot
components/ui/       # Card, pills, gates, evidence, metrics
features/            # Écrans P0
fixtures/            # Données déterministes FR
lib/domain/          # Types + guards
lib/adapters/        # Ports fixtures-only
styles/              # tokens.css, shell.module.css
__tests__/           # Vitest + Testing Library
e2e/                 # Playwright smoke
```

## Figma frames

- P0-00C `19:2` — shell **floating** (rail/workspace/copilot inset)
- P0-01/02/03 — shell **flush** (rail pleine hauteur + topbar)

Tokens extraits manuellement depuis `get_design_context` (variables Figma vides).
