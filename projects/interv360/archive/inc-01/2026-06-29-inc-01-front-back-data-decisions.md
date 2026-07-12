# Interv360 — INC-01 front / back / data decisions

**Type** : Décisions de conception front / back / data  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Technical design  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-technical-design`  
**Documents associés** : [`technical-design-plan.md`](technical-design-plan.md), [`inc-01-application-architecture.md`](inc-01-application-architecture.md), [`inc-01-technical-framing.md`](inc-01-technical-framing.md), [`inc-01-realization-slicing.md`](inc-01-realization-slicing.md)

---

## 1. Objectif

Ce document formalise les **décisions de conception front / back / data** pour **INC-01 — Flux SAV minimal démontrable**.

Il vise à clarifier les **responsabilités de chaque couche** avant réalisation, **sans démarrer le code**.

Ce document **ne crée pas** :

- de code ;
- d'implémentation API ;
- de SQL ;
- de schéma de base de données exécutable ;
- de tests automatisés ;
- de choix de framework imposé.

---

## 2. Principes de décision

Les décisions front / back / data doivent respecter les principes suivants :

- séparation claire des responsabilités ;
- logique métier portée **hors** de l'interface utilisateur ;
- persistance considérée comme support de démonstration du flux ;
- **Interv360** source locale du flux INC-01 ;
- **STAT-01 à STAT-06** uniquement pour INC-01 ;
- aucune dépendance à un CRM réel ;
- aucune synchronisation externe bloquante ;
- aucun dashboard ou BI ;
- Figma non bloquant ;
- aucune stack imposée si non nécessaire à ce stade.

---

## 3. Vue synthétique des responsabilités

| Couche | Responsabilité principale | Décision |
|--------|---------------------------|----------|
| **Front** | Afficher les écrans, porter les actions utilisateur, rendre les statuts visibles | Retenu |
| **Back** | Orchestrer le flux, appliquer les règles métier, contrôler les transitions | Retenu |
| **Data** | Conserver les objets et états nécessaires au flux | Retenu |
| **QA** | Vérifier le comportement attendu sans porter la logique applicative | Hors couche applicative |
| **Design** | Guider les parcours, sans bloquer la réalisation | Non bloquant |

---

## 4. Décisions front

| Décision front | Statut | Justification |
|----------------|--------|---------------|
| Le front porte les écrans INC-01 | Retenu | Nécessaire au flux utilisateur |
| Le front affiche les statuts mais ne décide pas les transitions | Retenu | Évite logique métier dans UI |
| La Liste demandes reste un point d'accès | Retenu | La fiche reste source détaillée |
| La Fiche demande SAV reste l'écran de pilotage détaillé | Retenu | Cohérence métier |
| Le Planning reste simple pour INC-01 | Retenu | Pas d'optimisation avancée |
| Le parcours technicien peut rester web / responsive | Retenu | Pas d'app mobile native complète |
| Le Compte rendu reste simple | Retenu | Pas de PDF / pièces jointes avancées |
| Figma n'est pas bloquant | Retenu | Specs Git suffisantes |

---

## 5. Décisions back

| Décision back | Statut | Justification |
|---------------|--------|---------------|
| Le back porte l'orchestration du flux SAV | Retenu | Cohérence RS-01 à RS-05 |
| Le back applique les règles de transition | Retenu | Évite statuts dispersés |
| Le back contrôle les préconditions métier | Retenu | Qualification, planification, clôture |
| Le back gère le lien demande / intervention / CR | Retenu | Cohérence du flux |
| Le back ne dépend pas d'un CRM réel | Retenu | Clôture locale autonome |
| Le back ne rend pas la sync externe bloquante | Retenu | STAT-06 local |
| Le back n'introduit pas STAT-07 / STAT-08 | Retenu | Hors INC-01 |
| Le back ne porte pas dashboard / BI | Retenu | Hors INC-01 |

---

## 6. Décisions data

| Décision data | Statut | Justification |
|---------------|--------|---------------|
| La couche data conserve les demandes | Retenu | RS-01 à RS-05 |
| La couche data conserve les interventions | Retenu | RS-03 à RS-05 |
| La couche data conserve les CR et résultats | Retenu | RS-04 à RS-05 |
| La couche data conserve le statut courant | Retenu | Visibilité du flux |
| La couche data conserve les liens demande / intervention / CR | Retenu | Cohérence métier |
| La couche data conserve une traçabilité minimale | Retenu | Démonstration et compréhension |
| Le modèle reste conceptuel / logique à ce stade | Retenu | Pas de SQL exécutable |
| Aucune base de données cible n'est imposée ici | Retenu | Choix technique futur |

---

## 7. Décisions par séquence RS

| Séquence | Décisions front | Décisions back | Décisions data |
|----------|-----------------|----------------|----------------|
| **RS-01** | Création / liste / fiche | Création demande + STAT-01 | Demande persistée avec statut |
| **RS-02** | Checklist qualification | Contrôle qualification + STAT-02 | Qualification et statut conservés |
| **RS-03** | Planning simple, créneau, technicien | Création intervention + affectation + STAT-03 | Intervention liée à demande |
| **RS-04** | Consultation technicien + CR simple | Enregistrement CR + résultat + STAT-04 | CR et résultat liés à intervention |
| **RS-05** | Action clôture + visibilité STAT-06 | Contrôle CR/résultat + clôture locale | Clôture locale et STAT-06 conservés |

---

## 8. Front / back / data — règles de séparation

| Règle | Décision |
|-------|----------|
| Le front déclenche les actions mais ne décide pas les transitions | Retenu |
| Le back décide et contrôle les transitions | Retenu |
| La data conserve l'état mais ne porte pas les règles métier | Retenu |
| Les statuts sont visibles côté front mais gouvernés côté back | Retenu |
| La fiche peut afficher les détails mais ne remplace pas les règles métier | Retenu |
| La liste peut afficher les statuts mais ne remplace pas la fiche | Retenu |
| Le CR peut être saisi côté front mais validé côté back | Retenu |
| La clôture peut être demandée côté front mais contrôlée côté back | Retenu |

---

## 9. Décisions reportées

| Décision reportée | Raison | Livrable cible |
|-------------------|--------|----------------|
| Choix de framework front | Non nécessaire dans ce document | Futur arbitrage technique |
| Choix de stack back | Non nécessaire dans ce document | Futur arbitrage technique |
| Choix de base de données | Non nécessaire dans ce document | Futur arbitrage technique |
| Modèle de données détaillé | Traité dans livrable dédié | [`inc-01-data-model.md`](inc-01-data-model.md) |
| Stratégie API | Traité dans livrable dédié | [`inc-01-api-strategy.md`](inc-01-api-strategy.md) |
| Règles détaillées de statuts | Traité dans livrable dédié | [`inc-01-status-rules.md`](inc-01-status-rules.md) |
| Scénarios QA détaillés | Traité dans livrable dédié | [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) |

---

## 10. Risques de décision

| Risque | Impact | Réduction |
|--------|--------|-----------|
| Logique métier dans le front | Incohérence | Back porte transitions |
| Modèle data trop détaillé trop tôt | Ralentissement | Rester conceptuel / logique |
| Choix de stack prématuré | Verrouillage inutile | Reporter si non nécessaire |
| Front dépendant de Figma final | Ralentissement | Specs Git suffisantes |
| CRM implicite dans le back | Blocage | Interv360 source locale |
| Dashboard implicite côté front | Élargissement | Liste / fiche suffisantes |
| Data sans traçabilité minimale | Démo fragile | Journal fonctionnel minimal |

---

## 11. Décisions retenues

| Décision | Statut |
|----------|--------|
| Front responsable affichage / actions utilisateur | Retenu |
| Back responsable orchestration / règles / transitions | Retenu |
| Data responsable persistance / état / liens | Retenu |
| Statuts gouvernés hors UI | Retenu |
| Interv360 source locale | Retenu |
| Pas de CRM réel | Retenu |
| Pas de dashboard / BI | Retenu |
| Figma non bloquant | Retenu |
| Pas de stack imposée | Retenu |
| Pas de SQL exécutable | Retenu |

---

## 12. Garde-fous

- ne **pas** créer de code ;
- ne **pas** créer d'implémentation API ;
- ne **pas** créer de SQL ;
- ne **pas** choisir de framework si non nécessaire ;
- ne **pas** imposer de stack ;
- ne **pas** créer de test automatisé ;
- ne **pas** ajouter de CRM réel ;
- ne **pas** rendre la synchronisation bloquante ;
- ne **pas** ajouter dashboard ou BI ;
- ne **pas** activer STAT-07 / STAT-08 ;
- ne **pas** élargir INC-01 ;
- ne **pas** rendre Figma bloquant.

---

## 13. Critères de sortie

- [x] responsabilités front définies ;
- [x] responsabilités back définies ;
- [x] responsabilités data définies ;
- [x] décisions par séquence RS documentées ;
- [x] règles de séparation définies ;
- [x] décisions reportées identifiées ;
- [x] risques de décision identifiés ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 14. Prochaine action

Le prochain livrable est :

**[`inc-01-data-model.md`](inc-01-data-model.md)**

**Objectif :** décrire le modèle de données conceptuel / logique d'INC-01 sans SQL exécutable.

---

*Décisions front / back / data INC-01 — Draft.*
