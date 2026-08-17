# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-17 16:40:44 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 9 — QA / validation |
| **Profil** | Critical |
| **Typologie** | INC / QA déterministe Pre-M6 post-Delivery |
| **Capacité v3 principale** | V3-F11 / V3-F12 |
| **e2e supportée** | V3-F05 |
| **Associées** | V3-F14 / V3-F15 ; V3-F10 dette recovery |
| **Milestone** | PRE-M6 |
| **Etat Pre-M6** | NON COMPLETE |
| **Runtime v3** | NON ADOPTED |
| **Architecture** | ARCH-WOP-1 IMPLEMENTED CANDIDATE — Cycle 8 ACCEPTÉ ; Cycle 9 QA n'élève pas le claim |
| **CKC Cycle 9** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` |
| **CKC blob** | `9d9970d611dbb6e52297ac215604d3a08e87e738` (HEAD, matches expected) |
| **CKC status / version** | candidate / 0.1.0 — experimental cognitive guidance — **aucune autorité d'exécution** |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree candidat** | `.../worktrees/sfia-studio-m4-real-off` |
| **Branche candidat** | `delivery/sfia-studio-pre-m6-ui-option-a` (locale only) |
| **Campagne** | `.tmp-sfia-review/cycle-9-deterministic-qa/` |

## GO Morris exact

```
ACCEPT —
CYCLE 8 EXECUTION WINDOW + OBSERVATION POLICY DELIVERY

et

GO MORRIS —
CYCLE 9 DETERMINISTIC QA
ZERO REAL
```

Cycle 8 est ACCEPTÉ pour entrer en QA. Ce GO autorise inspection, tests existants, harness déterministe existant, fake timers/clocks, isolated QA DB, Playwright déterministe, full regression, Review Pack FULL, publication handoff L3.

Ce GO N'autorise PAS : mutation source/tests/E2E/config ; nouveau harness/endpoint/fixture ; Cursor REAL ; OpenAI LIVE ; nouvel Attempt REAL ; worktree REAL ; commit/push/PR/merge projet ; Roadmap ; cleanup ; M6 ; UAT ; runtime v3 ADOPTED.

## Verdict

INCOMPLETE —
DETERMINISTIC QA VALIDATION FAILED

ARCH-WOP-1 REMAINS AN IMPLEMENTED CANDIDATE
TARGETED DETERMINISTIC SUITES PASS
BROWSER DETERMINISTIC SPEC PASS
TYPECHECK / LINT / BUILD PASS
FULL VITEST DID NOT STAY GREEN
ZERO REAL
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
REAL BOUNDARY TERMINAL REMAINS NOT PROVEN
END-TO-END REAL REMAINS NOT PROVEN
NOT READY FOR REAL
NOT AUTHORIZED FOR REAL
NOT READY FOR MORRIS REAL RE-PROOF DECISION

Cause bloquante : `npx vitest run` (campagne officielle full suite) a produit des tests rouges. Aucun test rouge n'est ignoré. Aucune correction n'a été faite dans ce Cycle 9.

## Local Git Truth PRE (measured)

| Ref | SHA |
|-----|-----|
| HEAD candidat | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| origin/sfia/review-handoff | `04186e14dadd0546d0f9e38cdde923bbbd7fb269` |
| parent Cycle 8 handoff blob | `f8b61ef7f4f9d88473b5d3d314f9cbb5cb0f599b` |
| CKC QA blob | `9d9970d611dbb6e52297ac215604d3a08e87e738` |

Branche : `delivery/sfia-studio-pre-m6-ui-option-a`

PRE staged : vide

PRE dirty : 110 lignes — dirty historique Option A, non écrasé

PRE candidate manifest (app scope, `.next`/`node_modules` exclus) : 994 files, sha256 `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5`

Conforme au POST Cycle 8. **Pas de STOP CYCLE 8 CANDIDATE IDENTITY DIVERGED.**

origin/main inchangé vs attente du prompt. Delta `origin/main...HEAD` sur `projects/sfia-studio/app` = 0. **Pas de STOP QA INPUT STATE DIVERGED.**

SFIA_STUDIO_CURSOR_REAL unset. OPS1_CURSOR_REAL unset. OPENAI_API_KEY unset in campaign shells.

## Local Git Truth POST

| Ref | SHA |
|-----|-----|
| HEAD candidat | `0d33478566627a9bf507d5a06323962d349308ee` (inchangé — aucun commit projet) |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| origin/sfia/review-handoff | *mis à jour après publication L3 — voir section Handoff* |
| staged | vide |
| dirty | 110 lignes — **identique PRE ligne à ligne** |
| candidate manifest | 994 files, sha256 `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5` = PRE |

38 fichiers Cycle 8 hashed POST : 38/38 content SHA match. R1 untracked PRE=POST. ProjectAssistantPanel `baaa0082157df2de815c7a0adcba1ee0712d70e4d9cb2c1de443a3249b7970b8`. attemptPolicy `e3cf70a7036166f4de83fcd28a79786c317467ec471436d5fe482cb313725753`. composeStudioProductRealBoundary `c7b4bb7d70e8078dd74865c37c3add2790972508bae74448aab0ad22faec02a4`.

Artefact non-candidat documenté : `projects/sfia-studio/app/tsconfig.tsbuildinfo` régénéré par typecheck/build ; gitignored (`*.tsbuildinfo`). `.next/` gitignored. Aucune mutation versionnée sous `projects/sfia-studio/app/**`, `e2e/**`, modeled, method, prompts, convergence, framing.

**Pas de FAIL QA MUTATED CANDIDATE.**

Delta autorisé : `.tmp-sfia-review/**` uniquement (campagne Cycle 9 + screenshots Playwright dont le spec existant écrit encore sous le chemin Cycle 8).

## Parent handoff Cycle 8

Lu : `git show origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`

Commit distant entrée : `04186e14dadd0546d0f9e38cdde923bbbd7fb269`

Blob : `f8b61ef7f4f9d88473b5d3d314f9cbb5cb0f599b`

Verdict parent (extrait exact) :

```
PASS —
CYCLE 8 DELIVERY
EXECUTION WINDOW + OBSERVATION POLICY IMPLEMENTED CANDIDATE
ARCH-WOP-1 IMPLEMENTED FOR PRE-M6 BOUNDED PATH
SINGLE EXECUTION WINDOW / SINGLE DEADLINE ENFORCED
O3 SAME-ATTEMPT OBSERVATION IMPLEMENTED
AUTO PAGE-OPEN + MANUAL REFRESH IMPLEMENTED
ONE-LAUNCH INVARIANT PRESERVED
DETERMINISTIC BOUNDARY PARITY UPDATED
DETERMINISTIC TESTS PASS
ZERO REAL
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
READY FOR CYCLE 9 DETERMINISTIC QA
NOT READY FOR REAL
```

**Pas de STOP PARENT CYCLE 8 HANDOFF DIVERGED.**

## Sources lues (sans mutation)

PROCESSUS : template v2.6 ; routing guide (qualification QA) ; CKC `04-qa-validation.md` blob `9d9970d6…` ; méthode §4.9 héritage ; operating model / guardrails (autorité Morris, Cursor n'élargit pas).

CONVERGENCE : Build Doctrine + Roadmap — PRE-M6 NON COMPLETE ; runtime v3 NON ADOPTED ; KEEP ARCH-WOP-1 candidate / ExecutionContract / Attempt / snapshot / one-launch / Confirmation / Gate D / RealExecutionLaunchPort / ProcessRunner invoke≠observe / O3 / canonical refresh / Evidence pipeline / deterministic substitution. FREEZE : universal 60s, max 3 refresh, 200ms loop, +31 min forge, fixture-specific success shortcut.

DOCTRINE V3 : framing 34/35 — gouvernance d'exécution + evidence/debt ; aucun claim runtime v3 ADOPTED.

PRODUIT / TESTS Cycle 8 relus : executionWindowPolicy.ts ; observationSchedule.ts ; useRunningAttemptO3Observation.ts ; contract types/invariants/fingerprint/build/schema ; Attempt types/invariants/start/timeout ; RealExecutionLaunchPort ; StudioCursorRealLaunchGateway ; bounded M3 profile ; completeBoundedReadOnlyLaunch ; executeConfirmedBoundedReadOnlyContract ; deterministicExternalLaunchBoundary ; useProductConversation ; T-R3 ; window/deadline/O3 tests ; deterministic Cursor boundary tests ; runningAttemptRefresh tests ; Playwright deterministic spec.

## Convergence Pre-check

| Item | Etat |
|------|------|
| Gap visé ce cycle | DETERMINISTIC VALIDATION de l'ARCH-WOP-1 candidate |
| Next capability si PASS | fresh bounded REAL e2e re-proof sous NOUVEAU GO Morris — **non consommé** |
| PRE-M6 | NON COMPLETE |
| Runtime v3 | NON ADOPTED |
| Roadmap | non modifiée |

## Référentiel QA — preuves vs exigence

Légende : PROUVÉ = test existant vert + inspection ; PARTIEL = preuve ciblée mais full suite rouge sur le même fichier UI ; NON ATTEINT = critère PASS Cycle 9 non satisfait.

### A. CONTRACT

| # | Exigence | Preuve | Statut |
|---|----------|--------|--------|
| 1 | 4 classes only | `executionWindowPolicy.test.ts` `EXECUTION_WINDOW_CLASSES` = short/standard/long/extended | PROUVÉ |
| 2 | mapping 5/15/30/60 min | `PRE_M6_EXECUTION_WINDOW_MS` + resolver table | PROUVÉ |
| 3 | bounded M3 default standard=15 min | `DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS` + `boundedReadOnlyM3ResolutionProfile()` | PROUVÉ |
| 4 | class fingerprint-significant | fingerprint standard ≠ long ≠ legacy omit | PROUVÉ |
| 5 | schema modeled accepte le champ | schema additive optional enum (Cycle 8, hash inchangé) | PROUVÉ par identité + tests persist |
| 6 | legacy non réécrit silencieusement | build without class → `executionWindowClass` undefined ; Start resolves default without mutating contract | PROUVÉ |

### B. SNAPSHOT

| # | Exigence | Preuve | Statut |
|---|----------|--------|--------|
| 7-10 | StartExecution snapshot ; Attempt porte class+duration ; stable ; policy change n'altère pas l'Attempt | `startExecution.ts` persistRunningAfterAck ; D2 product path `executionWindowClass=standard` `resolvedMaxDurationMs=900000` ; deadline tests mutate snapshot independently of 30 min policy | PROUVÉ |

### C. SINGLE DEADLINE

| # | Exigence | Preuve | Statut |
|---|----------|--------|--------|
| 11 | deadline = startedAt + resolvedMaxDurationMs | `attemptDeadlineMs` + `triggerAttemptTimeout` | PROUVÉ |
| 12-14 | RealLaunchRequest timeoutMs exact ; gateway no 60_000 default ; ProcessRunner reçoit la valeur | gateway `assertResolvedTimeoutMs` then `timeoutMs: request.timeoutMs` ; R1-11 fail-closed missing/invalid ; D2 `port.calls[0].timeoutMs === 15*60*1000` ; T-R3-ASYNC same | PROUVÉ |
| 15-18 | TriggerAttemptTimeout même fenêtre ; deadline-1ms running ; deadline timeout ; idempotent | `executionWindowDeadline.test.ts` **each class** | PROUVÉ |
| 19 | aucun +31 min bounded path | grep f3/startExecution/gateway : aucune forge 31 min ; test explicite short snapshot @ 6 min ≠ +31 min | PROUVÉ |

**Pas de FAIL SINGLE DEADLINE SEMANTICS REGRESSION.** Le produit ne marque pas `Attempt.status=timeout` avant la deadline snapshotée via TriggerAttemptTimeout.

### Contradiction timedOut-before-deadline (R2)

T-R3-TIMEOUT (`completionTimedOut: true` immédiat, donc now << 15 min) :

- log campagne : `oa.execution_attempt.timed_out` `result=error` `detailCode=TIMEOUT_NOT_REACHED`
- `TriggerAttemptTimeout` refuse
- fallback `recordExecutionFailure` → `Attempt.status=failed` (pas `timeout`)
- orchestration wrapper `status: "timeout"` + `stopReason=EXECUTION_TIMEOUT`
- pas d'Evidence success (`ev:pending-real`)
- pas de second launch dans ce scénario (holdCompletion false, un seul confirm)

Ceci n'est **pas** le test nominal de deadline. Aucun Attempt timeout canonique avant deadline. Fail-closed. Aucun retry implicite observé.

### D. O3 schedules calculées (formule du module, fake clock)

interval = clamp(window * 0.10, 30s, 120s) ; early 5/15/30/60s ; forced deadline.

| Classe | window | later interval | count | min gap | 200ms loop | schedule (seconds from start) |
|--------|--------|----------------|-------|---------|------------|-------------------------------|
| short | 5 min | 30s | 13 | 5s | non | 0, 5, 15, 30, 60, 90, 120, 150, 180, 210, 240, 270, **300** |
| standard | 15 min | 90s | 15 | 5s | non | 0, 5, 15, 30, 60, 150, 240, 330, 420, 510, 600, 690, 780, 870, **900** |
| long | 30 min | 120s | 20 | 5s | non | 0, 5, 15, 30, 60, 180, 300, … every 120s … 1740, **1800** |
| extended | 60 min | 120s | 35 | 5s | non | 0, 5, 15, 30, 60, 180, 300, … every 120s … 3540, **3600** |

Oracle tests verts :

- 20s completion → next probe 30s (`delay=10000` after lastObserved=15s ; `delay=0` at now=30s)
- 2 min completion on cadence (`times` contains 120000 ; delay 20s after lastObserved=90s)
- deadline forced (`delay=0` at deadline ; `null` after)
- pas de cap 3 (`extended` length > 10 ; 4e et 5e probes dues)
- pas de boucle 200ms (min gap 5s)

### E–G. SAME ATTEMPT / UI / TERMINAL (ciblé)

T-R3-ASYNC, T-R3-E2E-SUCCESS, D2 product path : Attempt=1, launchCallCount=1 after observes, processRef stable, CREATED=1 LAUNCHED=1, fixtureAdapter.launchCallCount=0.

UI hook O3 (fake timers) : first probe 5s ; disabled/unmount n'arme pas ; in-flight guard ; stop on terminal disable.

runningAttemptRefresh UI : 7/7 **en isolation** et dans le batch ciblé 10 fichiers. **Rouge sous full Vitest** — voir section Full Vitest.

D1 quick success ; D2 pending×2 then success (port + product orchestration Evidence/RB/Nora) ; D3 fake nowMs timeout at snapshotted 15 min, still running at 14 min, launchCallCount=1 ; D4 nonzero exit failed + no Evidence success ; D5 observe unknown → null.

B7 browser timeout : **non exercé**. Couvert domain/integration only. Réserve R-BROWSER-TIMEOUT.

## Targeted tests

Commande : `npx vitest run` sur 10 fichiers ARCH-WOP-1 / T-R3 / D1–D5 / O3 UI / refresh UI.

Résultat : **10 files passed / 83 tests passed / 0 failed**. elapsed 1.48s. ZERO REAL env (`SFIA_STUDIO_CURSOR_REAL`/`OPS1_CURSOR_REAL`/`OPENAI_API_KEY` unset).

Fichiers :

- `__tests__/oa/execution-contract/executionWindowPolicy.test.ts`
- `__tests__/oa/execution-attempt/observationSchedule.test.ts`
- `__tests__/oa/execution-attempt/executionWindowDeadline.test.ts`
- `__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts`
- `__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts`
- `__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts`
- `__tests__/pre-m6-product-ui/useRunningAttemptO3Observation.test.tsx`
- `__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx`
- `__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts`
- `__tests__/project-assistant/preM6.realProductWiringResidual.test.ts`

Rerun isolation `runningAttemptRefresh.ui.test.tsx` : **7/7 passed**.

## Full Vitest — BLOQUANT

Campagne officielle : `npx vitest run` (script projet `test`).

| Run | Résultat |
|-----|----------|
| 03-full-vitest | **2 failed** / 1852 passed / 131 skipped / 196 files passed / 1 failed / 13 skipped. elapsed 15.66s |
| 03b-full-vitest-rerun | **1 failed** / 1853 passed / 131 skipped. elapsed 14.21s |

Tests rouges (même fichier) :

1. `runningAttemptRefresh.ui.test.tsx` — `confirms once then refreshes the SAME ids…` — `f2-decide-GO` found disabled (run 1 only)
2. `runningAttemptRefresh.ui.test.tsx` — `blocks concurrent refresh double-click…` — spy called 0 times, expected 1 (run 1 et run 2)

Ces tests passent en isolation et dans le batch ciblé. Cycle 8 avait déclaré 1854 passed / 0 failed sur le **même candidat**. Ce Cycle 9 n'a muté aucun test. Lecture : course UI `findByTestId` puis `toBeEnabled()` / double-click confirm sous charge parallèle full suite — **flake de campagne full**, pas une preuve que le mapping 5/15/30/60 a régressé.

**Non ignoré.** Critère PASS #26 non satisfait → verdict INCOMPLETE.

Nouveaux skips : **0**. Skips = 131 / 13 files = FinOps Postgres `describe.skip` when DATABASE_URL unset — historique, identique Cycle 8, hors chemin Pre-M6 critique.

## Typecheck / lint / build

| Commande | Exit | Notes |
|----------|------|-------|
| `npx tsc --noEmit` | 0 | log vide (aucun diagnostic) |
| `npx next lint` | 0 | No ESLint warnings or errors |
| `npx next build` | 0 | elapsed 11s |

## Browser deterministic

Harness existant uniquement. Port **3029**. Isolated DB `cycle-9-deterministic-qa/runtime/qa-product-deterministic.sqlite`. Env : DET=1, QA control, fake conversation, M3 local Morris, REAL unset, `PLAYWRIGHT_FORCE_WEBSERVER=1`, pending observes=2.

Spec existant : `e2e/studio-option-a-deterministic-cursor-boundary.spec.ts` hash `817e548b…` (R1, unchanged).

Résultat : **1 passed (15.8s)** — `B1–B4 running → pending refresh → terminal → reload`.

IDs campagne (isolated, ≠ historical REAL) :

- projectId `prj:2bcda75e-6fc8-404c-848f-17f2fe08d82e`
- decisionId `dec:f2:b886f4e5-d966-491d-bc1f-8b691744b266`
- executionContractId `xct:m3-res:dec:f2:b886f4e5-d966-491d-bc1f-8b691744b266`
- attemptId `xat:m3:m3-res:dec:f2:b886f4e5-d966-491d-bc1f-8b691744b266`

Classification spec : UI-DRIVEN / HARNESS-ARMED-BOUNDARY / DOMAIN-INTEGRATION-PROVEN / DETERMINISTIC PROVEN. Banner : `DETERMINISTIC / TEST BOUNDARY — ZERO REAL — not REAL proof`.

| Browser | Couvert | Note |
|---------|---------|------|
| B1 fresh Project/Decision/Contract/Attempt | oui | |
| B2 running visible (Exécution en cours / Actualiser le résultat) | oui | screenshot 01 |
| B3 same Attempt multi-observe | oui | screenshot 02 |
| B4 terminal success sans 2e launch | oui | screenshot 03 |
| B5 Evidence / ReviewBundle / LPS | oui | screenshot 04 |
| B6 manual refresh sans relaunch | oui | click refresh while running |
| B7 timeout browser | **non** | R-BROWSER-TIMEOUT — ne pas reporter PASS browser timeout |

Le spec écrit encore les PNG sous `.tmp-sfia-review/cycle-8-execution-window-observation-policy/screenshots` (chemin durci Cycle 8, **non muté**). Copies Cycle 9 : `.tmp-sfia-review/cycle-9-deterministic-qa/screenshots/` + backup Cycle 8 avant overwrite.

SHA256 Cycle 9 captures :

- `01-running-refresh-available.png` `426221ed73f02e0c9f8edd8c4be4fdb2fb5d5943efead3ad0c6432e831b35a8c`
- `02-pending-same-attempt.png` `0f44953f870606be88273df1cf9e57771e4df3344f2b51b72294ce84decf3686`
- `03-terminal-evidence.png` `e2a643d3bc85193963bb4a1a9871e6420496a3dea965d3d1973bc78283c13a60`
- `04-post-evidence-lps.png` `acfca4530b068ea82f566773f2de43e3841724d6213035882a25559b12890050`
- `05-reloaded-terminal.png` `baf932d56a18e8dd42f49f49576a5ab3fe7bd93fcdeb10b589cbae9f6ed69378`

Suites browser historiques Option A / OPS1 / D1 **non rejouées** : elles ne sont pas le harness déterministe Cycle 8 et risqueraient REAL/canonical DB. Hors GO « harness existant uniquement » pour cette preuve.

## Fake / Real qualification

Applicable : OUI.

Fake : deterministic Cursor external-boundary substitution (`TestOnlyDeterministicCursorLaunchPort`).

REAL correspondante : Cursor CLI subprocess. **Non lancée.**

Parité déterministe (contrat/fenêtre/snapshot/orchestration/one-launch/Evidence) : **prouvée sur le chemin fake/product** par targeted D1–D5 + Playwright DET.

Niveau preuve ce cycle (max autorisé) : **DETERMINISTIC PROVEN** sur les suites ciblées + browser spec. **Pas** FULL VITEST PROVEN. **Pas** REAL BOUNDARY PROVEN. **Pas** END-TO-END REAL PROVEN.

Règle dure : DETERMINISTIC PROVEN ≠ READY FOR REAL.

## ZERO REAL accounting

| Compteur | Valeur |
|----------|--------|
| REAL Cursor launches | **0** |
| OpenAI LIVE calls | **0** |
| new REAL Attempts | **0** |
| new REAL worktrees | **0** |

Env campaign : `SFIA_STUDIO_CURSOR_REAL` unset, `OPS1_CURSOR_REAL` unset, DET mutex 1, `OPS1_ALLOW_LIVE_SMOKE` unset, OPENAI_API_KEY fake-or-unset.

**Pas de FAIL ZERO REAL CONTRACT VIOLATED.**

## Historical REAL integrity

| Attempt | Worktree | HEAD PRE=POST | porcelain |
|---------|----------|---------------|-----------|
| FIRST `xat:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96` | `wt-xat_m3_m3-res_dec_f2_453ff36a-ac4b-459c-9d75-6f3-7dda85f19447a529bfe21555` | `0d33478566627a9bf507d5a06323962d349308ee` | empty |
| SECOND INCOMPLETE `xat:m3:m3-res:dec:f2:4a36c225-56e5-4654-bfbe-b86e3fc5ba4b` | `wt-xat_m3_m3-res_dec_f2_4a36c225-56e5-4654-bfbe-b86-67bf74b58c5f1b2fceb4eb6b` | `0d33478566627a9bf507d5a06323962d349308ee` | empty |

m4-worktrees count PRE=POST = **2**. Aucun cleanup. Aucune reprise.

## Réserves / debt

| Id | Classe | Bloquante ? | Texte |
|----|--------|-------------|-------|
| R-TRACEABILITY | historique | non | 3 fichiers déjà untracked PRE Cycle 8, remutés Cycle 8 sans hash PRE. Cycle 9 : contenu inspectable, hashes identiques PRE=POST, tests reproductibles. |
| R-BROWSER-TIMEOUT | couverture | non pour INCOMPLETE actuel | timeout non exercé au browser ; domain/integration couvre deadline-1ms / deadline / idempotence / D3. |
| R-RECOVERY | V3-F10 | non | process-local runner registry. Ne ferme pas restart recovery. |
| G-UX-09 | historique | non | reload/rehydration UI — inchangée ; tests existants seulement. |
| **R-FULL-VITEST-FLAKE** | **campagne QA** | **OUI pour PASS Cycle 9** | full `npx vitest run` rouge 2× sur `runningAttemptRefresh.ui.test.tsx` ; vert en isolation. Empêche le PASS. |

## Anti-claims

- ≠ END-TO-END REAL PROVEN
- ≠ REAL BOUNDARY PROVEN
- ≠ READY FOR REAL
- ≠ GO REAL
- ≠ READY FOR MORRIS REAL RE-PROOF DECISION (ce gate n'est pas ouvert : QA Cycle 9 INCOMPLETE)
- ≠ PRE-M6 COMPLETE
- ≠ RUNTIME V3 ADOPTED
- ≠ ARCH-WOP-1 VALIDATED UNDER DETERMINISTIC QA (full suite non verte)
- ≠ « sans bug » / « couverture totale » / GO implicite
- DETERMINISTIC PROVEN (ciblé + browser spec) ≠ READY FOR REAL
- Cycle 8 ACCEPT ≠ Cycle 9 PASS

## Critères PASS Cycle 9 — score

1 parent handoff : OUI. 2 candidate PRE : OUI. 3 zéro mutation versionnée : OUI. 4–12 window/snapshot/deadline : OUI (ciblé). 13 contradiction fail-closed : OUI (T-R3-TIMEOUT + TIMEOUT_NOT_REACHED). 14 +31 min absent : OUI. 15–17 O3 : OUI. 18 auto observation : OUI (hook tests). 19 manual refresh : OUI browser + isolation ; **entaché par flake full suite**. 20 one-launch : OUI ciblé. 21 D1–D5 : OUI. 22–23 Evidence/failure : OUI. 24 browser DET : OUI. 25 targeted : OUI. **26 full Vitest : NON.** 27–29 typecheck/lint/build : OUI. 30 new skips 0 : OUI. 31 ZERO REAL : OUI. 32 historical REAL intact : OUI. 33 manifest PRE=POST : OUI. 34 réserves explicites : OUI. 35 anti-claims : OUI.

## Exact next gate

Ce gate REAL n'est **pas** consommé. Le PASS Cycle 9 n'est **pas** atteint.

```
MORRIS —
ACCEPT / REJECT
CYCLE 9 DETERMINISTIC QA
INCOMPLETE — DETERMINISTIC QA VALIDATION FAILED
ARCH-WOP-1

THEN, IF REJECT OR RETURN-TO-DELIVERY :

GO / NO-GO
CYCLE 8.x / 10 DELIVERY
STABILIZE FULL VITEST
runningAttemptRefresh.ui.test.tsx UNDER FULL SUITE LOAD
ZERO REAL
NO READY-FOR-REAL CLAIM
```

Le protocole REAL (nouvel Attempt, isolated DB, fenêtre standard 15 min, O3 normal, pas de cap 3 refresh) reste **non autorisé** jusqu'à un GO Morris séparé **après** un Cycle QA PASS.

## Review Handoff

Mode : publish-in-cycle. Source : `.tmp-sfia-review/chatgpt-review.md`. Destination : `sfia-review-handoff/latest-chatgpt-review.md`. Branche : `sfia/review-handoff`. Publisher : `scripts/sfia/publish-review-handoff.sh`. Push L3 borné autorisé. Aucun push projet.

Valeurs post-publication renseignées dans le rapport Cursor (HANDOFF_COMMIT_SHA / HANDOFF_BLOB_SHA / REMOTE_VERIFIED).
