# Chantiers360 v2 — Décisions backlog MVP

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/03-backlog/backlog-decisions.md`  
**Cycle :** Backlog MVP (post PR #98)

> Trace des décisions backlog. Arbitrages structurants = **Morris**.

## 1. MVP inchangé

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

| Statut | ✅ Confirmé — hérité cycles PR #95 à #98 |

---

## 2. P1 / P2 respectés

| Priorité | Incréments | User stories |
|----------|------------|--------------|
| P1 | INC-01, INC-02 | US-01 à US-04, US-06 à US-09 |
| P2 | INC-03, INC-04, INC-05 | US-05, US-10 à US-13 |

---

## 3. Backlog limité au MVP

- 7 epics fonctionnels — pas d'epic commercial ou client
- 13 user stories — couverture UC-01 à UC-09
- 5 incréments — ordre INC-01 → INC-05
- Aucune story technique (API, DB, composants)

---

## 4. Exclusions maintenues

| Exclusion | Statut |
|-----------|--------|
| Devis, facturation, intégrations comptables | ❌ Hors MVP |
| Accès client | ❌ Hors MVP |
| Planning avancé | ❌ Hors MVP |
| Architecture technique | ❌ Hors ce cycle |
| Modèle de données technique | ❌ Hors ce cycle |
| Code applicatif | ❌ Hors ce cycle |
| Tickets Jira / Notion / CMP | ❌ Non créés |
| Workflow CI/CD | ❌ Non créé |
| Chantiers360 V0 | ❌ Interdit |

---

## 5. Règles Morris héritées dans le backlog

| Règle | Application backlog |
|-------|---------------------|
| Prochaines actions dérivées | US-12, US-13 — pas de saisie manuelle |
| Retard manuel | US-05 |
| CR date auto + contenu libre | US-11 |
| Statuts simples | US-04, US-07, US-09 |
| Petite équipe sans rôles fins | Pas de US admin/permissions |

---

## 6. Décisions Morris requises (post cycle)

| # | Décision | Statut |
|---|----------|--------|
| 1 | Valider le backlog MVP (ce cycle) | ⏳ En attente |
| 2 | Confirmer ordre incréments INC-01 → INC-05 | ⏳ En attente |
| 3 | Autoriser delivery incrémental (code) | ⏳ Après validation backlog |
| 4 | Maintenir exclusion V0 | ✅ Confirmé |

---

## 7. Gate suivant

**Prochain cycle autorisé après validation Morris :** **Delivery incrémental**

Prérequis :

- Backlog MVP validé (7 documents `03-backlog/`)
- Critères d'acceptation approuvés
- GO Morris explicite avant tout code

**Note :** un cycle **architecture technique** peut être requis avant ou en parallèle du premier incrément code — décision Morris.

---

## 8. Documents produits

| Fichier | Rôle |
|---------|------|
| `mvp-backlog-overview.md` | Vue d'ensemble cycle backlog |
| `epics.md` | 7 epics EPIC-01 à EPIC-07 |
| `user-stories.md` | 13 user stories US-01 à US-13 |
| `acceptance-criteria.md` | Critères par user story |
| `delivery-increments.md` | 5 incréments INC-01 à INC-05 |
| `backlog-traceability.md` | Matrice traçabilité |
| `backlog-decisions.md` | Ce document |

**Automation level :** L2 — gate Morris avant delivery.
