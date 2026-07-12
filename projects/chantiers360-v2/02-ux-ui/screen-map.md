# Chantiers360 v2 — Carte des écrans

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/02-ux-ui/screen-map.md`  
**Cycle :** UX/UI (post PR #97)

> Carte des **écrans fonctionnels** — pas de spécification visuelle ni composants techniques.

## Vue d'ensemble

```
[Liste chantiers] ←─── ENTREE PRINCIPALE
       │
       ├── [Création chantier]
       ├── [Édition chantier] (depuis fiche)
       ├── [Prochaines actions] ←─── VUE TRANSVERSE
       │
       └── [Fiche chantier] ←─── PIVOT
                ├── En-tête (infos, statut, retard)
                ├── Section tâches
                ├── Section réserves
                ├── Section jalons / planning simple
                └── Section comptes rendus
```

---

## 1. Liste des chantiers

| Attribut | Détail |
|----------|--------|
| **Rôle** | Point d'entrée — vue d'ensemble des chantiers actifs |
| **Priorité** | P1 |
| **Cas d'usage** | UC-02 |

**Données affichées :**
- Libellé chantier
- Client (nom ou référence)
- Statut chantier (À démarrer, En cours, En pause, Terminé)
- Indicateur retard (si actif)

**Actions principales :**
- Ouvrir fiche chantier
- Créer un chantier
- Accéder aux prochaines actions

**Liens navigation :** → Fiche chantier | → Création chantier | → Prochaines actions

---

## 2. Création / édition chantier

| Attribut | Détail |
|----------|--------|
| **Rôle** | Saisie ou modification des informations de base du chantier |
| **Priorité** | P1 |
| **Cas d'usage** | UC-01 (création), UC-03 (édition statut/infos) |

**Données affichées (création) :**
- Libellé chantier *(obligatoire)*
- Client *(obligatoire)*
- Adresse *(obligatoire)*
- Statut *(défaut : À démarrer)*
- Dates début / fin prévues *(optionnel)*
- Commentaire planning *(optionnel)*

**Données affichées (édition) :**
- Mêmes champs + statut chantier modifiable
- Toggle retard (manuel)

**Actions principales :**
- Enregistrer
- Annuler / retour liste ou fiche

**Liens navigation :** ← Liste | → Fiche chantier (après création)

---

## 3. Fiche chantier

| Attribut | Détail |
|----------|--------|
| **Rôle** | Pivot central — identité chantier + accès sections opérationnelles |
| **Priorité** | P1 |
| **Cas d'usage** | UC-03, UC-07 |

**Données affichées (en-tête) :**
- Libellé, client, adresse
- Statut chantier
- Indicateur retard
- Dates prévues (si renseignées)

**Actions principales :**
- Modifier statut
- Marquer / retirer retard
- Éditer infos de base
- Naviguer vers sections (tâches, réserves, jalons, comptes rendus)

**Liens navigation :** ← Liste | → Sections | ← Prochaines actions

---

## 4. Section tâches

| Attribut | Détail |
|----------|--------|
| **Rôle** | Suivi du travail restant sur le chantier |
| **Priorité** | P1 |
| **Cas d'usage** | UC-04 |

**Données affichées :**
- Liste tâches : libellé, statut (À faire, En cours, Terminée)

**Actions principales :**
- Ajouter tâche (libellé)
- Changer statut tâche
- Consulter liste

**Liens navigation :** Contexte fiche chantier | ← Prochaines actions (item tâche)

---

## 5. Section réserves

| Attribut | Détail |
|----------|--------|
| **Rôle** | Suivi des points à lever |
| **Priorité** | P1 |
| **Cas d'usage** | UC-05 |

**Données affichées :**
- Liste réserves : description, statut (Ouverte, En cours de traitement, Levée)

**Actions principales :**
- Ajouter réserve (description)
- Changer statut réserve
- Consulter liste

**Liens navigation :** Contexte fiche chantier | ← Prochaines actions (item réserve)

---

## 6. Section jalons / planning simple

| Attribut | Détail |
|----------|--------|
| **Rôle** | Visibilité calendrier légère — visible mais non dominante |
| **Priorité** | P2 |
| **Cas d'usage** | UC-06 |

**Données affichées :**
- Date début prévue, date fin prévue
- Prochaine intervention
- Jalon à venir
- Commentaire planning

**Actions principales :**
- Renseigner / modifier champs
- Consulter

**Liens navigation :** Contexte fiche chantier | ← Prochaines actions (item jalon)

**Hors scope :** Gantt, ressources, dépendances, planning avancé

---

## 7. Section comptes rendus

| Attribut | Détail |
|----------|--------|
| **Rôle** | Historique opérationnel textuel |
| **Priorité** | P2 |
| **Cas d'usage** | UC-08 |

**Données affichées :**
- Liste chronologique : date (auto), contenu textuel

**Actions principales :**
- Rédiger nouveau compte rendu (contenu libre — date auto)
- Consulter historique

**Liens navigation :** Contexte fiche chantier

---

## 8. Vue prochaines actions

| Attribut | Détail |
|----------|--------|
| **Rôle** | Vue transversale — priorisation quotidienne |
| **Priorité** | P2 |
| **Cas d'usage** | UC-09 |

**Données affichées (100 % dérivées) :**
- Tâches ouvertes (À faire, En cours) — avec chantier
- Réserves ouvertes — avec chantier
- Prochaine intervention / jalon renseigné — avec chantier
- Chantiers en retard

**Actions principales :**
- Consulter liste
- Naviguer vers fiche chantier / section source

**Règle Morris :** pas de saisie manuelle d'actions.

**Liens navigation :** ← Liste chantiers (accès direct) | → Fiche chantier

---

## Synthèse priorités

| Priorité | Écrans |
|----------|--------|
| **P1** | Liste chantiers, création/édition chantier, fiche chantier, section tâches, section réserves |
| **P2** | Section jalons, section comptes rendus, prochaines actions |

## Écrans exclus du MVP

- Espace client
- Devis, facturation, comptabilité
- Planning avancé / Gantt
- Paramètres rôles / permissions
- Administration

---

**Documents liés :** `wireframes-functional.md`, `user-flows.md`, `2026-07-05-ux-decisions.md`
