# Interv360 — Backend Persistence Decision

**Projet** : Interv360
**Cycle** : Backend Persistence Decision
**Mode** : SFIA Fast Delivery architecture
**Statut** : Décision persistance backend
**Branche** : `architecture/interv360-backend-persistence-decision`
**Base** : `main` @ `f8dd576`

Documents de référence : [`2026-07-01-interv360-product-industrialization-framing.md`](./2026-07-01-interv360-product-industrialization-framing.md), [`backend-minimal-prototype.md`](../04-delivery/backend-minimal-prototype.md), [`interv360-backend-target-framing.md`](./interv360-backend-target-framing.md), [`interv360-backend-data-model-decision.md`](./interv360-backend-data-model-decision.md), [`interv360-backend-technical-2026-07-06-stack-decision.md`](./interv360-backend-technical-2026-07-06-stack-decision.md), [`interv360-backend-api-contract-framing.md`](./interv360-backend-api-contract-framing.md)

Backend actuel : `demoStore.ts` (mémoire), `demoSeed.ts`, `routes.ts`, `domain/types.ts`, `domain/transitions.ts`.

---

## 1. Objectif

Ce document décide la stratégie de persistance backend pour Interv360.

La phase **Demo MVP** est clôturée et la trajectoire produit est actée (PR #49, [`2026-07-01-interv360-product-industrialization-framing.md`](./2026-07-01-interv360-product-industrialization-framing.md) §16).

L'objectif est de remplacer progressivement le backend démonstrateur en mémoire par une première brique de persistance durable, sans basculer trop vite dans une industrialisation complète.

Ce cycle ne modifie pas le code.

---

## 2. Point de départ

Le backend actuel dispose de :

- Node.js / TypeScript ;
- Express ;
- API REST `/api/v1` ;
- store en mémoire (`demoStore.ts` : `requests`, `details`, `events`) ;
- seed de démonstration (`demoSeed.ts`) ;
- workflow nominal ;
- tests backend (18 tests) ;
- frontend capable d'utiliser l'API en mode opt-in.

Limite principale :

> l'état backend n'est pas durable après redémarrage.

---

## 3. Besoin produit

La première marche produit attendue est de rendre le backend capable de conserver l'état.

Cela doit permettre :

- conserver les demandes après redémarrage ;
- conserver le journal ;
- séparer progressivement seed de démonstration et état produit ;
- préparer une API plus crédible ;
- préparer les futurs sujets d'authentification, droits, CRM et industrialisation.

---

## 4. Options comparées

### Option A — JSON file

Principe :

- stocker l'état dans un fichier JSON local ;
- conserver une logique très proche du store actuel ;
- persister demandes et événements dans un fichier.

Avantages :

- très simple ;
- rapide à implémenter ;
- peu de dépendances ;
- bonne transition depuis le store mémoire ;
- facile à comprendre et tester.

Inconvénients :

- faible robustesse ;
- pas de requêtage ;
- concurrence limitée ;
- pas représentatif d'un vrai produit ;
- risque de rester trop proche de la démo.

### Option B — SQLite

Principe :

- introduire une base locale SQLite ;
- stocker demandes, détails et événements dans des tables ;
- conserver une architecture backend simple.

Avantages :

- vraie persistance durable ;
- première base produit crédible ;
- locale, légère, facile à lancer ;
- meilleure structuration des données ;
- prépare les futures migrations vers PostgreSQL ;
- cohérente avec un premier incrément produit.

Inconvénients :

- nécessite choix librairie / migrations ;
- plus structurant que JSON file ;
- demande un peu plus de tests ;
- nécessite prudence pour ne pas lancer une industrialisation trop large.

### Option C — PostgreSQL

Principe :

- introduire directement une base PostgreSQL ;
- viser une trajectoire plus proche production.

Avantages :

- cible plus industrialisable ;
- robuste ;
- compatible vraie exploitation plus tard ;
- bon support multi-utilisateur futur.

Inconvénients :

- trop tôt pour le niveau actuel ;
- nécessite environnement DB ;
- alourdit les tests ;
- ouvre trop vite les sujets exploitation / configuration / migration ;
- risque de ralentir le passage produit initial.

---

## 5. Critères de décision

| Critère | JSON file | SQLite | PostgreSQL |
|---------|-----------|--------|------------|
| Simplicité | Forte | Moyenne | Faible |
| Vraie persistance produit | Faible | Forte | Forte |
| Coût d'implémentation | Faible | Moyen | Fort |
| Pertinence post-démo | Moyenne | Forte | Moyenne à terme |
| Préparation industrialisation | Faible | Moyenne | Forte |
| Risque de surdimensionnement | Faible | Modéré | Fort |
| Testabilité locale | Forte | Forte | Moyenne |
| Cohérence premier incrément produit | Moyenne | Forte | Faible à ce stade |

---

## 6. Décision recommandée

Décision recommandée :

> **SQLite pour le premier incrément produit de persistance backend.**

Raison :

SQLite représente le meilleur compromis entre :

- sortie réelle du mode démo ;
- persistance durable ;
- simplicité locale ;
- testabilité ;
- structuration produit ;
- trajectoire future vers PostgreSQL.

JSON file serait trop proche du démonstrateur.

PostgreSQL est pertinent plus tard, mais trop lourd pour la première brique produit.

---

## 7. Architecture cible du premier incrément

Le premier incrément `delivery/interv360-backend-persistence` devra introduire :

- un stockage SQLite local ;
- une séparation claire entre :
  - seed de démonstration ;
  - état persisté ;
  - accès repository ;
- des tests backend ;
- une initialisation contrôlée de la base ;
- une conservation de l'API existante ;
- une conservation des données fictives.

---

## 8. Périmètre d'implémentation recommandé

Cycle suivant recommandé :

`delivery/interv360-backend-persistence`

Objectif :

- introduire SQLite côté backend ;
- persister :
  - demandes ;
  - détails ;
  - événements de workflow ;
- conserver les endpoints existants ;
- conserver le reset de démonstration ;
- conserver les tests de transitions ;
- adapter les tests API ;
- ne pas modifier le frontend sauf nécessité mineure.

---

## 9. Hors scope immédiat

Ne pas introduire dans le premier incrément :

- PostgreSQL ;
- ORM lourd ;
- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- multi-tenant ;
- production ;
- déploiement ;
- refonte API ;
- nouveau workflow ;
- STAT-05 / STAT-07 / STAT-08 ;
- modification frontend large.

---

## 10. Points ouverts pour l'implémentation

À trancher dans le cycle `delivery/interv360-backend-persistence` :

- librairie SQLite exacte ;
- stratégie de migrations ;
- emplacement du fichier SQLite ;
- reset démo : recréation complète ou remise à l'état seed ;
- initialisation automatique si base absente ;
- structure de repository ;
- tests avec base temporaire.

Recommandation initiale :

- privilégier une librairie SQLite simple ;
- éviter un ORM lourd ;
- utiliser une base temporaire pour les tests ;
- conserver une API identique côté frontend.

---

## 11. Décision SFIA

Cette décision permet de passer réellement du démonstrateur au produit sans ouvrir trop large.

Décision :

> choisir SQLite comme première brique de persistance backend produit, avec implémentation dans un cycle dédié.

---

## 12. Validation du cycle

| Contrôle | Résultat |
|----------|----------|
| Décision persistance créée | OK |
| Options JSON / SQLite / PostgreSQL comparées | OK |
| Solution recommandée | OK — SQLite |
| Prochain cycle recommandé | OK — `delivery/interv360-backend-persistence` |
| Code frontend modifié | Non |
| Backend modifié | Non |
| Implémentation persistance réalisée | Non |
| DB SQL introduite dans le code | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 13. Prochaine étape recommandée

Cycle recommandé :

`delivery/interv360-backend-persistence`

Objectif :

- implémenter SQLite côté backend ;
- conserver l'API `/api/v1` et les données fictives de seed ;
- trancher les points ouverts (§10) dans le cadre de l'implémentation ;
- ne pas ouvrir auth, CRM, PostgreSQL ou refonte frontend.

---

## 14. Préparation PR intégrée

### Titre proposé

`Decide Interv360 backend persistence`

### Description proposée

```markdown
## Summary
This PR documents the backend persistence decision for Interv360.
It compares:
- JSON file
- SQLite
- PostgreSQL
## Key decision
SQLite is selected as the first backend persistence brick for the product trajectory.
Rationale:
- JSON file remains too close to the demo;
- PostgreSQL is too heavy for the first product increment;
- SQLite provides durable persistence, local testability, structured data, and a future path toward PostgreSQL.
## Next cycle
Recommended next cycle:
`delivery/interv360-backend-persistence`
Expected implementation scope:
- introduce SQLite in the backend;
- persist requests, details, and workflow events;
- keep the existing `/api/v1` API;
- keep fictitious seed data;
- keep demo reset;
- adapt backend tests;
- avoid frontend changes except minor necessity.
## Guardrails
No frontend change, backend change, persistence implementation, dependency, ORM, migration, SQL database in code, CRM integration, authentication, real data, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced in this decision cycle.
```

### Vérifications pré-PR

| Contrôle | Résultat |
|----------|----------|
| Diff limité au document de décision | OK |
| Frontend modifié | Non |
| Backend modifié | Non |
| SQLite implémenté | Non |
| Dépendance ajoutée | Non |
| Décision SQLite documentée | OK |
| Prochain cycle recommandé | OK — `delivery/interv360-backend-persistence` |

## 15. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...architecture/interv360-backend-persistence-decision?expand=1 |
| Cible | `main` |
| Source | `architecture/interv360-backend-persistence-decision` |
| Merge automatique | Non |

---

## 16. Statut merge

| Élément | Valeur |
|---------|--------|
| PR | [#50](https://github.com/mcleland147/sfia-workspace/pull/50) |
| Source | `architecture/interv360-backend-persistence-decision` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `8bb1609` |
| Main synchronisée | OK |
| Décision persistance actée | OK |
| Option retenue | SQLite |
| Prochain cycle recommandé | OK — `delivery/interv360-backend-persistence` |
| Code frontend modifié | Non |
| Backend modifié | Non |
| Implémentation SQLite introduite | Non |
| Dépendance ajoutée | Non |
| ORM introduit | Non |
| Migration introduite | Non |
| DB SQL introduite dans le code | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le cycle **Backend Persistence Decision** est mergé dans `main`.

La branche principale acte désormais officiellement :

- le choix de **SQLite** comme première brique de persistance backend ;
- le rejet de JSON file comme solution trop proche du démonstrateur ;
- le report de PostgreSQL à une phase d'industrialisation plus avancée ;
- le prochain cycle produit recommandé : `delivery/interv360-backend-persistence`.

Aucune implémentation de persistance n'a été introduite dans ce cycle.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Delivery architecture.

### Prochaine étape recommandée

Cycle recommandé :

`delivery/interv360-backend-persistence`

Objectif :

- introduire SQLite côté backend ;
- persister les demandes, détails et événements de workflow ;
- conserver l'API `/api/v1` ;
- conserver le seed fictif ;
- conserver le reset de démonstration ;
- adapter les tests backend ;
- éviter toute modification frontend sauf nécessité mineure.

Points à trancher au début du cycle delivery :

- librairie SQLite exacte ;
- stratégie de migrations ;
- emplacement du fichier SQLite ;
- reset démo ;
- initialisation automatique si base absente ;
- repository backend ;
- tests avec base temporaire.
