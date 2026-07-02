# Interv360

Interv360 est un MVP de suivi de demandes d'intervention.

Le projet permet de démontrer :

- une liste de demandes d'intervention ;
- une fiche demande enrichie ;
- un workflow métier ;
- des permissions simulées par utilisateur ;
- un audit trail enrichi ;
- un mode local sans backend ;
- un mode API avec backend local et SQLite ;
- un reset de démonstration ;
- une UX MVP finalisée.

Les données sont fictives et le produit ne contient pas d'authentification réelle.

---

## État MVP

Interv360 est actuellement dans la phase de finalisation produit MVP.

| Lot | Statut |
|-----|--------|
| Lot 1 — Backend Users & Session | Mergé |
| Lot 2 — Audit Trail | Mergé |
| Lot 3 — Request Model Finalization | Mergé |
| Lot 4 — API Product Hardening | Mergé |
| Lot 5 — Product UX Finalization | Mergé |
| Lot 6 — Product Industrialization | En cours |

Avancement roadmap :

- après Lot 5 : environ 94 % MVP produit ;
- cible après Lot 6 : environ 96–98 % MVP produit.

---

## Structure du projet

| Dossier | Usage |
|---------|-------|
| `app/` | Frontend Vite / React |
| `backend/` | Backend Node.js / TypeScript / SQLite |
| `07-delivery/` | Documents de delivery par lot |
| `08-presentation/` | Runbooks et scripts de démonstration |
| `09-architecture/` | Roadmap et documents d'architecture produit |

---

## Prérequis

- Node.js compatible avec le projet ;
- npm ;
- un terminal pour le frontend ;
- un terminal supplémentaire pour le backend en mode API.

---

## Installation rapide

Depuis la racine du repository :

```bash
cd projects/interv360/app
npm install
cd ../backend
npm install
```

---

## Lancer Interv360 en mode local

Le mode local est le mode le plus simple. Il ne nécessite pas de backend.

```bash
cd projects/interv360/app
npm run dev
```

Attendu :

- frontend disponible sur http://localhost:5173/ (ou port Vite équivalent : 5174, 5175) ;
- badge **Mode local** ;
- demandes de démonstration visibles ;
- workflow et user switcher disponibles côté frontend.

---

## Lancer Interv360 en mode API local

Le mode API connecte le frontend au backend local.

**Terminal 1 — backend**

```bash
cd projects/interv360/backend
npm run dev
```

Attendu :

```text
Interv360 backend listening on http://localhost:3001
```

**Terminal 2 — frontend connecté à l'API**

```bash
cd projects/interv360/app
VITE_INTERV360_DATA_SOURCE=api \
VITE_INTERV360_API_BASE_URL=http://localhost:3001/api/v1 \
npm run dev
```

Attendu :

- badge **Mode API** ;
- demandes chargées depuis le backend ;
- persistance SQLite locale ;
- reset API disponible pour l'administrateur ;
- pas de fallback silencieux vers le mode local si le backend est indisponible.

---

## Commandes essentielles

### Frontend

| Commande | Usage |
|----------|-------|
| `npm run dev` | Lance le frontend Vite |
| `npm run build` | Compile le frontend |
| `npm run test -- --run` | Lance les tests frontend |
| `npm run preview` | Prévisualise le build frontend |

### Backend

| Commande | Usage |
|----------|-------|
| `npm run dev` | Lance le backend local |
| `npm run build` | Vérifie les types TypeScript (`tsc --noEmit`) |
| `npm run test` | Lance les tests backend |

---

## Validation rapide

**Frontend**

```bash
cd projects/interv360/app
npm run build
npm run test -- --run
```

Attendu : build OK ; **191 tests** ou plus.

**Backend**

```bash
cd projects/interv360/backend
npm run build
npm run test
```

Attendu : build OK ; **125 tests** ou plus.

---

## Données et reset

Interv360 utilise des données fictives.

En mode API, le backend persiste l'état dans SQLite (`backend/data/interv360.sqlite` par défaut).

Points clés :

- **mode local** : données embarquées côté frontend (`localStorage`) ;
- **mode API** : données servies par le backend local ;
- SQLite conserve l'état entre redémarrages backend ;
- reset disponible dans l'interface pour le profil administrateur ;
- endpoint reset : `POST /api/v1/demo/reset`.

---

## Variables d'environnement

Des exemples locaux sont disponibles :

| Fichier | Usage |
|---------|-------|
| `app/.env.example` | Variables frontend pour mode local/API |
| `backend/.env.example` | Variables backend pour port, SQLite, reset et CORS |

Pour créer une configuration locale :

```bash
cd projects/interv360/app
cp .env.example .env
cd ../backend
cp .env.example .env
```

Les fichiers `.env` sont locaux et ne doivent pas être commités. Les valeurs par défaut permettent déjà de lancer le MVP sans fichier `.env`.

Détails : [app/README.md](app/README.md) et [backend/README.md](backend/README.md).

| Variable | Côté | Usage |
|----------|------|-------|
| `VITE_INTERV360_DATA_SOURCE` | Frontend | Choix `local` ou `api` |
| `VITE_INTERV360_API_BASE_URL` | Frontend | URL API backend |
| `PORT` | Backend | Port HTTP backend |
| `SQLITE_PATH` | Backend | Chemin de la base SQLite |
| `DEMO_MODE` | Backend | Activation du mode démonstration |
| `INTERV360_CORS_ORIGINS` | Backend | Origins CORS autorisées |
| `CORS_ORIGIN` | Backend | Legacy — origine unique si `INTERV360_CORS_ORIGINS` absent |

---

## Stratégie de déploiement simple

Le MVP reste orienté local / pré-cloud.

Stratégie cible simple :

- frontend : build statique Vite (`app/dist/`) ;
- backend : API Node.js / TypeScript à exécuter comme service applicatif ;
- données : SQLite locale pour démonstration ou environnement contrôlé ;
- configuration : variables d'environnement ;
- reset : endpoint de démonstration activé uniquement si `DEMO_MODE=true`.

Hors périmètre actuel :

- déploiement cloud complet ;
- Docker obligatoire ;
- Kubernetes ;
- Terraform ;
- CI/CD complète ;
- supervision avancée ;
- authentification réelle.

---

## CI minimale

Interv360 dispose d'une CI GitHub Actions minimale :

```text
.github/workflows/interv360-ci.yml
```

Elle s'exécute sur les pull requests et les pushes vers `main` qui modifient `projects/interv360/**`.

Étapes :

- installation frontend ;
- build frontend ;
- tests frontend ;
- installation backend ;
- build backend ;
- tests backend.

La CI ne réalise pas :

- déploiement ;
- build Docker ;
- publication cloud ;
- analyse de sécurité avancée ;
- supervision.

---

## Documentation utile

| Document | Usage |
|----------|-------|
| [app/README.md](app/README.md) | Détails frontend |
| [backend/README.md](backend/README.md) | Détails backend |
| [08-presentation/interv360-e2e-demo-runbook.md](08-presentation/interv360-e2e-demo-runbook.md) | Runbook de démonstration et contrôles E2E |
| [09-architecture/interv360-mvp-final-roadmap.md](09-architecture/interv360-mvp-final-roadmap.md) | Roadmap MVP final |
| [07-delivery/product-industrialization.md](07-delivery/product-industrialization.md) | Delivery du lot d'industrialisation |

---

## Limites assumées

Le MVP n'introduit pas :

- authentification réelle ;
- login / logout ;
- mot de passe ;
- token ;
- OAuth / JWT / SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- CRUD complet ;
- formulaire création demande ;
- nouveau statut ;
- `STAT-08` ;
- déploiement cloud complet ;
- Docker obligatoire ;
- CI/CD complète ;
- supervision avancée ;
- multi-tenant ;
- design system complet ;
- export Figma.

---

## Mode de livraison

La finalisation du MVP suit l'approche **SFIA Fast Track** :

- un lot = une capacité produit exploitable ;
- une PR unique par lot ;
- post-merge léger ;
- tests obligatoires ;
- garde-fous explicites ;
- pas de publication Notion sans demande explicite.

---

## Documentation SFIA (historique)

Le projet pilote SFIA conserve des dossiers de cadrage, processus et architecture documentaire :

| Dossier | Rôle |
|---------|------|
| `00-intake/` | Intake validé |
| `01-cadrage/` | Cadrage métier |
| `02-architecture/` | Clarification MVP |
| `03-process/` | Processus BPMN |
| `06-ux-ui/` | Reprise UX/UI documentaire |

Voir `project.json` pour les métadonnées structurées du projet.
