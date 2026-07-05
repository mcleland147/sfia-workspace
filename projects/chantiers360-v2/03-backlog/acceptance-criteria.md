# Chantiers360 v2 — Critères d'acceptation MVP

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/03-backlog/acceptance-criteria.md`  
**Cycle :** Backlog MVP (post PR #98)

> Critères **fonctionnels** testables — pas de framework, API, base de données, composants frontend ni performance technique.

---

## US-01 — Créer un chantier

- **Given** je suis sur la liste des chantiers  
- **When** je crée un chantier avec libellé, client et adresse renseignés  
- **Then** le chantier apparaît dans la liste avec statut « À démarrer » par défaut  
- **And** je peux ouvrir sa fiche

**Checklist :**
- [ ] Libellé, client et adresse obligatoires — création refusée si manquants
- [ ] Statut initial = À démarrer
- [ ] Redirection ou accès fiche après création

---

## US-02 — Consulter la liste des chantiers

- **Given** des chantiers existent  
- **When** j'accède à la liste  
- **Then** je vois pour chaque chantier : libellé, statut, indicateur retard si actif

**Checklist :**
- [ ] Liste vide affichée si aucun chantier
- [ ] Clic sur un chantier ouvre la fiche

---

## US-03 — Ouvrir une fiche chantier

- **Given** un chantier existe  
- **When** je le sélectionne depuis la liste  
- **Then** la fiche affiche libellé, client, adresse, statut, sections accessibles

**Checklist :**
- [ ] Retour vers liste possible
- [ ] Sections tâches, réserves, jalons, comptes rendus accessibles

---

## US-04 — Modifier le statut d'un chantier

- **Given** je suis sur une fiche chantier  
- **When** je change le statut (À démarrer / En cours / En pause / Terminé)  
- **Then** le nouveau statut est visible sur la fiche et en liste

**Checklist :**
- [ ] Les 4 statuts sont sélectionnables
- [ ] Chantier Terminé reste consultable

---

## US-05 — Marquer ou retirer un retard

- **Given** je suis sur une fiche chantier ou la liste  
- **When** j'active l'indicateur retard  
- **Then** le chantier est marqué en retard (visible fiche + liste)  
- **When** je désactive l'indicateur  
- **Then** le marquage retard disparaît

**Checklist :**
- [ ] Retard manuel uniquement — pas de calcul auto au MVP
- [ ] Retard coexiste avec statut chantier

---

## US-06 — Ajouter une tâche

- **Given** je suis sur la section tâches d'un chantier  
- **When** j'ajoute une tâche avec libellé  
- **Then** la tâche apparaît avec statut « À faire »

**Checklist :**
- [ ] Libellé obligatoire
- [ ] Tâche rattachée au chantier courant

---

## US-07 — Changer le statut d'une tâche

- **Given** une tâche existe sur un chantier  
- **When** je change son statut (À faire / En cours / Terminée)  
- **Then** le statut mis à jour est visible immédiatement

**Checklist :**
- [ ] Tâche Terminée reste visible dans la liste

---

## US-08 — Ajouter une réserve

- **Given** je suis sur la section réserves d'un chantier  
- **When** j'ajoute une réserve avec description  
- **Then** la réserve apparaît avec statut « Ouverte »

**Checklist :**
- [ ] Description obligatoire

---

## US-09 — Changer le statut d'une réserve

- **Given** une réserve existe  
- **When** je change son statut (Ouverte / En cours de traitement / Levée)  
- **Then** le statut mis à jour est visible

**Checklist :**
- [ ] Réserve Levée reste visible (historique)

---

## US-10 — Renseigner des jalons simples

- **Given** je suis sur la section jalons d'un chantier  
- **When** je renseigne ou modifie dates, prochaine intervention, jalon ou commentaire  
- **Then** les informations sont visibles sur la fiche

**Checklist :**
- [ ] Tous les champs optionnels
- [ ] Pas de calendrier Gantt ni planning avancé

---

## US-11 — Rédiger un compte rendu rapide

- **Given** je suis sur la section comptes rendus  
- **When** je saisis un contenu textuel et enregistre  
- **Then** le compte rendu apparaît avec date automatique et contenu saisi  
- **And** l'historique est consultable par ordre chronologique

**Checklist :**
- [ ] Contenu obligatoire
- [ ] Date auto — pas de saisie date par l'utilisateur
- [ ] Plusieurs comptes rendus possibles par chantier

---

## US-12 — Consulter les prochaines actions

- **Given** des tâches ouvertes, réserves ouvertes, jalons ou retards existent  
- **When** j'accède à la vue prochaines actions  
- **Then** je vois les items dérivés : tâches (À faire/En cours), réserves (Ouverte/En cours), jalons/interventions, chantiers en retard

**Checklist :**
- [ ] Aucune saisie manuelle d'action possible
- [ ] Items disparaissent quand source résolue (ex. tâche Terminée)

---

## US-13 — Naviguer depuis prochaines actions

- **Given** je suis sur la vue prochaines actions  
- **When** je sélectionne un item  
- **Then** j'arrive sur la fiche chantier concernée, section source si applicable

**Checklist :**
- [ ] Navigation fonctionnelle vers le bon contexte

---

**Documents liés :** `user-stories.md`, `delivery-increments.md`
