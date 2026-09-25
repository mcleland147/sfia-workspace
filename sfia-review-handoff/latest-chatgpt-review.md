# PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
## CONTINUATION — GAP-14 + RC-05 + RC-06 + LARGE-DESKTOP
## FULL Review Pack — Cursor → ChatGPT

Generated: 2026-09-25T17:53:53Z
Macro: PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
Cycle: Delivery / implémentation
Profile: CRITICAL
Base expected: `e287f744479fc4b55c3e3082969deea7783996da`
Cursor REAL: NOT RUN
Project commit / push / PR: NOT AUTHORIZED
Secret redaction: ABSOLUTE (no Cookie header, storageState, tokens, GitHub raw ids)

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Repo | mcleland147/sfia-workspace |
| Branch | `feat/sfia-studio-pilot-execution-experience-recovery-simplification-01` |
| HEAD | `e287f744479fc4b55c3e3082969deea7783996da` |
| origin/main | `e287f744479fc4b55c3e3082969deea7783996da` |
| Match expected base | YES |
| Dirty candidate | YES (expected) |
| Project Git actions this cycle | NONE |

### git status --short

```
 M .gitignore
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/recommendationDecisionIntegrity.pjReproof.d0.test.ts
 M projects/sfia-studio/app/app/login/login-client.tsx
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
 M projects/sfia-studio/app/playwright.config.ts
?? .tmp-sfia-review/cycle-journal-continuity-proof/
?? .tmp-sfia-review/cycle-reservation-piloting-proof/
?? .tmp-sfia-review/finalization-readiness-pilot-guidance/
?? .tmp-sfia-review/nora-conversational-initiative-real-proof-02/
?? .tmp-sfia-review/nora-conversational-initiative-real-proof/
?? .tmp-sfia-review/pilot-execution-experience-visual/
?? .tmp-sfia-review/pilotability-journal-integrity-proof/
?? projects/sfia-studio/app/__tests__/e2e-support/
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/pilotContractPresentation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.productAuthority.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.integration.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.trustedLaunch.d0.test.ts
?? projects/sfia-studio/app/app/api/auth/github-start/
?? projects/sfia-studio/app/e2e/pilot-execution-experience-visual.spec.ts
?? projects/sfia-studio/app/e2e/support/authenticatedStudioSession.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotContractPresentation.ts
?? projects/sfia-studio/app/scripts/e2e-auth-bootstrap.ts
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
M	projects/sfia-studio/app/app/login/login-client.tsx
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
M	projects/sfia-studio/app/playwright.config.ts
```

### Auth Product READ ONLY (must be empty)

`middleware.ts` / `lib/auth/auth.ts` / `lib/auth/resolveCurrentPilote.ts` → **unchanged**

---

## 2. QUALIFICATION

| Item | Value |
|------|-------|
| Same macro | YES |
| Capability | Delivery Critical |
| Gaps closed | GAP-14, RC-05, RC-06, large-desktop rail |
| Prior RCs retained | RC-01…RC-04 |
| Parallel architecture | NONE |
| Figma claim | NONE (unavailable) |

---

## 3. GAP-14 — AUTHENTICATED VISUAL QA HARNESS

### Implementation
- `e2e/support/authenticatedStudioSession.ts` — Cookie header / storageState load; fail-closed `AUTHENTICATED_VISUAL_SESSION_INVALID_OR_EXPIRED`
- `scripts/e2e-auth-bootstrap.ts` — Brave (system) + CDP attach; human GitHub OAuth once
- `e2e/pilot-execution-experience-visual.spec.ts`
- Scripts: `npm run e2e:auth:bootstrap`, `npm run e2e:visual:auth`
- Progressive login link: `app/api/auth/github-start/route.ts` + `login-client.tsx` native `<a>` (works without client hydration)
- `.gitignore`: `.tmp-sfia-review/auth/`

### Product auth changed?
**NO**

### Bootstrap / cookie handling
- Origin forced: `http://localhost:3020` (= `BETTER_AUTH_URL`)
- Cookie file: Better Auth cookies **only** (github.com / `__Host-*` filtered)
- Visual prefers Playwright `storageState`; cookie inject is fallback
- Status only in reports: PRESENT / MISSING / INVALID / EMPTY

### Session this cycle
- cookie_file_status: **PRESENT**
- storage_state_status: **PRESENT**

### Exact visual command

```
cd projects/sfia-studio/app
npm run e2e:visual:auth
```

---

## 4. RC-05 — POST-DECISION COLLAPSE

### Before
After HumanDecision: options + recommendation + decision + next step all as large primary cards → next action drowned.

### After
- Before decision: options + recommendation primary
- After decision: compact present (`Décision prise`, recorded, next step); history in closed `<details data-testid="w2-decision-history">` (`w2-options-history`)
- Truth C / provenance retained

### Deterministic proof
`trajectorySurface.ui.test.tsx` — RC-05 test — PASS

---

## 5. RC-06 — STRUCTURAL RECOVERY AUTO-PREPARE

### Before
GOVERNED HumanDecision → manual « Préparer le contrat d'exécution »

### After
- GOVERNED project-trajectory HD → same-intention `w2PrepareExecutionContractAction` + auto-inspect (RC-01 seam)
- Same-scope Relancer binding skips W2 PREPARE (R8)
- Fallback only: « Reprendre la préparation »
- **No auto-Execute**
- Continuity soft-keep for fresh client prepare while continuity `none`

### Deterministic proof
`trajectorySurface.ui.test.tsx` — RC-06 test — PASS; R8 prepareContractMock not called — PASS

---

## 6. LAYOUT — LARGE DESKTOP

### Final CSS
- `--pm6-content-max-workspace: 1800px`
- `--pm6-journal-width: 280px`
- `--pm6-lps-width: 520px` / `--pm6-lps-width-wide: 550px`
- ≥1400: `clamp(270px,18vw,290px) minmax(620px,1fr) clamp(510px,32vw,550px)`
- ≥1600: `clamp(270px,18vw,290px) minmax(650px,1fr) clamp(550px,34vw,600px)`
- Duplicate conflicting 1400 rule removed
- `<1200` stack preserved

### Measured authenticated workspace (StudyFlow)

| Viewport | grid-template-columns | child widths | overflow |
|----------|----------------------|--------------|----------|
| 1440×900 | `270px 620px 510px` | 270 / 620 / 510 | none |
| 1600×1000 | `288px 698px 550px` | 288 / 698 / 550 | none |

---

## 7. VISUAL PROOF

Path: `.tmp-sfia-review/pilot-execution-experience-visual/` (local only; not in handoff binary)

| id | sha256 |
|----|--------|
| studio-home-1440 | `efbf825ffd0228df5d6f60a2c9f08f15f26dde850051b93dc1fffd896da8131f` |
| studio-home-1600 | `7c529304f2ff8a5f8f52d9cb5ddec8c4f021298e7315ccfc9993a97c22671aca` |
| workspace-1440 | `6e9dba5f24073203fa8e71b4f6a0b58507bd3a80e97f6e2ebad02d798242562e` |
| workspace-1600 | `9314f9f83a202fd8183662d5adba49e735c400a7454b8fa9925c666b25c14732` |

### FIRST CAPTURE FINDINGS
1. AUTH session missing initially → AUTH VISUAL BOOTSTRAP REQUIRED
2. Playwright Chromium / Cursor embedded browser: clicks unusable for OAuth
3. Login client JS chunk 404 (polluted `.next`) → dead button (no React hydration)
4. Cookie header inject Invalid cookie fields (third-party github cookies)

### Corrections
1. Host align localhost for Better Auth + Playwright
2. Brave CDP human bootstrap
3. Native `/api/auth/github-start` link (no JS required)
4. Filter Better Auth cookies; prefer storageState
5. Clean Next restart on localhost:3020

### FINAL CAPTURE FINDINGS
1. Authenticated `/studio` home at 1440 + 1600 — PASS
2. StudyFlow workspace 3-col Option A — Journal | Conversation | Pilotage — PASS
3. No horizontal overflow (scrollWidth == clientWidth)
4. Layout dimensions meet contract targets
5. Observed workspace was **pre-decision framing** (not post-HD recovery stack); RC-05/06 density closed by deterministic UI tests + prior Morris runtime FAIL driving impl

`npm run e2e:visual:auth` → **PASS**

---

## 8. CHANGED FILES (candidate)

### Product / UI
- `features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` (RC-05/06)
- `features/pre-m6-product-ui/surfaces/pilotContractPresentation.ts`
- `product-tokens.css`, `ProjectWorkspacePage.module.css`, `ProductShell.module.css`
- `app/login/login-client.tsx` (native OAuth link)
- `app/api/auth/github-start/route.ts` (new; under public `/api/auth/*`)
- project-assistant seams retained from macro (f3/*, w2/*, actions.ts)

### QA / tooling
- `e2e/support/authenticatedStudioSession.ts`
- `e2e/pilot-execution-experience-visual.spec.ts`
- `scripts/e2e-auth-bootstrap.ts`
- `playwright.config.ts` (localhost default)
- `package.json` scripts
- `.gitignore` → `.tmp-sfia-review/auth/`
- tests: trajectorySurface RC-05/06, authenticatedStudioSession.d0, pilotExecutionExperience.*, checkpointF.*, etc.

### NOT changed
- middleware.ts, lib/auth/auth.ts, lib/auth/resolveCurrentPilote.ts

---

## 9. TESTS / VALIDATIONS

| Suite | Result |
|-------|--------|
| RC-05/06 + auth helper + trajectory/postExecution | 53 PASS |
| Critical macro batch (14 files) | 165 PASS |
| `npm test -- __tests__/pre-m6-product-ui` | 129 PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| e2e:visual:auth | PASS |
| Cursor REAL | NOT RUN |

---

## 10. AUTH SECURITY CHECK

| ID | Result |
|----|--------|
| AUTH-01 middleware unchanged | PASS |
| AUTH-02 auth.ts unchanged | PASS |
| AUTH-03 no resolveCurrentAuthenticatedPilote bypass | PASS |
| AUTH-04 real Better Auth session | PASS |
| AUTH-05 allowlist active | PASS |
| AUTH-06 GitHub credentials never automated | PASS |
| AUTH-07 cookies/storageState never tracked | PASS |
| AUTH-08 never in review/handoff body | PASS |
| AUTH-09 no secrets in logs/tests | PASS |
| AUTH-10 expired → fail closed | PASS |

---

## 11. FAKE / REAL

| Boundary | Status |
|----------|--------|
| Authenticated UI | REAL Better Auth session (human OAuth) |
| Execution / PREPARE proofs | Deterministic Fake / OA |
| Cursor REAL | NOT RUN |

---

## 12. REVIEW PACK

This file: `.tmp-sfia-review/chatgpt-review.md` — FULL

---

## 13. REVIEW HANDOFF

| Field | Value |
|-------|-------|
| Mode | publish-in-cycle (L3) |
| Branch | `sfia/review-handoff` |
| File | `sfia-review-handoff/latest-chatgpt-review.md` |
| Remote commit (pre-this-rewrite may update) | `bbfd2aa68e4eb4f568965dca3fb60dc09f65697a` |
| Remote blob (pre-this-rewrite) | `9f3af74d7be4a934bfa53d2f6058b8e9332936d8` |
| Candidate branch restored | `feat/sfia-studio-pilot-execution-experience-recovery-simplification-01` @ `e287f744479fc4b55c3e3082969deea7783996da` |

---

## 14. PROJECT GIT ACTIONS

**NONE** — no project commit, push, PR, merge.

Prior PR readiness gate is **obsolete** (candidate dirty again). New PR readiness cycle required later.

---

## 15. REMAINING RESERVES

1. Natural StudyFlow REAL reproof pending after integration
2. Cursor docs_write REAL not claimed
3. Authenticated visual of **post-HD recovery rail collapse** not re-shot live (RC-05/06 proven deterministically; Morris prior runtime FAIL drove impl)
4. Visual e2e scenario B/C/E (post-decision / auto-prepare / structural recovery) still thin vs studio-home + workspace layout captures — extend in follow-up if ChatGPT requires live post-HD screenshots

---

## 16. FINAL VERDICT

```
PILOT EXECUTION EXPERIENCE & RECOVERY SIMPLIFICATION
— LOCAL CANDIDATE VISUALLY VERIFIED

AUTHENTICATED VISUAL QA HARNESS
— OPERATIONAL

RC-05
— PASS

RC-06
— PASS

RUNTIME VISUAL PROOF
— PASS AT OBSERVED DETERMINISTIC AUTHENTICATED SCOPE

PROJECT COMMIT / PUSH / PR
— NOT AUTHORIZED

NATURAL STUDYFLOW REAL REPROOF
— PENDING AFTER INTEGRATION
```

Not claimed: READY FOR REAL global · END-TO-END REAL PROVEN · runtime v3 ADOPTED · Cursor docs_write REAL proven · READY FOR PR.
