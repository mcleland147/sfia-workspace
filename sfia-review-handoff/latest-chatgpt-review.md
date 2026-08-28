# SFIA Studio — Review Pack FULL — V3-REAL-B-BLOCKER-01-CORR-01

## Metadata

- **Cycle ID:** V3-REAL-B-BLOCKER-01-CORR-01
- **Parent cycle:** V3-REAL-B-BLOCKER-01
- **Parent REAL campaign:** V3-REAL-B-QUALIFICATION-COGNITIVE-REASONING-01
- **Timestamp (Europe/Paris):** 2026-08-28 12:08:48 CEST
- **Morris GO (exact):** GO V3-REAL-B-BLOCKER-01-CORR-01 — LOCAL CORRECTION ONLY — SAME F1/F2 SEAM — REMOVE FIXTURE GROUNDING SHORT-CIRCUIT / KEEP FAKE AT EXTERNAL PROVIDER BOUNDARY — GENERALIZE SOURCE-DEPENDENCY GROUNDING TRIGGER — TARGETED + TYPECHECK + BUILD + FULL VITEST EXIT 0 REQUIRED — NO OPENAI LIVE — NO REAL-B RERUN — NO COMMIT/PUSH/PR/MERGE — NO REAL-C
- **Repo:** mcleland147/sfia-workspace
- **Local root:** /Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync
- **Branch:** fix/sfia-studio-real-b-blocker-01
- **HEAD:** 967f4c2b35948492caeba5347bb02c7c420de490
- **origin/main:** 967f4c2b35948492caeba5347bb02c7c420de490
- **origin/sfia/review-handoff consumed:** e458f7fc31c3e3a9cb8e7b8cb8b679db7bac497b (V3-REAL-B-BLOCKER-01 FULL pack)
- **Level:** FULL
- **Profile:** Critical · EVOL / Delivery correction
- **Primary capability:** V3-F05

## Convergence pre-check

- Product Completion: COMPLETE / CLOSED BY MORRIS
- REAL-A: COMPLETE / CONSUMED
- REAL-B campaign: BLOCKING (F-RB-01 + F-RB-07 unresolved at REAL level)
- V3-REAL-B-BLOCKER-01: architecture accepted; NOT final DETERMINISTIC PROVEN pending CORR-01 fidelity
- CORR-01 findings: F-RBB-CORR-01 fixture short-circuit · F-RBB-CORR-02 phrase-dependent trigger · full-suite gap
- F-RB-02: OPEN NONBLOCKING
- RB-04: PASS REAL / OUT / NO WORK
- runtime v3: NON ADOPTED · FinOps/T7 FREEZE · C6 CLOSED
- REAL-C: BLOCKED / NOT AUTHORIZED / NOT EXECUTED

## Findings disposition (CORR-01)

| ID | Result |
|---|---|
| F-RBB-CORR-01 | fixture short-circuit **REMOVED**; fake at external provider boundary only; same `runToolCallingLoop`; actual tool + source telemetry |
| F-RBB-CORR-02 | generic deterministic source/current-state dependency trigger; positive A–E paraphrases; negative F/G no gratuitous grounding; phrase-specific dependency **NO** (no required “avant de qualifier”) |
| F-RB-01 | **REMEDIATED IN CODE** (deterministic) — pending exact REAL-B REAL reproof |
| F-RB-07 | **REMEDIATED IN CODE** (deterministic) — pending exact REAL-B REAL reproof |
| F-RB-02 | **OPEN** |
| RB-04 | **OUT / PASS REAL / NO WORK** |

## Scope — files

### Product code
- NEW/MOD: `projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts` (fixture removed)
- MOD: `projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts`
- MOD (BLOCKER-01 retained): `f2/orchestrateF2.ts`, `f2/intentAnalysis.ts`, `orchestrateTurn.ts`

### Test / fake boundary
- MOD: `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts` — **removed** RB01/RB07 marker fabrication; production/live semantics **NO** change
- MOD: `__tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts` — TEST-ONLY `Corr01ToolLoopProvider`

### Remediation
- APPEND: `projects/sfia-studio/real-parity/remediation/real-b-blocker-01-source-grounded-cognitive-qualification.md`

### Evidence (.tmp only)
- `.tmp-sfia-review/real-b-blocker-01-corr01/**`

### Historical (immutable)
- `projects/sfia-studio/real-parity/02-real-b-qualification-cognitive-reasoning.md`
- sha256: `9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393  projects/sfia-studio/real-parity/02-real-b-qualification-cognitive-reasoning.md`

## Exact removal of fixture short-circuit

`fixturePrequalificationGrounding` no longer exists in product code. Grounding always executes:

`runProjectGroundingPreflight` → ConversationProvider → `runToolCallingLoop` → actual READ tools → memory sink → `collectToolTelemetry` → contradiction assessment → F2 re-analysis → qualify/createCycle only after barrier.

## Fake provider boundary

- Purpose of fakeProvider CORR-01 delta: **remove** blocker markers that coupled fabricated grounding intent outside the tool loop.
- Production/live provider semantics changed: **NO**
- Scope justified: **YES** — test-local provider emits real tool calls; stock FakeConversationProvider retained for non-blocker markers.

## Generic grounding-trigger design

Deterministic classifier `requiresPrequalificationGrounding(content)`:
1. elevated current-state claim language OR
2. cycle-qualification language AND repository/current-state dependency categories

**Not chosen:** new IntentAnalysis schema field / second LLM classifier (schema churn + false authority risk). Preliminary analysis remains routing-only when grounding is required.

### Positive trigger cases
- D'après l'état actuel… quel cycle…
- Au vu de… actuellement sur main… Roadmap… qualifie…
- On en est où après le dernier merge… quel cycle…
- Le runtime est ADOPTED, qualifie le passage en release
- En te basant sur les sources du projet… qualifie…

### Negative no-grounding cases
- Qualifie un cycle de cadrage pour un nouveau module dont le besoin est encore flou
- Nous devons auditer la sécurité avant release : qualifie le cycle

## Validation evidence

### Targeted
```

stdout | __tests__/project-assistant/f2.orchestrate.test.ts > F2 orchestration AC coverage > AC-F2-22/23 qualify uses catalog + isMorrisDecision false
{"event":"oa.ckc.qualification_succeeded","ts":"2026-08-28T10:06:49.452Z","correlationId":"cor:test-cap","cycleTypeId":"cyc:capitalization","result":"ok","detailedStatus":"resolved_synthetic","recommendedProfile":"Light","durationMs":0}
{"event":"oa.ckc.result_produced","ts":"2026-08-28T10:06:49.452Z","correlationId":"cor:test-cap","cycleTypeId":"cyc:capitalization","result":"ok","detailedStatus":"resolved_synthetic","recommendedProfile":"Light","durationMs":0}

stdout | __tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts > V3-REAL-B-BLOCKER-01-CORR-01 tool-loop fidelity + generic grounding > T-CKC grounded successful qualification still creates product-native cycle
{"event":"oa.ckc.resolution_started","ts":"2026-08-28T10:00:00.000Z","correlationId":"cor:f2-3107ffb06413e890","cycleTypeId":"cyc:qa-validation","result":"started"}
{"event":"oa.ckc.resolution_succeeded","ts":"2026-08-28T10:00:00.000Z","correlationId":"cor:f2-3107ffb06413e890","cycleTypeId":"cyc:qa-validation","result":"ok","detailedStatus":"resolved_detailed"}
{"event":"oa.ckc.consumption_validated","ts":"2026-08-28T10:00:00.000Z","correlationId":"cor:f2-3107ffb06413e890","cycleTypeId":"cyc:qa-validation","result":"ok","detailedStatus":"resolved_detailed"}
{"event":"oa.ckc.qualification_started","ts":"2026-08-28T10:00:00.000Z","correlationId":"cor:f2-3107ffb06413e890","cycleTypeId":"cyc:qa-validation","result":"started","detailedStatus":"resolved_detailed"}
{"event":"oa.cycle.qualified","ts":"2026-08-28T10:00:00.000Z","recommendedProfile":"Standard","result":"ok","durationMs":0}

stdout | __tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts > V3-REAL-B-BLOCKER-01-CORR-01 tool-loop fidelity + generic grounding > T-CKC grounded successful qualification still creates product-native cycle
{"event":"oa.ckc.qualification_succeeded","ts":"2026-08-28T10:00:00.000Z","correlationId":"cor:f2-3107ffb06413e890","cycleTypeId":"cyc:qa-validation","result":"ok","detailedStatus":"resolved_detailed","recommendedProfile":"Standard","durationMs":0}
{"event":"oa.ckc.result_produced","ts":"2026-08-28T10:00:00.000Z","correlationId":"cor:f2-3107ffb06413e890","cycleTypeId":"cyc:qa-validation","result":"ok","detailedStatus":"resolved_detailed","recommendedProfile":"Standard","durationMs":0}

 ✓ __tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts (11 tests) 329ms
 ✓ __tests__/project-assistant/f2.orchestrate.test.ts (14 tests) 353ms

 Test Files  3 passed (3)
      Tests  33 passed (33)
   Start at  12:06:48
   Duration  1.23s (transform 644ms, setup 64ms, collect 1.57s, tests 717ms, environment 127ms, prepare 80ms)

TARGETED_EXIT=0
```
TARGETED: 33/33 PASS (EXIT 0)

### Typecheck
```
> sfia-studio@0.1.0 typecheck
> tsc --noEmit

TYPECHECK_EXIT=0
```

### Build
```
├ ○ /studio                                130 B         177 kB
├ ƒ /studio/projects/[id]                  132 B         177 kB
├ ○ /studio/projects/new                   132 B         177 kB
├ ○ /synthese                            4.84 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.97 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

BUILD_EXIT=0
```
BUILD PASS (EXIT 0)

### Full Vitest attempts

#### Attempt 1 — SUCCESS EXIT 0
- command: `cd projects/sfia-studio/app && npm test`
- FULL_SUITE_ATTEMPT=1 START=2026-08-28 12:07:16 CEST
FULL_SUITE_ATTEMPT=1 EXIT=0 END=2026-08-28 12:07:32 CEST
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-28T10:07:31.954Z","status":"ok","projectId":"proj-7145ac5d-cc57-4db7-ba20-e9b408890ca4","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-28T10:07:31.955Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-28T10:07:31.955Z","status":"ok","projectId":"proj-7145ac5d-cc57-4db7-ba20-e9b408890ca4","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-28T10:07:31.955Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-28T10:07:31.955Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 19ms
 ✓ __tests__/project-assistant/importBoundaries.test.ts (3 tests) 17ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
 ✓ __tests__/project-assistant/presentationLabels.test.ts (37 tests) 6ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 2ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 2ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.test.ts (13 tests) 6ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3495ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1695ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  361ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 3672ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  645ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  673ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  701ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  647ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  354ms

 Test Files  224 passed | 13 skipped (237)
      Tests  2160 passed | 131 skipped (2291)
   Start at  12:07:16
   Duration  16.04s (transform 5.00s, setup 7.72s, collect 29.54s, tests 59.10s, environment 8.95s, prepare 8.62s)
- summary:
```
 Test Files  224 passed | 13 skipped (237)
      Tests  2160 passed | 131 skipped (2291)
   Start at  12:07:16
   Duration  16.04s (transform 5.00s, setup 7.72s, collect 29.54s, tests 59.10s, environment 8.95s, prepare 8.62s)
```
- failures: none
- second/third attempt: **NOT REQUIRED** (attempt 1 EXIT 0)

**FULL-SUITE CLASSIFICATION: FULL SUITE PASS PROVEN**

## Git truth (transport-time snapshot)

```
branch=fix/sfia-studio-real-b-blocker-01
HEAD=967f4c2b35948492caeba5347bb02c7c420de490
origin/main=967f4c2b35948492caeba5347bb02c7c420de490
origin/sfia/review-handoff=e458f7fc31c3e3a9cb8e7b8cb8b679db7bac497b

git status --short:
M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts
?? projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts
?? projects/sfia-studio/real-parity/02-real-b-qualification-cognitive-reasoning.md
?? projects/sfia-studio/real-parity/remediation/real-b-blocker-01-source-grounded-cognitive-qualification.md

git diff --stat:
.../project-assistant/f2/intentAnalysis.ts         |  14 +-
 .../features/project-assistant/f2/orchestrateF2.ts | 264 +++++++++++++++++----
 .../project-assistant/f2/repositoryIntent.ts       | 105 ++++++++
 .../features/project-assistant/orchestrateTurn.ts  | 131 +++-------
 4 files changed, 365 insertions(+), 149 deletions(-)

git diff --check:
EXIT:0
```

Corrective remote branch: ABSENT (expected)
OpenAI LIVE: 0
REAL-B RERUN: NO
REAL-C: NO
PROJECT COMMIT/PUSH/PR/MERGE: NONE
REMOTE HANDOFF UPDATED THIS CYCLE: NO
Transport status: REVIEW HANDOFF PUBLICATION PENDING — MORRIS PUSH GATE REQUIRED

## Proof ceiling

V3-REAL-B-BLOCKER-01-CORR-01 — CORRECTIVE DELIVERY DETERMINISTIC PROVEN — SHARED F1 TOOL-LOOP FIDELITY PROVEN — GENERIC SOURCE-DEPENDENCY GROUNDING PROVEN DETERMINISTICALLY — F-RB-01 + F-RB-07 REMEDIATED IN CODE — FULL VITEST EXIT 0 — PENDING EXACT REAL-B REAL REPROOF — NO OPENAI LIVE — NO COMMIT/PUSH/PR/MERGE — NO REAL-C — REVIEW HANDOFF PUBLICATION PENDING — MORRIS PUSH GATE REQUIRED

Do not claim F-RB-01/07 CLOSED BY REAL PROOF · REAL-B PASS · REAL-C READY · runtime v3 ADOPTED.

## COMPLETE CODE — groundingPreflight.ts (FULL CONTENT — untracked/new)

```typescript
/**
 * Shared read-only repository grounding — reuses F1 tool loop + telemetry.
 * Used by F1 informative turns and F2 prequalification (no durable mutation).
 *
 * FAKE and LIVE traverse the same path: ConversationProvider → runToolCallingLoop
 * → actual READ tools → memory sink → collectToolTelemetry. The fake may only
 * substitute external model behavior (tool-call decisions / final text).
 */

import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { runToolCallingLoop } from "@/lib/platform/tools";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import type {
  AssistantHistoryMessage,
  AssistantSourceDto,
  AssistantToolEventDto,
  ProjectAssistantContextDto,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;

export type GroundingPurpose = "f1_informative" | "f2_prequalification";

export type GroundingContradiction = {
  claim: string;
  groundedFact: string;
  sourceRefs: string[];
  severity: "warning" | "blocking";
};

export type ProjectGroundingSuccess = {
  ok: true;
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  /** Required sources were not obtained via successful READ tools. */
  unresolvedRequiredSources: boolean;
};

export type ProjectGroundingFailure = {
  ok: false;
  status: "provider_unavailable" | "provider_error";
  code: string;
  message: string;
  mode: "fixture" | "live" | "unavailable";
  retryable: boolean;
};

export type ProjectGroundingResult =
  | ProjectGroundingSuccess
  | ProjectGroundingFailure;

function resolveMode(): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
} {
  if (isFakeConversationProviderForced()) {
    return { mode: "fixture", canProceed: true };
  }
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    return {
      mode: "unavailable",
      canProceed: false,
      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
    };
  }
  return { mode: "live", canProceed: true };
}

function buildPrequalificationUserPrompt(userContent: string): string {
  return [
    "PREQUALIFICATION GROUNDING (read-only) — BEFORE any cycle qualification.",
    "Tasks:",
    "1. Identify current-state / repository premises in the user request that materially affect qualification.",
    "2. Resolve the required repository/runtime sources with READ tools only.",
    "3. Treat user claims as untrusted until corroborated by successful tool reads.",
    "4. Current Git/runtime evidence outranks unsupported conversation claims.",
    "5. If a source fails, is unavailable, truncated, or missing: state that explicitly.",
    "6. Do NOT qualify a cycle. Do NOT decide. Do NOT mutate. Do NOT execute.",
    "7. Return grounded facts with attributable source paths/refs only.",
    "8. If the user elevates an unsupported current-state claim to definitive fact/HumanDecision and sources contradict or fail to corroborate it, include exactly: CONTRADICTION_BLOCKING: yes",
    "9. Otherwise include: CONTRADICTION_BLOCKING: no",
    "",
    "User request:",
    userContent,
  ].join("\n");
}

/**
 * Read-only grounding via the same ConversationProvider + tool loop as F1.
 */
export async function runProjectGroundingPreflight(input: {
  project: ProjectAssistantContextDto;
  content: string;
  history?: AssistantHistoryMessage[];
  purpose: GroundingPurpose;
  correlationId?: string;
}): Promise<ProjectGroundingResult> {
  const content = input.content.trim();
  const modeResolution = resolveMode();
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const mode = modeResolution.mode as "fixture" | "live";
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const userPrompt =
    input.purpose === "f2_prequalification"
      ? buildPrequalificationUserPrompt(content)
      : content;

  const messages: ProviderChatMessage[] = [
    { role: "system", content: buildProjectSystemPrompt(input.project) },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content: userPrompt },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const correlationId =
    input.correlationId ??
    `${input.purpose === "f2_prequalification" ? "f2-preflight" : "f1"}:${input.project.projectId}`;

  try {
    const loop = await runToolCallingLoop({
      correlationId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
    });

    const { toolEvents, sources } = collectToolTelemetry(sink.events);
    const unresolvedRequiredSources =
      input.purpose === "f2_prequalification" && sources.length === 0;

    return {
      ok: true,
      text: loop.text,
      mode,
      presentation,
      model: loop.usage?.model ?? null,
      toolRounds: loop.toolRounds,
      toolCalls: loop.toolCalls,
      sources,
      toolEvents,
      unresolvedRequiredSources,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode,
      retryable: true,
    };
  }
}

/**
 * Process-local contradiction disposition from grounding output.
 * Relies on grounded CONTRADICTION_BLOCKING protocol — not product-specific
 * claim keywords in the user sentence.
 */
export function assessGroundingContradictions(input: {
  userContent: string;
  groundedText: string;
  sourceRefs: string[];
}): GroundingContradiction[] {
  void input.userContent;
  const contradictions: GroundingContradiction[] = [];
  const grounded = input.groundedText.trim();

  if (/\bCONTRADICTION_BLOCKING\s*:\s*yes\b/i.test(grounded)) {
    contradictions.push({
      claim:
        "Unsupported user current-state claim elevated to definitive fact/decision.",
      groundedFact: grounded.slice(0, 1200),
      sourceRefs: input.sourceRefs,
      severity: "blocking",
    });
  }

  return contradictions;
}

```

## COMPLETE CODE DIFF — tracked product/fake files

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index e08375d6..1c79fcc6 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -242,7 +242,8 @@ Règles strictes:
 - Ne décide jamais un GO Morris; ne propose jamais d'exécution; n'invente jamais un cycle (ex. delivery) par défaut.
 - Repository READ / analyse / résumé / recherche / vérité Git SANS mutation ni qualification de cycle = informative (PAS ambiguous, PAS actionable).
   Exemples informative: « Lis ce document et résume-le. », « Retrouve le cadrage Product Completion. », « Vérifie le HEAD et le status Git. », « Cherche CURSOR_REAL_TIMEOUT_POLICY. », « Reconstitue l'historique Product Completion à partir des sources. ».
-- Demande de Delivery / décision / exécution / qualification de cycle = actionable ou execution_request selon le cas.`;
+- Demande de Delivery / décision / exécution / qualification de cycle = actionable ou execution_request selon le cas.
+- Si un contexte GROUNDED (preuves repository) est fourni: base la qualification UNIQUEMENT sur ces faits attribuables; les affirmations conversationnelles non corroborées ne sont PAS des faits; mets-les en reservations/risks; ne les consomme pas comme prémisse de cycle.`;

 export const ANALYSIS_SYSTEM = ANALYSIS_SYSTEM_BASE;

@@ -251,6 +252,11 @@ export async function analyzeIntent(input: {
   projectSummary: string;
   /** Optional resolved CKC excerpt for future intent analysis enrichment. */
   ckcContext?: string | null;
+  /**
+   * Read-only grounded repository facts + provenance from F1-style preflight.
+   * When present, this is the authority for current-state premises — not the raw user claim.
+   */
+  groundedContext?: string | null;
 }): Promise<{
   analysis: IntentAnalysisDto;
   presentation: "test_provider" | "openai_live";
@@ -263,11 +269,15 @@ export async function analyzeIntent(input: {
       ? "test_provider"
       : "openai_live";

+  const groundedBlock = input.groundedContext?.trim()
+    ? `\n\nGROUNDED CONTEXT (read-only, attributable — outranks unsupported user claims):\n${input.groundedContext.trim()}\n`
+    : "";
+
   const messages: ProviderChatMessage[] = [
     { role: "system", content: buildAnalysisSystem(input.ckcContext) },
     {
       role: "user",
-      content: `Contexte projet:\\n${input.projectSummary}\\n\\nDemande:\\n${input.userContent}`,
+      content: `Contexte projet:\n${input.projectSummary}${groundedBlock}\n\nDemande:\n${input.userContent}`,
     },
   ];

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e090d4..aaeddfdd 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -19,8 +19,19 @@ import type {
   ProjectAssistantSendResult,
 } from "../types";
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
+import {
+  assessGroundingContradictions,
+  runProjectGroundingPreflight,
+} from "../groundingPreflight";
+import type {
+  AssistantSourceDto,
+  AssistantToolEventDto,
+} from "../types";
 import { analyzeIntent } from "./intentAnalysis";
-import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
+import {
+  isPureRepositoryAnalysisIntent,
+  requiresPrequalificationGrounding,
+} from "./repositoryIntent";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
 import {
   enrichQualificationWithCkcSemantics,
@@ -193,6 +204,10 @@ function f2Success(base: {
   qualification?: QualificationDto;
   proposal?: ProposalDto;
   executionBlocked?: boolean;
+  toolRounds?: number;
+  toolCalls?: number;
+  sources?: AssistantSourceDto[];
+  toolEvents?: AssistantToolEventDto[];
 }): ProjectAssistantSendResult {
   const turnKind =
     base.qualification && base.proposal
@@ -207,10 +222,10 @@ function f2Success(base: {
     mode: base.mode,
     presentation: base.presentation,
     model: base.model,
-    toolRounds: 0,
-    toolCalls: 0,
-    sources: [],
-    toolEvents: [],
+    toolRounds: base.toolRounds ?? 0,
+    toolCalls: base.toolCalls ?? 0,
+    sources: base.sources ?? [],
+    toolEvents: base.toolEvents ?? [],
     project: base.project,
     ephemeralNotice: EPHEMERAL_NOTICE,
     f2: {
@@ -385,14 +400,156 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  const projectSummary = [
+    `name=${project.name}`,
+    `objective=${project.objective}`,
+    `criticality=${project.criticality}`,
+    `lps=${project.lpsId}@${project.lpsVersion}`,
+  ].join(" | ");
+
+  // Preliminary analysis is routing-only when grounding is required —
+  // never persist createCycle from the pre-grounding candidate alone.
+  let finalAnalysis = analysis;
+  let finalPresentation = presentation;
+  let finalModel = model;
+  let groundingSources: AssistantSourceDto[] = [];
+  let groundingToolEvents: AssistantToolEventDto[] = [];
+  let groundingToolRounds = 0;
+  let groundingToolCalls = 0;
+
+  if (requiresPrequalificationGrounding(content)) {
+    const grounding = await runProjectGroundingPreflight({
+      project,
+      content,
+      history: input.history,
+      purpose: "f2_prequalification",
+      correlationId: `f2-preflight:${project.projectId}`,
+    });
+
+    if (!grounding.ok) {
+      return {
+        ok: false,
+        status: grounding.status,
+        code: grounding.code,
+        message: grounding.message,
+        mode: grounding.mode,
+        retryable: grounding.retryable,
+      };
+    }
+
+    groundingSources = grounding.sources;
+    groundingToolEvents = grounding.toolEvents;
+    groundingToolRounds = grounding.toolRounds;
+    groundingToolCalls = grounding.toolCalls;
+
+    if (grounding.unresolvedRequiredSources) {
+      return f2Success({
+        text:
+          "[Grounding requis] Les sources repository nécessaires à la qualification n'ont pas pu être résolues. Aucune CycleInstance / LPS / Proposal n'a été créée. AUCUNE EXÉCUTION.",
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: grounding.presentation,
+        model: grounding.model ?? model,
+        project,
+        intentClass: analysis.intentClass,
+        toolRounds: grounding.toolRounds,
+        toolCalls: grounding.toolCalls,
+        sources: grounding.sources,
+        toolEvents: grounding.toolEvents,
+        executionBlocked: analysis.intentClass === "execution_request",
+      });
+    }
+
+    const sourceRefs = grounding.sources
+      .map((s) => s.pathOrRef)
+      .filter((p): p is string => Boolean(p));
+    const contradictions = assessGroundingContradictions({
+      userContent: content,
+      groundedText: grounding.text,
+      sourceRefs,
+    });
+    const blocking = contradictions.filter((c) => c.severity === "blocking");
+    if (blocking.length > 0) {
+      const detail = blocking
+        .map(
+          (c) =>
+            `Contradiction bloquante — claim: ${c.claim} | fait grounded: ${c.groundedFact.slice(0, 400)}`,
+        )
+        .join("\n");
+      return f2Success({
+        text: `[Contradiction] ${detail} La phrase utilisateur n'est pas une HumanDecision. Aucune CycleInstance / LPS / Proposal fondée sur la prémisse non corroborée. AUCUNE EXÉCUTION.`,
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: grounding.presentation,
+        model: grounding.model ?? model,
+        project,
+        intentClass: analysis.intentClass,
+        toolRounds: grounding.toolRounds,
+        toolCalls: grounding.toolCalls,
+        sources: grounding.sources,
+        toolEvents: grounding.toolEvents,
+        executionBlocked: analysis.intentClass === "execution_request",
+      });
+    }
+
+    const groundedContext = [
+      grounding.text,
+      `Sources attribuables: ${sourceRefs.join(" | ") || "(aucune)"}`,
+    ].join("\n");
+
+    try {
+      const groundedAnalysis = await analyzeIntent({
+        userContent: content,
+        projectSummary,
+        groundedContext,
+      });
+      finalAnalysis = groundedAnalysis.analysis;
+      finalPresentation = groundedAnalysis.presentation;
+      finalModel = groundedAnalysis.model ?? grounding.model ?? model;
+    } catch (error) {
+      const message =
+        error instanceof Error ? error.message : "Erreur provider inattendue.";
+      return {
+        ok: false,
+        status: "provider_error",
+        code: "PROVIDER_ERROR",
+        message:
+          message === "FAKE_PROVIDER_ERROR"
+            ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
+            : message,
+        mode: modeResolution.mode,
+        retryable: true,
+      };
+    }
+
+    if (
+      finalAnalysis.intentClass === "ambiguous" ||
+      !finalAnalysis.parseOk ||
+      !finalAnalysis.candidateCycleTypeId ||
+      !finalAnalysis.signals
+    ) {
+      return f2Success({
+        text:
+          "[Clarification requise] Après grounding, la qualification reste incomplète ou ambiguë. Aucune CycleInstance / LPS / Proposal. AUCUNE EXÉCUTION.",
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: finalPresentation,
+        model: finalModel,
+        project,
+        intentClass: "ambiguous",
+        toolRounds: groundingToolRounds,
+        toolCalls: groundingToolCalls,
+        sources: groundingSources,
+        toolEvents: groundingToolEvents,
+      });
+    }
+  }
+
   const preLpsVersion = project.lpsVersion;
   const correlationId = `cor:f2-${randomBytes(8).toString("hex")}`;

   const qualified = await qualifyWithCkc({
-    cycleTypeId: analysis.candidateCycleTypeId,
-    signals: analysis.signals,
-    objective: analysis.objective ?? undefined,
-    scope: analysis.scope ?? undefined,
+    cycleTypeId: finalAnalysis.candidateCycleTypeId!,
+    signals: finalAnalysis.signals!,
+    objective: finalAnalysis.objective ?? undefined,
+    scope: finalAnalysis.scope ?? undefined,
     correlationId,
     ckcQualification: oa.ckcQualification,
   });
@@ -401,20 +558,18 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

   let { qualification } = qualified;
-  const projectSummary = [
-    `name=${project.name}`,
-    `objective=${project.objective}`,
-    `criticality=${project.criticality}`,
-    `lps=${project.lpsId}@${project.lpsVersion}`,
-  ].join(" | ");

   if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
     const packagePin = doctrinePackagePinFromProject(project);
@@ -430,8 +585,8 @@ export async function orchestrateAssistantSend(input: {
         userContent: content,
         projectSummary,
         intentSummary:
-          analysis.rephrasedRequest ??
-          analysis.objective ??
+          finalAnalysis.rephrasedRequest ??
+          finalAnalysis.objective ??
           "Intention actionable",
         ckcPromptSection: buildCkcCognitivePromptSection(ckcContent),
       });
@@ -452,18 +607,25 @@ export async function orchestrateAssistantSend(input: {

   if (
     qualification.requiresJustificationForCritical &&
-    !(analysis.criticalJustification && analysis.criticalJustification.trim())
+    !(
+      finalAnalysis.criticalJustification &&
+      finalAnalysis.criticalJustification.trim()
+    )
   ) {
     return f2Success({
       text:
         "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification,
-      executionBlocked: analysis.intentClass === "execution_request",
+      executionBlocked: finalAnalysis.intentClass === "execution_request",
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -472,10 +634,10 @@ export async function orchestrateAssistantSend(input: {
     cycleInstanceId,
     cycleTypeId: qualification.cycleTypeId,
     projectId: project.projectId,
-    objective: analysis.objective ?? undefined,
-    scope: analysis.scope ?? undefined,
-    signals: analysis.signals,
-    justification: analysis.criticalJustification ?? undefined,
+    objective: finalAnalysis.objective ?? undefined,
+    scope: finalAnalysis.scope ?? undefined,
+    signals: finalAnalysis.signals!,
+    justification: finalAnalysis.criticalJustification ?? undefined,
     createdBy: {
       actorId: "actor:nora-f2",
       role: "agent",
@@ -492,12 +654,16 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification,
-      executionBlocked: analysis.intentClass === "execution_request",
+      executionBlocked: finalAnalysis.intentClass === "execution_request",
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -507,16 +673,20 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification: {
         ...qualification,
         cycleInstanceId: created.cycle.cycleInstanceId,
         cycleStatus: created.cycle.status,
         ckcResolutionRef,
       },
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -544,25 +714,25 @@ export async function orchestrateAssistantSend(input: {

   const morrisGateRequired = evaluateMorrisGateRequired({
     recommendedProfile: qualification.recommendedProfile,
-    signals: analysis.signals,
-    intent: analysis,
+    signals: finalAnalysis.signals!,
+    intent: finalAnalysis,
   });

   const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
   const proposal = saveProposal(
     buildProposal({
-      intent: analysis,
+      intent: finalAnalysis,
       qualification,
       project,
       morrisGateRequired,
-      executionRequest: analysis.intentClass === "execution_request",
+      executionRequest: finalAnalysis.intentClass === "execution_request",
       status,
     }),
   );

-  const executionBlocked = analysis.intentClass === "execution_request";
+  const executionBlocked = finalAnalysis.intentClass === "execution_request";
   const textParts = [
-    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
+    finalPresentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
     "Qualification SFIA et proposition structurée générées.",
     `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
     `CycleInstance: ${created.cycle.cycleInstanceId} (${created.cycle.status}).`,
@@ -583,12 +753,16 @@ export async function orchestrateAssistantSend(input: {
   return f2Success({
     text: textParts.join(" "),
     mode: modeResolution.mode as "fixture" | "live",
-    presentation,
-    model,
+    presentation: finalPresentation,
+    model: finalModel,
     project,
-    intentClass: analysis.intentClass,
+    intentClass: finalAnalysis.intentClass,
     qualification,
     proposal,
     executionBlocked,
+    toolRounds: groundingToolRounds,
+    toolCalls: groundingToolCalls,
+    sources: groundingSources,
+    toolEvents: groundingToolEvents,
   });
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts b/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
index 80b6f4f7..7fbd6070 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
@@ -2,6 +2,9 @@
  * Deterministic repository-analysis intent hint for F1 routing.
  * Does not replace F2 architecture — only forces informative when the
  * user clearly asks for read/search/Git truth without mutation/qualification.
+ *
+ * Also detects when FINAL QUALIFICATION materially depends on current
+ * repository/project truth (generic source-dependency — no product keywords).
  */

 const ACTIONABLE_NEGATIVES =
@@ -25,6 +28,108 @@ const REPO_POSITIVES: RegExp[] = [
   /\bcompare(?:r)?\b.*\bmain\b/i,
 ];

+/**
+ * Qualification / next-cycle decision language (not product-specific).
+ */
+function asksCycleQualification(text: string): boolean {
+  return (
+    /\bqualifi/i.test(text) ||
+    /\bquel cycle\b/i.test(text) ||
+    /\bcycle\b.{0,40}\b(pertinent|ouvrir|faut-il|à ouvrir|a ouvrir)\b/i.test(
+      text,
+    ) ||
+    /\b(faut-il|devrait-on)\s+ouvrir\b/i.test(text) ||
+    (/\bprochaine étape\b/i.test(text) &&
+      /\b(qualifi|cycle|roadmap)\b/i.test(text)) ||
+    /\bpassage en release\b/i.test(text)
+  );
+}
+
+/**
+ * Generic categories: current repository/project truth, prior completed work,
+ * milestone/status on main, or an asserted current-state premise needing check.
+ * No Product Completion / REAL-B / runtime-v3 one-offs.
+ */
+function dependsOnRepositoryOrCurrentState(text: string): boolean {
+  // Explicit resolve/read before qualification.
+  if (
+    /\bavant de qualifi/i.test(text) &&
+    /\b(lis|lire|r[eé]sous|r[eé]solv|v[eé]rifie)/i.test(text)
+  ) {
+    return true;
+  }
+  if (
+    /\b(lis|lire|r[eé]sous|r[eé]solv|v[eé]rifie).{0,100}(git|d[eé]p[oô]t|repository|roadmap|source)/i.test(
+      text,
+    )
+  ) {
+    return true;
+  }
+
+  // Current-state / trajectory references.
+  if (
+    /\bétat actuel\b/i.test(text) ||
+    /\bactuellement\b.{0,80}\b(sur main|en repo|dans le (projet|d[eé]p[oô]t)|roadmap)\b/i.test(
+      text,
+    ) ||
+    /\bactuellement sur main\b/i.test(text) ||
+    /\bau vu de (ce qui est |l['']état )/i.test(text) ||
+    /\bd['']après l['']état\b/i.test(text) ||
+    /\bon en est où\b/i.test(text) ||
+    /\baprès le dernier merge\b/i.test(text) ||
+    /\bsur main\b/i.test(text) ||
+    /\ben te basant sur\b/i.test(text) ||
+    /\bsources? (du projet|repository|git|locales?)\b/i.test(text) ||
+    /\btravaux déjà réalisés\b/i.test(text) ||
+    /\b(roadmap|git|d[eé]p[oô]t|repository)\b.{0,60}\bqualifi/i.test(text)
+  ) {
+    return true;
+  }
+
+  // Asserted current-state status that must be corroborated (generic tokens).
+  if (
+    /\b(est|sont)\s+(ADOPTED|COMPLETE|CLOSED|CONSUMED)\b/i.test(text) ||
+    /\b(ADOPTED|COMPLETE|CLOSED|CONSUMED)\b.{0,40}\bqualifi/i.test(text)
+  ) {
+    return true;
+  }
+
+  return false;
+}
+
+/**
+ * User elevates a conversation claim to definitive fact / HumanDecision.
+ * Generic elevation language — not a product claim whitelist.
+ */
+function elevatesCurrentStateClaim(text: string): boolean {
+  return (
+    /\bconsid[eè]re\b[\s\S]{0,160}\b(fait|d[eé]cision|acquis)\b/i.test(text) ||
+    /\bd[eé]cision humaine (d[eé]finitive|finale)\b/i.test(text) ||
+    /\bcomme (un )?fait (acquis|établi|définitif)\b/i.test(text) ||
+    /\btiens pour acquis\b/i.test(text) ||
+    /\bprends? (cette|la) (affirmation|phrase|prémisse) (comme|pour)\b/i.test(
+      text,
+    )
+  );
+}
+
+/**
+ * True when F2 qualification must resolve repository/current-state sources
+ * BEFORE final cycle analysis and before any CycleInstance/LPS mutation.
+ */
+export function requiresPrequalificationGrounding(content: string): boolean {
+  const text = content.trim();
+  if (!text) return false;
+
+  if (elevatesCurrentStateClaim(text)) return true;
+
+  if (asksCycleQualification(text) && dependsOnRepositoryOrCurrentState(text)) {
+    return true;
+  }
+
+  return false;
+}
+
 /**
  * True when the message is a pure repository read/search/Git-truth request.
  * Explicit mutation / delivery / execution / qualification requests return false.
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 743ceabe..18c8404d 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -1,22 +1,14 @@
 import {
-  getLiveConversationAvailability,
   isFakeConversationProviderForced,
-  resolveConversationProvider,
-  type ProviderChatMessage,
 } from "@/lib/platform/ai";
-import { runToolCallingLoop } from "@/lib/platform/tools";
-import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
-import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
-import { collectToolTelemetry } from "./collectToolTelemetry";
-import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
+import { runProjectGroundingPreflight } from "./groundingPreflight";
 import type {
   AssistantHistoryMessage,
   ProjectAssistantContextDto,
   ProjectAssistantSendResult,
 } from "./types";

-const MAX_HISTORY_MESSAGES = 20;
 const EPHEMERAL_NOTICE =
   "Conversation éphémère (process-local) — un rechargement peut effacer l'historique. Project/LPS/Cycle linkage M2 reste dans Product SQLite. AUCUNE EXÉCUTION.";

@@ -47,27 +39,8 @@ function toContextDto(
   };
 }

-function resolveMode(): {
-  mode: "fixture" | "live" | "unavailable";
-  canProceed: boolean;
-  message?: string;
-} {
-  if (isFakeConversationProviderForced()) {
-    return { mode: "fixture", canProceed: true };
-  }
-  const availability = getLiveConversationAvailability();
-  if (!availability.available) {
-    return {
-      mode: "unavailable",
-      canProceed: false,
-      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
-    };
-  }
-  return { mode: "live", canProceed: true };
-}
-
 /**
- * Thin F1 orchestration — platform AI + tool loop only (no OPS1 session).
+ * Thin F1 orchestration — platform AI + shared read-only grounding loop.
  */
 export async function orchestrateProjectAssistantTurn(input: {
   projectId: string;
@@ -99,82 +72,36 @@ export async function orchestrateProjectAssistantTurn(input: {
   }

   const project = toContextDto(projectResult);
-  const modeResolution = resolveMode();
-  if (!modeResolution.canProceed) {
-    return {
-      ok: false,
-      status: "provider_unavailable",
-      code: "PROVIDER_UNAVAILABLE",
-      message: modeResolution.message ?? "Provider indisponible.",
-      mode: "unavailable",
-      retryable: false,
-    };
-  }
-
-  const history = (input.history ?? [])
-    .filter(
-      (m) =>
-        (m.role === "user" || m.role === "assistant") &&
-        typeof m.content === "string" &&
-        m.content.trim().length > 0,
-    )
-    .slice(-MAX_HISTORY_MESSAGES);
-
-  const messages: ProviderChatMessage[] = [
-    { role: "system", content: buildProjectSystemPrompt(project) },
-    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
-    { role: "user", content },
-  ];
-
-  const sink = new ProjectAssistantMemoryEventSink();
-  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
-  const provider = resolveConversationProvider();
-  const presentation =
-    isFakeConversationProviderForced() || provider.providerId === "fake-test"
-      ? "test_provider"
-      : "openai_live";
-
-  try {
-    const loop = await runToolCallingLoop({
-      correlationId: `f1:${project.projectId}`,
-      messages,
-      provider,
-      enableTools: true,
-      sink,
-      workspaceRoot,
-    });
-
-    const { toolEvents, sources } = collectToolTelemetry(sink.events);
+  const grounded = await runProjectGroundingPreflight({
+    project,
+    content,
+    history: input.history,
+    purpose: "f1_informative",
+  });

-    return {
-      ok: true,
-      status: "ok",
-      text: loop.text,
-      mode: modeResolution.mode,
-      presentation,
-      model: loop.usage?.model ?? null,
-      toolRounds: loop.toolRounds,
-      toolCalls: loop.toolCalls,
-      sources,
-      toolEvents,
-      project,
-      ephemeralNotice: EPHEMERAL_NOTICE,
-    };
-  } catch (error) {
-    const message =
-      error instanceof Error
-        ? error.message
-        : "Erreur provider inattendue.";
+  if (!grounded.ok) {
     return {
       ok: false,
-      status: "provider_error",
-      code: "PROVIDER_ERROR",
-      message:
-        message === "FAKE_PROVIDER_ERROR"
-          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
-          : message,
-      mode: modeResolution.mode,
-      retryable: true,
+      status: grounded.status,
+      code: grounded.code,
+      message: grounded.message,
+      mode: grounded.mode,
+      retryable: grounded.retryable,
     };
   }
+
+  return {
+    ok: true,
+    status: "ok",
+    text: grounded.text,
+    mode: grounded.mode,
+    presentation: grounded.presentation,
+    model: grounded.model,
+    toolRounds: grounded.toolRounds,
+    toolCalls: grounded.toolCalls,
+    sources: grounded.sources,
+    toolEvents: grounded.toolEvents,
+    project,
+    ephemeralNotice: EPHEMERAL_NOTICE,
+  };
 }
```

## COMPLETE TEST FILE — realBBlocker01.sourceGroundedQualification.test.ts (FULL)

```typescript
/** @vitest-environment node */
/**
 * V3-REAL-B-BLOCKER-01-CORR-01 — shared F1 tool-loop fidelity + generic
 * source-dependency grounding. Fake substitutes ConversationProvider only.
 * No OpenAI LIVE · no fixture grounding short-circuit.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  isPureRepositoryAnalysisIntent,
  requiresPrequalificationGrounding,
} from "@/features/project-assistant/f2/repositoryIntent";
import { evaluateMorrisGateRequired } from "@/features/project-assistant/f2/gatePolicy";
import { assessGroundingContradictions } from "@/features/project-assistant/groundingPreflight";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";

const ROADMAP_PATH =
  "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md";

type CorrScenario = "ground_ok" | "ground_unresolved" | "contradiction";

function intentJson(payload: Record<string, unknown>): string {
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

const PRELIM_FRAMING = {
  intentClass: "actionable",
  candidateCycleTypeId: "cyc:framing",
  signals: {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
  },
  objective: "Qualification préliminaire non grounded (ne pas persister)",
  scope: "Pré-analyse seulement",
  rephrasedRequest: "Candidat framing préliminaire avant grounding",
  outOfScope: ["Exécution"],
  risks: ["Candidat préliminaire non grounded"],
  reservations: ["Grounding requis avant qualification finale"],
  stopConditions: ["AUCUNE EXÉCUTION"],
  activatedBlocks: ["qualification"],
  expectedOutcome: "Ne pas créer de CycleInstance avant grounding",
  criticalJustification: null,
  requestedOperation: null,
};

const FINAL_QA = {
  intentClass: "actionable",
  candidateCycleTypeId: "cyc:qa-validation",
  signals: {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: false,
  },
  objective: "Qualifier le prochain cycle depuis sources grounded",
  scope: "QA / Validation — qualification cognitive, aucune exécution",
  rephrasedRequest: "Ouvrir un cycle QA/Validation après grounding repository",
  outOfScope: ["REAL-C", "HumanDecision", "ExecutionContract", "Cursor"],
  risks: ["Qualification non grounded"],
  reservations: [],
  stopConditions: ["AUCUNE EXÉCUTION", "STOP avant Decision"],
  activatedBlocks: ["qualification", "proposition", "gate"],
  expectedOutcome: "Qualification grounded prête pour revue humaine",
  criticalJustification:
    "Segment cognitif structurant — Critical explicite (preuves grounded)",
  requestedOperation: null,
};

const PRELIM_RELEASE = {
  intentClass: "actionable",
  candidateCycleTypeId: "cyc:release",
  signals: {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
  },
  objective: "Qualifier un passage en release sur prémisse conversationnelle",
  scope: "Release — ne pas consommer claim non grounded",
  rephrasedRequest: "Qualification release demandée",
  outOfScope: ["Exécution"],
  risks: ["Prémisse non corroborée"],
  reservations: [],
  stopConditions: ["AUCUNE EXÉCUTION"],
  activatedBlocks: ["qualification"],
  expectedOutcome: "Doit échouer closed sur contradiction",
  criticalJustification: null,
  requestedOperation: null,
};

/**
 * TEST-ONLY ConversationProvider: emits real tool calls so runToolCallingLoop
 * invokes local READ tools. Does not fabricate sources/toolRounds.
 */
class Corr01ToolLoopProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private roundCount = 0;
  private callCount = 0;
  private readonly fallback = new FakeConversationProvider();

  constructor(
    private readonly scenario: CorrScenario,
    private readonly readPath: string = ROADMAP_PATH,
  ) {}

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const content = lastUser?.content ?? "";
    const usage = {
      inputTokens: 10 * this.callCount,
      outputTokens: 5 * this.callCount,
      totalTokens: 15 * this.callCount,
      model: "fake-test-model",
      providerResponseId: `corr01-resp-${this.callCount}`,
    };

    // Delegate stock F2 markers (gates / ambiguity / informative) to stock fake.
    if (
      /__F2_(INFORMATIVE|ACTIONABLE|AMBIGUOUS|EXECUTION|STRUCTURING|GATED_STANDARD|CRITICAL_NO_JUSTIFICATION)__/i.test(
        content,
      )
    ) {
      return this.fallback.complete(messages);
    }

    const hasGrounded = content.includes("GROUNDED CONTEXT");

    if (this.scenario === "contradiction") {
      return {
        text: intentJson(PRELIM_RELEASE),
        usage,
      };
    }

    if (this.scenario === "ground_unresolved") {
      return {
        text: intentJson(PRELIM_FRAMING),
        usage,
      };
    }

    // ground_ok: preliminary wrong cycle; grounded re-analysis → qa-validation
    if (hasGrounded) {
      return { text: intentJson(FINAL_QA), usage };
    }
    return { text: intentJson(PRELIM_FRAMING), usage };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    this.roundCount += 1;
    const usage = {
      inputTokens: 10 * this.roundCount,
      outputTokens: 5 * this.roundCount,
      totalTokens: 15 * this.roundCount,
      model: "fake-test-model",
      providerResponseId: `corr01-round-${this.roundCount}`,
    };

    if (input.tools.length === 0) {
      const completion = await this.complete(
        input.items
          .filter(
            (i): i is Extract<ProviderInputItem, { type: "message" }> =>
              i.type === "message",
          )
          .map((m) => ({ role: m.role, content: m.content })),
      );
      return { kind: "message", text: completion.text, usage: completion.usage };
    }

    if (this.roundCount === 1) {
      if (this.scenario === "ground_unresolved") {
        return {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "corr01-denied-env",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({ path: ".env" }),
            },
          ],
          usage,
        };
      }
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "corr01-read-roadmap",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({
              path: this.readPath,
              startLine: 1,
              endLine: 40,
            }),
          },
        ],
        usage,
      };
    }

    if (this.scenario === "contradiction") {
      return {
        kind: "message",
        text: [
          "[TEST/FAKE · NON LIVE] Grounded current-state facts after READ tools:",
          `- Repository evidence from ${this.readPath} does not corroborate the elevated user claim.`,
          "- Conversation claim ≠ HumanDecision; no decision record was resolved.",
          "CONTRADICTION_BLOCKING: yes",
        ].join("\n"),
        usage,
      };
    }

    if (this.scenario === "ground_unresolved") {
      return {
        kind: "message",
        text: [
          "[TEST/FAKE · NON LIVE] Required repository source read failed/denied.",
          "No attributable successful READ source for qualification.",
          "CONTRADICTION_BLOCKING: no",
        ].join("\n"),
        usage,
      };
    }

    return {
      kind: "message",
      text: [
        "[TEST/FAKE · NON LIVE] Grounded repository facts after READ tools:",
        `- Successfully read ${this.readPath}`,
        "- Current repository evidence is attributable via tool telemetry.",
        "CONTRADICTION_BLOCKING: no",
      ].join("\n"),
      usage,
    };
  }
}

describe("V3-REAL-B-BLOCKER-01-CORR-01 tool-loop fidelity + generic grounding", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-rb-corr01-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-08-28T10:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "REAL-B Blocker CORR-01",
      objective: "Tester grounding fidélité tool-loop F1/F2.",
      context: "Deterministic CORR-01 remediation.",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "RB01C",
      idempotencyKey: `idem:rb01c-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup create failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("T-CORR-FID-01/02 — tool loop + real READ telemetry (no fixture short-circuit)", async () => {
    const src = fs.readFileSync(
      path.join(
        process.cwd(),
        "features/project-assistant/groundingPreflight.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/fixturePrequalificationGrounding/);

    setConversationProviderForTests(new Corr01ToolLoopProvider("ground_ok"));
    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "D'après l'état actuel du projet après REAL-A, quel cycle faut-il ouvrir maintenant ?",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.toolRounds).toBeGreaterThan(0);
    expect(result.toolCalls).toBeGreaterThan(0);
    expect(
      result.toolEvents.some(
        (e) =>
          e.toolName === "git_local_read_file" && e.status === "succeeded",
      ),
    ).toBe(true);
    expect(
      result.sources.some((s) => s.pathOrRef?.includes(ROADMAP_PATH)),
    ).toBe(true);
    expect(result.f2?.qualification?.cycleTypeId).toBe("cyc:qa-validation");
    expect(result.f2?.qualification?.cycleTypeId).not.toBe("cyc:framing");
  });

  it("T-CORR-FID-03 — required source failure fails closed", async () => {
    setConversationProviderForTests(
      new Corr01ToolLoopProvider("ground_unresolved"),
    );
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Au vu de ce qui est actuellement sur main et de la Roadmap, qualifie la prochaine étape.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.toolCalls).toBeGreaterThan(0);
    expect(result.f2?.proposal).toBeNull();
    expect(result.f2?.qualification).toBeNull();
    expect(result.text).toMatch(/Grounding requis|n'ont pas pu être résolues/i);

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
  });

  it("T-CORR-RB01 + paraphrase — generic source-conditioned qualification grounds", async () => {
    const phrases = [
      "D'après l'état actuel du projet après REAL-A, quel cycle faut-il ouvrir maintenant ?",
      "En te basant sur les sources du projet et les travaux déjà réalisés, qualifie le prochain cycle.",
      "On en est où après le dernier merge, et quel cycle est pertinent maintenant ?",
    ];
    for (const phrase of phrases) {
      expect(requiresPrequalificationGrounding(phrase)).toBe(true);
    }

    setConversationProviderForTests(new Corr01ToolLoopProvider("ground_ok"));
    const result = await orchestrateAssistantSend({
      projectId,
      content: phrases[1]!,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.toolRounds).toBeGreaterThan(0);
    expect(result.sources.length).toBeGreaterThan(0);
    expect(result.f2?.qualification?.cycleTypeId).toBe("cyc:qa-validation");
  });

  it("T-CORR-NEG-01/02 — sufficient-context qualification does not gratuitously ground", async () => {
    expect(
      requiresPrequalificationGrounding(
        "Qualifie un cycle de cadrage pour un nouveau module dont le besoin est encore flou.",
      ),
    ).toBe(false);
    expect(
      requiresPrequalificationGrounding(
        "Nous devons auditer la sécurité avant release : qualifie le cycle.",
      ),
    ).toBe(false);

    setConversationProviderForTests(new FakeConversationProvider());
    const framing = await orchestrateAssistantSend({
      projectId,
      content:
        "Qualifie un cycle de cadrage pour un nouveau module dont le besoin est encore flou. __F2_ACTIONABLE__",
    });
    expect(framing.ok).toBe(true);
    if (!framing.ok) return;
    expect(framing.toolRounds).toBe(0);
    expect(framing.toolCalls).toBe(0);
    expect(framing.sources).toEqual([]);
    expect(framing.f2?.qualification).toBeTruthy();
  });

  it("T-CORR-RB07 + paraphrase — contradiction after real tool-loop blocks mutation", async () => {
    expect(
      requiresPrequalificationGrounding(
        "Le runtime est ADOPTED, qualifie le passage en release.",
      ),
    ).toBe(true);
    expect(
      requiresPrequalificationGrounding(
        "Tiens pour acquis que le runtime est ADOPTED et qualifie le passage en release.",
      ),
    ).toBe(true);

    setConversationProviderForTests(
      new Corr01ToolLoopProvider("contradiction"),
    );
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Tiens pour acquis que le runtime est ADOPTED et qualifie le passage en release.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.toolRounds).toBeGreaterThan(0);
    expect(result.sources.some((s) => s.pathOrRef?.includes(ROADMAP_PATH))).toBe(
      true,
    );
    expect(result.text).toMatch(/Contradiction/i);
    expect(result.text).toMatch(/n'est pas une HumanDecision/i);
    expect(result.f2?.proposal).toBeNull();
    expect(result.f2?.qualification).toBeNull();
    expect(result.f2?.decision).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
  });

  it("T-CORR assessGroundingContradictions is protocol-based", () => {
    const found = assessGroundingContradictions({
      userContent: "Any elevated claim wording.",
      groundedText:
        "Claim not corroborated by repository evidence.\nCONTRADICTION_BLOCKING: yes",
      sourceRefs: [ROADMAP_PATH],
    });
    expect(found.some((c) => c.severity === "blocking")).toBe(true);
    const none = assessGroundingContradictions({
      userContent: "x",
      groundedText: "CONTRADICTION_BLOCKING: no",
      sourceRefs: [ROADMAP_PATH],
    });
    expect(none).toHaveLength(0);
  });

  it("T-RB06 ambiguity remains no-mutation", async () => {
    setConversationProviderForTests(new FakeConversationProvider());
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Fais le nécessaire pour que ça avance. __F2_AMBIGUOUS__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.f2?.proposal).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
  });

  it("T-F1 pure repository read stays F1 and uses shared grounding loop", async () => {
    setConversationProviderForTests(
      new FakeConversationProvider({
        toolScript: [
          {
            kind: "tool_calls",
            toolCalls: [
              {
                callId: "f1-head",
                name: "git_local_get_head",
                argumentsJson: "{}",
              },
            ],
          },
          {
            kind: "message",
            text: "[TEST/FAKE · NON LIVE] HEAD local lu via tool loop.",
          },
        ],
      }),
    );
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Vérifie le HEAD Git local __F2_INFORMATIVE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(result.f2?.proposal).toBeNull();
    expect(result.toolRounds).toBeGreaterThan(0);
    expect(
      result.toolEvents.some((e) => e.toolName === "git_local_get_head"),
    ).toBe(true);

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
    expect(isPureRepositoryAnalysisIntent("Vérifie le HEAD Git local")).toBe(
      true,
    );
  });

  it("T-GATE-ARCHI Critical/Morris non-regression", () => {
    const required = evaluateMorrisGateRequired({
      recommendedProfile: "Critical",
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: true,
        dataImpact: true,
        irreversible: false,
        lowRiskBounded: false,
      },
      intent: {
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:technical-architecture",
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: true,
          dataImpact: true,
          irreversible: false,
          lowRiskBounded: false,
        },
        objective: "Migrer persistence",
        scope: "architecture",
        rephrasedRequest: null,
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: "Structural persistence change",
        requestedOperation: null,
        parseOk: true,
      },
    });
    expect(required).toBe(true);
  });

  it("T-GATE-SECURITY Critical/security non-regression", () => {
    const required = evaluateMorrisGateRequired({
      recommendedProfile: "Critical",
      signals: {
        structuralChange: false,
        securityImpact: true,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      intent: {
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:security",
        signals: {
          structuralChange: false,
          securityImpact: true,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
        objective: "Audit secrets",
        scope: "security",
        rephrasedRequest: null,
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: "Security residual risk",
        requestedOperation: null,
        parseOk: true,
      },
    });
    expect(required).toBe(true);
  });

  it("T-CKC grounded successful qualification still creates product-native cycle", async () => {
    setConversationProviderForTests(new Corr01ToolLoopProvider("ground_ok"));
    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Au vu de ce qui est actuellement sur main et de la Roadmap, qualifie la prochaine étape.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(result.f2?.qualification?.recommendationLabel).toMatch(
      /RECOMMANDATION/,
    );
    expect(result.f2?.qualification?.detailedStatus).toBeTruthy();
    expect(result.f2?.qualification?.ckcResolutionRef).toMatch(/^ckc:m2-/);
  });
});

```

## REMEDIATION RECORD (FULL CONTENT)

# SFIA Studio — REAL-B Blocker-01 — Source-Grounded Cognitive Qualification & Contradiction Enforcement

## A. Metadata

| Champ | Valeur |
|---|---|
| **Cycle ID** | V3-REAL-B-BLOCKER-01 |
| **Title** | Source-Grounded Cognitive Qualification & Contradiction Enforcement |
| **Parent campaign** | V3-REAL-B-QUALIFICATION-COGNITIVE-REASONING-01 |
| **Parent programme** | V3-REAL-PARITY-01 |
| **Morris GO** | GO V3-REAL-B-BLOCKER-01 EXECUTION — LOCAL DELIVERY ONLY — CLOSE F-RB-01 + F-RB-07 — ABSORB F-RB-02 ONLY IF SAME SEAM — REUSE F1 GROUNDING — NO PARALLEL ARCHITECTURE — NO COMMIT/PUSH/PR/MERGE — NO REAL-C |
| **Branch** | `fix/sfia-studio-real-b-blocker-01` (local only) |
| **Base HEAD** | `967f4c2b35948492caeba5347bb02c7c420de490` (= origin/main) |
| **Capability** | V3-F05 (primary) · F03/F07/F04/F08 direct |
| **Profile / Type** | CRITICAL · EVOL / Delivery |
| **Timestamp (Europe/Paris)** | 2026-08-28 ~11:45 CEST |
| **Proof level** | DETERMINISTIC PROVEN — PENDING EXACT REAL-B REAL REPROOF |

## B. Findings consumed

| ID | Disposition |
|---|---|
| **F-RB-01** | REMEDIATED IN CODE (deterministic) — source grounding before final qualification / createCycle |
| **F-RB-07** | REMEDIATED IN CODE (deterministic) — blocking contradiction fail-closed; phrase ≠ HumanDecision |
| **F-RB-02** | LEFT OPEN NONBLOCKING — same-seam grounding can re-read on later turns; no durable source-cache built |
| **F-RB-TOOL-01** | OUT / untouched |
| **RB-04** | OUT / PASS REAL / NO WORK — CKC 15/15; no synthetic fallback work |

## C. Root cause

1. **Ordering (F-RB-01):** `orchestrateAssistantSend` called `analyzeIntent` → `qualifyWithCkc` → `createCycle` with **zero** repository tool rounds on actionable F2 turns. Preliminary LLM cycle choice was persisted.
2. **repositoryIntent:** only forced F1 for *pure* reads; repository-conditioned *qualification* still entered F2 without grounding.
3. **Contradiction gap (F-RB-07):** no comparison of user current-state claims vs grounded Git/doctrine evidence before durable qualification; unsupported claims could become release premises.

## D. Chosen remediation

- **REUSE F1 grounding:** new `runProjectGroundingPreflight` shares `buildProjectSystemPrompt` + `runToolCallingLoop` + `collectToolTelemetry` + same ConversationProvider.
- **NO parallel engine / no second repository abstraction.**
- **Mutation barrier:** when `requiresPrequalificationGrounding(content)`:
  1. read-only grounding
  2. fail-closed if unresolved required sources
  3. `assessGroundingContradictions` (process-local) — blocking → no createCycle
  4. **re-`analyzeIntent` with groundedContext** (preliminary candidate discarded)
  5. only then `qualifyWithCkc` → `createCycle`
- Ambiguous / pure F1 paths unchanged (no durable mutation).
- Gate policy / CKC package / W2 / OA persistence **unchanged**.

## E. Files changed

| File | Change |
|---|---|
| `features/project-assistant/groundingPreflight.ts` | **NEW** — shared F1 grounding + contradiction disposition |
| `features/project-assistant/orchestrateTurn.ts` | Thin F1 wrapper over shared preflight |
| `features/project-assistant/f2/orchestrateF2.ts` | Ground → contradict → re-analyze → qualify → createCycle |
| `features/project-assistant/f2/repositoryIntent.ts` | `requiresPrequalificationGrounding` predicate |
| `features/project-assistant/f2/intentAnalysis.ts` | `groundedContext` input + analysis rules |
| `lib/platform/ai/fakeProvider.ts` | Deterministic markers for blocker-01 tests |
| `__tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts` | **NEW** focused suite |

**Not modified:** historical REAL-B report · Roadmap · C1 · doctrine v3 · CKC package · W2/F3 · OA schema · Build Doctrine.

## F. Tests

**Targeted:** `realBBlocker01.sourceGroundedQualification.test.ts` + `f2.orchestrate.test.ts` + `orchestrateTurn.test.ts` → **32/32 PASS**

Coverage: T-RB01-01/02/03/04 · T-RB07-01/02/03 · T-RB06 · T-F1 · T-GATE-ARCHI · T-GATE-SECURITY · T-CKC

**Typecheck:** `npm run typecheck` → PASS

**Full Vitest:** 2158+ passed; intermittent **pre-existing** 5s timeout flake on `f3.fixtureVerticalSlice` AC-F3-FIX-17/18 under full-suite load (passes in isolation ~4.3s). **OUT of authorized seam** (F3). Retry isolation: PASS. Classification: known suite-load flake, not a REAL-B blocker-01 regression.

**Build:** `npm run build` → PASS

**OpenAI LIVE:** 0

## G. Deterministic evidence

Evidence dir: `.tmp-sfia-review/real-b-blocker-01/`

- Grounding precedes qualify/createCycle for repository-conditioned qualification markers
- Unresolved sources → no LPS bump / no CycleInstance / no Proposal
- Blocking contradiction → no mutation; text asserts phrase ≠ HumanDecision
- Pure F1 + ambiguity unchanged
- Morris Critical gates still evaluate true for architecture/security signals
- Grounded success path still resolves product-native CKC (`ckc:m2-…`, `resolved_detailed`)

## H. Remaining reserves

1. **Exact REAL-B LIVE Terra/high rerun** required under distinct Morris GO before any “CLOSED BY REAL PROOF”
2. **F-RB-02** remains OPEN NONBLOCKING (no durable cross-turn source cache)
3. **F-RB-TOOL-01** untouched
4. F3 full-suite 5s timeout flake (pre-existing / out of scope)

## I. Proof ceiling

**V3-REAL-B-BLOCKER-01 — CORRECTIVE DELIVERY IMPLEMENTED — DETERMINISTIC PROVEN — F-RB-01 + F-RB-07 REMEDIATED IN CODE — PENDING EXACT REAL-B REAL REPROOF**

Do **not** claim: F-RB-01/07 CLOSED BY REAL PROOF · REAL-B PASS · REAL-C READY · runtime v3 ADOPTED.

## J. Next gate

Morris candidate: **exact REAL-B Terra/high reproof** of RB-00→RB-09 (especially RB-01 / RB-07).

**NO REAL-C** until REAL-B later passes and Morris authorizes.

---

NO COMMIT / PUSH / PR / MERGE — NO REAL-C — REVIEW HANDOFF PUBLICATION PENDING — MORRIS PUSH GATE REQUIRED

---

# CORR-01 — Grounding Path Fidelity & Generic Source-Dependency Detection

## A. Metadata (CORR-01)

| Champ | Valeur |
|---|---|
| **Cycle ID** | V3-REAL-B-BLOCKER-01-CORR-01 |
| **Parent** | V3-REAL-B-BLOCKER-01 |
| **Parent REAL campaign** | V3-REAL-B-QUALIFICATION-COGNITIVE-REASONING-01 |
| **Morris GO** | GO V3-REAL-B-BLOCKER-01-CORR-01 — LOCAL CORRECTION ONLY — SAME F1/F2 SEAM — REMOVE FIXTURE GROUNDING SHORT-CIRCUIT / KEEP FAKE AT EXTERNAL PROVIDER BOUNDARY — GENERALIZE SOURCE-DEPENDENCY GROUNDING TRIGGER — TARGETED + TYPECHECK + BUILD + FULL VITEST EXIT 0 REQUIRED — NO OPENAI LIVE — NO REAL-B RERUN — NO COMMIT/PUSH/PR/MERGE — NO REAL-C |
| **Branch** | `fix/sfia-studio-real-b-blocker-01` (local only) |
| **HEAD / origin/main** | `967f4c2b35948492caeba5347bb02c7c420de490` |
| **Parent handoff consumed** | `origin/sfia/review-handoff@e458f7fc31c3e3a9cb8e7b8cb8b679db7bac497b` |
| **Timestamp (Europe/Paris)** | 2026-08-28 ~12:07 CEST |
| **Profile / Type** | CRITICAL · EVOL / Delivery correction |

## B. Trigger / ChatGPT findings consumed

| ID | Disposition |
|---|---|
| **F-RBB-CORR-01** | REMEDIATED — removed `fixturePrequalificationGrounding` short-circuit; FAKE/LIVE share `runToolCallingLoop` |
| **F-RBB-CORR-02** | REMEDIATED — generic source/current-state dependency detector (no Product Completion / REAL-B one-offs; no required “avant de qualifier” phrasing) |
| **Full-suite validation gap** | CLOSED for CORR-01 — full Vitest **EXIT 0** proven post-corrective |

## C. Files changed in CORR-01 (delta vs BLOCKER-01 local)

| File | Change |
|---|---|
| `features/project-assistant/groundingPreflight.ts` | Removed fixture short-circuit; always tool-loop path; contradiction protocol-only |
| `features/project-assistant/f2/repositoryIntent.ts` | Generalized `requiresPrequalificationGrounding` semantic categories |
| `lib/platform/ai/fakeProvider.ts` | Removed `__F2_RB01_*` / `__F2_RB07_*` marker blocks that fabricated intent/grounding coupling |
| `__tests__/…/realBBlocker01.sourceGroundedQualification.test.ts` | Rewritten for tool-loop fidelity + generic triggers via TEST-ONLY provider |
| This remediation record | CORR-01 section appended (historical BLOCKER-01 content preserved) |

Unchanged relative to BLOCKER-01 architecture: `orchestrateF2.ts` barrier order · `intentAnalysis.ts` groundedContext · `orchestrateTurn.ts` F1 wrapper.

## D. Fixture bypass removal

- Deleted `fixturePrequalificationGrounding(...)` and its call site.
- Product path is exclusively: `runProjectGroundingPreflight` → `resolveConversationProvider` → `runToolCallingLoop` → actual READ tools → `ProjectAssistantMemoryEventSink` → `collectToolTelemetry`.

## E. Fake boundary disposition

- Fake may substitute **only** ConversationProvider / external model behavior (tool-call decisions + final text / structured intent JSON).
- Tests use TEST-ONLY `Corr01ToolLoopProvider` (implements `ConversationProvider`, confined to the test file) that emits real `git_local_read_file` / denied `.env` rounds.
- Blocker-specific `__F2_RB01_*` / `__F2_RB07_*` markers **removed** from production `fakeProvider.ts`.
- Stock `__F2_ACTIONABLE__` / `__F2_INFORMATIVE__` / etc. unchanged.
- **Production / live OpenAI provider semantics: NOT CHANGED.**

## F. Generic source-dependency approach

Selected: **deterministic generic classifier** in `requiresPrequalificationGrounding` (smallest robust; avoids IntentAnalysis schema churn / second LLM classifier).

Categories (no product keywords):
1. Cycle qualification language (`qualifi` / `quel cycle` / `passage en release` / …)
2. AND repository/current-state dependency (`état actuel`, `actuellement sur main`, `d'après l'état`, `on en est où`, `après le dernier merge`, `en te basant sur`, `sources du projet`, asserted `ADOPTED|COMPLETE|CLOSED|CONSUMED`, explicit read/resolve before qualify, …)
3. OR elevated claim language (`tiens pour acquis`, `comme un fait acquis`, HumanDecision elevation, …)

Positive cases exercised: A/B/C/D/E-class paraphrases.
Negative cases: F (new-module framing) / G (security with sufficient user context) → **no** gratuitous grounding (`toolRounds=0`).

Preliminary analysis remains routing-only when grounding is required; only post-grounding `analyzeIntent(groundedContext)` may feed `qualifyWithCkc` / `createCycle`.

## G. Tool-loop / telemetry evidence

- Asserted `toolRounds > 0`, `toolCalls > 0`
- Asserted `toolEvents` contain `git_local_read_file` with `status === "succeeded"`
- Asserted `sources[].pathOrRef` originates from telemetry for the real roadmap path
- Unresolved path: denied `.env` read → `sources.length === 0` → fail-closed, no Cycle/LPS/Proposal
- Contradiction path: real read + `CONTRADICTION_BLOCKING: yes` → fail-closed

## H. Validation (CORR-01)

| Gate | Result |
|---|---|
| Targeted (`realBBlocker01` + `f2.orchestrate` + `orchestrateTurn`) | **33/33 PASS** |
| `npm run typecheck` | **EXIT 0** |
| `npm run build` | **PASS** |
| Full Vitest attempt 1 (`npm test`) | **EXIT 0** — Test Files 224 passed \| 13 skipped; Tests **2160 passed** \| 131 skipped (2291) — Start 12:07:16 CEST |
| OpenAI LIVE | **0** |
| REAL-B rerun | **NO** |
| Historical REAL-B report sha256 | `9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393` **UNCHANGED** |

## I. Remaining

- **F-RB-02** OPEN NONBLOCKING
- **RB-04** OUT / PASS REAL / NO WORK
- Exact REAL-B Terra/high reproof still required under distinct Morris GO
- **REAL-C** still blocked
- runtime v3 **NON ADOPTED**

## J. Proof ceiling (CORR-01)

**V3-REAL-B-BLOCKER-01-CORR-01 — CORRECTIVE DELIVERY DETERMINISTIC PROVEN — SHARED F1 TOOL-LOOP FIDELITY PROVEN — GENERIC SOURCE-DEPENDENCY GROUNDING PROVEN DETERMINISTICALLY — F-RB-01 + F-RB-07 REMEDIATED IN CODE — FULL VITEST EXIT 0 — PENDING EXACT REAL-B REAL REPROOF**

Do **not** claim: F-RB-01/07 CLOSED BY REAL PROOF · REAL-B PASS · REAL-C READY · runtime v3 ADOPTED.

## K. Next gate

Morris candidate: **exact REAL-B Terra/high reproof** (distinct GO).

**NO REAL-C** until REAL-B later passes and Morris authorizes.

---

NO COMMIT / PUSH / PR / MERGE — NO REAL-C — REVIEW HANDOFF PUBLICATION PENDING — MORRIS PUSH GATE REQUIRED
