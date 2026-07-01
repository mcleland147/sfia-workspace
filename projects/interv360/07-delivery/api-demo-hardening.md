# Interv360 — API Demo Hardening

**Projet** : Interv360  
**Cycle** : API Demo Hardening  
**Mode** : SFIA Fast Delivery contrôlé  
**Statut** : Hardening mode API local  
**Branche** : `delivery/interv360-api-demo-hardening`

---

## 1. Objectif

Ce cycle stabilise le mode API local Interv360 après l’introduction de la persistance SQLite.

L’objectif est de rendre le run API plus fluide et plus fiable pour une démonstration technique locale, sans ouvrir les sujets auth, CRM, données réelles ou industrialisation complète.

---

## 2. Point de départ

Interv360 dispose désormais :

- d’un frontend React / TypeScript ;
- d’un mode local par défaut ;
- d’un mode API opt-in ;
- d’un backend Express ;
- d’une API `/api/v1` ;
- d’une persistance SQLite côté backend ;
- d’un reset de démonstration ;
- d’un runbook E2E ;
- de validations frontend/backend.

Limite identifiée précédemment :

> le mode API navigateur peut être fragile si Vite change de port, notamment à cause du CORS.

---

## 3. Objectif de hardening

Le cycle doit améliorer :

- la configuration CORS locale ;
- la documentation de lancement backend/frontend API ;
- la validation API avec SQLite ;
- la robustesse du mode API local ;
- la compréhension des erreurs API côté démo si nécessaire.

---

## 4. Périmètre autorisé

Le cycle peut modifier :

- backend configuration CORS ;
- backend README ;
- app README ;
- runbook E2E ;
- tests backend si nécessaire ;
- tests frontend API si nécessaire ;
- document de livraison.

Le cycle peut introduire :

- configuration CORS locale plus souple ;
- variable d’environnement pour origins autorisées si simple ;
- documentation claire des ports ;
- validation curl avec persistance SQLite ;
- test non-régression API local.

---

## 5. Hors périmètre

Le cycle ne doit pas introduire :

- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- PostgreSQL ;
- ORM lourd ;
- refonte API ;
- modification du contrat `/api/v1` ;
- nouveau workflow ;
- STAT-05 / STAT-07 / STAT-08 ;
- refonte frontend ;
- polish démo large ;
- production / déploiement ;
- multi-tenant ;
- publication Notion ;
- modification Controlled Delivery ;
- modification `sfia-notion-sync`.

---

## 6. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Mode local par défaut conservé | OK |
| Mode API opt-in conservé | OK |
| API `/api/v1` conservée | OK |
| CORS local stabilisé | OK |
| Ports Vite alternatifs documentés ou supportés | OK |
| Persistance SQLite conservée | OK |
| Reset API conservé | OK |
| Runbook / README mis à jour | OK |
| Frontend non modifié ou modification justifiée | OK |
| Pas d’auth / CRM / données réelles | OK |

---

## 7. Décisions techniques

| Sujet | Décision |
|------|----------|
| CORS local | Liste d’origins locales autorisées via callback `cors` |
| Origins autorisées | `localhost` et `127.0.0.1` sur ports Vite `5173`, `5174`, `5175` |
| Configuration par env | `INTERV360_CORS_ORIGINS` optionnelle (liste CSV) ; `CORS_ORIGIN` conservée en compatibilité legacy |
| Ports Vite | Ports alternatifs supportés côté backend ; documentés dans README et runbook |
| Frontend | Non modifié |
| API contract | Conservé |
| Persistance SQLite | Conservée |

Décision recommandée appliquée :

- API inchangée ;
- origins Vite fréquentes autorisées en local ;
- pas de logique CORS production ;
- run API documenté ;
- pas de transformation sécurité/production.

---

## 8. Changements réalisés

- Ajout de `backend/src/config/cors.ts` : résolution des origins locales par défaut et surcharge optionnelle par env.
- Mise à jour de `backend/src/app.ts` : utilisation de `createLocalCorsOptions()` à la place d’un origin unique.
- Ajout de `backend/test/cors.test.ts` : non-régression sur origins Vite et preflight OPTIONS.
- Mise à jour de `backend/README.md` : ports, CORS local, persistance SQLite, variables d’environnement.
- Mise à jour de `app/README.md` : rappel ports Vite alternatifs et CORS backend.
- Mise à jour de `interv360-e2e-demo-runbook.md` : section mode API (ports, CORS, SQLite, dépannage).

---

## 9. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 25 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Validation curl API | OK |
| Validation navigateur API | OK — port Vite `5174`, badge Mode API local, données chargées |
| Persistance SQLite | OK — non régressée (tests persistence + reset curl) |
| Reset API | OK — `POST /api/v1/demo/reset` |

---

## 10. Limites assumées

- mode API local uniquement ;
- pas de production ;
- pas d’authentification ;
- pas de CRM ;
- pas de données réelles ;
- pas de gestion utilisateurs / rôles ;
- pas de sécurité CORS production ;
- frontend inchangé : le message « backend indisponible » reste le comportement attendu si le backend est arrêté ;
- CORS étendu aux ports Vite locaux courants uniquement, pas une politique multi-environnement.

---

## 11. Prochaine étape recommandée

- `delivery/interv360-api-demo-hardening-pr-preparation` si le hardening est validé ;
- `architecture/interv360-auth-and-user-framing` uniquement si la décision produit est de cadrer identité/utilisateurs ;
- `architecture/interv360-product-roadmap-after-persistence` si une priorisation produit globale est souhaitée.

---

## 12. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 25 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Mode local par défaut | OK |
| Mode API opt-in | OK |
| API `/api/v1` conservée | OK |
| CORS local stabilisé | OK |
| Ports Vite alternatifs | OK — supportés (`5173`–`5175`) et documentés |
| Persistance SQLite conservée | OK |
| Reset API conservé | OK |
| Validation curl API | OK |
| Validation navigateur API | OK — `http://localhost:5174/`, Mode API local |
| Frontend modifié | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Production / déploiement introduit | Non |

## 13. Décision

Le mode API local est stabilisé pour capitaliser la persistance SQLite côté backend.

Le cycle ne transforme pas le mode API en cible production.

Aucun sujet auth, CRM, données réelles, utilisateurs ou rôles n’a été ouvert.

## 14. Prochaine étape recommandée

À choisir après validation :

- `delivery/interv360-api-demo-hardening-pr-preparation` si le hardening est terminé ;
- `architecture/interv360-auth-and-user-framing` uniquement si la décision produit est de cadrer identité/utilisateurs ;
- `architecture/interv360-product-roadmap-after-persistence` si une priorisation produit globale est souhaitée.
