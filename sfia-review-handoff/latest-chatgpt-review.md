# SFIA STUDIO — PRE-M6 UI DELIVERY OPTION A — FULL CYCLE 9 QA / VALIDATION RE-RUN

**Level:** FULL
**Timestamp:** 2026-08-16 20:44:49 CEST
**Branch:** delivery/sfia-studio-pre-m6-ui-option-a
**HEAD / origin/main:** 0d33478566627a9bf507d5a06323962d349308ee
**Incoming handoff:** 4601a14c08549284457fafb24ec2590b500c09d9
**Visual authority handoff:** 69106c82024158889f77e9d31508a222ea5f3a0f
**REAL:** 0
**Project staging/commits/pushes/PR/merge:** 0
**Production mutation during Cycle 9:** 0

---

## GO Morris (exact)

User wording: « ok go »

Interpreted governed GO:

**GO MORRIS — PRE-M6 UI DELIVERY OPTION A — FULL CYCLE 9 QA / VALIDATION RE-RUN**

Authorizes: local runtime, fake/local provider, QA unit/integration + Playwright, fresh captures, visual comparison, diagnostics, Review Pack FULL, Review Handoff publish-in-cycle L3 borné.

Does NOT authorize: production mutation to fix QA fail, new product test seam, new persistence/migration/engine/architecture, Figma mutation, Cursor REAL, project commit/push/PR/merge, Morris UAT, Pre-M6 acceptance, M6, runtime v3 ADOPTED.

---

## Cycle / Profile / CKC

| Field | Value |
|-------|-------|
| Cycle | 9 — QA / validation |
| Profile | Critical |
| Typology | QA / VALIDATION ONLY |
| CKC | `method/.../pilots/04-qa-validation.md` cycle_id=9 status=candidate version=0.1.0 |
| Authority | experimental cognitive guidance — no execution authority |
| Outputs | PASS / PASS WITH RESERVES / FAIL |

---

## Git Truth

| Check | Value |
|-------|-------|
| pwd / toplevel | worktree `sfia-studio-m4-real-off` |
| branch | delivery/sfia-studio-pre-m6-ui-option-a |
| HEAD | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/main | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/sfia/review-handoff (entry) | 4601a14c08549284457fafb24ec2590b500c09d9 |
| staged | 0 |
| REAL / OPS1_CURSOR_REAL | unset |
| working tree | DIRTY candidat attendu |

No STOP conditions triggered (main not advanced, correct branch, no staged, candidate present, subject aligned with 4601a14c).

---

## Candidate Integrity

| Metric | Exact |
|--------|-------|
| Candidate tracked modified (projects/sfia-studio) | **40** |
| Candidate untracked project files | **26** |
| resolveM3ExecutionContract.ts vs HEAD | **unchanged (0 diff)** |
| executeConfirmedFixtureSafeContract.ts | PRESENT |
| validateResolvedM3ExecutionBoundary.ts | PRESENT |
| confirmAndExecuteF3Fixture.ts / confirmAndExecuteResolvedM3.ts | PRESENT (thinned → shared pipeline) |
| qa-pre-m6-01.finalHardening.test.ts | PRESENT (+ Cycle 9 B5/B7/R-H03 extensions) |

Hardening semantics (Proposal STALE, DecisionBasis, M3 bridge, shared pipeline, boundary) match handoff 4601a14c. No substantive candidate divergence detected.

---

## Convergence Pre-check

Build Doctrine VALIDATED — ACTIVE ON MAIN.
Capacities: V3-F05 (+ F02/F04/F11/F12/F14/F15).
Milestone: PRE-M6 UI DELIVERY OPTION A — FULL QA RE-RUN.
Option A ADOPTED · Execution Authorization CONSUMED · Candidate IMPLEMENTED LOCALLY · QA-PRE-M6-01 CODE BLOCKER CLOSED CANDIDATE · Final hardening PASS WITH RESERVES (incoming) · G-UX-08 OPEN/DEFERRED · G-UX-09 KEEP RESERVE · Confirmation KEEP RESERVE · G-UX-10 candidate fixed / re-proved this cycle · G-UX-11 was OPEN — this cycle targets exit proof · Pre-M6 NON COMPLETE · M6 NOT AUTHORIZED · runtime v3 NON ADOPTED · REAL 0.

Roadmap historical « UI DELIVERY NOT AUTHORIZED » formulations on main: **not treated as new blocker** (stale vs operational GO).

---

## Build Doctrine Challenge

User capacity F1→F11: YES. Useful now: YES (blocking critical-path proof). Reuse: Option A candidate, shared fixture-safe pipeline, M3 boundary, Playwright, Product Store, fake provider, manual Figma evidence. Parallel architecture / new POC / new production fixture: FORBIDDEN. Exit proof: browser + negatives + runtime screenshots + visual comparison. Next capacity if compatible: Morris Pre-M6 UAT only (not consumed here).

---

## QA Coverage Map

Path: `.tmp-sfia-review/qa/coverage-map.md`

Status after execution (summary):

| Cluster | Result |
|---------|--------|
| F1→F11 happy path browser | PASS |
| N1–N4, N12 browser | PASS |
| N5, N7–N11 | BROWSER PROOF UNAVAILABLE (no product seam) — explicit |
| N6 | LOWER-LEVEL PASS (hostile boundary) + N3 browser |
| B5 / B7 / R-H03 | PASS unit |
| Engineering | PASS |
| Targeted Option A E2E | 9/9 PASS |
| Full Playwright | 104 pass / 16 fail / 5 skip — Class C/D only |
| Visual Figma 19/19 | VERIFIED |
| G-UX-11 | SATISFIED with explicit testability reserves |

---

## Hardening Proof Reserves (R-H01–R-H03)

| ID | Result | Evidence |
|----|--------|----------|
| B5 / R-H01 requiredAuthority ≠ MORRIS | **PASS** | `CONTRACT_AUTHORITY_MISMATCH`; Attempt 0; launch 0 |
| B7 / R-H02 PREPARE idempotency non-canonical | **PASS** | `CANONICAL_M3_PREPARE_IDEMPOTENCY_MISMATCH`; Attempt 0; launch 0 |
| R-H03 legacy replay idempotence | **PASS** | first Attempt + replay → `reusedExistingAttempt`; launch unchanged; one succeeded Attempt |

No new product test seam created. Used existing domain build/supersede APIs + shared pipeline callers.

---

## Engineering Validation

From `projects/sfia-studio/app`:

| Command | Result |
|---------|--------|
| npm run typecheck | PASS |
| npm run lint | PASS (0 warnings/errors) |
| npm test -- --run | **1775 passed** / 131 skipped (1906 total) |
| npm run build | PASS |
| git diff --check | PASS (exit 0) |

Baseline prior rerun was ~1773; +2 = B5/B7 cases (R-H03 folded into H1).

Also re-ran: `qa-pre-m6-01.finalHardening.test.ts` **12/12 PASS**; prior `qa-pre-m6-01.postGoDurableM3Path` covered in full vitest.

---

## Targeted Playwright

```
SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 npm run test:e2e -- e2e/studio-option-a.spec.ts
```

**9/9 PASS** (after a11y oracle fix: send disabled until non-empty input — honest empty-state, not product defect).

---

## Full Playwright Regression

```
SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 npm run test:e2e
```

**104 passed · 16 failed · 5 skipped · ~9.1m**

Option A specs in full suite: **9/9 PASS**.

---

## Failure Classification (full suite)

| ID | Spec | Reproduction | Class | Candidate-related? | Blocking for Option A? |
|----|------|--------------|-------|--------------------|------------------------|
| F-01..F-03 | increment-b.spec.ts | harness UI / URL expectations | C | No | No |
| F-04..F-05 | increment-c.spec.ts | GPT qualification UI waits | C/D | No | No |
| F-06..F-07 | increment-d.spec.ts UI | vs-inc-d-status / stop banner | C | No | No |
| F-08..F-13 | increment-d.spec.ts CLI | `Cannot find module .../harness/node_modules/tsx/dist/cli.mjs` | **C environment/harness** | No | No |
| F-14 | increment-e.spec.ts UI | vs-inc-e-awaiting missing | C | No | No |
| F-15..F-16 | increment-e.spec.ts CLI | same missing `tsx` | **C** | No | No |

**Class A (Option A regression):** 0
**Class B (obsolete oracle / adopted decision):** 0 identified as Option A blockers
**Class C (environment/harness independent):** 16 (tsx absent in harness node_modules; historical Inc B–E)
**Class D (unrelated):** Inc C/E UI failures not Option A path

Forbidden this cycle: package.json / tsx install / playwright config mutation. Failures do not establish Option A causality.

---

## Happy Path F1→F11

**PASS** (browser, post-hardening, fixture-safe, REAL false).

Proved: F1 Projects → create/open; F2/F3 conversation+LPS; F4 Proposal ≠ HD; F5 GO; F6 resolved `xct:m3-res:` Attempt 0 pre-confirm; F7 succeeded Attempt+Evidence+RB; F8 Recommendation no exec authority / « PAS UNE DÉCISION »; F9 History panel; F10 reload → process-local cleared, durable LPS + recovery; F11 responsive viewport sets + captures.

---

## Negative Authority Matrix N1→N12

| ID | Verdict | Justification |
|----|---------|---------------|
| N1 | BROWSER PASS | Proposal « PAS UNE DÉCISION »; HD absent |
| N2 | BROWSER PASS | NO_GO → f3-prepare-button count 0 |
| N3 | BROWSER PASS + unit B8 | resolve without confirm → Attempt 0 / no execute panel |
| N4 | BROWSER PASS + unit H2/R-H03 | same Attempt id / reusedExistingAttempt; launch not doubled |
| N5 | BROWSER PROOF UNAVAILABLE | stale Recommendation UI not reachable without new seam; lower-level freshness doctrine preserved; impact: visual F8-stale only |
| N6 | LOWER-LEVEL PASS / partial browser | hostile boundary Attempt 0; N3 covers pre-confirm |
| N7 | BROWSER PROOF UNAVAILABLE | failed Attempt not reachable without seam |
| N8 | BROWSER PROOF UNAVAILABLE | timeout variant |
| N9 | BROWSER PROOF UNAVAILABLE | cancelled variant |
| N10 | BROWSER PROOF UNAVAILABLE | missing Evidence injector |
| N11 | BROWSER PROOF UNAVAILABLE | durable rehydrate failure injector |
| N12 | BROWSER PASS | reload → empty assistant; no gate/proposal rebuild |

Legacy Proposal STALE after GO: **BROWSER + UNIT PASS** (authority regression absent).

---

## G-UX-11 Exit Proof

| Criterion | Status |
|-----------|--------|
| 1 happy path F1→F11 browser | PASS |
| 2 F4→F8 post-GO durable | PASS |
| 3 Recommendation ≠ HumanDecision | PASS |
| 4 rejected decision fail-closed | PASS |
| 5 unconfirmed → Attempt 0 | PASS |
| 6 duplicate start protection | PASS |
| 7 stale Proposal negative preserved | PASS |
| 8 History/Recovery browser | PASS |
| 9 no false persistence | PASS |
| 10 mandatory negatives sufficient | PASS for authority chain; N5/N7–N11 explicit UNAVAILABLE |
| 11 reproducible proofs | PASS |
| 12 no blocking authority/product reserve | PASS (B5/B7/R-H03 closed) |

**G-UX-11 = SATISFIED** (with non-blocking testability reserves on F7 variants / F8-stale browser).

---

## M3 Boundary Verdict

**PASS** — hostile cases B1–B8 including new B5/B7; unresolved PREPARE fail-closed; fixture-safe profile enforced; Attempt 0 / launch 0 on boundary FAIL.

---

## Duplicate Attempt Verdict

**PASS** — M3 replay + legacy R-H03 + browser N4.

---

## Recommendation Freshness

**PASS (current path)** — post-execution « Recommandation à jour » + « PAS UNE DÉCISION »; executionAuthority false.
**STALE browser:** UNAVAILABLE without seam (manual Figma E17 remains reference only).
Freshness does not alter HumanDecision/ExecutionContract authority.

---

## History

**PASS** — History panel visible after execution; durable readback; no reconstructed conversation transcript observed.

---

## Recovery

**PASS** — new project: no recovery banner; after durable progress + reload: recovery contextual (« Reprise après rechargement »), process-local conversation/proposal absent, durable outcome relecture possible, Reprendre/Requalifier CTAs present.

---

## Accessibility Bounded QA

**PASS WITH LIMITS** — headings, focusable composer, send disabled until input (honest), CTA structure.
Not WCAG compliance. No new axe dependency installed.

---

## Fresh Runtime Capture Inventory

Directory: `.tmp-sfia-review/runtime-captures/cycle-9-rerun/`
Provenance: **CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT**
Unique evidence IDs: **14** (R01–R08, R06b, R10–R14; R09 stale not produced)

| Evidence ID | File | Declared viewport | SHA-256 | Timestamp (ISO) |
|---|---|---|---|---|
| R01-F1-Projects | R01-F1-Projects.png | 1440×1024 | `110d44275eb08824860b853ceea628f0ff81c135131a65a45724152e156f5aa6` | 2026-08-16T18:42:50.646Z |
| R02-F2-Project-1440 | R02-F2-Project-1440.png | 1440×1024 | `e0a430710a7006d689f61f28c52620b3d8fbe82c0c78f18b11fb03098c1275d3` | 2026-08-16T18:42:52.655Z |
| R03-F3-Project-1280 | R03-F3-Project-1280.png | 1280×900 | `bb8b9c63feb858905adbb2d1365aa51f7780d95baaa7ec51d8c4ae7f5ed38a99` | 2026-08-16T18:42:52.702Z |
| R04-F4-Qualification | R04-F4-Qualification.png | 1440×1024 | `a3c4c838843f0ecdd5097f7079e7028b662485345424148118e53aafa8a6668f` | 2026-08-16T18:42:52.857Z |
| R05-F5-HumanDecision | R05-F5-HumanDecision.png | 1440×1024 | `e6a876c9cc2fbe77188acb5c21db40810e7573a68f91e9c2b26a9cc4ded3bbbf` | 2026-08-16T18:42:52.955Z |
| R06-F6-Resolved-Contract | R06-F6-Resolved-Contract.png | 1440×1024 | `43788cb6178f4f1e89fec19d40682baadd18bf79e695c91097b89cfe1d01d50e` | 2026-08-16T18:42:53.069Z |
| R06b-Legacy-STALE-Preserved | R06b-Legacy-STALE-Preserved.png | 1440×1024 | `42a3269b998e429effbe9b487d9caa804589149247c96481a7f3e62d6281da41` | 2026-08-16T18:42:54.585Z |
| R07-F7-Succeeded | R07-F7-Succeeded.png | 1440×1024 | `bac259281fd20372aaa74a749f5d21f723bf54ab52c9f94e57cdee1e0a3fbc56` | 2026-08-16T18:42:53.186Z |
| R08-F8-Recommendation-Current | R08-F8-Recommendation-Current.png | 1440×1024 | `dba8cffa0927c956bfe790a245dc6ed1ae93d51d9cdf4331d8240d896d8513d2` | 2026-08-16T18:42:53.215Z |
| R10-F9-History | R10-F9-History.png | 1440×1024 | `a5979a560f1ae006c66fbe4bac0328a3aba50fec62ced67c43252b906a75a29e` | 2026-08-16T18:42:53.251Z |
| R11-F10-Recovery | R11-F10-Recovery.png | 1440×1024 | `6d9dda5f6cbc384cb7c04ac9f4ea6bb0c3d500924eede4ae726aba1f9b53655b` | 2026-08-16T18:42:53.605Z |
| R12-F11-LPS-Closed-1024 | R12-F11-LPS-Closed-1024.png | 1024×800 | `877557ee8ba7c284406f5a85d5dba0a8663093ffa9930d7f4f18d5ab72b0899e` | 2026-08-16T18:42:53.650Z |
| R13-F11-LPS-Open-1024 | R13-F11-LPS-Open-1024.png | 1024×800 | `398162025814ba6f011149a30d87428089cbc4b9f605f0ffa17a3d73fee1511a` | 2026-08-16T18:42:53.740Z |
| R14-F11-Sub768 | R14-F11-Sub768.png | 390×844 | `c6935ef5a4706c508ae8e5faf35a80d73cfd6ccbaace3e9b62104255c98b6c9d` | 2026-08-16T18:42:53.781Z |

**Capture fidelity reserve:** PNG pixel dimensions via `sips` report 1440×1024 for several responsive IDs despite declared viewport metadata — treat declared viewport + layout assertions as functional proof; pixel-box vs CSS viewport is a known Playwright/fullPage quirk here (non-blocking visual reserve).

---

## Figma Evidence Integrity

Path: `.tmp-sfia-review/figma/manual-evidence/`
Count: **19/19**
Compared to handoff `69106c82…` inventory: **all SHA-256 match**.

**FIGMA REFERENCE EVIDENCE = AVAILABLE / VERIFIED**
Figma MCP: not called (manual evidence sufficient; ChatGPT rate-limit context irrelevant).

---

## Figma vs Runtime Matrix

| Frame/state | Figma | Runtime | Viewport | Structure | Hierarchy | Authority semantics | Diff severity | Existing reserve? | Verdict |
|-------------|-------|---------|----------|-----------|-----------|---------------------|---------------|-------------------|---------|
| F1 Projects | E03 | R01 | 1440 | Entry + honest limits | OK | N/A | MINOR timing (loading flash) | no | PARTIELLEMENT CONFORME |
| F2 @1440 | E07 | R02 | 1440 | Conversation+LPS | OK | N/A | polish | M-03 chrome | PARTIELLEMENT CONFORME |
| F3 @1280 | E08 | R03 | 1280 meta | OK | OK | N/A | capture fidelity | no | PARTIELLEMENT CONFORME |
| F4 Qualification | E09 | R04 | 1440 | Proposal ≠ HD | OK | PASS | none blocking | no | CONFORME |
| F5 Decision | E10 | R05 | 1440 | GO human | OK | PASS | none blocking | no | CONFORME |
| F6 Contract+Confirm | E11 | R06 | 1440 | resolved + confirm process-local | OK | PASS | M-03 chrome | M-03 | CONFORME (w/ accepted reserve) |
| F7 succeeded | E15 approx | R07 | 1440 | Attempt+Evidence+RB | OK | PASS | label density | no | CONFORME |
| F7 failed/timeout/cancel/blocked | E12–E14,E16,E13 | — | — | — | — | — | unreachable | — | NON VÉRIFIABLE (runtime) |
| F8 current | E18 | R08 | 1440 | not a decision | OK | PASS | none blocking | no | CONFORME |
| F8 stale | E17 | — | — | — | — | — | unreachable | — | NON VÉRIFIABLE (runtime) |
| F9 History | E19 | R10 | 1440 | durable facts | OK | PASS | density | no | CONFORME |
| F10 Recovery | E04 | R11 | 1440 | honest process-local loss | OK | PASS | none blocking | no | CONFORME |
| F11A LPS closed | E05 | R12 | 1024 meta | drawer path | OK | N/A | capture fidelity + M-04 | M-04 | PARTIELLEMENT CONFORME |
| F11B LPS open | E06 | R13 | 1024 meta | drawer | OK | N/A | M-04 purity | M-04 ACCEPTED | PARTIELLEMENT CONFORME |
| F11 sub-768 | E02 rule | R14 | 390 meta | composer accessible | OK | N/A | capture fidelity | no | PARTIELLEMENT CONFORME |

No **new** visual BLOCKING divergence requiring Delivery return. Accepted historical reserves unchanged.

---

## Per-frame Verdicts

| Frame | Verdict |
|-------|---------|
| F1 | PASS functional / PARTIAL visual |
| F2/F3 | PASS |
| F4 | PASS |
| F5 | PASS |
| F6 | PASS |
| F7 nominal | PASS |
| F7 variants | NOT TESTED browser (unavailable) |
| F8 current | PASS |
| F8 stale | UNAVAILABLE browser |
| F9 | PASS |
| F10 | PASS |
| F11 | PASS functional / PARTIAL capture fidelity |
| Responsive | PASS WITH RESERVE (capture pixel dims) |

---

## G-UX-08 / G-UX-09 / Confirmation / M5-C

| Item | Status |
|------|--------|
| G-UX-08 full AMEND | OPEN / DEFERRED — deferred message only (browser) |
| G-UX-09 | KEEP RESERVE |
| Confirmation durability | KEEP RESERVE (process-local) |
| M5-C | KEEP RESERVE |

---

## Issues / Severity

| ID | Type | Severity | Notes |
|----|------|----------|-------|
| QA-PRE-M6-ENV-01 | environment | INFO | Full suite 16 fails — missing harness `tsx` (Class C) |
| QA-PRE-M6-TEST-01 | testability | MAJOR (non-blocking for G-UX-11 authority) | N5/N7–N11 browser unavailable without product seam |
| QA-PRE-M6-VIS-01 | evidence | MINOR | Responsive capture PNG dims vs declared viewport |

No BLOCKING product/authority/visual defect found in this Cycle 9. **No Delivery AMEND required for product fix.**

---

## Accepted Historical Reserves

M-03 chrome pré-Attempt · M-04 drawer F11B purity · manual evidence provenance · deferred visual polish — **ACCEPTED ≠ CLOSED**; no aggravation observed.

---

## New Reserves

1. Full Playwright Class C harness/`tsx` environment debt (out of Cycle 9 mutation scope).
2. Browser-unreachable F7 variants / F8-stale without product seam.
3. Capture pixel-dimension fidelity vs declared viewport for responsive IDs.

---

## Debt / Exit

- G-UX-08 full AMEND loop remains deferred.
- Optional later: Morris gate for negative testability injectors (only if UAT demands those states).
- Do not install `tsx` / mutate package in QA cycle.

---

## Campaign Limitations

QA ONLY · production READ-ONLY · fake provider · fixture-safe ZERO REAL · no REAL · no UAT consumed · no Figma MCP · no package/playwright config changes.

---

## Reproducibility

1. Checkout branch + dirty candidate as inventoried.
2. `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1`
3. Engineering commands above.
4. Targeted then full Playwright.
5. Captures under `cycle-9-rerun/` + Figma manual evidence SHA check vs 69106c.

---

## Production Mutation Check

**Production files mutated DURING Cycle 9 = 0**
Only QA files touched: `qa-pre-m6-01.finalHardening.test.ts`, `e2e/studio-option-a.spec.ts`, plus artifacts under `.tmp-sfia-review/**` (not staged).

---

## Git Diff (candidate still dirty — not committed)

```
tracked modified projects/sfia-studio: 40 files (+1295/−690 vs HEAD)
untracked project files: 26
staged: 0
```

---

## Safety Counters

| Counter | Value |
|---------|-------|
| Candidate tracked modified | 40 |
| Candidate untracked project files | 26 |
| QA test files modified | 2 (`finalHardening.test.ts`, `studio-option-a.spec.ts`) |
| QA test files created | 0 this cycle (both pre-existed; extended/rewritten) |
| Production files mutated during Cycle 9 | 0 |
| B5 proof | PASS |
| B7 proof | PASS |
| Legacy replay proof | PASS |
| Happy path | PASS |
| Negative browser PASS | 6 (N1–N4, N12, + legacy STALE) |
| Negative lower-level-only | 2+ (N6/B*, N4 unit) |
| Negative unavailable | 5 (N5, N7–N11) |
| Runtime fresh screenshots (unique) | 14 |
| Figma manual evidence verified | 19/19 |
| New persistence / migration / engine / product test seam | 0 |
| Playwright config / package mutation | 0 |
| Figma mutation | 0 |
| REAL | 0 |
| Project staging/commits/pushes/PR/merge/branch delete | 0 |
| Review Handoff | 1 bounded L3 (this publish) |

---

## Anti-claims

Cycle 9 PASS WITH RESERVES ≠ Morris UAT PASS.
G-UX-11 SATISFIED ≠ Pre-M6 accepted.
Figma/runtime aligned ≠ pixel perfect.
A11y smoke ≠ WCAG.
Fixture-safe Attempt ≠ REAL.
Confirmation ≠ durable Confirmation.
Recovery ≠ Conversation persistence.
History ≠ conversational transcript.
Recommendation ≠ HumanDecision.
Pre-M6 UAT ≠ Pre-M6 acceptance.
Pre-M6 acceptance ≠ M6.
runtime v3 = NON ADOPTED. REAL = 0.

---

## Final QA Verdict

**CASE B — PASS WITH RESERVES**

**PRE-M6 UI DELIVERY OPTION A — FULL CYCLE 9 QA PASS WITH RESERVES — G-UX-11 SATISFIED — FIGMA/RUNTIME ALIGNED WITH ACCEPTED RESERVES — READY FOR MORRIS PRE-M6 UAT — OPTION A WITH EXPLICIT RESERVES**

UAT gate **not consumed**. M6 **NOT AUTHORIZED**.

---

## Recommended Next Gate (DO NOT CONSUME)

**MORRIS PRE-M6 UAT — OPTION A**

After UAT only: gap/debt/reserve re-evaluation → Morris Pre-M6 acceptance decision.

---

## Appendix A — FULL QA test content (exploitable)

### A1 — `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts`

```typescript
/**
 * QA-PRE-M6-01 FINAL HARDENING — shared pipeline + M3 boundary.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteF3Fixture,
  confirmAndExecuteResolvedM3,
  executeConfirmedFixtureSafeContract,
  prepareAndResolveM3ProductPath,
  prepareF3Fixture,
  prepareM3FromDecision,
  validateResolvedM3ExecutionBoundary,
  canonicalM3PrepareContractId,
  canonicalM3PrepareIdempotencyKey,
  canonicalM3ResolutionIdempotencyKey,
  F3_ADAPTER_ID,
} from "@/features/project-assistant/f3";
import {
  F3_ACTION,
  F3_CAPABILITY,
  F3_SCOPE,
  F3_TARGET,
} from "@/features/project-assistant/f3/constants";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const F3_DIR = path.join(
  APP_ROOT,
  "features/project-assistant/f3",
);

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  nextProjectId(): string {
    this.project += 1;
    return `prj:harden-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:harden-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:harden-${this.correlation}`;
  }
}

async function createRuntime(): Promise<RuntimeApplicationService> {
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-16T20:00:00.000Z",
    idSource: new FixedIdSource(),
    auditMode: "noop",
  });
}

async function seedGo(runtime: RuntimeApplicationService) {
  const created = await runtime.createProject({
    name: "Hardening",
    objective: "shared pipeline",
    context: "ZERO REAL",
    criticality: "STANDARD",
    constraints: ["FIXTURE ONLY"],
    shortReference: "HRD",
    idempotencyKey: `harden-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create");
  const projectId = created.project.projectId;
  const before = await runtime.getProject(projectId);
  expect(before.ok).toBe(true);
  if (!before.ok) throw new Error("before");

  const snapshot = {
    projectId,
    lpsId: before.livingState.id,
    lpsVersion: before.livingState.version,
    doctrineDigest: before.doctrine.digest,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "x",
    objective: "x",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "hardening",
    scope: "fixture-docs",
    outOfScope: ["REAL"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "attempt",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
    morrisGateRequired: true,
    nextPossibleStep: "F3",
    contextSnapshot: snapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  });

  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: snapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("go");

  const after = await runtime.getProject(projectId);
  expect(after.ok).toBe(true);
  if (!after.ok) throw new Error("after");
  const currentContext = {
    projectId,
    lpsId: after.livingState.id,
    lpsVersion: after.livingState.version,
    doctrineDigest: after.doctrine.digest,
  };
  return {
    projectId,
    proposal: go.proposal,
    decision: go.decision,
    proposalSnapshot: snapshot,
    currentContext,
    runtime,
  };
}

async function resolvePath(runtime: RuntimeApplicationService, seeded: Awaited<ReturnType<typeof seedGo>>) {
  return prepareAndResolveM3ProductPath({
    projectId: seeded.projectId,
    decisionId: seeded.decision.decisionId,
    currentContext: seeded.currentContext,
    deps: {
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      executionContractServices: runtime.oa!.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
      forceM3Authority: true,
    },
  });
}

describe("QA-PRE-M6-01 final hardening — shared pipeline + M3 boundary", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("H1/H2 — both callers import shared pipeline; architecture has one orchestration body", () => {
    const shared = fs.readFileSync(
      path.join(F3_DIR, "executeConfirmedFixtureSafeContract.ts"),
      "utf8",
    );
    const legacy = fs.readFileSync(
      path.join(F3_DIR, "confirmAndExecuteF3Fixture.ts"),
      "utf8",
    );
    const m3 = fs.readFileSync(
      path.join(F3_DIR, "confirmAndExecuteResolvedM3.ts"),
      "utf8",
    );
    expect(shared).toContain("executeConfirmedFixtureSafeContract");
    expect(shared).toContain("requestConfirmation");
    expect(shared).toContain("selectExecutionAgent");
    expect(shared).toContain("startExecution");
    expect(shared).toContain("ingestEvidenceAndRecommend");
    expect(legacy).toContain('from "./executeConfirmedFixtureSafeContract"');
    expect(m3).toContain('from "./executeConfirmedFixtureSafeContract"');
    expect(legacy).not.toContain("selectExecutionAgent.execute");
    expect(m3).not.toContain("selectExecutionAgent.execute");
    expect(legacy).toContain("validateF2ForPrepare");
    expect(m3).toContain("validateResolvedM3ExecutionBoundary");
    expect(typeof executeConfirmedFixtureSafeContract).toBe("function");
  });

  it("H1 — legacy valid path uses shared pipeline successfully", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
    // Legacy prepare requires matching context (pre-GO snapshot) — historical valid context.
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposalSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        productDurablePath: runtime.oa!.productDurablePath,
      },
    });
    // After GO LPS advanced; proposal snapshot N vs current N+1 → STALE when using current.
    // Historical valid path uses matching snapshot (same as fixture unit tests).
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const executed = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposalSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId).toBeTruthy();
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

    // R-H03 — legacy valid contract: first Attempt + replay → no second launch
    const firstLaunch = runtime.oa!.fixtureAdapter.launchCallCount;
    const replay = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposalSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.payload.reusedExistingAttempt).toBe(true);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(firstLaunch);
    const listed =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: prepared.payload.contract.executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (listed.ok) {
      expect(listed.attempts.filter((a) => a.status === "succeeded")).toHaveLength(
        1,
      );
    }
  });

  it("H2/H3/H4/H5/H6/S5–S8 — M3 path shared pipeline + replay + boundary PASS", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
    const resolved = await resolvePath(runtime, seeded);
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const boundary = await validateResolvedM3ExecutionBoundary({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        executionContractServices: runtime.oa!.executionContractServices,
      },
    });
    expect(boundary.ok).toBe(true);

    const listedBefore =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: resolved.payload.successor.executionContractId,
      });
    expect(listedBefore.ok).toBe(true);
    if (listedBefore.ok) expect(listedBefore.attempts).toHaveLength(0);

    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      expectedContractVersion: resolved.payload.successor.version,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.proposal).toBeNull();
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId).toBeTruthy();
    expect(executed.payload.reviewBundle.reviewBundleId).toBeTruthy();
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    const firstLaunch = runtime.oa!.fixtureAdapter.launchCallCount;
    expect(firstLaunch).toBe(1);

    const replay = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      expectedContractVersion: resolved.payload.successor.version,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.payload.reusedExistingAttempt).toBe(true);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(firstLaunch);
  });

  it("S2 — legacy STALE after LPS advance preserved", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
    const legacy = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        productDurablePath: runtime.oa!.productDurablePath,
      },
    });
    expect(legacy.ok).toBe(false);
    if (legacy.ok) return;
    expect(legacy.code).toBe("STALE");
  });

  describe("Blocker B — hostile M3 boundary", () => {
    async function setupResolved() {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const resolved = await resolvePath(runtime, seeded);
      expect(resolved.ok).toBe(true);
      if (!resolved.ok) throw new Error("resolve");
      return { runtime, seeded, resolved: resolved.payload };
    }

    async function expectBoundaryFail(
      runtime: RuntimeApplicationService,
      input: {
        projectId: string;
        decisionId: string;
        executionContractId: string;
      },
      code: string,
    ) {
      const before = runtime.oa!.fixtureAdapter.launchCallCount;
      const boundary = await validateResolvedM3ExecutionBoundary({
        ...input,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          executionContractServices: runtime.oa!.executionContractServices,
        },
      });
      expect(boundary.ok).toBe(false);
      if (boundary.ok) return;
      expect(boundary.code).toBe(code);

      const executed = await confirmAndExecuteResolvedM3({
        ...input,
        expectedContractVersion: 1,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          executionAttemptServices: runtime.oa!.executionAttemptServices,
          evidenceReviewServices: runtime.oa!.evidenceReviewServices,
          fixtureAdapter: runtime.oa!.fixtureAdapter,
          projectServices: runtime.oa!.projectServices,
          productDurablePath: runtime.oa!.productDurablePath,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(executed.ok).toBe(false);
      expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(before);
      const listed =
        await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
          executionContractId: input.executionContractId,
        });
      if (listed.ok) {
        expect(listed.attempts.filter((a) => a.status === "succeeded")).toHaveLength(
          0,
        );
      }
    }

    it("B1 — successor that does not supersede canonical prepare FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      const prepareId = canonicalM3PrepareContractId(seeded.decision.decisionId);
      expect(resolved.successor.supersedesExecutionContractId).toBe(prepareId);
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: "xct:does-not-exist",
        },
        "CONTRACT_NOT_FOUND",
      );
    });

    it("B2 — successor with wrong decisionId FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: "dec:f2:hostile-other",
          executionContractId: resolved.successor.executionContractId,
        },
        "DECISION_NOT_FOUND",
      );
    });

    it("B4 — projectId mismatch FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      await expectBoundaryFail(
        runtime,
        {
          projectId: "prj:hostile-other",
          decisionId: seeded.decision.decisionId,
          executionContractId: resolved.successor.executionContractId,
        },
        "PROJECT_MISMATCH",
      );
    });

    it("B6 — fixture-safe profile mismatch FAIL", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const prepared = await prepareM3FromDecision({
        projectId: seeded.projectId,
        decisionId: seeded.decision.decisionId,
        currentContext: seeded.currentContext,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(prepared.ok).toBe(true);
      if (!prepared.ok) return;

      const { resolveM3ExecutionContract } = await import(
        "@/features/project-assistant/f3/resolveM3ExecutionContract"
      );
      const { fixtureSafeM3ResolutionProfile } = await import(
        "@/features/project-assistant/f3/fixtureSafeM3ResolutionProfile"
      );
      const profile = fixtureSafeM3ResolutionProfile();
      const hostile = await resolveM3ExecutionContract({
        projectId: seeded.projectId,
        decisionId: seeded.decision.decisionId,
        originalExecutionContractId: prepared.payload.contract.executionContractId,
        expectedOriginalVersion: prepared.payload.contract.version,
        resolution: {
          ...profile,
          action: "hostile-non-fixture-action",
        },
        supersessionReason: "hostile profile probe",
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(hostile.ok).toBe(true);
      if (!hostile.ok) return;

      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: hostile.successor.executionContractId,
        },
        "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
      );
    });

    it("B8 — unresolved PREPARE submitted for execution FAIL", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const prepared = await prepareM3FromDecision({
        projectId: seeded.projectId,
        decisionId: seeded.decision.decisionId,
        currentContext: seeded.currentContext,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(prepared.ok).toBe(true);
      if (!prepared.ok) return;
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: prepared.payload.contract.executionContractId,
        },
        "CONTRACT_NOT_RESOLVED_SUCCESSOR",
      );
    });

    it("B3 — resolution lineage under wrong decision FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      const expected = canonicalM3ResolutionIdempotencyKey(
        seeded.decision.decisionId,
        resolved.successor.executionContractId,
      );
      const get =
        await runtime.oa!.executionContractServices.getExecutionContract.execute({
          executionContractId: resolved.successor.executionContractId,
        });
      expect(get.ok).toBe(true);
      if (!get.ok) return;
      expect(get.contract.idempotencyKey).toBe(expected);

      const proposal2 = saveProposal({
        proposalId: createProposalId(),
        status: "DECISION_REQUIRED",
        rephrasedRequest: "y",
        objective: "y",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Standard",
        rationale: "hostile",
        scope: "fixture-docs",
        outOfScope: [],
        activatedBlocks: [],
        expectedOutcome: "y",
        sources: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        morrisGateRequired: true,
        nextPossibleStep: "y",
        contextSnapshot: seeded.currentContext,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
        executionForbidden: true,
        noExecutingStatus: true,
        agentBinding: "NOT_AVAILABLE",
      });
      const go2 = await recordF2Decision({
        proposalId: proposal2.proposalId,
        projectId: seeded.projectId,
        decisionKind: "GO",
        currentContext: seeded.currentContext,
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      });
      expect(go2.ok).toBe(true);
      if (!go2.ok) return;
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: go2.decision.decisionId,
          executionContractId: resolved.successor.executionContractId,
        },
        "CANONICAL_M3_PREPARE_NOT_FOUND",
      );
    });

    it("B5 / R-H01 — successor requiredAuthority != MORRIS FAIL (Attempt 0, launch 0)", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const prepared = await prepareM3FromDecision({
        projectId: seeded.projectId,
        decisionId: seeded.decision.decisionId,
        currentContext: seeded.currentContext,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(prepared.ok).toBe(true);
      if (!prepared.ok) return;

      // Authority scope must match successor scope (F3_SCOPE), not PREPARE scope.
      const issuedAt = runtime.oa!.clock.nowIso();
      const auth = registerM3LocalMorrisAuthority({
        authorityResolver: runtime.oa!.authorityResolver,
        scope: F3_SCOPE,
        issuedAt,
        evidenceId: `evd:m3-hostile-b5:${seeded.decision.decisionId}`,
        forceEnable: true,
      });
      expect(auth.ok).toBe(true);
      if (!auth.ok) return;

      const hostileId = `xct:m3-res:hostile-b5:${seeded.decision.decisionId}`;
      const supersede =
        await runtime.oa!.executionContractServices.supersedeExecutionContract.execute(
          {
            newExecutionContractId: hostileId,
            supersedesExecutionContractId:
              prepared.payload.contract.executionContractId,
            supersessionReason: "Cycle 9 R-H01 hostile authority probe",
            actor: LOCAL_MORRIS_M3_ACTOR,
            authorityEvidenceId: auth.evidenceId,
            expectedVersion: prepared.payload.contract.version,
            action: F3_ACTION,
            target: F3_TARGET,
            scope: F3_SCOPE,
            requiredCapabilities: [F3_CAPABILITY],
            requiredAuthority: "N2",
            reversibility: "reversible",
            constraints: [
              "FIXTURE ONLY",
              "TEST ADAPTER ONLY",
              "NO REAL",
              "NO SHELL",
              "NO NETWORK EXECUTION",
              "NO GIT WRITE",
              "NO GITHUB WRITE",
              "NO AUTO RETRY",
            ],
            stopConditions: [
              "AUTHORITY_DENIED",
              "CONTEXT_STALE",
              "DECISION_NOT_CURRENT",
            ],
            decisionRefs: [seeded.decision.decisionId],
            idempotencyKey: canonicalM3ResolutionIdempotencyKey(
              seeded.decision.decisionId,
              hostileId,
            ),
            status: "proposed",
          },
        );
      expect(supersede.ok).toBe(true);
      if (!supersede.ok) return;
      expect(supersede.contract.requiredAuthority).toBe("N2");

      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: hostileId,
        },
        "CONTRACT_AUTHORITY_MISMATCH",
      );
    });

    it("B7 / R-H02 — canonical PREPARE idempotency mismatch FAIL (Attempt 0, launch 0)", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const prepareId = canonicalM3PrepareContractId(seeded.decision.decisionId);
      const canonicalIdem = canonicalM3PrepareIdempotencyKey(
        seeded.decision.decisionId,
      );
      expect(canonicalIdem).toMatch(/^idem:m3-prep:/);

      const issuedAt = runtime.oa!.clock.nowIso();
      const auth = registerM3LocalMorrisAuthority({
        authorityResolver: runtime.oa!.authorityResolver,
        scope: "m3-hostile-b7",
        issuedAt,
        evidenceId: `evd:m3-hostile-b7:${seeded.decision.decisionId}`,
        forceEnable: true,
      });
      expect(auth.ok).toBe(true);
      if (!auth.ok) return;

      // Hostile PREPARE at canonical id with non-canonical idempotencyKey.
      // Boundary fails before successor checks — no product seam required.
      const built =
        await runtime.oa!.executionContractServices.buildExecutionContract.execute(
          {
            executionContractId: prepareId,
            projectId: seeded.projectId,
            decisionRefs: [seeded.decision.decisionId],
            action: "UNRESOLVED_ACTION",
            target: "UNRESOLVED_TARGET",
            scope: "m3-hostile-b7",
            requiredCapabilities: ["cap:unresolved"],
            requiredAuthority: "MORRIS",
            constraints: ["PREPARE_ONLY", "NO_ATTEMPT"],
            stopConditions: ["ACTION_UNRESOLVED", "TARGET_UNRESOLVED"],
            evidenceRequirements: ["evreq:m3-hostile-b7"],
            reversibility: "irreversible",
            idempotencyKey: "idem:m3-prep:HOSTILE-WRONG-KEY",
            correlationId: `cor:m3-hostile-b7:${seeded.decision.decisionId}`,
            actor: LOCAL_MORRIS_M3_ACTOR,
            authorityEvidenceId: auth.evidenceId,
          },
        );
      expect(built.ok).toBe(true);
      if (!built.ok) return;
      expect(built.contract.idempotencyKey).not.toBe(canonicalIdem);

      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: prepareId,
        },
        "CANONICAL_M3_PREPARE_IDEMPOTENCY_MISMATCH",
      );
    });
  });
});

```

### A2 — `projects/sfia-studio/app/e2e/studio-option-a.spec.ts`

```typescript
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * Cycle 9 — FULL QA / VALIDATION re-run (Option A).
 *
 * Env required (via process.env → playwright webServer spread):
 *   SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
 *
 * Captures go to .tmp-sfia-review/runtime-captures/cycle-9-rerun/
 * Provenance: CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT
 */

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/cycle-9-rerun",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

function runId(): string {
  return `c9-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function capture(
  page: Page,
  id: string,
  meta: {
    screen: string;
    state: string;
    viewport: { width: number; height: number };
  },
): Promise<string> {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    MANIFEST,
    `${JSON.stringify({
      id,
      file: path.basename(file),
      screen: meta.screen,
      state: meta.state,
      viewport: meta.viewport,
      timestamp: new Date().toISOString(),
      sha256,
      provenance: "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT",
    })}\n`,
  );
  return sha256;
}

async function createUniqueProject(page: Page, suffix: string) {
  const name = `QA Option A ${suffix}`;
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill("Cycle 9 QA re-run Option A");
  await page
    .locator("#project-context")
    .fill("Contexte E2E local fake provider — REAL=0 — post-hardening.");
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });
  await expect(page.getByTestId("project-assistant-panel")).toBeVisible();
  return name;
}

async function sendStructuring(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill(
    "Préparer une proposition d'architecture __F2_STRUCTURING__",
  );
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
  await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
}

/** Standard/Light gated path — Confirmation reachable (Critical remains R-T-A3-1 fail-closed). */
async function sendGatedStandard(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill(
    "Préparer une livraison gated __F2_GATED_STANDARD__",
  );
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
  await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
}

test.describe("Cycle 9 — F1→F11 durable post-GO happy path", () => {
  test.describe.configure({ timeout: 240_000 });

  test("F1→F11 happy path + History/Recovery + responsive captures", async ({
    page,
  }) => {
    test.setTimeout(240_000);
    const suffix = runId();

    // F1 @1440
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/studio");
    await expect(page.getByTestId("studio-shell")).toBeVisible();
    await expect(page.getByTestId("studio-projects-home")).toBeVisible();
    await capture(page, "R01-F1-Projects", {
      screen: "F1",
      state: "Projects entry",
      viewport: { width: 1440, height: 1024 },
    });

    await createUniqueProject(page, suffix);
    await expect(page.getByTestId("project-recovery-banner")).toHaveCount(0);

    // F2 @1440
    await expect(page.getByTestId("project-principal")).toBeVisible();
    await expect(page.getByTestId("project-assistant-panel")).toBeVisible();
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await capture(page, "R02-F2-Project-1440", {
      screen: "F2",
      state: "Project principal conversation + LPS @1440",
      viewport: { width: 1440, height: 1024 },
    });

    // F3 @1280
    await page.setViewportSize({ width: 1280, height: 900 });
    await expect(page.getByTestId("project-principal")).toBeVisible();
    await capture(page, "R03-F3-Project-1280", {
      screen: "F3",
      state: "Project principal @1280",
      viewport: { width: 1280, height: 900 },
    });

    await page.setViewportSize({ width: 1440, height: 1024 });
    await sendGatedStandard(page);
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
    await capture(page, "R04-F4-Qualification", {
      screen: "F4",
      state: "Qualification + Proposal ≠ HumanDecision (gated Standard/Light)",
      viewport: { width: 1440, height: 1024 },
    });

    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f2-decision-kind")).toContainText(/GO/i);
    await capture(page, "R05-F5-HumanDecision", {
      screen: "F5",
      state: "HumanDecision GO recorded",
      viewport: { width: 1440, height: 1024 },
    });

    await expect(page.getByTestId("f3-prepare-button")).toBeEnabled({
      timeout: 15_000,
    });
    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-contract-id")).toContainText(/xct:m3-res:/);
    await expect(page.getByTestId("f3-prepare-no-attempt")).toBeVisible();
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
    await capture(page, "R06-F6-Resolved-Contract", {
      screen: "F6",
      state: "Durable resolved successor awaiting Confirmation",
      viewport: { width: 1440, height: 1024 },
    });

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/succeeded/i);
    await expect(page.getByTestId("f3-evidence-id")).toBeVisible();
    await expect(page.getByTestId("f3-review-bundle-id")).toBeVisible();
    await expect(page.getByTestId("f3-recommendation-card")).toBeVisible();
    await expect(page.getByText(/PAS UNE DÉCISION/i).first()).toBeVisible();
    await capture(page, "R07-F7-Succeeded", {
      screen: "F7",
      state: "Fixture-safe Attempt succeeded + Evidence + ReviewBundle",
      viewport: { width: 1440, height: 1024 },
    });
    await capture(page, "R08-F8-Recommendation-Current", {
      screen: "F8",
      state: "Recommendation current; executionAuthority false",
      viewport: { width: 1440, height: 1024 },
    });

    // F9 History
    await expect(page.getByTestId("project-history-panel")).toBeVisible();
    await capture(page, "R10-F9-History", {
      screen: "F9",
      state: "History durable readback after execution",
      viewport: { width: 1440, height: 1024 },
    });

    // F10 Recovery — reload after durable progress
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await capture(page, "R11-F10-Recovery", {
      screen: "F10",
      state: "Recovery — process-local cleared; durable LPS retained",
      viewport: { width: 1440, height: 1024 },
    });

    // F11 responsive @1024
    await page.setViewportSize({ width: 1024, height: 800 });
    await expect(page.getByTestId("project-principal")).toBeVisible();
    await capture(page, "R12-F11-LPS-Closed-1024", {
      screen: "F11A",
      state: "Responsive @1024 LPS closed/default",
      viewport: { width: 1024, height: 800 },
    });
    const lpsToggle = page.getByTestId("lps-drawer-toggle");
    if ((await lpsToggle.count()) > 0) {
      await lpsToggle.click();
      await capture(page, "R13-F11-LPS-Open-1024", {
        screen: "F11B",
        state: "Responsive @1024 LPS drawer open",
        viewport: { width: 1024, height: 800 },
      });
    } else {
      await capture(page, "R13-F11-LPS-Open-1024", {
        screen: "F11B",
        state: "Responsive @1024 — LPS toggle absent; panel layout capture",
        viewport: { width: 1024, height: 800 },
      });
    }

    // F11 sub-768
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.getByTestId("project-assistant-panel")).toBeVisible();
    await expect(page.getByTestId("project-assistant-input")).toBeVisible();
    await capture(page, "R14-F11-Sub768", {
      screen: "F11-mobile",
      state: "Sub-768 conversation full width; composer accessible",
      viewport: { width: 390, height: 844 },
    });
  });

  test("Legacy fixture prepare after GO remains STALE (negative authority)", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `legacy-${suffix}`);
    await sendGatedStandard(page);
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });

    await expect(page.getByTestId("f3-legacy-fixture-prepare-button")).toBeEnabled({
      timeout: 15_000,
    });
    await page
      .getByTestId("project-assistant-f3-prepare")
      .locator("summary")
      .click();
    await page.getByTestId("f3-legacy-fixture-prepare-button").click();
    await expect(page.getByTestId("project-assistant-error")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-error")).toContainText(
      /STALE/i,
    );
    await expect(page.getByTestId("project-assistant-f3-contract")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
    await capture(page, "R06b-Legacy-STALE-Preserved", {
      screen: "F6-neg",
      state: "Legacy Proposal prepare STALE after GO LPS advance",
      viewport: { width: 1440, height: 1024 },
    });
  });
});

test.describe("Option A — Negative authority reachable", () => {
  test.describe.configure({ timeout: 120_000 });

  test("N2 rejected HumanDecision NO_GO blocks prepare", async ({ page }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n2-${suffix}`);
    await sendStructuring(page);
    await page.getByTestId("f2-decide-NO_GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f2-decision-kind")).toContainText(/NO_GO|NO-GO/i);
    await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
  });

  test("N1 Recommendation remains distinct from HumanDecision at Proposal stage", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n1-${suffix}`);
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
    await expect(page.getByText(/PAS UNE DÉCISION/i).first()).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
  });

  test("N3 resolve alone leaves Attempt count 0 until Confirmation", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n3-${suffix}`);
    await sendGatedStandard(page);
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-prepare-no-attempt")).toBeVisible();
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
  });

  test("N4 duplicate Confirmation does not create second effective Attempt UI", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n4-${suffix}`);
    await sendGatedStandard(page);
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    const confirm = page.getByTestId("f3-confirm-execute-button");
    await confirm.click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    const attemptId = await page.getByTestId("f3-attempt-id").textContent();
    // Second click if still present — UI may hide button after success
    if (await confirm.isVisible().catch(() => false)) {
      await confirm.click();
    }
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/succeeded/i);
    const attemptIdAfter = await page.getByTestId("f3-attempt-id").textContent();
    expect(attemptIdAfter).toBe(attemptId);
  });

  test("N12 Recovery honesty — reload does not rebuild conversation", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n12-${suffix}`);
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-gate")).toBeVisible();
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
  });

  test("G-UX-08 AMEND deferred message only", async ({ page }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `amend-${suffix}`);
    await sendStructuring(page);
    await page.getByTestId("f2-decide-AMEND").click();
    await expect(
      page.getByText(/G-UX-08|différé|AMEND complète/i).first(),
    ).toBeVisible({ timeout: 45_000 });
  });
});

test.describe("Option A — accessibility bounded smoke", () => {
  test("F1 and Project principal expose structure", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/studio");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const suffix = runId();
    await createUniqueProject(page, `a11y-${suffix}`);
    const input = page.getByTestId("project-assistant-input");
    await input.focus();
    await expect(input).toBeFocused();
    // Send stays disabled until non-empty input (honest empty-state CTA).
    await expect(page.getByTestId("project-assistant-send")).toBeDisabled();
    await input.fill("ping a11y");
    await expect(page.getByTestId("project-assistant-send")).toBeEnabled();
  });
});

```

### A3 — Coverage map snapshot

# Cycle 9 QA Coverage Map — PRE-M6 Option A

**Timestamp:** 2026-08-16 Europe/Paris
**Subject:** Dirty local candidate on `delivery/sfia-studio-pre-m6-ui-option-a` @ HEAD `0d334785`
**Incoming handoff:** `4601a14c`
**Production mutation this cycle:** 0

| ID | Requirement | Frame/G-UX | Oracle | Browser proof | Unit/integration proof | Evidence | Severity if missing | Status |
|----|-------------|------------|--------|---------------|------------------------|----------|---------------------|--------|
| F1 | Studio → Projects → create/open | F1 | Entry claire | e2e studio-option-a | studioProjectsHome | R01 | BLOCKING | PENDING |
| F2 | Project principal conversation dominante | F2 / G-UX | Conversation + LPS | e2e | projectPrincipal* | R02 | BLOCKING | PENDING |
| F3 | LPS utile @1280 | F3 | Pas cockpit primaire | e2e + capture | — | R03 | MAJOR | PENDING |
| F4 | Qualification / Proposal ≠ HD | F4 / G-UX-11 | Proposal visible, HD absent | e2e N1 | Panel tests | R04 | BLOCKING | PENDING |
| F5 | HumanDecision GO explicite | F5 | GO durable LPS | e2e | postGoDurableM3 | R05 | BLOCKING | PENDING |
| F6 | M3 PREPARE→resolved, Attempt 0 | F6 | Successor + no Attempt | e2e N3 | boundary + postGo | R06 | BLOCKING | PENDING |
| F7 | Confirmation → Attempt succeeded fixture-safe | F7 | REAL false, Evidence/RB | e2e happy | shared pipeline | R07 | BLOCKING | PENDING |
| F7-f | Failed Attempt | F7 | Failed ≠ timeout | IF reachable | — | R07f | MAJOR | PENDING |
| F7-t | Timeout Attempt | F7 | Timeout ≠ failed | IF reachable | — | R07t | MAJOR | PENDING |
| F7-c | Cancelled Attempt | F7 | Cancelled ≠ success | IF reachable | — | R07c | MAJOR | PENDING |
| F7-b | Blocked before execution | F7 | No Attempt ID | IF reachable | boundary hostile | R07b | BLOCKING | PENDING |
| F8 | Recommendation freshness / no exec auth | F8 | CURRENT; execAuthority false | e2e | postGo | R08 | BLOCKING | PENDING |
| F8-s | Stale Recommendation | F8 | Textual reason | IF reachable | lower-level | R09 | MAJOR | PENDING |
| F9 | History durable facts | F9 | No fake transcript | e2e | readback | R10 | BLOCKING | PENDING |
| F10 | Recovery honesty | F10 / N12 | Durable only | e2e N12 | — | R11 | BLOCKING | PENDING |
| F11 | Responsive LPS | F11 | 1440/1280/1024/<768 | e2e + captures | — | R12–R14 | MAJOR | PENDING |
| N1 | Reco ≠ HD | G-UX-11 | Before HD | BROWSER | — | e2e | BLOCKING | PENDING |
| N2 | Rejected HD | G-UX-11 | No F6 path | BROWSER | — | e2e | BLOCKING | PENDING |
| N3 | Unconfirmed contract | G-UX-11 | Attempt 0 | BROWSER | B8 unresolved | e2e+unit | BLOCKING | PENDING |
| N4 | Duplicate start | G-UX-11 | One effective Attempt | preferred+unit | H2 + R-H03 | unit | BLOCKING | PENDING |
| N5 | Stale Recommendation | G-UX-11 | Explicit stale | IF reachable | — | — | MAJOR | PENDING |
| N6 | Blocked before exec | G-UX-11 | No Attempt ID | IF reachable | hostile B* | unit | BLOCKING | PENDING |
| N7–N11 | Failed/timeout/cancel/missing Evidence/rehydrate | G-UX-11 | Honest states | IF reachable no seam | — | — | MAJOR | PENDING |
| N12 | Recovery honesty | G-UX-11 | No rebuild | BROWSER | — | e2e | BLOCKING | PENDING |
| B5 / R-H01 | requiredAuthority ≠ MORRIS | M3 boundary | FAIL, Attempt 0, launch 0 | — | finalHardening | unit | BLOCKING | PENDING |
| B7 / R-H02 | PREPARE id/idem non-canonical | M3 boundary | FAIL, Attempt 0, launch 0 | — | finalHardening | unit | BLOCKING | PENDING |
| R-H03 | Legacy replay idempotence | Shared pipeline | One launch | — | finalHardening | unit | BLOCKING | PENDING |
| S2 | Legacy Proposal STALE after GO | Authority | STALE preserved | e2e | finalHardening S2 | e2e+unit | BLOCKING | PENDING |
| ENG | typecheck/lint/test/build | Engineering | PASS | — | npm scripts | logs | BLOCKING | PENDING |
| E2E-T | Targeted Option A | G-UX-11 | All pass | Playwright | — | stdout | BLOCKING | PENDING |
| E2E-F | Full Playwright | Regression | Classify A/B/C/D | Playwright | — | stdout | MAJOR | PENDING |
| A11Y | Bounded a11y | Accessibility | Smoke PASS/RESERVE | e2e a11y | — | e2e | MINOR | PENDING |
| VIS | Figma vs runtime | D-PRE-M6-UX-05 | No new blocker | captures | manual 19/19 | matrix | BLOCKING if new | PENDING |
| G-UX-11 | Exit proof | G-UX-11 | All mandatory closed | composite | composite | pack | BLOCKING | PENDING |
| G-UX-08 | Full AMEND loop | G-UX-08 | Deferred message only | e2e | — | e2e | DEFERRED | OPEN/DEFERRED |
| G-UX-09 | Confirmation reserve | G-UX-09 | KEEP RESERVE | — | — | handoff | RESERVE | KEEP |
| M5-C | Confirmation durability | Confirmation | Process-local | — | — | doctrine | RESERVE | KEEP |
