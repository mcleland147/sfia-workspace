# SFIA Studio — Nora Cognitive Completion — MW2 Readiness / Requalification — FULL CRITICAL Review Pack

| Field | Value |
| --- | --- |
| **Timestamp (Europe/Paris)** | 2026-09-01 21:30:00 CEST |
| **Cycle** | 8 — Delivery / implémentation |
| **Sous-type** | MW2 READINESS / REQUALIFICATION ONLY · ≠ implementation |
| **Typologie** | DOC / ANALYSIS |
| **Profil** | CRITICAL |
| **CKC applicable** | Absent — fallback routing guide + v2.6 |
| **Repository** | mcleland147/sfia-workspace |
| **Worktree** | /Users/morris/Projects/sfia-workspace-nora-mw2-readiness-requalification |
| **Branch** | docs/sfia-studio-nora-mw2-readiness-requalification |
| **Base anchor** | b4fae68423bc0ab7cb0abcc49bedee8f7c44b405 (PR #454 MERGED) |
| **GO Morris** | MW2 READINESS / REQUALIFICATION ONLY — CONSUMED |
| **Fake/REAL this cycle** | NONE fake · ZERO REAL |

---

## Local Git Truth Check

```
pwd: /Users/morris/Projects/sfia-workspace-nora-mw2-readiness-requalification
git rev-parse HEAD: b4fae68423bc0ab7cb0abcc49bedee8f7c44b405
git branch --show-current: docs/sfia-studio-nora-mw2-readiness-requalification
origin/main: b4fae68423bc0ab7cb0abcc49bedee8f7c44b405 — MATCH
```

Post-merge CI PR #454: 33547046842 SUCCESS · Required Gate PASS.

---

## Sources read (mandatory order)

1. prompts/templates/sfia-cycle-execution-template.md
2. method/sfia-fast-track/core/sfia-cycle-routing-guide.md
3. method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
4. scripts/sfia/README.md
5. projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
6. projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
7. projects/sfia-studio/product-completion/01-product-completion-cadrage.md
8. projects/sfia-studio/nora-cognitive-completion/01-nora-cognitive-completion-cadrage.md
9. projects/sfia-studio/nora-cognitive-completion/02-nora-cognitive-completion-conception-fonctionnelle.md
10. projects/sfia-studio/nora-cognitive-completion/04-nora-cognitive-runtime-gap-implementation-readiness.md
11. projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md
12. projects/sfia-studio/nora-cognitive-completion/06-nora-mw0-versioned-cognitive-eval-harness-readiness.md
13. projects/sfia-studio/nora-cognitive-completion/07-nora-openai-cognitive-runtime-architecture-decision.md
14. projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
15. projects/sfia-studio/sfia-v3-framing/02-sfia-v3-principles-and-human-governance.md
16. projects/sfia-studio/app/lib/platform/ai/config.ts
17. projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
18. projects/sfia-studio/app/package.json
19. Runtime seam discovery (rg): nora-cognitive-runtime · f2/ckcCognitiveContext · nora-eval/capabilityBudget · oa/cycle CKC services

OpenAI provider revalidation: https://developers.openai.com/api/docs/models/gpt-5.6-luna (2026-09-01)

---

## C5 MW2 source-lock

- **MW2-S01** — Adaptive reasoning depth via CWP (≠ SFIA Profile) · NO TA REQUIRED · OD-02 OPEN
- **MW2-S02** — CKC semantic assistance without fake authority · NO TA REQUIRED · depends MW2-S01
- **No MW2-S03** · C5 unchanged

---

## Runtime seam discoveries (summary)

| Seam | Path | MW2 relevance |
| --- | --- | --- |
| Static reasoning | config.ts · openaiProvider.ts | ADAPT — no CWP yet |
| Option C Runner | runNoraAgentsTurn.ts | KEEP — policy hook point |
| Capability manifest | nora-eval/capabilityBudget.ts | REUSE for GAP-MW2-REASONING-CAPABILITY-01 |
| F2 qualify | f2/qualify.ts | KEEP — bootstrap Profile |
| CKC cognitive | f2/ckcCognitiveContext.ts | KEEP/ADAPT — MW2-S02 |
| No CognitiveStrategy types | — | GAP-MW2-CWP-01 |

---

## OpenAI Capability Fit Check verdict

**COMPLETE / QUALIFIED.** Primary disposition: **USE/ADAPT `reasoning.effort`** under thin CWP policy + model-capability validation. **KEEP** Option C Runner/Responses/tools. **DEFER** reasoning.mode=pro · reasoning.context · compaction. **REJECT** model router / internal cognitive engine for MW2.

Provider snapshot: GPT-5.6 Luna/Terra/Sol · efforts none/low/medium/high/xhigh/max · SDK enum includes extra `minimal`.

---

## Asset classification (summary)

KEEP: SFIA Profile · MW0 eval · Option C · routeToolCall · Session/filter · CKC seam
ADAPT: reasoning effort knob · capability validation · F2 CKC enrichment · telemetry
REJECT/DEFER: model router · internal engine · compaction adoption

---

## Gap register (summary)

| Gap | Blocking readiness? | Blocking Delivery? |
| --- | --- | --- |
| GAP-MW2-CWP-01 | No | Yes |
| GAP-MW2-REASONING-CAPABILITY-01 | No | Yes |
| GAP-MW2-EFFECTIVE-MODEL-01 | No | Yes |
| GAP-MW2-CKC-SEMANTIC-01 | No | Partial |
| GAP-MW2-OD02-POLICY-01 | No | Yes |

---

## GAP-MW2-REASONING-CAPABILITY-01 verdict

SDK enum ≠ model-effective capabilities. **Recommend:** extend existing `capabilityBudget.ts` manifest pattern + fail-closed validator at policy→provider boundary. **Reject** new generic router framework.

---

## PRE-MW2-MODEL-BASELINE-01 status

**OPEN / DELIVERY PREREQUISITE.** Git cannot prove effective OPENAI_MODEL. Local shell unset. Historical REAL: GPT-5.6 Luna + none — not production selection.

---

## OD-02 Decision Pack (summary)

- **Option A:** rigid StrategyClass → single effort
- **Option B (RECOMMENDED):** envelope + minimum-sufficient selection + model validation
- **Option C:** dynamic routing / cognitive engine — **REJECT for MW2**

**Verdict: OD-02 — MORRIS DECISION REQUIRED**

---

## MW2 reasoning evaluation plan (summary)

D0: policy mechanics · Profile≠Strategy · fail-closed · no model routing
EVAL: S1–S6 matrix (Routine/Focused/Deep/High-Assurance/same Profile different workload/unsupported capability)
REAL: later · bounded GPT-5.6 reference · small effort subset · NO MODEL ROUTER BEFORE EVIDENCE

---

## CKC authority contract (MW2-S02)

Seam exists at f2/ckcCognitiveContext.ts. Recommendation-class only. Provenance retained. No HD/Confirmation/EC/execute. EVAL usefulness pending · REAL later.

---

## Architecture trigger

**NO TA REQUIRED** — no structural blocker.

---

## Readiness verdict candidate

**MW2 READINESS / REQUALIFICATION — CANDIDATE PASS — SOURCE-LOCK PRESERVED — OPENAI CAPABILITY FIT QUALIFIED — NO TA REQUIRED — OD-02 MORRIS DECISION REQUIRED — DELIVERY NOT AUTHORIZED**

---

## File created

- projects/sfia-studio/nora-cognitive-completion/09-nora-mw2-cognitive-workload-profile-readiness.md

---

## Files inspected but unchanged

C5 · Roadmap · Build Doctrine · doc06 · doc07 · doc08 · all runtime TS · package.json · workflows

---

## Stop conditions

None encountered.

---

## Claims autorisés

- MW2 readiness CANDIDATE PASS (pending ChatGPT + Morris)
- Source-lock preserved
- OpenAI fit qualified
- NO TA REQUIRED at current scope
- OD-02 Morris decision required
- Delivery NOT AUTHORIZED

## Claims interdits

- MW2 READY/AUTHORIZED/STARTED
- Cognitive Completion PROVEN
- runtime v3 ADOPTED
- OD-02 consumed
- Production model selected
- GPT-5.6 Luna production model

---

## Next gates

ChatGPT Critical Review → Morris validation + OD-02 → distinct Git integration GO → PRE-MW2 baseline → distinct Delivery GO

---

# CONTENU INTÉGRAL DOC09

# Nora Cognitive Completion — MW2 Cognitive Workload Profile Readiness / Requalification

| Métadonnée | Valeur |
| --- | --- |
| **Document** | Nora Cognitive Completion — MW2 Cognitive Workload Profile Readiness / Requalification |
| **Capability** | **MW2 — COGNITIVE WORKLOAD PROFILE / COGNITIVE STRATEGY** |
| **Cycle** | 8 — Delivery / implémentation · **READINESS / REQUALIFICATION ONLY** · ≠ implementation |
| **Typologie** | DOC / ANALYSIS |
| **Profil** | CRITICAL |
| **Content status** | **CANDIDATE — AWAITING CHATGPT CRITICAL REVIEW + MORRIS VALIDATION** |
| **Repository publication / integration** | **RESOLVE FROM CURRENT GIT / PR EVIDENCE** |
| **Timestamp (Europe/Paris)** | 2026-09-01 21:30:00 CEST |
| **Generation worktree (provenance)** | `/Users/morris/Projects/sfia-workspace-nora-mw2-readiness-requalification` · provenance only |
| **Generation branch (provenance)** | `docs/sfia-studio-nora-mw2-readiness-requalification` · provenance only |
| **Base / origin/main (qualification anchor)** | `b4fae68423bc0ab7cb0abcc49bedee8f7c44b405` · PR **#454 MERGED** · post-merge CI **`33547046842` SUCCESS** · Required Gate **PASS** · ≠ permanent future HEAD |
| **GO Morris consommé** | **MW2 READINESS / REQUALIFICATION ONLY** · inspection read-only · doc09 + Review Pack + L3 handoff borné · ≠ Delivery · ≠ runtime change · ≠ OD-02 consumption · ≠ project commit/push/PR/merge |
| **Delivery** | **NOT AUTHORIZED** |
| **MW2 implementation** | **NOT STARTED** |
| **Cognitive Completion** | **NOT PROVEN** |
| **runtime v3** | **NON ADOPTED** |
| **OD-02** | **OPEN — MORRIS DECISION REQUIRED** |
| **Production model routing** | **NOT SELECTED** |
| **Responses compaction** | **CANDIDATE / NOT ADOPTED** |
| **REAL execution this cycle** | **ZERO / NOT AUTHORIZED** |

> **Anti-claims :** MW2 readiness ≠ MW2 READY · ≠ MW2 AUTHORIZED · ≠ MW2 STARTED · ≠ MW2 DELIVERY AUTHORIZED · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ OD-02 CONSUMED · ≠ production model selected · ≠ model routing selected · ≠ GPT-5.6 Luna production model · provider snapshot ≠ durable SFIA doctrine · D0 green ≠ cognitive PROVEN · REAL-first historical baseline ≠ production routing · this document does **not** self-assert repository publication/merge/post-merge state.

---

## 1. Executive summary

This readiness requalifies **MW2-S01** (Adaptive reasoning depth via Cognitive Workload Profile / Cognitive Strategy ≠ SFIA Profile) and **MW2-S02** (CKC semantic assistance without fake authority) against post-PR **#454** repository truth, C5 source-lock, Option C runtime seams, and **R22 OpenAI-native-first** (doc08).

**Substantive findings:**

| Dimension | Result |
| --- | --- |
| C5 source-lock MW2 S01/S02 | **PRESERVED — UNCHANGED** |
| OpenAI Capability Fit Check | **COMPLETE — QUALIFIED** |
| Architecture trigger | **NO TA REQUIRED** |
| GAP-MW2-CWP-01 | **OPEN — non-blocking for readiness** |
| GAP-MW2-REASONING-CAPABILITY-01 | **OPEN — Delivery closure required** |
| GAP-MW2-EFFECTIVE-MODEL-01 | **OPEN — Delivery prerequisite (PRE-MW2-MODEL-BASELINE-01)** |
| GAP-MW2-CKC-SEMANTIC-01 | **PARTIALLY CLOSED — seam discovered; semantic usefulness EVAL pending** |
| OD-02 | **MORRIS DECISION REQUIRED** — Option B recommended |
| MW2 Delivery | **NOT AUTHORIZED** |

**Readiness verdict candidate:**

### MW2 READINESS / REQUALIFICATION — CANDIDATE PASS — SOURCE-LOCK PRESERVED — OPENAI CAPABILITY FIT QUALIFIED — NO TA REQUIRED — OD-02 MORRIS DECISION REQUIRED — DELIVERY NOT AUTHORIZED

---

## 2. Source hierarchy / authority

| Rank | Source | Role |
| --- | --- | --- |
| 1 | Morris GO (this cycle) | MW2 readiness scope only · ≠ Delivery · ≠ OD-02 consumption |
| 2 | C5 Source-Locked Cognitive Backlog | MW2-S01/S02 contracts — **SOURCE-LOCKED** |
| 3 | Convergence Build Doctrine + Roadmap | Product gate ordering · MW1 CLOSED · MW2 NOT STARTED |
| 4 | doc07 OD-04 Option C · doc08 OpenAI-native-first | Architecture TARGET · R22 · PRE-MW2-MODEL-BASELINE-01 |
| 5 | Nora C1→C4 (docs 01–04) | Functional spec · gaps · PE |
| 6 | doc06 MW0 eval harness readiness | Measurement spine · REAL-first contract reuse |
| 7 | Repository runtime truth (Git @ anchor) | Seams discovered — authoritative over ChatGPT memory |
| 8 | OpenAI official docs snapshot 2026-09-01 | Provider capability input only · revalidated this cycle |
| 9 | CKC v3 framing (cycle 8 CKC if applicable) | **CKC absent as execution authority** · fallback routing guide + v2.6 |

Morris construction/governance decisions (OD-02, Delivery GO, model baseline) are **not** consumed by this document.

---

## 3. Source-lock MW2 S01/S02

C5 (`05-nora-source-locked-cognitive-backlog.md`) is **SOURCE-LOCKED**. This cycle **did not modify C5**.

### MW2 scope exact (C5 §12)

| Story | Title | Architecture | Dependencies |
| --- | --- | --- | --- |
| **MW2-S01** | Adaptive reasoning depth via CWP (≠ SFIA Profile) | **NO TA REQUIRED** | MW0 · **OD-02 OPEN** |
| **MW2-S02** | CKC semantic assistance without fake authority | **NO TA REQUIRED** | MW0 · MW2-S01 |

**No MW2-S03 exists.** No backlog delta was created.

### MW2-S01 acceptance (C5)

- WHEN High-Assurance conditions hold THEN strategy class elevates AND Critical challenge gate is armed (link MW5) WITHOUT changing SFIA Profile identity.
- Negative: ≠ OD-02 consumed by this story alone · ≠ model vendor lock.
- Evidence: MODELED + EVAL.

### MW2-S02 acceptance (C5)

- WHEN CKC guidance is used THEN outputs remain Recommendation-class AND disclosures prevent fake CKC authority claims.
- Negative: ≠ Phase B REAL proven.
- Evidence: DETERMINISTIC + EVAL (REAL later).

**Source-lock verification:** PASS — story IDs, AC, DAG, and MW2 cardinality unchanged.

---

## 4. Current repository/runtime truth

**Git anchor:** `b4fae68423bc0ab7cb0abcc49bedee8f7c44b405` (PR #454 merge).

**Governed product state (C5 / Roadmap / doc08 aligned):**

| State | Value |
| --- | --- |
| MW0 | CLOSED |
| MW1 | COMPLETE / CLOSED |
| MW2 | NOT AUTHORIZED / NOT STARTED |
| Cognitive Completion | NOT PROVEN |
| runtime v3 | NON ADOPTED |
| OD-02 | OPEN |
| Option C | INTEGRATED (PR #447) · TARGET ADOPTED |
| OpenAI-native-first R22 | ACTIVE ON MAIN (PR #453) · lifecycle sync PR #454 |

### Runtime seam discoveries (repo-derived)

| Seam | Path | Current role |
| --- | --- | --- |
| F1 Option C Agents turn | `app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts` | Runner + Session + tools · model from `OPENAI_MODEL` |
| Session / model-input filter | `app/lib/nora-cognitive-runtime/callModelInputFilter.ts` | Structural role integrity · **NOT** business authority |
| Memory B / compaction | `app/lib/nora-cognitive-runtime/memoryBCompaction.ts` | MW1-S02 boundary · **NOT** MW2 CWP |
| Product SQLite Session | `app/lib/nora-cognitive-runtime/productSqliteSession.ts` | Memory B persistence |
| SFIA tool routing | `app/lib/platform/tools/toolRouter.ts` · `sfiaAgentsTools.ts` | Authority-preserving tool execution |
| Responses provider | `app/lib/platform/ai/openaiProvider.ts` | `reasoning.effort` from constructor/env |
| AI config | `app/lib/platform/ai/config.ts` | `OPENAI_MODEL` · `OPENAI_REASONING_EFFORT` parse |
| F2 qualification | `app/features/project-assistant/f2/qualify.ts` · `orchestrateF2.ts` | SFIA Profile recommendation · CKC enrichment |
| CKC cognitive context | `app/features/project-assistant/f2/ckcCognitiveContext.ts` | **Exists** — semantic CKC load + Recommendation enrichment |
| CKC qualification services | `app/lib/oa/cycle/` · `vertical-slice-runtime/service.ts` | DoctrinePackage + CkcQualification resolver |
| MW0 capability manifest | `app/lib/nora-eval/capabilityBudget.ts` | Per-model reasoning efforts · campaign allowlist |
| Eval harness | `app/lib/nora-eval/` · `app/__tests__/nora-eval/` | MW0 measurement spine |

### Not found in repository (MW2-relevant)

| Expected concept | Discovery |
| --- | --- |
| `CognitiveStrategy` / `CognitiveWorkloadProfile` types | **Absent** — no policy layer |
| Strategy Class enum (Routine/Focused/Deep/High-Assurance) | **Absent** in runtime |
| Dynamic reasoning effort selection | **Absent** — static env only |
| Cycle→model routing | **Absent** (correct) |
| Internal cognitive engine duplicate | **Absent** (correct) |

**Historical naming note:** C5 references `ckcCognitiveContext seam` — repository truth confirms path `features/project-assistant/f2/ckcCognitiveContext.ts` (not deprecated).

**Packages (anchor):** `openai@^6.48.0` · `@openai/agents@^0.17.0`.

---

## 5. Capability / milestone / trajectory

| Item | Value |
| --- | --- |
| Capability v3 | Nora Cognitive Completion → **MW2 CWP / Cognitive Strategy** |
| Milestone | **MW2 READINESS / REQUALIFICATION** (this cycle) |
| Next capability (if MW2 later closed) | MW3 — Contradiction / Cognitive STOP |
| Architecture target | **Option C KEEP** — thin policy + OpenAI adapter |
| Construction principle | **DO NOT INVENT A COGNITIVE ENGINE** |

**Critical path:**

```text
MW1 CLOSED
  → MW2 Readiness (this cycle)
  → ChatGPT Critical Review + Morris validation + OD-02
  → Git integration of readiness doc (distinct GO)
  → Morris MW2 Delivery GO (distinct)
  → MW2 Delivery + proofs
  → MW2 closure
  → MW3
```

No step auto-consumes the next.

---

## 6. OpenAI Capability Fit Check (R22)

**Provider snapshot date:** 2026-09-01 · revalidated via official OpenAI models documentation.

**GPT-5.6 family (campaign-relevant):** `gpt-5.6-sol` · `gpt-5.6-terra` · `gpt-5.6-luna`.

**GPT-5.6 `reasoning.effort` (provider docs):** `none` · `low` · `medium` · `high` · `xhigh` · `max`.

**SDK/runtime generic enum (`OPENAI_REASONING_EFFORT_VALUES`):** `none` · `minimal` · `low` · `medium` · `high` · `xhigh` · `max`.

| Primitive | MW2 need served | OpenAI native | SDK/code support | Model effective | Option C compat | Authority boundary | Observability | Cost/latency | Security | Reversibility | Disposition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `reasoning.effort` | Adaptive depth per strategy | Yes (Responses) | Yes — `openaiProvider.ts` | Per-model set differs from SDK enum | Yes — via provider constructor | Strategy ≠ authority | EventSink + eval metrics | Effort↑ → cost/latency↑ | Server-only env | Config/env reversible | **USE / ADAPT** |
| Responses API | F1 cognitive turns | Yes | Yes @6.48 | Model-dependent | Yes — primary path | Preserved | Usage tokens in provider | Standard | API key server-only | KEEP | **KEEP** |
| Agents SDK Runner | Generic agent loop | Yes | Yes @0.17 | N/A | Yes — `runNoraAgentsTurn.ts` | Tools via `routeToolCall` | Turn budget hooks | Turn-cap bounded | Same as API | KEEP | **KEEP** |
| `callModelInputFilter` | Session integrity | Pattern in SDK | Yes | N/A | Yes | Structural only | D0 tests exist | Low | No elevation of roles | KEEP | **KEEP** |
| Structured outputs | Qualification / eval | Yes | Yes | Model-dependent | Yes | No authority leak | Eval harness | Low | Schema-bound | KEEP | **KEEP** |
| Tool calling | CE-01 / sourcing | Yes | Yes via SFIA router | Model-dependent | Yes | **KEEP** authority model | Tool round metrics | Variable | Scoped tools | KEEP | **KEEP** |
| `reasoning.mode=pro` | High-Assurance depth? | Documented candidate | **Not wired** in codebase | Unknown per model | Could adapt provider | Needs eval | Future campaign | Higher cost | Server-only | Reversible | **EVALUATE / DEFER** until High-Assurance evidence need |
| `reasoning.context` / persisted reasoning | Long reasoning chains | Documented candidate | **Not wired** | Model-dependent | Unknown benefit vs Memory B | Must not become Truth C | N/A | Cost | Privacy review | Reversible | **EVALUATE / DEFER** — no MW2-S01 blocker proven |
| Responses compaction | Context management | Candidate | MW1 boundary exists | N/A | Option C seam | Governed | MW1 proofs | Cost savings | Same | Not adopted | **DEFER / NOT ADOPTED** |
| Model routing / tier selection | None for MW2 | N/A | N/A | N/A | Anti-pattern for MW2 | Violates R22 if premature | N/A | N/A | N/A | N/A | **REJECT FOR MW2** |
| Internal cognitive engine | CWP policy | N/A | Not needed if thin policy | N/A | Option C | Risk fake authority | N/A | High debt | N/A | Hard | **REJECT** unless gap proven |

**R22 verdict:** Prefer native `reasoning.effort` adaptation under a **thin SFIA CWP policy layer** with **model-capability validation**. Do not adopt all OpenAI features. Non-use of `reasoning.mode=pro` and `reasoning.context` is justified: **no High-Assurance eval evidence yet** · MW2-S01 can start with effort envelope · defer pro/context to bounded eval if High-Assurance gap appears.

**OpenAI Capability Fit Check:** **COMPLETE / QUALIFIED**.

---

## 7. Existing assets + classification

| Asset | Path | Current role | Classification | Target role MW2 | Delta required | Debt / exit |
| --- | --- | --- | --- | --- | --- | --- |
| SFIA Profile truth | F2 qualify · LPS | Method/process input | **KEEP** | Trusted input to CWP | None | — |
| C5 MW2 stories | doc05 | Source-lock contract | **KEEP / SOURCE-LOCK** | Unchanged | None | — |
| MW0 eval harness | `nora-eval/` | Measurement spine | **KEEP / REUSE** | MW2 D0/EVAL/REAL campaigns | Add MW2 scenarios | Exit: none |
| Option C Agents Runner | `runNoraAgentsTurn.ts` | F1 loop | **KEEP** | Same + policy hook | Thin adapter call | Baseline A retire later |
| Responses provider | `openaiProvider.ts` | API adapter | **KEEP / ADAPT MINIMALLY** | Accept per-turn effort from policy | Constructor or request override | — |
| OPENAI_MODEL config | `config.ts` | Env model | **KEEP** | Effective model resolution | PRE-MW2 baseline check | PRE-MW2-MODEL-BASELINE-01 |
| OPENAI_REASONING_EFFORT | `config.ts` | Static env knob | **ADAPT** | Fallback/default only; not sole CWP output | Policy layer supersedes per-turn | OD-02 policy |
| capabilityBudget manifest | `capabilityBudget.ts` | MW0 campaign | **KEEP / ADAPT** | Model-effort validation reuse | Wire to runtime validator | Temporary until provider metadata API if any |
| F2 qualification | `f2/qualify.ts` | Profile + CKC | **KEEP / ADAPT** | Bootstrap + requalification hook | CWP after Profile trusted | — |
| ckcCognitiveContext | `f2/ckcCognitiveContext.ts` | Semantic assist | **KEEP / ADAPT** | MW2-S02 contract completion | Provenance/disclosure hardening | — |
| callModelInputFilter | `callModelInputFilter.ts` | Structural filter | **KEEP** | Unchanged | None | — |
| Diagnostics / EventSink | platform observability | Telemetry | **KEEP / ADAPT** | Strategy class logging | Add fields | CE-07 |
| Internal cognitive engine | — | Absent | **REJECT** | — | Do not build | — |
| Model router | — | Absent | **DEFER / REJECT** | — | Evidence-first only | — |
| Responses compaction | MW1 | Candidate | **DEFER / NOT ADOPTED** | — | — | MW1 reserve |

---

## 8. Gap register

| Gap ID | Evidence | Impact | Blocking readiness? | Target closure | Dependency | Proof | Morris gate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **GAP-MW2-CWP-01** | No CWP/Strategy types or policy in runtime; static `OPENAI_REASONING_EFFORT` only (doc04 CE-05 FAIL) | MW2-S01 undeliverable without policy | **No** (readiness) · **Yes** (Delivery) | MW2 Delivery — thin policy module | OD-02 · MW2-S01 | D0 + EVAL | OD-02 + Delivery GO |
| **GAP-MW2-REASONING-CAPABILITY-01** | SDK enum includes `minimal`; GPT-5.6 docs omit it; no runtime validator ties effort to effective model | Wrong effort → provider CONFIG fail or silent mismatch risk | **No** (readiness) · **Yes** (Delivery) | Capability validator fail-closed | PRE-MW2-MODEL-BASELINE-01 | D0 fail-closed tests | — |
| **GAP-MW2-EFFECTIVE-MODEL-01** | `OPENAI_MODEL` env-driven; unset in local shell; Git cannot prove F1 effective model | Cannot prove GPT-5.6 alignment from Git alone | **No** (readiness) · **Yes** (Delivery) | PRE-MW2-MODEL-BASELINE-01 | Deployment config | Config probe + regression | Morris baseline GO |
| **GAP-MW2-CKC-SEMANTIC-01** | Seam exists; deterministic proofs W1/W2; REAL usefulness not proven for MW2 | MW2-S02 partial | **No** (readiness) | EVAL semantic assist; REAL later | MW2-S01 bootstrap ordering | D0 authority + EVAL | Delivery GO |
| **GAP-MW2-OD02-POLICY-01** | OD-02 OPEN; no Strategy→settings envelope decided | Policy debt | **No** (readiness) | Morris OD-02 decision | MW2-S01 | Decision + D0 | **OD-02 Morris** |

No additional gaps proven beyond repository inspection.

---

## 9. MW2-S01 functional/cognitive readiness

**Readiness verdict MW2-S01:** **QUALIFIED FOR DELIVERY PLANNING** — contract defined · runtime gap acknowledged · OD-02 gate explicit · **NOT IMPLEMENTED**.

MW2-S01 requires:

1. CWP signal extraction/normalization from intention + Truth C + turn state + **trusted SFIA Profile input**.
2. Cognitive Strategy Class selection under SFIA envelope.
3. Mapping Strategy Class → **candidate native OpenAI settings envelope** (not production model).
4. Model-capability validation → effective request config.
5. Telemetry for strategy class / shifts (CE-07).
6. High-Assurance elevation hooks (MW5 link — arm challenge gate, do not implement MW5 here).

**Not in scope:** exposing CWP as method form to Pilote · cycle→model abaque · permanent model tier per class.

---

## 10. CWP signal contract

Minimum signals (C5 / C2 §8.3 preserved):

| Signal | Description | Strategy influence |
| --- | --- | --- |
| Ambiguity | Structural uncertainty | ↑ clarification · ↓ premature Rec |
| Reasoning depth | Analysis complexity | ↑ verification depth |
| Source breadth | Docs/sources needed | Multi-doc posture (CE-08 link) |
| Tool dependency | External/Git/web/files | Tool activation posture |
| Contradiction risk | Premise conflicts | CE-02 precedence · requalification trigger |
| Context size | Working set volume | Compaction coordination (B5) |
| Verification need | Claim strength required | Extra reads · STOP if insufficient |
| Multimodality | Images/captures | Honesty if unsupported |
| Latency sensitivity | Pilote wait tolerance | Progress signaling |
| Cost budget | Product policy envelope | Depth/cost trade-off · ≠ FinOps/T7 freeze as runtime law |
| Rigor / criticality | SFIA Profile + claim risk | High-Assurance trigger |

Signals are **INTERNAL** (C3 §10 — CWP INTERNAL · qualification disclosure useful VISIBLE).

---

## 11. Cognitive Strategy Class contract

Source-locked vocabulary: **Routine · Focused · Deep · High-Assurance**.

| Class | Workload | Clarification | Verification | Tool posture | Source posture | Reasoning posture | Escalation/STOP | Cost/latency (qualitative) | Evidence needs | MW5 link |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Routine** | Low ambiguity · narrow scope · low contradiction | Minimal structural only | Light | As needed · low rounds | Single/narrow | Lower effort candidate | Standard STOP rules | Low / fast | Basic adherence | — |
| **Focused** | Moderate depth · bounded sources | Proportional | Moderate reads | Moderate | Few sources | Medium effort candidate | Escalate if authority gap | Medium | Grounding on cited sources | — |
| **Deep** | High depth · multi-source · synthesis | As needed · no questionnaire | Strong verification | Higher tool rounds | Multi-doc | Higher effort candidate | STOP if sources insufficient | Higher / slower | Completeness · fabrication checks | — |
| **High-Assurance** | Critical Profile and/or high rigor signals | Explicit challenge before Critical Rec | Maximum before Critical outputs | Conservative | Broad/trusted | Highest **supported** effort envelope | Refuse under-qualification · arm MW5 challenge | Highest | Authority · epistemic separation | **Critical challenge gate armed** |

**Invariant:** No permanent production model tier per class. Class selects **settings envelope**, not vendor SKU.

---

## 12. SFIA Profile ≠ CWP ≠ Strategy ≠ Model

| Concept | Owner | Role | Must never |
| --- | --- | --- | --- |
| **SFIA Profile** | Studio/method truth | Process rigor input (Standard/Critical/…) | Be invented by Nora · alias CWP · alias model |
| **Cognitive Workload Profile** | Nora (internal) | Signal envelope from context | Replace Profile · expose as method form |
| **Cognitive Strategy Class** | Nora (policy output) | Operating strategy selection | Rename Profile · map 1:1 to model tier |
| **OpenAI reasoning setting** | Provider request | Native depth knob | Become business authority |
| **Model (`OPENAI_MODEL`)** | Server config | Effective LLM instance | Be chosen by Cycle/Profile/Strategy routing |

---

## 13. Bootstrap / requalification ordering

**Case:** conversation starts before trusted SFIA Profile is available.

**Recommended pattern (OPTION — not Morris-consumed):**

```text
intent + Truth C + available workload signals
  → bounded initial cognitive strategy (conservative default: Focused)
  → F2 / SFIA qualification (+ CKC semantic assist MW2-S02)
  → trusted SFIA Profile
  → CWP requalification with Profile input
  → final Strategy Class + validated OpenAI settings
```

**Rules:**

- Nora **must not invent** SFIA Profile to fill the gap.
- Initial strategy must be **conservative** (avoid High-Assurance until Profile/trust established unless safety signals force STOP).
- Requalification on Profile change or contradiction/source gap (C2 §8.4).

---

## 14. Strategy → native OpenAI settings target

**Separation (mandatory):**

```text
CognitiveStrategyClass
  → candidate cognitive settings envelope (reasoning.effort range/default)
  → model-capability validation (effective model from OPENAI_MODEL)
  → effective OpenAI request configuration (provider/Runner)
```

**Policy target (pre-OD-02):**

- Strategy Class proposes **effort envelope** (e.g. Routine → `{none, low}` candidate; Deep → `{medium, high}` candidate).
- Selector picks **minimum sufficient** effort within envelope given workload signals (aligns doc08 minimum-sufficient principle).
- Validator intersects with **model-specific supported efforts** (reuse `capabilityBudget` pattern).
- Unsupported combination → **fail-closed CONFIG/PROVIDER_CAPABILITY** — no silent coercion (MW0 caveat preserved).

**Explicitly forbidden:** Strategy Class → permanent `gpt-5.6-*` mapping · Cycle type → model mapping.

---

## 15. Effective-model capability validation (GAP-MW2-REASONING-CAPABILITY-01)

### Problem

Global SDK enum (`minimal` present) ≠ GPT-5.6 documented efforts (`minimal` absent). Static env parse accepts SDK enum without model proof.

### Delivery options compared

| Option | Mechanism | Pros | Risks | R22 fit | Recommendation |
| --- | --- | --- | --- | --- | --- |
| **A — Static table per model family** | Extend `buildMw0CapabilityManifest` into runtime validator | Simple · proven MW0 pattern · deterministic | Manual snapshot maintenance | Good | **Preferred baseline** |
| **B — Provider metadata resolver** | Fetch/model API capabilities at startup | Always fresh | Network · complexity · not proven in repo | Good if bounded | MAY IF EVIDENCE later |
| **C — Shrink SDK enum to GPT-5.6** | Remove `minimal` globally | Quick | Breaks other models if used | Partial | Too blunt alone |
| **D — New generic router framework** | Separate capability service | Over-engineered | Parallel architecture | Poor | **REJECT** |

**Readiness recommendation:** **Option A** — minimal extension of existing `capabilityBudget.ts` + fail-closed check at policy→provider boundary. Challenge: avoid duplicating MW0 manifest; share single capability source or import manifest builder.

**Fail-closed contract:**

- Unknown model → CONFIG error · no default effort.
- Effort ∉ model set → CONFIG/PROVIDER_CAPABILITY · no silent downgrade/upgrade.
- No assumption from global enum alone.

---

## 16. PRE-MW2-MODEL-BASELINE-01

Per doc08 §7 — **Delivery prerequisite**, not readiness blocker.

| Check | Readiness status |
| --- | --- |
| Resolve effective F1 model | **OPEN** — env not visible in Git; local shell `OPENAI_MODEL` unset |
| Verify GPT-5.6 family | **OPEN** — pending effective model proof |
| Align if non-GPT-5.6 | **N/A** until model resolved |
| Rerun MW0/MW1 regression after change | **Planned** for Delivery |
| Avoid Luna hardcode as production tier | **Confirmed** — historical REAL baseline only |

**PRE-MW2-MODEL-BASELINE-01:** **OPEN / DELIVERY PREREQUISITE**.

Historical REAL evidence: MW0/MW1 campaigns used **GPT-5.6 Luna + reasoning none** — **NOT production model selection**.

---

## 17. OD-02 Decision Pack

**Status:** **OD-02 — MORRIS DECISION REQUIRED** (not consumed this cycle).

### Decision question

How should Nora map **Cognitive Strategy Class** to **native OpenAI cognitive settings** within the fixed SFIA policy envelope?

### Non-negotiable constraints

- SFIA fixes envelope; Nora selects strategy within it.
- No Cycle/Profile→model routing.
- No permanent model tier per Strategy Class.
- R22: prefer native primitives when contract-satisfying.
- Option C boundary preserved.
- Fail-closed capability validation required.

### Options

| Option | Description | Advantages | Risks | Complexity | Reversibility |
| --- | --- | --- | --- | --- | --- |
| **A — Rigid deterministic map** | Each Strategy Class → exactly one `reasoning.effort` | Simplest D0 · predictable | Too rigid for workload nuance · over/under-qualification | Low | High |
| **B — Class envelope + bounded selection** | Class → effort envelope; pick minimum sufficient using signals + model validation | Preserves thin policy · R22-aligned · uses MW0 manifest pattern | Policy design effort · OD-02 still needed for envelope bounds | Medium | High |
| **C — Dynamic model routing / cognitive engine** | Strategy drives model tier or internal engine | Maximum flexibility | Parallel architecture · fake authority risk · premature routing | High | Low |

### ChatGPT/Cursor recommendation

**Recommend Option B** — Strategy Class → **bounded native settings envelope** → **model-capability validation** → effective request config. Reject Option C for MW2. Option A acceptable only as degenerate subset of B for initial D0 bootstrap **if** Morris explicitly chooses simplicity over nuance.

### Proof required post-decision

- D0: envelope bounds · selection rules · fail-closed · Profile≠Strategy.
- EVAL: workload matrix S1–S6 cognitive quality.
- REAL: bounded GPT-5.6 reference model campaign when claim requires provider evidence.

### OD-02 verdict in this document

**OD-02 — MORRIS DECISION REQUIRED**

---

## 18. MW2 reasoning evaluation contract

MW2 proof **cannot** be D0-only. Layered evidence (MW0 spine reuse):

| Layer | Object | MW2-S01 |
| --- | --- | --- |
| **D0** | Policy mechanics | Signal extract · classify · Profile≠Strategy · fail-closed capability · no model routing |
| **EVAL** | Cognitive quality | Task success · adherence · clarification · grounding · fabrication · authority · stability · cost/latency |
| **REAL** | Provider-dependent claims | Bounded campaign on fixed GPT-5.6 reference · not full Sol×Terra×Luna×all efforts |

**Rule:** DETERMINISTIC GREEN ≠ COGNITIVE PROVEN ≠ REAL PROVEN ≠ MW2 COMPLETE.

---

## 19. D0 / EVAL / future REAL evidence plan

### D0 (MW2-S01) — must pass before EVAL

- Signal normalization unit tests.
- Strategy classification policy tests.
- Same SFIA Profile + different workloads → potentially different strategies.
- High-Assurance trigger mechanics.
- Unsupported model/effort → fail-closed.
- No Cycle/Profile→model routing regression guards.

### D0 (MW2-S02)

- CKC context included when relevant.
- Provenance/version/status retained in structured fields.
- Recommendation-class only · disclosure strings present.
- No HumanDecision/Confirmation/EC expansion · no write/execute.

### EVAL scenario matrix (representative S1–S6)

| Scenario | Input sketch | Expected strategy (candidate) | Proof |
| --- | --- | --- | --- |
| **S1 Routine** | Simple factual intent · low ambiguity · Standard Profile | Routine · low/none effort envelope | D0 classify + EVAL quality/cost |
| **S2 Focused** | Moderate analysis · few sources | Focused · low/medium | EVAL grounding |
| **S3 Deep** | Multi-source synthesis · high depth | Deep · medium/high | EVAL completeness · fabrication |
| **S4 High-Assurance** | Critical Profile or high rigor signals | High-Assurance · highest supported effort | EVAL challenge behavior · MW5 arm signal |
| **S5 Same Profile · different workload** | Standard Profile · low vs high ambiguity turns | Same Profile · different strategies | D0 + EVAL separation |
| **S6 Unsupported capability** | Strategy demands effort model rejects | Fail-closed CONFIG | D0 only |

### REAL campaign (future · not this cycle)

- **Fixed GPT-5.6 reference model** (not production selection).
- **Small effort subset** (e.g. none · low · medium · high — revalidated per PRE-MW2 baseline).
- Representative workloads only.
- Escalate to multi-model compare **only if EVAL proves need**.

**NO MODEL ROUTER BEFORE EVIDENCE.**

---

## 20. MW2-S02 CKC semantic assistance contract

### Repository truth

CKC seam **exists** at `app/features/project-assistant/f2/ckcCognitiveContext.ts`:

- Loads product DoctrinePackage CKC via filesystem repository.
- Generic Markdown guidance extraction (no cycleType production branching).
- `enrichQualificationWithCkcSemantics` — Recommendation label **"RECOMMANDATION — PAS UNE DÉCISION HUMAINE"**.
- Provenance: `ckcId` · `cycleTypeId` · `doctrinePackageId` · `packageVersion` · `contentDigest`.
- Business-first rationale scrubbing (no CKC IDs in Pilote prose).
- Fake provider specialized CKC paths for deterministic proof.

F2 path: `qualify.ts` → `qualifyWithCkc` → optional semantic enrichment.

### Target contract (MW2-S02)

1. CKC context available to qualification/clarification when pertinent.
2. Each CKC contribution exposes source · version · status · authority classification.
3. CKC assistance remains **Recommendation-class** only.
4. CKC must never: create HumanDecision/Confirmation · expand EC · trigger write/execute · become Truth C · become business authority.
5. Full SFIA lifecycle still applies.

### Asset disposition

**KEEP / ADAPT** — harden disclosures · wire consistent provenance in F2 orchestration · EVAL usefulness · REAL later.

### MW2-S02 readiness verdict

**QUALIFIED FOR DELIVERY PLANNING** — seam proven · authority safeguards partially implemented · semantic usefulness **EVAL pending** · REAL **LATER**.

---

## 21. Authority / fail-closed invariants

| Invariant | Enforcement |
| --- | --- |
| Nora never invents SFIA Profile | F2 qualification path · bootstrap rules |
| CKC ≠ authority | Recommendation label · no HD/EC creation |
| Strategy ≠ Profile ≠ model | Policy types + D0 guards |
| Unsupported capability → fail-closed | GAP-MW2-REASONING-CAPABILITY-01 closure |
| OpenAI session ≠ Truth C | Option C Session boundary · MW1 proven |
| Tool execution via SFIA router | `routeToolCall` · authority preserved |
| callModelInputFilter ≠ authority engine | Structural only (doc comment explicit) |

---

## 22. Architecture trigger / NO TA REQUIRED qualification

C5 declares **NO TA REQUIRED** for MW2-S01/S02.

**Requalification:** Option C seams can express bounded strategy configuration via **thin policy + adapter** without second state/authority model.

**No structural blocker discovered:**

- Adding types/policy/validator/metadata = in-band.
- Connecting existing CKC context = in-band.
- Adapting reasoning settings = in-band.

**Verdict:** **NO TA REQUIRED** — default stands.

If Delivery discovers Option C cannot express bounded configuration at all → **STOP — MW2 READINESS ARCHITECTURE BLOCKER** · DecisionRequest · not triggered today.

---

## 23. Delivery candidate scope — NON-AUTHORIZED

Future MW2 Delivery likely touch points (repo-derived):

### MUST

| Area | Files (candidate) |
| --- | --- |
| CWP policy layer (new) | `app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts` (candidate name) |
| Strategy → settings adapter | extend `openaiProvider.ts` or `runNoraAgentsTurn.ts` input |
| Capability validator | extend `capabilityBudget.ts` or shared manifest |
| D0 tests | `app/__tests__/nora-cognitive-runtime/mw2.*` |
| Eval scenarios | `app/__tests__/nora-eval/mw2.*` |
| F2 CKC hardening | `f2/ckcCognitiveContext.ts` · `f2/qualify.ts` |

### MAY IF EVIDENCE

| Area | Condition |
| --- | --- |
| `reasoning.mode=pro` wiring | High-Assurance EVAL gap |
| EventSink strategy telemetry | CE-07 need |
| Provider capability auto-fetch | Manual manifest burden proven |

### OUT

| Item | Reason |
| --- | --- |
| New cognitive engine / model router | R22 · C5 OUT |
| C5 / Roadmap / Build Doctrine edits | Scope |
| Responses compaction adoption | NOT ADOPTED |
| runtime v3 | NON ADOPTED |
| MW2-S03 | Does not exist |

**Delivery NOT AUTHORIZED by this document.**

---

## 24. Dependency/DAG check

```text
MW0 CLOSED
  └─ MW2-S01 (OD-02 OPEN)
       └─ MW2-S02
            └─ MW3+ (future)
```

- MW2-S02 depends on MW2-S01 per C5 — bootstrap ordering must respect S01 policy before S02 semantic assist requalification.
- OD-02 informs S01 envelope — **not consumed**.
- PRE-MW2-MODEL-BASELINE-01 parallel prerequisite for Delivery proof.

**DAG acyclic:** PASS.

---

## 25. Risks / debt / exit

| Risk | Mitigation | Exit |
| --- | --- | --- |
| OD-02 delay blocks Delivery | Decision Pack §17 | Morris decision |
| Effort/model mismatch | GAP-MW2-REASONING-CAPABILITY-01 | Validator + manifest |
| Profile/strategy confusion | D0 + PE neutrality | Eval regression |
| CKC fake authority | Disclosures + D0 | EVAL + REAL |
| Premature model routing | Explicit REJECT disposition | Evidence gate |
| Provider snapshot drift | Revalidate per campaign (doc08) | dated manifests |
| Policy debt | OD-02 | Morris + doc update |

---

## 26. Stop conditions

| Stop condition | Encountered? |
| --- | --- |
| origin/main ≠ anchor | **NO** |
| C5 modification required | **NO** |
| MW2-S03 needed | **NO** |
| Parallel architecture required | **NO** |
| OD-02 silently consumed | **NO** |
| Cycle/Profile→model mapping introduced | **NO** |
| Luna promoted production | **NO** |
| MW2 declared READY/AUTHORIZED | **NO** |
| OpenAI Capability Fit incomplete | **NO** |
| TA required without blocker | **NO** |

---

## 27. Exit proof

This readiness cycle proves:

- Source-lock preserved.
- Runtime seams discovered and classified.
- OpenAI fit qualified with dispositions.
- Gaps registered with blocking semantics.
- OD-02 Decision Pack produced · **not consumed**.
- Evidence plan defined (D0/EVAL/REAL).
- Delivery scope preview repo-derived.

**Does not prove:** MW2 implementation · cognitive completion · REAL MW2 evidence.

---

## 28. Morris decisions required

| Decision | Status |
| --- | --- |
| **OD-02** — Strategy→native settings policy (A/B/C) | **REQUIRED** |
| Readiness content validation | **PENDING** (after ChatGPT review) |
| Readiness Git integration | **NOT REQUESTED** (distinct GO) |
| MW2 Delivery GO | **NOT AUTHORIZED** |
| PRE-MW2-MODEL-BASELINE-01 execution | **DELIVERY PREREQUISITE** |

---

## 29. Anti-claims

This document and its review pack must **never** be read as:

- MW2 READY / AUTHORIZED / STARTED / DELIVERY AUTHORIZED
- Cognitive Completion PROVEN
- runtime v3 ADOPTED
- OD-02 CONSUMED
- Production model routing SELECTED
- GPT-5.6 Luna = production model
- Responses compaction ADOPTED
- TA REQUIRED (for current qualified scope)
- CANDIDATE PASS = Morris Delivery GO

---

## 30. Readiness verdict candidate

### MW2 READINESS / REQUALIFICATION — CANDIDATE PASS — SOURCE-LOCK PRESERVED — OPENAI CAPABILITY FIT QUALIFIED — NO TA REQUIRED — OD-02 MORRIS DECISION REQUIRED — DELIVERY NOT AUTHORIZED

**Reserves (non-blocking for candidate pass):**

- PRE-MW2-MODEL-BASELINE-01 OPEN.
- GAP-MW2-REASONING-CAPABILITY-01 requires Delivery closure.
- MW2-S02 semantic usefulness EVAL not yet executed.
- OD-02 envelope bounds undecided.

---

## 31. Next gates

1. **ChatGPT Critical Review** — read Review Handoff canonical L3.
2. Corrections if required.
3. **Morris** — validate readiness content · **decide OD-02**.
4. **Distinct GO** — Git integration of doc09 if validated.
5. Post-merge verification.
6. **Distinct GO** — PRE-MW2-MODEL-BASELINE-01 + MW2 Delivery.
7. MW2 Delivery execution + D0/EVAL/REAL proofs.
8. MW2 closure → MW3 readiness.

No gate auto-consumes the next.

---

*Fin du document 09 — MW2 READINESS / REQUALIFICATION CANDIDATE — AWAITING CHATGPT CRITICAL REVIEW + MORRIS VALIDATION — DELIVERY NOT AUTHORIZED — COGNITIVE COMPLETION NOT PROVEN — RUNTIME V3 NON ADOPTED.*
