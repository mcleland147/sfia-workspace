# Chantiers360 v2 — User Stories MVP

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/03-backlog/user-stories.md`  
**Cycle :** Backlog MVP (post PR #98)

> User stories **fonctionnelles** — pas de tickets techniques, pas de tâches de développement.

## MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

---

## US-01 — Créer un chantier

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-01 |
| **Priorité** | P1 |
| **En tant que** | artisan ou responsable opérationnel |
| **Je veux** | créer un chantier avec libellé, client, adresse et statut initial |
| **Afin de** | commencer à suivre un nouveau projet terrain |
| **Écrans** | Liste chantiers, formulaire création |
| **Source** | UC-01, `business-rules.md` §8 |
| **Hors scope** | devis, documents joints, accès client |

---

## US-02 — Consulter la liste des chantiers

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-01 |
| **Priorité** | P1 |
| **En tant que** | artisan ou PME |
| **Je veux** | voir la liste de mes chantiers avec statut et retard éventuel |
| **Afin de** | avoir une vue d'ensemble et prioriser mon attention |
| **Écrans** | Liste chantiers |
| **Source** | UC-02, `screen-map.md` §1 |
| **Hors scope** | filtres avancés, export comptable |

---

## US-03 — Ouvrir une fiche chantier

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-01, EPIC-07 |
| **Priorité** | P1 |
| **En tant que** | utilisateur interne |
| **Je veux** | ouvrir la fiche d'un chantier depuis la liste |
| **Afin de** | accéder aux informations et sections opérationnelles |
| **Écrans** | Liste → Fiche chantier |
| **Source** | UC-02, UC-03, `navigation-model.md` |
| **Hors scope** | espace client |

---

## US-04 — Modifier le statut d'un chantier

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-01 |
| **Priorité** | P1 |
| **En tant que** | responsable opérationnel |
| **Je veux** | modifier le statut d'un chantier (À démarrer, En cours, En pause, Terminé) |
| **Afin de** | refléter l'état réel du projet |
| **Écrans** | Fiche chantier (en-tête) |
| **Source** | UC-03, `state-model.md` §2 |
| **Hors scope** | calcul auto depuis tâches |

---

## US-05 — Marquer ou retirer un retard

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-01, EPIC-04 |
| **Priorité** | P2 |
| **En tant que** | responsable opérationnel |
| **Je veux** | marquer manuellement un chantier en retard ou retirer ce marquage |
| **Afin de** | signaler qu'un chantier nécessite une attention particulière |
| **Écrans** | Fiche chantier, liste chantiers |
| **Source** | UC-07, `functional-decisions.md` §6 |
| **Hors scope** | calcul automatique de retard |

---

## US-06 — Ajouter une tâche

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-02 |
| **Priorité** | P1 |
| **En tant que** | artisan ou conducteur de travaux |
| **Je veux** | ajouter une tâche avec libellé à un chantier |
| **Afin de** | suivre le travail restant |
| **Écrans** | Section tâches |
| **Source** | UC-04, `business-rules.md` §2 |
| **Hors scope** | assignation, dépendances |

---

## US-07 — Changer le statut d'une tâche

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-02 |
| **Priorité** | P1 |
| **En tant que** | artisan ou conducteur de travaux |
| **Je veux** | changer le statut d'une tâche (À faire, En cours, Terminée) |
| **Afin de** | mettre à jour l'avancement |
| **Écrans** | Section tâches |
| **Source** | UC-04, `state-model.md` §3 |
| **Hors scope** | — |

---

## US-08 — Ajouter une réserve

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-03 |
| **Priorité** | P1 |
| **En tant que** | artisan ou conducteur de travaux |
| **Je veux** | ajouter une réserve avec description à un chantier |
| **Afin de** | ne pas oublier un point à lever |
| **Écrans** | Section réserves |
| **Source** | UC-05, `business-rules.md` §3 |
| **Hors scope** | validation client |

---

## US-09 — Changer le statut d'une réserve

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-03 |
| **Priorité** | P1 |
| **En tant que** | artisan ou conducteur de travaux |
| **Je veux** | changer le statut d'une réserve (Ouverte, En cours de traitement, Levée) |
| **Afin de** | suivre la résolution |
| **Écrans** | Section réserves |
| **Source** | UC-05, `state-model.md` §4 |
| **Hors scope** | — |

---

## US-10 — Renseigner des jalons simples

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-04 |
| **Priorité** | P2 |
| **En tant que** | responsable opérationnel |
| **Je veux** | renseigner dates prévues, prochaine intervention, jalon à venir et commentaire |
| **Afin de** | avoir une visibilité planning simple |
| **Écrans** | Section jalons / planning simple |
| **Source** | UC-06, `business-rules.md` §4 |
| **Hors scope** | Gantt, planning avancé |

---

## US-11 — Rédiger un compte rendu rapide

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-05 |
| **Priorité** | P2 |
| **En tant que** | artisan ou conducteur de travaux |
| **Je veux** | rédiger un compte rendu textuel sur un chantier |
| **Afin de** | consigner ce qui s'est passé sur le terrain |
| **Écrans** | Section comptes rendus |
| **Source** | UC-08, `functional-decisions.md` §4 |
| **Hors scope** | modèle documentaire, signature client |

**Note :** date enregistrée automatiquement à la création.

---

## US-12 — Consulter les prochaines actions

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-06 |
| **Priorité** | P2 |
| **En tant que** | responsable opérationnel |
| **Je veux** | voir une liste synthétique des actions dérivées (tâches, réserves, jalons, retards) |
| **Afin de** | savoir quoi traiter en priorité sans reconstituer l'information |
| **Écrans** | Vue prochaines actions |
| **Source** | UC-09, `functional-decisions.md` §5 |
| **Hors scope** | saisie manuelle d'actions |

---

## US-13 — Naviguer depuis prochaines actions

| Champ | Valeur |
|-------|--------|
| **Epic** | EPIC-06, EPIC-07 |
| **Priorité** | P2 |
| **En tant que** | utilisateur interne |
| **Je veux** | accéder au chantier et à la section source depuis un item de prochaines actions |
| **Afin de** | agir directement sur l'élément concerné |
| **Écrans** | Prochaines actions → Fiche chantier / section |
| **Source** | UC-09, `user-flows.md` Flux 7 |
| **Hors scope** | — |

---

## Synthèse

| Priorité | User stories |
|----------|--------------|
| **P1** | US-01 à US-04, US-06 à US-09 |
| **P2** | US-05, US-10 à US-13 |

**Total :** 13 user stories — couverture MVP complète.

---

**Documents liés :** `acceptance-criteria.md`, `delivery-increments.md`, `backlog-traceability.md`
