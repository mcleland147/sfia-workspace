# Interv360 — API Product Validation

**Projet** : Interv360  
**Cycle** : API Product Validation  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-01 réalisé  
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
| INC-PROD-02 | Implémenter validation payload / erreurs | À faire |
| INC-PROD-03 | Adapter tests backend | À faire |
| INC-PROD-04 | Mettre à jour documentation | À faire |
| INC-PROD-05 | Préparer PR du batch | À venir |

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
| Erreurs API cohérentes | À faire (INC-PROD-02) |
| Transitions invalides testées | À faire (INC-PROD-03) |
| Request inconnue testée | À faire (INC-PROD-03) |
| Payload detail productisé non régressé | À faire (INC-PROD-03) |
| Reset API non régressé | À faire (INC-PROD-03) |
| SQLite non régressée | À faire (INC-PROD-03) |
| Frontend source non modifié | OK — objectif batch |
| Pas d’auth / users / rôles | OK |
| Pas de CRM / données réelles | OK |
| Pas de nouveaux statuts | OK |

---

## 7. Décisions techniques

| Sujet | Décision |
|------|----------|
| Librairie validation | Aucune |
| Validation transitions | `requestId`, `action`, action connue, transition autorisée |
| Erreurs API | `400`, `404`, `409` conservés et clarifiés |
| Format erreurs | Format existant `{ error: { code, message } }` conservé |
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

---

## 9. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | Non applicable — INC-PROD-01 documentaire |
| Backend tests | Non applicable — INC-PROD-01 documentaire |
| Frontend build | Non applicable — INC-PROD-01 documentaire |
| Frontend tests | Non applicable — INC-PROD-01 documentaire |
| API curl | Non exécutée — INC-PROD-01 documentaire |
| Reset API | Non applicable — INC-PROD-01 documentaire |
| Persistance SQLite | Non modifiée — INC-PROD-01 documentaire |

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
- INC-PROD-01 ne modifie pas le code.

---

## 11. Prochaine étape recommandée

**INC-PROD-02** : implémenter les gardes explicites sur les transitions et clarifier les erreurs `400` / `404` / `409` dans `routes.ts` (et store si nécessaire), sans librairie externe.
