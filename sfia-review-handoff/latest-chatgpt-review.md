# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 11:30:00 CEST (+0200) |
| **Niveau** | Full |
| **Mono-cycle** | V2-A3 Project Workspace UI — delivery |
| **Repository** | mcleland147/sfia-workspace |
| **Workspace** | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| **Cycle** | 8 — Delivery / implémentation UI |
| **Profil** | Standard · Standard renforcé · EVOL |
| **Gate Morris consommé** | GO CYCLE V2-A3 PROJECT WORKSPACE UI |
| **Branche** | delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui |
| **Base / HEAD** | d0e498ec1636122246e0de0103c50fb3ccb9fdd7 |
| **Commits projet** | aucun (working tree local non commitée) |
| **Push / PR / merge** | non |
| **Verdict unique** | **STOP — V2-A1 MODIFICATION REQUIRED — PROCESS-LOCAL SINGLETON NOT SHARED ACROSS NEXT ROUTES — MORRIS DECISION REQUIRED** |

## Git Review Index

| Champ | Valeur |
|-------|--------|
| base | origin/main @ d0e498ec1636122246e0de0103c50fb3ccb9fdd7 |
| branche | delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui |
| HEAD | d0e498ec1636122246e0de0103c50fb3ccb9fdd7 (0 commits ahead) |
| tracked dirty | oui — lot UI local non commit |
| stage | vide |
| untracked | .tmp-sfia-review/** + nouveaux fichiers V2-A3 |
| review pack | full |
| verdict | STOP — V2-A1 modification required |

## Review pack content coverage

| Critère | Statut |
|---------|--------|
| modified/created UI content included | yes |
| blocker evidence included | yes |
| validations included | yes |
| synthesis only | **no** |
| review pack verdict | **complete** |

## Sources consultées

| Source | Rôle |
|--------|------|
| handoff tip cb0636f / post-merge V2-A2 | fondation main |
| V2-A2 create UI + README | parcours / patterns |
| vertical-slice-runtime/actions.ts | getProjectRuntimeAction déjà présent |
| vertical-slice-runtime/singleton.ts | D-V2-02 module-level let |
| StudioShell / navigation | extension shell route |
| import boundary tests | garde-fous UI |

## Local Git Truth Check

```text
branch = delivery/sfia-studio-visible-slice-v2-a3-project-workspace-ui
HEAD = d0e498ec1636122246e0de0103c50fb3ccb9fdd7
origin/main = d0e498ec1636122246e0de0103c50fb3ccb9fdd7
rev-list = 0 0
pre-check base = OK
```

## Travail UI réalisé (local, non commit)

### Fichiers nouveaux

- projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
- projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceClient.tsx
- projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
- projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
- projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests)
- projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a3-project-workspace-ui/README.md

### Fichiers modifiés

- CreateProjectForm.tsx — CTA Ouvrir l espace de travail
- RuntimeDisclosureBanner.tsx — surface=workspace
- navigation.ts — StudioProjectWorkspaceRoute + helper
- importBoundaries.test.ts — allowlist client loader
- createProjectUi.test.tsx — assert lien workspace

### Architecture UI proposée

```text
UI Create → createProjectRuntimeAction → V2-A1 → V1
UI Workspace Client → getProjectRuntimeAction → V2-A1 → V1 getProjectOverview
→ ProjectWorkspaceView projection
```

Disclosures : LOCAL_PROCESS · NOT_GUARANTEED · DISABLED · NOT_READY.

Core V1 et contrats V2-A1 non modifiés.

## Blocker runtime (stop condition)

Preuve locale :

1. POST /studio/projects/new crée un Project (HTTP 200, success UI).
2. Navigation vers /studio/projects/prj%3A….
3. ProjectWorkspaceClient appelle getProjectRuntimeAction (POST 200).
4. Réponse PROJECT_NOT_FOUND alors que l id vient d être créé dans le même processus Node.

Cause la plus probable :

- singleton.ts stocke le runtime dans un let module-scope ;
- Next.js 15 charge des graphes/chunks distincts pour les Server Actions des routes /new et /[id] ;
- chaque chunk obtient sa propre instance du module → stores V1 mémoire distincts.

Contournements UI essayés :

- chargement via Server Component direct → même échec ;
- chargement via Client + Server Action (ProjectWorkspaceClient) → même échec.

Correction minimale requise (hors allowlist actuelle) :

- ancrer le singleton V2-A1 sur globalThis (ou équivalent process-global) dans
  lib/vertical-slice-runtime/singleton.ts pour honorer D-V2-02 sous Next multi-chunk.

Cela constitue une modification V2-A1 → stop condition du gate.

## Validations (hors parcours runtime create→workspace)

| Contrôle | Résultat |
|----------|----------|
| UI + runtime + increments ciblés | PASS · 43 tests |
| typecheck | PASS |
| lint | PASS |
| build | PASS · route /studio/projects/[id] générée |
| git diff --check | PASS |
| parcours create → workspace réel | FAIL · PROJECT_NOT_FOUND |

## Preuves

| Fichier | SHA-256 | Contenu |
|---------|---------|---------|
| evidence/v2-a3/01-workspace-missing.png | 0696d8508e8f49205dd6795c9c0009e1253a5bebbee611ff7a780b265f5a03d3 | workspace id inconnu + disclosures |
| evidence/v2-a3/02-workspace-after-create-not-found.png | 8a8124bbcc3f1b6b5c7eedab35e9d4ee7578368cd46d7874ec97af605c666402 | après create, même processus, PROJECT_NOT_FOUND |

1440×1024 · non trackées.

## Garde-fous respectés

- pas de push / PR / merge ;
- pas de modification Core V1 ;
- pas de modification V2-A1 (malgré le besoin) ;
- pas d IAM / D1 / browser storage / agent / dashboard ;
- pas de dépendance / lockfile / workflow.

## Réserves / anti-claims

Anti-claims inchangés : pas PRODUCT/RUN READY, pas HARD CLOSED, pas delivery/cutover.

Réserve structurelle ouverte : singleton process-local non partagé entre routes Next.

## Décision Morris suivante (candidate)

GO AUTHORIZE V2-A1 SINGLETON GLOBALTHIS FIX FOR V2-A3 WORKSPACE THEN RESUME V2-A3

Option alternative (non recommandée) : autoriser un contournement UI non process-local (interdit par les anti-claims actuels).

## Review Handoff Git

| Champ | Valeur |
|-------|--------|
| Mode | publish-in-cycle |
| Branche | sfia/review-handoff |
| Fichier | sfia-review-handoff/latest-chatgpt-review.md |
| Message | docs(review-handoff): publish SFIA Studio V2-A3 workspace STOP review |

## Verdict unique

**STOP — V2-A1 MODIFICATION REQUIRED — PROCESS-LOCAL SINGLETON NOT SHARED ACROSS NEXT ROUTES — MORRIS DECISION REQUIRED**

## Instruction ChatGPT

Lire sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md et vérifier gate, branche, HEAD, fichiers UI locaux, preuve PROJECT_NOT_FOUND, absence de commit/push, et verdict STOP.
