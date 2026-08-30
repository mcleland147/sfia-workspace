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
| **Git lifecycle** | **LOCAL DOCUMENTARY CANDIDATE** until distinct project Git integration |
| **runtime v3** | **NON ADOPTED** |
| **Cognitive Completion** | **NOT PROVEN** |
| **Package / code migration** | **NOT AUTHORIZED by this record** |
| **Evidence basis** | Static OpenAI cognitive-runtime evaluation + targeted A/B proof (P1/P2 D0+REAL PASS) · review handoff tip `3e86fb202344eb8eb7277c610bfc4bdc585cdf80` |

> **Anti-claims:** This record adopts a Nora **cognitive runtime target**. It does **not** adopt runtime v3 · does **not** authorize package install/commit · does **not** complete MW1 · does **not** prove Cognitive Completion · does **not** replace SFIA business semantics · does **not** authorize MW2 · does **not** map OpenAI HITL→HD/Confirmation · does **not** map Trace→Evidence · does **not** adopt Responses compaction.

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

MW1 Delivery remains **active** but must be **REQUALIFIED against Option C**.

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
| Dual-loop migration period | every temporary duality must have explicit exit |

---

## 11. Exit / next gate

This decision record **does not authorize implementation**.

**Next:**

1. MW1 Delivery **REQUALIFICATION** against Option C
2. bounded migration / design
3. D0
4. REAL
5. **MW0 REGRESSION / PARITY ON OPTION C** (nora-eval KEEP/ADAPT) before MW1 exit acceptance
6. Delivery review

**MW2** only after MW1 closure.

**MW0** remains **CLOSED** — regression/parity ≠ reopen.

**STOP BEFORE PROJECT COMMIT** for this documentary cycle.

---

## 12. Final documentary verdict

**NORA OD-04 OPTION C ARCHITECTURE DECISION — LOCAL DOCUMENTARY CANDIDATE**

= OD-04 CONSUMED
= OPTION C ADOPTED AS NORA TARGET ARCHITECTURE
= AGENTS SDK RUNNER TARGET ADOPTED
= CUSTOM PRODUCT SQLITE SESSION TARGET ADOPTED
= SESSION / MODEL-INPUT POLICY TARGET ADOPTED
= SFIA BUSINESS / AUTHORITY SPINE PRESERVED
= RESPONSES COMPACTION NOT ADOPTED
= MW1 BASELINE A PRESERVED / TEMPORARY WITH EXIT
= MW1 DELIVERY REQUALIFICATION REQUIRED
= MW2 NOT STARTED
= COGNITIVE COMPLETION NOT PROVEN
= RUNTIME V3 NON ADOPTED
= NO PACKAGE / CODE MIGRATION AUTHORIZED BY THIS RECORD
