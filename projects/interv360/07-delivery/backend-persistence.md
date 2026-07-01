# Interv360 — Backend Persistence

**Projet** : Interv360  
**Cycle** : Backend Persistence  
**Mode** : SFIA Fast Delivery contrôlé  
**Statut** : Implémentation persistance SQLite  
**Branche** : `delivery/interv360-backend-persistence`  
**Base** : `main` @ `c2328d4`

Référence décision : [`interv360-backend-persistence-decision.md`](../09-architecture/interv360-backend-persistence-decision.md)

---

## 1. Objectif

Ce cycle implémente la première brique produit de persistance backend Interv360.

La décision d'architecture a retenu SQLite comme stratégie de persistance backend.

L'objectif est de remplacer le store mémoire démonstrateur par une persistance durable, sans modifier le contrat API et sans ouvrir de nouveau périmètre produit.

---

## 2. Point de départ

Le backend actuel dispose de :

- Node.js / TypeScript ;
- Express ;
- API REST `/api/v1` ;
- store mémoire ;
- seed fictif ;
- workflow nominal ;
- tests backend ;
- frontend compatible API opt-in.

Limite actuelle :

> l'état backend disparaît après redémarrage.

---

## 3. Décisions techniques du cycle

| Sujet | Décision |
|-------|----------|
| Librairie SQLite | `better-sqlite3` |
| ORM | Aucun ORM lourd |
| Migrations | Schéma SQL minimal appliqué au démarrage |
| Emplacement fichier DB | `projects/interv360/backend/data/interv360.sqlite` (ou `SQLITE_PATH`) |
| Initialisation base absente | Création automatique + seed initial si vide |
| Reset démo | Suppression des tables puis réinsertion du seed |
| Tests | Base `:memory:` ou fichier temporaire isolé |
| API frontend | Conservée |

---

## 4. Périmètre autorisé

Le cycle peut modifier :

- backend package ;
- backend store / repository ;
- backend initialisation ;
- backend tests ;
- backend README ;
- document de livraison.

Le cycle peut introduire :

- dépendance SQLite simple ;
- schéma SQLite minimal ;
- repository SQLite ;
- tests de persistance ;
- base temporaire en tests ;
- reset recréant l'état seed.

---

## 5. Hors périmètre

Le cycle ne doit pas introduire :

- modification frontend large ;
- changement contrat API ;
- PostgreSQL ;
- ORM lourd ;
- Prisma / TypeORM / Drizzle / Knex ;
- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- multi-tenant ;
- production ;
- déploiement ;
- nouveau workflow ;
- STAT-05 / STAT-07 / STAT-08 ;
- refonte frontend ;
- polish démo ;
- publication Notion ;
- modification Controlled Delivery ;
- modification `sfia-notion-sync`.

---

## 6. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| SQLite introduit côté backend | OK |
| Demandes persistées | OK |
| Détails persistés | OK |
| Événements persistés | OK |
| API `/api/v1` conservée | OK |
| Seed fictif conservé | OK |
| Reset démo conservé | OK |
| Tests backend adaptés | OK |
| Frontend inchangé ou justification mineure | OK — frontend inchangé |
| Pas d'auth / CRM / données réelles | OK |

---

## 7. Changements réalisés

| Fichier | Changement |
|---------|------------|
| `backend/package.json` | Dépendance `better-sqlite3` + `@types/better-sqlite3` |
| `backend/.gitignore` | Exclusion `data/`, `*.sqlite`, `*.db` |
| `backend/src/persistence/sqliteSchema.ts` | Schéma tables `requests`, `request_details`, `workflow_events`, `store_meta` |
| `backend/src/persistence/sqliteDatabase.ts` | Connexion SQLite, init, `SQLITE_PATH` |
| `backend/src/persistence/sqliteSeed.ts` | Seed initial, reset, compteur événements |
| `backend/src/store/demoStore.ts` | Store refactoré sur SQLite (API publique inchangée) |
| `backend/test/api.test.ts` | Isolation `:memory:` + assertion reset par ID |
| `backend/test/persistence.test.ts` | Tests persistance après réouverture + reset |
| `backend/README.md` | Section SQLite locale |

Frontend : **non modifié**.

---

## 8. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 20 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| API tests | OK |
| Persistance après redémarrage | OK — tests `persistence.test.ts` + validation manuelle curl |
| Reset démo | OK |
| Données fictives uniquement | OK |

---

## 9. Limites assumées

- SQLite local uniquement ;
- pas de production ;
- pas d'authentification ;
- pas de CRM ;
- pas de données réelles ;
- pas de multi-utilisateur ;
- pas de migration PostgreSQL dans ce cycle ;
- schéma appliqué au démarrage (pas de migrations versionnées) ;
- fichier SQLite ignoré par Git.

---

## 10. Prochaine étape recommandée

`delivery/interv360-backend-persistence-pr-preparation`

---

## 11. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 20 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| SQLite introduit côté backend | OK |
| API `/api/v1` conservée | OK |
| Demandes persistées | OK |
| Détails persistés | OK |
| Événements persistés | OK |
| Reset démo conservé | OK |
| Persistance après redémarrage | OK |
| Frontend modifié | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |

## 12. Décision

Le cycle introduit la première brique de persistance backend produit.

SQLite remplace le store strictement mémoire tout en conservant l'API existante, les données fictives, le reset de démonstration et les garde-fous produit.

## 13. Prochaine étape recommandée

**Cycle recommandé :** `delivery/interv360-backend-persistence-pr-preparation`

Objectif :

- préparer la PR ;
- vérifier que l'implémentation reste limitée à la persistance backend ;
- ne pas ouvrir auth, CRM, PostgreSQL ou refonte frontend.

---

## 14. Préparation PR intégrée

### Titre proposé

`Add Interv360 backend SQLite persistence`

### Description proposée

```markdown
## Summary
This PR adds the first product-oriented backend persistence brick for Interv360.
It replaces the in-memory backend store with SQLite persistence using `better-sqlite3`.
The implementation persists:
- requests;
- request details;
- workflow events.
It preserves:
- the existing `/api/v1` API;
- fictitious seed data;
- demo reset;
- backend tests;
- frontend behavior.
## Validation
- Backend build: OK
- Backend tests: 20 passed
- Frontend build: OK
- Frontend tests: 81 passed
- Persistence after backend restart: OK
- Demo reset: OK
- Frontend unchanged
## Guardrails
No frontend change, API contract change, PostgreSQL, heavy ORM, authentication, users, roles, CRM integration, real data, multi-tenant support, production deployment, new workflow, STAT-05/07/08, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
SQLite is introduced only as the first backend persistence brick.
```

### Vérifications pré-PR

| Contrôle | Résultat |
|----------|----------|
| Diff limité backend + document | OK |
| Frontend modifié | Non |
| API `/api/v1` conservée | OK |
| Dépendance `better-sqlite3` uniquement | OK |
| Base SQLite locale non suivie | OK |
| Persistance après redémarrage | OK — tests + curl documentés |
| Reset démo | OK |

### Note validation manuelle

- persistance après redémarrage : validée via `persistence.test.ts` et curl ;
- serveur de test manuel interrompu après validation curl ;
- tests automatisés couvrent la persistance.

## 15. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-backend-persistence?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-backend-persistence` |
| Merge automatique | Non |

---

## 16. Statut merge

| Élément | Valeur |
|---------|--------|
| PR | [#51](https://github.com/mcleland147/sfia-workspace/pull/51) |
| Source | `delivery/interv360-backend-persistence` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `8dc9d9a` |
| Main synchronisée | OK |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 20 tests |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 81 tests |
| SQLite introduit côté backend | OK |
| Dépendance utilisée | `better-sqlite3` |
| API `/api/v1` conservée | OK |
| Demandes persistées | OK |
| Détails persistés | OK |
| Événements persistés | OK |
| Reset démo conservé | OK |
| Persistance après redémarrage | OK |
| Frontend modifié | Non |
| PostgreSQL introduit | Non |
| ORM lourd introduit | Non |
| Authentification introduite | Non |
| Utilisateurs / rôles introduits | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| Nouveaux statuts introduits | Non |
| Production / déploiement introduit | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le cycle **Backend Persistence** est mergé dans `main`.

La branche principale contient désormais la première vraie brique produit backend :

> persistance SQLite des demandes, détails et événements de workflow.

Le backend ne repose plus uniquement sur un store mémoire démonstrateur.

L'API `/api/v1`, le seed fictif et le reset de démonstration sont conservés.

Le frontend n'a pas été modifié.

Aucun PostgreSQL, ORM lourd, CRM, authentification, donnée réelle, nouveau workflow ou statut supplémentaire n'a été introduit.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Delivery contrôlé.

### Prochaine étape recommandée

Ne pas ouvrir directement auth, CRM ou industrialisation complète.

**Cycle recommandé :** `delivery/interv360-api-demo-hardening`

Objectif possible :

- rendre le mode API local plus fluide ;
- sécuriser CORS / ports ;
- améliorer la configuration backend/frontend API ;
- capitaliser la persistance SQLite dans le run API.

**Alternative produit :** `architecture/interv360-auth-and-user-framing`

Uniquement si la décision est de commencer à cadrer utilisateurs, authentification et rôles.

**Alternative technique :** `architecture/interv360-product-roadmap-after-persistence`

Si une priorisation globale post-persistance est souhaitée avant le prochain développement.
