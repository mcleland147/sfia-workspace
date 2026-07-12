# PR Readiness — Chantiers360 v2 INC-05

**Projet :** Chantiers360 v2  
**Branche :** `delivery/chantiers360-v2-inc-05`  
**Date :** 2026-07-07  
**Base :** `main` @ `3f7acfe` (PR #124 — clôture INC-04)

## 1. Git

| Élément | Valeur |
|---------|--------|
| Branche | `delivery/chantiers360-v2-inc-05` |
| HEAD delivery | `6a50fbb` — `feat: deliver Chantiers360 v2 INC-05 next actions` |
| HEAD R-UX-01 | `2d89526` — `docs: document INC-05 UX design coverage reserve` |
| HEAD PR readiness | commit courant sur branche |
| Merge-base `main` | `3f7acfe` |
| Fichiers vs `main` | 22 fichiers (+ app INC-05, docs delivery, docs QA) |

## 2. Résumé INC-05

**Prochaines actions dérivées** (US-12, US-13) : vue transverse `/prochaines-actions`, agrégation depuis tâches ouvertes, réserves ouvertes, jalons/interventions et chantiers en retard. Navigation vers fiche chantier + onglet source via `?tab=`. Aucune saisie manuelle, aucune table dédiée. Régression INC-01 à INC-04 conservée.

## 3. Périmètre livré

| US | Livrable |
|----|----------|
| US-12 | Vue `/prochaines-actions` — liste synthétique dérivée |
| US-12 | Sources : tâches (À faire/En cours), réserves (Ouverte/En cours), jalons, retards |
| US-12 | Aucune saisie manuelle d'action |
| US-12 | Item disparaît quand source résolue (ex. tâche Terminée) |
| US-12 | Chantier en retard visible |
| US-13 | Navigation « Voir sur le chantier » → fiche + section source |
| US-13 | Onglet source via `?tab=taches|reserves|jalons` |
| Transversal | Lien Prochaines actions depuis hero dashboard |

## 4. Arbitrage backlog

| Point | Décision |
|-------|----------|
| Prochaines actions | **100 % dérivées** — `delivery-increments.md`, `2026-07-05-functional-decisions.md` §5 |
| Table `prochaines_actions` | **Non créée** — lecture agrégée sur tables existantes |
| Saisie manuelle | **Exclue** — hors scope MVP |
| Migration INC-05 | **Aucune** — conforme critères de sortie INC-05 |

## 5. Hors périmètre confirmé

| Élément | Statut |
|---------|--------|
| Saisie manuelle d'action | ❌ |
| Table / migration `prochaines_actions` | ❌ |
| IA générative / notifications | ❌ |
| Agenda avancé / workflow validation | ❌ |
| Affectation multi-utilisateur | ❌ |
| Espace client / devis / facturation | ❌ |
| Refonte dashboard | ❌ |
| Rattrapage design / frame Figma / polish | ❌ — R-UX-01 acceptée |
| Chantiers360 V0 | ❌ Non consulté |
| Notion / CMP | ❌ |
| `03-backlog/` / `04-design/` / captures modifiés | ❌ |
| Correction R-QA-03 / R-QA-04 / R-QA-05 | ❌ Hors scope |

## 6. Fichiers créés / modifiés

| Zone | Contenu |
|------|---------|
| `app/lib/prochaines-actions/` | types, queries (agrégation), format |
| `app/app/prochaines-actions/page.tsx` | Vue transverse US-12 |
| `app/components/prochaines-actions/ProchainesActionsList.tsx` | Liste dérivée + liens US-13 |
| `app/components/dashboard/DashboardHero.tsx` | Lien Prochaines actions |
| `app/components/chantier/ChantierFiche.tsx` | Support `?tab=` |
| `app/components/chantier/ChantierOperationalTabs.tsx` | `initialTab` |
| `app/app/chantiers/[id]/page.tsx` | `searchParams.tab` |
| `app/e2e/inc-05.spec.ts` | 4 scénarios US-12 / US-13 |
| `app/e2e/inc-01.spec.ts` | Stabilisation régression US-04 |
| `07-delivery-inc-05/` | Rapports delivery + ce document |
| `08-qa-test/inc-05/` | Artefacts QA-G2 / QA-G3 |

## 7. Migration

| Élément | Détail |
|---------|--------|
| Migration INC-05 | **Aucune** |
| Table `prochaines_actions` | **Aucune** |
| Justification | Backlog INC-05 — prochaines actions 100 % dérivées ; agrégation `taches`, `reserves`, `chantiers` |
| Migrations existantes | `0000`–`0003` inchangées (INC-01 à INC-04) |

## 8. Tests

| Fichier | Couverture |
|---------|------------|
| `e2e/inc-05.spec.ts` | US-12 dérivées, disparition, retard ; US-13 navigation |
| `e2e/inc-01.spec.ts` | Régression US-01 à US-04 |
| `e2e/inc-02.spec.ts` | Régression US-06 à US-09 |
| `e2e/inc-03.spec.ts` | Régression US-10 |
| `e2e/inc-04.spec.ts` | Régression US-11 |

## 9. QA-G3 — Décision Morris

| Décision | Statut |
|----------|--------|
| **GO QA WITH RESERVES — INC-05** | ✅ **Morris** (2026-07-07) |
| **GO PR readiness INC-05** | ✅ Documenté — push / PR = décision Morris séparée |
| Nouvelle réserve bloquante INC-05 | Aucune |

## 10. Résultats commandes (cycle PR readiness)

| Commande | Résultat |
|----------|----------|
| `npm run lint` | ✅ PASS (2 warnings `react-hooks/exhaustive-deps` — hérités INC-02) |
| `npm run build` | ✅ PASS |
| `npm run db:test:up` | ✅ PASS |
| `npm run db:test:migrate` | ✅ PASS (0000–0003) |
| `npm run test:e2e` | ✅ **16 passed** (15.4s) |

## 11. Réserves

| ID | Réserve | Gravité | Statut |
|----|---------|---------|--------|
| R-UX-01 | Écran `/prochaines-actions` sans frame Figma dédiée | UX / méthode | Ouverte — acceptée — non bloquante |
| R-QA-03 | Validation formulaire vide — HTML5 `required` | Mineure | Ouverte — acceptée — héritée |
| R-QA-04 | Panneaux dashboard droite mockés | Mineure | Ouverte — acceptée — héritée |
| R-QA-05 | Port 3000 occupé — `test:e2e:full` | Environnementale | Ouverte — héritée |

Aucune nouvelle réserve bloquante INC-05. PR readiness non bloquée par R-UX-01.

## 12. Garde-fous

- INC-05 uniquement — US-12, US-13
- Pas de saisie manuelle, pas de table dédiée, pas de migration INC-05
- Pas d'IA, notifications, agenda avancé, workflow, espace client, billing
- Pas de rattrapage design / Figma / polish (R-UX-01 acceptée)
- Pas de V0, Notion, CMP, modification backlog / design / captures

## 13. Proposition titre PR

```
feat: deliver Chantiers360 v2 INC-05 derived next actions
```

## 14. Proposition description PR

```markdown
## Summary

- Deliver **INC-05** — derived next actions view (US-12, US-13).
- Add transverse route `/prochaines-actions` aggregating open tasks, reserves, milestones, and delayed chantiers.
- Navigation to chantier fiche + source tab via `?tab=taches|reserves|jalons`.
- **No** dedicated `prochaines_actions` table or manual action entry — backlog-aligned derived model.
- **QA/Test:** Playwright E2E — 16 passed (4 INC-01 + 4 INC-02 + 2 INC-03 + 2 INC-04 + 4 INC-05).
- **Morris:** GO QA WITH RESERVES — INC-05.

## Scope (INC-05)

- US-12 Derived list at `/prochaines-actions`; items removed when source resolved
- US-13 Navigate from action to chantier section
- Dashboard hero link to next actions view

## Out of scope

- Manual action CRUD / `prochaines_actions` table / INC-05 migration
- AI, notifications, advanced calendar, validation workflow
- Client portal, billing, dashboard refactor
- Design catch-up / Figma frame / polish (R-UX-01 accepted)
- Backlog / design / captures unchanged
- Chantiers360 V0 not consulted

## Reserves (accepted)

- R-UX-01: `/prochaines-actions` without dedicated Figma frame — extrapolated from existing UI patterns
- R-QA-03: empty create form — HTML5 required only
- R-QA-04: right dashboard panels mocked (spike)
- R-QA-05: port 3000 conflict — use `test:e2e:full`

## Test plan

- [ ] Review `07-delivery-inc-05/` and `08-qa-test/inc-05/`
- [ ] `cd app && npm run test:e2e:full` (Docker required)
- [ ] Manual: create task/reserve → verify `/prochaines-actions` → click through to source tab
- [ ] Confirm no new migration in PR diff

## Setup

```bash
cd projects/chantiers360-v2/app
cp .env.test.example .env.test
npm run db:test:up && npm run db:test:migrate
npm run test:e2e
```
```

## 15. Verdict

### **READY WITH RESERVES**

Morris **GO QA WITH RESERVES** enregistré. Périmètre US-12 / US-13 livré, 16 E2E passed, R-UX-01 et réserves héritées documentées. Push / création PR = décision Morris séparée.

---

**Prochaine étape :** décision Morris — **GO push + PR** ou corrections avant PR.
