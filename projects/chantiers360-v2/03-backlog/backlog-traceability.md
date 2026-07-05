# Chantiers360 v2 — Matrice de traçabilité backlog

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/03-backlog/backlog-traceability.md`  
**Cycle :** Backlog MVP (post PR #98)

> Vérifier que chaque user story dérive du cadrage validé — aucune fonctionnalité hors MVP.

## Légende

| Colonne | Source |
|---------|--------|
| UC | `00-framing/use-cases.md` |
| Epic | `03-backlog/epics.md` |
| Écran | `02-ux-ui/screen-map.md` |
| US | `03-backlog/user-stories.md` |
| INC | `03-backlog/delivery-increments.md` |

---

## Matrice principale

| UC | Epic | Écran | US | INC | P |
|----|------|-------|----|-----|---|
| UC-01 | EPIC-01 | Liste, création | US-01 | INC-01 | P1 |
| UC-02 | EPIC-01 | Liste | US-02, US-03 | INC-01 | P1 |
| UC-03 | EPIC-01 | Fiche en-tête | US-03, US-04 | INC-01 | P1 |
| UC-04 | EPIC-02 | Section tâches | US-06, US-07 | INC-02 | P1 |
| UC-05 | EPIC-03 | Section réserves | US-08, US-09 | INC-02 | P1 |
| UC-06 | EPIC-04 | Section jalons | US-10 | INC-03 | P2 |
| UC-07 | EPIC-01, EPIC-04 | Fiche, liste | US-05 | INC-03 | P2 |
| UC-08 | EPIC-05 | Section CR | US-11 | INC-04 | P2 |
| UC-09 | EPIC-06, EPIC-07 | Prochaines actions | US-12, US-13 | INC-05 | P2 |

---

## Traçabilité cadrage → backlog

| Élément cadrage | Document source | Couverture backlog |
|-----------------|-----------------|-------------------|
| MVP confirmé | `detailed-framing.md`, tous cycles | 13 US — MVP complet |
| Statuts chantier/tâche/réserve | `business-rules.md` | US-04, US-07, US-09 + AC |
| Retard manuel | `functional-decisions.md` | US-05 |
| CR date auto + contenu libre | `functional-decisions.md` | US-11 |
| Prochaines actions dérivées | `functional-decisions.md` | US-12, US-13 |
| P1 UC-01–05 | `functional-decisions.md` | INC-01, INC-02 |
| P2 UC-06–09 | `functional-decisions.md` | INC-03, INC-04, INC-05 |

---

## Traçabilité architecture fonctionnelle

| Domaine fonctionnel | Epic | US |
|---------------------|------|-----|
| Chantier | EPIC-01 | US-01 à US-05 |
| Tâches | EPIC-02 | US-06, US-07 |
| Réserves | EPIC-03 | US-08, US-09 |
| Jalons / planning simple | EPIC-04 | US-10 |
| Compte rendu | EPIC-05 | US-11 |
| Prochaines actions | EPIC-06 | US-12, US-13 |
| Navigation | EPIC-07 | US-03, US-13 |

---

## Vérification hors MVP

| Exclusion | Présent dans backlog ? |
|-----------|------------------------|
| Devis | ❌ Non |
| Facturation | ❌ Non |
| Intégrations comptables | ❌ Non |
| Accès client | ❌ Non |
| Planning avancé / Gantt | ❌ Non |
| Architecture technique | ❌ Non |
| Code / API / DB | ❌ Non |
| Chantiers360 V0 | ❌ Non |

**Résultat :** aucune fonctionnalité hors MVP introduite dans le backlog.

---

**Documents liés :** `user-stories.md`, `epics.md`, `backlog-decisions.md`
