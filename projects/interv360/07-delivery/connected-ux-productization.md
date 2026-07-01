# Interv360 — Connected UX Productization

**Projet** : Interv360  
**Cycle** : Connected UX Productization  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-02 réalisé  
**Branche** : `delivery/interv360-connected-ux-productization`

---

## 1. Objectif

Ce batch rend le frontend Interv360 plus exploitable avec le backend API productisé.

Le socle backend est désormais stabilisé :

- SQLite persistant ;
- API locale stabilisée ;
- modèle RequestDetail productisé ;
- erreurs API clarifiées ;
- reset API conservé.

L’objectif est de valoriser ce socle côté interface, sans ouvrir auth, users, rôles, CRM, workflow étendu ou refonte frontend.

---

## 2. Décision produit intégrée

Aucune décision roadmap dédiée n’est nécessaire avant ce batch.

Décision :

> prioriser une UX connectée API ciblée, maintenant que le backend produit est assez solide.

Raison :

- le backend expose des champs métier plus riches ;
- les erreurs API sont clarifiées ;
- le mode API local est stable ;
- le levier produit immédiat est de rendre ces informations visibles et compréhensibles côté frontend.

---

## 3. Périmètre du batch

Le batch peut inclure :

- affichage des champs productisés ;
- meilleure visibilité du mode API ;
- meilleure lisibilité des erreurs API ;
- documentation frontend/backend légère ;
- tests frontend de non-régression.

Le batch ne doit pas inclure :

- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- nouveaux statuts ;
- STAT-05 / STAT-07 / STAT-08 ;
- refonte frontend ;
- React Router ;
- nouvelle navigation lourde ;
- PostgreSQL ;
- ORM lourd ;
- production / déploiement.

---

## 4. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-PROD-01 | Borner les améliorations UX connectée | Réalisé |
| INC-PROD-02 | Afficher les champs métier productisés | Réalisé |
| INC-PROD-03 | Améliorer l’affichage des erreurs API | À confirmer |
| INC-PROD-04 | Mettre à jour documentation / runbook | À faire |
| INC-PROD-05 | Préparer PR du batch | À venir |

---

## 5. INC-PROD-01 — Décision UX connectée ciblée

### Améliorations candidates

| Sujet | Valeur produit | Risque | Décision |
|------|----------------|--------|----------|
| Afficher `requestedDate` | Temporaliser la demande | Faible | **Retenu** |
| Afficher `equipmentLabel` | Rendre l’objet d’intervention visible | Faible | **Retenu** |
| Afficher `businessImpact` | Mieux expliquer priorité / criticité | Faible | **Retenu** |
| Clarifier `siteLabel` | Donner le contexte site | Faible | **Retenu** — déjà affiché, conserver comme contexte visible |
| Clarifier erreurs API | Rendre les erreurs compréhensibles | Moyen | **Retenu** — amélioration légère uniquement |
| Ajouter écran auth | Hors scope | Fort | **Exclu** |
| Ajouter rôles | Hors scope | Fort | **Exclu** |
| Ajouter workflow étendu | Hors scope | Fort | **Exclu** |
| Refonte UX globale | Hors scope | Fort | **Exclu** |
| Nouvelle navigation lourde | Hors scope | Moyen | **Exclu** |

### Décision retenue

**Retenir :**

- afficher `requestedDate` dans le détail ;
- afficher `equipmentLabel` dans le détail ;
- afficher `businessImpact` dans le détail ;
- conserver `siteLabel` comme contexte visible de la demande ;
- améliorer l’affichage des erreurs API uniquement si cela reste limité au message utilisateur existant (`loadError`, `lastActionMessage`).

**Différer / exclure :**

- auth ;
- users ;
- rôles ;
- workflow étendu ;
- refonte frontend ;
- React Router ;
- nouvelle navigation ;
- nouvelle dépendance UI ;
- données réelles ;
- CRM.

### Justification

- les champs `requestedDate`, `equipmentLabel` et `businessImpact` sont déjà exposés par l’API `/api/v1` dans le payload `detail` ;
- le frontend doit rendre visible la valeur métier du backend productisé ;
- l’objectif est une UX connectée produit, pas un polish démo ;
- la navigation actuelle (écrans démo + fiche demande) reste suffisante ;
- `siteLabel` est déjà affiché dans `RequestDetail` — aucune refonte nécessaire, seulement conservation explicite ;
- `businessImpact` doit rester distinct du libellé court `impact` déjà affiché (`impactLabel`).

### Point d’attention pour INC-PROD-02

Le mapping frontend actuel (`apiRequestsRepository.ts`, type `DemoRequest`) ne propage pas encore `requestedDate`, `equipmentLabel` ni `businessImpact` depuis l’API. L’affichage nécessitera une extension ciblée du modèle frontend et du mapping API, sans modifier le backend.

---

## 6. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Améliorations UX ciblées décidées | OK |
| Champs productisés visibles | OK |
| Mode local par défaut conservé | OK |
| Mode API opt-in conservé | OK |
| API `/api/v1` conservée | OK |
| Erreurs API mieux affichées si retenu | non retenu (INC-PROD-03 à confirmer) |
| Tests frontend adaptés | OK |
| Backend non modifié ou justification mineure | OK |
| Pas d’auth / users / rôles | OK |
| Pas de CRM / données réelles | OK |
| Pas de nouveaux statuts | OK |

---

## 7. Décisions techniques

| Sujet | Décision |
|------|----------|
| Champs affichés | `requestedDate`, `equipmentLabel`, `businessImpact`, `siteLabel` |
| Libellés UI | `Date de demande`, `Équipement / objet`, `Impact métier` |
| Erreurs API | À confirmer après observation du rendu |
| Navigation | Conservée |
| React Router | Non |
| Nouvelle dépendance | Non |
| Backend | Non modifié |
| API contract | Conservé |
| Mode local | Conservé |
| Mode API | Conservé |

---

## 8. Changements réalisés

**INC-PROD-01** — cadrage UX connectée :

- décision des champs productisés à rendre visibles ;
- exclusion de la refonte frontend ;
- exclusion d’auth/users/rôles ;
- conservation de la navigation existante ;
- conservation du mode local et du mode API opt-in.

**INC-PROD-02** — affichage des champs productisés :

- extension ciblée du modèle frontend ;
- mapping API de `requestedDate`, `equipmentLabel`, `businessImpact` ;
- alignement du mode local avec des valeurs fictives ;
- affichage des champs dans la fiche détail ;
- conservation de `siteLabel` comme contexte site ;
- conservation de `impactLabel` comme impact court distinct de `businessImpact` ;
- tests frontend adaptés ;
- aucun backend modifié.

---

## 9. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 32 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Validation navigateur local | non exécutée |
| Validation navigateur API | non exécutée |
| Reset API | non exécutée |

---

## 10. Limites assumées

Limites attendues :

- pas d’authentification ;
- pas d’utilisateurs ;
- pas de rôles ;
- pas de CRM ;
- pas de données réelles ;
- pas de workflow étendu ;
- pas de nouveaux statuts ;
- pas de refonte frontend ;
- pas de production.

---

## 11. Prochaine étape recommandée

**INC-PROD-03** : confirmer si une amélioration légère des erreurs API est nécessaire, ou passer à la documentation / PR.
