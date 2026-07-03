# Interv360 — Préparation du processus principal SAV MVP

**Projet** : PRJ-INTERV360  
**Phase** : 03-process  
**Type** : Préparation BPMN — processus principal  
**Statut** : Draft  
**Fichier BPMN cible** : `bpmn/interv360-sav-mvp.bpmn`  
**Outil cible** : Camunda Modeler

---

## 1. Objectif

Ce document prépare la modélisation du **processus principal SAV MVP Interv360** dans Camunda Modeler.

Il décrit :

- les **lanes** à créer ;
- les **événements** de début et de fin ;
- les **tâches** principales ;
- les **gateways** ;
- les **statuts** associés ;
- les **règles RG** liées ;
- les points qui seront traités dans des **diagrammes séparés**.

Ce document **ne crée pas** encore le fichier `.bpmn`.

---

## 2. Niveau BPMN retenu

| Élément | Choix |
|---------|-------|
| Niveau | Niveau 1 — Processus principal |
| Objectif | Représenter le cycle nominal SAV MVP |
| Détail exceptions | Limité aux points de sortie principaux |
| Anomalies intégration | Référencées mais détaillées dans un diagramme dédié |
| Exécution Camunda | Hors périmètre |

---

## 3. Lanes à créer

Créer les lanes suivantes dans Camunda Modeler :

| Lane | Rôle |
|------|------|
| Client / canal entrant | Origine de la demande SAV |
| Manager SAV | Qualification, arbitrage doublon, planification |
| Technicien | Réalisation intervention, compte rendu, signature ou motif absence |
| Interv360 | Support applicatif, statuts, dossier intervention |
| CRM simulé / intégration | Synchronisation post-clôture |
| Dashboard / pilotage | Indicateurs, retards, anomalies visibles |

---

## 4. Événement de début

| Élément BPMN | Libellé recommandé | Lane |
|--------------|-------------------|------|
| Start Event | Demande SAV reçue | Client / canal entrant |

**Description :** le processus démarre lorsqu'une demande SAV est reçue ou saisie dans Interv360 (canal CRM simulé, email sécurisé ou saisie manuelle manager).

---

## 5. Flux principal recommandé

| Ordre | Élément BPMN | Libellé recommandé | Lane | Statut associé | Règle liée |
|-------|--------------|-------------------|------|----------------|------------|
| 1 | Start Event | Demande SAV reçue | Client / canal entrant | — | — |
| 2 | Task | Créer ou enregistrer la demande | Interv360 | À qualifier (STAT-01) | RG-C05 |
| 3 | Task | Vérifier les données minimales | Manager SAV | À qualifier (STAT-01) | RG-C05 |
| 4 | Gateway | Données suffisantes ? | Manager SAV | À qualifier (STAT-01) | RG-C05 |
| 5 | Task | Compléter / maintenir à qualifier | Manager SAV | À qualifier (STAT-01) | RG-C05 |
| 6 | Task | Rechercher doublon potentiel | Interv360 | À qualifier (STAT-01) | RG-C04 |
| 7 | Gateway | Doublon potentiel détecté ? | Manager SAV | À qualifier (STAT-01) | RG-C04 |
| 8 | Task | Arbitrer le doublon manuellement | Manager SAV | À qualifier (STAT-01) | RG-C04 |
| 9 | Task | Qualifier la demande | Manager SAV | Qualifiée (STAT-02) | RG-I05 |
| 10 | Task | Planifier l'intervention | Manager SAV | Planifiée (STAT-03) | RG-I05 |
| 11 | Task | Affecter un technicien | Manager SAV | Planifiée (STAT-03) | RG-I05 |
| 12 | Task | Consulter l'intervention planifiée | Technicien | Planifiée (STAT-03) | RG-I05 |
| 13 | Task | Démarrer l'intervention | Technicien | En cours (STAT-04) | RG-I05 |
| 14 | Gateway | Intervention réalisable ? | Technicien | En cours (STAT-04) | RG-I05 |
| 15 | Task | Passer en attente client | Technicien / Manager SAV | En attente client (STAT-05) | RG-I05 |
| 16 | Task | Réaliser l'intervention | Technicien | En cours (STAT-04) | RG-I05 |
| 17 | Task | Rédiger le compte rendu web | Technicien | En cours (STAT-04) | RG-R05 |
| 18 | Gateway | Signature client disponible ? | Technicien | En cours (STAT-04) | RG-R02 |
| 19 | Task | Capturer la signature | Technicien | En cours (STAT-04) | RG-R02 |
| 20 | Task | Renseigner le motif d'absence de signature | Technicien | En cours (STAT-04) | RG-R02 / RG-R05 |
| 21 | Task | Clôturer l'intervention | Interv360 | Clôturée (STAT-06) | RG-R05 |
| 22 | Task | Synchroniser la clôture vers CRM simulé | CRM simulé / intégration | Clôturée (STAT-06) | RG-I06 |
| 23 | Gateway | Synchronisation réussie ? | CRM simulé / intégration | Clôturée / Anomalie d'intégration (STAT-08) | RG-I06 |
| 24 | Task | Mettre à jour le dashboard | Dashboard / pilotage | Clôturée (STAT-06) | RG-I05 |
| 25 | End Event | Intervention clôturée | Dashboard / pilotage | Clôturée (STAT-06) | RG-R05 |

---

## 6. Branches simplifiées à représenter dans le processus principal

### 6.1 Données insuffisantes

À partir de la gateway : **Données suffisantes ?**

Si **non** :

- maintenir le statut **À qualifier** (STAT-01) ;
- compléter les informations ;
- revenir vers la qualification.

Ne pas détailler tous les cas de relance dans ce diagramme principal.

### 6.2 Doublon potentiel

À partir de la gateway : **Doublon potentiel détecté ?**

Si **oui** :

- arbitrage **manuel** par le Manager SAV ;
- ne pas fusionner automatiquement ;
- poursuivre ou stopper selon décision métier.

Le détail du doublon sera repris dans `interv360-sav-exceptions.bpmn`.

### 6.3 Attente client

À partir de la gateway : **Intervention réalisable ?**

Si **non** :

- passer en **En attente client** (STAT-05) ;
- reprise du flux lorsque le blocage est levé.

Le détail de l'attente client sera repris dans `interv360-sav-exceptions.bpmn`.

### 6.4 Absence de signature

À partir de la gateway : **Signature client disponible ?**

Si **non** :

- renseigner un **motif d'absence** ;
- poursuivre la clôture si le compte rendu est complet.

Le détail de la clôture sans signature sera repris dans `interv360-sav-exceptions.bpmn`.

### 6.5 Synchronisation CRM KO

À partir de la gateway : **Synchronisation réussie ?**

Si **non** :

- créer une **anomalie d'intégration** (STAT-08) ;
- rendre l'anomalie visible au dashboard ;
- prévoir reprise manuelle.

Le détail sera repris dans `interv360-integration-errors.bpmn`.

---

## 7. Statuts représentés dans le processus principal

| Statut | Code | Moment BPMN |
|--------|------|-------------|
| À qualifier | STAT-01 | Création / vérification données |
| Qualifiée | STAT-02 | Après qualification par Manager SAV |
| Planifiée | STAT-03 | Après planification et affectation |
| En cours | STAT-04 | Démarrage intervention |
| En attente client | STAT-05 | Blocage ou attente client |
| Clôturée | STAT-06 | Après CR et signature ou motif absence |
| Anomalie d'intégration | STAT-08 | Si synchronisation CRM échoue |
| En retard | STAT-07 | Indicateur dashboard — **non représenté** comme statut bloquant dans le flux principal |

---

## 8. Règles RG représentées

| Règle | Représentation BPMN |
|-------|---------------------|
| **RG-C04** | Recherche et arbitrage doublon potentiel |
| **RG-C05** | Données minimales obligatoires / maintien à qualifier |
| **RG-I05** | Statuts MVP et transitions principales |
| **RG-I06** | Synchronisation CRM et anomalie d'intégration |
| **RG-R02** | Signature optionnelle |
| **RG-R05** | Compte rendu obligatoire et clôture traçable |

---

## 9. ADR candidates visibles dès le processus principal

| Sujet | Pourquoi |
|-------|----------|
| Mapping durable des statuts | Les transitions structurent le cycle SAV |
| Synchronisation CRM simulée | La clôture déclenche une synchronisation externe |
| Gestion des erreurs d'intégration | La sync KO crée une anomalie et une reprise manuelle |
| Clôture sans signature | La signature est optionnelle mais le motif est obligatoire |

---

## 10. Recommandations de modélisation Camunda

Dans Camunda Modeler :

- créer un process nommé **Interv360 SAV MVP** ;
- utiliser des **lanes métier**, pas des composants techniques ;
- rester au **niveau fonctionnel** ;
- éviter de modéliser les détails techniques d'API ;
- utiliser des **gateways simples** (XOR) pour les décisions ;
- éviter les sous-processus exécutables ;
- garder les **libellés courts** ;
- sauvegarder le fichier sous `projects/interv360/03-process/bpmn/interv360-sav-mvp.bpmn`.

---

## 11. Éléments à ne pas modéliser dans ce diagramme

Ne pas modéliser ici :

- géolocalisation ;
- IA assistive ;
- détails de l'API CRM ;
- modèle de données ;
- écrans détaillés ;
- backlog ;
- user stories ;
- tests ;
- stratégie de recette ;
- delivery.

---

## 12. Conclusion

Le processus principal peut être **modélisé dans Camunda Modeler**.

Le diagramme doit rester **lisible** et centré sur le **cycle nominal SAV MVP**, avec seulement les branches principales nécessaires à la compréhension.

Les **exceptions détaillées** et les **anomalies d'intégration** seront traitées dans des diagrammes dédiés (`interv360-sav-exceptions.bpmn`, `interv360-integration-errors.bpmn`).

---

*Préparation BPMN — processus principal SAV MVP — Interv360 — SFIA — Draft.*
