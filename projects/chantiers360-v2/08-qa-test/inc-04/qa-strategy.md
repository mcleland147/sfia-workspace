# QA Strategy — INC-04 Chantiers360 v2

**Incrément :** INC-04 — Comptes rendus rapides (US-11)  
**Branche :** `delivery/chantiers360-v2-inc-04`  
**Standard :** `sfia-v2-delivery-qa-test-standard.md`

## Objectif QA INC-04

Valider par preuves automatisées que la section Comptes rendus respecte les AC US-11 avant PR readiness.

## Périmètre

| Inclus | Exclu |
|--------|-------|
| US-11 | INC-05 prochaines actions |
| Régression INC-01 + INC-02 + INC-03 | Auth, V0, Notion/CMP |
| CR texte simple | PDF, signature, pièces jointes, IA |

## Outillage

| Couche | Outil |
|--------|-------|
| Technique | lint, build |
| Métier | Playwright `inc-04.spec.ts` + régression `inc-01` + `inc-02` + `inc-03` |
| DB test | Docker `docker-compose.test.yml` port 5433 |

## Gates

| Gate | Statut |
|------|--------|
| QA-G2 — tests implémentés | ✅ |
| QA-G3 — exécution + Morris | ⏳ En attente |
