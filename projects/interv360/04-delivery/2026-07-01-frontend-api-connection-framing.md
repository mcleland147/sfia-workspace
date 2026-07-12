# Interv360 — Frontend API Connection Framing

**Projet** : Interv360  
**Cycle** : Frontend API Connection Framing  
**Mode** : SFIA Fast Delivery documentaire  
**Statut** : Cadrage connexion frontend/backend  
**Branche** : `delivery/interv360-frontend-api-connection-framing`

---

## 1. Objectif

Ce document cadre la future connexion du frontend Interv360 au backend minimal.

Il ne lance aucune implémentation.

L'objectif est de décider comment passer progressivement :

```text
Frontend localStorage
        ↓
Frontend connecté API
        ↓
Backend minimal Express / store fictif en mémoire
```

sans casser la démonstration locale existante.

---

## 2. Point de départ

Interv360 dispose désormais :

- d'un frontend React / TypeScript local (`projects/interv360/app/`) ;
- d'une démo locale basée sur `localStorage` via `requestsRepository.ts` ;
- d'un workflow nominal stable (STAT-01 → STAT-06) ;
- d'un scénario guidé, panneau readiness, package de présentation ;
- d'un backend minimal Express isolé (`projects/interv360/backend/`) ;
- d'endpoints REST `/api/v1` cadrés et testés (18 tests backend) ;
- de 4 documents architecture backend + document de livraison prototype.

Le frontend n'est pas encore connecté au backend.

### Couplage actuel côté frontend

Les composants importent directement `requestsRepository.ts` :

| Fichier | Fonctions utilisées |
|---------|---------------------|
| `app/App.tsx` | `getRequests`, `resetDemoData`, transitions |
| `ui/requests/RequestsList.tsx` | `getRequests` |
| `ui/requests/RequestDetail.tsx` | `getRequestById` |
| `ui/workflow/WorkflowJournalReadonly.tsx` | `getDemoWorkflowEvents` |
| Vues readonly (qualification, planning, etc.) | `getRequestById` |

Le repository local est **synchrone** ; le mode API sera **asynchrone**.

---

## 3. Réflexion d'optimisation SFIA

La connexion frontend/backend touche :

- le chargement des demandes ;
- la sélection ;
- les transitions ;
- le journal ;
- le reset ;
- les tests frontend (64 tests existants) ;
- la stabilité de la démo.

Il ne faut donc pas connecter directement sans cadrage.

Décision de méthode :

- utiliser **Fast Delivery documentaire** ;
- cadrer la stratégie de connexion ;
- préserver le mode démo local ;
- définir les impacts avant code ;
- ne pas implémenter dans ce cycle.

---

## 4. Problème à résoudre

Le backend minimal fonctionne, mais le frontend utilise encore son repository local.

Une connexion directe risquerait de casser :

- la rejouabilité de la démo sans backend lancé ;
- le reset local (`resetDemoData` + `clearInterv360LocalStorage`) ;
- le filtrage / recherche locaux ;
- le scénario guidé et le readiness ;
- la lisibilité des tests (repository synchrone) ;
- la capacité à présenter la démo en autonomie (`npm run dev` seul).

La connexion doit donc être **progressive**.

---

## 5. Principes de connexion

La future connexion doit respecter :

- données fictives uniquement ;
- backend local uniquement (`http://localhost:3001` par défaut) ;
- workflow nominal inchangé ;
- pas de CRM ;
- pas d'authentification ;
- pas de données réelles ;
- pas de STAT-05 / STAT-07 / STAT-08 ;
- conservation de la démo locale comme mode par défaut ;
- tests frontend maintenus ;
- tests backend maintenus (18) ;
- fallback ou mode local explicite.

---

## 6. Options étudiées

### Option A — Remplacement direct du repository local par API

**Description :**

- le frontend appelle directement le backend ;
- `localStorage` est retiré ou fortement réduit ;
- backend obligatoire pour lancer la démo.

**Avantages :**

- connexion rapide ;
- flux réaliste ;
- moins de double logique.

**Limites :**

- casse potentielle de la démo autonome ;
- backend obligatoire ;
- risque UX/test plus élevé ;
- rollback plus difficile.

**Statut :** Non recommandé en première étape.

---

### Option B — Mode dual local/API par configuration

**Description :**

- conserver le repository local existant ;
- ajouter un repository API ;
- choisir le mode via configuration ;
- mode local par défaut ;
- mode API activable explicitement.

**Avantages :**

- préserve la démo actuelle ;
- permet de tester la connexion sans casser l'existant ;
- facilite comparaison local/API ;
- rollback simple.

**Limites :**

- duplication temporaire ;
- nécessite une abstraction repository ;
- tests supplémentaires ;
- adaptation async dans `App.tsx` et composants.

**Statut :** **Recommandé.**

---

### Option C — Connexion API uniquement sur certaines actions

**Description :**

- garder lecture locale ;
- envoyer uniquement les transitions au backend ;
- journal local ou hybride.

**Avantages :**

- transition progressive.

**Limites :**

- état incohérent possible (liste locale vs statut backend) ;
- complexité élevée ;
- risque de confusion démo.

**Statut :** Non recommandé.

---

### Option D — Reporter la connexion frontend

**Description :**

- backend reste isolé ;
- frontend reste local.

**Avantages :**

- aucun risque immédiat.

**Limites :**

- ne valide pas l'intégration bout-en-bout ;
- limite la valeur du backend mergé.

**Statut :** Possible, mais pas prioritaire si l'objectif reste le prototype connecté.

---

## 7. Décision proposée

**Option B — Mode dual local/API par configuration**

```text
RequestsRepository (interface)
        ↓
LocalRequestsRepository          ApiRequestsRepository
        ↓                          ↓
localStorage                     REST /api/v1
```

Le **mode local** reste le mode par défaut.

Le **mode API** doit être activé explicitement, par exemple via :

- variable d'environnement Vite ;
- `VITE_INTERV360_DATA_SOURCE=api` ;
- `VITE_INTERV360_API_BASE_URL=http://localhost:3001/api/v1`.

---

## 8. Impacts frontend à cadrer

### 8.1 Repository

Formaliser une interface commune (async) :

| Méthode | Local (existant) | API (futur) |
|---------|------------------|-------------|
| `listRequests()` | `getRequests()` sync | `GET /requests` |
| `getRequestWithDetail(id)` | `getRequestById()` sync | `GET /requests/:id` |
| `listEventsForRequest(id)` | `getDemoWorkflowEvents()` | `GET /requests/:id/events` |
| `applyTransition(id, action)` | `qualifyDemoRequest`, etc. | `POST /requests/:id/transitions` |
| `resetDemo()` | `resetDemoData()` | `POST /demo/reset` |

Mapping actions API : `qualify`, `plan`, `complete_intervention`, `close_report`.

Le repository local existant reste disponible sans modification de comportement par défaut.

### 8.2 Chargement asynchrone

Le mode API introduira :

- états `loading` / `error` dans `App.tsx` ;
- erreurs réseau (`Backend indisponible`) ;
- retry éventuel ;
- tests asynchrones (`waitFor`, mocks fetch).

Composants impactés en priorité : `App.tsx`, `RequestsList`, `RequestDetail`, `WorkflowActionControl`, `WorkflowJournalReadonly`, `DemoResetControl`.

### 8.3 Reset

Le reset devra :

- appeler `POST /api/v1/demo/reset` en mode API ;
- conserver `resetDemoData()` en mode local ;
- restaurer sélection (`DEFAULT_SELECTED_REQUEST_ID`), filtres, recherche et scénario côté UI.

### 8.4 Journal

Le journal devra :

- lire `GET /api/v1/requests/:id/events` en mode API ;
- rester local en mode local ;
- rester filtré par demande active.

### 8.5 Transitions

Les transitions devront :

- appeler `POST /api/v1/requests/:id/transitions` en mode API ;
- traiter `TRANSITION_NOT_ALLOWED` (409) et `INVALID_TRANSITION_ACTION` (400) ;
- conserver le comportement local en mode local ;
- ne pas ajouter de nouveaux statuts.

### 8.6 Modèle de données

Écart actuel à gérer dans le futur cycle :

| Frontend (`DemoRequest` plat) | Backend (séparé) |
|-------------------------------|------------------|
| Champs liste + détail mélangés | `Request` + `RequestDetail` |
| `message` sur événement | `label` sur événement |
| `createdAtLabel` texte | `createdAt` ISO |

Le repository API devra mapper les réponses backend vers les types UI existants ou introduire une couche d'adaptation minimale.

---

## 9. Garde-fous UX

La future connexion ne doit pas dégrader :

- scénario guidé (`DemoScenarioGuide`) ;
- readiness (`DemoReadinessPanel`) ;
- filtres / recherche ;
- sélection active ;
- reset global ;
- lisibilité de la démo ;
- capacité à présenter **sans backend**.

Messages recommandés :

- « Mode local »
- « Mode API local »
- « Backend indisponible »
- « Réessayer »

« Revenir au mode local » : uniquement si décidé explicitement (pas de bascule automatique au premier palier).

---

## 10. Tests attendus pour le futur cycle de connexion

**Tests frontend attendus :**

- mode local inchangé (régression sur tests existants) ;
- mode API charge les demandes ;
- mode API affiche le détail ;
- mode API applique une transition ;
- mode API affiche le journal ;
- mode API reset la démo ;
- erreur backend affichée proprement ;
- backend indisponible géré ;
- filtres / recherche restent fonctionnels en mode local ;
- scénario guidé inchangé en mode local.

**Tests backend à maintenir :**

- 18 tests existants ;
- endpoints toujours conformes au contrat API.

---

## 11. Décisions ouvertes

| Décision | Statut | Commentaire |
|----------|--------|-------------|
| Nom de l'interface | Ouvert | Ex. `RequestsRepository` |
| Mode local par défaut | **Recommandé** | Préserve la démo |
| Flag configuration | **Recommandé** | `VITE_INTERV360_DATA_SOURCE` |
| URL backend | Ouvert | `VITE_INTERV360_API_BASE_URL` |
| Couche adaptateur types | Ouvert | Mapper API → `DemoRequest` |
| Fallback automatique local | Non recommandé | Risque de masquer erreurs |
| Message backend indisponible | À cadrer | UX simple |
| Connexion en une seule PR | Possible | Si tests suffisants |
| Suppression localStorage | **Exclue** | Pas au premier cycle connexion |
| Indicateur mode dans l'UI | Ouvert | Badge discret recommandé |

---

## 12. Décision proposée

- Conserver le **mode local par défaut**
- Ajouter un **mode API activable explicitement** dans un futur cycle
- Introduire une **abstraction repository async**
- Ne **pas supprimer** `localStorage`
- Ne **pas connecter** automatiquement au backend
- Ne **pas ajouter** d'authentification ni de données réelles
- Prévoir **tests frontend supplémentaires**
- Maintenir **tests backend** (18)

---

## 13. Prochaine étape recommandée

**Cycle recommandé :** `delivery/interv360-frontend-api-connection`

Objectif :

- implémenter l'abstraction repository ;
- conserver le repository local ;
- ajouter un repository API ;
- activer le mode API par configuration ;
- gérer loading / error ;
- maintenir le mode local par défaut ;
- ajouter tests frontend ;
- maintenir tests backend.

**Alternative :** `delivery/interv360-frontend-repository-abstraction`

Si l'on veut d'abord isoler l'abstraction repository **sans** appeler l'API (refactor pur, zéro régression).

**Ordre recommandé :**

1. cadrage connexion (ce cycle) ;
2. abstraction repository (optionnel) ;
3. connexion API avec mode dual ;
4. PR + merge.

---

## 14. Validation

| Contrôle | Résultat |
|----------|----------|
| Code frontend modifié | Non |
| Backend modifié | Non |
| Connexion frontend/backend créée | Non |
| DB SQL introduite | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 15. Décision finale

Ce cycle clôt le cadrage de connexion frontend/backend.

**Décision retenue :** mode dual **local/API par configuration**, avec **mode local par défaut**.

Le passage à l'implémentation reste conditionné à un cycle séparé (`delivery/interv360-frontend-api-connection` ou abstraction repository préalable).
