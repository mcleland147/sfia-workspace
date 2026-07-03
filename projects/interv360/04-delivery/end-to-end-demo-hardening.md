# Interv360 — End-to-End Demo Hardening

**Projet** : Interv360  
**Cycle** : End-to-End Demo Hardening  
**Mode** : SFIA Fast Delivery contrôlé  
**Statut** : Hardening démonstration locale/API  
**Branche** : `delivery/interv360-end-to-end-demo-hardening`

---

## 1. Objectif

Ce cycle stabilise la démonstration Interv360 de bout en bout.

L'objectif est de vérifier que la démo reste exploitable dans deux modes :

- **mode local** par défaut ;
- **mode API local** avec backend lancé séparément.

Ce cycle ne doit pas ajouter de nouvelle fonctionnalité métier.

---

## 2. Point de départ

Interv360 dispose désormais :

- d'un frontend React / TypeScript ;
- d'un mode local par défaut basé sur `localStorage` ;
- d'un mode API activable par configuration Vite ;
- d'un backend minimal Express ;
- d'un contrat API `/api/v1` ;
- d'un scénario guidé, panneau readiness, package de présentation ;
- de **77 tests frontend** et **18 tests backend**.

---

## 3. Réflexion d'optimisation SFIA

Après la connexion frontend/API, le risque principal n'est plus l'ajout de scope, mais la **stabilité de démonstration**.

Décision :

- ne pas ajouter de fonctionnalité ;
- valider le parcours réel local et API ;
- documenter la procédure de lancement (runbook) ;
- corriger uniquement les irritants mineurs ;
- conserver le mode local par défaut.

---

## 4. Périmètre autorisé

Le cycle peut introduire :

- runbook de démonstration local/API ;
- checklist de validation E2E ;
- corrections documentaires ;
- ajustements UX mineurs ;
- tests complémentaires si nécessaires ;
- clarification README app/backend.

---

## 5. Hors périmètre

Le cycle ne doit pas introduire :

- nouvelle fonctionnalité métier ;
- suppression `localStorage` ;
- backend obligatoire ;
- fallback automatique silencieux ;
- nouveaux statuts / STAT-05 / STAT-07 / STAT-08 ;
- DB SQL, CRM, authentification, données réelles ;
- production, Notion, Controlled Delivery, sfia-notion-sync.

---

## 6. Validation E2E attendue

### Mode local

| Étape | Méthode de validation |
|-------|----------------------|
| Lancement frontend seul | `npm run dev` — pas de backend requis |
| Badge Mode local | Test `App.smoke` + visuel |
| Liste / sélection / filtres | Tests `RequestsList` + `App.smoke` |
| Scénario guidé / readiness | Tests `App.smoke`, `DemoScenarioGuide`, `DemoReadinessPanel` |
| Transition nominale | `App.smoke` workflow complet |
| Journal local | `WorkflowJournalReadonly` tests |
| Reset global | `App.smoke` + `requestsRepository` tests |

### Mode API

| Étape | Méthode de validation |
|-------|----------------------|
| Backend + frontend API | Runbook section 3 |
| Badge Mode API local | Test `App.apiMode` |
| Chargement / transition / journal / reset API | Tests `apiRequestsRepository` + `api.test.ts` backend |
| Erreur backend indisponible | Test `App.apiMode` |
| Parcours HTTP bout-en-bout | **curl** sur backend live (cycle) |

---

## 7. Validation attendue

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 77 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Mode local E2E | OK (tests automatisés + smoke App) |
| Mode API E2E | OK (tests automatisés + curl live) |
| Backend non obligatoire en local | OK |
| Reset local | OK (tests) |
| Reset API | OK (backend API test + curl) |
| Journal local | OK (tests) |
| Journal API | OK (curl + tests) |
| Erreur backend indisponible | OK (test App.apiMode) |
| Garde-fous | OK |

---

## 8. Changements réalisés

| Fichier | Changement |
|---------|------------|
| `08-presentation/interv360-e2e-demo-runbook.md` | **Créé** — procédures local/API, parcours, curl, dépannage |
| `04-delivery/end-to-end-demo-hardening.md` | **Créé** — ce document |
| `app/README.md` | Lien vers runbook E2E |
| `backend/README.md` | Lien vers runbook E2E |

### Validation API live (curl, backend `:3001`)

| Étape | Résultat |
|-------|----------|
| `GET /health` | `{"status":"ok","mode":"demo"}` |
| `GET /api/v1/requests` | 3 demandes fictives |
| `GET /api/v1/requests/SAV-DEMO-001` | request + detail |
| `POST .../transitions` (`qualify`) | STAT-02 + événement journal |
| `GET .../events` | 1 événement `qualification.confirmed` |
| `POST /api/v1/demo/reset` | `requestsCount: 3`, journal vidé |
| Statut après reset | STAT-01 |

### Irritants identifiés

Aucun irritant bloquant identifié pendant ce cycle.

Points d'attention documentés (non bloquants) :

- mode API nécessite **deux terminaux** ;
- seed backend et seed frontend local ont des libellés légèrement différents (attendu, données fictives) ;
- validation navigateur manuelle complète recommandée avant présentation externe (runbook sections 4–5).

### Décisions mineures

- Pas de nouveau test ajouté : couverture existante jugée suffisante (77 + 18 + curl).
- Runbook placé dans `08-presentation/` pour proximité avec le script de démo existant.

---

## 9. Décision

Le cycle est clôturé : la démonstration est validée en mode local (tests) et en mode API (tests + curl live), sans ajout de scope fonctionnel.

Aucun push, aucune PR et aucun merge ne sont effectués dans ce cycle.

---

## 10. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 77 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Mode local E2E | OK (tests automatisés) |
| Mode API E2E | OK (tests + curl live) |
| Backend non obligatoire en local | OK |
| Reset local | OK |
| Reset API | OK |
| Journal local | OK |
| Journal API | OK |
| Erreur backend indisponible | OK |
| Garde-fous | OK |

---

## 11. Runbook produit

Runbook : [`projects/interv360/08-presentation/interv360-e2e-demo-runbook.md`](../08-presentation/interv360-e2e-demo-runbook.md)

---

## 12. Limites assumées

- Le mode local reste la référence de démonstration autonome.
- Le mode API nécessite deux terminaux.
- Aucune connexion à un service externe réel.
- Aucune donnée réelle.
- Aucun environnement de production.
- Validation navigateur manuelle complète non automatisée dans ce cycle.

---

## 13. Prochaine étape recommandée

**Cycle suivant :** merge PR puis post-merge léger (section §15).

---

## 14. Préparation PR intégrée

### Titre proposé

`Harden Interv360 end-to-end demo`

### Description proposée

```markdown
## Summary
This PR hardens the Interv360 end-to-end demo experience.
It includes:
- an E2E demo runbook for local and API modes;
- local mode launch and validation steps;
- API mode launch and validation steps;
- curl-based backend validation steps;
- troubleshooting guidance;
- links from app/backend README files to the runbook;
- documented validation results for frontend and backend.

## Validation
- Frontend build: OK
- Frontend tests: 77 passed
- Backend build: OK
- Backend tests: 18 passed
- Local mode E2E: OK via automated tests
- API mode E2E: OK via automated tests + live curl validation
- Backend not required in local mode
- No new business feature introduced

## Guardrails
No new business scope, SQL database, CRM integration, authentication, real data, STAT-05/07/08, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
```

### Périmètre PR (vs `main`)

| Fichier | Rôle |
|---------|------|
| `04-delivery/end-to-end-demo-hardening.md` | Document de livraison |
| `08-presentation/interv360-e2e-demo-runbook.md` | Runbook E2E local/API |
| `app/README.md` | Lien vers runbook |
| `backend/README.md` | Lien vers runbook |

Hors périmètre confirmé : code métier frontend/backend, SQL, CRM, auth, Controlled Delivery.

---

## 15. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-end-to-end-demo-hardening?expand=1 |
| Cible | main |
| Source | delivery/interv360-end-to-end-demo-hardening |
| Merge automatique | Non |

---

## 16. Statut merge

| Élément | Valeur |
|---------|--------|
| PR | [#43](https://github.com/mcleland147/sfia-workspace/pull/43) |
| Source | `delivery/interv360-end-to-end-demo-hardening` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `d5c03c0` |
| Main synchronisée | OK |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 77 tests |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 18 tests |
| Runbook E2E présent | OK |
| Liens README app/backend | OK |
| Nouveau scope métier | Non |
| Modification code métier | Non |
| Mode local par défaut | OK |
| Backend obligatoire en local | Non |
| Fallback automatique silencieux | Non |
| DB SQL introduite | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le cycle **End-to-End Demo Hardening** est mergé dans `main`.

La branche principale contient désormais :

- un runbook de démonstration E2E local/API ;
- les procédures de lancement en mode local et en mode API ;
- un parcours de validation local ;
- un parcours de validation API ;
- une validation curl backend ;
- des garde-fous de démonstration ;
- une section de dépannage rapide ;
- des liens README app/backend vers le runbook.

Aucun nouveau scope métier n'a été introduit.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Delivery contrôlé.

### Prochaine étape recommandée

Ne pas lancer de polish UX sans retour réel de démonstration.

**Cycle recommandé :** `delivery/interv360-demo-feedback-review`

Objectif :

- présenter ou rejouer la démo avec le runbook ;
- noter les irritants réels ;
- décider si un polish UX est utile ;
- éviter d'ajouter du scope sur hypothèse.

**Alternative :** `delivery/interv360-demo-polish`

Uniquement si des irritants UX concrets sont identifiés.
