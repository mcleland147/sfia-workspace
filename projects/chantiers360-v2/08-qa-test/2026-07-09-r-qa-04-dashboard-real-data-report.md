# R-QA-04 — Dashboard panneaux droits — données réelles

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/08-qa-test/2026-07-09-r-qa-04-dashboard-real-data-report.md`  
**Date et heure :** 2026-07-09 19:36 CEST (UTC+0200)  
**Branche :** `delivery/chantiers360-r-qa-04-dashboard-real-data`  
**Cycle :** Delivery ciblé + QA Light — Option A2 (Morris)  
**Méthode :** SFIA v2.5 **candidate** — SFIA v2.4 baseline opérationnelle

---

## 1. Contexte R-QA-04

| Élément | Valeur |
|---------|--------|
| **Réserve** | R-QA-04 — panneaux dashboard droite mockés |
| **Décision Morris** | Option A2 — traiter R-QA-04 avant R-UX-01 et Option B |
| **Périmètre** | `À faire aujourd'hui` + `Répartition` uniquement |

---

## 2. Constat initial

| Zone | Avant correction | Source |
|------|------------------|--------|
| Liste centrale dashboard | Données réelles PostgreSQL | `listChantiers()` |
| Panneau « À faire aujourd'hui » | **Mock** statique | `mockChantiers.todoItems` |
| Panneau « Répartition » | **Mock** statique | `mockChantiers.distribution` |
| `/prochaines-actions` | Données réelles agrégées | `listProchainesActions()` (INC-05) |

**Dette :** page d'accueil partiellement fictive malgré socle INC-05.

---

## 3. Fichiers consultés

| Document / fichier | Rôle |
|--------------------|------|
| `00-framing/chantiers360-post-mvp-option-a-reserves-first.md` | Cadrage Option A2 |
| `08-qa-test/inc-01/qa-reserves.md` | Origine R-QA-04 |
| `lib/prochaines-actions/queries.ts` | Agrégation actions dérivées |
| `components/dashboard/RightPanels.tsx` | Composant cible |
| `data/mockChantiers.ts` | Source mock identifiée |

---

## 4. Correction appliquée

### 4.1 Panneau « À faire aujourd'hui »

- Alimenté par `listProchainesActions()` — même source que `/prochaines-actions`
- Affiche les **5 premières** actions dérivées triées
- Liens `Ouvrir →` vers fiche chantier + onglet source (`buildChantierSectionHref`)
- État vide explicite si aucune action

### 4.2 Panneau « Répartition »

- Alimenté par décompte **réel** des statuts chantier (`À démarrer`, `En cours`, `En retard`, `Terminé`)
- Barres proportionnelles au max des comptes — pas de données inventées

### 4.3 Fichiers modifiés / créés (commit `88bb630`)

| Fichier | Action |
|---------|--------|
| `app/lib/dashboard/right-panels.ts` | **Créé** — mappers `buildDashboardTodoItems`, `buildStatusDistribution` |
| `app/components/dashboard/RightPanels.tsx` | **Modifié** — props réelles, liens, états vides |
| `app/components/dashboard/DashboardPage.tsx` | **Modifié** — passage props |
| `app/app/page.tsx` | **Modifié** — fetch parallèle chantiers + actions |
| `app/e2e/r-qa-04-dashboard-panels.spec.ts` | **Créé** — test E2E ciblé |

**Non modifié :** `mockChantiers.ts` (spike — plus importé par RightPanels), schema DB, R-UX-01, Option B/C.

### 4.4 Correction E2E (commitée dans `79388f0` — test ciblé PASS)

| Fichier | Action |
|---------|--------|
| `app/e2e/r-qa-04-dashboard-panels.spec.ts` | **Modifié** — assertion compteur scopée au panneau Répartition |

**Avant :** `getByText("1", { exact: true })` — strict mode violation (hero + répartition).  
**Après :** `repartition.locator("li").filter({ hasText: "À démarrer" })` + `toContainText("1")`.

---

## 5. Validations exécutées

| Validation | Résultat |
|------------|----------|
| `npm run lint` | ✅ PASS — warnings préexistants (hooks INC-02) |
| `npm run build` | ✅ PASS |
| `npm run test:e2e` (R-QA-04 spec) — 2026-07-09 18:35 | ⚠️ **Non exécuté** — DB test indisponible (`ECONNREFUSED`) |
| `npm run test:e2e` (R-QA-04 spec) — 2026-07-09 19:29 | ❌ **FAIL** — assertion E2E non scopée (voir §5.1) |
| `npm run test:e2e` (R-QA-04 spec) — 2026-07-09 19:36 | ✅ **PASS** — après correction assertion (voir §5.2) |
| Absence schema / package / lockfile | ✅ |
| Périmètre R-QA-04 seul | ✅ |

### 5.1 Validation E2E — relance 2026-07-09 19:29 CEST (échec initial)

| Étape | Commande | Résultat |
|-------|----------|----------|
| DB test | `npm run db:test:up` | ✅ Container `chantiers360-v2-test-db` healthy |
| Migrations | `npm run db:test:migrate` | ✅ Migrations appliquées |
| E2E ciblé | `TEST_DATABASE_URL=postgresql://postgres:postgres@localhost:5433/chantiers360_v2_test npm run test:e2e -- e2e/r-qa-04-dashboard-panels.spec.ts` | ❌ **1 failed** |

**Détail échec :** `strict mode violation` — `getByText("1", { exact: true })` résout **2 éléments** (hero stat `1` + répartition `À démarrer: 1`). Les assertions précédentes ont **passé** :

- tâche réelle visible dans `Actions dérivées du dashboard` ✅
- libellé `À démarrer` présent dans répartition ✅
- échec sur compteur `1` non scopé au panneau répartition ❌

**Interprétation :** correction fonctionnelle opérationnelle ; échec relève de l'assertion E2E uniquement.

### 5.2 Validation E2E — relance 2026-07-09 19:36 CEST (après correction test)

| Étape | Commande | Résultat |
|-------|----------|----------|
| DB test | `npm run db:test:up` | ✅ Container `chantiers360-v2-test-db` healthy |
| Migrations | `npm run db:test:migrate` | ✅ Migrations appliquées |
| E2E ciblé | `TEST_DATABASE_URL=postgresql://postgres:postgres@localhost:5433/chantiers360_v2_test npm run test:e2e -- e2e/r-qa-04-dashboard-panels.spec.ts` | ✅ **1 passed** (5.4s) |

**Assertions validées :**

- tâche réelle visible dans `Actions dérivées du dashboard` ✅
- libellé `À démarrer` présent dans répartition ✅
- compteur `1` scopé à la ligne `À démarrer` du panneau répartition ✅
- absence de libellé mock `Compte rendu à rédiger` ✅

---

## 6. Statut de R-QA-04

### **CLOSED**

| Élément | Valeur |
|---------|--------|
| **Correction fonctionnelle** | ✅ Implémentée — panneaux droits branchés sur données réelles |
| **Correction E2E** | ✅ Commitée dans `79388f0` — test ciblé PASS |
| **`npm run lint`** | ✅ OK |
| **`npm run build`** | ✅ OK |
| **E2E ciblé** — relance 2026-07-09 19:36 | ✅ **PASS** |
| **PR** | #151 mergée sur `main` |
| **Merge commit** | `2aa68f4` |
| **Date clôture** | 2026-07-09 |
| **Décision** | Clôture documentaire Morris |

> **Capitalization :** réserve **clôturée** — GO Morris accordé post-merge PR #151.

---

## 7. Réserves restantes

| Réserve | Statut |
|---------|--------|
| **R-QA-04** | **CLOSED** — PR #151 @ `2aa68f4` (2026-07-09) |
| **R-UX-01** | Ouverte — hors périmètre ce cycle |
| **R-QA-03** | Ouverte — hors périmètre |
| **R-QA-05** | Ouverte — hors périmètre |

---

## 8. Décisions Morris

1. ~~**GO commit** — correction E2E + mise à jour rapport QA~~ ✅
2. ~~**GO clôture** R-QA-04~~ ✅ — clôture documentaire 2026-07-09
3. ~~**GO push / PR** vers `main`~~ ✅ — PR #151 mergée

---

## 9. Verdict cycle

### **R-QA-04 CLOSED — PR #151 MERGED**

---

*Chantiers360 v2 — R-QA-04 — CLOSED — PR #151 @ `2aa68f4` — 2026-07-09.*
