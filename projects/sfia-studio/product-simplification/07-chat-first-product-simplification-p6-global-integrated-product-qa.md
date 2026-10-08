# SFIA Studio — Chat-First Product Simplification — P6 Global Integrated Product QA

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P6 — GLOBAL INTEGRATED PRODUCT QA** |
| **Cycle** | **8 — Audit projet** |
| **Pass** | **P6 QA CONTRACT — CORRECTION PASS 02** |
| **Profile** | **CRITICAL** |
| **Typologie** | **DOC / AUDIT / QA CONTRACT / CAMPAIGN DESIGN** |
| **Morris CP02 GO** | **AUTHORIZED / CONSUMED** |
| **ChatGPT Autonomous Review** | **STRUCTURALLY SOUND / TARGETED CORRECTIONS REQUIRED → THIS PASS** |
| **Statut** | **CORRECTED LOCAL CANDIDATE / CHATGPT CLOSURE REVIEW REQUIRED** |
| **P6-QA-CONTRACT-01** | **CLOSED** |
| **P6-QA-CONTRACT-02…12** | **CLOSED CANDIDATE / READY FOR CHATGPT CLOSURE REVIEW** |
| **P6 campaign strategy** | **REAL-FIRST HYBRID GLOBAL INTEGRATED PRODUCT QA** |
| **Phase 0** | **CONTRACT CORRECTION COMPLETE CANDIDATE** |
| **Phase 1** | **NOT STARTED** |
| **GO P6 EXECUTION** | **NOT AUTHORIZED** |
| **GO P6 REAL — BOUNDED CAMPAIGN** | **NOT AUTHORIZED** |
| **P6 READY** | **NO** |
| **P6 STARTED** | **NO** |
| **P5 COMPLETE** | **YES / INTEGRATED / POST-MERGE VERIFIED** |
| **origin/main (baseline)** | `1e9d261a252ffb44c73614db5d501cb93ce55d8b` |
| **PR #570** | **MERGED** · CI **#711** / `37743420433` **SUCCESS** |
| **runtime v3** | **NON ADOPTED** |
| **Product/runtime / tests / harness this pass** | **NONE** |
| **Provider REAL calls this pass** | **NONE** |
| **Project push / PR / merge** | **NONE** |
| **Fichier canonique** | `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` |
| **Date** | 2026-10-08 · Europe/Paris |

> **Lecture rapide.** Correction Pass 02 closes autonomous-review findings **P6-QA-CONTRACT-02…12** into this Phase 0 contract freeze. Strategy remains **REAL-FIRST HYBRID**. **GO P6 EXECUTION** and **GO P6 REAL — BOUNDED CAMPAIGN** are distinct and both **NOT AUTHORIZED**. **≠ P6 READY** · **≠ P6 STARTED** · **≠ P6 PASS** · **≠ REAL execution** · **≠ runtime v3 ADOPTED**. Next = ChatGPT Closure Review.

---

## A. Metadata / authority / maturity

| Domaine | Autorité | Role for P6 |
| --- | --- | --- |
| **Product Simplification P1** | `01-…-cadrage.md` §15 · §12A · §17.7 · **G-SIMP-P6** · **G-SIMP-06** · **G-SIMP-09** · **G-SIMP-12** | Detailed P6 contract · mandatory scenarios · Model×Reasoning · gates |
| **Product Simplification P2** | `02-…-functional-operating-model.md` | Functional invariants · Exit Proof · recovery · GDR |
| **Product Simplification P3** | `03-…-workspace-interaction-architecture.md` | Product Experience · responsive · a11y posture |
| **Product Simplification P4** | `04-…-semantic-projection-cognitive-architecture.md` | Semantic world · projections · Strategy-first · Luna/Sol/Astra · quality floor · escalation ≤1 |
| **Product Simplification P5** | `05-…` + Pack `06` | Implemented Product · carries · historical Fake/Real ceiling honesty |
| **Product Completion C1** | `product-completion/01-…` | **Oracle only** — MUST / PC-BAR · **≠** detailed P6 §15 source |
| **Historical DOC13 / DOC14** | `product-completion/13` · `14` | HARVEST / REUSE / REQUALIFY · **≠** active sequence |
| **Build Doctrine** | R2 · R6 · R7 · R12 · R13 · R16 · R18 · R19 · **R21 Fake/Real** · **R22 OpenAI-native-first** · A6 | Proof maturity · provider revalidation · fixtures |
| **v3** | framing 35 / 37 · V3-F14 / V3-F15 | Artifact Completeness · maturity honesty |
| **Git** | `origin/main` | SoT for integrated baseline |

### Distinct future authorities (Finding 02)

| Gate | Source | Authorizes | Does NOT authorize |
| --- | --- | --- | --- |
| **G-SIMP-P6 / GO P6 EXECUTION** | P1 | Execute accepted P6 campaign · deterministic baseline · orchestration · Cursor-driven QA under contract · non-REAL activities inside authorized P6 | Arbitrary REAL · global READY FOR REAL · routing adoption · architecture change · runtime v3 |
| **G-SIMP-09 / GO P6 REAL — BOUNDED CAMPAIGN** | P1 G-SIMP-09 + Build Doctrine R21 | ONLY real boundaries listed in accepted P6 contract (provider preflight · Luna/Sol/Astra calls · Phase-1 smokes · Phase-3 calibration · other explicitly listed P6 REAL interactions) · bounded by budget · cohort · env · stops · evidence · time/scope | Arbitrary REAL outside P6 · REAL BOUNDARY PROVEN by decision alone · E2E REAL by decision alone · production routing change · architecture/persistence · global L5 · runtime v3 |

A single future Morris message **MAY** consume both gates. They remain **semantically distinct**.

**Current:** GO P6 EXECUTION = **NOT AUTHORIZED** · GO P6 REAL — BOUNDED CAMPAIGN = **NOT AUTHORIZED** · REAL calls this pass = **NONE**.

**This document is not:** P6 execution · Product mutation · provider REAL · P6 READY YES · routing adoption · runtime v3 adoption.

**Maturity:** LOCAL CANDIDATE until ChatGPT Closure Review + Morris acceptance + future Git Integration.

---

## B. Executive campaign verdict

| Item | Verdict |
| --- | --- |
| **P6-QA-CONTRACT-01** | **CLOSED** |
| **P6-QA-CONTRACT-02…12** | **CLOSED CANDIDATE** (see §AW closure matrix) |
| **P6 QA CONTRACT** | **CORRECTED LOCAL CANDIDATE / CHATGPT CLOSURE REVIEW REQUIRED** |
| **Phase 0** | **CONTRACT CORRECTION COMPLETE CANDIDATE** |
| **Phase 1…6** | **NOT STARTED** |
| **P6 campaign strategy** | **REAL-FIRST HYBRID** |
| **GO P6 EXECUTION** | **NOT AUTHORIZED** |
| **GO P6 REAL — BOUNDED CAMPAIGN** | **NOT AUTHORIZED** |
| **P6 READY** | **NO** |
| **P6 STARTED** | **NO** |
| **Architecture parallelism** | **NONE** |
| **Next gate** | **CHATGPT CLOSURE REVIEW** |

---

## C. Why P6 exists / P1→P8 relation

| Phase | Role | Relation to P6 |
| --- | --- | --- |
| P1 | Cadrage / trajectory / gates | P6 mission · P6-MIN · G-SIMP-P6 / 06 / 09 / 12 |
| P2 | Functional Operating Model | Invariants / routes P6 must exercise |
| P3 | Workspace / Interaction | PE surfaces / responsive / a11y |
| P4 | Semantic / Cognitive | Projections · routing hypotheses · REAL-FIRST ladder |
| P5 | Integrated Delivery | Implemented Product + six-dim exit + carries |
| **P6** | **Global Integrated Product QA** | Validate WHOLE integrated Product · R-28 anti component-green/product-broken |
| P7 | Fresh Project Replay | Downstream · uses P6 evidence · distinct |
| P8 | Requalification | May promote routing · Morris · no automatic adoption |

---

## D. Source authority map

| Claim type | Authoritative source |
| --- | --- |
| Detailed P6 contract / mandatory scenarios | **P1 §15** |
| GO P6 / GO REAL / capability revalidation / routing promotion | **P1 G-SIMP-P6 · G-SIMP-09 · G-SIMP-06 · G-SIMP-12** |
| Fake/Real proof maturity | **Build Doctrine R21** |
| Provider capability revalidation | **Build Doctrine R22** + **G-SIMP-06** |
| Functional loop / Exit Proof / Rec≠HD | **P2** |
| Product Experience | **P3** |
| Semantic projections / cognition / quality floor | **P4** |
| What is integrated today | **P5 + Pack 06 + Git** |
| Broader Product Completion MUST | **Product Completion C1** (oracle) |
| Historical integrated QA | **DOC13 / DOC14** (evidence only) |

---

## E. Current Git / P5 baseline

| Ref | Value |
| --- | --- |
| `origin/main` | `1e9d261a252ffb44c73614db5d501cb93ce55d8b` |
| PR #570 / CI #711 | **MERGED** / **SUCCESS** |
| P5 COMPLETE | **YES / INTEGRATED / POST-MERGE VERIFIED** |
| P5 Fake/Real ceiling (historical) | DETERMINISTIC PROVEN + bounded historical REAL (S02/S05) · READY FOR REAL **NO** · REAL BOUNDARY **NO** · E2E REAL **NO** |
| Branch | `audit/sfia-studio-product-completion-p6-global-integrated-qa-qualification` |
| Project push | **NONE** |

---

## F. P6 scope / non-goals

**In scope:** integrated Product from P2–P5 · P6-MIN-01…09 · REAL-first hybrid · Phase 1 readiness · broad coverage · Model×Reasoning calibration · adversarial · Human QA first-class · evidence completeness · carry requalification · P7/P8 recommendations (non-binding).

**Non-goals:** new Product wave · architecture rewrite · parallel QA Product · mechanisms solely for automation · full WCAG by default · pixel Figma campaign · automatic routing adoption · automatic REAL BOUNDARY / E2E REAL claims · runtime v3 · P7 · P6-A/B/C microcycles · creating actual campaign manifests/ledgers/scripts in this documentary pass.

---

## G. Historical QA disposition

| Asset | Disposition |
| --- | --- |
| DOC13 | HARVEST / REUSE |
| DOC14 PC-INTEGRATED-QA-01 | HARVEST / REUSE / REQUALIFY |
| QA-INT-01…09 / PC-BAR | DET-GUARD baselines · evidence lineage |
| Integrated-proof E2E + W2/W3/W4 | KEEP / REUSE as DET-GUARD / supporting |
| Historical deterministic PASS | **≠** current P6 REAL-first PASS |

---

## H. Current-main delta inventory (post-DOC14)

Δ-01 D-PC-09 routing · Δ-02 P1→P4 · Δ-03 P5 S01→S08 · Δ-04 OpenAI-native-first/F2 · Δ-05 cancel/STOP · Δ-06 continuity · Δ-07 fail-closed Confirmation · Δ-08 NCR · Δ-09 visual parity · Δ-10 Nora programme · Δ-11 harness growth · Δ-12 Evidence/Result truth-sync.

No delta requires new Product architecture before Phase 0 can complete.

---

## I. P6 QA principles

1. Prefer REAL Product under REAL operating conditions.
2. Meaningful observation volume for probabilistic cognition.
3. No Product mechanisms invented solely for QA automatability.
4. If not honestly AUTO → HUMAN queue (Morris as Pilote).
5. Human QA is first-class.
6. Challenge Luna/Sol/Astra hypotheses — do not merely confirm.
7. Routing matrix may revise from observations; promotion = P8.
8. Evidence informs P7/P8 — does not auto-mutate production routing.
9. Quality contract before execution (Phase 0).
10. Orchestrate the real Product — do not build a second Product.
11. Claims ≤ evidence (V3-F15).
12. **NOT OBSERVED** is honest.
13. Execution mode ≠ proof maturity (Build Doctrine R21).
14. Distinct **GO P6 EXECUTION** vs **GO P6 REAL — BOUNDED CAMPAIGN**.

---

## J. Proof taxonomy — two orthogonal axes (Finding 04)

### Axis A — Test execution mode

| Mode | Meaning |
| --- | --- |
| **AUTO** | Cursor/campaign drives supported Product flows |
| **HUMAN** | Morris as Pilote; genuine judgment and/or non-automatable authentic Product use |

Optional cognitive qualifier: **ROUTER-IN-SITU** · **CONTROLLED CANDIDATE** (§AD).

### Axis B — Proof / realism level (Build Doctrine R21)

| Level | Meaning |
| --- | --- |
| **DETERMINISTIC** | Fake/fixture substitutes genuine **external** boundary · or pure deterministic Product/policy path |
| **REAL-BOUNDARY** | Significant external boundary under test is genuinely real (progressively proven) |
| **END-TO-END-REAL** | Every meaningful boundary required by the claim is genuinely real and proven |

### Combinations (examples)

| Example | Mode | Maturity |
| --- | --- | --- |
| Morris uses Studio UI; provider fake | HUMAN | DETERMINISTIC |
| Cursor drives Product + real OpenAI; other externals deterministic | AUTO | REAL-BOUNDARY |
| Morris + real Product/provider; judgment material | HUMAN | REAL-BOUNDARY |
| Full claim boundary set real | AUTO or HUMAN | END-TO-END-REAL |

### Campaign shorthand (non-canonical)

| Shorthand | Meaning | Hard rule |
| --- | --- | --- |
| **REAL-AUTO** | AUTO + intended REAL-BOUNDARY (or E2E where contracted) | Never overrides Axis B |
| **REAL-HUMAN** | HUMAN + intended REAL-BOUNDARY (or E2E where contracted) | **≠** automatically REAL BOUNDARY PROVEN |
| **DET-GUARD** | AUTO (typically) + DETERMINISTIC invariants/regression | Does not replace accessible REAL proof for REAL claims |

**FAKE** substitutes a genuine external boundary for deterministic regression only — never silently replaces an accessible REAL Product path for a REAL claim.

**REAL-shaped deterministic remains DETERMINISTIC.**

**Rejected primary strategy:** DETERMINISTIC-only as P6 default.
**Adopted design:** REAL-FIRST HYBRID (documentary). Does **not** authorize REAL execution yet.

---

## K. No-test-mechanism rule

> **NO TEST MECHANISM INVENTED SOLELY TO MAKE P6 TESTABLE.**

If not AUTO-exercisable through Product as it exists → HUMAN QA Queue · or NOT-PROVEN / TOOLING-GAP / PRODUCT-GAP. Do not build parallel Product mechanics. Allowed: orchestration around existing interfaces · IDs/manifests · screenshots · evidence files · non-Product external runner logic.

---

## L. P6 campaign trajectory (Phase 0→6) — non-waterfall after Phase 1 (Finding trajectory)

| Phase | Name | Status now |
| --- | --- | --- |
| **0** | Contract Freeze | **THIS PASS / CORRECTION COMPLETE CANDIDATE** |
| **1** | QA Environment & Runtime Readiness | **NOT STARTED** |
| **2** | Global Product QA | **NOT STARTED** |
| **3** | Model × Reasoning REAL Calibration | **NOT STARTED** |
| **4** | Adversarial / Recovery / Failure | **NOT STARTED** |
| **5** | Human REAL QA (batched) | **NOT STARTED** |
| **6** | Consolidation / P6 Exit Qualification | **NOT STARTED** |

**Rules:**

- Phase 0 must precede execution.
- Phase 1 must **PASS** before broad campaign work.
- After Phase 1 PASS: Phases **2 / 3 / 4** and **preparation/collection for Phase 5** **MAY INTERLEAVE** when efficient and evidence-valid.
- No administrative P6-PHASE2/3/4 GOs unless structural blocker requires Morris.
- Intended future pattern: **GO P6 EXECUTION + GO P6 REAL — BOUNDED CAMPAIGN** → Phase 1 → if PASS continue automatically within accepted contract → if structural FAIL STOP/Morris.
- Not P6-A/B/C microcycles.

---

## M. Phase 0 — Contract Freeze

Outputs: authority map · proof taxonomy · Phase 1 gate · manifests **contracts** (not content yet) · cognitive adjudication · Human QA Queue · evidence ledger contract · exit bars · defect/stop · closure matrix §AW.

| Field | Value |
| --- | --- |
| Contract correction candidate | **YES** |
| ChatGPT Closure Review | **REQUIRED** |
| Morris acceptance | **PENDING** |
| Git Integration | **NOT AUTHORIZED THIS PASS** |
| GO P6 EXECUTION | **NOT AUTHORIZED** |
| GO P6 REAL — BOUNDED CAMPAIGN | **NOT AUTHORIZED** |

---

## N. Phase 1 — QA Environment & Runtime Readiness

**Name:** **P6 ENVIRONMENT & RUNTIME READINESS GATE**

Real gate — not a three-model API smoke. Requires future **GO P6 EXECUTION** + **GO P6 REAL — BOUNDED CAMPAIGN** where REAL boundaries apply. Phase 2+ cannot begin until Phase 1 PASS.

---

## O. Phase 1 detailed readiness checklist (Finding 11)

### 1A — Environment preparation

Git/source · dependencies · runtime config (secrets identified without exposing) · startup/health · QA state isolation · snapshot (timestamp · commit · build · provider capability · limitations).

### 1A+ — Browser / client snapshot

Where PE evidence captured: browser · browser version · OS · viewport · deviceBand (Large/Desktop · Compact · Mobile) · reduced-motion where tested. Representative supported bands only — no combinatorial explosion.

### 1B — Runtime completeness

Functional presence/connectivity — not source greps. See §P.

### 1C — QA parallelism

Architecture parallelism = **NONE** or Phase 1 **FAILS**.

### 1D–1E — State preparation · Reset/isolation

As CP01 · IDs: campaignId · scenarioId · workloadId · runId · projectId · cycleId · logicalTurnId/cognitiveTaskId · timestamp · baselineCommit · environmentSnapshotRef. Label every prep method. Seeded ≠ full E2E REAL when upstream bypassed.

### 1F — Cursor automation readiness

SHOULD: start/readiness/drive/collect/telemetry/isolate/queue Human QA.
MUST NOT: invent HD · bypass Confirmation · mutate routing to force · alternate Product path · NOT OBSERVED as PASS · silent REAL downgrade · invent provider-returned values · continue after structural stop.

### 1G — Evidence capture readiness

Per-run fields as CP01 + ledger (§T). Honesty: NOT OBSERVED · ESTIMATED+provenance · no infer provider-returned from configured · missing critical observation = PHASE-1 BLOCKER.

### 1H — OpenAI / REAL preflight + provider operating envelope

Models: GPT-6 Luna · GPT-6.1 Sol · GPT-6 Astra.
Check: accessibility · entitlement · identifiers · efforts · reasoning mode · selected→configured→dispatched · provider-returned only if observable · tools · latency · usage · errors · **no silent legacy fallback**.

**Also qualify:** rate limits where observable · concurrency strategy · timeout · retry/backoff · duplicate invocation/idempotence risk · quota/billing constraints · unexpected fallback.

Do not build new provider infra solely for P6. Do not modify routing matrix in Phase 1.

### 1H+ — Privacy / QA data safety

Controlled QA data · no secrets in prompts/evidence · no credentials in artifacts · no unnecessary sensitive production-like content · corpus suitable for external provider · screenshots do not leak secrets.

### 1H++ — Budget readiness

Campaign spend visibility · budget owner · threshold/stop · cost observation availability · estimated max exposure if useful · no budget-driven downgrade below quality floor. Final hard budget may be set by Morris at GO REAL — not invented here.

### 1H+++ — Provider drift boundary

Snapshot includes provider capability/time. Material mid-campaign change → record **PROVIDER DRIFT BOUNDARY**; requalify affected comparisons before strong cross-period claims.

### 1I–1K — Smoke · Human QA readiness · Deterministic baseline

See §V · §W · baseline reuse of current suites.

---

## P. Runtime Completeness Matrix (Finding 12 / mandatory semantics)

| Family | Items | Rule |
| --- | --- | --- |
| PRODUCT CORE | Project · LPS · Cycle · Trajectory · Rec · HD · Confirmation · EC · Attempt · Result · Evidence · ReviewBundle · recovery · Journal · Historique · Synthèses | Mandatory for contract |
| PRODUCT EXPERIENCE | Projects · New · Conversation · Aperçu · Exécution · Journal · Historique · Synthèses · Decision/Confirmation · Auth · Nora activity · STOP/cancel · desktop/compact/mobile | Mandatory |
| COGNITION | semantic context · CWP/Strategy · routing · Luna/Sol/Astra · quality floor · provider validation · effort dispatch · same Nora/Agents · F2 · deterministic bypass · telemetry · escalation | Mandatory |
| GOVERNED EXECUTION | EC prep · inspection · Confirmation · authority · stale rejection · fail-closed · SUCCESS/STOP/FAIL/cancel · Evidence return · Nora continuity | Mandatory |
| ARTIFACT ROUTING | workspace · CREATE/UPDATE · invalid path · collision/TOCTOU · evidence honesty | Mandatory |
| SEMANTIC PROJECTIONS | owner/currentness/stale-projection protections (§AA) | Mandatory |
| METHOD/CKC CONTEXT | applicable method/CKC resolution honesty (§AA) | Mandatory where Product exposes |

**Phase 1 fields:**

| Field | Values |
| --- | --- |
| **MANDATORY RUNTIME CAPABILITIES** | **READY** / **BLOCKED** |
| **NON-BLOCKING QUALIFIED CARRIES** | **NONE** / list |

A **QUALIFIED CARRY** is allowed only if: capability explicitly non-blocking for P6 · P6 does not need to prove it · claim narrowed honestly · owner + exit exist.

**P6-MUST-PROVE cannot become a non-blocking carry solely to let Phase 1 pass.**
**UNKNOWN mandatory capability at Phase 1 exit = BLOCKER.**

---

## Q. State Preparation Contract

Categories: fresh Project · current Cycle · Rec/HD/EC/Confirmation states · SUCCESS/STOP/FAIL/interrupted · History/Journal · required/optional Deliverable · stale/current Rec · multi-cycle · artifact-routing state.

REAL paths: obtain via canonical Product flows when reasonably possible. Injection/SQL = DET-GUARD or specifically qualified setup only — labelled.

---

## R. Reset / Isolation / Reproducibility

Campaign IDs as §O. Scenario isolation · explicit continuity · cleanup preserves review evidence · no new Product store for campaign metadata.

---

## S. Cursor Automation Readiness + Human QA Queue (Finding 09)

When genuine Pilote judgment is required:

1. Record in **P6 HUMAN QA QUEUE**
2. Preserve state/evidence for later reproduction
3. Mark **WAITING HUMAN QA**
4. **Continue** independent automated scenarios where safe

**Do NOT** stop the whole campaign for every Human QA case.

Global STOP only if: human judgment required to continue the **same dependent path** · global blocker risk · authority unresolved · continuing risks invalidating evidence.

### Human QA Queue item (minimum)

scenarioId · reasonHumanRequired · startingState · setup/reproduction · actionsForMorris · expectedBehavior · observationChecklist · browser/viewport if UX · model/effort if cognitive · evidenceLocation · blockingPotential · status

---

## T. Evidence Capture + Campaign Evidence Ledger (Finding 10)

### Per-run desired fields

As CP01 (campaignId…verdict/reservations) plus browser/OS/viewport/deviceBand where PE · environmentSnapshotRef · providerDriftBoundaryRef if any · adjudicationRef.

### P6 CAMPAIGN EVIDENCE LEDGER

External campaign evidence/orchestration — **NOT Product persistence**.

Principles: append-only/append-preserving · unique runId · no silent rewrite of FAILED · correction/retry = new run · superseded remains traceable · raw provider/Product output retained where safe · screenshots/response IDs/env snapshot/model-effort/config/evaluator tied to runId · defect/reservation links · timestamp · provenance · proof classification (Axis A + Axis B).

Separate **RAW EVIDENCE** from **DERIVED CAMPAIGN SUMMARY**. Summary must be reconstructible from retained runs.

Default candidate: file-based ledger/manifests under bounded review/evidence workspace. Durable P6 package curated in Phase 6. No secrets in raw evidence.

**Do not create the ledger in this documentary pass** — define the contract only.

---

## U. OpenAI / REAL Capability Preflight

See §O 1H. Phase 1 observes readiness; Phase 3 calibrates. R22 / G-SIMP-06 apply. Requires GO P6 REAL when real provider boundaries are exercised.

---

## V. REAL Smoke Journey — mandatory Phase 1 exit (Finding 03)

| ID | Check | Values |
| --- | --- | --- |
| **SMOKE-01** | REPRESENTATIVE REAL PRODUCT JOURNEY | PASS / FAIL / **NOT EXECUTED** |
| **SMOKE-02** | REAL ZERO-EXECUTION JOURNEY | PASS / FAIL / **NOT EXECUTED** |
| **SMOKE-03** | REAL STOP OR FAIL OBSERVABILITY | PASS / FAIL / **NOT EXECUTED** |

During Phase 1, NOT EXECUTED is a valid **temporary** state.

**For Phase 1 PASS: ALL THREE MUST = PASS.**

If any FAIL or NOT EXECUTED → **P6 PHASE 1 = NOT READY**.

Cannot claim `P6 PHASE 1 = QA ENVIRONMENT & RUNTIME READY` unless all three PASS.

Smokes involving REAL Product/provider boundaries require **GO P6 REAL — BOUNDED CAMPAIGN**.

**Do not execute smokes in this documentary pass.**

---

## W. Human QA Readiness (Phase 1J)

Scenario packages for Morris as Pilote without internal QA machinery. P1/P3 simplification principles apply. See §AI / §AJ / §S queue.

---

## X. Phase 1 Exit Gate

| Dimension | Values |
| --- | --- |
| QA ENVIRONMENT REPRODUCIBLE | YES / NO |
| **MANDATORY RUNTIME CAPABILITIES** | **READY** / **BLOCKED** |
| NON-BLOCKING QUALIFIED CARRIES | NONE / list |
| CURSOR CAMPAIGN AUTOMATION READY | YES / NO |
| STATE PREPARATION CONTRACT | READY / NOT READY |
| RESET / ISOLATION | READY / NOT READY |
| EVIDENCE CAPTURE / LEDGER READY | SUFFICIENT / INSUFFICIENT |
| CONTROLLED CANDIDATE EVALUATION SEAM | AVAILABLE/SUFFICIENT · UNAVAILABLE/GAP |
| LUNA / SOL / ASTRA ACCESSIBLE | YES / NO each |
| REASONING EFFORT CAPABILITIES REVALIDATED | YES / NO |
| PROVIDER OPERATING ENVELOPE | READY / NOT READY |
| PRIVACY / QA DATA SAFETY | READY / NOT READY |
| BROWSER / CLIENT SNAPSHOT CAPABLE | READY / N/A / NOT READY |
| BUDGET READINESS | READY / NOT READY |
| PROVIDER DRIFT SNAPSHOT | READY / NOT READY |
| **SMOKE-01** | PASS / FAIL / NOT EXECUTED |
| **SMOKE-02** | PASS / FAIL / NOT EXECUTED |
| **SMOKE-03** | PASS / FAIL / NOT EXECUTED |
| HUMAN QA TRACK / QUEUE READY | READY / NOT READY |
| DETERMINISTIC BASELINE | GREEN / NOT GREEN |
| QA PARALLELISM | NONE / BLOCKER |
| PHASE 1 BLOCKERS | NONE / list |

**Success:** `P6 PHASE 1 = QA ENVIRONMENT & RUNTIME READY` **only if** mandatory runtime READY · parallelism NONE · SMOKE-01/02/03 all PASS · blockers NONE · other REQUIRED fields READY/SUFFICIENT/GREEN as contracted.

**Current:** Phase 1 = **NOT STARTED** · all fields **NOT EXECUTED / NOT CLASSIFIED**.

---

## Y. Phase 2 — Global Product QA coverage model

P6-QA-01…14 = coverage **families** — ≠ “14 tests”. Planning envelope ~**50–70** distinct scenarios (**≠ doctrine**). Stop when no new meaningful coverage. Proof = Axis A × Axis B per scenario.

---

## Z. Mandatory P1 P6 scenarios

| ID | Scenario | Notes |
| --- | --- | --- |
| **P6-MIN-01** | Cycle completes with NO Execution | **N-T3-P6 = P6-MUST-PROVE** |
| **P6-MIN-02** | Optional artifact/execution not required for exit | |
| **P6-MIN-03** | Required Deliverable produced→reviewed→validated→Exit Proof | |
| **P6-MIN-04** | SUCCESS + Artifact + blocking review → Exit NOT satisfied · Cycle OPEN | |
| **P6-MIN-05** | Correction → subsequent EC → re-review → validation → exit | |
| **P6-MIN-06** | Interrupted conversation / Project recovery | |
| **P6-MIN-07** | Recommendation / HD / currentness continuity | |
| **P6-MIN-08** | Journal projection coherence | |
| **P6-MIN-09** | Guided Document Review as one representative cognitive/Product scenario | |

All mandatory. Source = **P1 §15**.

---

## AA. Product scenario inventory / families (Finding 08)

Prior families retained: PROJECT/CYCLE · CONVERSATION/MATERIALIZATION · DELIVERABLE/ARTIFACT · EXECUTION · EVIDENCE/REVIEW/RESULT · CONTINUITY · JOURNAL/HISTORY/SYNTHESES · REPOSITORY/ARTIFACT ROUTING · PRODUCT EXPERIENCE · SIMPLIFICATION.

### SEMANTIC / ROLE PROJECTIONS (new / explicit)

Validate at minimum:

- one authoritative owner per truth domain
- same HumanDecision projected coherently across relevant surfaces
- Recommendation current vs superseded
- ProjectTrajectory currentness
- Journal = derived projection · not Truth C
- History does not become current truth
- Synthesis does not become Truth C
- stale derived projection cannot authorize mutation
- Nora consumes governed Product context · not a parallel semantic world
- frontend projection does not create UI-local Product truth
- executor receives bounded execution projection
- evidence/currentness consistent across role projections
- restart/recovery reconstructs current Product truth before conversation replay

Maps to P6-QA-10 / 05 / 14 and applicable P6-MIN.

### METHOD / DOCTRINE / CKC RESOLUTION (new / explicit)

Where Product applies:

- correct applicable CKC/method context resolution
- minimum-sufficient method context to Nora
- Pilote not forced to select CKC manually in nominal usage
- CKC/method = guidance · **not** authority
- insufficient method context handled honestly
- method/context continuity survives recovery
- Cycle transition can resolve new applicable knowledge/context
- historical method context does not silently become current authoritative state
- no unnecessary internal method administration to Pilote
- Product context / DoctrinePackage / CKC projection semantically consistent

Do **not** create a new Method Engine — these are Product scenarios.

---

## AB. Phase 3 — Model × Reasoning REAL Calibration

Purpose: empirically **challenge** P4 candidate routing. Cohort Luna / Sol / Astra. Strategies Routine / Focused / Deep / High-Assurance.

Hard invariants: Strategy ≠ Model ≠ Effort ≠ Profile · cognitive escalation ≠ authority escalation · quality floor before FinOps · no silent budget downgrade below floor · escalation ≤ 1 · same Nora/Agents · no provider authority gain · `reasoning.mode = standard` nominal · `pro` = separate future gate.

Requires GO P6 REAL for real provider calls.

---

## AC. Cognitive workload corpus

Planning envelope ~**24–32** workloads (**≠ doctrine**). Themes as CP01 (clarification…escalation…GDR…French Product interactions).

---

## AD. Model × effort matrix + two evaluation modes (Finding 07)

### Illustrative envelopes (revalidate efforts in Phase 1)

Routine: Luna none/low/medium · Sol low challenger where meaningful.
Focused: Luna low/medium/high · Sol low/medium.
Deep: Luna high/xhigh if supported · Sol medium/high · Astra medium/high hard cases.
High-Assurance: Sol high/xhigh · Astra high/xhigh · optional high-effort Luna challenger.

### MODE A — ROUTER-IN-SITU

Real Product decides Strategy → quality floor → eligible configs → selected model/effort → dispatch.
Evidence supports claims about the **Product router**. Do not force model selection from Pilote surface.

### MODE B — CONTROLLED CANDIDATE EVALUATION

Compare candidates on the **same** workload (e.g. Luna medium vs Sol medium vs Astra high). May use existing P5/provider evaluation seam if available.

Hard requirements: reuse existing seam if fit · same Nora/Agents where applicable · **no second Nora** · **no production model picker** · forced candidate execution ≠ evidence that production router selected it · classify as comparative cognitive/provider evidence · keep separate from ROUTER-IN-SITU.

Phase 1 classifies: **CONTROLLED CANDIDATE EVALUATION SEAM = AVAILABLE/SUFFICIENT or UNAVAILABLE/GAP**.

If unavailable: do **not** automatically implement. Requalify honest comparison / Human QA / whether gap blocks calibration objective. If materially blocking → STOP / Morris.

---

## AE. Replication / variance + experimental hygiene (Finding)

Tiers: SCREENING ~3 · DISCRIMINATION ~8–12 · DECISION-CRITICAL ~15–20 (**planning envelopes ≠ doctrine**). Total ~**350–650** REAL cognitive observations acceptable if warranted — **not** a mandatory quota.

### Experimental hygiene

Same workload definition · materially equivalent context · same tools/sources · fresh comparable Project unless continuity is the test · randomize/alternate candidate order where practical · avoid all-Luna-then-all-Astra periods if drift confounds · record timestamp/provider snapshot · preserve failed runs · no cherry-pick best-of-N unless production policy itself uses that retry · record retries · record escalation separately · treat provider changes as confounders.

Material drift → **PROVIDER DRIFT BOUNDARY** · re-run representative bridge subset before strong cross-period comparison. Sufficient evidence for material routing decision — not academic statistical significance.

---

## AF. Cognitive Evaluation & Adjudication Contract (Finding 05)

### Layer 1 — HARD CHECKS

Where objectively verifiable: factual requirement · mandatory source · contradiction detected · required output · no invented HD · no authority expansion · correct/prohibited tools · required abstention · citation/provenance · no material hallucination · no fail-open protected effect. Prefer deterministic/evidence-verifiable.

### Layer 2 — QUALITY RUBRIC

Workload-declared criteria as applicable: factual quality · completeness · relevance · challenge · Recommendation usefulness · trade-off · ambiguity · uncertainty honesty · abstention · evidence discipline · source/tool · context usage · governance · clarity · stability. **Not every criterion for every workload.**

### Quality Floor (Finding 18 / P4)

Each workload/class defines sufficiently good outcome **before** FinOps. Classifications: **BELOW FLOOR** · **SUFFICIENT** · **STRONGER THAN NEEDED** · **INCONCLUSIVE**. Only SUFFICIENT+ enter FinOps (cost/latency/retry/escalation per successful task).

### Layer 3 — COMPARATIVE ADJUDICATION

Same workload · equivalent context · same tools/sources · same rubric · independent runs · compare successful-task quality · variance · latency · cost · escalation need. Prefer blinded/anonymous human comparison for close decisions. Close → Discrimination · still ambiguous + routing-significant → Decision-Critical. Do not conclude from one run.

### LLM-AS-JUDGE

Supporting analysis only if separately qualified. **Must NOT** be sole authority for production model selection unless evaluator validated for that decision. Anti-pattern: ask Astra whether Astra > Luna and treat alone as evidence.

### HUMAN ADJUDICATION

Morris first-class for decision-critical cases. Final production routing = **P8 Morris**.

---

## AG. FinOps / cost-per-successful-task

Campaign/per-phase visibility · spend tracking · model/effort comparison · cost per successful task primary · no silent downgrade below floor · stop if spend diverges · Morris visibility before expansion. Cost optimization **after** quality sufficiency.

---

## AH. Phase 4 — Adversarial / Recovery / Failure

Hard-case inventory retained from CP01 (stale Rec/HD · contamination · contradictions · Confirmation/authority · SUCCESS+blockers · STOP/FAIL/cancel · recovery · provider/tool failure · reload · Journal stale · cognitive authority expansion · artifact-routing invalid/TOCTOU · etc.). Prefer AUTO+REAL-BOUNDARY where natural; else HUMAN queue.

---

## AI. Phase 5 — Human REAL QA (batched)

First-class track · not automation leftovers. Domains retained (fluidity · clarity · burden · PE bands · trust · leakage · comparative judgment…). Executed primarily as **consolidated batch** from Human QA Queue (§S) after/alongside interleaved campaign work — not repetitive whole-campaign STOPs.

---

## AJ. Human QA Evidence Template

Retain: scenario · baseline · starting state · actions · model/effort · expected · observed · screenshots · PASS/FAIL/PASS-WITH-RESERVE · notes · defect link.

**Add where applicable:** sourceContract · risk/invariant · browser · browserVersion · OS · viewport · deviceBand · reducedMotion · executionMode (AUTO/HUMAN) · proofTarget (DETERMINISTIC/REAL-BOUNDARY/END-TO-END-REAL) · environmentSnapshotRef · runId · humanReviewer · comparisonBlinded · confidence/reservation.

Do not turn into bureaucracy — populate applicable fields only.

---

## AK. Coverage accounting (Finding 24)

Goal: **100% QUALIFIED DISPOSITION OF REQUIRED P6 COVERAGE**.

Every mandatory requirement/risk is: PROVEN · FAILED/BLOCKING · explicitly NOT-PROVEN with P6 consequence · or OUT-OF-SCOPE/N/A with source-backed justification.

**Does NOT mean:** every combinatorial scenario · 100% automated · arbitrary code coverage · every device/browser/model/effort permutation.

Reportable: AUTO/HUMAN × DETERMINISTIC/REAL-BOUNDARY/E2E · NOT-PROVEN. Do not hide unproven mandatory scope inside a percentage. Morris assesses Human QA proportion from actual campaign.

---

## AL. Phase 6 — Consolidation / P6 Exit

Aggregate baseline · readiness · scenario coverage · P6-MIN · AUTO/HUMAN results · cognitive runs · matrices · variance · escalation · cost/latency · defects · carries · PE · simplification · Evidence · parallelism · proof classification · maturity · routing recommendations · P7/P8 implications · ledger reconstructibility.

**No P6 PASS because CI green / test count high / provider call volume high.**

---

## AM. P6 Completion Bars (hardened)

| Bar | Must prove |
| --- | --- |
| P6-BAR-01 USABLE | Coherent representative real journeys |
| P6-BAR-02 GOVERNED | Authority / protected-effect boundaries |
| P6-BAR-03 RESTART-SAFE | No invented decision/authority/currentness/context |
| P6-BAR-04 GENERIC | Contrasted situations · same Product engine |
| P6-BAR-05 PRODUCT EXPERIENCE | Pilot surfaces usable (incl. Human QA where needed) |
| P6-BAR-06 ARTIFACT ROUTING | Truthful / fail-closed |
| P6-BAR-07 COGNITION | Nora path + routing empirically enough for claims |
| P6-BAR-08 SIMPLIFICATION | No parallel cockpit · no meaningful simplification regression |
| P6-BAR-09 EVIDENCE | Evidence/RB/provenance materially complete |
| P6-BAR-10 NON-REGRESSION | DET-GUARD suites green |
| P6-BAR-11 MATURITY HONESTY | Claims ≤ evidence (R21) |
| P6-BAR-12 CLOSED LOOP | Evidence → Nora/LPS/Trajectory/next action |

### Campaign-level mandatory conditions

- **CAMPAIGN CONTRACT INTEGRITY** — Product Scenario Manifest complete for mandatory scope
- **COGNITIVE WORKLOAD MANIFEST** — sufficiently complete + versioned
- **PHASE 1** — all mandatory readiness dimensions pass
- **REAL SMOKE** — SMOKE-01/02/03 all PASS
- **COGNITIVE EVALUATION VALIDITY** — floors defined · comparisons under adjudication contract
- **RAW EVIDENCE** — ledger/provenance reconstructs material conclusions
- **HUMAN QA** — required queue resolved or explicitly blocking
- **PROVIDER DRIFT** — no unresolved drift invalidating decision-critical comparisons
- **MANDATORY SCOPE** — P6-MIN-01…09 dispositioned · all P6-MUST-PROVE covered
- QA architecture parallelism = NONE

---

## AN. Carry / Debt routing

| ID | Routing |
| --- | --- |
| C-REAL-CANCEL | P6-EVALUATE-FOR-INCLUSION if naturally exercisable under GO P6 REAL · else SEPARATE-REAL-GATE |
| C-RT-A3-2-RESIDUE | P6-NON-BLOCKING-CARRY if fail-closed remains proven |
| C-LEGACY-OPENAI | SEPARATE-OPS unless Phase 1 shows material interference |
| C-NORA-CTX | P6-MUST-PROVE |
| C-NCR-SCOPE | P6-MUST-PROVE · ties to N-GLOBAL-SIMP-QA |
| C-PROOF-REAL-CEILING | RECONSIDER under REAL-first · no auto REAL BOUNDARY/E2E |
| C-BRANCH-CLEANUP | SEPARATE-OPS |
| C-PROOF-PACK-INTEGRATION | CLOSED |
| N-T3-P6 | P6-MUST-PROVE (= P6-MIN-01) |
| N-GLOBAL-SIMP-QA | P6 TARGET |
| N-COG-COMPLETION | SEPARATE / next-milestone · ≠ auto from P6 calibration |

---

## AO. Architecture parallelism

Second Product/Nora/Agents/QA-only router/authority/EC/lifecycle/persistence/artifact-routing/fake-success/UI-only truth = **NONE**. Else STOP.

---

## AP. Artifact Completeness / Evidence (V3-F14)

Document usable by ChatGPT Closure · Morris acceptance · Cursor future execution · P7/P8. Conversation memory is **not** future SoT. Ledger contract §T. Status: LOCAL CANDIDATE until GI.

---

## AQ. Defect severity & continuation (Finding 12)

| Class | Action |
| --- | --- |
| **CAMPAIGN-INVALIDATING** | STOP global campaign (contamination · parallel Product · cross-Project corruption · false REAL classification · drift invalidating active comparison set · ledger corruption) |
| **PRODUCT-BLOCKER** | Affected track STOP · P6 PASS impossible until correction; independent collection may continue if not invalidated |
| **MAJOR** | Record · continue independent tracks · correction before exit if blocking bar affected |
| **MINOR / RESERVE** | Record owner/exit · continue |
| **OBSERVABILITY-GAP** | Block only claims needing missing observation |
| **ENVIRONMENT-ISSUE** | Repair · invalidate affected runs if needed |
| **PROVIDER-VARIANCE** | Record · re-run per variance strategy · not silent Product defect |
| **EXPECTATION / CONTRACT ISSUE** | STOP affected scenario definition · correct contract/manifest under governance |
| **HUMAN-REVIEW ISSUE** | Route to Human QA Queue |

Rule: defect in one independent area must not automatically discard valid independent observations. Maximize collection without continuing through invalid evidence. Preserve failing evidence. Correction → new run + proportionate regression. Architecture/persistence change = STOP/Morris.

---

## AR. Campaign stop conditions

Stops from CP01 retained, plus:

- provider capability materially changes and comparison continuity invalid
- evidence ledger cannot attribute runs
- model/configuration identity cannot be established where required
- evaluator/adjudication process materially corrupted
- candidate comparison contexts no longer comparable
- Human QA state cannot be reproduced where required
- mandatory runtime capability missing
- Phase 1 smoke remains NOT EXECUTED at exit attempt
- REAL action would exceed authorized bounded GO P6 REAL scope
- campaign budget stop threshold reached
- QA data privacy/secrets issue detected

Use §AQ severity — do not over-stop unrelated tracks for localized defects.

---

## AS. Morris decisions / gates

| # | Decision | Status |
| --- | --- | --- |
| 1 | Morris CP02 consolidated closure GO | **CONSUMED** |
| 2 | ChatGPT Closure Review of this corrected contract | **NEXT** |
| 3 | Morris acceptance of corrected P6 QA contract | **PENDING** |
| 4 | Project Git Integration of DOC07 | **NOT AUTHORIZED THIS PASS** |
| 5 | **GO P6 EXECUTION** (G-SIMP-P6) | **NOT AUTHORIZED** |
| 6 | **GO P6 REAL — BOUNDED CAMPAIGN** (G-SIMP-09 bounded) | **NOT AUTHORIZED** |
| 7 | Production routing promotion (G-SIMP-12) | **P8** after P6(+P7) |
| 8 | REAL BOUNDARY / E2E REAL claims | Not by decision alone |
| 9 | runtime v3 adoption | **NOT AUTHORIZED** |
| 10 | P6 READY / P6 PASS recording | After execution evidence only |

---

## AT. P7 / P8 handoff

P6 may recommend workload classes · eligibility · effort bands · escalation · quality-floor findings · cost/latency · matrix adjustments. **Recommendations only.** P7 uses evidence · P8 decides adoption.

---

## AU. Anti-claims

- Corrected LOCAL CANDIDATE ≠ P6 READY ≠ P6 STARTED ≠ P6 PASS
- Phase 0 ≠ Phase 1 ≠ GO P6 EXECUTION ≠ GO P6 REAL
- REAL-FIRST design ≠ REAL execution authorized
- Human Product interaction ≠ REAL BOUNDARY PROVEN automatically
- REAL-HUMAN shorthand ≠ canonical R21 maturity
- Controlled Candidate Evaluation ≠ Product Router selection evidence
- Router-in-situ ≠ proof every alternative model is inferior
- High model quality ≠ production routing adoption
- Hundreds of REAL calls ≠ P6 PASS
- High scenario count ≠ adequate coverage
- Human QA percentage ≠ Product maturity score
- LLM judge ≠ HumanDecision
- Provider-selected configuration ≠ business authority
- Phase 1 PASS ≠ P6 PASS
- P6 PASS ≠ P7 PASS ≠ P8 adoption ≠ runtime v3 ADOPTED
- DET-GUARD green ≠ Product QA complete
- Historical DOC14 PASS ≠ current P6 PASS
- Planning envelopes (50–70 / 24–32 / 350–650) ≠ doctrine/gates
- Product Completion C1 ≠ detailed P6 §15 source
- Prior product-completion/15 ≠ canonical
- Manifest **contracts** ≠ manifests created/executed

---

## AV. Final qualification verdict

| Field | Value |
| --- | --- |
| **P6-QA-CONTRACT-01** | **CLOSED** |
| **P6-QA-CONTRACT-02…12** | **CLOSED CANDIDATE / READY FOR CHATGPT CLOSURE REVIEW** |
| **P6 QA CONTRACT** | **CORRECTED LOCAL CANDIDATE / CHATGPT CLOSURE REVIEW REQUIRED** |
| **Phase 0** | **CONTRACT CORRECTION COMPLETE CANDIDATE** |
| **Phase 1** | **NOT STARTED** |
| **GO P6 EXECUTION** | **NOT AUTHORIZED** |
| **GO P6 REAL — BOUNDED CAMPAIGN** | **NOT AUTHORIZED** |
| **P6 READY** | **NO** |
| **P6 STARTED** | **NO** |
| **REAL EXECUTION** | **NONE** |
| **Product/runtime/tests** | **NONE** |
| **runtime v3** | **NON ADOPTED** |
| **Next** | **CHATGPT CLOSURE REVIEW** |

---

## AW. Autonomous review finding closure matrix (CP02)

| ID | Finding | Closure section(s) | Status |
| --- | --- | --- | --- |
| **P6-QA-CONTRACT-01** | Prior incomplete contract / DOC15 placement | CP01 + this file under product-simplification/07 | **CLOSED** |
| **P6-QA-CONTRACT-02** | Distinct GO P6 EXECUTION vs GO P6 REAL | §A · §AS · §AU · §AV | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-03** | Mandatory Phase-1 smokes | §V · §X | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-04** | Mode vs proof maturity | §J (Axis A/B + R21) | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-05** | Cognitive Evaluation & Adjudication | §AF · quality floor · LLM-as-judge | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-06** | Product Scenario + Cognitive Workload Manifest contracts | §AX | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-07** | Router-in-situ vs Controlled Candidate | §AD · §X seam field | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-08** | Semantic/role + method/CKC coverage | §AA | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-09** | Human QA Queue / batch | §S · §AI | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-10** | Raw evidence ledger / provenance | §T · §AP | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-11** | Phase-1 env: browser · rate limits · privacy · budget · drift | §O · §X | **CLOSED CANDIDATE** |
| **P6-QA-CONTRACT-12** | Defect severity / unaffected-track continuation | §AQ · §AR | **CLOSED CANDIDATE** |

No finding is declared CLOSED from summary alone — substance lives in referenced sections. **CLOSED CANDIDATE** = ready for ChatGPT Closure Review; not yet Morris-accepted / Git-integrated.

---

## AX. Campaign Manifest Contracts (Finding 06)

**Campaign artifacts** — not Product stores · not doctrine · not new architecture · not created in this pass.

### A. P6 PRODUCT SCENARIO MANIFEST

Minimum fields per scenario: scenarioId · title · sourceContract · sourceSection · capability/risk · P6-QA family · P6-MIN mapping if any · mandatory/exploratory · initialState · statePreparationMethod · executionMode (AUTO/HUMAN) · proofTarget (DETERMINISTIC/REAL-BOUNDARY/END-TO-END-REAL) · automationFeasibility · humanQaRequired · expectedBehavior · oracle/acceptance · blockingClass · requiredEvidence · dependencies · cleanup/isolation · notes.

Requirements: all P6-MIN present · all P6-MUST-PROVE mapped · coverage gaps visible · no silent mandatory omission · additions versioned/justified.

### B. P6 COGNITIVE WORKLOAD MANIFEST

Minimum fields: workloadId · title · workloadClass · sourceContract · Product context · prompt/input fixture or governed real input · Strategy hypothesis · qualityFloor · candidateConfigurations · toolAvailability · sourceAvailability · risk/materiality · expectedGoodBehavior · hardChecks · qualityRubric · replicationTier · plannedRuns · humanAdjudicationNeeded · routerInSituEligible · controlledCandidateEligible · proofTarget · notes.

Before mass Phase 3: manifests complete enough for reproducibility/auditability. May evolve on evidence — versioned/justified. File-based sufficient unless later evidence proves otherwise.

---

*Fin — P6 Global Integrated Product QA Campaign Contract — Correction Pass 02 — LOCAL CANDIDATE · findings 02–12 CLOSED CANDIDATE · GO P6 EXECUTION NOT AUTHORIZED · GO P6 REAL NOT AUTHORIZED · P6 READY NO · P6 STARTED NO · REAL NONE · runtime v3 NON ADOPTED.*
