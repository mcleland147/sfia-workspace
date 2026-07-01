# Interv360 — E2E Demo Runbook

**Projet** : Interv360  
**Usage** : démonstration locale et mode API local  
**Données** : fictives uniquement

---

## 1. Objectif

Ce runbook décrit comment lancer et valider Interv360 en **mode local** (défaut) et en **mode API local** (backend séparé).

Référence complémentaire : [`interv360-demo-script.md`](./interv360-demo-script.md)

---

## 2. Mode local par défaut

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

## 3. Mode API local

### Terminal 1 — backend

```bash
cd projects/interv360/backend
npm install
npm run dev
```

Attendu : `Interv360 backend listening on http://localhost:3001`

### Terminal 2 — frontend

```bash
cd projects/interv360/app
VITE_INTERV360_DATA_SOURCE=api \
VITE_INTERV360_API_BASE_URL=http://localhost:3001/api/v1 \
npm run dev
```

**Attendu :**

- badge **Mode API local** ;
- demandes chargées depuis le backend ;
- transitions et reset via API ;
- pas de fallback silencieux vers le mode local si le backend est arrêté.

---

## 4. Parcours de validation local

1. Ouvrir l'application en mode local (`npm run dev` seul).
2. Vérifier le badge **Mode local**.
3. Vérifier la liste des demandes (3 entrées fictives).
4. Sélectionner `SAV-DEMO-001`.
5. Utiliser filtre par statut et recherche locale.
6. Vérifier le panneau **Readiness** et le **scénario guidé**.
7. Exécuter une transition nominale (Qualifier → … → Clôturer).
8. Vérifier le journal local de la demande active.
9. Cliquer sur **Réinitialiser la démo**.
10. Vérifier le retour à l'état seed (`SAV-DEMO-001` en STAT-01, journal vide).

---

## 5. Parcours de validation API

1. Lancer backend + frontend en mode API (section 3).
2. Vérifier le badge **Mode API local**.
3. Vérifier la liste des demandes (3 entrées depuis l'API).
4. Sélectionner `SAV-DEMO-001`.
5. Exécuter **Qualifier la demande** (`qualify` → STAT-02).
6. Vérifier le journal API (événement `qualification.confirmed`).
7. Cliquer sur **Réinitialiser la démo** (`POST /api/v1/demo/reset`).
8. Vérifier le retour à l'état seed (STAT-01, journal vide).
9. Arrêter le backend (Ctrl+C terminal 1).
10. Recharger le frontend en mode API.
11. Vérifier le message **Backend indisponible en mode API local…** (pas de bascule silencieuse).

### Validation API rapide (curl)

Avec le backend lancé :

```bash
curl -s http://localhost:3001/health
curl -s http://localhost:3001/api/v1/requests
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' -d '{"action":"qualify"}'
curl -s http://localhost:3001/api/v1/requests/SAV-DEMO-001/events
curl -s -X POST http://localhost:3001/api/v1/demo/reset
```

---

## 6. Garde-fous

- Données fictives uniquement.
- Mode local par défaut.
- Backend non obligatoire pour présentation standard.
- Pas de fallback automatique silencieux.
- Pas de CRM.
- Pas d'authentification.
- Pas de DB SQL.
- Workflow nominal uniquement (STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06).

---

## 7. Dépannage rapide

| Symptôme | Cause probable | Action |
|----------|----------------|--------|
| `ERR_CONNECTION_REFUSED` sur `:5173` | Frontend non lancé | `npm run dev` dans `app/` |
| Badge Mode API + message backend indisponible | Backend arrêté | Lancer `npm run dev` dans `backend/` |
| Liste vide en mode API | Mauvaise URL API | Vérifier `VITE_INTERV360_API_BASE_URL` |
| Transition refusée | Statut incompatible | Vérifier statut courant (STAT-06 terminal) |
