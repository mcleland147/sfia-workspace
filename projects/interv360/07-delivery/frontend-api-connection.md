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

Le cadrage précédent ([`frontend-api-connection-framing.md`](./frontend-api-connection-framing.md)) a retenu :

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

**Cycle recommandé :** `delivery/interv360-frontend-api-connection-pr-preparation`

Objectif :

- préparer la PR ;
- vérifier tests frontend/backend ;
- documenter le mode dual ;
- ne pas ajouter de nouveau périmètre.
