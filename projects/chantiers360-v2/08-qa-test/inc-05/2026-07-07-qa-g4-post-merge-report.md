# QA-G4 Post-Merge Report — INC-05

**Date :** 2026-07-07  
**Branche :** `main`  
**Commit main :** `6fe91df` — feat: deliver Chantiers360 v2 INC-05 derived next actions (#125)  
**PR delivery :** [#125](https://github.com/mcleland147/sfia-workspace/pull/125) — `6fe91df`  
**Date merge PR #125 :** 2026-07-07 04:10 UTC  
**Standard :** SFIA v2.0 Delivery QA/Test (PR #107) — §6.12 / §13.1  
**Type de cycle :** Contrôle post-merge — pas de nouveau delivery

---

## 1. Branche / commit main

| Élément | Valeur |
|---------|--------|
| Branche | `main` / `origin/main` |
| HEAD | `6fe91df` |
| Référence locale | `main` local divergent (`ec073f6`, 1 local / 10 remote) — vérification sur `origin/main @ 6fe91df` |
| Branche QA-G4 | `docs/chantiers360-v2-inc-05-qa-g4` @ `6fe91df` |
| Artefacts INC-05 | `app/`, `07-delivery-inc-05/`, `08-qa-test/inc-05/` — présents |

## 2. PR #125 / commit merge

| Élément | Valeur |
|---------|--------|
| PR | #125 |
| Titre | feat: deliver Chantiers360 v2 INC-05 derived next actions |
| Merge commit | `6fe91df` |
| Merged at | 2026-07-07T04:10:47Z |
| PR précédente | #124 — `3f7acfe` — clôture INC-04 |

## 3. Périmètre INC-05 confirmé

| Livrable | Statut |
|----------|--------|
| US-12 — vue `/prochaines-actions` | ✅ |
| US-12 — agrégation tâches ouvertes (À faire / En cours) | ✅ |
| US-12 — agrégation réserves ouvertes | ✅ |
| US-12 — jalons / prochaine intervention si renseignés | ✅ |
| US-12 — chantiers en retard (`En retard`) | ✅ |
| US-12 — item disparaît si source résolue | ✅ E2E |
| US-12 — aucune saisie manuelle | ✅ |
| US-13 — navigation vers fiche chantier | ✅ |
| US-13 — onglet source via `?tab=taches|reserves|jalons` | ✅ E2E |
| Lien dashboard hero → Prochaines actions | ✅ |
| Actions 100 % dérivées — pas de table dédiée | ✅ |
| Tests Playwright | ✅ `e2e/inc-05.spec.ts` (4) + régression INC-01 (4) + INC-02 (4) + INC-03 (2) + INC-04 (2) |
| Rapports delivery / QA INC-05 | ✅ `07-delivery-inc-05/`, `08-qa-test/inc-05/` |

## 4. Hors scope confirmé

| Exclusion | Statut |
|-----------|--------|
| Saisie manuelle d'action | ✅ Absente |
| Table / migration `prochaines_actions` | ✅ Absente |
| IA générative / notifications | ✅ Absent |
| Agenda avancé / workflow validation | ✅ Absent |
| Espace client / devis / facturation | ✅ Absent |
| Refonte dashboard | ✅ Absente |
| Rattrapage design / Figma / polish | ✅ Absent — R-UX-01 acceptée |
| `03-backlog/` / `04-design/` / captures | ✅ Non modifiés |
| Chantiers360 V0 | ✅ Non consulté |
| Notion / CMP | ✅ Non modifié |
| **Clôture INC-05** | ⏳ **Non réalisée** — cycle séparé |
| **Capitalisation MVP / post-MVP** | ⏳ **Non lancée** |

## 5. Commandes exécutées et résultats

Répertoire : `projects/chantiers360-v2/app`  
Environnement : post-merge `origin/main` @ `6fe91df`

| Commande | Résultat | Détail |
|----------|----------|--------|
| `npm run lint` | ✅ PASS | 2 warnings `react-hooks/exhaustive-deps` (hérités INC-02, non bloquants) |
| `npm run build` | ✅ PASS | Next.js 15.5.20 — routes `/`, `/chantiers/nouveau`, `/chantiers/[id]`, `/prochaines-actions` |
| `npm run db:test:up` | ✅ PASS | Container `chantiers360-v2-test-db` healthy (port 5433) |
| `npm run db:test:migrate` | ✅ PASS | Migrations `0000`–`0003` — aucune migration INC-05 |
| `npm run test:e2e` | ✅ PASS | **16 passed** (18.1s) |

## 6. Résultat E2E post-merge

```
Running 16 tests using 1 worker

  ✓  US-02 — liste vide et CTA création
  ✓  US-01 — création chantier et champs obligatoires
  ✓  US-03 — fiche chantier, sections actives
  ✓  US-04 — modification des statuts sur fiche et liste
  ✓  US-06 — ajouter une tâche avec statut À faire
  ✓  US-07 — modifier le statut d'une tâche
  ✓  US-08 — ajouter une réserve avec statut Ouverte
  ✓  US-09 — modifier le statut d'une réserve
  ✓  US-10 — renseigner des jalons simples optionnels
  ✓  US-10 — modifier des jalons simples existants
  ✓  US-11 — rédiger un compte rendu rapide
  ✓  US-11 — consulter l'historique après rechargement
  ✓  US-12 — consulter les prochaines actions dérivées
  ✓  US-12 — item dérivé disparaît quand la tâche est terminée
  ✓  US-13 — naviguer vers la section source depuis prochaines actions
  ✓  US-12 — inclure un chantier en retard

  16 passed (18.1s)
```

**Conclusion E2E post-merge :** comportement INC-05 validé sur `main` — régression INC-01 à INC-04 OK.

## 7. Migration — absence confirmée

| Élément | Statut |
|---------|--------|
| Table `prochaines_actions` | ❌ Absente |
| Migration après `0003_comptes_rendus` | ❌ Aucune |
| Journal Drizzle | `0000`–`0003` inchangé |

## 8. Réserves restantes

| # | Réserve | Gravité | Statut post-merge |
|---|---------|---------|-------------------|
| R-UX-01 | Écran `/prochaines-actions` sans frame Figma dédiée | UX / méthode | **Ouverte** — acceptée — non bloquante |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | Mineure | **Ouverte** — inchangée, acceptée |
| R-QA-04 | Panneaux dashboard droite mockés | Mineure | **Ouverte** — inchangée, acceptée |
| R-QA-05 | Port 3000 occupé — `test:e2e:full` | Environnementale | **Ouverte** — `test:e2e` 16 passed ce cycle |

## 9. Nouvelles réserves éventuelles

| # | Réserve | Statut |
|---|---------|--------|
| — | Aucune nouvelle réserve bloquante fonctionnelle identifiée | — |

**Note technique mineure :** warnings ESLint `exhaustive-deps` sur `TaskStatusSelector` / `ReserveStatusSelector` — non bloquants, hérités INC-02.

## 10. Verdict QA-G4

### **QA-G4 OK WITH RESERVES**

| Critère | Statut |
|---------|--------|
| Merge PR #125 sur `main` confirmé | ✅ |
| Périmètre INC-05 intact post-merge | ✅ |
| Hors scope respecté | ✅ |
| lint / build post-merge | ✅ PASS |
| E2E US-12 / US-13 + régression INC-01 à INC-04 | ✅ **16 passed** |
| R-UX-01 + réserves héritées R-QA-03 à R-QA-05 | Acceptées — inchangées |
| Aucune régression bloquante | ✅ |
| Clôture INC-05 non lancée | ✅ |
| Capitalisation / post-MVP non lancée | ✅ |

## 11. Décision Morris attendue

| # | Question | Statut |
|---|----------|--------|
| D1 | GO push + PR QA-G4 ? | ⏳ Décision Morris |
| D2 | Clôture INC-05 ? | ⏳ Cycle séparé |
| D3 | Capitalisation MVP ? | ⏳ Optionnel — cycle séparé |
| D4 | Micro-cycle R-QA-03 / R-QA-04 / R-QA-05 ? | ⏳ Optionnel |
| D5 | Cycle méthode design coverage / ADR-DAA-DAT ? | ⏳ Optionnel — capitaliser R-UX-01 |

## 12. Confirmation aucun cycle post-MVP lancé

Aucune clôture INC-05, aucune capitalisation MVP, aucun rattrapage design, aucune frame Figma, aucun cycle polish, aucune modification app/code dans ce cycle QA-G4.

---

**Documents liés :** `2026-07-06-qa-readiness.md`, `qa-reserves.md`, `../../07-delivery-inc-05/2026-07-07-delivery-inc-05-validation-report.md`
