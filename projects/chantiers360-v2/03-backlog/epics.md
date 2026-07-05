# Chantiers360 v2 — Epics MVP

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/03-backlog/epics.md`  
**Cycle :** Backlog MVP (post PR #98)

> Epics **fonctionnels** — pas de tickets techniques ni tâches de développement.

## MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

---

## EPIC-01 — Gestion des chantiers

| Attribut | Détail |
|----------|--------|
| **Objectif** | Permettre de créer, lister et piloter les chantiers avec informations minimales |
| **Priorité** | P1 |
| **Écrans** | Liste chantiers, création/édition chantier, fiche chantier (en-tête) |
| **Cas d'usage** | UC-01, UC-02, UC-03 |
| **Exclusions** | Devis, facturation, accès client, CRM client |
| **Dépendances** | Aucune — epic socle |

---

## EPIC-02 — Suivi des tâches

| Attribut | Détail |
|----------|--------|
| **Objectif** | Décomposer et suivre le travail restant par chantier |
| **Priorité** | P1 |
| **Écrans** | Section tâches (fiche chantier) |
| **Cas d'usage** | UC-04 |
| **Exclusions** | Assignation multi-équipe, dépendances, charges |
| **Dépendances** | EPIC-01 (chantier existant) |

---

## EPIC-03 — Suivi des réserves

| Attribut | Détail |
|----------|--------|
| **Objectif** | Enregistrer et suivre les réserves et points à lever |
| **Priorité** | P1 |
| **Écrans** | Section réserves (fiche chantier) |
| **Cas d'usage** | UC-05 |
| **Exclusions** | Validation client, photos avant/après |
| **Dépendances** | EPIC-01 (chantier existant) |

---

## EPIC-04 — Jalons simples / planning simple

| Attribut | Détail |
|----------|--------|
| **Objectif** | Donner une visibilité calendrier légère sur le chantier |
| **Priorité** | P2 |
| **Écrans** | Section jalons / planning simple (fiche chantier) |
| **Cas d'usage** | UC-06, UC-07 (dates liées au retard) |
| **Exclusions** | Gantt, ressources, planning avancé, multi-équipe |
| **Dépendances** | EPIC-01 |

---

## EPIC-05 — Comptes rendus rapides

| Attribut | Détail |
|----------|--------|
| **Objectif** | Consigner brièvement l'activité sur un chantier |
| **Priorité** | P2 |
| **Écrans** | Section comptes rendus (fiche chantier) |
| **Cas d'usage** | UC-08 |
| **Exclusions** | Modèle documentaire complexe, signature client, PJ obligatoires |
| **Dépendances** | EPIC-01 |

---

## EPIC-06 — Prochaines actions

| Attribut | Détail |
|----------|--------|
| **Objectif** | Offrir une vue synthétique dérivée des éléments nécessitant attention |
| **Priorité** | P2 |
| **Écrans** | Vue prochaines actions (transverse) |
| **Cas d'usage** | UC-09 |
| **Exclusions** | Saisie manuelle d'actions, moteur de priorisation complexe |
| **Dépendances** | EPIC-01, EPIC-02, EPIC-03, EPIC-04 (retard via EPIC-01/04) |

---

## EPIC-07 — Expérience de navigation MVP

| Attribut | Détail |
|----------|--------|
| **Objectif** | Assurer une navigation simple, cohérente et peu profonde dans le MVP |
| **Priorité** | P1 (transversal) |
| **Écrans** | Tous — liste, fiche, sections, prochaines actions |
| **Cas d'usage** | Transversal UC-01 à UC-09 |
| **Exclusions** | Navigation client, modules commerciaux, admin rôles |
| **Dépendances** | Tous les epics fonctionnels |

**Principes :** entrée = liste ; pivot = fiche ; profondeur max 2 niveaux ; prochaines actions accessibles depuis liste.

---

## Synthèse

| Epic | Priorité | Incrément principal |
|------|----------|---------------------|
| EPIC-01 | P1 | INC-01 |
| EPIC-02 | P1 | INC-02 |
| EPIC-03 | P1 | INC-02 |
| EPIC-04 | P2 | INC-03 |
| EPIC-05 | P2 | INC-04 |
| EPIC-06 | P2 | INC-05 |
| EPIC-07 | P1 transversal | INC-01, INC-05 |

---

**Documents liés :** `user-stories.md`, `delivery-increments.md`, `backlog-traceability.md`
