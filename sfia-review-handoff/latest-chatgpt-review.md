# SFIA Studio — P6 Human QA Local Runtime Rehydration — Review Pack (LIGHT)

- **Horodatage** : 2026-10-15T19:56:59+0200 (Europe/Paris)
- **GO Morris** : P6 HUMAN QA LOCAL RUNTIME PREPARATION — PORT 3020
- **Périmètre** : Runtime accessibility only — aucun test fonctionnel, aucune mutation Product, aucun Cursor REAL
- **Projet** : SFIA Studio
- **Macro** : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- **Capacité** : V3-F05 — Conversation vers exécution gouvernée
- **Milestone** : P6 — GLOBAL INTEGRATED PRODUCT QA
- **Cycle projet** : 9 — QA / validation
- **Pass** : P6 HUMAN QA LOCAL RUNTIME PREPARATION
- **Profil** : CRITICAL
- **CKC** : ckc:studio:qa-validation (guidance uniquement)
- **Typologie** : RUN / QA ENVIRONMENT PREPARATION

## Git Truth initial

| Check | Résultat |
|---|---|
| `origin/main` | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Attendu (PR #585 MERGED) | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Drift | **AUCUN** — MATCH |
| Handoff tip attendu (préalable) | `ad7790bd83485f6a0fe03d06ed07c56ea4593aa9` |
| Delivery worktree | `/Users/morris/Projects/sfia-workspace-p6-generic-exec-continuity-e7822033` — **non modifié** pour ce pass |

## Sources / convergence

- Convergence doctrine + roadmap P6 consultées (état : P6 STARTED / NOT PASSED ; PR #585 intégrée)
- Product completion / P6 global QA / cycle routing / package.json / README / `.env.example` / `studio-runtime-preflight.ts` utilisés pour le profil runtime
- Actifs historiques KEEP : Product DB, Nora DB, projet e66, LPS/CycleInstance, conversations, HumanDecisions, ExecutionContracts, evidence

## Ancien runtime observé (:3020)

| Champ | Valeur observée |
|---|---|
| Port | 3020 |
| PID listen | 62319 (`next-server`) |
| Parent | 62318 (`next dev --hostname localhost --port 3020`) |
| CWD | `/Users/morris/Projects/sfia-workspace-p6-nora-incomplete-fix-b555/projects/sfia-studio/app` |
| HEAD servi | `50eac439…` (≠ baseline 52f36884) |
| Product DB ouverte | `…/p6-t2-real-qa/product/oa-product.sqlite` (**pas** la campagne e66 historique) |
| Port 3031 | non touché |

## Nouveau runtime

| Champ | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-studio-runtime-main-52f36884` |
| Mode Git | detached HEAD |
| HEAD servi | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Lancement | `npm run dev` depuis `…/projects/sfia-studio/app` |
| PID listen | **66172** (`next-server` v15.5.20) |
| Parent | **66169** (`next dev --port 3020`) |
| URL | http://localhost:3020 |
| Preflight | `npm run preflight:runtime` → **STUDIO RUNTIME PROFILE READY** ; `cursorReal: OFF` ; `realBoundaryConstructed: false` |

## Persistance historique (chemins absolus, sans secrets)

| Variable | Chemin résolu |
|---|---|
| `SFIA_STUDIO_PRODUCT_DB_PATH` | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/oa-product.sqlite` |
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/nora-session.sqlite` |
| `BETTER_AUTH_URL` | `http://localhost:3020` |
| `SFIA_STUDIO_CURSOR_REAL` | **0** (forcé pour ce pass ; historique avait 1) |
| `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` | 1 (préservé) |
| Managed repo root | `…/hqa01-rec01-requal/managed-repos` |

### Inspection SQLite read-only (avant/après démarrage)

- Product DB non vide ; tables Product présentes
- Projet **e66** trouvé : `prj:e66fd58c-03f6-41df-90c8-4ae267926212` — status `active`
- Titre Product : « Simplification des interactions avec l’IA »
- LPS / cycle instances / human decisions présents pour ce projectId (counts : cycles=1, decisions=1, contracts=0)
- Nora Session DB non vide ; session **`f1-default`** présente pour e66 (session_items=6, pilot_transcript_turns=12)
- Aucune base Product/Nora créée sous le nouveau worktree runtime (count sqlite worktree = 0)
- Aucune écriture manuelle SQL (INSERT/UPDATE/DELETE/migration) effectuée par Cursor

### Managed clone

- Répertoire historique `managed-repos/` était **vide**
- Clone local restauré pour préflight / binding repository : `…/managed-repos/mcleland147__sfia-workspace` (artefact de lancement local)
- Réserve : `pathRoot` Product `projects/simplification-des-interactions-avec-l-ia` **absent** du clone géré au HEAD du clone local — inventaire workspace à confirmer par Morris en Human QA (n’empêche pas l’accessibilité runtime + DB e66)

## Configuration / auth (sans secrets)

- `.env.local` gitignored, dérivé du profil historique `studio-runtime-main-bd3f440c` avec chemins DB historiques absolus
- Better Auth + GitHub OAuth + identité Pilote autorisée : **préservés** (valeurs non divulguées)
- OpenAI configuré dans l’env historique : **préservé**, **aucun appel OpenAI** par Cursor
- Cursor REAL : **OFF**
- Fake provider : **non activé** pour simuler un runtime REAL

## Vérification minimale HTTP (≠ Human QA)

| Check | Résultat |
|---|---|
| Port 3020 occupé par nouvelle instance | OUI — PID 66172, cwd worktree 52f36884 |
| HEAD | `52f36884…` |
| `GET /` | 307 → `/login?error=NO_SESSION&from=%2F` |
| `GET /login` | 200 — title « SFIA Studio » |
| Contournement auth | **NON** |
| Message Nora / parcours Pilote | **NON** |
| Tests automatiques (`npm test`, e2e, lint, typecheck) | **AUCUN** |
| Mutations Product volontaires | **AUCUNE** |
| Cursor REAL lancé | **NON** |

## Limites de persistance (process-local)

Le redémarrage remplace le processus Next.js. Non garantis / non reconstitués :

- propositions process-local
- pending offers éventuelles en mémoire
- sessions cognitives non durables
- caches temporaires / états UI non persistés

États durables préservés dans les SQLite historiques (projet, LPS, cycles, décisions, conversations Nora persistées).

## Blockers

- Aucun blocker bloquant la disponibilité runtime + projet e66
- Réserve non bloquante : `pathRoot` workspace absent du managed clone restauré

## Git Truth final

| Check | Résultat |
|---|---|
| `origin/main` | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` (inchangé) |
| Runtime HEAD | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Fichiers projet Delivery modifiés | **AUCUN** (pack temporaire + artefacts locaux runtime uniquement) |
| Serveur :3020 | **RESTE ACTIF** |

## Verdict

**P6 HUMAN QA ENVIRONMENT READY**
**STUDIO MAIN 52F36884 SERVED**
**LOCALHOST:3020 AVAILABLE**
**HISTORICAL E66 PROJECT FOUND**
**HISTORICAL PRODUCT DATA PRESERVED**
**READY FOR MORRIS MANUAL HUMAN QA**

## Instruction ChatGPT

Lire le nouveau Review Handoff distant (`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`).

Vérifier :

- cycle / profil CRITICAL / CKC guidance
- Git main `52f36884`
- worktree runtime `…-studio-runtime-main-52f36884`
- port 3020 actif
- Product DB + Nora Session DB historiques `hqa01-rec01-requal`
- projet e66 `prj:e66fd58c-03f6-41df-90c8-4ae267926212`
- absence de création de projet / test fonctionnel / Cursor REAL / réinitialisation DB
- disponibilité réelle du serveur
- réserves (process-local ; pathRoot managed clone)
- handoff distant

Puis rendre : **P6 HUMAN QA RUNTIME READINESS REVIEW**.

Aucune exécution Human QA automatique.
