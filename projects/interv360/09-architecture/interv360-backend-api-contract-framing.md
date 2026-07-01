# Interv360 — Backend API Contract Framing

**Projet** : Interv360  
**Cycle** : Backend API Contract Framing  
**Mode** : SFIA Fast Delivery documentaire  
**Statut** : Cadrage contrat API  
**Branche** : `architecture/interv360-backend-api-contract-framing`

---

## 1. Objectif

Ce document cadre le contrat API REST minimal du futur prototype backend connecté Interv360.

Il ne lance aucune implémentation.

L'objectif est de définir :

- les endpoints minimaux ;
- les payloads attendus ;
- les réponses nominales ;
- les erreurs ;
- les règles de transition ;
- le reset démo ;
- les garde-fous API.

---

## 2. Point de départ

Les décisions précédentes ont retenu :

| Document | Décision clé |
|----------|--------------|
| [`interv360-backend-target-framing.md`](./interv360-backend-target-framing.md) | Prototype connecté minimal |
| [`interv360-backend-data-model-decision.md`](./interv360-backend-data-model-decision.md) | `Request`, `RequestDetail`, `WorkflowEvent`, enums nominales |
| [`interv360-backend-technical-stack-decision.md`](./interv360-backend-technical-stack-decision.md) | Node.js / TypeScript, Express, REST, JSON fichier serveur |

Contraintes transverses :

- données fictives uniquement ;
- authentification hors périmètre immédiat ;
- CRM hors périmètre ;
- DB SQL hors périmètre premier palier ;
- workflow nominal STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06 uniquement.

Le futur contrat API doit permettre :

- lire la liste des demandes ;
- lire le détail d'une demande ;
- lire le journal d'une demande ;
- appliquer une transition nominale ;
- réinitialiser le seed fictif.

### Alignement avec le démonstrateur local

Les transitions et types d'événements s'alignent sur `requestsRepository.ts` :

| Action API | Fonction locale | Event type | Libellé indicatif |
|------------|-----------------|------------|-------------------|
| `qualify` | `qualifyDemoRequest` | `qualification.confirmed` | Qualification fictive confirmée |
| `plan` | `planDemoIntervention` | `planning.confirmed` | Planification fictive confirmée |
| `complete_intervention` | `completeDemoIntervention` | `intervention.completed` | Intervention fictive réalisée |
| `close_report` | `closeDemoRequest` | `report.closed` | Compte rendu fictif clôturé |

Le seed actuel comporte **3 demandes fictives** (`SAV-DEMO-001`, `SAV-DEMO-002`, `SAV-DEMO-003`).

---

## 3. Réflexion d'optimisation SFIA

Le contrat API est le **dernier cadrage documentaire** avant un futur prototype backend minimal.

Il ne faut pas encore implémenter, car le contrat doit stabiliser l'interface entre frontend et backend.

Décision de méthode :

- conserver **Fast Delivery documentaire** ;
- produire un seul document de contrat ;
- cadrer endpoints, payloads et erreurs ;
- ne pas créer de code backend ;
- ne pas créer de mocks ou tests à ce stade.

---

## 4. Principes du contrat API

Le contrat doit rester :

- minimal ;
- REST ;
- JSON ;
- lisible ;
- aligné avec le modèle retenu ;
- compatible avec Express ;
- limité aux données fictives ;
- centré sur le workflow nominal ;
- testable dans un futur cycle.

Le contrat ne doit pas couvrir :

- CRM ;
- authentification ;
- droits utilisateurs ;
- données réelles ;
- pagination avancée ;
- reporting ;
- recherche serveur ;
- STAT-05 / STAT-07 / STAT-08 ;
- production.

---

## 5. Ressources API retenues

| Ressource | Méthode | Rôle |
|-----------|---------|------|
| `/health` | GET | Vérification simple du backend local |
| `/requests` | GET | Liste des demandes |
| `/requests/:id` | GET | Détail complet d'une demande |
| `/requests/:id/events` | GET | Journal d'une demande |
| `/requests/:id/transitions` | POST | Application d'une transition |
| `/demo/reset` | POST | Réinitialisation du seed fictif |

**Préfixe recommandé :** `/api/v1` (optionnel au prototype ; ex. `GET /api/v1/requests`).

---

## 6. Endpoint `GET /health`

### Objectif

Vérifier que le backend local répond.

### Réponse `200`

```json
{
  "status": "ok",
  "mode": "demo"
}
```

### Garde-fou

Ne pas exposer d'informations techniques sensibles (versions internes, chemins fichiers, secrets).

---

## 7. Endpoint `GET /requests`

### Objectif

Retourner la liste légère des demandes.

### Réponse `200`

```json
{
  "items": [
    {
      "id": "SAV-DEMO-001",
      "title": "Machine client en panne intermittente",
      "status": "STAT-01",
      "priority": "high",
      "criticality": "urgent",
      "customerLabel": "Client Démo Industrie",
      "siteLabel": "Lyon Démo",
      "assignedTechnicianLabel": "Technicien Démo 01",
      "createdAt": "2026-03-12T07:30:00.000Z",
      "updatedAt": "2026-03-12T07:30:00.000Z",
      "detailId": "SAV-DEMO-001",
      "isDemo": true
    }
  ]
}
```

### Règles

- retourner uniquement les demandes fictives ;
- ne pas inclure le détail complet (`RequestDetail`) ;
- filtres et recherche restent côté frontend au premier palier ;
- aucun client réel ;
- `isDemo: true` obligatoire sur chaque item.

---

## 8. Endpoint `GET /requests/:id`

### Objectif

Retourner une demande complète avec son détail.

### Réponse `200`

```json
{
  "request": {
    "id": "SAV-DEMO-001",
    "title": "Machine client en panne intermittente",
    "status": "STAT-01",
    "priority": "high",
    "criticality": "urgent",
    "customerLabel": "Client Démo Industrie",
    "siteLabel": "Lyon Démo",
    "assignedTechnicianLabel": "Technicien Démo 01",
    "createdAt": "2026-03-12T07:30:00.000Z",
    "updatedAt": "2026-03-12T07:30:00.000Z",
    "detailId": "SAV-DEMO-001",
    "isDemo": true
  },
  "detail": {
    "id": "SAV-DEMO-001",
    "requestId": "SAV-DEMO-001",
    "category": "Panne machine",
    "channel": "Portail démo",
    "impact": "Production démo limitée",
    "demoCenter": "Centre démo Nord",
    "description": "Panne intermittente constatée sur une machine de démonstration.",
    "readonlyBlocks": {
      "qualification": {
        "summary": "Contexte confirmé, intervention nécessaire.",
        "checklist": ["Contexte de panne confirmé", "Impact démonstration identifié"],
        "notes": "Qualification fictive préparée pour démonstration readonly."
      },
      "planning": {
        "slot": "J+1 matin",
        "technician": "Technicien Démo 01",
        "notes": "Créneau fictif proposé pour démonstration readonly."
      },
      "intervention": {
        "location": "Zone Démo Atelier",
        "window": "J+1 matin",
        "notes": "Intervention fictive préparée pour démonstration readonly.",
        "safetyChecklist": ["Accès site fictif confirmé"]
      },
      "report": {
        "summary": "Contrôle effectué sur scénario de démonstration.",
        "result": "Remise en service fictive confirmée.",
        "notes": "Compte rendu fictif préparé pour démonstration readonly.",
        "checklist": ["Diagnostic démo consulté"]
      }
    }
  }
}
```

> **Note (batch `request-model-productization`)** : le payload `detail` a été enrichi avec `requestedDate`, `equipmentLabel` et `businessImpact`. `category` et `siteLabel` (côté `request`) sont productisés comme champs métier exposés. `businessImpact` est distinct du libellé court `impact`. Aucun changement d’endpoint ni de contrat d’erreur.

### Erreur `404`

```json
{
  "error": {
    "code": "REQUEST_NOT_FOUND",
    "message": "Request not found"
  }
}
```

---

## 9. Endpoint `GET /requests/:id/events`

### Objectif

Retourner le journal d'une demande, ordonné par `createdAt` croissant.

### Réponse `200`

```json
{
  "items": [
    {
      "id": "evt-demo-001",
      "requestId": "SAV-DEMO-001",
      "type": "qualification.confirmed",
      "fromStatus": "STAT-01",
      "toStatus": "STAT-02",
      "label": "Qualification fictive confirmée",
      "createdAt": "2026-03-12T08:10:00.000Z",
      "source": "demo",
      "isDemo": true
    }
  ]
}
```

Liste vide `[]` si aucun événement (état initial après seed ou reset).

### Erreur `404`

```json
{
  "error": {
    "code": "REQUEST_NOT_FOUND",
    "message": "Request not found"
  }
}
```

---

## 10. Endpoint `POST /requests/:id/transitions`

### Objectif

Appliquer une transition nominale à une demande.

### Requête

```json
{
  "action": "qualify"
}
```

### Actions autorisées

| Action | Depuis | Vers | Event type |
|--------|--------|------|------------|
| `qualify` | STAT-01 | STAT-02 | `qualification.confirmed` |
| `plan` | STAT-02 | STAT-03 | `planning.confirmed` |
| `complete_intervention` | STAT-03 | STAT-04 | `intervention.completed` |
| `close_report` | STAT-04 | STAT-06 | `report.closed` |

### Réponse `200`

```json
{
  "request": {
    "id": "SAV-DEMO-001",
    "status": "STAT-02",
    "updatedAt": "2026-03-12T08:10:00.000Z",
    "isDemo": true
  },
  "event": {
    "id": "evt-demo-001",
    "requestId": "SAV-DEMO-001",
    "type": "qualification.confirmed",
    "fromStatus": "STAT-01",
    "toStatus": "STAT-02",
    "label": "Qualification fictive confirmée",
    "createdAt": "2026-03-12T08:10:00.000Z",
    "source": "demo",
    "isDemo": true
  }
}
```

La réponse peut inclure la demande complète ; le minimum requis est `id`, `status`, `updatedAt`, `isDemo` + l'événement créé.

### Erreurs

**`400` — `INVALID_TRANSITION_ACTION`**

```json
{
  "error": {
    "code": "INVALID_TRANSITION_ACTION",
    "message": "Invalid transition action"
  }
}
```

**`409` — `TRANSITION_NOT_ALLOWED`**

```json
{
  "error": {
    "code": "TRANSITION_NOT_ALLOWED",
    "message": "Transition not allowed from current status"
  }
}
```

**`404` — `REQUEST_NOT_FOUND`**

```json
{
  "error": {
    "code": "REQUEST_NOT_FOUND",
    "message": "Request not found"
  }
}
```

### Règles

- le backend valide la transition (statut courant + action) ;
- STAT-06 est terminal — toute transition refusée ;
- aucune transition hors nominal n'est acceptée ;
- chaque transition réussie crée un événement journal ;
- `updatedAt` est mis à jour (ISO 8601) ;
- les données restent fictives (`isDemo: true`) ;
- le champ `label` de l'événement est dérivé de l'action (libellés alignés sur l'app locale).

---

## 11. Endpoint `POST /demo/reset`

### Objectif

Restaurer le seed fictif de démonstration (équivalent `resetDemoData()` côté app).

### Requête

Aucun body obligatoire.

### Réponse `200`

```json
{
  "status": "reset",
  "mode": "demo",
  "requestsCount": 3
}
```

### Règles

- restaurer les demandes et détails fictifs depuis le seed ;
- **vider le journal** (aligné data model decision et reset local) ;
- ne fonctionner qu'en mode démo (`DEMO_MODE=true` ou équivalent) ;
- ne jamais toucher de données réelles ;
- remettre les statuts initiaux du seed (`SAV-DEMO-001` en STAT-01, etc.).

### Erreur `403` — `DEMO_MODE_REQUIRED`

```json
{
  "error": {
    "code": "DEMO_MODE_REQUIRED",
    "message": "Demo mode is required"
  }
}
```

---

## 12. Format d'erreur standard

Toutes les erreurs suivent le format :

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

### Codes minimaux

| Code | HTTP | Usage |
|------|------|-------|
| `REQUEST_NOT_FOUND` | 404 | Demande inexistante |
| `INVALID_TRANSITION_ACTION` | 400 | Action non reconnue |
| `TRANSITION_NOT_ALLOWED` | 409 | Transition invalide depuis le statut courant |
| `DEMO_MODE_REQUIRED` | 403 | Reset hors mode démo |
| `INTERNAL_ERROR` | 500 | Erreur inattendue |

---

## 13. Contrat de transition

### Table de décision

| Statut courant | Action | Statut cible | Autorisé |
|----------------|--------|--------------|----------|
| STAT-01 | `qualify` | STAT-02 | Oui |
| STAT-02 | `plan` | STAT-03 | Oui |
| STAT-03 | `complete_intervention` | STAT-04 | Oui |
| STAT-04 | `close_report` | STAT-06 | Oui |
| STAT-06 | any | — | **Non** |
| autre combinaison | any | — | **Non** |

**Décision :** la table de transition est **portée par le backend**. Le frontend peut afficher les actions disponibles selon le statut, mais ne fait pas foi pour la validation.

---

## 14. Tests API attendus dans le futur prototype

Tests minimaux :

- `GET /health` retourne `ok` ;
- `GET /requests` retourne 3 demandes fictives ;
- `GET /requests/:id` retourne `request` + `detail` ;
- `GET /requests/:id` inconnu retourne `REQUEST_NOT_FOUND` ;
- `GET /requests/:id/events` retourne le journal de la demande ;
- `POST /requests/:id/transitions` applique une transition valide ;
- transition invalide retourne `TRANSITION_NOT_ALLOWED` ;
- action inconnue retourne `INVALID_TRANSITION_ACTION` ;
- STAT-06 refuse toute transition ;
- `POST /demo/reset` restaure le seed et vide le journal ;
- aucune réponse ne contient de donnée réelle ;
- toutes les entités exposées ont `isDemo: true`.

---

## 15. Garde-fous API

Un futur prototype doit respecter :

- données fictives uniquement ;
- `isDemo: true` sur les entités principales ;
- pas de CRM ;
- pas de données personnelles ;
- pas d'authentification réelle ;
- pas de multi-utilisateur ;
- pas de STAT-05 / STAT-07 / STAT-08 ;
- pas de SQL au premier palier JSON ;
- erreurs standardisées ;
- transitions validées côté backend ;
- CORS limité au frontend local en développement.

---

## 16. Décisions ouvertes

| Décision | Statut | Commentaire |
|----------|--------|-------------|
| Recherche serveur | Non retenue premier palier | Frontend conserve recherche locale |
| Pagination | Non retenue premier palier | Jeu de données fictif limité (3 demandes) |
| Reset journal | Recommandé vider | Aligné data model et reset local |
| Préfixe `/api/v1` | Ouvert | Recommandé pour évolutivité |
| CORS local | À cadrer implémentation | Ex. frontend `:5173`, backend `:3001` |
| Port backend | À cadrer implémentation | Ex. 3001 ou 4000 |
| Partage types | Ouvert | Package partagé ou duplication prudente |
| Swagger / OpenAPI | Non retenu au départ | Possible plus tard |
| Connexion frontend → API | Hors ce cycle | Décision séparée après prototype backend |

---

## 17. Décision proposée

- Retenir les endpoints : `/health`, `/requests`, `/requests/:id`, `/requests/:id/events`, `/requests/:id/transitions`, `/demo/reset`
- Retenir REST JSON minimal
- Retenir un format d'erreur standard
- Retenir une table de transition backend (4 actions nominales)
- Garder recherche / filtres côté frontend au premier palier
- Reporter pagination, auth, CRM, OpenAPI
- Maintenir données fictives uniquement
- Aligner libellés d'événements et seed sur le démonstrateur local actuel

---

## 18. Prochaine étape recommandée

**Cycle recommandé :** `delivery/interv360-backend-minimal-prototype`

Objectif :

- créer le backend minimal (`projects/interv360/backend` probable) ;
- implémenter les endpoints cadrés ;
- stocker le seed fictif en JSON fichier serveur ;
- ajouter tests unitaires et API ;
- ne pas connecter le frontend au backend dans un premier temps sauf décision séparée.

**Alternative :** `architecture/interv360-backend-repo-organization-decision`

Si l'organisation du repo ou le partage de types doit être décidé avant implémentation.

**Ordre recommandé :**

1. modèle de données ;
2. stack technique ;
3. contrat API (ce cycle) ;
4. prototype backend minimal ;
5. (optionnel) connexion frontend.

---

## 19. Validation

| Contrôle | Résultat |
|----------|----------|
| Code applicatif modifié | Non |
| Backend implémenté | Non |
| API créée | Non |
| DB créée | Non |
| SQL écrit | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 20. Décision finale

Ce cycle clôt le cadrage du contrat API backend minimal.

**Contrat retenu :**

```text
GET  /health
GET  /requests
GET  /requests/:id
GET  /requests/:id/events
POST /requests/:id/transitions
POST /demo/reset
```

Le passage à l'implémentation reste conditionné à une décision de lancement du cycle **prototype backend minimal**.

La chaîne documentaire architecture backend est complète :

1. cadrage cible → 2. modèle de données → 3. stack technique → 4. contrat API.
