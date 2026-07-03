# Interv360 — Audit de l'application actuelle

## 1. Objectif

Ce document audite l'état actuel de l'application Interv360 après :

- livraison du MVP fonctionnel ;
- release `v0.1.0-mvp` ;
- livraison du Premium Design System ;
- release `v0.2.0-premium-ui` ;
- capitalisation Figma Design-first ;
- ouverture de la phase de consolidation SFIA.

L'objectif n'est pas de corriger l'application, mais de comprendre son état réel avant tout nouveau cycle produit.

## 2. Périmètre audité

| Zone | Auditée | Commentaire |
|------|---------|-------------|
| Frontend | Oui | Architecture React/Vite, UI premium, composants legacy |
| Backend | Oui | Express + SQLite, inchangé pendant le cycle Premium UI |
| API | Oui | Contrat REST `/api/v1/*` stable |
| Mode local | Oui | Repository local + localStorage, cohérent avec la démo |
| Mode API | Oui | Repository HTTP vers backend local |
| Tests | Oui | 28 fichiers de test frontend, Vitest |
| Documentation | Partiel | `07-delivery/`, `method/sfia-fast-track/`, consolidation ouverte |
| Notion | Non | Hors audit applicatif, traité dans chantier documentaire |

## 3. Synthèse exécutive

**Décision d'audit :**

> **APPLICATION_SAINE_AVEC_RESERVES**

**Résumé :**

- Le MVP fonctionnel et la couche Premium UI coexistent de façon stable : build OK, 202/202 tests frontend OK au moment de l'audit.
- La séparation premium / legacy est réelle dans `App.tsx` mais le code legacy reste présent (composants CSS custom, parcours readonly, chrome démo) — dette documentée, isolée, non bloquante pour consolidation.
- Les données de présentation premium (refs DEM-248x) sont découplées des IDs métier (`SAV-DEMO-00x`) — risque de confusion à anticiper avant tout cycle produit connecté au backend réel.

## 4. Architecture frontend

### Stack

| Élément | Version / choix |
|---------|-----------------|
| React | 19.x |
| Vite | 6.x |
| TypeScript | ~5.8 |
| Tailwind CSS | 4.x (`@tailwindcss/vite`) |
| Tests | Vitest + Testing Library |

### Structure applicative

```
projects/interv360/app/src/
├── app/           App.tsx, App.css (orchestration + styles legacy volumineux)
├── data/          Repositories (local, API, factory)
├── domain/        Statuts, rôles simulés, utilisateurs démo
├── seed/          Données fictives SAV-DEMO-00x
├── tests/         Tests d'intégration App (smoke, API, premium, rôles)
└── ui/
    ├── premium/   Couche Premium Design System (shell, écrans, présentation)
    ├── requests/  Composants legacy liste/détail/workflow
    ├── dashboard/ Composants legacy + données présentation command center
    ├── audit/     AuditTrailView legacy (non utilisé par App.tsx)
    ├── demo/      Chrome scénario, readiness, overview
    ├── workflow/  Actions workflow, journal readonly
    ├── qualification|planning|intervention|report/  Parcours readonly MVP
    └── roles/     Sélecteur profil simulé
```

### Rôle de `App.tsx`

- Point d'orchestration unique : état global (demandes, filtre, recherche, profil, écran courant).
- Navigation par `DemoScreenId` : `overview`, `requests`, `details`, `journal`, `scenario`.
- `PremiumShell` enveloppe tous les écrans ; chrome démo (`Écran X sur 5`) uniquement sur `scenario`.
- Écrans premium : `PremiumDashboard`, `PremiumRequestsPage`, `PremiumRequestDetail`, `PremiumAuditTrail`.
- Legacy isolé dans `PremiumMvpDemoPanel` (fiche) et scénario (reset, guides).

### Couche premium

Composants actifs sous `src/ui/premium/` :

- `PremiumShell`, `PremiumSidebar`, `PremiumTopbar`
- `PremiumDashboard`, `PremiumRequestsPage`, `PremiumRequestDetail`
- `PremiumWorkflowPipeline`, `PremiumAuditTrail`, `PremiumBadges`
- `PremiumMvpDemoPanel` (accordéon outils MVP)
- `premiumPresentationData.ts`, `premium.css`

### Mode local / API

- Sélection via `VITE_INTERV360_DATA_SOURCE` (`local` par défaut, `api` si `api`).
- Factory : `createRequestsRepository()` → `localRequestsRepository` ou `createApiRequestsRepository()`.
- Mode API : chargement utilisateurs depuis `/api/v1/users`, fallback local en cas d'erreur.

### Profils / permissions UI

- Rôles simulés : demandeur, technicien, responsable, admin, observateur.
- `canRolePerform()` filtre les actions workflow et le reset démo.
- Pas d'authentification réelle — session démo via `demoUserSession` / localStorage.

## 5. Architecture backend et API

### Structure backend

```
projects/interv360/backend/src/
├── index.ts, app.ts
├── api/routes.ts, apiErrors.ts
├── config/cors.ts
├── domain/        types, transitions, user
├── persistence/   SQLite (schema, seed, database)
├── repositories/  usersRepository
├── seed/          demoSeed, usersSeed
└── store/         demoStore (requests, events, transitions)
```

### Stack backend

- Express 4.x, better-sqlite3, CORS.
- Scripts : `dev`, `build` (tsc --noEmit), `test` (vitest).

### Endpoints principaux (`/api/v1`)

| Méthode | Route | Rôle |
|---------|-------|------|
| GET | `/users`, `/users/:id` | Utilisateurs démo |
| GET | `/requests` | Liste demandes |
| GET | `/requests/:id` | Détail demande |
| GET | `/requests/:id/events` | Journal workflow |
| POST | `/requests/:id/transitions` | Transition STAT |
| POST | `/demo/reset` | Reset démo |

### Limites et garde-fous

- Backend **non modifié** pendant le cycle Premium UI (PR #73).
- Données fictives SQLite, pas de CRM, pas d'auth JWT/OAuth.
- Modèle métier STAT-01 à STAT-06 (+ STAT-05 attente), pas de STAT-08.
- Cohérent avec le tag `v0.1.0-mvp` comme borne fonctionnelle.

## 6. Séparation UI / métier

| Couche | Contenu | Connecté au métier |
|--------|---------|-------------------|
| Premium présentation | DEM-248x, clients fictifs, KPIs command center, score urgence simulé | Non — `premiumPresentationData.ts`, `commandCenterPresentation.ts` |
| MVP fonctionnel | `SAV-DEMO-00x`, workflow, transitions, journal | Oui — via repositories |
| Parcours readonly | Qualification, planning, intervention, report | Partiel — affichage seul, données fictives |
| Actions hors scope | Nouvelle demande, Export PDF, Catalogue | Désactivées explicitement |

**Interactions reconnectées (cycle Premium UI) :**

- Dashboard → demandes / détail
- Liste → ouverture fiche
- Fiche → historique complet
- Audit → retour fiche
- Changement de profil conservé

**Risque identifié :** double référentiel visuel (DEM-2481 affiché, `SAV-DEMO-001` en métier). Mapping via `getPresentationRef()` / `getRequestIdFromPresentationRef()` — fonctionnel pour la démo, fragile pour un cycle CRUD ou API réelle.

## 7. Composants premium vs legacy

### Composants premium (actifs dans `App.tsx`)

- `PremiumShell`, `PremiumSidebar`, `PremiumTopbar`
- `PremiumDashboard`, `PremiumRequestsPage`, `PremiumRequestDetail`
- `PremiumWorkflowPipeline`, `PremiumAuditTrail`, `PremiumBadges`
- `PremiumMvpDemoPanel`

### Composants legacy encore présents

| Composant | Usage actuel |
|-----------|--------------|
| `DashboardCommandCenter` | Non importé par `App.tsx` — conservé, tests possibles |
| `RequestsList`, `RequestDetail` | Non importés par `App.tsx` — remplacés par premium |
| `AuditTrailView` | Non importé par `App.tsx` — remplacé par `PremiumAuditTrail` |
| `RequestOperationalPanel`, `RequestWorkflowPipeline` | Legacy CSS ; pipeline premium utilisé à la place |
| `WorkflowActionControl` | Actif — accordéon MVP fiche |
| `DemoResetControl` | Actif — scénario uniquement |
| Parcours readonly (4 écrans) | Actif — accordéon MVP fiche |
| `DemoScenarioGuide`, `DemoOverview`, `DemoReadinessPanel` | Actif — écran scénario |
| `App.css` (~1 500 lignes) | Styles legacy + overrides ; coexiste avec Tailwind premium |

### Analyse

- Legacy conservé pour **tests**, **démo guidée** et **workflow MVP** — pas supprimé volontairement.
- Isolation réussie via accordéons et écran scénario dédié.
- **Risque modéré :** duplication de code UI (deux implémentations liste/détail/audit) augmente le coût de maintenance si évolution fonctionnelle sans stratégie de retrait.

## 8. Tests et qualité

| Validation | Commande | Résultat (audit) |
|------------|----------|------------------|
| Build | `npm run build` | **OK** (tsc + vite, ~1,6 s) |
| Tests | `npm run test -- --run` | **202/202 OK** |

- **28 fichiers** de test frontend.
- Parcours couverts : smoke, navigation démo, mode API, interactions premium, rôles simulés, workflow, reset, filtres/recherche, composants unitaires.
- **Limites :** pas de tests E2E navigateur automatisés dans le repo ; revues visuelles humaines documentées hors CI ; backend testé séparément (`backend` vitest, non exécuté dans cet audit frontend).

## 9. Dette technique identifiée

### Faible

- Warnings `act(...)` React dans certains tests (non bloquant).
- `package.json` app toujours nommé `interv360-inc-01-app` / version `0.1.0` malgré release `v0.2.0-premium-ui`.
- Sidebar « Clients » mappe vers journal — convention de démo, pas produit final.

### Moyenne

- **Double couche UI** (premium Tailwind + legacy CSS custom) — fichiers legacy non retirés.
- **Données présentation** séparées des IDs métier — mapping manuel à maintenir.
- **`App.css` volumineux** — mélange styles historiques et layout démo.
- **Catalogue** désactivé visuellement sans cycle de retrait ou implémentation.

### Forte

- Aucune dette **forte** bloquante identifiée pour la consolidation ou une démo contrôlée.
- Les évolutions fonctionnelles majeures (CRUD, PDF, auth, CRM) impliquent des **nouveaux cycles** avec cadrage — pas de dette « accidentelle » prête à exploser.

| Dette | Impact | Recommandation | Priorité |
|-------|--------|----------------|----------|
| Composants legacy non utilisés par App | Confusion développeur, taille repo | Archiver ou marquer deprecated avant nouveau cycle UI | Moyenne |
| Mapping DEM-248x / SAV-DEMO | Erreurs si cycle CRUD/API étendu | Unifier modèle présentation ou documenter contrat strict | Moyenne |
| App.css + Tailwind dual stack | Coût maintenance styles | Définir stratégie tokens avant prochaine UI | Moyenne |
| Pas d'auth réelle | Bloquant production | Hors scope MVP — cadrer cycle auth dédié | Basse (attendu) |
| Test flaky potentiel | CI instable | Surveiller `App.simulatedRole` en CI | Faible |

## 10. Risques avant nouveau cycle produit

| Évolution | Risque | Niveau |
|-----------|--------|--------|
| CRUD Nouvelle demande | Modèle + API + UI à créer ; conflit refs présentation | Élevé sans cadrage |
| Export PDF réel | Hors scope actuel ; bouton disabled | Moyen |
| Auth / profils avancés | Simulation rôles insuffisante | Élevé |
| Dashboard connecté backend | KPIs aujourd'hui UI-only | Élevé |
| Catalogue | Sidebar disabled, pas de données | Moyen |
| CRM / données réelles | Absent par design | Élevé |
| Maintien données présentation | Régression visuelle si unifié trop tôt | Moyen |
| Évolution workflow (STAT-08, etc.) | Backend + frontend + tests | Élevé |

## 11. Recommandations

### Avant tout nouveau cycle produit

- Valider cet audit et le REX (Chantier 2) avant d'ouvrir un backlog produit.
- Traiter le mapping présentation/métier comme décision d'architecture explicite.
- Appliquer Figma Design-first pour toute nouvelle UI (méthode déjà intégrée).

### Avant évolution backend/API

- Repasser sur le contrat API existant et les tests backend.
- Ne pas étendre SQLite/endpoints sans ADR ou cycle delivery dédié.

### Avant évolution UI

- Décider : étendre la couche premium ou retirer le legacy.
- Éviter une troisième couche UI parallèle.

### Avant publication Notion

- S'appuyer sur le Chantier 4 (inventaire documentaire) — ne pas publier depuis cet audit seul.

## 12. Décision

**Décision proposée :**

> **APPLICATION_SAINE_AVEC_RESERVES**

**Justification :**

1. **Santé technique confirmée** — build OK, 202/202 tests frontend, backend/API inchangés et cohérents avec le MVP tagué.
2. **Premium UI livrable** — couche isolée, interactions MVP reconnectées, garde-fous respectés, release `v0.2.0-premium-ui` publiée.
3. **Réserves assumées** — dualité premium/legacy, données présentation vs métier, et dette documentaire à traiter dans la consolidation avant tout nouveau cycle produit fonctionnel.

## 13. Suites proposées

- **Chantier 2** — REX de l'application actuelle (`interv360-application-rex.md`) ;
- **Chantier 3** — Capitalisation SFIA globale ;
- **Chantier 4** — Revue documentaire complète ;
- **Chantier 5** — Amélioration SFIA (règles, architecture, standards).

Aucune évolution fonctionnelle Interv360 ne doit être lancée avant validation de la consolidation.

---

## 14. Statut de merge

La PR d'audit de l'application actuelle a été mergée dans `main`.

| Élément | Valeur |
|---------|--------|
| PR | #77 — docs: audit current Interv360 application |
| Branche source | `consolidation/interv360-current-app-audit` |
| Branche cible | `main` |
| Commit d'intégration | `c496bc3` |
| Statut | Mergé |
| Type | Documentation d'audit |
| Décision d'audit | `APPLICATION_SAINE_AVEC_RESERVES` |
| Code Interv360 | Non modifié |
| Backend / API / CI | Inchangés |
| `sfia-notion-sync` | Non modifié |
| Exports Figma | Non suivis |

Décision :

> Le Chantier 1 — Audit de l'application actuelle est intégré à `main`. La consolidation peut passer au Chantier 2 — REX de l'application actuelle.
