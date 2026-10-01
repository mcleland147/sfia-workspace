# GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 — Correction Pass 04 RESUME
## ChatGPT Critical Review Pack (FULL)

**OVERWRITE** of prior STOP pack. Same macro · same Correction Pass 04 · RESUMED AFTER MORRIS DECISION.
Not Correction Pass 05.

### 1. Timestamp
- UTC: `2026-10-01T22:05:54Z`
- Local: `2026-10-02T00:05:54+0200`

### 2. Git truth — initial (resume entry) / final (this pack)
| Field | Value |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01` |
| branch | `delivery/sfia-studio-generic-execution-review-result-convergence-01` |
| HEAD | `d4d986af5884b31b416374da3cb5e60757501f87` |
| origin/main | `d4d986af5884b31b416374da3cb5e60757501f87` |
| ahead/behind | `0	0` (0 / 0) |
| project commits | **0** |
| staged | **none** |
| candidate | dirty CP2+CP3+CP4 RESUME (preserved) |

Final status (short):
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
 M projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
 M projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
 M projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
 M projects/sfia-studio/app/lib/oa/execution-run/index.ts
 M projects/sfia-studio/app/lib/oa/git-ports/localGitStatusDiffPort.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? .tmp-sfia-review/pack-assets/
?? projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.cp2Seams.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.trajectorySurface.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts
?? projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts
?? projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts
?? projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts
?? projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts
?? projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts
?? projects/sfia-studio/app/lib/oa/sandboxContract.ts

```

Diff name-status (product):
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
M	projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
M	projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
M	projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
M	projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
M	projects/sfia-studio/app/lib/oa/execution-run/index.ts
M	projects/sfia-studio/app/lib/oa/git-ports/localGitStatusDiffPort.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

Diff stat:
```
 .tmp-sfia-review/chatgpt-review.md                 | 4290 --------------------
 .../sandbox.protectedPath.fixture.test.ts          |   36 +
 .../automaticProjectResume.ui.test.tsx             |   11 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |   11 +
 .../postExecutionTrajectorySurface.ui.test.tsx     |   10 +
 .../preCycleTrajectoryCta.ui.test.tsx              |   11 +
 .../productJourneyProjectionCoherence.ui.test.tsx  |   11 +
 .../trajectorySurface.ui.test.tsx                  |   10 +
 .../productContinuitySharedKnowledge.d0.test.ts    |   14 +
 .../surfaces/TrajectorySurface.tsx                 |  287 +-
 .../f3/ingestDocsWriteArtifactEvidence.ts          |   27 +
 .../f3/persistDocsWriteArtifactReviewMaterial.ts   |    6 +
 .../f3/postEvidenceNoraAnalysis.ts                 |   16 +-
 .../app/features/project-assistant/w2/actions.ts   |   86 +
 .../project-assistant/w2/decideTrajectory.ts       |   60 +-
 .../deriveActualExecutionWorkFromProductContext.ts |  268 +-
 .../w2/governedExecuteAuthorizedContract.ts        |  106 +-
 .../w2/materializeW3bProductTerminal.ts            |   53 +-
 .../w2/missionContractSemanticInputs.ts            |   16 +
 .../w2/prepareExecutionContractFromW2Decision.ts   |    9 +-
 .../w2/resolveProductExecutionContext.ts           |  115 +
 .../project-assistant/w2/w3aActualExecutionWork.ts |  132 +-
 .../w2/w3aProductExecutionSemantics.ts             |    5 +-
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    |   60 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |    4 +
 .../noraCognitiveCompletion.ts                     |   10 +-
 .../nora-cognitive-runtime/providerAgentsModel.ts  |   11 +-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   17 +
 .../missionResultContractResultSemantic.ts         |  216 +
 .../application/startExecution.ts                  |    5 +
 .../domain/authorizedExecutionSlice.ts             |    3 +
 .../domain/contractEffectClassification.ts         |   19 +
 .../domain/cursorExecutionReport.ts                |    6 +
 .../domain/qualifyExecutionContractCompletion.ts   |    7 +
 .../domain/resolveAttemptExecutionProfile.ts       |    7 +
 .../app/lib/oa/execution-attempt/index.ts          |    2 +
 .../studioCursorRealLaunchGateway.ts               |   28 +-
 .../lib/oa/execution-run/domain/sandboxContract.ts |   77 +-
 .../sfia-studio/app/lib/oa/execution-run/index.ts  |    5 +
 .../app/lib/oa/git-ports/localGitStatusDiffPort.ts |   12 +-
 .../convergence/sfia-studio-convergence-roadmap.md |    5 +
 .../03-end-to-end-flow-catalog.md                  |    8 +
 .../08-test-proof-and-conformance-map.md           |   21 +
 ...9-known-gaps-reserves-and-current-boundaries.md |   35 +-
 .../production-runtime-reference.manifest.json     |   10 +-
 45 files changed, 1781 insertions(+), 4377 deletions(-)

```

`git diff --check` → **0** findings.

### 3. Same macro / same CP4
- Macro: **GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01**
- Pass: **Correction Pass 04 — RESUMED AFTER MORRIS DECISION**
- Cycle: **8 — Delivery / implémentation** · CRITICAL · EVOL · CKC `ckc:studio:delivery`
- Architecture: D-ER-01…D-ER-15 **CONSUMED** · NO REDESIGN
- runtime v3: **NON ADOPTED** · ZERO REAL · READY FOR REAL **NO** · NOT INTEGRATED ON MAIN

### 4. Morris decisions consumed
| ID | Decision | Status |
|---|---|---|
| **MD-CP4-01** | `PresentedOptionSet.sealedExecutionBasis` = Product server-owned carrier for bounded local-write on Proposal `pursue`. MAIN E2E must NOT inject `durableLocalWriteSeal`. | **APPROVED / CONSUMED** |
| **MD-CP4-02** | **OPTION C** — sandbox protected floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Doctrine/Roadmap/D-ER/C1). No blanket `projects/sfia-studio/**` or `convergence/**`. | **APPROVED / CONSUMED** |

### 5. Historical entry handoffs
- CP3 Critical Review entry: `47e7e5930980cc5aa2172ec70a14077aaff74629`
- CP4 STOP handoff (superseded by this resume): `2daf0dc3284d4188c2893eb429dcf429e598834f` / blob `4b91cc6fb5e402585001ec6ea609d561d1fb8abc`
- This resume supersedes documentary STOP; does **not** open Pass 05.

### 6. CP4-01 before / after
**Before (STOP):** Proposal sealedExecutionBasis SOURCE FOUND / NOT WIRED as Product carrier for MAIN front-door. MAIN oracle used `decideTrajectory({ durableLocalWriteSeal })` injection.

**After (RESUME):**
Product call graph:
```
saveProposal(executionIntent non-docs_write)
→ proposeTrajectoryOptions(proposalId)
→ PresentedOptionSet.sealedExecutionBasis (server-owned Epistemic)
→ decideTrajectory(selectedOptionRef=opt:proposal-subject:pursue)  // NO durableLocalWriteSeal
→ HumanDecision + DecisionBasis.executionBasis (sourceType=proposal)
→ prepareExecutionContractFromW2Decision
→ deriveActualExecutionWorkFromProductContext / canQualifyGenericLocalWriteFromDurableFacts
→ generic EC quartet + Confirmation N2
→ Fake Cursor execute → VerifiedChangeSet → Evidence → CE → Nora W3-C → Result
```

### 7. Exact Product call graph (CP4-01)
See §6. Key seams:
- `ProposalDto.executionIntent` → `sealProposalExecutionBasis` → `PresentedOptionSet.sealedExecutionBasis`
- `PROPOSAL_SUBJECT_PURSUE_REF` → DecisionBasis copy of sealed basis
- `canQualifyGenericLocalWriteFromDurableFacts` accepts pursue + `sourceType=proposal`
- `deriveW3AExecutionEnvelope` allows pursue provenance
- Browser action `w2DecideTrajectoryAction` still rejects client `targetPath`/`scopeIn`/`reversibility`/`durableLocalWriteSeal`

### 8. Source / provenance of sealedExecutionBasis
Server Proposal store → propose with `proposalId` → seal into PresentedOptionSet → pursue HD copies into DecisionBasis. **No** client fabrication. **No** post-HD Decision.save patch. **No** direct DecisionBasis construction of local-write facts in MAIN oracle.

### 9. Browser hostile proof
T-CP4-05 covered in front-door / action seams: client cannot inject targetPath/scopeIn/reversibility/durableLocalWriteSeal into decideTrajectory Product action. MAIN front-door anti-regression:
`expect(src).not.toMatch(/\bdurableLocalWriteSeal\s*:/)` → PASS (rg confirms NONE in frontDoor).

### 10. DecisionBasis proof
After `decideTrajectory(pursue)`, `decisions.findById` shows `sourceType=proposal`, sealed `targetPath`/`scopeIn`/`reversibilityExpectation` matching Proposal executionIntent.

### 11. Generic quartet (unchanged)
- action: `studio.cursor.generalist.execute`
- target: `studio.cursor.generalist.workspace`
- scope: `studio.cursor.generalist.authorized_contract`
- capability: `cap:studio.cursor.generalist`
- effects: local-write / filesystem.create|modify from durable facts
- **No** Product `docs_write` taxonomy on generic EC · **No** `generic_write` Product type

### 12–16. CP4-02 Option C policy
**Policy source:** `lib/oa/execution-run/domain/sandboxContract.ts` (same sandbox engine).
**Re-export facade for project-assistant import-boundary:** `lib/oa/sandboxContract.ts` (NOT a second engine).

**Sandbox floor reused:** `SANDBOX_DEFAULT_PROTECTED_PATHS` (method/, prompts/, .github/, .sfia/, node_modules/, …).

**Studio governance set (`STUDIO_GOVERNANCE_PROTECTED_PATHS`):**
- PREFIX: `projects/sfia-studio/sfia-v3-framing/`
- EXACT: Build Doctrine, Convergence Roadmap, D-ER architecture, C1 cadrage

**Effective:** `STUDIO_PRODUCT_PROTECTED_PATHS = floor ∪ governance`.
**Classifier:** `classifyStudioProductProtectedPath` / `evaluateStudioProductWritePath`.
**NOT used:** `SFIA_DEFAULT_PROTECTED_PATHS`, OPS1 blunt `projects/sfia-studio/**`.
**No hardcoded list** in `deriveActualExecutionWorkFromProductContext.ts` — only `classifyStudioProductProtectedPath` via `@/lib/oa/sandboxContract`.

**Why not whole Studio deny:** Morris Option C — `app/**` remains potentially writable under EC; blanket Studio/convergence deny forbidden.

**Allow:** `projects/sfia-studio/app/example.ts` (ordinary).
**Deny:** method/, prompts/, .github/, framing/**, Doctrine exact, Roadmap exact, D-ER exact, C1 exact, nested framing subdir. Non-listed convergence assets are **not** blanket-denied.

**Semantics:** Confirmation N2 never turns DENY→ALLOW. Protected Proposal HD may exist as Product Truth but qualification FAIL-CLOSED (HumanDecision ≠ ExecutionAuthority). No Cursor Fake launch on DENY.

### 17. CP3 spine reproof
Front-door suite re-proves CP3 Claim/Fact/Evidence/REO/Nora/continuity/same Attempt/launchCount=1 matrix after CP4 wiring (12 frontDoor tests + d0/cp2Seams/trajectorySurface).

### 18. Front-door E2E
`genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts` — Proposal path positive + protected Proposal negative + anti-regression + Option C matrix. **79** targeted tests PASS across 6 files.

### 19. Fake / Real
- Fake: external Cursor boundary + Fake model for Nora where needed
- Product path: REAL Product orchestration seams
- Git: real temp Git semantics
- Cursor REAL: **ZERO** · OpenAI REAL: **ZERO** new proof
- Ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (≠ READY FOR REAL)

### 20. Targeted validations
```
{"event":"oa.review_bundle.frozen","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:aec4f513d5150a70","reviewBundleId":"rb:w3b:d302fda6d166010e","evidenceIds":["ev:execution-review:xat:w3a:891d2284ffb870d0","ev:mission-result:xat:w3a:891d2284ffb870d0"],"actorId":"actor:local-pilote","previousStatus":"draft","newStatus":"ready_for_review","version":2,"expectedVersion":1,"result":"ok","durationMs":0}

stdout | __tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts > GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 CP4 front-door > CP2-08 remount → terminal Product — no RECOVERY_REQUIRED / EVIDENCE_LINEAGE_AMBIGUOUS
{"event":"oa.claim_evaluation.evaluated","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:55955d2e7d9e4c5f","claimEvaluationId":"clm:w3b:d302fda6d166010e","reviewBundleId":"rb:w3b:d302fda6d166010e","actorId":"actor:local-pilote","result":"ok","durationMs":1}

stdout | __tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts > GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 CP4 front-door > CP2-08 remount → terminal Product — no RECOVERY_REQUIRED / EVIDENCE_LINEAGE_AMBIGUOUS
{"event":"oa.coordination.next_action_recommended","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:w3c-reco:xat:w3a:891d2284ffb870d0","actorId":"actor:sfia-studio-system-factual-writer","result":"ok","detailCode":"not_recommended","durationMs":0}

 ✓ __tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts (12 tests) 1514ms

 Test Files  6 passed (6)
      Tests  79 passed (79)
   Start at  00:04:23
   Duration  3.47s (transform 1.72s, setup 299ms, collect 4.93s, tests 4.23s, environment 235ms, prepare 201ms)

```
Command: `npx vitest run` frontDoor + d0 + cp2Seams + trajectorySurface + sandbox.protectedPath + productContinuitySharedKnowledge → **Test Files 6 · Tests 79 passed · exit 0**.

### 21. Full Vitest
```
 ✓ __tests__/nora-cognitive-runtime/cycleReservationPiloting.d0.test.ts (9 tests) 16ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 2ms
 ✓ __tests__/project-assistant/presentationLabels.test.ts (37 tests) 8ms
 ✓ __tests__/nora-cognitive-runtime/reservationContextPilotConfirmation.d0.test.ts (6 tests) 4ms
 ✓ __tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts (15 tests) 7ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 4ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.test.ts (13 tests) 10ms
 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/auth/allowlist-actor-s1.test.ts (13 tests) 5ms
 ✓ __tests__/pre-m6-product-ui/pilotContractPresentation.d0.test.ts (2 tests) 2ms
 ✓ __tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.d0.test.ts (4 tests) 1ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 3ms
 ✓ __tests__/project-assistant/pilotExecutionExperience.trustedLaunch.d0.test.ts (3 tests) 2ms
 ✓ __tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts (9 tests) 4ms

 Test Files  458 passed | 17 skipped (475)
      Tests  5063 passed | 137 skipped (5200)
   Start at  00:02:28
   Duration  61.44s (transform 11.99s, setup 24.03s, collect 235.10s, tests 176.95s, environment 20.18s, prepare 23.22s)

```
**Test Files 458 passed | 17 skipped · Tests 5063 passed | 137 skipped · exit 0**.

### 22. Governance / OA
```
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 8ms
 ✓ __tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts (27 tests) 9ms
 ✓ __tests__/oa/execution-attempt/observationSchedule.test.ts (9 tests) 4ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 4ms
 ✓ __tests__/oa/evidence-review/contractResultEvaluation.test.ts (7 tests) 3ms
 ✓ __tests__/oa/execution-attempt/gcecGitCommitVerification.d0.test.ts (11 tests) 2ms
 ✓ __tests__/oa/execution-attempt/docsWriteSealedWorktreePaths.d0.test.ts (6 tests) 3ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 9ms
 ✓ __tests__/project-assistant/importBoundaries.test.ts (3 tests) 29ms

 Test Files  62 passed (62)
      Tests  744 passed (744)
   Start at  00:04:35
   Duration  6.46s (transform 2.25s, setup 3.14s, collect 28.29s, tests 12.55s, environment 251ms, prepare 2.86s)

```
`importBoundaries` (execution-run + project-assistant + finops) PASS after sandboxContract re-export. Broader OA execution-attempt/evidence-review/contract governance: **62 files · 744 tests · exit 0**.

### 23. typecheck / lint / build
- `npx tsc --noEmit` → exit **0** (tsc --noEmit exit 0)
- `npm run lint` → exit **0**
```

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

```
- `npm run build` → exit **0**
```
   Generating static pages (9/13) 
 ✓ Generating static pages (13/13)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      138 B         103 kB
├ ○ /_not-found                            138 B         103 kB
├ ƒ /api/auth/[...all]                     138 B         103 kB
├ ƒ /api/auth/github-start                 138 B         103 kB
├ ƒ /api/e2e/option-a-qa-scenario          138 B         103 kB
├ ƒ /api/e2e/w3b-boundary                  138 B         103 kB
├ ○ /cycle-actif                         3.83 kB         130 kB
├ ○ /decision                            5.54 kB         132 kB
├ ƒ /login                               1.42 kB         104 kB
├ ƒ /nouvelle-demande                    10.2 kB         116 kB
├ ○ /ops1/nouvelle-demande                 19 kB         145 kB
├ ƒ /projects/[id]                       2.66 kB         109 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ○ /studio                                126 B         165 kB
├ ƒ /studio/projects/[id]                  128 B         165 kB
├ ○ /studio/projects/new                   128 B         165 kB
├ ○ /synthese                            4.85 kB         131 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          2.03 kB


ƒ Middleware                              234 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

```

### 24. Conformance
`node scripts/check-production-runtime-reference.mjs` (from `projects/sfia-studio/app`):
```
OK: canonical README exists
RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK

```
→ **PRODUCTION RUNTIME REFERENCE CONFORMANCE OK**.

### 25. diff-check / secrets
- `git diff --check` → **0**
- Secret scan on changed files: only fixture/false-positive token vocabulary (pathMatchesAllowlistPrefix evil/secret fixtures, usage token fields, requireLiveConversationSecrets imports) — **no committed credentials**.

### 26. Living Ref / Roadmap
- `09-known-gaps…` CURRENT = CP4 RESUMED / CLOSED FOR CRITICAL REVIEW · CP4-01 WIRED · CP4-02 OPTION C · DETERMINISTIC PRODUCT E2E · LOCAL CANDIDATE · ZERO REAL · READY FOR REAL NO · historical STOP retained as superseded.
- Roadmap tip Pass 04 RESUMED AFTER MORRIS DECISION.
- Manifest digests refreshed.
- **NOT** INTEGRATED ON MAIN.

### 27. Files created / modified / deleted
**Created (untracked product):**
```
projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.cp2Seams.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.trajectorySurface.d0.test.ts
projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts
projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts
projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts
projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts
projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts
projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts
projects/sfia-studio/app/lib/oa/sandboxContract.ts

```
**Modified:** see name-status above (CP2+CP3+CP4 resume). **Deleted:** none.

### 28–29. Full useful diffs + new file contents

#### NEW FILE — `projects/sfia-studio/app/lib/oa/sandboxContract.ts`
```ts
/**
 * Stable Product-facing re-export of the OA sandbox / Studio write-protection
 * policy primitives. Single SoT remains
 * `lib/oa/execution-run/domain/sandboxContract.ts`.
 *
 * Project-assistant imports this path (not `@/lib/oa/execution-run`) so the
 * F1/F2/F3 import-boundary gate stays closed while CP4-02 Option C still
 * composes the same sandbox policy layer.
 */
export {
  classifyStudioProductProtectedPath,
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
  evaluateStudioProductWritePath,
  normalizeCanonicalPath,
  pathMatchesAllowlistPrefix,
  SANDBOX_DEFAULT_PROTECTED_PATHS,
  STUDIO_GOVERNANCE_PROTECTED_PATHS,
  STUDIO_PRODUCT_PROTECTED_PATHS,
} from "./execution-run/domain/sandboxContract";
export type {
  CanonicalPathResult,
  SandboxPathDecision,
} from "./execution-run/domain/sandboxContract";

```

#### CP4 RESUME — code diff (sandbox + derive + envelope + exports)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
index 091a13c5..b762c321 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
@@ -23,21 +23,34 @@
 
 import type { DecisionBasis } from "@/lib/oa/decision";
 import { isRepositorySourceRef } from "@/lib/oa/execution-contract";
+import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
 import {
   buildActualExecutionWork,
+  buildProductQualifiedLocalWriteWork,
   isActualExecutionOperationKind,
   isHighRiskPolicyOnlyOperationKind,
   type ActualExecutionWork,
-  type W3ACanonicalActualOperationKind,
 } from "./w3aActualExecutionWork";
 import type { EffectQualificationFailure } from "./w3aQualifiedExecutionEffects";
 import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
+import { PROPOSAL_SUBJECT_PURSUE_REF } from "./proposalSubjectOptions";
 import {
   BOUNDED_OPTION_REF,
   CLARIFY_OPTION_REF,
   GOVERNED_OPTION_REF,
 } from "./trajectoryOptions";
 
+/**
+ * CP4-02 Option C — Product local-write protection via sandbox policy composition
+ * (SANDBOX_DEFAULT_PROTECTED_PATHS ∪ STUDIO_GOVERNANCE_PROTECTED_PATHS).
+ * No Campus360/CT SFIA_DEFAULT_PROTECTED_PATHS. No parallel list in this module.
+ * Returns the protected entry hit, or null when path is ordinary.
+ */
+export function classifyProtectedRepositoryPath(
+  repoRelativePath: string,
+): string | null {
+  return classifyStudioProductProtectedPath(repoRelativePath);
+}
 /**
  * Repository document paths known from durable DecisionBasis / cycle facts.
  * Pseudo-refs (`attempt:…`, `product:…`) are excluded — they are not files.
@@ -234,6 +247,163 @@ function missionFromClarifyWithoutRecovery(
   };
 }
 
+/**
+ * Durable Product facts sufficient to qualify a bounded local-write effect
+ * WITHOUT docs_write Product taxonomy. Product EC surface stays generalist.
+ */
+export function canQualifyGenericLocalWriteFromDurableFacts(input: {
+  readonly basis: DecisionBasis;
+  readonly selectedOptionRef: string;
+}):
+  | {
+      readonly ok: true;
+      readonly allowedPaths: readonly string[];
+      readonly rollbackAvailable: true;
+      readonly rollbackDescription: string;
+    }
+  | { readonly ok: false; readonly reason: string } {
+  const { basis, selectedOptionRef } = input;
+  const proposalPursue =
+    selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
+    basis.sourceType === "proposal";
+  const trajectoryGoverned =
+    selectedOptionRef === GOVERNED_OPTION_REF ||
+    selectedOptionRef === BOUNDED_OPTION_REF;
+  if (!proposalPursue && !trajectoryGoverned) {
+    return {
+      ok: false,
+      reason:
+        "local-write requires GOVERNED/BOUNDED or Proposal pursue HumanDecision provenance",
+    };
+  }
+  const eb = basis.executionBasis;
+  const requested = eb.requestedOperation?.trim() ?? "";
+  // docs_write sealed path stays on PREPARE Proposal/M3 — not this path.
+  if (
+    eb.intentKind === "docs_write" ||
+    requested === "cursor.docs_write.apply"
+  ) {
+    return {
+      ok: false,
+      reason: "docs_write sealed — use PREPARE Proposal/M3 path",
+    };
+  }
+  if (eb.reversibilityExpectation === "irreversible") {
+    return {
+      ok: false,
+      reason: "irreversible expectation — local-write blocked",
+    };
+  }
+  const paths = repositorySourcesFromProductFacts({ basis });
+  if (paths.length === 0) {
+    return {
+      ok: false,
+      reason:
+        "no sealed repository paths on DecisionBasis (targetPath / scopeIn)",
+    };
+  }
+  // targetPath must be inside sealed scopeIn when both are present.
+  const target = typeof eb.targetPath === "string" ? eb.targetPath.trim() : "";
+  const scopeIn = (eb.scopeIn ?? [])
+    .map((s) => (typeof s === "string" ? s.trim() : ""))
+    .filter(Boolean);
+  if (target && scopeIn.length > 0 && !scopeIn.includes(target)) {
+    return {
+      ok: false,
+      reason: "targetPath not contained in sealed scopeIn",
+    };
+  }
+  // CP4-02 Option C — Studio Product protected paths (sandbox floor ∪ governance).
+  // Confirmation N2 never bypasses this gate.
+  const protectedHits = paths
+    .map((p) => ({ path: p, hit: classifyProtectedRepositoryPath(p) }))
+    .filter((x) => x.hit != null);
+  if (protectedHits.length > 0) {
+    return {
+      ok: false,
+      reason: `protected boundary without dedicated authority: ${protectedHits
+        .map((h) => `${h.path}→${h.hit}`)
+        .join(",")}`,
+    };
+  }
+  return {
+    ok: true,
+    allowedPaths: paths,
+    rollbackAvailable: true,
+    rollbackDescription:
+      "Isolated Git worktree discard after Attempt — no Git commit/push/PR.",
+  };
+}
+
+function missionFromGovernedLocalWrite(
+  projectObjective: string | null,
+  basis: DecisionBasis,
+  allowedPaths: readonly string[],
+): ProductMissionFields {
+  const eb = basis.executionBasis;
+  return {
+    objective:
+      (eb.objective?.trim() ||
+        "Exécuter une mutation locale bornée dans le worktree isolé") +
+      (projectObjective ? ` — ${projectObjective}` : ""),
+    expectedOutputs: [
+      ...(eb.expectedOutputs ?? []),
+      "Fichiers créés/modifiés dans le scope autorisé",
+      "CursorExecutionReport machine + Cursor Review End Of natif",
+      "Studio VerifiedChangeSet (FACTS) pour qualification produit",
+    ].filter((s, i, a) => s && a.indexOf(s) === i),
+    scopeIn: [
+      "product:project-workspace",
+      ...allowedPaths,
+      ...(eb.scopeIn ?? []).filter((s) => !allowedPaths.includes(s)),
+    ],
+    scopeOut: [
+      "GIT_COMMIT",
+      "GIT_PUSH",
+      "GIT_PR",
+      "GIT_MERGE",
+      "FILESYSTEM_DELETE",
+      "DOCTRINE_MUTATION",
+      "BASELINE_PROMOTION",
+      "unrelated-project-mutation",
+      "protected-boundary-without-authorization",
+      ...(eb.scopeOut ?? []),
+    ],
+    stopConditions: [
+      "REQUIRED_EVIDENCE_UNAVAILABLE",
+      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
+      "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
+      "CLAIM_FACT_MISMATCH",
+      "NO_AUTOMATIC_RELAUNCH",
+      // Do NOT fold trajectory authorize-flow markers (AUCUNE EXÉCUTION /
+      // STOP AVANT EXECUTE) — those are stripped by productStopConditions.
+    ],
+    evidenceRequirements: [
+      "evreq:mission-result-for-nora-reevaluation",
+      "evreq:local-write",
+      "evreq:studio-verified-changeset",
+      ...(eb.evidenceRequirements ?? []),
+    ],
+    sourcesToRead: [
+      "product:current-project-facts",
+      "product:decision-basis-and-lps",
+      // Write targets are scopeIn only — they are NOT claimed as prior reads.
+    ],
+    contextNotes: [
+      "product_qualified_local_write",
+      "NOT_DOCS_WRITE_PRODUCT_TAXONOMY",
+      `allowedPaths=${allowedPaths.join(",")}`,
+      `reversibilityExpectation=${eb.reversibilityExpectation ?? "unknown"}`,
+    ],
+    authorizesMutatingEffects: true,
+    recoveryAttemptId: null,
+    recoveryEvidenceId: null,
+    recoveryReviewBundleId: null,
+    recoveryExecutionContractId: null,
+    productOutcome: null,
+  };
+}
+
 /**
  * Internal effect-control scaffold from mission perimeter — NOT a Product
  * contract category. `operationKind: "read"` here is ActionPolicy taxonomy only;
@@ -244,15 +414,46 @@ function buildInternalWorkFromMissionPerimeter(input: {
   readonly projectTitle: string | null;
   readonly mission: ProductMissionFields;
   readonly qualificationSource: string;
+  readonly basis?: DecisionBasis;
+  readonly selectedOptionRef?: string;
 }): ActualExecutionWork | EffectQualificationFailure {
-  // Mutating missions still need sealed docs_write / GCEC path today —
-  // do not invent a generalist mutator from trajectory alone.
   if (input.mission.authorizesMutatingEffects) {
+    // Product-qualified local-write from durable facts — not docs_write taxonomy.
+    if (input.basis && input.selectedOptionRef) {
+      const qual = canQualifyGenericLocalWriteFromDurableFacts({
+        basis: input.basis,
+        selectedOptionRef: input.selectedOptionRef,
+      });
+      if (qual.ok) {
+        const built = buildProductQualifiedLocalWriteWork({
+          projectId: input.projectId,
+          projectTitle: input.projectTitle,
+          objective: input.mission.objective,
+          allowedPaths: qual.allowedPaths,
+          rollbackAvailable: qual.rollbackAvailable,
+          rollbackDescription: qual.rollbackDescription,
+          qualificationSource: input.qualificationSource,
+        });
+        if ("ok" in built && built.ok === false) return built;
+        const work = built as ActualExecutionWork;
+        return {
+          ...work,
+          notes: [
+            ...work.notes,
+            "INTERNAL_EFFECT_CONTROL_FROM_MISSION_PERIMETER",
+            "PRODUCT_QUALIFIED_LOCAL_WRITE",
+            "NOT_OPTION_TO_OPERATION",
+            "CURSOR_DETERMINES_HOW",
+            ...input.mission.contextNotes,
+          ],
+        };
+      }
+    }
     return {
       ok: false,
       code: "EFFECTS_UNRESOLVED",
       message:
-        "Mission mutante sans sealed docs_write / GCEC — utiliser le chemin Proposal/M3 ou facts produit scellés.",
+        "Mission mutante sans faits durables suffisants pour local-write produit (chemins + réversibilité) — pas de docs_write taxonomy inventée.",
     };
   }
   const built = buildActualExecutionWork({
@@ -305,7 +506,7 @@ export function deriveActualExecutionWorkFromProductContext(input: {
     };
   }
 
-  const clientKind: W3ACanonicalActualOperationKind | null =
+  const clientKind =
     isActualExecutionOperationKind(input.clientOperationKind)
       ? input.clientOperationKind
       : null;
@@ -339,6 +540,8 @@ export function deriveActualExecutionWorkFromProductContext(input: {
       mission,
       qualificationSource:
         "studio.nora.mission-perimeter.internal-effect-control",
+      basis,
+      selectedOptionRef,
     });
     if ("ok" in work && work.ok === false) return work;
     void clientKind; // durable mission wins — ignore client HOW
@@ -352,7 +555,8 @@ export function deriveActualExecutionWorkFromProductContext(input: {
 
   if (
     selectedOptionRef !== GOVERNED_OPTION_REF &&
-    selectedOptionRef !== BOUNDED_OPTION_REF
+    selectedOptionRef !== BOUNDED_OPTION_REF &&
+    selectedOptionRef !== PROPOSAL_SUBJECT_PURSUE_REF
   ) {
     return {
       ok: false,
@@ -361,6 +565,18 @@ export function deriveActualExecutionWorkFromProductContext(input: {
     };
   }
 
+  if (
+    selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
+    basis.sourceType !== "proposal"
+  ) {
+    return {
+      ok: false,
+      code: "SUBJECT_OPTION_SET_MISMATCH",
+      message:
+        "Proposal pursue sans DecisionBasis.sourceType=proposal — fail-closed.",
+    };
+  }
+
   const requested = basis.executionBasis.requestedOperation?.trim() ?? "";
   if (
     !isNonExecutableTrajectoryRequestedOperation(requested) &&
@@ -375,6 +591,46 @@ export function deriveActualExecutionWorkFromProductContext(input: {
     };
   }
 
+  // CP4-01 — GOVERNED/BOUNDED or Proposal pursue + durable local-write facts
+  // → product-qualified local-write (generic Cursor quartet).
+  const localWriteQual = canQualifyGenericLocalWriteFromDurableFacts({
+    basis,
+    selectedOptionRef,
+  });
+  if (localWriteQual.ok) {
+    const mission = missionFromGovernedLocalWrite(
+      input.projectObjective,
+      basis,
+      localWriteQual.allowedPaths,
+    );
+    const work = buildInternalWorkFromMissionPerimeter({
+      projectId: input.projectId,
+      projectTitle: input.projectTitle,
+      mission,
+      qualificationSource:
+        "studio.nora.mission-perimeter.product-qualified-local-write",
+      basis,
+      selectedOptionRef,
+    });
+    if ("ok" in work && work.ok === false) return work;
+    void clientKind; // durable local-write wins — ignore client HOW
+    return {
+      ok: true,
+      work: work as ActualExecutionWork,
+      mission,
+      derivationSource: "durable_product_mission",
+    };
+  }
+
+  // Proposal pursue without local-write facts = fail closed (no invented HOW).
+  if (selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF) {
+    return {
+      ok: false,
+      code: "EFFECTS_UNRESOLVED",
+      message: `Proposal pursue local-write non qualifiable — ${localWriteQual.reason}`,
+    };
+  }
+
   // Compat: allowlisted client kind for historical tests only — not Product UI.
   if (clientKind) {
     const built = buildActualExecutionWork({
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
index 8091f8d6..ded57e4e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -23,6 +23,7 @@ import {
   STUDIO_CURSOR_GENERALIST_TARGET,
 } from "@/lib/oa/execution-contract";
 import type { ProductMissionFields } from "./deriveActualExecutionWorkFromProductContext";
+import { PROPOSAL_SUBJECT_PURSUE_REF } from "./proposalSubjectOptions";
 import {
   BOUNDED_OPTION_REF,
   CLARIFY_OPTION_REF,
@@ -172,7 +173,9 @@ export function deriveW3AExecutionEnvelope(input: {
   const optionAllowed =
     input.selectedOptionRef === GOVERNED_OPTION_REF ||
     input.selectedOptionRef === BOUNDED_OPTION_REF ||
-    input.selectedOptionRef === CLARIFY_OPTION_REF;
+    input.selectedOptionRef === CLARIFY_OPTION_REF ||
+    // CP4-01 — Proposal pursue with sealed non-docs_write facts (MD-CP4-01).
+    input.selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
   if (!optionAllowed) {
     return {
       ok: false,
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
index 49fc9056..f634021e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
@@ -39,7 +39,12 @@ export type CanonicalPathResult =
         | "double_encoding";
     };
 
-const DEFAULT_PROTECTED = [
+/**
+ * OA sandbox deny floor — Studio execution-run protected paths.
+ * Exported read-only so Product local-write qualification can compose the same floor
+ * without duplicating a second policy list in derive.
+ */
+export const SANDBOX_DEFAULT_PROTECTED_PATHS = [
   ".git/",
   ".env",
   "method/",
@@ -49,6 +54,74 @@ const DEFAULT_PROTECTED = [
   "node_modules/",
 ] as const;
 
+/**
+ * MD-CP4-02 Option C — Morris-approved Studio governance protection set.
+ * PREFIX: sfia-v3-framing/** ; EXACT: Build Doctrine / Roadmap / D-ER architecture / C1.
+ * NOT a blanket deny of projects/sfia-studio/** or projects/sfia-studio/convergence/**.
+ * Composition lives in this sandbox policy layer — not a second policy engine.
+ */
+export const STUDIO_GOVERNANCE_PROTECTED_PATHS = [
+  "projects/sfia-studio/sfia-v3-framing/",
+  "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
+  "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
+  "projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md",
+  "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
+] as const;
+
+/**
+ * Effective Product write protection = sandbox floor ∪ Studio governance set.
+ * Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` is intentionally NOT included.
+ */
+export const STUDIO_PRODUCT_PROTECTED_PATHS = [
+  ...SANDBOX_DEFAULT_PROTECTED_PATHS,
+  ...STUDIO_GOVERNANCE_PROTECTED_PATHS,
+] as const;
+
+/**
+ * Classify a repository-relative path under Studio Product write protection.
+ * Returns the matched protected entry, or null when ordinary (not protected).
+ * Invalid / hostile paths return a synthetic "INVALID_PATH" hit (fail-closed).
+ */
+export function classifyStudioProductProtectedPath(
+  repoRelativePath: unknown,
+): string | null {
+  const canonical = normalizeCanonicalPath(repoRelativePath);
+  if (!canonical.ok) return "INVALID_PATH";
+  const normalized = canonical.normalized;
+  for (const prot of STUDIO_PRODUCT_PROTECTED_PATHS) {
+    if (pathMatchesAllowlistPrefix(normalized, prot)) return prot;
+  }
+  return null;
+}
+
+/**
+ * Studio Product write-path gate (protection only — no allowlist inventiveness).
+ * Ordinary non-protected paths are allowed at this layer; mission scope / EC
+ * still decide what may actually be written.
+ */
+export function evaluateStudioProductWritePath(input: {
+  readonly path: unknown;
+}):
+  | { readonly allowed: true; readonly normalized: string }
+  | {
+      readonly allowed: false;
+      readonly reason: Exclude<
+        Extract<SandboxPathDecision, { allowed: false }>["reason"],
+        "not_allowlisted" | "arbitrary_command" | "git_write" | "branch_mismatch" | "head_mismatch" | "observed_missing"
+      >;
+      readonly hit?: string;
+    } {
+  const canonical = normalizeCanonicalPath(input.path);
+  if (!canonical.ok) {
+    return { allowed: false, reason: canonical.reason };
+  }
+  const hit = classifyStudioProductProtectedPath(canonical.normalized);
+  if (hit != null) {
+    return { allowed: false, reason: "protected", hit };
+  }
+  return { allowed: true, normalized: canonical.normalized };
+}
+
 const DANGEROUS_ENCODED = /%(?:00|2e|2f|5c)/i;
 
 function decodePercentOnce(raw: string): CanonicalPathResult {
@@ -138,7 +211,7 @@ export function evaluateSandboxPath(input: {
   }
   const normalized = canonical.normalized;
   const protectedPaths = [
-    ...DEFAULT_PROTECTED,
+    ...SANDBOX_DEFAULT_PROTECTED_PATHS,
     ...(input.protectedPaths ?? []),
   ];
   for (const p of protectedPaths) {
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
index f16739a8..d7d89ac9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -92,10 +92,15 @@ export {
   validateUntrustedProviderResult,
 } from "./domain/providerBoundary";
 export {
+  classifyStudioProductProtectedPath,
   evaluateSandboxMutationGuards,
   evaluateSandboxPath,
+  evaluateStudioProductWritePath,
   normalizeCanonicalPath,
   pathMatchesAllowlistPrefix,
+  SANDBOX_DEFAULT_PROTECTED_PATHS,
+  STUDIO_GOVERNANCE_PROTECTED_PATHS,
+  STUDIO_PRODUCT_PROTECTED_PATHS,
 } from "./domain/sandboxContract";
 export type {
   CanonicalPathResult,

```

#### CP4 RESUME — tests diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
index 0bc230b3..a8cb3f73 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
@@ -3,13 +3,49 @@
  */
 import { describe, expect, it } from "vitest";
 import {
+  classifyStudioProductProtectedPath,
   evaluateSandboxMutationGuards,
   evaluateSandboxPath,
+  evaluateStudioProductWritePath,
   pathMatchesAllowlistPrefix,
+  STUDIO_GOVERNANCE_PROTECTED_PATHS,
 } from "@/lib/oa/execution-run/domain/sandboxContract";
 import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
 
 describe("D2D2-08 sandbox contract fixture", () => {
+  it("CP4-02 Option C — Studio Product write protection composes sandbox floor + governance set", () => {
+    expect(STUDIO_GOVERNANCE_PROTECTED_PATHS.length).toBeGreaterThanOrEqual(5);
+    expect(
+      classifyStudioProductProtectedPath("projects/sfia-studio/app/example.ts"),
+    ).toBeNull();
+    expect(evaluateStudioProductWritePath({ path: "projects/sfia-studio/app/x.ts" }).allowed).toBe(
+      true,
+    );
+    expect(classifyStudioProductProtectedPath("method/x.md")).toBe("method/");
+    expect(
+      classifyStudioProductProtectedPath(
+        "projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md",
+      ),
+    ).toBe("projects/sfia-studio/sfia-v3-framing/");
+    expect(
+      classifyStudioProductProtectedPath(
+        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
+      ),
+    ).toBe(
+      "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
+    );
+    expect(
+      classifyStudioProductProtectedPath(
+        "projects/sfia-studio/convergence/other-note.md",
+      ),
+    ).toBeNull();
+    expect(
+      evaluateStudioProductWritePath({
+        path: "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
+      }).allowed,
+    ).toBe(false);
+  });
+
   it("deny-by-default and protects sensitive paths", () => {
     expect(
       evaluateSandboxPath({

```

#### CP4 RESUME — docs truth-sync diff
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 75b2974e..47e3a2ec 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,11 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 04 RESUMED** | 2026-10-01 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE CORRECTION PASS 04 RESUMED AFTER MORRIS DECISION** · SAME MACRO · Cycle **8** · EVOL · CRITICAL · CKC `ckc:studio:delivery` · Architecture **D-ER-01…D-ER-15 CONSUMED** · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` · branche `delivery/sfia-studio-generic-execution-review-result-convergence-01` · entry STOP handoff `2daf0dc3284d4188c2893eb429dcf429e598834f` / blob `4b91cc6fb5e402585001ec6ea609d561d1fb8abc` · entry CP3 `47e7e593…` · **MD-CP4-01 CONSUMED** (Proposal sealedExecutionBasis Product carrier) · **MD-CP4-02 OPTION C CONSUMED** (sandbox floor ∪ STUDIO_GOVERNANCE_PROTECTED_PATHS) · CP4-01 WIRED · CP4-02 IMPLEMENTED · preuve **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · durableLocalWriteSeal = transitional domain seam only · next = ChatGPT Critical Review Pass 04 resume → Morris GO commit/push/PR · runtime v3 = **NON ADOPTED** · **≠** INTEGRATED ON MAIN · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 04** | 2026-10-01 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE CORRECTION PASS 04** · SAME MACRO · Cycle **8** · EVOL · CRITICAL · CKC `ckc:studio:delivery` · Architecture **D-ER-01…D-ER-15 CONSUMED** · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` · branche `delivery/sfia-studio-generic-execution-review-result-convergence-01` · entry handoff CP3 `47e7e5930980cc5aa2172ec70a14077aaff74629` / blob `dba5d65df9cc289fe22a3e10849744d0e8367006` · **STOP — MORRIS DECISION REQUIRED** (CP4-02) then **SUPERSEDED** by Pass 04 RESUMED tip after MD-CP4-01/MD-CP4-02 · historical STOP tip retained · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 03** | 2026-10-01 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE CORRECTION PASS 03** · SAME MACRO · Cycle **8** · EVOL · CRITICAL · CKC `ckc:studio:delivery` · Architecture **D-ER-01…D-ER-15 CONSUMED** · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` · branche `delivery/sfia-studio-generic-execution-review-result-convergence-01` · entry handoff Pass 02 régularisé `3a9dc0acf3559fb25978a80331078b49a4887aaa` / blob `52d991da297e406eee25b84c67dc4af8b6e68cdf` · CP3-01…CP3-09 closed · preuve then claimed **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ChatGPT Critical Review CP3 = **NOT READY** (Product seal injection + incomplete protected paths + Living Ref CURRENT drift) · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · corrections : Product decideTrajectory durableLocalWriteSeal (no Decision.save fabrication) · protected path fail-closed via SFIA_DEFAULT_PROTECTED_PATHS · nominal Git HEAD binding · durable VerifiedChangeSet digest binding · REO Attempt/EC/repo/base binding · missing REO blocks PASS · nominal W3-C enables execution_review_* tools · ReviewItem integrity · front-door oracle honesty · debt : docs_write bridges / retention GC / Git promotion / NoteLite REAL · superseded as tip by Correction Pass 04 · runtime v3 = **NON ADOPTED** · **≠** INTEGRATED ON MAIN · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 02** | 2026-10-01 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE CORRECTION PASS 02** · SAME MACRO · Cycle **8 — Delivery / implémentation** · EVOL · CRITICAL · CKC `ckc:studio:delivery` / `ckc/08-delivery-implementation.md` · Architecture **D-ER-01…D-ER-15 CONSUMED** (no redesign) · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` · branche locale `delivery/sfia-studio-generic-execution-review-result-convergence-01` · entry handoff Correction Pass 01 Critical Review `d72306051421f48316c2412002d057d4e730a2e7` · CP2-01…CP2-10 closed · preuve **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · capacité = **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · NoteLite PAUSED · READY FOR REAL **NO** · corrections : authorized generic local-write from durable DecisionBasis (≠ Product write taxonomy) · NodeLocalGitStatusDiffPort Git delta (no full-repo scan) · native Cursor REO only (no Studio synthesis) · Verification Evidence `ev:execution-review:*` in same RB → ContractResult coherence · Nora actual `execution_review_*` tool calls · Result Surface real fields · Pilot `w2ReadExecutionReviewItemAction` · mounted scheduled continue + remount (no abandon counter) · debt acceptable : docs_write bridge / retention GC / Git promotion / NoteLite REAL · next = ChatGPT Critical Review Pass 02 → Morris GO commit/push/PR · runtime v3 = **NON ADOPTED** · **≠** INTEGRATED ON MAIN · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 delivery candidate** | 2026-09-29 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE DELIVERY CANDIDATE** · Cycle **8** · Correction Pass 01 · preuve then claimed DETERMINISTIC PRODUCT E2E · superseded as tip by Correction Pass 02 after ChatGPT Critical Review NOT READY (handoff `d7230605…`) · historical tip retained · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
 | **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-ARCHITECTURE-01 truth-sync** | 2026-09-29 — **GENERIC EXECUTION / REVIEW / RESULT — ARCHITECTURE TRUTH-SYNC** · Cycle **6 — Architecture technique** · DOC / EVOL · CRITICAL · CKC `cyc:technical-architecture` / `ckc/06-architecture-technique.md` (**CONTENT VALIDATED BY MORRIS** · guidance only · **≠** execution authority) · Morris decisions **D-ER-01…D-ER-15 ADOPTED** (2026-09-29) · **CURRENT main** `origin/main` @ `6f47f74dc9b515c4c79624b21772223ba02c76cd` · capacité **PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01** = **INTEGRATED ON MAIN** via PR **#540** merge `6f47f74d…` (head `47fcab2b…`) · campagne **NoteLite bounded REAL** = **RÉALISÉE AT TESTED SCOPE** puis **PAUSED** à ce point (correction governed **non relancée** · cycle NoteLite **non finalisé**) · findings bornés : EC→Attempt REAL→Cursor REAL→terminal succeeded→durable Evidence/RB/CE→Product Resolution→Nora post-Evidence→Nora conversationnelle **sans transfer d’IDs Pilote** · **NOT_PROVEN** honesty préservée · gap nominal post-terminal / UI « qualification en cours » + clic « Recharger résultat produit » = **HIGH-CONFIDENCE ARCHITECTURAL CAUSE** (poll UI ≤8 / pas de worker autonome) **≠ PROVEN INSTANCE ROOT CAUSE** · **ADOPTED TARGET** = un modèle Product d’exécution **générique** · **toutes** taxonomies de tâche Product spécialisées (`docs_write`, `code_write`, `read`, `read_only`, …) = **RETIRE FROM PRODUCT MODEL** · capabilities/effects techniques = **enforcement-only possibles** · **interdit** inventer `generic_read` / `generic_write` / `generic_code` comme catégories Product · isolated Git worktree = **KEEP** · Cursor Generalist = **KEEP** · CursorExecutionReport = **CLAIM KEEP** · Generic Execution Review Material = **TARGET** · Native Review End Of = **TARGET** (harvest sémantique · **≠** import transport `.tmp-sfia-review` / `sfia/review-handoff`) · Studio VerifiedChangeSet = **TARGET** · Product Resolution = **KEEP / COMPLETE** · Continuity Projection + Reconciler = **KEEP** (Reconciler = owner progression déterministe) · Nora Deep Review = **TARGET** sur shared cognitive core (**≠** second Nora) · Result Surface = **KEEP / COMPLETE** · Review Material retention HOT→PRUNED = **TARGET** · document architecture = `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` (**ADOPTED TARGET BY MORRIS — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION**) · ancienne hypothèse **5 lots Delivery** = **NOT ADOPTED** · **DELIVERY SLICING = TBD AFTER ARCHITECTURE REVIEW** · future Delivery = **DISTINCT Morris GO** · future REAL / READY FOR REAL = **DISTINCT Morris GO** · **READY FOR REAL = NO** · runtime v3 = **NON ADOPTED** · **≠** code Product modifié ce cycle · **≠** Delivery authorized · **≠** NoteLite finalized · **≠** full E2E REAL proven · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** · **next** = ChatGPT Critical Review of architecture truth-sync → puis seulement Delivery slicing design |
 | **Timestamp maintenance NATIVE-EXECUTION-LOOP-CONVERGENCE-01 post-merge verification** | 2026-09-26 — **NATIVE EXECUTION LOOP CONVERGENCE — POST-MERGE VERIFICATION / ROADMAP TRUTH-SYNC / CAPITALISATION** · Macro **NATIVE-EXECUTION-LOOP-CONVERGENCE-01** · **SAME MACRO / NO MICRO-CYCLE** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · Morris GO **POST-MERGE / DOCUMENTARY TRUTH-SYNC / CAPITALISATION** **CONSUMED** (local docs only · **≠** project commit/push/PR) · protected path authorization = Convergence Roadmap + capitalisation asset under `convergence/**` **ONLY** · Build Doctrine / C1 / framing / method / prompts = **READ ONLY** · PR **#527 MERGED** · product head `5a05a2a7082bc140393f18647a56f1ed23cef73c` · merge/main `e486e81f2443bb9837b4bbdc1967cf5d1368f4d9` · pre-merge CI **#614** run `36261815679` **SUCCESS / Required Gate PASS** · post-merge CI **#615** run `36262627727` **SUCCESS / Required Gate PASS** · Product head→merge app parity **ZERO** · capacité **NATIVE EXECUTION LOOP CONVERGENCE** = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · proof = **DETERMINISTIC / LOCAL + PR/CI INTEGRATION ONLY** · **ZERO NEW REAL** · runtime v3 = **NON ADOPTED** · Product Completion = historical **COMPLETE/CLOSED** (**≠** newly completed by NELC) · remaining governed debts = **D1** optional first-class typed EC input bridge · optional mid-turn repository SHA stamp · future bounded REAL under **distinct Morris GO** · **next activity** = MealFlow semantic reservation campaign (**observation / qualification** · **NOT STARTED / NOT AUTHORIZED** by this documentary sync) · **NEXT MACRO CAPABILITY** = **NOT YET DETERMINED** · future bounded REAL of native loop = **OPEN GOVERNED PROOF OPTION / DISTINCT MORRIS GO** (**≠** auto-selected next capability) · **≠** READY FOR REAL · **≠** Product READY · **≠** runtime v3 ADOPTED · repository truth = **RESOLVE FROM GIT / PR evidence** · capitalisation asset = `projects/sfia-studio/convergence/sfia-studio-native-execution-loop-convergence-01-capitalisation.md` (**LOCAL DOCUMENTARY CANDIDATE** until distinct Git integration GO) |
 | **Timestamp maintenance CYCLE-RESERVATION-PILOTING-01 post-merge verification** | 2026-09-25 — **CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — POST-MERGE VERIFICATION / ROADMAP TRUTH-SYNC** · Macro **CYCLE-RESERVATION-PILOTING-01** · Cycle **14** · Post-merge · DOC · CRITICAL · Morris GO **POST-MERGE DOCUMENTARY TRUTH-SYNC — ROADMAP PROTECTED PATH ONLY** **CONSUMED** · PR **#518 MERGED** · product head `f0874ec05fec4237a6f39311b90c9233debce5f5` · merge/main `29f1597951bd6e4d779cc728f46396e28b8f5aa0` · PR CI **#595** run `36100845339` **SUCCESS / Required Gate PASS** · post-merge CI **#596** run `36101841229` **SUCCESS / Required Gate PASS** · capacité **CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING** = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · same-macro construction reserves = **ZERO** at reviewed scope · protected Roadmap truth-sync = local documentary candidate under this cycle until Git integration · Product Completion = historical **COMPLETE/CLOSED** (**≠** newly completed) · Nora Cognitive Completion = **NOT COMPLETE** · global semantic Reservation quality = **NOT PROVEN** · READY FOR REAL global = **NO** · runtime v3 = **NON ADOPTED** · **next** = MealFlow semantic reservation campaign (**observation / qualification** · **NOT STARTED** by this documentary sync · **≠** new macro pre-authorized) · Git / PR evidence remains authoritative · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0d817466..2689802b 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -32,11 +32,32 @@
 - Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
 - REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).
 
-## Next macro
+## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (CURRENT MACRO — local candidate)
 
-`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` **local candidate** on branch `delivery/sfia-studio-product-continuity-shared-knowledge-01`. Capacité suivante après revue: **SprintBoard REAL re-proof bornée** (Gate Morris distinct).
+- **CURRENT MACRO** on branch `delivery/sfia-studio-generic-execution-review-result-convergence-01` · Correction Pass **04 RESUMED AFTER MORRIS DECISION** · **CLOSED FOR CRITICAL REVIEW**.
+- **CP4-01 WIRED** — Product carrier = Proposal `PresentedOptionSet.sealedExecutionBasis` → pursue HumanDecision → DecisionBasis → generic local-write (MD-CP4-01 consumed). MAIN front-door oracle does **not** inject `durableLocalWriteSeal`.
+- **CP4-02 OPTION C IMPLEMENTED** — Studio Product write protection = sandbox floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Build Doctrine / Roadmap / D-ER architecture / C1). No blanket `projects/sfia-studio/**` deny. No Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` as Product classifier.
+- Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
+- Historical: Correction Pass 04 STOP (Morris decision required on CP4-02) superseded by MD-CP4-01/MD-CP4-02 resume — see prior tip / handoff `2daf0dc3…`.
+- docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material) — exit when historical callers = 0.
+- `durableLocalWriteSeal` domain seam: **TRANSITIONAL** (isolated domain/tests only) — exit when GOVERNED trajectory Product carrier is retired or superseded; never browser/client.
+- NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
+- Retention GC / Git promotion: **NOT IMPLEMENTED**.
+- Next = ChatGPT Critical Review of Correction Pass 04 resume → Morris GO commit/push/PR (distinct).
 
-## Prior overlay retained
+### Historical — Correction Pass 04 STOP (superseded)
+
+Prior documentary tip recorded **STOP — MORRIS DECISION REQUIRED** (CP4-02) with CP4-01 SOURCE FOUND / NOT WIRED. Morris decisions MD-CP4-01 + MD-CP4-02 Option C consumed; this CURRENT section supersedes that STOP state.
+
+## Next / CURRENT REAL campaign
+
+NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this delivery macro.
+
+## Prior overlay retained — PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01
+
+`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` is **INTEGRATED ON MAIN** (historical). Prior tip wording « local candidate » is obsolete as CURRENT next macro.
+
+## Prior overlay retained — POST-EXECUTION
 
 `POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01` **local candidate** on branch `feat/sfia-studio-post-execution-handoff-01`. Capacité suivante après revue: **reprise SprintBoard REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL / END-TO-END REAL.
 
@@ -116,3 +137,11 @@
 | `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |
 
 No `retired-components-ledger.md` — zero components removed.
+
+### CP4 residual reserves (acceptable debt after resume)
+- docs_write compatibility bridges retained
+- Review Material GC/retention not implemented
+- Git promotion of reviewed candidate not implemented
+- NoteLite REAL re-proof deferred (Morris GO distinct)
+- Nora model/provider tuning deferred
+- `durableLocalWriteSeal` domain API transitional (tests/domain only — not Product front door)
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 56917ea5..6159c7ca 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,8 +1,8 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "6beb8cc369bd9b82eebee97b70309838373b3dfa",
-  "lastReviewedAt": "2026-09-27T18:42:24.911Z",
+  "lastReviewedCommit": "d4d986af5884b31b416374da3cb5e60757501f87",
+  "lastReviewedAt": "2026-10-01T22:00:20.000Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "2b33f2c9648004ec"
+      "sha256_16": "4059db411bb5a428"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "8fc11fd081bb37dc"
+      "sha256_16": "7c7596c841933c67"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "7f9b17310ec84156"
+      "sha256_16": "439b50db8e68633d"
     }
   ],
   "components": [

```

#### ALL MODIFIED `projects/sfia-studio` DIFF (full useful)
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
index 0bc230b3..a8cb3f73 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
@@ -3,13 +3,49 @@
  */
 import { describe, expect, it } from "vitest";
 import {
+  classifyStudioProductProtectedPath,
   evaluateSandboxMutationGuards,
   evaluateSandboxPath,
+  evaluateStudioProductWritePath,
   pathMatchesAllowlistPrefix,
+  STUDIO_GOVERNANCE_PROTECTED_PATHS,
 } from "@/lib/oa/execution-run/domain/sandboxContract";
 import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
 
 describe("D2D2-08 sandbox contract fixture", () => {
+  it("CP4-02 Option C — Studio Product write protection composes sandbox floor + governance set", () => {
+    expect(STUDIO_GOVERNANCE_PROTECTED_PATHS.length).toBeGreaterThanOrEqual(5);
+    expect(
+      classifyStudioProductProtectedPath("projects/sfia-studio/app/example.ts"),
+    ).toBeNull();
+    expect(evaluateStudioProductWritePath({ path: "projects/sfia-studio/app/x.ts" }).allowed).toBe(
+      true,
+    );
+    expect(classifyStudioProductProtectedPath("method/x.md")).toBe("method/");
+    expect(
+      classifyStudioProductProtectedPath(
+        "projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md",
+      ),
+    ).toBe("projects/sfia-studio/sfia-v3-framing/");
+    expect(
+      classifyStudioProductProtectedPath(
+        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
+      ),
+    ).toBe(
+      "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
+    );
+    expect(
+      classifyStudioProductProtectedPath(
+        "projects/sfia-studio/convergence/other-note.md",
+      ),
+    ).toBeNull();
+    expect(
+      evaluateStudioProductWritePath({
+        path: "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
+      }).allowed,
+    ).toBe(false);
+  });
+
   it("deny-by-default and protects sensitive paths", () => {
     expect(
       evaluateSandboxPath({
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
index e2a33f5e..63ce1cc9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
@@ -114,6 +114,17 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     code: "UNUSED",
     message: "unused",
   }),
+
+  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
+  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
   w2RehydrateProductOutcomeAction: vi.fn(),
 }));
 
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
index 55a912d3..347f7342 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
@@ -76,6 +76,17 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     code: "UNUSED",
     message: "unused",
   }),
+
+  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
+  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
 }));
 
 vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index 6bbdbec7..ac760a1e 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -97,6 +97,16 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     code: "UNUSED",
     message: "unused",
   }),
+  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
+  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
 }));
 
 vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
index 5e7e4182..05ecd154 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
@@ -56,6 +56,17 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     code: "UNUSED",
     message: "unused",
   }),
+
+  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
+  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
 }));
 
 vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
index 35203725..c4f3c6d6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -100,6 +100,17 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     code: "UNUSED",
     message: "unused",
   }),
+
+  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
+  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
   w2RehydrateProductOutcomeAction: vi.fn(),
 }));
 
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index aedc9e16..e9146307 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -109,6 +109,16 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
     code: "UNUSED",
     message: "unused",
   }),
+  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
+  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
 }));
 
 vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
index 1d517c31..892d5e5a 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
@@ -50,6 +50,20 @@ function emptyContext(
       completeness: null,
       preview: null,
     },
+    executionReview: {
+      kind: "EXECUTION_REVIEW_MATERIAL",
+      present: false,
+      completeness: null,
+      reviewMaterialId: null,
+      reviewItemCount: 0,
+      claimFactMismatch: false,
+      verificationStatus: null,
+      retentionState: null,
+      reviewEndOfPresent: false,
+      verifiedChangeSetPresent: false,
+      blockers: [],
+      reviewItemSummaries: [],
+    },
     evidence: {
       kind: "EVIDENCE",
       evidenceId: null,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 6d02f3f2..285417ea 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -40,6 +40,8 @@ import {
   w2ReconcileGovernedExecutionAction,
   w2RehydrateProductOutcomeAction,
   w2RematerializeDocsWriteEvidenceAction,
+  w2ResolveProductExecutionContextAction,
+  w2ReadExecutionReviewItemAction,
 } from "@/features/project-assistant/w2/actions";
 import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
 import type { RecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
@@ -367,6 +369,31 @@ export function TrajectorySurface({
   const [productEvidencePending, setProductEvidencePending] = useState(false);
   const [recoveryBinding, setRecoveryBinding] =
     useState<RecoveryExecutionBinding | null>(null);
+  /** CP2-06 — real Execution Review payload from Product Resolution. */
+  const [executionReview, setExecutionReview] = useState<{
+    present: boolean;
+    completeness: "FULL" | "PARTIAL" | null;
+    reviewItemCount: number;
+    claimFactMismatch: boolean;
+    verificationStatus: string | null;
+    reviewEndOfPresent: boolean;
+    verifiedChangeSetPresent: boolean;
+    blockers: readonly string[];
+    reviewItemSummaries: readonly {
+      itemId: string;
+      kind: string;
+      label: string;
+      logicalPath?: string;
+    }[];
+    attemptStatus: string | null;
+    contractResultVerdict: string | null;
+    noraRecommendation: string | null;
+  } | null>(null);
+  const [reviewItemPreview, setReviewItemPreview] = useState<{
+    itemId: string;
+    content: string | null;
+    label: string;
+  } | null>(null);
 
   /**
    * Continuity pass generation — invalidates in-flight subject/EC reads when a
@@ -1715,40 +1742,106 @@ export function TrajectorySurface({
       if (reconciled.postEvidence) {
         setPostEvidence(reconciled.postEvidence as never);
       }
+      // CP2-06 — load real Execution Review fields from Product Resolution.
+      if (proj.attemptId && reconciled.product) {
+        void w2ResolveProductExecutionContextAction({
+          projectId,
+          attemptId: proj.attemptId,
+        }).then((resolved) => {
+          if (!resolved.ok) return;
+          const er = resolved.context.executionReview;
+          setExecutionReview({
+            present: er.present,
+            completeness: er.completeness,
+            reviewItemCount: er.reviewItemCount,
+            claimFactMismatch: er.claimFactMismatch,
+            verificationStatus: er.verificationStatus,
+            reviewEndOfPresent: er.reviewEndOfPresent,
+            verifiedChangeSetPresent: er.verifiedChangeSetPresent,
+            blockers: er.blockers,
+            reviewItemSummaries: er.reviewItemSummaries,
+            attemptStatus: resolved.context.attempt?.status ?? null,
+            contractResultVerdict:
+              resolved.context.claimEvaluation.contractResultVerdict,
+            noraRecommendation:
+              resolved.context.postEvidence?.recommendationKind ?? null,
+          });
+        });
+      }
     },
-    [],
+    [projectId],
   );
 
   /**
    * Server-owned execute/continue — TrajectorySurface does not sequence
    * Select→Start→Complete→Materialize locally anymore.
+   *
+   * CP2-08 — schedule one-step continues with backoff while mounted and
+   * durable projection still requires continue. No total 120 abandonment.
+   * Reconciler keeps its own MAX_TRANSITIONS per call.
    */
+  const reconcileContinueTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
+    null,
+  );
+  const reconcileInFlightRef = useRef(false);
+  const reconcileMountedRef = useRef(true);
+  const runServerReconcileRef = useRef<
+    (intent: "execute" | "continue", stepIndex?: number) => Promise<void>
+  >(async () => {});
+
+  useEffect(() => {
+    reconcileMountedRef.current = true;
+    return () => {
+      reconcileMountedRef.current = false;
+      if (reconcileContinueTimerRef.current) {
+        clearTimeout(reconcileContinueTimerRef.current);
+        reconcileContinueTimerRef.current = null;
+      }
+    };
+  }, []);
+
   const runServerReconcile = useCallback(
-    async (intent: "execute" | "continue") => {
+    async (intent: "execute" | "continue", stepIndex = 0) => {
       if (!contract) return;
+      if (reconcileInFlightRef.current && intent === "continue") return;
+      reconcileInFlightRef.current = true;
       setProductEvidencePending(true);
-      let reconciled = await w2ReconcileGovernedExecutionAction({
-        projectId,
-        executionContractId: contract.executionContractId,
-        intent,
-      });
-      // Bounded poll while Attempt still running (async REAL / Fake pending).
-      for (let i = 0; i < 8; i++) {
-        if (!reconciled.ok) break;
-        if (reconciled.projection.stage !== "RUNNING") break;
-        await yieldBrowserPaint();
-        reconciled = await w2ReconcileGovernedExecutionAction({
+      try {
+        const reconciled = await w2ReconcileGovernedExecutionAction({
           projectId,
           executionContractId: contract.executionContractId,
-          intent: "continue",
+          intent,
         });
+        applyReconcileResult(reconciled);
+        onDurableFactsChanged?.();
+        if (!reconciled.ok || !reconcileMountedRef.current) return;
+        const {
+          shouldContinueReconcileNominally,
+          nextReconcileContinueDelayMs,
+        } = await import(
+          "@/features/project-assistant/w2/reconcileContinuePolicy"
+        );
+        if (!shouldContinueReconcileNominally(reconciled.projection)) return;
+        if (reconcileContinueTimerRef.current) {
+          clearTimeout(reconcileContinueTimerRef.current);
+        }
+        const delay = nextReconcileContinueDelayMs(stepIndex + 1);
+        reconcileContinueTimerRef.current = setTimeout(() => {
+          reconcileContinueTimerRef.current = null;
+          if (!reconcileMountedRef.current) return;
+          void runServerReconcileRef.current("continue", stepIndex + 1);
+        }, delay);
+      } finally {
+        reconcileInFlightRef.current = false;
       }
-      applyReconcileResult(reconciled);
-      onDurableFactsChanged?.();
     },
     [applyReconcileResult, contract, projectId, onDurableFactsChanged],
   );
 
+  useEffect(() => {
+    runServerReconcileRef.current = runServerReconcile;
+  }, [runServerReconcile]);
+
 
   const executeAsPilot = useCallback(async () => {
     if (continuityMutationBlocked) return;
@@ -1941,6 +2034,41 @@ export function TrajectorySurface({
    */
   const legacyDecisionCtaVisible = decisionWorkflowMode === "legacy_cta";
 
+  /**
+   * CR-04 — On remount / reload, if durable Attempt still needs deterministic
+   * progression, auto-trigger Reconciler continue (no nominal Recharger click).
+   * Budget exhaust of a prior mount session must not abandon the workflow.
+   */
+  useEffect(() => {
+    if (!contract?.executionContractId) return;
+    if (busy !== null) return;
+    let cancelled = false;
+    void (async () => {
+      try {
+        const { shouldAutoResumeReconcileOnRemount } = await import(
+          "@/features/project-assistant/w2/reconcileContinuePolicy"
+        );
+        const { w2DeriveGovernedExecutionContinuityAction: deriveContinuity } =
+          await import("@/features/project-assistant/w2/actions");
+        if (typeof deriveContinuity !== "function") return;
+        const derived = await deriveContinuity({
+          projectId,
+          executionContractId: contract.executionContractId,
+        });
+        if (cancelled || !derived.ok) return;
+        if (!shouldAutoResumeReconcileOnRemount(derived.projection)) return;
+        await runServerReconcile("continue");
+      } catch {
+        // Remount resume must never crash UI when action mocks omit the export.
+      }
+    })();
+    return () => {
+      cancelled = true;
+    };
+    // Mount / contract identity only — remount resume, not every projection tick.
+    // eslint-disable-next-line react-hooks/exhaustive-deps
+  }, [contract?.executionContractId, projectId]);
+
   useEffect(() => {
     if (!onProposalSubjectOwnershipChange) return;
     if (continuityReadsUnresolved) {
@@ -3423,6 +3551,133 @@ export function TrajectorySurface({
               Recharger résultat produit (durable)
             </button>
           ) : null}
+          {/* CP2-06 — Generic Execution Review from Product Resolution (real data). */}
+          {productOutcome && executionReview?.present ? (
+            <div
+              className={styles.blockBody}
+              data-testid="w3b-execution-review-summary"
+            >
+              <p className={styles.productHeadline}>Matière de revue</p>
+              <dl className={styles.facts} data-testid="w3b-execution-review-facts">
+                <div>
+                  <dt>Statut technique</dt>
+                  <dd data-testid="w3b-review-attempt-status">
+                    {executionReview.attemptStatus ?? "—"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Qualification produit</dt>
+                  <dd data-testid="w3b-review-contract-result">
+                    {executionReview.contractResultVerdict ??
+                      productOutcome.outcome}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Cursor Report</dt>
+                  <dd data-testid="w3b-review-cursor-report">présent</dd>
+                </div>
+                <div>
+                  <dt>Cursor Review End Of</dt>
+                  <dd data-testid="w3b-review-reo">
+                    {executionReview.reviewEndOfPresent
+                      ? "présent"
+                      : "manquant"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Vérification Studio</dt>
+                  <dd data-testid="w3b-review-verification-status">
+                    {executionReview.verificationStatus ?? "UNAVAILABLE"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>VerifiedChangeSet</dt>
+                  <dd data-testid="w3b-review-vcs">
+                    {executionReview.verifiedChangeSetPresent
+                      ? "présent"
+                      : "absent"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>CLAIM / FACT mismatch</dt>
+                  <dd data-testid="w3b-review-mismatch">
+                    {executionReview.claimFactMismatch ? "oui" : "non"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Complétude</dt>
+                  <dd data-testid="w3b-review-completeness">
+                    {executionReview.completeness ?? "—"} ·{" "}
+                    {executionReview.reviewItemCount} items
+                  </dd>
+                </div>
+              </dl>
+              {executionReview.blockers.length > 0 ? (
+                <ul data-testid="w3b-review-blockers">
+                  {executionReview.blockers.map((b) => (
+                    <li key={b}>{b}</li>
+                  ))}
+                </ul>
+              ) : null}
+              {executionReview.noraRecommendation ? (
+                <p data-testid="w3b-review-nora">
+                  Nora : {executionReview.noraRecommendation}
+                </p>
+              ) : null}
+              <ul data-testid="w3b-review-items">
+                {executionReview.reviewItemSummaries.map((item) => (
+                  <li key={item.itemId}>
+                    <span>
+                      [{item.kind}] {item.label}
+                      {item.logicalPath ? ` — ${item.logicalPath}` : ""}
+                    </span>{" "}
+                    <button
+                      type="button"
+                      className={styles.secondaryAction}
+                      data-testid={`w3b-review-item-open-${item.itemId}`}
+                      onClick={() => {
+                        if (!attempt?.attemptId) return;
+                        void w2ReadExecutionReviewItemAction({
+                          projectId,
+                          attemptId: attempt.attemptId,
+                          itemId: item.itemId,
+                        }).then((r) => {
+                          if (!r.ok) return;
+                          setReviewItemPreview({
+                            itemId: r.itemId,
+                            content: r.content,
+                            label: r.label,
+                          });
+                        });
+                      }}
+                    >
+                      Voir
+                    </button>
+                  </li>
+                ))}
+              </ul>
+              {reviewItemPreview ? (
+                <pre
+                  data-testid="w3b-review-item-content"
+                  className={styles.blockBody}
+                >
+                  {reviewItemPreview.label}
+                  {"\n"}
+                  {reviewItemPreview.content ?? "(contenu indisponible)"}
+                </pre>
+              ) : null}
+            </div>
+          ) : productOutcome ? (
+            <div
+              className={styles.blockBody}
+              data-testid="w3b-execution-review-summary"
+            >
+              <p className={styles.productHeadline}>Matière de revue</p>
+              <p data-testid="w3b-execution-review-hint">
+                Aucune matière de revue générique pour cet Attempt.
+              </p>
+            </div>
+          ) : null}
         </section>
       ) : null}
 
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
index 6151592b..a184deb5 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
@@ -88,6 +88,33 @@ export async function ingestDocsWriteArtifactEvidence(
     storageMode = "external_payload_ref";
     durableArtifactAbsolutePath = persisted.artifactAbsolutePath;
     durableCursorReportAbsolutePath = persisted.cursorReportAbsolutePath;
+
+    // Dual-write Generic Execution Review Material (D-ER-04) — transitional bridge.
+    // docs_write persist remains compatibility; generic path is the nominal target.
+    if (input.cursorReport) {
+      const { finalizeGenericExecutionReview } = await import(
+        "./finalizeGenericExecutionReview"
+      );
+      await finalizeGenericExecutionReview({
+        refsRoot,
+        projectId: input.projectId,
+        cycleInstanceId: input.cycleInstanceId,
+        executionContractId: input.executionContractId,
+        attemptId: input.executionAttemptId,
+        repositoryRef: input.cursorReport.repositoryRef,
+        baseSha: input.cursorReport.baseSha,
+        cursorReport: input.cursorReport,
+        extraReviewItems: [
+          {
+            kind: "artifact",
+            logicalPath: input.targetPath,
+            label: `artifact: ${input.targetPath}`,
+            bytes: input.artifactBytes,
+            summary: input.digest,
+          },
+        ],
+      });
+    }
   }
 
   const registered = await input.evidenceReviewServices.registerEvidence.execute({
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts b/projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
index a3faf6ae..cafa3fd2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
@@ -199,6 +199,12 @@ export function resolveProductEvidenceRefsRoot(
 ): string {
   const trimmed = explicit?.trim();
   if (trimmed) return trimmed;
+  const fromEnv =
+    typeof process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT === "string" &&
+    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
+      ? process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
+      : null;
+  if (fromEnv) return fromEnv;
   const db =
     typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
     process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
index d4fae268..5d3b4a96 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -172,6 +172,11 @@ export type AnalyzePostEvidenceOptions = {
    * `buildCkcCognitivePromptSection` — never raw package paths for Pilote.
    */
   readonly ckcPromptSection?: string | null;
+  /**
+   * D-ER-09 — opt-in bounded Execution Review tools for Deep Review.
+   * Default false preserves Fake complete-only post_execution path.
+   */
+  readonly enableExecutionReviewTools?: boolean;
 };
 
 function buildPostEvidenceSystemPrompt(
@@ -193,9 +198,8 @@ export async function analyzePostEvidenceWithProvider(
   options?: AnalyzePostEvidenceOptions,
 ): Promise<PostEvidenceAnalysisResult> {
   // Shared Nora cognitive CORE (Agents Runner) — mode=post_execution.
-  // Same seam as conversation (runNoraCognitiveTurn → runNoraCognitiveCore).
-  // No Memory B / MW5 / hosted search / tools — applied by core mode defaults.
-  // This module must NOT be imported by client presentation (use postEvidenceNoraSentinels).
+  // Deep Review tools are opt-in via options (keeps Fake complete path stable).
+  // No Memory B / MW5 / hosted search — applied by core mode defaults.
   const completion = await runNoraCognitiveCompletion({
     mode: "post_execution",
     system: buildPostEvidenceSystemPrompt(options?.ckcPromptSection),
@@ -203,6 +207,12 @@ export async function analyzePostEvidenceWithProvider(
     maxChars: 4000,
     projectId: facts.projectId,
     correlationId: `cor:w3c-post-evidence:${facts.attemptId}`,
+    executionReviewTools: options?.enableExecutionReviewTools
+      ? {
+          projectId: facts.projectId,
+          attemptId: facts.attemptId,
+        }
+      : null,
   });
   if (!completion.ok) {
     return {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 27355ff0..a2b14fdd 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -234,6 +234,13 @@ export async function w2DecideTrajectoryAction(input: {
     };
   }
 
+  /**
+   * CP3-01 — never accept durableLocalWriteSeal / targetPath / scopeIn from the
+   * browser. Seal is stamped only by decideTrajectory when server-owned facts
+   * are supplied by a domain/server caller (Proposal subject path, or an
+   * internal orchestration that already holds durable Product facts).
+   * Client operationKind cannot manufacture local-write authority.
+   */
   return decideTrajectory({
     oa: runtime.oa,
     projectId: input.projectId,
@@ -825,6 +832,85 @@ export async function w2ResolveProductExecutionContextAction(input: {
   });
 }
 
+/**
+ * CP2-07 — Pilot bounded ReviewItem read (server-owned contentRef).
+ * Client may send ONLY projectId + attemptId + itemId.
+ */
+export async function w2ReadExecutionReviewItemAction(input: {
+  projectId: string;
+  attemptId: string;
+  itemId: string;
+}): Promise<
+  | {
+      ok: true;
+      itemId: string;
+      kind: string;
+      label: string;
+      logicalPath: string | null;
+      content: string | null;
+      completeness: "FULL" | "PARTIAL";
+      digest: string | null;
+      claimFactMismatch: boolean;
+      verificationStatus: string;
+      reviewEndOfPresent: boolean;
+    }
+  | { ok: false; code: string; message: string }
+> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles.",
+    };
+  }
+  // Confirm Attempt belongs to Project via Product Resolution (no parallel SoT).
+  const resolved = await resolveProductExecutionContext({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    query: { kind: "byAttemptId", attemptId: input.attemptId },
+  });
+  if (!resolved.ok) {
+    return {
+      ok: false,
+      code: resolved.code,
+      message: resolved.message,
+    };
+  }
+  if (resolved.context.attempt?.attemptId !== input.attemptId) {
+    return {
+      ok: false,
+      code: "EXECUTION_REVIEW_ATTEMPT_PROJECT_MISMATCH",
+      message: "Attempt n'appartient pas au Project — fail-closed.",
+    };
+  }
+
+  const { readBoundExecutionReviewItem } = await import(
+    "@/features/project-assistant/f3/readBoundExecutionReviewItem"
+  );
+  const read = readBoundExecutionReviewItem({
+    projectId: input.projectId,
+    attemptId: input.attemptId,
+    itemId: input.itemId,
+  });
+  if (!read.ok) {
+    return { ok: false, code: read.code, message: read.message };
+  }
+  return {
+    ok: true,
+    itemId: read.item.itemId,
+    kind: read.item.kind,
+    label: read.item.label,
+    logicalPath: read.item.logicalPath ?? null,
+    content: read.content,
+    completeness: read.completeness,
+    digest: read.digest,
+    claimFactMismatch: read.claimFactMismatch,
+    verificationStatus: read.verificationStatus,
+    reviewEndOfPresent: read.reviewEndOfPresent,
+  };
+}
+
 export async function w2ReadProjectHistoryAction(input: {
   projectId: string;
 }): Promise<ReadW2ProjectHistoryResult> {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
index ee320048..c316401b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
@@ -45,9 +45,14 @@ import {
   PROPOSAL_SUBJECT_PURSUE_REF,
   PROPOSAL_SUBJECT_REFUSE_REF,
 } from "./proposalSubjectOptions";
+import {
+  BOUNDED_OPTION_REF,
+  GOVERNED_OPTION_REF,
+} from "./trajectoryOptions";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
 import { resolveCurrentNoraTrajectoryRecommendation } from "./resolveCurrentNoraTrajectoryRecommendation";
+import { isRepositorySourceRef } from "@/lib/oa/execution-contract";
 import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";
 import type { F2ProposalStatus } from "../f2/types";
 import {
@@ -164,6 +169,19 @@ export type DecideTrajectoryInput = {
   readonly candidateVersion?: number | null;
   readonly epistemicRefs?: readonly string[];
   readonly reservesText?: string | null;
+  /**
+   * CP2-01 — optional durable local-write mission seal for GOVERNED/BOUNDED.
+   * Stamped onto DecisionBasis.executionBasis (targetPath / scopeIn /
+   * reversibilityExpectation). NOT a Product write taxonomy (not docs_write).
+   * Never invents HOW — only seals WHAT paths + reversibility facts.
+   */
+  readonly durableLocalWriteSeal?: {
+    readonly targetPath?: string;
+    readonly scopeIn: readonly string[];
+    readonly reversibilityExpectation: "reversible";
+    readonly objective?: string;
+    readonly expectedOutputs?: readonly string[];
+  } | null;
   /** Hostile client fields — never trusted. */
   readonly canActAsMorris?: unknown;
   readonly claimedAuthorityLevel?: unknown;
@@ -590,15 +608,53 @@ export async function decideTrajectory(
           optionSetDigest,
         },
         executionBasis: {
-          objective: live.context.objective,
+          objective:
+            input.durableLocalWriteSeal?.objective?.trim() ||
+            live.context.objective,
           scope: selected.intent,
-          expectedOutcome: `Trajectoire décidée: ${selected.label}`,
+          expectedOutcome:
+            input.durableLocalWriteSeal?.expectedOutputs?.[0] ??
+            `Trajectoire décidée: ${selected.label}`,
+          expectedOutputs: input.durableLocalWriteSeal?.expectedOutputs
+            ? [...input.durableLocalWriteSeal.expectedOutputs]
+            : undefined,
           reservations: input.reservesText?.trim()
             ? [input.reservesText.trim()]
             : [...selected.reservations],
           stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
           cycleTypeId: undefined,
           requestedOperation: `w2:decide-trajectory:${input.selectedOptionRef}`,
+          // CP2-01 — seal durable local-write WHAT facts when GOVERNED/BOUNDED
+          // provides a bounded path perimeter (NOT docs_write Product taxonomy).
+          ...(input.durableLocalWriteSeal &&
+          (input.selectedOptionRef === GOVERNED_OPTION_REF ||
+            input.selectedOptionRef === BOUNDED_OPTION_REF)
+            ? {
+                targetPath: input.durableLocalWriteSeal.targetPath?.trim()
+                  ? input.durableLocalWriteSeal.targetPath.trim()
+                  : undefined,
+                scopeIn: [
+                  ...new Set(
+                    [
+                      ...(input.durableLocalWriteSeal.targetPath
+                        ? [input.durableLocalWriteSeal.targetPath.trim()]
+                        : []),
+                      ...input.durableLocalWriteSeal.scopeIn.map((s) =>
+                        s.trim(),
+                      ),
+                    ].filter(
+                      (p) =>
+                        p.length > 0 &&
+                        isRepositorySourceRef(p) &&
+                        !p.includes(".."),
+                    ),
+                  ),
+                ],
+                reversibilityExpectation: "reversible" as const,
+                // Explicitly NOT docs_write — generic local-write technical effect.
+                intentKind: undefined,
+              }
+            : {}),
         },
       };
 
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
index 091a13c5..b762c321 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
@@ -23,21 +23,34 @@
 
 import type { DecisionBasis } from "@/lib/oa/decision";
 import { isRepositorySourceRef } from "@/lib/oa/execution-contract";
+import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
 import {
   buildActualExecutionWork,
+  buildProductQualifiedLocalWriteWork,
   isActualExecutionOperationKind,
   isHighRiskPolicyOnlyOperationKind,
   type ActualExecutionWork,
-  type W3ACanonicalActualOperationKind,
 } from "./w3aActualExecutionWork";
 import type { EffectQualificationFailure } from "./w3aQualifiedExecutionEffects";
 import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
+import { PROPOSAL_SUBJECT_PURSUE_REF } from "./proposalSubjectOptions";
 import {
   BOUNDED_OPTION_REF,
   CLARIFY_OPTION_REF,
   GOVERNED_OPTION_REF,
 } from "./trajectoryOptions";
 
+/**
+ * CP4-02 Option C — Product local-write protection via sandbox policy composition
+ * (SANDBOX_DEFAULT_PROTECTED_PATHS ∪ STUDIO_GOVERNANCE_PROTECTED_PATHS).
+ * No Campus360/CT SFIA_DEFAULT_PROTECTED_PATHS. No parallel list in this module.
+ * Returns the protected entry hit, or null when path is ordinary.
+ */
+export function classifyProtectedRepositoryPath(
+  repoRelativePath: string,
+): string | null {
+  return classifyStudioProductProtectedPath(repoRelativePath);
+}
 /**
  * Repository document paths known from durable DecisionBasis / cycle facts.
  * Pseudo-refs (`attempt:…`, `product:…`) are excluded — they are not files.
@@ -234,6 +247,163 @@ function missionFromClarifyWithoutRecovery(
   };
 }
 
+/**
+ * Durable Product facts sufficient to qualify a bounded local-write effect
+ * WITHOUT docs_write Product taxonomy. Product EC surface stays generalist.
+ */
+export function canQualifyGenericLocalWriteFromDurableFacts(input: {
+  readonly basis: DecisionBasis;
+  readonly selectedOptionRef: string;
+}):
+  | {
+      readonly ok: true;
+      readonly allowedPaths: readonly string[];
+      readonly rollbackAvailable: true;
+      readonly rollbackDescription: string;
+    }
+  | { readonly ok: false; readonly reason: string } {
+  const { basis, selectedOptionRef } = input;
+  const proposalPursue =
+    selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
+    basis.sourceType === "proposal";
+  const trajectoryGoverned =
+    selectedOptionRef === GOVERNED_OPTION_REF ||
+    selectedOptionRef === BOUNDED_OPTION_REF;
+  if (!proposalPursue && !trajectoryGoverned) {
+    return {
+      ok: false,
+      reason:
+        "local-write requires GOVERNED/BOUNDED or Proposal pursue HumanDecision provenance",
+    };
+  }
+  const eb = basis.executionBasis;
+  const requested = eb.requestedOperation?.trim() ?? "";
+  // docs_write sealed path stays on PREPARE Proposal/M3 — not this path.
+  if (
+    eb.intentKind === "docs_write" ||
+    requested === "cursor.docs_write.apply"
+  ) {
+    return {
+      ok: false,
+      reason: "docs_write sealed — use PREPARE Proposal/M3 path",
+    };
+  }
+  if (eb.reversibilityExpectation === "irreversible") {
+    return {
+      ok: false,
+      reason: "irreversible expectation — local-write blocked",
+    };
+  }
+  const paths = repositorySourcesFromProductFacts({ basis });
+  if (paths.length === 0) {
+    return {
+      ok: false,
+      reason:
+        "no sealed repository paths on DecisionBasis (targetPath / scopeIn)",
+    };
+  }
+  // targetPath must be inside sealed scopeIn when both are present.
+  const target = typeof eb.targetPath === "string" ? eb.targetPath.trim() : "";
+  const scopeIn = (eb.scopeIn ?? [])
+    .map((s) => (typeof s === "string" ? s.trim() : ""))
+    .filter(Boolean);
+  if (target && scopeIn.length > 0 && !scopeIn.includes(target)) {
+    return {
+      ok: false,
+      reason: "targetPath not contained in sealed scopeIn",
+    };
+  }
+  // CP4-02 Option C — Studio Product protected paths (sandbox floor ∪ governance).
+  // Confirmation N2 never bypasses this gate.
+  const protectedHits = paths
+    .map((p) => ({ path: p, hit: classifyProtectedRepositoryPath(p) }))
+    .filter((x) => x.hit != null);
+  if (protectedHits.length > 0) {
+    return {
+      ok: false,
+      reason: `protected boundary without dedicated authority: ${protectedHits
+        .map((h) => `${h.path}→${h.hit}`)
+        .join(",")}`,
+    };
+  }
+  return {
+    ok: true,
+    allowedPaths: paths,
+    rollbackAvailable: true,
+    rollbackDescription:
+      "Isolated Git worktree discard after Attempt — no Git commit/push/PR.",
+  };
+}
+
+function missionFromGovernedLocalWrite(
+  projectObjective: string | null,
+  basis: DecisionBasis,
+  allowedPaths: readonly string[],
+): ProductMissionFields {
+  const eb = basis.executionBasis;
+  return {
+    objective:
+      (eb.objective?.trim() ||
+        "Exécuter une mutation locale bornée dans le worktree isolé") +
+      (projectObjective ? ` — ${projectObjective}` : ""),
+    expectedOutputs: [
+      ...(eb.expectedOutputs ?? []),
+      "Fichiers créés/modifiés dans le scope autorisé",
+      "CursorExecutionReport machine + Cursor Review End Of natif",
+      "Studio VerifiedChangeSet (FACTS) pour qualification produit",
+    ].filter((s, i, a) => s && a.indexOf(s) === i),
+    scopeIn: [
+      "product:project-workspace",
+      ...allowedPaths,
+      ...(eb.scopeIn ?? []).filter((s) => !allowedPaths.includes(s)),
+    ],
+    scopeOut: [
+      "GIT_COMMIT",
+      "GIT_PUSH",
+      "GIT_PR",
+      "GIT_MERGE",
+      "FILESYSTEM_DELETE",
+      "DOCTRINE_MUTATION",
+      "BASELINE_PROMOTION",
+      "unrelated-project-mutation",
+      "protected-boundary-without-authorization",
+      ...(eb.scopeOut ?? []),
+    ],
+    stopConditions: [
+      "REQUIRED_EVIDENCE_UNAVAILABLE",
+      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
+      "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
+      "CLAIM_FACT_MISMATCH",
+      "NO_AUTOMATIC_RELAUNCH",
+      // Do NOT fold trajectory authorize-flow markers (AUCUNE EXÉCUTION /
+      // STOP AVANT EXECUTE) — those are stripped by productStopConditions.
+    ],
+    evidenceRequirements: [
+      "evreq:mission-result-for-nora-reevaluation",
+      "evreq:local-write",
+      "evreq:studio-verified-changeset",
+      ...(eb.evidenceRequirements ?? []),
+    ],
+    sourcesToRead: [
+      "product:current-project-facts",
+      "product:decision-basis-and-lps",
+      // Write targets are scopeIn only — they are NOT claimed as prior reads.
+    ],
+    contextNotes: [
+      "product_qualified_local_write",
+      "NOT_DOCS_WRITE_PRODUCT_TAXONOMY",
+      `allowedPaths=${allowedPaths.join(",")}`,
+      `reversibilityExpectation=${eb.reversibilityExpectation ?? "unknown"}`,
+    ],
+    authorizesMutatingEffects: true,
+    recoveryAttemptId: null,
+    recoveryEvidenceId: null,
+    recoveryReviewBundleId: null,
+    recoveryExecutionContractId: null,
+    productOutcome: null,
+  };
+}
+
 /**
  * Internal effect-control scaffold from mission perimeter — NOT a Product
  * contract category. `operationKind: "read"` here is ActionPolicy taxonomy only;
@@ -244,15 +414,46 @@ function buildInternalWorkFromMissionPerimeter(input: {
   readonly projectTitle: string | null;
   readonly mission: ProductMissionFields;
   readonly qualificationSource: string;
+  readonly basis?: DecisionBasis;
+  readonly selectedOptionRef?: string;
 }): ActualExecutionWork | EffectQualificationFailure {
-  // Mutating missions still need sealed docs_write / GCEC path today —
-  // do not invent a generalist mutator from trajectory alone.
   if (input.mission.authorizesMutatingEffects) {
+    // Product-qualified local-write from durable facts — not docs_write taxonomy.
+    if (input.basis && input.selectedOptionRef) {
+      const qual = canQualifyGenericLocalWriteFromDurableFacts({
+        basis: input.basis,
+        selectedOptionRef: input.selectedOptionRef,
+      });
+      if (qual.ok) {
+        const built = buildProductQualifiedLocalWriteWork({
+          projectId: input.projectId,
+          projectTitle: input.projectTitle,
+          objective: input.mission.objective,
+          allowedPaths: qual.allowedPaths,
+          rollbackAvailable: qual.rollbackAvailable,
+          rollbackDescription: qual.rollbackDescription,
+          qualificationSource: input.qualificationSource,
+        });
+        if ("ok" in built && built.ok === false) return built;
+        const work = built as ActualExecutionWork;
+        return {
+          ...work,
+          notes: [
+            ...work.notes,
+            "INTERNAL_EFFECT_CONTROL_FROM_MISSION_PERIMETER",
+            "PRODUCT_QUALIFIED_LOCAL_WRITE",
+            "NOT_OPTION_TO_OPERATION",
+            "CURSOR_DETERMINES_HOW",
+            ...input.mission.contextNotes,
+          ],
+        };
+      }
+    }
     return {
       ok: false,
       code: "EFFECTS_UNRESOLVED",
       message:
-        "Mission mutante sans sealed docs_write / GCEC — utiliser le chemin Proposal/M3 ou facts produit scellés.",
+        "Mission mutante sans faits durables suffisants pour local-write produit (chemins + réversibilité) — pas de docs_write taxonomy inventée.",
     };
   }
   const built = buildActualExecutionWork({
@@ -305,7 +506,7 @@ export function deriveActualExecutionWorkFromProductContext(input: {
     };
   }
 
-  const clientKind: W3ACanonicalActualOperationKind | null =
+  const clientKind =
     isActualExecutionOperationKind(input.clientOperationKind)
       ? input.clientOperationKind
       : null;
@@ -339,6 +540,8 @@ export function deriveActualExecutionWorkFromProductContext(input: {
       mission,
       qualificationSource:
         "studio.nora.mission-perimeter.internal-effect-control",
+      basis,
+      selectedOptionRef,
     });
     if ("ok" in work && work.ok === false) return work;
     void clientKind; // durable mission wins — ignore client HOW
@@ -352,7 +555,8 @@ export function deriveActualExecutionWorkFromProductContext(input: {
 
   if (
     selectedOptionRef !== GOVERNED_OPTION_REF &&
-    selectedOptionRef !== BOUNDED_OPTION_REF
+    selectedOptionRef !== BOUNDED_OPTION_REF &&
+    selectedOptionRef !== PROPOSAL_SUBJECT_PURSUE_REF
   ) {
     return {
       ok: false,
@@ -361,6 +565,18 @@ export function deriveActualExecutionWorkFromProductContext(input: {
     };
   }
 
+  if (
+    selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
+    basis.sourceType !== "proposal"
+  ) {
+    return {
+      ok: false,
+      code: "SUBJECT_OPTION_SET_MISMATCH",
+      message:
+        "Proposal pursue sans DecisionBasis.sourceType=proposal — fail-closed.",
+    };
+  }
+
   const requested = basis.executionBasis.requestedOperation?.trim() ?? "";
   if (
     !isNonExecutableTrajectoryRequestedOperation(requested) &&
@@ -375,6 +591,46 @@ export function deriveActualExecutionWorkFromProductContext(input: {
     };
   }
 
+  // CP4-01 — GOVERNED/BOUNDED or Proposal pursue + durable local-write facts
+  // → product-qualified local-write (generic Cursor quartet).
+  const localWriteQual = canQualifyGenericLocalWriteFromDurableFacts({
+    basis,
+    selectedOptionRef,
+  });
+  if (localWriteQual.ok) {
+    const mission = missionFromGovernedLocalWrite(
+      input.projectObjective,
+      basis,
+      localWriteQual.allowedPaths,
+    );
+    const work = buildInternalWorkFromMissionPerimeter({
+      projectId: input.projectId,
+      projectTitle: input.projectTitle,
+      mission,
+      qualificationSource:
+        "studio.nora.mission-perimeter.product-qualified-local-write",
+      basis,
+      selectedOptionRef,
+    });
+    if ("ok" in work && work.ok === false) return work;
+    void clientKind; // durable local-write wins — ignore client HOW
+    return {
+      ok: true,
+      work: work as ActualExecutionWork,
+      mission,
+      derivationSource: "durable_product_mission",
+    };
+  }
+
+  // Proposal pursue without local-write facts = fail closed (no invented HOW).
+  if (selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF) {
+    return {
+      ok: false,
+      code: "EFFECTS_UNRESOLVED",
+      message: `Proposal pursue local-write non qualifiable — ${localWriteQual.reason}`,
+    };
+  }
+
   // Compat: allowlisted client kind for historical tests only — not Product UI.
   if (clientKind) {
     const built = buildActualExecutionWork({
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index e9ce7276..278fec81 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -43,6 +43,8 @@ import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/
 import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
 import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
 import { ingestMissionResultEvidence } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
+import { finalizeGenericExecutionReview } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
+import { ingestExecutionReviewVerificationEvidence } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
 import {
   buildMissionResultPayloadFromReport,
   type CursorExecutionReportWithMission,
@@ -1280,6 +1282,99 @@ export async function governedExecuteRecordResult(
             };
           }
         }
+        const refsRoot =
+          input.missionResultRefsRoot?.trim() ||
+          path.join(
+            path.dirname(
+              typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
+                process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
+                ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH
+                : path.join(
+                    process.cwd(),
+                    "..",
+                    ".sfia-exec",
+                    "product",
+                    "oa-product.sqlite",
+                  ),
+            ),
+            "mission-result-refs",
+          );
+
+        // CR-01 — Generic Product nominal: observe worktree → VerifiedChangeSet →
+        // finalize Generic Review Material BEFORE Evidence/mission ingest.
+        // worktreeRef is server-owned (RealProcessObservation / LaunchAck).
+        if (report) {
+          const worktreeRef =
+            completed.observation?.worktreeRef?.trim() || null;
+          const finalized = await finalizeGenericExecutionReview({
+            refsRoot,
+            projectId: input.projectId,
+            cycleInstanceId: contract.cycleInstanceId,
+            executionContractId: contract.executionContractId,
+            attemptId: attempt.attemptId,
+            repositoryRef:
+              expectedRepo ?? report.repositoryRef ?? "repository:unknown",
+            baseSha: expectedSha ?? report.baseSha ?? "unknown",
+            cursorReport: report,
+            worktreePath: worktreeRef,
+            // CP3-03 — nominal HEAD binding (worktree HEAD == pinned baseSha).
+            // Do NOT bypass; Fake fixtures must use the same H0 worktree.
+          });
+          if (!finalized.ok) {
+            return {
+              ok: false,
+              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+              message: `Attempt succeeded durable — Generic Review Material finalize échoué (${finalized.code}): ${finalized.message}`,
+              attempt: projectAttempt(attempt, adapterId),
+            };
+          }
+
+          // CP3-04 — Verification Evidence digest = durable VCS bytes digest.
+          const vcsDigest = finalized.durableVerifiedChangeSetDigest;
+          const verificationPayload = {
+            schemaVersion: "oa.execution-review-verification.1" as const,
+            attemptId: attempt.attemptId,
+            executionContractId: contract.executionContractId,
+            projectId: input.projectId,
+            repositoryRef:
+              expectedRepo ?? report.repositoryRef ?? "repository:unknown",
+            baseSha: expectedSha ?? report.baseSha ?? "unknown",
+            reviewMaterialId: finalized.manifest.reviewMaterialId,
+            verificationStatus: finalized.verificationStatus,
+            verifiedChangeSetDigest: vcsDigest,
+            verifiedChangeSetRef:
+              finalized.verifiedChangeSetRef ??
+              finalized.manifest.verifiedEffects.verifiedChangeSetRef,
+            claimFactMismatch: finalized.claimFactMismatch,
+            unclaimedObservedPaths:
+              finalized.verifiedChangeSet?.unclaimedObservedPaths ?? [],
+            claimedMissingPaths:
+              finalized.verifiedChangeSet?.claimedMissingPaths ?? [],
+            observedPathCount: finalized.verifiedChangeSet?.all.length ?? 0,
+            completeness: finalized.manifest.completeness,
+            reviewEndOfPresent: finalized.reviewEndOfPresent,
+          };
+          const verificationIngested =
+            await ingestExecutionReviewVerificationEvidence({
+              evidenceReviewServices: input.oa.evidenceReviewServices,
+              projectId: input.projectId,
+              cycleInstanceId: contract.cycleInstanceId,
+              executionContractId: contract.executionContractId,
+              executionAttemptId: attempt.attemptId,
+              payload: verificationPayload,
+              refsRoot,
+              technicalResultRef: attempt.resultRef,
+            });
+          if (!verificationIngested.ok) {
+            return {
+              ok: false,
+              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+              message: `Attempt succeeded durable — Verification Evidence ingest échoué (${verificationIngested.code}): ${verificationIngested.message}`,
+              attempt: projectAttempt(attempt, adapterId),
+            };
+          }
+        }
+
         const built = report
           ? buildMissionResultPayloadFromReport({ report })
           : ({
@@ -1289,17 +1384,6 @@ export async function governedExecuteRecordResult(
                 "Mission Result Evidence requires a structured CursorExecutionReport with missionResult fields.",
             } as const);
         if (built.ok) {
-          const refsRoot =
-            input.missionResultRefsRoot?.trim() ||
-            path.join(
-              path.dirname(
-                typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
-                  process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
-                  ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH
-                  : path.join(process.cwd(), "..", ".sfia-exec", "product", "oa-product.sqlite"),
-              ),
-              "mission-result-refs",
-            );
           const ingested = await ingestMissionResultEvidence({
             evidenceReviewServices: input.oa.evidenceReviewServices,
             projectId: input.projectId,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index 8874e7c4..e504347b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -372,9 +372,9 @@ export async function materializeW3bProductTerminal(input: {
   }
 
   // Mission Product path: W3-B frozen RB must contain verified Mission Evidence
-  // as the sole evidenceRefs set consumed by EvaluateContractResult (CE bindings
-  // = selectEvidenceIds mission-only). Technical Attempt Evidence alone remains
-  // the fallback when Mission Evidence is absent/unverified → NOT_PROVEN honest.
+  // (+ Studio Verification Evidence when required) as the Evidence set consumed
+  // by EvaluateContractResult. Technical Attempt Evidence alone remains the
+  // fallback when Mission Evidence is absent/unverified → NOT_PROVEN honest.
   const isMissionProduct = contract.constraints.includes(
     PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
   );
@@ -384,9 +384,45 @@ export async function materializeW3bProductTerminal(input: {
     const missionEvidenceId = missionResultEvidenceIdForAttempt(attempt.attemptId);
     const missionEvidence =
       await services.evidenceReader.findById(missionEvidenceId);
-    if (missionEvidence && missionEvidence.status === "verified") {
+      if (missionEvidence && missionEvidence.status === "verified") {
       evidenceIdsForBundle = [missionEvidence.evidenceId];
       primaryEvidence = missionEvidence;
+      // CP2-04 — include Verification Evidence in same ReviewBundle only when
+      // the EC requires studio-verified-changeset (generic local-write path).
+      // Historical clarify/read missions must keep a mission-only RB so CE
+      // bindings.evidenceRefs match reviewBundle.evidenceRefs.
+      const { executionReviewVerificationEvidenceIdForAttempt } = await import(
+        "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence"
+      );
+      const { missionRequiresStudioVerification } = await import(
+        "@/lib/oa/evidence-review/application/missionResultContractResultSemantic"
+      );
+      const requiresVerification = missionRequiresStudioVerification({
+        evidenceRequirements: [
+          ...((
+            contract as { evidenceRequirements?: readonly string[] }
+          ).evidenceRequirements ?? []),
+          ...((
+            (contract as {
+              inspectionDisclosure?: {
+                evidenceRequirements?: readonly string[];
+              };
+            }).inspectionDisclosure
+          )?.evidenceRequirements ?? []),
+        ],
+      } as never);
+      if (requiresVerification) {
+        const verificationEvidenceId =
+          executionReviewVerificationEvidenceIdForAttempt(attempt.attemptId);
+        const verificationEvidence =
+          await services.evidenceReader.findById(verificationEvidenceId);
+        if (verificationEvidence && verificationEvidence.status === "verified") {
+          evidenceIdsForBundle = [
+            missionEvidence.evidenceId,
+            verificationEvidence.evidenceId,
+          ];
+        }
+      }
     }
     // Missing / unverified Mission Evidence → tech-only RB; mission semantic
     // yields NOT_PROVEN / Product UNCLAIMED (honest).
@@ -504,13 +540,20 @@ export async function materializeW3bProductTerminal(input: {
     };
   }
 
-  const product = projectFromFacts({
+  const productRaw = projectFromFacts({
     attempt,
     contract,
     evidence: primaryEvidence,
     reviewBundle: frozenReviewBundle,
     claimEvaluation: evaluated.claimEvaluation,
   });
+  const { applyVerifiedChangeSetProductHonesty } = await import(
+    "./applyVerifiedChangeSetProductHonesty"
+  );
+  const product = applyVerifiedChangeSetProductHonesty({
+    attemptId: attempt.attemptId,
+    product: productRaw,
+  });
 
   const reusedFromIdempotency = Boolean(
     ingested.reusedFromIdempotencyKey ||
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts b/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
index e6c78514..efc19105 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
@@ -41,8 +41,20 @@ export const MISSION_REPORT_REQUIREMENTS: readonly string[] = Object.freeze([
   "diagnosticSummary non vide",
   "recommendedNextProductStep non vide",
   "authorizedEffectsExecuted (liste explicite, vide si aucune)",
+  "Cursor Review End Of (CLAIM exécuteur) — verdict, scope, work, effects, validations, blockers, reservations, points de revue",
 ]);
 
+/**
+ * Generic Product mutating / reviewable missions — machine report + Review End Of.
+ * Technical effects remain enforcement; this is NOT a Product task taxonomy.
+ */
+export const GENERIC_PRODUCT_REPORT_REQUIREMENTS: readonly string[] =
+  Object.freeze([
+    ...MISSION_REPORT_REQUIREMENTS,
+    "fileEffects claim (created/modified/deleted) lorsque des fichiers sont touchés — CLAIM seulement",
+    "validationEffects lorsque des validations sont exécutées — CLAIM seulement",
+  ]);
+
 function criterionIdFor(ordinal: number, suffix: string): string {
   return `acc:${String(ordinal).padStart(2, "0")}:${suffix}`;
 }
@@ -201,3 +213,7 @@ export function deriveDocsWriteValidationPlan(input: {
 export function deriveMissionReportRequirements(): readonly string[] {
   return MISSION_REPORT_REQUIREMENTS;
 }
+
+export function deriveGenericProductReportRequirements(): readonly string[] {
+  return GENERIC_PRODUCT_REPORT_REQUIREMENTS;
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index a5ea435c..4f470f66 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -47,6 +47,7 @@ import {
 import {
   deriveMissionAcceptanceCriteria,
   deriveMissionReportRequirements,
+  deriveGenericProductReportRequirements,
   deriveMissionValidationPlan,
 } from "./missionContractSemanticInputs";
 
@@ -466,10 +467,8 @@ export async function prepareExecutionContractFromW2Decision(input: {
   const sourceGrounding = await resolveContractSourceGroundingForPrepare({
     projectId: input.projectId,
     cycleInstanceId: cycleBinding.cycleInstanceId,
-    declaredSources: [
-      ...(mission?.sourcesToRead ?? []),
-      ...(mission?.scopeIn ?? []),
-    ],
+    // Declared READ sources only — mutation scopeIn paths are not "read" claims.
+    declaredSources: [...(mission?.sourcesToRead ?? [])],
     repositoryIdentity: launch.context.repositoryBindingIdentity,
     repositoryHeadSha: launch.context.baseHeadSha,
     reader: input.sourceGroundingReader ?? null,
@@ -495,7 +494,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
           [CONTRACT_VALIDATION_PLAN_INPUT_KEY]:
             deriveMissionValidationPlan(mission),
           [CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY]:
-            deriveMissionReportRequirements(),
+            deriveGenericProductReportRequirements(),
         }
       : {}),
   };
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
index ba78a0c3..a131e20b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
@@ -18,6 +18,9 @@ import {
   loadDocsWriteArtifactReviewMaterial,
   resolveProductEvidenceRefsRoot,
 } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
+import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
+import { isExecutionReviewVerificationEvidenceId } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
+import { isMissionResultEvidenceId } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
 import {
   findExistingW3cPostEvidence,
   projectW3cExecutionReportSurfaceFromDurable,
@@ -62,6 +65,31 @@ export type ProductExecutionContext = {
     readonly completeness: "FULL" | "PARTIAL" | null;
     readonly preview: string | null;
   };
+  /** Generic Execution Review Material — payload only; ≠ Product Truth / Evidence. */
+  readonly executionReview: {
+    readonly kind: "EXECUTION_REVIEW_MATERIAL";
+    readonly present: boolean;
+    readonly completeness: "FULL" | "PARTIAL" | null;
+    readonly reviewMaterialId: string | null;
+    readonly reviewItemCount: number;
+    readonly claimFactMismatch: boolean;
+    readonly verificationStatus:
+      | "OBSERVED"
+      | "UNAVAILABLE"
+      | "NOT_PERFORMED"
+      | "NOT_APPLICABLE"
+      | null;
+    readonly retentionState: string | null;
+    readonly reviewEndOfPresent: boolean;
+    readonly verifiedChangeSetPresent: boolean;
+    readonly blockers: readonly string[];
+    readonly reviewItemSummaries: readonly {
+      readonly itemId: string;
+      readonly kind: string;
+      readonly label: string;
+      readonly logicalPath?: string;
+    }[];
+  };
   readonly evidence: {
     readonly kind: "EVIDENCE";
     readonly evidenceId: string | null;
@@ -381,6 +409,30 @@ async function resolveEvidenceLineage(input: {
     };
   }
 
+  // Canonical pre-CE pair for generic execution review (CP2-04):
+  // exactly one Mission Evidence + one Studio Verification Evidence.
+  // Not ambiguous — materializeW3b freezes both into the same ReviewBundle.
+  // Any other multi-Evidence set without CE remains fail-closed.
+  const missionBound = bound.filter((e) =>
+    isMissionResultEvidenceId(e.evidenceId),
+  );
+  const verificationBound = bound.filter((e) =>
+    isExecutionReviewVerificationEvidenceId(e.evidenceId),
+  );
+  if (
+    bound.length === 2 &&
+    missionBound.length === 1 &&
+    verificationBound.length === 1
+  ) {
+    return {
+      ok: true,
+      evidence: missionBound[0]!,
+      evidenceIds: [missionBound[0]!.evidenceId, verificationBound[0]!.evidenceId],
+      reviewBundle: null,
+      claimEvaluation: null,
+    };
+  }
+
   // Multiple Evidence linked to Attempt without CE lineage — NEVER prefix-prefer.
   return {
     ok: false,
@@ -543,6 +595,20 @@ export async function resolveProductExecutionContext(input: {
     completeness: null,
     preview: null,
   };
+  let executionReview: ProductExecutionContext["executionReview"] = {
+    kind: "EXECUTION_REVIEW_MATERIAL",
+    present: false,
+    completeness: null,
+    reviewMaterialId: null,
+    reviewItemCount: 0,
+    claimFactMismatch: false,
+    verificationStatus: null,
+    retentionState: null,
+    reviewEndOfPresent: false,
+    verifiedChangeSetPresent: false,
+    blockers: [],
+    reviewItemSummaries: [],
+  };
   let evidenceBlock: ProductExecutionContext["evidence"] = {
     kind: "EVIDENCE",
     evidenceId: null,
@@ -620,6 +686,52 @@ export async function resolveProductExecutionContext(input: {
       }
     }
 
+    const genericReview = loadGenericExecutionReviewMaterial({
+      refsRoot: resolveProductEvidenceRefsRoot(),
+      attemptId: attempt.attemptId,
+    });
+    if (genericReview.ok) {
+      const mismatch =
+        genericReview.manifest.verifiedEffects.claimFactMismatch === true ||
+        genericReview.verifiedChangeSet?.claimFactMismatch === true ||
+        genericReview.manifest.blockers.some((b) =>
+          b.includes("CLAIM_FACT_MISMATCH"),
+        );
+      const verificationStatus =
+        genericReview.manifest.verifiedEffects.verificationStatus ??
+        (genericReview.verifiedChangeSet ? "OBSERVED" : "UNAVAILABLE");
+      executionReview = {
+        kind: "EXECUTION_REVIEW_MATERIAL",
+        present: true,
+        completeness: genericReview.manifest.completeness,
+        reviewMaterialId: genericReview.manifest.reviewMaterialId,
+        reviewItemCount: genericReview.manifest.reviewItems.length,
+        claimFactMismatch: mismatch,
+        verificationStatus,
+        retentionState: genericReview.manifest.retentionState,
+        reviewEndOfPresent: Boolean(genericReview.reviewEndOf),
+        verifiedChangeSetPresent:
+          verificationStatus === "OBSERVED" &&
+          Boolean(genericReview.verifiedChangeSet),
+        blockers: [...genericReview.manifest.blockers],
+        reviewItemSummaries: genericReview.manifest.reviewItems.map((it) => ({
+          itemId: it.itemId,
+          kind: it.kind,
+          label: it.label,
+          ...(it.logicalPath ? { logicalPath: it.logicalPath } : {}),
+        })),
+      };
+      if (genericReview.cursorReport && !cursorReport.present) {
+        cursorReport = {
+          kind: "EXECUTOR_CLAIM",
+          present: true,
+          status: genericReview.cursorReport.status,
+          summary: `status=${genericReview.cursorReport.status}`,
+          disclosure: "CLAIM_NOT_EVIDENCE",
+        };
+      }
+    }
+
     const lineage = await resolveEvidenceLineage({
       oa: input.oa,
       projectId,
@@ -730,6 +842,7 @@ export async function resolveProductExecutionContext(input: {
         : null,
       cursorReport,
       artifact,
+      executionReview,
       evidence: evidenceBlock,
       reviewBundle: reviewBlock,
       claimEvaluation: claimBlock,
@@ -742,6 +855,8 @@ export async function resolveProductExecutionContext(input: {
       disclosures: [
         "Product Resolution is READ-ONLY — not Truth C / HumanDecision / Evidence authority.",
         "CursorExecutionReport is an EXECUTOR CLAIM, never Evidence by itself.",
+        "Cursor Review End Of is an EXECUTOR CLAIM when present — never Fact/Evidence.",
+        "Execution Review Material is a review payload — not Product Truth.",
         "Artifact preview may be PARTIAL — never invent FULL.",
         "Attempt technical succeeded ≠ Product Result PROVEN.",
       ],
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
index 19fc642a..6ebc6f8c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
@@ -44,8 +44,18 @@ export const W3A_PRODUCT_TARGET_WORKSPACE = "product:project-workspace" as const
 /**
  * Canonical W3-A actual work kinds — facts are product-qualifiable today.
  * Not a global ActionCatalog.
+ *
+ * `local-write` is product-qualifiable ONLY from durable DecisionBasis facts
+ * (target/scope + reversibility) — NEVER from client operationKind alone.
  */
 export type W3ACanonicalActualOperationKind =
+  | "read"
+  | "simulate"
+  | "generate-temporary-artifact"
+  | "local-write";
+
+/** Compat kinds acceptible from optional client/test operationKind (never local-write). */
+export type W3AClientCompatOperationKind =
   | "read"
   | "simulate"
   | "generate-temporary-artifact";
@@ -55,7 +65,8 @@ export type ActualExecutionOperationKind = W3ACanonicalActualOperationKind;
 
 /**
  * Effect-policy taxonomy kinds (authority/Confirmation/reversibility projection).
- * NOT executable ActualExecutionWork from operationKind alone on /studio.
+ * NOT executable ActualExecutionWork from operationKind alone on /studio —
+ * except product-qualified local-write from durable DecisionBasis facts.
  */
 export type EffectPolicyOnlyOperationKind =
   | "local-write"
@@ -72,7 +83,6 @@ export type ActualExecutionWork = {
   readonly effectClass: Exclude<
     ExecutionEffectClass,
     | "unknown"
-    | "local-write"
     | "commit"
     | "push"
     | "pull-request"
@@ -112,8 +122,16 @@ const CANONICAL_KIND_TO_SCOPE: Record<W3ACanonicalActualOperationKind, string> =
     read: W3A_PRODUCT_SCOPE.READ,
     simulate: W3A_PRODUCT_SCOPE.SIMULATE,
     "generate-temporary-artifact": W3A_PRODUCT_SCOPE.TEMP_ARTIFACT,
+    "local-write": W3A_PRODUCT_SCOPE.LOCAL_WRITE,
   };
 
+/** Kinds buildable from operationKind alone (client/compat) — excludes local-write. */
+const CLIENT_COMPAT_KINDS = new Set<string>([
+  "read",
+  "simulate",
+  "generate-temporary-artifact",
+]);
+
 const CANONICAL_KINDS = new Set<string>(Object.keys(CANONICAL_KIND_TO_SCOPE));
 
 const HIGH_RISK_POLICY_ONLY_KINDS = new Set<string>([
@@ -133,11 +151,14 @@ export function isCanonicalW3AActualOperationKind(
   return typeof value === "string" && CANONICAL_KINDS.has(value);
 }
 
-/** Alias — product prepare path accepts canonical kinds only. */
+/**
+ * Client/compat operationKind allowlist — NEVER includes local-write.
+ * local-write requires durable Product facts (buildProductQualifiedLocalWriteWork).
+ */
 export function isActualExecutionOperationKind(
   value: unknown,
-): value is W3ACanonicalActualOperationKind {
-  return isCanonicalW3AActualOperationKind(value);
+): value is W3AClientCompatOperationKind {
+  return typeof value === "string" && CLIENT_COMPAT_KINDS.has(value);
 }
 
 export function isHighRiskPolicyOnlyOperationKind(value: unknown): boolean {
@@ -334,13 +355,25 @@ function scopeOutForCanonicalKind(
         "DOCTRINE_MUTATION",
         "BASELINE_PROMOTION",
       ];
+    case "local-write":
+      return [
+        "GIT_COMMIT",
+        "GIT_PUSH",
+        "GIT_PR",
+        "GIT_MERGE",
+        "FILESYSTEM_DELETE",
+        "DOCTRINE_MUTATION",
+        "BASELINE_PROMOTION",
+        "PROTECTED_PATH_WITHOUT_AUTHORIZATION",
+      ];
   }
 }
 
 /**
  * Build ActualExecutionWork from an explicit Pilot/Nora canonical operation
  * kind + project-bound product facts. Never from W2 trajectory alone.
- * High-risk kinds must not call this — reject at prepare (R15).
+ * High-risk kinds / local-write must not call this — use
+ * buildProductQualifiedLocalWriteWork for durable-fact local-write (R15).
  */
 export function buildActualExecutionWork(input: {
   readonly operationKind: W3ACanonicalActualOperationKind;
@@ -358,21 +391,26 @@ export function buildActualExecutionWork(input: {
     };
   }
 
-  if (!isCanonicalW3AActualOperationKind(input.operationKind)) {
+  // local-write is canonical when product-qualified, but NEVER from this
+  // operationKind-alone builder (client / compat path).
+  if (
+    input.operationKind === "local-write" ||
+    isHighRiskPolicyOnlyOperationKind(input.operationKind)
+  ) {
     return {
       ok: false,
       code: "PREPARATION_BLOCKED",
       message:
-        "operationKind hors chemin canonique W3-A (read/simulate/temp-artifact).",
+        "Opération à risque non qualifiable depuis operationKind seul — facts produit requis (buildProductQualifiedLocalWriteWork).",
     };
   }
 
-  if (isHighRiskPolicyOnlyOperationKind(input.operationKind)) {
+  if (!isActualExecutionOperationKind(input.operationKind)) {
     return {
       ok: false,
       code: "PREPARATION_BLOCKED",
       message:
-        "Opération à risque non qualifiable depuis operationKind seul — facts produit requis.",
+        "operationKind hors chemin canonique W3-A (read/simulate/temp-artifact).",
     };
   }
 
@@ -416,6 +454,80 @@ export function buildActualExecutionWork(input: {
   };
 }
 
+/**
+ * Product-qualified local-write from durable DecisionBasis facts.
+ * Product EC surface remains studio.cursor.generalist.execute (quartet).
+ * Technical effectClass = local-write — NOT a Product write taxonomy.
+ */
+export function buildProductQualifiedLocalWriteWork(input: {
+  readonly projectId: string;
+  readonly projectTitle?: string | null;
+  readonly objective?: string | null;
+  /** Repository-relative paths sealed on DecisionBasis (scopeIn / targetPath). */
+  readonly allowedPaths: readonly string[];
+  readonly protectedBoundaries?: readonly string[];
+  readonly rollbackAvailable: boolean;
+  readonly rollbackDescription?: string | null;
+  readonly qualificationSource: string;
+}): ActualExecutionWork | EffectQualificationFailure {
+  if (!input.projectId.trim()) {
+    return {
+      ok: false,
+      code: "PREPARATION_BLOCKED",
+      message: "projectId requis pour qualifier local-write produit.",
+    };
+  }
+  const paths = [
+    ...new Set(
+      input.allowedPaths
+        .map((p) => (typeof p === "string" ? p.trim() : ""))
+        .filter((p) => p.length > 0 && !p.includes("..") && !p.startsWith("/")),
+    ),
+  ];
+  if (paths.length === 0) {
+    return {
+      ok: false,
+      code: "SCOPE_UNRESOLVED",
+      message:
+        "local-write produit exige des chemins repository scellés (DecisionBasis targetPath / scopeIn).",
+    };
+  }
+  if (!input.rollbackAvailable) {
+    return {
+      ok: false,
+      code: "REVERSIBILITY_UNRESOLVED",
+      message:
+        "local-write produit sans fait de rollback crédible — préparation bloquée.",
+    };
+  }
+  const protectedBoundaries = [...(input.protectedBoundaries ?? [])];
+  return {
+    operationKind: "local-write",
+    effectClass: "local-write",
+    target: W3A_PRODUCT_TARGET_WORKSPACE,
+    scopeIn: W3A_PRODUCT_SCOPE.LOCAL_WRITE,
+    scopeOut: scopeOutForCanonicalKind("local-write"),
+    protectedBoundaries,
+    rollbackAvailable: true,
+    rollbackDescription:
+      input.rollbackDescription ??
+      "Isolated worktree discard / rollback — no Git commit/push/PR.",
+    weakBoundary: protectedBoundaries.length === 0,
+    qualificationSource: input.qualificationSource,
+    notes: [
+      `projectId=${input.projectId}`,
+      input.projectTitle ? `projectTitle=${input.projectTitle}` : null,
+      input.objective ? `objective=${input.objective}` : null,
+      "PRODUCT_QUALIFIED_LOCAL_WRITE",
+      "NOT_DOCS_WRITE_PRODUCT_TAXONOMY",
+      "NOT_CLIENT_OPERATION_KIND",
+      "CURSOR_GENERALIST_QUARTET_SURFACE",
+      `allowedPaths=${paths.join(",")}`,
+      "W2 trajectory option is NOT the execution action/scope/target",
+    ].filter((n): n is string => n !== null),
+  };
+}
+
 /** Map ActualExecutionWork → QualifiedExecutionEffects (still non-durable). */
 export function qualifyEffectsFromActualExecutionWork(input: {
   readonly work: ActualExecutionWork;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
index 8091f8d6..ded57e4e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -23,6 +23,7 @@ import {
   STUDIO_CURSOR_GENERALIST_TARGET,
 } from "@/lib/oa/execution-contract";
 import type { ProductMissionFields } from "./deriveActualExecutionWorkFromProductContext";
+import { PROPOSAL_SUBJECT_PURSUE_REF } from "./proposalSubjectOptions";
 import {
   BOUNDED_OPTION_REF,
   CLARIFY_OPTION_REF,
@@ -172,7 +173,9 @@ export function deriveW3AExecutionEnvelope(input: {
   const optionAllowed =
     input.selectedOptionRef === GOVERNED_OPTION_REF ||
     input.selectedOptionRef === BOUNDED_OPTION_REF ||
-    input.selectedOptionRef === CLARIFY_OPTION_REF;
+    input.selectedOptionRef === CLARIFY_OPTION_REF ||
+    // CP4-01 — Proposal pursue with sealed non-docs_write facts (MD-CP4-01).
+    input.selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
   if (!optionAllowed) {
     return {
       ok: false,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index af8477d6..b8416960 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -30,6 +30,7 @@ import {
   loadDocsWriteArtifactReviewMaterial,
   resolveProductEvidenceRefsRoot,
 } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
+import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
 import {
   buildCkcCognitivePromptSection,
   loadProductCkcCognitiveContent,
@@ -440,6 +441,31 @@ export function isEvidenceBackedNotProvenUnclaimed(
   );
 }
 
+/**
+ * CP2 — post-Evidence Deep Review is Analysis, not Authority.
+ * Eligible when Product is durable-qualified as non-SUCCESS (NOT_PROVEN / FAIL)
+ * with CE + Evidence present. Covers mismatch / verification honesty cases where
+ * projection may be UNCLAIMED while CE status is fail|not_proven.
+ */
+export function isEvidenceBackedPostEvidenceEligible(
+  product: W3BProductTerminalProjection,
+): boolean {
+  if (isEvidenceBackedNotProvenUnclaimed(product)) return true;
+  if (product.claimAllowed !== false) return false;
+  if (product.technicalDetail.attemptStatus !== "succeeded") return false;
+  if (!product.evidenceId || !product.reviewBundleId || !product.claimEvaluationId) {
+    return false;
+  }
+  const ceOk =
+    product.claimEvaluationStatus === "not_proven" ||
+    product.claimEvaluationStatus === "fail";
+  const verdictOk =
+    product.contractResultVerdict === "NOT_PROVEN" ||
+    product.contractResultVerdict === "FAIL";
+  if (!ceOk || !verdictOk) return false;
+  return product.outcome === "UNCLAIMED" || product.outcome === "FAIL";
+}
+
 /**
  * Project durable product outcome + real D5 coordination onto a Recommendation.
  * Never invents kind:"replan" from D5 (no trajectory replan code in NextActionCode).
@@ -938,7 +964,7 @@ export async function recoverExactRecommendationFromLps(input: {
     product.outcome !== "FAIL" &&
     !(
       product.outcome === "UNCLAIMED" &&
-      isEvidenceBackedNotProvenUnclaimed(product)
+      isEvidenceBackedPostEvidenceEligible(product)
     )
   ) {
     return null;
@@ -1195,7 +1221,7 @@ export async function runW3cPostEvidenceLoop(input: {
   const { oa, projectId, attemptId, product } = input;
 
   if (product.outcome === "UNCLAIMED") {
-    if (!isEvidenceBackedNotProvenUnclaimed(product)) {
+    if (!isEvidenceBackedPostEvidenceEligible(product)) {
       return failClosed(
         "PRODUCT_UNCLAIMED",
         "Résultat produit non claimable — boucle post-Evidence refusée.",
@@ -1311,10 +1337,14 @@ export async function runW3cPostEvidenceLoop(input: {
         "EVIDENCE_BACKED_NOT_PROVEN exige une ClaimEvaluation courante.",
       );
     }
-    if (claimEvaluation.status !== "not_proven" || product.claimAllowed) {
+    if (
+      (claimEvaluation.status !== "not_proven" &&
+        claimEvaluation.status !== "fail") ||
+      product.claimAllowed
+    ) {
       return failClosed(
         "PRODUCT_UNCLAIMED",
-        "UNCLAIMED sans CE not_proven / claimAllowed=false — fail-closed.",
+        "UNCLAIMED sans CE not_proven|fail / claimAllowed=false — fail-closed.",
       );
     }
     if (claimEvaluation.claimEvaluationId !== product.claimEvaluationId) {
@@ -1515,6 +1545,19 @@ export async function runW3cPostEvidenceLoop(input: {
   const executionReport = durableProjection.executionReport;
 
   noraInvoked = true;
+  // CP3-07 — nominal W3-C Deep Review: enable Execution Review tools when
+  // server-owned Generic Execution Review Material exists for this Attempt.
+  // Decision is NEVER a client boolean — Product Resolution / durable refs only.
+  const refsRootForReview = resolveProductEvidenceRefsRoot();
+  const reviewMaterialLoaded = loadGenericExecutionReviewMaterial({
+    refsRoot: refsRootForReview,
+    attemptId,
+  });
+  const enableExecutionReviewTools =
+    reviewMaterialLoaded.ok &&
+    reviewMaterialLoaded.manifest.projectId === projectId &&
+    reviewMaterialLoaded.manifest.attemptId === attemptId;
+
   const analysis = await analyzePostEvidenceWithProvider(
     {
       projectId,
@@ -1558,7 +1601,10 @@ export async function runW3cPostEvidenceLoop(input: {
         : {}),
       ...(cursorReportSummary ? { cursorReportSummary } : {}),
     },
-    { ckcPromptSection },
+    {
+      ckcPromptSection,
+      enableExecutionReviewTools,
+    },
   );
   if (analysis.ok) {
     analysisText = analysis.text;
@@ -1658,7 +1704,7 @@ export async function rehydrateW3cPostEvidenceFromLps(input: {
     );
   }
   if (product.outcome === "UNCLAIMED") {
-    if (!isEvidenceBackedNotProvenUnclaimed(product)) {
+    if (!isEvidenceBackedPostEvidenceEligible(product)) {
       return failClosed(
         "PRODUCT_UNCLAIMED",
         "UNCLAIMED — pas de boucle post-Evidence à rehydrater.",
@@ -1758,7 +1804,7 @@ export async function rehydrateW3cPostEvidenceFromLps(input: {
     product.outcome !== "FAIL" &&
     !(
       product.outcome === "UNCLAIMED" &&
-      isEvidenceBackedNotProvenUnclaimed(product)
+      isEvidenceBackedPostEvidenceEligible(product)
     )
   ) {
     return failClosed(
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 39085a42..8f444247 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -408,6 +408,10 @@ export {
   createProductExecutionAgentsTools,
   type ProductExecutionToolContext,
 } from "./productExecutionAgentsTools";
+export {
+  createExecutionReviewAgentsTools,
+  type ExecutionReviewToolContext,
+} from "./executionReviewAgentsTools";
 export {
   runNoraCognitiveCompletion,
   runNoraCognitiveCore,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
index 2b6da640..aa507f66 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
@@ -88,14 +88,19 @@ export async function runNoraCognitiveCore(
   });
 
   if (input.cognitiveMode === "post_execution") {
+    const hasReviewTools =
+      Boolean(input.executionReviewTools?.projectId?.trim()) &&
+      Boolean(input.executionReviewTools?.attemptId?.trim());
     return runNoraAgentsTurn({
       ...input,
-      enableTools: false,
+      // Deep Review: only bounded execution-review tools when bound; never Memory B / hosted search.
+      enableTools: hasReviewTools,
       enableHostedWebSearch: false,
       session: null,
       memoryBAvailability: "unavailable",
       cycleJournalTools: null,
       productExecutionTools: null,
+      executionReviewTools: hasReviewTools ? input.executionReviewTools : null,
       deterministicHostedWebSearchCalls: undefined,
       campaignBudget: undefined,
       governedAuthority: undefined,
@@ -117,6 +122,8 @@ export async function runNoraCognitiveCompletion(input: {
   readonly maxChars?: number;
   readonly projectId?: string;
   readonly correlationId?: string;
+  /** D-ER-09 — when set, post_execution enables bounded read-only review tools only. */
+  readonly executionReviewTools?: import("./executionReviewAgentsTools").ExecutionReviewToolContext | null;
 }): Promise<NoraCognitiveCompletionResult> {
   const mode: NoraCognitiveCompletionMode =
     input.mode === "conversation_completion" ? "conversation" : "post_execution";
@@ -137,6 +144,7 @@ export async function runNoraCognitiveCompletion(input: {
       enableHostedWebSearch: false,
       session: null,
       memoryBAvailability: "unavailable",
+      executionReviewTools: input.executionReviewTools ?? null,
     });
     const text = turn.text.trim();
     if (!text) {
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index 0ed5ec8c..2e15bf83 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -140,14 +140,17 @@ export function toolDefinitionsFromModelRequest(
     }
     const name = String(t.name ?? "");
     if (!name) continue;
-    // CYCLE JOURNAL / PRODUCT RESOLUTION — Agents-local READ-ONLY tools on the same Runner.
-    // Executed by Agents SDK tool.invoke, not via ConversationProvider.completeRound.
-    // Skip from Fake/provider ToolDefinition projection (same pattern as hosted web_search).
+    // CYCLE JOURNAL / PRODUCT RESOLUTION / EXECUTION REVIEW — Agents-local
+    // READ-ONLY tools on the same Runner. Executed by Agents SDK tool.invoke,
+    // not via ConversationProvider.completeRound. Skip from Fake/provider
+    // ToolDefinition projection (same pattern as hosted web_search).
     if (
       name === "cycle_journal_search" ||
       name === "cycle_journal_get_entry" ||
       name === "cycle_journal_get_sources" ||
-      name === "product_execution_context_get"
+      name === "product_execution_context_get" ||
+      name === "execution_review_get_manifest" ||
+      name === "execution_review_read_item"
     ) {
       continue;
     }
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index a3b5117e..5894cfc7 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -48,6 +48,7 @@ import {
   createProductExecutionAgentsTools,
   type ProductExecutionToolContext,
 } from "./productExecutionAgentsTools";
+import { createExecutionReviewAgentsTools } from "./executionReviewAgentsTools";
 import type { MemoryBAvailability } from "./memoryBAvailability";
 import {
   createNoraTurnBudget,
@@ -168,6 +169,11 @@ export type RunNoraAgentsTurnInput = {
    * Never authority / HD / Evidence. Optional.
    */
   productExecutionTools?: ProductExecutionToolContext | null;
+  /**
+   * D-ER-09 — bounded READ-ONLY Execution Review tools (Attempt/Project-bound).
+   * Used by post_execution Deep Review without enabling Memory B / hosted search.
+   */
+  executionReviewTools?: import("./executionReviewAgentsTools").ExecutionReviewToolContext | null;
 };
 
 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -518,10 +524,21 @@ export async function runNoraAgentsTurn(
           budget,
         })
       : [];
+  const executionReviewTools =
+    input.executionReviewTools &&
+    input.executionReviewTools.projectId.trim() &&
+    input.executionReviewTools.attemptId.trim() &&
+    enableTools
+      ? [...createExecutionReviewAgentsTools({
+          ...input.executionReviewTools,
+          budget,
+        })]
+      : [];
   const tools = [
     ...sfiaTools,
     ...journalTools,
     ...productTools,
+    ...executionReviewTools,
     ...(hostedTool ? [hostedTool] : []),
   ];
 
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
index 42c39db6..51b7f925 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/missionResultContractResultSemantic.ts
@@ -34,6 +34,16 @@ import {
   type MissionResultPayload,
 } from "./missionResultPayload";
 import fs from "node:fs";
+import path from "node:path";
+import {
+  EXECUTION_REVIEW_VERIFICATION_ER_KEY,
+  digestExecutionReviewVerificationPayload,
+  executionReviewVerificationLocationForAttempt,
+  isExecutionReviewVerificationEvidenceId,
+  isExecutionReviewVerificationPayload,
+  type ExecutionReviewVerificationPayload,
+} from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
+import { digestUtf8 } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
 
 export const MISSION_RESULT_RULE_REF =
   "w3b-contract-result/product-mission-result-v1" as const;
@@ -86,6 +96,102 @@ function loadMissionPayload(evidence: Evidence): MissionResultPayload | null {
   }
 }
 
+function loadVerificationPayload(
+  evidence: Evidence,
+): ExecutionReviewVerificationPayload | null {
+  const loc = evidence.location?.trim();
+  if (!loc) return null;
+  try {
+    if (!fs.existsSync(loc)) return null;
+    const raw = JSON.parse(fs.readFileSync(loc, "utf8")) as unknown;
+    if (!isExecutionReviewVerificationPayload(raw)) return null;
+    return raw;
+  } catch {
+    return null;
+  }
+}
+
+/** True when EC evidenceRequirements demand Studio VerifiedChangeSet observation. */
+export function missionRequiresStudioVerification(
+  material: ContractResultSemanticApplicabilityMaterial,
+): boolean {
+  const ers = material.evidenceRequirements ?? [];
+  return ers.includes(EXECUTION_REVIEW_VERIFICATION_ER_KEY);
+}
+
+export function verificationEvidenceFactsHold(input: {
+  attempt: ExecutionAttemptSnapshot;
+  evidence: Evidence;
+}): boolean {
+  if (input.attempt.status !== "succeeded") return false;
+  const e = input.evidence;
+  if (!isExecutionReviewVerificationEvidenceId(e.evidenceId)) return false;
+  if (e.status !== "verified") return false;
+  if (e.sourceKind !== "execution_attempt") return false;
+  if (e.provenance?.source !== "execution_adapter") return false;
+  if (!e.digest?.startsWith("sha256:")) return false;
+  if (!e.location?.trim()) return false;
+  if (e.bindings.executionAttemptId !== input.attempt.attemptId) return false;
+  if (
+    !e.bindings.executionContractId ||
+    e.bindings.executionContractId !== input.attempt.executionContractId
+  ) {
+    return false;
+  }
+  const payload = loadVerificationPayload(e);
+  if (!payload) return false;
+  const recomputed = digestExecutionReviewVerificationPayload(payload);
+  if (recomputed !== e.digest) return false;
+  if (payload.attemptId !== input.attempt.attemptId) return false;
+  if (payload.executionContractId !== input.attempt.executionContractId) {
+    return false;
+  }
+  // CP2-04 / CP3-06 — mismatch, non-OBSERVED, or missing required REO
+  // cannot support PASS. REO remains CLAIM; presence is attested on Verification Evidence.
+  if (payload.claimFactMismatch) return false;
+  if (payload.verificationStatus !== "OBSERVED") return false;
+  if (payload.reviewEndOfPresent !== true) return false;
+  // CP3-04 — OBSERVED requires durable VCS digest tied to persisted bytes.
+  if (payload.verifiedChangeSetDigest == null || !payload.verifiedChangeSetRef) {
+    return false;
+  }
+  const loc = e.location.trim();
+  const relPayload = executionReviewVerificationLocationForAttempt(
+    input.attempt.attemptId,
+  );
+  const normalizedLoc = loc.replace(/\\/g, "/");
+  const normalizedRel = relPayload.replace(/\\/g, "/");
+  if (!normalizedLoc.endsWith(normalizedRel)) return false;
+  const refsRoot = loc.slice(0, loc.length - relPayload.length).replace(
+    /[/\\]$/,
+    "",
+  );
+  const vcsAbs = path.join(refsRoot, payload.verifiedChangeSetRef);
+  if (!fs.existsSync(vcsAbs)) return false;
+  let durableBytes: Buffer;
+  try {
+    durableBytes = fs.readFileSync(vcsAbs);
+  } catch {
+    return false;
+  }
+  if (digestUtf8(durableBytes) !== payload.verifiedChangeSetDigest) {
+    return false;
+  }
+  return true;
+}
+
+function pickVerificationEvidence(
+  evidences: readonly Evidence[],
+  attempt: ExecutionAttemptSnapshot,
+): Evidence | undefined {
+  const bound = evidences.filter(
+    (e) =>
+      e.bindings.executionAttemptId === attempt.attemptId &&
+      isExecutionReviewVerificationEvidenceId(e.evidenceId),
+  );
+  return bound.length === 1 ? bound[0] : undefined;
+}
+
 export function missionResultEvidenceFactsHold(input: {
   attempt: ExecutionAttemptSnapshot;
   evidence: Evidence;
@@ -258,6 +364,9 @@ export function assessMissionResultEvidenceRequirement(input: {
   attempt: ExecutionAttemptSnapshot;
   evidence: Evidence;
   frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
+  verificationEvidence?: Evidence;
+  verificationFrozenSnapshot?: ReviewBundleEvidenceSnapshot;
+  requiresVerification?: boolean;
 }): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
   if (
     !isUsableFrozen({
@@ -267,6 +376,35 @@ export function assessMissionResultEvidenceRequirement(input: {
   ) {
     return "NOT_PROVEN";
   }
+  if (input.requirement === EXECUTION_REVIEW_VERIFICATION_ER_KEY) {
+    if (!input.verificationEvidence) return "NOT_PROVEN";
+    if (
+      !isUsableFrozen({
+        evidence: input.verificationEvidence,
+        snapshot: input.verificationFrozenSnapshot,
+      })
+    ) {
+      return "NOT_PROVEN";
+    }
+    return verificationEvidenceFactsHold({
+      attempt: input.attempt,
+      evidence: input.verificationEvidence,
+    })
+      ? "SATISFIED"
+      : "NOT_SATISFIED";
+  }
+  if (input.requirement === "evreq:local-write") {
+    // Technical effect class marker — satisfied when verification OBSERVED with
+    // no mismatch OR when verification not required for this EO path.
+    if (!input.requiresVerification) return "SATISFIED";
+    if (!input.verificationEvidence) return "NOT_PROVEN";
+    return verificationEvidenceFactsHold({
+      attempt: input.attempt,
+      evidence: input.verificationEvidence,
+    })
+      ? "SATISFIED"
+      : "NOT_SATISFIED";
+  }
   if (input.requirement !== MISSION_RESULT_ER_KEY) {
     if (
       input.requirement === "evreq:mission-trace-of-inspected-durable-facts" ||
@@ -279,6 +417,26 @@ export function assessMissionResultEvidenceRequirement(input: {
     return "NOT_PROVEN";
   }
   if (!missionResultEvidenceFactsHold(input)) return "NOT_SATISFIED";
+  // CP2-04 — when Studio verification is required, mission PASS needs both.
+  if (input.requiresVerification) {
+    if (!input.verificationEvidence) return "NOT_PROVEN";
+    if (
+      !isUsableFrozen({
+        evidence: input.verificationEvidence,
+        snapshot: input.verificationFrozenSnapshot,
+      })
+    ) {
+      return "NOT_PROVEN";
+    }
+    if (
+      !verificationEvidenceFactsHold({
+        attempt: input.attempt,
+        evidence: input.verificationEvidence,
+      })
+    ) {
+      return "NOT_SATISFIED";
+    }
+  }
   return "SATISFIED";
 }
 
@@ -311,6 +469,32 @@ export const missionResultContractResultSemantic: ContractResultSemantic = {
         incompleteReason: "mission_evidence_ambiguous",
       };
     }
+    const requiresVerification = missionRequiresStudioVerification(
+      input.material,
+    );
+    const verification = frozen.filter((s) =>
+      isExecutionReviewVerificationEvidenceId(s.evidenceId),
+    );
+    if (requiresVerification) {
+      if (verification.length === 0) {
+        return {
+          requiredEvidenceIds: [mission[0]!.evidenceId],
+          incompleteReason: "verification_evidence_absent_from_frozen_bundle",
+        };
+      }
+      if (verification.length > 1) {
+        return {
+          requiredEvidenceIds: [],
+          incompleteReason: "verification_evidence_ambiguous",
+        };
+      }
+      return {
+        requiredEvidenceIds: [
+          mission[0]!.evidenceId,
+          verification[0]!.evidenceId,
+        ],
+      };
+    }
     return {
       requiredEvidenceIds: [mission[0]!.evidenceId],
     };
@@ -318,6 +502,23 @@ export const missionResultContractResultSemantic: ContractResultSemantic = {
   assessExpectedOutput(input) {
     const evidence = pickMissionEvidence(input.evidences, input.attempt);
     if (!evidence) return "NOT_PROVEN";
+    const requiresVerification = missionRequiresStudioVerification(
+      input.material,
+    );
+    if (requiresVerification) {
+      const ver = pickVerificationEvidence(input.evidences, input.attempt);
+      if (!ver) return "NOT_PROVEN";
+      if (
+        !verificationEvidenceFactsHold({
+          attempt: input.attempt,
+          evidence: ver,
+        })
+      ) {
+        // mismatch / UNAVAILABLE → never PASS (NOT_PROVEN; FAIL only if
+        // deterministic contractual violation already exists elsewhere).
+        return "NOT_PROVEN";
+      }
+    }
     return assessMissionResultExpectedOutput({
       expectation: input.expectation,
       ordinal: input.ordinal,
@@ -334,12 +535,27 @@ export const missionResultContractResultSemantic: ContractResultSemantic = {
     const frozenSnapshot = input.frozenSnapshots.find(
       (s) => s.evidenceId === evidence.evidenceId,
     );
+    const requiresVerification = missionRequiresStudioVerification(
+      input.material,
+    );
+    const verificationEvidence = pickVerificationEvidence(
+      input.evidences,
+      input.attempt,
+    );
+    const verificationFrozenSnapshot = verificationEvidence
+      ? input.frozenSnapshots.find(
+          (s) => s.evidenceId === verificationEvidence.evidenceId,
+        )
+      : undefined;
     return assessMissionResultEvidenceRequirement({
       requirement: input.requirement,
       ordinal: input.ordinal,
       attempt: input.attempt,
       evidence,
       frozenSnapshot,
+      verificationEvidence,
+      verificationFrozenSnapshot,
+      requiresVerification,
     });
   },
 };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index dab249b1..bd81eed1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -995,6 +995,9 @@ export class StartExecution {
       (Array.isArray(contract.evidenceRequirements)
         ? contract.evidenceRequirements.map(String)
         : []);
+    const contractConstraints = Array.isArray(contract.constraints)
+      ? contract.constraints.map(String)
+      : undefined;
     const classified = deriveExecutableEffectsFromContractRequirements({
       evidenceRequirements,
       expectedOutputs: Array.isArray(contract.expectedOutputs)
@@ -1003,6 +1006,7 @@ export class StartExecution {
       requiredCapabilities: Array.isArray(contract.requiredCapabilities)
         ? contract.requiredCapabilities.map(String)
         : undefined,
+      constraints: contractConstraints,
       allowFilesystemCreateOrModify: true,
     });
     const gitExecutable = classified.executableEffects.filter(
@@ -1146,6 +1150,7 @@ export class StartExecution {
       requiredCapabilities: Array.isArray(contract.requiredCapabilities)
         ? contract.requiredCapabilities.map(String)
         : undefined,
+      constraints: contractConstraints,
       confirmations: request.confirmations ?? [],
       verifiedEffects: request.verifiedEffects,
       confirmationMatch: serverConfirmationMatch,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
index 05182fc5..1f71f016 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
@@ -202,6 +202,8 @@ export function deriveAuthorizedExecutionSlice(input: {
   requiredCapabilities?: readonly string[];
   evidenceRequirements?: readonly string[];
   expectedOutputs?: readonly string[];
+  /** EC constraints — EFFECT_CLASS:local-write → filesystem mutate. */
+  constraints?: readonly string[];
   confirmations?: readonly Confirmation[];
   nowIso?: string;
   allowDelete?: boolean;
@@ -240,6 +242,7 @@ export function deriveAuthorizedExecutionSlice(input: {
     evidenceRequirements: input.evidenceRequirements ?? [],
     expectedOutputs: input.expectedOutputs,
     requiredCapabilities: input.requiredCapabilities,
+    constraints: input.constraints,
     allowFilesystemCreateOrModify: true,
   });
 
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
index 2974500d..b7ba3394 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/contractEffectClassification.ts
@@ -22,11 +22,16 @@ export function isStudioVerificationObligation(req: string): boolean {
 /**
  * Derive Cursor-executable effects from effective EC requirements.
  * Verification-only families never produce Cursor mutation effects.
+ *
+ * CP2-01 — EFFECT_CLASS:local-write / evreq:local-write authorize
+ * filesystem.create+modify without docs_write Product taxonomy.
  */
 export function deriveExecutableEffectsFromContractRequirements(input: {
   evidenceRequirements?: readonly string[];
   expectedOutputs?: readonly string[];
   requiredCapabilities?: readonly string[];
+  /** EC constraints — EFFECT_CLASS:local-write grants FS mutate. */
+  constraints?: readonly string[];
   /** When true (docs_write createOrModify), filesystem create+modify may both be allowed. */
   allowFilesystemCreateOrModify?: boolean;
 }): {
@@ -39,10 +44,24 @@ export function deriveExecutableEffectsFromContractRequirements(input: {
       /artifact/i.test(o) ? "artifact" : o,
     ),
   ];
+  const constraints = input.constraints ?? [];
   const executable: CursorAuthorizedEffectId[] = [];
   const verification: VerificationObligationId[] = [];
 
+  const localWriteFromEffectClass = constraints.some(
+    (c) =>
+      c === "EFFECT_CLASS:local-write" ||
+      c.startsWith("EFFECT_CLASS:local-write"),
+  );
+  const localWriteFromEvreq = reqs.some(
+    (r) =>
+      r === "evreq:local-write" ||
+      /local-write|local_write|filesystem/i.test(r),
+  );
+
   const wantsArtifact =
+    localWriteFromEffectClass ||
+    localWriteFromEvreq ||
     reqs.some((r) => /artifact|docs_write|filesystem/i.test(r)) ||
     (input.expectedOutputs ?? []).some((o) => /artifact/i.test(o)) ||
     (input.requiredCapabilities ?? []).some((c) => /docs_write/i.test(c));
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
index 1b0fefd0..931cbfca 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
@@ -136,6 +136,12 @@ export type CursorExecutionReport = {
   /** Top-level narrative claim aliases (optional; prefer missionResult). */
   diagnosticSummary?: string;
   recommendedNextProductStep?: string;
+  /**
+   * Optional nested Cursor Review End Of CLAIM (D-ER-05).
+   * Logical distinctness from the machine report is required even when
+   * transport reuses this enveloppe. Studio never treats this as Fact/Evidence.
+   */
+  reviewEndOf?: import("./cursorReviewEndOf").CursorReviewEndOf;
 };
 
 export function mintCursorExecutionReportId(input: {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
index 6f20bdef..d9568db1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion.ts
@@ -245,6 +245,13 @@ export function qualifyExecutionContractCompletion(input: {
     executionContractId: input.contract.executionContractId,
     evidenceRequirements: input.contract.evidenceRequirements ?? [],
     requiredCapabilities: input.contract.requiredCapabilities ?? [],
+    constraints: Array.isArray(
+      (input.contract as unknown as { constraints?: unknown }).constraints,
+    )
+      ? (
+          (input.contract as unknown as { constraints: unknown[] }).constraints
+        ).map(String)
+      : undefined,
     confirmations: input.confirmations ?? [],
     nowIso: input.nowIso,
   });
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
index 762d663c..5b57020c 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
@@ -633,6 +633,13 @@ export function resolveAttemptExecutionProfile(
     requiredCapabilities: Array.isArray(contract.requiredCapabilities)
       ? contract.requiredCapabilities.map(String)
       : undefined,
+    constraints: Array.isArray(
+      (contract as unknown as { constraints?: unknown }).constraints,
+    )
+      ? (
+          (contract as unknown as { constraints: unknown[] }).constraints
+        ).map(String)
+      : undefined,
     allowFilesystemCreateOrModify: true,
   });
 
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index c9e7c1d9..d509b3cc 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -45,6 +45,8 @@ export * from "./domain/errors";
 export * from "./domain/invariants";
 export * from "./domain/realLaunchSafety";
 export * from "./domain/cursorExecutionReport";
+export * from "./domain/cursorReviewEndOf";
+export * from "./application/observeVerifiedChangeSet";
 export * from "./domain/authorizedExecutionSlice";
 export * from "./domain/contractEffectClassification";
 export * from "./domain/resolveGitEffectTarget";
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 369d64f5..b7134aac 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -328,6 +328,8 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     string,
     RealProcessObservation
   >();
+  /** processRef → worktreePath (gateway-local, Attempt/process-bound, not Product Truth). */
+  private readonly processWorktreeByRef = new Map<string, string>();
 
   constructor(options: StudioCursorRealLaunchGatewayOptions) {
     if (!options.processRunner) {
@@ -1090,6 +1092,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           worktreeRef: workspacePath,
         });
       }
+      this.processWorktreeByRef.set(invoked.processRef, workspacePath);
 
       return {
         outcome: "ack",
@@ -1112,19 +1115,36 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
   }
 
   async observe(processRef: string): Promise<RealProcessObservation | null> {
+    let obs: RealProcessObservation | null = null;
     if (typeof this.runner.observe === "function") {
-      return this.runner.observe(processRef);
+      obs = await this.runner.observe(processRef);
+    } else {
+      obs = this.fallbackObservations.get(processRef) ?? null;
     }
-    return this.fallbackObservations.get(processRef) ?? null;
+    return this.decorateWorktreeRef(processRef, obs);
   }
 
   async awaitCompletion(
     processRef: string,
   ): Promise<RealProcessObservation | null> {
+    let obs: RealProcessObservation | null = null;
     if (typeof this.runner.awaitCompletion === "function") {
-      return this.runner.awaitCompletion(processRef);
+      obs = await this.runner.awaitCompletion(processRef);
+    } else {
+      obs = await this.observe(processRef);
     }
-    return this.observe(processRef);
+    return this.decorateWorktreeRef(processRef, obs);
+  }
+
+  private decorateWorktreeRef(
+    processRef: string,
+    obs: RealProcessObservation | null,
+  ): RealProcessObservation | null {
+    if (!obs) return null;
+    if (obs.worktreeRef && obs.worktreeRef.trim()) return obs;
+    const known = this.processWorktreeByRef.get(processRef);
+    if (!known) return obs;
+    return { ...obs, worktreeRef: known };
   }
 }
 
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
index 49fc9056..f634021e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
@@ -39,7 +39,12 @@ export type CanonicalPathResult =
         | "double_encoding";
     };
 
-const DEFAULT_PROTECTED = [
+/**
+ * OA sandbox deny floor — Studio execution-run protected paths.
+ * Exported read-only so Product local-write qualification can compose the same floor
+ * without duplicating a second policy list in derive.
+ */
+export const SANDBOX_DEFAULT_PROTECTED_PATHS = [
   ".git/",
   ".env",
   "method/",
@@ -49,6 +54,74 @@ const DEFAULT_PROTECTED = [
   "node_modules/",
 ] as const;
 
+/**
+ * MD-CP4-02 Option C — Morris-approved Studio governance protection set.
+ * PREFIX: sfia-v3-framing/** ; EXACT: Build Doctrine / Roadmap / D-ER architecture / C1.
+ * NOT a blanket deny of projects/sfia-studio/** or projects/sfia-studio/convergence/**.
+ * Composition lives in this sandbox policy layer — not a second policy engine.
+ */
+export const STUDIO_GOVERNANCE_PROTECTED_PATHS = [
+  "projects/sfia-studio/sfia-v3-framing/",
+  "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
+  "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
+  "projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md",
+  "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
+] as const;
+
+/**
+ * Effective Product write protection = sandbox floor ∪ Studio governance set.
+ * Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` is intentionally NOT included.
+ */
+export const STUDIO_PRODUCT_PROTECTED_PATHS = [
+  ...SANDBOX_DEFAULT_PROTECTED_PATHS,
+  ...STUDIO_GOVERNANCE_PROTECTED_PATHS,
+] as const;
+
+/**
+ * Classify a repository-relative path under Studio Product write protection.
+ * Returns the matched protected entry, or null when ordinary (not protected).
+ * Invalid / hostile paths return a synthetic "INVALID_PATH" hit (fail-closed).
+ */
+export function classifyStudioProductProtectedPath(
+  repoRelativePath: unknown,
+): string | null {
+  const canonical = normalizeCanonicalPath(repoRelativePath);
+  if (!canonical.ok) return "INVALID_PATH";
+  const normalized = canonical.normalized;
+  for (const prot of STUDIO_PRODUCT_PROTECTED_PATHS) {
+    if (pathMatchesAllowlistPrefix(normalized, prot)) return prot;
+  }
+  return null;
+}
+
+/**
+ * Studio Product write-path gate (protection only — no allowlist inventiveness).
+ * Ordinary non-protected paths are allowed at this layer; mission scope / EC
+ * still decide what may actually be written.
+ */
+export function evaluateStudioProductWritePath(input: {
+  readonly path: unknown;
+}):
+  | { readonly allowed: true; readonly normalized: string }
+  | {
+      readonly allowed: false;
+      readonly reason: Exclude<
+        Extract<SandboxPathDecision, { allowed: false }>["reason"],
+        "not_allowlisted" | "arbitrary_command" | "git_write" | "branch_mismatch" | "head_mismatch" | "observed_missing"
+      >;
+      readonly hit?: string;
+    } {
+  const canonical = normalizeCanonicalPath(input.path);
+  if (!canonical.ok) {
+    return { allowed: false, reason: canonical.reason };
+  }
+  const hit = classifyStudioProductProtectedPath(canonical.normalized);
+  if (hit != null) {
+    return { allowed: false, reason: "protected", hit };
+  }
+  return { allowed: true, normalized: canonical.normalized };
+}
+
 const DANGEROUS_ENCODED = /%(?:00|2e|2f|5c)/i;
 
 function decodePercentOnce(raw: string): CanonicalPathResult {
@@ -138,7 +211,7 @@ export function evaluateSandboxPath(input: {
   }
   const normalized = canonical.normalized;
   const protectedPaths = [
-    ...DEFAULT_PROTECTED,
+    ...SANDBOX_DEFAULT_PROTECTED_PATHS,
     ...(input.protectedPaths ?? []),
   ];
   for (const p of protectedPaths) {
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
index f16739a8..d7d89ac9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -92,10 +92,15 @@ export {
   validateUntrustedProviderResult,
 } from "./domain/providerBoundary";
 export {
+  classifyStudioProductProtectedPath,
   evaluateSandboxMutationGuards,
   evaluateSandboxPath,
+  evaluateStudioProductWritePath,
   normalizeCanonicalPath,
   pathMatchesAllowlistPrefix,
+  SANDBOX_DEFAULT_PROTECTED_PATHS,
+  STUDIO_GOVERNANCE_PROTECTED_PATHS,
+  STUDIO_PRODUCT_PROTECTED_PATHS,
 } from "./domain/sandboxContract";
 export type {
   CanonicalPathResult,
diff --git a/projects/sfia-studio/app/lib/oa/git-ports/localGitStatusDiffPort.ts b/projects/sfia-studio/app/lib/oa/git-ports/localGitStatusDiffPort.ts
index eca8e682..962cd849 100644
--- a/projects/sfia-studio/app/lib/oa/git-ports/localGitStatusDiffPort.ts
+++ b/projects/sfia-studio/app/lib/oa/git-ports/localGitStatusDiffPort.ts
@@ -65,14 +65,22 @@ export class NodeLocalGitStatusDiffPort implements LocalGitStatusDiffPort {
     if (pathspecs.length > 0) diffArgs.push("--", ...pathspecs);
     const diffRes = await runGit(diffArgs, input.repoPath);
 
+    // Never treat stderr as porcelain — git error text is not a status line.
+    // Non-zero `git status` (incl. non-repo cwd) must fail closed for observers.
+    if (statusRes.exitCode !== 0) {
+      const detail = (statusRes.stderr || statusRes.stdout || "non-zero exit")
+        .trim()
+        .slice(0, 240);
+      throw new Error(`git_status_failed: ${detail || "non-zero exit"}`);
+    }
+
     const branch =
       branchRes.exitCode === 0 ? branchRes.stdout.trim() || null : null;
     const headSha =
       headRes.exitCode === 0
         ? headRes.stdout.trim().toLowerCase() || null
         : null;
-    const statusPorcelain =
-      statusRes.exitCode === 0 ? statusRes.stdout : statusRes.stderr;
+    const statusPorcelain = statusRes.stdout;
     const dirty = statusPorcelain.trim().length > 0;
 
     return {
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 75b2974e..47e3a2ec 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,11 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 04 RESUMED** | 2026-10-01 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE CORRECTION PASS 04 RESUMED AFTER MORRIS DECISION** · SAME MACRO · Cycle **8** · EVOL · CRITICAL · CKC `ckc:studio:delivery` · Architecture **D-ER-01…D-ER-15 CONSUMED** · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` · branche `delivery/sfia-studio-generic-execution-review-result-convergence-01` · entry STOP handoff `2daf0dc3284d4188c2893eb429dcf429e598834f` / blob `4b91cc6fb5e402585001ec6ea609d561d1fb8abc` · entry CP3 `47e7e593…` · **MD-CP4-01 CONSUMED** (Proposal sealedExecutionBasis Product carrier) · **MD-CP4-02 OPTION C CONSUMED** (sandbox floor ∪ STUDIO_GOVERNANCE_PROTECTED_PATHS) · CP4-01 WIRED · CP4-02 IMPLEMENTED · preuve **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · durableLocalWriteSeal = transitional domain seam only · next = ChatGPT Critical Review Pass 04 resume → Morris GO commit/push/PR · runtime v3 = **NON ADOPTED** · **≠** INTEGRATED ON MAIN · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 04** | 2026-10-01 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE CORRECTION PASS 04** · SAME MACRO · Cycle **8** · EVOL · CRITICAL · CKC `ckc:studio:delivery` · Architecture **D-ER-01…D-ER-15 CONSUMED** · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` · branche `delivery/sfia-studio-generic-execution-review-result-convergence-01` · entry handoff CP3 `47e7e5930980cc5aa2172ec70a14077aaff74629` / blob `dba5d65df9cc289fe22a3e10849744d0e8367006` · **STOP — MORRIS DECISION REQUIRED** (CP4-02) then **SUPERSEDED** by Pass 04 RESUMED tip after MD-CP4-01/MD-CP4-02 · historical STOP tip retained · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 03** | 2026-10-01 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE CORRECTION PASS 03** · SAME MACRO · Cycle **8** · EVOL · CRITICAL · CKC `ckc:studio:delivery` · Architecture **D-ER-01…D-ER-15 CONSUMED** · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` · branche `delivery/sfia-studio-generic-execution-review-result-convergence-01` · entry handoff Pass 02 régularisé `3a9dc0acf3559fb25978a80331078b49a4887aaa` / blob `52d991da297e406eee25b84c67dc4af8b6e68cdf` · CP3-01…CP3-09 closed · preuve then claimed **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ChatGPT Critical Review CP3 = **NOT READY** (Product seal injection + incomplete protected paths + Living Ref CURRENT drift) · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · corrections : Product decideTrajectory durableLocalWriteSeal (no Decision.save fabrication) · protected path fail-closed via SFIA_DEFAULT_PROTECTED_PATHS · nominal Git HEAD binding · durable VerifiedChangeSet digest binding · REO Attempt/EC/repo/base binding · missing REO blocks PASS · nominal W3-C enables execution_review_* tools · ReviewItem integrity · front-door oracle honesty · debt : docs_write bridges / retention GC / Git promotion / NoteLite REAL · superseded as tip by Correction Pass 04 · runtime v3 = **NON ADOPTED** · **≠** INTEGRATED ON MAIN · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 02** | 2026-10-01 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE CORRECTION PASS 02** · SAME MACRO · Cycle **8 — Delivery / implémentation** · EVOL · CRITICAL · CKC `ckc:studio:delivery` / `ckc/08-delivery-implementation.md` · Architecture **D-ER-01…D-ER-15 CONSUMED** (no redesign) · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` · branche locale `delivery/sfia-studio-generic-execution-review-result-convergence-01` · entry handoff Correction Pass 01 Critical Review `d72306051421f48316c2412002d057d4e730a2e7` · CP2-01…CP2-10 closed · preuve **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · capacité = **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · NoteLite PAUSED · READY FOR REAL **NO** · corrections : authorized generic local-write from durable DecisionBasis (≠ Product write taxonomy) · NodeLocalGitStatusDiffPort Git delta (no full-repo scan) · native Cursor REO only (no Studio synthesis) · Verification Evidence `ev:execution-review:*` in same RB → ContractResult coherence · Nora actual `execution_review_*` tool calls · Result Surface real fields · Pilot `w2ReadExecutionReviewItemAction` · mounted scheduled continue + remount (no abandon counter) · debt acceptable : docs_write bridge / retention GC / Git promotion / NoteLite REAL · next = ChatGPT Critical Review Pass 02 → Morris GO commit/push/PR · runtime v3 = **NON ADOPTED** · **≠** INTEGRATED ON MAIN · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 delivery candidate** | 2026-09-29 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE DELIVERY CANDIDATE** · Cycle **8** · Correction Pass 01 · preuve then claimed DETERMINISTIC PRODUCT E2E · superseded as tip by Correction Pass 02 after ChatGPT Critical Review NOT READY (handoff `d7230605…`) · historical tip retained · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
 | **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-ARCHITECTURE-01 truth-sync** | 2026-09-29 — **GENERIC EXECUTION / REVIEW / RESULT — ARCHITECTURE TRUTH-SYNC** · Cycle **6 — Architecture technique** · DOC / EVOL · CRITICAL · CKC `cyc:technical-architecture` / `ckc/06-architecture-technique.md` (**CONTENT VALIDATED BY MORRIS** · guidance only · **≠** execution authority) · Morris decisions **D-ER-01…D-ER-15 ADOPTED** (2026-09-29) · **CURRENT main** `origin/main` @ `6f47f74dc9b515c4c79624b21772223ba02c76cd` · capacité **PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01** = **INTEGRATED ON MAIN** via PR **#540** merge `6f47f74d…` (head `47fcab2b…`) · campagne **NoteLite bounded REAL** = **RÉALISÉE AT TESTED SCOPE** puis **PAUSED** à ce point (correction governed **non relancée** · cycle NoteLite **non finalisé**) · findings bornés : EC→Attempt REAL→Cursor REAL→terminal succeeded→durable Evidence/RB/CE→Product Resolution→Nora post-Evidence→Nora conversationnelle **sans transfer d’IDs Pilote** · **NOT_PROVEN** honesty préservée · gap nominal post-terminal / UI « qualification en cours » + clic « Recharger résultat produit » = **HIGH-CONFIDENCE ARCHITECTURAL CAUSE** (poll UI ≤8 / pas de worker autonome) **≠ PROVEN INSTANCE ROOT CAUSE** · **ADOPTED TARGET** = un modèle Product d’exécution **générique** · **toutes** taxonomies de tâche Product spécialisées (`docs_write`, `code_write`, `read`, `read_only`, …) = **RETIRE FROM PRODUCT MODEL** · capabilities/effects techniques = **enforcement-only possibles** · **interdit** inventer `generic_read` / `generic_write` / `generic_code` comme catégories Product · isolated Git worktree = **KEEP** · Cursor Generalist = **KEEP** · CursorExecutionReport = **CLAIM KEEP** · Generic Execution Review Material = **TARGET** · Native Review End Of = **TARGET** (harvest sémantique · **≠** import transport `.tmp-sfia-review` / `sfia/review-handoff`) · Studio VerifiedChangeSet = **TARGET** · Product Resolution = **KEEP / COMPLETE** · Continuity Projection + Reconciler = **KEEP** (Reconciler = owner progression déterministe) · Nora Deep Review = **TARGET** sur shared cognitive core (**≠** second Nora) · Result Surface = **KEEP / COMPLETE** · Review Material retention HOT→PRUNED = **TARGET** · document architecture = `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` (**ADOPTED TARGET BY MORRIS — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION**) · ancienne hypothèse **5 lots Delivery** = **NOT ADOPTED** · **DELIVERY SLICING = TBD AFTER ARCHITECTURE REVIEW** · future Delivery = **DISTINCT Morris GO** · future REAL / READY FOR REAL = **DISTINCT Morris GO** · **READY FOR REAL = NO** · runtime v3 = **NON ADOPTED** · **≠** code Product modifié ce cycle · **≠** Delivery authorized · **≠** NoteLite finalized · **≠** full E2E REAL proven · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** · **next** = ChatGPT Critical Review of architecture truth-sync → puis seulement Delivery slicing design |
 | **Timestamp maintenance NATIVE-EXECUTION-LOOP-CONVERGENCE-01 post-merge verification** | 2026-09-26 — **NATIVE EXECUTION LOOP CONVERGENCE — POST-MERGE VERIFICATION / ROADMAP TRUTH-SYNC / CAPITALISATION** · Macro **NATIVE-EXECUTION-LOOP-CONVERGENCE-01** · **SAME MACRO / NO MICRO-CYCLE** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · Morris GO **POST-MERGE / DOCUMENTARY TRUTH-SYNC / CAPITALISATION** **CONSUMED** (local docs only · **≠** project commit/push/PR) · protected path authorization = Convergence Roadmap + capitalisation asset under `convergence/**` **ONLY** · Build Doctrine / C1 / framing / method / prompts = **READ ONLY** · PR **#527 MERGED** · product head `5a05a2a7082bc140393f18647a56f1ed23cef73c` · merge/main `e486e81f2443bb9837b4bbdc1967cf5d1368f4d9` · pre-merge CI **#614** run `36261815679` **SUCCESS / Required Gate PASS** · post-merge CI **#615** run `36262627727` **SUCCESS / Required Gate PASS** · Product head→merge app parity **ZERO** · capacité **NATIVE EXECUTION LOOP CONVERGENCE** = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · proof = **DETERMINISTIC / LOCAL + PR/CI INTEGRATION ONLY** · **ZERO NEW REAL** · runtime v3 = **NON ADOPTED** · Product Completion = historical **COMPLETE/CLOSED** (**≠** newly completed by NELC) · remaining governed debts = **D1** optional first-class typed EC input bridge · optional mid-turn repository SHA stamp · future bounded REAL under **distinct Morris GO** · **next activity** = MealFlow semantic reservation campaign (**observation / qualification** · **NOT STARTED / NOT AUTHORIZED** by this documentary sync) · **NEXT MACRO CAPABILITY** = **NOT YET DETERMINED** · future bounded REAL of native loop = **OPEN GOVERNED PROOF OPTION / DISTINCT MORRIS GO** (**≠** auto-selected next capability) · **≠** READY FOR REAL · **≠** Product READY · **≠** runtime v3 ADOPTED · repository truth = **RESOLVE FROM GIT / PR evidence** · capitalisation asset = `projects/sfia-studio/convergence/sfia-studio-native-execution-loop-convergence-01-capitalisation.md` (**LOCAL DOCUMENTARY CANDIDATE** until distinct Git integration GO) |
 | **Timestamp maintenance CYCLE-RESERVATION-PILOTING-01 post-merge verification** | 2026-09-25 — **CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — POST-MERGE VERIFICATION / ROADMAP TRUTH-SYNC** · Macro **CYCLE-RESERVATION-PILOTING-01** · Cycle **14** · Post-merge · DOC · CRITICAL · Morris GO **POST-MERGE DOCUMENTARY TRUTH-SYNC — ROADMAP PROTECTED PATH ONLY** **CONSUMED** · PR **#518 MERGED** · product head `f0874ec05fec4237a6f39311b90c9233debce5f5` · merge/main `29f1597951bd6e4d779cc728f46396e28b8f5aa0` · PR CI **#595** run `36100845339` **SUCCESS / Required Gate PASS** · post-merge CI **#596** run `36101841229` **SUCCESS / Required Gate PASS** · capacité **CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING** = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · same-macro construction reserves = **ZERO** at reviewed scope · protected Roadmap truth-sync = local documentary candidate under this cycle until Git integration · Product Completion = historical **COMPLETE/CLOSED** (**≠** newly completed) · Nora Cognitive Completion = **NOT COMPLETE** · global semantic Reservation quality = **NOT PROVEN** · READY FOR REAL global = **NO** · runtime v3 = **NON ADOPTED** · **next** = MealFlow semantic reservation campaign (**observation / qualification** · **NOT STARTED** by this documentary sync · **≠** new macro pre-authorized) · Git / PR evidence remains authoritative · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index f6d81c37..df6f99f6 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -139,3 +139,11 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
 - **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
 - **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)
+
+## Generic Execution → Review → Result (CURRENT — Correction Pass 02 candidate)
+
+Nominal Product path (architecture D-ER; delivery candidate, LOCAL CANDIDATE / NOT INTEGRATED ON MAIN):
+
+HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).
+
+CURRENT: docs_write specialized persist remains TRANSITIONAL dual-write bridge. Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index cf981abf..64664fc2 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -39,3 +39,24 @@
 - DETERMINISTIC PROVEN (seam/unit)
 - REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
 - Runtime v3 **NON ADOPTED**; Product global READY **not claimed**
+
+## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01
+
+| Proof | Level | Notes |
+| --- | --- | --- |
+| Front-door authorized local-write → Git FACTS mismatch → Evidence/CE → Nora tool → Pilot | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** | Correction Pass 02 · `genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts` |
+| NodeLocalGitStatusDiffPort observes delta only / HEAD H0 / UNAVAILABLE fail-closed | DETERMINISTIC AT TESTED SCOPE | `cp2Seams` + frontDoor |
+| Native Cursor REO present; missing REO stays missing (no synthetic) | DETERMINISTIC AT TESTED SCOPE | frontDoor + finalize |
+| Verification Evidence in same RB → ContractResult ≠ PASS under mismatch | DETERMINISTIC AT TESTED SCOPE | frontDoor + missionResultContractResultSemantic |
+| Nora Agents actual `execution_review_get_manifest` tool call | DETERMINISTIC AT TESTED SCOPE | frontDoor CP2-05 |
+| Result Surface real data + Pilot itemId server read | DETERMINISTIC AT TESTED SCOPE | TrajectorySurface + `w2ReadExecutionReviewItemAction` |
+| Mounted scheduled continue + remount auto-resume / same Attempt | DETERMINISTIC AT TESTED SCOPE | trajectorySurface + frontDoor (no total abandon counter) |
+| 0-file OBSERVED ≠ verification UNAVAILABLE | DETERMINISTIC AT TESTED SCOPE | cp2Seams |
+| Product Continuity shared knowledge non-regression | DETERMINISTIC AT TESTED SCOPE | existing continuity suites |
+| REAL generic / NoteLite replay | **NOT PROVEN** | ZERO REAL this macro |
+
+### GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 03
+- Front-door Product oracle: decideTrajectory durableLocalWriteSeal (no Decision repository fabrication).
+- Nominal Git HEAD binding; durable VerifiedChangeSet digest; REO binding; missing REO blocks ContractResult PASS.
+- W3-C nominally enables execution_review_* tools; ReviewItem integrity checked.
+- Proof ceiling claimed when EP/T green: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0d817466..2689802b 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -32,11 +32,32 @@
 - Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
 - REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).
 
-## Next macro
+## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (CURRENT MACRO — local candidate)
 
-`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` **local candidate** on branch `delivery/sfia-studio-product-continuity-shared-knowledge-01`. Capacité suivante après revue: **SprintBoard REAL re-proof bornée** (Gate Morris distinct).
+- **CURRENT MACRO** on branch `delivery/sfia-studio-generic-execution-review-result-convergence-01` · Correction Pass **04 RESUMED AFTER MORRIS DECISION** · **CLOSED FOR CRITICAL REVIEW**.
+- **CP4-01 WIRED** — Product carrier = Proposal `PresentedOptionSet.sealedExecutionBasis` → pursue HumanDecision → DecisionBasis → generic local-write (MD-CP4-01 consumed). MAIN front-door oracle does **not** inject `durableLocalWriteSeal`.
+- **CP4-02 OPTION C IMPLEMENTED** — Studio Product write protection = sandbox floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Build Doctrine / Roadmap / D-ER architecture / C1). No blanket `projects/sfia-studio/**` deny. No Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` as Product classifier.
+- Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
+- Historical: Correction Pass 04 STOP (Morris decision required on CP4-02) superseded by MD-CP4-01/MD-CP4-02 resume — see prior tip / handoff `2daf0dc3…`.
+- docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material) — exit when historical callers = 0.
+- `durableLocalWriteSeal` domain seam: **TRANSITIONAL** (isolated domain/tests only) — exit when GOVERNED trajectory Product carrier is retired or superseded; never browser/client.
+- NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
+- Retention GC / Git promotion: **NOT IMPLEMENTED**.
+- Next = ChatGPT Critical Review of Correction Pass 04 resume → Morris GO commit/push/PR (distinct).
 
-## Prior overlay retained
+### Historical — Correction Pass 04 STOP (superseded)
+
+Prior documentary tip recorded **STOP — MORRIS DECISION REQUIRED** (CP4-02) with CP4-01 SOURCE FOUND / NOT WIRED. Morris decisions MD-CP4-01 + MD-CP4-02 Option C consumed; this CURRENT section supersedes that STOP state.
+
+## Next / CURRENT REAL campaign
+
+NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this delivery macro.
+
+## Prior overlay retained — PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01
+
+`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` is **INTEGRATED ON MAIN** (historical). Prior tip wording « local candidate » is obsolete as CURRENT next macro.
+
+## Prior overlay retained — POST-EXECUTION
 
 `POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01` **local candidate** on branch `feat/sfia-studio-post-execution-handoff-01`. Capacité suivante après revue: **reprise SprintBoard REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL / END-TO-END REAL.
 
@@ -116,3 +137,11 @@
 | `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |
 
 No `retired-components-ledger.md` — zero components removed.
+
+### CP4 residual reserves (acceptable debt after resume)
+- docs_write compatibility bridges retained
+- Review Material GC/retention not implemented
+- Git promotion of reviewed candidate not implemented
+- NoteLite REAL re-proof deferred (Morris GO distinct)
+- Nora model/provider tuning deferred
+- `durableLocalWriteSeal` domain API transitional (tests/domain only — not Product front door)
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 56917ea5..6159c7ca 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,8 +1,8 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "6beb8cc369bd9b82eebee97b70309838373b3dfa",
-  "lastReviewedAt": "2026-09-27T18:42:24.911Z",
+  "lastReviewedCommit": "d4d986af5884b31b416374da3cb5e60757501f87",
+  "lastReviewedAt": "2026-10-01T22:00:20.000Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "2b33f2c9648004ec"
+      "sha256_16": "4059db411bb5a428"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "8fc11fd081bb37dc"
+      "sha256_16": "7c7596c841933c67"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "7f9b17310ec84156"
+      "sha256_16": "439b50db8e68633d"
     }
   ],
   "components": [

```

#### NEW FILES BUNDLE (full content)
# NEW FILES BUNDLE — CP4 RESUME


===== BEGIN FILE: projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.cp2Seams.d0.test.ts =====

/**
 * CP2 unit seams — local-write qualification, Git observer, REO provenance,
 * shared Pilot reader, anti-stall schedule policy.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";
import { canQualifyGenericLocalWriteFromDurableFacts } from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import {
  buildProductQualifiedLocalWriteWork,
  type ActualExecutionWork,
} from "@/features/project-assistant/w2/w3aActualExecutionWork";
import {
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { observeVerifiedChangeSetStrict } from "@/lib/oa/execution-attempt/application/observeVerifiedChangeSet";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { resolveCursorReviewEndOfClaim } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
import {
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt/domain/cursorExecutionReport";
import { mintCursorReviewEndOfId } from "@/lib/oa/execution-attempt/domain/cursorReviewEndOf";
import { readBoundExecutionReviewItem } from "@/features/project-assistant/f3/readBoundExecutionReviewItem";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  nextReconcileContinueDelayMs,
  shouldAutoResumeReconcileOnRemount,
  shouldContinueReconcileNominally,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";

function git(cwd: string, ...args: string[]): string {
  return execSync(["git", ...args].join(" "), {
    cwd,
    encoding: "utf8",
  }).trim();
}

function tempGitRepo(): { repo: string; h0: string } {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), "gerrc-cp2-git-"));
  git(repo, "init");
  git(repo, "config", "user.email", "cp2@test.local");
  git(repo, "config", "user.name", "CP2");
  fs.writeFileSync(path.join(repo, "baseline.txt"), "v0\n", "utf8");
  fs.writeFileSync(path.join(repo, "untouched.txt"), "keep\n", "utf8");
  git(repo, "add", "baseline.txt", "untouched.txt");
  git(repo, "commit", "-m", "H0");
  const h0 = git(repo, "rev-parse", "HEAD").toLowerCase();
  return { repo, h0 };
}

function basisWithLocalWrite(paths: string[]) {
  return {
    selectedOptionRef: GOVERNED_OPTION_REF,
    executionBasis: {
      intentKind: "governed_local_mutation",
      targetPath: paths[0],
      scopeIn: paths,
      scopeOut: ["GIT_COMMIT", "GIT_PUSH", "GIT_PR"],
      reversibilityExpectation: "reversible_worktree",
      stopConditions: [],
    },
    decisionBasisVersion: 1,
    pointsRequiringReview: [],
  } as never;
}

afterEach(() => {
  // noop — temp dirs cleaned by OS; avoid leaking process cwd
});

describe("CP2-01 — product-qualified local-write from durable facts", () => {
  it("qualifies GOVERNED + sealed paths + reversible → local-write", () => {
    const qual = canQualifyGenericLocalWriteFromDurableFacts({
      basis: basisWithLocalWrite(["a.md", "baseline.txt"]),
      selectedOptionRef: GOVERNED_OPTION_REF,
    });
    expect(qual.ok).toBe(true);
    if (!qual.ok) return;
    const work = buildProductQualifiedLocalWriteWork({
      projectId: "prj:test",
      allowedPaths: qual.allowedPaths,
      rollbackAvailable: true,
      qualificationSource: "test",
    });
    expect("ok" in work && (work as { ok?: boolean }).ok === false).toBe(false);
    const okWork = work as ActualExecutionWork;
    expect(okWork.effectClass).toBe("local-write");
    expect(okWork.operationKind).toBe("local-write");
  });

  it("refuses CLARIFY / docs_write / missing paths / irreversible", () => {
    expect(
      canQualifyGenericLocalWriteFromDurableFacts({
        basis: basisWithLocalWrite(["a.md"]),
        selectedOptionRef: CLARIFY_OPTION_REF,
      }).ok,
    ).toBe(false);

    const docs = basisWithLocalWrite(["a.md"]) as {
      executionBasis: { intentKind?: string };
    };
    docs.executionBasis.intentKind = "docs_write";
    expect(
      canQualifyGenericLocalWriteFromDurableFacts({
        basis: docs as never,
        selectedOptionRef: GOVERNED_OPTION_REF,
      }).ok,
    ).toBe(false);
  });
});

describe("CP2-02 — NodeLocalGitStatusDiffPort observes delta only", () => {
  it("OBSERVED: created + modified only; never whole-repo as created", async () => {
    const { repo, h0 } = tempGitRepo();
    fs.writeFileSync(path.join(repo, "a.md"), "A\n", "utf8");
    fs.writeFileSync(path.join(repo, "baseline.txt"), "v1\n", "utf8");
    fs.writeFileSync(path.join(repo, "b.md"), "B\n", "utf8");
    const port = new NodeLocalGitStatusDiffPort();
    const observed = await observeVerifiedChangeSetStrict({
      observationMode: "git",
      worktreePath: repo,
      expectedBaseSha: h0,
      statusDiffPort: port,
      report: {
        reportId: "rpt:t",
        schemaVersion: "cursor-execution-report/v1",
        attemptId: "xat:t",
        executionContractId: "xct:t",
        status: "succeeded",
        baseSha: h0,
        fileEffects: {
          created: ["a.md"],
          modified: ["baseline.txt"],
          deleted: [],
        },
      } as never,
    });
    expect(observed.ok).toBe(true);
    expect(observed.verificationStatus).toBe("OBSERVED");
    if (!observed.ok) return;
    const vcs = observed.changeSet;
    expect(vcs.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "b.md",
      "baseline.txt",
    ]);
    expect(vcs.all.some((e) => e.path === "untouched.txt")).toBe(false);
    expect(vcs.claimFactMismatch).toBe(true);
    expect(vcs.unclaimedObservedPaths).toEqual(["b.md"]);
    expect(vcs.observedHeadSha).toBe(h0);
    fs.rmSync(repo, { recursive: true, force: true });
  });

  it("Git observer failure → UNAVAILABLE (never invent empty FACTS)", async () => {
    const failingPort = {
      async statusDiff(): Promise<never> {
        throw new Error("git statusDiff unavailable");
      },
    };
    const observed = await observeVerifiedChangeSetStrict({
      observationMode: "git",
      worktreePath: fs.mkdtempSync(path.join(os.tmpdir(), "gerrc-cp2-failport-")),
      expectedBaseSha: "deadbeef",
      statusDiffPort: failingPort as never,
    });
    expect(observed.verificationStatus).toBe("UNAVAILABLE");
    expect(observed.ok).toBe(false);
  });

  it("0-file OBSERVED ≠ UNAVAILABLE", async () => {
    const { repo, h0 } = tempGitRepo();
    const observed = await observeVerifiedChangeSetStrict({
      observationMode: "git",
      worktreePath: repo,
      expectedBaseSha: h0,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      report: {
        reportId: "rpt:t",
        schemaVersion: "cursor-execution-report/v1",
        attemptId: "xat:t",
        executionContractId: "xct:t",
        status: "succeeded",
        baseSha: h0,
        fileEffects: { created: [], modified: [], deleted: [] },
      } as never,
    });
    expect(observed.ok).toBe(true);
    expect(observed.verificationStatus).toBe("OBSERVED");
    if (!observed.ok) return;
    expect(observed.changeSet.all).toEqual([]);
    fs.rmSync(repo, { recursive: true, force: true });
  });
});

describe("CP2-03 — REO provenance (no Studio synthesis)", () => {
  function baseReport(
    extras: Partial<CursorExecutionReport> = {},
  ): CursorExecutionReport {
    return {
      reportId: mintCursorExecutionReportId({
        attemptId: "xat:t",
        executionContractId: "xct:t",
      }),
      schemaVersion: "cursor-execution-report/v1",
      attemptId: "xat:t",
      executionContractId: "xct:t",
      status: "succeeded",
      baseSha: "abc",
      fileEffects: { created: [], modified: [], deleted: [] },
      ...extras,
    } as CursorExecutionReport;
  }

  it("native REO present → present=true", () => {
    const reviewEndOfId = mintCursorReviewEndOfId({
      attemptId: "xat:t",
      executionContractId: "xct:t",
    });
    const resolved = resolveCursorReviewEndOfClaim(
      baseReport({
        reviewEndOf: {
          schemaVersion: "oa.cursor-review-end-of.1",
          reviewEndOfId,
          attemptId: "xat:t",
          executionContractId: "xct:t",
          timestamp: "2026-08-23T04:30:00.000Z",
          repositoryRef: "repo:test",
          baseSha: "abc",
          verdict: "succeeded",
          objective: "test",
          scopeTreated: "local",
          workPerformed: ["wrote a.md"],
          filesCreated: ["a.md"],
          filesModified: [],
          filesDeleted: [],
          validations: [],
          deviations: [],
          blockers: [],
          reservations: [],
          stopConditionsMet: [],
          claims: [],
          pointsRequiringReview: [],
        },
      } as never),
    );
    expect(resolved.present).toBe(true);
    expect(resolved.reviewEndOf).not.toBeNull();
  });

  it("missing REO → present=false, no synthetic", () => {
    const resolved = resolveCursorReviewEndOfClaim(baseReport());
    expect(resolved.present).toBe(false);
    expect(resolved.reviewEndOf).toBeNull();
  });
});

describe("CP2-07 — readBoundExecutionReviewItem security", () => {
  it("denies cross-project / unknown item / path traversal by contract", async () => {
    const denied = await readBoundExecutionReviewItem({
      projectId: "prj:B",
      attemptId: "xat:A",
      itemId: "item:A",
      refsRoot: fs.mkdtempSync(path.join(os.tmpdir(), "gerrc-cp2-refs-")),
    });
    expect(denied.ok).toBe(false);
  });
});

describe("CP2-08 — anti-stall continue policy", () => {
  it("schedules forever while RUNNING; remount resumes; no abandon budget", () => {
    const running = {
      stage: "RUNNING" as const,
      nextDeterministicAction: "AWAIT_EXTERNAL",
    };
    expect(shouldContinueReconcileNominally(running)).toBe(true);
    expect(shouldAutoResumeReconcileOnRemount(running)).toBe(true);
    expect(nextReconcileContinueDelayMs(1)).toBeGreaterThan(0);
    expect(nextReconcileContinueDelayMs(LEGACY_UI_RUNNING_POLL_BUDGET + 20)).toBeGreaterThan(0);
    expect(
      shouldContinueReconcileNominally({
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(false);
  });
});

===== END FILE: projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.cp2Seams.d0.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts =====

/**
 * GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 — deterministic core proofs.
 * Correction Pass 02 unit seams (CP2-01 … CP2-08):
 * - CP2-01 durable-fact local-write qualification (no docs_write taxonomy)
 * - CP2-02 Git observation mode — no full-repo fallback, HEAD integrity
 * - CP2-03 no synthetic Cursor Review End Of
 * - CP2-04 Verification Evidence prerequisites (ER keys / payload facts)
 * - CP2-07 shared bound reader security (Nora tool + Pilot action primitive)
 * - CP2-08 reconcile continue policy — no total-budget abandonment
 * ZERO REAL. Fake/filesystem/temp-Git only.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt/domain/cursorExecutionReport";
import {
  mintCursorReviewEndOfId,
  type CursorReviewEndOf,
} from "@/lib/oa/execution-attempt/domain/cursorReviewEndOf";
import {
  observeVerifiedChangeSet,
  observeVerifiedChangeSetStrict,
} from "@/lib/oa/execution-attempt/application/observeVerifiedChangeSet";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import {
  CURSOR_REVIEW_END_OF_MISSING,
  finalizeGenericExecutionReview,
  presentationSummaryFromCursorReport,
  resolveCursorReviewEndOfClaim,
} from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
import {
  genericExecutionReviewMaterialRefsRelative,
  loadGenericExecutionReviewMaterial,
  persistGenericExecutionReviewMaterial,
  digestUtf8,
} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { readBoundExecutionReviewItem } from "@/features/project-assistant/f3/readBoundExecutionReviewItem";
import {
  EXECUTION_REVIEW_VERIFICATION_ER_KEY,
  OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA,
  digestExecutionReviewVerificationPayload,
  executionReviewVerificationEvidenceIdForAttempt,
  isExecutionReviewVerificationEvidenceId,
  isExecutionReviewVerificationPayload,
  persistExecutionReviewVerificationPayload,
  type ExecutionReviewVerificationPayload,
} from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import {
  missionRequiresStudioVerification,
  verificationEvidenceFactsHold,
} from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  NOMINAL_RECONCILE_CONTINUE_BUDGET,
  RECONCILE_CONTINUE_BACKOFF_MAX_MS,
  nextReconcileContinueDelayMs,
  shouldContinueReconcileNominally,
  shouldAutoResumeReconcileOnRemount,
  nominalContinueIterationsRemaining,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import {
  canQualifyGenericLocalWriteFromDurableFacts,
  deriveActualExecutionWorkFromProductContext,
} from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import type { DecisionBasis } from "@/lib/oa/decision";
import { createExecutionReviewAgentsTools } from "@/lib/nora-cognitive-runtime/executionReviewAgentsTools";
import { GENERIC_PRODUCT_REPORT_REQUIREMENTS } from "@/features/project-assistant/w2/missionContractSemanticInputs";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";

function tmpRoot(label: string): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), `gerrc-${label}-`));
}

function baseReport(
  attemptId: string,
  executionContractId: string,
  overrides: Partial<CursorExecutionReport> = {},
): CursorExecutionReport {
  return {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: mintCursorExecutionReportId({ attemptId, executionContractId }),
    attemptId,
    executionContractId,
    repositoryRef: "repo:test",
    baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.create", "filesystem.modify"],
    workPerformed: ["wrote notes"],
    fileEffects: {
      created: ["projects/demo/a.md"],
      modified: [],
      deleted: [],
    },
    ...overrides,
  };
}

describe("GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 core", () => {
  it("EP — reportRequirements demand Report + Review End Of (generic Product)", () => {
    const joined = GENERIC_PRODUCT_REPORT_REQUIREMENTS.join("\n");
    expect(joined).toMatch(/Review End Of/i);
    expect(joined).toMatch(/reportId/);
    expect(STUDIO_CURSOR_GENERALIST_CAPABILITY).toBe(
      "cap:studio.cursor.generalist",
    );
    expect(STUDIO_CURSOR_GENERALIST_ACTION).toBe(
      "studio.cursor.generalist.execute",
    );
  });

  it("EP-03/04/05 — VerifiedChangeSet detects unclaimed observed file", async () => {
    const wt = tmpRoot("wt");
    fs.writeFileSync(path.join(wt, "a.md"), "A\n");
    fs.writeFileSync(path.join(wt, "b.md"), "B\n");
    const report = baseReport("att:1", "ec:1", {
      fileEffects: { created: ["a.md"], modified: [], deleted: [] },
    });
    const cs = await observeVerifiedChangeSet({
      worktreePath: wt,
      report,
      nameStatusText: "A\ta.md\nA\tb.md\n",
    });
    expect(cs.claimFactMismatch).toBe(true);
    expect(cs.unclaimedObservedPaths).toContain("b.md");
    expect(cs.created.map((e) => e.path).sort()).toEqual(["a.md", "b.md"]);
  });

  it("EP-06/07/17 — Review Material durable; 0 Artifact / 0 file valid", () => {
    const refs = tmpRoot("refs");
    const report = baseReport("att:zero", "ec:zero", {
      fileEffects: { created: [], modified: [], deleted: [] },
      authorizedEffectsExecuted: ["validation.run"],
      validationEffects: [
        { identity: "unit", result: "pass", summary: "ok" },
      ],
    });
    const reo: CursorReviewEndOf = {
      schemaVersion: "oa.cursor-review-end-of.1",
      reviewEndOfId: mintCursorReviewEndOfId({
        attemptId: "att:zero",
        executionContractId: "ec:zero",
      }),
      attemptId: "att:zero",
      executionContractId: "ec:zero",
      timestamp: new Date().toISOString(),
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      verdict: "succeeded",
      objective: "validate only",
      scopeTreated: "no files",
      workPerformed: ["ran validation"],
      filesCreated: [],
      filesModified: [],
      filesDeleted: [],
      validations: ["unit:pass"],
      deviations: [],
      blockers: [],
      reservations: [],
      stopConditionsMet: [],
      claims: ["validation pass"],
      pointsRequiringReview: [],
    };
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot: refs,
      projectId: "prj:zero",
      executionContractId: "ec:zero",
      attemptId: "att:zero",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      reviewEndOf: reo,
      reviewItems: [
        {
          kind: "validation",
          label: "unit",
          text: "pass",
          summary: "pass",
        },
      ],
    });
    expect(persisted.ok).toBe(true);
    if (!persisted.ok) return;
    expect(persisted.manifest.reviewItems.length).toBe(1);
    expect(
      persisted.manifest.reviewItems.every((i) => i.kind !== "artifact"),
    ).toBe(true);
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:zero",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.reviewEndOf?.verdict).toBe("succeeded");
    expect(loaded.cursorReport?.status).toBe("succeeded");
  });

  it("EP-06 — finalize after observation persists mismatch + review items", async () => {
    const refs = tmpRoot("fin");
    const wt = tmpRoot("fin-wt");
    fs.mkdirSync(path.join(wt, "projects/demo"), { recursive: true });
    fs.writeFileSync(path.join(wt, "projects/demo/a.md"), "A\n");
    fs.writeFileSync(path.join(wt, "projects/demo/b.md"), "B\n");
    const report = baseReport("att:fin", "ec:fin", {
      fileEffects: {
        created: ["projects/demo/a.md"],
        modified: [],
        deleted: [],
      },
      reviewEndOf: {
        schemaVersion: "oa.cursor-review-end-of.1",
        reviewEndOfId: mintCursorReviewEndOfId({
          attemptId: "att:fin",
          executionContractId: "ec:fin",
        }),
        attemptId: "att:fin",
        executionContractId: "ec:fin",
        timestamp: new Date().toISOString(),
        repositoryRef: "repo:test",
        baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        verdict: "succeeded",
        objective: "write notes",
        scopeTreated: "demo",
        workPerformed: ["a.md"],
        filesCreated: ["projects/demo/a.md"],
        filesModified: [],
        filesDeleted: [],
        validations: [],
        deviations: [],
        blockers: [],
        reservations: [],
        stopConditionsMet: [],
        claims: ["created a.md"],
        pointsRequiringReview: ["confirm b.md unexpected"],
      },
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:fin",
      executionContractId: "ec:fin",
      attemptId: "att:fin",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: wt,
      nameStatusText:
        "A\tprojects/demo/a.md\nA\tprojects/demo/b.md\n",
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.claimFactMismatch).toBe(true);
    expect(finalized.manifest.completeness).toBe("PARTIAL");
    expect(finalized.reviewEndOf?.pointsRequiringReview.length).toBeGreaterThan(
      0,
    );
    expect(finalized.manifest.reviewItems.length).toBeGreaterThanOrEqual(2);
  });

  it("CR-02 — no worktree ⇒ verification UNAVAILABLE (not empty FACTS)", async () => {
    const refs = tmpRoot("noobs");
    const report = baseReport("att:noobs", "ec:noobs");
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:noobs",
      executionContractId: "ec:noobs",
      attemptId: "att:noobs",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      // no worktreePath
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.verificationStatus).toBe("UNAVAILABLE");
    expect(finalized.verifiedChangeSet).toBeNull();
    expect(finalized.manifest.verifiedEffects.verifiedChangeSetRef).toBeNull();
    expect(finalized.manifest.completeness).toBe("PARTIAL");
    expect(finalized.manifest.blockers.some((b) => b.includes("VERIFICATION_UNAVAILABLE"))).toBe(true);
  });

  it("CR-02 — observed zero-file is VerifiedChangeSet empty OBSERVED", async () => {
    const refs = tmpRoot("zeroobs");
    const wt = tmpRoot("zero-wt");
    const report = baseReport("att:zeroobs", "ec:zeroobs", {
      fileEffects: { created: [], modified: [], deleted: [] },
      authorizedEffectsExecuted: ["validation.run"],
      validationEffects: [{ identity: "v1", result: "pass" }],
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:zeroobs",
      executionContractId: "ec:zeroobs",
      attemptId: "att:zeroobs",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: wt,
      nameStatusText: "",
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.verificationStatus).toBe("OBSERVED");
    expect(finalized.verifiedChangeSet).not.toBeNull();
    expect(finalized.verifiedChangeSet!.all).toEqual([]);
    expect(finalized.manifest.verifiedEffects.gitFacts).toContain("verified_zero_change");
  });

  it("EP-18/CR-04/CP2-08 — anti-stall: remount resume policy; NO total continue budget", () => {
    // CP2-08: budget is not a correctness bearer — infinite, not a number to exhaust.
    expect(NOMINAL_RECONCILE_CONTINUE_BUDGET).toBe(Number.POSITIVE_INFINITY);
    expect(NOMINAL_RECONCILE_CONTINUE_BUDGET).toBeGreaterThan(
      LEGACY_UI_RUNNING_POLL_BUDGET,
    );
    expect(shouldAutoResumeReconcileOnRemount({ stage: "RUNNING" })).toBe(true);
    expect(
      shouldAutoResumeReconcileOnRemount({
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        nextDeterministicAction: "MATERIALIZE_PRODUCT",
      }),
    ).toBe(true);
    expect(shouldContinueReconcileNominally({ stage: "RUNNING" })).toBe(true);
    expect(
      shouldContinueReconcileNominally({
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        nextDeterministicAction: "MATERIALIZE_PRODUCT",
      }),
    ).toBe(true);
    expect(
      shouldContinueReconcileNominally({
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(false);
    // Past ANY historical budget (8 legacy, 120 abandonment) → still continues.
    for (const used of [0, 8, 9, 120, 121, 10_000]) {
      expect(
        nominalContinueIterationsRemaining(used, { stage: "RUNNING" }),
      ).toBe(Number.POSITIVE_INFINITY);
    }
    expect(
      nominalContinueIterationsRemaining(0, {
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(0);
  });

  it("EP-10 — Nora execution review tools are Attempt/Project-bound", async () => {
    const refs = tmpRoot("nora");
    const report = baseReport("att:nora", "ec:nora");
    persistGenericExecutionReviewMaterial({
      refsRoot: refs,
      projectId: "prj:nora",
      executionContractId: "ec:nora",
      attemptId: "att:nora",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      reviewItems: [
        { kind: "log", label: "note", text: "hello review", summary: "log" },
      ],
    });
    const tools = createExecutionReviewAgentsTools({
      projectId: "prj:nora",
      attemptId: "att:nora",
      refsRoot: refs,
    });
    expect(tools).toHaveLength(2);
    expect(tools[0]!.name).toBe("execution_review_get_manifest");
    expect(tools[1]!.name).toBe("execution_review_read_item");
    const { RunContext } = await import("@openai/agents");
    const runCtx = new RunContext({});
    const manifestJson = await tools[0]!.invoke(runCtx, JSON.stringify({}));
    const manifest = JSON.parse(String(manifestJson)) as {
      ok: boolean;
      executorClaims?: { disclosure?: string };
      reviewItems?: { itemId: string }[];
    };
    expect(manifest.ok).toBe(true);
    expect(manifest.executorClaims?.disclosure).toBe("CLAIM_NOT_EVIDENCE");
    const itemId = manifest.reviewItems![0]!.itemId;
    const readJson = await tools[1]!.invoke(
      runCtx,
      JSON.stringify({ itemId }),
    );
    const read = JSON.parse(String(readJson)) as {
      ok: boolean;
      content?: string;
    };
    expect(read.ok).toBe(true);
    expect(read.content).toContain("hello review");

    const foreign = createExecutionReviewAgentsTools({
      projectId: "prj:other",
      attemptId: "att:nora",
      refsRoot: refs,
    });
    const denied = JSON.parse(
      String(await foreign[0]!.invoke(runCtx, JSON.stringify({}))),
    ) as { ok: boolean; code?: string };
    expect(denied.ok).toBe(false);
    expect(denied.code).toBe("EXECUTION_REVIEW_PROJECT_MISMATCH");
  });
});


describe("GENERIC-EXECUTION-REVIEW-RESULT — Product Resolution surface", () => {
  it("loads executionReview after finalize into Product Resolution fields", async () => {
    const refs = tmpRoot("res");
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refs;
    const report = baseReport("att:res", "ec:res", {
      fileEffects: { created: ["x.md"], modified: [], deleted: [] },
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:res",
      executionContractId: "ec:res",
      attemptId: "att:res",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      nameStatusText: "A\tx.md\nA\ty.md\n",
      worktreePath: (() => {
        const wt = tmpRoot("res-wt");
        fs.writeFileSync(path.join(wt, "x.md"), "x");
        fs.writeFileSync(path.join(wt, "y.md"), "y");
        return wt;
      })(),
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:res",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.manifest.projectId).toBe("prj:res");
    expect(loaded.verifiedChangeSet?.claimFactMismatch).toBe(true);
    expect(loaded.manifest.reviewItems.length).toBeGreaterThan(0);
  });
});

/* -------------------------------------------------------------------------- */
/* Correction Pass 02 — unit seams                                            */
/* -------------------------------------------------------------------------- */

function git(cwd: string, ...args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

/** Real temp Git repo: baseline.txt + untouched.txt committed at H0. */
function makeGitRepo(label: string): { repo: string; h0: string } {
  const repo = tmpRoot(`git-${label}`);
  git(repo, "init", "-q");
  git(repo, "config", "user.email", "gerrc@example.test");
  git(repo, "config", "user.name", "gerrc");
  git(repo, "config", "commit.gpgsign", "false");
  fs.writeFileSync(path.join(repo, "baseline.txt"), "base\n");
  fs.writeFileSync(path.join(repo, "untouched.txt"), "untouched\n");
  fs.mkdirSync(path.join(repo, "deep/nested"), { recursive: true });
  fs.writeFileSync(path.join(repo, "deep/nested/old.txt"), "old\n");
  git(repo, "add", "-A");
  git(repo, "commit", "-q", "-m", "H0");
  return { repo, h0: git(repo, "rev-parse", "HEAD").toLowerCase() };
}

function sealedBasis(
  executionBasis: DecisionBasis["executionBasis"],
): DecisionBasis {
  return {
    sourceType: "trajectory_option",
    sourceRef: "optset:cp2",
    sourceDigest: "a".repeat(64),
    projectId: "prj:cp2",
    proposalContext: { lpsId: "lps:cp2", lpsVersion: 1 },
    trajectoryContext: {
      trajectoryId: "trj:cp2",
      candidateVersion: 1,
      optionRefs: [GOVERNED_OPTION_REF],
      selectedOptionRef: GOVERNED_OPTION_REF,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    },
    executionBasis: {
      objective: "write a.md and update baseline.txt",
      requestedOperation: `w2:decide-trajectory:${GOVERNED_OPTION_REF}`,
      ...executionBasis,
    },
  };
}

const LOCAL_WRITE_FACTS: DecisionBasis["executionBasis"] = {
  targetPath: "a.md",
  scopeIn: ["a.md", "baseline.txt"],
  reversibilityExpectation: "reversible",
};

describe("CP2-01 — durable-fact local-write qualification (no docs_write taxonomy)", () => {
  it("GOVERNED + sealed targetPath/scopeIn + reversible ⇒ qualified local-write", () => {
    const q = canQualifyGenericLocalWriteFromDurableFacts({
      basis: sealedBasis(LOCAL_WRITE_FACTS),
      selectedOptionRef: GOVERNED_OPTION_REF,
    });
    expect(q.ok).toBe(true);
    if (!q.ok) return;
    expect([...q.allowedPaths].sort()).toEqual(["a.md", "baseline.txt"]);
    expect(q.rollbackAvailable).toBe(true);
    // BOUNDED provenance qualifies too.
    expect(
      canQualifyGenericLocalWriteFromDurableFacts({
        basis: sealedBasis(LOCAL_WRITE_FACTS),
        selectedOptionRef: BOUNDED_OPTION_REF,
      }).ok,
    ).toBe(true);
  });

  it("fail-closed: no sealed paths / irreversible / CLARIFY / docs_write sealed", () => {
    const deny = (
      eb: DecisionBasis["executionBasis"],
      option: string = GOVERNED_OPTION_REF,
    ) =>
      canQualifyGenericLocalWriteFromDurableFacts({
        basis: sealedBasis(eb),
        selectedOptionRef: option,
      });
    expect(deny({}).ok).toBe(false); // no durable paths
    expect(deny({ reversibilityExpectation: "reversible" }).ok).toBe(false);
    expect(
      deny({ ...LOCAL_WRITE_FACTS, reversibilityExpectation: "irreversible" })
        .ok,
    ).toBe(false);
    expect(deny(LOCAL_WRITE_FACTS, CLARIFY_OPTION_REF).ok).toBe(false);
    expect(deny({ ...LOCAL_WRITE_FACTS, intentKind: "docs_write" }).ok).toBe(
      false,
    );
    expect(
      deny({
        ...LOCAL_WRITE_FACTS,
        requestedOperation: "cursor.docs_write.apply",
      }).ok,
    ).toBe(false);
    // Pseudo-refs are not repository files.
    expect(
      deny({ scopeIn: ["product:project-workspace", "attempt:xat:1"] }).ok,
    ).toBe(false);
  });

  it("derive: durable facts ⇒ local-write work (generic quartet surface); hostile client kind never wins", () => {
    const derived = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:cp2",
      projectTitle: "cp2",
      projectObjective: "obj",
      basis: sealedBasis(LOCAL_WRITE_FACTS),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
      clientOperationKind: "read", // hostile/compat — must not override
    });
    expect(derived.ok).toBe(true);
    if (!derived.ok || !("work" in derived)) return;
    expect(derived.work.effectClass).toBe("local-write");
    expect(derived.work.notes).toContain("PRODUCT_QUALIFIED_LOCAL_WRITE");
    expect(derived.work.notes).toContain("NOT_DOCS_WRITE_PRODUCT_TAXONOMY");
    expect(derived.mission.authorizesMutatingEffects).toBe(true);
    expect(derived.mission.evidenceRequirements).toEqual(
      expect.arrayContaining([
        "evreq:local-write",
        "evreq:studio-verified-changeset",
      ]),
    );
    expect(derived.mission.scopeOut).toEqual(
      expect.arrayContaining(["GIT_COMMIT", "GIT_PUSH", "GIT_PR", "GIT_MERGE"]),
    );
  });

  it("derive: GOVERNED without durable facts ⇒ EFFECTS_UNRESOLVED; docs_write sealed ⇒ PREPARE route; hostile local-write kind refused", () => {
    const none = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:cp2",
      projectTitle: null,
      projectObjective: null,
      basis: sealedBasis({}),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
    });
    expect(none.ok).toBe(false);
    if (!none.ok) expect(none.code).toBe("EFFECTS_UNRESOLVED");

    const docs = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:cp2",
      projectTitle: null,
      projectObjective: null,
      basis: sealedBasis({
        ...LOCAL_WRITE_FACTS,
        intentKind: "docs_write",
        requestedOperation: "cursor.docs_write.apply",
      }),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
    });
    expect(docs.ok).toBe(false);
    if (!docs.ok) expect(docs.code).toBe("PREPARE_ROUTE_DOCS_WRITE");

    const hostile = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:cp2",
      projectTitle: null,
      projectObjective: null,
      basis: sealedBasis({}),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
      clientOperationKind: "local-write",
    });
    expect(hostile.ok).toBe(false);
    if (!hostile.ok) expect(hostile.code).toBe("PREPARATION_BLOCKED");
  });
});

describe("CP2-02 — Git observation: no full-repo fallback, HEAD integrity", () => {
  it("git mode without a Git port ⇒ UNAVAILABLE (never a recursive scan)", async () => {
    const { repo } = makeGitRepo("noport");
    fs.writeFileSync(path.join(repo, "a.md"), "A\n");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      observationMode: "git",
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("GIT_OBSERVER_REQUIRED");
    expect(r.verificationStatus).toBe("UNAVAILABLE");
    // Default (no mode, no status text) is also Git mode ⇒ also UNAVAILABLE.
    const dflt = await observeVerifiedChangeSetStrict({ worktreePath: repo });
    expect(dflt.ok).toBe(false);
  });

  it("real Git worktree: ONLY the 3 deltas are observed (not the whole repo); HEAD = H0", async () => {
    const { repo, h0 } = makeGitRepo("deltas");
    fs.writeFileSync(path.join(repo, "a.md"), "A\n");
    fs.appendFileSync(path.join(repo, "baseline.txt"), "changed\n");
    fs.writeFileSync(path.join(repo, "b.md"), "B-unclaimed\n");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
      expectedBaseSha: h0,
      report: baseReport("att:g", "ec:g", {
        fileEffects: {
          created: ["a.md"],
          modified: ["baseline.txt"],
          deleted: [],
        },
      }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const cs = r.changeSet;
    expect(cs.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "b.md",
      "baseline.txt",
    ]);
    // Committed-and-untouched files are NOT reported as created.
    expect(cs.all.map((e) => e.path)).not.toContain("untouched.txt");
    expect(cs.all.map((e) => e.path)).not.toContain("deep/nested/old.txt");
    expect(cs.created.map((e) => e.path).sort()).toEqual(["a.md", "b.md"]);
    expect(cs.modified.map((e) => e.path)).toEqual(["baseline.txt"]);
    expect(cs.claimFactMismatch).toBe(true);
    expect(cs.unclaimedObservedPaths).toEqual(["b.md"]);
    expect(cs.claimedMissingPaths).toEqual([]);
    expect(cs.observedHeadSha).toBe(h0);
    expect(cs.all.every((e) => e.afterDigest?.startsWith("sha256:"))).toBe(
      true,
    );
  });

  it("claimed file absent from Git FACTS ⇒ claimedMissingPaths mismatch", async () => {
    const { repo, h0 } = makeGitRepo("missing");
    fs.writeFileSync(path.join(repo, "a.md"), "A\n");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
      expectedBaseSha: h0,
      report: baseReport("att:cm", "ec:cm", {
        fileEffects: {
          created: ["a.md", "ghost.md"],
          modified: [],
          deleted: [],
        },
      }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.changeSet.claimedMissingPaths).toEqual(["ghost.md"]);
    expect(r.changeSet.claimFactMismatch).toBe(true);
  });

  it("clean Git worktree ⇒ OBSERVED verified zero change — committed files are never listed", async () => {
    const { repo, h0 } = makeGitRepo("clean");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
      expectedBaseSha: h0,
      report: baseReport("att:z", "ec:z", {
        fileEffects: { created: [], modified: [], deleted: [] },
      }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.verificationStatus).toBe("OBSERVED");
    expect(r.changeSet.all).toEqual([]);
    expect(r.changeSet.claimFactMismatch).toBe(false);
    expect(r.changeSet.observedHeadSha).toBe(h0);
  });

  it("HEAD ≠ expected baseSha ⇒ GIT_HEAD_MISMATCH (FACTS integrity refused)", async () => {
    const { repo } = makeGitRepo("head");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
      expectedBaseSha: "b".repeat(40),
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("GIT_HEAD_MISMATCH");
    expect(r.verificationStatus).toBe("UNAVAILABLE");
  });

  it("throwing Git port ⇒ GIT_OBSERVATION_FAILED; finalize ⇒ UNAVAILABLE with no VerifiedChangeSet", async () => {
    const { repo } = makeGitRepo("throw");
    const failing = {
      statusDiff: async () => {
        throw new Error("boom");
      },
    };
    const strict = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      statusDiffPort: failing,
      observationMode: "git",
    });
    expect(strict.ok).toBe(false);
    if (!strict.ok) expect(strict.code).toBe("GIT_OBSERVATION_FAILED");

    const refs = tmpRoot("throw-refs");
    const report = baseReport("att:throw", "ec:throw");
    const fin = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:throw",
      executionContractId: "ec:throw",
      attemptId: "att:throw",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: repo,
      statusDiffPort: failing,
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.verificationStatus).toBe("UNAVAILABLE");
    expect(fin.verifiedChangeSet).toBeNull();
    expect(fin.manifest.verifiedEffects.verifiedChangeSetRef).toBeNull();
  });

  it("finalize default (Git worktree, no port, no injected status) uses NodeLocalGitStatusDiffPort", async () => {
    const { repo, h0 } = makeGitRepo("fin");
    fs.writeFileSync(path.join(repo, "a.md"), "A\n");
    fs.appendFileSync(path.join(repo, "baseline.txt"), "changed\n");
    fs.writeFileSync(path.join(repo, "b.md"), "B\n");
    const refs = tmpRoot("fin-refs");
    const report = baseReport("att:fgit", "ec:fgit", {
      baseSha: h0,
      fileEffects: {
        created: ["a.md"],
        modified: ["baseline.txt"],
        deleted: [],
      },
    });
    const fin = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:fgit",
      executionContractId: "ec:fgit",
      attemptId: "att:fgit",
      repositoryRef: "repo:test",
      baseSha: h0,
      cursorReport: report,
      worktreePath: repo,
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.verificationStatus).toBe("OBSERVED");
    expect(fin.verifiedChangeSet!.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "b.md",
      "baseline.txt",
    ]);
    expect(fin.claimFactMismatch).toBe(true);
    expect(fin.manifest.blockers.some((b) => b.includes("b.md"))).toBe(true);
    // Durable VerifiedChangeSet strips ephemeral worktree path.
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:fgit",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.verifiedChangeSet?.worktreePath).not.toContain(repo);
    expect(loaded.verifiedChangeSet?.observedHeadSha).toBe(h0);
  });

  it("test_non_git is an explicit, separate mode (injected status) — never inferred for a Git worktree", async () => {
    const { repo } = makeGitRepo("tng");
    const wt = tmpRoot("tng-wt");
    fs.writeFileSync(path.join(wt, "x.md"), "x");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: wt,
      nameStatusText: "A\tx.md\n",
      observationMode: "test_non_git",
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.changeSet.all.map((e) => e.path)).toEqual(["x.md"]);
    expect(r.changeSet.observedHeadSha).toBeNull();
    // Without the explicit flag a Git-shaped call with no port refuses.
    const gitShaped = await observeVerifiedChangeSetStrict({
      worktreePath: repo,
      observationMode: "git",
      nameStatusText: "A\tx.md\n",
    });
    expect(gitShaped.ok).toBe(false);
    // Legacy helper cannot express UNAVAILABLE ⇒ empty, mismatch=false (callers MUST use strict).
    const legacy = await observeVerifiedChangeSet({
      worktreePath: repo,
      observationMode: "git",
    });
    expect(legacy.all).toEqual([]);
  });

  // CP2-02 / T-06: NodeLocalGitStatusDiffPort must fail closed on non-Git cwd
  // (never parse stderr as porcelain ⇒ bogus OBSERVED paths).
  it("non-Git directory under git mode ⇒ UNAVAILABLE (not bogus OBSERVED path)", async () => {
    const nonGit = tmpRoot("nongit");
    fs.writeFileSync(path.join(nonGit, "x.txt"), "x");
    const r = await observeVerifiedChangeSetStrict({
      worktreePath: nonGit,
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
      observationMode: "git",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.verificationStatus).toBe("UNAVAILABLE");
      expect(r.code).toBe("GIT_OBSERVATION_FAILED");
    }
  });
});

describe("CP2-03 — no synthetic Cursor Review End Of", () => {
  const nativeReo = (attemptId: string, executionContractId: string): CursorReviewEndOf => ({
    schemaVersion: "oa.cursor-review-end-of.1",
    reviewEndOfId: mintCursorReviewEndOfId({ attemptId, executionContractId }),
    attemptId,
    executionContractId,
    timestamp: new Date().toISOString(),
    repositoryRef: "repo:test",
    baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    verdict: "succeeded",
    objective: "o",
    scopeTreated: "s",
    workPerformed: ["w"],
    filesCreated: [],
    filesModified: [],
    filesDeleted: [],
    validations: [],
    deviations: [],
    blockers: [],
    reservations: [],
    stopConditionsMet: [],
    claims: ["c"],
    pointsRequiringReview: [],
  });

  it("report without reviewEndOf ⇒ null REO, PARTIAL, CURSOR_REVIEW_END_OF_MISSING, nothing on disk", async () => {
    const refs = tmpRoot("reo-missing");
    const report = baseReport("att:noreo", "ec:noreo");
    expect(report.reviewEndOf).toBeUndefined();
    expect(resolveCursorReviewEndOfClaim(report)).toEqual({
      reviewEndOf: null,
      present: false,
      bindingCode: null,
    });
    const fin = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:noreo",
      executionContractId: "ec:noreo",
      attemptId: "att:noreo",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: tmpRoot("noreo-wt"),
      nameStatusText: "",
      observationMode: "test_non_git",
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.reviewEndOf).toBeNull();
    expect(fin.reviewEndOfPresent).toBe(false);
    expect(fin.manifest.executorClaims.cursorReviewEndOfRef).toBeNull();
    expect(fin.manifest.completeness).toBe("PARTIAL");
    expect(fin.manifest.blockers).toContain(CURSOR_REVIEW_END_OF_MISSING);
    expect(
      fin.manifest.reservations.some((r) => /did not synthesize/i.test(r)),
    ).toBe(true);
    const rel = genericExecutionReviewMaterialRefsRelative("att:noreo");
    expect(fs.existsSync(path.join(refs, rel.reviewEndOf))).toBe(false);
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:noreo",
    });
    expect(loaded.ok && loaded.reviewEndOf).toBeNull();
  });

  it("malformed reviewEndOf is treated as missing — never repaired into a REO", async () => {
    const report = baseReport("att:badreo", "ec:badreo", {
      reviewEndOf: { schemaVersion: "oa.cursor-review-end-of.1" } as never,
    });
    expect(resolveCursorReviewEndOfClaim(report).present).toBe(false);
    expect(resolveCursorReviewEndOfClaim(report).reviewEndOf).toBeNull();
  });

  it("native reviewEndOf ⇒ present, referenced, no missing blocker", async () => {
    const refs = tmpRoot("reo-native");
    const report = baseReport("att:reo", "ec:reo", {
      reviewEndOf: nativeReo("att:reo", "ec:reo"),
    });
    const fin = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:reo",
      executionContractId: "ec:reo",
      attemptId: "att:reo",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: tmpRoot("reo-wt"),
      nameStatusText: "A\tprojects/demo/a.md\n",
      observationMode: "test_non_git",
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.reviewEndOfPresent).toBe(true);
    expect(fin.manifest.executorClaims.cursorReviewEndOfRef).not.toBeNull();
    expect(fin.manifest.blockers).not.toContain(CURSOR_REVIEW_END_OF_MISSING);
    expect(fin.reviewEndOf?.reviewEndOfId).toBe(
      mintCursorReviewEndOfId({
        attemptId: "att:reo",
        executionContractId: "ec:reo",
      }),
    );
  });

  it("report-derived presentation summary is NOT a CursorReviewEndOf", () => {
    const summary = presentationSummaryFromCursorReport(
      baseReport("att:pres", "ec:pres"),
    );
    expect(summary.kind).toBe("presentation_only_report_summary");
    expect(summary).not.toHaveProperty("schemaVersion");
    expect(summary).not.toHaveProperty("reviewEndOfId");
    expect(summary.note).toMatch(/NOT CursorReviewEndOf/);
  });
});

describe("CP2-04 — Verification Evidence prerequisites", () => {
  function payload(
    over: Partial<ExecutionReviewVerificationPayload> = {},
  ): ExecutionReviewVerificationPayload {
    return {
      schemaVersion: OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA,
      attemptId: "att:v",
      executionContractId: "ec:v",
      projectId: "prj:v",
      repositoryRef: "repo:test",
      baseSha: "a".repeat(40),
      reviewMaterialId: "erm:att:v",
      verificationStatus: "OBSERVED",
      verifiedChangeSetDigest: "sha256:" + "c".repeat(64),
      verifiedChangeSetRef: "refs/attempts/att:v/execution-review/verified-changeset.json",
      claimFactMismatch: false,
      unclaimedObservedPaths: [],
      claimedMissingPaths: [],
      observedPathCount: 3,
      completeness: "FULL",
      reviewEndOfPresent: true,
      ...over,
    };
  }

  function evidenceFor(
    refs: string,
    p: ExecutionReviewVerificationPayload,
  ) {
    // CP3-04 — when OBSERVED, durable VCS bytes must exist and match digest.
    if (
      p.verificationStatus === "OBSERVED" &&
      p.verifiedChangeSetRef &&
      p.verifiedChangeSetDigest
    ) {
      const vcsAbs = path.join(refs, p.verifiedChangeSetRef);
      fs.mkdirSync(path.dirname(vcsAbs), { recursive: true });
      // Write bytes whose digest equals the declared digest, OR recompute.
      const body = `${JSON.stringify({
        schemaVersion: "oa.verified-change-set.1",
        worktreePath: "<disposed-or-ephemeral>",
        all: [],
        created: [],
        modified: [],
        deleted: [],
        renamed: [],
        claimFactMismatch: p.claimFactMismatch,
        unclaimedObservedPaths: p.unclaimedObservedPaths,
        claimedMissingPaths: p.claimedMissingPaths,
      })}\n`;
      fs.writeFileSync(vcsAbs, body, "utf8");
      p = {
        ...p,
        verifiedChangeSetDigest: digestUtf8(body),
      };
    }
    const persisted = persistExecutionReviewVerificationPayload({
      refsRoot: refs,
      attemptId: p.attemptId,
      payload: p,
    });
    if (!persisted.ok) throw new Error(persisted.message);
    const evidence = {
      evidenceId: executionReviewVerificationEvidenceIdForAttempt(p.attemptId),
      status: "verified",
      sourceKind: "execution_attempt",
      provenance: { source: "execution_adapter" },
      digest: persisted.digest,
      location: persisted.absolutePath,
      bindings: {
        executionAttemptId: p.attemptId,
        executionContractId: p.executionContractId,
      },
    };
    return evidence as never;
  }

  const attempt = {
    attemptId: "att:v",
    executionContractId: "ec:v",
    status: "succeeded",
  } as never;

  it("ids / guards / ER keys", () => {
    const id = executionReviewVerificationEvidenceIdForAttempt("xat:abc");
    expect(id.startsWith("ev:execution-review:")).toBe(true);
    expect(isExecutionReviewVerificationEvidenceId(id)).toBe(true);
    expect(isExecutionReviewVerificationEvidenceId("ev:mission-result:x")).toBe(
      false,
    );
    expect(isExecutionReviewVerificationPayload(payload())).toBe(true);
    expect(isExecutionReviewVerificationPayload({ schemaVersion: "x" })).toBe(
      false,
    );
    // Payload digest is deterministic and content-sensitive.
    expect(digestExecutionReviewVerificationPayload(payload())).toBe(
      digestExecutionReviewVerificationPayload(payload()),
    );
    expect(digestExecutionReviewVerificationPayload(payload())).not.toBe(
      digestExecutionReviewVerificationPayload(
        payload({ claimFactMismatch: true }),
      ),
    );
  });

  it("missionResultContractResultSemantic requires verification for studio-verified-changeset ER only", () => {
    const mat = (ers: string[]) =>
      ({ evidenceRequirements: ers }) as never;
    expect(
      missionRequiresStudioVerification(
        mat([EXECUTION_REVIEW_VERIFICATION_ER_KEY]),
      ),
    ).toBe(true);
    // Historical local-write ER alone must NOT force verification (compat).
    expect(missionRequiresStudioVerification(mat(["evreq:local-write"]))).toBe(
      false,
    );
    expect(
      missionRequiresStudioVerification(
        mat(["evreq:mission-result-for-nora-reevaluation"]),
      ),
    ).toBe(false);
    expect(missionRequiresStudioVerification(mat([]))).toBe(false);
  });

  it("verification facts hold ONLY for OBSERVED + no CLAIM/FACT mismatch + intact digest", () => {
    const refs = tmpRoot("vev");
    expect(
      verificationEvidenceFactsHold({
        attempt,
        evidence: evidenceFor(refs, payload()),
      }),
    ).toBe(true);
    expect(
      verificationEvidenceFactsHold({
        attempt,
        evidence: evidenceFor(
          tmpRoot("vev-mm"),
          payload({ claimFactMismatch: true, unclaimedObservedPaths: ["b.md"] }),
        ),
      }),
    ).toBe(false);
    expect(
      verificationEvidenceFactsHold({
        attempt,
        evidence: evidenceFor(
          tmpRoot("vev-un"),
          payload({ verificationStatus: "UNAVAILABLE", verifiedChangeSetDigest: null }),
        ),
      }),
    ).toBe(false);

    // Tamper after digest ⇒ refused.
    const tamperRefs = tmpRoot("vev-tamper");
    const ev = evidenceFor(tamperRefs, payload()) as unknown as {
      location: string;
    };
    fs.writeFileSync(
      ev.location,
      `${JSON.stringify(payload({ claimFactMismatch: false, observedPathCount: 99 }))}\n`,
    );
    expect(
      verificationEvidenceFactsHold({ attempt, evidence: ev as never }),
    ).toBe(false);

    // Attempt not succeeded ⇒ refused.
    expect(
      verificationEvidenceFactsHold({
        attempt: { ...(attempt as object), status: "failed" } as never,
        evidence: evidenceFor(tmpRoot("vev-fail"), payload()),
      }),
    ).toBe(false);
  });
});

describe("CP2-07 — shared bound reader security (Nora tool + Pilot action primitive)", () => {
  function seed(label: string) {
    const refs = tmpRoot(`sec-${label}`);
    const attemptId = `att:sec-${label}`;
    const report = baseReport(attemptId, `ec:sec-${label}`);
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot: refs,
      projectId: "prj:sec",
      executionContractId: `ec:sec-${label}`,
      attemptId,
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      reviewItems: [
        { kind: "log", label: "note", text: "hello secure review", summary: "log" },
        { kind: "other", label: "no-content", summary: "no bytes" },
      ],
    });
    if (!persisted.ok) throw new Error(persisted.message);
    return {
      refs,
      attemptId,
      itemId: persisted.manifest.reviewItems[0]!.itemId,
      emptyItemId: persisted.manifest.reviewItems[1]!.itemId,
    };
  }

  it("project + attempt + itemId bound ⇒ ok; content only through server-owned contentRef", () => {
    const s = seed("ok");
    const r = readBoundExecutionReviewItem({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      itemId: s.itemId,
      refsRoot: s.refs,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.content).toContain("hello secure review");
    expect(r.completeness).toBe("FULL");
    const none = readBoundExecutionReviewItem({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      itemId: s.emptyItemId,
      refsRoot: s.refs,
    });
    expect(none.ok && none.content).toBeNull();
    expect(none.ok && none.completeness).toBe("PARTIAL");
  });

  it("project mismatch / unknown attempt / unknown item ⇒ fail-closed with distinct codes", () => {
    const s = seed("deny");
    const code = (input: { projectId: string; attemptId: string; itemId: string }) => {
      const r = readBoundExecutionReviewItem({ ...input, refsRoot: s.refs });
      return r.ok ? "OK" : r.code;
    };
    expect(
      code({ projectId: "prj:OTHER", attemptId: s.attemptId, itemId: s.itemId }),
    ).toBe("EXECUTION_REVIEW_PROJECT_MISMATCH");
    expect(
      code({ projectId: "prj:sec", attemptId: "att:unknown", itemId: s.itemId }),
    ).toBe("EXECUTION_REVIEW_MATERIAL_MISSING");
    expect(
      code({ projectId: "prj:sec", attemptId: s.attemptId, itemId: "ri:999" }),
    ).toBe("EXECUTION_REVIEW_ITEM_NOT_FOUND");
    expect(code({ projectId: "", attemptId: s.attemptId, itemId: s.itemId })).toBe(
      "EXECUTION_REVIEW_BINDING_REQUIRED",
    );
    expect(code({ projectId: "prj:sec", attemptId: s.attemptId, itemId: " " })).toBe(
      "EXECUTION_REVIEW_BINDING_REQUIRED",
    );
  });

  it("path-like / injection itemIds are rejected before any filesystem access", () => {
    const s = seed("inject");
    for (const itemId of [
      "../../etc/passwd",
      "..",
      "a/b",
      "a\\b",
      "ri:001/../ri:002",
      "ri:001\0",
      "/abs/path",
    ]) {
      const r = readBoundExecutionReviewItem({
        projectId: "prj:sec",
        attemptId: s.attemptId,
        itemId,
        refsRoot: s.refs,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.code).toBe("EXECUTION_REVIEW_ITEM_ID_INVALID");
    }
  });

  it("tampered manifest contentRef escaping execution-review/items is denied", () => {
    const s = seed("tamper");
    const rel = genericExecutionReviewMaterialRefsRelative(s.attemptId);
    const manifestPath = path.join(s.refs, rel.manifest);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as {
      reviewItems: { itemId: string; contentRef?: string }[];
    };
    fs.writeFileSync(path.join(s.refs, "secret.txt"), "TOP-SECRET");
    manifest.reviewItems[0]!.contentRef = "../../../../secret.txt";
    fs.writeFileSync(manifestPath, JSON.stringify(manifest));
    const r = readBoundExecutionReviewItem({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      itemId: s.itemId,
      refsRoot: s.refs,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("EXECUTION_REVIEW_ITEM_REF_DENIED");
    // Absolute ref too.
    manifest.reviewItems[0]!.contentRef = path.join(s.refs, "secret.txt");
    fs.writeFileSync(manifestPath, JSON.stringify(manifest));
    const abs = readBoundExecutionReviewItem({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      itemId: s.itemId,
      refsRoot: s.refs,
    });
    expect(abs.ok).toBe(false);
  });

  it("Nora tool read_item and the shared reader return identical verdicts (single primitive)", async () => {
    const s = seed("tool");
    const { RunContext } = await import("@openai/agents");
    const tools = createExecutionReviewAgentsTools({
      projectId: "prj:sec",
      attemptId: s.attemptId,
      refsRoot: s.refs,
    });
    const ctx = new RunContext({});
    for (const itemId of [s.itemId, "ri:999", "../x"]) {
      const viaTool = JSON.parse(
        String(await tools[1]!.invoke(ctx, JSON.stringify({ itemId }))),
      ) as { ok: boolean; code?: string };
      const viaReader = readBoundExecutionReviewItem({
        projectId: "prj:sec",
        attemptId: s.attemptId,
        itemId,
        refsRoot: s.refs,
      });
      expect(viaTool.ok).toBe(viaReader.ok);
      if (!viaReader.ok) expect(viaTool.code).toBe(viaReader.code);
    }
    const foreign = createExecutionReviewAgentsTools({
      projectId: "prj:OTHER",
      attemptId: s.attemptId,
      refsRoot: s.refs,
    });
    const denied = JSON.parse(
      String(
        await foreign[1]!.invoke(ctx, JSON.stringify({ itemId: s.itemId })),
      ),
    ) as { ok: boolean; code?: string };
    expect(denied.ok).toBe(false);
    expect(denied.code).toBe("EXECUTION_REVIEW_PROJECT_MISMATCH");
  });
});

describe("CP2-08 — reconcile continue policy: no 120 abandonment", () => {
  it("backoff is positive, non-decreasing, capped — and defined for arbitrarily large attempt indices", () => {
    let prev = 0;
    for (let i = 1; i <= 2000; i++) {
      const d = nextReconcileContinueDelayMs(i);
      expect(d).toBeGreaterThan(0);
      expect(d).toBeLessThanOrEqual(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
      expect(d).toBeGreaterThanOrEqual(prev);
      prev = d;
    }
    expect(nextReconcileContinueDelayMs(0)).toBeGreaterThan(0);
    expect(nextReconcileContinueDelayMs(120)).toBe(
      RECONCILE_CONTINUE_BACKOFF_MAX_MS,
    );
    expect(nextReconcileContinueDelayMs(121)).toBe(
      RECONCILE_CONTINUE_BACKOFF_MAX_MS,
    );
  });

  it("continue predicate depends only on durable projection — never on a counter", () => {
    expect(shouldContinueReconcileNominally(null)).toBe(false);
    expect(shouldContinueReconcileNominally(undefined)).toBe(false);
    expect(
      shouldContinueReconcileNominally({ stage: "RUNNING", recoveryRequired: true }),
    ).toBe(false);
    for (const next of ["AWAIT_EXTERNAL", "MATERIALIZE_PRODUCT", "RUN_POST_EVIDENCE"]) {
      expect(
        shouldContinueReconcileNominally({
          stage: "SOMETHING_ELSE",
          nextDeterministicAction: next,
        }),
      ).toBe(true);
    }
    expect(
      shouldContinueReconcileNominally({
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "HUMAN_DECISION_REQUIRED",
      }),
    ).toBe(false);
  });

  it("TrajectorySurface no longer embeds the legacy bounded poll loop or a 120 total budget", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/for\s*\(\s*let i = 0;\s*i < 8;/);
    expect(src).not.toMatch(/(MAX|BUDGET)[A-Z_]*\s*=\s*120\b/);
    expect(src).toMatch(/reconcileContinuePolicy/);
    expect(src).toMatch(/nextReconcileContinueDelayMs/);
    expect(src).toMatch(/shouldAutoResumeReconcileOnRemount/);
  });
});

===== END FILE: projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts =====

/**
 * GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 — CORRECTION PASS 04
 * Front-door Product E2E oracle (CP4-01 + CP3 spine).
 *
 * Product path (MD-CP4-01 — no durableLocalWriteSeal injection):
 *   saveProposal(executionIntent non-docs_write)
 *   → proposeTrajectoryOptions(proposalId) → PresentedOptionSet.sealedExecutionBasis
 *   → decideTrajectory(opt:proposal-subject:pursue)
 *   → DecisionBasis.executionBasis from sealed Product facts
 *   → prepare (generic Cursor quartet, EFFECT_CLASS:local-write, Confirmation N2,
 *     NOT docs_write) → inspect → confirm → authorize → select agent → start
 *   → (Fake Cursor) → record → finalize Review Material from REAL temp Git
 *   → Verification Evidence → Mission Evidence → Resolution → Nora / Pilot.
 *
 * ZERO REAL: Cursor is TestOnlyRealExecutionLaunchPort; only temp Git is real.
 * Anti-regression: this MAIN oracle MUST NOT contain durableLocalWriteSeal.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { RunContext } from "@openai/agents";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type {
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai/types";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import {
  mintCursorExecutionReportId,
  mintCursorReviewEndOfId,
} from "@/lib/oa/execution-attempt";
import { CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { reconcileGovernedExecution } from "@/features/project-assistant/w2/reconcileGovernedExecution";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { resolveProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
import { deriveGovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import {
  canQualifyGenericLocalWriteFromDurableFacts,
  classifyProtectedRepositoryPath,
} from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import { applyVerifiedChangeSetProductHonesty } from "@/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty";
import {
  w2ReadExecutionReviewItemAction,
} from "@/features/project-assistant/w2/actions";
import { loadGenericExecutionReviewMaterial, digestUtf8 } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import {
  executionReviewVerificationEvidenceIdForAttempt,
  executionReviewVerificationLocationForAttempt,
  isExecutionReviewVerificationPayload,
  type ExecutionReviewVerificationPayload,
} from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import { CURSOR_REVIEW_END_OF_MISSING } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
import { observeNoraCognitiveCore } from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";
import { createExecutionReviewAgentsTools } from "@/lib/nora-cognitive-runtime/executionReviewAgentsTools";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  nextReconcileContinueDelayMs,
  shouldAutoResumeReconcileOnRemount,
  shouldContinueReconcileNominally,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const ENV_KEYS = [
  "SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT",
  "SFIA_STUDIO_PRODUCT_DB_PATH",
  "OPS1_CONVERSATION_PROVIDER",
] as const;
const envBefore: Partial<Record<(typeof ENV_KEYS)[number], string | undefined>> =
  {};
const extraTempDirs: string[] = [];

beforeEach(() => {
  for (const k of ENV_KEYS) envBefore[k] = process.env[k];
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
});

afterEach(() => {
  setConversationProviderForTests(null);
  cleanupW2TempDirs();
  for (const k of ENV_KEYS) {
    if (envBefore[k] === undefined) delete process.env[k];
    else process.env[k] = envBefore[k];
  }
  while (extraTempDirs.length) {
    const d = extraTempDirs.pop()!;
    try {
      fs.rmSync(d, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

/* -------------------------------------------------------------------------- */
/* Real temp Git repository                                                    */
/* -------------------------------------------------------------------------- */

function git(cwd: string, ...args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

/** baseline.txt (+ untouched.txt) committed at H0 — a REAL Git worktree. */
function createGitWorktree(label: string): { repo: string; h0: string } {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), `gerrc-cp2-${label}-`));
  extraTempDirs.push(repo);
  git(repo, "init", "-q");
  git(repo, "config", "user.email", "gerrc@example.test");
  git(repo, "config", "user.name", "gerrc");
  git(repo, "config", "commit.gpgsign", "false");
  fs.writeFileSync(path.join(repo, "baseline.txt"), "baseline\n");
  fs.writeFileSync(path.join(repo, "untouched.txt"), "untouched\n");
  git(repo, "add", "-A");
  git(repo, "commit", "-q", "-m", "H0");
  return { repo, h0: git(repo, "rev-parse", "HEAD").toLowerCase() };
}

/** Fake Cursor "work": a.md created, baseline.txt modified, b.md created (unclaimed). */
function fakeCursorMutatesWorktree(repo: string): void {
  fs.writeFileSync(path.join(repo, "a.md"), "A-content\n");
  fs.appendFileSync(path.join(repo, "baseline.txt"), "modified by cursor\n");
  fs.writeFileSync(path.join(repo, "b.md"), "B-unclaimed\n");
}

/* -------------------------------------------------------------------------- */
/* Product path: Proposal sealedExecutionBasis → pursue → generic local-write  */
/* -------------------------------------------------------------------------- */

type AuthorizedCtx = Awaited<ReturnType<typeof authorizeProductLocalWrite>>;

function genericLocalWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  targetPath?: string;
  scopeIn?: readonly string[];
  reversibilityExpectation?: "reversible" | "irreversible" | "unknown";
  intentKind?: "docs_write" | "read_only" | "other" | null;
}): ProposalDto {
  const targetPath = input.targetPath ?? "a.md";
  const scopeIn = input.scopeIn ?? ["a.md", "baseline.txt"];
  return saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Exécuter une mutation locale bornée (generic local-write)",
    objective: "Créer a.md et modifier baseline.txt dans le worktree isolé",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "CP4 Product Proposal carrier for generic local-write",
    scope: "bounded local-write — isolated worktree",
    outOfScope: ["specialized Product write taxonomy", "REAL", "git commit/push/PR"],
    activatedBlocks: [],
    expectedOutcome: "Fichiers créés/modifiés + Report + Review End Of",
    sources: ["nora"],
    risks: ["CLAIM/FACT mismatch"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options sur ce sujet",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: "studio.cursor.generalist.execute",
    executionIntent: {
      intentKind: input.intentKind === undefined ? "other" : input.intentKind,
      artifactType: null,
      targetPath,
      scopeIn: [...scopeIn],
      scopeOut: ["GIT_COMMIT", "GIT_PUSH", "GIT_PR"],
      expectedOutputs: [
        "a.md créé",
        "baseline.txt modifié",
        "CursorExecutionReport + Cursor Review End Of",
      ],
      requiredCapabilities: ["cap:studio.cursor.generalist"],
      validationExpectations: [],
      evidenceRequirements: [
        "evreq:local-write",
        "evreq:studio-verified-changeset",
      ],
      requestedOperation: "studio.cursor.generalist.execute",
      reversibilityExpectation: input.reversibilityExpectation ?? "reversible",
      artifactBrief: null,
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: null,
      targetRepositoryRef: "acme/w2-harness",
    },
  });
}

async function authorizeProductLocalWrite(
  suffix: string,
  fixture: { h0: string },
  overrides?: {
    targetPath?: string;
    scopeIn?: readonly string[];
  },
) {
  const db = tempProductDbPath(`gerrc-cp4-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `g4${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, { suffix });
  const oa = runtime.oa!;
  const context = await currentF2Context(runtime, seeded.projectId);
  const proposal = genericLocalWriteProposal({
    projectId: seeded.projectId,
    lpsId: context.lpsId,
    lpsVersion: context.lpsVersion,
    doctrineDigest: context.doctrineDigest,
    activeCycleInstanceId: context.activeCycleInstanceId!,
    targetPath: overrides?.targetPath,
    scopeIn: overrides?.scopeIn,
  });

  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qualification");

  // Product path: propose with proposalId → PresentedOptionSet.sealedExecutionBasis
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
    proposalId: proposal.proposalId,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  expect(proposed.decisionSubjectMode).toBe("proposal");
  expect(proposed.proposalId).toBe(proposal.proposalId);
  // sealedExecutionBasis is persisted on PresentedOptionSet (Epistemic), not
  // re-exported on the propose() return — DecisionBasis after decide proves it.

  // CP4-01 — NO durableLocalWriteSeal. Facts come from sealed PresentedOptionSet.
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  expect(decided.decision.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);

  const row = await oa.decisionServices.decisions.findById(
    decided.decision.decisionId,
  );
  expect(row?.status).toBe("accepted");
  expect(row!.decisionBasis!.sourceType).toBe("proposal");
  const sealed = row!.decisionBasis!.executionBasis;
  expect(sealed.targetPath).toBe(overrides?.targetPath ?? "a.md");
  expect(sealed.scopeIn).toEqual(
    overrides?.scopeIn ?? ["a.md", "baseline.txt"],
  );
  expect(sealed.reversibilityExpectation).toBe("reversible");
  expect(sealed.intentKind).not.toBe("docs_write");

  const paths = sealed.scopeIn ?? [];
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    pinnedBaseHeadSha: fixture.h0,
    sourceGroundingReader: async () =>
      paths.map((p) => ({
        pathOrRef: p,
        coverage: "full" as const,
        origin: "remembered_prior_read" as const,
        rememberedAtIso: "2026-09-01T00:00:00.000Z",
        cycleInstanceId: null,
        repositoryHeadSha: fixture.h0,
      })),
  });
  if (!prepared.ok) {
    throw new Error(`prepare ${prepared.code}: ${prepared.message}`);
  }
  expect(prepared.ok).toBe(true);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  expect(prepared.contract.effectConfirmationRequired).toBe(true);
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok).toBe(true);
  if (!authorized.ok) throw new Error("auth");

  const live =
    (await oa.executionContractServices.contracts.findById(
      executionContractId,
    )) ?? prepared.contract;
  const inputs = (live as { inputs?: Record<string, unknown> }).inputs ?? {};
  const repositoryRef =
    typeof inputs.repositoryBindingIdentity === "string"
      ? inputs.repositoryBindingIdentity
      : "acme/w2-harness";
  const baseSha =
    typeof inputs.baseHeadSha === "string" ? inputs.baseHeadSha : fixture.h0;
  const refsRoot = path.join(path.dirname(db), "mission-result-refs");
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = db;
  process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refsRoot;
  return {
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    executionContractId,
    prepared,
    contract: live as typeof prepared.contract,
    inputs,
    repositoryRef,
    baseSha,
    refsRoot,
    db,
    proposalId: proposal.proposalId,
  };
}

/** @deprecated alias — CP4 Product path is Proposal pursue, not GOVERNED+seal. */
const authorizeGovernedLocalWrite = authorizeProductLocalWrite;

function launchPortOf(ctx: AuthorizedCtx): TestOnlyRealExecutionLaunchPort {
  const port = ctx.oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

/* -------------------------------------------------------------------------- */
/* Cursor CLAIM report                                                         */
/* -------------------------------------------------------------------------- */

function cursorReportStdout(input: {
  attemptId: string;
  ctx: AuthorizedCtx;
  created: string[];
  modified: string[];
  withReviewEndOf: boolean;
}): string {
  const { attemptId, ctx } = input;
  const body: Record<string, unknown> = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: mintCursorExecutionReportId({
      attemptId,
      executionContractId: ctx.executionContractId,
    }),
    attemptId,
    executionContractId: ctx.executionContractId,
    repositoryRef: ctx.repositoryRef,
    baseSha: ctx.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: [
      ...(input.created.length ? ["filesystem.create"] : []),
      ...(input.modified.length ? ["filesystem.modify"] : []),
    ],
    workPerformed: [
      `created ${input.created.join(",") || "nothing"}`,
      `modified ${input.modified.join(",") || "nothing"}`,
    ],
    fileEffects: {
      created: input.created,
      modified: input.modified,
      deleted: [],
    },
    missionResult: {
      diagnosticSummary: "Cursor CLAIM — see Studio VerifiedChangeSet for FACTS.",
      recommendedNextProductStep: "Review Studio VerifiedChangeSet.",
    },
  };
  if (input.withReviewEndOf) {
    body.reviewEndOf = {
      schemaVersion: "oa.cursor-review-end-of.1",
      reviewEndOfId: mintCursorReviewEndOfId({
        attemptId,
        executionContractId: ctx.executionContractId,
      }),
      attemptId,
      executionContractId: ctx.executionContractId,
      timestamp: new Date().toISOString(),
      repositoryRef: ctx.repositoryRef,
      baseSha: ctx.baseSha,
      verdict: "succeeded",
      objective: "write a.md and update baseline.txt",
      scopeTreated: "a.md, baseline.txt",
      workPerformed: ["Cursor-native review end-of"],
      filesCreated: input.created,
      filesModified: input.modified,
      filesDeleted: [],
      validations: [],
      deviations: [],
      blockers: [],
      reservations: [],
      stopConditionsMet: [],
      claims: [
        `created ${input.created.join(",") || "nothing"}`,
        `modified ${input.modified.join(",") || "nothing"}`,
      ],
      pointsRequiringReview: ["confirm completeness vs worktree"],
    };
  }
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

type ScenarioResult = {
  attemptId: string;
  loaded: Extract<
    ReturnType<typeof loadGenericExecutionReviewMaterial>,
    { ok: true }
  >;
  verificationPayload: ExecutionReviewVerificationPayload;
  verificationEvidence: { evidenceId: string; status: string } | null;
};

/** Select → Start → Fake Cursor boundary completes → record (server finalize). */
async function runAttemptToTerminal(
  ctx: AuthorizedCtx,
  scenario: {
    worktreeRef: string | null;
    mutate?: () => void;
    created: string[];
    modified: string[];
    withReviewEndOf: boolean;
  },
): Promise<ScenarioResult> {
  const port = launchPortOf(ctx);
  const launchBefore = port.launchCallCount;
  const selected = await governedExecuteSelectAgent({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId: ctx.executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error("select");
  expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  const started = await governedExecuteStart({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error("start");
  expect(started.phase).toBe("running");
  expect(port.launchCallCount).toBe(launchBefore + 1);

  // The Fake Cursor does its work inside the worktree.
  scenario.mutate?.();
  setTimeout(() => {
    port.resolveSimulatedCompletion(`proc:sim:${started.attemptId}`, {
      exitCode: 0,
      timedOut: false,
      stdout: cursorReportStdout({
        attemptId: started.attemptId,
        ctx,
        created: scenario.created,
        modified: scenario.modified,
        withReviewEndOf: scenario.withReviewEndOf,
      }),
      stderr: "",
      durationMs: 5,
      ...(scenario.worktreeRef ? { worktreeRef: scenario.worktreeRef } : {}),
    });
  }, 15);

  const terminal = await governedExecuteRecordResult({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
    awaitIfPending: true,
    missionResultRefsRoot: ctx.refsRoot,
  });
  expect(terminal.ok).toBe(true);
  if (!terminal.ok) throw new Error(`record ${terminal.code}`);
  expect(terminal.attemptStatus).toBe("succeeded");
  expect(port.launchCallCount).toBe(launchBefore + 1); // exactly one launch

  const loaded = loadGenericExecutionReviewMaterial({
    refsRoot: ctx.refsRoot,
    attemptId: started.attemptId,
  });
  expect(loaded.ok).toBe(true);
  if (!loaded.ok) throw new Error("load");

  // CP2-04 — Verification Evidence via the existing Evidence stack.
  const verificationEvidenceId = executionReviewVerificationEvidenceIdForAttempt(
    started.attemptId,
  );
  expect(verificationEvidenceId.startsWith("ev:execution-review:")).toBe(true);
  const verificationEvidence =
    (await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
      verificationEvidenceId,
    )) ?? null;
  const payloadPath = path.join(
    ctx.refsRoot,
    executionReviewVerificationLocationForAttempt(started.attemptId),
  );
  expect(fs.existsSync(payloadPath)).toBe(true);
  const payload = JSON.parse(fs.readFileSync(payloadPath, "utf8")) as unknown;
  expect(isExecutionReviewVerificationPayload(payload)).toBe(true);
  return {
    attemptId: started.attemptId,
    loaded,
    verificationPayload: payload as ExecutionReviewVerificationPayload,
    verificationEvidence: verificationEvidence
      ? {
          evidenceId: verificationEvidence.evidenceId,
          status: verificationEvidence.status,
        }
      : null,
  };
}

async function productVerdictOf(ctx: AuthorizedCtx, attemptId: string) {
  const materialized = await materializeW3bProductTerminal({
    oa: ctx.oa,
    projectId: ctx.projectId,
    attemptId,
  });
  expect(materialized.ok).toBe(true);
  if (!materialized.ok) throw new Error("materialize");
  const resolved = await resolveProductExecutionContext({
    oa: ctx.oa,
    projectId: ctx.projectId,
    query: { kind: "byAttemptId", attemptId },
  });
  expect(resolved.ok).toBe(true);
  if (!resolved.ok) throw new Error("resolve");
  return { product: materialized.product, context: resolved.context };
}

/* -------------------------------------------------------------------------- */
/* Nora: FakeConversationProvider with a tool script                           */
/* -------------------------------------------------------------------------- */

/**
 * Round 1 = scripted tool call `execution_review_get_manifest`
 * (FakeConversationProvider toolScript). Round 2 (after the Agents Runner
 * executed the tool) composes the final answer ONLY from the tool output that
 * came back through the Runner — the prompt never contains `b.md`.
 */
class ReviewManifestToolProvider extends FakeConversationProvider {
  readonly rounds: ProviderInputItem[][] = [];

  constructor() {
    super({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call:cp2-manifest",
              name: "execution_review_get_manifest",
              argumentsJson: "{}",
            },
          ],
        },
      ],
    });
  }

  override async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.rounds.push(input.items.map((i) => ({ ...i })));
    const out = input.items.find((i) => i.type === "function_call_output");
    if (!out || out.type !== "function_call_output") {
      return super.completeRound(input);
    }
    // Agents tool output envelope: {"type":"text","text":"<json>"}.
    const envelope = JSON.parse(out.output) as { text?: string };
    const manifest = JSON.parse(
      typeof envelope.text === "string" ? envelope.text : out.output,
    ) as {
      ok: boolean;
      blockers?: string[];
      verifiedEffects?: {
        claimFactMismatch?: boolean;
        unclaimedObservedPaths?: string[];
      };
    };
    const unclaimed = manifest.verifiedEffects?.unclaimedObservedPaths ?? [];
    const mismatchBlockers = (manifest.blockers ?? []).filter((b) =>
      b.includes("CLAIM_FACT_MISMATCH"),
    );
    const text =
      `[TEST/FAKE] Revue Nora (outil manifest) — ` +
      (manifest.verifiedEffects?.claimFactMismatch
        ? `${mismatchBlockers.join(" | ") || "CLAIM_FACT_MISMATCH"}; ` +
          `fichiers observés non déclarés: ${unclaimed.join(", ")}. ` +
          `Le CLAIM Cursor est incomplet — résultat produit non prouvé.`
        : `aucun écart CLAIM/FACT.`);
    return {
      kind: "message",
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-cp2-final",
      },
    };
  }
}

/* ========================================================================== */
/* Tests                                                                       */
/* ========================================================================== */

describe("GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 CP4 front-door", () => {
  it("CP4-01/10 prepare — Proposal pursue sealed facts ⇒ generic quartet, EFFECT_CLASS:local-write, Confirmation N2, NOT docs_write", async () => {
    const fx = createGitWorktree("prep");
    const ctx = await authorizeGovernedLocalWrite("prep", fx);
    const c = ctx.prepared.contract;

    expect(c.action).toBe("studio.cursor.generalist.execute");
    expect(c.target).toBe("studio.cursor.generalist.workspace");
    expect(c.scope).toBe("studio.cursor.generalist.authorized_contract");
    expect(c.requiredCapabilities).toEqual(["cap:studio.cursor.generalist"]);
    expect(c.constraints).toContain("EFFECT_CLASS:local-write");
    expect(c.constraints).toContain("EFFECT_CONFIRMATION_REQUIRED:N2");
    expect(c.constraints).toContain("PRODUCT_MISSION_FROM_DURABLE_CONTEXT");
    expect(c.constraints).toEqual(
      expect.arrayContaining([
        "MISSION_SCOPE_IN:a.md",
        "MISSION_SCOPE_IN:baseline.txt",
        "SCOPE_OUT:GIT_COMMIT",
        "SCOPE_OUT:GIT_PUSH",
        "SCOPE_OUT:GIT_PR",
      ]),
    );
    expect(c.effectClass).toBe("local-write");
    expect(c.effectConfirmationRequired).toBe(true);
    expect(c.effectConfirmationLevel).toBe("N2");
    expect(c.requiredAuthority).toBe("N2");
    expect(c.status).toBe("confirmation_required");
    expect(c.reversibility).toBe("reversible");

    // NO docs_write Product taxonomy anywhere on the durable EC.
    const durable = JSON.stringify(ctx.contract);
    expect(durable).not.toMatch(/docs_write/i);
    expect(durable).not.toMatch(/cursor\.docs_write/i);
    expect(c.action).not.toMatch(/docs_write/);
    expect(c.requiredCapabilities.join(",")).not.toMatch(/docs_write/);

    // ER keys demand Studio verification + local-write; report asks for native REO.
    const disclosure = c.inspectionDisclosure as unknown as {
      evidenceRequirements?: string[];
    };
    expect(disclosure.evidenceRequirements).toEqual(
      expect.arrayContaining([
        "evreq:local-write",
        "evreq:studio-verified-changeset",
      ]),
    );
    const reportReq = (
      ctx.inputs[CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY] as string[]
    ).join("\n");
    expect(reportReq).toMatch(/Review End Of/i);
    expect(reportReq).toMatch(/fileEffects/);

    // Repo identity pinned to the real Git HEAD (H0).
    expect(ctx.baseSha).toBe(fx.h0);
  }, 60_000);

  it("CP4-01 anti-regression — MAIN front-door source has zero durableLocalWriteSeal injection", () => {
    const src = fs.readFileSync(__filename, "utf8");
    // Forbidden: property injection of durableLocalWriteSeal into decideTrajectory.
    expect(src).not.toMatch(/\bdurableLocalWriteSeal\s*:/);
  });

  it("CP4-02 Option C — ordinary app path ALLOW; method/prompts/.github/framing/Doctrine/Roadmap/D-ER/C1 DENY", () => {
    expect(classifyProtectedRepositoryPath("projects/sfia-studio/app/example.ts")).toBeNull();
    expect(classifyProtectedRepositoryPath("a.md")).toBeNull();
    expect(classifyProtectedRepositoryPath("method/sfia-fast-track/core/x.md")).toBe("method/");
    expect(classifyProtectedRepositoryPath("prompts/templates/x.md")).toBe("prompts/");
    expect(classifyProtectedRepositoryPath(".github/workflows/ci.yml")).toBe(".github/");
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md",
      ),
    ).toBe("projects/sfia-studio/sfia-v3-framing/");
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/sfia-v3-framing/subdir/future.md",
      ),
    ).toBe("projects/sfia-studio/sfia-v3-framing/");
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
      ),
    ).toBe(
      "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
    );
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
      ),
    ).toBe(
      "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
    );
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md",
      ),
    ).toBe(
      "projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md",
    );
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
      ),
    ).toBe(
      "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
    );
    // Bounded set — ordinary convergence asset is NOT blanket-denied.
    expect(
      classifyProtectedRepositoryPath(
        "projects/sfia-studio/convergence/some-other-capitalisation.md",
      ),
    ).toBeNull();
  });

  it("CP4-02 — protected Proposal target FAIL-CLOSED before Cursor (no mutating EC)", async () => {
    const db = tempProductDbPath("gerrc-cp4-prot.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "g4prot" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "prot" });
    const oa = runtime.oa!;
    const context = await currentF2Context(runtime, seeded.projectId);
    const proposal = genericLocalWriteProposal({
      projectId: seeded.projectId,
      lpsId: context.lpsId,
      lpsVersion: context.lpsVersion,
      doctrineDigest: context.doctrineDigest,
      activeCycleInstanceId: context.activeCycleInstanceId!,
      targetPath:
        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
      scopeIn: [
        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
      ],
    });
    const q = await resolveW2QualificationInputs({ oa, projectId: seeded.projectId });
    if (!q.ok) throw new Error("q");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...q.qualification.inputs,
      packagePin: q.qualification.packagePin,
      objective: q.qualification.objective,
      projectTitle: q.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    if (!proposed.ok) throw new Error("p");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("d");
    // HumanDecision may exist — ExecutionAuthority must not.
    const row = await oa.decisionServices.decisions.findById(
      decided.decision.decisionId,
    );
    expect(row?.decisionBasis?.executionBasis.targetPath).toContain(
      "build-doctrine",
    );
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: "a".repeat(40),
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) expect(prepared.code).toBe("EFFECTS_UNRESOLVED");
  }, 60_000);

  it("CP4-01 — ordinary projects/sfia-studio/app path qualifies (Option C not blanket Studio deny)", () => {
    const q = canQualifyGenericLocalWriteFromDurableFacts({
      basis: {
        sourceType: "proposal",
        sourceRef: "prop:x",
        sourceDigest: "d".repeat(64),
        projectId: "prj:x",
        executionBasis: {
          targetPath: "projects/sfia-studio/app/example.ts",
          scopeIn: ["projects/sfia-studio/app/example.ts"],
          reversibilityExpectation: "reversible",
          intentKind: "other",
        },
      } as never,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    });
    expect(q.ok).toBe(true);
  });

    it("CP2-01 negative — GOVERNED WITHOUT durable local-write facts fails closed (no invented HOW)", async () => {
    const db = tempProductDbPath("gerrc-cp2-neg.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "g2neg" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "neg" });
    const oa = runtime.oa!;
    const q = await resolveW2QualificationInputs({ oa, projectId: seeded.projectId });
    if (!q.ok) throw new Error("q");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...q.qualification.inputs,
      packagePin: q.qualification.packagePin,
      objective: q.qualification.objective,
      projectTitle: q.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("p");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decided.ok) throw new Error("d");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: "a".repeat(40),
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) expect(prepared.code).toBe("EFFECTS_UNRESOLVED");
  }, 60_000);

  it("CP2-10 MAIN — real Git worktree: Cursor CLAIM omits b.md ⇒ VerifiedChangeSet = exactly 3 deltas, mismatch, HEAD=H0, Verification Evidence, no PASS, Nora tool, Pilot reader, remount", async () => {
    const fx = createGitWorktree("main");
    const ctx = await authorizeGovernedLocalWrite("main", fx);
    const run = await runAttemptToTerminal(ctx, {
      worktreeRef: fx.repo,
      mutate: () => fakeCursorMutatesWorktree(fx.repo),
      created: ["a.md"],
      modified: ["baseline.txt"], // CLAIM omits b.md
      withReviewEndOf: true,
    });
    const { loaded, attemptId } = run;

    // ── Review Material: FACTS from NodeLocalGitStatusDiffPort, not the whole repo.
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    const vcs = loaded.verifiedChangeSet!;
    expect(vcs).not.toBeNull();
    expect(vcs.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "b.md",
      "baseline.txt",
    ]);
    expect(vcs.all).toHaveLength(3);
    expect(vcs.all.map((e) => e.path)).not.toContain("untouched.txt");
    expect(vcs.created.map((e) => e.path).sort()).toEqual(["a.md", "b.md"]);
    expect(vcs.modified.map((e) => e.path)).toEqual(["baseline.txt"]);
    expect(vcs.claimFactMismatch).toBe(true);
    expect(vcs.unclaimedObservedPaths).toEqual(["b.md"]);
    expect(vcs.claimedMissingPaths).toEqual([]);
    expect(vcs.observedHeadSha).toBe(fx.h0); // HEAD unchanged = H0
    expect(git(fx.repo, "rev-parse", "HEAD").toLowerCase()).toBe(fx.h0);
    expect(loaded.manifest.verifiedEffects.claimFactMismatch).toBe(true);
    expect(loaded.manifest.completeness).toBe("PARTIAL");
    expect(
      loaded.manifest.blockers.some(
        (b) => b.includes("CLAIM_FACT_MISMATCH") && b.includes("b.md"),
      ),
    ).toBe(true);

    // Native REO is a CLAIM, persisted as received (never synthesized).
    expect(loaded.reviewEndOf).not.toBeNull();
    expect(loaded.reviewEndOf!.reviewEndOfId).toBe(
      mintCursorReviewEndOfId({
        attemptId,
        executionContractId: ctx.executionContractId,
      }),
    );
    expect(loaded.manifest.blockers).not.toContain(CURSOR_REVIEW_END_OF_MISSING);

    // ── CP2-04: Verification Evidence ingested through the Evidence stack.
    expect(run.verificationEvidence).not.toBeNull();
    expect(run.verificationEvidence!.evidenceId).toMatch(
      /^ev:execution-review:/,
    );
    expect(run.verificationEvidence!.status).toBe("verified");
    expect(run.verificationPayload.claimFactMismatch).toBe(true);
    expect(run.verificationPayload.verificationStatus).toBe("OBSERVED");
    expect(run.verificationPayload.unclaimedObservedPaths).toEqual(["b.md"]);
    expect(run.verificationPayload.observedPathCount).toBe(3);

    // ── ContractResult / Product outcome ≠ PASS under mismatch.
    // CP3-07 — install Fake Nora provider BEFORE W3-B/W3-C so the nominal
    // runW3cPostEvidenceLoop (via materialize) actually exercises Deep Review tools.
    const provider = new ReviewManifestToolProvider();
    setConversationProviderForTests(provider);
    const coreCalls: string[] = [];
    const stop = observeNoraCognitiveCore((inv) => coreCalls.push(inv.mode));
    const { product, context } = await productVerdictOf(ctx, attemptId);
    stop();
    expect(context.claimEvaluation.contractResultVerdict).not.toBe("PASS");
    expect(product.contractResultVerdict).not.toBe("PASS");
    expect(product.outcome).not.toBe("SUCCESS");
    expect(product.claimAllowed).toBe(false);
    const honest = applyVerifiedChangeSetProductHonesty({
      attemptId,
      product: { ...product, outcome: "SUCCESS", claimAllowed: true },
      refsRoot: ctx.refsRoot,
    });
    expect(honest.outcome).not.toBe("SUCCESS"); // even a forged PASS is downgraded
    expect(honest.claimAllowed).toBe(false);
    expect(context.attempt?.status).toBe("succeeded"); // technical success preserved
    expect(context.executionReview.present).toBe(true);
    expect(context.executionReview.claimFactMismatch).toBe(true);
    expect(context.executionReview.verificationStatus).toBe("OBSERVED");
    expect(context.executionReview.verifiedChangeSetPresent).toBe(true);
    expect(context.executionReview.reviewEndOfPresent).toBe(true);

    // CP3-04 — Verification Evidence digest == durable verified-changeset.json bytes.
    expect(run.verificationPayload.verifiedChangeSetDigest).toBeTruthy();
    expect(run.verificationPayload.verifiedChangeSetRef).toBeTruthy();
    const durableVcsAbs = path.join(
      ctx.refsRoot,
      run.verificationPayload.verifiedChangeSetRef!,
    );
    expect(fs.existsSync(durableVcsAbs)).toBe(true);
    const durableDigest = digestUtf8(fs.readFileSync(durableVcsAbs));
    expect(run.verificationPayload.verifiedChangeSetDigest).toBe(durableDigest);

    // ── CP3-07 Nora via nominal W3-C (not direct analyzePostEvidenceWithProvider).
    expect(coreCalls).toContain("post_execution");
    expect(provider.rounds.length).toBeGreaterThanOrEqual(2);
    const promptText = provider.rounds[0]!
      .filter((i) => i.type === "message")
      .map((i) => (i.type === "message" ? i.content : ""))
      .join("\n");
    expect(promptText).not.toMatch(/\bb\.md\b/);
    const secondRound = provider.rounds[1]!;
    const toolCall = secondRound.find(
      (i) => i.type === "function_call" && i.name === "execution_review_get_manifest",
    );
    expect(toolCall).toBeDefined();
    const toolOut = secondRound.find((i) => i.type === "function_call_output");
    expect(toolOut && toolOut.type === "function_call_output").toBe(true);
    if (toolOut && toolOut.type === "function_call_output") {
      const envelope = JSON.parse(toolOut.output) as { type?: string; text?: string };
      const rawJson = typeof envelope.text === "string" ? envelope.text : toolOut.output;
      const parsed = JSON.parse(rawJson) as {
        ok: boolean;
        verifiedEffects: { claimFactMismatch: boolean; unclaimedObservedPaths: string[] };
      };
      expect(parsed.ok).toBe(true);
      expect(parsed.verifiedEffects.claimFactMismatch).toBe(true);
      expect(parsed.verifiedEffects.unclaimedObservedPaths).toEqual(["b.md"]);
    }
    // Final Nora answer grounded on tool output (W3-C / Agents Runner).
    const finalMessages = provider.rounds
      .flat()
      .filter((i) => i.type === "message")
      .map((i) => (i.type === "message" ? i.content : ""));
    // The tool output round embeds CLAIM_FACT_MISMATCH + b.md; Fake final uses it.
    expect(toolOut).toBeDefined();
    expect(
      finalMessages.some(
        (m) => /b\.md/.test(m) || /CLAIM_FACT_MISMATCH/.test(m),
      ) ||
        (toolOut &&
          toolOut.type === "function_call_output" &&
          /b\.md/.test(toolOut.output)),
    ).toBe(true);
    const worktreeSnapshot = fs.readdirSync(fx.repo);
    expect(worktreeSnapshot).toContain("b.md");
    fs.rmSync(fx.repo, { recursive: true, force: true });
    const reloaded = loadGenericExecutionReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId,
    });
    expect(reloaded.ok && reloaded.verifiedChangeSet?.unclaimedObservedPaths).toEqual(
      ["b.md"],
    );

    // ── Pilot: server action — security (same shared reader as the Nora tool).
    const items = loaded.manifest.reviewItems;
    const bItem = items.find((i) => i.logicalPath === "b.md");
    expect(bItem).toBeDefined();
    const okRead = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId,
      itemId: bItem!.itemId,
    });
    expect(okRead.ok).toBe(true);
    if (okRead.ok) {
      expect(okRead.content).toContain("B-unclaimed");
      expect(okRead.claimFactMismatch).toBe(true);
      expect(okRead.logicalPath).toBe("b.md");
    }

    // CP3-08 — tamper item bytes after persistence ⇒ integrity DENY.
    expect(bItem!.contentRef).toBeTruthy();
    const itemAbs = path.join(ctx.refsRoot, bItem!.contentRef!);
    fs.writeFileSync(itemAbs, Buffer.from("TAMPERED-CONTENT"));
    const tampered = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId,
      itemId: bItem!.itemId,
    });
    expect(tampered.ok).toBe(false);
    if (!tampered.ok) {
      expect(tampered.code).toBe("EXECUTION_REVIEW_ITEM_INTEGRITY_MISMATCH");
    }
    // restore for any later reads
    fs.writeFileSync(itemAbs, Buffer.from("B-unclaimed\n"));

    // Project mismatch ⇒ deny.
    const wrongProject = await w2ReadExecutionReviewItemAction({
      projectId: "prj:not-this-project",
      attemptId,
      itemId: bItem!.itemId,
    });
    expect(wrongProject.ok).toBe(false);
    // Unknown item ⇒ deny.
    const unknownItem = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId,
      itemId: "ri:999",
    });
    expect(unknownItem.ok).toBe(false);
    if (!unknownItem.ok) {
      expect(unknownItem.code).toBe("EXECUTION_REVIEW_ITEM_NOT_FOUND");
    }
    // Path-like itemId ⇒ deny. Unknown attempt ⇒ deny.
    const pathy = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId,
      itemId: "../../secret",
    });
    expect(pathy.ok).toBe(false);
    const wrongAttempt = await w2ReadExecutionReviewItemAction({
      projectId: ctx.projectId,
      attemptId: "xat:does-not-exist",
      itemId: bItem!.itemId,
    });
    expect(wrongAttempt.ok).toBe(false);

    // Nora tool read_item agrees with the Pilot action (single primitive).
    const tools = createExecutionReviewAgentsTools({
      projectId: ctx.projectId,
      attemptId,
      refsRoot: ctx.refsRoot,
    });
    const viaTool = JSON.parse(
      String(
        await tools[1]!.invoke(
          new RunContext({}),
          JSON.stringify({ itemId: "ri:999" }),
        ),
      ),
    ) as { ok: boolean; code?: string };
    expect(viaTool.ok).toBe(false);
    expect(viaTool.code).toBe("EXECUTION_REVIEW_ITEM_NOT_FOUND");

    // ── Remount continuity (policy-level): a terminal+stable projection no
    // longer auto-resumes; nothing relaunches.
    const stable = await deriveGovernedExecutionContinuityProjection({
      oa: ctx.oa,
      projectId: ctx.projectId,
      query: { kind: "byExecutionContractId", executionContractId: ctx.executionContractId },
    });
    expect(stable.ok).toBe(true);
    if (stable.ok) {
      expect(stable.projection.attemptId).toBe(attemptId);
    }
  }, 90_000);

  it("CP2-03 missing REO — Cursor omits Review End Of ⇒ PARTIAL + CURSOR_REVIEW_END_OF_MISSING, NEVER synthesized", async () => {
    const fx = createGitWorktree("noreo");
    const ctx = await authorizeGovernedLocalWrite("noreo", fx);
    const run = await runAttemptToTerminal(ctx, {
      worktreeRef: fx.repo,
      mutate: () => {
        fs.writeFileSync(path.join(fx.repo, "a.md"), "A\n");
        fs.appendFileSync(path.join(fx.repo, "baseline.txt"), "m\n");
      },
      created: ["a.md"],
      modified: ["baseline.txt"], // claims match FACTS
      withReviewEndOf: false,
    });
    const { loaded } = run;
    expect(loaded.reviewEndOf).toBeNull();
    expect(loaded.manifest.executorClaims.cursorReviewEndOfRef).toBeNull();
    expect(loaded.manifest.completeness).toBe("PARTIAL");
    expect(loaded.manifest.blockers).toContain(CURSOR_REVIEW_END_OF_MISSING);
    // FACTS side is intact and honest: observed, no mismatch.
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(loaded.verifiedChangeSet!.all.map((e) => e.path).sort()).toEqual([
      "a.md",
      "baseline.txt",
    ]);
    expect(loaded.verifiedChangeSet!.claimFactMismatch).toBe(false);
    expect(run.verificationPayload.reviewEndOfPresent).toBe(false);
    expect(run.verificationPayload.completeness).toBe("PARTIAL");
    // CP3-06 — required REO absent ⇒ ContractResult / Product cannot PASS.
    const { product, context } = await productVerdictOf(ctx, run.attemptId);
    expect(context.claimEvaluation.contractResultVerdict).not.toBe("PASS");
    expect(product.contractResultVerdict).not.toBe("PASS");
    expect(product.outcome).not.toBe("SUCCESS");
    // No REO artifact on disk.
    const reoFile = path.join(
      ctx.refsRoot,
      "refs",
      "attempts",
      run.attemptId.replace(/[^a-zA-Z0-9:_-]/g, ""),
      "execution-review",
      "cursor-review-end-of.json",
    );
    expect(fs.existsSync(reoFile)).toBe(false);

    expect(context.executionReview.reviewEndOfPresent).toBe(false);
    expect(context.executionReview.blockers).toContain(
      CURSOR_REVIEW_END_OF_MISSING,
    );
    expect(context.executionReview.completeness).toBe("PARTIAL");
  }, 90_000);

  it("CP2-02 UNAVAILABLE — no worktree ⇒ verification UNAVAILABLE, no VerifiedChangeSet, Verification Evidence says so, no PASS", async () => {
    const fx = createGitWorktree("nowt");
    const ctx = await authorizeGovernedLocalWrite("nowt", fx);
    const run = await runAttemptToTerminal(ctx, {
      worktreeRef: null, // observation never ran
      created: ["a.md"],
      modified: ["baseline.txt"],
      withReviewEndOf: true,
    });
    const { loaded } = run;
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("UNAVAILABLE");
    expect(loaded.manifest.verifiedEffects.verifiedChangeSetRef).toBeNull();
    expect(loaded.verifiedChangeSet).toBeNull(); // never an invented empty FACT set
    expect(loaded.manifest.completeness).toBe("PARTIAL");
    expect(
      loaded.manifest.blockers.some((b) => b.includes("VERIFICATION_UNAVAILABLE")),
    ).toBe(true);
    expect(run.verificationPayload.verificationStatus).toBe("UNAVAILABLE");
    expect(run.verificationPayload.verifiedChangeSetDigest).toBeNull();
    expect(run.verificationPayload.observedPathCount).toBe(0);

    const { product, context } = await productVerdictOf(ctx, run.attemptId);
    expect(context.executionReview.verificationStatus).toBe("UNAVAILABLE");
    expect(context.executionReview.verifiedChangeSetPresent).toBe(false);
    expect(product.contractResultVerdict).not.toBe("PASS");
    expect(product.outcome).not.toBe("SUCCESS");
    expect(product.claimAllowed).toBe(false);
  }, 90_000);

  it("CP2-02 zero-change OBSERVED — clean Git status ⇒ VerifiedChangeSet empty (verified zero change), committed files never listed", async () => {
    const fx = createGitWorktree("zero");
    const ctx = await authorizeGovernedLocalWrite("zero", fx);
    const run = await runAttemptToTerminal(ctx, {
      worktreeRef: fx.repo,
      // Fake Cursor changes nothing.
      created: [],
      modified: [],
      withReviewEndOf: true,
    });
    const { loaded } = run;
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(loaded.verifiedChangeSet).not.toBeNull();
    expect(loaded.verifiedChangeSet!.all).toEqual([]); // NOT baseline.txt / untouched.txt
    expect(loaded.verifiedChangeSet!.claimFactMismatch).toBe(false);
    expect(loaded.verifiedChangeSet!.observedHeadSha).toBe(fx.h0);
    expect(loaded.manifest.verifiedEffects.gitFacts).toContain(
      "verified_zero_change",
    );
    expect(run.verificationPayload.verificationStatus).toBe("OBSERVED");
    expect(run.verificationPayload.observedPathCount).toBe(0);
    expect(run.verificationPayload.claimFactMismatch).toBe(false);
    expect(run.verificationEvidence?.status).toBe("verified");
  }, 90_000);

  async function remountJourney() {
    const fx = createGitWorktree("remount");
    const ctx = await authorizeGovernedLocalWrite("remount", fx);
    const port = launchPortOf(ctx);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error("select");
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error("start");
    const attemptId = started.attemptId;

    // « Remount »: a fresh durable derivation (no client state) must say RUNNING
    // + auto-resume — this is exactly what TrajectorySurface consumes on mount
    // (proven component-side in the trajectorySurface test).
    const derive = async () => {
      const d = await deriveGovernedExecutionContinuityProjection({
        oa: ctx.oa,
        projectId: ctx.projectId,
        query: {
          kind: "byExecutionContractId",
          executionContractId: ctx.executionContractId,
        },
      });
      if (!d.ok) throw new Error(d.code);
      return d.projection;
    };
    const remounted = await derive();
    expect(remounted.stage).toBe("RUNNING");
    expect(remounted.attemptId).toBe(attemptId);
    expect(shouldAutoResumeReconcileOnRemount(remounted)).toBe(true);

    // Policy-driven scheduler harness. SCHEDULING decisions come ONLY from
    // reconcileContinuePolicy (continue? how long to back off?). Server steps
    // are the owner's transitions; they are NOT a stand-in for UI behavior
    // (the mounted component is proven in the trajectorySurface test).
    // NB: reconcile "continue" on a RUNNING Attempt AWAITS the executor (server
    // owner semantics), so while the Fake process is still running the harness
    // only re-derives the durable projection ("observe", read-only) per tick.
    //
    // Fake Nora boundary required for the post-Evidence continue step after
    // materialization (otherwise POST_EVIDENCE_PENDING never clears).
    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: [
          "[TEST/FAKE] Post-Evidence remount — Review Material observé; mismatch b.md.",
        ],
      }),
    );
    const delays: number[] = [];
    const stages: string[] = [];
    const COMPLETES_AT_TICK = LEGACY_UI_RUNNING_POLL_BUDGET + 4;
    let projection = remounted;
    let tick = 0;
    let finalProjection = projection;
    while (shouldContinueReconcileNominally(projection) && tick < 60) {
      tick += 1;
      delays.push(nextReconcileContinueDelayMs(tick)); // would-be setTimeout
      if (tick < COMPLETES_AT_TICK) {
        const observed = await reconcileGovernedExecution({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.executionContractId,
          intent: "observe",
        });
        expect(observed.ok).toBe(true);
        projection = observed.projection!;
        // Still RUNNING, still the same single Attempt; nothing relaunched.
        expect(projection.stage).toBe("RUNNING");
      } else {
        if (tick === COMPLETES_AT_TICK) {
          // The Cursor process only now finishes (well past the legacy budget).
          fakeCursorMutatesWorktree(fx.repo);
          port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
            exitCode: 0,
            timedOut: false,
            stdout: cursorReportStdout({
              attemptId,
              ctx,
              created: ["a.md"],
              modified: ["baseline.txt"],
              withReviewEndOf: true,
            }),
            stderr: "",
            durationMs: 5,
            worktreeRef: fx.repo,
          });
        }
        const reconciled = await reconcileGovernedExecution({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.executionContractId,
          intent: "continue", // never "execute" ⇒ never a second Attempt
        });
        expect(reconciled.ok || reconciled.projection?.attemptId).toBeTruthy();
        projection = reconciled.projection ?? projection;
      }
      stages.push(projection.stage);
      finalProjection = projection;
      if (projection.stage !== "RECOVERY_REQUIRED") {
        expect(projection.attemptId).toBe(attemptId);
      }
    }

    const runningSteps = stages.filter((s) => s === "RUNNING").length;
    expect(runningSteps).toBeGreaterThan(LEGACY_UI_RUNNING_POLL_BUDGET);
    expect(tick).toBeLessThan(60); // loop ended on its own (policy said stop)
    expect(delays.every((d) => d > 0)).toBe(true);
    expect(port.launchCallCount).toBe(1); // single launch for the whole journey
    return { ctx, attemptId, finalProjection, runningSteps };
  }

  it("CP2-08 remount continuity — durable RUNNING auto-resumes by POLICY past the legacy budget; same Attempt, one launch; late completion finalizes Review Material + Verification Evidence", async () => {
    const { ctx, attemptId, runningSteps } = await remountJourney();
    expect(runningSteps).toBeGreaterThan(LEGACY_UI_RUNNING_POLL_BUDGET);
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(loaded.verifiedChangeSet?.unclaimedObservedPaths).toEqual(["b.md"]);
    const ev = await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
      executionReviewVerificationEvidenceIdForAttempt(attemptId),
    );
    expect(ev?.status).toBe("verified");
    const attempt = await ctx.oa.executionAttemptServices!.getExecutionAttempt.execute({
      attemptId,
    });
    expect(attempt.ok && attempt.attempt.status).toBe("succeeded");
  }, 120_000);

  // Nominal remount path: after late Fake completion the Reconciler must reach
  // a terminal Product stage (mission + verification Evidence pair is not ambiguous).
  it("CP2-08 remount → terminal Product — no RECOVERY_REQUIRED / EVIDENCE_LINEAGE_AMBIGUOUS", async () => {
    const { finalProjection } = await remountJourney();
    expect(finalProjection.stage).not.toBe("RECOVERY_REQUIRED");
    expect(finalProjection.blockingCode).not.toBe("EVIDENCE_LINEAGE_AMBIGUOUS");
    expect(finalProjection.productOutcome).toBeDefined();
  }, 120_000);
});

===== END FILE: projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.trajectorySurface.d0.test.ts =====

/**
 * GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 — Correction Pass 02
 * CP2-08 / CP2-06 — TrajectorySurface mounted-component continuity proof.
 *
 * Mounts the REAL TrajectorySurface (React Testing Library, jsdom) with a
 * RUNNING Attempt and fake timers. The test NEVER calls reconcileGovernedExecution
 * (nor the reconcile server action) as the « UI behavior »: the component's own
 * scheduler (reconcileContinuePolicy.nextReconcileContinueDelayMs +
 * shouldContinueReconcileNominally) must drive the continue intents beyond the
 * legacy 8-poll budget, and must stop on its own once the durable projection is
 * stable. Server actions are Fake/mocked boundaries only. ZERO REAL.
 *
 * @vitest-environment jsdom
 */
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { createElement } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  NOMINAL_RECONCILE_CONTINUE_BUDGET,
  RECONCILE_CONTINUE_BACKOFF_MAX_MS,
  nextReconcileContinueDelayMs,
  shouldAutoResumeReconcileOnRemount,
  shouldContinueReconcileNominally,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  prepareContractMock,
  confirmMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  materializeMock,
  reconcileMock,
  deriveContinuityMock,
  resolveContextMock,
  readReviewItemMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  readPreCycleMock,
  readApprovalMock,
  readPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  prepareContractMock: vi.fn(),
  confirmMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  materializeMock: vi.fn(),
  reconcileMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  resolveContextMock: vi.fn(),
  readReviewItemMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...a: unknown[]) => proposeMock(...a),
  w2DecideTrajectoryAction: (...a: unknown[]) => decideMock(...a),
  w2InspectExecutionContractAction: (...a: unknown[]) => inspectMock(...a),
  w2ConfirmExecutionContractAction: (...a: unknown[]) => confirmMock(...a),
  w2AuthorizeExecutionContractAction: (...a: unknown[]) => authorizeMock(...a),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: (...a: unknown[]) =>
    prepareContractMock(...a),
  w2GovernedExecuteSelectAction: (...a: unknown[]) => executeSelectMock(...a),
  w2GovernedExecuteStartAction: (...a: unknown[]) => executeStartMock(...a),
  w2GovernedExecuteCompleteAction: (...a: unknown[]) =>
    executeCompleteMock(...a),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2MaterializeProductOutcomeAction: (...a: unknown[]) =>
    materializeMock(...a),
  w2ReconcileGovernedExecutionAction: (...a: unknown[]) => reconcileMock(...a),
  w2DeriveGovernedExecutionContinuityAction: (...a: unknown[]) =>
    deriveContinuityMock(...a),
  w2ResolveProductExecutionContextAction: (...a: unknown[]) =>
    resolveContextMock(...a),
  w2ReadExecutionReviewItemAction: (...a: unknown[]) =>
    readReviewItemMock(...a),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2RematerializeDocsWriteEvidenceAction: vi.fn(),
  w2ReadActiveDecisionSubjectAction: (...a: unknown[]) =>
    readActiveDecisionSubjectMock(...a),
  w2ReadCurrentGovernedExecutionContinuityAction: (...a: unknown[]) =>
    readGovernedExecutionContinuityMock(...a),
  w2ReadRecoveryExecutionBindingAction: (...a: unknown[]) =>
    readRecoveryExecutionBindingMock(...a),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...a: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...a),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...a: unknown[]) =>
    readPreCycleMock(...a),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...a: unknown[]
  ) => readApprovalMock(...a),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: (...a: unknown[]) =>
    readPreparedCycleMock(...a),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const PROJECT_ID = "prj:gerrc-cp2-surface";
const EC_ID = "xct:w3a:dec:w2-trj:gerrc-cp2-surface";
const ATTEMPT_ID = "xat:gerrc-cp2-surface";

function activeContinuity() {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:w2-trj:gerrc-cp2-surface",
    contract: {
      executionContractId: EC_ID,
      version: 2,
      status: "confirmed",
      action: "studio.cursor.generalist.execute",
      target: "studio.cursor.generalist.workspace",
      scope: "studio.cursor.generalist.authorized_contract",
      requiredAuthority: "N2",
      constraints: [
        "PRODUCT_GOVERNED",
        "EFFECT_CLASS:local-write",
        "EFFECT_CONFIRMATION_REQUIRED:N2",
      ],
      stopConditions: ["CLAIM_FACT_MISMATCH"],
      requiredCapabilities: ["cap:studio.cursor.generalist"],
      reversibility: "reversible",
      semanticFingerprint: "fp-gerrc-cp2",
      effectConfirmationRequired: true,
      effectConfirmationLevel: "N2",
      inspectionDisclosure: {
        action: "studio.cursor.generalist.execute",
        technicalTarget: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        targetRepositoryRef: "acme/w2-harness",
        targetPath: null,
        scopeIn: null,
        scopeOut: null,
        createOrModify: null,
        noDelete: null,
        objective: "generic mission",
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: ["Fichiers créés/modifiés dans le scope autorisé"],
        evidenceRequirements: [
          "evreq:local-write",
          "evreq:studio-verified-changeset",
        ],
        requiredAuthority: "N2",
        requiredCapabilities: ["cap:studio.cursor.generalist"],
        constraints: ["PRODUCT_GOVERNED"],
        stopConditions: ["CLAIM_FACT_MISMATCH"],
        reversibility: "reversible",
        contractVersion: 2,
        executionContractId: EC_ID,
        semanticFingerprint: "fp-gerrc-cp2",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: EC_ID,
      contractVersion: 2,
      semanticFingerprint: "fp-gerrc-cp2",
      statusLabel: "INSPECTION SUFFISANTE",
      inspectionSufficient: true,
      attestationRef: "insp:gerrc-cp2",
      attestedVersion: 2,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: null,
      grantsAuthority: false,
    },
  };
}

type Stage =
  | "RUNNING"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "POST_EVIDENCE_COMPLETE";

function projection(stage: Stage) {
  const running = stage === "RUNNING";
  return {
    projectId: PROJECT_ID,
    activeCycleInstanceId: null,
    executionContractId: EC_ID,
    executionContractVersion: 2,
    executionContractStatus: "confirmed",
    attemptId: ATTEMPT_ID,
    attemptStatus: running ? "running" : "succeeded",
    stage,
    productOutcome: stage === "POST_EVIDENCE_COMPLETE" ? "UNCLAIMED" : null,
    evidenceId: null,
    reviewBundleId: null,
    claimEvaluationId: null,
    claimEvaluationStatus: null,
    postEvidencePresent: stage === "POST_EVIDENCE_COMPLETE",
    nextDeterministicAction:
      stage === "RUNNING"
        ? ("AWAIT_EXTERNAL" as const)
        : stage === "PRODUCT_MATERIALIZATION_PENDING"
          ? ("MATERIALIZE_PRODUCT" as const)
          : ("NONE" as const),
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: null,
  };
}

function reconcileResult(stage: Stage, extra?: Record<string, unknown>) {
  return {
    ok: true as const,
    intent: "continue" as const,
    projection: projection(stage),
    transitionsApplied: [] as string[],
    stoppedReason: stage === "RUNNING" ? "awaiting_external" : "stable",
    ...(extra ?? {}),
  };
}

const MISMATCH_PRODUCT = {
  outcome: "UNCLAIMED",
  businessHeadline: "Qualification produit incomplète",
  businessReason: "CLAIM_FACT_MISMATCH — Product PASS refused",
  claimAllowed: false,
  evidenceId: "ev:mission-result:gerrc-cp2",
  reviewBundleId: "rb:gerrc-cp2",
  claimEvaluationId: "ce:gerrc-cp2",
  claimEvaluationStatus: "not_proven",
  contractResultVerdict: "NOT_SATISFIED",
  evidenceStatus: "available",
  evidenceSummary: "Mission result + verification",
  reviewBundleCompleteness: "partial",
  governedBoundary: "Fake Cursor boundary",
  technicalDetail: {
    attemptId: ATTEMPT_ID,
    attemptStatus: "succeeded",
    resultRef: "res:gerrc-cp2",
    errorRef: null,
    stopReason: null,
    executionContractId: EC_ID,
    executionContractVersion: 2,
  },
  reservations: [],
  antiClaims: {
    ready: false,
    w3Closed: false,
    productCompletionComplete: false,
    runtimeV3Adopted: false,
    realProven: false,
    cycleAutoClosed: false,
    projectArchived: false,
  },
  cycleInstanceClosed: false,
  projectArchived: false,
  noraInvoked: false,
  replanInvoked: false,
  realExecution: false,
};

/** .ts file (no JSX) — createElement keeps the requested filename. */
function mountSurface() {
  return createElement(TrajectorySurface, {
    decisionWorkflowMode: "legacy_cta",
    projectId: PROJECT_ID,
  });
}

async function flush(ms = 0): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

beforeEach(() => {
  vi.useFakeTimers();
  for (const m of [
    proposeMock,
    decideMock,
    inspectMock,
    authorizeMock,
    prepareContractMock,
    confirmMock,
    executeSelectMock,
    executeStartMock,
    executeCompleteMock,
    materializeMock,
    reconcileMock,
    deriveContinuityMock,
    resolveContextMock,
    readReviewItemMock,
    readActiveDecisionSubjectMock,
    readGovernedExecutionContinuityMock,
    readRecoveryExecutionBindingMock,
    readRecoveryOwnedDecisionContinuityMock,
    readPreCycleMock,
    readApprovalMock,
    readPreparedCycleMock,
  ]) {
    m.mockReset();
  }
  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readGovernedExecutionContinuityMock.mockResolvedValue(activeContinuity());
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:gerrc-cp2",
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: "cycinst:gerrc-cp2",
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
  // Durable projection at remount time: Attempt still RUNNING.
  deriveContinuityMock.mockResolvedValue({
    ok: true,
    projection: projection("RUNNING"),
  });
  resolveContextMock.mockResolvedValue({ ok: false, code: "UNUSED", message: "" });
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("CP2-08 policy seams used by the mounted surface", () => {
  it("no total continue budget; backoff is capped but never abandons", () => {
    expect(NOMINAL_RECONCILE_CONTINUE_BUDGET).toBe(Number.POSITIVE_INFINITY);
    expect(LEGACY_UI_RUNNING_POLL_BUDGET).toBe(8);
    for (let i = 1; i <= 500; i++) {
      const d = nextReconcileContinueDelayMs(i);
      expect(d).toBeGreaterThan(0);
      expect(d).toBeLessThanOrEqual(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
    }
    expect(shouldContinueReconcileNominally(projection("RUNNING"))).toBe(true);
    expect(shouldAutoResumeReconcileOnRemount(projection("RUNNING"))).toBe(true);
    expect(
      shouldContinueReconcileNominally(projection("POST_EVIDENCE_COMPLETE")),
    ).toBe(false);
  });
});

describe("CP2-08 TrajectorySurface mounted continuity (component-driven)", () => {
  it("remount with RUNNING Attempt auto-continues beyond the legacy budget of 8, with backoff, without any manual reconcile call", async () => {
    // RUNNING for 14 server answers (> legacy 1 + 8), then stable terminal.
    const RUNNING_ANSWERS = 14;
    let calls = 0;
    reconcileMock.mockImplementation(async () => {
      calls += 1;
      return calls <= RUNNING_ANSWERS
        ? reconcileResult("RUNNING")
        : reconcileResult("POST_EVIDENCE_COMPLETE", {
            product: MISMATCH_PRODUCT,
          });
    });

    render(mountSurface());

    // Mount: durable continuity hydrates the EC; remount effect derives the
    // projection and the COMPONENT triggers the first continue intent.
    await flush(0);
    await flush(0);
    expect(deriveContinuityMock).toHaveBeenCalledWith(
      expect.objectContaining({ projectId: PROJECT_ID, executionContractId: EC_ID }),
    );
    expect(reconcileMock).toHaveBeenCalledTimes(1);
    expect(reconcileMock.mock.calls[0]![0]).toEqual(
      expect.objectContaining({
        projectId: PROJECT_ID,
        executionContractId: EC_ID,
        intent: "continue",
      }),
    );

    // The component schedules each next continue with backoff — we only advance
    // the clock; the test never invokes reconcile itself.
    const before = reconcileMock.mock.calls.length;
    await flush(nextReconcileContinueDelayMs(1) - 1);
    expect(reconcileMock.mock.calls.length).toBe(before); // not yet: backoff respected
    await flush(1);
    expect(reconcileMock.mock.calls.length).toBe(before + 1);

    // Drive the clock far past the legacy budget.
    for (let i = 0; i < 40; i++) {
      await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
    }

    const totalAfterTerminal = RUNNING_ANSWERS + 1; // last call returns terminal
    expect(reconcileMock.mock.calls.length).toBe(totalAfterTerminal);
    expect(reconcileMock.mock.calls.length).toBeGreaterThan(
      1 + LEGACY_UI_RUNNING_POLL_BUDGET,
    );
    for (const call of reconcileMock.mock.calls) {
      expect(call[0].intent).toBe("continue"); // never execute → no second Attempt
    }
    expect(executeSelectMock).not.toHaveBeenCalled();
    expect(executeStartMock).not.toHaveBeenCalled();
    expect(executeCompleteMock).not.toHaveBeenCalled();
    expect(materializeMock).not.toHaveBeenCalled();

    // Stable projection ⇒ scheduler stops by itself (no infinite polling after).
    await flush(60_000);
    expect(reconcileMock.mock.calls.length).toBe(totalAfterTerminal);

    // Product result painted from the server answer; attempt id preserved.
    expect(screen.getByTestId("w3a-attempt-id")).toHaveTextContent(ATTEMPT_ID);
    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
  });

  it("continue intents keep being scheduled while projection stays pending (materialization) — no 120-style abandonment", async () => {
    const TOTAL_PENDING = 130; // > any historical 120 total-budget abandonment
    let calls = 0;
    reconcileMock.mockImplementation(async () => {
      calls += 1;
      return calls <= TOTAL_PENDING
        ? reconcileResult("PRODUCT_MATERIALIZATION_PENDING")
        : reconcileResult("POST_EVIDENCE_COMPLETE", { product: MISMATCH_PRODUCT });
    });

    render(mountSurface());
    await flush(0);
    await flush(0);

    for (let i = 0; i < TOTAL_PENDING + 20; i++) {
      await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
    }
    expect(reconcileMock.mock.calls.length).toBe(TOTAL_PENDING + 1);
    expect(reconcileMock.mock.calls.length).toBeGreaterThan(120);
    await flush(60_000);
    expect(reconcileMock.mock.calls.length).toBe(TOTAL_PENDING + 1);
  });

  it("does not auto-resume on remount when durable projection is already stable", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection("POST_EVIDENCE_COMPLETE"),
    });
    reconcileMock.mockResolvedValue(reconcileResult("POST_EVIDENCE_COMPLETE"));
    render(mountSurface());
    await flush(0);
    await flush(0);
    await flush(10_000);
    expect(deriveContinuityMock).toHaveBeenCalled();
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("unmount cancels the scheduler — no continue after the surface is gone", async () => {
    reconcileMock.mockResolvedValue(reconcileResult("RUNNING"));
    const view = render(mountSurface());
    await flush(0);
    await flush(0);
    await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS * 3);
    const callsWhileMounted = reconcileMock.mock.calls.length;
    expect(callsWhileMounted).toBeGreaterThan(1);

    view.unmount();
    await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS * 20);
    expect(reconcileMock.mock.calls.length).toBe(callsWhileMounted);
  });

  it("CP2-06 — Product Resolution drives the real Execution Review block + bounded item read (server-owned)", async () => {
    reconcileMock.mockResolvedValue(
      reconcileResult("POST_EVIDENCE_COMPLETE", { product: MISMATCH_PRODUCT }),
    );
    resolveContextMock.mockResolvedValue({
      ok: true,
      context: {
        attempt: { attemptId: ATTEMPT_ID, status: "succeeded" },
        claimEvaluation: { contractResultVerdict: "NOT_SATISFIED" },
        postEvidence: null,
        executionReview: {
          kind: "EXECUTION_REVIEW_MATERIAL",
          present: true,
          completeness: "PARTIAL",
          reviewMaterialId: "rm:gerrc-cp2",
          reviewItemCount: 1,
          claimFactMismatch: true,
          verificationStatus: "OBSERVED",
          retentionState: "retained",
          reviewEndOfPresent: false,
          verifiedChangeSetPresent: true,
          blockers: [
            "CURSOR_REVIEW_END_OF_MISSING",
            "CLAIM_FACT_MISMATCH unclaimed=b.md",
          ],
          reviewItemSummaries: [
            {
              itemId: "item:b-md",
              kind: "file",
              label: "created: b.md",
              logicalPath: "b.md",
            },
          ],
        },
      },
    });
    readReviewItemMock.mockResolvedValue({
      ok: true,
      itemId: "item:b-md",
      kind: "file",
      label: "created: b.md",
      logicalPath: "b.md",
      content: "B-unclaimed\n",
      completeness: "FULL",
      digest: "sha256:abc",
      claimFactMismatch: true,
      verificationStatus: "OBSERVED",
      reviewEndOfPresent: false,
    });

    render(mountSurface());
    await flush(0);
    await flush(0);
    await flush(0);

    expect(resolveContextMock).toHaveBeenCalledWith({
      projectId: PROJECT_ID,
      attemptId: ATTEMPT_ID,
    });
    expect(screen.getByTestId("w3b-review-mismatch")).toHaveTextContent("oui");
    expect(screen.getByTestId("w3b-review-reo")).toHaveTextContent("manquant");
    expect(screen.getByTestId("w3b-review-verification-status")).toHaveTextContent(
      "OBSERVED",
    );
    expect(screen.getByTestId("w3b-review-contract-result")).toHaveTextContent(
      "NOT_SATISFIED",
    );
    expect(screen.getByTestId("w3b-review-blockers")).toHaveTextContent(
      "CLAIM_FACT_MISMATCH",
    );

    await act(async () => {
      fireEvent.click(screen.getByTestId("w3b-review-item-open-item:b-md"));
      await vi.advanceTimersByTimeAsync(0);
    });
    // Client sends ONLY projectId + attemptId + itemId (no path / contentRef).
    expect(readReviewItemMock).toHaveBeenCalledWith({
      projectId: PROJECT_ID,
      attemptId: ATTEMPT_ID,
      itemId: "item:b-md",
    });
    expect(screen.getByTestId("w3b-review-item-content")).toHaveTextContent(
      "B-unclaimed",
    );
  });
});

===== END FILE: projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.trajectorySurface.d0.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts =====

/**
 * Finalize Generic Execution Review Material after Studio observation (D-ER-04/06).
 * Called after Cursor terminal + independent worktree observation.
 * Does NOT create Evidence — Evidence ingest remains separate.
 *
 * CR-02 / CP2-02: NO OBSERVATION ≠ VERIFIED ZERO CHANGE.
 * - OBSERVED: VerifiedChangeSet present (may be empty = verified zero change)
 * - UNAVAILABLE / NOT_PERFORMED: VerifiedChangeSet ABSENT — never invent empty FACTS
 *
 * CP2-03 / D-ER-05: Cursor Review End Of is CLAIM produced by Cursor/executor ONLY.
 * Studio NEVER synthesizes CursorReviewEndOf. Missing REO ⇒ PARTIAL + blocker.
 */
import {
  bindCursorReviewEndOfToAttempt,
  observeVerifiedChangeSetStrict,
  parseCursorReviewEndOf,
  type CursorExecutionReport,
  type CursorReviewEndOf,
  type VerifiedChangeSet,
} from "@/lib/oa/execution-attempt";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import {
  persistGenericExecutionReviewMaterial,
  type ExecutionReviewMaterialManifest,
  type ExecutionReviewVerificationStatus,
} from "./persistGenericExecutionReviewMaterial";

export type FinalizeGenericExecutionReviewResult =
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      /** Present only when verificationStatus === "OBSERVED". */
      verifiedChangeSet: VerifiedChangeSet | null;
      verificationStatus: ExecutionReviewVerificationStatus;
      reviewEndOf: CursorReviewEndOf | null;
      reviewEndOfPresent: boolean;
      claimFactMismatch: boolean;
      /** Digest of durable verified-changeset.json bytes — null when not OBSERVED. */
      durableVerifiedChangeSetDigest: string | null;
      verifiedChangeSetRef: string | null;
      /** Binding mismatch / missing REO blockers already on manifest. */
      reoBindingCode: string | null;
    }
  | { ok: false; code: string; message: string };

export const CURSOR_REVIEW_END_OF_MISSING =
  "CURSOR_REVIEW_END_OF_MISSING" as const;

export const CURSOR_REVIEW_END_OF_BINDING_MISMATCH =
  "CURSOR_REVIEW_END_OF_BINDING_MISMATCH" as const;

/**
 * Resolve native Cursor Review End Of CLAIM from the report — NEVER synthesize.
 * CP2-03 / CP3-05: absent/invalid/unbound ⇒ null (PARTIAL + blocker).
 */
export function resolveCursorReviewEndOfClaim(
  report: CursorExecutionReport,
  binding?: {
    readonly expectedAttemptId: string;
    readonly expectedExecutionContractId: string;
    readonly expectedRepositoryRef?: string | null;
    readonly expectedBaseSha?: string | null;
  },
): {
  reviewEndOf: CursorReviewEndOf | null;
  present: boolean;
  bindingCode: string | null;
} {
  if (report.reviewEndOf) {
    const parsed = parseCursorReviewEndOf(report.reviewEndOf);
    if (!parsed.ok) {
      return { reviewEndOf: null, present: false, bindingCode: null };
    }
    if (binding) {
      const bound = bindCursorReviewEndOfToAttempt({
        reviewEndOf: parsed.reviewEndOf,
        expectedAttemptId: binding.expectedAttemptId,
        expectedExecutionContractId: binding.expectedExecutionContractId,
        expectedRepositoryRef: binding.expectedRepositoryRef,
        expectedBaseSha: binding.expectedBaseSha,
      });
      if (!bound.ok) {
        return {
          reviewEndOf: null,
          present: false,
          bindingCode: bound.code,
        };
      }
    }
    return {
      reviewEndOf: parsed.reviewEndOf,
      present: true,
      bindingCode: null,
    };
  }
  return { reviewEndOf: null, present: false, bindingCode: null };
}

/**
 * Presentation-only summary derived from the machine report when REO is missing.
 * Does NOT have type CursorReviewEndOf, does NOT get cursorReviewEndOfRef,
 * does NOT satisfy reportRequirements.
 */
export function presentationSummaryFromCursorReport(
  report: CursorExecutionReport,
): {
  readonly kind: "presentation_only_report_summary";
  readonly attemptId: string;
  readonly status: string;
  readonly workPerformed: readonly string[];
  readonly filesCreated: readonly string[];
  readonly filesModified: readonly string[];
  readonly note: string;
} {
  return {
    kind: "presentation_only_report_summary",
    attemptId: report.attemptId,
    status: report.status,
    workPerformed: report.workPerformed ?? [],
    filesCreated: report.fileEffects?.created ?? [],
    filesModified: report.fileEffects?.modified ?? [],
    note:
      "Presentation only — NOT CursorReviewEndOf; does not satisfy reportRequirements",
  };
}

export async function finalizeGenericExecutionReview(input: {
  readonly refsRoot: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly cursorReport: CursorExecutionReport;
  /** Server-owned worktree path. Absence ⇒ verification UNAVAILABLE — never empty FACTS. */
  readonly worktreePath?: string | null;
  readonly statusDiffPort?: LocalGitStatusDiffPort;
  readonly nameStatusText?: string;
  /**
   * git (default for real worktree) — uses NodeLocalGitStatusDiffPort when
   * statusDiffPort omitted.
   * test_non_git — explicit Fake/non-Git only (injected status or scoped listing).
   */
  readonly observationMode?: "git" | "test_non_git";
  /**
   * CP3-03 — nominal Git mode verifies worktree HEAD == EC/report baseSha.
   * Only pass false from explicit test-only fixtures that intentionally
   * decouple Fake worktree identity from Product pinned base (rare).
   * Default: HEAD-bound (undefined/true).
   */
  readonly requireHeadMatch?: boolean;
  readonly extraReviewItems?: Parameters<
    typeof persistGenericExecutionReviewMaterial
  >[0]["reviewItems"];
}): Promise<FinalizeGenericExecutionReviewResult> {
  const reoResolved = resolveCursorReviewEndOfClaim(input.cursorReport, {
    expectedAttemptId: input.attemptId,
    expectedExecutionContractId: input.executionContractId,
    expectedRepositoryRef: input.repositoryRef,
    expectedBaseSha: input.baseSha,
  });
  const reviewEndOf = reoResolved.reviewEndOf;
  const reviewEndOfPresent = reoResolved.present;
  const reoBindingCode = reoResolved.bindingCode;

  const worktreePath =
    typeof input.worktreePath === "string" && input.worktreePath.trim()
      ? input.worktreePath.trim()
      : null;

  let verificationStatus: ExecutionReviewVerificationStatus;
  let verifiedChangeSet: VerifiedChangeSet | null = null;

  if (worktreePath) {
    const mode =
      input.observationMode ??
      (input.nameStatusText != null && !input.statusDiffPort
        ? "test_non_git"
        : "git");
    const statusDiffPort =
      input.statusDiffPort ??
      (mode === "git" ? new NodeLocalGitStatusDiffPort() : undefined);
    const expectedBaseSha =
      input.requireHeadMatch === false
        ? null
        : input.cursorReport.baseSha?.trim() || input.baseSha || null;
    const observed = await observeVerifiedChangeSetStrict({
      worktreePath,
      report: input.cursorReport,
      statusDiffPort,
      nameStatusText: input.nameStatusText,
      computeDigests: true,
      observationMode: mode,
      expectedBaseSha,
    });
    if (observed.ok) {
      verifiedChangeSet = observed.changeSet;
      verificationStatus = "OBSERVED";
    } else {
      verificationStatus = "UNAVAILABLE";
      verifiedChangeSet = null;
    }
  } else {
    verificationStatus = "UNAVAILABLE";
    verifiedChangeSet = null;
  }

  const reviewItems: {
    kind: import("./persistGenericExecutionReviewMaterial").ExecutionReviewItemKind;
    logicalPath?: string;
    label: string;
    bytes?: Buffer;
    text?: string;
    summary?: string;
  }[] = [...(input.extraReviewItems ?? [])];

  if (verifiedChangeSet) {
    for (const entry of verifiedChangeSet.all) {
      if (entry.status === "deleted" || !entry.contentAbsolutePath) continue;
      try {
        const fs = await import("node:fs");
        if (!fs.existsSync(entry.contentAbsolutePath)) continue;
        const bytes = fs.readFileSync(entry.contentAbsolutePath);
        reviewItems.push({
          kind: "file",
          logicalPath: entry.path,
          label: `${entry.status}: ${entry.path}`,
          bytes,
          summary: entry.afterDigest,
        });
      } catch {
        // keep PARTIAL
      }
    }
  }

  for (const v of input.cursorReport.validationEffects ?? []) {
    reviewItems.push({
      kind: "validation",
      label: v.identity,
      text: JSON.stringify(v),
      summary: v.result,
    });
  }

  const claimFactMismatch = verifiedChangeSet?.claimFactMismatch === true;
  const observationMissing = verificationStatus !== "OBSERVED";
  const reoMissing = !reviewEndOfPresent;

  const blockers = [
    ...(input.cursorReport.blockers ?? []),
    ...(reoMissing && !reoBindingCode ? [CURSOR_REVIEW_END_OF_MISSING] : []),
    ...(reoBindingCode
      ? [`${CURSOR_REVIEW_END_OF_BINDING_MISMATCH}:${reoBindingCode}`]
      : []),
    ...(claimFactMismatch
      ? [
          `CLAIM_FACT_MISMATCH unclaimed=${verifiedChangeSet!.unclaimedObservedPaths.join(",")}`,
        ]
      : []),
    ...(observationMissing
      ? ["VERIFICATION_UNAVAILABLE — worktree observation not performed"]
      : []),
  ];

  const reservations = [
    ...(input.cursorReport.reservations ?? []),
    ...(reoMissing
      ? [
          reoBindingCode
            ? `Cursor Review End Of binding refused (${reoBindingCode}) — CLAIM incomplete; Studio did not synthesize REO`
            : "Cursor Review End Of absent — CLAIM incomplete; Studio did not synthesize REO",
        ]
      : []),
    ...(observationMissing
      ? ["Studio VerifiedChangeSet not available — FACTS incomplete"]
      : []),
    ...(claimFactMismatch
      ? ["Cursor CLAIM incomplete vs Studio OBSERVED FACTS"]
      : []),
  ];

  const persisted = persistGenericExecutionReviewMaterial({
    refsRoot: input.refsRoot,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    cursorReport: input.cursorReport,
    reviewEndOf, // null when missing/unbound — never synthetic
    verifiedChangeSet,
    verificationStatus,
    reviewItems,
    completeness:
      reoMissing || claimFactMismatch || observationMissing
        ? "PARTIAL"
        : undefined,
    blockers,
    reservations,
  });

  if (!persisted.ok) {
    return {
      ok: false,
      code: persisted.code,
      message: persisted.message,
    };
  }

  return {
    ok: true,
    manifest: persisted.manifest,
    verifiedChangeSet,
    verificationStatus,
    reviewEndOf,
    reviewEndOfPresent,
    claimFactMismatch,
    durableVerifiedChangeSetDigest: persisted.durableVerifiedChangeSetDigest,
    verifiedChangeSetRef: persisted.verifiedChangeSetRef,
    reoBindingCode,
  };
}

===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts =====

/**
 * Studio Verification Evidence — VerifiedChangeSet facts via existing Evidence stack (CP2-04).
 *
 * Reuses IngestExecutionAttemptEvidence + VerifyEvidenceIntegrity.
 * NOT a second Evidence engine. NOT a Product aggregate.
 *
 * Payload is a bounded attestation of Studio observation (FACTS), distinct from
 * Cursor CLAIM report and from Mission Result diagnostic payload.
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ExecutionReviewVerificationStatus } from "./persistGenericExecutionReviewMaterial";

export const OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA =
  "oa.execution-review-verification.1" as const;

export const EXECUTION_REVIEW_VERIFICATION_ER_KEY =
  "evreq:studio-verified-changeset" as const;

export type ExecutionReviewVerificationPayload = {
  readonly schemaVersion: typeof OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA;
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly projectId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly reviewMaterialId: string;
  readonly verificationStatus: ExecutionReviewVerificationStatus;
  readonly verifiedChangeSetDigest: string | null;
  readonly verifiedChangeSetRef: string | null;
  readonly claimFactMismatch: boolean;
  readonly unclaimedObservedPaths: readonly string[];
  readonly claimedMissingPaths: readonly string[];
  readonly observedPathCount: number;
  readonly completeness: "FULL" | "PARTIAL";
  readonly reviewEndOfPresent: boolean;
};

export function executionReviewVerificationEvidenceIdForAttempt(
  attemptId: string,
): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return `ev:execution-review:${segment}`.slice(0, 128);
}

export function isExecutionReviewVerificationEvidenceId(
  evidenceId: string,
): boolean {
  return evidenceId.startsWith("ev:execution-review:");
}

export function isExecutionReviewVerificationPayload(
  value: unknown,
): value is ExecutionReviewVerificationPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA &&
    typeof v.attemptId === "string" &&
    typeof v.executionContractId === "string" &&
    typeof v.projectId === "string" &&
    typeof v.verificationStatus === "string" &&
    typeof v.claimFactMismatch === "boolean"
  );
}

export function canonicalizeExecutionReviewVerificationPayload(
  payload: ExecutionReviewVerificationPayload,
): string {
  return `${JSON.stringify(payload)}\n`;
}

export function digestExecutionReviewVerificationPayload(
  payload: ExecutionReviewVerificationPayload,
): string {
  return `sha256:${createHash("sha256")
    .update(canonicalizeExecutionReviewVerificationPayload(payload))
    .digest("hex")}`;
}

export function executionReviewVerificationLocationForAttempt(
  attemptId: string,
): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return `refs/attempts/${segment}/execution-review-verification.json`;
}

export function persistExecutionReviewVerificationPayload(input: {
  refsRoot: string;
  attemptId: string;
  payload: ExecutionReviewVerificationPayload;
}):
  | { ok: true; absolutePath: string; digest: string }
  | { ok: false; code: string; message: string } {
  try {
    fs.mkdirSync(input.refsRoot, { recursive: true });
    const relative = executionReviewVerificationLocationForAttempt(
      input.attemptId,
    );
    const absolutePath = path.join(input.refsRoot, relative);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    const body = canonicalizeExecutionReviewVerificationPayload(input.payload);
    const digest = digestExecutionReviewVerificationPayload(input.payload);
    fs.writeFileSync(absolutePath, body, "utf8");
    return { ok: true, absolutePath, digest };
  } catch (err) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_VERIFICATION_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export type IngestExecutionReviewVerificationEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  payload: ExecutionReviewVerificationPayload;
  refsRoot: string;
  technicalResultRef?: string | null;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestExecutionReviewVerificationEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      evidenceStatus: string;
      location: string;
      digest: string;
    }
  | { ok: false; code: string; message: string };

export async function ingestExecutionReviewVerificationEvidence(
  input: IngestExecutionReviewVerificationEvidenceInput,
): Promise<IngestExecutionReviewVerificationEvidenceResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const evidenceId = executionReviewVerificationEvidenceIdForAttempt(
    input.executionAttemptId,
  );

  const persisted = persistExecutionReviewVerificationPayload({
    refsRoot: input.refsRoot,
    attemptId: input.executionAttemptId,
    payload: input.payload,
  });
  if (!persisted.ok) return persisted;

  const ingested =
    await input.evidenceReviewServices.ingestExecutionAttemptEvidence.execute({
      evidenceId,
      executionAttemptId: input.executionAttemptId,
      idempotencyKey: `idem:execution-review-verification:${evidenceId}`,
      actor,
      classification: "internal",
      type: "attestation",
      storageMode: "external_payload_ref",
      location: persisted.absolutePath,
      digest: persisted.digest as never,
      bindings: {
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        executionContractId: input.executionContractId,
      },
      correlationId:
        input.correlationId ?? `cor:execution-review-verification:${evidenceId}`,
      nowIso: input.nowIso,
    });
  if (!ingested.ok || !ingested.evidence) {
    return {
      ok: false,
      code: ingested.ok
        ? "EXECUTION_REVIEW_VERIFICATION_EVIDENCE_MISSING"
        : ingested.error.detailCode,
      message: ingested.ok
        ? "IngestExecutionAttemptEvidence returned no evidence."
        : ingested.error.message,
    };
  }

  let evidence = ingested.evidence;
  if (evidence.status === "available" && evidence.digest) {
    const verified =
      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: evidence.evidenceId,
        expectedVersion: evidence.version,
        actor,
        correlationId:
          input.correlationId ??
          `cor:execution-review-verification-verify:${evidenceId}`,
        nowIso: input.nowIso,
      });
    if (verified.ok && verified.evidence) {
      evidence = verified.evidence;
    }
  }

  return {
    ok: true,
    evidenceId: evidence.evidenceId,
    evidenceStatus: evidence.status,
    location: persisted.absolutePath,
    digest: persisted.digest,
  };
}

===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts =====

/**
 * Generic Execution Review Material — durable review payload (D-ER-04).
 *
 * Reuses the existing mission-result-refs filesystem layout (no new store/table).
 * Artifact documentaire is only ONE possible ReviewItem.
 * 0 Artifact + 0 changed file is valid when other reviewables exist.
 *
 * FINAL SCHEMA NOT ADOPTED as Product aggregate — operational payload only.
 * RAW capture ≠ finalized material (caller decides when to finalize after verify).
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type {
  CursorExecutionReport,
  CursorReviewEndOf,
  VerifiedChangeSet,
} from "@/lib/oa/execution-attempt";

export const OA_EXECUTION_REVIEW_MATERIAL_SCHEMA =
  "oa.execution-review-material.1" as const;

export type ExecutionReviewCompleteness = "FULL" | "PARTIAL";

/**
 * CR-02 — distinguish observed zero-change from missing observation.
 * OBSERVED: VerifiedChangeSet present (may be empty = verified zero change).
 * UNAVAILABLE / NOT_PERFORMED: VerifiedChangeSet ABSENT — never invent empty FACTS.
 * NOT_APPLICABLE: observation intentionally not required for this Attempt.
 */
export type ExecutionReviewVerificationStatus =
  | "OBSERVED"
  | "UNAVAILABLE"
  | "NOT_PERFORMED"
  | "NOT_APPLICABLE";

export type ExecutionReviewRetentionState =
  | "HOT"
  | "ARCHIVABLE"
  | "PRUNABLE"
  | "PRUNED";

export type ExecutionReviewItemKind =
  | "file"
  | "diff"
  | "validation"
  | "test_output"
  | "log"
  | "artifact"
  | "git_result"
  | "external_result"
  | "other";

export type ExecutionReviewItem = {
  readonly itemId: string;
  readonly kind: ExecutionReviewItemKind;
  /** Logical repository path when applicable — never `.sfia-exec` as métier. */
  readonly logicalPath?: string;
  readonly label: string;
  readonly contentRef?: string;
  readonly digest?: string;
  readonly summary?: string;
};

export type ExecutionReviewMaterialManifest = {
  readonly schemaVersion: typeof OA_EXECUTION_REVIEW_MATERIAL_SCHEMA;
  readonly reviewMaterialId: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly executorClaims: {
    readonly cursorExecutionReportRef: string | null;
    readonly cursorReviewEndOfRef: string | null;
  };
  readonly verifiedEffects: {
    /** OBSERVED ⇒ verifiedChangeSetRef may be set (incl. empty set). Else ABSENT. */
    readonly verificationStatus: ExecutionReviewVerificationStatus;
    readonly verifiedChangeSetRef: string | null;
    readonly claimFactMismatch: boolean;
    readonly gitFacts: readonly string[];
    readonly validationFacts: readonly string[];
  };
  readonly reviewItems: readonly ExecutionReviewItem[];
  readonly blockers: readonly string[];
  readonly reservations: readonly string[];
  readonly completeness: ExecutionReviewCompleteness;
  readonly retentionState: ExecutionReviewRetentionState;
  readonly createdAt: string;
};

function safeAttemptSegment(attemptId: string): string {
  return attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
}

export function genericExecutionReviewMaterialRefsRelative(
  attemptId: string,
): {
  readonly root: string;
  readonly manifest: string;
  readonly cursorReport: string;
  readonly reviewEndOf: string;
  readonly verifiedChangeSet: string;
  readonly itemsDir: string;
} {
  const segment = safeAttemptSegment(attemptId);
  const root = `refs/attempts/${segment}/execution-review`;
  return {
    root,
    manifest: `${root}/manifest.json`,
    cursorReport: `${root}/cursor-execution-report.json`,
    reviewEndOf: `${root}/cursor-review-end-of.json`,
    verifiedChangeSet: `${root}/verified-changeset.json`,
    itemsDir: `${root}/items`,
  };
}

export function digestUtf8(content: string | Buffer): string {
  const buf = typeof content === "string" ? Buffer.from(content, "utf8") : content;
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

export function persistGenericExecutionReviewMaterial(input: {
  readonly refsRoot: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly cursorReport?: CursorExecutionReport | null;
  readonly reviewEndOf?: CursorReviewEndOf | null;
  readonly verifiedChangeSet?: VerifiedChangeSet | null;
  /** Required when VerifiedChangeSet may be absent — defaults UNAVAILABLE if unset + no VCS. */
  readonly verificationStatus?: ExecutionReviewVerificationStatus;
  readonly reviewItems?: readonly {
    readonly kind: ExecutionReviewItemKind;
    readonly logicalPath?: string;
    readonly label: string;
    readonly bytes?: Buffer;
    readonly text?: string;
    readonly summary?: string;
  }[];
  readonly blockers?: readonly string[];
  readonly reservations?: readonly string[];
  readonly completeness?: ExecutionReviewCompleteness;
  readonly retentionState?: ExecutionReviewRetentionState;
  readonly createdAt?: string;
}):
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      manifestAbsolutePath: string;
      /** Relative ref under refsRoot when OBSERVED; else null. */
      verifiedChangeSetRef: string | null;
      /** Digest of exact durable verified-changeset.json bytes (CP3-04). */
      durableVerifiedChangeSetDigest: string | null;
    }
  | { ok: false; code: string; message: string } {
  try {
    const rel = genericExecutionReviewMaterialRefsRelative(input.attemptId);
    const rootAbs = path.join(input.refsRoot, rel.root);
    fs.mkdirSync(rootAbs, { recursive: true });
    fs.mkdirSync(path.join(input.refsRoot, rel.itemsDir), { recursive: true });

    let cursorExecutionReportRef: string | null = null;
    if (input.cursorReport) {
      const abs = path.join(input.refsRoot, rel.cursorReport);
      fs.writeFileSync(abs, `${JSON.stringify(input.cursorReport)}\n`, "utf8");
      cursorExecutionReportRef = rel.cursorReport;
    }

    let cursorReviewEndOfRef: string | null = null;
    if (input.reviewEndOf) {
      const abs = path.join(input.refsRoot, rel.reviewEndOf);
      fs.writeFileSync(abs, `${JSON.stringify(input.reviewEndOf)}\n`, "utf8");
      cursorReviewEndOfRef = rel.reviewEndOf;
    }

    let verifiedChangeSetRef: string | null = null;
    let durableVerifiedChangeSetDigest: string | null = null;
    const gitFacts: string[] = [];
    const validationFacts: string[] = [];
    const claimFactMismatch =
      input.verifiedChangeSet?.claimFactMismatch === true;
    // CR-02: only persist VerifiedChangeSet when observation actually ran.
    const verificationStatus: ExecutionReviewVerificationStatus =
      input.verificationStatus ??
      (input.verifiedChangeSet ? "OBSERVED" : "UNAVAILABLE");
    if (verificationStatus === "OBSERVED" && input.verifiedChangeSet) {
      const abs = path.join(input.refsRoot, rel.verifiedChangeSet);
      // Strip absolute worktree paths from durable payload — logical facts only.
      const durable = {
        ...input.verifiedChangeSet,
        worktreePath: "<disposed-or-ephemeral>",
        all: input.verifiedChangeSet.all.map(({ contentAbsolutePath: _, ...e }) => e),
        created: input.verifiedChangeSet.created.map(
          ({ contentAbsolutePath: _, ...e }) => e,
        ),
        modified: input.verifiedChangeSet.modified.map(
          ({ contentAbsolutePath: _, ...e }) => e,
        ),
        deleted: input.verifiedChangeSet.deleted,
        renamed: input.verifiedChangeSet.renamed,
      };
      // CP3-04 — digest MUST be of the exact durable bytes persisted (not the
      // in-memory VerifiedChangeSet that still carries absolute paths).
      const durableBytes = `${JSON.stringify(durable)}\n`;
      fs.writeFileSync(abs, durableBytes, "utf8");
      durableVerifiedChangeSetDigest = digestUtf8(durableBytes);
      verifiedChangeSetRef = rel.verifiedChangeSet;
      if (claimFactMismatch) {
        gitFacts.push(
          `claim_fact_mismatch unclaimed=${input.verifiedChangeSet.unclaimedObservedPaths.join(",")}`,
        );
      }
      if (input.verifiedChangeSet.all.length === 0) {
        gitFacts.push("verified_zero_change");
      }
    } else if (verificationStatus !== "OBSERVED") {
      gitFacts.push(`verification_status=${verificationStatus}`);
    }

    const reviewItems: ExecutionReviewItem[] = [];
    let ordinal = 0;
    for (const item of input.reviewItems ?? []) {
      ordinal += 1;
      const itemId = `ri:${String(ordinal).padStart(3, "0")}`;
      let contentRef: string | undefined;
      let digest: string | undefined;
      if (item.bytes || item.text) {
        const bytes =
          item.bytes ?? Buffer.from(item.text ?? "", "utf8");
        digest = digestUtf8(bytes);
        const fileName = `${itemId}.bin`;
        const itemRel = `${rel.itemsDir}/${fileName}`;
        fs.writeFileSync(path.join(input.refsRoot, itemRel), bytes);
        contentRef = itemRel;
      }
      reviewItems.push({
        itemId,
        kind: item.kind,
        logicalPath: item.logicalPath,
        label: item.label,
        contentRef,
        digest,
        summary: item.summary,
      });
    }

    for (const v of input.cursorReport?.validationEffects ?? []) {
      validationFacts.push(`${v.identity}:${v.result}`);
    }

    const completeness: ExecutionReviewCompleteness =
      input.completeness ??
      (verificationStatus !== "OBSERVED" ||
      claimFactMismatch ||
      !cursorExecutionReportRef
        ? "PARTIAL"
        : cursorExecutionReportRef &&
            (reviewItems.length > 0 ||
              verifiedChangeSetRef ||
              cursorReviewEndOfRef)
          ? "FULL"
          : "PARTIAL");

    const manifest: ExecutionReviewMaterialManifest = {
      schemaVersion: OA_EXECUTION_REVIEW_MATERIAL_SCHEMA,
      reviewMaterialId: `erm:${safeAttemptSegment(input.attemptId)}`,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      attemptId: input.attemptId,
      repositoryRef: input.repositoryRef,
      baseSha: input.baseSha,
      executorClaims: {
        cursorExecutionReportRef,
        cursorReviewEndOfRef,
      },
      verifiedEffects: {
        verificationStatus,
        verifiedChangeSetRef:
          verificationStatus === "OBSERVED" ? verifiedChangeSetRef : null,
        claimFactMismatch,
        gitFacts,
        validationFacts,
      },
      reviewItems,
      blockers: [...(input.blockers ?? input.cursorReport?.blockers ?? [])],
      reservations: [
        ...(input.reservations ?? input.cursorReport?.reservations ?? []),
      ],
      completeness,
      retentionState: input.retentionState ?? "HOT",
      createdAt: input.createdAt ?? new Date().toISOString(),
    };

    const manifestAbsolutePath = path.join(input.refsRoot, rel.manifest);
    fs.writeFileSync(
      manifestAbsolutePath,
      `${JSON.stringify(manifest, null, 2)}\n`,
      "utf8",
    );

    return {
      ok: true,
      manifest,
      manifestAbsolutePath,
      verifiedChangeSetRef,
      durableVerifiedChangeSetDigest,
    };
  } catch (err) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function loadGenericExecutionReviewMaterial(input: {
  readonly refsRoot: string;
  readonly attemptId: string;
}):
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      cursorReport: CursorExecutionReport | null;
      reviewEndOf: CursorReviewEndOf | null;
      verifiedChangeSet: VerifiedChangeSet | null;
    }
  | { ok: false; code: string; message: string } {
  const rel = genericExecutionReviewMaterialRefsRelative(input.attemptId);
  const manifestAbs = path.join(input.refsRoot, rel.manifest);
  if (!fs.existsSync(manifestAbs)) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_MISSING",
      message: "Generic Execution Review Material introuvable.",
    };
  }
  try {
    const manifest = JSON.parse(
      fs.readFileSync(manifestAbs, "utf8"),
    ) as ExecutionReviewMaterialManifest;
    let cursorReport: CursorExecutionReport | null = null;
    let reviewEndOf: CursorReviewEndOf | null = null;
    let verifiedChangeSet: VerifiedChangeSet | null = null;
    if (manifest.executorClaims.cursorExecutionReportRef) {
      const p = path.join(
        input.refsRoot,
        manifest.executorClaims.cursorExecutionReportRef,
      );
      if (fs.existsSync(p)) {
        cursorReport = JSON.parse(
          fs.readFileSync(p, "utf8"),
        ) as CursorExecutionReport;
      }
    }
    if (manifest.executorClaims.cursorReviewEndOfRef) {
      const p = path.join(
        input.refsRoot,
        manifest.executorClaims.cursorReviewEndOfRef,
      );
      if (fs.existsSync(p)) {
        reviewEndOf = JSON.parse(fs.readFileSync(p, "utf8")) as CursorReviewEndOf;
      }
    }
    if (
      manifest.verifiedEffects.verificationStatus === "OBSERVED" &&
      manifest.verifiedEffects.verifiedChangeSetRef
    ) {
      const p = path.join(
        input.refsRoot,
        manifest.verifiedEffects.verifiedChangeSetRef,
      );
      if (fs.existsSync(p)) {
        verifiedChangeSet = JSON.parse(
          fs.readFileSync(p, "utf8"),
        ) as VerifiedChangeSet;
      }
    }
    return { ok: true, manifest, cursorReport, reviewEndOf, verifiedChangeSet };
  } catch (err) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_LOAD_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function readExecutionReviewItemBytes(input: {
  readonly refsRoot: string;
  readonly contentRef: string;
  readonly byteCap?: number;
}):
  | {
      ok: true;
      text: string;
      completeness: ExecutionReviewCompleteness;
      digest: string;
    }
  | { ok: false; code: string; message: string } {
  // Fail-closed: only relative refs under execution-review/items/
  const norm = input.contentRef.replace(/\\/g, "/");
  if (
    norm.includes("..") ||
    path.isAbsolute(norm) ||
    !norm.includes("/execution-review/items/")
  ) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_REF_DENIED",
      message: "Review item ref must be Attempt-bound under execution-review/items.",
    };
  }
  const abs = path.join(input.refsRoot, norm);
  if (!fs.existsSync(abs)) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_MISSING",
      message: "Review item content introuvable.",
    };
  }
  const bytes = fs.readFileSync(abs);
  const cap = input.byteCap ?? 24_000;
  const truncated = bytes.byteLength > cap;
  const slice = truncated ? bytes.subarray(0, cap) : bytes;
  return {
    ok: true,
    text: slice.toString("utf8"),
    completeness: truncated ? "PARTIAL" : "FULL",
    digest: digestUtf8(bytes),
  };
}

/** Default refs root beside Product SQLite (same convention as docs_write / mission-result). */
export function defaultMissionResultRefsRoot(sqliteDbPath: string): string {
  return path.join(path.dirname(sqliteDbPath), "mission-result-refs");
}

===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts =====

/**
 * Shared bound read of Generic Execution Review items (CP2-07 / EP-15).
 *
 * Used by:
 * - Nora execution_review_read_item tool
 * - Pilot w2ReadExecutionReviewItemAction
 *
 * Client may only supply projectId + attemptId + itemId (opaque).
 * Server owns refsRoot + contentRef resolution — never trust client paths.
 */
import {
  loadGenericExecutionReviewMaterial,
  readExecutionReviewItemBytes,
  type ExecutionReviewCompleteness,
  type ExecutionReviewItem,
} from "./persistGenericExecutionReviewMaterial";
import { resolveProductEvidenceRefsRoot } from "./persistDocsWriteArtifactReviewMaterial";

export type BoundExecutionReviewItemReadResult =
  | {
      readonly ok: true;
      readonly item: ExecutionReviewItem;
      readonly content: string | null;
      readonly completeness: ExecutionReviewCompleteness;
      readonly digest: string | null;
      readonly reviewMaterialId: string;
      readonly claimFactMismatch: boolean;
      readonly verificationStatus: string;
      readonly reviewEndOfPresent: boolean;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

export function readBoundExecutionReviewItem(input: {
  readonly projectId: string;
  readonly attemptId: string;
  readonly itemId: string;
  /** Server-owned only — never from browser. */
  readonly refsRoot?: string;
}): BoundExecutionReviewItemReadResult {
  const projectId = input.projectId.trim();
  const attemptId = input.attemptId.trim();
  const itemId = input.itemId.trim();
  if (!projectId || !attemptId || !itemId) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_BINDING_REQUIRED",
      message: "projectId, attemptId and itemId required.",
    };
  }
  // Opaque itemId only — reject path-like client injection.
  if (
    itemId.includes("/") ||
    itemId.includes("\\") ||
    itemId.includes("..") ||
    itemId.includes("\0")
  ) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_ID_INVALID",
      message: "itemId must be an opaque ReviewItem id — paths rejected.",
    };
  }

  const refsRoot = input.refsRoot ?? resolveProductEvidenceRefsRoot();
  const loaded = loadGenericExecutionReviewMaterial({
    refsRoot,
    attemptId,
  });
  if (!loaded.ok) {
    return { ok: false, code: loaded.code, message: loaded.message };
  }
  if (loaded.manifest.projectId !== projectId) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_PROJECT_MISMATCH",
      message: "Review Material hors Project courant — fail-closed.",
    };
  }
  if (loaded.manifest.attemptId !== attemptId) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ATTEMPT_MISMATCH",
      message: "Review Material hors Attempt courant — fail-closed.",
    };
  }

  const item = loaded.manifest.reviewItems.find((i) => i.itemId === itemId);
  if (!item) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_NOT_FOUND",
      message: "ReviewItem inconnu pour cet Attempt.",
    };
  }

  if (!item.contentRef) {
    return {
      ok: true,
      item,
      content: null,
      completeness: "PARTIAL",
      digest: item.digest ?? null,
      reviewMaterialId: loaded.manifest.reviewMaterialId,
      claimFactMismatch: loaded.manifest.verifiedEffects.claimFactMismatch,
      verificationStatus:
        loaded.manifest.verifiedEffects.verificationStatus ?? "UNAVAILABLE",
      reviewEndOfPresent:
        loaded.manifest.executorClaims.cursorReviewEndOfRef != null,
    };
  }

  const bytes = readExecutionReviewItemBytes({
    refsRoot,
    contentRef: item.contentRef,
  });
  if (!bytes.ok) {
    return { ok: false, code: bytes.code, message: bytes.message };
  }

  // CP3-08 — fail-closed when durable bytes no longer match manifest digest.
  if (item.digest && bytes.digest !== item.digest) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_INTEGRITY_MISMATCH",
      message:
        "ReviewItem digest mismatch — bytes altérés; lecture refusée (Nora/Pilot).",
    };
  }

  return {
    ok: true,
    item,
    content: bytes.text,
    completeness: bytes.completeness,
    digest: bytes.digest,
    reviewMaterialId: loaded.manifest.reviewMaterialId,
    claimFactMismatch: loaded.manifest.verifiedEffects.claimFactMismatch,
    verificationStatus:
      loaded.manifest.verifiedEffects.verificationStatus ?? "UNAVAILABLE",
    reviewEndOfPresent:
      loaded.manifest.executorClaims.cursorReviewEndOfRef != null,
  };
}

===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts =====

/**
 * CR-03 / CR-10 — VerifiedChangeSet honesty for Product projection.
 * Cursor CLAIM ≠ Studio FACT. Attempt succeeded ≠ Product PASS.
 * Does NOT create a second Evidence engine — only downgrades dishonest PASS.
 */
import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";

export function applyVerifiedChangeSetProductHonesty(input: {
  readonly attemptId: string;
  readonly product: W3BProductTerminalProjection;
  readonly refsRoot?: string;
}): W3BProductTerminalProjection {
  const refsRoot = input.refsRoot ?? resolveProductEvidenceRefsRoot();
  const review = loadGenericExecutionReviewMaterial({
    refsRoot,
    attemptId: input.attemptId,
  });
  if (!review.ok) return input.product;

  const mismatch =
    review.manifest.verifiedEffects.claimFactMismatch === true ||
    review.verifiedChangeSet?.claimFactMismatch === true ||
    review.manifest.blockers.some((b) => b.includes("CLAIM_FACT_MISMATCH"));

  // Silent PASS forbidden when CLAIM/FACT mismatch is durable in Review Material.
  // UNAVAILABLE without mismatch is owned by ContractResult semantic when
  // evreq:studio-verified-changeset applies — do not blanket-downgrade historical
  // SUCCESS missions that never required Studio verification.
  if (
    input.product.outcome === "SUCCESS" &&
    input.product.claimAllowed &&
    mismatch
  ) {
    return {
      ...input.product,
      outcome: "UNCLAIMED",
      claimAllowed: false,
      businessHeadline: "Qualification produit incomplète",
      businessReason:
        "Studio VerifiedChangeSet diverges from Cursor CLAIM (CLAIM_FACT_MISMATCH) — Product PASS refused; Attempt technical success preserved.",
      evidenceSummary:
        (input.product.evidenceSummary ?? "") +
        " · CLAIM_FACT_MISMATCH visible in Review Material",
    };
  }
  return input.product;
}

===== END FILE: projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts =====

/**
 * Client-side continuation policy for Reconciler anti-stall (D-ER-08 / CP2-08).
 *
 * Owner remains reconcileGovernedExecution. UI only triggers continue.
 * No worker / queue / scheduler platform.
 *
 * CP2-08: NO total continue-budget abandonment. Mounted surface schedules
 * one-step continues with backoff until durable projection is stable.
 * Remount re-derives Product Truth and resumes automatically.
 * Reconciler keeps its own MAX_TRANSITIONS per call (sync loop guard).
 */

export type ContinuityStageLike =
  | "RUNNING"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "POST_EVIDENCE_PENDING"
  | "ATTEMPT_ACCEPTED"
  | string;

export type ContinuityProjectionLike = {
  readonly stage: ContinuityStageLike;
  readonly nextDeterministicAction?: string | null;
  readonly recoveryRequired?: boolean;
};

/** Legacy NoteLite-era UI bound (~8). Must be exceeded by nominal policy. */
export const LEGACY_UI_RUNNING_POLL_BUDGET = 8;

/**
 * @deprecated CP2-08 — no total session budget. Kept for test comparison only.
 * Correctness must NOT depend on exhausting this number.
 */
export const NOMINAL_RECONCILE_CONTINUE_BUDGET = Number.POSITIVE_INFINITY;

/** Backoff between scheduled continue intents (ms). */
export const RECONCILE_CONTINUE_BACKOFF_MS = 250;

/** Soft ceiling for backoff growth (ms) — still schedules forever while mounted. */
export const RECONCILE_CONTINUE_BACKOFF_MAX_MS = 2000;

export function shouldContinueReconcileNominally(
  projection: ContinuityProjectionLike | null | undefined,
): boolean {
  if (!projection) return false;
  if (projection.recoveryRequired) return false;
  if (
    projection.stage === "RUNNING" ||
    projection.stage === "ATTEMPT_ACCEPTED"
  ) {
    return true;
  }
  const next = projection.nextDeterministicAction ?? "NONE";
  return (
    next === "MATERIALIZE_PRODUCT" ||
    next === "RUN_POST_EVIDENCE" ||
    next === "AWAIT_EXTERNAL" ||
    projection.stage === "PRODUCT_MATERIALIZATION_PENDING" ||
    projection.stage === "POST_EVIDENCE_PENDING"
  );
}

/**
 * Remount / reload resume: durable projection still has deterministic work
 * → automatic continue intent (no « Recharger résultat produit » nominal click).
 */
export function shouldAutoResumeReconcileOnRemount(
  projection: ContinuityProjectionLike | null | undefined,
): boolean {
  return shouldContinueReconcileNominally(projection);
}

/**
 * Next backoff delay for scheduled continue (capped).
 * Not a correctness-bearing total budget.
 */
export function nextReconcileContinueDelayMs(attemptIndex: number): number {
  const raw =
    RECONCILE_CONTINUE_BACKOFF_MS * Math.min(8, Math.max(1, attemptIndex));
  return Math.min(raw, RECONCILE_CONTINUE_BACKOFF_MAX_MS);
}

/**
 * @deprecated CP2-08 — always returns Infinity when continuation needed.
 * Prefer shouldContinueReconcileNominally + scheduled one-step continues.
 */
export function nominalContinueIterationsRemaining(
  _alreadyUsed: number,
  projection: ContinuityProjectionLike | null | undefined,
  _budget: number = NOMINAL_RECONCILE_CONTINUE_BUDGET,
): number {
  if (!shouldContinueReconcileNominally(projection)) return 0;
  return Number.POSITIVE_INFINITY;
}

===== END FILE: projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts =====

/**
 * Bounded READ-ONLY Execution Review tools for Nora Deep Review (D-ER-09 / CP2-05).
 *
 * Project-bound + Attempt-bound + ref-bound.
 * No arbitrary filesystem paths, no mutation, no Evidence creation, no HD.
 * Prefer KEEP shared Agents runtime + ADAPT/COMPLETE these tools (R22).
 *
 * CP2-07 — read_item delegates to shared readBoundExecutionReviewItem
 * (same primitive as Pilot server action).
 */
import { tool } from "@openai/agents";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { readBoundExecutionReviewItem } from "@/features/project-assistant/f3/readBoundExecutionReviewItem";

export type ExecutionReviewToolContext = {
  readonly projectId: string;
  readonly attemptId: string;
  readonly refsRoot?: string;
  readonly budget?: NoraTurnBudget;
};

function deny(code: string, message: string): string {
  return JSON.stringify({ ok: false, code, message });
}

export function createExecutionReviewAgentsTools(
  ctx: ExecutionReviewToolContext,
) {
  const refsRoot = ctx.refsRoot ?? resolveProductEvidenceRefsRoot();
  const projectId = ctx.projectId.trim();
  const attemptId = ctx.attemptId.trim();

  const getManifest = tool({
    name: "execution_review_get_manifest",
    description:
      "Load the compact Generic Execution Review Material manifest for the CURRENT Project Attempt only. " +
      "Returns executorClaims (report + Review End Of refs — CLAIMS), verifiedEffects summary, reviewItems list, completeness. " +
      "READ-ONLY. Never invent FULL when completeness is PARTIAL. " +
      "When claimFactMismatch, report unclaimedObservedPaths (Studio FACT exclusive to Review Material).",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {},
    } as never,
    strict: false,
    execute: async () => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      if (!projectId || !attemptId) {
        return deny(
          "EXECUTION_REVIEW_BINDING_REQUIRED",
          "projectId and attemptId required.",
        );
      }
      const loaded = loadGenericExecutionReviewMaterial({
        refsRoot,
        attemptId,
      });
      if (!loaded.ok) {
        return deny(loaded.code, loaded.message);
      }
      if (loaded.manifest.projectId !== projectId) {
        return deny(
          "EXECUTION_REVIEW_PROJECT_MISMATCH",
          "Review Material hors Project courant — fail-closed.",
        );
      }
      if (loaded.manifest.attemptId !== attemptId) {
        return deny(
          "EXECUTION_REVIEW_ATTEMPT_MISMATCH",
          "Review Material hors Attempt courant — fail-closed.",
        );
      }
      return JSON.stringify({
        ok: true,
        completeness: loaded.manifest.completeness,
        retentionState: loaded.manifest.retentionState,
        executorClaims: {
          cursorReportPresent: Boolean(loaded.cursorReport),
          reviewEndOfPresent: Boolean(loaded.reviewEndOf),
          disclosure: "CLAIM_NOT_EVIDENCE",
        },
        verifiedEffects: {
          present: Boolean(loaded.verifiedChangeSet),
          verificationStatus:
            loaded.manifest.verifiedEffects.verificationStatus ??
            (loaded.verifiedChangeSet ? "OBSERVED" : "UNAVAILABLE"),
          claimFactMismatch:
            loaded.manifest.verifiedEffects.claimFactMismatch === true ||
            loaded.verifiedChangeSet?.claimFactMismatch === true,
          createdCount: loaded.verifiedChangeSet?.created.length ?? 0,
          modifiedCount: loaded.verifiedChangeSet?.modified.length ?? 0,
          deletedCount: loaded.verifiedChangeSet?.deleted.length ?? 0,
          unclaimedObservedPaths:
            loaded.verifiedChangeSet?.unclaimedObservedPaths ?? [],
        },
        reviewItems: loaded.manifest.reviewItems.map((i) => ({
          itemId: i.itemId,
          kind: i.kind,
          logicalPath: i.logicalPath ?? null,
          label: i.label,
          hasContent: Boolean(i.contentRef),
          digest: i.digest ?? null,
        })),
        blockers: loaded.manifest.blockers,
        reservations: loaded.manifest.reservations,
        note:
          "Cursor report / Review End Of remain CLAIMS. Prefer verifiedEffects when claimFactMismatch.",
      });
    },
  });

  const readItem = tool({
    name: "execution_review_read_item",
    description:
      "Read one ReviewItem by itemId from the CURRENT Attempt Review Material. " +
      "Ref-bound only — no arbitrary path. May return PARTIAL if truncated.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["itemId"],
      properties: {
        itemId: { type: "string", description: "Review item id from manifest." },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const itemId =
        args && typeof args === "object"
          ? String((args as { itemId?: unknown }).itemId ?? "").trim()
          : "";
      if (!itemId) {
        return deny("EXECUTION_REVIEW_ITEM_ID_REQUIRED", "itemId requis.");
      }
      const read = readBoundExecutionReviewItem({
        projectId,
        attemptId,
        itemId,
        refsRoot,
      });
      if (!read.ok) return deny(read.code, read.message);
      return JSON.stringify({
        ok: true,
        itemId: read.item.itemId,
        kind: read.item.kind,
        logicalPath: read.item.logicalPath ?? null,
        label: read.item.label,
        summary: read.item.summary ?? null,
        content: read.content,
        completeness: read.completeness,
        digest: read.digest,
      });
    },
  });

  return [getManifest, readItem] as const;
}

===== END FILE: projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts =====

/**
 * Studio VerifiedChangeSet — GENERIC OBSERVATION (D-ER-06 / CP2-02).
 *
 * Separates worktree observation (VERIFIED FACTS) from contract/policy evaluation.
 * Harvested from verifyWorkspaceFileEffects observation seams — WITHOUT docs_write
 * policy as the generic oracle.
 *
 * Cursor CLAIM ≠ Studio FACT. Unexpected / unclaimed effects are reported, not
 * silently promoted to Evidence.
 *
 * Modes:
 * - GIT_WORKTREE (default when statusDiffPort provided or observationMode=git):
 *   NodeLocalGitStatusDiffPort / LocalGitStatusDiffPort required.
 *   Git error ⇒ observation UNAVAILABLE — NEVER recursive full-repo scan.
 *   Optional expectedBaseSha: HEAD mismatch ⇒ integrity fail-closed.
 * - TEST_NON_GIT (explicit observationMode=test_non_git OR injected nameStatusText
 *   without requiring a Git port): deterministic injected status / scoped FS
 *   listing for Fake/non-Git fixtures ONLY — never confused with production Git.
 */
import { createHash } from "node:crypto";
import { existsSync, readdirSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import type { CursorExecutionReport } from "../domain/cursorExecutionReport";

export const OA_VERIFIED_CHANGESET_SCHEMA =
  "oa.studio-verified-changeset.1" as const;

export type VerifiedPathStatus =
  | "created"
  | "modified"
  | "deleted"
  | "renamed"
  | "unknown";

export type VerifiedPathEntry = {
  readonly path: string;
  readonly status: VerifiedPathStatus;
  readonly beforeDigest?: string;
  readonly afterDigest?: string;
  /** Absolute path under worktree when still hot — not a Product logical target. */
  readonly contentAbsolutePath?: string;
};

export type VerifiedChangeSet = {
  readonly schemaVersion: typeof OA_VERIFIED_CHANGESET_SCHEMA;
  readonly worktreePath: string;
  readonly observedAt: string;
  readonly created: readonly VerifiedPathEntry[];
  readonly modified: readonly VerifiedPathEntry[];
  readonly deleted: readonly VerifiedPathEntry[];
  readonly renamed: readonly VerifiedPathEntry[];
  readonly all: readonly VerifiedPathEntry[];
  /** Paths observed in worktree but absent from Cursor fileEffects claim. */
  readonly unclaimedObservedPaths: readonly string[];
  /** Paths claimed by Cursor but absent from worktree observation. */
  readonly claimedMissingPaths: readonly string[];
  readonly claimFactMismatch: boolean;
  /** Observed HEAD when Git mode succeeded. */
  readonly observedHeadSha?: string | null;
};

export type ObserveVerifiedChangeSetMode = "git" | "test_non_git";

export type ObserveVerifiedChangeSetResult =
  | {
      readonly ok: true;
      readonly changeSet: VerifiedChangeSet;
      readonly verificationStatus: "OBSERVED";
    }
  | {
      readonly ok: false;
      readonly code:
        | "GIT_OBSERVER_REQUIRED"
        | "GIT_OBSERVATION_FAILED"
        | "GIT_HEAD_MISMATCH"
        | "WORKTREE_MISSING";
      readonly message: string;
      readonly verificationStatus: "UNAVAILABLE";
    };

function normalizeRel(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function parseNameStatus(porcelainOrNameStatus: string): {
  path: string;
  status: string;
  renameFrom?: string;
}[] {
  const out: { path: string; status: string; renameFrom?: string }[] = [];
  for (const line of porcelainOrNameStatus.split("\n")) {
    const t = line.trimEnd();
    if (!t) continue;
    if (t.includes("\t")) {
      const parts = t.split("\t");
      const st = (parts[0] ?? "?").trim();
      if (parts.length >= 3 && /^R/i.test(st)) {
        out.push({
          path: normalizeRel(parts[2] ?? ""),
          status: st,
          renameFrom: normalizeRel(parts[1] ?? ""),
        });
        continue;
      }
      if (parts[1]) out.push({ path: normalizeRel(parts[1]), status: st });
      continue;
    }
    if (t.length >= 3) {
      const st = t.slice(0, 2).trim();
      const p = t.slice(3).trim();
      if (p) out.push({ path: normalizeRel(p), status: st || "?" });
    }
  }
  return out;
}

function mapStatus(st: string): VerifiedPathStatus {
  if (/^A|\?|^\?\?/i.test(st) || st.includes("A")) return "created";
  if (/^D/i.test(st) || st.includes("D")) return "deleted";
  if (/^R/i.test(st)) return "renamed";
  if (/^M|^\sM|^M\s|^MM/i.test(st) || st.includes("M")) return "modified";
  return "unknown";
}

async function digestIfExists(
  worktreePath: string,
  rel: string,
): Promise<string | undefined> {
  const abs = path.resolve(worktreePath, ...rel.split("/"));
  const root = path.resolve(worktreePath);
  if (abs !== root && !abs.startsWith(root + path.sep)) return undefined;
  if (!existsSync(abs)) return undefined;
  const buf = await readFile(abs);
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

/**
 * TEST/NON-GIT only — lists files under worktree for Fake fixtures.
 * NEVER used as silent fallback for Git worktree mode.
 */
function listWorktreeRelFilesForTestNonGit(worktreePath: string): string[] {
  const out: string[] = [];
  const root = path.resolve(worktreePath);
  const walk = (dir: string) => {
    let entries: string[];
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const name of entries) {
      if (name === ".git" || name === "node_modules" || name === ".sfia-exec") {
        continue;
      }
      const abs = path.join(dir, name);
      let st;
      try {
        st = statSync(abs);
      } catch {
        continue;
      }
      if (st.isDirectory()) walk(abs);
      else if (st.isFile()) {
        out.push(normalizeRel(path.relative(root, abs)));
      }
    }
  };
  walk(root);
  return out.filter(Boolean);
}

async function buildChangeSet(input: {
  readonly worktreePath: string;
  readonly changed: readonly { path: string; status: string }[];
  readonly report?: CursorExecutionReport | null;
  readonly observedAt?: string;
  readonly computeDigests?: boolean;
  readonly observedHeadSha?: string | null;
}): Promise<VerifiedChangeSet> {
  const created: VerifiedPathEntry[] = [];
  const modified: VerifiedPathEntry[] = [];
  const deleted: VerifiedPathEntry[] = [];
  const renamed: VerifiedPathEntry[] = [];
  const all: VerifiedPathEntry[] = [];

  for (const c of input.changed) {
    if (!c.path) continue;
    const status = mapStatus(c.status);
    const afterDigest =
      input.computeDigests !== false && status !== "deleted"
        ? await digestIfExists(input.worktreePath, c.path)
        : undefined;
    const entry: VerifiedPathEntry = {
      path: c.path,
      status,
      afterDigest,
      contentAbsolutePath:
        status === "deleted"
          ? undefined
          : path.resolve(input.worktreePath, ...c.path.split("/")),
    };
    all.push(entry);
    if (status === "created") created.push(entry);
    else if (status === "modified") modified.push(entry);
    else if (status === "deleted") deleted.push(entry);
    else if (status === "renamed") renamed.push(entry);
    else modified.push(entry);
  }

  const observedPaths = new Set(all.map((e) => e.path));
  const claimed = new Set(
    [
      ...(input.report?.fileEffects?.created ?? []),
      ...(input.report?.fileEffects?.modified ?? []),
      ...(input.report?.fileEffects?.deleted ?? []),
    ].map(normalizeRel),
  );

  const unclaimedObservedPaths =
    claimed.size > 0
      ? [...observedPaths].filter((p) => !claimed.has(p))
      : [];
  const claimedMissingPaths =
    claimed.size > 0
      ? [...claimed].filter((p) => p && !observedPaths.has(p))
      : [];

  return {
    schemaVersion: OA_VERIFIED_CHANGESET_SCHEMA,
    worktreePath: input.worktreePath,
    observedAt: input.observedAt ?? new Date().toISOString(),
    created,
    modified,
    deleted,
    renamed,
    all,
    unclaimedObservedPaths,
    claimedMissingPaths,
    claimFactMismatch:
      unclaimedObservedPaths.length > 0 || claimedMissingPaths.length > 0,
    observedHeadSha: input.observedHeadSha ?? null,
  };
}

/**
 * Observe worktree with explicit mode separation (CP2-02).
 *
 * Prefer this over the legacy `observeVerifiedChangeSet` when callers need
 * UNAVAILABLE vs OBSERVED discrimination.
 */
export async function observeVerifiedChangeSetStrict(input: {
  readonly worktreePath: string;
  readonly report?: CursorExecutionReport | null;
  readonly statusDiffPort?: LocalGitStatusDiffPort;
  readonly nameStatusText?: string;
  readonly observedAt?: string;
  readonly computeDigests?: boolean;
  /**
   * git (default when statusDiffPort present) — Git observer required.
   * test_non_git — explicit Fake/non-Git fixture mode only.
   */
  readonly observationMode?: ObserveVerifiedChangeSetMode;
  /** When set in git mode, HEAD must match (EC/report baseSha). */
  readonly expectedBaseSha?: string | null;
}): Promise<ObserveVerifiedChangeSetResult> {
  const worktreePath = input.worktreePath.trim();
  if (!worktreePath || !existsSync(worktreePath)) {
    return {
      ok: false,
      code: "WORKTREE_MISSING",
      message: "Worktree path absent — verification UNAVAILABLE.",
      verificationStatus: "UNAVAILABLE",
    };
  }

  const mode: ObserveVerifiedChangeSetMode =
    input.observationMode ??
    (input.statusDiffPort
      ? "git"
      : input.nameStatusText != null
        ? "test_non_git"
        : "git");

  if (mode === "git") {
    if (!input.statusDiffPort) {
      return {
        ok: false,
        code: "GIT_OBSERVER_REQUIRED",
        message:
          "Git worktree mode requires LocalGitStatusDiffPort — no recursive full-repo fallback.",
        verificationStatus: "UNAVAILABLE",
      };
    }
    let statusPorcelain = "";
    let headSha: string | null = null;
    try {
      const diff = await input.statusDiffPort.statusDiff({
        repoPath: worktreePath,
      });
      statusPorcelain = diff.statusPorcelain ?? "";
      headSha =
        typeof diff.headSha === "string" && diff.headSha.trim()
          ? diff.headSha.trim().toLowerCase()
          : null;
    } catch (err) {
      return {
        ok: false,
        code: "GIT_OBSERVATION_FAILED",
        message:
          err instanceof Error
            ? `Git statusDiff failed: ${err.message}`
            : "Git statusDiff failed",
        verificationStatus: "UNAVAILABLE",
      };
    }

    // Git mode requires a resolved HEAD — null head after a "successful" port
    // call is observation failure, not verified zero-change.
    if (!headSha) {
      return {
        ok: false,
        code: "GIT_OBSERVATION_FAILED",
        message:
          "Git observation did not yield a HEAD SHA — verification UNAVAILABLE.",
        verificationStatus: "UNAVAILABLE",
      };
    }

    const expected = input.expectedBaseSha?.trim().toLowerCase() || null;
    if (expected && headSha && expected !== headSha) {
      return {
        ok: false,
        code: "GIT_HEAD_MISMATCH",
        message: `Worktree HEAD ${headSha} ≠ expected baseSha ${expected} — FACTS integrity refused.`,
        verificationStatus: "UNAVAILABLE",
      };
    }

    // Empty porcelain = verified zero change (OBSERVED), NOT a trigger to scan
    // the whole repository as created.
    const changed = parseNameStatus(statusPorcelain);
    const changeSet = await buildChangeSet({
      worktreePath,
      changed,
      report: input.report,
      observedAt: input.observedAt,
      computeDigests: input.computeDigests,
      observedHeadSha: headSha,
    });
    return {
      ok: true,
      changeSet,
      verificationStatus: "OBSERVED",
    };
  }

  // TEST_NON_GIT — injected status or scoped listing only.
  let changed = parseNameStatus(input.nameStatusText ?? "");
  if (changed.length === 0 && existsSync(worktreePath)) {
    changed = listWorktreeRelFilesForTestNonGit(worktreePath).map((p) => ({
      path: p,
      status: "??",
    }));
  }
  const changeSet = await buildChangeSet({
    worktreePath,
    changed,
    report: input.report,
    observedAt: input.observedAt,
    computeDigests: input.computeDigests,
    observedHeadSha: null,
  });
  return { ok: true, changeSet, verificationStatus: "OBSERVED" };
}

/**
 * Observe the worktree independently of Cursor claims and of docs_write policy.
 *
 * @deprecated Prefer observeVerifiedChangeSetStrict for mode-aware UNAVAILABLE.
 * Legacy callers that pass statusDiffPort get Git mode (no full-repo fallback).
 * Legacy callers that pass only nameStatusText get test_non_git.
 * Legacy callers with neither get UNAVAILABLE via throwing... actually we keep
 * returning VerifiedChangeSet for back-compat but Git-without-port fails empty
 * only when test_non_git is inferred from nameStatusText.
 */
export async function observeVerifiedChangeSet(input: {
  readonly worktreePath: string;
  readonly report?: CursorExecutionReport | null;
  readonly statusDiffPort?: LocalGitStatusDiffPort;
  readonly nameStatusText?: string;
  readonly observedAt?: string;
  readonly computeDigests?: boolean;
  readonly observationMode?: ObserveVerifiedChangeSetMode;
  readonly expectedBaseSha?: string | null;
}): Promise<VerifiedChangeSet> {
  const strict = await observeVerifiedChangeSetStrict(input);
  if (strict.ok) return strict.changeSet;
  // Legacy signature cannot express UNAVAILABLE — return empty set with
  // claimFactMismatch false and zero entries. Callers that need honesty MUST
  // use observeVerifiedChangeSetStrict. finalizeGenericExecutionReview does.
  return {
    schemaVersion: OA_VERIFIED_CHANGESET_SCHEMA,
    worktreePath: input.worktreePath,
    observedAt: input.observedAt ?? new Date().toISOString(),
    created: [],
    modified: [],
    deleted: [],
    renamed: [],
    all: [],
    unclaimedObservedPaths: [],
    claimedMissingPaths: [],
    claimFactMismatch: false,
    observedHeadSha: null,
  };
}

===== END FILE: projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts =====

/**
 * Cursor Review End Of — EXECUTOR CLAIM (D-ER-05).
 *
 * Produced by Cursor at end of execution, alongside CursorExecutionReport.
 * Native = Studio binding / storage / consumption — Studio is NOT the producer.
 * NEVER Evidence, Verified Facts, ClaimEvaluation, or Nora Analysis.
 *
 * Packaging (nested in report transport vs sidecar file) is an implementation
 * detail; this type is the semantic contract.
 */

export const OA_CURSOR_REVIEW_END_OF_SCHEMA =
  "oa.cursor-review-end-of.1" as const;

export type CursorReviewEndOfVerdict =
  | "succeeded"
  | "failed"
  | "stopped"
  | "timeout"
  | "partial";

export type CursorReviewEndOf = {
  readonly schemaVersion: typeof OA_CURSOR_REVIEW_END_OF_SCHEMA;
  /** Distinct claim identity — not Evidence. */
  readonly reviewEndOfId: string;
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly timestamp: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  /** Cursor's claimed HEAD after work when known — CLAIM only. */
  readonly headSha?: string;
  readonly verdict: CursorReviewEndOfVerdict;
  readonly objective: string;
  readonly scopeTreated: string;
  readonly workPerformed: readonly string[];
  readonly filesCreated: readonly string[];
  readonly filesModified: readonly string[];
  readonly filesDeleted: readonly string[];
  readonly validations: readonly string[];
  readonly fullValidation?: string | null;
  readonly gitProof?: string | null;
  readonly deviations: readonly string[];
  readonly blockers: readonly string[];
  readonly reservations: readonly string[];
  readonly stopConditionsMet: readonly string[];
  readonly claims: readonly string[];
  readonly pointsRequiringReview: readonly string[];
};

export function mintCursorReviewEndOfId(input: {
  readonly attemptId: string;
  readonly executionContractId: string;
}): string {
  const safeAttempt = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(-24);
  const safeContract = input.executionContractId
    .replace(/[^a-zA-Z0-9:_-]/g, "")
    .slice(-24);
  return `reo:cursor:${safeContract}:${safeAttempt}`;
}

export function isCursorReviewEndOf(value: unknown): value is CursorReviewEndOf {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_CURSOR_REVIEW_END_OF_SCHEMA &&
    typeof v.reviewEndOfId === "string" &&
    (v.reviewEndOfId as string).trim().length > 0 &&
    typeof v.attemptId === "string" &&
    typeof v.executionContractId === "string" &&
    typeof v.timestamp === "string" &&
    typeof v.repositoryRef === "string" &&
    typeof v.baseSha === "string" &&
    typeof v.verdict === "string" &&
    typeof v.objective === "string" &&
    typeof v.scopeTreated === "string" &&
    Array.isArray(v.workPerformed) &&
    Array.isArray(v.filesCreated) &&
    Array.isArray(v.filesModified) &&
    Array.isArray(v.filesDeleted) &&
    Array.isArray(v.validations) &&
    Array.isArray(v.deviations) &&
    Array.isArray(v.blockers) &&
    Array.isArray(v.reservations) &&
    Array.isArray(v.stopConditionsMet) &&
    Array.isArray(v.claims) &&
    Array.isArray(v.pointsRequiringReview)
  );
}

export function parseCursorReviewEndOf(
  raw: unknown,
):
  | { ok: true; reviewEndOf: CursorReviewEndOf }
  | { ok: false; reason: string } {
  if (!isCursorReviewEndOf(raw)) {
    return { ok: false, reason: "cursor_review_end_of_invalid" };
  }
  return { ok: true, reviewEndOf: raw };
}

/**
 * CP3-05 — fail-closed REO ↔ Attempt / EC / repo / base binding.
 * Analogous to bindCursorExecutionReportToAttempt. REO remains CLAIM.
 */
export function bindCursorReviewEndOfToAttempt(input: {
  readonly reviewEndOf: CursorReviewEndOf;
  readonly expectedAttemptId: string;
  readonly expectedExecutionContractId: string;
  readonly expectedRepositoryRef?: string | null;
  readonly expectedBaseSha?: string | null;
}):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const { reviewEndOf: reo } = input;
  if (reo.attemptId !== input.expectedAttemptId) {
    return {
      ok: false,
      code: "REO_ATTEMPT_MISMATCH",
      message: "reviewEndOf.attemptId ≠ Attempt courant.",
    };
  }
  if (reo.executionContractId !== input.expectedExecutionContractId) {
    return {
      ok: false,
      code: "REO_CONTRACT_MISMATCH",
      message: "reviewEndOf.executionContractId ≠ ExecutionContract courant.",
    };
  }
  if (
    input.expectedRepositoryRef != null &&
    input.expectedRepositoryRef.trim() !== "" &&
    reo.repositoryRef !== input.expectedRepositoryRef
  ) {
    return {
      ok: false,
      code: "REO_REPOSITORY_MISMATCH",
      message: "reviewEndOf.repositoryRef ≠ trusted repository identity.",
    };
  }
  if (
    input.expectedBaseSha != null &&
    input.expectedBaseSha.trim() !== "" &&
    reo.baseSha.toLowerCase() !== input.expectedBaseSha.trim().toLowerCase()
  ) {
    return {
      ok: false,
      code: "REO_BASE_SHA_MISMATCH",
      message: "reviewEndOf.baseSha ≠ trusted baseSha.",
    };
  }
  return { ok: true };
}

===== END FILE: projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/sandboxContract.ts =====

/**
 * Stable Product-facing re-export of the OA sandbox / Studio write-protection
 * policy primitives. Single SoT remains
 * `lib/oa/execution-run/domain/sandboxContract.ts`.
 *
 * Project-assistant imports this path (not `@/lib/oa/execution-run`) so the
 * F1/F2/F3 import-boundary gate stays closed while CP4-02 Option C still
 * composes the same sandbox policy layer.
 */
export {
  classifyStudioProductProtectedPath,
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
  evaluateStudioProductWritePath,
  normalizeCanonicalPath,
  pathMatchesAllowlistPrefix,
  SANDBOX_DEFAULT_PROTECTED_PATHS,
  STUDIO_GOVERNANCE_PROTECTED_PATHS,
  STUDIO_PRODUCT_PROTECTED_PATHS,
} from "./execution-run/domain/sandboxContract";
export type {
  CanonicalPathResult,
  SandboxPathDecision,
} from "./execution-run/domain/sandboxContract";

===== END FILE: projects/sfia-studio/app/lib/oa/sandboxContract.ts =====


### 30. Debt / exits
| Debt | Class | Exit |
|---|---|---|
| `durableLocalWriteSeal` domain seam on decideTrajectory | TRANSITIONAL (domain/tests only) | Retire when GOVERNED trajectory Product carrier retired/superseded; never browser/client; never MAIN E2E |
| docs_write dual-write Review Material adapters | TRANSITIONAL bridge | Exit when historical callers = 0 |
| NoteLite REAL replay | PAUSED | Distinct Morris GO |
| Retention GC / Git promotion | NOT IMPLEMENTED | Distinct scope |

### 31. Reservations
- ZERO REAL / READY FOR REAL **NO**
- runtime v3 **NON ADOPTED**
- LOCAL CANDIDATE / NOT INTEGRATED ON MAIN
- Project-scoped protectedPaths architecture **not** opened
- REAL Cursor / OpenAI **not** claimed

### 32. Claims
- CP4-01 WIRED: Proposal sealedExecutionBasis Product carrier for pursue local-write
- CP4-02 OPTION C IMPLEMENTED in sandbox policy layer
- MAIN front-door has **zero** `durableLocalWriteSeal:` injection
- DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE
- HumanDecision ≠ ExecutionAuthority (protected Proposal fail-closed)
- Confirmation N2 ≠ protected boundary expansion
- Full Vitest 5063 passed / 0 failed
- Review Pack FULL · handoff publish-in-cycle required

### 33. Anti-claims
- NOT READY FOR REAL
- NOT INTEGRATED ON MAIN
- NOT runtime v3 ADOPTED
- NOT a second policy engine
- NOT blanket `projects/sfia-studio/**` deny
- NOT Product `docs_write` / `generic_write` taxonomy on generic EC
- NOT browser/client execution authority
- NOT Correction Pass 05
- NOT project commit/push/PR

### 34. Morris decisions remaining
**NONE** for CP4 scope (MD-CP4-01 + MD-CP4-02 consumed). Next Morris gate = post-Critical-Review GO commit/push/PR (distinct).

### 35. Review Handoff
Mode: **publish-in-cycle** · L3 bounded · branch `sfia/review-handoff` · file `sfia-review-handoff/latest-chatgpt-review.md`
Commit expected: `docs(review-handoff): publish generic execution review result correction pass 04 resume`
Pre-push remote known: `2daf0dc3284d4188c2893eb429dcf429e598834f` (recalculated at publish).

### 36. Project Git effects
| Effect | Value |
|---|---|
| project commit | **NO** |
| project push | **NO** |
| PR | **NO** |
| merge | **NO** |
| branch delete | **NO** |

### 37. Final verdict
**READY FOR CHATGPT CRITICAL REVIEW — GENERIC EXECUTION REVIEW RESULT CONVERGENCE CORRECTION PASS 04**

Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **ZERO REAL**

---

## A–AD Cursor report mirror

**A. VERDICT:** READY FOR CHATGPT CRITICAL REVIEW — GENERIC EXECUTION REVIEW RESULT CONVERGENCE CORRECTION PASS 04
**B. PROOF CEILING:** DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE · ZERO REAL
**C. TIMESTAMP:** see §1
**D. LOCAL GIT TRUTH:** HEAD=`{head}` · origin/main=`{main}` · branch=`{branch}` · 0/0 · dirty candidate preserved · no project commit
**E. ENTRY HANDOFFS:** CP3 `47e7e593…` · CP4 STOP `2daf0dc3…`
**F. MORRIS CONSUMED:** MD-CP4-01 · MD-CP4-02 Option C
**G. CYCLE:** 8 Delivery · SAME MACRO · CP4 RESUMED
**H. CP4-01:** Proposal → sealedExecutionBasis → pursue → DecisionBasis → generic local-write · no seal injection
**I. CP4-02:** sandbox floor ∪ STUDIO_GOVERNANCE_PROTECTED_PATHS · no second engine · allow app / deny framing+Doctrine+Roadmap+D-ER+C1+method/prompts/.github
**J. FRONT-DOOR E2E:** PASS (Proposal path)
**K. EC/Effects/Confirmation:** generic quartet · Confirmation preserved · N2 no bypass
**L. CLAIM/FACT/EVIDENCE:** CP3 spine reproven
**M. NORA:** W3-C actual review tool use preserved
**N. PILOT RESULT:** bound item integrity preserved
**O. CONTINUITY:** same Attempt · launchCount=1 · remount resume
**P. FAKE/REAL:** Fake Cursor (+ Fake model) · ZERO REAL
**Q. TARGETED:** 79 passed / 0 failed
**R. FULL:** 5063 passed / 137 skipped / 0 failed · tsc/lint/build/conformance OK
**S. LIVING REF/ROADMAP:** CURRENT tip Pass 04 RESUMED · LOCAL CANDIDATE
**T. FILES:** see §27–29
**U. DEBT:** durableLocalWriteSeal transitional · docs_write bridge · NoteLite PAUSED
**V. RESERVATIONS:** ZERO REAL · v3 NON ADOPTED · not on main
**W. MORRIS REMAINING:** NONE (CP4)
**X. REVIEW PACK:** FULL (this file)
**Y. REVIEW HANDOFF:** publish after this write — fill SHA/blob post-push
**Z. PROJECT GIT:** all NO
**AA. CLAIMS:** see §32
**AB. ANTI-CLAIMS:** see §33
**AC. NEXT GATE:** ChatGPT Critical Review → if positive → Morris GO COMMIT/PUSH/PR (distinct)
**AD. UNIQUE VERDICT:** READY FOR CHATGPT CRITICAL REVIEW — GENERIC EXECUTION REVIEW RESULT CONVERGENCE CORRECTION PASS 04

---

Avant de répondre à Morris, ChatGPT doit consulter le Review Handoff distant
canonique produit par cette reprise du Correction Pass 04.

ChatGPT doit vérifier :

- same macro / same CP4 ;
- entry STOP handoff 2daf0dc3284d4188c2893eb429dcf429e598834f ;
- MD-CP4-01 consumed ;
- MD-CP4-02 OPTION C consumed ;
- Proposal PresentedOptionSet.sealedExecutionBasis réellement utilisé par le
  Product front-door ;
- absence de durableLocalWriteSeal injection dans le MAIN E2E oracle ;
- browser/client fail-closed ;
- HumanDecision / DecisionBasis provenance ;
- generic quartet ;
- sandbox protected floor ;
- exact Studio governance protection set ;
- ordinary app path allowed ;
- framing / Build Doctrine / Roadmap / architecture / C1 denied ;
- aucun blanket projects/sfia-studio/** deny ;
- aucun second policy engine ;
- CP3 Claim/Fact/Evidence spine ;
- W3-C Nora actual review tool calls ;
- Result Surface / Pilot item integrity ;
- same Attempt / launchCount=1 / continuity ;
- targeted tests ;
- full Vitest ;
- typecheck/lint/build ;
- governance / Living Ref conformance ;
- ZERO REAL ;
- Living Reference 09 CURRENT ;
- Roadmap LOCAL CANDIDATE ;
- debt/reservations ;
- project commit/push/PR = NO ;
- handoff remote SHA/blob ;
- final proof ceiling.

Absent / incohérent / synthesis-only :

REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING

Une preuve Git plus récente peut superseder le handoff.
