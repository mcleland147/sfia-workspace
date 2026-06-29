# Interv360 — INC-01 realization backlog

**Type** : Backlog préparatoire de réalisation  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Implementation planning  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-implementation-planning`  
**Documents associés** : [`implementation-planning-plan.md`](implementation-planning-plan.md), [`inc-01-demo-data.md`](inc-01-demo-data.md), [`inc-01-qa-scenarios.md`](inc-01-qa-scenarios.md), [`inc-01-refusal-scenarios.md`](inc-01-refusal-scenarios.md), [`inc-01-implementation-estimate.md`](inc-01-implementation-estimate.md), [`inc-01-implementation-plan.md`](inc-01-implementation-plan.md)

---

## 1. Objectif

Ce document prépare le backlog de réalisation de :

**INC-01 — Flux SAV minimal démontrable**

Il transforme les livrables d'implementation planning en backlog préparatoire exploitable dans un futur cycle de réalisation.

Ce document **ne crée pas** :

- de code ;
- de tickets Jira réels ;
- de sprint plan ferme ;
- d'engagement de dates ;
- d'API détaillée ;
- de SQL ;
- de tests automatisés ;
- de scripts ;
- de BPMN.

---

## 2. Principes du backlog

Le backlog doit respecter les principes suivants :

- rester préparatoire ;
- suivre les séquences RS-01 à RS-05 ;
- conserver l'ordre logique STAT-01 à STAT-06 ;
- intégrer QA nominale et refus métier ;
- garder RS-03 comme séquence dominante ;
- ne pas introduire CRM réel ;
- ne pas introduire dashboard / BI ;
- ne pas activer STAT-07 / STAT-08 ;
- ne pas transformer ce document en sprint plan ;
- ne pas transformer ce document en tickets projet réels.

---

## 3. Structure du backlog

| Niveau | Description |
|--------|-------------|
| **Incrément** | INC-01 |
| **Séquence** | RS-01 à RS-05 |
| **Lot** | LOT-R01 à LOT-R08 |
| **Item backlog** | Unité préparatoire de réalisation |
| **QA associée** | Scénario QA nominal ou refus |
| **Critère readiness** | Condition avant réalisation |
| **Exclusion** | Élément explicitement hors périmètre |

---

## 4. Backlog par lots de réalisation

| ID | Lot | Séquence | Priorité | Description | Dépendance |
|----|-----|----------|----------|-------------|------------|
| **BL-R01-001** | LOT-R01 | RS-01 | P0 | Préparer socle création demande SAV | Aucune |
| **BL-R01-002** | LOT-R01 | RS-01 | P0 | Préparer affichage liste demandes | BL-R01-001 |
| **BL-R01-003** | LOT-R01 | RS-01 | P0 | Préparer ouverture fiche demande | BL-R01-001 |
| **BL-R01-004** | LOT-R01 | RS-01 | P0 | Préparer affichage STAT-01 | BL-R01-001 |
| **BL-R02-001** | LOT-R02 | RS-02 | P0 | Préparer checklist qualification minimale | BL-R01 |
| **BL-R02-002** | LOT-R02 | RS-02 | P0 | Préparer passage STAT-02 | BL-R02-001 |
| **BL-R02-003** | LOT-R02 | RS-02 | P1 | Préparer visibilité qualification en fiche | BL-R02-002 |
| **BL-R03-001** | LOT-R03 | RS-03 | P0 | Préparer création intervention liée à demande | BL-R02 |
| **BL-R03-002** | LOT-R03 | RS-03 | P0 | Préparer sélection créneau | BL-R03-001 |
| **BL-R03-003** | LOT-R03 | RS-03 | P0 | Préparer affectation technicien | BL-R03-001 |
| **BL-R03-004** | LOT-R03 | RS-03 | P0 | Préparer passage STAT-03 | BL-R03-002 / BL-R03-003 |
| **BL-R03-005** | LOT-R03 | RS-03 | P1 | Préparer visibilité planning | BL-R03-004 |
| **BL-R04-001** | LOT-R04 | RS-04 | P0 | Préparer consultation intervention côté technicien | BL-R03 |
| **BL-R04-002** | LOT-R04 | RS-04 | P0 | Préparer saisie compte rendu simple | BL-R04-001 |
| **BL-R04-003** | LOT-R04 | RS-04 | P0 | Préparer résultat intervention | BL-R04-002 |
| **BL-R04-004** | LOT-R04 | RS-04 | P0 | Préparer passage STAT-04 | BL-R04-002 / BL-R04-003 |
| **BL-R05-001** | LOT-R05 | RS-05 | P0 | Préparer validation CR + résultat | BL-R04 |
| **BL-R05-002** | LOT-R05 | RS-05 | P0 | Préparer clôture locale | BL-R05-001 |
| **BL-R05-003** | LOT-R05 | RS-05 | P0 | Préparer passage STAT-06 | BL-R05-002 |
| **BL-R05-004** | LOT-R05 | RS-05 | P0 | Préparer visibilité STAT-06 liste + fiche | BL-R05-003 |
| **BL-R06-001** | LOT-R06 | QA | P0 | Préparer déroulé QA-NOM-001 à QA-NOM-016 | BL-R01 à BL-R05 |
| **BL-R07-001** | LOT-R07 | Refus | P0 | Préparer validation REF-001 à REF-010 | Règles statuts |
| **BL-R08-001** | LOT-R08 | Démo | P1 | Préparer utilisation SAV-DEMO-001 et INT-DEMO-001 | Données démo |

---

## 5. Mapping backlog / QA nominale

| Item backlog | Scénario QA associé |
|--------------|---------------------|
| **BL-R01-001** | QA-NOM-001 |
| **BL-R01-002** | QA-NOM-002 |
| **BL-R01-003** | QA-NOM-003 |
| **BL-R02-001 / BL-R02-002** | QA-NOM-004 / QA-NOM-005 |
| **BL-R03-001** | QA-NOM-006 |
| **BL-R03-002** | QA-NOM-007 |
| **BL-R03-003** | QA-NOM-008 |
| **BL-R03-004** | QA-NOM-009 |
| **BL-R04-001** | QA-NOM-010 |
| **BL-R04-002** | QA-NOM-011 |
| **BL-R04-003** | QA-NOM-012 |
| **BL-R04-004** | QA-NOM-013 |
| **BL-R05-001 / BL-R05-002 / BL-R05-003** | QA-NOM-014 / QA-NOM-015 |
| **BL-R05-004** | QA-NOM-016 |

---

## 6. Mapping backlog / refus métier

| Item backlog | Refus associé |
|--------------|---------------|
| **BL-R02-001 / BL-R02-002** | REF-001 / REF-002 |
| **BL-R03-001 à BL-R03-004** | REF-003 / REF-004 |
| **BL-R04-002 à BL-R04-004** | REF-005 / REF-007 |
| **BL-R05-001 à BL-R05-003** | REF-004 / REF-005 / REF-008 / REF-009 |
| **BL-R05-004** | REF-010 |
| **BL-R07-001** | REF-001 à REF-010 |

---

## 7. Priorisation du backlog

| Priorité | Règle |
|----------|-------|
| **P0** | Indispensable pour atteindre STAT-06 localement |
| **P1** | Utile pour démonstration / confort / visibilité |
| **P2** | Hors INC-01 ou futur incrément |

| Priorité | Items concernés |
|----------|-----------------|
| **P0** | BL-R01-001 à BL-R05-004, BL-R06-001, BL-R07-001 |
| **P1** | BL-R02-003, BL-R03-005, BL-R08-001 |
| **P2** | Aucun item actif INC-01 |

---

## 8. Readiness des items

| Critère readiness | Description |
|-------------------|-------------|
| **Périmètre clair** | Item limité à INC-01 |
| **Séquence RS associée** | RS-01 à RS-05 identifiée |
| **Statut cible identifié** | STAT-01 à STAT-06 selon item |
| **Dépendance connue** | Prérequis backlog documenté |
| **QA nominale associée** | Scénario QA-NOM lié si applicable |
| **Refus métier associé** | Scénario REF lié si applicable |
| **Donnée de démonstration disponible** | SAV-DEMO-001 / INT-DEMO-001 |
| **Hors périmètre respecté** | Pas d'élargissement INC-01 |
| **Pas de dépendance CRM** | Clôture locale autonome |
| **Pas de dépendance dashboard** | Liste / fiche suffisantes |

---

## 9. Risques backlog

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Backlog trop détaillé** | Devient sprint plan | Rester préparatoire |
| **Backlog trop vague** | Réalisation difficile | Lier aux QA / refus |
| **P1 traité trop tôt** | Retard P0 | Sécuriser P0 d'abord |
| **RS-03 sous-découpée** | Retard | Isoler intervention / créneau / technicien |
| **Refus oubliés** | Incohérences | Utiliser BL-R07-001 |
| **CRM réintroduit** | Explosion périmètre | Exclure dépendance |
| **Dashboard réintroduit** | Élargissement | Hors INC-01 |
| **Tickets réels créés trop tôt** | Confusion | Rester documentaire |

---

## 10. Ce qui n'est pas un item backlog INC-01

| Élément exclu | Raison |
|---------------|--------|
| **CRM réel** | Hors INC-01 |
| **Synchronisation bloquante** | Hors INC-01 |
| **Dashboard / BI** | Hors INC-01 |
| **STAT-07 / STAT-08** | Hors INC-01 |
| **Multi-interventions** | Post-MVP |
| **Pièces jointes avancées** | Hors INC-01 |
| **Signature avancée** | Hors INC-01 |
| **API détaillée** | Reportée |
| **SQL / migration** | Hors cycle |
| **Tests automatisés** | Hors cycle |
| **Mise en production** | Hors cycle |
| **Design pixel perfect** | Non bloquant |

---

## 11. Décisions retenues

| Décision | Statut |
|----------|--------|
| Backlog préparatoire uniquement | Retenu |
| Aucun ticket réel créé | Retenu |
| Organisation par RS / lots | Retenu |
| P0 centré sur STAT-06 | Retenu |
| QA nominale intégrée | Retenu |
| Refus métier intégrés | Retenu |
| Données démo utilisées | Retenu |
| CRM / dashboard exclus | Retenu |
| STAT-07 / STAT-08 exclus | Retenu |
| Pas de sprint plan ferme | Retenu |

---

## 12. Garde-fous

- ne pas créer de ticket Jira réel ;
- ne pas créer de sprint plan ferme ;
- ne pas produire d'engagement de dates ;
- ne pas créer de code ;
- ne pas créer d'API détaillée ;
- ne pas créer de SQL ;
- ne pas créer de test automatisé ;
- ne pas créer de script ;
- ne pas créer de BPMN ;
- ne pas introduire CRM réel ;
- ne pas rendre la synchronisation bloquante ;
- ne pas ajouter dashboard / BI ;
- ne pas activer STAT-07 / STAT-08 ;
- ne pas élargir INC-01.

---

## 13. Critères de sortie

- [x] structure du backlog définie ;
- [x] backlog par lots défini ;
- [x] mapping QA nominale défini ;
- [x] mapping refus métier défini ;
- [x] priorisation définie ;
- [x] readiness des items définie ;
- [x] risques backlog identifiés ;
- [x] exclusions listées ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 14. Prochaine action

Le prochain livrable est :

`implementation-planning-summary.md`

**Objectif :** synthétiser le cycle implementation planning et décider si la branche peut être clôturée par PR.
