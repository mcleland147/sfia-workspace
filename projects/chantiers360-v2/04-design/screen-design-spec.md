# Chantiers360 v2 — Spécification design écran par écran

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/04-design/screen-design-spec.md`  
**Cycle :** Design Figma MVP — rattrapage

> Spécification pour production Figma — dérivée des wireframes Markdown.  
> Pas de code, pas de composants techniques, pas de tokens design system obligatoires.

## MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

---

## 1. Liste des chantiers

| Attribut | Détail |
|----------|--------|
| **Objectif** | Point d'entrée — vue d'ensemble des chantiers actifs |
| **Priorité** | P1 |
| **User stories** | US-02 |
| **Incrément** | INC-01 |
| **Source UX** | `screen-map.md` §1, `wireframes-functional.md` §1 |

**Contenus visibles :**
- En-tête application (Chantiers360)
- Bouton création chantier (`+ Nouveau`)
- Lien ou accès **Prochaines actions**
- Cartes chantier : libellé, client (implicite ou secondaire), statut, indicateur retard

**Actions principales :**
- Créer un chantier
- Ouvrir fiche chantier (clic carte)
- Accéder aux prochaines actions

**États à représenter :**
- Liste vide (message incitatif création)
- Liste avec chantiers — statuts variés (À démarrer, En cours, En pause, Terminé)
- Au moins un chantier avec **retard visible** (⚠ ou équivalent discret)

**Règles UX (wireframes Markdown) :**
- Lecture rapide : statut + retard visibles sans ouvrir la fiche
- Pas de filtres avancés MVP

**Hors scope :** export comptable, espace client, devis/facturation

---

## 2. Création / édition chantier

| Attribut | Détail |
|----------|--------|
| **Objectif** | Saisie ou modification des informations de base du chantier |
| **Priorité** | P1 |
| **User stories** | US-01 (création), US-04 (édition statut/infos) |
| **Incrément** | INC-01 |
| **Source UX** | `screen-map.md` §2, `wireframes-functional.md` §8 |

**Contenus visibles (création) :**
- Libellé chantier *(obligatoire)*
- Client *(obligatoire)*
- Adresse *(obligatoire)*
- Statut *(défaut : À démarrer)*
- Bloc planning optionnel : dates début/fin prévues, commentaire

**Contenus visibles (édition) :**
- Mêmes champs + statut modifiable
- Toggle retard (manuel) — visible en édition fiche ou en-tête fiche selon choix design Morris

**Actions principales :**
- Enregistrer → fiche chantier
- Annuler → liste ou fiche

**États à représenter :**
- Formulaire création vierge
- Formulaire édition pré-rempli
- Validation champs obligatoires (feedback visuel minimal)

**Règles UX :**
- Formulaire court — pas de sur-champs
- Planning optionnel clairement secondaire

**Hors scope :** documents joints, devis, accès client

---

## 3. Fiche chantier

| Attribut | Détail |
|----------|--------|
| **Objectif** | Pivot central — identité chantier + navigation sections |
| **Priorité** | P1 |
| **User stories** | US-03, US-04, US-05 |
| **Incrément** | INC-01, INC-03 (retard) |
| **Source UX** | `screen-map.md` §3, `wireframes-functional.md` §2 |

**Contenus visibles (en-tête) :**
- Navigation retour (liste)
- Libellé chantier, client, adresse
- Sélecteur statut chantier
- Indicateur / toggle retard
- Dates prévues (si renseignées)
- Accès édition infos

**Actions principales :**
- Modifier statut
- Marquer / retirer retard
- Éditer infos de base
- Naviguer vers sections (tâches, réserves, jalons, comptes rendus)

**États à représenter :**
- Fiche avec section active (onglets ou navigation latiale/horizontale)
- Statuts chantier : À démarrer, En cours, En pause, Terminé
- Retard actif / inactif

**Règles UX :**
- Fiche = pivot — profondeur max 2 niveaux
- Sections clairement identifiables (onglets ou équivalent)

**Hors scope :** espace client, modules commerciaux

---

## 4. Section tâches

| Attribut | Détail |
|----------|--------|
| **Objectif** | Suivi du travail restant sur le chantier |
| **Priorité** | P1 |
| **User stories** | US-06, US-07 |
| **Incrément** | INC-02 |
| **Source UX** | `screen-map.md` §4, `wireframes-functional.md` §3 |

**Contenus visibles :**
- Titre section (contexte chantier)
- Liste tâches : libellé + statut
- Bouton ajout tâche

**Actions principales :**
- Ajouter tâche (libellé)
- Changer statut inline (À faire, En cours, Terminée)

**États à représenter :**
- Liste vide
- Liste mixte statuts
- Au moins une tâche terminée (visuel distinct : ✓ ou barré)

**Règles UX :**
- Distinction visuelle claire **tâche vs réserve** (libellés, icônes ou couleurs légères)
- Actions inline — pas de modal lourde MVP

**Hors scope :** assignation, dépendances entre tâches

---

## 5. Section réserves

| Attribut | Détail |
|----------|--------|
| **Objectif** | Suivi des points à lever |
| **Priorité** | P1 |
| **User stories** | US-08, US-09 |
| **Incrément** | INC-02 |
| **Source UX** | `screen-map.md` §5, `wireframes-functional.md` §4 |

**Contenus visibles :**
- Titre section (contexte chantier)
- Liste réserves : description + statut
- Bouton ajout réserve

**Actions principales :**
- Ajouter réserve (description)
- Changer statut (Ouverte, En cours de traitement, Levée)

**États à représenter :**
- Liste vide
- Réserves ouvertes et en traitement
- Réserve levée (statut terminal)

**Règles UX :**
- Visuellement distinct des tâches
- Description textuelle — pas de pièces jointes MVP

**Hors scope :** validation client, workflow complexe

---

## 6. Section jalons / planning simple

| Attribut | Détail |
|----------|--------|
| **Objectif** | Visibilité calendrier légère — visible mais non dominante |
| **Priorité** | P2 |
| **User stories** | US-10 |
| **Incrément** | INC-03 |
| **Source UX** | `screen-map.md` §6, `wireframes-functional.md` §5 |

**Contenus visibles :**
- Date début prévue, date fin prévue
- Prochaine intervention
- Jalon à venir
- Commentaire planning

**Actions principales :**
- Mode lecture
- Mode édition groupée (bouton Éditer)

**États à représenter :**
- Champs vides / partiellement remplis
- Champs renseignés

**Règles UX :**
- Section **non dominante** — pas de calendrier graphique, pas de Gantt
- Présentation formulaire ou fiche simple

**Hors scope :** planning avancé, ressources, dépendances, multi-équipe

---

## 7. Section comptes rendus

| Attribut | Détail |
|----------|--------|
| **Objectif** | Historique opérationnel textuel |
| **Priorité** | P2 |
| **User stories** | US-11 |
| **Incrément** | INC-04 |
| **Source UX** | `screen-map.md` §7, `wireframes-functional.md` §6 |

**Contenus visibles :**
- Historique chronologique (plus récent en haut)
- Chaque entrée : date/heure auto + contenu textuel
- Zone saisie nouveau compte rendu

**Actions principales :**
- Rédiger et enregistrer nouveau CR
- Consulter historique

**États à représenter :**
- Historique vide
- Historique avec entrées
- Zone saisie active

**Règles UX :**
- Compte rendu **léger** — contenu libre, date automatique
- Pas d'éditeur riche complexe

**Hors scope :** modèle documentaire, signature client

---

## 8. Vue prochaines actions

| Attribut | Détail |
|----------|--------|
| **Objectif** | Vue transversale — priorisation quotidienne |
| **Priorité** | P2 |
| **User stories** | US-12, US-13 |
| **Incrément** | INC-05 |
| **Source UX** | `screen-map.md` §8, `wireframes-functional.md` §7 |

**Contenus visibles (100 % dérivés) :**
- Items retard (chantier)
- Tâches ouvertes (À faire, En cours) + chantier
- Réserves ouvertes + chantier
- Prochaine intervention / jalon + chantier

**Actions principales :**
- Consulter liste
- Naviguer vers fiche chantier / section source (`→`)

**États à représenter :**
- Liste mixte types (RETARD, TÂCHE, RÉSERVE, JALON)
- Liste vide ou partielle (si peu de données)

**Règles UX :**
- **Aucun bouton d'ajout manuel** — contenu strictement dérivé
- Type d'item visible (libellé catégorie)
- Lien navigation vers source

**Hors scope :** saisie manuelle d'actions, tri avancé configurable

---

## Synthèse priorités Figma

| Priorité | Écrans | User stories |
|----------|--------|--------------|
| **P1** | 1–5 | US-01 à US-04, US-06 à US-09 |
| **P2** | 6–8 | US-05, US-10 à US-13 |

---

**Documents liés :** `figma-brief.md`, `figma-review-checklist.md`, `design-to-backlog-alignment.md`
