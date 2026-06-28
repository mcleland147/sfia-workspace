# Interv360 — Domaines fonctionnels et responsabilités

**Projet** : PRJ-INTERV360  
**Phase** : 05-functional-architecture  
**Type** : Architecture fonctionnelle — Domaines  
**Statut** : Draft  
**Branche** : `arch/interv360-functional-detail`

---

## 1. Objectif

Ce document décrit les **domaines fonctionnels Interv360** et leurs **responsabilités**.

Il s'appuie sur :

- le cadrage fonctionnel ;
- le cycle BPMN ;
- les ADR structurantes ;
- les règles RG priorisées ;
- le mapping des statuts.

Ce document **ne produit pas** de backlog, de user stories, de tests, de code ou de delivery.

---

## 2. Vue d'ensemble des domaines

| Domaine | Rôle principal | Statuts concernés | Sources principales |
|---------|----------------|-------------------|---------------------|
| Demande SAV | Créer, qualifier et fiabiliser la demande | STAT-01, STAT-02 | RG-C04, RG-C05, BPMN principal |
| Planification | Planifier et affecter l'intervention | STAT-03 | RG-I05, BPMN principal |
| Intervention terrain | Exécuter ou suspendre temporairement l'intervention | STAT-04, STAT-05 | RG-I05, BPMN principal, exceptions |
| Clôture | Produire le CR, gérer signature/motif et clôturer localement | STAT-06 | RG-R02, RG-R05, ADR-004 |
| Synchronisation CRM simulée | Transmettre la clôture vers une cible externe représentative | STAT-06 | ADR-002, BPMN intégration |
| Anomalies d'intégration | Gérer les échecs de sync et reprises manuelles | STAT-08 | RG-I06, ADR-003 |
| Pilotage | Rendre visibles retards, anomalies, clôtures et alertes | STAT-07, STAT-08 | RG-I05, RG-I06, BPMN exceptions/intégration |

---

## 3. Domaine — Demande SAV

### 3.1 Responsabilité

Le domaine **Demande SAV** couvre la création, l'enregistrement et la qualification initiale d'une demande.

Il garantit que la demande dispose des **informations minimales** nécessaires avant d'être exploitée opérationnellement.

### 3.2 Fonctions principales

| Fonction | Description |
|----------|-------------|
| Créer / enregistrer la demande | Créer une demande SAV dans Interv360 |
| Vérifier les données minimales | Identifier si la demande est exploitable |
| Maintenir à qualifier | Conserver une demande incomplète en STAT-01 |
| Rechercher doublon potentiel | Identifier une demande proche ou similaire |
| Arbitrer le doublon | Décision manuelle, sans fusion automatique |
| Qualifier la demande | Passer la demande en STAT-02 Qualifiée |

### 3.3 Règles structurantes

- **RG-C05** : les données minimales conditionnent la qualification.
- **RG-C04** : un doublon potentiel doit être arbitré manuellement.
- La fusion automatique n'est pas retenue.
- Une demande incomplète reste en **STAT-01 À qualifier**.

### 3.4 Entrées / sorties

| Type | Élément |
|------|---------|
| Entrées | Demande entrante, données client, description besoin |
| Sorties | Demande qualifiée, demande maintenue à qualifier, doublon arbitré |

---

## 4. Domaine — Planification

### 4.1 Responsabilité

Le domaine **Planification** couvre la transformation d'une demande qualifiée en intervention planifiée et affectée.

### 4.2 Fonctions principales

| Fonction | Description |
|----------|-------------|
| Planifier l'intervention | Positionner une intervention dans le planning |
| Affecter un technicien | Associer une ressource opérationnelle |
| Préparer la consultation terrain | Rendre l'intervention disponible au technicien |

### 4.3 Règles structurantes

- La planification intervient après qualification.
- Le statut cible est **STAT-03 Planifiée**.
- Le planning prépare l'exécution terrain mais ne clôture rien.
- Le retard éventuel est un indicateur de pilotage, non un statut bloquant.

### 4.4 Entrées / sorties

| Type | Élément |
|------|---------|
| Entrées | Demande qualifiée |
| Sorties | Intervention planifiée, technicien affecté |

---

## 5. Domaine — Intervention terrain

### 5.1 Responsabilité

Le domaine **Intervention terrain** couvre la consultation, le démarrage, la réalisation et la suspension éventuelle d'une intervention.

### 5.2 Fonctions principales

| Fonction | Description |
|----------|-------------|
| Consulter l'intervention | Accéder à l'intervention planifiée |
| Démarrer l'intervention | Passer en STAT-04 En cours |
| Réaliser l'intervention | Exécuter l'action terrain |
| Identifier un blocage client | Détecter une impossibilité temporaire |
| Passer en attente client | Suspendre temporairement en STAT-05 |
| Reprendre l'intervention | Revenir de STAT-05 vers STAT-04 |

### 5.3 Règles structurantes

- **STAT-04 En cours** représente une intervention active.
- **STAT-05 En attente client** est temporaire.
- Le retour normal de l'attente client se fait vers **STAT-04 En cours**.
- L'attente client doit être visible au pilotage.

### 5.4 Entrées / sorties

| Type | Élément |
|------|---------|
| Entrées | Intervention planifiée, affectation technicien |
| Sorties | Intervention réalisée, intervention en attente client, intervention reprise |

---

## 6. Domaine — Clôture

### 6.1 Responsabilité

Le domaine **Clôture** couvre la production du compte rendu, la gestion de la signature ou du motif d'absence, et la **clôture locale** de l'intervention.

### 6.2 Fonctions principales

| Fonction | Description |
|----------|-------------|
| Rédiger le compte rendu | Produire le CR web obligatoire |
| Capturer la signature | Capturer la signature si disponible |
| Renseigner un motif d'absence | Obligatoire si signature absente |
| Valider les conditions de clôture | Vérifier CR, résultat, date, responsable, signature ou motif |
| Clôturer localement | Passer en STAT-06 Clôturée |

### 6.3 Règles structurantes

- Le compte rendu est **obligatoire**.
- La signature est **optionnelle**.
- Le motif d'absence est **obligatoire** si la signature est absente.
- La clôture locale **ne dépend pas** de la synchronisation CRM.
- Interv360 reste **source de vérité locale**.

### 6.4 Entrées / sorties

| Type | Élément |
|------|---------|
| Entrées | Intervention réalisée, CR, signature ou motif |
| Sorties | Intervention clôturée localement en STAT-06 |

---

## 7. Domaine — Synchronisation CRM simulée

### 7.1 Responsabilité

Le domaine **Synchronisation CRM simulée** couvre la transmission post-clôture vers une cible externe représentative.

### 7.2 Fonctions principales

| Fonction | Description |
|----------|-------------|
| Préparer les données de synchronisation | Construire les informations métier à transmettre |
| Envoyer la clôture au CRM simulé | Représenter la transmission externe |
| Recevoir un résultat de sync | Succès, rejet, timeout, erreur informative |
| Journaliser le résultat | Conserver une trace fonctionnelle |

### 7.3 Règles structurantes

- Le CRM simulé **n'est pas** source de vérité.
- La synchronisation intervient **après** clôture locale.
- Les statuts métier **STAT-01 à STAT-06** sont les seuls candidats à la synchronisation.
- **STAT-07** et **STAT-08** ne sont pas synchronisés comme statuts CRM métier.

### 7.4 Entrées / sorties

| Type | Élément |
|------|---------|
| Entrées | Intervention clôturée localement, données de clôture |
| Sorties | Sync réussie, erreur de sync, journalisation |

---

## 8. Domaine — Anomalies d'intégration

### 8.1 Responsabilité

Le domaine **Anomalies d'intégration** couvre la création, la qualification et le suivi des anomalies liées à la synchronisation CRM simulée.

### 8.2 Fonctions principales

| Fonction | Description |
|----------|-------------|
| Créer une anomalie | Créer STAT-08 en cas d'erreur significative |
| Qualifier la gravité | Information, Bloquant métier, Bloquant sync |
| Déterminer la reprise | Décider si une action manuelle est requise |
| Corriger ou relancer | Corriger donnée ou relancer sync simulée |
| Journaliser la reprise | Tracer le traitement |
| Afficher l'anomalie | Rendre visible au dashboard |

### 8.3 Règles structurantes

- **STAT-08** est un indicateur interne d'intégration.
- **STAT-08** ne remet pas en cause **STAT-06**.
- Une intervention peut être clôturée localement et porter une anomalie d'intégration.
- Le retry automatique avancé est **hors MVP**.
- La reprise reste **manuelle et fonctionnelle**.

### 8.4 Entrées / sorties

| Type | Élément |
|------|---------|
| Entrées | Erreur sync, donnée rejetée, timeout, erreur informative |
| Sorties | Anomalie qualifiée, reprise manuelle, dashboard mis à jour |

---

## 9. Domaine — Pilotage

### 9.1 Responsabilité

Le domaine **Pilotage** couvre la visibilité opérationnelle du cycle SAV, des retards, des clôtures et des anomalies d'intégration.

### 9.2 Fonctions principales

| Fonction | Description |
|----------|-------------|
| Afficher les demandes / interventions | Vue opérationnelle du cycle SAV |
| Afficher les retards | STAT-07 comme indicateur dashboard |
| Afficher les anomalies | STAT-08 comme indicateur d'intégration |
| Prioriser les alertes | Mettre en avant les alertes les plus importantes |
| Suivre les clôtures | Suivre les interventions clôturées localement |
| Suivre les reprises | Suivre les anomalies nécessitant action |

### 9.3 Règles structurantes

- **STAT-07** est un indicateur de pilotage non bloquant.
- **STAT-08** est visible au dashboard.
- Les anomalies doivent être distinguées par gravité.
- Le dashboard **ne doit pas** devenir source de vérité métier.
- Le dashboard **rend visible**, mais ne remplace pas les décisions métier.

### 9.4 Entrées / sorties

| Type | Élément |
|------|---------|
| Entrées | Statuts, retards, anomalies, clôtures |
| Sorties | Alertes, indicateurs, vues de pilotage |

---

## 10. Matrice domaines / ADR

| Domaine | ADR-001 | ADR-002 | ADR-003 | ADR-004 |
|---------|:-------:|:-------:|:-------:|:-------:|
| Demande SAV | Oui | Non | Non | Non |
| Planification | Oui | Non | Non | Non |
| Intervention terrain | Oui | Non | Non | Non |
| Clôture | Oui | Oui | Non | Oui |
| Synchronisation CRM simulée | Oui | Oui | Oui | Oui |
| Anomalies d'intégration | Oui | Oui | Oui | Oui |
| Pilotage | Oui | Oui | Oui | Oui |

---

## 11. Matrice domaines / BPMN

| Domaine | BPMN principal | BPMN exceptions | BPMN intégration |
|---------|:--------------:|:---------------:|:----------------:|
| Demande SAV | Oui | Oui | Non |
| Planification | Oui | Oui, via retard | Non |
| Intervention terrain | Oui | Oui, via attente client | Non |
| Clôture | Oui | Oui, via signature absente | Oui, point de départ sync |
| Synchronisation CRM simulée | Oui, simplifié | Non | Oui |
| Anomalies d'intégration | Oui, simplifié | Non | Oui |
| Pilotage | Oui | Oui | Oui |

---

## 12. Points de vigilance

- Ne pas transformer les domaines en backlog.
- Ne pas détailler les écrans finaux dans ce document.
- Ne pas introduire d'intégration CRM réelle.
- Ne pas contredire les ADR-001 à ADR-004.
- Garder la séparation entre statut métier, indicateur dashboard et anomalie d'intégration.
- Garder Interv360 comme source de vérité locale.
- Conserver la clôture locale indépendante de la synchronisation externe.

---

## 13. Conclusion

Les domaines fonctionnels Interv360 sont structurés autour de **sept blocs cohérents** :

1. Demande SAV ;
2. Planification ;
3. Intervention terrain ;
4. Clôture ;
5. Synchronisation CRM simulée ;
6. Anomalies d'intégration ;
7. Pilotage.

Cette structuration peut maintenant alimenter les livrables suivants :

- objets métier ;
- statuts et transitions ;
- vue fonctionnelle d'intégration ;
- dashboard et alertes ;
- synthèse d'architecture fonctionnelle.

---

*Domaines fonctionnels — Interv360 — SFIA — Draft.*
