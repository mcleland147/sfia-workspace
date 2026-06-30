# Interv360 — INC-01 implementation preparation plan

**Type** : Plan de préparation implémentation  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : INC-01 implementation preparation  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-inc-01-implementation-preparation`

---

## 1. Objectif

Ce cycle prépare le **premier commit applicatif** INC-01 après l'arbitrage technique minimal.

Il fait suite à :

- `implementation-go-no-go.md` — **Go conditionnel** ;
- `technical-arbitration.md` — **autorisation conditionnelle** stack/data.

Objectif :

- figer le périmètre technique INC-01 ;
- produire le plan de réalisation opérationnel ;
- produire le périmètre technique et data ;
- produire la checklist de démarrage ;
- préparer la décision d'autorisation explicite du code.

Ce cycle **ne lance pas** le développement tant que l'autorisation finale n'est pas actée.

---

## 2. Décision de référence

| Élément | Valeur |
|---------|--------|
| Go/no-go | Go conditionnel — INC-01 |
| Arbitrage technique | Autorisation conditionnelle démarrage code |
| Stack indicative | Mono-app web, séparation logique front / métier / data locale |
| Data indicative | Persistance locale structurée, données fictives uniquement |
| API / backend | Non requis pour INC-01 (`inc-01-api-strategy.md`) |

**Point d'arrêt hérité :** pas de `git init` applicatif, dépendances, SQL ou API avant clôture de ce cycle.

---

## 3. Périmètre INC-01 rappelé

| Élément | Valeur |
|---------|--------|
| Incrément | INC-01 — Flux SAV minimal démontrable |
| Priorité | P0-A |
| Chemin nominal | STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06 |
| Écrans | Liste, fiche, planning, intervention mobile, compte rendu mobile |
| Hors scope | CRM réel, dashboard, STAT-07/08, sync bloquante, auth avancée |

Sources : `mvp-scope.md`, `inc-01-readiness-checklist.md`, `delivery-slicing-strategy.md`.

---

## 4. Livrables attendus

| Livrable | Fichier | Statut |
|----------|---------|--------|
| Plan de préparation | `inc-01-implementation-preparation-plan.md` | Ce document |
| Périmètre technique INC-01 | `inc-01-technical-scope.md` | À produire |
| Périmètre data INC-01 | `inc-01-data-scope.md` | À produire |
| Plan de réalisation | `inc-01-implementation-plan.md` | Existant — à mettre à jour si nécessaire |
| Checklist de démarrage | `inc-01-start-checklist.md` | À produire |
| Synthèse / autorisation | `inc-01-implementation-preparation-summary.md` | À produire en clôture |

**Sources amont :** `technical-arbitration.md`, `inc-01-stack-options.md`, `inc-01-data-model.md`, `inc-01-demo-data.md`, `inc-01-realization-start-checklist.md`, `technical-design-summary.md`.

---

## 5. Questions à trancher

### 5.1 Gel INC-01

- Confirmer le périmètre figé (16 MB P0-A, 5 écrans, STAT-01→STAT-06).
- Lister explicitement ce qui est hors scope pour le premier commit.

### 5.2 Stack concrète (sans surdimensionner)

- Confirmer mono-app + séparation logique.
- Choisir une stack **minimale** suffisante pour INC-01 (framework, tooling).
- Documenter ce qui reste réversible.

### 5.3 Data

- Choisir le mécanisme de persistance locale (sans base serveur).
- Aligner sur `inc-01-data-model.md` et `inc-01-demo-data.md`.
- Confirmer : données fictives uniquement.

### 5.4 Premier commit applicatif

- Définir le contenu minimal du premier commit (structure, pas de feature complète).
- Définir le repo cible (emplacement, nom — hors sfia-workspace si applicable).
- Produire la checklist de démarrage.

### 5.5 Autorisation code

- Lister les conditions restantes.
- Produire une recommandation : autoriser / autoriser conditionnellement / reporter.

---

## 6. Non-périmètre

Ce cycle ne doit pas :

- développer l'application complète ;
- implémenter INC-02+ ;
- créer une base de données serveur ;
- implémenter une API HTTP ;
- créer un sprint Jira ou des tickets ;
- publier dans Notion ;
- refaire l'UX/UI ;
- élargir au CRM, dashboard ou STAT-07/08.

---

## 7. Garde-fous

- Pas de code avant autorisation explicite documentée.
- Pas de stack imposée sans justification INC-01.
- Pas de données personnelles réelles.
- Figma non bloquant.
- Interv360 source locale ; fiche demande fait foi.
- Premier commit = socle minimal, pas le flux complet.

---

## 8. Ordre de travail proposé

1. Produire `inc-01-technical-scope.md` (gel périmètre + stack minimale).
2. Produire `inc-01-data-scope.md` (persistance + seed démo).
3. Mettre à jour ou compléter `inc-01-implementation-plan.md` si écart avec arbitrage.
4. Produire `inc-01-start-checklist.md`.
5. Produire `inc-01-implementation-preparation-summary.md` avec décision d'autorisation.

---

## 9. Critères de clôture

| Critère | Validé |
|---------|:------:|
| Périmètre technique INC-01 figé | |
| Stratégie data minimale choisie | |
| Plan de réalisation aligné | |
| Checklist de démarrage produite | |
| Premier commit applicatif décrit (pas exécuté sauf autorisation) | |
| Autorisation code explicite ou report documenté | |
| Garde-fous respectés | |

---

## 10. Prochaine action

Produire **`inc-01-technical-scope.md`** — gel du périmètre INC-01 et cadrage stack minimale post-arbitrage.
