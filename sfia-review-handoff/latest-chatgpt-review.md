# ChatGPT Review Pack — W3-B Targeted Technical Architecture Addendum

## 1. Timestamp

- Local: 2026-08-24 14:45:30 CEST
- UTC: 2026-08-24 12:45:30 UTC
- Cycle: Architecture technique (type 6) — C6 Product Completion remains CLOSED
- Profile: DOC / CRITICAL
- Implementation: NONE

## 2. Original W3-B worktree preservation proof

| Check | Result |
| --- | --- |
| Path | `/Users/morris/Projects/sfia-workspace` |
| Branch | `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` |
| HEAD | `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| Expected HEAD | `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| Dirty status lines | 25 (candidate intact; not reset/cleaned/committed by this cycle) |
| Key untracked W3-B file | `w3bProductOutcomeSemantics.ts` present |
| Architecture isolation | Separate worktree — delivery candidate untouched |

**PASS — W3-B DELIVERY CANDIDATE PRESERVED**

## 3. Architecture worktree Git Truth

| Check | Result |
| --- | --- |
| Path | `/Users/morris/Projects/sfia-workspace-w3b-architecture-addendum` |
| Branch | `docs/sfia-studio-w3-b-targeted-technical-architecture-addendum` |
| HEAD | `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| origin/main | `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| Status | |
```
?? projects/sfia-studio/product-completion/12-product-completion-w3-b-targeted-technical-architecture-addendum.md
```
| Staged | EMPTY |
| Project commit | NONE |

## 4. origin/main proof

`origin/main` = `ba7aa2db408b7fd00faf9638da060ce0833b794b` = expected `ba7aa2db408b7fd00faf9638da060ce0833b794b`

**PASS — no base drift**

## 5. Input STOP handoff commit/blob verification

| Item | Value |
| --- | --- |
| Input commit | `590c9b60ee96f2f1299382a7dedb5095fe964a8b` |
| Expected blob | `7b9d31545ffdf06692df26cda6a33b5a4aeea438` |
| Remote canonical blob at cycle start | `7b9d31545ffdf06692df26cda6a33b5a4aeea438` (verified) |
| Remote blob before this publish | `7b9d31545ffdf06692df26cda6a33b5a4aeea438` |

Input STOP pack verified before architecture analysis. This publish replaces canonical handoff with the architecture review pack.

## 6. Morris architecture decision consumed

MORRIS DECISION — W3-B STRUCTURAL ARCHITECTURE GAP — OPEN BOUNDED W3-B TARGETED TECHNICAL ARCHITECTURE ADDENDUM — PRESERVE C1 TARGET AND C2 SUCCESS/STOP/FAIL SEMANTICS — PRESERVE FUNCTIONAL ARCHITECTURE FC-10/FC-11/FC-12 OWNERSHIP — CONSUME C6 TD-C6-01…06 AS CLOSED BASELINE / DO NOT REOPEN OR REDECIDE THEM — ADDRESS W3B-D01 CONTRACT RESULT SATISFACTION AND W3B-D02 SYSTEM-GOVERNED TERMINAL STOP ONLY — REUSE OA NATIVE BACKBONE / PRODUCT SQLITE / EXISTING PORTS / CLAIM-EVALUATION AND EXECUTIONATTEMPT SUBSTRATE — QUALIFY CLAIM-EVALUATION DURABILITY + EXPLICIT EC EXPECTED-OUTPUT / EVIDENCE-REQUIREMENT BINDING — QUALIFY FC-09→FC-10 SYSTEM-GOVERNED STOP FROM ACTUALLY OBSERVED RUNTIME GUARD WITH SYSTEM-DERIVED PROVENANCE — NO PRODUCTOUTCOME AGGREGATE — NO NEW STORE TECHNOLOGY — NO PARALLEL CLAIM ENGINE — NO STOP ENGINE — NO SECOND ATTEMPT LIFECYCLE — HUMAN CANCEL REMAINS DISTINCT — ADAPTER FAILURE REMAINS FAIL — NO C1/C2/FA/BACKLOG REWRITE UNLESS A NEW CONTRADICTION IS PROVEN — ARCHITECTURE / ANALYSIS ONLY — NO W3-B IMPLEMENTATION UNTIL ADDENDUM VALIDATED — W3-C/D/E NOT STARTED — REAL OUT — FINOPS FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED.

Choices in this cycle remain **CANDIDATE** until Morris validation.

## 7. Source list actually read

Process / CKC / convergence / product docs 01–11 + UX 01–03 + framing 34/35 + STOP handoff 590c9b60 + runtime ClaimEvaluation / Evidence / RB / EC / Cancel / Start / RecordFailure / authorize / TestExecutionAdapter / C6 U2-U2b sections. Full list mirrored in architecture doc and final report.

## 8. Convergence qualification

W1 CLOSED · W2 CLOSED · W3-A CLOSED · W3-B STRUCTURALLY BLOCKED · W3 IN PROGRESS · W3-C/D/E NOT STARTED · C6 CLOSED · REAL OUT · FinOps FREEZE · W4 OUT · runtime v3 NON ADOPTED · Product Completion INCOMPLETE.

Roadmap/doc11 READ ONLY this cycle.

## 9. C1/C2/FA/C6 consistency recheck

Preserved. No contradiction STOP. Stops ported by contracts/policies — no Stop Engine. C6 TD-C6-01…06 not reopened.

## 10. Scope / non-goals

In: W3B-D01 + W3B-D02 architecture only.
Out: implementation, migrations executed, Roadmap/doc11 edits, backlog rewrite, W3-C/D/E, W4, REAL, project Git integration.

## 11. Current runtime files inspected

claimEvaluationTypes.ts · createSqliteEvidenceReviewServices.ts · execution-contract types · evidence/RB types · cancelExecutionAttempt.ts · startExecution.ts · recordExecutionFailure.ts · authorizeExecutionContract.ts · TestExecutionAdapter · C6 doc U2/U2b · FA FC-09…12.

## 12. D01 current-state inventory

EO/ER on durable EC; Evidence/RB durable; ClaimEvaluation Memory-only assessing evidence-in-RB quality — no EO/ER identity assessments; no durable contract-result satisfaction fact.

## 13. D01 representability gap

SUCCESS not honestly representable from current durable facts without inventing EO/ER satisfaction (W3B-D01).

## 14. D01 Option A full analysis

CLAIMEVALUATION DURABLE + explicit EC/EO/ER binding + Sqlite adapter behind existing port. Semantic owner FC-12; FC-11 consumes. See embedded doc §4.1.

## 15. D01 Option B full analysis

Keep CE process-local; durable structured assessment in Evidence/RB; reconstruct CE on restart. Higher ownership/parallel risk. See doc §4.2.

## 16. Optional D01 option C

New assessment aggregate outside ClaimEvaluation — rejected (parallel claim owner).

## 17. D01 recommendation

Option A — TD-W3B-01/02 CANDIDATE/RECOMMENDED.

## 18. D01 persistence design

Product SQLite KEEP; candidate M8 oa_claim_evaluations (+ idempotency); no fake backfill; historical NOT_PROVEN.

## 19. D01 transactional/restart design

No forced single txn across human review; missing/stale assessment => NOT_PROVEN; CE idempotency + OCC.

## 20. D01 security/authority assessment

Client cannot forge PASS; assessment does not grant execute authority; human_review confirm != automatic Morris HD.

## 21. D02 current-state inventory

Cancel = human/Morris only -> cancelled; Start refuse leaves accepted (RTA5-08); fail -> failed; U2/U2b Product not implemented; M4 ambiguity refuses relaunch without terminal STOP.

## 22. C6 U2/U2b harvest analysis

Scenario #3 reusable pattern for launch-frontier STOP; insufficient alone; feeds FC-10 system stop; does not reopen TD-C6-*.

## 23. D02 Option S1 full analysis

Extend CancelExecutionAttempt — single entry, conflation/abuse risk. Doc §7.1.

## 24. D02 Option S2 full analysis

Separate FC-10 use case calling same cancelled transition — clearer abuse resistance. Doc §7.2. Recommended.

## 25. D02 Option S3

U2/U2b-only — insufficient alone; harvest into S2. Doc §7.3.

## 26. D02 recommendation

S2 + harvest S3 — TD-W3B-03/04 CANDIDATE/RECOMMENDED.

## 27. D02 trusted guard/provenance contract

Minimal guard fact: code, owner, project, EC id/version, Attempt id, observed facts, timestamp, policy/version, blocking/valid, audit. Prefer existing receipts/audit/checkpoints. No Guard aggregate by default.

## 28. Pre-auth BLOCK vs post-auth STOP

FC-09 BLOCKED != terminal STOP. No Attempt for pre-launch block. Post-accept observed guard -> FC-10 terminal STOP.

## 29. Human Cancel distinction

USER_CANCEL via existing Cancel. SYSTEM_GOVERNED_STOP via S2. Provenance not merged.

## 30. FAIL distinction

Adapter/technical -> failed / FAIL. Never map to STOP.

## 31. Data/persistence impact matrix

Embedded doc §8.

## 32. Migration/backfill

None executed. Forward-only after Delivery GO. No fake backfill. No retro SYSTEM_GOVERNED_STOP labeling.

## 33. NFR/security

Integrity, restart, idempotence, audit, forge resistance, authority separation — doc §9.

## 34. Fake/Real qualification

TestExecutionAdapter fake only; must not mint SUCCESS/STOP governance tokens. REAL OUT.

## 35. W3-C impact

Same Evidence/RB + durable assessment; no second Nora path.

## 36. W3-D impact

Generic assessment; no cycleType engine.

## 37. W3-E impact

Same canonical path.

## 38. W4 boundary

Presentation only; no UX this cycle.

## 39. Backlog impact note

Future annotate US-P1-05/06 with W3B-D01/D02 after validation. No backlog mutation now.

## 40. Candidate decision register

TD-W3B-01…04 = CANDIDATE / RECOMMENDED. Not ADOPTED.

## 41. Future test strategy

Doc §14 D01/D02 contracts. Not executed as Delivery proof.

## 42. FULL content of new architecture document

---BEGIN DOC 12---
# 12 — Product Completion W3-B Targeted Technical Architecture Addendum

| Field | Value |
| --- | --- |
| **Document** | `12-product-completion-w3-b-targeted-technical-architecture-addendum.md` |
| **Cycle** | Architecture technique (cycle type 6) — **≠ reopen Product Completion C6** |
| **Profile** | DOC / CRITICAL |
| **Milestone** | W3-B STRUCTURAL ARCHITECTURE ADDENDUM |
| **Base Git** | `origin/main` = `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| **Status** | **CANDIDATE** — not ADOPTED · not DECIDED BY MORRIS |
| **Scope** | **W3B-D01** Contract Result Satisfaction · **W3B-D02** System-governed terminal STOP **only** |
| **Authority** | Morris = construction/architecture · ChatGPT = review · Cursor = repo-first analysis |
| **Implementation** | **FORBIDDEN** until Morris validates this addendum |

---

## 0. Purpose (exactly two questions)

### QUESTION A — W3B-D01

How can Studio durably/reconstructibly prove that the expected results and Evidence requirements of an `ExecutionContract` are actually satisfied, without weakening C2 SUCCESS and without creating a parallel claim engine?

### QUESTION B — W3B-D02

How can an actually observed post-authorization runtime guard honestly cause a terminal STOP on the **same** `ExecutionAttempt`, with system-derived provenance, without creating a Stop Engine or a second Attempt lifecycle?

Nothing else is in scope.

---

## 1. Non-negotiable contracts (consumed, not reopened)

### 1.1 C1 / C2

| Contract | Preserve |
| --- | --- |
| **C1** | Product target unchanged |
| **C2 SUCCESS** | Expected result of EC obtained **+** Evidence sufficient in scope |
| **C2 STOP** | Real frontier reached: source / scope / gate / protection / capability / maturity |
| **C2 FAIL** | Process / tool / timeout / crash / unavailability |
| **Anti-claims** | Technical success ≠ Product SUCCESS · Verified Evidence ≠ SUCCESS · Complete ReviewBundle ≠ SUCCESS · Attempt terminal ≠ Cycle close · SUCCESS ≠ READY ≠ runtime v3 ADOPTED |

### 1.2 Functional ownership (FA)

| Capability | Owns | Does not own |
| --- | --- | --- |
| **FC-09 Authorization Gate** | Confirmation semantics · effective authority · executor sufficiency · authorization / blocked | Attempt terminal STOP |
| **FC-10 Governed Execution** | ExecutionAttempt lifecycle · runtime guardrails after auth · **terminal STATE writes** | Product SUCCESS/STOP/FAIL **meaning** |
| **FC-11 Terminal Outcome Semantics** | Product meaning SUCCESS / STOP / FAIL · anti-claims · business qualification | Attempt transitions · Evidence storage · semantic EO/ER evaluator (must **consume** proven assessment) |
| **FC-12 Evidence & Review** | Evidence · ReviewBundle · Evidence hierarchy · claim discipline | Attempt lifecycle · Product outcome meaning |

**Stops** are ported by contracts/policies — **NOT** a parallel Stop Engine (FA explicit; framing 34 historical “Stop Condition Engine” language is doctrine-only and superseded for product ownership).

### 1.3 C6 baseline (CLOSED BY MORRIS)

| TD-C6 | Status |
| --- | --- |
| TD-C6-01…06 | **ADOPTED / CLOSED** — do **not** redecide |
| Product SQLite | **KEEP** |
| OA backbone / ports / Trajectory / Confirmation / AuthorityVerificationReceipt / Epistemic | **KEEP** |
| U2 / U2b | Design CLOSED · Product Store checkpoints **NOT IMPLEMENTED** as named U2/U2b · M4 journal pattern harvestable |

Harvest without reopening: additive Product SQLite migrations · existing ports + adapters · shared `SqliteProductStore` / UoW · restart fail-closed · idempotence · U2/U2b failure scenario #3 (external effect launched, ack durable absent → reconciliation / STOP · no silent retry) · no second Attempt lifecycle.

### 1.4 Explicit forbids

- No `ProductOutcome` aggregate
- No new store technology
- No parallel Claim Engine
- No Stop Engine
- No second Attempt lifecycle
- Human Cancel remains distinct from system-governed STOP
- Adapter technical failure remains **FAIL**
- No C1/C2/FA/Backlog rewrite unless a new contradiction is proven
- No W3-C/D/E start · REAL OUT · FinOps freeze · W4 OUT · runtime v3 NON ADOPTED

---

## 2. Convergence / wave state (preserve)

| Item | State |
| --- | --- |
| W1 | CLOSED |
| W2 | CLOSED BY MORRIS |
| W3-A | CLOSED BY MORRIS |
| W3-B | DELIVERY IN PROGRESS / **STRUCTURALLY BLOCKED** (W3B-D01 · W3B-D02) |
| W3 | IN PROGRESS / NOT CLOSED |
| W3-C/D/E | NOT STARTED |
| C6 | CLOSED |
| Product Completion | INCOMPLETE |
| REAL / FinOps / W4 / runtime v3 | OUT / FREEZE / OUT / NON ADOPTED |

Input STOP handoff (delivery structural proof): commit `590c9b60ee96f2f1299382a7dedb5095fe964a8b` · blob `7b9d31545ffdf06692df26cda6a33b5a4aeea438`.

---

## 3. W3B-D01 — Current-state inventory

Repo base: `ba7aa2db` (architecture worktree; not the dirty W3-B delivery candidate).

### 3.1 Object matrix

| Object | Owner | Key fields | Durability | Semantic capability (EO/ER satisfaction) | Gaps | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| **ExecutionContract** | OA execution-contract (T-A4) | `expectedOutputs?: string[]` · `evidenceRequirements: string[]` · `executionContractId` · `version` · `semanticFingerprint` | Product SQLite `oa_execution_contracts` | **Declares** EO/ER only | No typed EO/ER identity VO · no PASS/FAIL per item · no link to Claim by EO/ER id | **KEEP** |
| **Evidence** | OA evidence-review (T-A6-D1) / FC-12 | bindings (attempt/contract/…) · status · `technicalResultRef?` · digest/version | SQLite `oa_evidence` (+ idempotency) | Binds Attempt/EC · captures technical result · integrity → `verified` | No EO/ER identity · `verified ≠ PASS` · `technicalResultRef ≠ satisfied` | **KEEP** |
| **ReviewBundle** | FC-12 | evidenceRefs · completeness · freeze/version · optional `executionContractId` | SQLite `oa_review_bundles` | Freeze evidence for claim assessment | Completeness ≠ EO/ER coverage · `claimEvaluationRefs` forced empty · no EC **version** on RB | **KEEP** / light **ADAPT** if CE refs needed |
| **ClaimEvaluation** | FC-12 claim discipline (T-A6-D3) | RB id+frozen version · evidenceAssessments · status pass/fail/not_proven · method deterministic/assisted/human_review · confirmationAuthority | **Memory only** on Product path | Assesses **evidence quality vs frozen RB** | **No** EC id/version · **No** EO/ER assessments · lost on restart · free-text `claimStatement` ≠ semantic proof | **KEEP** ports/use-cases · **ADAPT** binding + durability |
| **claimEvidenceAssessment** | shared helper | codes ok/missing/not_verified/… | none | Evidence-support-for-PASS only | No EO/ER matching | **KEEP** |
| **EvaluateClaim / Confirm / Reject** | application | create+evaluate · confirm re-assess · reject | Memory repo | Claim verdict from evidence quality | Does not consult EC EO/ER | **KEEP** under ports · extend for contract-result mode |
| **Product SQLite / UoW** | `SqliteProductStore` | schema `m7-0.1.0` · additive M1→M7 · `runInTransaction` | Durable | EC/Evidence/RB tables; **no claim tables** | No `oa_claim_evaluations` | **KEEP** style · candidate **M8** for claims |

### 3.2 Proven representability gap (W3B-D01)

There is **no durable, reconstructible fact** that:

- each `expectedOutputs[i]` is **PASS / NOT_PROVEN / FAIL**, or
- each `evidenceRequirements[j]` is **SATISFIED / NOT_SATISFIED / NOT_PROVEN**,

bound to exact `executionContractId` + **version/fingerprint** + `executionAttemptId` + Evidence/RB refs + evaluation method + provenance.

Available facts today prove **at most**:

- Attempt technical `succeeded` + `resultRef`
- Evidence binding / integrity / `verified`
- ReviewBundle structural completeness
- process-local ClaimEvaluation of evidence-in-RB (not EO/ER)

**Forbidden equivalences (remain forbidden):**

- free-text `claimStatement` as semantic proof
- non-empty `expectedOutputs` ⇒ satisfied
- Evidence `verified` ⇒ output satisfied
- ReviewBundle complete ⇒ output satisfied

### 3.3 Evaluator boundary (required)

| Layer | Owner | Stores |
| --- | --- | --- |
| 1. Expectation | **ExecutionContract** (existing) | EO/ER declarations |
| 2. Raw/technical proof | **Evidence / Attempt** (existing) | resultRef, integrity, bindings |
| 3. Assessment | **ClaimEvaluation** (ADAPT) **or** reconstructible assessment substrate under FC-12 | structured EO/ER results + provenance |
| 4. Product meaning | **FC-11** | SUCCESS/STOP/FAIL qualification **consuming** proven assessment — **not** inventing EO/ER evaluator |

FC-11 must **not** become a duplicate semantic evaluator of EO/ER.

### 3.4 Assessment authority / evaluation modes

Existing ClaimEvaluation already has:

- `evaluationMethod`: `deterministic` | `assisted` | `human_review`
- `confirmationAuthority`: `system_deterministic` | `authorized_human` | `morris`
- statuses including `not_proven` / `pass` / `fail`

**CANDIDATE reuse** (no large DSL):

| Mode | Meaning | SUCCESS gate |
| --- | --- | --- |
| `deterministic` / `system_deterministic` | Machine-evaluable against Evidence/Attempt facts | Fail-closed until PASS |
| `assisted` | System proposes; human confirms | Fail-closed until confirmed PASS |
| `human_review` | Human assessment required | Fail-closed until authorized confirm; **≠** structural HumanDecision / Morris decision by default |

ReviewBundle review ≠ automatic Pilote/Morris HumanDecision. Product SUCCESS remains fail-closed while any **required** assessment is `NOT_PROVEN`.

---

## 4. W3B-D01 — Options

### 4.1 Option A — CLAIMEVALUATION DURABLE (recommended candidate)

**Description.** Adapt existing ClaimEvaluation under existing ports:

1. Explicit binding: `projectId` · `executionContractId` · `executionContractVersion` (and/or fingerprint) · `executionAttemptId` · `cycleInstanceId?` · ReviewBundle id+frozen version · Evidence refs.
2. Structured assessments (smallest honest shape):
   - per expected-output identity (stable index or derived id from EC version material): `PASS | NOT_PROVEN | FAIL` + provenance
   - per evidence-requirement identity: `SATISFIED | NOT_SATISFIED | NOT_PROVEN` + provenance
3. Persist via **new Sqlite adapter** behind existing `ClaimEvaluationRepositoryPort` (Product SQLite additive M8) — swap Memory wiring in `createSqliteEvidenceReviewServices`.
4. FC-11 consumes durable assessment: SUCCESS only when all **required** EO = PASS and ER = SATISFIED for the **exact** EC version bound to the Attempt; else NOT_PROVEN / FAIL per rules — never invent PASS.

**Reuse.** ClaimEvaluation domain/ports/Evaluate/Confirm · Evidence/RB · EC · Product SQLite migration style · UoW.

**Pros.** Single claim owner · restart reconstruction · OCC/idempotency patterns exist · methods/authority already model human vs deterministic · no parallel engine.

**Cons.** Domain ADAPT (new fields) · schema bump · evaluate/confirm rules must forbid free-text-as-proof for contract-result claims · historical Memory claims irrecoverable.

**Risks mitigated.** Parallel Claim Engine (avoided) · false SUCCESS (fail-closed NOT_PROVEN).

### 4.2 Option B — CLAIMEVALUATION RECONSTRUCTIBLE FROM DURABLE ASSESSMENT EVIDENCE

**Description.** Keep ClaimEvaluation process-local/Memory, but store structured EO/ER assessment as durable Evidence (or frozen RB attachment) with closed schema payload; reconstruct ClaimEvaluation exactly on restart from that Evidence + frozen RB + EC version.

**Acceptable only if:** Evidence ownership remains coherent · no free-text inference on restart · no duplicate claim owner · no second aggregate/engine.

**Pros.** Avoids claim table if assessment fits Evidence model · Evidence already durable.

**Cons.** Blurs FC-12 “raw proof” vs “assessment” · risk of inventing assessment-as-Evidence subtype that becomes a shadow claim store · reconstruction rules must be bit-exact or honesty fails · RB already excludes claimEvaluationRefs · harder audit of claim lifecycle (confirm/reject/supersede).

**Verdict on Option B.** Technically credible but **higher parallel-architecture risk** than A; acceptable only if Morris rejects claim table for process reasons. Not preferred.

### 4.3 Option C (repo-supported alternative) — NEW CONTRACT-RESULT ASSESSMENT TABLE OUTSIDE CLAIMEVALUATION

**Rejected as candidate.** Would create a second assessment owner parallel to ClaimEvaluation → violates “no parallel claim engine” unless ClaimEvaluation is deprecated for this path (out of scope / C6 conflict).

### 4.4 D01 trade-off matrix

| Criterion | A Durable CE | B Reconstruct from Evidence | C New aggregate |
| --- | --- | --- | --- |
| Semantic correctness | High (explicit EO/ER) | High if schema closed | High but ownership split |
| Owner coherence | FC-12 ClaimEvaluation | Ambiguous (Evidence vs Claim) | Parallel owner — **fail** |
| Durability / restart | Native | Indirect | Native |
| Idempotence | Existing CE keys | New Evidence keys | New |
| Schema impact | Additive M8 claim tables + CE fields | Evidence payload / type ADAPT | New table + new port |
| Migration / backfill | Forward only · historical NOT_PROVEN | Same | Same |
| Audit / provenance | Existing claim audit events | Evidence audit only | New audit surface |
| Concurrency | OCC on CE | OCC on Evidence | New OCC |
| Reversibility | Drop M8 / keep Memory fallback | Harder (Evidence pollution) | Harder |
| W3-C impact | Same CE → Nora path | Reconstruction required every restart | Forces W3-C dual path |
| Complexity | Medium | Medium-high | High |
| Parallel risk | Low | Medium-high | **STOP** |

### 4.5 D01 recommendation (CANDIDATE / RECOMMENDED — not ADOPTED)

**Recommend Option A — ClaimEvaluation durable + explicit EC/EO/ER binding.**

FC-11 consumes proven assessment; does not evaluate EO/ER itself.

---

## 5. W3B-D01 — Persistence / transactional design (candidate)

### 5.1 Persistence

| Item | Candidate |
| --- | --- |
| Technology | Product SQLite **KEEP** · no new DB |
| Pattern | Mirror Evidence: `oa_claim_evaluations` + `oa_claim_evaluation_idempotency` · aggregate in `payload_json` · indexed ids |
| Schema version | Candidate bump beyond `m7-0.1.0` (e.g. M8) — **not executed this cycle** |
| Repository | `SqliteClaimEvaluationRepository` implementing existing port |
| Factory | `createSqliteEvidenceReviewServices` swap Memory → Sqlite |
| UoW | Existing `SqliteProductStore.runInTransaction` |
| Unique / idempotency | Existing claim idempotency key + OCC version |
| Supersession | Existing `supersedesClaimEvaluationId` · stale if EC version/fingerprint ≠ Attempt’s EC |
| Stale EC amendment | Assessment bound to old version → treat as **NOT_PROVEN** for current SUCCESS; do not auto-migrate |
| Delete/retention | Follow Evidence/RB retention; no silent rewrite of confirmed assessments |
| Backfill | **None.** Historical process-local CE irrecoverable. Historical Attempts without assessment → **NOT_PROVEN**. No fake PASS. |

### 5.2 Smallest honest assessment shape (not mandatory storage literal)

For one EC version evaluation:

```text
expectedOutput[<stableId>]: PASS | NOT_PROVEN | FAIL  + method + evidenceRefs + evaluatedAt + actor/system provenance
evidenceRequirement[<stableId>]: SATISFIED | NOT_SATISFIED | NOT_PROVEN  + …
bindings: projectId, cycleInstanceId?, executionContractId, executionContractVersion|fingerprint,
           executionAttemptId, reviewBundleId, reviewBundleVersion
```

EO/ER stable ids: prefer **deterministic derivation** from EC version material (index + normalized string + fingerprint) rather than inventing a large DSL. EC remains source of expectation strings.

### 5.3 Transactional units

Do **not** force single SQL transaction across external human review.

| Portion | Atomic? | Notes |
| --- | --- | --- |
| Terminal Attempt write | Existing FC-10 UoW | Unchanged |
| Evidence materialization + RB update | Existing FC-12 patterns | Unchanged |
| Contract-result assessment create/evaluate | CE UoW (+ optional same txn as Evidence if fully system-deterministic) | Idempotent by key |
| Human confirm | Separate command | Re-assess frozen RB + EO/ER rules; fail-closed |
| Crash window | Assessment missing | FC-11 → NOT_PROVEN / no SUCCESS |
| EC amendment after assessment | Stale | New assessment required; old superseded or ignored |

---

## 6. W3B-D02 — Current-state inventory

### 6.1 Guard matrix

| Guard | Owner | Detection time | Attempt state | Durable evidence | Current transition | Desired W3B-D02 | Gap |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pre-auth insufficient executor / FC-09 blocked | FC-09 | Pre-Attempt / Start re-check | No Attempt **or** stays `accepted` on Start refuse | AuthorityVerificationReceipt `blocked` | **BLOCKED** — no launch | Keep BLOCKED ≠ STOP | Do **not** invent Attempt for pre-launch block |
| CancelExecutionAttempt (human / Morris emergency) | FC-10 | Command | → `cancelled` | Attempt + audit + `stopReason` | User/Morris cancel | **USER_CANCEL** distinct | No system path |
| Start revalidation fail (TTL/authz/stale) | FC-10 + FC-09 | Start | Remains **`accepted`** | Audit refuse · RTA5-08 no auto-cancel | Refuse Start | May need system STOP when frontier unsafe | No terminal STOP write |
| failLaunch / RecordExecutionFailure | FC-10 | Launch / adapter | → `failed` | Attempt + errorRef/stopReason | **FAIL** | Keep FAIL | Must not map to STOP |
| TriggerAttemptTimeout autoSafety | FC-10 | Timeout | → `timeout` | Attempt | Technical timeout class | Fail-adjacent · ≠ policy STOP | Pattern for system gate only |
| REAL launch ambiguity / `LAUNCH_RECONCILIATION_REQUIRED` | StartExecution + M4 journal | Post-invoke / pre-durable running | Often stays **`accepted`** | Journal CREATED±LAUNCHED | Refuse relaunch · **no** Cancel | C6 #3 reconciliation / STOP | Closest cousin to U2b · **no** terminal STOP |
| C6 U2 / U2b Product checkpoints | C6 design | Start frontier | Design → running / STOP on ambiguity | Design markers | **NOT IMPLEMENTED** as Product U2/U2b | Harvest pattern | Doc-only Product; code refuses not stops |
| Synthetic / client STOP reason | (forbidden) | — | — | — | Must not exist | System-derived only | Delivery candidate used dishonest tokens — structural gap |

### 6.2 Lifecycle fact

Runtime enum has **`cancelled`** (not literal `terminal_stop`). FA maps FC-11 STOP meaning onto FC-10 terminal **state** writes. Existing Cancel already writes `cancelled` + `cancelledAt` + `stopReason` from `accepted|running|result_pending`.

**Human Cancel** today: Pilote N≥ authority **or** Morris emergency → adapter cancel when applicable → `cancelled`.

**Trusted system Cancel path:** **absent**. `ActorReference.role: "system"` is not special-cased on Cancel.

### 6.3 C6 U2 / U2b harvest analysis

| Question | Answer |
| --- | --- |
| Does C6 already describe honest STOP after observed ambiguity? | **Yes** (scenario #3) |
| Is Product U2/U2b implemented? | **No** (architecture CLOSED, implementation pending by design) |
| Does M4 journal alone solve W3B-D02? | **No** — leaves Attempt `accepted` + refuse relaunch |
| Is U2/U2b sufficient as **the only** STOP class? | **No** — one important class among runtime guards (capability/scope/protection/etc.) |
| Can pattern generalize without Stop Engine? | **Yes** — as **inputs** (trusted guard facts) to a single FC-10 terminal transition |

U2/U2b is **necessary harvest for launch-frontier STOP**, not a complete W3B-D02 solution by itself.

---

## 7. W3B-D02 — Options

### 7.1 Option S1 — EXTEND CancelExecutionAttempt

Allow a trusted system/runtime actor path on the **same** use case, bound to a verified guard fact, writing the same `cancelled` transition.

| Pros | Cons |
| --- | --- |
| Single application entry · reuse all Cancel persist/audit/adapter logic | Risk conflating human and system cancel · API misuse if client can set system flag · authority model complexity inside one command |

### 7.2 Option S2 — SEPARATE FC-10 APPLICATION USE CASE (recommended candidate)

Conceptual responsibility: `StopExecutionAttemptFromRuntimeGuard` (name illustrative).

- **Not** a new engine · **Not** a new lifecycle
- Calls the **same** domain transition to `cancelled` (or shared internal transition helper)
- Enforces: system/trusted caller only · verified guard provenance · **no** client-provided final governance reason · audit with system-derived `stopReason` / provenance
- Leaves human `CancelExecutionAttempt` untouched

| Pros | Cons |
| --- | --- |
| Clear ownership · abuse resistance · human Cancel pristine | Slight duplicate orchestration risk (mitigate by shared transition helper) |

### 7.3 Option S3 — HARVEST C6 U2/U2b RECONCILIATION AS SOLE STOP PATH

Use only checkpoint ambiguity → STOP.

| Pros | Cons |
| --- | --- |
| Aligns C6 scenario #3 · no new lifecycle | Covers **one** STOP class · Product U2/U2b still unimplemented · does not cover post-running policy/capability boundaries · insufficient alone for W3-B honest STOP proof across C2 STOP frontiers |

**S3 as exclusive solution: insufficient.** **S3 as harvested guard-fact producer feeding S2: recommended composition.**

### 7.4 D02 trade-off matrix

| Criterion | S1 Extend Cancel | S2 Separate use case | S3 U2/U2b only |
| --- | --- | --- | --- |
| FC-09 vs FC-10 | FC-10 | FC-10 (clearer) | FC-10 + incomplete Product U2 |
| Trigger trust | Must harden Cancel | Native system-only | Journal/checkpoint trust |
| Provenance | Easy to muddy | Cleaner | Strong for one class |
| Client abuse | Higher | Lower | N/A for other guards |
| Human cancel distinction | Harder | Easier | N/A |
| FAIL distinction | Must keep | Must keep | Must keep |
| Schema | Possibly `stopProvenance` field | Same | Checkpoint markers |
| Testability | Medium | High | Medium |
| REAL parity | Same path | Same path | REAL-oriented only |
| Completeness for W3B-D02 | Possible | **Best** | Incomplete |

### 7.5 D02 recommendation (CANDIDATE / RECOMMENDED — not ADOPTED)

**Recommend Option S2** + **harvest S3** as a first-class **guard-fact source** (launch ambiguity / missing ack), plus future runtime guard observations under the same stop use case.

Reuse Attempt status **`cancelled`** for FC-11 STOP meaning; distinguish provenance:

| Kind | Representation candidate |
| --- | --- |
| **USER_CANCEL** | Existing Cancel path · human/Morris actor · reason taxonomy remains human |
| **SYSTEM_GOVERNED_STOP** | S2 path · system-derived reason/provenance · guard code + observed facts |
| **FAIL** | `failed` / failLaunch / RecordExecutionFailure / adapter technical fail |
| **TIMEOUT** | existing timeout path (fail-adjacent; not policy STOP) |

Prefer reuse of `stopReason` + audit detail / explicit provenance field on Attempt **only if** needed for restart reconstruction — **no** new Guard aggregate by default.

### 7.6 Trusted guard fact (minimal)

A trusted guard fact must resolve:

- guard / stop code
- source owner (FC-09 receipt · Start revalidation · U2b reconcile · policy version)
- project · EC id/version · Attempt id
- observed facts · timestamp
- blocking = true · still valid = true
- provenance/audit ref

Prefer existing audit events, AuthorityVerificationReceipt, Attempt audit, C6 checkpoint markers (when implemented), runtime constraint markers. **Do not** auto-create a durable Guard aggregate.

### 7.7 Pre-auth BLOCK vs post-auth STOP (mandatory)

| Phase | Result |
| --- | --- |
| Pre-auth / pre-Attempt FC-09 insufficient | **BLOCKED** · **no** Attempt · **not** terminal STOP |
| Post-accept / runtime · guard actually observed | FC-10 system-governed **terminal STOP** on **same** Attempt |
| Adapter technical error | **FAIL** |
| Human cancellation | **USER_CANCEL** |

Never transform every FC-09 BLOCKED into terminal STOP. Never create an Attempt solely to represent a pre-launch block.

### 7.8 Lifecycle checkpoint challenge

C2/FA narrative: `accepted → running → terminal_*`.

Repo reality: Cancel already terminals from **`accepted`** (pre-adapter) and from **`running`**.

| Case | Architecture stance |
| --- | --- |
| Guard fails **before** running while Attempt `accepted` | Terminal STOP via same `cancelled` write is **consistent with existing Cancel** and C6 #3 intent · preferred over leaving zombie `accepted` |
| Entering `running` only after coherent U2/U2b | **Aligns C6** · Product U2/U2b still delivery debt · architecture recommends fail-closed STOP when ambiguity observed, not silent stay-accepted forever |
| Would making accepted→cancelled contradict C2? | **No proven contradiction** — C2 STOP is semantic; FA allows FC-10 terminal_stop **state** writes; Cancel already maps to STOP-capable terminal |

If Morris requires literal `running` before any STOP: flag as **MORRIS DECISION REQUIRED** (lifecycle amendment). This addendum **does not** change transitions; it recommends reusing Cancel’s existing accepted→cancelled legality for system path.

---

## 8. Combined data / persistence impact register

| Object | Current storage | Candidate change | New fields | New table? | Migration? | Repo change? | UoW | Recovery | Security | Owner | Reversible? | C6 conflict? | Parallel risk |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ClaimEvaluation | Memory | Sqlite + EO/ER binding | EC/Attempt binds · structured EO/ER assessments | `oa_claim_evaluations` (+ idempotency) | Additive M8 candidate | Sqlite adapter | Existing | Restart reconstruct | Client cannot write PASS | FC-12 | Yes (drop M8) | No | Low |
| ExecutionContract | Sqlite | None for D01 expectation | — | No | No | No | — | — | — | T-A4 | — | No | None |
| Evidence / RB | Sqlite | Optional CE ref / EC version on RB | Optional | No | Optional light | Optional | Existing | — | — | FC-12 | Yes | No | Low |
| ExecutionAttempt | Sqlite | Optional stop provenance | `stopProvenance?` or typed stopReason prefix + audit | No preferred | Additive field candidate | Attempt repo ADAPT | Existing | Restart preserve | System-only write | FC-10 | Yes | No | Low if no Guard aggregate |
| Cancel use case | App | Untouched (S2) or extended (S1) | — | No | No | App | — | — | — | FC-10 | — | No | S1 higher |
| Stop-from-guard use case | Absent | Add FC-10 app use case | — | No | No | New app service | Existing Attempt txn | Idempotent stop | System caller | FC-10 | Yes | No | None if same transition |
| Guard aggregate | Absent | **Do not create** | — | **No** | — | — | — | — | — | — | — | — | Avoid |
| ProductOutcome | Absent | **Forbidden** | — | **No** | — | — | — | — | — | — | — | — | Avoid |
| DB technology | Product SQLite | **KEEP** | — | — | — | — | — | — | — | C6 | — | Rede cision forbidden | — |

---

## 9. NFR / security (bounded)

| NFR | Requirement |
| --- | --- |
| Integrity | No false SUCCESS · no false SYSTEM_GOVERNED_STOP |
| Restart | Assessment + stop provenance reconstructible from Product SQLite / Attempt audit |
| Idempotence | No duplicate assessment · no double stop · no double adapter cancel |
| Consistency | Exact EC version/fingerprint · Attempt · Evidence · RB bindings |
| Audit | Who/what assessed or stopped and why |
| Security | Client cannot forge PASS or runtime guard · system stop not client-reason |
| Authority | Assessment does **not** grant execution authority (FC-09 remains gate) |
| Privacy | Evidence/diagnostic values obey current secret rules |
| Recoverability | Missing/stale assessment → **NOT_PROVEN** · never invented SUCCESS · historical cancelled without system provenance **not** retro-labeled SYSTEM_GOVERNED_STOP |

No invented latency/SLA targets.

---

## 10. Fake / Real qualification

Architecture-only cycle — no Delivery proof execution.

| Boundary | Rule |
| --- | --- |
| TestExecutionAdapter | External executor **fake only** · may emulate success/failure/timeout/cancel ack |
| Must **not** | Manufacture Product SUCCESS · manufacture runtime policy STOP token · provide final governance outcome |
| Future deterministic proof | Same EC · same Attempt · same FC-10 transition · same Evidence · same assessment · same FC-11 |
| REAL | **OUT** |

---

## 11. Downstream impact

| Wave | Impact |
| --- | --- |
| **W3-C** | Consume **same** W3-B Evidence/RB + durable contract-result assessment · no second Nora Evidence path · restart-safe |
| **W3-D** | Assessment generic · **no** cycleType switch engine |
| **W3-E** | Same canonical path |
| **W4** | Presentation only downstream · no UX work here |

If a design forced W3-C/D/E redesign → overarchitecture; **this recommendation does not**.

### Backlog note (no mutation this cycle)

Candidate future truth sync (post Morris validation): annotate US-P1-05 / US-P1-06 with adopted technical enablers **W3B-D01** / **W3B-D02**. **No backlog rewrite now.**

---

## 12. Candidate technical decision register

| ID | Decision | Status |
| --- | --- | --- |
| **TD-W3B-01** | Contract-result assessment = **adapted ClaimEvaluation** with structured EO/ER assessments + Product SQLite durability (Option A) | **CANDIDATE / RECOMMENDED** |
| **TD-W3B-02** | EO/ER identity = deterministic ids derived from EC version material + explicit EC id/version/fingerprint + Attempt + RB/Evidence bindings | **CANDIDATE / RECOMMENDED** |
| **TD-W3B-03** | System-governed terminal STOP = **FC-10 separate use case** calling same Attempt `cancelled` transition (Option S2); human Cancel untouched | **CANDIDATE / RECOMMENDED** |
| **TD-W3B-04** | Runtime guard provenance = trusted guard fact from existing receipts/audit/checkpoints (harvest U2/U2b pattern); optional Attempt provenance field; **no** Guard aggregate / Stop Engine | **CANDIDATE / RECOMMENDED** |

Never ADOPTED / DECIDED BY MORRIS in this document.

---

## 13. Migration / backfill (candidate only)

- New DBs: **NONE**
- Historical ClaimEvaluations: may be **irrecoverable**
- Historical Attempts without assessment: **NOT_PROVEN**
- Historical cancelled without trustworthy system provenance: **do not** reclassify as SYSTEM_GOVERNED_STOP
- Forward writes only after later Delivery GO
- **No migration executed** in this architecture cycle

---

## 14. Future Delivery test contracts (not executed now)

### D01

- Technical succeeded + EO assessment NOT_PROVEN → **no SUCCESS**
- All required EO PASS + ER SATISFIED → SUCCESS eligible (still anti-claims)
- Wrong EC version → stale / NOT_PROVEN
- Missing Evidence → NOT_PROVEN
- Restart restores exact assessment
- Hostile client cannot write PASS
- EC amendment invalidates stale assessment for SUCCESS

### D02

- Pre-auth insufficient executor → BLOCKED / no Attempt
- Accepted/running + actual runtime guard → terminal STOP (`cancelled`) with system provenance
- System stop reason derived · not client-supplied
- Human cancel distinct
- Adapter fail → FAIL
- Restart preserves provenance
- Replay stop idempotent
- No double adapter cancel

---

## 15. Exit contracts (architecture cycle self-check)

Documented for Review Pack scoring; implementation not claimed.

| ID | Intent |
| --- | --- |
| X-W3B-ARCH-01…03 | C1/C2/FA ownership preserved |
| X-W3B-ARCH-04…06 | D01 gap + ≥2 options + durable/no parallel engine recommendation |
| X-W3B-ARCH-07…10 | D02 gap + ≥2 options + same lifecycle + cancel/stop/fail distinct |
| X-W3B-ARCH-11…13 | C6 consumed · OA/SQLite/ports · restart/idempotence/audit/migration explicit |
| X-W3B-ARCH-14…16 | W3-C/D/E/W4 bounded · future tests · no app implementation |

---

## 16. Morris decisions required (post ChatGPT review)

1. Validate or reject **TD-W3B-01…04** (CANDIDATE → ADOPTED or alternate).
2. Confirm accepted→`cancelled` system STOP without requiring prior `running` (reuse Cancel legality) **or** require lifecycle amendment.
3. Confirm Product SQLite M8 claim persistence vs Option B reconstruct-from-Evidence.
4. Authorize later Git integration of this addendum · then W3-B Delivery requalification · **no automatic Delivery restart**.

---

## 17. Final architecture verdict (this document)

**W3-B TARGETED TECHNICAL ARCHITECTURE ADDENDUM — CANDIDATE READY FOR CHATGPT ARCHITECTURE REVIEW**

Not validated · not adopted · W3-B remains STRUCTURALLY BLOCKED until Morris validates and Delivery is separately requalified.

---END DOC 12---

## 43. git diff --check

```
EXIT:0
```

## 44. Final fileset (architecture worktree project changes)

```
?? projects/sfia-studio/product-completion/12-product-completion-w3-b-targeted-technical-architecture-addendum.md
```

Only new architecture markdown under product-completion. No app/code.

## 45. Staged set

EMPTY

## 46. No code modification proof

Architecture worktree shows only untracked product-completion doc 12. No .ts/.tsx/SQL/migration changes.

## 47. No project commit/push/PR proof

Architecture branch not pushed. No project git commit. Handoff L3 publish is separate (sfia/review-handoff only).

## 48. X-W3B-ARCH-01…16 matrix

| ID | Result | Proof |
| --- | --- | --- |
| X-W3B-ARCH-01 | **PASS** | C1 preserved |
| X-W3B-ARCH-02 | **PASS** | C2 SUCCESS/STOP/FAIL preserved |
| X-W3B-ARCH-03 | **PASS** | FC-09/10/11/12 ownership preserved |
| X-W3B-ARCH-04 | **PASS** | Repo: Memory CE; no EO/ER assessments |
| X-W3B-ARCH-05 | **PASS** | Options A/B (+C rejected) |
| X-W3B-ARCH-06 | **PASS** | Option A durable; no parallel engine |
| X-W3B-ARCH-07 | **PASS** | Cancel/Start/RTA5-08/U2b inventory |
| X-W3B-ARCH-08 | **PASS** | S1/S2/S3 compared |
| X-W3B-ARCH-09 | **PASS** | Same Attempt cancelled + real guard facts |
| X-W3B-ARCH-10 | **PASS** | Cancel / system STOP / FAIL distinct |
| X-W3B-ARCH-11 | **PASS** | C6 CLOSED baseline consumed |
| X-W3B-ARCH-12 | **PASS** | OA / Product SQLite / ports reused |
| X-W3B-ARCH-13 | **PASS** | Restart/idempotence/audit/migration explicit |
| X-W3B-ARCH-14 | **PASS** | W3-C/D/E/W4 bounded |
| X-W3B-ARCH-15 | **PASS** | Future test contracts listed |
| X-W3B-ARCH-16 | **PASS** | No application implementation |

## 49. Open reserves / debt

- Product U2/U2b implementation remains C6 delivery debt
- Dirty W3-B delivery candidate remains structurally blocked pending validation
- Optional Morris decision: require running before STOP vs accept accepted->cancelled system STOP
- Roadmap/doc11 truth sync deferred

## 50. Final recommendation

After Morris validation: TD-W3B-01…04 as recommended (durable CE+EO/ER; FC-10 system stop use case; harvest U2/U2b; no parallel engines).

## 51. Morris decisions required

1. Validate/reject TD-W3B-01…04
2. Confirm accepted->cancelled system STOP without lifecycle amendment
3. Confirm M8 claim persistence vs Option B
4. Later authorize Git integration of doc 12 then W3-B Delivery requalification

## 52. Final verdict

**W3-B TARGETED TECHNICAL ARCHITECTURE ADDENDUM — CANDIDATE READY FOR CHATGPT ARCHITECTURE REVIEW**

## 53. Recommended next gate

ChatGPT detailed architecture review -> Morris architecture validation/arbitration -> only then candidate Git integration -> post-merge truth -> W3-B Delivery requalification -> only then resume W3-B code correction.

No automatic Delivery restart.

---

### State to preserve

W1 CLOSED · W2 CLOSED · W3-A CLOSED · W3-B IN PROGRESS / STRUCTURALLY BLOCKED · W3 IN PROGRESS / NOT CLOSED · W3-C/D/E NOT STARTED · C6 CLOSED · REAL OUT · FINOPS FREEZE · W4 OUT · PRODUCT COMPLETION INCOMPLETE · RUNTIME V3 NON ADOPTED
