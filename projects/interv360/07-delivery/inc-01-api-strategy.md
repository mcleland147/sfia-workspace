# Interv360 — INC-01 API strategy

**Type** : Stratégie API de conception  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Technical design  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-technical-design`  
**Documents associés** : [`technical-design-plan.md`](technical-design-plan.md), [`inc-01-application-architecture.md`](inc-01-application-architecture.md), [`inc-01-front-back-data-decisions.md`](inc-01-front-back-data-decisions.md), [`inc-01-data-model.md`](inc-01-data-model.md)

---

## 1. Objectif

Ce document définit la **stratégie API de conception** pour **INC-01 — Flux SAV minimal démontrable**.

Il vise à clarifier si INC-01 nécessite une **API formalisée** dès le MVP ou si une **orchestration applicative interne** suffit à ce stade.

Ce document **ne crée pas** :

- d'implémentation API ;
- de contrat OpenAPI ;
- de routes techniques détaillées ;
- de payload JSON détaillé ;
- de code ;
- de SQL ;
- de tests automatisés.

---

## 2. Principes de stratégie API

La stratégie API doit respecter les principes suivants :

- couvrir uniquement le flux **INC-01** ;
- maintenir **Interv360** comme source locale ;
- ne pas introduire de CRM réel ;
- ne pas rendre la synchronisation externe bloquante ;
- ne pas créer de dépendance externe obligatoire ;
- rester alignée avec les séquences **RS-01 à RS-05** ;
- laisser les contrats techniques détaillés à un **futur cycle d'implémentation** ;
- éviter la surconception.

---

## 3. Décision principale

**Pour INC-01, une API externe formalisée n'est pas requise comme prérequis métier du MVP.**

### Stratégie retenue

**Orchestration applicative interne prioritaire, API détaillée reportée si nécessaire.**

### Justification

- INC-01 ne dépend pas d'un CRM réel ;
- INC-01 ne nécessite pas de synchronisation externe bloquante ;
- le flux peut être démontré localement dans Interv360 ;
- les interactions principales sont internes au parcours utilisateur ;
- l'objectif est d'atteindre **STAT-06** localement ;
- les contrats API détaillés peuvent être définis plus tard si une architecture séparée front/back l'exige.

**Précision :** cette décision ne signifie pas qu'il n'y aura jamais d'API. Elle signifie qu'une **API externe ou contractuelle** n'est **pas un prérequis fonctionnel** pour INC-01.

---

## 4. Interactions applicatives à couvrir

| Interaction | Besoin API externe ? | Commentaire |
|-------------|----------------------|-------------|
| Créer une demande SAV | Non obligatoire | Interaction interne Interv360 |
| Afficher liste demandes | Non obligatoire | Lecture interne |
| Ouvrir fiche demande | Non obligatoire | Lecture interne |
| Qualifier demande | Non obligatoire | Action interne contrôlée par back |
| Créer intervention | Non obligatoire | Action interne |
| Sélectionner créneau | Non obligatoire | Action interne |
| Affecter technicien | Non obligatoire | Action interne |
| Consulter intervention technicien | Non obligatoire | Lecture interne |
| Saisir CR | Non obligatoire | Action interne |
| Renseigner résultat | Non obligatoire | Action interne |
| Clôturer localement | Non obligatoire | Action interne |
| Afficher STAT-06 | Non obligatoire | Lecture interne |
| Synchroniser CRM | Hors INC-01 | Non requis |
| Gérer anomalies intégration | Hors INC-01 | INC-04 |

---

## 5. Stratégie interne front / back

Si une séparation front / back est retenue en réalisation, des **interfaces internes** seront nécessaires entre le front et le back.

| Domaine interne | Type d'interaction | Niveau de détail à ce stade |
|-----------------|--------------------|-----------------------------|
| **Demandes** | Création / lecture / mise à jour fonctionnelle | Conceptuel |
| **Qualification** | Contrôle checklist / passage STAT-02 | Conceptuel |
| **Intervention** | Création / planification / affectation | Conceptuel |
| **Compte rendu** | Saisie CR / résultat | Conceptuel |
| **Clôture** | Contrôle et passage STAT-06 | Conceptuel |
| **Statuts** | Lecture / transition contrôlée | Conceptuel |
| **Journal fonctionnel** | Écriture événement minimal | Conceptuel |

**Précision :** ces interactions ne sont **pas** des contrats API détaillés.

---

## 6. Frontières fonctionnelles

| Frontière | Décision |
|-----------|----------|
| Front ↔ Back | Possible interface interne selon architecture retenue |
| Back ↔ Data | Persistance interne |
| Interv360 ↔ CRM réel | Hors INC-01 |
| Interv360 ↔ Dashboard / BI | Hors INC-01 |
| Interv360 ↔ Service d'anomalies | Hors INC-01 |
| Interv360 ↔ Système de notification | Hors INC-01 |
| Interv360 ↔ Auth avancée | Hors INC-01 |

---

## 7. API externe hors périmètre INC-01

| API externe | Statut | Raison |
|-------------|--------|--------|
| API CRM réel | Hors périmètre | CRM réel exclu |
| API synchronisation clôture | Hors périmètre | Clôture locale autonome |
| API anomalies intégration | Hors périmètre | INC-04 |
| API dashboard / BI | Hors périmètre | INC-05 / INC-06 |
| API notification | Hors périmètre | Post-MVP |
| API mobile native | Hors périmètre | Parcours web / responsive suffisant |
| API pièces jointes avancées | Hors périmètre | CR simple |

---

## 8. Principes de contrats futurs

Si des contrats API sont nécessaires dans un futur cycle, ils devront respecter les principes suivants :

- rester alignés sur les **objets conceptuels INC-01** ;
- exposer les **actions métier** sans exposer la logique interne inutilement ;
- contrôler les **transitions côté back** ;
- conserver **Interv360** comme source locale ;
- ne pas dépendre d'un **CRM réel** pour STAT-06 ;
- distinguer clairement **lecture**, **action métier** et **transition de statut** ;
- éviter les routes orientées dashboard dans INC-01 ;
- rester **testables fonctionnellement**.

**Aucun contrat détaillé** n'est créé dans ce document.

---

## 9. Relations avec les statuts

| Statut / transition | Stratégie API |
|---------------------|---------------|
| Création → **STAT-01** | Action interne de création |
| **STAT-01** → **STAT-02** | Transition contrôlée côté back |
| **STAT-02** → **STAT-03** | Transition contrôlée après intervention + créneau + technicien |
| **STAT-03** → **STAT-04** | Transition contrôlée après CR / réalisation |
| **STAT-04** → **STAT-06** | Transition contrôlée localement |
| **STAT-05** | Hors chemin nominal |
| **STAT-07** | Hors INC-01 |
| **STAT-08** | Hors INC-01 |

**Aucune transition** ne doit être pilotée directement par le front sans contrôle back.

---

## 10. Décisions retenues

| Décision | Statut |
|----------|--------|
| API externe non requise comme prérequis INC-01 | Retenu |
| Orchestration applicative interne prioritaire | Retenu |
| Interfaces internes possibles selon architecture retenue | Retenu |
| Contrats API détaillés reportés | Retenu |
| CRM réel hors stratégie INC-01 | Retenu |
| Sync externe non bloquante | Retenu |
| STAT-06 local sans API externe | Retenu |
| STAT-07 / STAT-08 hors stratégie INC-01 | Retenu |
| Dashboard / BI hors stratégie INC-01 | Retenu |
| Pas d'OpenAPI dans ce document | Retenu |

---

## 11. Décisions reportées

| Décision reportée | Pourquoi | Futur livrable / cycle |
|-------------------|----------|------------------------|
| Choix REST / GraphQL / autre | Dépend de l'architecture retenue | Futur cycle implémentation |
| Contrats API détaillés | Dépend du choix front/back | Futur cycle implémentation |
| Payloads | Dépend du modèle technique | Futur cycle implémentation |
| Authentification technique | Hors INC-01 détaillé | Futur cycle sécurité / implémentation |
| Versioning API | Non requis MVP local | Futur cycle |
| API CRM | Hors INC-01 | INC-03 / post-MVP |
| API anomalies | Hors INC-01 | INC-04 |

---

## 12. Risques API

| Risque | Impact | Réduction |
|--------|--------|-----------|
| API conçue trop tôt | Surconception | Garder niveau stratégie |
| CRM implicite | Blocage clôture | Maintenir hors INC-01 |
| Front qui pilote les statuts directement | Incohérence | Back contrôle transitions |
| API orientée dashboard | Élargissement | Hors INC-01 |
| Contrats détaillés sans stack | Incohérence | Reporter |
| Sync externe bloquante | Perte autonomie STAT-06 | Clôture locale |
| Confusion API interne / externe | Complexité | Clarifier frontières |

---

## 13. Garde-fous

- ne **pas** créer d'OpenAPI ;
- ne **pas** créer de routes détaillées ;
- ne **pas** créer de payload JSON ;
- ne **pas** créer d'implémentation API ;
- ne **pas** créer de code ;
- ne **pas** créer de SQL ;
- ne **pas** rendre un CRM réel obligatoire ;
- ne **pas** rendre une synchronisation externe bloquante ;
- ne **pas** activer STAT-07 / STAT-08 ;
- ne **pas** ajouter dashboard ou BI ;
- ne **pas** élargir INC-01.

---

## 14. Critères de sortie

- [x] décision API principale formulée ;
- [x] interactions applicatives couvertes ;
- [x] stratégie front / back interne cadrée ;
- [x] frontières fonctionnelles clarifiées ;
- [x] API externes hors périmètre listées ;
- [x] principes de contrats futurs définis ;
- [x] relation API / statuts cadrée ;
- [x] décisions retenues listées ;
- [x] décisions reportées listées ;
- [x] risques API identifiés ;
- [x] garde-fous repris.

---

## 15. Prochaine action

Le prochain livrable est :

**[`inc-01-status-rules.md`](inc-01-status-rules.md)**

**Objectif :** formaliser les règles détaillées de transition STAT-01 à STAT-06 pour INC-01.

---

*Stratégie API INC-01 — Draft.*
