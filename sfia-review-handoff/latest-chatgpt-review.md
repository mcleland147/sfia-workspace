# Review Pack FULL — NORA Adaptive Cognitive Execution & Controlled Continuation 01

at: 2026-10-12T06:15:00Z
local: 2026-10-12 08:15:00 CEST (Europe/Paris)
level: FULL
profile: CRITICAL
cycleType: 8 — Delivery / implémentation
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
chantier: NORA-ADAPTIVE-COGNITIVE-EXECUTION-CONTINUATION-01
macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
GO Morris: P1+P2 combined construction — ACCORDÉ 2026-10-12
mode: COMBINED LOCAL DELIVERY P0(preserve)+P1+P2 — ZERO REAL
prior handoff: fb2d7dcf / blob 876ae2a7 — P0 Chat-First Targeted Correction 01

---

## 1. Local Git Truth Check

| Check | Result |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| remote | origin https://github.com/mcleland147/sfia-workspace.git |
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| left-right | `0	0` |
| prior handoff tip | fb2d7dcf32362fdf85649e24bbb68d076565c324 — MATCH |
| staged | none |
| project commit | NONE |

```
git status --short:
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts

git diff --name-status:
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts

git diff --stat:
.tmp-sfia-review/chatgpt-review.md                 | 169 +-------
 .../hooks/useProductConversation.ts                |  16 +
 .../surfaces/ConversationSurface.tsx               |  23 ++
 .../project-assistant/ProjectAssistantPanel.tsx    |  29 +-
 .../features/project-assistant/orchestrateTurn.ts  |  41 +-
 .../app/features/project-assistant/types.ts        |  14 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |  19 +
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    | 427 +++++++++++++++------
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |  64 ++-
 .../app/lib/nora-cognitive-runtime/types.ts        |  20 +
 10 files changed, 513 insertions(+), 309 deletions(-)
```

P0 Product files PRESERVED (adapted only if needed — UI/DTO untouched this pass):
- types.ts / orchestrateTurn.ts / ProjectAssistantPanel.tsx
- useProductConversation.ts / ConversationSurface.tsx
- four P0 tests preserved

STOP Git: not triggered.

---

## 2. Convergence / Capacité v3

READ ONLY: Build Doctrine, Roadmap, product-completion, v3 framing 30/33/34, CKC 08/09, Nora trajectory 08, Product Simplification 01/04/07.

| Item | Value |
|---|---|
| Capacité v3 | Analyse cognitive autonome, continuité, fiabilité sous gouvernance |
| Milestone | P6 GLOBAL INTEGRATED PRODUCT QA |
| Runtime v3 | NON ADOPTED |
| Roadmap | MIN-09 → maxTurns → P0 → **P1+P2 unified** → ChatGPT → Morris intégration unique → P6 exit → P7 |

---

## 3. KEEP / ADAPT / COMPLETE

| Asset | Class |
|---|---|
| OpenAI Agents Runner / runNoraAgentsTurn | ADAPT (adaptive budget + RunState continuation loop) |
| runNoraCognitiveTurn | ADAPT (pass strategy/adaptive/continuation) |
| CognitiveWorkloadPolicy | KEEP (+ light content hints ADAPT) |
| turnBudget / campaignBudget | KEEP |
| ProductSqliteSession / Memory B | KEEP |
| P0 incomplete DTO + Chat-first UI | KEEP |
| adaptiveTurnBudget.ts | COMPLETE (new) |
| controlledContinuation.ts | COMPLETE (new) |
| Durable serialized RunState across process restart | DEFER (Morris architecture) |

---

## 4. P1 — Adaptive Runner Budget

### Mechanism
`resolveAdaptiveMaxTurns` maps CognitiveStrategyClass → bounded mission maxTurns:

| Strategy | Base maxTurns |
|---|---|
| Routine | 5 (legacy) |
| Focused | 8 |
| Deep | 10 |
| High-Assurance | 10 |

Floor=3, **Ceiling=10** (NOT experimental 12). Explicit caller maxTurns wins. UNKNOWN ≠ inflate. Campaign clamp still binds.

Content hints (`inferWorkloadHintsFromUserContent`) may set known-high sourceBreadth/toolDependency from explicit Pilot wording — never invent LOW.

Wired: `runNoraCognitiveTurn` computes adaptive decision → `runNoraAgentsTurn` uses it when `maxTurns` omitted.

### Observability
`adaptiveObserve`: requestedMaxTurns, effectiveMaxTurns, strategyClass, reasonCodes, floor, ceiling, explicitOverride.

---

## 5. OpenAI Capability Fit Check (R22)

| Primitive | Qualification |
|---|---|
| SDK `@openai/agents` 0.17.0 / agents-core | installed |
| `Runner.run(agent, input, {maxTurns})` | USE |
| `MaxTurnsExceededError.state: RunState` | USE |
| `Runner.run(agent, RunState, {maxTurns})` resume | USE/ADAPT |
| `maxTurns` semantics | ABSOLUTE vs `state._currentTurn` (not remaining) — critical fix |
| errorHandlers.maxTurns soft complete | KEEP on mission ceiling |
| Session (ProductSqliteSession) | KEEP for CAS A |
| Durable serialized RunState across restart | DEFER |

CAS A (new user request): KEEP via Session.  
CAS B (SDK RunState): USE inside Product turn.  
CAS C (autonomous same-mission): COMBINE B — automatic resume raising absolute cap toward mission budget without Pilote reformulation.

---

## 6. P2 — Controlled Continuation

### Mechanism
When missionMaxTurns > CONTINUATION_SEGMENT_MAX_TURNS (5):
1. First Runner segment absoluteCap=min(mission,5), no soft handler → MaxTurnsExceededError with state
2. Resume `runner.run(agent, state, {maxTurns: raisedAbsoluteCap})`
3. At mission ceiling, soft handler → honest incomplete if still unfinished
4. Same NoraTurnBudget + campaign counters — no reset

Disabled when mission ≤ 5 or `enableControlledContinuation:false`.

### Observability
`continuationObserve`: continued, segmentsExecuted, missionMaxTurns, segmentMaxTurns, allottedTurns, stopReason, reasonCodes.

### Not claimed
- Continuity after process restart
- Durable RunState store
- New worker/orchestrator/persistence SoT

---

## 7. Product P0 non-régression

- status incomplete / limitReached preserved
- Chat-first + Panel surfaces preserved
- Cognitive STOP distinct
- Durable LR/ACW suppress on limitReached preserved
- ANSWERED ≠ mission success

---

## 8. Consolidated documentary proofs

| Case | Result |
|---|---|
| Legacy maxTurns=5, continuation off | incomplete, no COMPLETE marker |
| P1 adaptive maxTurns=10, continuation off | COMPLETE without Pilote relaunch |
| P2 mission=10, segment=5, RunState resume | continued=true, ≥2 segments, COMPLETE |
| Campaign clamp remaining=4 | effective≤4, incomplete, no bypass |
| Exhaust maxTurns=3 | incomplete honest |

---

## 9. Fichiers créés (contenu complet)

### adaptiveTurnBudget.ts

```ts
/**
 * P1 — Adaptive Runner model-turn budget (delivery design parameters).
 *
 * Proportioned to CognitiveStrategyClass + known workload signals.
 * UNKNOWN ≠ LOW (CORR-MW2-DLV-01). Never unlimited. Never derived solely
 * from experimental maxTurns=12 documentary qualification.
 *
 * Strategy Class ≠ Product authority. Floor/ceiling are server FinOps guards.
 */
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import type {
  CognitiveStrategyClass,
  CognitiveWorkloadSignals,
  SignalValue,
} from "./cognitiveWorkloadPolicy";

/** Legacy Product default when no adaptive decision applies. */
export const LEGACY_DEFAULT_MAX_TURNS = CT_MAX_TOOL_ROUNDS + 1; // 5

/** Absolute production floor — never below this without explicit caller override. */
export const ADAPTIVE_MAX_TURNS_FLOOR = 3;

/**
 * Absolute production ceiling — FinOps hard guard.
 * Intentionally NOT 12 (experimental documentary proof only).
 */
export const ADAPTIVE_MAX_TURNS_CEILING = 10;

/**
 * Base mission maxTurns by strategy class (delivery parameters).
 * Routine preserves legacy default (5).
 */
export const STRATEGY_BASE_MAX_TURNS: Record<CognitiveStrategyClass, number> = {
  Routine: LEGACY_DEFAULT_MAX_TURNS,
  Focused: 8,
  Deep: 10,
  "High-Assurance": 10,
};

export type AdaptiveMaxTurnsDecision = {
  /** Mission maxTurns before campaign clamp. */
  requestedMaxTurns: number;
  strategyClass: CognitiveStrategyClass | null;
  reasonCodes: string[];
  floor: number;
  ceiling: number;
  /** True when caller explicit maxTurns was used (tests / eval pins). */
  explicitOverride: boolean;
};

function clampInt(n: number, lo: number, hi: number): number {
  if (!Number.isFinite(n)) return lo;
  return Math.max(lo, Math.min(hi, Math.trunc(n)));
}

function isKnownHigh(value: SignalValue | undefined): boolean {
  return value === "high";
}

function isKnownMediumOrHigh(value: SignalValue | undefined): boolean {
  return value === "medium" || value === "high";
}

/**
 * Light, observable hints from Pilot request text — never invents LOW for unknowns.
 * Used only to elevate known dimensions when wording is explicit.
 */
export function inferWorkloadHintsFromUserContent(
  content: string,
): Partial<CognitiveWorkloadSignals> {
  const c = content.trim();
  if (!c) return {};
  const hints: Partial<CognitiveWorkloadSignals> = {};
  if (
    /document|documentary|multi[- ]?source|plusieurs\s+sources|guided\s+document|analys(?:e|er)\s+(?:plusieurs|les)\s+documents|cross[- ]?read|lire\s+(?:plusieurs|les)\s+fichiers/i.test(
      c,
    )
  ) {
    hints.sourceBreadth = "high";
    hints.toolDependency = "high";
  }
  if (
    /v[ée]rif|cross[- ]?check|contradic|coherence|coh[ée]rence|entre\s+documents/i.test(
      c,
    )
  ) {
    hints.verificationNeed = "high";
  }
  return hints;
}

/**
 * Resolve adaptive mission maxTurns.
 * Explicit caller maxTurns always wins (tests, eval). Otherwise strategy+signals.
 */
export function resolveAdaptiveMaxTurns(input: {
  strategyClass?: CognitiveStrategyClass | null;
  signals?: Partial<CognitiveWorkloadSignals> | null;
  explicitMaxTurns?: number | null;
}): AdaptiveMaxTurnsDecision {
  const reasonCodes: string[] = [];
  const floor = ADAPTIVE_MAX_TURNS_FLOOR;
  const ceiling = ADAPTIVE_MAX_TURNS_CEILING;

  if (
    input.explicitMaxTurns != null &&
    Number.isFinite(input.explicitMaxTurns)
  ) {
    const requestedMaxTurns = Math.max(0, Math.trunc(input.explicitMaxTurns));
    reasonCodes.push("explicit_caller_maxTurns");
    return {
      requestedMaxTurns,
      strategyClass: input.strategyClass ?? null,
      reasonCodes,
      floor,
      ceiling,
      explicitOverride: true,
    };
  }

  const strategy = input.strategyClass ?? null;
  let base =
    strategy != null
      ? STRATEGY_BASE_MAX_TURNS[strategy]
      : LEGACY_DEFAULT_MAX_TURNS;
  reasonCodes.push(
    strategy != null
      ? `strategy_base:${strategy}:${base}`
      : `legacy_default:${base}`,
  );

  const signals = input.signals ?? {};
  // Known-high breadth/verification may bump within ceiling — never invent from unknown.
  if (
    isKnownHigh(signals.sourceBreadth) ||
    isKnownHigh(signals.verificationNeed)
  ) {
    const bumped = Math.min(ceiling, Math.max(base, 10));
    if (bumped > base) {
      reasonCodes.push("known_high_breadth_or_verification_bump");
      base = bumped;
    }
  } else if (
    isKnownMediumOrHigh(signals.sourceBreadth) &&
    isKnownMediumOrHigh(signals.toolDependency)
  ) {
    const bumped = Math.min(ceiling, Math.max(base, 8));
    if (bumped > base) {
      reasonCodes.push("known_medium_doc_tool_bump");
      base = bumped;
    }
  }

  // Unknown-heavy path: do not elevate beyond strategy base (UNKNOWN ≠ LOW inflate).
  if (
    signals.sourceBreadth === "unknown" &&
    signals.verificationNeed === "unknown" &&
    signals.reasoningDepth === "unknown"
  ) {
    reasonCodes.push("unknown_signals_no_inflate");
  }

  const requestedMaxTurns = clampInt(base, floor, ceiling);
  if (requestedMaxTurns !== base) {
    reasonCodes.push(`clamped_to_floor_ceiling:${requestedMaxTurns}`);
  }

  return {
    requestedMaxTurns,
    strategyClass: strategy,
    reasonCodes,
    floor,
    ceiling,
    explicitOverride: false,
  };
}

```

### controlledContinuation.ts

```ts
/**
 * P2 — Controlled Cognitive Continuation helpers (OpenAI-native-first R22).
 *
 * USE: Runner.run(agent, RunState, { maxTurns }) — native resume after MaxTurnsExceededError.state
 * ADAPT: Product mission loop that resumes automatically within mission/campaign budget
 * DEFER: durable serialized RunState across process restart (needs Morris architecture GO)
 *
 * CAS A = new user request in session (existing Memory B) — KEEP
 * CAS B = SDK RunState resume — USE for segment boundaries
 * CAS C = autonomous same-mission continuation — COMBINE B inside one Product turn
 *
 * Never resets campaign/tool counters. Never invents Product completion.
 */
import { LEGACY_DEFAULT_MAX_TURNS } from "./adaptiveTurnBudget";

/**
 * Per-segment Runner maxTurns. Matches legacy Product default so multi-segment
 * continuation is exercised when mission budget > 5 (P1 adaptive).
 */
export const CONTINUATION_SEGMENT_MAX_TURNS = LEGACY_DEFAULT_MAX_TURNS; // 5

/** Hard guard — prevent infinite segment loops even if counters desync. */
export const CONTINUATION_MAX_SEGMENTS = 4;

export type ContinuationStopReason =
  | "complete"
  | "mission_budget_exhausted"
  | "segment_limit_no_state"
  | "max_segments"
  | "campaign_or_provider_stop"
  | "abort"
  | "disabled";

export type ControlledContinuationObserve = {
  /** True when ≥1 RunState resume segment executed after an initial maxTurns stop. */
  continued: boolean;
  segmentsExecuted: number;
  missionMaxTurns: number;
  segmentMaxTurns: number;
  /** Model turns allotted across segments (sum of segment maxTurns requested). */
  allottedTurns: number;
  stopReason: ContinuationStopReason;
  reasonCodes: string[];
};

export function planContinuationSegments(input: {
  missionMaxTurns: number;
  segmentMaxTurns?: number;
  enableControlledContinuation?: boolean;
}): {
  enable: boolean;
  segmentMaxTurns: number;
  reasonCodes: string[];
} {
  const reasonCodes: string[] = [];
  const segmentMaxTurns = Math.max(
    1,
    Math.trunc(input.segmentMaxTurns ?? CONTINUATION_SEGMENT_MAX_TURNS),
  );
  const mission = Math.max(0, Math.trunc(input.missionMaxTurns));
  if (input.enableControlledContinuation === false) {
    reasonCodes.push("continuation_disabled");
    return { enable: false, segmentMaxTurns: mission || segmentMaxTurns, reasonCodes };
  }
  if (mission <= segmentMaxTurns) {
    reasonCodes.push("single_segment_sufficient");
    return { enable: false, segmentMaxTurns: mission || segmentMaxTurns, reasonCodes };
  }
  reasonCodes.push("multi_segment_mission");
  return { enable: true, segmentMaxTurns, reasonCodes };
}

export function emptyContinuationObserve(
  missionMaxTurns: number,
  segmentMaxTurns: number,
  stopReason: ContinuationStopReason,
  reasonCodes: string[] = [],
): ControlledContinuationObserve {
  return {
    continued: false,
    segmentsExecuted: 0,
    missionMaxTurns,
    segmentMaxTurns,
    allottedTurns: 0,
    stopReason,
    reasonCodes,
  };
}

```

### p6.nora.p1.adaptiveBudget.d0.test.ts

```ts
/**
 * P6 Nora P1 — Adaptive Runner Budget (deterministic).
 * ZERO REAL.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  ADAPTIVE_MAX_TURNS_CEILING,
  ADAPTIVE_MAX_TURNS_FLOOR,
  LEGACY_DEFAULT_MAX_TURNS,
  STRATEGY_BASE_MAX_TURNS,
  inferWorkloadHintsFromUserContent,
  resolveAdaptiveMaxTurns,
} from "@/lib/nora-cognitive-runtime/adaptiveTurnBudget";
import { decideCognitiveStrategy } from "@/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy";

describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
  it("legacy default remains 5; ceiling is not experimental 12", () => {
    expect(LEGACY_DEFAULT_MAX_TURNS).toBe(5);
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(10);
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBeLessThan(12);
    expect(STRATEGY_BASE_MAX_TURNS.Routine).toBe(5);
    expect(STRATEGY_BASE_MAX_TURNS.Focused).toBe(8);
    expect(STRATEGY_BASE_MAX_TURNS.Deep).toBe(10);
  });

  it("explicit maxTurns wins (tests / eval)", () => {
    const d = resolveAdaptiveMaxTurns({
      strategyClass: "Deep",
      explicitMaxTurns: 3,
    });
    expect(d.requestedMaxTurns).toBe(3);
    expect(d.explicitOverride).toBe(true);
    expect(d.reasonCodes).toContain("explicit_caller_maxTurns");
  });

  it("Routine → 5; Focused → 8; Deep → 10; never above ceiling", () => {
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Routine" }).requestedMaxTurns,
    ).toBe(5);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Focused" }).requestedMaxTurns,
    ).toBe(8);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Deep" }).requestedMaxTurns,
    ).toBe(10);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "High-Assurance" })
        .requestedMaxTurns,
    ).toBeLessThanOrEqual(ADAPTIVE_MAX_TURNS_CEILING);
  });

  it("UNKNOWN signals do not inflate beyond strategy base", () => {
    const d = resolveAdaptiveMaxTurns({
      strategyClass: "Focused",
      signals: {
        sourceBreadth: "unknown",
        verificationNeed: "unknown",
        reasoningDepth: "unknown",
      },
    });
    expect(d.requestedMaxTurns).toBe(8);
    expect(d.reasonCodes.some((c) => c.includes("unknown_signals"))).toBe(
      true,
    );
  });

  it("known-high documentary hints elevate strategy class via CWP", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Analyse plusieurs documents du projet et croise les sources.",
    );
    expect(hints.sourceBreadth).toBe("high");
    const strategy = decideCognitiveStrategy({
      signals: {
        ambiguity: "unknown",
        reasoningDepth: "medium",
        sourceBreadth: hints.sourceBreadth!,
        toolDependency: hints.toolDependency ?? "unknown",
        contradictionRisk: "unknown",
        contextSize: "medium",
        verificationNeed: hints.verificationNeed ?? "unknown",
        multimodality: "unknown",
        latencySensitivity: "unknown",
        costBudget: "unknown",
        rigorCriticality: "medium",
      },
    });
    expect(["Deep", "Focused", "High-Assurance"]).toContain(
      strategy.strategyClass,
    );
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
      ADAPTIVE_MAX_TURNS_CEILING,
    );
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(
      ADAPTIVE_MAX_TURNS_FLOOR,
    );
  });

  it("null strategy falls back to legacy 5", () => {
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: null }).requestedMaxTurns,
    ).toBe(5);
  });
});

```

### p6.nora.p1p2.documentary.mission.d0.test.ts

```ts
/**
 * P6 Nora P1+P2 — consolidated documentary mission (deterministic).
 *
 * Proves:
 * 1) Legacy ceiling maxTurns=5 + no continuation → incomplete (P0 honesty)
 * 2) Adaptive mission budget completes 7-turn script without Pilote relaunch
 * 3) Controlled continuation via native RunState when mission > segment
 * 4) Campaign clamp still binds
 * 5) Exhausted mission remains incomplete (no false ok)
 *
 * ZERO REAL — ScriptedModel / temp ProductSqliteSession.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ProductSqliteSession,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  acquireNoraCampaignBudget,
  campaignBudgetSnapshot,
} from "@/lib/nora-cognitive-runtime/campaignBudget";
import { CONTINUATION_SEGMENT_MAX_TURNS } from "@/lib/nora-cognitive-runtime/controlledContinuation";

const DOC_PATH = "projects/sfia-studio/app/package.json";
const COMPLETE_MARKER = "COMPLETE_DOC_ANALYSIS_SYNTHESIS";

const dirs: string[] = [];

function tmpSession(projectId: string): ProductSqliteSession {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-p1p2-"));
  dirs.push(dir);
  return new ProductSqliteSession({
    projectId,
    dbPath: path.join(dir, "session.sqlite"),
  });
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

/** Six sequential document reads then a final synthesis — needs 7 model turns. */
function documentaryScriptNeedingSevenModelTurns() {
  return [
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r1" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r2" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r3" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r4" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r5" },
      ),
    ],
    [
      functionCall(
        "git_local_read_file",
        { path: DOC_PATH, maxBytes: 2048 },
        { callId: "doc_r6" },
      ),
    ],
    [assistantMessage(COMPLETE_MARKER)],
  ];
}

async function runDocumentary(opts: {
  projectId: string;
  maxTurns?: number;
  enableControlledContinuation?: boolean;
  cognitiveStrategyClass?: "Routine" | "Focused" | "Deep" | "High-Assurance";
  campaign?: ReturnType<typeof acquireNoraCampaignBudget>;
}) {
  const session = tmpSession(opts.projectId);
  const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
  return runNoraAgentsTurn({
    correlationId: `cor:${opts.projectId}`,
    projectId: opts.projectId,
    systemInstructions: sfiaBoundaryInstructions(),
    userContent:
      "Analyse plusieurs documents du projet et produis une synthèse argumentée.",
    session,
    model,
    enableTools: true,
    workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    maxTurns: opts.maxTurns,
    enableControlledContinuation: opts.enableControlledContinuation,
    cognitiveStrategyClass: opts.cognitiveStrategyClass ?? "Deep",
    campaignBudget: opts.campaign,
  });
}

describe("P6 Nora P1+P2 — documentary mission consolidated", () => {
  it("T-legacy — maxTurns=5 + continuation off → incomplete (P0 non-regression)", async () => {
    const result = await runDocumentary({
      projectId: "prj:p1p2-legacy",
      maxTurns: 5,
      enableControlledContinuation: false,
      cognitiveStrategyClass: "Routine",
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).not.toContain(COMPLETE_MARKER);
    expect(result.continuationObserve?.continued).toBe(false);
    expect(result.adaptiveObserve?.explicitOverride).toBe(true);
  });

  it("T-P1 — adaptive Deep mission (≥7) completes without Pilote relaunch", async () => {
    // Explicit 10 — within ceiling; proves adapted budget (not legacy 5).
    const result = await runDocumentary({
      projectId: "prj:p1p2-adaptive",
      maxTurns: 10,
      // Single segment with full mission budget — P1 alone can complete.
      enableControlledContinuation: false,
      cognitiveStrategyClass: "Deep",
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    expect(result.adaptiveObserve?.requestedMaxTurns).toBe(10);
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBe(10);
  });

  it("T-P2 — mission 10 with segment 5 continues via RunState and completes", async () => {
    expect(CONTINUATION_SEGMENT_MAX_TURNS).toBe(5);
    const result = await runDocumentary({
      projectId: "prj:p1p2-continue",
      maxTurns: 10,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
    });
    expect(result.continuationObserve?.continued).toBe(true);
    expect(result.continuationObserve?.segmentsExecuted).toBeGreaterThanOrEqual(
      2,
    );
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    expect(result.continuationObserve?.stopReason).toBe("complete");
  });

  it("T-campaign — remaining model invocations clamp mission (no bypass)", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "camp:p1p2-clamp",
      maxModelInvocations: 4,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 4,
    });
    const result = await runDocumentary({
      projectId: "prj:p1p2-clamp",
      maxTurns: 10,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
      campaign,
    });
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBeLessThanOrEqual(4);
    expect(result.limitReached).toBe(true);
    expect(result.text).not.toContain(COMPLETE_MARKER);
    const snap = campaignBudgetSnapshot(campaign);
    expect(snap.consumedModelInvocations).toBeLessThanOrEqual(4);
  });

  it("T-exhaust — mission budget too small remains incomplete (honest)", async () => {
    const result = await runDocumentary({
      projectId: "prj:p1p2-exhaust",
      maxTurns: 3,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Routine",
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).not.toContain(COMPLETE_MARKER);
    expect(result.continuationObserve?.stopReason).not.toBe("complete");
  });
});

```

---

## 10. Diffs — fichiers modifiés runtime

### runNoraAgentsTurn.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 179a92cb..eaef2136 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -13,13 +13,24 @@ import {
   MaxTurnsExceededError,
   Runner,
   type Model,
+  type RunState,
   type Session,
   type AgentOutputType,
 } from "@openai/agents";
 import type { ConversationProvider } from "@/lib/platform/ai";
 import type { EventSink } from "@/lib/platform/observability/eventSink";
-import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
 import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
+import {
+  resolveAdaptiveMaxTurns,
+  type AdaptiveMaxTurnsDecision,
+} from "./adaptiveTurnBudget";
+import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
+import {
+  CONTINUATION_MAX_SEGMENTS,
+  emptyContinuationObserve,
+  planContinuationSegments,
+  type ControlledContinuationObserve,
+} from "./controlledContinuation";
 import {
   CampaignModelInvocationDeniedError,
   CampaignUsdHardCapDeniedError,
@@ -110,7 +121,20 @@ export type RunNoraAgentsTurnInput = {
   model?: Model | string;
   /** Provider used to resolve completeRound→Model adapter when model not injected. */
   provider?: ConversationProvider;
+  /**
+   * Explicit mission maxTurns override (tests/eval). When omitted, P1 adaptive
+   * policy selects a bounded budget from strategy class + signals.
+   */
   maxTurns?: number;
+  /** P1 — strategy class for adaptive budget (telemetry / policy). */
+  cognitiveStrategyClass?: CognitiveStrategyClass | null;
+  /** P1 — precomputed adaptive decision (cognitive turn). */
+  adaptiveMaxTurnsDecision?: AdaptiveMaxTurnsDecision | null;
+  /**
+   * P2 — when true (default), missions with budget > segment size may resume
+   * via native RunState within the same Product turn. Never resets campaign counters.
+   */
+  enableControlledContinuation?: boolean;
   /** When false, Agent receives no SFIA function tools. */
   enableTools?: boolean;
   /** Optional shared budget (tests). */
@@ -206,6 +230,29 @@ export type RunNoraAgentsTurnUsdObserve = NoraAgentsUsdSettleResult & {
   reservedInvocations: number;
 };
 
+export type RunNoraAgentsTurnAdaptiveObserve = AdaptiveMaxTurnsDecision & {
+  /** Mission maxTurns after campaign clamp. */
+  effectiveMaxTurns: number;
+};
+
+function extractTextFromRunItems(items: unknown[]): string {
+  return (
+    [...items]
+      .reverse()
+      .map((item) => {
+        const anyItem = item as {
+          type?: string;
+          content?: string;
+        };
+        if (anyItem.type === "message_output_item") {
+          return String(anyItem.content ?? "");
+        }
+        return "";
+      })
+      .find((t) => t.trim().length > 0) ?? ""
+  );
+}
+
 export function createNoraAgentsRunner(
   systemInstructions: string,
   budget?: NoraTurnBudget,
@@ -401,7 +448,13 @@ export async function runNoraAgentsTurn(
     }
   }
 
-  const requestedMaxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;
+  const adaptiveDecision =
+    input.adaptiveMaxTurnsDecision ??
+    resolveAdaptiveMaxTurns({
+      strategyClass: input.cognitiveStrategyClass ?? null,
+      explicitMaxTurns: input.maxTurns ?? null,
+    });
+  const requestedMaxTurns = adaptiveDecision.requestedMaxTurns;
   let clamp: {
     maxTurns: number;
     maxToolCalls: number | null;
@@ -570,6 +623,22 @@ export async function runNoraAgentsTurn(
     input.memoryBAvailability ??
     (session ? "available_with_history" : "unavailable");
 
+  const continuationPlan = planContinuationSegments({
+    missionMaxTurns: maxTurns,
+    enableControlledContinuation: input.enableControlledContinuation,
+  });
+  let continuationObserve: ControlledContinuationObserve =
+    emptyContinuationObserve(
+      maxTurns,
+      continuationPlan.segmentMaxTurns,
+      maxTurns <= 0 ? "mission_budget_exhausted" : "disabled",
+      [
+        ...adaptiveDecision.reasonCodes,
+        ...clamp.reasonCodes,
+        ...continuationPlan.reasonCodes,
+      ],
+    );
+
   let text = "";
   let structuredOutput: unknown = undefined;
   let lastResponseId: string | null = null;
@@ -581,10 +650,106 @@ export async function runNoraAgentsTurn(
   let runNewItems: unknown[] = [];
   let budgetStop = false;
 
+  const softMaxTurnsHandler = ({
+    runData,
+  }: {
+    runData: { newItems: unknown[] };
+  }) => {
+    budget.limitReached = true;
+    const lastText = extractTextFromRunItems(runData.newItems);
+    return {
+      finalOutput: lastText.trim() || "Model-turn budget reached (maxTurns).",
+      includeInHistory: false,
+    };
+  };
+
+  const applyStructuredFinalOutput = (finalOutput: unknown) => {
+    text =
+      typeof finalOutput === "string"
+        ? finalOutput
+        : finalOutput == null
+          ? ""
+          : typeof finalOutput === "object"
+            ? JSON.stringify(finalOutput)
+            : String(finalOutput);
+    if (input.outputType && finalOutput != null) {
+      structuredOutput =
+        typeof finalOutput === "string"
+          ? (() => {
+              try {
+                return JSON.parse(finalOutput) as unknown;
+              } catch {
+                return finalOutput;
+              }
+            })()
+          : finalOutput;
+      const isProductTurnOutput =
+        input.outputType &&
+        typeof input.outputType === "object" &&
+        "name" in input.outputType &&
+        (input.outputType as { name?: string }).name ===
+          "nora_product_turn_with_optional_lr";
+      if (isProductTurnOutput && typeof structuredOutput === "string") {
+        structuredOutput = JSON.parse(
+          buildFailClosedProductTurnJson(structuredOutput),
+        ) as unknown;
+      } else if (isProductTurnOutput && structuredOutput) {
+        if (!isNoraProductTurnWithOptionalLr(structuredOutput)) {
+          const coherent =
+            normalizeNoraProductTurnStructuredOutput(structuredOutput);
+          if (coherent) {
+            structuredOutput = {
+              narrative: coherent.narrative,
+              preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
+              lifecycleRecommendation: coherent.lifecycleRecommendation,
+              activeCycleWork: coherent.activeCycleWork ?? null,
+              conversationGuidance: coherent.conversationGuidance,
+              journalDelta: coherent.journalDelta ?? null,
+            };
+          }
+        }
+      }
+      if (
+        isProductTurnOutput &&
+        structuredOutput &&
+        typeof structuredOutput === "object"
+      ) {
+        const so = structuredOutput as {
+          narrative?: unknown;
+          conversationGuidance?: unknown;
+        };
+        if (typeof so.narrative === "string") {
+          text = isConversationGuidance(so.conversationGuidance)
+            ? composePilotFacingAssistantText(
+                so.narrative,
+                so.conversationGuidance,
+              )
+            : so.narrative;
+        }
+      } else if (
+        structuredOutput &&
+        typeof structuredOutput === "object" &&
+        "narrative" in structuredOutput &&
+        typeof (structuredOutput as { narrative?: unknown }).narrative ===
+          "string"
+      ) {
+        text = (structuredOutput as { narrative: string }).narrative;
+      }
+    }
+  };
+
   if (maxTurns <= 0) {
     budget.limitReached = true;
     budgetStop = true;
     text = "Campaign/model-turn budget reached before dispatch.";
+    continuationObserve = {
+      ...continuationObserve,
+      stopReason: "mission_budget_exhausted",
+      reasonCodes: [
+        ...continuationObserve.reasonCodes,
+        "mission_maxTurns_zero",
+      ],
+    };
     if (campaign && !campaign.limitReached) {
       if (remainingAggregateRealCalls(campaign) <= 0) {
         markCampaignBudgetBlocked(
@@ -601,143 +766,144 @@ export async function runNoraAgentsTurn(
       }
     }
   } else {
+    // SDK maxTurns is ABSOLUTE against state._currentTurn (not remaining).
+    // Segment 1 may stop early; resume raises absolute cap toward missionMaxTurns.
+    // eslint-disable-next-line @typescript-eslint/no-explicit-any
+    let runInput: string | RunState<any, Agent<any, any>> = input.userContent;
+    let absoluteCap = continuationPlan.enable
+      ? Math.min(maxTurns, continuationPlan.segmentMaxTurns)
+      : maxTurns;
+    let allottedTurns = 0;
+    let segmentsExecuted = 0;
+    let continued = false;
+    let stopReason: ControlledContinuationObserve["stopReason"] = "complete";
+
     try {
-      throwIfAborted(input.signal);
-      const result = await runner.run(agent, input.userContent, {
-        ...(session ? { session } : {}),
-        ...(input.signal ? { signal: input.signal } : {}),
-        maxTurns,
-        errorHandlers: {
-          maxTurns: ({ runData }) => {
-            budget.limitReached = true;
-            const lastText = [...runData.newItems]
-              .reverse()
-              .map((item) => {
-                const anyItem = item as {
-                  type?: string;
-                  rawItem?: { content?: unknown };
-                };
-                if (anyItem.type === "message_output_item") {
-                  return String(
-                    (item as { content?: string }).content ?? "",
-                  );
-                }
-                return "";
-              })
-              .find((t) => t.trim().length > 0);
-            return {
-              finalOutput:
-                lastText?.trim() ||
-                "Model-turn budget reached (maxTurns).",
-              includeInHistory: false,
-            };
-          },
-        },
-      });
-      throwIfAborted(input.signal);
-
-      text =
-        typeof result.finalOutput === "string"
-          ? result.finalOutput
-          : result.finalOutput == null
-            ? ""
-            : typeof result.finalOutput === "object"
-              ? JSON.stringify(result.finalOutput)
-              : String(result.finalOutput);
-      if (input.outputType && result.finalOutput != null) {
-        structuredOutput =
-          typeof result.finalOutput === "string"
-            ? (() => {
-                try {
-                  return JSON.parse(result.finalOutput) as unknown;
-                } catch {
-                  return result.finalOutput;
+      while (segmentsExecuted < CONTINUATION_MAX_SEGMENTS) {
+        throwIfAborted(input.signal);
+        const atMissionCeiling = absoluteCap >= maxTurns;
+
+        try {
+          const result = await runner.run(agent, runInput as never, {
+            // Session only on first string input — RunState resume owns history.
+            ...(typeof runInput === "string" && session ? { session } : {}),
+            ...(input.signal ? { signal: input.signal } : {}),
+            maxTurns: absoluteCap,
+            // Soft handler only at mission ceiling — earlier segments throw for RunState.
+            ...(atMissionCeiling
+              ? {
+                  errorHandlers: {
+                    maxTurns: softMaxTurnsHandler,
+                  },
                 }
-              })()
-            : result.finalOutput;
-        // Plain-string / partial Fake responses under product-turn outputType →
-        // coerce to fail-closed assessment + null Recommendation (same turn).
-        const isProductTurnOutput =
-          input.outputType &&
-          typeof input.outputType === "object" &&
-          "name" in input.outputType &&
-          (input.outputType as { name?: string }).name ===
-            "nora_product_turn_with_optional_lr";
-        if (isProductTurnOutput && typeof structuredOutput === "string") {
-          structuredOutput = JSON.parse(
-            buildFailClosedProductTurnJson(structuredOutput),
-          ) as unknown;
-        } else if (isProductTurnOutput && structuredOutput) {
-          // NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — do NOT rewrite a valid
-          // Product turn via normalize here: that path lacks server-derived
-          // CURRENT LR continuity and would coerce EMIT+null → HOLD guidance,
-          // then orchestrateTurn+continuity would fail as LIFECYCLE_MISMATCH.
-          // Preserve raw model output; orchestrateTurn owns boundary coherence.
-          if (!isNoraProductTurnWithOptionalLr(structuredOutput)) {
-            const coherent =
-              normalizeNoraProductTurnStructuredOutput(structuredOutput);
-            if (coherent) {
-              structuredOutput = {
-                narrative: coherent.narrative,
-                preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
-                lifecycleRecommendation: coherent.lifecycleRecommendation,
-                activeCycleWork: coherent.activeCycleWork ?? null,
-                conversationGuidance: coherent.conversationGuidance,
-                journalDelta: coherent.journalDelta ?? null,
-              };
-            }
+              : {}),
+          });
+          throwIfAborted(input.signal);
+
+          allottedTurns = absoluteCap;
+          segmentsExecuted += 1;
+          applyStructuredFinalOutput(result.finalOutput);
+          lastResponseId = result.lastResponseId ?? null;
+          usageAgg = result.state?.usage ?? null;
+          runNewItems = Array.isArray(result.newItems)
+            ? [...result.newItems]
+            : [];
+          stopReason = budget.limitReached
+            ? "mission_budget_exhausted"
+            : "complete";
+          break;
+        } catch (segmentError) {
+          if (isAbortLike(segmentError, input.signal)) {
+            stopReason = "abort";
+            throw new NoraTurnAbortedError();
           }
-        }
-        if (
-          isProductTurnOutput &&
-          structuredOutput &&
-          typeof structuredOutput === "object"
-        ) {
-          const so = structuredOutput as {
-            narrative?: unknown;
-            conversationGuidance?: unknown;
-          };
-          if (typeof so.narrative === "string") {
-            // Preview only — orchestrateTurn re-composes with full Product context.
-            text = isConversationGuidance(so.conversationGuidance)
-              ? composePilotFacingAssistantText(
-                  so.narrative,
-                  so.conversationGuidance,
+          if (
+            segmentError instanceof CampaignModelInvocationDeniedError ||
+            segmentError instanceof CampaignUsdHardCapDeniedError
+          ) {
+            budget.limitReached = true;
+            budgetStop = true;
+            text = segmentError.message;
+            stopReason = "campaign_or_provider_stop";
+            segmentsExecuted += 1;
+            allottedTurns = absoluteCap;
+            break;
+          }
+          if (segmentError instanceof MaxTurnsExceededError) {
+            segmentsExecuted += 1;
+            allottedTurns = absoluteCap;
+            const state = segmentError.state;
+            const partial =
+              extractTextFromRunItems(
+                Array.isArray(
+                  (segmentError as { newItems?: unknown[] }).newItems,
                 )
-              : so.narrative;
+                  ? ((segmentError as { newItems?: unknown[] })
+                      .newItems as unknown[])
+                  : [],
+              ) || "Model-turn budget reached (maxTurns).";
+
+            if (
+              continuationPlan.enable &&
+              !atMissionCeiling &&
+              state &&
+              segmentsExecuted < CONTINUATION_MAX_SEGMENTS
+            ) {
+              // Raise absolute cap toward mission budget — native RunState resume.
+              absoluteCap = Math.min(
+                maxTurns,
+                absoluteCap + continuationPlan.segmentMaxTurns,
+              );
+              // eslint-disable-next-line @typescript-eslint/no-explicit-any
+              runInput = state as RunState<any, Agent<any, any>>;
+              continued = true;
+              budget.limitReached = false;
+              continuationObserve.reasonCodes = [
+                ...continuationObserve.reasonCodes,
+                `resumed_absolute_cap_${absoluteCap}`,
+              ];
+              continue;
+            }
+
+            budget.limitReached = true;
+            text = partial;
+            stopReason = state
+              ? "mission_budget_exhausted"
+              : "segment_limit_no_state";
+            break;
           }
-        } else if (
-          structuredOutput &&
-          typeof structuredOutput === "object" &&
-          "narrative" in structuredOutput &&
-          typeof (structuredOutput as { narrative?: unknown }).narrative ===
-            "string"
-        ) {
-          text = (structuredOutput as { narrative: string }).narrative;
+          throw segmentError;
         }
       }
-      lastResponseId = result.lastResponseId ?? null;
-      usageAgg = result.state?.usage ?? null;
-      runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
-    } catch (error) {
-      if (isAbortLike(error, input.signal)) {
-        throw new NoraTurnAbortedError();
+
+      if (
+        segmentsExecuted >= CONTINUATION_MAX_SEGMENTS &&
+        budget.limitReached &&
+        stopReason === "complete"
+      ) {
+        stopReason = "max_segments";
       }
+    } catch (error) {
       if (
-        error instanceof CampaignModelInvocationDeniedError ||
-        error instanceof CampaignUsdHardCapDeniedError
+        isAbortLike(error, input.signal) ||
+        error instanceof NoraTurnAbortedError
       ) {
-        budget.limitReached = true;
-        budgetStop = true;
-        text = error.message;
-        // BYPASS-07: do not retry / re-dispatch.
-      } else if (error instanceof MaxTurnsExceededError) {
-        budget.limitReached = true;
-        text = "Model-turn budget reached (maxTurns).";
-      } else {
-        throw error;
+        throw error instanceof NoraTurnAbortedError
+          ? error
+          : new NoraTurnAbortedError();
       }
+      throw error;
     }
+
+    continuationObserve = {
+      continued,
+      segmentsExecuted,
+      missionMaxTurns: maxTurns,
+      segmentMaxTurns: continuationPlan.segmentMaxTurns,
+      allottedTurns,
+      stopReason,
+      reasonCodes: continuationObserve.reasonCodes,
+    };
   }
 
   const usage = {
@@ -833,6 +999,11 @@ export async function runNoraAgentsTurn(
       }
     : undefined;
 
+  const adaptiveObserve: RunNoraAgentsTurnAdaptiveObserve = {
+    ...adaptiveDecision,
+    effectiveMaxTurns: maxTurns,
+  };
+
   return {
     text,
     usage,
@@ -848,5 +1019,7 @@ export async function runNoraAgentsTurn(
     ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
     ...(budgetObserve ? { budgetObserve } : {}),
     ...(usdObserve ? { usdObserve } : {}),
+    adaptiveObserve,
+    continuationObserve,
   };
 }
```

### runNoraCognitiveTurn.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 296b2016..6e2d8633 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -34,6 +34,10 @@ import {
   type SemanticCognitiveWorkloadAssessment,
   type TurnWorkloadContext,
 } from "./cognitiveWorkloadPolicy";
+import {
+  inferWorkloadHintsFromUserContent,
+  resolveAdaptiveMaxTurns,
+} from "./adaptiveTurnBudget";
 import { validateRuntimeReasoningCapability } from "./reasoningCapability";
 import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";
 import {
@@ -233,6 +237,14 @@ export type RunNoraCognitiveTurnInput = {
   productExecutionTools?: import("./productExecutionAgentsTools").ProductExecutionToolContext | null;
   /** Request-scoped AbortSignal — forwarded to the same Agents Runner. */
   signal?: AbortSignal;
+  /**
+   * Explicit mission maxTurns (tests/eval). When omitted, P1 adaptive policy applies.
+   */
+  maxTurns?: number;
+  /**
+   * P2 — default true. Set false to force single-segment Runner (qualification tests).
+   */
+  enableControlledContinuation?: boolean;
 };
 
 /**
@@ -306,10 +318,20 @@ function resolveCognitiveStrategyForTurn(
 ): ReturnType<typeof decideCognitiveStrategy> | null {
   if (input.skipCognitiveStrategy) return null;
 
+  const lastUser = [...input.messages]
+    .reverse()
+    .find((m) => m.role === "user");
+  const contentHints = lastUser?.content
+    ? inferWorkloadHintsFromUserContent(lastUser.content)
+    : {};
+
   // Test/eval explicit override remains (not product R2 proof).
   if (input.cognitiveWorkloadSignals) {
     return decideCognitiveStrategy({
-      signals: normalizeCognitiveWorkloadSignals(input.cognitiveWorkloadSignals),
+      signals: normalizeCognitiveWorkloadSignals({
+        ...contentHints,
+        ...input.cognitiveWorkloadSignals,
+      }),
       trustedSfiaProfile: input.trustedSfiaProfile,
     });
   }
@@ -319,14 +341,17 @@ function resolveCognitiveStrategyForTurn(
     return decideCognitiveStrategy({
       signals: mergeCognitiveWorkloadSignals({
         turnContext: input.turnWorkloadContext,
-        semanticAssessment: input.semanticCognitiveWorkload,
+        semanticAssessment: {
+          ...contentHints,
+          ...(input.semanticCognitiveWorkload ?? {}),
+        },
       }),
       trustedSfiaProfile: input.trustedSfiaProfile,
     });
   }
 
   return decideCognitiveStrategy({
-    signals: normalizeCognitiveWorkloadSignals({}),
+    signals: normalizeCognitiveWorkloadSignals(contentHints),
     trustedSfiaProfile: input.trustedSfiaProfile,
   });
 }
@@ -784,6 +809,11 @@ export async function runNoraCognitiveTurn(
       strategyDecision,
     );
   }
+  const adaptiveMaxTurnsDecision = resolveAdaptiveMaxTurns({
+    strategyClass: strategyDecision?.strategyClass ?? null,
+    signals: strategyDecision?.normalizedSignals ?? null,
+    explicitMaxTurns: input.maxTurns ?? null,
+  });
   const routingDecision = resolveProductCognitiveRouting(
     input,
     strategyDecision,
@@ -886,6 +916,10 @@ export async function runNoraCognitiveTurn(
       outputType: input.outputType,
       cycleJournalTools: null,
       signal: input.signal,
+      maxTurns: input.maxTurns,
+      cognitiveStrategyClass: strategyDecision?.strategyClass ?? null,
+      adaptiveMaxTurnsDecision,
+      enableControlledContinuation: input.enableControlledContinuation,
     });
     throwIfAborted(input.signal);
     const observations = [
@@ -909,7 +943,13 @@ export async function runNoraCognitiveTurn(
       mw6 = composed.surface;
       turn.text = composed.governedText;
     }
-    const { hostedSearchObserve, budgetObserve, ...turnBase } = turn;
+    const {
+      hostedSearchObserve,
+      budgetObserve,
+      adaptiveObserve,
+      continuationObserve,
+      ...turnBase
+    } = turn;
     const mw6AuthorityBinding = budgetObserve
       ? {
           authorityBound: budgetObserve.authorityBound,
@@ -941,6 +981,8 @@ export async function runNoraCognitiveTurn(
           memoryBCompactionState: "none",
           memoryBCompactionDetails: null,
           ...(mw6AuthorityBinding ? { mw6AuthorityBinding } : {}),
+          ...(adaptiveObserve ? { adaptiveObserve } : {}),
+          ...(continuationObserve ? { continuationObserve } : {}),
         },
         input,
         strategyDecision,
@@ -1066,6 +1108,10 @@ export async function runNoraCognitiveTurn(
           : null,
       productExecutionTools: input.productExecutionTools ?? null,
       signal: input.signal,
+      maxTurns: input.maxTurns,
+      cognitiveStrategyClass: strategyDecision?.strategyClass ?? null,
+      adaptiveMaxTurnsDecision,
+      enableControlledContinuation: input.enableControlledContinuation,
     });
     throwIfAborted(input.signal);
     const observations = [
@@ -1089,7 +1135,13 @@ export async function runNoraCognitiveTurn(
       mw6 = composed.surface;
       turn.text = composed.governedText;
     }
-    const { hostedSearchObserve, budgetObserve, ...turnBase } = turn;
+    const {
+      hostedSearchObserve,
+      budgetObserve,
+      adaptiveObserve,
+      continuationObserve,
+      ...turnBase
+    } = turn;
     const mw6AuthorityBinding = budgetObserve
       ? {
           authorityBound: budgetObserve.authorityBound,
@@ -1106,6 +1158,8 @@ export async function runNoraCognitiveTurn(
         memoryBCompactionState: compactionState,
         memoryBCompactionDetails: compactionDetails,
         ...(mw6AuthorityBinding ? { mw6AuthorityBinding } : {}),
+        ...(adaptiveObserve ? { adaptiveObserve } : {}),
+        ...(continuationObserve ? { continuationObserve } : {}),
       },
       input,
       strategyDecision,
```

### types.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 096f8c5f..de836ca6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -89,6 +89,26 @@ export type NoraCognitiveTurnResult = {
     realPreflightReasons: string[];
     eligible: boolean;
   };
+  /** P1 — adaptive mission maxTurns decision + effective clamp. */
+  adaptiveObserve?: {
+    requestedMaxTurns: number;
+    effectiveMaxTurns: number;
+    strategyClass: CognitiveStrategyClass | null;
+    reasonCodes: string[];
+    floor: number;
+    ceiling: number;
+    explicitOverride: boolean;
+  };
+  /** P2 — controlled continuation observability (same Product turn). */
+  continuationObserve?: {
+    continued: boolean;
+    segmentsExecuted: number;
+    missionMaxTurns: number;
+    segmentMaxTurns: number;
+    allottedTurns: number;
+    stopReason: string;
+    reasonCodes: string[];
+  };
 };
 
 export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };
```

### index.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index e56f07f0..09f32abd 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -82,6 +82,25 @@ export {
   TOOL_TURN_BUDGET_EXCEEDED_RESULT,
 } from "./turnBudget";
 export type { NoraTurnBudget } from "./turnBudget";
+export {
+  resolveAdaptiveMaxTurns,
+  inferWorkloadHintsFromUserContent,
+  LEGACY_DEFAULT_MAX_TURNS,
+  ADAPTIVE_MAX_TURNS_FLOOR,
+  ADAPTIVE_MAX_TURNS_CEILING,
+  STRATEGY_BASE_MAX_TURNS,
+} from "./adaptiveTurnBudget";
+export type { AdaptiveMaxTurnsDecision } from "./adaptiveTurnBudget";
+export {
+  planContinuationSegments,
+  emptyContinuationObserve,
+  CONTINUATION_SEGMENT_MAX_TURNS,
+  CONTINUATION_MAX_SEGMENTS,
+} from "./controlledContinuation";
+export type {
+  ControlledContinuationObserve,
+  ContinuationStopReason,
+} from "./controlledContinuation";
 export {
   createNoraCampaignBudget,
   acquireNoraCampaignBudget,
```

---

## 11. Tests exécutés

```bash
npx vitest run \
  __tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts \
  __tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts \
  __tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts \
  __tests__/nora-cognitive-runtime/runner.d0.test.ts \
  __tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts \
  __tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx \
  __tests__/pre-m6-product-ui/p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx \
  __tests__/project-assistant/mw3.cognitiveStop.surface.d0.test.ts \
  __tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx \
  __tests__/project-assistant/orchestrateTurn.test.ts \
  __tests__/pre-m6-product-ui/p5.s06.cp02.cancellation.hook.test.tsx \
  --reporter=dot
```

**11 files / 65 tests PASS**

```bash
npx tsc -p tsconfig.json --noEmit  # TSC_OK
```

### Not executed
- REAL OpenAI — GO REAL NON
- Process restart RunState persistence — DEFER
- Full P6 campaign — disproportionate

---

## 12. Fake / Real Qualification

| Item | Value |
|---|---|
| Achieved | **DETERMINISTIC PROVEN AT COMBINED P0/P1/P2 SCOPE** |
| Fake | ScriptedModel + Fake adapters |
| NOT | REAL BOUNDARY / REAL GDR / P6 GLOBAL PASS / Runtime v3 ADOPTED |
| GO REAL | NON |

---

## 13. Dette / réserves / exit

**P1 EXIT:** met — proportional budget, campaign clamp, ceiling 10, documentary improvement.

**P2 EXIT:** met for same-process multi-segment RunState continuation — NOT for cross-restart.

**P0 EXIT:** preserved.

**Réserves:**
- P0-EFFECT-02 residual store-level if demanded beyond orch T5
- Cross-restart RunState persistence DEFER
- REAL GDR quality NOT proven
- No Figma redesign

**Décisions Morris:**
1. ChatGPT consolidated review
2. Unique Git integration of P0+P1+P2
3. Optional GO for durable RunState persistence
4. Separate GO REAL

---

## 14. Verdict

**NORA COGNITIVE AUTONOMY — COMBINED LOCAL DELIVERY COMPLETE / READY FOR CHATGPT REVIEW**

Status: READY FOR REVIEW  
QA: DETERMINISTIC AT COMBINED SCOPE  

Ne pas déclarer: P6 GLOBAL PASS · Product READY · Runtime v3 ADOPTED · REAL VALIDATED · READY FOR PR.
