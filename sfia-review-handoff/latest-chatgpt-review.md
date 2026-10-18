# SFIA STUDIO — P6 HUMAN QA
# OPTION B — FRESH PRODUCT VALIDATION ENVIRONMENT
# Critical Review Pack (FULL)

## 0. Horodatage

| Champ | Valeur |
|---|---|
| ISO | `2026-10-18T17:41:54+0200` |
| Local | `2026-10-18 17:41 CEST` |
| Étape | Human QA — Fresh Environment Preparation |
| Cycle | 9 — QA / validation |
| Profil | CRITICAL |
| Capacité | V3-F05 |
| Milestone | P6 |

## 1. GO Morris

| Décision | Statut |
|---|---|
| Fresh HQA environment GO | **CONSUMED** |
| Port | **3020** (réutilisation demandée Morris) |
| D-ARCH-REC-01/02/03 | CONSUMED (Option B) |
| D-ARCH-REC-04 docs sync | NOT AUTHORIZED |
| Product commit/push/PR/merge | **NONE** |
| Cursor REAL Product Execute | **NONE** (gate OFF) |

## 2. Git Truth

| Item | Valeur |
|---|---|
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| origin/main | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| Branche | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` + Option B local uncommitted |
| Product source mutation this step | **NONE** (`.env.local` gitignored + `.sfia-exec` QA only) |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts
?? projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts
?? projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts
```

Previous Delivery handoff: `5c4c5514` / blob `590ec9d6`.

## 3. Convergence Pre-check

Option B candidate local ; deterministic first-cycle PROVEN (84 tests) ;
Nora LIVE / navigateur NON PROVEN ; P6 GLOBAL PASS NON ACQUIS ; runtime v3 NON ADOPTED.
Gap traité : environnement REAL isolé pour HQA Morris.

## 4. Candidat Option B

Fichiers présents (uncommitted) :
- `f2/conversationWorkflowDiscrimination.ts`
- `f2/cycleLifecycleConversationCoordinator.ts`
- `f2/genericExecutionConversationCoordinator.ts`
- `f2/orchestrateF2.ts` (modifié)
- tests `p6.arch.*`

## 5. Campagne QA

| Item | Valeur |
|---|---|
| Identity | `p6-optionb-fresh-hqa-20261018T153758Z` |
| QA root | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z` |
| Port | **3020** |
| URL | `http://localhost:3020` |
| Login | `http://localhost:3020/login` |
| Listen PID | `69249` |

## 6. Persistence (vierge / isolée)

| Item | Path |
|---|---|
| Product SQLite (nouveau) | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/product/oa-product.sqlite` |
| Nora Session SQLite (nouveau) | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/nora/nora-session.sqlite` |
| Managed repo root | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/managed-repos` |
| Managed clone | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/managed-repos/mcleland147__sfia-workspace` |

État : fichiers Product/Nora **non encore matérialisés** (lazy) → inventory métier vide (0 Project).
Aucun symlink vers DB historiques.
Archive AtelierNova historique (non mutée, non ouverte par ce runtime) :
`/Users/morris/Projects/sfia-workspace-p6-fresh-qa-304e30e8/projects/sfia-studio/.sfia-exec/p6-fresh-qa-20261018T102548/product/*.sqlite`

Note : le processus historique sur :3020 a été **arrêté** pour libérer le port (demande Morris).
Les fichiers SQLite historiques restent en place, size/mtime inchangés.

## 7. Configuration (non secrète)

| Clé | Valeur |
|---|---|
| BETTER_AUTH_URL | `http://localhost:3020` |
| Callback attendu | `http://localhost:3020/api/auth/callback/github` |
| RepositoryBinding | `mcleland147/sfia-workspace` |
| SFIA_STUDIO_CURSOR_REAL | `0` (OFF) |
| OPS1_CONVERSATION_PROVIDER | unset → **LIVE-capable** (pas de Fake forcé) |
| SFIA_STUDIO_LOCAL_PILOT_AUTHORITY | `1` |
| Deterministic Cursor boundary | `0` |

Secrets présents (non affichés) : BETTER_AUTH_SECRET, GITHUB_CLIENT_*, OPENAI_API_KEY, allowlist.

## 8. Auth

| Check | Résultat |
|---|---|
| BETTER_AUTH_URL = port runtime | **PASS** (3020/3020) |
| Callback aligné OAuth historique documenté | **QUALIFIED** |
| Contournement Auth | **NONE** |
| Human login navigateur | **NON PROUVÉ** (Morris) |

AUTH CONFIGURED ≠ HUMAN LOGIN PROVEN.

## 9. Nora

Mode LIVE configuré (pas de Fake force).
NORA LIVE CONFIGURED ≠ NORA LIVE TEST PROVEN.

## 10. Validations

| Check | Résultat |
|---|---|
| A Git Truth Option B | PASS |
| B Runtime 3020 actif | PASS (`/login` 200) |
| C Archive historique DB | PASS (non mutée) |
| D Preflight | PASS — cursorReal OFF |
| E Data virgin | PASS (DB files absents) |
| F Auth config | PASS (callback 3020) |
| G Nora LIVE config | PASS (config) |
| H UI login | PASS HTTP 200 |
| I Aucun Project précréé | PASS |
| J Cursor Execute | PASS (REAL=0) |
| K Secrets dans pack | PASS (aucun) |
| L Product source unmodified this step | PASS |
| M URL remise Morris | `http://localhost:3020` |

## 11. Preflight / Build / Process

- preflight: **PASS**
- build: **PASS**
- process: `next-server` PID `69249` on `:3020`
- cwd: Option B worktree `.../projects/sfia-studio/app`
- detach: `start_new_session=True` (session indépendante)

## 12. Réserves

1. Human login + création AtelierNova + parcours Nora LIVE = **Morris**.
2. Cursor REAL Product Execute reste **fermé**.
3. Runtime historique :3020 arrêté pour réutiliser le port ; DB historiques archivées non mutées.
4. P6 GLOBAL PASS / runtime v3 ADOPTED : **non déclarés**.

## 13. Instructions Morris

1. Ouvrir `http://localhost:3020/login` et s'authentifier GitHub (allowlist).
2. Créer un **nouveau** Project **AtelierNova** (vierge) dans l'UI.
3. Demander à Nora un premier cycle Cadrage ; Rec → trajectoire → HD carte → prepare → START.
4. Ne pas lancer Cursor REAL Execute sans gate dédié.

## 14. Verdict

**FRESH OPTION B ENVIRONMENT — READY FOR MORRIS HUMAN QA.**

Statut : **READY WITH RESERVES** (login / Nora LIVE / parcours navigateur non encore prouvés).

## 15. Instruction ChatGPT

Lire ce handoff. Vérifier isolation DB, port 3020, Auth callback aligné,
absence de mutation des SQLite historiques, absence de mutation Product source, Cursor REAL OFF.
Ne pas déclarer Human QA PASS ni P6 GLOBAL PASS.
