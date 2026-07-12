# Standard des livrables — Architecture fonctionnelle détaillée

**Type** : Standard documentaire SFIA  
**Domaine** : Architecture fonctionnelle  
**Statut** : Draft  
**Usage** : Réutilisable

---

## 1. Objectif du standard

Ce document **normalise les livrables** attendus lors d'un cycle d'architecture fonctionnelle détaillée.

Il précise pour chaque livrable :

- son **rôle** ;
- son **ordre** de production recommandé ;
- son **contenu attendu** ;
- son **niveau de détail** ;
- ses **dépendances** ;
- ses **critères de qualité** ;
- les **erreurs à éviter**.

Ce standard est **générique** : il s'applique à tout projet SFIA, pas à un cas d'usage unique.

---

## 2. Vue d'ensemble des livrables

| Ordre | Livrable | Rôle | Sortie attendue | Ne doit pas produire |
|:-----:|----------|------|-----------------|----------------------|
| 1 | `functional-architecture-scope.md` | Cadrer le cycle | Périmètre, objectifs, exclusions, dépendances | Domaines détaillés, objets, statuts |
| 2 | `functional-domains.md` | Structurer les responsabilités | Domaines, fonctions, règles, entrées/sorties | Objets détaillés, API, écrans |
| 3 | `business-objects.md` | Nommer le métier manipulé | Objets, rôles, relations | Modèle SQL, classes, JSON |
| 4 | `status-and-transitions.md` | Formaliser les états | Statuts, transitions, règles, matrices | Workflow technique, BPMN |
| 5 | `integration-functional-view.md` | Décrire les échanges externes | Sync, erreurs, reprise, source de vérité | Contrats API, mapping technique |
| 6 | `dashboard-and-alerts.md` | Décrire le pilotage | Indicateurs, alertes, vues, priorisation | Maquettes UI, composants front |
| 7 | `functional-architecture-summary.md` | Consolider | Vision synthétique alignée ADR | Nouvelles décisions structurantes |
| 8 | `2026-06-28-functional-architecture-cycle-closure.md` | Clôturer | Livrables, garde-fous, suites | Backlog, delivery, tests |

**Emplacement recommandé projet :** `projects/<projet>/05-functional-architecture/` (ou équivalent selon la numérotation du projet).

---

## 3. Cadrage du périmètre fonctionnel

**Fichier :** `functional-architecture-scope.md`

| Aspect | Attendu |
|--------|---------|
| **Rôle** | Ouvrir le cycle ; fixer le cadre et les garde-fous |
| **Contenu attendu** | Objectif, sources, livrables prévus, acteurs, exclusions, dépendances BPMN/ADR |
| **Niveau de détail** | Macro — pas de spécification fine |
| **Dépendances** | Cadrage, clarification, BPMN, ADR |
| **Critères de qualité** | Périmètre lisible ; exclusions explicites ; liste de livrables complète |
| **Erreurs à éviter** | Anticiper tout le détail métier ; créer des user stories ; modifier les ADR |

---

## 4. Domaines fonctionnels

**Fichier :** `functional-domains.md`

| Aspect | Attendu |
|--------|---------|
| **Rôle** | Définir les blocs de responsabilité fonctionnelle |
| **Contenu attendu** | Vue d'ensemble, fiche par domaine (responsabilité, fonctions, règles, E/S), matrices domaines/ADR et domaines/BPMN |
| **Niveau de détail** | Fonctionnel — pas d'écran ni de composant |
| **Dépendances** | Scope, BPMN, ADR, règles RG |
| **Critères de qualité** | Domaines distincts ; responsabilités non chevauchées ; lien avec statuts |
| **Erreurs à éviter** | Domaines techniques ; fusion de responsabilités ; backlog déguisé |

---

## 5. Objets métier

**Fichier :** `business-objects.md`

| Aspect | Attendu |
|--------|---------|
| **Rôle** | Nommer et relier les éléments métier |
| **Contenu attendu** | Vue d'ensemble, fiche par objet (définition, responsabilités, statuts liés, relations), matrices objets/domaines, relations structurantes |
| **Niveau de détail** | Fonctionnel — définitions et liens, pas attributs techniques |
| **Dépendances** | Domaines, scope |
| **Critères de qualité** | Objets compréhensibles métier ; relations explicites ; exclusions techniques rappelées |
| **Erreurs à éviter** | Schéma de base ; entités techniques ; duplication des domaines |

---

## 6. Statuts et transitions

**Fichier :** `status-and-transitions.md`

| Aspect | Attendu |
|--------|---------|
| **Rôle** | Formaliser états et passages fonctionnels |
| **Contenu attendu** | Familles de statuts, catalogue, fiches par statut, transitions, conditions de clôture, coexistences, transitions interdites, matrices |
| **Niveau de détail** | Règles fonctionnelles — pas machine à états technique |
| **Dépendances** | Objets, domaines, ADR statuts, mapping existant |
| **Critères de qualité** | Distinction statut / indicateur ; transitions traçables ; alignement ADR |
| **Erreurs à éviter** | Workflow exécutable ; sync d'indicateurs ; tickets backlog |

---

## 7. Vue fonctionnelle des intégrations

**Fichier :** `integration-functional-view.md`

| Aspect | Attendu |
|--------|---------|
| **Rôle** | Décrire les échanges avec l'extérieur du point de vue métier |
| **Contenu attendu** | Principes, moment de sync, données fonctionnelles, résultats, anomalies, gravités, reprise, effets statuts/dashboard, matrices |
| **Niveau de détail** | Fonctionnel — pas contrat ni schéma |
| **Dépendances** | Statuts, objets, ADR intégration |
| **Critères de qualité** | Source de vérité claire ; sync non bloquante si décidé ; erreurs visibles |
| **Erreurs à éviter** | API réelle ; JSON ; intégration comme maître des données |

---

## 8. Dashboard, alertes et pilotage

**Fichier :** `dashboard-and-alerts.md`

| Aspect | Attendu |
|--------|---------|
| **Rôle** | Décrire visibilité et priorisation opérationnelle |
| **Contenu attendu** | Principes, indicateurs, alertes, STAT indicateurs, priorisation, vues par profil, matrices dashboard/objets/statuts/ADR |
| **Niveau de détail** | Fonctionnel — pas wireframe ni composant |
| **Dépendances** | Statuts, intégrations, domaines |
| **Critères de qualité** | Dashboard non source de vérité ; retard ≠ anomalie ; priorisation explicable |
| **Erreurs à éviter** | Maquette UI ; KPI techniques ; décisions automatiques depuis alertes |

---

## 9. Synthèse d'architecture fonctionnelle

**Fichier :** `functional-architecture-summary.md`

| Aspect | Attendu |
|--------|---------|
| **Rôle** | Consolider sans enrichir le périmètre décisionnel |
| **Contenu attendu** | Vision, domaines, objets, statuts, clôture, sync, anomalies, dashboard, ADR, suites possibles, vigilance |
| **Niveau de détail** | Synthèse — renvois aux livrables détaillés |
| **Dépendances** | Tous les livrables intermédiaires |
| **Critères de qualité** | Cohérence terminologique ; pas de nouvelle règle structurante ; lecture en 15–20 min |
| **Erreurs à éviter** | Réécrire tout le détail ; ajouter des décisions ; ouvrir le delivery |

---

## 10. Clôture du cycle

**Fichier :** `2026-06-28-functional-architecture-cycle-closure.md`

| Aspect | Attendu |
|--------|---------|
| **Rôle** | Acter la fin du cycle documentaire |
| **Contenu attendu** | Livrables produits, résultats consolidés, ADR intégrées, garde-fous, points ouverts, recommandation post-cycle, préparation PR |
| **Niveau de détail** | Méta-documentaire |
| **Dépendances** | Synthèse, état Git, historique commits |
| **Critères de qualité** | Liste complète des livrables ; exclusions confirmées ; phase suivante nommée |
| **Erreurs à éviter** | Nouveau contenu métier ; merge automatique ; publication Notion |

---

## 11. Ordre recommandé de production

```
1. Périmètre (scope)
2. Domaines
3. Objets métier
4. Statuts et transitions
5. Intégrations fonctionnelles
6. Dashboard et alertes
7. Synthèse
8. Clôture
```

**Allers-retours normaux :** un objet peut faire réviser un domaine ; un statut peut faire réviser une intégration.

**Garde-fou :** la **synthèse** et la **clôture** ne doivent **pas** créer de nouvelles décisions structurantes — seulement consolider et acter.

---

## 12. Règles de cohérence documentaire

| Règle | Application |
|-------|-------------|
| Terme métier stable | Même libellé dans tous les livrables |
| Objet à rôle constant | Un objet ne change pas de sens selon le document |
| Statut à sens unique | Pas de double interprétation selon la section |
| Intégration fonctionnelle | Ne devient pas technique dans ce cycle |
| Nouvelle règle structurante | Portée par une ADR si nécessaire |
| Exclusions répétées | Rappelées en synthèse et clôture |
| Matrices alignées | Domaines, objets, statuts, ADR cohérents |

---

## 13. Critères de validation globale

Le cycle documentaire complet est validable lorsque :

- les **8 livrables** existent et sont reliés entre eux ;
- le **périmètre** et les **exclusions** sont identiques entre scope, synthèse et clôture ;
- chaque **domaine** a au moins un objet ou un statut associé ;
- chaque **statut métier** est porté par un objet et un domaine ;
- les **indicateurs** sont distingués des statuts métier ;
- les **intégrations** identifient source de vérité et cible ;
- le **dashboard** est décrit comme couche de visibilité ;
- les **ADR** sont citées et respectées, pas réécrites ;
- **aucun** livrable ne contient backlog, tests, code, API, SQL ou maquette UI finale ;
- la **clôture** liste les livrables et la suite recommandée ;
- l'**historique Git** du cycle est propre et traçable.

---

*Standard documentaire SFIA — Architecture fonctionnelle détaillée — Draft — Réutilisable.*
