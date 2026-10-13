# SFIA STUDIO — P6-MIN-09 NORA REAL OBSERVABILITY
## Review Pack FULL — TARGETED QUALIFICATION (READ-ONLY)

**Horodatage:** 2026-10-13 15:46:30 CEST
**Cycle:** 9 — QA / validation
**Profil:** CRITICAL
**Typologie:** RUN / QA AUDIT — READ ONLY
**Chantier:** T1 REAL OBSERVABILITY QUALIFICATION
**GO Morris:** 2026-10-13 — ACCEPT T1 FUNCTIONAL WITH RESERVES + AUTHORIZE TARGETED REAL OBSERVABILITY QUALIFICATION
**Verdict:** **P6-MIN-09 — T1 FUNCTIONAL ACCEPTED WITH RESERVES / REAL OBSERVABILITY GAP QUALIFIED / READY FOR CHATGPT REVIEW**

---

## 1–3. GO / Qualification / Git Truth

| Item | Value |
|------|-------|
| Runtime WT | `/Users/morris/Projects/sfia-workspace-studio-runtime-main-bd3f440c` |
| HEAD / origin/main | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| PR #578 / #579 | present (ancestors) |
| Status | clean |
| Mutations Product | **NONE** |
| OpenAI calls this pass | **ZERO** |
| T1 replay | **NONE** |

## 4–6. Sources / Convergence / T1 reference

Handoff T1 audit: `efa5f1e0` / blob `2394f988` (latest on `sfia/review-handoff` at entry — no newer T1 pack).

T1: `ltu:ff0b592f20f22452a59161655d07a433` · FUNCTIONAL ACCEPTED WITH RESERVES · Git acquisition proven · Provider REAL **NOT PROVEN** · logical status `accepted` · Runner DTO complete status NOT OBSERVED in durable store.

P0/P1/P2/RCD-01 INTEGRATED · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED.

## 7–8. Product → Runner → provider map

```
Browser POST /assistant/send
  → sendProjectAssistantTurn / orchestrateProjectAssistantTurn
    → ProjectAssistantMemoryEventSink (ephemeral)
    → runNoraCognitiveTurn (routing + Agents path)
      → runNoraAgentsTurn (Runner.run)
        → @openai/agents 0.17.0
        → result.lastResponseId / result.state.usage
      ← NoraCognitiveTurnResult {usage, adaptiveObserve, continuationObserve, limitReached, toolCalls, …}
    → collectToolTelemetry(sink.events)  // TOOL_* only
    → rememberReadCoverage(partial facts)
    → ProjectAssistantSendSuccess DTO {status ok|incomplete|cognitive_stop, model, toolCalls, …}
  → HTTP JSON to UI
  → GC of in-memory sink + full Nora result
```

`logical_product_turns.status=accepted` is minted **before/around** turn acceptance binding (`logicalProductTurn.ts` ~247–277) — **Product logical-turn lifecycle**, not Runner terminal status.

## 9. Existing field inventory

### A. `NoraCognitiveTurnResult` (`lib/nora-cognitive-runtime/types.ts` L23–112)

| Field | Built in Runner? | Propagated in cognitive turn? | On Product DTO? | Persisted durable? | T1 retrievable? |
|-------|------------------|-------------------------------|-----------------|--------------------|-----------------|
| usage.input/output/totalTokens | YES (`runNoraAgentsTurn` L917–920 from `result.state?.usage`) | YES | **NO** | **NO** | **NOT OBSERVED** |
| usage.model | YES (configured projection L921–926; Fake→fake-test-model) | YES | YES (`model`) | **NO** (HTTP only) | **NOT OBSERVED** post-hoc |
| usage.providerResponseId | YES (`lastResponseId` L815→L927) | YES | **NO** | **NO** | **NOT OBSERVED** |
| selectedModelId / selectedReasoningEffort / routing ids | YES (cognitive turn) | YES on result | **NO** (client boundary tests assert absence) | **NO** | **NOT OBSERVED** |
| adaptiveObserve | YES L1010–1013 + sink emit L1017–1038 | YES (`runNoraCognitiveTurn` L990–991) | **NO** | **NO** (sink discarded) | **NOT OBSERVED** |
| continuationObserve | YES L906–914 + emit L1040–1057 | YES | **NO** | **NO** | **NOT OBSERVED** |
| limitReached / toolCalls / toolRounds | YES | YES | YES | **NO** durable correlated | toolCalls partially via UI/session tools only |

### B. EventSink

| Item | Finding |
|------|---------|
| File | `features/project-assistant/memoryEventSink.ts` L24–33 |
| Kind | **In-memory array only** — no DB/file |
| Product wiring | `orchestrateTurn.ts` L439 `new ProjectAssistantMemoryEventSink()` |
| Consumer | `collectToolTelemetry` keeps **TOOL_SUCCEEDED/DENIED/FAILED only** (`collectToolTelemetry.ts` L45–48) |
| Dropped | `ADAPTIVE_BUDGET_OBSERVED`, `CONTINUATION_OBSERVED`, `COGNITIVE_*` after request ends |
| Persist | Only **readCoverage** aggregate via `rememberReadCoverage` (L1268+) — not provider receipt |

### C. SDK

| Item | Finding |
|------|---------|
| Package | `@openai/agents` **0.17.0** (installed runtime) |
| Capture | `result.lastResponseId ?? null` (`runNoraAgentsTurn.ts` L815) |
| Guarantee for T1 | **HYPOTHESIS** populated when Runner returns id — **NOT VERIFIED** for `ltu:ff0b592f` because never persisted |
| Fake path | usage.model forced `fake-test-model`; providerResponseId null on some early-return paths L347/L520 |

## 10. First loss-of-proof frontier (confirmed)

**Primary frontier (P0):** mapping `NoraCognitiveTurnResult` → `ProjectAssistantSendSuccess` (`orchestrateTurn.ts` L1452–1480) **omits** `usage.providerResponseId`, token usage, `adaptiveObserve`, `continuationObserve`, `selectedModelId`.

**Concurrent frontier (P0):** `ProjectAssistantMemoryEventSink` is request-scoped; budget/continuation events are emitted then **not** selected by `collectToolTelemetry` and **not** written to SQLite.

**Secondary semantic confusion (P1):** durable `logical_product_turns.status=accepted` ≠ Product send `status=ok|incomplete|cognitive_stop`. Auditors reading only SQLite see “accepted”, not Runner terminal honesty.

After HTTP response returns, the full Nora result object is **not retrievable** for T1. Session retains tool `function_call_result` crumbs (Git proof) + transcript text + journal — enough for documentary functional proof, **insufficient for provider receipt**.

## 11. Provider REAL analysis

| Layer | Status |
|-------|--------|
| CONFIGURED | YES (`CURSOR_REAL=1`, OPENAI_MODEL) |
| REQUESTED | YES (assistant/send ~60s) |
| INVOKED (circumstantial) | plausible (latency + 17 tools + synthesis) |
| PROVIDER CONFIRMED | **NOT PROVEN** — no durable `providerResponseId` / token ledger / FinOps capture on F1 path |
| Fake | no Fake identity in durable T1 artifacts |

Cannot retroactively confirm OpenAI invocation for T1 without a conserved receipt. This pass does **not** invent one.

## 12. Budget / continuation

Produced on Runner path: `requestedMaxTurns`, `effectiveMaxTurns`, `continued`, `segmentsExecuted`, `stopReason`, `limitReached`, `toolCalls`.

For T1: **NOT OBSERVED** in durable store. Inference only: no maxTurns failure text; status likely `ok` path (≠ FAILED). 17 tool calls ≠ 17 model turns (**confirmed distinction** in code: toolCalls counted separately from maxTurns segments).

## 13. Final Product status

| Signal | Meaning | T1 |
|--------|---------|-----|
| logical `accepted` | logical-turn row minted | YES |
| send `status` | ok / incomplete / cognitive_stop | **NOT OBSERVED** durable (would have been in HTTP JSON only) |
| UI no incompleteness banner | consistent with ok | observation only |

## 14. Other T1 reserves (scoped)

| Issue | Confirmed? | Cause | Impact T1 | Priority |
|-------|------------|-------|-----------|----------|
| UI 16 vs trace 17 reads | YES | counting/UI aggregation vs session_items | non-blocking | P2 |
| readCoverage partial vs union full | YES | rememberReadCoverage stores coarse/partial crumbs | honesty metadata lag | P1 |
| wc -l 1663 vs tool 1664 | YES | line-count convention | non-blocking | P2 |
| ~60.6s duration | YES | multi-read REAL-like latency | supports circumstantial REAL only | P2 |

## 15. Gap matrix (summary)

| Signal | Producer | Carrier | Consumer | Persisted? | Retrievable T1? | Gap | Sev | Minimal remediation |
|--------|----------|---------|----------|------------|-----------------|-----|-----|---------------------|
| providerResponseId | runNoraAgentsTurn L815/927 | Nora result | **dropped** at orchestrate return | NO | NO | mapping/export | **P0** | Option B: expose+persist correlated to logicalTurnId |
| tokens usage | Runner state.usage | Nora result | dropped | NO | NO | mapping/export | **P0** | Option B |
| adaptiveObserve | runNoraAgentsTurn + sink | memory sink | collectToolTelemetry ignores | NO | NO | sink not durable / filter | **P0** | Option B: persist event or DTO field |
| continuationObserve | same | same | same | NO | NO | same | **P1** | Option B |
| send status ok/incomplete | orchestrateTurn L1440–1444 | HTTP DTO | UI | NO durable | NO | no ledger | **P1** | Option B: store beside logicalTurnId |
| Git tool results | ToolRouter→Session | session_items | audit | YES | YES | — | — | KEEP |
| readCoverage | rememberReadCoverage | session grounding | UI Sources | YES (coarse) | YES | under-specified | P1 | optional honesty fix (separate GO) |

## 16. Options

**OPTION A — extract-only (no Product change):**
Improve campaign capture of **future** HTTP responses / in-process harness. **Cannot** recover T1 provider receipt. **Insufficient alone** for REAL proof standard.

**OPTION B — bounded Product seam (recommended):**
Without new engine/architecture: (1) include `providerResponseId` + token usage + `adaptiveObserve`/`continuationObserve`/`limitReached` on send success DTO **or** append a single durable evidence record keyed by `logicalTurnId`; (2) optionally persist `ADAPTIVE_BUDGET_OBSERVED`/`CONTINUATION_OBSERVED` (or stop relying on ephemeral sink for P0 proofs). Reuse existing types/events. Exit: post-turn query by logicalTurnId returns non-null receipt **or** explicit null with honest NOT_OBSERVED.

**OPTION C — structural:**
Only if B fails because SDK never yields ids / need external tracing. **Not justified yet** (capture path exists; conservation missing).

## 17. Recommendation

**Prefer OPTION B** under a **distinct Morris implementation GO**.
Do **not** implement in this pass.
Do **not** activate OpenAI tracing to third parties.
Do **not** re-qualify T1 as REAL PROVEN.

Debt if B deferred: `P6-REAL-OBS-P0-RECEIPT-CONSERVATION` — target: durable correlation logicalTurnId↔providerResponseId/usage/budget; exit: audited REAL T1 with PROVIDER CONFIRMED or explicit SDK null.

## 18. Fake/Real Qualification (this pass)

ZERO NEW REAL. Observability gap **QUALIFIED**. T1 remains FUNCTIONAL ACCEPTED WITH RESERVES · REAL BOUNDARY NOT PROVEN.

Claims forbidden remain: T1 REAL PASS · E2E REAL PROVEN · P6 GLOBAL PASS · PRODUCT READY · runtime v3 ADOPTED.

## 19. Non-mutation proof

No Product file edits · no SQLite writes · no config changes · no server restart · no commit/push/PR project · handoff L3 only forthcoming.

## 20. Gates remaining

1. Morris decision: authorize Option B implementation GO (or accept A-only for campaign process).
2. After B: bounded retest / next Human QA under separate GO.
3. No automatic T2.

## 21. Verdict

**P6-MIN-09 — T1 FUNCTIONAL ACCEPTED WITH RESERVES / REAL OBSERVABILITY GAP QUALIFIED / READY FOR CHATGPT REVIEW**

Root cause class: **propagation / non-persistence of already-produced Runner observability**, not absence of producers, and not proven SDK incapacity.

---
FIN REVIEW PACK FULL — REAL OBSERVABILITY QUALIFICATION
