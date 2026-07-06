# QA Readiness — INC-01 (QA-G3)

**Date :** 2026-07-06  
**Branche :** `delivery/chantiers360-v2-inc-01`  
**Standard :** SFIA v2.0 Delivery QA/Test (PR #107)  
**Runbook E2E local :** `local-e2e-runbook.md`

## Checklist QA-G3

| # | Critère | Statut |
|---|---------|--------|
| 1 | `npm run lint` OK | ✅ |
| 2 | `npm run build` OK | ✅ |
| 3 | Tests automatisés INC-01 implémentés (QA-G2) | ✅ |
| 4 | Tests exécutés — résultat documenté | ✅ **4 passed** |
| 5 | Scénarios recette métier US-01 à US-04 | ✅ |
| 6 | Réserves documentées | ✅ R-QA-01 levée ; mineures R-QA-02 à 04 |
| 7 | Morris valide GO QA | ⏳ **En attente** |

## Couverture US

| US | Scénario | Test E2E | Exécuté |
|----|----------|----------|---------|
| US-01 | Création chantier | ✅ | ✅ |
| US-02 | Liste vide | ✅ | ✅ |
| US-03 | Fiche chantier | ✅ | ✅ |
| US-04 | Modification statut | ✅ | ✅ |

## Infrastructure test

PostgreSQL reproductible : `docker-compose.test.yml` + `npm run test:e2e:full`

## Résultat tests

- lint : PASS
- build : PASS
- test:e2e : **4 passed** (PostgreSQL Docker port 5433)

## Verdict proposé

### **GO QA**

Réserves mineures R-QA-02 à R-QA-04 documentées — non bloquantes.

Alternative Morris : **GO QA WITH RESERVES** si les mineures doivent figurer explicitement dans la PR.

## PR readiness INC-01

**INTERDITE** tant que Morris n'a pas validé QA-G3.

## Décision Morris attendue

- [ ] **GO QA**
- [ ] **GO QA WITH RESERVES**
- [ ] **NO-GO QA**
- [ ] **GO PR readiness INC-01** — uniquement après GO QA

> Tests passants ≠ validation Morris. Morris valide les **preuves**.
