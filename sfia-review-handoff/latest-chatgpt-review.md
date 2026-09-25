# PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
## CONTINUATION — GAP-14 + RC-05 + RC-06 + LARGE-DESKTOP
## FULL Review Pack — Delivery Critical

Generated: 2026-09-25T17:26:58Z
Macro: PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
Cycle: Delivery / implémentation
Profile: CRITICAL
Cursor REAL: NOT RUN
Project commit/push/PR: NOT AUTHORIZED

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Repo | mcleland147/sfia-workspace |
| Branch | `feat/sfia-studio-pilot-execution-experience-recovery-simplification-01` |
| HEAD | `e287f744479fc4b55c3e3082969deea7783996da` |
| origin/main | `e287f744479fc4b55c3e3082969deea7783996da` |
| Base expected | `e287f744479fc4b55c3e3082969deea7783996da` |
| Match | YES (HEAD == origin/main == expected base; dirty candidate on top) |
| Dirty candidate | YES (expected) |

### git status --short (candidate + review; unrelated .tmp proofs preserved)

```
 M .gitignore
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
 M projects/sfia-studio/app/package.json
?? .tmp-sfia-review/cycle-journal-continuity-proof/
?? .tmp-sfia-review/cycle-reservation-piloting-proof/
?? .tmp-sfia-review/finalization-readiness-pilot-guidance/
?? .tmp-sfia-review/nora-conversational-initiative-real-proof-02/
?? .tmp-sfia-review/nora-conversational-initiative-real-proof/
?? .tmp-sfia-review/pilotability-journal-integrity-proof/
?? projects/sfia-studio/app/__tests__/e2e-support/
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/pilotContractPresentation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.productAuthority.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.integration.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.trustedLaunch.d0.test.ts
?? projects/sfia-studio/app/e2e/pilot-execution-experience-visual.spec.ts
?? projects/sfia-studio/app/e2e/support/authenticatedStudioSession.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotContractPresentation.ts
?? projects/sfia-studio/app/scripts/e2e-auth-bootstrap.ts

```

### git diff --stat HEAD

```
 .gitignore                                         |   3 +
 .tmp-sfia-review/chatgpt-review.md                 | 277 ++++---
 .../trajectorySurface.ui.test.tsx                  | 366 +++++++--
 ...kpointF.recoveryCtaRestartPrecedence.d0.test.ts |   1 +
 ...eckpointF.recoveryDocsWriteSuccessor.d0.test.ts |   1 +
 .../checkpointF.recoveryOptionsContext.d0.test.ts  |   1 +
 .../postExecutionProductContinuity.d0.test.ts      |   1 +
 ...mendationDecisionIntegrity.pjReproof.d0.test.ts |   4 +
 .../pre-m6-product-ui/ProductShell.module.css      |   3 +-
 .../ProjectWorkspacePage.module.css                |  29 +-
 .../features/pre-m6-product-ui/product-tokens.css  |   6 +-
 .../surfaces/TrajectorySurface.tsx                 | 870 +++++++++++++++++----
 .../app/features/project-assistant/actions.ts      |   3 +
 .../f3/prepareAndResolveM3ProductPath.ts           |  84 +-
 .../project-assistant/f3/prepareM3FromDecision.ts  |  38 +-
 .../f3/resolveM3ExecutionContract.ts               |  90 ++-
 .../w2/prepareDocsWriteRecoverySuccessor.ts        |  52 +-
 .../project-assistant/w2/proposalSubjectOptions.ts |  29 +-
 .../w2/proposeTrajectoryOptions.ts                 |  74 +-
 .../w2/resolvePostEvidenceRecoveryContext.ts       |   4 +
 projects/sfia-studio/app/package.json              |   2 +
 21 files changed, 1532 insertions(+), 406 deletions(-)

```

### git diff --name-status HEAD

```
M	.gitignore
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
M	projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
M	projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
M	projects/sfia-studio/app/package.json

```

### Auth Product files (READ ONLY — must be empty)

```
(no diff — middleware.ts / auth.ts / resolveCurrentPilote.ts unchanged)
```

---

## 2. QUALIFICATION

| Item | Value |
|------|-------|
| Same macro | YES — PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01 |
| Capability | Delivery Critical |
| Gaps closed this cycle | GAP-14, RC-05, RC-06, large-desktop rail |
| Prior RCs retained | RC-01…RC-04 (unchanged seams reused) |
| Architecture parallèle | NONE |

---

## 3. GAP-14 — AUTHENTICATED VISUAL QA HARNESS

### Implementation
- Helper: `projects/sfia-studio/app/e2e/support/authenticatedStudioSession.ts`
  - Reads `SFIA_AUTH_REAL_COOKIE_FILE` or local `.tmp-sfia-review/auth/studio-cookie.txt`
  - Optional storageState: `.tmp-sfia-review/auth/studio-storage-state.json`
  - Validates Better Auth session cookie markers; never logs values
  - Injects Playwright cookies; `gotoAuthenticatedStudio` fail-closed → `AUTHENTICATED_VISUAL_SESSION_INVALID_OR_EXPIRED`
- Bootstrap: `projects/sfia-studio/app/scripts/e2e-auth-bootstrap.ts`
  - `npm run e2e:auth:bootstrap` — headed Chromium `/login` → Morris GitHub OAuth once → saves cookie + storageState locally
  - Prints only `AUTH SESSION SAVED` (no secrets)
- Visual spec: `e2e/pilot-execution-experience-visual.spec.ts`
- Scripts: `e2e:auth:bootstrap`, `e2e:visual:auth` in `package.json`
- `.gitignore`: `.tmp-sfia-review/auth/` (never versioned)

### Product auth changed?
**NO** — `middleware.ts`, `lib/auth/auth.ts`, `lib/auth/resolveCurrentPilote.ts` unchanged.

### Session status (this cycle)
- cookie_file_status: **MISSING** (no `.tmp-sfia-review/auth/` at start)
- Bootstrap headed browser: **LAUNCHED** awaiting Morris OAuth on `http://127.0.0.1:3020/login`
- Exact command after session:

```
cd projects/sfia-studio/app
npm run e2e:visual:auth
```

Or with explicit path:

```
SFIA_AUTH_REAL_COOKIE_FILE="$PWD/../../../.tmp-sfia-review/auth/studio-cookie.txt" \
  npm run e2e:visual:auth
```

### Secret redaction
- Cookie/storage contents never printed in logs, tests, review pack, or handoff
- Status only: MISSING / EMPTY / INVALID / PRESENT

---

## 4. RC-05 — POST-DECISION COLLAPSE

### Before
After HumanDecision, rail still showed primary cards for options + recommendation + decision + next step → dense vertical scroll; next action drowned.

### After
- **Before decision**: options + recommendation remain primary (`w2-options`, `w2-recommendation`)
- **After decision**: compact present block (`Décision prise`, recorded mark, next-step line); OptionSet + recommendation moved into closed `<details data-testid="w2-decision-history">` (`w2-options-history`)
- Truth C / provenance retained inside history disclosure
- Reload: collapse driven by durable decision presence (same render path)

### Implementation
`TrajectorySurface.tsx` — conditional primary vs history; distinct testids to avoid hidden-DOM false positives.

### Deterministic proof
`trajectorySurface.ui.test.tsx` — `RC-05 — before decision options+recommendation primary; after decision history collapsed` — PASS

---

## 5. RC-06 — STRUCTURAL RECOVERY AUTO-PREPARE

### Before
Structural GOVERNED HumanDecision → Pilote still clicked « Préparer le contrat d'exécution » (technical transition, not new arbitration).

### After
- GOVERNED project-trajectory HumanDecision → same-intention chain: `w2PrepareExecutionContractAction` + auto-inspect (RC-01 seam pattern)
- Same-scope Relancer (`post_evidence_recovery_execution` binding) skips W2 PREPARE (R8 ownership preserved)
- Fallback CTA only: « Reprendre la préparation » when auto-PREPARE soft-fails / EC absent
- **No auto-Execute**
- Continuity soft-keep: fresh client prepare not wiped while continuity still `none` (pursue + project HD)

### Orchestration seam reused
`decide()` → `shouldAutoPrepareGoverned` → existing `w2PrepareExecutionContractAction` + `inspectPreparedContractId` (no second PREPARE engine).

### Deterministic proof
`trajectorySurface.ui.test.tsx` — `RC-06 — structural GOVERNED auto-PREPARE + inspect; no auto-Execute; no nominal PREPARE` — PASS
R8 still asserts prepareContractMock not called when recovery binding owns — PASS

---

## 6. LAYOUT — LARGE DESKTOP

### Previous issues
- Duplicate `@media (min-width: 1400px)` (later rule used `minmax(0,1fr)` + 580px rail)
- Unused side margins at ~1536; rail density not fixed by width alone

### Final CSS
- `--pm6-content-max-workspace: 1800px`
- `--pm6-lps-width: 520px` (≥1200)
- `--pm6-lps-width-wide: 550px` (token; clamps preferred at 1400+)
- `--pm6-journal-width: 280px`
- ProductShell `.mainWide` padding-inline: `var(--pm6-space-4)`

**≥1400px**
```
clamp(270px, 18vw, 290px)  /* journal */
minmax(620px, 1fr)         /* conversation */
clamp(510px, 32vw, 550px)  /* rail */
```

**≥1600px**
```
clamp(270px, 18vw, 290px)
minmax(650px, 1fr)
clamp(550px, 34vw, 600px)
```

**<1200**: existing stack preserved (CR-CJ-05).

---

## 7. VISUAL PROOF

### Status
**AUTH VISUAL BOOTSTRAP REQUIRED**

Headed bootstrap launched (`npm run e2e:auth:bootstrap`) against live `http://127.0.0.1:3020/login`.
Awaiting Morris GitHub OAuth → `AUTH SESSION SAVED`.

No authenticated PNG captures in this cycle yet (secrets absent by design).

| Item | Value |
|------|-------|
| FIRST CAPTURE FINDINGS | N/A — session MISSING |
| Corrections from visual | N/A this cycle (deterministic RC-05/06 applied from Morris runtime FAIL proof) |
| FINAL CAPTURE FINDINGS | PENDING session |
| Overflow metrics | PENDING session |
| Captures / SHA256 | NONE yet |

Prior Morris runtime visual FAIL (recovery density + manual PREPARE) drove RC-05/06 implementation.

---

## 8. CHANGED FILES (this continuation — product + QA)

### Product / UI
- `features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` — RC-05 collapse, RC-06 auto-PREPARE, continuity soft-keep, Relancer guard
- `features/pre-m6-product-ui/surfaces/pilotContractPresentation.ts` (prior RC-02)
- `features/pre-m6-product-ui/product-tokens.css`
- `features/pre-m6-product-ui/ProjectWorkspacePage.module.css`
- `features/pre-m6-product-ui/ProductShell.module.css`
- project-assistant seams (prior macro candidate retained): f3/*, w2/*, actions.ts

### QA / tooling
- `e2e/support/authenticatedStudioSession.ts` (new)
- `e2e/pilot-execution-experience-visual.spec.ts` (new)
- `scripts/e2e-auth-bootstrap.ts` (new)
- `package.json` scripts
- `.gitignore` → `.tmp-sfia-review/auth/`
- tests: trajectorySurface RC-05/06, authenticatedStudioSession.d0, pilotExecutionExperience.*, checkpointF.*, etc.

### Explicitly NOT changed
- middleware.ts, auth.ts, resolveCurrentPilote.ts

---

## 9. TESTS / VALIDATIONS

| Suite | Result |
|-------|--------|
| Targeted RC-05/06 + auth helper + trajectory/postExecution | 53 PASS |
| Critical macro batch (14 files) | 165 PASS |
| `npm test -- __tests__/pre-m6-product-ui` | 129 PASS / 15 files |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS (earlier) |
| Cursor REAL | NOT RUN |
| Authenticated visual E2E | BLOCKED — session MISSING |

---

## 10. AUTH SECURITY CHECK

| ID | Result |
|----|--------|
| AUTH-01 middleware unchanged | PASS |
| AUTH-02 auth.ts unchanged | PASS |
| AUTH-03 no resolveCurrentAuthenticatedPilote bypass | PASS |
| AUTH-04 real Better Auth session path | PASS (harness; session pending human bootstrap) |
| AUTH-05 allowlist still active | PASS |
| AUTH-06 GitHub credentials never automated | PASS |
| AUTH-07 cookies/storageState never tracked | PASS (gitignore) |
| AUTH-08 never in review/handoff | PASS (status only) |
| AUTH-09 no secrets in logs/tests | PASS |
| AUTH-10 expired → fail closed | PASS (helper message + tests) |

---

## 11. FAKE / REAL

| Boundary | Status |
|----------|--------|
| Authenticated UI harness | REAL auth boundary (Better Auth cookie) — session bootstrap human |
| Execution / PREPARE / inspect proofs | Deterministic Fake / OA harness |
| Cursor REAL | NOT RUN |

---

## 12. REVIEW PACK

This file: `.tmp-sfia-review/chatgpt-review.md` — FULL.

---

## 13. REVIEW HANDOFF

Mode: publish-in-cycle (L3) — to be published after this write.

---

## 14. PROJECT GIT ACTIONS

**NONE** — no project commit, push, PR, merge.

---

## 15. REMAINING RESERVES

1. **AUTH VISUAL BOOTSTRAP REQUIRED** — complete headed OAuth once; then `npm run e2e:visual:auth`
2. Authenticated captures 1440/1600 + recovery rail visual closure still pending session
3. Natural StudyFlow REAL reproof pending after integration
4. Cursor docs_write REAL not claimed
5. Prior PR readiness gate obsolete (candidate dirty again) — new PR readiness cycle required later

---

## 16. FINAL VERDICT

```
PILOT EXECUTION EXPERIENCE & RECOVERY SIMPLIFICATION
— LOCAL CANDIDATE DELIVERED (RC-05 / RC-06 / GAP-14 harness / layout)

AUTHENTICATED VISUAL QA HARNESS
— OPERATIONAL (awaiting human OAuth bootstrap)

RC-05
— PASS (deterministic)

RC-06
— PASS (deterministic)

RUNTIME VISUAL PROOF
— AUTH VISUAL BOOTSTRAP REQUIRED

PROJECT COMMIT / PUSH / PR
— NOT AUTHORIZED

NATURAL STUDYFLOW REAL REPROOF
— PENDING AFTER INTEGRATION
```

Not claimed: READY FOR REAL global · END-TO-END REAL PROVEN · runtime v3 ADOPTED · Cursor docs_write REAL proven · READY FOR PR.
