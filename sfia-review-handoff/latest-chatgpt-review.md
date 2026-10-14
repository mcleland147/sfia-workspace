# SFIA STUDIO — P6 T2 REAL REQUALIFICATION + BROWSER UX + HUMAN QA
## Cycle 9 — Review Pack FULL

**A. Horodatage (Europe/Paris):** 2026-10-14 19:06:36 CEST (pack finalisé ensuite)
**B. GO Morris:** P6 T2 REAL + Browser UX + Human QA — AUTHORIZED / CONSUMED (préparation + handoff). Auth/T2 REAL exécutés par Morris (non automatisés Cursor sur ordre Morris 2026-10-14 19:06).
**C. Cycle / profil:** Cycle 9 — CRITICAL — QA / REAL-BOUNDARY / INTEGRATED PRODUCT / HUMAN QA
**D. Repository:** `mcleland147/sfia-workspace`

---

## D. Git Truth (VÉRIFIÉ)

| Check | Value |
|---|---|
| Delivery worktree | `/Users/morris/Projects/sfia-workspace-p6-nora-extended-execution-live-activity` |
| Branch | `delivery/sfia-studio-p6-nora-extended-execution-live-activity` |
| HEAD delivery | `3d8acf3475c2180b8135379b110995b455f037ee` |
| origin/main | `eec68a418ae271452edc2188c9cf1ae06faa8232` (= eec68a41 attendu) |
| Handoff remote (entrée) | `8d08f8167abcb5b02a3ede9dd52fe5e12905a2d3` |
| Dirty delivery | ```M .tmp-sfia-review/chatgpt-review.md``` |
| QA worktree | `/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41` detached @ `eec68a418ae271452edc2188c9cf1ae06faa8232` |

## E–G. Convergence / Sources / Baseline

Build Doctrine / Roadmap / C1: VALIDATED — non mutés.
P6 GLOBAL: NOT PASSED. Runtime v3: NON ADOPTED.
Baseline post-merge: **eec68a418ae271452edc2188c9cf1ae06faa8232** (PR #582 MERGED, CI post-merge 38589732457 PASS — VÉRIFIÉ cycle précédent).

Sources consultées: doctrine/roadmap/C1/P6, handoff 8d08f816, session historique readonly, GO Cycle 9.

## H. Historique T2 (VÉRIFIÉ — lecture immutable)

Projet: **Simplification des interactions avec l’IA** — `prj:e66fd58c-03f6-41df-90c8-4ae267926212`

T1 historique (échec maxTurns / Analyse inachevée): documenté pack MIN-09.
T2 prompt exact récupéré depuis `pilot_transcript_turns` (logical_turn_id `ltu:74fe86b4b74c650c0e2b82ef0b1604c8`, 2026-10-14T10:59:02Z):

```
Nora, maintenant qu'on a regardé le document de cadrage P1, j'aimerais qu'on s'intéresse au modèle de fonctionnement P2.
Le document est aussi disponible dans notre dépôt Git : projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md
Tu peux le consulter et m'expliquer comment il s'articule avec le cadrage P1 qu'on vient d'analyser ? J'aimerais comprendre ce que P2 apporte concrètement à notre réflexion sur la simplification des interactions avec l'IA.
```

P1/P2 paths confirmés sur baseline.
État: **CLONED QA STATE** via `sqlite3 .backup` des DB historiques → stores isolés (pas d’écriture sur DB historiques).

## I–J. Environnement ancien / Protection

Ancien runtime bd3f440c sur :3020 **arrêté** sur override Morris « port 3020 uniquement » (2026-10-14).
Fichiers DB historiques **préservés sur disque** (non ouverts par le nouveau process — VÉRIFIÉ lsof).
Backup cohérent: `/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/historical-sqlite-backup-*`.

## K. Environnement isolé (VÉRIFIÉ — DISPONIBLE)

```
snapshotAt=2026-10-14T18:58:54+0200
baselineCommit=eec68a418ae271452edc2188c9cf1ae06faa8232
qaWorktree=/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41
runtimePort=3020
runtimeBind=127.0.0.1
productDbIsolated=/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/projects/sfia-studio/.sfia-exec/p6-t2-real-qa/product/oa-product.sqlite
sessionDbIsolated=/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/projects/sfia-studio/.sfia-exec/p6-t2-real-qa/product/nora-session.sqlite
historicalProductDb=/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/oa-product.sqlite
historicalSessionDb=/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/nora-session.sqlite
historicalRuntimeStopped=bd3f440c_next_was_stopped_for_port_3020_override
note=Morris override 2026-10-14: application on port 3020 only; isolated DBs; historical DB files preserved on disk
projectId=prj:e66fd58c-03f6-41df-90c8-4ae267926212

```

| Item | Value |
|---|---|
| URL | http://localhost:3020 |
| Port | **3020 uniquement** (3030 abandonné) |
| Commit runtime | eec68a41 |
| Product DB | isolée sous `.sfia-exec/p6-t2-real-qa/product/` |
| Session DB | isolée (même répertoire) |
| OPENAI | clé présente (SET_NONEMPTY) — valeur non publiée |
| Model env | `gpt-5.6-luna` (configuré; modèle réellement dispatché = à observer pendant Human QA) |
| Auth | **NON TESTÉE par Cursor** — Morris se connecte |

## L–O. Session / Privacy / Provider / Budget

Product+Session: clones isolés du projet Human QA.
Privacy: sources P1/P2 = docs repo publics du workspace — éligibles.
Provider preflight: OPENAI_API_KEY SET; REAL path Product (pas eval harness).
Budget:

```
# Budget envelope qualification — P6 T2 REAL

## Applicable bounds (VERIFIED in Product path code @ eec68a41)

| Bound | Owner | Value | Source |
|---|---|---|---|
| Adaptive mission maxTurns | Studio cognitive policy | floor 3 / ceiling 24 | adaptiveTurnBudget.ts |
| Safety envelope + extensions | Studio cognitive policy | ≤36 turns, ≤3 productive extensions | adaptiveTurnBudget / controlledContinuation |
| Tool result envelope | Studio tool policy | CT_MAX_TOOL_RESULT_CHARS=100_000 | platform/tools/types.ts |
| Read default bytes | Studio tool policy | CT_DEFAULT_READ_MAX_BYTES=200_000 | platform/tools/types.ts |
| MissionProgressGuard | Studio cognitive policy | stop on identical non-empty target streak ≥3 | missionProgressGuard.ts |
| AbortSignal | Product transport | Pilot Stop → Runner | send route / AbortController |
| Provider credential | Morris OpenAI account | OPENAI_API_KEY present (SET_NONEMPTY) | isolated .env.local keys audit |
| Morris GO | Morris | Single T2 REAL scenario authorized 2026-10-14 | Cycle GO |

## Not applicable on Product send path (VERIFIED)

| Bound | Status |
|---|---|
| Studio FinOps hardCapUsd | NOT WIRED on `sendProjectAssistantTurn` → `orchestrateAssistantSend` (usdAccounting optional, not constructed) |
| Eval BudgetTracker hardCapUsd ($5/$20) | Eval harness only — must NOT substitute for Product path |

## Exposure

- ESTIMATED USD: NOT INVENTED (no authority figure for Product path)
- OBSERVED historical precedent: same Product path already executed REAL T1/T2 against OpenAI without Studio USD meter
- Bounding strategy for this run: ONE T2 logical turn, no automatic retry, cognitive envelope ≤36, abort available

## Verdict

BUDGET ENVELOPE QUALIFIED FOR BOUNDED T2 under Morris GO + cognitive safety envelope.
Studio USD hardCap: ABSENT (documented reserve, not silent unlimited — turn/envelope bounds remain hard).

```

## P–R. REAL run / Prompt / Sources

| | |
|---|---|
| runId préparation | `p6-t2-real-20261014T164648Z` |
| scenarioId | P6-T2-REAL-P1P2 |
| Prompt | exact (ci-dessus) |
| P1/P2 | paths canoniques product-simplification |

## S–Z. Couverture / Continuation / NDJSON / Terminal / Qualité / UX / STOP

**NON EXÉCUTÉ par Cursor** (ordre Morris: préparer l’app, pas tester auth; Human QA = Morris).

Statuts:
- Documentary coverage T2: NOT OBSERVED (ce cycle)
- Continuation/extensions: NOT OBSERVED
- NDJSON live: NOT OBSERVED
- Terminal state: NOT OBSERVED
- Cognitive quality: NOT OBSERVED
- Browser UX captures: NOT OBSERVED (Cursor IDE browser ne joint pas localhost; navigateur système = Morris)
- STOP exercised: NON EXÉCUTÉ (interdit sur T2 principal)

## AA–AB. Human QA Queue / Verdict Morris

```
# Human QA Queue — P6-T2-REAL-P1P2

**Item ID:** P6-T2-REAL-P1P2
**Status:** ENVIRONMENT READY / WAITING HUMAN QA (Morris)
**Baseline:** `eec68a418ae271452edc2188c9cf1ae06faa8232` (PR #582 merged)
**Runtime:** http://localhost:3020 **uniquement**

## Accès

| | |
|---|---|
| Login | http://localhost:3020/login |
| Projet | Simplification des interactions avec l’IA |
| Project ID | `prj:e66fd58c-03f6-41df-90c8-4ae267926212` |
| URL projet | http://localhost:3020/studio/projects/e66fd58c-03f6-41df-90c8-4ae267926212 |
| État | **CLONED QA STATE** (backup sqlite cohérent → stores isolés) |
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41` |

Cursor n’exécute **pas** l’auth ni le T2 REAL. Morris se connecte et juge.

## Prompt T2 exact (ne pas paraphraser)

```
Nora, maintenant qu'on a regardé le document de cadrage P1, j'aimerais qu'on s'intéresse au modèle de fonctionnement P2.
Le document est aussi disponible dans notre dépôt Git : projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md
Tu peux le consulter et m'expliquer comment il s'articule avec le cadrage P1 qu'on vient d'analyser ? J'aimerais comprendre ce que P2 apporte concrètement à notre réflexion sur la simplification des interactions avec l'IA.
```

Sources:
- P1 `projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md`
- P2 `projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md`

## Actions minimales

1. Ouvrir http://localhost:3020/login (navigateur système).
2. Se connecter (GitHub).
3. Ouvrir l’URL projet.
4. Idle : bouton **Envoyer** visible.
5. Coller le prompt T2 exact → Envoyer.
6. Observer **Arrêter**, activité live NDJSON, détail dépliable, libellés FR.
7. Laisser le tour se terminer (ne pas Stop pour tester l’annulation sur ce T2).
8. Juger qualité P1/P2, provenance, complétude, terminalité.
9. Verdict : PASS / FAIL / PASS WITH RESERVES + observations.

## Formulaire verdict

```
P6-T2-REAL-P1P2: PASS | FAIL | PASS WITH RESERVES
Observations:
...
```

```

**Verdict Morris:** WAITING HUMAN QA — non fabriqué.

## AC–AE. Fake/Real / Security / Findings

| Niveau | Statut |
|---|---|
| DETERMINISTIC / INTEGRATED ON MAIN / POST-MERGE CI | PASS (cycles antérieurs) |
| T2 REAL PRODUCT JOURNEY | **NOT EXECUTED this cycle by Cursor** |
| END-TO-END REAL T2 | NON PROUVÉ |
| READY FOR REAL / P6 GLOBAL / RUNTIME V3 | NON |

Security: pas de secret dans pack; DB historiques non mutées par runtime QA; pas de push projet; pas de REAL auto.

Findings / réserves:
- R-REAL-01 ouvert (qualité REAL)
- R-UX-01 ouvert (navigateur — à juger par Morris)
- R-P6-01 ouvert jusqu’à Human QA
- R-P6-02 P6 GLOBAL NOT PASSED
- R-V3-01 NON ADOPTED
- Studio Product path: pas de hardCapUsd FinOps (documenté)
- Override port: app sur 3020 uniquement (Morris)

## AF–AG. Dette / Trajectoire

Dette: aucune construction nouvelle.
Exit ce cycle Cursor: **environnement QA prêt + queue Human QA + pack/handoff**.
Preuve T2 REAL + verdict humain: **gate Morris en cours (Human QA)**.
Ensuite: consolidation P6 selon résultats.

## AH. Git Truth final (delivery wt)

HEAD `3d8acf3475c2180b8135379b110995b455f037ee` ; dirty pack local ; main distant `eec68a418ae271452edc2188c9cf1ae06faa8232` ; **pas de commit/push projet**.

## AI. Verdict

**P6 T2 REAL REQUALIFICATION — ENVIRONMENT READY / WAITING HUMAN QA.**

Sous-verdict technique: runtime eec68a41 @ :3020 isolé, prompt T2 exact, budget qualifié, historiques préservés.
REAL T2 / Browser UX / Human QA judgment: **WAITING MORRIS**.

Ne pas revendiquer: P6 GLOBAL PASS, RUNTIME V3 ADOPTED, END-TO-END REAL T2 PASS, 15-DOC REAL.

## AJ. Instruction ChatGPT

Lire handoff distant. Vérifier baseline eec68a41, runtime :3020 isolé, DB historiques préservées, GO REAL borné non exécuté auto, prompt T2, queue Human QA, Fake/Real, réserves. Rendre **CHATGPT P6 T2 REAL + HUMAN QA REVIEW** en distinguant ENVIRONMENT READY vs REAL/HUMAN encore ouverts. Préparer handoff court Pilote si besoin. Pas de microcycle sans blocker.

---

# APPENDIX — Evidence inventory (local paths, no secrets)

```
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/env/auth-bootstrap.pid
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/env/budget-envelope-qualification.md
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/env/env-keys.txt
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/env/environment-snapshot.txt
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/env/evidence-inventory.txt
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/env/next-3020.pid
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/env/next-3030.pid
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/env/runId.txt
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/human-qa/P6-T2-REAL-P1P2.queue.md
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/auth-bootstrap-3020.log
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/auth-bootstrap-3030.log
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/auth-bootstrap.log
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/historical-sqlite-backup-20261014T164555Z/nora-session.sqlite
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/historical-sqlite-backup-20261014T164555Z/oa-product.sqlite
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/keepalive-3030.log
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/next-dev-3020.log
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/next-dev-3030.log
/Users/morris/Projects/sfia-workspace-p6-t2-real-qa-eec68a41/.tmp-sfia-review/p6-t2-real-requal/raw/t2-prompt-exact.txt

```

# APPENDIX — Exact T2 prompt file

```
Nora, maintenant qu'on a regardé le document de cadrage P1, j'aimerais qu'on s'intéresse au modèle de fonctionnement P2.
Le document est aussi disponible dans notre dépôt Git : projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md
Tu peux le consulter et m'expliquer comment il s'articule avec le cadrage P1 qu'on vient d'analyser ? J'aimerais comprendre ce que P2 apporte concrètement à notre réflexion sur la simplification des interactions avec l'IA.

```
