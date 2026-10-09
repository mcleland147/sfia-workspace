# ChatGPT Review Pack — P6 PR572 POST-MERGE STATUS

**Level:** FULL
**Cycle type:** 14 — Post-merge
**Profile:** STANDARD
**Timestamp (UTC):** 2026-10-09T13:44:14Z
**Status:** POST-MERGE VERIFIED — DOC SYNC CANDIDATE
**GO Morris:** CYCLE 14 POST-MERGE AUTHORIZED — CONSUMED for verification + local doc candidate + handoff L3

---

## 0. Identity

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Local branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| Local HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| origin/main | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` |
| PR | #572 MERGED |
| Merge SHA | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` |
| Prior merge handoff | `4eb6657be6cbaab26082430f7368a0330c5c231b` |
| Project commit/push/PR this cycle | **NONE** |

---

## 1. Sources consulted

Cycle template / routing / Source Routing Map / Operating Model v2.6 · Build Doctrine · Roadmap (READ-ONLY) · C1 · Product Simplification 01/05/06/07 · this P6 integration trace · Doctrine framing 30/32/33/35/37 pointers · CKC14 (CONTENT VALIDATED BY MORRIS; guidance only; Runtime v3 NON ADOPTED) · handoff @ 4eb6657b · PR #572 / CI 37931365413.

---

## 2. Convergence Pre-check

- PR #572 MERGED; deterministic P6 corrections on main; post-merge CI SUCCESS.
- Human QA REAL incomplete; **P6 NOT PASS**; Runtime v3 **NON ADOPTED**.
- COG01/F01/UI03–05/New Project: **INTEGRATED / CANDIDATE**.
- Trace document: **ADAPT STATUS ONLY** (local candidate).
- Exit proof this cycle: Git verified + CI observed + honest doc candidate + reserves preserved + next capacity identified.
- Next: Human QA P6 on integrated Studio (separate cycle; not executed here).

---

## 3. Post-merge Git verification (FACT)

### Merge tip

```
8581abbf98fc38a78ee05c306c33fc5aa3632d3f
aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1 db45e9c4c17cbe35dff543eee0f366af81026c55
Merge pull request #572 from mcleland147/qa/sfia-studio-p6-global-integrated-product-qa
```

| Check | Result |
|-------|--------|
| PR #572 state | MERGED |
| mergedAt | 2026-10-09T12:38:24Z |
| Method | MERGE COMMIT |
| Merge SHA == origin/main | YES (`8581abbf98fc38a78ee05c306c33fc5aa3632d3f`) |
| Parents | `aba6c4a6…` + `db45e9c4…` |
| Ancestry `db45e9c4 ⊂ origin/main` | YES |
| Commits on main after merge | **0** (tip still merge SHA) |
| Files from merge range | **33** |
| `.tmp-sfia-review/chatgpt-review.md` in merge | ABSENT |
| PR branch remote | PRESERVED — `db45e9c4c17cbe35dff543eee0f366af81026c55	refs/heads/qa/sfia-studio-p6-global-integrated-product-qa` |
| Branch cleanup | NONE |
| D-PR572 | CONSUMED (prior merge cycle) |

---

## 4. CI post-merge (FACT)

| Field | Value |
|-------|--------|
| Run | https://github.com/mcleland147/sfia-workspace/actions/runs/37931365413 |
| Event | push (main) |
| headSha | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` |
| Detect | SUCCESS |
| Build and validate | SUCCESS |
| Required Gate | SUCCESS |
| Overall | **SUCCESS** |

Distinct from PR CI 37928931046 @ `db45e9c4`. No tests re-run in Cycle 14. No REAL proof from CI.

---

## 5. Documentary status sync — LOCAL CANDIDATE

| Field | Value |
|-------|--------|
| Path | `projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md` |
| Scope | Status/Git/CI/reserves/next-capacity only |
| Committed/pushed | **NO** |
| Protected paths | Untouched (Doctrine, Roadmap, C1, Product code/tests) |
| `git diff --check` | Clean |

### Full candidate document (post-edit)

```markdown
# P6 QA — Integration State and Open Reserves

**Document type:** campaign integration trace (not Build Doctrine, not Roadmap, not baseline)
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — Global Integrated Product QA
**Campaign:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Status:** INTEGRATED ON MAIN / POST-MERGE CI VERIFIED — DOCUMENTARY LOCAL CANDIDATE SYNC
**Git integration:** INTEGRATED (PR #572 MERGED)
**Product / P6 PASS:** NO
**Runtime v3:** NON ADOPTED

> **Documentary note (FACT):** This file body on `origin/main` still carried the pre-merge
> “CANDIDATE INTEGRATION” wording after PR #572. The updates below are a **local candidate
> status sync** prepared in Cycle 14. They are **not** committed or pushed to main in that
> cycle. Until a separate documentary Git integration, main’s blob remains the pre-sync text.

---

## 1. Campaign identity

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Integration branch (historical) | `qa/sfia-studio-p6-global-integrated-product-qa` @ `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| PR | **#572 MERGED** — https://github.com/mcleland147/sfia-workspace/pull/572 |
| Merge commit | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` |
| Merge parents | `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` + `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| Method | MERGE COMMIT |
| mergedAt | 2026-10-09T12:38:24Z |
| Post-merge CI | run **37931365413** SUCCESS (Detect + Build + Required Gate) on merge SHA |
| D-PR572 | Roadmap factual tip **RATIFIED** + MERGE **AUTHORIZED / CONSUMED** |
| Nature | Consolidated P6 corrections + tests + this integration trace |

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
| INTEGRATED | Present on `origin/main` via verified merge — ≠ Product PASS |

## 3. Integrated scope on main (FACT)

Functional statuses remain **CANDIDATE** for Product/Human QA. Git presence = **INTEGRATED**.

### COG01 — pilot-facing narrative
- `composeF2PilotFacingNarrative.ts` (new)
- `orchestrateF2.ts` (wiring)
- `presentationLabels.ts` (labels)
- Tests: `p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts`, corrProof01 touch

**Git:** INTEGRATED ON MAIN.
**Product status:** CANDIDATE — DETERMINISTIC PROVEN at composer/F2 seam.
**REAL NOT PROVEN:** naturalness of live Nora dialogue.

### F01 — chat-first START gate / anti-duplication
- `resolveChatFirstCycleStartGate.ts` (new)
- `orchestrateF2.ts` (START routing)
- Tests: `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`

**Git:** INTEGRATED ON MAIN.
**Product status:** CANDIDATE — DETERMINISTIC PROVEN for prepared START / suppress mint / late negation.
**REAL NOT PROVEN:** Human QA START on a fresh project under Pilot authority.

### UI-01…UI-05 — conversation surfaces
- `ConversationSurface.tsx` (+ CSS)
- `noraActivityProjection.ts`
- `product-tokens.css`, `ProjectWorkspacePage.module.css`
- Tests: `p6.hqa.ui03`, `ui04`, `ui05`

**Git:** INTEGRATED ON MAIN.
**Product status:** CANDIDATE — SEMANTIC/DOM DETERMINISTIC PROVEN.
**REAL NOT PROVEN / OPEN RESERVE:** Figma runtime visual parity.

### New Project — cognitive onboarding + closure
- `newProjectOnboardingContract.ts`, `runNewProjectOnboardingTurn.ts`, `newProjectOnboardingAction.ts`
- `NewProjectIntentionPage.tsx`, `newProjectConversation.ts`
- `fakeProvider.ts` (onboarding schema branch — Fake only)
- Tests: `p6.hqa.newproject01.onboarding`, `closure`, P5-S06 adaptations

**Git:** INTEGRATED ON MAIN.
**Product status:** CANDIDATE — DETERMINISTIC PROVEN for refuse reversal, intentionKind gate, LPS handoff continuity, usageObservation.
**REAL NOT PROVEN:** natural conversation; live provider; authenticated create path.

## 4. Explicitly excluded from PR #572 integration (FACT)

| Path / class | Class | Reason |
|--------------|-------|--------|
| `.tmp-sfia-review/**` | D | Ephemeral review packs / assets (restored out of PR diff; PR572-01 CLOSED) |
| `projects/.tmp-sfia-review/**` including SQLite | D | Local visual/fixture DB — not Product source |
| `__tests__/p6-campaign/*.real.test.ts` | F→D exclude | Opt-in REAL harness; known typecheck friction; deferred OPEN RESERVE |

## 5. Corrections summary (OBSERVATION)

1. Nora pilot-facing narrative composition (COG01).
2. Chat-first START gate with anti-duplication and structured late-negation (F01).
3. Compact conversational Product cards + synthesis ≠ ExecutionContract (UI05) and related UI03/UI04.
4. New Project: provider-backed onboarding; Studio Create authority; reversible refuse; non-syntactic `intentionKind` gate; prioritized Product context handoff; usage observation without hard EUR cap.

## 6. Proof posture (FACT)

| Proof class | State |
|-------------|--------|
| Deterministic Vitest (historical consolidation) | **131 passed / 11 files** (Fake; REAL unset) — historical FACT; not re-run in Cycle 14 |
| CI on Draft PR | run **37928931046** SUCCESS @ `db45e9c4` |
| CI post-merge on main | run **37931365413** SUCCESS @ `8581abbf` — Detect + Build + Required Gate |
| Git merge | VERIFIED — merge commit on `origin/main`; PR HEAD is ancestor |
| Documentary status sync (this file) | **LOCAL CANDIDATE** in Cycle 14 — not yet on main |
| Human QA REAL (Nora live, browser auth, new QA project) | NOT EXECUTED |
| Natural conversation PASS | NOT CLAIMED |
| Hard cap €10 onboarding | NOT TECHNICALLY ENFORCED (`hardCapEnforced=false`) |
| FULL transcript Agents replay post-Create | NOT CLAIMED (LPS context handoff only) |
| HQ-01 disposition | OPEN / BLOCKED for separate work — READ-ONLY preserved |
| P6 PASS | NO |
| Runtime v3 ADOPTED | NO |

## 7. Open reserves (OPEN RESERVE)

| ID | Reserve | State | Current proof | P6 consequence | Next action | Exit proof |
|----|---------|-------|---------------|----------------|-------------|------------|
| R1 | Human QA integrated (COG01/F01/UI05/New Project) | OPEN | Deterministic + post-merge CI only | Blocks P6 PASS | Authenticated Human QA campaigns | Human evidence pack PASS criteria |
| R2 | Nora naturalness REAL | OPEN | Fake narrative only | Blocks conversational REAL claim | Live provider observations | Documented naturalness verdict |
| R3 | New Project continuity via LPS ≠ Agents full replay | OPEN / BY DESIGN LIMIT | Closure tests LPS handoff | Continuity claims must stay LPS-scoped | Contextual resume QA | Resume-without-full-replay evidence |
| R4 | €10 Human QA envelope; `hardCapEnforced=false` | OPEN | Documentary envelope | No technical spend hard-stop | Operational budget control; infra arbitration if needed | Enforced or accepted operational control |
| R5 | UI Figma/runtime visual parity | OPEN | DOM/semantic tests | Visual PASS not claimed | Runtime captures vs frames | Parity evidence |
| R6 | HQ-01 five Delivery / 21 historical projects | OPEN / BLOCKED | Prior disposition | Separate track | Dedicated disposition; no mutation here | Explicit HQ-01 decision |
| R7 | p6-campaign REAL harness not integrated | OPEN / DEFERRED | Local untracked tests with tsc friction | Tooling debt | Qualify need vs retire | Integrated harness or accepted drop |
| R8 | Cursor REAL safety + Pilot authority env | OPEN | Activation readiness reserves | Human QA env risk | Dedicated preflight before Human QA | Preflight PASS under gates |

## 8. Findings not closed

| Finding | Status |
|---------|--------|
| P6-HQA-COG01 | INTEGRATED / CANDIDATE — not CLOSED |
| P6-HQA-F01 | INTEGRATED / CANDIDATE — not CLOSED |
| P6-HQA-UI0x | INTEGRATED / CANDIDATES — not CLOSED |
| P6-HQA-NEWPROJECT-01 | INTEGRATED / CANDIDATE — not CLOSED |
| HQ-01 five Delivery legacy | OPEN / separate disposition |

Merge did **not** close Product findings.

## 9. Dependencies for next capacity — Human QA

**RECOMMENDATION:** Resume Human QA on a Studio runtime whose applicable code is explicitly tied to merge SHA `8581abbf…` (or a later tip that still contains PR #572).

Entry prechecks (not executed in Cycle 14):
1. Authenticated Pilot session.
2. Confirm runtime revision ↔ Git (do not assume local `:3020` is already on merge tip).
3. Cursor REAL disabled unless under explicit REAL GO (`SFIA_STUDIO_CURSOR_REAL`).
4. Distinct GO P6 REAL — BOUNDED for Nora spend (≤ €10 envelope) where provider REAL applies.
5. Manual new QA project (not HQ-01).
6. Capture evidence for COG01, F01 START, UI03–05, New Project create/handoff, authority frontiers (no auto-HD / auto-Cycle).

If provider/authority/revision precheck fails: **Human QA PRECHECK REQUIRED** — not READY FOR REAL by default.

## 10. Path critical

~~Inventory → … → Morris merge gate~~ **DONE (PR #572).**

Current: Post-merge verified → **documentary status sync candidate** → ChatGPT review → optional documentary Git integration (separate GO) → **Human QA P6** → P6 exit decision.

Merge ≠ Product PASS. CI PASS ≠ Human QA PASS. Local doc candidate ≠ baseline Git.

## 11. References

- Product Simplification P6 contract: `07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
- PR #572 / merge `8581abbf…` / CI post-merge `37931365413`
- Handoffs: consolidation `28784d2d…`; regularization `6efaaa6c…`; controlled merge `4eb6657b…`
- CKC 13/14: guidance only; CONTENT VALIDATED BY MORRIS; ≠ execution authority; Runtime v3 NON ADOPTED

```

### Complete unified diff vs local HEAD/main blob

```diff
diff --git a/projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md b/projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
index a75be253..d39f92b1 100644
--- a/projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
+++ b/projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
@@ -4,9 +4,15 @@
 **Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
 **Milestone:** P6 — Global Integrated Product QA
 **Campaign:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
-**Status:** CANDIDATE INTEGRATION — DETERMINISTIC LOCAL BUNDLE
+**Status:** INTEGRATED ON MAIN / POST-MERGE CI VERIFIED — DOCUMENTARY LOCAL CANDIDATE SYNC
+**Git integration:** INTEGRATED (PR #572 MERGED)
+**Product / P6 PASS:** NO
 **Runtime v3:** NON ADOPTED
-**P6 PASS:** NO
+
+> **Documentary note (FACT):** This file body on `origin/main` still carried the pre-merge
+> “CANDIDATE INTEGRATION” wording after PR #572. The updates below are a **local candidate
+> status sync** prepared in Cycle 14. They are **not** committed or pushed to main in that
+> cycle. Until a separate documentary Git integration, main’s blob remains the pre-sync text.

 ---

@@ -15,9 +21,15 @@
 | Field | Value |
 |-------|--------|
 | Repository | mcleland147/sfia-workspace |
-| Integration branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
-| Base | `origin/main` |
-| Nature | Consolidated P6 corrections + tests + this trace |
+| Integration branch (historical) | `qa/sfia-studio-p6-global-integrated-product-qa` @ `db45e9c4c17cbe35dff543eee0f366af81026c55` |
+| PR | **#572 MERGED** — https://github.com/mcleland147/sfia-workspace/pull/572 |
+| Merge commit | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` |
+| Merge parents | `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` + `db45e9c4c17cbe35dff543eee0f366af81026c55` |
+| Method | MERGE COMMIT |
+| mergedAt | 2026-10-09T12:38:24Z |
+| Post-merge CI | run **37931365413** SUCCESS (Detect + Build + Required Gate) on merge SHA |
+| D-PR572 | Roadmap factual tip **RATIFIED** + MERGE **AUTHORIZED / CONSUMED** |
+| Nature | Consolidated P6 corrections + tests + this integration trace |

 ## 2. Classification legend (this document)

@@ -30,8 +42,11 @@
 | RECOMMENDATION | Non-binding next step |
 | MORRIS DECISION | Requires Morris gate |
 | OPEN RESERVE | Known limitation |
+| INTEGRATED | Present on `origin/main` via verified merge — ≠ Product PASS |
+
+## 3. Integrated scope on main (FACT)

-## 3. Integrated candidate scope (FACT)
+Functional statuses remain **CANDIDATE** for Product/Human QA. Git presence = **INTEGRATED**.

 ### COG01 — pilot-facing narrative
 - `composeF2PilotFacingNarrative.ts` (new)
@@ -39,7 +54,8 @@
 - `presentationLabels.ts` (labels)
 - Tests: `p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts`, corrProof01 touch

-**Status:** CANDIDATE — DETERMINISTIC PROVEN at composer/F2 seam.
+**Git:** INTEGRATED ON MAIN.
+**Product status:** CANDIDATE — DETERMINISTIC PROVEN at composer/F2 seam.
 **REAL NOT PROVEN:** naturalness of live Nora dialogue.

 ### F01 — chat-first START gate / anti-duplication
@@ -47,7 +63,8 @@
 - `orchestrateF2.ts` (START routing)
 - Tests: `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`

-**Status:** CANDIDATE — DETERMINISTIC PROVEN for prepared START / suppress mint / late negation.
+**Git:** INTEGRATED ON MAIN.
+**Product status:** CANDIDATE — DETERMINISTIC PROVEN for prepared START / suppress mint / late negation.
 **REAL NOT PROVEN:** Human QA START on a fresh project under Pilot authority.

 ### UI-01…UI-05 — conversation surfaces
@@ -56,7 +73,8 @@
 - `product-tokens.css`, `ProjectWorkspacePage.module.css`
 - Tests: `p6.hqa.ui03`, `ui04`, `ui05`

-**Status:** CANDIDATE — SEMANTIC/DOM DETERMINISTIC PROVEN.
+**Git:** INTEGRATED ON MAIN.
+**Product status:** CANDIDATE — SEMANTIC/DOM DETERMINISTIC PROVEN.
 **REAL NOT PROVEN / OPEN RESERVE:** Figma runtime visual parity.

 ### New Project — cognitive onboarding + closure
@@ -65,16 +83,17 @@
 - `fakeProvider.ts` (onboarding schema branch — Fake only)
 - Tests: `p6.hqa.newproject01.onboarding`, `closure`, P5-S06 adaptations

-**Status:** CANDIDATE — DETERMINISTIC PROVEN for refuse reversal, intentionKind gate, LPS handoff continuity, usageObservation.
+**Git:** INTEGRATED ON MAIN.
+**Product status:** CANDIDATE — DETERMINISTIC PROVEN for refuse reversal, intentionKind gate, LPS handoff continuity, usageObservation.
 **REAL NOT PROVEN:** natural conversation; live provider; authenticated create path.

-## 4. Explicitly excluded from this integration (FACT)
+## 4. Explicitly excluded from PR #572 integration (FACT)

 | Path / class | Class | Reason |
 |--------------|-------|--------|
-| `.tmp-sfia-review/**` | D | Ephemeral review packs / assets |
+| `.tmp-sfia-review/**` | D | Ephemeral review packs / assets (restored out of PR diff; PR572-01 CLOSED) |
 | `projects/.tmp-sfia-review/**` including SQLite | D | Local visual/fixture DB — not Product source |
-| `__tests__/p6-campaign/*.real.test.ts` | F→D exclude | Opt-in REAL harness; known typecheck friction; not required for deterministic candidate merge; OPEN RESERVE for later campaign tooling |
+| `__tests__/p6-campaign/*.real.test.ts` | F→D exclude | Opt-in REAL harness; known typecheck friction; deferred OPEN RESERVE |

 ## 5. Corrections summary (OBSERVATION)

@@ -87,12 +106,12 @@

 | Proof class | State |
 |-------------|--------|
-| Deterministic Vitest (Fake / jsdom / isolated Product DB) | **131 passed / 11 files** in consolidation cycle (COG01, F01, UI03–05, New Project onboarding+closure, P5-S06, corrProof01, candidateTrajectoryCycleStart). REAL provider unset. |
-| Allowlist TypeScript | Clean for staged paths. Known residual `tsc` errors only in excluded `__tests__/p6-campaign/*.real.test.ts` (not in this PR). |
-| Targeted ESLint (allowlist sources) | Clean after prefer-const fixes; one non-blocking hooks warning on NewProject abort cleanup. |
-| `git diff --check` (allowlist) | Clean |
-| CI on Draft PR | Observed after push (see PR / §11) |
-| Human QA REAL (Nora live, browser auth, new QA project) | NOT EXECUTED in this Git cycle |
+| Deterministic Vitest (historical consolidation) | **131 passed / 11 files** (Fake; REAL unset) — historical FACT; not re-run in Cycle 14 |
+| CI on Draft PR | run **37928931046** SUCCESS @ `db45e9c4` |
+| CI post-merge on main | run **37931365413** SUCCESS @ `8581abbf` — Detect + Build + Required Gate |
+| Git merge | VERIFIED — merge commit on `origin/main`; PR HEAD is ancestor |
+| Documentary status sync (this file) | **LOCAL CANDIDATE** in Cycle 14 — not yet on main |
+| Human QA REAL (Nora live, browser auth, new QA project) | NOT EXECUTED |
 | Natural conversation PASS | NOT CLAIMED |
 | Hard cap €10 onboarding | NOT TECHNICALLY ENFORCED (`hardCapEnforced=false`) |
 | FULL transcript Agents replay post-Create | NOT CLAIMED (LPS context handoff only) |
@@ -102,41 +121,54 @@

 ## 7. Open reserves (OPEN RESERVE)

-1. Human QA integrated (COG01 + F01 + UI05 + New Project) on authenticated Studio.
-2. Nora naturalness under REAL provider.
-3. UI05 Figma/runtime visual parity captures.
-4. New Project continuity is Product LPS context — not durable Agents session replay.
-5. Declared €10 Human QA envelope is documentary; no onboarding hard cap infrastructure.
-6. Cursor REAL safety (`SFIA_STUDIO_CURSOR_REAL`) remains an environment concern for Human QA operators.
-7. Canonical Pilot authority env vs legacy M3 alias — operational reserve from activation readiness.
-8. p6-campaign REAL opt-in harness left out of this PR pending type/CI hardening.
+| ID | Reserve | State | Current proof | P6 consequence | Next action | Exit proof |
+|----|---------|-------|---------------|----------------|-------------|------------|
+| R1 | Human QA integrated (COG01/F01/UI05/New Project) | OPEN | Deterministic + post-merge CI only | Blocks P6 PASS | Authenticated Human QA campaigns | Human evidence pack PASS criteria |
+| R2 | Nora naturalness REAL | OPEN | Fake narrative only | Blocks conversational REAL claim | Live provider observations | Documented naturalness verdict |
+| R3 | New Project continuity via LPS ≠ Agents full replay | OPEN / BY DESIGN LIMIT | Closure tests LPS handoff | Continuity claims must stay LPS-scoped | Contextual resume QA | Resume-without-full-replay evidence |
+| R4 | €10 Human QA envelope; `hardCapEnforced=false` | OPEN | Documentary envelope | No technical spend hard-stop | Operational budget control; infra arbitration if needed | Enforced or accepted operational control |
+| R5 | UI Figma/runtime visual parity | OPEN | DOM/semantic tests | Visual PASS not claimed | Runtime captures vs frames | Parity evidence |
+| R6 | HQ-01 five Delivery / 21 historical projects | OPEN / BLOCKED | Prior disposition | Separate track | Dedicated disposition; no mutation here | Explicit HQ-01 decision |
+| R7 | p6-campaign REAL harness not integrated | OPEN / DEFERRED | Local untracked tests with tsc friction | Tooling debt | Qualify need vs retire | Integrated harness or accepted drop |
+| R8 | Cursor REAL safety + Pilot authority env | OPEN | Activation readiness reserves | Human QA env risk | Dedicated preflight before Human QA | Preflight PASS under gates |

 ## 8. Findings not closed

 | Finding | Status |
 |---------|--------|
-| P6-HQA-COG01 | CANDIDATE — not CLOSED |
-| P6-HQA-F01 | CANDIDATE — not CLOSED |
-| P6-HQA-UI0x | CANDIDATES — not CLOSED |
-| P6-HQA-NEWPROJECT-01 | CANDIDATE — not CLOSED |
+| P6-HQA-COG01 | INTEGRATED / CANDIDATE — not CLOSED |
+| P6-HQA-F01 | INTEGRATED / CANDIDATE — not CLOSED |
+| P6-HQA-UI0x | INTEGRATED / CANDIDATES — not CLOSED |
+| P6-HQA-NEWPROJECT-01 | INTEGRATED / CANDIDATE — not CLOSED |
 | HQ-01 five Delivery legacy | OPEN / separate disposition |

-## 9. Dependencies for next capacity
+Merge did **not** close Product findings.
+
+## 9. Dependencies for next capacity — Human QA

-**RECOMMENDATION / MORRIS DECISION:** After merge gate (separate cycle), resume Human QA on integrated tip with:
+**RECOMMENDATION:** Resume Human QA on a Studio runtime whose applicable code is explicitly tied to merge SHA `8581abbf…` (or a later tip that still contains PR #572).
+
+Entry prechecks (not executed in Cycle 14):
 1. Authenticated Pilot session.
-2. Cursor REAL disabled unless under explicit REAL GO.
-3. Distinct GO P6 REAL — BOUNDED for Nora spend (≤ €10 envelope).
-4. Manual new QA project (not HQ-01).
+2. Confirm runtime revision ↔ Git (do not assume local `:3020` is already on merge tip).
+3. Cursor REAL disabled unless under explicit REAL GO (`SFIA_STUDIO_CURSOR_REAL`).
+4. Distinct GO P6 REAL — BOUNDED for Nora spend (≤ €10 envelope) where provider REAL applies.
+5. Manual new QA project (not HQ-01).
+6. Capture evidence for COG01, F01 START, UI03–05, New Project create/handoff, authority frontiers (no auto-HD / auto-Cycle).
+
+If provider/authority/revision precheck fails: **Human QA PRECHECK REQUIRED** — not READY FOR REAL by default.

 ## 10. Path critical

-Inventory → deterministic validation → commit/push → Draft PR → CI → ChatGPT Critical PR review → **Morris merge gate** → post-merge → Human QA REAL → P6 evidence consolidation.
+~~Inventory → … → Morris merge gate~~ **DONE (PR #572).**
+
+Current: Post-merge verified → **documentary status sync candidate** → ChatGPT review → optional documentary Git integration (separate GO) → **Human QA P6** → P6 exit decision.

-Merge ≠ Product PASS. CI PASS ≠ Human QA PASS.
+Merge ≠ Product PASS. CI PASS ≠ Human QA PASS. Local doc candidate ≠ baseline Git.

 ## 11. References

 - Product Simplification P6 contract: `07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
-- Handoffs (historical): activation readiness `5bba7449…`; New Project `e2a4b1f2…` / `52bceed2…`; functional closure `57e3b869…`
-- CKC 13 PR readiness: guidance only; CONTENT VALIDATED BY MORRIS; ≠ execution authority
+- PR #572 / merge `8581abbf…` / CI post-merge `37931365413`
+- Handoffs: consolidation `28784d2d…`; regularization `6efaaa6c…`; controlled merge `4eb6657b…`
+- CKC 13/14: guidance only; CONTENT VALIDATED BY MORRIS; ≠ execution authority; Runtime v3 NON ADOPTED

```

---

## 6. Reserves R1–R8 (preserved)

See candidate document §7. Summary: all OPEN (or OPEN/BLOCKED/DEFERRED as noted); none closed by merge or Cycle 14.

---

## 7. Next Human QA readiness (NOT EXECUTED)

**Qualification:** Entry synthesis prepared; **Human QA PRECHECK REQUIRED** before claiming READY FOR REAL.

Must verify on a runtime explicitly tied to merge SHA `8581abbf…` (do not assume `:3020` is already on tip). Cover New Project path, Nora REAL (under GO), Project transition, LPS continuity, COG01, F01 START, UI03–05, Pilot authority, no auto-HD/auto-Cycle, evidence capture, budget tracking, env safety (R8).

No new QA project, no Nora REAL call, no CycleInstance create in this cycle.

---

## 8. Fake / Real Qualification

| Class | State |
|-------|--------|
| Entry | DETERMINISTIC INTEGRATED + POST-MERGE CI PASS |
| This cycle | POST-MERGE GIT/CI VERIFIED + DOCUMENTARY STATUS CANDIDATE |
| Human QA / REAL E2E / natural conversation | NOT PROVEN |
| P6 PASS / runtime v3 ADOPTED | NO |

---

## 9. Worktree preservation

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/

```

Preserved: review pack artifacts, `projects/.tmp-sfia-review/**` (incl. SQLite), untracked `p6-campaign` REAL tests. No stash/clean/reset.

---

## 10. Gates remaining

| Gate | State |
|------|--------|
| Documentary Git integration of this status sync | Pending separate GO (not this cycle) |
| Human QA P6 | Next capacity |
| P6 PASS / exit | NOT CLAIMED |
| Branch cleanup | NOT AUTHORIZED |

---

## 11. Verdict (Cursor)

**POST-MERGE VERIFIED — DOC SYNC CANDIDATE**

GO CYCLE 14 CONSUMED for verification + local doc candidate + handoff.
Document **not** integrated on main. Not P6 PASS. Not runtime v3 ADOPTED.

END OF REVIEW PACK
