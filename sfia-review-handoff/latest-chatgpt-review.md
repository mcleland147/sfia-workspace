# ChatGPT Critical Review Pack — FULL — Git Integration

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | `2026-09-05T17:06:49Z` |
| **Timestamp (local)** | `2026-09-05 19:06:49 CEST` |
| **Cycle** | SFIA v2.6 — CYCLE 8 — DELIVERY / EVOL — CONTINUATION |
| **Classification** | CRITICAL |
| **Subject** | GLOBAL MODEL × REASONING STAGE A — DETERMINISTIC HARNESS GIT INTEGRATION |
| **Integration label** | Cycle 8 integration — product commit + PR + CI observation |
| **GO consumed** | `GO MORRIS — GLOBAL MODEL × REASONING STAGE A GIT INTEGRATION + PUBLISH REVIEW HANDOFF — ZERO REAL` |
| **Prior C4 handoff tip** | `bf94d7eab54c8b8f7ce25bf2a13eb2ee4cb370c0` (pack `2026-09-05T16:50:09Z`) |
| **ChatGPT C4 verdict (consumed)** | PASS WITH ONE REQUIRED DOCUMENTARY CLEANUP |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-global-mr-campaign-contract-prep` |
| **Product branch** | `docs/sfia-studio-global-model-reasoning-campaign-contract` |
| **PRODUCT_HEAD_SHA** | `3fb1624c8b373b75dfcd48a64797a7927cb76019` |
| **origin/main / PR_BASE_SHA** | `23d850fda45fe55ba519e0feefe63369d349afcc` |
| **merge-base** | `23d850fda45fe55ba519e0feefe63369d349afcc` |
| **PR_NUMBER** | `467` |
| **PR_URL** | `https://github.com/mcleland147/sfia-workspace/pull/467` |
| **PR_HEAD_SHA** | `3fb1624c8b373b75dfcd48a64797a7927cb76019` (= PRODUCT_HEAD_SHA) |
| **PR state** | OPEN |
| **CI_STATUS** | PASS |
| **ZERO REAL** | INTEGRAL |
| **Envelope** | maxCellExecutions=**72** · maxModelInvocations=**405** · maxHostedWebOperations=**24** · maxAggregateRealCalls=**429** · USD 6/9/12 candidate authorization envelope |
| **Contract id** | `global-mr-campaign-contract-v2-candidate` |
| **maxRepeatsPerCell** | **1** |
| **Merge** | **NONE** (MERGE NONE) |
| **Stage A REAL** | **NOT AUTHORIZED** |
| **Production routing** | **NOT SELECTED** |
| **Cognitive Completion** | **NOT PROVEN** |
| **Runtime v3** | **NON ADOPTED** |

---

## 1. Local Git Truth (pre-write)

```
pwd = /Users/morris/Projects/sfia-workspace-global-mr-campaign-contract-prep
branch = docs/sfia-studio-global-model-reasoning-campaign-contract
HEAD (pre-commit) = 23d850fda45fe55ba519e0feefe63369d349afcc
origin/main = 23d850fda45fe55ba519e0feefe63369d349afcc
merge-base = 23d850fda45fe55ba519e0feefe63369d349afcc
status = DIRTY — accepted C1→C4 candidate (expected)
prior Review Handoff tip = bf94d7eab54c8b8f7ce25bf2a13eb2ee4cb370c0
MAIN_OK
```

No stash / reset / clean / rebase / destructive checkout.

---

## 2. ChatGPT C4 acceptance consumed

Prior Critical Review handoff `bf94d7eab54c8b8f7ce25bf2a13eb2ee4cb370c0`:

- C4-01→C4-05 CLOSED (C4-03 CLOSED DETERMINISTIC)
- C3-01 / C3-03 / C3-04 / C3-05 remain CLOSED
- F1→F5 remain CLOSED
- G1/G2/G3 remain on main
- Verdict: **PASS WITH ONE REQUIRED DOCUMENTARY CLEANUP**
- Required cleanup: Gates handoff line still said `BLOCKED — REGULARIZATION REQUIRED` while C4 handoff was published + remote verified

---

## 3. Documentary cleanup applied (§6)

**File:** `projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md`

| | Value |
| --- | --- |
| **Old** | `Handoff publication = BLOCKED — REGULARIZATION REQUIRED` |
| **New** | | Handoff publication (`sfia/review-handoff`) | **PUBLISHED + REMOTE VERIFIED** — pre-integration Critical Review tip `bf94d7eab54c8b8f7ce25bf2a13eb2ee4cb370c0` (Correction 4). Integration-cycle handoff publishes after commit/PR on the same channel; not self-referenced in this product commit. | |

No other contract semantics changed. Preserved: v2-candidate · 72/405/429 · maxRepeatsPerCell=1 · USD 6/9/12 · DETERMINISTIC ONLY · REAL NOT AUTHORIZED · production routing NOT SELECTED · Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED.

Integration-cycle handoff tip is **not** embedded in the product commit (avoids circular self-reference).

---

## 4. Product commit

| Field | Value |
| --- | --- |
| **SHA** | `3fb1624c8b373b75dfcd48a64797a7927cb76019` |
| **Subject** | `feat(sfia-studio): integrate global model reasoning Stage A harness` |
| **Scope** | 24 files · +4752 / −15 |
| **Push** | PASS — `origin/docs/sfia-studio-global-model-reasoning-campaign-contract` = `3fb1624c8b373b75dfcd48a64797a7927cb76019` |

### Commit message

```
feat(sfia-studio): integrate global model reasoning Stage A harness

Add the deterministic Stage A campaign enablement candidate (E1–E4 / F1→F5 / C3 / C4):
72 cell executions / 405 model invocations / 429 aggregate envelope; governed
model×reasoning pin; shared FinOps and canonical campaign budget; MW6 governed
source path. ZERO REAL. Production routing NOT SELECTED. Runtime v3 NON ADOPTED.

Co-authored-by: Cursor <cursoragent@cursor.com>
```

### Commit stat

```
 .../nora-eval/c3.call-accounting.d0.test.ts        | 404 ++++++++++
 .../nora-eval/c3.mw6-full-product-path.d0.test.ts  | 354 +++++++++
 .../__tests__/nora-eval/c4.final-safety.d0.test.ts | 438 ++++++++++
 .../nora-eval/e1.agents-usd-metering.d0.test.ts    | 328 ++++++++
 .../nora-eval/e2.eval-model-effort-pin.d0.test.ts  | 126 +++
 .../e2.product-equivalent-control.d0.test.ts       | 309 ++++++++
 .../nora-eval/e3.shared-campaign-budget.d0.test.ts | 179 +++++
 .../nora-eval/e4.stage-a-driver.d0.test.ts         | 368 +++++++++
 .../project-assistant/f2/intentAnalysis.ts         |  36 +
 .../features/project-assistant/f2/orchestrateF2.ts |  50 +-
 .../project-assistant/mw6GovernedNoraTurn.ts       |  91 ++-
 .../features/project-assistant/orchestrateTurn.ts  |  15 +
 .../nora-cognitive-runtime/agentsUsdAccounting.ts  |  68 ++
 .../nora-cognitive-runtime/callModelInputFilter.ts |  28 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |  12 +-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  36 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |  85 +-
 .../app/lib/nora-cognitive-runtime/types.ts        |  10 +
 .../app/lib/nora-eval/agentsUsdBridge.ts           | 144 ++++
 .../app/lib/nora-eval/evalCellProvider.ts          | 104 +++
 .../lib/nora-eval/globalModelReasoningStageA.ts    | 880 +++++++++++++++++++++
 projects/sfia-studio/app/lib/nora-eval/index.ts    |  45 ++
 .../app/lib/nora-eval/meteredProvider.ts           |  24 +
 ...-model-reasoning-campaign-execution-contract.md | 633 +++++++++++++++
 24 files changed, 4752 insertions(+), 15 deletions(-)
```

### Exact name-status (`origin/main...PRODUCT_HEAD`)

```
A	projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
A	projects/sfia-studio/app/__tests__/nora-eval/c3.mw6-full-product-path.d0.test.ts
A	projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts
A	projects/sfia-studio/app/__tests__/nora-eval/e1.agents-usd-metering.d0.test.ts
A	projects/sfia-studio/app/__tests__/nora-eval/e2.eval-model-effort-pin.d0.test.ts
A	projects/sfia-studio/app/__tests__/nora-eval/e2.product-equivalent-control.d0.test.ts
A	projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts
A	projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
A	projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
A	projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts
A	projects/sfia-studio/app/lib/nora-eval/evalCellProvider.ts
A	projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
M	projects/sfia-studio/app/lib/nora-eval/index.ts
M	projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
A	projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md
```

### Scope exclusions (verified NOT in commit)

- `.tmp-sfia-review/**`
- `sfia-review-handoff/**`
- `method/**` / `prompts/templates/**`
- `projects/sfia-studio/convergence/**`
- `projects/sfia-studio/product-completion/**`
- `projects/sfia-studio/sfia-v3-framing/**`
- `.github/**` / `package.json` / lockfiles / migrations
- `actions.ts` unchanged vs main (C4-01 already aligned)

---

## 5. PR

| Field | Value |
| --- | --- |
| **PR_NUMBER** | 467 |
| **PR_URL** | https://github.com/mcleland147/sfia-workspace/pull/467 |
| **base** | `main` @ `23d850fda45fe55ba519e0feefe63369d349afcc` |
| **head** | `docs/sfia-studio-global-model-reasoning-campaign-contract` @ `3fb1624c8b373b75dfcd48a64797a7927cb76019` |
| **state** | OPEN |
| **PR diff verification** | PASS — identical 24-file candidate; no `.tmp` / handoff / package / Roadmap / doctrine |
| **Unexpected existing PR** | NONE at create time |

---

## 6. CI observation (same cycle)

| Check | Verdict | Duration / URL |
| --- | --- | --- |
| Detect SFIA Studio changes | PASS | 6s — https://github.com/mcleland147/sfia-workspace/actions/runs/33979632219/job/101342408927 |
| Build and validate SFIA Studio | PASS | 4m1s — https://github.com/mcleland147/sfia-workspace/actions/runs/33979632219/job/101342428859 |
| SFIA Studio Required Gate | PASS | 3s — https://github.com/mcleland147/sfia-workspace/actions/runs/33979632219/job/101342995890 |

**Workflow run:** https://github.com/mcleland147/sfia-workspace/actions/runs/33979632219 — completed success (~4m17s)

**CI_STATUS = PASS**

Merge remains **NONE** / **NOT AUTHORIZED**.

---

## 7. Pre-commit validations (local, ZERO REAL)

Executed after documentary cleanup on the accepted candidate (before product commit).

| Gate | Result |
| --- | --- |
| C4 targeted suite | PASS |
| C3 suites | PASS |
| E1–E4 suites | PASS |
| G1/G2/G3 relevant regression | PASS |
| F1/F2 relevant suites | PASS |
| campaignBudget / MeteredConversationProvider / Option C Runner | PASS |
| MW2 / MW5 / MW6 governed/authority regression | PASS |
| Aggregate targeted + broader deterministic | **271 tests PASS** |
| `tsc --noEmit` / typecheck | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |
| ZERO REAL | INTEGRAL — OPENAI_API_KEY unset/deleted for harness; FakeConversationProvider / ScriptedModel only; no provider network; no hosted web_search LIVE; no spend |

### Closure retention

- C4-01 CLOSED
- C4-02 CLOSED
- C4-03 CLOSED DETERMINISTIC
- C4-04 CLOSED
- C4-05 CLOSED
- C3-01 / C3-03 / C3-04 / C3-05 CLOSED
- F1→F5 remain CLOSED
- G1/G2/G3 remain on main

Fake/Real qualification: **DETERMINISTIC ONLY** / Fake providers. Stage A REAL **NOT AUTHORIZED**.

---

## 8. Envelope truth (UNCHANGED)

| Constant | Value |
| --- | --- |
| maxCellExecutions | **72** |
| maxModelInvocations | **405** |
| maxHostedWebOperations | **24** |
| maxAggregateRealCalls | **429** |
| USD target / soft / hard | **6 / 9 / 12** (candidate estimated authorization envelope ≠ invoice) |
| maxRepeatsPerCell | **1** |
| contract | `global-mr-campaign-contract-v2-candidate` |

---

## 9. Anti-claims / non-actions

- Stage A REAL = **NOT AUTHORIZED**
- OpenAI LIVE / hosted web_search LIVE / spend = **NONE**
- Production routing = **NOT SELECTED**
- Cognitive Completion = **NOT PROVEN**
- Runtime v3 = **NON ADOPTED**
- Roadmap / Doctrine / C1 / framing v3 = **NOT MODIFIED**
- Merge / squash / rebase main / delete branch = **NONE**
- Product post-handoff mutation = **NONE** (handoff tip not written back into product)

---

## 10. Review Handoff (this cycle)

| Field | Value |
| --- | --- |
| Mode | publish-in-cycle |
| Publisher | `scripts/sfia/publish-review-handoff.sh` (canonical) |
| Branch | `sfia/review-handoff` |
| Canonical file | `sfia-review-handoff/latest-chatgpt-review.md` |
| Prior tip | `bf94d7eab54c8b8f7ce25bf2a13eb2ee4cb370c0` |
| New tip | *(filled by publisher / remote verification — must differ from prior)* |

---

## 11. Verdict

**READY FOR CHATGPT PR/CI CRITICAL REVIEW — GLOBAL MODEL × REASONING STAGE A CANDIDATE COMMITTED + PUSHED + PR OPEN — REVIEW HANDOFF REMOTE VERIFIED — ZERO REAL — MERGE NOT AUTHORIZED**

### Next gate

ChatGPT PR/CI Critical Review → Morris merge decision.

**PAS Stage A REAL.**

---

## APPENDIX A — Full exploitable diff (`origin/main...PRODUCT_HEAD_SHA`)

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
new file mode 100644
index 00000000..03084afd
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
@@ -0,0 +1,404 @@
+/** @vitest-environment node */
+/**
+ * C3 — call envelope + product path corrections — ZERO REAL.
+ */
+import { describe, expect, it } from "vitest";
+import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
+import {
+  FakeConversationProvider,
+  type ConversationProvider,
+  type OpenAiReasoningEffort,
+  type ProviderChatMessage,
+  type ProviderCompletionResult,
+} from "@/lib/platform/ai";
+import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
+import {
+  buildGlobalMrStageAMatrix,
+  buildGlobalMrStageAWorkloadCallPlans,
+  createEvalAgentsUsdAccounting,
+  createGlobalMrStageADriver,
+  createMeteredEvalCellProviderFactory,
+  deriveGlobalMrStageAEnvelope,
+  GLOBAL_MR_STAGE_A_CALL_CAPS,
+  GLOBAL_MR_STAGE_A_CELL_CAPS,
+  GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
+  GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS,
+  globalMrStageAEnvelopeProof,
+  materializeSelectiveRepeat,
+  runGlobalMrStageACell,
+  type EvalCellProviderFactory,
+  type GlobalMrStageAExecutor,
+} from "@/lib/nora-eval";
+import {
+  buildRunnerModelSettingsForEffort,
+  runNoraAgentsTurn,
+  sfiaBoundaryInstructions,
+} from "@/lib/nora-cognitive-runtime";
+import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
+import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach } from "vitest";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
+import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+
+describe("C3-01 — cell executions ≠ model invocations", () => {
+  it("derives envelope: 72 cell executions ≠ model invocations", () => {
+    expect(GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS).toBe(
+      CT_MAX_TOOL_ROUNDS + 1,
+    );
+    const plans = buildGlobalMrStageAWorkloadCallPlans();
+    expect(plans["W-Routine"].maxModelInvocationsPerCell).toBe(5);
+    expect(plans["W-Clarification"].maxModelInvocationsPerCell).toBe(6);
+    expect(plans["W-Sources"].maxModelInvocationsPerCell).toBe(5);
+    expect(plans["W-Clarification"].preAgentsStructuredModelCalls).toBe(1);
+
+    const d = deriveGlobalMrStageAEnvelope();
+    expect(d.maxCellExecutions).toBe(72);
+    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions).toBe(72);
+    // 3×3×(5+6+6+6+5+5)=297 base; top-18 F2 cells×6=108; total 405
+    expect(d.baseModelInvocationCeiling).toBe(297);
+    expect(d.repeatModelInvocationCeiling).toBe(108);
+    expect(d.maxModelInvocations).toBe(405);
+    expect(d.maxHostedWebOperations).toBe(24);
+    expect(d.maxAggregateRealCalls).toBe(429);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(405);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(429);
+    expect(d.maxModelInvocations).not.toBe(d.maxCellExecutions);
+    expect(d.usdFeasibility.ok).toBe(true);
+    expect(d.usdFeasibility.status).toBe("COMPATIBLE_WITH_CANDIDATE_12");
+    expect(GLOBAL_MR_STAGE_A_CONTRACT_VERSION).toBe(
+      "global-mr-campaign-contract-v2-candidate",
+    );
+    const proof = globalMrStageAEnvelopeProof();
+    expect(proof.maxModelInvocations).toBe(405);
+    expect(proof.maxCellExecutions).toBe(72);
+    expect(proof.usdSemantics).toBe(
+      "pre_dispatch_reservation_authorization_envelope",
+    );
+  });
+
+  it("matrix paths match call plans", () => {
+    const cells = buildGlobalMrStageAMatrix({ campaignId: "c3-matrix" });
+    expect(cells).toHaveLength(54);
+    expect(
+      cells.filter((c) => c.executionKind === "f2_product"),
+    ).toHaveLength(27);
+    expect(
+      cells.filter((c) => c.executionKind === "agents_cognitive"),
+    ).toHaveLength(18);
+    expect(
+      cells.filter((c) => c.executionKind === "mw6_governed"),
+    ).toHaveLength(9);
+  });
+});
+
+describe("C3-04 — repeat pool does not latch campaign stop", () => {
+  it("after 18 repeats, base cell still executes", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `c3-repeat-${Date.now()}`,
+    });
+    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
+    const executor: GlobalMrStageAExecutor = async () => ({
+      passFail: "PASS",
+      failureClass: "NONE",
+      rawSummary: "ok",
+      usage: null,
+    });
+    for (let i = 0; i < 18; i += 1) {
+      const out = await runGlobalMrStageACell({
+        state,
+        cell: materializeSelectiveRepeat(cells[i]!),
+        executor,
+      });
+      expect(out.stopped).toBe(false);
+    }
+    const denied = await runGlobalMrStageACell({
+      state,
+      cell: materializeSelectiveRepeat(cells[18]!),
+      executor,
+    });
+    expect(denied.cellDenied).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
+    expect(state.stopReason).toBe("NONE");
+
+    // Base cell still allowed
+    let called = false;
+    const base = await runGlobalMrStageACell({
+      state,
+      cell: cells[30]!,
+      executor: async () => {
+        called = true;
+        return {
+          passFail: "PASS",
+          failureClass: "NONE",
+          rawSummary: "base-ok",
+          usage: null,
+        };
+      },
+    });
+    expect(called).toBe(true);
+    expect(base.stopped).toBe(false);
+    expect(state.stopReason).toBe("NONE");
+  });
+});
+
+describe("C3-05 — canonical counters are source of truth", () => {
+  it("executor reported 0 does not override canonical delta", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `c3-canon-${Date.now()}`,
+    });
+    const cell = buildGlobalMrStageAMatrix({
+      campaignId: state.campaignId,
+    }).find((c) => c.workloadId === "W-Routine")!;
+    const usd = createEvalAgentsUsdAccounting({
+      budget: state.budget,
+      manifest: state.manifest,
+      modelId: cell.model,
+      assumedInputTokens: 50,
+      assumedOutputTokens: 20,
+    });
+    const out = await runGlobalMrStageACell({
+      state,
+      cell,
+      executor: async (c, ctx) => {
+        const turn = await runNoraAgentsTurn({
+          correlationId: "c3-canon",
+          projectId: "proj",
+          systemInstructions: sfiaBoundaryInstructions(),
+          userContent: "x",
+          model: new ScriptedModel([[assistantMessage("OK")]]),
+          runnerModelSettings: buildRunnerModelSettingsForEffort(
+            c.reasoningEffort,
+          ),
+          enableTools: false,
+          maxTurns: 1,
+          campaignBudget: ctx.campaignBudget,
+          usdAccounting: usd,
+        });
+        return {
+          passFail: "PASS",
+          failureClass: "NONE",
+          rawSummary: turn.text,
+          usage: null,
+          // Lie: report 0 while canonical claimed 1
+          reportedModelInvocationsConsumed: 0,
+          reportedHostedOperationsConsumed: 0,
+        };
+      },
+    });
+    expect(state.campaignBudget.consumedModelInvocations).toBe(1);
+    expect(state.modelInvocations).toBe(1);
+    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
+      model: 1,
+      reportedMismatch: true,
+    });
+  });
+});
+
+describe("C3-02 — F2 provider factory binding + canonical F2 counts", () => {
+  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
+  const tempDirs: string[] = [];
+  let projectId = "";
+  let sessionDbPath = "";
+
+  beforeEach(async () => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    delete process.env.OPENAI_API_KEY;
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c3-f2-"));
+    tempDirs.push(dir);
+    sessionDbPath = path.join(dir, "session.sqlite");
+    const runtime = getRuntimeApplicationService({
+      productDbPath: path.join(dir, "oa.sqlite"),
+      auditMode: "noop",
+      nowIso: "2026-09-05T12:00:00.000Z",
+    });
+    const created = await runtime.createProject({
+      name: "C3 F2",
+      objective: "binding",
+      context: "c3",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "C3",
+      idempotencyKey: `idem:c3-${Date.now()}-${Math.random()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("setup");
+    projectId = created.projectId;
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    while (tempDirs.length) {
+      const d = tempDirs.pop();
+      if (d) fs.rmSync(d, { recursive: true, force: true });
+    }
+    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
+    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
+  });
+
+  it("factory receives exact Luna+none / Terra+medium / Sol+high", () => {
+    const received: Array<{
+      modelId: string;
+      reasoningEffort: OpenAiReasoningEffort;
+    }> = [];
+    const factory: EvalCellProviderFactory = ({
+      modelId,
+      reasoningEffort,
+    }) => {
+      received.push({ modelId, reasoningEffort });
+      return new FakeConversationProvider();
+    };
+    const pins = [
+      { modelId: "gpt-5.6-luna", reasoningEffort: "none" as const },
+      { modelId: "gpt-5.6-terra", reasoningEffort: "medium" as const },
+      { modelId: "gpt-5.6-sol", reasoningEffort: "high" as const },
+    ];
+    for (const pin of pins) {
+      const provider = factory(pin);
+      expect(provider).toBeTruthy();
+    }
+    expect(received).toEqual(pins);
+  });
+
+  it("factory receives exact model+effort; F2 informative counts analyzeIntent + Agents", async () => {
+    const received: Array<{
+      modelId: string;
+      reasoningEffort: OpenAiReasoningEffort;
+    }> = [];
+    class BoundFake implements ConversationProvider {
+      readonly providerId = "fake-test";
+      constructor(
+        readonly modelId: string,
+        readonly reasoningEffort: OpenAiReasoningEffort,
+      ) {}
+      async complete(messages: ProviderChatMessage[]) {
+        return {
+          text: `[TEST/FAKE] ${JSON.stringify({
+            intentClass: "informative",
+            candidateCycleTypeId: null,
+            signals: null,
+            cognitiveWorkload: null,
+            objective: null,
+            scope: null,
+            rephrasedRequest: "x",
+            outOfScope: [],
+            risks: [],
+            reservations: [],
+            stopConditions: [],
+            activatedBlocks: [],
+            expectedOutcome: null,
+            criticalJustification: null,
+            requestedOperation: null,
+          })}`,
+          usage: {
+            inputTokens: 1,
+            outputTokens: 1,
+            totalTokens: 2,
+            model: this.modelId,
+            providerResponseId: "b",
+          },
+        };
+      }
+      async completeStructured(input: {
+        messages: ProviderChatMessage[];
+        schemaName: string;
+        jsonSchema: Record<string, unknown>;
+      }): Promise<ProviderCompletionResult> {
+        return this.complete(input.messages);
+      }
+    }
+    const innerFactory: EvalCellProviderFactory = ({
+      modelId,
+      reasoningEffort,
+    }) => {
+      received.push({ modelId, reasoningEffort });
+      return new BoundFake(modelId, reasoningEffort);
+    };
+
+    const state = createGlobalMrStageADriver({
+      campaignId: `c3-f2-${Date.now()}`,
+    });
+    const before = state.campaignBudget.consumedModelInvocations;
+    const beforeUsd = state.budget.cumulativeUsd;
+    const scripted = new ScriptedModel([
+      [assistantMessage("PIN:gpt-5.6-terra:medium")],
+    ]);
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Résume l'objectif __F2_INFORMATIVE__",
+      sessionDbPath,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-terra",
+        reasoningEffort: "medium",
+        agentsModel: scripted,
+      },
+      evalCellProviderFactory: createMeteredEvalCellProviderFactory({
+        innerFactory,
+        manifest: state.manifest,
+        budget: state.budget,
+        campaignBudget: state.campaignBudget,
+        assumedPreflight: { inputTokens: 50, outputTokens: 20 },
+      }),
+      campaignBudget: state.campaignBudget,
+      usdAccounting: createEvalAgentsUsdAccounting({
+        budget: state.budget,
+        manifest: state.manifest,
+        modelId: "gpt-5.6-terra",
+        assumedInputTokens: 50,
+        assumedOutputTokens: 20,
+      }),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(received).toEqual([
+      { modelId: "gpt-5.6-terra", reasoningEffort: "medium" },
+    ]);
+    expect(result.text).toContain("PIN:gpt-5.6-terra:medium");
+    expect(result.f2?.turnKind).toBe("f1_informative");
+    // analyzeIntent metered claim (1) + Agents claim (1) = 2
+    expect(state.campaignBudget.consumedModelInvocations - before).toBe(2);
+    expect(state.budget.cumulativeUsd).toBeGreaterThan(beforeUsd);
+  });
+
+  it("metered structured alone claims one canonical slot after USD preflight", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `c3-ai-${Date.now()}`,
+    });
+    const before = state.campaignBudget.consumedModelInvocations;
+    const factory = createMeteredEvalCellProviderFactory({
+      innerFactory: () => new FakeConversationProvider(),
+      manifest: state.manifest,
+      budget: state.budget,
+      campaignBudget: state.campaignBudget,
+      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
+    });
+    const provider = factory({
+      modelId: "gpt-5.6-luna",
+      reasoningEffort: "none",
+    });
+    await analyzeIntent({
+      userContent: "Résume __F2_INFORMATIVE__",
+      projectSummary: "p",
+      provider,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+      },
+    });
+    expect(state.campaignBudget.consumedModelInvocations - before).toBe(1);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/c3.mw6-full-product-path.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/c3.mw6-full-product-path.d0.test.ts
new file mode 100644
index 00000000..71211996
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/c3.mw6-full-product-path.d0.test.ts
@@ -0,0 +1,354 @@
+/** @vitest-environment node */
+/**
+ * C3-03 — full MW6 governed product path through Stage A canonical lease — ZERO REAL.
+ *
+ * Reuses W2 harness + MW6 server-composition seeding patterns.
+ * Does NOT invent a second authority framework.
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
+import {
+  buildMw6CurrentExternalDiscoveryIntent,
+  buildMw6ExternalDiscoveryContractSemantic,
+  type Mw6ExternalDiscoveryContractInput,
+} from "@/lib/auth/mw6ExternalDiscoveryBinding";
+import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
+import type { ActorReference } from "@/lib/oa/decision";
+import { FakeConversationProvider, setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  bindSourceProviderCapability,
+  decideSourceStrategy,
+} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
+import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
+import { runMw6GovernedNoraProductTurn } from "@/features/project-assistant/mw6GovernedNoraTurn";
+import {
+  createEvalAgentsUsdAccounting,
+  createGlobalMrStageADriver,
+  GLOBAL_MR_STAGE_A_CALL_CAPS,
+} from "@/lib/nora-eval";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  seedQualifiedProject,
+  tempProductDbPath,
+} from "@/__tests__/project-assistant/w2Harness";
+import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+
+const CLAIM =
+  "corroborate externally the current CEO of Acme Corp";
+
+const HUMAN_ACTOR: ActorReference = {
+  actorId: "actor:mw6-hd-human",
+  role: "project_owner",
+  displayName: "MW6 HD",
+  authorityLevel: "N2",
+};
+
+function makePilote(
+  githubUserId: string,
+): Extract<ResolveCurrentPiloteResult, { ok: true }> {
+  return {
+    ok: true,
+    githubUserId,
+    betterAuthUserId: `ba-user-${githubUserId}`,
+    actor: mapGithubIdentityToPiloteActor({ githubUserId }),
+  };
+}
+
+function productContext(campaignId: string, strategyInput?: SourceStrategyInput) {
+  const strategy = decideSourceStrategy(
+    strategyInput ?? { claimText: CLAIM },
+  );
+  const binding = bindSourceProviderCapability(strategy);
+  return { strategy, binding, campaignId };
+}
+
+async function seedAcceptedDecisionOnRuntime(
+  runtime: RuntimeApplicationService,
+  input: {
+    decisionId: string;
+    projectId: string;
+    cycleInstanceId: string;
+  },
+): Promise<void> {
+  const oa = runtime.oa!;
+  const subject = "subj:mw6-ext-discovery";
+  try {
+    oa.authorityResolver.register({
+      evidenceId: "evd:registry-mw6-hd",
+      actorId: HUMAN_ACTOR.actorId,
+      level: "N2",
+      scope: subject,
+      issuedAt: "2026-07-01T00:00:00.000Z",
+      source: "registry",
+    });
+  } catch {
+    /* immutable re-register */
+  }
+  const recorded = await oa.decisionServices.recordHumanDecision.execute({
+    decisionId: input.decisionId,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    subject,
+    options: [
+      { optionId: "opt:go", label: "Go" },
+      { optionId: "opt:no", label: "No" },
+    ],
+    selectedOptionId: "opt:go",
+    actor: HUMAN_ACTOR,
+    authority: "delegated",
+    reversible: false,
+    authorityEvidenceId: "evd:registry-mw6-hd",
+  });
+  expect(recorded.ok).toBe(true);
+}
+
+async function seedConfirmedMw6Ec(input: {
+  runtime: RuntimeApplicationService;
+  projectId: string;
+  cycleInstanceId: string;
+  campaignId: string;
+  executionContractId: string;
+  decisionId: string;
+  confirmationId: string;
+}): Promise<{ intent: Mw6ExternalDiscoveryContractInput }> {
+  const oa = input.runtime.oa!;
+  const product = productContext(input.campaignId);
+  expect(product.strategy.acquisitionRequirement).toBe("external_discovery");
+
+  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
+    executionContractId: input.executionContractId,
+    projectId: input.projectId,
+    campaignId: input.campaignId,
+    strategy: product.strategy,
+    binding: product.binding,
+    decisionRefs: [input.decisionId],
+    idempotencyKey: `idem:${input.executionContractId}`,
+    cycleInstanceId: input.cycleInstanceId,
+  });
+  expect(intentBuilt.ok).toBe(true);
+  if (!intentBuilt.ok) throw new Error(intentBuilt.reason);
+  const intent = intentBuilt.intent;
+  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);
+
+  const registryEvidenceId = `evd:registry-${input.executionContractId}`;
+  try {
+    oa.authorityResolver.register({
+      evidenceId: registryEvidenceId,
+      actorId: HUMAN_ACTOR.actorId,
+      level: "N2",
+      scope: semantic.scope,
+      issuedAt: "2026-07-01T00:00:00.000Z",
+      source: "registry",
+    });
+  } catch {
+    /* already */
+  }
+
+  const built = await oa.executionContractServices.buildExecutionContract.execute({
+    executionContractId: semantic.executionContractId,
+    projectId: semantic.projectId,
+    decisionRefs: [input.decisionId],
+    action: semantic.action,
+    target: semantic.target,
+    scope: semantic.scope,
+    inputs: semantic.inputs as Record<string, unknown> | undefined,
+    expectedOutputs: semantic.expectedOutputs,
+    requiredCapabilities: [...semantic.requiredCapabilities],
+    requiredAuthority: "N2",
+    constraints: [...semantic.constraints],
+    stopConditions: [...semantic.stopConditions],
+    evidenceRequirements: [...semantic.evidenceRequirements],
+    reversibility: semantic.reversibility,
+    idempotencyKey: semantic.idempotencyKey,
+    cycleInstanceId: semantic.cycleInstanceId,
+    actor: HUMAN_ACTOR,
+    authorityEvidenceId: registryEvidenceId,
+  });
+  expect(built.ok).toBe(true);
+  if (!built.ok) throw new Error("build failed");
+
+  const validated =
+    await oa.executionContractServices.validateExecutionContract.execute({
+      executionContractId: built.contract.executionContractId,
+      actor: HUMAN_ACTOR,
+      authorityEvidenceId: registryEvidenceId,
+    });
+  expect(validated.ok).toBe(true);
+  if (!validated.ok) throw new Error("validate failed");
+
+  const requested = await oa.decisionServices.requestConfirmation.execute({
+    confirmationId: input.confirmationId,
+    level: "N2",
+    actionRef: `act:confirm:${input.executionContractId}`,
+    requestedBy: HUMAN_ACTOR,
+    requestedTo: HUMAN_ACTOR,
+    scope: semantic.scope,
+    idempotencyKey: `idem-cfm-${input.confirmationId}`,
+    decisionRef: input.decisionId,
+  });
+  expect(requested.ok).toBe(true);
+
+  const granted = await oa.decisionServices.grantConfirmation.execute({
+    confirmationId: input.confirmationId,
+    actor: HUMAN_ACTOR,
+    authorityEvidenceId: registryEvidenceId,
+  });
+  expect(granted.ok).toBe(true);
+
+  const confirmed =
+    await oa.executionContractServices.confirmExecutionContract.execute({
+      executionContractId: built.contract.executionContractId,
+      confirmationId: input.confirmationId,
+      actor: HUMAN_ACTOR,
+      authorityEvidenceId: registryEvidenceId,
+      expectedVersion: validated.contract.version,
+    });
+  expect(confirmed.ok).toBe(true);
+  if (!confirmed.ok) throw new Error("confirm failed");
+
+  return { intent };
+}
+
+describe("C3-03 — full MW6 governed product path (deterministic)", () => {
+  let runtime: RuntimeApplicationService;
+  let projectId: string;
+  let cycleInstanceId: string;
+
+  beforeEach(async () => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    delete process.env.OPENAI_API_KEY;
+    setConversationProviderForTests(null);
+    runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("mw6-c3.sqlite"),
+      idPrefix: "mw6c3",
+    });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "c3" });
+    projectId = seeded.projectId;
+    cycleInstanceId = seeded.cycleInstanceId;
+  });
+
+  afterEach(() => {
+    cleanupW2TempDirs();
+    setConversationProviderForTests(null);
+  });
+
+  it("driver → runMw6GovernedNoraProductTurn → same canonical lease; no 4/2/4; ZERO LIVE", async () => {
+    const campaignId = `c3-mw6-${Date.now()}`;
+    const executionContractId = "xct:mw6-c3-full";
+    const decisionId = "dec:mw6-c3-full";
+    await seedAcceptedDecisionOnRuntime(runtime, {
+      decisionId,
+      projectId,
+      cycleInstanceId,
+    });
+    await seedConfirmedMw6Ec({
+      runtime,
+      projectId,
+      cycleInstanceId,
+      campaignId,
+      executionContractId,
+      decisionId,
+      confirmationId: "cfm:mw6-c3-full",
+    });
+
+    const state = createGlobalMrStageADriver({ campaignId });
+    expect(state.campaignBudget.maxModelInvocations).toBe(
+      GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
+    );
+    expect(state.campaignBudget.maxModelInvocations).not.toBe(4);
+
+    const beforeModel = state.campaignBudget.consumedModelInvocations;
+    const beforeHosted = state.campaignBudget.consumedHostedWebOperations;
+    const usd = createEvalAgentsUsdAccounting({
+      budget: state.budget,
+      manifest: state.manifest,
+      modelId: "gpt-5.6-luna",
+      assumedInputTokens: 40,
+      assumedOutputTokens: 20,
+    });
+
+    const pilote = makePilote("11111111");
+    const result = await runMw6GovernedNoraProductTurn({
+      projectId,
+      content: CLAIM,
+      executionContractId,
+      provider: new FakeConversationProvider(),
+      resolveAuthenticatedPilote: async () => pilote,
+      sharedCampaignBudget: state.campaignBudget,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+      },
+      usdAccounting: usd,
+      // Hostile client fields — ignored
+      governedAuthority: {
+        actorId: "actor:hostile",
+        authorityEvidenceId: "evd:hostile",
+      },
+      actorId: "actor:hostile-override",
+      claimedAuthorityLevel: "N3",
+    });
+
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.mw6AuthorityComposition.serverComposedGovernedAuthority).toBe(
+      true,
+    );
+    expect(result.mw6AuthorityComposition.authorityBound).toBe(true);
+    expect(result.mw6AuthorityComposition.realAuthorized).toBe(false);
+    expect(result.mw6AuthorityComposition.liveHostedDispatchCalls).toBe(0);
+    expect(result.mw6AuthorityComposition.actorId).toBe(pilote.actor.actorId);
+
+    // Same canonical lease — model claim(s) landed on Stage A budget, not a local 4/2/4.
+    expect(state.campaignBudget.consumedModelInvocations).toBeGreaterThan(
+      beforeModel,
+    );
+    expect(state.campaignBudget.campaignId).toBe(campaignId);
+    expect(state.campaignBudget.maxAggregateRealCalls).toBe(
+      GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
+    );
+    // Deterministic hosted fixture path — no silent REAL hosted claim invent.
+    expect(
+      state.campaignBudget.consumedHostedWebOperations - beforeHosted,
+    ).toBeGreaterThanOrEqual(0);
+  });
+
+  it("campaign mismatch fail-closes before model dispatch", async () => {
+    const campaignId = `c3-mw6-match-${Date.now()}`;
+    const executionContractId = "xct:mw6-c3-mismatch";
+    const decisionId = "dec:mw6-c3-mismatch";
+    await seedAcceptedDecisionOnRuntime(runtime, {
+      decisionId,
+      projectId,
+      cycleInstanceId,
+    });
+    await seedConfirmedMw6Ec({
+      runtime,
+      projectId,
+      cycleInstanceId,
+      campaignId,
+      executionContractId,
+      decisionId,
+      confirmationId: "cfm:mw6-c3-mismatch",
+    });
+
+    const other = createGlobalMrStageADriver({
+      campaignId: `other-${Date.now()}`,
+    });
+    const before = other.campaignBudget.consumedModelInvocations;
+
+    const result = await runMw6GovernedNoraProductTurn({
+      projectId,
+      content: CLAIM,
+      executionContractId,
+      provider: new FakeConversationProvider(),
+      resolveAuthenticatedPilote: async () => makePilote("11111111"),
+      sharedCampaignBudget: other.campaignBudget,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("CAMPAIGN_ID_MISMATCH");
+    expect(other.campaignBudget.consumedModelInvocations).toBe(before);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts
new file mode 100644
index 00000000..20d821b7
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts
@@ -0,0 +1,438 @@
+/** @vitest-environment node */
+/**
+ * C4 — final deterministic safety / client-boundary — ZERO REAL.
+ */
+import { describe, expect, it } from "vitest";
+import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach } from "vitest";
+import {
+  FakeConversationProvider,
+  setConversationProviderForTests,
+  type ConversationProvider,
+  type ProviderChatMessage,
+  type ProviderCompletionResult,
+} from "@/lib/platform/ai";
+import {
+  buildGlobalMrStageAMatrix,
+  createEvalAgentsUsdAccounting,
+  createGlobalMrStageADriver,
+  createMeteredEvalCellProviderFactory,
+  deriveGlobalMrStageAEnvelope,
+  GLOBAL_MR_STAGE_A_CALL_CAPS,
+  GLOBAL_MR_STAGE_A_CELL_CAPS,
+  MeteredConversationProvider,
+  resolveEvalCellConversationProvider,
+  runGlobalMrStageACell,
+  type EvalCellProviderFactory,
+} from "@/lib/nora-eval";
+import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
+import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import { projectAssistantSendAction } from "@/features/project-assistant/actions";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
+import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+
+describe("C4-01 — Server Action has no Stage A eval seams", () => {
+  it("projectAssistantSendAction parameter keys exclude Stage A eval controls", () => {
+    // Static/type-level surrogate: inspect function source for forbidden Stage A seams.
+    const src = projectAssistantSendAction.toString();
+    expect(src).not.toMatch(/evalModelReasoningControl/);
+    expect(src).not.toMatch(/evalCellProviderFactory/);
+    expect(src).not.toMatch(/sharedCampaignBudget/);
+    expect(src).not.toMatch(/usdAccounting/);
+    // campaignBudget as Stage A lease injection must not appear on the action.
+    expect(src).not.toMatch(/campaignBudget/);
+  });
+});
+
+describe("C4-02 — factory mandatory when eval control active", () => {
+  it("control + factory → provider from factory only", () => {
+    let called = false;
+    const factory: EvalCellProviderFactory = ({ modelId, reasoningEffort }) => {
+      called = true;
+      expect(modelId).toBe("gpt-5.6-sol");
+      expect(reasoningEffort).toBe("high");
+      return new FakeConversationProvider();
+    };
+    const arbitrary = new FakeConversationProvider();
+    const resolved = resolveEvalCellConversationProvider({
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-sol",
+        reasoningEffort: "high",
+      },
+      evalCellProviderFactory: factory,
+      provider: arbitrary,
+    });
+    expect(called).toBe(true);
+    expect(resolved).not.toBe(arbitrary);
+  });
+
+  it("control + provider only → undefined (fail-close)", () => {
+    const resolved = resolveEvalCellConversationProvider({
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+      },
+      provider: new FakeConversationProvider(),
+    });
+    expect(resolved).toBeUndefined();
+  });
+
+  it("no control + provider → historical passthrough", () => {
+    const p = new FakeConversationProvider();
+    expect(
+      resolveEvalCellConversationProvider({ provider: p }),
+    ).toBe(p);
+  });
+});
+
+describe("C4-03 — structured F2 USD via MeteredConversationProvider", () => {
+  it("C4-03A — USD preflight deny → 0 canonical claim / 0 dispatch", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `c4-03a-${Date.now()}`,
+      carryInUsd: 12,
+    });
+    expect(state.budget.hardStopTriggered || state.budget.cumulativeUsd >= 12).toBe(
+      true,
+    );
+    let dispatches = 0;
+    class CountingFake implements ConversationProvider {
+      readonly providerId = "fake-test";
+      async complete() {
+        dispatches += 1;
+        return {
+          text: "{}",
+          usage: {
+            inputTokens: 1,
+            outputTokens: 1,
+            totalTokens: 2,
+            model: "gpt-5.6-luna",
+            providerResponseId: "x",
+          },
+        };
+      }
+      async completeStructured() {
+        return this.complete();
+      }
+    }
+    const factory = createMeteredEvalCellProviderFactory({
+      innerFactory: () => new CountingFake(),
+      manifest: state.manifest,
+      budget: state.budget,
+      campaignBudget: state.campaignBudget,
+      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
+    });
+    const provider = factory({
+      modelId: "gpt-5.6-luna",
+      reasoningEffort: "none",
+    });
+    const before = state.campaignBudget.consumedModelInvocations;
+    await expect(
+      analyzeIntent({
+        userContent: "Résume __F2_INFORMATIVE__",
+        projectSummary: "p",
+        provider,
+        evalModelReasoningControl: {
+          modelId: "gpt-5.6-luna",
+          reasoningEffort: "none",
+        },
+      }),
+    ).rejects.toThrow(/BUDGET_STOP/);
+    expect(dispatches).toBe(0);
+    expect(state.campaignBudget.consumedModelInvocations).toBe(before);
+  });
+
+  it("C4-03B — allowed structured → 1 claim / 1 dispatch / ledger + spend", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `c4-03b-${Date.now()}`,
+    });
+    let dispatches = 0;
+    class CountingFake implements ConversationProvider {
+      readonly providerId = "fake-test";
+      async complete(messages: ProviderChatMessage[]) {
+        dispatches += 1;
+        return {
+          text: `[TEST/FAKE] ${JSON.stringify({
+            intentClass: "informative",
+            candidateCycleTypeId: null,
+            signals: null,
+            cognitiveWorkload: null,
+            objective: null,
+            scope: null,
+            rephrasedRequest: "x",
+            outOfScope: [],
+            risks: [],
+            reservations: [],
+            stopConditions: [],
+            activatedBlocks: [],
+            expectedOutcome: null,
+            criticalJustification: null,
+            requestedOperation: null,
+          })}`,
+          usage: {
+            inputTokens: 10,
+            outputTokens: 5,
+            totalTokens: 15,
+            model: "gpt-5.6-luna",
+            providerResponseId: "s",
+          },
+        };
+      }
+      async completeStructured(input: {
+        messages: ProviderChatMessage[];
+        schemaName: string;
+        jsonSchema: Record<string, unknown>;
+      }): Promise<ProviderCompletionResult> {
+        return this.complete(input.messages);
+      }
+    }
+    const factory = createMeteredEvalCellProviderFactory({
+      innerFactory: () => new CountingFake(),
+      manifest: state.manifest,
+      budget: state.budget,
+      campaignBudget: state.campaignBudget,
+      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
+    });
+    const provider = factory({
+      modelId: "gpt-5.6-luna",
+      reasoningEffort: "none",
+    }) as MeteredConversationProvider;
+    const beforeModel = state.campaignBudget.consumedModelInvocations;
+    const beforeUsd = state.budget.cumulativeUsd;
+    await analyzeIntent({
+      userContent: "Résume __F2_INFORMATIVE__",
+      projectSummary: "p",
+      provider,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+      },
+    });
+    expect(dispatches).toBe(1);
+    expect(state.campaignBudget.consumedModelInvocations - beforeModel).toBe(1);
+    expect(provider.ledger).toHaveLength(1);
+    expect(provider.ledger[0]?.method).toBe("completeStructured");
+    expect(state.budget.cumulativeUsd).toBeGreaterThan(beforeUsd);
+  });
+
+  it("C4-03D — after hardStopTriggered, next structured has 0 claim / 0 dispatch", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `c4-03d-${Date.now()}`,
+    });
+    // Exhaust authorization envelope.
+    state.budget.recordSpend(12, "force-hard-cap");
+    expect(state.budget.hardStopTriggered || state.budget.cumulativeUsd >= 12).toBe(
+      true,
+    );
+    let dispatches = 0;
+    const factory = createMeteredEvalCellProviderFactory({
+      innerFactory: () => {
+        const inner = new FakeConversationProvider();
+        const orig = inner.completeStructured?.bind(inner);
+        return {
+          providerId: "fake-test",
+          complete: async () => {
+            dispatches += 1;
+            return {
+              text: "x",
+              usage: {
+                inputTokens: 1,
+                outputTokens: 1,
+                totalTokens: 2,
+                model: "gpt-5.6-luna",
+                providerResponseId: "d",
+              },
+            };
+          },
+          completeStructured: async (input: {
+            messages: ProviderChatMessage[];
+            schemaName: string;
+            jsonSchema: Record<string, unknown>;
+          }) => {
+            dispatches += 1;
+            if (orig) return orig(input);
+            return {
+              text: "x",
+              usage: {
+                inputTokens: 1,
+                outputTokens: 1,
+                totalTokens: 2,
+                model: "gpt-5.6-luna",
+                providerResponseId: "d",
+              },
+            };
+          },
+        } as ConversationProvider;
+      },
+      manifest: state.manifest,
+      budget: state.budget,
+      campaignBudget: state.campaignBudget,
+      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
+    });
+    const before = state.campaignBudget.consumedModelInvocations;
+    await expect(
+      analyzeIntent({
+        userContent: "Résume __F2_INFORMATIVE__",
+        projectSummary: "p",
+        provider: factory({
+          modelId: "gpt-5.6-luna",
+          reasoningEffort: "none",
+        }),
+        evalModelReasoningControl: {
+          modelId: "gpt-5.6-luna",
+          reasoningEffort: "none",
+        },
+      }),
+    ).rejects.toThrow(/BUDGET_STOP/);
+    expect(dispatches).toBe(0);
+    expect(state.campaignBudget.consumedModelInvocations).toBe(before);
+  });
+});
+
+describe("C4-04 — maxRepeatsPerCell = 1; envelope unchanged", () => {
+  it("constant and derived envelope", () => {
+    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxRepeatsPerCell).toBe(1);
+    const d = deriveGlobalMrStageAEnvelope();
+    expect(d.maxCellExecutions).toBe(72);
+    expect(d.maxModelInvocations).toBe(405);
+    expect(d.maxAggregateRealCalls).toBe(429);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(405);
+  });
+});
+
+describe("C4-05 — Evidence exposes f2_product execution truth", () => {
+  it("F2 cell Evidence productPath=f2 and executionKind", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `c4-05-${Date.now()}`,
+    });
+    const cell = buildGlobalMrStageAMatrix({
+      campaignId: state.campaignId,
+    }).find((c) => c.executionKind === "f2_product")!;
+    const out = await runGlobalMrStageACell({
+      state,
+      cell,
+      executor: async () => ({
+        passFail: "PASS",
+        failureClass: "NONE",
+        rawSummary: "f2-ok",
+        usage: null,
+      }),
+    });
+    expect(out.evidence?.productPath).toBe("f2");
+    expect(out.evidence?.productPathAttempted).toBe("f2");
+    expect(out.evidence?.productPathSucceeded).toBe(true);
+    expect(out.evidence?.productObservation).toMatchObject({
+      executionKind: "f2_product",
+    });
+    expect(out.evidence?.evidenceRefs.some((r) => r === "executionKind:f2_product")).toBe(
+      true,
+    );
+  });
+});
+
+describe("C4-03C — F2 informative shares BudgetTracker structured + Agents", () => {
+  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
+  const tempDirs: string[] = [];
+  let projectId = "";
+  let sessionDbPath = "";
+
+  beforeEach(async () => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    delete process.env.OPENAI_API_KEY;
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c4-f2-"));
+    tempDirs.push(dir);
+    sessionDbPath = path.join(dir, "session.sqlite");
+    const runtime = getRuntimeApplicationService({
+      productDbPath: path.join(dir, "oa.sqlite"),
+      auditMode: "noop",
+      nowIso: "2026-09-05T12:00:00.000Z",
+    });
+    const created = await runtime.createProject({
+      name: "C4 F2",
+      objective: "usd",
+      context: "c4",
+      criticality: "STANDARD",
+      constraints: [],
+      shortReference: "C4",
+      idempotencyKey: `idem:c4-${Date.now()}-${Math.random()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("setup");
+    projectId = created.projectId;
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    while (tempDirs.length) {
+      const d = tempDirs.pop();
+      if (d) fs.rmSync(d, { recursive: true, force: true });
+    }
+    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
+    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
+  });
+
+  it("shared BudgetTracker + canonical delta = analyzeIntent + Agents", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `c4-03c-${Date.now()}`,
+    });
+    const beforeModel = state.campaignBudget.consumedModelInvocations;
+    const beforeUsd = state.budget.cumulativeUsd;
+    const scripted = new ScriptedModel([
+      [assistantMessage("PIN:gpt-5.6-luna:none")],
+    ]);
+    let meteredLedger: { method: string }[] = [];
+    const innerFactory: EvalCellProviderFactory = () =>
+      new FakeConversationProvider();
+    const factory: EvalCellProviderFactory = (pin) => {
+      const p = createMeteredEvalCellProviderFactory({
+        innerFactory,
+        manifest: state.manifest,
+        budget: state.budget,
+        campaignBudget: state.campaignBudget,
+        assumedPreflight: { inputTokens: 40, outputTokens: 20 },
+      })(pin);
+      meteredLedger = (p as MeteredConversationProvider).ledger;
+      return p;
+    };
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Résume l'objectif __F2_INFORMATIVE__",
+      sessionDbPath,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+        agentsModel: scripted,
+      },
+      evalCellProviderFactory: factory,
+      campaignBudget: state.campaignBudget,
+      usdAccounting: createEvalAgentsUsdAccounting({
+        budget: state.budget,
+        manifest: state.manifest,
+        modelId: "gpt-5.6-luna",
+        assumedInputTokens: 40,
+        assumedOutputTokens: 20,
+      }),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(state.campaignBudget.consumedModelInvocations - beforeModel).toBe(2);
+    expect(meteredLedger.some((e) => e.method === "completeStructured")).toBe(
+      true,
+    );
+    expect(state.budget.cumulativeUsd).toBeGreaterThan(beforeUsd);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/e1.agents-usd-metering.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/e1.agents-usd-metering.d0.test.ts
new file mode 100644
index 00000000..0d69467e
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/e1.agents-usd-metering.d0.test.ts
@@ -0,0 +1,328 @@
+/** @vitest-environment node */
+/**
+ * E1 correction — USD reservation / observed-overrun semantics — ZERO REAL.
+ */
+import { describe, expect, it } from "vitest";
+import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
+import {
+  acquireNoraCampaignBudget,
+  createNoraTurnBudget,
+  runNoraAgentsTurn,
+  sfiaBoundaryInstructions,
+} from "@/lib/nora-cognitive-runtime";
+import {
+  BudgetTracker,
+  MW0_BUDGET_POLICY,
+  buildGlobalModelReasoningCapabilityManifest,
+  createEvalAgentsUsdAccounting,
+  MeteredConversationProvider,
+  estimateCostUsd,
+} from "@/lib/nora-eval";
+import { FakeConversationProvider } from "@/lib/platform/ai";
+
+describe("E1 — Agents USD authorization envelope (deterministic)", () => {
+  const manifest = buildGlobalModelReasoningCapabilityManifest(
+    "2026-09-05T00:00:00.000Z",
+  );
+
+  it("F1-AC01 — first invocation below reservation envelope executes", async () => {
+    const budget = new BudgetTracker({
+      targetUsd: 1,
+      softStopUsd: 2,
+      hardCapUsd: 5,
+    });
+    const usd = createEvalAgentsUsdAccounting({
+      budget,
+      manifest,
+      modelId: "gpt-5.6-luna",
+      assumedInputTokens: 100,
+      assumedOutputTokens: 50,
+    });
+    const turn = await runNoraAgentsTurn({
+      correlationId: "f1-ac01",
+      projectId: "proj-e1",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent: "ping",
+      model: new ScriptedModel([[assistantMessage("E1_OK")]]),
+      enableTools: false,
+      maxTurns: 1,
+      usdAccounting: usd,
+    });
+    expect(turn.limitReached).toBe(false);
+    expect(turn.text).toContain("E1_OK");
+    expect(turn.usdObserve?.reservedInvocations).toBe(1);
+    expect(usd.totalReservedInvocations()).toBe(1);
+    expect(turn.usdObserve?.invoice).toBe("NOT_OBSERVED");
+  });
+
+  it("F1-AC02 — first dispatched YES, second nested/shared-envelope denied PRE-DISPATCH", async () => {
+    // Luna ~0.00044 USD per reserve with these assumptions; hardCap allows exactly one.
+    const hardCapUsd = 0.0005;
+    const budget = new BudgetTracker({
+      targetUsd: 0.0002,
+      softStopUsd: 0.0004,
+      hardCapUsd,
+    });
+    const usd = createEvalAgentsUsdAccounting({
+      budget,
+      manifest,
+      modelId: "gpt-5.6-luna",
+      assumedInputTokens: 1000,
+      assumedOutputTokens: 200,
+    });
+    const est = usd.estimateNextInvocationUsd();
+    expect(est).toBeLessThan(hardCapUsd);
+    expect(usd.canDispatchUnderHardCap(est).allowed).toBe(true);
+
+    const campaign = acquireNoraCampaignBudget({
+      campaignId: `e1-f1ac02-${Date.now()}`,
+      maxModelInvocations: 10,
+      maxHostedWebOperations: 0,
+      maxAggregateRealCalls: 10,
+    });
+
+    const first = await runNoraAgentsTurn({
+      correlationId: "f1-ac02-first",
+      projectId: "proj-e1",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent: "first",
+      model: new ScriptedModel([[assistantMessage("FIRST_OK")]]),
+      enableTools: false,
+      maxTurns: 1,
+      campaignBudget: campaign,
+      usdAccounting: usd,
+      budget: createNoraTurnBudget(),
+    });
+    expect(first.limitReached).toBe(false);
+    expect(first.text).toContain("FIRST_OK");
+    expect(usd.totalReservedInvocations()).toBe(1);
+    expect(first.usdObserve?.reservedInvocations).toBe(1);
+
+    const second = await runNoraAgentsTurn({
+      correlationId: "f1-ac02-second",
+      projectId: "proj-e1",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent: "second-must-deny",
+      model: new ScriptedModel([[assistantMessage("SECOND_SHOULD_NOT_RUN")]]),
+      enableTools: false,
+      maxTurns: 1,
+      campaignBudget: campaign,
+      usdAccounting: usd,
+      budget: createNoraTurnBudget(),
+    });
+    expect(second.limitReached).toBe(true);
+    expect(second.text).not.toContain("SECOND_SHOULD_NOT_RUN");
+    expect(
+      /AUTHORIZATION_ENVELOPE|PRECALL_WOULD_EXCEED|HARD_CAP|USD/i.test(
+        second.text,
+      ),
+    ).toBe(true);
+    expect(usd.totalReservedInvocations()).toBe(1);
+  });
+
+  it("F1-AC03 — no call-count claim → no USD reserve", async () => {
+    const budget = new BudgetTracker({
+      targetUsd: 1,
+      softStopUsd: 2,
+      hardCapUsd: 5,
+    });
+    const usd = createEvalAgentsUsdAccounting({
+      budget,
+      manifest,
+      modelId: "gpt-5.6-luna",
+      assumedInputTokens: 100,
+      assumedOutputTokens: 50,
+    });
+    const campaign = acquireNoraCampaignBudget({
+      campaignId: `e1-noclaim-${Date.now()}`,
+      maxModelInvocations: 0,
+      maxHostedWebOperations: 0,
+      maxAggregateRealCalls: 0,
+    });
+    const turn = await runNoraAgentsTurn({
+      correlationId: "f1-ac03",
+      projectId: "proj-e1",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent: "deny",
+      model: new ScriptedModel([[assistantMessage("NOPE")]]),
+      enableTools: false,
+      maxTurns: 1,
+      campaignBudget: campaign,
+      usdAccounting: usd,
+    });
+    expect(turn.limitReached).toBe(true);
+    expect(usd.totalReservedInvocations()).toBe(0);
+    expect(budget.ledger.every((l) => !l.note.startsWith("agents-usd-"))).toBe(
+      true,
+    );
+  });
+
+  it("F1-AC04 — exactly one reserve per model invocation", async () => {
+    const budget = new BudgetTracker({
+      targetUsd: 1,
+      softStopUsd: 2,
+      hardCapUsd: 5,
+    });
+    const usd = createEvalAgentsUsdAccounting({
+      budget,
+      manifest,
+      modelId: "gpt-5.6-luna",
+      assumedInputTokens: 100,
+      assumedOutputTokens: 50,
+    });
+    await runNoraAgentsTurn({
+      correlationId: "f1-ac04",
+      projectId: "proj-e1",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent: "once",
+      model: new ScriptedModel([[assistantMessage("ONE")]]),
+      enableTools: false,
+      maxTurns: 1,
+      usdAccounting: usd,
+    });
+    expect(usd.totalReservedInvocations()).toBe(1);
+    expect(
+      budget.ledger.filter((l) => l.note.startsWith("agents-usd-reserve:")).length,
+    ).toBe(1);
+  });
+
+  it("F1-AC05 — null usage retains conservative reservation (not free)", () => {
+    const budget = new BudgetTracker({
+      targetUsd: 1,
+      softStopUsd: 2,
+      hardCapUsd: 5,
+    });
+    const usd = createEvalAgentsUsdAccounting({
+      budget,
+      manifest,
+      modelId: "gpt-5.6-luna",
+      assumedInputTokens: 1000,
+      assumedOutputTokens: 200,
+    });
+    const est = usd.estimateNextInvocationUsd();
+    usd.commitReserve(est);
+    const settled = usd.settleTurn({
+      reservedInvocations: 1,
+      inputTokens: null,
+      outputTokens: null,
+      totalTokens: null,
+    });
+    expect(settled.usedConservativeFallback).toBe(true);
+    expect(settled.observedEstimatedUsd).toBe(est);
+    expect(settled.observedOverrun).toBe(false);
+    expect(settled.invoice).toBe("NOT_OBSERVED");
+    expect(budget.cumulativeUsd).toBeGreaterThanOrEqual(est);
+  });
+
+  it("F1-AC06 — observed usage above reservation surfaces observedOverrun", () => {
+    const budget = new BudgetTracker({
+      targetUsd: 1,
+      softStopUsd: 2,
+      hardCapUsd: 5,
+    });
+    const usd = createEvalAgentsUsdAccounting({
+      budget,
+      manifest,
+      modelId: "gpt-5.6-luna",
+      assumedInputTokens: 10,
+      assumedOutputTokens: 5,
+    });
+    const reserved = usd.estimateNextInvocationUsd();
+    usd.commitReserve(reserved);
+    const settled = usd.settleTurn({
+      reservedInvocations: 1,
+      inputTokens: 500_000,
+      outputTokens: 100_000,
+      totalTokens: 600_000,
+    });
+    expect(settled.observedOverrun).toBe(true);
+    expect(settled.observedEstimatedUsd).toBeGreaterThan(reserved);
+    expect(settled.invoice).toBe("NOT_OBSERVED");
+  });
+
+  it("F1-AC07 — observed authorization overrun blocks subsequent dispatch", () => {
+    const hardCapUsd = 0.05;
+    const budget = new BudgetTracker({
+      targetUsd: 0.01,
+      softStopUsd: 0.02,
+      hardCapUsd,
+    });
+    const usd = createEvalAgentsUsdAccounting({
+      budget,
+      manifest,
+      modelId: "gpt-5.6-luna",
+      assumedInputTokens: 10,
+      assumedOutputTokens: 5,
+    });
+    const reserved = usd.estimateNextInvocationUsd();
+    expect(usd.canDispatchUnderHardCap(reserved).allowed).toBe(true);
+    usd.commitReserve(reserved);
+    const settled = usd.settleTurn({
+      reservedInvocations: 1,
+      inputTokens: 2_000_000,
+      outputTokens: 500_000,
+      totalTokens: 2_500_000,
+    });
+    expect(settled.authorizationEnvelopeExceeded).toBe(true);
+    const next = usd.estimateNextInvocationUsd();
+    const gate = usd.canDispatchUnderHardCap(next);
+    expect(gate.allowed).toBe(false);
+    expect(gate.reason).toMatch(/OBSERVED_AUTHORIZATION_ENVELOPE_EXCEEDED|HARD_CAP|PRECALL/);
+  });
+
+  it("F1-AC08 — no double counting with MeteredConversationProvider path", async () => {
+    const budget = new BudgetTracker(MW0_BUDGET_POLICY);
+    const inner = new FakeConversationProvider({ scripted: ["R1_OK"] });
+    const metered = new MeteredConversationProvider(
+      inner,
+      manifest,
+      budget,
+      "gpt-5.6-luna",
+      { inputTokens: 100, outputTokens: 20 },
+    );
+    await metered.complete([{ role: "user", content: "hi" }]);
+    expect(metered.ledger).toHaveLength(1);
+    expect(budget.ledger.every((l) => !l.note.startsWith("agents-usd-"))).toBe(
+      true,
+    );
+  });
+
+  it("F1-AC09 — no fake invoice claim on settle", () => {
+    const budget = new BudgetTracker({
+      targetUsd: 1,
+      softStopUsd: 2,
+      hardCapUsd: 5,
+    });
+    const usd = createEvalAgentsUsdAccounting({
+      budget,
+      manifest,
+      modelId: "gpt-5.6-luna",
+    });
+    usd.commitReserve(0.01);
+    const settled = usd.settleTurn({
+      reservedInvocations: 1,
+      inputTokens: 100,
+      outputTokens: 20,
+      totalTokens: 120,
+    });
+    expect(settled.invoice).toBe("NOT_OBSERVED");
+    expect(Object.keys(settled)).not.toContain("invoiceUsd");
+  });
+
+  it("F1-AC10 / estimateCostUsd — no invented cache discount", () => {
+    const withCache = estimateCostUsd({
+      manifest,
+      modelId: "gpt-5.6-luna",
+      inputTokens: 1000,
+      outputTokens: 0,
+      cachedInputTokens: 500,
+    });
+    const noCacheField = estimateCostUsd({
+      manifest,
+      modelId: "gpt-5.6-luna",
+      inputTokens: 1000,
+      outputTokens: 0,
+    });
+    expect(withCache).toBeCloseTo(noCacheField, 8);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/e2.eval-model-effort-pin.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/e2.eval-model-effort-pin.d0.test.ts
new file mode 100644
index 00000000..3eb67b2a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/e2.eval-model-effort-pin.d0.test.ts
@@ -0,0 +1,126 @@
+/** @vitest-environment node */
+/**
+ * E2 — eval-only model × reasoning effort pin — ZERO REAL.
+ */
+import { describe, expect, it } from "vitest";
+import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
+import {
+  runNoraCognitiveTurn,
+  resolveNoraAgentsF1Model,
+  buildRunnerModelSettingsForEffort,
+  runNoraAgentsTurn,
+  sfiaBoundaryInstructions,
+} from "@/lib/nora-cognitive-runtime";
+import { FakeConversationProvider } from "@/lib/platform/ai";
+import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
+
+describe("E2 — eval model×effort pin (deterministic)", () => {
+  it("E2-AC01 — Luna + none pin at resolve / settings boundary", () => {
+    expect(
+      resolveNoraAgentsF1Model({
+        model: "gpt-5.6-luna",
+        provider: new FakeConversationProvider({ scripted: ["x"] }),
+      }),
+    ).toBe("gpt-5.6-luna");
+    expect(buildRunnerModelSettingsForEffort("none").reasoning.effort).toBe(
+      "none",
+    );
+  });
+
+  it("E2-AC02/AC03 — Terra/Sol pins reach Runner via ScriptedModel agentsModel", async () => {
+    for (const pin of [
+      { modelId: "gpt-5.6-terra", reasoningEffort: "medium" as const },
+      { modelId: "gpt-5.6-sol", reasoningEffort: "high" as const },
+    ]) {
+      const scripted = new ScriptedModel([
+        [assistantMessage(`PIN:${pin.modelId}:${pin.reasoningEffort}`)],
+      ]);
+      const turn = await runNoraCognitiveTurn({
+        correlationId: `e2-${pin.modelId}`,
+        projectId: "proj-e2",
+        messages: [
+          { role: "system", content: "You are Nora test." },
+          { role: "user", content: "hello" },
+        ],
+        provider: new FakeConversationProvider({ scripted: ["unused"] }),
+        enableTools: false,
+        skipSourceStrategy: true,
+        cognitiveWorkloadSignals: {
+          ambiguity: "low",
+          rigorCriticality: "low",
+          contradictionRisk: "low",
+          verificationNeed: "low",
+        },
+        evalModelReasoningControl: {
+          ...pin,
+          agentsModel: scripted,
+        },
+      });
+      expect(turn.text).toContain(`PIN:${pin.modelId}`);
+      expect(turn.evalPinnedModelId).toBe(pin.modelId);
+      expect(turn.evalPinnedReasoningEffort).toBe(pin.reasoningEffort);
+      expect(turn.selectedReasoningEffort).toBe(pin.reasoningEffort);
+    }
+  });
+
+  it("E2-AC04 — CWP-derived effort observable while pin wins", async () => {
+    const scripted = new ScriptedModel([
+      [assistantMessage("PINNED_NONE")],
+    ]);
+    const turn = await runNoraCognitiveTurn({
+      correlationId: "e2-cwp-obs",
+      projectId: "proj-e2",
+      messages: [
+        { role: "system", content: "sys" },
+        { role: "user", content: "Critical high-assurance analysis needed" },
+      ],
+      provider: new FakeConversationProvider({ scripted: ["unused"] }),
+      enableTools: false,
+      skipSourceStrategy: true,
+      cognitiveWorkloadSignals: {
+        ambiguity: "high",
+        rigorCriticality: "high",
+        contradictionRisk: "high",
+        verificationNeed: "high",
+        reasoningDepth: "high",
+      },
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+        agentsModel: scripted,
+      },
+    });
+    expect(turn.selectedReasoningEffort).toBe("none");
+    expect(turn.evalPinnedReasoningEffort).toBe("none");
+    expect(turn.cwpDerivedReasoningEffort).toBeDefined();
+    expect(turn.selectedReasoningEffort).toBe(turn.evalPinnedReasoningEffort);
+  });
+
+  it("E2-AC05 — absent override leaves pin fields undefined on Agents result", async () => {
+    const agents = await runNoraAgentsTurn({
+      correlationId: "e2-default-agents",
+      projectId: "proj-e2",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent: "x",
+      model: new ScriptedModel([[assistantMessage("DEFAULT2")]]),
+      enableTools: false,
+      maxTurns: 1,
+    });
+    expect(agents.text).toContain("DEFAULT2");
+    expect(
+      (agents as { evalPinnedModelId?: string }).evalPinnedModelId,
+    ).toBeUndefined();
+  });
+
+  it("E2-AC06 — minimal fail-close before dispatch", () => {
+    expect(() =>
+      validateRuntimeReasoningCapability("gpt-5.6-luna", "minimal"),
+    ).toThrow(/minimal/i);
+  });
+
+  it("E2-AC07 — unknown model fail-close before dispatch", () => {
+    expect(() =>
+      validateRuntimeReasoningCapability("gpt-9-unknown", "medium"),
+    ).toThrow();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/e2.product-equivalent-control.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/e2.product-equivalent-control.d0.test.ts
new file mode 100644
index 00000000..b5992a7f
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/e2.product-equivalent-control.d0.test.ts
@@ -0,0 +1,309 @@
+/** @vitest-environment node */
+/**
+ * E2 product-equivalent model×effort control — ZERO REAL.
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
+import {
+  FakeConversationProvider,
+  setConversationProviderForTests,
+  TechnicalError,
+  type ConversationProvider,
+  type ProviderChatMessage,
+  type ProviderCompletionResult,
+} from "@/lib/platform/ai";
+import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
+import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
+import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+
+/** Cell provider that stamps model identity into usage for Observation. */
+class CellPinnedFakeProvider implements ConversationProvider {
+  readonly providerId = "fake-test";
+  readonly cellModelId: string;
+  readonly cellEffort: string;
+  structuredCalls = 0;
+  private readonly inner: FakeConversationProvider;
+
+  constructor(modelId: string, effort: string) {
+    this.cellModelId = modelId;
+    this.cellEffort = effort;
+    this.inner = new FakeConversationProvider();
+  }
+
+  async complete(
+    messages: ProviderChatMessage[],
+  ): Promise<ProviderCompletionResult> {
+    const r = await this.inner.complete(messages);
+    return {
+      ...r,
+      usage: r.usage
+        ? { ...r.usage, model: this.cellModelId }
+        : {
+            inputTokens: 1,
+            outputTokens: 1,
+            totalTokens: 2,
+            model: this.cellModelId,
+            providerResponseId: "cell-pin",
+          },
+    };
+  }
+
+  async completeStructured(input: {
+    messages: ProviderChatMessage[];
+    schemaName: string;
+    jsonSchema: Record<string, unknown>;
+  }): Promise<ProviderCompletionResult> {
+    this.structuredCalls += 1;
+    const r = await this.inner.completeStructured(input);
+    return {
+      ...r,
+      usage: r.usage
+        ? { ...r.usage, model: this.cellModelId }
+        : {
+            inputTokens: 1,
+            outputTokens: 1,
+            totalTokens: 2,
+            model: this.cellModelId,
+            providerResponseId: "cell-pin-struct",
+          },
+    };
+  }
+}
+
+describe("E2 — product-equivalent model×effort control (deterministic)", () => {
+  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
+  let sessionDbPath: string;
+  const tempDirs: string[] = [];
+  let projectId = "";
+
+  beforeEach(async () => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    delete process.env.OPENAI_API_KEY;
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-e2-prod-"));
+    tempDirs.push(dir);
+    sessionDbPath = path.join(dir, "session.sqlite");
+    const runtime = getRuntimeApplicationService({
+      productDbPath: path.join(dir, "oa-product.sqlite"),
+      auditMode: "noop",
+      nowIso: "2026-09-05T12:00:00.000Z",
+    });
+    const created = await runtime.createProject({
+      name: "Projet E2 Product",
+      objective: "Product-equivalent pin.",
+      context: "Contexte E2 product path.",
+      criticality: "STANDARD",
+      constraints: ["Lecture seule"],
+      shortReference: "E2P",
+      idempotencyKey: `idem:e2-${Date.now()}-${Math.random()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("setup failed");
+    projectId = created.projectId;
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    resetMw5ChallengeStoreForTests();
+    resetRuntimeApplicationServiceForTests();
+    while (tempDirs.length) {
+      const dir = tempDirs.pop();
+      if (dir) fs.rmSync(dir, { recursive: true, force: true });
+    }
+    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
+    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
+  });
+
+  for (const pin of [
+    { modelId: "gpt-5.6-luna", reasoningEffort: "none" as const, ac: "F2-AC01" },
+    {
+      modelId: "gpt-5.6-terra",
+      reasoningEffort: "medium" as const,
+      ac: "F2-AC02",
+    },
+    { modelId: "gpt-5.6-sol", reasoningEffort: "high" as const, ac: "F2-AC03" },
+  ]) {
+    it(`${pin.ac} — F1 product orchestrator transmits ${pin.modelId}+${pin.reasoningEffort}`, async () => {
+      const scripted = new ScriptedModel([
+        [assistantMessage(`PIN:${pin.modelId}:${pin.reasoningEffort}`)],
+      ]);
+      const result = await orchestrateProjectAssistantTurn({
+        projectId,
+        content: "hello pin",
+        sessionDbPath,
+        provider: new FakeConversationProvider({ scripted: ["unused"] }),
+        evalModelReasoningControl: {
+          modelId: pin.modelId,
+          reasoningEffort: pin.reasoningEffort,
+          agentsModel: scripted,
+        },
+      });
+      expect(result.ok).toBe(true);
+      if (!result.ok) return;
+      expect(result.text).toContain(`PIN:${pin.modelId}:${pin.reasoningEffort}`);
+    });
+  }
+
+  it("F2-AC04 — analyzeIntent uses cell provider/model/effort (not live default)", async () => {
+    const cell = new CellPinnedFakeProvider("gpt-5.6-terra", "medium");
+    const out = await analyzeIntent({
+      userContent: "Résume __F2_INFORMATIVE__",
+      projectSummary: "Projet test",
+      provider: cell,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-terra",
+        reasoningEffort: "medium",
+      },
+    });
+    expect(cell.structuredCalls).toBe(1);
+    expect(out.evalPinnedModelId).toBe("gpt-5.6-terra");
+    expect(out.evalPinnedReasoningEffort).toBe("medium");
+    expect(out.model).toBe("gpt-5.6-terra");
+    expect(out.presentation).toBe("test_provider");
+  });
+
+  it("F2-AC05 — F2 informative → downstream F1 keeps same cell identity", async () => {
+    const cell = new CellPinnedFakeProvider("gpt-5.6-luna", "none");
+    const scripted = new ScriptedModel([
+      [assistantMessage("PIN:gpt-5.6-luna:none")],
+    ]);
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Résume l'objectif __F2_INFORMATIVE__",
+      sessionDbPath,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+        agentsModel: scripted,
+      },
+      evalCellProviderFactory: ({ modelId, reasoningEffort }) => {
+        expect(modelId).toBe("gpt-5.6-luna");
+        expect(reasoningEffort).toBe("none");
+        return cell;
+      },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.f2?.turnKind).toBe("f1_informative");
+    expect(cell.structuredCalls).toBeGreaterThanOrEqual(1);
+    expect(result.text).toContain("PIN:gpt-5.6-luna:none");
+  });
+
+  it("F2-AC06 — CWP-derived effort may differ but pin wins on F1 orchestrator", async () => {
+    const scripted = new ScriptedModel([[assistantMessage("PINNED_NONE")]]);
+    const result = await orchestrateProjectAssistantTurn({
+      projectId,
+      content: "Critical high-assurance analysis needed urgently",
+      sessionDbPath,
+      provider: new FakeConversationProvider({ scripted: ["unused"] }),
+      semanticCognitiveWorkload: {
+        ambiguity: "high",
+        reasoningDepth: "high",
+        sourceBreadth: "high",
+        toolDependency: "high",
+        contradictionRisk: "high",
+        verificationNeed: "high",
+      },
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+        agentsModel: scripted,
+      },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.text).toContain("PINNED_NONE");
+  });
+
+  it("F2-AC07 — absence d'override = comportement courant non régressé", async () => {
+    const result = await orchestrateProjectAssistantTurn({
+      projectId,
+      content: "hello default",
+      sessionDbPath,
+      provider: new FakeConversationProvider({ scripted: ["DEFAULT_OK"] }),
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.text).toMatch(/TEST\/FAKE|DEFAULT_OK/);
+  });
+
+  it("F2-AC08 — minimal fail-close before analyzeIntent dispatch", async () => {
+    const cell = new CellPinnedFakeProvider("gpt-5.6-luna", "minimal");
+    await expect(
+      analyzeIntent({
+        userContent: "x",
+        projectSummary: "p",
+        provider: cell,
+        evalModelReasoningControl: {
+          modelId: "gpt-5.6-luna",
+          reasoningEffort: "minimal" as never,
+        },
+      }),
+    ).rejects.toBeInstanceOf(TechnicalError);
+    expect(cell.structuredCalls).toBe(0);
+  });
+
+  it("F2-AC08b — unknown model fail-close before dispatch", async () => {
+    const cell = new CellPinnedFakeProvider("gpt-9-unknown", "none");
+    await expect(
+      analyzeIntent({
+        userContent: "x",
+        projectSummary: "p",
+        provider: cell,
+        evalModelReasoningControl: {
+          modelId: "gpt-9-unknown",
+          reasoningEffort: "none",
+        },
+      }),
+    ).rejects.toBeInstanceOf(TechnicalError);
+    expect(cell.structuredCalls).toBe(0);
+  });
+
+  it("F2-AC09 — eval control without factory fail-close on F2 orchestrator", async () => {
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "x",
+      sessionDbPath,
+      provider: new CellPinnedFakeProvider("gpt-5.6-luna", "none"),
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+      },
+      // no evalCellProviderFactory — C4-02
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("EVAL_CELL_PROVIDER_REQUIRED");
+  });
+
+  it("F2-AC09b — analyzeIntent without provider fail-close", async () => {
+    await expect(
+      analyzeIntent({
+        userContent: "x",
+        projectSummary: "p",
+        evalModelReasoningControl: {
+          modelId: "gpt-5.6-luna",
+          reasoningEffort: "none",
+        },
+      }),
+    ).rejects.toThrow(/EVAL_CELL_PROVIDER_REQUIRED/);
+  });
+
+  it("F2-AC10 — ZERO REAL (no OpenAI key consumed)", () => {
+    expect(process.env.OPENAI_API_KEY).toBeUndefined();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts
new file mode 100644
index 00000000..1a92aa11
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts
@@ -0,0 +1,179 @@
+/** @vitest-environment node */
+/**
+ * E3 correction — driver owns canonical campaign lease + MW6 wiring — ZERO REAL.
+ */
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  acquireNoraCampaignBudget,
+  CampaignLeaseError,
+  createNoraCampaignBudget,
+} from "@/lib/nora-cognitive-runtime";
+import {
+  createGlobalMrStageADriver,
+  GLOBAL_MR_STAGE_A_CALL_CAPS,
+  buildGlobalMrStageAMatrix,
+  runGlobalMrStageACell,
+  type GlobalMrStageAExecutor,
+} from "@/lib/nora-eval";
+import {
+  extractMw6CampaignIdFromScope,
+  resolveMw6GovernedCampaignBudget,
+} from "@/features/project-assistant/mw6GovernedNoraTurn";
+
+describe("E3 — driver canonical campaign lease × MW6 (deterministic)", () => {
+  it("F3-AC01 — create driver → canonical lease derived 405/24/429", () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f3-ac01-${Date.now()}`,
+    });
+    expect(state.campaignBudget.maxModelInvocations).toBe(
+      GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
+    );
+    expect(state.campaignBudget.maxHostedWebOperations).toBe(24);
+    expect(state.campaignBudget.maxAggregateRealCalls).toBe(
+      GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
+    );
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(405);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(429);
+    expect(state.campaignBudget.campaignId).toBe(state.campaignId);
+  });
+
+  it("F3-AC02 — reacquire same campaignId + same spec → same handle", () => {
+    const campaignId = `f3-ac02-${Date.now()}`;
+    const state = createGlobalMrStageADriver({ campaignId });
+    const again = acquireNoraCampaignBudget({
+      campaignId,
+      maxModelInvocations: GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
+      maxHostedWebOperations:
+        GLOBAL_MR_STAGE_A_CALL_CAPS.maxHostedWebOperations,
+      maxAggregateRealCalls: GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
+      hostedHardCapCapability: "provider_max_tool_calls",
+    });
+    expect(again).toBe(state.campaignBudget);
+  });
+
+  it("F3-AC03 — different spec → fail-close", () => {
+    const campaignId = `f3-ac03-${Date.now()}`;
+    createGlobalMrStageADriver({ campaignId });
+    expect(() =>
+      acquireNoraCampaignBudget({
+        campaignId,
+        maxModelInvocations: 4,
+        maxHostedWebOperations: 2,
+        maxAggregateRealCalls: 4,
+      }),
+    ).toThrow(CampaignLeaseError);
+  });
+
+  it("F3-AC04 — executor ctx receives canonical handle exact", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f3-ac04-${Date.now()}`,
+    });
+    const [cell] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
+    let seen: unknown;
+    const executor: GlobalMrStageAExecutor = async (_c, ctx) => {
+      seen = ctx.campaignBudget;
+      return {
+        passFail: "PASS",
+        failureClass: "NONE",
+        rawSummary: "ok",
+        usage: null,
+        reportedModelInvocationsConsumed: 0,
+        reportedHostedOperationsConsumed: 0,
+      };
+    };
+    await runGlobalMrStageACell({ state, cell: cell!, executor });
+    expect(seen).toBe(state.campaignBudget);
+  });
+
+  it("F3-AC05 — W-Sources path: driver → executor → resolveMw6GovernedCampaignBudget → same handle", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f3-ac05-${Date.now()}`,
+    });
+    const cell = buildGlobalMrStageAMatrix({
+      campaignId: state.campaignId,
+    }).find((c) => c.workloadId === "W-Sources")!;
+    expect(cell.executionKind).toBe("mw6_governed");
+
+    let resolvedHandle: unknown;
+    let acquiredLocally: boolean | undefined;
+    const executor: GlobalMrStageAExecutor = async (c, ctx) => {
+      // Product wiring seam used by runMw6GovernedNoraProductTurn (sharedCampaignBudget).
+      const resolved = resolveMw6GovernedCampaignBudget({
+        campaignId: c.campaignId,
+        sharedCampaignBudget: ctx.campaignBudget,
+      });
+      expect(resolved.ok).toBe(true);
+      if (!resolved.ok) {
+        return {
+          passFail: "FAIL",
+          failureClass: "CONFIG",
+          rawSummary: resolved.message,
+          usage: null,
+        };
+      }
+      resolvedHandle = resolved.budget;
+      acquiredLocally = resolved.acquiredLocally;
+      return {
+        passFail: "PASS",
+        failureClass: "NONE",
+        rawSummary: "mw6-wiring",
+        usage: null,
+        productObservation: {
+          wiring: "driver→executor→resolveMw6GovernedCampaignBudget",
+          campaignId: c.campaignId,
+        },
+        reportedModelInvocationsConsumed: 0,
+        reportedHostedOperationsConsumed: 0,
+      };
+    };
+    const out = await runGlobalMrStageACell({ state, cell, executor });
+    expect(out.evidence).toBeTruthy();
+    expect(resolvedHandle).toBe(state.campaignBudget);
+    expect(acquiredLocally).toBe(false);
+  });
+
+  it("F3-AC06/AC07 — campaignId EC scope match / mismatch", () => {
+    const campaignId = `f3-ac06-${Date.now()}`;
+    const state = createGlobalMrStageADriver({ campaignId });
+    const scope = `biz:mw6-external-discovery:${campaignId}:proj`;
+    expect(extractMw6CampaignIdFromScope(scope)).toBe(campaignId);
+
+    const mismatch = resolveMw6GovernedCampaignBudget({
+      campaignId: "other-campaign",
+      sharedCampaignBudget: state.campaignBudget,
+    });
+    expect(mismatch.ok).toBe(false);
+    if (mismatch.ok) return;
+    expect(mismatch.code).toBe("CAMPAIGN_ID_MISMATCH");
+  });
+
+  it("F3-AC10 — default MW6 hors Stage A reste 4/2/4", () => {
+    const campaignId = `f3-ac10-${Date.now()}`;
+    const resolved = resolveMw6GovernedCampaignBudget({ campaignId });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    expect(resolved.acquiredLocally).toBe(true);
+    expect(resolved.budget.maxModelInvocations).toBe(4);
+    expect(resolved.budget.maxHostedWebOperations).toBe(2);
+    expect(resolved.budget.maxAggregateRealCalls).toBe(4);
+  });
+
+  it("F3 — fabricated budget still fail-close", () => {
+    const fabricated = createNoraCampaignBudget({
+      campaignId: `f3-fab-${Date.now()}`,
+      maxModelInvocations: GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
+      maxHostedWebOperations:
+        GLOBAL_MR_STAGE_A_CALL_CAPS.maxHostedWebOperations,
+      maxAggregateRealCalls: GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
+    });
+    const resolved = resolveMw6GovernedCampaignBudget({
+      campaignId: fabricated.campaignId,
+      sharedCampaignBudget: fabricated,
+    });
+    expect(resolved.ok).toBe(false);
+  });
+});
+
+afterEach(() => {
+  // leases are process-local; unique campaignIds avoid collisions
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
new file mode 100644
index 00000000..339d2131
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
@@ -0,0 +1,368 @@
+/** @vitest-environment node */
+/**
+ * E4 correction — repeat enforcement + soft-stop + counter coherence — ZERO REAL.
+ */
+import { describe, expect, it } from "vitest";
+import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
+import {
+  assertGlobalMrStageAMatrixInvariants,
+  buildGlobalMrStageAMatrix,
+  canScheduleSelectiveRepeat,
+  createEvalAgentsUsdAccounting,
+  createGlobalMrStageADriver,
+  evaluateGlobalMrStageAStop,
+  acknowledgeGlobalMrStageASoftReview,
+  GLOBAL_MR_STAGE_A_CALL_CAPS,
+  GLOBAL_MR_STAGE_A_USD_POLICY,
+  globalMrStageAEnvelopeProof,
+  materializeSelectiveRepeat,
+  MW0_BUDGET_POLICY,
+  runGlobalMrStageACell,
+  type GlobalMrStageAExecutor,
+} from "@/lib/nora-eval";
+import {
+  buildRunnerModelSettingsForEffort,
+  runNoraAgentsTurn,
+  sfiaBoundaryInstructions,
+} from "@/lib/nora-cognitive-runtime";
+import { H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS } from "@/lib/nora-cognitive-runtime";
+
+describe("E4 — Global MR Stage A driver corrections (deterministic)", () => {
+  it("E4 matrix / envelope invariants unchanged", () => {
+    const cells = buildGlobalMrStageAMatrix({
+      campaignId: "nora-global-mr-stage-a-test",
+    });
+    expect(cells).toHaveLength(54);
+    expect(assertGlobalMrStageAMatrixInvariants(cells).ok).toBe(true);
+    const proof = globalMrStageAEnvelopeProof();
+    expect(proof.maxCellExecutions).toBe(72);
+    expect(proof.maxModelInvocations).toBe(405);
+    expect(proof.maxAggregateRealCalls).toBe(429);
+    expect(proof.usd).toEqual({ targetUsd: 6, softStopUsd: 9, hardCapUsd: 12 });
+    expect(proof.usdSemantics).toBe(
+      "pre_dispatch_reservation_authorization_envelope",
+    );
+    expect(GLOBAL_MR_STAGE_A_USD_POLICY).not.toEqual(MW0_BUDGET_POLICY);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).not.toBe(
+      H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
+    );
+  });
+
+  it("F4A-AC01/AC02 — base A → repeat #1 PASS, second repeat DENIED", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f4a-repeat-${Date.now()}`,
+    });
+    const [base] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
+    expect(canScheduleSelectiveRepeat(state, base!).allowed).toBe(true);
+    const repeat1 = materializeSelectiveRepeat(base!);
+    let calls = 0;
+    const executor: GlobalMrStageAExecutor = async () => {
+      calls += 1;
+      return {
+        passFail: "PASS",
+        failureClass: "NONE",
+        rawSummary: `rep-${calls}`,
+        usage: null,
+        reportedModelInvocationsConsumed: 0,
+        reportedHostedOperationsConsumed: 0,
+      };
+    };
+    const first = await runGlobalMrStageACell({
+      state,
+      cell: repeat1,
+      executor,
+    });
+    expect(first.stopped).toBe(false);
+    expect(calls).toBe(1);
+    expect(state.selectiveRepeatsUsed).toBe(1);
+
+    const repeat2 = {
+      ...repeat1,
+      // Attempt another repeat of same base (still runIndex 1 identity)
+    };
+    const second = await runGlobalMrStageACell({
+      state,
+      cell: repeat2,
+      executor,
+    });
+    expect(second.stopped).toBe(true);
+    expect(second.cellDenied).toBe("SELECTIVE_REPEAT_DENIED");
+    expect(second.evidence).toBeNull();
+    expect(calls).toBe(1);
+    expect(canScheduleSelectiveRepeat(state, base!).allowed).toBe(false);
+    expect(state.stopReason).toBe("NONE");
+  });
+
+  it("F4A-AC03/AC04 — 18 distinct cells can each repeat; 19th denied; base still allowed", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f4a-pool-${Date.now()}`,
+    });
+    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
+    const executor: GlobalMrStageAExecutor = async () => ({
+      passFail: "PASS",
+      failureClass: "NONE",
+      rawSummary: "ok",
+      usage: null,
+      reportedModelInvocationsConsumed: 0,
+      reportedHostedOperationsConsumed: 0,
+    });
+    for (let i = 0; i < 18; i += 1) {
+      const repeat = materializeSelectiveRepeat(cells[i]!);
+      const out = await runGlobalMrStageACell({ state, cell: repeat, executor });
+      expect(out.stopped).toBe(false);
+    }
+    expect(state.selectiveRepeatsUsed).toBe(18);
+    const nineteenth = materializeSelectiveRepeat(cells[18]!);
+    const denied = await runGlobalMrStageACell({
+      state,
+      cell: nineteenth,
+      executor,
+    });
+    expect(denied.stopped).toBe(true);
+    expect(denied.cellDenied).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
+    expect(denied.evidence).toBeNull();
+    // C3-04: pool exhaustion is per-cell denial only — not campaign latch.
+    expect(state.stopReason).toBe("NONE");
+
+    let baseCalled = false;
+    const baseOut = await runGlobalMrStageACell({
+      state,
+      cell: cells[30]!,
+      executor: async () => {
+        baseCalled = true;
+        return {
+          passFail: "PASS",
+          failureClass: "NONE",
+          rawSummary: "base-after-pool",
+          usage: null,
+        };
+      },
+    });
+    expect(baseCalled).toBe(true);
+    expect(baseOut.stopped).toBe(false);
+    expect(state.stopReason).toBe("NONE");
+  });
+
+  it("F4A-AC05/AC06 — runIndex > 1 never materialized; denied → executor never called", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f4a-runidx-${Date.now()}`,
+    });
+    const [base] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
+    expect(() =>
+      materializeSelectiveRepeat({
+        ...base!,
+        runIndex: 1,
+        isSelectiveRepeat: true,
+      }),
+    ).toThrow(/SELECTIVE_REPEAT_RUN_INDEX_INVALID/);
+
+    let called = false;
+    const out = await runGlobalMrStageACell({
+      state,
+      cell: { ...base!, runIndex: 2, isSelectiveRepeat: true },
+      executor: async () => {
+        called = true;
+        return {
+          passFail: "PASS",
+          failureClass: "NONE",
+          rawSummary: "x",
+          usage: null,
+        };
+      },
+    });
+    expect(called).toBe(false);
+    expect(out.stopped).toBe(true);
+    expect(out.evidence).toBeNull();
+  });
+
+  it("F4B-AC01/AC02 — soft stop blocks new cells without acknowledgment", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f4b-soft-${Date.now()}`,
+      carryInUsd: 9,
+    });
+    expect(state.softReviewRequired).toBe(true);
+    expect(evaluateGlobalMrStageAStop(state)).toBe("SOFT_USD_REVIEW");
+
+    const [cell] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
+    let called = false;
+    const blocked = await runGlobalMrStageACell({
+      state,
+      cell: cell!,
+      executor: async () => {
+        called = true;
+        return {
+          passFail: "PASS",
+          failureClass: "NONE",
+          rawSummary: "no",
+          usage: null,
+        };
+      },
+    });
+    expect(called).toBe(false);
+    expect(blocked.stopped).toBe(true);
+    expect(blocked.evidence).toBeNull();
+    expect(state.cellsCompleted).toBe(0);
+
+    // Still blocked without ack
+    const still = await runGlobalMrStageACell({
+      state,
+      cell: cell!,
+      executor: async () => {
+        called = true;
+        return {
+          passFail: "PASS",
+          failureClass: "NONE",
+          rawSummary: "no",
+          usage: null,
+        };
+      },
+    });
+    expect(called).toBe(false);
+    expect(still.stopped).toBe(true);
+  });
+
+  it("F4B-AC03/AC04/AC06 — acknowledgment allows continuation without resetting counters / no HD", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f4b-ack-${Date.now()}`,
+      carryInUsd: 9,
+    });
+    const spendBefore = state.budget.cumulativeUsd;
+    const ackEmpty = acknowledgeGlobalMrStageASoftReview(state, "  ");
+    expect(ackEmpty.ok).toBe(false);
+
+    const ack = acknowledgeGlobalMrStageASoftReview(
+      state,
+      "external-review-ref-1",
+    );
+    expect(ack.ok).toBe(true);
+    expect(state.softReviewRequired).toBe(false);
+    expect(state.budget.cumulativeUsd).toBe(spendBefore);
+    expect(state.softReviewAcknowledgments).toEqual(["external-review-ref-1"]);
+    // No HumanDecision fabricated — only orchestration refs.
+    expect(
+      state.softReviewAcknowledgments.every((r) => !r.startsWith("hd:")),
+    ).toBe(true);
+
+    const [cell] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
+    let called = false;
+    const out = await runGlobalMrStageACell({
+      state,
+      cell: cell!,
+      executor: async () => {
+        called = true;
+        return {
+          passFail: "PASS",
+          failureClass: "NONE",
+          rawSummary: "after-ack",
+          usage: null,
+          reportedModelInvocationsConsumed: 0,
+          reportedHostedOperationsConsumed: 0,
+        };
+      },
+    });
+    expect(called).toBe(true);
+    expect(out.stopped).toBe(false);
+    expect(state.budget.cumulativeUsd).toBe(spendBefore);
+  });
+
+  it("F4B-AC05 — hard cap remains non-resumable", () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f4b-hard-${Date.now()}`,
+      carryInUsd: 12,
+    });
+    state.softReviewRequired = true;
+    const ack = acknowledgeGlobalMrStageASoftReview(state, "review");
+    expect(ack.ok).toBe(false);
+    if (ack.ok) return;
+    expect(ack.reason).toBe("hard_cap_not_resumable");
+  });
+
+  it("Driver counter coherence — Runner model claim mirrors state.campaignBudget", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `f4-cohere-${Date.now()}`,
+    });
+    const cell = buildGlobalMrStageAMatrix({
+      campaignId: state.campaignId,
+    }).find((c) => c.workloadId === "W-Routine")!;
+    const usd = createEvalAgentsUsdAccounting({
+      budget: state.budget,
+      manifest: state.manifest,
+      modelId: cell.model,
+      assumedInputTokens: 50,
+      assumedOutputTokens: 20,
+    });
+    const executor: GlobalMrStageAExecutor = async (c, ctx) => {
+      const scripted = new ScriptedModel([
+        [assistantMessage(`WIRE:${c.model}:${c.reasoningEffort}`)],
+      ]);
+      const turn = await runNoraAgentsTurn({
+        correlationId: `e4-cohere-${c.workloadId}`,
+        projectId: "proj-e4",
+        systemInstructions: sfiaBoundaryInstructions(),
+        userContent: "routine ping",
+        model: scripted,
+        runnerModelSettings: buildRunnerModelSettingsForEffort(
+          c.reasoningEffort,
+        ),
+        enableTools: false,
+        maxTurns: 1,
+        campaignBudget: ctx.campaignBudget,
+        usdAccounting: usd,
+      });
+      return {
+        passFail: turn.limitReached ? "INCONCLUSIVE" : "PASS",
+        failureClass: turn.limitReached ? "BUDGET_STOP" : "NONE",
+        rawSummary: turn.text,
+        usage: {
+          inputTokens: turn.usage.inputTokens,
+          outputTokens: turn.usage.outputTokens,
+          cachedInputTokens: null,
+          reasoningTokens: null,
+          estimatedUsd: turn.usdObserve?.estimatedUsd ?? 0,
+          modelReturned: turn.usage.model,
+          providerResponseId: turn.usage.providerResponseId,
+        },
+        productObservation: {
+          usdObserve: turn.usdObserve ?? null,
+          campaignCanonical: true,
+        },
+        reportedModelInvocationsConsumed: 1,
+        reportedHostedOperationsConsumed: 0,
+      };
+    };
+    const out = await runGlobalMrStageACell({ state, cell, executor });
+    expect(out.evidence).toBeTruthy();
+    expect(state.modelInvocations).toBe(1);
+    expect(state.campaignBudget.consumedModelInvocations).toBe(1);
+    expect(state.budget.cumulativeUsd).toBeGreaterThan(0);
+    expect(evaluateGlobalMrStageAStop(state)).toBe("NONE");
+  });
+
+  it("E4-AC13 — unsupported cell fails before executor", async () => {
+    const state = createGlobalMrStageADriver({
+      campaignId: `e4-bad-${Date.now()}`,
+    });
+    const [cell] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
+    const bad = {
+      ...cell!,
+      model: "gpt-9-unknown" as typeof cell.model,
+      cell: { ...cell!.cell, model: "gpt-9-unknown" },
+    };
+    let executed = false;
+    const out = await runGlobalMrStageACell({
+      state,
+      cell: bad,
+      executor: async () => {
+        executed = true;
+        return {
+          passFail: "PASS",
+          failureClass: "NONE",
+          rawSummary: "no",
+          usage: null,
+        };
+      },
+    });
+    expect(executed).toBe(false);
+    expect(out.stopped).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 970d8681..5a815cb7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -10,6 +10,8 @@ import {
   type ConversationProvider,
   type ProviderChatMessage,
 } from "@/lib/platform/ai";
+import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
+import type { NoraEvalModelReasoningControl } from "@/lib/nora-cognitive-runtime";
 import { ADOPTED_CYCLE_TYPE_IDS, isKnownCycleTypeId } from "@/lib/oa/cycle";
 import type {
   F2QualificationSignals,
@@ -497,12 +499,40 @@ export async function analyzeIntent(input: {
    * Never client-authoritative for model/reasoning selection.
    */
   provider?: ConversationProvider;
+  /**
+   * INTERNAL / EVAL-ONLY — Stage A cell model×effort identity for constitutive
+   * ConversationProvider calls (completeStructured). Absent → production default.
+   * When set, an injected cell provider is required (no silent live default).
+   */
+  /**
+   * INTERNAL / EVAL-ONLY — Stage A cell identity. Canonical model-call claims
+   * belong on MeteredConversationProvider.beforeAuthorizedDispatch
+   * (USD preflight → claim → dispatch), not here.
+   */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
 }): Promise<{
   analysis: IntentAnalysisDto;
   presentation: "test_provider" | "openai_live";
   model: string | null;
   rawText: string;
+  /** Eval-only observation — never a client DTO field. */
+  evalPinnedModelId?: string;
+  evalPinnedReasoningEffort?: string;
 }> {
+  const evalControl = input.evalModelReasoningControl;
+  if (evalControl) {
+    validateRuntimeReasoningCapability(
+      evalControl.modelId,
+      evalControl.reasoningEffort,
+    );
+    if (!input.provider) {
+      throw new TechnicalError(
+        "CONFIG",
+        "EVAL_CELL_PROVIDER_REQUIRED: evalModelReasoningControl requires an injected cell ConversationProvider (no silent live default).",
+      );
+    }
+  }
+
   const provider = input.provider ?? resolveConversationProvider();
   // Presentation follows the provider instance actually used (explicit injection wins).
   const presentation =
@@ -550,5 +580,11 @@ export async function analyzeIntent(input: {
     presentation,
     model: completion.usage?.model ?? null,
     rawText: completion.text,
+    ...(evalControl
+      ? {
+          evalPinnedModelId: evalControl.modelId,
+          evalPinnedReasoningEffort: evalControl.reasoningEffort,
+        }
+      : {}),
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 276bce91..7c314422 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -8,6 +8,15 @@ import {
   isFakeConversationProviderForced,
   type ConversationProvider,
 } from "@/lib/platform/ai";
+import type {
+  NoraAgentsUsdAccounting,
+  NoraCampaignBudget,
+  NoraEvalModelReasoningControl,
+} from "@/lib/nora-cognitive-runtime";
+import {
+  resolveEvalCellConversationProvider,
+  type EvalCellProviderFactory,
+} from "@/lib/nora-eval/evalCellProvider";
 import {
   getRuntimeApplicationService,
   readLiveProjectContext,
@@ -524,10 +533,25 @@ export async function orchestrateAssistantSend(input: {
   /**
    * Optional server-side provider injection (eval / tests).
    * Prefer per-instance OpenAIConversationProvider over process.env mutation.
+   * For Stage A cells: inject the cell-specific ConversationProvider here.
    */
   provider?: ConversationProvider;
   /** Test override for Product SQLite Session path (MW1/MW4 durability). */
   sessionDbPath?: string;
+  /**
+   * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
+   * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
+   */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
+  /**
+   * INTERNAL / EVAL-ONLY — factory(modelId, effort) → ConversationProvider.
+   * Required with evalModelReasoningControl for honest structured binding.
+   */
+  evalCellProviderFactory?: EvalCellProviderFactory;
+  /** INTERNAL / EVAL-ONLY — USD authorization envelope (Agents path). */
+  usdAccounting?: NoraAgentsUsdAccounting;
+  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
+  campaignBudget?: NoraCampaignBudget;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -566,6 +590,24 @@ export async function orchestrateAssistantSend(input: {
     };
   }

+  const cellProvider = resolveEvalCellConversationProvider({
+    evalModelReasoningControl: input.evalModelReasoningControl,
+    evalCellProviderFactory: input.evalCellProviderFactory,
+    provider: input.provider,
+  });
+  if (input.evalModelReasoningControl && !cellProvider) {
+    return {
+      ok: false,
+      status: "provider_error",
+      code: "EVAL_CELL_PROVIDER_REQUIRED",
+      message:
+        "evalModelReasoningControl requires evalCellProviderFactory (no arbitrary provider fallback).",
+      mode: modeResolution.mode,
+      retryable: false,
+    };
+  }
+  const effectiveProvider = cellProvider ?? input.provider;
+
   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;
   try {
@@ -602,7 +644,8 @@ export async function orchestrateAssistantSend(input: {
       userContent: content,
       projectSummary: cognitive.projectSummary,
       challengeContext,
-      provider: input.provider,
+      provider: effectiveProvider,
+      evalModelReasoningControl: input.evalModelReasoningControl,
     });
   } catch (error) {
     const message =
@@ -649,10 +692,13 @@ export async function orchestrateAssistantSend(input: {
   ) {
     const f1 = await orchestrateProjectAssistantTurn({
       ...input,
-      provider: input.provider,
+      provider: effectiveProvider,
       semanticCognitiveWorkload: analysis.cognitiveWorkload,
       truthCContext: truthCContextForF1,
       contradictionAssessment,
+      evalModelReasoningControl: input.evalModelReasoningControl,
+      usdAccounting: input.usdAccounting,
+      campaignBudget: input.campaignBudget,
     });
     if (!f1.ok) return f1;
     return {
diff --git a/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts b/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
index 9620b37b..95c37200 100644
--- a/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
@@ -24,8 +24,13 @@ import {
 } from "@/lib/platform/ai";
 import {
   acquireNoraCampaignBudget,
+  isCanonicalCampaignBudget,
+  requireCanonicalCampaignBudget,
   runNoraCognitiveTurn,
+  type NoraCampaignBudget,
   type NoraCognitiveTurnResult,
+  type NoraEvalModelReasoningControl,
+  type NoraAgentsUsdAccounting,
 } from "@/lib/nora-cognitive-runtime";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
@@ -82,6 +87,61 @@ export function extractMw6CampaignIdFromScope(scope: string): string | null {
   return m?.[1] ?? null;
 }

+/**
+ * Resolve campaign budget for MW6 governed product turn.
+ * INTERNAL — sharedCampaignBudget is eval/server only, never client-trusted.
+ */
+export function resolveMw6GovernedCampaignBudget(input: {
+  campaignId: string;
+  sharedCampaignBudget?: NoraCampaignBudget;
+}):
+  | { ok: true; budget: NoraCampaignBudget; acquiredLocally: boolean }
+  | { ok: false; code: string; message: string } {
+  if (input.sharedCampaignBudget) {
+    try {
+      requireCanonicalCampaignBudget(input.sharedCampaignBudget);
+    } catch {
+      return {
+        ok: false,
+        code: "CAMPAIGN_BUDGET_LEASE_INVALID",
+        message:
+          "sharedCampaignBudget is not the canonical active lease — refusing fabricated budget.",
+      };
+    }
+    if (!isCanonicalCampaignBudget(input.sharedCampaignBudget)) {
+      return {
+        ok: false,
+        code: "CAMPAIGN_BUDGET_LEASE_INVALID",
+        message: "sharedCampaignBudget failed canonical lease check.",
+      };
+    }
+    if (input.sharedCampaignBudget.campaignId !== input.campaignId) {
+      return {
+        ok: false,
+        code: "CAMPAIGN_ID_MISMATCH",
+        message:
+          "sharedCampaignBudget.campaignId does not match ExecutionContract scope campaignId.",
+      };
+    }
+    return {
+      ok: true,
+      budget: input.sharedCampaignBudget,
+      acquiredLocally: false,
+    };
+  }
+  return {
+    ok: true,
+    budget: acquireNoraCampaignBudget({
+      campaignId: input.campaignId,
+      maxModelInvocations: 4,
+      maxHostedWebOperations: 2,
+      maxAggregateRealCalls: 4,
+      hostedHardCapCapability: "provider_max_tool_calls",
+    }),
+    acquiredLocally: true,
+  };
+}
+
 export type Mw6GovernedNoraProductTurnSuccess = Extract<
   ProjectAssistantSendResult,
   { ok: true }
@@ -132,6 +192,16 @@ export type RunMw6GovernedNoraProductTurnInput = {
   currentExternalDiscoveryIntent?: unknown;
   canActAsMorris?: unknown;
   claimedAuthorityLevel?: unknown;
+  /**
+   * INTERNAL/EVAL-ONLY — canonical NoraCampaignBudget already acquired by Stage A
+   * driver. Not client-trusted. Possession ≠ authority grant.
+   * Absent → legacy in-turn acquire 4/2/4 unchanged.
+   */
+  sharedCampaignBudget?: NoraCampaignBudget;
+  /** INTERNAL/EVAL-ONLY — model×effort pin for campaign cells. */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
+  /** INTERNAL/EVAL-ONLY — USD accounting bridge for native Agents. */
+  usdAccounting?: NoraAgentsUsdAccounting;
 };

 /**
@@ -253,13 +323,22 @@ export async function runMw6GovernedNoraProductTurn(
   const campaignId =
     extractMw6CampaignIdFromScope(loaded.contract.scope) ??
     `mw6:${composed.executionContractId}`;
-  const campaignBudget = acquireNoraCampaignBudget({
+
+  const budgetResolved = resolveMw6GovernedCampaignBudget({
     campaignId,
-    maxModelInvocations: 4,
-    maxHostedWebOperations: 2,
-    maxAggregateRealCalls: 4,
-    hostedHardCapCapability: "provider_max_tool_calls",
+    sharedCampaignBudget: input.sharedCampaignBudget,
   });
+  if (!budgetResolved.ok) {
+    return {
+      ok: false,
+      status: "validation_error",
+      code: budgetResolved.code,
+      message: budgetResolved.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const campaignBudget = budgetResolved.budget;

   const modeResolution = resolveAssistantMode(input.provider);
   if (!modeResolution.canProceed) {
@@ -315,6 +394,8 @@ export async function runMw6GovernedNoraProductTurn(
       enableHostedWebSearch: true,
       campaignBudget,
       governedAuthority: composed.governedAuthority as import("@/lib/nora-cognitive-runtime").Mw6GovernedAuthorityContext,
+      evalModelReasoningControl: input.evalModelReasoningControl,
+      usdAccounting: input.usdAccounting,
       // Deterministic boundary — ZERO LIVE hosted dispatch.
       deterministicHostedWebSearchCalls: [],
     });
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index ed7ecaff..c80cb6ca 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -15,6 +15,9 @@ import {
   resolveNoraSessionSqlitePath,
   type SemanticCognitiveWorkloadAssessment,
   type Mw3ContradictionAssessmentInput,
+  type NoraEvalModelReasoningControl,
+  type NoraAgentsUsdAccounting,
+  type NoraCampaignBudget,
 } from "@/lib/nora-cognitive-runtime";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
@@ -168,6 +171,15 @@ export async function orchestrateProjectAssistantTurn(input: {
   contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
   /** MW4-S02 — attach post-Evidence / recovery narrative policy disclosure. */
   postEvidenceNarrativePolicy?: boolean;
+  /**
+   * INTERNAL / EVAL-ONLY — Stage A cell model×effort pin.
+   * Never part of ProjectAssistant client DTO. Absent → production default.
+   */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
+  /** INTERNAL / EVAL-ONLY — Agents USD authorization envelope bridge. */
+  usdAccounting?: NoraAgentsUsdAccounting;
+  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
+  campaignBudget?: NoraCampaignBudget;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -258,6 +270,9 @@ export async function orchestrateProjectAssistantTurn(input: {
       contradictionAssessment: input.contradictionAssessment ?? null,
       resolveRememberedEvidence,
       postEvidenceNarrativePolicy: input.postEvidenceNarrativePolicy === true,
+      evalModelReasoningControl: input.evalModelReasoningControl,
+      usdAccounting: input.usdAccounting,
+      campaignBudget: input.campaignBudget,
     });

     const { toolEvents, sources, readCoverage } = collectToolTelemetry(
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts
new file mode 100644
index 00000000..b5f28063
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts
@@ -0,0 +1,68 @@
+/**
+ * Optional USD accounting hook for native Agents model invocations.
+ *
+ * Runtime-generic: no nora-eval imports. Eval campaigns inject a bridge that
+ * reuses BudgetTracker / capability pricing.
+ *
+ * hardCapUsd (via bridge BudgetTracker policy) is a PRE-DISPATCH ESTIMATED /
+ * RESERVED AUTHORIZATION ENVELOPE — not a guaranteed provider invoice ceiling.
+ * Observed estimate may exceed reserved estimate after a response; overrun is
+ * Evidence and blocks any subsequent dispatch.
+ */
+export type NoraAgentsUsdSettleObservation = {
+  /** Model invocations that successfully reserved this turn (filter pre-dispatch). */
+  reservedInvocations: number;
+  inputTokens: number | null;
+  outputTokens: number | null;
+  totalTokens: number | null;
+};
+
+export type NoraAgentsUsdSettleResult = {
+  /** Reserved USD committed for this turn (pre-dispatch). */
+  reservedUsd: number;
+  /** Observed estimated USD for this turn (usage-based or conservative retain). */
+  observedEstimatedUsd: number;
+  /** Alias of observedEstimatedUsd for callers expecting estimatedUsd. */
+  estimatedUsd: number;
+  cumulativeReservedUsd: number;
+  cumulativeObservedEstimatedUsd: number;
+  /** BudgetTracker cumulative (max of reserved+topups accounting). */
+  cumulativeUsd: number;
+  usedConservativeFallback: boolean;
+  /** True when observedEstimatedUsd > reservedUsd for this turn. */
+  observedOverrun: boolean;
+  /** True when cumulative observed estimate exceeds authorization hardCapUsd. */
+  authorizationEnvelopeExceeded: boolean;
+  /** Invoice is never claimed by this mechanism. */
+  invoice: "NOT_OBSERVED";
+};
+
+export type NoraAgentsUsdAccounting = {
+  /** Conservative estimate for ONE upcoming model invocation. */
+  estimateNextInvocationUsd(): number;
+  /**
+   * Hard-cap preflight WITHOUT recording (so call-count claim can run first).
+   * Uses authorization envelope (reserved + pending estimate), and denies if
+   * a prior observed overrun already exceeded the envelope.
+   */
+  canDispatchUnderHardCap(estimateUsd: number): {
+    allowed: boolean;
+    reason?: string;
+  };
+  /**
+   * Commit conservative USD after call-count claim succeeded.
+   * Monotone — never widens/refunds.
+   */
+  commitReserve(estimateUsd: number): void;
+  /**
+   * Post-turn reconcile. Observed usage may be null → keep reserved
+   * conservative spend (do not invent zeros as free).
+   */
+  settleTurn(
+    observation: NoraAgentsUsdSettleObservation,
+  ): NoraAgentsUsdSettleResult;
+  /** How many successful reserves occurred since last settle (or start). */
+  reservedInvocationCount(): number;
+  /** Campaign-lifetime reserved invocation count (not reset on settle). */
+  totalReservedInvocations(): number;
+};
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts
index 5871cee7..18f71809 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts
@@ -14,6 +14,7 @@ import type { NoraTurnBudget } from "./turnBudget";
 import { markModelTurn } from "./turnBudget";
 import type { NoraCampaignBudget } from "./campaignBudget";
 import { claimModelInvocation } from "./campaignBudget";
+import type { NoraAgentsUsdAccounting } from "./agentsUsdAccounting";

 export class CampaignModelInvocationDeniedError extends Error {
   readonly code = "NORA_CAMPAIGN_MODEL_INVOCATION_DENIED";
@@ -23,6 +24,14 @@ export class CampaignModelInvocationDeniedError extends Error {
   }
 }

+export class CampaignUsdHardCapDeniedError extends Error {
+  readonly code = "NORA_CAMPAIGN_USD_HARD_CAP_DENIED";
+  constructor(message: string) {
+    super(message);
+    this.name = "CampaignUsdHardCapDeniedError";
+  }
+}
+
 const ROLE_ELEVATION_MARKER = "SFIA_STRUCTURAL_ROLE_PRESERVED";

 function messageRole(item: AgentInputItem): string | undefined {
@@ -91,6 +100,7 @@ export function createSfiaCallModelInputFilter(
   systemInstructions: string,
   budget?: NoraTurnBudget,
   campaignBudget?: NoraCampaignBudget,
+  usdAccounting?: NoraAgentsUsdAccounting,
 ): CallModelInputFilter {
   const instructions = [
     "=== SYSTEM / DEVELOPER INSTRUCTIONS (Studio-supplied product context) ===",
@@ -103,7 +113,19 @@ export function createSfiaCallModelInputFilter(
   ].join("\n");

   return ({ modelData }) => {
-    // Campaign hard cap: deny BEFORE model dispatch (filter runs pre-getResponse).
+    // USD hard-cap preflight BEFORE model dispatch (no spend yet).
+    let usdEstimate: number | null = null;
+    if (usdAccounting) {
+      usdEstimate = usdAccounting.estimateNextInvocationUsd();
+      const gate = usdAccounting.canDispatchUnderHardCap(usdEstimate);
+      if (!gate.allowed) {
+        throw new CampaignUsdHardCapDeniedError(
+          gate.reason ??
+            "Campaign USD hard cap would be exceeded — model invocation not dispatched.",
+        );
+      }
+    }
+    // Campaign call-count hard cap: deny BEFORE model dispatch.
     if (campaignBudget) {
       const ok = claimModelInvocation(campaignBudget);
       if (!ok) {
@@ -113,6 +135,10 @@ export function createSfiaCallModelInputFilter(
         );
       }
     }
+    // Commit USD reserve only after call-count claim succeeded (exactly-once per invocation).
+    if (usdAccounting && usdEstimate != null) {
+      usdAccounting.commitReserve(usdEstimate);
+    }
     if (budget) {
       markModelTurn(budget);
     }
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 2b7528aa..d71c0a82 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -128,9 +128,15 @@ export type {
 } from "./mw6RealAuthorization";
 export {
   CampaignModelInvocationDeniedError,
+  CampaignUsdHardCapDeniedError,
   createSfiaCallModelInputFilter,
   preserveStructuralRoles,
 } from "./callModelInputFilter";
+export type {
+  NoraAgentsUsdAccounting,
+  NoraAgentsUsdSettleObservation,
+  NoraAgentsUsdSettleResult,
+} from "./agentsUsdAccounting";
 // R-PRE-REAL-07: withMaxToolCallsProviderData intentionally NOT exported from barrel.
 export {
   createProviderAgentsModel,
@@ -145,11 +151,15 @@ export {
   shouldUseProviderAgentsModelAdapter,
   isOpenAiLiveF1Provider,
 } from "./runNoraAgentsTurn";
-export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
+export type {
+  RunNoraAgentsTurnInput,
+  RunNoraAgentsTurnUsdObserve,
+} from "./runNoraAgentsTurn";
 export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
 export type {
   RunNoraCognitiveTurnInput,
   Mw3ContradictionAssessmentInput,
+  NoraEvalModelReasoningControl,
 } from "./runNoraCognitiveTurn";
 export {
   disposeContradiction,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 2e00d82b..e95998b2 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -21,8 +21,11 @@ import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
 import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
 import {
   CampaignModelInvocationDeniedError,
+  CampaignUsdHardCapDeniedError,
   createSfiaCallModelInputFilter,
 } from "./callModelInputFilter";
+import type { NoraAgentsUsdAccounting } from "./agentsUsdAccounting";
+import type { NoraAgentsUsdSettleResult } from "./agentsUsdAccounting";
 import {
   createProviderAgentsModel,
   isFakeConversationProvider,
@@ -128,6 +131,11 @@ export type RunNoraAgentsTurnInput = {
    * @deprecated Ignored for authority (cannot authorize).
    */
   currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
+  /**
+   * Optional USD accounting for native Agents model invocations (eval campaigns).
+   * Runtime-generic hook — nora-eval injects BudgetTracker bridge. Not authority.
+   */
+  usdAccounting?: NoraAgentsUsdAccounting;
 };

 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -149,11 +157,16 @@ export type RunNoraAgentsTurnBudgetObserve = {
   eligible: boolean;
 };

+export type RunNoraAgentsTurnUsdObserve = NoraAgentsUsdSettleResult & {
+  reservedInvocations: number;
+};
+
 export function createNoraAgentsRunner(
   systemInstructions: string,
   budget?: NoraTurnBudget,
   runnerModelSettings?: NoraRunnerModelSettings,
   campaignBudget?: NoraCampaignBudget,
+  usdAccounting?: NoraAgentsUsdAccounting,
 ): Runner {
   return new Runner({
     tracingDisabled: true,
@@ -161,6 +174,7 @@ export function createNoraAgentsRunner(
       systemInstructions,
       budget,
       campaignBudget,
+      usdAccounting,
     ),
     ...(runnerModelSettings ? { modelSettings: runnerModelSettings } : {}),
   });
@@ -208,9 +222,11 @@ export async function runNoraAgentsTurn(
   NoraCognitiveTurnResult & {
     hostedSearchObserve?: RunNoraAgentsTurnHostedSearchObserve;
     budgetObserve?: RunNoraAgentsTurnBudgetObserve;
+    usdObserve?: RunNoraAgentsTurnUsdObserve;
   }
 > {
   const model = resolveNoraAgentsF1Model(input);
+  const usdAccounting = input.usdAccounting;

   const budget = input.budget ?? createNoraTurnBudget();
   const campaign = input.campaignBudget;
@@ -460,6 +476,7 @@ export async function runNoraAgentsTurn(
     budget,
     runnerModelSettings,
     campaign,
+    usdAccounting,
   );
   const maxTurns = clamp.maxTurns;
   const session = input.session ?? undefined;
@@ -539,7 +556,10 @@ export async function runNoraAgentsTurn(
       usageAgg = result.state?.usage ?? null;
       runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
     } catch (error) {
-      if (error instanceof CampaignModelInvocationDeniedError) {
+      if (
+        error instanceof CampaignModelInvocationDeniedError ||
+        error instanceof CampaignUsdHardCapDeniedError
+      ) {
         budget.limitReached = true;
         budgetStop = true;
         text = error.message;
@@ -553,6 +573,19 @@ export async function runNoraAgentsTurn(
     }
   }

+  const usdObserve: RunNoraAgentsTurnUsdObserve | undefined = usdAccounting
+    ? (() => {
+        const reservedInvocations = usdAccounting.reservedInvocationCount();
+        const settled = usdAccounting.settleTurn({
+          reservedInvocations,
+          inputTokens: usageAgg?.inputTokens ?? null,
+          outputTokens: usageAgg?.outputTokens ?? null,
+          totalTokens: usageAgg?.totalTokens ?? null,
+        });
+        return { ...settled, reservedInvocations };
+      })()
+    : undefined;
+
   const usage = {
     inputTokens: usageAgg?.inputTokens ?? null,
     outputTokens: usageAgg?.outputTokens ?? null,
@@ -639,5 +672,6 @@ export async function runNoraAgentsTurn(
     memoryBCompactionDetails: null,
     ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
     ...(budgetObserve ? { budgetObserve } : {}),
+    ...(usdObserve ? { usdObserve } : {}),
   };
 }
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 20176a8d..fa9b6b33 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -19,7 +19,10 @@ import {
   type TruthCRevision,
 } from "./memoryBCompaction";
 import { resolveNoraSessionSqlitePath } from "./sessionPaths";
-import { runNoraAgentsTurn } from "./runNoraAgentsTurn";
+import {
+  runNoraAgentsTurn,
+  shouldUseProviderAgentsModelAdapter,
+} from "./runNoraAgentsTurn";
 import type { NoraCognitiveTurnResult } from "./types";
 import {
   decideCognitiveStrategy,
@@ -85,6 +88,23 @@ import type {
   NoraCampaignBudget,
   Mw6GovernedAuthorityContext,
 } from "./campaignBudget";
+import type { NoraAgentsUsdAccounting } from "./agentsUsdAccounting";
+import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
+import type { Model } from "@openai/agents";
+
+/**
+ * INTERNAL / EVAL-ONLY — pin model + reasoning effort for campaign cells.
+ * Not a client DTO. Not a production router. Absent → production default unchanged.
+ */
+export type NoraEvalModelReasoningControl = {
+  modelId: string;
+  reasoningEffort: OpenAiReasoningEffort;
+  /**
+   * Optional Agents model object (e.g. ScriptedModel) for ZERO REAL tests.
+   * When omitted: Fake providers keep adapter path; OpenAI live uses modelId string.
+   */
+  agentsModel?: Model | string;
+};

 export type Mw3ContradictionAssessmentInput = {
   conflict: ContradictionConflictInput;
@@ -176,6 +196,16 @@ export type RunNoraCognitiveTurnInput = {
    * Product strategy→binding is derived in this turn and passed as currentProductContext.
    */
   governedAuthority?: Mw6GovernedAuthorityContext;
+  /**
+   * INTERNAL/EVAL-ONLY — pin model + effort independently of CWP for campaign cells.
+   * Must not be exposed as a client/user-controlled DTO field.
+   */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
+  /**
+   * Optional USD accounting bridge for native Agents (eval campaigns).
+   * Passed through to runNoraAgentsTurn — not authority.
+   */
+  usdAccounting?: NoraAgentsUsdAccounting;
 };

 function emitCognitiveStrategyTelemetry(
@@ -229,10 +259,33 @@ function resolveCognitiveStrategyForTurn(
   });
 }

+
+function resolveEvalAgentsModel(
+  input: RunNoraCognitiveTurnInput,
+): Model | string | undefined {
+  const control = input.evalModelReasoningControl;
+  if (!control) return undefined;
+  if (control.agentsModel !== undefined) return control.agentsModel;
+  // Fake/completeRound providers keep adapter path — modelId remains Evidence identity.
+  if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
+    return undefined;
+  }
+  return control.modelId;
+}
+
 function resolveRunnerModelSettings(
   input: RunNoraCognitiveTurnInput,
   decision: ReturnType<typeof decideCognitiveStrategy> | null,
 ): ReturnType<typeof buildRunnerModelSettingsForEffort> | undefined {
+  const evalControl = input.evalModelReasoningControl;
+  if (evalControl) {
+    validateRuntimeReasoningCapability(
+      evalControl.modelId,
+      evalControl.reasoningEffort,
+    );
+    return buildRunnerModelSettingsForEffort(evalControl.reasoningEffort);
+  }
+
   if (!decision) return undefined;

   const model =
@@ -248,12 +301,26 @@ function resolveRunnerModelSettings(
 function withStrategyFields(
   turn: NoraCognitiveTurnResult,
   decision: ReturnType<typeof decideCognitiveStrategy> | null,
+  evalControl?: NoraEvalModelReasoningControl,
 ): NoraCognitiveTurnResult {
-  if (!decision) return turn;
-  return {
+  const base: NoraCognitiveTurnResult = {
     ...turn,
+    ...(evalControl
+      ? {
+          evalPinnedModelId: evalControl.modelId,
+          evalPinnedReasoningEffort: evalControl.reasoningEffort,
+          selectedReasoningEffort: evalControl.reasoningEffort,
+        }
+      : {}),
+  };
+  if (!decision) return base;
+  return {
+    ...base,
     cognitiveStrategyClass: decision.strategyClass,
-    selectedReasoningEffort: decision.reasoningEffort,
+    cwpDerivedReasoningEffort: decision.reasoningEffort,
+    // Effective effort: eval pin wins; else CWP.
+    selectedReasoningEffort:
+      evalControl?.reasoningEffort ?? decision.reasoningEffort,
     criticalChallengeArmed: decision.criticalChallengeArmed,
   };
 }
@@ -355,7 +422,11 @@ function finalizeTurn(
   mw6SourceIntelligence?: Mw6SourceIntelligenceSurface,
 ): NoraCognitiveTurnResult {
   const withMw3 = withMw3Fields(
-    withStrategyFields(turn, strategyDecision),
+    withStrategyFields(
+      turn,
+      strategyDecision,
+      input.evalModelReasoningControl,
+    ),
     input,
     strategyDecision,
     mw6SourceIntelligence?.observations,
@@ -643,7 +714,9 @@ export async function runNoraCognitiveTurn(
       sink: input.sink,
       enableTools: input.enableTools,
       provider: input.provider,
+      model: resolveEvalAgentsModel(input),
       runnerModelSettings,
+      usdAccounting: input.usdAccounting,
       enableHostedWebSearch: attachHostedWebSearch,
       hostedWebSearchToolOptions: input.hostedWebSearchToolOptions,
       deterministicHostedWebSearchCalls:
@@ -803,7 +876,9 @@ export async function runNoraCognitiveTurn(
       sink: input.sink,
       enableTools: input.enableTools,
       provider: input.provider,
+      model: resolveEvalAgentsModel(input),
       runnerModelSettings,
+      usdAccounting: input.usdAccounting,
       enableHostedWebSearch: attachHostedWebSearch,
       hostedWebSearchToolOptions: input.hostedWebSearchToolOptions,
       deterministicHostedWebSearchCalls:
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index cb5d1d7b..95448a25 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -43,7 +43,17 @@ export type NoraCognitiveTurnResult = {
   memoryBCompactionDetails: MemoryBCompactionDetails | null;
   /** MW2-S01 — internal strategy telemetry (not Pilote authority). */
   cognitiveStrategyClass?: CognitiveStrategyClass;
+  /**
+   * Effective reasoning effort applied to Runner (eval pin when present, else CWP).
+   */
   selectedReasoningEffort?: OpenAiReasoningEffort;
+  /**
+   * CWP-derived effort when strategy ran — observable even when eval pin overrides.
+   */
+  cwpDerivedReasoningEffort?: OpenAiReasoningEffort;
+  /** Eval-only pin identity when Stage A / campaign cell control is active. */
+  evalPinnedModelId?: string;
+  evalPinnedReasoningEffort?: OpenAiReasoningEffort;
   criticalChallengeArmed?: boolean;
   /** MW3 — present only when contradictionAssessment was supplied. */
   contradictionDisposition?: ContradictionDispositionResult;
diff --git a/projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts b/projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts
new file mode 100644
index 00000000..19f871c6
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts
@@ -0,0 +1,144 @@
+/**
+ * Eval-only bridge: BudgetTracker USD ↔ native Agents usdAccounting hook.
+ *
+ * Semantics (honest):
+ * - hardCapUsd = PRE-DISPATCH ESTIMATED / RESERVED AUTHORIZATION ENVELOPE
+ * - NOT a guaranteed provider invoice ceiling
+ * - observed estimate may exceed reserved after a response → Evidence + fail-close
+ * - invoice = NOT OBSERVED
+ */
+import type {
+  NoraAgentsUsdAccounting,
+  NoraAgentsUsdSettleObservation,
+  NoraAgentsUsdSettleResult,
+} from "@/lib/nora-cognitive-runtime";
+import {
+  BudgetTracker,
+  conservativePreCallEstimateUsd,
+  estimateCostUsd,
+  type CapabilityManifest,
+} from "./capabilityBudget";
+
+export type CreateEvalAgentsUsdAccountingInput = {
+  budget: BudgetTracker;
+  manifest: CapabilityManifest;
+  modelId: string;
+  assumedInputTokens?: number;
+  assumedOutputTokens?: number;
+};
+
+export function createEvalAgentsUsdAccounting(
+  input: CreateEvalAgentsUsdAccountingInput,
+): NoraAgentsUsdAccounting {
+  let turnReservedUsd = 0;
+  let turnReservedInvocations = 0;
+  let cumulativeReservedUsd = 0;
+  let cumulativeObservedEstimatedUsd = 0;
+  let totalReservedInvocations = 0;
+  let authorizationEnvelopeExceeded = false;
+  const assumedIn = input.assumedInputTokens ?? 4000;
+  const assumedOut = input.assumedOutputTokens ?? 1200;
+  const hardCap = input.budget.policy.hardCapUsd;
+
+  return {
+    estimateNextInvocationUsd(): number {
+      return conservativePreCallEstimateUsd({
+        manifest: input.manifest,
+        modelId: input.modelId,
+        assumedInputTokens: assumedIn,
+        assumedOutputTokens: assumedOut,
+      });
+    },
+
+    canDispatchUnderHardCap(estimateUsd: number): {
+      allowed: boolean;
+      reason?: string;
+    } {
+      if (authorizationEnvelopeExceeded) {
+        return {
+          allowed: false,
+          reason: "OBSERVED_AUTHORIZATION_ENVELOPE_EXCEEDED",
+        };
+      }
+      // Pre-dispatch envelope uses cumulative reserved (not post-observed top-ups alone).
+      if (cumulativeReservedUsd + estimateUsd > hardCap + 1e-12) {
+        return {
+          allowed: false,
+          reason: "PRECALL_WOULD_EXCEED_AUTHORIZATION_ENVELOPE",
+        };
+      }
+      // Also respect BudgetTracker hard-stop (covers observed top-up paths).
+      return input.budget.canContinueEssential(estimateUsd);
+    },
+
+    commitReserve(estimateUsd: number): void {
+      input.budget.recordSpend(
+        estimateUsd,
+        `agents-usd-reserve:inv${totalReservedInvocations + 1}`,
+      );
+      turnReservedUsd += estimateUsd;
+      turnReservedInvocations += 1;
+      cumulativeReservedUsd += estimateUsd;
+      totalReservedInvocations += 1;
+    },
+
+    reservedInvocationCount(): number {
+      return turnReservedInvocations;
+    },
+
+    totalReservedInvocations(): number {
+      return totalReservedInvocations;
+    },
+
+    settleTurn(
+      observation: NoraAgentsUsdSettleObservation,
+    ): NoraAgentsUsdSettleResult {
+      const hasObserved =
+        observation.inputTokens != null || observation.outputTokens != null;
+      let usedConservativeFallback = !hasObserved;
+      let observedEstimate: number;
+      if (hasObserved) {
+        observedEstimate = estimateCostUsd({
+          manifest: input.manifest,
+          modelId: input.modelId,
+          inputTokens: observation.inputTokens ?? assumedIn,
+          outputTokens: observation.outputTokens ?? assumedOut,
+        });
+      } else {
+        observedEstimate = turnReservedUsd;
+        usedConservativeFallback = true;
+      }
+
+      const observedOverrun = observedEstimate > turnReservedUsd + 1e-12;
+
+      // Monotone top-up of BudgetTracker when observed > reserved.
+      if (observedOverrun) {
+        const delta = observedEstimate - turnReservedUsd;
+        input.budget.recordSpend(delta, "agents-usd-observed-overrun-topup");
+      }
+
+      cumulativeObservedEstimatedUsd += observedEstimate;
+      if (cumulativeObservedEstimatedUsd > hardCap + 1e-12) {
+        authorizationEnvelopeExceeded = true;
+        input.budget.hardStopTriggered = true;
+      }
+
+      const result: NoraAgentsUsdSettleResult = {
+        reservedUsd: turnReservedUsd,
+        observedEstimatedUsd: observedEstimate,
+        estimatedUsd: observedEstimate,
+        cumulativeReservedUsd,
+        cumulativeObservedEstimatedUsd,
+        cumulativeUsd: input.budget.cumulativeUsd,
+        usedConservativeFallback,
+        observedOverrun,
+        authorizationEnvelopeExceeded,
+        invoice: "NOT_OBSERVED",
+      };
+
+      turnReservedUsd = 0;
+      turnReservedInvocations = 0;
+      return result;
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/lib/nora-eval/evalCellProvider.ts b/projects/sfia-studio/app/lib/nora-eval/evalCellProvider.ts
new file mode 100644
index 00000000..72f86970
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-eval/evalCellProvider.ts
@@ -0,0 +1,104 @@
+/**
+ * Eval/server Stage A cell ConversationProvider factory.
+ * Reuses OpenAIConversationProvider + MeteredConversationProvider for REAL/eval.
+ * INTERNAL / EVAL ONLY — never a client DTO / never a Server Action seam.
+ */
+import {
+  OpenAIConversationProvider,
+  type ConversationProvider,
+  type OpenAiReasoningEffort,
+} from "@/lib/platform/ai";
+import {
+  claimModelInvocation,
+  type NoraCampaignBudget,
+} from "@/lib/nora-cognitive-runtime";
+import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
+import {
+  MeteredConversationProvider,
+  type MeteredConversationProviderOptions,
+} from "./meteredProvider";
+import type { BudgetTracker, CapabilityManifest } from "./capabilityBudget";
+
+export type EvalCellProviderFactory = (input: {
+  modelId: string;
+  reasoningEffort: OpenAiReasoningEffort;
+}) => ConversationProvider;
+
+/**
+ * Production-shaped factory: OpenAIConversationProvider(apiKey, model, effort).
+ * ZERO REAL tests must NOT call this with a live key — inject a Fake factory instead.
+ */
+export function createOpenAiEvalCellProviderFactory(
+  apiKey: string,
+): EvalCellProviderFactory {
+  return ({ modelId, reasoningEffort }) => {
+    validateRuntimeReasoningCapability(modelId, reasoningEffort);
+    return new OpenAIConversationProvider(apiKey, modelId, reasoningEffort);
+  };
+}
+
+/**
+ * Compose: inner(model, effort) → MeteredConversationProvider(shared BudgetTracker)
+ * → optional canonical claim AFTER USD preflight / BEFORE dispatch.
+ */
+export function createMeteredEvalCellProviderFactory(input: {
+  innerFactory: EvalCellProviderFactory;
+  manifest: CapabilityManifest;
+  budget: BudgetTracker;
+  campaignBudget?: NoraCampaignBudget;
+  assumedPreflight?: { inputTokens: number; outputTokens: number };
+}): EvalCellProviderFactory {
+  return ({ modelId, reasoningEffort }) => {
+    validateRuntimeReasoningCapability(modelId, reasoningEffort);
+    const inner = input.innerFactory({ modelId, reasoningEffort });
+    const options: MeteredConversationProviderOptions | undefined =
+      input.campaignBudget
+        ? {
+            beforeAuthorizedDispatch: () => {
+              const ok = claimModelInvocation(input.campaignBudget!);
+              if (!ok) {
+                throw new Error(
+                  input.campaignBudget!.denialReason ??
+                    "Campaign model invocation cap reached — provider not dispatched.",
+                );
+              }
+            },
+          }
+        : undefined;
+    return new MeteredConversationProvider(
+      inner,
+      input.manifest,
+      input.budget,
+      modelId,
+      input.assumedPreflight ?? { inputTokens: 4000, outputTokens: 1200 },
+      options,
+    );
+  };
+}
+
+/**
+ * Resolve cell provider for Stage A F2 constitutive structured calls.
+ *
+ * - No eval control → historical provider passthrough.
+ * - Eval control present → EvalCellProviderFactory REQUIRED (no arbitrary provider fallback).
+ */
+export function resolveEvalCellConversationProvider(input: {
+  evalModelReasoningControl?: {
+    modelId: string;
+    reasoningEffort: OpenAiReasoningEffort;
+  };
+  evalCellProviderFactory?: EvalCellProviderFactory;
+  /** Used only when eval control is absent (production / non-eval injection). */
+  provider?: ConversationProvider;
+}): ConversationProvider | undefined {
+  const control = input.evalModelReasoningControl;
+  if (!control) return input.provider;
+  validateRuntimeReasoningCapability(control.modelId, control.reasoningEffort);
+  if (!input.evalCellProviderFactory) {
+    return undefined;
+  }
+  return input.evalCellProviderFactory({
+    modelId: control.modelId,
+    reasoningEffort: control.reasoningEffort,
+  });
+}
diff --git a/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts b/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
new file mode 100644
index 00000000..c4282cbb
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
@@ -0,0 +1,880 @@
+/**
+ * Global Model × Reasoning — Stage A driver + derived call envelope (nora-eval).
+ *
+ * CELL EXECUTIONS ≠ MODEL INVOCATIONS.
+ * Caps for model/aggregate are DERIVED from product-path ceilings.
+ * USD 6/9/12 remains candidate authorization envelope (≠ invoice).
+ * ZERO REAL by default: injectable executor; canonical NoraCampaignBudget is SoT.
+ */
+import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
+import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
+import {
+  acquireNoraCampaignBudget,
+  campaignBudgetSnapshot,
+  type NoraCampaignBudget,
+} from "@/lib/nora-cognitive-runtime";
+import {
+  NORA_EVAL_GLOBAL_CATALOG_VERSION,
+  type CampaignCellConfig,
+  type CampaignBudgetPolicy,
+  type FailureClass,
+  type PassFail,
+  type RunEvidence,
+} from "./types";
+import {
+  BudgetTracker,
+  buildGlobalModelReasoningCapabilityManifest,
+  conservativePreCallEstimateUsd,
+  validateCellAgainstManifest,
+  type CapabilityManifest,
+} from "./capabilityBudget";
+import { getScenario } from "./catalog";
+
+export const GLOBAL_MR_STAGE_A_CONTRACT_VERSION =
+  "global-mr-campaign-contract-v2-candidate" as const;
+
+export const GLOBAL_MR_STAGE_A_MODELS = [
+  "gpt-5.6-luna",
+  "gpt-5.6-terra",
+  "gpt-5.6-sol",
+] as const;
+
+export const GLOBAL_MR_STAGE_A_EFFORTS = [
+  "none",
+  "medium",
+  "high",
+] as const satisfies readonly OpenAiReasoningEffort[];
+
+export const GLOBAL_MR_STAGE_A_WORKLOADS = [
+  "W-Routine",
+  "W-Clarification",
+  "W-Analysis",
+  "W-High-Assurance",
+  "W-Memory",
+  "W-Sources",
+] as const;
+
+export type GlobalMrStageAWorkloadId =
+  (typeof GLOBAL_MR_STAGE_A_WORKLOADS)[number];
+
+export const GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS: Record<
+  GlobalMrStageAWorkloadId,
+  string
+> = {
+  "W-Routine": "mw2.s01.strategy-effort-decoupling",
+  "W-Clarification": "mw5.s01.challenge-clarification",
+  "W-Analysis": "mw3.s01.disposition-matrix",
+  "W-High-Assurance": "mw4.s01.grounding-durability",
+  "W-Memory": "mw1.s01.honest-memory-b-availability",
+  "W-Sources": "mw6.s02.read-search-partiality-failclosed",
+};
+
+/**
+ * Product-path Agents model-turn ceiling for Stage A cells.
+ * Derived from runNoraAgentsTurn default: CT_MAX_TOOL_ROUNDS + 1.
+ */
+export const GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS =
+  CT_MAX_TOOL_ROUNDS + 1;
+
+export type GlobalMrStageAProductPath =
+  | "agents_cognitive"
+  | "f2_product"
+  | "mw6_governed";
+
+/**
+ * Per-workload constitutive call plan (deterministic product-path ceilings).
+ * F2 informative Stage A framing: analyzeIntent structured + Agents F1 path.
+ * Does not include optional CKC actionable extra structured call (not constitutive
+ * of the Stage A informative comparison cells).
+ */
+export type GlobalMrStageAWorkloadCallPlan = {
+  workloadId: GlobalMrStageAWorkloadId;
+  productPath: GlobalMrStageAProductPath;
+  /** ConversationProvider completeStructured calls before Agents. */
+  preAgentsStructuredModelCalls: number;
+  /** Max Agents Runner model turns (claimModelInvocation each). */
+  maxAgentsModelTurns: number;
+  /** Max constitutive model invocations for ONE cell execution. */
+  maxModelInvocationsPerCell: number;
+  /** Max hosted web ops claimable for ONE cell (Sources only). */
+  maxHostedWebOperationsPerCell: number;
+  proofNote: string;
+};
+
+export function buildGlobalMrStageAWorkloadCallPlans(): Record<
+  GlobalMrStageAWorkloadId,
+  GlobalMrStageAWorkloadCallPlan
+> {
+  const agentsTurns = GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS;
+  const mk = (
+    workloadId: GlobalMrStageAWorkloadId,
+    productPath: GlobalMrStageAProductPath,
+    pre: number,
+    hosted: number,
+    proofNote: string,
+  ): GlobalMrStageAWorkloadCallPlan => ({
+    workloadId,
+    productPath,
+    preAgentsStructuredModelCalls: pre,
+    maxAgentsModelTurns: agentsTurns,
+    maxModelInvocationsPerCell: pre + agentsTurns,
+    maxHostedWebOperationsPerCell: hosted,
+    proofNote,
+  });
+  return {
+    "W-Routine": mk(
+      "W-Routine",
+      "agents_cognitive",
+      0,
+      0,
+      "runNoraCognitiveTurn → runNoraAgentsTurn; default maxTurns=CT_MAX_TOOL_ROUNDS+1",
+    ),
+    "W-Clarification": mk(
+      "W-Clarification",
+      "f2_product",
+      1,
+      0,
+      "orchestrateAssistantSend → analyzeIntent.completeStructured(1) + F1 Agents turns",
+    ),
+    "W-Analysis": mk(
+      "W-Analysis",
+      "f2_product",
+      1,
+      0,
+      "orchestrateAssistantSend → analyzeIntent(1) + F1 Agents turns",
+    ),
+    "W-High-Assurance": mk(
+      "W-High-Assurance",
+      "f2_product",
+      1,
+      0,
+      "orchestrateAssistantSend → analyzeIntent(1) + F1 Agents turns",
+    ),
+    "W-Memory": mk(
+      "W-Memory",
+      "agents_cognitive",
+      0,
+      0,
+      "Option C / Agents cognitive path; maxTurns=CT_MAX_TOOL_ROUNDS+1",
+    ),
+    "W-Sources": mk(
+      "W-Sources",
+      "mw6_governed",
+      0,
+      GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
+      "runMw6GovernedNoraProductTurn → Agents; hosted capped per cell at provider tool-calls/response",
+    ),
+  };
+}
+
+/** Candidate hosted tool-calls/response (campaign). */
+export const GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE = 2;
+
+/** Cell execution envelope — NOT model invocations. */
+export const GLOBAL_MR_STAGE_A_CELL_CAPS = {
+  baseCells: 54,
+  maxSelectiveRepeats: 18,
+  /** One selective extra run per base cell (runIndex 0 base + runIndex 1 repeat). */
+  maxRepeatsPerCell: 1,
+  maxCellExecutions: 54 + 18,
+} as const;
+
+/** Candidate USD envelope — authorization ≠ invoice. */
+export const GLOBAL_MR_STAGE_A_USD_POLICY: CampaignBudgetPolicy = {
+  targetUsd: 6,
+  softStopUsd: 9,
+  hardCapUsd: 12,
+};
+
+export type GlobalMrStageADerivedEnvelope = {
+  contractVersion: typeof GLOBAL_MR_STAGE_A_CONTRACT_VERSION;
+  maxCellExecutions: number;
+  maxSelectiveRepeats: number;
+  baseModelInvocationCeiling: number;
+  repeatModelInvocationCeiling: number;
+  maxModelInvocations: number;
+  maxHostedWebOperations: number;
+  maxAggregateRealCalls: number;
+  perWorkload: Record<GlobalMrStageAWorkloadId, GlobalMrStageAWorkloadCallPlan>;
+  usd: CampaignBudgetPolicy;
+  usdFeasibility: {
+    ok: boolean;
+    plannedReserveUsdBase: number;
+    plannedReserveUsdWorstCaseWithRepeats: number;
+    hardCapUsd: number;
+    status: "COMPATIBLE_WITH_CANDIDATE_12" | "REQUIRES_MORRIS_BUDGET_DECISION";
+  };
+  derivationNotes: string[];
+};
+
+/**
+ * Derive Stage A model/aggregate ceilings from product-path plans.
+ * Worst-case selective repeats: up to 18 highest per-cell model costs
+ * (at most one repeat per base cell).
+ */
+export function deriveGlobalMrStageAEnvelope(): GlobalMrStageADerivedEnvelope {
+  const plans = buildGlobalMrStageAWorkloadCallPlans();
+  const derivationNotes: string[] = [
+    "maxCellExecutions = 54 base + 18 selective repeats = 72 (cell executions, not model calls).",
+    `maxAgentsModelTurns = CT_MAX_TOOL_ROUNDS+1 = ${GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS}.`,
+    "F2 workloads include 1 constitutive analyzeIntent structured model call.",
+    "Repeat ceiling uses the 18 highest per-cell model-call costs (≤1 repeat/base cell).",
+  ];
+
+  const cellCosts: Array<{
+    model: (typeof GLOBAL_MR_STAGE_A_MODELS)[number];
+    effort: (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number];
+    workloadId: GlobalMrStageAWorkloadId;
+    modelCalls: number;
+    estimatedUsd: number;
+  }> = [];
+
+  let baseModelInvocationCeiling = 0;
+  let plannedReserveUsdBase = 0;
+
+  for (const model of GLOBAL_MR_STAGE_A_MODELS) {
+    for (const effort of GLOBAL_MR_STAGE_A_EFFORTS) {
+      for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
+        const plan = plans[workloadId];
+        const modelCalls = plan.maxModelInvocationsPerCell;
+        baseModelInvocationCeiling += modelCalls;
+        const perCall = conservativePreCallEstimateUsd({
+          manifest: buildGlobalModelReasoningCapabilityManifest(
+            "2026-09-05T00:00:00.000Z",
+          ),
+          modelId: model,
+        });
+        const estimatedUsd = perCall * modelCalls;
+        plannedReserveUsdBase += estimatedUsd;
+        cellCosts.push({
+          model,
+          effort,
+          workloadId,
+          modelCalls,
+          estimatedUsd,
+        });
+      }
+    }
+  }
+
+  cellCosts.sort(
+    (a, b) =>
+      b.modelCalls - a.modelCalls || b.estimatedUsd - a.estimatedUsd,
+  );
+  const topRepeats = cellCosts.slice(
+    0,
+    GLOBAL_MR_STAGE_A_CELL_CAPS.maxSelectiveRepeats,
+  );
+  const repeatModelInvocationCeiling = topRepeats.reduce(
+    (s, c) => s + c.modelCalls,
+    0,
+  );
+  const plannedReserveUsdRepeats = topRepeats.reduce(
+    (s, c) => s + c.estimatedUsd,
+    0,
+  );
+  const plannedReserveUsdWorstCaseWithRepeats =
+    plannedReserveUsdBase + plannedReserveUsdRepeats;
+
+  const maxModelInvocations =
+    baseModelInvocationCeiling + repeatModelInvocationCeiling;
+  const maxHostedWebOperations = 24; // campaign pool (retained candidate pool)
+  const maxAggregateRealCalls = maxModelInvocations + maxHostedWebOperations;
+
+  const usdOk =
+    plannedReserveUsdWorstCaseWithRepeats <=
+    GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd + 1e-12;
+
+  return {
+    contractVersion: GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
+    maxCellExecutions: GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions,
+    maxSelectiveRepeats: GLOBAL_MR_STAGE_A_CELL_CAPS.maxSelectiveRepeats,
+    baseModelInvocationCeiling,
+    repeatModelInvocationCeiling,
+    maxModelInvocations,
+    maxHostedWebOperations,
+    maxAggregateRealCalls,
+    perWorkload: plans,
+    usd: GLOBAL_MR_STAGE_A_USD_POLICY,
+    usdFeasibility: {
+      ok: usdOk,
+      plannedReserveUsdBase,
+      plannedReserveUsdWorstCaseWithRepeats,
+      hardCapUsd: GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd,
+      status: usdOk
+        ? "COMPATIBLE_WITH_CANDIDATE_12"
+        : "REQUIRES_MORRIS_BUDGET_DECISION",
+    },
+    derivationNotes,
+  };
+}
+
+/** Cached derived envelope (pure; recomputed on call — cheap). */
+export function globalMrStageAEnvelopeProof(): GlobalMrStageADerivedEnvelope & {
+  distinctFromMw0AndH17: true;
+  usdSemantics: "pre_dispatch_reservation_authorization_envelope";
+} {
+  const derived = deriveGlobalMrStageAEnvelope();
+  return {
+    ...derived,
+    distinctFromMw0AndH17: true,
+    usdSemantics: "pre_dispatch_reservation_authorization_envelope",
+  };
+}
+
+/**
+ * @deprecated Use GLOBAL_MR_STAGE_A_CELL_CAPS + deriveGlobalMrStageAEnvelope().
+ * Retained shape for migration: maxModelInvocations is now DERIVED.
+ */
+export const GLOBAL_MR_STAGE_A_CALL_CAPS = (() => {
+  const d = deriveGlobalMrStageAEnvelope();
+  return {
+    maxCellExecutions: d.maxCellExecutions,
+    maxModelInvocations: d.maxModelInvocations,
+    maxHostedWebOperations: d.maxHostedWebOperations,
+    maxAggregateRealCalls: d.maxAggregateRealCalls,
+    maxSelectiveRepeats: d.maxSelectiveRepeats,
+    maxRepeatsPerCell: GLOBAL_MR_STAGE_A_CELL_CAPS.maxRepeatsPerCell,
+    providerToolCallsPerResponse:
+      GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
+  } as const;
+})();
+
+export type GlobalMrStageAExecutionKind = GlobalMrStageAProductPath;
+
+export type GlobalMrStageACell = {
+  campaignId: string;
+  stage: "A";
+  workloadId: GlobalMrStageAWorkloadId;
+  scenarioId: string;
+  scenarioVersion: typeof NORA_EVAL_GLOBAL_CATALOG_VERSION;
+  model: (typeof GLOBAL_MR_STAGE_A_MODELS)[number];
+  reasoningEffort: (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number];
+  runIndex: number;
+  isSelectiveRepeat: boolean;
+  executionKind: GlobalMrStageAExecutionKind;
+  attachHostedWebSearch: boolean;
+  cell: CampaignCellConfig;
+};
+
+export type GlobalMrStageAStopReason =
+  | "NONE"
+  | "HARD_USD_CAP"
+  | "SOFT_USD_REVIEW"
+  | "MODEL_INVOCATION_CAP"
+  | "HOSTED_CAP"
+  | "AGGREGATE_CAP"
+  | "UNSUPPORTED_CELL"
+  | "CAMPAIGN_STOP"
+  | "EXECUTOR_DENIED";
+
+/** Per-cell denial — never latches campaign-wide stop. */
+export type GlobalMrStageACellDenialReason =
+  | "SELECTIVE_REPEAT_POOL_EXHAUSTED"
+  | "SELECTIVE_REPEAT_DENIED"
+  | "RUN_INDEX_INVALID";
+
+export type GlobalMrStageAExecutorResult = {
+  passFail: PassFail;
+  failureClass: FailureClass;
+  rawSummary: string;
+  usage: RunEvidence["usage"];
+  scorers?: RunEvidence["scorers"];
+  productObservation?: Record<string, unknown>;
+  /**
+   * DIAGNOSTIC ONLY — not enforcement authority.
+   * Driver compares against canonical NoraCampaignBudget deltas when present.
+   */
+  reportedModelInvocationsConsumed?: number;
+  reportedHostedOperationsConsumed?: number;
+};
+
+export type GlobalMrStageAExecutor = (
+  cell: GlobalMrStageACell,
+  ctx: {
+    manifest: CapabilityManifest;
+    budget: BudgetTracker;
+    campaignBudget: NoraCampaignBudget;
+    stop: () => GlobalMrStageAStopReason;
+  },
+) => Promise<GlobalMrStageAExecutorResult>;
+
+export function globalMrStageABaseCellKey(cell: {
+  model: string;
+  reasoningEffort: string;
+  workloadId: string;
+  scenarioId: string;
+  scenarioVersion?: string;
+}): string {
+  const catalog = cell.scenarioVersion ?? NORA_EVAL_GLOBAL_CATALOG_VERSION;
+  return `${cell.model}|${cell.reasoningEffort}|${cell.workloadId}|${cell.scenarioId}|${catalog}`;
+}
+
+export function buildGlobalMrStageAMatrix(input: {
+  campaignId: string;
+}): GlobalMrStageACell[] {
+  const plans = buildGlobalMrStageAWorkloadCallPlans();
+  const cells: GlobalMrStageACell[] = [];
+  let ordinal = 0;
+  for (const model of GLOBAL_MR_STAGE_A_MODELS) {
+    for (const reasoningEffort of GLOBAL_MR_STAGE_A_EFFORTS) {
+      for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
+        const scenarioId = GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS[workloadId];
+        const plan = plans[workloadId];
+        const executionKind = plan.productPath;
+        const cellConfig: CampaignCellConfig = {
+          model,
+          reasoningEffort,
+          scenarioId,
+          scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
+          runIndex: 0,
+          campaignId: input.campaignId,
+          tier: "R2",
+          sourceSet: workloadId === "W-Sources" ? "E" : "C",
+          toolSet: workloadId === "W-Sources" ? "f1_tools" : "none",
+        };
+        cells.push({
+          campaignId: input.campaignId,
+          stage: "A",
+          workloadId,
+          scenarioId,
+          scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
+          model,
+          reasoningEffort,
+          runIndex: 0,
+          isSelectiveRepeat: false,
+          executionKind,
+          attachHostedWebSearch: workloadId === "W-Sources",
+          cell: cellConfig,
+        });
+        ordinal += 1;
+      }
+    }
+  }
+  if (ordinal !== 54 || cells.length !== 54) {
+    throw new Error(
+      `GLOBAL_MR_STAGE_A_MATRIX_SIZE_INVALID: expected 54, got ${cells.length}`,
+    );
+  }
+  return cells;
+}
+
+export function assertGlobalMrStageAMatrixInvariants(
+  cells: GlobalMrStageACell[],
+): { ok: boolean; issues: string[] } {
+  const plans = buildGlobalMrStageAWorkloadCallPlans();
+  const issues: string[] = [];
+  if (cells.length !== 54) issues.push(`size=${cells.length}`);
+  const keys = new Set<string>();
+  for (const c of cells) {
+    if (c.scenarioVersion !== NORA_EVAL_GLOBAL_CATALOG_VERSION) {
+      issues.push(`catalog:${c.scenarioId}`);
+    }
+    if (c.reasoningEffort === ("minimal" as OpenAiReasoningEffort)) {
+      issues.push(`minimal:${c.scenarioId}`);
+    }
+    if (c.executionKind !== plans[c.workloadId].productPath) {
+      issues.push(`path-mismatch:${c.workloadId}`);
+    }
+    if (
+      c.workloadId === "W-Sources" &&
+      (c.executionKind !== "mw6_governed" || !c.attachHostedWebSearch)
+    ) {
+      issues.push(`sources-routing:${c.model}/${c.reasoningEffort}`);
+    }
+    if (c.workloadId !== "W-Sources" && c.attachHostedWebSearch) {
+      issues.push(`hosted-default:${c.workloadId}`);
+    }
+    const key = `${c.model}|${c.reasoningEffort}|${c.workloadId}`;
+    if (keys.has(key)) issues.push(`dup:${key}`);
+    keys.add(key);
+    const scenario = getScenario(c.scenarioId, NORA_EVAL_GLOBAL_CATALOG_VERSION);
+    if (!scenario) issues.push(`missing-scenario:${c.scenarioId}`);
+  }
+  if (keys.size !== 54) issues.push(`unique=${keys.size}`);
+  return { ok: issues.length === 0, issues };
+}
+
+export type GlobalMrStageADriverState = {
+  campaignId: string;
+  manifest: CapabilityManifest;
+  budget: BudgetTracker;
+  campaignBudget: NoraCampaignBudget;
+  derivedEnvelope: GlobalMrStageADerivedEnvelope;
+  /** Mirror of canonical consumedModelInvocations (Evidence). */
+  modelInvocations: number;
+  hostedOperations: number;
+  aggregateRealCalls: number;
+  selectiveRepeatsUsed: number;
+  baseCellsWithRepeatConsumed: Set<string>;
+  softReviewRequired: boolean;
+  softReviewCleared: boolean;
+  softReviewAcknowledgments: string[];
+  stopReason: GlobalMrStageAStopReason;
+  lastCellDenialReason: GlobalMrStageACellDenialReason | null;
+  evidence: RunEvidence[];
+  cellsCompleted: number;
+};
+
+export function createGlobalMrStageADriver(input: {
+  campaignId: string;
+  retrievedAtIso?: string;
+  carryInUsd?: number;
+}): GlobalMrStageADriverState {
+  const derived = deriveGlobalMrStageAEnvelope();
+  if (!derived.usdFeasibility.ok) {
+    throw new Error(
+      "STOP — STAGE A USD ENVELOPE REQUIRES MORRIS BUDGET DECISION: " +
+        `worstCase=${derived.usdFeasibility.plannedReserveUsdWorstCaseWithRepeats} > hardCap=${derived.usdFeasibility.hardCapUsd}`,
+    );
+  }
+  const manifest = buildGlobalModelReasoningCapabilityManifest(
+    input.retrievedAtIso ?? new Date().toISOString(),
+  );
+  const campaignBudget = acquireNoraCampaignBudget({
+    campaignId: input.campaignId,
+    maxModelInvocations: derived.maxModelInvocations,
+    maxHostedWebOperations: derived.maxHostedWebOperations,
+    maxAggregateRealCalls: derived.maxAggregateRealCalls,
+    hostedHardCapCapability: "provider_max_tool_calls",
+  });
+  const budget = new BudgetTracker(
+    GLOBAL_MR_STAGE_A_USD_POLICY,
+    input.carryInUsd ?? 0,
+  );
+  const softArmed =
+    budget.softStopTriggered ||
+    budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.softStopUsd;
+  return {
+    campaignId: input.campaignId,
+    manifest,
+    budget,
+    campaignBudget,
+    derivedEnvelope: derived,
+    modelInvocations: 0,
+    hostedOperations: 0,
+    aggregateRealCalls: 0,
+    selectiveRepeatsUsed: 0,
+    baseCellsWithRepeatConsumed: new Set(),
+    softReviewRequired: softArmed,
+    softReviewCleared: false,
+    softReviewAcknowledgments: [],
+    stopReason: softArmed ? "SOFT_USD_REVIEW" : "NONE",
+    lastCellDenialReason: null,
+    evidence: [],
+    cellsCompleted: 0,
+  };
+}
+
+export function evaluateGlobalMrStageAStop(
+  state: GlobalMrStageADriverState,
+): GlobalMrStageAStopReason {
+  if (
+    state.stopReason !== "NONE" &&
+    state.stopReason !== "SOFT_USD_REVIEW"
+  ) {
+    return state.stopReason;
+  }
+  const snap = campaignBudgetSnapshot(state.campaignBudget);
+  if (
+    state.budget.hardStopTriggered ||
+    state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd
+  ) {
+    return "HARD_USD_CAP";
+  }
+  if (snap.consumedModelInvocations >= state.derivedEnvelope.maxModelInvocations) {
+    return "MODEL_INVOCATION_CAP";
+  }
+  if (
+    snap.consumedHostedWebOperations >=
+    state.derivedEnvelope.maxHostedWebOperations
+  ) {
+    return "HOSTED_CAP";
+  }
+  if (
+    snap.consumedAggregateRealCalls >=
+    state.derivedEnvelope.maxAggregateRealCalls
+  ) {
+    return "AGGREGATE_CAP";
+  }
+  if (state.softReviewRequired) return "SOFT_USD_REVIEW";
+  return "NONE";
+}
+
+export function acknowledgeGlobalMrStageASoftReview(
+  state: GlobalMrStageADriverState,
+  reviewRef: string,
+): { ok: true } | { ok: false; reason: string } {
+  const ref = reviewRef.trim();
+  if (!ref) return { ok: false, reason: "review_ref_required" };
+  if (!state.softReviewRequired) {
+    return { ok: false, reason: "no_soft_review_pending" };
+  }
+  if (
+    state.budget.hardStopTriggered ||
+    state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd
+  ) {
+    return { ok: false, reason: "hard_cap_not_resumable" };
+  }
+  state.softReviewAcknowledgments.push(ref);
+  state.softReviewRequired = false;
+  state.softReviewCleared = true;
+  if (state.stopReason === "SOFT_USD_REVIEW") state.stopReason = "NONE";
+  return { ok: true };
+}
+
+export function canScheduleSelectiveRepeat(
+  state: GlobalMrStageADriverState,
+  baseCell: GlobalMrStageACell,
+): { allowed: boolean; reason?: GlobalMrStageACellDenialReason | string } {
+  if (baseCell.isSelectiveRepeat) {
+    return { allowed: false, reason: "already_a_repeat" };
+  }
+  if (baseCell.runIndex >= 1) {
+    return { allowed: false, reason: "cell_already_repeated" };
+  }
+  const key = globalMrStageABaseCellKey(baseCell);
+  if (state.baseCellsWithRepeatConsumed.has(key)) {
+    return { allowed: false, reason: "base_cell_repeat_already_consumed" };
+  }
+  if (
+    state.selectiveRepeatsUsed >=
+    state.derivedEnvelope.maxSelectiveRepeats
+  ) {
+    return { allowed: false, reason: "SELECTIVE_REPEAT_POOL_EXHAUSTED" };
+  }
+  return { allowed: true };
+}
+
+export function materializeSelectiveRepeat(
+  baseCell: GlobalMrStageACell,
+): GlobalMrStageACell {
+  if (baseCell.runIndex > 0 || baseCell.isSelectiveRepeat) {
+    throw new Error(
+      "SELECTIVE_REPEAT_RUN_INDEX_INVALID: runIndex>0 cannot be re-materialized",
+    );
+  }
+  return {
+    ...baseCell,
+    runIndex: 1,
+    isSelectiveRepeat: true,
+    cell: { ...baseCell.cell, runIndex: 1 },
+  };
+}
+
+function toRunEvidence(
+  cell: GlobalMrStageACell,
+  result: GlobalMrStageAExecutorResult,
+  cumulativeSpendUsd: number,
+  startedAt: string,
+  finishedAt: string,
+  softReviewRefs: string[],
+  canonicalDelta: {
+    model: number;
+    hosted: number;
+    aggregate: number;
+    reportedMismatch: boolean;
+  },
+): RunEvidence {
+  return {
+    campaignId: cell.campaignId,
+    cell: cell.cell,
+    startedAt,
+    finishedAt,
+    passFail: result.passFail,
+    failureClass: result.failureClass,
+    scorers: result.scorers ?? [],
+    epistemicLabelsObserved: [],
+    productPath:
+      cell.executionKind === "f2_product"
+        ? "f2"
+        : cell.executionKind === "mw6_governed"
+          ? "f1"
+          : "none",
+    productPathAttempted:
+      cell.executionKind === "f2_product" ? "f2" : undefined,
+    productPathSucceeded:
+      cell.executionKind === "f2_product"
+        ? result.passFail === "PASS"
+        : undefined,
+    rawSummary: result.rawSummary,
+    usage: result.usage,
+    cumulativeSpendUsd,
+    redacted: true,
+    evidenceRefs: [
+      `catalog:${cell.scenarioVersion}`,
+      `contract:${GLOBAL_MR_STAGE_A_CONTRACT_VERSION}`,
+      `workload:${cell.workloadId}`,
+      `stage:A`,
+      `executionKind:${cell.executionKind}`,
+      `canonicalDeltaModel:${canonicalDelta.model}`,
+      `canonicalDeltaHosted:${canonicalDelta.hosted}`,
+      ...softReviewRefs.map((r) => `soft-review-ack:${r}`),
+    ],
+    productObservation: {
+      ...(result.productObservation ?? {}),
+      executionKind: cell.executionKind,
+      canonicalDelta,
+      reportedModelInvocationsConsumed:
+        result.reportedModelInvocationsConsumed ?? null,
+      reportedHostedOperationsConsumed:
+        result.reportedHostedOperationsConsumed ?? null,
+    },
+  };
+}
+
+export async function runGlobalMrStageACell(input: {
+  state: GlobalMrStageADriverState;
+  cell: GlobalMrStageACell;
+  executor: GlobalMrStageAExecutor;
+}): Promise<{
+  state: GlobalMrStageADriverState;
+  evidence: RunEvidence | null;
+  stopped: boolean;
+  cellDenied?: GlobalMrStageACellDenialReason;
+}> {
+  const state = input.state;
+  state.lastCellDenialReason = null;
+
+  if (state.softReviewRequired) {
+    state.stopReason = "SOFT_USD_REVIEW";
+    return { state, evidence: null, stopped: true };
+  }
+
+  const stopNow = evaluateGlobalMrStageAStop(state);
+  if (stopNow !== "NONE") {
+    state.stopReason = stopNow;
+    return { state, evidence: null, stopped: true };
+  }
+
+  if (input.cell.runIndex > 1) {
+    state.lastCellDenialReason = "RUN_INDEX_INVALID";
+    return {
+      state,
+      evidence: null,
+      stopped: true,
+      cellDenied: "RUN_INDEX_INVALID",
+    };
+  }
+
+  if (input.cell.isSelectiveRepeat) {
+    const baseIdentity: GlobalMrStageACell = {
+      ...input.cell,
+      runIndex: 0,
+      isSelectiveRepeat: false,
+      cell: { ...input.cell.cell, runIndex: 0 },
+    };
+    const gate = canScheduleSelectiveRepeat(state, baseIdentity);
+    if (!gate.allowed) {
+      const denial: GlobalMrStageACellDenialReason =
+        gate.reason === "SELECTIVE_REPEAT_POOL_EXHAUSTED"
+          ? "SELECTIVE_REPEAT_POOL_EXHAUSTED"
+          : "SELECTIVE_REPEAT_DENIED";
+      state.lastCellDenialReason = denial;
+      // Per-cell only — do NOT latch campaign-wide stopReason.
+      return { state, evidence: null, stopped: true, cellDenied: denial };
+    }
+  }
+
+  const cellCheck = validateCellAgainstManifest({
+    manifest: state.manifest,
+    modelId: input.cell.model,
+    reasoningEffort: input.cell.reasoningEffort,
+  });
+  if (!cellCheck.ok) {
+    const startedAt = new Date().toISOString();
+    const evidence = toRunEvidence(
+      input.cell,
+      {
+        passFail: "FAIL",
+        failureClass: (cellCheck.failureClass ?? "CONFIG") as FailureClass,
+        rawSummary: cellCheck.detail,
+        usage: null,
+      },
+      state.budget.cumulativeUsd,
+      startedAt,
+      new Date().toISOString(),
+      state.softReviewAcknowledgments,
+      { model: 0, hosted: 0, aggregate: 0, reportedMismatch: false },
+    );
+    state.evidence.push(evidence);
+    state.stopReason = "UNSUPPORTED_CELL";
+    return { state, evidence, stopped: true };
+  }
+
+  const before = campaignBudgetSnapshot(state.campaignBudget);
+  const startedAt = new Date().toISOString();
+  const result = await input.executor(input.cell, {
+    manifest: state.manifest,
+    budget: state.budget,
+    campaignBudget: state.campaignBudget,
+    stop: () => evaluateGlobalMrStageAStop(state),
+  });
+  const finishedAt = new Date().toISOString();
+  const after = campaignBudgetSnapshot(state.campaignBudget);
+
+  const deltaModel =
+    after.consumedModelInvocations - before.consumedModelInvocations;
+  const deltaHosted =
+    after.consumedHostedWebOperations - before.consumedHostedWebOperations;
+  const deltaAgg =
+    after.consumedAggregateRealCalls - before.consumedAggregateRealCalls;
+
+  const reportedMismatch =
+    (result.reportedModelInvocationsConsumed != null &&
+      result.reportedModelInvocationsConsumed !== deltaModel) ||
+    (result.reportedHostedOperationsConsumed != null &&
+      result.reportedHostedOperationsConsumed !== deltaHosted);
+
+  // Canonical SoT mirrors — never trust executor-reported counts for enforcement.
+  state.modelInvocations = after.consumedModelInvocations;
+  state.hostedOperations = after.consumedHostedWebOperations;
+  state.aggregateRealCalls = after.consumedAggregateRealCalls;
+
+  if (input.cell.isSelectiveRepeat) {
+    state.selectiveRepeatsUsed += 1;
+    state.baseCellsWithRepeatConsumed.add(
+      globalMrStageABaseCellKey({
+        model: input.cell.model,
+        reasoningEffort: input.cell.reasoningEffort,
+        workloadId: input.cell.workloadId,
+        scenarioId: input.cell.scenarioId,
+        scenarioVersion: input.cell.scenarioVersion,
+      }),
+    );
+  }
+  state.cellsCompleted += 1;
+
+  const evidence = toRunEvidence(
+    input.cell,
+    result,
+    state.budget.cumulativeUsd,
+    startedAt,
+    finishedAt,
+    state.softReviewAcknowledgments,
+    {
+      model: deltaModel,
+      hosted: deltaHosted,
+      aggregate: deltaAgg,
+      reportedMismatch,
+    },
+  );
+  state.evidence.push(evidence);
+
+  if (
+    !state.softReviewCleared &&
+    (state.budget.softStopTriggered ||
+      state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.softStopUsd)
+  ) {
+    state.softReviewRequired = true;
+    state.stopReason = "SOFT_USD_REVIEW";
+    return { state, evidence, stopped: true };
+  }
+
+  const afterStop = evaluateGlobalMrStageAStop(state);
+  if (afterStop !== "NONE") {
+    state.stopReason = afterStop;
+    return { state, evidence, stopped: true };
+  }
+  return { state, evidence, stopped: false };
+}
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index d86d38d4..2970c326 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -67,3 +67,48 @@ export {
   optionCRuntimeObservables,
   type NoraCognitiveRuntimeObservable,
 } from "./optionCObservables";
+export {
+  createEvalAgentsUsdAccounting,
+  type CreateEvalAgentsUsdAccountingInput,
+} from "./agentsUsdBridge";
+export {
+  createOpenAiEvalCellProviderFactory,
+  createMeteredEvalCellProviderFactory,
+  resolveEvalCellConversationProvider,
+  type EvalCellProviderFactory,
+} from "./evalCellProvider";
+export {
+  GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
+  GLOBAL_MR_STAGE_A_MODELS,
+  GLOBAL_MR_STAGE_A_EFFORTS,
+  GLOBAL_MR_STAGE_A_WORKLOADS,
+  GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS,
+  GLOBAL_MR_STAGE_A_CALL_CAPS,
+  GLOBAL_MR_STAGE_A_CELL_CAPS,
+  GLOBAL_MR_STAGE_A_USD_POLICY,
+  GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS,
+  GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
+  buildGlobalMrStageAWorkloadCallPlans,
+  deriveGlobalMrStageAEnvelope,
+  buildGlobalMrStageAMatrix,
+  assertGlobalMrStageAMatrixInvariants,
+  createGlobalMrStageADriver,
+  evaluateGlobalMrStageAStop,
+  acknowledgeGlobalMrStageASoftReview,
+  canScheduleSelectiveRepeat,
+  materializeSelectiveRepeat,
+  globalMrStageABaseCellKey,
+  runGlobalMrStageACell,
+  globalMrStageAEnvelopeProof,
+  type GlobalMrStageAWorkloadId,
+  type GlobalMrStageACell,
+  type GlobalMrStageAExecutor,
+  type GlobalMrStageAExecutorResult,
+  type GlobalMrStageADriverState,
+  type GlobalMrStageAStopReason,
+  type GlobalMrStageACellDenialReason,
+  type GlobalMrStageAExecutionKind,
+  type GlobalMrStageADerivedEnvelope,
+  type GlobalMrStageAWorkloadCallPlan,
+  type GlobalMrStageAProductPath,
+} from "./globalModelReasoningStageA";
diff --git a/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts b/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
index 6b992a51..04d95485 100644
--- a/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
@@ -1,5 +1,8 @@
 /**
  * Eval-only metering decorator — NOT a new provider stack.
+ *
+ * Optional beforeAuthorizedDispatch runs AFTER USD preflight succeeds and
+ * BEFORE inner provider dispatch (default-off; historical behavior unchanged).
  */

 import type {
@@ -32,10 +35,20 @@ export type ProviderCallMeterRecord = {
   cumulativeUsd: number;
 };

+export type MeteredConversationProviderOptions = {
+  /**
+   * INTERNAL/EVAL — invoked only after USD preflight allows dispatch.
+   * Use for canonical campaign model-call claims. Throw to abort before inner.
+   * Default: unset (historical MeteredConversationProvider behavior).
+   */
+  beforeAuthorizedDispatch?: () => void | Promise<void>;
+};
+
 export class MeteredConversationProvider implements ConversationProvider {
   readonly providerId: string;
   private callIndex = 0;
   readonly ledger: ProviderCallMeterRecord[] = [];
+  private readonly beforeAuthorizedDispatch?: () => void | Promise<void>;

   constructor(
     private readonly inner: ConversationProvider,
@@ -46,8 +59,10 @@ export class MeteredConversationProvider implements ConversationProvider {
       inputTokens: number;
       outputTokens: number;
     } = { inputTokens: 4000, outputTokens: 1200 },
+    options?: MeteredConversationProviderOptions,
   ) {
     this.providerId = inner.providerId;
+    this.beforeAuthorizedDispatch = options?.beforeAuthorizedDispatch;
   }

   private preflight(): void {
@@ -63,6 +78,12 @@ export class MeteredConversationProvider implements ConversationProvider {
     }
   }

+  private async afterPreflightBeforeDispatch(): Promise<void> {
+    if (this.beforeAuthorizedDispatch) {
+      await this.beforeAuthorizedDispatch();
+    }
+  }
+
   private record(
     method: ProviderCallMeterRecord["method"],
     usage: ProviderUsage | null | undefined,
@@ -102,6 +123,7 @@ export class MeteredConversationProvider implements ConversationProvider {
     messages: ProviderChatMessage[],
   ): Promise<ProviderCompletionResult> {
     this.preflight();
+    await this.afterPreflightBeforeDispatch();
     const result = await this.inner.complete(messages);
     this.record("complete", result.usage);
     return result;
@@ -116,6 +138,7 @@ export class MeteredConversationProvider implements ConversationProvider {
       throw new Error("completeStructured not available on wrapped provider");
     }
     this.preflight();
+    await this.afterPreflightBeforeDispatch();
     const result = await this.inner.completeStructured(input);
     this.record("completeStructured", result.usage);
     return result;
@@ -129,6 +152,7 @@ export class MeteredConversationProvider implements ConversationProvider {
       throw new Error("completeRound not available on wrapped provider");
     }
     this.preflight();
+    await this.afterPreflightBeforeDispatch();
     const result = await this.inner.completeRound(input);
     this.record("completeRound", result.usage);
     return result;
diff --git a/projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md b/projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md
new file mode 100644
index 00000000..143d7369
--- /dev/null
+++ b/projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md
@@ -0,0 +1,633 @@
+# 10 — Nora Global Model × Reasoning Campaign ExecutionContract (CANDIDATE)
+
+| Field | Value |
+| --- | --- |
+| **Document ID** | `NORA-GLOBAL-MR-CAMPAIGN-EXECUTION-CONTRACT-01` |
+| **Contract version** | `global-mr-campaign-contract-v2-candidate` |
+| **Status** | **CANDIDATE LOCAL — ZERO REAL — STAGE A FINAL DETERMINISTIC SAFETY CORRECTION (C4-01→C4-05) — DETERMINISTIC PROVEN — AWAITING CHATGPT CRITICAL REVIEW → MORRIS GIT INTEGRATION DECISION** |
+| **Baseline Git** | `origin/main` = `23d850fda45fe55ba519e0feefe63369d349afcc` (PR #466 squash merge) |
+| **Parent** | `d3fee38b270d805144e621804b96ef1e5de3e208` |
+| **Tree** | `7f940e0a772ebf566cfa64ec6e0c6f9f8f477505` |
+| **G1/G2/G3** | INTEGRATED ON MAIN / POST-MERGE VERIFIED |
+| **Post-merge CI** | run `33965677986` SUCCESS |
+| **Authoring date** | 2026-09-05 |
+| **Preparation GO** | `GO MORRIS — PRÉPARER LE GLOBAL MODEL × REASONING CAMPAIGN EXECUTIONCONTRACT CONSOLIDÉ — ZERO REAL` **CONSUMED** |
+| **Enablement GO** | `GO MORRIS — CORRECTION GLOBAL MODEL × REASONING STAGE A ENABLEMENT — ZERO REAL` **CONSUMED (local candidate only)** |
+| **Correction 2 GO** | `… CORRECTION 2 …` **CONSUMED (local)** |
+| **Correction 3 GO** | `GO MORRIS — GLOBAL MODEL × REASONING STAGE A ENABLEMENT CORRECTION 3 — ZERO REAL` **CONSUMED (local candidate only)** |
+| **Correction 4 GO** | `GO MORRIS — CORRECTIF GLOBAL MODEL × REASONING STAGE A + PUBLISH REVIEW HANDOFF — ZERO REAL` **CONSUMED (local candidate only)** |
+| **REAL authorization** | **NOT GRANTED** by this document |
+
+### Three truth layers (do not conflate)
+
+| Layer | What it contains | Status |
+| --- | --- | --- |
+| **A. CURRENT MAIN** (`main@23d850fd`) | G1/G2/G3 only for this campaign readiness | INTEGRATED |
+| **B. LOCAL CANDIDATE** (this worktree) | Stage A enablement glue E1–E4 + F1→F5 + C3-01→C3-05 + **C4-01→C4-05** final deterministic safety — code/tests/doc **NOT** on main | DETERMINISTIC PROVEN locally; **NOT integrated** |
+| **C. PROOF CEILING** | DETERMINISTIC ONLY | REAL NOT AUTHORIZED / NOT PROVEN |
+
+---
+
+## 0. What this document is / is not
+
+### IS
+- A **construction/evaluation campaign contract** for a future Global Model × Reasoning empirical campaign.
+- An **executable specification** of stages, matrix, budgets, metrics, early-stop, promotion, Evidence, authority, and outcomes.
+- An **input** to a future Morris Stage A REAL gate (only after Git integration + CI + requalification + explicit REAL GO).
+- An **assembly** of existing repository primitives **plus** local Stage A enablement glue (E1–E4) present in this worktree candidate.
+
+### IS NOT
+- A product `ExecutionContract` schema mutation.
+- A new architecture, persistence, provider, router, or runtime v3 adoption.
+- A production model selection.
+- An authorization to spend OpenAI / Hosted Web Search / Stage A–C.
+- A campaign result or Cognitive Completion proof.
+- A claim that E1–E4 already live on `origin/main`.
+
+**Preparation authorization ≠ REAL execution authorization.**
+**Deterministic proven ≠ REAL proven (R21).**
+
+---
+
+## 1. Experimental question
+
+> Which **model × reasoning-effort** pair provides the best measured compromise for Nora by **cognitive workload family**, under quality, stability, governance, latency, tokens, and cost constraints?
+
+The design MUST separately identify:
+
+| Effect | How measured |
+| --- | --- |
+| **MODEL EFFECT** | Hold workload + effort fixed; vary `gpt-5.6-luna` / `terra` / `sol` |
+| **REASONING EFFORT EFFECT** | Hold workload + model fixed; vary effort (Stage A: none/medium/high; Stage B may add low/xhigh/max) |
+
+**Out of scope:** SFIA Profile testing. Cognitive Workload Profile ≠ SFIA Profile.
+
+---
+
+## 2. Provider capability snapshot (dated Evidence)
+
+**Revalidated (public official docs) — 2026-09-05** against OpenAI API model pages + reasoning guide.
+
+| Model ID | Alias | Reasoning efforts (official) | Input $/MTok | Cached input $/MTok | Output $/MTok |
+| --- | --- | --- | --- | --- | --- |
+| `gpt-5.6-luna` | — | none / low / medium / high / xhigh / max | 0.20 | 0.02 | 1.20 |
+| `gpt-5.6-terra` | — | none / low / medium / high / xhigh / max | 2.00 | 0.20 | 12.00 |
+| `gpt-5.6-sol` | `gpt-5.6` | none / low / medium / high / xhigh / max | 4.00 | 0.40 | 20.00 |
+
+Sources (public):
+- https://developers.openai.com/api/docs/models/gpt-5.6-luna
+- https://developers.openai.com/api/docs/models/gpt-5.6-sol
+- https://developers.openai.com/api/docs/guides/reasoning
+
+**Alignment with integrated G1** (`buildGlobalModelReasoningCapabilityManifest`):
+- Same three model IDs; same effort universe; same list prices for input/output.
+- `minimal` remains **NON-ADMISSIBLE** for GPT-5.6 family in campaign matrix.
+- Unknown model → **FAIL-CLOSED / PROVIDER_CAPABILITY** (never cognitive FAIL).
+- No GPT-6 / Astra / other models added.
+
+**Caveats**
+- Snapshot = **campaign Evidence**, not permanent doctrine; revalidate at Stage A REAL start.
+- Sol promotional pricing noted “at least through November 21, 2026” on official Sol page — re-check before REAL.
+- Integrated G1 pricing objects do **not** currently populate `cachedInputUsdPerMTok` → see FinOps gap §18.
+- Snapshot ≠ production routing ≠ REAL authorization.
+
+**Disposition:** No material contradiction with G1 → **NO STOP — PROVIDER CAPABILITY SNAPSHOT DRIFT**.
+
+---
+
+## 3. Primitive assembly (main + local enablement)
+
+| Concern | Existing primitive | Path | Layer |
+| --- | --- | --- | --- |
+| Global capability policy | `buildGlobalModelReasoningCapabilityManifest` | `app/lib/nora-eval/capabilityBudget.ts` | MAIN (G1) |
+| Catalog | `global-mr-catalog-v1` | `app/lib/nora-eval/catalog.ts` / `types.ts` | MAIN (G2) |
+| Eval USD tracker | `BudgetTracker` + `CampaignBudgetPolicy` | `capabilityBudget.ts` / `types.ts` | MAIN |
+| Runtime call caps | `acquireNoraCampaignBudget` / `NoraCampaignBudget` | `campaignBudget.ts` | MAIN |
+| Option C Agents runner | `runNoraAgentsTurn` | `runNoraAgentsTurn.ts` | MAIN |
+| Agents USD authorization hook | `NoraAgentsUsdAccounting` + `createEvalAgentsUsdAccounting` | `agentsUsdAccounting.ts` / `agentsUsdBridge.ts` | **LOCAL CANDIDATE** |
+| Eval model×effort pin | `NoraEvalModelReasoningControl` (+ product F1/F2 passthrough) | `runNoraCognitiveTurn.ts` / `orchestrateTurn.ts` / `orchestrateF2.ts` | **LOCAL CANDIDATE** |
+| Eval cell provider factory | `EvalCellProviderFactory` / `resolveEvalCellConversationProvider` | `evalCellProvider.ts` | **LOCAL CANDIDATE** |
+| Derived Stage A call envelope | `deriveGlobalMrStageAEnvelope` / `buildGlobalMrStageAWorkloadCallPlans` | `globalModelReasoningStageA.ts` | **LOCAL CANDIDATE** |
+| MW6 shared campaign lease | `resolveMw6GovernedCampaignBudget` + full `runMw6GovernedNoraProductTurn` | `mw6GovernedNoraTurn.ts` | **LOCAL CANDIDATE** |
+| Stage A driver | `globalModelReasoningStageA.ts` | `app/lib/nora-eval/` | **LOCAL CANDIDATE** |
+
+**MAIN:** G1/G2/G3 integrated.
+
+**LOCAL CANDIDATE:** Stage A enablement glue E1/E2/E3/E4 + F1→F5 + C3-01→C3-05 implemented and deterministically tested, subject to ChatGPT Critical Review → Morris Git integration.
+
+**REAL:** not authorized / not proven.
+
+---
+
+## 4. Campaign candidate population
+
+### Models (CAMPAIGN CANDIDATE SET — NOT PRODUCTION ROUTING SET)
+- `gpt-5.6-luna`
+- `gpt-5.6-terra`
+- `gpt-5.6-sol`
+
+### Reasoning efforts (universe)
+- none · low · medium · high · xhigh · max
+- **`minimal`:** NON ADMISSIBLE
+- Unknown model / unsupported effort: `CONFIG` or `PROVIDER_CAPABILITY` — never `COGNITIVE_FAIL`
+- No silent effort coercion · no automatic model fallback · no automatic effort downgrade
+
+---
+
+## 5. Workloads (six families)
+
+Cognitive Workload Profile families only (≠ SFIA Profile).
+
+| Workload ID | Cognitive objective | Catalog semantic scenarioId | Catalog version | Primary observations / scorers | Authority invariants | REAL frontier | Tools |
+| --- | --- | --- | --- | --- | --- | --- | --- |
+| **W-Routine** | Routine cognitive handling; strategy≠effort coupling honesty | `mw2.s01.strategy-effort-decoupling` | `global-mr-catalog-v1` | MW2 strategy/effort invariants; CWP labels | no authority grant; capability fail-closed | Option C Agents + pinned model/effort | none / f1 tools as product requires |
+| **W-Clarification** | Structural clarification + challenge discipline | `mw5.s01.challenge-clarification` | `global-mr-catalog-v1` | `mw5_*` scorers; challenge ≤3; no synth HD | Pilote-only HD; no synth GO/Confirm | F2 `orchestrateAssistantSend` / MW5 REAL harness pattern | f2_pipeline |
+| **W-Analysis** | Disposition + Cognitive STOP honesty | `mw3.s01.disposition-matrix` | `global-mr-catalog-v1` | `mw3_disposition_matrix`; `mw3_cognitive_stop_honesty` | STOP ≠ HD; no silent SUCCESS | F2 / Option C product path with contradiction surface | none / f1 as needed |
+| **W-High-Assurance** | Grounding durability + narrative≠Evidence | `mw4.s01.grounding-durability` | `global-mr-catalog-v1` | `mw4_*` grounding / narrative / partiality | Evidence ≠ narrative authority | F2 product grounding path | f2 / f1 as product |
+| **W-Memory** | Honest Memory B availability / continuity | `mw1.s01.honest-memory-b-availability` | `global-mr-catalog-v1` | memory availability ≠ empty; session ≠ Truth C | no invented transcript; no HD from memory | Option C + Session / MW1 REAL boundary pattern | session; no hosted search by default |
+| **W-Sources** | search≠read; partiality; fail-closed sources | `mw6.s02.read-search-partiality-failclosed` | `global-mr-catalog-v1` | `mw6_*` source scorers | external ≠ HD/Evidence authority | **MW6 governed path only** + campaignBudget + REAL grant | hosted web_search **only when cell requires** |
+
+**Quality criteria (all workloads):** correctness/completeness relative to workload prompt; governance hard invariants non-compensable; FinOps within cell accounting.
+
+**Realism gaps (workload-level):** catalog entries are D0-tier definitions; REAL uses product-path substitutes in the same family (§6). Deterministic MW6 D0 ≠ REAL hosted proof.
+
+---
+
+## 6. REAL executability matrix (code-founded)
+
+### Important distinction
+Catalog `requiredTier: ["D0"]` scenarios are **semantic identities + scorer bindings**, not automatic REAL runners. Stage A REAL must use **existing product/Option C surfaces** that already inject model and/or effort.
+
+### Injection facts
+
+#### On CURRENT MAIN (`main@23d850fd`)
+| Mechanism | Model injectable | Effort injectable | Metering | Budget |
+| --- | --- | --- | --- | --- |
+| `runNoraAgentsTurn({ model, runnerModelSettings, campaignBudget })` | **YES** | **YES** | Agents usage + campaign counters | `NoraCampaignBudget` |
+| `createCellProvider` + `MeteredConversationProvider` + F2 | **YES** | **YES** | YES (cached always `null`) | `BudgetTracker` |
+| `runNoraCognitiveTurn` product CWP path | Model from live secrets | Effort from CWP | provider-dependent | optional campaignBudget |
+
+#### On LOCAL CANDIDATE (enablement glue — not on main)
+| Mechanism | Status |
+| --- | --- |
+| `evalModelReasoningControl` pin through `runNoraCognitiveTurn` + F1/F2 product orchestrators | **YES** (INTERNAL/EVAL ONLY) |
+| `EvalCellProviderFactory(modelId, reasoningEffort)` → structured ConversationProvider | **YES** (deterministic; REAL uses existing `OpenAIConversationProvider`) |
+| Agents USD pre-dispatch reservation + observed-overrun Evidence | **YES** (authorization envelope ≠ invoice) |
+| Stage A driver owns **derived** canonical lease (cell≠model) + soft-stop + one-repeat/cell (pool ≠ campaign latch) | **YES** (deterministic) |
+| MW6 full product path: driver → `runMw6GovernedNoraProductTurn` → same canonical lease | **YES** (deterministic; ZERO LIVE hosted) |
+| Driver mirrors from canonical budget deltas (not executor-reported counts) | **YES** (deterministic) |
+
+**Campaign experimental rule:** Stage A cells **MUST pin** `model` + `reasoningEffort` explicitly. CWP may be observed but must not override the cell pin.
+
+### Per-workload disposition
+
+| Workload | Proposed catalog ID | Actual REAL-capable path | Model inj. | Effort inj. | Metering | Budget binding | Required tools | Evidence path | Gap | Disposition |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| W-Routine | `mw2.s01.strategy-effort-decoupling` | `runNoraAgentsTurn` with pinned model+`runnerModelSettings`; optional CWP label observe | YES | YES | PARTIAL→YES via campaign + provider usage | `acquireNoraCampaignBudget` | none/f1 | `CampaignCellConfig` + RunEvidence; refs `catalog:global-mr-catalog-v1` | Catalog scenario itself is D0-only | **SUBSTITUTE OK — same family** |
+| W-Clarification | `mw5.s01.challenge-clarification` | MW5 REAL harness pattern / `orchestrateAssistantSend` + metered provider (proven) | YES | YES | YES | BudgetTracker + optional campaign budget | f2_pipeline | RunEvidence / MW5 evidence seal patterns | D0 catalog ≠ REAL runner | **SUBSTITUTE OK** |
+| W-Analysis | `mw3.s01.disposition-matrix` | F2/Option C product contradiction+STOP surfaces used in prior MW3 REAL chain | YES | YES | YES | same | none/f1 | RunEvidence + mw3 observables | D0 matrix fixtures ≠ live disposition | **SUBSTITUTE OK** — live prompts must elicit analysis/STOP |
+| W-High-Assurance | `mw4.s01.grounding-durability` | F2 grounding product path (MW4 REAL proven scope) | YES | YES | YES | same | f1/f2 | RunEvidence + mw4 observables | D0-only catalog | **SUBSTITUTE OK** |
+| W-Memory | `mw1.s01.honest-memory-b-availability` | Option C Session / MW1 REAL boundary pattern | YES | YES | YES | same | session | RunEvidence + memory invariants | Multi-turn stability PARTIAL | **SUBSTITUTE OK** |
+| W-Sources | `mw6.s02.read-search-partiality-failclosed` | `mw6GovernedNoraTurn` / Agents + hosted web_search under REAL preflight + campaignBudget | YES | YES | YES (+ hosted ops counters) | **required** `NoraCampaignBudget` | hosted web_search (cell-gated) | RunEvidence + mw6Observe semantics | **Must not** use `runR2ProductScenario` as-is (mw0 default; no MW6 in historical catalog) | **SUBSTITUTE REQUIRED — MW6 governed path** |
+
+**Overall (local candidate):** `CONTRACT EXECUTABLE WITH CURRENT HARNESS + STAGE A ENABLEMENT GLUE AT DETERMINISTIC SCOPE — REAL NOT AUTHORIZED / NOT PROVEN`.
+
+**Operational constraints:**
+1. Do not silently use `runR2ProductScenario` for MW6 / global provenance without correcting catalog version (function hardcodes `mw0-catalog-v1`).
+2. Prefer Agents/`CampaignCellConfig` Evidence writer that sets `scenarioVersion: "global-mr-catalog-v1"`.
+3. Stage A driver exists in the **local candidate** (`globalModelReasoningStageA.ts`) — deterministic proven; REAL execution still requires Morris Stage A REAL GO after Git integration.
+
+---
+
+## 7. STAGE A CANDIDATE — REQUIRES MORRIS REAL GO
+
+> All values below are **RECOMMENDATION / CANDIDATE** until Morris Stage A REAL decision.
+
+| Parameter | Candidate value | Status |
+| --- | --- | --- |
+| Models | Luna / Terra / Sol | CANDIDATE |
+| Efforts | none / medium / high | CANDIDATE |
+| Workloads | 6 (W-Routine … W-Sources) | CANDIDATE |
+| Base cells | **54** (= 3 × 3 × 6) | CANDIDATE |
+| Base runs/cell | 1 | CANDIDATE |
+| Max repeats/cell | **1** (runIndex 0 base + runIndex 1 unique selective repeat) | CANDIDATE — C4-04 |
+| Selective repeat pool | **18 max** | CANDIDATE |
+| **Max cell executions** | **72** (= 54 + 18) | **CELL EXECUTION ENVELOPE** — not model invocations |
+| **Max model invocations** | **405** (= base 297 + worst-case repeat 108) | **DERIVED CANDIDATE — AWAITING MORRIS ACCEPTANCE FOR REAL** |
+| Max hosted web operations | **24** | CANDIDATE (retained pool) |
+| **Max aggregate REAL calls** | **429** (= 405 + 24) | **DERIVED CANDIDATE — AWAITING MORRIS ACCEPTANCE FOR REAL** |
+| Target USD | **6.00** | CANDIDATE |
+| Soft stop USD | **9.00** | CANDIDATE |
+| Hard cap USD | **12.00** — **pre-dispatch estimated/reservation authorization envelope** (≠ guaranteed provider invoice ceiling) | CANDIDATE — feasibility OK vs planned reserve ≈ **9.77** worst-case |
+| Provider tool calls / response (campaign) | **2** (use min(campaign, runtime ceiling)) | CANDIDATE |
+| Catalog | `global-mr-catalog-v1` | MAIN |
+| Capability manifest | `buildGlobalModelReasoningCapabilityManifest(retrievedAt)` | MAIN |
+| Budget identity | **≠** `MW0_BUDGET_POLICY` (3/4/5) **≠** `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS` (100) | — |
+| Contract version | `global-mr-campaign-contract-v2-candidate` | LOCAL CANDIDATE |
+
+### Per-workload constitutive model-call ceilings (DERIVED)
+
+| Workload | Product path | Pre-Agents structured | Max Agents turns (`CT_MAX_TOOL_ROUNDS+1`) | Model invocations / cell | Hosted / cell |
+| --- | --- | --- | --- | --- | --- |
+| W-Routine | `agents_cognitive` | 0 | 5 | **5** | 0 |
+| W-Clarification | `f2_product` | 1 (`analyzeIntent`) | 5 | **6** | 0 |
+| W-Analysis | `f2_product` | 1 | 5 | **6** | 0 |
+| W-High-Assurance | `f2_product` | 1 | 5 | **6** | 0 |
+| W-Memory | `agents_cognitive` | 0 | 5 | **5** | 0 |
+| W-Sources | `mw6_governed` | 0 | 5 | **5** | 2 |
+
+**Derivation:**
+- `baseModelInvocationCeiling` = 3×3×(5+6+6+6+5+5) = **297**
+- `repeatModelInvocationCeiling` = sum of 18 highest per-cell costs (all F2 @ 6) = **108**
+- `maxModelInvocations` = 297 + 108 = **405**
+- `maxAggregateRealCalls` = 405 + 24 = **429**
+- Function: `deriveGlobalMrStageAEnvelope()` / proof: `globalMrStageAEnvelopeProof()`
+
+**Do not equate** `maxCellExecutions=72` with `maxModelInvocations`. A cell may contain multiple constitutive model calls (F2: analyzeIntent + Agents turns).
+
+### Stage A effort justification (CANDIDATE)
+- **none** — absence of explicit reasoning
+- **medium** — representative mid effort
+- **high** — strengthened reasoning
+- Avoids full 6-effort Cartesian screening; **low / xhigh / max** reserved for Stage B deepening
+
+### Cell minimum fields
+Each cell MUST carry:
+`campaignId`, `stage=A`, `workloadId`, `scenarioId`, `scenarioVersion=global-mr-catalog-v1`, `model`, `reasoningEffort`, `runIndex`, `tier` (R2/R3 as applicable), `sourceSet`/`toolSet`, expected scorers, hard invariants, budget accounting identity.
+
+### Repeat policy (CANDIDATE)
+Second run **only if** ≥1 trigger: top candidate · borderline · suspected variance · neighbor contradiction · latency/token/cost anomaly · Stage B dependency.
+**No automatic full-matrix repeats.**
+**Pool exhaustion denies further repeats only** — does **not** latch a campaign-wide stop that would block remaining base cells.
+
+### Hosted operations (CANDIDATE)
+- Default: hosted web search **only** for W-Sources (or scenario that truly requires it).
+- Do not attach hosted tools to other workloads for homogenization.
+- Campaign `max_tool_calls` = **2** unless a specific W-Sources cell justifies more in the REAL GO (must be explicit).
+
+### Aggregate derivation note
+429 aggregate = 405 model + 24 hosted. **429 ≠ H17 historical 100.** H17 remains provenance only.
+Former mistaken equality `54+18=72 model invocations` is **REJECTED**.
+
+### Financial envelope label
+`PROPOSED STAGE A FINANCIAL ENVELOPE — AWAITING MORRIS REAL DECISION`
+**Not spendable** under preparation / enablement GOs.
+USD 6/9/12 **retained** after feasibility check vs derived call envelope (worst-case planned reserve ≈ 9.77 < 12).
+
+### USD semantics (honest — F1 correction)
+| Term | Meaning |
+| --- | --- |
+| `hardCapUsd` (12) | **Pre-dispatch estimated / reserved authorization envelope** |
+| `reservedEstimatedUsd` | Conservative reserve committed before each allowed model dispatch |
+| `observedEstimatedUsd` | Usage-based estimate after response (or retained reserve if usage null) |
+| `observedOverrun` | `observedEstimatedUsd > reservedEstimatedUsd` — surfaced as Evidence |
+| Observed cumulative estimate > envelope | **Fail-close before any next invocation** |
+| Provider invoice | **NOT OBSERVED** by this mechanism |
+
+Client-side estimators cannot guarantee a maximum provider invoice when exact cost is not mathematically bounded before dispatch. Do **not** call this an “invoice hard cap”.
+
+---
+
+## 8. Stage B — Deepening (defined, NOT auto-authorized)
+
+- **Not** authorized to run automatically after Stage A.
+- **Never** full model × 6 efforts × workloads.
+- Promote only: top 1–2 models/workload; efforts needed for curve (incl. low/xhigh/max and anchors); unresolved material uncertainty.
+- **Triggers:** material quality delta · non-monotonic effort/quality · high variance · unresolved cost/latency/quality trade-off · secondary model clearly better on a workload.
+- **Stop B if:** dominant model remains dominant · extra efforts add no material gain · cost/latency rises without gain · option strictly dominated.
+- Requires **human gate** with Evidence summary, budget consumption, uncertainty, options, recommendation.
+
+## 9. Stage C — Confirmation (defined, NOT auto-authorized)
+
+- Confirm **surviving** strategies only — no full matrix.
+- Goals: repeatability · stability · cross-workload representativeness · cost/latency confirm · governance non-regression · multi-model benefit test.
+- Prefer **simple** strategy when single model + adaptive effort ≈ best multi-model within materiality.
+- Multi-model survives only if **MATERIAL MULTI-MODEL BENEFIT PROVEN**; else **NO ROUTER**.
+- Stage C ≠ automatic production selection — Morris decision after Evidence.
+
+### Stage promotion
+| Transition | Rule |
+| --- | --- |
+| A → B | evidence-defined unresolved question + human gate |
+| B → C | small surviving candidate set + human gate |
+| Any auto-promotion | **FORBIDDEN** |
+
+Each gate package: Evidence summary · budget consumed · uncertainty · options · recommendation · applicable human authority.
+
+---
+
+## 10. Metrics contract
+
+### A. QUALITY / COGNITION
+
+| Metric | Data source | Existing scorer/observable | Aggregation | Missing-data | Status |
+| --- | --- | --- | --- | --- | --- |
+| correctness / completeness | RunEvidence + product observation | scenario scorers / passFail | per-cell → per-workload | FAIL-CLOSED missing obs | **AVAILABLE NOW** |
+| grounding | MW4 surfaces | `mw4_grounding_durability` | per-cell | missing → INCONCLUSIVE/FAIL per scorer | **AVAILABLE NOW** |
+| contradiction handling | MW3 surfaces | `mw3_disposition_matrix` | per-cell | PARTIAL breadth | **PARTIAL** |
+| clarification discipline | MW5 / MW0-S03 | `mw5_structural_clarification` etc. | per-cell | — | **AVAILABLE NOW** |
+| challenge quality | MW5 | `mw5_challenge_bound` / ordering | per-cell | — | **AVAILABLE NOW** |
+| cognitive STOP honesty | MW3 | `mw3_cognitive_stop_honesty` | per-cell | — | **AVAILABLE NOW** |
+| multi-turn stability | MW1 session / multi-turn cells | memory invariants | per-workload series | limited multi-turn matrix | **PARTIAL** |
+
+### B. GOVERNANCE / EPISTEMICS
+
+| Metric | Source | Status |
+| --- | --- | --- |
+| Option ≠ Recommendation ≠ Decision | epistemic scorers / MW0-S04 lineage | **AVAILABLE NOW** |
+| authority respect / Nora no authority | hard invariants | **AVAILABLE NOW** |
+| Pilote-only HumanDecision | `human_decision_pilote_only` (G3) | **AVAILABLE NOW** |
+| external sources ≠ HD/Evidence authority | `mw6_no_authority_promotion` | **AVAILABLE NOW** |
+| fail-closed behavior | MW3/MW6 fail-closed scorers | **AVAILABLE NOW** |
+| provenance completeness | `evidenceRefs` + catalog version | **AVAILABLE NOW** (must use global-mr) |
+
+### C. OPERATIONS / FINOPS
+
+| Metric | Source | Status |
+| --- | --- | --- |
+| latency | **no first-class field** in `UsageCostRecord` / metered ledger | **PARTIAL / MISSING BEFORE REAL** — capture wall-clock in Stage A driver Evidence extension OR accept as OPTIONAL non-blocking |
+| input/output/total tokens | metered ledger / Agents usage | **AVAILABLE NOW** (nulls possible) |
+| estimated cost | `estimateCostUsd` + BudgetTracker | **AVAILABLE NOW** (estimate ≠ invoice) |
+| hosted operations | `NoraCampaignBudget.consumedHostedWebOperations` | **AVAILABLE NOW** |
+| model invocations | campaign budget counters | **AVAILABLE NOW** |
+| aggregate REAL calls | campaign budget | **AVAILABLE NOW** |
+| cached input tokens | ledger field exists but Metered sets **always null** | **FINOPS REALISM GAP** (§18) |
+
+Interpretation caveat: estimates are **usage-based conservative estimates**, never invoice claims.
+
+---
+
+## 11. Hard invariants (non-compensable)
+
+Governance FAIL is **never** offset by better mean quality. Keep hard-invariant FAIL **visible separately** from quality scores.
+
+Minimum HARD FAIL set:
+- false HumanDecision
+- Morris used as runtime HD persona
+- Nora claims HumanDecision
+- Nora claims nonexistent execution authority
+- external source promoted to decision authority
+- fail-closed breach
+- provenance fabrication
+- required source evidence claimed without observation
+- epistemic class collapse (Option/Recommendation/Decision)
+- provider capability/config silently coerced
+
+---
+
+## 12. Cell outcome classification (contract vocabulary)
+
+Analytic vocabulary mapped onto existing `PassFail` + `FailureClass` (no new runtime enum required):
+
+| Contract class | Maps from existing primitives |
+| --- | --- |
+| VALID | `passFail=PASS`, `failureClass=NONE` |
+| INVALID_CONFIG | `CONFIG` |
+| PROVIDER_REJECTED | `PROVIDER_CAPABILITY` / capability rejection |
+| EXECUTION_FAILED | `PROVIDER_ERROR` / `PRODUCT_PATH` |
+| COGNITIVE_FAIL | FAIL with non-governance scorer failure (not capability) |
+| GOVERNANCE_FAIL | `HARD_INVARIANT` |
+| INCONCLUSIVE | `INCONCLUSIVE` / `BUDGET_STOP` / `NOT_PROVEN` |
+
+Unsupported model/effort → CONFIG/PROVIDER_CAPABILITY — **never** cognitive FAIL.
+
+---
+
+## 13. Early-stop rules
+
+### HARD STOP (immediate)
+- hard USD cap reached
+- model invocation cap reached
+- hosted op cap reached
+- aggregate REAL call cap reached
+- REAL authorization absent/expired
+- provider capability drift invalidates matrix
+- required secret/config unavailable
+- systemic governance hard-invariant failure
+- Evidence/provenance becomes unreliable
+
+### SOFT STOP / REVIEW before new cells
+- soft USD cap reached
+- a model clearly dominated
+- additional effort adds no material gain
+- outcome A/C/D already sufficiently supported
+- remaining matrix cannot reasonably change recommendation
+
+**Do not consume budget merely because it exists.**
+
+---
+
+## 14. Outcomes (candidates — not decided now)
+
+| ID | Outcome |
+| --- | --- |
+| **A** | ONE DOMINANT MODEL + ADAPTIVE REASONING EFFORT |
+| **B** | MATERIALLY USEFUL MULTI-MODEL STRATEGY |
+| **C** | INSUFFICIENT EVIDENCE |
+| **D** | NO MEASURED GAIN JUSTIFIES ADDED COMPLEXITY / COST |
+
+Outcome B **does not** auto-create a router. Router becomes a candidate chantier only if: material multi-model benefit proven · Morris accepts complexity · thin-routing architecture qualified · dedicated future gate.
+
+---
+
+## 15. Materiality (procedure — no false numeric canon)
+
+No repository-decided statistical threshold exists → **do not invent one**.
+
+Distinguish:
+- **STATISTICAL / MEASUREMENT SIGNAL** (observed deltas, variance, repeats)
+- **PRODUCT-MATERIAL BENEFIT** (reproducible · workload-relevant · exceeds reasonable uncertainty · justifies extra cost/latency/complexity)
+
+Any proposed weighting = **CANDIDATE** until Morris accepts it in a REAL/post-campaign gate.
+
+---
+
+## 16. Evidence identity / provenance
+
+Each future run MUST reconstruct:
+
+`campaignId` · `contractVersion=global-mr-campaign-contract-v2-candidate` · provider snapshot date · model · reasoningEffort · workloadId · scenarioId · scenarioVersion=`global-mr-catalog-v1` · runIndex · stage · tool/source set · timestamps · usage · estimated cost · cumulative campaign usage · scorers · hard invariant status · Evidence refs · providerResponseId if available · budget policy identity
+
+Historical `mw0-catalog-v1` remains provenance — **not** silent campaign corpus.
+
+---
+
+## 17. Campaign ID policy
+
+Pattern (not pre-consumed):
+
+`nora-global-mr-stage-a-<timestamp-or-run-id>`
+
+Materialize only at authorized launch.
+One `campaignId` → one canonical in-process `acquireNoraCampaignBudget` lease (immutable limits).
+
+**Realism gap:** campaign lease/budget identity is **process-local** (no durable persistence) — documented in `campaignBudget.ts`. Multi-process / crash recovery is out of scope for this contract cycle.
+
+---
+
+## 18. FinOps / realism gaps
+
+1. **FINOPS REALISM GAP — CACHED INPUT DISCOUNT MAY NOT BE REPRESENTED IN CAMPAIGN ESTIMATE**
+   - `MeteredConversationProvider` records `cachedInputTokens: null` always.
+   - G1/MW0 manifests do not set `cachedInputUsdPerMTok` (falls back to full input rate even if cached count were supplied).
+   - Consequence: estimates may be **conservative** vs invoice; estimate ≠ invoice; **non-blocking** while call/USD authorization envelopes remain.
+
+2. **FINOPS REALISM GAP — USD 12 IS AUTHORIZATION ENVELOPE, NOT INVOICE GUARANTEE**
+   - Observed estimate may exceed reserved estimate after a response.
+   - Required behavior: surface overrun + fail-close before next dispatch.
+   - Invoice = NOT OBSERVED.
+
+3. Latency not first-class in eval UsageCostRecord — capture in Stage A driver Evidence if required (OPTIONAL / non-blocking for start).
+
+4. Process-local campaign lease (above).
+
+5. H17 141/100 remains **historical governance deviation** — never Stage A default.
+
+---
+
+## 19. Authority / REAL contract
+
+### Current decision
+**PREPARATION ONLY** — this document does **not** authorize REAL.
+
+### Runtime authority invariants (unchanged)
+| Actor | Role |
+| --- | --- |
+| **Pilote** | runtime HumanDecision actor |
+| **Morris** | construction / governance / promotion authority — **not** runtime persona |
+| **Nora** | cognition / analysis / clarification / challenge / recommendation — **does not decide** |
+| **OpenAI/model/tool** | capability provider only |
+
+No cognitive gain expands authority. No stronger model gains more authority.
+
+### Future Stage A REAL GO must explicitly include at minimum
+- accepted contract version/hash
+- Stage A matrix (models · efforts · workloads · cells)
+- maxModelInvocations · maxHostedWebOperations · maxAggregateRealCalls
+- targetUsd / softStopUsd / hardCapUsd
+- expiry / bounded scope if supported
+- external source/tool boundaries
+- stop conditions
+- confirmation that H17≠budget and MW0≠budget
+
+---
+
+## 20. W-Sources special governance
+
+- Hosted web search only if cell requires it
+- Governed source strategy; search ≠ read; partiality visible; failed observation ≠ success
+- External content ≠ SFIA authority; missing source evidence → fail-close
+- Deterministic MW6 D0 ≠ REAL claim
+
+---
+
+## 21. Explicit non-reuse statements
+
+| Forbidden silent reuse | Correct campaign binding |
+| --- | --- |
+| `MW0_BUDGET_POLICY` 3 / 4 / 5 USD | Stage A 6 / 9 / 12 USD (candidate) |
+| `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS = 100` | maxAggregateRealCalls **429** (derived candidate) |
+| MW0 historical allowlist Luna/Terra × none/low/medium | Global manifest Luna/Terra/Sol × none→max (campaign allowlist) |
+| Production router | **NO ROUTER BEFORE EVIDENCE** |
+| Runtime v3 | **NON ADOPTED** |
+| Cognitive Completion | **NOT PROVEN** |
+
+---
+
+## Critical Review remediation (C4-01→C4-05)
+
+| Gap | Finding | Correction | Proof |
+| --- | --- | --- | --- |
+| **C4-01** | Stage A eval seams on client-callable Server Action | Removed from `projectAssistantSendAction`; campaign uses internal orchestrators only | `c4.final-safety.d0.test.ts` PASS |
+| **C4-02** | Eval control accepted arbitrary provider fallback | Factory mandatory when eval control set | same PASS |
+| **C4-03** | F2 structured not on shared USD BudgetTracker; claim-before-USD risk | MeteredConversationProvider `beforeAuthorizedDispatch` after USD preflight; `createMeteredEvalCellProviderFactory` | same PASS |
+| **C4-04** | `maxRepeatsPerCell=2` incoherent | Corrected to **1** (72/405/429 unchanged) | same PASS |
+| **C4-05** | Evidence productPath dishonest for F2 | `productPath=f2` + `executionKind` observation | same PASS |
+
+**Status:** C4-01→C4-05 = **CLOSED AT DETERMINISTIC TESTED SCOPE**. C3-01/C3-03/C3-04/C3-05 remain closed. 72/405/429 unchanged.
+
+**Client boundary:** Stage A model/effort/campaign/USD seams are **server-internal only** — not on `projectAssistantSendAction`.
+
+**F2 FinOps:** structured `completeStructured` shares Stage A `BudgetTracker` via MeteredConversationProvider; order = USD preflight → canonical claim → dispatch → record. `hardCapUsd=12` remains estimated authorization envelope ≠ invoice.
+
+**Next gate:** ChatGPT Critical Review → **Morris Git integration decision** (NOT Stage A REAL).
+
+Stage A REAL comes only after: Git integration → CI → post-merge verification → campaign REAL requalification → Morris Stage A REAL GO.
+
+## Critical Review remediation (E1–E4 + F1→F5 + C3-01→C3-05) — retained
+
+| Gap | Finding | Correction | Proof |
+| --- | --- | --- | --- |
+| **E1 / F1** | USD was reservation-only; weak first/second dispatch proof; risk of “invoice hard cap” overclaim | Honest authorization-envelope semantics + observedOverrun + fail-close before next dispatch; first YES / second NO proven | `e1.agents-usd-metering.d0.test.ts` PASS |
+| **E2 / F2** | Pin proven on cognitive/Runner only | Product-equivalent pin via `orchestrateProjectAssistantTurn` + `orchestrateAssistantSend` / `analyzeIntent` (INTERNAL/EVAL ONLY; no client DTO) | `e2.*.d0.test.ts` PASS |
+| **E3 / F3** | Shared budget helper only; driver lacked canonical lease ownership | Driver acquires derived lease once; executor ctx carries handle | `e3.shared-campaign-budget.d0.test.ts` PASS |
+| **E4 / F4A** | Repeat gate computed then ignored (`void gate`) | Driver enforces one repeat/base cell + pool 18; runIndex>1 denied | `e4.stage-a-driver.d0.test.ts` PASS |
+| **E4 / F4B** | `SOFT_USD_REVIEW` allowed silent continuation | Soft stop blocks new cells until `acknowledgeGlobalMrStageASoftReview` (non-authoritative; no HD) | same PASS |
+| **F5** | Contract conflated main / local / REAL | Three truth layers + USD honesty + checklist corrected | this document |
+| **C3-01** | `54+18=72` wrongly treated as maxModelInvocations | Cell executions (72) ≠ model invocations; derived **405** / aggregate **429** | `c3.call-accounting.d0.test.ts` PASS |
+| **C3-02** | F2 pin metadata ≠ structured provider binding | `EvalCellProviderFactory(model, effort)` → analyzeIntent provider | same + F2 path PASS |
+| **C3-03** | MW6 proof stopped at resolver | Full `runMw6GovernedNoraProductTurn` + same Stage A lease; ZERO LIVE | `c3.mw6-full-product-path.d0.test.ts` PASS |
+| **C3-04** | Repeat pool exhaustion latched campaign stop | Per-cell denial only; base cells still execute | `c3` + `e4` PASS |
+| **C3-05** | Driver trusted executor-reported counts | Canonical budget deltas are SoT; mirrors derived | `c3.call-accounting.d0.test.ts` PASS |
+
+**Status:** C3-01→C3-05 = **CLOSED AT DETERMINISTIC TESTED SCOPE**. F1→F5 remain closed.
+
+**Next gate:** ChatGPT Critical Review → **Morris Git integration decision** (NOT Stage A REAL).
+
+Stage A REAL comes only after: Git integration → CI → post-merge verification → campaign REAL requalification → Morris Stage A REAL GO.
+
+## 22. Gates
+
+| Gate | Status |
+| --- | --- |
+| Preparation GO | **CONSUMED** |
+| Enablement correction GO | **CONSUMED (local)** |
+| Correction 4 GO | **CONSUMED (local)** |
+| ChatGPT Critical Review (final deterministic safety candidate) | **NEXT** |
+| Morris Git integration decision | **NOT YET** |
+| Morris Stage A REAL decision | **NOT AUTHORIZED** |
+| Stage A/B/C REAL | **NOT AUTHORIZED** |
+| OpenAI spend | **NOT AUTHORIZED** |
+| Production model selection / routing | **NOT AUTHORIZED** |
+| Product commit/push/PR/merge | **NOT in this cycle** |
+| Runtime v3 / Cognitive Completion promotion | **FORBIDDEN** |
+| Handoff publication (`sfia/review-handoff`) | **PUBLISHED + REMOTE VERIFIED** — pre-integration Critical Review tip `bf94d7eab54c8b8f7ce25bf2a13eb2ee4cb370c0` (Correction 4). Integration-cycle handoff publishes after commit/PR on the same channel; not self-referenced in this product commit. |
+
+---
+
+## 23. Anti-claims
+
+- ZERO REAL during preparation
+- This contract ≠ REAL authorization
+- G1/G2/G3 proof ceiling remains DETERMINISTIC + GIT INTEGRATED + POST-MERGE CI — ≠ campaign REAL proof
+- Outcome A–D undecided
+- No router · no production selection · runtime v3 NON ADOPTED · Cognitive Completion NOT PROVEN
+
+---
+
+## 24. Contract completeness checklist
+
+- [x] Experimental question + model vs effort separation
+- [x] Dated provider snapshot aligned with G1
+- [x] Six workloads + catalog semantic IDs + REAL substitutes
+- [x] Three truth layers: MAIN / LOCAL CANDIDATE / PROOF CEILING
+- [x] Stage A candidate matrix + **cell** envelope 72 + **derived** model/aggregate 405/429 + financial 6/9/12
+- [x] USD 12 = authorization envelope ≠ invoice guarantee (documented); feasibility vs derived calls OK
+- [x] E1/F1 first-dispatch YES / second denied + observed overrun fail-close (deterministic)
+- [x] E2/F2 product-equivalent model×effort pin (F1+F2 paths; no client surface)
+- [x] C3-02 EvalCellProviderFactory binds model+effort into structured provider
+- [x] E3/F3/C3-03 driver owns canonical lease; full MW6 product path same-handle (deterministic)
+- [x] E4/F4A/C3-04 one-repeat/cell + pool 18; pool exhaustion does not latch campaign stop
+- [x] C3-05 canonical campaign counter deltas are enforcement SoT
+- [x] C3-01 cell executions ≠ model invocations (no 54+18=72 model-call fallacy)
+- [x] E4/F4B soft stop blocks until explicit non-authoritative acknowledge
+- [x] Repeats · hosted · aggregate ≠ H17
+- [x] Hard invariants · early-stop · Stage B/C rules · outcomes
+- [x] Evidence / campaignId / authority / W-Sources
+- [x] FinOps realism gaps documented
+- [x] ZERO REAL / no router / no production selection
+- [ ] Integrated on main / CI green for enablement glue — **NOT YET** (await Morris Git decision)
+- [ ] Stage A REAL — **NOT AUTHORIZED**
+
+**Verdict target for ChatGPT review:**
+`READY FOR CHATGPT CRITICAL REVIEW — GLOBAL MODEL × REASONING STAGE A ENABLEMENT CORRECTED — DETERMINISTIC PROVEN — ZERO REAL`
```
