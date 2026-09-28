# PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — CRITICAL CORRECTION PASS 02
# ChatGPT Review Pack (FULL)
# FINAL LINEAGE CLOSURE

## 1. Timestamp / timezone
- Local: 2026-09-28 16:56:00 CEST (Europe/Paris)
- ISO: 2026-09-28T16:56:00+02:00

## 2. Macro / cycle / profile
- Macro: PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01
- Cycle: 8 — Delivery / implémentation
- Profile: CRITICAL
- Pass: CRITICAL CORRECTION PASS 02 — FINAL LINEAGE CLOSURE
- Typologie: EVOL
- Gate consumed: GO MORRIS — CRITICAL CORRECTION PASS 02 PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01
- Architecture: OPTION A — ADOPTED (unchanged)
- Max verdict authorized: READY FOR MORRIS GO — LOCAL PROJECT COMMIT

## 3. Git Truth
- Repo: `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01` → `mcleland147/sfia-workspace`
- Branch: `delivery/sfia-studio-product-continuity-shared-knowledge-01`
- HEAD (uncommitted candidate base): `5ed9cd24cad7110aee6f6c26dd34226e69e1531b`
- origin/main: `5ed9cd24cad7110aee6f6c26dd34226e69e1531b`
- Previous Review Handoff (entry): `c233ec1bd34c6717a130d21fb5a9a75d55dc6869` on `sfia/review-handoff`
  - file: `sfia-review-handoff/latest-chatgpt-review.md`
  - prior verdict: NOT READY FOR LOCAL PROJECT COMMIT — FINAL LINEAGE CORRECTION REQUIRED
- Project commit this pass: NONE
- Project push this pass: NONE
- Staged project files: NONE
- `.tmp-sfia-review` never staged

### Working tree (final, uncommitted candidate)
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/productContinuityLineage.pass02.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraSentinels.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection.ts
?? projects/sfia-studio/app/features/project-assistant/w2/reconcileGovernedExecution.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
```

## 4. Reason for Correction Pass 02
ChatGPT review of Pass 01 candidate (handoff `c233ec1b`) closed CR-01/02/03/05 sufficiently at tested scope, but CR-04 remained incomplete:

- Product Resolution correctly moved off prefix heuristics (`ev:docs-write:` / `ev:w3b:` / `bound[0]`).
- It resolved CE → RB → `contractResultBindings.evidenceRefs`.
- Validation of bindings was still PARTIAL (project/attempt/RB id/Evidence project-attempt checks).
- Canonical domain helper `contractResultBindingsMatchCurrentFacts` was NOT reused for full lineage (EC id/version/fingerprint/cycle/RB frozen version/ordered evidenceRefs vs Attempt-bound snapshot).
- Durable lineage integrity failures were not systematically projected to Continuity `RECOVERY_REQUIRED`.

Pass 02 closes ONLY that seam. CR-01/02/03/05 = KEEP.

## 5. KEEP (do not reopen)
| Item | Status |
|---|---|
| CR-01 Shared Nora cognitive seam `runNoraCognitiveCore` → `runNoraAgentsTurn` | KEEP |
| CR-02 ACCEPTED restart A→B same Attempt | KEEP |
| CR-03 RUNNING restart A→B same Attempt | KEEP |
| CR-05 Final stages (no TECHNICAL_TERMINAL / PRODUCT_QUALIFIED) | KEEP |
| Option A / OA Product Truth / SQLite / no new store | KEEP |

## 6. CR-04 BEFORE → AFTER

### BEFORE (Pass 01 residual gap)
- CE resolved via `resolveCurrentContractResultClaimEvaluation`.
- Evidence loaded from `contractResultBindings.evidenceRefs`.
- Local checks: projectId, attemptId, reviewBundleId, Evidence project/attempt.
- Missing: full canonical match via `contractResultBindingsMatchCurrentFacts`.
- Missing: RB frozenVersion vs bindings.reviewBundleVersion.
- Missing: EC version / semantic fingerprint / cycle vs Attempt-bound snapshot.
- Integrity failures not closed-set mapped to RECOVERY_REQUIRED.

### AFTER (Pass 02)
1. When CE status=`one`: require complete bindings → load RB → load Evidence refs in binding order → require Attempt.boundExecutionContract → call `contractResultBindingsMatchCurrentFacts` with:
   - bindings
   - Attempt + bound snapshot
   - ReviewBundle id + frozenVersion
   - evidenceIds = loaded.map(e => e.evidenceId) (binding order)
   - projectId = current Project
   - cycleInstanceId = bound snapshot cycle (not bindings self-echo)
2. false → `CONTRACT_RESULT_BINDINGS_MISMATCH` fail-closed.
3. true → lineage exploitable; primary Evidence = first canonical evidenceRef; full ordered set in `evidence.evidenceIds`.
4. Closed integrity codes → Continuity `RECOVERY_REQUIRED`; Reconciler STOP before any mutation.

## 7. Canonical validator
- Helper: `contractResultBindingsMatchCurrentFacts`
  path: `projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts`
- Why canonical: domain SoT for Contract Result bindings vs Attempt-bound snapshot (FC-11 / Option B). Already used by W3-B product terminal projection.
- No parallel local validator reimplemented.
- Verdict mapping remains `projectContractResultVerdict(status)` — never copy status into `contractResultVerdict`.

### Exact fields validated (via helper + load gates)
| Field | Against |
|---|---|
| bindings.projectId | Project courant |
| bindings.cycleInstanceId | Attempt.boundExecutionContract.semanticMaterial.cycleInstanceId |
| bindings.executionContractId | Attempt.executionContractId |
| bindings.executionContractVersion | Attempt.executionContractVersion |
| bindings.executionContractSemanticFingerprint | Attempt.boundExecutionContract.semanticFingerprint |
| bindings.executionAttemptId | Attempt.attemptId |
| bindings.reviewBundleId | ReviewBundle.reviewBundleId |
| bindings.reviewBundleVersion | ReviewBundle.frozenVersion |
| bindings.evidenceRefs (ordered) | loaded Evidence ids in binding order |
| Attempt.boundExecutionContract | required present; never latest EC |

### load-time fail-closed (before helper)
- CE ambiguous → `CLAIM_EVALUATION_AMBIGUOUS`
- Incomplete/absent bindings → `CONTRACT_RESULT_BINDINGS_MISSING`
- RB missing / not found / project mismatch
- Evidence refs empty / not found / project mismatch / attempt mismatch
- Multi-Evidence without CE → `EVIDENCE_LINEAGE_AMBIGUOUS`

## 8. Continuity integrity closed set
`CONTINUITY_LINEAGE_INTEGRITY_CODES` (exact membership; no startsWith/includes/regex):

```
CLAIM_EVALUATION_AMBIGUOUS
CONTRACT_RESULT_BINDINGS_MISSING
CONTRACT_RESULT_BINDINGS_MISMATCH
CONTRACT_RESULT_EVIDENCE_REFS_EMPTY
EVIDENCE_LINEAGE_AMBIGUOUS
EVIDENCE_NOT_FOUND
EVIDENCE_PROJECT_MISMATCH
REVIEW_BUNDLE_MISSING
REVIEW_BUNDLE_NOT_FOUND
REVIEW_BUNDLE_PROJECT_MISMATCH
ATTEMPT_CONTRACT_MISMATCH
CROSS_PROJECT_REF_REJECTED
```

Projection for integrity code:
- `ok: true`
- `stage: RECOVERY_REQUIRED`
- `recoveryRequired: true`
- `humanDecisionRequired: true`
- `nextDeterministicAction: NONE`
- `blockingCode: <exact code>`
- `context: null`

Query/request errors remain resolve errors (NOT recovery), e.g.:
- `PROJECT_ID_REQUIRED`
- `PROJECT_NOT_FOUND`
- `ATTEMPT_NOT_FOUND` (arbitrary external id)
- `EXECUTION_CONTRACT_NOT_FOUND`

## 9. Reconciler STOP
`reconcileGovernedExecution` checks `projection.recoveryRequired` immediately after derive, before observe/continue/execute mutation paths:

- `stoppedReason: "recovery_required"`
- `transitionsApplied: []`
- No materialize / Nora / new Evidence / new CE / new Attempt / auto-repair

## 10. Exploitable code excerpts

### resolveEvidenceLineage — canonical helper call
```ts
const bindingsOk = contractResultBindingsMatchCurrentFacts({
  bindings,
  attempt: { attemptId, executionContractId, executionContractVersion,
    executionContractSemanticFingerprint, boundExecutionContract },
  reviewBundle: { reviewBundleId, frozenVersion },
  evidenceIds: loaded.map((e) => e.evidenceId),
  projectId: input.projectId,
  cycleInstanceId: boundCycle,
});
if (!bindingsOk) {
  return { ok: false, code: "CONTRACT_RESULT_BINDINGS_MISMATCH", ... };
}
```

### Continuity integrity → RECOVERY_REQUIRED
```ts
if (isContinuityLineageIntegrityCode(resolved.code)) {
  return { ok: true, projection: { stage: "RECOVERY_REQUIRED",
    recoveryRequired: true, nextDeterministicAction: "NONE",
    blockingCode: resolved.code, context: null, ... } };
}
```

### Reconciler early STOP
```ts
if (derived.projection.recoveryRequired) {
  return { ok: true, intent, projection: derived.projection,
    transitionsApplied: [], stoppedReason: "recovery_required" };
}
```

## 11. Behavioral tests (CR-04B) — NOT grep-as-proof
File: `app/__tests__/project-assistant/productContinuityLineage.pass02.d0.test.ts`
Harness: `createInMemoryEvidenceReviewServices` + minimal OA stack.

| Spec | Test name | Expected |
|---|---|---|
| 9.1 | multi-Evidence follows bindings order, not repository order | OK; evidenceIds=[ev:A,ev:B]; primary=ev:A |
| 9.2 | EC id mismatch → BINDINGS_MISMATCH → RECOVERY_REQUIRED → Reconciler STOP | code + stage + stoppedReason recovery_required; transitions=[] |
| 9.3 | EC version mismatch | CONTRACT_RESULT_BINDINGS_MISMATCH |
| 9.4 | semantic fingerprint mismatch | CONTRACT_RESULT_BINDINGS_MISMATCH |
| 9.5 | cycle instance mismatch | CONTRACT_RESULT_BINDINGS_MISMATCH |
| 9.6 | ReviewBundle version mismatch (same id) | BINDINGS_MISMATCH + RECOVERY_REQUIRED |
| 9.7a | missing Evidence ref | EVIDENCE_NOT_FOUND + RECOVERY_REQUIRED |
| 9.7b | Evidence foreign Attempt | ATTEMPT_CONTRACT_MISMATCH |
| 9.7c | Evidence foreign Project | EVIDENCE_PROJECT_MISMATCH |
| 9.8 | ambiguous CE | CLAIM_EVALUATION_AMBIGUOUS + RECOVERY + Reconciler STOP |
| 9.9 | multi Evidence without CE | EVIDENCE_LINEAGE_AMBIGUOUS + RECOVERY |
| 9.10 | incomplete bindings | CONTRACT_RESULT_BINDINGS_MISSING + RECOVERY |
| 9.11 | verdict mapping | pass→PASS, fail→FAIL, not_proven/pending/…→NOT_PROVEN |
| — | query errors stay resolve errors | ATTEMPT_NOT_FOUND not integrity |
| — | closed integrity set no catch-all | prefix false |

Secondary source guard (non-proof): T-E2 now asserts `contractResultBindingsMatchCurrentFacts` present.

## 12. R1→R8 non-regression
Proven via `postExecutionHandoff.integrated.d0.test.ts` + continuity suites (semantics unchanged):

| R | Claim | Result |
|---|---|---|
| R1 | restart before Execute → no Attempt auto | KEEP green |
| R2 | ACCEPTED restart → same Attempt | KEEP green |
| R3 | RUNNING restart → same Attempt | KEEP green |
| R4 | terminal before W3-B → materialization reprise | KEEP green |
| R5 | Evidence/RB/CE before Nora → post-Evidence reprise | KEEP green |
| R6 | Recommendation durable → rehydrate/stable | KEEP green |
| R7 | cross-project / integrity fail-closed | KEEP + Pass02 integrity→RECOVERY |
| R8 | NOT_PROVEN never Product SUCCESS | KEEP green |

## 13. Full validation
| Gate | Result |
|---|---|
| Pass02 lineage unit | 15/15 passed |
| Targeted continuity / handoff / UI / importBoundaries | 46/46 passed (5 files) |
| Runtime Reference conformance | 5/5 passed |
| Full Vitest | **454 passed \| 17 skipped** files; **4998 passed \| 137 skipped** tests; **0 failed** |
| typecheck (`tsc --noEmit`) | PASS |
| lint (`next lint`) | PASS (0 warnings/errors) |
| build (`next build`) | PASS |
| Fake/Real | FakeDocsWrite + deterministic OA harness + FakeConversationProvider where inherited; **ZERO REAL** |

## 14. Files changed this macro (candidate)
### Pass 02 primary
- `w2/resolveProductExecutionContext.ts` — ADAPT canonical bindings validation + evidenceIds
- `w2/deriveGovernedExecutionContinuityProjection.ts` — ADAPT closed integrity → RECOVERY_REQUIRED
- `w2/reconcileGovernedExecution.ts` — ADAPT early STOP on recoveryRequired
- `__tests__/project-assistant/productContinuityLineage.pass02.d0.test.ts` — NEW behavioral proofs
- `__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts` — evidenceIds + T-E2 helper assert
- Runtime Reference 03 / 09 + manifest digests — descriptive update for Pass 02 lineage

### Still present from Pass 01 (KEEP; not reopened)
- Nora cognitive completion / Agents tools / TrajectorySurface / actions / orchestrateTurn / postEvidence sentinels / integrated handoff tests / UI tests / importBoundaries

## 15. Fake / Real qualification
- Applicable: YES
- Boundaries: FakeDocsWrite / deterministic OA harness / FakeConversationProvider
- REAL: ZERO REAL
- Entry level: DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE (+ lineage gap)
- Exit level:
  - DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE
  - CANONICAL CONTRACT RESULT LINEAGE PROVEN AT TESTED SCOPE
  - CONTINUITY RECOVERY FOR LINEAGE INTEGRITY PROVEN AT TESTED SCOPE
- Out of scope: REAL BOUNDARY PROVEN / END-TO-END REAL / READY FOR REAL / MINIBOARD REAL FIXED

## 16. Réserves
### Blocking
- NONE for READY FOR MORRIS GO — LOCAL PROJECT COMMIT

### Non-blocking
- Historical Product Truth rows (if any) that fail canonical bindings remain fail-closed / RECOVERY_REQUIRED — no auto-migration this pass (correct; would need distinct Morris GO if product migration desired).
- ZERO REAL still; REAL Cursor / provider gates remain Morris-distinct.
- Runtime v3 NOT ADOPTED.
- better-sqlite3 module resolution warning during Next build import trace is pre-existing / non-blocking (build green).

## 17. Dette / exit
- No new store / table / workflow engine / event bus / Nora engine.
- No Build Doctrine / Roadmap / C1–C3/C6 / doctrine v3 edits.
- Project commit/push/PR explicitly NOT done (max verdict = READY FOR MORRIS GO — LOCAL PROJECT COMMIT).

## 18. Decisions Morris required
1. Local project commit GO (authorized next step if ChatGPT confirms).
2. Later: REAL boundary GO (distinct).
3. Later: any historical CE bindings migration (only if product requires; currently fail-closed is intentional).

## 19. Claims (authorized)
- PRODUCT CONTINUITY / SHARED KNOWLEDGE LOCAL CANDIDATE CORRECTED
- SHARED NORA COGNITIVE SEAM PROVEN AT DETERMINISTIC TESTED SCOPE
- ACCEPTED RESTART CONTINUITY PROVEN AT DETERMINISTIC TESTED SCOPE
- RUNNING RESTART CONTINUITY PROVEN AT DETERMINISTIC TESTED SCOPE
- CANONICAL CONTRACT RESULT LINEAGE PROVEN AT TESTED SCOPE
- LINEAGE INTEGRITY → RECOVERY_REQUIRED PROVEN AT TESTED SCOPE
- DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE
- NO NEW STORE / NO PARALLEL ENGINE
- READY FOR MORRIS GO — LOCAL PROJECT COMMIT

### Claims forbidden (not asserted)
- REAL PROVEN / READY FOR REAL / FULL REAL PRODUCT LOOP PROVEN / MINIBOARD REAL FIXED / PRODUCT GLOBAL READY / RUNTIME V3 ADOPTED / UNIVERSAL RECOVERY PROVEN / NORA GLOBAL COMPLETION PROVEN

## 20. Review Handoff instruction for ChatGPT
Before answering Morris on Correction Pass 02, consult:
- branch: `sfia/review-handoff`
- file: `sfia-review-handoff/latest-chatgpt-review.md`

Verify at minimum:
- Cycle 8 / CRITICAL / Correction Pass 02
- project branch + HEAD/base `5ed9cd24…`
- previous handoff `c233ec1b`
- real use of `contractResultBindingsMatchCurrentFacts`
- Project/Cycle/EC/version/fingerprint/Attempt/RB version/Evidence refs
- multi-Evidence behavioral tests + mismatch suite
- Evidence ambiguity + CE ambiguity
- Continuity RECOVERY_REQUIRED + Reconciler STOP
- R1→R8 + full suite 0 failed + typecheck/lint/build + conformance
- ZERO REAL + files + reserves + verdict
- Review Handoff remote commit + remote verify

If modified content missing → REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
If remote not updated → REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED

## 21. Verdict
**READY FOR MORRIS GO — LOCAL PROJECT COMMIT**
