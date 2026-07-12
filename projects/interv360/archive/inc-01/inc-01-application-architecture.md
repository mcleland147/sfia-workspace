# Interv360 — INC-01 application architecture

**Type** : Architecture applicative cible  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Technical design  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-technical-design`  
**Documents associés** : [`technical-design-plan.md`](technical-design-plan.md), [`realization-preparation-summary.md`](realization-preparation-summary.md), [`2026-06-29-inc-01-technical-framing.md`](2026-06-29-inc-01-technical-framing.md), [`inc-01-realization-slicing.md`](inc-01-realization-slicing.md)

---

## 1. Objectif

Ce document définit l'**architecture applicative cible** de **INC-01 — Flux SAV minimal démontrable** au niveau conception.

Il vise à structurer la future réalisation **sans démarrer le code**.

Il **ne crée pas** :

- de code ;
- d'API détaillée ;
- de SQL ;
- de schéma de base de données exécutable ;
- de tests automatisés ;
- de BPMN.

L'objectif est de décrire les **composants applicatifs nécessaires** pour supporter le flux :

**demande créée → demande qualifiée → intervention planifiée → intervention réalisée → compte rendu saisi → clôture locale STAT-06 visible.**

---

## 2. Principes d'architecture

L'architecture cible doit respecter les principes suivants :

- architecture simple et progressive ;
- découpage aligné sur **RS-01 à RS-05** ;
- séparation claire entre présentation, logique métier et persistance ;
- **Interv360** reste la source locale du flux INC-01 ;
- la clôture locale **STAT-06** ne dépend pas d'un CRM réel ;
- aucune synchronisation externe bloquante ;
- aucune activation de **STAT-07 / STAT-08** dans INC-01 ;
- pas de dashboard ou BI dans l'architecture INC-01 ;
- Figma reste non bloquant.

---

## 3. Vue d'ensemble applicative

L'architecture logique est composée de **4 couches** :

### 1. Couche présentation

- Liste demandes ;
- Fiche demande SAV ;
- Planning ;
- Fiche intervention mobile ;
- Compte rendu mobile.

### 2. Couche applicative / orchestration

- orchestration du flux SAV ;
- coordination des actions utilisateur ;
- enchaînement RS-01 à RS-05.

### 3. Couche métier

- règles de qualification ;
- règles de planification ;
- règles de compte rendu ;
- règles de clôture locale ;
- règles de transition STAT-01 à STAT-06.

### 4. Couche persistance

- conservation des demandes ;
- conservation des interventions ;
- conservation des comptes rendus ;
- conservation des statuts ;
- conservation minimale de la traçabilité.

**Précision :** cette vue reste **logique** et ne choisit pas encore de technologie.

---

## 4. Composants applicatifs cibles

| Composant | Responsabilité | Séquences concernées |
|-----------|----------------|----------------------|
| **Interface Liste demandes** | Afficher les demandes et les statuts | RS-01, RS-02, RS-03, RS-05 |
| **Interface Fiche demande SAV** | Consulter et piloter la demande | RS-01 à RS-05 |
| **Interface Planning** | Sélectionner créneau et technicien | RS-03 |
| **Interface Technicien** | Consulter intervention | RS-04 |
| **Interface Compte rendu** | Saisir CR et résultat | RS-04, RS-05 |
| **Service Demande SAV** | Créer et gérer la demande | RS-01, RS-02, RS-05 |
| **Service Qualification** | Gérer checklist et passage STAT-02 | RS-02 |
| **Service Intervention** | Créer et planifier intervention | RS-03, RS-04, RS-05 |
| **Service Compte rendu** | Gérer CR et résultat | RS-04, RS-05 |
| **Service Statuts** | Appliquer et contrôler STAT-01 à STAT-06 | RS-01 à RS-05 |
| **Service Persistance** | Conserver l'état du flux | RS-01 à RS-05 |
| **Journal fonctionnel minimal** | Tracer les événements utiles à la démonstration | RS-01 à RS-05 |

**Précision :** les « services » décrits ici sont des **responsabilités applicatives logiques**, pas des microservices imposés.

---

## 5. Responsabilités par couche

| Couche | Responsabilités | Hors responsabilité |
|--------|-----------------|---------------------|
| **Présentation** | Afficher les écrans ; permettre les actions utilisateur ; rendre les statuts visibles | Porter la logique métier de transition |
| **Applicative / orchestration** | Coordonner les actions ; appeler les règles métier ; maintenir la cohérence du flux | Stocker directement les données sans persistance dédiée |
| **Métier** | Règles de qualification, planification, CR, clôture, transitions | Choix UI, stockage technique |
| **Persistance** | Conserver demandes, interventions, CR, résultats, statuts | Décider les transitions métier |

---

## 6. Flux applicatif cible par séquence

| Séquence | Flux applicatif cible |
|----------|-----------------------|
| **RS-01** | Interface Liste/Fiche → Service Demande SAV → Service Statuts → Persistance |
| **RS-02** | Fiche demande → Service Qualification → Service Statuts → Persistance → Liste/Fiche |
| **RS-03** | Fiche demande / Planning → Service Intervention → Service Statuts → Persistance → Planning/Liste/Fiche |
| **RS-04** | Interface Technicien / Compte rendu → Service Intervention + Service Compte rendu → Service Statuts → Persistance |
| **RS-05** | Compte rendu / Fiche demande → Service Compte rendu + Service Demande SAV → Service Statuts → Persistance → Liste/Fiche |

**Précision :** ces flux sont **conceptuels** et ne constituent **pas** des contrats API.

---

## 7. Source de vérité applicative

Pour INC-01, **Interv360 est la source locale du flux SAV minimal**.

| Élément | Source de vérité INC-01 |
|---------|-------------------------|
| Demande SAV | Interv360 |
| Qualification | Interv360 |
| Intervention | Interv360 |
| Créneau | Interv360 |
| Technicien affecté | Interv360 |
| Compte rendu | Interv360 |
| Résultat intervention | Interv360 |
| Statut courant | Interv360 |
| Clôture locale STAT-06 | Interv360 |

**Aucun CRM réel** n'est source de vérité dans INC-01.

---

## 8. Gestion des statuts dans l'architecture

| Statut | Portage applicatif |
|--------|--------------------|
| **STAT-01** — À qualifier | Service Statuts appliqué lors de création demande |
| **STAT-02** — Qualifiée | Service Statuts appliqué après qualification minimale |
| **STAT-03** — Planifiée | Service Statuts appliqué après intervention + créneau + technicien |
| **STAT-04** — En cours | Service Statuts appliqué lors de réalisation / CR |
| **STAT-05** — En attente client | Statut existant mais hors chemin nominal INC-01 |
| **STAT-06** — Clôturée localement | Service Statuts appliqué lors de clôture locale |
| **STAT-07** — En retard | Hors INC-01 |
| **STAT-08** — Anomalie d'intégration | Hors INC-01 |

**Précision :** le **Service Statuts** est une responsabilité logique, pas un composant technique imposé.

---

## 9. Architecture sans CRM réel

INC-01 **ne dépend pas** d'un CRM réel.

### Conséquences d'architecture

- aucune intégration CRM obligatoire ;
- aucune synchronisation externe bloquante ;
- aucune attente retour CRM pour clôturer ;
- **STAT-06** peut être atteint localement ;
- les erreurs d'intégration sont hors INC-01 ;
- **STAT-08** reste hors INC-01.

---

## 10. Architecture sans dashboard / BI

Le dashboard et la BI sont **hors INC-01**.

### Conséquences d'architecture

- la visibilité du flux repose sur **liste** et **fiche** ;
- **STAT-06** doit être visible dans la liste et la fiche ;
- aucun composant dashboard n'est requis ;
- aucune agrégation BI n'est nécessaire ;
- aucun indicateur de pilotage n'est requis pour accepter INC-01.

---

## 11. Architecture et Figma

Figma **n'est pas bloquant** pour l'architecture INC-01.

- **Liste demandes** dispose d'une base **Figma Design V2** validée ;
- les autres écrans peuvent s'appuyer sur les **specs Git / Figma V1** ;
- l'architecture ne dépend pas d'une maquette finale pixel perfect ;
- les décisions fonctionnelles priment sur les retouches visuelles.

---

## 12. Risques d'architecture

| Risque | Impact | Réduction |
|--------|--------|-----------|
| Service logique interprété comme microservice | Surcomplexité | Préciser responsabilité logique |
| Logique métier dans UI | Incohérence transitions | Centraliser règles métier |
| CRM implicite | Blocage STAT-06 | Maintenir Interv360 source locale |
| Dashboard implicite | Élargissement INC-01 | Liste / fiche suffisantes |
| Persistance mal cadrée | Flux non démontrable | Cadrer données minimales |
| Statuts dispersés | Incohérence | Service Statuts logique |
| Figma bloquant | Ralentissement | Specs Git suffisantes |

---

## 13. Décisions d'architecture retenues

| Décision | Statut |
|----------|--------|
| Architecture en couches logiques | Retenue |
| Responsabilités applicatives logiques | Retenue |
| Interv360 source locale INC-01 | Retenue |
| Service Statuts logique | Retenu |
| Absence de CRM réel | Retenue |
| Absence de dashboard / BI | Retenue |
| Figma non bloquant | Retenue |
| Aucun microservice imposé | Retenu |
| Aucune stack imposée | Retenue |

---

## 14. Points à traiter dans les livrables suivants

| Point | Livrable cible |
|-------|----------------|
| Choix front / back / data | [`2026-06-29-inc-01-front-back-data-decisions.md`](2026-06-29-inc-01-front-back-data-decisions.md) |
| Modèle conceptuel / logique | [`inc-01-data-model.md`](inc-01-data-model.md) |
| Stratégie API ou absence d'API | [`inc-01-api-strategy.md`](inc-01-api-strategy.md) |
| Règles détaillées de statuts | [`inc-01-status-rules.md`](inc-01-status-rules.md) |
| QA détaillée et planification technique | [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) |

---

## 15. Garde-fous

- ne **pas** transformer ce document en architecture technique finale détaillée ;
- ne **pas** créer de code ;
- ne **pas** créer d'API détaillée ;
- ne **pas** créer de SQL ;
- ne **pas** imposer de microservices ;
- ne **pas** imposer de stack ;
- ne **pas** ajouter de CRM réel ;
- ne **pas** ajouter dashboard ou BI ;
- ne **pas** activer STAT-07 / STAT-08 ;
- ne **pas** rendre Figma bloquant ;
- ne **pas** élargir INC-01.

---

## 16. Critères de sortie

- [x] couches applicatives identifiées ;
- [x] composants logiques identifiés ;
- [x] responsabilités par couche définies ;
- [x] flux applicatifs par séquence décrits ;
- [x] source de vérité INC-01 définie ;
- [x] gestion des statuts positionnée ;
- [x] absence CRM / dashboard cadrée ;
- [x] risques d'architecture identifiés ;
- [x] décisions d'architecture listées ;
- [x] garde-fous repris.

---

## 17. Prochaine action

Le prochain livrable est :

**[`2026-06-29-inc-01-front-back-data-decisions.md`](2026-06-29-inc-01-front-back-data-decisions.md)**

**Objectif :** formaliser les choix front / back / data pour INC-01, sans produire de code.

---

*Architecture applicative INC-01 — Draft.*
