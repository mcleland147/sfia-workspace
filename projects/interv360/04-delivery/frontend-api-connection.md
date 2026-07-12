# Interv360 — Frontend API Connection

**Projet** : Interv360  
**Cycle** : Frontend API Connection  
**Mode** : SFIA Fast Delivery contrôlé  
**Statut** : Implémentation mode dual local/API  
**Branche** : `delivery/interv360-frontend-api-connection`

---

## 1. Objectif

Ce cycle implémente une connexion progressive entre le frontend Interv360 et le backend minimal.

L'objectif est d'introduire un mode dual :

```text
RequestsRepository
   ├── LocalRequestsRepository → localStorage
   └── ApiRequestsRepository   → REST /api/v1
```

Le **mode local** reste le mode par défaut.

Le **mode API** est activable explicitement par configuration.

---

## 2. Point de départ

Le cadrage précédent ([`2026-07-01-frontend-api-connection-framing.md`](./2026-07-01-frontend-api-connection-framing.md)) a retenu :

- mode dual local/API ;
- abstraction repository async ;
- mode local par défaut ;
- activation explicite via variables Vite ;
- conservation de `localStorage` ;
- pas de fallback automatique silencieux ;
- tests frontend supplémentaires ;
- maintien des tests backend.

---

## 3. Réflexion d'optimisation SFIA

Le cadrage documentaire était suffisant pour passer à l'implémentation.

Un cycle intermédiaire « repository abstraction only » aurait été plus prudent mais aurait rallongé le processus.

Décision :

- implémenter directement le mode dual ;
- limiter strictement le périmètre ;
- préserver le mode local par défaut ;
- ne pas connecter automatiquement au backend ;
- renforcer les tests.

---

## 4. Périmètre autorisé

Le cycle peut introduire :

- interface repository async ;
- repository local adapté ;
- repository API ;
- sélection du repository par configuration ;
- variables Vite ;
- gestion loading/error simple ;
- badge discret du mode de données ;
- tests frontend ;
- documentation README ;
- maintien tests backend.

---

## 5. Hors périmètre

Le cycle ne doit pas introduire :

- suppression `localStorage` ;
- backend obligatoire ;
- fallback automatique silencieux ;
- CRM ;
- authentification ;
- données réelles ;
- multi-utilisateur ;
- DB SQL ;
- nouveaux statuts ;
- STAT-05 / STAT-07 / STAT-08 ;
- refonte UX lourde ;
- publication Notion ;
- modification Controlled Delivery ;
- modification sfia-notion-sync.

---

## 6. Résultat attendu

À la fin du cycle :

- le mode local fonctionne comme avant par défaut ;
- le mode API est activable explicitement ;
- le frontend peut charger les demandes depuis l'API ;
- le frontend peut afficher le détail depuis l'API ;
- le frontend peut appliquer une transition via l'API ;
- le frontend peut lire le journal via l'API ;
- le frontend peut reset via l'API ;
- les erreurs backend sont affichées simplement ;
- les tests frontend et backend passent.

---

## 7. Validation attendue

| Contrôle | Résultat |
|----------|----------|
| Mode local par défaut | OK |
| Mode API activable | OK |
| Repository async | OK |
| Chargement demandes API | OK |
| Détail demande API | OK |
| Transition API | OK |
| Journal API | OK |
| Reset API | OK |
| Gestion erreur backend | OK |
| Tests frontend | OK — 77 tests |
| Tests backend | OK — 18 tests |
| Données réelles absentes | OK |
| Garde-fous | OK |

---

## 8. Changements réalisés

### Nouveaux fichiers (`app/src/data/`)

| Fichier | Rôle |
|---------|------|
| `requestsRepository.types.ts` | Interface async, erreurs, mapping statut → action |
| `localRequestsRepository.ts` | Encapsulation du repository `localStorage` existant |
| `apiRequestsRepository.ts` | Client `fetch` + mapping API → `DemoRequest` |
| `requestsRepositoryFactory.ts` | Sélection local/API via `VITE_INTERV360_DATA_SOURCE` |
| `apiRequestsRepository.test.ts` | 7 tests repository API (fetch mocké) |
| `requestsRepositoryFactory.test.ts` | 3 tests factory / mode par défaut |

### Fichiers modifiés

| Fichier | Changement |
|---------|------------|
| `app/App.tsx` | Chargement async, repository factory, badge mode, erreurs |
| `app/App.css` | Styles mode données, loading, erreur |
| `ui/requests/RequestsList.tsx` | Prop `requests` optionnelle (fallback local tests) |
| `ui/requests/RequestDetail.tsx` | Prop `request` optionnelle |
| `ui/workflow/WorkflowJournalReadonly.tsx` | Prop `events` optionnelle |
| Vues readonly (×4) | Prop `request` optionnelle |
| `tests/App.smoke.test.tsx` | `waitFor` async + test « Mode local » |
| `tests/App.apiMode.test.tsx` | 2 tests mode API + backend indisponible |
| `vite-env.d.ts` | Types variables Vite |
| `app/README.md` | Section mode local/API |
| `backend/README.md` | Mention connexion frontend optionnelle |

### Variables Vite

| Variable | Défaut | Effet |
|----------|--------|-------|
| `VITE_INTERV360_DATA_SOURCE` | `local` (implicite) | `api` active le repository API |
| `VITE_INTERV360_API_BASE_URL` | `http://localhost:3001/api/v1` | Base URL REST |

### Décisions mineures

- `requestsRepository.ts` **conservé** tel quel (tests existants + implémentation locale).
- Composants UI : props optionnelles avec fallback local pour préserver les tests unitaires isolés.
- Pas de fallback automatique local en erreur API — message explicite uniquement.
- Mapping API : `Request` + `RequestDetail` → `DemoRequest` plat côté `apiRequestsRepository`.

### Limites

- Mode API : liste légère sans tous les champs readonly jusqu'au chargement détail.
- Pas de retry automatique réseau.
- Backend seed (3 demandes, libellés légèrement différents du seed frontend local) — acceptable pour démo API.

---

## 9. Décision

Le cycle est clôturé : le mode dual local/API fonctionne, le mode local reste le défaut, les tests passent.

Aucun push, aucune PR et aucun merge ne sont effectués dans ce cycle.

---

## 10. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Mode local par défaut | OK |
| Mode API activable | OK |
| Repository async | OK |
| Chargement demandes API | OK |
| Détail demande API | OK |
| Transition API | OK |
| Journal API | OK |
| Reset API | OK |
| Gestion erreur backend | OK |
| Tests frontend | OK — 77 tests |
| Tests backend | OK — 18 tests |
| Données réelles absentes | OK |
| Garde-fous | OK |

---

## 11. Limites assumées

- Le mode local reste le mode par défaut.
- Le mode API nécessite le backend lancé séparément.
- Aucun fallback automatique local n'est activé en cas d'erreur API.
- Aucune authentification n'est introduite.
- Aucune donnée réelle n'est introduite.

---

## 12. Prochaine étape recommandée

**Cycle suivant :** merge PR puis post-merge léger (section §15).

---

## 13. Préparation PR intégrée

### Titre proposé

`Add Interv360 frontend API connection mode`

### Description proposée

```markdown
## Summary
This PR adds a dual local/API data mode to the Interv360 frontend.
It includes:
- an async RequestsRepository abstraction;
- a local repository preserving the existing localStorage demo behavior;
- an API repository using the backend `/api/v1` endpoints;
- explicit Vite configuration for API mode;
- local mode as the default behavior;
- loading and error handling for API mode;
- UI indication for local/API mode;
- frontend tests for repository factory, API repository, and App API mode;
- README updates for app/backend usage.

## Validation
- Frontend build: OK
- Frontend tests: 77 passed
- Backend build: OK
- Backend tests: 18 passed
- Local mode remains default
- API mode requires explicit configuration
- localStorage preserved
- No silent fallback to local mode
- No real data introduced

## Guardrails
No SQL database, CRM integration, authentication, multi-user logic, real data, STAT-05/07/08, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
```

### Périmètre PR (vs `main`)

| Zone | Contenu |
|------|---------|
| Cadrage | `04-delivery/2026-07-01-frontend-api-connection-framing.md` |
| Livraison | `04-delivery/frontend-api-connection.md` |
| Frontend | Repository dual, `App.tsx` async, composants UI, tests |
| Docs | `app/README.md`, `backend/README.md` |

Hors périmètre confirmé : suppression `localStorage`, SQL, CRM, auth, Controlled Delivery, sfia-notion-sync.

---

## 14. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-frontend-api-connection?expand=1 |
| Cible | main |
| Source | delivery/interv360-frontend-api-connection |
| Merge automatique | Non |

---

## 15. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | [#42](https://github.com/mcleland147/sfia-workspace/pull/42) — Add Interv360 frontend API connection mode |
| Source | `delivery/interv360-frontend-api-connection` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `dad22eb` |
| Main synchronisée | OK |
| Build frontend post-merge | OK |
| Tests frontend post-merge | OK — 77 tests |
| Build backend post-merge | OK |
| Tests backend post-merge | OK — 18 tests |
| Mode local par défaut | OK |
| Mode API activable explicitement | OK |
| Backend obligatoire en mode local | Non |
| localStorage conservé | OK |
| Fallback automatique silencieux | Non |
| DB SQL introduite | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le cycle **Frontend API Connection** est mergé dans `main`.

La branche principale contient désormais :

- une abstraction repository async ;
- un repository local conservant le comportement `localStorage` ;
- un repository API utilisant les endpoints backend `/api/v1` ;
- une factory de sélection local/API par configuration ;
- le mode local par défaut ;
- le mode API activable explicitement via variables Vite ;
- une gestion simple des états loading/error ;
- une indication UI du mode de données ;
- les tests frontend associés ;
- les validations backend maintenues.

Le frontend peut désormais être connecté au backend minimal sans rendre le backend obligatoire pour la démonstration locale.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Delivery contrôlé.

### Prochaine étape recommandée

**Cycle recommandé :** `delivery/interv360-end-to-end-demo-hardening`

Objectif :

- vérifier la démonstration complète en mode local et en mode API ;
- renforcer la documentation d'usage local/API ;
- stabiliser les éventuels irritants UX ;
- préparer un package de validation bout-en-bout.

**Alternative :** `delivery/interv360-frontend-api-connection-cleanup`

Objectif :

- nettoyer les points mineurs de dette technique ;
- simplifier les tests ;
- améliorer les messages d'erreur ;
- sans changer le périmètre fonctionnel.
