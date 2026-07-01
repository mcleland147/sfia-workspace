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
| `07-delivery/end-to-end-demo-hardening.md` | **Créé** — ce document |
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

**Cycle recommandé :** `delivery/interv360-end-to-end-demo-hardening-pr-preparation`

Objectif :

- préparer la PR ;
- vérifier que le runbook et les validations sont complets ;
- ne pas ajouter de nouveau périmètre.

**Alternative :** `delivery/interv360-demo-polish`

Uniquement si des irritants UX mineurs sont identifiés lors d'une présentation réelle.
