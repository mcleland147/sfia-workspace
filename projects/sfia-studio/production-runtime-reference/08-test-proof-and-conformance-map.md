# 08 — Test, Proof & Conformance Map

**As-implemented @ HEAD (see manifest lastReviewedCommit)**

## Suite topology

- Unit/domain + application-path: Vitest under `app/__tests__/**`
- UI: Vitest + Testing Library for pre-m6 surfaces
- E2E: Playwright `app/e2e/**` (often harness/boundary routes)
- Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Flow → tests (selected)

| Flow | Deterministic tests | Notes |
|---|---|---|
| O-01 / D5 CreateProject audit (AKG-M5 L2-D1 CURRENT ON MAIN PR #612 + CORR-01) | `l2d1D5CreateAuditAtomicity.test.ts` (Q5.1–Q5.7) + M1 durability/restart suites | **DETERMINISTIC AT TESTED SCOPE** — success audit inside Product UnitOfWork; Studio composition Sqlite journal default; **CORR-01:** Q5.3 observes `DatabaseSync.isTransaction` during success append; Q5.4 covers audit-failure→rollback→clean retry→single create; PR #612 [post-merge CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) SUCCESS; O-01 « comprendre » Product→UI integrated E2E = KNOWN GAP; **≠** L2-D2 · **≠** REAL |
| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
| F05 optional documentary → Generic PREPARE (PR #586) | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ G-D4, Product Continuity, HQA-F01) | DETERMINISTIC — `no_require_artifact` routes to Generic PREPARE; Artifact obligation path preserved; exact caps; non-authoritative path candidates; Fake cue `__P6_OPTIONAL_DOCUMENTARY_MD__` ≠ OpenAI LIVE |
| F04 Nora Generic PREPARE tool (D-ER-16) | `p6.der16.genericNoraToolInvocation.d0.test.ts` | DETERMINISTIC — solicit PREPARE only; structural fail-closed; no Attempt; PENDING_GIT_INTEGRATION |
| F08 Generic PREPARE / M-HD / Option1 | `p6.mHd01*`, `p6.mHd02*`, `p6.hqa.materialityBlock01*`, `p6.o1.continuityGd4EmptyRefs*` | DETERMINISTIC — historical disposition HD-bound PREPARE + NON_STRUCTURAL empty refs; SHE coexists |
| F08/F09/F10 SHE Single Human Execute (D-P6-SHE-01) | `p6.she.singleHumanExecute.d0.test.ts`, `p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts`, o1 T_SHE, productContinuityClosure M02 | DETERMINISTIC — inspectable STRUCTURAL PREPARE; Exécuter HD/Confirm/Auth; GAP-01..05 / I17; ZERO REAL |
| F08 Tool-First pathless NON_STRUCTURAL (A–J) | `p6.toolFirst.executionContractSimplification.d0.test.ts` | DETERMINISTIC — pathless PREPARE→inspect→authorize→Select/Start Fake; no HD/cycle/artifact invent |
| F08/F10 Tool-First R1/R2 safety | `p6.toolFirst.safetyClosureR1R2.d0.test.ts` | DETERMINISTIC — R1 positive claim; R2 Select+Start exact code on valid Attempt; TestOnly port ZERO REAL |
| F09 unified inspection | `p6.uic.unifiedInspectionContract*`, `p6.r03.inspection*` | DETERMINISTIC — explicit exam/attest; identity binding |
| F09 SHE / Tool-First Exécuter | `p5.s03.durableExecutionActionContinuity*`, `p5.s03.pilotExecutionPresentation*`, `p6.r02.actionAvailability*` | DETERMINISTIC — Inspect≠Execute; CTA execute after attest; SHE fold HD/Confirm |
| F10 project-scoped Cursor | `p6.projectScopedCursorSelection.d0.test.ts` | DETERMINISTIC Fake Select→Start→Result; null-cycle admitted only if OA allows; ZERO Cursor REAL |
| F15 GAP-03 effective git primary | `p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts` | DETERMINISTIC — successor + full typed Git SET → gitProofPresent; ≠ Cycle FINALIZED |

| F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
| F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
| F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
| F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
| F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
| F04 P6 REAL OBS Option B receipt conservation (CRITICAL CORRECTION) | `p6.realObs.optionB.receiptConservation.d0.test.ts` | DETERMINISTIC AT CORRECTED SEAM — process registry; Fake ≠ REAL; Runner id ≠ PROVIDER_CONFIRMED; capture fail ≠ provider_error; ZERO REAL |
| F04 P6 EXTERNAL Evidence Ledger capture | `p6.externalEvidenceLedger.d0.test.ts`; `p6.qaCollectionSeam.d0.test.ts`; `p6.receiptCompleteness.d0.test.ts` + `lib/p6-campaign-evidence/**` | DETERMINISTIC — complete receipt v2; read integrity + read-uniqueness (dup runId ≠ HEALTHY); write uniqueness; durable duplicate skip; MONO_WRITER; QA seam DET; ZERO REAL |
| F04 P6 O2 linked evidence operational wiring | `p6.o2OperationalWiring.d0.test.ts` + `lib/p6-campaign-evidence/**` (`linkedQaRunId`, `wireP6O2OperationalEvidence`, `resolveP6O2LinkedEvidencePair`, `isP6O2QaLinkTargetEligible`) | DETERMINISTIC — QA + 0..1 linked cognitive receipt; write/read O2 link integrity; CP01 portable archive fixtures; QA-target eligibility ≠ historical readability; REAL harness migration NOT DONE; ZERO REAL |
| F04 Documentary reliability RCD-01 (PR #578 INTEGRATED ON MAIN) | `p6.nora.min09.documentaryReliability.d0.test.ts` (R1–R7); P1/P2/Session regressions | Complete-line coverage; redaction progression; final envelope truth; envelope `lineExceedsCap`; fixture regex fidelity; **DETERMINISTIC ONLY** — not GDR REAL; merge `44006648` |
| F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
| F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
| F01 greenfield | greenfield continuity tests on main | #531 |
| F10–F11 attempt/evidence | productCycleE2eStabilization.frontDoor + PWR E2E | Fake adapter / Fake docs-write only |
| Architecture drift | productionRuntimeReference.conformance | living reference |

## Test-oracle semantic change — Artifact continuity suites (R4)

**Classification (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):**

| Layer | Label | Meaning |
|---|---|---|
| Test file edits | **NO_RUNTIME_SEMANTIC_IMPACT** | Product runtime paths under test are not altered by the test-file diff alone |
| Functional expectations | **TEST_ORACLE_SEMANTIC_CHANGE** | What the suite asserts as correct Product behavior did change |

Parent handoff `eae8dbe2` listed these under `NO_SEMANTIC_IMPACT` (tests). That label is retained for **runtime** impact of the test files; this section records the **oracle** change ChatGPT R4 requires before digest approval.

### `activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts`

| | Historical oracle | Candidate oracle |
|---|---|---|
| Mode | `ACTIVE_CYCLE_CONTINUATION_BLOCKED` | `NEW_CYCLE_FORMALIZATION` |
| Reason | `incompatible_execution_intent` | `no_compatible_artifact_effect` |

- Scenario: natural materialization signal **without** `docs_write`-compatible effect under an active cycle with REQUIRE_ARTIFACT.
- **Does not prove** that a new CycleInstance was created — the same case asserts `countCycles === 1` (resolution alone never invents a cycle).
- Mode name `NEW_CYCLE_FORMALIZATION` here is a resolution **routing** outcome (D-ER-17: not a dead-end; Generic PREPARE may remain eligible on project/active-cycle context) — **≠** Artifact governed continuation, **≠** CREATE_CYCLE proof.
- Ceiling: DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). NOT E2E REAL. NOT READY FOR REAL.

### `corrProof07.artifactMaterialization.d0.test.ts`

Candidate assertions distinguish:

1. **Generic PREPARE eligible** on same active-cycle / project context (no dead-end force-unbind).
2. **Artifact governed materialization not authorized** for the non-`docs_write` natural signal.
3. **No artificial new CycleInstance** (`countCycles` stable; `createCycle` not required by this path).
4. **No misleading Artifact materialization Proposal** bound as active-cycle governed continuation.

Do **not** conflate Generic PREPARE eligibility with Artifact continuation. DETERMINISTIC at tested scope only — oracle change ≠ proof E2E REAL.

## Oracle weaknesses (updated after PRODUCT-CYCLE-E2E-STABILIZATION-01)

| Weakness | Classification | Evidence |
|---|---|---|
| Seam tests green while natural Product journey regresses | **MITIGATED** at tested scope by front-door oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Tests bypass conversation front door (direct resolver/AP seed) | Still true for many unit/seam tests; front-door oracle now exists | direct `resolveActiveCycleGovernedContinuation` calls |
| Fake-only note+cadrage magic as sole success path | **MITIGATED** — provider-neutral Nora leaf cues; materialization Fake default assessment null | `fakeProvider.ts` |
| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | **MITIGATED** on materialization Fake path (default null); other fixtures may still set sufficient | fixtures |
| Historical E2E uses QA/boundary routes | CONFIRMED | `app/api/e2e/**` |
| Clarification accepted where product contract wants seamless continuation | **MITIGATED** for nominal pathless with semantic cues | continuity CORR-01 tightened |
| Product Prepare N2 vs Confirm MORRIS-only boundary | **MITIGATED** — confirm/validate accept N2 Product Pilot matching PREPARE | `validateResolvedM3ExecutionBoundary`, `confirmAndExecuteResolvedM3` |
| Docs-write Evidence without LPS outcome refs | **MITIGATED** — bounded docs-write appends LPS evidence/RB ids | `executeConfirmedBoundedDocsWriteContract` |

## Proof levels

- **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — Product UI server-action lineage at Fake scope (this macro)
- DETERMINISTIC PROVEN (seam/unit)
- REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
- Runtime v3 **NON ADOPTED**; Product global READY **not claimed**

## Nora autonomy P0/P1/P2 oracles (PR #577 INTEGRATED ON MAIN)

| Oracle | Level | Notes |
|---|---|---|
| Explicit `maxTurns` NaN/±Infinity fail-closed (with/without campaign); no Runner dispatch; no campaign consume | DETERMINISTIC seam | `mw6.pre-real.budget-hardening` NUM-CLAMP-01 / R-PRE-REAL-08A; uses `normalizeSafeNonNegativeInteger` |
| Absent `maxTurns` → adaptive 5/8/10; Product cognitive entry via `runNoraCognitiveTurn` | DETERMINISTIC Product cognitive entry | `p6.nora.p1.adaptiveBudget` + `p6.nora.p1p2.targetedVerification` CR-TV01-01 (not full UI→orch E2E) |
| RunState multi-segment continuation; Session items persist; next-turn `ModelRequest.input` contains prior Session history | DETERMINISTIC seam | `p6.nora.p1p2.*` / CR-TV01-02 — input proof, not scripted RECALL_OK alone |
| P0 `limitReached` → `incomplete`; STOP distinct; no illegitimate LR materialization; Chat-first incomplete surface | DETERMINISTIC Product/UI seam | `p6.nora.p0.*` |
| Campaign remaining clamps mission | DETERMINISTIC | documentary mission / budget-hardening |
| REAL documentary quality / P6 GLOBAL PASS | **NOT PROVEN / NOT CLAIMED** | ZERO REAL this chantier |

## Documentary reliability RCD-01 oracles (PR #578 INTEGRATED ON MAIN)

| Oracle | Level | Notes |
|---|---|---|
| R1 — returned range / partial-line never credited; `truncated` ≠ `documentHasMore` | DETERMINISTIC | adapter + coverage parse |
| R2 — soft maxTurns restitution discloses honest incomplete perimeter from tool crumbs | DETERMINISTIC Runner/ScriptedModel | Session text items |
| R4 — redaction does not block progression; no secret reintroduction in adapter/tool/Session/events | DETERMINISTIC | fiction fixtures matching `redaction.ts` |
| R5 — final model-visible envelope metadata matches complete lines actually delivered | DETERMINISTIC ToolRouter | ceiling 12000 |
| R6 — adapter-fit / envelope-unfit line → `lineExceedsCap` + monotone skip (no loop) | DETERMINISTIC | fail-closed RESULT_CAPPED when meta alone cannot fit |
| R7 — security fixtures regex-conformant; positive + negative redaction assertions | DETERMINISTIC | evidence fidelity |
| GDR REAL / Product READY / Runtime v3 | **NOT PROVEN / NOT CLAIMED** | ZERO REAL this lot |

## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01

| Proof | Level | Notes |
| --- | --- | --- |
| Front-door authorized local-write → Git FACTS mismatch → Evidence/CE → Nora tool → Pilot | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** | Correction Pass 02 · `genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts` |
| NodeLocalGitStatusDiffPort observes delta only / HEAD H0 / UNAVAILABLE fail-closed | DETERMINISTIC AT TESTED SCOPE | `cp2Seams` + frontDoor |
| Native Cursor REO present; missing REO stays missing (no synthetic) | DETERMINISTIC AT TESTED SCOPE | frontDoor + finalize |
| Verification Evidence in same RB → ContractResult ≠ PASS under mismatch | DETERMINISTIC AT TESTED SCOPE | frontDoor + missionResultContractResultSemantic |
| Nora Agents actual `execution_review_get_manifest` tool call | DETERMINISTIC AT TESTED SCOPE | frontDoor CP2-05 |
| Result Surface real data + Pilot itemId server read | DETERMINISTIC AT TESTED SCOPE | TrajectorySurface + `w2ReadExecutionReviewItemAction` |
| Mounted scheduled continue + remount auto-resume / same Attempt | DETERMINISTIC AT TESTED SCOPE | trajectorySurface + frontDoor (no total abandon counter) |
| 0-file OBSERVED ≠ verification UNAVAILABLE | DETERMINISTIC AT TESTED SCOPE | cp2Seams |
| Product Continuity shared knowledge non-regression | DETERMINISTIC AT TESTED SCOPE | existing continuity suites |
| REAL generic / NoteLite replay | **NOT PROVEN** | ZERO REAL this macro |

### GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 03
- Front-door Product oracle: decideTrajectory durableLocalWriteSeal (no Decision repository fabrication).
- Nominal Git HEAD binding; durable VerifiedChangeSet digest; REO binding; missing REO blocks ContractResult PASS.
- W3-C nominally enables execution_review_* tools; ReviewItem integrity checked.
- Proof ceiling claimed when EP/T green: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
