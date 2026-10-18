# SFIA STUDIO — P6 HUMAN QA — FRESH REAL ENVIRONMENT — Review Pack LIGHT

## Horodatage
- ISO: 2026-10-18T10:30:30+0200
- Local: 2026-10-18 10:30 CEST

## GO Morris
Préparation locale Nora LIVE + Cursor REAL — Fresh QA post-PR #588.
Limite: configuration + démarrage. Aucune exécution métier REAL. Aucune Human QA agent.

## Git Truth
| Champ | Valeur |
|---|---|
| origin/main | 304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8 MATCH |
| Worktree runtime | /Users/morris/Projects/sfia-workspace-p6-fresh-qa-304e30e8 (detached) |
| HEAD chargé | 304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8 |
| Ancien :3020 | studio-runtime-main-bd3f440c arrêté (SIGTERM, autorisé) |
| Product dirty worktrees | non utilisés / non modifiés |

## Sources
Template/routing/guardrails; Build Doctrine/Roadmap; C1; P6; doctrine v3; package.json; .env.example; studio-runtime-preflight.ts; README runtime profile.

## Convergence Pre-check
Tool-First R1/R2 MERGED (#588). P6 GLOBAL PASS NON ACQUIS. Runtime v3 NON ADOPTED.
Dette TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN. R2 pathless fail-closed conservé (non contourné).

## Environnement QA frais
| Item | Valeur |
|---|---|
| Identity | p6-fresh-qa-20261018T102548 |
| QA root | /Users/morris/Projects/sfia-workspace-p6-fresh-qa-304e30e8/projects/sfia-studio/.sfia-exec/p6-fresh-qa-20261018T102548 |
| Product DB path | …/product/oa-product.sqlite |
| Nora DB path | …/product/nora-session.sqlite |
| Managed repos | …/managed-repos (clone mcleland147__sfia-workspace @ 304e30e8, clean) |
| Collision historiques | aucune (nouveau répertoire daté) |
| Schema | non pré-injecté — initialisation Product à la première utilisation |

## Configuration (sans secrets)
| Frontière | État |
|---|---|
| Nora / OpenAI | OPENAI_API_KEY présent; OPENAI_MODEL=gpt-5.6-luna; OPS1_CONVERSATION_PROVIDER non forcé fake |
| Cursor REAL | SFIA_STUDIO_CURSOR_REAL=1 |
| Deterministic Cursor | SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=0 |
| Cursor CLI | /Applications/Cursor.app/Contents/Resources/app/bin/cursor via SFIA_CURSOR_BIN |
| Pilot authority | SFIA_STUDIO_LOCAL_PILOT_AUTHORITY=1 |
| Morris M3 local | SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 (profil local existant — construction gates; distinct Pilote HD) |
| Better Auth | BETTER_AUTH_URL=http://localhost:3020; secret + GitHub OAuth présents (non affichés) |
| Repository binding | mcleland147/sfia-workspace |
| Managed root base | QA isolation sous p6-fresh-qa-20261018T102548/managed-repos |

## Build / Preflight / Start
| Step | Result |
|---|---|
| npm ci | PASS |
| npm run build | PASS (Next.js 15.5.20) |
| npm run preflight:runtime | PASS — STUDIO RUNTIME PROFILE READY; cursorReal=READY; deterministic⊕REAL=PASS; managedClone présent |
| npm start | PASS — Ready on :3020; listen PID 53076 (daemonized); cwd worktree fresh HEAD 304e30e8 |

## HTTP observables
| URL | Code |
|---|---|
| http://localhost:3020/login | 200 |
| http://localhost:3020/studio | 307 (redirect auth — attendu sans session) |

Runtime laissé actif pour Morris.

## Fake / Real Qualification
| Item | Valeur |
|---|---|
| Mode | REAL CONFIGURED |
| Nora | OpenAI LIVE configuré (qualité non prouvée) |
| Cursor | REAL=1 configuré; aucune exécution Attempt/launch |
| Deterministic | OFF |
| Human QA | NOT STARTED |
| Niveau | ENVIRONMENT CONFIGURED + PREFLIGHT PASS + RUNTIME STARTUP VERIFIED |
| Non claims | REAL BOUNDARY PROVEN / no-write proven / HQA PASS / P6 GLOBAL / v3 ADOPTED |

## Réserves
1. Dette TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN; R2 refuse toujours les pathless non-mutatifs sous REAL.
2. DBs Product/Nora fichiers encore absents jusqu'à premier usage Product (chemins READY).
3. Morris doit s'authentifier et créer le nouveau Project via UI.
4. Qualité Nora LIVE / succès Cursor REAL Execute: hors périmètre.
5. SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 présent via profil local — ne confond pas avec HumanDecision Pilote.

## Fichiers modifiés
- Worktree neuf (git worktree add) — pas de commit Product.
- .env.local local gitignored dans le worktree QA.
- Artefacts QA sous .sfia-exec/p6-fresh-qa-… (hors Git tracked Product).
- Review Pack temporaire.

## Verdict
STUDIO REAL QA ENVIRONMENT READY — POST-PR588 MAIN LOADED — FRESH QA DATABASES — READY FOR MORRIS HUMAN QA.

## Instruction ChatGPT
Lire sfia/review-handoff → latest-chatgpt-review.md.
Contrôler baseline, environnement, configuration, persistance, auth, démarrage et réserves.
Aucune décision P6 PASS.
