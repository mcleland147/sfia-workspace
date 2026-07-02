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
| REL-03 | Release notes et limites connues | À faire |
| REL-04 | Préparation PR unique | À venir |

---

## 9. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document release readiness créé | OK |
| Roadmap MVP Final Roadmap reconnue comme close | OK |
| Périmètre livré synthétisé | Partiel — checklist MVP |
| Checklist validation MVP créée | OK |
| Release notes MVP créées | À faire |
| Limites connues documentées | À faire |
| Version cible décidée | À confirmer — `v0.1.0-mvp` proposée |
| Décision tag / release GitHub prise | À faire |
| Frontend build | À valider |
| Frontend tests | À valider |
| Backend build | À valider |
| Backend tests | À valider |
| CI minimale conservée | À valider |
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
| `projects/interv360/09-architecture/interv360-mvp-final-roadmap.md` | Roadmap close + cycle release | OK |
| `projects/interv360/07-delivery/mvp-release-readiness.md` | Release readiness | OK |
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

## 12. Prochaine étape

Exécuter **REL-03** :

Release notes et limites connues
