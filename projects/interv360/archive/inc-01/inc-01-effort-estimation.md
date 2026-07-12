# Interv360 — INC-01 effort estimation

**Type** : Estimation macro de charge et complexité  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization preparation  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-preparation`  
**Documents associés** : [`realization-preparation-plan.md`](realization-preparation-plan.md), [`inc-01-realization-slicing.md`](inc-01-realization-slicing.md), [`2026-06-29-inc-01-technical-framing.md`](2026-06-29-inc-01-technical-framing.md), [`inc-01-qa-strategy.md`](inc-01-qa-strategy.md)

---

## 1. Objectif

Ce document propose une **estimation macro** de charge et de complexité pour **INC-01 — Flux SAV minimal démontrable**.

L'objectif est d'aider à préparer une future réalisation en identifiant :

- la complexité relative des séquences ;
- les principaux facteurs d'effort ;
- les incertitudes ;
- les prérequis de chiffrage ;
- les risques de dérive ;
- une trajectoire indicative.

Ce document **ne constitue pas** un engagement planning, un devis, un sprint plan ou un chiffrage contractuel.

---

## 2. Principes d'estimation

L'estimation est :

- macro ;
- indicative ;
- comparative entre séquences ;
- basée sur le périmètre fonctionnel connu ;
- dépendante des choix techniques futurs ;
- non contractuelle ;
- sans démarrage de code.

Elle **ne couvre pas** :

- estimation détaillée par tâche technique ;
- estimation par développeur nominatif ;
- vélocité d'équipe ;
- coût budgétaire ;
- plan de sprint détaillé ;
- tests automatisés ;
- mise en production.

---

## 3. Échelle utilisée

### Complexité relative

| Niveau | Signification |
|--------|---------------|
| **XS** | Effort très limité, logique simple, peu de dépendances |
| **S** | Effort limité, règles simples, faible incertitude |
| **M** | Effort moyen, plusieurs objets ou écrans, dépendances modérées |
| **L** | Effort important, plusieurs objets liés, règles de transition, risques d'intégration interne |
| **XL** | Effort élevé, hors cible INC-01 sauf dérive de périmètre |

### Incertitude

| Niveau | Signification |
|--------|---------------|
| **Faible** | Cadrage suffisamment stable |
| **Moyenne** | Quelques décisions nécessaires |
| **Élevée** | Dépend fortement de choix techniques non tranchés |

---

## 4. Estimation macro par séquence

| Séquence | Complexité | Incertitude | Commentaire |
|----------|------------|-------------|-------------|
| **RS-01** — Socle demande SAV | M | Moyenne | Création demande, liste, fiche, source détaillée |
| **RS-02** — Qualification minimale | S | Faible à moyenne | Qualification minimale et transition STAT-02 |
| **RS-03** — Planification intervention | L | Moyenne | Intervention, créneau, technicien, transition STAT-03 |
| **RS-04** — Réalisation terrain et CR | M | Moyenne | Parcours technicien, CR simple, résultat |
| **RS-05** — Clôture locale et STAT-06 | M | Moyenne | Clôture locale, STAT-06, visibilité liste / fiche |

**RS-03** est probablement la séquence la plus structurante, car elle introduit l'objet intervention, le créneau et l'affectation technicien.

---

## 5. Facteurs d'effort par séquence

### RS-01 — Socle demande SAV

**Facteurs d'effort**

- création d'une demande SAV ;
- visibilité liste ;
- ouverture fiche ;
- affichage détail ;
- cohérence liste / fiche ;
- statut STAT-01 visible.

**Complexité indicative :** M  
**Incertitude :** Moyenne

**Facteurs de réduction**

- rester sur données minimales ;
- éviter pièces jointes avancées ;
- ne pas introduire multi-canal complet ;
- ne pas faire de dashboard.

---

### RS-02 — Qualification minimale

**Facteurs d'effort**

- checklist minimale ;
- complétion des informations ;
- règle de passage STAT-01 → STAT-02 ;
- visibilité statut.

**Complexité indicative :** S  
**Incertitude :** Faible à moyenne

**Facteurs de réduction**

- checklist simple ;
- pas de workflow multi-acteurs ;
- pas de statut intermédiaire ;
- pas d'approbation complexe.

---

### RS-03 — Planification intervention

**Facteurs d'effort**

- création intervention liée à une demande ;
- représentation d'un créneau simple ;
- affectation technicien ;
- règle de passage STAT-02 → STAT-03 ;
- visibilité planning / fiche / liste.

**Complexité indicative :** L  
**Incertitude :** Moyenne

**Facteurs de réduction**

- planning simple ;
- pas d'optimisation automatique ;
- pas de gestion avancée des disponibilités ;
- pas de notifications avancées.

---

### RS-04 — Réalisation terrain et compte rendu

**Facteurs d'effort**

- consultation technicien ;
- affichage informations terrain ;
- saisie CR simple ;
- renseignement résultat ;
- rattachement CR / intervention.

**Complexité indicative :** M  
**Incertitude :** Moyenne

**Facteurs de réduction**

- pas d'application mobile native complète ;
- pas d'offline avancé ;
- pas de CR PDF ;
- pas de pièces jointes avancées ;
- résultat simple.

---

### RS-05 — Clôture locale et visualisation STAT-06

**Facteurs d'effort**

- vérification CR + résultat ;
- clôture locale ;
- règle STAT-04 → STAT-06 ;
- visibilité STAT-06 sur fiche ;
- visibilité STAT-06 sur liste ;
- absence de dépendance CRM.

**Complexité indicative :** M  
**Incertitude :** Moyenne

**Facteurs de réduction**

- pas de synchronisation bloquante ;
- pas de CRM réel ;
- pas de validation multi-acteurs ;
- pas de dashboard.

---

## 6. Estimation relative consolidée

| Séquence | Complexité relative | Poids indicatif |
|----------|---------------------|-----------------|
| **RS-01** — Socle demande SAV | M | 20 % |
| **RS-02** — Qualification minimale | S | 10 % |
| **RS-03** — Planification intervention | L | 30 % |
| **RS-04** — Réalisation terrain et CR | M | 20 % |
| **RS-05** — Clôture locale et STAT-06 | M | 20 % |

Cette pondération est **indicative** et doit être réévaluée après choix techniques.

---

## 7. Charge indicative par profil

| Profil | Contribution attendue |
|--------|-----------------------|
| **Product / métier** | Préciser règles, valider critères, arbitrer périmètre |
| **UX / UI** | Sécuriser parcours minimum, sans perfection Figma |
| **Front** | Préparer écrans et interactions |
| **Back** | Préparer règles métier et transitions |
| **Data** | Préparer persistance minimale |
| **QA** | Préparer vérification fonctionnelle et démonstration |

---

## 8. Pré-requis avant estimation détaillée

| Pré-requis | Pourquoi |
|------------|----------|
| Données minimales de demande stabilisées | Base du socle RS-01 |
| Checklist qualification définie | Condition de passage STAT-02 |
| Niveau de planning simple clarifié | Cadrage RS-03 sans surdimensionnement |
| Modèle relationnel fonctionnel minimal clarifié | Cohérence demande / intervention / CR |
| Stratégie de persistance choisie | Impact charge data et back |
| Parcours technicien précisé | Cadrage RS-04 |
| Format résultat intervention défini | Condition de clôture RS-05 |
| Stratégie QA détaillée décidée | Vérification progressive du flux |
| Trajectoire de démo validée | Alignement effort / valeur démontrable |

---

## 9. Risques de dérive d'effort

| Risque | Effet sur charge | Réduction |
|--------|------------------|-----------|
| Ajout multi-canal complet | Hausse forte | Rester INC-02 |
| Planning avancé | Hausse forte | Rester créneau simple |
| App mobile native | Hausse forte | Parcours mobile simple / responsive |
| CRM réel | Hausse très forte | Hors INC-01 |
| Dashboard | Hausse moyenne | INC-05 |
| Règles de qualification complexes | Hausse moyenne | Checklist minimale |
| CR enrichi / PDF / PJ | Hausse moyenne à forte | CR simple |
| Rôles avancés | Hausse moyenne | Rôles minimaux |

---

## 10. Hypothèses d'estimation

- INC-01 reste limité au **P0-A** ;
- les **16 stories** restent inchangées ;
- les **68 critères** restent métier ;
- aucun **CRM réel** n'est ajouté ;
- aucun **dashboard** n'est ajouté ;
- aucun **test automatisé** n'est exigé dans cette estimation ;
- **Figma** reste non bloquant ;
- les **choix techniques** restent à décider dans un futur cycle.

---

## 11. Décision d'estimation

**INC-01 est estimable au niveau macro, mais nécessite un cadrage technique complémentaire avant estimation détaillée.**

### Statut proposé

**`Macro-estimated — pending technical choices`**

L'estimation détaillée devra être produite après clarification des choix **front / back / data**, de la **stratégie de persistance** et de la **stratégie QA détaillée**.

---

## 12. Garde-fous

- ne **pas** transformer ce document en planning projet ;
- ne **pas** transformer ce document en devis ;
- ne **pas** figer une charge contractuelle ;
- ne **pas** choisir de stack ;
- ne **pas** créer de modèle SQL ;
- ne **pas** créer d'API ;
- ne **pas** créer de code ;
- ne **pas** créer de tests automatisés ;
- ne **pas** élargir INC-01 ;
- ne **pas** rendre Figma bloquant.

---

## 13. Critères de sortie

- [x] estimation macro par séquence produite ;
- [x] facteurs d'effort identifiés ;
- [x] pondération indicative définie ;
- [x] profils contributeurs identifiés ;
- [x] prérequis avant estimation détaillée listés ;
- [x] risques de dérive identifiés ;
- [x] hypothèses d'estimation explicitées ;
- [x] décision d'estimation formulée ;
- [x] garde-fous repris.

---

## 14. Prochaine action

Le prochain livrable est :

**[`realization-preparation-summary.md`](realization-preparation-summary.md)**

**Objectif :** synthétiser le cycle realization preparation et décider si la branche peut être clôturée par PR.

---

*Estimation macro INC-01 — Draft.*
