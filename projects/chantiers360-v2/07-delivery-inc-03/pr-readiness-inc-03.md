# PR Readiness — Chantiers360 v2 INC-03

**Projet :** Chantiers360 v2  
**Branche :** `delivery/chantiers360-v2-inc-03`  
**Date :** 2026-07-06  
**Base :** `main` @ `d6bb1b5` (PR #118)

## 1. Git

| Élément | Valeur |
|---------|--------|
| Branche | `delivery/chantiers360-v2-inc-03` |
| HEAD delivery | `2d4d511` — `feat: deliver Chantiers360 v2 INC-03 simple milestones` |
| HEAD PR readiness | commit courant sur branche |
| Merge-base `main` | `d6bb1b5` |
| Fichiers vs `main` | 23 fichiers (+ app INC-03, docs delivery, docs QA) |

## 2. Résumé INC-03

**Planning simple / jalons simples** (US-10) depuis la fiche chantier : champs optionnels sur table `chantiers`, onglet Jalons actif, résumé Planning simple visible. Régression INC-01 + INC-02 conservée.

## 3. Périmètre livré (US-10)

| US | Livrable |
|----|----------|
| US-10 | Date début / fin prévue, prochaine intervention, jalon à venir, commentaire planning — **tous optionnels** |
| US-10 | Enregistrement via formulaire onglet Jalons |
| US-10 | Valeurs visibles sur résumé Planning simple après enregistrement |
| US-10 | Modification d'un jalon existant |

## 4. Hors périmètre confirmé

| Élément | Statut |
|---------|--------|
| Planning avancé / Gantt / dépendances / ressources | ❌ |
| Comptes rendus (INC-04) | ❌ Onglet désactivé |
| Prochaines actions (INC-05) | ❌ |
| Auth / espace client / devis / facturation | ❌ |
| Refonte dashboard | ❌ |
| Chantiers360 V0 | ❌ Non consulté |
| Notion / CMP | ❌ |
| `03-backlog/` / `04-design/` / captures modifiés | ❌ |
| Correction R-QA-03 / R-QA-04 / R-QA-05 | ❌ Hors scope |

## 5. Fichiers créés / modifiés

| Zone | Contenu |
|------|---------|
| `app/lib/db/schema.ts` | `upcomingMilestone` sur `chantiers` |
| `app/drizzle/0002_simple_milestones.sql` | Migration |
| `app/lib/planning/` | Types, queries, actions, format |
| `app/components/chantier/` | `MilestonesSection`, onglet Jalons actif, résumé planning |
| `app/e2e/inc-03.spec.ts` | 2 scénarios US-10 |
| `app/e2e/inc-01.spec.ts` | US-03 adapté (Jalons actif) |
| `07-delivery-inc-03/` | Rapports delivery + ce document |
| `08-qa-test/inc-03/` | Artefacts QA-G2 / QA-G3 |

## 6. Migration

| Élément | Détail |
|---------|--------|
| Fichier | `app/drizzle/0002_simple_milestones.sql` |
| Ajout | `upcoming_milestone` varchar(500) sur `chantiers` |
| Existant INC-01 | `planned_start_date`, `planned_end_date`, `next_intervention_date`, `simple_planning_comment` |
| Modèle | Champs intégrés sur `chantiers` — pas d'entité jalon séparée |

## 7. Tests

| Fichier | Couverture |
|---------|------------|
| `e2e/inc-03.spec.ts` | US-10 — saisie complète + modification |
| `e2e/inc-01.spec.ts` | Régression US-01 à US-04 |
| `e2e/inc-02.spec.ts` | Régression US-06 à US-09 |

## 8. QA-G3 — Décision Morris

| Décision | Statut |
|----------|--------|
| **GO QA WITH RESERVES — INC-03** | ✅ **Morris** (2026-07-06) |
| **GO PR readiness INC-03** | ✅ Documenté — push / PR = décision Morris séparée |
| Nouvelle réserve bloquante INC-03 | Aucune |

## 9. Résultats commandes (cycle PR readiness)

| Commande | Résultat |
|----------|----------|
| `npm run lint` | ✅ PASS (2 warnings `react-hooks/exhaustive-deps` — non bloquants) |
| `npm run build` | ✅ PASS |
| `npm run db:test:up` | ✅ PASS |
| `npm run db:test:migrate` | ✅ PASS |
| `npm run test:e2e` | ✅ **10 passed** (10.1s) |

## 10. Réserves

| ID | Réserve | Gravité | Statut |
|----|---------|---------|--------|
| R-QA-02 | Backlog statut chantier | — | **Levée** (PR #114) |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | Mineure | Ouverte — acceptée |
| R-QA-04 | Panneaux dashboard droite mockés | Mineure | Ouverte — acceptée |
| R-QA-05 | Port 3000 occupé — `test:e2e:full` | Environnementale | Ouverte — non bloquante ce cycle |

Aucune nouvelle réserve INC-03 ouverte.

## 11. Garde-fous

- INC-03 uniquement — US-10
- Pas d'INC-04 / INC-05
- Pas de planning avancé, Gantt, auth, V0, Notion, CMP
- Pas de modification backlog / design / captures
- Chemins protégés méthode SFIA non touchés

## 12. Proposition titre PR

```
feat: deliver Chantiers360 v2 INC-03 simple milestones
```

## 13. Proposition description PR

```markdown
## Summary

- Deliver **INC-03** — simple milestones / planning on chantier detail page (US-10).
- Add `upcoming_milestone` column via migration `0002_simple_milestones.sql`.
- Active Jalons tab on `/chantiers/[id]`; Comptes rendus remains placeholder (INC-04).
- **QA/Test:** Playwright E2E — 10 passed (4 INC-01 + 4 INC-02 + 2 INC-03).
- **Morris:** GO QA WITH RESERVES — INC-03.

## Scope (INC-03)

- US-10 Optional fields: planned start/end dates, next intervention, upcoming milestone, planning comment
- Edit via Jalons tab; summary visible on fiche after save

## Out of scope

- INC-04 reports, INC-05 next actions
- Advanced planning, Gantt, dependencies, resources
- Auth, client portal, billing
- Dashboard refactor
- Backlog / design / captures unchanged
- Chantiers360 V0 not consulted

## QA reserves (inherited — accepted)

- R-QA-03: empty create form — HTML5 required only
- R-QA-04: right dashboard panels mocked (spike)
- R-QA-05: port 3000 conflict — use `test:e2e:full` or port 3001 workaround

## Test plan

- [ ] Review `07-delivery-inc-03/` and `08-qa-test/inc-03/`
- [ ] `cd app && npm run test:e2e:full` (Docker required)
- [ ] Manual walkthrough: fill Jalons tab, verify Planning simple summary updates
- [ ] Confirm migration `0002` applied on review environment

## Setup

```bash
cd projects/chantiers360-v2/app
cp .env.test.example .env.test
npm run db:test:up && npm run db:test:migrate
npm run test:e2e
```
```

## 14. Verdict

### **READY WITH RESERVES**

Morris **GO QA WITH RESERVES** enregistré. Périmètre US-10 livré, 10 E2E passed, réserves héritées R-QA-03 à R-QA-05 documentées. Push / création PR = décision Morris séparée.

---

**Prochaine étape :** décision Morris — **GO push + PR** ou corrections avant PR.
