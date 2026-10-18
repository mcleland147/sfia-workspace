# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior by itself (Living Reference is descriptive)

## Overlay — P6-REAL-OBS-P0 Option B (local candidate — CRITICAL CORRECTION)

| Item | Status |
|---|---|
| Cognitive execution receipt projected on Product send DTO | AS-IMPLEMENTED locally — DETERMINISTIC |
| Process-local registry by server `logicalTurnId` | AS-IMPLEMENTED ephemeral — NOT Evidence SoT; NOT cross-restart |
| P6 §T Evidence Ledger JSONL | **ADOPTED for external P6 campaign QA only** (`lib/p6-campaign-evidence/**`) — Product `orchestrateTurn` still does **not** write ledger |
| Canonical ledger path | `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl` (existing campaign harness convention) |
| OBS-01 writer security | CLOSED AT DET — `validateLedgerRowForAppend` at every public append; secrets/forbidden keys refused |
| OBS-02 integrity status | CLOSED AT DET — `HEALTHY` / `DEGRADED` / `INVALID` / `UNREADABLE` / `MISSING`; `integrityPass` only when HEALTHY; no silent rewrite |
| OBS-03 idempotence / concurrency | CLOSED AT **MONO_WRITER** model — O_EXCL contention detection; no age-based lock reclaim; orphan recovery via explicit `forceRemoveOrphanP6EvidenceLedgerLock` only. Multi-process durability **NOT CLAIMED** |
| OBS-04 QA collection seam | DET PROVEN — `collectP6ProductTurnEvidence`; **O2 DET WIRING IMPLEMENTED** (`wireP6O2OperationalEvidence` + `linkedQaRunId`); historical REAL harness migration **NOT DONE** |
| O2 minimal link contract | DET — `linkedQaRunId` on cognitive rows; cardinality QA → 0..1 receipt; write+read integrity; historical unlinked v2 readable without O2 promotion |
| O2 QA target eligibility (CP01-02) | DET — `isP6O2QaLinkTargetEligible` distinct from historical readability; admin/diagnostic kinds (`ROOT_CAUSE_*`, `RUNTIME_REQUALIFICATION`) not linkable; historical absent-kind QA rows eligible with identity fields |
| O2-32 portability (CP01-01) | DET — archive isolation proven via temp fixtures; real archive SHA check optional via `SFIA_P6_HISTORICAL_LEDGER_PATH` (no hardcoded user paths) |
| Historical ledger disposition (D1) | ARCHIVE ONLY (qa WT) — active ledger for new runs is worktree-local canonical path; no sync/repair of archive line 75 |
| Receipt completeness (ledger schema v2) | CLOSED AT DET — full Product CognitiveExecutionReceipt projection (model/effort/tokens/adaptive/continuation/conservation); reopen field-by-field equality |
| Read integrity v2 | CLOSED AT DET — `classifyLedgerRowForRead` aligns reader with writer schema; incomplete v2 ⇒ `integrityPass=false` (DEGRADED); historical campaign rows not v2-promoted |
| RunId uniqueness (write) | CLOSED AT DET — all public writers reject duplicate runId under MONO_WRITER lock; duplicate skip requires durable content equivalence |
| RunId uniqueness (read) | CLOSED AT DET — `readP6EvidenceLedger` detects duplicate runIds among preserved rows; `duplicateRunIds` diagnostic; never HEALTHY / never silent single-truth selection |
| Provider observation honesty | Fake → `FAKE_DETERMINISTIC`; null → `NOT_OBSERVED`; Runner id → `RUNNER_RESPONSE_ID_OBSERVED`; **never** `PROVIDER_CONFIRMED` / REAL at Product or ledger capture |
| `realProofStatus` / ledger `realBoundaryClaim` | Product `NOT_PROVEN` · ledger `NOT_CLAIMED` |
| Capture failure vs Product status | External capture failure ≠ Product `provider_error` |
| Debt `P6-REAL-OBS-P0-RECEIPT-CONSERVATION` | DET external durable capture **STABILIZED**; REAL qualification **OPEN** (distinct Morris GO) |
| Historical T1 `ltu:ff0b592f…` REAL requalification | **NOT RETROACTIVE** |
| REAL boundary / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
| Runtime v3 | **NON ADOPTED** |

## Overlay — Nora autonomy PR #577 (INTEGRATED ON MAIN)

| Item | Status |
|---|---|
| P0 incomplete Status Honesty (Chat-first + panel) | AS-IMPLEMENTED on main @ `d8ceb8ad` — DETERMINISTIC |
| P1 Adaptive Runner Budget (5/8/10, ceiling 10) | AS-IMPLEMENTED — DETERMINISTIC |
| P2 Controlled Continuation (same-turn RunState) + Session-on-resume | AS-IMPLEMENTED — DETERMINISTIC |
| Explicit non-finite `maxTurns` fail-closed (CI Correction) | AS-IMPLEMENTED on main @ `d8ceb8ad` — DETERMINISTIC |
| **FPPC-RES-01** — prior user utterance not a Session `role:user` AgentInputItem under observed SDK prepare | OPEN residual / NON-BLOCKING |
| **P0-EFFECT-02** store-level incomplete effects | NOT PROVEN |
| Cross-restart RunState persistence | **DEFER** (architecture GO required) |
| Eval/explicit `maxTurns` > adaptive ceiling 10 | NON-BLOCKING (tests/eval only; not Product DTO) |
| Documentary quality REAL / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
| Runtime v3 | **NON ADOPTED** |
| Debt **DOC-PR577-POSTMERGE-SYNC** | DOCUMENTARY CORRECTION PREPARED locally — **integration PENDING** |

## Overlay — Documentary reliability RCD-01 / PR #578 (INTEGRATED ON MAIN)

| Item | Status |
|---|---|
| Complete-line Git coverage + honest `truncated`/`documentHasMore` | AS-IMPLEMENTED on main @ `44006648` — DETERMINISTIC |
| Secret redaction before coverage accounting | AS-IMPLEMENTED — DETERMINISTIC |
| Final model-visible envelope coverage truth (cap 12000) | AS-IMPLEMENTED — DETERMINISTIC |
| Envelope oversized-line skip (`lineExceedsCap`) | AS-IMPLEMENTED — explicit skip; **no mid-line offset protocol** |
| Soft maxTurns honest documentary disclosure | AS-IMPLEMENTED — DETERMINISTIC |
| FinOps ceilings (≤10 / 12000) | UNCHANGED |
| R1–R7 | CLOSED AT DETERMINISTIC TESTED SCOPE |
| Dedicated GDR engine / parallel architecture | **NONE** |
| GDR REAL T1 / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
| Debt **RCD-01-PRR-SEMANTIC-COHERENCE** (OBJ-TURN-ORCH / F04; SEMANTIC IMPACT=YES) | DOCUMENTARY CORRECTION PREPARED locally — **integration PENDING** (digest ≠ semantic closure until Git-integrated + Morris accept) |
- PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
- ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
- CHAT-FIRST-GOVERNED-DECISION-LOOP-01: DETERMINISTIC PRODUCT E2E proven at tested scope only — **NOT REAL PROVEN**, **NOT READY FOR REAL**, **NOT PRODUCT GLOBAL READY**
- POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01: DETERMINISTIC post-execution report/artifact→Nora handoff proven at tested scope only — **NOT REAL PROVEN**; SprintBoard REAL re-proof requires distinct Morris GO
- No CI workflow changes

## Current campaign findings (verified against repo where possible)

| Finding | Class | Notes |
|---|---|---|
| Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
| Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
| REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
| Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
| MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
| Local tests pre-satisfy challenge assessment | MITIGATED on materialization Fake path | default assessment null |
| E2E backbone can bypass natural conversation front door | MITIGATED at tested scope — Product server-action oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
| EC→Attempt→Evidence→Recovery single lineage needs re-proof | RE-PROVEN AT TESTED SCOPE (Fake) | front-door oracle |

## Uncertainties

- Dependency graph is representative, not exhaustive of every file.
- Failure-mode catalog is selected, not every string code in repo.
- Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
- REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).

## Overlay — P6 Generic Execution consolidation candidate (LIVING REFERENCE R1–R4)

**Status:** AS_IMPLEMENTED_IN_CANDIDATE on integration worktree `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c` · Product dirty transferred from source `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` · **PENDING_GIT_INTEGRATION** · **NOT INTEGRATED_ON_MAIN**.

| Item | Status |
|---|---|
| G-IB (importBoundaries allowlist +4 W2 type-only RuntimeOaStack) | **CLOSED** (historical gate) |
| G-DIGEST Living Reference digests | **PENDING CONTENT APPROVAL** — manifest **FROZEN**; digests **not** promoted this cycle |
| Living Reference volumes 02/03/04/06/07/08/09 | Semantic amendments R1–R4 applied locally — ChatGPT content review required before digest write |
| 77 Product candidates + allowlist | Preserved dirty; **no** Product commit/push/PR this cycle |
| Pending Generic PREPARE offer | Process-local — restart-unsafe (vol 06) |
| Generic Mission HumanDecision | Durable OA; restart ≠ CURRENT offer; applicability re-check required |
| Cursor REAL / OpenAI LIVE / HQA | **NOT PROVEN / NOT RETESTED** |
| P6 GLOBAL PASS / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
| DETERMINISTIC proof ceiling | Historical 328 targeted PASS + G-IB 5/5 — **not re-executed** this documentary cycle |

**Next (distinct GOs):** ChatGPT semantic content review → Morris digest approval → conformance → Product git decision → PR/CI/merge → HQA reprise. This overlay does **not** claim CURRENT ON MAIN.

## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (historical macro — retained)

- **Historical macro** on branch `delivery/sfia-studio-generic-execution-review-result-convergence-01` · Correction Pass **04 RESUMED AFTER MORRIS DECISION** · **CLOSED FOR CRITICAL REVIEW** (documentary tip retained; superseding Product consolidation is the P6 overlay above).
- **CP4-01 WIRED** — Product carrier = Proposal `PresentedOptionSet.sealedExecutionBasis` → pursue HumanDecision → DecisionBasis → generic local-write (MD-CP4-01 consumed). MAIN front-door oracle does **not** inject `durableLocalWriteSeal`.
- **CP4-02 OPTION C IMPLEMENTED** — Studio Product write protection = sandbox floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Build Doctrine / Roadmap / D-ER architecture / C1). No blanket `projects/sfia-studio/**` deny. No Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` as Product classifier.
- Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** (at time of that macro) · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
- Historical: Correction Pass 04 STOP (Morris decision required on CP4-02) superseded by MD-CP4-01/MD-CP4-02 resume — see prior tip / handoff `2daf0dc3…`.
- docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material) — exit when historical callers = 0.
- `durableLocalWriteSeal` domain seam: **TRANSITIONAL** (isolated domain/tests only) — exit when GOVERNED trajectory Product carrier is retired or superseded; never browser/client.
- NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
- Retention GC / Git promotion: **NOT IMPLEMENTED**.
- Next after that macro was ChatGPT Critical Review → Morris GO commit/push/PR (distinct). Product consolidation trajectory now tracked under the P6 overlay.

### Historical — Correction Pass 04 STOP (superseded)

Prior documentary tip recorded **STOP — MORRIS DECISION REQUIRED** (CP4-02) with CP4-01 SOURCE FOUND / NOT WIRED. Morris decisions MD-CP4-01 + MD-CP4-02 Option C consumed; this CURRENT section supersedes that STOP state.

## Next / CURRENT REAL campaign

NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this delivery macro.

## Prior overlay retained — PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01

`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` is **INTEGRATED ON MAIN** (historical). Prior tip wording « local candidate » is obsolete as CURRENT next macro.

## Prior overlay retained — POST-EXECUTION

`POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01` **local candidate** on branch `feat/sfia-studio-post-execution-handoff-01`. Capacité suivante après revue: **reprise SprintBoard REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL / END-TO-END REAL.

## POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 overlay

| Item | Status |
|---|---|
| Cursor report machine-readable protocol in EC→Cursor prompt | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_JSON=` required |
| docs_write report **runtime** required (not optional) | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_REQUIRED` / `_MALFORMED` / bind fail-closed; Attempt may stay succeeded |
| docs_write report continuity after `completeBoundedDocsWriteLaunch` | AS-IMPLEMENTED — bind + persist claim beside Artifact Evidence |
| Durable artifact review without hot worktree / Pilot paste | AS-IMPLEMENTED — `external_payload_ref` under existing mission-result-refs layout |
| Claim completion result propagation | AS-IMPLEMENTED — closed classifier; only headings-missing / empty-content → NOT_PROVEN; oracle/integrity/lineage/unknown → continuity fail-closed |
| Nora grounding (contract + report + artifact FULL/PARTIAL + CE) | AS-IMPLEMENTED at tested scope — no PATH_NOT_ALLOWED for governed artifact handoff |
| Fresh + **restart/rehydrate** executionReport surface | AS-IMPLEMENTED — shared `projectW3cExecutionReportSurfaceFromDurable`; LPS keeps Recommendation only |
| Pilot UX Rapport d'exécution + Nora recommendation | AS-IMPLEMENTED projection; rehydrate not nominal |
| Attempt succeeded ≠ Product PASS | PRESERVED — NOT_PROVEN honesty retained |

## PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 overlay

| Item | Status |
|---|---|
| Shared Product Resolution READ-ONLY | AS-IMPLEMENTED at tested scope — canonical `contractResultBindingsMatchCurrentFacts`; no prefix/repo-order preference |
| Canonical Execution Continuity Projection | AS-IMPLEMENTED — reachable stages only (TECHNICAL_TERMINAL / PRODUCT_QUALIFIED removed) |
| Lineage integrity → RECOVERY_REQUIRED | AS-IMPLEMENTED — closed integrity code set; Reconciler STOP; query errors remain resolve errors |
| Server Reconciler (observe/execute/continue) | AS-IMPLEMENTED — no Attempt on observe/continue-without-Attempt; STOP on recoveryRequired |
| ACCEPTED / RUNNING restart | AS-IMPLEMENTED at deterministic tested scope (R2/R3) |
| TrajectorySurface workflow ownership removed | AS-IMPLEMENTED — command + projection |
| Nora product_execution_context_get | AS-IMPLEMENTED — project-bound tool |
| W3-C shared Nora cognitive core (Agents) | AS-IMPLEMENTED — conversation + post_execution via `runNoraCognitiveCore` → `runNoraAgentsTurn` |
| New store / workflow engine / event bus | NONE |
| REAL / READY FOR REAL / runtime v3 ADOPTED | NOT claimed — ZERO REAL |


| REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
| New store/table / parallel engines | NONE |

## Overlay — Tool-First Generic Execution + R1/R2 (local candidate — PENDING_GIT_INTEGRATION)

| Item | Status |
|---|---|
| Pathless analysis PREPARE without invented file path | AS-IMPLEMENTED_IN_CANDIDATE — positive non-mutating claim required (R1) |
| Systematic HD / mandatory CycleInstance / mandatory Artifact for ordinary pathless | **NOT REQUIRED** when NON_STRUCTURAL gates admit |
| Positive claim forms (R1) | `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` — either form may qualify **iff** complementary Product gates pass |
| `repositoryMutation` absent **with** admissible `read_only` | **NOT** an automatic refuse of the positive-claim step — `read_only` alone can satisfy that step |
| `repositoryMutation` absent **without** `read_only` | **FORBIDDEN** as pathless NON_STRUCTURAL — fail-closed (`repository_mutation_claim_absent` / Materiality UNKNOWN) |
| `repositoryMutation` unknown / write → pathless NON_STRUCTURAL | **FORBIDDEN** — fail-closed |
| Nora `repositoryMutation` / `read_only` alone as Product authority | **INSUFFICIENT** — live context, envelope, contradiction checks still apply |
| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
| Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
| Cursor REAL generalist technical no-write | **ABSENT** — debt open |
| R2 Select (REAL + pathless non-mutating) | AS-IMPLEMENTED_IN_CANDIDATE — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
| R2 Start (REAL + pathless non-mutating, Attempt already `accepted`) | AS-IMPLEMENTED_IN_CANDIDATE — refuse Start; Attempt stays `accepted`; zero launch-port calls; same code |
| Fake/DET pathless non-mutating Select/Start | ADMISSIBLE — DETERMINISTIC at tested scope |
| Integration on main / GitHub CI / HQA / P6 GLOBAL PASS | **NOT CLAIMED** — PENDING_GIT_INTEGRATION |
| REAL BOUNDARY PROVEN / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
| Debt `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` | OPEN — sandbox or Product-bound RO agent requires distinct Morris architecture GO |
| Exit for debt | Enforceable no-write at REAL generalist (or equivalent) + GO + Bounded REAL proof |

## Overlay — P6-HQA-F05-GD4-01 / PR #586 (optional Artifact / Generic PREPARE)

| Item | Status |
|---|---|
| Ordinary documentary without closure REQUIRE_ARTIFACT | AS-IMPLEMENTED — may route to Generic PREPARE on same active cycle (`isOptionalDocumentaryWithoutClosureArtifactBlock`) |
| `no_require_artifact` aliased as NEW_CYCLE_FORMALIZATION | **FORBIDDEN** — preserved |
| Invented REQUIRE_ARTIFACT / silent HD for optional documentary | **FORBIDDEN** — preserved |
| Applicable Artifact obligation / REQUIRE_ARTIFACT path | **PRESERVED** — Generic PREPARE does not bypass Artifact governance |
| Intent fidelity (`docs_write` / missionEffects) | AS-IMPLEMENTED at tested scope — offer → rebuild → inspectable contract |
| Capability envelope | Exact Product identities only; substring spoofing fail-closed |
| Nora proposed path as authorized expectedOutput | **FORBIDDEN** at Generic PREPARE when unresolved — candidate only (`unresolved_nora_candidate`) |
| Pending Generic PREPARE offer persistence | **PROCESS-LOCAL** — restart-unsafe; re-offer required |
| Authoritative documentary targetPath at PREPARE | **NOT RESOLVED** in this correctif — composition remains server-owned later (D-PC-09) |
| Fake fixture `__P6_OPTIONAL_DOCUMENTARY_MD__` | DETERMINISTIC boundary only — ≠ OpenAI LIVE |
| OpenAI LIVE / e66 Human QA / Cursor REAL | **NOT RETESTED / NOT CLAIMED** |
| P6 GLOBAL PASS / runtime v3 ADOPTED / READY FOR REAL | **NOT CLAIMED** |

## CHAT-FIRST-GOVERNED-DECISION-LOOP-01 overlay

| Item | Status |
|---|---|
| Chat-first = nominal Work disposition path | DETERMINISTIC proven at tested scope — `pilotDecisionCandidate` → Work only (`resolveChatFirstPilotDecision` → `decideTrajectory`). Chat « oui » never START/FINALIZE |
| Work vs Lifecycle recommendation families | AS-IMPLEMENTED — Journal Work-only; Lifecycle CURRENT on right-panel / lifecycle projection; finalization `undisposed_recommendations` scans Work in-cycle only |
| Conversation non-blocking under pending subject | DETERMINISTIC — reinstruction gate no longer dead-ends composer; unrelated turns stay conversational |
| CTAs Instruire / Décider / Modifier as required UX | RETIRED FROM NOMINAL (`decisionWorkflowMode="chat_first"`); server actions KEEP for legacy_cta / harvest |
| Journal Recommandations / Décisions tabs | AS-IMPLEMENTED projection from existing Epistemic / HumanDecision reads — never Truth C |
| Finalization undisposed Recommendations | AS-IMPLEMENTED blocker `undisposed_recommendations` via existing `assessFinalization` blockers family (Work only) |
| Defer disposition (Work) | AS-IMPLEMENTED at tested scope — durable HD + Reservation `may_affect` + Work Recommendation resolved; missing honest target ⇒ `defer_target_unresolved` |
| Lifecycle transitions (general) | Studio actions KEEP (prepare / approve / prepare cycle / START / FINALIZE). Generic « Lifecycle Chat-first resolver » remains RETIRED — not every Lifecycle transition is conversational |
| First Framing START (bounded) | AS-IMPLEMENTED @ `6a4374ed` — conversational Rec→candidate→examinable→HD→prepare→**explicit** Pilot START→LPS; no auto-START; already-active = honest no-op; DETERMINISTIC proven; ZERO REAL claim |
| NEW_CYCLE vs Artifact natural signal (CI-HQA-F01) | AS-IMPLEMENTED on Delivery PR #585 — « préparer un cycle … » (future note/deliverable OK) stays `NEW_CYCLE_FORMALIZATION`; natural Artifact signal remains for produce/write/materialize under active cycle; DETERMINISTIC at tested scope (`p6.hqa.f01`, continuity CORR-01) |
| Unbound subject never disposed | RESERVE — stays unbound; chat-first materialises OptionSet lazily on disposition turn only |
| REAL chat-first / PocketTasks parity | NOT PROVEN — ZERO REAL this macro; Gate Morris distinct required |
| Visual Figma / Pilot runtime fidelity (First Framing UX) | RESERVE — residual Human QA / visual; not closed by PRR sync |
| Recommendation materiality engine (M-DISP) | RESERVE — presentation-only neutrality (P2-D-01); no new materiality engine |
| Legacy CTA / GO strip / reinstruction arm | KEEP compatibility — RETIRE LATER; #535 NO SAFE REMOVAL PROVEN still holds |

## FIRST-FRAMING-CHAT-FIRST-CONTINUITY overlay (P6 @ `6a4374ed`)

| Item | Status |
|---|---|
| Examinable trajectory before HD | AS-IMPLEMENTED — digest + trajectory substance (≠ generic Project objective / bare « Cadrage » label) |
| HumanDecision inventée / START automatique | FORBIDDEN — preserved |
| Conversational START when prepared | DETERMINISTIC at tested scope (`resolveChatFirstCycleStartGate`) |
| All Lifecycle transitions chat-first | **NOT CLAIMED** — First Framing START path only |
| P6 GLOBAL PASS / runtime v3 ADOPTED | **NOT CLAIMED** |

## P6-HQA-02 / REC-01 overlay (PR #576 @ `b433d431`)

| Item | Status |
|---|---|
| Option B structured WR candidate fields | AS-IMPLEMENTED — `trackingRationale` / `relationKind` / `relatedRecommendationRef` |
| Bounded cognitive trust + prospective qualify | AS-IMPLEMENTED — Studio fail-closed mint; conversationGuidance ≠ WR |
| Coverage PARTIAL (>12 open WR in Nora projection) | ACCEPTED RESERVATION — NEW (and CONTRADICTORY mint) blocked; exact dup / ALREADY_COVERED may still use Product facts |
| Option A CONTRADICTORY durable envelope | AS-IMPLEMENTED — EpistemicItem `workRecommendationRelation`; SQLite reload DETERMINISTIC |
| DISTINCT_RELATED systematic durable envelope | DEFERRED |
| Historical replay after target superseded | AS-IMPLEMENTED — existing-first + materialParity; new mint still live-gated |
| Applicability projection | AS-IMPLEMENTED — read-time source∧target open; durable ≠ CURRENT |
| Auto HD / auto-disposition / auto-supersession from CONTRADICTORY | FORBIDDEN — preserved |
| Human QA REAL / REAL BOUNDARY / E2E REAL | **NOT RUN / NOT CLAIMED** |
| P6 GLOBAL PASS / runtime v3 ADOPTED | **NOT CLAIMED** |
| REC-02 | RESERVED — out of this PR |

## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay

| Item | Status |
|---|---|
| G2 filename micro-gate nominal | MITIGATED — Nora leaf candidate + server compose; clarify when no cue |
| G3 MW5 gratuitous re-challenge | MITIGATED — `structurallyResolvedActiveCycleContinuation` (≠ Truth C ≠ HD) |
| G1/G8 front-door + Fake realism | MITIGATED — front-door oracle; Fake materialization assessment default null |
| G6 EC→Attempt→Evidence lineage | RE-PROVEN at tested scope via Product server-action front-door oracle (Fake docs-write + LPS outcome refs) |
| REAL / E2E REAL | NOT claimed — ZERO REAL this macro |
| Naming policy STOP | NOT required — leaf remains non-authoritative candidate (D-PC-09) |

## Legacy architecture decommission audit (this tree)

**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b` / merged `#535`
**Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).

| Candidate | Classification | Exit / why not removed |
|---|---|---|
| OPS1 (`app/ops1`, `lib/ops1`, `features/ops1`) | KEEP — TEMPORARY | Active route + D1 nav + CI `__tests__/ops1/**` + product Fake env names `OPS1_*`; exit requires Morris GO + env rename + suite/nav cutover |
| `lib/oa/execution-run/**` | KEEP — TEMPORARY | Not on product spine, but FinOps/T7 shadow + CI suite + vol coupling; FinOps HORS SCOPE blocks clean delete |
| `/cycle-actif`, `/decision`, `/synthese` (+ features) | RETIRE FROM ACTIVE VISIBILITY (partial) + KEEP — TEMPORARY | Historical nav tier done; `/`→`/synthese`, 404, FLUSH_TABS, increment/p0 tests remain |
| D1 routes / `lib/d1` | KEEP — CURRENT / ADAPT | Active intake surfaces |
| F3 / W3A fixtures | KEEP — CURRENT (test substitute) | Wired in `vertical-slice-runtime/service.ts` |
| FinOps / T7 | HORS SCOPE | Frozen — do not touch |
| `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |

No `retired-components-ledger.md` — zero components removed.

### CP4 residual reserves (acceptable debt after resume)
- docs_write compatibility bridges retained
- Review Material GC/retention not implemented
- Git promotion of reviewed candidate not implemented
- NoteLite REAL re-proof deferred (Morris GO distinct)
- Nora model/provider tuning deferred
- `durableLocalWriteSeal` domain API transitional (tests/domain only — not Product front door)
