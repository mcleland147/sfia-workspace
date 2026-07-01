# Interv360 — Product Roadmap Next

**Projet** : Interv360  
**Cycle** : Product Roadmap Next  
**Mode** : Fast Delivery stratégique  
**Statut** : Décision produit  
**Branche** : `architecture/interv360-product-roadmap-next`

---

## 1. Objectif

Ce document décide le prochain axe produit Interv360 après consolidation du socle démontrable.

Interv360 dispose désormais :

- d’un backend SQLite persistant ;
- d’une API `/api/v1` stabilisée ;
- d’un modèle RequestDetail productisé ;
- d’erreurs API clarifiées ;
- d’un frontend connecté affichant les champs métier productisés ;
- d’un runbook produit bout-en-bout consolidé.

La question principale est donc :

> quel chantier structurant ouvrir ensuite ?

---

## 2. État produit actuel

| Axe | Statut |
|-----|--------|
| Démo MVP | Réalisée |
| Backend minimal | Réalisé |
| Persistance SQLite | Réalisée |
| Connexion frontend/API | Réalisée |
| Modèle RequestDetail productisé | Réalisé |
| Validation erreurs API | Réalisée |
| UX connectée produit | Réalisée |
| Runbook produit consolidé | Réalisé |
| Auth / users / rôles | Non ouvert |
| Workflow étendu | Non ouvert |
| CRM / données réelles | Non ouvert |
| Production / cloud | Non ouvert |

---

## 3. Options étudiées

### Option A — Auth / users / rôles

Objectif :

- cadrer les utilisateurs ;
- cadrer les rôles ;
- cadrer les responsabilités ;
- préparer un modèle produit multi-acteurs.

Valeur :

- forte ;
- structurante ;
- nécessaire pour sortir du mode démonstrateur mono-profil.

Risques :

- ouvre un chantier profond ;
- peut impacter modèle, API, UX, tests et données ;
- nécessite une décision métier claire.

Décision possible :

- ouvrir `architecture/interv360-auth-and-user-framing`.

---

### Option B — Workflow extension

Objectif :

- enrichir le cycle de vie métier ;
- ajouter éventuellement de nouveaux statuts ou transitions ;
- mieux représenter le cycle opérationnel réel.

Valeur :

- forte si le besoin métier porte sur le suivi opérationnel ;
- améliore la profondeur fonctionnelle.

Risques :

- peut complexifier le produit ;
- risque de réouvrir trop tôt le workflow ;
- nécessite de justifier chaque nouveau statut.

Décision possible :

- ouvrir `architecture/interv360-workflow-extension-framing`.

---

### Option C — Maintien en consolidation produit

Objectif :

- rester sur un produit démontrable ;
- éviter un chantier structurant immédiat ;
- préparer une présentation ou un retour externe avant de coder plus.

Valeur :

- faible à moyenne ;
- utile si une revue humaine est prévue.

Risques :

- ralentit la progression produit ;
- peut créer de la documentation sans nouvelle décision.

Décision possible :

- ne pas ouvrir de nouveau chantier technique tout de suite.

---

## 4. Comparaison synthétique

| Option | Valeur produit | Risque | Maturité pour démarrer | Recommandation |
|--------|----------------|--------|-------------------------|----------------|
| Auth / users / rôles | Forte | Fort | Bonne si cadrage dédié | Recommandé |
| Workflow extension | Forte | Moyen à fort | Moyenne | À cadrer après auth ou sur besoin explicite |
| Consolidation supplémentaire | Moyenne | Faible | Bonne | Non prioritaire |

---

## 5. Décision recommandée

Décision :

> ouvrir un cadrage dédié **Auth / users / rôles** avant toute implémentation.

Branche recommandée :

`architecture/interv360-auth-and-user-framing`

Justification :

- le socle produit est maintenant démontrable ;
- la prochaine étape logique est de sortir du mono-parcours démonstrateur ;
- utilisateurs, rôles et responsabilités structurent fortement la suite ;
- workflow extension doit idéalement être pensé après clarification des acteurs ;
- coder auth directement serait prématuré sans cadrage.

---

## 6. Périmètre du prochain cadrage recommandé

Le prochain cadrage devra décider :

- quels types d’utilisateurs existent ;
- quels rôles sont nécessaires ;
- quelles responsabilités chaque rôle porte ;
- quelles actions sont autorisées par rôle ;
- si l’auth est simulée, locale ou réelle dans un premier temps ;
- ce qui reste hors scope.

Il ne devra pas encore implémenter :

- authentification réelle ;
- OAuth / JWT ;
- annuaire ;
- base users complète ;
- CRM ;
- données réelles ;
- production.

---

## 7. Décision finale

| Élément | Décision |
|--------|----------|
| Prochain axe | Auth / users / rôles |
| Type de cycle | Cadrage architecture |
| Branche recommandée | `architecture/interv360-auth-and-user-framing` |
| Implémentation immédiate | Non |
| Workflow extension | Différé |
| CRM / données réelles | Différé |
| Production | Différé |

---

## 8. Prochaine étape

Créer la branche :

`architecture/interv360-auth-and-user-framing`

Objectif :

> cadrer l’identité produit, les utilisateurs, les rôles et les responsabilités avant toute implémentation.

---

## 9. Préparation PR

### Titre proposé

`Define Interv360 next product roadmap`

### Description proposée

```markdown
## Summary
This PR defines the next Interv360 product roadmap decision after the product demo consolidation cycle.
The current product baseline is now demonstrable end-to-end:
- persistent SQLite backend;
- stabilized `/api/v1`;
- productized `RequestDetail` model;
- clarified API validation errors;
- connected frontend displaying productized request fields;
- consolidated product demo runbook.
## Decision
The recommended next axis is:
> open a dedicated **Auth / users / roles framing** cycle before any implementation.
Recommended next branch:
`architecture/interv360-auth-and-user-framing`
## Rationale
- The product is now demonstrable enough to move beyond the mono-profile demo.
- Users, roles and responsibilities will strongly structure the next product increments.
- Workflow extension should be deferred until actors and responsibilities are clarified.
- Direct auth implementation would be premature without architecture framing.
## Guardrails
No code, frontend, backend, SQLite, API, workflow, authentication, users, roles, CRM integration, real data, PostgreSQL, heavy ORM, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
```

---

## 10. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | <OK / KO> |
| PR créée automatiquement | <Oui / Non> |
| URL PR ou comparaison | <url> |
| Cible | main |
| Source | architecture/interv360-product-roadmap-next |
| Merge automatique | Non |
