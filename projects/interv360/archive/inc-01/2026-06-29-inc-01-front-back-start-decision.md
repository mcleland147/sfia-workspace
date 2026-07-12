# Interv360 — INC-01 front/back start decision

**Type** : Décision de séparation front / back  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization start  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-start`  
**Documents associés** : [`realization-start-plan.md`](realization-start-plan.md), [`inc-01-stack-options.md`](inc-01-stack-options.md), [`2026-06-29-inc-01-project-structure-decision.md`](2026-06-29-inc-01-project-structure-decision.md), [`implementation-planning-summary.md`](implementation-planning-summary.md)

---

## 1. Objectif

Ce document décide du niveau de séparation front / back recommandé pour préparer la réalisation de :

**INC-01 — Flux SAV minimal démontrable**

Il s'appuie sur les décisions indicatives précédentes :

- **Option A — Mono-app web simple** ;
- **structure mono-app avec séparation logique interne**.

Ce document **ne constitue pas** une autorisation de coder.

Il **ne crée pas** :

- d'architecture applicative réelle ;
- de code ;
- de projet applicatif ;
- de framework initialisé ;
- d'API ;
- d'OpenAPI ;
- de payload JSON ;
- de SQL ;
- de tests automatisés ;
- de scripts ;
- de tickets Jira réels.

---

## 2. Rappel INC-01

INC-01 couvre uniquement le flux :

**RS-01 → RS-02 → RS-03 → RS-04 → RS-05**

Chemin nominal :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

Résultat cible :

**STAT-06 — Clôturée localement**

Les écrans MVP concernés sont :

- liste demandes ;
- fiche demande ;
- planning ;
- intervention technicien ;
- compte rendu intervention.

---

## 3. Options de séparation étudiées

| Option | Description | Adéquation INC-01 |
|--------|-------------|-------------------|
| **Option 1** | Mono-app avec séparation logique interne | Élevée |
| **Option 2** | Front / back physiquement séparés | Moyenne à élevée mais plus lourde |
| **Option 3** | Prototype local sans séparation claire | Utile pour preuve mais risqué |
| **Option 4** | Low-code dépendant outil | Variable |
| **Option 5** | Documentation seule | Insuffisante pour réalisation |

---

## 4. Décision recommandée

**Décision recommandée : mono-app avec séparation logique interne.**

Pour INC-01, il est recommandé de séparer les responsabilités dans la conception **sans imposer** une séparation physique front / back dès le démarrage.

La séparation logique attendue est :

- UI / présentation ;
- Application / orchestration ;
- Métier / règles ;
- Data / persistance ;
- QA / validation.

### Justification

- réduit l'effort de setup ;
- limite le surdimensionnement ;
- couvre le besoin INC-01 ;
- garde les règles de statuts hors de l'UI ;
- permet une QA plus simple ;
- reste compatible avec une extraction front / back future ;
- évite de créer une API prématurée ;
- évite de transformer INC-01 en chantier d'architecture.

---

## 5. Responsabilités front

| Responsabilité front | Description |
|----------------------|-------------|
| **Afficher la liste des demandes** | Visibilité STAT et informations minimales |
| **Afficher la fiche demande** | Détail, qualification, statut |
| **Afficher les statuts** | STAT-01 à STAT-06 visibles |
| **Permettre les actions utilisateur** | Déclenchement des actions métier |
| **Afficher le planning** | Intervention, créneau, technicien |
| **Permettre la consultation technicien** | Parcours terrain |
| **Permettre la saisie du compte rendu** | CR et résultat |
| **Afficher les messages fonctionnels de refus** | Refus métier visibles |
| **Ne pas décider seul des transitions de statut** | Gouvernance hors UI |
| **Ne pas contenir les règles métier critiques** | Règles centralisées |

---

## 6. Responsabilités application / back logique

| Responsabilité application / back logique | Description |
|------------------------------------------|-------------|
| **Orchestrer le flux RS-01 à RS-05** | Coordination des cas d'usage |
| **Contrôler les préconditions** | Validation avant transition |
| **Appliquer les transitions autorisées** | Chemin nominal STAT-01 à STAT-06 |
| **Refuser les transitions interdites** | REF-001 à REF-010 |
| **Coordonner demande / intervention / CR / résultat** | Cohérence objets |
| **Conserver la cohérence du statut courant** | Source locale Interv360 |
| **Exposer une logique interne exploitable par l'UI** | Interface applicative interne |
| **Ne pas dépendre d'un CRM réel** | Garde-fou INC-01 |
| **Ne pas rendre la synchronisation bloquante** | Clôture locale autonome |
| **Ne pas activer STAT-07 / STAT-08** | Hors périmètre |

---

## 7. Responsabilités métier / règles

| Responsabilité métier | Description |
|-----------------------|-------------|
| **Définir STAT-01 à STAT-06** | Statuts actifs INC-01 |
| **Contrôler STAT-01 → STAT-02** | Qualification minimale requise |
| **Contrôler STAT-02 → STAT-03** | Planification complète requise |
| **Contrôler STAT-03 → STAT-04** | CR / réalisation requis |
| **Contrôler STAT-04 → STAT-06** | Clôture locale avec CR + résultat |
| **Refuser les sauts de statut** | Transitions non autorisées |
| **Refuser STAT-07 / STAT-08** | Hors INC-01 |
| **Maintenir STAT-05 hors chemin nominal** | Non obligatoire |
| **Refuser CRM obligatoire** | Clôture sans CRM |
| **Refuser dashboard obligatoire** | Liste / fiche suffisantes |

---

## 8. Responsabilités data

| Responsabilité data | Description |
|---------------------|-------------|
| **Stocker demande SAV** | Objet central |
| **Stocker qualification** | Lien demande / checklist |
| **Stocker intervention** | Lien demande / créneau / technicien |
| **Stocker créneau** | Planification simple |
| **Stocker technicien** | Affectation |
| **Stocker compte rendu** | Synthèse terrain |
| **Stocker résultat intervention** | Issue exploitable pour clôture |
| **Stocker statut courant** | Visibilité flux |
| **Stocker journal fonctionnel minimal** | Traçabilité démo |
| **Isoler les données de démonstration** | SAV-DEMO-001 / INT-DEMO-001 |

La stratégie data reste **à confirmer** avant démarrage code. Aucun SQL ni modèle physique n'est produit dans ce cycle.

---

## 9. Ce qui n'est pas décidé ici

| Élément non décidé | Raison |
|--------------------|--------|
| **Framework concret** | Futur choix avant code |
| **Langage** | Futur choix avant code |
| **Base de données** | Futur choix data |
| **API réelle** | Non requise pour décision front / back INC-01 |
| **OpenAPI** | Hors cycle |
| **Endpoints** | Hors cycle |
| **Payload JSON** | Hors cycle |
| **Tests automatisés** | Hors cycle |
| **Hébergement** | Hors cycle |
| **CI/CD** | Hors cycle |

---

## 10. Conditions qui justifieraient une séparation front/back physique

| Condition | Impact |
|-----------|--------|
| **Plusieurs clients front distincts** | Séparation utile |
| **API consommée par d'autres systèmes** | Séparation utile |
| **Besoin d'intégration externe fort** | Séparation utile |
| **Équipes front / back séparées** | Séparation utile |
| **Contraintes de sécurité spécifiques** | Séparation utile |
| **Montée en charge significative** | Séparation utile |
| **Roadmap post-INC-01 confirmée** | Séparation à réévaluer |
| **Besoin de contractualiser des API** | Séparation à réévaluer |

Aucune de ces conditions n'est considérée comme **obligatoire** pour INC-01 à ce stade.

---

## 11. Risques liés à la séparation front/back

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Séparation physique trop tôt** | Surcharge | Garder séparation logique |
| **Règles métier dans l'UI** | Incohérences | Isoler règles métier |
| **Data non isolée** | Dette | Isoler data / persistence |
| **Absence de logique applicative claire** | Flux fragile | Isoler orchestration |
| **API créée trop tôt** | Complexité | Éviter API détaillée INC-01 |
| **Front / back mélangés sans structure** | Dette | Respecter couches logiques |
| **CRM réintroduit via back** | Élargissement | Garde-fou |
| **Dashboard ajouté côté front** | Élargissement | Garde-fou |

---

## 12. Décision de séparation front/back

**Décision : séparation logique interne, sans séparation physique front / back pour INC-01.**

### Conséquences

- pas d'API externe obligatoire ;
- pas d'OpenAPI ;
- pas de contrat JSON ;
- pas de projet front séparé ;
- pas de projet back séparé ;
- pas de duplication de planning ;
- règles de statuts centralisées dans la couche métier / règles ;
- UI limitée à l'affichage et aux actions utilisateur ;
- future séparation possible si conditions post-INC-01 réunies.

Cette décision reste **documentaire** et doit être confirmée avant toute création réelle du projet applicatif.

---

## 13. Conditions avant autorisation code

| Condition | Statut attendu |
|-----------|----------------|
| **Stack concrète confirmée** | Obligatoire |
| **Structure projet confirmée** | Obligatoire |
| **Séparation logique confirmée** | Obligatoire |
| **Stratégie data confirmée** | Obligatoire |
| **Périmètre INC-01 gelé** | Obligatoire |
| **Figma non bloquant confirmé** | Obligatoire |
| **CRM / dashboard hors périmètre confirmés** | Obligatoire |
| **Autorisation explicite de démarrage code** | Obligatoire |

---

## 14. Décisions retenues

| Décision | Statut |
|----------|--------|
| Séparation logique interne recommandée | Retenu |
| Séparation physique front / back non retenue pour INC-01 | Retenu |
| Future séparation possible | Retenu |
| UI limitée aux écrans et actions | Retenu |
| Règles métier hors UI | Retenu |
| Data isolée | Retenu |
| API non obligatoire | Retenu |
| OpenAPI non produit | Retenu |
| Décision documentaire uniquement | Retenu |
| Autorisation de code non donnée | Retenu |

---

## 15. Garde-fous

- ne pas démarrer le code ;
- ne pas créer de projet front ;
- ne pas créer de projet back ;
- ne pas créer d'API ;
- ne pas créer d'OpenAPI ;
- ne pas créer de payload JSON ;
- ne pas créer de SQL ;
- ne pas créer de tests automatisés ;
- ne pas créer de scripts ;
- ne pas créer de ticket Jira réel ;
- ne pas créer de sprint plan ferme ;
- ne pas introduire CRM réel ;
- ne pas ajouter dashboard / BI ;
- ne pas activer STAT-07 / STAT-08 ;
- ne pas élargir INC-01.

---

## 16. Critères de sortie

- [x] options de séparation étudiées ;
- [x] décision recommandée formulée ;
- [x] responsabilités front définies ;
- [x] responsabilités application / back logique définies ;
- [x] responsabilités métier / règles définies ;
- [x] responsabilités data définies ;
- [x] éléments non décidés listés ;
- [x] conditions de séparation physique future listées ;
- [x] risques identifiés ;
- [x] décision de séparation formulée ;
- [x] conditions avant autorisation code listées ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 17. Prochaine action

Le prochain livrable est :

`inc-01-realization-start-checklist.md`

**Objectif :** lister les conditions minimales avant autorisation explicite de démarrage code.
