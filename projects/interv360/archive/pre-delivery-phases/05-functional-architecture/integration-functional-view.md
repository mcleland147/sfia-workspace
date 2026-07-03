# Interv360 — Vue fonctionnelle d'intégration CRM simulée

**Projet** : PRJ-INTERV360  
**Phase** : 05-functional-architecture  
**Type** : Architecture fonctionnelle — Intégration  
**Statut** : Draft  
**Branche** : `arch/interv360-functional-detail`

---

## 1. Objectif

Ce document formalise la **vue fonctionnelle** de la synchronisation CRM simulée Interv360.

Il décrit :

- le rôle du CRM simulé ;
- les moments fonctionnels de synchronisation ;
- les informations métier concernées ;
- les résultats possibles ;
- les anomalies d'intégration ;
- les principes de reprise manuelle ;
- les impacts sur le dashboard.

Ce document **ne produit pas** d'API réelle, de contrat technique, de schéma JSON technique, de mapping technique, de code, de modèle SQL, de workflow technique, de BPMN, de backlog, de user stories, de tests ou de delivery.

---

## 2. Principes structurants

| Principe | Description |
|----------|-------------|
| Interv360 source de vérité locale | Les décisions métier locales sont portées par Interv360 |
| CRM simulé cible représentative | Le CRM simulé représente une cible externe, sans être une intégration réelle |
| Synchronisation post-clôture | La synchronisation intervient après la clôture locale |
| Clôture non bloquée par sync | Un échec de synchronisation n'annule pas STAT-06 |
| Anomalies internes | Les erreurs significatives créent STAT-08 dans Interv360 |
| Pilotage visible | Les anomalies doivent être visibles au dashboard |
| Reprise manuelle | La correction ou relance reste fonctionnelle et manuelle dans le MVP |

---

## 3. Rôle du CRM simulé

Le **CRM simulé** représente une cible externe permettant de vérifier fonctionnellement les effets d'une synchronisation post-clôture.

Il permet de raisonner sur :

- les informations à transmettre ;
- les retours de succès ou d'échec ;
- les anomalies d'intégration ;
- les impacts de pilotage ;
- la séparation entre clôture locale et synchronisation externe.

Il **ne constitue pas** :

- une source de vérité ;
- une intégration CRM réelle ;
- un référentiel maître ;
- un système de pilotage ;
- un prérequis à la clôture locale.

---

## 4. Moment fonctionnel de synchronisation

La synchronisation CRM simulée intervient **après** la clôture locale.

| Étape | Statut / situation | Description |
|-------|-------------------|-------------|
| 1 | STAT-04 En cours | Intervention réalisée |
| 2 | Conditions de clôture réunies | CR, résultat, responsable, date/heure, signature ou motif |
| 3 | STAT-06 Clôturée | Clôture locale validée dans Interv360 |
| 4 | Sync CRM simulée | Transmission fonctionnelle vers cible représentative |
| 5A | Sync OK | Clôture transmise |
| 5B | Sync KO | STAT-08 créé ou maintenu comme anomalie interne |
| 5C | Sync en attente | Clôture locale conservée, suivi au dashboard si nécessaire |

**Règle clé :**

La synchronisation CRM simulée est un **traitement post-clôture**.  
Elle **ne conditionne jamais** la validité de STAT-06.

---

## 5. Données fonctionnelles concernées

La synchronisation CRM simulée peut porter les informations métier suivantes :

| Information | Objet source | Rôle fonctionnel |
|-------------|--------------|------------------|
| Identifiant intervention | Intervention | Identifier l'intervention clôturée |
| Statut métier | Intervention | Transmettre le statut métier synchronisable |
| Date / heure de clôture | Intervention | Tracer le moment de clôture |
| Responsable / technicien | Technicien / Intervention | Identifier l'acteur de clôture |
| Résultat d'intervention | Résultat d'intervention | Qualifier l'issue métier |
| Résumé du compte rendu | Compte rendu | Donner une synthèse de l'intervention |
| Signature présente / absente | Signature | Indiquer si la signature existe |
| Motif d'absence de signature | Motif absence signature | Justifier l'absence si nécessaire |

**Important :**

- **STAT-01 à STAT-06** sont les seuls statuts candidats à la synchronisation métier.
- **STAT-07** n'est pas synchronisé comme statut CRM métier.
- **STAT-08** n'est pas synchronisé comme statut CRM métier.
- Les données listées restent **fonctionnelles**, pas techniques.

---

## 6. Résultats fonctionnels possibles

| Résultat | Description | Effet dans Interv360 |
|----------|-------------|----------------------|
| Sync réussie | La cible simulée accepte la transmission | Trace de succès |
| Rejet fonctionnel | La cible simulée refuse une information métier | Création ou maintien STAT-08 |
| Timeout / absence de réponse | La cible simulée ne répond pas dans le délai attendu | Création ou maintien STAT-08 selon gravité |
| Erreur informative | Écart non bloquant identifié | Trace informative, anomalie selon qualification |
| Sync en attente | Traitement non finalisé | Suivi fonctionnel, visibilité possible |

---

## 7. Anomalies d'intégration

Une **anomalie d'intégration** représente une situation où la synchronisation CRM simulée ne produit pas le résultat attendu.

### 7.1 Déclencheurs

| Déclencheur | Description |
|-------------|-------------|
| Rejet fonctionnel | Donnée refusée par la cible simulée |
| Donnée manquante | Information nécessaire à la sync absente ou incohérente |
| Timeout | Absence de réponse de la cible simulée |
| Erreur informative significative | Message à prendre en compte fonctionnellement |
| Échec de relance | Reprise manuelle sans succès |

### 7.2 Effets

| Effet | Description |
|-------|-------------|
| STAT-08 | Anomalie interne d'intégration |
| Dashboard | Visibilité de l'anomalie |
| Historique | Trace de la tentative et du résultat |
| Reprise manuelle | Correction ou relance possible |
| Clôture conservée | STAT-06 reste valide |

---

## 8. Gravités d'anomalie

| Gravité | Signification | Exemple fonctionnel |
|---------|---------------|---------------------|
| Information | Écart non bloquant ou message de suivi | Sync acceptée avec avertissement |
| Bloquant métier | Information métier empêchant une transmission cohérente | Résultat ou motif attendu incohérent |
| Bloquant sync | Transmission impossible ou rejetée | Timeout persistant, rejet de la cible simulée |

**Principes :**

- La gravité oriente le traitement.
- La gravité alimente le dashboard.
- La gravité ne remplace pas le statut métier.
- Une anomalie bloquante **n'annule pas** la clôture locale.

---

## 9. Reprise manuelle

La **reprise manuelle** correspond au traitement fonctionnel d'une anomalie d'intégration.

### 9.1 Actions possibles

| Action | Description |
|--------|-------------|
| Corriger une donnée | Ajuster une information fonctionnelle incohérente |
| Compléter une information | Ajouter une donnée manquante nécessaire à la sync |
| Relancer la synchronisation | Rejouer une tentative après correction |
| Accepter l'anomalie | Considérer qu'aucune correction n'est nécessaire |
| Clôturer le traitement | Marquer l'anomalie comme traitée fonctionnellement |

### 9.2 Principes

- La reprise est **manuelle** dans le MVP.
- La reprise doit être **tracée** dans l'historique.
- La reprise **n'implique pas** la réouverture automatique de l'intervention.
- La reprise peut supprimer l'anomalie active ou la maintenir selon résultat.
- Le retry automatique avancé est **hors MVP**.

---

## 10. Effets sur les statuts

| Situation | Statut métier | Indicateur interne | Interprétation |
|-----------|---------------|-------------------|----------------|
| Clôture locale sans sync lancée | STAT-06 | Aucun ou sync en attente | Clôture locale valide |
| Sync réussie | STAT-06 | Aucun STAT-08 actif | Clôture transmise |
| Sync KO significative | STAT-06 | STAT-08 | Clôture valide, anomalie à traiter |
| Sync en attente | STAT-06 | Indicateur de suivi possible | Clôture valide, sync non finalisée |
| Anomalie traitée | STAT-06 | STAT-08 retiré ou historisé | Clôture conservée |

---

## 11. Effets sur le dashboard

Le dashboard doit permettre de visualiser :

| Élément | Description |
|---------|-------------|
| Clôtures locales | Interventions en STAT-06 |
| Sync réussies | Clôtures transmises sans anomalie active |
| Sync en attente | Transmissions non finalisées |
| Anomalies STAT-08 | Échecs ou alertes d'intégration |
| Gravités | Information, Bloquant métier, Bloquant sync |
| Reprises à traiter | Anomalies nécessitant action |
| Historique de traitement | Tentatives, corrections, relances |

**Principes :**

- Le dashboard **rend visible**.
- Le dashboard **ne devient pas** source de vérité.
- Les anomalies sont **priorisées par gravité**.
- Les retards **STAT-07** et anomalies **STAT-08** doivent rester **distingués**.

---

## 12. Matrice intégration / objets métier

| Objet métier | Rôle dans la sync CRM simulée |
|--------------|-------------------------------|
| Intervention | Porte l'identifiant, le statut et la clôture |
| Compte rendu | Fournit le résumé de clôture |
| Résultat d'intervention | Qualifie l'issue métier |
| Signature | Indique une signature présente |
| Motif d'absence de signature | Justifie l'absence de signature |
| Technicien | Identifie l'acteur de clôture |
| Synchronisation CRM simulée | Porte la tentative et son résultat |
| Anomalie d'intégration | Porte l'erreur significative |
| Gravité d'anomalie | Priorise le traitement |
| Reprise manuelle | Traite ou relance l'anomalie |
| Historique | Trace les événements |

---

## 13. Matrice intégration / ADR

| Élément | ADR-002 | ADR-003 | ADR-004 |
|---------|:-------:|:-------:|:-------:|
| CRM simulé comme cible représentative | Oui | Non | Non |
| Interv360 source de vérité locale | Oui | Non | Oui |
| Sync post-clôture | Oui | Oui | Oui |
| STAT-08 en cas d'erreur significative | Non | Oui | Oui |
| Gravités d'anomalie | Non | Oui | Non |
| Reprise manuelle | Non | Oui | Non |
| Sync KO non bloquante pour STAT-06 | Oui | Oui | Oui |

---

## 14. Situations non retenues

| Situation | Raison |
|-----------|--------|
| CRM comme source de vérité | Contraire à ADR-002 |
| Sync obligatoire avant clôture | Contraire à ADR-004 |
| Sync KO annulant STAT-06 | Contraire à ADR-004 |
| STAT-08 synchronisé comme statut CRM | Contraire à ADR-001 et ADR-003 |
| Retry automatique avancé | Hors MVP |
| API CRM réelle | Hors périmètre du cycle |
| Mapping technique détaillé | Hors périmètre du document |

---

## 15. Points de vigilance

- Ne pas transformer la sync simulée en intégration réelle.
- Ne pas introduire de contrat API.
- Ne pas introduire de modèle technique.
- Ne pas faire du CRM simulé une source de vérité.
- Ne pas faire du dashboard une source de vérité.
- Ne pas conditionner STAT-06 à la sync.
- Ne pas synchroniser STAT-07 ou STAT-08 comme statuts CRM métier.
- Ne pas réouvrir automatiquement une intervention clôturée à cause d'une anomalie.

---

## 16. Conclusion

La synchronisation CRM simulée est une **vue fonctionnelle post-clôture**.

Elle permet de représenter :

- la transmission d'une clôture locale ;
- les retours de succès ou d'échec ;
- les anomalies d'intégration ;
- la reprise manuelle ;
- la visibilité dashboard.

Elle respecte les décisions ADR structurantes :

- Interv360 source de vérité locale ;
- CRM simulé cible représentative ;
- STAT-08 interne ;
- STAT-06 conservé même en cas de sync KO.

---

*Vue fonctionnelle d'intégration — Interv360 — SFIA — Draft.*
