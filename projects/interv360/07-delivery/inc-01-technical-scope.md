# Interv360 — INC-01 Technical scope

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Implementation preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-inc-01-implementation-preparation`

---

## 1. Objectif du document

Ce document fige le **périmètre technique minimal autorisé** pour INC-01.

Il ne lance pas encore le développement.

Il sert à cadrer :

- la stack minimale autorisée ;
- les limites techniques ;
- les responsabilités logiques ;
- les garde-fous avant le premier commit applicatif ;
- les éléments explicitement hors périmètre.

---

## 2. Décisions de référence

**Sources de référence :**

- [`implementation-go-no-go.md`](implementation-go-no-go.md)
- [`technical-arbitration.md`](technical-arbitration.md)
- [`inc-01-stack-options.md`](inc-01-stack-options.md)
- [`inc-01-front-back-data-decisions.md`](inc-01-front-back-data-decisions.md)
- [`inc-01-api-strategy.md`](inc-01-api-strategy.md)
- [`inc-01-data-model.md`](inc-01-data-model.md)
- [`inc-01-demo-data.md`](inc-01-demo-data.md)
- [`inc-01-readiness-checklist.md`](inc-01-readiness-checklist.md)

**Décisions reprises :**

- Go conditionnel sur INC-01 ;
- mono-app web recommandée ;
- séparation logique interne front / orchestration métier / data ;
- data locale persistée ;
- données fictives uniquement ;
- pas de backend obligatoire ;
- pas d'API externe obligatoire ;
- pas de CRM réel ;
- pas de données personnelles réelles.

---

## 3. Périmètre fonctionnel technique INC-01

INC-01 couvre uniquement le **flux SAV minimal démontrable** jusqu'à **STAT-06 — Clôturée localement**.

Chemin nominal documenté : **STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06** (RS-01 à RS-05).

| Élément | Inclus INC-01 | Commentaire |
|---------|:-------------:|-------------|
| Création / consultation demande SAV (démo) | Oui | Données fictives — `inc-01-demo-data.md` |
| Liste demandes | Oui | Point d'accès — écran pilote Figma V2 validé, non bloquant pour les autres |
| Fiche demande SAV | Oui | Référence opérationnelle détaillée |
| Qualification SAV (STAT-01 → STAT-02) | Oui | Checklist minimale — règles hors UI |
| Planification / affectation (STAT-03) | Oui | Planning simple, créneau, technicien |
| Intervention terrain (STAT-04) | Oui | Fiche intervention mobile / responsive |
| Compte rendu / résultat minimal | Oui | Préparation clôture — CR simple |
| Clôture locale (STAT-06) | Oui | Autonome vis-à-vis sync externe (ADR-004) |
| Journal fonctionnel minimal | Oui | Traçabilité de démonstration |
| STAT-05 (en attente client) | Non | Hors chemin nominal INC-01 |
| STAT-07 / STAT-08 | Non | Indicateurs — hors INC-01 |
| CRM simulé ou réel | Non | Hors INC-01 |
| Dashboard / vue dirigeant | Non | Hors INC-01 |
| Authentification avancée | Non | Hors périmètre cadrage MVP |
| Multi-utilisateur partagé | Non | Démo locale mono-session suffisante |
| Backend partagé / base serveur | Non | Hors périmètre |

**Écrans techniques concernés (5) :** Liste demandes, Fiche demande SAV, Planning, Fiche intervention mobile, Compte rendu mobile.

---

## 4. Stack minimale autorisée

**Décision indicative :**

**Mono-app web avec séparation logique interne.**

Cela signifie :

- une seule application exécutable pour INC-01 ;
- séparation logique entre UI, orchestration métier et couche data ;
- pas d'obligation de backend séparé ;
- pas d'obligation d'API HTTP formalisée ;
- **pas de choix définitif de framework** dans ce document.

**Structure logique attendue :**

```text
UI / Présentation
        ↓
Orchestration métier INC-01
        ↓
Couche data locale
        ↓
Données fictives persistées
```

**Alignement documentaire :** option B de `technical-arbitration.md` — équivalent indicatif de l'option A « mono-app web simple » dans `inc-01-stack-options.md`.

---

## 5. Séparation logique attendue

Même en mono-app, le code futur devra distinguer :

| Couche | Rôle | Garde-fou |
|--------|------|-----------|
| **UI / Présentation** | Affichage, interactions utilisateur | Ne porte pas seule les règles métier ni les transitions de statut |
| **Orchestration métier** | Transitions STAT-01 à STAT-06, règles de flux RS-01 à RS-05 | Isolée de l'affichage ; contrôle des préconditions métier |
| **Data locale** | Lecture / écriture des objets conceptuels (`inc-01-data-model.md`) | Pas d'appel CRM / API externe |
| **Seed de démo** | Données SAV fictives initiales (ex. SAV-DEMO-001) | Aucune donnée réelle |

**Règles reprises de `inc-01-front-back-data-decisions.md` :**

- le front déclenche les actions mais ne décide pas les transitions ;
- le back (couche orchestration) décide et contrôle les transitions ;
- la data conserve l'état mais ne porte pas les règles métier ;
- la fiche demande fait foi — liste et planning = accès, pas source de vérité détaillée.

---

## 6. API / backend

Pour INC-01 :

| Sujet | Décision |
|-------|----------|
| Backend séparé | **Non requis** |
| API HTTP formalisée | **Non requise** |
| API externe | **Non autorisée** |
| CRM réel | **Non autorisé** |
| Base serveur | **Non autorisée** |
| Contrat OpenAPI / payload JSON | **Hors périmètre** |
| Orchestration applicative interne | **Requise** (logique métier dans la mono-app) |

**Source :** `inc-01-api-strategy.md` — orchestration interne prioritaire, API détaillée reportée.

Une séparation physique front/back pourra être réévaluée après INC-01 si un besoin réel apparaît (multi-utilisateur partagé, déploiement serveur, etc.).

---

## 7. Persistance technique

**Principe retenu :**

- persistance locale structurée ;
- données fictives uniquement ;
- pas de SQL serveur ;
- pas de migration DB serveur ;
- pas de données personnelles réelles ;
- mécanisme physique à confirmer dans [`inc-01-data-scope.md`](inc-01-data-scope.md).

**Objets à supporter (conceptuels) :** Demande SAV, Qualification, Intervention, Créneau, Technicien, Compte rendu, Résultat, Statut courant, Journal fonctionnel minimal.

**Options physiques possibles** (à arbitrer dans le livrable data) :

- stockage navigateur structuré ;
- fichier local ;
- SQLite embarqué ;
- autre mécanisme local léger.

Ce document **ne tranche pas** encore le mécanisme physique.

---

## 8. Garde-fous techniques

Le premier commit applicatif **ne devra pas** contenir :

- backend serveur ;
- API HTTP obligatoire ;
- connexion CRM ;
- données réelles ou personnelles ;
- authentification avancée ;
- dashboard ou vue dirigeant ;
- périmètre STAT-07 / STAT-08 ;
- logique métier noyée uniquement dans l'UI ;
- dépendances lourdes non justifiées pour INC-01 ;
- génération de sprint Jira ou tickets ;
- élargissement au-delà des 5 écrans INC-01 ;
- implémentation INC-02+.

**Premier commit attendu :** socle minimal (structure, séparation logique, point d'entrée) — **pas** le flux complet STAT-06.

---

## 9. Préconditions avant premier commit applicatif

| Prérequis | Statut | Commentaire |
|-----------|--------|-------------|
| Périmètre INC-01 gelé | **Proposé** | Formalisé dans ce document — validation cycle en cours |
| Stack minimale validée | **Proposée** | Mono-app + séparation logique — framework à choisir |
| Data scope validé | **À produire** | Voir [`inc-01-data-scope.md`](inc-01-data-scope.md) |
| Plan de réalisation INC-01 | **À mettre à jour** | Voir [`inc-01-implementation-plan.md`](inc-01-implementation-plan.md) |
| Checklist de démarrage | **À produire** | Voir [`inc-01-start-checklist.md`](inc-01-start-checklist.md) |
| Autorisation explicite de code | **Non donnée** | À obtenir en clôture du cycle implementation-preparation |

---

## 10. Décision du document

**Statut proposé :**

- [ ] Périmètre technique validé
- [x] Périmètre technique proposé, à valider
- [ ] Périmètre technique incomplet

**Décision :**

Le périmètre technique INC-01 est **proposé** sur une base **mono-app web** avec **séparation logique** et **data locale persistée (fictive)**.

Il reste à compléter par :

- le data scope ;
- le plan de réalisation aligné ;
- la checklist de démarrage ;
- l'autorisation explicite de code.

**Aucun framework, langage, repo applicatif ou mécanisme de persistance physique n'est imposé par ce document.**
