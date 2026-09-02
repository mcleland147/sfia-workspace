# Review Pack — MW2 Bounded REAL Exit Proof — PREFLIGHT BLOCKED
# FULL / CRITICAL / CONTENT-COMPLETE

Status: **FULL** · **CRITICAL** · **CONTENT-COMPLETE**
Timestamp (Europe/Paris): 2026-09-02 10:07:07 CEST

## 1–8. Qualification / GO / Git truth

- Cycle: **8 — Delivery / implementation — REAL EXIT PROOF SUB-PHASE**
- Typology: **EVOL**
- Profile: **CRITICAL**
- Exact Morris GO: **GO MORRIS — MW2 BOUNDED REAL EXIT PROOF**
- Capability: Nora Cognitive Completion — MW2 CWP / Cognitive Strategy
- Stories: MW2-S01 (primary) · MW2-S02 (optional non-blocking control — NOT reached)
- Architecture: Option C KEEP · Agents Runner KEEP · CWP KEEP · NO TA
- CKC Delivery detailed: ABSENT · authority NONE
- PR #456: **MERGED**
- Merge / exact-main SHA: `73fe341070157d565a1ce62d79d69553e59b818b`
- Parent of merge: `b345f3b6c74d3eac0caca5bdd5525809dd80547a`
- origin/main at campaign: `73fe341070157d565a1ce62d79d69553e59b818b`

### Worktree decision

| Path | HEAD | Disposition |
|------|------|-------------|
| `/Users/morris/Projects/sfia-workspace-mw2-real-exit-73fe3410` (GO-suggested) | `dd21ab45a3a8ce2090b7a193e76c1d92e0a5cc02` (wrong) + local staged `.tmp-sfia-review` | **LEFT INTACT** — not reused |
| `/Users/morris/Projects/sfia-workspace-mw2-real-exit-main-73fe3410` | `73fe341070157d565a1ce62d79d69553e59b818b` detached · **0 tracked changes** | **USED** for Phase 0 |

Decision: **NEW WORKTREE** (alternate exact-main) — GO path occupied by unrelated MW1-era worktree.

## 9–12. Provider / Fake-Real / proof levels

- Provider snapshot (ChatGPT-revalidated 2026-09-02): gpt-5.6-luna · efforts none/low/medium/high/xhigh/max · minimal NOT supported
- Installed SDK versions: **NOT RECORDED FOR LIVE** — Phase 0 STOP before npm ci / live prep; PR #456 CI already validated main lot
- Secret source KIND: **NOT ACCESSED** (no live call)
- Fake/Real qualification: Phase 0 = **STATIC + DETERMINISTIC POLICY SIMULATION ONLY**
- Initial proof level: D0 / MODELED (from Delivery)
- Target proof level: R2 product-path REAL — **NOT ATTEMPTED**

## 13–17. Phase 0 — static caller audit

### Complete production caller list for `runNoraCognitiveTurn(`

| File | Classification |
|------|----------------|
| `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts` | **PRODUCT** — sole Studio F1 product orchestration caller |
| `projects/sfia-studio/app/lib/nora-eval/mw2S01Observe.ts` | TEST/EVAL |
| `projects/sfia-studio/app/lib/nora-eval/mw1S02Observe.ts` | TEST/EVAL |
| `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/**` (runner, fakeConvergence, mw1.*, mw2.*) | TEST |

No other product callers under `features/`.

### Product call excerpt (orchestrateTurn)

```typescript
const turn = await runNoraCognitiveTurn({
      correlationId: `f1:${project.projectId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      simulateMemoryBUnavailable: input.simulateMemoryBUnavailable,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
    });
```

### Input seams (API vs product)

```typescript
export type RunNoraCognitiveTurnInput = {
  correlationId: string;
  projectId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  sink?: EventSink;
  workspaceRoot?: string;
  sessionDbPath?: string;
  sessionKey?: string;
  simulateMemoryBUnavailable?: boolean;
  /** MW1-S02 — Truth C revision token for compaction invalidation. */
  truthCRevision?: TruthCRevision;
  /** Test-only fixed timestamp for deterministic compaction. */
  compactionNowIso?: string;
  /** MW2 — optional explicit workload signals (tests). */
  cognitiveWorkloadSignals?: Partial<CognitiveWorkloadSignals>;
  /** MW2 — trusted SFIA Profile only when actually available; never invented. */
  trustedSfiaProfile?: string | null;
  /** MW2 — product turn facts for signal derivation. */
  turnWorkloadContext?: TurnWorkloadContext;
  /** MW2 — skip policy for isolated tests. */
  skipCognitiveStrategy?: boolean;
};
```

```typescript
function resolveCognitiveStrategyForTurn(
  input: RunNoraCognitiveTurnInput,
): ReturnType<typeof decideCognitiveStrategy> | null {
  if (input.skipCognitiveStrategy) return null;

  const signals = input.cognitiveWorkloadSignals
    ? normalizeCognitiveWorkloadSignals(input.cognitiveWorkloadSignals)
    : input.turnWorkloadContext
      ? buildSignalsFromTurnContext(input.turnWorkloadContext)
      : normalizeCognitiveWorkloadSignals({});

  return decideCognitiveStrategy({
    signals,
    trustedSfiaProfile: input.trustedSfiaProfile,
  });
}
```

Classification:
- `turnWorkloadContext` — **PRODUCT-USED**
- `trustedSfiaProfile` — **PRODUCT-SUPPLIED as always `null`** (never a real Profile)
- `cognitiveWorkloadSignals` — **TEST/EVAL ONLY** (`features/` has ZERO occurrences)

## 15. Complete production signal availability matrix

| Signal / input | Product produces today? | Exact product path | Notes |
|----------------|-------------------------|--------------------|-------|
| trusted SFIA Profile | **NO** | `trustedSfiaProfile: null` hard-coded | API accepts string; product never supplies |
| ambiguity | **NO** | — | remains `unknown` via `buildSignalsFromTurnContext` |
| reasoningDepth | **NO** | — | remains `unknown` |
| sourceBreadth | **NO** | — | remains `unknown` |
| toolDependency | **NO** | `enableTools: true` transport only | CORR-02: capability ≠ dependency → stays `unknown` |
| contradictionRisk | **NO** | — | remains `unknown` |
| verificationNeed | **PARTIAL** | derived `high` iff `projectCriticality === "CRITICAL"` | else `unknown` |
| multimodality | **NO** | — | remains `unknown` |
| latencySensitivity | **NO** | — | remains `unknown` |
| costBudget | **NO** | — | remains `unknown` |
| contextSize | **YES** | `userContentLength` + `historyTotalChars` thresholds | low/medium/high |
| rigorCriticality | **YES** | `project.criticality` → LOW/STANDARD/CRITICAL | feeds rigor only; ≠ Profile |

**API ACCEPTS FIELD ≠ PRODUCT PRODUCES FIELD** — enforced in this preflight.

### Product signal derivation (source)

```typescript
export function buildSignalsFromTurnContext(
  ctx: TurnWorkloadContext,
): CognitiveWorkloadSignals {
  const crit = (ctx.projectCriticality ?? "").trim().toUpperCase();
  let rigorCriticality: SignalValue = "unknown";
  if (crit === "CRITICAL") rigorCriticality = "high";
  else if (crit === "STANDARD") rigorCriticality = "medium";
  else if (crit === "LOW") rigorCriticality = "low";

  const historyChars = ctx.historyTotalChars ?? 0;
  const totalChars = ctx.userContentLength + historyChars;
  let contextSize: SignalValue = "low";
  if (totalChars > 8000) contextSize = "high";
  else if (totalChars > 2000) contextSize = "medium";

  // Capability available ≠ workload dependency — leave unknown.
  const toolDependency: SignalValue = "unknown";
  // No multimodal fact in turn context — leave unknown.
  const multimodality: SignalValue = "unknown";

  let verificationNeed: SignalValue = "unknown";
  if (rigorCriticality === "high") verificationNeed = "high";

  return normalizeCognitiveWorkloadSignals({
    rigorCriticality,
    contextSize,
    toolDependency,
    verificationNeed,
    multimodality,
  });
}
```

### Strategy selection (source)

```typescript
export function isRoutineEligible(
  signals: CognitiveWorkloadSignals,
): boolean {
  for (const key of ROUTINE_KNOWN_LOW_DIMENSIONS) {
    if (!isKnownLow(signals[key])) return false;
  }
  // rigor must be known and not High-Assurance pressure
  if (signals.rigorCriticality === "unknown") return false;
  if (signals.rigorCriticality === "high") return false;
  return true;
}
```

```typescript
function selectStrategyClass(
  signals: CognitiveWorkloadSignals,
  trustedSfiaProfile: string | null | undefined,
): { strategyClass: CognitiveStrategyClass; bootstrapUsed: boolean; reasonCodes: string[] } {
  const reasonCodes: string[] = [];
  const rigor = levelScore(signals.rigorCriticality);
  const verification = levelScore(signals.verificationNeed);
  const contradiction = levelScore(signals.contradictionRisk);
  const breadth = levelScore(signals.sourceBreadth);
  const depth = levelScore(signals.reasoningDepth);

  // Strong KNOWN signals may elevate without trusted Profile.
  if (
    (rigor >= 3 && verification >= 2) ||
    (rigor >= 3 && contradiction >= 2) ||
    (verification >= 3 && contradiction >= 2)
  ) {
    reasonCodes.push("high_assurance_signals");
    return { strategyClass: "High-Assurance", bootstrapUsed: false, reasonCodes };
  }

  if (breadth >= 3 || depth >= 3 || (breadth >= 2 && depth >= 2)) {
    reasonCodes.push("deep_synthesis_signals");
    return { strategyClass: "Deep", bootstrapUsed: false, reasonCodes };
  }

  // Routine only with sufficient KNOWN-low evidence (UNKNOWN ≠ LOW).
  if (isRoutineEligible(signals)) {
    reasonCodes.push("routine_known_low_evidence");
    return { strategyClass: "Routine", bootstrapUsed: false, reasonCodes };
  }

  if (!trustedSfiaProfile?.trim()) {
    reasonCodes.push("bootstrap_focused_no_trusted_profile");
    return { strategyClass: "Focused", bootstrapUsed: true, reasonCodes };
  }

  reasonCodes.push("focused_default");
  return { strategyClass: "Focused", bootstrapUsed: false, reasonCodes };
}
```

## 16–17. Strategy reachability matrix

| Strategy | Product-reachable? | Exact path / signals | Test-only injection needed? |
|----------|--------------------|----------------------|-----------------------------|
| **Focused** | **YES** | STANDARD / LOW / unknown criticality + `trustedSfiaProfile:null` → `bootstrap_focused_no_trusted_profile` | No |
| **High-Assurance** | **YES** | `projectCriticality: "CRITICAL"` → rigor=high + verification=high → `high_assurance_signals` | No |
| **Routine** | **NO** | Requires known-low on ambiguity, sourceBreadth, verificationNeed, reasoningDepth, contradictionRisk (+ rigor known ≠ high) | **YES** — explicit `cognitiveWorkloadSignals` in tests/eval |
| **Deep** | **NO** | Requires known high/medium `sourceBreadth` and/or `reasoningDepth` | **YES** — explicit signals in tests/eval |

### Zero-cost product-path simulation (policy mirror; LIVE=0)

| Case | Derived rigor / verification / context | Decision |
|------|----------------------------------------|----------|
| STANDARD short | medium / unknown / low | Focused bootstrap |
| LOW short | low / unknown / low | Focused bootstrap |
| CRITICAL short | high / high / low | High-Assurance |
| STANDARD long context | medium / unknown / high | Focused bootstrap (context alone ≠ Deep) |
| unknown criticality | unknown / unknown / low | Focused bootstrap |

Existing D0 corroboration (deterministic, already on main):
- `mw2.s01.bootstrap.product.d0.test.ts` CORR-D0-06 — product orchestration → Focused via EventSink
- `mw2.s01.cwpPolicy.d0.test.ts` CORR-D0-02d — CRITICAL turn context → High-Assurance without inventing Profile
- CORR-D0-02 / CORR-D0-04 — Routine / Deep only via explicit known signals (test)

### Proof Routine/Deep are test/eval-only today

1. Product never passes `cognitiveWorkloadSignals`.
2. `buildSignalsFromTurnContext` never sets ambiguity / reasoningDepth / sourceBreadth / contradictionRisk to known-low or known-high.
3. Therefore `isRoutineEligible` cannot pass on product-derived signals.
4. Therefore Deep branch (`breadth`/`depth` scores) cannot fire on product-derived signals.
5. Eval/tests that reach Routine/Deep inject explicit signal objects (`mw2EvalMatrix`, `mw2S01Observe`, `mw2.s01.cwpPolicy.d0.test.ts`).

## 18–20. Phase 0 verdict / live calls / blocker

### Phase 0 verdict

**PREFLIGHT BLOCKED**

### Live OpenAI calls

- Before Phase 0: **0**
- After Phase 0: **0**
- **LIVE OPENAI CALLS = 0**

### Why no live call is justified

GO hard condition: R2 representative strategy behavior used to claim product exit must be naturally produced through the current product path. Closure target matrix includes Routine + Focused + Deep + High-Assurance. Only Focused + High-Assurance are product-reachable. Using test-only `cognitiveWorkloadSignals` for Routine/Deep would fabricate R2 coverage and is **rejected**. Partial paid campaign on reachable subset alone is **not** authorized when the primary closure claim is structurally blocked.

Exact unreachable classes/signals:
- **Routine** — missing product producers for known-low discriminating dimensions
- **Deep** — missing product producers for sourceBreadth / reasoningDepth
- Supporting gap: trusted SFIA Profile never available on product path (always null)

## 21–40. REAL campaign sections — NOT EXECUTED

| Item | Status |
|------|--------|
| Campaign plan | NOT STARTED |
| Budget policy | NOT APPLIED (no spend) |
| Capability manifest for live | NOT BUILT |
| Local REAL harness | NOT CREATED |
| R2 / R3 matrices | N/A |
| MW2-S02 REAL control | **DEFERRED** — not reached |
| Strategy/effort telemetry from live | N/A |
| Cognitive quality / HA qualitative REAL | N/A |
| Latency / tokens / estimated cost | N/A — spend **$0.00** |
| Provider errors/retries | N/A |
| Secret scan of live responses | N/A |

## 41–43. Regression / typecheck / tracked diff

- Targeted MW2 D0 suites: **not re-run in this documentary finalization** — Phase 0 static/deterministic evidence sufficient for STOP; main already CI-green on PR #456
- typecheck: **not required for documentary STOP** under this GO when no mutation
- Tracked diff on campaign worktree: **NONE** (`git status --short` empty)
- **PRODUCTION MUTATION = NONE**

## 44–51. Anti-integration / anti-claims

- project commit: **NO**
- project push: **NO**
- PR: **NO**
- merge: **NO** (PR #456 already merged earlier under distinct GO; this REAL GO did not merge)
- C5 / Roadmap / doc09 / Build Doctrine: **unchanged**
- reasoning.context / reasoning.mode: **DEFER**
- production model routing: **NOT SELECTED**
- no test-only CWP bypass attempted for R2
- no architecture fix under this GO

## 52–58. Claim ceiling / gaps / exit verdict

### Claim ceiling (this pack)

Allowed:
- Phase 0 product CWP reachability gap **IDENTIFIED**
- Focused + High-Assurance product-reachable under current main
- Routine + Deep require test/eval-only signal injection today

Forbidden / not claimed:
- MW2 REAL EXIT PROVEN
- MW2 CLOSED / COMPLETE
- Cognitive Completion PROVEN
- runtime v3 ADOPTED
- production model/routing selected
- R2/R3 REAL on Luna

### Realism gaps / reserves

- Product CWP signal surface is thinner than functional source B2 aspiration (intention / Truth C / prior turn / Profile → full workload signals).
- No product producer for ambiguity, depth, breadth, contradiction, Profile.
- HA is reachable via criticality-derived rigor/verification only — not via richer contradiction/verification facts.

### Exit-proof verdict

**MW2 BOUNDED REAL EXIT PROOF — PREFLIGHT BLOCKED — ZERO LIVE OPENAI CALLS — PRODUCT CWP SIGNAL REACHABILITY GAP IDENTIFIED — TEST-ONLY SIGNAL INJECTION REJECTED AS R2 EVIDENCE — NO PRODUCTION MUTATION — MW2 CLOSURE NOT ELIGIBLE — READY FOR CHATGPT REAL PREFLIGHT CRITICAL REVIEW**

### MW2 closure

**NOT CLAIMED** · **NOT ELIGIBLE** pending correction / ChatGPT requalification

## 60. Recommended next gate

ChatGPT REAL Preflight Critical Review of this blocker → if confirmed, **DECISION MORRIS REQUIRED** for a distinct correction/requalification GO to make Routine/Deep product-reachable (or to re-scope MW2 exit criteria). **No automatic correction under this GO.**

---

# APPENDIX — Product vs test-only evidence pointers

- Product: `orchestrateTurn.ts` turnWorkloadContext + trustedSfiaProfile:null
- Policy: `cognitiveWorkloadPolicy.ts` buildSignalsFromTurnContext / isRoutineEligible / selectStrategyClass
- Test Routine/Deep: `mw2.s01.cwpPolicy.d0.test.ts`, `mw2EvalMatrix.ts`, `mw2S01Observe.ts`
- Product Focused proof: `mw2.s01.bootstrap.product.d0.test.ts`
- Client boundary (CWP not on DTO): CORR-MW2-DLV-05 retained on main

Pack finalized (Europe/Paris): 2026-09-02 10:07:07 CEST
