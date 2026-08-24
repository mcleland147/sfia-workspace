# 12 — Product Completion W3-B Targeted Technical Architecture Addendum

| Field | Value |
| --- | --- |
| **Document** | `12-product-completion-w3-b-targeted-technical-architecture-addendum.md` |
| **Cycle** | Architecture technique (cycle type 6) — **≠ reopen Product Completion C6** |
| **Profile** | DOC / CRITICAL |
| **Milestone** | W3-B STRUCTURAL ARCHITECTURE ADDENDUM |
| **Base Git** | `origin/main` = `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| **Status** | **VALIDATED BY MORRIS** — TD-W3B-01…04 ADOPTED — 2026-08-24 |
| **Correction pass** | ARCH-R01…ARCH-R06 corrected · ChatGPT architecture re-review PASS · REVIEW-CLEAN |
| **Scope** | **W3B-D01** Contract Result Satisfaction · **W3B-D02** System-governed terminal STOP **only** |
| **Authority** | Morris = construction/architecture · ChatGPT = review · Cursor = repo-first analysis |
| **Implementation** | Architecture **ADOPTED / INTEGRATED ON MAIN** · Delivery **NOT** restarted · W3-B Delivery requires separate post-merge requalification + authorization before resumption |
| **Git integration** | PR **#410 MERGED** — merge `bcc39fba04664edc09fca782e61e5f5e70a45d35` — 2026-08-24 |

---

## 0. Purpose (exactly two questions)

### QUESTION A — W3B-D01

How can Studio durably/reconstructibly prove that the expected results and Evidence requirements of an `ExecutionContract` are actually satisfied, without weakening C2 SUCCESS and without creating a parallel claim engine?

### QUESTION B — W3B-D02

How can an actually observed post-authorization runtime guard honestly cause a terminal STOP on the **same** `ExecutionAttempt`, with system-derived provenance, without creating a Stop Engine or a second Attempt lifecycle?

Nothing else is in scope.

---

## 0.1 Correction posture (ARCH-R01…06)

ChatGPT architecture re-review returned **CHANGES REQUIRED** for ARCH-R06 after ARCH-R01…05 correction (handoff `08b7398e…` / blob `9adcd4e7…`).

Prior passes: ARCH-R01…ARCH-R05 (handoff `6b10cfe8…` / blob `60a2c068…`).

**KEEP core direction (unchanged):**

| Topic | Keep |
| --- | --- |
| D01 | Option A — ClaimEvaluation ADAPT/COMPLETE · explicit EO/ER assessment · Product SQLite durability · FC-12 assessment owner · FC-11 consumer |
| D02 | Option S2 — dedicated FC-10 system-stop use case · same Attempt lifecycle · harvest U2/U2b as guard/reconciliation source · human Cancel distinct · technical FAIL distinct |

**KEEP forbids:** no ProductOutcome · no parallel Claim Engine · no Stop Engine · no second Attempt lifecycle · no new DB technology · no C6 reopen · no client-selected Product SUCCESS/STOP/FAIL · no fake governance token.

This pass **does not** restart option analysis. It **tightens contracts** that were insufficiently precise.

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

**Product terminal Attempt path (preserve):** `accepted → running → terminal SUCCESS / STOP / FAIL`. FA Q/R/S takes Attempt **running** as source for Product terminal meaning.

### 1.2 Functional ownership (FA)

| Capability | Owns | Does not own |
| --- | --- | --- |
| **FC-09 Authorization Gate** | Confirmation semantics · effective authority · executor sufficiency · authorization / blocked | Attempt terminal STOP |
| **FC-10 Governed Execution** | ExecutionAttempt lifecycle · runtime guardrails after auth · **terminal STATE writes** | Product SUCCESS/STOP/FAIL **meaning** |
| **FC-11 Terminal Outcome Semantics** | Product meaning SUCCESS / STOP / FAIL · anti-claims · business qualification | Attempt transitions · Evidence storage · semantic EO/ER evaluator (must **consume** proven assessment) |
| **FC-12 Evidence & Review** | Evidence · ReviewBundle · Evidence hierarchy · claim discipline | Attempt lifecycle · Product outcome meaning |

**Stops** are ported by contracts/policies — **NOT** a parallel Stop Engine.

### 1.3 C6 baseline (CLOSED BY MORRIS)

| TD-C6 | Status |
| --- | --- |
| TD-C6-01…06 | **ADOPTED / CLOSED** — do **not** redecide |
| Product SQLite | **KEEP** |
| OA backbone / ports / Trajectory / Confirmation / AuthorityVerificationReceipt / Epistemic | **KEEP** |
| U2 / U2b | Design CLOSED · Product Store checkpoints **NOT IMPLEMENTED** as named U2/U2b · M4 journal pattern harvestable |

Harvest without reopening: additive Product SQLite migrations · existing ports + adapters · shared `SqliteProductStore` / UoW · restart fail-closed · idempotence · U2/U2b failure scenario #3 (external effect launched, ack durable absent → **reconciliation** · no silent retry) · no second Attempt lifecycle.

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
| W3-B | IN PROGRESS / NOT CLOSED · Architecture **ADOPTED / INTEGRATED ON MAIN** · W3B-D01/D02 **ARCHITECTURE GAP CLOSED / IMPLEMENTATION NOT YET PROVEN** · Delivery **PAUSED / NOT RESTARTED / REQUALIFICATION REQUIRED** |
| W3 | IN PROGRESS / NOT CLOSED |
| W3-C/D/E | NOT STARTED |
| C6 | CLOSED |
| Product Completion | INCOMPLETE |
| REAL / FinOps / W4 / runtime v3 | OUT / FREEZE / OUT / NON ADOPTED |

Input architecture handoff (ARCH-R01…05 corrected): commit `08b7398e71c48f1bf6eb135812e6c6d124cb3aa6` · blob `9adcd4e7b762b230a73a4b37f3b576d419899808`.
Prior architecture handoff: commit `6b10cfe835e91bf167f4a25ca255503bd2c06d2a` · blob `60a2c0689f26a8a7a2373477802f300682a9a572`.
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
| **ClaimEvaluation** | FC-12 claim discipline (T-A6-D3) | generic singular claim · `claimStatement` · RB id+frozen version · evidenceAssessments · **`status` canonical** · `criticality` · `evaluationMethod` · `confirmationAuthority` | **Memory only** on Product path today | Assesses **evidence quality vs frozen RB**; generic `structural` → Morris/N3/`decision_maker` today (`confirmClaimEvaluation.ts` L269–299; `claimEvaluationInvariants.ts` L228–237) | **No** contract-result subject · **No** mode-specific authority override · **No** EC id/version · **No** EO/ER assessments · lost on restart | **KEEP** ports/use-cases · **ADAPT** contract-result mode branch + durability |
| **claimEvidenceAssessment** | shared helper | codes ok/missing/not_verified/… | none | Evidence-support-for-PASS only | No EO/ER matching | **KEEP** |
| **EvaluateClaim / Confirm / Reject** | application | create+evaluate · confirm re-assess · reject · waiver/dispute | Memory repo | Claim verdict from evidence quality | Does not consult EC EO/ER | **KEEP** under ports · extend for contract-result mode |
| **Product SQLite / UoW** | `SqliteProductStore` | schema `m7-0.1.0` · additive M1→M7 · `runInTransaction` | Durable | EC/Evidence/RB tables; **no claim tables** | No `oa_claim_evaluations` | **KEEP** style · candidate **M8** for claims |

### 3.2 Proven representability gap (W3B-D01)

There is **no durable, reconstructible fact** that:

- each `expectedOutputs[i]` is **PASS / NOT_PROVEN / FAIL**, or
- each `evidenceRequirements[j]` is **SATISFIED / NOT_SATISFIED / NOT_PROVEN**,

bound to exact `executionContractId` + **version/fingerprint** + `executionAttemptId` + Evidence/RB refs + evaluation method + provenance.

**Forbidden equivalences (remain forbidden):**

- free-text `claimStatement` as semantic proof of Product SUCCESS
- non-empty `expectedOutputs` ⇒ satisfied
- Evidence `verified` ⇒ output satisfied
- ReviewBundle complete ⇒ output satisfied
- generic ClaimEvaluation `pass` ⇒ Contract Result PASS / Product SUCCESS
- technical Attempt `succeeded` ⇒ Product SUCCESS

### 3.3 Evaluator boundary (required)

| Layer | Owner | Stores |
| --- | --- | --- |
| 1. Expectation | **ExecutionContract** (existing) | EO/ER declarations |
| 2. Raw/technical proof | **Evidence / Attempt** (existing) | resultRef, integrity, bindings |
| 3. Assessment | **ClaimEvaluation** ADAPT with **contract-result subject/mode** (FC-12) | structured EO/ER assessments + **canonical `status`** + provenance; **`contractResultVerdict` projection only** |
| 4. Product meaning | **FC-11** | SUCCESS/STOP/FAIL qualification **consuming** proven **contract-result** assessment only (`status=pass` under §4.7) |

FC-11 must **not** become a duplicate semantic evaluator of EO/ER.
Generic ClaimEvaluation without contract-result subject is **not consumable** for Product SUCCESS.

---

## 4. W3B-D01 — Options (direction KEEP; contracts tightened)

### 4.1 Option A — CLAIMEVALUATION DURABLE (recommended candidate) — **KEEP + ARCH-R01/R02**

**Description.** Adapt existing ClaimEvaluation under existing ports:

1. Explicit **contract-result subject/mode** (see §4.6).
2. Explicit bindings + structured `expectedOutputAssessments[]` / `evidenceRequirementAssessments[]`.
3. **Canonical durable verdict** = existing `ClaimEvaluation.status` (ARCH-R06-A); **`contractResultVerdict`** is server-derived projection only — never a second durable SoT.
4. **Mode-specific confirmation authority** that bypasses generic `structural → Morris` for contract-result mode (ARCH-R06-C).
5. Persist via **new Sqlite adapter** behind existing `ClaimEvaluationRepositoryPort` (Product SQLite additive M8).
6. FC-11 consumes only durable **contract-result** assessments with **`status=pass`** under §4.7 rules (projection must agree; FC-11 never arbitrates two truths).

**Reuse.** ClaimEvaluation domain/ports/Evaluate/Confirm · Evidence/RB · EC · Product SQLite migration style · UoW.

### 4.2 Option B — reconstructible from durable assessment Evidence

Unchanged posture: credible but higher parallel-architecture risk. Not preferred.

### 4.3 Option C — new assessment aggregate outside ClaimEvaluation

**Rejected** (parallel claim owner).

### 4.4 D01 trade-off matrix

| Criterion | A Durable CE | B Reconstruct from Evidence | C New aggregate |
| --- | --- | --- | --- |
| Semantic correctness | High (explicit EO/ER + subject) | High if schema closed | High but ownership split |
| Owner coherence | FC-12 ClaimEvaluation | Ambiguous | Parallel owner — **fail** |
| Durability / restart | Native Product SQLite | Indirect | Native |
| Product path on store failure | **Fail-closed** (no Memory fallback) | Fail-closed | — |
| Schema impact | Additive M8 + CE fields | Evidence payload ADAPT | New table + new port |
| Parallel risk | Low | Medium-high | **STOP** |
| Reversibility | DEV rollback may drop M8; **not** runtime Memory fallback | Harder | Harder |

### 4.5 D01 recommendation (VALIDATED / ADOPTED BY MORRIS — Option A · TD-W3B-01)

**Adopted: Option A** with ARCH-R01/R02/R06 contracts below.

---

## 4.6 ARCH-R01 — Contract Result subject / mode

### Structured discriminant

Introduce an explicit structured subject/mode on ClaimEvaluation for assessments consumable by FC-11 as EC result proof.

**Conceptual name (illustrative, not mandatory literal):**

`subjectKind = execution_contract_result`

Equivalent repo-native discriminant is acceptable if it is:

- explicit (not inferred from free-text `claimStatement`);
- stable for FC-11 consumption filters;
- distinguishable from generic ClaimEvaluation.

### Required bindings (Contract Result ClaimEvaluation)

| Binding | Required |
| --- | --- |
| `projectId` | yes |
| `cycleInstanceId` | when applicable |
| `executionContractId` | yes |
| `executionContractVersion` | yes |
| `executionContractSemanticFingerprint` | yes |
| `executionAttemptId` | yes |
| `reviewBundleId` | yes |
| `reviewBundleVersion` | yes (frozen version expected) |
| Evidence refs | yes (required set for the assessment) |
| `expectedOutputAssessments[]` | yes |
| `evidenceRequirementAssessments[]` | yes |

### `claimStatement` role

- Remains a **human-readable / audit projection** only.
- **MUST NEVER** be the semantic source of truth for Product SUCCESS.
- Presence of `claimStatement` does **not** imply Contract Result PASS.

### Client authority

- Client **cannot** send `status=pass` (or equivalent) as a Product SUCCESS decision.
- Canonical **`ClaimEvaluation.status`** is written **server-side only** under §4.7 / §4.11 rules.
- **`contractResultVerdict`** (if present) is a **read-model projection** derived from canonical `status` + EO/ER assessments — never client-writable, never independently persisted as SoT.
- Hostile client cannot mint Contract Result PASS.

### Generic ClaimEvaluation compatibility (ARCH-R06-D preview)

- Legacy/generic ClaimEvaluation (no contract-result subject) **KEEP** for non–Product-SUCCESS claim paths (maturity support, etc.).
- Generic `pass` is **not** Contract Result PASS and is **not** consumable by FC-11 for Product SUCCESS.
- Generic **structural → Morris/N3/`decision_maker`** behavior **KEEP** outside contract-result mode (see §4.12).
- Waiver/dispute legacy behavior on generic claims is preserved **outside** Contract Result mode; Contract Result uses §4.8.

---

## 4.7 ARCH-R01 + ARCH-R06-A/B — Canonical Contract Result verdict (`ClaimEvaluation.status`)

### ARCH-R06-A — ONE canonical Contract Result verdict

For `subjectKind = execution_contract_result`:

1. **`ClaimEvaluation.status`** is the **ONLY** durable source of truth for Contract Result verdict / lifecycle.
2. **`contractResultVerdict: PASS | NOT_PROVEN | FAIL`** (formerly `globalStatus` in ARCH-R01 draft) is **NOT** a second independent durable state.
3. If `contractResultVerdict` appears in documentation or a future DTO:
   - it is a **server-derived read-model projection** only;
   - derived from canonical `ClaimEvaluation.status` + structured EO/ER assessments;
   - **never** client-writable;
   - **never** persisted as an independent second SoT;
   - **FC-11 never arbitrates** between `status` and `contractResultVerdict`.
4. **Recommendation:** keep `ClaimEvaluation.status` canonical; use `contractResultVerdict` naming to make projection role explicit. **Do not** create a second aggregate or state machine.

### Mapping: canonical status ↔ Product consumability

| Canonical `ClaimEvaluation.status` | `contractResultVerdict` projection | FC-11 Product SUCCESS consumable? |
| --- | --- | --- |
| `pass` | PASS | **Yes** (if all §4.7 conditions met at read time) |
| `not_proven` | NOT_PROVEN | **No** |
| `fail` | FAIL | **No** |
| `pending` | NOT_PROVEN | **No** |
| `evaluating` | NOT_PROVEN | **No** |
| `waived` | NOT_PROVEN | **No** (mandatory waived item ⇒ SUCCESS ineligible) |
| `disputed` | NOT_PROVEN | **No** |

FC-11 Product SUCCESS requires **`status=pass`** on a contract-result ClaimEvaluation (plus existing anti-claims). Missing assessment ⇒ **NOT_PROVEN** / SUCCESS ineligible.

### When may canonical `status` become `pass`? (ARCH-R01 §4.7 + ARCH-R06-B)

`ClaimEvaluation.status = pass` may be written **server-side only** when **ALL** hold:

1. Attempt technical state is compatible for SUCCESS evaluation (technical succeeded / terminal success path — architecture does not weaken C2).
2. EC id / version / semanticFingerprint match **exactly** the Attempt’s bound contract material.
3. Bound ReviewBundle is the **expected frozen** version.
4. All required Evidence are valid per FC-12 rules applicable to this assessment.
5. **Every mandatory** expected-output assessment is **PASS**.
6. **Every mandatory** evidence-requirement assessment is **SATISFIED**.
7. Every assisted / human_review item that is required has been **confirmed** under the applicable **mode-specific** review policy (§4.11) — not generic structural→Morris inheritance.
8. No mandatory assessment is stale, disputed, not_proven, or fail (or ER equivalent NOT_SATISFIED / NOT_PROVEN).

Otherwise canonical status remains or becomes **`not_proven`** or **`fail`** as qualified (fail-closed toward Product SUCCESS ineligibility).

### ARCH-R06-B — Mode-specific status semantics

| Status | Contract Result meaning |
| --- | --- |
| **`pending`** | Assessment not yet evaluated; **not consumable** for Product SUCCESS. |
| **`evaluating`** | Assisted/human_review awaiting required review confirmation; **not consumable** for Product SUCCESS. |
| **`pass`** | All §4.7 conditions satisfied; server-derived only; projection = PASS. |
| **`not_proven`** | Missing/stale Evidence; missing applicable evaluator; stale/wrong EC binding; required review/confirmation absent; mandatory waived item without EC amendment; any inability to prove honestly. |
| **`fail`** | Explicit negative semantic assessment: mandatory EO failed and/or ER not satisfied under applicable evaluator/review. |
| **`waived`** | May remain valid generic lifecycle concept; for Contract Result, mandatory item in waived state ⇒ **NOT Product SUCCESS eligible**; projects as NOT_PROVEN. |
| **`disputed`** | **Not consumable** for Product SUCCESS; projects as NOT_PROVEN until resolved through an explicitly governed later mechanism. |

**Explicitly forbidden implications:**

| Fact | Product SUCCESS? | Contract Result PASS (`status=pass`)? |
| --- | --- | --- |
| technical Attempt succeeded | no | no (alone) |
| Evidence verified | no | no (alone) |
| ReviewBundle complete | no | no (alone) |
| claimStatement present | no | no |
| generic ClaimEvaluation pass | no | no |
| `contractResultVerdict=PASS` without `status=pass` | no | **invalid / must not occur** |
| client-supplied pass | no | **forbidden** |

---

## 4.8 ARCH-R01 — Waiver / dispute (Contract Result)

| Condition | Product SUCCESS |
| --- | --- |
| Mandatory EO/ER **DISPUTED** | **Ineligible** |
| Mandatory EO/ER **NOT_PROVEN** | **Ineligible** |
| Mandatory EO/ER **FAIL** / NOT_SATISFIED | **Ineligible** |
| Mandatory EO/ER **WAIVED** | **Ineligible / NOT_PROVEN** — waiver does **not** auto-convert contract to Product SUCCESS |

If a business exemption must truly change expected results, it must be carried by:

- EC amendment / scope / expectation change, **or**
- a later explicitly adopted mechanism.

**Do not invent** that exemption mechanism in this addendum.

Default: waived mandatory contract-result item ⇒ SUCCESS **NOT ELIGIBLE** / **NOT_PROVEN**.

---

## 4.9 ARCH-R02 — Evaluation trust contract

**Invariant:** persisting PASS does not prove *how* EO semantics were verified. Deterministic PASS is allowed **only** when a **server-owned**, known, applicable, auditable evaluator / `ruleRef` exists for that EO/ER.

### Forbidden

- free-text EO → LLM/guess → PASS
- `resultRef` exists → PASS
- Evidence `verified` → semantic PASS
- client-asserted PASS without server derivation

### Modes

| Mode | Contract |
| --- | --- |
| **deterministic** | Server-owned evaluator/`ruleRef` applicable · required facts available · calculation reproducible · provenance recorded · else **NOT_PROVEN** |
| **assisted** | System prepares/proposes assessment · final PASS requires authorized confirmation · system alone **must not** finalize assisted as PASS |
| **human_review** | Explicit human review of Evidence/RB · confirmation of the assessment · **≠** structural HumanDecision by default · **≠** Morris construction gate by default |

Human review is an **FC-12 claim/review act**. It must **not** silently create a Pilote HumanDecision.

---

## 4.10 ARCH-R02 — EO / ER identity (tightens TD-W3B-02)

Avoid identities that depend on free-text interpretation / canonicalization.

**Prefer deterministic identity from immutable EC version material:**

```text
identity = (executionContractSemanticFingerprint, itemKind ∈ {EO, ER}, ordinal/index in that version)
```

or an equivalent tuple/hash of the same material.

**Required properties:**

| Property | Rule |
| --- | --- |
| Distinct positions | Two identical strings at two indices = **two distinct items** |
| Reorder / modification | Materializes as new EC version/fingerprint ⇒ **new identities** |
| Cross-version matching | **Forbidden** — no automatic “same semantic EO” recognition across versions |
| Assessment migration | **Forbidden** — no auto-migrate assessment to amended EC |
| Old assessment + new EC version | **STALE / NOT_PROVEN** for Product SUCCESS |

No large EO/ER DSL. EC expectation **strings** remain the expectation source for this delta; identity is positional/version-bound, not NLP.

---

## 4.11 ARCH-R06-C — Mode-specific review authority (Contract Result)

**Problem (repo-validated):** Generic ClaimEvaluation today couples `ClaimCriticality.structural` to Morris runtime authority:

- `confirmClaimEvaluation.ts` L269–299: `structural → requireMorrisGate → N3 → decision_maker → confirmationAuthority=morris`
- `claimEvaluationInvariants.ts` L228–237: structural PASS requires `confirmationAuthority=morris` and `confirmedBy.role=decision_maker`

This generic behavior **KEEP** outside contract-result mode. It **MUST NOT** automatically apply to `subjectKind=execution_contract_result`.

### Rules for Contract Result mode

1. **Evaluation method and review authority are distinct from `ClaimCriticality`.** `criticality` may remain metadata/risk/review-strength but **MUST NOT** be the sole authority selector in Contract Result mode.

2. **`deterministic`:** Only server-owned known applicable reproducible evaluator/`ruleRef`. `confirmationAuthority=system_deterministic` may finalize when all Contract Result rules satisfied.

3. **`assisted`:** System may propose/prepare; final semantic confirmation requires an **authorized FC-12 human reviewer** under an explicit **server-owned Contract Result review policy** (`contractResultReviewPolicyRef` or equivalent minimal reference — not a broad authority DSL). System alone **cannot** finalize `status=pass`.

4. **`human_review`:** Explicit human review of Evidence/RB under FC-12. `confirmationAuthority` may be `authorized_human` under that policy. This act is **NOT**, by itself:
   - a HumanDecision;
   - a ProjectTrajectory adoption decision;
   - an ExecutionAuthority grant;
   - a Morris construction gate.

5. **`ClaimCriticality.structural` MUST NOT automatically trigger** in Contract Result mode:
   - N3;
   - `requireMorrisGate`;
   - `decision_maker` role requirement;
   - `confirmationAuthority=morris`.

6. Contract Result mode requires **explicit mode-specific confirmation invariants/policy** that **override or bypass** the generic legacy criticality→authority coupling inside Evaluate/Confirm paths when `subjectKind=execution_contract_result`.

7. **Cycle profile Critical**, CKC criticality signals, Capitalization, or other cycle classification **MUST NOT** by themselves select claim review authority.

8. If another adopted product rule genuinely requires a **Pilote HumanDecision**, that HumanDecision is a **separate prerequisite/object** — not created or satisfied by ClaimEvaluation confirmation.

9. If a **Morris construction gate** is genuinely required, it remains an **EXTERNAL** construction/governance gate — not represented by Contract Result `human_review` merely because `criticality=structural`.

10. **Smallest implementable policy:** one explicit server-owned Contract Result review policy reference per assessment context (e.g. W3-B Product Completion contract-result review policy). Delivery defines concrete policy wiring; architecture defines the boundary only.

### Pilote vs Morris separation (explicit)

| Act | What it is | What it is NOT |
| --- | --- | --- |
| FC-12 Contract Result `human_review` confirm | Claim/review act under FC-12 | HumanDecision · Morris gate · execution authority |
| Generic structural ClaimEvaluation confirm (legacy) | Maturity/claim path with Morris gate | Contract Result Product SUCCESS path |
| Morris construction validation (external) | Governance gate on architecture/TD adoption | Automatic consequence of Contract Result criticality |

---

## 4.12 ARCH-R06-D — Generic ClaimEvaluation compatibility

Outside `subjectKind = execution_contract_result`:

| Behavior | Status |
| --- | --- |
| Existing ClaimEvaluation `status` semantics | **KEEP** |
| Existing critical/structural authority rules | **KEEP** |
| Existing structural → Morris/N3/`decision_maker` | **KEEP** |
| Existing EvaluateClaim / ConfirmClaimEvaluation / RejectClaimEvaluation | **KEEP** unless a later separately authorized cycle changes them |

ARCH-R06 is an **adaptation branch** inside the existing ClaimEvaluation model — **not** a global behavioral rewrite.

---

## 5. W3B-D01 — Persistence / transactional design (candidate)

### 5.1 Persistence

| Item | Candidate |
| --- | --- |
| Technology | Product SQLite **KEEP** · no new DB |
| Pattern | Mirror Evidence: `oa_claim_evaluations` + `oa_claim_evaluation_idempotency` · aggregate in `payload_json` · indexed ids |
| Schema version | Candidate bump beyond `m7-0.1.0` (e.g. M8) — **not executed this cycle** |
| Repository | `SqliteClaimEvaluationRepository` implementing existing port |
| Factory | `createSqliteEvidenceReviewServices` wire **Sqlite only** for canonical Product `/studio` |
| UoW | Existing `SqliteProductStore.runInTransaction` |
| Unique / idempotency | Existing claim idempotency key + OCC version |
| Supersession | Existing `supersedesClaimEvaluationId` · stale if EC version/fingerprint ≠ Attempt’s EC |
| Stale EC amendment | Old assessment → **NOT_PROVEN** for current SUCCESS; no auto-migrate |
| Backfill | **None.** Historical process-local CE irrecoverable. Historical Attempts without assessment → **NOT_PROVEN**. No fake PASS. |

### 5.1.1 Product SQLite — **no Memory Product fallback** (ARCH correction)

After future adoption of durable Contract Result ClaimEvaluation:

| Path | Behavior |
| --- | --- |
| Canonical Product `/studio` | **Durable SQLite ClaimEvaluation only** |
| Durable store unavailable / write fails | **Fail-closed** → operation failure / **NOT_PROVEN** → **no SUCCESS** |
| Memory ClaimEvaluation | Allowed for **unit tests / fixtures / explicitly non-product** in-memory factories only |
| Dual Product path / silent runtime fallback to Memory | **Forbidden** |

“Drop M8 / keep Memory” may remain a **DEV/architecture rollback** notion only — **not** runtime Product behavior.

### 5.2 Smallest honest assessment shape (illustrative)

```text
subjectKind: execution_contract_result
bindings: projectId, cycleInstanceId?, executionContractId, executionContractVersion,
          executionContractSemanticFingerprint, executionAttemptId,
          reviewBundleId, reviewBundleVersion, evidenceRefs[]
expectedOutputAssessments[]: { itemId(fingerprint,EO,ordinal), result, method, ruleRef?, reviewConfirmation?, provenance, evaluatedAt }
evidenceRequirementAssessments[]: { itemId(fingerprint,ER,ordinal), result, method, ruleRef?, reviewConfirmation?, provenance, evaluatedAt }
status: pending | evaluating | pass | fail | not_proven | waived | disputed
  # CANONICAL durable verdict / lifecycle — ONLY SoT
contractResultVerdict: PASS | NOT_PROVEN | FAIL
  # SERVER-DERIVED PROJECTION ONLY — NOT independent durable SoT
confirmationAuthority: system_deterministic | authorized_human | morris
  # mode-specific policy applies in Contract Result mode (§4.11); structural≠Morris by default
criticality: non_critical | critical | structural
  # metadata/risk only in Contract Result mode — NOT sole authority selector
claimStatement: human-readable projection only
```

### 5.3 Transactional units

Do **not** force single SQL transaction across external human review.

| Portion | Atomic? | Notes |
| --- | --- | --- |
| Terminal Attempt write | Existing FC-10 UoW | Unchanged |
| Evidence materialization + RB update | Existing FC-12 patterns | Unchanged |
| Contract-result assessment create/evaluate | CE UoW | Idempotent; server writes canonical `status`; derives `contractResultVerdict` projection if exposed |
| Human confirm (assisted/human_review) | Separate command | Re-assess; fail-closed |
| Crash / missing assessment | — | FC-11 → NOT_PROVEN / no SUCCESS |
| SQLite unavailable | — | Fail-closed · no Memory Product fallback |

---

## 6. W3B-D02 — Current-state inventory

### 6.1 Guard matrix

| Guard | Owner | Detection time | Attempt state | Durable evidence | Current transition | Desired W3B-D02 | Gap |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pre-auth insufficient / FC-09 blocked | FC-09 | Pre-Attempt / Start re-check | No Attempt **or** stays `accepted` on Start refuse | AuthorityVerificationReceipt `blocked` | **BLOCKED** / REFUSE | Keep BLOCKED ≠ Product STOP | Do **not** invent Attempt terminal for pre-launch block |
| CancelExecutionAttempt (human / Morris) | FC-10 | Command | → `cancelled` (incl. from `accepted`) | Attempt + audit + `stopReason` | USER_CANCEL capacity | **USER_CANCEL** ≠ SYSTEM_GOVERNED_STOP | No system path; no durable stopOrigin today |
| Start revalidation fail (TTL/authz/stale) | FC-10 + FC-09 | Start / pre-running | Remains **`accepted`** | Audit refuse · RTA5-08 | Refuse Start | **Pre-running = BLOCK/REFUSE** · **not** Product terminal STOP | Prior doc incorrectly allowed accepted→cancelled as Product STOP |
| failLaunch / RecordExecutionFailure | FC-10 | Launch / adapter | → `failed` | Attempt + errorRef/stopReason | **FAIL** | Keep FAIL | Must not map to STOP |
| REAL / M4 launch ambiguity | StartExecution + journal | Post-invoke / pre-durable running | Often **`accepted`** | Journal CREATED±LAUNCHED | Refuse relaunch | **Reconciliation first** · no invented running/cancelled/STOP | No Product U2/U2b |
| C6 U2 / U2b | C6 design | Start frontier | Design | Design markers | NOT IMPLEMENTED Product | Harvest as guard/**reconciliation** source | Not a Stop Engine |

### 6.2 Lifecycle fact

Runtime enum has **`cancelled`** (not literal `terminal_stop`). FA maps FC-11 STOP meaning onto FC-10 terminal **state** writes.

**Human Cancel** today may cancel from `accepted` or `running` — that remains an existing Cancel capacity.

**Trusted system Cancel / system-stop path:** **absent**.

### 6.3 C6 U2 / U2b harvest analysis

| Question | Answer |
| --- | --- |
| Does C6 describe fail-closed after launch ambiguity? | **Yes** (scenario #3) |
| Is Product U2/U2b implemented? | **No** |
| Does ambiguity alone equal cancelled / Product STOP? | **No** — reconciliation must determine observable truth first (ARCH-R03) |
| Is U2/U2b the only STOP class? | **No** |
| Engine? | **No** — trusted guard / reconciliation **source** only |

---

## 7. W3B-D02 — Options (direction KEEP; contracts tightened)

### 7.1 Option S1 — EXTEND CancelExecutionAttempt

Unchanged analysis: possible but higher conflation/abuse risk. Not preferred.

### 7.2 Option S2 — SEPARATE FC-10 APPLICATION USE CASE (recommended) — **KEEP + ARCH-R03/R04/R05**

Conceptual responsibility: `StopExecutionAttemptFromRuntimeGuard` (name illustrative).

- **Not** a new engine · **Not** a new lifecycle
- Orchestrates stop on the **same** Attempt toward `cancelled` **only** when honesty conditions hold (§7.5–§7.9)
- System/trusted caller only · verified guard provenance · **mandatory durable** stop provenance (§7.8)
- Leaves human `CancelExecutionAttempt` untouched
- Reuses Cancel’s **adapter cancel safety** contract for running/result_pending (§7.9)

### 7.3 Option S3 — HARVEST C6 U2/U2b AS SOLE STOP PATH

Insufficient alone. **Harvest as guard/reconciliation source feeding S2.**

### 7.4 D02 trade-off matrix

Unchanged ranking: **S2 best** · S1 possible · S3 alone incomplete. Material correction: S2 must enforce post-running/proven frontier + durable provenance + adapter ACK safety.

### 7.5 D02 recommendation (VALIDATED / ADOPTED BY MORRIS — Option S2 · TD-W3B-03/04)

**Adopted: Option S2** + **harvest S3** as guard/reconciliation source.

| Kind | Representation |
| --- | --- |
| **USER_CANCEL** | Existing Cancel path · human/Morris · durable `stopOrigin=USER_CANCEL` when provenance model lands |
| **SYSTEM_GOVERNED_STOP** | S2 path · post-running / proven execution frontier · mandatory durable server-owned provenance |
| **FAIL** | `failed` / failLaunch / RecordExecutionFailure / adapter technical fail |
| **TIMEOUT** | existing timeout (fail-adjacent; not policy STOP) |

---

## 7.6 ARCH-R03 — Product SYSTEM_GOVERNED_STOP lifecycle

**Correction:** prior candidate statement that `accepted → cancelled` system STOP has “no proven contradiction” is **incorrect** for Product Completion W3-B Product STOP.

Preserve C2/FA:

```text
accepted → running → terminal SUCCESS | STOP | FAIL
```

FA Q/R/S takes Attempt **running** as source.

### Rules

| Case | Architecture rule |
| --- | --- |
| **SYSTEM_GOVERNED_STOP** claimable as Product STOP (W3-B) | Must be **POST-RUNNING**, **or** after explicit proof that the execution frontier was actually crossed (then reconcile lifecycle idempotently toward running, then stop if still applicable) |
| **PRE-RUNNING** guard fail | FC-09 / Start **BLOCK / REFUSE / fail-closed** · **NOT** Product terminal STOP · do not create artificial Attempt terminal for pre-launch block |
| Human Cancel `accepted → cancelled` | Remains existing Cancel capacity · **≠** W3-B SYSTEM_GOVERNED_STOP semantics |
| Do not modify C2/FA | This addendum **aligns** to them; does not rewrite them |

---

## 7.7 ARCH-R03 — U2 / U2b / launch ambiguity

External launch ambiguous **≠** automatically `cancelled`.

| Observation | Required behavior |
| --- | --- |
| External effect may have launched **AND** durable running/ack missing | **Reconciliation required** |
| Reconciliation determines frontier **was** crossed | Reconcile lifecycle **idempotently** toward honest running (or equivalent proven frontier state) · **then** applicable system-governed stop may proceed |
| External state remains **indeterminate** | Fail-closed · reconciliation required · **no silent retry** · **no invented running** · **no invented cancelled** · **no Product STOP claim** |

U2/U2b = trusted **guard/reconciliation source**.
Not a Stop Engine. Not a terminal shortcut.

---

## 7.8 ARCH-R04 — Durable stop provenance **mandatory**

Prior candidate left `stopProvenance` optional. **Corrected: mandatory** for every new **SYSTEM_GOVERNED_STOP**.

**Reason:** ExecutionAttempt audit may be Console/Memory depending on wiring. Ephemeral audit alone is **not** a sufficient durable SoT for restart distinction.

Product path must retain, under **FC-10**, a minimal durable discriminant on the Attempt (or equivalent Product-durable Attempt substrate — **not** a new Guard aggregate).

### Smallest honest representation (illustrative names)

| Field | Role |
| --- | --- |
| `stopOrigin` | `USER_CANCEL` \| `SYSTEM_GOVERNED_STOP` |
| `stopCode` | stable system stop code |
| `stopSourceRef` | ref to guard/receipt/checkpoint/audit durable enough to resolve |
| `stopObservedAt` | timestamp |
| `policyVersion` / `guardVersion` | when applicable |
| `observedFactsDigest` or provenance ref | stable digest/ref; raw sensitive facts need not be stored |

### Constraints

- SYSTEM_GOVERNED_STOP provenance = **server-owned**
- Client **cannot** write `stopOrigin` / `stopCode` / system reason
- **No** Guard aggregate · **No** Stop Engine
- Restart must distinguish **without ambiguity** USER_CANCEL vs SYSTEM_GOVERNED_STOP
- Historical cancelled without trustworthy system provenance: **do not** retro-label as SYSTEM_GOVERNED_STOP

**TD-W3B-04 is prescriptive on this durability.**

### Restart reconstruction contract

After restart, Product must reconstruct from durable Attempt fields (+ durable related refs):

1. Whether terminal cancel was USER_CANCEL or SYSTEM_GOVERNED_STOP
2. stopCode / sourceRef / observedAt
3. Enough to refuse false Product STOP claims if provenance missing

If SYSTEM_GOVERNED_STOP provenance missing on a cancelled Attempt → **do not** claim Product system STOP (treat as incomplete / non-claimable for W3-B system STOP proof).

---

## 7.9 ARCH-R05 — External effect / cancel safety

S2 remains recommended, but must **not** only write `status=cancelled`.

For Attempt in `running` / `result_pending`, reuse current Cancel safety:

1. Trusted runtime guard observed
2. System Stop use case authorizes stop orchestration
3. `adapter.cancel` when an external execution may be active
4. **Only** successful applicable cancel acknowledgement may finalize Attempt as `cancelled` with SYSTEM_GOVERNED_STOP provenance
5. If cancel fails / throws / remains ambiguous:
   - **do not** claim `cancelled`
   - preserve Attempt active / reconciliation state honestly
   - preserve `cancellationRequested` / `irreversibleEffectsPossible` semantics where applicable
   - **no Product STOP terminal yet**

**Therefore:** guard observed ≠ automatically cancelled.
SYSTEM_GOVERNED_STOP becomes terminal only when the stop itself is **honestly** represented.

Later implementation should reuse a **shared internal cancellation primitive** so human and system paths do not diverge on adapter-cancel semantics. Architecture only here — no code.

---

## 7.10 Pre-auth BLOCK vs post-auth STOP (mandatory)

| Phase | Result |
| --- | --- |
| Pre-auth / pre-Attempt FC-09 insufficient | **BLOCKED** · **no** Attempt · **not** terminal STOP |
| Post-accept / **pre-running** Start guard refuse | **BLOCK / REFUSE** · Attempt may remain `accepted` · **not** Product SYSTEM_GOVERNED_STOP |
| Post-**running** (or proven frontier after reconciliation) · trusted guard observed | FC-10 system stop orchestration → terminal STOP only after honest cancel completion + durable provenance |
| Adapter technical error | **FAIL** |
| Human cancellation | **USER_CANCEL** |

Never transform every FC-09 BLOCKED into terminal STOP. Never create an Attempt solely to represent a pre-launch block.

---

## 7.11 Trusted guard fact (minimal)

A trusted guard fact must resolve:

- guard / stop code
- source owner (receipt · Start revalidation · U2b reconcile · policy version)
- project · EC id/version · Attempt id
- observed facts · timestamp
- blocking = true · still valid = true
- provenance sufficient to populate mandatory durable stop provenance

Prefer existing receipts, Attempt durable fields, C6 checkpoint markers (when implemented). **Do not** create a Guard aggregate.

---

## 8. Combined data / persistence impact register

| Object | Current storage | Candidate change | New fields | New table? | Migration? | Repo change? | UoW | Recovery | Security | Owner | Reversible? | C6 conflict? | Parallel risk |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ClaimEvaluation | Memory | Sqlite + contract-result subject + EO/ER assessments + **canonical status** | subjectKind · EC/Attempt/RB binds · assessments[] · mode-specific review policy ref | `oa_claim_evaluations` (+ idempotency) | Additive M8 candidate | Sqlite adapter | Existing | Restart reconstruct · fail-closed if store down | Client cannot write `status=pass` | FC-12 | DEV drop M8 only | No | Low |
| ExecutionContract | Sqlite | None for expectation source | — | No | No | No | — | — | — | T-A4 | — | No | None |
| Evidence / RB | Sqlite | Optional CE ref / EC version | Optional | No | Optional light | Optional | Existing | — | — | FC-12 | Yes | No | Low |
| ExecutionAttempt | Sqlite | **Mandatory** durable stop provenance for system STOP | `stopOrigin` · `stopCode` · `stopSourceRef` · `stopObservedAt` · optional version/digest | No | Additive field candidate | Attempt repo ADAPT | Existing | Restart distinguish cancel kinds | System-only write | FC-10 | Yes | No | Low |
| Cancel use case | App | Untouched (S2) | USER_CANCEL provenance when model lands | No | No | App | — | — | — | FC-10 | — | No | — |
| Stop-from-guard use case | Absent | Add FC-10 app use case + shared cancel primitive | — | No | No | New app service | Existing Attempt txn | Idempotent · ACK-gated | System caller | FC-10 | Yes | No | None if same lifecycle |
| Guard aggregate | Absent | **Do not create** | — | **No** | — | — | — | — | — | — | — | — | Avoid |
| ProductOutcome | Absent | **Forbidden** | — | **No** | — | — | — | — | — | — | — | — | Avoid |
| DB technology | Product SQLite | **KEEP** | — | — | — | — | — | — | — | C6 | — | Rede cision forbidden | — |

---

## 9. NFR / security (bounded)

| NFR | Requirement |
| --- | --- |
| Integrity | No false SUCCESS · no false SYSTEM_GOVERNED_STOP |
| Restart | Contract Result assessment reconstructible from Product SQLite · stop provenance reconstructible from durable Attempt fields |
| Idempotence | No duplicate assessment · no double stop · no double adapter cancel |
| Consistency | Exact EC version/fingerprint · Attempt · Evidence · RB bindings |
| Audit | Who/what assessed or stopped and why |
| Security | Client cannot forge PASS, stopOrigin, stopCode, or runtime guard |
| Authority | Assessment does **not** grant execution authority |
| Privacy | Evidence/diagnostic values obey current secret rules |
| Recoverability | Missing/stale assessment → NOT_PROVEN · SQLite failure → fail-closed · no Memory Product fallback · historical cancelled without system provenance ≠ SYSTEM_GOVERNED_STOP |

No invented latency/SLA targets.

---

## 10. Fake / Real qualification

| Boundary | Rule |
| --- | --- |
| TestExecutionAdapter | External executor **fake only** · may emulate success/failure/timeout/cancel ack/fail |
| Must **not** | Manufacture Product SUCCESS · manufacture runtime policy STOP token · provide final governance outcome · mint stopOrigin |
| Future deterministic proof | Same EC · same Attempt · same FC-10 transition · same Evidence · same contract-result assessment · same FC-11 |
| REAL | **OUT** |

---

## 11. Downstream impact

| Wave | Impact |
| --- | --- |
| **W3-C** | Consume **same** Evidence/RB + durable **contract-result** assessment · no second Nora path · restart-safe · fail-closed if assessment store down |
| **W3-D** | Assessment generic · **no** cycleType switch engine |
| **W3-E** | Same canonical path |
| **W4** | Presentation only · no UX work here |

### Backlog note (no mutation this cycle)

Post-merge DOC12 + Roadmap truth state is represented in this Cycle 14 documentation in merge-stable form. Repository transport/integration status is resolved from Git/PR evidence. US-P1-05 / US-P1-06 backlog annotation remains future separate controlled backlog sync if needed. **No backlog rewrite now.**

---

## 12. Adopted technical decisions

| ID | Decision | Status |
| --- | --- | --- |
| **TD-W3B-01** | Contract-result assessment = adapted ClaimEvaluation + explicit **contract-result subject/mode** + structured EO/ER assessments + **`ClaimEvaluation.status` canonical durable verdict** + **`contractResultVerdict` server-derived projection only** + **explicit mode-specific confirmation authority (no automatic legacy structural→Morris in Contract Result mode)** + Product SQLite durability; generic ClaimEvaluation unchanged outside Contract Result mode (Option A) | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24** |
| **TD-W3B-02** | EO/ER identity = deterministic immutable EC-version item identity `(semanticFingerprint, kind∈{EO,ER}, ordinal)` + explicit EC/Attempt/RB/Evidence bindings · **no** cross-version semantic matching · no auto-migrate | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24** |
| **TD-W3B-03** | SYSTEM_GOVERNED_STOP = separate FC-10 use case on same Attempt lifecycle for **post-running / proven execution-frontier** runtime guards · human Cancel distinct · pre-running block ≠ terminal STOP · adapter cancel ACK safety reused | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24** |
| **TD-W3B-04** | Runtime guard STOP provenance = **mandatory durable server-owned** stop provenance on Attempt substrate · U2/U2b harvest as reconciliation/guard source · **no** Guard aggregate · **no** Stop Engine | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24** |

### 12.1 Morris decision trace

| Field | Value |
| --- | --- |
| **Date** | 2026-08-24 |
| **Authority** | Morris — SFIA Studio construction / architecture governance |
| **Decision** | TD-W3B-01…04 **VALIDATED / ADOPTED** for W3-B |
| **Basis** | ARCH-R01…ARCH-R06 closed for architecture review · ChatGPT architecture re-review PASS · Option A REVIEW-CLEAN · Option S2 REVIEW-CLEAN · C6 remains CLOSED · no parallel Claim Engine · no Stop Engine · Product SQLite KEEP · generic ClaimEvaluation semantics outside Contract Result mode KEEP |
| **Anti-effects** | Adoption architecture ≠ merge PR #410 · ≠ Delivery restart · ≠ W3-B completion · ≠ W3 completion · ≠ Product Completion completion · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED |

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

- Generic ClaimEvaluation PASS without contract-result subject → **not consumable** for Product SUCCESS
- **`status=pass` and `contractResultVerdict=PASS` must agree**; contradictory dual verdict forbidden
- **`contractResultVerdict` alone without `status=pass`** → **not consumable** for Product SUCCESS
- Technical succeeded + EO NOT_PROVEN → **no SUCCESS**
- All mandatory EO PASS + ER SATISFIED + exact EC/Attempt/RB bindings + **`status=pass`** → SUCCESS **eligible** (anti-claims still apply)
- Waived mandatory EO/ER → **no SUCCESS** (`status` not pass / projection NOT_PROVEN)
- Disputed mandatory EO/ER → **no SUCCESS**
- Deterministic without known server evaluator/`ruleRef` → **`status=not_proven`**
- Assisted without authorized confirmation → **`status` remains evaluating / not pass**
- human_review confirmed per **Contract Result review policy** → can satisfy item · **≠** structural HumanDecision · **≠** Morris gate by default
- Contract Result with `criticality=structural` → **does NOT** auto-require Morris/N3/`decision_maker`
- Generic legacy structural ClaimEvaluation → **still requires Morris** (compatibility)
- Cycle Critical profile / CKC signal alone → **does not** select claim review authority
- Wrong EC version/fingerprint → stale / **`status=not_proven`**
- EC reorder/amend → old item ids **not** reused
- SQLite restart → exact Contract Result Assessment restored (**canonical `status` + assessments**)
- SQLite unavailable → fail-closed · **no** Memory Product fallback
- Hostile client cannot mint **`status=pass`** / cannot set `contractResultVerdict=PASS` independently

### D02

- Pre-auth insufficient → BLOCKED / no Attempt
- Accepted + pre-running guard refusal → **no** Product terminal STOP
- Running + trusted runtime guard → system stop **orchestration** (not instant success claim)
- Running + adapter cancel ACK → `cancelled` + durable SYSTEM_GOVERNED_STOP provenance
- Running + adapter cancel fail → **NOT** cancelled · **no** terminal Product STOP claim
- Running + ambiguous external cancel → reconciliation required · no invented STOP
- Human Cancel remains USER_CANCEL
- Accepted human Cancel remains distinct from Product system STOP
- Adapter failure → FAIL
- Restart → reconstruct system stop provenance
- Replay → idempotent / no double cancel
- Client cannot inject stopOrigin / stopCode / system reason
- U2/U2b ambiguity → reconciliation first · no fabricated cancelled

---

## 15. Exit contracts (architecture cycle self-check)

| ID | Intent after ARCH-R01…06 |
| --- | --- |
| X-W3B-ARCH-01 | C1 preserved |
| X-W3B-ARCH-02 | C2 SUCCESS/STOP/FAIL + **running→terminal** Product path preserved |
| X-W3B-ARCH-03 | FC-09/10/11/12 ownership preserved |
| X-W3B-ARCH-04 | D01 gap proven from repo |
| X-W3B-ARCH-05 | ≥2 D01 options compared (direction kept) |
| X-W3B-ARCH-06 | Durable contract-result CE + explicit evaluator/subject/**canonical status** contract · no parallel engine |
| X-W3B-ARCH-07 | D02 gap proven |
| X-W3B-ARCH-08 | ≥2 D02 options compared |
| X-W3B-ARCH-09 | Same Attempt lifecycle · system STOP **post-running / proven frontier** |
| X-W3B-ARCH-10 | Human cancel / system stop / adapter fail distinct |
| X-W3B-ARCH-11 | C6 CLOSED baseline consumed |
| X-W3B-ARCH-12 | OA / Product SQLite / ports reused |
| X-W3B-ARCH-13 | Restart/idempotence/audit + **mandatory durable stop provenance** + no Memory Product fallback |
| X-W3B-ARCH-14 | W3-C/D/E/W4 bounded |
| X-W3B-ARCH-15 | Future Delivery tests corrected (incl. ARCH-R06) |
| X-W3B-ARCH-16 | No application implementation |
| X-W3B-ARCH-17 | **ARCH-R06:** one canonical Contract Result verdict (`ClaimEvaluation.status`); `contractResultVerdict` projection only; Contract Result structural **≠** auto-Morris; generic legacy structural **KEEP** Morris; no second SoT / no authority engine |

---

## 16. Morris decisions / remaining gates

1. **TD-W3B-01…04** — **CLOSED** — VALIDATED / ADOPTED BY MORRIS on 2026-08-24.
2. **Product SQLite / Option A** — **CLOSED** at architecture decision level (TD-W3B-01). Option B not reopened.
3. **Contract Result review policy reference shape** — remains a bounded Delivery detail to confirm/implement within the adopted architecture (minimal server-owned policy — not broad authority DSL).
4. **Git integration** — **CLOSED** — PR **#410 MERGED** — `bcc39fba04664edc09fca782e61e5f5e70a45d35`.
5. **Post-merge documentary truth** — represented in merge-stable form in this document and the living Roadmap · repository transport/integration status **RESOLVE FROM GIT / PR EVIDENCE** · no product/Delivery authority follows from transport status alone.
6. **Delivery** — **NOT** restarted · remains subject to W3-B Delivery requalification against current main · restart requires distinct Morris authorization if qualification passes · integration of this documentation alone never authorizes restart.

~~Prior open question on accepted→cancelled system STOP as Product STOP~~ — **resolved by ARCH-R03**. No C2/FA rewrite.

---

## 17. Final architecture verdict (this document)

**W3-B TARGETED TECHNICAL ARCHITECTURE ADDENDUM — ARCH-R01…ARCH-R06 REVIEW-CLEAN — TD-W3B-01…04 VALIDATED / ADOPTED BY MORRIS — INTEGRATED ON MAIN via PR #410 / `bcc39fba04664edc09fca782e61e5f5e70a45d35`**

Architecture adopted and integrated on main · post-merge documentary truth represented in merge-stable form · repository integration status resolved from Git/PR evidence · W3-B Delivery not restarted · W3-B remains incomplete pending implementation/proof · C6 remains CLOSED · runtime v3 NON ADOPTED.
