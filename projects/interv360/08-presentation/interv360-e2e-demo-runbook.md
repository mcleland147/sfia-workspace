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
14. Sélectionner l'utilisateur **Amin Admin** dans le sélecteur d'utilisateur de démonstration (bandeau en haut de page).
15. Cliquer sur **Réinitialiser la démo**.
16. Vérifier le retour à l’état seed (`SAV-DEMO-001` en STAT-01, journal vide) et la conservation de l'utilisateur courant.

Voir aussi : [Contrôle — Auth User Switcher](#contrôle--auth-user-switcher).

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
10. Sélectionner l'utilisateur **Amin Admin** dans le sélecteur d'utilisateur de démonstration.
11. Cliquer sur **Réinitialiser la démo** (`POST /api/v1/demo/reset`).
12. Vérifier le retour à l’état seed (STAT-01, journal vide, champs productisés présents) et la conservation de l'utilisateur courant.
13. Arrêter le backend, recharger le frontend en mode API : message **Backend indisponible en mode API local…** (pas de bascule silencieuse).

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

## Contrôle — simulation de rôle

> **Note :** depuis le batch Auth User Switcher, le rôle actif est dérivé de l'utilisateur de démonstration sélectionné. Voir [Contrôle — Auth User Switcher](#contrôle--auth-user-switcher) pour les scénarios à jour.

Interv360 dispose d'une simulation de rôle frontend (désormais portée par le sélecteur d'utilisateur).

Cette simulation sert uniquement à démontrer les responsabilités produit.  
Elle ne constitue pas une authentification réelle.

### Rôles disponibles

| Rôle | Libellé |
|------|---------|
| `requester` | Demandeur |
| `technician` | Technicien |
| `manager` | Responsable |
| `admin` | Administrateur |
| `viewer` | Observateur |

### Contrôles à effectuer

1. Vérifier que le rôle simulé est visible dans l’interface.
2. Vérifier la mention : **Simulation — aucune authentification réelle**.
3. Vérifier que le rôle par défaut est **Technicien**.
4. Changer le rôle vers **Observateur**.
5. Vérifier que les actions workflow sont bloquées.
6. Tenter une action non autorisée et vérifier le message :
   `Action non autorisée pour le rôle simulé : Observateur.`
7. Changer le rôle vers **Administrateur**.
8. Vérifier que le reset démo est autorisé.
9. Exécuter le reset.
10. Vérifier que le rôle simulé est conservé après reset.

### Points d’attention

- la simulation s’applique en mode local ;
- la simulation s’applique en mode API opt-in ;
- aucun appel API ne doit être réalisé lorsqu’une action est non autorisée ;
- le reset démo est réservé à `admin` côté frontend ;
- le backend n’est pas sécurisé par cette simulation ;
- aucune auth réelle, OAuth, JWT, SSO ou session backend n'est introduite ;
- en mode API, les utilisateurs proviennent de `GET /api/v1/users` (voir [Contrôle — Backend Users & Session](#contrôle--backend-users--session)).

---

## Contrôle — extension légère du workflow

Le workflow Interv360 expose désormais deux nouveaux états :

| Statut | Libellé |
|--------|---------|
| `STAT-05` | En attente |
| `STAT-07` | Annulée |

Et trois nouvelles actions :

| Action | Libellé UI |
|--------|------------|
| `put_on_hold` | Mettre en attente |
| `resume` | Reprendre |
| `cancel` | Annuler la demande |

### Scénario hold / resume

1. Ouvrir une demande en statut `STAT-03` (ex. `SAV-DEMO-002`).
2. Vérifier que l’action **Mettre en attente** est disponible.
3. Cliquer sur **Mettre en attente**.
4. Vérifier que la demande passe en **En attente**.
5. Vérifier que l’action **Reprendre** est disponible.
6. Cliquer sur **Reprendre**.
7. Vérifier que la demande repasse en statut de traitement.

### Scénario cancel

1. Ouvrir une demande en statut compatible avec l’annulation.
2. Utiliser un rôle `manager` ou `admin`.
3. Cliquer sur **Annuler la demande**.
4. Vérifier que la demande passe en **Annulée**.
5. Vérifier qu’aucune action workflow n’est ensuite proposée.

### Contrôle permissions simulées

| Rôle | Attendu |
|------|---------|
| `viewer` | Lecture seule, actions bloquées |
| `requester` | Lecture seule, actions bloquées |
| `technician` | Peut traiter, mettre en attente et reprendre ; ne peut pas annuler |
| `manager` | Peut traiter, mettre en attente, reprendre et annuler |
| `admin` | Peut traiter, mettre en attente, reprendre, annuler et reset |

### Limites

- l’extension reste légère ;
- aucune authentification réelle n’est introduite ;
- aucun nouveau contrat API n’est introduit ;
- aucune nouvelle table SQLite n’est introduite ;
- `STAT-06` et `STAT-07` sont terminaux.

---

## Contrôle — requalification légère du workflow

Le workflow Interv360 expose désormais une action de requalification légère :

| Action | Libellé UI | Depuis | Vers |
|--------|------------|--------|------|
| `requalify` | Requalifier | `STAT-02`, `STAT-03`, `STAT-05` | `STAT-02` |

Cette requalification ne crée pas de nouveau statut.

### Scénario requalification depuis une demande planifiée

1. Ouvrir une demande en statut `STAT-02`.
2. Vérifier que l’action **Requalifier** est disponible.
3. Cliquer sur **Requalifier**.
4. Vérifier que la demande reste ou revient en statut de qualification / planification selon le libellé affiché.
5. Vérifier que l’action est journalisée.

### Scénario requalification depuis une demande en traitement

1. Ouvrir une demande en statut `STAT-03`.
2. Vérifier que l’action **Requalifier** est disponible.
3. Cliquer sur **Requalifier**.
4. Vérifier que la demande revient vers `STAT-02`.

### Scénario requalification depuis une demande en attente

1. Mettre une demande en attente ou ouvrir une demande en statut `STAT-05`.
2. Vérifier que l’action **Requalifier** est disponible.
3. Cliquer sur **Requalifier**.
4. Vérifier que la demande revient vers `STAT-02`.

### Contrôle permissions simulées

| Rôle | Attendu |
|------|---------|
| `viewer` | Ne peut pas requalifier |
| `requester` | Ne peut pas requalifier |
| `technician` | Peut requalifier |
| `manager` | Peut requalifier |
| `admin` | Peut requalifier |

### Limites

- aucun `STAT-08` n’est introduit ;
- aucun nouveau statut n’est introduit ;
- aucune authentification réelle n’est introduite ;
- aucun nouveau contrat API n’est introduit ;
- aucune nouvelle table SQLite n’est introduite ;
- `STAT-06` et `STAT-07` restent terminaux.

---

## Contrôle — Auth User Switcher

Interv360 utilise désormais un sélecteur d'utilisateur de démonstration.

Le rôle actif n'est plus choisi directement : il est dérivé de l'utilisateur courant.

### Utilisateurs de démonstration

| Utilisateur | Rôle | Attendu |
|------------|------|---------|
| Alice Demandeur | `requester` | Lecture seule workflow |
| Théo Technicien | `technician` | Traitement autorisé, annulation interdite |
| Maya Responsable | `manager` | Traitement et annulation autorisés |
| Amin Admin | `admin` | Traitement, annulation et reset autorisés |
| Victor Lecteur | `viewer` | Lecture seule workflow |

### Scénario 1 — utilisateur par défaut

1. Ouvrir la démonstration Interv360.
2. Vérifier que l'utilisateur par défaut est **Théo Technicien**.
3. Vérifier que le rôle affiché est **Technicien**.
4. Vérifier que les actions de traitement sont disponibles.
5. Vérifier que l'annulation reste interdite pour ce profil.

### Scénario 2 — responsable

1. Changer l'utilisateur vers **Maya Responsable**.
2. Vérifier que le rôle affiché est **Responsable**.
3. Ouvrir une demande annulable.
4. Vérifier que l'action **Annuler la demande** est disponible.

### Scénario 3 — administrateur

1. Changer l'utilisateur vers **Amin Admin**.
2. Vérifier que le rôle affiché est **Administrateur**.
3. Vérifier que le reset démo est autorisé.
4. Exécuter le reset démo si nécessaire.
5. Vérifier que l'utilisateur courant reste **Amin Admin** après reset.

### Scénario 4 — profils lecture seule

1. Changer l'utilisateur vers **Alice Demandeur**.
2. Vérifier que les actions workflow sont bloquées.
3. Vérifier le message d'action non autorisée.
4. Changer l'utilisateur vers **Victor Lecteur**.
5. Vérifier que les actions workflow restent bloquées.

### Scénario 5 — persistance locale

1. Sélectionner **Maya Responsable**.
2. Recharger ou remonter la démonstration.
3. Vérifier que **Maya Responsable** reste sélectionnée.

### Limites

- il ne s'agit pas d'une authentification réelle ;
- aucun login réel n'est introduit ;
- aucun mot de passe n'est introduit ;
- aucun token n'est introduit ;
- aucun OAuth/JWT/SSO n'est introduit ;
- aucun Entra ID n'est introduit ;
- aucune session backend n'est introduite ;
- l'utilisateur courant est stocké localement via `interv360:current-user-id`.

En mode local, les utilisateurs proviennent de `DEMO_USERS` côté frontend. En mode API, voir [Contrôle — Backend Users & Session](#contrôle--backend-users--session).

---

## Contrôle — Backend Users & Session

Interv360 dispose désormais d'un socle utilisateurs côté backend.

En mode API, le frontend charge les utilisateurs depuis :

```text
GET /api/v1/users
```

Le user switcher reste visible côté frontend, mais la source des utilisateurs dépend du mode utilisé.

### Sources utilisateurs

| Mode | Source utilisateurs | Session locale |
|------|---------------------|----------------|
| Local | `DEMO_USERS` frontend | `interv360:current-user-id` |
| API | `GET /api/v1/users` | `interv360:current-user-id` validé contre la liste API |

### Utilisateurs backend seedés

| Utilisateur | ID | Rôle |
|-------------|----|------|
| Alice Demandeur | `user-requester` | `requester` |
| Théo Technicien | `user-technician` | `technician` |
| Maya Responsable | `user-manager` | `manager` |
| Amin Admin | `user-admin` | `admin` |
| Victor Lecteur | `user-viewer` | `viewer` |

Utilisateur par défaut :

```text
user-technician
```

### Contrôle API users

1. Lancer le backend.
2. Appeler `GET /api/v1/users`.
3. Vérifier que la réponse contient 5 utilisateurs actifs.
4. Vérifier que les champs retournés sont :
   - `id`
   - `displayName`
   - `email`
   - `role`
   - `team`
   - `isActive`
5. Vérifier qu'aucun champ sensible n'est retourné :
   - `password`
   - `passwordHash`
   - `token`
   - `provider`
   - `externalId`

### Contrôle frontend en mode API

1. Lancer le frontend en mode API.
2. Vérifier que le user switcher affiche les utilisateurs issus du backend.
3. Vérifier que l'utilisateur par défaut est **Théo Technicien** si aucun utilisateur valide n'est stocké.
4. Sélectionner **Maya Responsable**.
5. Vérifier que la sélection est persistée via `interv360:current-user-id`.
6. Vérifier que le rôle affiché est **Responsable**.
7. Vérifier que les permissions restent cohérentes avec le rôle.

### Contrôle fallback

1. Stocker un utilisateur inconnu dans `interv360:current-user-id`.
2. Recharger l'application en mode API.
3. Vérifier que l'application revient vers `user-technician` si disponible.
4. Si `user-technician` n'est pas disponible, vérifier le fallback vers le premier utilisateur actif.

### Contrôle transitions

Les transitions workflow acceptent désormais un acteur optionnel en mode API.

Le payload minimal reste compatible :

```json
{
  "action": "<action>"
}
```

En mode API, le frontend peut aussi envoyer `actorUserId` (voir [Contrôle — Audit Trail enrichi](#contrôle--audit-trail-enrichi)).

Le frontend ne doit pas envoyer :

- `userId`
- `session`
- `token`
- `password`
- `passwordHash`

### Limites confirmées

Ce lot n'introduit pas :

- login réel ;
- logout ;
- mot de passe ;
- hash de mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- session backend réelle ;
- audit trail complet ;
- CRM ;
- données réelles.

---

## Contrôle — Audit Trail enrichi

Interv360 dispose désormais d'un audit trail enrichi.

En mode API, le frontend envoie l'utilisateur courant lors des transitions workflow.

Payload transition attendu :

```json
{
  "action": "qualify",
  "actorUserId": "user-technician"
}
```

`actorUserId` reste optionnel côté backend afin de conserver la compatibilité avec les anciens appels.

### Champs persistés

Lorsqu'un acteur valide est fourni, l'événement workflow conserve :

| Champ | Description |
|-------|-------------|
| `action` | Action workflow exécutée |
| `fromStatus` | Statut avant transition |
| `toStatus` | Statut après transition |
| `actorUserId` | Identifiant utilisateur |
| `actorDisplayName` | Nom affiché de l'utilisateur au moment de l'action |
| `actorRole` | Rôle de l'utilisateur au moment de l'action |

L'acteur est stocké sous forme de snapshot afin de rendre l'historique lisible même si l'affichage utilisateur évolue plus tard.

### Contrôle API transitions avec acteur

1. Lancer le backend.
2. Lancer le frontend en mode API.
3. Vérifier que l'utilisateur courant est **Théo Technicien** par défaut.
4. Exécuter une transition, par exemple **Qualifier la demande**.
5. Vérifier que la transition API envoie :
   - `action`
   - `actorUserId`
6. Vérifier que la transition n'envoie pas :
   - `token`
   - `session`
   - `password`
   - `passwordHash`

### Contrôle API events enrichis

Appeler :

```bash
curl -s http://localhost:3001/api/v1/requests/SAV-DEMO-001/events
```

Réponse attendue :

```json
{
  "items": [
    {
      "id": "evt-...",
      "requestId": "SAV-DEMO-001",
      "type": "qualification.confirmed",
      "label": "Demande qualifiée",
      "action": "qualify",
      "fromStatus": "STAT-01",
      "toStatus": "STAT-02",
      "actorUserId": "user-technician",
      "actorDisplayName": "Théo Technicien",
      "actorRole": "technician",
      "createdAt": "..."
    }
  ]
}
```

Les événements historiques sans acteur restent compatibles.

### Contrôle journal frontend

Dans le journal, vérifier que l'événement affiche si disponible :

- le message métier ;
- l'acteur ;
- le rôle ;
- l'action ;
- la transition de statut.

Exemple attendu :

```text
Demande qualifiée
Par Théo Technicien — technician
Action : qualify
STAT-01 → STAT-02
```

Si un ancien événement ne contient pas d'acteur, le journal reste lisible et ne doit pas afficher `undefined` ou `null`.

### Contrôle changement utilisateur

1. Sélectionner **Maya Responsable**.
2. Exécuter une action autorisée.
3. Vérifier que `actorUserId` vaut `user-manager`.
4. Vérifier que le journal affiche **Maya Responsable**.

### Limites confirmées

Ce lot n'introduit pas :

- authentification réelle ;
- login ;
- logout ;
- mot de passe ;
- hash de mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- session backend réelle ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08`.

---

## Contrôle — Request Model enrichi

Interv360 dispose désormais d'un modèle `Request` enrichi pour le MVP produit.

Le modèle demande conserve les champs historiques et ajoute des informations métier structurantes :

| Champ | Usage |
|-------|-------|
| `requesterName` | Demandeur de l'intervention |
| `requesterTeam` | Équipe demandeuse |
| `assignedToUserId` | Référence optionnelle vers un utilisateur backend |
| `assignedToDisplayName` | Affichage de l'affectation |
| `customerLabel` | Champ legacy conservé |
| `assignedTechnicianLabel` | Champ legacy conservé |

Les champs legacy restent conservés afin de garantir la compatibilité de l'interface et des données existantes.

### Contrôle API liste

Appeler :

```bash
curl -s http://localhost:3001/api/v1/requests
```

Réponse attendue :

```json
{
  "items": [
    {
      "id": "SAV-DEMO-001",
      "title": "...",
      "requesterName": "Alice Demandeur",
      "requesterTeam": "Centre demandeur",
      "assignedToUserId": "user-technician",
      "assignedToDisplayName": "Théo Technicien",
      "customerLabel": "...",
      "assignedTechnicianLabel": "...",
      "priority": "high",
      "criticality": "urgent"
    }
  ]
}
```

### Contrôle API détail

Appeler :

```bash
curl -s http://localhost:3001/api/v1/requests/SAV-DEMO-001
```

Réponse attendue :

```json
{
  "request": {
    "id": "SAV-DEMO-001",
    "requesterName": "Alice Demandeur",
    "requesterTeam": "Centre demandeur",
    "assignedToUserId": "user-technician",
    "assignedToDisplayName": "Théo Technicien"
  },
  "detail": {
    "businessImpact": "...",
    "equipmentLabel": "...",
    "siteLabel": "..."
  }
}
```

### Contrôle frontend

Dans le frontend :

1. ouvrir une demande ;
2. vérifier l'affichage du demandeur ;
3. vérifier l'affichage de l'équipe demandeuse si disponible ;
4. vérifier l'affichage de l'affectation ;
5. vérifier que les champs historiques restent visibles ;
6. vérifier que la liste des demandes reste lisible ;
7. vérifier que la recherche retrouve une demande par :
   - demandeur ;
   - équipe ;
   - affectation ;
   - catégorie ;
   - équipement.

### Contrôle mode local / mode API

Le seed local frontend et le seed backend sont alignés sur les demandes fictives principales.

Exemples attendus :

| Demande | Demandeur | Équipe | Affectation |
|---------|-----------|--------|-------------|
| SAV-DEMO-001 | Alice Demandeur | Centre demandeur | Théo Technicien |
| SAV-DEMO-002 | Maya Responsable | Pilotage SAV | Théo Technicien |
| SAV-DEMO-003 | Alice Demandeur | Centre demandeur | Théo Technicien |

### Limites confirmées

Ce lot n'introduit pas :

- CRUD complet ;
- formulaire de création de demande ;
- nouveau statut ;
- `STAT-08` ;
- authentification réelle ;
- login ;
- logout ;
- mot de passe ;
- hash de mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles.

---

## Contrôle — API Product Hardening

Interv360 dispose désormais d'un contrat API durci pour les usages MVP.

Le durcissement API confirme :

- les endpoints produit disponibles ;
- les formats de réponse existants ;
- le format d'erreur structuré ;
- les validations de transition ;
- la compatibilité frontend en mode API ;
- l'absence de fallback silencieux vers le mode local.

### Endpoints API consolidés

| Endpoint | Méthode | Usage |
|----------|---------|-------|
| `/health` | GET | Santé backend |
| `/api/v1/users` | GET | Liste des utilisateurs fictifs backend |
| `/api/v1/requests` | GET | Liste des demandes enrichies |
| `/api/v1/requests/:id` | GET | Détail d'une demande enrichie |
| `/api/v1/requests/:id/transitions` | POST | Transition workflow |
| `/api/v1/requests/:id/events` | GET | Journal enrichi |
| `/api/v1/demo/reset` | POST | Reset démonstration |

### Format d'erreur API

Les erreurs API produit utilisent le format :

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

Le champ `code` est le contrat stable.

Le champ `message` reste lisible pour l'interface et les contrôles.

### Codes d'erreur consolidés

| Code | HTTP | Cas |
|------|------|-----|
| `REQUEST_NOT_FOUND` | 404 | Demande inconnue |
| `INVALID_TRANSITION_ACTION` | 400 | Action absente, vide, non string ou inconnue |
| `TRANSITION_NOT_ALLOWED` | 409 | Transition métier impossible |
| `INVALID_JSON_BODY` | 400 | Body JSON invalide |
| `INVALID_ACTOR_USER` | 400 | Acteur inconnu, inactif ou invalide |
| `USER_NOT_FOUND` | 404 | Utilisateur inconnu si cas exposé |
| `DEMO_MODE_REQUIRED` | 403 | Reset indisponible hors mode démo |
| `INTERNAL_ERROR` | 500 | Erreur interne maîtrisée |
| `ROUTE_NOT_FOUND` | 404 | Route API inconnue |

Décisions confirmées :

- `METHOD_NOT_ALLOWED` est reporté ;
- `DEMO_RESET_FAILED` n'est pas ajouté artificiellement ;
- aucune stack trace n'est exposée dans les erreurs API testées.

### Contrôles curl erreurs

Route API inconnue :

```bash
curl -s http://localhost:3001/api/v1/unknown
```

Attendu :

```json
{
  "error": {
    "code": "ROUTE_NOT_FOUND",
    "message": "API route not found."
  }
}
```

Action vide :

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":""}'
```

Attendu :

```json
{
  "error": {
    "code": "INVALID_TRANSITION_ACTION",
    "message": "Transition action is required."
  }
}
```

Acteur invalide :

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"qualify","actorUserId":"unknown"}'
```

Attendu :

```json
{
  "error": {
    "code": "INVALID_ACTOR_USER",
    "message": "Actor user is invalid or inactive."
  }
}
```

Transition métier interdite :

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"close_report"}'
```

Attendu :

```json
{
  "error": {
    "code": "TRANSITION_NOT_ALLOWED",
    "message": "..."
  }
}
```

JSON invalide :

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":'
```

Attendu :

```json
{
  "error": {
    "code": "INVALID_JSON_BODY",
    "message": "Request body must be valid JSON."
  }
}
```

### Contrôle frontend

En mode API :

1. lancer backend + frontend ;
2. vérifier le badge **Mode API local** ;
3. arrêter le backend ;
4. recharger le frontend ;
5. vérifier qu'un message explicite est affiché ;
6. vérifier qu'il n'y a pas de fallback silencieux vers le mode local.

Le frontend consomme les erreurs structurées via :

- `error.message` en priorité ;
- `error.code` en fallback ;
- un fallback générique si le payload n'est pas exploitable.

### Limites confirmées

Ce lot n'introduit pas :

- CRUD complet ;
- formulaire de création de demande ;
- authentification réelle ;
- login ;
- logout ;
- mot de passe ;
- hash de mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- pagination avancée ;
- tri avancé ;
- versioning API complexe.

---

## 8. Preuves techniques à présenter

| Preuve | Commande / contrôle | Attendu |
|--------|---------------------|---------|
| Frontend build | `npm run build` dans `projects/interv360/app` | OK |
| Frontend tests | `npm run test -- --run` dans `projects/interv360/app` | 187 tests ou plus |
| Backend build | `npm run build` dans `projects/interv360/backend` | OK |
| Backend tests | `npm run test` dans `projects/interv360/backend` | 125 tests ou plus |
| API health | `GET /health` | OK |
| Liste demandes | `GET /api/v1/requests` | demandes fictives enrichies |
| Détail demande | `GET /api/v1/requests/SAV-DEMO-001` | champs productisés et enrichis présents |
| Reset API | `POST /api/v1/demo/reset` | `{ status, mode, requestsCount }` |
| Erreur demande inconnue | transition sur demande inconnue | `404 REQUEST_NOT_FOUND` |
| Erreur action invalide | action absente / inconnue | `400 INVALID_TRANSITION_ACTION` |
| Erreur transition métier | transition non autorisée | `409 TRANSITION_NOT_ALLOWED` |
| Erreur JSON invalide | body JSON invalide | `400 INVALID_JSON_BODY` |
| Route API inconnue | `GET /api/v1/unknown` | `404 ROUTE_NOT_FOUND` |
| Erreur structurée | cas API connu | `{ error: { code, message } }` sans `stack` |

---

## 9. Curl essentiels pour la démonstration API

Avec le backend lancé sur `http://localhost:3001` :

**Health :**

```bash
curl -s http://localhost:3001/health
```

**Liste des demandes enrichies :**

```bash
curl -s http://localhost:3001/api/v1/requests
```

Champs enrichis attendus :

- `requesterName`
- `requesterTeam`
- `assignedToUserId`
- `assignedToDisplayName`

Champs legacy conservés :

- `customerLabel`
- `assignedTechnicianLabel`

**Détail d’une demande enrichie** (vérifier aussi `requestedDate`, `equipmentLabel`, `businessImpact`, `siteLabel`) :

```bash
curl -s http://localhost:3001/api/v1/requests/SAV-DEMO-001
```

**Transition nominale :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"qualify"}'
```

**Transition avec acteur :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"qualify","actorUserId":"user-technician"}'
```

**Journal enrichi :**

```bash
curl -s http://localhost:3001/api/v1/requests/SAV-DEMO-001/events
```

**Erreur acteur invalide :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":"qualify","actorUserId":"unknown"}'
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

**Route API inconnue :**

```bash
curl -s http://localhost:3001/api/v1/unknown
```

Attendu : `404 ROUTE_NOT_FOUND`.

**Action vide :**

```bash
curl -s -X POST http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions \
  -H 'Content-Type: application/json' \
  -d '{"action":""}'
```

Attendu : `400 INVALID_TRANSITION_ACTION`.

**Attendus erreurs API :**

- `REQUEST_NOT_FOUND` en `404` ;
- `INVALID_TRANSITION_ACTION` en `400` ;
- `INVALID_ACTOR_USER` en `400` (acteur inconnu ou inactif) ;
- `TRANSITION_NOT_ALLOWED` en `409` ;
- `INVALID_JSON_BODY` en `400` ;
- `ROUTE_NOT_FOUND` en `404`.

Réponse events : `{ "items": [...] }`.

Les transitions sans `actorUserId` restent compatibles.

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

- authentification réelle ;
- utilisateurs réels ;
- OAuth / JWT / SSO ;
- base users complète ;
- CRM ;
- données réelles ;
- statut `STAT-08` (requalification différée) ;
- production ;
- supervision ;
- déploiement cloud ;
- multi-tenant ;
- audit réglementaire.

**Simulation de rôle (frontend uniquement) :**

- rôle actif simulé avec sélecteur ;
- permissions différenciées selon le rôle ;
- reset démo réservé au rôle `admin` côté frontend ;
- aucune sécurité backend associée.

Ces sujets nécessitent un cadrage dédié avant implémentation.

**Garde-fous opérationnels :**

- données fictives uniquement ;
- mode local par défaut ;
- backend non obligatoire pour présentation standard ;
- pas de fallback automatique silencieux ;
- persistance SQLite côté backend uniquement (pas de SQL navigateur) ;
- workflow nominal (STAT-01 → STAT-06) avec extension légère (`STAT-05` En attente, `STAT-07` Annulée).

---

## 11. Récit de démonstration synthétique

Le récit recommandé :

1. Interv360 part d’un besoin simple : suivre et qualifier des demandes d’intervention.
2. Le produit propose une liste de demandes fictives mais structurées.
3. Chaque demande dispose d’une fiche enrichie avec site, date de demande, équipement, impact court et impact métier.
4. Le workflow nominal permet de qualifier, planifier, réaliser puis clôturer une intervention ; l’extension légère permet mise en attente, reprise et annulation ; la requalification légère permet de revenir vers `STAT-02` depuis `STAT-02`, `STAT-03` ou `STAT-05`.
5. Le frontend peut fonctionner seul en mode local pour une démo rapide.
6. Le même parcours peut être connecté à une API locale persistante avec SQLite.
7. Les erreurs API sont structurées et testées.
8. Le reset permet de rejouer la démonstration (rôle **Administrateur** requis côté frontend).
9. Une simulation de rôle frontend permet de démontrer les responsabilités sans auth réelle.
10. Les limites restent explicites : pas d’auth réelle, pas de base users, pas de CRM ni workflow étendu.

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
