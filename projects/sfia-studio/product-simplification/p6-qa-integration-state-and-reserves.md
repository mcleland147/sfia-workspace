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
