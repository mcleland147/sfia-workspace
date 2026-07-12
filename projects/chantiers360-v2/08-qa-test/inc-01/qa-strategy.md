# QA Strategy — INC-01 Chantiers360 v2

**Projet :** Chantiers360 v2  
**Incrément :** INC-01 — Socle chantier (US-01 à US-04)  
**Branche :** `delivery/chantiers360-v2-inc-01`  
**Standard :** `sfia-v2-delivery-qa-test-standard.md` (PR #107)

## Objectif QA INC-01

Valider par preuves automatisées et documentées que le socle chantier INC-01 respecte les acceptance criteria US-01 à US-04 avant toute PR readiness.

## Rôles

| Rôle | Charge |
|------|--------|
| **QA/Test** | Stratégie, scénarios, tests Playwright, exécution, rapports, réserves |
| **Morris** | Valide les preuves QA (QA-G3) — ne déroule pas les tests |
| **Cursor** | Implémentation bornée L3 |

## Périmètre

| Inclus | Exclu |
|--------|-------|
| US-01 création chantier | INC-02+ (tâches, réserves) |
| US-02 liste chantiers | INC-03 jalons |
| US-03 fiche chantier | INC-04 comptes rendus |
| US-04 modification statut | Auth, espace client, devis/facturation |
| Placeholders INC-02+ (non fonctionnels) | Chantiers360 V0 |

## Outillage

| Couche | Outil |
|--------|-------|
| Tests techniques | `npm run lint`, `npm run build` |
| Recette métier automatisée | **Playwright** E2E (`e2e/inc-01.spec.ts`) |
| App | Next.js 15 App Router + server actions |
| DB test | PostgreSQL — `TEST_DATABASE_URL` (voir `.env.test.example`) |
| Infra reproductible | `docker-compose.test.yml` — `npm run db:test:up` (port **5433**) |

## DB test

- URL recommandée : `postgresql://postgres:postgres@localhost:5432/chantiers360_v2_test`
- Reset avant chaque test : `TRUNCATE chantiers`
- Migrations : `DATABASE_URL=$TEST_DATABASE_URL npm run db:migrate`
- **Contrainte locale :** Docker recommandé — `npm run test:e2e:full`

## Niveaux de validation

| Niveau | Application INC-01 |
|--------|-------------------|
| Tests techniques | lint + build |
| Tests automatisés métier | Playwright par US |
| Recette métier automatisée | Parcours E2E bout-en-bout |
| Validation Morris | Lecture rapports QA — GO/NO-GO QA-G3 |

## Gates (QA-G0 à QA-G3)

| Gate | Statut INC-01 |
|------|---------------|
| QA-G0 — besoin testable | ✅ Pressenti au bootstrap |
| QA-G1 — architecture testable | ✅ Next.js + PostgreSQL + Drizzle |
| QA-G2 — tests implémentés | ✅ Playwright `e2e/inc-01.spec.ts` |
| QA-G3 — QA readiness | ⏳ Verdict proposé dans `2026-07-06-qa-readiness.md` — décision Morris |
