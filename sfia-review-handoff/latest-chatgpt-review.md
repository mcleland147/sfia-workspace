# V3-REAL-B-BLOCKER-02-CORR-02 — FULL Review Pack

## Metadata
- **Cycle ID:** V3-REAL-B-BLOCKER-02-CORR-02
- **Title:** Required Source Coverage Integrity & Pass Exhaustion Fail-Closed
- **Morris GO:** GO V3-REAL-B-BLOCKER-02-CORR-02
- **Timestamp START:** 2026-08-28T13:22:00+02:00 (Europe/Paris)
- **Timestamp END:** 2026-08-28T14:40:12+02:00 (Europe/Paris)
- **Repo root:** `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync`
- **Branch:** `fix/sfia-studio-real-b-blocker-02`
- **HEAD / origin/main:** `967f4c2b35948492caeba5347bb02c7c420de490`
- **Source handoff consumed:** `2b1cbed879c613f581df483f3e5e15b0e627c31e` (V3-REAL-B-BLOCKER-02-CORR-01) — YES
- **Remote corrective branch:** ABSENT (`git ls-remote --heads origin fix/sfia-studio-real-b-blocker-02` → empty)
- **Project commit / push / PR / merge:** NONE (authorized)

## Convergence pre-check
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED BY MORRIS
- REAL-A: COMPLETE / CONSUMED
- REAL-B: BLOCKING (F-RB-01 remediated in code — LIVE reproof pending)
- F-RB-07: CLOSED BY REAL REPROOF (preserved)
- F-RB-02: OPEN NONBLOCKING
- runtime v3: NON ADOPTED
- REAL-C: BLOCKED

## Formal review defects consumed

| Defect | Description | CORR-02 disposition |
|---|---|---|
| **A — Pass exhaustion false-complete** | `(!continuationRequired \|\| passesExhausted)` treated pass limit as coverage complete | **FIXED** — `requiredGroundingCoverageComplete` requires `isRequiredSourceCoverageComplete()`; `passesExhausted` recorded but never implies completeness |
| **B — READ coverage ≠ required-source coverage** | Successful reads existed without machine-checkable required-source inventory | **FIXED** — process-local `RequiredSourceCoverage` + `REQUIRED_SOURCE_INTENTS:` grounding protocol; completion verified only against successful `git_local_read_file` evidence |

## Required source inventory — representation
- **Types (exported):** `RequiredSourceCoverageStatus`, `RequiredSourceCoverageItem`, `RequiredSourceCoverage`
- **Discovery:** extend existing prequalification grounding — `inferRequiredSourceIntentsFromRequest()` + `parseRequiredSourceIntentsFromGrounding()`; no standalone planner; no second model call
- **Genericity:** pattern-based user-request parsing — no production hardcoding of Roadmap / C1 / REAL-A
- **Strict evidence matching:** `strictEvidenceOnly` disables fuzzy `labelMatchesDocument` cross-match (fixes required-doc-N / corpus-item-N collisions)
- **Vacuous completeness:** empty required-source inventory → `inventoryEstablished: true`, `isRequiredSourceCoverageComplete()` true when count=0 (generic F2 prompts without named sources)

## Pass exhaustion — before / after

**Before (CORR-01 defect):**
```typescript
(!continuationRequired || passesExhausted) // in requiredGroundingCoverageComplete
```

**After (CORR-02):**
```typescript
input.completeness.requiredGroundingCoverageComplete =
  hasReads &&
  noBudgetLoss &&
  noOmittedRefs &&
  !budgetBlocked &&
  input.requiredSourceCoverage.inventoryEstablished &&
  requiredComplete;
// passesExhausted never appears in this conjunction
```

## Production files changed (authorized scope)
| File | Role |
|---|---|
| `projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts` | Required-source inventory, strict matching, progressive loop integration |
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` | Fail-closed gate + `formatIncompleteRequiredSourceMessage` |
| `projects/sfia-studio/app/lib/platform/tools/toolLoop.ts` | Evidence transport (CORR-01 baseline preserved) |
| `projects/sfia-studio/app/lib/platform/tools/groundingEvidenceBudget.ts` | Configurable budgets (unchanged defaults) |
| `projects/sfia-studio/app/__tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts` | CORR-01 + CORR-02 deterministic matrix |
| `projects/sfia-studio/real-parity/remediation/real-b-blocker-02-authoritative-grounding-evidence-consumption.md` | §O CORR-02 remediation record |

Full `orchestrateF2.ts` diff: `.tmp-sfia-review/corr02-orchestrateF2.diff` (431 lines)

## CORR-02 deterministic tests (added)
| Test ID | Result |
|---|---|
| T-B02-CORR02-PASS-EXHAUSTED-INCOMPLETE | PASS |
| T-B02-CORR02-REQUIRED-INVENTORY-RB01 | PASS |
| T-B02-CORR02-MISSING-REQUIRED-SOURCE (2/3) | PASS — Cycle/LPS/Proposal Δ0 |
| T-B02-CORR02-SEARCH-ONLY-NOT-COVERED | PASS |
| T-B02-CORR02-ALL-REQUIRED-COVERED (3/3) | PASS |
| T-B02-CORR02-PARTIAL-AFTER-LAST-PASS | PASS |
| T-B02-CORR02-15-REQUIRED (14/15 fail, 15/15 pass) | PASS |
| T-B02-CORR02-RB01-POISON | PASS — cyc:qa-validation / Critical |
| T-B02-CORR02-RB07 | PASS — contradiction non-regression |

## Targeted validation
```text
npm test -- __tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts
→ 23/23 PASS
npm run typecheck → EXIT 0
npm run build → PASS
```

## Full Vitest (retry policy corrected — max 4 total full-suite attempts)
| Attempt | Result | Notes |
|---|---|---|
| 1 | FAIL | 6 failed (incl. qa-pre-m6-01 H1 timeout flake + BLOCKER-01 gate before vacuous fix) |
| 2 | FAIL | 1 failed (qa-pre-m6-01 H1) after BLOCKER-01 vacuous inventory fix |
| 3 | **EXIT 0** | 225 files / 2183 tests PASS |

Isolated flake proof (H1): PASS in 3.68s (`.tmp-sfia-review/vitest-corr02-attempt-3.txt`)

## Historical evidence immutability
| File | SHA-256 | Changed |
|---|---|---|
| `02-real-b-qualification-cognitive-reasoning.md` | `9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393` | NO |
| `02-real-b-exact-reproof-01.md` | `db3e95cd3039b3c5c5eeaac691bb00b24a28829bcd5bdd7b7dd1fbdeb8072382` | NO |
| `remediation/real-b-blocker-01-source-grounded-cognitive-qualification.md` | `9c2d4593f0ecee6ff1174287d7b2ce0e863d5de12682bbe56e61b981759d7005` | NO |

## OpenAI LIVE / HD / EC / Attempt
- OpenAI LIVE: **0**
- HD: **0**
- EC: **0**
- Attempt: **0**
- Cursor product execution: **NO**

## Proof ceiling (allowed)
V3-REAL-B-BLOCKER-02-CORR-02 — CORRECTIVE DELIVERY DETERMINISTIC PROVEN — REQUIRED-SOURCE INVENTORY + VERIFIED COVERAGE PROVEN — PASS EXHAUSTION FAIL-CLOSED PROVEN — MISSING/PARTIAL REQUIRED SOURCE CANNOT REACH QUALIFICATION — CORR-01 MULTI-SOURCE CAPACITY PRESERVED — F-RB-01 REMEDIATED IN CODE — F-RB-07 REAL CLOSURE PRESERVED — PENDING F-RB-01 LIVE REPROOF

**Forbidden:** F-RB-01 CLOSED REAL · REAL-B PASS · REAL-C READY/EXECUTED · runtime v3 ADOPTED

## Next gate
F-RB-01 impacted LIVE reproof — **NOT REAL-C**
