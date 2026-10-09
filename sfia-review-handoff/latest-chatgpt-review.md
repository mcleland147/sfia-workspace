# ChatGPT Review Pack — P6-HQA-REC-01 ROOT CAUSE INVESTIGATION

**Level:** FULL
**Cycle type:** 9 — QA / validation — Critical QA Investigation
**Typologie v2.4:** INC / QA — anomalie Product en qualification
**Profile:** CRITICAL
**Timestamp (UTC):** 2026-10-09T16:39:03Z
**GO:** P6-HQA-REC-01 INVESTIGATION — AUTHORIZED / **CONSUMED AFTER THIS REVIEW**
**GO DELIVERY:** NOT AUTHORIZED
**Verdict:** ROOT CAUSE CONFIRMED — FIX PROPOSAL READY
**Statut:** READY FOR CHATGPT CRITICAL INVESTIGATION REVIEW (not READY FOR CODE CHANGE)

---

## 0. Identity / Git Truth

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| origin/main | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` (PR #572 MERGED) |
| Trees HEAD↔main | IDENTICAL (reconfirmed; investigation did not mutate Product) |
| Prior handoff tip | `fc7c9a51` — `docs(review-handoff): P6 first real human QA execution` |
| Paid Nora / REAL retry | **NONE** this cycle |
| Product DB write | **NONE** |
| Code / doctrine / contract mutation | **NONE** |
| Cursor REAL env | **ON** — not modified |

### Local worktree preserved (not part of this cycle’s Product diff)

| Path | Status | Action |
|------|--------|--------|
| `projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md` | M (C14 doc sync) | PRESERVED |
| `.tmp-sfia-review/chatgpt-review.md` | M → rewritten this cycle | Review pack only |
| `projects/.tmp-sfia-review/**` | untracked | PRESERVED |
| `projects/sfia-studio/app/__tests__/p6-campaign/**` | untracked | PRESERVED |
| Product SQLite / Studio :3020 | external | NOT TOUCHED |

`git status` after investigation: no Product code change from this cycle.

---

## 1. GO / Fake–Real qualification

| Gate | Status |
|------|--------|
| GO INVESTIGATION | CONSUMED by this pack (after ChatGPT review of handoff) |
| GO DELIVERY | NOT AUTHORIZED |
| Human QA REAL symptom | OBSERVED (P6-HQA-REC-01 finding) |
| RAW structured payload this turn | **RAW PAYLOAD NOT OBSERVED** |
| Deterministic tests | Consulted (static); no campaign/REAL harness run |
| Runtime v3 | NON ADOPTED |
| P6 PASS | NO |

---

## 2. Human QA evidence (available)

Observed journey (Morris / Studio Product path):

1. New Project OK — « Gestion de projets pour petites entreprises ».
2. Nora exploratory intent understood; creation refusal respected then lifted.
3. Explicit project creation OK; workspace accessible; context continuity OK.
4. Nora recommends Framing (Cadrage) cycle.
5. Recommendation **registration fails** (twice after enriched qualification).
6. Morris: « ok on peut commencer le cycle de cadrage dans ce cas » — Studio remains blocked.
7. Diagnostic UI: **`LR_QUALIFICATION_SIGNALS_INCOMPLETE`**.
8. Product preview: **0 Recommendation enregistrée**; **aucun cycle actif**.

Finding qualification entering this cycle: SYMPTÔME REPRODUIT ; PRODUCT PATH BLOCKED ; ROOT CAUSE NOT YET PROVEN → **now proven for the diagnostic seam** (see §8).

---

## 3. Bloc 1 — Fail-closed localization (exact)

### Condition

`validateLifecycleRecommendation.ts` → `requireNextCycleQualificationSignals`:

```62:78:projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
function requireNextCycleQualificationSignals(
  candidate: LifecycleRecommendationCandidate,
):
  | { ok: true; signals: ExplicitCycleQualificationSignals }
  | { ok: false; code: string; reason: string } {
  const signals = parseExplicitQualificationSignals(
    candidate.qualificationSignals,
  );
  if (!signals) {
    return {
      ok: false,
      code: "LR_QUALIFICATION_SIGNALS_INCOMPLETE",
      reason: "next_cycle_requires_complete_qualification_signals",
    };
  }
  return { ok: true, signals };
}
```

`parseExplicitQualificationSignals` returns **null** unless all six keys are **typeof boolean** (never invents `false`):

```11:38:projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/qualificationSignals.ts
export const QUALIFICATION_SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;
// ...
export function parseExplicitQualificationSignals(
  value: unknown,
): ExplicitCycleQualificationSignals | null {
  return isExplicitCycleQualificationSignals(value) ? { ...value } : null;
}
```

### Branch of execution (NEXT_CYCLE)

For `intent === "NEXT_CYCLE"`, gates **before** the signals check (order):

1. `LR_TARGET_MISSING` — need `targetCycleInstanceId` or `targetCycleTypeId`
2. `LR_CURRENT_CYCLE_NOT_CLOSED` — active/paused/blocked current
3. Canonical `targetCycleTypeId` catalog gate (when type-based)
4. Target instance status / project / active invariants (when instance-based)
5. Trajectory / greenfield bootstrap:
   - presence `unknown` → `LR_BASIS_TRAJECTORY_UNAVAILABLE`
   - bootstrap ineligible → `LR_BOOTSTRAP_*` / `LR_TRAJECTORY_REQUIRED`
   - bootstrap **eligible** → **then** `requireNextCycleQualificationSignals`
6. Standard path (`hasCurrent`) → **also** `requireNextCycleQualificationSignals`

**Human QA implication:** observing **exactly** `LR_QUALIFICATION_SIGNALS_INCOMPLETE` means earlier NEXT_CYCLE gates (including greenfield bootstrap eligibility on a fresh project) **already passed**. Failure is **only** incomplete/null signals at validate time.

### Persistence effect

`produceLifecycleRecommendation` maps validation failure 1:1 — **no EpistemicItem write**:

```99:109:projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
  const validated = validateLifecycleRecommendation({ ... });
  if (!validated.ok) {
    return { ok: false, code: validated.code, reason: validated.reason };
  }
```

`orchestrateTurn` sets `lifecycleRecommendationMaterialized = false` and surfaces `lifecycleRecommendationCode = mat.materialization.code`.

Pilote notice (generic, code-agnostic body):

```6:17:projects/sfia-studio/app/features/project-assistant/lifecycleRecommendationPiloteNotice.ts
export const LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE =
  "La prochaine étape a été recommandée, mais Studio n'a pas pu l'enregistrer. Aucun cycle n'a été ouvert." as const;
```

**What is rejected:** durable Lifecycle Recommendation (NEXT_CYCLE).
**What is conserved:** narrative / conversation may still show a Framing recommendation; no CURRENT Recommendation; no CycleInstance; no HD; no START.

**Validator defect?** **No.** Fail-closed is contractually correct per D-GF-START-01 (« Never invent false defaults »).

---

## 4. Bloc 2 — Causal chain (seams)

| # | Frontier | File / function | Data | Required? | Transform | Validation | Error | Proof |
|---|----------|-----------------|------|-----------|-----------|------------|-------|-------|
| 1 | User utterance | Human QA chat | prose | — | — | — | — | Journey log |
| 2 | Nora Product Turn | `orchestrateTurn` + Agents SDK | `nora_product_turn_with_optional_lr` | schema-required fields | provider structured | OpenAI strict schema | schema reject (not observed) | code |
| 3 | Product turn SO | `noraProductTurnOutputType.ts` | `lifecycleRecommendation: LR \| null` | field required; value nullable | none | `normalizeNoraProductTurnStructuredOutput` | disposition / MISSING_REQUIRED_LR | code |
| 4 | Nested LR schema | `noraLifecycleRecommendationOutputType.ts` | `qualificationSignals: object\|null` | key required; **null allowed** | none | `isNoraLifecycleRecommendationStructuredOutput` | reject non-(object\|null) | **A** |
| 5 | Extract | `materializeFromProductTurn.ts` `extractLifecycleCandidateFromStructuredOutput` | candidate | if EMIT+NEW | normalize | boundary contradiction | MISSING_REQUIRED… | code |
| 6 | Produce | `produceLifecycleRecommendation` `candidateFromStructuredOutput` | preserves `null` / object | — | copy; **no invent** | authority/HD forbids | LR_AUTHORITY/HD | `basisFingerprint.ts:76-92` |
| 7 | Validate | `validateLifecycleRecommendation` NEXT_CYCLE | six bools | **YES for persist** | — | `requireNextCycle…` | **`LR_QUALIFICATION_SIGNALS_INCOMPLETE`** | **CONFIRMED** |
| 8 | Persist | `materializeLifecycleRecommendation` | envelope | only if ok | write EpistemicItem | — | not reached | code |
| 9 | UI | `lifecycleRecommendationPiloteNotice` + diagnostic code | string + code | — | generic notice | — | user sees diagnostic | Human QA |

**Where signals become absent:** at the **Nora structured LR candidate** boundary (`qualificationSignals: null` or non-explicit). Server does **not** invent. No F2 `reconcileQualificationSignals` on this Product-turn path (F2 coherence is QualifyCycleWithCkc / cosmetic path — different gate).

**RAW PAYLOAD NOT OBSERVED** — exact provider JSON for the failing turns is not in this investigation. With `strict: true` + `anyOf: [full six-bool object, null]`, a **partial** object is schema-illegal at the provider; the statistically dominant legal incomplete form is **`null`**.

---

## 5. Bloc 3 — Structured output contract (hypotheses A–E)

Schema (allows null):

```60:62:projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts
      qualificationSignals: {
        anyOf: [QUALIFICATION_SIGNALS_SCHEMA, { type: "null" as const }],
      },
```

Type comment (null = FINALIZE / incomplete):

```88:99:projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts
  /**
   * D-GF-START-01 — six explicit signals for NEXT_CYCLE when prepareable.
   * null for FINALIZE_CURRENT_CYCLE / incomplete qualification.
   */
  qualificationSignals: { ... } | null;
```

| Hyp | Claim | Evidence | Counter | Status | Confidence |
|-----|-------|----------|---------|--------|------------|
| **A** | Voluntary contract: null = incomplete qualification | Schema anyOf null; type comment; FINALIZE ignores signals; D-GF-START-01 never invent false | — | **SUPPORTED** | **HIGH** |
| **B** | Provider guidance gap: Nora should supply six bools on prepareable NEXT_CYCLE | `buildProjectSystemPrompt.ts` L145–161 lists intent/authority/HD/statement/rationale/targetCycleTypeId and **never mentions `qualificationSignals`**; yet L120–138 pushes emit NEXT_CYCLE when unknowns are cycle-owned (Cadrage) | Payload not seen | **SUPPORTED as contributing cause** | **HIGH** (guidance); **MED-HIGH** (Nora actually chose null) |
| **C** | Normalization drops signals | `candidateFromStructuredOutput` preserves null/object; Product-turn path has no signal strip | — | **REFUTED for Product path** | **HIGH** |
| **D** | Wrong materialization of non-durable advice | EMIT+LR with null is schema-coherent; server correctly attempts produce and fail-closes | Not a mis-route of CONTINUE | **PARTIAL** — attempt is correct; durable write correctly refused | **MED** |
| **E** | Other | Not required once A+B+validate chain holds | — | OPEN residual only for exact payload fields | — |

**Forbidden by doctrine (confirmed):** auto-fill missing signals with `false`; invent `lowRiskBounded=true` server-side.

---

## 6. Bloc 4 — Greenfield / Framing recommendation

Greenfield bootstrap (`presence.kind === "never"`, no cycles, no LPS active, no subject/target instance, canonical type, no current HD) can be **eligible** (`greenfieldLifecycleBootstrap.ts` L112–200). Signals are still required **after** eligibility (`validateLifecycleRecommendation.ts` L300–307).

Deterministic fixture pattern for successful greenfield LR (**complete** signals):

```105:123:projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts
function nextCycleLr(...) {
  return {
    intent: "NEXT_CYCLE",
    ...
    qualificationSignals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
  };
}
```

**Distinction:**

| Kind | Meaning |
|------|---------|
| Conversational Framing advice | Narrative / guidance — may appear even if LR not persisted |
| Durable prepareable Recommendation | Needs NEXT_CYCLE + target type + **six explicit signals** + validate OK |

**Cadrage unknowns vs signals:** product/scope unknowns belonging to Framing are **not** an excuse for `qualificationSignals: null`. Prompt explicitly says remaining unknowns can be the *reason* to recommend Framing (L123–124) — that stops *pre-cycle questionnaire*, it does **not** waive sealed qualification signals for a durable NEXT_CYCLE.

---

## 7. Bloc 5 — F01 START governance (secondary)

Primary block: **no CURRENT durable Recommendation** → no sealed signals on LR → prepare/trajectory/START chain cannot proceed legitimately.

F01 (`resolveChatFirstCycleStartGate.ts`): START only via unique **prepared** trajectory-bound cycle; `no_prepared` → `NO_PREPARED_CYCLE`. Conversational « ok on peut commencer… » is Pilot intent prose, **not** HumanDecision, **not** prepared CycleInstance, **not** START authority.

| Question | Answer |
|----------|--------|
| 1. Primary LR block? | **YES** — `LR_QUALIFICATION_SIGNALS_INCOMPLETE` |
| 2. Secondary F01 consequence? | **YES** — no CURRENT LR / no prepare / no START |
| 3. Independent F01 defect? | **NOT DEMONSTRATED** — do not fix F01 first |

---

## 8. Bloc 6 — Existing tests (coverage gaps)

| Coverage | Present? | Where |
|----------|----------|-------|
| NEXT_CYCLE + six signals OK | YES | `dgfStart01.smoke.d0.test.ts`, greenfield fixtures |
| NEXT_CYCLE missing/null signals → `LR_QUALIFICATION_SIGNALS_INCOMPLETE` | YES | `dgfStart01.smoke.d0.test.ts` L27–42; `candidateTrajectoryCycleStart.d0.test.ts` ~L613 |
| FINALIZE + null signals OK | YES | dgfStart01 |
| Greenfield without trajectory + complete signals | YES | `greenfieldLifecycleBootstrap.d0.test.ts` |
| Product-turn REAL Nora omitting signals | **NO** (by design; Fake fixtures always complete) | gap |
| Prompt/schema requiring signals on EMIT NEXT_CYCLE | **NO** explicit test of prompt text | gap |
| Consent → prepare → START after CURRENT LR | covered elsewhere; blocked upstream here | N/A |

No new tests created. No REAL harness / campaign / reset flags run.

---

## 9. Fact / hypothesis matrix

### Facts

1. Diagnostic code is emitted **only** by `requireNextCycleQualificationSignals` when parse fails.
2. Human QA observed that code; 0 Recommendations; no active cycle.
3. Schema allows `qualificationSignals: null`; validate forbids null/incomplete on NEXT_CYCLE persist.
4. System prompt pushes NEXT_CYCLE for cycle-owned unknowns / Framing and **omits** any `qualificationSignals` instruction.
5. Server never invents false signal defaults.
6. F01 START needs prepared cycle; conversational OK ≠ START.

### Hypotheses

| ID | Statement | Status |
|----|-----------|--------|
| H1 | Candidate at validate lacked six explicit bools | **CONFIRMED** (by code uniqueness of diagnostic) |
| H2 | Provider emitted `qualificationSignals: null` (not partial) | **LIKELY** — schema-legal; payload not observed |
| H3 | Prompt omission caused Nora to choose null while still EMIT NEXT_CYCLE | **LIKELY contributing** |
| H4 | Validator bug | **REFUTED** |
| H5 | Independent F01 bug | **NOT DEMONSTRATED** |

### Missing data

- RAW PAYLOAD of failing Product turns (**NOT OBSERVED**; no new OpenAI call authorized).
- Exact `targetCycleTypeId` / disposition / continuity flags on those turns (inferred Framing / EMIT from UI behavior only).

---

## 10. Root cause statement

**Confirmed product-path root cause of diagnostic `LR_QUALIFICATION_SIGNALS_INCOMPLETE`:**

On the chat-first Product turn path, Nora emitted (or the candidate carried) a **NEXT_CYCLE** Lifecycle Recommendation that passed greenfield/target gates but **did not carry six explicit `qualificationSignals` booleans**. `validateLifecycleRecommendation` correctly fail-closed; `produceLifecycleRecommendation` did not persist; Product stayed at **0 Recommendation**; subsequent Pilot « commencer le cadrage » could not satisfy F01 prepare/START gates.

**Contract seam (actionable):** structured schema + type comment **permit null** for incomplete qualification, while durable NEXT_CYCLE **requires** complete signals, and the **system prompt never instructs** Nora to supply the six booleans when emitting a prepareable NEXT_CYCLE — so conversational Framing recommendation can appear without a durable LR.

**Severity:** CRITICAL — blocks first integrated governed journey (Nora → durable Recommendation → trajectory → START).

**Impact Recommendation:** primary — persistence blocked.
**Impact F01:** secondary — no CURRENT LR / no prepare / START unreachable; no independent F01 defect proven.

---

## 11. Bloc 7 — Correction options (NO CODE this cycle)

### Option 1 — Minimale (recommended)

**Cause treated:** prompt/schema guidance vs validate asymmetry for prepareable NEXT_CYCLE.
**Approach:** (a) extend `buildProjectSystemPrompt` to require six explicit booleans whenever emitting prepareable `NEXT_CYCLE` (never silent null); (b) optionally tighten nested LR schema so `qualificationSignals` is the six-bool object whenever an LR object is present (FINALIZE may still send an object that validate ignores) — **or** keep null only for FINALIZE via clearer prompt if schema conditional is impractical; (c) optionally surface diagnostic-specific Pilote text for `LR_QUALIFICATION_SIGNALS_INCOMPLETE`.
**Must not:** server auto-fill `false` / invent `lowRiskBounded=true`.
**Files (indicative):** `buildProjectSystemPrompt.ts`, possibly `noraLifecycleRecommendationOutputType.ts`, notice helper; tests Fake for null NEXT_CYCLE already exist — add prompt/schema contract tests if Delivery authorized.
**Risks:** schema tighten may force FINALIZE to send unused object (acceptable).
**Invariants:** Recommendation ≠ HD ≠ START; no invented signals.
**F01 impact:** unblocks upstream only; F01 unchanged.
**Evidence level:** HIGH for seam; Delivery still needs Morris GO.
**Morris:** GO DELIVERY required.

### Option 2 — Alternative (only if Option 1 insufficient)

Governed **two-step** pre-persist: EMIT NEXT_CYCLE with null → server returns structured « qualification incomplete » guidance forcing a second turn with complete signals (no durable write until complete). Heavier UX; no parallel qualification system.
**Risks:** extra turn latency; must not weaken fail-closed.
**Morris:** GO DELIVERY + UX accept.

### Option 3 — Documentaire / UX only

If Morris judges null NEXT_CYCLE as **expected** until Pilote supplies impact answers: clarify UI that conversational Framing ≠ registered Recommendation; keep fail-closed. **Does not restore** first governed path without Nora supplying signals somehow.
**Use when:** policy is to keep null legal and rely on operator education — weak for P6 PASS.

### Comparison (summary)

| | Opt 1 | Opt 2 | Opt 3 |
|--|-------|-------|-------|
| Restores path | Likely | Likely | No |
| Parallel system | No | No | No |
| Masks defect | No | No | Masks as UX-only |
| Auth | GO DELIVERY | GO DELIVERY | GO doc/UX |

**Recommendation to Morris:** **Option 1** after ChatGPT review. Do not touch F01 until LR persistence restored and re-qualified.

---

## 12. Convergence pre-check (investigation)

| Item | State |
|------|-------|
| Capacity v3 Nora→Rec→traj→HD→prepare→START | KEEP / INVESTIGATE — blocked at Rec persistence |
| Milestone P6 | PR572 integrated; New Project Human QA positive; Rec blocked |
| Assets | Product Turn / LR / CKC / Trajectory / F01 KEEP; Runtime v3 NON ADOPTED |
| Gap closed this cycle | origin of diagnostic + contract seam sourced |
| Debt | no new qualification system |
| Next capacity | minimal Delivery (Morris) → Fake tests → Human QA resume |

---

## 13. Files touched this cycle

| File | Change |
|------|--------|
| `.tmp-sfia-review/chatgpt-review.md` | Rewritten FULL pack |
| `sfia-review-handoff/latest-chatgpt-review.md` | Handoff publish (branch `sfia/review-handoff` only) |

**Product / doctrine / tests tracked / DB:** none.

---

## 14. Réserves

- RAW PAYLOAD NOT OBSERVED — exact six field values unknown.
- No proof of independent F01 defect.
- No claim P6 PASS / runtime v3 ADOPTED / READY FOR MERGE.

---

## 15. Décisions Morris

1. ChatGPT Critical review of this handoff (SHA distant).
2. Accept / reject Option 1 (or 2/3).
3. If Delivery: explicit **GO DELIVERY** bounded scope.
4. No Product mutation until GO.

---

## 16. Verdict

**ROOT CAUSE CONFIRMED — FIX PROPOSAL READY**

Diagnostic mechanism and Product-path seam are sourced with file/line proof. Validator is correct fail-closed. Fix proposal is prompt/schema alignment (Option 1), not signal invention, not F01 bypass.

**Instruction ChatGPT:** Read this handoff at the remote SHA. Independently verify the six-signal contract, F01 secondary impact, and zero Product mutation. Then recommend minimal correction under Morris GO DELIVERY.
