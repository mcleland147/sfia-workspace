# Interv360 — API Product Hardening

**Projet** : Interv360  
**Cycle** : API Product Hardening  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 4  
**Branche** : `delivery/interv360-api-product-hardening`

---

## 1. Objectif

Ce lot durcit l'API Interv360 afin de la rendre plus propre, plus homogène, plus testable et plus exploitable côté produit.

L'objectif est de consolider le contrat API après les lots :

- Backend Users & Session ;
- Audit Trail ;
- Request Model Finalization.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `./audit-trail.md`
- `./request-model-finalization.md`
- `../08-presentation/interv360-e2e-demo-runbook.md`

Décision roadmap :

- le Lot 1 Backend Users & Session est clôturé ;
- le Lot 2 Audit Trail est clôturé ;
- le Lot 3 Request Model Finalization est clôturé ;
- le Lot 4 prioritaire est le durcissement API produit.

---

## 3. Point de départ

Interv360 dispose déjà :

- d'un backend Node.js / TypeScript ;
- d'une persistance SQLite locale ;
- d'une API `/api/v1` ;
- d'un frontend connecté en mode API ;
- d'un mode local conservé ;
- d'un endpoint users ;
- d'un modèle Request enrichi ;
- d'un audit trail enrichi ;
- de transitions workflow testées ;
- d'un reset démo ;
- d'erreurs API déjà structurées sur certains cas ;
- de tests backend/frontend.

Limite actuelle :

> l'API fonctionne, mais son contrat doit être durci et homogénéisé avant finalisation UX et industrialisation.

---

## 4. Problème à résoudre

Le produit ne peut pas être considéré comme finalisable tant que le contrat API n'est pas suffisamment clair sur :

- les endpoints disponibles ;
- les formes de réponses ;
- les formes d'erreurs ;
- les codes d'erreur ;
- les validations d'entrée ;
- la compatibilité frontend ;
- les limites assumées ;
- les garde-fous de sécurité.

---

## 5. Périmètre du lot

À livrer :

- cadrage du contrat API cible ;
- audit des endpoints existants ;
- audit des erreurs existantes ;
- décision d'homogénéisation des erreurs ;
- durcissement des validations backend si nécessaire ;
- tests API renforcés ;
- ajustements frontend uniquement si nécessaires pour compatibilité ;
- documentation README / runbook ;
- PR unique en fin de lot.

---

## 6. Hors scope

Ce lot n'introduit pas :

- auth réelle ;
- login réel ;
- logout réel ;
- mot de passe ;
- hash de mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- multi-tenant ;
- moteur BPMN ;
- nouveau statut ;
- `STAT-08` ;
- nouveau workflow ;
- nouvelle action métier ;
- CRUD complet ;
- formulaire création demande ;
- administration utilisateurs ;
- reporting avancé ;
- notifications ;
- pagination avancée ;
- tri avancé ;
- versioning API complexe.

---

## 7. Contrat API cible minimal

Endpoints à consolider :

| Endpoint | Objectif |
|----------|----------|
| `GET /health` | Santé backend |
| `GET /api/v1/users` | Liste users fictifs backend |
| `GET /api/v1/requests` | Liste demandes enrichies |
| `GET /api/v1/requests/:id` | Détail demande enrichie |
| `POST /api/v1/requests/:id/transitions` | Transition workflow |
| `GET /api/v1/requests/:id/events` | Journal enrichi |
| `POST /api/v1/demo/reset` | Reset démo |

Formats à préserver :

- liste users : réponse existante ;
- liste requests : `{ items: [...] }` ;
- détail request : `{ request, detail }` ;
- events : `{ items: [...] }` ;
- reset : format existant ;
- erreurs : `{ error: { code, message } }`.

---

## 8. Erreurs API cibles

Erreurs déjà attendues / à consolider :

| Code | HTTP | Cas |
|------|------|-----|
| `REQUEST_NOT_FOUND` | 404 | Demande inconnue |
| `INVALID_TRANSITION_ACTION` | 400 | Action absente ou inconnue |
| `TRANSITION_NOT_ALLOWED` | 409 | Transition métier impossible |
| `INVALID_JSON_BODY` | 400 | Body JSON invalide |
| `INVALID_ACTOR_USER` | 400 | Acteur inconnu ou inactif |
| `DEMO_MODE_REQUIRED` | 403 | Reset impossible hors mode démo |

Objectif :

- homogénéiser la forme d'erreur ;
- éviter les erreurs Express brutes ;
- documenter les cas ;
- tester les statuts HTTP ;
- tester les codes ;
- tester le format `{ error: { code, message } }`.

---

## 9. Validations d'entrée cibles

À auditer puis durcir si nécessaire :

- body JSON absent ;
- body JSON invalide ;
- `action` absent ;
- `action` non string ;
- `action` inconnue ;
- `actorUserId` non string ;
- `actorUserId` inconnu ;
- `actorUserId` inactif ;
- request id inconnu ;
- méthode non supportée si déjà gérée ;
- routes inconnues si déjà gérées.

Décision initiale :

- durcir uniquement les validations utiles au contrat existant ;
- ne pas créer de framework de validation lourd ;
- ne pas introduire de dépendance externe si inutile ;
- conserver le contrat frontend.

---

## 10. Frontend cible

À préserver :

- mode API ;
- mode local ;
- mapping users ;
- mapping requests ;
- mapping events ;
- transitions avec `actorUserId` ;
- reset admin ;
- erreurs API déjà affichées ;
- absence de fallback silencieux.

À ajuster seulement si nécessaire :

- messages d'erreur ;
- parsing d'erreur ;
- fallback d'erreur ;
- tests de compatibilité.

---

## 11. Décision initiale

Décision proposée pour rester Fast Track :

- commencer par auditer le contrat API existant ;
- formaliser les décisions d'erreurs et de validations ;
- durcir le backend ensuite ;
- ajuster le frontend uniquement si nécessaire ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas ajouter de nouveau statut ;
- ne pas modifier le workflow ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles ;
- PR unique en fin de lot.

---

## 12. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| APH-01 | Cadrage opérationnel API hardening | Réalisé |
| APH-02 | Audit contrat API et décisions erreurs/validations | Réalisé |
| APH-03 | Backend API errors/validation hardening | Réalisé |
| APH-04 | Frontend API compatibility hardening | Réalisé |
| APH-05 | Tests backend/frontend et non-régression | Réalisé |
| APH-06 | Documentation runbook/README | À faire |
| APH-07 | Préparation PR unique | À venir |

---

## 13. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| Contrat API cible cadré | OK |
| Audit endpoints réalisé | OK |
| Décisions erreurs/validations prises | OK |
| Backend erreurs alignées | OK |
| Backend validations alignées | OK |
| Frontend compatibilité API conservée | OK |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Audit trail conservé | OK |
| Request model conservé | OK |
| Permissions conservées | OK |
| Backend tests | OK — 125 tests |
| Frontend tests | OK — 187 tests |
| Backend build | OK |
| Frontend build | OK |
| Auth réelle exclue | OK |
| Login/password exclus | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |
| CRUD complet exclu | OK |

---

## 14. Garde-fous

Le lot doit préserver :

- users backend ;
- session locale ;
- request model enrichi ;
- audit trail enrichi ;
- workflow existant ;
- statuts existants ;
- actions existantes ;
- permissions existantes ;
- reset admin existant ;
- mode local ;
- mode API.

Le lot ne doit pas introduire :

- auth réelle ;
- login/password ;
- token ;
- OAuth/JWT/SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- CRUD complet non cadré ;
- formulaire création demande non cadré.

---

## 15. Décision APH-01

APH-01 valide le cadrage opérationnel du Lot 4.

Décisions :

- durcir le contrat API existant ;
- homogénéiser les erreurs utiles ;
- renforcer les validations d'entrée utiles ;
- préserver le contrat frontend ;
- conserver le mode local ;
- conserver le mode API ;
- conserver le request model enrichi ;
- conserver l'audit trail enrichi ;
- conserver les permissions existantes ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas introduire de nouveau statut ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles.

---

## 15.1. Audit APH-02 — contrat API existant

APH-02 audite le contrat API existant avant durcissement.

### 15.1.1. Endpoints exposés

| Endpoint | Méthode | Format réponse OK | Erreurs connues | Décision |
|----------|---------|-------------------|-----------------|----------|
| `/health` | GET | `{ status: "ok", mode: "demo" }` | Aucune erreur produit documentée | À préserver tel quel |
| `/api/v1/users` | GET | `{ users: [...] }` | Aucune erreur structurée côté route | À préserver ; pas de durcissement métier |
| `/api/v1/users/:id` | GET | `{ user: {...} }` | `USER_NOT_FOUND` (404) inline dans `routes.ts` | À préserver ; homogénéiser via helper en APH-03 si simple |
| `/api/v1/requests` | GET | `{ items: [...] }` | Aucune erreur structurée côté route | À préserver |
| `/api/v1/requests/:id` | GET | `{ request, detail }` | `REQUEST_NOT_FOUND` (404) via `sendStoreError()` | À préserver |
| `/api/v1/requests/:id/transitions` | POST | `{ request, event }` | `INVALID_TRANSITION_ACTION`, `INVALID_ACTOR_USER`, `REQUEST_NOT_FOUND`, `TRANSITION_NOT_ALLOWED` | À préserver ; consolider validations |
| `/api/v1/requests/:id/events` | GET | `{ items: [...] }` | `REQUEST_NOT_FOUND` (404) via `sendStoreError()` | À préserver |
| `/api/v1/demo/reset` | POST | `{ status: "reset", mode: "demo", requestsCount }` | `DEMO_MODE_REQUIRED` (403) via `sendStoreError()` | À préserver ; code réel = `DEMO_MODE_REQUIRED`, pas `DEMO_RESET_FAILED` |

Helpers et middleware existants :

- `sendStoreError()` dans `routes.ts` mappe les `StoreError` vers `{ error: { code, message } }` ;
- middleware `express.json()` + handler `INVALID_JSON_BODY` (400) dans `app.ts` ;
- handler final `INTERNAL_ERROR` (500) dans `app.ts` pour erreurs non gérées ;
- pas de handler global `ROUTE_NOT_FOUND` / `METHOD_NOT_ALLOWED` structuré.

### 15.1.2. Formats de réponse à préserver

| Cas | Format existant | Décision |
|-----|-----------------|----------|
| Health | `{ status: "ok", mode: "demo" }` | À préserver |
| Users list | `{ users: [...] }` | À préserver |
| User detail | `{ user: {...} }` | À préserver |
| Requests list | `{ items: [...] }` | À préserver |
| Request detail | `{ request, detail }` | À préserver |
| Transition | `{ request, event }` | À préserver |
| Events | `{ items: [...] }` | À préserver |
| Reset | `{ status: "reset", mode: "demo", requestsCount }` | À préserver |
| Erreur | `{ error: { code, message } }` | À généraliser sur tous les cas API produit connus |

### 15.1.3. Erreurs existantes

| Code | HTTP actuel | Cas | Test existant | Décision |
|------|-------------|-----|---------------|----------|
| `REQUEST_NOT_FOUND` | 404 | Demande inconnue (detail, events, transition) | Oui (`api.test.ts`) | À conserver |
| `INVALID_TRANSITION_ACTION` | 400 | Action absente, non string ou inconnue | Oui | À conserver |
| `TRANSITION_NOT_ALLOWED` | 409 | Transition métier impossible | Oui (plusieurs cas) | À conserver |
| `INVALID_JSON_BODY` | 400 | Body JSON invalide | Oui | À conserver |
| `INVALID_ACTOR_USER` | 400 | Acteur non string, vide, inconnu ou inactif | Oui | À conserver |
| `USER_NOT_FOUND` | 404 | User inconnu (`GET /users/:id`) | Oui | À conserver ; documenter dans le contrat |
| `DEMO_MODE_REQUIRED` | 403 | Reset refusé si `DEMO_MODE=false` | Oui | À conserver (code réel, pas `DEMO_RESET_FAILED`) |
| `INTERNAL_ERROR` | 500 | Erreur non gérée (handler final) | Non | À conserver ; tester en APH-05 si faisable |
| `ROUTE_NOT_FOUND` | — | Route inconnue | Non | Reporté — Express renvoie 404 HTML non structuré |
| `METHOD_NOT_ALLOWED` | — | Méthode non supportée | Non | Reporté — Express renvoie 404 HTML par défaut |

Écart principal : routes inconnues et méthodes non supportées ne renvoient pas encore `{ error: { code, message } }`.

### 15.1.4. Validations existantes

| Entrée | État actuel | Écart | Décision |
|--------|-------------|-------|----------|
| Body JSON absent sur transition | `{}` accepté → `INVALID_TRANSITION_ACTION` si `action` absent | Couvert indirectement | Confirmer en APH-03 |
| Body JSON invalide | `INVALID_JSON_BODY` via middleware Express | Aucun | Confirmer / documenter |
| `action` absent | `INVALID_TRANSITION_ACTION` (400) inline route | Aucun | Confirmer |
| `action` non string | `INVALID_TRANSITION_ACTION` (400) inline route | Aucun | Confirmer |
| `action` inconnue | `INVALID_TRANSITION_ACTION` via `resolveTransition()` | Aucun | Confirmer |
| `actorUserId` non string | `INVALID_ACTOR_USER` (400) inline route | Aucun | Confirmer |
| `actorUserId` vide (`"   "`) | `INVALID_ACTOR_USER` (400) | Aucun | Confirmer |
| `actorUserId` inconnu | `INVALID_ACTOR_USER` (400) | Aucun | Confirmer |
| `actorUserId` inactif | `INVALID_ACTOR_USER` (400) | Aucun | Confirmer |
| `actorUserId` null / absent | Ignoré (acteur optionnel) | Comportement voulu | À préserver |
| request id inconnu | `REQUEST_NOT_FOUND` (404) via store | Aucun | Confirmer |
| route inconnue | 404 HTML Express (`Cannot GET/POST ...`) | Pas de JSON structuré | Reporté — handler global seulement si simple |
| méthode non supportée | 404 HTML Express par défaut | Pas de JSON structuré | Reporté — handler global seulement si simple |

Trous de couverture tests identifiés pour APH-03/APH-05 :

- routes inconnues / méthodes non supportées ;
- `INTERNAL_ERROR` ;
- homogénéité `error.message` sur tous les codes ;
- `USER_NOT_FOUND` hors transition (déjà testé, à documenter).

### 15.1.5. Compatibilité frontend

| Sujet | État actuel | Décision |
|-------|-------------|----------|
| Mode API indisponible | `BACKEND_UNAVAILABLE` via `catch` réseau (`apiRequestsRepository`, `usersRepository`) | À préserver |
| Parsing erreurs API requests | `parseApiError()` lit `error.code` et `error.message` → `RequestsRepositoryError` | À préserver ; ajuster seulement si format backend change |
| Parsing erreurs API users | Erreur générique `USERS_UNAVAILABLE` avec statut HTTP seulement | À préserver en APH-04 ; enrichir parsing seulement si utile |
| Transitions avec `actorUserId` | Payload `{ action, actorUserId? }` sans header auth | À préserver |
| Requests list/detail | Mapping enrichi via `mapRequestModelFields()` | À préserver |
| Events `{ items }` | Mapping journal enrichi ; 404 → `[]` côté frontend | À préserver |
| Reset admin | `POST /demo/reset` sans body | À préserver |
| Fallback silencieux | `getRequestById` 404 → `undefined` ; events 404 → `[]` (comportement voulu) | À exclure pour les autres cas (pas de fallback local) |

Impact APH-04 : faible si les codes HTTP et `{ error: { code, message } }` restent stables.

---

## 15.2. Décision APH-02 — erreurs et validations cibles

APH-02 fixe les décisions à implémenter en APH-03/APH-04.

### Format d'erreur cible

Toutes les erreurs API produit doivent utiliser :

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

Décisions :

- `code` est stable et testé ;
- `message` reste lisible mais non utilisé comme contrat principal ;
- pas d'erreur Express brute dans les cas API connus ;
- pas de stack trace exposée ;
- pas de champ sensible exposé.

### Codes d'erreur cibles

| Code | HTTP cible | Décision |
|------|------------|----------|
| `REQUEST_NOT_FOUND` | 404 | À utiliser pour demande inconnue |
| `INVALID_TRANSITION_ACTION` | 400 | À utiliser pour action absente, non string ou inconnue |
| `TRANSITION_NOT_ALLOWED` | 409 | À utiliser pour transition métier impossible |
| `INVALID_JSON_BODY` | 400 | À utiliser pour JSON invalide |
| `INVALID_ACTOR_USER` | 400 | À utiliser pour acteur invalide, inconnu ou inactif |
| `USER_NOT_FOUND` | 404 | À conserver pour user inconnu |
| `DEMO_MODE_REQUIRED` | 403 | À conserver pour reset refusé hors mode démo |
| `INTERNAL_ERROR` | 500 | À conserver pour erreurs non gérées |
| `ROUTE_NOT_FOUND` | 404 | Reporté — introduire seulement si handler global simple |
| `METHOD_NOT_ALLOWED` | 405 | Reporté — introduire seulement si handler global simple |

Note : `DEMO_RESET_FAILED` n'existe pas dans le code actuel ; le code réel est `DEMO_MODE_REQUIRED`.

### Validations à durcir en APH-03

| Validation | Décision |
|------------|----------|
| Body JSON invalide | Confirmer via middleware existant |
| Body JSON absent sur transition | Retourner `INVALID_TRANSITION_ACTION` si `action` absent (comportement actuel) |
| `action` absent | `INVALID_TRANSITION_ACTION` |
| `action` non string | `INVALID_TRANSITION_ACTION` |
| `action` inconnue | `INVALID_TRANSITION_ACTION` |
| `actorUserId` non string | `INVALID_ACTOR_USER` |
| `actorUserId` vide | `INVALID_ACTOR_USER` |
| `actorUserId` inconnu | `INVALID_ACTOR_USER` |
| `actorUserId` inactif | `INVALID_ACTOR_USER` |
| `actorUserId` null / absent | Ignoré (optionnel) — à préserver |
| request id inconnu | `REQUEST_NOT_FOUND` |
| route inconnue | Reporté — documenter l'existant Express si non traité |
| méthode non supportée | Reporté — documenter l'existant Express si non traité |

Travaux APH-03 prioritaires :

- centraliser les réponses d'erreur (`sendStoreError` ou équivalent) y compris `USER_NOT_FOUND` ;
- vérifier la cohérence des messages `error.message` ;
- documenter explicitement les codes dans `types.ts` / README ;
- évaluer un handler 404 JSON global sans sur-ingénierie.

### Réponses à préserver

| Endpoint | Format à préserver |
|----------|-------------------|
| `GET /health` | `{ status, mode }` |
| `GET /api/v1/users` | `{ users: [...] }` |
| `GET /api/v1/users/:id` | `{ user: {...} }` |
| `GET /api/v1/requests` | `{ items: [...] }` |
| `GET /api/v1/requests/:id` | `{ request, detail }` |
| `POST /api/v1/requests/:id/transitions` | `{ request, event }` |
| `GET /api/v1/requests/:id/events` | `{ items: [...] }` |
| `POST /api/v1/demo/reset` | `{ status, mode, requestsCount }` |

### Frontend

Décisions :

- préserver la compatibilité frontend existante ;
- ajuster le parsing d'erreur uniquement si nécessaire (priorité `apiRequestsRepository`) ;
- ne pas ajouter de logique auth ;
- ne pas ajouter de fallback silencieux vers le mode local ;
- ne pas modifier le mode local ;
- ne pas modifier l'UX hors messages d'erreur si strictement nécessaire.

### Hors scope confirmé

APH-02 confirme que le lot ne crée pas :

- auth réelle ;
- session backend réelle ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- CRUD complet ;
- formulaire création demande ;
- nouveau statut ;
- `STAT-08` ;
- pagination avancée ;
- tri avancé ;
- versioning API complexe.

---

## 15.3. Changements APH-03

APH-03 durcit les erreurs et validations backend API.

Changements réalisés :

- centralisation du helper d'erreur API dans `backend/src/api/apiErrors.ts` ;
- `sendApiError()` et `sendStoreError()` partagés ;
- généralisation du format :
  - `{ error: { code, message } }`
- conservation des codes existants :
  - `REQUEST_NOT_FOUND`
  - `INVALID_TRANSITION_ACTION`
  - `TRANSITION_NOT_ALLOWED`
  - `INVALID_JSON_BODY`
  - `INVALID_ACTOR_USER`
  - `USER_NOT_FOUND`
  - `DEMO_MODE_REQUIRED`
  - `INTERNAL_ERROR`
- introduction de `ROUTE_NOT_FOUND` (404) pour les routes `/api/v1` inconnues ;
- durcissement des validations transition via helpers dédiés :
  - `action` absent ;
  - `action` non string ;
  - `action` vide ;
  - `action` inconnue (via store existant) ;
  - `actorUserId` non string ;
  - `actorUserId` vide ;
  - `actorUserId` inconnu ;
  - `actorUserId` inactif ;
- homogénéisation `USER_NOT_FOUND` via `sendApiError()` ;
- homogénéisation `INVALID_JSON_BODY` et `INTERNAL_ERROR` via `sendApiError()` dans `app.ts` ;
- tests backend ajoutés (action vide, route inconnue, contrat erreur sans stack) ;
- aucun changement frontend ;
- aucune modification workflow ;
- aucune modification request model ;
- aucune modification audit trail.

Décisions confirmées :

| Sujet | Décision |
|-------|----------|
| Format erreur | `{ error: { code, message } }` |
| Stack trace exposée | Non |
| `DEMO_RESET_FAILED` | Non ajouté ; `DEMO_MODE_REQUIRED` conservé |
| `ROUTE_NOT_FOUND` | Implémenté |
| `METHOD_NOT_ALLOWED` | Reporté |
| Frontend | À vérifier en APH-04 |
| Workflow | Inchangé |
| Request model | Inchangé |
| Audit trail | Inchangé |

Validations :

| Cible | Résultat |
|-------|----------|
| Backend build | OK |
| Backend tests | OK — 124 tests |
| Frontend build | OK (non-régression) |
| Frontend tests | OK — 175 tests (non-régression) |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles.

---

## 15.4. Changements APH-04

APH-04 vérifie et durcit la compatibilité frontend avec le contrat d'erreur API.

Changements réalisés :

- introduction du helper partagé `apiErrorParsing.ts` (`getApiErrorDetails`, `readApiErrorFromResponse`) ;
- alignement de `apiUsersRepository` sur le format `{ error: { code, message } }` ;
- conservation et factorisation du parsing dans `apiRequestsRepository` ;
- conservation du mode API ;
- conservation du mode local ;
- conservation de l'absence de fallback silencieux vers le mode local ;
- conservation des transitions avec `actorUserId` ;
- conservation du message « backend indisponible en mode API local » ;
- tests frontend ajoutés (`apiErrorParsing`, `usersRepository`, `apiRequestsRepository`, `App.apiMode`) ;
- aucune modification backend ;
- aucune modification workflow ;
- aucune modification request model ;
- aucune modification audit trail.

Décisions confirmées :

| Sujet | Décision |
|-------|----------|
| Format erreur API | `{ error: { code, message } }` consommé |
| `apiRequestsRepository` | Compatible |
| `apiUsersRepository` | Compatible |
| Backend indisponible | Message existant conservé |
| Fallback silencieux vers local | Non |
| Mode local | Inchangé |
| Mode API | Conservé |
| Auth réelle | Non |

Validations :

| Cible | Résultat |
|-------|----------|
| Frontend build | OK |
| Frontend tests | OK — 183 tests |
| Backend build | OK (non-régression) |
| Backend tests | OK — 124 tests (non-régression) |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles.

---

## 15.5. Changements APH-05

APH-05 stabilise le lot API Product Hardening par les tests et la non-régression.

Changements réalisés :

- vérification des tests backend du contrat API ;
- vérification des tests frontend du parsing d'erreurs API ;
- confirmation du format d'erreur :
  - `{ error: { code, message } }`
- confirmation des codes backend :
  - `REQUEST_NOT_FOUND`
  - `INVALID_TRANSITION_ACTION`
  - `TRANSITION_NOT_ALLOWED`
  - `INVALID_JSON_BODY`
  - `INVALID_ACTOR_USER`
  - `USER_NOT_FOUND`
  - `DEMO_MODE_REQUIRED`
  - `INTERNAL_ERROR` (conservé, non testé de façon intrusive)
  - `ROUTE_NOT_FOUND`
- confirmation du report de `METHOD_NOT_ALLOWED` ;
- confirmation de l'absence de `DEMO_RESET_FAILED` artificiel ;
- confirmation des réponses API OK existantes ;
- confirmation de la compatibilité frontend API ;
- confirmation du mode local ;
- confirmation du mode API ;
- confirmation de l'absence de fallback silencieux vers local ;
- confirmation de l'audit trail ;
- confirmation du request model enrichi ;
- confirmation des permissions ;
- confirmation du reset admin ;
- tests backend complétés (stack absente, `TRANSITION_NOT_ALLOWED` structuré) ;
- tests frontend complétés (`readApiErrorFromResponse`, `INVALID_TRANSITION_ACTION`, reset admin API mode) ;
- confirmation de l'absence de nouveau workflow, nouveau statut, CRUD complet ou formulaire création.

Contrat stabilisé :

| Élément | Résultat |
|---------|----------|
| Format erreur API | OK |
| Codes erreur API | OK |
| Validations transitions | OK |
| Route inconnue API | OK |
| Méthode non supportée | Reportée |
| Réponses API OK | Conservées |
| Parsing frontend requests | OK |
| Parsing frontend users | OK |
| Mode local | OK |
| Mode API | OK |
| Fallback silencieux | Non |
| Audit trail | OK |
| Request model | OK |
| Permissions | OK |
| Reset admin | OK |
| CRUD complet | Non |
| Formulaire création | Non |
| Auth réelle | Non |
| Nouveau statut | Non |

Validations :

| Cible | Résultat |
|-------|----------|
| Backend build | OK |
| Backend tests | OK — 125 tests |
| Frontend build | OK |
| Frontend tests | OK — 187 tests |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles.

---

## 16. Prochaine étape

Exécuter **APH-06** :

Documentation runbook/README
