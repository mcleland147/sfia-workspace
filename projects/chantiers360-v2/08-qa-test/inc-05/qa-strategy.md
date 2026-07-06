# QA Strategy — INC-05 Chantiers360 v2

**Incrément :** INC-05 — Prochaines actions dérivées (US-12, US-13)  
**Branche :** `delivery/chantiers360-v2-inc-05`  
**Standard :** `sfia-v2-delivery-qa-test-standard.md`

## Objectif QA INC-05

Valider par preuves automatisées que la vue prochaines actions respecte les AC US-12 et US-13 avant PR readiness.

## Périmètre

| Inclus | Exclu |
|--------|-------|
| US-12, US-13 | Saisie manuelle d'actions |
| Régression INC-01 à INC-04 | Auth, V0, Notion/CMP |
| Navigation `?tab=` | IA, notifications, agenda avancé |

## Outillage

| Couche | Outil |
|--------|-------|
| Technique | lint, build |
| Métier | Playwright `inc-05.spec.ts` + régression `inc-01` à `inc-04` |
| DB test | Docker `docker-compose.test.yml` port 5433 |

## Gates

| Gate | Statut |
|------|--------|
| QA-G2 — tests implémentés | ✅ |
| QA-G3 — exécution + Morris | ⏳ En attente |
