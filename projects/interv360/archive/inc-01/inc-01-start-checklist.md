# Interv360 — INC-01 Start checklist

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Implementation preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-inc-01-implementation-preparation`

---

## 1. Objectif

Cette checklist vérifie si les **conditions minimales** sont réunies pour autoriser le **premier commit applicatif** INC-01.

Elle ne lance pas encore le développement.

Elle sert de point de contrôle avant :

- initialisation éventuelle du projet applicatif ;
- choix concret du framework ;
- installation de dépendances ;
- création de la structure de code ;
- première implémentation du socle INC-01.

---

## 2. Documents de référence

| Document | Statut attendu | Commentaire |
|----------|----------------|-------------|
| `implementation-go-no-go.md` | Disponible | Go conditionnel INC-01 |
| `technical-arbitration.md` | Disponible | Mono-app + data locale |
| `inc-01-implementation-preparation-plan.md` | Disponible | Plan du cycle courant |
| `inc-01-technical-scope.md` | Disponible | Périmètre technique proposé |
| `inc-01-data-scope.md` | Disponible | Périmètre data proposé |
| `inc-01-readiness-checklist.md` | Disponible | Readiness métier / livraison |
| `inc-01-qa-scenarios.md` | Disponible | Scénarios QA disponibles |

---

## 3. Checklist de démarrage

### 3.1 Périmètre INC-01

| Contrôle | Statut | Commentaire |
|----------|--------|-------------|
| INC-01 limité au flux SAV minimal | À valider | Pas d'élargissement MVP |
| Chemin nominal STAT-01 → STAT-06 confirmé | À valider | STAT-05/07/08 hors scope |
| 5 écrans INC-01 confirmés | À valider | Liste, fiche, planning, intervention mobile, CR mobile |
| CRM réel exclu | À valider | Aucun connecteur réel |
| Dashboard exclu | À valider | Pas d'indicateurs avancés |
| Multi-utilisateur exclu | À valider | Démo locale mono-session |

### 3.2 Stack

| Contrôle | Statut | Commentaire |
|----------|--------|-------------|
| Mono-app web confirmée | À valider | Pas de backend obligatoire |
| Séparation logique UI / métier / data confirmée | À valider | Règles métier hors UI seule |
| Framework concret choisi | À décider | Non tranché dans technical scope |
| Backend serveur exclu | À valider | Pour INC-01 |
| API HTTP obligatoire exclue | À valider | Orchestration interne |
| Dépendances lourdes justifiées | À valider | Pas de surarchitecture |

### 3.3 Data

| Contrôle | Statut | Commentaire |
|----------|--------|-------------|
| Données fictives uniquement | À valider | Aucune donnée réelle |
| Seed SAV-DEMO-001 confirmé | À valider | Source `inc-01-demo-data.md` |
| Persistance locale confirmée | À valider | Sans serveur |
| Mécanisme physique choisi | À décider | Recommandation : stockage navigateur structuré |
| Reset démo prévu | À décider | Rejouabilité obligatoire |
| Journal fonctionnel minimal prévu | À valider | 5 événements minimum |
| SQL / DDL exclus | À valider | Aucun schéma serveur |

### 3.4 Qualité / QA

| Contrôle | Statut | Commentaire |
|----------|--------|-------------|
| Scénarios nominaux identifiés | À valider | STAT-01 → STAT-06 |
| Scénarios de refus / garde-fous identifiés | À valider | Si documentés |
| Critères de démonstration définis | À valider | Démo rejouable |
| Tests automatisés attendus au premier commit | À décider | Niveau minimal à cadrer |
| Définition du « premier commit » clarifiée | À décider | Socle, pas flux complet |

### 3.5 Responsabilités

| Contrôle | Statut | Commentaire |
|----------|--------|-------------|
| Responsable produit INC-01 identifié | À confirmer | Non nommé à ce stade |
| Responsable technique identifié | À confirmer | Non nommé à ce stade |
| Validateur du périmètre identifié | À confirmer | À formaliser |
| Autorisation premier commit donnée | Non | À décider en clôture |

---

## 4. Conditions bloquantes avant code

Le premier commit applicatif **ne doit pas** être autorisé tant que les points suivants ne sont pas validés :

1. périmètre INC-01 gelé ;
2. framework concret choisi ou décision de starter minimal validée ;
3. mécanisme de persistance locale choisi ;
4. règle de reset démo définie ;
5. interdiction des données réelles confirmée ;
6. définition du premier commit applicatif clarifiée ;
7. responsable de validation identifié ;
8. autorisation explicite donnée.

---

## 5. Décision de la checklist

**Statut proposé :**

- [ ] Prêt pour premier commit applicatif
- [x] Prêt sous conditions
- [ ] Non prêt

**Décision :**

INC-01 est **prêt sous conditions** pour préparer le premier commit applicatif.

Les décisions restantes portent principalement sur :

- choix concret du framework ;
- choix du mécanisme physique de persistance locale ;
- stratégie minimale de tests ;
- définition exacte du contenu du premier commit ;
- autorisation explicite de code.

**Aucun code ne doit être produit** avant validation finale de ces conditions.

---

## 6. Suite proposée

Après validation de cette checklist, produire :

`inc-01-implementation-preparation-summary.md`

Ce document devra :

- consolider les livrables produits ;
- confirmer ou non les choix restants ;
- décider si le premier commit applicatif est autorisé ;
- préciser le contenu autorisé du premier commit ;
- maintenir les garde-fous INC-01.
