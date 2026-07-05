# Chantiers360 v2 — Cas d'usage prioritaires

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/00-framing/use-cases.md`  
**Cycle :** Cadrage détaillé (post PR #95)

> **Note :** ce document décrit des **cas d'usage prioritaires** au niveau cadrage.  
> Pas d'user stories détaillées. Pas de backlog complet.

## Contexte

Utilisateur principal : **artisan indépendant** ou **petite entreprise du bâtiment**.  
MVP confirmé :

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

## Cas d'usage prioritaires

### UC-01 — Créer un chantier

**Acteur :** Artisan / responsable opérationnel  
**Objectif :** Ouvrir un nouveau chantier avec les informations minimales pour le suivre.  
**Préconditions :** Aucune.  
**Flux principal :**

1. L'utilisateur initie la création d'un chantier.
2. Il renseigne les données minimales : libellé, client, adresse, statut initial.
3. Il peut optionnellement renseigner des dates prévues ou un commentaire planning simple.
4. Le chantier est créé et disponible dans la liste.

**Résultat attendu :** Un chantier identifiable, consultable et modifiable.  
**Hors scope :** devis, facturation, documents joints, accès client.

---

### UC-02 — Consulter la liste des chantiers

**Acteur :** Artisan / PME / conducteur de travaux  
**Objectif :** Avoir une vue d'ensemble des chantiers actifs et de leur statut.  
**Préconditions :** Au moins un chantier existe (ou liste vide).  
**Flux principal :**

1. L'utilisateur accède à la liste des chantiers.
2. Il voit pour chaque chantier : libellé, client, statut, indication de retard ou prochaine action si pertinent.
3. Il sélectionne un chantier pour le détail.

**Résultat attendu :** Vision synthétique permettant de prioriser l'attention.  
**Hors scope :** filtres avancés, tableaux de bord analytiques, export comptable.

---

### UC-03 — Suivre le statut d'un chantier

**Acteur :** Artisan / responsable opérationnel  
**Objectif :** Connaître et mettre à jour l'état global d'un chantier.  
**Préconditions :** Chantier existant.  
**Flux principal :**

1. L'utilisateur ouvre un chantier.
2. Il consulte le statut actuel (ex. : à démarrer, en cours, en pause, terminé).
3. Il met à jour le statut si l'état a changé.

**Résultat attendu :** Statut chantier fiable et à jour.  
**Voir :** `business-rules.md` — statuts chantier.

---

### UC-04 — Ajouter / suivre une tâche

**Acteur :** Artisan / conducteur de travaux  
**Objectif :** Décomposer le travail restant sur un chantier en tâches suivables.  
**Préconditions :** Chantier existant.  
**Flux principal :**

1. L'utilisateur ouvre un chantier.
2. Il ajoute une tâche avec libellé et statut initial.
3. Il met à jour le statut de la tâche au fil de l'avancement (à faire, en cours, terminée).
4. Il consulte la liste des tâches du chantier.

**Résultat attendu :** Tâches visibles et traçables sans outil externe.  
**Hors scope :** assignation multi-équipe, charges, dépendances entre tâches.

---

### UC-05 — Ajouter / suivre une réserve

**Acteur :** Artisan / conducteur de travaux  
**Objectif :** Enregistrer et suivre une réserve client ou un point à lever sur le chantier.  
**Préconditions :** Chantier existant.  
**Flux principal :**

1. L'utilisateur ouvre un chantier.
2. Il ajoute une réserve avec description et statut initial.
3. Il met à jour le statut (ouverte, en cours de traitement, levée).
4. Il consulte la liste des réserves du chantier.

**Résultat attendu :** Réserves centralisées — moins de risque d'oubli.  
**Hors scope :** workflow validation client, photos avant/après détaillées.

---

### UC-06 — Renseigner un jalon simple ou une prochaine intervention

**Acteur :** Artisan / responsable opérationnel  
**Objectif :** Planifier légèrement le chantier sans planning avancé.  
**Préconditions :** Chantier existant.  
**Flux principal :**

1. L'utilisateur ouvre un chantier.
2. Il renseigne ou modifie : date de début / fin prévue, prochaine intervention, jalon à venir, commentaire planning simple.
3. Les informations sont visibles sur la fiche chantier et en liste si pertinent.

**Résultat attendu :** Visibilité planning **simple** — pas de Gantt ni de ressources.  
**Hors scope :** planning avancé, multi-équipe, dépendances, calendrier complet.

---

### UC-07 — Identifier un retard éventuel

**Acteur :** Artisan / responsable opérationnel  
**Objectif :** Repérer qu'un chantier est en retard ou nécessite une action urgente.  
**Préconditions :** Chantier avec dates ou jalons renseignés, ou marquage manuel.  
**Flux principal :**

1. L'utilisateur consulte un chantier ou la liste.
2. Un indicateur de retard est visible (manuel et/ou dérivé de dates prévues — à trancher Morris).
3. L'utilisateur peut ajuster le statut ou planifier une prochaine intervention.

**Résultat attendu :** Retard identifiable sans analyse manuelle lourde.  
**Question ouverte :** calcul automatique vs marquage manuel — voir `detailed-framing.md` §9.

---

### UC-08 — Rédiger un compte rendu rapide

**Acteur :** Artisan / conducteur de travaux  
**Objectif :** Consigner brièvement ce qui s'est passé sur le chantier.  
**Préconditions :** Chantier existant.  
**Flux principal :**

1. L'utilisateur ouvre un chantier.
2. Il rédige un compte rendu rapide (contenu textuel, date associée).
3. Le compte rendu est enregistré et consultable sur le chantier.

**Résultat attendu :** Historique opérationnel centralisé.  
**Hors scope :** modèle documentaire complet, signature client, export PDF avancé.

---

### UC-09 — Consulter les prochaines actions

**Acteur :** Artisan / responsable opérationnel  
**Objectif :** Savoir quoi faire ensuite sans reconstituer l'information.  
**Préconditions :** Chantiers avec tâches, réserves ou jalons renseignés.  
**Flux principal :**

1. L'utilisateur accède à une vue ou section « prochaines actions » (par chantier ou synthétique).
2. Il voit les actions prioritaires : tâches ouvertes, réserves non levées, prochaine intervention, chantiers en retard.
3. Il peut naviguer vers le chantier concerné.

**Résultat attendu :** Réduction de la charge cognitive — focus sur l'action.  
**Question ouverte :** agrégation automatique vs saisie manuelle — voir `detailed-framing.md` §9.

---

## Synthèse de priorisation (cadrage)

| Priorité | Cas d'usage | Justification |
|----------|-------------|---------------|
| P1 | UC-01, UC-02, UC-03 | Socle chantier — création, liste, statut |
| P1 | UC-04, UC-05 | Cœur métier — tâches et réserves |
| P2 | UC-06, UC-07 | Planning simple et retard |
| P2 | UC-08, UC-09 | Compte rendu et prochaines actions |

Ordre de delivery incrémental : **décision Morris** après validation de ce cadrage.

## Explicitement hors scope (cas d'usage)

- Consultation client du chantier (accès client)
- Création / édition de devis
- Émission de factures ou sync comptable
- Planning avancé (ressources, dépendances, Gantt)
- Gestion documentaire complète
- Photos avant / après détaillées

---

**Documents liés :** `detailed-framing.md`, `business-rules.md`, `scope-boundaries.md`
