# ChatGPT Review Pack — CORR-PROOF-04 OPTION D STATUS-AWARE PRODUCT GIT / PR

1. UTC timestamp: `2026-09-07T06:26:24Z`
2. Cycle ID: `SFIA-STUDIO-PRODUCT-PROOF-CORR-04-OPTION-D-STATUS-AWARE-PRODUCT-GIT-PR-01`
3. Morris Product Git GO consumed: ACCEPT manifest `456f55611926d1e117f8090c5e5a1ea6255ce788a284dfe7c04c72f58acd2ef4`; COMMIT+PUSH+PR authorized; MERGE/REAL/Stage B NOT authorized.
4. Repo/worktree: `mcleland147/sfia-workspace` · `/Users/morris/Projects/sfia-wt-corr04-recovery-ac7376d9`
5. Source branch: `recovery/sfia-studio-proof-corr-04-option-d-ac7376d9` (PRESERVED)
6. Polluted worktree `/Users/morris/Projects/sfia-wt-corr04-d-envelope`: **UNTOUCHED / QUARANTINED**
7. HEAD before commit: `1f48dd81c870d3337efd5f2d02af6be0d8602b44`
8. origin/main before commit: `1f48dd81c870d3337efd5f2d02af6be0d8602b44`
9. Input handoff: `4dec397302369cdc81224040afae4c496f66645e` / blob `26c816cdc5a84d7842a46fbf8c7d45231ba382d9`
10. Accepted manifest: `456f55611926d1e117f8090c5e5a1ea6255ce788a284dfe7c04c72f58acd2ef4`
11–12. Exact 16 accepted paths + individual hashes:
```
72087b3d8f0dad96065e8b676bf7c5765ff63303a85a048b1a91fed01323a28a  projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
d016620da7e0d6abbd8a7de1766a6a9a0b89467b2e1b21b7ec06b523b753a3c7  projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts
94c0cf189df70be16da0b104eaed89a0c597908a93351bcfbebdc09a1245c83e  projects/sfia-studio/app/__tests__/project-assistant/corrProof04.d.hybridContextEnvelope.d0.test.ts
a866d30cca5b13ed2c98d115739765d6e997b495125899441074df2bb58b65d3  projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
343703a5dd1918ec344e24a579cd95e054d29b07dbdf29fae0a3155cbe8bbdc8  projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
2e5995e89f2596f63bd110ffed69d12bda317149f19d4586f4bbc3a62ebfee08  projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
0e89d17001449cdeee4bc3081caecbfa1d3e94a2a0fcb9f46e6cbba019e30e90  projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
d01ca51b02d4eb2a2d37436fd3bde41ddf1b16bbebba4cf12c901c0e68ff2691  projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
db1748036cce800a1416ef24698020509e1ea6f5c75dc0903b329b081ad14474  projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
ef3658d9138ee8d7a740ef0b812b1d3923f4df3b71f3b93c54d9300ce6f6d4e7  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
1a3734ae08b719902f384b4e01701f1962cb36bcdf516b4a76529e3bd79aee75  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
fda3bf9d861823c12c2ab4266cf64710fee3e64aff516536a85f41dc23df538a  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
d7f5df8da401efa4044bd00fac8bbeeb732c0e9c49453acacc2b35837eb6d4ac  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
553e6196da5a5bc749ffaac91cab54d11e14e4d61b180e14c169434ea4c48498  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
6f003dfe782bbd0de580ad85e9e98d9c2fcafbeecc10e0d20c0226369b63a8c2  projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
37f2b24a44bfbf6a6417db88a8bbe46daa71df9c42a19eeda7b14e85dcbd804d  projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
```
13. Pre-stage worktree manifest: MATCH `456f5561…`
14. Precommit commands/results:
```
npx vitest run …studioCognitiveContext.test.ts …corrProof04… → exit 0 · 2 files / 18 tests · 1.51s
npx vitest run __tests__/project-assistant/ → exit 0 · 44 files / 506 tests · 9.90s
npx vitest run __tests__/oa/decision/ → exit 0 · 8 files / 59 tests · 6.25s
npx vitest run __tests__/oa/evidence-review/ → exit 0 · 22 files / 200 tests · 3.41s
npx vitest run CORR01/02/03 + methodOrientation + w1CkcSemanticSeam → exit 0 · 5 files / 80 tests · 1.74s
npm run typecheck → exit 0
npm run lint → exit 0 · No ESLint warnings or errors
git diff --check → exit 0
```
15. Post-test manifest: MATCH `456f5561…` (candidate not mutated)
16. Staged files: exact 16 (path-scoped `git add -- <16 paths>`)
17–18. Staged blob hashes / staged manifest: MATCH `456f5561…`
19. Commit message: `feat(sfia-studio): ground Nora reasoning in Studio context`
20. Product commit: `95b268c3082ce82b9fc7f169d47450965a9ecf35`
21. Commit parent: `1f48dd81c870d3337efd5f2d02af6be0d8602b44`
22. Commit tree: `eb4f0f612d351a4d275d8056c5f7ca21dc4e9926`
23–25. Committed file list = exact 16; committed blob hashes/manifest MATCH `456f5561…`
26. Push: `git push -u origin HEAD` → PASS (new remote branch)
27. Remote source branch SHA: `95b268c3082ce82b9fc7f169d47450965a9ecf35` (= local HEAD)
28. PR: **#475** — https://github.com/mcleland147/sfia-workspace/pull/475
    Title: `feat(sfia-studio): ground Nora reasoning in Studio context`
29. PR state=OPEN · draft=false · merged=false
30. PR base: main @ `1f48dd81c870d3337efd5f2d02af6be0d8602b44`
31. PR head: `recovery/sfia-studio-proof-corr-04-option-d-ac7376d9` @ `95b268c3082ce82b9fc7f169d47450965a9ecf35`
32. PR exact file list: 16/16 accepted paths
33. PR tree/manifest parity: PASS (`eb4f0f61…` / `456f5561…`)
34–38. CI:
```
WORKFLOW_RUN_ID=34090351892
workflow=SFIA Studio CI
event=pull_request
head SHA=95b268c3082ce82b9fc7f169d47450965a9ecf35
status=completed
conclusion=failure
URL=https://github.com/mcleland147/sfia-workspace/actions/runs/34090351892

Jobs:
- Detect SFIA Studio changes: SUCCESS (7s)
- Build and validate SFIA Studio: FAILURE (4m51s)
  steps: Typecheck SUCCESS · Lint SUCCESS · Build SUCCESS · Unit tests (Vitest) FAILURE
  Modeled governance / secret scan / whitespace: skipped after unit failure
- SFIA Studio Required Gate: FAILURE (2s)
  Aggregate: detect=success validate=failure studio_changed=true
  message: Required gate FAIL: Studio validation required but result=failure.
```

## STOP CODE
**STOP — CORR-PROOF-04 PR CI FAILED**

### Exact failing test
`__tests__/vertical-slice-runtime/importBoundaries.test.ts`
> V2-A1 vertical-slice-runtime import boundaries > allows only the bounded V2 UI runtime entrypoints

AssertionError: expected Set{…(44)} to deeply equal Set{…(43)}

Extra received entry:
`features/project-assistant/f2/studioCognitiveContext.ts:@/lib/vertical-slice-runtime`

CI unit summary: Test Files 1 failed | 313 passed | 17 skipped; Tests 1 failed | 3125 passed | 135 skipped; Duration 185.72s

### Failure excerpt
```
Failed Tests 1 ^[[49m^[[22m^[[31m⎯⎯⎯⎯⎯⎯⎯^[[39m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7399849Z
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7402226Z ^[[41m^[[1m FAIL ^[[22m^[[49m __tests__/vertical-slice-runtime/importBoundaries.test.ts^[[2m > ^[[22mV2-A1 vertical-slice-runtime import boundaries^[[2m > ^[[22mallows only the bounded V2 UI runtime entrypoints
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7428039Z ^[[31m^[[1mAssertionError^[[22m: expected Set{ …(44) } to deeply equal Set{ …(43) }^[[39m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7430795Z
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7431300Z ^[[32m- Expected^[[39m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7431851Z ^[[31m+ Received^[[39m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7432176Z
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7432527Z ^[[33m@@ -8,10 +8,11 @@^[[39m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7433478Z ^[[2m    "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",^[[22m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7434872Z ^[[2m    "features/project-assistant/composeMw6GovernedAuthority.ts:@/lib/vertical-slice-runtime",^[[22m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7436248Z ^[[2m    "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",^[[22m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7437955Z ^[[2m    "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",^[[22m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7439489Z ^[[2m    "features/project-assistant/f2/resolveMw5ProductAuthorityFromOa.ts:@/lib/vertical-slice-runtime",^[[22m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7440964Z ^[[31m+   "features/project-assistant/f2/studioCognitiveContext.ts:@/lib/vertical-slice-runtime",^[[39m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7442846Z ^[[2m    "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",^[[22m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7444497Z ^[[2m    "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",^[[22m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T06:24:57.7446077Z ^[[2m    "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",^[[22m
Build and validate SFIA Studio	Unit tests (Vitest)	2026-09-07T
```

### Disposition note (NO FIX performed)
The accepted 16-file Product candidate is byte-identical and committed.
CI full-suite failure is an allowlist/import-boundary registry outside the authorized 16-file Product/test set
(`__tests__/vertical-slice-runtime/importBoundaries.test.ts` is NOT in the accepted candidate).
Per Product Git contract: **NO additional Product correction authorized** after accepted-manifest verification.
ChatGPT/Morris disposition required (likely separate allowlist update or re-scoped correction cycle).

39. Source branch preserved: YES
40. Local/remote final Git: HEAD = origin/recovery/... = `95b268c3…`; origin/main = `1f48dd81…`
41. Tracked Product diff after commit: EMPTY for the 16 paths (only local `.tmp-sfia-review` / `.tmp-sfia-proof` remain dirty/untracked)
42. Staged: EMPTY
43. Additional Product correction after acceptance: **ZERO**
44. ZERO REAL
45. ZERO hosted web_search
46. Stage B NOT AUTHORIZED
47. production routing NOT SELECTED
48. runtime v3 NON ADOPTED
49. Proof ceiling: STATUS-AWARE DETERMINISTIC PROVEN CANDIDATE + Product commit/PR created; **PR CI NOT VERIFIED (FAIL)**
50. Product Proof: OPEN / BLOCKED
51. Reserves: R-CP04-REAL-DEPTH-01 · R-CP04-COMPACTION-TRUTH-RECONCILE-01 · R-CP04-TRAJECTORY-POSITIVE-01 · R-CP04-CONTEXT-SELECTION-01 · R-CP04-CKC-CONDENSED-CAUSAL-01 · **R-CP04-IMPORT-BOUNDARY-ALLOWLIST-01 (new evidence from CI)**
52. Merge: NOT PERFORMED
53. Merge gate: NOT READY (CI Required Gate FAIL)
54. Review Handoff: publish via publisher after this pack

## Final verdict
**STOP — BLOCKING PR GAP** (CI / Required Gate FAIL; no Product fix authorized in this cycle)
