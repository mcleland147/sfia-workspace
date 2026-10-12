# Review Pack FULL — NORA P1/P2 TARGETED VERIFICATION PASS 01

at_europe_paris: 2026-10-12 12:45:40 CEST
at_utc: 2026-10-12T10:45:40Z
level: FULL
profile: CRITICAL
cycleType: 8 — Delivery / implémentation
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
pass: NORA P1/P2 — TARGETED VERIFICATION 01
macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
chantier: NORA-ADAPTIVE-COGNITIVE-EXECUTION-CONTINUATION-01
workspace: /Users/morris/Projects/sfia-workspace-p6-rec01-human-qa
repository: mcleland147/sfia-workspace
branch: qa/p6-hqa-02-rec01-human-qa
HEAD: f31bb8f610802c102edbe68889fb8ecf0339ec28
origin/main: f31bb8f610802c102edbe68889fb8ecf0339ec28
prior_combined_handoff_expected: c4eaa9cfe8a6a7a9c45287aee5daf887ac470e33 / blob 98dd0b9788b8b4cb569c91e9fbb77ea4da42ec97
mode: PROOF FIRST — CORRECT ONLY IF DEFECT CONFIRMED
git_integration: NONE (no project commit/push/PR/merge)
real: NON (deterministic ScriptedModel only)

---

## 1. GO Morris consommé

Autorisation: vérification déterministe ciblée + correction locale minimale **uniquement si défaut démontré**.

GO n'autorise PAS: REAL OpenAI; refonte architecture; nouvelle persistence; commit/push projet; PR; merge; promotion baseline; Runtime v3 adoption.

---

## 2. Local Git Truth Check

| Check | Result |
|---|---|
| pwd | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| remote | `origin https://github.com/mcleland147/sfia-workspace.git` |
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| staged | **none** |
| dirty | P0/P1/P2 candidate preserved (lib + features + tests untracked) + this pack |
| STOP Git | **not triggered** |

Candidats P0/P1/P2 présents:
- Modified: `runNoraAgentsTurn.ts`, `runNoraCognitiveTurn.ts`, `types.ts`, `index.ts`, Product orch/UI P0 files
- Untracked created: `adaptiveTurnBudget.ts`, `controlledContinuation.ts`, P0/P1/P2 tests including `p6.nora.p1p2.targetedVerification.d0.test.ts`

Aucune modification étrangère hors chantier. Aucun fichier staged inattendu.

---

## 3. Sources canoniques consultées

Gouvernance Studio: convergence-build-doctrine, convergence-roadmap, product-completion C1.
Doctrine v3: 33, 34, 35, 37 (cible — Runtime v3 NON ADOPTED).
Trajectoire: `08-nora-openai-native-first-cognitive-trajectory.md`.
Product P6: `07-chat-first-product-simplification-p6-global-integrated-product-qa.md`.
CKC: `ckc/08-delivery-implementation.md` (contenu cible, pas d'autorité runtime).
Processus v2.6: cycle-execution-template, routing-guide, chatgpt-cursor-operating-model, rules-and-guardrails.
Review Handoff distant: consulté via branche `sfia/review-handoff` (publication ce cycle remplace le tip local).

Règles structurantes respectées: v3=doctrine cible; DETERMINISTIC PROVEN ≠ REAL PROVEN; Recommandation ≠ décision Morris.

---

## 4. Qualification Convergence

| Item | Qualifier |
|---|---|
| Capacité v3 (cible) | Nora peut poursuivre analyse documentaire complexe sans intervention Pilote artificielle, sans faux succès, sans perte/corruption contexte Product — **DETERMINISTIC VERIFIED AT TARGETED PRODUCT CONTINUITY SCOPE** après ce pass |
| Milestone | P6 GLOBAL INTEGRATED PRODUCT QA |
| Entrée | P0+P1+P2 locaux; 65 tests annoncés; TS OK; pas d'intégration Git projet |
| Actifs | P0 KEEP; Adaptive Budget KEEP/ADAPT; Controlled Continuation KEEP/ADAPT; RunState USE; ProductSqliteSession KEEP; Memory B KEEP; Campaign Budget KEEP |
| Trajectoire | P6-MIN-09 → P0/P1/P2 → **TV01** → ChatGPT Critical Review → Morris → Git unique → reprise P6 |
| Exit proof | Comportements Product vérifiés par tests déterministes + réserves explicites |
| Dette | Cross-restart RunState persistence **DEFER** |
| Architecture parallèle | **aucune** |

---

## 5. V01 — P1 Adaptive Budget (Product wiring)

### Résultat: PASS (après correction minimale de détection)

### Chemin prouvé
Pilot content → `inferWorkloadHintsFromUserContent` → `decideCognitiveStrategy` / `normalizeCognitiveWorkloadSignals` → `resolveAdaptiveMaxTurns` → `runNoraAgentsTurn` (sans `maxTurns` explicite) → Agents Runner + continuation.

### Observations tests
- `explicitOverride=false`
- budget ≥8 et ≤10 pour wording multi-documentaire
- plafond nominal 10
- campaign clamp conservé (régression T-campaign)
- UNKNOWN n'infle pas (régression adaptiveBudget)
- bare "document" **ne** force **pas** Deep (V01b)

### Défaut confirmé (pré-fix)
Bare word `document` pouvait élever `sourceBreadth`/`toolDependency` via regex trop large.

### Correction
`adaptiveTurnBudget.ts` — regex documentaire exige multi-doc / analyse / compare sources (pas le mot seul).

### Preuve
`p6.nora.p1p2.targetedVerification.d0.test.ts` V01 / V01b / V01c PASS.

Note: V01 exerce le wiring Product-like au seam Agents (même chaîne que `runNoraCognitiveTurn`) sans pin eval `fake-test-model` (capability manifest). Le cognitive turn Product nominal utilise la même chaîne hints→strategy→adaptive.

---

## 6. V02 — Override / FinOps boundary

### Résultat: PASS — réserve NON-BLOCKING classée

### Preuve
- `features/project-assistant/types.ts` : aucun champ `maxTurns` input Product (commentaires status only)
- `orchestrateTurn.ts` : aucun passage `maxTurns:` vers le runtime
- `resolveAdaptiveMaxTurns({ explicitMaxTurns: 12 })` → `explicitOverride=true`, `requestedMaxTurns=12` (tests/eval)
- Campaign clamp reste impératif (T-campaign / V3 documentary)

### Qualification
Un override interne tests/eval peut dépasser le plafond adaptatif nominal 10. **Ce n'est pas un bug Product.**
**Ne pas affirmer "absolute hard ceiling"** tant que l'override interne contrôlé reste techniquement autorisé.
Utilisateur Product ne peut pas fournir `maxTurns` via DTO/client.

### Correction
Aucune (frontière Product saine).

---

## 7. V03 — P2 Session continuity after RunState (CRITICAL)

### Résultat: FAIL confirmé → CORRECTED → PASS

### Défaut démontré (avant correction)
Test V03: après mission multi-segments (`continued=true`, ≥2 segments, réponse finale OK), `ProductSqliteSession.getItems().length === 0`.
Cause: `runner.run` ne recevait `session` que lorsque `typeof runInput === "string"` (premier segment). Les resumes `RunState` omettaient `options.session` → SDK `prepareSessionHistoryTransactionsForRun` n'écrit pas l'historique.

### Correction minimale
`runNoraAgentsTurn.ts` — passer `...(session ? { session } : {})` **sur chaque segment**, y compris resume RunState.
Préserve ProductSqliteSession / Memory B / P0 honesty / campaign counters. Pas de seconde SoT.

### Preuve post-fix (V03)
1. Session temp créée
2. Mission ≥7 tours, 2+ segments, RunState resume
3. Réponse finale `COMPLETE_DOC_ANALYSIS_SYNTHESIS`
4. Items persistés >0; contenu pertinent; pas de duplication runaway
5. close/reopen Session → mêmes items
6. Nouveau tour Product → items croissent; `RECALL_OK`
Cross-restart RunState: **DEFER** (hors scope).

### V03b observability
`allottedTurns === 10` (dernier plafond absolu), **≠** 15 (somme 5+10). Contrat commenté aligné.

---

## 8. Observabilité P2

| Champ | Contrat vérifié |
|---|---|
| continued | true quand resume segment exécuté |
| segmentsExecuted | ≥2 sur mission 10/seg 5 |
| missionMaxTurns | budget mission (après clamp) |
| segmentMaxTurns | 5 (legacy) |
| allottedTurns | **last absolute ceiling** (pas somme) — doc fix |
| stopReason | complete / mission_budget_exhausted / campaign_or_provider_stop / abort / … |
| reasonCodes | adaptive + clamp + continuation |

Correction: commentaire `allottedTurns` dans `controlledContinuation.ts` aligné sur le calcul.

---

## 9. P0 non-régression

Rejoué: panel incomplete UX, productStatusHonesty, T-legacy incomplete, runner R5, documentary V1.
- incomplete / limitReached honesty: PASS
- Chat-first honesty surfaces: PASS
- pas de materialization LR illégitime: PASS (T5)
- STOP ≠ incomplete: PASS (T8/T8b)
- P0-EFFECT-02 (store-level): **réserve historique NOT PROVEN store-level** — NON élargi ce cycle (pas d'impact P2 démontré supplémentaire)

---

## 10. Bugs confirmés / Corrections

| ID | Severity | Status |
|---|---|---|
| TV01-DOC-HINT | Medium | FIXED — bare "document" over-trigger |
| TV01-SESSION-RESUME | Critical | FIXED — Session omitted on RunState resume |
| TV01-ALLOTTED-DOC | Low/contract | FIXED — allottedTurns docs |
| TV01-OVERRIDE-CEILING | Info | NON-BLOCKING — eval override may exceed adaptive 10 |

---

## 11. Tests exécutés et résultats exacts

Commande régression:
```
npx vitest run \
  p6.nora.p1.adaptiveBudget.d0.test.ts \
  p6.nora.p1p2.targetedVerification.d0.test.ts \
  p6.nora.p1p2.documentary.mission.d0.test.ts \
  p6.nora.maxTurns.documentary.d0.test.ts \
  runner.d0.test.ts \
  p6.nora.p0.incomplete.panel.ux.d0.test.tsx \
  p6.nora.p0.productStatusHonesty.d0.test.ts
```

**Result: 7 files passed, 43 tests passed, 0 failed.**

Targeted verification alone: **6/6 PASS**.

TypeScript: `npx tsc -p tsconfig.json --noEmit` → **exit 0**.

`git diff --check` → clean.

---

## 12. Fake / Real Qualification

| Item | Value |
|---|---|
| Applicable | OUI |
| Frontière | OpenAI Agents Runner / Model |
| Substitution | ScriptedModel + harness déterministe |
| Parité | tours, RunState, Session, budgets, statuts |
| Différences | modèle scripté ≠ raisonnement REAL |
| Niveau entrée | DETERMINISTIC PROVEN AT COMBINED SCOPE |
| Niveau sortie | **DETERMINISTIC VERIFIED AT TARGETED PRODUCT CONTINUITY SCOPE** |
| Hors scope | REAL BOUNDARY / E2E REAL / P6 GLOBAL PASS / Runtime v3 ADOPTED |
| GO REAL | NON |

---

## 13. Diff / périmètre

### Modified (tracked)
```
M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M projects/sfia-studio/app/features/project-assistant/types.ts
M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
```

### Untracked (created this chantier incl. TV01)
```
?? adaptiveTurnBudget.ts
?? controlledContinuation.ts
?? p6.nora.p1*.test.ts / documentary / targetedVerification / maxTurns documentary
?? p6.nora.p0*.test.ts(x) (panel + productStatusHonesty + chatFirst UI)
```

### TV01 delta vs combined delivery
1. Session always passed to Runner (incl. RunState resume)
2. Document hint regex tightened
3. allottedTurns contract comment
4. New file `p6.nora.p1p2.targetedVerification.d0.test.ts`

Hors périmètre non touché: Build Doctrine, Roadmap, C1, Memory B architecture, FinOps model economics, UI redesign beyond P0, REAL.

---

## 14. Dette / réserves

| Réserve | Verdict | Blocking? | Preuve / impact |
|---|---|---|---|
| Cross-restart RunState persistence | DEFER | No (scoped) | Architecture GO futur |
| Eval maxTurns may exceed adaptive 10 | NON-BLOCKING | No | Product DTO sans maxTurns |
| P0-EFFECT-02 store-level | NOT PROVEN | No (historique) | Pas d'élargissement TV01 |
| REAL documentary quality | NOT PROVEN | N/A | GO REAL non consommé |
| Absolute hard ceiling Product+eval | NOT CLAIMED | No | Override interne contrôlé conserve |

---

## 15. Décisions Morris requises

1. **GO intégration Git unique** P0+P1+P2 (+ corrections TV01) après revue ChatGPT Critical.
2. Pas de décision architecture persistence additionnelle requise (Session-on-resume corrigé au seam existant).
3. Cross-restart RunState reste DEFER jusqu'à GO dédié.

---

## 16. Verdict pack

**TARGETED CORRECTION COMPLETE / READY FOR CHATGPT CRITICAL RE-REVIEW**

Niveau QA: DETERMINISTIC TARGETED PRODUCT PROOF.
Statut: READY FOR REVIEW (après handoff distant vérifié).
Ne pas annoncer: READY FOR PR; P6 GLOBAL PASS; REAL PROVEN; NORA COGNITIVE COMPLETION PROVEN; Runtime v3 ADOPTED.

---

## 17. Git Review Index — fichiers créés (contenu complet)

### 17.1 adaptiveTurnBudget.ts (complet)

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
  // Require multi-doc / documentary-analysis cues — bare "document" alone must NOT elevate.
  if (
    /documentary|multi[- ]?source|plusieurs\s+sources|guided\s+document|analys(?:e|er)\s+(?:plusieurs|les)\s+documents|cross[- ]?read|lire\s+(?:plusieurs|les)\s+fichiers|plusieurs\s+documents|documents\s+du\s+projet|compar(?:e|er)\s+(?:les\s+)?sources/i.test(
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

\`\`\`

### 17.2 controlledContinuation.ts (complet)

\`\`\`ts
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
  /**
   * Last absolute Runner maxTurns ceiling applied for this mission
   * (SDK maxTurns is absolute vs state._currentTurn — not a sum of segment sizes).
   */
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

\`\`\`

### 17.3 p6.nora.p1p2.targetedVerification.d0.test.ts (complet)

\`\`\`ts
/**
 * P6 Nora P1/P2 — TARGETED VERIFICATION 01 (deterministic).
 * Proof-first. ZERO REAL.
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
  inferWorkloadHintsFromUserContent,
  resolveAdaptiveMaxTurns,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
} from "@/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy";

const DOC_PATH = "projects/sfia-studio/app/package.json";
const COMPLETE_MARKER = "COMPLETE_DOC_ANALYSIS_SYNTHESIS";
const dirs: string[] = [];

function tmpDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-tv01-"));
  dirs.push(dir);
  return path.join(dir, "session.sqlite");
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function documentaryScriptNeedingSevenModelTurns() {
  return [
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r1" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r2" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r3" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r4" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r5" })],
    [functionCall("git_local_read_file", { path: DOC_PATH, maxBytes: 2048 }, { callId: "tv_r6" })],
    [assistantMessage(COMPLETE_MARKER)],
  ];
}

describe("TARGETED VERIFICATION 01 — P1 Product adaptive wiring", () => {
  it("V01 — Product-like wiring: content→strategy→adaptive (no maxTurns) completes mission", async () => {
    // Mirrors runNoraCognitiveTurn: hints → decideCognitiveStrategy → resolveAdaptiveMaxTurns
    // → runNoraAgentsTurn WITHOUT explicit maxTurns (explicitOverride=false).
    const content =
      "Analyse plusieurs documents du projet, compare les sources et produis une synthèse argumentée.";
    const hints = inferWorkloadHintsFromUserContent(content);
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ...hints,
        rigorCriticality: "medium",
        contextSize: "medium",
      }),
    });
    const adaptive = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(adaptive.explicitOverride).toBe(false);
    expect(adaptive.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(adaptive.requestedMaxTurns).toBeLessThanOrEqual(10);

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-tv01-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:tv01-p1",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const result = await runNoraAgentsTurn({
      correlationId: "tv01-p1-wiring",
      projectId: "prj:tv01-p1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: content,
      session,
      model: new ScriptedModel(documentaryScriptNeedingSevenModelTurns()),
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      // Product path: no maxTurns — adaptive decision only
      cognitiveStrategyClass: strategy.strategyClass,
      adaptiveMaxTurnsDecision: adaptive,
      enableControlledContinuation: true,
    });

    expect(result.adaptiveObserve?.explicitOverride).toBe(false);
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBe(
      adaptive.requestedMaxTurns,
    );
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    session.close();
  });

  it("V01b — bare word 'document' must NOT alone force Deep/high budget", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Please check this document briefly.",
    );
    expect(hints.sourceBreadth).not.toBe("high");
    expect(hints.toolDependency).not.toBe("high");
    const strategy = decideCognitiveStrategy({
      signals: {
        ambiguity: "unknown",
        reasoningDepth: "unknown",
        sourceBreadth: hints.sourceBreadth ?? "unknown",
        toolDependency: hints.toolDependency ?? "unknown",
        contradictionRisk: "unknown",
        contextSize: "low",
        verificationNeed: "unknown",
        multimodality: "unknown",
        latencySensitivity: "unknown",
        costBudget: "unknown",
        rigorCriticality: "medium",
      },
    });
    // Bootstrap Focused is OK; Deep from bare "document" is not.
    expect(strategy.strategyClass).not.toBe("Deep");
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(8);
  });

  it("V01c — multi-document analysis wording still elevates", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Analyse plusieurs documents et croise les sources.",
    );
    expect(hints.sourceBreadth).toBe("high");
  });
});

describe("TARGETED VERIFICATION 02 — override / FinOps boundary", () => {
  it("V02 — explicit maxTurns remains test/eval only; Product DTO has no maxTurns field", async () => {
    // Static Product boundary: send/orchestrate types do not expose maxTurns.
    const typesSrc = fs.readFileSync(
      path.join(
        process.cwd(),
        "features/project-assistant/types.ts",
      ),
      "utf8",
    );
    expect(typesSrc).not.toMatch(/maxTurns\s*[?:]/);
    const orchSrc = fs.readFileSync(
      path.join(
        process.cwd(),
        "features/project-assistant/orchestrateTurn.ts",
      ),
      "utf8",
    );
    expect(orchSrc).not.toMatch(/maxTurns\s*:/);
    // Explicit override still works for internal harness and is marked.
    const d = resolveAdaptiveMaxTurns({
      strategyClass: "Routine",
      explicitMaxTurns: 12,
    });
    expect(d.explicitOverride).toBe(true);
    expect(d.requestedMaxTurns).toBe(12);
    // Not claimed as Product absolute hard ceiling for internal eval paths.
  });
});

describe("TARGETED VERIFICATION 03 — P2 Session after RunState", () => {
  it("V03 — multi-segment mission persists history; reopen Session retains context for next turn", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-tv03-"));
    dirs.push(dir);
    const dbPath = path.join(dir, "session.sqlite");
    const projectId = "prj:tv03-session";

    const session1 = new ProductSqliteSession({
      projectId,
      dbPath,
    });
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const first = await runNoraAgentsTurn({
      correlationId: "tv03-seg",
      projectId,
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Analyse plusieurs documents du projet et produis une synthèse.",
      session: session1,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 10,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
    });

    expect(first.continuationObserve?.continued).toBe(true);
    expect(first.continuationObserve?.segmentsExecuted).toBeGreaterThanOrEqual(
      2,
    );
    expect(first.limitReached).toBe(false);
    expect(first.text).toContain(COMPLETE_MARKER);

    const itemsAfterMission = await session1.getItems();
    expect(itemsAfterMission.length).toBeGreaterThan(0);
    const serialized = JSON.stringify(itemsAfterMission);
    // User intent and completion marker should be represented in persisted history.
    expect(serialized).toMatch(/plusieurs documents|synthèse|COMPLETE_DOC/i);
    // No runaway duplication of the same user content string (>2 identical dumps).
    const userHits = (serialized.match(/Analyse plusieurs documents/g) ?? [])
      .length;
    expect(userHits).toBeLessThanOrEqual(2);

    const sessionId = await session1.getSessionId();
    session1.close();

    // Reopen same SQLite session — conversational history SoT (not RunState).
    const session2 = new ProductSqliteSession({
      projectId,
      dbPath,
    });
    expect(await session2.getSessionId()).toBe(sessionId);
    const reopened = await session2.getItems();
    expect(reopened.length).toBe(itemsAfterMission.length);
    expect(JSON.stringify(reopened)).toBe(serialized);

    const followUp = await runNoraAgentsTurn({
      correlationId: "tv03-next",
      projectId,
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Confirme que tu te souviens de la synthèse documentaire.",
      session: session2,
      model: new ScriptedModel([
        [assistantMessage("RECALL_OK — prior documentary synthesis retained.")],
      ]),
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: false,
      maxTurns: 3,
      enableControlledContinuation: false,
      cognitiveStrategyClass: "Routine",
    });
    expect(followUp.limitReached).toBe(false);
    expect(followUp.text).toMatch(/RECALL_OK/);
    const afterFollowUp = await session2.getItems();
    expect(afterFollowUp.length).toBeGreaterThan(reopened.length);
    session2.close();
  });

  it("V03b — allottedTurns is last absolute maxTurns ceiling applied (not sum)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-tv03b-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:tv03b",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const result = await runNoraAgentsTurn({
      correlationId: "tv03b",
      projectId: "prj:tv03b",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Analyse plusieurs documents.",
      session,
      model: new ScriptedModel(documentaryScriptNeedingSevenModelTurns()),
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 10,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
    });
    expect(result.continuationObserve?.continued).toBe(true);
    // Absolute ceiling raised 5 → 10; allottedTurns tracks that absolute cap.
    expect(result.continuationObserve?.allottedTurns).toBe(10);
    expect(result.continuationObserve?.allottedTurns).not.toBe(15); // not 5+10
    session.close();
  });
});

\`\`\`

---

## 18. Fichiers modifiés — sections critiques TV01

### 18.1 runNoraAgentsTurn.ts — Session on every segment (CRITICAL FIX)

\`\`\`ts
          const result = await runner.run(agent, runInput as never, {
            // KEEP Session on every segment — including RunState resume — so
            // ProductSqliteSession persists history across continuation (SDK
            // prepareSessionHistoryTransactionsForRun requires options.session).
            ...(session ? { session } : {}),
            ...(input.signal ? { signal: input.signal } : {}),
            maxTurns: absoluteCap,
            ...(atMissionCeiling
              ? {
                  errorHandlers: {
                    maxTurns: softMaxTurnsHandler,
                  },
                }
              : {}),
          });
\`\`\`

Prior defect pattern (removed):
\`...(typeof runInput === "string" && session ? { session } : {})\`

### 18.2 types.ts — continuationObserve allottedTurns field retained

\`\`\`ts
  continuationObserve?: {
    continued: boolean;
    segmentsExecuted: number;
    missionMaxTurns: number;
    segmentMaxTurns: number;
    allottedTurns: number;
    stopReason: string;
    reasonCodes: string[];
  };
\`\`\`

### 18.3 Diff stat (workspace dirty incl. P0/P1/P2 combined + TV01)

\`\`\`
 .tmp-sfia-review/chatgpt-review.md                 | 1022 +++++++++++++++++---
 .../hooks/useProductConversation.ts                |   16 +
 .../surfaces/ConversationSurface.tsx               |   23 +
 .../project-assistant/ProjectAssistantPanel.tsx    |   29 +-
 .../features/project-assistant/orchestrateTurn.ts  |   41 +-
 .../app/features/project-assistant/types.ts        |   14 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |   19 +
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  429 +++++---
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |   64 +-
 .../app/lib/nora-cognitive-runtime/types.ts        |   20 +
 10 files changed, 1394 insertions(+), 283 deletions(-)
---UNTRACKED---
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.targetedVerification.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.incomplete.panel.ux.d0.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/p6.nora.p0.productStatusHonesty.d0.test.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
\`\`\`

### 18.4 Diff name-status

\`\`\`
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
\`\`\`

---

## 19. Handoff publication (this cycle)

Publisher: \`scripts/sfia/publish-review-handoff.sh\`
Branch: \`sfia/review-handoff\`
Canonical: \`sfia-review-handoff/latest-chatgpt-review.md\`
Commit message: \`docs(review-handoff): publish Nora P1 P2 targeted verification 01\`
Project branch preserved: \`qa/p6-hqa-02-rec01-human-qa\`
Project changes: preserved (no project commit)

---

## 20. END OF REVIEW PACK
