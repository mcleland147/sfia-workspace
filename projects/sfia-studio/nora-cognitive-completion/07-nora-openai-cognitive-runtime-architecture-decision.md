# Nora Cognitive Completion — OpenAI Cognitive Runtime Architecture Decision (OD-04)

| Field | Value |
| --- | --- |
| **Document** | `07-nora-openai-cognitive-runtime-architecture-decision.md` |
| **Programme** | SFIA Studio — Nora Cognitive Completion |
| **Cycle** | Pilotage / décision projet |
| **Typology** | DOC |
| **Profile** | CRITICAL |
| **Date (Europe/Paris)** | 2026-08-30 · **post-merge truth-sync 2026-09-01** |
| **Morris decision status** | **OD-04 = CONSUMED** |
| **Decision** | **OPTION C — HYBRID OPENAI COGNITIVE RUNTIME = ADOPTED AS NORA TARGET ARCHITECTURE** |
| **Git lifecycle (CURRENT)** | **Decision record INTEGRATED ON MAIN** via PR **#445** · Option C implementation **INTEGRATED ON MAIN / POST-MERGE VERIFIED** via PR **#447** · **MW1 Delivery INTEGRATED / POST-MERGE VERIFIED** via PR **#450** · **MW1 COMPLETE / CLOSED BY MORRIS** · MW1 closure docs **INTEGRATED / POST-MERGE VERIFIED** via PR **#451** · OpenAI-native-first transverse truth-sync **INTEGRATED / POST-MERGE VERIFIED** via PR **#453** · current forward product gate = **MW2 Readiness / Requalification** · MW2 **NOT AUTHORIZED / NOT STARTED** |
| **Git lifecycle (HISTORICAL at first local record)** | Was **LOCAL DOCUMENTARY CANDIDATE** until distinct project Git integration *(pre-PR #445 · preserved as provenance)* |
| **OD04-I01** | **ACTIVE CROSS-WAVE ARCHITECTURE INVARIANT** under OD-04 · **NOT** a new architecture selection · see §4A |
| **Cross-wave cognitive trajectory** | `08-nora-openai-native-first-cognitive-trajectory.md` = **VALIDATED — ACTIVE ON MAIN** via PR **#453** · OpenAI-native-first + GPT-5.6/model-reasoning trajectory · **does not reopen OD-04** |
| **runtime v3** | **NON ADOPTED** |
| **Cognitive Completion** | **NOT PROVEN** |
| **Package / code migration** | @openai/agents / Zod + Option C runtime **INTEGRATED ON MAIN / POST-MERGE VERIFIED** via PR **#447** · MW1 scope later **COMPLETE / CLOSED BY MORRIS** · **≠** Cognitive Completion proven · **≠** Responses compaction adopted · **≠** runtime v3 adopted |
| **Evidence basis** | Static OpenAI cognitive-runtime evaluation + targeted A/B proof (P1/P2 D0+REAL PASS) · OD-04 PR **#445** · Option C implementation PR **#447** · MW1 Delivery PR **#450** · MW1 REAL boundary campaign `mw1-real-boundary-corr01-1788253662383` / SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678` · MW1 closure PR **#451** · OpenAI-native-first truth-sync PR **#453** / merge `d640b5ba7210b9da3593bea9eeae2100c6da6c09` / CI `33530815963` SUCCESS |

> **Anti-claims:** This record adopts a Nora **cognitive runtime target**. It does **not** adopt runtime v3 · does **not** by itself prove Cognitive Completion · does **not** replace SFIA business semantics · does **not** authorize MW2 · does **not** map OpenAI HITL→HD/Confirmation · does **not** map Trace→Evidence · does **not** adopt Responses compaction · **OD04-I01 ≠ new architecture decision** · **MW1 closure ≠ MW2 authorization** · **OpenAI-native-first ≠ automatic adoption of every OpenAI capability**.

---

## 1. Metadata

This document is the durable architecture decision record for **OD-04** and the OpenAI cognitive-runtime direction for Nora.

It operates **under** the already-closed Product Completion chain. Product Completion business semantics remain authoritative and unchanged in principle.

The cross-wave construction/evaluation trajectory that follows OD-04 is now separated into:

- this document = **architecture target + Studio/Nora/OpenAI boundary** ;
- `06-nora-mw0-versioned-cognitive-eval-harness-readiness.md` = **measurement/eval spine** ;
- `08-nora-openai-native-first-cognitive-trajectory.md` = **MW2→MW6 OpenAI capability-fit + model/reasoning trajectory** · **VALIDATED — ACTIVE ON MAIN via PR #453**.

---

## 2. Decision

**OD-04 = CONSUMED**

**OPTION C — HYBRID OPENAI COGNITIVE RUNTIME = ADOPTED AS NORA TARGET ARCHITECTURE**

Target principle (Morris):

> When OpenAI-provided cognitive primitives cleanly cover Nora generic cognitive plumbing, reduce custom complexity, and preserve SFIA business / authority boundaries, they should be preferred over homegrown equivalents.

Nora remains the **cognitive / reasoning layer**, not business authority.

The 2026-09-01 trajectory clarification generalizes this principle to **MW2→MW6** through a mandatory OpenAI Capability Fit Check before internal equivalents are designed. This clarification **preserves OD-04**; it does not select a new architecture.

---

## 3. Strategic construction principle

Nora Cognitive Completion must **NOT** default to rebuilding generic cognitive mechanisms internally.

For each Nora capability **MW1→MW6**:

**IF** an OpenAI primitive:

1. materially covers the capability;
2. integrates behind SFIA boundaries;
3. reduces custom cognitive plumbing;
4. does not weaken authority;
5. avoids parallel architecture;
6. remains sufficiently reversible;
7. satisfies applicable proof/security/confidentiality/cost/latency constraints;

**THEN** prefer **KEEP / ADAPT / COMBINE** toward that OpenAI primitive.

**ELSE** retain/build only the SFIA-specific missing capability, with the insufficiency/incompatibility made explicit.

For MW2→MW6 this is operationalized by `08-nora-openai-native-first-cognitive-trajectory.md` through the **OpenAI Capability Fit Check**.

This principle is **NOT** “OpenAI first regardless of fit.”

---

## 4. Immutable SFIA business spine

**KEEP (authoritative / unchanged in principle):**

- Project lifecycle
- Cycle lifecycle
- Truth C / LPS
- ProjectTrajectory
- HumanDecision
- Confirmation
- ExecutionContract
- AgentCapability / effective authority
- Evidence / ReviewBundle
- Materialization Class 1→4
- MaterializationBasis
- SFIA gates
- Pilote authority
- Product Completion chain

**Hard non-equivalences:**

| OpenAI / cognitive | ≠ | SFIA |
| --- | --- | --- |
| Session | ≠ | LPS / Truth C |
| Agent output | ≠ | HumanDecision |
| SDK approval / HITL | ≠ | HumanDecision / Confirmation |
| Trace | ≠ | Evidence |
| Tool exposed to Runner | ≠ | effective authority |
| Guardrail | ≠ | SFIA business authorization |

---

### Non-equivalences reinforced (OD04-I01)

- Studio product/business/authority ownership **≠** Nora cognition ownership
- Pilote (runtime human actor) **≠** Morris (construction / GO / governance)
- Session / model-input policy **≠** business authorization engine
- `callModelInputFilter` context integrity **≠** HD / Confirmation / effective authority
- Agents SDK Runner **≠** SFIA `routeToolCall` / authority spine replacement
- Option C implementation INTEGRATED (PR **#447**) **≠** Option C REAL parity PROVEN · **≠** ChatGPT↔Cursor parity PROVEN · **≠** Cognitive Completion proven
- MW1 COMPLETE / CLOSED **≠** MW2 authorized · **≠** runtime v3 adopted

---

## 4A. OD04-I01 — Studio ↔ Nora architecture boundary (ACTIVE)

**OD04-I01 = ACTIVE CROSS-WAVE ARCHITECTURE INVARIANT** under OD-04.

This clarification does **not** select a new architecture, reopen Product Completion, mutate the v3 product doctrine, or adopt runtime v3.

### 4A.1 Ownership split

| Layer | Owns | Does not own |
| --- | --- | --- |
| **SFIA Studio** | product semantics · business objects · **authority MODEL / policy / validation / enforcement** · durable **HumanDecision** and **Confirmation** product objects + governed lifecycle (qualification/materialization · persistence · scope · validity · enforcement) · LPS / Truth C / ProjectTrajectory · materialization / Evidence · policy gates | Nora cognition internals · **does not replace Pilote as decision/confirmation actor** |
| **Nora** | cognition · reasoning · Session continuity · Runner loop / tool orchestration · recommendations / options analysis · may explain why Confirmation is required | business authorization · deciding/granting HD or Confirmation · Truth C mutation · effective authority |
| **Pilote** | **runtime human decision actor** for HumanDecision · **runtime human confirmation actor** where Confirmation is required | Morris construction/governance identity |
| **Morris** | construction · GO · governance · programme decisions | **runtime persona** · product Pilote substitute |

**Meaning of “Studio owns authority” (normative):** Studio owns the product authority **model**, durable authority state, policy, validation and enforcement. It does **not** mean Studio is the human decision actor.

**HumanDecision split:** decision actor = **Pilote** · durable governed product object + materialization/persistence/scope/provenance/enforcement = **SFIA Studio** · cognition/recommendation support = **Nora** · Nora = **no authority**.

**Confirmation split:** confirmation actor = **Pilote** · durable governed boundary/object/state + requiredness/scope/context/validity/enforcement = **SFIA Studio** · explanation/clarification/request support = **Nora** · Nora = **no authority**.

### 4A.2 Responsibility matrix (summary)

| Concern | Studio | Nora | Pilote | Morris |
| --- | --- | --- | --- | --- |
| Product / business truth | **OWNS** | consumes context | decides when required | governs programme |
| Cognition / reasoning | supplies constraints | **OWNS** | receives recommendations | does not runtime-personify |
| Authority **model** / policy / enforcement | **OWNS** | no authority | — | construction GOs only |
| HumanDecision | **OWNS** durable object + qualification/materialization / persistence / scope / provenance / enforcement | may recommend only · never decides/materializes HD | **decision actor** | construction GOs only |
| Confirmation | **OWNS** durable boundary/object/state + requiredness / scope / context / validity / enforcement | may explain/ask · never grants Confirmation | **confirmation actor** | construction GOs only |
| Session / model-input integrity | supplies authoritative context | **OWNS** filter/policy for cognition | — | — |
| Evidence / ReviewBundle | **OWNS** | may propose cognitive observables | — | — |

### 4A.3 Invariants

1. Studio supplies authoritative product/business context; Nora consumes it for cognition.
2. Session / `callModelInputFilter` / model-input policy = **cognitive context integrity only** · **≠** keyword GO/HD redaction-as-authorization · **≠** Morris-GO runtime primitive.
3. **Pilote = generic runtime human actor** (decides / confirms where required) · **Morris = construction/governance ≠ runtime persona**.
4. OpenAI HITL **≠** HD/Confirmation · Trace **≠** Evidence · server-managed Truth C **FORBIDDEN**.
5. No parallel Nora product/authority path · no second Truth C · no Morris runtime persona.
6. Utterance (“go” / “I authorize” / “I choose B”) **≠** automatic durable authority — becomes HD/Confirmation only via Studio qualification/materialization path.
7. OpenAI-native-first changes **where generic cognition is sourced**, never **who owns business authority**.

### 4A.4 Utterance / naming rules

- Prefer **Pilote** for runtime human actor language.
- Prefer **Morris** only for construction / GO / governance utterances.
- Forbidden active claim: Nora runtime treats “Morris GO” as a product authorization primitive.

### 4A.5 Canonical flow

```text
Pilote utterance
  → SFIA Studio
  → authoritative project / business context
  → cognitive constraints + available tools
  → Nora / Session / Runner / cognition
  → analysis / options / recommendations
  → SFIA Studio
  → qualification / materialization / gate
  → Pilote HumanDecision or Confirmation where required (Pilote = actor)
  → SFIA Studio resolves effective authority from governed product state
  → executor
```

Nora is **not** the owner of HD, Confirmation, LPS, ProjectTrajectory, ExecutionContract, effective authority, or Evidence. Studio owns the durable HD/Confirmation **objects and lifecycle**; Pilote remains the **decision/confirmation actor**.

### 4A.6 Option C implementation + MW1 closure truth

**Option C implementation = INTEGRATED ON MAIN / POST-MERGE VERIFIED** via PR **#447** · merge `127c6ecf5658e7f3954d94b2cef8269ab9eaf07e` · post-merge CI **`33338927956` SUCCESS** · Required Gate **PASS** · source branch **PRESERVED**.

Correction themes consumed/closed :

| ID | Class | Meaning |
| --- | --- | --- |
| **CORR-OPT-C-01** | BLOCKING / REDEFINED · **CLOSED** | Nora runtime business-authority agnostic; filter = context integrity only; no keyword GO/HD redaction-as-authorization; no Morris-GO runtime primitive; Studio supplies context and owns materialization |
| **CORR-OPT-C-02** | BLOCKING / NARROWED · **CLOSED** | Runner owns generic loop/boundedness; correct observables/limits; no duplicate homegrown generic loop |
| **CORR-OPT-C-03** | REQUIRED · **CLOSED** | Product SQLite Session batch writes atomic/recoverable (continuity integrity ≠ business authority) |
| **CORR-OPT-C-04** | REQUIRED / APPROACH REPLACED · **CLOSED** | Prefer Studio ToolDefinition schema → thin SDK adapter → `routeToolCall`; avoid unnecessary custom schema translation |
| **CORR-OPT-C-05** | REQUIRED PROOF / REDEFINED · **CLOSED** | Authority proof demonstrates Studio authorization/policy boundary — not a Nora-local fake authority engine |

**Lifecycle consumed after OD-04:**

1. MW1 Option C correction cycle — **CLOSED**
2. deterministic Runner / Fake convergence — **CLOSED**
3. Fake / tests / comparator migration to target path — **CLOSED**
4. legacy Nora generic `runToolCallingLoop` retirement — **CLOSED**
5. Option C project Git integration — **CLOSED / POST-MERGE VERIFIED** (PR **#447**)
6. MW0 Option C regression/parity gate — **PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY** · MW0 remained historically CLOSED
7. MW1-S01/S02/S03 Delivery — **INTEGRATED / POST-MERGE VERIFIED** (PR **#450**)
8. MW1 deterministic proof — **PASS**
9. MW1 REAL boundary — **PROVEN** · campaign `mw1-real-boundary-corr01-1788253662383` · evidence SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678`
10. MW1 closure — **COMPLETE / CLOSED BY MORRIS**
11. MW1 closure documentary lifecycle — **INTEGRATED / POST-MERGE VERIFIED** (PR **#451**)
12. OpenAI-native-first cross-wave truth-sync — **INTEGRATED / POST-MERGE VERIFIED** (PR **#453** · merge `d640b5ba7210b9da3593bea9eeae2100c6da6c09` · CI `33530815963` SUCCESS)
13. current forward product gate — **MW2 Readiness / Requalification** · **MW2 NOT AUTHORIZED / NOT STARTED**

Historical wording that presented MW1-S01/S02/S03, MW1 closure or the pre-MW2 truth-sync as FUTURE is superseded by this section for forward-path truth.

---

## 5. Adopted cognitive target (Option C)

| Component | Disposition |
| --- | --- |
| **Agents SDK Runner** | **ADOPTED TARGET / IMPLEMENTED ON PRODUCT PATH** for generic Nora agent/tool loop |
| **Custom Product SQLite Session** | **ADOPTED TARGET / IMPLEMENTED AT MW1 SCOPE** for Nora conversational / inter-session continuity |
| **callModelInputFilter / Session policy** | **ADOPTED TARGET PATTERN / IMPLEMENTED AT MW1 SCOPE** for context replay + authority isolation |
| **SFIA tools / `routeToolCall` / business authorization** | **KEEP** — wrapped/adapted behind Runner; authority stays SFIA |
| **nora-eval** | **KEEP / ADAPT** as SFIA eval semantics / evidence spine |

Proof evidence retained :

- P1 PASS: custom SQLite Session · Project isolation · restart/resume · no Truth C mutation · input-authority isolation
- P2 PASS: same SFIA read-only tool · Agents Runner path · same `routeToolCall` · bounded REAL PASS
- MW1 deterministic + REAL boundary proof subsequently closed the current MW1 scope
- Business/authority spine preserved
- Meaningful generic custom plumbing retirement achieved

---

## 6. Not adopted

| Component | Status |
| --- | --- |
| OpenAIResponsesCompactionSession / `responses.compact` | **CANDIDATE / NOT ADOPTED** — MW1 closed using current governed compaction/model-input boundary without adopting Responses compaction |
| OpenAI HITL | **NOT** a replacement for HD/Confirmation |
| OpenAI Trace | **NOT** Evidence — cognitive observability only |
| Hosted tools / MCP | **not automatically adopted** · future capability fit where relevant (notably MW6) |
| Server-managed Truth C | **FORBIDDEN** |
| runtime v3 | **NON ADOPTED** |
| Production model routing | **NOT SELECTED** |

---

## 7. Asset dispositions — historical migration provenance

The former Baseline A remains historical/evidence provenance. Option C product migration is now integrated and MW1 closed.

| Historical asset | Disposition / current truth |
| --- | --- |
| `resumePrompt` / manual Memory B stitching | replaced/retired from target product path as applicable |
| custom Nora `runToolCallingLoop` path | **RETIRED FROM TARGET PRODUCT PATH** |
| `MemoryBService` / sqlite Memory B surfaces | reassessed under Session target; current MW1 scope closed |
| `materializationBasis` | **KEEP SFIA authority semantics** |
| `materializeToTruthC` | **KEEP SFIA authority semantics** |
| A/B proof spike `.tmp-openai-cognitive-ab/**` | provenance/temp evidence only · not product architecture |

---

## 8. MW1 closure and forward implications

MW1 is no longer an active Delivery surface.

**CURRENT:**

- MW1 **COMPLETE / CLOSED BY MORRIS** ;
- Delivery PR #450 integrated/post-merge verified ;
- deterministic proof PASS ;
- REAL boundary PROVEN ;
- closure docs PR #451 integrated/post-merge verified ;
- Responses compaction remains **CANDIDATE / NOT ADOPTED** ;
- MW2 remains **NOT AUTHORIZED / NOT STARTED**.

The architectural lesson carried forward is:

> **Use OpenAI for generic cognitive mechanics when fit is proven; preserve SFIA-specific business/authority semantics and build only the missing delta.**

This lesson is now generalized for MW2→MW6 in **doc08 VALIDATED / ACTIVE ON MAIN** and in **Build Doctrine R22 ACTIVE ON MAIN**, both integrated via PR **#453**.

---

### MW0 REGRESSION / PARITY ON OPTION C

**MW0 remains CLOSED** historically. MW0 historical Evidence remains valid. OD-04 did **not** reopen MW0.

Current gate result retained:

- **PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** ;
- Evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` ;
- historical R1/R2/R3 retained/not re-run/not upgraded by that regression gate ;
- MW0-R01/R02 remain NOT_PROVEN/NB ;
- RESERVE-OPT-C-02/03 remain OPEN/NB ;
- DETERMINISTIC PROVEN ≠ REAL BOUNDARY PROVEN ≠ END-TO-END REAL PROVEN.

This regression gate is historical input to the now-closed MW1 trajectory. Future MW2→MW6 config/model claims consume the **MW0 eval spine**, not a new eval framework.

---

## 9. MW0→MW6 application rule — current form

For every future Nora macro-wave:

1. identify the desired cognitive outcome and SFIA-specific boundary ;
2. perform the **OpenAI Capability Fit Check** from active doc08 / Build Doctrine R22 ;
3. map official/current OpenAI candidates ;
4. compare with existing SFIA/Nora assets ;
5. preserve Studio/Pilote business/authority ownership ;
6. choose KEEP/USE · ADAPT · COMBINE · COMPLETE/BUILD · DEFER/REJECT ;
7. prove cognitive claims through MW0 D0/R1/R2/R3 semantics as applicable ;
8. do not build a homegrown generic equivalent by default when a mature native primitive fits ;
9. do not alter source-locked C5 story semantics by this rule alone.

OpenAI provider/model capabilities are **current inputs** and must be revalidated when claims depend on them. They are not embedded here as permanent architecture invariants.

---

## 10. Architecture risks / debt

| Risk / debt | Exit |
| --- | --- |
| SDK dependency / update burden | version pin + adapter boundary |
| Zod dependency | integrated; maintain adapter boundary/version discipline |
| Tracing privacy | tracing disabled/redacted as applicable; Trace ≠ Evidence |
| Vendor coupling | reversible adapters; KEEP SFIA tools/authority |
| Session schema lifecycle | current MW1 scope proven; future expansion only if a capability needs it |
| Compaction semantics | Responses compaction **CANDIDATE / NOT ADOPTED**; no automatic adoption |
| Provider capability drift | revalidate exact model/service capability per campaign/readiness when claim depends on it |
| Model-routing complexity | **do not introduce** unless comparative evidence creates a real need + distinct Morris gate |

---

## 11. Exit / next gate — current truth

OD-04 architecture target and implementation migration are **consumed/integrated**.

MW1 is **COMPLETE / CLOSED BY MORRIS**.

Pre-MW2 transverse documentary truth-sync is **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** via PR **#453**.

Current sequence is:

```text
MW2 Readiness / Requalification
  → Morris qualification validation
  → distinct MW2 Delivery GO
  → MW2 Delivery only if authorized
```

Cross-wave active trajectory:

- OpenAI Capability Fit Check **mandatory MW2→MW6** ;
- GPT-5.6/model/reasoning current truth lives in active doc08/MW0 evidence, not as OD-04 invariant ;
- Production model routing **NOT SELECTED** ;
- MW2 OD-02 remains **OPEN** ;
- MW2 **NOT AUTHORIZED / NOT STARTED**.

---

## 12. Final documentary verdict

**NORA OD-04 OPTION C ARCHITECTURE DECISION — PRESERVED / CONSUMED**

= OPTION C ADOPTED AS NORA TARGET ARCHITECTURE
= OPTION C IMPLEMENTATION INTEGRATED / POST-MERGE VERIFIED (PR #447)
= OD04-I01 ACTIVE — STUDIO OWNS PRODUCT/BUSINESS/AUTHORITY MODEL · NORA OWNS COGNITION
= PILOTE = RUNTIME HUMAN DECISION/CONFIRMATION ACTOR · MORRIS = CONSTRUCTION/GOVERNANCE
= AGENTS SDK RUNNER TARGET IMPLEMENTED
= CUSTOM PRODUCT SQLITE SESSION TARGET IMPLEMENTED AT MW1 SCOPE
= SESSION / MODEL-INPUT POLICY = COGNITIVE CONTEXT INTEGRITY (≠ business authorization engine)
= SFIA BUSINESS / AUTHORITY SPINE PRESERVED
= RESPONSES COMPACTION NOT ADOPTED
= MW1 COMPLETE / CLOSED BY MORRIS
= MW1 REAL BOUNDARY PROVEN
= OPENAI-NATIVE-FIRST MW2→MW6 TRAJECTORY = VALIDATED / ACTIVE ON MAIN VIA PR #453
= BUILD DOCTRINE R22 = VALIDATED / ACTIVE ON MAIN VIA PR #453
= PRODUCTION MODEL ROUTING NOT SELECTED
= PRE-MW2 TRANSVERSE DOCUMENTARY TRUTH-SYNC = COMPLETE / INTEGRATED / POST-MERGE VERIFIED
= MW2 READINESS/REQUALIFICATION = NEXT PRODUCT CAPABILITY
= MW2 NOT AUTHORIZED / NOT STARTED
= COGNITIVE COMPLETION NOT PROVEN
= RUNTIME V3 NON ADOPTED
= NO NEW ARCHITECTURE SELECTION BY THIS TRUTH-SYNC
