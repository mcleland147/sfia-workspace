# Interv360 — INC-01 detailed backlog

**Type** : Backlog détaillé d'incrément  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery detailing  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-detailing`  
**Documents associés** : [`delivery-detailing-plan.md`](delivery-detailing-plan.md), [`delivery-slicing-strategy.md`](delivery-slicing-strategy.md), [`prioritization.md`](prioritization.md), [`macro-backlog.md`](macro-backlog.md), [`realization-criteria.md`](realization-criteria.md)

---

## 1. Objectif

Ce document détaille le backlog de l'incrément **INC-01 — Flux SAV minimal démontrable**.

INC-01 doit permettre de démontrer une chaîne SAV minimale :

**demande créée → demande qualifiée → intervention planifiée → intervention réalisée → compte rendu saisi → clôture locale STAT-06 visible.**

Ce document **prépare** les futures user stories, mais **ne les crée pas encore** formellement.

---

## 2. Périmètre de INC-01

| Élément | Valeur |
|---------|--------|
| **Priorité** | P0-A |
| **Nombre de MB** | 16 |
| **Lots couverts** | LOT-01 à LOT-05 |
| **Statuts utilisés** | STAT-01 à STAT-06 |
| **Résultat cible** | Demande SAV clôturée localement (STAT-06) |
| **CRM réel** | Hors périmètre |
| **Dashboard** | Hors périmètre |
| **STAT-07 / STAT-08** | Hors périmètre opérationnel INC-01 |
| **Figma** | Non bloquant |

---

## 3. Chaîne fonctionnelle INC-01

| Étape | Description | MB associé | Statut cible |
|-------|-------------|------------|--------------|
| 1 | Créer une demande SAV | MB-001 | STAT-01 |
| 2 | Afficher la liste des demandes | MB-003 | STAT-01 visible |
| 3 | Accéder à la fiche demande | MB-005 / MB-007 | STAT-01 |
| 4 | Réaliser la qualification minimale | MB-009 | STAT-01 |
| 5 | Passer la demande en qualifiée | MB-010 | STAT-02 |
| 6 | Créer une intervention | MB-013 | STAT-02 |
| 7 | Sélectionner un créneau | MB-014 | Préparation STAT-03 |
| 8 | Affecter un technicien | MB-015 | Préparation STAT-03 |
| 9 | Passer l'intervention en planifiée | MB-017 | STAT-03 |
| 10 | Consulter l'intervention côté technicien | MB-019 | STAT-03 |
| 11 | Saisir un compte rendu | MB-021 | STAT-04 |
| 12 | Indiquer le résultat d'intervention | MB-022 | STAT-04 |
| 13 | Préparer la clôture locale | MB-024 | Pré-STAT-06 |
| 14 | Clôturer localement | MB-026 | STAT-06 |
| 15 | Afficher le statut clôturé | MB-027 | STAT-06 visible |

---

## 4. Backlog détaillé par MB

### MB-001 — Créer une demande SAV manuelle

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-01 |
| Rôle dans INC-01 | Point d'entrée du flux |
| Résultat attendu | Demande créée en STAT-01 — À qualifier |
| Statuts concernés | STAT-01 (création) |
| Écrans concernés | Liste demandes, Fiche demande SAV |
| Dépendances | Aucune |
| Hors périmètre | CRM réel, multi-canal avancé, pièces jointes avancées |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-003 — Afficher la liste des demandes

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-01 |
| Rôle dans INC-01 | Point d'accès aux demandes |
| Résultat attendu | Demande visible dans la liste après création |
| Statuts concernés | STAT-01 (affichage) |
| Écrans concernés | Liste demandes |
| Dépendances | MB-001 |
| Hors périmètre | Dashboard, KPI, reporting |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-005 — Accéder à une fiche demande

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-01 |
| Rôle dans INC-01 | Navigation liste → fiche |
| Résultat attendu | Fiche demande accessible depuis la liste |
| Statuts concernés | STAT-01 |
| Écrans concernés | Liste demandes, Fiche demande SAV |
| Dépendances | MB-003 |
| Hors périmètre | Navigation avancée, audit complet |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-007 — Consulter le détail d'une demande

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-02 |
| Rôle dans INC-01 | Fiche comme source détaillée |
| Résultat attendu | Informations principales visibles (client, canal, motif, priorité) |
| Statuts concernés | STAT-01 |
| Écrans concernés | Fiche demande SAV |
| Dépendances | MB-005 |
| Hors périmètre | Historique complet, pièces jointes avancées |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-009 — Réaliser la qualification minimale

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-02 |
| Rôle dans INC-01 | Rendre la demande exploitable |
| Résultat attendu | Checklist minimale complétée (RG-C05) |
| Statuts concernés | STAT-01 |
| Écrans concernés | Fiche demande SAV |
| Dépendances | MB-007 |
| Hors périmètre | Workflow de validation complexe |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-010 — Passer une demande en qualifiée

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-02 |
| Rôle dans INC-01 | Transition STAT-01 → STAT-02 |
| Résultat attendu | Demande qualifiée — prête à planifier |
| Statuts concernés | STAT-01 → STAT-02 |
| Écrans concernés | Fiche demande SAV, Liste demandes |
| Dépendances | MB-009 |
| Hors périmètre | Approbation multi-acteurs |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-013 — Créer une intervention depuis une demande qualifiée

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-03 |
| Rôle dans INC-01 | Démarrer le flux intervention |
| Résultat attendu | Intervention liée à une demande STAT-02 |
| Statuts concernés | STAT-02 (amont), préparation STAT-03 |
| Écrans concernés | Fiche demande SAV, Planning |
| Dépendances | MB-010 |
| Hors périmètre | Optimisation planning |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-014 — Sélectionner un créneau d'intervention

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-03 |
| Rôle dans INC-01 | Planifier le moment de l'intervention |
| Résultat attendu | Créneau sélectionné sur planning simple |
| Statuts concernés | Préparation STAT-03 |
| Écrans concernés | Planning, Fiche demande SAV |
| Dépendances | MB-013 |
| Hors périmètre | Planning avancé, optimisation automatique |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-015 — Affecter un technicien

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-03 |
| Rôle dans INC-01 | Affecter l'intervention |
| Résultat attendu | Technicien affecté à l'intervention |
| Statuts concernés | Préparation STAT-03 |
| Écrans concernés | Planning, Fiche demande SAV |
| Dépendances | MB-013, MB-014 |
| Hors périmètre | Gestion avancée compétences / disponibilités |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-017 — Passer une intervention en planifiée

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-03 |
| Rôle dans INC-01 | Transition vers STAT-03 |
| Résultat attendu | Intervention planifiée — visible liste et planning |
| Statuts concernés | STAT-03 |
| Écrans concernés | Planning, Liste demandes, Fiche demande SAV |
| Dépendances | MB-014, MB-015 |
| Hors périmètre | Notifications avancées |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-019 — Consulter une intervention côté technicien

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-04 |
| Rôle dans INC-01 | Accès terrain au détail intervention |
| Résultat attendu | Intervention consultable côté technicien |
| Statuts concernés | STAT-03 |
| Écrans concernés | Fiche intervention mobile |
| Dépendances | MB-017 |
| Hors périmètre | Application mobile native complète, offline avancé |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-021 — Saisir un compte rendu simple

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-04 |
| Rôle dans INC-01 | Produire le CR minimal |
| Résultat attendu | Compte rendu saisi avec contenu minimal obligatoire |
| Statuts concernés | STAT-03 → STAT-04 (démarrage réalisation) |
| Écrans concernés | Compte rendu mobile |
| Dépendances | MB-019 |
| Hors périmètre | CR PDF, pièces jointes avancées |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-022 — Indiquer le résultat d'intervention

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-04 |
| Rôle dans INC-01 | Qualifier le résultat terrain |
| Résultat attendu | Résultat d'intervention renseigné |
| Statuts concernés | STAT-04 |
| Écrans concernés | Compte rendu mobile |
| Dépendances | MB-021 |
| Hors périmètre | Règles complexes de résultat |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-024 — Préparer la clôture locale

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-04 |
| Rôle dans INC-01 | Rendre l'intervention clôturable |
| Résultat attendu | Intervention prête à être clôturée — CR et résultat complets |
| Statuts concernés | STAT-04 → pré-STAT-06 |
| Écrans concernés | Compte rendu mobile, Fiche demande SAV |
| Dépendances | MB-021, MB-022 |
| Hors périmètre | Validation complexe multi-acteurs |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-026 — Clôturer localement une intervention

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-05 |
| Rôle dans INC-01 | Atteindre STAT-06 localement |
| Résultat attendu | Intervention clôturée localement — autonome vis-à-vis CRM |
| Statuts concernés | STAT-06 |
| Écrans concernés | Fiche demande SAV, Compte rendu mobile |
| Dépendances | MB-024 |
| Hors périmètre | Clôture conditionnée par CRM, sync bloquante |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

### MB-027 — Afficher le statut clôturé

| Élément | Détail |
|---------|--------|
| Lot parent | LOT-05 |
| Rôle dans INC-01 | Rendre STAT-06 visible |
| Résultat attendu | Statut clôturé visible sur liste et fiche |
| Statuts concernés | STAT-06 (affichage) |
| Écrans concernés | Liste demandes, Fiche demande SAV |
| Dépendances | MB-026 |
| Hors périmètre | Retour CRM réel, dashboard |
| Niveau de détail futur | À transformer en user story dans `inc-01-user-stories.md` |

---

## 5. Vue par écrans concernés

| Écran | MB concernés | Rôle dans INC-01 |
|-------|--------------|------------------|
| **Liste demandes** | MB-003, MB-005, MB-010, MB-017, MB-027 | Point d'accès, visibilité statuts, navigation |
| **Fiche demande SAV** | MB-005, MB-007, MB-009, MB-010, MB-013, MB-014, MB-015, MB-024, MB-026, MB-027 | Source détaillée, qualification, lien intervention, clôture |
| **Planning** | MB-013, MB-014, MB-015, MB-017 | Création intervention, créneau, affectation |
| **Fiche intervention mobile** | MB-019 | Consultation terrain |
| **Compte rendu mobile** | MB-021, MB-022, MB-024, MB-026 | CR, résultat, préparation et exécution clôture |

**Note design :** Liste demandes dispose d'une base **Figma Design V2** validée (`figma-first-screen-review.md`). Les autres écrans peuvent rester basés sur **specs Git** / **Figma V1** pour ce cycle.

---

## 6. Dépendances détaillées

| Élément | Dépend de | Pourquoi |
|---------|-----------|----------|
| MB-001 | — | Point d'entrée — aucune dépendance |
| MB-003 | MB-001 | Liste alimentée par demandes créées |
| MB-005 | MB-003 | Navigation depuis liste |
| MB-007 | MB-005 | Détail après accès fiche |
| MB-009 | MB-007 | Qualification sur fiche consultée |
| MB-010 | MB-009 | Transition après checklist complète |
| MB-013 | MB-010 | Intervention depuis demande qualifiée |
| MB-014 | MB-013 | Créneau sur intervention existante |
| MB-015 | MB-013, MB-014 | Affectation après création et créneau |
| MB-017 | MB-014, MB-015 | STAT-03 après planification complète |
| MB-019 | MB-017 | Consultation terrain après planification |
| MB-021 | MB-019 | CR après consultation intervention |
| MB-022 | MB-021 | Résultat complète le CR |
| MB-024 | MB-021, MB-022 | Pré-clôture après CR et résultat |
| MB-026 | MB-024 | Clôture après préparation |
| MB-027 | MB-026 | Affichage après clôture effective |

---

## 7. Garde-fous INC-01

- Ne **pas** créer de nouveau statut.
- Utiliser uniquement **STAT-01 à STAT-06**.
- Ne **pas** traiter STAT-07 / STAT-08 comme actifs dans INC-01.
- Ne **pas** introduire de CRM réel.
- Ne **pas** introduire de sync CRM bloquante.
- Ne **pas** rendre Figma bloquant.
- Ne **pas** ajouter de dashboard.
- Ne **pas** ajouter de BI.
- Ne **pas** ajouter de notifications avancées.
- Ne **pas** surdimensionner le flux minimal.

---

## 8. Hors périmètre INC-01

| Élément hors INC-01 | Raison |
|---------------------|--------|
| Recherche et filtres avancés | INC-02 (P0-B) — MB-004 |
| Multi-canal complet | INC-02 — MB-002 |
| CRM simulé complet | INC-03 |
| Anomalies d'intégration | INC-04 |
| STAT-07 | INC-05 — indicateur retard |
| STAT-08 | INC-04 — indicateur anomalie |
| Dashboard SAV | INC-05 |
| Vue dirigeant | INC-06 |
| Signature optionnelle avancée | INC-02 (P0-C) — MB-023 |
| Historique complet | INC-02 (P0-C) — MB-011 |
| Audit avancé | Post-MVP |
| Planning avancé | Post-MVP |
| Mobile natif complet | Post-MVP |
| Notifications | Post-MVP |
| API | Hors cycle detailing |
| SQL | Hors cycle detailing |
| Code | Hors cycle detailing |

---

## 9. Préparation vers user stories

| MB | Future user story attendue | Priorité |
|----|---------------------------|----------|
| MB-001 | Permettre à un responsable SAV de créer une demande manuelle | P0-A |
| MB-003 | Permettre de consulter les demandes créées dans une liste | P0-A |
| MB-005 | Permettre d'ouvrir une fiche demande depuis la liste | P0-A |
| MB-007 | Permettre de consulter le détail d'une demande | P0-A |
| MB-009 | Permettre de compléter la checklist minimale de qualification | P0-A |
| MB-010 | Permettre de qualifier une demande (STAT-01 → STAT-02) | P0-A |
| MB-013 | Permettre de créer une intervention depuis une demande qualifiée | P0-A |
| MB-014 | Permettre de sélectionner un créneau d'intervention | P0-A |
| MB-015 | Permettre d'affecter un technicien à l'intervention | P0-A |
| MB-017 | Permettre de confirmer l'intervention comme planifiée (STAT-03) | P0-A |
| MB-019 | Permettre au technicien de consulter son intervention | P0-A |
| MB-021 | Permettre au technicien de saisir un compte rendu simple | P0-A |
| MB-022 | Permettre d'indiquer le résultat de l'intervention | P0-A |
| MB-024 | Permettre de préparer la clôture locale de l'intervention | P0-A |
| MB-026 | Permettre de clôturer localement l'intervention (STAT-06) | P0-A |
| MB-027 | Permettre de visualiser le statut clôturé sur liste et fiche | P0-A |

**Important :** formulation courte uniquement — pas de format « En tant que… je veux… afin de… » dans ce document. Voir `inc-01-user-stories.md`.

---

## 10. Critères de sortie du backlog détaillé

| # | Critère | Validé |
|---|---------|:------:|
| 1 | 16 MB INC-01 détaillés | ✅ |
| 2 | Chaîne fonctionnelle INC-01 décrite (15 étapes) | ✅ |
| 3 | Écrans concernés identifiés (5 écrans) | ✅ |
| 4 | Dépendances détaillées | ✅ |
| 5 | Garde-fous repris | ✅ |
| 6 | Hors périmètre explicite | ✅ |
| 7 | Base prête pour user stories | ✅ |

---

## 11. Prochaine action

Le prochain livrable est :

**[`inc-01-user-stories.md`](inc-01-user-stories.md)**

**Objectif :** transformer ce backlog détaillé en **user stories métier structurées** pour INC-01.

---

*Backlog détaillé INC-01 — Flux SAV minimal démontrable — Draft.*
