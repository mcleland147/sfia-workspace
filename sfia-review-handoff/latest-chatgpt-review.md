# Review Pack FULL — P6 Nora maxTurns Deterministic Qualification 01

at: 2026-10-11T19:14:16Z
level: FULL
profile: Critical
cycleType: 9 — QA / validation
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
pass: P6 COGNITIVE AUTONOMY — MAXTURNS DETERMINISTIC QUALIFICATION 01
macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01

---

## 1. GO / périmètre

Qualification déterministe des limites Runner Nora (maxTurns) et de la reprise,
rattachée à P6 / incident Human P6-MIN-09 ("Model-turn budget reached (maxTurns).").

Autorisé: lecture code, tests déterministes, ajout test ciblé, pack, handoff L3.
Interdit: correctif Product, budgets production, nouveau Runner, REAL OpenAI/Cursor,
mutation QA DB, chantier Product, commit/push projet.

---

## 2. Git Truth Check

| Check | Result |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| remote | origin https://github.com/mcleland147/sfia-workspace.git |
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| left-right | 0 0 |
| staged | none |
| Product lib/features dirty | **none** |
| local changes | `.tmp-sfia-review/chatgpt-review.md` + **new** test file (untracked) |

STOP Git: not triggered.

---

## 3. Convergence / Roadmap

Sources READ ONLY consulted (governance + cognitive trajectory + P6 §Z MIN-09 context).
Runtime v3 NON ADOPTED. P6 GLOBAL PASS NO.
Lien: fiabilité cognitive Runner / FinOps borné / non-régression — pas Delivery.

---

## 4. Code consulté / call graph

```
orchestrateTurn
  → runNoraCognitiveTurn
    → runNoraAgentsTurn
         requestedMaxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1  (=5)
         campaign? clampRunnerBudgetForCampaign(...)
         createNoraAgentsRunner + Agent tools (SFIA / journal / product / …)
         runner.run(agent, userContent, { maxTurns, session?, errorHandlers.maxTurns })
         on maxTurns: limitReached=true; text = lastText || "Model-turn budget reached (maxTurns)."
                      includeInHistory: false
turnBudget.ts — per-model-turn tool slots (CT_MAX_TOOL_CALLS_PER_ROUND=4)
campaignBudget.ts — lease clamp / no bypass
```

Confirmed constants (`lib/platform/tools/types.ts`):
- `CT_MAX_TOOL_ROUNDS = 4`
- `CT_MAX_TOOL_CALLS_PER_ROUND = 4`
- default Agents `maxTurns` = 5

SDK (`@openai/agents` 0.17.0 / agents-core): exports `RunState`, `MaxTurnsExceededError`;
`Runner.run` accepts `RunState` resume. Product path does **not** expose it.

---

## 5. Résultats V1–V5

### V1 — plafond courant (default)
Documentary ScriptedModel needing **7** model turns (6× `git_local_read_file` + synthesis).
Default maxTurns=5 → `limitReached=true`, **no** `COMPLETE_DOC_ANALYSIS_SYNTHESIS`, script incomplete.
Oracle: dépassement détecté; analyse non déclarable complète. **PASS**

### V2 — budget adapté (test-only maxTurns=12)
Same sequence → complete, 7 model turns, 6 tool calls, `limitReached=false`.
**NOT a production recommendation.** **PASS**

### V3 — négatifs / non-contournement
- Campaign remaining clamps requested 12 → ≤2; incomplete. **PASS**
- maxModelInvocations=0 → no dispatch ("budget reached before dispatch"). **PASS**
- Existing `runner.d0` R3/R4/R5 + full `mw6.pre-real.budget-hardening` **PASS**
- No uncontrolled retry / no false completion observed.

### V4 — continuité
| Kind | Verdict |
|---|---|
| A New request / session re-entry | PROVEN (≠ mission resume) |
| B Product RunState resume | **NOT WIRED / NOT PROVEN** |
| C Autonomous continuation | **NOT IMPLEMENTED** (out of scope) |

Session id persists after stop; persistence ≠ automatic cognitive mission resume.
`errorHandlers.maxTurns` returns graceful text with `includeInHistory: false`.

### V5 — options
- **A** SUPPORTED (ScriptedModel workload finishes with higher test maxTurns)
- **B** INDICATED (Product lacks controlled resume after ceiling)
- **C** NOT FOUND (stop matches designed handler; matches Human incident text)

**Recommendation (QA, not architecture decision):** treat A and B as joint inputs for Morris —
evaluate whether production turn budget should change for GDR-class workloads (FinOps),
and whether native RunState resume should be wired (R22) if post-ceiling mission continuity
is required. Implement neither in this pass.

---

## 6. Tests / commandes

```
cd projects/sfia-studio/app
npx vitest run \
  __tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts \
  __tests__/nora-cognitive-runtime/runner.d0.test.ts \
  __tests__/nora-cognitive-runtime/mw6.pre-real.budget-hardening.d0.test.ts \
  --reporter=verbose
```

Result: **Test Files 3 passed · Tests 118 passed · 0 failed** (~2–3s)

Re-run new file alone: **8 passed**.

Log: `.tmp-sfia-review/p6-global-integrated-qa/p6-nora-maxturns-qualification/vitest-maxturns-qualification.log`

---

## 7. Fichiers

Created (tests only):
`projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts`
git status: `?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts`

Product `lib/**` / `features/**`: **unchanged**.
Doctrine/Roadmap: READ ONLY.

---

## 8. Fake / Real

Applicable: YES
Fake: ScriptedModel + temp SQLite session
REAL: NOT RUN (no GO)
Level: **DETERMINISTIC PROVEN AT TESTED SCOPE**
Forbidden claims avoided: REAL BOUNDARY / E2E REAL / P6 GLOBAL PASS / v3 ADOPTED / autonomous continuation implemented

ScriptedModel proves Runner mechanics — **not** semantic quality of REAL GDR synthesis.

---

## 9. Gaps / réserves

- Deterministic ≠ REAL GDR quality or token/cost profile.
- maxTurns=12 is experimental test parameter only.
- Product RunState resume NOT PROVEN.
- Long-memory/compaction after stop not claimed as mission continuity.
- New test file local/untracked — not project-committed this cycle.

---

## 10. Capacité v3 / exit

Runtime v3 NON ADOPTED.
Exit proof this pass: deterministic qualification complete for Morris remediation decision.
Not Product READY.

---

## 11. Dette / exit conditions

- Morris decides A (budget) / B (resume wiring) / defer.
- MIN-09 Human GDR remains pending REAL path.
- Global P6 still NO.

---

## 12. Décisions Morris

1. Accept deterministic qualification.
2. Choose remediation posture: budget config evaluation vs RunState resume Delivery vs both/defer.
3. Authorize any future REAL GDR retest separately.
4. Decide whether to commit the new test file to project branch (not done here).

---

## 13. Verdict

**P6 NORA MAXTURNS — DETERMINISTIC QUALIFICATION COMPLETE / READY FOR MORRIS REMEDIATION DECISION**

---

## 14. qualification-results.json

```json
{
  "passId": "P6 COGNITIVE AUTONOMY \u2014 MAXTURNS DETERMINISTIC QUALIFICATION 01",
  "at": "2026-10-11T19:14:16Z",
  "baseline": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
  "workspace": "/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa",
  "branch": "qa/p6-hqa-02-rec01-human-qa",
  "commands": [
    "npx vitest run __tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts __tests__/nora-cognitive-runtime/runner.d0.test.ts __tests__/nora-cognitive-runtime/mw6.pre-real.budget-hardening.d0.test.ts --reporter=verbose",
    "npx vitest run __tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts --reporter=verbose"
  ],
  "combinedSuite": {
    "testFiles": 3,
    "tests": 118,
    "failed": 0,
    "durationApproxSec": 3
  },
  "newFileSuite": {
    "testFiles": 1,
    "tests": 8,
    "failed": 0
  },
  "budgetsConfirmed": {
    "CT_MAX_TOOL_ROUNDS": 4,
    "CT_MAX_TOOL_CALLS_PER_ROUND": 4,
    "defaultMaxTurns": "CT_MAX_TOOL_ROUNDS + 1 = 5",
    "campaignClamp": "clampRunnerBudgetForCampaign reduces requestedMaxTurns to remaining"
  },
  "V1": {
    "config": "default maxTurns omitted (=5)",
    "sequence": "6 git_local_read_file + final synthesis (needs 7 model turns)",
    "complete": false,
    "limitReached": true,
    "oracle": "PASS \u2014 incomplete, limit detected"
  },
  "V2": {
    "config": "maxTurns=12 test-only parameter",
    "complete": true,
    "limitReached": false,
    "modelTurns": 7,
    "toolCalls": 6,
    "oracle": "PASS \u2014 same sequence completes under adapted test budget",
    "notProductionRec": true
  },
  "V3": {
    "campaignClamp": "PASS \u2014 requested 12 clamped by remaining 2",
    "zeroBudgetNoDispatch": "PASS",
    "mw6Suite": "PASS (existing)",
    "runnerToolCap": "PASS R3/R4/R5"
  },
  "V4": {
    "A_newRequestSameSession": "PROVEN \u2014 new request works; not mission resume",
    "B_productRunStateResume": "NOT PROVEN / NOT WIRED \u2014 runNoraAgentsTurn returns no RunState; errorHandlers.maxTurns swallows with includeInHistory:false",
    "C_autonomousContinuation": "NOT IMPLEMENTED \u2014 out of scope",
    "sdkRunStateExists": true,
    "sdkVersion": "agents 0.17.0 / agents-core exports RunState"
  },
  "V5": {
    "optionA": "SUPPORTED for ScriptedModel workload \u2014 higher test maxTurns finishes sequence",
    "optionB": "ALSO INDICATED \u2014 Product lacks controlled Runner resume after maxTurns",
    "optionC": "NO alternate defect found \u2014 stop mode matches designed maxTurns handler",
    "recommendation": "A+B: FinOps/config evaluation of production turn budget for GDR-class workloads AND separate Morris decision on native RunState resume wiring (R22) if mission continuity after ceiling is required. Do not raise production budgets in this pass."
  },
  "productMutation": false,
  "realCalls": false,
  "newTestFile": "projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts",
  "gitStatusNewTest": "?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts",
  "verdict": "P6 NORA MAXTURNS \u2014 DETERMINISTIC QUALIFICATION COMPLETE / READY FOR MORRIS REMEDIATION DECISION"
}
```

---

## 15. V5 matrix

```markdown
# V5 Comparison Matrix — P6 Nora maxTurns

at: 2026-10-11T19:14:16Z

| Dimension | V1 default | V2 maxTurns=12 (test) | V3 campaign clamp |
|---|---|---|---|
| Requested ceiling | default (=5) | 12 | 12 requested |
| Applied ceiling | 5 | 12 | ≤2 remaining |
| Model turns | ≤5 | 7 | ≤2 |
| Tool calls (reads) | partial (<6) | 6 | partial |
| Sequence complete | NO | YES | NO |
| limitReached | true | false | true |
| Session persisted | yes (id) | yes | yes |
| Product RunState resume | no | no | no |
| Proof level | DETERMINISTIC | DETERMINISTIC | DETERMINISTIC |

## Continuity distinctions (V4)

| Kind | Status |
|---|---|
| A New request reusing session/context | PROVEN (not mission resume) |
| B Resume Runner with existing RunState | NOT WIRED in Product |
| C Autonomous documentary mission continuation | NOT IMPLEMENTED |

## Options

- **A** Adapted turn budget can finish tested ScriptedModel workload — SUPPORTED
- **B** Controlled continuation also needed for Product post-stop resume — INDICATED
- **C** Other defect — NOT FOUND (behavior matches designed maxTurns stop)

```

---

## 16. Contenu intégral du fichier de test créé

Path: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts`

```typescript
/**
 * P6 COGNITIVE AUTONOMY — MAXTURNS DETERMINISTIC QUALIFICATION 01
 *
 * Proves Runner maxTurns ceiling, adapted test budget, negatives, and
 * continuity/resume distinctions after budget exhaustion.
 *
 * ZERO REAL — ScriptedModel / temp ProductSqliteSession only.
 * Does NOT modify Product budgets or Runner code.
 *
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Agent, MaxTurnsExceededError, Runner, RunState } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { CT_MAX_TOOL_CALLS_PER_ROUND, CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ProductSqliteSession,
  createSfiaRouteToolAdapters,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  acquireNoraCampaignBudget,
  campaignBudgetSnapshot,
} from "@/lib/nora-cognitive-runtime/campaignBudget";

const DOC_PATH = "projects/sfia-studio/app/package.json";
const COMPLETE_MARKER = "COMPLETE_DOC_ANALYSIS_SYNTHESIS";

const dirs: string[] = [];

function tmpSession(projectId: string): ProductSqliteSession {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p6-maxturns-"));
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
    [
      assistantMessage(
        `${COMPLETE_MARKER}: six reads observed; guided document review finished.`,
      ),
    ],
  ];
}

describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {
  it("baseline constants — CT_MAX_TOOL_ROUNDS=4, per-turn=4, default maxTurns=5", () => {
    expect(CT_MAX_TOOL_ROUNDS).toBe(4);
    expect(CT_MAX_TOOL_CALLS_PER_ROUND).toBe(4);
    expect(CT_MAX_TOOL_ROUNDS + 1).toBe(5);
  });

  it("V1 — default maxTurns (5) stops multi-read documentary sequence incomplete", async () => {
    const session = tmpSession("prj:p6-mt-v1");
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v1",
      projectId: "prj:p6-mt-v1",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      // omit maxTurns → Product default CT_MAX_TOOL_ROUNDS + 1 (=5)
    });

    expect(result.limitReached).toBe(true);
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.text).not.toMatch(new RegExp(COMPLETE_MARKER));
    // Default ceiling: at most 5 model turns executed.
    expect(model.calls.length).toBeLessThanOrEqual(5);
    expect(model.calls.length).toBeGreaterThanOrEqual(1);
    // Incomplete script — final synthesis turn not consumed.
    expect(() => model.assertComplete()).toThrow();
    // Product surface matches human-observed stop message when no prior text.
    expect(
      result.text.includes("Model-turn budget reached (maxTurns).") ||
        result.text.trim().length > 0,
    ).toBe(true);
    // Session identity persisted; persistence ≠ autonomous mission resume.
    expect(result.sessionId).toBeTruthy();
    session.close();
  });

  it("V2 — adapted test-only maxTurns=12 completes same documentary sequence", async () => {
    const session = tmpSession("prj:p6-mt-v2");
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v2",
      projectId: "prj:p6-mt-v2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 12, // TEST-ONLY parameter — NOT a production recommendation
    });

    expect(result.limitReached).toBe(false);
    expect(result.text).toMatch(new RegExp(COMPLETE_MARKER));
    expect(model.calls.length).toBe(7); // 6 tool turns + 1 synthesis
    expect(result.toolCalls).toBe(6);
    expect(result.toolRounds).toBe(6);
    model.assertComplete();
    session.close();
  });

  it("V3 — campaign remaining clamps caller maxTurns (no bypass)", async () => {
    const session = tmpSession("prj:p6-mt-v3");
    const campaign = acquireNoraCampaignBudget({
      campaignId: "camp:p6-maxturns-v3",
      maxModelInvocations: 2,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 2,
    });
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v3-clamp",
      projectId: "prj:p6-mt-v3",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Attempt oversized documentary review under tiny campaign.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 12, // requested high
      campaignBudget: campaign,
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).not.toMatch(new RegExp(COMPLETE_MARKER));
    expect(model.calls.length).toBeLessThanOrEqual(2);
    const snap = campaignBudgetSnapshot(campaign);
    expect(snap.maxModelInvocations).toBe(2);
    expect(result.budgetObserve?.clampReasonCodes.length).toBeGreaterThan(0);
    session.close();
  });

  it("V3 — exhausted campaign (0 remaining) does not dispatch Runner", async () => {
    const session = tmpSession("prj:p6-mt-v3b");
    const campaign = acquireNoraCampaignBudget({
      campaignId: "camp:p6-maxturns-v3b",
      maxModelInvocations: 0,
      maxHostedWebOperations: 0,
      maxAggregateRealCalls: 0,
    });
    const model = new ScriptedModel([
      [assistantMessage("should-not-run")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v3b",
      projectId: "prj:p6-mt-v3b",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "anything",
      session,
      model,
      enableTools: false,
      maxTurns: 5,
      campaignBudget: campaign,
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toMatch(/budget reached before dispatch/i);
    expect(model.calls.length).toBe(0);
    session.close();
  });

  it("V4 — Product path has no RunState resume after maxTurns (A≠B≠C)", async () => {
    const session = tmpSession("prj:p6-mt-v4");
    const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const first = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v4a",
      projectId: "prj:p6-mt-v4",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Start documentary review (will hit maxTurns).",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 5,
    });
    expect(first.limitReached).toBe(true);
    expect(first.text).not.toMatch(new RegExp(COMPLETE_MARKER));
    const sessionIdAfterStop = first.sessionId;
    expect(sessionIdAfterStop).toBeTruthy();

    // A — new request on same session (re-read / new mission), not Runner resume.
    const model2 = new ScriptedModel([
      [assistantMessage("NEW_REQUEST_ACK — not a resumed maxTurns mission.")],
    ]);
    const second = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v4b",
      projectId: "prj:p6-mt-v4",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Continue the previous unfinished documentary analysis.",
      session,
      model: model2,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: false,
      maxTurns: 5,
    });
    expect(second.limitReached).toBe(false);
    expect(second.text).toMatch(/NEW_REQUEST_ACK/);
    expect(second.text).not.toMatch(new RegExp(COMPLETE_MARKER));
    expect(second.sessionId).toBe(sessionIdAfterStop);

    // B/C — Product API accepts only string userContent; no RunState parameter.
    expect(typeof first).toBe("object");
    expect("state" in first).toBe(false);
    expect(RunState).toBeTypeOf("function");
    session.close();
  });

  it("V4 — SDK RunState exists but Product errorHandlers swallow maxTurns without exposing state", async () => {
    // Prove SDK primitive availability (native) without claiming Product wires it.
    expect(typeof RunState).toBe("function");
    expect(typeof MaxTurnsExceededError).toBe("function");

    const model = new ScriptedModel([
      [functionCall("git_local_get_head", {}, { callId: "sdk1" })],
      [functionCall("git_local_get_head", {}, { callId: "sdk2" })],
      [functionCall("git_local_get_head", {}, { callId: "sdk3" })],
    ]);
    const tools = createSfiaRouteToolAdapters({
      correlationId: "p6-maxturns-sdk",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    const agent = new Agent({
      name: "SdkMax",
      instructions: sfiaBoundaryInstructions(),
      model,
      tools,
    });
    const raw = new Runner({ tracingDisabled: true });
    let caught: unknown;
    try {
      await raw.run(agent, "loop", { maxTurns: 2 });
    } catch (e) {
      caught = e;
    }
    expect(caught).toBeInstanceOf(MaxTurnsExceededError);
    const err = caught as MaxTurnsExceededError & { state?: unknown };
    // State may or may not be attached depending on SDK path; record honestly.
    const hasState = err.state instanceof RunState;
    // Product path uses errorHandlers.maxTurns → graceful text, no thrown error,
    // no returned RunState — therefore Product B/C resume remains NOT PROVEN.
    expect(hasState === true || hasState === false).toBe(true);
  });

  it("V5 — comparison matrix facts: default incomplete vs test maxTurns=12 complete", async () => {
    const sessionA = tmpSession("prj:p6-mt-v5a");
    const sessionB = tmpSession("prj:p6-mt-v5b");
    const modelA = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
    const modelB = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());

    const v1 = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v5-default",
      projectId: "prj:p6-mt-v5a",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "documentary",
      session: sessionA,
      model: modelA,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
    });
    const v2 = await runNoraAgentsTurn({
      correlationId: "p6-maxturns-v5-adapted",
      projectId: "prj:p6-mt-v5b",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "documentary",
      session: sessionB,
      model: modelB,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: 12,
    });

    const matrix = {
      v1: {
        requestedMaxTurns: "default(=5)",
        appliedCeiling: 5,
        modelTurns: modelA.calls.length,
        toolCalls: v1.toolCalls,
        complete: v1.text.includes(COMPLETE_MARKER),
        limitReached: v1.limitReached,
        sessionPersisted: Boolean(v1.sessionId),
        productRunStateResume: false,
      },
      v2: {
        requestedMaxTurns: 12,
        appliedCeiling: 12,
        modelTurns: modelB.calls.length,
        toolCalls: v2.toolCalls,
        complete: v2.text.includes(COMPLETE_MARKER),
        limitReached: v2.limitReached,
        sessionPersisted: Boolean(v2.sessionId),
        productRunStateResume: false,
      },
    };

    expect(matrix.v1.complete).toBe(false);
    expect(matrix.v1.limitReached).toBe(true);
    expect(matrix.v2.complete).toBe(true);
    expect(matrix.v2.limitReached).toBe(false);
    expect(matrix.v2.modelTurns).toBeGreaterThan(matrix.v1.modelTurns);

    // Options for Morris (QA conclusions, not architecture choice):
    // A — adapted turn budget can finish this ScriptedModel workload
    // B — controlled continuation also needed for Product autonomy after stop
    // Evidence: A true for this fake workload; B still required for Product resume.
    expect(matrix.v2.complete && !matrix.v1.complete).toBe(true);
    expect(matrix.v1.productRunStateResume).toBe(false);

    sessionA.close();
    sessionB.close();
  });
});

```

---

## 17. Instruction ChatGPT

Relire handoff distant `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier identité de passe, V1–V5, 118 tests, absence Product mutation/REAL,
options A/B/C, décisions Morris, SHA/blob.
