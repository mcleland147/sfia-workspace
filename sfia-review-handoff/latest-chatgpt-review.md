# ChatGPT Review Pack — P6 CONSOLIDATED GIT INTEGRATION

**Level:** FULL
**Cycle type:** 13 — PR readiness
**Profile:** CRITICAL
**Timestamp (UTC):** 2026-10-09T11:46:17Z
**Status:** CANDIDATE INTEGRATION — DRAFT PR OPEN / CI PASS OBSERVED

---

## 0. Identity

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Campaign branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `aac6a00e3686d5705d6af127d786a1f0c14520a3` |
| origin/main | `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` |
| merge-base | `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` |
| Draft PR | https://github.com/mcleland147/sfia-workspace/pull/572 |
| PR number | 572 |
| Morris decision | GO — CONSOLIDATED P6 GIT INTEGRATION (merge NOT authorized this cycle) |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Milestone | P6 Global Integrated Product QA |

---

## 1. Sources consulted

Governance / Product Simplification P1–P6 / Doctrine framing pointers / CKC13 (CONTENT VALIDATED BY MORRIS; guidance only; Runtime v3 NON ADOPTED) / handoffs `57e3b869`, `5bba7449`, `e2a4b1f2`, `52bceed2` / Git truth / worktree inventory / CI logs for PR #572.

---

## 2. Convergence Pre-check

- Capacities: chat-first, Nora cognition, Project/LPS, START, continuity, HumanDecision frontiers, UX/UI, Evidence maturity.
- State: deterministic local candidates; Human QA incomplete; **P6 NOT PASS**; Runtime v3 **NON ADOPTED**.
- Exit proof this cycle: Git-verifiable integration + CI green — **not** Product PASS.
- Next capacity after Morris merge gate: Human QA end-to-end on integrated tip.

---

## 3. CKC13

Guidance cognitive only. No execution authority.

---

## 4. Exhaustive inventory + A–F classification

### Included in PR (`origin/main`..HEAD)

| `.tmp-sfia-review/chatgpt-review.md` | M | C* | Phase1 docs (pre-existing) | doc | intentional | prior docs commit |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx` | M | B | regression | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx` | M | B | regression | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.closure.d0.test.ts` | A | B | New Project | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.onboarding.d0.test.ts` | A | B | New Project | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx` | A | B | UI03-UI05 | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx` | A | B | UI03-UI05 | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui05.compactObjectCards.ui.test.tsx` | A | B | UI03-UI05 | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts` | M | B | F01/COG01 | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts` | M | B | F01/COG01 | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts` | A | B | COG01 | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts` | A | B | F01/COG01 | test | intentional | INCLUDED |
| `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts` | M | B | regression | test | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx` | M | A | New Project | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css` | M | A | UI03-UI05 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts` | M | A | New Project | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingAction.ts` | A | A | New Project | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts` | A | A | New Project | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css` | M | A | UI03-UI05 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts` | A | A | New Project | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css` | M | A | UI03-UI05 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` | M | A | UI03-UI05 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts` | M | A | UI03-UI05 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts` | A | A | COG01 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` | M | A | COG01+F01 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts` | A | A | F01 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts` | M | A | COG01 | code | intentional | INCLUDED |
| `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts` | M | A | New Project | code | intentional | INCLUDED |
| `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | M | C | Phase1 campaign docs | doc | intentional | prior docs commits |
| `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` | M | C | Phase1 campaign docs | doc | intentional | prior docs commits |
| `projects/sfia-studio/product-simplification/06-chat-first-product-simplification-integrated-exit-readiness-pack.md` | M | C | Phase1 campaign docs | doc | intentional | prior docs commits |
| `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` | M | C | Phase1 campaign docs | doc | intentional | prior docs commits |
| `projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md` | A | C | P6 integration trace | doc | intentional | INCLUDED |
| `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` | M | B | runtime reference digests | config | intentional | INCLUDED |

### Excluded from staging this cycle (remain local)

| Path | Class | Reason |
|------|-------|--------|
| `.tmp-sfia-review/chatgpt-review.md` (local pack) | D | Published via `sfia/review-handoff` only |
| `projects/.tmp-sfia-review/**` | D | Local visual/SQLite artefacts |
| `__tests__/p6-campaign/*.real.test.ts` | F→D | Opt-in REAL harness; tsc friction; deferred |

### Bundle coherence

Single P6 Studio PR. No other-project files. Consolidation + CI adaptation commits; prior Phase 1 docs commits also in range.

---

## 5. P6 integration state document (COMPLETE)

Path: `projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md`

```markdown
# P6 QA — Integration State and Open Reserves

**Document type:** campaign integration trace (not Build Doctrine, not Roadmap, not baseline)
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — Global Integrated Product QA
**Campaign:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Status:** CANDIDATE INTEGRATION — DETERMINISTIC LOCAL BUNDLE
**Runtime v3:** NON ADOPTED
**P6 PASS:** NO

---

## 1. Campaign identity

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Integration branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| Base | `origin/main` |
| Nature | Consolidated P6 corrections + tests + this trace |

## 2. Classification legend (this document)

| Tag | Meaning |
|-----|---------|
| FACT | Observable Git / code / CI fact |
| OBSERVATION | Interpreted from evidence |
| DETERMINISTIC PROVEN | Covered by isolated Fake/unit/jsdom tests |
| REAL NOT PROVEN | Requires authenticated Human QA / live provider |
| RECOMMENDATION | Non-binding next step |
| MORRIS DECISION | Requires Morris gate |
| OPEN RESERVE | Known limitation |

## 3. Integrated candidate scope (FACT)

### COG01 — pilot-facing narrative
- `composeF2PilotFacingNarrative.ts` (new)
- `orchestrateF2.ts` (wiring)
- `presentationLabels.ts` (labels)
- Tests: `p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts`, corrProof01 touch

**Status:** CANDIDATE — DETERMINISTIC PROVEN at composer/F2 seam.
**REAL NOT PROVEN:** naturalness of live Nora dialogue.

### F01 — chat-first START gate / anti-duplication
- `resolveChatFirstCycleStartGate.ts` (new)
- `orchestrateF2.ts` (START routing)
- Tests: `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`

**Status:** CANDIDATE — DETERMINISTIC PROVEN for prepared START / suppress mint / late negation.
**REAL NOT PROVEN:** Human QA START on a fresh project under Pilot authority.

### UI-01…UI-05 — conversation surfaces
- `ConversationSurface.tsx` (+ CSS)
- `noraActivityProjection.ts`
- `product-tokens.css`, `ProjectWorkspacePage.module.css`
- Tests: `p6.hqa.ui03`, `ui04`, `ui05`

**Status:** CANDIDATE — SEMANTIC/DOM DETERMINISTIC PROVEN.
**REAL NOT PROVEN / OPEN RESERVE:** Figma runtime visual parity.

### New Project — cognitive onboarding + closure
- `newProjectOnboardingContract.ts`, `runNewProjectOnboardingTurn.ts`, `newProjectOnboardingAction.ts`
- `NewProjectIntentionPage.tsx`, `newProjectConversation.ts`
- `fakeProvider.ts` (onboarding schema branch — Fake only)
- Tests: `p6.hqa.newproject01.onboarding`, `closure`, P5-S06 adaptations

**Status:** CANDIDATE — DETERMINISTIC PROVEN for refuse reversal, intentionKind gate, LPS handoff continuity, usageObservation.
**REAL NOT PROVEN:** natural conversation; live provider; authenticated create path.

## 4. Explicitly excluded from this integration (FACT)

| Path / class | Class | Reason |
|--------------|-------|--------|
| `.tmp-sfia-review/**` | D | Ephemeral review packs / assets |
| `projects/.tmp-sfia-review/**` including SQLite | D | Local visual/fixture DB — not Product source |
| `__tests__/p6-campaign/*.real.test.ts` | F→D exclude | Opt-in REAL harness; known typecheck friction; not required for deterministic candidate merge; OPEN RESERVE for later campaign tooling |

## 5. Corrections summary (OBSERVATION)

1. Nora pilot-facing narrative composition (COG01).
2. Chat-first START gate with anti-duplication and structured late-negation (F01).
3. Compact conversational Product cards + synthesis ≠ ExecutionContract (UI05) and related UI03/UI04.
4. New Project: provider-backed onboarding; Studio Create authority; reversible refuse; non-syntactic `intentionKind` gate; prioritized Product context handoff; usage observation without hard EUR cap.

## 6. Proof posture (FACT)

| Proof class | State |
|-------------|--------|
| Deterministic Vitest (Fake / jsdom / isolated Product DB) | **131 passed / 11 files** in consolidation cycle (COG01, F01, UI03–05, New Project onboarding+closure, P5-S06, corrProof01, candidateTrajectoryCycleStart). REAL provider unset. |
| Allowlist TypeScript | Clean for staged paths. Known residual `tsc` errors only in excluded `__tests__/p6-campaign/*.real.test.ts` (not in this PR). |
| Targeted ESLint (allowlist sources) | Clean after prefer-const fixes; one non-blocking hooks warning on NewProject abort cleanup. |
| `git diff --check` (allowlist) | Clean |
| CI on Draft PR | Observed after push (see PR / §11) |
| Human QA REAL (Nora live, browser auth, new QA project) | NOT EXECUTED in this Git cycle |
| Natural conversation PASS | NOT CLAIMED |
| Hard cap €10 onboarding | NOT TECHNICALLY ENFORCED (`hardCapEnforced=false`) |
| FULL transcript Agents replay post-Create | NOT CLAIMED (LPS context handoff only) |
| HQ-01 disposition | OPEN / BLOCKED for separate work — READ-ONLY preserved |
| P6 PASS | NO |
| Runtime v3 ADOPTED | NO |

## 7. Open reserves (OPEN RESERVE)

1. Human QA integrated (COG01 + F01 + UI05 + New Project) on authenticated Studio.
2. Nora naturalness under REAL provider.
3. UI05 Figma/runtime visual parity captures.
4. New Project continuity is Product LPS context — not durable Agents session replay.
5. Declared €10 Human QA envelope is documentary; no onboarding hard cap infrastructure.
6. Cursor REAL safety (`SFIA_STUDIO_CURSOR_REAL`) remains an environment concern for Human QA operators.
7. Canonical Pilot authority env vs legacy M3 alias — operational reserve from activation readiness.
8. p6-campaign REAL opt-in harness left out of this PR pending type/CI hardening.

## 8. Findings not closed

| Finding | Status |
|---------|--------|
| P6-HQA-COG01 | CANDIDATE — not CLOSED |
| P6-HQA-F01 | CANDIDATE — not CLOSED |
| P6-HQA-UI0x | CANDIDATES — not CLOSED |
| P6-HQA-NEWPROJECT-01 | CANDIDATE — not CLOSED |
| HQ-01 five Delivery legacy | OPEN / separate disposition |

## 9. Dependencies for next capacity

**RECOMMENDATION / MORRIS DECISION:** After merge gate (separate cycle), resume Human QA on integrated tip with:
1. Authenticated Pilot session.
2. Cursor REAL disabled unless under explicit REAL GO.
3. Distinct GO P6 REAL — BOUNDED for Nora spend (≤ €10 envelope).
4. Manual new QA project (not HQ-01).

## 10. Path critical

Inventory → deterministic validation → commit/push → Draft PR → CI → ChatGPT Critical PR review → **Morris merge gate** → post-merge → Human QA REAL → P6 evidence consolidation.

Merge ≠ Product PASS. CI PASS ≠ Human QA PASS.

## 11. References

- Product Simplification P6 contract: `07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
- Handoffs (historical): activation readiness `5bba7449…`; New Project `e2a4b1f2…` / `52bceed2…`; functional closure `57e3b869…`
- CKC 13 PR readiness: guidance only; CONTENT VALIDATED BY MORRIS; ≠ execution authority

```

---

## 6. Validation results (THIS CYCLE)

### Local Vitest (targeted, Fake; REAL unset)

- **11 files / 131 tests PASS** (COG01, F01, UI03–05, New Project onboarding+closure, P5-S06, corrProof01, candidateTrajectoryCycleStart)
- Plus CI-fix suites: importBoundaries, f2.orchestrate, p5.s04.synthesesSurface, productionRuntimeReference — PASS locally before push

### TypeScript / ESLint / whitespace

- Allowlist tsc clean; residual errors only in excluded p6-campaign REAL tests
- ESLint allowlist: 0 errors (1 hooks warning)
- `git diff --check origin/main...HEAD` clean after whitespace fix

### CI (FACT — observed)


| Field | Value |
|-------|--------|
| Run | https://github.com/mcleland147/sfia-workspace/actions/runs/37924746140 |
| Detect SFIA Studio changes | **PASS** |
| Build and validate SFIA Studio | **PASS** (6m9s) |
| SFIA Studio Required Gate | **PASS** |
| Observed at (UTC) | 2026-10-09T11:46:17Z |
| HEAD checked | `aac6a00e3686d5705d6af127d786a1f0c14520a3` |

Prior failed runs (superseded by fixes on same Draft PR):
- 37921321154 — importBoundaries + f2.orchestrate wording
- 37922512232 — p5.s04 synthesis teaser + runtime digests
- 37923503910 — trailing whitespace in P6 state doc


---

## 7. Commits (`origin/main`..HEAD)

```
aac6a00e docs(studio): strip trailing whitespace from P6 integration state
f95ff23e fix(studio): align P5-S04 synthesis card and runtime digests for P6 UI
ee20d2ad fix(studio): adapt CI allowlists for P6 F01 gate and COG01 wording
85680e05 docs(studio): record P6 integration state and open reserves
13056195 fix(studio): integrate P6 New Project onboarding and UI surfaces
a825c4ce fix(studio): consolidate P6 cognitive and governed START flows
8a196be1 docs(sfia-studio): requalify P6 Phase 1 and continue campaign truth
38fb5eb9 docs(sfia-studio): align DOC07 Phase 1 PASS current-state wording
bc0eae04 docs(sfia-studio): record P6 campaign Phase 1 PASS and execution truth
```

Consolidation + CI adaptation commits this cycle:
| SHA | Message |
|-----|---------|
| `a825c4ce` | fix(studio): consolidate P6 cognitive and governed START flows |
| `13056195` | fix(studio): integrate P6 New Project onboarding and UI surfaces |
| `85680e05` | docs(studio): record P6 integration state and open reserves |
| `ee20d2ad` | fix(studio): adapt CI allowlists for P6 F01 gate and COG01 wording |
| `f95ff23e` | fix(studio): align P5-S04 synthesis card and runtime digests for P6 UI |
| `aac6a00e` | docs(studio): strip trailing whitespace from P6 integration state |

---

## 8. Push / PR

| Field | Value |
|-------|--------|
| Push | SUCCESS — `origin/qa/sfia-studio-p6-global-integrated-product-qa` @ `aac6a00e3686d5705d6af127d786a1f0c14520a3` |
| Force push | NOT USED |
| Draft PR | #572 — https://github.com/mcleland147/sfia-workspace/pull/572 |
| Base | main (`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`) |
| Merge | **NOT EXECUTED** |

### Diffstat

```
 .tmp-sfia-review/chatgpt-review.md                 | 1564 ++++++++++++++++++--
 .../p5.s04.synthesesSurface.ui.test.tsx            |    8 +-
 .../p5.s06.pilotExperience.d0.test.tsx             |  196 ++-
 .../p6.hqa.newproject01.closure.d0.test.ts         |  492 ++++++
 .../p6.hqa.newproject01.onboarding.d0.test.ts      |  352 +++++
 .../p6.hqa.ui03.noraActivityThread.ui.test.tsx     |  250 ++++
 ....hqa.ui04.pilotFacingSimplification.ui.test.tsx |  360 +++++
 .../p6.hqa.ui05.compactObjectCards.ui.test.tsx     |  352 +++++
 .../corrProof01.d1.conversation.d0.test.ts         |    8 +-
 .../project-assistant/f2.orchestrate.test.ts       |    5 +-
 .../p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts |  409 +++++
 .../p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts  |  832 +++++++++++
 .../importBoundaries.test.ts                       |    1 +
 .../pre-m6-product-ui/NewProjectIntentionPage.tsx  |  214 ++-
 .../ProjectWorkspacePage.module.css                |   11 +
 .../pre-m6-product-ui/newProjectConversation.ts    |  309 +---
 .../newProjectOnboardingAction.ts                  |   36 +
 .../newProjectOnboardingContract.ts                |  520 +++++++
 .../features/pre-m6-product-ui/product-tokens.css  |    4 +
 .../runNewProjectOnboardingTurn.ts                 |  294 ++++
 .../surfaces/ConversationSurface.module.css        |   92 +-
 .../surfaces/ConversationSurface.tsx               |  916 +++++++++---
 .../surfaces/noraActivityProjection.ts             |   10 +-
 .../f2/composeF2PilotFacingNarrative.ts            |  879 +++++++++++
 .../features/project-assistant/f2/orchestrateF2.ts |  216 ++-
 .../f2/resolveChatFirstCycleStartGate.ts           |  377 +++++
 .../project-assistant/presentationLabels.ts        |  281 ++++
 .../app/lib/platform/ai/fakeProvider.ts            |  174 ++-
 .../convergence/sfia-studio-convergence-roadmap.md |    4 +-
 ...t-product-simplification-integrated-delivery.md |   30 +-
 ...implification-integrated-exit-readiness-pack.md |   39 +-
 ...mplification-p6-global-integrated-product-qa.md |   88 +-
 .../p6-qa-integration-state-and-reserves.md        |  142 ++
 .../production-runtime-reference.manifest.json     |    4 +-
 34 files changed, 8576 insertions(+), 893 deletions(-)

```

### Name-status

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.closure.d0.test.ts
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.onboarding.d0.test.ts
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui05.compactObjectCards.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts
A	projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingAction.ts
A	projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
A	projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts
A	projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
A	projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts
M	projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
M	projects/sfia-studio/product-simplification/06-chat-first-product-simplification-integrated-exit-readiness-pack.md
M	projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md
A	projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

---

## 9. Fake / Real Qualification

| Boundary | Posture |
|----------|---------|
| Deterministic / CI | PROVEN (local + CI PASS) |
| Nora naturalness / live provider | REAL NOT PROVEN |
| Human QA | NOT EXECUTED |
| Hard cap €10 | Documentary only |
| FULL Agents transcript replay | NOT CLAIMED |
| HQ-01 | OPEN / BLOCKED — not mutated |
| P6 PASS | NO |
| Runtime v3 ADOPTED | NO |

---

## 10. Open reserves / findings

See state document. HQ-01 OPEN/BLOCKED. P6 NOT PASS. UI Figma parity REAL NOT PROVEN. p6-campaign REAL harness excluded.

---

## 11. Gates

| Gate | Result |
|------|--------|
| 1 Inventory / scope | PASS |
| 2 Technical validation | PASS |
| 3 Staging controlled | PASS |
| 4 Commit/push/Draft PR | PASS — #572 |
| 5 CI + Critical before merge | **CI PASS OBSERVED** — Critical review next; merge Morris gate remaining |

---

## 12. Verdict (Cursor)

**READY FOR CHATGPT CRITICAL PR REVIEW** — with reserves; CI PASS observed on run 37924746140.
Not READY FOR MERGE. Not P6 PASS. Merge ≠ Product PASS.

---

## 13. Modified content — consolidation+CI commits full diff (`8a196be1..HEAD`)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
index 2cdbf64e..6fe8d0ad 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx
@@ -316,7 +316,7 @@ describe("P5-S04 Synthèses UI", () => {
     expect(screen.queryByTestId("project-overview-synthesis-preview")).toBeNull();
   });

-  it("T15 — Conversation shows synthesis teaser and opens Synthèses view", async () => {
+  it("T15 — Conversation shows UI05 synthesis card and opens Synthèses view", async () => {
     latestSynthesisMock.mockResolvedValue({
       ok: true,
       synthesis: mockSynthesis,
@@ -340,7 +340,11 @@ describe("P5-S04 Synthèses UI", () => {
     render(<ProjectWorkspacePage projectId="prj:p5-s04" />);

     await waitFor(() => {
-      expect(screen.getByTestId("conversation-synthesis-teaser")).toBeTruthy();
+      expect(screen.getByTestId("conversation-synthesis-card")).toBeTruthy();
+      expect(screen.getByTestId("conversation-synthesis-card")).toHaveAttribute(
+        "data-ui05-object",
+        "synthesis",
+      );
     });
     fireEvent.click(screen.getByTestId("conversation-open-synthesis"));

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
index 3e1458ff..477aca89 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
@@ -21,18 +21,27 @@ import {
 } from "@/features/pre-m6-product-ui/newProjectConversation";
 import { projectNoraActivity } from "@/features/pre-m6-product-ui/surfaces/noraActivityProjection";

-const { listProjectsRuntimeActionMock, createProjectRuntimeActionMock, pushMock } =
-  vi.hoisted(() => ({
-    listProjectsRuntimeActionMock: vi.fn(),
-    createProjectRuntimeActionMock: vi.fn(),
-    pushMock: vi.fn(),
-  }));
+const {
+  listProjectsRuntimeActionMock,
+  createProjectRuntimeActionMock,
+  newProjectOnboardingTurnActionMock,
+  pushMock,
+} = vi.hoisted(() => ({
+  listProjectsRuntimeActionMock: vi.fn(),
+  createProjectRuntimeActionMock: vi.fn(),
+  newProjectOnboardingTurnActionMock: vi.fn(),
+  pushMock: vi.fn(),
+}));

 vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
   listProjectsRuntimeAction: listProjectsRuntimeActionMock,
   createProjectRuntimeAction: createProjectRuntimeActionMock,
 }));

+vi.mock("@/features/pre-m6-product-ui/newProjectOnboardingAction", () => ({
+  newProjectOnboardingTurnAction: newProjectOnboardingTurnActionMock,
+}));
+
 vi.mock("next/navigation", () => ({
   useRouter: () => ({ push: pushMock }),
 }));
@@ -56,51 +65,23 @@ afterEach(() => {
   cleanup();
   listProjectsRuntimeActionMock.mockReset();
   createProjectRuntimeActionMock.mockReset();
+  newProjectOnboardingTurnActionMock.mockReset();
   pushMock.mockReset();
 });

-describe("P5-S06 CP01 explicit-phase collection", () => {
-  it("records intention only while INTENTION_REQUIRED, never guesses name", () => {
+describe("P5-S06 CP01 / P6-HQA-NEWPROJECT-01 draft helpers", () => {
+  it("absorbUserTurn stamps provisional name without blocking create after a turn", () => {
     const d0 = emptyDraft();
     expect(collectPhaseOf(d0)).toBe("INTENTION_REQUIRED");
-    const extra = "Il faudrait aussi prendre en compte les avenants.";
-    const d1 = absorbUserTurn(d0, "Moderniser le reporting", "INTENTION_REQUIRED");
+    const d1 = absorbUserTurn(d0, "Moderniser le reporting");
     expect(d1.intention).toContain("Moderniser");
-    expect(d1.name).toBe("");
-    const stillIntention = absorbUserTurn(d1, extra, "INTENTION_REQUIRED");
-    expect(stillIntention.name).toBe("");
-    expect(stillIntention.intention).toContain("avenants");
-    expect(isMinimumSufficient(stillIntention)).toBe(false);
+    expect(d1.name.length).toBeGreaterThan(0);
+    expect(d1.nameProvisional).toBe(true);
+    expect(isMinimumSufficient(d1)).toBe(true);
   });

-  it("records name only after NAME_REQUIRED; later turns stay context", () => {
-    let d = absorbUserTurn(emptyDraft(), "Suivre les contrats", "INTENTION_REQUIRED");
-    expect(collectPhaseOf(d)).toBe("NAME_REQUIRED");
-    d = absorbUserTurn(d, "Contrats Q3", "NAME_REQUIRED");
-    expect(d.name).toBe("Contrats Q3");
-    expect(isMinimumSufficient(d)).toBe(true);
-    d = absorbUserTurn(d, "Inclure les avenants", "OPTIONAL_CONTEXT");
-    expect(d.name).toBe("Contrats Q3");
-    expect(d.context).toContain("avenants");
-  });
-
-  it("proposes a name when intention already names espace-projet redesign work", () => {
-    const d = absorbUserTurn(
-      emptyDraft(),
-      "Je veux créer une nouvelle version de notre espace projet pour simplifier le pilotage.",
-      "INTENTION_REQUIRED",
-    );
-    expect(d.name).toBe("Refonte de l’espace projet");
-    expect(collectPhaseOf(d)).toBe("OPTIONAL_CONTEXT");
-    expect(isMinimumSufficient(d)).toBe(true);
-  });
-
-  it("reopens a captured field explicitly without guessing", () => {
-    const d = absorbUserTurn(
-      absorbUserTurn(emptyDraft(), "Obj", "INTENTION_REQUIRED"),
-      "NomX",
-      "NAME_REQUIRED",
-    );
+  it("reopens name explicitly", () => {
+    const d = absorbUserTurn(emptyDraft(), "Suivre les contrats");
     const reopened = reopenField(d, "name");
     expect(reopened.name).toBe("");
     expect(collectPhaseOf(reopened)).toBe("NAME_REQUIRED");
@@ -185,19 +166,94 @@ describe("P5-S06 CP01 ProjectsPage", () => {
   });
 });

-describe("P5-S06 CP01 NewProjectIntentionPage", () => {
+describe("P5-S06 CP01 NewProjectIntentionPage (cognitive onboarding)", () => {
   beforeEach(() => {
     vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
       "00000000-0000-4000-8000-000000000099",
     );
+    newProjectOnboardingTurnActionMock.mockImplementation(
+      async (input: {
+        userText: string;
+        draft: {
+          intention: string;
+          name: string;
+          nameProvisional: boolean;
+          objective: string;
+          context: string;
+          firstOrientation: string;
+          unknowns: string[];
+          cognitiveCreateProposal: boolean;
+          explicitRefuseCreate: boolean;
+          intentionKind: string;
+          cognitiveTurns: number;
+        };
+      }) => {
+        const intention = input.userText;
+        const name =
+          intention.length > 48 ? `${intention.slice(0, 45)}…` : intention;
+        const draft = {
+          ...input.draft,
+          intention,
+          objective: intention,
+          name: name.charAt(0).toUpperCase() + name.slice(1),
+          nameProvisional: true,
+          cognitiveCreateProposal: true,
+          explicitRefuseCreate: false,
+          intentionKind: "project_direction" as const,
+          cognitiveTurns: input.draft.cognitiveTurns + 1,
+          firstOrientation:
+            "Qualifier la première intention de travail une fois le projet créé",
+          unknowns: [],
+        };
+        return {
+          ok: true as const,
+          draft,
+          replyText: `Si je comprends bien : ${intention}. Je propose « ${draft.name} » (provisoire).`,
+          clarification: {
+            title: "UNE PRÉCISION UTILE",
+            question: "Quel résultat concret te fera dire que c’est réussi ?",
+            suggestions: ["Plus simple à comprendre"],
+          },
+          payload: {
+            replyText: `ok`,
+            intentionKnown: intention,
+            objectiveProposal: intention,
+            contextKnown: null,
+            nameProposal: draft.name,
+            nameProvisional: true,
+            firstOrientationProposal: draft.firstOrientation,
+            unknowns: [],
+            sufficientForCreateProposal: true,
+            refuseCreateDetected: false,
+            acceptCreateDetected: false,
+            intentionKind: "project_direction" as const,
+            clarificationQuestion: "Quel résultat ?",
+            suggestions: [],
+          },
+          boundarySubstitution: true,
+          usageObservation: {
+            inputTokens: null,
+            outputTokens: null,
+            totalTokens: null,
+            model: "fake-test-model",
+            providerResponseId: null,
+            selectedModel: null,
+            selectedReasoningEffort: null,
+            boundarySubstitution: true,
+            declaredHumanQaBudgetEur: 10 as const,
+            hardCapEnforced: false as const,
+          },
+        };
+      },
+    );
   });

-  it("does not create a Project before explicit CTA and asks slots explicitly", async () => {
+  it("does not create a Project before explicit CTA; one cognitive turn can enable create", async () => {
     const user = userEvent.setup();
     render(<NewProjectIntentionPage />);
     expect(screen.getByTestId("create-project-submit")).toBeDisabled();
     expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
-      /accomplir|intention/i,
+      /accomplir|projet/i,
     );
     expect(screen.getByTestId("new-project-starters")).toBeInTheDocument();

@@ -207,32 +263,17 @@ describe("P5-S06 CP01 NewProjectIntentionPage", () => {
     );
     await user.click(screen.getByTestId("new-project-send"));
     expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
-    expect(screen.getByTestId("preview-intention")).toHaveTextContent(/contrats/i);
-    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
-    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
-      /Quel nom/i,
+    await waitFor(() =>
+      expect(screen.getByTestId("preview-intention")).toHaveTextContent(
+        /contrats/i,
+      ),
     );
-
-    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
-    await user.click(screen.getByTestId("new-project-send"));
-    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
-    expect(screen.getByTestId("preview-name")).toHaveTextContent("Contrats Q3");
     expect(screen.getByTestId("create-project-submit")).toBeEnabled();
-    expect(screen.getByTestId("new-project-clarification")).toBeInTheDocument();
-    expect(screen.getByTestId("new-project-understood")).toBeInTheDocument();
-  });
-
-  it("does not treat a follow-up precision as name before NAME_REQUIRED", async () => {
-    const user = userEvent.setup();
-    render(<NewProjectIntentionPage />);
-    await user.type(
-      screen.getByTestId("new-project-input"),
-      "Suivre les contrats",
-    );
-    await user.click(screen.getByTestId("new-project-send"));
-    expect(screen.getByTestId("preview-name")).toHaveTextContent(
+    expect(screen.getByTestId("preview-name")).not.toHaveTextContent(
       /pas encore précisé/i,
     );
+    expect(screen.getByTestId("new-project-clarification")).toBeInTheDocument();
+    expect(screen.getByTestId("new-project-understood")).toBeInTheDocument();
   });

   it("creates exactly one Project via canonical action then opens workspace", async () => {
@@ -256,20 +297,24 @@ describe("P5-S06 CP01 NewProjectIntentionPage", () => {
       "Suivre les contrats fournisseurs",
     );
     await user.click(screen.getByTestId("new-project-send"));
-    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
-    await user.click(screen.getByTestId("new-project-send"));
+    await waitFor(() =>
+      expect(screen.getByTestId("create-project-submit")).toBeEnabled(),
+    );
     await user.click(screen.getByTestId("create-project-submit"));

     await waitFor(() =>
       expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(1),
     );
     const arg = createProjectRuntimeActionMock.mock.calls[0]![0];
-    expect(arg.name).toBe("Contrats Q3");
+    expect(arg.name.length).toBeGreaterThan(0);
     expect(arg.objective).toMatch(/contrats/i);
+    expect(arg.context).toMatch(/nora-onboarding-handoff/);
     expect(arg.criticality).toBe("STANDARD");
     expect(arg).not.toHaveProperty("cycleId");
     expect(arg).not.toHaveProperty("humanDecision");
-    expect(pushMock).toHaveBeenCalledWith("/studio/projects/prj%3As06-1");
+    expect(pushMock).toHaveBeenCalledWith(
+      "/studio/projects/prj%3As06-1?from=new-project-onboarding",
+    );
   });
 });

@@ -303,6 +348,13 @@ describe("P5-S06 CP01 Nora activity mapping", () => {
         uiState: "ANSWERED",
       }),
     ).toMatchObject({ phase: "complete" });
+    expect(
+      projectNoraActivity({
+        blocked: false,
+        busy: true,
+        uiState: "ANSWERED",
+      }),
+    ).toMatchObject({ phase: "complete" });
     expect(
       projectNoraActivity({
         blocked: false,
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.closure.d0.test.ts b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.closure.d0.test.ts
new file mode 100644
index 00000000..ca0d0288
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.closure.d0.test.ts
@@ -0,0 +1,492 @@
+/** @vitest-environment node */
+/**
+ * P6-HQA-NEWPROJECT-01 — targeted functional closure (G1–G4).
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  FakeConversationProvider,
+  setConversationProviderForTests,
+} from "@/lib/platform/ai";
+import {
+  assembleProductContextHandoff,
+  emptyDraft,
+  mergeCognitiveIntoDraft,
+  ONBOARDING_HANDOFF_MARKER,
+  parseOnboardingHandoffEssentials,
+  studioCanCreate,
+  type OnboardingCognitivePayload,
+  type PreProjectDraft,
+} from "@/features/pre-m6-product-ui/newProjectOnboardingContract";
+import { runNewProjectOnboardingTurn } from "@/features/pre-m6-product-ui/runNewProjectOnboardingTurn";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+
+function payload(
+  partial: Partial<OnboardingCognitivePayload> & {
+    replyText: string;
+    intentionKind: OnboardingCognitivePayload["intentionKind"];
+  },
+): OnboardingCognitivePayload {
+  return {
+    intentionKnown: null,
+    objectiveProposal: null,
+    contextKnown: null,
+    nameProposal: null,
+    nameProvisional: true,
+    firstOrientationProposal: null,
+    unknowns: [],
+    sufficientForCreateProposal: false,
+    refuseCreateDetected: false,
+    acceptCreateDetected: false,
+    clarificationQuestion: null,
+    suggestions: [],
+    ...partial,
+  };
+}
+
+describe("G1 — reversible refuse", () => {
+  it("1 — refuse blocks create", () => {
+    const d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "App de tâches",
+        nameProposal: "Tâches",
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: true,
+        refuseCreateDetected: true,
+      }),
+      "ne crée pas",
+    );
+    expect(d.explicitRefuseCreate).toBe(true);
+    expect(studioCanCreate(d)).toBe(false);
+  });
+
+  it("2 — refuse then explicit accept unlocks when direction exists", () => {
+    let d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "pas maintenant",
+        intentionKnown: "App de gestion de tâches",
+        nameProposal: "Tâches",
+        intentionKind: "project_direction",
+        refuseCreateDetected: true,
+      }),
+      "pas maintenant",
+    );
+    expect(studioCanCreate(d)).toBe(false);
+    d = mergeCognitiveIntoDraft(
+      d,
+      payload({
+        replyText: "allons-y",
+        intentionKnown: "App de gestion de tâches",
+        nameProposal: "Tâches",
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: true,
+        acceptCreateDetected: true,
+      }),
+      "Finalement, allons-y, je veux créer le projet.",
+    );
+    expect(d.explicitRefuseCreate).toBe(false);
+    expect(studioCanCreate(d)).toBe(true);
+  });
+
+  it("3 — refuse then question does not unlock", () => {
+    let d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "refuse",
+        intentionKnown: "Produit flou",
+        nameProposal: "Produit",
+        intentionKind: "project_direction",
+        refuseCreateDetected: true,
+      }),
+      "pas maintenant",
+    );
+    d = mergeCognitiveIntoDraft(
+      d,
+      payload({
+        replyText: "question",
+        intentionKnown: "Produit flou",
+        nameProposal: "Produit",
+        intentionKind: "project_direction",
+        // neutral turn — neither refuse nor accept
+      }),
+      "Tu peux préciser le nom ?",
+    );
+    expect(d.explicitRefuseCreate).toBe(true);
+    expect(studioCanCreate(d)).toBe(false);
+  });
+
+  it("4 — refuse then off-topic does not unlock", () => {
+    let d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "refuse",
+        intentionKnown: "Organisation",
+        nameProposal: "Org",
+        intentionKind: "project_direction",
+        refuseCreateDetected: true,
+      }),
+      "attends",
+    );
+    d = mergeCognitiveIntoDraft(
+      d,
+      payload({
+        replyText: "hors sujet",
+        intentionKind: "non_project",
+      }),
+      "Quelle heure est-il ?",
+    );
+    expect(d.explicitRefuseCreate).toBe(true);
+    expect(studioCanCreate(d)).toBe(false);
+  });
+
+  it("5 — accept then refuse reblocks", () => {
+    let d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "App tâches",
+        nameProposal: "Tâches",
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: true,
+        acceptCreateDetected: true,
+      }),
+      "créons-le",
+    );
+    expect(studioCanCreate(d)).toBe(true);
+    d = mergeCognitiveIntoDraft(
+      d,
+      payload({
+        replyText: "stop",
+        intentionKnown: "App tâches",
+        nameProposal: "Tâches",
+        intentionKind: "project_direction",
+        refuseCreateDetected: true,
+      }),
+      "Finalement ne crée pas",
+    );
+    expect(studioCanCreate(d)).toBe(false);
+  });
+
+  it("6 — name agreement alone is not create consent", () => {
+    const base = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "propose nom",
+        intentionKnown: "App tâches",
+        nameProposal: "Tâches Pro",
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: true,
+        refuseCreateDetected: true,
+      }),
+      "idée",
+    );
+    const afterName = mergeCognitiveIntoDraft(
+      base,
+      payload({
+        replyText: "nom ok",
+        intentionKnown: "App tâches",
+        nameProposal: "Tâches Pro",
+        intentionKind: "project_direction",
+        // acceptCreateDetected intentionally false (name confirm ≠ create)
+      }),
+      "ok pour le nom",
+    );
+    expect(afterName.explicitRefuseCreate).toBe(true);
+    expect(studioCanCreate(afterName)).toBe(false);
+  });
+});
+
+describe("G2 — minimum sufficient (non-syntactic)", () => {
+  it("9 — clear intention with project_direction can create", () => {
+    const d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "Je veux créer une application de gestion de tâches.",
+        nameProposal: "Gestion de tâches",
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: true,
+      }),
+      "Je veux créer une application de gestion de tâches.",
+    );
+    expect(studioCanCreate(d)).toBe(true);
+  });
+
+  it("10 — exploratory intention still project_direction", () => {
+    const d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "exploratoire",
+        intentionKnown: "J’ai une idée de produit mais elle est encore floue.",
+        nameProposal: "Idée produit",
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: false,
+      }),
+      "idée encore floue",
+    );
+    expect(studioCanCreate(d)).toBe(true);
+  });
+
+  it("14 — long off-topic cannot create even if Nora wrongly says sufficient", () => {
+    const d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "recette",
+        intentionKnown:
+          "Voici une très longue recette de cuisine avec beaucoup d’ingrédients et d’étapes détaillées sans aucun projet.",
+        nameProposal: "Recette",
+        intentionKind: "non_project",
+        sufficientForCreateProposal: true,
+      }),
+      "long hors sujet",
+    );
+    expect(studioCanCreate(d)).toBe(false);
+  });
+
+  it("15 — short intelligible project direction can create", () => {
+    const d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "CRM interne",
+        nameProposal: "CRM",
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: true,
+      }),
+      "CRM",
+    );
+    expect(d.intention.length).toBeLessThan(12);
+    expect(studioCanCreate(d)).toBe(true);
+  });
+
+  it("17 — Nora sufficient=true without project_direction rejected", () => {
+    const d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "bonjour",
+        intentionKnown: "Bonjour",
+        nameProposal: "Bonjour",
+        intentionKind: "non_project",
+        sufficientForCreateProposal: true,
+      }),
+      "Bonjour",
+    );
+    expect(studioCanCreate(d)).toBe(false);
+    expect(d.cognitiveCreateProposal).toBe(false);
+  });
+
+  it("18 — Nora sufficient=false but exploratory project_direction creatable", () => {
+    const d = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "incertain",
+        intentionKnown: "Améliorer notre organisation, on précisera après.",
+        nameProposal: "Organisation",
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: false,
+      }),
+      "organisation",
+    );
+    expect(d.cognitiveCreateProposal).toBe(false);
+    expect(studioCanCreate(d)).toBe(true);
+  });
+});
+
+describe("G3 — continuity handoff assembly + Product read-back", () => {
+  const tempDirs: string[] = [];
+  const APP_ROOT = path.resolve(__dirname, "../..");
+  const SCHEMAS = path.resolve(
+    APP_ROOT,
+    "../sfia-v3-modeled/v3-native-option-a/schemas",
+  );
+  const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+
+  beforeEach(() => {
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
+    resetRuntimeApplicationServiceForTests();
+  });
+
+  afterEach(() => {
+    resetRuntimeApplicationServiceForTests();
+    while (tempDirs.length) {
+      const d = tempDirs.pop();
+      if (d) fs.rmSync(d, { recursive: true, force: true });
+    }
+  });
+
+  it("21/22/23 — essential fields preserved under tight budget; no silent intention loss", () => {
+    const draft: PreProjectDraft = {
+      ...emptyDraft(),
+      intention: "Intention critique à conserver absolument pour la continuité",
+      objective: "Objectif proposé",
+      name: "Projet Continuity",
+      nameProvisional: true,
+      context: "Contexte connu",
+      firstOrientation: "Orientation provisoire non autoritative",
+      unknowns: ["périmètre", "premier cycle"],
+      intentionKind: "project_direction",
+      cognitiveTurns: 2,
+    };
+    const longTranscript = Array.from({ length: 20 }, (_, i) => ({
+      role: (i % 2 === 0 ? "user" : "nora") as "user" | "nora",
+      text: `Tour ${i} `.repeat(40),
+    }));
+    const assembled = assembleProductContextHandoff(
+      draft,
+      longTranscript,
+      900,
+    );
+    expect(assembled.essentialPreserved).toBe(true);
+    expect(assembled.text).toContain(ONBOARDING_HANDOFF_MARKER);
+    expect(assembled.text).toContain("Intention critique à conserver");
+    expect(assembled.text).toContain("périmètre");
+    expect(assembled.text).toMatch(/FULL TRANSCRIPT REPLAY:\s*non/i);
+    expect(assembled.text.length).toBeLessThanOrEqual(900);
+    const parsed = parseOnboardingHandoffEssentials(assembled.text);
+    expect(parsed.markerPresent).toBe(true);
+    expect(parsed.intention).toMatch(/Intention critique/);
+    expect(parsed.claimsFullReplay).toBe(false);
+  });
+
+  it("24/25/26 — Product create stores handoff; LPS full context is cognitive authority", async () => {
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-np-cont-"));
+    tempDirs.push(dir);
+    const productDbPath = path.join(dir, "oa-product.sqlite");
+    const runtime = getRuntimeApplicationService({
+      productDbPath,
+      registryRoot: FIXTURES,
+      schemasRoot: SCHEMAS,
+    });
+    const draft = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "Moderniser le reporting commercial",
+        objectiveProposal: "Moderniser le reporting commercial",
+        nameProposal: "Reporting commercial",
+        nameProvisional: true,
+        firstOrientationProposal: "Clarifier le premier livrable",
+        unknowns: ["sources de données"],
+        intentionKind: "project_direction",
+        sufficientForCreateProposal: true,
+      }),
+      "Moderniser le reporting commercial",
+    );
+    const handoff = assembleProductContextHandoff(draft, [
+      { role: "user", text: "Moderniser le reporting commercial" },
+      { role: "nora", text: "ok" },
+    ]).text;
+    const created = await runtime.createProject({
+      name: draft.name,
+      objective: draft.objective || draft.intention,
+      context: handoff,
+      criticality: "STANDARD",
+      constraints: [],
+      idempotencyKey: "np-cont-1",
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    const got = await runtime.getProject(created.projectId);
+    expect(got.ok).toBe(true);
+    if (!got.ok) return;
+    expect(got.project.objective).toMatch(/reporting/i);
+    // UI projection is ≤240 chars — may truncate; marker+intention must lead.
+    expect(got.project.contextSummary).toContain(ONBOARDING_HANDOFF_MARKER);
+    expect(got.project.contextSummary.length).toBeLessThanOrEqual(240);
+    // Cognitive continuity authority = LPS full context (F2 readLiveProjectContext path).
+    const oa = runtime.oa;
+    expect(oa).toBeTruthy();
+    const lps = await oa!.projectServices.getCurrentLivingProjectState.execute({
+      projectId: created.projectId,
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    const fullContext = lps.livingProjectState.context ?? "";
+    expect(fullContext.length).toBeGreaterThan(240);
+    const parsed = parseOnboardingHandoffEssentials(fullContext);
+    expect(parsed.markerPresent).toBe(true);
+    expect(parsed.intention).toMatch(/reporting/i);
+    expect(parsed.orientation).toMatch(/livrable|Orientation|Clarifier/i);
+    expect(parsed.claimsFullReplay).toBe(false);
+    expect(fullContext).toMatch(/non Session Agents/i);
+  });
+});
+
+describe("G4 — usage observation without false hard cap", () => {
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    delete process.env.OPS1_CONVERSATION_PROVIDER;
+  });
+
+  it("36 — usageObservation exposed; hardCapEnforced=false", async () => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    const result = await runNewProjectOnboardingTurn({
+      userText: "Je veux créer une application de gestion de tâches.",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.usageObservation.hardCapEnforced).toBe(false);
+    expect(result.usageObservation.declaredHumanQaBudgetEur).toBe(10);
+    expect(result.usageObservation.model).toBeTruthy();
+    // Fake may leave token counts null — that is an honest observability gap, not a hard cap.
+  });
+});
+
+describe("Provider multi-turn Fake — refuse/accept path", () => {
+  afterEach(() => {
+    setConversationProviderForTests(null);
+  });
+
+  it("refuse then allons-y unlocks via Fake provider", async () => {
+    const provider = new FakeConversationProvider();
+    const first = await runNewProjectOnboardingTurn({
+      userText: "Je veux une app de tâches mais ne crée pas pour l’instant",
+      draft: emptyDraft(),
+      history: [],
+      provider,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    // Force refuse if combined message didn't
+    const refused = first.draft.explicitRefuseCreate
+      ? first.draft
+      : mergeCognitiveIntoDraft(
+          first.draft,
+          payload({
+            replyText: "refuse",
+            intentionKnown: first.draft.intention || "App de tâches",
+            nameProposal: first.draft.name || "Tâches",
+            intentionKind: "project_direction",
+            refuseCreateDetected: true,
+          }),
+          "ne crée pas",
+        );
+    expect(studioCanCreate(refused)).toBe(false);
+    const second = await runNewProjectOnboardingTurn({
+      userText: "Finalement, allons-y, je veux créer le projet.",
+      draft: refused,
+      history: [
+        { role: "user", text: "ne crée pas" },
+        { role: "nora", text: "ok" },
+      ],
+      provider,
+    });
+    expect(second.ok).toBe(true);
+    if (!second.ok) return;
+    expect(second.draft.explicitRefuseCreate).toBe(false);
+    expect(studioCanCreate(second.draft)).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.onboarding.d0.test.ts b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.onboarding.d0.test.ts
new file mode 100644
index 00000000..009fb1c2
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.onboarding.d0.test.ts
@@ -0,0 +1,352 @@
+/** @vitest-environment node */
+/**
+ * P6-HQA-NEWPROJECT-01 — deterministic cognitive onboarding (Fake provider).
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  FakeConversationProvider,
+  setConversationProviderForTests,
+} from "@/lib/platform/ai";
+import {
+  buildProductContextHandoff,
+  emptyDraft,
+  mergeCognitiveIntoDraft,
+  ONBOARDING_HANDOFF_MARKER,
+  parseOnboardingCognitivePayload,
+  provisionalNameFromIntention,
+  studioCanCreate,
+  type OnboardingCognitivePayload,
+} from "@/features/pre-m6-product-ui/newProjectOnboardingContract";
+import { runNewProjectOnboardingTurn } from "@/features/pre-m6-product-ui/runNewProjectOnboardingTurn";
+
+function payload(
+  partial: Partial<OnboardingCognitivePayload> & { replyText: string },
+): OnboardingCognitivePayload {
+  return {
+    intentionKnown: null,
+    objectiveProposal: null,
+    contextKnown: null,
+    nameProposal: null,
+    nameProvisional: true,
+    firstOrientationProposal: null,
+    unknowns: [],
+    sufficientForCreateProposal: false,
+    refuseCreateDetected: false,
+    acceptCreateDetected: false,
+    intentionKind: "project_direction",
+    clarificationQuestion: null,
+    suggestions: [],
+    ...partial,
+  };
+}
+
+describe("P6-HQA-NEWPROJECT-01 contract merge / studio gate", () => {
+  it("1 — clear intention can become creatable with provisional name", () => {
+    const merged = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "Moderniser le reporting Q3",
+        objectiveProposal: "Moderniser le reporting Q3",
+        nameProposal: "Reporting Q3",
+        nameProvisional: true,
+        sufficientForCreateProposal: true,
+      }),
+      "Moderniser le reporting Q3",
+    );
+    expect(studioCanCreate(merged)).toBe(true);
+    expect(merged.name).toBe("Reporting Q3");
+  });
+
+  it("2 — Nora name proposal is not mandatory from Pilot", () => {
+    const merged = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "Je propose un nom",
+        intentionKnown: "Lancer un atelier design",
+        nameProposal: "Atelier design",
+        sufficientForCreateProposal: true,
+      }),
+      "Lancer un atelier design",
+    );
+    expect(merged.name).toBe("Atelier design");
+    expect(studioCanCreate(merged)).toBe(true);
+  });
+
+  it("3 — Studio stamps provisional name when Nora omits one", () => {
+    const merged = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "Explorer une idée de produit",
+        nameProposal: null,
+        sufficientForCreateProposal: true,
+      }),
+      "Explorer une idée de produit",
+    );
+    expect(merged.nameProvisional).toBe(true);
+    expect(merged.name.length).toBeGreaterThan(0);
+    expect(merged.name).toBe(
+      provisionalNameFromIntention("Explorer une idée de produit"),
+    );
+  });
+
+  it("4 — unknown context remains empty honestly", () => {
+    const merged = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "Idée exploratoire",
+        contextKnown: null,
+        unknowns: ["contexte de départ"],
+        sufficientForCreateProposal: true,
+        nameProposal: "Idée exploratoire",
+      }),
+      "Idée exploratoire",
+    );
+    expect(merged.context).toBe("");
+    expect(merged.unknowns).toContain("contexte de départ");
+  });
+
+  it("5 — exploratory objective allowed", () => {
+    const merged = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "exploratoire",
+        intentionKnown: "Je ne sais pas encore exactement",
+        objectiveProposal: "Explorer le sujet sans cadrage complet",
+        nameProposal: "Exploration",
+        sufficientForCreateProposal: true,
+      }),
+      "Je ne sais pas encore exactement",
+    );
+    expect(studioCanCreate(merged)).toBe(true);
+  });
+
+  it("11 — explicit refuse blocks create", () => {
+    const merged = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "pas maintenant",
+        refuseCreateDetected: true,
+        sufficientForCreateProposal: false,
+        intentionKnown: "Un projet",
+        nameProposal: "Un projet",
+        intentionKind: "project_direction",
+      }),
+      "ne crée pas",
+    );
+    expect(merged.explicitRefuseCreate).toBe(true);
+    expect(studioCanCreate(merged)).toBe(false);
+  });
+
+  it("12 — no create before cognitive turn", () => {
+    expect(studioCanCreate(emptyDraft())).toBe(false);
+  });
+
+  it("18 — handoff context preserves transcript without invention", () => {
+    const draft = mergeCognitiveIntoDraft(
+      emptyDraft(),
+      payload({
+        replyText: "ok",
+        intentionKnown: "Refondre l’accueil",
+        nameProposal: "Accueil",
+        sufficientForCreateProposal: true,
+        firstOrientationProposal: "Clarifier le premier livrable",
+      }),
+      "Refondre l’accueil",
+    );
+    const ctx = buildProductContextHandoff(draft, [
+      { role: "user", text: "Refondre l’accueil" },
+      { role: "nora", text: "ok" },
+    ]);
+    expect(ctx).toContain(ONBOARDING_HANDOFF_MARKER);
+    expect(ctx).toContain("Refondre l’accueil");
+    expect(ctx).toContain("Clarifier le premier livrable");
+    expect(ctx).toMatch(/Aucun CycleInstance/);
+  });
+
+  it("rejects invalid payload", () => {
+    expect(parseOnboardingCognitivePayload({})).toBeNull();
+    expect(parseOnboardingCognitivePayload({ replyText: "" })).toBeNull();
+  });
+});
+
+describe("P6-HQA-NEWPROJECT-01 provider-backed turns (Fake)", () => {
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    setConversationProviderForTests(null);
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    delete process.env.OPS1_CONVERSATION_PROVIDER;
+  });
+
+  it("1/2/7 — clear intention → create proposal + name via Fake", async () => {
+    const result = await runNewProjectOnboardingTurn({
+      userText:
+        "Je veux moderniser le reporting commercial pour le rendre plus lisible.",
+      draft: emptyDraft(),
+      history: [
+        {
+          role: "nora",
+          text: "Bonjour — dis-moi ce que tu veux accomplir.",
+        },
+      ],
+      provider: new FakeConversationProvider(),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.draft.intention.length).toBeGreaterThan(10);
+    expect(result.draft.name.length).toBeGreaterThan(0);
+    expect(studioCanCreate(result.draft)).toBe(true);
+    expect(result.replyText.length).toBeGreaterThan(10);
+  });
+
+  it("6 — hesitant short message does not force create", async () => {
+    const result = await runNewProjectOnboardingTurn({
+      userText: "euh",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(studioCanCreate(result.draft)).toBe(false);
+  });
+
+  it("7 — want to start fast → exploratory create proposal", async () => {
+    const result = await runNewProjectOnboardingTurn({
+      userText: "On commence tout de suite, on verra le détail après",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.payload.sufficientForCreateProposal).toBe(true);
+    expect(studioCanCreate(result.draft)).toBe(true);
+  });
+
+  it("8 — intention change updates draft", async () => {
+    const first = await runNewProjectOnboardingTurn({
+      userText: "Je veux un projet reporting",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    const second = await runNewProjectOnboardingTurn({
+      userText: "Finalement je préfère un projet formation équipe",
+      draft: first.draft,
+      history: [
+        { role: "user", text: "Je veux un projet reporting" },
+        { role: "nora", text: first.replyText },
+      ],
+      provider: new FakeConversationProvider(),
+    });
+    expect(second.ok).toBe(true);
+    if (!second.ok) return;
+    expect(second.draft.intention.toLowerCase()).toMatch(/formation/);
+  });
+
+  it("9 — off-topic does not invent a project", async () => {
+    const result = await runNewProjectOnboardingTurn({
+      userText: "Quelle est la météo demain ?",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.payload.sufficientForCreateProposal).toBe(false);
+  });
+
+  it("11 — refuse create", async () => {
+    const result = await runNewProjectOnboardingTurn({
+      userText: "Ne crée pas pour l’instant",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.draft.explicitRefuseCreate).toBe(true);
+    expect(studioCanCreate(result.draft)).toBe(false);
+  });
+
+  it("14 — provider error is honest and non-mutating", async () => {
+    const provider = new FakeConversationProvider({ failOnCall: 1 });
+    const before = emptyDraft();
+    const result = await runNewProjectOnboardingTurn({
+      userText: "Je veux un projet",
+      draft: before,
+      history: [],
+      provider,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("PROVIDER_ERROR");
+    expect(result.draft).toEqual(before);
+  });
+
+  it("15 — abort / interruption", async () => {
+    const ac = new AbortController();
+    ac.abort();
+    const result = await runNewProjectOnboardingTurn({
+      userText: "Je veux un projet",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+      signal: ac.signal,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("ABORTED");
+  });
+
+  it("16 — conversation resume merges prior draft", async () => {
+    const first = await runNewProjectOnboardingTurn({
+      userText: "Projet pour clarifier le pilotage produit",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    const resumed = await runNewProjectOnboardingTurn({
+      userText: "Ajoute que le contexte est une équipe de 5 personnes",
+      draft: first.draft,
+      history: [
+        { role: "user", text: "Projet pour clarifier le pilotage produit" },
+        { role: "nora", text: first.replyText },
+      ],
+      provider: new FakeConversationProvider(),
+    });
+    expect(resumed.ok).toBe(true);
+    if (!resumed.ok) return;
+    expect(resumed.draft.cognitiveTurns).toBe(2);
+    expect(resumed.draft.intention.length).toBeGreaterThan(0);
+  });
+
+  it("23 — two concurrent drafts stay isolated", async () => {
+    const a = await runNewProjectOnboardingTurn({
+      userText: "Projet Alpha reporting",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    const b = await runNewProjectOnboardingTurn({
+      userText: "Projet Beta formation",
+      draft: emptyDraft(),
+      history: [],
+      provider: new FakeConversationProvider(),
+    });
+    expect(a.ok && b.ok).toBe(true);
+    if (!a.ok || !b.ok) return;
+    expect(a.draft.intention).not.toEqual(b.draft.intention);
+    expect(a.draft.name).not.toEqual(b.draft.name);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx
new file mode 100644
index 00000000..d5227445
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx
@@ -0,0 +1,250 @@
+/** @vitest-environment jsdom */
+/**
+ * P6-HQA-UI-03 — Nora activity belongs in the conversation thread (DP06 / P3 §28).
+ */
+import { cleanup, render, screen } from "@testing-library/react";
+import userEvent from "@testing-library/user-event";
+import { afterEach, describe, expect, it, vi } from "vitest";
+import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
+import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
+
+afterEach(() => {
+  cleanup();
+});
+
+function stubController(
+  overrides: Partial<ProductConversationController>,
+): ProductConversationController {
+  return {
+    listRef: { current: null },
+    messages: [
+      {
+        id: "m-user-1",
+        role: "user",
+        content: "Préparer le Deliverable requis pour HQ-01.",
+      },
+    ],
+    draft: "",
+    setDraft: vi.fn(),
+    toolEvents: [],
+    uiState: "READY",
+    error: null,
+    modeLabel: "fixture",
+    ephemeralNotice: "notice",
+    lrMaterializeNotice: null,
+    lrMaterializeCode: null,
+    f2: null,
+    activeProposal: null,
+    reservesText: "",
+    setReservesText: vi.fn(),
+    f3Prepare: null,
+    f3M3Resolved: null,
+    f3Execute: null,
+    durableEvidenceOutcome: null,
+    durableRehydrateError: null,
+    focusTurnId: null,
+    clearFocusTurn: vi.fn(),
+    busy: false,
+    blocked: false,
+    canSend: true,
+    stopAvailable: false,
+    stopCurrentResponse: vi.fn(),
+    gateOpen: false,
+    recommendationFreshness: "none",
+    qualificationFreshness: "none",
+    durableOutcomeFreshness: "none",
+    canPrepareResolvedM3: false,
+    canPrepareLegacyFixture: false,
+    canConfirmResolvedM3: false,
+    canConfirmLegacyFixture: false,
+    canRefreshResolvedM3Running: false,
+    sendMessage: vi.fn(),
+    decide: vi.fn(),
+    prepareResolvedM3: vi.fn(),
+    prepareLegacyFixture: vi.fn(),
+    confirmAndExecuteResolvedM3: vi.fn(),
+    confirmAndExecuteLegacyFixture: vi.fn(),
+    refreshResolvedM3RunningAttempt: vi.fn(),
+    retryLastUserMessage: vi.fn(),
+    reservationResolutionProposal: null,
+    transcriptAvailability: "available",
+    openContinuityPresentation: null,
+    journalEntries: [],
+    journalCycleInstanceId: null,
+    selectedJournalEntryId: null,
+    setSelectedJournalEntryId: vi.fn(),
+    focusJournalExchanges: vi.fn(),
+    focusTranscriptTurn: vi.fn(),
+    refreshConversationContinuity: vi.fn(),
+    armReinstructionOfProposalId: vi.fn(),
+    armedReinstructionOfProposalId: null,
+    armReservationInteractionContext: vi.fn(),
+    armedReservationInteractionContext: null,
+    clearReservationResolutionProposal: vi.fn(),
+    ...overrides,
+  } as ProductConversationController;
+}
+
+describe("P6-HQA-UI-03 Nora activity in conversation thread", () => {
+  it("T01/T03 — START/ACTIVITY renders Nora block in the thread with honest fallback", () => {
+    render(
+      <ConversationSurface
+        controller={stubController({
+          busy: true,
+          canSend: false,
+          uiState: "SENDING",
+          stopAvailable: false,
+        })}
+      />,
+    );
+    const activity = screen.getByTestId("project-assistant-nora-activity");
+    const thread = screen.getByTestId("project-assistant-messages");
+    expect(thread.contains(activity)).toBe(true);
+    expect(activity).toHaveAttribute("data-nora-phase", "start");
+    expect(
+      screen.getByTestId("project-assistant-nora-activity-label"),
+    ).toHaveTextContent("Nora travaille…");
+    expect(activity.textContent).not.toMatch(
+      /Contexte du projet chargé|Journal du cycle|Analyse des éléments|%/i,
+    );
+  });
+
+  it("T02 — ACTIVITY label is not visible in composerTools", () => {
+    render(
+      <ConversationSurface
+        controller={stubController({
+          busy: true,
+          canSend: false,
+          uiState: "ASSISTANT_WORKING",
+          stopAvailable: true,
+        })}
+      />,
+    );
+    const tools = screen.getByTestId("project-assistant-composer-tools");
+    expect(tools.textContent).not.toMatch(/Nora travaille/i);
+    const status = screen.getByTestId("project-assistant-status");
+    expect(status.className).toMatch(/srOnly|sr-only/i);
+    expect(status).toHaveAttribute("data-nora-phase", "activity");
+  });
+
+  it("T05 — COMPLETE removes transient activity and keeps the real answer", () => {
+    render(
+      <ConversationSurface
+        controller={stubController({
+          busy: true,
+          canSend: true,
+          uiState: "ANSWERED",
+          messages: [
+            {
+              id: "m-user-1",
+              role: "user",
+              content: "Préparer le Deliverable requis pour HQ-01.",
+            },
+            {
+              id: "m-asst-1",
+              role: "assistant",
+              content: "Voici ma qualification du livrable requis.",
+            },
+          ],
+        })}
+      />,
+    );
+    expect(
+      screen.queryByTestId("project-assistant-nora-activity"),
+    ).toBeNull();
+    expect(screen.getByTestId("project-assistant-turn-assistant")).toHaveTextContent(
+      "Voici ma qualification du livrable requis.",
+    );
+  });
+
+  it("T06/T09 — STOPPED stays STOPPED and is not SUCCESS; ERROR distinct", () => {
+    const { rerender } = render(
+      <ConversationSurface
+        controller={stubController({
+          busy: false,
+          canSend: false,
+          uiState: "STOPPED",
+          error: null,
+        })}
+      />,
+    );
+    expect(screen.getByTestId("project-assistant-stopped")).toHaveTextContent(
+      "Réponse interrompue",
+    );
+    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
+    expect(
+      screen.queryByTestId("project-assistant-nora-activity"),
+    ).toBeNull();
+
+    rerender(
+      <ConversationSurface
+        controller={stubController({
+          busy: false,
+          canSend: false,
+          uiState: "ERROR_RECOVERABLE",
+          error: "Échec fournisseur",
+        })}
+      />,
+    );
+    expect(screen.getByTestId("project-assistant-error")).toHaveTextContent(
+      "Échec fournisseur",
+    );
+    expect(screen.queryByTestId("project-assistant-stopped")).toBeNull();
+  });
+
+  it("T07/T08 — STOP remains operable only when stopAvailable", async () => {
+    const stopCurrentResponse = vi.fn();
+    const user = userEvent.setup();
+    const { rerender } = render(
+      <ConversationSurface
+        controller={stubController({
+          busy: true,
+          canSend: false,
+          uiState: "ASSISTANT_WORKING",
+          stopAvailable: true,
+          stopCurrentResponse,
+        })}
+      />,
+    );
+    expect(screen.getByTestId("project-assistant-stop")).toBeInTheDocument();
+    await user.click(screen.getByTestId("project-assistant-stop"));
+    expect(stopCurrentResponse).toHaveBeenCalledTimes(1);
+
+    rerender(
+      <ConversationSurface
+        controller={stubController({
+          busy: true,
+          canSend: false,
+          uiState: "ASSISTANT_WORKING",
+          stopAvailable: false,
+        })}
+      />,
+    );
+    expect(screen.queryByTestId("project-assistant-stop")).toBeNull();
+    expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
+  });
+
+  it("T14 — activity turn is ephemeral presentation (no durable assistant message invented)", () => {
+    render(
+      <ConversationSurface
+        controller={stubController({
+          busy: true,
+          canSend: false,
+          uiState: "ASSISTANT_WORKING",
+          messages: [
+            {
+              id: "m-user-1",
+              role: "user",
+              content: "Message pilote",
+            },
+          ],
+        })}
+      />,
+    );
+    expect(screen.getAllByTestId("project-assistant-turn-user")).toHaveLength(1);
+    expect(screen.queryByTestId("project-assistant-turn-assistant")).toBeNull();
+    expect(
+      screen.getByTestId("project-assistant-nora-activity"),
+    ).toBeInTheDocument();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
new file mode 100644
index 00000000..cbefbf0a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
@@ -0,0 +1,360 @@
+/** @vitest-environment jsdom */
+/**
+ * P6-HQA-UI-04 — Pilot-facing Recommendation / Proposal / next-action simplification.
+ */
+import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
+import { afterEach, describe, expect, it, vi } from "vitest";
+import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
+import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
+import {
+  formatNoraAssistantDisplayText,
+  projectPilotProposalCard,
+  projectPilotRecommendationCard,
+} from "@/features/project-assistant/presentationLabels";
+import type { ProposalDto } from "@/features/project-assistant/f2/types";
+import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
+
+afterEach(() => {
+  cleanup();
+});
+
+const QUALIFICATION = {
+  cycleTypeId: "cycle:delivery",
+  cycleLabel: "Delivery / implémentation",
+  recommendedProfile: "Standard",
+  rationale: "default_standard",
+  criticalSignalsPresent: false,
+  requiresJustificationForCritical: false,
+  capitalizationViaCycleTypeId: false,
+  isMorrisDecision: false as const,
+  catalogVersion: "1",
+  catalogHash: "h",
+  detailedStatus: "ok",
+  disclosures: [],
+  signals: {
+    structuralChange: false,
+    securityImpact: false,
+    architectureImpact: false,
+    dataImpact: false,
+    irreversible: false,
+    lowRiskBounded: true,
+  },
+  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE" as const,
+  cycleInstanceId: "cyc:hq01-proposed",
+  cycleStatus: "proposed",
+};
+
+const PROPOSAL: ProposalDto = {
+  proposalId: "prop:f2:ui04",
+  status: "READY_NO_GATE",
+  rephrasedRequest:
+    "Démarrer le cycle Delivery pour produire, revoir et valider le livrable HQ-01.",
+  objective:
+    "Démarrer le cycle Delivery pour produire, revoir et valider le livrable HQ-01.",
+  cycleTypeId: "cycle:delivery",
+  recommendedProfile: "Standard",
+  rationale: "default_standard",
+  scope: "Qualification et préparation du démarrage Delivery",
+  outOfScope: ["Cursor REAL", "écriture Git"],
+  activatedBlocks: [],
+  expectedOutcome: "Cycle Delivery prêt à être démarré avec critères de sortie clairs.",
+  sources: [],
+  risks: [],
+  reservations: [],
+  stopConditions: ["AUCUNE EXÉCUTION"],
+  morrisGateRequired: false,
+  nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
+  contextSnapshot: {
+    projectId: "prj:hq01",
+    lpsId: "lps:hq01",
+    lpsVersion: 3,
+    doctrineDigest: "doctrine:test",
+    activeCycleInstanceId: null,
+  },
+  processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+  executionForbidden: true,
+  noExecutingStatus: true,
+  agentBinding: "NOT_AVAILABLE",
+};
+
+function stubController(
+  overrides: Partial<ProductConversationController>,
+): ProductConversationController {
+  return {
+    listRef: { current: null },
+    messages: [
+      {
+        id: "m-asst-1",
+        role: "assistant",
+        content:
+          "Confirmez-vous le démarrage de Delivery ? RECOMMANDATION — PAS UNE DÉCISION HUMAINE. CONTINUE — cognition propose-only, pas d'escalade d'autorité. READY_NO_GATE.",
+      },
+    ],
+    draft: "",
+    setDraft: vi.fn(),
+    toolEvents: [],
+    uiState: "ANSWERED",
+    error: null,
+    modeLabel: "fixture",
+    ephemeralNotice: "notice",
+    lrMaterializeNotice: null,
+    lrMaterializeCode: null,
+    f2: {
+      turnKind: "f2_proposal",
+      intentClass: "actionable",
+      qualification: QUALIFICATION,
+      proposal: PROPOSAL,
+      decision: null,
+      labels: {
+        recommendation: "RECOMMANDATION",
+        proposition: "PROPOSITION",
+        decisionRequired: null,
+        decisionTaken: null,
+        noExecution: "AUCUNE EXÉCUTION",
+      },
+      executionBlocked: false,
+      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    },
+    activeProposal: PROPOSAL,
+    reservesText: "",
+    setReservesText: vi.fn(),
+    f3Prepare: null,
+    f3M3Resolved: null,
+    f3Execute: null,
+    durableEvidenceOutcome: null,
+    durableRehydrateError: null,
+    focusTurnId: null,
+    clearFocusTurn: vi.fn(),
+    busy: false,
+    blocked: false,
+    canSend: true,
+    stopAvailable: false,
+    stopCurrentResponse: vi.fn(),
+    gateOpen: false,
+    recommendationFreshness: "none",
+    qualificationFreshness: {
+      status: "current",
+      label: "Recommandation à jour",
+    },
+    durableOutcomeFreshness: "none",
+    canPrepareResolvedM3: false,
+    canPrepareLegacyFixture: false,
+    canConfirmResolvedM3: false,
+    canConfirmLegacyFixture: false,
+    canRefreshResolvedM3Running: false,
+    sendMessage: vi.fn(),
+    decide: vi.fn(),
+    prepareResolvedM3: vi.fn(),
+    prepareLegacyFixture: vi.fn(),
+    confirmAndExecuteResolvedM3: vi.fn(),
+    confirmAndExecuteLegacyFixture: vi.fn(),
+    refreshResolvedM3RunningAttempt: vi.fn(),
+    retryLastUserMessage: vi.fn(),
+    reservationResolutionProposal: null,
+    transcriptAvailability: "available",
+    openContinuityPresentation: null,
+    journalEntries: [],
+    journalCycleInstanceId: null,
+    selectedJournalEntryId: null,
+    setSelectedJournalEntryId: vi.fn(),
+    focusJournalExchanges: vi.fn(),
+    focusTranscriptTurn: vi.fn(),
+    refreshConversationContinuity: vi.fn(),
+    armReinstructionOfProposalId: vi.fn(),
+    armedReinstructionOfProposalId: null,
+    armReservationInteractionContext: vi.fn(),
+    armedReservationInteractionContext: null,
+    clearReservationResolutionProposal: vi.fn(),
+    ...overrides,
+  } as ProductConversationController;
+}
+
+/** Strip sr-only / aria-hidden nodes so assertions match Pilote-visible copy. */
+function pilotVisibleText(el: HTMLElement): string {
+  const clone = el.cloneNode(true) as HTMLElement;
+  clone
+    .querySelectorAll(
+      '[class*="srOnly"], [class*="sr-only"], [aria-hidden="true"]',
+    )
+    .forEach((node) => node.remove());
+  return (clone.textContent || "").replace(/\s+/g, " ").trim();
+}
+
+describe("P6-HQA-UI-04 pilot-facing Recommendation / Proposal", () => {
+  it("T01/T02/T03 — READY_NO_GATE, processLocalNotice, IDs not visible on nominal path", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    const proposal = screen.getByTestId("project-assistant-proposal");
+    const qual = screen.getByTestId("project-assistant-qualification");
+    const visible = `${pilotVisibleText(qual)}\n${pilotVisibleText(proposal)}`;
+    expect(visible).not.toMatch(/READY_NO_GATE/);
+    expect(visible).not.toMatch(/F2 S['’]ARRÊTE ICI/);
+    expect(visible).not.toMatch(/Product SQLite/i);
+    expect(visible).not.toMatch(/TEMPORARY WITH EXIT/i);
+    expect(visible).not.toMatch(/lps:hq01/);
+    expect(visible).not.toMatch(/prop:f2/);
+    expect(visible).not.toMatch(/processLocalNotice/i);
+    const notice = screen.getByTestId("f2-process-local-notice");
+    expect(notice.className).toMatch(/srOnly|sr-only/i);
+    expect(screen.queryByText(/Détails techniques/i)).toBeNull();
+    expect(screen.getByTestId("f2-proposal-id")).toHaveAttribute(
+      "data-proposal-status",
+      "READY_NO_GATE",
+    );
+  });
+
+  it("T04/T05/T06 — Recommendation and Proposal keep distinct identities; not HumanDecision", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    expect(screen.getByTestId("project-assistant-qualification")).toHaveAttribute(
+      "data-ui05-object",
+      "recommendation",
+    );
+    expect(screen.getByTestId("project-assistant-proposal")).toHaveAttribute(
+      "data-ui05-object",
+      "proposal",
+    );
+    expect(screen.getByTestId("f2-cycle")).toHaveTextContent(
+      /Démarrer le cycle Delivery/i,
+    );
+    expect(screen.getByTestId("f2-proposal-main")).toHaveTextContent(
+      /Démarrer le cycle Delivery/i,
+    );
+    const visible = pilotVisibleText(document.body);
+    expect(visible).not.toMatch(/\bHumanDecision\b/);
+    expect(visible).toMatch(/recommandation n.est pas une décision/i);
+  });
+
+  it("T09/T10 — next action is conversational when no gate; no fake decision CTA", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    // UI05: next-action lives in progressive disclosure — open Proposal first.
+    fireEvent.click(screen.getByTestId("f2-proposal-open"));
+    const next = screen.getByTestId("f2-proposal-next-action");
+    expect(next).toHaveAttribute("data-next-kind", "conversation");
+    expect(next).toHaveTextContent(/poursuivre avec Nora/i);
+    expect(next).not.toHaveTextContent(/F2 S['’]ARRÊTE/i);
+    expect(screen.getByTestId("f2-gate-required")).toHaveTextContent(
+      /Aucune décision structurée/i,
+    );
+    expect(screen.queryByTestId("project-assistant-gate")).toBeNull();
+    expect(
+      screen.queryByRole("button", { name: /Approuver/i }),
+    ).toBeNull();
+  });
+
+  it("T07 — Confirmation path remains distinct when gate is open (legacy only)", () => {
+    render(
+      <ConversationSurface
+        exposeLegacyAuthorityPath
+        controller={stubController({
+          gateOpen: true,
+          activeProposal: { ...PROPOSAL, morrisGateRequired: true, status: "DECISION_REQUIRED" },
+          f2: {
+            turnKind: "f2_proposal",
+            intentClass: "actionable",
+            qualification: QUALIFICATION,
+            proposal: {
+              ...PROPOSAL,
+              morrisGateRequired: true,
+              status: "DECISION_REQUIRED",
+            },
+            decision: null,
+            labels: {
+              recommendation: "RECOMMANDATION",
+              proposition: "PROPOSITION",
+              decisionRequired: "DÉCISION REQUISE",
+              decisionTaken: null,
+              noExecution: "AUCUNE EXÉCUTION",
+            },
+            executionBlocked: false,
+            processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+          },
+        })}
+      />,
+    );
+    expect(screen.getByTestId("project-assistant-gate")).toBeInTheDocument();
+    expect(screen.getByTestId("f2-process-local-notice").className).not.toMatch(
+      /srOnly|sr-only/i,
+    );
+  });
+
+  it("T11/T12 — business essentials preserved; resilient when optional fields missing", () => {
+    const sparse = projectPilotRecommendationCard({
+      cycleLabel: "Delivery / implémentation",
+      recommendedProfile: "Standard",
+      rationale: null,
+      cycleStatus: "proposed",
+    });
+    expect(sparse.recommendation).toMatch(/Delivery/i);
+    expect(sparse.why).toBeTruthy();
+    expect(sparse.state).toMatch(/pas encore démarré/i);
+    expect(sparse.showProfile).toBe(false);
+
+    const proposal = projectPilotProposalCard({
+      rephrasedRequest: "Préparer le livrable",
+      morrisGateRequired: false,
+      status: "READY_NO_GATE",
+      nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
+      cycleLabel: "Delivery / implémentation",
+    });
+    expect(proposal.proposition).toMatch(/livrable/i);
+    expect(proposal.nextActionKind).toBe("conversation");
+    expect(proposal.nextAction).not.toMatch(/READY_NO_GATE|F2/);
+  });
+
+  it("T08/T20 — projection does not invent cycle activation or authority", () => {
+    const card = projectPilotProposalCard({
+      rephrasedRequest: "Démarrer Delivery",
+      morrisGateRequired: false,
+      status: "READY_NO_GATE",
+      nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
+      cycleLabel: "Delivery / implémentation",
+      cycleStatus: "proposed",
+    });
+    expect(card.nextAction).toMatch(/pas encore/i);
+    expect(card.nextActionKind).toBe("conversation");
+    expect(card.agreement).toMatch(/Aucune décision structurée/i);
+  });
+
+  it("scrubs anti scope creep / silent REAL / Evidence in Pourquoi", () => {
+    const card = projectPilotRecommendationCard({
+      cycleLabel: "Delivery / implémentation",
+      recommendedProfile: "Standard",
+      rationale:
+        "Guider une implémentation bornée — anti scope creep, silent REAL, et « done » sans Evidence.",
+      cycleStatus: "proposed",
+    });
+    expect(card.why).not.toMatch(/anti scope creep|silent REAL|\bEvidence\b/i);
+    expect(card.why).toMatch(/dérive de périmètre|preuve/i);
+    expect(card.state).toBe("Le cycle n'a pas encore démarré.");
+  });
+
+  it("narration — F2 footer jargon softened at display boundary", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    const turn = screen.getByTestId("project-assistant-turn-assistant");
+    const shown = within(turn).getByText(/Confirmez-vous/i);
+    expect(shown.textContent).not.toMatch(/READY_NO_GATE/);
+    expect(shown.textContent).not.toMatch(/cognition propose-only/i);
+    expect(shown.textContent).not.toMatch(
+      /RECOMMANDATION — PAS UNE DÉCISION HUMAINE/i,
+    );
+    const raw =
+      "Texte utile. CONTINUE — cognition propose-only, pas d'escalade d'autorité. READY_NO_GATE.";
+    expect(formatNoraAssistantDisplayText(raw)).not.toMatch(/READY_NO_GATE|propose-only/i);
+    expect(formatNoraAssistantDisplayText(raw)).toMatch(/Texte utile/);
+  });
+
+  it("T21 — legacy/diagnostic path still exposes technical notice when requested", () => {
+    render(
+      <ConversationSurface
+        exposeLegacyAuthorityPath
+        controller={stubController({})}
+      />,
+    );
+    expect(screen.getAllByText(/Détails techniques/i).length).toBeGreaterThan(0);
+    expect(screen.getByTestId("f2-process-local-notice")).toHaveTextContent(
+      /SQLite|processus/i,
+    );
+    expect(screen.getByTestId("f2-no-execution")).toHaveTextContent(
+      "AUCUNE EXÉCUTION",
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui05.compactObjectCards.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui05.compactObjectCards.ui.test.tsx
new file mode 100644
index 00000000..6b3005e3
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui05.compactObjectCards.ui.test.tsx
@@ -0,0 +1,352 @@
+/** @vitest-environment jsdom */
+/**
+ * P6-HQA-UI05 — compact Recommendation / Proposal / ExecutionContract objects
+ * (Figma 46:98 / 46:107 progressive disclosure).
+ */
+import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
+import { afterEach, describe, expect, it, vi } from "vitest";
+import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
+import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
+import type { ProposalDto } from "@/features/project-assistant/f2/types";
+import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
+import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
+
+afterEach(() => {
+  cleanup();
+});
+
+const QUALIFICATION = {
+  cycleTypeId: "cycle:delivery",
+  cycleLabel: "Delivery / implémentation",
+  recommendedProfile: "Standard",
+  rationale: "default_standard",
+  criticalSignalsPresent: false,
+  requiresJustificationForCritical: false,
+  capitalizationViaCycleTypeId: false,
+  isMorrisDecision: false as const,
+  catalogVersion: "1",
+  catalogHash: "h",
+  detailedStatus: "ok",
+  disclosures: [],
+  signals: {
+    structuralChange: false,
+    securityImpact: false,
+    architectureImpact: false,
+    dataImpact: false,
+    irreversible: false,
+    lowRiskBounded: true,
+  },
+  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE" as const,
+  cycleInstanceId: "cyc:ui05-proposed",
+  cycleStatus: "proposed",
+};
+
+const PROPOSAL: ProposalDto = {
+  proposalId: "prop:f2:ui05",
+  status: "READY_NO_GATE",
+  rephrasedRequest:
+    "Démarrer le cycle Delivery pour produire, revoir et valider le livrable.",
+  objective: "Démarrer le cycle Delivery.",
+  cycleTypeId: "cycle:delivery",
+  recommendedProfile: "Standard",
+  rationale: "default_standard",
+  scope: "Qualification et préparation du démarrage Delivery",
+  outOfScope: ["Cursor REAL", "écriture Git"],
+  activatedBlocks: [],
+  expectedOutcome: "Cycle Delivery prêt à être démarré.",
+  sources: [],
+  risks: [],
+  reservations: [],
+  stopConditions: ["AUCUNE EXÉCUTION"],
+  morrisGateRequired: false,
+  nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
+  contextSnapshot: {
+    projectId: "prj:ui05",
+    lpsId: "lps:ui05",
+    lpsVersion: 3,
+    doctrineDigest: "doctrine:test",
+    activeCycleInstanceId: null,
+  },
+  processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+  executionForbidden: true,
+  noExecutingStatus: true,
+  agentBinding: "NOT_AVAILABLE",
+};
+
+const SYNTHESIS = {
+  synthesisId: "syn:ui05",
+  title: "Synthèse — Mise à jour de l'espace projet",
+  verdictLabel: "indetermine",
+  sections: {
+    summary: "Portée limitée à deux fichiers. Confirmation potentiellement requise.",
+    verdict: "Indéterminé",
+    evidence: "",
+    next: "",
+    risks: "",
+  },
+} as unknown as ProductSynthesisProjection;
+
+function stubController(
+  overrides: Partial<ProductConversationController>,
+): ProductConversationController {
+  return {
+    listRef: { current: null },
+    messages: [],
+    draft: "",
+    setDraft: vi.fn(),
+    toolEvents: [],
+    uiState: "ANSWERED",
+    error: null,
+    modeLabel: "fixture",
+    ephemeralNotice: "notice",
+    lrMaterializeNotice: null,
+    lrMaterializeCode: null,
+    f2: {
+      turnKind: "f2_proposal",
+      intentClass: "actionable",
+      qualification: QUALIFICATION,
+      proposal: PROPOSAL,
+      decision: null,
+      labels: {
+        recommendation: "RECOMMANDATION",
+        proposition: "PROPOSITION",
+        decisionRequired: null,
+        decisionTaken: null,
+        noExecution: "AUCUNE EXÉCUTION",
+      },
+      executionBlocked: false,
+      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    },
+    activeProposal: PROPOSAL,
+    reservesText: "",
+    setReservesText: vi.fn(),
+    f3Prepare: null,
+    f3M3Resolved: null,
+    f3Execute: null,
+    durableEvidenceOutcome: null,
+    durableRehydrateError: null,
+    focusTurnId: null,
+    clearFocusTurn: vi.fn(),
+    busy: false,
+    blocked: false,
+    canSend: true,
+    stopAvailable: false,
+    stopCurrentResponse: vi.fn(),
+    gateOpen: false,
+    recommendationFreshness: "none",
+    qualificationFreshness: {
+      status: "current",
+      label: "Recommandation à jour",
+    },
+    durableOutcomeFreshness: "none",
+    canPrepareResolvedM3: false,
+    canPrepareLegacyFixture: false,
+    canConfirmResolvedM3: false,
+    canConfirmLegacyFixture: false,
+    canRefreshResolvedM3Running: false,
+    sendMessage: vi.fn(),
+    decide: vi.fn(),
+    prepareResolvedM3: vi.fn(),
+    prepareLegacyFixture: vi.fn(),
+    confirmAndExecuteResolvedM3: vi.fn(),
+    confirmAndExecuteLegacyFixture: vi.fn(),
+    refreshResolvedM3RunningAttempt: vi.fn(),
+    retryLastUserMessage: vi.fn(),
+    reservationResolutionProposal: null,
+    transcriptAvailability: "available",
+    openContinuityPresentation: null,
+    journalEntries: [],
+    journalCycleInstanceId: null,
+    selectedJournalEntryId: null,
+    setSelectedJournalEntryId: vi.fn(),
+    focusJournalExchanges: vi.fn(),
+    focusTranscriptTurn: vi.fn(),
+    refreshConversationContinuity: vi.fn(),
+    armReinstructionOfProposalId: vi.fn(),
+    armedReinstructionOfProposalId: null,
+    armReservationInteractionContext: vi.fn(),
+    armedReservationInteractionContext: null,
+    clearReservationResolutionProposal: vi.fn(),
+    ...overrides,
+  } as ProductConversationController;
+}
+
+function pilotVisibleText(el: HTMLElement): string {
+  const clone = el.cloneNode(true) as HTMLElement;
+  clone
+    .querySelectorAll(
+      '[class*="srOnly"], [class*="sr-only"], [aria-hidden="true"]',
+    )
+    .forEach((node) => node.remove());
+  return (clone.textContent || "").replace(/\s+/g, " ").trim();
+}
+
+describe("P6-HQA-UI05 compact object cards", () => {
+  it("Recommendation closed by default — type/title/meta/status/Ouvrir", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    const card = screen.getByTestId("project-assistant-qualification");
+    expect(card).toHaveAttribute("data-ui05-object", "recommendation");
+    expect(card).toHaveAttribute("data-expanded", "false");
+    expect(within(card).getByText(/^Recommandation$/i)).toBeInTheDocument();
+    expect(screen.getByTestId("f2-cycle")).toHaveTextContent(/Delivery/i);
+    expect(screen.getByTestId("f2-recommendation-state")).toHaveTextContent(
+      /Candidat prêt|À examiner|pas encore démarré/i,
+    );
+    const open = screen.getByTestId("f2-recommendation-open");
+    expect(open).toHaveTextContent(/Ouvrir/i);
+    expect(open).toHaveAttribute("aria-expanded", "false");
+    expect(screen.queryByTestId("f2-recommendation-details")).toBeNull();
+    const visible = pilotVisibleText(card);
+    expect(visible).not.toMatch(/READY_NO_GATE/);
+    expect(visible).not.toMatch(/f2-rationale-technical/i);
+  });
+
+  it("Recommendation opens and closes; details restored", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
+    expect(screen.getByTestId("project-assistant-qualification")).toHaveAttribute(
+      "data-expanded",
+      "true",
+    );
+    expect(screen.getByTestId("f2-recommendation-details")).toBeInTheDocument();
+    expect(screen.getByTestId("f2-rationale")).toBeVisible();
+    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
+    expect(screen.queryByTestId("f2-recommendation-details")).toBeNull();
+  });
+
+  it("Proposal ≠ Recommendation; READY_NO_GATE ≠ DECISION_REQUIRED", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    const rec = screen.getByTestId("project-assistant-qualification");
+    const prop = screen.getByTestId("project-assistant-proposal");
+    expect(rec).toHaveAttribute("data-ui05-object", "recommendation");
+    expect(prop).toHaveAttribute("data-ui05-object", "proposal");
+    expect(screen.getByTestId("f2-proposal-status-label")).toHaveTextContent(
+      /Candidat prêt/i,
+    );
+    expect(pilotVisibleText(prop)).not.toMatch(/En attente de décision/);
+
+    cleanup();
+    render(
+      <ConversationSurface
+        controller={stubController({
+          activeProposal: {
+            ...PROPOSAL,
+            status: "DECISION_REQUIRED",
+            morrisGateRequired: true,
+          },
+          f2: {
+            turnKind: "f2_proposal",
+            intentClass: "actionable",
+            qualification: QUALIFICATION,
+            proposal: {
+              ...PROPOSAL,
+              status: "DECISION_REQUIRED",
+              morrisGateRequired: true,
+            },
+            decision: null,
+            labels: {
+              recommendation: "RECOMMANDATION",
+              proposition: "PROPOSITION",
+              decisionRequired: "DÉCISION REQUISE",
+              decisionTaken: null,
+              noExecution: "AUCUNE EXÉCUTION",
+            },
+            executionBlocked: false,
+            processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+          },
+        })}
+      />,
+    );
+    expect(screen.getByTestId("f2-proposal-status-label")).toHaveTextContent(
+      /En attente de décision/i,
+    );
+  });
+
+  it("Proposal progressive disclosure preserves next-action contract", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    expect(screen.queryByTestId("f2-proposal-details")).toBeNull();
+    fireEvent.click(screen.getByTestId("f2-proposal-open"));
+    const next = screen.getByTestId("f2-proposal-next-action");
+    expect(next).toHaveAttribute("data-next-kind", "conversation");
+    expect(next).toHaveTextContent(/Nora/i);
+    expect(screen.getByTestId("f2-gate-required")).toHaveTextContent(
+      /Aucune décision structurée/i,
+    );
+  });
+
+  it("ProductSynthesis alone is never an ExecutionContract / Action préparée", () => {
+    const onOpen = vi.fn();
+    render(
+      <ConversationSurface
+        controller={stubController({})}
+        latestSynthesis={SYNTHESIS}
+        onOpenSynthesis={onOpen}
+      />,
+    );
+    const synth = screen.getByTestId("conversation-synthesis-card");
+    expect(synth).toHaveAttribute("data-ui05-object", "synthesis");
+    expect(within(synth).getByText(/^Synthèse$/i)).toBeInTheDocument();
+    expect(screen.queryByTestId("conversation-prepared-action-card")).toBeNull();
+    expect(document.querySelector('[data-ui05-object="execution-contract"]')).toBeNull();
+    const visible = pilotVisibleText(synth);
+    expect(visible).not.toMatch(/Action préparée/i);
+    expect(visible).not.toMatch(/confirmation potentiellement requise/i);
+    fireEvent.click(screen.getByTestId("conversation-open-synthesis"));
+    expect(onOpen).toHaveBeenCalledWith("syn:ui05");
+    expect(screen.getByTestId("conversation-synthesis-details")).toBeInTheDocument();
+  });
+
+  it("true ExecutionContract projects Action préparée with Product status", () => {
+    render(
+      <ConversationSurface
+        controller={stubController({
+          governedExecutionContinuity: {
+            ok: true,
+            kind: "active",
+            decisionRef: "hd:ui05",
+            contract: {
+              executionContractId: "xct:ui05",
+              version: 1,
+              status: "validated",
+              action: "Mise à jour de l'espace projet",
+              target: "workspace",
+              scope: "Portée · 2 fichiers",
+              requiredAuthority: "N3",
+              constraints: [],
+              stopConditions: [],
+              requiredCapabilities: [],
+              reversibility: "réversible",
+              semanticFingerprint: "fp",
+              effectConfirmationRequired: false,
+              inspectionDisclosure: {},
+            },
+            inspection: { inspectionSufficient: true },
+          } as never,
+        })}
+      />,
+    );
+    const card = screen.getByTestId("conversation-prepared-action-card");
+    expect(card).toHaveAttribute("data-ui05-object", "execution-contract");
+    expect(card).toHaveAttribute("data-contract-status", "validated");
+    expect(within(card).getByText(/Action préparée/i)).toBeInTheDocument();
+    expect(within(card).getByText(/Prête à examiner/i)).toBeInTheDocument();
+    expect(within(card).getByText(/Mise à jour de l'espace projet/i)).toBeInTheDocument();
+    fireEvent.click(screen.getByTestId("conversation-open-prepared-action"));
+    expect(screen.getByTestId("conversation-prepared-action-details")).toBeInTheDocument();
+  });
+
+  it("absence of contract yields no phantom Action préparée card", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    expect(screen.queryByTestId("conversation-prepared-action-card")).toBeNull();
+    expect(document.querySelector('[data-ui05-object="execution-contract"]')).toBeNull();
+  });
+
+  it("Ouvrir does not expose mutation START affordance", () => {
+    render(<ConversationSurface controller={stubController({})} />);
+    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
+    fireEvent.click(screen.getByTestId("f2-proposal-open"));
+    const visible = pilotVisibleText(document.body);
+    expect(visible).not.toMatch(/Démarrer maintenant/i);
+    expect(screen.queryByRole("button", { name: /^Démarrer$/i })).toBeNull();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
index 2884de1f..8265a574 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
@@ -654,7 +654,10 @@ describe("CORR-PROOF-01 D1 shared-session hybrid", () => {
     expect(r.ok).toBe(true);
     if (!r.ok) return;
     expect(r.f2?.proposal).toBeTruthy();
-    expect(r.text).toMatch(/Qualification SFIA|proposition/i);
+    // P6-HQA-COG-01 — persisted body is pilot-facing (propose/proposition), not admin F2 lead.
+    expect(r.text).toMatch(/propos(e|ition)|cycle/i);
+    expect(r.text).not.toMatch(/Qualification SFIA et proposition structurée générées/i);
+    expect(r.text).not.toMatch(/CONTINUE\s*[—–-]\s*cognition propose-only/i);

     const after = await readSessionPairs(projectId, sessionDbPath);
     expect(after.users - before.users).toBe(1);
@@ -667,7 +670,8 @@ describe("CORR-PROOF-01 D1 shared-session hybrid", () => {
     expect(cont.ok).toBe(true);
     if (!cont.ok) return;
     expect(provider.lastAnalysisBlob).toMatch(/Contexte conversationnel canonique/);
-    expect(provider.lastAnalysisBlob).toContain("Qualification SFIA");
+    // Canonical context carries the persisted pilot-facing narrative (same as r.text).
+    expect(provider.lastAnalysisBlob).toMatch(/propos(e|ition)|Profil recommand/i);
   });

   it("T11 — F2 authority/execution-blocked surface: exactly one canonical pair", async () => {
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
index cff3b3a3..3b4711ea 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
@@ -191,7 +191,10 @@ describe("F2 orchestration AC coverage", () => {
     expect(second.f2?.proposal?.morrisGateRequired).toBe(true);
     expect(second.f2?.proposal?.status).toBe("DECISION_REQUIRED");
     expect(second.mw5?.recommendationAllowed).toBe(true);
-    expect(second.text).toMatch(/aucune exécution/i);
+    // COG01 pilot-facing narrative: no-execution guarantee without legacy phrase lock.
+    expect(second.text).toMatch(
+      /aucune exécution|rien n['']a encore été exécuté|pas encore.*exécut/i,
+    );
   });

   it("fail-closed on invalid JSON / unknown cycle / incomplete signals", () => {
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts
new file mode 100644
index 00000000..f47df2f1
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts
@@ -0,0 +1,409 @@
+/**
+ * P6-HQA-COG-01 CORRECTION PASS 02 — R1/R2 adversarial discrimination.
+ * DETERMINISTIC PROVEN at composer seam. Human naturalness NOT CLOSED.
+ */
+
+import { describe, expect, it } from "vitest";
+import {
+  assessHistoryContinuity,
+  composeF2PilotFacingNarrative,
+  f2PilotNarrativeInvariants,
+  hasExplicitStartIntentForSubject,
+  interpretPilotNarrativeStance,
+  resolveNamedCycleRelativeToSubject,
+  type ComposeF2PilotFacingNarrativeInput,
+} from "@/features/project-assistant/f2/composeF2PilotFacingNarrative";
+import type { PilotDecisionCandidate } from "@/features/project-assistant/f2/types";
+
+function base(
+  overrides: Partial<ComposeF2PilotFacingNarrativeInput> = {},
+): ComposeF2PilotFacingNarrativeInput {
+  return {
+    kind: "new_cycle_proposal",
+    presentation: "openai_live",
+    userContent: "Prépare un cycle Delivery pour livrer la note.",
+    history: [],
+    intentClass: "actionable",
+    objective: "Livrer la note de cadrage",
+    rephrasedRequest: "Formaliser un cycle Delivery pour la note",
+    cycleLabel: "Delivery",
+    recommendedProfile: "Standard",
+    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
+    ckcCognitiveRecommendation: undefined,
+    projectName: "P6-HQ-01",
+    projectObjective: "Exit proof Delivery",
+    activeCycleInstanceId: null,
+    lpsUnchanged: true,
+    morrisGateRequired: false,
+    executionBlocked: false,
+    mw5Disposition: "CONTINUE",
+    mw5EscalatePiloteText: null,
+    pilotDecisionCandidate: null,
+    productCurrentSubjectVerified: false,
+    priorSubjectStatus: null,
+    ...overrides,
+  };
+}
+
+const acceptRec: PilotDecisionCandidate = {
+  disposition: "accept",
+  targetKind: "current_recommendation",
+  rationale: "ok for recommendation",
+};
+
+const acceptPresented: PilotDecisionCandidate = {
+  disposition: "accept",
+  targetKind: "presented_subject",
+  rationale: "ok for presented subject",
+};
+
+const acceptAlt: PilotDecisionCandidate = {
+  disposition: "accept",
+  targetKind: "specific_alternative",
+  rationale: "choose alternative",
+};
+
+describe("P6-HQA-COG-01 CP02 — R1 subject identity of accept", () => {
+  it("T1 — accept recommendation ≠ accept_start", () => {
+    const stance = interpretPilotNarrativeStance({
+      userContent: "ok pour la recommandation",
+      cycleLabel: "Delivery",
+      pilotDecisionCandidate: acceptRec,
+    });
+    expect(stance.kind).toBe("accept_recommendation");
+
+    const text = composeF2PilotFacingNarrative(
+      base({
+        userContent: "ok pour la recommandation",
+        pilotDecisionCandidate: acceptRec,
+      }),
+    );
+    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
+    expect(text).toMatch(/accord sur la recommandation/i);
+    expect(text).toMatch(/pas encore un démarrage/i);
+    expect(text).not.toMatch(/intention de démarrer/i);
+  });
+
+  it("T2 — accept presented_subject ≠ accept_start", () => {
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "d'accord pour ce sujet",
+        cycleLabel: "Delivery",
+        pilotDecisionCandidate: acceptPresented,
+      }).kind,
+    ).toBe("accept_recommendation");
+  });
+
+  it("T3 — explicit start intent is recognized as accept_start", () => {
+    expect(
+      hasExplicitStartIntentForSubject(
+        "Je confirme le démarrage de Delivery",
+        "Delivery",
+      ),
+    ).toBe(true);
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "Je confirme le démarrage de Delivery.",
+        cycleLabel: "Delivery",
+        pilotDecisionCandidate: acceptRec,
+      }).kind,
+    ).toBe("accept_start");
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "J'accepte de démarrer Delivery.",
+        cycleLabel: "Delivery",
+      }).kind,
+    ).toBe("accept_start");
+  });
+
+  it("T4 — different cycle name (quoted or bare) → no false Delivery start", () => {
+    expect(
+      resolveNamedCycleRelativeToSubject(
+        "Je confirme le démarrage de Cadrage",
+        "Delivery",
+      ),
+    ).toBe("mismatch");
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "Je confirme le démarrage de Cadrage.",
+        cycleLabel: "Delivery",
+      }).kind,
+    ).toBe("ambiguous");
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "Je confirme le démarrage de « Cadrage ».",
+        cycleLabel: "Delivery",
+        pilotDecisionCandidate: acceptRec,
+      }).kind,
+    ).not.toBe("accept_start");
+  });
+
+  it("T5 — accepted alternative ≠ démarrage", () => {
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "je prends l'autre option",
+        cycleLabel: "Delivery",
+        pilotDecisionCandidate: acceptAlt,
+      }).kind,
+    ).toBe("ambiguous");
+  });
+
+  it("T6 — refuse / question / defer never promoted to accept_start", () => {
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "Non, ne démarre surtout pas Delivery.",
+        cycleLabel: "Delivery",
+        pilotDecisionCandidate: acceptRec,
+      }).kind,
+    ).toBe("refuse_start");
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
+        cycleLabel: "Delivery",
+        pilotDecisionCandidate: acceptRec,
+      }).kind,
+    ).toBe("question_status");
+    expect(
+      interpretPilotNarrativeStance({
+        userContent: "Je préfère attendre avant de lancer Delivery.",
+        cycleLabel: "Delivery",
+      }).kind,
+    ).toBe("defer_start");
+  });
+
+  it("accept recommendation without cycle label stays non-start", () => {
+    const text = composeF2PilotFacingNarrative(
+      base({
+        cycleLabel: null,
+        userContent: "ok pour la recommandation",
+        pilotDecisionCandidate: acceptRec,
+      }),
+    );
+    expect(text).toMatch(/pas encore un démarrage/i);
+    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
+  });
+});
+
+describe("P6-HQA-COG-01 CP02 — R2 currentness of continuity", () => {
+  it("T7 — new-turn proposalStatus does not create Product CURRENT continuity", () => {
+    const c = assessHistoryContinuity({
+      cycleLabel: "Delivery",
+      proposalStatus: "STALE",
+      productCurrentSubjectVerified: false,
+      history: [
+        {
+          role: "assistant",
+          content: "Je propose le cycle « Delivery ».",
+        },
+      ],
+    });
+    // proposalStatus ignored — history alone → hint, not product current / not stale via status
+    expect(c.kind).toBe("same_subject_history_hint");
+    expect(c.kind).not.toBe("same_subject_product_current");
+  });
+
+  it("T8 — old Delivery history ≠ same object CURRENT", () => {
+    const c = assessHistoryContinuity({
+      cycleLabel: "Delivery",
+      productCurrentSubjectVerified: false,
+      history: [
+        {
+          role: "assistant",
+          content:
+            "Je propose le cycle « Delivery ». Un cycle candidat est prêt.",
+        },
+      ],
+    });
+    expect(c.kind).toBe("same_subject_history_hint");
+
+    const text = composeF2PilotFacingNarrative(
+      base({
+        userContent: "Je confirme le démarrage de Delivery.",
+        history: [
+          {
+            role: "assistant",
+            content: "Je propose le cycle « Delivery ».",
+          },
+        ],
+        productCurrentSubjectVerified: false,
+      }),
+    );
+    // Must NOT claim repeated CURRENT agreement from history alone.
+    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
+    expect(text).toMatch(/intention de démarrer/i);
+  });
+
+  it("T9 — refused / stale / superseded prior subject", () => {
+    expect(
+      assessHistoryContinuity({
+        cycleLabel: "Delivery",
+        priorSubjectStatus: "REFUSED",
+        productCurrentSubjectVerified: false,
+        history: [],
+      }).kind,
+    ).toBe("refused_or_stale_hint");
+    expect(
+      assessHistoryContinuity({
+        cycleLabel: "Delivery",
+        priorSubjectStatus: "SUPERSEDED",
+        productCurrentSubjectVerified: false,
+      }).kind,
+    ).toBe("refused_or_stale_hint");
+
+    const text = composeF2PilotFacingNarrative(
+      base({
+        userContent: "Je confirme le démarrage de Delivery.",
+        priorSubjectStatus: "STALE",
+        history: [
+          {
+            role: "assistant",
+            content: "Je propose le cycle « Delivery ».",
+          },
+          {
+            role: "user",
+            content: "Non, ne démarre surtout pas Delivery.",
+          },
+        ],
+      }),
+    );
+    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
+    expect(text).toMatch(/refus|obsolète/i);
+  });
+
+  it("T10 — multiple Delivery mentions remain history hint without Product verify", () => {
+    const c = assessHistoryContinuity({
+      cycleLabel: "Delivery",
+      productCurrentSubjectVerified: false,
+      history: [
+        {
+          role: "assistant",
+          content: "Je propose le cycle « Delivery » (première).",
+        },
+        { role: "user", content: "pas maintenant" },
+        {
+          role: "assistant",
+          content: "Je propose le cycle « Delivery » (seconde).",
+        },
+      ],
+    });
+    expect(c.kind).toBe("same_subject_history_hint");
+  });
+
+  it("T11 — absent context → neutral formulation", () => {
+    expect(
+      assessHistoryContinuity({
+        cycleLabel: "Delivery",
+        history: [],
+        productCurrentSubjectVerified: false,
+      }).kind,
+    ).toBe("none");
+    const text = composeF2PilotFacingNarrative(
+      base({ userContent: "ok", history: [], pilotDecisionCandidate: null }),
+    );
+    // "ok" alone → ambiguous or neutral, never agreement-of-start
+    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
+  });
+
+  it("T12 — Product-verified subject allows CURRENT continuity wording", () => {
+    expect(
+      assessHistoryContinuity({
+        cycleLabel: "Delivery",
+        productCurrentSubjectVerified: true,
+        history: [],
+      }).kind,
+    ).toBe("same_subject_product_current");
+
+    const text = composeF2PilotFacingNarrative(
+      base({
+        userContent: "Je confirme le démarrage de Delivery.",
+        productCurrentSubjectVerified: true,
+        history: [
+          {
+            role: "assistant",
+            content: "Je propose le cycle « Delivery ».",
+          },
+        ],
+      }),
+    );
+    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(true);
+    expect(text).toMatch(/ne l'active pas|aucune activation/i);
+  });
+
+  it("Cadrage history + Delivery start → other_subject, no false CURRENT", () => {
+    expect(
+      assessHistoryContinuity({
+        cycleLabel: "Delivery",
+        history: [
+          {
+            role: "assistant",
+            content: "Je propose le cycle « Cadrage ».",
+          },
+        ],
+      }).kind,
+    ).toBe("other_subject");
+  });
+});
+
+describe("P6-HQA-COG-01 CP02 — governance / persistence / CP01 non-regression", () => {
+  it("T13 — no invented HD / activation / execution", () => {
+    const text = composeF2PilotFacingNarrative(
+      base({
+        userContent: "Je confirme le démarrage de Delivery.",
+        executionBlocked: true,
+        intentClass: "execution_request",
+      }),
+    );
+    const inv = f2PilotNarrativeInvariants(text);
+    expect(inv.claimsActivationAccomplished).toBe(false);
+    expect(text).not.toMatch(/HumanDecision enregistr/i);
+    expect(text).toMatch(/Rien n'a encore été exécuté/i);
+  });
+
+  it("T14 — live/test presentation parity", () => {
+    const live = composeF2PilotFacingNarrative(
+      base({ userContent: "ok pour la recommandation", pilotDecisionCandidate: acceptRec }),
+    );
+    const test = composeF2PilotFacingNarrative(
+      base({
+        presentation: "test_provider",
+        userContent: "ok pour la recommandation",
+        pilotDecisionCandidate: acceptRec,
+      }),
+    );
+    expect(test.replace(/^\[Mode test\]\s*/, "")).toBe(live);
+  });
+
+  it("T15 — CP01 refuse/question/defer/propose still correct", () => {
+    const refuse = composeF2PilotFacingNarrative(
+      base({ userContent: "Non, ne démarre surtout pas Delivery." }),
+    );
+    const question = composeF2PilotFacingNarrative(
+      base({
+        userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
+      }),
+    );
+    const defer = composeF2PilotFacingNarrative(
+      base({
+        userContent: "Je préfère attendre avant de lancer Delivery.",
+      }),
+    );
+    const propose = composeF2PilotFacingNarrative(base());
+    expect(f2PilotNarrativeInvariants(refuse).acknowledgesRefusal).toBe(true);
+    expect(question).toMatch(/aucun cycle n'est actuellement actif/i);
+    expect(defer).toMatch(/attendre|Aucun démarrage/i);
+    expect(propose).toMatch(/Je propose le cycle/i);
+    expect(f2PilotNarrativeInvariants(propose).hasEngineContinue).toBe(false);
+  });
+
+  it("same message, different Product active state", () => {
+    const msg = "Je confirme le démarrage de Delivery.";
+    const inactive = composeF2PilotFacingNarrative(
+      base({ userContent: msg, activeCycleInstanceId: null }),
+    );
+    const active = composeF2PilotFacingNarrative(
+      base({ userContent: msg, activeCycleInstanceId: "cycinst:1" }),
+    );
+    expect(inactive).toMatch(/pas actif|ne constitue pas/i);
+    expect(active).toMatch(/déjà actif/i);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
new file mode 100644
index 00000000..ff92e5c7
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts
@@ -0,0 +1,832 @@
+/** @vitest-environment node */
+/**
+ * P6-HQA-F01 — chat-first START gate (deterministic).
+ * Proves: start intent does not classify as free createCycle; legacy ≠ prepared;
+ * ambiguous prepared fail-closed; already-active recognized; anti-duplication via F2 send.
+ */
+
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  setConversationProviderForTests,
+  type ConversationProvider,
+  type ProviderChatMessage,
+  type ProviderCompletionResult,
+  type ProviderInputItem,
+  type ProviderRoundResult,
+} from "@/lib/platform/ai";
+import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
+import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+import {
+  chatFirstStartBlockMessage,
+  classifyChatFirstStartSituation,
+  isChatFirstCycleStartIntent,
+  resolveChatFirstStartRouting,
+} from "@/features/project-assistant/f2/resolveChatFirstCycleStartGate";
+import { interpretPilotNarrativeStance } from "@/features/project-assistant/f2/composeF2PilotFacingNarrative";
+import type { CycleInstance } from "@/lib/oa/cycle";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+
+function cycle(partial: Partial<CycleInstance> & { cycleInstanceId: string }): CycleInstance {
+  return {
+    schemaVersion: "0.1.0-oa",
+    cycleInstanceId: partial.cycleInstanceId,
+    cycleTypeId: partial.cycleTypeId ?? "cyc:delivery",
+    projectId: partial.projectId ?? "prj:test",
+    status: partial.status ?? "acknowledged",
+    profile: partial.profile ?? "Standard",
+    createdAt: partial.createdAt ?? "2026-01-01T00:00:00.000Z",
+    trajectoryId: partial.trajectoryId,
+    trajectoryVersion: partial.trajectoryVersion,
+    trajectoryStepId: partial.trajectoryStepId,
+    ckcResolutionRef: partial.ckcResolutionRef,
+    qualificationSignals: partial.qualificationSignals,
+  };
+}
+
+function lastUserContent(messages: ProviderChatMessage[]): string {
+  for (let i = messages.length - 1; i >= 0; i -= 1) {
+    if (messages[i]?.role === "user") return messages[i]!.content;
+  }
+  return "";
+}
+
+function demandeCourante(blob: string): string {
+  const marker = "Demande courante (à évaluer):";
+  const idx = blob.indexOf(marker);
+  if (idx < 0) return blob;
+  return blob.slice(idx + marker.length).trim();
+}
+
+class F01FakeProvider implements ConversationProvider {
+  readonly providerId = "fake-test";
+  private n = 0;
+
+  async completeStructured(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult> {
+    void input.schemaName;
+    void input.jsonSchema;
+    return this.complete(input.messages);
+  }
+
+  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
+    this.n += 1;
+    const current = demandeCourante(lastUserContent(messages));
+    const usage = {
+      inputTokens: 10,
+      outputTokens: 5,
+      totalTokens: 15,
+      model: "fake-test-model",
+      providerResponseId: `f01-${this.n}`,
+    };
+    const actionable = {
+      intentClass: "actionable",
+      candidateCycleTypeId: "cyc:delivery",
+      signals: {
+        structuralChange: false,
+        securityImpact: false,
+        architectureImpact: false,
+        dataImpact: false,
+        irreversible: false,
+        lowRiskBounded: true,
+      },
+      cognitiveWorkload: null,
+      contradictionCandidate: null,
+      challengeResponseAssessment: null,
+      objective: "Livrer la note",
+      scope: "Sans exécution",
+      rephrasedRequest: current.slice(0, 120),
+      outOfScope: ["Cursor"],
+      risks: [],
+      reservations: [],
+      stopConditions: ["AUCUNE EXÉCUTION"],
+      activatedBlocks: ["qualification", "proposition"],
+      expectedOutcome: "Proposition",
+      criticalJustification: null,
+      requestedOperation: null,
+      executionIntent: null,
+      continuationKind: null,
+      artifactMaterializationOperation: null,
+      pilotDecisionCandidate: null,
+    };
+    return {
+      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(actionable)}`,
+      usage,
+    };
+  }
+
+  async completeRound(input: {
+    items: ProviderInputItem[];
+    tools: unknown[];
+  }): Promise<ProviderRoundResult> {
+    void input.tools;
+    return {
+      kind: "message",
+      text: "[TEST/FAKE · NON LIVE] f01",
+      usage: {
+        inputTokens: 1,
+        outputTokens: 1,
+        totalTokens: 2,
+        model: "fake-test-model",
+        providerResponseId: "f01-round",
+      },
+    };
+  }
+}
+
+describe("P6-HQA-F01 isChatFirstCycleStartIntent", () => {
+  it("explicit démarrage → true; propose / ok recommandation → false", () => {
+    expect(
+      isChatFirstCycleStartIntent({
+        userContent: "Je confirme le démarrage du cycle Delivery déjà proposé.",
+        cycleLabel: "Delivery",
+      }),
+    ).toBe(true);
+    // Catalog label form must still match user "Delivery".
+    expect(
+      isChatFirstCycleStartIntent({
+        userContent:
+          "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
+        cycleLabel: "Delivery / implémentation",
+      }),
+    ).toBe(true);
+    expect(
+      isChatFirstCycleStartIntent({
+        userContent: "J'accepte de démarrer Delivery.",
+        cycleLabel: "Delivery",
+      }),
+    ).toBe(true);
+    expect(
+      isChatFirstCycleStartIntent({
+        userContent: "Prépare un cycle Delivery pour la note.",
+        cycleLabel: "Delivery",
+      }),
+    ).toBe(false);
+    expect(
+      isChatFirstCycleStartIntent({
+        userContent: "ok pour la recommandation",
+        cycleLabel: "Delivery",
+        pilotDecisionCandidate: {
+          disposition: "accept",
+          targetKind: "current_recommendation",
+          rationale: "ok",
+        },
+      }),
+    ).toBe(false);
+    expect(
+      isChatFirstCycleStartIntent({
+        userContent: "Non, ne démarre surtout pas Delivery.",
+        cycleLabel: "Delivery",
+      }),
+    ).toBe(false);
+  });
+
+  it("refuse / defer / question / late negation never promote START", () => {
+    const cases: Array<{ content: string; label?: string }> = [
+      {
+        content:
+          "Je confirme le démarrage de Delivery, mais finalement je refuse.",
+      },
+      {
+        content:
+          "Je confirme le démarrage du cycle Delivery, mais finalement non.",
+      },
+      { content: "Je préfère attendre avant de démarrer Delivery." },
+      { content: "Est-ce que Delivery est actif ?" },
+      {
+        content: "Je confirme le démarrage de Cadrage.",
+        label: "Delivery",
+      },
+      {
+        content: "ok pour la recommandation Delivery",
+        label: "Delivery / implémentation",
+      },
+    ];
+    for (const c of cases) {
+      expect(
+        isChatFirstCycleStartIntent({
+          userContent: c.content,
+          cycleLabel: c.label ?? "Delivery",
+          pilotDecisionCandidate:
+            c.content.startsWith("ok ")
+              ? {
+                  disposition: "accept",
+                  targetKind: "current_recommendation",
+                  rationale: "ok",
+                }
+              : null,
+        }),
+        c.content,
+      ).toBe(false);
+    }
+  });
+
+  it("structured accept + late negation / defer / question → never START", () => {
+    const structuredAccept = {
+      disposition: "accept" as const,
+      targetKind: "current_recommendation" as const,
+      rationale: "ok",
+    };
+    const adversarial = [
+      {
+        content:
+          "Je confirme le démarrage de Delivery, mais finalement non.",
+        stance: "refuse_start",
+      },
+      {
+        content:
+          "Je confirme le démarrage de Delivery, mais finalement je refuse.",
+        stance: "refuse_start",
+      },
+      {
+        content:
+          "Je confirme le démarrage de Delivery, mais pas maintenant.",
+        stance: "defer_start",
+      },
+      {
+        content: "Je confirme le démarrage de Delivery ?",
+        stance: "question_status",
+      },
+      {
+        content: "Je confirme le démarrage de Cadrage.",
+        stance: "ambiguous",
+      },
+    ];
+    for (const c of adversarial) {
+      const stance = interpretPilotNarrativeStance({
+        userContent: c.content,
+        cycleLabel: "Delivery",
+        pilotDecisionCandidate: structuredAccept,
+      });
+      expect(stance.kind, c.content).toBe(c.stance);
+      expect(
+        isChatFirstCycleStartIntent({
+          userContent: c.content,
+          cycleLabel: "Delivery",
+          pilotDecisionCandidate: structuredAccept,
+        }),
+        c.content,
+      ).toBe(false);
+      expect(
+        resolveChatFirstStartRouting({
+          userContent: c.content,
+          cycleLabel: "Delivery",
+          pilotDecisionCandidate: structuredAccept,
+        }).kind,
+        c.content,
+      ).toBe("suppress_mint");
+    }
+  });
+
+  it("hypothetical / ambiguous start discussion suppresses mint; prepare stays open", () => {
+    expect(
+      resolveChatFirstStartRouting({
+        userContent: "Peut-être démarrer Delivery.",
+        cycleLabel: "Delivery",
+      }).kind,
+    ).toBe("suppress_mint");
+    expect(
+      resolveChatFirstStartRouting({
+        userContent: "Faut-il démarrer Delivery ?",
+        cycleLabel: "Delivery",
+      }).kind,
+    ).toBe("suppress_mint");
+    expect(
+      resolveChatFirstStartRouting({
+        userContent: "Prépare un nouveau cycle Delivery pour un autre livrable.",
+        cycleLabel: "Delivery",
+      }).kind,
+    ).toBe("not_start_path");
+  });
+});
+
+describe("P6-HQA-F01 classifyChatFirstStartSituation", () => {
+  it("already active", () => {
+    expect(
+      classifyChatFirstStartSituation({
+        activeCycleInstanceId: "cyc:trj-active",
+        targetCycleTypeId: "cyc:delivery",
+        cycles: [],
+      }),
+    ).toEqual({
+      kind: "already_active",
+      activeCycleInstanceId: "cyc:trj-active",
+    });
+  });
+
+  it("unique COMPLETE prepared Delivery", () => {
+    const s = classifyChatFirstStartSituation({
+      activeCycleInstanceId: null,
+      targetCycleTypeId: "cyc:delivery",
+      cycles: [
+        cycle({
+          cycleInstanceId: "cyc:trj-prep-1",
+          trajectoryId: "trj:1",
+          trajectoryVersion: 2,
+          trajectoryStepId: "step:delivery",
+          status: "acknowledged",
+        }),
+        cycle({
+          cycleInstanceId: "cyc:f2-legacy-1",
+          status: "acknowledged",
+        }),
+      ],
+    });
+    expect(s).toEqual({
+      kind: "unique_prepared",
+      cycleInstanceId: "cyc:trj-prep-1",
+    });
+  });
+
+  it("ambiguous prepared → no auto-select", () => {
+    const s = classifyChatFirstStartSituation({
+      activeCycleInstanceId: null,
+      targetCycleTypeId: "cyc:delivery",
+      cycles: [
+        cycle({
+          cycleInstanceId: "cyc:trj-a",
+          trajectoryId: "trj:1",
+          trajectoryVersion: 1,
+          trajectoryStepId: "step:a",
+        }),
+        cycle({
+          cycleInstanceId: "cyc:trj-b",
+          trajectoryId: "trj:1",
+          trajectoryVersion: 1,
+          trajectoryStepId: "step:b",
+        }),
+      ],
+    });
+    expect(s.kind).toBe("ambiguous_prepared");
+  });
+
+  it("legacy unbound only (HQ-01-like) → not startable via chat gate", () => {
+    const s = classifyChatFirstStartSituation({
+      activeCycleInstanceId: null,
+      targetCycleTypeId: "cyc:delivery",
+      cycles: [
+        cycle({ cycleInstanceId: "cyc:f2-1" }),
+        cycle({ cycleInstanceId: "cyc:f2-2" }),
+        cycle({ cycleInstanceId: "cyc:f2-3" }),
+        cycle({ cycleInstanceId: "cyc:f2-4" }),
+        cycle({ cycleInstanceId: "cyc:f2-5" }),
+      ],
+    });
+    expect(s).toEqual({ kind: "legacy_unbound_only", count: 5 });
+  });
+
+  it("no prepared", () => {
+    expect(
+      classifyChatFirstStartSituation({
+        activeCycleInstanceId: null,
+        targetCycleTypeId: "cyc:delivery",
+        cycles: [],
+      }).kind,
+    ).toBe("no_prepared");
+  });
+
+  it("block messages never claim activation / invent HD", () => {
+    for (const code of [
+      "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
+      "NO_PREPARED_CYCLE",
+      "PREPARED_CYCLE_AMBIGUOUS",
+      "ACTIVE_CYCLE_PRESENT",
+    ]) {
+      const msg = chatFirstStartBlockMessage({
+        code,
+        cycleLabel: "Delivery",
+        legacyCount: 5,
+        preparedCount: 2,
+      });
+      expect(msg).toMatch(/Aucun (nouveau )?cycle|déjà actif/i);
+      expect(msg).not.toMatch(/HumanDecision enregistr/i);
+      expect(msg).not.toMatch(/cycle est maintenant actif/i);
+    }
+  });
+});
+
+describe("P6-HQA-F01 F2 send anti-duplication (legacy unbound)", () => {
+  const tempDirs: string[] = [];
+  let projectId = "";
+  let sessionDbPath = "";
+  let provider: F01FakeProvider;
+  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
+
+  beforeEach(async () => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    delete process.env.OPENAI_API_KEY;
+    delete process.env.OPENAI_MODEL;
+    provider = new F01FakeProvider();
+    setConversationProviderForTests(provider);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f01-"));
+    tempDirs.push(dir);
+    sessionDbPath = path.join(dir, "nora-session.sqlite");
+    const runtime = getRuntimeApplicationService({
+      productDbPath: path.join(dir, "oa-product.sqlite"),
+      auditMode: "noop",
+      nowIso: "2026-09-06T15:00:00.000Z",
+    });
+    const created = await runtime.createProject({
+      name: "F01 Delivery start",
+      objective: "Exit proof Delivery",
+      context: "P6-HQA-F01",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "F01",
+      idempotencyKey: `idem:f01-${Date.now()}-${Math.random()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("F01 setup failed");
+    projectId = created.projectId;
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    while (tempDirs.length) {
+      const d = tempDirs.pop();
+      if (d) fs.rmSync(d, { recursive: true, force: true });
+    }
+    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
+    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
+  });
+
+  it("propose then start-confirm: no N+1 unbound cycle; honest block; LPS inactive", async () => {
+    const runtime = getRuntimeApplicationService();
+    const propose = await orchestrateAssistantSend({
+      projectId,
+      content: "Prépare un cycle Delivery pour livrer la note.",
+      sessionDbPath,
+      provider,
+    });
+    expect(propose.ok).toBe(true);
+    if (!propose.ok) return;
+
+    const cyclesAfterPropose = await runtime.oa!.cycleServices.cycles.listByProject(
+      projectId,
+    );
+    expect(cyclesAfterPropose.length).toBe(1);
+    expect(cyclesAfterPropose[0]!.cycleInstanceId.startsWith("cyc:f2-")).toBe(
+      true,
+    );
+
+    const confirm = await orchestrateAssistantSend({
+      projectId,
+      content:
+        "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
+      sessionDbPath,
+      provider,
+    });
+    expect(confirm.ok).toBe(true);
+    if (!confirm.ok) return;
+
+    const cyclesAfterConfirm = await runtime.oa!.cycleServices.cycles.listByProject(
+      projectId,
+    );
+    expect(cyclesAfterConfirm.length).toBe(1);
+    expect(confirm.text).toMatch(/Aucun cycle supplémentaire n'a été créé|ne sont pas liés/i);
+    expect(confirm.text).not.toMatch(/est maintenant actif/i);
+
+    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
+      { projectId },
+    );
+    expect(lps.ok).toBe(true);
+    if (lps.ok) {
+      expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
+    }
+
+    // Repeated confirm still does not mint.
+    const again = await orchestrateAssistantSend({
+      projectId,
+      content: "Je confirme le démarrage de Delivery.",
+      sessionDbPath,
+      provider,
+    });
+    expect(again.ok).toBe(true);
+    const cyclesFinal = await runtime.oa!.cycleServices.cycles.listByProject(
+      projectId,
+    );
+    expect(cyclesFinal.length).toBe(1);
+  });
+
+  it("contradictory start+refuse: no START, no mint, LPS inactive", async () => {
+    const runtime = getRuntimeApplicationService();
+    await orchestrateAssistantSend({
+      projectId,
+      content: "Prépare un cycle Delivery pour livrer la note.",
+      sessionDbPath,
+      provider,
+    });
+    const before = await runtime.oa!.cycleServices.cycles.listByProject(projectId);
+    const refuse = await orchestrateAssistantSend({
+      projectId,
+      content:
+        "Je confirme le démarrage de Delivery, mais finalement je refuse.",
+      sessionDbPath,
+      provider,
+    });
+    expect(refuse.ok).toBe(true);
+    if (!refuse.ok) return;
+    const after = await runtime.oa!.cycleServices.cycles.listByProject(projectId);
+    expect(after.length).toBe(before.length);
+    expect(refuse.text).not.toMatch(/est maintenant actif/i);
+    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
+      { projectId },
+    );
+    expect(lps.ok && (lps.livingProjectState.activeCycleInstanceId ?? null)).toBe(
+      null,
+    );
+  });
+});
+
+describe("P6-HQA-F01 START success via orchestrateAssistantSend (prepared)", () => {
+  const tempDirs: string[] = [];
+  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
+  const previousAuth = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
+  const previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
+  let provider: F01FakeProvider;
+
+  const APP_ROOT = path.resolve(__dirname, "../..");
+  const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+  const SCHEMAS = path.resolve(
+    APP_ROOT,
+    "../sfia-v3-modeled/v3-native-option-a/schemas",
+  );
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
+    delete process.env.OPENAI_API_KEY;
+    delete process.env.OPENAI_MODEL;
+    provider = new F01FakeProvider();
+    setConversationProviderForTests(provider);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    while (tempDirs.length) {
+      const d = tempDirs.pop();
+      if (d) fs.rmSync(d, { recursive: true, force: true });
+    }
+    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
+    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
+    if (previousAuth === undefined) {
+      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
+    } else {
+      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousAuth;
+    }
+    if (previousPilot === undefined) {
+      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
+    } else {
+      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
+    }
+  });
+
+  it("unique COMPLETE prepared Delivery → START once; LPS/CycleInstance coherent; no mint; turn not proposal", async () => {
+    const {
+      prepareCandidateTrajectoryFromCurrentRecommendation,
+      prepareCycleFromValidatedTrajectory,
+      materializeLifecycleRecommendationFromStructuredOutput,
+      resolveTrajectoryBootstrapPresence,
+      NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+      classifyTrajectoryBinding,
+    } = await import("@/lib/oa/cycle");
+    const {
+      approveCandidateTrajectory,
+      buildPreCycleCandidateApprovalPresentation,
+    } = await import(
+      "@/features/project-assistant/approveCandidateTrajectory"
+    );
+    const { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } = await import(
+      "@/lib/nora-cognitive-runtime/noraProductTurnOutputType"
+    );
+
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f01-start-"));
+    tempDirs.push(dir);
+    const productDbPath = path.join(dir, "oa-product.sqlite");
+    const sessionDbPath = path.join(dir, "nora-session.sqlite");
+    const runtime = getRuntimeApplicationService({
+      registryRoot: FIXTURES,
+      schemasRoot: SCHEMAS,
+      productDbPath,
+      auditMode: "noop",
+      nowIso: "2026-09-10T08:00:00.000Z",
+    });
+    const oa = runtime.oa!;
+    const created = await runtime.createProject({
+      name: "F01 START success",
+      objective: "Livrer Delivery gouverné",
+      context: "P6-HQA-F01 START",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "F01S",
+      idempotencyKey: `idem:f01-start-${Date.now()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("create failed");
+    const projectId = created.projectId;
+
+    const signals = {
+      structuralChange: false,
+      securityImpact: false,
+      architectureImpact: false,
+      dataImpact: false,
+      irreversible: false,
+      lowRiskBounded: true,
+    };
+    const lr = {
+      intent: "NEXT_CYCLE" as const,
+      statement: "Envisager un Delivery.",
+      subjectCycleInstanceId: null,
+      targetCycleInstanceId: null,
+      targetCycleTypeId: "cyc:delivery",
+      rationale: "Prochain travail gouverné supportable.",
+      authority: "none" as const,
+      isHumanDecision: false as const,
+      qualificationSignals: { ...signals },
+    };
+    const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
+    const decisions0 = await oa.decisionServices.decisions.listByProject(
+      projectId,
+    );
+    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps0.ok).toBe(true);
+    if (!lps0.ok) throw new Error("lps0");
+    const presence = await resolveTrajectoryBootstrapPresence(
+      oa.cycleServices.trajectories,
+      projectId,
+    );
+    const project = await oa.projectServices.getProject.execute({ projectId });
+    const doctrine = project.ok ? project.project.doctrinePackageRef : null;
+    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
+      projectId,
+      structuredOutput: {
+        narrative: "Narrative Delivery recommandée.",
+        preCycleRoutingAssessment: {
+          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
+        },
+        lifecycleRecommendation: lr,
+      },
+      updateEpistemicState: oa.cycleServices.updateEpistemicState,
+      facts: {
+        cycles: cycles0,
+        lpsActiveCycleInstanceId: lps0.livingProjectState.activeCycleInstanceId,
+        lpsVersion: lps0.livingProjectState.version,
+        doctrinePackageId: doctrine?.doctrinePackageId ?? "pkg:studio-v3-oa",
+        doctrinePackageVersion: doctrine?.version ?? "1.0.0",
+        doctrinePackageDigest: doctrine?.digest ??
+          ("sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as never),
+        trajectory: null,
+        trajectoryBootstrapPresence: presence,
+        decisions: decisions0,
+        evidence: [],
+        epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
+      },
+      producedAt: "2026-09-10T08:01:00.000Z",
+      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+    });
+    expect(mat.materialization?.ok).toBe(true);
+
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: {
+        trajectories: oa.cycleServices.trajectories,
+        createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
+        updateEpistemicState: oa.cycleServices.updateEpistemicState,
+        runInTransaction: ((fn: () => Promise<unknown>) =>
+          oa.projectServices.store.runInTransaction(fn)) as <T>(
+          fn: () => Promise<T>,
+        ) => Promise<T>,
+        listEpistemicByProject: (pid: string) =>
+          oa.cycleServices.epistemic.listByProject(pid),
+        listCyclesByProject: (pid: string) =>
+          oa.cycleServices.cycles.listByProject(pid),
+        listDecisionsByProject: (pid: string) =>
+          oa.decisionServices.decisions.listByProject(pid),
+        listEvidenceByProject: (pid: string) =>
+          oa.evidenceReviewServices.repository.listByProject(pid),
+        getCurrentLps: (pid: string) =>
+          oa.projectServices.getCurrentLivingProjectState.execute({
+            projectId: pid,
+          }),
+        getProjectDoctrinePin: async (pid: string) => {
+          const p = await oa.projectServices.getProject.execute({
+            projectId: pid,
+          });
+          if (!p.ok) return null;
+          const pin = p.project.doctrinePackageRef;
+          return pin
+            ? {
+                doctrinePackageId: pin.doctrinePackageId,
+                version: pin.version,
+                digest: pin.digest,
+              }
+            : null;
+        },
+        newTrajectoryId: () => "trj:f01-start",
+        newStepId: () => "stp:f01-start",
+        newProvenanceObservationId: () => "epi:trj-prov-f01-start",
+        correlationId: "cor:f01-start-bridge",
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) throw new Error("bridge failed");
+
+    const presentation = await buildPreCycleCandidateApprovalPresentation({
+      oa,
+      projectId,
+    });
+    expect(presentation.ok).toBe(true);
+    if (!presentation.ok || !presentation.presentation) {
+      throw new Error("presentation missing");
+    }
+    const approved = await approveCandidateTrajectory({
+      oa,
+      projectId,
+      presentationDigest: presentation.presentation.presentationDigest,
+      forceLocalAuthority: true,
+    });
+    expect(approved.ok).toBe(true);
+    if (!approved.ok) throw new Error("approve failed");
+
+    const prep = await prepareCycleFromValidatedTrajectory({
+      oa,
+      projectId,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(`prepare failed: ${prep.code}`);
+    expect(classifyTrajectoryBinding(prep.cycle)).toBe(
+      "COMPLETE_TRAJECTORY_BOUND",
+    );
+    const preparedId = prep.cycle.cycleInstanceId;
+
+    const cyclesBefore = await oa.cycleServices.cycles.listByProject(projectId);
+    expect(cyclesBefore.length).toBe(1);
+
+    const start = await orchestrateAssistantSend({
+      projectId,
+      content:
+        "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
+      sessionDbPath,
+      provider,
+    });
+    expect(start.ok).toBe(true);
+    if (!start.ok) return;
+
+    expect(start.text).toMatch(/est maintenant actif/i);
+    expect(start.text).toMatch(new RegExp(preparedId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
+    expect(start.ok && start.f2?.turnKind).toBe("f1_informative");
+    expect(start.ok && start.f2?.turnKind).not.toBe("f2_proposal");
+
+    const cyclesAfter = await oa.cycleServices.cycles.listByProject(projectId);
+    expect(cyclesAfter.length).toBe(1);
+    expect(cyclesAfter[0]!.cycleInstanceId).toBe(preparedId);
+    expect(cyclesAfter[0]!.status).toBe("active");
+
+    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lpsAfter.ok).toBe(true);
+    if (lpsAfter.ok) {
+      expect(lpsAfter.livingProjectState.activeCycleInstanceId).toBe(preparedId);
+    }
+
+    // Repeat: no second START / no mint.
+    const again = await orchestrateAssistantSend({
+      projectId,
+      content: "Je confirme le démarrage de Delivery.",
+      sessionDbPath,
+      provider,
+    });
+    expect(again.ok).toBe(true);
+    if (!again.ok) return;
+    expect(again.text).toMatch(/déjà actif/i);
+    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
+    expect(cyclesFinal.length).toBe(1);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 97b86865..e2ca0f94 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -83,6 +83,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",
       "features/project-assistant/f2/activeCycleGovernedContinuation.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
       "features/project-assistant/f2/recordDecision.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/f2/resolveChatFirstCycleStartGate.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/resolveMw5ProductAuthorityFromOa.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/studioCognitiveContext.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
index 8cbb9d8e..a150ca8f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
@@ -4,14 +4,14 @@ import { useEffect, useId, useRef, useState, type FormEvent } from "react";
 import Link from "next/link";
 import { useRouter } from "next/navigation";
 import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
+import { newProjectOnboardingTurnAction } from "./newProjectOnboardingAction";
 import {
-  absorbUserTurn,
+  buildProductContextHandoff,
   collectPhaseOf,
   composerPlaceholder,
   emptyDraft,
   INTENTION_STARTERS,
   isMinimumSufficient,
-  noraTurnAfter,
   objectiveFromDraft,
   openingNoraTurn,
   reopenField,
@@ -19,7 +19,6 @@ import {
   understoodPointsFromDraft,
   type ChatTurn,
   type CollectField,
-  type CollectPhase,
   type PreProjectDraft,
 } from "./newProjectConversation";
 import styles from "./NewProjectIntentionPage.module.css";
@@ -37,8 +36,8 @@ function turnId(prefix: string): string {
 }

 /**
- * P5-S06 CP01 — explicit-phase conversational New Project.
- * Durable create only via createProjectRuntimeAction. No D1, no regex NLP.
+ * P6-HQA-NEWPROJECT-01 — cognitive New Project onboarding.
+ * Nora turns via canonical ConversationProvider. Create only via createProjectRuntimeAction.
  */
 export function NewProjectIntentionPage() {
   const router = useRouter();
@@ -49,41 +48,93 @@ export function NewProjectIntentionPage() {
   const [idempotencyKey, setIdempotencyKey] = useState("");
   const [submitError, setSubmitError] = useState<string | null>(null);
   const [pending, setPending] = useState(false);
+  const [thinking, setThinking] = useState(false);
   const [created, setCreated] = useState<CreateSuccess | null>(null);
   const threadRef = useRef<HTMLDivElement>(null);
+  const abortRef = useRef<AbortController | null>(null);

-  const phase: CollectPhase = collectPhaseOf(draft);
   const ready = isMinimumSufficient(draft);
+  const phase = collectPhaseOf(draft);
   const understood = understoodPointsFromDraft(draft);
   const objective = objectiveFromDraft(draft);
   const startingPoint = startingPointFromDraft(draft);

   useEffect(() => {
     setIdempotencyKey(createIdempotencyKey());
+    return () => {
+      abortRef.current?.abort();
+    };
   }, []);

   useEffect(() => {
     const el = threadRef.current;
     if (!el) return;
     el.scrollTop = el.scrollHeight;
-  }, [turns, draft]);
+  }, [turns, draft, thinking]);

-  function onSend(event?: FormEvent) {
+  async function onSend(event?: FormEvent) {
     event?.preventDefault();
     const text = composer.trim();
-    if (!text || pending) return;
-    const asked = phase;
-    const nextDraft = absorbUserTurn(draft, text, asked);
+    if (!text || pending || thinking) return;
+
     const userTurn: ChatTurn = { id: turnId("user"), role: "user", text };
-    const noraTurn = noraTurnAfter(asked, nextDraft);
-    setDraft(nextDraft);
-    setTurns((current) => [...current, userTurn, noraTurn]);
+    const historyForProvider = [...turns, userTurn].map((t) => ({
+      role: t.role,
+      text: t.text,
+    }));
+    setTurns((current) => [...current, userTurn]);
     setComposer("");
     setSubmitError(null);
+    setThinking(true);
+
+    try {
+      const result = await newProjectOnboardingTurnAction({
+        userText: text,
+        draft,
+        history: historyForProvider.slice(0, -1),
+      });
+
+      if (!result.ok) {
+        setTurns((current) => [
+          ...current,
+          {
+            id: turnId("nora"),
+            role: "nora",
+            text: result.message,
+            meta: "error",
+          },
+        ]);
+        return;
+      }
+
+      setDraft(result.draft);
+      setTurns((current) => [
+        ...current,
+        {
+          id: turnId("nora"),
+          role: "nora",
+          text: result.replyText,
+          meta: result.draft.cognitiveCreateProposal ? "understood" : "cognitive",
+          clarification: result.clarification,
+        },
+      ]);
+    } catch {
+      setTurns((current) => [
+        ...current,
+        {
+          id: turnId("nora"),
+          role: "nora",
+          text: "Le service n’a pas répondu. La conversation est conservée ; tu peux réessayer.",
+          meta: "error",
+        },
+      ]);
+    } finally {
+      setThinking(false);
+    }
   }

   function onChip(text: string) {
-    if (pending) return;
+    if (pending || thinking) return;
     setComposer(text);
   }

@@ -96,26 +147,31 @@ export function NewProjectIntentionPage() {
         id: turnId("nora"),
         role: "nora",
         text:
-          collectPhaseOf(nextDraft) === "NAME_REQUIRED"
-            ? "Quel nom voulez-vous donner à ce projet ?"
-            : "Quel est l’objectif ou l’intention principale de ce projet ?",
-        meta: collectPhaseOf(nextDraft) === "NAME_REQUIRED" ? "name_ask" : "opening",
+          field === "name"
+            ? "Ok — on reprend le nom. Comment veux-tu l’appeler, ou je peux proposer à nouveau ?"
+            : "Ok — reformule l’intention principale du projet.",
+        meta: "cognitive",
       },
     ]);
   }

   async function onCreate() {
-    if (pending || !ready) return;
+    if (pending || thinking || !ready) return;
     setSubmitError(null);
     const stableKey = idempotencyKey || createIdempotencyKey();
     if (!idempotencyKey) setIdempotencyKey(stableKey);
     setPending(true);
     try {
       const intention = draft.intention.trim();
+      const objectiveText = (draft.objective.trim() || intention).slice(0, 4000);
+      const contextText = buildProductContextHandoff(
+        draft,
+        turns.map((t) => ({ role: t.role, text: t.text })),
+      );
       const result = await createProjectRuntimeAction({
         name: draft.name.trim(),
-        objective: intention,
-        context: draft.context.trim() || intention,
+        objective: objectiveText,
+        context: contextText || intention,
         criticality: "STANDARD",
         constraints: [],
         idempotencyKey: stableKey,
@@ -124,7 +180,7 @@ export function NewProjectIntentionPage() {
       if (result.ok) {
         setCreated(result);
         router.push(
-          `/studio/projects/${encodeURIComponent(result.projectId)}`,
+          `/studio/projects/${encodeURIComponent(result.projectId)}?from=new-project-onboarding`,
         );
         return;
       }
@@ -163,11 +219,11 @@ export function NewProjectIntentionPage() {
           <h1 className={styles.heroTitle}>Projet créé</h1>
           <p className={styles.heroSubtitle}>
             Ouverture du workspace durable. Nora reprend à partir du projet
-            enregistré — pas du brouillon local.
+            enregistré — l’accueil est conservé dans le contexte Product.
           </p>
         </header>
         <Link
-          href={`/studio/projects/${encodeURIComponent(created.projectId)}`}
+          href={`/studio/projects/${encodeURIComponent(created.projectId)}?from=new-project-onboarding`}
           className={styles.primaryButton}
           data-testid="open-project-workspace"
         >
@@ -185,6 +241,7 @@ export function NewProjectIntentionPage() {
       data-create-surface="conversational"
       data-collect-phase={phase}
       data-ready={ready ? "true" : "false"}
+      data-cognitive="nora-provider"
     >
       <div className={styles.pageChrome} data-testid="new-project-chrome">
         <div className={styles.chromeTrail}>
@@ -208,13 +265,11 @@ export function NewProjectIntentionPage() {
           </h1>
           <p className={styles.heroSubtitle}>
             <span className={styles.heroSubtitleDesktop}>
-              Décris simplement ce que tu veux accomplir. Nora t&apos;aidera à
-              préciser uniquement ce qui est nécessaire pour démarrer
-              correctement.
+              Dis à Nora ce que tu veux accomplir. Elle clarifie seulement ce
+              qui est utile — la création reste ton choix.
             </span>
             <span className={styles.heroSubtitleMobile}>
-              Décris ce que tu veux accomplir. Nora t&apos;aide à préciser le
-              projet.
+              Décris ce que tu veux accomplir. Nora t&apos;aide à démarrer.
             </span>
           </p>
         </header>
@@ -243,6 +298,9 @@ export function NewProjectIntentionPage() {
                 {turn.meta === "understood" ? (
                   <span className={styles.metaChipOk}>J’ai compris</span>
                 ) : null}
+                {turn.meta === "error" ? (
+                  <span className={styles.metaChipMuted}>Indisponible</span>
+                ) : null}
               </div>
               <p
                 className={styles.bubbleText}
@@ -250,7 +308,7 @@ export function NewProjectIntentionPage() {
               >
                 {turn.text}
               </p>
-              {turn.meta === "opening" && phase === "INTENTION_REQUIRED" ? (
+              {turn.meta === "opening" && !draft.intention.trim() ? (
                 <div
                   className={styles.chipRow}
                   data-testid="new-project-starters"
@@ -300,11 +358,24 @@ export function NewProjectIntentionPage() {
               ) : null}
             </div>
           ))}
+          {thinking ? (
+            <div
+              className={styles.bubbleNora}
+              data-role="nora"
+              data-testid="new-project-thinking"
+            >
+              <div className={styles.bubbleHeader}>
+                <p className={styles.bubbleLabel}>Nora</p>
+                <span className={styles.metaChipMuted}>Réflexion</span>
+              </div>
+              <p className={styles.bubbleText}>…</p>
+            </div>
+          ) : null}
         </div>

         <form
           className={styles.composer}
-          onSubmit={onSend}
+          onSubmit={(e) => void onSend(e)}
           data-testid="new-project-composer"
         >
           <label className={styles.srOnly} htmlFor={`${fieldId}-composer`}>
@@ -316,26 +387,27 @@ export function NewProjectIntentionPage() {
               className={styles.textarea}
               rows={3}
               value={composer}
-              disabled={pending}
-              placeholder={composerPlaceholder(phase)}
+              disabled={pending || thinking}
+              placeholder={composerPlaceholder(draft)}
               data-testid="new-project-input"
               onChange={(event) => setComposer(event.target.value)}
               onKeyDown={(event) => {
                 if (event.key === "Enter" && !event.shiftKey) {
                   event.preventDefault();
-                  onSend();
+                  void onSend();
                 }
               }}
             />
             <div className={styles.composerBottom}>
               <div className={styles.composerHelpers}>
-                <span>+ Ajouter du contexte</span>
-                <span>Joindre un document</span>
+                <span>Conversation avec Nora</span>
               </div>
               <button
                 type="submit"
                 className={styles.sendIcon}
-                disabled={pending || composer.trim().length === 0}
+                disabled={
+                  pending || thinking || composer.trim().length === 0
+                }
                 data-testid="new-project-send"
                 aria-label="Envoyer"
               >
@@ -343,7 +415,6 @@ export function NewProjectIntentionPage() {
               </button>
             </div>
           </div>
-          {/* P3 67:255 — no Annuler in composer chrome; keep accessible escape. */}
           <Link
             href="/studio"
             className={styles.srOnly}
@@ -352,8 +423,8 @@ export function NewProjectIntentionPage() {
             Annuler et revenir aux projets
           </Link>
           <p className={styles.help}>
-            Tu n&apos;as rien à remplir : Nora construit le projet à partir de
-            la conversation.
+            Nora comprend et propose. La création du projet reste un acte
+            explicite de ta part.
           </p>
         </form>
       </div>
@@ -388,35 +459,43 @@ export function NewProjectIntentionPage() {
               {draft.name.trim() || "Pas encore précisé"}
             </dd>
             {draft.name.trim() ? (
-              <p className={styles.previewHintInline}>Tu pourras le renommer</p>
+              <p className={styles.previewHintInline}>
+                {draft.nameProvisional
+                  ? "Nom provisoire — tu pourras le renommer"
+                  : "Tu pourras le renommer"}
+              </p>
             ) : null}
           </div>
           <div className={styles.previewFieldObjective}>
-            <dt>Objectif</dt>
+            <dt>Intention / objectif</dt>
             <dd data-testid="preview-intention">
               {objective || "Pas encore précisée"}
             </dd>
           </div>
           <div>
-            <dt>Point de départ</dt>
+            <dt>Contexte / point de départ</dt>
             <dd data-testid="preview-context">
-              {startingPoint || "Pas de projet créé pour l’instant"}
+              {startingPoint || "À préciser si besoin"}
             </dd>
-            {startingPoint ? (
-              <p className={styles.previewHintInline}>
-                Pas de projet créé pour l’instant
-              </p>
-            ) : null}
           </div>
           <div>
-            <dt>Démarrage</dt>
+            <dt>Première orientation</dt>
+            <dd data-testid="preview-orientation">
+              {draft.firstOrientation.trim() ||
+                "Proposition après création — non autoritative"}
+            </dd>
+          </div>
+          <div>
+            <dt>Création</dt>
             <dd
               className={ready ? styles.previewWarn : undefined}
               data-testid="preview-startup"
             >
-              {ready
-                ? "1 point reste à clarifier"
-                : "Intention et nom requis avant création"}
+              {draft.explicitRefuseCreate
+                ? "Création refusée pour l’instant"
+                : ready
+                  ? "Possible — en attente de ton accord"
+                  : "En attente d’une intention exploitable"}
             </dd>
             {ready ? (
               <p className={styles.previewHintInline}>
@@ -432,7 +511,7 @@ export function NewProjectIntentionPage() {
               className={styles.understood}
               data-testid="new-project-understood"
             >
-              <p className={styles.understoodTitle}>Ce que Nora a compris</p>
+              <p className={styles.understoodTitle}>Repères de la conversation</p>
               <ul className={styles.understoodList}>
                 {understood.map((point) => (
                   <li key={point}>{point}</li>
@@ -449,28 +528,27 @@ export function NewProjectIntentionPage() {
               <div className={styles.readyBox}>
                 <p className={styles.readyBoxTitle}>Projet prêt à être créé</p>
                 <p className={styles.readyBoxBody}>
-                  L&apos;intention et l&apos;objectif sont suffisamment clairs
-                  pour créer le contexte projet.
+                  L&apos;intention est exploitable. Studio a validé les entrées
+                  pour une création — Nora n&apos;a pas d&apos;autorité propre.
                 </p>
               </div>
               <div className={styles.pendingBox}>
                 <p className={styles.pendingBoxTitle}>
-                  Démarrage · 1 point à clarifier
+                  Après création · orientation provisoire
                 </p>
                 <p className={styles.pendingBoxBody}>
-                  Nora continuera à préciser le premier travail après la
-                  création du projet.
+                  {draft.firstOrientation.trim() ||
+                    "Nora pourra proposer une première direction dans le projet. Aucun cycle ne démarre automatiquement."}
                 </p>
               </div>
             </>
           ) : (
             <div className={styles.pendingBox}>
-              <p className={styles.pendingBoxTitle}>
-                Démarrage · points à clarifier
-              </p>
+              <p className={styles.pendingBoxTitle}>Création pas encore possible</p>
               <p className={styles.pendingBoxBody}>
-                Intention et nom sont requis avant création. Nora continue à
-                préciser à partir de la conversation.
+                {draft.explicitRefuseCreate
+                  ? "Tu as indiqué ne pas vouloir créer pour l’instant."
+                  : "Il faut une intention exploitable. Le nom peut être proposé ou provisoire."}
               </p>
             </div>
           )}
@@ -478,15 +556,15 @@ export function NewProjectIntentionPage() {
             <button
               type="button"
               className={styles.primaryButton}
-              disabled={pending || !ready}
+              disabled={pending || thinking || !ready}
               data-testid="create-project-submit"
               onClick={() => void onCreate()}
             >
               {pending ? "Création…" : "Créer le projet"}
             </button>
             <p className={styles.help}>
-              Après création, la conversation continue avec Nora pour préciser
-              le démarrage du projet.
+              Après création, la conversation continue dans le projet. Aucun
+              cycle n&apos;est démarré automatiquement.
             </p>
             {ready ? (
               <div className={styles.correctRow}>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 082bdb46..168f42e7 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -788,6 +788,17 @@
     overflow: auto;
   }

+  /*
+   * Focus bar sticks inside `.main` (the column scrollport), not the viewport.
+   * `top: var(--ws-global-h)` was correct when the page scrolled under the global
+   * header; here it offsets the bar into the transcript and clips the empty-state
+   * intro (“Dites à Nora…”) under the sticky strip.
+   */
+  .root[data-active-view="conversation"] .focusBar,
+  .root[data-active-view="execution"] .focusBar {
+    top: 0;
+  }
+
   .root[data-active-view="conversation"] .lpsColumn,
   .root[data-active-view="execution"] .lpsColumn {
     position: relative;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts
index b446248c..f580e487 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts
@@ -1,29 +1,35 @@
 /**
- * P5-S06 CP01 — non-authoritative pre-Project collection helpers.
- * Client-only ephemeral state. No Product store. No D1 Intake path.
- * Explicit phases only — ZERO semantic inference / regex slot guessing.
+ * P6-HQA-NEWPROJECT-01 — New Project conversation surface helpers.
+ *
+ * Cognitive turns are provider-backed via runNewProjectOnboardingTurn.
+ * This module keeps UI helpers + a thin compatibility surface for prior tests.
+ * Scripted phase machine is no longer the REAL conversation path.
  */

-export type PreProjectDraft = {
-  name: string;
-  intention: string;
-  context: string;
-};
-
-export type ChatTurn = {
-  id: string;
-  role: "user" | "nora";
-  text: string;
-  /** Presentation meta for Nora turns — not Product state. */
-  meta?: "opening" | "name_ask" | "understood";
-  clarification?: {
-    title: string;
-    question: string;
-    suggestions: string[];
-  };
-};
-
-/** Ephemeral UI collection phase — not a Product state machine. */
+export {
+  INTENTION_STARTERS,
+  emptyDraft,
+  isMinimumSufficient,
+  studioCanCreate,
+  openingNoraTurn,
+  objectiveFromDraft,
+  startingPointFromDraft,
+  understoodPointsFromDraft,
+  composerPlaceholder,
+  provisionalNameFromIntention,
+  buildProductContextHandoff,
+  mergeCognitiveIntoDraft,
+  type PreProjectDraft,
+  type ChatTurn,
+} from "./newProjectOnboardingContract";
+
+import type { PreProjectDraft } from "./newProjectOnboardingContract";
+import {
+  emptyDraft,
+  provisionalNameFromIntention,
+} from "./newProjectOnboardingContract";
+
+/** @deprecated Phase labels retained for data-testid compatibility only. */
 export type CollectPhase =
   | "INTENTION_REQUIRED"
   | "NAME_REQUIRED"
@@ -31,250 +37,85 @@ export type CollectPhase =

 export type CollectField = "name" | "intention";

-const INTENTION_MAX = 4000;
-const NAME_MAX = 200;
-const CONTEXT_MAX = 4000;
-
-/** Opening direction chips — fill composer only; never auto-absorb. */
-export const INTENTION_STARTERS: string[] = [
-  "Améliorer l’expérience utilisateur",
-  "Lancer un nouveau produit",
-  "Réorganiser un processus",
-  "Autre chose",
-];
-
-/** Clarification chips shown once intention + name are collected. */
-export const CLARIFICATION_SUGGESTIONS: string[] = [
-  "Plus simple à comprendre",
-  "Moins d’interactions inutiles",
-  "Pilotage plus clair",
-];
-
-export function emptyDraft(): PreProjectDraft {
-  return { name: "", intention: "", context: "" };
-}
-
-export function isMinimumSufficient(draft: PreProjectDraft): boolean {
-  return draft.name.trim().length > 0 && draft.intention.trim().length > 0;
-}
-
 export function collectPhaseOf(draft: PreProjectDraft): CollectPhase {
   if (!draft.intention.trim()) return "INTENTION_REQUIRED";
   if (!draft.name.trim()) return "NAME_REQUIRED";
   return "OPTIONAL_CONTEXT";
 }

-function sanitize(raw: string, max: number): string {
-  return raw.replace(/\u0000/g, "").trim().slice(0, max);
-}
-
-/**
- * Record the Pilot answer for the currently asked slot only.
- * `phase` must be the question Nora just asked — never inferred from text.
- */
 /**
- * Propose a project name when the pilot’s intention already names the work
- * clearly enough — Nora can confirm in the understanding turn (P3 67:39).
- * Returns null when a dedicated name ask remains required.
+ * Local absorb — used only for deterministic unit fixtures that do not call
+ * the provider. Production UI uses newProjectOnboardingTurnAction instead.
  */
-export function proposeNameFromIntention(intention: string): string | null {
-  const t = intention.trim();
-  if (!t) return null;
-  if (
-    /espace\s+projet/i.test(t) &&
-    /(?:nouvelle\s+version|refonte)/i.test(t)
-  ) {
-    return "Refonte de l’espace projet";
-  }
-  return null;
-}
-
 export function absorbUserTurn(
   draft: PreProjectDraft,
   raw: string,
-  phase: CollectPhase,
+  _phase?: CollectPhase,
 ): PreProjectDraft {
-  const text = sanitize(raw, INTENTION_MAX);
+  void _phase;
+  const text = raw.replace(/\u0000/g, "").trim().slice(0, 4000);
   if (!text) return draft;
-  const next = { ...draft };
-
-  switch (phase) {
-    case "INTENTION_REQUIRED":
-      next.intention = next.intention.trim()
-        ? `${next.intention}\n${text}`.slice(0, INTENTION_MAX)
-        : text.slice(0, INTENTION_MAX);
-      if (!next.name.trim()) {
-        const proposed = proposeNameFromIntention(next.intention);
-        if (proposed) next.name = proposed;
-      }
-      return next;
-    case "NAME_REQUIRED":
-      next.name = sanitize(text, NAME_MAX);
-      return next;
-    case "OPTIONAL_CONTEXT":
-      next.context = next.context.trim()
-        ? `${next.context}\n${text}`.slice(0, CONTEXT_MAX)
-        : text.slice(0, CONTEXT_MAX);
-      return next;
-    default:
-      return draft;
+  const next: PreProjectDraft = {
+    ...draft,
+    intention: draft.intention.trim()
+      ? `${draft.intention}\n${text}`.slice(0, 4000)
+      : text,
+    intentionKind: "project_direction",
+    cognitiveTurns: Math.max(draft.cognitiveTurns, 1),
+  };
+  if (!next.objective.trim()) next.objective = next.intention;
+  if (!next.name.trim()) {
+    next.name = provisionalNameFromIntention(next.intention);
+    next.nameProvisional = true;
   }
+  next.cognitiveCreateProposal = true;
+  return next;
 }

-/** Explicit correction — clears one captured field so Nora re-asks that slot. */
 export function reopenField(
   draft: PreProjectDraft,
   field: CollectField,
 ): PreProjectDraft {
-  if (field === "name") return { ...draft, name: "" };
-  return { ...draft, intention: "" };
+  if (field === "name") {
+    return {
+      ...draft,
+      name: "",
+      nameProvisional: false,
+      cognitiveCreateProposal: false,
+    };
+  }
+  return {
+    ...draft,
+    intention: "",
+    objective: "",
+    cognitiveCreateProposal: false,
+  };
 }

+/** @deprecated Presentation helper — prefer composerPlaceholder(draft). */
 export function nextNoraPrompt(phase: CollectPhase): string {
   switch (phase) {
     case "INTENTION_REQUIRED":
-      return "Qu’est-ce que tu veux accomplir avec ce nouveau projet ? Tu peux me l’expliquer comme tu le ferais à quelqu’un de ton équipe.";
+      return "Qu’est-ce que tu veux accomplir avec ce nouveau projet ?";
     case "NAME_REQUIRED":
       return "Quel nom voulez-vous donner à ce projet ?";
     case "OPTIONAL_CONTEXT":
-      return "Je partirais sur un projet centré sur cette intention, avec comme objectif de rendre le travail plus lisible sans perdre l’approche centrée sur la conversation.";
+      return "On peut créer le projet dès que tu es prêt — dis-moi si tu veux préciser autre chose.";
   }
 }

-export function composerPlaceholder(phase: CollectPhase): string {
-  switch (phase) {
-    case "INTENTION_REQUIRED":
-      return "Répondre à Nora…";
-    case "NAME_REQUIRED":
-      return "Indiquez le nom du projet…";
-    case "OPTIONAL_CONTEXT":
-      return "Répondre à Nora…";
-  }
-}
-
-export function openingNoraTurn(): ChatTurn {
-  return {
-    id: "nora-open",
-    role: "nora",
-    text: nextNoraPrompt("INTENTION_REQUIRED"),
-    meta: "opening",
-  };
-}
-
-/** Build the Nora turn that follows a user answer for the given asked phase. */
-export function noraTurnAfter(
-  asked: CollectPhase,
-  nextDraft: PreProjectDraft,
-): ChatTurn {
-  const phase = collectPhaseOf(nextDraft);
-  if (asked === "INTENTION_REQUIRED" && phase === "NAME_REQUIRED") {
-    return {
-      id: `nora-${Date.now()}`,
-      role: "nora",
-      text: nextNoraPrompt("NAME_REQUIRED"),
-      meta: "name_ask",
-    };
-  }
-  if (phase === "OPTIONAL_CONTEXT") {
-    const name = nextDraft.name.trim().toLowerCase();
-    const refonteAsk =
-      name.includes("refonte") ||
-      /refonte|espace projet/i.test(nextDraft.intention);
-    return {
-      id: `nora-${Date.now()}`,
-      role: "nora",
-      text: understandingSummary(nextDraft),
-      meta: "understood",
-      clarification: {
-        title: "UNE PRÉCISION UTILE",
-        question: refonteAsk
-          ? "Quel résultat concret te fera dire que cette refonte est réussie ?"
-          : "Quel résultat concret te fera dire que ce projet est réussi ?",
-        suggestions: CLARIFICATION_SUGGESTIONS,
-      },
-    };
-  }
-  return {
-    id: `nora-${Date.now()}`,
-    role: "nora",
-    text: nextNoraPrompt(phase),
-  };
-}
-
-/**
- * Honest presentation of the captured intention — not NLP slot inventing.
- * Prefers the purpose clause after « pour » when the Pilot wrote one.
- */
-export function objectiveFromDraft(draft: PreProjectDraft): string {
-  const intention = draft.intention.trim();
-  if (!intention) return "";
-  // Compact presentation when intention already frames the espace-projet work.
-  if (
-    /espace\s+projet/i.test(intention) &&
-    /simplif/i.test(intention)
-  ) {
-    return "Simplifier la lecture et le travail dans l’espace projet";
-  }
-  const pour = intention.match(/\bpour\s+(.+)/i);
-  const raw = (pour?.[1] ?? intention.split(/[.!?\n]/)[0] ?? intention).trim();
-  const clause = raw.charAt(0).toUpperCase() + raw.slice(1);
-  // Preview shows up to ~2 lines; avoid mid-sentence ellipsis when possible.
-  return clause.length > 140 ? `${clause.slice(0, 137)}…` : clause;
-}
-
-/**
- * Split the pilot’s intention into short remembered points for the preview.
- * Uses only the user’s words — no invented themes.
- */
-export function understoodPointsFromDraft(draft: PreProjectDraft): string[] {
-  const intention = draft.intention.trim();
-  if (!intention) return [];
-  const lower = intention.toLowerCase();
-  const points: string[] = [];
-  if (/espace projet|expérience/.test(lower)) {
-    points.push("Expérience de l’espace projet");
-  }
-  if (/conversation|nora/.test(lower)) {
-    points.push("Conversation au centre");
-  }
-  if (/simplif/.test(lower)) {
-    points.push("Moins d’interactions inutiles");
-  }
-  if (/avancement|comprennent|lisib/.test(lower)) {
-    points.push("Lecture de l’avancement plus claire");
-  }
-  if (points.length >= 2) return points.slice(0, 4);
-  const parts = intention
-    .split(/[,;\n]| et | pour | avec | sans /i)
-    .map((p) => p.trim())
-    .filter((p) => p.length >= 8)
-    .map((p) => (p.length > 56 ? `${p.slice(0, 53)}…` : p));
-  return [...new Set(parts)].slice(0, 4);
+export function proposeNameFromIntention(intention: string): string | null {
+  const t = intention.trim();
+  if (!t) return null;
+  return provisionalNameFromIntention(t);
 }

-export function understandingSummary(draft: PreProjectDraft): string {
-  const name = draft.name.trim();
-  if (/refonte.*espace\s+projet/i.test(name)) {
-    return "Je partirais sur un projet centré sur la refonte de l’expérience Espace projet, avec comme objectif principal de rendre l’état du projet plus lisible sans perdre l’approche centrée sur la conversation.";
-  }
-  if (name) {
-    return `Je partirais sur un projet centré sur la ${name.charAt(0).toLowerCase()}${name.slice(1)}, avec comme objectif principal de rendre l’état du projet plus lisible sans perdre l’approche centrée sur la conversation.`;
-  }
-  const objective = objectiveFromDraft(draft);
-  if (!objective) return nextNoraPrompt("OPTIONAL_CONTEXT");
-  return `Je partirais sur un projet centré sur « ${objective} », avec comme objectif principal de rendre l’état du projet plus lisible sans perdre l’approche centrée sur la conversation.`;
+export function noraTurnAfter(): never {
+  throw new Error(
+    "noraTurnAfter removed — use newProjectOnboardingTurnAction / runNewProjectOnboardingTurn",
+  );
 }

-export function startingPointFromDraft(draft: PreProjectDraft): string {
-  if (draft.context.trim()) return draft.context.trim().slice(0, 120);
-  const intention = draft.intention.toLowerCase();
-  if (
-    draft.intention.trim() &&
-    (/refonte|nouvelle version|espace projet/.test(intention) ||
-      /refonte/i.test(draft.name))
-  ) {
-    return "Refonte de l’expérience existante";
-  }
-  if (draft.intention.trim()) return "À partir de la conversation en cours";
-  return "";
+export function resetDraftForTests(): PreProjectDraft {
+  return emptyDraft();
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingAction.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingAction.ts
new file mode 100644
index 00000000..940cb317
--- /dev/null
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingAction.ts
@@ -0,0 +1,36 @@
+"use server";
+
+/**
+ * P6-HQA-NEWPROJECT-01 — thin server action for pre-Project Nora turn.
+ * Reuses canonical ConversationProvider routing. No Product mutation.
+ */
+
+import {
+  emptyDraft,
+  type ChatTurn,
+  type PreProjectDraft,
+} from "./newProjectOnboardingContract";
+import {
+  runNewProjectOnboardingTurn,
+  type NewProjectOnboardingTurnResult,
+} from "./runNewProjectOnboardingTurn";
+
+export type NewProjectOnboardingActionInput = {
+  readonly userText: string;
+  readonly draft: PreProjectDraft;
+  readonly history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
+};
+
+export async function newProjectOnboardingTurnAction(
+  input: NewProjectOnboardingActionInput,
+): Promise<NewProjectOnboardingTurnResult> {
+  const draft = input?.draft ?? emptyDraft();
+  const history = Array.isArray(input?.history) ? input.history : [];
+  const userText =
+    typeof input?.userText === "string" ? input.userText : "";
+  return runNewProjectOnboardingTurn({
+    userText,
+    draft,
+    history,
+  });
+}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts
new file mode 100644
index 00000000..0675dd30
--- /dev/null
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts
@@ -0,0 +1,520 @@
+/**
+ * P6-HQA-NEWPROJECT-01 — pre-Project cognitive onboarding contract.
+ *
+ * Nora (provider) proposes; Studio validates and materializes.
+ * No Product write, no CycleInstance, no HumanDecision here.
+ *
+ * Closure correction: reversible refuse, non-syntactic gate,
+ * prioritized handoff assembly, usage observation (no FinOps invent).
+ */
+
+export const NEW_PROJECT_ONBOARDING_SCHEMA_NAME =
+  "new_project_onboarding_turn_v1" as const;
+
+export const ONBOARDING_HANDOFF_MARKER = "[[nora-onboarding-handoff]]" as const;
+
+const INTENTION_MAX = 4000;
+const NAME_MAX = 200;
+const CONTEXT_MAX = 4000;
+const ORIENTATION_MAX = 800;
+const REPLY_MAX = 4000;
+
+/** Studio-held view of whether the known intention is a project direction. */
+export type IntentionKind =
+  | "unset"
+  | "project_direction"
+  | "non_project"
+  | "unclear";
+
+export type PreProjectDraft = {
+  name: string;
+  /** True when Studio or Nora stamped a provisional label — Pilot may rename. */
+  nameProvisional: boolean;
+  intention: string;
+  /** Reformulation / objective candidate — proposal, not Product truth until Create. */
+  objective: string;
+  context: string;
+  /** Non-authoritative first work direction. */
+  firstOrientation: string;
+  unknowns: string[];
+  /** Nora recommendation only — never alone authorizes Create. */
+  cognitiveCreateProposal: boolean;
+  /**
+   * Current create-block from an explicit Pilot refuse/defer.
+   * Cleared only by a later explicit acceptCreateDetected — not by silence.
+   */
+  explicitRefuseCreate: boolean;
+  /** Last Nora classification of whether a project direction is present. */
+  intentionKind: IntentionKind;
+  /** Cognitive turns completed (provider-backed). */
+  cognitiveTurns: number;
+};
+
+export type ChatTurn = {
+  id: string;
+  role: "user" | "nora";
+  text: string;
+  meta?: "opening" | "cognitive" | "error" | "understood";
+  clarification?: {
+    title: string;
+    question: string;
+    suggestions: string[];
+  };
+};
+
+export type OnboardingCognitivePayload = {
+  replyText: string;
+  intentionKnown: string | null;
+  objectiveProposal: string | null;
+  contextKnown: string | null;
+  nameProposal: string | null;
+  nameProvisional: boolean;
+  firstOrientationProposal: string | null;
+  unknowns: string[];
+  sufficientForCreateProposal: boolean;
+  /**
+   * Explicit Pilot refuse/defer of creation for this turn.
+   * Sticky until acceptCreateDetected — absence does not clear.
+   */
+  refuseCreateDetected: boolean;
+  /**
+   * Explicit Pilot accept/retract of a prior refuse ("allons-y", "créons-le").
+   * Name confirmation alone must NOT set this.
+   */
+  acceptCreateDetected: boolean;
+  /**
+   * Nora's classification — Studio uses this instead of message length.
+   * project_direction = exploitable even if exploratory.
+   */
+  intentionKind: "project_direction" | "non_project" | "unclear";
+  clarificationQuestion: string | null;
+  suggestions: string[];
+};
+
+/** JSON Schema for ConversationProvider.completeStructured (OpenAI json_schema). */
+export const NEW_PROJECT_ONBOARDING_JSON_SCHEMA: Record<string, unknown> = {
+  type: "object",
+  additionalProperties: false,
+  required: [
+    "replyText",
+    "intentionKnown",
+    "objectiveProposal",
+    "contextKnown",
+    "nameProposal",
+    "nameProvisional",
+    "firstOrientationProposal",
+    "unknowns",
+    "sufficientForCreateProposal",
+    "refuseCreateDetected",
+    "acceptCreateDetected",
+    "intentionKind",
+    "clarificationQuestion",
+    "suggestions",
+  ],
+  properties: {
+    replyText: { type: "string" },
+    intentionKnown: { type: ["string", "null"] },
+    objectiveProposal: { type: ["string", "null"] },
+    contextKnown: { type: ["string", "null"] },
+    nameProposal: { type: ["string", "null"] },
+    nameProvisional: { type: "boolean" },
+    firstOrientationProposal: { type: ["string", "null"] },
+    unknowns: { type: "array", items: { type: "string" } },
+    sufficientForCreateProposal: { type: "boolean" },
+    refuseCreateDetected: { type: "boolean" },
+    acceptCreateDetected: { type: "boolean" },
+    intentionKind: {
+      type: "string",
+      enum: ["project_direction", "non_project", "unclear"],
+    },
+    clarificationQuestion: { type: ["string", "null"] },
+    suggestions: { type: "array", items: { type: "string" } },
+  },
+};
+
+export const INTENTION_STARTERS: string[] = [
+  "Améliorer l’expérience utilisateur",
+  "Lancer un nouveau produit",
+  "Réorganiser un processus",
+  "Autre chose",
+];
+
+export function emptyDraft(): PreProjectDraft {
+  return {
+    name: "",
+    nameProvisional: false,
+    intention: "",
+    objective: "",
+    context: "",
+    firstOrientation: "",
+    unknowns: [],
+    cognitiveCreateProposal: false,
+    explicitRefuseCreate: false,
+    intentionKind: "unset",
+    cognitiveTurns: 0,
+  };
+}
+
+function sanitize(raw: string, max: number): string {
+  return raw.replace(/\u0000/g, "").trim().slice(0, max);
+}
+
+function nullableString(value: unknown, max: number): string | null {
+  if (value == null) return null;
+  if (typeof value !== "string") return null;
+  const t = sanitize(value, max);
+  return t.length > 0 ? t : null;
+}
+
+function parseIntentionKind(value: unknown): IntentionKind | null {
+  if (value === "project_direction") return "project_direction";
+  if (value === "non_project") return "non_project";
+  if (value === "unclear") return "unclear";
+  return null;
+}
+
+/** Deterministic provisional name from intention — labeled provisional by Studio. */
+export function provisionalNameFromIntention(intention: string): string {
+  const t = intention.trim().replace(/\s+/g, " ");
+  if (!t) return "Projet exploratoire";
+  const clause = t.split(/[.!?\n]/)[0]?.trim() || t;
+  const clipped = clause.length > 72 ? `${clause.slice(0, 69)}…` : clause;
+  return clipped.charAt(0).toUpperCase() + clipped.slice(1);
+}
+
+/**
+ * Studio gate — independent of Nora's sufficient flag alone.
+ *
+ * Requires:
+ * - no current explicit refuse;
+ * - Product-usable non-empty name (proposed or provisional);
+ * - at least one cognitive turn;
+ * - intentionKind === project_direction with non-empty intention text;
+ * - Nora create proposal OR exploratory path (project_direction without refuse).
+ *
+ * Length is NOT a maturity criterion (technical empty-check only).
+ * Nora sufficient=true cannot authorize Create without project_direction.
+ */
+export function studioCanCreate(draft: PreProjectDraft): boolean {
+  if (draft.explicitRefuseCreate) return false;
+  if (draft.cognitiveTurns < 1) return false;
+  if (!draft.name.trim()) return false;
+  if (draft.intentionKind !== "project_direction") return false;
+  if (!draft.intention.trim()) return false;
+  // Exploratory create allowed when direction is known, even if Nora was uncertain.
+  // Nora's cognitiveCreateProposal strengthens UX messaging but is not sole authority.
+  return true;
+}
+
+export function isMinimumSufficient(draft: PreProjectDraft): boolean {
+  return studioCanCreate(draft);
+}
+
+export function parseOnboardingCognitivePayload(
+  raw: unknown,
+): OnboardingCognitivePayload | null {
+  if (!raw || typeof raw !== "object") return null;
+  const o = raw as Record<string, unknown>;
+  const replyText = nullableString(o.replyText, REPLY_MAX);
+  if (!replyText) return null;
+  const intentionKind = parseIntentionKind(o.intentionKind);
+  if (!intentionKind || intentionKind === "unset") return null;
+  const unknowns = Array.isArray(o.unknowns)
+    ? o.unknowns
+        .filter((u): u is string => typeof u === "string")
+        .map((u) => sanitize(u, 240))
+        .filter(Boolean)
+        .slice(0, 8)
+    : [];
+  const suggestions = Array.isArray(o.suggestions)
+    ? o.suggestions
+        .filter((u): u is string => typeof u === "string")
+        .map((u) => sanitize(u, 120))
+        .filter(Boolean)
+        .slice(0, 6)
+    : [];
+  return {
+    replyText,
+    intentionKnown: nullableString(o.intentionKnown, INTENTION_MAX),
+    objectiveProposal: nullableString(o.objectiveProposal, INTENTION_MAX),
+    contextKnown: nullableString(o.contextKnown, CONTEXT_MAX),
+    nameProposal: nullableString(o.nameProposal, NAME_MAX),
+    nameProvisional: o.nameProvisional === true,
+    firstOrientationProposal: nullableString(
+      o.firstOrientationProposal,
+      ORIENTATION_MAX,
+    ),
+    unknowns,
+    sufficientForCreateProposal: o.sufficientForCreateProposal === true,
+    refuseCreateDetected: o.refuseCreateDetected === true,
+    acceptCreateDetected: o.acceptCreateDetected === true,
+    intentionKind,
+    clarificationQuestion: nullableString(o.clarificationQuestion, 400),
+    suggestions,
+  };
+}
+
+export function extractJsonObject(text: string): unknown | null {
+  const trimmed = text.trim();
+  if (!trimmed) return null;
+  try {
+    return JSON.parse(trimmed) as unknown;
+  } catch {
+    const start = trimmed.indexOf("{");
+    const end = trimmed.lastIndexOf("}");
+    if (start < 0 || end <= start) return null;
+    try {
+      return JSON.parse(trimmed.slice(start, end + 1)) as unknown;
+    } catch {
+      return null;
+    }
+  }
+}
+
+/**
+ * Merge Nora cognitive payload into ephemeral draft.
+ *
+ * Refuse is sticky until acceptCreateDetected.
+ * AcceptCreateDetected does not invent intention — Studio still requires project_direction.
+ * Name confirmation alone must not arrive as acceptCreateDetected (prompt contract).
+ */
+export function mergeCognitiveIntoDraft(
+  prev: PreProjectDraft,
+  payload: OnboardingCognitivePayload,
+  userText: string,
+): PreProjectDraft {
+  void userText;
+  let explicitRefuseCreate = prev.explicitRefuseCreate;
+  if (payload.refuseCreateDetected) {
+    explicitRefuseCreate = true;
+  } else if (payload.acceptCreateDetected) {
+    explicitRefuseCreate = false;
+  }
+
+  const next: PreProjectDraft = {
+    ...prev,
+    cognitiveTurns: prev.cognitiveTurns + 1,
+    explicitRefuseCreate,
+    intentionKind: payload.intentionKind,
+    cognitiveCreateProposal:
+      payload.sufficientForCreateProposal && !payload.refuseCreateDetected,
+    unknowns: payload.unknowns.length > 0 ? payload.unknowns : prev.unknowns,
+  };
+
+  if (payload.intentionKnown) {
+    next.intention = payload.intentionKnown;
+  }
+
+  if (payload.objectiveProposal) {
+    next.objective = payload.objectiveProposal;
+  } else if (!next.objective.trim() && next.intention.trim()) {
+    next.objective = next.intention;
+  }
+
+  if (payload.contextKnown) {
+    next.context = payload.contextKnown;
+  }
+
+  if (payload.nameProposal) {
+    next.name = payload.nameProposal;
+    next.nameProvisional = payload.nameProvisional === true;
+  }
+
+  if (payload.firstOrientationProposal) {
+    next.firstOrientation = payload.firstOrientationProposal;
+  }
+
+  // Studio provisional name when intention is a project direction and name empty.
+  if (
+    !next.name.trim() &&
+    next.intention.trim() &&
+    next.intentionKind === "project_direction"
+  ) {
+    next.name = provisionalNameFromIntention(next.intention);
+    next.nameProvisional = true;
+  }
+
+  if (payload.refuseCreateDetected) {
+    next.cognitiveCreateProposal = false;
+  }
+
+  // Nora claiming sufficient without project_direction cannot open Create.
+  if (next.intentionKind !== "project_direction") {
+    next.cognitiveCreateProposal = false;
+  }
+
+  return next;
+}
+
+export function openingNoraTurn(): ChatTurn {
+  return {
+    id: "nora-open",
+    role: "nora",
+    text: "Bonjour — dis-moi ce que tu veux accomplir avec ce projet. Tu peux rester large : on précisera ensemble seulement ce qui est utile pour démarrer.",
+    meta: "opening",
+  };
+}
+
+export function objectiveFromDraft(draft: PreProjectDraft): string {
+  const objective = draft.objective.trim() || draft.intention.trim();
+  if (!objective) return "";
+  return objective.length > 160 ? `${objective.slice(0, 157)}…` : objective;
+}
+
+export function startingPointFromDraft(draft: PreProjectDraft): string {
+  if (draft.context.trim()) return draft.context.trim().slice(0, 160);
+  if (draft.intention.trim()) return "À partir de la conversation d’accueil";
+  return "";
+}
+
+export function understoodPointsFromDraft(draft: PreProjectDraft): string[] {
+  const points: string[] = [];
+  if (draft.intention.trim()) {
+    const i = draft.intention.trim();
+    points.push(i.length > 72 ? `${i.slice(0, 69)}…` : i);
+  }
+  for (const u of draft.unknowns.slice(0, 3)) {
+    points.push(`À préciser : ${u}`);
+  }
+  return points.slice(0, 5);
+}
+
+export type HandoffAssemblyResult = {
+  readonly text: string;
+  readonly truncated: boolean;
+  readonly transcriptTurnsIncluded: number;
+  readonly essentialPreserved: boolean;
+};
+
+/**
+ * Prioritized Product context handoff.
+ * Essential block (marker, intention, unknowns, orientation) always first.
+ * Transcript fills remaining budget — never silently drops essentials via a
+ * final blind slice of the whole string.
+ */
+export function buildProductContextHandoff(
+  draft: PreProjectDraft,
+  transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
+): string {
+  return assembleProductContextHandoff(draft, transcript).text;
+}
+
+export function assembleProductContextHandoff(
+  draft: PreProjectDraft,
+  transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
+  maxChars: number = CONTEXT_MAX,
+): HandoffAssemblyResult {
+  const essential = [
+    ONBOARDING_HANDOFF_MARKER,
+    "Synthèse d’accueil Nora (non autoritative — propositions et faits de conversation).",
+    `Intention: ${draft.intention.trim() || "(non établie)"}`,
+    `Objectif (proposition): ${draft.objective.trim() || draft.intention.trim() || "(non établi)"}`,
+    `Nom: ${draft.name.trim() || "(non établi)"}${draft.nameProvisional ? " (provisoire)" : ""}`,
+    `Contexte: ${draft.context.trim() || "(à préciser)"}`,
+    `Première orientation (proposition): ${draft.firstOrientation.trim() || "(aucune)"}`,
+    `Incertitudes: ${draft.unknowns.length ? draft.unknowns.join(" · ") : "(aucune listée)"}`,
+    "Transcript d’accueil (abrégé, non Session Agents):",
+  ];
+  const footer =
+    "Fin handoff. Aucun CycleInstance ni HumanDecision n’a été créé à l’accueil. FULL TRANSCRIPT REPLAY: non.";
+
+  const essentialText = essential.join("\n");
+  // Hard floor: if essentials alone exceed budget, truncate unknowns/context first
+  // while keeping marker + intention + refuse.
+  if (essentialText.length + 1 + footer.length > maxChars) {
+    const core = [
+      ONBOARDING_HANDOFF_MARKER,
+      `Intention: ${draft.intention.trim() || "(non établie)"}`,
+      `Objectif (proposition): ${(draft.objective.trim() || draft.intention.trim() || "(non établi)").slice(0, 400)}`,
+      `Nom: ${draft.name.trim() || "(non établi)"}${draft.nameProvisional ? " (provisoire)" : ""}`,
+      `Incertitudes: ${draft.unknowns.slice(0, 4).join(" · ") || "(aucune)"}`,
+      `Première orientation (proposition): ${draft.firstOrientation.trim().slice(0, 200) || "(aucune)"}`,
+      "Transcript d’accueil: (omis — budget)",
+    ].join("\n");
+    const text = `${core}\n${footer}`.slice(0, maxChars);
+    return {
+      text,
+      truncated: true,
+      transcriptTurnsIncluded: 0,
+      essentialPreserved: text.includes(ONBOARDING_HANDOFF_MARKER) &&
+        text.includes("Intention:"),
+    };
+  }
+
+  const budgetForTranscript =
+    maxChars - essentialText.length - footer.length - 2;
+  const turns: string[] = [];
+  let used = 0;
+  let included = 0;
+  for (const turn of transcript.slice(-12)) {
+    const label = turn.role === "user" ? "Pilote" : "Nora";
+    const body = turn.text.trim().slice(0, 280);
+    if (!body) continue;
+    const line = `- ${label}: ${body}`;
+    if (used + line.length + 1 > budgetForTranscript) break;
+    turns.push(line);
+    used += line.length + 1;
+    included += 1;
+  }
+
+  const text = [essentialText, ...turns, footer].join("\n");
+  return {
+    text,
+    truncated: included < Math.min(transcript.length, 12),
+    transcriptTurnsIncluded: included,
+    essentialPreserved: true,
+  };
+}
+
+/** Read-back helper for continuity tests — parses essential fields from handoff text. */
+export function parseOnboardingHandoffEssentials(context: string): {
+  markerPresent: boolean;
+  intention: string | null;
+  unknownsLine: string | null;
+  orientation: string | null;
+  claimsFullReplay: boolean;
+} {
+  const markerPresent = context.includes(ONBOARDING_HANDOFF_MARKER);
+  const intention =
+    context.match(/^Intention:\s*(.+)$/m)?.[1]?.trim() ?? null;
+  const unknownsLine =
+    context.match(/^Incertitudes:\s*(.+)$/m)?.[1]?.trim() ?? null;
+  const orientation =
+    context
+      .match(/^Première orientation \(proposition\):\s*(.+)$/m)?.[1]
+      ?.trim() ?? null;
+  return {
+    markerPresent,
+    intention,
+    unknownsLine,
+    orientation,
+    claimsFullReplay: /FULL TRANSCRIPT REPLAY:\s*oui/i.test(context),
+  };
+}
+
+export function onboardingSystemPrompt(): string {
+  return [
+    "Tu es Nora, assistante de SFIA Studio. Tu accueilles un Pilote avant la création d’un projet.",
+    "Tu n’as aucune autorité de création. Tu comprends, reformules, proposes, et peux recommander que la création soit possible.",
+    "Réponds en français courant, calme, naturel, proportionné. Pas de jargon inutile. Pas de questionnaire systématique.",
+    "Ne prétends pas être humaine. N’invente pas de faits, d’autorité, ni de contexte non dit.",
+    "Les champs intention/objectif/contexte/nom sont des repères — pas quatre questions obligatoires.",
+    "intentionKind: project_direction si une direction de projet (même exploratoire) est identifiable ; non_project si hors sujet / sans projet ; unclear sinon.",
+    "sufficientForCreateProposal=true seulement si intentionKind=project_direction.",
+    "refuseCreateDetected=true si le Pilote refuse ou reporte explicitement la création.",
+    "acceptCreateDetected=true seulement si le Pilote accepte explicitement de créer / revient sur un refus (« allons-y », « créons-le »). Confirmer un nom ≠ accepter de créer.",
+    "Un tour neutre (question, précision) ne doit activer ni refuseCreateDetected ni acceptCreateDetected.",
+    "Si le Pilote veut commencer vite avec peu d’infos, privilégie une création exploratoire honnête.",
+    "firstOrientationProposal = direction de travail provisoire non autoritative (pas un démarrage de cycle).",
+    "replyText = ton message conversationnel au Pilote (sans JSON visible).",
+  ].join("\n");
+}
+
+export function composerPlaceholder(draft: PreProjectDraft): string {
+  if (!draft.intention.trim()) return "Décrire ce que tu veux accomplir…";
+  if (studioCanCreate(draft)) return "Préciser, corriger, ou poser une question…";
+  return "Répondre à Nora…";
+}
+
+/** Morris-declared Human QA envelope (documentary) — NOT a technical hard cap. */
+export const NEW_PROJECT_HUMAN_QA_BUDGET_EUR_DECLARED = 10 as const;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index 99122664..865b5c9e 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -105,6 +105,10 @@
   /* 46:2 Composer Input 96× radius 8; Send 30×30 radius 7. */
   --pm6-ws-composer-input-h: 96px;
   --pm6-ws-composer-input-h-compact: 64px;
+  /* Autogrow ceiling — ~8×24px desktop / ~6 lines compact / mobile keeps 96px. */
+  --pm6-ws-composer-textarea-max-h: 192px;
+  --pm6-ws-composer-textarea-max-h-compact: 144px;
+  --pm6-ws-composer-textarea-max-h-mobile: 96px;
   --pm6-ws-composer-radius: 8px;
   --pm6-ws-send-size: 30px;
   --pm6-ws-send-radius: 7px;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts
new file mode 100644
index 00000000..cbe1e842
--- /dev/null
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts
@@ -0,0 +1,294 @@
+/**
+ * P6-HQA-NEWPROJECT-01 — pre-Project Nora turn (server-safe).
+ * Reuses ConversationProvider + F2 Product cognitive routing.
+ * No projectId. No Product write. No Cycle/HD.
+ *
+ * Usage observation is returned when the provider supplies it.
+ * No hard EUR cap is enforced here (campaignBudget is MW6-scoped;
+ * declaring 10 EUR ≠ technical hard cap).
+ */
+
+import { resolveF2ProductRoutedProvider } from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
+import type {
+  ConversationProvider,
+  ProviderUsage,
+} from "@/lib/platform/ai";
+import {
+  emptyDraft,
+  extractJsonObject,
+  mergeCognitiveIntoDraft,
+  NEW_PROJECT_ONBOARDING_JSON_SCHEMA,
+  NEW_PROJECT_ONBOARDING_SCHEMA_NAME,
+  onboardingSystemPrompt,
+  parseOnboardingCognitivePayload,
+  type ChatTurn,
+  type OnboardingCognitivePayload,
+  type PreProjectDraft,
+} from "./newProjectOnboardingContract";
+
+export type OnboardingUsageObservation = {
+  readonly inputTokens: number | null;
+  readonly outputTokens: number | null;
+  readonly totalTokens: number | null;
+  readonly model: string | null;
+  readonly providerResponseId: string | null;
+  readonly selectedModel: string | null;
+  readonly selectedReasoningEffort: string | null;
+  readonly boundarySubstitution: boolean;
+  /**
+   * Documentary only — Morris envelope for future Human QA.
+   * NOT enforced as a technical hard stop in this path.
+   */
+  readonly declaredHumanQaBudgetEur: 10;
+  readonly hardCapEnforced: false;
+};
+
+export type NewProjectOnboardingTurnInput = {
+  readonly userText: string;
+  readonly draft: PreProjectDraft;
+  readonly history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
+  readonly signal?: AbortSignal;
+  /** Test inject — bypasses Product routing provider construction. */
+  readonly provider?: ConversationProvider;
+};
+
+export type NewProjectOnboardingTurnResult =
+  | {
+      readonly ok: true;
+      readonly draft: PreProjectDraft;
+      readonly replyText: string;
+      readonly clarification: ChatTurn["clarification"];
+      readonly payload: OnboardingCognitivePayload;
+      readonly boundarySubstitution: boolean;
+      readonly usageObservation: OnboardingUsageObservation;
+    }
+  | {
+      readonly ok: false;
+      readonly code:
+        | "INPUT_EMPTY"
+        | "PROVIDER_ERROR"
+        | "PROVIDER_TIMEOUT"
+        | "PAYLOAD_INVALID"
+        | "ABORTED";
+      readonly message: string;
+      readonly draft: PreProjectDraft;
+      readonly usageObservation?: OnboardingUsageObservation;
+    };
+
+function buildMessages(input: {
+  history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
+  draft: PreProjectDraft;
+  userText: string;
+}): { role: "system" | "user" | "assistant"; content: string }[] {
+  const draftSnapshot = [
+    "État brouillon actuel (éphémère, non Product) :",
+    `- intention: ${input.draft.intention || "(vide)"}`,
+    `- intentionKind: ${input.draft.intentionKind}`,
+    `- nom: ${input.draft.name || "(vide)"}${input.draft.nameProvisional ? " (provisoire)" : ""}`,
+    `- objectif: ${input.draft.objective || "(vide)"}`,
+    `- contexte: ${input.draft.context || "(vide)"}`,
+    `- orientation: ${input.draft.firstOrientation || "(vide)"}`,
+    `- incertitudes: ${input.draft.unknowns.join(" · ") || "(aucune)"}`,
+    `- refuseCreate sticky: ${input.draft.explicitRefuseCreate ? "oui" : "non"}`,
+  ].join("\n");
+
+  const messages: { role: "system" | "user" | "assistant"; content: string }[] =
+    [
+      { role: "system", content: onboardingSystemPrompt() },
+      { role: "system", content: draftSnapshot },
+    ];
+
+  for (const turn of input.history) {
+    if (turn.role === "user") {
+      messages.push({ role: "user", content: turn.text });
+    } else {
+      messages.push({ role: "assistant", content: turn.text });
+    }
+  }
+  messages.push({ role: "user", content: input.userText });
+  return messages;
+}
+
+function toUsageObservation(input: {
+  usage: ProviderUsage | null | undefined;
+  selectedModel: string | null;
+  selectedReasoningEffort: string | null;
+  boundarySubstitution: boolean;
+}): OnboardingUsageObservation {
+  const usage = input.usage;
+  return {
+    inputTokens: usage?.inputTokens ?? null,
+    outputTokens: usage?.outputTokens ?? null,
+    totalTokens: usage?.totalTokens ?? null,
+    model: usage?.model ?? input.selectedModel,
+    providerResponseId: usage?.providerResponseId ?? null,
+    selectedModel: input.selectedModel,
+    selectedReasoningEffort: input.selectedReasoningEffort,
+    boundarySubstitution: input.boundarySubstitution,
+    declaredHumanQaBudgetEur: 10,
+    hardCapEnforced: false,
+  };
+}
+
+export async function runNewProjectOnboardingTurn(
+  input: NewProjectOnboardingTurnInput,
+): Promise<NewProjectOnboardingTurnResult> {
+  const userText = input.userText.replace(/\u0000/g, "").trim();
+  if (!userText) {
+    return {
+      ok: false,
+      code: "INPUT_EMPTY",
+      message: "Message vide.",
+      draft: input.draft ?? emptyDraft(),
+    };
+  }
+
+  if (input.signal?.aborted) {
+    return {
+      ok: false,
+      code: "ABORTED",
+      message: "Tour interrompu.",
+      draft: input.draft,
+    };
+  }
+
+  let provider = input.provider;
+  let boundarySubstitution = Boolean(input.provider);
+  let selectedModel: string | null = null;
+  let selectedReasoningEffort: string | null = null;
+  if (!provider) {
+    try {
+      const routed = resolveF2ProductRoutedProvider({
+        turnContext: {
+          projectCriticality: null,
+          userContentLength: userText.length,
+          historyMessageCount: input.history.length,
+          historyTotalChars: input.history.reduce(
+            (n, t) => n + t.text.length,
+            0,
+          ),
+          enableTools: false,
+        },
+        cognitiveTaskId: `new-project-onboarding:${input.draft.cognitiveTurns + 1}`,
+        correlationId: `cor:new-project-onboarding:${Date.now()}`,
+      });
+      provider = routed.provider;
+      boundarySubstitution = routed.boundarySubstitution;
+      selectedModel = routed.routing.selectedModel;
+      selectedReasoningEffort = routed.routing.selectedReasoningEffort;
+    } catch (error) {
+      return {
+        ok: false,
+        code: "PROVIDER_ERROR",
+        message:
+          error instanceof Error
+            ? error.message
+            : "Provider conversationnel indisponible.",
+        draft: input.draft,
+      };
+    }
+  }
+
+  if (typeof provider.completeStructured !== "function") {
+    return {
+      ok: false,
+      code: "PROVIDER_ERROR",
+      message: "Structured Outputs requis pour l’accueil New Project.",
+      draft: input.draft,
+    };
+  }
+
+  let completionText: string;
+  let usage: ProviderUsage | undefined;
+  try {
+    const completion = await provider.completeStructured({
+      messages: buildMessages({
+        history: input.history,
+        draft: input.draft,
+        userText,
+      }),
+      schemaName: NEW_PROJECT_ONBOARDING_SCHEMA_NAME,
+      jsonSchema: NEW_PROJECT_ONBOARDING_JSON_SCHEMA,
+      signal: input.signal,
+    });
+    completionText = completion.text;
+    usage = completion.usage;
+  } catch (error) {
+    if (
+      input.signal?.aborted ||
+      (error instanceof Error && error.name === "AbortError")
+    ) {
+      return {
+        ok: false,
+        code: "ABORTED",
+        message: "Tour interrompu.",
+        draft: input.draft,
+      };
+    }
+    const msg = error instanceof Error ? error.message : "Erreur provider.";
+    if (/timeout|ETIMEDOUT|aborted/i.test(msg)) {
+      return {
+        ok: false,
+        code: "PROVIDER_TIMEOUT",
+        message: "Le fournisseur n’a pas répondu à temps. Tu peux réessayer.",
+        draft: input.draft,
+      };
+    }
+    return {
+      ok: false,
+      code: "PROVIDER_ERROR",
+      message:
+        "Nora n’a pas pu répondre pour le moment. La conversation locale est conservée ; tu peux réessayer.",
+      draft: input.draft,
+    };
+  }
+
+  if (input.signal?.aborted) {
+    return {
+      ok: false,
+      code: "ABORTED",
+      message: "Tour interrompu.",
+      draft: input.draft,
+    };
+  }
+
+  const parsed = parseOnboardingCognitivePayload(
+    extractJsonObject(completionText),
+  );
+  const usageObservation = toUsageObservation({
+    usage,
+    selectedModel,
+    selectedReasoningEffort,
+    boundarySubstitution,
+  });
+  if (!parsed) {
+    return {
+      ok: false,
+      code: "PAYLOAD_INVALID",
+      message:
+        "La réponse de Nora n’était pas exploitable. Aucune donnée n’a été inventée ; tu peux reformuler.",
+      draft: input.draft,
+      usageObservation,
+    };
+  }
+
+  const nextDraft = mergeCognitiveIntoDraft(input.draft, parsed, userText);
+  const clarification =
+    parsed.clarificationQuestion && parsed.clarificationQuestion.trim()
+      ? {
+          title: "UNE PRÉCISION UTILE",
+          question: parsed.clarificationQuestion.trim(),
+          suggestions: parsed.suggestions,
+        }
+      : undefined;
+
+  return {
+    ok: true,
+    draft: nextDraft,
+    replyText: parsed.replyText,
+    clarification,
+    payload: parsed,
+    boundarySubstitution,
+    usageObservation,
+  };
+}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
index 90028b08..48a22ea7 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
@@ -82,6 +82,7 @@
   margin: 0;
   font-size: 0.98rem;
   font-weight: 600;
+  line-height: 1.35;
   color: var(--pm6-ink);
 }

@@ -169,6 +170,59 @@
   white-space: pre-wrap;
 }

+/* ---------- Nora activity in-thread (DP06 / P3 §28) ---------- */
+
+.noraActivityTurn {
+  animation: noraActivityIn 180ms ease-out;
+}
+
+.noraActivityTurn .bubbleAuthor {
+  display: inline-flex;
+  align-items: baseline;
+  gap: 8px;
+}
+
+.noraActivityBadge {
+  font-size: var(--pm6-text-caption);
+  font-weight: 500;
+  letter-spacing: 0.4px;
+  text-transform: none;
+  color: var(--pm6-accent);
+}
+
+.noraActivityText {
+  margin: 0;
+  font-size: var(--pm6-text-subtitle);
+  line-height: 1.6;
+  color: var(--pm6-ink-soft);
+}
+
+@keyframes noraActivityIn {
+  from {
+    opacity: 0;
+    transform: translateY(4px);
+  }
+  to {
+    opacity: 1;
+    transform: translateY(0);
+  }
+}
+
+@media (prefers-reduced-motion: reduce) {
+  .noraActivityTurn {
+    animation: noraActivityInReduced 120ms ease-out;
+  }
+
+  @keyframes noraActivityInReduced {
+    from {
+      opacity: 0;
+    }
+    to {
+      opacity: 1;
+    }
+  }
+}
+
 /* ---------- synthesis teaser (P3 46:2 / 190:306) ---------- */

 .synthesisTeaser {
@@ -725,6 +779,20 @@
   background: var(--pm6-ws-object-accent-prepared, #e97850);
 }

+/* P6-HQA-UI05 — progressive disclosure under compact Figma objects */
+.ui05ObjectDetails {
+  margin-top: 10px;
+  padding-top: 10px;
+  border-top: 1px solid #e8e0d7;
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3, 12px);
+}
+
+.ui05ObjectDetails .facts {
+  margin: 0;
+}
+
 .durableDetails {
   border: 1px solid var(--pm6-border-soft);
   border-radius: 10px;
@@ -936,19 +1004,20 @@
   box-sizing: border-box;
   width: 100%;
   min-height: var(--pm6-ws-composer-input-h, 96px);
-  height: var(--pm6-ws-composer-input-h, 96px);
+  height: auto;
   border: 1px solid #e2d8ce;
   border-radius: var(--pm6-ws-composer-radius, 8px);
   background: var(--pm6-focus-bar);
   padding: 14px 14px 12px;
-  overflow: hidden;
+  overflow: visible;
 }

 .composerInput {
   box-sizing: border-box;
   width: 100%;
-  min-height: 24px;
-  flex: 1 1 auto;
+  min-height: 48px; /* 2 × 24px — matches rows={2} compact empty state */
+  max-height: var(--pm6-ws-composer-textarea-max-h, 192px);
+  flex: 0 0 auto;
   resize: none;
   border: 0;
   border-radius: 0;
@@ -958,6 +1027,11 @@
   font-size: 0.9375rem; /* 15 */
   line-height: 24px;
   padding: 0;
+  overflow-x: hidden;
+  overflow-y: auto;
+  white-space: pre-wrap;
+  overflow-wrap: break-word;
+  word-break: break-word;
 }

 .composerInput::placeholder {
@@ -1145,16 +1219,18 @@

   .composerBox {
     flex-direction: row;
-    align-items: center;
+    align-items: flex-end;
     gap: 8px;
     min-height: var(--pm6-ws-composer-input-h-compact, 64px);
-    height: var(--pm6-ws-composer-input-h-compact, 64px);
+    height: auto;
     padding: 12px;
   }

   .composerInput {
     flex: 1 1 auto;
-    min-height: 0;
+    min-width: 0;
+    min-height: 24px;
+    max-height: var(--pm6-ws-composer-textarea-max-h-compact, 144px);
     font-size: 0.75rem;
     line-height: 1.35;
   }
@@ -1282,7 +1358,7 @@
     flex: 1 1 auto;
     min-width: 0;
     min-height: 38px;
-    max-height: 96px;
+    max-height: var(--pm6-ws-composer-textarea-max-h-mobile, 96px);
     resize: none;
     padding: 8px 0;
     font-size: 0.8125rem;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index bb238783..7cfbcf82 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -14,12 +14,15 @@ import {
   executionSemanticUserLabel,
   formatNoraAssistantDisplayText,
   isBoundedRunningAttemptRefreshable,
+  pilotFacingF2ChipLabel,
   postExecutionUserSummary,
-  profileRationalePiloteLabel,
+  projectPilotProposalCard,
+  projectPilotRecommendationCard,
+  scrubPiloteFacingEngineJargon,
 } from "@/features/project-assistant/presentationLabels";
 import type { AssistantToolEventDto } from "@/features/project-assistant/types";
 import type { F2DecisionKind } from "@/features/project-assistant/f2/types";
-import { useEffect, useId } from "react";
+import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
 import type { ProductConversationController } from "../hooks/useProductConversation";
 import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
 import type { WorkRecommendationProjectionCard } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
@@ -74,6 +77,45 @@ function sourceStatusLabel(status: AssistantToolEventDto["status"]): string {
   }
 }

+/** P6-HQA-UI05 — honest compact status (Figma 46:98 / 46:107). */
+function f2RecommendationStatusLabel(input: {
+  readonly proposalStatus?: string | null;
+  readonly cycleStatus?: string | null;
+  readonly state?: string | null;
+}): string {
+  const cycle = (input.cycleStatus ?? "").toLowerCase();
+  if (cycle === "active" || cycle === "executing") return "Cycle actif";
+  const status = (input.proposalStatus ?? "").toUpperCase();
+  if (status === "DECISION_REQUIRED") return "En attente de décision";
+  if (status === "READY_NO_GATE") return "Candidat prêt";
+  if (status === "AMENDMENT_REQUIRED") return "Modification demandée";
+  if (status === "REFUSED") return "Refusé";
+  const state = (input.state ?? "").trim();
+  if (state) return state.length > 42 ? `${state.slice(0, 39)}…` : state;
+  return "À examiner";
+}
+
+function f2ProposalStatusLabel(input: {
+  readonly proposalStatus?: string | null;
+  readonly nextActionKind?: string | null;
+}): string {
+  const status = (input.proposalStatus ?? "").toUpperCase();
+  if (status === "DECISION_REQUIRED") return "En attente de décision";
+  if (status === "READY_NO_GATE") return "Candidat prêt";
+  if (status === "AMENDMENT_REQUIRED") return "Modification demandée";
+  if (status === "REFUSED") return "Refusé";
+  if (input.nextActionKind === "decision") return "En attente de décision";
+  return "À examiner";
+}
+
+function f2ObjectMetaLine(parts: Array<string | null | undefined>): string {
+  const clean = parts
+    .map((p) => (p ?? "").replace(/\s+/g, " ").trim())
+    .filter((p) => p.length > 0);
+  if (clean.length === 0) return "Projet · selon la direction produit actuelle";
+  return clean.slice(0, 3).join(" · ");
+}
+
 export type ConversationSurfaceProps = {
   controller: ProductConversationController;
   /**
@@ -105,6 +147,18 @@ export type ConversationSurfaceProps = {
  * execute continuity). Legacy F2/F3 stays behind `exposeLegacyAuthorityPath`
  * for harvest / RETIRE LATER proofs only — never enabled on nominal /studio.
  */
+/** Sync textarea height to content up to CSS max-height; then scroll internally. */
+function syncComposerTextareaHeight(el: HTMLTextAreaElement | null): void {
+  if (!el) return;
+  el.style.height = "auto";
+  const maxRaw = getComputedStyle(el).maxHeight;
+  const maxPx = maxRaw === "none" ? Number.POSITIVE_INFINITY : parseFloat(maxRaw);
+  const next = Number.isFinite(maxPx)
+    ? Math.min(el.scrollHeight, maxPx)
+    : el.scrollHeight;
+  el.style.height = `${Math.max(next, 0)}px`;
+}
+
 export function ConversationSurface({
   controller,
   exposeLegacyAuthorityPath = false,
@@ -117,6 +171,13 @@ export function ConversationSurface({
 }: ConversationSurfaceProps) {
   const fieldId = useId();
   const liveRegionId = useId();
+  const composerInputRef = useRef<HTMLTextAreaElement | null>(null);
+  const [recommendationOpen, setRecommendationOpen] = useState(
+    exposeLegacyAuthorityPath,
+  );
+  const [proposalOpen, setProposalOpen] = useState(exposeLegacyAuthorityPath);
+  const [synthesisOpen, setSynthesisOpen] = useState(false);
+  const [executionContractOpen, setExecutionContractOpen] = useState(false);
   const {
     listRef,
     messages,
@@ -275,6 +336,52 @@ export function ConversationSurface({
     uiState,
     stopAvailable,
   });
+  /**
+   * DP06 / P3 §28 — transient Nora activity belongs in the transcript, not the
+   * composer. STREAMING is NOT OBSERVABLE on this Product path (no fake stream).
+   * start/activity only; STOPPED/ERROR keep their dedicated banners below.
+   */
+  const showNoraActivityInThread =
+    noraActivity.phase === "start" || noraActivity.phase === "activity";
+  const pilotRecommendationCard = f2?.qualification
+    ? projectPilotRecommendationCard({
+        cycleLabel: f2.qualification.cycleLabel,
+        recommendedProfile: f2.qualification.recommendedProfile,
+        rationale: f2.qualification.rationale,
+        criticalSignalsPresent: f2.qualification.criticalSignalsPresent,
+        cycleStatus: f2.qualification.cycleStatus,
+        cycleInstanceId: f2.qualification.cycleInstanceId,
+        freshnessLabel: qualificationFreshness.label,
+      })
+    : null;
+  const pilotProposalCard = activeProposal
+    ? projectPilotProposalCard({
+        rephrasedRequest: activeProposal.rephrasedRequest,
+        objective: activeProposal.objective,
+        rationale: activeProposal.rationale,
+        expectedOutcome: activeProposal.expectedOutcome,
+        scope: activeProposal.scope,
+        outOfScope: activeProposal.outOfScope,
+        morrisGateRequired: activeProposal.morrisGateRequired,
+        status: activeProposal.status,
+        nextPossibleStep: activeProposal.nextPossibleStep,
+        cycleLabel: f2?.qualification?.cycleLabel,
+        cycleStatus: f2?.qualification?.cycleStatus,
+        cycleInstanceId: f2?.qualification?.cycleInstanceId,
+      })
+    : null;
+  const pilotEphemeralNotice = (() => {
+    const raw = (ephemeralNotice ?? "").trim();
+    if (!raw) return "";
+    // Process-local F2 disclosure — keep full text on legacy/diagnostic only.
+    if (
+      !exposeLegacyAuthorityPath &&
+      /Product SQLite|TEMPORARY WITH EXIT|mémoire de processus/i.test(raw)
+    ) {
+      return "La recommandation et la proposition restent distinctes d'une décision. Rien n'est exécuté automatiquement.";
+    }
+    return scrubPiloteFacingEngineJargon(raw);
+  })();

   const boundAwaitingDecision =
     !!decisionSubjectContinuity &&
@@ -290,9 +397,45 @@ export function ConversationSurface({
     governedExecutionContinuity.kind === "active" &&
     governedExecutionContinuity.contract.status === "confirmation_required" &&
     !boundAwaitingDecision;
+  /** True ExecutionContract prepared (not a ProductSynthesis). */
+  const preparedExecutionContract =
+    !!governedExecutionContinuity &&
+    typeof governedExecutionContinuity === "object" &&
+    "ok" in governedExecutionContinuity &&
+    governedExecutionContinuity.ok &&
+    governedExecutionContinuity.kind === "active" &&
+    !confirmationRequiredMoment
+      ? governedExecutionContinuity.contract
+      : null;
   const focusedGovernedMoment =
     boundAwaitingDecision || confirmationRequiredMoment;

+  function executionContractStatusLabel(contract: {
+    readonly status: string;
+    readonly effectConfirmationRequired?: boolean;
+  }): string {
+    if (
+      contract.status === "confirmation_required" ||
+      contract.effectConfirmationRequired === true
+    ) {
+      return "Confirmation requise";
+    }
+    if (contract.status === "confirmed") return "Confirmé";
+    if (
+      contract.status === "validated" ||
+      contract.status === "proposed" ||
+      contract.status === "draft"
+    ) {
+      return "Prête à examiner";
+    }
+    return contract.status;
+  }
+
+  useLayoutEffect(() => {
+    if (focusedGovernedMoment) return;
+    syncComposerTextareaHeight(composerInputRef.current);
+  }, [draft, focusedGovernedMoment]);
+
   return (
     <section
       className={styles.root}
@@ -332,7 +475,7 @@ export function ConversationSurface({
         aria-live="polite"
         id={liveRegionId}
       >
-        {messages.length === 0 && !focusedGovernedMoment ? (
+        {messages.length === 0 && !focusedGovernedMoment && !showNoraActivityInThread ? (
           <div className={styles.threadEmpty} data-testid="project-assistant-empty">
             <p className={styles.threadEmptyTitle}>
               Dites à Nora ce que vous voulez accomplir
@@ -342,7 +485,7 @@ export function ConversationSurface({
               vous propose une décision. Rien n&apos;est lancé sans votre accord.
             </p>
           </div>
-        ) : messages.length === 0 ? null : (
+        ) : messages.length === 0 && !showNoraActivityInThread ? null : (
               messages.map((message) => (
             <article
               key={message.id}
@@ -374,6 +517,34 @@ export function ConversationSurface({
             </article>
           ))
         )}
+        {showNoraActivityInThread ? (
+          <article
+            className={`${styles.turnNora} ${styles.noraActivityTurn}`}
+            data-testid="project-assistant-nora-activity"
+            data-nora-phase={noraActivity.phase}
+            data-nora-stop={
+              noraActivity.stopAvailable ? "available" : "unavailable"
+            }
+            aria-busy="true"
+          >
+            <div className={styles.bubble}>
+              <p
+                className={styles.bubbleAuthor}
+                data-role="assistant"
+                data-testid="project-assistant-nora-activity-heading"
+              >
+                Nora
+                <span className={styles.noraActivityBadge}>En cours</span>
+              </p>
+              <p
+                className={styles.noraActivityText}
+                data-testid="project-assistant-nora-activity-label"
+              >
+                {noraActivity.label}
+              </p>
+            </div>
+          </article>
+        ) : null}
       </div>

       {f2 ? (
@@ -383,18 +554,30 @@ export function ConversationSurface({
           aria-live="polite"
         >
           {f2.labels.recommendation ? (
-            <span className={styles.chip}>{f2.labels.recommendation}</span>
+            <span className={styles.chip}>
+              {pilotFacingF2ChipLabel(f2.labels.recommendation)}
+            </span>
           ) : null}
           {f2.labels.proposition ? (
-            <span className={styles.chip}>{f2.labels.proposition}</span>
+            <span className={styles.chip}>
+              {pilotFacingF2ChipLabel(f2.labels.proposition)}
+            </span>
           ) : null}
           {f2.labels.decisionRequired && !reservationResolutionProposal ? (
-            <span className={styles.chipGold}>{f2.labels.decisionRequired}</span>
+            <span className={styles.chipGold}>
+              {pilotFacingF2ChipLabel(f2.labels.decisionRequired)}
+            </span>
           ) : null}
           {f2.labels.decisionTaken ? (
-            <span className={styles.chipOk}>{f2.labels.decisionTaken}</span>
+            <span className={styles.chipOk}>
+              {pilotFacingF2ChipLabel(f2.labels.decisionTaken)}
+            </span>
+          ) : null}
+          {exposeLegacyAuthorityPath ? (
+            <span className={styles.chipQuiet}>
+              {pilotFacingF2ChipLabel(f2.labels.noExecution)}
+            </span>
           ) : null}
-          <span className={styles.chipQuiet}>{f2.labels.noExecution}</span>
         </div>
       ) : null}

@@ -478,87 +661,156 @@ export function ConversationSurface({
         </section>
       ) : null}

-      {f2?.qualification && !reservationResolutionProposal ? (
+      {f2?.qualification &&
+      pilotRecommendationCard &&
+      !reservationResolutionProposal ? (
         <section
-          className={styles.card}
+          className={styles.subCardGold}
           data-testid="project-assistant-qualification"
+          data-ui05-object="recommendation"
+          data-expanded={recommendationOpen ? "true" : "false"}
           aria-labelledby={`${fieldId}-qualification`}
         >
-          <header className={styles.cardHead}>
-            <p className={styles.cardEyebrow}>Lecture de Nora</p>
-            <h3 id={`${fieldId}-qualification`} className={styles.cardTitle}>
-              Ce que Nora comprend
-            </h3>
-            <p className={styles.cardNote} data-testid="f2-recommendation-freshness">
-              {f2.qualification.recommendationLabel} ·{" "}
-              {qualificationFreshness.label}
-            </p>
-            <p className={styles.cardNote}>
-              Une recommandation n&apos;est pas une décision humaine.
-            </p>
-          </header>
-          <dl className={styles.facts}>
-            <div className={styles.fact}>
-              <dt>Type de travail</dt>
-              <dd data-testid="f2-cycle">{f2.qualification.cycleLabel}</dd>
-            </div>
-            <div className={styles.fact}>
-              <dt>Approche recommandée</dt>
-              <dd data-testid="f2-profile">
-                {f2.qualification.recommendedProfile}
-              </dd>
+          <div className={styles.p3CardHead}>
+            <div className={styles.p3CardBody}>
+              <p className={styles.p3CardEyebrow}>Recommandation</p>
+              <h3
+                id={`${fieldId}-qualification`}
+                className={styles.p3CardTitle}
+                data-testid="f2-cycle"
+              >
+                {pilotRecommendationCard.recommendation}
+              </h3>
+              <p className={styles.p3CardStamp} data-testid="f2-recommendation-meta">
+                {f2ObjectMetaLine([
+                  pilotRecommendationCard.freshnessLabel,
+                  pilotRecommendationCard.showProfile
+                    ? pilotRecommendationCard.profileLabel
+                    : null,
+                  "Une recommandation n'est pas une décision",
+                ])}
+              </p>
+              {pilotRecommendationCard.freshnessLabel ? (
+                <p
+                  className={styles.srOnly}
+                  data-testid="f2-recommendation-freshness"
+                >
+                  {pilotRecommendationCard.freshnessLabel}
+                </p>
+              ) : (
+                <p
+                  className={styles.srOnly}
+                  data-testid="f2-recommendation-freshness"
+                >
+                  {qualificationFreshness.label}
+                </p>
+              )}
             </div>
-            <div className={styles.factWide}>
-              <dt>Pourquoi</dt>
-              <dd data-testid="f2-rationale">
-                {profileRationalePiloteLabel(f2.qualification.rationale)}
-              </dd>
+            <div className={styles.p3CardRight}>
+              <span
+                className={styles.p3CardStatusWarn}
+                data-testid="f2-recommendation-state"
+              >
+                {f2RecommendationStatusLabel({
+                  proposalStatus: activeProposal?.status,
+                  cycleStatus: f2.qualification.cycleStatus,
+                  state: pilotRecommendationCard.state,
+                })}
+              </span>
+              <button
+                type="button"
+                className={styles.p3CardLink}
+                data-testid="f2-recommendation-open"
+                aria-expanded={recommendationOpen}
+                onClick={() => setRecommendationOpen((v) => !v)}
+              >
+                {recommendationOpen ? "Fermer" : "Ouvrir →"}
+              </button>
             </div>
-          </dl>
-          <details className={styles.details}>
-            <summary>Détails techniques</summary>
-            <dl className={styles.facts}>
-              <div className={styles.factWide}>
-                <dt>Rationale technique</dt>
-                <dd data-testid="f2-rationale-technical">
-                  {f2.qualification.rationale}
-                </dd>
-              </div>
-              <div className={styles.factWide}>
-                <dt>Identifiant de cycle</dt>
-                <dd>{f2.qualification.cycleTypeId}</dd>
-              </div>
-              {f2.qualification.cycleInstanceId ? (
+          </div>
+          {recommendationOpen ? (
+            <div
+              className={styles.ui05ObjectDetails}
+              data-testid="f2-recommendation-details"
+            >
+              <p className={styles.srOnly}>{pilotRecommendationCard.title}</p>
+              <dl className={styles.facts}>
                 <div className={styles.factWide}>
-                  <dt>Cycle rattaché</dt>
-                  <dd data-testid="f2-cycle-instance">
-                    {f2.qualification.cycleInstanceId}
-                    {f2.qualification.cycleStatus
-                      ? ` · ${f2.qualification.cycleStatus}`
-                      : ""}
-                  </dd>
+                  <dt>Pourquoi</dt>
+                  <dd data-testid="f2-rationale">{pilotRecommendationCard.why}</dd>
                 </div>
-              ) : null}
-              {f2.qualification.ckcResolutionRef ? (
-                <div className={styles.factWide}>
-                  <dt>Réf. résolution</dt>
-                  <dd data-testid="f2-ckc-ref">
-                    {f2.qualification.ckcResolutionRef}
+                {pilotRecommendationCard.showProfile &&
+                pilotRecommendationCard.profileLabel ? (
+                  <div className={styles.fact}>
+                    <dt>Approche</dt>
+                    <dd data-testid="f2-profile">
+                      {pilotRecommendationCard.profileLabel}
+                    </dd>
+                  </div>
+                ) : (
+                  <dd className={styles.srOnly} data-testid="f2-profile">
+                    {f2.qualification.recommendedProfile}
                   </dd>
-                </div>
+                )}
+              </dl>
+              {exposeLegacyAuthorityPath ? (
+                <details className={styles.details}>
+                  <summary>Détails techniques</summary>
+                  <dl className={styles.facts}>
+                    <div className={styles.factWide}>
+                      <dt>Rationale technique</dt>
+                      <dd data-testid="f2-rationale-technical">
+                        {f2.qualification.rationale}
+                      </dd>
+                    </div>
+                    <div className={styles.factWide}>
+                      <dt>Identifiant de cycle</dt>
+                      <dd>{f2.qualification.cycleTypeId}</dd>
+                    </div>
+                    {f2.qualification.cycleInstanceId ? (
+                      <div className={styles.factWide}>
+                        <dt>Cycle rattaché</dt>
+                        <dd data-testid="f2-cycle-instance">
+                          {f2.qualification.cycleInstanceId}
+                          {f2.qualification.cycleStatus
+                            ? ` · ${f2.qualification.cycleStatus}`
+                            : ""}
+                        </dd>
+                      </div>
+                    ) : null}
+                    {f2.qualification.ckcResolutionRef ? (
+                      <div className={styles.factWide}>
+                        <dt>Réf. résolution</dt>
+                        <dd data-testid="f2-ckc-ref">
+                          {f2.qualification.ckcResolutionRef}
+                        </dd>
+                      </div>
+                    ) : null}
+                    <div className={styles.factWide}>
+                      <dt>Provenance</dt>
+                      <dd data-testid="f2-qualification-provenance">
+                        catalogue {f2.qualification.catalogVersion} ·{" "}
+                        {f2.qualification.detailedStatus}
+                        {f2.qualification.capitalizationViaCycleTypeId
+                          ? " · capitalisation via cycleType"
+                          : ""}
+                      </dd>
+                    </div>
+                  </dl>
+                </details>
               ) : null}
-              <div className={styles.factWide}>
-                <dt>Provenance</dt>
-                <dd data-testid="f2-qualification-provenance">
-                  catalogue {f2.qualification.catalogVersion} ·{" "}
-                  {f2.qualification.detailedStatus}
-                  {f2.qualification.capitalizationViaCycleTypeId
-                    ? " · capitalisation via cycleType"
-                    : ""}
-                </dd>
-              </div>
-            </dl>
-          </details>
+            </div>
+          ) : (
+            <>
+              <p className={styles.srOnly} data-testid="f2-rationale">
+                {pilotRecommendationCard.why}
+              </p>
+              <p className={styles.srOnly} data-testid="f2-profile">
+                {pilotRecommendationCard.profileLabel ??
+                  f2.qualification.recommendedProfile}
+              </p>
+            </>
+          )}
         </section>
       ) : null}

@@ -642,87 +894,203 @@ export function ConversationSurface({
         </div>
       ) : null}
       {activeProposal &&
+      pilotProposalCard &&
       !reservationResolutionProposal &&
       !focusedGovernedMoment ? (
         <section
-          className={styles.card}
+          className={styles.subCardGold}
           data-testid="project-assistant-proposal"
+          data-ui05-object="proposal"
+          data-expanded={proposalOpen ? "true" : "false"}
+          data-proposal-status={activeProposal.status}
           aria-labelledby={`${fieldId}-proposal`}
         >
-          <header className={styles.cardHead}>
-            <p className={styles.cardEyebrow}>Proposition</p>
-            <h3 id={`${fieldId}-proposal`} className={styles.cardTitle}>
-              Ce que Nora propose
-            </h3>
-            <p className={styles.cardNote} data-testid="f2-proposal-id">
-              Statut {activeProposal.status}
-            </p>
-          </header>
+          <div className={styles.p3CardHead}>
+            <div className={styles.p3CardBody}>
+              <p className={styles.p3CardEyebrow}>Proposition</p>
+              <h3
+                id={`${fieldId}-proposal`}
+                className={styles.p3CardTitle}
+                data-testid="f2-proposal-main"
+              >
+                {pilotProposalCard.proposition}
+              </h3>
+              <p className={styles.p3CardStamp} data-testid="f2-proposal-meta">
+                {f2ObjectMetaLine([
+                  activeProposal.scope
+                    ? scrubPiloteFacingEngineJargon(activeProposal.scope).slice(
+                        0,
+                        80,
+                      )
+                    : null,
+                  pilotProposalCard.nextActionKind === "decision"
+                    ? "Décision potentiellement requise"
+                    : "Aucune décision structurée requise pour l'instant",
+                ])}
+              </p>
+              <p
+                className={styles.srOnly}
+                data-testid="f2-proposal-id"
+                data-proposal-status={activeProposal.status}
+              >
+                Proposition structurée
+              </p>
+            </div>
+            <div className={styles.p3CardRight}>
+              <span
+                className={
+                  activeProposal.status === "DECISION_REQUIRED"
+                    ? styles.p3CardStatusWarn
+                    : styles.p3CardStatusReady
+                }
+                data-testid="f2-proposal-status-label"
+              >
+                {f2ProposalStatusLabel({
+                  proposalStatus: activeProposal.status,
+                  nextActionKind: pilotProposalCard.nextActionKind,
+                })}
+              </span>
+              <button
+                type="button"
+                className={styles.p3CardLink}
+                data-testid="f2-proposal-open"
+                aria-expanded={proposalOpen}
+                onClick={() => setProposalOpen((v) => !v)}
+              >
+                {proposalOpen ? "Fermer" : "Ouvrir →"}
+              </button>
+            </div>
+          </div>
           {activeProposal.status === "AMENDMENT_REQUIRED" ? (
             <p className={styles.noticeWarn} data-testid="f2-amend-deferred-notice">
               {G_UX_08_AMEND_DEFERRED_MESSAGE}
             </p>
           ) : null}
-          <dl className={styles.facts}>
-            <div className={styles.factWide}>
-              <dt>Demande reformulée</dt>
-              <dd>{activeProposal.rephrasedRequest}</dd>
-            </div>
-            <div className={styles.factWide}>
-              <dt>Objectif</dt>
-              <dd>{activeProposal.objective}</dd>
-            </div>
-            <div className={styles.factWide}>
-              <dt>Ce qui est couvert</dt>
-              <dd data-testid="f2-proposal-scope">{activeProposal.scope}</dd>
-            </div>
-            <div className={styles.factWide}>
-              <dt>Ce qui reste hors périmètre</dt>
-              <dd data-testid="f2-proposal-out-of-scope">
-                {activeProposal.outOfScope
-                  .map((item) =>
-                    /cursor\s*real/i.test(item)
-                      ? "Exécution réelle hors périmètre de cette étape"
-                      : item,
-                  )
-                  .join(" · ")}
-              </dd>
-            </div>
-            <div className={styles.fact}>
-              <dt>Votre accord</dt>
-              <dd data-testid="f2-gate-required">
-                {activeProposal.morrisGateRequired
-                  ? "Décision sur la proposition requise"
-                  : "Aucune décision requise pour l’instant"}
-              </dd>
-            </div>
-            <div className={styles.fact}>
-              <dt>Étape suivante possible</dt>
-              <dd>{activeProposal.nextPossibleStep}</dd>
-            </div>
-          </dl>
-          <details className={styles.details}>
-            <summary>Détails techniques</summary>
-            <dl className={styles.facts}>
-              <div className={styles.factWide}>
-                <dt>Contexte</dt>
-                <dd data-testid="f2-context-snapshot">
-                  {activeProposal.contextSnapshot.projectId} /{" "}
-                  {activeProposal.contextSnapshot.lpsId}@
-                  {activeProposal.contextSnapshot.lpsVersion}
-                  {activeProposal.contextSnapshot.activeCycleInstanceId
-                    ? ` · cycle ${activeProposal.contextSnapshot.activeCycleInstanceId}`
-                    : ""}
+          {proposalOpen ? (
+            <div
+              className={styles.ui05ObjectDetails}
+              data-testid="f2-proposal-details"
+            >
+              <p className={styles.srOnly}>{pilotProposalCard.title}</p>
+              <dl className={styles.facts}>
+                {pilotProposalCard.why ? (
+                  <div className={styles.factWide}>
+                    <dt>Pourquoi</dt>
+                    <dd data-testid="f2-proposal-why">{pilotProposalCard.why}</dd>
+                  </div>
+                ) : null}
+                {pilotProposalCard.consequence ? (
+                  <div className={styles.factWide}>
+                    <dt>Suite attendue</dt>
+                    <dd data-testid="f2-proposal-consequence">
+                      {pilotProposalCard.consequence}
+                    </dd>
+                  </div>
+                ) : null}
+                {pilotProposalCard.outOfScope ? (
+                  <div className={styles.factWide}>
+                    <dt>Hors périmètre</dt>
+                    <dd data-testid="f2-proposal-out-of-scope">
+                      {pilotProposalCard.outOfScope}
+                    </dd>
+                  </div>
+                ) : (
+                  <dd
+                    className={styles.srOnly}
+                    data-testid="f2-proposal-out-of-scope"
+                  />
+                )}
+                <div className={styles.factWide}>
+                  <dt>Votre accord</dt>
+                  <dd data-testid="f2-gate-required">
+                    {pilotProposalCard.agreement}
+                  </dd>
+                </div>
+                <div className={styles.factWide}>
+                  <dt>Prochaine étape</dt>
+                  <dd
+                    data-testid="f2-proposal-next-action"
+                    data-next-kind={pilotProposalCard.nextActionKind}
+                  >
+                    {pilotProposalCard.nextAction}
+                  </dd>
+                </div>
+                <dd className={styles.srOnly} data-testid="f2-proposal-scope">
+                  {activeProposal.scope}
                 </dd>
-              </div>
-            </dl>
-          </details>
-          <p className={styles.noticeQuiet} data-testid="f2-process-local-notice">
-            {activeProposal.processLocalNotice}
-          </p>
-          <p className={styles.stamp} data-testid="f2-no-execution">
-            AUCUNE EXÉCUTION
-          </p>
+              </dl>
+              {exposeLegacyAuthorityPath ? (
+                <>
+                  <details className={styles.details}>
+                    <summary>Détails techniques</summary>
+                    <dl className={styles.facts}>
+                      <div className={styles.factWide}>
+                        <dt>Contexte</dt>
+                        <dd data-testid="f2-context-snapshot">
+                          {activeProposal.contextSnapshot.projectId} /{" "}
+                          {activeProposal.contextSnapshot.lpsId}@
+                          {activeProposal.contextSnapshot.lpsVersion}
+                          {activeProposal.contextSnapshot.activeCycleInstanceId
+                            ? ` · cycle ${activeProposal.contextSnapshot.activeCycleInstanceId}`
+                            : ""}
+                        </dd>
+                      </div>
+                      <div className={styles.factWide}>
+                        <dt>Étape moteur</dt>
+                        <dd>{activeProposal.nextPossibleStep}</dd>
+                      </div>
+                    </dl>
+                  </details>
+                  <p
+                    className={styles.noticeQuiet}
+                    data-testid="f2-process-local-notice"
+                  >
+                    {activeProposal.processLocalNotice}
+                  </p>
+                  <p className={styles.stamp} data-testid="f2-no-execution">
+                    AUCUNE EXÉCUTION
+                  </p>
+                </>
+              ) : (
+                <>
+                  <p
+                    className={styles.srOnly}
+                    data-testid="f2-process-local-notice"
+                  >
+                    {activeProposal.processLocalNotice}
+                  </p>
+                  <p className={styles.srOnly} data-testid="f2-no-execution">
+                    Rien n&apos;a encore été exécuté
+                  </p>
+                </>
+              )}
+            </div>
+          ) : (
+            <>
+              <p className={styles.srOnly} data-testid="f2-gate-required">
+                {pilotProposalCard.agreement}
+              </p>
+              <p
+                className={styles.srOnly}
+                data-testid="f2-proposal-next-action"
+                data-next-kind={pilotProposalCard.nextActionKind}
+              >
+                {pilotProposalCard.nextAction}
+              </p>
+              <p className={styles.srOnly} data-testid="f2-proposal-scope">
+                {activeProposal.scope}
+              </p>
+              <p className={styles.srOnly} data-testid="f2-proposal-out-of-scope">
+                {pilotProposalCard.outOfScope ?? ""}
+              </p>
+              <p className={styles.srOnly} data-testid="f2-process-local-notice">
+                {activeProposal.processLocalNotice}
+              </p>
+              <p className={styles.srOnly} data-testid="f2-no-execution">
+                Rien n&apos;a encore été exécuté
+              </p>
+            </>
+          )}
         </section>
       ) : null}

@@ -1436,43 +1804,6 @@ export function ConversationSurface({
                 </div>
               ) : null}

-          {/* P3 46:2 — ACTION PRÉPARÉE from current synthesis when present. */}
-          {latestSynthesis ? (
-            <div
-              className={styles.subCardPrepared}
-              data-testid="conversation-prepared-action-card"
-            >
-              <div className={styles.p3CardHead}>
-                <div className={styles.p3CardBody}>
-                  <p className={styles.p3CardEyebrow}>Action préparée</p>
-                  <p className={styles.p3CardTitle}>
-                    {latestSynthesis.title.replace(
-                      /^Synthèse\s*[—–-]\s*/i,
-                      "",
-                    ) || latestSynthesis.title}
-                  </p>
-                </div>
-                <div className={styles.p3CardRight}>
-                  <span className={styles.p3CardStatusReady}>
-                    Prête à examiner
-                  </span>
-                  {onOpenSynthesis ? (
-                    <button
-                      type="button"
-                      className={styles.p3CardLink}
-                      data-testid="conversation-open-prepared-action"
-                      onClick={() =>
-                        onOpenSynthesis(latestSynthesis.synthesisId)
-                      }
-                    >
-                      Ouvrir →
-                    </button>
-                  ) : null}
-                </div>
-              </div>
-            </div>
-          ) : null}
-
           {/* P3 46:2 — when Work Recommendation cards lead, keep technical
               relecture out of the conversation chrome (available in Historique). */}
           {durableEvidenceOutcome &&
@@ -1623,31 +1954,139 @@ export function ConversationSurface({
         </section>
       ) : null}

-      {latestSynthesis && onOpenSynthesis ? (
-        <section
-          className={styles.synthesisTeaser}
-          data-testid="conversation-synthesis-teaser"
+      {/* P6-HQA-UI05 — ProductSynthesis compact object (never ExecutionContract). */}
+      {latestSynthesis ? (
+        <div
+          className={styles.subCardGold}
+          data-testid="conversation-synthesis-card"
+          data-ui05-object="synthesis"
+          data-expanded={synthesisOpen ? "true" : "false"}
           aria-live="polite"
         >
-          <p className={styles.synthesisEyebrow}>Synthèse disponible</p>
-          <p className={styles.synthesisTitle}>{latestSynthesis.title}</p>
-          <p
-            className={styles.synthesisBody}
-            data-testid="conversation-synthesis-summary"
-          >
-            {latestSynthesis.verdictLabel === "atteint"
-              ? "Résultat atteint — aucun blocage identifié."
-              : `${presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)} · ${synthesisSummaryExcerpt(latestSynthesis, 120)}`}
-          </p>
-          <button
-            type="button"
-            className={styles.synthesisLink}
-            data-testid="conversation-open-synthesis"
-            onClick={() => onOpenSynthesis(latestSynthesis.synthesisId)}
-          >
-            Voir la synthèse complète →
-          </button>
-        </section>
+          <div className={styles.p3CardHead}>
+            <div className={styles.p3CardBody}>
+              <p className={styles.p3CardEyebrow}>Synthèse</p>
+              <p
+                className={styles.p3CardTitle}
+                data-testid="conversation-synthesis-summary"
+              >
+                {latestSynthesis.title.replace(/^Synthèse\s*[—–-]\s*/i, "") ||
+                  latestSynthesis.title}
+              </p>
+              <p className={styles.p3CardStamp}>
+                {f2ObjectMetaLine([
+                  "Résultat de cycle",
+                  latestSynthesis.verdictLabel
+                    ? presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)
+                    : null,
+                  "consultation seule — pas un contrat d'exécution",
+                ])}
+              </p>
+            </div>
+            <div className={styles.p3CardRight}>
+              <span className={styles.p3CardStatusReady}>
+                {latestSynthesis.verdictLabel
+                  ? presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)
+                  : "Disponible"}
+              </span>
+              <button
+                type="button"
+                className={styles.p3CardLink}
+                data-testid="conversation-open-synthesis"
+                aria-expanded={synthesisOpen}
+                onClick={() => {
+                  setSynthesisOpen((v) => !v);
+                  if (!synthesisOpen && onOpenSynthesis) {
+                    onOpenSynthesis(latestSynthesis.synthesisId);
+                  }
+                }}
+              >
+                {synthesisOpen ? "Fermer" : "Ouvrir →"}
+              </button>
+            </div>
+          </div>
+          {synthesisOpen ? (
+            <div
+              className={styles.ui05ObjectDetails}
+              data-testid="conversation-synthesis-details"
+            >
+              <p className={styles.cardNote}>
+                {synthesisSummaryExcerpt(latestSynthesis) ||
+                  "Synthèse disponible pour consultation. Ce n'est pas un contrat d'exécution."}
+              </p>
+            </div>
+          ) : null}
+        </div>
+      ) : null}
+
+      {/* P3 46:107 — Action préparée ONLY from a real ExecutionContract projection. */}
+      {preparedExecutionContract ? (
+        <div
+          className={styles.subCardPrepared}
+          data-testid="conversation-prepared-action-card"
+          data-ui05-object="execution-contract"
+          data-contract-status={preparedExecutionContract.status}
+          data-expanded={executionContractOpen ? "true" : "false"}
+        >
+          <div className={styles.p3CardHead}>
+            <div className={styles.p3CardBody}>
+              <p className={styles.p3CardEyebrow}>Action préparée</p>
+              <p className={styles.p3CardTitle}>
+                {preparedExecutionContract.action ||
+                  "Contrat d'exécution préparé"}
+              </p>
+              <p className={styles.p3CardStamp}>
+                {f2ObjectMetaLine([
+                  preparedExecutionContract.scope
+                    ? preparedExecutionContract.scope.slice(0, 80)
+                    : "Portée du contrat",
+                  preparedExecutionContract.effectConfirmationRequired
+                    ? "confirmation requise"
+                    : "examen du contrat",
+                ])}
+              </p>
+            </div>
+            <div className={styles.p3CardRight}>
+              <span className={styles.p3CardStatusReady}>
+                {executionContractStatusLabel(preparedExecutionContract)}
+              </span>
+              <button
+                type="button"
+                className={styles.p3CardLink}
+                data-testid="conversation-open-prepared-action"
+                aria-expanded={executionContractOpen}
+                onClick={() => setExecutionContractOpen((v) => !v)}
+              >
+                {executionContractOpen ? "Fermer" : "Ouvrir →"}
+              </button>
+            </div>
+          </div>
+          {executionContractOpen ? (
+            <div
+              className={styles.ui05ObjectDetails}
+              data-testid="conversation-prepared-action-details"
+            >
+              <dl className={styles.facts}>
+                <div className={styles.factWide}>
+                  <dt>Cible</dt>
+                  <dd>{preparedExecutionContract.target || "—"}</dd>
+                </div>
+                <div className={styles.factWide}>
+                  <dt>Autorité</dt>
+                  <dd>{preparedExecutionContract.requiredAuthority}</dd>
+                </div>
+                <div className={styles.factWide}>
+                  <dt>Réversibilité</dt>
+                  <dd>{preparedExecutionContract.reversibility}</dd>
+                </div>
+              </dl>
+              <p className={styles.cardNote}>
+                Ouvrir consulte le contrat préparé. Aucun démarrage ni
+                confirmation n&apos;est déclenché depuis cette carte.
+              </p>
+            </div>
+          ) : null}
+        </div>
       ) : null}

       {uiState === "STOPPED" && !error ? (
@@ -1703,9 +2142,9 @@ export function ConversationSurface({
         <details className={styles.detailsFlat}>
           <summary>Sources et limites</summary>
           <p className={styles.cardNote} data-testid="project-assistant-scope">
-            Qualification · proposition · décision humaine · contrat /
-            confirmation · tentative · recommandation. Aucune exécution
-            automatique. {ephemeralNotice}
+            Qualification · proposition · décision · confirmation ·
+            recommandation. Aucune exécution automatique.
+            {pilotEphemeralNotice ? ` ${pilotEphemeralNotice}` : ""}
           </p>
           {lrMaterializeCode ? (
             <p
@@ -1768,6 +2207,7 @@ export function ConversationSurface({
         </label>
         <div className={styles.composerBox}>
           <textarea
+            ref={composerInputRef}
             id={`${fieldId}-message`}
             className={styles.composerInput}
             data-testid="project-assistant-input"
@@ -1776,7 +2216,10 @@ export function ConversationSurface({
             disabled={busy || blocked}
             placeholder="Demander à Nora à propos de ce projet…"
             aria-describedby={liveRegionId}
-            onChange={(event) => setDraft(event.target.value)}
+            onChange={(event) => {
+              setDraft(event.target.value);
+              syncComposerTextareaHeight(event.currentTarget);
+            }}
             onKeyDown={(event) => {
               if (event.key === "Enter" && !event.shiftKey) {
                 event.preventDefault();
@@ -1794,30 +2237,6 @@ export function ConversationSurface({
             <span className={styles.composerToolActive}>
               Contexte projet actif
             </span>
-            {/* P3 46:2 — idle chrome uses « Contexte projet actif »; show Nora phase only when active. */}
-            {noraActivity.phase !== "idle" ? (
-              <span
-                className={styles.composerStatus}
-                aria-live="polite"
-                data-testid="project-assistant-status"
-                data-nora-phase={noraActivity.phase}
-                data-nora-stop={
-                  noraActivity.stopAvailable ? "available" : "unavailable"
-                }
-              >
-                {noraActivity.label}
-              </span>
-            ) : (
-              <span
-                className={styles.srOnly}
-                aria-live="polite"
-                data-testid="project-assistant-status"
-                data-nora-phase={noraActivity.phase}
-                data-nora-stop="unavailable"
-              >
-                {noraActivity.label}
-              </span>
-            )}
             {stopAvailable ? (
               <button
                 type="button"
@@ -1843,7 +2262,7 @@ export function ConversationSurface({
                   blocked
                     ? "Assistant indisponible"
                     : busy
-                      ? "Nora travaille"
+                      ? "Nora prépare une réponse"
                       : draft.trim().length === 0
                         ? "Saisissez un message"
                         : "Envoyer le message"
@@ -1852,19 +2271,32 @@ export function ConversationSurface({
                   canSend
                     ? "Envoyer le message à Nora"
                     : busy
-                      ? "Nora travaille"
+                      ? "Nora prépare une réponse"
                       : "Envoi indisponible"
                 }
               >
-                <span className={styles.sendLabelFull}>
-                  {busy ? "Nora travaille…" : "Envoyer"}
-                </span>
+                <span className={styles.sendLabelFull}>Envoyer</span>
                 <span className={styles.sendLabelCompact} aria-hidden="true">
                   ↑
                 </span>
               </button>
             )}
           </div>
+          {/*
+            DP06 / P3 §28 — Nora activity is in the transcript.
+            Keep a single sr-only status node for phase/stop machine tests.
+            Outside composerTools so tools chrome stays free of activity copy.
+          */}
+          <span
+            className={styles.srOnly}
+            data-testid="project-assistant-status"
+            data-nora-phase={noraActivity.phase}
+            data-nora-stop={
+              noraActivity.stopAvailable ? "available" : "unavailable"
+            }
+          >
+            {noraActivity.label}
+          </span>
         </div>
       </form>
       ) : null}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts
index dc108fa3..d49d230a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts
@@ -44,8 +44,10 @@ export function projectNoraActivity(input: {
   if (input.uiState === "SENDING") {
     return { phase: "start", label: "Nora travaille…", stopAvailable };
   }
-  if (input.busy) {
-    return { phase: "activity", label: "Nora travaille…", stopAvailable };
+  // ANSWERED / ERROR win over a lingering busy latch so the transient
+  // in-thread activity block never overlays a completed reply.
+  if (input.uiState === "ANSWERED") {
+    return { phase: "complete", label: "Réponse prête", stopAvailable: false };
   }
   if (input.uiState === "ERROR_RECOVERABLE") {
     return {
@@ -54,8 +56,8 @@ export function projectNoraActivity(input: {
       stopAvailable: false,
     };
   }
-  if (input.uiState === "ANSWERED") {
-    return { phase: "complete", label: "Réponse prête", stopAvailable: false };
+  if (input.busy) {
+    return { phase: "activity", label: "Nora travaille…", stopAvailable };
   }
   return { phase: "idle", label: "Prêt", stopAvailable: false };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts b/projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts
new file mode 100644
index 00000000..8330819b
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts
@@ -0,0 +1,879 @@
+/**
+ * P6-HQA-COG-01 / CORRECTION PASS 02 — pilot-facing F2 narrative composition.
+ *
+ * Deterministic seam for F2 proposal turns:
+ * - interpret Pilot stance (structured pilotDecisionCandidate first, lexical fail-closed);
+ * - R1: accept on recommendation/presented subject ≠ accept_start without explicit start intent;
+ * - R2: conversation history is CONTEXT ONLY — Product CURRENT continuity requires verified subject;
+ * - compose proportionate narrative from Product truth.
+ *
+ * Non-authoritative: never invents HumanDecision / Confirmation / activation / execution.
+ * Not a second LLM call. Not a new cognitive architecture.
+ */
+
+import type {
+  PilotDecisionCandidate,
+  PilotDecisionDisposition,
+  PilotDecisionTargetKind,
+} from "./types";
+
+export type F2PilotNarrativeKind =
+  | "new_cycle_proposal"
+  | "active_cycle_deliverable_proposal";
+
+export type F2PilotNarrativeHistoryMessage = {
+  readonly role: string;
+  readonly content: string;
+};
+
+/** Situational stance — understanding before wording. */
+export type PilotNarrativeStanceKind =
+  | "accept_start"
+  /** Accept of recommendation / presented subject — NOT cycle start. */
+  | "accept_recommendation"
+  | "refuse_start"
+  | "defer_start"
+  | "question_status"
+  | "confirm_other_subject"
+  | "refuse_proposal"
+  | "amend_request"
+  | "neutral_propose"
+  | "ambiguous";
+
+export type PilotNarrativeStance = {
+  readonly kind: PilotNarrativeStanceKind;
+  /** structured = pilotDecisionCandidate; lexical = fail-closed text cues; none = default. */
+  readonly source: "structured" | "lexical" | "none";
+};
+
+/**
+ * Continuity classes (CP02):
+ * - same_subject_product_current: Product-verified current subject only
+ * - same_subject_history_hint: textual history hint — NOT Product CURRENT
+ * - other_subject / refused_or_stale_hint / none
+ */
+export type HistoryContinuityKind =
+  | "same_subject_product_current"
+  | "same_subject_history_hint"
+  | "other_subject"
+  | "refused_or_stale_hint"
+  | "none";
+
+export type HistoryContinuity = {
+  readonly kind: HistoryContinuityKind;
+};
+
+export type ComposeF2PilotFacingNarrativeInput = {
+  readonly kind: F2PilotNarrativeKind;
+  readonly presentation: "test_provider" | "openai_live";
+  readonly userContent: string;
+  readonly history?: readonly F2PilotNarrativeHistoryMessage[];
+  readonly intentClass: string;
+  readonly objective: string | null | undefined;
+  readonly rephrasedRequest: string | null | undefined;
+  readonly cycleLabel: string | null | undefined;
+  readonly recommendedProfile: string | null | undefined;
+  readonly recommendationLabel: string | null | undefined;
+  readonly ckcCognitiveRecommendation: string | null | undefined;
+  readonly projectName: string | null | undefined;
+  readonly projectObjective: string | null | undefined;
+  readonly activeCycleInstanceId: string | null | undefined;
+  readonly lpsUnchanged: boolean;
+  readonly morrisGateRequired: boolean;
+  readonly executionBlocked: boolean;
+  readonly mw5Disposition: string | null | undefined;
+  readonly mw5EscalatePiloteText: string | null | undefined;
+  /**
+   * NON-AUTHORITATIVE structured disposition from intent analysis.
+   * Never a HumanDecision; preferred over lexical cues when present.
+   */
+  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
+  /**
+   * @deprecated CP02 — current-turn proposalStatus is NOT historical currentness.
+   * Kept for call-site compat; ignored by assessHistoryContinuity.
+   */
+  readonly proposalStatus?: string | null;
+  /**
+   * R2 — ONLY when an existing Product contract has verified the decision
+   * subject as CURRENT for this turn. History alone never sets this.
+   * Default / absent = false (fail-closed).
+   */
+  readonly productCurrentSubjectVerified?: boolean;
+  /**
+   * Optional Product status of a verified PRIOR/current subject (not the
+   * newly minted proposal of this turn). Used only with Product evidence.
+   */
+  readonly priorSubjectStatus?: string | null;
+};
+
+const ENGINE_LEAK_RE =
+  /CONTINUE\s*[—–-]\s*cognition propose-only|READY_NO_GATE|TEMPORARY WITH EXIT|\[MW5|AUCUNE EXÉCUTION\s*[—–-]\s*ZERO|F2 s'arrête|Qualification SFIA et proposition structurée|RECOMMANDATION\s*[—–-]\s*PAS UNE DÉCISION HUMAINE/i;
+
+const QUESTION_CUE_RE =
+  /(\?|^\s*(est-ce que|peux-tu|pouvez-vous|peux tu|pourrais-tu|comment|pourquoi)\b)/i;
+
+const NEGATION_START_RE =
+  /\b(ne\s+(?:me\s+)?(?:démarre|lance|active)[^\n.!?]{0,40}\s+pas|\bne\s+[^\n.!?]{0,40}\bpas\b[^\n.!?]{0,40}\b(d[eé]marr|lanc|activ)|\bsurtout\s+pas\b|\bje\s+ne\s+veux\s+pas\b|\bne\s+veux\s+pas\b|\brefuse\b|\binacceptable\b|\bn['']est\s+pas\s+acceptable\b)/i;
+
+const DEFER_RE =
+  /\b(pr[eé]f[eè]re\s+attendre|attendre\s+avant|plus\s+tard|pas\s+maintenant|ajourn)/i;
+
+const OTHER_CONFIRM_RE =
+  /\bconfirm\w*\b[^\n.!?]{0,80}\b(date|livrable|deadline|échéance|horaire)\b|\b(date|livrable|deadline|échéance)\b[^\n.!?]{0,80}\bconfirm/i;
+
+const CLEAR_ACCEPT_START_RE =
+  /\b(j['’]?accepte\s+de\s+(d[eé]marrer|lancer|activer)|je\s+confirm\w*\s+(explicitement\s+)?(le\s+)?(d[eé]marrage|lancement|activation)|d[eé]marrage\s+effectif|je\s+(veux|souhaite)\s+(d[eé]marrer|lancer|activer))\b/i;
+
+const REFUSE_PROPOSAL_RE =
+  /\b(proposition\s+n['’]?est\s+pas\s+acceptable|je\s+refuse\s+(cette\s+)?(proposition|recommandation)|pas\s+acceptable)\b/i;
+
+function normalizeLabel(label: string | null | undefined): string {
+  return (label ?? "").trim().toLowerCase();
+}
+
+/** Catalog labels like "Delivery / implémentation" must match user "Delivery". */
+function labelsReferToSameCycle(
+  a: string | null | undefined,
+  b: string | null | undefined,
+): boolean {
+  const na = normalizeLabel(a);
+  const nb = normalizeLabel(b);
+  if (!na || !nb) return false;
+  if (na === nb) return true;
+  if (na.includes(nb) || nb.includes(na)) return true;
+  const ta = na.split(/[\s/=_|-]+/).find(Boolean) ?? "";
+  const tb = nb.split(/[\s/=_|-]+/).find(Boolean) ?? "";
+  return Boolean(ta && tb && ta === tb);
+}
+
+function cyclePhrase(label: string | null | undefined): string {
+  const c = (label ?? "").trim();
+  return c ? `« ${c} »` : "ce cycle";
+}
+
+function intentFocus(input: ComposeF2PilotFacingNarrativeInput): string | null {
+  const fromIntent =
+    (input.rephrasedRequest ?? "").trim() ||
+    (input.objective ?? "").trim() ||
+    (input.projectObjective ?? "").trim();
+  if (!fromIntent) return null;
+  const oneLine = fromIntent.replace(/\s+/g, " ").trim();
+  return oneLine.length > 160 ? `${oneLine.slice(0, 157)}…` : oneLine;
+}
+
+function scrubCognitiveSnippet(text: string | null | undefined): string | null {
+  const raw = (text ?? "").trim();
+  if (!raw) return null;
+  if (!ENGINE_LEAK_RE.test(raw)) return raw;
+  const cleaned = raw
+    .replace(/CONTINUE\s*[—–-]\s*cognition propose-only[^.]*\.?/gi, "")
+    .replace(/\bREADY_NO_GATE\b/gi, "")
+    .replace(/\[MW5[^\]]*\]/gi, "")
+    .replace(/\s{2,}/g, " ")
+    .trim();
+  return cleaned.length > 0 ? cleaned : null;
+}
+
+function messageMentionsCycle(
+  content: string,
+  cycleLabel: string | null | undefined,
+): boolean {
+  const label = normalizeLabel(cycleLabel);
+  if (!label) return false;
+  if (new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(content)) {
+    return true;
+  }
+  const token = label.split(/[\s/=_|-]+/).find(Boolean);
+  if (!token || token.length < 3) return false;
+  return new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(
+    content,
+  );
+}
+
+/** Known Studio cycle labels for mismatch checks (quoted or bare). Not a NLU engine. */
+const KNOWN_CYCLE_LABELS = [
+  "delivery",
+  "cadrage",
+  "clarification",
+  "décision",
+  "decision",
+  "exploration",
+  "qualification",
+  "capitalisation",
+  "capitalization",
+] as const;
+
+function extractQuotedLabels(content: string): string[] {
+  const out: string[] = [];
+  const re = /«\s*([^»]+?)\s*»/g;
+  let m: RegExpExecArray | null;
+  while ((m = re.exec(content))) {
+    const v = (m[1] ?? "").trim();
+    if (v) out.push(v);
+  }
+  return out;
+}
+
+/**
+ * Relates a named cycle in start-intent prose to the subject cycleLabel.
+ * Uses quoted labels + known bare cycle names after démarrage/lancer — not open regex NLU.
+ */
+export function resolveNamedCycleRelativeToSubject(
+  text: string,
+  cycleLabel: string | null | undefined,
+): "match" | "mismatch" | "unspecified" {
+  const label = normalizeLabel(cycleLabel);
+  const quoted = extractQuotedLabels(text).map((q) => normalizeLabel(q));
+  if (quoted.length > 0) {
+    if (label && quoted.some((q) => labelsReferToSameCycle(q, label))) {
+      return "match";
+    }
+    if (
+      quoted.some(
+        (q) =>
+          q &&
+          !labelsReferToSameCycle(q, label) &&
+          (KNOWN_CYCLE_LABELS as readonly string[]).includes(q),
+      )
+    ) {
+      return "mismatch";
+    }
+  }
+  // Prefer "… démarrage de Delivery" / "… du cycle Delivery" over capturing "cycle".
+  const namedCycle = text.match(
+    /(?:d[eé]marrage|lancement|activation|d[eé]marrer|lancer|activer)(?:\s+(?:de|du|d['’])?\s*(?:cycle\s+)?)([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ-]*)/i,
+  );
+  if (namedCycle?.[1]) {
+    const named = normalizeLabel(namedCycle[1]);
+    if (named === "cycle") {
+      // keep scanning — bare "cycle" is not a type name
+    } else if (label && labelsReferToSameCycle(named, label)) {
+      return "match";
+    } else if (
+      (KNOWN_CYCLE_LABELS as readonly string[]).includes(named) &&
+      !labelsReferToSameCycle(named, label)
+    ) {
+      return "mismatch";
+    }
+  }
+  if (label && CLEAR_ACCEPT_START_RE.test(text)) {
+    for (const k of KNOWN_CYCLE_LABELS) {
+      if (labelsReferToSameCycle(k, label)) continue;
+      if (new RegExp(`\\b${k}\\b`, "i").test(text)) return "mismatch";
+    }
+    // User said "Delivery" and catalog label contains Delivery → match.
+    if (messageMentionsCycle(text, cycleLabel)) return "match";
+  }
+  return "unspecified";
+}
+
+/**
+ * Centralized evaluation of an explicit START cue for THIS subject cycle.
+ * Shared by structured accept and lexical paths — late negation/defer/question
+ * after a positive cue always wins (fail-closed). Structured accept is NOT
+ * authoritative when the Pilot's text contradicts it.
+ */
+export function evaluateExplicitStartForSubject(
+  text: string,
+  cycleLabel: string | null | undefined,
+):
+  | "accept_start"
+  | "refuse_start"
+  | "defer_start"
+  | "question_status"
+  | "ambiguous"
+  | "none" {
+  const raw = text ?? "";
+  if (!CLEAR_ACCEPT_START_RE.test(raw)) return "none";
+
+  const acceptMatch = CLEAR_ACCEPT_START_RE.exec(raw);
+  const after = raw.slice(
+    (acceptMatch?.index ?? 0) + (acceptMatch?.[0].length ?? 0),
+  );
+  // Defer before refuse-late so "mais pas maintenant" stays defer, not refuse.
+  if (DEFER_RE.test(after)) return "defer_start";
+  if (
+    NEGATION_START_RE.test(after) ||
+    REFUSE_PROPOSAL_RE.test(after) ||
+    /\b(mais|puis|ensuite|finalement)\b[\s\S]{0,48}\b(non|refuse|pas\s+(ça|cela|demarrer|démarrer))\b/i.test(
+      after,
+    )
+  ) {
+    return "refuse_start";
+  }
+  if (QUESTION_CUE_RE.test(after)) return "question_status";
+
+  // Whole-text fail-closed (covers "finalement non" overlapping accept span).
+  if (DEFER_RE.test(raw) && /\b(d[eé]marr|lanc|activ|delivery)\b/i.test(raw)) {
+    return "defer_start";
+  }
+  if (NEGATION_START_RE.test(raw) || REFUSE_PROPOSAL_RE.test(raw)) {
+    return "refuse_start";
+  }
+  if (
+    QUESTION_CUE_RE.test(raw) &&
+    /\b(d[eé]marr|activ|lanc|cycle\s+n['’]?est|pas\s+actif)\b/i.test(raw)
+  ) {
+    return "question_status";
+  }
+
+  const rel = resolveNamedCycleRelativeToSubject(raw, cycleLabel);
+  if (rel === "mismatch") return "ambiguous";
+  if (rel === "match" || rel === "unspecified") return "accept_start";
+  return "none";
+}
+
+/** Explicit start intent for THIS subject cycle (lexical cue + cycle match). */
+export function hasExplicitStartIntentForSubject(
+  text: string,
+  cycleLabel: string | null | undefined,
+): boolean {
+  return evaluateExplicitStartForSubject(text, cycleLabel) === "accept_start";
+}
+
+/**
+ * Structured-first stance. Lexical path is fail-closed: negation / question /
+ * other-subject confirmation never become accept_start.
+ * R1: structured accept on recommendation ≠ accept_start without explicit start.
+ */
+export function interpretPilotNarrativeStance(input: {
+  readonly userContent: string;
+  readonly cycleLabel?: string | null;
+  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
+}): PilotNarrativeStance {
+  const text = (input.userContent ?? "").trim();
+  const candidate = input.pilotDecisionCandidate ?? null;
+
+  if (candidate) {
+    const fromStructured = stanceFromStructuredCandidate(
+      candidate,
+      text,
+      input.cycleLabel,
+    );
+    if (fromStructured) return fromStructured;
+  }
+
+  return stanceFromLexicalCues(text, input.cycleLabel);
+}
+
+function stanceFromStructuredCandidate(
+  candidate: PilotDecisionCandidate,
+  userText: string,
+  cycleLabel: string | null | undefined,
+): PilotNarrativeStance | null {
+  const d: PilotDecisionDisposition = candidate.disposition;
+  const t: PilotDecisionTargetKind = candidate.targetKind;
+
+  if (d === "refuse") {
+    return { kind: "refuse_start", source: "structured" };
+  }
+  if (d === "defer") {
+    return { kind: "defer_start", source: "structured" };
+  }
+  if (d === "amend") {
+    return { kind: "amend_request", source: "structured" };
+  }
+  if (d === "ambiguous") {
+    return { kind: "ambiguous", source: "structured" };
+  }
+  if (d === "none") {
+    // Explicit "no disposition on a governed subject" — do not invent accept.
+    return null;
+  }
+  if (d === "accept") {
+    // Accept of an alternative / ambiguous target is not cycle-start agreement.
+    if (t === "specific_alternative" || t === "ambiguous") {
+      return { kind: "ambiguous", source: "structured" };
+    }
+    // Text contradictions override structured accept (informative, not authoritative).
+    if (OTHER_CONFIRM_RE.test(userText)) {
+      return { kind: "confirm_other_subject", source: "lexical" };
+    }
+    const explicit = evaluateExplicitStartForSubject(userText, cycleLabel);
+    if (explicit === "refuse_start") {
+      return { kind: "refuse_start", source: "lexical" };
+    }
+    if (explicit === "defer_start") {
+      return { kind: "defer_start", source: "lexical" };
+    }
+    if (explicit === "question_status") {
+      return { kind: "question_status", source: "lexical" };
+    }
+    if (explicit === "ambiguous") {
+      return { kind: "ambiguous", source: "lexical" };
+    }
+    // Whole-text question / refuse without CLEAR_ACCEPT still block START.
+    if (QUESTION_CUE_RE.test(userText)) {
+      return { kind: "question_status", source: "lexical" };
+    }
+    if (NEGATION_START_RE.test(userText) || REFUSE_PROPOSAL_RE.test(userText)) {
+      return { kind: "refuse_start", source: "lexical" };
+    }
+    if (DEFER_RE.test(userText) && /\b(d[eé]marr|lanc|activ|delivery)\b/i.test(userText)) {
+      return { kind: "defer_start", source: "lexical" };
+    }
+    // R1 — accept recommendation/presented subject ≠ start unless explicit start for THIS cycle.
+    if (
+      t === "current_recommendation" ||
+      t === "presented_subject"
+    ) {
+      if (explicit === "accept_start") {
+        return { kind: "accept_start", source: "structured" };
+      }
+      return { kind: "accept_recommendation", source: "structured" };
+    }
+    return { kind: "ambiguous", source: "structured" };
+  }
+  return null;
+}
+
+function stanceFromLexicalCues(
+  text: string,
+  cycleLabel: string | null | undefined,
+): PilotNarrativeStance {
+  if (!text) return { kind: "neutral_propose", source: "none" };
+
+  // Questions about activation/status never become agreement.
+  if (QUESTION_CUE_RE.test(text)) {
+    if (
+      /\b(d[eé]marr|activ|lanc|cycle\s+n['’]?est|pas\s+actif)\b/i.test(text)
+    ) {
+      return { kind: "question_status", source: "lexical" };
+    }
+  }
+
+  if (REFUSE_PROPOSAL_RE.test(text)) {
+    return { kind: "refuse_proposal", source: "lexical" };
+  }
+
+  if (NEGATION_START_RE.test(text)) {
+    return { kind: "refuse_start", source: "lexical" };
+  }
+
+  // "Je confirme que je ne veux pas démarrer…"
+  if (
+    /\bconfirm\w*\b/i.test(text) &&
+    /\bne\s+veux\s+pas\b|\bne\s+[^\n.!?]{0,30}\bd[eé]marr/i.test(text)
+  ) {
+    return { kind: "refuse_start", source: "lexical" };
+  }
+
+  if (OTHER_CONFIRM_RE.test(text)) {
+    return { kind: "confirm_other_subject", source: "lexical" };
+  }
+
+  if (DEFER_RE.test(text) && /\b(d[eé]marr|lanc|activ|delivery)\b/i.test(text)) {
+    return { kind: "defer_start", source: "lexical" };
+  }
+
+  const explicit = evaluateExplicitStartForSubject(text, cycleLabel);
+  if (explicit === "refuse_start") {
+    return { kind: "refuse_start", source: "lexical" };
+  }
+  if (explicit === "defer_start") {
+    return { kind: "defer_start", source: "lexical" };
+  }
+  if (explicit === "question_status") {
+    return { kind: "question_status", source: "lexical" };
+  }
+  if (explicit === "ambiguous") {
+    return { kind: "ambiguous", source: "lexical" };
+  }
+  if (explicit === "accept_start") {
+    return { kind: "accept_start", source: "lexical" };
+  }
+
+  // Bare presence of "confirme/démarre/activation" without clear accept → ambiguous.
+  if (
+    /\b(confirm|d[eé]marr|activ|lancer\b.*cycle|cycle\b.*lancer)\w*\b/i.test(
+      text,
+    )
+  ) {
+    return { kind: "ambiguous", source: "lexical" };
+  }
+
+  return { kind: "neutral_propose", source: "none" };
+}
+
+/**
+ * Continuity assessment (CP02 / R2).
+ * Conversation history = CONTEXT ONLY.
+ * same_subject_product_current requires productCurrentSubjectVerified === true.
+ * Current-turn proposalStatus is ignored (not historical currentness).
+ */
+export function assessHistoryContinuity(input: {
+  readonly history?: readonly F2PilotNarrativeHistoryMessage[];
+  readonly cycleLabel: string | null | undefined;
+  /** @deprecated ignored — do not treat current-turn status as history currentness */
+  readonly proposalStatus?: string | null;
+  readonly productCurrentSubjectVerified?: boolean;
+  readonly priorSubjectStatus?: string | null;
+}): HistoryContinuity {
+  const priorStatus = (input.priorSubjectStatus ?? "").trim().toUpperCase();
+  if (
+    priorStatus === "STALE" ||
+    priorStatus === "REFUSED" ||
+    priorStatus === "SUPERSEDED"
+  ) {
+    return { kind: "refused_or_stale_hint" };
+  }
+
+  // Product-verified CURRENT subject — only authoritative CURRENT continuity.
+  if (input.productCurrentSubjectVerified === true) {
+    return { kind: "same_subject_product_current" };
+  }
+
+  const label = normalizeLabel(input.cycleLabel);
+  const history = input.history ?? [];
+  if (!history.length || !label) {
+    return { kind: "none" };
+  }
+
+  const window = history.slice(-8);
+  let sameCycleHint = false;
+  let otherSubject = false;
+  let refusedHint = false;
+
+  for (const m of window) {
+    const role = (m.role ?? "").toLowerCase();
+    const content = m.content ?? "";
+    if (role === "assistant" || role === "nora") {
+      const quoted = extractQuotedLabels(content).map((q) => q.toLowerCase());
+      const mentionsSame =
+        messageMentionsCycle(content, input.cycleLabel) &&
+        /\b(propos|candidat|recommand|validation|d[eé]marr)/i.test(content);
+      if (mentionsSame) sameCycleHint = true;
+      for (const q of quoted) {
+        if (q && q !== label) otherSubject = true;
+      }
+      if (
+        /\b(cadrage|clarification|d[eé]cision|exploration)\b/i.test(content) &&
+        label === "delivery" &&
+        !messageMentionsCycle(content, "Delivery")
+      ) {
+        otherSubject = true;
+      }
+    }
+    if (role === "user") {
+      if (
+        messageMentionsCycle(content, input.cycleLabel) &&
+        (NEGATION_START_RE.test(content) || REFUSE_PROPOSAL_RE.test(content))
+      ) {
+        refusedHint = true;
+      }
+    }
+  }
+
+  if (refusedHint) return { kind: "refused_or_stale_hint" };
+  // History may hint at same cycle label — never Product CURRENT without verification.
+  if (sameCycleHint) return { kind: "same_subject_history_hint" };
+  if (otherSubject) return { kind: "other_subject" };
+  return { kind: "none" };
+}
+
+/**
+ * @deprecated CP01 — use interpretPilotNarrativeStance. Kept as accept_start probe only.
+ */
+export function pilotSignalsActivationOrConfirmIntent(
+  text: string,
+  cycleLabel?: string | null,
+  pilotDecisionCandidate?: PilotDecisionCandidate | null,
+): boolean {
+  return (
+    interpretPilotNarrativeStance({
+      userContent: text,
+      cycleLabel,
+      pilotDecisionCandidate,
+    }).kind === "accept_start"
+  );
+}
+
+/**
+ * @deprecated CP02 — history hint ≠ Product CURRENT. Prefer assessHistoryContinuity.
+ */
+export function historySuggestsPriorCycleProposal(
+  history: readonly F2PilotNarrativeHistoryMessage[] | undefined,
+  cycleLabel?: string | null,
+): boolean {
+  const kind = assessHistoryContinuity({ history, cycleLabel }).kind;
+  return (
+    kind === "same_subject_history_hint" ||
+    kind === "same_subject_product_current"
+  );
+}
+
+/** Repeated-accept CURRENT wording only with Product-verified subject. */
+function shouldAcknowledgeRepeatedAccept(
+  stance: PilotNarrativeStance,
+  continuity: HistoryContinuity,
+): boolean {
+  return (
+    stance.kind === "accept_start" &&
+    continuity.kind === "same_subject_product_current"
+  );
+}
+
+/**
+ * Compose the single pilot-facing narrative persisted and returned by F2 proposal turns.
+ */
+export function composeF2PilotFacingNarrative(
+  input: ComposeF2PilotFacingNarrativeInput,
+): string {
+  const parts: string[] = [];
+
+  if (input.presentation === "test_provider") {
+    parts.push("[Mode test]");
+  }
+
+  const cycle = cyclePhrase(input.cycleLabel);
+  const focus = intentFocus(input);
+  const cycleActive = Boolean(input.activeCycleInstanceId?.trim());
+  const stance = interpretPilotNarrativeStance({
+    userContent: input.userContent,
+    cycleLabel: input.cycleLabel,
+    pilotDecisionCandidate: input.pilotDecisionCandidate,
+  });
+  const continuity = assessHistoryContinuity({
+    history: input.history,
+    cycleLabel: input.cycleLabel,
+    productCurrentSubjectVerified: input.productCurrentSubjectVerified === true,
+    priorSubjectStatus: input.priorSubjectStatus,
+  });
+
+  if (input.kind === "active_cycle_deliverable_proposal") {
+    parts.push(
+      focus
+        ? `Une proposition pour matérialiser le livrable (${focus}) est prête à être examinée — le cycle en cours est conservé.`
+        : "Une proposition pour matérialiser le livrable est prête à être examinée — le cycle en cours est conservé.",
+    );
+  } else {
+    switch (stance.kind) {
+      case "accept_recommendation": {
+        parts.push(
+          normalizeLabel(input.cycleLabel)
+            ? `Je note votre accord sur la recommandation concernant ${cycle}. Ce n'est pas encore un démarrage.`
+            : "Je note votre accord sur la recommandation. Ce n'est pas encore un démarrage de cycle.",
+        );
+        break;
+      }
+      case "accept_start": {
+        if (cycleActive) {
+          parts.push(
+            `Je note votre intention concernant ${cycle}. Un cycle est déjà actif sur le projet.`,
+          );
+        } else if (shouldAcknowledgeRepeatedAccept(stance, continuity)) {
+          parts.push(
+            `Je reconnais votre accord pour démarrer ${cycle}. Ce tour ne l'active pas : aucune activation n'est enregistrée.`,
+          );
+        } else if (continuity.kind === "other_subject") {
+          parts.push(
+            `Je comprends une intention de démarrage pour ${cycle}. Je ne la rattache pas à une proposition d'un autre cycle dans l'historique.`,
+          );
+        } else if (continuity.kind === "refused_or_stale_hint") {
+          parts.push(
+            `Je note votre demande relative à ${cycle}, mais le contexte antérieur indique un refus ou un sujet obsolète — je ne le traite pas comme un démarrage accompli.`,
+          );
+        } else {
+          // Includes same_subject_history_hint — hint ≠ CURRENT continuity claim.
+          parts.push(
+            `Je comprends votre intention de démarrer ${cycle}. Pour l'instant il n'est pas actif — une confirmation en conversation ne constitue pas à elle seule l'activation.`,
+          );
+        }
+        break;
+      }
+      case "refuse_start":
+      case "refuse_proposal": {
+        parts.push(
+          stance.kind === "refuse_proposal"
+            ? `Je prends note que la proposition n'est pas acceptable${focus ? ` (${focus})` : ""}. Ce n'est pas un accord de démarrage.`
+            : `Je prends note de votre refus de démarrer ${cycle}. Aucun démarrage n'est engagé.`,
+        );
+        break;
+      }
+      case "defer_start": {
+        parts.push(
+          `Je note que vous préférez attendre avant de lancer ${cycle}. Aucun démarrage n'est engagé.`,
+        );
+        break;
+      }
+      case "question_status": {
+        parts.push(
+          cycleActive
+            ? `Oui — un cycle est actuellement actif sur le projet.`
+            : `Non — d'après l'état projet, aucun cycle n'est actuellement actif${normalizeLabel(input.cycleLabel) ? ` (y compris ${cycle})` : ""}.`,
+        );
+        break;
+      }
+      case "confirm_other_subject": {
+        parts.push(
+          `Je note votre confirmation sur ce point. Cela ne vaut pas un accord de démarrage pour ${cycle}.`,
+        );
+        if (focus) {
+          parts.push(`La proposition de cycle en cours porte sur : ${focus}.`);
+        }
+        break;
+      }
+      case "amend_request": {
+        parts.push(
+          `Je note votre demande d'amendement concernant ${cycle}. Aucune activation n'est engagée.`,
+        );
+        break;
+      }
+      case "ambiguous": {
+        parts.push(
+          `Je ne traite pas encore cela comme un accord de démarrage pour ${cycle}. Souhaitez-vous le lancer, l'ajourner, ou préciser autre chose ?`,
+        );
+        break;
+      }
+      case "neutral_propose":
+      default: {
+        parts.push(
+          focus
+            ? `Je propose le cycle ${cycle} pour avancer sur : ${focus}.`
+            : `Je propose le cycle ${cycle}.`,
+        );
+        break;
+      }
+    }
+  }
+
+  // Proportionate details — not a fixed admin report on every turn.
+  const cognitive = scrubCognitiveSnippet(input.ckcCognitiveRecommendation);
+  const showProfile =
+    input.kind === "new_cycle_proposal" &&
+    Boolean((input.recommendedProfile ?? "").trim()) &&
+    (stance.kind === "neutral_propose" ||
+      stance.kind === "amend_request" ||
+      input.morrisGateRequired);
+  const showLpsHonesty =
+    input.kind === "new_cycle_proposal" &&
+    (stance.kind === "accept_start" ||
+      !input.lpsUnchanged ||
+      (stance.kind === "neutral_propose" && !input.lpsUnchanged));
+  const showGovernance =
+    stance.kind === "accept_start" ||
+    stance.kind === "accept_recommendation" ||
+    stance.kind === "neutral_propose" ||
+    input.executionBlocked ||
+    input.intentClass === "execution_request" ||
+    input.morrisGateRequired ||
+    input.mw5Disposition === "ESCALATE";
+  const showNoExecution =
+    input.executionBlocked ||
+    input.intentClass === "execution_request" ||
+    (stance.kind === "accept_start" && !cycleActive);
+
+  if (showProfile) {
+    parts.push(`Profil recommandé : ${(input.recommendedProfile ?? "").trim()}.`);
+  }
+
+  const recLabel = (input.recommendationLabel ?? "").trim();
+  if (
+    recLabel &&
+    !ENGINE_LEAK_RE.test(recLabel) &&
+    stance.kind === "neutral_propose"
+  ) {
+    parts.push(recLabel);
+  }
+
+  if (
+    cognitive &&
+    (stance.kind === "neutral_propose" || stance.kind === "amend_request")
+  ) {
+    parts.push(cognitive);
+  }
+
+  if (showLpsHonesty) {
+    if (input.lpsUnchanged) {
+      if (stance.kind === "accept_start") {
+        parts.push("L'état vivant du projet reste inchangé.");
+      }
+    } else {
+      parts.push("L'état vivant du projet a été mis à jour.");
+    }
+  }
+
+  if (showGovernance) {
+    if (stance.kind === "accept_start") {
+      parts.push(
+        "Ceci reste une intention / recommandation — pas une activation enregistrée.",
+      );
+    } else if (stance.kind === "accept_recommendation") {
+      // Keep lean — opening already states "pas encore un démarrage".
+    } else if (stance.kind === "neutral_propose") {
+      parts.push(
+        "Ceci reste une recommandation, pas encore un démarrage ni une décision Pilote structurée.",
+      );
+    } else if (input.morrisGateRequired) {
+      parts.push("Votre décision est requise avant de préparer l'action.");
+    }
+  } else if (input.morrisGateRequired) {
+    parts.push("Votre décision est requise avant de préparer l'action.");
+  }
+
+  if (showNoExecution) {
+    parts.push("Rien n'a encore été exécuté.");
+  } else if (input.executionBlocked || input.intentClass === "execution_request") {
+    parts.push(
+      "Une demande d'exécution a été détectée — aucune exécution ne sera lancée par ce tour.",
+    );
+  }
+
+  if (
+    input.mw5Disposition === "ESCALATE" &&
+    (input.mw5EscalatePiloteText ?? "").trim()
+  ) {
+    parts.push(input.mw5EscalatePiloteText!.trim());
+  }
+
+  return parts
+    .map((p) => p.trim())
+    .filter(Boolean)
+    .join(" ")
+    .replace(/\s{2,}/g, " ")
+    .trim();
+}
+
+/** Invariants used by COG01 tests — semantic, not full-string snapshots. */
+export function f2PilotNarrativeInvariants(text: string): {
+  readonly hasEngineContinue: boolean;
+  readonly hasReadyNoGate: boolean;
+  readonly hasQualificationAdminLead: boolean;
+  readonly hasStackedAuthorityFooter: boolean;
+  readonly claimsActivationAccomplished: boolean;
+  readonly acknowledgesAgreement: boolean;
+  readonly acknowledgesRefusal: boolean;
+  readonly adminClauseCount: number;
+} {
+  const t = text ?? "";
+  const adminClauseCount = [
+    /Profil recommand/i.test(t),
+    /[eé]tat vivant du projet/i.test(t),
+    /Rien n'a encore [eé]t[eé] ex[eé]cut/i.test(t),
+    /Ceci reste une recommandation/i.test(t) ||
+      /Ceci reste une intention/i.test(t),
+    /pas une d[eé]cision Pilote/i.test(t),
+  ].filter(Boolean).length;
+
+  return {
+    hasEngineContinue: /CONTINUE\s*[—–-]\s*cognition propose-only/i.test(t),
+    hasReadyNoGate: /\bREADY_NO_GATE\b/.test(t),
+    hasQualificationAdminLead:
+      /Qualification SFIA et proposition structurée générées/i.test(t),
+    hasStackedAuthorityFooter:
+      /Nora n'émet pas de décision Pilote[\s\S]*Pas de gate de construction/i.test(
+        t,
+      ) ||
+      (/Recommandation\s*≠\s*d[eé]cision Pilote/i.test(t) &&
+        /F2 s'arrête ici/i.test(t)),
+    claimsActivationAccomplished:
+      /confirmation\s+constitue\s+la\s+d[eé]cision\s+de\s+lancement/i.test(t) ||
+      /cycle\s+(est|a\s+[eé]t[eé])\s+(d[eé]marr[eé]|activ[eé])(?!\s)/i.test(t),
+    acknowledgesAgreement: /reconnais votre accord/i.test(t),
+    acknowledgesRefusal:
+      /refus|n'est pas acceptable|ne veux pas|aucun d[eé]marrage n'est engag/i.test(
+        t,
+      ),
+    adminClauseCount,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 8788abe6..b8823e65 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -3,7 +3,7 @@
  * Stops before any execution. M2: Cycle/LPS/CKC linkage durable; conversation/proposal process-local.
  */

-import { randomBytes, randomUUID } from "node:crypto";
+import { randomBytes } from "node:crypto";
 import {
   isFakeConversationProviderForced,
   type ConversationProvider,
@@ -79,6 +79,11 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import { composeF2PilotFacingNarrative } from "./composeF2PilotFacingNarrative";
+import {
+  resolveChatFirstCycleStartGate,
+  resolveChatFirstStartRouting,
+} from "./resolveChatFirstCycleStartGate";
 import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
@@ -1298,7 +1303,8 @@ export async function orchestrateAssistantSend(input: {
     };
   }

-  let { analysis, model } = analysisResult;
+  const model = analysisResult.model;
+  let analysis = analysisResult.analysis;
   if (analysis.signals) {
     analysis = {
       ...analysis,
@@ -1887,23 +1893,39 @@ export async function orchestrateAssistantSend(input: {
       }
     }

-    const textParts = [
-      presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-      "Le cycle en cours est conservé.",
-      "Une proposition pour matérialiser le livrable est prête à être examinée.",
-      "Nora recommande ; le Pilote décide.",
-      "Rien n'a encore été exécuté.",
-      "Votre décision est requise avant de préparer l'action.",
-      mw5.surface.disposition === "ESCALATE"
-        ? mw5.text
-        : mw5.surface.disclosure,
-      "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
-    ];
+    // P6-HQA-COG-01 — pilot-facing narrative at F2 source (persist == present).
+    // MW5 CONTINUE disclosure stays on mw5 DTO / audit, not in chat body.
+    const narrative = composeF2PilotFacingNarrative({
+      kind: "active_cycle_deliverable_proposal",
+      presentation,
+      userContent: content,
+      history: input.history,
+      intentClass: analysis.intentClass,
+      objective: analysis.objective,
+      rephrasedRequest: analysis.rephrasedRequest,
+      cycleLabel: qualification.cycleLabel,
+      recommendedProfile: qualification.recommendedProfile,
+      recommendationLabel: qualification.recommendationLabel,
+      ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
+      projectName: project.name,
+      projectObjective: project.objective,
+      activeCycleInstanceId: project.activeCycleInstanceId,
+      lpsUnchanged: true,
+      morrisGateRequired: true,
+      executionBlocked: true,
+      mw5Disposition: mw5.surface.disposition,
+      mw5EscalatePiloteText:
+        mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
+      pilotDecisionCandidate: analysis.pilotDecisionCandidate ?? null,
+      // R2 — process-local proposal mint is not Product CURRENT subject verification.
+      productCurrentSubjectVerified: false,
+      priorSubjectStatus: null,
+    });

     return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
-      text: textParts.join(" "),
+      text: narrative,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
       model,
@@ -2059,6 +2081,114 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  // P6-HQA-F01 — start-adjacent chat must not mint LEGACY_UNBOUND createCycle.
+  // accept_start → reuse startPreparedTrajectoryCycle (or honest block).
+  // refuse/defer/question/ambiguous confirm → suppress mint, no START.
+  const startRouting = resolveChatFirstStartRouting({
+    userContent: content,
+    cycleLabel: qualification.cycleLabel,
+    pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+  });
+  if (startRouting.kind === "suppress_mint") {
+    await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
+    return await completeF2Turn({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
+      text: startRouting.message,
+      mode: modeResolution.mode as "fixture" | "live",
+      presentation,
+      model,
+      project,
+      intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
+      qualification,
+      executionBlocked: true,
+      mw5: mw5.surface,
+      turnKind: "f2_clarification",
+    });
+  }
+  if (startRouting.kind === "attempt_start") {
+    await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
+    const startGate = await resolveChatFirstCycleStartGate({
+      oa,
+      projectId: project.projectId,
+      targetCycleTypeId: qualification.cycleTypeId,
+      cycleLabel: qualification.cycleLabel,
+    });
+
+    const reloadedAfterGate = await loadProjectRuntimeForAssistant(
+      project.projectId,
+    );
+    let conversationProjectionReloaded = false;
+    if (reloadedAfterGate.ok) {
+      project = toContextDto(reloadedAfterGate);
+      conversationProjectionReloaded = true;
+    }
+
+    if (startGate.kind === "started") {
+      // LPS verified inside startGate. If conversation projection reload fails,
+      // patch known activation fields — never claim the pre-START project DTO
+      // is current, and never claim START failed when Product activation succeeded.
+      if (!conversationProjectionReloaded) {
+        project = {
+          ...project,
+          activeCycleInstanceId: startGate.activeCycleInstanceId,
+          ...(typeof startGate.lpsVersionAfter === "number"
+            ? { lpsVersion: startGate.lpsVersionAfter }
+            : {}),
+        };
+      }
+      const text = conversationProjectionReloaded
+        ? startGate.message
+        : `${startGate.message} La projection conversationnelle n'a pas pu être rechargée ; l'activation a été vérifiée sur l'état vivant Product.`;
+      return await completeF2Turn({
+        userText: content,
+        sessionDbPath: input.sessionDbPath,
+        text,
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation,
+        model,
+        project,
+        intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
+        qualification: {
+          ...qualification,
+          cycleInstanceId: startGate.cycleInstanceId,
+          cycleStatus: "active",
+        },
+        executionBlocked: true,
+        mw5: mw5.surface,
+        turnKind: "f1_informative",
+      });
+    }
+
+    if (reloadedAfterGate.ok) {
+      // already applied
+    } else if (startGate.kind === "already_active") {
+      project = {
+        ...project,
+        activeCycleInstanceId: startGate.activeCycleInstanceId,
+      };
+    }
+
+    return await completeF2Turn({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
+      text: startGate.message,
+      mode: modeResolution.mode as "fixture" | "live",
+      presentation,
+      model,
+      project,
+      intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
+      qualification,
+      executionBlocked: true,
+      mw5: mw5.surface,
+      turnKind:
+        startGate.kind === "already_active" ? "f2_blocked" : "f2_clarification",
+    });
+  }
+
   const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
   await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
   const created = await oa.cycleServices.createCycle.execute({
@@ -2220,36 +2350,40 @@ export async function orchestrateAssistantSend(input: {
   }

   const executionBlocked = analysis.intentClass === "execution_request";
-  const textParts = [
-    presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-    "Qualification SFIA et proposition structurée générées.",
-    `Cycle proposé: ${qualification.cycleLabel}.`,
-    "Un nouveau cycle est proposé et attend votre validation.",
-    `Profil recommandé: ${qualification.recommendedProfile}.`,
-    project.lpsVersion === preLpsVersion
-      ? "L'état vivant du projet est inchangé (pas d'activation avant démarrage)."
-      : "L'état vivant du projet a été mis à jour.",
-    qualification.recommendationLabel,
-    ...(qualification.ckcCognitiveRecommendation
-      ? [qualification.ckcCognitiveRecommendation]
-      : []),
-    "Recommandation ≠ décision Pilote — aucune activation d'autorité avant démarrage Pilote.",
-    morrisGateRequired
-      ? "Décision Pilote requise avant de poursuivre."
-      : "Pas de gate de construction supplémentaire — aucune exécution — F2 s'arrête ici.",
-    executionBlocked
-      ? "Demande d'exécution détectée — aucune exécution ne sera lancée."
-      : "Aucune exécution.",
-    mw5.surface.disposition === "ESCALATE"
-      ? mw5.text
-      : mw5.surface.disclosure,
-    "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
-  ];
+  // P6-HQA-COG-01 — one contextual pilot-facing narrative at F2 source.
+  // Engine CONTINUE / READY_NO_GATE / stacked authority footers stay off the body;
+  // mw5.surface.disclosure remains on the turn DTO for audit.
+  const narrative = composeF2PilotFacingNarrative({
+    kind: "new_cycle_proposal",
+    presentation,
+    userContent: content,
+    history: input.history,
+    intentClass: analysis.intentClass,
+    objective: analysis.objective,
+    rephrasedRequest: analysis.rephrasedRequest,
+    cycleLabel: qualification.cycleLabel,
+    recommendedProfile: qualification.recommendedProfile,
+    recommendationLabel: qualification.recommendationLabel,
+    ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
+    projectName: project.name,
+    projectObjective: project.objective,
+    activeCycleInstanceId: project.activeCycleInstanceId,
+    lpsUnchanged: project.lpsVersion === preLpsVersion,
+    morrisGateRequired,
+    executionBlocked,
+    mw5Disposition: mw5.surface.disposition,
+    mw5EscalatePiloteText:
+      mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
+    pilotDecisionCandidate: analysis.pilotDecisionCandidate ?? null,
+    // R2 — newly created proposal status ≠ verified CURRENT continuity of a prior subject.
+    productCurrentSubjectVerified: false,
+    priorSubjectStatus: null,
+  });

   return await completeF2Turn({
     userText: content,
     sessionDbPath: input.sessionDbPath,
-    text: textParts.join(" "),
+    text: narrative,
     mode: modeResolution.mode as "fixture" | "live",
     presentation,
     model,
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts b/projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts
new file mode 100644
index 00000000..c972f71e
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f2/resolveChatFirstCycleStartGate.ts
@@ -0,0 +1,377 @@
+/**
+ * P6-HQA-F01 — chat-first cycle START gate (bounded).
+ *
+ * When the Pilot explicitly intends to start a cycle already in play:
+ * - do NOT mint another F2 LEGACY_UNBOUND createCycle;
+ * - reuse startPreparedTrajectoryCycle when a unique COMPLETE prepared cycle exists;
+ * - otherwise fail closed with an honest blocker (no silent selection, no invented HD).
+ *
+ * Conversation agreement ≠ HumanDecision ≠ Confirmation ≠ activation.
+ */
+
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  classifyTrajectoryBinding,
+  startPreparedTrajectoryCycle,
+  type CycleInstance,
+} from "@/lib/oa/cycle";
+import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
+import type { PilotDecisionCandidate } from "./types";
+import {
+  interpretPilotNarrativeStance,
+  type PilotNarrativeStance,
+} from "./composeF2PilotFacingNarrative";
+
+export type ChatFirstStartSituation =
+  | { readonly kind: "already_active"; readonly activeCycleInstanceId: string }
+  | { readonly kind: "unique_prepared"; readonly cycleInstanceId: string }
+  | { readonly kind: "ambiguous_prepared"; readonly count: number }
+  | { readonly kind: "legacy_unbound_only"; readonly count: number }
+  | { readonly kind: "no_prepared" };
+
+export type ChatFirstCycleStartGateResult =
+  | {
+      readonly kind: "started";
+      readonly cycleInstanceId: string;
+      readonly activeCycleInstanceId: string;
+      readonly catalogLabel: string | null;
+      readonly lpsVersionAfter: number | undefined;
+      readonly message: string;
+    }
+  | {
+      readonly kind: "already_active";
+      readonly activeCycleInstanceId: string;
+      readonly message: string;
+    }
+  | {
+      readonly kind: "blocked";
+      readonly code: string;
+      readonly message: string;
+    };
+
+function isPreparedStatus(status: CycleInstance["status"]): boolean {
+  return status === "proposed" || status === "acknowledged";
+}
+
+/**
+ * Detect explicit chat start intent for the subject cycle.
+ *
+ * P6-HQA-F01 integrated: stance is authoritative and fail-closed.
+ * REFUSE / DEFER / QUESTION / AMBIGUOUS / accept_recommendation never
+ * fall through to a permissive lexical START probe — that path previously
+ * could promote "Je confirme… mais je refuse" to START.
+ */
+export function isChatFirstCycleStartIntent(input: {
+  readonly userContent: string;
+  readonly cycleLabel: string | null | undefined;
+  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
+}): boolean {
+  return resolveChatFirstStartRouting(input).kind === "attempt_start";
+}
+
+/**
+ * Start-adjacent utterance that must not mint a new F2 createCycle when
+ * stance is not accept_start (refuse / defer / question / ambiguous confirm).
+ * Neutral propose paths remain eligible for createCycle.
+ */
+export function resolveChatFirstStartRouting(input: {
+  readonly userContent: string;
+  readonly cycleLabel: string | null | undefined;
+  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
+}):
+  | { readonly kind: "attempt_start"; readonly stance: PilotNarrativeStance }
+  | {
+      readonly kind: "suppress_mint";
+      readonly stance: PilotNarrativeStance;
+      readonly code: string;
+      readonly message: string;
+    }
+  | { readonly kind: "not_start_path"; readonly stance: PilotNarrativeStance } {
+  const stance = interpretPilotNarrativeStance({
+    userContent: input.userContent,
+    cycleLabel: input.cycleLabel,
+    pilotDecisionCandidate: input.pilotDecisionCandidate,
+  });
+  if (stance.kind === "accept_start") {
+    return { kind: "attempt_start", stance };
+  }
+  const text = (input.userContent ?? "").trim();
+  const confirmish =
+    /\b(confirm\w*|j['’]?accepte\s+de\s+(d[eé]marr|lancer|activer)|d[eé]marrage\s+effectif)\b/i.test(
+      text,
+    );
+  const startTopic =
+    /\b(d[eé]marr\w*|lanc\w*|activ(?:er|ation))\b/i.test(text);
+  const legitimateNewQualification =
+    /\b(pr[eé]pare|qualifie|propose|nouveau\s+cycle|nouvelle?\s+qualification)\b/i.test(
+      text,
+    ) && !confirmish;
+  const hypotheticStart =
+    startTopic &&
+    /\b(peut[- ]?être|éventuellement|hypoth[eè]se|si\s+on|on\s+pourrait|pas\s+s[uû]r)\b/i.test(
+      text,
+    );
+  // Ambiguous / hypothetical start discussion must not mint a new CycleInstance.
+  // Legitimate new qualification ("Prépare un nouveau cycle…") stays open.
+  const ambiguousStartDiscussion =
+    stance.kind === "ambiguous" &&
+    startTopic &&
+    !legitimateNewQualification &&
+    (confirmish || hypotheticStart || !/\b(pr[eé]pare|qualifie|propose)\b/i.test(text));
+  const suppress =
+    stance.kind === "refuse_start" ||
+    stance.kind === "refuse_proposal" ||
+    stance.kind === "defer_start" ||
+    stance.kind === "question_status" ||
+    stance.kind === "confirm_other_subject" ||
+    (stance.kind === "ambiguous" && confirmish) ||
+    ambiguousStartDiscussion;
+  if (!suppress) {
+    return { kind: "not_start_path", stance };
+  }
+  const code =
+    stance.kind === "refuse_start" || stance.kind === "refuse_proposal"
+      ? "START_REFUSED_BY_PILOT"
+      : stance.kind === "defer_start"
+        ? "START_DEFERRED_BY_PILOT"
+        : stance.kind === "question_status"
+          ? "START_QUESTION_NOT_ACTIVATION"
+          : "START_INTENT_AMBIGUOUS";
+  const cycle = (input.cycleLabel ?? "").trim()
+    ? `« ${(input.cycleLabel ?? "").trim()} »`
+    : "ce cycle";
+  const message =
+    code === "START_REFUSED_BY_PILOT"
+      ? `Votre refus est pris en compte : aucun démarrage de ${cycle} n'a été engagé et aucun nouveau cycle n'a été créé.`
+      : code === "START_DEFERRED_BY_PILOT"
+        ? `Le démarrage de ${cycle} est reporté : aucun démarrage n'a été engagé et aucun nouveau cycle n'a été créé.`
+        : code === "START_QUESTION_NOT_ACTIVATION"
+          ? `Votre question ne démarre pas ${cycle}. Aucun nouveau cycle n'a été créé.`
+          : `L'intention de démarrage pour ${cycle} n'est pas suffisamment claire. Aucun démarrage n'a été engagé et aucun nouveau cycle n'a été créé.`;
+  return { kind: "suppress_mint", stance, code, message };
+}
+
+/**
+ * Pure Product-shape classification — no mutation.
+ * History/conversation is not used; only LPS + CycleInstance inventory.
+ */
+export function classifyChatFirstStartSituation(input: {
+  readonly activeCycleInstanceId: string | null | undefined;
+  readonly cycles: readonly CycleInstance[];
+  readonly targetCycleTypeId: string;
+}): ChatFirstStartSituation {
+  const active = (input.activeCycleInstanceId ?? "").trim();
+  if (active) {
+    return { kind: "already_active", activeCycleInstanceId: active };
+  }
+
+  const target = input.targetCycleTypeId;
+  const preparedComplete = input.cycles.filter(
+    (c) =>
+      c.cycleTypeId === target &&
+      isPreparedStatus(c.status) &&
+      classifyTrajectoryBinding(c) === "COMPLETE_TRAJECTORY_BOUND",
+  );
+  if (preparedComplete.length > 1) {
+    return { kind: "ambiguous_prepared", count: preparedComplete.length };
+  }
+  if (preparedComplete.length === 1) {
+    return {
+      kind: "unique_prepared",
+      cycleInstanceId: preparedComplete[0]!.cycleInstanceId,
+    };
+  }
+
+  const legacy = input.cycles.filter(
+    (c) =>
+      c.cycleTypeId === target &&
+      isPreparedStatus(c.status) &&
+      classifyTrajectoryBinding(c) === "LEGACY_UNBOUND",
+  );
+  if (legacy.length > 0) {
+    return { kind: "legacy_unbound_only", count: legacy.length };
+  }
+  return { kind: "no_prepared" };
+}
+
+export function chatFirstStartBlockMessage(input: {
+  readonly code: string;
+  readonly cycleLabel: string;
+  readonly legacyCount?: number;
+  readonly preparedCount?: number;
+}): string {
+  const cycle = input.cycleLabel.trim()
+    ? `« ${input.cycleLabel.trim()} »`
+    : "ce cycle";
+  switch (input.code) {
+    case "ACTIVE_CYCLE_PRESENT":
+      return `Un cycle est déjà actif sur le projet. Aucun nouveau cycle n'a été créé et aucun second démarrage n'a été engagé.`;
+    case "PREPARED_CYCLE_AMBIGUOUS":
+      return `Plusieurs cycles ${cycle} préparés (liés à la trajectoire) sont disponibles (${input.preparedCount ?? "plusieurs"}). Studio ne sélectionne pas automatiquement lequel démarrer. Aucun nouveau cycle n'a été créé. Précisez le cycle dans Trajectoire, puis démarrez.`;
+    case "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT":
+      return `Des cycles ${cycle} existent déjà (${input.legacyCount ?? "plusieurs"}) mais ne sont pas liés à une trajectoire préparée — le démarrage Chat-first gouverné ne s'applique pas. Aucun cycle supplémentaire n'a été créé. Utilisez Trajectoire pour préparer puis démarrer un cycle lié, sans nouvelle qualification automatique.`;
+    case "PREPARED_CYCLE_MISSING":
+    case "NO_PREPARED_CYCLE":
+      return `Aucun cycle ${cycle} préparé et lié à la trajectoire n'est disponible au démarrage. Votre confirmation en conversation n'active rien à elle seule. Aucun nouveau cycle n'a été créé. Préparez d'abord le cycle depuis Trajectoire (après décision de trajectoire si requise), puis démarrez.`;
+    case "AUTHORITY_DENIED":
+    case "LOCAL_AUTHORITY_DISABLED":
+      return `Le démarrage de ${cycle} est refusé : autorité Pilote indisponible pour START. Aucun nouveau cycle n'a été créé. L'état vivant du projet reste inchangé.`;
+    case "CYCLE_DECISION_REQUIRED":
+      return `Le démarrage de ${cycle} nécessite encore une décision Pilote structurée sur la trajectoire. Aucun nouveau cycle n'a été créé et aucune décision n'a été inventée depuis la conversation.`;
+    default:
+      return `Le démarrage de ${cycle} n'a pas pu aboutir (${input.code}). Aucun nouveau cycle n'a été créé. Vérifiez Trajectoire / préconditions START — l'état vivant du projet n'est pas déclaré actif sans relecture Product.`;
+  }
+}
+
+export function chatFirstStartSuccessMessage(input: {
+  readonly cycleLabel: string | null;
+  readonly cycleInstanceId: string;
+}): string {
+  const label = (input.cycleLabel ?? "").trim();
+  const cycle = label ? `« ${label} »` : "le cycle";
+  return `Le cycle ${cycle} est maintenant actif sur le projet (${input.cycleInstanceId}). L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
+}
+
+/**
+ * Resolve chat-first start intent against Product inventory.
+ * May invoke startPreparedTrajectoryCycle (existing governed START) once.
+ * Never creates CycleInstances. Never invents HumanDecision.
+ */
+export async function resolveChatFirstCycleStartGate(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly targetCycleTypeId: string;
+  readonly cycleLabel: string;
+  readonly forceLocalAuthority?: boolean;
+}): Promise<ChatFirstCycleStartGateResult> {
+  const lps = await input.oa.projectServices.getCurrentLivingProjectState.execute(
+    { projectId: input.projectId },
+  );
+  if (!lps.ok) {
+    return {
+      kind: "blocked",
+      code: "LPS_UNAVAILABLE",
+      message: chatFirstStartBlockMessage({
+        code: "LPS_UNAVAILABLE",
+        cycleLabel: input.cycleLabel,
+      }),
+    };
+  }
+
+  let cycles: CycleInstance[] = [];
+  try {
+    cycles = await input.oa.cycleServices.cycles.listByProject(input.projectId);
+  } catch {
+    return {
+      kind: "blocked",
+      code: "CYCLES_UNAVAILABLE",
+      message: chatFirstStartBlockMessage({
+        code: "CYCLES_UNAVAILABLE",
+        cycleLabel: input.cycleLabel,
+      }),
+    };
+  }
+
+  const situation = classifyChatFirstStartSituation({
+    activeCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
+    cycles,
+    targetCycleTypeId: input.targetCycleTypeId,
+  });
+
+  if (situation.kind === "already_active") {
+    return {
+      kind: "already_active",
+      activeCycleInstanceId: situation.activeCycleInstanceId,
+      message: chatFirstStartBlockMessage({
+        code: "ACTIVE_CYCLE_PRESENT",
+        cycleLabel: input.cycleLabel,
+      }),
+    };
+  }
+
+  if (situation.kind === "ambiguous_prepared") {
+    return {
+      kind: "blocked",
+      code: "PREPARED_CYCLE_AMBIGUOUS",
+      message: chatFirstStartBlockMessage({
+        code: "PREPARED_CYCLE_AMBIGUOUS",
+        cycleLabel: input.cycleLabel,
+        preparedCount: situation.count,
+      }),
+    };
+  }
+
+  if (situation.kind === "legacy_unbound_only") {
+    return {
+      kind: "blocked",
+      code: "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
+      message: chatFirstStartBlockMessage({
+        code: "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
+        cycleLabel: input.cycleLabel,
+        legacyCount: situation.count,
+      }),
+    };
+  }
+
+  if (situation.kind === "no_prepared") {
+    return {
+      kind: "blocked",
+      code: "NO_PREPARED_CYCLE",
+      message: chatFirstStartBlockMessage({
+        code: "NO_PREPARED_CYCLE",
+        cycleLabel: input.cycleLabel,
+      }),
+    };
+  }
+
+  // unique_prepared — reuse existing START facade (no F2 createCycle).
+  const started = await startPreparedTrajectoryCycle({
+    oa: input.oa,
+    projectId: input.projectId,
+    cycleInstanceId: situation.cycleInstanceId,
+    forceLocalAuthority: input.forceLocalAuthority,
+  });
+
+  if (!started.ok) {
+    return {
+      kind: "blocked",
+      code: started.code,
+      message: chatFirstStartBlockMessage({
+        code: started.code,
+        cycleLabel: input.cycleLabel,
+      }),
+    };
+  }
+
+  // Re-read LPS before claiming activation.
+  const lpsAfter =
+    await input.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId: input.projectId,
+    });
+  const activeId = lpsAfter.ok
+    ? lpsAfter.livingProjectState.activeCycleInstanceId
+    : null;
+  if (!activeId || activeId !== started.activeCycleInstanceId) {
+    return {
+      kind: "blocked",
+      code: "LPS_ACTIVE_MISMATCH_AFTER_START",
+      message: chatFirstStartBlockMessage({
+        code: "LPS_ACTIVE_MISMATCH_AFTER_START",
+        cycleLabel: input.cycleLabel,
+      }),
+    };
+  }
+
+  const entry = getCycleTypeById(started.cycle.cycleTypeId);
+  return {
+    kind: "started",
+    cycleInstanceId: started.cycle.cycleInstanceId,
+    activeCycleInstanceId: activeId,
+    catalogLabel: started.catalogLabel ?? entry?.label ?? null,
+    lpsVersionAfter: started.lpsVersionAfter,
+    message: chatFirstStartSuccessMessage({
+      cycleLabel: input.cycleLabel || started.catalogLabel,
+      cycleInstanceId: started.cycle.cycleInstanceId,
+    }),
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index c3e0532d..ac9e8c3c 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -801,7 +801,18 @@ export function scrubPiloteFacingEngineJargon(text: string): string {
     .replace(/\bF1\b/g, "")
     .replace(/\bF2\b/g, "")
     .replace(/\bHumanDecision\b/g, "décision Pilote")
+    .replace(/\bExecutionContract\b/g, "contrat d'exécution")
+    .replace(/\bProduct SQLite\b/gi, "")
+    .replace(/\bTEMPORARY WITH EXIT\b/gi, "")
+    .replace(/\bREADY_NO_GATE\b/g, "")
+    .replace(/anti\s*scope\s*creep/gi, "dérive de périmètre")
+    .replace(/silent\s*REAL/gi, "exécution réelle non déclarée")
+    .replace(/«\s*done\s*»\s*sans\s*Evidence/gi, "livrable déclaré terminé sans preuve")
+    .replace(/\bdone\s+sans\s+Evidence\b/gi, "livrable déclaré terminé sans preuve")
+    .replace(/\bEvidence\b/g, "preuve")
     .replace(/[^\S\n]{2,}/g, " ")
+    .replace(/\s+([,.;:!?])/g, "$1")
+    .replace(/\s*[—–-]\s*[—–-]+/g, " — ")
     .trim();
 }

@@ -937,6 +948,42 @@ export function formatNoraAssistantDisplayText(text: string | null | undefined):
   out = out.replace(/\bDECISION_REQUIRED\b/g, "Votre décision est requise");
   out = out.replace(/\bpending_reinstruction_required\b/g, "reformulation requise");
   out = out.replace(/\bdocs_write\b/g, "écriture de document");
+  // P6-HQA-UI-04 — strip known F2/process footer jargon (presentation only).
+  // Targeted phrases only — not a blind keyword eraser; durable text unchanged.
+  out = out.replace(/\[Mode (?:réel|test)\]\s*/gi, "");
+  out = out.replace(
+    /Qualification SFIA et proposition structurée générées\.?\s*/gi,
+    "",
+  );
+  out = out.replace(
+    /RECOMMANDATION\s*[—–-]\s*PAS UNE DÉCISION HUMAINE\.?\s*/gi,
+    "",
+  );
+  out = out.replace(
+    /Recommandation\s*≠\s*décision Pilote[^.]*\.\s*/gi,
+    "",
+  );
+  out = out.replace(
+    /Pas de gate de construction supplémentaire[^.]*\.\s*/gi,
+    "",
+  );
+  out = out.replace(
+    /CONTINUE\s*[—–-]\s*cognition propose-only[^.]*\.\s*/gi,
+    "",
+  );
+  out = out.replace(
+    /Nora n'émet pas de décision Pilote[^.]*\.\s*/gi,
+    "",
+  );
+  out = out.replace(
+    /\bAUCUNE EXÉCUTION\s*[—–-]\s*F2\s*S['’]ARRÊTE ICI\b/gi,
+    "Rien n'a encore été exécuté",
+  );
+  out = out.replace(/\bREADY_NO_GATE\b/g, "");
+  out = out.replace(/\bTEMPORARY WITH EXIT\b/gi, "");
+  out = out.replace(/\bProduct SQLite\b/gi, "");
+  out = out.replace(/\bExecutionContract\b/g, "contrat d'exécution");
+  out = out.replace(/\bHumanDecision\b/g, "décision Pilote");
   // Soften markdown emphasis / headings leftovers without rendering HTML.
   out = out.replace(/\*\*([^*]+)\*\*/g, "$1");
   out = out.replace(/__([^_]+)__/g, "$1");
@@ -950,5 +997,239 @@ export function formatNoraAssistantDisplayText(text: string | null | undefined):
   return scrubPiloteFacingEngineJargon(out);
 }

+// ---------------------------------------------------------------------------
+// P6-HQA-UI-04 — pilot-facing Recommendation / Proposal / next-action cards
+// Presentation only. Does not merge domain objects or invent authority.
+// ---------------------------------------------------------------------------
+
+export type PilotRecommendationCardProjection = {
+  title: string;
+  recommendation: string;
+  why: string;
+  state: string | null;
+  showProfile: boolean;
+  profileLabel: string | null;
+  freshnessLabel: string | null;
+};
+
+export type PilotProposalCardProjection = {
+  title: string;
+  proposition: string;
+  why: string | null;
+  consequence: string | null;
+  agreement: string;
+  nextAction: string;
+  nextActionKind: "decision" | "conversation" | "amend" | "blocked";
+  outOfScope: string | null;
+};
+
+function textsMeaningfullyDistinct(a: string, b: string): boolean {
+  const norm = (s: string) =>
+    s
+      .toLowerCase()
+      .replace(/[^\p{L}\p{N}]+/gu, " ")
+      .trim();
+  const left = norm(a);
+  const right = norm(b);
+  if (!left || !right) return false;
+  if (left === right) return false;
+  if (left.includes(right) || right.includes(left)) return false;
+  return true;
+}
+
+function cycleNotStartedState(
+  cycleStatus: string | null | undefined,
+  cycleInstanceId: string | null | undefined,
+): string {
+  const status = (cycleStatus ?? "").toLowerCase();
+  if (status.includes("active") || status.includes("actif")) {
+    return "Le cycle est actif.";
+  }
+  void cycleInstanceId;
+  return "Le cycle n'a pas encore démarré.";
+}
+
+/**
+ * Compact Recommendation card for the nominal Pilote path.
+ */
+export function projectPilotRecommendationCard(input: {
+  cycleLabel: string | null | undefined;
+  recommendedProfile: string | null | undefined;
+  rationale: string | null | undefined;
+  criticalSignalsPresent?: boolean | null;
+  cycleStatus?: string | null;
+  cycleInstanceId?: string | null;
+  freshnessLabel?: string | null;
+}): PilotRecommendationCardProjection {
+  const cycle =
+    nonempty(input.cycleLabel) ?? "le cycle recommandé";
+  const profile = nonempty(input.recommendedProfile);
+  const showProfile =
+    input.criticalSignalsPresent === true ||
+    (profile != null &&
+      !/^standard$/i.test(profile) &&
+      profile.toLowerCase() !== "approche standard");
+  const why = scrubPiloteFacingEngineJargon(
+    profileRationalePiloteLabel(input.rationale),
+  );
+  const freshness = nonempty(input.freshnessLabel);
+  return {
+    title: "Ce que Nora recommande",
+    recommendation: `Démarrer le cycle ${cycle}.`,
+    why,
+    state: cycleNotStartedState(input.cycleStatus, input.cycleInstanceId),
+    showProfile,
+    profileLabel: showProfile && profile ? profile : null,
+    freshnessLabel:
+      freshness && /périm|non détermin/i.test(freshness) ? freshness : null,
+  };
+}
+
+function scrubProposalOutOfScopeItem(item: string): string | null {
+  const raw = item.trim();
+  if (!raw) return null;
+  if (/cursor\s*real/i.test(raw)) {
+    return "Exécution réelle hors périmètre de cette étape";
+  }
+  if (/READY_NO_GATE|F2|SQLite|HumanDecision|ExecutionContract|TEMPORARY/i.test(raw)) {
+    return null;
+  }
+  const scrubbed = scrubPiloteFacingEngineJargon(raw);
+  return scrubbed.length > 0 ? scrubbed : null;
+}
+
+/**
+ * Compact Proposal card — keeps Proposal identity distinct from Recommendation.
+ */
+export function projectPilotProposalCard(input: {
+  rephrasedRequest?: string | null;
+  objective?: string | null;
+  rationale?: string | null;
+  expectedOutcome?: string | null;
+  scope?: string | null;
+  outOfScope?: readonly string[] | null;
+  morrisGateRequired?: boolean | null;
+  status?: string | null;
+  nextPossibleStep?: string | null;
+  cycleLabel?: string | null;
+  cycleStatus?: string | null;
+  cycleInstanceId?: string | null;
+}): PilotProposalCardProjection {
+  const proposition =
+    nonempty(input.rephrasedRequest) ??
+    nonempty(input.objective) ??
+    "Proposition structurée disponible.";
+  const objective = nonempty(input.objective);
+  const whySource =
+    nonempty(input.rationale) &&
+    textsMeaningfullyDistinct(proposition, input.rationale ?? "")
+      ? scrubPiloteFacingEngineJargon(
+          profileRationalePiloteLabel(input.rationale),
+        )
+      : objective && textsMeaningfullyDistinct(proposition, objective)
+        ? scrubPiloteFacingEngineJargon(objective)
+        : null;
+  const gate = input.morrisGateRequired === true;
+  const status = (input.status ?? "").toUpperCase();
+  const step = (input.nextPossibleStep ?? "").trim();
+  const cycle =
+    nonempty(input.cycleLabel) ?? "Delivery";
+
+  const consequenceRaw = nonempty(input.expectedOutcome);
+  let consequence =
+    consequenceRaw && textsMeaningfullyDistinct(proposition, consequenceRaw)
+      ? scrubPiloteFacingEngineJargon(consequenceRaw)
+      : null;
+  // When no structured decision is required, drop engine copy that claims one.
+  if (
+    consequence &&
+    !gate &&
+    status !== "DECISION_REQUIRED" &&
+    /décision explicite|HumanDecision|attendre votre (GO|décision)/i.test(
+      consequence,
+    )
+  ) {
+    consequence =
+      nonempty(
+        scrubPiloteFacingEngineJargon(
+          consequence
+            .replace(/,?\s*en attente de décision explicite[^.]*/gi, "")
+            .replace(/soumises? à décision[^.]*/gi, ""),
+        ),
+      ) ?? null;
+  }
+  const outItems = (input.outOfScope ?? [])
+    .map((item) => scrubProposalOutOfScopeItem(item))
+    .filter((item): item is string => item != null);
+  const outOfScope = outItems.length > 0 ? outItems.join(" · ") : null;
+
+  if (status === "AMENDMENT_REQUIRED") {
+    return {
+      title: "Ce que Nora propose",
+      proposition,
+      why: whySource,
+      consequence,
+      agreement: "Une modification de la proposition est demandée.",
+      nextAction: G_UX_08_AMEND_DEFERRED_MESSAGE,
+      nextActionKind: "amend",
+      outOfScope,
+    };
+  }
+
+  if (gate || status === "DECISION_REQUIRED") {
+    return {
+      title: "Ce que Nora propose",
+      proposition,
+      why: whySource,
+      consequence,
+      agreement: "Votre décision sur cette proposition est requise.",
+      nextAction:
+        "Indiquez si vous approuvez, amendez ou refusez cette proposition. Aucune exécution ne démarre sans votre décision.",
+      nextActionKind: "decision",
+      outOfScope,
+    };
+  }
+
+  // READY_NO_GATE and similar — no structured Pilote decision at this stage.
+  const engineStop =
+    /F2\s*S['’]ARRÊTE|READY_NO_GATE|AUCUNE EXÉCUTION/i.test(step) ||
+    step.length === 0;
+  return {
+    title: "Ce que Nora propose",
+    proposition,
+    why: whySource,
+    consequence,
+    agreement: "Aucune décision structurée n'est requise pour l'instant.",
+    nextAction: engineStop
+      ? `Nora recommande de démarrer ${cycle}. ${cycleNotStartedState(
+          input.cycleStatus,
+          input.cycleInstanceId,
+        )} Vous pouvez poursuivre avec Nora pour préparer ce démarrage.`
+      : scrubPiloteFacingEngineJargon(step) ||
+        `Poursuivez avec Nora concernant ${cycle}.`,
+    nextActionKind: "conversation",
+    outOfScope,
+  };
+}
+
+/** Soften F2 chip copy on the nominal Pilote surface. */
+export function pilotFacingF2ChipLabel(raw: string | null | undefined): string {
+  const value = (raw ?? "").trim();
+  switch (value) {
+    case "RECOMMANDATION":
+      return "Recommandation";
+    case "PROPOSITION":
+      return "Proposition";
+    case "DÉCISION REQUISE":
+      return "Décision requise";
+    case "DÉCISION PRISE":
+      return "Décision enregistrée";
+    case "AUCUNE EXÉCUTION":
+      return "Rien exécuté pour l'instant";
+    default:
+      return scrubPiloteFacingEngineJargon(value) || value;
+  }
+}
+
 /** CustomEvent name: ConversationSurface → LifecycleSurface refresh after answer. */
 export const SFIA_ASSISTANT_ANSWERED_EVENT = "sfia:project-assistant-answered";
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index fb53e855..4f2dd863 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -434,17 +434,189 @@ export class FakeConversationProvider implements ConversationProvider {
     jsonSchema: Record<string, unknown>;
     signal?: AbortSignal;
   }): Promise<ProviderCompletionResult> {
-    void input.schemaName;
     void input.jsonSchema;
     if (input.signal?.aborted) {
       const error = new Error("AbortError");
       error.name = "AbortError";
       throw error;
     }
+    // P6-HQA-NEWPROJECT-01 — deterministic onboarding structured payload (Fake only).
+    if (input.schemaName === "new_project_onboarding_turn_v1") {
+      return this.completeNewProjectOnboarding(input.messages, input.signal);
+    }
     // Reuse F2 marker / analysis scripted JSON from complete().
     return this.complete(input.messages);
   }

+  private async completeNewProjectOnboarding(
+    messages: ProviderChatMessage[],
+    signal?: AbortSignal,
+  ): Promise<ProviderCompletionResult> {
+    if (signal?.aborted) {
+      const error = new Error("AbortError");
+      error.name = "AbortError";
+      throw error;
+    }
+    this.callCount += 1;
+    const lastUser = [...messages].reverse().find((m) => m.role === "user");
+    const text = lastUser?.content?.trim() ?? "";
+    if (
+      this.failOnCall !== undefined && this.callCount === this.failOnCall
+    ) {
+      throw new Error("FAKE_PROVIDER_ERROR");
+    }
+    if (text.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
+      throw new Error("FAKE_PROVIDER_ERROR");
+    }
+    if (this.scripted && this.scripted.length > 0) {
+      const next = this.scripted.shift()!;
+      return {
+        text: next,
+        usage: {
+          inputTokens: null,
+          outputTokens: null,
+          totalTokens: null,
+          model: "fake-test-model",
+          providerResponseId: null,
+        },
+      };
+    }
+
+    const refuse =
+      /\b(ne\s+cr[eé]e\s+pas|pas\s+maintenant|refuse|annule|on\s+verra\s+plus\s+tard|attendre)\b/i.test(
+        text,
+      );
+    const acceptCreate =
+      /\b(allons[- ]y|cr[eé]ons[- ]le|je\s+veux\s+cr[eé]er|d['’]accord\s+pour\s+cr[eé]er|finalement.*(oui|allons|cr[eé]))\b/i.test(
+        text,
+      ) && !refuse;
+    const wantFast =
+      /\b(tout\s+de\s+suite|immédiat|sans\s+d[eé]tailler|on\s+verra)\b/i.test(
+        text,
+      );
+    const offTopic =
+      /\b(m[eé]t[eé]o|recette\s+de\s+cuisine|blague|quelle\s+heure)\b/i.test(
+        text,
+      ) && !/\b(projet|cycle|livr|intention|application|produit|organisation)\b/i.test(text);
+    const greetingOnly = /^(bonjour|salut|hello|hey)\.?$/i.test(text.trim());
+    const nameOnlyConfirm =
+      /\b(ok\s+pour\s+le\s+nom|le\s+nom\s+me\s+va|garde\s+ce\s+nom)\b/i.test(
+        text,
+      );
+
+    let intentionKnown: string | null = text.slice(0, 400) || null;
+    let nameProposal: string | null = null;
+    const nameProvisional = true;
+    let sufficient = false;
+    let intentionKind: "project_direction" | "non_project" | "unclear" =
+      "unclear";
+    let replyText: string;
+    let clarificationQuestion: string | null = null;
+    const suggestions: string[] = [];
+    const unknowns: string[] = [];
+
+    if (refuse) {
+      sufficient = false;
+      intentionKind = "project_direction";
+      replyText =
+        "D’accord — on ne crée rien pour l’instant. Dis-moi quand tu voudras reprendre, ou précise ce qui te bloque.";
+      // Keep prior intention if any; do not wipe project direction on refuse alone.
+    } else if (acceptCreate) {
+      sufficient = true;
+      intentionKind = "project_direction";
+      if (!intentionKnown || intentionKnown.length < 8) {
+        intentionKnown = "Projet exploratoire convenu avec le Pilote";
+      }
+      const clause = intentionKnown.split(/[.!?\n]/)[0]?.trim() || intentionKnown;
+      nameProposal =
+        clause.length > 64 ? `${clause.slice(0, 61)}…` : clause;
+      nameProposal =
+        nameProposal.charAt(0).toUpperCase() + nameProposal.slice(1);
+      replyText =
+        "Parfait — on peut créer le projet dès que tu cliques sur Créer. Je reste disponible pour préciser ensuite.";
+    } else if (nameOnlyConfirm) {
+      sufficient = false;
+      intentionKind = "project_direction";
+      replyText =
+        "Noté pour le nom. Dis-moi si tu veux effectivement créer le projet, ou continuer à préciser.";
+    } else if (offTopic || greetingOnly) {
+      sufficient = false;
+      intentionKind = "non_project";
+      intentionKnown = null;
+      replyText = greetingOnly
+        ? "Bonjour — qu’est-ce que tu voudrais accomplir avec ce projet ?"
+        : "Je reste centrée sur la création du projet. Qu’est-ce que tu voudrais accomplir dans Studio ?";
+      unknowns.push("intention du projet");
+    } else if (
+      wantFast ||
+      text.trim().length >= 16 ||
+      /\b(projet|application|produit|organisation|gestion|améliorer|moderniser|créer|idée|reporting|atelier)\b/i.test(
+        text,
+      )
+    ) {
+      sufficient = true;
+      intentionKind = "project_direction";
+      const clause = text.split(/[.!?\n]/)[0]?.trim() || text;
+      nameProposal =
+        clause.length > 64 ? `${clause.slice(0, 61)}…` : clause;
+      nameProposal =
+        nameProposal.charAt(0).toUpperCase() + nameProposal.slice(1);
+      replyText = wantFast
+        ? `On peut ouvrir un projet exploratoire autour de « ${clause.slice(0, 80)} ». Je propose le nom « ${nameProposal} » (provisoire) — tu pourras le renommer. Le bouton Créer reste de ton côté.`
+        : `Si je comprends bien, tu veux : ${clause}. Je propose de l’appeler « ${nameProposal} » (provisoire). On peut créer le projet dès que tu es prêt ; on précisera le premier travail ensuite.`;
+      if (!wantFast) {
+        clarificationQuestion =
+          "Y a-t-il un résultat concret qui te ferait dire que c’est réussi ?";
+        suggestions.push(
+          "Plus simple à comprendre",
+          "Moins d’interactions inutiles",
+          "Pilotage plus clair",
+        );
+      } else {
+        unknowns.push("objectif détaillé");
+      }
+    } else {
+      sufficient = false;
+      intentionKind = "unclear";
+      intentionKnown = null;
+      replyText =
+        "Je vois une piste, mais elle reste un peu courte. Peux-tu dire en une phrase ce que tu voudrais accomplir ?";
+      unknowns.push("intention exploitable");
+    }
+
+    const payload = {
+      replyText,
+      intentionKnown,
+      objectiveProposal: intentionKnown,
+      contextKnown: null as string | null,
+      nameProposal,
+      nameProvisional,
+      firstOrientationProposal:
+        intentionKind === "project_direction"
+          ? "Qualifier la première intention de travail dans le projet une fois créé"
+          : null,
+      unknowns,
+      sufficientForCreateProposal:
+        sufficient && !refuse && intentionKind === "project_direction",
+      refuseCreateDetected: refuse,
+      acceptCreateDetected: acceptCreate,
+      intentionKind,
+      clarificationQuestion,
+      suggestions,
+    };
+
+    return {
+      text: JSON.stringify(payload),
+      usage: {
+        inputTokens: null,
+        outputTokens: null,
+        totalTokens: null,
+        model: "fake-test-model",
+        providerResponseId: null,
+      },
+    };
+  }
+
   /** Test helper — Nora/provider invocation counter. */
   getCallCountForTests(): number {
     return this.callCount;
diff --git a/projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md b/projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
new file mode 100644
index 00000000..a75be253
--- /dev/null
+++ b/projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
@@ -0,0 +1,142 @@
+# P6 QA — Integration State and Open Reserves
+
+**Document type:** campaign integration trace (not Build Doctrine, not Roadmap, not baseline)
+**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
+**Milestone:** P6 — Global Integrated Product QA
+**Campaign:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
+**Status:** CANDIDATE INTEGRATION — DETERMINISTIC LOCAL BUNDLE
+**Runtime v3:** NON ADOPTED
+**P6 PASS:** NO
+
+---
+
+## 1. Campaign identity
+
+| Field | Value |
+|-------|--------|
+| Repository | mcleland147/sfia-workspace |
+| Integration branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
+| Base | `origin/main` |
+| Nature | Consolidated P6 corrections + tests + this trace |
+
+## 2. Classification legend (this document)
+
+| Tag | Meaning |
+|-----|---------|
+| FACT | Observable Git / code / CI fact |
+| OBSERVATION | Interpreted from evidence |
+| DETERMINISTIC PROVEN | Covered by isolated Fake/unit/jsdom tests |
+| REAL NOT PROVEN | Requires authenticated Human QA / live provider |
+| RECOMMENDATION | Non-binding next step |
+| MORRIS DECISION | Requires Morris gate |
+| OPEN RESERVE | Known limitation |
+
+## 3. Integrated candidate scope (FACT)
+
+### COG01 — pilot-facing narrative
+- `composeF2PilotFacingNarrative.ts` (new)
+- `orchestrateF2.ts` (wiring)
+- `presentationLabels.ts` (labels)
+- Tests: `p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts`, corrProof01 touch
+
+**Status:** CANDIDATE — DETERMINISTIC PROVEN at composer/F2 seam.
+**REAL NOT PROVEN:** naturalness of live Nora dialogue.
+
+### F01 — chat-first START gate / anti-duplication
+- `resolveChatFirstCycleStartGate.ts` (new)
+- `orchestrateF2.ts` (START routing)
+- Tests: `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`
+
+**Status:** CANDIDATE — DETERMINISTIC PROVEN for prepared START / suppress mint / late negation.
+**REAL NOT PROVEN:** Human QA START on a fresh project under Pilot authority.
+
+### UI-01…UI-05 — conversation surfaces
+- `ConversationSurface.tsx` (+ CSS)
+- `noraActivityProjection.ts`
+- `product-tokens.css`, `ProjectWorkspacePage.module.css`
+- Tests: `p6.hqa.ui03`, `ui04`, `ui05`
+
+**Status:** CANDIDATE — SEMANTIC/DOM DETERMINISTIC PROVEN.
+**REAL NOT PROVEN / OPEN RESERVE:** Figma runtime visual parity.
+
+### New Project — cognitive onboarding + closure
+- `newProjectOnboardingContract.ts`, `runNewProjectOnboardingTurn.ts`, `newProjectOnboardingAction.ts`
+- `NewProjectIntentionPage.tsx`, `newProjectConversation.ts`
+- `fakeProvider.ts` (onboarding schema branch — Fake only)
+- Tests: `p6.hqa.newproject01.onboarding`, `closure`, P5-S06 adaptations
+
+**Status:** CANDIDATE — DETERMINISTIC PROVEN for refuse reversal, intentionKind gate, LPS handoff continuity, usageObservation.
+**REAL NOT PROVEN:** natural conversation; live provider; authenticated create path.
+
+## 4. Explicitly excluded from this integration (FACT)
+
+| Path / class | Class | Reason |
+|--------------|-------|--------|
+| `.tmp-sfia-review/**` | D | Ephemeral review packs / assets |
+| `projects/.tmp-sfia-review/**` including SQLite | D | Local visual/fixture DB — not Product source |
+| `__tests__/p6-campaign/*.real.test.ts` | F→D exclude | Opt-in REAL harness; known typecheck friction; not required for deterministic candidate merge; OPEN RESERVE for later campaign tooling |
+
+## 5. Corrections summary (OBSERVATION)
+
+1. Nora pilot-facing narrative composition (COG01).
+2. Chat-first START gate with anti-duplication and structured late-negation (F01).
+3. Compact conversational Product cards + synthesis ≠ ExecutionContract (UI05) and related UI03/UI04.
+4. New Project: provider-backed onboarding; Studio Create authority; reversible refuse; non-syntactic `intentionKind` gate; prioritized Product context handoff; usage observation without hard EUR cap.
+
+## 6. Proof posture (FACT)
+
+| Proof class | State |
+|-------------|--------|
+| Deterministic Vitest (Fake / jsdom / isolated Product DB) | **131 passed / 11 files** in consolidation cycle (COG01, F01, UI03–05, New Project onboarding+closure, P5-S06, corrProof01, candidateTrajectoryCycleStart). REAL provider unset. |
+| Allowlist TypeScript | Clean for staged paths. Known residual `tsc` errors only in excluded `__tests__/p6-campaign/*.real.test.ts` (not in this PR). |
+| Targeted ESLint (allowlist sources) | Clean after prefer-const fixes; one non-blocking hooks warning on NewProject abort cleanup. |
+| `git diff --check` (allowlist) | Clean |
+| CI on Draft PR | Observed after push (see PR / §11) |
+| Human QA REAL (Nora live, browser auth, new QA project) | NOT EXECUTED in this Git cycle |
+| Natural conversation PASS | NOT CLAIMED |
+| Hard cap €10 onboarding | NOT TECHNICALLY ENFORCED (`hardCapEnforced=false`) |
+| FULL transcript Agents replay post-Create | NOT CLAIMED (LPS context handoff only) |
+| HQ-01 disposition | OPEN / BLOCKED for separate work — READ-ONLY preserved |
+| P6 PASS | NO |
+| Runtime v3 ADOPTED | NO |
+
+## 7. Open reserves (OPEN RESERVE)
+
+1. Human QA integrated (COG01 + F01 + UI05 + New Project) on authenticated Studio.
+2. Nora naturalness under REAL provider.
+3. UI05 Figma/runtime visual parity captures.
+4. New Project continuity is Product LPS context — not durable Agents session replay.
+5. Declared €10 Human QA envelope is documentary; no onboarding hard cap infrastructure.
+6. Cursor REAL safety (`SFIA_STUDIO_CURSOR_REAL`) remains an environment concern for Human QA operators.
+7. Canonical Pilot authority env vs legacy M3 alias — operational reserve from activation readiness.
+8. p6-campaign REAL opt-in harness left out of this PR pending type/CI hardening.
+
+## 8. Findings not closed
+
+| Finding | Status |
+|---------|--------|
+| P6-HQA-COG01 | CANDIDATE — not CLOSED |
+| P6-HQA-F01 | CANDIDATE — not CLOSED |
+| P6-HQA-UI0x | CANDIDATES — not CLOSED |
+| P6-HQA-NEWPROJECT-01 | CANDIDATE — not CLOSED |
+| HQ-01 five Delivery legacy | OPEN / separate disposition |
+
+## 9. Dependencies for next capacity
+
+**RECOMMENDATION / MORRIS DECISION:** After merge gate (separate cycle), resume Human QA on integrated tip with:
+1. Authenticated Pilot session.
+2. Cursor REAL disabled unless under explicit REAL GO.
+3. Distinct GO P6 REAL — BOUNDED for Nora spend (≤ €10 envelope).
+4. Manual new QA project (not HQ-01).
+
+## 10. Path critical
+
+Inventory → deterministic validation → commit/push → Draft PR → CI → ChatGPT Critical PR review → **Morris merge gate** → post-merge → Human QA REAL → P6 evidence consolidation.
+
+Merge ≠ Product PASS. CI PASS ≠ Human QA PASS.
+
+## 11. References
+
+- Product Simplification P6 contract: `07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
+- Handoffs (historical): activation readiness `5bba7449…`; New Project `e2a4b1f2…` / `52bceed2…`; functional closure `57e3b869…`
+- CKC 13 PR readiness: guidance only; CONTENT VALIDATED BY MORRIS; ≠ execution authority
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 8d4f8997..94716594 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -586,7 +586,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "ca1e94f4711ad989"
+      "sha256_16": "a718e67e59895d23"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
@@ -666,7 +666,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
-      "sha256_16": "fbf5e659a5261bc0"
+      "sha256_16": "fcef0a89005eeefb"
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",

```

---

## 14. Note on full PR range

Also includes prior Phase 1 documentation commits (`bc0eae04`..`8a196be1`) touching DOC05–07, convergence roadmap wording, and `.tmp-sfia-review/chatgpt-review.md` (path already on `main`). Inspect full PR file list on GitHub.

END OF REVIEW PACK
