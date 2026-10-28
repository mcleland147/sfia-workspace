# 08 — Test, Proof & Conformance Map

**As-implemented @ HEAD (see manifest lastReviewedCommit)**

## Suite topology

- Unit/domain + application-path: Vitest under `app/__tests__/**`
- UI: Vitest + Testing Library for pre-m6 surfaces
- E2E: Playwright `app/e2e/**` (often harness/boundary routes)
- Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Overlay — PR #618 proof map (CURRENT ON MAIN — MERGED + post-merge CI — 2026-10-26)

| Suite / scope | Result | Epistemic |
|---|---|---|
| Post-merge CI `40272048259` on merge `fec4e65d` | Detect / Build / **Required Gate SUCCESS** | **CI FACT CURRENT ON MAIN** · event=`push` |
| Pre-merge CI `40258385791` on `a75d0ed5` | Detect / Build / Required Gate SUCCESS | **HISTORICAL** candidate CI · pull_request |
| Baseline CI Vitest (`40207375690`) | 301 FAIL / 65 files | **HISTORICAL CI FAILURE** (superseded) |
| Corrective CI on `ff653b58` (`40215089725`) | 160 FAIL / 44 suites | **HISTORICAL CI FAILURE** (superseded) |
| `gcecMutatingCursorConfinementEnv.d0.test.ts` | PASS | **DET** confinement · on main via #618 |
| `gcecCursorFullCapabilityParity.d0.test.ts` | PASS (docs_write parity retired) | **DET** |
| `nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts` | PASS (docs_write overlay retired; git/RO/generalist kept) | **DET** |
| `productWorkspaceArtifactRouting*.d0.test.ts` + natural materialization | PASS | **DET** O-01 without Binding |
| `gitTargetIdentityRemoteFidelity.d0.test.ts` | PASS | **DET** CORR-02 |
| Deterministic proof ceiling | DET / CI SUCCESS | **≠** REAL · **≠** H4 · **≠** G-ACTIVATION |

## Overlay — AKG-M5 L2-D2 proof map (CURRENT ON MAIN — PR #614; DET — 2026-10-24)

| Suite file | What it proves | Class |
|---|---|---|
| `l2d2LocalOaExclusiveFreeze.test.ts` | Exclusive ON: open/create/methodMode/confirm refuse ; no D1 file ; OFF preserved ; CORR-02 `ok:false` | DET |
| `l2d2InjectedConnectionWriterGuards.test.ts` | Pre-opened injected DB cannot mutate via repo/audit APIs under exclusive | DET |
| `l2d2ConfirmationForbiddenUi.test.tsx` | Panel does not call `onDone` on `ok:false` FORBIDDEN | DET (jsdom) |
| `l2d2D4LegacyNavigation.test.ts` | Generic→`/studio` ; deep link→`notFound` ; OFF no-op ; no proj→prj map | DET |
| `l2d2O01ProductUiIntegrated.test.tsx` | OA create + LPS objective durable → Product list/workspace UI → reopen ; D1 probe blocked | DET (jsdom + real SqliteProductStore) |
| `l2d1D5CreateAuditAtomicity.test.ts` | D5 non-regression | DET (CURRENT ON MAIN capability) |
| `m1ProductSqliteDurability.test.ts` | Process/reopen durability non-regression | DET |

**Batch cited:** CORR-02 / G-GIT pre-commit — **31 PASS / 7 files**. Post-merge CI [#40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) **SUCCESS** on merge `1a0ccd84…`. SQLite = `os.tmpdir()` only for DET. **LIVE Studio / Application Support / R-CUT / D4 HTTP: NOT PROVEN.** Q15 global: **PARTIAL**.

## Overlay — AKG-M5 L2-D2 G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 (IMPLEMENTED — DET — 2026-10-25)

| Suite file | What it proves | Class |
|---|---|---|
| `l2d2S1ProductSqliteSnapshot.test.ts` | `VACUUM INTO` Project+LPS restore ; `closed_copy` → `CLOSED_COPY_UNAVAILABLE` ; RO integrity without migration ; corrupt/missing fail ; dest overwrite refuse ; Memory B VACUUM | DET · **CR-S1-01** |
| `l2d2S2RawDatabaseSyncExclusiveGate.test.ts` | CR-S2-01 execution gates + **CR-S2-02** allowlist: `setAuthorizer`/`createTagStore`/`deserialize`/session/changeset refused ; iterate refuse-always ; pre-ON captures inert ; RO row-count oracle ; raw `new DatabaseSync` residual documented | DET · **CR-S2-01/02** |
| `l2d2S3D4HttpReadinessHarness.test.ts` | Marker OFF/ON ; generic→`/studio` ; deep link notFound ; no mapper ; OPS1 OUT | DET · **≠** HTTP LIVE |
| `l2d2S4RcutDeterministicRehearsal.test.ts` | Integrated rehearsal ; exclusive **stays ON** ; final D1 oracle = disposable `readOnly` (not marker OFF) ; oracle non-mutating ; Q12 OPEN | DET · **≠** R-CUT LIVE |

**Integrated DET batch (pre-commit revalidation):** S1–S4 + freeze + injected + D4 + O-01 + D5 + M1 — **52 PASS / 10 files** (includes CR-S2-02 suite growth). **Anti-claims:** DET ≠ LIVE · H4 **NOT QUALIFIED** · G-ACTIVATION / G-REAL **NOT GRANTED** · exclusive **DEFAULT OFF**.

## Overlay — CORR-01 restored generic proofs (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

docs_write suites retired with the Product specialization are not restored. These rows are the generic mission / wording proofs re-ported on the generalist contract. Pre-merge NOT ON MAIN = **HISTORICAL**. **≠** REAL.

| Suite file | What it proves | Class |
|---|---|---|
| `acceptanceCriterionAmbiguity.generic.d0.test.ts` | NONE ≠ AMBIGUOUS; ambiguous structured matches and unique `manual_review` stay NOT_PROVEN (no legacy PASS fall-through) | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
| `missionResultContractResultSemantic.generic.d0.test.ts` | Generalist mission Result Semantic dispatch and Evidence binding (Claim ≠ Fact; technical success without Evidence stays NOT_PROVEN) | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
| `postExecutionProductContinuity.generic.d0.test.ts` | FAIL / STOP / UNCLAIMED trajectory wording only | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
| `contractResultCriteria.generic.d0.test.ts` | Project-specific EO without a criterion → NOT_PROVEN; `mission_diagnostic` bound to that EO → PASS; `manual_review` → NOT_PROVEN; criterion bound to a different EO does not leak PASS | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |

## Overlay — CORR-02 Git target fidelity (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

Identity↔remote↔checkout and the tightened FS-anchor allowlist. Docs_write Product suites are **not** restored. Pre-merge NOT ON MAIN = **HISTORICAL**. **≠** REAL.

| Suite file | What it proves | Class |
|---|---|---|
| `gitTargetIdentityRemoteFidelity.d0.test.ts` | T1–T2 coherent HTTPS/SSH seal (synthesized remote only when absent and identity canonical); T3–T4 owner/repo or non-GitHub host → `repository_remote_identity_mismatch` / seal `null`; T5–T8 checkout `.git` or one-hop worktree gitfile accepted only when `origin` matches, else `managed_repo_identity_mismatch`; absent checkout → `managed_repo_absent`; T9 protected path fail-closed | **DETERMINISTIC VERIFIED** · **≠** REAL |
| `gcecCont01ContinuationResolver.d0.test.ts` T11 | Irrelevant Attempt Evidence (wrong source: `execution_attempt:mission_result`, `execution_attempt:docs_write_fake`, prose `execution attempt … (succeeded)`, or right source on the wrong Attempt) → no FS supersession; continuation stays required and not ok | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
| `gcecCont01ContinuationResolver.d0.test.ts` T12 | Two matching historical artifact Evidence rows (exact or dotted twin) → no supersession / no auto PASS | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
| `gcecCont01ContinuationResolver.d0.test.ts` historical allowlist | `execution_attempt:docs_write` and `execution_attempt:docs_write.v2` still supersede when lineage is otherwise exact — historical reading only | **DETERMINISTIC AT TESTED SCOPE** · **≠** Product admission of docs_write |

## Flow → tests (selected)

| Flow | Deterministic tests | Notes |
|---|---|---|
| O-01 / D5 CreateProject audit (AKG-M5 L2-D1 CURRENT ON MAIN PR #612 + CORR-01) | `l2d1D5CreateAuditAtomicity.test.ts` (Q5.1–Q5.7) + M1 durability/restart suites | **DETERMINISTIC AT TESTED SCOPE** — success audit inside Product UnitOfWork; Studio composition Sqlite journal default; **CORR-01:** Q5.3 observes `DatabaseSync.isTransaction` during success append; Q5.4 covers audit-failure→rollback→clean retry→single create; PR #612 [post-merge CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) SUCCESS; at L2-D1 merge, integrated O-01 « comprendre » Product→UI was KNOWN GAP (addressed as **LOCAL CANDIDATE** under L2-D2 row below) · **≠** REAL |
| O-01 / L2-D2 local OA exclusive + D4 + CORR-02 (CURRENT ON MAIN — PR #614; **DEFAULT OFF / NOT ACTIVATED**) | `l2d2LocalOaExclusiveFreeze.test.ts` · `l2d2InjectedConnectionWriterGuards.test.ts` · `l2d2ConfirmationForbiddenUi.test.tsx` · `l2d2D4LegacyNavigation.test.ts` · `l2d2O01ProductUiIntegrated.test.tsx` (+ D5 + M1) | **DETERMINISTIC AT TESTED SCOPE** — **31 PASS / 7** · post-merge CI SUCCESS · O-01 LPS **objective** → UI · confirmation FORBIDDEN → `ok:false` · injected writers · D4 redirect/notFound · **≠** Studio live · **≠** cutover · Q15 **PARTIAL** |
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

- Scenario: natural materialization signal **without** a `docs_write`-compatible effect under an active cycle with REQUIRE_ARTIFACT.
- **Epistemic split (post-merge 2026-10-26):** **CURRENT ON MAIN after #618:** docs_write Product admission is **RETIRED**, so that specialized effect is not a Product admission path. Oracle wording that assumed admission on `7db8afd7` is **HISTORICAL**.
- **Does not prove** that a new CycleInstance was created — the same case asserts `countCycles === 1` (resolution alone never invents a cycle).
- Mode name `NEW_CYCLE_FORMALIZATION` here is a resolution **routing** outcome (D-ER-17: not a dead-end; Generic PREPARE may remain eligible on project/active-cycle context) — **≠** Artifact governed continuation, **≠** CREATE_CYCLE proof.
- Ceiling: DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). NOT E2E REAL. NOT READY FOR REAL.

### `corrProof07.artifactMaterialization.d0.test.ts`

Candidate assertions distinguish:

1. **Generic PREPARE eligible** on same active-cycle / project context (no dead-end force-unbind).
2. **Artifact governed materialization not authorized** for natural signals that are non-documentary under Generic PREPARE. **CURRENT after #618:** docs_write is not a Product admission effect; pre-merge « on main docs_write still admitted » oracle = **HISTORICAL**.
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


## Overlay — AKG-M5 L3-S2 Option B / S8 Project-first (CURRENT ON MAIN — PR #623 MERGED — 2026-10-27)

> **Epistemic class:** **CURRENT ON MAIN** via [PR #623](https://github.com/mcleland147/sfia-workspace/pull/623) **MERGED** `2026-10-27T15:02:16Z` · merge **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** · parents **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** + **`73f0166c6a71c301a7b2a9c2471beb30ad068221`** · [post-merge CI #40526990871](https://github.com/mcleland147/sfia-workspace/actions/runs/40526990871) **COMPLETED / SUCCESS** (Detect · Typecheck · Lint · Build · Vitest · Modeled Governance · Secret Pattern Scan · Trailing Whitespace · **SFIA Studio Required Gate PASS**) · event=`push` · branch=`main` · HEAD=merge. Integrated Product commits: `0577ca5c…` (feat) · `90bbf479…` (pre-merge R24 LOCAL docs+manifest) · `f7c9ba78…` (**CORR-CI-623-01** Tool-First first-prompt) · `73f0166c…` (**CORR-CI-623-02** multi-path unclaimed redaction). Pre-merge CI [run #40519630827](https://github.com/mcleland147/sfia-workspace/actions/runs/40519630827) SUCCESS on `73f0166c…`. Prior overlay wording **LOCAL CANDIDATE / dirty Product / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN** = **HISTORICAL AS TIP** (true at 2026-10-27 pre-merge authoring). Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE**. REAL / G-REAL / OA-exclusive activation / runtime v3 **NOT** claimed. **L3 GLOBAL OPEN**. EP-S2-05 **NOT PROVEN**. EP-S2-08 **PARTIAL**. ≠ Product PASS invented · ≠ L3 GLOBAL CLOSED.

### Proof index — Option B / S8 (CURRENT ON MAIN DET)

| Suite / oracle | Result | Proof level |
|---|---|---|
| `akgM5L3S2.optionB.lotsAC.d0.test.ts` | Lots A/B/C + CORR-S2 / R-S2 coverage — integrated on main | DET |
| `akgM5L3S2.s8.projectFirst.integrated.d0.test.ts` | S8 Project-first integrated oracles (nominal · O2 OBSERVED · O8 REJECTED · O10 late Evidence · ownership · ABSENT≠REJECTED) | DET |
| `genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts` | W3-C Tool-First / CP2-10 + CP2-10-MULTI · CORR-CI-623-01/02 | DET |
| `akgM5L3S1.genericExecutionIntegrated.d0.test.ts` | Non-reg L3-S1 | DET |
| `productMissionEvidenceChain.e2e.d0.test.ts` | Mission cycle-bound non-reg | DET |
| `gcecCont01ContinuationResolver.d0.test.ts` + W3-C suites | Continuation / FS-anchor / W3-C | DET |
| Pre-merge CI `#40519630827` @ `73f0166c…` | Detect / Build / **Required Gate SUCCESS** | CI FACT |
| Post-merge CI `#40526990871` @ `6c8b661c…` | Detect / Typecheck / Lint / Build / Vitest / Modeled Governance / Secret scan / Trailing whitespace / **Required Gate SUCCESS** | CI FACT CURRENT ON MAIN |

**Fake/Real:** Cursor = TestOnlyRealExecutionLaunchPort · FS OBSERVED = real temp worktree · O8 EvidenceReader = DET substitution bounded · REAL Cursor / OpenAI LIVE **NOT PROVEN**. Historical Pass 05 « 17 PASS / 105 PASS / dirty LOCAL » counts remain valid as **pre-merge handoff facts**, not re-asserted as Cycle 14 local re-runs.

### LOCAL CANDIDATE — EP-S2-08-PROOF-01 (2026-10-28) — B2/B5/B6 + R1 Option A/1 + R-INSPECT-01

| Suite / oracle | Result | Proof level |
|---|---|---|
| `akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` | B2 remount · B5 continue/recover · B6 Nora unavailable — **3/3 PASS** | **LOCAL DET** ≠ ON MAIN |
| `akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts` | R1 matrix + POS-01 write preserved → Delivery CKC — **22 PASS** | **LOCAL DET** · Option 1 |
| `akgM5L3S2.epS208.proof01.rInspect01.d0.test.ts` | INSPECT-P1…P5 / N1…N5 · unit HD coherence — **10 PASS**; **R-HD-01** integrated PATH A/B/C — HD-N1 `HD_MUTATION_DECLARATION_CONFLICT` via real ACCEPT_PREPARE OA · HD-P1 coherent decisionRefs · HD-N2 absent mutation ≠ HD write · SHE cross-check mutation preserved — **+4 PASS (14 total)** | **LOCAL DET** · R-INSPECT-01 + R-HD-01 |
| `epS208.proof01.rInspect01.inspectionSurface.ui.test.tsx` | ContractInspectionExamPanel renders declared write; absent ≠ invented write — **2 PASS** | **LOCAL jsdom** ≠ browser E2E |
| `epS208.proof01.piloteSurface.b5b6.ui.test.tsx` | B5/B6 TrajectorySurface jsdom Pilote — **3 PASS** | **LOCAL jsdom** ≠ browser E2E |
| `p6.mHd01.genericMissionHumanDecision.d0.test.ts` | M-HD-01 harness reused by R-HD-01 — non-regression **PASS** | **LOCAL DET** |

Ceiling: **DETERMINISTIC PRODUCT INTEGRATION AT TESTED SCOPE**. ≠ browser `/studio` remount · ≠ live Pilot HD · ≠ EP-S2-08 PASS · ≠ REAL · ≠ Final Critical Readiness exit.
