# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-17 17:42:27 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 9 — QA / validation — RERUN |
| **Profil** | Critical |
| **Typologie** | INC / QA déterministe Pre-M6 post-stabilization |
| **Capacité v3 principale** | V3-F11 / V3-F12 |
| **e2e supportée** | V3-F05 |
| **Associées** | V3-F14 / V3-F15 ; V3-F10 dette recovery |
| **Milestone** | PRE-M6 |
| **Etat Pre-M6** | NON COMPLETE |
| **Runtime v3** | NON ADOPTED |
| **Architecture** | ARCH-WOP-1 IMPLEMENTED CANDIDATE — VALIDATED UNDER DETERMINISTIC QA |
| **CKC Cycle 9** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` |
| **CKC blob** | `9d9970d611dbb6e52297ac215604d3a08e87e738` (HEAD, matches expected) |
| **CKC status / version** | candidate / 0.1.0 — experimental cognitive guidance — **aucune autorité d'exécution** |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche candidat** | `delivery/sfia-studio-pre-m6-ui-option-a` |
| **Campagne** | `.tmp-sfia-review/cycle-9-deterministic-qa-rerun/` |

## GO Morris exact

```
ACCEPT —
CYCLE 8 DELIVERY AMEND
FULL VITEST STABILITY

et

GO MORRIS —
CYCLE 9 DETERMINISTIC QA RERUN
ZERO REAL
```

Cycle 8 Delivery Amend ACCEPTÉ. Ce GO autorise inspection, tests existants, harness déterministe existant, isolated QA DB, Playwright déterministe, full regression, Review Pack FULL, publication handoff L3.

Ce GO N'autorise PAS : mutation produit/tests/E2E/config ; nouveau test/helper/harness ; Cursor REAL ; OpenAI LIVE ; nouvel Attempt/worktree REAL ; commit/push/PR/merge projet ; Roadmap ; M6 ; UAT ; runtime v3 ADOPTED.

## Verdict

PASS —
CYCLE 9 DETERMINISTIC QA RERUN
ARCH-WOP-1 VALIDATED UNDER DETERMINISTIC QA
EXECUTION WINDOWS 5/15/30/60 PROVEN
SINGLE SNAPSHOTTED DEADLINE PROVEN
O3 SAME-ATTEMPT OBSERVATION PROVEN
AUTO PAGE-OPEN + MANUAL REFRESH PROVEN
ONE-LAUNCH INVARIANT PROVEN
FULL VITEST STABILITY CONFIRMED UNDER QA
DETERMINISTIC CURSOR BOUNDARY PARITY PROVEN
ZERO REAL
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
REAL BOUNDARY TERMINAL REMAINS NOT PROVEN
END-TO-END REAL REMAINS NOT PROVEN
READY FOR MORRIS REAL RE-PROOF DECISION
NOT AUTHORIZED FOR REAL

READY FOR MORRIS REAL RE-PROOF DECISION ≠ READY FOR REAL ≠ GO REAL.

## Local Git Truth PRE (measured)

| Ref | SHA |
|-----|-----|
| HEAD candidat | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| origin/sfia/review-handoff | `534259136b3368595a7ad8c0d123fbba08b9ec0b` |
| parent Delivery Amend blob | `3ffa2c514f518ec0d035fc5a078f96337fc4883a` |
| CKC QA blob | `9d9970d611dbb6e52297ac215604d3a08e87e738` |

Branche : `delivery/sfia-studio-pre-m6-ui-option-a`

PRE staged : vide

PRE dirty : 110 lignes

PRE candidate manifest : 994 files, sha256 `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5`

`runningAttemptRefresh.ui.test.tsx` SHA256 PRE = `ed27f2c556c278d2e77e898d22758fbeb598a9f6454db43905db93888e4f85b9` — **match Delivery Amend POST**.

Produit inchangé vs Amend : `useProductConversation.ts` `a55d4eb9…` ; `useRunningAttemptO3Observation.ts` `c3e96b36…`.

origin/main inchangé. Delta `origin/main...HEAD` sur `projects/sfia-studio/app` = 0. **Pas de STOP QA INPUT STATE DIVERGED.** **Pas de STOP DELIVERY AMEND CANDIDATE IDENTITY DIVERGED.**

SFIA_STUDIO_CURSOR_REAL unset. OPS1_CURSOR_REAL unset.

## Local Git Truth POST

| Ref | SHA |
|-----|-----|
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` — aucun commit projet |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| origin/sfia/review-handoff | *mis à jour après publication L3 — voir Handoff* |
| staged | vide |
| dirty | 110 lignes — identique PRE ligne à ligne |
| candidate manifest | 994 / `328bc0bb…` = PRE |
| refresh UI test SHA | `ed27f2c556c278d2e77e898d22758fbeb598a9f6454db43905db93888e4f85b9` = PRE |

Artefact non-candidat : `projects/sfia-studio/app/tsconfig.tsbuildinfo` gitignored. `.next/` gitignored.

**Pas de FAIL QA MUTATED CANDIDATE.**

Delta autorisé : `.tmp-sfia-review/**` uniquement. Le spec Playwright existant écrit encore sous le chemin Cycle 8 ; copies dans `cycle-9-deterministic-qa-rerun/screenshots/`.

## Parent Delivery Amend handoff

Lu : `git show origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`

Commit : `534259136b3368595a7ad8c0d123fbba08b9ec0b`

Blob : `3ffa2c514f518ec0d035fc5a078f96337fc4883a`

Verdict parent (extrait exact) :

```
PASS —
CYCLE 8 DELIVERY AMEND
FULL VITEST STABILITY RESTORED
runningAttemptRefresh.ui.test.tsx STABILIZED UNDER FULL SUITE LOAD
ROOT CAUSE ESTABLISHED
PRODUCT BEHAVIOR UNCHANGED
ARCH-WOP-1 NOT REOPENED
FULL VITEST 3 CONSECUTIVE RUNS PASS
ZERO REAL
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
READY FOR MORRIS DELIVERY ACCEPTANCE
READY FOR CYCLE 9 DETERMINISTIC QA RERUN
NOT READY FOR REAL
```

Root cause parent : **RC-TEST-ASYNC**. Helper `findEnabledByTestId` : présence → waitFor(toBeEnabled) → interaction. Aucun produit modifié.

**Pas de STOP PARENT DELIVERY AMEND HANDOFF DIVERGED.**

## Sources lues (sans mutation)

PROCESSUS : template v2.6 ; routing ; CKC `04-qa-validation.md` blob `9d9970d6…` ; méthode §4.9 ; operating model / guardrails.

CONVERGENCE : Build Doctrine + Roadmap — PRE-M6 NON COMPLETE ; runtime v3 NON ADOPTED.

DOCTRINE V3 : framing 34/35.

HANDOFF : Cycle 8 Delivery Amend actuel.

PRODUIT / TESTS : executionWindowPolicy, observationSchedule, useRunningAttemptO3Observation, useProductConversation, contract/attempt types, gateway, completeBoundedReadOnlyLaunch, deterministicExternalLaunchBoundary, runningAttemptRefresh.ui.test.tsx (helper inspecté, SHA conforme), tests window/deadline/O3/D1–D5/T-R3, Playwright deterministic spec.

## Convergence Pre-check

KEEP ARCH-WOP-1 / windows / snapshot / O3 / auto+manual / one-launch / deterministic boundary / stabilisation async test-only.

Gap visé : DETERMINISTIC QA VALIDATION — **fermé sous preuve QA ce cycle**.

R-FULL-VITEST-FLAKE : adressé en Delivery Amend ; **revalidé** par 3 full Vitest consécutifs PASS — **CLOSED UNDER QA**.

Next capability si PASS : ONE NEW BOUNDED REAL PRODUCT LOOP RE-PROOF sous NOUVEAU GO Morris — **non consommé**.

## Référentiel ARCH-WOP-1 — preuves

### CONTRACT

| # | Exigence | Preuve | Statut |
|---|----------|--------|--------|
| 1-2 | 4 classes 5/15/30/60 | `executionWindowPolicy.test.ts` | PROUVÉ |
| 3 | M3 default standard=15 min | `DEFAULT_BOUNDED_READ_ONLY_M3` + bounded profile | PROUVÉ |
| 4 | fingerprint-significant | standard ≠ long ≠ legacy omit | PROUVÉ |
| 5-6 | schema + legacy non réécrit | persist class / omit stays undefined | PROUVÉ |

### SNAPSHOT / DEADLINE

| # | Exigence | Preuve | Statut |
|---|----------|--------|--------|
| 7-9 | StartExecution snapshot stable | D2 product path class=standard duration=900000 | PROUVÉ |
| 10-14 | deadline = startedAt+window ; timeoutMs exact ; no 60_000 default | gateway `assertResolvedTimeoutMs` + `timeoutMs: request.timeoutMs` ; R1-11 | PROUVÉ |
| 15-17 | -1ms running / deadline timeout / idempotent | `executionWindowDeadline.test.ts` **each class** | PROUVÉ |
| 18 | +31 min absent | grep f3/gateway/startExecution ; test short @ 6 min | PROUVÉ |

**Pas de FAIL SINGLE DEADLINE SEMANTICS REGRESSION.**

### Contradiction timedOut-before-deadline

T-R3-TIMEOUT : `oa.execution_attempt.timed_out` `detailCode=TIMEOUT_NOT_REACHED` puis fail-closed `recordExecutionFailure`. Pas d'Evidence success. Pas de second launch.

### O3 schedules (formule module, fake clock)

| Classe | later | ticks | schedule (s) |
|--------|-------|-------|----------------|
| short 5 min | 30s | 13 | 0, 5, 15, 30, 60, 90 … 270, **300** |
| standard 15 min | 90s | 15 | 0, 5, 15, 30, 60, 150 … 870, **900** |
| long 30 min | 120s | 20 | 0, 5, 15, 30, 60, 180 … 1740, **1800** |
| extended 60 min | 120s | 35 | 0, 5, 15, 30, 60, 180 … 3540, **3600** |

20s → probe 30s. >3 observations (extended count=35). min gap 5s. aucun 200ms. deadline forcée. Tests `observationSchedule.test.ts` verts.

### SAME ATTEMPT / ONE-LAUNCH / D1–D5 / UI / TERMINAL

T-R3-ASYNC, T-R3-E2E, D2 product path : launchCallCount=1 after observes, CREATED=1 LAUNCHED=1, fixture launch=0.

D1 quick success ; D2 pending×2 then success + product Evidence/RB/Nora ; D3 timeout at 15 min (still running at 14 min) launch=1 ; D4 failed no Evidence success ; D5 observe unknown → null.

O3 hook fake timers : 5s first probe ; unmount/terminal cancel ; in-flight guard.

Helper `findEnabledByTestId` présent. Aucun sleep. Aucun skip. Confirm count = 1 sur double-click. Refresh SHA PRE=POST.

B7 timeout browser : **non exercé**. Domain/integration = preuve timeout. R-BROWSER-TIMEOUT conservée.

## UI async stabilization revalidation

Helper inspecté :

```
async function findEnabledByTestId(testId: string) {
  const el = await screen.findByTestId(testId);
  await waitFor(() => { expect(el).toBeEnabled(); });
  return el;
}
```

Pas de force-enable. Interaction seulement après enabled légitime. Confirm spy = 1 (double-click test). Same IDs / same Attempt / canonical refresh conservés.

## Primary isolation

7/7 PASS.

## Five repeated UI runs (processus Vitest séparés)

| Run | Result | elapsed |
|-----|--------|---------|
| iso-1 | 7/7 PASS | 1s |
| iso-2 | 7/7 PASS | 1s |
| iso-3 | 7/7 PASS | 1s |
| iso-4 | 7/7 PASS | 1s |
| iso-5 | 7/7 PASS | 1s |

Aucun retry natif.

## Targeted batch

10 files / **83 tests passed / 0 failed**. elapsed 1.37s.

Fichiers : executionWindowPolicy, observationSchedule, executionWindowDeadline, m4RealOffCorrection R1/R2/R3, useRunningAttemptO3Observation, runningAttemptRefresh.ui, deterministicCursorBoundary, preM6.realProductWiringResidual.

## Full Vitest — R-FULL-VITEST-FLAKE CLOSED UNDER QA

| Run | passed | failed | skipped | files | elapsed |
|-----|--------|--------|---------|-------|---------|
| #1 | 1854 | 0 | 131 | 197 passed / 13 skipped | 16s |
| #2 | 1854 | 0 | 131 | 197 passed / 13 skipped | 18s |
| #3 | 1854 | 0 | 131 | 197 passed / 13 skipped | 18s |

Séquence PASS/PASS/PASS. New skips = 0.

Skips = 131 / 13 files FinOps Postgres `describe.skip` when DATABASE_URL unset — historiques, hors chemin Pre-M6 critique.

## Playwright deterministic

Spec existant inchangé. Port **3031**. Isolated sqlite. DET=1. REAL unset. `PLAYWRIGHT_FORCE_WEBSERVER=1`. pending observes=2.

**1 passed (14.7s)** — B1–B4 running → pending refresh → terminal → reload.

IDs (isolated, ≠ historical REAL) :

- projectId `prj:e59b8715-af6b-46a0-954f-f0067f9a8e56`
- decisionId `dec:f2:b6e26b98-d337-41ee-9f22-03b472e90697`
- executionContractId `xct:m3-res:dec:f2:b6e26b98-d337-41ee-9f22-03b472e90697`
- attemptId `xat:m3:m3-res:dec:f2:b6e26b98-d337-41ee-9f22-03b472e90697`

B1–B6 couverts. **B7 timeout browser NON PROUVÉ.**

SHA256 captures :

- `01-running-refresh-available.png` `c1ae0b2f926185301e4e87ec82d1c7fbadf4f26731e7186489b86ac8507a5aaf`
- `02-pending-same-attempt.png` `d5cebe2a258f604b10aa65480f605f720feacd8b7e0c6eb6f7c7d817741cb4eb`
- `03-terminal-evidence.png` `b5a7f4d50b3e7a7af12b56d062f7d294399822579af43992d98fe5f2ef0d6978`
- `04-post-evidence-lps.png` `e3b2ab575dcb028d90a20f969dfa32f09922bd7bb97f5b087f0cf3a3b1782a45`
- `05-reloaded-terminal.png` `c6cb87d3065084afc5932cbfdd27a901a8412e4a919914787e629fd1ee91987e`

## Typecheck / lint / build

| Commande | Exit |
|----------|------|
| `npx tsc --noEmit` | 0 |
| `npx next lint` | 0 — No ESLint warnings or errors |
| `npx next build` | 0 |

## Fake / Real qualification

Applicable : OUI.

Fake : deterministic Cursor external-boundary substitution.

REAL correspondante : Cursor CLI subprocess. **Non lancée.**

Niveau preuve ce cycle (max autorisé) : **DETERMINISTIC PROVEN**.

**Pas** REAL BOUNDARY PROVEN. **Pas** END-TO-END REAL PROVEN.

DETERMINISTIC PROVEN ≠ READY FOR REAL.

## ZERO REAL accounting

| Compteur | Valeur |
|----------|--------|
| REAL Cursor launches | **0** |
| OpenAI LIVE calls | **0** |
| new REAL Attempts | **0** |
| new REAL worktrees | **0** |

**Pas de FAIL ZERO REAL CONTRACT VIOLATED.**

## Historical REAL integrity

| Attempt | Worktree | HEAD PRE=POST | porcelain |
|---------|----------|---------------|-----------|
| FIRST `xat:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96` | `wt-xat_m3_…453ff36a…` | `0d334785…` | empty |
| SECOND INCOMPLETE `xat:m3:m3-res:dec:f2:4a36c225-56e5-4654-bfbe-b86e3fc5ba4b` | `wt-xat_m3_…4a36c225…` | `0d334785…` | empty |

m4-worktrees count = **2**. Aucun cleanup. Aucune reprise.

## Reserves

| Id | Classe | Bloquante ? | Texte |
|----|--------|-------------|-------|
| **R-FULL-VITEST-FLAKE** | campagne QA | **NON — CLOSED UNDER QA** | 3 full Vitest consécutifs PASS (1854/0/131) + 5 isolation UI PASS. Fermeture n'élève pas le claim REAL. |
| R-TRACEABILITY | historique | non | 3 fichiers déjà untracked PRE Cycle 8. Inspectables, hashes stables ce cycle. |
| R-BROWSER-TIMEOUT | couverture | non | timeout non exercé au browser ; domain/integration couvre deadline-1ms / deadline / D3. |
| R-RECOVERY | V3-F10 | non | process-local runner registry. Ne ferme pas restart recovery. |
| G-UX-09 | historique | non | reload/rehydration UI — inchangée. |

## Anti-claims

- ≠ READY FOR REAL
- ≠ GO REAL
- ≠ REAL BOUNDARY PROVEN
- ≠ END-TO-END REAL PROVEN
- ≠ PRE-M6 COMPLETE
- ≠ M6 AUTHORIZED
- ≠ UAT READY
- ≠ PRODUCTION READY
- ≠ RUNTIME V3 ADOPTED
- ≠ GLOBAL V3 ADOPTED
- READY FOR MORRIS REAL RE-PROOF DECISION ≠ READY FOR REAL ≠ GO REAL
- DETERMINISTIC PROVEN ≠ READY FOR REAL

## Critères PASS Cycle 9 rerun — score

1 parent amend handoff : OUI. 2 candidate identity : OUI. 3 aucun changement candidat : OUI. 4–13 window/snapshot/deadline/O3 : OUI. 14–16 auto/manual/async revalidation : OUI. 17 UI 5 runs : OUI. 18 one-launch : OUI. 19 D1–D5 : OUI. 20 Evidence/failure : OUI. 21 browser DET : OUI (B7 réserve). 22 targeted : OUI. 23 full Vitest 3 consecutive : OUI. 24–26 typecheck/lint/build : OUI. 27 new skips 0 : OUI. 28 ZERO REAL : OUI. 29 historical REAL intact : OUI. 30 réserves classées : OUI. 31 anti-claims : OUI.

## Exact next gate

Ce gate REAL n'est **pas** consommé.

```
MORRIS —
ACCEPT / REJECT
CYCLE 9 DETERMINISTIC QA RERUN
ARCH-WOP-1

AND

GO / NO-GO
ONE NEW BOUNDED REAL PRODUCT LOOP RE-PROOF
READ-ONLY
FRESH ISOLATED DB
FRESH PROJECT
FRESH ATTEMPT
```

Le futur REAL devra : ne reprendre aucun Attempt historique ; ARCH-WOP-1 réel ; bounded M3 = standard 15 min ; O3 normal ; same Attempt ; same processRef ; aucune limite max-3 refresh ; observer jusqu'à terminal ou vraie deadline ; Evidence / ReviewBundle / Nora / LPS si success.

## Review Handoff

Mode : publish-in-cycle. Source : `.tmp-sfia-review/chatgpt-review.md`. Destination : `sfia-review-handoff/latest-chatgpt-review.md`. Branche : `sfia/review-handoff`. Publisher : `scripts/sfia/publish-review-handoff.sh`. Push L3 borné. Aucun push projet.

Valeurs post-publication renseignées dans le rapport Cursor.
