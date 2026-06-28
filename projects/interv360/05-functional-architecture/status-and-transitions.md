# Interv360 — Statuts et transitions fonctionnelles

**Projet** : PRJ-INTERV360  
**Phase** : 05-functional-architecture  
**Type** : Architecture fonctionnelle — Statuts et transitions  
**Statut** : Draft  
**Branche** : `arch/interv360-functional-detail`

---

## 1. Objectif

Ce document formalise les **statuts Interv360**, les **transitions fonctionnelles autorisées** et les **règles associées**.

Il s'appuie sur :

- le mapping des statuts ;
- le cycle BPMN ;
- les ADR structurantes ;
- les domaines fonctionnels ;
- les objets métier.

Ce document **ne produit pas** de BPMN, de workflow technique, de backlog, de user stories, de tests, de code, de modèle SQL, d'API ou de delivery.

---

## 2. Principes structurants

Les statuts Interv360 sont organisés en **trois familles** :

| Famille | Description | Statuts concernés |
|---------|-------------|-------------------|
| Statuts métier du cycle SAV | Portent le cycle fonctionnel principal | STAT-01 à STAT-06 |
| Indicateurs internes de pilotage | Signalent une situation visible au dashboard | STAT-07 |
| Indicateurs internes d'intégration | Signalent une anomalie liée à la sync CRM simulée | STAT-08 |

**Principes :**

- **STAT-01 à STAT-06** portent le cycle métier.
- **STAT-07** et **STAT-08** ne remplacent pas le statut métier principal.
- **STAT-07** et **STAT-08** ne sont pas synchronisés comme statuts CRM métier.
- **STAT-06** peut coexister avec **STAT-08**.
- Interv360 reste **source de vérité locale**.
- La synchronisation CRM simulée **ne conditionne pas** la clôture locale.

---

## 3. Catalogue des statuts

| Code | Libellé | Famille | Objet principal | Synchronisable CRM simulé |
|------|---------|---------|-----------------|---------------------------|
| STAT-01 | À qualifier | Statut métier | Demande SAV | Candidat |
| STAT-02 | Qualifiée | Statut métier | Demande SAV | Candidat |
| STAT-03 | Planifiée | Statut métier | Intervention | Candidat |
| STAT-04 | En cours | Statut métier | Intervention | Candidat |
| STAT-05 | En attente client | Statut métier | Intervention | Candidat |
| STAT-06 | Clôturée | Statut métier | Intervention | Candidat |
| STAT-07 | En retard | Indicateur pilotage | Intervention / Planning | Non |
| STAT-08 | Anomalie d'intégration | Indicateur intégration | Intervention / Sync CRM simulée | Non |

---

## 4. Statuts métier du cycle SAV

### 4.1 STAT-01 — À qualifier

| Élément | Description |
|---------|-------------|
| Objet principal | Demande SAV |
| Domaine | Demande SAV |
| Signification | Demande créée mais pas encore exploitable |
| Entrées possibles | Création demande, données minimales insuffisantes |
| Sorties possibles | STAT-02 Qualifiée |
| Règles | Données minimales requises pour qualification ; doublon potentiel à arbitrer |

### 4.2 STAT-02 — Qualifiée

| Élément | Description |
|---------|-------------|
| Objet principal | Demande SAV |
| Domaine | Demande SAV |
| Signification | Demande exploitable et prête à être planifiée |
| Entrées possibles | STAT-01 après qualification |
| Sorties possibles | STAT-03 Planifiée |
| Règles | La qualification ne crée pas encore l'exécution terrain |

### 4.3 STAT-03 — Planifiée

| Élément | Description |
|---------|-------------|
| Objet principal | Intervention |
| Domaine | Planification |
| Signification | Intervention positionnée et affectée |
| Entrées possibles | STAT-02 après planification |
| Sorties possibles | STAT-04 En cours |
| Règles | Technicien affecté ; planning renseigné |

### 4.4 STAT-04 — En cours

| Élément | Description |
|---------|-------------|
| Objet principal | Intervention |
| Domaine | Intervention terrain |
| Signification | Intervention démarrée ou reprise |
| Entrées possibles | STAT-03, STAT-05 |
| Sorties possibles | STAT-05 En attente client, STAT-06 Clôturée |
| Règles | Une intervention en attente client revient vers STAT-04 avant clôture |

### 4.5 STAT-05 — En attente client

| Élément | Description |
|---------|-------------|
| Objet principal | Intervention |
| Domaine | Intervention terrain |
| Signification | Intervention temporairement suspendue pour cause client |
| Entrées possibles | STAT-04 |
| Sorties possibles | STAT-04 |
| Règles | Statut temporaire ; doit rester visible au pilotage |

### 4.6 STAT-06 — Clôturée

| Élément | Description |
|---------|-------------|
| Objet principal | Intervention |
| Domaine | Clôture |
| Signification | Intervention clôturée localement |
| Entrées possibles | STAT-04 |
| Sorties possibles | Aucune transition métier normale |
| Règles | CR obligatoire ; signature ou motif d'absence ; résultat ; responsable ; date/heure ; sync CRM non bloquante |

---

## 5. Indicateurs internes

### 5.1 STAT-07 — En retard

| Élément | Description |
|---------|-------------|
| Nature | Indicateur interne de pilotage |
| Objet concerné | Intervention / Planning |
| Déclencheur | Écart entre planning attendu et situation réelle |
| Effet | Visibilité dashboard |
| Règle clé | Ne remplace pas le statut métier principal |
| Synchronisation CRM | Non synchronisé comme statut CRM métier |

### 5.2 STAT-08 — Anomalie d'intégration

| Élément | Description |
|---------|-------------|
| Nature | Indicateur interne d'intégration |
| Objet concerné | Intervention / Synchronisation CRM simulée |
| Déclencheur | Erreur significative de synchronisation CRM simulée |
| Effet | Visibilité dashboard, reprise manuelle possible |
| Règle clé | Peut coexister avec STAT-06 |
| Synchronisation CRM | Non synchronisé comme statut CRM métier |

---

## 6. Transitions fonctionnelles principales

| Transition | Départ | Arrivée | Domaine | Condition fonctionnelle |
|------------|--------|---------|---------|-------------------------|
| Création demande | — | STAT-01 | Demande SAV | Demande entrante enregistrée |
| Qualification | STAT-01 | STAT-02 | Demande SAV | Données minimales OK, doublon arbitré si nécessaire |
| Planification | STAT-02 | STAT-03 | Planification | Créneau ou journée défini, technicien affecté |
| Démarrage intervention | STAT-03 | STAT-04 | Intervention terrain | Technicien démarre l'intervention |
| Mise en attente client | STAT-04 | STAT-05 | Intervention terrain | Blocage client temporaire |
| Reprise intervention | STAT-05 | STAT-04 | Intervention terrain | Blocage levé ou reprise possible |
| Clôture locale | STAT-04 | STAT-06 | Clôture | Conditions de clôture réunies |
| Détection retard | Statut métier inchangé | STAT-07 en indicateur | Pilotage | Retard détecté par rapport au planning |
| Détection anomalie sync | Statut métier inchangé | STAT-08 en indicateur | Anomalies intégration | Erreur sync significative |

---

## 7. Conditions de clôture locale

Pour passer en **STAT-06**, les éléments fonctionnels suivants sont requis :

| Élément | Obligatoire | Commentaire |
|---------|:-----------:|-------------|
| Compte rendu | Oui | CR web obligatoire |
| Résultat d'intervention | Oui | Issue métier de l'intervention |
| Date / heure de clôture | Oui | Trace de clôture |
| Responsable / technicien | Oui | Acteur de clôture |
| Signature | Non | Optionnelle |
| Motif d'absence de signature | Oui si signature absente | Justification obligatoire |
| Historique | Oui | Trace fonctionnelle |
| Synchronisation CRM simulée | Non | Post-clôture, non bloquante |

**Règle structurante :**

La clôture locale est valide dès lors que les conditions fonctionnelles locales sont réunies.  
La synchronisation CRM simulée intervient **après** clôture et **ne conditionne pas** STAT-06.

---

## 8. Coexistence STAT-06 / STAT-08

Une intervention peut être dans la situation suivante :

| Situation | Interprétation |
|-----------|----------------|
| STAT-06 seule | Intervention clôturée localement, sans anomalie d'intégration active |
| STAT-06 + STAT-08 | Intervention clôturée localement, mais anomalie de sync à traiter |
| STAT-06 + sync en attente | Intervention clôturée localement, synchronisation non encore finalisée |
| Absence STAT-06 | Intervention non clôturée localement |

**Principes :**

- **STAT-08** ne retire pas **STAT-06**.
- **STAT-08** ne rouvre pas automatiquement l'intervention.
- **STAT-08** n'invalide pas le CR.
- **STAT-08** déclenche une visibilité dashboard et éventuellement une reprise manuelle.

---

## 9. Transitions interdites ou non retenues

| Transition | Raison |
|------------|--------|
| STAT-05 → STAT-06 directement | L'attente client doit revenir vers une reprise ou une situation clôturable |
| STAT-07 comme statut métier principal | STAT-07 est un indicateur de pilotage |
| STAT-08 comme statut métier principal CRM | STAT-08 est interne à Interv360 |
| Sync CRM KO → annulation STAT-06 | La clôture locale est autonome |
| Absence signature → blocage automatique clôture | La signature est optionnelle si motif renseigné |
| Doublon potentiel → fusion automatique | Arbitrage manuel retenu |

---

## 10. Matrice statuts / objets métier

| Statut | Demande SAV | Intervention | Planning | Sync CRM simulée | Anomalie intégration | Pilotage |
|--------|:-----------:|:------------:|:--------:|:----------------:|:------------------:|:--------:|
| STAT-01 | Oui | Non | Non | Non | Non | Oui |
| STAT-02 | Oui | Non | Non | Non | Non | Oui |
| STAT-03 | Non | Oui | Oui | Non | Non | Oui |
| STAT-04 | Non | Oui | Non | Non | Non | Oui |
| STAT-05 | Non | Oui | Non | Non | Non | Oui |
| STAT-06 | Non | Oui | Non | Oui | Oui | Oui |
| STAT-07 | Non | Oui | Oui | Non | Non | Oui |
| STAT-08 | Non | Oui | Non | Oui | Oui | Oui |

---

## 11. Matrice statuts / domaines

| Statut | Demande SAV | Planification | Intervention terrain | Clôture | Sync CRM | Anomalies | Pilotage |
|--------|:-----------:|:-------------:|:--------------------:|:-------:|:--------:|:---------:|:--------:|
| STAT-01 | Oui | Non | Non | Non | Non | Non | Oui |
| STAT-02 | Oui | Non | Non | Non | Non | Non | Oui |
| STAT-03 | Non | Oui | Non | Non | Non | Non | Oui |
| STAT-04 | Non | Non | Oui | Non | Non | Non | Oui |
| STAT-05 | Non | Non | Oui | Non | Non | Non | Oui |
| STAT-06 | Non | Non | Non | Oui | Oui | Oui | Oui |
| STAT-07 | Non | Oui | Oui | Non | Non | Non | Oui |
| STAT-08 | Non | Non | Non | Non | Oui | Oui | Oui |

---

## 12. Points de vigilance

- Ne pas faire de **STAT-07** un statut métier principal.
- Ne pas faire de **STAT-08** un statut métier synchronisé CRM.
- Ne pas invalider **STAT-06** en cas d'échec sync.
- Ne pas rendre la signature obligatoire.
- Ne pas permettre une fusion automatique des doublons.
- Ne pas transformer ces transitions en workflow technique.
- Ne pas modifier les BPMN existants dans ce document.

---

## 13. Conclusion

Le modèle de statuts Interv360 est structuré autour de :

- **six statuts métier** du cycle SAV ;
- **un indicateur interne** de retard ;
- **un indicateur interne** d'anomalie d'intégration.

Cette structuration permet de poursuivre vers :

- la vue fonctionnelle d'intégration CRM simulée ;
- le dashboard et les alertes ;
- la synthèse d'architecture fonctionnelle ;
- éventuellement un second lot ADR.

---

*Statuts et transitions — Interv360 — SFIA — Draft.*
