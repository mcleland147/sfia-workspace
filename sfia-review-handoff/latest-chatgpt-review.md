# SFIA Review Pack — LIGHT
# Pass: P6-MIN-09 HUMAN QA ENVIRONMENT READINESS 01
# Generated: 2026-10-12T19:16:41+02:00 (Europe/Paris)
# Level: LIGHT
# Cycle: 9 — QA / validation
# Profile: STANDARD (campagne P6 parente CRITICAL)

---

## A. Horodatage / Identification

- Timestamp: 2026-10-12T19:16:41+02:00 (Europe/Paris)
- Project: SFIA Studio
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Scenario: P6-MIN-09 Guided Document Review
- Pass: P6-MIN-09 HUMAN QA ENVIRONMENT READINESS 01
- Cycle: 9 — QA / validation
- Profile: STANDARD
- Typologie: QA / ENVIRONMENT READINESS / HUMAN QA PREPARATION
- Runtime v3: NON ADOPTED

## B. GO Morris

GO 2026-10-12 — préparer l'environnement Studio pour campagne humaine P6-MIN-09.

Autorisé: Git Truth, deps/runtime, démarrage Studio, auth UI, prérequis nouveau projet, qualification blocages, Review Pack LIGHT, handoff L3.

NON: code change; créer le projet; réutiliser ancien projet; préremplir conversation; injecter docs; appels OpenAI cognitifs; commit/push/PR/merge; doctrine; Runtime v3.

GO préparation ≠ GO correction.

## C. Sources / Convergence

Sources consultées: convergence, product-completion, doctrine 30–35/37, contrat P6 (07), cadrage §12.6, FOM §17, CKC 09, volume 05 environments, process templates, runtime config `.env.local` (clés seulement), `GitLocalReadAdapter` / `orchestrateTurn` workspaceRoot wiring.

Capacité: GDR via Product loop + lecture Git native. Gap: environnement humain à qualifier. Exit: Studio accessible + préconditions Git + consignes Morris.

Dette DOC-PR577-POSTMERGE-SYNC: DEFER (préservée, non mélangée).

## D. Local Git Truth Check

```
doc_workspace=/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa
  branch=docs/pr577-post-merge-documentary-closure
  HEAD=d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
  dirty=DOC-PR577-POSTMERGE-SYNC (7 fichiers référence) + .tmp pack — PRESERVED / NOT TOUCHED this pass

qa_workspace=/Users/morris/Projects/sfia-workspace-p6-campaign-continuation-qa
  detached HEAD @ d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc (= origin/main)
  project dirty=none
  Nora P0/P1/P2/TV01 files=PRESENT
  new_worktree_created=NO (reused existing)

origin/main=d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
PR #577=MERGED
CI=38251916421 SUCCESS / Required Gate PASS
```

## E. Baseline Product

- Merge SHA d8ceb8ad present
- adaptiveTurnBudget.ts + controlledContinuation.ts present
- CI non-régression baseline préexistante (non rejouée Vitest global)

## F. Workspace retenu

QA workspace existant détaché sur main — séparé du workspace documentaire.

## G–H. Démarrage Studio / URL

- Commande: `npm run dev` → `next dev --port 3020`
- URL: **http://localhost:3020**
- Network: http://192.168.1.105:3020
- Status: **Ready** (Next.js 15.5.20, ~1s)
- PID next-server: 58154
- Log: `.tmp-sfia-review/p6-global-integrated-qa/p6-min09-human-env-readiness/studio-dev.log`

```text

> sfia-studio@0.1.0 dev
> next dev --port 3020

   ▲ Next.js 15.5.20
   - Local:        http://localhost:3020
   - Network:      http://192.168.1.105:3020
   - Environments: .env.local

 ✓ Starting...
 ✓ Ready in 1003ms
 ○ Compiling /middleware ...
 ✓ Compiled /middleware in 757ms (748 modules)
 ○ Compiling /login ...
<w> [webpack.cache.PackFileCacheStrategy] Serializing big strings (139kiB) impacts deserialization performance (consider using Buffer instead and decode when needed)
 ✓ Compiled /login in 1310ms (649 modules)
 GET /login?error=NO_SESSION&from=%2F 200 in 1475ms
 GET /login 200 in 25ms
```

## I. Authentification

- `/` → 307 → `/login?error=NO_SESSION&from=%2F`
- Login page HTTP 200
- CTA observable: **Continuer avec GitHub** → `/api/auth/github-start?from=%2Fstudio`
- Better Auth + GitHub OAuth keys: PRESENT (values not recorded)
- Session Cursor: **non authentifiée** (volontaire — Morris se connecte)
- Auth GitHub bout-en-bout: **NOT COMPLETED BY CURSOR** — réservé à Morris

## J. RepositoryBinding / config

Env local (non versionné) — valeurs path/identity seulement:
- `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY=mcleland147/sfia-workspace`
- `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL=https://github.com/mcleland147/sfia-workspace.git`
- `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH=main`
- `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` configuré (chemin local abs.)
- Product/Nora DB paths pointent vers `.sfia-exec/hqa01-rec01-requal/` existant — **préservé** (pas de reset)

Product wiring lecture Git:
- `orchestrateTurn.ts` → `resolveWorkspaceRootFromAppCwd()` → tools → `GitLocalReadAdapter(workspaceRoot)`
- Tool: `git_local_read_file`

## K. Accès Git et limites

Préflight technique **hors Nora** (adapter only):

```json
{"path":"projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md","ok":true,"startLine":1,"endLine":1664,"hasMore":true,"summary":"read projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md L1-1664/1664 (12013 cha","contentBytes":12013}
{"path":"projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md","ok":true,"startLine":1,"endLine":1513,"hasMore":true,"summary":"read projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md L1-1","contentBytes":12013}

```

Distinction obligatoire:
- **accès Git vérifié hors Nora** = PASS (adapter + docs présents sur checkout QA @ main)
- **lecture Git réalisée par Nora** = **NOT PROVEN** ce passage (aucun appel cognitif)

pathRoot vide de l'ancien projet ≠ preuve d'indisponibilité du lecteur natif.

## L. Documents P1/P2

Présents sur HEAD/main et filesystem QA:
1. `projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md`
2. `projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md`

Aucun upload, aucune copie injectée, aucun preload Session, aucun appel Nora T1/T2.

## M. Préconditions nouveau projet

- Route `/projects/new` existe (307 → login sans session) — mécanisme UI accessible après auth
- Cursor **n'a pas** créé de projet
- DB partagée contient 2 projets historiques — **ne pas les rouvrir** pour GDR
- Isolation recherchée: **nouvelle identité Product** créée par Morris via UI (parcours nominal)
- Conversation initiale: vierge (aucune Session préparée)
- `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY`: **NOT SET** — réserve éventuelle pour certains gates Pilote N3; M3 Morris authority locale est SET

## N. Isolation état / Sessions

- Pas d'écriture SQL
- Pas de reset DB
- Pas de réutilisation Session ancienne pour le test
- Anciens projets restent en DB mais hors scope de la campagne humaine GDR

## O. Fake / Real

- Fake nouveau: aucun
- Substrate DET Nora: déjà VERIFIED antérieurement
- Ce pass: ENVIRONMENT READINESS ONLY
- Appels cognitifs REAL: **ZERO**
- Ne pas déclarer GDR REAL PROVEN / E2E REAL / P6 GLOBAL PASS / Runtime v3 ADOPTED

## P. Fichiers / processus

- Fichiers projet versionnés modifiés: **AUCUN**
- Artefacts tmp: readiness-facts.md, studio-dev.log, git-local-read-preflight.json, ce pack
- Processus Studio: **laissé démarré** pour Morris (PID next-server 58154)
- Aucun processus étranger tué

## Q. Réserves / blocages

| Item | Class |
|---|---|
| Auth GitHub non complétée par Cursor | EXPECTED — Morris |
| Lecture Nora effective P1/P2 | NOT PROVEN (Human campaign) |
| LOCAL_PILOT_AUTHORITY unset | RESERVE (surveiller si create/act gates) |
| Clé OpenAI présente ≠ call REAL prouvé | LIMIT |
| DOC-PR577-POSTMERGE-SYNC | DEFER |
| 2 anciens projets en DB | Do not reuse |

No CAMPAIGN-INVALIDATING blocker for environment readiness.

## R. Verdict

**STUDIO ENVIRONMENT READY / NEW PROJECT CREATION READY / P6-MIN-09 HUMAN QA PREPARED**

≠ preuve que Nora a lu P1/P2.

## S. Étape humaine suivante

1. Morris ouvre **http://localhost:3020**
2. Morris se connecte via **Continuer avec GitHub**
3. Morris crée un **NOUVEAU** projet (ne pas rouvrir les projets du 10–11 oct.)
4. ChatGPT + Morris préparent le contexte T0
5. Morris conduit T0 → T1 (P1) → T2 (P1/P2) → T3 continuité avec Nora
6. Consolidation preuves / verdict P6-MIN-09 après tests humains

## T. Facts artifact

```markdown
# P6-MIN-09 Human QA Environment Readiness — Facts

timestamp: 2026-10-12T19:16:04+02:00
baselineCommit: d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
qaWorkspace: /Users/morris/Projects/sfia-workspace-p6-campaign-continuation-qa
studioCwd: .../projects/sfia-studio/app
url: http://localhost:3020
startCommand: npm run dev  (package.json → next dev --port 3020)
serverPid_next: 58154
status: Ready (Next.js 15.5.20)
auth: login page 200; CTA /api/auth/github-start?from=%2Fstudio
projects_new_route: 307 → login (auth-gated; route exists)
git_local_read_preflight: PASS on P1/P2 paths from QA checkout (OUTSIDE Nora)
product_git_wiring: orchestrateTurn → resolveWorkspaceRootFromAppCwd() → GitLocalReadAdapter
cognitive_REAL_calls: ZERO
project_created_by_cursor: NO
docs_injected: NO
doc_debt_workspace: preserved (untouched this pass)
LOCAL_PILOT_AUTHORITY: NOT SET (reserve)
OPENAI_API_KEY: PRESENT (value not recorded; no call)
repository_env: identity mcleland147/sfia-workspace · branch main · remote GitHub URL configured
existing_projects_in_shared_DB: 2 historical (do NOT reuse) — Morris creates NEW via UI

```
