# QA Readiness — INC-01 (QA-G3)

**Date :** 2026-07-06  
**Branche :** `delivery/chantiers360-v2-inc-01`  
**Standard :** SFIA v2.0 Delivery QA/Test (PR #107)

## Checklist QA-G3

| # | Critère | Statut |
|---|---------|--------|
| 1 | `npm run lint` OK | ✅ |
| 2 | `npm run build` OK | ✅ |
| 3 | Tests automatisés INC-01 implémentés (QA-G2) | ✅ Playwright `e2e/inc-01.spec.ts` |
| 4 | Tests exécutés — résultat documenté | ⚠️ 4 skipped (DB absente) |
| 5 | Scénarios recette métier US-01 à US-04 | ✅ `test-scenarios.md` |
| 6 | Réserves documentées | ✅ `qa-reserves.md` |
| 7 | Morris valide GO QA | ⏳ **En attente** |

## Couverture US

| US | Scénario | Test E2E | Exécuté |
|----|----------|----------|----------|
| US-01 | Création chantier | ✅ | ⏳ |
| US-02 | Liste vide | ✅ | ⏳ |
| US-03 | Fiche chantier | ✅ | ⏳ |
| US-04 | Modification statut | ✅ | ⏳ |

## Couverture acceptance criteria

| AC clé | Couvert |
|--------|---------|
| Champs obligatoires création | ✅ (required HTML + E2E création) |
| Statut initial À démarrer | ✅ |
| Liste vide + CTA | ✅ |
| Fiche + retour dashboard | ✅ |
| 4 statuts + visibilité liste/fiche | ✅ (En retard vs En pause — réserve R-QA-02) |
| Terminé consultable | ✅ |
| Placeholders INC-02+ non fonctionnels | ✅ |

## Résultat tests (cycle Cursor)

- lint : PASS
- build : PASS
- test:e2e : 4 skipped (PostgreSQL requis)

## Verdict proposé

### **GO QA WITH RESERVES**

Tests automatisés livrés et documentés ; exécution E2E à confirmer localement (R-QA-01).

## PR readiness INC-01

**INTERDITE** tant que Morris n'a pas validé QA-G3 (GO QA ou GO QA WITH RESERVES explicite).

## Décision Morris attendue

- [ ] **GO QA** — après exécution locale `npm run test:e2e` OK
- [ ] **GO QA WITH RESERVES** — acceptation R-QA-01
- [ ] **NO-GO QA** — retour delivery
- [ ] **GO PR readiness INC-01** — distinct, après GO QA

> Tests passants ≠ validation Morris. Morris valide les **preuves**.
