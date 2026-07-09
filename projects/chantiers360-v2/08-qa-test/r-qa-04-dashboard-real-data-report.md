# R-QA-04 — Dashboard panneaux droits — données réelles

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/08-qa-test/r-qa-04-dashboard-real-data-report.md`  
**Date et heure :** 2026-07-09 18:35 CEST (UTC+0200)  
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

### 4.3 Fichiers modifiés / créés

| Fichier | Action |
|---------|--------|
| `app/lib/dashboard/right-panels.ts` | **Créé** — mappers `buildDashboardTodoItems`, `buildStatusDistribution` |
| `app/components/dashboard/RightPanels.tsx` | **Modifié** — props réelles, liens, états vides |
| `app/components/dashboard/DashboardPage.tsx` | **Modifié** — passage props |
| `app/app/page.tsx` | **Modifié** — fetch parallèle chantiers + actions |
| `app/e2e/r-qa-04-dashboard-panels.spec.ts` | **Créé** — test E2E ciblé |

**Non modifié :** `mockChantiers.ts` (spike — plus importé par RightPanels), schema DB, R-UX-01, Option B/C.

---

## 5. Validations exécutées

| Validation | Résultat |
|------------|----------|
| `npm run lint` | ✅ PASS — warnings préexistants (hooks INC-02) |
| `npm run build` | ✅ PASS |
| `npm run test:e2e` (R-QA-04 spec) | ⚠️ **Non exécuté** — DB test indisponible (`ECONNREFUSED`) |
| Absence schema / package / lockfile | ✅ |
| Périmètre R-QA-04 seul | ✅ |

**Validation manuelle minimale proposée :** avec DB locale, créer chantier + tâche → vérifier panneau droit sur `/` et lien Ouvrir.

---

## 6. Statut proposé de R-QA-04

### **IMPLEMENTED — QA VALIDATION PENDING**

| Élément | Statut |
|---------|--------|
| **Correction fonctionnelle** | ✅ Implémentée — panneaux droits branchés sur données réelles |
| **`npm run lint`** | ✅ OK |
| **`npm run build`** | ✅ OK |
| **E2E ciblé** (`r-qa-04-dashboard-panels.spec.ts`) | ⚠️ **Non exécuté** — DB test indisponible (`ECONNREFUSED`) |
| **R-QA-04** | **Ouverte** — jusqu'à validation E2E ou validation manuelle documentée |
| **Clôture définitive** | ❌ Réservée à décision Morris **après** validation |

> **Capitalization :** la réserve **ne doit pas** être présentée comme clôturable tant que l'E2E ou une validation manuelle équivalente n'a pas été réalisée. Statut **proposé** — pas une décision validée.

---

## 7. Réserves restantes

| Réserve | Statut |
|---------|--------|
| **R-QA-04** | **Ouverte** — correction implémentée ; validation QA en attente (E2E ou manuelle) |
| **R-UX-01** | Ouverte — hors périmètre ce cycle |
| **R-QA-03** | Ouverte — hors périmètre |
| **R-QA-05** | Ouverte — hors périmètre |

---

## 8. Décisions Morris requises

1. **GO revue** correction R-QA-04
2. **GO validation QA** — E2E avec DB test ou validation manuelle documentée
3. **GO clôture** R-QA-04 — uniquement **après** validation QA
4. **GO commit** sur `delivery/chantiers360-r-qa-04-dashboard-real-data`
5. **GO push / PR** vers `main`

---

## 9. Verdict cycle

### **READY FOR MORRIS REVIEW**

---

*Chantiers360 v2 — R-QA-04 — SFIA v2.5 candidate — Morris décide clôture.*
