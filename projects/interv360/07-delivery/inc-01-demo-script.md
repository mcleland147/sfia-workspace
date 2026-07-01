# Interv360 — INC-01 Demo script

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Demo script  
**Phase** : Phase 2 — Réalisation groupée contrôlée  
**Statut** : Script de démonstration  
**Branche** : `delivery/interv360-inc-01-demo-script`

---

## 1. Objectif du script

Ce document prépare la démonstration du **workflow local contrôlé** INC-01.

Il sert à présenter le démonstrateur de manière claire, maîtrisée et honnête.

Le démonstrateur illustre un flux SAV minimal sur données fictives.

Il ne s'agit pas d'un workflow opérationnel réel.

**Sources :** [`inc-01-controlled-workflow-validation.md`](inc-01-controlled-workflow-validation.md), [`inc-01-controlled-workflow-skeleton-summary.md`](inc-01-controlled-workflow-skeleton-summary.md)

---

## 2. Message d'introduction recommandé

> Cette démonstration présente un parcours SAV minimal, construit dans le cadre d'Interv360.
>
> L'objectif n'est pas de présenter un produit final, mais de montrer comment la SFIA permet de passer d'un cadrage fonctionnel à une réalisation applicative contrôlée.
>
> La démonstration repose sur une demande fictive unique, `SAV-DEMO-001`, stockée localement dans le navigateur.
>
> Aucun backend, aucune API, aucune base de données et aucune donnée réelle ne sont utilisés.

---

## 3. Points clés à rappeler avant la démo

| Sujet | Message à porter |
|------|------------------|
| Nature | Démonstrateur local |
| Données | Fictives uniquement |
| Demande | `SAV-DEMO-001` |
| Stockage | Local navigateur |
| Workflow | Nominal uniquement |
| Backend | Aucun |
| API | Aucune |
| DB | Aucune |
| CRM | Aucun |
| Usage | Preuve de réalisation, pas outil de production |

---

## 4. Parcours de démonstration

### Étape 0 — Réinitialiser la démo

**Action :**

Cliquer sur `Réinitialiser la démo`.

**Message à dire :**

> Je commence par réinitialiser la démo pour repartir d'un état connu.
>
> Le reset purge les données locales fictives, recharge le seed initial et vide le journal.

**Résultat attendu :**

| Élément | Valeur |
|---------|--------|
| Demande | `SAV-DEMO-001` |
| Statut | `STAT-01` |
| Journal | Vide |

---

### Étape 1 — Présenter la demande

**Action :**

Montrer la liste et la fiche demande.

**Message à dire :**

> La demande fictive `SAV-DEMO-001` est affichée dans la liste.
>
> La fiche détail présente les informations principales : client fictif, site fictif, statut courant et éléments de contexte.
>
> À ce stade, la demande est en `STAT-01`.

**Résultat attendu :**

- liste visible ;
- fiche visible ;
- statut `STAT-01` ;
- bandeau données fictives visible.

---

### Étape 2 — Présenter les vues readonly

**Action :**

Parcourir rapidement les blocs readonly :

- qualification ;
- planification ;
- intervention ;
- compte rendu.

**Message à dire :**

> Avant d'introduire les actions métier, le parcours a été construit en readonly.
>
> Chaque bloc affiche les informations fictives nécessaires au parcours SAV, sans permettre de modification.
>
> Cela permet de valider la structure fonctionnelle avant d'ouvrir les transitions.

**Résultat attendu :**

- qualification readonly visible ;
- planification readonly visible ;
- intervention readonly visible ;
- compte rendu readonly visible ;
- aucun formulaire opérationnel réel ;
- données fictives uniquement.

---

### Étape 3 — Qualifier la demande

**Action :**

Cliquer sur `Qualifier la demande`.

**Message à dire :**

> Première action métier contrôlée : la qualification.
>
> Elle est autorisée uniquement lorsque la demande est en `STAT-01`.
>
> Le statut passe alors en `STAT-02`, et un événement fictif est ajouté au journal local.

**Résultat attendu :**

| Élément | Valeur |
|---------|--------|
| Statut | `STAT-02` |
| Événement journal | `qualification.confirmed` |
| Prochaine action visible | `Planifier l'intervention` |

---

### Étape 4 — Planifier l'intervention

**Action :**

Cliquer sur `Planifier l'intervention`.

**Message à dire :**

> La deuxième action planifie fictivement l'intervention.
>
> Elle est disponible uniquement après qualification, donc en `STAT-02`.
>
> Le statut passe en `STAT-03`, et le journal conserve la trace locale de cette action.

**Résultat attendu :**

| Élément | Valeur |
|---------|--------|
| Statut | `STAT-03` |
| Événement journal | `planning.confirmed` |
| Prochaine action visible | `Marquer l'intervention réalisée` |

---

### Étape 5 — Marquer l'intervention réalisée

**Action :**

Cliquer sur `Marquer l'intervention réalisée`.

**Message à dire :**

> Cette étape simule la réalisation de l'intervention terrain.
>
> Elle fait passer la demande de `STAT-03` à `STAT-04`.
>
> Là encore, l'action est locale, fictive et tracée dans le journal.

**Résultat attendu :**

| Élément | Valeur |
|---------|--------|
| Statut | `STAT-04` |
| Événement journal | `intervention.completed` |
| Prochaine action visible | `Clôturer avec compte rendu fictif` |

---

### Étape 6 — Clôturer avec compte rendu fictif

**Action :**

Cliquer sur `Clôturer avec compte rendu fictif`.

**Message à dire :**

> Dernière étape du flux nominal INC-01 : la clôture fictive.
>
> Le statut passe en `STAT-06`.
>
> Une fois la demande clôturée fictivement, aucune autre action métier n'est proposée.

**Résultat attendu :**

| Élément | Valeur |
|---------|--------|
| Statut | `STAT-06` |
| Événement journal | `report.closed` |
| Action métier visible | Aucune |

---

### Étape 7 — Présenter le journal local

**Action :**

Montrer le journal.

**Message à dire :**

> Le journal local affiche les événements produits pendant la démonstration.
>
> Il permet de visualiser la progression du workflow sans backend ni base de données.
>
> Le journal est fictif, local et réinitialisable.

**Événements attendus :**

| Ordre | Événement |
|------|-----------|
| 1 | `qualification.confirmed` |
| 2 | `planning.confirmed` |
| 3 | `intervention.completed` |
| 4 | `report.closed` |

---

### Étape 8 — Montrer le reset après clôture

**Action :**

Cliquer à nouveau sur `Réinitialiser la démo`.

**Message à dire :**

> Le reset permet de rejouer la démonstration.
>
> Il restaure la demande en `STAT-01` et vide le journal local.
>
> Cela confirme que le démonstrateur reste maîtrisé et rejouable.

**Résultat attendu :**

| Élément | Valeur |
|---------|--------|
| Statut | `STAT-01` |
| Journal | Vide |
| Prochaine action visible | `Qualifier la demande` |

---

## 5. Ce que la démonstration prouve

La démonstration prouve que :

- le parcours SAV minimal peut être matérialisé ;
- les transitions nominales peuvent être contrôlées localement ;
- un journal fictif permet de tracer les actions ;
- le reset rend la démo rejouable ;
- les garde-fous SFIA restent actifs ;
- la phase 2 permet d'accélérer sans perdre le cadre.

---

## 6. Ce que la démonstration ne prouve pas

La démonstration ne prouve pas encore :

- une exploitation réelle ;
- une intégration CRM ;
- une intégration backend ;
- une persistance serveur ;
- une gestion multi-utilisateur ;
- une authentification ;
- une gestion de droits ;
- une gestion d'erreurs métier avancée ;
- une conformité production.

---

## 7. Phrase de conclusion recommandée

> Cette démonstration montre que la SFIA peut encadrer une réalisation applicative progressive : d'abord par micro-cycles pour sécuriser le cadre, puis par réalisation groupée lorsque les règles sont stabilisées.
>
> Le résultat est un démonstrateur local cohérent, rejouable, traçable et limité volontairement à des données fictives.
>
> La prochaine étape serait de capitaliser cette méthode pour la rendre réutilisable sur d'autres incréments ou d'autres projets.

---

## 8. Questions possibles et réponses recommandées

### Est-ce un outil utilisable en production ?

Non.

C'est un démonstrateur local sur données fictives.

---

### Où sont stockées les données ?

Dans le navigateur, via `localStorage`.

Il n'y a pas de base serveur.

---

### Est-ce connecté à un CRM ?

Non.

Il n'y a aucune intégration CRM.

---

### Peut-on traiter plusieurs demandes ?

Pas dans cette version.

Le démonstrateur est volontairement limité à `SAV-DEMO-001`.

---

### Peut-on modifier les données ?

Uniquement via les actions fictives prévues dans le flux nominal.

Il n'y a pas de formulaire de saisie libre.

---

### Peut-on ajouter un backend plus tard ?

Oui, mais ce serait un autre cycle, avec de nouveaux arbitrages techniques, sécurité, données et architecture.

---

### Pourquoi avoir commencé par du readonly ?

Pour stabiliser le parcours fonctionnel avant d'introduire les actions métier.

Cela évite de coder un workflow avant d'avoir clarifié les blocs métier.

---

### Pourquoi être passé ensuite en phase 2 groupée ?

Parce que les règles étaient suffisamment stabilisées.

La phase 2 permet d'aller plus vite tout en gardant les garde-fous SFIA.

---

## 9. Préparation avant présentation

Avant de présenter :

- lancer l'application (`npm run dev` depuis `projects/interv360/app/`) ;
- cliquer sur `Réinitialiser la démo` ;
- vérifier que le statut est `STAT-01` ;
- vérifier que le journal est vide ;
- vérifier que le bouton `Qualifier la demande` est visible ;
- garder à l'écran le parcours complet si possible ;
- rappeler explicitement que les données sont fictives.

---

## 10. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-phase-2-rex`

**Objectif :**

- tirer les enseignements de la phase 2 ;
- comparer micro-cycles et réalisation groupée ;
- formaliser une méthode SFIA réutilisable ;
- préparer la capitalisation vers les standards SFIA.
