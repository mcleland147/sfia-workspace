# QA-G4 Post-Merge Report — INC-02

**Date :** 2026-07-06  
**Branche :** `main`  
**Commit main :** `c1c00b7` — feat: deliver Chantiers360 v2 INC-02 tasks and reserves (#115)  
**PR delivery :** [#115](https://github.com/mcleland147/sfia-workspace/pull/115) — `c1c00b7`  
**Date merge PR #115 :** 2026-07-06 15:26 UTC  
**Standard :** SFIA v2.0 Delivery QA/Test (PR #107) — §6.12 / §13.1  
**Type de cycle :** Contrôle post-merge — pas de nouveau delivery

---

## 1. Branche / commit main

| Élément | Valeur |
|---------|--------|
| Branche | `main` |
| HEAD | `c1c00b7` |
| Synchronisation | `git pull --ff-only` depuis `e28b82a` |
| Artefacts INC-02 | `app/`, `07-delivery-inc-02/`, `08-qa-test/inc-02/` — présents |

## 2. PR #115 / commit merge

| Élément | Valeur |
|---------|--------|
| PR | #115 |
| Titre | feat: deliver Chantiers360 v2 INC-02 tasks and reserves |
| Merge commit | `c1c00b7` |
| Merged at | 2026-07-06T15:26:29Z |

## 3. Périmètre INC-02 confirmé

| Livrable | Statut |
|----------|--------|
| US-06 — ajout tâche (libellé obligatoire, défaut À faire) | ✅ |
| US-07 — statuts tâche À faire / En cours / Terminée ; Terminée visible | ✅ |
| US-08 — ajout réserve (description obligatoire, défaut Ouverte) | ✅ |
| US-09 — statuts réserve Ouverte / En cours de traitement / Levée ; Levée visible | ✅ |
| Tables `taches`, `reserves` | ✅ migration `0001_tasks_reserves.sql` |
| Onglets Tâches / Réserves actifs sur fiche chantier | ✅ |
| Tests Playwright | ✅ `e2e/inc-02.spec.ts` (4) + régression `inc-01.spec.ts` (4) |
| Rapports delivery / QA INC-02 | ✅ `07-delivery-inc-02/`, `08-qa-test/inc-02/` |

## 4. Hors scope confirmé

| Exclusion | Statut |
|-----------|--------|
| INC-03 jalons fonctionnels | ✅ Non lancé — onglet désactivé |
| INC-04 comptes rendus | ✅ Non livré — onglet désactivé |
| INC-05 prochaines actions | ✅ Absent |
| Auth / espace client | ✅ Absent |
| Devis / facturation / compta | ✅ Absent |
| Refonte dashboard | ✅ Absente |
| `03-backlog/` / `04-design/` / captures | ✅ Non modifiés |
| Chantiers360 V0 | ✅ Non consulté |
| Notion / CMP | ✅ Non modifié |
| **GO INC-03** | ❌ **Non accordé** |

## 5. Commandes exécutées et résultats

Répertoire : `projects/chantiers360-v2/app`  
Environnement : post-merge `main` @ `c1c00b7`

| Commande | Résultat | Détail |
|----------|----------|--------|
| `npm run lint` | ✅ PASS | 2 warnings `react-hooks/exhaustive-deps` (non bloquants) |
| `npm run build` | ✅ PASS | Next.js 15.5.20 — routes `/`, `/chantiers/nouveau`, `/chantiers/[id]` |
| `npm run db:test:up` | ✅ PASS | Container `chantiers360-v2-test-db` healthy (port 5433) |
| `npm run db:test:migrate` | ✅ PASS | Migrations `0000_initial` + `0001_tasks_reserves` |
| `npm run test:e2e` | ✅ PASS | **8 passed** (9.5s) |

## 6. Résultat E2E post-merge

```
Running 8 tests using 1 worker

  ✓  US-02 — liste vide et CTA création
  ✓  US-01 — création chantier et champs obligatoires
  ✓  US-03 — fiche chantier, sections INC-02 actives
  ✓  US-04 — modification des statuts sur fiche et liste
  ✓  US-06 — ajouter une tâche avec statut À faire
  ✓  US-07 — modifier le statut d'une tâche
  ✓  US-08 — ajouter une réserve avec statut Ouverte
  ✓  US-09 — modifier le statut d'une réserve

  8 passed (9.5s)
```

**Conclusion E2E post-merge :** comportement INC-02 validé sur `main` — régression INC-01 OK.

## 7. Réserves restantes

| # | Réserve | Gravité | Statut post-merge |
|---|---------|---------|-------------------|
| R-QA-02 | Backlog statut chantier | — | **Levée** (PR #114) |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | Mineure | **Ouverte** — inchangée |
| R-QA-04 | Panneaux dashboard droite mockés | Mineure | **Ouverte** — inchangée |
| R-QA-05 | Port 3000 occupé — `test:e2e:full` | Environnementale | **Ouverte** — non bloquante ce cycle (`test:e2e` OK) |

## 8. Nouvelles réserves éventuelles

| # | Réserve | Statut |
|---|---------|--------|
| — | Aucune nouvelle réserve bloquante fonctionnelle identifiée | — |

**Note technique mineure :** warnings ESLint `exhaustive-deps` sur `TaskStatusSelector` / `ReserveStatusSelector` — non bloquants, hors périmètre QA-G4.

## 9. Verdict QA-G4

### **QA-G4 OK WITH RESERVES**

| Critère | Statut |
|---------|--------|
| Merge PR #115 sur `main` confirmé | ✅ |
| Périmètre INC-02 intact post-merge | ✅ |
| Hors scope respecté | ✅ |
| lint / build post-merge | ✅ PASS |
| E2E US-06 à US-09 + régression INC-01 | ✅ **8 passed** |
| Réserves héritées R-QA-03 à R-QA-05 | Acceptées — inchangées |
| Aucune régression bloquante | ✅ |
| INC-03 non lancé | ✅ |

## 10. Décision Morris attendue

| # | Question | Statut |
|---|----------|--------|
| D1 | Clôture INC-02 ? | ⏳ Décision Morris — cycle séparé |
| D2 | GO INC-03 ? | ❌ **Non accordé** — décision séparée après clôture |
| D3 | Capitalisation post-INC-02 ? | ⏳ Optionnel — cycle séparé |

## 11. Confirmation INC-03 non lancé

Aucun dossier `07-delivery-inc-03/` ni `08-qa-test/inc-03/`. Onglets Jalons et Comptes rendus restent placeholders.

---

**Documents liés :** `2026-07-06-qa-readiness.md`, `qa-reserves.md`, `../../07-delivery-inc-02/2026-07-06-delivery-inc-02-validation-report.md`
