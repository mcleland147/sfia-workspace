# Interv360 — INC-01 Implementation preparation summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Implementation preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-inc-01-implementation-preparation`

---

## 1. Objectif du document

Ce document clôture le cycle de préparation de réalisation INC-01.

Il consolide les décisions issues des livrables produits et précise si le premier commit applicatif peut être autorisé.

Ce document ne crée pas encore de code.

---

## 2. Livrables produits dans le cycle

| Livrable | Statut | Rôle |
|----------|--------|------|
| `inc-01-implementation-preparation-plan.md` | Disponible | Plan du cycle de préparation |
| `inc-01-technical-scope.md` | Disponible | Périmètre technique INC-01 |
| `inc-01-data-scope.md` | Disponible | Périmètre data INC-01 |
| `inc-01-start-checklist.md` | Disponible | Checklist de démarrage |

---

## 3. Décisions consolidées

| Sujet | Décision |
|-------|----------|
| Périmètre | INC-01 uniquement — flux SAV minimal démontrable |
| Chemin nominal | STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06 |
| Écrans | Liste demandes, fiche demande, planning, intervention mobile, compte rendu mobile |
| Stack | Mono-app web avec séparation logique |
| Backend | Non requis pour INC-01 |
| API HTTP | Non requise pour INC-01 |
| CRM réel | Exclu |
| Base serveur | Exclue |
| Data | Données fictives uniquement |
| Persistance | Locale structurée |
| Seed | SAV-DEMO-001 / INT-DEMO-001 |
| Reset démo | À prévoir dans le premier socle |
| Journal | Fonctionnel minimal, non réglementaire |
| Authentification | Hors INC-01 |
| Dashboard | Hors INC-01 |
| Multi-utilisateur | Hors INC-01 |

---

## 4. Conditions de démarrage

Les conditions suivantes sont considérées comme suffisamment cadrées pour autoriser une préparation applicative limitée :

| Condition | Statut | Commentaire |
|-----------|--------|-------------|
| Périmètre INC-01 | Validé pour démarrage limité | Pas d'élargissement MVP |
| Stack minimale | Validée conceptuellement | Mono-app web, framework à choisir au premier cycle code |
| Data scope | Validé conceptuellement | Persistance locale, données fictives |
| Données réelles interdites | Validé | Garde-fou bloquant |
| Backend / API / CRM exclus | Validé | Hors INC-01 |
| Checklist de démarrage | Produite | Statut prêt sous conditions |

---

## 5. Points encore ouverts

Les points suivants restent ouverts, mais ne bloquent pas un premier commit applicatif **très limité** :

| Point | Décision |
|-------|----------|
| Framework concret | À choisir dans le premier cycle applicatif |
| Mécanisme exact de persistance locale | À choisir dans le premier cycle applicatif |
| Stratégie minimale de tests automatisés | À préciser dans le premier cycle applicatif |
| Structure exacte du repo applicatif | À définir dans le premier commit |
| Reset démo | À prévoir dans le premier socle |
| Responsable de validation nommé | À confirmer |

---

## 6. Contenu autorisé du premier commit applicatif

Le premier commit applicatif est autorisé uniquement pour créer un **socle minimal**, sans implémenter tout le flux INC-01.

**Contenu autorisé :**

- initialisation du projet applicatif ;
- choix du framework / starter minimal ;
- structure de dossiers ;
- point d'entrée applicatif ;
- séparation logique initiale :
  - UI ;
  - orchestration métier ;
  - data locale ;
  - seed fictif ;
- README de démarrage ;
- configuration minimale de qualité si nécessaire ;
- premiers tests de smoke si le starter le permet.

Le premier commit ne doit pas viser à livrer le flux complet STAT-06.

---

## 7. Contenu explicitement interdit au premier commit

Le premier commit applicatif ne doit pas contenir :

- connexion CRM ;
- API externe ;
- backend serveur ;
- base serveur ;
- SQL / DDL / migration ;
- données réelles ;
- authentification avancée ;
- dashboard ;
- multi-utilisateur ;
- périmètre STAT-05 / STAT-07 / STAT-08 ;
- logique métier complète non testée ;
- surarchitecture ;
- dépendances lourdes non justifiées ;
- sprint Jira ou tickets.

---

## 8. Décision d'autorisation

**Décision proposée :**

- [x] Autorisation conditionnelle du premier commit applicatif INC-01
- [ ] Report du premier commit applicatif
- [ ] Autorisation complète de réalisation INC-01

### Décision

Le premier commit applicatif INC-01 est **autorisé conditionnellement**.

Cette autorisation couvre uniquement la création d'un **socle applicatif minimal** compatible avec les décisions du cycle :

- mono-app web ;
- séparation logique ;
- données fictives ;
- persistance locale ;
- pas de backend / API / CRM / base serveur.

Elle n'autorise pas encore l'implémentation complète du flux SAV jusqu'à STAT-06.

### Conditions associées

Le premier cycle applicatif devra :

1. choisir explicitement le framework ou starter minimal ;
2. choisir explicitement le mécanisme de persistance locale ;
3. créer uniquement le socle technique minimal ;
4. maintenir le seed fictif ;
5. exclure toute donnée réelle ;
6. documenter les choix réalisés ;
7. s'arrêter avant élargissement fonctionnel.

---

## 9. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-app-foundation`

**Objectif :**

- créer le premier socle applicatif ;
- choisir le framework / starter minimal ;
- poser la structure logique ;
- préparer la couche data locale ;
- ajouter le seed fictif initial si nécessaire ;
- documenter les choix ;
- ne pas implémenter le flux complet INC-01.

---

## 10. Statut final du cycle

**Cycle clôturé avec autorisation conditionnelle du premier commit applicatif INC-01.**

Aucun code n'a été produit dans ce cycle documentaire.
