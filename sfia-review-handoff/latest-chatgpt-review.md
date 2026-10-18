# SFIA STUDIO — P6 Option B — Generic PREPARE Currentness Sequencing Correction
## Review Pack FULL — CRITICAL

**Horodatage UTC :** 2026-10-18T17:34:41Z
**GO Morris :** Correction locale de l'ordre des opérations Product (MATERIALITY_CURRENTNESS_STALE same-turn) — D-ARCH-REC-01/02/03 consommés ; D-ARCH-REC-04 documentation protégée NON AUTORISÉE.
**Macro :** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Chantier :** P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY
**Milestone :** P6 — Global Integrated Product QA
**Cycle projet :** 8 — Delivery / implémentation
**Profil :** CRITICAL
**Typologie :** INC / EVOL — CONTINUATION (un seul Delivery intégré)

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Remote | https://github.com/mcleland147/sfia-workspace.git |
| Worktree | /Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8 |
| Branche | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| origin/main | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Base connue | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Cohérence base | HEAD == origin/main == base attendue — OK |
| Staged | (vide) |
| Candidat | volontairement non committé |

### git status --short (extrait Delivery)

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.firstCycleLiveProgression.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts
?? projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts
?? projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts
```

Worktrees concurrents : présents (QA / other deliveries) — aucun checkout destructif effectué.
HQA runtime : `localhost:3020` PID **8146** encore en écoute (HTTP 307) — non redémarré ; DB HQA non mutées.

---

## 2. Sources & Convergence Pre-check

Sources lues / applicables : cycle routing/guardrails, P6 QA, Generic Execution architecture, production-runtime-reference 02/03/04/06/07/08, framing V3-F05/F07/F11/F12/F14, diagnostic handoff `d0e9a95d` blob `79f0b646`.

| Item | État |
|---|---|
| Capacité | V3-F05 |
| Milestone | P6 |
| Candidat Option B local | OUI (3 coordinators + orchestrateF2 + tests arch) |
| Nora LIVE HQA | opérationnelle ; Generic PREPARE atteint ; EC historique STALE conservé comme preuve |
| Cursor REAL ON / DET 0 | HQA ; tests = Fake Nora only |
| Runtime v3 | NON ADOPTED |
| P6 GLOBAL PASS | NON ACQUIS (interdit de le déclarer) |
| Dette OPEN | TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT |

KEEP : OA Backbone, LPS, HD, EC, Generic PREPARE, Materiality, Attempt, Cursor Gateway, Evidence.
ADAPT : coordination des opérations Product du tour Nora (queue → finalize post-écritures).
TRANSITIONAL : D-ER-19 offers session-local.

**Exit Proof cible :** PREPARE pendant un tour combinant ACW + sollicitation → contrat cohérent avec LPS final du tour, ou état explicitement non confirmable. Gates currentness inchangés pour mutations post-tour.

---

## 3. Diagnostic causal confirmé (RCA PROVEN — non rouvert)

Campagne HQA : `p6-optionb-fresh-hqa-20261018T153758Z` / AtelierNova `prj:b6a33e10-…` / LTU `ltu:836e55…` / EC `xct:gen-prep:014a9689…`

Chronologie :
1. 16:48:30.013Z — Materiality evaluated LPS **v6**
2. 16:48:30.062Z — ExecutionContract built (stamp v6)
3. 16:48:30.065Z — confirmation_required
4. 16:48:49.654Z — oa.epistemic.updated (même logical turn)
5. 16:48:49.655Z — LPS **v7**
6. Continuity → `MATERIALITY_CURRENTNESS_STALE` (stamp 6 vs current 7)

Cause : PREPARE précède écriture épistémique du même tour. Gate currentness **CORRECT** ; séquence Product **INCORRECTE**.

---

## 4. Séquencement AVANT → APRÈS

### AVANT (bug)
PILOT → F2/orchestrateTurn → Nora Agents → **tool solicitPrepare → solicitGenericExecutionPrepare (EC stamp LPS mid-turn)** → ACW/epistemic → LPS++ → transcript → continuity STALE.

### APRÈS (correction)
PILOT → F2/orchestrateTurn → Nora Agents → **tool solicitPrepare → queueGenericPrepareForTurnFinalization (pas d'EC)** → ACW / reservation / LR (écritures durables) → **solicitGenericExecutionPrepare (EC stamp LPS final)** → transcript → continuity CURRENT si pas de mutation post-tour.

F2 direct prepare path (`solicitGenericExecutionPrepare` depuis orchestrateF2 offer accept) : **inchangé** (pas de décalage mid-tour épistémique sur ce chemin).

---

## 5. Justification technique

Traitement retenu : **capture pendant le tour + finalisation après matérialisation** (option 2 du GO).

Pourquoi pas « préparer après toutes les écritures » aveuglément : le tool-first impose une invocation pendant le round Agents ; on ne peut pas déplacer l'appel OpenAI tool. La plus petite adaptation légitime est de différer l'écriture Product EC.

Invariants conservés :
- Recommendation ≠ HD ; tool solicitation ≠ Authorization
- PREPARE ≠ AUTHORIZE ≠ EXECUTE
- `MATERIALITY_CURRENTNESS_STALE` non affaibli
- Pas de 2e moteur PREPARE / 2e store / re-PREPARE silencieux
- EC historique HQA non réécrit
- Suppression cognitive → `GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED` (aucun EC artificiel)

---

## 6. Fichiers créés / modifiés (candidat Delivery)

### Modifiés (currentness)
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts`

### Créé (test acceptation)
- `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts`

### Conservés Option B (Delivery intégré — non touchés par ce correctif currentness sauf cohérence type)
- `f2/conversationWorkflowDiscrimination.ts`
- `f2/cycleLifecycleConversationCoordinator.ts`
- `f2/genericExecutionConversationCoordinator.ts`
- `f2/orchestrateF2.ts` (Option B discrimination / greenfield — déjà dans le candidat)
- tests `p6.arch.cycleLifecycleVsGenericPrepare|virginFirstCycleJourney|firstCycleLiveProgression`

Interdits non touchés : doctrine, roadmap, product-completion, DB HQA, Cursor REAL execute.

---

## 7. Contenu exploitable — diff core (orchestrateTurn + prepareGeneric)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 68703ff4..9b6daee2 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -219,6 +219,7 @@ export type ProductDurableEffectBlock =
   | "activeCycleWork"
   | "reservation"
   | "lifecycleRecommendation"
+  | "genericPrepareFinalize"
   | "readCoverage"
   | "transcriptJournal"
   | "terminalSuccess";
@@ -462,6 +463,33 @@ export async function orchestrateProjectAssistantTurn(input: {
   const provider = input.provider ?? resolveConversationProvider();
   const presentation = modeResolution.presentation;

+  /**
+   * Nora tool solicitation captured during the Agents round — finalized only
+   * after same-turn durable Product writes (see post-LR finalize below).
+   */
+  let pendingGenericPrepareMission: {
+    readonly objective?: string;
+    readonly expectedOutcome?: string;
+    readonly scope?: string;
+    readonly contextNotes?: string;
+    readonly repositoryMutation?: "none" | "read" | "write" | "unknown";
+    readonly impactSignals?: {
+      readonly structuralChange?: boolean;
+      readonly securityImpact?: boolean;
+      readonly architectureImpact?: boolean;
+      readonly dataImpact?: boolean;
+      readonly irreversible?: boolean;
+    };
+  } | null = null;
+  let genericPrepareTurnFinalize:
+    | {
+        readonly ok: boolean;
+        readonly code: string;
+        readonly executionContractId?: string;
+        readonly message: string;
+      }
+    | null = null;
+
   try {
     const turn = await runNoraCognitiveTurn({
       // P5-S01 — prefer durable logicalTurnId as stable cognitive task identity
@@ -525,43 +553,36 @@ export async function orchestrateProjectAssistantTurn(input: {
         // unique Product backend. Project bound server-side; active cycle is
         // optional context (null = S8 project-context, never invented).
         // PREPARE ≠ AUTHORIZE ≠ EXECUTE — no ExecutionAttempt is ever created.
+        //
+        // P6 Option B same-turn currentness: do NOT prepare mid-Agents-round.
+        // ACW / reservation / LR may bump LPS after the tool returns; stamping
+        // then makes the EC immediately MATERIALITY_CURRENTNESS_STALE.
+        // Queue here; finalize after durable Product writes of this turn.
         solicitPrepare: async (args) => {
-          const [
-            { getRuntimeApplicationService },
-            { solicitGenericExecutionPrepare },
-          ] = await Promise.all([
-            import("@/lib/vertical-slice-runtime"),
-            import("./w2/prepareGenericExecutionContractDraft"),
-          ]);
+          const [{ getRuntimeApplicationService }, prepareMod] =
+            await Promise.all([
+              import("@/lib/vertical-slice-runtime"),
+              import("./w2/prepareGenericExecutionContractDraft"),
+            ]);
           const oa = getRuntimeApplicationService().oa;
           if (!oa) {
             return {
               ok: false as const,
               code: "OA_UNAVAILABLE",
               message: "OA runtime indisponible pour la préparation.",
+              humanDecisionCreated: false as const,
               executionAttemptCreated: false as const,
             };
           }
-          return solicitGenericExecutionPrepare({
-            oa,
-            projectId: project.projectId,
-            cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
-            mission: {
-              objective: args.objective,
-              expectedOutcome: args.expectedOutcome,
-              scope: args.scope,
-              contextNotes: args.contextNotes,
-              repositoryMutation: args.repositoryMutation,
-              impactSignals: args.impactSignals,
-            },
-            sessionDbPath: input.sessionDbPath,
-            forceLocalAuthority:
-              process.env.VITEST === "true" ||
-              process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
-            // Explicit DET pin only (never inferred from VITEST alone).
-            pinnedBaseHeadSha:
-              process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA?.trim() || null,
-          });
+          pendingGenericPrepareMission = {
+            objective: args.objective,
+            expectedOutcome: args.expectedOutcome,
+            scope: args.scope,
+            contextNotes: args.contextNotes,
+            repositoryMutation: args.repositoryMutation,
+            impactSignals: args.impactSignals,
+          };
+          return prepareMod.queueGenericPrepareForTurnFinalization();
         },
       },
       signal: input.signal,
@@ -1310,6 +1331,72 @@ export async function orchestrateProjectAssistantTurn(input: {
       }
     }

+    // P6 Option B — finalize deferred Generic PREPARE AFTER ACW / reservation / LR
+    // so productCurrentness stamps the final LPS of this logical turn.
+    // Post-turn LPS mutations still fail MATERIALITY_CURRENTNESS_STALE (gate kept).
+    if (pendingGenericPrepareMission) {
+      const prepareMod = await import("./w2/prepareGenericExecutionContractDraft");
+      if (suppressCompleteCognitiveEffects) {
+        genericPrepareTurnFinalize = {
+          ok: false,
+          code: prepareMod.GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED,
+          message:
+            "Sollicitation Generic PREPARE non finalisée — tour cognitif stoppé ou budget d'exécution atteint. Aucun contrat créé.",
+        };
+      } else {
+        await cutDurableEffect(
+          input.signal,
+          "genericPrepareFinalize",
+          input.beforeDurableEffect,
+        );
+        const { getRuntimeApplicationService } = await import(
+          "@/lib/vertical-slice-runtime"
+        );
+        const oaPrep = getRuntimeApplicationService().oa;
+        if (!oaPrep) {
+          genericPrepareTurnFinalize = {
+            ok: false,
+            code: "OA_UNAVAILABLE",
+            message: "OA runtime indisponible pour finaliser Generic PREPARE.",
+          };
+        } else {
+          const finalized = await prepareMod.solicitGenericExecutionPrepare({
+            oa: oaPrep,
+            projectId: project.projectId,
+            cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
+            mission: pendingGenericPrepareMission,
+            sessionDbPath: input.sessionDbPath,
+            forceLocalAuthority:
+              process.env.VITEST === "true" ||
+              process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
+            pinnedBaseHeadSha:
+              process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA?.trim() || null,
+          });
+          genericPrepareTurnFinalize = finalized.ok
+            ? {
+                ok: true,
+                code: finalized.code,
+                executionContractId: finalized.executionContractId,
+                message: finalized.message,
+              }
+            : {
+                ok: false,
+                code: finalized.code,
+                message: finalized.message,
+              };
+        }
+      }
+      pendingGenericPrepareMission = null;
+      if (
+        genericPrepareTurnFinalize &&
+        !genericPrepareTurnFinalize.ok &&
+        typeof assistantText === "string" &&
+        assistantText.trim().length > 0
+      ) {
+        assistantText = `${assistantText.trim()}\n\n[Studio] ${genericPrepareTurnFinalize.message}`;
+      }
+    }
+
     const { toolEvents, sources, readCoverage } = collectToolTelemetry(
       sink.events,
     );
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 7c157e92..40c4cb77 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -1251,6 +1251,19 @@ export function genericMissionPreparedText(input: {
 // No parallel prepare engine · no task taxonomy · never an ExecutionAttempt.
 // ---------------------------------------------------------------------------

+/**
+ * Same-turn currentness (P6 Option B) — Nora tool solicitation is recorded during
+ * the Agents round; Product FINALIZES PREPARE only after durable turn writes
+ * (ACW / reservation / LR) so the EC stamp binds the final LPS, not a mid-turn
+ * snapshot invalidated by later epistemic materialization.
+ * Does NOT weaken MATERIALITY_CURRENTNESS_STALE for post-turn mutations.
+ */
+export const GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION =
+  "GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION" as const;
+
+export const GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED =
+  "GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED" as const;
+
 /** Mission fields Nora may supply to the solicitation tool (NON-AUTHORITATIVE). */
 export type SolicitGenericPrepareMissionFields = {
   readonly objective?: string | null;
@@ -1361,6 +1374,10 @@ export type SolicitGenericExecutionPrepareInput = {
   readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
 };

+/**
+ * Immediate PREPARE result (drafted EC or fail-closed). Never deferred —
+ * tool-time queueing uses {@link QueuedGenericPrepareForTurnFinalizationResult}.
+ */
 export type SolicitGenericExecutionPrepareResult =
   | {
       readonly ok: true;
@@ -1383,6 +1400,29 @@ export type SolicitGenericExecutionPrepareResult =
       readonly executionAttemptCreated: false;
     };

+/** Tool-time acknowledgement — no EC written yet (same-turn currentness). */
+export type QueuedGenericPrepareForTurnFinalizationResult = {
+  readonly ok: true;
+  readonly code: typeof GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION;
+  readonly deferredFinalize: true;
+  readonly humanDecisionCreated: false;
+  readonly executionAttemptCreated: false;
+  readonly message: string;
+};
+
+/** Tool-time acknowledgement — no EC written yet (same-turn currentness). */
+export function queueGenericPrepareForTurnFinalization(): QueuedGenericPrepareForTurnFinalizationResult {
+  return {
+    ok: true,
+    code: GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION,
+    deferredFinalize: true,
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+    message:
+      "Sollicitation Generic PREPARE enregistrée — Product finalisera le contrat après les écritures durables du tour (empreinte CURRENT). PREPARE ≠ AUTHORIZE ≠ EXECUTE ; aucun ExecutionAttempt créé.",
+  };
+}
+
 /**
  * Thin Product service for Nora tool injection (D-ER-16). PREPARE only —
  * AUTHORIZE and EXECUTE remain separate Pilote/Studio acts. Always reports

```

---

## 8. Contenu exploitable — helpers queue (extrait final prepareGeneric)

```typescript
export const GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION =
  "GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION" as const;

export const GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED =
  "GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED" as const;

export type QueuedGenericPrepareForTurnFinalizationResult = {
  readonly ok: true;
  readonly code: typeof GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION;
  readonly deferredFinalize: true;
  readonly humanDecisionCreated: false;
  readonly executionAttemptCreated: false;
  readonly message: string;
};

export function queueGenericPrepareForTurnFinalization(): QueuedGenericPrepareForTurnFinalizationResult {
  return {
    ok: true,
    code: GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION,
    deferredFinalize: true,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    message:
      "Sollicitation Generic PREPARE enregistrée — Product finalisera le contrat après les écritures durables du tour (empreinte CURRENT). PREPARE ≠ AUTHORIZE ≠ EXECUTE ; aucun ExecutionAttempt créé.",
  };
}

```

---

## 9. Contenu exploitable — test d'acceptation complet

Fichier : `p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * P6 Option B — Generic PREPARE same-turn currentness sequencing.
 *
 * Exit proof: Nora tool solicitPrepare + ACW epistemic write in ONE Product turn
 * must NOT leave the EC immediately MATERIALITY_CURRENTNESS_STALE.
 * Fake OpenAI only; real Product OA path; no HQA DB; no Cursor Execute.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as prepareSvc from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  revalidateMaterialityAgainstCurrentProduct,
} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai/types";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService, RuntimeOaStack } from "@/lib/vertical-slice-runtime";

async function projectDtoFromOa(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ProjectAssistantContextDto> {
  const project = await oa.projectServices.getProject.execute({ projectId });
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!project.ok || !lps.ok) throw new Error("project/lps missing");
  const pin =
    project.project.doctrinePackageRef ??
    lps.livingProjectState.doctrinePackageRef;
  const state = lps.livingProjectState;
  return {
    projectId,
    name: project.project.title,
    shortReference: null,
    objective: state.objective,
    contextSummary: state.context ?? "",
    criticality: "STANDARD",
    constraints: [...(state.constraints ?? [])],
    lpsId: state.lpsVersionId,
    lpsVersion: state.version,
    lpsCreatedAt: state.createdAt,
    doctrineId: pin.doctrinePackageId,
    doctrineVersion: pin.version,
    doctrineDigest: pin.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: state.activeCycleInstanceId ?? null,
    ckcResolutionRef: state.ckcResolutionRef ?? null,
  };
}

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

const ACW_DEFER_ASSESSMENT = {
  routingBlockingUnknownPresent: false,
  candidateCycleSupportable: false,
  remainingUnknownsAreCycleOwned: true,
  multiplePlausibleCycles: false,
  activeCycleAlreadyCoversWork: true,
} as const;

function interceptF2(messages: ProviderChatMessage[]): string | null {
  const isF2 = messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
  if (!isF2) return null;
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify({
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:framing",
    signals: SIGNALS_OK,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Qualifier MVP et préparer mission Cursor lecture seule",
    scope: "projects/ateliernova",
    rephrasedRequest: "préparer mission inspection",
    outOfScope: ["Cursor execute"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION"],
    activatedBlocks: ["qualification"],
    expectedOutcome: "Mission inspectable",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    continuationKind: null,
    artifactMaterializationOperation: null,
    pilotDecisionCandidate: null,
  })}`;
}

class SameTurnProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  constructor(private readonly inner: FakeConversationProvider) {}

  private result(text: string): ProviderCompletionResult {
    return {
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-same-turn",
      },
    };
  }

  async complete(
    messages: ProviderChatMessage[],
    options?: { signal?: AbortSignal },
  ): Promise<ProviderCompletionResult> {
    const hit = interceptF2(messages);
    if (hit) return this.result(hit);
    return this.inner.complete(messages, options);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<ProviderCompletionResult> {
    const hit = interceptF2(input.messages);
    if (hit) return this.result(hit);
    return this.inner.completeStructured(input);
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
    signal?: AbortSignal;
  }): Promise<ProviderRoundResult> {
    return this.inner.completeRound!(input);
  }
}

function productTurnMessage(withAcw: boolean): string {
  return JSON.stringify({
    narrative: withAcw
      ? "Orientation V1 retenue ; mission Cursor lecture seule en finalisation Product."
      : "Mission lecture seule préparée.",
    preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
    lifecycleRecommendation: null,
    activeCycleWork: withAcw
      ? {
          items: [
            {
              type: "Observation",
              statement:
                "Orientation V1 : inscriptions au-delà de la capacité avec avertissement ; pas de liste d'attente.",
              confidence: null,
              blocking: null,
            },
            {
              type: "Hypothesis",
              statement:
                "Critères de réussite : inscription possible à capacité atteinte avec avertissement non bloquant.",
              confidence: null,
              blocking: null,
            },
          ],
        }
      : null,
    conversationGuidance: {
      kind: "RECOMMEND_NEXT_STEP",
      scope: "ACTIVE_CYCLE",
      statement: "Examiner la mission de lecture seule lorsque disponible.",
      rationale: "same-turn-currentness-fixture",
    },
    journalDelta: null,
    reservationDelta: null,
  });
}

function baseAnalysis(): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:framing",
    signals: { ...SIGNALS_OK },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Inspecter le dépôt",
    scope: "projects/ateliernova",
    rephrasedRequest: "mission lecture seule",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "État des lieux",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "read_only",
      scopeIn: [],
      scopeOut: [],
    } as IntentAnalysisDto["executionIntent"],
    continuationKind: null,
    artifactMaterializationOperation: null,
    pilotDecisionCandidate: null,
  };
}

describe("P6 arch — Generic PREPARE same-turn currentness", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("same-turn-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("same-turn-product.sqlite"),
      idPrefix: "stc",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    if (previousProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousProvider;
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    vi.restoreAllMocks();
  });

  async function seedActiveFraming(suffix: string): Promise<{
    projectId: string;
    oa: RuntimeOaStack;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `SameTurn ${suffix}`,
      objective: "AtelierNova MVP",
      context: "same-turn currentness",
      criticality: "STANDARD",
      constraints: [],
      shortReference: `ST${suffix.slice(0, 4)}`,
      idempotencyKey: `idem:stc-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:stc",
        role: "project_owner",
        displayName: "STC",
        authorityLevel: "N3",
      },
    });
    const cycleInstanceId = `cyc:stc-${suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-18T08:00:00.000Z",
      forceEnable: true,
    });
    if (!auth.ok) throw new Error("auth");
    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");
    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    if (!started.ok) throw new Error("start");

    const identity = `acme/stc-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/ateliernova",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa, cycleInstanceId };
  }

  async function runPrepareTurn(input: {
    projectId: string;
    oa: RuntimeOaStack;
    withAcw: boolean;
    content: string;
  }) {
    const projectDto = await projectDtoFromOa(input.oa, input.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: baseAnalysis(),
      project: projectDto,
      registryRoot: W2_REGISTRY_ROOT,
      oa: input.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.activeCycle?.workEligible).toBe(true);

    const fake = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_prep_same_turn",
              name: "request_generic_execution_prepare",
              argumentsJson: JSON.stringify({
                objective:
                  "Inspecter le dépôt AtelierNova pour établir son état de départ et proposer une première mission d'implémentation minimale de la V1",
                expectedOutcome:
                  "Un bref état des lieux fondé sur le dépôt. Ne modifier aucun fichier.",
                scope: "projects/ateliernova",
                repositoryMutation: "none",
              }),
            },
          ],
        },
        { kind: "message", text: productTurnMessage(input.withAcw) },
      ],
    });
    const provider = new SameTurnProvider(fake);
    setConversationProviderForTests(provider);
    const turn = await orchestrateProjectAssistantTurn({
      projectId: input.projectId,
      content: input.content,
      sessionDbPath,
      provider,
      studioCognitiveContext: composed.context,
      simulateMemoryBUnavailable: true,
    });
    return turn;
  }

  it("A — same-turn tool PREPARE + ACW → EC stamp matches final LPS; continuity not STALE; no Attempt", async () => {
    const { projectId, oa, cycleInstanceId } = await seedActiveFraming("a");
    const lpsBefore = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) throw new Error("lps");
    const versionBefore = lpsBefore.livingProjectState.version;

    const spy = vi.spyOn(prepareSvc, "solicitGenericExecutionPrepare");
    const queueSpy = vi.spyOn(prepareSvc, "queueGenericPrepareForTurnFinalization");

    const turn = await runPrepareTurn({
      projectId,
      oa,
      withAcw: true,
      content:
        "Pour la V1, autoriser les inscriptions au-delà de la capacité avec avertissement, sans liste d'attente. Prépare une mission Cursor de lecture seule.",
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);

    expect(queueSpy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    const finalized = await spy.mock.results[0]!.value;
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) throw new Error(finalized.message);
    expect(finalized.code).toBe("GENERIC_PREPARE_DRAFTED");
    expect(finalized.executionContractId).toMatch(/^xct:gen-prep:/);

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) throw new Error("lps after");
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(versionBefore);

    const contracts = await oa.executionContractServices.contracts.listByProject(
      projectId,
    );
    expect(contracts).toHaveLength(1);
    const contract = contracts[0]!;
    expect(contract.executionContractId).toBe(finalized.executionContractId);
    expect(contract.status).toBe("confirmation_required");
    expect(contract.decisionRefs ?? []).toEqual([]);

    const facts = (contract.inputs as Record<string, unknown> | undefined)
      ?.materialityFacts as Record<string, unknown> | undefined;
    const stamped = parseStampedProductCurrentness(facts ?? null);
    expect(stamped).toBeTruthy();
    expect(stamped!.lpsVersion).toBe(lpsAfter.livingProjectState.version);
    expect(stamped!.lpsId).toBe(lpsAfter.livingProjectState.lpsVersionId);
    expect(stamped!.activeCycleInstanceId).toBe(cycleInstanceId);
    expect(stamped!.projectId).toBe(projectId);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) throw new Error(continuity.message);
    expect(continuity.kind).toBe("active");

    const stampedMateriality = materialityFromContractConstraints(
      contract.constraints,
    );
    expect(stampedMateriality).toBe("non_structural");
    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
      oa,
      projectId,
      analysis: analysisStubFromMaterialityFacts(
        facts ?? null,
        (contract.inputs ?? {}) as Record<string, unknown>,
      ),
      cycleInstanceId,
      stampedMateriality,
      stampedCurrentness: stamped,
    });
    expect(revalidated.ok).toBe(true);

    const attempts = await oa.executionAttemptServices!.listExecutionAttempts.execute({
      executionContractId: contract.executionContractId,
    });
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toEqual([]);
    expect(contract.status).not.toBe("confirmed");
    expect(contract.status).not.toBe("authorized");
  });

  it("B — PREPARE without ACW still finalizes CURRENT", async () => {
    const { projectId, oa } = await seedActiveFraming("b");
    const spy = vi.spyOn(prepareSvc, "solicitGenericExecutionPrepare");
    const turn = await runPrepareTurn({
      projectId,
      oa,
      withAcw: false,
      content: "Prépare une mission Cursor de lecture seule sur le dépôt.",
    });
    expect(turn.ok).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);
    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (continuity.ok) expect(continuity.kind).toBe("active");
  });

  it("C — post-turn LPS bump keeps MATERIALITY_CURRENTNESS_STALE", async () => {
    const { projectId, oa, cycleInstanceId } = await seedActiveFraming("c");
    const turn = await runPrepareTurn({
      projectId,
      oa,
      withAcw: false,
      content: "Prépare la mission lecture seule.",
    });
    expect(turn.ok).toBe(true);

    const before = await readCurrentGovernedExecutionContinuity({ oa, projectId });
    expect(before.ok).toBe(true);

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    const epiId = `epi:post:${cycleInstanceId}`;
    const written = await oa.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      correlationId: `cor:post-epi-${cycleInstanceId}`,
      items: [
        {
          epistemicItemId: epiId,
          type: "Observation",
          statement: "Mutation Product postérieure au tour PREPARE.",
          status: "active",
          source: "test:post-turn",
          relatedObjects: [projectId, cycleInstanceId],
        },
      ],
    });
    expect(written.ok).toBe(true);
    const appended = await oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: `${lps.livingProjectState.objective} · post-turn bump`,
      context: lps.livingProjectState.context,
      scope: lps.livingProjectState.scope,
      createdBy: LOCAL_PILOTE_ACTOR,
      correlationId: `cor:post-${cycleInstanceId}`,
      epistemicItemIds: [
        ...(lps.livingProjectState.epistemicItemIds ?? []),
        epiId,
      ],
      activeCycleInstanceId: cycleInstanceId,
    });
    expect(appended.ok).toBe(true);

    const after = await readCurrentGovernedExecutionContinuity({ oa, projectId });
    expect(after.ok).toBe(false);
    if (after.ok) throw new Error("expected stale");
    expect(after.code).toBe("MATERIALITY_CURRENTNESS_STALE");
  });

  it("queue helper exposes deferred code (tool-time contract)", () => {
    const queued = prepareSvc.queueGenericPrepareForTurnFinalization();
    expect(queued.ok).toBe(true);
    expect(queued.code).toBe(GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION);
    expect(queued.deferredFinalize).toBe(true);
    expect(queued.executionAttemptCreated).toBe(false);
  });
});

```

---

## 10. Modules Option B conservés (contenu complet)

### conversationWorkflowDiscrimination.ts

```typescript
/**
 * P6 Architecture Recovery (Option B) — conversation workflow discrimination.
 *
 * Pure classification of Pilote turns into Cycle Lifecycle vs Execution Mission
 * vs ambiguous/mixed. Does NOT mutate Product. Does NOT invent HumanDecision.
 * Does NOT authorize START or PREPARE.
 *
 * D-ARCH-REC-02: Cycle Lifecycle intent must not be diverted to Generic PREPARE.
 */

import type { IntentAnalysisDto, PilotDecisionCandidate } from "./types";
import {
  interpretPilotNarrativeStance,
  type PilotNarrativeStance,
} from "./composeF2PilotFacingNarrative";
import { hasExplicitNewCycleFormalizationSignal } from "./activeCycleGovernedContinuation";
import { resolveChatFirstStartRouting } from "./resolveChatFirstCycleStartGate";

export type ConversationWorkflowKind =
  | "cycle_lifecycle"
  | "execution_mission"
  | "ambiguous_mixed";

export type ConversationWorkflowDiscrimination = {
  readonly kind: ConversationWorkflowKind;
  readonly stance: PilotNarrativeStance;
  readonly startRoutingKind: ReturnType<
    typeof resolveChatFirstStartRouting
  >["kind"];
  readonly hasCycleLifecycleLanguage: boolean;
  readonly hasExecutionMissionLanguage: boolean;
  readonly analysisSignalsCycleFormalization: boolean;
  /**
   * When true, Generic PREPARE on project-context (no active cycle) must not
   * capture this turn — Cycle Lifecycle / mixed cycle-first paths.
   */
  readonly preemptsGenericPrepareProjectContext: boolean;
  readonly reason: string;
};

const CYCLE_LIFECYCLE_RE =
  /\b(?:d[eé]marr\w*|lanc\w*|activ(?:er|ation)|pr[eé]par\w*|qualif\w*|propos\w*).{0,48}\bcycle\b|\bcycle\b.{0,48}\b(?:d[eé]marr\w*|lanc\w*|activ(?:er|ation)|cadrage)\b|\b(?:nouveau|premier)\s+cycle\b|\bcycle\s+(?:de\s+)?cadrage\b|\bd[eé]marrage\s+effectif\b/i;

const EXECUTION_MISSION_RE =
  /\b(?:execution\s*contract|contrat\s+d['’]?\s*ex[eé]cution|pr[eé]pare(?:r)?\s+(?:le\s+|un\s+|ce\s+)?contrat|pr[eé]paration\s+(?:du\s+|d['’]un\s+)?contrat|mission\s+(?:technique\s+)?(?:pour\s+)?cursor|confier\w*\s+[^\n.!?]{0,40}\bcursor\b)\b/i;

const EXPLICIT_PREPARE_CONTRACT_ONLY_RE =
  /\b(?:pr[eé]pare(?:r)?|pr[eé]paration)\s+(?:le\s+|un\s+|ce\s+)?(?:contrat\s+d['’]?\s*ex[eé]cution|execution\s*contract)\b/i;

export function hasCycleLifecycleLanguage(userContent: string): boolean {
  return CYCLE_LIFECYCLE_RE.test((userContent ?? "").trim());
}

export function hasExecutionMissionLanguage(userContent: string): boolean {
  return EXECUTION_MISSION_RE.test((userContent ?? "").trim());
}

export function discriminateConversationWorkflow(input: {
  readonly userContent: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  /** True when a CURRENT Generic PREPARE offer exists for this project/cycle binding. */
  readonly hasCurrentGenericPrepareOffer?: boolean;
  /** True when resolveChatFirstGenericPrepareGo already accepted prepare/lexical. */
  readonly chatFirstPrepareAccept?: boolean;
}): ConversationWorkflowDiscrimination {
  const text = (input.userContent ?? "").trim();
  const stance = interpretPilotNarrativeStance({
    userContent: text,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
  });
  const startRouting = resolveChatFirstStartRouting({
    userContent: text,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
  });
  const cycleLang = hasCycleLifecycleLanguage(text);
  const execLang = hasExecutionMissionLanguage(text);
  const analysisCycle = hasExplicitNewCycleFormalizationSignal(input.analysis);
  const explicitContractOnly = EXPLICIT_PREPARE_CONTRACT_ONLY_RE.test(text);
  const prepareAccept = Boolean(input.chatFirstPrepareAccept);
  const hasOffer = Boolean(input.hasCurrentGenericPrepareOffer);

  // Explicit START / suppress-mint start-adjacent → Cycle Lifecycle owns the turn.
  if (
    startRouting.kind === "attempt_start" ||
    startRouting.kind === "suppress_mint" ||
    stance.kind === "accept_start"
  ) {
    const mixed = execLang && !explicitContractOnly;
    return {
      kind: mixed ? "ambiguous_mixed" : "cycle_lifecycle",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: cycleLang || analysisCycle,
      hasExecutionMissionLanguage: execLang,
      analysisSignalsCycleFormalization: analysisCycle,
      preemptsGenericPrepareProjectContext: true,
      reason: mixed
        ? "start_stance_with_execution_mention"
        : "start_or_start_adjacent_stance",
    };
  }

  // Raw / analysis cycle formalization without START stance.
  if (cycleLang || analysisCycle) {
    if (execLang && !explicitContractOnly) {
      return {
        kind: "ambiguous_mixed",
        stance,
        startRoutingKind: startRouting.kind,
        hasCycleLifecycleLanguage: true,
        hasExecutionMissionLanguage: true,
        analysisSignalsCycleFormalization: analysisCycle,
        preemptsGenericPrepareProjectContext: true,
        reason: "mixed_cycle_and_execution_language",
      };
    }
    return {
      kind: "cycle_lifecycle",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: true,
      hasExecutionMissionLanguage: execLang,
      analysisSignalsCycleFormalization: analysisCycle,
      preemptsGenericPrepareProjectContext: true,
      reason: cycleLang
        ? "raw_cycle_lifecycle_language"
        : "analysis_cycle_formalization",
    };
  }

  // Execution mission: prepare accept on CURRENT offer, lexical prepare contract,
  // or execution-mission language without cycle lifecycle language.
  if (prepareAccept || explicitContractOnly || (execLang && hasOffer)) {
    return {
      kind: "execution_mission",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: false,
      hasExecutionMissionLanguage: true,
      analysisSignalsCycleFormalization: false,
      preemptsGenericPrepareProjectContext: false,
      reason: prepareAccept
        ? "chat_first_prepare_accept"
        : explicitContractOnly
          ? "explicit_prepare_contract"
          : "execution_language_with_current_offer",
    };
  }

  if (execLang) {
    return {
      kind: "execution_mission",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: false,
      hasExecutionMissionLanguage: true,
      analysisSignalsCycleFormalization: false,
      preemptsGenericPrepareProjectContext: false,
      reason: "execution_mission_language",
    };
  }

  // D-ER-17 — natural documentary / non-cycle actionable turns remain eligible
  // for Generic PREPARE project-context when ACGC eligibility admits them.
  // Absence of cycle-lifecycle language must NOT preempt that path (E10).
  return {
    kind: "execution_mission",
    stance,
    startRoutingKind: startRouting.kind,
    hasCycleLifecycleLanguage: false,
    hasExecutionMissionLanguage: false,
    analysisSignalsCycleFormalization: false,
    preemptsGenericPrepareProjectContext: false,
    reason: "non_cycle_default_allows_execution_admission",
  };
}

```

### cycleLifecycleConversationCoordinator.ts

```typescript
/**
 * P6 Architecture Recovery (Option B) — Cycle Lifecycle conversation coordinator.
 *
 * Owns Cycle Lifecycle conversational orientation (framing / trajectory / START
 * preconditions). Does NOT invent HumanDecision, CycleInstance, or START.
 * Does NOT call Generic PREPARE.
 *
 * Product mutations remain in OA facades / preCycleCandidateTrajectoryActions /
 * resolveChatFirstCycleStartGate — this module coordinates messaging + admission
 * boundaries only.
 */

import type { FramingContinuityPhase } from "./chatFirstFramingContinuity";
import type { ConversationWorkflowDiscrimination } from "./conversationWorkflowDiscrimination";

export function shouldExcludeGenericPrepareProjectContext(
  discrimination: ConversationWorkflowDiscrimination,
): boolean {
  return discrimination.preemptsGenericPrepareProjectContext;
}

/** Result of reading CycleInstance inventory for Cycle Lifecycle early orientation. */
export type CycleInventoryReadResult =
  | { readonly kind: "available"; readonly count: number }
  | { readonly kind: "unavailable"; readonly reason: string };

/**
 * Fail-closed messaging when CycleInstance inventory cannot be proven empty.
 * Must not claim "0 cycle" or progress as if inventory were empty.
 */
export function cycleInventoryUnavailableMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly cycleLabel?: string | null;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  return [
    head,
    `L'inventaire des cycles du projet est temporairement indisponible — Studio ne peut pas traiter le démarrage de ${cycle} sur une absence non prouvée.`,
    "Aucun cycle n'a été créé, démarré ni préparé. Aucun contrat d'exécution n'a été préparé. Réessayez lorsque l'état Product est de nouveau lisible.",
  ].join(" ");
}

/**
 * Pilot-facing orientation when Cycle Lifecycle is requested but START
 * preconditions are not met. Never claims PREPARE/EC/HD mission semantics.
 */
export function cycleLifecyclePreconditionsMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly phase: FramingContinuityPhase | null | undefined;
  readonly cycleLabel?: string | null;
  readonly discrimination: ConversationWorkflowDiscrimination;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  const mixedNote =
    input.discrimination.kind === "ambiguous_mixed" &&
    input.discrimination.hasExecutionMissionLanguage
      ? " La préparation d'un contrat d'exécution Cursor reste une étape distincte — après démarrage du cycle, pas à sa place."
      : "";

  switch (input.phase) {
    case "ready_to_start":
      return [
        head,
        `Le cycle ${cycle} est préparé. Indiquez explicitement que vous souhaitez le démarrer — aucun ExecutionContract n'est requis pour START.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "trajectory_decided_prepare_cycle":
      return [
        head,
        `La trajectoire est décidée — il reste à préparer le cycle ${cycle} avant tout démarrage. Aucun contrat d'exécution n'a été préparé.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "awaiting_trajectory_decision":
      return [
        head,
        `Une direction de trajectoire est proposée pour ${cycle}. Validez-la dans la carte de décision — un accord conversationnel ne démarre pas le cycle et ne prépare pas de contrat d'exécution.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "recommendation_ready":
      return [
        head,
        `Une recommandation de cycle est disponible. Je peux préparer la trajectoire candidate pour ${cycle} — validez ensuite la décision structurante si applicable. Aucun démarrage ni contrat d'exécution n'a été engagé.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "active":
      return [
        head,
        `Un cycle est déjà actif. Aucun second démarrage n'a été engagé.${mixedNote}`,
      ].join(" ");
    case "blocked_stale_or_incomplete":
      return [
        head,
        `La trajectoire candidate n'est pas encore exploitable pour ${cycle}. Aucune HumanDecision inventée, aucun démarrage, aucun contrat d'exécution.`,
      ].join(" ");
    case "blocked_no_recommendation":
    default:
      return [
        head,
        `Pour démarrer ${cycle}, Studio a besoin d'une recommandation de cycle puis d'une trajectoire préparée et liée — votre confirmation conversationnelle n'active rien à elle seule.`,
        "Aucun cycle artificiel n'a été créé. Aucun contrat d'exécution n'a été préparé.",
        mixedNote.trim(),
        "Utilisez la carte de trajectoire / préparation dans la conversation lorsqu'elle est disponible, ou demandez une recommandation de premier cycle.",
      ]
        .filter(Boolean)
        .join(" ");
  }
}

export function mixedCycleExecutionClarificationMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly cycleLabel?: string | null;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "le cycle de travail";
  return [
    head,
    `Votre demande mélange démarrage de ${cycle} et préparation d'exécution.`,
    "Ce sont deux opérations distinctes : d'abord Cycle Lifecycle (trajectoire → préparation → START), ensuite Generic PREPARE du contrat — préparer ≠ autoriser ≠ exécuter.",
    "Aucune des deux n'a été engagée silencieusement. Précisez laquelle vous voulez en premier, ou validez la trajectoire du cycle puis redemandez le contrat.",
  ].join(" ");
}

```

### genericExecutionConversationCoordinator.ts

```typescript
/**
 * P6 Architecture Recovery (Option B) — Generic Execution conversation coordinator.
 *
 * Thin admission boundary for Generic PREPARE conversational routing.
 * Reuses existing W2 prepare helpers — does NOT duplicate readiness/materiality
 * rules and does NOT authorize EXECUTE.
 *
 * D-ER-17: project-context PREPARE remains available for true execution missions.
 * D-ARCH-REC-02: Cycle Lifecycle discrimination preempts project-context capture.
 */

import type { IntentAnalysisDto, PilotDecisionCandidate } from "./types";
import {
  getCurrentGenericPrepareOffer,
  resolveChatFirstGenericPrepareGo,
} from "../w2/prepareGenericExecutionContractDraft";
import {
  discriminateConversationWorkflow,
  type ConversationWorkflowDiscrimination,
} from "./conversationWorkflowDiscrimination";
import { shouldExcludeGenericPrepareProjectContext } from "./cycleLifecycleConversationCoordinator";

export type GenericPrepareConversationAdmission = {
  readonly discrimination: ConversationWorkflowDiscrimination;
  readonly prepareGo: ReturnType<typeof resolveChatFirstGenericPrepareGo>;
  readonly chatFirstPrepareAccept: boolean;
  /** Active-cycle or project-context path may enter Generic PREPARE block. */
  readonly allowGenericPrepareRouting: boolean;
  /** Project-context (no active cycle) admission specifically. */
  readonly allowProjectContextPrepare: boolean;
  readonly blockReason: string | null;
};

export function assessGenericPrepareConversationAdmission(input: {
  readonly projectId: string;
  readonly userContent: string;
  readonly analysis: IntentAnalysisDto;
  readonly activeCycleInstanceId: string | null;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionDbPath?: string | null;
  /** From ACGC / optional documentary eligibility (caller). */
  readonly eligibleForGenericPrepareRouting: boolean;
  readonly actionableForIntent: boolean;
  /**
   * Historical S8 project-context gate: prepare-accept OR
   * NEW_CYCLE_FORMALIZATION + no_compatible_artifact_effect.
   * Cycle-lifecycle discrimination may still preempt.
   */
  readonly projectContextLegacyEligible: boolean;
}): GenericPrepareConversationAdmission {
  const activeId = input.activeCycleInstanceId?.trim() || null;
  const prepareGo = resolveChatFirstGenericPrepareGo({
    projectId: input.projectId,
    cycleInstanceId: activeId,
    text: input.userContent,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
    sessionDbPath: input.sessionDbPath,
  });
  const chatFirstPrepareAccept =
    prepareGo.kind === "prepare" ||
    prepareGo.kind === "explicit_lexical_prepare";
  const currentOffer = getCurrentGenericPrepareOffer(input.projectId, {
    sessionDbPath: input.sessionDbPath,
  });
  const discrimination = discriminateConversationWorkflow({
    userContent: input.userContent,
    analysis: input.analysis,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
    hasCurrentGenericPrepareOffer: currentOffer != null,
    chatFirstPrepareAccept,
  });

  const excludeProjectContext =
    shouldExcludeGenericPrepareProjectContext(discrimination);

  const actionable =
    input.actionableForIntent || chatFirstPrepareAccept;

  if (!input.eligibleForGenericPrepareRouting || !actionable) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: !input.eligibleForGenericPrepareRouting
        ? "not_eligible_for_generic_prepare_routing"
        : "not_actionable_for_prepare",
    };
  }

  if (activeId) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: true,
      allowProjectContextPrepare: false,
      blockReason: null,
    };
  }

  // D-ER-17 project-context — only for true execution missions.
  if (excludeProjectContext) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: `cycle_lifecycle_preempts_project_context_prepare:${discrimination.reason}`,
    };
  }

  if (discrimination.kind !== "execution_mission" && !chatFirstPrepareAccept) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: `workflow_not_execution_mission:${discrimination.kind}`,
    };
  }

  if (!input.projectContextLegacyEligible && !chatFirstPrepareAccept) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: "project_context_legacy_gate_not_met",
    };
  }

  return {
    discrimination,
    prepareGo,
    chatFirstPrepareAccept,
    allowGenericPrepareRouting: true,
    allowProjectContextPrepare: true,
    blockReason: null,
  };
}

```

---

## 11. Preuves tests

### Acceptation principale + négatifs locaux
Commande :
```
npx vitest run __tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
```
Résultat : **4/4 PASS**
- A same-turn PREPARE+ACW → stamp == LPS final ; continuity active ; revalidate ok ; 0 Attempt ; status confirmation_required
- B PREPARE sans ACW → CURRENT
- C mutation LPS post-tour → MATERIALITY_CURRENTNESS_STALE
- queue helper expose deferred code

### Non-régression transverse (12 fichiers / 117 tests)
```
npx vitest run \
  p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts \
  p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts \
  p6.arch.virginFirstCycleJourney.d0.test.ts \
  p6.arch.firstCycleLiveProgression.d0.test.ts \
  p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts \
  p6.toolFirst.executionContractSimplification.d0.test.ts \
  p6.toolFirst.safetyClosureR1R2.d0.test.ts \
  p6.productContinuityClosure.integrated.d0.test.ts \
  p6.mHd01.authorityContinuityCorrection.d0.test.ts \
  p6.mHd02.missionIdentityContinuitySession.d0.test.ts \
  p6.r03.inspectionContinuityAttestation.d0.test.ts \
  p6.der16.genericNoraToolInvocation.d0.test.ts
```
Résultat : **12 files / 117 tests PASS**

### Validations
| Commande | Résultat |
|---|---|
| `npm run typecheck` | PASS (0 error) |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` (fichiers currentness) | PASS |

### Matrice négatifs GO §11 (couverture)
| Cas | Preuve |
|---|---|
| A same-turn PREPARE+ACW | test A |
| B sans ACW | test B |
| C LPS post-tour STALE | test C |
| D doctrine après PREPARE | p6.productContinuityClosure / authority suites |
| E cycle actif différent | continuity / der16 |
| F RepositoryBinding | CR-P6-CLOSURE suites (productContinuityClosure) |
| G facts indisponibles | fail-closed materiality (existants) |
| H PREPARE sans cycle D-ER-17 | der16 |
| I PREPARE avec cycle — pas parasite | der16 / arch |
| J mission structurante HD | mHd01 / gD4 |
| K non structurante sans HD systématique | gD4 |
| L retry tool | queue idempotent per turn (pending overwrite) + der16 |
| M prepare échoué | suppress path + fail finalize notice |
| N Cycle Lifecycle START ≠ Generic | cycleLifecycleVsGenericPrepare |
| O Tool-First R1/R2 | safetyClosureR1R2 PASS |
| P réouverture projection | continuity active/blocked |

Tests non exécutés volontairement : suite globale complète app (hors matrice Dependency).

---

## 12. Fake / Real qualification

| Frontière | Mode |
|---|---|
| Nora OpenAI | Fake (tests) |
| Product OA / SQLite | Real services, DB temporaires |
| Cursor Gateway REAL | Non exercé (interdit) |
| HQA LIVE | Préservé RO ; EC historique STALE non réécrit |

Claims autorisés : correction déterministe same-turn currentness au périmètre prouvé.
Claims interdits : P6 GLOBAL PASS ; EC CURRENT = Cursor REAL executable ; no-write enforcement proven ; runtime v3 ADOPTED.

### Qualification Tool-First REAL no-write (prérequis suite HQA — non corrigé ici)
- Dette OPEN : `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT`
- Mission AtelierNova : inspection déclarée non mutative / pathless ou path-bound selon binding
- Un EC CURRENT après correction **ne garantit pas** l'exécutabilité REAL
- Ne pas désarmer le no-write gate ; ne pas inventer de chemin cible ; ne pas lancer Attempt pour « passer »

---

## 13. UI / projection

Incohérence confirmée historiquement : UI « À confirmer » vs continuity STALE.
Ce Delivery priorise le sequencing Product. Projection résultante attendue après correction + revalidation : continuity `active` pour same-turn ; STALE seulement pour mutations réellement postérieures. Pas de refonte UX ; pas de label masquant STALE.

---

## 14. Risques / réserves / dette / exit

Risques résiduels :
- Invocation tool répétée dans le même tour : dernière mission capturée (overwrite) — pas de duplication EC silencieuse (finalize une fois).
- Chemin F2 direct prepare non différé (hors cause RCA tool mid-turn).
- Runtime HQA encore sur binaire pré-correction (PID 8146) — replay Morris sous GO distinct après revue.

Dette : TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN.
Exit suivant : Review ChatGPT → redémarrage candidat sous GO → Human QA Morris → reprise Generic Execution / inspection-confirmation.

Gates Morris restants :
1. Review ChatGPT sur ce handoff
2. Autorisation redémarrage runtime HQA (si souhaité)
3. Replay Human QA
4. Frontière Cursor REAL / no-write

---

## 15. Verdict Delivery

**OPTION B GENERIC PREPARE CURRENTNESS — SAME-TURN PRODUCT COHERENCE PROVEN — READY FOR MORRIS REVIEW.**

Statut : **READY FOR REVIEW**
(P6 GLOBAL PASS : NON DÉCLARÉ)

Instruction ChatGPT : lire ce Review Handoff Git canonique ; vérifier cause racine corrigée, stamp sur faits finaux du tour, revalidation CURRENT, gates non relâchés, pas de duplication EC, non-régression Generic PREPARE, dette no-write toujours qualifiée. Ne pas autoriser le replay Human QA avant cette revue.

FIN — GO MORRIS CURRENTNESS CORRECTION CONSUMED.
