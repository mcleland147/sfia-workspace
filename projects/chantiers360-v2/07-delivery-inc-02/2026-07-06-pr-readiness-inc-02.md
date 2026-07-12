# PR Readiness — Chantiers360 v2 INC-02

**Projet :** Chantiers360 v2  
**Branche :** `delivery/chantiers360-v2-inc-02`  
**Date :** 2026-07-06  
**Base :** `main` @ `e28b82a` (PR #114)

## 1. Git

| Élément | Valeur |
|---------|--------|
| Branche | `delivery/chantiers360-v2-inc-02` |
| HEAD delivery | `8a91a03` — `feat: deliver Chantiers360 v2 INC-02 tasks and reserves` |
| HEAD PR readiness | commit courant sur branche |
| Merge-base `main` | `e28b82a` |
| Fichiers vs `main` | 31 fichiers (+ app INC-02, docs delivery, docs QA) |

## 2. Résumé INC-02

Suivi opérationnel **tâches et réserves** depuis la fiche chantier : persistance PostgreSQL (tables `taches`, `reserves`), server actions, onglets Tâches / Réserves actifs (US-06 à US-09). Régression INC-01 conservée.

## 3. Périmètre livré (US-06 à US-09)

| US | Livrable |
|----|----------|
| US-06 | Ajout tâche — libellé obligatoire, statut par défaut **À faire** |
| US-07 | Modification statut tâche — À faire / En cours / Terminée ; tâche Terminée reste visible |
| US-08 | Ajout réserve — description obligatoire, statut par défaut **Ouverte** |
| US-09 | Modification statut réserve — Ouverte / En cours de traitement / Levée ; réserve Levée reste visible |

## 4. Hors périmètre confirmé

| Élément | Statut |
|---------|--------|
| Jalons / planning simple (INC-03) | ❌ Onglet désactivé |
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
| `app/lib/db/schema.ts` | Tables `taches`, `reserves` |
| `app/drizzle/0001_tasks_reserves.sql` | Migration |
| `app/lib/taches/` | Types, queries, actions |
| `app/lib/reserves/` | Types, queries, actions |
| `app/components/chantier/` | Onglets, sections Tâches / Réserves, formulaires |
| `app/app/chantiers/[id]/page.tsx` | Charge tâches + réserves |
| `app/e2e/inc-02.spec.ts` | 4 scénarios US-06 à US-09 |
| `app/e2e/inc-01.spec.ts` | US-03 adapté (sections INC-02 actives) |
| `07-delivery-inc-02/` | Rapports delivery + ce document |
| `08-qa-test/inc-02/` | Artefacts QA-G2 / QA-G3 |

## 6. Migration

| Élément | Détail |
|---------|--------|
| Fichier | `app/drizzle/0001_tasks_reserves.sql` |
| Tables | `taches`, `reserves` |
| FK | `chantier_id` → `chantiers(id)` **ON DELETE CASCADE** |
| Défauts | Tâche : `À faire` ; Réserve : `Ouverte` |

## 7. Tests

| Fichier | Couverture |
|---------|------------|
| `e2e/inc-02.spec.ts` | US-06, US-07, US-08, US-09 |
| `e2e/inc-01.spec.ts` | Régression US-01 à US-04 (US-03 adapté) |

## 8. QA-G3 — Décision Morris

| Décision | Statut |
|----------|--------|
| **GO QA WITH RESERVES — INC-02** | ✅ **Morris** (2026-07-06) |
| **GO PR readiness INC-02** | ⏳ Décision séparée — hors scope de ce document |
| Nouvelle réserve bloquante INC-02 | Aucune |

## 9. Résultats commandes (cycle PR readiness)

| Commande | Résultat |
|----------|----------|
| `npm run lint` | ✅ PASS (2 warnings `react-hooks/exhaustive-deps` — non bloquants) |
| `npm run build` | ✅ PASS |
| `npm run db:test:up` | ✅ PASS |
| `npm run db:test:migrate` | ✅ PASS |
| `npm run test:e2e` | ✅ **8 passed** (8.8s) |

## 10. Réserves

| ID | Réserve | Gravité | Statut |
|----|---------|---------|--------|
| R-QA-02 | Backlog statut chantier | — | **Levée** (PR #114) |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | Mineure | Ouverte — héritée INC-01 |
| R-QA-04 | Panneaux dashboard droite mockés | Mineure | Ouverte — héritée INC-01 |
| R-QA-05 | Port 3000 occupé — `test:e2e:full` | Environnementale | Ouverte — non bloquante ce cycle |

Aucune nouvelle réserve INC-02 ouverte.

## 11. Garde-fous

- INC-02 uniquement — US-06 à US-09
- Pas d'INC-03 / INC-04 / INC-05
- Pas d'auth, pas de V0, Notion, CMP
- Pas de modification backlog / design / captures
- Chemins protégés méthode SFIA non touchés

## 12. Proposition titre PR

```
feat: deliver Chantiers360 v2 INC-02 tasks and reserves
```

## 13. Proposition description PR

```markdown
## Summary

- Deliver **INC-02** — tasks and reserves on chantier detail page (US-06 to US-09).
- PostgreSQL tables `taches` and `reserves` with Drizzle migration `0001_tasks_reserves.sql`.
- Active Tâches / Réserves tabs on `/chantiers/[id]`; Jalons and CR remain placeholders (INC-03/04).
- **QA/Test:** Playwright E2E — 8 passed (4 INC-01 regression + 4 INC-02).
- **Morris:** GO QA WITH RESERVES — INC-02.

## Scope (INC-02)

- US-06 Add task (label required, default À faire)
- US-07 Update task status (À faire, En cours, Terminée)
- US-08 Add reserve (description required, default Ouverte)
- US-09 Update reserve status (Ouverte, En cours de traitement, Levée)

## Out of scope

- INC-03 milestones, INC-04 reports, INC-05 next actions
- Auth, client portal, billing
- Dashboard refactor
- Backlog / design / captures unchanged
- Chantiers360 V0 not consulted

## QA reserves (inherited — accepted)

- R-QA-03: empty create form — HTML5 required only
- R-QA-04: right dashboard panels mocked (spike)
- R-QA-05: port 3000 conflict — use `test:e2e:full` or port 3001 workaround

## Test plan

- [ ] Review `07-delivery-inc-02/` and `08-qa-test/inc-02/`
- [ ] `cd app && npm run test:e2e:full` (Docker required)
- [ ] Manual walkthrough: add task, change statuses, add reserve, change reserve statuses
- [ ] Confirm migration applied on review environment

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

Morris **GO QA WITH RESERVES** enregistré. Périmètre US-06 à US-09 livré, 8 E2E passed, réserves héritées R-QA-03 à R-QA-05 documentées. Push / création PR = décision Morris séparée.

---

**Prochaine étape :** décision Morris — **GO push + PR** ou corrections avant PR.
