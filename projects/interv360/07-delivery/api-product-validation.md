# Interv360 — API Product Validation

**Projet** : Interv360  
**Cycle** : API Product Validation  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-05 réalisé  
**Branche** : `delivery/interv360-api-product-validation`

---

## 1. Objectif

Ce batch renforce la validation API Interv360 après productisation du modèle détail de demande.

L’objectif est de rendre l’API plus robuste sur les payloads et les erreurs, sans ouvrir auth, users, rôles, CRM, données réelles ou workflow étendu.

---

## 2. Point de départ

Interv360 dispose désormais :

- d’un backend Express / TypeScript ;
- d’une API `/api/v1` ;
- d’une persistance SQLite ;
- d’un modèle RequestDetail enrichi ;
- d’un seed fictif ;
- d’un reset API ;
- de tests backend ;
- d’un frontend non modifié.

Le modèle détail expose notamment :

- `category` ;
- `requestedDate` ;
- `equipmentLabel` ;
- `businessImpact`.

Le socle API actuel expose déjà des codes d’erreur via `StoreError` :

- `REQUEST_NOT_FOUND` → `404` ;
- `INVALID_TRANSITION_ACTION` → `400` ;
- `TRANSITION_NOT_ALLOWED` → `409` ;
- `DEMO_MODE_REQUIRED` → `403`.

---

## 3. Périmètre du batch

Le batch peut inclure :

- validation payload ciblée ;
- erreurs API plus cohérentes ;
- tests backend de non-régression ;
- documentation courte ;
- clarification du contrat API.

Le batch ne doit pas inclure :

- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- nouveaux statuts ;
- STAT-05 / STAT-07 / STAT-08 ;
- PostgreSQL ;
- ORM lourd ;
- refonte API ;
- refonte frontend ;
- production / déploiement.

---

## 4. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-PROD-01 | Cadrer les validations API ciblées | Réalisé |
| INC-PROD-02 | Implémenter validation payload / erreurs | Réalisé |
| INC-PROD-03 | Adapter tests backend | Réalisé avec INC-PROD-02 |
| INC-PROD-04 | Mettre à jour documentation | Réalisé |
| INC-PROD-05 | Préparer PR du batch | Réalisé |

---

## 5. INC-PROD-01 — Validations ciblées

### Validations candidates

| Zone | Validation | Décision |
|------|------------|----------|
| Transition `requestId` | Demande existante obligatoire | **Retenu** — `404` `REQUEST_NOT_FOUND` |
| Transition `action` | Action présente et string | **Retenu** — `400` si absente ou invalide |
| Transition body | Body JSON valide (Express) | **Retenu** — pas de librairie supplémentaire |
| Unknown action | Erreur `400` cohérente | **Retenu** — `INVALID_TRANSITION_ACTION` |
| Transition invalide métier | Erreur `409` cohérente | **Retenu** — `TRANSITION_NOT_ALLOWED` |
| Request inconnue | Erreur `404` cohérente | **Retenu** — `REQUEST_NOT_FOUND` |
| Reset démo | Réponse stable | **Retenu** — `{ status, mode, requestsCount }` |
| Payload détail | Champs productisés présents | **Retenu** — non-régression |

### Décision ferme

**Retenir :**

- demande inconnue → `404` ;
- action absente → `400` ;
- action inconnue → `400` ;
- transition métier invalide → `409` ;
- body JSON vide ou invalide → `400` (via parsing Express + garde action) ;
- reset API → réponse stable ;
- payload détail productisé → non-régression.

**Exclure pour ce batch :**

- validation de sécurité ;
- validation auth ;
- validation user/role ;
- validation CRM ;
- validation exhaustive de tous les champs ;
- ajout d’une librairie de validation ;
- changement de format API global.

### Justification

- renforcer les erreurs produit visibles sur les transitions ;
- clarifier les cas `400` / `404` / `409` sans sur-architecture ;
- pas de sécurité production ;
- pas de refonte du contrat API ;
- s’appuyer sur le mapping `StoreError` existant dans `routes.ts`.

### Point d’attention INC-PROD-02

Le handler actuel convertit une `action` absente en chaîne vide, ce qui aboutit déjà à `INVALID_TRANSITION_ACTION`. INC-PROD-02 pourra rendre ce comportement explicite (message / garde dédiée) sans changer les codes HTTP.

---

## 6. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Validations ciblées décidées | OK |
| Erreurs API cohérentes | OK |
| Transitions invalides testées | OK |
| Request inconnue testée | OK |
| Payload detail productisé non régressé | OK |
| Reset API non régressé | OK |
| SQLite non régressée | OK |
| Frontend source non modifié | OK — objectif batch |
| Pas d’auth / users / rôles | OK |
| Pas de CRM / données réelles | OK |
| Pas de nouveaux statuts | OK |

---

## 7. Décisions techniques

| Sujet | Décision |
|------|----------|
| Librairie validation | Aucune |
| Validation transitions | Garde explicite sur `action`, action connue, transition autorisée |
| Erreurs API | `400`, `404`, `409` conservés et clarifiés |
| Format erreurs | Format existant `{ error: { code, message } }` conservé |
| Body JSON invalide | Couvert par `INVALID_JSON_BODY` via middleware Express minimal |
| Reset API | Réponse stable à conserver |
| Payload productisé | Non-régression des champs `requestedDate`, `equipmentLabel`, `businessImpact` |
| API contract | Conservé |
| Frontend | Non modifié |

---

## 8. Changements réalisés

**INC-PROD-01** — cadrage validation API :

- décision des validations ciblées ;
- exclusion d’une librairie de validation ;
- conservation du contrat API ;
- exclusion des sujets sécurité/auth/users/CRM.

**INC-PROD-02 / INC-PROD-03** — validation API + tests :

- ajout d’une garde explicite sur l’action de transition dans `routes.ts` ;
- middleware minimal `INVALID_JSON_BODY` dans `app.ts` ;
- clarification des erreurs `400`, `404`, `409` ;
- conservation du format `{ error: { code, message } }` ;
- ajout de tests backend sur erreurs API (`api.test.ts`) ;
- ajout de tests de non-régression du payload détail productisé ;
- conservation du reset API ;
- aucune librairie de validation ajoutée ;
- SQLite et seed non modifiés.

**INC-PROD-04** — documentation :

- documentation des erreurs API clarifiées ;
- ajout des exemples curl utiles ;
- clarification du format d’erreur conservé ;
- rappel du reset API stable ;
- rappel de la non-régression du payload détail productisé ;
- aucune modification de code.

---

## 9. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 32 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| API curl | OK — 404, 400, 409, reset, payload productisé |
| Reset API | OK |
| Persistance SQLite | OK — tests persistence non régressés |

---

## 10. Limites assumées

- pas d’authentification ;
- pas d’utilisateurs ;
- pas de rôles ;
- pas de CRM ;
- pas de données réelles ;
- pas de nouveaux statuts ;
- pas de production ;
- pas de validation complète type sécurité ;
- pas de librairie de validation externe.

---

## 11. Prochaine étape recommandée

Après merge de la PR `Clarify Interv360 API validation errors`, enregistrer le statut post-merge dans ce document (section dédiée, sans merge-summary séparé).

---

## 12. Erreurs API clarifiées

Le batch conserve le format d’erreur existant :

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

| Cas | HTTP | Code |
|-----|------|------|
| Demande inconnue | 404 | `REQUEST_NOT_FOUND` |
| Action absente | 400 | `INVALID_TRANSITION_ACTION` |
| Action non-string | 400 | `INVALID_TRANSITION_ACTION` |
| Action inconnue | 400 | `INVALID_TRANSITION_ACTION` |
| Transition métier invalide | 409 | `TRANSITION_NOT_ALLOWED` |
| Body JSON invalide | 400 | `INVALID_JSON_BODY` |
| Reset démo | 200 | Réponse stable `{ status, mode, requestsCount }` |

Le batch ne modifie pas le contrat API global et n’introduit aucune librairie de validation.

---

## 13. Préparation PR intégrée

### Titre proposé

`Clarify Interv360 API validation errors`

### Description proposée

```markdown
## Summary
This PR strengthens Interv360 API product validation after request model productization.
It includes a controlled product batch:
1. API validation scope decision
   - selected targeted transition and payload validation cases;
   - excluded authentication, users, roles, CRM, exhaustive field validation and validation libraries.
2. API validation implementation and tests
   - adds an explicit guard for missing or non-string transition actions;
   - keeps `REQUEST_NOT_FOUND` as `404`;
   - keeps `INVALID_TRANSITION_ACTION` as `400`;
   - keeps `TRANSITION_NOT_ALLOWED` as `409`;
   - adds `INVALID_JSON_BODY` as `400`;
   - preserves the existing `{ error: { code, message } }` format;
   - adds backend tests for API error cases.
3. Documentation / runbook
   - documents API validation errors;
   - adds curl examples;
   - updates the API contract note.
## Validation
- Backend build: OK
- Backend tests: 32 passed
- Frontend build: OK
- Frontend tests: 81 passed
- API curl: OK — 404, 400, 409, reset, productized payload
- Reset API: OK
- Frontend source unchanged
## Guardrails
No authentication, users, roles, CRM integration, real data, new workflow status, STAT-05/07/08, PostgreSQL, heavy ORM, SQLite change, frontend source change, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
```

---

## 14. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | <OK / KO> |
| PR créée automatiquement | <Oui / Non> |
| URL PR ou comparaison | <url> |
| Cible | main |
| Source | delivery/interv360-api-product-validation |
| Merge automatique | Non |
