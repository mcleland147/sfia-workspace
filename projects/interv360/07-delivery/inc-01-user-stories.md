# Interv360 — INC-01 user stories

**Type** : User stories métier  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery detailing  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-detailing`  
**Documents associés** : [`delivery-detailing-plan.md`](delivery-detailing-plan.md), [`inc-01-detailed-backlog.md`](inc-01-detailed-backlog.md), [`delivery-slicing-strategy.md`](delivery-slicing-strategy.md), [`prioritization.md`](prioritization.md), [`macro-backlog.md`](macro-backlog.md)

---

## 1. Objectif

Ce document transforme le backlog détaillé de **INC-01 — Flux SAV minimal démontrable** en **user stories métier structurées**.

INC-01 doit permettre de démontrer un flux SAV minimal :

**demande créée → demande qualifiée → intervention planifiée → intervention réalisée → compte rendu saisi → clôture locale STAT-06 visible.**

Ce document **ne définit pas encore** les critères d'acceptation détaillés. Ils seront produits dans [`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md).

---

## 2. Format retenu

Les user stories utilisent le format :

```text
En tant que [acteur],
je veux [capacité],
afin de [valeur métier].
```

Chaque story est rattachée à :

- un **ID de story** ;
- un **MB source** ;
- un **lot parent** ;
- un **écran principal** ;
- un **statut concerné** ;
- une **priorité** ;
- une **dépendance**.

---

## 3. Acteurs INC-01

| Acteur | Rôle dans INC-01 |
|--------|------------------|
| **Responsable SAV** | Crée, consulte, qualifie, planifie et clôture |
| **Assistant administratif** | Peut créer / consulter / qualifier selon besoin MVP |
| **Technicien** | Consulte son intervention et saisit le compte rendu |

**Précision :** les habilitations fines ne sont **pas** traitées dans INC-01.

---

## 4. Vue synthétique des user stories

| Story ID | MB source | Titre | Acteur principal | Priorité |
|----------|-----------|-------|------------------|----------|
| US-INC01-001 | MB-001 | Créer une demande SAV manuelle | Responsable SAV | P0-A |
| US-INC01-002 | MB-003 | Consulter la liste des demandes | Responsable SAV | P0-A |
| US-INC01-003 | MB-005 | Ouvrir une fiche demande | Responsable SAV | P0-A |
| US-INC01-004 | MB-007 | Consulter le détail d'une demande | Responsable SAV | P0-A |
| US-INC01-005 | MB-009 | Réaliser la qualification minimale | Responsable SAV | P0-A |
| US-INC01-006 | MB-010 | Passer une demande en qualifiée | Responsable SAV | P0-A |
| US-INC01-007 | MB-013 | Créer une intervention depuis une demande qualifiée | Responsable SAV | P0-A |
| US-INC01-008 | MB-014 | Sélectionner un créneau d'intervention | Responsable SAV | P0-A |
| US-INC01-009 | MB-015 | Affecter un technicien | Responsable SAV | P0-A |
| US-INC01-010 | MB-017 | Confirmer l'intervention planifiée | Responsable SAV | P0-A |
| US-INC01-011 | MB-019 | Consulter une intervention côté technicien | Technicien | P0-A |
| US-INC01-012 | MB-021 | Saisir un compte rendu simple | Technicien | P0-A |
| US-INC01-013 | MB-022 | Indiquer le résultat d'intervention | Technicien | P0-A |
| US-INC01-014 | MB-024 | Préparer la clôture locale | Responsable SAV | P0-A |
| US-INC01-015 | MB-026 | Clôturer localement une intervention | Responsable SAV | P0-A |
| US-INC01-016 | MB-027 | Visualiser le statut clôturé | Responsable SAV | P0-A |

---

## 5. User stories détaillées

### US-INC01-001 — Créer une demande SAV manuelle

| Élément | Détail |
|---------|--------|
| MB source | MB-001 |
| Lot parent | LOT-01 |
| Acteur principal | Responsable SAV |
| Écran principal | Fiche demande SAV ou Liste demandes |
| Statut concerné | STAT-01 |
| Priorité | P0-A |
| Dépend de | Aucune |

**User story**

En tant que responsable SAV,  
je veux créer une demande SAV manuelle,  
afin d'initier le traitement d'un besoin client dans Interv360.

**Résultat attendu**

Une demande est créée en **STAT-01 — À qualifier**.

**Hors périmètre**

CRM réel, multi-canal avancé, pièces jointes avancées.

---

### US-INC01-002 — Consulter la liste des demandes

| Élément | Détail |
|---------|--------|
| MB source | MB-003 |
| Lot parent | LOT-01 |
| Acteur principal | Responsable SAV |
| Écran principal | Liste demandes |
| Statut concerné | STAT-01 visible |
| Priorité | P0-A |
| Dépend de | US-INC01-001 |

**User story**

En tant que responsable SAV,  
je veux consulter la liste des demandes créées,  
afin d'identifier les demandes à traiter.

**Résultat attendu**

La demande créée apparaît dans la liste.

**Hors périmètre**

Dashboard, KPI, reporting.

---

### US-INC01-003 — Ouvrir une fiche demande

| Élément | Détail |
|---------|--------|
| MB source | MB-005 |
| Lot parent | LOT-01 |
| Acteur principal | Responsable SAV |
| Écran principal | Liste demandes / Fiche demande SAV |
| Statut concerné | STAT-01 |
| Priorité | P0-A |
| Dépend de | US-INC01-002 |

**User story**

En tant que responsable SAV,  
je veux ouvrir une fiche demande depuis la liste,  
afin de consulter et traiter le détail de la demande.

**Résultat attendu**

La fiche demande est accessible depuis la liste.

**Hors périmètre**

Navigation avancée, audit complet.

---

### US-INC01-004 — Consulter le détail d'une demande

| Élément | Détail |
|---------|--------|
| MB source | MB-007 |
| Lot parent | LOT-02 |
| Acteur principal | Responsable SAV |
| Écran principal | Fiche demande SAV |
| Statut concerné | STAT-01 |
| Priorité | P0-A |
| Dépend de | US-INC01-003 |

**User story**

En tant que responsable SAV,  
je veux consulter les informations principales d'une demande,  
afin de disposer du contexte nécessaire à sa qualification.

**Résultat attendu**

Les informations principales de la demande sont visibles.

**Hors périmètre**

Historique complet, pièces jointes avancées.

---

### US-INC01-005 — Réaliser la qualification minimale

| Élément | Détail |
|---------|--------|
| MB source | MB-009 |
| Lot parent | LOT-02 |
| Acteur principal | Responsable SAV |
| Écran principal | Fiche demande SAV |
| Statut concerné | STAT-01 |
| Priorité | P0-A |
| Dépend de | US-INC01-004 |

**User story**

En tant que responsable SAV,  
je veux compléter une checklist minimale de qualification,  
afin de rendre la demande exploitable pour planification.

**Résultat attendu**

La checklist minimale est complétée.

**Hors périmètre**

Workflow de validation complexe.

---

### US-INC01-006 — Passer une demande en qualifiée

| Élément | Détail |
|---------|--------|
| MB source | MB-010 |
| Lot parent | LOT-02 |
| Acteur principal | Responsable SAV |
| Écran principal | Fiche demande SAV / Liste demandes |
| Statut concerné | STAT-01 → STAT-02 |
| Priorité | P0-A |
| Dépend de | US-INC01-005 |

**User story**

En tant que responsable SAV,  
je veux passer une demande qualifiée au statut correspondant,  
afin de signaler qu'elle est prête à être planifiée.

**Résultat attendu**

La demande passe de **STAT-01 — À qualifier** à **STAT-02 — Qualifiée**.

**Hors périmètre**

Approbation multi-acteurs.

---

### US-INC01-007 — Créer une intervention depuis une demande qualifiée

| Élément | Détail |
|---------|--------|
| MB source | MB-013 |
| Lot parent | LOT-03 |
| Acteur principal | Responsable SAV |
| Écran principal | Fiche demande SAV / Planning |
| Statut concerné | STAT-02 |
| Priorité | P0-A |
| Dépend de | US-INC01-006 |

**User story**

En tant que responsable SAV,  
je veux créer une intervention depuis une demande qualifiée,  
afin de démarrer le traitement opérationnel terrain.

**Résultat attendu**

Une intervention est créée et liée à la demande qualifiée.

**Hors périmètre**

Optimisation planning.

---

### US-INC01-008 — Sélectionner un créneau d'intervention

| Élément | Détail |
|---------|--------|
| MB source | MB-014 |
| Lot parent | LOT-03 |
| Acteur principal | Responsable SAV |
| Écran principal | Planning |
| Statut concerné | Préparation STAT-03 |
| Priorité | P0-A |
| Dépend de | US-INC01-007 |

**User story**

En tant que responsable SAV,  
je veux sélectionner un créneau d'intervention,  
afin de positionner l'intervention dans le planning.

**Résultat attendu**

Un créneau est sélectionné pour l'intervention.

**Hors périmètre**

Planning avancé, optimisation automatique.

---

### US-INC01-009 — Affecter un technicien

| Élément | Détail |
|---------|--------|
| MB source | MB-015 |
| Lot parent | LOT-03 |
| Acteur principal | Responsable SAV |
| Écran principal | Planning / Fiche demande SAV |
| Statut concerné | Préparation STAT-03 |
| Priorité | P0-A |
| Dépend de | US-INC01-007, US-INC01-008 |

**User story**

En tant que responsable SAV,  
je veux affecter un technicien à l'intervention,  
afin de rendre l'intervention réalisable sur le terrain.

**Résultat attendu**

Un technicien est affecté à l'intervention.

**Hors périmètre**

Gestion avancée compétences / disponibilités.

---

### US-INC01-010 — Confirmer l'intervention planifiée

| Élément | Détail |
|---------|--------|
| MB source | MB-017 |
| Lot parent | LOT-03 |
| Acteur principal | Responsable SAV |
| Écran principal | Planning / Liste demandes / Fiche demande SAV |
| Statut concerné | STAT-03 |
| Priorité | P0-A |
| Dépend de | US-INC01-008, US-INC01-009 |

**User story**

En tant que responsable SAV,  
je veux confirmer qu'une intervention est planifiée,  
afin de faire passer la demande au statut opérationnel correspondant.

**Résultat attendu**

L'intervention est en **STAT-03 — Planifiée** et ce statut est visible.

**Hors périmètre**

Notifications avancées.

---

### US-INC01-011 — Consulter une intervention côté technicien

| Élément | Détail |
|---------|--------|
| MB source | MB-019 |
| Lot parent | LOT-04 |
| Acteur principal | Technicien |
| Écran principal | Fiche intervention mobile |
| Statut concerné | STAT-03 |
| Priorité | P0-A |
| Dépend de | US-INC01-010 |

**User story**

En tant que technicien,  
je veux consulter le détail de mon intervention,  
afin de disposer des informations nécessaires avant réalisation.

**Résultat attendu**

L'intervention planifiée est consultable côté technicien.

**Hors périmètre**

Application mobile native complète, offline avancé.

---

### US-INC01-012 — Saisir un compte rendu simple

| Élément | Détail |
|---------|--------|
| MB source | MB-021 |
| Lot parent | LOT-04 |
| Acteur principal | Technicien |
| Écran principal | Compte rendu mobile |
| Statut concerné | STAT-03 → STAT-04 |
| Priorité | P0-A |
| Dépend de | US-INC01-011 |

**User story**

En tant que technicien,  
je veux saisir un compte rendu simple,  
afin de formaliser le déroulement de l'intervention.

**Résultat attendu**

Un compte rendu minimal est saisi.

**Hors périmètre**

CR PDF, pièces jointes avancées.

---

### US-INC01-013 — Indiquer le résultat d'intervention

| Élément | Détail |
|---------|--------|
| MB source | MB-022 |
| Lot parent | LOT-04 |
| Acteur principal | Technicien |
| Écran principal | Compte rendu mobile |
| Statut concerné | STAT-04 |
| Priorité | P0-A |
| Dépend de | US-INC01-012 |

**User story**

En tant que technicien,  
je veux indiquer le résultat de l'intervention,  
afin de qualifier l'issue du traitement terrain.

**Résultat attendu**

Le résultat de l'intervention est renseigné.

**Hors périmètre**

Règles complexes de résultat.

---

### US-INC01-014 — Préparer la clôture locale

| Élément | Détail |
|---------|--------|
| MB source | MB-024 |
| Lot parent | LOT-04 |
| Acteur principal | Responsable SAV |
| Écran principal | Compte rendu mobile / Fiche demande SAV |
| Statut concerné | Pré-STAT-06 |
| Priorité | P0-A |
| Dépend de | US-INC01-012, US-INC01-013 |

**User story**

En tant que responsable SAV,  
je veux disposer d'une intervention prête à clôturer,  
afin de finaliser localement le traitement SAV.

**Résultat attendu**

Le compte rendu et le résultat d'intervention permettent la clôture locale.

**Hors périmètre**

Validation complexe multi-acteurs.

---

### US-INC01-015 — Clôturer localement une intervention

| Élément | Détail |
|---------|--------|
| MB source | MB-026 |
| Lot parent | LOT-05 |
| Acteur principal | Responsable SAV |
| Écran principal | Fiche demande SAV / Compte rendu mobile |
| Statut concerné | STAT-06 |
| Priorité | P0-A |
| Dépend de | US-INC01-014 |

**User story**

En tant que responsable SAV,  
je veux clôturer localement une intervention,  
afin de finaliser le traitement SAV dans Interv360.

**Résultat attendu**

L'intervention atteint **STAT-06 — Clôturée localement**.

**Hors périmètre**

Clôture conditionnée par CRM, synchronisation bloquante.

---

### US-INC01-016 — Visualiser le statut clôturé

| Élément | Détail |
|---------|--------|
| MB source | MB-027 |
| Lot parent | LOT-05 |
| Acteur principal | Responsable SAV |
| Écran principal | Liste demandes / Fiche demande SAV |
| Statut concerné | STAT-06 |
| Priorité | P0-A |
| Dépend de | US-INC01-015 |

**User story**

En tant que responsable SAV,  
je veux visualiser le statut clôturé sur la liste et la fiche,  
afin de confirmer que le traitement SAV est finalisé.

**Résultat attendu**

Le statut **STAT-06 — Clôturée localement** est visible sur la liste et la fiche.

**Hors périmètre**

Retour CRM réel, dashboard.

---

## 6. Chaîne de dépendances entre stories

| Story | Dépend de | Raison |
|-------|-----------|--------|
| US-INC01-001 | — | Point d'entrée du flux |
| US-INC01-002 | US-INC01-001 | Liste alimentée par demandes créées |
| US-INC01-003 | US-INC01-002 | Navigation depuis liste |
| US-INC01-004 | US-INC01-003 | Détail après ouverture fiche |
| US-INC01-005 | US-INC01-004 | Qualification sur fiche consultée |
| US-INC01-006 | US-INC01-005 | Transition après checklist complète |
| US-INC01-007 | US-INC01-006 | Intervention depuis demande qualifiée |
| US-INC01-008 | US-INC01-007 | Créneau sur intervention existante |
| US-INC01-009 | US-INC01-007, US-INC01-008 | Affectation après création et créneau |
| US-INC01-010 | US-INC01-008, US-INC01-009 | STAT-03 après planification complète |
| US-INC01-011 | US-INC01-010 | Consultation terrain après planification |
| US-INC01-012 | US-INC01-011 | CR après consultation intervention |
| US-INC01-013 | US-INC01-012 | Résultat complète le CR |
| US-INC01-014 | US-INC01-012, US-INC01-013 | Pré-clôture après CR et résultat |
| US-INC01-015 | US-INC01-014 | Clôture après préparation |
| US-INC01-016 | US-INC01-015 | Affichage après clôture effective |

---

## 7. Couverture par écrans

| Écran | Stories concernées | Rôle |
|-------|-------------------|------|
| **Liste demandes** | US-INC01-002, 003, 006, 010, 016 | Point d'accès, visibilité statuts |
| **Fiche demande SAV** | US-INC01-003, 004, 005, 006, 007, 009, 014, 015, 016 | Source détaillée, qualification, clôture |
| **Planning** | US-INC01-007, 008, 009, 010 | Création, créneau, affectation |
| **Fiche intervention mobile** | US-INC01-011 | Consultation terrain |
| **Compte rendu mobile** | US-INC01-012, 013, 014, 015 | CR, résultat, clôture |

**Note design :** Liste demandes — base Figma Design V2 validée ; autres écrans en spec / Figma V1.

---

## 8. Garde-fous INC-01

- Ne **pas** créer de nouveau statut.
- Utiliser uniquement **STAT-01 à STAT-06**.
- Ne **pas** activer STAT-07 / STAT-08 dans INC-01.
- Ne **pas** introduire de CRM réel.
- Ne **pas** introduire de synchronisation bloquante.
- Ne **pas** rendre Figma bloquant.
- Ne **pas** ajouter dashboard ou BI.
- Ne **pas** ajouter de notifications avancées.
- Ne **pas** créer de critères d'acceptation détaillés dans ce document.

---

## 9. Hors périmètre

| Élément hors périmètre | Raison |
|------------------------|--------|
| Critères d'acceptation détaillés | Prochain livrable — `inc-01-acceptance-criteria.md` |
| Tests | Futur cycle QA |
| Code | Hors cycle detailing |
| API / SQL | Hors cycle detailing |
| CRM réel | Hors MVP |
| Dashboard SAV | INC-05 |
| STAT-07 / STAT-08 | Hors INC-01 |
| Anomalies d'intégration | INC-04 |
| Recherche / filtres avancés | INC-02 |
| Multi-canal complet | INC-02 |

---

## 10. Critères de sortie

| # | Critère | Validé |
|---|---------|:------:|
| 1 | 16 user stories créées | ✅ |
| 2 | Chaque story rattachée à un MB | ✅ |
| 3 | Chaque story rattachée à un lot | ✅ |
| 4 | Dépendances explicites | ✅ |
| 5 | Écrans couverts (5 écrans) | ✅ |
| 6 | Statuts cohérents (STAT-01 à STAT-06) | ✅ |
| 7 | Garde-fous repris | ✅ |
| 8 | Pas de critères d'acceptation détaillés | ✅ |
| 9 | Base prête pour `inc-01-acceptance-criteria.md` | ✅ |

---

## 11. Prochaine action

Le prochain livrable est :

**[`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md)**

**Objectif :** définir les **critères d'acceptation métier** pour les 16 user stories INC-01.

---

*User stories INC-01 — Flux SAV minimal démontrable — Draft.*
