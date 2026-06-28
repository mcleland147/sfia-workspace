# Interv360 — Objets métier et relations

**Projet** : PRJ-INTERV360  
**Phase** : 05-functional-architecture  
**Type** : Architecture fonctionnelle — Objets métier  
**Statut** : Draft  
**Branche** : `arch/interv360-functional-detail`

---

## 1. Objectif

Ce document décrit les **principaux objets métier** manipulés par Interv360.

Il vise à clarifier :

- les responsabilités fonctionnelles de chaque objet ;
- les relations entre objets ;
- les statuts ou indicateurs associés ;
- les objets nécessaires à la synchronisation CRM simulée ;
- les objets nécessaires au pilotage.

Ce document **ne produit pas** de modèle de données technique, de schéma SQL, d'API, de backlog, de user stories, de tests, de code ou de delivery.

---

## 2. Vue d'ensemble des objets métier

| Objet métier | Rôle fonctionnel | Domaine principal |
|--------------|------------------|-------------------|
| Demande SAV | Point d'entrée du besoin client | Demande SAV |
| Intervention | Unité opérationnelle planifiée et exécutée | Planification / Intervention terrain |
| Client | Porteur de la demande ou bénéficiaire de l'intervention | Demande SAV |
| Équipement / site | Contexte d'intervention | Demande SAV / Intervention terrain |
| Technicien | Ressource affectée à une intervention | Planification |
| Planning | Organisation temporelle des interventions | Planification |
| Compte rendu | Trace fonctionnelle obligatoire de l'intervention | Clôture |
| Signature | Validation client optionnelle | Clôture |
| Motif d'absence de signature | Justification obligatoire si signature absente | Clôture |
| Résultat d'intervention | Issue métier de l'intervention | Clôture |
| Synchronisation CRM simulée | Représentation de la transmission externe | Synchronisation CRM simulée |
| Anomalie d'intégration | Échec ou alerte liée à la synchronisation | Anomalies d'intégration |
| Gravité d'anomalie | Qualification fonctionnelle d'une anomalie | Anomalies d'intégration |
| Reprise manuelle | Action fonctionnelle de correction ou relance | Anomalies d'intégration |
| Indicateur de pilotage | Élément visible au dashboard | Pilotage |
| Historique | Trace des événements significatifs | Transverse |

---

## 3. Objet — Demande SAV

### 3.1 Définition

La **Demande SAV** représente le besoin initial exprimé par un client ou un canal entrant.

Elle constitue le **point d'entrée** du cycle Interv360.

### 3.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Porter le besoin initial | Conserver la description du problème ou de la demande |
| Supporter la qualification | Permettre de vérifier les données minimales |
| Porter le statut initial | STAT-01 À qualifier ou STAT-02 Qualifiée |
| Supporter l'arbitrage doublon | Permettre l'identification et la décision manuelle |
| Alimenter l'intervention | Fournir les éléments nécessaires à la planification |

### 3.3 Statuts associés

- **STAT-01** — À qualifier
- **STAT-02** — Qualifiée

### 3.4 Relations

| Relation | Description |
|----------|-------------|
| Demande SAV → Client | Une demande est rattachée à un client |
| Demande SAV → Équipement / site | Une demande peut concerner un site ou un équipement |
| Demande SAV → Intervention | Une demande qualifiée peut donner lieu à une intervention |
| Demande SAV → Historique | Les décisions de qualification et doublon sont tracées |

---

## 4. Objet — Intervention

### 4.1 Définition

L'**Intervention** représente l'unité opérationnelle planifiée, exécutée puis clôturée dans Interv360.

Elle porte le **cycle principal SAV**.

### 4.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Porter le cycle opérationnel | Planifiée, en cours, en attente client, clôturée |
| Supporter l'affectation | Associer un technicien à l'intervention |
| Supporter la réalisation terrain | Donner accès aux informations utiles |
| Supporter la clôture locale | Porter CR, signature ou motif, résultat |
| Déclencher la synchronisation | Alimenter la sync CRM simulée après clôture |

### 4.3 Statuts associés

- **STAT-03** — Planifiée
- **STAT-04** — En cours
- **STAT-05** — En attente client
- **STAT-06** — Clôturée

### 4.4 Indicateurs associés

- **STAT-07** — En retard
- **STAT-08** — Anomalie d'intégration

### 4.5 Relations

| Relation | Description |
|----------|-------------|
| Intervention → Demande SAV | Une intervention est issue d'une demande qualifiée |
| Intervention → Technicien | Une intervention est affectée à un technicien |
| Intervention → Planning | Une intervention est positionnée dans le planning |
| Intervention → Compte rendu | Une intervention clôturée possède un CR |
| Intervention → Signature | Une intervention peut avoir une signature |
| Intervention → Motif d'absence de signature | Obligatoire si signature absente |
| Intervention → Synchronisation CRM simulée | La clôture peut déclencher une sync simulée |
| Intervention → Anomalie d'intégration | Une anomalie peut coexister avec la clôture locale |
| Intervention → Historique | Les transitions et décisions sont tracées |

---

## 5. Objet — Client

### 5.1 Définition

Le **Client** représente l'entité ou la personne liée à la demande SAV et à l'intervention.

### 5.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Identifier le bénéficiaire | Rattacher une demande à un interlocuteur ou une entité |
| Fournir le contexte | Donner les informations nécessaires à la qualification |
| Intervenir dans la clôture | Peut signer ou être absent / refuser la signature |

### 5.3 Relations

| Relation | Description |
|----------|-------------|
| Client → Demande SAV | Un client peut être lié à une ou plusieurs demandes |
| Client → Intervention | Un client peut être bénéficiaire d'une intervention |
| Client → Signature | Un client peut signer une intervention clôturée |

---

## 6. Objet — Équipement / site

### 6.1 Définition

L'**Équipement** ou **site** représente le contexte matériel, géographique ou fonctionnel de l'intervention.

### 6.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Contextualiser la demande | Identifier où ou sur quoi porte le besoin |
| Préparer l'intervention | Donner au technicien le contexte nécessaire |
| Alimenter le pilotage | Permettre une lecture par site ou équipement |

### 6.3 Relations

| Relation | Description |
|----------|-------------|
| Équipement / site → Demande SAV | Une demande peut concerner un site ou équipement |
| Équipement / site → Intervention | Une intervention peut être rattachée à un site ou équipement |
| Équipement / site → Indicateur de pilotage | Peut alimenter des vues de pilotage |

---

## 7. Objet — Technicien

### 7.1 Définition

Le **Technicien** représente la ressource opérationnelle affectée à une intervention.

### 7.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Porter l'affectation | Être associé à une intervention planifiée |
| Réaliser l'intervention | Exécuter l'action terrain |
| Produire le CR | Renseigner le compte rendu |
| Déclencher la clôture | Finaliser localement l'intervention si conditions réunies |

### 7.3 Relations

| Relation | Description |
|----------|-------------|
| Technicien → Intervention | Un technicien réalise une ou plusieurs interventions |
| Technicien → Planning | Un technicien est associé à un planning |
| Technicien → Compte rendu | Un technicien produit ou complète le CR |
| Technicien → Historique | Les actions terrain sont tracées |

---

## 8. Objet — Planning

### 8.1 Définition

Le **Planning** représente l'organisation temporelle des interventions et des affectations.

### 8.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Positionner une intervention | Affecter une date, un créneau ou une journée |
| Donner une visibilité opérationnelle | Permettre de visualiser les interventions prévues |
| Alimenter les retards | Permettre d'identifier STAT-07 |

### 8.3 Relations

| Relation | Description |
|----------|-------------|
| Planning → Intervention | Le planning contient des interventions planifiées |
| Planning → Technicien | Le planning peut être lu par technicien |
| Planning → Indicateur de pilotage | Le planning alimente les retards et alertes |

---

## 9. Objet — Compte rendu

### 9.1 Définition

Le **Compte rendu** est la trace fonctionnelle **obligatoire** produite à la fin d'une intervention.

### 9.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Formaliser l'action réalisée | Décrire le résultat de l'intervention |
| Conditionner la clôture | Être obligatoire pour passer en STAT-06 |
| Alimenter la synchronisation | Être transmis ou résumé vers le CRM simulé |
| Alimenter l'historique | Participer à la traçabilité de la clôture |

### 9.3 Relations

| Relation | Description |
|----------|-------------|
| Compte rendu → Intervention | Un CR est rattaché à une intervention |
| Compte rendu → Résultat d'intervention | Le CR complète l'issue métier |
| Compte rendu → Synchronisation CRM simulée | Le CR ou son résumé peut être transmis |

---

## 10. Objet — Signature

### 10.1 Définition

La **Signature** représente la validation client lorsqu'elle est disponible.

### 10.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Formaliser l'accord client | Capturer une validation quand possible |
| Compléter la clôture | Participer aux éléments de clôture |
| Alimenter la synchronisation | Être indiquée comme présente ou absente |

### 10.3 Règles

- La signature est **optionnelle**.
- Son absence ne bloque pas la clôture si un motif est renseigné.
- La signature n'est **pas** la source de vérité de la clôture.

### 10.4 Relations

| Relation | Description |
|----------|-------------|
| Signature → Intervention | La signature est associée à une intervention |
| Signature → Client | La signature peut être produite par le client |
| Signature → Synchronisation CRM simulée | Présence ou absence transmise |

---

## 11. Objet — Motif d'absence de signature

### 11.1 Définition

Le **Motif d'absence de signature** justifie la clôture sans signature client.

### 11.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Justifier l'absence | Expliquer pourquoi la signature n'est pas présente |
| Débloquer la clôture | Permettre STAT-06 sans signature |
| Alimenter la synchronisation | Être transmis si signature absente |

### 11.3 Valeurs fonctionnelles attendues

- Client absent
- Signature refusée
- Signature non applicable
- Contrainte terrain
- Autre motif à préciser

### 11.4 Relations

| Relation | Description |
|----------|-------------|
| Motif absence signature → Intervention | Obligatoire si signature absente |
| Motif absence signature → Synchronisation CRM simulée | Transmis en cas d'absence de signature |

---

## 12. Objet — Résultat d'intervention

### 12.1 Définition

Le **Résultat d'intervention** qualifie l'issue métier de l'intervention au moment de la clôture.

### 12.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Qualifier l'issue | Indiquer si l'intervention est résolue, partielle ou non résolue |
| Conditionner la clôture | Participer aux éléments obligatoires de clôture |
| Alimenter le pilotage | Permettre l'analyse des clôtures |
| Alimenter la synchronisation | Être transmis au CRM simulé |

### 12.3 Relations

| Relation | Description |
|----------|-------------|
| Résultat intervention → Intervention | Un résultat est rattaché à une intervention clôturée |
| Résultat intervention → Compte rendu | Le résultat complète le CR |
| Résultat intervention → Pilotage | Le résultat alimente les vues de clôture |
| Résultat intervention → Synchronisation CRM simulée | Le résultat peut être transmis |

---

## 13. Objet — Synchronisation CRM simulée

### 13.1 Définition

La **Synchronisation CRM simulée** représente l'échange fonctionnel entre Interv360 et une cible externe représentative.

Elle **ne constitue pas** une intégration CRM réelle.

### 13.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Représenter une transmission externe | Simuler l'envoi vers une cible CRM |
| Porter le résultat de sync | Succès, rejet, timeout, erreur informative |
| Alimenter les anomalies | Déclencher STAT-08 si erreur significative |
| Tracer la tentative | Conserver l'historique fonctionnel |

### 13.3 Relations

| Relation | Description |
|----------|-------------|
| Synchronisation CRM simulée → Intervention | Une sync concerne une intervention clôturée |
| Synchronisation CRM simulée → Compte rendu | Le résumé du CR peut être transmis |
| Synchronisation CRM simulée → Résultat intervention | Le résultat peut être transmis |
| Synchronisation CRM simulée → Signature / Motif | La présence ou absence signature peut être transmise |
| Synchronisation CRM simulée → Anomalie d'intégration | Une erreur significative crée une anomalie |

---

## 14. Objet — Anomalie d'intégration

### 14.1 Définition

L'**Anomalie d'intégration** représente une erreur ou un blocage lié à la synchronisation CRM simulée.

### 14.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Porter STAT-08 | Rendre visible l'anomalie d'intégration |
| Qualifier l'erreur | Distinguer rejet, timeout, erreur informative |
| Supporter la reprise | Permettre une correction ou relance manuelle |
| Alimenter le dashboard | Rendre visible l'anomalie au pilotage |

### 14.3 Règles

- L'anomalie d'intégration **ne remet pas en cause** la clôture locale.
- **STAT-08** peut coexister avec **STAT-06**.
- L'anomalie reste **interne** à Interv360.
- Elle n'est **pas** synchronisée comme statut métier CRM.

### 14.4 Relations

| Relation | Description |
|----------|-------------|
| Anomalie intégration → Synchronisation CRM simulée | Une anomalie est issue d'une tentative de sync |
| Anomalie intégration → Intervention | Une intervention clôturée peut porter une anomalie |
| Anomalie intégration → Gravité d'anomalie | Une anomalie possède une gravité |
| Anomalie intégration → Reprise manuelle | Une anomalie peut nécessiter une action |

---

## 15. Objet — Gravité d'anomalie

### 15.1 Définition

La **Gravité d'anomalie** qualifie l'impact fonctionnel d'une anomalie d'intégration.

### 15.2 Valeurs

- Information
- Bloquant métier
- Bloquant sync

### 15.3 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Prioriser l'anomalie | Orienter l'attention opérationnelle |
| Distinguer les impacts | Séparer information, blocage métier et blocage sync |
| Alimenter le dashboard | Permettre une visualisation différenciée |

### 15.4 Relations

| Relation | Description |
|----------|-------------|
| Gravité anomalie → Anomalie intégration | Une gravité qualifie une anomalie |
| Gravité anomalie → Indicateur de pilotage | La gravité alimente la priorisation dashboard |

---

## 16. Objet — Reprise manuelle

### 16.1 Définition

La **Reprise manuelle** représente l'action fonctionnelle permettant de traiter une anomalie d'intégration.

### 16.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Corriger une donnée | Corriger un élément bloquant |
| Relancer une synchronisation | Rejouer une tentative après correction |
| Clôturer le traitement | Indiquer que l'anomalie est résolue ou acceptée |
| Tracer l'action | Conserver la décision et l'action |

### 16.3 Relations

| Relation | Description |
|----------|-------------|
| Reprise manuelle → Anomalie intégration | Une reprise traite une anomalie |
| Reprise manuelle → Synchronisation CRM simulée | Une reprise peut relancer une sync |
| Reprise manuelle → Historique | La reprise est tracée |

---

## 17. Objet — Indicateur de pilotage

### 17.1 Définition

L'**Indicateur de pilotage** représente une information synthétique visible au dashboard.

### 17.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Rendre visible | Afficher une situation nécessitant attention |
| Prioriser | Mettre en avant les retards et anomalies |
| Suivre l'activité | Donner une lecture opérationnelle du cycle SAV |
| Aider à décider | Orienter l'action sans remplacer la décision métier |

### 17.3 Indicateurs concernés

- retards ;
- anomalies d'intégration ;
- clôtures ;
- interventions en attente client ;
- reprises manuelles à traiter.

### 17.4 Relations

| Relation | Description |
|----------|-------------|
| Indicateur pilotage → Intervention | Les interventions alimentent les indicateurs |
| Indicateur pilotage → Anomalie intégration | Les anomalies alimentent les indicateurs |
| Indicateur pilotage → Gravité anomalie | La gravité permet de prioriser |
| Indicateur pilotage → Planning | Le planning permet d'identifier les retards |

---

## 18. Objet — Historique

### 18.1 Définition

L'**Historique** représente la trace fonctionnelle des événements significatifs du cycle Interv360.

### 18.2 Responsabilités fonctionnelles

| Responsabilité | Description |
|----------------|-------------|
| Tracer les transitions | Conserver les changements de statut |
| Tracer les décisions | Qualification, doublon, clôture, reprise |
| Tracer les synchronisations | Tentatives et résultats de sync simulée |
| Tracer les anomalies | Création, qualification, reprise |
| Supporter l'audit fonctionnel | Permettre de comprendre le parcours d'une intervention |

### 18.3 Relations

| Relation | Description |
|----------|-------------|
| Historique → Demande SAV | Qualification et doublons |
| Historique → Intervention | Transitions et clôture |
| Historique → Synchronisation CRM simulée | Tentatives et résultats |
| Historique → Anomalie intégration | Création et traitement |
| Historique → Reprise manuelle | Actions de correction ou relance |

---

## 19. Matrice objets / domaines

| Objet métier | Demande SAV | Planification | Intervention terrain | Clôture | Sync CRM | Anomalies | Pilotage |
|--------------|:-----------:|:-------------:|:--------------------:|:-------:|:--------:|:---------:|:--------:|
| Demande SAV | Oui | Non | Non | Non | Non | Non | Oui |
| Intervention | Oui | Oui | Oui | Oui | Oui | Oui | Oui |
| Client | Oui | Non | Oui | Oui | Oui | Non | Non |
| Équipement / site | Oui | Oui | Oui | Non | Non | Non | Oui |
| Technicien | Non | Oui | Oui | Oui | Non | Non | Oui |
| Planning | Non | Oui | Oui | Non | Non | Non | Oui |
| Compte rendu | Non | Non | Oui | Oui | Oui | Non | Oui |
| Signature | Non | Non | Non | Oui | Oui | Non | Non |
| Motif absence signature | Non | Non | Non | Oui | Oui | Non | Non |
| Résultat intervention | Non | Non | Oui | Oui | Oui | Non | Oui |
| Synchronisation CRM simulée | Non | Non | Non | Oui | Oui | Oui | Oui |
| Anomalie intégration | Non | Non | Non | Non | Oui | Oui | Oui |
| Gravité anomalie | Non | Non | Non | Non | Non | Oui | Oui |
| Reprise manuelle | Non | Non | Non | Non | Oui | Oui | Oui |
| Indicateur pilotage | Non | Oui | Oui | Oui | Oui | Oui | Oui |
| Historique | Oui | Oui | Oui | Oui | Oui | Oui | Oui |

---

## 20. Relations structurantes

| Relation | Nature fonctionnelle |
|----------|----------------------|
| Demande SAV → Intervention | Une demande qualifiée peut donner lieu à une intervention |
| Intervention → Compte rendu | Une clôture nécessite un CR |
| Intervention → Signature / Motif absence | Une clôture nécessite signature ou motif |
| Intervention → Synchronisation CRM simulée | Une intervention clôturée peut être synchronisée |
| Synchronisation CRM simulée → Anomalie intégration | Une erreur significative crée STAT-08 |
| Anomalie intégration → Reprise manuelle | Une anomalie peut nécessiter une correction ou relance |
| Planning → Indicateur pilotage | Le planning permet d'identifier les retards |
| Historique → Tous objets critiques | Les événements significatifs sont tracés |

---

## 21. Points de vigilance

- Ne pas transformer ces objets en modèle technique.
- Ne pas introduire de schéma de base de données.
- Ne pas introduire d'API réelle CRM.
- Ne pas créer de classes applicatives.
- Ne pas confondre statut métier et indicateur interne.
- Ne pas faire du CRM simulé une source de vérité.
- Ne pas faire du dashboard une source de vérité.
- Ne pas rendre la signature obligatoire.
- Ne pas conditionner la clôture locale à la synchronisation externe.

---

## 22. Conclusion

Les objets métier Interv360 donnent une structure fonctionnelle stable pour poursuivre vers :

- les statuts et transitions ;
- la vue fonctionnelle d'intégration ;
- le dashboard et les alertes ;
- la synthèse d'architecture fonctionnelle.

Ces objets restent **fonctionnels** et ne constituent **pas** un modèle de données technique.

---

*Objets métier — Interv360 — SFIA — Draft.*
