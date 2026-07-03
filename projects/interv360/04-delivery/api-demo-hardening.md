# Interv360 — API Demo Hardening

**Projet** : Interv360  
**Cycle** : API Demo Hardening  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch en cours — INC-PROD-02 réalisé  
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

**INC-PROD-02 (batch)** — documentation uniquement :

- Ajout de la section **Validation API persistante après SQLite** dans le runbook E2E ;
- parcours reproductible : transition, journal, redémarrage backend, persistance, reset ;
- ports Vite alternatifs rappelés dans le parcours persistant ;
- aucun code, script npm ni modification frontend.

---

## 9. Mode Batch Delivery produit contrôlé

Après validation du premier incrément de hardening API local, le cycle est poursuivi en mode **Batch Delivery produit contrôlé**.

Objectif :

- éviter une PR trop fine pour chaque micro-amélioration ;
- regrouper plusieurs incréments cohérents autour du mode API local persistant ;
- conserver une limite stricte de périmètre ;
- préparer une PR finale unique du lot.

### Incréments du lot

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-PROD-01 | CORS local / ports Vite / documentation API | Réalisé |
| INC-PROD-02 | Runbook API persistant / validation reproductible | Réalisé — documentation uniquement |
| INC-PROD-03 | Configuration de lancement API local (scripts) | Non retenu — `npm run dev` existant suffisant |
| INC-PROD-04 | Préparation PR du lot | Réalisé — push OK, PR manuelle |

### Décision batch

- **INC-PROD-02 retenu** : renforcement documentaire du runbook API persistant (SQLite + CORS + reset).
- **INC-PROD-03 non retenu** : les scripts `npm run dev` backend et frontend couvrent déjà le lancement ; pas de script dédié ajouté.
- **Aucun code supplémentaire** dans cet incrément batch.

### Garde-fous du lot

Le lot ne doit pas introduire :

- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- PostgreSQL ;
- ORM lourd ;
- changement de contrat API ;
- nouveau workflow ;
- STAT-05 / STAT-07 / STAT-08 ;
- refonte frontend ;
- production / déploiement.

---

## 10. Validations

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

## 11. Limites assumées

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

## 12. Prochaine étape recommandée

- **INC-PROD-04** : préparer la PR finale du lot (`delivery/interv360-api-demo-hardening-pr-preparation`) ;
- pas d'incrément complémentaire supplémentaire identifié sur ce batch.

---

## 13. Mini-clôture

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
| Batch INC-PROD-02 | OK — runbook API persistant, sans code |

## 14. Décision

Le mode API local est stabilisé pour capitaliser la persistance SQLite côté backend.

Le cycle ne transforme pas le mode API en cible production.

Aucun sujet auth, CRM, données réelles, utilisateurs ou rôles n’a été ouvert.

Le batch reste documentaire sur INC-PROD-02 : validation API + SQLite + CORS rendue reproductible sans élargir le périmètre.

## 15. Préparation PR intégrée

### Titre proposé

`Harden Interv360 local API demo mode`

### Description proposée

```markdown
## Summary
This PR hardens the Interv360 local API demo mode after backend SQLite persistence.
It includes two controlled product increments:
1. Local API CORS hardening
   - support for Vite local ports;
   - `localhost` and `127.0.0.1` origins;
   - optional `INTERV360_CORS_ORIGINS` configuration;
   - CORS regression tests.
2. Persistent API runbook strengthening
   - documented validation path for API mode after SQLite;
   - backend restart validation;
   - transition, journal, reset path;
   - supported local frontend ports.
## Validation
- Backend build: OK
- Backend tests: 25 passed
- Frontend build: OK
- Frontend tests: 81 passed
- Browser API validation: OK on local Vite alternate port
- Curl API validation: OK
- Reset API: OK
- Frontend source unchanged
## Guardrails
No authentication, users, roles, CRM integration, real data, PostgreSQL, heavy ORM, API contract change, new workflow, STAT-05/07/08, production deployment, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
The batch remains limited to local API demo hardening.
```

### Fichiers inclus dans la PR

| Fichier | Incrément |
|---------|-----------|
| `projects/interv360/04-delivery/api-demo-hardening.md` | Lot + batch |
| `projects/interv360/backend/src/config/cors.ts` | INC-PROD-01 |
| `projects/interv360/backend/test/cors.test.ts` | INC-PROD-01 |
| `projects/interv360/backend/src/app.ts` | INC-PROD-01 |
| `projects/interv360/backend/README.md` | INC-PROD-01 |
| `projects/interv360/app/README.md` | INC-PROD-01 |
| `projects/interv360/08-presentation/interv360-e2e-demo-runbook.md` | INC-PROD-01 + INC-PROD-02 |

### Vérifications pré-PR

| Contrôle | Résultat |
|----------|----------|
| Diff limité au lot attendu (7 fichiers) | OK |
| Frontend source (`app/src`) non modifié | OK |
| Contrat API `/api/v1` non modifié | OK |
| Persistance SQLite conservée | OK |
| Backend build | OK |
| Backend tests | OK — 25 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |

---

## 16. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-api-demo-hardening?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-api-demo-hardening` |
| Merge automatique | Non |

**Titre PR** : `Harden Interv360 local API demo mode`

**Corps PR** : voir §15 ou `/tmp/api-demo-hardening-pr-body.md`

---

## 17. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | [#52 — Harden Interv360 local API demo mode](https://github.com/mcleland147/sfia-workspace/pull/52) |
| Source | `delivery/interv360-api-demo-hardening` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `0dac51f` |
| Main synchronisée | OK |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 25 tests |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 81 tests |
| Batch INC-PROD-01 | OK — CORS local / ports Vite / tests / README |
| Batch INC-PROD-02 | OK — runbook API persistant |
| CORS local stabilisé | OK |
| Ports Vite supportés | OK — `5173`, `5174`, `5175` |
| Variable `INTERV360_CORS_ORIGINS` documentée | OK |
| `CORS_ORIGIN` legacy conservée | OK |
| API `/api/v1` conservée | OK |
| Persistance SQLite conservée | OK |
| Reset API conservé | OK |
| Frontend source modifié | Non |
| Authentification introduite | Non |
| Utilisateurs / rôles introduits | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| PostgreSQL introduit | Non |
| ORM lourd introduit | Non |
| Nouveaux statuts introduits | Non |
| Production / déploiement introduit | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le batch **API Demo Hardening** est mergé dans `main`.

La branche principale contient désormais un mode API local plus robuste après persistance SQLite :

- CORS local stabilisé ;
- ports Vite alternatifs supportés ;
- configuration `INTERV360_CORS_ORIGINS` documentée ;
- runbook API persistant renforcé ;
- validation du parcours SQLite + redémarrage + reset documentée.

Le batch reste limité au hardening API local.

Aucun sujet auth, users, rôles, CRM, données réelles, PostgreSQL, ORM lourd, production, nouveau workflow ou nouveau statut n’a été introduit.

Aucun document de merge séparé n’a été créé afin de respecter le mode SFIA Batch Delivery produit contrôlé.

### Prochaine étape recommandée

Ne pas ouvrir directement un développement auth/users sans décision produit.

Cycle recommandé :

`architecture/interv360-product-roadmap-after-persistence`

Objectif :

- décider le prochain axe produit après :
  - Demo MVP clôturé ;
  - backend SQLite persistant ;
  - mode API local stabilisé ;
- comparer les prochaines options :
  - auth / users / rôles ;
  - enrichissement modèle métier ;
  - workflow produit étendu ;
  - API product hardening ;
  - préparation industrialisation ;
- choisir un prochain incrément ou batch cohérent.

Alternative :

`architecture/interv360-auth-and-user-framing`

À ouvrir uniquement si la décision est déjà de prioriser identité, utilisateurs et rôles.
