# QA-G4 Post-Merge Report — INC-03

**Date :** 2026-07-06  
**Branche :** `main`  
**Commit main :** `ebece11` — feat: deliver Chantiers360 v2 INC-03 simple milestones (#119)  
**PR delivery :** [#119](https://github.com/mcleland147/sfia-workspace/pull/119) — `ebece11`  
**Date merge PR #119 :** 2026-07-06 16:49 UTC  
**Standard :** SFIA v2.0 Delivery QA/Test (PR #107) — §6.12 / §13.1  
**Type de cycle :** Contrôle post-merge — pas de nouveau delivery

---

## 1. Branche / commit main

| Élément | Valeur |
|---------|--------|
| Branche | `main` / `origin/main` |
| HEAD | `ebece11` |
| Référence locale | `main` local divergent (`ec073f6`) — vérification sur `origin/main @ ebece11` |
| Artefacts INC-03 | `app/`, `07-delivery-inc-03/`, `08-qa-test/inc-03/` — présents |

## 2. PR #119 / commit merge

| Élément | Valeur |
|---------|--------|
| PR | #119 |
| Titre | feat: deliver Chantiers360 v2 INC-03 simple milestones |
| Merge commit | `ebece11` |
| Merged at | 2026-07-06T16:49:58Z |

## 3. Périmètre INC-03 confirmé

| Livrable | Statut |
|----------|--------|
| US-10 — champs planning simples optionnels | ✅ |
| US-10 — enregistrement via onglet Jalons | ✅ |
| US-10 — résumé Planning simple visible après enregistrement | ✅ |
| US-10 — modification jalon existant | ✅ |
| Migration `0002_simple_milestones.sql` — `upcoming_milestone` | ✅ |
| Champs planning sur table `chantiers` | ✅ |
| Onglet Jalons actif | ✅ |
| Tests Playwright | ✅ `e2e/inc-03.spec.ts` (2) + régression INC-01 (4) + INC-02 (4) |
| Rapports delivery / QA INC-03 | ✅ `07-delivery-inc-03/`, `08-qa-test/inc-03/` |

## 4. Hors scope confirmé

| Exclusion | Statut |
|-----------|--------|
| INC-04 comptes rendus | ✅ Non livré — onglet désactivé |
| INC-05 prochaines actions | ✅ Absent |
| Planning avancé / Gantt / dépendances / ressources | ✅ Absent |
| Auth / espace client | ✅ Absent |
| Devis / facturation / compta | ✅ Absent |
| Refonte dashboard | ✅ Absente |
| `03-backlog/` / `04-design/` / captures | ✅ Non modifiés |
| Chantiers360 V0 | ✅ Non consulté |
| Notion / CMP | ✅ Non modifié |
| **GO INC-04** | ❌ **Non accordé** |

## 5. Commandes exécutées et résultats

Répertoire : `projects/chantiers360-v2/app`  
Environnement : post-merge `origin/main` @ `ebece11`

| Commande | Résultat | Détail |
|----------|----------|--------|
| `npm run lint` | ✅ PASS | 2 warnings `react-hooks/exhaustive-deps` (non bloquants) |
| `npm run build` | ✅ PASS | Next.js 15.5.20 — routes `/`, `/chantiers/nouveau`, `/chantiers/[id]` |
| `npm run db:test:up` | ✅ PASS | Container `chantiers360-v2-test-db` healthy (port 5433) |
| `npm run db:test:migrate` | ✅ PASS | Migrations `0000` + `0001` + `0002_simple_milestones` |
| `npm run test:e2e` | ✅ PASS | **10 passed** (10.3s) |

## 6. Résultat E2E post-merge

```
Running 10 tests using 1 worker

  ✓  US-02 — liste vide et CTA création
  ✓  US-01 — création chantier et champs obligatoires
  ✓  US-03 — fiche chantier, sections actives (Jalons actif)
  ✓  US-04 — modification des statuts sur fiche et liste
  ✓  US-06 — ajouter une tâche avec statut À faire
  ✓  US-07 — modifier le statut d'une tâche
  ✓  US-08 — ajouter une réserve avec statut Ouverte
  ✓  US-09 — modifier le statut d'une réserve
  ✓  US-10 — renseigner des jalons simples optionnels
  ✓  US-10 — modifier des jalons simples existants

  10 passed (10.3s)
```

**Conclusion E2E post-merge :** comportement INC-03 validé sur `main` — régression INC-01 + INC-02 OK.

## 7. Réserves restantes

| # | Réserve | Gravité | Statut post-merge |
|---|---------|---------|-------------------|
| R-QA-02 | Backlog statut chantier | — | **Levée** (PR #114) |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | Mineure | **Ouverte** — inchangée |
| R-QA-04 | Panneaux dashboard droite mockés | Mineure | **Ouverte** — inchangée |
| R-QA-05 | Port 3000 occupé — `test:e2e:full` | Environnementale | **Ouverte** — `test:e2e` 10 passed ce cycle |

## 8. Nouvelles réserves éventuelles

| # | Réserve | Statut |
|---|---------|--------|
| — | Aucune nouvelle réserve bloquante fonctionnelle identifiée | — |

**Note technique mineure :** warnings ESLint `exhaustive-deps` sur `TaskStatusSelector` / `ReserveStatusSelector` — non bloquants, hérités INC-02.

## 9. Verdict QA-G4

### **QA-G4 OK WITH RESERVES**

| Critère | Statut |
|---------|--------|
| Merge PR #119 sur `main` confirmé | ✅ |
| Périmètre INC-03 intact post-merge | ✅ |
| Hors scope respecté | ✅ |
| lint / build post-merge | ✅ PASS |
| E2E US-10 + régression INC-01 + INC-02 | ✅ **10 passed** |
| Réserves héritées R-QA-03 à R-QA-05 | Acceptées — inchangées |
| Aucune régression bloquante | ✅ |
| INC-04 non lancé | ✅ |

## 10. Décision Morris attendue

| # | Question | Statut |
|---|----------|--------|
| D1 | Clôture INC-03 ? | ⏳ Décision Morris — cycle séparé |
| D2 | GO INC-04 ? | ❌ **Non accordé** — décision séparée après clôture |
| D3 | Capitalisation post-INC-03 ? | ⏳ Optionnel — cycle séparé |

## 11. Confirmation INC-04 non lancé

Aucun dossier `07-delivery-inc-04/` ni `08-qa-test/inc-04/`. Onglet Comptes rendus reste placeholder INC-04.

---

**Documents liés :** `qa-readiness.md`, `qa-reserves.md`, `../../07-delivery-inc-03/delivery-inc-03-validation-report.md`
