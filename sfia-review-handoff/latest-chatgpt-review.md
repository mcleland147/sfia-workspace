# SFIA Studio — PR #586 Post-merge / Human QA Runtime Readiness — Review Pack FULL

- **Horodatage** : 2026-10-16T05:04:00+0200 (Europe/Paris)
- **GO Morris** : P6 HUMAN QA RESUMPTION — POST-MERGE PR #586 + CONTROLLED RUNTIME REFRESH
- **Finding** : P6-HQA-F05-GD4-01
- **Profil** : CRITICAL
- **Cycle** : 14 — Post-merge
- **CKC** : ckc:studio:post-merge (CONTENT VALIDATED BY MORRIS — guidance only)

## 1. GO Morris consommé / non consommé

| Action | Statut |
|---|---|
| Post-merge verification | CONSOMMÉ |
| Runtime :3020 refresh contrôlé | CONSOMMÉ |
| Review Pack + Handoff L3 | CONSOMMÉ |
| Merge / nouvelle PR / commit projet | NON |
| Modification Product / .env.local / secrets | NON |
| Migration / reset SQLite | NON |
| Cursor REAL activation | NON |
| Human QA conversationnelle (Pilote) | NON — réservée au Pilote |

## 2. Local Git Truth initial

| Check | Valeur |
|---|---|
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH |
| Worktree contrat Cursor | `…/sfia-workspace-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` (branche fix) — non serveur |
| PR #586 | MERGED @ 2026-10-15T21:27:59Z |
| Merge parents | `52f36884…` + `b4c1d862…` |
| CI post-merge | [38810074936](https://github.com/mcleland147/sfia-workspace/actions/runs/38810074936) SUCCESS |
| Required Gate | SUCCESS |
| Staged projet | AUCUN (seul `.tmp-sfia-review` local) |

## 3. Sources consultées

Cycle template / routing / guardrails ; convergence ; product-completion ; product-simplification 02/07 ; framing 30/32/35 ; CKC 14-post-merge ; app README / package.json / preflight ; production-runtime-reference 05/06 ; diff main F05 présent.

## 4. Convergence Pre-check

P6 IN PROGRESS. Correctif F05 sur main. Runtime local à requalifier. Données historiques à préserver. Exit Proof : runtime sur baseline mergée, bindings inchangés, Cursor REAL OFF, Human QA prêt pour le Pilote.

## 5. Post-merge verification

- PR #586 CLOSED/MERGED.
- main = `896ff59c704bfa76df1da1a51705aaf948c1cf0c`.
- Périmètre intégré : 8 Product + 9 Living Reference (17 files).
- Code F05 sur main : `eligibleForGenericPrepareRouting` + `genericPrepareCapabilityEnvelope.ts` présents.
- Anti-claims : P6 GLOBAL PASS / RUNTIME V3 ADOPTED / REAL PROVEN — **NON**.

## 6. Inventaire runtime initial (:3020)

| Champ | Valeur observée |
|---|---|
| Listener | PID **1043** (next-server v15.5.20) |
| Parent next | PID **1011** — `next dev --port 3020` |
| Superviseur | PID **842** — `npm run dev` |
| Checkout servi | `…/sfia-workspace-studio-runtime-main-bd3f440c` |
| HEAD servi | `bd3f440c…` (21 commits derrière main) — **STALE** |
| cwd | `…/bd3f440c/projects/sfia-studio/app` |
| Mode | Next.js **dev** (pas `start` production) |
| Propriétaire | SFIA Studio confirmé (chemin app + port 3020) |
| PID historique 66172 | **NON ACTIF** — ne pas réutiliser |

### Bindings (formes / empreintes — pas de secrets)

Mêmes chemins absolus Product / Nora / Managed entre worktree bd3f440c et worktree `…-52f36884` :

| Binding | Empreinte path sha16 | inode | size |
|---|---|---|---|
| PRODUCT_DB | `d42239488eb8148e` | 102590814 | 1261568 |
| NORA_SESSION_DB | `622a9252d31ed7bd` | 102590867 | 503808 |
| MANAGED_REPO_ROOT_BASE | `40e89e6ac79c0200` | 102534548 | 96 |

| Config | bd3f440c (initial) | 52f36884 (Human QA profile) |
|---|---|---|
| SFIA_STUDIO_CURSOR_REAL | **`1` (ON)** | **`0` (OFF)** |
| BETTER_AUTH_URL | localhost:3020 | localhost:3020 |
| OPENAI_API_KEY / MODEL | présents | présents |
| OPS1_CONVERSATION_PROVIDER | ABSENT | ABSENT |

**Décision de sûreté :** ne pas modifier `.env.local`. Basculer le serveur vers le worktree Human QA `…-52f36884` (CURSOR_REAL OFF, **mêmes** DB/managed bindings) après FF vers main — évite d'exécuter Human QA sous Cursor REAL ON.

## 7. Opérations réellement exécutées

1. Vérification PR/CI/main.
2. Qualification processus :3020 (Studio, ownership connu).
3. Contrôles RO Product DB : projet e66 présent ; `activeCycleInstanceId` = cycle historique ; cycle status `active`.
4. `git merge --ff-only origin/main` dans `…-studio-runtime-main-52f36884` → HEAD `896ff59c…`.
5. `npm run preflight:runtime` → **STUDIO RUNTIME PROFILE READY** ; `cursorReal: OFF`.
6. Arrêt contrôlé SIGTERM du superviseur npm PID 842 (bd3f440c) — port libéré.
7. Démarrage `npm run dev` depuis worktree `896ff59c` (procédure nominale existante = dev, pas `build`/`start`).
8. Smoke HTTP `GET /` → **307** (redirect auth — sans action métier).
9. Re-preflight après refresh → READY ; cursorReal OFF.
10. Aucune écriture SQL / seed / reset / message Nora / EC / HD / Attempt.

## 8. Provenance runtime finale

| Champ | Valeur |
|---|---|
| Checkout | `…/sfia-workspace-studio-runtime-main-52f36884` |
| HEAD | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` = origin/main |
| Mode | `npm run dev` / next-server 15.5.20 |
| Listener PID | **4962** |
| next PID | **4961** |
| npm PID | **4925** |
| cwd | `…/52f36884/projects/sfia-studio/app` |
| :3020 | LISTEN · HTTP 307 |
| CURSOR_REAL | **OFF (0)** |
| Bindings DB/managed | **INCHANGÉS** (sha16/inode/size identiques pré/post) |
| e66 | status `active` ; cycle historique CURRENT match |
| Migrations / reset | **AUCUN** |
| .env.local modifié | **NON** |

## 9. Fake / Real qualification

| Item | Statut |
|---|---|
| Niveau atteint | **POST-MERGE VERIFIED · RUNTIME REFRESH VERIFIED · HUMAN QA ENVIRONMENT READY** |
| OpenAI LIVE | clé/model présents — **parcours conversationnel NON exécuté ce cycle** |
| Cursor REAL | **OFF** |
| Deterministic CI | SUCCESS post-merge |
| Claims interdits | HUMAN QA PASS · E2E REAL · CURSOR REAL PROVEN · P6 GLOBAL PASS · RUNTIME V3 ADOPTED |

## 10. Human QA handoff (Pilote)

| Réf. | Qualification RO |
|---|---|
| Project `prj:e66fd58c-03f6-41df-90c8-4ae267926212` | présent · status `active` |
| Cycle `cyc:trj-255a8418ee8a735f23738c46` | présent · status `active` · = `activeCycleInstanceId` CURRENT |

**Scénario Pilote (non exécuté ici) :** demande naturelle Markdown durable → observer Generic PREPARE sans `no_require_artifact` dead-end ; pas de HD artificielle ; contrat fidèle ; target candidat non autoritatif ; inspect/authorize gouvernés ; pas d'exécution auto.

URL : `http://localhost:3020`

## 11. Réserves

1. Runtime en mode **dev** (hot reload) — pas `next start` production.
2. OpenAI LIVE non requalifié conversationnellement après merge.
3. Pending Generic PREPARE offer process-local (dette Product connue).
4. TargetPath autoritatif non résolu au stade PREPARE (dette connue).
5. Worktree toujours nommé `…-52f36884` alors que HEAD = `896ff59c` (nom historique uniquement).
6. Ancien worktree `…-bd3f440c` conserve `.env.local` avec CURSOR_REAL=1 — **ne pas y redémarrer** sans requalification Morris.

## 12. Git Truth final (contrat + runtime)

```
origin/main=896ff59c704bfa76df1da1a51705aaf948c1cf0c
runtime_wt_HEAD=896ff59c704bfa76df1da1a51705aaf948c1cf0c
runtime_dirty=0
contrat_wt_branch=fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare
contrat_wt_HEAD=b4c1d862… (inchangé — pas de commit projet)
:3020=LISTEN pid=4962
CURSOR_REAL=0
merge=NON (déjà mergé précédemment)
```

## 13. Verdict

**POST-MERGE VERIFIED**
**RUNTIME REFRESH VERIFIED**
**READY FOR PILOT HUMAN QA**

Non déclaré : HUMAN QA PASS · P6 GLOBAL PASS · CURSOR REAL PROVEN · RUNTIME V3 ADOPTED.

## 14. Instruction ChatGPT obligatoire

Lire dans Git :

Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier Post-merge, CI, provenance runtime, conservation bindings, Cursor REAL OFF, absence de Human QA automatisée.

Produire :

**SFIA STUDIO — PR #586 POST-MERGE / HUMAN QA RUNTIME READINESS REVIEW.**
