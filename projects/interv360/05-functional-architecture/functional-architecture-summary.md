# Interv360 — Synthèse d'architecture fonctionnelle détaillée

**Projet** : PRJ-INTERV360  
**Phase** : 05-functional-architecture  
**Type** : Synthèse architecture fonctionnelle  
**Statut** : Draft  
**Branche** : `arch/interv360-functional-detail`

---

## 1. Objectif

Ce document **consolide** l'architecture fonctionnelle détaillée Interv360.

Il synthétise :

- les domaines fonctionnels ;
- les objets métier ;
- les statuts et transitions ;
- la synchronisation CRM simulée ;
- les anomalies d'intégration ;
- le dashboard et les alertes ;
- les décisions ADR structurantes intégrées.

Ce document **ne produit pas** de backlog, de user stories, de tests, de code, de maquette UI finale, d'API, de modèle technique, de BPMN ou de delivery.

---

## 2. Vision fonctionnelle consolidée

Interv360 est structuré comme une solution de **pilotage du cycle SAV** autour d'un objet central : **l'intervention**.

Le cycle fonctionnel s'articule autour de :

1. la demande SAV ;
2. la qualification ;
3. la planification ;
4. l'intervention terrain ;
5. la clôture locale ;
6. la synchronisation CRM simulée ;
7. la gestion des anomalies ;
8. le pilotage opérationnel.

La **source de vérité locale** reste **Interv360**.

Le **CRM simulé** représente une cible externe fonctionnelle, sans être une intégration réelle ni un référentiel maître.

Le **dashboard** rend visibles les situations à suivre, sans remplacer les statuts métier, les objets métier ou les décisions locales.

---

## 3. Domaines fonctionnels consolidés

| Domaine | Responsabilité principale |
|---------|---------------------------|
| Demande SAV | Créer, qualifier et fiabiliser la demande |
| Planification | Planifier l'intervention et affecter un technicien |
| Intervention terrain | Exécuter, suspendre temporairement et reprendre l'intervention |
| Clôture | Produire le CR, gérer signature/motif et clôturer localement |
| Synchronisation CRM simulée | Transmettre fonctionnellement la clôture vers une cible représentative |
| Anomalies d'intégration | Qualifier et traiter les erreurs de synchronisation |
| Pilotage | Rendre visibles retards, anomalies, clôtures et reprises |

---

## 4. Objets métier structurants

| Objet métier | Rôle dans l'architecture fonctionnelle |
|--------------|------------------------------------------|
| Demande SAV | Porte le besoin initial et la qualification |
| Intervention | Porte le cycle opérationnel principal |
| Client | Donne le contexte bénéficiaire ou interlocuteur |
| Équipement / site | Donne le contexte matériel ou géographique |
| Technicien | Porte l'affectation et l'action terrain |
| Planning | Organise les interventions et alimente les retards |
| Compte rendu | Trace obligatoire de clôture |
| Signature | Validation client optionnelle |
| Motif d'absence de signature | Justification obligatoire si signature absente |
| Résultat d'intervention | Issue métier de la clôture |
| Synchronisation CRM simulée | Tentative fonctionnelle de transmission externe |
| Anomalie d'intégration | Échec ou alerte liée à la sync |
| Gravité d'anomalie | Priorisation fonctionnelle d'une anomalie |
| Reprise manuelle | Traitement fonctionnel d'une anomalie |
| Indicateur de pilotage | Synthèse visible au dashboard |
| Historique | Traçabilité transverse des événements |

---

## 5. Statuts et transitions consolidés

Les statuts sont répartis en **trois familles** :

| Famille | Statuts | Rôle |
|---------|---------|------|
| Cycle métier SAV | STAT-01 à STAT-06 | Porter le cycle fonctionnel principal |
| Indicateur retard | STAT-07 | Signaler un retard opérationnel |
| Indicateur anomalie intégration | STAT-08 | Signaler une anomalie de synchronisation |

**Chaîne fonctionnelle principale :**

```
— → STAT-01 → STAT-02 → STAT-03 → STAT-04 ⇄ STAT-05 → STAT-06
```

**Indicateurs parallèles :**

- **STAT-07** : retard opérationnel, non synchronisé CRM
- **STAT-08** : anomalie d'intégration, non synchronisée CRM

**Principes :**

- **STAT-07** ne remplace pas le statut métier principal.
- **STAT-08** ne remplace pas le statut métier principal.
- **STAT-08** peut coexister avec **STAT-06**.
- **STAT-06** reste valide même si la synchronisation CRM simulée échoue.
- **STAT-07** et **STAT-08** ne sont pas synchronisés comme statuts CRM métier.

---

## 6. Clôture locale

La **clôture locale** est une décision métier portée par Interv360.

Pour passer en **STAT-06**, les éléments suivants sont requis :

| Élément | Règle |
|---------|-------|
| Compte rendu | Obligatoire |
| Résultat d'intervention | Obligatoire |
| Date / heure de clôture | Obligatoire |
| Responsable / technicien | Obligatoire |
| Signature | Optionnelle |
| Motif d'absence de signature | Obligatoire si signature absente |
| Historique | Obligatoire |
| Synchronisation CRM simulée | Non bloquante, post-clôture |

**Principe structurant :**

La clôture locale **ne dépend pas** de la synchronisation CRM simulée.

---

## 7. Synchronisation CRM simulée

La synchronisation CRM simulée est une **vue fonctionnelle post-clôture**.

Elle permet de représenter :

- l'envoi d'une intervention clôturée vers une cible externe ;
- le succès de transmission ;
- les rejets fonctionnels ;
- les timeouts ;
- les erreurs informatives ;
- les synchronisations en attente ;
- les anomalies d'intégration ;
- les reprises manuelles.

**Données fonctionnelles concernées :**

| Donnée | Rôle |
|--------|------|
| Identifiant intervention | Identifier la clôture |
| Statut métier STAT-01 à STAT-06 | Transmettre le statut métier synchronisable |
| Date / heure clôture | Tracer le moment |
| Responsable / technicien | Identifier l'acteur |
| Résultat d'intervention | Qualifier l'issue |
| Résumé CR | Synthétiser l'action réalisée |
| Signature présente / absente | Indiquer la présence de validation |
| Motif absence signature | Justifier l'absence si nécessaire |

**Exclusions :**

- **STAT-07** n'est pas synchronisé comme statut CRM métier.
- **STAT-08** n'est pas synchronisé comme statut CRM métier.
- Le CRM simulé **n'est pas** source de vérité.

---

## 8. Anomalies d'intégration et reprise manuelle

Une **anomalie d'intégration** est créée ou maintenue lorsqu'une synchronisation CRM simulée échoue ou produit un résultat fonctionnel significatif.

| Élément | Principe |
|---------|----------|
| STAT-08 | Indicateur interne d'anomalie |
| Gravités | Information, Bloquant métier, Bloquant sync |
| Effet sur STAT-06 | Aucun effet d'annulation |
| Réouverture intervention | Aucune réouverture automatique |
| Reprise | Correction, complément, relance, acceptation ou clôture du traitement |
| Traçabilité | Historique obligatoire |

La **reprise manuelle** reste fonctionnelle dans le MVP.

Le **retry automatique avancé** reste hors périmètre.

---

## 9. Dashboard et alertes

Le dashboard permet de suivre :

- les demandes à qualifier ;
- les interventions planifiées ;
- les interventions en cours ;
- les interventions en attente client ;
- les interventions clôturées ;
- les retards **STAT-07** ;
- les anomalies **STAT-08** ;
- les synchronisations en attente ;
- les reprises manuelles à traiter.

**Principes :**

- Le dashboard **rend visible**.
- Le dashboard **ne devient pas** source de vérité.
- **STAT-07** et **STAT-08** restent distingués.
- La priorité aide à décider mais **ne décide pas** automatiquement.
- Les situations visibles doivent être **traçables**.

**Vues fonctionnelles attendues :**

| Vue | Objectif |
|-----|----------|
| Manager SAV | Suivre cycle, retards, anomalies, reprises et clôtures |
| Technicien | Suivre interventions affectées, attente client et clôture |
| Pilotage / supervision | Suivre volumes, anomalies globales, retards et reprises |

---

## 10. Alignement ADR

| ADR | Décision intégrée dans l'architecture fonctionnelle |
|-----|-----------------------------------------------------|
| ADR-001 | Séparation statuts métier, indicateur retard et anomalie d'intégration |
| ADR-002 | CRM simulé comme cible représentative, Interv360 source de vérité |
| ADR-003 | STAT-08, gravités, reprise manuelle et visibilité dashboard |
| ADR-004 | Clôture locale autonome, sync externe non bloquante |

---

## 11. Ce que l'architecture fonctionnelle permet maintenant

Cette architecture fonctionnelle permet d'alimenter :

| Suite | Apport |
|-------|--------|
| Design UX/UI | Parcours, vues et écrans à préparer |
| Spécification fonctionnelle détaillée | Objets, règles, statuts et vues consolidés |
| Second lot ADR éventuel | Doublons, clôture sans signature, reprise manuelle |
| Cadrage technique futur | Sans encore produire de solution technique |
| Pilotage MVP | Indicateurs et alertes structurés |

---

## 12. Points de vigilance consolidés

- Ne pas transformer les documents fonctionnels en backlog.
- Ne pas produire de user stories dans ce cycle.
- Ne pas transformer les objets métier en modèle SQL.
- Ne pas transformer la sync CRM simulée en intégration réelle.
- Ne pas faire du CRM simulé une source de vérité.
- Ne pas faire du dashboard une source de vérité.
- Ne pas synchroniser STAT-07 ou STAT-08 comme statuts CRM métier.
- Ne pas invalider STAT-06 en cas de sync KO.
- Ne pas rouvrir automatiquement une intervention à cause de STAT-08.
- Ne pas rendre la signature obligatoire.
- Ne pas modifier les BPMN dans ce cycle.

---

## 13. Conclusion

L'architecture fonctionnelle détaillée Interv360 est désormais structurée autour de :

- **sept domaines fonctionnels** ;
- **seize objets métier** ;
- **huit statuts et indicateurs** ;
- une **clôture locale autonome** ;
- une **synchronisation CRM simulée post-clôture** ;
- une **gestion d'anomalies internes** ;
- un **dashboard de visibilité et de priorisation**.

Cette synthèse peut maintenant servir de base à la **clôture du cycle d'architecture fonctionnelle**, puis à la phase suivante.

---

*Synthèse d'architecture fonctionnelle — Interv360 — SFIA — Draft.*
