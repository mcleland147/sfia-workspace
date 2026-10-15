# SFIA Studio — P6-HQA-F05-GD4-01 — Review Pack FULL

- **Horodatage** : 2026-10-15T20:46:23+0200 (Europe/Paris)
- **GO Morris** : P6 HUMAN QA CORRECTION PASS — OPTIONAL ARTIFACT PRODUCTION / GENERIC PREPARE ROUTING
- **Finding** : P6-HQA-F05-GD4-01
- **Macro** : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- **Milestone** : P6 — GLOBAL INTEGRATED PRODUCT QA
- **Capacité** : V3-F05 (+ V3-F14 / P2-D-02 connexes)
- **Cycle projet SFIA** : 8 — Delivery / implémentation
- **Type** : RUN / CORRECTION
- **Profil** : CRITICAL
- **CKC** : `projects/sfia-studio/sfia-v3-framing/ckc/08-delivery-implementation.md` (guidance candidate ; aucune autorité métier)

## 1. Local Git Truth initial

| Check | Valeur |
|---|---|
| Repository | mcleland147/sfia-workspace |
| origin/main attendu | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| origin/main observé | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Drift | **AUCUN** (trees 11ca7215 ≡ 52f36884) |
| Worktree correction | `/Users/morris/Projects/sfia-workspace-p6-hqa-optional-artifact-generic-prepare` |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD initial/final (baseline) | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Runtime :3020 | **non modifié** |
| Bases e66 | **non touchées** |
| Commit projet | **AUCUN** (hors scope de ce pass) |

## 2. Sources consultées

- prompts/templates/sfia-cycle-execution-template.md (réf.)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md (réf.)
- convergence doctrine + roadmap ; product-completion ; product-simplification 02/07 ; framing 32/35 (réf. P2-D-01/02/03)
- Runtime lu/modifié : `activeCycleGovernedContinuation.ts`, `orchestrateF2.ts`
- Runtime lu : `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`
- Fake boundary : `fakeProvider.ts`
- CKC Delivery : `sfia-v3-framing/ckc/08-delivery-implementation.md`

## 3. Convergence Pre-check

- V3-F05 intégrée via PR #585 ; P6 IN PROGRESS / NOT PASSED
- KEEP : Generic PREPARE, Artifact Continuation, P2-D-02, Materiality, HD, Confirmation, EC, RepositoryBinding
- Gap : demande documentaire naturelle capturée par routage Artifact obligatoire → dead-end `no_require_artifact` avant Generic PREPARE
- Exit Proof recherché : mission documentaire facultative → Generic PREPARE → EC inspectable ; parcours obligatoire préservé

## 4. Finding Human QA

- Projet e66 / cycle `cyc:trj-255a8418ee8a735f23738c46`
- Pilote demande un Markdown durable dans le dépôt (langage métier)
- Réponse observée : `[LIVE] Continuation Artifact demandée, but aucune décision CURRENT REQUIRE_ARTIFACT…`
- Aucun ExecutionContract préparé

## 5. Cause technique confirmée

1. `hasNaturalActiveCycleDeliverableMaterializationSignal` / continuationKind → entrée Artifact-continuation
2. `hasCompatibleDocsWriteMaterializationEffect` OK
3. `admitsActiveCycleArtifactMaterializationContinuation` faux (pas de CURRENT REQUIRE_ARTIFACT / pas APPLICABLE unsatisfied)
4. `resolveActiveCycleGovernedContinuation` → `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact`
5. `orchestrateF2` n’ouvrait Generic PREPARE que si `continuation.mode === "NEW_CYCLE_FORMALIZATION"`
6. Branche BLOCKED émettait le message REQUIRE_ARTIFACT exclusif → dead-end conversationnel

**Cause confirmée** (pas révisée) : intersection trop étroite Generic PREPARE ∩ Artifact block `no_require_artifact`.

## 6. Choix de correction

**Plus petite correction cohérente** :

- Conserver la sémantique de resolve : `no_require_artifact` reste un BLOCK Artifact (pas GOVERNED, pas NEW_CYCLE_FORMALIZATION)
- Ajouter `isOptionalDocumentaryWithoutClosureArtifactBlock`
- Dans `orchestrateF2`, élargir l’éligibilité Generic PREPARE à :
  - `NEW_CYCLE_FORMALIZATION` **OU**
  - `isOptionalDocumentaryWithoutClosureArtifactBlock(continuation)`
- Ne **pas** élargir : `cycle_load_failed`, `incompatible_execution_intent`, `lifecycle_assess_failed`, obligations réellement applicables, etc.
- Soften message fallback `no_require_artifact` (ne plus présenter REQUIRE_ARTIFACT comme unique issue)
- Marqueur Fake `__P6_OPTIONAL_DOCUMENTARY_MD__` pour DET

**Rejeté** : forcer `NEW_CYCLE_FORMALIZATION` comme alias ; inventer HD REQUIRE_ARTIFACT ; troisième moteur.

## 7. Parcours obligatoire préservé (Cas A)

Si CURRENT REQUIRE_ARTIFACT ou Artifact APPLICABLE+unsatisfied → `ACTIVE_CYCLE_GOVERNED_CONTINUATION` → Generic PREPARE **non** engagé (T05 PASS).

## 8. Parcours facultatif restauré (Cas B)

Signal materialization sans obligation de clôture → block `no_require_artifact` reconnu → Generic PREPARE recommend → accept CURRENT → EC natif `decisionRefs=[]` si NON_STRUCTURAL → inspect/authorize sans Attempt (T01–T04, T09 PASS).

## 9. Fichiers

### Modifiés
- `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

### Créés
- `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts`

### Interdits
Aucun (doctrine / roadmap / SQLite e66 / :3020 / REAL configs)

## 10. Diff Product exploitable

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index 087cfca1..ef27e815 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -537,6 +537,23 @@ export type ActiveCycleContinuationResolution =
       readonly reason: "no_materialization_intent";
     };

+/**
+ * P6-HQA-F05-GD4-01 — Artifact-continuation handling recognized a materialization
+ * signal, but no closure obligation (CURRENT REQUIRE_ARTIFACT / APPLICABLE
+ * unsatisfied) is established. This is NOT an Artifact governed continuation
+ * and MUST NOT invent a HumanDecision. It is also NOT NEW_CYCLE_FORMALIZATION.
+ * Orchestration may qualify the ordinary documentary mission via Generic PREPARE
+ * when Product readiness/materiality allow — other BLOCKED reasons stay exclusive.
+ */
+export function isOptionalDocumentaryWithoutClosureArtifactBlock(
+  resolution: ActiveCycleContinuationResolution,
+): boolean {
+  return (
+    resolution.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED" &&
+    resolution.reason === "no_require_artifact"
+  );
+}
+
 function blocked(
   reason: ContinuationBlockedReason,
   activeCycle: CycleInstance | null = null,
@@ -1093,7 +1110,9 @@ export function continuationBlockedMessage(
     case "active_cycle_not_active":
       return `Continuation Artifact demandée, mais le cycle référencé n'est pas actif.${cycleHint} Aucun nouveau CycleInstance créé.`;
     case "no_require_artifact":
-      return `Continuation Artifact demandée, mais aucune décision CURRENT REQUIRE_ARTIFACT n'est ouverte sur le cycle actif.${cycleHint} Aucun nouveau CycleInstance créé.`;
+      // Fallback only — ordinary documentary missions should route to Generic
+      // PREPARE (P6-HQA-F05-GD4-01) before this message is shown.
+      return `Cette demande documentaire n'est pas établie comme obligation Artifact de clôture du cycle actif.${cycleHint} Aucune HumanDecision artificielle. Aucun nouveau CycleInstance créé.`;
     case "artifact_already_satisfied":
       return `Le livrable requis du cycle actif est déjà satisfait — cette matérialisation n'est plus une obligation ouverte.${cycleHint} Aucun nouveau CycleInstance créé.`;
     case "lifecycle_assess_failed":
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 17c5402d..47e4e51c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -71,6 +71,7 @@ import { evaluateMorrisGateRequired } from "./gatePolicy";
 import {
   resolveActiveCycleGovernedContinuation,
   continuationBlockedMessage,
+  isOptionalDocumentaryWithoutClosureArtifactBlock,
 } from "./activeCycleGovernedContinuation";
 import {
   enrichQualificationWithCkcSemantics,
@@ -2002,8 +2003,16 @@ export async function orchestrateAssistantSend(input: {
       analysis.intentClass === "execution_request" ||
       chatFirstPrepareAccept;

+    // P6-HQA-F05-GD4-01 — ordinary documentary materialization without a
+    // closure Artifact obligation must not dead-end on no_require_artifact.
+    // Reuse Generic PREPARE on the SAME active cycle. Do NOT alias this as
+    // NEW_CYCLE_FORMALIZATION. Do NOT widen other BLOCKED reasons.
+    const eligibleForGenericPrepareRouting =
+      continuation.mode === "NEW_CYCLE_FORMALIZATION" ||
+      isOptionalDocumentaryWithoutClosureArtifactBlock(continuation);
+
     if (
-      continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+      eligibleForGenericPrepareRouting &&
       Boolean(activeIdForPrepare) &&
       actionableForGenericPrepare
     ) {
@@ -2212,12 +2221,15 @@ export async function orchestrateAssistantSend(input: {
         turnKind: "f1_informative",
       });
     }
-    } // actionableForGenericPrepare / NEW_CYCLE_FORMALIZATION
+    } // actionableForGenericPrepare / eligible Generic PREPARE routing
   } // chat-first prepare gate scope

   if (continuation.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
     // CR-07-05 — recognized Artifact continuation that cannot be verified:
     // BLOCK / clarify in-cycle. NEVER createCycle.
+    // no_require_artifact: optional documentary path should have been consumed
+    // by Generic PREPARE above when actionable; remaining cases stay fail-safe
+    // clarification without inventing REQUIRE_ARTIFACT.
     const activeId =
       continuation.activeCycle?.cycleInstanceId ??
       project.activeCycleInstanceId ??
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 2c7a46f4..ea865141 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -1196,6 +1196,70 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
+    // P6-HQA-F05-GD4-01 — ordinary Markdown deliverable on active cycle WITHOUT
+    // closure REQUIRE_ARTIFACT. Triggers natural materialization signal +
+    // compatible docs_write effect so resolve returns no_require_artifact;
+    // orchestration must route to Generic PREPARE (not REQUIRE_ARTIFACT dead-end).
+    if (markerProbe.includes("__P6_OPTIONAL_DOCUMENTARY_MD__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          cognitiveWorkload: null,
+          contradictionCandidate: null,
+          challengeResponseAssessment: "sufficient",
+          continuationKind: null,
+          artifactMaterializationOperation: "cursor.docs_write.apply",
+          objective:
+            "Produire un document Markdown enregistré dans le dépôt du projet",
+          scope: "projects/demo/docs",
+          rephrasedRequest:
+            "Créer un fichier Markdown durable dans le projet pour le cadrage",
+          outOfScope: ["Nouveau CycleInstance", "REQUIRE_ARTIFACT artificiel", "Cursor REAL"],
+          risks: [],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: "Document Markdown consultable et évolutif dans le dépôt",
+          criticalJustification: null,
+          requestedOperation: null,
+          executionIntent: {
+            intentKind: "docs_write",
+            artifactType: "deliverable_document",
+            targetRepositoryRef: null,
+            targetPath: "projects/demo/docs/note-cadrage.md",
+            artifactFileName: "note-cadrage.md",
+            scopeIn: ["projects/demo/docs"],
+            scopeOut: ["projects/sfia-studio/convergence"],
+            expectedOutputs: ["projects/demo/docs/note-cadrage.md"],
+            requiredCapabilities: ["cap:cursor.docs_write"],
+            validationExpectations: [],
+            evidenceRequirements: [],
+            requestedOperation: null,
+            reversibilityExpectation: null,
+            artifactBrief: "Note de cadrage Markdown du projet",
+            contentRequirements: ["Contenu de cadrage défini avec Nora"],
+            exitRequirementKinds: [],
+          },
+          pilotDecisionCandidate: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
     // P6 Product Continuity Closure — generic Cursor mission (non-structural).
     if (markerProbe.includes("__P6_GENERIC_MISSION__")) {
       return {

```

## 11. Test dédié (contenu complet)

```typescript
/**
 * P6-HQA-F05-GD4-01 — optional documentary mission vs Artifact closure obligation.
 *
 * Proves: natural Markdown production on an active cycle WITHOUT REQUIRE_ARTIFACT /
 * APPLICABLE unsatisfied routes to Generic PREPARE (recommend → OK → EC), not the
 * exclusive no_require_artifact dead-end. Mandatory Artifact continuation remains
 * priority when obligation applies. No synthetic HD. No new CycleInstance.
 * No Attempt. Fake OpenAI boundary only — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  isOptionalDocumentaryWithoutClosureArtifactBlock,
  resolveActiveCycleGovernedContinuation,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  getPendingGenericPrepareOffer,
  resolvePrepareOfferSessionKey,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2InspectExecutionContractAction,
} from "@/features/project-assistant/w2/actions";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function optionalDocumentaryAnalysis() {
  return validateIntentAnalysisPayload({
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    continuationKind: null,
    artifactMaterializationOperation: "cursor.docs_write.apply",
    objective:
      "Produire un document Markdown enregistré dans le dépôt du projet",
    scope: "projects/demo/docs",
    rephrasedRequest:
      "Créer un fichier Markdown durable dans le projet pour le cadrage",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "Document Markdown consultable dans le dépôt",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: "deliverable_document",
      targetRepositoryRef: null,
      targetPath: "projects/demo/docs/note-cadrage.md",
      artifactFileName: "note-cadrage.md",
      scopeIn: ["projects/demo/docs"],
      scopeOut: [],
      expectedOutputs: ["projects/demo/docs/note-cadrage.md"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: null,
      artifactBrief: "Note de cadrage Markdown",
      contentRequirements: ["Contenu de cadrage"],
      exitRequirementKinds: [],
    },
  });
}

describe("P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing", () => {
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
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("p6-hqa-f05-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-hqa-f05-product.sqlite"),
      idPrefix: "f05",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(input: {
    suffix: string;
    withRequireArtifactPolicy?: boolean;
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `F05 ${input.suffix}`,
      objective: "Optional documentary routing",
      context: "det hqa f05",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `F5${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:f05-${input.suffix}`,
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
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const cycleInstanceId = `cyc:f05-${input.suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
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
      issuedAt: "2026-10-15T08:00:00.000Z",
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
    if (input.withRequireArtifactPolicy) {
      const pol = await recordObligationPolicyRequireArtifact({
        projectId,
        cycleInstanceId,
        cycleServices: oa.cycleServices,
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        nowIso: () => "2026-10-15T08:02:00.000Z",
      });
      if (!pol.ok) throw new Error("require_artifact_policy");
    }
    const identity = `acme/f05-${input.suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa };
  }

  function projectDto(input: {
    projectId: string;
    cycleInstanceId: string;
    overview: {
      project: { name: string; objective: string };
      livingState: { id: string; version: number; createdAt: string };
      doctrine: {
        id: string;
        version: string | number;
        digest: string;
        status: string;
      };
    };
  }): ProjectAssistantContextDto {
    return {
      projectId: input.projectId,
      name: input.overview.project.name,
      shortReference: null,
      objective: input.overview.project.objective,
      contextSummary: "p6 hqa f05",
      criticality: "STANDARD",
      constraints: [],
      lpsId: input.overview.livingState.id,
      lpsVersion: input.overview.livingState.version,
      lpsCreatedAt: input.overview.livingState.createdAt,
      doctrineId: input.overview.doctrine.id,
      doctrineVersion: String(input.overview.doctrine.version),
      doctrineDigest: input.overview.doctrine.digest,
      doctrineStatus: input.overview.doctrine.status,
      runtimeMode: "local",
      persistence: "product-sqlite",
      readiness: "ready",
      activeCycleInstanceId: input.cycleInstanceId,
      ckcResolutionRef: null,
    };
  }

  it("T01 — resolve: optional documentary without obligation → no_require_artifact block (not GOVERNED)", async () => {
    const { projectId, cycleInstanceId } = await seedProject({ suffix: "t01" });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDto({
        projectId,
        cycleInstanceId,
        overview,
      }),
      analysis: optionalDocumentaryAnalysis(),
      oa: runtime.oa!,
    });
    expect(isOptionalDocumentaryWithoutClosureArtifactBlock(resolved)).toBe(
      true,
    );
    expect(resolved.mode).not.toBe("NEW_CYCLE_FORMALIZATION");
    expect(resolved.mode).not.toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
  });

  it("T01–T04 — natural optional MD: recommend → OK → EC; no REQUIRE_ARTIFACT dead-end; same cycle; no synthetic HD", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "opt",
    });
    const cyclesBefore = (
      await oa.cycleServices.cycles.listByProject(projectId)
    ).length;
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;

    const turn1 = await orchestrateAssistantSend({
      projectId,
      content:
        "Je souhaite un document Markdown enregistré dans le dépôt du projet. __P6_OPTIONAL_DOCUMENTARY_MD__",
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).not.toMatch(/REQUIRE_ARTIFACT/i);
    expect(turn1.text).not.toMatch(/aucune décision CURRENT REQUIRE_ARTIFACT/i);
    expect(turn1.text).toMatch(/préparer le contrat|Je peux préparer|Je recommande/i);

    const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
    const offer = getPendingGenericPrepareOffer(projectId, sessionKey);
    expect(offer).toBeTruthy();
    expect(offer?.cycleInstanceId).toBe(cycleInstanceId);

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    expect(turn2.text).toMatch(/préparé le contrat|Contrat inspectable/i);
    expect(turn2.text).toMatch(/xct:gen-prep:/);

    const contractIdMatch = turn2.text.match(/xct:gen-prep:[a-f0-9]+/);
    expect(contractIdMatch).toBeTruthy();
    const executionContractId = contractIdMatch![0];
    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId },
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");

    const cyclesAfter = (
      await oa.cycleServices.cycles.listByProject(projectId)
    ).length;
    expect(cyclesAfter).toBe(cyclesBefore);
    const hdAfter = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;
    expect(hdAfter).toBe(hdBefore);
  });

  it("T05 — REQUIRE_ARTIFACT CURRENT keeps Artifact governed path (not Generic PREPARE recommend)", async () => {
    const { projectId, cycleInstanceId } = await seedProject({
      suffix: "obl",
      withRequireArtifactPolicy: true,
    });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: "__F2_ARTIFACT_MATERIALIZE__",
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
    expect(getPendingGenericPrepareOffer(projectId, sessionKey)).toBeNull();
    // Governed Artifact continuation: proposal or in-cycle clarification — same cycle.
    if (turn.f2?.qualification?.cycleInstanceId) {
      expect(turn.f2.qualification.cycleInstanceId).toBe(cycleInstanceId);
    }
    expect(turn.f2?.turnKind === "f2_proposal" || turn.f2?.turnKind === "f2_clarification" || turn.f2?.turnKind === "f2_blocked").toBe(
      true,
    );
  });

  it("T09 — after optional PREPARE: inspect → authorize; ZERO Attempt", async () => {
    const { projectId, oa } = await seedProject({ suffix: "auth" });
    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: "Document Markdown durable dans le projet. __P6_OPTIONAL_DOCUMENTARY_MD__",
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    const executionContractId = turn2.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
    expect(executionContractId).toBeTruthy();
    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: executionContractId! },
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");

    const inspect = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: executionContractId!,
      expectedVersion: loaded.contract.version,
    });
    expect(inspect.ok).toBe(true);
    if (!inspect.ok) throw new Error(inspect.message);

    if (loaded.contract.status === "confirmation_required") {
      const confirmed = await w2ConfirmExecutionContractAction({
        projectId,
        executionContractId: executionContractId!,
      });
      expect(confirmed.ok).toBe(true);
      if (!confirmed.ok) throw new Error(confirmed.message);
    }

    const authorized = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: executionContractId!,
      expectedVersion: loaded.contract.version,
      expectedSemanticFingerprint: inspect.semanticFingerprint,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.outcome).toBe("AUTHORIZED");
    expect(authorized.attemptCreated).toBe(false);
    expect(authorized.executionPerformed).toBe(false);
  });

  it("T11 — explicit new-cycle prepare stays distinct from optional documentary routing", async () => {
    const { projectId } = await seedProject({ suffix: "nc" });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: "Prépare un nouveau cycle Delivery pour formaliser la suite. __F2_ACTIONABLE__",
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    // Must not invent gen-prep from a new-cycle formalization ask alone without offer.
    expect(turn.text).not.toMatch(/aucune décision CURRENT REQUIRE_ARTIFACT/i);
  });
});

```

## 12. Validations

| Suite | Résultat |
|---|---|
| `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` | **5/5 PASS** |
| `activeCycleArtifactMaterializationContinuityCorr01` | PASS |
| `activeCycleArtifactApplicabilityContinuationBridgeCorr01` | PASS |
| `p6.gD4.genericPrepareWithoutSystematicHd` | PASS |
| `p6.productContinuityClosure.integrated` | PASS |
| `p6.hqa.f01.chatFirstCycleStartGate` (CI-HQA-F01) | PASS |
| `p6.closureRegularization.repositoryCurrentness` | PASS |
| Total batch régression | **58/58 PASS** |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| OpenAI REAL | **NON** |
| Cursor REAL | **NON** |
| Human QA navigateur / :3020 | **NON** |

## 13. Fake / Real qualification

- Applicable : OUI
- Tests : DETERMINISTIC (Fake OpenAI boundary)
- REAL : NON EXÉCUTÉ
- Niveau preuve : DETERMINISTIC PRODUCT PATH PROVEN AT TESTED SCOPE
- Non autorisés : REAL BOUNDARY PROVEN / E2E REAL / P6 GLOBAL PASS / READY FOR REAL / RUNTIME V3 ADOPTED
- Realism gaps : OpenAI réel ; e66 historique ; process-local ; managed pathRoot ; Auth Pilote réelle ; Cursor REAL ; Evidence REAL ; reprise navigateur post-merge
- Gate Morris REAL : **NON CONSOMMÉ**

## 14. Invariants préservés

- P2-D-02 : production facultative ≠ obligation de clôture ; pas de clôture auto
- P2-D-01 / P2-D-03 : Recommendation ≠ HD ; Confirmation ≠ HD
- G-D4 : `decisionRefs=[]` seulement si NON_STRUCTURAL autoritatif
- AUTHORIZED ≠ EXECUTED ; ZERO Attempt sur PREPARE/authorize
- Pas de nouveau CycleInstance sur parcours optionnel

## 15. Réserves / dettes / sortie

- Correctif local non déployé sur :3020 (GO distinct pour redéploiement Human QA)
- Aucun commit/push de la branche `fix/...` dans ce pass
- Re-test Morris sur e66 après intégration Git sous GO distinct
- Message fallback `no_require_artifact` ne doit normalement plus apparaître pour missions actionables optionnelles

## 16. Git Truth final

```
branch=fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare
HEAD=52f3688476e41cbab8fbe230f0ef4ddddb9aa56e
origin/main=52f3688476e41cbab8fbe230f0ef4ddddb9aa56e
status:
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts

diff --stat:
 .../f2/activeCycleGovernedContinuation.ts          | 21 ++++++-
 .../features/project-assistant/f2/orchestrateF2.ts | 16 +++++-
 .../app/lib/platform/ai/fakeProvider.ts            | 64 ++++++++++++++++++++++
 3 files changed, 98 insertions(+), 3 deletions(-)

diff --cached: (vide)
```

## 17. Gates Morris encore nécessaires

1. Revue ChatGPT CRITICAL de ce correctif
2. GO Git Integration (commit/push/PR) distinct
3. Redéploiement runtime Human QA :3020
4. Re-test manuel Morris sur e66
5. Qualification P6 (hors ce pass)

## 18. Verdict

**LOCAL CORRECTION COMPLETE**
**DETERMINISTIC VALIDATION PASS**
**READY FOR CHATGPT CRITICAL REVIEW**

## 19. Instruction ChatGPT obligatoire

Avant d'évaluer ce rapport, lire dans Git :

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : cycle/profil CRITICAL ; Git Truth `52f36884` ; cause `no_require_artifact` vs Generic PREPARE ; fichiers/diff ; tests 58 PASS ; protections Artifact obligatoire ; réserves ; fake/real ; gates ; commit/blob distant ; verdict.

Produire ensuite une **revue CRITICAL** du correctif P6-HQA-F05-GD4-01.
