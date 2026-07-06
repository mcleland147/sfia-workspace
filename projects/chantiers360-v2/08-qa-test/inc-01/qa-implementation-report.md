# QA Implementation Report — INC-01

**Date :** 2026-07-06  
**Branche :** `delivery/chantiers360-v2-inc-01`

## Fichiers tests ajoutés

| Fichier | Rôle |
|---------|------|
| `app/e2e/inc-01.spec.ts` | 4 scénarios E2E US-01 à US-04 |
| `app/e2e/helpers/db.ts` | Reset table `chantiers` |
| `app/playwright.config.ts` | Config Playwright + webServer Next.js |
| `app/.env.test.example` | Template `TEST_DATABASE_URL` |

## Scripts ajoutés (`package.json`)

| Script | Commande |
|--------|----------|
| `test:e2e` | `playwright test` |
| `test:e2e:ui` | `playwright test --ui` |

## Dépendances dev

- `@playwright/test` ^1.52.0
- `dotenv` ^16.5.0

## Config test

- Navigateur : Chromium (Desktop Chrome profile)
- Base URL : `http://127.0.0.1:3000`
- Workers : 1 (DB partagée)
- `webServer` : `npm run dev` si `DATABASE_URL` / `TEST_DATABASE_URL` défini

## Helpers DB

- `resetChantiers()` — `TRUNCATE TABLE chantiers RESTART IDENTITY CASCADE`
- Requiert PostgreSQL accessible via `TEST_DATABASE_URL` ou `DATABASE_URL`

## Limites connues

| Limite | Détail |
|--------|--------|
| PostgreSQL requis | Tests E2E ignorés si aucune URL DB |
| Soumission formulaire vide | Validation HTML5 `required` — pas de test message serveur |
| Statut « En pause » | Backlog US-04 vs implémentation « En retard » (D-INC01-4) |
| Panneaux dashboard droite | Mock spike — hors assertions INC-01 |
