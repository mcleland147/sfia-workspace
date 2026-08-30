# MW1 OPTION C — GIT INTEGRATION READINESS — FULL REVIEW PACK

## 1. Timestamp (Europe/Paris)
2026-08-30 23:54:05 CEST

## 2. Repo
mcleland147/sfia-workspace

## 3. Consumed Morris GO
GO MORRIS — MW1 OPTION C GIT INTEGRATION READINESS — RESOLVE GIT-DEBT-MW1-01 AND PREPARE A CURRENT-MAIN INTEGRATION STRATEGY FOR THE CRITICAL-REVIEWED OPTION C CANDIDATE — PRESERVE EXACT REVIEWED CONTENT — NO PROJECT PUSH / PR / MERGE YET — NO MW0 PARITY YET.

## 4. Cycle
RUN / CRITICAL — Git integration readiness / repository execution

## 5. Sources read
Cycle template, routing guide, guardrails, build doctrine, roadmap, product-completion 01/02, framing 30/34, nora-cognitive-completion 05/07, Review Handoff 70e5a3f7…

## 6. CKC
ABSENT for Delivery/Cycle 8 — v2.6 process fallback.

## 7–11. Source worktree / branch / HEAD / origin-main / remote Delivery
- Source WT: /Users/morris/Projects/sfia-workspace-nora-mw1-option-c-recovered
- Branch: delivery/sfia-studio-nora-mw1-option-c-migration
- HEAD: 4f00a2ad5e58310392e2efb562174d32ad8240e8
- origin/main: c42070034c4c36216b256f02662a92d711db2334
- Remote Delivery: ABSENT
- Ownership:
```
worktree /Users/morris/Projects/sfia-workspace-nora-mw1-option-c-main-readiness
HEAD c42070034c4c36216b256f02662a92d711db2334
detached
---
worktree /Users/morris/Projects/sfia-workspace-nora-mw1-option-c-recovered
HEAD 4f00a2ad5e58310392e2efb562174d32ad8240e8
branch refs/heads/delivery/sfia-studio-nora-mw1-option-c-migration
---
```

## 12. Initial upstream
origin/main (erroneous) — status showed `[origin/main: behind 2]`

## 13–15. Source candidate + full manifest + aggregate
24-path Option C app delta relative to 4f00a2ad…
```
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/authority.d0.test.ts|260b94a637ea44b2b3472f4deaf1a7dfac4e5059c59eccde1e8872874763d70e
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/fakeConvergence.d0.test.ts|f3ac31aa83b1c12e94f7fd7139bb6311ad739d6f08ccc40a1831201f51960082
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/runner.d0.test.ts|1c8d3e4c4e20a004eda56f62081ab87af68f4017f3c59f76515a9ba2f6770bdb
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts|7aed623ac150d5e6abbcfcf1a5a0d181ebf3a98c07756efc21ac78d1e19b614e
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts|d184a51a75446161362e0940b0788b9c82405d727be7c976c864b619daa5fb4d
M|projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts|4ef721cb9d89a9967bea135b7cd0eca30b3aa15231dca20ec0869d9c3b291a7f
M|projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts|7ca6b33b6b04a904186ec3225694dbcb5bae76808f07187552d7695e104f4383
M|projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts|97c39bf5b1e6e3c2c2800982d84543e14fa306ca0120146628d757f8d6cb0422
M|projects/sfia-studio/app/features/project-assistant/types.ts|e88605585970438276c8db340b1294b19cbd096695a1b594dfc6d32a05572b34
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/MIGRATION.md|f67b71d6d7bffef2b59e99a313db6ab6380d0e74f0f2d2d7ed1d398a64d9be2a
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts|c8ebc754a2de347a290ec20758dd00be0202762520025c1a0da4f9e6df18f3a1
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts|69b2a642bde2f923c5f8b69dcaab16358c9778c94d47ea9d443b5bd68fd76c36
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts|d29be03911dda160e5906fe44954cd1dfdbbe096a5befb52ebb49ecf3d378567
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts|7c855658ad638461282c202c7c9771332fb589bbbab6c60fb0885945ee3d0a90
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts|bbb3439906b629b34d53959f2df77d6fbea4ea31155154ffee2d42e62cb5184d
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts|27e7aa1adbe7b7455c867e50bf223c4e365d84ed1ecdace73d15315afe896576
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts|d76d75e72451048a9bb937d567eb145248c15bf4bcbd41a51d36fc4c9d6f22e9
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts|f48e11211fffc20b7b2d0b6ee34614e3472faa4f0fb73e7feea32dfaa30ce16c
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/turnBudget.ts|4168ad4d9911946097cade1e895859924da493a9deebfc55bc6c130753dbd2f7
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts|e1f8e552692fb96936220cb8b186c70f1e68035c789471de4728c39016ff6c61
M|projects/sfia-studio/app/lib/nora-eval/index.ts|7ed545fdd6cf76dcd41e0ba19952b1ba9161defb8a9c17b41951ff9d9d128734
A|projects/sfia-studio/app/lib/nora-eval/optionCObservables.ts|009bef64e4a7b85336c61b03b07e6b6b29639d611fc09ed2d948657c81c4143b
M|projects/sfia-studio/app/package-lock.json|3c0952bbff86124e4d66cb2d50289c7712f8d6cf5669ea2d7615cc570dc20e2b
M|projects/sfia-studio/app/package.json|4c1ce8cad919ab7d893dc94b2e765d2f65fe00db8aff51adad5c7241169dbdd2
```
SOURCE_DELTA_AGGREGATE_SHA256=beceeac79f07ee35e3f5ffea04fe742ba6eef7c70311e301ef4bd9e4e779dade

## 16. Latest review handoff provenance
70e5a3f7cfdcf9ab6a69a84ed297e3429c1afdea
Local `.tmp-sfia-review/chatgpt-review.md` sha256 matched published tip content before this readiness cycle (retirement pack).

## 17. 4f00→c420 ancestry
merge-base = 4f00a2ad5e58310392e2efb562174d32ad8240e8 (main is descendant)

## 18. Exact three current-main documentary files
M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md
M projects/sfia-studio/nora-cognitive-completion/07-nora-openai-cognitive-runtime-architecture-decision.md

## 19. Current-main app parity
git diff --name-only 4f00… c420… -- projects/sfia-studio/app → EMPTY

## 20. Exact unset-upstream command/result
```
git branch --unset-upstream
```
Upstream before: origin/main
Upstream after: NONE
branch -vv after:
```
* delivery/sfia-studio-nora-mw1-option-c-migration                                                                                   4f00a2ad docs(sfia-studio): adopt Nora Option C cognitive runtime target (#445)
```

## 21. Proof source content unchanged after upstream removal
HEAD unchanged 4f00a2ad…
branch unchanged
SOURCE_DELTA_AGGREGATE_SHA256 unchanged = beceeac79f07ee35e3f5ffea04fe742ba6eef7c70311e301ef4bd9e4e779dade

## 22. GIT-DEBT-MW1-01-A CLOSED
Erroneous upstream relation CLOSED.
Remaining PRE-INTEGRATION ANCESTRY GAP (4f00 tip vs c420 main) expected/controlled — rehearsed below.

## 23–25. Rehearsal path / creation / initial HEAD
Path: /Users/morris/Projects/sfia-workspace-nora-mw1-option-c-main-readiness
Command:
```
git worktree add --detach \
  /Users/morris/Projects/sfia-workspace-nora-mw1-option-c-main-readiness \
  origin/main
```
Initial HEAD: c42070034c4c36216b256f02662a92d711db2334 detached CLEAN

## 26. Exact transplant mechanism
Manifest-driven `shutil.copy2` / `cp -p` equivalent per A/M path only.
No broad rsync. No .tmp source review copy into product paths. No source edits.
No D entries in this candidate (resolveRuntime was untracked then deleted earlier; never tracked at 4f00).

## 27–28. Source↔rehearsal matrix + aggregate parity
```
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/authority.d0.test.ts|260b94a637ea44b2b3472f4deaf1a7dfac4e5059c59eccde1e8872874763d70e
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/fakeConvergence.d0.test.ts|f3ac31aa83b1c12e94f7fd7139bb6311ad739d6f08ccc40a1831201f51960082
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/runner.d0.test.ts|1c8d3e4c4e20a004eda56f62081ab87af68f4017f3c59f76515a9ba2f6770bdb
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts|7aed623ac150d5e6abbcfcf1a5a0d181ebf3a98c07756efc21ac78d1e19b614e
A|projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts|d184a51a75446161362e0940b0788b9c82405d727be7c976c864b619daa5fb4d
M|projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts|4ef721cb9d89a9967bea135b7cd0eca30b3aa15231dca20ec0869d9c3b291a7f
M|projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts|7ca6b33b6b04a904186ec3225694dbcb5bae76808f07187552d7695e104f4383
M|projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts|97c39bf5b1e6e3c2c2800982d84543e14fa306ca0120146628d757f8d6cb0422
M|projects/sfia-studio/app/features/project-assistant/types.ts|e88605585970438276c8db340b1294b19cbd096695a1b594dfc6d32a05572b34
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/MIGRATION.md|f67b71d6d7bffef2b59e99a313db6ab6380d0e74f0f2d2d7ed1d398a64d9be2a
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts|c8ebc754a2de347a290ec20758dd00be0202762520025c1a0da4f9e6df18f3a1
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts|69b2a642bde2f923c5f8b69dcaab16358c9778c94d47ea9d443b5bd68fd76c36
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts|d29be03911dda160e5906fe44954cd1dfdbbe096a5befb52ebb49ecf3d378567
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts|7c855658ad638461282c202c7c9771332fb589bbbab6c60fb0885945ee3d0a90
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts|bbb3439906b629b34d53959f2df77d6fbea4ea31155154ffee2d42e62cb5184d
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts|27e7aa1adbe7b7455c867e50bf223c4e365d84ed1ecdace73d15315afe896576
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts|d76d75e72451048a9bb937d567eb145248c15bf4bcbd41a51d36fc4c9d6f22e9
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts|f48e11211fffc20b7b2d0b6ee34614e3472faa4f0fb73e7feea32dfaa30ce16c
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/turnBudget.ts|4168ad4d9911946097cade1e895859924da493a9deebfc55bc6c130753dbd2f7
A|projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts|e1f8e552692fb96936220cb8b186c70f1e68035c789471de4728c39016ff6c61
M|projects/sfia-studio/app/lib/nora-eval/index.ts|7ed545fdd6cf76dcd41e0ba19952b1ba9161defb8a9c17b41951ff9d9d128734
A|projects/sfia-studio/app/lib/nora-eval/optionCObservables.ts|009bef64e4a7b85336c61b03b07e6b6b29639d611fc09ed2d948657c81c4143b
M|projects/sfia-studio/app/package-lock.json|3c0952bbff86124e4d66cb2d50289c7712f8d6cf5669ea2d7615cc570dc20e2b
M|projects/sfia-studio/app/package.json|4c1ce8cad919ab7d893dc94b2e765d2f65fe00db8aff51adad5c7241169dbdd2
```
REHEARSAL_DELTA_AGGREGATE_SHA256=beceeac79f07ee35e3f5ffea04fe742ba6eef7c70311e301ef4bd9e4e779dade
AGG_PARITY=YES (identical to source)

## 29. Governance-doc current-main preservation
Three OD04-I01 docs in rehearsal byte-identical to HEAD/origin/main (not from 4f00 WT).

## 30. Rehearsal Git status/diff
```
## HEAD (no branch)
 M projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-eval/index.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/
?? projects/sfia-studio/app/lib/nora-eval/optionCObservables.ts

.../project-assistant/orchestrateTurn.test.ts      |  28 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   4 +-
 .../features/project-assistant/orchestrateTurn.ts  |  27 +-
 .../app/features/project-assistant/types.ts        |   4 +
 projects/sfia-studio/app/lib/nora-eval/index.ts    |   4 +
 projects/sfia-studio/app/package-lock.json         | 300 ++++++++++++++++++++-
 projects/sfia-studio/app/package.json              |   4 +-
 7 files changed, 343 insertions(+), 28 deletions(-)
```

## 31–37. Validation (rehearsal app)
```
npm ci (lockfile) — required (no node_modules in new WT)
npm run typecheck → PASS
npm run lint → PASS
npx vitest run __tests__/nora-cognitive-runtime → PASS
orchestrateTurn + ops1/controlTowerTools + d1/intake-platform-integration → PASS (58 tests combined targeted)
npm test → Test Files 234 passed | 14 skipped; Tests 2248 passed | 132 skipped
git diff --check → PASS
```
Matches prior retirement suite count 2248/132.
General regression PASS ≠ MW0 Option C parity PASS.

## 38–39. Reserves unchanged
RESERVE-OPT-C-02 OPEN/NON-BLOCKING — not edited
RESERVE-OPT-C-03 OPEN/NON-BLOCKING — not edited
Exact reviewed content preserved.

## 40. Explicit future single-commit→rebase strategy
Under DISTINCT Morris PROJECT INTEGRATION GO only:
1. Source WT recovered; branch Delivery; HEAD 4f00; upstream NONE; candidate unchanged
2. Stage ONLY reviewed projects/sfia-studio/app/** paths from manifest (never git add . / -A); exclude .tmp-sfia-review/**
3. ONE project commit of exact reviewed Option C candidate
4. After clean commit: `git rebase --onto origin/main 4f00a2ad… delivery/sfia-studio-nora-mw1-option-c-migration` only if origin/main still reviewed base
5. Post-rebase: app delta manifest == this REHEARSAL_DELTA_MANIFEST; 3 gov docs unchanged; tests PASS; diff --check PASS
6. Only then: explicit Delivery push/refspec under future GO → PR → CI → STOP BEFORE MERGE
THIS CYCLE DID NOT EXECUTE STEPS 2–6.

## 41. Alternatives rejected
A dirty rebase now — rejected
B merge main into dirty — rejected
C move Delivery ref to main while dirty — rejected
D new permanent parallel branch — rejected
E push from detached rehearsal — rejected (rehearsal = validation only)

## 42–43. Source final HEAD/branch/upstream/manifest
HEAD=4f00a2ad5e58310392e2efb562174d32ad8240e8
BRANCH=delivery/sfia-studio-nora-mw1-option-c-migration
UPSTREAM=NONE
AGG=beceeac79f07ee35e3f5ffea04fe742ba6eef7c70311e301ef4bd9e4e779dade

## 44. Rehearsal final HEAD/detached
HEAD=c42070034c4c36216b256f02662a92d711db2334 DETACHED
Dirty working delta = exact reviewed Option C candidate
No branch / no commit / no remote
KEPT IN PLACE as TEMPORARY GIT VALIDATION SURFACE WITH EXIT

## 45–48. Restrictions
NO PROJECT COMMIT / PUSH / PR / MERGE
NO REMOTE DELIVERY BRANCH
MW0 parity NOT RUN
NO REAL

## 49. Reservations
- PRE-INTEGRATION ANCESTRY GAP remains until future single-commit rebase
- RESERVE-OPT-C-02 / 03 remain OPEN non-blocking
- Rehearsal WT retained pending later cleanup gate

## 50. Morris blockers before push
Distinct PROJECT INTEGRATION GO required.
Confirm origin/main still c4207003… (or requalify if advanced).
Execute commit→rebase→parity→explicit push under that GO only.

## 51. Next gate
MW1 OPTION C — PROJECT GIT INTEGRATION (commit → rebase onto then-current main → parity → push → PR → CI → STOP BEFORE MERGE)

## 52. Verdict
**MW1 OPTION C GIT INTEGRATION READINESS — PASS — GIT-DEBT-MW1-01 RESOLVED — EXACT CANDIDATE CURRENT-MAIN COMPATIBILITY PROVEN — READY FOR CHATGPT CRITICAL REVIEW**

Mandatory:
NO PROJECT SOURCE CONTENT MODIFIED.
NO PROJECT COMMIT / NO PROJECT PUSH / NO PROJECT PR / NO PROJECT MERGE.
DELIVERY UPSTREAM REMOVED; REMOTE DELIVERY STILL ABSENT.
CURRENT-MAIN REHEARSAL IS DETACHED / LOCAL-ONLY.
EXACT REVIEWED OPTION C CONTENT PRESERVED.
MW0 OPTION C REGRESSION/PARITY NOT RUN.
NO REAL EXECUTION.
MW1 REMAINS NOT INTEGRATED / NOT COMPLETE.
