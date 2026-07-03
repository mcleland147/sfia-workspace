# Interv360 — Macro backlog

**Type** : Backlog macro  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-preparation`  
**Documents associés** : [`delivery-preparation-plan.md`](delivery-preparation-plan.md), [`mvp-scope.md`](mvp-scope.md), [`functional-lots.md`](functional-lots.md)

---

## 1. Objectif

Ce document transforme les lots fonctionnels Interv360 en **grands éléments de backlog**.

Il prépare la priorisation et la stratégie de découpage delivery.

Le niveau attendu est volontairement **macro** :

- pas de user stories détaillées ;
- pas de critères d'acceptation détaillés ;
- pas de tests ;
- pas de spécification technique ;
- pas de code, API, SQL ou BPMN.

**51 éléments macro** (MB-001 à MB-051) répartis sur **9 lots fonctionnels**.

---

## 2. Principes du backlog macro

Le backlog macro doit :

- rester aligné avec les **9 lots fonctionnels** ;
- couvrir la **chaîne SAV minimale** de bout en bout ;
- distinguer les éléments **MVP** et **post-MVP** ;
- préserver les **garde-fous fonctionnels** ;
- permettre une future **priorisation** ;
- éviter de réintroduire des éléments hors MVP.

**Garde-fous principaux :**

- Interv360 reste **source de vérité locale** ;
- CRM reste **simulé** ;
- **clôture locale autonome** ;
- STAT-01 à STAT-06 = **statuts métier** ;
- STAT-07 et STAT-08 = **indicateurs** ;
- dashboards et listes = **accès / pilotage**, pas source de vérité ;
- **fiche demande** = source détaillée.

---

## 3. Vue synthétique du backlog macro

### LOT-01 — Socle demandes SAV

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-001 | LOT-01 | Créer une demande SAV manuelle | ✅ | Demande créée en STAT-01, canal manuel visible |
| MB-002 | LOT-01 | Recevoir une demande simulée | ✅ | Demande entrante simulée (CRM / email) en STAT-01 |
| MB-003 | LOT-01 | Afficher la liste des demandes | ✅ | Liste consultable avec lignes représentatives |
| MB-004 | LOT-01 | Rechercher et filtrer les demandes | ✅ | Recherche et filtres statut / canal / période opérationnels |
| MB-005 | LOT-01 | Accéder à une fiche demande | ✅ | Navigation liste → fiche demande |
| MB-006 | LOT-01 | Afficher le statut et le canal d'origine | ✅ | STAT courant et canal (CRM, email, manuel) visibles |

### LOT-02 — Qualification et fiche demande

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-007 | LOT-02 | Consulter le détail d'une demande | ✅ | Fiche demande = référence opérationnelle détaillée |
| MB-008 | LOT-02 | Modifier les informations principales | ✅ | Champs principaux modifiables (RG-C05) |
| MB-009 | LOT-02 | Réaliser la qualification minimale | ✅ | Checklist minimale complétable |
| MB-010 | LOT-02 | Passer une demande en qualifiée | ✅ | Transition STAT-01 → STAT-02 |
| MB-011 | LOT-02 | Afficher l'historique léger | ✅ | Historique actions récentes visible |
| MB-012 | LOT-02 | Maintenir la fiche comme source détaillée | ✅ | Fiche fait foi — liste = point d'accès |

### LOT-03 — Planification et affectation

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-013 | LOT-03 | Créer une intervention depuis une demande qualifiée | ✅ | Intervention rattachée à demande STAT-02 |
| MB-014 | LOT-03 | Sélectionner un créneau d'intervention | ✅ | Créneau positionné sur planning simple |
| MB-015 | LOT-03 | Affecter un technicien | ✅ | Technicien affecté à l'intervention |
| MB-016 | LOT-03 | Visualiser un planning simple | ✅ | Vue jour opérationnelle consultable |
| MB-017 | LOT-03 | Passer une intervention en planifiée | ✅ | Transition vers STAT-03 |
| MB-018 | LOT-03 | Identifier les retards potentiels | ✅ | Visibilité retard précoce (STAT-07 si applicable) |

### LOT-04 — Intervention terrain et compte rendu

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-019 | LOT-04 | Consulter une intervention côté technicien | ✅ | Fiche intervention mobile accessible |
| MB-020 | LOT-04 | Afficher les informations essentielles terrain | ✅ | Contexte client, site, intervention visible |
| MB-021 | LOT-04 | Saisir un compte rendu simple | ✅ | CR saisi avec contenu minimal obligatoire |
| MB-022 | LOT-04 | Indiquer le résultat d'intervention | ✅ | Résultat métier renseigné |
| MB-023 | LOT-04 | Gérer la signature optionnelle | ✅ | Signature ou motif d'absence |
| MB-024 | LOT-04 | Préparer la clôture locale | ✅ | Intervention prête pour clôture (STAT-04 / STAT-05) |

### LOT-05 — Clôture locale

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-025 | LOT-05 | Valider le compte rendu | ✅ | CR validé avant clôture |
| MB-026 | LOT-05 | Clôturer localement une intervention | ✅ | Passage STAT-06 — clôture autonome |
| MB-027 | LOT-05 | Afficher le statut clôturé | ✅ | STAT-06 visible liste et fiche |
| MB-028 | LOT-05 | Préparer le retour CRM simulé | ✅ | Événement sync post-clôture déclenché |
| MB-029 | LOT-05 | Garantir le non-blocage par synchronisation externe | ✅ | STAT-06 valide même si sync KO |

### LOT-06 — Intégration CRM simulée

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-030 | LOT-06 | Identifier les demandes issues du CRM simulé | ✅ | Canal CRM distingué sur demande |
| MB-031 | LOT-06 | Simuler un retour post-clôture | ✅ | Tentative retour vers cible représentative |
| MB-032 | LOT-06 | Afficher l'état de synchronisation | ✅ | Statut sync visible (succès / échec / attente) |
| MB-033 | LOT-06 | Simuler un échec de synchronisation | ✅ | Scénario échec représentatif testable |
| MB-034 | LOT-06 | Conserver Interv360 comme source locale | ✅ | Données opérationnelles non déléguées au CRM |

### LOT-07 — Anomalies d'intégration et reprise manuelle

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-035 | LOT-07 | Afficher les anomalies d'intégration | ✅ | STAT-08 visible comme indicateur |
| MB-036 | LOT-07 | Expliquer l'anomalie avec un message métier | ✅ | Libellé compréhensible, non technique |
| MB-037 | LOT-07 | Accéder à la vue suivi erreurs intégration | ✅ | Écran anomalies consultable |
| MB-038 | LOT-07 | Réaliser une reprise manuelle simple | ✅ | Action reprise tracée fonctionnellement |
| MB-039 | LOT-07 | Distinguer anomalie et statut métier | ✅ | STAT-08 distinct de STAT-01 à STAT-06 |
| MB-040 | LOT-07 | Empêcher la réouverture d'intervention par anomalie | ✅ | STAT-08 ne rouvre pas le cycle SAV |

### LOT-08 — Pilotage SAV et retards

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-041 | LOT-08 | Afficher un dashboard SAV simple | ✅ | Vue opérationnelle quotidienne |
| MB-042 | LOT-08 | Afficher les demandes en retard | ✅ | Retards visibles et actionnables |
| MB-043 | LOT-08 | Utiliser STAT-07 comme indicateur | ✅ | STAT-07 distinct du statut métier |
| MB-044 | LOT-08 | Afficher les volumes opérationnels essentiels | ✅ | Top 5–7 KPI / alertes above the fold |
| MB-045 | LOT-08 | Accéder depuis le pilotage à la liste ou fiche | ✅ | Drill-down vers dossiers actionnables |
| MB-046 | LOT-08 | Maintenir le dashboard comme vue de pilotage | ✅ | Dashboard ≠ source de vérité |

### LOT-09 — Vue dirigeant MVP

| ID | Lot parent | Élément macro | MVP | Résultat attendu |
|----|------------|---------------|:---:|------------------|
| MB-047 | LOT-09 | Afficher une vue dirigeant consolidée | ✅ | Vue synthétique séparée du dashboard SAV |
| MB-048 | LOT-09 | Afficher les indicateurs essentiels | ✅ | Volumétrie, clôtures, tendances simples |
| MB-049 | LOT-09 | Afficher les retards et anomalies en agrégé | ✅ | STAT-07 et STAT-08 en lecture agrégée |
| MB-050 | LOT-09 | Séparer vue dirigeant et dashboard SAV | ✅ | Deux vues distinctes — pas de fusion |
| MB-051 | LOT-09 | Limiter la vue dirigeant au MVP | ✅ | Indicateurs essentiels uniquement — pas de BI |

---

## 4. Backlog macro par lot

### LOT-01 — Socle demandes SAV

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-001 | Créer une demande SAV manuelle | Demande STAT-01, canal manuel | — |
| MB-002 | Recevoir une demande simulée | Demande STAT-01, canal identifié | — |
| MB-003 | Afficher la liste des demandes | Liste opérationnelle consultable | MB-001 ou MB-002 |
| MB-004 | Rechercher et filtrer les demandes | Filtres et recherche fonctionnels | MB-003 |
| MB-005 | Accéder à une fiche demande | Navigation depuis liste | MB-003 |
| MB-006 | Afficher le statut et le canal d'origine | STAT et canal visibles par ligne | MB-003 |

### LOT-02 — Qualification et fiche demande

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-007 | Consulter le détail d'une demande | Fiche détaillée accessible | LOT-01 (MB-005) |
| MB-008 | Modifier les informations principales | Champs RG-C05 modifiables | MB-007 |
| MB-009 | Réaliser la qualification minimale | Checklist complétée | MB-007, MB-008 |
| MB-010 | Passer une demande en qualifiée | STAT-01 → STAT-02 | MB-009 |
| MB-011 | Afficher l'historique léger | Actions récentes visibles | MB-007 |
| MB-012 | Maintenir la fiche comme source détaillée | Garde-fou documenté et respecté | MB-007 |

### LOT-03 — Planification et affectation

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-013 | Créer une intervention depuis une demande qualifiée | Intervention liée à demande STAT-02 | LOT-02 (MB-010) |
| MB-014 | Sélectionner un créneau d'intervention | Créneau enregistré | MB-013 |
| MB-015 | Affecter un technicien | Technicien renseigné | MB-013 |
| MB-016 | Visualiser un planning simple | Planning jour consultable | MB-014, MB-015 |
| MB-017 | Passer une intervention en planifiée | STAT-03 atteint | MB-014, MB-015 |
| MB-018 | Identifier les retards potentiels | STAT-07 visible si retard | MB-017 |

### LOT-04 — Intervention terrain et compte rendu

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-019 | Consulter une intervention côté technicien | Fiche mobile accessible | LOT-03 (MB-017) |
| MB-020 | Afficher les informations essentielles terrain | Contexte intervention complet | MB-019 |
| MB-021 | Saisir un compte rendu simple | CR enregistré | MB-019 |
| MB-022 | Indiquer le résultat d'intervention | Résultat métier saisi | MB-021 |
| MB-023 | Gérer la signature optionnelle | Signature ou motif absence | MB-021 |
| MB-024 | Préparer la clôture locale | STAT-04 / STAT-05 → prêt clôture | MB-021, MB-022 |

### LOT-05 — Clôture locale

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-025 | Valider le compte rendu | CR validé | LOT-04 (MB-021) |
| MB-026 | Clôturer localement une intervention | STAT-06 atteint | MB-024, MB-025 |
| MB-027 | Afficher le statut clôturé | STAT-06 visible | MB-026 |
| MB-028 | Préparer le retour CRM simulé | Événement sync déclenché | MB-026 |
| MB-029 | Garantir le non-blocage par synchronisation externe | Clôture indépendante du sync | MB-026 |

### LOT-06 — Intégration CRM simulée

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-030 | Identifier les demandes issues du CRM simulé | Canal CRM visible | LOT-01 (MB-002) |
| MB-031 | Simuler un retour post-clôture | Retour simulé déclenché | LOT-05 (MB-028) |
| MB-032 | Afficher l'état de synchronisation | Statut sync consultable | MB-031 |
| MB-033 | Simuler un échec de synchronisation | Scénario échec représentatif | MB-031 |
| MB-034 | Conserver Interv360 comme source locale | Garde-fou respecté | MB-030, MB-031 |

### LOT-07 — Anomalies d'intégration et reprise manuelle

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-035 | Afficher les anomalies d'intégration | STAT-08 visible | LOT-06 (MB-033) |
| MB-036 | Expliquer l'anomalie avec un message métier | Message compréhensible | MB-035 |
| MB-037 | Accéder à la vue suivi erreurs intégration | Écran anomalies opérationnel | MB-035 |
| MB-038 | Réaliser une reprise manuelle simple | Reprise tracée | MB-037 |
| MB-039 | Distinguer anomalie et statut métier | STAT-08 ≠ statut principal | MB-035 |
| MB-040 | Empêcher la réouverture d'intervention par anomalie | Garde-fou STAT-08 respecté | MB-038 |

### LOT-08 — Pilotage SAV et retards

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-041 | Afficher un dashboard SAV simple | Dashboard opérationnel | LOT-01, LOT-02, LOT-03, LOT-05 |
| MB-042 | Afficher les demandes en retard | Retards listés / alertés | MB-041 |
| MB-043 | Utiliser STAT-07 comme indicateur | STAT-07 distinct | MB-042 |
| MB-044 | Afficher les volumes opérationnels essentiels | KPI essentiels visibles | MB-041 |
| MB-045 | Accéder depuis le pilotage à la liste ou fiche | Drill-down fonctionnel | MB-041 |
| MB-046 | Maintenir le dashboard comme vue de pilotage | Dashboard ≠ source vérité | MB-041 |

### LOT-09 — Vue dirigeant MVP

| ID | Élément macro | Résultat attendu | Dépendance |
|----|---------------|------------------|------------|
| MB-047 | Afficher une vue dirigeant consolidée | Vue dirigeant accessible | LOT-08 (MB-041) |
| MB-048 | Afficher les indicateurs essentiels | Indicateurs consolidés | MB-047 |
| MB-049 | Afficher les retards et anomalies en agrégé | STAT-07 / STAT-08 agrégés | MB-047 |
| MB-050 | Séparer vue dirigeant et dashboard SAV | Deux vues distinctes | MB-047, MB-041 |
| MB-051 | Limiter la vue dirigeant au MVP | Pas de BI avancé | MB-047 |

**Dépendances inter-lots :** LOT-02 → LOT-01 ; LOT-03 → LOT-02 ; LOT-04 → LOT-03 ; LOT-05 → LOT-04 ; LOT-06 → LOT-01, LOT-05 ; LOT-07 → LOT-06 ; LOT-08 → lots opérationnels ; LOT-09 → LOT-08.

---

## 5. Éléments post-MVP exclus du backlog macro MVP

| Élément post-MVP | Motif d'exclusion du backlog MVP |
|------------------|-----------------------------------|
| CRM réel | MVP limité au CRM simulé (ADR-002) |
| API d'intégration réelle | Hors périmètre fonctionnel MVP |
| Notifications avancées | Post-validation parcours clôture |
| Planning avancé | Vue jour simple suffisante |
| BI / reporting enrichi | Dashboard et vue dirigeant limités |
| Rôles et habilitations avancés | Acteurs MVP couverts |
| Design system complet | Figma suffisant, non bloquant |
| Mobile enrichi | Fiche intervention + CR couvrent le parcours |
| Automatisation anomalies | Reprise manuelle simple en MVP |
| Audit avancé | Traçabilité légère suffisante |
| Multi-entités | Hors cadrage MVP |
| Portail client | Exclusion confirmée |

---

## 6. Garde-fous backlog

- Ne **pas** convertir les éléments macro en user stories détaillées dans ce document.
- Ne **pas** introduire de **nouveau statut** au-delà de STAT-01 à STAT-08.
- Ne **pas** transformer STAT-07 / STAT-08 en **statuts métier**.
- Ne **pas** rendre le CRM **source de vérité**.
- Ne **pas** conditionner **STAT-06** au retour CRM.
- Ne **pas** rouvrir une intervention à cause de **STAT-08**.
- Ne **pas** transformer dashboard ou liste en **source de vérité**.
- Ne **pas** réintroduire les éléments **post-MVP** dans le backlog MVP.

---

## 7. Préparation à la priorisation

| Élément | Usage pour la priorisation |
|---------|----------------------------|
| Lot parent | Regrouper les MB par trajectoire de réalisation |
| Dépendance | Ordonner les MB et éviter les impasses |
| Contribution chaîne SAV | Prioriser MB-001 à MB-029 pour démo bout en bout |
| Valeur métier | Qualification, planification, clôture = cœur métier |
| Risque fonctionnel | Sync CRM simulé et anomalies = risques à traiter tôt |
| Nécessité démonstration MVP | LOT-01 à LOT-05 = minimum démontrable |
| Statut MVP / post-MVP | Exclure post-MVP de la priorisation immédiate |

**Précision :** la priorisation détaillée sera traitée dans le prochain livrable [`prioritization.md`](prioritization.md), pas dans ce document.

---

## 8. Critères de sortie

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Backlog macro aligné sur les 9 lots | ✅ |
| 2 | Éléments macro MVP identifiés (51 éléments) | ✅ |
| 3 | Post-MVP exclus | ✅ |
| 4 | Dépendances générales conservées | ✅ |
| 5 | Aucun nouveau statut créé | ✅ |
| 6 | Aucun choix technique ajouté | ✅ |
| 7 | Aucune user story détaillée créée | ✅ |
| 8 | Base prête pour priorisation | ✅ |

---

## 9. Prochaine action

Le prochain livrable est :

**[`prioritization.md`](prioritization.md)**

**Objectif :** prioriser les lots et éléments macro selon la valeur métier, les dépendances et la capacité à démontrer rapidement le MVP.

---

*Backlog macro Interv360 — Draft — 51 éléments (MB-001 à MB-051).*
