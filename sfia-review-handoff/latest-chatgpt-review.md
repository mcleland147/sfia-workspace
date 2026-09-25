# PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
## CYCLE 9 — QA / validation — bounded CI correction (PR #522)
## FULL Review Pack — Cursor → ChatGPT

Generated: 2026-09-25T19:27:11Z
Macro: PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
Cycle: 9 — QA / validation — bounded CI correction inside existing PR #522
Profile: CRITICAL
Morris GO consumed: CI correction + commit + push + handoff (NOT merge)
Cursor REAL: NOT RUN
Merge: NOT AUTHORIZED

---

## 1. GIT TRUTH BEFORE

| Field | Value |
|-------|-------|
| Repo | mcleland147/sfia-workspace |
| Branch | `feat/sfia-studio-pilot-execution-experience-recovery-simplification-01` |
| HEAD | `8416968532b757f52972a7dcbc347424182402ab` |
| origin/main | `e287f744479fc4b55c3e3082969deea7783996da` |
| Remote branch | same SHA |
| PR #522 | OPEN / NOT MERGED / MERGEABLE |
| Dirty unrelated | `.tmp-sfia-review/**` only (not staged) |

---

## 2. MORRIS DECISION CONSUMED

GO for: bounded CI correction in macro #522 · commit · push · handoff.
NOT authorized: merge · new PR · Product change · GAP-15 · StudyFlow · Cursor REAL · architecture.

---

## 3. DIAGNOSTIC CI #603

Workflow: SFIA Studio CI · Run `36174748066` · number 603 · FAILURE  
Failing test: `__tests__/vertical-slice-runtime/importBoundaries.test.ts` — V2-A1 allowlist exact equality.

### Confirmed: MECHANICAL IMPORT-BOUNDARY ALLOWLIST DRIFT

Code inspection:

A. **Added by #522 (real import)** — `prepareAndResolveM3ProductPath.ts`:
```ts
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
```
Still also imports `resolveBoundedReadOnlyBaseHeadSha` (already allowlisted).

B. **Removed by #522 (stale allowlist)** — `prepareDocsWriteRecoverySuccessor.ts`:
- no longer imports `@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha`
- uses `resolveTrustedProductLaunchContext` instead
- still imports `@/lib/vertical-slice-runtime` (RuntimeOaStack) — already allowlisted

Not an architectural violation: top-level `RuntimeOaStack` type import matches existing allowlist pattern (`actions.ts`, other f3/w2 files). Equality oracle preserved (`toEqual(allowed)`).

---

## 4. FILE MODIFIED

**ONLY:** `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

Product files: READ ONLY / unchanged.

---

## 5. EXACT DIFF

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 895ee15e..9d5b46ee 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -86,6 +86,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f2/studioCognitiveContext.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
+      "features/project-assistant/f3/prepareAndResolveM3ProductPath.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/prepareAndResolveM3ProductPath.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
       "features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/resolveDurableBoundaryProofMode.ts:@/lib/vertical-slice-runtime",
@@ -115,7 +116,6 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "app/api/e2e/w3b-boundary/route.ts:@/lib/vertical-slice-runtime/w3bE2eBoundaryControl",
       "features/project-assistant/w2/pendingDecisionSubjectMarker.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts:@/lib/vertical-slice-runtime",
-      "features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
       "features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/presentedOptionSet.ts:@/lib/vertical-slice-runtime",

```

---

## 6. VALIDATIONS (local)

| Gate | Result |
|------|--------|
| targeted importBoundaries | **5/5 PASS** |
| full `npm test` | **4685 PASS** / 137 skipped |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS |
| Diff scope | single test file only |

---

## 7. COMMIT / PUSH

| | |
|--|--|
| Message | `test(studio): align runtime import boundary allowlist` |
| Commit | `dbefeb15efa34c657b10b9501dbee90efe90bd92` |
| Remote | identical — **PUSH VERIFIED** |

---

## 8. PR #522 AFTER PUSH

| | |
|--|--|
| URL | https://github.com/mcleland147/sfia-workspace/pull/522 |
| State | OPEN / NOT MERGED |
| mergeable | MERGEABLE |
| Head | `dbefeb15efa34c657b10b9501dbee90efe90bd92` |
| Base | `e287f744479fc4b55c3e3082969deea7783996da` |

---

## 9. CI AFTER CORRECTION

| | |
|--|--|
| Workflow | SFIA Studio CI |
| Run | `36178978081` |
| Number | **604** |
| Head SHA | `dbefeb15…` |
| Conclusion | **success** |
| Detect SFIA Studio changes | **pass** |
| Build and validate SFIA Studio | **pass** (6m41s) |
| SFIA Studio Required Gate | **pass** |

---

## 10. FAKE / REAL

DETERMINISTIC QA correction only.  
Cursor REAL / StudyFlow REAL / END-TO-END REAL — NOT RUN / NOT CLAIMED.

### Anti-claims
- runtime v3 ADOPTED — NO
- READY FOR REAL global — NO
- END-TO-END REAL PROVEN — NO
- Cursor docs_write REAL PROVEN — NO
- GAP-15 CLOSED — NO
- merge authorized — NO

---

## 11. RESERVES

- **GAP-15** — OPEN RESERVE / OUT OF CURRENT MACRO / NON-BLOCKING FOR PR #522 (unchanged)
- Natural StudyFlow REAL — PENDING AFTER INTEGRATION

---

## 12. FINAL VERDICT

**CI CORRECTION PUSHED — PR #522 CI GREEN — READY FOR CHATGPT PRE-MERGE REVIEW**

MERGE — NOT AUTHORIZED (distinct Morris gate after ChatGPT pre-merge review).
