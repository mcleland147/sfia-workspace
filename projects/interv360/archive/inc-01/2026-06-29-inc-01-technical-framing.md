# Interv360 — INC-01 technical framing

**Type** : Cadrage technique préparatoire  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization preparation  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-preparation`  
**Documents associés** : [`realization-preparation-plan.md`](realization-preparation-plan.md), [`inc-01-realization-slicing.md`](inc-01-realization-slicing.md), [`delivery-detailing-summary.md`](delivery-detailing-summary.md), [`inc-01-readiness-checklist.md`](inc-01-readiness-checklist.md), [`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md)

---

## 1. Objectif

Ce document identifie les **cadrages techniques nécessaires** à **INC-01 — Flux SAV minimal démontrable** avant une future réalisation.

Il **ne définit pas** encore une architecture technique finale.

Il **ne crée pas** de code, d'API détaillée, de SQL, de schéma de base de données ou de tests automatisés.

L'objectif est de clarifier les **questions techniques à résoudre** pour permettre une réalisation maîtrisée du flux :

**demande créée → demande qualifiée → intervention planifiée → intervention réalisée → compte rendu saisi → clôture locale STAT-06 visible.**

---

## 2. Principes de cadrage

Le cadrage technique doit rester :

- préparatoire ;
- non prescriptif sur la stack ;
- aligné avec les user stories INC-01 ;
- aligné avec les critères d'acceptation métier ;
- limité aux séquences **RS-01 à RS-05** ;
- compatible avec une future réalisation progressive ;
- sans introduction d'un CRM réel ;
- sans synchronisation bloquante ;
- sans dashboard ou BI.

---

## 3. Périmètre technique à cadrer

| Domaine | Besoin de cadrage | Niveau attendu |
|---------|-------------------|----------------|
| **Données fonctionnelles minimales** | Identifier les objets nécessaires | Cadrage conceptuel |
| **Persistance** | Déterminer comment conserver l'état du flux | Décision future |
| **Transitions de statuts** | Formaliser les règles minimales STAT-01 à STAT-06 | Cadrage fonctionnel / technique |
| **Écrans et interactions** | Aligner les actions utilisateur avec le flux | Cadrage UX / front |
| **Logique métier** | Identifier les règles de passage entre étapes | Cadrage applicatif |
| **Identité des acteurs** | Distinguer responsable SAV / technicien sans habilitations avancées | Cadrage léger |
| **Traçabilité minimale** | Savoir ce qui doit être visible pour démontrer le flux | Cadrage léger |
| **Préparation QA** | Rendre les séquences vérifiables | Renvoi vers [`inc-01-qa-strategy.md`](inc-01-qa-strategy.md) |

---

## 4. Objets fonctionnels minimaux à considérer

| Objet fonctionnel | Rôle dans INC-01 | Séquences concernées |
|-------------------|------------------|----------------------|
| **Demande SAV** | Objet central du flux | RS-01 à RS-05 |
| **Fiche demande** | Représentation détaillée de la demande | RS-01 à RS-05 |
| **Qualification** | Données minimales permettant STAT-02 | RS-02 |
| **Intervention** | Objet opérationnel lié à une demande qualifiée | RS-03 à RS-05 |
| **Créneau** | Information de planification | RS-03 |
| **Technicien** | Acteur affecté à l'intervention | RS-03 à RS-04 |
| **Compte rendu** | Synthèse terrain | RS-04 à RS-05 |
| **Résultat intervention** | Issue métier de l'intervention | RS-04 à RS-05 |
| **Statut** | État métier du flux | RS-01 à RS-05 |

**Précision :** ce tableau **n'est pas** un modèle de données final.

---

## 5. Données minimales à clarifier

### Demande SAV

| Donnée minimale | Pourquoi |
|-----------------|----------|
| Référence demande | Identifier la demande dans liste et fiche |
| Libellé / motif | Contexte métier minimal |
| Client ou demandeur | Lier la demande à un besoin client |
| Canal minimal | Origine de la demande sans multi-canal avancé |
| Priorité simple | Priorisation légère sans règles complexes |
| Statut courant | Visibilité du flux (STAT-01 à STAT-06) |

### Qualification

| Donnée minimale | Pourquoi |
|-----------------|----------|
| Checklist minimale | Condition de passage vers STAT-02 |
| Informations obligatoires | Garantir une qualification exploitable |
| Date ou trace de qualification | Traçabilité minimale |
| Responsable ayant qualifié | Acteur ayant validé la qualification |

### Intervention

| Donnée minimale | Pourquoi |
|-----------------|----------|
| Référence intervention | Identifier l'intervention |
| Lien avec demande | Cohérence demande → intervention |
| Créneau | Planification simple |
| Technicien affecté | Réalisation terrain |
| Statut opérationnel | Visibilité STAT-03 à STAT-06 |

### Compte rendu

| Donnée minimale | Pourquoi |
|-----------------|----------|
| Résumé intervention | Synthèse terrain minimale |
| Commentaire technicien | Détail simple sans pièces jointes avancées |
| Date de réalisation | Contexte temporel |
| Résultat associé | Lien CR → résultat → clôture |

### Résultat intervention

| Donnée minimale | Pourquoi |
|-----------------|----------|
| Résultat simple | Issue métier de l'intervention |
| Information permettant clôture | Condition de passage vers STAT-06 |
| Motif si non clôturable éventuel | Gestion minimale des cas bloquants |

### Statut

| Donnée minimale | Pourquoi |
|-----------------|----------|
| Statut courant | État visible liste / fiche |
| Transitions autorisées | Cohérence du chemin nominal |
| Visibilité liste / fiche | Démonstration du flux |

**Précision :** ces éléments doivent être clarifiés avant réalisation, mais **ne constituent pas** un schéma SQL.

---

## 6. Transitions de statuts à cadrer

| Transition | Déclencheur métier | Séquence |
|------------|--------------------|----------|
| Création demande → **STAT-01** | Demande créée | RS-01 |
| **STAT-01** → **STAT-02** | Qualification minimale complétée | RS-02 |
| **STAT-02** → **STAT-03** | Intervention créée, créneau sélectionné, technicien affecté | RS-03 |
| **STAT-03** → **STAT-04** | Intervention engagée / CR saisi | RS-04 |
| **STAT-04** → **STAT-06** | CR + résultat exploitables, clôture locale décidée | RS-05 |

**Précisions :**

- **STAT-05** existe mais **n'est pas requis** dans le chemin nominal INC-01 ;
- **STAT-07** et **STAT-08** ne sont **pas activés** ;
- aucune transition ne dépend d'un **CRM réel** ;
- aucune transition ne dépend d'une **synchronisation externe réussie**.

---

## 7. Cadrage par séquence de réalisation

| Séquence | Questions techniques à clarifier |
|----------|----------------------------------|
| **RS-01** | Comment créer une demande dans l'application cible ? Quelles données minimales obligatoires ? Comment rendre la demande visible dans liste et fiche ? Comment garantir que la fiche reste source détaillée ? |
| **RS-02** | Comment matérialiser la checklist minimale ? Quelles conditions permettent STAT-02 ? Comment rendre le statut visible dans liste et fiche ? |
| **RS-03** | Comment représenter une intervention liée à une demande ? Comment représenter un créneau simple ? Comment représenter l'affectation technicien ? Comment garantir STAT-03 après créneau + technicien ? |
| **RS-04** | Comment permettre la consultation technicien ? Quelles informations terrain minimales afficher ? Comment saisir un CR simple ? Comment renseigner un résultat ? |
| **RS-05** | Comment vérifier que CR + résultat permettent la clôture ? Comment appliquer STAT-06 localement ? Comment rendre STAT-06 visible sans dashboard ? Comment éviter toute dépendance à une synchronisation externe ? |

---

## 8. Front / Back / Data — cadrage non prescriptif

| Couche | Questions à traiter | Décision à prendre plus tard |
|--------|---------------------|------------------------------|
| **Front** | Écrans nécessaires par séquence ; actions utilisateur ; visibilité des statuts ; parcours responsable SAV / technicien | Choix front, framework, structure UI |
| **Back** | Orchestration du flux ; règles de transitions ; validation minimale ; lien demande / intervention / CR | Choix back, architecture applicative |
| **Data** | Objets persistés ; identifiants ; statuts ; relations minimales ; conservation de la clôture locale | Stratégie de persistance, modèle de données |

**Précision :** aucune technologie, framework, base de données ou architecture cible **n'est choisie** dans ce document.

---

## 9. Points d'architecture à décider plus tard

| Décision future | Pourquoi | Moment recommandé |
|-----------------|----------|-------------------|
| **Choix front** | Nécessaire avant développement | Cycle conception technique |
| **Choix back** | Nécessaire avant développement | Cycle conception technique |
| **Stratégie de persistance** | Nécessaire avant développement | Cycle conception technique |
| **Modèle de données** | Nécessaire avant réalisation | Conception technique |
| **API ou absence d'API** | Nécessaire avant implémentation | Conception technique |
| **Gestion des rôles** | Nécessaire avant MVP exécutable | Conception technique légère |
| **Stratégie de tests** | À cadrer avec QA | [`inc-01-qa-strategy.md`](inc-01-qa-strategy.md) |
| **Stratégie de démo** | À cadrer avant réalisation | Préparation réalisation |

---

## 10. Risques techniques identifiés

| Risque | Impact | Réduction proposée |
|--------|--------|--------------------|
| **Surmodélisation trop tôt** | Ralentit la réalisation | Rester sur objets minimaux |
| **Confusion statut / indicateur** | Incohérence métier | STAT-07/08 hors INC-01 |
| **Dépendance CRM implicite** | Blocage du flux | Maintenir clôture locale autonome |
| **Découpage par écran** | Valeur démontrable faible | Conserver RS-01 à RS-05 |
| **Figma bloquant** | Ralentissement | Specs Git suffisantes |
| **Absence de règles de transition** | Ambiguïté réalisation | Formaliser STAT-01 à STAT-06 |
| **CR trop complexe** | Surcharge MVP | CR simple uniquement |

---

## 11. Questions ouvertes

| Question | Statut | À traiter dans |
|----------|--------|----------------|
| Quelles données minimales exactes pour créer une demande ? | Ouverte | Conception fonctionnelle / technique |
| Quelle forme de checklist minimale ? | Ouverte | Cadrage fonctionnel |
| Quel niveau de détail pour le planning simple ? | Ouverte | Conception technique légère |
| Quels rôles minimum dans le MVP exécutable ? | Ouverte | Conception technique |
| Quelle stratégie de persistance pour la démo ? | Ouverte | Conception technique |
| Quel format de résultat intervention ? | Ouverte | Cadrage fonctionnel / QA |
| Quelle stratégie de démonstration bout en bout ? | Ouverte | QA / préparation réalisation |

---

## 12. Garde-fous

- ne **pas** transformer ce document en architecture technique finale ;
- ne **pas** créer d'API détaillée ;
- ne **pas** créer de modèle SQL ;
- ne **pas** créer de code ;
- ne **pas** créer de tests automatisés ;
- ne **pas** choisir de stack ;
- ne **pas** introduire de CRM réel ;
- ne **pas** rendre la synchronisation bloquante ;
- ne **pas** activer STAT-07 / STAT-08 ;
- ne **pas** ajouter dashboard ou BI ;
- ne **pas** rendre Figma bloquant.

---

## 13. Critères de sortie

- [x] objets fonctionnels minimaux identifiés ;
- [x] données minimales à clarifier listées ;
- [x] transitions de statuts cadrées ;
- [x] questions techniques par séquence identifiées ;
- [x] couches front / back / data cadrées sans choix définitif ;
- [x] décisions futures identifiées ;
- [x] risques techniques identifiés ;
- [x] questions ouvertes listées ;
- [x] garde-fous repris.

---

## 14. Prochaine action

Le prochain livrable est :

**[`inc-01-qa-strategy.md`](inc-01-qa-strategy.md)**

**Objectif :** préparer l'approche QA métier et fonctionnelle de INC-01, sans créer encore de tests automatisés.

---

*Cadrage technique préparatoire INC-01 — Draft.*
