# ChatGPT Review Pack — P6 MACRO CAMPAIGN EXECUTION

- timestamp: 2026-10-08T11:46:14Z
- cycle: 9 — QA / validation
- profile: CRITICAL
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Morris GO P6 EXECUTION: AUTHORIZED / CONSUMED
- Morris GO P6 REAL — BOUNDED CAMPAIGN: AUTHORIZED / CONSUMED
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD: bc0eae04997ec6be58957b519fa6adac01c6a732
- project push: NONE
- PR: NONE
- merge: NONE
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED

## Local Git Truth

```
qa/sfia-studio-p6-global-integrated-product-qa
bc0eae04997ec6be58957b519fa6adac01c6a732
aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
 M .tmp-sfia-review/chatgpt-review.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
bc0eae04 docs(sfia-studio): record P6 campaign Phase 1 PASS and execution truth
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
M	projects/sfia-studio/product-simplification/06-chat-first-product-simplification-integrated-exit-readiness-pack.md
M	projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md
 .../convergence/sfia-studio-convergence-roadmap.md |  3 +-
 ...t-product-simplification-integrated-delivery.md | 30 ++++----
 ...implification-integrated-exit-readiness-pack.md | 39 +++++-----
 ...mplification-p6-global-integrated-product-qa.md | 88 +++++++++++-----------
 4 files changed, 84 insertions(+), 76 deletions(-)
```

## Phase 0

- PR #571 MERGED · merge aba6c4a6 · CI #713 / 37765489559 SUCCESS · Required Gate SUCCESS
- Phase 0 = COMPLETE / INTEGRATED / POST-MERGE VERIFIED

## Phase 1 Exit Gate

# P6 Phase 1 Exit Gate

| Dimension | Value |
| --- | --- |
| QA ENVIRONMENT REPRODUCIBLE | YES |
| MANDATORY RUNTIME CAPABILITIES | READY |
| NON-BLOCKING QUALIFIED CARRIES | C-REAL-CANCEL (REAL cancel NOT PROVEN — historical) · C-NORA-CTX · C-NCR-SCOPE · C-PROOF-REAL-CEILING |
| QA PARALLELISM | NONE |
| STATE PREPARATION | READY |
| RESET / ISOLATION | READY (temp Product DB + SFIA_V2_RUNTIME_ALLOW_RESET test path) |
| CURSOR AUTOMATION | READY |
| EVIDENCE CAPTURE / LEDGER | SUFFICIENT |
| LUNA | ACCESSIBLE |
| SOL | ACCESSIBLE |
| ASTRA | ACCESSIBLE |
| REASONING CAPABILITIES | REVALIDATED |
| CONTROLLED CANDIDATE EVALUATION SEAM | AVAILABLE / SUFFICIENT (nora-eval evalCellProvider + Stage A; ≠ Product router proof) |
| SMOKE-01 | PASS |
| SMOKE-02 | PASS |
| SMOKE-03 | PASS |
| HUMAN QA TRACK / QUEUE | READY |
| DETERMINISTIC BASELINE | GREEN (isolated; local M3 authority env contamination noted) |
| PROVIDER OPERATING ENVELOPE | QUALIFIED |
| PRIVACY / QA DATA SAFETY | READY |
| BROWSER / CLIENT SNAPSHOT | READY (Playwright available; PE queued for Human QA bands) |
| BUDGET READINESS | READY (observed spend tracked; no invented Morris monetary ceiling) |
| PROVIDER DRIFT SNAPSHOT | READY (preflight timestamped) |
| PHASE 1 BLOCKERS | NONE |

## Baseline detail

| Check | Result |
| --- | --- |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| vitest (isolated authority env) | PASS — 5402 passed / 143 skipped |
| vitest (with local M3 authority env) | 1 fail ENV contamination D/E7 — classified ENVIRONMENT-ISSUE |

## Parallelism inspection

No second Product engine · no second Nora · no QA-only authority engine · no parallel evidence store as Product SoT. Campaign ledger is external orchestration only.

## Controlled candidate seam

`createOpenAiEvalCellProviderFactory` / `evalCellProvider` + Global MR Stage A = AVAILABLE/SUFFICIENT for Mode B comparative cognition. Product router-in-situ = Mode A via F2/`decideCognitiveRouting`.

## PHASE 1 VERDICT

**P6 PHASE 1 = QA ENVIRONMENT & RUNTIME READY / PASS**

P6 READY FOR BROAD QA = YES (campaign-internal). P6 PASS = NOT CLAIMED.

## Environment Snapshot

# P6 Environment Snapshot

| Field | Value |
| --- | --- |
| timestamp | 2026-10-08T11:04:10Z (capture start) |
| repo | mcleland147/sfia-workspace |
| campaign branch | qa/sfia-studio-p6-global-integrated-product-qa |
| baseline SHA | aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1 |
| OS | Darwin 27.2 |
| Node | v24.16.0 |
| npm | 11.13.0 |
| package manager | npm (projects/sfia-studio/app) |
| Product port | 3020 |
| Product DB default | projects/sfia-studio/.sfia-exec/product/oa-product.sqlite |
| Nora session DB | …/nora-session.sqlite |
| ENV_LOCAL | YES |
| OPENAI_API_KEY | PRESENT (value not recorded) |
| BETTER_AUTH_SECRET | PRESENT |
| GITHUB_CLIENT_ID | PRESENT |
| secrets in evidence | FORBIDDEN |
| browser (PE capture) | PENDING (Playwright when PE exercised) |
| provider drift snapshot | PENDING after preflight |

## Dependency / baseline commands

```
cd projects/sfia-studio/app
npm install          # up to date
npm run typecheck    # PASS (exit 0)
npm run lint         # PASS (exit 0)
npm run build        # PASS (exit 0)
npm test             # PENDING
```

## Manifests

- product scenarios: 64 (P6-MIN-01…09 all mandatory present)
- cognitive workloads: 30
- paths: .tmp-sfia-review/p6-global-integrated-qa/manifests/

## Phase 2

- DET suite isolated: 18 files / 260 tests PASS
- log: raw-evidence/phase2-det-suite-isolated.log

## Phase 3

{
  "status": "SCREENING MATERIALLY COMPLETE / TEST HARNESS TIMEOUT BEFORE FINAL SUMMARY WRITE",
  "mode": "CONTROLLED_CANDIDATE",
  "completedRuns": 53,
  "plannedRuns": 54,
  "missing": [
    [
      "WL-FR-MULTI-01",
      "gpt-6-astra",
      "medium",
      3
    ]
  ],
  "sufficient": 53,
  "inconclusive": 0,
  "belowFloor": 0,
  "failedOk": 0,
  "byModel": {
    "gpt-6-luna/low": {
      "SUFFICIENT": 18
    },
    "gpt-6.1-sol/low": {
      "SUFFICIENT": 18
    },
    "gpt-6-astra/medium": {
      "SUFFICIENT": 17
    }
  },
  "avgLatencyMs": {
    "gpt-6-luna/low": 14415,
    "gpt-6.1-sol/low": 23120,
    "gpt-6-astra/medium": 30015
  },
  "productionRoutingChanged": false,
  "note": "Mode B only. Vitest timed out at 1200s during final Astra MULTI rep; ledger retains completed runs."
}

- Mode B CONTROLLED CANDIDATE only — production routing changed = NO
- Router-in-situ supporting evidence: P5.S02 R2 PASS + P5.S05 R3 PASS (Phase 1H/SMOKE-01)

## Phase 4

- Adversarial/recovery/authz DET suite: 6 files / 98 tests PASS

## Phase 5 Human QA

- queue count: 22
- executedByMorris: NO
- batch: .tmp-sfia-review/p6-global-integrated-qa/human-qa-batch.md
- queue json: .tmp-sfia-review/p6-global-integrated-qa/human-qa-queue.json

# P6 Human QA Batch — consolidated
campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
queue count: 22
executedByMorris: NO

## A-blocking

### P6-HQ-01 — P6-SC-MIN-03: Required Deliverable produced → reviewed → validated → Exit Proof
- Starting state: Cycle with required Deliverable acceptance criteria
- Setup: CANONICAL PRODUCT PATH
- Actions: Required Deliverable produced, reviewed, validated; Exit Proof satisfied only after validation; Cycle can close
- Expected: Required Deliverable produced, reviewed, validated; Exit Proof satisfied only after validation; Cycle can close
- Observe: Deliverable VALIDATED; ReviewBundle complete; Exit Proof PASS; Cycle CLOSED or exit-eligible
- Viewport: N/A unless PE
- Blocking potential: PRODUCT-BLOCKER
- Status: WAITING HUMAN QA
- Verdict: _pending_

### P6-HQ-02 — P6-SC-MIN-05: Correction → subsequent EC → re-review → validation → exit
- Starting state: Post MIN-04 state: blocking review, Cycle OPEN, prior Attempt SUCCESS with blockers
- Setup: CANONICAL PRODUCT PATH
- Actions: Correction path produces new EC/Attempt as needed; re-review clears blockers; validation then Exit Proof; no silent reuse of stale Confirmation
- Expected: Correction path produces new EC/Attempt as needed; re-review clears blockers; validation then Exit Proof; no silent reuse of stale Confirmation
- Observe: New Attempt or corrected artifact; re-review PASS; validation; Exit Proof PASS; provenance chain intact
- Viewport: N/A unless PE
- Blocking potential: PRODUCT-BLOCKER
- Status: WAITING HUMAN QA
- Verdict: _pending_

### P6-HQ-03 — P6-SC-MIN-06: Interrupted conversation / Project recovery
- Starting state: Active Project mid-conversation with open Cycle and pending Recommendation or Confirmation
- Setup: CANONICAL PRODUCT PATH
- Actions: After interrupt/reload, Product reconstructs authoritative truth before conversation replay; no invented HD/Confirmation; Nora resumes on governed context
- Expected: After interrupt/reload, Product reconstructs authoritative truth before conversation replay; no invented HD/Confirmation; Nora resumes on governed context
- Observe: Authoritative state restored; no invented decisions; conversation resume coherent; Journal/LPS consistent
- Viewport: N/A unless PE
- Blocking potential: PRODUCT-BLOCKER
- Status: WAITING HUMAN QA
- Verdict: _pending_

### P6-HQ-04 — P6-SC-MIN-07: Recommendation / HD / currentness continuity
- Starting state: Project with current Recommendation eligible for disposition; prior superseded Recommendation present
- Setup: CANONICAL PRODUCT PATH
- Actions: Only current Recommendation can materialize; HD requires intent+currentness+authority; superseded Rec cannot authorize protected effects
- Expected: Only current Recommendation can materialize; HD requires intent+currentness+authority; superseded Rec cannot authorize protected effects
- Observe: Current Rec marked current; superseded inactive; HD bound to current subject; stale Rec rejected for mutation
- Viewport: N/A unless PE
- Blocking potential: PRODUCT-BLOCKER
- Status: WAITING HUMAN QA
- Verdict: _pending_

### P6-HQ-05 — P6-SC-MIN-08: Journal projection coherence
- Starting state: Project with multi-turn Cycle activity producing Journal entries, History events, and at least one Synthesis candidate
- Setup: CANONICAL PRODUCT PATH
- Actions: Journal is derived projection linked to provenance; does not invent Truth C; History/Synthesis do not become current authoritative state; focus/inspect/resume remain non-authoritative
- Expected: Journal is derived projection linked to provenance; does not invent Truth C; History/Synthesis do not become current authoritative state; focus/inspect/resume remain non-authoritative
- Observe: Journal entries provenance-linked; no UI-local truth; actions from Journal do not bypass Confirmation/authority
- Viewport: N/A unless PE
- Blocking potential: PRODUCT-BLOCKER
- Status: WAITING HUMAN QA
- Verdict: _pending_

### P6-HQ-06 — P6-SC-SM-01: No parallel cockpit for Cycle command surfaces
- Starting state: Representative Project mid-Cycle
- Setup: CANONICAL PRODUCT PATH
- Actions: Primary interaction remains conversation; supporting surfaces do not recreate pre-simplification cockpit
- Expected: Primary interaction remains conversation; supporting surfaces do not recreate pre-simplification cockpit
- Observe: Human NCR checklist: no meaningful simplification regression
- Viewport: N/A unless PE
- Blocking potential: PRODUCT-BLOCKER
- Status: WAITING HUMAN QA
- Verdict: _pending_

## B-cognitive

### P6-HQ-07 — P6-SC-CK-01: Applicable CKC/method resolved without Pilote admin
- Starting state: New Cycle needing method/CKC context
- Setup: CANONICAL PRODUCT PATH
- Actions: Product resolves applicable method/CKC; Pilote not forced to select CKC in nominal usage
- Expected: Product resolves applicable method/CKC; Pilote not forced to select CKC in nominal usage

## Defect Register

# P6 Defect Register

| ID | Severity | Track | Summary | Disposition |
| --- | --- | --- | --- | --- |
| ENV-D/E7-AUTHORITY | ENVIRONMENT-ISSUE | baseline | Local `.env.local` `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` causes corrProof05 D/E7 fail-closed expectation to fail | Isolate authority env for fail-closed tests · Product OK when isolated · CI-typical GREEN |
| C-REAL-CANCEL | CARRY / OBSERVABILITY | execution | REAL cancellation NOT PROVEN | Remains carry · SMOKE-03 used Product W3-B DET STOP/FAIL path honestly |
| C-NORA-CTX | CARRY | cognition/UX | Nora real-usage context burden | Queued Human QA |
| C-NCR-SCOPE | CARRY | simplification | NCR not globally proven | Queued Human QA / P6 scope |
| C-PROOF-REAL-CEILING | CARRY | proof | Proof ceiling honesty | Maintaining R21 maturity labels |

## Campaign-invalidating

NONE observed so far.

## Product blockers

NONE observed so far in executed AUTO tracks.

## Major

NONE recorded yet pending Phase 3 qualitative adjudication + Human QA.

## Notes

Do not mutate Product to greenwash. Failures retained in ledger.

## Interim Summary

# P6 Interim Consolidation (Phase 6 — NOT final PASS)

| Field | Value |
| --- | --- |
| campaignId | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 |
| Phase 0 | COMPLETE / INTEGRATED / POST-MERGE VERIFIED (PR #571 · CI #713) |
| GO P6 EXECUTION | AUTHORIZED / CONSUMED |
| GO P6 REAL | AUTHORIZED / CONSUMED |
| Phase 1 | PASS |
| Phase 2 AUTO DET | PASS at executed suite (260 tests isolated) |
| Phase 3 | CONTROLLED CANDIDATE screening IN PROGRESS / see raw-evidence |
| Phase 4 AUTO DET | PASS (98 tests adversarial/recovery/authz) |
| Phase 5 | HUMAN QA BATCH READY (22 items) — executedByMorris = NO |
| Phase 6 | INTERIM ONLY |
| P6 PASS | NOT CLAIMED |

## Bars currently satisfied (partial)

- Phase 1 readiness gate
- Deterministic Product baseline (isolated)
- Provider Luna/Sol/Astra accessibility
- SMOKE-01/02/03
- P6-MIN-01 exercised REAL (zero-exec finalize)
- Scenario + cognitive manifests materialized
- Evidence ledger operational
- Human QA queue consolidated

## Bars remaining

- Full Human QA batch execution by Morris
- Full Phase 2 AUTO scenario disposition for all 64 scenarios
- Full Phase 3 discrimination/decision-critical replication
- Router-in-situ calibration completeness vs Mode B
- Adversarial REAL subset where provider boundary material
- Final Morris P6 EXIT REVIEW

## Anti-claims

GO REAL consumed ≠ REAL BOUNDARY globally proven.
High volume ≠ P6 PASS.
Human QA queued ≠ Human QA passed.
Controlled candidate ≠ Product router proof.
P6 evidence ≠ production routing adoption.
runtime v3 = NON ADOPTED.

## FULL DOC07 (canonical living contract — modified this campaign)

# SFIA Studio — Chat-First Product Simplification — P6 Global Integrated Product QA

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P6 — GLOBAL INTEGRATED PRODUCT QA** |
| **Cycle** | **9 — QA / validation** |
| **Pass** | **P6 MACRO CAMPAIGN EXECUTION — REAL-FIRST HYBRID** |
| **Profile** | **CRITICAL** |
| **Typologie** | **QA / VALIDATION / INTEGRATED PRODUCT / REAL-FIRST HYBRID** |
| **Campaign ID** | **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** |
| **Morris CP02 GO** | **AUTHORIZED / CONSUMED** (prior) |
| **ChatGPT Closure Review** | **PASS / CONSUMED** |
| **Morris P6 QA Contract Acceptance** | **AUTHORIZED / CONSUMED** |
| **Morris P6 QA Contract Git Integration GO** | **AUTHORIZED / CONSUMED** (prior) |
| **PR #571** | **MERGED** · merge `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` · post-merge CI Studio **#713** / `37765489559` **SUCCESS** · Required Gate **SUCCESS** |
| **Statut** | **PHASE 0 INTEGRATED · PHASE 1 PASS · BROAD QA IN PROGRESS** |
| **P6-QA-CONTRACT-01…12** | **CLOSED** |
| **P6 campaign strategy** | **REAL-FIRST HYBRID GLOBAL INTEGRATED PRODUCT QA** |
| **Phase 0** | **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** |
| **Phase 1** | **PASS / QA ENVIRONMENT & RUNTIME READY** |
| **GO P6 EXECUTION** | **AUTHORIZED / CONSUMED** |
| **GO P6 REAL — BOUNDED CAMPAIGN** | **AUTHORIZED / CONSUMED** |
| **P6 READY** | **NO** (broad QA only after Phase 1 PASS) |
| **P6 STARTED** | **YES** |
| **P5 COMPLETE** | **YES / INTEGRATED / POST-MERGE VERIFIED** |
| **origin/main (baseline)** | `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` |
| **PR #570** | **MERGED** · CI **#711** / `37743420433` **SUCCESS** (historical P5 COMPLETE) |
| **runtime v3** | **NON ADOPTED** |
| **Campaign branch** | `qa/sfia-studio-p6-global-integrated-product-qa` |
| **Project push / PR / merge** | **NONE** (not authorized this campaign) |
| **Fichier canonique** | `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` |
| **Date** | 2026-10-08 · Europe/Paris |

> **Lecture rapide.** Phase 0 = **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** (PR **#571** · CI **#713**). ChatGPT Closure Review = **PASS**. P6-QA-CONTRACT-01…12 = **CLOSED**. **GO P6 EXECUTION** = **AUTHORIZED / CONSUMED**. **GO P6 REAL — BOUNDED CAMPAIGN** = **AUTHORIZED / CONSUMED**. **P6 STARTED = YES**. Phase 1 = **IN PROGRESS**. Strategy = **REAL-FIRST HYBRID**. **≠ P6 PASS** · **≠ REAL BOUNDARY globally proven** · **≠ runtime v3 ADOPTED** · **≠ production routing adoption**. Project push/PR/merge = **NONE**.

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

**Current:** GO P6 EXECUTION = **AUTHORIZED / CONSUMED** · GO P6 REAL — BOUNDED CAMPAIGN = **AUTHORIZED / CONSUMED** · P6 STARTED = **YES** · Phase 1 = **IN PROGRESS**.

**This document remains the campaign contract.** Living status advances only on evidence. **≠** P6 PASS · **≠** routing adoption · **≠** runtime v3 adoption · **≠** Phase 1 PASS until exit gate evidence.

**Maturity:** Phase 0 INTEGRATED / POST-MERGE VERIFIED · GOs consumed · campaign STARTED · Phase 1 evidence in progress.

---

## B. Executive campaign verdict

| Item | Verdict |
| --- | --- |
| **P6-QA-CONTRACT-01…12** | **CLOSED** (see §AW) |
| **P6 QA CONTRACT** | **ACCEPTED / INTEGRATED / POST-MERGE VERIFIED** |
| **ChatGPT Closure Review** | **PASS / CONSUMED** |
| **Morris Acceptance** | **AUTHORIZED / CONSUMED** |
| **Git Integration GO** | **AUTHORIZED / CONSUMED** (PR **#571** MERGED) |
| **Phase 0** | **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** |
| **Phase 1** | **PASS / QA ENVIRONMENT & RUNTIME READY** |
| **Phases 2…4** | **IN PROGRESS** (AUTO / REAL under GO) |
| **Phase 5** | **HUMAN QA BATCH PREPARING** |
| **Phase 6** | **INTERIM CONSOLIDATION ONLY** (≠ P6 PASS) |
| **P6 campaign strategy** | **REAL-FIRST HYBRID** |
| **GO P6 EXECUTION** | **AUTHORIZED / CONSUMED** |
| **GO P6 REAL — BOUNDED CAMPAIGN** | **AUTHORIZED / CONSUMED** |
| **P6 READY** | **NO** |
| **P6 STARTED** | **YES** |
| **Architecture parallelism** | **NONE** |
| **Next** | Phase 1 exit gate → if PASS continue Phases 2–4 AUTO · Human QA batch · interim consolidation |

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
| Contract correction candidate | **YES — COMPLETE** |
| ChatGPT Closure Review | **PASS / CONSUMED** |
| Morris acceptance | **AUTHORIZED / CONSUMED** |
| Git Integration | **AUTHORIZED / IN PROGRESS THIS CYCLE** |
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

**Current:** Phase 1 = **PASS** · SMOKE-01/02/03 = **PASS** · blockers = **NONE** · evidence under `.tmp-sfia-review/p6-global-integrated-qa/`.

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
| 2 | ChatGPT Closure Review | **PASS / CONSUMED** |
| 3 | Morris P6 QA Contract Acceptance | **AUTHORIZED / CONSUMED** |
| 4 | Morris P6 QA Contract Git Integration GO | **AUTHORIZED / CONSUMED** |
| 5 | Project Draft PR / CI | **THIS CYCLE** |
| 6 | Morris MERGE GO | **NOT AUTHORIZED YET** |
| 7 | **GO P6 EXECUTION** (G-SIMP-P6) | **NOT AUTHORIZED** |
| 8 | **GO P6 REAL — BOUNDED CAMPAIGN** (G-SIMP-09 bounded) | **NOT AUTHORIZED** |
| 9 | Production routing promotion (G-SIMP-12) | **P8** after P6(+P7) |
| 10 | REAL BOUNDARY / E2E REAL claims | Not by decision alone |
| 11 | runtime v3 adoption | **NOT AUTHORIZED** |
| 12 | P6 READY / P6 PASS recording | After execution evidence only |

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
| **P6-QA-CONTRACT-01…12** | **CLOSED** |
| **P6 QA CONTRACT** | **ACCEPTED / INTEGRATED / POST-MERGE VERIFIED** |
| **ChatGPT Closure Review** | **PASS / CONSUMED** |
| **Morris Acceptance** | **AUTHORIZED / CONSUMED** |
| **Git Integration GO** | **AUTHORIZED / CONSUMED** (PR **#571** MERGED · CI **#713** SUCCESS) |
| **Phase 0** | **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** |
| **Phase 1** | **PASS / QA ENVIRONMENT & RUNTIME READY** |
| **GO P6 EXECUTION** | **AUTHORIZED / CONSUMED** |
| **GO P6 REAL — BOUNDED CAMPAIGN** | **AUTHORIZED / CONSUMED** |
| **P6 READY** | **YES for broad QA (campaign-internal after Phase 1 PASS)** · **≠ P6 PASS** |
| **P6 STARTED** | **YES** |
| **REAL EXECUTION** | **IN PROGRESS under GO P6 REAL (bounded)** |
| **runtime v3** | **NON ADOPTED** |
| **Project push / PR / merge** | **NONE** |
| **Next** | Phases 2–4 AUTO · Human QA batch · interim consolidation · **≠ P6 PASS claimed** |

---

## AW. Autonomous review finding closure matrix (CP02)

| ID | Finding | Closure section(s) | Status |
| --- | --- | --- | --- |
| **P6-QA-CONTRACT-01** | Prior incomplete contract / DOC15 placement | CP01 + this file under product-simplification/07 | **CLOSED** |
| **P6-QA-CONTRACT-02** | Distinct GO P6 EXECUTION vs GO P6 REAL | §A · §AS · §AU · §AV | **CLOSED** |
| **P6-QA-CONTRACT-03** | Mandatory Phase-1 smokes | §V · §X | **CLOSED** |
| **P6-QA-CONTRACT-04** | Mode vs proof maturity | §J (Axis A/B + R21) | **CLOSED** |
| **P6-QA-CONTRACT-05** | Cognitive Evaluation & Adjudication | §AF · quality floor · LLM-as-judge | **CLOSED** |
| **P6-QA-CONTRACT-06** | Product Scenario + Cognitive Workload Manifest contracts | §AX | **CLOSED** |
| **P6-QA-CONTRACT-07** | Router-in-situ vs Controlled Candidate | §AD · §X seam field | **CLOSED** |
| **P6-QA-CONTRACT-08** | Semantic/role + method/CKC coverage | §AA | **CLOSED** |
| **P6-QA-CONTRACT-09** | Human QA Queue / batch | §S · §AI | **CLOSED** |
| **P6-QA-CONTRACT-10** | Raw evidence ledger / provenance | §T · §AP | **CLOSED** |
| **P6-QA-CONTRACT-11** | Phase-1 env: browser · rate limits · privacy · budget · drift | §O · §X | **CLOSED** |
| **P6-QA-CONTRACT-12** | Defect severity / unaffected-track continuation | §AQ · §AR | **CLOSED** |

ChatGPT Closure Review = **PASS**. Morris Acceptance = **AUTHORIZED / CONSUMED**. Findings CLOSED. PR **#571** MERGED · Phase 0 INTEGRATED. GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED**. **≠** P6 PASS · **≠** Phase 1 PASS until evidenced.

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

*Fin — P6 Global Integrated Product QA Campaign Contract — Phase 0 INTEGRATED / POST-MERGE VERIFIED (PR #571 · CI #713) · ChatGPT Closure Review PASS · P6-QA-CONTRACT-01…12 CLOSED · GO P6 EXECUTION AUTHORIZED / CONSUMED · GO P6 REAL AUTHORIZED / CONSUMED · P6 STARTED YES · Phase 1 IN PROGRESS · P6 READY NO · P6 PASS NOT CLAIMED · runtime v3 NON ADOPTED · project push/PR/merge NONE.*

## Roadmap current tip (excerpt)

| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN EXECUTION** | 2026-10-08 Europe/Paris — **P6 GLOBAL INTEGRATED PRODUCT QA — MACRO CAMPAIGN EXECUTION / REAL-FIRST HYBRID** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **9 — QA / validation** · Profile **Critical** · Typologie **QA / VALIDATION / INTEGRATED PRODUCT / REAL-FIRST HYBRID** · Milestone **P6** · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main baseline **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** = **MERGED** · merge **`aba6c4a6…`** · post-merge CI Studio **#713** / run **`37765489559`** **SUCCESS** · Required Gate **SUCCESS** · Phase 0 = **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** · ChatGPT Closure Review = **PASS / CONSUMED** · P6-QA-CONTRACT-01…12 = **CLOSED** · Morris GO P6 EXECUTION = **AUTHORIZED / CONSUMED** · Morris GO P6 REAL — BOUNDED CAMPAIGN = **AUTHORIZED / CONSUMED** · Canonical = `product-simplification/07-…` · Campaign strategy = **REAL-FIRST HYBRID** · P6 STARTED = **YES** · Phase 1 = **PASS / QA ENVIRONMENT & RUNTIME READY** · SMOKE-01/02/03 = **PASS** · P6 READY FOR BROAD QA = **YES (campaign-internal)** · Phases 2–4 = **IN PROGRESS** · Phase 5 Human QA batch = **READY** · Phase 6 = **INTERIM CONSOLIDATION ONLY** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · production routing changed = **NO** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** · Next = **MORRIS HUMAN QA BATCH** → P6 FINAL CONSOLIDATION / EXIT REVIEW · **≠** P6 PASS · **≠** REAL BOUNDARY globally proven · **≠** runtime v3 ADOPTED · **≠** production routing adoption |
| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 QA CONTRACT GIT INTEGRATION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — QA CONTRACT ACCEPTANCE & GIT INTEGRATION *(true then; superseded by PR #571 MERGED + CI #713 + GO P6 EXECUTION/REAL consumed)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR readiness / Git Integration** · Profile **Critical** · Typologie **DOC / GOVERNANCE / PR READINESS / GIT INTEGRATION** · Milestone **P6** · Entry main **`1e9d261a252ffb44c73614db5d501cb93ce55d8b`** · PR **#570** MERGED · CI **#711** SUCCESS · P5 COMPLETE = **YES / INTEGRATED / POST-MERGE VERIFIED** · ChatGPT Closure Review = **PASS / CONSUMED** · P6-QA-CONTRACT-01…12 = **CLOSED** · Morris P6 QA Contract Acceptance = **AUTHORIZED / CONSUMED** · Morris P6 QA Contract Git Integration GO = **AUTHORIZED / CONSUMED** · Canonical = `product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` · P6 QA CONTRACT = **MORRIS ACCEPTED / GIT INTEGRATION IN PROGRESS** · Phase 0 = **CONTRACT ACCEPTED / READY FOR GIT INTEGRATION** · Campaign strategy = **REAL-FIRST HYBRID** · GO P6 EXECUTION = **NOT AUTHORIZED** · GO P6 REAL — BOUNDED CAMPAIGN = **NOT AUTHORIZED** · P6 READY = **NO** · P6 STARTED = **NO** · runtime v3 = **NON ADOPTED** · entry candidate HEAD = **`29e91b348c1476156365c5d10fc3050823987916`** · branche `audit/sfia-studio-product-completion-p6-global-integrated-qa-qualification` · Project push / Draft PR = **AUTHORIZED THIS CYCLE** · Merge = **NOT AUTHORIZED** · Next then = Draft PR + CI → **MORRIS MERGE REVIEW / MERGE GO** *(superseded by PR #571 MERGED)* · **≠** P6 READY · **≠** P6 STARTED · **≠** GO P6 EXECUTION · **≠** GO P6 REAL · **≠** runtime v3 ADOPTED · **≠** merge |

## Delivery 05 current P6 fields (excerpt)

# SFIA Studio — Chat-First Product Simplification — P5 Integrated Delivery

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
| **Slice** | **P5-S01**…**P5-S08-6** · **P5-S08** CLOSED · Pass **S08-6 / P5 COMPLETE** |
| **Pass** | **P5-S08-6 MORRIS P5 COMPLETE GATE** = **PASS / MORRIS GATE CONSUMED / POST-MERGE VERIFIED** · P5 COMPLETE = **YES / INTEGRATED / POST-MERGE VERIFIED** · PR **#570** MERGED · CI **#711** SUCCESS · P6 contract PR **#571** MERGED · CI **#713** SUCCESS · P6 = **STARTED / PHASE 1 IN PROGRESS** (`07-…`) · Closure Review **PASS** · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · P6 READY = **NO** · runtime v3 = **NON ADOPTED** |
| **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture · S08-1 = **DOC / audit** |
| **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
| **Base / HEAD Git** | `origin/main` = `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` (PR **#571** P6 QA contract MERGED · post-merge CI Studio **#713** / run **`37765489559`** SUCCESS · Required Gate SUCCESS) · prior PR **#570** `1e9d261a…` / CI **#711** · PR **#569** `75ee3258…` / CI **#709** · PR **#568** / CI **#707** · PR **#567** / CI **#704** · PR **#565** / CI **#698** preserved |
| **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S05 integration** | PR **#560** **MERGED** · post-merge CI Studio **#688** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment **CLOSED ON MAIN** · R3 **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · post-S06 truth-sync PR **#562** **MERGED** @ `7a664d65…` / CI **#692** |
| **P5-S07 integration** | PR **#563** **MERGED** · feature `8e02115e…` · merge `e4c9d2de…` · post-merge CI Studio **#694** / run **`37528948916`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · documentary truth-sync PR **#564** **MERGED** @ `5ea5049…` / CI **#696** **SUCCESS** |
| **P5-S08-1** | **INTEGRATED / POST-MERGE VERIFIED** (PR #565) |
| **P5-S08-2** | **INTEGRATED / POST-MERGE VERIFIED** · CP01 CheckExecutionAuthorization fail-closed (PR #565) |
| **P5-S08-2 CP01 GO** | **AUTHORIZED / CONSUMED** |
| **P5-S08-3** | **INTEGRATED / POST-MERGE VERIFIED** · CP01 **BASELINE ATTRIBUTION CORRECTED / PASS** · CP02 **REVIEW HANDOFF COMPLETE** · NCR **CLOSED FOR P5 EXIT** · Product code during S08-3 **NONE** |
| **P5-S08-4** | **INTEGRATED / POST-MERGE VERIFIED** · PR **#567** · feature `31d9cf89…` · merge `a67e37e0…` · CI **#704** SUCCESS · S08-4D / GLOBAL P3 VISUAL PARITY **PASS** · pairing **CI-DURABLE** |
| **P5-S08-5** | **INTEGRATED / POST-MERGE VERIFIED** · PR **#569** · feature `18bce849613a…` · merge `75ee32588359…` · CI **#709** SUCCESS · Pack 06 on main · six dims PASS/PASS-WITH-CARRY · Blocking OPEN **NONE** · C-PROOF-PACK-INTEGRATION **CLOSED** |
| **P5-S08-6** | **PASS / MORRIS GATE CONSUMED / POST-MERGE VERIFIED** · PR **#570** · feature `d2dcc0cc…` · merge `1e9d261a…` · CI **#711** SUCCESS · Morris P5-S08-6 / P5 COMPLETE GO = **AUTHORIZED / CONSUMED** |
| **P5-S08-4 truth-sync** | PR **#568** **MERGED** · merge `dc93ddd2…` · CI **#707** / run **`37732611679`** SUCCESS |
| **P5-S08-3 GO** | **AUTHORIZED / CONSUMED** |
| **P5-S08-3 CP01 GO** | **AUTHORIZED / CONSUMED** |
| **P5-S08-1→S08-3 CUMULATIVE GIT INTEGRATION GO** | **AUTHORIZED / CONSUMED** |
| **S08 cumulative branch** | `audit/sfia-studio-product-simplification-p5-s08-convergence-exit-readiness` — PR **#565** **MERGED** · cleanup **COMPLETE** · deleted local + remote |
| **Documentary truth-sync branch** | `docs/sfia-studio-p5-s08-s01-s03-post-merge-truth-sync` — **CURRENT DOCUMENTARY TRUTH-SYNC BRANCH** (PR **#566** Draft · Product runtime unchanged) |
| **Branche S07** | `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` — **PRESERVED** · cleanup **PENDING / NOT EXECUTED BY CURRENT GATE** |
| **Branche truth-sync S07** | `docs/sfia-studio-p5-s07-post-merge-truth-sync` — **MERGED via PR #564** · remote branch still present · cleanup **PENDING** |
| **P5 AUTHORIZED BY MORRIS** | **YES** |
| **P5 STARTED** | **YES** |
| **P5 IN PROGRESS** | **NO** (milestone closed) |
| **P5 COMPLETE** | **YES / INTEGRATED / POST-MERGE VERIFIED** |
| **P6** | **STARTED / PHASE 1 PASS / BROAD QA IN PROGRESS** (`07-…`) · Closure Review **PASS** · findings 01–12 **CLOSED** · **REAL-FIRST HYBRID** · Phase 0 = **INTEGRATED / POST-MERGE VERIFIED** (PR **#571**) · SMOKE-01/02/03 **PASS** · Human QA batch **READY** · P6 PASS **NOT CLAIMED** |
| **GO P6 EXECUTION** | **AUTHORIZED / CONSUMED** |
| **GO P6 REAL — BOUNDED CAMPAIGN** | **AUTHORIZED / CONSUMED** |
| **P6 READY** | **NO** |
| **P5-S01** | **INTEGRATED / POST-MERGE VERIFIED** |
| **P5-S02** | **INTEGRATED / POST-MERGE VERIFIED** — R1/R2 **PROVEN** · envelope deviation **ACCEPTED BY MORRIS** |
| **P5-S03** | **INTEGRATED / POST-MERGE VERIFIED** · Object-Native Aperçu + Exécution · A=0/B=0 |
| **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
| **P5-S05** | **INTEGRATED / POST-MERGE VERIFIED** — F2 routing CLOSED ON MAIN · R3 PASS AT TESTED SCOPE |
| **P5-S06** | **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · STOP debt **CLOSED ON MAIN** · REAL cancellation **NOT PROVEN** |
| **P5-S07** | **INTEGRATED / POST-MERGE VERIFIED** · Functional/semantic **PASS / INTEGRATED** · Continuity **PASS / INTEGRATED** · Work Representation **PASS / INTEGRATED** · Journal currentness **PASS** · History identity **PASS** · Responsive **PASS** · GLOBAL P3 VISUAL PARITY **OPEN / INCOMPLETE → OWNER P5-S08** · ZERO REAL · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY → S08-2** |
| **P5-S07 DELIVERY GO** | **AUTHORIZED / CONSUMED** |
| **P5-S07 CP01** | **AUTHORIZED / CONSUMED** |
| **P5-S07 CP02** | **AUTHORIZED / CONSUMED** |
| **P5-S07 CP03** | **AUTHORIZED / CONSUMED** |
| **P5-S07 GIT INTEGRATION GATE** | **AUTHORIZED / CONSUMED** |
| **P5-S07 MERGE GO** | **AUTHORIZED / CONSUMED** |
| **P5-S07 POST-MERGE CLOSURE GO** | **AUTHORIZED / CONSUMED** |
| **P5-S07 POST-MERGE TRUTH-SYNC** | PR **#564** **MERGED / POST-MERGE VERIFIED** (CI **#696** SUCCESS) — tip « LOCAL CANDIDATE / GI NOT AUTHORIZED » **SUPERSEDED** |
| **P5-S08-1 GO** | **AUTHORIZED / CONSUMED** · ChatGPT Review **PASS** |
| **P5-S08-2 GO** | **AUTHORIZED / CONSUMED** · ChatGPT RE-REVIEW **PASS** |
| **P5-S08-3 GO** | **AUTHORIZED / CONSUMED** |
| **NO PROJECT GIT INTEGRATION BEFORE END OF S08-3** | **ADOPTED / ENFORCED / PERIOD COMPLETED** |
| **Morris Cumulative Git Integration GO** | **AUTHORIZED / CONSUMED** |
| **Morris PR #565 READY + MERGE GO** | **AUTHORIZED / CONSUMED** |
| **PR #565** | **MERGED / POST-MERGE VERIFIED** (main `7063fa3c…` · CI **#698** SUCCESS) |
| **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#561** |
| **P5-S06 CP01** | **AUTHORIZED / CONSUMED** |
| **P5-S06 CP02** | **AUTHORIZED / CONSUMED** |
| **P5-S06 CP02.1** | **AUTHORIZED / CONSUMED** |
| **P5-S06 CP02.2** | **AUTHORIZED / CONSUMED** |
| **P5-S06 CP02.3** | **AUTHORIZED / CONSUMED** |
| **P5-S06 GIT INTEGRATION GATE** | **AUTHORIZED / CONSUMED** |
| **P5-S06 MERGE GO** | **AUTHORIZED / CONSUMED** |
| **P5 slicing restant** | **NONE** — S08-1→S08-6 **CLOSED** · P5 COMPLETE **YES / POST-MERGE VERIFIED** · P6 campaign **STARTED** · Phase 1 **IN PROGRESS** · ≠ P6 PASS / ≠ runtime v3 ADOPTED |
| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** (S05) |
| **ZERO REAL** | **YES for S07/S08-1** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) · S02 R1/R2 REAL historique préservé |
| **runtime v3** | **NON ADOPTED** |
| **Git (S08 cumulative)** | PR **#565** **MERGED** · CI **#698** · PR **#567** **MERGED** · CI **#704** · PR **#568** **MERGED** · CI **#707** · PR **#569** **MERGED** · CI **#709** · PR **#570** **MERGED** · CI **#711** · PR **#571** **MERGED** · main `aba6c4a6…` · CI **#713** SUCCESS · P5 COMPLETE **YES / POST-MERGE VERIFIED** · P6 Phase 0 **INTEGRATED** |
| **Next** | P6 Phase 1 exit gate → Phases 2–4 if PASS · Human QA batch · ≠ P6 PASS · ≠ runtime v3 ADOPTED · project push/PR/merge **NOT AUTHORIZED** |
| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#560** |
| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** → **INTEGRATED** |
| **P5-S05 CP01 / CP02** | **AUTHORIZED / CONSUMED** (historique) |
| **Langue** | Français (identifiants canoniques anglais préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
| **Date** | 2026-10-07 · Europe/Paris |

> **Lecture rapide.** P5-S01…S08-6 **technically integrated / post-merge verified**. **P5 COMPLETE = YES**. P6 contract on main via PR **#571** / CI **#713**. P6 = **STARTED / PHASE 1 IN PROGRESS** (`07-…`). **GO P6 EXECUTION / GO P6 REAL = AUTHORIZED / CONSUMED**. **P6 READY = NO** · **P6 PASS NOT CLAIMED** · **runtime v3 = NON ADOPTED**.
> **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. P5 COMPLETE ≠ P6 PASS ≠ runtime v3 ADOPTED ≠ GLOBAL SIMPLIFICATION FULLY QA-PROVEN.

---


## Pack 06 current P6 fields (excerpt)

# SFIA Studio — Chat-First Product Simplification — P5 Integrated Six-Dimension Exit Readiness Pack

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P5 — INTEGRATED DELIVERY** |
| **Slice** | **P5-S08-5 Exit Readiness Pack** + **P5-S08-6 Morris P5 COMPLETE Gate** |
| **Cycle** | **9 — QA / validation** (S08-6 gate) · prior GI = Cycle 13 · prior pack authorship = Cycle 9 |
| **Profile** | **CRITICAL** (S08-6 milestone gate) · prior Critical Review of Pack = **PASS WITH NON-BLOCKING EDITORIAL RESERVES** · prior GI = Standard |
| **Typologie** | **DOC / GOVERNANCE / MILESTONE GATE** |
| **Capacité v3** | **V3-F14 Artifact Completeness** + **V3-F15 distributed maturity** applied to integrated P5 exit proof |
| **Morris P5-S08-5 GO** | **AUTHORIZED / CONSUMED** (pack authorship) |
| **Morris P5-S08-5 GIT INTEGRATION GO** | **AUTHORIZED / CONSUMED** |
| **Morris P5-S08-5 MERGE GO** | **AUTHORIZED / CONSUMED** |
| **Morris P5-S08-6 / P5 COMPLETE GO** | **AUTHORIZED / CONSUMED** |
| **Statut** | **S08-5 INTEGRATED / POST-MERGE VERIFIED · S08-6 PASS / POST-MERGE VERIFIED · P5 COMPLETE = YES / INTEGRATED / POST-MERGE VERIFIED** |
| **origin/main (current)** | `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` |
| **PR #571** | **MERGED** · P6 QA contract · merge `aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1` · CI Studio **#713** / run **`37765489559`** **SUCCESS** · Required Gate **SUCCESS** |
| **PR #570** | **MERGED** · feature `d2dcc0ccf777c18c18ed4ca3ac4a5509a8639ec8` · merge `1e9d261a252ffb44c73614db5d501cb93ce55d8b` · CI Studio **#711** / run **`37743420433`** **SUCCESS** · Required Gate **SUCCESS** |
| **PR #569** | **MERGED** · feature `18bce849613a8e7fa14ba11278cfd62446e29661` · merge `75ee32588359f0fe68bfa6c52dd37225a5c0d5cd` · CI Studio **#709** / run **`37739742176`** **SUCCESS** · Required Gate **PASS** |
| **PR #568** | **MERGED** · feature `0d11ed88afe0d465f325b607c7ca8a5d21e65272` · merge `dc93ddd2…` · post-merge CI Studio **#707** / run **`37732611679`** **SUCCESS** · Required Gate **SUCCESS** |
| **S08-4** | **INTEGRATED / POST-MERGE VERIFIED** (PR **#567** · CI **#704**) |
| **S08-1→S08-3** | **INTEGRATED / POST-MERGE VERIFIED** (PR **#565** · CI **#698**) |
| **S08-6** | **PASS / MORRIS GATE CONSUMED / POST-MERGE VERIFIED** |
| **P5 COMPLETE** | **YES / INTEGRATED / POST-MERGE VERIFIED** |
| **P6** | **STARTED / PHASE 1 PASS / BROAD QA IN PROGRESS** (`07-…`) · Closure Review **PASS** · findings 01–12 **CLOSED** · **REAL-FIRST HYBRID** · Phase 0 = **INTEGRATED / POST-MERGE VERIFIED** · Human QA batch **READY** · P6 PASS **NOT CLAIMED** |
| **GO P6 EXECUTION** | **AUTHORIZED / CONSUMED** |
| **GO P6 REAL — BOUNDED CAMPAIGN** | **AUTHORIZED / CONSUMED** |
| **P6 READY** | **NO** |
| **P6 STARTED** | **YES** |
| **runtime v3** | **NON ADOPTED** |
| **Product/runtime changed** | **NONE** |
| **Tests/harness changed** | **NONE** |
| **Architecture changed** | **NONE** |
| **Fichier** | `projects/sfia-studio/product-simplification/06-chat-first-product-simplification-integrated-exit-readiness-pack.md` |
| **Date** | 2026-10-08 · Europe/Paris |

> **Lecture rapide.** Ce Pack est l’artefact unique de readiness P5 sur les six dimensions canoniques. S08-5 / S08-6 / P5 COMPLETE post-merge verified (PR **#570** · CI **#711**). P6 contract integrated (PR **#571** · CI **#713**). Blocking OPEN = **NONE**. P6 = **STARTED / PHASE 1 IN PROGRESS** (`07-…`) · **GO P6 EXECUTION / GO P6 REAL = AUTHORIZED / CONSUMED** · **≠ P6 PASS** · **≠ runtime v3 ADOPTED**.

---

## A. Metadata / authority

| Domaine | Autorité |
| --- | --- |
| Architecture Product | **P4** (`04-…-semantic-projection-cognitive-architecture.md`) — inchangée |
| Delivery / evidence historique | **P5** (`05-…-integrated-delivery.md`) — KEEP |
| Exit readiness (ce document) | **P5-S08-5 Pack 06** — preuve consolidée de sortie |
| Doctrine Studio | **v3** (framing 30–37) · SFIA v2.6 = PROCESS ONLY |
| Build Doctrine | READ-ONLY · non modifiée |
| Git | `origin/main` SoT pour intégration |

**Ce document n’est pas :** une nouvelle doctrine · une promotion runtime · une preuve REAL nouvelle · un démarrage P6 QA execution · P6 READY YES. (S08-6 / P5 COMPLETE gate = **CONSUMED / POST-MERGE VERIFIED**.)

---

## B. Executive verdict

| Item | Verdict |
| --- | --- |
| **S08-5 global** | **INTEGRATED / POST-MERGE VERIFIED** |
| **Six-dimension readiness** | **PASS / PASS-WITH-CARRY ONLY** |
| **Blocking OPEN dimensions** | **NONE** |
| **Blocking P5 carries** | **NONE** |
| **Artifact Completeness (V3-F14)** | **PASS / INTEGRATED** |
| **Architecture parallelism** | **NONE** |
| **S08-6** | **PASS / MORRIS GATE CONSUMED** |
| **Recommendation** | **P5 COMPLETE = YES / POST-MERGE VERIFIED** · P6 = **STARTED / PHASE 1 IN PROGRESS** (`07-…`) · next = Phase 1 exit gate · ≠ P6 PASS · ≠ runtime v3 ADOPTED |
| **P5 COMPLETE** | **YES / INTEGRATED / POST-MERGE VERIFIED** |
| **P6 READY** | **NO** |
| **runtime v3** | **NON ADOPTED** |

### Dimension summary

| # | Dimension | Verdict |
| --- | --- | --- |
| 1 | **FUNCTIONAL** | **PASS-WITH-CARRY** |
| 2 | **EXPERIENCE** | **PASS** |
| 3 | **SEMANTIC INTEGRITY** | **PASS-WITH-CARRY** |

## Anti-claims

- GO REAL consumed ≠ REAL BOUNDARY globally proven
- High test volume ≠ P6 PASS
- Human QA queued ≠ Human QA passed
- Controlled candidate ≠ Product router proof
- P6 evidence ≠ production routing adoption
- P6/P7 ≠ runtime v3 ADOPTED

## Next Morris gate

MORRIS HUMAN QA BATCH → then P6 FINAL CONSOLIDATION / EXIT REVIEW
