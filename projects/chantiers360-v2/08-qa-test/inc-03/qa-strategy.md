# QA Strategy — INC-03 Chantiers360 v2

**Incrément :** INC-03 — Jalons simples (US-10)  
**Branche :** `delivery/chantiers360-v2-inc-03`  
**Standard :** `sfia-v2-delivery-qa-test-standard.md`

## Objectif QA INC-03

Valider par preuves automatisées que la section Jalons / planning simple respecte les AC US-10 avant PR readiness.

## Périmètre

| Inclus | Exclu |
|--------|-------|
| US-10 | INC-04 CR, INC-05 prochaines actions |
| Régression INC-01 + INC-02 | Auth, V0, Notion/CMP |
| Planning simple uniquement | Gantt, planning avancé |

## Outillage

| Couche | Outil |
|--------|-------|
| Technique | lint, build |
| Métier | Playwright `inc-03.spec.ts` + régression `inc-01` + `inc-02` |
| DB test | Docker `docker-compose.test.yml` port 5433 |

## Gates

| Gate | Statut |
|------|--------|
| QA-G2 — tests implémentés | ✅ |
| QA-G3 — exécution + Morris | ⏳ En attente |
