# SFIA Review Pack — Lifecycle Recommendation PR #477 CI Correction

## Header
- timestamp_utc: 2026-09-08T18:29:49Z
- cycle: SFIA-STUDIO-PRODUCT-PROOF-LIFECYCLE-RECOMMENDATION-PR-CI-CORR-01
- type: Cycle 8 — Delivery projet
- nature: EVOL
- profile: CRITICAL
- capability: Lifecycle Recommendation & Pilot Decision Continuity
- milestone: Product Proof / Pilot-Governed Project Lifecycle — PR #477 CI correction
- runtime_v3: NON ADOPTED
- fake_real: ZERO REAL
- merge: NO
- mark_ready: NO

## Morris GO consumed
GO MORRIS — PR #477 CI CORRECTION — AUTHORIZE BOUNDED PRODUCT CORRECTION ON delivery/sfia-studio-lifecycle-recommendation-product TO RESTORE PROJECT-ASSISTANT IMPORT BOUNDARY AND PRODUCT-EQUIVALENT CONTROL WITHOUT CHANGING ACCEPTED LIFECYCLE RECOMMENDATION SEMANTICS — PUSH ONE FOLLOW-UP COMMIT TO SAME DRAFT PR — RERUN REQUIRED CI — PUBLISH REVIEW HANDOFF — ZERO REAL — NO MERGE.

## Initial Local Git Truth (before mutation)
- branch: delivery/sfia-studio-lifecycle-recommendation-product
- HEAD: dbc1755315f0878ccc5be122966ad0b34895da47
- origin/main: e6d7c649e9d0522b60401f11fb8dd1fd4b122637
- remote Product: dbc1755315f0878ccc5be122966ad0b34895da47
- incoming handoff: 3503b9fc2a11619de7823bcd54d4676f1e236367
- staged: empty
- Product dirty: none (only .tmp-sfia-review)

## Convergence qualification
- Capability/milestone confirmed.
- LR semantics / Nora path / typed carrier: REUSE — FROZEN
- Project Assistant runtime resolution from orchestrateTurn: ADAPT
- mw3AvailableEvidence lazy runtime seam: REUSE
- import-boundary policy: REUSE — NOT WEAKENED
- product-equivalent control: REUSE (Fake/Scripted coerce for injected Model)

## Original CI blocker (run 34234709184)
1. importBoundaries — unexpected edge orchestrateTurn.ts:@/lib/vertical-slice-runtime
2. e2.product-equivalent-control — result.ok false; Invalid output type schema mismatch

## Reproduced locally before fix
Same two failures via vitest on those exact files.

## Root cause
GAP-01: orchestrateTurn dynamically imported vertical-slice-runtime (forbidden entrypoint).
GAP-02: ScriptedModel injection bypassed Fake completeRound product-turn coerce; Agents SDK rejected plain text under product-turn outputType.

## Authorized seam
REUSE mw3AvailableEvidence.ts lazy @/lib/vertical-slice-runtime import (already allowlisted).
Added resolveOaStackForLifecycleRecommendation(); orchestrateTurn calls it.
GAP-02: wrap injected Model via wrapAgentsModelForProductTurnPlainTextCoercion in resolveNoraAgentsF1Model (same coerce as Fake completeRound). Live string models unchanged.

## Semantic fidelity
LR-D01..D05 unchanged; no schema/DDL/UI; no second model call; no allowlist edit; authority none; RESUME untouched.

## Files changed (correction only)
1. orchestrateTurn.ts
2. mw3AvailableEvidence.ts
3. providerAgentsModel.ts
4. runNoraAgentsTurn.ts

## Correction diffs (dbc1755315f0878ccc5be122966ad0b34895da47 -> 2081ce477182d133cc71c93dd7d547433bd6a976)

### orchestrateTurn.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index e24ad5eb..c03c4732 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -29,7 +29,10 @@ import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
 import { collectToolTelemetry } from "./collectToolTelemetry";
 import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
 import { resolveAssistantMode } from "./resolveAssistantMode";
-import { resolveRememberedEvidence } from "./mw3AvailableEvidence";
+import {
+  resolveRememberedEvidence,
+  resolveOaStackForLifecycleRecommendation,
+} from "./mw3AvailableEvidence";
 import type { AdvisoryMethodContext } from "./f2/methodOrientation";
 import type { StudioCognitiveContext } from "./f2/studioCognitiveContext";
 import type {
@@ -312,12 +315,11 @@ export async function orchestrateProjectAssistantTurn(input: {
       if (!extracted.candidate) {
         lifecycleRecommendationMaterialized = false;
       } else {
-        const { getRuntimeApplicationService } = await import(
-          "@/lib/vertical-slice-runtime"
-        );
-        const runtime = getRuntimeApplicationService();
-        if (runtime.oa) {
-          const oa = runtime.oa;
+        // OA access via authorized Project Assistant seam (mw3AvailableEvidence
+        // lazy runtime import) — never import vertical-slice-runtime here.
+        const oaResolved = await resolveOaStackForLifecycleRecommendation();
+        if (oaResolved.ok) {
+          const oa = oaResolved.oa;
           const cycles = await oa.cycleServices.cycles.listByProject(
             project.projectId,
           );
@@ -431,6 +433,9 @@ export async function orchestrateProjectAssistantTurn(input: {
           } else {
             lifecycleRecommendationMaterialized = false;
           }
+        } else {
+          lifecycleRecommendationMaterialized = false;
+          lifecycleRecommendationCode = "LR_BASIS_UNAVAILABLE";
         }
       }
     }
```

### mw3AvailableEvidence.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts b/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
index 96fec3f5..0df9c730 100644
--- a/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
@@ -282,3 +282,29 @@ async function lookupEvidenceRecord(
     return { kind: "resolution_failed", reason: "repository_error" };
   }
 }
+
+/**
+ * Project Assistant OA access for Lifecycle Recommendation materialization.
+ * Reuses the same lazy `@/lib/vertical-slice-runtime` seam already authorized
+ * for this module (Evidence lookup). Callers such as orchestrateTurn must NOT
+ * import the global runtime themselves.
+ */
+export async function resolveOaStackForLifecycleRecommendation(): Promise<{
+  ok: true;
+  oa: NonNullable<
+    ReturnType<
+      typeof import("@/lib/vertical-slice-runtime").getRuntimeApplicationService
+    >["oa"]
+  >;
+} | { ok: false; reason: "runtime_unavailable" | "oa_unavailable" }> {
+  try {
+    const { getRuntimeApplicationService } = await import(
+      "@/lib/vertical-slice-runtime"
+    );
+    const oa = getRuntimeApplicationService().oa;
+    if (!oa) return { ok: false, reason: "oa_unavailable" };
+    return { ok: true, oa };
+  } catch {
+    return { ok: false, reason: "runtime_unavailable" };
+  }
+}
```

### providerAgentsModel.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index 8681e19d..6eba0119 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -181,6 +181,108 @@ function roundResultToModelResponse(
   };
 }

+/** Coerce plain assistant text into product-turn JSON when outputType requires it. */
+export function coercePlainTextToProductTurnJson(text: string): string {
+  let alreadyStructured = false;
+  try {
+    const parsed = JSON.parse(text) as unknown;
+    alreadyStructured =
+      !!parsed &&
+      typeof parsed === "object" &&
+      typeof (parsed as { narrative?: unknown }).narrative === "string";
+  } catch {
+    alreadyStructured = false;
+  }
+  if (alreadyStructured) return text;
+  return JSON.stringify({
+    narrative: text,
+    lifecycleRecommendation: null,
+  });
+}
+
+function productTurnOutputTypeName(request: ModelRequest): string {
+  return request.outputType &&
+    typeof request.outputType === "object" &&
+    "name" in request.outputType
+    ? String((request.outputType as { name?: unknown }).name ?? "")
+    : "";
+}
+
+function coerceModelResponseForProductTurn(
+  response: ModelResponse,
+  request: ModelRequest,
+): ModelResponse {
+  if (productTurnOutputTypeName(request) !== "nora_product_turn_with_optional_lr") {
+    return response;
+  }
+  const output = Array.isArray(response.output) ? [...response.output] : [];
+  let changed = false;
+  for (let i = 0; i < output.length; i += 1) {
+    const item = output[i];
+    if (!item || typeof item !== "object") continue;
+    const msg = item as {
+      type?: string;
+      role?: string;
+      status?: string;
+      content?: unknown;
+      providerData?: Record<string, unknown>;
+      id?: string;
+    };
+    if (msg.type !== "message" || msg.role !== "assistant") continue;
+    if (!Array.isArray(msg.content)) continue;
+    const nextContent = msg.content.map((part) => {
+      if (
+        part &&
+        typeof part === "object" &&
+        (part as { type?: string }).type === "output_text" &&
+        typeof (part as { text?: unknown }).text === "string"
+      ) {
+        const text = (part as { text: string }).text;
+        const coerced = coercePlainTextToProductTurnJson(text);
+        if (coerced !== text) changed = true;
+        return {
+          ...(part as Record<string, unknown>),
+          type: "output_text" as const,
+          text: coerced,
+        };
+      }
+      return part;
+    });
+    output[i] = {
+      ...msg,
+      type: "message" as const,
+      role: "assistant" as const,
+      status: (msg.status as "completed" | "in_progress" | "incomplete") ?? "completed",
+      content: nextContent,
+    } as (typeof output)[number];
+  }
+  return changed ? { ...response, output } : response;
+}
+
+/**
+ * Wrap an injected Agents Model (e.g. ScriptedModel) so plain-text Fake/eval
+ * responses satisfy product-turn outputType — same coerce as Fake completeRound.
+ * Live OpenAI string models are unaffected (caller passes string, not Model).
+ */
+export function wrapAgentsModelForProductTurnPlainTextCoercion(
+  model: Model,
+): Model {
+  return {
+    async getResponse(request: ModelRequest): Promise<ModelResponse> {
+      const response = await model.getResponse(request);
+      return coerceModelResponseForProductTurn(response, request);
+    },
+    async *getStreamedResponse(
+      ...args: Parameters<Model["getStreamedResponse"]>
+    ) {
+      const stream = model.getStreamedResponse(...args);
+      for await (const event of stream) {
+        yield event;
+      }
+    },
+  };
+}
+
 /**
  * Agents SDK Model backed by ConversationProvider.completeRound (Fake path).
  */
@@ -218,30 +320,11 @@ export function createProviderAgentsModel(
       const tools = toolDefinitionsFromModelRequest(request);
       const round = await completeRound({ items, tools });
       if (round.kind === "message") {
-        const name =
-          request.outputType &&
-          typeof request.outputType === "object" &&
-          "name" in request.outputType
-            ? String((request.outputType as { name?: unknown }).name ?? "")
-            : "";
-        if (name === "nora_product_turn_with_optional_lr") {
-          let text = round.text;
-          let alreadyStructured = false;
-          try {
-            const parsed = JSON.parse(text) as unknown;
-            alreadyStructured =
-              !!parsed &&
-              typeof parsed === "object" &&
-              typeof (parsed as { narrative?: unknown }).narrative === "string";
-          } catch {
-            alreadyStructured = false;
-          }
-          if (!alreadyStructured) {
-            text = JSON.stringify({
-              narrative: round.text,
-              lifecycleRecommendation: null,
-            });
-          }
+        if (
+          productTurnOutputTypeName(request) ===
+          "nora_product_turn_with_optional_lr"
+        ) {
+          const text = coercePlainTextToProductTurnJson(round.text);
           return roundResultToModelResponse({ ...round, text });
         }
       }
```

### runNoraAgentsTurn.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 98652274..fd775909 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -30,6 +30,7 @@ import type { NoraAgentsUsdSettleResult } from "./agentsUsdAccounting";
 import {
   createProviderAgentsModel,
   isFakeConversationProvider,
+  wrapAgentsModelForProductTurnPlainTextCoercion,
 } from "./providerAgentsModel";
 import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
 import type { MemoryBAvailability } from "./memoryBAvailability";
@@ -214,7 +215,13 @@ export function shouldUseProviderAgentsModelAdapter(
 export function resolveNoraAgentsF1Model(
   input: Pick<RunNoraAgentsTurnInput, "model" | "provider">,
 ): Model | string {
-  if (input.model !== undefined) return input.model;
+  if (input.model !== undefined) {
+    // Injected ScriptedModel (Model object) must coerce plain text under
+    // product-turn outputType — same contract as Fake completeRound adapter.
+    // Live model strings are unchanged.
+    if (typeof input.model === "string") return input.model;
+    return wrapAgentsModelForProductTurnPlainTextCoercion(input.model);
+  }
   if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
     return createProviderAgentsModel(input.provider);
   }
```

### Correction stat
```
.../project-assistant/mw3AvailableEvidence.ts      |  26 ++++
 .../features/project-assistant/orchestrateTurn.ts  |  19 +--
 .../nora-cognitive-runtime/providerAgentsModel.ts  | 131 +++++++++++++++++----
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   9 +-
 4 files changed, 153 insertions(+), 32 deletions(-)
```

## Local validation after correction
- importBoundaries + e2: 17 PASS
- LR finalCorr+delivery+corrProof05+OT+mw1 (+ blockers): 187 PASS
- adversarial: 22 PASS
- tsc: PASS
- lint: PASS
- build: PASS
- git diff --check: PASS
- allowlist unchanged: YES
Pre-commit verdict: PASS

## Product follow-up commit
- message: fix(sfia-studio): restore project assistant runtime boundary
- SHA: 2081ce477182d133cc71c93dd7d547433bd6a976
- parent: dbc1755315f0878ccc5be122966ad0b34895da47
- push: SUCCESS (no force)
- remote Product SHA: 2081ce477182d133cc71c93dd7d547433bd6a976

## PR #477
- OPEN draft YES
- base main @ e6d7c649e9d0522b60401f11fb8dd1fd4b122637
- head 2081ce477182d133cc71c93dd7d547433bd6a976
- URL https://github.com/mcleland147/sfia-workspace/pull/477
- fileset vs local main..head: EQUAL (34 files = accepted candidate + mw3AvailableEvidence modification)
- parity: PR DIFF = ACCEPTED LIFECYCLE RECOMMENDATION CANDIDATE + AUTHORIZED BOUNDED CI CORRECTION

### Full PR diff vs main
```
.../lifecycleRecommendation.delivery.d0.test.ts    |  939 +++++++++++++++++
 .../lifecycleRecommendation.finalCorr.d0.test.ts   | 1088 ++++++++++++++++++++
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   15 +
 .../surfaces/LifecycleSurface.module.css           |  125 +++
 .../surfaces/LifecycleSurface.tsx                  |  251 +++++
 .../surfaces/lifecyclePresentation.ts              |  118 +++
 .../surfaces/lifecycleVisualContract.ts            |   30 +
 .../app/features/project-assistant/actions.ts      |  208 +++-
 .../project-assistant/mw3AvailableEvidence.ts      |   26 +
 .../features/project-assistant/orchestrateTurn.ts  |  157 ++-
 .../app/features/project-assistant/types.ts        |    7 +
 .../noraLifecycleRecommendationOutputType.ts       |   52 +
 .../noraProductTurnOutputType.ts                   |   52 +
 .../nora-cognitive-runtime/providerAgentsModel.ts  |  111 ++
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   58 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |    7 +
 .../app/lib/nora-cognitive-runtime/types.ts        |    5 +
 .../oa/cycle/application/lifecycleProjection.ts    |   16 +
 .../lifecycleRecommendation/basisFingerprint.ts    |   87 ++
 .../lifecycleRecommendation/currentness.ts         |  171 +++
 .../application/lifecycleRecommendation/index.ts   |   10 +
 .../materialReaderContract.ts                      |   84 ++
 .../materializeFromProductTurn.ts                  |  165 +++
 .../materializeLifecycleRecommendation.ts          |  207 ++++
 .../lifecycleRecommendation/noraActor.ts           |   14 +
 .../produceLifecycleRecommendation.ts              |  160 +++
 .../resolveCanonicalBasis.ts                       |  156 +++
 .../application/lifecycleRecommendation/types.ts   |   70 ++
 .../validateLifecycleRecommendation.ts             |  170 +++
 .../oa/cycle/application/updateEpistemicState.ts   |    3 +
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |   42 +
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |    1 +
 .../schemas/epistemic/epistemic-item.schema.json   |    3 +
 .../epistemic/lifecycle-recommendation.schema.json |  111 ++
 34 files changed, 4711 insertions(+), 8 deletions(-)
```

### Name-status vs main
```
A	projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
A	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts
A	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/noraActor.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/resolveCanonicalBasis.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json
```

## New CI run 34262518389
- head: 2081ce477182d133cc71c93dd7d547433bd6a976
- Detect: success
- Build and validate: failure
- Required Gate: failure
- Typecheck/Lint/Build steps: success
- Vitest: 3283 passed, 3 failed (all Test timed out in 5000ms):
  1. nora-eval/g2.catalog-versioning-mw6.test.ts
  2. nora-eval/mw0.d0.test.ts
  3. project-assistant/w3cPostEvidenceCorrection.test.ts
- Original GAP-01/GAP-02 failures: absent from this CI failure set
- ONE follow-up commit consumed; no second auto-fix
CI_VERDICT=FAIL

## Reserves
- RESERVE-UX-01 retained
- RESERVE-PROOF-01 retained

## ZERO REAL
YES

## Final Product Git state
```
delivery/sfia-studio-lifecycle-recommendation-product
2081ce477182d133cc71c93dd7d547433bd6a976
dbc1755315f0878ccc5be122966ad0b34895da47
e6d7c649e9d0522b60401f11fb8dd1fd4b122637
2081ce477182d133cc71c93dd7d547433bd6a976	refs/heads/delivery/sfia-studio-lifecycle-recommendation-product
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/discovery-matrix.md
?? .tmp-sfia-review/product-tracked.diff
```

## Next Morris gate
ChatGPT/Morris disposition for remaining CI timeouts after GAP-01/GAP-02 closure. No merge.

## Final verdict
PR NOT READY — CI FAIL AFTER AUTHORIZED BOUNDED CORRECTION — ONE FOLLOW-UP COMMIT CONSUMED — NO SECOND AUTO-FIX AUTHORIZED — ZERO REAL — HANDOFF REMOTE VERIFIED — NO MERGE

## Review Pack Content Coverage
- Product mutation this cycle: YES (4 files)
- complete usable diffs: YES
- import-boundary not weakened: YES
- LR semantics unchanged: YES
- CI matrix: YES
- reservations: YES
- synthesis only: NO
- artificial truncation: NO
- review pack verdict: COMPLETE

ANTI-TRUNCATION LOCAL = ZERO
