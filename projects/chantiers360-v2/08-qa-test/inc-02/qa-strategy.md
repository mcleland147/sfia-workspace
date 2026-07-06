# QA Strategy — INC-02 Chantiers360 v2

**Incrément :** INC-02 — Tâches et réserves (US-06 à US-09)  
**Branche :** `delivery/chantiers360-v2-inc-02`  
**Standard :** `sfia-v2-delivery-qa-test-standard.md`

## Objectif QA INC-02

Valider par preuves automatisées que les sections Tâches et Réserves respectent les AC US-06 à US-09 avant PR readiness.

## Périmètre

| Inclus | Exclu |
|--------|-------|
| US-06 à US-09 | INC-03 jalons, INC-04 CR, INC-05 prochaines actions |
| Régression INC-01 (4 tests) | Auth, V0, Notion/CMP |

## Outillage

| Couche | Outil |
|--------|-------|
| Technique | lint, build |
| Métier | Playwright `inc-02.spec.ts` + régression `inc-01.spec.ts` |
| DB test | Docker `docker-compose.test.yml` port 5433 |

## Gates

| Gate | Statut |
|------|--------|
| QA-G2 — tests implémentés | ✅ |
| QA-G3 — exécution + Morris | ⏳ En attente |
