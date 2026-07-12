# Interv360 — MVP Release Readiness

**Projet** : Interv360  
**Cycle** : MVP Release Readiness  
**Mode** : SFIA Fast Track — Release readiness contrôlée  
**Statut** : Cadrage opérationnel  
**Branche** : `release/interv360-mvp-release-readiness`

---

## 1. Objectif

Ce cycle vise à figer Interv360 comme **MVP produit livrable**, après clôture de la roadmap MVP Final Roadmap.

L'objectif n'est pas d'ajouter de nouvelles fonctionnalités, mais de préparer une base de release claire :

- périmètre livré ;
- critères de validation ;
- limites connues ;
- prérequis d'installation ;
- preuves techniques ;
- note de version ;
- décisions de suite.

---

## 2. Positionnement

Ce cycle démarre après la clôture des six lots de la roadmap MVP Final Roadmap :

| Lot | Statut |
|-----|--------|
| Lot 1 — Backend Users & Session | Mergé |
| Lot 2 — Audit Trail | Mergé |
| Lot 3 — Request Model Finalization | Mergé |
| Lot 4 — API Product Hardening | Mergé |
| Lot 5 — Product UX Finalization | Mergé |
| Lot 6 — Product Industrialization | Mergé |

Décision :

> Le cycle MVP Final Roadmap est clos.  
> Le présent cycle est un nouveau cycle de release readiness, pas un Lot 7.

---

## 3. État MVP

Interv360 dispose désormais :

- d'un backend Node.js / TypeScript ;
- d'une API `/api/v1` durcie ;
- d'une persistance SQLite locale ;
- d'un frontend Vite / React ;
- d'un mode local ;
- d'un mode API ;
- d'un modèle `Request` enrichi ;
- d'un audit trail enrichi ;
- d'un user switcher de démonstration ;
- d'une matrice de permissions ;
- d'une UX MVP finalisée ;
- d'un reset admin ;
- d'un README racine exploitable ;
- de README frontend/backend consolidés ;
- de fichiers `.env.example` ;
- d'un runbook E2E ;
- d'une CI minimale build + tests ;
- de tests frontend/backend stables.

Estimation :

> Interv360 est à environ **96–98 % du MVP produit structuré** défini par la roadmap.

---

## 4. Problème à résoudre

Le MVP est techniquement et fonctionnellement stabilisé, mais il doit encore être figé comme release livrable.

Il manque une synthèse claire pour répondre à ces questions :

- qu'est-ce qui est officiellement livré ?
- comment valider rapidement le MVP ?
- quelles sont les limites assumées ?
- quels prérequis sont nécessaires ?
- quelle version peut être associée au MVP ?
- quels sujets sont exclus de cette release ?
- quelles suites peuvent être ouvertes ensuite ?

---

## 5. Périmètre du cycle

À livrer :

- cadrage release readiness ;
- checklist de validation MVP ;
- synthèse du périmètre livré ;
- release notes MVP ;
- limites connues ;
- prérequis et commandes de validation ;
- décision de version ;
- décision sur tag éventuel ;
- préparation PR unique.

---

## 6. Hors scope

Ce cycle n'introduit pas :

- nouveau développement fonctionnel ;
- correction non bloquante ;
- refonte UX ;
- design system ;
- arc Figma ;
- export Figma ;
- nouveau statut ;
- `STAT-08` ;
- nouveau workflow ;
- nouvelle action métier ;
- CRUD complet ;
- formulaire création demande ;
- authentification réelle ;
- session backend réelle ;
- login ;
- logout ;
- mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- déploiement cloud complet ;
- Docker obligatoire ;
- Kubernetes ;
- Terraform ;
- Helm ;
- supervision ;
- observabilité avancée ;
- CI/CD complète.

---

## 7. Version cible

Version proposée :

`v0.1.0-mvp`

Justification :

- première version MVP structurée ;
- backend/API/frontend/UX/industrialisation présents ;
- usage local et pré-cloud documenté ;
- CI minimale présente ;
- limites enterprise encore assumées.

Décision à confirmer dans le cycle :

- tag Git immédiat ou non ;
- release GitHub immédiate ou non ;
- release notes uniquement documentaires ou release GitHub formelle.

---

## 8. Incréments du cycle

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| REL-01 | Cadrage release readiness | Réalisé |
| REL-02 | Checklist validation MVP | Réalisé |
| REL-03 | Release notes et limites connues | Réalisé |
| REL-04 | Préparation PR unique | Réalisé |

---

## 9. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document release readiness créé | OK |
| Roadmap MVP Final Roadmap reconnue comme close | OK |
| Périmètre livré synthétisé | OK |
| Checklist validation MVP créée | OK |
| Release notes MVP créées | OK |
| Limites connues documentées | OK |
| Version cible décidée | OK — `v0.1.0-mvp` |
| Décision tag / release GitHub prise | OK — report volontaire après merge PR |
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK |
| Backend tests | OK — 125 tests |
| CI minimale conservée | OK |
| Aucun nouveau scope fonctionnel | OK |
| Auth réelle exclue | OK |
| CRM/données réelles exclus | OK |
| CRUD complet exclu | OK |
| Nouveau statut exclu | OK |
| `STAT-08` exclu | OK |
| Figma/export exclus | OK |

---

## 10. Garde-fous

Le cycle doit préserver :

- frontend ;
- backend ;
- API ;
- SQLite ;
- workflow existant ;
- statuts techniques existants ;
- transitions métier existantes ;
- permissions existantes ;
- request model enrichi ;
- audit trail enrichi ;
- mode local ;
- mode API ;
- UX MVP finalisée ;
- reset admin ;
- README/runnable docs ;
- CI minimale.

Le cycle ne doit pas introduire :

- Lot 7 automatique ;
- nouveau périmètre fonctionnel ;
- auth réelle ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- CRUD complet ;
- formulaire création demande ;
- nouveau statut ;
- `STAT-08` ;
- refonte UX ;
- Docker obligatoire ;
- déploiement cloud complet ;
- arc Figma ;
- export Figma.

---

## 11. Décision REL-01

REL-01 valide l'ouverture du cycle **MVP Release Readiness**.

Décisions :

- ne pas ouvrir de Lot 7 dans la roadmap MVP Final Roadmap ;
- ouvrir un cycle distinct de release readiness ;
- figer Interv360 comme MVP industrialisé ;
- préparer une checklist MVP ;
- préparer des release notes MVP ;
- documenter les limites connues ;
- confirmer une version cible ;
- décider si un tag Git / GitHub release doit être créé ;
- ne pas ajouter de nouveau scope fonctionnel ;
- ne pas modifier le comportement produit ;
- ne pas modifier frontend/backend/API/workflow ;
- ne pas ouvrir les sujets enterprise dans ce cycle.

---

## 11.1. REL-02 — Checklist validation MVP

REL-02 formalise la checklist de validation MVP.

Objectif :

> disposer d'une checklist exploitable pour confirmer qu'Interv360 peut être considéré comme MVP produit livrable en local / pré-cloud.

Cette checklist ne crée pas de nouveau périmètre fonctionnel.

---

### 11.1.1. Checklist Go / No-Go

| Domaine | Critère Go | Statut attendu |
|---------|------------|----------------|
| Roadmap | Lots 1 à 6 mergés | OK |
| Release readiness | Cycle distinct ouvert, pas Lot 7 | OK |
| Version cible | Version proposée `v0.1.0-mvp` | À confirmer |
| Frontend | Build OK | À valider |
| Frontend | Tests OK — 191 ou plus | À valider |
| Backend | Build OK | À valider |
| Backend | Tests OK — 125 ou plus | À valider |
| CI | Workflow minimal build+test présent | À valider |
| Documentation | README racine exploitable | OK |
| Documentation | README app/backend exploitables | OK |
| Documentation | Runbook E2E exploitable | OK |
| Environnement | `.env.example` frontend/backend présents | OK |
| Mode local | Fonctionnel sans backend | À valider |
| Mode API | Fonctionnel avec backend local | À valider |
| SQLite | Persistance locale documentée | OK |
| Reset | Reset admin / API documenté | OK |
| Garde-fous | Aucun scope enterprise introduit | OK |

Décision Go / No-Go :

| Décision | Condition |
|----------|-----------|
| Go MVP | Tous les contrôles critiques sont OK |
| Go avec réserve | Seuls des écarts documentaires mineurs subsistent |
| No-Go | Une validation build/test échoue ou un garde-fou critique est violé |

---

### 11.1.2. Checklist fonctionnelle

| Capacité MVP | Validation attendue | Statut |
|--------------|--------------------|--------|
| Liste des demandes | Demandes fictives visibles en mode local et API | À valider |
| Fiche demande | Informations métier enrichies visibles | À valider |
| Statuts métier | Statuts lisibles côté UI | À valider |
| Workflow nominal | Transitions autorisées fonctionnelles | À valider |
| Actions bloquées | Actions interdites désactivées avec motif | À valider |
| Permissions | Rôles requester / technician / manager / admin / viewer cohérents | À valider |
| User switcher | Utilisateur courant visible et modifiable | À valider |
| Audit trail | Actions tracées avec acteur si disponible | À valider |
| Journal UI | Historique lisible acteur / action / date | À valider |
| Mode local | Utilisable sans backend | À valider |
| Mode API | Utilisable avec backend local | À valider |
| Backend indisponible | Pas de fallback silencieux vers mode local | À valider |
| Reset admin | Reset disponible pour admin | À valider |

---

### 11.1.3. Checklist API / backend

| Contrôle | Attendu | Statut |
|----------|---------|--------|
| `GET /health` | Backend disponible | À valider |
| `GET /api/v1/users` | 5 utilisateurs fictifs actifs | À valider |
| `GET /api/v1/requests` | Liste demandes enrichies | À valider |
| `GET /api/v1/requests/:id` | Détail demande enrichi | À valider |
| `POST /api/v1/requests/:id/transitions` | Transition workflow | À valider |
| `GET /api/v1/requests/:id/events` | Journal enrichi | À valider |
| `POST /api/v1/demo/reset` | Reset démo si `DEMO_MODE=true` | À valider |
| Erreurs API | Format `{ error: { code, message } }` | À valider |
| Acteur invalide | `INVALID_ACTOR_USER` | À valider |
| Action invalide | `INVALID_TRANSITION_ACTION` | À valider |
| Transition interdite | `TRANSITION_NOT_ALLOWED` | À valider |
| Route inconnue | `ROUTE_NOT_FOUND` | À valider |

---

### 11.1.4. Checklist technique

| Domaine | Contrôle | Statut |
|---------|----------|--------|
| Frontend | `npm run build` | À valider |
| Frontend | `npm run test -- --run` | À valider |
| Backend | `npm run build` | À valider |
| Backend | `npm run test` | À valider |
| CI | `.github/workflows/interv360-ci.yml` présent | À valider |
| CI | Node.js 20 | À valider |
| CI | Frontend install/build/test | À valider |
| CI | Backend install/build/test | À valider |
| CI | Aucun secret | À valider |
| CI | Aucun déploiement | À valider |
| Env frontend | `app/.env.example` présent | OK |
| Env backend | `backend/.env.example` présent | OK |
| SQLite | DB locale ignorée par Git | OK |
| Scripts | Scripts npm inchangés | OK |

---

### 11.1.5. Checklist documentation

| Document | Attendu | Statut |
|----------|---------|--------|
| `projects/interv360/README.md` | Point d'entrée MVP | OK |
| `projects/interv360/app/README.md` | Référence frontend | OK |
| `projects/interv360/backend/README.md` | Référence backend | OK |
| `projects/interv360/08-presentation/interv360-e2e-demo-runbook.md` | Runbook E2E | OK |
| `projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md` | Roadmap close + cycle release | OK |
| `projects/interv360/04-delivery/2026-07-02-mvp-release-readiness.md` | Release readiness | OK |
| `.env.example` | Exemples sans secret | OK |
| CI | Workflow documenté dans README/runbook | OK |

---

### 11.1.6. Checklist garde-fous

| Garde-fou | Statut |
|----------|--------|
| Pas de Lot 7 automatique | OK |
| Pas de nouveau scope fonctionnel | OK |
| Pas de modification frontend fonctionnelle | OK |
| Pas de modification backend fonctionnelle | OK |
| Pas de modification API | OK |
| Pas de modification SQLite | OK |
| Pas de modification workflow métier | OK |
| Pas de modification statuts | OK |
| Pas de modification permissions | OK |
| Pas de modification request model | OK |
| Pas de modification audit trail | OK |
| Pas d'auth réelle | OK |
| Pas de login/logout/password | OK |
| Pas de token | OK |
| Pas d'OAuth/JWT/SSO | OK |
| Pas d'Entra ID | OK |
| Pas de CRM | OK |
| Pas de données réelles | OK |
| Pas de CRUD complet | OK |
| Pas de formulaire création demande | OK |
| Pas de nouveau statut | OK |
| Pas de `STAT-08` | OK |
| Pas de Docker obligatoire | OK |
| Pas de déploiement cloud complet | OK |
| Pas d'arc Figma | OK |
| Pas d'export Figma | OK |
| Pas de Notion | OK |
| Pas de Controlled Delivery | OK |
| Pas de `sfia-notion-sync` | OK |

---

### 11.1.7. Checklist de validation rapide

Commandes à exécuter avant décision Go MVP :

```bash
cd /Users/morris/Projects/sfia-workspace/projects/interv360/app
npm run build
npm run test -- --run
```

Attendu :

- frontend build OK ;
- frontend tests : 191 ou plus.

```bash
cd /Users/morris/Projects/sfia-workspace/projects/interv360/backend
npm run build
npm run test
```

Attendu :

- backend build OK ;
- backend tests : 125 ou plus.

---

### 11.1.8. Décision REL-02

REL-02 valide la structure de checklist MVP.

Décisions :

- utiliser cette checklist comme base de décision Go / No-Go MVP ;
- exécuter les validations finales en REL-03 ou REL-04 selon le rythme du cycle ;
- conserver la version cible proposée `v0.1.0-mvp` jusqu'à décision finale ;
- ne pas créer de tag Git dans REL-02 ;
- ne pas créer de GitHub Release dans REL-02 ;
- ne pas ajouter de nouveau scope fonctionnel.

---

## 11.2. REL-03 — Release notes et limites connues

REL-03 formalise les release notes de la version cible `v0.1.0-mvp` et les limites connues de la release.

Objectif :

> disposer d'une synthèse claire de ce qui est livré, de ce qui est explicitement exclu, et des conditions minimales de validation avant PR.

Cette section ne crée pas de tag Git et ne crée pas de GitHub Release.

---

### 11.2.1. Version cible

Version cible retenue pour la release readiness :

`v0.1.0-mvp`

Justification :

- première version MVP structurée ;
- six lots MVP mergés ;
- produit installable localement ;
- produit testable localement ;
- frontend et backend documentés ;
- mode local disponible ;
- mode API disponible ;
- CI minimale disponible ;
- limites enterprise explicitement assumées.

Décision :

| Élément | Décision |
|---------|----------|
| Version cible | `v0.1.0-mvp` |
| Tag Git en REL-03 | Non |
| GitHub Release en REL-03 | Non |
| Décision tag / release | À confirmer en REL-04 |
| Release notes documentaires | Oui |

---

### 11.2.2. Périmètre officiellement livré

La version cible `v0.1.0-mvp` couvre :

| Domaine | Livré |
|---------|-------|
| Frontend | Application Vite / React |
| Backend | API Node.js / TypeScript |
| Persistance | SQLite locale |
| API | Contrat `/api/v1` durci |
| Users | Utilisateurs fictifs backend |
| Session | Session applicative minimale de démonstration |
| Permissions | Matrice de permissions simulée |
| Workflow | Cycle de vie demande exploitable |
| Request model | Modèle demande enrichi |
| Audit trail | Historique enrichi avec acteur si disponible |
| UX MVP | Interface finalisée pour démonstration produit |
| Mode local | Utilisable sans backend |
| Mode API | Utilisable avec backend local |
| Reset | Reset admin / démo documenté |
| Documentation | README racine + README app/backend |
| Runbook | Runbook E2E harmonisé |
| Environnement | `.env.example` frontend/backend |
| CI | Workflow minimal build + tests |

---

### 11.2.3. Capacités produit incluses

La release MVP permet de démontrer :

- consultation d'une liste de demandes ;
- consultation d'une fiche demande enrichie ;
- visualisation d'un statut métier lisible ;
- exécution de transitions autorisées ;
- blocage des actions non autorisées ;
- affichage des motifs d'indisponibilité ;
- visualisation de l'utilisateur courant ;
- changement d'utilisateur de démonstration ;
- application de permissions selon rôle ;
- consultation d'un historique lisible ;
- traçabilité des actions ;
- reset d'environnement de démonstration ;
- usage en mode local ;
- usage en mode API ;
- validation par tests automatisés.

---

### 11.2.4. Release notes `v0.1.0-mvp`

#### Summary

`v0.1.0-mvp` formalise la première version MVP structurée d'Interv360.

Cette version clôture la roadmap MVP Final Roadmap et fige une base produit installable, testable et exploitable localement / pré-cloud.

#### Highlights

- Backend TypeScript avec API `/api/v1`.
- Persistance SQLite locale.
- Frontend Vite / React.
- Mode local et mode API.
- Utilisateurs fictifs backend.
- Session applicative minimale.
- Modèle demande enrichi.
- Audit trail enrichi.
- Permissions simulées.
- UX MVP finalisée.
- README et runbook consolidés.
- Fichiers `.env.example`.
- CI minimale build + tests.

#### Validation cible

- frontend build OK ;
- frontend tests : 191 ou plus ;
- backend build OK ;
- backend tests : 125 ou plus ;
- CI minimale conservée.

#### Scope assumé

Cette release est une version MVP locale / pré-cloud.

Elle n'est pas une version production enterprise.

---

### 11.2.5. Limites connues

| Domaine | Limite connue |
|---------|---------------|
| Authentification | Pas d'authentification réelle |
| Session | Pas de session backend sécurisée |
| Sécurité | Pas de token, OAuth, JWT ou SSO |
| Identité | Pas d'intégration Entra ID |
| Données | Pas de données réelles |
| CRM | Pas d'intégration CRM |
| CRUD | Pas de CRUD complet |
| Création demande | Pas de formulaire complet de création demande |
| Workflow | Pas de moteur workflow externe |
| Statuts | Pas de nouveau statut `STAT-08` |
| Notifications | Pas de notifications |
| Reporting | Pas de reporting avancé |
| Supervision | Pas de supervision applicative |
| Observabilité | Pas d'observabilité avancée |
| Déploiement | Pas de déploiement cloud complet |
| Conteneurisation | Pas de Docker obligatoire |
| Infrastructure | Pas de Kubernetes, Terraform, Helm |
| CI/CD | Pas de CI/CD complète |
| Design | Pas d'arc Figma |
| Exports | Pas d'export Figma |
| Données multi-client | Pas de multi-tenant |
| SLA | Pas de SLA de production |

---

### 11.2.6. Prérequis d'installation

Prérequis minimum :

- Node.js compatible avec le projet ;
- npm ;
- accès au repository ;
- terminal local ;
- ports locaux disponibles pour frontend/backend ;
- environnement local autorisant SQLite ;
- configuration `.env` facultative via `.env.example`.

Variables principales :

| Cible | Variable | Usage |
|-------|----------|-------|
| Frontend | `VITE_INTERV360_DATA_SOURCE` | `local` ou `api` |
| Frontend | `VITE_INTERV360_API_BASE_URL` | URL backend API |
| Backend | `PORT` | Port backend |
| Backend | `SQLITE_PATH` | Chemin DB SQLite |
| Backend | `DEMO_MODE` | Active le reset démo |
| Backend | `INTERV360_CORS_ORIGINS` | Origines frontend autorisées |

---

### 11.2.7. Commandes de validation release

Frontend :

```bash
cd /Users/morris/Projects/sfia-workspace/projects/interv360/app
npm run build
npm run test -- --run
```

Backend :

```bash
cd /Users/morris/Projects/sfia-workspace/projects/interv360/backend
npm run build
npm run test
```

Git / diff :

```bash
cd /Users/morris/Projects/sfia-workspace
git status --short
git diff --stat
```

---

### 11.2.8. Conditions de Go MVP

La release peut être considérée Go MVP si :

- build frontend OK ;
- tests frontend OK avec 191 tests ou plus ;
- build backend OK ;
- tests backend OK avec 125 tests ou plus ;
- CI minimale présente ;
- README et runbook présents ;
- `.env.example` frontend/backend présents ;
- aucune régression fonctionnelle détectée ;
- aucun garde-fou critique violé ;
- limites connues acceptées ;
- version cible confirmée.

---

### 11.2.9. Conditions de Go avec réserve

La release peut être considérée Go avec réserve si :

- tous les builds/tests sont OK ;
- aucun garde-fou critique n'est violé ;
- seules des réserves documentaires mineures subsistent ;
- la version cible est confirmée ;
- le tag / GitHub Release est reporté volontairement.

---

### 11.2.10. Conditions de No-Go

La release doit être considérée No-Go si :

- build frontend en échec ;
- tests frontend en échec ;
- build backend en échec ;
- tests backend en échec ;
- CI minimale absente ou cassée ;
- modification fonctionnelle non prévue ;
- introduction d'un scope enterprise ;
- introduction d'une auth réelle ;
- introduction d'un token/OAuth/JWT/SSO ;
- introduction d'un CRM ou de données réelles ;
- introduction d'un CRUD complet ;
- introduction d'un nouveau statut ;
- introduction de `STAT-08` ;
- modification de `sfia-notion-sync` ;
- ajout d'un export Figma non demandé.

---

### 11.2.11. Sujets candidats après release

Les sujets suivants sont exclus de `v0.1.0-mvp` mais peuvent être cadrés ensuite comme cycles distincts :

| Sujet | Nature |
|-------|--------|
| Pré-release finale / tag | Release management |
| Déploiement cible | Cloud / infra |
| Supervision | Exploitation |
| Observabilité | Logs / métriques / traces |
| Auth réelle | Sécurité / identité |
| Entra ID / SSO | Enterprise identity |
| CRM | Intégration métier |
| Données réelles | Migration / gouvernance |
| CRUD complet | Évolution produit |
| Création demande | Évolution fonctionnelle |
| Reporting | Pilotage |
| Notifications | Expérience utilisateur |
| Design system | UX/UI |
| Figma | Design produit |

---

### 11.2.12. Décision REL-03

REL-03 valide :

- la version cible `v0.1.0-mvp` ;
- le périmètre officiellement livré ;
- les release notes documentaires ;
- les limites connues ;
- les prérequis d'installation ;
- les commandes de validation ;
- les conditions Go / Go avec réserve / No-Go ;
- l'absence de tag Git en REL-03 ;
- l'absence de GitHub Release en REL-03.

Décisions :

- reporter la décision tag Git à REL-04 ;
- reporter la décision GitHub Release à REL-04 ;
- exécuter les validations finales en REL-04 ;
- préparer la PR unique en REL-04 ;
- ne pas ajouter de nouveau scope fonctionnel.

---

## 11.3. REL-04 — Validations finales et préparation PR unique

REL-04 clôture opérationnellement le cycle **MVP Release Readiness**.

Objectif :

> confirmer que la release cible `v0.1.0-mvp` est prête à être proposée en PR unique, sans ajout de périmètre fonctionnel.

---

### 11.3.1. Validations finales

| Validation | Résultat |
|------------|----------|
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK |
| Backend tests | OK — 125 tests |
| CI minimale | OK |
| Working tree | Propre hors exports design non suivis éventuels |
| Diff fonctionnel | Aucun |
| Diff backend | Aucun |
| Diff API | Aucun |
| Diff CI | Aucun |
| Diff scripts npm | Aucun |

---

### 11.3.2. Décision Go MVP

Décision :

> **Go MVP avec release readiness documentaire.**

Justification :

- roadmap MVP Final Roadmap close ;
- Lots 1 à 6 mergés ;
- MVP estimé à 96–98% ;
- release cible `v0.1.0-mvp` documentée ;
- checklist MVP complète ;
- release notes documentaires prêtes ;
- limites connues explicites ;
- validations build/test OK ;
- CI minimale conservée ;
- aucun garde-fou critique violé.

---

### 11.3.3. Décision tag Git / GitHub Release

Décision :

| Élément | Décision |
|---------|----------|
| Tag Git dans REL-04 | Non |
| GitHub Release dans REL-04 | Non |
| Tag cible recommandé après merge | `v0.1.0-mvp` |
| GitHub Release recommandée après merge | Oui, si décision produit confirmée |
| Moment recommandé | Après merge de la PR release readiness dans `main` |

Justification :

- éviter de taguer une branche non mergée ;
- conserver un historique propre ;
- créer le tag uniquement depuis `main` après merge ;
- garder la PR release readiness comme point de validation final.

---

### 11.3.4. PR unique

Titre proposé :

`Prepare Interv360 MVP release readiness`

Corps proposé :

```markdown
## Summary
This PR prepares the Interv360 MVP release readiness cycle.
It closes the release readiness documentation for the target version `v0.1.0-mvp`, after completion of the MVP Final Roadmap and its six delivery lots.
## What changed
- adds the MVP release readiness document;
- confirms the MVP Final Roadmap is closed;
- confirms this cycle is not a Lot 7;
- defines the target version `v0.1.0-mvp`;
- adds the MVP validation checklist;
- defines Go / Go with reserve / No-Go criteria;
- documents the officially delivered MVP scope;
- adds documentary release notes;
- documents known limitations;
- documents installation prerequisites and validation commands;
- records final validation results;
- records the tag / GitHub Release decision.
## Validation
- Frontend build: OK
- Frontend tests: OK — 191 tests
- Backend build: OK
- Backend tests: OK — 125 tests
- Minimal CI: preserved
## Decision
Go MVP with documentary release readiness.
The Git tag and GitHub Release are not created in this PR.
Recommended next step after merge: create tag `v0.1.0-mvp` from `main`, if the product decision is confirmed.
## Guardrails
No frontend behavior change.
No backend behavior change.
No API change.
No SQLite change.
No workflow change.
No status change.
No permission change.
No request model change.
No audit trail change.
No npm script change.
No CI change.
No CRUD.
No request creation form.
No real authentication.
No login/password.
No token.
No OAuth/JWT/SSO.
No CRM.
No real data.
No new status.
No `STAT-08`.
No mandatory Docker.
No full cloud deployment.
No heavy CI/CD.
No Figma arc.
No Figma export.
No Notion publication.
No Controlled Delivery change.
No `sfia-notion-sync` change.
```

---

### 11.3.5. Décision REL-04

REL-04 valide :

- validations finales OK ;
- décision Go MVP ;
- PR unique préparée ;
- tag Git reporté après merge ;
- GitHub Release reportée après merge ;
- aucun nouveau scope fonctionnel ;
- aucun garde-fou critique violé.

Décision finale :

Le cycle MVP Release Readiness est prêt pour PR.

Après merge, la prochaine action recommandée sera un post-merge léger, puis décision explicite de création du tag `v0.1.0-mvp` depuis `main`.

---

## 11.4. Post-merge — MVP Release Readiness

Le cycle **MVP Release Readiness** est mergé dans `main`.

| Élément | Valeur |
|---------|--------|
| PR | #71 — https://github.com/mcleland147/sfia-workspace/pull/71 |
| Source | `release/interv360-mvp-release-readiness` |
| Cible | `main` |
| Méthode | Merge commit GitHub PR |
| Commit merge | `5b3ac6c` |
| Main synchronisée | OK |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 191 tests |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 125 tests |
| CI minimale | OK |
| Tag Git | Créé depuis `main` après ce commit post-merge |
| GitHub Release | Non créée — décision reportée |
| Working tree | Propre hors exports design non suivis éventuels |

### Décision post-merge

Le cycle **MVP Release Readiness** est clôturé.

Décisions confirmées :

- le MVP Final Roadmap est clos ;
- les six lots MVP sont mergés ;
- la release cible `v0.1.0-mvp` est documentée ;
- la checklist Go / No-Go est documentée ;
- les release notes documentaires sont prêtes ;
- les limites connues sont explicites ;
- les validations post-merge sont OK ;
- la décision est **Go MVP avec release readiness documentaire**.

### Décision tag Git

Décision :

> Créer le tag Git `v0.1.0-mvp` depuis `main` après le commit post-merge.

Justification :

- la PR Release Readiness est mergée ;
- `main` porte désormais l'état documentaire final ;
- les validations post-merge sont OK ;
- le tag représente la borne officielle du MVP Interv360 local / pré-cloud.

### Décision GitHub Release

Décision :

> Ne pas créer de GitHub Release automatiquement dans ce cycle.

Justification :

- le tag Git suffit à matérialiser la borne MVP ;
- la GitHub Release pourra être créée ensuite si une décision produit formelle est prise ;
- cela évite d'introduire une publication trop officielle avant choix de diffusion.

### Synthèse finale

Interv360 est désormais figé comme MVP local / pré-cloud :

- installable ;
- testable ;
- documenté ;
- validé ;
- industrialisé ;
- borné par un tag Git cible `v0.1.0-mvp`.

Aucun nouveau périmètre fonctionnel n'a été introduit.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Track.

---

## 12. Prochaine étape

Tag Git `v0.1.0-mvp` créé depuis `main` après commit du statut post-merge.

La GitHub Release n'est pas créée automatiquement.

Les prochains cycles possibles devront être cadrés séparément :

- déploiement cible ;
- supervision / observabilité ;
- authentification réelle ;
- CRM / données réelles ;
- CRUD complet ;
- création demande ;
- design system / Figma si besoin.
