# Interv360 — INC-01 data model

**Type** : Modèle de données conceptuel / logique  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Technical design  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-technical-design`  
**Documents associés** : [`technical-design-plan.md`](technical-design-plan.md), [`inc-01-application-architecture.md`](inc-01-application-architecture.md), [`inc-01-front-back-data-decisions.md`](inc-01-front-back-data-decisions.md), [`inc-01-technical-framing.md`](inc-01-technical-framing.md)

---

## 1. Objectif

Ce document décrit le modèle de données **conceptuel / logique** nécessaire à **INC-01 — Flux SAV minimal démontrable**.

Il vise à préparer la future réalisation **sans créer de schéma technique exécutable**.

Ce document **ne crée pas** :

- de SQL ;
- de DDL ;
- de migration ;
- de schéma de base de données exécutable ;
- de code ;
- d'API ;
- de tests automatisés.

---

## 2. Principes de modélisation

Le modèle doit respecter les principes suivants :

- couvrir uniquement **INC-01** ;
- supporter le flux **RS-01 à RS-05** ;
- permettre une demande SAV clôturée localement en **STAT-06** ;
- conserver les objets et liens nécessaires au flux ;
- maintenir **Interv360** comme source locale ;
- éviter la surmodélisation ;
- ne pas imposer de base de données cible ;
- ne pas introduire CRM réel ;
- ne pas introduire dashboard / BI ;
- ne pas activer **STAT-07 / STAT-08**.

---

## 3. Objets de données conceptuels

| Objet | Rôle | Séquences concernées |
|-------|------|----------------------|
| **Demande SAV** | Objet central du flux | RS-01 à RS-05 |
| **Qualification** | Éléments permettant le passage STAT-01 → STAT-02 | RS-02 |
| **Intervention** | Opération liée à une demande qualifiée | RS-03 à RS-05 |
| **Créneau** | Information de planification simple | RS-03 |
| **Technicien** | Acteur affecté à l'intervention | RS-03 à RS-04 |
| **Compte rendu** | Synthèse terrain | RS-04 à RS-05 |
| **Résultat intervention** | Issue métier exploitable pour clôture | RS-04 à RS-05 |
| **Statut** | État courant du flux | RS-01 à RS-05 |
| **Journal fonctionnel minimal** | Traçabilité utile à la démonstration | RS-01 à RS-05 |

**Précision :** ces objets sont **conceptuels** et ne correspondent pas nécessairement à des tables physiques.

---

## 4. Attributs fonctionnels minimaux

### Demande SAV

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Référence demande | Identifier la demande dans liste et fiche |
| Libellé / motif | Contexte métier minimal |
| Demandeur ou client | Lier la demande à un besoin client |
| Canal minimal | Origine de la demande |
| Priorité simple | Priorisation légère |
| Statut courant | Visibilité du flux (STAT-01 à STAT-06) |
| Date de création | Contexte temporel |
| Lien intervention éventuel | Cohérence demande → intervention |

### Qualification

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Demande associée | Lien vers la demande qualifiée |
| Checklist minimale | Condition de passage vers STAT-02 |
| Informations obligatoires complétées | Garantir une qualification exploitable |
| Responsable de qualification | Acteur ayant validé |
| Date de qualification | Traçabilité minimale |
| État de qualification | Complétude de la checklist |

### Intervention

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Référence intervention | Identifier l'intervention |
| Demande associée | Lien vers la demande qualifiée |
| Créneau associé | Planification simple |
| Technicien affecté | Réalisation terrain |
| Statut opérationnel | Visibilité STAT-03 à STAT-06 |
| Date de planification | Contexte temporel |
| Lien compte rendu éventuel | Cohérence intervention → CR |

### Créneau

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Date | Jour de l'intervention |
| Plage horaire | Créneau simple |
| Disponibilité simple | Validation minimale |
| Intervention associée | Lien vers l'intervention planifiée |

### Technicien

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Identifiant technicien | Référence de l'acteur |
| Nom affiché | Visibilité dans planning et parcours terrain |
| Contact minimal si nécessaire | Contexte opérationnel léger |
| Statut d'affectation à l'intervention | Lien avec l'intervention planifiée |

### Compte rendu

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Intervention associée | Lien vers l'intervention réalisée |
| Commentaire technicien | Synthèse terrain minimale |
| Date de réalisation | Contexte temporel |
| Résultat associé | Lien CR → résultat → clôture |
| État de complétude | Préparation clôture |

### Résultat intervention

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Intervention associée | Lien vers l'intervention |
| Résultat simple | Issue métier de l'intervention |
| Information permettant clôture | Condition de passage vers STAT-06 |
| Motif de non-clôture éventuel | Gestion minimale des cas bloquants |

### Statut

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Code statut | STAT-01 à STAT-06 |
| Libellé | Visibilité liste / fiche |
| Statut courant de la demande / intervention | État du flux |
| Date de changement | Traçabilité minimale |
| Origine du changement | Acteur ou action déclenchante |

### Journal fonctionnel minimal

| Attribut fonctionnel | Usage |
|----------------------|-------|
| Objet concerné | Demande, intervention, CR, etc. |
| Action réalisée | Événement utile à la démonstration |
| Ancien statut éventuel | Transition tracée |
| Nouveau statut éventuel | Transition tracée |
| Acteur fonctionnel | Responsable SAV ou technicien |
| Date / heure | Contexte temporel |
| Commentaire minimal éventuel | Complément de traçabilité |

**Précision :** ces attributs restent **fonctionnels** et ne définissent **pas** de types SQL.

---

## 5. Relations logiques entre objets

| Relation | Cardinalité logique | Commentaire |
|----------|---------------------|-------------|
| Demande SAV → Qualification | 1 demande peut avoir 0 ou 1 qualification INC-01 | Qualification minimale |
| Demande SAV → Intervention | 1 demande qualifiée peut avoir 0 ou 1 intervention INC-01 | Limite MVP |
| Intervention → Créneau | 1 intervention planifiée a 1 créneau simple | Planning minimal |
| Intervention → Technicien | 1 intervention planifiée a 1 technicien affecté | Affectation unique |
| Intervention → Compte rendu | 1 intervention peut avoir 0 ou 1 compte rendu INC-01 | CR simple |
| Compte rendu → Résultat intervention | 1 compte rendu a 1 résultat simple pour clôture | Condition STAT-06 |
| Demande SAV / Intervention → Statut | Chaque objet porte ou référence un statut courant | Visibilité flux |
| Objet métier → Journal fonctionnel minimal | 1 objet peut avoir plusieurs événements | Traçabilité minimale |

**Précision :** les cardinalités sont **logiques** et limitées au MVP INC-01. Elles ne préjugent pas du modèle final post-MVP.

---

## 6. Modèle conceptuel du flux

1. Une **Demande SAV** est créée.
2. La Demande SAV reçoit **STAT-01**.
3. La **Qualification** complète les informations minimales.
4. La Demande SAV passe en **STAT-02**.
5. Une **Intervention** est créée depuis la Demande SAV.
6. Un **Créneau** et un **Technicien** sont associés.
7. L'Intervention / Demande passe en **STAT-03**.
8. Le Technicien consulte l'Intervention.
9. Un **Compte rendu** est saisi.
10. Un **Résultat intervention** est renseigné.
11. Le flux passe en **STAT-04** si nécessaire.
12. La clôture locale applique **STAT-06**.
13. **STAT-06** reste visible sur la liste et la fiche.
14. Le **Journal fonctionnel minimal** conserve les événements utiles.

---

## 7. Statuts dans le modèle de données

| Statut | Usage data INC-01 | Actif |
|--------|-------------------|:-----:|
| **STAT-01** — À qualifier | Statut initial demande créée / à qualifier | Oui |
| **STAT-02** — Qualifiée | Demande qualifiée | Oui |
| **STAT-03** — Planifiée | Intervention planifiée | Oui |
| **STAT-04** — En cours | Réalisation engagée / CR saisi | Oui |
| **STAT-05** — En attente client | Statut existant hors chemin nominal INC-01 | Non requis |
| **STAT-06** — Clôturée localement | Clôture locale | Oui |
| **STAT-07** — En retard | Indicateur retard hors INC-01 | Non |
| **STAT-08** — Anomalie d'intégration | Anomalie intégration hors INC-01 | Non |

**STAT-07** et **STAT-08** ne doivent **pas** être nécessaires au modèle INC-01.

---

## 8. Données hors périmètre INC-01

| Donnée / objet hors périmètre | Raison |
|-------------------------------|--------|
| CRM réel | Hors INC-01 |
| Identifiant CRM réel obligatoire | Hors INC-01 |
| Synchronisation externe | Non bloquante / hors INC-01 |
| Erreurs d'intégration | INC-04 |
| Dashboard / indicateurs BI | INC-05 / INC-06 |
| Planning avancé | Hors INC-01 |
| Pièces jointes avancées | Hors INC-01 |
| Signature avancée | Hors INC-01 |
| Rôles complexes | Hors INC-01 |
| Multi-interventions par demande | Post-MVP |
| Historique complet | Post-MVP |

---

## 9. Source de vérité et persistance

Pour INC-01, **Interv360** conserve localement :

- les demandes ;
- les qualifications ;
- les interventions ;
- les créneaux ;
- les affectations technicien ;
- les comptes rendus ;
- les résultats ;
- les statuts ;
- la clôture locale STAT-06 ;
- la traçabilité minimale.

**Précisions :**

- aucune source CRM réelle n'est requise ;
- aucune synchronisation externe réussie n'est nécessaire pour clôturer ;
- **STAT-06** est conservé localement.

---

## 10. Risques de modélisation

| Risque | Impact | Réduction |
|--------|--------|-----------|
| Modèle trop détaillé trop tôt | Ralentissement | Rester conceptuel / logique |
| Tables physiques implicites | Confusion | Rappeler absence de SQL |
| CRM implicite | Dépendance bloquante | Interv360 source locale |
| Multi-interventions trop tôt | Surdimensionnement | Limiter 0 ou 1 intervention INC-01 |
| Statuts dispersés | Incohérence | Statut courant + journal minimal |
| Historique trop riche | Surcharge | Journal minimal |
| Dashboard data introduit | Élargissement | Hors INC-01 |

---

## 11. Décisions de modèle retenues

| Décision | Statut |
|----------|--------|
| Modèle conceptuel / logique uniquement | Retenu |
| Objets minimum INC-01 | Retenu |
| 0 ou 1 intervention par demande dans INC-01 | Retenu |
| 1 créneau simple par intervention planifiée | Retenu |
| 1 technicien affecté par intervention planifiée | Retenu |
| 1 compte rendu simple par intervention | Retenu |
| 1 résultat simple pour clôture | Retenu |
| Statut courant conservé | Retenu |
| Journal fonctionnel minimal | Retenu |
| Interv360 source locale | Retenu |
| Aucun SQL exécutable | Retenu |
| Aucune base cible imposée | Retenu |

---

## 12. Points à traiter dans les livrables suivants

| Point | Livrable cible |
|-------|----------------|
| Stratégie API ou absence d'API | [`inc-01-api-strategy.md`](inc-01-api-strategy.md) |
| Règles détaillées de transition | [`inc-01-status-rules.md`](inc-01-status-rules.md) |
| QA détaillée sur données de démo | [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) |
| Estimation / planification | [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) ou futur cycle planning |

---

## 13. Garde-fous

- ne **pas** créer de SQL ;
- ne **pas** créer de DDL ;
- ne **pas** créer de migration ;
- ne **pas** imposer de base de données cible ;
- ne **pas** créer de code ;
- ne **pas** créer d'API ;
- ne **pas** créer de tests automatisés ;
- ne **pas** introduire CRM réel ;
- ne **pas** rendre la synchronisation bloquante ;
- ne **pas** ajouter dashboard / BI ;
- ne **pas** activer STAT-07 / STAT-08 ;
- ne **pas** élargir INC-01.

---

## 14. Critères de sortie

- [x] objets conceptuels identifiés ;
- [x] attributs fonctionnels minimaux listés ;
- [x] relations logiques définies ;
- [x] flux conceptuel décrit ;
- [x] statuts cadrés dans le modèle ;
- [x] données hors périmètre listées ;
- [x] source de vérité confirmée ;
- [x] risques de modélisation identifiés ;
- [x] décisions de modèle retenues ;
- [x] garde-fous repris.

---

## 15. Prochaine action

Le prochain livrable est :

**[`inc-01-api-strategy.md`](inc-01-api-strategy.md)**

**Objectif :** définir la stratégie API ou l'absence d'API pour INC-01, sans implémentation.

---

*Modèle de données INC-01 — Draft.*
