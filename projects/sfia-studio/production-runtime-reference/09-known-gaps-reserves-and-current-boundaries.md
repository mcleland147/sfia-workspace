# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior by itself (Living Reference is descriptive)
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

## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (CURRENT MACRO — local candidate)

- **CURRENT MACRO** on branch `delivery/sfia-studio-generic-execution-review-result-convergence-01` · Correction Pass **04 RESUMED AFTER MORRIS DECISION** · **CLOSED FOR CRITICAL REVIEW**.
- **CP4-01 WIRED** — Product carrier = Proposal `PresentedOptionSet.sealedExecutionBasis` → pursue HumanDecision → DecisionBasis → generic local-write (MD-CP4-01 consumed). MAIN front-door oracle does **not** inject `durableLocalWriteSeal`.
- **CP4-02 OPTION C IMPLEMENTED** — Studio Product write protection = sandbox floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Build Doctrine / Roadmap / D-ER architecture / C1). No blanket `projects/sfia-studio/**` deny. No Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` as Product classifier.
- Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
- Historical: Correction Pass 04 STOP (Morris decision required on CP4-02) superseded by MD-CP4-01/MD-CP4-02 resume — see prior tip / handoff `2daf0dc3…`.
- docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material) — exit when historical callers = 0.
- `durableLocalWriteSeal` domain seam: **TRANSITIONAL** (isolated domain/tests only) — exit when GOVERNED trajectory Product carrier is retired or superseded; never browser/client.
- NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
- Retention GC / Git promotion: **NOT IMPLEMENTED**.
- Next = ChatGPT Critical Review of Correction Pass 04 resume → Morris GO commit/push/PR (distinct).

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
| Lifecycle transitions | EXPLICIT Studio actions preserved (prepare trajectory / approve / prepare cycle / START / FINALIZE) — NOT chat-first; candidate Lifecycle Chat-first resolver RETIRED |
| Unbound subject never disposed | RESERVE — stays unbound; chat-first materialises OptionSet lazily on disposition turn only |
| REAL chat-first / PocketTasks parity | NOT PROVEN — ZERO REAL this macro; Gate Morris distinct required |
| Legacy CTA / GO strip / reinstruction arm | KEEP compatibility — RETIRE LATER; #535 NO SAFE REMOVAL PROVEN still holds |

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
