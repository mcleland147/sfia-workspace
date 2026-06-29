# Interv360 — Technical design plan

**Type** : Plan de conception technique  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Technical design  
**Cible** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-technical-design`

---

## 1. Objectif

Ouvrir le cycle de **conception technique** Interv360 pour :

**INC-01 — Flux SAV minimal démontrable**

Ce cycle vise à produire les **arbitrages techniques nécessaires** avant réalisation, **sans démarrer le code directement**.

L'objectif est de transformer la préparation réalisation en cadrage technique exploitable :

- architecture applicative cible ;
- choix front / back / data ;
- modèle de données conceptuel / logique ;
- stratégie API ou absence d'API ;
- règles de transitions de statuts ;
- rôles minimum ;
- stratégie QA détaillée ;
- préparation de l'estimation / planification.

---

## 2. Source de départ

Les sources principales sont :

- [`realization-preparation-summary.md`](realization-preparation-summary.md)
- [`inc-01-effort-estimation.md`](inc-01-effort-estimation.md)
- [`inc-01-qa-strategy.md`](inc-01-qa-strategy.md)
- [`inc-01-technical-framing.md`](inc-01-technical-framing.md)
- [`inc-01-realization-slicing.md`](inc-01-realization-slicing.md)
- [`delivery-detailing-summary.md`](delivery-detailing-summary.md)
- [`inc-01-readiness-checklist.md`](inc-01-readiness-checklist.md)

### Décision héritée

**INC-01 est prêt pour un futur cycle de conception technique / planification de réalisation.**

### Statut hérité

**`Ready for technical design / implementation planning`**

---

## 3. Périmètre INC-01

INC-01 couvre le flux SAV minimal :

1. création demande ;
2. liste demandes ;
3. accès fiche ;
4. détail demande ;
5. qualification minimale ;
6. passage qualifiée ;
7. création intervention ;
8. sélection créneau ;
9. affectation technicien ;
10. intervention planifiée ;
11. consultation technicien ;
12. saisie compte rendu ;
13. résultat intervention ;
14. préparation clôture ;
15. clôture locale ;
16. visualisation STAT-06.

### Résultat cible

**Une demande SAV atteint STAT-06 — Clôturée localement.**

---

## 4. Séquences de référence

Le cycle s'appuie sur les séquences de réalisation suivantes :

| Séquence | Objet | Résultat démontrable |
|----------|-------|----------------------|
| **RS-01** | Socle demande SAV | Demande STAT-01 visible liste + fiche |
| **RS-02** | Qualification minimale | Demande STAT-02 |
| **RS-03** | Planification intervention | Intervention STAT-03 |
| **RS-04** | Réalisation terrain et CR | CR + résultat saisis |
| **RS-05** | Clôture locale et STAT-06 | STAT-06 visible liste + fiche |

---

## 5. Livrables attendus du cycle

| Livrable | Objectif |
|----------|----------|
| [`inc-01-application-architecture.md`](inc-01-application-architecture.md) | Définir l'architecture applicative cible au niveau conception |
| [`inc-01-front-back-data-decisions.md`](inc-01-front-back-data-decisions.md) | Formaliser les choix front / back / data |
| [`inc-01-data-model.md`](inc-01-data-model.md) | Décrire le modèle de données conceptuel / logique sans SQL exécutable |
| [`inc-01-api-strategy.md`](inc-01-api-strategy.md) | Définir la stratégie API ou l'absence d'API pour INC-01 |
| [`inc-01-status-rules.md`](inc-01-status-rules.md) | Formaliser les règles de transition STAT-01 à STAT-06 |
| [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) | Préparer QA détaillée et planification technique sans tests automatisés |
| [`technical-design-summary.md`](technical-design-summary.md) | Synthétiser le cycle et décider de la suite |

---

## 6. Garde-fous

Le cycle doit respecter les décisions existantes :

- ne **pas** démarrer le code ;
- ne **pas** créer d'implémentation API ;
- ne **pas** créer de SQL exécutable ;
- ne **pas** créer de tests automatisés ;
- ne **pas** ajouter de nouveau statut ;
- utiliser uniquement **STAT-01 à STAT-06** pour INC-01 ;
- maintenir **STAT-07** et **STAT-08** hors INC-01 ;
- ne **pas** introduire de CRM réel ;
- ne **pas** rendre la synchronisation bloquante ;
- ne **pas** ajouter dashboard ou BI ;
- ne **pas** rendre Figma bloquant ;
- ne **pas** élargir INC-01.

---

## 7. Hors périmètre du cycle

Ce cycle ne couvre pas :

- développement applicatif ;
- génération de code ;
- migration ou script SQL ;
- tests automatisés ;
- CRM réel ;
- dashboard SAV ;
- anomalies d'intégration ;
- vue dirigeant ;
- INC-02 à INC-06 ;
- refonte Figma complète ;
- mise en production.

---

## 8. Ordre de travail recommandé

1. Définir l'architecture applicative cible.
2. Formaliser les choix front / back / data.
3. Décrire le modèle de données conceptuel / logique.
4. Définir la stratégie API ou l'absence d'API.
5. Formaliser les règles de statuts.
6. Préparer QA détaillée et planification technique.
7. Produire la synthèse du cycle.

---

## 9. Prochaine action

Créer le premier livrable :

**[`inc-01-application-architecture.md`](inc-01-application-architecture.md)**

**Objectif :** définir l'architecture applicative cible d'INC-01 au niveau conception, sans générer de code.

---

*Plan de conception technique INC-01 — Draft.*
