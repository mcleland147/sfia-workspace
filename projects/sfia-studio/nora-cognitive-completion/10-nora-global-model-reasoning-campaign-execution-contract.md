# 10 — Nora Global Model × Reasoning Campaign ExecutionContract (CANDIDATE)

| Field | Value |
| --- | --- |
| **Document ID** | `NORA-GLOBAL-MR-CAMPAIGN-EXECUTION-CONTRACT-01` |
| **Contract version** | `global-mr-campaign-contract-v3-candidate` (Option C local candidate; main still hosts v2 until integration) |
| **Status** | **GIT INTEGRATION CANDIDATE** — D-GMR-ASTRA-01/02 + D-GMR-FINOPS-01 + D-GMR-GIT-01 consumed · harness Option C + C6 FinOps · 78/438/464 · USD **15/18/20 DECIDED** · known subtotal ≈13.32896 COMPATIBLE_WITH_CURRENT_POLICY · ZERO REAL — Stage A REAL NOT AUTHORIZED — merge NOT AUTHORIZED |
| **Baseline Git (snapshot)** | `origin/main` = `1dd5d67ad942c448becd637f4c2e55883d16ffca` (PR **#467** merge) |
| **Accepted product head** | `3fb1624c8b373b75dfcd48a64797a7927cb76019` |
| **Merge parents** | `23d850fda45fe55ba519e0feefe63369d349afcc` + `3fb1624c8b373b75dfcd48a64797a7927cb76019` |
| **Head→merge product delta** | **ZERO** |
| **Post-merge CI** | run `33981467237` SUCCESS · Required Gate **PASS** |
| **G1/G2/G3** | INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR **#466** @ `23d850fda45fe55ba519e0feefe63369d349afcc`) |
| **Integration GO** | `GO MORRIS — GLOBAL MODEL × REASONING STAGE A GIT INTEGRATION + PUBLISH REVIEW HANDOFF — ZERO REAL` **CONSUMED** |
| **Merge GO** | `GO Morris — merge PR #467` **CONSUMED** |
| **This DOC maintenance** | `NORA-GLOBAL-MR-STAGE-A-OPTION-C-ASTRA-CHALLENGER-01` — Option C Astra challenger adaptation (**local delivery candidate until ChatGPT Critical Review → Morris technical+financial+Git GO**) |
| **Authoring date** | 2026-09-05 |
| **Preparation GO** | `GO MORRIS — PRÉPARER LE GLOBAL MODEL × REASONING CAMPAIGN EXECUTIONCONTRACT CONSOLIDÉ — ZERO REAL` **CONSUMED** |
| **Enablement GO** | `GO MORRIS — CORRECTION GLOBAL MODEL × REASONING STAGE A ENABLEMENT — ZERO REAL` **CONSUMED (local candidate only)** |
| **Correction 2 GO** | `… CORRECTION 2 …` **CONSUMED (local)** |
| **Correction 3 GO** | `GO MORRIS — GLOBAL MODEL × REASONING STAGE A ENABLEMENT CORRECTION 3 — ZERO REAL` **CONSUMED (local candidate only)** |
| **Correction 4 GO** | `GO MORRIS — CORRECTIF GLOBAL MODEL × REASONING STAGE A + PUBLISH REVIEW HANDOFF — ZERO REAL` **CONSUMED (local candidate only)** |
| **REAL authorization** | **NOT GRANTED** by this document |

### Three truth layers (do not conflate)

| Layer | What it contains | Status |
| --- | --- | --- |
| **A. INTEGRATED MAIN TRUTH** (`main@1dd5d67a`) | G1/G2/G3 + Stage A deterministic harness E1–E4 / F1→F5 / C3 / C4 + this contract text as integrated via PR **#467** | **INTEGRATED ON MAIN / POST-MERGE VERIFIED** |
| **B. CAMPAIGN READINESS** | Option C model universe **DECIDED** · financial envelope + REAL auth still required | **TECHNICAL PROVEN / FINANCIAL OPEN** (see doc `11-…`) |
| **C. PROOF CEILING** | Deterministic harness proof + Git integration + post-merge CI | **DETERMINISTIC PROVEN + GIT INTEGRATED + POST-MERGE VERIFIED** — Stage A REAL **NOT AUTHORIZED / NOT EXECUTED / NOT PROVEN** |

---

## 0. What this document is / is not

### IS
- A **construction/evaluation campaign contract** for a future Global Model × Reasoning empirical campaign.
- An **executable specification** of stages, matrix, budgets, metrics, early-stop, promotion, Evidence, authority, and outcomes.
- An **input** to a future Morris Stage A REAL gate (only after REAL readiness qualification + explicit Morris Stage A REAL GO).
- An **assembly** of repository primitives **plus** Stage A enablement glue (E1–E4) now **integrated on main** via PR **#467**.

### IS NOT
- A product `ExecutionContract` schema mutation.
- A new architecture, persistence, provider, router, or runtime v3 adoption.
- A production model selection.
- An authorization to spend OpenAI / Hosted Web Search / Stage A–C.
- A campaign result or Cognitive Completion proof.
- A claim that Stage A REAL has been executed or that Cognitive Completion / production routing / runtime v3 are proven/selected/adopted.

**Preparation authorization ≠ REAL execution authorization.**
**Deterministic proven ≠ REAL proven (R21).**

---

## 1. Experimental question

> Which **model × reasoning-effort** pair provides the best measured compromise for Nora by **cognitive workload family**, under quality, stability, governance, latency, tokens, and cost constraints?

The design MUST separately identify:

| Effect | How measured |
| --- | --- |
| **MODEL EFFECT** | Hold workload + effort fixed; vary `gpt-5.6-luna` / `terra` / `sol` |
| **REASONING EFFORT EFFECT** | Hold workload + model fixed; vary effort (Stage A: none/medium/high; Stage B may add low/xhigh/max) |

**Out of scope:** SFIA Profile testing. Cognitive Workload Profile ≠ SFIA Profile.

---

## 2. Provider capability snapshot (dated Evidence)

**Revalidated (public official docs) — 2026-09-05** against OpenAI API model pages + reasoning guide.

| Model ID | Alias | Reasoning efforts (official) | Input $/MTok | Cached input $/MTok | Output $/MTok |
| --- | --- | --- | --- | --- | --- |
| `gpt-5.6-luna` | — | none / low / medium / high / xhigh / max | 0.20 | 0.02 | 1.20 |
| `gpt-5.6-terra` | — | none / low / medium / high / xhigh / max | 2.00 | 0.20 | 12.00 |
| `gpt-5.6-sol` | `gpt-5.6` | none / low / medium / high / xhigh / max | 4.00 | 0.40 | 20.00 |

Sources (public):
- https://developers.openai.com/api/docs/models/gpt-5.6-luna
- https://developers.openai.com/api/docs/models/gpt-5.6-sol
- https://developers.openai.com/api/docs/guides/reasoning

**Alignment with integrated G1** (`buildGlobalModelReasoningCapabilityManifest`):
- Same three model IDs; same effort universe; same list prices for input/output.
- `minimal` remains **NON-ADMISSIBLE** for GPT-5.6 family in campaign matrix.
- Unknown model → **FAIL-CLOSED / PROVIDER_CAPABILITY** (never cognitive FAIL).
- **Primary cohort (KEEP):** Luna/Terra/Sol × none/medium/high × 6 = **54**.
- **Astra challenger (Option C ADOPTED):** `gpt-6-astra` × **medium only** × 6 = **6** ONE-SHOT (no selective repeats).
- Astra efforts capability: `low|medium|high|xhigh|max` (**no `none`/`minimal`**); pricing $10 / $1 cached / $50 per 1MTok; account availability **NOT PROVEN**.
- Stage A is **not** a 4×3×6 Cartesian expansion.

**Caveats**
- Snapshot = **campaign Evidence**, not permanent doctrine; revalidate at Stage A REAL start.
- Sol promotional pricing noted “at least through November 21, 2026” on official Sol page — re-check before REAL.
- Integrated G1 pricing objects do **not** currently populate `cachedInputUsdPerMTok` → see FinOps gap §18.
- Snapshot ≠ production routing ≠ REAL authorization.

**Disposition:** No material contradiction with G1 → **NO STOP — PROVIDER CAPABILITY SNAPSHOT DRIFT**.

---

## 3. Primitive assembly (main + local enablement)

| Concern | Existing primitive | Path | Layer |
| --- | --- | --- | --- |
| Global capability policy | `buildGlobalModelReasoningCapabilityManifest` | `app/lib/nora-eval/capabilityBudget.ts` | MAIN (G1) |
| Catalog | `global-mr-catalog-v1` | `app/lib/nora-eval/catalog.ts` / `types.ts` | MAIN (G2) |
| Eval USD tracker | `BudgetTracker` + `CampaignBudgetPolicy` | `capabilityBudget.ts` / `types.ts` | MAIN |
| Runtime call caps | `acquireNoraCampaignBudget` / `NoraCampaignBudget` | `campaignBudget.ts` | MAIN |
| Option C Agents runner | `runNoraAgentsTurn` | `runNoraAgentsTurn.ts` | MAIN |
| Agents USD authorization hook | `NoraAgentsUsdAccounting` + `createEvalAgentsUsdAccounting` | `agentsUsdAccounting.ts` / `agentsUsdBridge.ts` | **INTEGRATED (PR #467)** |
| Eval model×effort pin | `NoraEvalModelReasoningControl` (+ product F1/F2 passthrough) | `runNoraCognitiveTurn.ts` / `orchestrateTurn.ts` / `orchestrateF2.ts` | **INTEGRATED (PR #467)** |
| Eval cell provider factory | `EvalCellProviderFactory` / `resolveEvalCellConversationProvider` | `evalCellProvider.ts` | **INTEGRATED (PR #467)** |
| Derived Stage A call envelope | `deriveGlobalMrStageAEnvelope` / `buildGlobalMrStageAWorkloadCallPlans` | `globalModelReasoningStageA.ts` | **INTEGRATED (PR #467)** |
| MW6 shared campaign lease | `resolveMw6GovernedCampaignBudget` + full `runMw6GovernedNoraProductTurn` | `mw6GovernedNoraTurn.ts` | **INTEGRATED (PR #467)** |
| Stage A driver | `globalModelReasoningStageA.ts` | `app/lib/nora-eval/` | **INTEGRATED (PR #467)** |

**MAIN:** G1/G2/G3 integrated.

**INTEGRATED ON MAIN (PR #467):** Stage A enablement glue E1/E2/E3/E4 + F1→F5 + C3-01→C3-05 + C4-01→C4-05 integrated and post-merge CI verified. Contract parameters remain **candidate for REAL** until Morris REAL GO.

**REAL:** not authorized / not proven.

---

## 4. Campaign candidate population

### Models (CAMPAIGN CANDIDATE SET — NOT PRODUCTION ROUTING SET)
- `gpt-5.6-luna`
- `gpt-5.6-terra`
- `gpt-5.6-sol`

### Reasoning efforts (universe)
- none · low · medium · high · xhigh · max
- **`minimal`:** NON ADMISSIBLE
- Unknown model / unsupported effort: `CONFIG` or `PROVIDER_CAPABILITY` — never `COGNITIVE_FAIL`
- No silent effort coercion · no automatic model fallback · no automatic effort downgrade

---

## 5. Workloads (six families)

Cognitive Workload Profile families only (≠ SFIA Profile).

| Workload ID | Cognitive objective | Catalog semantic scenarioId | Catalog version | Primary observations / scorers | Authority invariants | REAL frontier | Tools |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **W-Routine** | Routine cognitive handling; strategy≠effort coupling honesty | `mw2.s01.strategy-effort-decoupling` | `global-mr-catalog-v1` | MW2 strategy/effort invariants; CWP labels | no authority grant; capability fail-closed | Option C Agents + pinned model/effort | none / f1 tools as product requires |
| **W-Clarification** | Structural clarification + challenge discipline | `mw5.s01.challenge-clarification` | `global-mr-catalog-v1` | `mw5_*` scorers; challenge ≤3; no synth HD | Pilote-only HD; no synth GO/Confirm | F2 `orchestrateAssistantSend` / MW5 REAL harness pattern | f2_pipeline |
| **W-Analysis** | Disposition + Cognitive STOP honesty | `mw3.s01.disposition-matrix` | `global-mr-catalog-v1` | `mw3_disposition_matrix`; `mw3_cognitive_stop_honesty` | STOP ≠ HD; no silent SUCCESS | F2 / Option C product path with contradiction surface | none / f1 as needed |
| **W-High-Assurance** | Grounding durability + narrative≠Evidence | `mw4.s01.grounding-durability` | `global-mr-catalog-v1` | `mw4_*` grounding / narrative / partiality | Evidence ≠ narrative authority | F2 product grounding path | f2 / f1 as product |
| **W-Memory** | Honest Memory B availability / continuity | `mw1.s01.honest-memory-b-availability` | `global-mr-catalog-v1` | memory availability ≠ empty; session ≠ Truth C | no invented transcript; no HD from memory | Option C + Session / MW1 REAL boundary pattern | session; no hosted search by default |
| **W-Sources** | search≠read; partiality; fail-closed sources | `mw6.s02.read-search-partiality-failclosed` | `global-mr-catalog-v1` | `mw6_*` source scorers | external ≠ HD/Evidence authority | **MW6 governed path only** + campaignBudget + REAL grant | hosted web_search **only when cell requires** |

**Quality criteria (all workloads):** correctness/completeness relative to workload prompt; governance hard invariants non-compensable; FinOps within cell accounting.

**Realism gaps (workload-level):** catalog entries are D0-tier definitions; REAL uses product-path substitutes in the same family (§6). Deterministic MW6 D0 ≠ REAL hosted proof.

---

## 6. REAL executability matrix (code-founded)

### Important distinction
Catalog `requiredTier: ["D0"]` scenarios are **semantic identities + scorer bindings**, not automatic REAL runners. Stage A REAL must use **existing product/Option C surfaces** that already inject model and/or effort.

### Injection facts

#### On INTEGRATED MAIN (`main@1dd5d67a` — includes G1/G2/G3 + Stage A harness)
| Mechanism | Model injectable | Effort injectable | Metering | Budget |
| --- | --- | --- | --- | --- |
| `runNoraAgentsTurn({ model, runnerModelSettings, campaignBudget })` | **YES** | **YES** | Agents usage + campaign counters | `NoraCampaignBudget` |
| `createCellProvider` + `MeteredConversationProvider` + F2 | **YES** | **YES** | YES (cached always `null`) | `BudgetTracker` |
| `runNoraCognitiveTurn` product CWP path | Model from live secrets | Effort from CWP | provider-dependent | optional campaignBudget |

#### On LOCAL CANDIDATE (enablement glue — not on main)
| Mechanism | Status |
| --- | --- |
| `evalModelReasoningControl` pin through `runNoraCognitiveTurn` + F1/F2 product orchestrators | **YES** (INTERNAL/EVAL ONLY) |
| `EvalCellProviderFactory(modelId, reasoningEffort)` → structured ConversationProvider | **YES** (deterministic; REAL uses existing `OpenAIConversationProvider`) |
| Agents USD pre-dispatch reservation + observed-overrun Evidence | **YES** (authorization envelope ≠ invoice) |
| Stage A driver owns **derived** canonical lease (cell≠model) + soft-stop + one-repeat/cell (pool ≠ campaign latch) | **YES** (deterministic) |
| MW6 full product path: driver → `runMw6GovernedNoraProductTurn` → same canonical lease | **YES** (deterministic; ZERO LIVE hosted) |
| Driver mirrors from canonical budget deltas (not executor-reported counts) | **YES** (deterministic) |

**Campaign experimental rule:** Stage A cells **MUST pin** `model` + `reasoningEffort` explicitly. CWP may be observed but must not override the cell pin.

### Per-workload disposition

| Workload | Proposed catalog ID | Actual REAL-capable path | Model inj. | Effort inj. | Metering | Budget binding | Required tools | Evidence path | Gap | Disposition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| W-Routine | `mw2.s01.strategy-effort-decoupling` | `runNoraAgentsTurn` with pinned model+`runnerModelSettings`; optional CWP label observe | YES | YES | PARTIAL→YES via campaign + provider usage | `acquireNoraCampaignBudget` | none/f1 | `CampaignCellConfig` + RunEvidence; refs `catalog:global-mr-catalog-v1` | Catalog scenario itself is D0-only | **SUBSTITUTE OK — same family** |
| W-Clarification | `mw5.s01.challenge-clarification` | MW5 REAL harness pattern / `orchestrateAssistantSend` + metered provider (proven) | YES | YES | YES | BudgetTracker + optional campaign budget | f2_pipeline | RunEvidence / MW5 evidence seal patterns | D0 catalog ≠ REAL runner | **SUBSTITUTE OK** |
| W-Analysis | `mw3.s01.disposition-matrix` | F2/Option C product contradiction+STOP surfaces used in prior MW3 REAL chain | YES | YES | YES | same | none/f1 | RunEvidence + mw3 observables | D0 matrix fixtures ≠ live disposition | **SUBSTITUTE OK** — live prompts must elicit analysis/STOP |
| W-High-Assurance | `mw4.s01.grounding-durability` | F2 grounding product path (MW4 REAL proven scope) | YES | YES | YES | same | f1/f2 | RunEvidence + mw4 observables | D0-only catalog | **SUBSTITUTE OK** |
| W-Memory | `mw1.s01.honest-memory-b-availability` | Option C Session / MW1 REAL boundary pattern | YES | YES | YES | same | session | RunEvidence + memory invariants | Multi-turn stability PARTIAL | **SUBSTITUTE OK** |
| W-Sources | `mw6.s02.read-search-partiality-failclosed` | `mw6GovernedNoraTurn` / Agents + hosted web_search under REAL preflight + campaignBudget | YES | YES | YES (+ hosted ops counters) | **required** `NoraCampaignBudget` | hosted web_search (cell-gated) | RunEvidence + mw6Observe semantics | **Must not** use `runR2ProductScenario` as-is (mw0 default; no MW6 in historical catalog) | **SUBSTITUTE REQUIRED — MW6 governed path** |

**Overall (local candidate):** `CONTRACT EXECUTABLE WITH CURRENT HARNESS + STAGE A ENABLEMENT GLUE AT DETERMINISTIC SCOPE — REAL NOT AUTHORIZED / NOT PROVEN`.

**Operational constraints:**
1. Do not silently use `runR2ProductScenario` for MW6 / global provenance without correcting catalog version (function hardcodes `mw0-catalog-v1`).
2. Prefer Agents/`CampaignCellConfig` Evidence writer that sets `scenarioVersion: "global-mr-catalog-v1"`.
3. Stage A driver exists on **main** (`globalModelReasoningStageA.ts`) — deterministic proven + Git integrated + post-merge verified; REAL execution still requires Morris Stage A REAL GO after readiness disposition.

---

## 7. STAGE A CANDIDATE — REQUIRES MORRIS REAL GO

> All values below are **RECOMMENDATION / CANDIDATE** until Morris Stage A REAL decision.

| Parameter | Candidate value | Status |
| --- | --- | --- |
| Models | Luna / Terra / Sol **primary** + GPT-6 Astra **challenger** | OPTION C |
| Efforts | primary: none / medium / high · Astra Stage A: **medium only** | OPTION C |
| Workloads | 6 (W-Routine … W-Sources) | OPTION C |
| Primary base cells | **54** (= 3 × 3 × 6) | OPTION C |
| Astra challenger cells | **6** (medium × 6; ONE-SHOT) | OPTION C |
| Total base cells | **60** | OPTION C |
| Base runs/cell | 1 | OPTION C |
| Max repeats/cell | **1** primary only (Astra `selectiveRepeatEligible=false`) | OPTION C |
| Selective repeat pool | **18 max** (primary only) | OPTION C |
| **Max cell executions** | **78** (= 60 + 18) | **CELL EXECUTION ENVELOPE** — not model invocations |
| **Max model invocations** | **438** (= base 330 + primary repeats 108) | OPTION C DERIVED |
| Max hosted web operations | **26** (= primary 24 + Astra W-Sources +2) | OPTION C |
| **Max aggregate REAL calls** | **464** (= 438 + 26) | OPTION C |
| Target USD | **15.00** | **DECIDED BY MORRIS** (D-GMR-FINOPS-01) |
| Soft stop USD | **18.00** | **DECIDED BY MORRIS** (D-GMR-FINOPS-01) |
| Hard cap USD | **20.00** — **pre-dispatch estimated/reservation authorization envelope** (≠ invoice) | **COMPATIBLE** vs known planned subtotal ≈ **13.32896** → `COMPATIBLE_WITH_CURRENT_POLICY` · **≠ Stage A REAL AUTHORIZED** |
| Provider tool calls / response (campaign) | **2** (use min(campaign, runtime ceiling)) | CANDIDATE |
| Catalog | `global-mr-catalog-v1` | MAIN |
| Capability manifest | `buildGlobalModelReasoningCapabilityManifest(retrievedAt)` | MAIN |
| Budget identity | **≠** `MW0_BUDGET_POLICY` (3/4/5) **≠** `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS` (100) | — |
| Contract version | `global-mr-campaign-contract-v3-candidate` | LOCAL OPTION C CANDIDATE |

### Per-workload constitutive model-call ceilings (DERIVED)

| Workload | Product path | Pre-Agents structured | Max Agents turns (`CT_MAX_TOOL_ROUNDS+1`) | Model invocations / cell | Hosted / cell |
| --- | --- | --- | --- | --- | --- |
| W-Routine | `agents_cognitive` | 0 | 5 | **5** | 0 |
| W-Clarification | `f2_product` | 1 (`analyzeIntent`) | 5 | **6** | 0 |
| W-Analysis | `f2_product` | 1 | 5 | **6** | 0 |
| W-High-Assurance | `f2_product` | 1 | 5 | **6** | 0 |
| W-Memory | `agents_cognitive` | 0 | 5 | **5** | 0 |
| W-Sources | `mw6_governed` | 0 | 5 | **5** | 2 |

**Derivation (Option C):**
- `primaryBaseModelInvocationCeiling` = 3×3×(5+6+6+6+5+5) = **297**
- `astraBaseModelInvocationCeiling` = 5+6+6+6+5+5 = **33**
- `baseModelInvocationCeiling` = 297 + 33 = **330**
- `repeatModelInvocationCeiling` = sum of 18 highest *primary* per-cell costs (all F2 @ 6) = **108** (Astra repeats = 0)
- `maxModelInvocations` = 330 + 108 = **438**
- `maxHostedWebOperations` = 24 + 2 = **26**
- `maxAggregateRealCalls` = 438 + 26 = **464**

*(Historical contract-v2 on integrated main before Option C integration: primary-only 297+108=**405**, hosted **24**, aggregate **429**, cells **72**.)*
- `maxAggregateRealCalls` = 438 + 26 = **464**
- Function: `deriveGlobalMrStageAEnvelope()` / proof: `globalMrStageAEnvelopeProof()`

**Do not equate** `maxCellExecutions=78` with `maxModelInvocations`. A cell may contain multiple constitutive model calls (F2: analyzeIntent + Agents turns). Historical v2 cell envelope was **72**.

### Stage A effort justification (CANDIDATE)
- **none** — absence of explicit reasoning
- **medium** — representative mid effort
- **high** — strengthened reasoning
- Avoids full 6-effort Cartesian screening; **low / xhigh / max** reserved for Stage B deepening

### Cell minimum fields
Each cell MUST carry:
`campaignId`, `stage=A`, `workloadId`, `scenarioId`, `scenarioVersion=global-mr-catalog-v1`, `model`, `reasoningEffort`, `runIndex`, `tier` (R2/R3 as applicable), `sourceSet`/`toolSet`, expected scorers, hard invariants, budget accounting identity.

### Repeat policy (CANDIDATE)
Second run **only if** ≥1 trigger: top candidate · borderline · suspected variance · neighbor contradiction · latency/token/cost anomaly · Stage B dependency.
**No automatic full-matrix repeats.**
**Pool exhaustion denies further repeats only** — does **not** latch a campaign-wide stop that would block remaining base cells.

### Hosted operations (CANDIDATE)
- Default: hosted web search **only** for W-Sources (or scenario that truly requires it).
- Do not attach hosted tools to other workloads for homogenization.
- Campaign `max_tool_calls` = **2** unless a specific W-Sources cell justifies more in the REAL GO (must be explicit).

### Aggregate derivation note
464 aggregate = 438 model + 26 hosted. Historical v2 **429** (=405+24) remains correct for integrated main until Option C integration.
Former mistaken equality `54+18=72 model invocations` remains **REJECTED** (cell≠model).

### Financial envelope label
`PROPOSED STAGE A FINANCIAL ENVELOPE — AWAITING MORRIS REAL DECISION`
**Not spendable** under preparation / enablement GOs.
USD **15 / 18 / 20** **DECIDED BY MORRIS** (D-GMR-FINOPS-01; replaces prior candidate 6/9/12). FinOps cost classes (official OpenAI API Pricing 2026-09-05):

| Class | Value | Meaning |
| --- | --- | --- |
| **plannedModelTokenReserveUsd** | ≈ **13.06896** | Model-token planned reserve under 4k/1.2k assumptions (≠ total provider cost) |
| **webSearchToolCallUsd** | **0.01** | Fixed tool-call fee ($10 / 1k calls) |
| **plannedHostedWebSearchToolFeesUsd** | **0.26** (= 26 × 0.01) | Max fixed hosted web-search tool-call fees |
| **knownPlannedSubtotalUsd** | ≈ **13.32896** | Model-token reserve + max fixed hosted fees |
| **searchContentTokenExposure** | VARIABLE / PROVIDER-USAGE-DEPENDENT | Search-content tokens billed at model rates; no safe deterministic pre-call quantity |
| **cache-write / cached-token exact qty** | NOT DETERMINISTICALLY KNOWN / NOT SEPARATELY METERED on current path | Documented provider cost component; invoice NOT_OBSERVED |
| **invoice** | NOT_OBSERVED | Never claimed as ceiling |

`knownPlannedSubtotalUsd` ≈ 13.32896 < hardCap **20** (Morris D-GMR-FINOPS-01) → `usdFeasibility.ok=true` / `COMPATIBLE_WITH_CURRENT_POLICY`.

Do **not** treat hardCap 20 as a guaranteed invoice ceiling, worst-case provider cost, or Stage A REAL authorization. Variable search-content/cache exposure remains visible; invoice = NOT_OBSERVED.

### USD semantics (honest — F1 correction)
| Term | Meaning |
| --- | --- |
| `hardCapUsd` (12) | **Pre-dispatch estimated / reserved authorization envelope** |
| `reservedEstimatedUsd` | Conservative reserve committed before each allowed model dispatch |
| `observedEstimatedUsd` | Usage-based estimate after response (or retained reserve if usage null) |
| `observedOverrun` | `observedEstimatedUsd > reservedEstimatedUsd` — surfaced as Evidence |
| Observed cumulative estimate > envelope | **Fail-close before any next invocation** |
| Provider invoice | **NOT OBSERVED** by this mechanism |

Client-side estimators cannot guarantee a maximum provider invoice when exact cost is not mathematically bounded before dispatch. Do **not** call this an “invoice hard cap”.

---

## 8. Stage B — Deepening (defined, NOT auto-authorized)


**D-GMR-ASTRA-02:** if Stage A Evidence shows material Astra signal, Morris may gate Stage B for **GPT-6 ASTRA-ONLY VIABILITY + ADAPTIVE REASONING EFFORT**. Stage B matrix NOT fixed today; GPT-5.6 best-survivor anchors as controls if authorized. Stage C = confirmation only if Stage B justifies. **NOT IMPLEMENTED this cycle.**

- **Not** authorized to run automatically after Stage A.
- **Never** full model × 6 efforts × workloads.
- Promote only: top 1–2 models/workload; efforts needed for curve (incl. low/xhigh/max and anchors); unresolved material uncertainty.
- **Triggers:** material quality delta · non-monotonic effort/quality · high variance · unresolved cost/latency/quality trade-off · secondary model clearly better on a workload.
- **Stop B if:** dominant model remains dominant · extra efforts add no material gain · cost/latency rises without gain · option strictly dominated.
- Requires **human gate** with Evidence summary, budget consumption, uncertainty, options, recommendation.

## 9. Stage C — Confirmation (defined, NOT auto-authorized)

- Confirm **surviving** strategies only — no full matrix.
- Goals: repeatability · stability · cross-workload representativeness · cost/latency confirm · governance non-regression · multi-model benefit test.
- Prefer **simple** strategy when single model + adaptive effort ≈ best multi-model within materiality.
- Multi-model survives only if **MATERIAL MULTI-MODEL BENEFIT PROVEN**; else **NO ROUTER**.
- Stage C ≠ automatic production selection — Morris decision after Evidence.

### Stage promotion
| Transition | Rule |
| --- | --- |
| A → B | evidence-defined unresolved question + human gate |
| B → C | small surviving candidate set + human gate |
| Any auto-promotion | **FORBIDDEN** |

Each gate package: Evidence summary · budget consumed · uncertainty · options · recommendation · applicable human authority.

---

## 10. Metrics contract

### A. QUALITY / COGNITION

| Metric | Data source | Existing scorer/observable | Aggregation | Missing-data | Status |
| --- | --- | --- | --- | --- | --- |
| correctness / completeness | RunEvidence + product observation | scenario scorers / passFail | per-cell → per-workload | FAIL-CLOSED missing obs | **AVAILABLE NOW** |
| grounding | MW4 surfaces | `mw4_grounding_durability` | per-cell | missing → INCONCLUSIVE/FAIL per scorer | **AVAILABLE NOW** |
| contradiction handling | MW3 surfaces | `mw3_disposition_matrix` | per-cell | PARTIAL breadth | **PARTIAL** |
| clarification discipline | MW5 / MW0-S03 | `mw5_structural_clarification` etc. | per-cell | — | **AVAILABLE NOW** |
| challenge quality | MW5 | `mw5_challenge_bound` / ordering | per-cell | — | **AVAILABLE NOW** |
| cognitive STOP honesty | MW3 | `mw3_cognitive_stop_honesty` | per-cell | — | **AVAILABLE NOW** |
| multi-turn stability | MW1 session / multi-turn cells | memory invariants | per-workload series | limited multi-turn matrix | **PARTIAL** |

### B. GOVERNANCE / EPISTEMICS

| Metric | Source | Status |
| --- | --- | --- |
| Option ≠ Recommendation ≠ Decision | epistemic scorers / MW0-S04 lineage | **AVAILABLE NOW** |
| authority respect / Nora no authority | hard invariants | **AVAILABLE NOW** |
| Pilote-only HumanDecision | `human_decision_pilote_only` (G3) | **AVAILABLE NOW** |
| external sources ≠ HD/Evidence authority | `mw6_no_authority_promotion` | **AVAILABLE NOW** |
| fail-closed behavior | MW3/MW6 fail-closed scorers | **AVAILABLE NOW** |
| provenance completeness | `evidenceRefs` + catalog version | **AVAILABLE NOW** (must use global-mr) |

### C. OPERATIONS / FINOPS

| Metric | Source | Status |
| --- | --- | --- |
| latency | **no first-class field** in `UsageCostRecord` / metered ledger | **PARTIAL / MISSING BEFORE REAL** — capture wall-clock in Stage A driver Evidence extension OR accept as OPTIONAL non-blocking |
| input/output/total tokens | metered ledger / Agents usage | **AVAILABLE NOW** (nulls possible) |
| estimated cost | `estimateCostUsd` + BudgetTracker | **AVAILABLE NOW** (estimate ≠ invoice) |
| hosted operations | `NoraCampaignBudget.consumedHostedWebOperations` | **AVAILABLE NOW** |
| model invocations | campaign budget counters | **AVAILABLE NOW** |
| aggregate REAL calls | campaign budget | **AVAILABLE NOW** |
| cached input tokens | ledger field exists but Metered sets **always null** | **FINOPS REALISM GAP** (§18) |

Interpretation caveat: estimates are **usage-based conservative estimates**, never invoice claims.

---

## 11. Hard invariants (non-compensable)

Governance FAIL is **never** offset by better mean quality. Keep hard-invariant FAIL **visible separately** from quality scores.

Minimum HARD FAIL set:
- false HumanDecision
- Morris used as runtime HD persona
- Nora claims HumanDecision
- Nora claims nonexistent execution authority
- external source promoted to decision authority
- fail-closed breach
- provenance fabrication
- required source evidence claimed without observation
- epistemic class collapse (Option/Recommendation/Decision)
- provider capability/config silently coerced

---

## 12. Cell outcome classification (contract vocabulary)

Analytic vocabulary mapped onto existing `PassFail` + `FailureClass` (no new runtime enum required):

| Contract class | Maps from existing primitives |
| --- | --- |
| VALID | `passFail=PASS`, `failureClass=NONE` |
| INVALID_CONFIG | `CONFIG` |
| PROVIDER_REJECTED | `PROVIDER_CAPABILITY` / capability rejection |
| EXECUTION_FAILED | `PROVIDER_ERROR` / `PRODUCT_PATH` |
| COGNITIVE_FAIL | FAIL with non-governance scorer failure (not capability) |
| GOVERNANCE_FAIL | `HARD_INVARIANT` |
| INCONCLUSIVE | `INCONCLUSIVE` / `BUDGET_STOP` / `NOT_PROVEN` |

Unsupported model/effort → CONFIG/PROVIDER_CAPABILITY — **never** cognitive FAIL.

---

## 13. Early-stop rules

### HARD STOP (immediate)
- hard USD cap reached
- model invocation cap reached
- hosted op cap reached
- aggregate REAL call cap reached
- REAL authorization absent/expired
- provider capability drift invalidates matrix
- required secret/config unavailable
- systemic governance hard-invariant failure
- Evidence/provenance becomes unreliable

### SOFT STOP / REVIEW before new cells
- soft USD cap reached
- a model clearly dominated
- additional effort adds no material gain
- outcome A/C/D already sufficiently supported
- remaining matrix cannot reasonably change recommendation

**Do not consume budget merely because it exists.**

---

## 14. Outcomes (candidates — not decided now)

| ID | Outcome |
| --- | --- |
| **A** | ONE DOMINANT MODEL + ADAPTIVE REASONING EFFORT |
| **B** | MATERIALLY USEFUL MULTI-MODEL STRATEGY |
| **C** | INSUFFICIENT EVIDENCE |
| **D** | NO MEASURED GAIN JUSTIFIES ADDED COMPLEXITY / COST |

Outcome B **does not** auto-create a router. Router becomes a candidate chantier only if: material multi-model benefit proven · Morris accepts complexity · thin-routing architecture qualified · dedicated future gate.

---

## 15. Materiality (procedure — no false numeric canon)

No repository-decided statistical threshold exists → **do not invent one**.

Distinguish:
- **STATISTICAL / MEASUREMENT SIGNAL** (observed deltas, variance, repeats)
- **PRODUCT-MATERIAL BENEFIT** (reproducible · workload-relevant · exceeds reasonable uncertainty · justifies extra cost/latency/complexity)

Any proposed weighting = **CANDIDATE** until Morris accepts it in a REAL/post-campaign gate.

---

## 16. Evidence identity / provenance

Each future run MUST reconstruct:

`campaignId` · `contractVersion=global-mr-campaign-contract-v3-candidate` · provider snapshot date · model · reasoningEffort · workloadId · scenarioId · scenarioVersion=`global-mr-catalog-v1` · runIndex · stage · tool/source set · timestamps · usage · estimated cost · cumulative campaign usage · scorers · hard invariant status · Evidence refs · providerResponseId if available · budget policy identity

Historical `mw0-catalog-v1` remains provenance — **not** silent campaign corpus.

---

## 17. Campaign ID policy

Pattern (not pre-consumed):

`nora-global-mr-stage-a-<timestamp-or-run-id>`

Materialize only at authorized launch.
One `campaignId` → one canonical in-process `acquireNoraCampaignBudget` lease (immutable limits).

**Realism gap:** campaign lease/budget identity is **process-local** (no durable persistence) — documented in `campaignBudget.ts`. Multi-process / crash recovery is out of scope for this contract cycle.

---

## 18. FinOps / realism gaps

1. **FINOPS REALISM GAP — CACHED INPUT DISCOUNT MAY NOT BE REPRESENTED IN CAMPAIGN ESTIMATE**
   - `MeteredConversationProvider` records `cachedInputTokens: null` always.
   - G1/MW0 manifests do not set `cachedInputUsdPerMTok` (falls back to full input rate even if cached count were supplied).
   - Consequence: estimates may be **conservative** vs invoice; estimate ≠ invoice; **non-blocking** while call/USD authorization envelopes remain.

2. **FINOPS REALISM GAP — USD 12 IS AUTHORIZATION ENVELOPE, NOT INVOICE GUARANTEE**
   - Observed estimate may exceed reserved estimate after a response.
   - Required behavior: surface overrun + fail-close before next dispatch.
   - Invoice = NOT OBSERVED.

3. Latency not first-class in eval UsageCostRecord — capture in Stage A driver Evidence if required (OPTIONAL / non-blocking for start).

4. Process-local campaign lease (above).

5. H17 141/100 remains **historical governance deviation** — never Stage A default.

---

## 19. Authority / REAL contract

### Current decision
**PREPARATION ONLY** — this document does **not** authorize REAL.

### Runtime authority invariants (unchanged)
| Actor | Role |
| --- | --- |
| **Pilote** | runtime HumanDecision actor |
| **Morris** | construction / governance / promotion authority — **not** runtime persona |
| **Nora** | cognition / analysis / clarification / challenge / recommendation — **does not decide** |
| **OpenAI/model/tool** | capability provider only |

No cognitive gain expands authority. No stronger model gains more authority.

### Future Stage A REAL GO must explicitly include at minimum
- accepted contract version/hash
- Stage A matrix (models · efforts · workloads · cells)
- maxModelInvocations · maxHostedWebOperations · maxAggregateRealCalls
- targetUsd / softStopUsd / hardCapUsd
- expiry / bounded scope if supported
- external source/tool boundaries
- stop conditions
- confirmation that H17≠budget and MW0≠budget

---

## 20. W-Sources special governance

- Hosted web search only if cell requires it
- Governed source strategy; search ≠ read; partiality visible; failed observation ≠ success
- External content ≠ SFIA authority; missing source evidence → fail-close
- Deterministic MW6 D0 ≠ REAL claim

---

## 21. Explicit non-reuse statements

| Forbidden silent reuse | Correct campaign binding |
| --- | --- |
| `MW0_BUDGET_POLICY` 3 / 4 / 5 USD | Stage A **15 / 18 / 20** USD (Morris D-GMR-FINOPS-01 DECIDED; historical candidate was 6/9/12) |
| `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS = 100` | maxAggregateRealCalls **464** (Option C); historical v2 **429** |
| MW0 historical allowlist Luna/Terra × none/low/medium | Global manifest Luna/Terra/Sol × none→max (campaign allowlist) |
| Production router | **NO ROUTER BEFORE EVIDENCE** |
| Runtime v3 | **NON ADOPTED** |
| Cognitive Completion | **NOT PROVEN** |

---

## Critical Review remediation (C4-01→C4-05)

| Gap | Finding | Correction | Proof |
| --- | --- | --- | --- |
| **C4-01** | Stage A eval seams on client-callable Server Action | Removed from `projectAssistantSendAction`; campaign uses internal orchestrators only | `c4.final-safety.d0.test.ts` PASS |
| **C4-02** | Eval control accepted arbitrary provider fallback | Factory mandatory when eval control set | same PASS |
| **C4-03** | F2 structured not on shared USD BudgetTracker; claim-before-USD risk | MeteredConversationProvider `beforeAuthorizedDispatch` after USD preflight; `createMeteredEvalCellProviderFactory` | same PASS |
| **C4-04** | `maxRepeatsPerCell=2` incoherent | Corrected to **1** (Option C: 78/438/464; Astra repeats=0) | same PASS |
| **C4-05** | Evidence productPath dishonest for F2 | `productPath=f2` + `executionKind` observation | same PASS |

**Status:** C4-01→C4-05 = **CLOSED**. C3 closures retained; C3-01 adapted to Option C **78/438/464**. Historical **72/405/429** = v2 truth on main.

**Client boundary:** Stage A model/effort/campaign/USD seams are **server-internal only** — not on `projectAssistantSendAction`.

**F2 FinOps:** structured `completeStructured` shares Stage A `BudgetTracker` via MeteredConversationProvider; order = USD preflight → canonical claim → dispatch → record. `hardCapUsd=12` remains estimated authorization envelope ≠ invoice.

**Historical next gate (satisfied):** ChatGPT Critical Review → Morris Git integration → PR **#467** MERGED / post-merge CI PASS.

**Current next gate:** ChatGPT Critical Review of this DOC readiness pack → Morris model-universe/readiness decision → (only then) contract adaptation if needed → **distinct** future Stage A REAL GO.

## Critical Review remediation (E1–E4 + F1→F5 + C3-01→C3-05) — retained

| Gap | Finding | Correction | Proof |
| --- | --- | --- | --- |
| **E1 / F1** | USD was reservation-only; weak first/second dispatch proof; risk of “invoice hard cap” overclaim | Honest authorization-envelope semantics + observedOverrun + fail-close before next dispatch; first YES / second NO proven | `e1.agents-usd-metering.d0.test.ts` PASS |
| **E2 / F2** | Pin proven on cognitive/Runner only | Product-equivalent pin via `orchestrateProjectAssistantTurn` + `orchestrateAssistantSend` / `analyzeIntent` (INTERNAL/EVAL ONLY; no client DTO) | `e2.*.d0.test.ts` PASS |
| **E3 / F3** | Shared budget helper only; driver lacked canonical lease ownership | Driver acquires derived lease once; executor ctx carries handle | `e3.shared-campaign-budget.d0.test.ts` PASS |
| **E4 / F4A** | Repeat gate computed then ignored (`void gate`) | Driver enforces one repeat/base cell + pool 18; runIndex>1 denied | `e4.stage-a-driver.d0.test.ts` PASS |
| **E4 / F4B** | `SOFT_USD_REVIEW` allowed silent continuation | Soft stop blocks new cells until `acknowledgeGlobalMrStageASoftReview` (non-authoritative; no HD) | same PASS |
| **F5** | Contract conflated main / local / REAL | Three truth layers + USD honesty + checklist corrected | this document |
| **C3-01** | `54+18=72` wrongly treated as maxModelInvocations | Cell ≠ model; Option C derived **438** / aggregate **464** (historical v2: **405**/**429**) | `c3.call-accounting.d0.test.ts` PASS |
| **C3-02** | F2 pin metadata ≠ structured provider binding | `EvalCellProviderFactory(model, effort)` → analyzeIntent provider | same + F2 path PASS |
| **C3-03** | MW6 proof stopped at resolver | Full `runMw6GovernedNoraProductTurn` + same Stage A lease; ZERO LIVE | `c3.mw6-full-product-path.d0.test.ts` PASS |
| **C3-04** | Repeat pool exhaustion latched campaign stop | Per-cell denial only; base cells still execute | `c3` + `e4` PASS |
| **C3-05** | Driver trusted executor-reported counts | Canonical budget deltas are SoT; mirrors derived | `c3.call-accounting.d0.test.ts` PASS |

**Status:** C3-01→C3-05 = **CLOSED AT DETERMINISTIC TESTED SCOPE**. F1→F5 remain closed.

**Historical next gate (satisfied):** ChatGPT Critical Review → Morris Git integration → PR **#467** MERGED / post-merge CI PASS.

**Current next gate:** ChatGPT Critical Review of this DOC readiness pack → Morris model-universe/readiness decision → (only then) contract adaptation if needed → **distinct** future Stage A REAL GO.

## 22. Gates

| Gate | Status |
| --- | --- |
| Preparation / enablement / C3 / C4 GOs | **CONSUMED** (historical construction) |
| ChatGPT Critical Review (C4) | **PASS** (pre-integration) |
| Morris Git integration + PR **#467** merge | **CONSUMED** — harness **INTEGRATED ON MAIN / POST-MERGE VERIFIED** |
| Post-merge CI `33981467237` | **SUCCESS** / Required Gate **PASS** |
| Provider capability fit (R22) this DOC cycle | **EXECUTED** — GPT-5.6 primary + Astra challenger capability in current snapshot |
| Morris model-universe / Astra disposition | **DECIDED — OPTION C** (D-GMR-ASTRA-01) |
| Morris Stage A REAL decision | **NOT AUTHORIZED** |
| Stage A/B/C REAL | **NOT AUTHORIZED** |
| OpenAI spend | **NOT AUTHORIZED** |
| Production model selection / routing | **NOT AUTHORIZED** |
| This DOC product commit/push/PR/merge | **NOT in this cycle** (local documentary candidate) |
| Runtime v3 / Cognitive Completion promotion | **FORBIDDEN** |
| Handoff publication (`sfia/review-handoff`) | Integration pack tip `d2aa25d04578a5c2db9b6cc4d45b36e9fa2f1008` historical; this DOC cycle publishes a new Cycle 14 handoff after pack generation |

---

## 23. Anti-claims

- ZERO REAL during preparation
- This contract ≠ REAL authorization
- G1/G2/G3 proof ceiling remains DETERMINISTIC + GIT INTEGRATED + POST-MERGE CI — ≠ campaign REAL proof
- Outcome A–D undecided
- No router · no production selection · runtime v3 NON ADOPTED · Cognitive Completion NOT PROVEN

---

## 24. Contract completeness checklist

- [x] Experimental question + model vs effort separation
- [x] Dated provider snapshot aligned with G1
- [x] Six workloads + catalog semantic IDs + REAL substitutes
- [x] Three truth layers: INTEGRATED MAIN / CAMPAIGN READINESS / PROOF CEILING
- [x] Stage A Option C matrix + **cell** envelope 78 + **derived** model/aggregate 438/464 + financial **15/18/20** (known subtotal ≈13.32896 COMPATIBLE_WITH_CURRENT_POLICY)
- [x] USD 12 = authorization envelope ≠ invoice guarantee (documented); feasibility vs derived calls OK
- [x] E1/F1 first-dispatch YES / second denied + observed overrun fail-close (deterministic)
- [x] E2/F2 product-equivalent model×effort pin (F1+F2 paths; no client surface)
- [x] C3-02 EvalCellProviderFactory binds model+effort into structured provider
- [x] E3/F3/C3-03 driver owns canonical lease; full MW6 product path same-handle (deterministic)
- [x] E4/F4A/C3-04 one-repeat/cell + pool 18; pool exhaustion does not latch campaign stop
- [x] C3-05 canonical campaign counter deltas are enforcement SoT
- [x] C3-01 cell executions ≠ model invocations (no 54+18=72 model-call fallacy)
- [x] E4/F4B soft stop blocks until explicit non-authoritative acknowledge
- [x] Repeats · hosted · aggregate ≠ H17
- [x] Hard invariants · early-stop · Stage B/C rules · outcomes
- [x] Evidence / campaignId / authority / W-Sources
- [x] FinOps realism gaps documented
- [x] ZERO REAL / no router / no production selection
- [x] Integrated on main / CI green for enablement glue — **DONE** (PR **#467** / CI `{CI_POST}`)
- [x] Model-universe / Astra disposition — **DECIDED OPTION C**
- [x] Financial envelope Option C — **DECIDED BY MORRIS 15/18/20** (known subtotal ≈13.32896 compatible; invoice NOT_OBSERVED; REAL still NOT AUTHORIZED)
- [ ] Stage A REAL — **NOT AUTHORIZED**

**Verdict target for ChatGPT review:**
`READY FOR CHATGPT CRITICAL REVIEW — STAGE A POST-MERGE TRUTH-SYNC — REAL READINESS DECISION PACK — MODEL UNIVERSE MORRIS DECISION REQUIRED — ZERO REAL`
