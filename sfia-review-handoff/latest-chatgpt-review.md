# ChatGPT Review Pack — FinOps Technical Lot T4 — Architecture Decisions Applied

## 1. Date / heure / fuseau

- Work CEST: 2026-08-07 21:46:34 CEST (+0200)
- Work UTC: 2026-08-07 19:46:34 UTC
- Cycle: 6 — Architecture technique
- Mode: T4 Architecture Arbitration — Decisions Applied
- Profil: **Critical**
- Typologie: EVOL / DOC / ARCH

## 2. Morris phrase exacte

```
ok go
```

## 3. Contextual interpretation (exact package)

GO compris comme validation des recommandations candidates du pack 148:

| Decision | Selection |
|----------|-----------|
| D-T4-EVIDENCE-01 | **B** SELECTED BY MORRIS |
| D-T4-BOUNDARY-01 | **A** SELECTED BY MORRIS |
| D-T4-DECISION-CONTRACT-01 | **B** SELECTED BY MORRIS |
| D-T4-T3-COUPLING-01 | **B** SELECTED BY MORRIS |
| D-T4-FOUNDATION-01 | **A** SELECTED BY MORRIS |
| D-T4-CALIBRATION-01 | **A** SELECTED BY MORRIS |
| D-T4-FAILURE-POSTURE-01 | fail-open — UPSTREAM SELECTED / NOT REOPENED |

No other selections. Intermediate state literal REVIEW_REQUIRED vs WOULD_BLOCK = **DEFERRED**. T6-ext-before-pilot = **DEFERRED**.

## 4. Git Truth

| Anchor | Value |
|--------|--------|
| Repo | mcleland147/sfia-workspace |
| origin/main | ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515 |
| Branch | implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement |
| Worktree | .tmp-sfia-review/worktrees/finops-t4-preparation |
| HEAD | ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515 |
| Handoff entrant tip | eaacf7937254baa4c7c7f18fc42a3b490072acc6 |
| Handoff entrant blob | 5befcff773f3cdc7e84a20e5ff2cc3f51a84f7e8 |
| Handoff entrant commit | docs(review-handoff): publish T4 preparation |
| Staged | empty |
| Project commit/push/PR | none |

## 5. Document 148 hash proof (byte-identical)

| Check | SHA-256 |
|-------|---------|
| Expected | 9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96 |
| BEFORE | 9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96 |
| AFTER | 9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96 |
| Match | **PASS — BYTE-IDENTICAL** |

148 path: `projects/sfia-studio/148-assistant-sfia-native-openai-finops-technical-lot-t4-s30-soft-enforcement-preparation.md`
148 role: PRE-ARBITRATION HISTORY — IMMUTABLE

## 6. Document 149 meta

| Field | Value |
|-------|--------|
| Path | projects/sfia-studio/149-assistant-sfia-native-openai-finops-technical-lot-t4-s30-soft-enforcement-decisions-applied.md |
| Role | POST-ARBITRATION decisions-applied |
| SHA-256 | 26a33ead6fa6a997be886fe5d254355bb8d0bb3894bdf3cffbcaa96074256276 |
| Lines | 783 |
| Bytes | 28382 |
| Sections | A–Z complete |

## 7. Six decisions + failure posture

- D-T4-EVIDENCE-01 = B — dedicated enforcement projection — SELECTED BY MORRIS
- D-T4-BOUNDARY-01 = A — optional coordinator enforcement dependency — SELECTED BY MORRIS
- D-T4-DECISION-CONTRACT-01 = B — explicit soft-control states — SELECTED BY MORRIS
- D-T4-T3-COUPLING-01 = B — T4 evidence authority + T3 sync — SELECTED BY MORRIS
- D-T4-FOUNDATION-01 = A — foundation first — SELECTED BY MORRIS
- D-T4-CALIBRATION-01 = A — no real active historical amount — SELECTED BY MORRIS
- D-T4-FAILURE-POSTURE-01 = fail-open — UPSTREAM SELECTED / NOT REOPENED

## 8. Key implications (summary)

- Soft-cap anti-claim: cannot guarantee spend ≤ S30
- Blocking authority: dedicated SoT-safe projection (not T2.observedAmount / not T3 review alone)
- ENF-B: optional coordinator dependency after create / before intent_valid / provider
- Soft-control contract: ALLOW / intermediate soft signal / BLOCK / FAILED — intermediate literal DEFERRED
- Foundation-first without real activation; historical 15/20/25/30 NOT RUNTIME-ACTIVE
- Activation prerequisites open; T5/T6-ext/T7/IAM boundaries preserved
- No code / migration / tests / project commit / push / PR

## 9. Reserves

- R-T6-RUNTIME-COMPOSITION-01 = OPEN
- R-PR-T2-API-01 = OPEN MINOR
- T6-ext-T2 = EXCLUDED
- T6-ext-T3T4 = NOT AUTHORIZED
- Exact T6-ext event names = DEFERRED
- T6-ext-before-E1-pilot = DEFERRED
- Calibration = REQUIRED before real activation
- Product IAM = NOT_SELECTED
- Privileged Morris mutations = DEFERRED
- Intermediate soft-state literal = DEFERRED

## 10. Project manifest

CREATE / untracked only:
- projects/sfia-studio/148-assistant-sfia-native-openai-finops-technical-lot-t4-s30-soft-enforcement-preparation.md
- projects/sfia-studio/149-assistant-sfia-native-openai-finops-technical-lot-t4-s30-soft-enforcement-decisions-applied.md

Staged: empty
Tracked project modifications: none

## 11. Verdict (expected)

```
READY FOR CHATGPT T4 DECISIONS-APPLIED VALIDATION /
READY FOR MORRIS T4 DELIVERY GATE
```

---

# COMPLETE DOCUMENT 149

# 149 — FinOps Technical Lot T4 — S30 Soft Enforcement — Decisions Applied

| Champ | Valeur |
|-------|--------|
| Document | `149-assistant-sfia-native-openai-finops-technical-lot-t4-s30-soft-enforcement-decisions-applied.md` |
| Lot | T4 — S30 Soft Application Cap / Soft Enforcement |
| Cycle | 6 — Architecture technique |
| Mode | T4 Architecture Arbitration — Decisions Applied |
| Profil | **Critical** |
| Typologie | EVOL / DOC / ARCH |
| CKC pilot | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate · no execution authority) |
| Status | **T4 ARCHITECTURE DECISIONS APPLIED WITH RESERVES — NO T4 DELIVERY — NO REAL S30 ACTIVATION** |
| Authority | Documentary application of Morris arbitration only |

---

## A. Statut / anti-claims

| Claim | Statut |
|-------|--------|
| D-T4-EVIDENCE-01 B SELECTED BY MORRIS | **TRUE** |
| D-T4-BOUNDARY-01 A SELECTED BY MORRIS | **TRUE** |
| D-T4-DECISION-CONTRACT-01 B SELECTED BY MORRIS | **TRUE** |
| D-T4-T3-COUPLING-01 B SELECTED BY MORRIS | **TRUE** |
| D-T4-FOUNDATION-01 A SELECTED BY MORRIS | **TRUE** |
| D-T4-CALIBRATION-01 A SELECTED BY MORRIS | **TRUE** |
| D-T4-FAILURE-POSTURE-01 fail-open UPSTREAM SELECTED / NOT REOPENED | **TRUE** |
| Exact intermediate state literal REVIEW_REQUIRED vs WOULD_BLOCK chosen | **FALSE** — **DEFERRED** |
| T6-ext-before-E1-pilot requirement decided | **FALSE** — **DEFERRED** |
| T4 Delivery authorized / executed | **FALSE** |
| Code / SQL / migration / executable tests created | **FALSE** |
| Real S30 / USD 30 runtime activation | **FALSE** |
| Historical 15/20/25/30 adopted as runtime-active | **FALSE** |
| Product IAM / session Morris identity implemented | **FALSE** |
| T5 / T6-ext / T7 Delivery advanced | **FALSE** |
| Document 148 modified | **FALSE** — preserved byte-identical |
| Project commit / push / PR / merge | **FALSE** |
| Soft-cap guarantees monthly spend ≤ S30 | **FALSE** — anti-claim affirmed |
| T2 `observedAmount` / T3 review = monetary blocking authority | **FALSE** |
| Recommendation from 148 = decision without Morris GO | **FALSE** — Morris `ok go` consumes and selects |

**Status (exact):**

> T4 ARCHITECTURE DECISIONS APPLIED WITH RESERVES — NO T4 DELIVERY — NO REAL S30 ACTIVATION — NO IAM / T5 / T6-EXT / T7

---

## B. Phrase Morris exacte et contextual interpretation

### Phrase Morris exacte

```
ok go
```

### Contextual interpretation (périmètre EXACT — no other selections)

ChatGPT had validated:

> T4 PREPARATION VALIDATED — READY FOR MORRIS ARCHITECTURE ARBITRATION

and presented the candidate package from document 148 before this cycle. Morris `ok go` is consumed as acceptance of that package **only**:

| Decision ID | Value | Status |
|-------------|-------|--------|
| D-T4-EVIDENCE-01 | **B** — T4 dedicated enforcement projection | **SELECTED BY MORRIS** |
| D-T4-BOUNDARY-01 | **A** — optional FinOps enforcement dependency in coordinator | **SELECTED BY MORRIS** |
| D-T4-DECISION-CONTRACT-01 | **B** — explicit soft-control decision states | **SELECTED BY MORRIS** |
| D-T4-T3-COUPLING-01 | **B** — T4 evidence authority + T3 human-review synchronization | **SELECTED BY MORRIS** |
| D-T4-FOUNDATION-01 | **A** — foundation first | **SELECTED BY MORRIS** |
| D-T4-CALIBRATION-01 | **A** — engine/config without real active historical amount | **SELECTED BY MORRIS** |
| D-T4-FAILURE-POSTURE-01 | fail-open | **UPSTREAM SELECTED / NOT REOPENED** |

No additional option among A/B/C alternatives in 148 is selected. No silent enrichment.

### Autorité

Morris decides. Cursor applies decisions exactly. ChatGPT validates coherence. Git remains source of truth for files and hashes.
CKC pilot 03 = candidate experimental guidance only — **no execution authority**; Morris GO in this cycle prevails.

### Gates consommées / non reçues

| Gate | Status |
|------|--------|
| T4 architecture arbitration | **REÇU / CONSUMED** via `ok go` contextualisé |
| T4 decisions-applied documentation | **AUTORISÉ** (this cycle) |
| T4 Delivery | **NON REÇU** |
| T4 commit / push / PR / merge | **NON REÇU** |
| Real calibration / E1 activation | **NON REÇU** |
| Product IAM / T5 / T6-ext / T7 | **NON REÇU** |

---

## C. Horodatage CEST + UTC

| Clock | Value |
|-------|--------|
| Décision Morris (annoncée) | 2026-08-07 CEST (+0200) — secondes exactes non inventées |
| Application documentaire (ce cycle) | 2026-08-07 21:45:04 CEST (+0200) / 2026-08-07 19:45:04 UTC |
| Document intent | Cycle 6 Architecture Critical — T4 Decisions Applied |

---

## D. Git Truth

| Anchor | Value |
|--------|--------|
| Repo | `mcleland147/sfia-workspace` |
| `origin/main` | `ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515` |
| T4 worktree | `.tmp-sfia-review/worktrees/finops-t4-preparation` |
| T4 branch | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement` |
| T4 HEAD | `ff3d0c097b02cc7819cbc282fc0eb1a36ed1b515` (= origin/main) |
| Status before | `?? …/148-….md` (+ local `.tmp-sfia-review/` evidence) |
| Staged | empty |
| Upstream | none |
| Handoff entrant tip | `eaacf7937254baa4c7c7f18fc42a3b490072acc6` |
| Handoff entrant blob | `5befcff773f3cdc7e84a20e5ff2cc3f51a84f7e8` |
| Handoff entrant commit | `docs(review-handoff): publish T4 preparation` |
| Document 148 SHA-256 (before) | `9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96` |
| Document 148 | untracked · **byte-identical préservé** |
| Document 149 | **CREATE ONLY** (absent before cycle; absent on origin/main) |
| Project commit / push / PR | **aucun** |

---

## E. Relation 148 / 149

| Document | Role |
|----------|------|
| **148** | Historical **pre-arbitration** T4 S30 soft-enforcement preparation · option matrices · candidate recommendations · **IMMUTABLE** in this cycle |
| **149** | Authoritative **post-arbitration** record for the six T4 decision IDs selected by Morris + failure posture preserved |

**148 is IMMUTABLE in this cycle** — byte-identical preservation required.
Do **not** rewrite 148 option tables. Prior candidate recommendations (B/A/B/B/A/A + fail-open packaging) in 148 remain historical; **Morris selected** them via contextualized `ok go`.

---

## F. Sources

### Méthode (read-only)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate · no authority)
- `scripts/sfia/publish-review-handoff.sh`

### Projet (read-only)

- `123` / `125` IP-0C enforcement & technical implementation
- `138` T2–T5–T6 grouped preparation
- `145` / `146` / `147` T3 prep / decisions / execution
- **Primary pre-arbitration:** `148-…-t4-s30-soft-enforcement-preparation.md`
- Handoff entrant tip `eaacf793…` (Full Review Pack T4 preparation with complete 148)

Runtime T0/T2/T3 and execution-run surfaces referenced in 148: **read-only only** — not modified.

---

## G. Upstream decisions preserved

### From 123 (enforcement policy) — not re-opened

| ID / code | SELECTED value | Note |
|-----------|----------------|------|
| `D-ASST-IP0C-ENFORCEMENT-01` | **E1 — SOFT CONTROL WITH HUMAN GATE** | NOT IMPLEMENTED |
| S30-SOFT | Soft application cap — suspend **new** runs; engaged runs may finish | NOT IMPLEMENTED |
| Resume | Morris-only | NOT IMPLEMENTED |
| Fail-closed / hard stop of active runs / provider hard limit | **NOT SELECTED** | — |

### From 125 (technical implementation) — not re-opened

| ID | SELECTED value | Lot owner |
|----|----------------|-----------|
| `D-ASST-IP0C-TECH-ENFORCE-BOUND-01` | **ENF-B** — after run acceptance, before provider | **T4** |
| `D-ASST-IP0C-TECH-CONF-01` | Billed / PROVIDER_OBSERVED may block — ESTIMATED never; API_USAGE alone must not | **T4** |
| `D-ASST-IP0C-TECH-CONC-01` | Postgres txn — project/period lock — atomic authorization | **T4** |
| `D-ASST-IP0C-TECH-FLAG-01` | Server-side — project-scoped — default-OFF; OFF→SHADOW→MONITOR→E1-ENFORCED | **T7** |
| `D-ASST-IP0C-TECH-OVR-IMPL-01` | Durable project-scoped Morris-only override | **T5** |

### From 145–147 (T3) — not re-opened

T3 CLOSED WITH RESERVES. T3 review is human-review state — **not** monetary blocking authority. Soft-cap 30 remains T4 responsibility.

### Failure posture (this arbitration)

`D-T4-FAILURE-POSTURE-01` = fail-open — **UPSTREAM SELECTED / PRESERVED / NOT REOPENED**. Fail-closed remains incompatible.

---

## H. Arbitration result matrix

| Decision | Morris selection | Status |
|----------|------------------|--------|
| D-T4-EVIDENCE-01 | B — dedicated enforcement projection | **SELECTED BY MORRIS** |
| D-T4-BOUNDARY-01 | A — optional coordinator enforcement dependency | **SELECTED BY MORRIS** |
| D-T4-DECISION-CONTRACT-01 | B — explicit soft-control states | **SELECTED BY MORRIS** |
| D-T4-T3-COUPLING-01 | B — T4 evidence authority + T3 sync | **SELECTED BY MORRIS** |
| D-T4-FOUNDATION-01 | A — foundation first | **SELECTED BY MORRIS** |
| D-T4-CALIBRATION-01 | A — no real active historical amount | **SELECTED BY MORRIS** |
| D-T4-FAILURE-POSTURE-01 | fail-open | **UPSTREAM SELECTED / NOT REOPENED** |

Rejected / not selected in this arbitration (remain historical options in 148 only):

- EVIDENCE-01 A (direct ledger scan) / C (extend T2 aggregates)
- BOUNDARY-01 B (outer orchestrator)
- DECISION-CONTRACT-01 A (binary ALLOW/BLOCK)
- T3-COUPLING-01 A (T3 review as blocking authority)
- FOUNDATION-01 B (wait for all activation deps)
- CALIBRATION-01 B (wait for calibration before any T4 Delivery)
- FAILURE-POSTURE fail-closed (incompatible — not re-arbitrated)

---

## I. D-T4-EVIDENCE-01 — B SELECTED

**Value:** `B — T4 DEDICATED ENFORCEMENT PROJECTION`
**Status:** **SELECTED BY MORRIS**

### Contract

- T4 obtains blocking-eligible monetary view via a **dedicated derived, rebuildable projection** with `blockingEligibleAmount` + provenance.
- Projection preserves Source-of-Truth distinction required for TECH-CONF-01.
- Only blocking-eligible SoTs participate in the blocking signal:
  - **BILLED** — yes
  - **PROVIDER_OBSERVED** — yes
  - **API_USAGE** — never
  - **LOCAL_COUNT** — never
  - **PARAMETRIC_ESTIMATE** — never
  - **UNKNOWN** — never
- Estimation never blocks.
- Projection key: `projectId + UTC period + currency`.
- **No FX.** No cross-currency sum.
- Ledger / cost events remain financially authoritative.
- The T4 projection is **not** a new financial source of truth — derived / rebuildable only.

### Consequences

- T4 **must not** treat `T2.observedAmount` as blocking authority (conflates PROVIDER_OBSERVED + API_USAGE).
- T4 **must not** treat T3 review alone as monetary blocking authority.
- Future Delivery may introduce a T4 projection store/port/migration — under a separate Delivery GO.
- Direct per-run ledger scan (Option A) and T2 aggregate split (Option C) are **NOT SELECTED**.

### Non-decisions (DEFERRED to future Delivery/preparation)

- Exact SQL table / column / index names
- Exact migration timestamp
- Exact rebuild / refresh strategy
- Any scheduler (no implicit cron)
- Final Delivery schema freeze

### Anti-claims

- B SELECTED ≠ DDL / migration created
- B SELECTED ≠ projection runtime live
- B SELECTED ≠ S30 activated
- B SELECTED ≠ T2 reopened

---

## J. D-T4-BOUNDARY-01 — A SELECTED

**Value:** `A — OPTIONAL FINOPS ENFORCEMENT DEPENDENCY IN COORDINATOR`
**Status:** **SELECTED BY MORRIS**

### Contract

Future ENF-B insertion (documentary; not implemented now):

> After `createExecutionRun` succeeded / run accepted, **and** after current pre-engagement checks succeed, **before** `intent_valid` transition / **before** provider invocation.

- Coordinator consumes a **minimal optional server-side** T4 enforcement dependency.
- No authoritative UI control.
- When E1-ENFORCED is active and decision is BLOCK → provider **never** invoked.
- Already-engaged runs are **not** interrupted; only **new** runs are in scope.
- No DB transaction / advisory lock held across provider I/O.
- Optional / inactive dependency **must not** silently activate S30.
- Outer orchestrator / split coordination (**Option B**) = **NOT SELECTED**.

### Consequences

- Minimizes execution-run surface change vs invasive refactor.
- Preserves selected ENF-B bound from 125.
- Compose may inject enforcement optionally — default inactive until activation gates.

### Non-decisions (DEFERRED)

- Exact port name
- Exact dependency field name
- Exact wiring / composition runtime

### Anti-claims

- A SELECTED ≠ coordinator code modified now
- A SELECTED ≠ enforcement dep live
- A SELECTED ≠ E1 active

---

## K. D-T4-DECISION-CONTRACT-01 — B SELECTED

**Value:** `B — EXPLICIT SOFT-CONTROL DECISION STATES`
**Status:** **SELECTED BY MORRIS**

### Contract — semantic pattern SELECTED

The decision contract must explicitly distinguish at least:

| Role | Semantic |
|------|----------|
| Authorizing result | **ALLOW** |
| Non-blocking intermediate soft signal | **INTERMEDIATE SOFT SIGNAL** = `REVIEW_REQUIRED` **or** `WOULD_BLOCK` |
| Effective block | **BLOCK** |
| FinOps technical failure | **FAILED** |

Plus diagnostics / provenance suitable for soft-control observability.

### CRITICAL — intermediate state literal = DEFERRED

Option B is **SELECTED** as the **pattern** (explicit soft states, not binary-only).

The exact intermediate-state literal:

- `REVIEW_REQUIRED`
- versus
- `WOULD_BLOCK`

remains **DEFERRED**.

**This document does NOT silently choose either name.**

Future Delivery must either:

1. obtain an explicit later Morris decision on the literal; **or**
2. demonstrate that the name is a pure implementation convention without contractual consequence.

### Constraints

- **FAILED ≠ BLOCK.** Technical FinOps failure never becomes implicit block.
- Structure must be able to support future T7 modes (**OFF / SHADOW / MONITOR / E1-ENFORCED**) without T4 activating those modes.
- Binary ALLOW/BLOCK (**Option A**) = **NOT SELECTED**.

### Anti-claims

- B SELECTED ≠ T7 modes activated
- B SELECTED ≠ intermediate literal chosen
- B SELECTED ≠ runtime enum shipped

---

## L. D-T4-T3-COUPLING-01 — B SELECTED

**Value:** `B — T4 EVIDENCE AUTHORITY + T3 HUMAN-REVIEW SYNCHRONIZATION`
**Status:** **SELECTED BY MORRIS**

### Responsibility model

| Concern | Owner |
|---------|-------|
| Monetary enforcement decision from SoT-safe view | **T4** |
| Durable human-review state | **T3** |
| T3 review state alone as monetary block authority | **NEVER** |

### Why T3-alone blocking is rejected

T3 review may be raised with `basis=observed`, which uses conflated `observedAmount` (PROVIDER_OBSERVED + API_USAGE). That does **not** prove the amount is exclusively PROVIDER_OBSERVED — violating TECH-CONF-01 if used as sole block signal.

Option A (**T3 review as blocking authority**) = **NOT SELECTED**.

### Conceptual flow

```
authoritative cost evidence
  → T4 enforcement projection / evaluation
  → T4 soft-control decision
  → optional synchronization with T3 review state
```

### Sync constraints

Synchronization with T3 must:

- be idempotent;
- not transform T3 into monetary source of truth;
- not adopt T6 event names;
- not create IAM;
- not activate ack/resolve.

### Non-decisions (DEFERRED)

- Exact synchronization mechanism / API / direction
- Exact transaction boundary for sync
- Detailed behavior when T3 sync is unavailable

### Anti-claims

- B SELECTED ≠ sync implemented
- B SELECTED ≠ T3 store changed now
- B SELECTED ≠ T6-ext authorized

---

## M. D-T4-FOUNDATION-01 — A SELECTED

**Value:** `A — FOUNDATION FIRST`
**Status:** **SELECTED BY MORRIS**

### Contract

A future T4 **foundation** Delivery **may** be proposed (under a **separate** Morris Delivery GO) before all E1 activation dependencies are available.

Foundation Delivery **may** mechanically implement (when later authorized):

- T4 contracts
- SoT-safe projection
- evaluation
- decision contract
- ENF-B integration
- tests
- derived persistence if needed
- fail-open behavior
- inactive / injected configuration

### Must remain INERT for real enforcement

Foundation **must not**:

- activate E1
- activate real S30
- adopt USD 30 as runtime-active
- introduce Product IAM
- deliver T5 override
- deliver T7 rollout
- deliver T6-ext
- claim production-ready

**Foundation capability ≠ active enforcement.**

Option B (wait for all activation deps before any T4 Delivery) = **NOT SELECTED**.

### Anti-claims

- A SELECTED ≠ T4 Delivery authorized now
- A SELECTED ≠ mechanism on main
- A SELECTED ≠ E1-ENFORCED

---

## N. D-T4-CALIBRATION-01 — A SELECTED

**Value:** `A — ENGINE / CONFIG CONTRACT WITHOUT REAL ACTIVE HISTORICAL AMOUNT`
**Status:** **SELECTED BY MORRIS**

### Contract

- Future T4 foundation may accept injected policy/config for mechanism tests.
- **No real calibration is embedded** by this arbitration.
- Historical amounts **15 / 20 / 25 / 30 USD** remain **documentary / provisional** and **NOT RUNTIME-ACTIVE**.
- In particular: **historical 30 USD ≠ active S30 configuration**.
- Future tests: **fictive fixtures only**.
- Real E1-ENFORCED activation remains **BLOCKED** until a distinct Morris **real calibration** GO.

Option B (wait for calibration before any T4 Delivery) = **NOT SELECTED** for foundation strategy (aligned with FOUNDATION-01 A).

### Anti-claims

- A SELECTED ≠ calibration done
- A SELECTED ≠ thresholds activated
- A SELECTED ≠ USD 30 wired in product config

---

## O. Failure posture — preserved / not reopened

**ID:** `D-T4-FAILURE-POSTURE-01`
**Status:** **UPSTREAM SELECTED — PRESERVED — NOT REOPENED**

### Contract

```
FinOps technical evaluation failure
  → sanitized diagnostic
  → fail-open / degraded / enforcement unavailable
  → never BLOCK solely because FinOps is unavailable
```

- Fail-closed remains **incompatible** with upstream SELECTED soft/fail-open FinOps posture.
- This arbitration does **not** create a new Morris decision on this point.
- Aligns with FAILED ≠ BLOCK under DECISION-CONTRACT-01 B.

---

## P. T4/T3 responsibility model

| Concern | T3 | T4 (after this arbitration) |
|---------|----|------------------------------|
| Durable alert / Morris review state | **Owner** | May synchronize; never owns alone as money gate |
| Monetary blocking-eligible amount | Not authority | **Owner (future)** via dedicated projection (EVIDENCE B) |
| Soft-control decision at ENF-B | Never | **Owner (future)** via optional coordinator dep (BOUNDARY A) |
| Suspend new runs at S30 | Never | **Owner (future, soft)** — inactive until activation |
| Resume / override | Deferred (IAM) | Resume policy from 123; override = **T5** |
| Soft-cap anti-claim | Affirmed | Affirmed — cannot guarantee spend ≤ S30 |

**Rule:** synchronization may be explicit; **T3 review alone never blocks**.

---

## Q. Future T4 foundation constraints

When (and only when) a separate Morris GO authorizes T4 foundation Delivery, it **must**:

1. Implement SoT-safe projection (EVIDENCE B) — not `observedAmount` as block input.
2. Place optional enforcement at ENF-B in coordinator (BOUNDARY A).
3. Expose explicit soft-control states (DECISION-CONTRACT B) without silently freezing intermediate literal.
4. Keep T4 monetary authority distinct from T3 review (T3-COUPLING B).
5. Remain default-inert / inactive (FOUNDATION A + CALIBRATION A).
6. Fail-open on FinOps technical failure (FAILURE-POSTURE preserved).
7. Never hold locks across provider invocation.
8. Never activate real S30 / historical USD 30 / E1 without later gates.
9. Not absorb T5 / T6-ext / T7 / IAM.

**T4 FOUNDATION DESIGN = SELECTED (architecture).**
**T4 FOUNDATION DELIVERY = NOT AUTHORIZED (this cycle).**
**T4 E1 ACTIVATION = NOT AUTHORIZED (this cycle).**

---

## R. Activation prerequisites

| Prerequisite | Needed for | Status now | Authorized this cycle? |
|--------------|------------|------------|------------------------|
| Morris architecture arbitration of `D-T4-*` | SELECTED T4 design | **DONE** (this cycle) | Documentation only |
| Future T4 foundation Delivery GO | Mechanism on branch/main | **NOT AUTHORIZED** | **NO** |
| Real Morris calibration of S30 amount | E1-ENFORCED | **REQUIRED / not done** | **NO** |
| Product / Morris identity binding (IAM) | Resume / privileged mutations / T5 binding | **NOT_SELECTED** | **NO** |
| T5 override capability compatible with identity | Safe override under E1 | NOT delivered | **NO** |
| T7 feature flag + rollout evidence | Controlled activation | Documentary SELECTED only | **NO** |
| Dedicated activation QA | Activation confidence | NOT run | **NO** |
| Whether T6-ext is required before first E1-ENFORCED pilot | Audit completeness before pilot | **DEFERRED / NOT DECIDED** | **NO** |

**Real E1 activation = BLOCKED** until calibration + activation deps Morris-approved.

Point “T6-ext before first E1 pilot” remains explicitly **DEFERRED** — not qualified as optional or mandatory.

---

## S. T5 / T6 / T7 boundaries

### T5

- Morris-only override = conceptually SELECTED upstream (123/125).
- T5 runtime = **NOT DELIVERED**.
- Product IAM = **NOT_SELECTED**.
- Existing AuthorityResolver = authority evidence ≠ authenticated Morris session identity.
- No T5 work in this cycle.

### T6

| Item | Status |
|------|--------|
| T6-foundation | **CLOSED WITH RESERVES** |
| T6-ext-T2 | **EXCLUDED** |
| T6-ext-T3T4 | **NOT AUTHORIZED** |
| Exact T6-ext event names | **DEFERRED** |
| Necessity of T6-ext before first E1 pilot | **DEFERRED** |

### T7

- Feature-flag architecture SELECTED documentary: server-side · project-scoped · default-OFF.
- Rollout target SELECTED documentary: OFF → SHADOW → MONITOR → E1-ENFORCED.
- T7 runtime = **NOT DELIVERED**.
- T4 **must not** absorb T7 activation/rollout ownership.

---

## T. Currency / Money / concurrency

### Currency / FX

- **No FX.**
- Enforcement policy key: `projectId + period + currency`.
- Never sum across currencies.
- Historical “30 USD” does not authorize a cross-currency universal cap.
- Policy absent for currency → no enforcement / explicit not configured (candidate Delivery behavior).

### Money

- Reuse T2 Money / `numeric(20,8)` exact arithmetic — no float.
- Blocking sum = eligible SoTs only (BILLED + PROVIDER_OBSERVED).

### Soft-cap semantics (anti-claim)

S30 is a **soft** application control. It **may** suspend new runs after authoritative crossing. It **cannot guarantee** monthly spend ≤ S30 because:

- billed / provider-observed facts are asynchronous;
- already-engaged runs may finish;
- no reliable future-cost reservation;
- estimation must not block;
- no FX;
- no provider hard limit SELECTED.

### Concurrency

Preserve:

- no DB lock across provider call;
- no future-cost reservation via estimation;
- isolation project / UTC period / currency;
- multi-instance via short DB constraints;
- derived projection reconstructible.

**Exact concurrency design for T4 Delivery = DEFERRED.**

---

## U. Deferred implementation details

Mandatory non-selections in this document (must remain undecided):

- Exact SQL table name / projection schema / migration timestamp
- Exact refresh / rebuild mechanism
- Exact advisory lock key
- Exact intermediate state literal **REVIEW_REQUIRED vs WOULD_BLOCK**
- Exact T3 synchronization implementation
- Exact T6-ext event names
- T6-ext-before-pilot requirement
- Product IAM design
- T5 Delivery / T7 Delivery
- Numeric TTL (`R-TECH-TTL-01` KEEP-OPEN)
- Hard FinOps mode (`R-TECH-FINOPS-HARD-01` KEEP-OPEN)
- Real S30 amount / calibration 15/20/25/30
- Activation project / UI resume-suspend surface
- Multi-currency FX policy
- Provider hard limit

---

## V. Reserves

| ID / topic | Status | Note |
|------------|--------|------|
| `R-T6-RUNTIME-COMPOSITION-01` | **OPEN** | Carried |
| `R-PR-T2-API-01` | **OPEN MINOR** | Carried |
| T6-ext-T2 | **EXCLUDED** | |
| T6-ext-T3T4 | **NOT AUTHORIZED** | |
| Exact T6-ext event names | **DEFERRED** | |
| T6-ext requirement before E1 pilot | **DEFERRED** | |
| Calibration | **REQUIRED** before real activation | |
| Product IAM | **NOT_SELECTED** | |
| Privileged Morris mutations | **DEFERRED** | |
| Local T3 branch cleanup | **SKIPPED — ACTIVE WORKTREE** / hygiene only | Not a T3-closure blocker |
| Soft-cap hard-guarantee | **ANTI-CLAIM** | Cannot promise spend ≤ S30 |
| Intermediate soft-state literal | **DEFERRED** | REVIEW_REQUIRED vs WOULD_BLOCK |

---

## W. Non-decisions

This cycle does **not** decide / authorize:

- T4 Delivery / code / migration / tests
- Real S30 activation or historical USD 30 runtime adoption
- Exact intermediate soft-state literal
- T6-ext-before-pilot necessity
- Exact SQL / refresh / lock designs
- Product IAM / privileged mutations
- T5 override Delivery
- T6-ext Delivery / event names
- T7 rollout Delivery
- Neon / provider-real
- UI surfaces
- Project commit / push / PR / merge

---

## X. Future Delivery candidate implications

**CANDIDATE ONLY — NOT AUTHORIZED — filenames not frozen**

### Likely CREATE areas (illustrative)

- FinOps enforcement port + evaluate/authorize use-case
- SoT-safe projection store / migration (EVIDENCE B)
- Memory + postgres adapters
- Unit/integration tests for eligibility filtering and ENF-B ordering
- Documentary execution follow-ons (future numbers)

### Likely MODIFY areas (minimize)

- `coordinateExecutionRun.ts` / compose — **optional** enforcement dep at ENF-B only
- Possibly types exports / finops index barrel

### PROTECTED without explicit future GO

- T2 aggregate semantics (EVIDENCE C not selected)
- T3 alert-review store as monetary authority
- T6 audit type renames without T6-ext authorization
- IAM / AuthorityResolver product binding
- Provider hard limits / FX converters

---

## Y. Gates still required

| Gate | Status |
|------|--------|
| GO Delivery T4 foundation | **REQUIRED** (separate) before any code |
| Real calibration / S30 amount | **REQUIRED** before E1-ENFORCED |
| Product Morris identity binding | **REQUIRED** before privileged resume/override |
| T5 override Delivery | separate GO |
| T7 feature-flag / rollout | separate GO |
| T6-ext event contract / before-pilot necessity | **DEFERRED** / later GO |
| Intermediate soft-state literal | **DEFERRED** / later decision or Delivery proof |
| Project commit / push / PR / merge | separate GOs |
| R-T6-RUNTIME-COMPOSITION-01 | **OPEN** |
| R-PR-T2-API-01 | **OPEN MINOR** |

---

## Z. Verdict

```
FINOPS TECHNICAL LOT T4 —
S30 SOFT ENFORCEMENT ARCHITECTURE DECISIONS APPLIED —

D-T4-EVIDENCE-01 =
B SELECTED BY MORRIS —

D-T4-BOUNDARY-01 =
A SELECTED BY MORRIS —

D-T4-DECISION-CONTRACT-01 =
B SELECTED BY MORRIS —

D-T4-T3-COUPLING-01 =
B SELECTED BY MORRIS —

D-T4-FOUNDATION-01 =
A SELECTED BY MORRIS —

D-T4-CALIBRATION-01 =
A SELECTED BY MORRIS —

FAIL-OPEN POSTURE PRESERVED —
NOT REOPENED —

DEDICATED SOT-SAFE ENFORCEMENT PROJECTION SELECTED —
MINIMAL ENF-B COORDINATOR DEPENDENCY SELECTED —
EXPLICIT SOFT-CONTROL CONTRACT SELECTED —
T4 MONETARY AUTHORITY / T3 HUMAN-REVIEW SEPARATION SELECTED —
FOUNDATION-FIRST SELECTED —
NO REAL HISTORICAL AMOUNT SELECTED —

INTERMEDIATE STATE EXACT LITERAL DEFERRED —
T6-EXT-BEFORE-E1-PILOT QUESTION DEFERRED —
EXACT SQL / MIGRATION / REFRESH DESIGN DEFERRED —

NO REAL S30 ACTIVATION —
NO HISTORICAL USD 30 RUNTIME ADOPTION —
PRODUCT IAM NOT_SELECTED —
NO T5 —
NO T6-EXT —
NO T7 —

148 PRE-ARBITRATION RECORD PRESERVED —
149 DECISIONS APPLIED RECORD CREATED —

NO CODE —
NO MIGRATION —
NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

READY FOR CHATGPT T4 DECISIONS-APPLIED VALIDATION —
READY FOR MORRIS T4 DELIVERY GATE
```

---

*Document 149 — post-arbitration record only. Document 148 remains the immutable pre-arbitration historical record.*

---

# 148 HASH PROOF APPENDIX

```
BEFORE: 9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96
AFTER:  9ff9d1ba1cedeb8b795a7ac59f0f8e4f37ef4ef773e5cb21dbaff7a647d17f96
STATUS: BYTE-IDENTICAL — PASS
```

# END OF REVIEW PACK
