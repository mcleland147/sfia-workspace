# SFIA Studio — Delivery P0

Frontend Next.js 15 pour les 4 écrans Figma P0 (`lrjA1WEyRpL05vKR8k29LO`).

## Stack

- Next.js 15 App Router, React 19, TypeScript strict
- CSS Modules + variables `--sfia-*` (`styles/tokens.css`)
- Port local : **3020**
- Fixtures locales uniquement — **aucun backend**

## Runtime profile (Product local)

Persistance locale : `app/.env.local` (gitignored). Contrat versionné : `app/.env.example`.

Next.js 15 charge `.env.local` automatiquement pour `npm run dev` et `npm start` (server-side). Aucun export shell manuel n'est requis.

```bash
cp .env.example .env.local   # puis renseigner le profil Product local
npm run preflight:runtime    # fail-closed avant parcours produit
npm run build && npm start   # start exécute le preflight automatiquement
```

`SFIA_STUDIO_CURSOR_REAL` reste **OFF by default** dans Git. Ne jamais committer `=1`.
`SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` est **TEMPORARY WITH EXIT**.

`tsx` et `@next/env` sont des **dependencies runtime** (pas seulement dev) : `npm start` → `preflight:runtime` doit fonctionner après `npm ci --omit=dev`.

`npm run start:skip-preflight` n'est **pas** le démarrage Product normal — uniquement diagnostic / récupération opérateur explicite.

## Scripts

```bash
npm install
npm run dev          # http://127.0.0.1:3020
npm run preflight:runtime
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
npm start            # preflight:runtime && next start (chemin Product nominal)
# npm run start:skip-preflight  # diagnostic only — NOT Product normal start
```

## Routes P0

| Écran Figma | Route |
|-------------|-------|
| P0-01C Vue synthèse | `/synthese` (hub, redirect depuis `/`) |
| P0-00C Nouvelle demande | `/nouvelle-demande` |
| P0-02C Cycle actif | `/cycle-actif` |
| P0-03C Décision Morris | `/decision` |

## Contraintes P0

- **Pas** de secrets commités, ni `NEXT_PUBLIC_*` pour les clés SFIA server-owned
- Actions Git/Cursor **simulées** hors profil REAL local explicite
- `Recommendation` (copilot) ≠ `MorrisDecision` (gate humain)
- Onglet **Preuves** et gear rail : désactivés (simulation)
- Captures E2E 1440×1024 → `../../.tmp-sfia-review/screenshots/`
