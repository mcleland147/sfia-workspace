# Interv360 — Backend Minimal Prototype

**Projet** : Interv360  
**Cycle** : Backend Minimal Prototype  
**Mode** : SFIA Fast Delivery contrôlé  
**Statut** : Implémentation backend locale  
**Branche** : `delivery/interv360-backend-minimal-prototype`

---

## 1. Objectif

Ce cycle implémente un backend minimal local pour Interv360.

L'objectif est de valider techniquement le passage :

```text
Frontend React / TypeScript
        ↓ REST
Backend Node.js / TypeScript / Express
        ↓
JSON store fictif (seed TS, store mémoire)
```

Le frontend n'est pas connecté au backend dans ce cycle.

---

## 2. Point de départ

Les décisions documentaires précédentes ont cadré :

- la trajectoire backend cible (`09-architecture/interv360-backend-target-framing.md`) ;
- le modèle de données minimal (`09-architecture/interv360-backend-data-model-decision.md`) ;
- la stack technique (`09-architecture/interv360-backend-technical-stack-decision.md`) ;
- le contrat API (`09-architecture/interv360-backend-api-contract-framing.md`).

Le contrat API retenu couvre :

```text
GET  /health
GET  /api/v1/requests
GET  /api/v1/requests/:id
GET  /api/v1/requests/:id/events
POST /api/v1/requests/:id/transitions
POST /api/v1/demo/reset
```

---

## 3. Réflexion d'optimisation SFIA

Le cadrage documentaire était suffisant pour passer à une implémentation limitée.

Le sujet reste plus risqué qu'un batch de présentation, car il introduit un nouveau composant backend.

Décision de méthode :

- utiliser **Fast Delivery contrôlé** ;
- créer un backend minimal isolé ;
- ne pas connecter le frontend ;
- imposer tests unitaires et API ;
- conserver un document unique de livraison.

---

## 4. Périmètre autorisé

Le cycle peut introduire :

- dossier `projects/interv360/backend/` ;
- backend Node.js / TypeScript / Express ;
- endpoints REST cadrés ;
- store fictif en mémoire initialisé depuis seed TS ;
- seed fictif (3 demandes) ;
- règles de transitions nominales ;
- tests unitaires ;
- tests API ;
- README backend ;
- scripts npm backend.

---

## 5. Hors périmètre

Le cycle ne doit pas introduire :

- modification frontend ;
- connexion frontend → backend ;
- DB SQL ;
- SQLite ;
- PostgreSQL ;
- CRM ;
- authentification ;
- multi-utilisateur ;
- données réelles ;
- STAT-05 / STAT-07 / STAT-08 ;
- déploiement production ;
- Swagger / OpenAPI ;
- publication Notion ;
- modification Controlled Delivery ;
- modification sfia-notion-sync.

---

## 6. Résultat attendu

Le backend doit permettre :

- `GET /health` ;
- `GET /api/v1/requests` ;
- `GET /api/v1/requests/:id` ;
- `GET /api/v1/requests/:id/events` ;
- `POST /api/v1/requests/:id/transitions` ;
- `POST /api/v1/demo/reset`.

Le backend doit :

- exposer uniquement des données fictives ;
- porter la validation des transitions ;
- refuser les transitions invalides ;
- refuser toute transition depuis STAT-06 ;
- écrire un événement journal après transition réussie ;
- vider le journal au reset ;
- restaurer le seed fictif.

---

## 7. Validation attendue

| Contrôle | Résultat |
|----------|----------|
| Backend créé | OK |
| Build backend | OK |
| Tests backend | OK — 18 tests |
| Tests API | OK |
| Données fictives uniquement | OK |
| Frontend non modifié | OK |
| API conforme contrat | OK |
| SQL absent | OK |
| CRM absent | OK |
| Authentification absente | OK |
| Garde-fous | OK |

---

## 8. Changements réalisés

### Backend (`projects/interv360/backend/`)

| Fichier | Rôle |
|---------|------|
| `package.json` | Dépendances Express, Vitest, Supertest |
| `tsconfig.json` | Configuration TypeScript strict |
| `vitest.config.ts` | Configuration tests |
| `src/domain/types.ts` | Types domaine et erreurs store |
| `src/domain/transitions.ts` | Table de transitions pure |
| `src/seed/demoSeed.ts` | 3 demandes fictives + détails |
| `src/store/demoStore.ts` | Store mémoire (liste, détail, journal, transitions, reset) |
| `src/api/routes.ts` | Routes `/api/v1/*` |
| `src/app.ts` | Factory Express + CORS + `/health` |
| `src/index.ts` | Démarrage serveur port 3001 |
| `test/transitions.test.ts` | 7 tests unitaires transitions |
| `test/api.test.ts` | 11 tests API Supertest |
| `README.md` | Documentation backend |

### Seed fictif

| ID | Statut | Client | Site |
|----|--------|--------|------|
| SAV-DEMO-001 | STAT-01 | Client Démo Industrie | Lyon Démo |
| SAV-DEMO-002 | STAT-02 | Client Démo Services | Paris Démo |
| SAV-DEMO-003 | STAT-06 | Client Démo Maintenance | Nantes Démo |

### Décisions mineures

- **Store mémoire** plutôt qu'écriture fichier JSON : premier palier simplifié ; le seed reste en TypeScript structuré comme représentant du JSON serveur.
- **`DEMO_MODE`** : activé par défaut si non défini ; `DEMO_MODE=false` bloque le reset.
- **Préfixe `/api/v1`** : conforme au contrat API.
- **CORS** : configuré vers `http://localhost:5173` sans connexion frontend effective.

### Limites

- Pas de persistance disque (redémarrage serveur = perte des transitions).
- Pas de partage de types avec le frontend.
- Pas de connexion frontend dans ce cycle.

---

## 9. Décision

Le cycle est clôturé : le backend minimal fonctionne localement, passe ses tests et reste isolé du frontend.

Aucun push, aucune PR et aucun merge ne sont effectués dans ce cycle.

---

## 10. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Backend créé | OK |
| Build backend | OK |
| Tests backend | OK — 18 tests |
| Tests API | OK |
| Données fictives uniquement | OK |
| Frontend non modifié | OK |
| API conforme contrat | OK |
| SQL absent | OK |
| CRM absent | OK |
| Authentification absente | OK |
| Garde-fous | OK |

---

## 11. Prochaine étape recommandée

Ne pas connecter immédiatement le frontend.

**Cycle recommandé suivant :** `delivery/interv360-frontend-api-connection-framing`

Objectif :

- décider comment le frontend basculera de `localStorage` vers l'API ;
- éviter de casser la démo locale ;
- garder un mode local/demo clair.

---

## 12. Préparation PR intégrée

### Titre proposé

`Add Interv360 backend minimal prototype`

### Description proposée

```markdown
## Summary
This PR adds the Interv360 backend minimal prototype.
It includes:
- backend target framing;
- backend data model decision;
- backend technical stack decision;
- backend API contract framing;
- a local Node.js / TypeScript / Express backend;
- REST endpoints under `/api/v1`;
- in-memory demo store initialized from fictitious seed data;
- transition validation on the backend side;
- workflow event creation after successful transitions;
- demo reset endpoint;
- backend unit and API tests.

## Validation
- Backend build: OK
- Backend tests: 18 passed
- API endpoints: OK
- Transition rules: OK
- Demo reset: OK
- Fictitious data only: OK
- Frontend not connected
- Frontend source not modified

## Guardrails
No frontend connection, SQL database, SQLite, PostgreSQL, CRM integration, authentication, multi-user logic, real data, production deployment, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
```

### Périmètre PR (vs `main`)

| Zone | Fichiers |
|------|----------|
| Architecture | `09-architecture/interv360-backend-*.md` (4 documents) |
| Livraison | `07-delivery/backend-minimal-prototype.md` |
| Backend | `projects/interv360/backend/` (14 fichiers) |

Hors périmètre confirmé : `app/src`, Controlled Delivery, sfia-notion-sync, exports Figma.

---

## 13. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-backend-minimal-prototype?expand=1 |
| Cible | main |
| Source | delivery/interv360-backend-minimal-prototype |
| Merge automatique | Non |

---

## 14. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | [#41](https://github.com/mcleland147/sfia-workspace/pull/41) — Add Interv360 backend minimal prototype |
| Source | `delivery/interv360-backend-minimal-prototype` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `6b664cd` |
| Main synchronisée | OK |
| Build backend post-merge | OK |
| Tests backend post-merge | OK — 18 tests |
| Frontend connecté au backend | Non |
| Frontend modifié | Non |
| DB SQL introduite | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le cycle **Backend Minimal Prototype** est mergé dans `main`.

La branche principale contient désormais :

- le cadrage cible backend ;
- la décision de modèle de données ;
- la décision de stack technique ;
- le cadrage du contrat API ;
- un backend minimal Node.js / TypeScript / Express ;
- les endpoints REST `/api/v1` cadrés ;
- un store démo en mémoire initialisé depuis des données fictives ;
- les règles de transition nominales côté backend ;
- les tests unitaires et API backend.

Le frontend reste volontairement non connecté au backend.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Delivery contrôlé.

### Prochaine étape recommandée

Ne pas connecter le frontend directement sans cadrage.

**Cycle recommandé :** `delivery/interv360-frontend-api-connection-framing`

Objectif :

- décider comment connecter progressivement le frontend au backend ;
- préserver la démo locale ;
- conserver un mode fallback local si nécessaire ;
- cadrer les impacts UX, reset, journal et tests.
