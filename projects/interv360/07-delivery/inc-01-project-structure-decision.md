# Interv360 — INC-01 project structure decision

**Type** : Décision de structure projet cible  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization start  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-start`  
**Documents associés** : [`realization-start-plan.md`](realization-start-plan.md), [`inc-01-stack-options.md`](inc-01-stack-options.md), [`implementation-planning-summary.md`](implementation-planning-summary.md), [`inc-01-realization-backlog.md`](inc-01-realization-backlog.md)

---

## 1. Objectif

Ce document définit la structure projet cible recommandée pour préparer la réalisation de :

**INC-01 — Flux SAV minimal démontrable**

Il s'appuie sur la recommandation indicative :

**Option A — Mono-app web simple avec séparation logique interne**

Ce document **ne constitue pas** une autorisation de coder.

Il **ne crée pas** :

- de projet applicatif ;
- de dossier applicatif réel ;
- de code ;
- de framework initialisé ;
- d'installation de dépendances ;
- d'API ;
- de SQL ;
- de tests automatisés ;
- de scripts ;
- de tickets Jira réels.

---

## 2. Rappel de la décision stack indicative

| Élément | Décision indicative |
|---------|---------------------|
| **Option recommandée** | Mono-app web simple |
| **Séparation** | Logique interne |
| **Front / back séparés** | Non privilégiés pour INC-01 |
| **Prototype local** | Possible mais à cadrer |
| **Low-code** | Uniquement si contrainte forte de vitesse |
| **Documentation seule** | Insuffisante pour réalisation |
| **Autorisation de code** | Non donnée |

---

## 3. Principes de structure cible

La structure projet cible doit respecter les principes suivants :

- rester simple pour INC-01 ;
- permettre une séparation logique claire ;
- éviter le surdimensionnement ;
- permettre la démonstration du flux STAT-01 à STAT-06 ;
- isoler les règles de statuts ;
- isoler les données de démonstration ;
- rendre les scénarios QA exploitables ;
- rester compatible avec une séparation front / back future ;
- ne pas introduire CRM réel ;
- ne pas introduire dashboard / BI ;
- ne pas activer STAT-07 / STAT-08.

---

## 4. Structure logique cible

| Couche logique | Responsabilité |
|----------------|----------------|
| **UI / présentation** | Écrans, navigation, affichage statuts |
| **Application / orchestration** | Enchaînement actions, coordination des cas d'usage |
| **Métier / règles** | Transitions statuts, préconditions, refus métier |
| **Data / persistance** | Objets demande, intervention, CR, résultat, journal minimal |
| **Demo data** | Données fictives SAV-DEMO-001 / INT-DEMO-001 |
| **QA / validation** | Scénarios QA-NOM et REF |
| **Documentation** | Décisions, garde-fous, backlog préparatoire |

---

## 5. Structure de dossiers cible proposée

La structure ci-dessous est une **cible documentaire**. Elle **ne doit pas être créée** dans ce cycle.

```text
interv360-app/
├── app/
│   ├── screens/
│   │   ├── requests-list/
│   │   ├── request-detail/
│   │   ├── planning/
│   │   ├── technician-intervention/
│   │   └── intervention-report/
│   ├── flows/
│   │   └── inc-01-sav-flow/
│   ├── rules/
│   │   ├── status-rules/
│   │   └── refusal-rules/
│   ├── data/
│   │   ├── models/
│   │   ├── repositories/
│   │   └── demo-data/
│   └── qa/
│       ├── nominal-scenarios/
│       └── refusal-scenarios/
├── docs/
│   └── inc-01/
└── README.md
```

Cette structure est **indicative**. Elle ne doit **pas** être créée tant que l'autorisation de démarrage code n'est pas donnée.

---

## 6. Mapping structure / INC-01

| Élément structure | Couverture INC-01 |
|-------------------|-------------------|
| **screens/requests-list** | Liste demandes, STAT visible |
| **screens/request-detail** | Fiche demande, qualification, détail |
| **screens/planning** | Intervention, créneau, technicien |
| **screens/technician-intervention** | Consultation technicien |
| **screens/intervention-report** | CR et résultat |
| **flows/inc-01-sav-flow** | Orchestration RS-01 à RS-05 |
| **rules/status-rules** | STAT-01 à STAT-06 |
| **rules/refusal-rules** | REF-001 à REF-010 |
| **data/models** | Demande, qualification, intervention, CR, résultat, journal |
| **data/demo-data** | SAV-DEMO-001 / INT-DEMO-001 |
| **qa/nominal-scenarios** | QA-NOM-001 à QA-NOM-016 |
| **qa/refusal-scenarios** | REF-001 à REF-010 |

---

## 7. Mapping structure / backlog

| Lot backlog | Élément structure cible |
|-------------|-------------------------|
| **LOT-R01** | screens requests-list / request-detail + data models |
| **LOT-R02** | request-detail + rules status-rules |
| **LOT-R03** | planning + flows + rules |
| **LOT-R04** | technician-intervention + intervention-report |
| **LOT-R05** | rules status-rules + request-detail / requests-list |
| **LOT-R06** | qa nominal-scenarios |
| **LOT-R07** | rules refusal-rules + qa refusal-scenarios |
| **LOT-R08** | data demo-data |

---

## 8. Décision sur la structure projet

### Décision indicative

Retenir une structure **mono-app avec séparation logique interne**.

### Justification

- cohérente avec l'option stack recommandée ;
- suffisante pour INC-01 ;
- limite le setup ;
- rend visible la séparation des responsabilités ;
- permet une future extraction front / back si nécessaire ;
- évite de surdimensionner le MVP ;
- facilite la démonstration ;
- facilite la QA documentaire.

Cette décision reste **documentaire** et devra être confirmée avant création réelle du projet applicatif.

---

## 9. Ce qui ne doit pas être créé dans ce cycle

| Élément | Raison |
|---------|--------|
| **Dossier interv360-app/ réel** | Autorisation de code non donnée |
| **Framework front** | Hors cycle |
| **Framework back** | Hors cycle |
| **API** | Hors cycle |
| **Base de données** | Hors cycle |
| **Migration SQL** | Hors cycle |
| **Tests automatisés** | Hors cycle |
| **Scripts** | Hors cycle |
| **Tickets Jira réels** | Hors cycle |
| **Sprint plan** | Hors cycle |
| **CI/CD** | Hors cycle |
| **Packaging / déploiement** | Hors cycle |

---

## 10. Conditions avant création réelle du projet

| Condition | Objectif |
|-----------|----------|
| **Confirmer l'option stack** | Éviter démarrage flou |
| **Confirmer mono-app ou séparation physique** | Éviter reprise |
| **Confirmer stratégie data** | Éviter mauvais choix de persistance |
| **Confirmer stratégie QA** | Prévoir manuel / automatisé plus tard |
| **Confirmer périmètre INC-01 gelé** | Éviter dérive |
| **Confirmer Figma non bloquant** | Éviter attente |
| **Confirmer CRM / dashboard hors périmètre** | Éviter élargissement |
| **Obtenir autorisation explicite de démarrage code** | Condition obligatoire |

---

## 11. Risques liés à la structure projet

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Structure trop lourde** | Ralentissement | Rester mono-app |
| **Structure trop pauvre** | Dette rapide | Garder couches logiques |
| **Dossier créé trop tôt** | Démarrage code implicite | Attendre autorisation |
| **Séparation front / back prématurée** | Surcharge | Privilégier séparation logique |
| **Data mélangée à l'UI** | Incohérences | Isoler data / rules |
| **Règles de statut dispersées** | Erreurs | Centraliser status-rules |
| **Refus métier oubliés** | Incohérences | Isoler refusal-rules |
| **CRM / dashboard réintroduits** | Élargissement | Garde-fous |

---

## 12. Décisions retenues

| Décision | Statut |
|----------|--------|
| Structure cible documentaire uniquement | Retenu |
| Aucun dossier applicatif créé | Retenu |
| Mono-app avec séparation logique interne | Retenu |
| Couches UI / application / métier / data distinguées | Retenu |
| Règles de statuts isolées | Retenu |
| Refus métier isolés | Retenu |
| Demo data isolées | Retenu |
| QA isolée | Retenu |
| Future séparation front / back possible | Retenu |
| Autorisation de code non donnée | Retenu |

---

## 13. Garde-fous

- ne pas démarrer le code ;
- ne pas créer le dossier applicatif ;
- ne pas initialiser de framework ;
- ne pas installer de dépendances ;
- ne pas créer d'API ;
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

## 14. Critères de sortie

- [x] décision stack indicative rappelée ;
- [x] principes de structure cible définis ;
- [x] structure logique cible définie ;
- [x] structure de dossiers cible proposée sans création réelle ;
- [x] mapping structure / INC-01 défini ;
- [x] mapping structure / backlog défini ;
- [x] décision de structure formulée ;
- [x] éléments à ne pas créer listés ;
- [x] conditions avant création réelle listées ;
- [x] risques identifiés ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 15. Prochaine action

Le prochain livrable est :

`inc-01-front-back-start-decision.md`

**Objectif :** décider du niveau de séparation front / back pour INC-01, sans créer d'architecture applicative réelle.
