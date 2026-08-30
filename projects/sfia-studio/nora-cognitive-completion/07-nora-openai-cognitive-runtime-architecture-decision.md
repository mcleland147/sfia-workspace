# Nora Cognitive Completion — OpenAI Cognitive Runtime Architecture Decision (OD-04)

| Field | Value |
| --- | --- |
| **Document** | `07-nora-openai-cognitive-runtime-architecture-decision.md` |
| **Programme** | SFIA Studio — Nora Cognitive Completion |
| **Cycle** | Pilotage / décision projet |
| **Typology** | DOC |
| **Profile** | CRITICAL |
| **Date (Europe/Paris)** | 2026-08-30 |
| **Morris decision status** | **OD-04 = CONSUMED** |
| **Decision** | **OPTION C — HYBRID OPENAI COGNITIVE RUNTIME = ADOPTED AS NORA TARGET ARCHITECTURE** |
| **Git lifecycle (CURRENT)** | **Decision record INTEGRATED ON MAIN** via PR **#445** · merge commit `4f00a2ad5e58310392e2efb562174d32ad8240e8` · **Option C TARGET ADOPTED** · **implementation migration NOT YET INTEGRATED** |
| **Git lifecycle (HISTORICAL at first local record)** | Was **LOCAL DOCUMENTARY CANDIDATE** until distinct project Git integration *(pre-PR #445 · preserved as provenance)* |
| **OD04-I01** | **ACTIVE CROSS-WAVE ARCHITECTURE INVARIANT** under OD-04 · **NOT** a new architecture selection · see §4A |
| **runtime v3** | **NON ADOPTED** |
| **Cognitive Completion** | **NOT PROVEN** |
| **Package / code migration** | **NOT AUTHORIZED by this documentary decision record alone** · local MW1 Option C candidate may exist elsewhere · **≠** integrated |
| **Evidence basis** | Static OpenAI cognitive-runtime evaluation + targeted A/B proof (P1/P2 D0+REAL PASS) · OD-04 documentary integration PR **#445** · MW1 implementation CRITICAL review handoff tip `56948ddaef780b9f2a5ffa65d784afdcb9917caf` *(review evidence only · ≠ project integration)* |

> **Anti-claims:** This record adopts a Nora **cognitive runtime target**. It does **not** adopt runtime v3 · does **not** by itself complete MW1 · does **not** prove Cognitive Completion · does **not** replace SFIA business semantics · does **not** authorize MW2 · does **not** map OpenAI HITL→HD/Confirmation · does **not** map Trace→Evidence · does **not** adopt Responses compaction · **OD04-I01 ≠ new architecture decision** · **PR #445 merged ≠ MW1 implementation integrated**.

---

## 1. Metadata

This document is the durable architecture decision record for **OD-04** and the OpenAI cognitive-runtime direction for Nora.

It operates **under** the already-closed Product Complete Chain. Product Completion business semantics remain authoritative and unchanged in principle.

---

## 2. Decision

**OD-04 = CONSUMED**

**OPTION C — HYBRID OPENAI COGNITIVE RUNTIME = ADOPTED AS NORA TARGET ARCHITECTURE**

Target principle (Morris):

> When OpenAI-provided cognitive primitives cleanly cover Nora generic cognitive plumbing, reduce custom complexity, and preserve SFIA business / authority boundaries, they should be preferred over homegrown equivalents.

Nora remains the **cognitive / reasoning layer**, not business authority.

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

**THEN** prefer **KEEP / ADAPT / HARVEST / REPLACE** toward that OpenAI primitive.

**ELSE** retain/build the SFIA-specific implementation.

This principle is **construction guidance** under the current Morris decision.

It is **NOT** “OpenAI first regardless of fit.”

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
- PR **#445** decision integration **≠** MW1 Option C implementation integration
- Local MW1 candidate CRITICAL review **≠** MW1 COMPLETE / INTEGRATED

---

## 4A. OD04-I01 — Studio ↔ Nora architecture boundary (ACTIVE)

**OD04-I01 = ACTIVE CROSS-WAVE ARCHITECTURE INVARIANT** under OD-04.

This clarification does **not** select a new architecture, reopen Product Completion, mutate Build Doctrine, or adopt runtime v3 framing.

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

### 4A.6 Correction trajectory note (documentary only)

Local MW1 Option C migration work exists as **LOCAL / UNCOMMITTED** candidate and has undergone **CRITICAL review**. It is **NOT INTEGRATED**. Required correction themes (trajectory capitalization only — **not executed by this record**):

| ID | Class | Meaning |
| --- | --- | --- |
| **CORR-OPT-C-01** | BLOCKING / REDEFINED | Nora runtime business-authority agnostic; filter = context integrity only; no keyword GO/HD redaction-as-authorization; no Morris-GO runtime primitive; Studio supplies context and owns materialization |
| **CORR-OPT-C-02** | BLOCKING / NARROWED | Runner owns generic loop/boundedness; correct observables/limits; no duplicate homegrown generic loop |
| **CORR-OPT-C-03** | REQUIRED | Product SQLite Session batch writes atomic/recoverable (continuity integrity ≠ business authority) |
| **CORR-OPT-C-04** | REQUIRED / APPROACH REPLACED | Prefer Studio ToolDefinition schema → thin SDK adapter → `routeToolCall`; avoid unnecessary custom schema translation; exact SDK API check in later code cycle |
| **CORR-OPT-C-05** | REQUIRED PROOF / REDEFINED | Authority proof must demonstrate Studio authorization/policy boundary — not a Nora-local fake authority engine |

**Legacy Fake / comparator dual path:** TEMPORARY WITH EXIT. Canonical forward sequence (ACTIVE):

1. MW1 Option C **correction cycle** aligned with OD04-I01 (CORR-OPT-C-01…05)
2. deterministic Runner / Fake convergence on **ONE** target Runner cognitive path
3. Fake / tests / comparator migrate to the same target cognitive path as applicable
4. **RETIRE** legacy Nora generic `runToolCallingLoop` (must not remain a permanent second product path)
5. corrected Option C **PROJECT Git integration** — separate Morris GO · **≠** integrated before this gate
6. **MW0 REGRESSION / PARITY ON OPTION C** (MW0 remains historically **CLOSED** · parity ≠ reopen)
7. MW1-S01 / S02 / S03 final proof
8. CORR-MW1-07 / CORR-MW1-08 where required by S03/materialization closure
9. MW1 Exit Proof / closure
10. **MW2** only after MW1 closure

This supersedes any active wording that places project Git integration **before** legacy-loop retirement, or that lets the legacy loop survive **until after** the MW0 Option C regression/parity gate.

---

## 5. Adopted cognitive target (Option C)

| Component | Disposition |
| --- | --- |
| **Agents SDK Runner** | **ADOPTED TARGET** for generic Nora agent/tool loop |
| **Custom Product SQLite Session** | **ADOPTED TARGET** for Nora conversational / inter-session continuity |
| **callModelInputFilter / Session policy** | **ADOPTED TARGET PATTERN** for context replay + authority isolation |
| **SFIA tools / `routeToolCall` / business authorization** | **KEEP** — wrapped/adapted behind Runner; authority stays SFIA |
| **nora-eval** | **KEEP / ADAPT** as SFIA eval semantics / evidence spine |

Proof evidence retained (recommendation→decision basis; no quality-superiority claim):

- **P1 PASS:** custom SQLite Session · Project isolation · restart/resume · no Truth C mutation · input-authority isolation
- **P2 PASS:** same SFIA read-only tool · baseline `runToolCallingLoop` · Agents Runner path · no dual loop · same `routeToolCall` · bounded REAL PASS
- Business/authority spine preserved
- Meaningful generic custom plumbing retirement credible

---

## 6. Not adopted

| Component | Status |
| --- | --- |
| OpenAIResponsesCompactionSession / `responses.compact` | **CANDIDATE / NOT ADOPTED** — requires MW1-S02-specific proof |
| OpenAI HITL | **NOT** a replacement for HD/Confirmation |
| OpenAI Trace | **NOT** Evidence — cognitive observability only |
| Hosted tools / MCP | **not automatically adopted** |
| Server-managed Truth C | **FORBIDDEN** |
| runtime v3 | **NON ADOPTED** |
| Package `@openai/agents` / Zod product adoption | **NOT AUTHORIZED by this documentary cycle** |

---

## 7. Asset dispositions

### Baseline A (homegrown MW1 candidate)

Preserved as **temporary baseline / evidence source**, **not** target architecture.

| Asset | Disposition |
| --- | --- |
| `resumePrompt` / manual Memory B stitching | **REPLACE / RETIRE** |
| custom Nora `runToolCallingLoop` path | **RETIRE LATER** after migrated proof |
| `MemoryBService` | **REASSESS / SHRINK / ADAPT** |
| `sqliteMemoryBRepository` | **REPLACE / ADAPT** into Session adapter |
| `captureMemoryBFromProductTurn` | **REASSESS** — avoid duplicate Session history plumbing |
| `materializationBasis` | **KEEP + CORRECT** (CORR-MW1-07) |
| `materializeToTruthC` | **KEEP + CORRECT** (CORR-MW1-08) |
| M9 Memory B schema | **NOT AUTOMATICALLY ADOPTED** — reassess against Session target |

### A/B proof spike

`.tmp-openai-cognitive-ab/**` = **TEMPORARY WITH EXIT** · **HARVEST only via clean rewrite** if useful · else **DISCARD** under cleanup GO.

---

## 8. MW1 implications

MW1 Delivery remains **active**. Historical post-OD-04 gate was **REQUALIFICATION against Option C**; **CURRENT** forward gate under OD04-I01 = **Option C correction cycle** (CORR-OPT-C-01…05) before project integration.

Do **not** continue homegrown hardening blindly.

| Item | Implication |
| --- | --- |
| **B1 / CORR-MW1-07** Class matrix | still **SFIA** correction |
| **B2 / CORR-MW1-08** real Evidence/ReviewBundle | still **SFIA** correction |
| **old CORR-MW1-09** prompt-stitch hardening | implementation approach **superseded** · requalify under Session / model-input boundary |
| **MW1-S01** | target implementation = **Session-based continuity** (story semantics unchanged) |
| **MW1-S02** | target = prove/select compaction mechanism **separately** (Responses compaction **not** adopted) |
| **MW1-S03** | target remains **SFIA materialization authority** |

MW1 source-locked story semantics (**MW1-S01/S02/S03**) remain unchanged.

---


### MW0 REGRESSION / PARITY ON OPTION C

**MW0 remains CLOSED** historically. MW0 historical Evidence remains valid. This decision does **not** reopen MW0.

Option C migration **MUST** pass an **MW0 REGRESSION / PARITY ON OPTION C** gate before MW1 exit can be accepted:

- use the existing **nora-eval** spine as **KEEP / ADAPT** (SFIA eval semantics / NCC-BAR source-lock retained);
- demonstrate non-regression of capabilities previously proven by MW0 against the Runner / Session target runtime;
- adapt runtime / provider / productPath observables as required by the new cognitive composition;
- D0 / R1 / R2 / R3 policy remains proportional to the claims being re-proven;
- **no** second OpenAI-specific eval framework;
- OpenAI SDK test doubles / traces may **complement** nora-eval but do **not** replace its SFIA semantics;
- Trace ≠ Evidence.

This is a **trajectory requirement** for Option C MW1 exit — not a MW0 reopen and not a package-adoption authorization.

## 9. MW0→MW6 application rule

For every future macro-wave:

1. Identify the cognitive generic mechanism
2. Map the official OpenAI candidate (if any)
3. Compare with existing SFIA plumbing
4. Preserve the business boundary
5. Choose KEEP / ADAPT / REPLACE
6. Evidence REAL where significant
7. No homegrown equivalent by default when a mature primitive already fits

Do **NOT** alter source-locked story semantics by this decision alone.

---

## 10. Architecture risks / debt

| Risk / debt | Exit |
| --- | --- |
| SDK dependency / update burden | version pin + adapter boundary |
| Zod dependency | productize only under Delivery GO |
| Tracing privacy | tracing disabled / redacted by default; Trace ≠ Evidence |
| Vendor coupling | reversible adapters; KEEP SFIA tools/authority |
| Session schema lifecycle | Product SQLite Session design under MW1 requalification |
| Compaction semantics | MW1-S02 dedicated proof before adoption |
| Dual-loop migration period | every temporary duality must have explicit exit · **Runner/Fake convergence → retire legacy loop → project Git integration → MW0 Option C regression/parity** (OD04-I01 / DOC-02) |

---

## 11. Exit / next gate

This decision record **adopts the Option C target** (integrated on main via PR **#445**). It does **not** by itself authorize or complete MW1 implementation integration.

**Next (CURRENT) — canonical forward sequence:**

1. **OD04-I01** documentary invariant consumed as cross-wave rule (this clarification + DOC-01/DOC-02 precision)
2. **MW1 Option C correction cycle** aligned with OD04-I01 (CORR-OPT-C-01…05) on the local candidate
3. deterministic Runner / Fake convergence on **ONE** target Runner cognitive path
4. Fake / tests / comparator migrate to the same target cognitive path as applicable
5. **RETIRE** legacy Nora generic `runToolCallingLoop`
6. corrected Option C **PROJECT Git integration** (separate Morris GO) · **≠** claimed integrated before this gate
7. **MW0 REGRESSION / PARITY ON OPTION C** (nora-eval KEEP/ADAPT) before MW1 exit acceptance
8. MW1-S01 / S02 / S03 final proof · CORR-MW1-07/08 where required · MW1 Exit Proof / closure

**MW2** only after MW1 closure.

**MW0** remains **CLOSED** — regression/parity ≠ reopen.

---

## 12. Final documentary verdict

**NORA OD-04 OPTION C ARCHITECTURE DECISION — INTEGRATED ON MAIN (PR #445) · TARGET ADOPTED**

= OD-04 CONSUMED
= OPTION C ADOPTED AS NORA TARGET ARCHITECTURE
= OD04-I01 ACTIVE — STUDIO OWNS PRODUCT/BUSINESS/AUTHORITY MODEL · NORA OWNS COGNITION
= PILOTE = RUNTIME HUMAN DECISION/CONFIRMATION ACTOR · STUDIO OWNS DURABLE HD/CONFIRMATION OBJECTS + LIFECYCLE · MORRIS = CONSTRUCTION/GOVERNANCE (NOT RUNTIME PERSONA)
= AGENTS SDK RUNNER TARGET ADOPTED
= CUSTOM PRODUCT SQLITE SESSION TARGET ADOPTED
= SESSION / MODEL-INPUT POLICY = COGNITIVE CONTEXT INTEGRITY TARGET (≠ business authorization engine)
= SFIA BUSINESS / AUTHORITY SPINE PRESERVED
= RESPONSES COMPACTION NOT ADOPTED
= MW1 BASELINE A / LOCAL CANDIDATE PRESERVED TEMPORARY WITH EXIT
= MW1 NOT COMPLETE / NOT INTEGRATED
= MW2 NOT STARTED
= COGNITIVE COMPLETION NOT PROVEN
= RUNTIME V3 NON ADOPTED
= NO NEW ARCHITECTURE SELECTION BY OD04-I01
= NO PRODUCT COMPLETION / BUILD DOCTRINE / V3 FRAMING MUTATION BY OD04-I01
