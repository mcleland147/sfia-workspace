# ChatGPT Review Pack — CORR-PROOF-04 OPTION D PR CI ALLOWLIST CORRECTION

1. UTC timestamp: `2026-09-07T07:17:32Z`
2. Cycle ID: `SFIA-STUDIO-PRODUCT-PROOF-CORR-04-OPTION-D-PR-CI-ALLOWLIST-CORR-01`
3. Morris GO consumed: GO MORRIS — CORR-PROOF-04 PR #475 TARGETED IMPORT-BOUNDARY ALLOWLIST CORRECTION — register exact edge `features/project-assistant/f2/studioCognitiveContext.ts:@/lib/vertical-slice-runtime` only; preserve 16-file Product byte-for-byte; 17-file candidate; commit+push to existing PR branch if proofs PASS; wait fresh CI + Required Gate; NO merge/REAL/Stage B.
4. Workspace: `/Users/morris/Projects/sfia-wt-corr04-recovery-ac7376d9` · branch `recovery/sfia-studio-proof-corr-04-option-d-ac7376d9`
5. Polluted worktree `/Users/morris/Projects/sfia-wt-corr04-d-envelope`: **UNTOUCHED / QUARANTINED**
6. Local Git Truth before mutation:
   - HEAD=`95b268c3082ce82b9fc7f169d47450965a9ecf35`
   - origin/branch=`95b268c3082ce82b9fc7f169d47450965a9ecf35`
   - origin/main=`1f48dd81c870d3337efd5f2d02af6be0d8602b44`
   - staged EMPTY; Product tracked diff EMPTY; only `.tmp-*` dirty
7. PR #475 before mutation: OPEN · draft=false · merged=false · base main@`1f48dd81…` · head `95b268c3…`
8. Input handoff: `4b2eab21f03738cd79308adaa863229f1a8339d0`
9. Failed CI reference (NOT used as success proof): run `34090351892` — Unit tests FAIL on importBoundaries allowlist missing studioCognitiveContext edge

## Architecture basis (verified)
- `studioCognitiveContext.ts` uses `import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";` only
- no `getRuntimeApplicationService` in studioCognitiveContext.ts
- `oa` injected into composer; `orchestrateF2.ts` remains runtime owner

## Historical 16-file LOCK + manifest reproduction
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
Manifest16 SHA256 = `456f55611926d1e117f8090c5e5a1ea6255ce788a284dfe7c04c72f58acd2ef4` (MATCH before and after)

## Exact allowlist diff (commit 7f7184ca)
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 3662fa4c..619c4715 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -81,6 +81,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",
       "features/project-assistant/f2/resolveMw5ProductAuthorityFromOa.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/f2/studioCognitiveContext.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/f3/prepareAndResolveM3ProductPath.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
```
Allowlist file SHA256 = `c17409756b2d71150e561f5f923113db2573b5d38c2bee9effe54edd7eecbde7`

## 17-file candidate
```
72087b3d8f0dad96065e8b676bf7c5765ff63303a85a048b1a91fed01323a28a  projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
d016620da7e0d6abbd8a7de1766a6a9a0b89467b2e1b21b7ec06b523b753a3c7  projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts
94c0cf189df70be16da0b104eaed89a0c597908a93351bcfbebdc09a1245c83e  projects/sfia-studio/app/__tests__/project-assistant/corrProof04.d.hybridContextEnvelope.d0.test.ts
a866d30cca5b13ed2c98d115739765d6e997b495125899441074df2bb58b65d3  projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
c17409756b2d71150e561f5f923113db2573b5d38c2bee9effe54edd7eecbde7  projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
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
Manifest17 SHA256 = `efed8e51467b000789c875bcbb122d8df52e58bc9986784b8aad0dc54a3b691e`

## Local validations
```
npx vitest run __tests__/vertical-slice-runtime/importBoundaries.test.ts
→ exit 0 · Test Files 1 passed · Tests 5 passed · Duration 337ms

npx vitest run studioCognitiveContext + corrProof04
→ exit 0 · Test Files 2 passed · Tests 18 passed · Duration 2.92s

npx vitest run __tests__/project-assistant/
→ exit 0 · Test Files 44 passed · Tests 506 passed · Duration 11.12s

npx vitest run __tests__/oa/decision/
→ exit 0 · Test Files 8 passed · Tests 59 passed · Duration 4.98s

npx vitest run __tests__/oa/evidence-review/
→ exit 0 · Test Files 22 passed · Tests 200 passed · Duration 2.75s

npm test  (CI-equivalent full unit)
→ exit 0 · Test Files 314 passed | 17 skipped · Tests 3126 passed | 135 skipped · Duration 29.26s

npm run typecheck → exit 0
npm run lint → exit 0 · No ESLint warnings or errors
npm run build → exit 0 · Compiled successfully

node --test modeled governance (3 suites) → exit 0 · 73 pass / 0 fail
Secret pattern scan (git grep targeted) → PASS
git diff --check → exit 0
git diff --check origin/main...HEAD → exit 0
```

## Git integration
- Staged exact: `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts` only
- Correction commit: `7f7184ca2b338ed167bdb06e01fd3bc707e194f8`
- Parent: `95b268c3082ce82b9fc7f169d47450965a9ecf35`
- Tree: `142ec00df04b9361d3cffd92600aff8ae39e6976`
- Commit file count: **1**
- Push: normal FF `95b268c3..7f7184ca` to origin/recovery/...
- Remote source head: `7f7184ca2b338ed167bdb06e01fd3bc707e194f8`
- PR #475 after push: OPEN · draft=false · merged=false · base main@`1f48dd81…` · head `7f7184ca…` · **17 files vs main**

## Fresh CI (NOT 34090351892)
```
WORKFLOW_RUN_ID=34094393831
workflow=SFIA Studio CI
event=pull_request
head SHA=7f7184ca2b338ed167bdb06e01fd3bc707e194f8
status=completed
conclusion=success
URL=https://github.com/mcleland147/sfia-workspace/actions/runs/34094393831

Jobs:
- Detect SFIA Studio changes: SUCCESS
- Build and validate SFIA Studio: SUCCESS
  Typecheck SUCCESS · Lint SUCCESS · Build SUCCESS · Unit tests SUCCESS
  FinOps/T7 freeze notice SUCCESS · Modeled governance SUCCESS
  Secret pattern scan SUCCESS · Trailing whitespace check SUCCESS
- SFIA Studio Required Gate: SUCCESS
```

## Boundaries
- ZERO additional Product correction beyond allowlist
- ZERO REAL / ZERO hosted web_search
- Stage B NOT AUTHORIZED
- production routing NOT SELECTED
- runtime v3 NON ADOPTED
- Merge NOT PERFORMED

## Product Proof
OPEN / BLOCKED pending integration lifecycle + distinct Morris REAL gate

## Reserves
- R-CP04-IMPORT-BOUNDARY-ALLOWLIST-01: **CLOSED AT PR-INTEGRATION TEST SCOPE** (fresh CI/Required Gate PASS)
- R-CP04-PRECOMMIT-CI-PARITY-01: NON-BLOCKING PROCESS RESERVE (reported; this cycle executed full `npm test`)
- R-CP04-REAL-DEPTH-01
- R-CP04-COMPACTION-TRUTH-RECONCILE-01
- R-CP04-TRAJECTORY-POSITIVE-01
- R-CP04-CONTEXT-SELECTION-01
- R-CP04-CKC-CONDENSED-CAUSAL-01

## Proof ceiling
STATUS-AWARE DETERMINISTIC PROVEN CANDIDATE + PR CI VERIFIED

## Final verdict
PASS — CORR-PROOF-04 PR #475 ALLOWLIST CORRECTION INTEGRATED ON PR HEAD / FRESH PR CI VERIFIED — READY FOR CHATGPT CRITICAL PR REVIEW — MERGE NOT AUTHORIZED

ChatGPT: lire le Review Handoff canonique distant, vérifier indépendamment nouveau PR head/base, exact 17-file scope, byte-parity des 16 fichiers historiques, commit correctif mono-fichier, fresh SFIA Studio CI et Required Gate, puis rendre un Critical PR Review. Aucun merge ni REAL ne doit être inféré du PASS.
