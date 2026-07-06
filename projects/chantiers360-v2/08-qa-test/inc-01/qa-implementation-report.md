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
| `app/docker-compose.test.yml` | PostgreSQL test reproductible (port 5433) |

## Scripts ajoutés (`package.json`)

| Script | Commande |
|--------|----------|
| `db:test:up` | `docker compose -f docker-compose.test.yml up -d --wait` |
| `db:test:down` | `docker compose down` (conserve volume) |
| `db:test:down:clean` | `docker compose down -v` (destructif) |
| `db:test:migrate` | Migrations sur DB test port 5433 |
| `test:e2e` | `playwright test` |
| `test:e2e:ui` | `playwright test --ui` |
| `test:e2e:full` | `db:test:up` + `db:test:migrate` + `test:e2e` |

## Dépendances dev

- `@playwright/test` ^1.52.0
- `dotenv` ^16.5.0

## Config test

- Navigateur : Chromium (Desktop Chrome profile)
- Base URL : `http://127.0.0.1:3000`
- Workers : 1 (DB partagée)
- PostgreSQL : Docker `postgres:16-alpine` — `localhost:5433`
- `webServer` : `npm run dev` — timeout 180s (premier démarrage)

## Helpers DB

- `resetChantiers()` — `TRUNCATE TABLE chantiers RESTART IDENTITY CASCADE`
- DB via `TEST_DATABASE_URL` ou `DATABASE_URL` (`.env.test`)

## Corrections mineures tests (strict mode Playwright)

| Test | Correction |
|------|------------|
| US-03 | `getByText('INC-02').first()` — 2 placeholders INC-02 |
| US-04 | Assertion statut sur `header dd` — évite collision avec `<option>` |

## Limites connues

| Limite | Détail |
|--------|--------|
| Docker requis | `db:test:up` nécessite Docker |
| Premier `test:e2e:full` | Peut dépasser 120s au cold start Next — timeout webServer 180s |
| Soumission formulaire vide | Validation HTML5 `required` |
| Statut « En pause » | Backlog US-04 vs « En retard » (D-INC01-4) |
| Panneaux dashboard droite | Mock spike — hors assertions INC-01 |
