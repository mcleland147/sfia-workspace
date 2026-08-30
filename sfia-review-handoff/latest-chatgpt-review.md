# SFIA STUDIO — OPENAI COGNITIVE RUNTIME TECHNOLOGY EVALUATION — BASELINE A vs OPENAI PRIMITIVES

**Timestamp (Europe/Paris):** 2026-08-30 14:42:51 CEST
**Cycle:** 6 — Architecture technique
**Typology:** DOC / ANALYSIS
**Profile:** CRITICAL
**CKC:** `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate · cognitive guidance only)
**Capability context:** Nora Cognitive Completion · MW1 Baseline A preserved (uncommitted)
**Verdict target:** READY FOR CHATGPT REVIEW / MORRIS DECISION GATE (OD-04) · NO ADOPTION
**Evidence classes in this pack:**
- **REPOSITORY FACT** — observed in worktree / published main
- **OPENAI DOCS VERIFIED 2026-08-30** — official openai.github.io/openai-agents-js/ (independently verified this cycle)
- **BRIEF HYPOTHESIS** — evaluation brief claim pending or PARTIAL where noted
- **ESTIMATE** — LOC / effort / complexity direction (not measured engineering quote)

---

## 1. LOCAL GIT TRUTH

| Field | Value | Class |
|---|---|---|
| Repo | `mcleland147/sfia-workspace` | REPOSITORY FACT |
| Worktree | `/Users/morris/Projects/sfia-workspace-nora-mw1-memory-b-compaction` | REPOSITORY FACT |
| Branch | `delivery/sfia-studio-nora-mw1-memory-b-compaction` | REPOSITORY FACT |
| HEAD | `f0bf7f0c8ef15e2e30e88283a1bd9d1447fef790` | REPOSITORY FACT |
| origin/main | `f0bf7f0c8ef15e2e30e88283a1bd9d1447fef790` | REPOSITORY FACT |
| Ahead / behind | 0 / 0 | REPOSITORY FACT |
| Project commit | **NONE** | REPOSITORY FACT |
| Project push / PR / merge | **NONE** | REPOSITORY FACT |
| Uncommitted MW1 Baseline A | **PRESERVED** (candidate + tests + evidence + review artifacts) | REPOSITORY FACT |
| CORR-MW1-07→09 | **HOLD / NOT STARTED** | REPOSITORY FACT |
| Sessions / Agents SDK in doctrine | **NOT SELECTED / NOT ADOPTED** | REPOSITORY FACT |
| `responses.compact` in repo | **0 hits** | REPOSITORY FACT |
| `openai` package | `^6.48.0` present | REPOSITORY FACT |
| `@openai/agents` | **ABSENT** | REPOSITORY FACT |
| `zod` | **ABSENT** | REPOSITORY FACT |

**Staged:** empty (expected for read-only analysis).
**Unstaged / untracked (summary):** MW1 candidate under `lib/nora-memory-b/**`, MW1 eval additions, F1/F2/types/prompt wiring, Product SQLite M9 touch, schema migration test touch, importBoundaries, `.tmp-nora-mw1-evidence/`, `.tmp-sfia-review/`.
**origin/main:** did not advance vs published SoT `f0bf7f0c…`. No STOP for requalification triggered.
**Hard boundary this cycle:** no stash / reset / clean / stage / project edit / npm install / project commit.

---

## 2. ROUTING

- Cycle **6** — Architecture technique
- Typology **DOC / ANALYSIS**
- Profile **CRITICAL**
- CKC pilot architecture technique = **candidate** (guidance, not binding architecture adoption)
- Applicable framing: Nora C1→C6, Product Completion, Build Doctrine, Convergence Roadmap, v3 docs 30/32/33/34/35/37
- SFIA v2.6 = **PROCESS ONLY**
- This pack is **decision support** for Morris OD-04 — not architecture truth, not Roadmap mutation

**Sources read (canonical, current repo versions):**
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/.../pilots/03-architecture-technique.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- Nora C1→C6 under `projects/sfia-studio/nora-cognitive-completion/`
- Applicable v3: 30, 32, 33, 34, 35, 37

**OpenAI official sources (verified 2026-08-30):**
- https://openai.github.io/openai-agents-js/
- …/guides/running-agents/
- …/guides/sessions/ (+ Advanced compaction)
- …/openai/agents/interfaces/session/
- …/guides/tools/
- …/guides/guardrails/
- …/guides/tracing/
- …/guides/testing/
- …/guides/human-in-the-loop/

---

## 3. MORRIS GO CONSUMED

**GO MORRIS — START OPENAI COGNITIVE RUNTIME TECHNOLOGY EVALUATION**

Consumed constraints (binding for this analysis):
- Preserve SFIA Studio product / business / authority spine
- Evaluate how far OpenAI cognitive primitives can improve Nora and replace **generic homegrown cognitive plumbing**
- MW1 local candidate = **BASELINE A** · preserved · not adopted · not ready for commit
- CORR-MW1-07→09 = **HOLD**
- **NO** architecture adoption · **NO** technology adoption · **NO** package install · **NO** code change · **NO** project document mutation
- **NO** project commit / push / PR / merge
- **NO** REAL campaign in this first pass · **NO** runtime v3 adoption
- Cognition ≠ Authority · Nora reasons/challenges/recommends · Studio owns governed state · Pilote owns HD · Morris owns construction/adoption gates

Purpose (objective questions):
1. Improve Nora toward validated ChatGPT-like target?
2. Remove/reduce generic homegrown cognitive plumbing?
3. Preserve SFIA business/authority spine?
4. Reduce maintenance / fragility / duplicated runtime logic?
5. Better trajectory MW1→MW6?

This is **NOT** an evaluation of replacing SFIA Studio.

---

## 4. SFIA HARD BOUNDARY

**OUT OF REPLACEMENT SCOPE (must remain SFIA):**
Project lifecycle · Cycle lifecycle · Living Project State / Truth C · ProjectTrajectory · HumanDecision · Confirmation · ExecutionContract · AgentCapability / effective authority · Evidence · ReviewBundle · DoctrinePackage / CKC business semantics · Materialization classes 1→4 · MaterializationBasis business rules · SFIA runtime gates · Pilote authority · construction governance · Product Completion closed chain.

**Hard principle:**
OpenAI cognitive runtime **MAY** assist / orchestrate cognition around SFIA state.
OpenAI cognitive runtime **MUST NOT** become SFIA business authority or Truth C.

**Never propose / never equate:**
- SDK approval = SFIA HumanDecision
- SDK approval = SFIA Confirmation
- Session = LPS
- Session = Truth C
- Agent trace = SFIA Evidence
- tool availability = effective authority
- Agent output = decision

---

## 5. BASELINE A INVENTORY

### 5.1 Classification legend
- **BUSINESS-SFIA** — product/authority/business semantics
- **COGNITIVE-GENERIC** — replaceable plumbing candidate
- **BOUNDARY-ADAPTER** — keep/adapt around OpenAI
- **EVAL/PROOF** — evaluation harness
- **TEMPORARY-CANDIDATE** — MW1 local, not adopted
- **UNCLEAR** — needs proof

### 5.2 Component inventory (LOC = ESTIMATE unless noted as counted in worktree)

| Component | LOC ESTIMATE | Class | Responsibility | Persistence | Authority | Disposition (Option C lens) |
|---|---|---|---|---|---|---|
| `lib/nora-memory-b/**` | **~1230** BUSINESS+TEMP CANDIDATE | TEMPORARY-CANDIDATE + BUSINESS-SFIA (materialization) | Memory B claims, compaction, resume prompt, B→C gate | Product SQLite M9 | Does **not** own Truth C; `authorizePromotionToTruthC` / `materializeToTruthC` gates | ADAPT Session adapter; KEEP materializeToTruthC + materializationBasis |
| `lib/nora-eval/**` | **~3366** EVAL/PROOF | EVAL/PROOF | MW0/MW1 D0/R1/R2, budgets, evidence serialize | Evidence artifacts | Owns NCC-BAR scoring semantics | KEEP core; SDK tests may complement only |
| `lib/platform/ai/**` | **~1035** GENERIC | COGNITIVE-GENERIC + BOUNDARY | Responses provider, FakeProvider, ConversationProvider | None (API) | None | ADAPT/REPLACE behind Runner under Option C |
| `lib/platform/tools/**` (tool loop) | **~1402** GENERIC | COGNITIVE-GENERIC | `runToolCallingLoop`, toolRouter | None | Tool availability ≠ authority | RETIRE large share under Option C Runner |
| `lib/platform/observability/**` | **~41** GENERIC | BOUNDARY-ADAPTER | EventSink / Noop | Local events | Observability only | KEEP; bridge to OpenAI Trace |
| `features/project-assistant/**` | **~20k** mostly BUSINESS | BUSINESS-SFIA | F1/F2/F3 product orchestration + UI | Product | Product path | KEEP business; peel cognitive loop |
| `orchestrateTurn.ts` | **~361** | BOUNDARY + BUSINESS | F1 turn + Memory B capture wiring | via Memory B | Product | ADAPT to Runner entry |
| `f2/**` | **~2107** (orchestrateF2 ~632 of) | BUSINESS-SFIA | Qualify/gate/decide | Product | Business gates | KEEP A; peel B cognitive |
| `buildProjectSystemPrompt.ts` | **~71** | BUSINESS + resume stitch | System prompt + Memory B section | — | Prompt privilege risk (B3) | ADAPT via callModelInputFilter / sessionInputCallback |
| Responses provider (`openai` ^6.48.0) | n/a | BOUNDARY | Live API | OpenAI | None | KEEP transport under Runner |
| `@openai/agents` | ABSENT | — | — | — | — | NOT ADOPTED |
| `responses.compact` | 0 hits | — | — | — | — | NOT USED |
| Sessions / Agents SDK doctrine | NOT SELECTED | — | — | — | — | Evaluation only this cycle |

### 5.3 nora-memory-b file map (counted in worktree; totals align ~1230)

| File | LOC (worktree count) | Role | Likely disposition |
|---|---|---|---|
| `types.ts` | ~120 | Claim/resume types | KEEP / ADAPT |
| `compaction.ts` | (in total) | Deterministic compactMemoryB | EVALUATE vs OpenAIResponsesCompactionSession |
| `materializationBasis.ts` | (in total) | Class 1–4 basis | **KEEP SFIA** |
| `materializeToTruthC.ts` | (in total) | B→C writer path | **KEEP SFIA** |
| `captureFromProductTurn.ts` | (in total) | Deterministic product capture | ADAPT / possibly KEEP policy |
| `memoryBService.ts` | ~344 | Service façade | ADAPT |
| `sqliteMemoryBRepository.ts` | ~174 | SQLite persistence | ADAPT → Session backend |
| `resumePrompt.ts` | ~63 | Prompt stitching | RETIRE/ADAPT → session hooks |
| `index.ts` | ~8 | Barrel | KEEP |

### 5.4 Grep / doctrine facts
- `runToolCallingLoop` = platform SoT for custom loop (F1, d1, OPS1)
- Sessions/Agents SDK = **NOT SELECTED / NOT ADOPTED** in Nora doctrine/cadrage
- CORR-MW1-07→09: no implementation strings / not started
- Baseline A uncommitted; prior CORR-01→06 closed in prior delivery pack; this pack **replaces** that delivery narrative with Cycle 6 architecture analysis

### 5.5 Fragility / debt (Baseline A)
- Homegrown tool loop duplicates industry Runner patterns
- Manual resumePrompt stitching creates B3 authority/prompt-injection surface
- Deterministic compaction lacks model-quality summarization; OpenAI compaction unverified in-repo
- MaterializationBasis / Class 1 Evidence fabrications = business blockers B1/B2 (not OpenAI-solvable)
- Parallel cognitive paths risk if Option D adopted without retirement plan

---

## 6. OPENAI OFFICIAL CAPABILITY VERIFICATION (H-OAI-01→12)

**Verification date:** 2026-08-30 · Source class: **OPENAI DOCS VERIFIED** (openai.github.io/openai-agents-js/)

| ID | Hypothesis | Status | Official source | Implication for Nora |
|---|---|---|---|---|
| **H-OAI-01** | Runner loop owns model/tools/handoffs/guardrails/session/tracing | **VERIFY** | Running Agents + overview | Can replace generic tool-loop orchestration |
| **H-OAI-02** | Session = pluggable persistent history | **VERIFY** | Sessions guide | Project-owned conversation continuity primitive |
| **H-OAI-03** | Custom Session (5 async methods) + Redis/SQLite/Prisma examples | **VERIFY** | Sessions guide | Product SQLite Session adapter is technically feasible |
| **H-OAI-04** | OpenAIResponsesCompactionSession wraps Session, calls `responses.compact` | **VERIFY** | Sessions Advanced compaction | Candidate for MW1-S02 hybrid |
| **H-OAI-05** | sessionInputCallback merges history + new items | **VERIFY** | Sessions | Policy control for Memory B replay |
| **H-OAI-06** | callModelInputFilter edits input/instructions before model | **VERIFY** | Running Agents | Primary lever for B3 mitigation |
| **H-OAI-07** | Function tools wrap TS functions / adapters | **VERIFY** | Tools guide | Wrap SFIA tools without granting SDK authority |
| **H-OAI-08** | MCP available; not required | **VERIFY** | Tools / overview | Optional; not mandated for Nora |
| **H-OAI-09** | Guardrails complement; not SFIA authority | **VERIFY** | Guardrails | Complement only |
| **H-OAI-10** | Tracing agent/model/tool/guardrail + custom processors | **VERIFY** | Tracing | Cognitive observability; ≠ Evidence |
| **H-OAI-11** | Testing utilities exist; must not auto-replace nora-eval | **VERIFY** (note: **PARTIAL** on exact nora-eval replacement fit) | Testing guide | Complement harness; NCC-BAR stays SFIA |
| **H-OAI-12** | HITL needsApproval interruptions ≠ SFIA HD/Confirmation without mapping | **VERIFY** | HITL guide | KEEP OUT as authority substitute |

**Package facts (docs):** `npm install @openai/agents zod` · Zod v4 required · Node 22+ supported server runtimes. **NO install this cycle.**

---

## 7. F1 / F2 DECOMPOSITION (A / B / C)

Do **not** claim “Agents SDK replaces F1/F2.” Decompose responsibilities:

### 7.1 F1 — `orchestrateProjectAssistantTurn` / product turn

| Slice | Kind | Must remain? | OpenAI candidate |
|---|---|---|---|
| Project identity / authz / capability effective authority | **A Product/SFIA** | YES | NONE (policy stays SFIA) |
| Load LPS / Truth C / trajectory context | **A** | YES | NONE as authority; Session may carry conversation only |
| Build business system prompt (project rules) | **A** + **C adapter** | YES policy | callModelInputFilter may assemble |
| Memory B capture after turn | **A/C** | Policy YES | Session persistence may absorb storage shape |
| Tool-calling loop / model roundtrips | **B Cognitive plumbing** | NO (replaceable) | **Runner** |
| Provider complete / Responses transport | **B/C** | Transport YES | Runner + openai client |
| EventSink telemetry | **C** | YES observability | Bridge OpenAI Trace |
| STOP honesty / epistemic separation instructions | **A** | YES | Guardrails complement only |

### 7.2 F2 — qualify / gate / decide (`orchestrateF2` et al.)

| Slice | Kind | Must remain? | OpenAI candidate |
|---|---|---|---|
| Qualification / cycle business gates | **A** | YES | NONE |
| Confirmation / HumanDecision surfaces | **A** | YES | HITL ≠ HD (H-OAI-12) |
| Tool selection under AgentCapability | **A** + thin **B** | Authority YES | Function tools wrap adapters |
| Narrative assembly for Pilote | **A** | YES | Model helps; SFIA owns meaning |
| Structured decide path | **A** | YES | Structured outputs via tools/schema — still SFIA contracts |

### 7.3 Target statement
**Minimum unnecessary custom cognitive runtime** — not maximum replacement.
Option C: Runner owns **B**; SFIA keeps **A**; thin **C** adapters remain.

---

## 8. NORA CAPABILITY MATRIX

Coverage key: NATIVE · NATIVE + SFIA POLICY · PARTIAL · NONE

| Capability | Nora source | Published impl | Baseline A | OpenAI primitive | Coverage | Removable SFIA | Mandatory SFIA | Complexity | Key risk | Evidence needed |
|---|---|---|---|---|---|---|---|---|---|---|
| Contextual intent | C1/C2 | F1/F2 prompts + tools | same + Memory B | Agent + tools | NATIVE + SFIA POLICY | generic prompt glue | intent/business policy | MED | overclaim | A/B + eval |
| Conversation continuity | C2 | message history ad hoc | Memory B resume | Session | NATIVE + SFIA POLICY | resumePrompt stitch | Project isolation | MED | cross-project leak | SQLite Session proof |
| Inter-session continuity | C2/MW1-S01 | Memory B SQLite | Baseline A | custom Session | NATIVE + SFIA POLICY | repo façade shape | Product ownership | MED | Session≠LPS | proof |
| Memory B | C5/MW1 | — | full candidate | Session + policy hooks | PARTIAL | storage shape | claim semantics / promotion | MED | B≡C confusion | policy tests |
| Context assembly | C2 | buildProjectSystemPrompt | + resume section | sessionInputCallback / callModelInputFilter | NATIVE + SFIA POLICY | manual stitch | privilege policy (B3) | MED | injection | B3 proof |
| Compaction | MW1-S02 | — | deterministic compact | OpenAIResponsesCompactionSession | PARTIAL | maybe deterministic core | material-loss disclosure | MED | silent loss | compaction proof |
| Adaptive strategy | C2 | limited | limited | Runner/Agent config | PARTIAL | — | SFIA strategy policy | HIGH | opacity | later MW |
| Tool/source selection | C2 | toolRouter + F2 | same | function tools | NATIVE + SFIA POLICY | router loop | AgentCapability | MED | tool=authority | mapping |
| Function/tool loop | C2 | runToolCallingLoop | same | Runner | NATIVE | **~400–800 LOC ESTIMATE** loop | SFIA tool adapters | MED | behavior drift | A/B |
| Source grounding | C2 | tools + prompts | same | tools + guardrails | PARTIAL | — | Evidence rules | MED | hallucination | eval |
| Contradiction handling | C2/v3-33 | prompts / F2 | same | model + policy | PARTIAL | — | epistemic model | HIGH | false resolve | eval |
| STOP honesty | C2 | prompts | same | output guardrails | PARTIAL | — | STOP doctrine | MED | soft STOP | eval |
| Epistemic separation | v3-33 | doctrine + prompts | same | none as authority | NONE as replacement | — | full SFIA | — | collapse | — |
| Narrative/evidence coherence | C2 | F2/F3 | same | tracing≠evidence | PARTIAL | — | Evidence/RB | MED | Trace=Evidence | boundary |
| Long-context | C2 | limited | Memory B | Session + compact | PARTIAL | — | disclosure | MED | cost | proof |
| Tracing/observability | ops | EventSink | same | Tracing + processors | NATIVE + SFIA POLICY | duplicate sinks | Evidence semantics | LOW | privacy | redaction design |
| Evalability | MW0/C6 | nora-eval | MW1 suites | testing utils | PARTIAL (H-OAI-11) | mock plumbing maybe | NCC-BAR / scenarios | MED | criteria drift | keep nora-eval |
| Recovery/resume | MW1-S01 | Memory B | Baseline A | Session | NATIVE + SFIA POLICY | stitch | invalidation vs Truth C | MED | stale resume | proof |
| Multi-agent/handoffs | optional | not primary | — | handoffs | NOT RELEVANT now | — | — | — | scope creep | defer |

---

## 9. MW1 RE-EVALUATION (S01 / S02 / S03)

### 9.1 MW1-S01 — Resume / Memory B
- Session **can** own conversational persistence (**H-OAI-02/03 VERIFY**)
- Custom Product SQLite Session **can** preserve Project ownership (**H-OAI-03**)
- sessionInputCallback / callModelInputFilter **can** enforce B context policy (**H-OAI-05/06**) — **does not eliminate** SFIA policy work
- `captureMemoryBFromProductTurn`: still needed as **policy/capture semantics** unless redesigned; storage may move under Session
- `MemoryBService` / `SqliteMemoryBRepository`: **ADAPT** into Session adapter rather than dual stores
- Manual `resumePrompt` stitching: **RETIRE/ADAPT** toward hooks

### 9.2 MW1-S02 — Compaction
Compare:
- **A** deterministic `compactMemoryB` — high control/reproducibility; weaker natural language quality
- **B** OpenAIResponsesCompactionSession / `responses.compact` — model compaction; need material-loss visibility policy
- **C hybrid** — SFIA policy trigger + OpenAI compaction decorator (**preferred investigation path**)

Assess: provenance & material-loss disclosure remain **SFIA policy**; cost/latency unknown without proof; invalidation after Truth C change remains SFIA.

### 9.3 MW1-S03 — B→C materialization
**MOST REMAINS SFIA.** OpenAI may help only at cognitive classification/proposal / I/O filtering / tool guardrails.
**KEEP SFIA:** MaterializationBasis · Class 1→4 · real Evidence validation · HumanDecision requirements · Truth C writer · audit · **`materializeToTruthC`**.
**OpenAI does NOT solve:** authority of promotion, fabricated Evidence IDs, Pilote HD, LPS versioning semantics.

---

## 10. CURRENT BLOCKER IMPACT (B1 / B2 / B3)

From ChatGPT Final Delivery Review blockers on Baseline A:

| Blocker | Eliminated by OpenAI? | Better primitive? | Remains SFIA regardless? | Throwaway if fixed now? | Preserve while pending |
|---|---|---|---|---|---|
| **B1** MaterializationBasis class matrix not enforced | **NO** | NO | **YES** | Partial — basis code is KEEP | `materializationBasis.ts` + tests |
| **B2** Class 1 fabricates `ev:mb-*` / `rb:mb-*` | **NO** | NO | **YES** | Fixing Evidence path is KEEP work | real Evidence/RB writers; `materializeToTruthC` |
| **B3** non-authoritative Memory B replayed into system instructions | **NO (not alone)** | **YES** — Session + **callModelInputFilter** / sessionInputCallback | Policy **YES** | High risk of throwaway if stitch-only fix without Session design | capture policy; avoid deepening resumePrompt privilege |

**Conclusion:** B1/B2 remain SFIA business regardless of OpenAI. B3 is **materially helped** by Session + callModelInputFilter / sessionInputCallback — **not eliminated** by OpenAI alone; SFIA privilege policy still required.

---

## 11. OPENAI PRIMITIVE FIT (INDIVIDUAL)

| # | Primitive | Capability | Maturity (docs) | Nora use | Replaces | Cannot replace | Authority risk | Privacy | Lock-in | Reversibility | Cost | Rec |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Agent | Unit of cognition | Documented | Nora agent shell | ad hoc agent object | SFIA roles | MED if over-scoped | LOW | MED | HIGH | LOW | STRONG CANDIDATE |
| 2 | Runner | Loop | Documented | Replace tool loop | runToolCallingLoop | business gates | MED | LOW | MED | MED | LOW | STRONG CANDIDATE |
| 3 | Session interface | History port | Documented | Continuity | ad hoc history | LPS/Truth C | LOW if local | MED | MED | HIGH | LOW | STRONG CANDIDATE |
| 4 | Custom Session backend | Persist | Documented + examples | Product SQLite | sqliteMemoryBRepository shape | claim promotion rules | LOW | LOW (local) | LOW | HIGH | MED | STRONG CANDIDATE |
| 5 | OpenAIConversationsSession | Hosted conv | Documented | Optional | local history | Project isolation preference | MED | HIGH | HIGH | LOW | MED | KEEP OUT as primary |
| 6 | MemorySession | In-memory | Documented | Tests/fixtures | — | production persist | LOW | LOW | LOW | HIGH | LOW | EVALUATE (fixtures) |
| 7 | OpenAIResponsesCompactionSession | Compact | Documented | MW1-S02 | maybe deterministic compact | disclosure policy | LOW | MED | MED | MED | MED | EVALUATE / optional |
| 8 | conversationId / previousResponseId | API continuity | Responses | alternate | — | Product SoT | MED | MED | HIGH | MED | MED | KEEP OUT as primary SoT |
| 9 | sessionInputCallback | Merge policy | Documented | B context | resume stitch | business meaning | MED (if misused) | LOW | LOW | HIGH | LOW | STRONG CANDIDATE |
| 10 | callModelInputFilter | Pre-model edit | Documented | **B3** | prompt privilege bugs | HD/Confirmation | MED | LOW | LOW | HIGH | LOW | STRONG CANDIDATE |
| 11 | function tools | Wrap TS | Documented | SFIA adapters | custom router glue | effective authority | MED if confused | LOW | LOW | HIGH | LOW | STRONG CANDIDATE |
| 12 | hosted tools | OpenAI hosted | Documented | rare | — | SFIA grounding | HIGH | HIGH | HIGH | LOW | MED | KEEP OUT default |
| 13 | MCP | Tool bus | Documented | optional | — | required spine | MED | MED | MED | MED | MED | NOT REQUIRED |
| 14–16 | guardrails I/O/tool | Safety rails | Documented | complement | some prompt checks | SFIA authority | LOW if complement | LOW | LOW | HIGH | LOW | EVALUATE |
| 17 | HITL approvals | Interruptions | Documented | UX pause only | — | **HD/Confirmation** | **HIGH** | LOW | MED | MED | LOW | KEEP OUT as authority |
| 18–19 | tracing + processors | Spans | Documented | cognitive obs | duplicate logs | Evidence/RB | MED if equated | HIGH | MED | HIGH | LOW | EVALUATE + redaction |
| 20 | testing utilities | Doubles | Documented | complement | some mocks | nora-eval NCC-BAR | LOW | LOW | LOW | HIGH | LOW | EVALUATE complement |
| 21 | handoffs / agents-as-tools | Multi-agent | Documented | not primary | — | Studio single-Nora | MED | LOW | MED | MED | MED | NOT RELEVANT now |

---

## 12. OPTION A — CURRENT HOMEGROWN

**Target:** Stay on Responses API direct + current F1/F2 + custom tool loop + MW1 Memory B SQLite + deterministic compaction + nora-eval + SFIA EventSink.

| Aspect | Assessment |
|---|---|
| Retained SFIA spine | FULL |
| OpenAI primitives | Responses only (`openai` ^6.48.0) |
| Code retired | None of cognitive plumbing |
| Benefits | Lowest immediate blast radius; no new deps |
| Limitations | Maintains ChatGPT-like gap; resume/compaction/tool-loop burden |
| Risks | Continued fragility; B3 stitch debt; duplicate industry patterns |
| Reversibility | N/A (status quo) |
| Proof status | Baseline A exists; delivery NOT ready for commit |
| MW1→MW6 | Homegrown cost compounds |

**Verdict on A:** Keeps maintenance burden / ChatGPT-like gap. Acceptable only as hold if Morris rejects OpenAI cognitive runtime entirely.

---

## 13. OPTION B — SELECTIVE OPENAI MEMORY

**Target:** Keep F1/F2/tool loop. Introduce Agents Session primitives where appropriate: custom Product SQLite Session; possibly OpenAIResponsesCompactionSession; session/model input hooks. Goal: reduce Memory B plumbing without changing agent loop.

| Aspect | Assessment |
|---|---|
| Retained SFIA spine | FULL |
| OpenAI primitives | Session + hooks + optional CompactionSession |
| Code retired | resumePrompt stitch; partial Memory B service shape ESTIMATE |
| Code retained | tool loop ~1402; F1/F2 business; materializeToTruthC |
| Migration complexity | LOW–MEDIUM |
| Benefits | Smaller blast radius; attacks B3/S01/S02 directly |
| Limitations | Leaves generic Runner-shaped loop in-house |
| Risks | Two persistence mental models if dual-write |
| Reversibility | HIGH |
| Proof status | Needs same smallest A/B Session proof |

**Verdict on B:** Lower-risk incremental path if Morris wants smaller blast radius. Valid stepping stone toward C.

---

## 14. OPTION C — HYBRID OPENAI COGNITIVE RUNTIME (PREFERRED)

**Target:** Agents SDK **Runner** owns generic cognitive loop. Custom SFIA tools/adapters. Custom **Product SQLite Session**. OpenAI compaction decorator **optional**. OpenAI tracing + SFIA evidence bridge. **SFIA business/governance spine fully retained.**

| Aspect | Assessment |
|---|---|
| Retained SFIA spine | FULL (Truth C, HD, EC, Evidence, MaterializationBasis, gates) |
| OpenAI primitives | Runner, Agent, Session, callModelInputFilter, sessionInputCallback, function tools, tracing; optional CompactionSession; guardrails complement |
| Code retired ESTIMATE | ~400–800 LOC custom tool-loop orchestration + resumePrompt stitching |
| Code added ESTIMATE | Session adapter ~200–400 LOC; thin Runner wiring |
| Code retained | materializeToTruthC + materializationBasis + nora-eval core + F1/F2 **A** slices |
| Net complexity | **DOWN** for cognitive plumbing; **UP briefly** during migration |
| Benefits | Best alignment Cognition≠Authority; ChatGPT-like loop quality; B3 levers; MW2→MW6 leverage |
| Limitations | New deps (`@openai/agents`, Zod v4); Node 22+; learning curve |
| Risks | Accidental HITL=HD; Trace=Evidence; over-replacement of F2 business |
| Reversibility | MED–HIGH if Session stays Product-local and Runner behind boundary |
| Proof status | Static analysis sufficient to **prefer** C; **targeted A/B proof required** before install/rewrite |

**Verdict on C:** **Prefer OPTION C** as architecture **target for OD-04 discussion**. **NO ADOPTION in this cycle.**

---

## 15. OPTION D — OPENAI-HEAVY COGNITIVE RUNTIME

**Target:** Runner + broader server-managed conversation state + compaction + tools + guardrails + tracing + broader SDK orchestration. Truth C / SFIA authority still SFIA on paper.

| Aspect | Assessment |
|---|---|
| Code reduction vs C | Marginal at best; may add integration surface |
| Server-state coupling | HIGH risk (OpenAIConversationsSession / hosted state) |
| Product persistence duplication | HIGH (second conversation SoT) |
| Reversibility | LOWER |
| Parallel-runtime risk | HIGH if homegrown loop not fully retired |
| Recommendation | **KEEP OUT as primary** |

**Explicit test result:** D does **not** clearly reduce code more than C; creates undesirable server-state coupling; duplicates Product persistence; reduces reversibility; risks second runtime. **KEEP OUT as primary.**

---

## 16. COMPARATIVE SCORING

Scale: HIGH / MEDIUM / LOW (qualitative; no fabricated benchmarks). Direction: higher = better unless noted.

| Dimension | A | B | C | D |
|---|---|---|---|---|
| 1 Nora cognitive coverage | MED | MED+ | **HIGH** | HIGH |
| 2 ChatGPT-like potential | LOW–MED | MED | **HIGH** | HIGH |
| 3 Custom code removed | LOW | MED | **HIGH** | MED–HIGH |
| 4 Custom code added (lower better) | LOW | MED | MED | HIGH |
| 5 Business-spine preservation | HIGH | HIGH | **HIGH** | MED risk |
| 6 B ≠ C integrity | MED | MED+ | **HIGH** (if policy) | MED risk |
| 7 Authority integrity | HIGH | HIGH | HIGH if discipline | **LOW–MED** risk |
| 8 Tool integration fit | MED | MED | **HIGH** | HIGH |
| 9 Source intelligence fit | MED | MED | MED+ | MED+ |
| 10 Compaction/context quality | MED | MED+ | **HIGH** pot. | HIGH pot. |
| 11 Observability | MED | MED | **HIGH** | HIGH |
| 12 Evalability | HIGH (nora-eval) | HIGH | HIGH | MED risk |
| 13 Deterministic testability | HIGH | HIGH | MED+ | MED |
| 14 REAL testability | MED | MED | MED | MED |
| 15 Resilience / recovery | MED | MED+ | **HIGH** pot. | MED |
| 16 Latency | MED | MED | MED | MED– |
| 17 API operating cost | MED | MED | MED+ | HIGH risk |
| 18 Development cost (near) | LOW | MED | MED–HIGH | HIGH |
| 19 Maintenance cost (long) | HIGH | MED | **LOW–MED** | MED |
| 20 SDK upgrade burden | LOW | MED | MED | HIGH |
| 21 Vendor lock-in (lower better) | LOW | MED | MED | HIGH |
| 22 Data/privacy (higher=safer) | HIGH local | HIGH local | HIGH if local Session | LOW–MED |
| 23 Reversibility | HIGH | HIGH | MED–HIGH | LOW |
| 24 Migration complexity (lower better) | LOW | MED | MED–HIGH | HIGH |
| 25 Parallel-runtime risk (lower better) | LOW | LOW | MED | **HIGH** |
| 26 MW2→MW6 leverage | LOW | MED | **HIGH** | MED |

**Scoring read:** Option C dominates capability + plumbing reduction with spine preservation; B is safer incremental; A stagnates; D loses on coupling/reversibility.

---

## 17. CODE REDUCTION ANALYSIS

### 17.1 Per-file disposition (Baseline A → Option C)

| Artifact | KEEP | ADAPT | REPLACE | RETIRE | RETIRE LATER | STILL REQUIRED |
|---|---|---|---|---|---|---|
| `nora-memory-b/types.ts` | | ADAPT | | | | YES |
| `compaction.ts` | policy | ADAPT | maybe engine | | optional | disclosure YES |
| `materializationBasis.ts` | **KEEP** | | | | | **YES** |
| `materializeToTruthC.ts` | **KEEP** | | | | | **YES** |
| `captureFromProductTurn.ts` | policy | ADAPT | | | | YES |
| `memoryBService.ts` | | ADAPT | | | | façade YES |
| `sqliteMemoryBRepository.ts` | | ADAPT→Session | | | | YES |
| `resumePrompt.ts` | | | | **RETIRE** into hooks | | policy YES |
| F1/F2 Memory B wiring | | ADAPT | | | | YES |
| custom tool loop (`platform/tools`) | adapters | | **REPLACE** by Runner | large share | | tool defs YES |
| `platform/ai` provider | | ADAPT | | | | transport YES |
| `nora-eval` | **KEEP core** | complement | | | | **YES** |
| EventSink | KEEP | bridge | | | | YES |

### 17.2 Quantitative ESTIMATE (Option C)

| Item | ESTIMATE |
|---|---|
| LOC retired (tool-loop orchestration + resumePrompt stitching) | **~400–800 LOC** |
| New Session adapter + Runner boundary LOC | **~200–400 LOC** |
| Files removable outright | Few whole files; more function-level retirement |
| KEEP mandatory | `materializeToTruthC` + `materializationBasis` + nora-eval core |
| Net complexity direction | **DOWN** cognitive plumbing; **UP briefly** during migration |

Option B ESTIMATE: smaller retirement (~resume/Memory B only); tool loop remains.
Option D ESTIMATE: similar retirement to C but higher new integration + hosted-state adapters — net often worse.

---

## 18. PACKAGE / RUNTIME COMPATIBILITY

**Baseline (REPOSITORY FACT):** `openai` ^6.48.0 · Next 15.3.3 · React 19.1 · TypeScript 5.8 · Node types 22.x · **no** `@openai/agents` · **no** zod.

**Would be required for adoption (docs, NOT installed):**
- `@openai/agents`
- `zod` **v4**
- Node.js **22+** server runtimes supported

**Implications (analysis only):**
- Dependency additions + possible Zod v4 collision if other packages expect Zod v3 (currently zod absent — collision risk currently LOW)
- Next.js: Agents SDK must stay on **server** boundary (Route Handlers / server actions) — not browser bundle
- Tracing defaults may export sensitive spans — need redaction processors before any enablement
- **NO npm install** this cycle

---

## 19. SECURITY / DATA / AUTHORITY REVIEW

| Topic | Assessment |
|---|---|
| Session data location | Prefer **Product SQLite** (Project-scoped) under Options B/C |
| Server-managed OpenAI conversation state | Raises isolation/privacy/coupling — primary reason D is KEEP OUT |
| Tracing sensitive data | Treat as cognitive obs; redact; never auto-promote to Evidence |
| Input/history injection (B3) | Mitigate with callModelInputFilter + privilege policy; not solved by SDK alone |
| Prompt privilege | Memory B user-derived ≠ system authority |
| Tool authorization | Function tools wrap SFIA adapters; effective authority stays SFIA |
| HITL vs HD | **Hard forbid** silent equivalence (H-OAI-12) |
| Hosted tools | Default KEEP OUT — data boundary unclear |
| Cross-Project isolation | Success criterion for any Session proof |
| OpenAI convenience vs authority | Must not silently weaken SFIA authority |

---

## 20. OBSERVABILITY / EVIDENCE BOUNDARY

**Candidate relation (NOT DECIDED):**
- OpenAI Trace = cognitive observability
- SFIA EventSink = runtime observability / bridge
- SFIA Evidence / ReviewBundle = governed project proof

| Question | Answer |
|---|---|
| Duplicate data? | Possible overlap on tool/model spans — bridge, don’t double-write Evidence |
| Complementarity? | YES if Trace→EventSink mapping is explicit |
| Retire EventSink? | **NO** |
| Retire Evidence? | **NO** |
| Prevent Trace ⇒ Evidence confusion? | Explicit non-equivalence in doctrine/adapters; no auto materialization |

---

## 21. EVAL STRATEGY

| Layer | Owner |
|---|---|
| Scenario semantics / NCC-BAR | **nora-eval / SFIA** |
| Execution harness | nora-eval (keep) |
| Provider mocks | nora-eval + optional SDK test doubles |
| REAL campaigns | SFIA-gated; deferred here |
| Scoring | SFIA BAR bindings |
| Evidence serialization | nora-eval / Evidence path |

SDK testing utilities (**H-OAI-11 VERIFY**, replacement fit **PARTIAL**): may complement mechanics; **must not auto-replace nora-eval**. Do not replace SFIA evaluation criteria with generic OpenAI metrics.

---

## 22. MW2→MW6 TRAJECTORY IMPACT

### 22.0 Candidate trajectory (NOT Roadmap truth)

```
CURRENT:
  MW1 Baseline A local / uncommitted / partial final review
  CORR-MW1-07→09 HOLD

THEN:
  OpenAI Cognitive Runtime Evaluation (this DOC/ANALYSIS) COMPLETE

THEN:
  Morris technology decision (OD-04): A / B / C / D
  or targeted A/B proof GO (Session + callModelInputFilter + optional CompactionSession)

THEN:
  requalify MW1 closure against chosen target
  (still NO silent adoption; CORR-07→09 only under explicit GO)

THEN:
  only after MW1 closure / technology alignment:
  MW2 CWP
```

Do **not** declare this Roadmap truth yet. Build Doctrine / Roadmap files untouched.

| Milestone lens | Under A | Under B | Under C | Under D |
|---|---|---|---|---|
| MW1 closure | Harder (plumbing debt) | Easier S01/S02 | Easier if proof passes | Risky dual SoT |
| MW2 CWP / cognitive work packaging | Low leverage | Medium | **High** (Runner+tools) | Unstable base |
| MW3+ adaptive / long-context | Homegrown cost | Partial | Session+compact leverage | Hosted-state debt |
| MW6 cognitive completion claim | Unlikely without ChatGPT-like loop quality | Partial | Best structural bet | Authority/privacy drag |

**Leverage claim (hypothesis + static analysis):** Option C maximizes reusable cognitive substrate while keeping SFIA spine — best MW2→MW6 leverage among options compared.

---

## 23. BUILD DOCTRINE CHECK (12 QUESTIONS)

1. **Which v3 capability is served?** Nora cognitive runtime quality around LPS/HD/Evidence without replacing them (v3-30/32/33/34/35 adjacent).
2. **Useful now?** YES as decision support; NOT useful as silent adoption.
3. **Reusable assets?** Product SQLite, nora-eval, SFIA tools/adapters, Memory B policy kernels, EventSink.
4. **Parallel cognitive runtime?** Option D yes-risk; Option C only if old loop not retired — must plan single path.
5. **Temporary/retirable homegrown?** tool-loop orchestration, resumePrompt stitching, possibly deterministic compaction engine.
6. **E2E proof needed?** Smallest A/B below + later MW1 requalification against chosen target.
7. **What follows decision?** Requalify MW1 closure; only then MW2 CWP.
8. **Debt created?** Temporary dual adapters during migration; Zod/agents dependency debt if adopted later.
9. **Repetitive vs structuring?** This cycle = structuring arbitration (OD-04), not repetitive coding.
10. **Morris gate?** **OD-04 technology/architecture decision** (+ separate GO for any proof).
11. **Reversible?** B/C with local Session = reversible; D hosted state = weaker.
12. **Minimizes unnecessary custom plumbing?** **Option C** (preferred). Option B if blast-radius constrained.

---

## 24. STATIC ANALYSIS SUFFICIENCY

**STATIC ANALYSIS: SUFFICIENT TO RECOMMEND Option C** as preferred architecture **target** for OD-04 discussion.

**ALSO: TARGETED A/B TECHNICAL PROOF REQUIRED** before any package install / MW1 rewrite.

This is **not** contradictory: static analysis supports preference; empirical proof gates implementation authorization.

---

## 25. SMALLEST A/B TECHNICAL PROOF (NO IMPLEMENTATION AUTHORIZATION)

| Field | Definition |
|---|---|
| Uncertainty | Can Product SQLite Session + callModelInputFilter enforce Project isolation + B3 privilege without Truth C mutation / HD confusion? |
| Minimal scope | custom SQLite Session + **callModelInputFilter (B3)** + optional CompactionSession on **MemorySession fixture** |
| Exact primitives | Session (custom), callModelInputFilter, optional OpenAIResponsesCompactionSession |
| Success criteria | (1) Project isolation (2) **no Truth C mutation** (3) material-loss disclosure policy honored if compact used (4) **no HD/Confirmation confusion** |
| Fail criteria | Cross-project bleed; silent Truth C write; undisclosed material loss; SDK approval treated as HD |
| REAL need | Prefer fixture/MemorySession first; paid REAL only if fixture inconclusive — separate GO |
| Cost envelope | Engineering spike only after Morris GO; no unpaid assumption of REAL campaign |
| Exit/removal | Delete spike branch/packages; Baseline A untouched |
| Authorization now | **NONE** — recommendation for proof ≠ authorization to execute |

---

## 26. RECOMMENDATION (NO ADOPTION)

**Prefer OPTION C — HYBRID OPENAI COGNITIVE RUNTIME**
- Runner owns generic loop
- Custom Product SQLite Session
- OpenAI compaction decorator optional
- SFIA tools
- SFIA spine retained

**Option B** = lower-risk incremental path if Morris wants smaller blast radius.
**Option A** = keeps maintenance burden / ChatGPT-like gap.
**Option D** = KEEP OUT as primary (second runtime / server-state duplication / lower reversibility).

**This cycle:**
- **NO ADOPTION**
- CORR-MW1-07→09 remain **HOLD**
- Static analysis sufficient to recommend C for OD-04 discussion
- Targeted A/B proof required before package install / MW1 rewrite
- B1/B2 remain SFIA business regardless of OpenAI
- B3 materially helped by Session + callModelInputFilter / sessionInputCallback (SFIA policy still required)
- MW1-S03 MaterializationBasis / Class 1–4 / Truth C writers / **materializeToTruthC** KEEP SFIA

**Recommendation ≠ decision. OD-04 remains Morris gate.**

---

## 27. OPEN QUESTIONS / DEBT / NON-DECISIONS

**Non-decisions (explicit):**
- No architecture adopted
- No technology adopted
- No project mutation
- Cognitive Completion **NOT PROVEN**
- runtime v3 **NON ADOPTED**
- REAL-B **deferred**
- Roadmap **not** updated
- Sessions/Agents SDK remain doctrine **NOT SELECTED** until Morris decides

**Open questions:**
- Exact Zod v4 interaction with future deps
- Compaction material-loss observability API shape in product UX
- Whether captureFromProductTurn remains distinct from Session append semantics
- Trace→EventSink mapping design
- Whether Option B should be mandated as intermediate milestone before C

**Debt if C later adopted:** migration window with dual loop risk; training; eval recalibration.

---

## 28. REVIEW PACK / HANDOFF NOTES

- Pack path: `.tmp-sfia-review/chatgpt-review.md` (this file) — **FULL analytical** Cycle 6 DOC/ANALYSIS
- Overwrites prior MW1 CORR delivery pack entirely
- Project/versioned files: **unmodified** by this analysis
- Canonical review-handoff publish (L3) is a **separate** authorized step when parent requests it; not implied by writing this file alone

---

## 29. LOCAL GIT FINAL STATUS

Confirm at analysis close (REPOSITORY FACT intent):
- HEAD still `f0bf7f0c8ef15e2e30e88283a1bd9d1447fef790`
- origin/main same
- ahead/behind 0/0
- **no project commit** created by this cycle
- Baseline A uncommitted tree **preserved**
- CORR-MW1-07→09 still HOLD
- Only intended write: this temporary review pack under `.tmp-sfia-review/`

---

## 30. FINAL VERDICT

OPENAI COGNITIVE RUNTIME EVALUATION — ANALYSIS COMPLETE
= SFIA BUSINESS / AUTHORITY SPINE PRESERVED
= BASELINE A INVENTORIED
= OPENAI CAPABILITIES VERIFIED
= OPTIONS COMPARED
= CODE-REDUCTION IMPACT QUALIFIED
= MW1→MW6 IMPACT QUALIFIED
= SECURITY / AUTHORITY BOUNDARIES QUALIFIED
= RECOMMENDATION PREPARED
= NO ARCHITECTURE ADOPTED
= NO TECHNOLOGY ADOPTED
= NO PROJECT MUTATION
= READY FOR CHATGPT REVIEW / MORRIS DECISION GATE

**Preferred target (discussion only):** OPTION C — HYBRID OPENAI COGNITIVE RUNTIME
**Next gate:** Morris OD-04 · optional separate GO for smallest A/B proof (custom SQLite Session + callModelInputFilter + optional CompactionSession fixture)
**STOP.**
