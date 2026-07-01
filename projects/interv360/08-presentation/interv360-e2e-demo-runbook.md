# Interv360 — E2E Demo Runbook

**Projet** : Interv360  
**Usage** : démonstration locale et mode API local  
**Données** : fictives uniquement

---

## 1. Objectif

Ce runbook décrit comment lancer et valider Interv360 en **mode local** (défaut) et en **mode API local** (backend séparé). Il consolide le parcours produit bout-en-bout après stabilisation du socle backend, API et frontend connecté.

Référence complémentaire : [`interv360-demo-script.md`](./interv360-demo-script.md)

---

## 2. État produit consolidé

Interv360 dispose désormais d’un socle démontrable bout-en-bout :

- backend Node.js / TypeScript ;
- persistance SQLite locale ;
- API `/api/v1` ;
- mode local par défaut ;
- mode API opt-in ;
- modèle détail de demande productisé ;
- erreurs API clarifiées ;
- frontend affichant les champs métier productisés.

La démonstration peut donc être rejouée selon deux parcours :

1. parcours local frontend ;
2. parcours connecté frontend + backend API.

---

## 3. Valeur produit démontrée

La démonstration met en évidence :

- la capacité à suivre plusieurs demandes d’intervention ;
- la capacité à consulter une fiche demande enrichie ;
- la visibilité du site concerné ;
- la visibilité de la date de demande ;
- la visibilité de l’équipement ou objet concerné ;
- la visibilité de l’impact métier ;
- la distinction entre impact court et impact métier ;
- la capacité à exécuter un workflow nominal ;
- la capacité à rejouer une démonstration via reset ;
- la capacité à basculer entre mode local et mode API.

---

## 4. Mode local par défaut

Depuis `projects/interv360/app/` :

```bash
npm install
npm run dev
```

**Attendu :**

- application accessible sur `http://localhost:5173/` (port Vite par défaut) ;
- badge **Mode local** en haut de page ;
- **aucune** nécessité de lancer le backend ;
- 3 demandes fictives visibles (`SAV-DEMO-001`, `SAV-DEMO-002`, `SAV-DEMO-003`).

---

## 5. Parcours de démonstration — mode local

Le mode local reste le mode par défaut du frontend.

**Objectif :**

- présenter rapidement l’expérience utilisateur ;
- démontrer la fiche demande enrichie ;
- exécuter le workflow nominal ;
- éviter toute dépendance au backend pendant une démonstration courte.

**Commandes :**

```bash
cd projects/interv360/app
npm run dev
```

**Contrôles à effectuer :**

1. Ouvrir la liste des demandes.
2. Sélectionner une demande (ex. `SAV-DEMO-001`).
3. Vérifier la présence de **Site**.
4. Vérifier la présence de **Date de demande**.
5. Vérifier la présence de **Équipement / objet**.
6. Vérifier la présence de **Impact**.
7. Vérifier la présence de **Impact métier**.
8. Vérifier que **Date de demande** est distinct de **Créée**.
9. Vérifier que **Impact métier** est distinct de **Impact**.
10. Utiliser filtre par statut et recherche locale.
11. Vérifier le panneau **Readiness** et le **scénario guidé**.
12. Exécuter le scénario guidé ou les transitions disponibles (workflow nominal).
13. Vérifier que le journal local reflète les actions de démonstration.
14. Cliquer sur **Réinitialiser la démo**.
15. Vérifier le retour à l’état seed (`SAV-DEMO-001` en STAT-01, journal vide).

---

## 6. Mode API local

### Terminal 1 — backend

```bash
cd projects/interv360/backend
npm install
npm run dev
```

Attendu : `Interv360 backend listening on http://localhost:3001`

Le backend persiste l'état démo dans un fichier SQLite local (`data/interv360.sqlite` par défaut). Un redémarrage du backend conserve transitions et journal jusqu'au reset.

### Terminal 2 — frontend

```bash
cd projects/interv360/app
VITE_INTERV360_DATA_SOURCE=api \
VITE_INTERV360_API_BASE_URL=http://localhost:3001/api/v1 \
npm run dev
```

**Ports :**

- backend : `3001` ;
- frontend Vite : `5173` par défaut, ou `5174` / `5175` si le port est occupé ;
- le backend autorise en local les origins Vite courantes (`localhost` et `127.0.0.1` sur ces ports).

**Attendu :**

- badge **Mode API local** ;
- demandes chargées depuis le backend ;
- transitions et reset via API ;
- pas de fallback silencieux vers le mode local si le backend est arrêté.

---

## 7. Parcours de démonstration — mode API

Le mode API est opt-in.

**Objectif :**

- démontrer le frontend connecté au backend ;
- vérifier la persistance SQLite ;
- vérifier le reset API ;
- vérifier que les champs productisés proviennent du payload API ;
- vérifier les erreurs API clarifiées si nécessaire.

**Contrôles frontend API :**

1. Lancer backend + frontend en mode API (section 6).
2. Vérifier le badge **Mode API local**.
3. Ouvrir la liste des demandes (3 entrées depuis l’API).
4. Sélectionner `SAV-DEMO-001`.
5. Sur la fiche demande, vérifier **Site**, **Date de demande**, **Équipement / objet**, **Impact**, **Impact métier**.
6. Vérifier que **Date de demande** est distinct de **Créée**.
7. Vérifier que **Impact métier** est distinct de **Impact**.
8. Exécuter **Qualifier la demande** (`qualify` → STAT-02).
9. Vérifier le journal API (événement `qualification.confirmed`).
10. Cliquer sur **Réinitialiser la démo** (`POST /api/v1/demo/reset`).
11. Vérifier le retour à l’état seed (STAT-01, journal vide, champs productisés présents).
12. Arrêter le backend, recharger le frontend en mode API : message **Backend indisponible en mode API local…** (pas de bascule silencieuse).

**Points d’attention :**

- le mode API est visible comme mode connecté ;
- les transitions restent limitées au workflow nominal ;
- le reset API permet de revenir à l’état de démonstration.

### Validation API persistante après SQLite

1. Exécuter une transition sur `SAV-DEMO-001`.
2. Arrêter puis relancer le backend (`npm run dev`).
3. Recharger le frontend en mode API.
4. Vérifier que le statut et le journal sont conservés (SQLite côté backend).
5. Exécuter le reset API et vérifier le retour au seed.

**Ports frontend supportés en local :** `5173`, `5174`, `5175`.

---

## 8. Preuves techniques à présenter

| Preuve | Commande / contrôle | Attendu |
|--------|---------------------|---------|
| Frontend build | `npm run build` dans `projects/interv360/app` | OK |
| Frontend tests | `npm run test -- --run` dans `projects/interv360/app` | 81 tests ou plus |
| Backend build | `npm run build` dans `projects/interv360/backend` | OK |
| Backend tests | `npm run test` dans `projects/interv360/backend` | 32 tests ou plus |
| API health | `GET /health` | OK |
| Liste demandes | `GET /api/v1/requests` | demandes fictives |
| Détail demande | `GET /api/v1/requests/SAV-DEMO-001` | champs productisés présents |
| Reset API | `POST /api/v1/demo/reset` | `{ status, mode, requestsCount }` |
| Erreur demande inconnue | transition sur demande inconnue | `404 REQUEST_NOT_FOUND` |
| Erreur action invalide | action absente / inconnue | `400 INVALID_TRANSITION_ACTION` |
| Erreur transition métier | transition non autorisée | `409 TRANSITION_NOT_ALLOWED` |
| Erreur JSON invalide | body JSON invalide | `400 INVALID_JSON_BODY` |

---

## 9. Curl essentiels pour la démonstration API

Avec le backend lancé sur `http://localhost:3001` :

**Health :**

```bash
curl -s http://localhost:3001/health
```

**Liste des demandes :**

```bash
curl -s http://localhost:3001/api/v1/requests
```

**Détail d’une demande** (vérifier `requestedDate`, `equipmentLabel`, `businessImpact`, `siteLabel`) :

```bash
curl -s http://localhost:3001/api/v1/requests/SAV-DEMO-001
```

**Transition nominale :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"qualify"}'
```

**Journal :**

```bash
curl -s http://localhost:3001/api/v1/requests/SAV-DEMO-001/events
```

**Reset :**

```bash
curl -s -X POST http://localhost:3001/api/v1/demo/reset
curl -s http://localhost:3001/api/v1/requests/SAV-DEMO-001
```

**Erreur demande inconnue :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/UNKNOWN/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"qualify"}'
```

**Erreur action absente :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Erreur action inconnue :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"unknown"}'
```

**Erreur transition métier :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"close_report"}'
```

**Erreur JSON invalide :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":'
```

**Attendus erreurs API :**

- `REQUEST_NOT_FOUND` en `404` ;
- `INVALID_TRANSITION_ACTION` en `400` ;
- `TRANSITION_NOT_ALLOWED` en `409` ;
- `INVALID_JSON_BODY` en `400`.

Format d’erreur :

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

---

## 10. Limites assumées de la démonstration

La démonstration reste volontairement bornée.

**Hors périmètre actuel :**

- authentification ;
- utilisateurs ;
- rôles et permissions ;
- CRM ;
- données réelles ;
- workflow étendu ;
- statuts supplémentaires (STAT-05 / STAT-07 / STAT-08) ;
- production ;
- supervision ;
- déploiement cloud ;
- multi-tenant ;
- audit réglementaire.

Ces sujets nécessitent un cadrage dédié avant implémentation.

**Garde-fous opérationnels :**

- données fictives uniquement ;
- mode local par défaut ;
- backend non obligatoire pour présentation standard ;
- pas de fallback automatique silencieux ;
- persistance SQLite côté backend uniquement (pas de SQL navigateur) ;
- workflow nominal uniquement (STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06).

---

## 11. Récit de démonstration synthétique

Le récit recommandé :

1. Interv360 part d’un besoin simple : suivre et qualifier des demandes d’intervention.
2. Le produit propose une liste de demandes fictives mais structurées.
3. Chaque demande dispose d’une fiche enrichie avec site, date de demande, équipement, impact court et impact métier.
4. Le workflow nominal permet de qualifier, planifier, réaliser puis clôturer une intervention.
5. Le frontend peut fonctionner seul en mode local pour une démo rapide.
6. Le même parcours peut être connecté à une API locale persistante avec SQLite.
7. Les erreurs API sont structurées et testées.
8. Le reset permet de rejouer la démonstration.
9. Les limites sont explicites : pas encore d’auth, users, rôles, CRM ou workflow étendu.

---

## 12. Dépannage rapide

| Symptôme | Cause probable | Action |
|----------|----------------|--------|
| `ERR_CONNECTION_REFUSED` sur `:5173` | Frontend non lancé | `npm run dev` dans `app/` |
| Badge Mode API + message backend indisponible | Backend arrêté | Lancer `npm run dev` dans `backend/` |
| Erreur CORS en mode API (port Vite alternatif) | Origin non autorisée (rare) | Vérifier le port affiché par Vite ; par défaut `5173`–`5175` sont autorisés, ou définir `INTERV360_CORS_ORIGINS` côté backend |
| Liste vide en mode API | Mauvaise URL API | Vérifier `VITE_INTERV360_API_BASE_URL` |
| Transition refusée | Statut incompatible | Vérifier statut courant (STAT-06 terminal) |
| État API incohérent après tests | SQLite conserve l'état | `POST /api/v1/demo/reset` ou bouton **Réinitialiser la démo** |
| Champs productisés absents en mode API | Backend obsolète ou reset manquant | Vérifier `GET /api/v1/requests/SAV-DEMO-001` puis reset si besoin |
