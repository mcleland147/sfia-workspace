# SFIA Studio — P6-HQA-F05-GD4-01 Pass 02 — Review Pack FULL

- **Horodatage** : 2026-10-15T21:03:45+0200 (Europe/Paris)
- **GO Morris** : P6 HUMAN QA CORRECTION PASS 02 — INTENT FIDELITY & AUTHORITY CONTINUITY
- **Finding parent** : P6-HQA-F05-GD4-01
- **Pass** : 02
- **Macro** : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- **Milestone** : P6
- **Cycle projet** : 8 — Delivery / implémentation
- **Typologie** : RUN / CORRECTION
- **Profil** : CRITICAL
- **CKC** : ckc:studio:delivery (`sfia-v3-framing/ckc/08-delivery-implementation.md`) — guidance only

## 1. Local Git Truth initial

| Check | Valeur |
|---|---|
| origin/main | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` |
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-optional-artifact-generic-prepare` |
| Pass 01 préservé | OUI (helper routing + fake marker + test F05 présents) |
| Staged | AUCUN |
| :3020 / e66 | non touchés |
| Commit projet | AUCUN |

Handoff Pass 01 distant vérifié : commit `97641274…` / blob `d54fd0c8…`.

## 2. Sources consultées

- Cycle template / routing / guardrails / delivery pipeline / decision engine (réf.)
- Convergence doctrine + roadmap ; product-completion ; product-simplification 02/07
- Framing 30/32/35 ; CKC 08-delivery
- Product : `pendingGenericPrepareOfferStore.ts`, `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`, `orchestrateF2.ts`, `activeCycleGovernedContinuation.ts`, `executionIntentSchema.ts`
- Handoff Pass 01 distant (complet)

## 3. Convergence

- Pass 01 : routing optional documentary → Generic PREPARE (KEEP)
- Gap Pass 02 : offre appauvrie → reconstruction `intentKind:"other"` + perte champs documentaires
- Exit Proof : INTENTION = MISSION ACCEPTÉE = PÉRIMÈTRE CONTRACTUEL INSPECTABLE = AUTORITÉ ÉVALUÉE (sémantique, sans élargissement)

## 4. Finding CRITICAL

`rememberGenericPrepareRecommendation` ne mémorisait pas les effets documentaires.
`analysisFromPendingGenericPrepareOffer` reconstruisait `executionIntent.intentKind = "other"` et omettait targetPath, artifactFileName, artifactBrief, contentRequirements, expectedOutputs, requiredCapabilities, etc.
Fingerprint d'offre ne couvrait que objective/expectedOutcome/scope — collisions sémantiques possibles.

## 5. Cause confirmée

Perte d'informations à la frontière process-local offer ↔ rebuild ↔ PREPARE, pas un second moteur.
`cap:cursor.docs_write` rétabli sans résolution explicite aurait élargi `authorityEnvelopeExpanded` — d'où résolution d'enveloppe dédiée.

## 6. Solution Pass 02

1. Étendre `PendingGenericPrepareOffer.missionEffects` (candidats Nora non autoritatifs).
2. Mémoriser via `extractMissionEffectsFromAnalysis` + `validateExecutionIntentPayload`.
3. Reconstruire fidèlement dans `analysisFromPendingGenericPrepareOffer` (plus de downgrade silencieux vers `other`).
4. Fingerprint élargi (intentKind, paths, caps, outputs, brief, contentRequirements, scopeIn/Out).
5. `genericPrepareCapabilityEnvelope.ts` — résolution explicite docs_write → generalist ; caps hors enveloppe → fail-closed.
6. Contrat inspectable : inputs intentKind/brief/content/proposedTargetPath (non autoritatif) + capabilityResolution ; expectedOutputs documentaires.
7. Materialité : collectConcreteMissionPaths inclut targetPath/expectedOutputs ; envelope docs_write non « elevated ».

### Alternatives écartées

- Forcer NEW_CYCLE_FORMALIZATION (interdit Pass 01).
- Traiter targetPath Nora comme autorité Git.
- Persistence durable de l'offre (dette process-local conserve).
- Inventer HD pour débloquer.
- Troisième moteur Artifact.

## 7. Invariants préservés

- P2-D-02 / Artifact obligatoire (T05)
- G-D4 decisionRefs=[] seulement si NON_STRUCTURAL
- D-PC-09 proposedTargetPathAuthoritative=false
- AUTHORIZED ≠ EXECUTED ; ZERO Attempt
- no_require_artifact ≠ preuve NON_STRUCTURAL
- Pas de clôture auto

## 8. Fichiers

### Pass 01 (préservés)
- `f2/activeCycleGovernedContinuation.ts`
- `f2/orchestrateF2.ts`
- `lib/platform/ai/fakeProvider.ts`
- `__tests__/.../p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (étendu Pass 02)

### Pass 02
- `w2/pendingGenericPrepareOfferStore.ts` (MOD)
- `w2/prepareGenericExecutionContractDraft.ts` (MOD)
- `w2/resolveAuthoritativeProductMateriality.ts` (MOD)
- `w2/genericPrepareCapabilityEnvelope.ts` (NEW)

## 9. DELTA PASS 01

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

## 10. DELTA PASS 02 (fichiers tracked)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
index d1297e66..ea199c2f 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
@@ -4,6 +4,10 @@
  * Keyed by projectId + sessionKey to prevent cross-session bind (CR-P6-04).
  * Same durability class as mw5ChallengeSessionStore — NOT Product SQLite.
  *
+ * P6-HQA-F05-GD4-01 Pass 02 — retains mission-effect fields needed for
+ * intent fidelity (docs_write / documentary outputs / proposed capabilities)
+ * without treating Nora proposals as Product path authority.
+ *
  * LIMITATION (documented debt):
  * - Lost on process restart → no stale PREPARE from prior process.
  * - Not multi-instance durable.
@@ -14,6 +18,34 @@

 const STORE_KEY = "__SFIA_F2_PENDING_GENERIC_PREPARE_OFFER__" as const;

+/**
+ * Mission-effect slice remembered with the CURRENT prepare offer.
+ * Proposals (targetPath, artifactFileName, requiredCapabilities, …) are
+ * NON-AUTHORITATIVE Nora candidates until Product resolve / pathRoot /
+ * generalist capability resolution run at PREPARE.
+ */
+export type PendingGenericPrepareMissionEffects = {
+  readonly intentKind: string | null;
+  readonly artifactType: string | null;
+  /** Nora candidate — never Product Git authority by itself (D-PC-09). */
+  readonly proposedTargetPath: string | null;
+  readonly proposedArtifactFileName: string | null;
+  readonly proposedTargetRepositoryRef: string | null;
+  readonly artifactBrief: string | null;
+  readonly contentRequirements: readonly string[];
+  readonly expectedOutputs: readonly string[];
+  readonly proposedRequiredCapabilities: readonly string[];
+  readonly validationExpectations: readonly string[];
+  readonly evidenceRequirements: readonly string[];
+  readonly requestedOperation: string | null;
+  readonly reversibilityExpectation:
+    | "reversible"
+    | "irreversible"
+    | "unknown"
+    | null;
+  readonly exitRequirementKinds: readonly string[];
+};
+
 export type PendingGenericPrepareOffer = {
   readonly projectId: string;
   /** Conversation/session discriminator — never cross-bind without match. */
@@ -37,6 +69,8 @@ export type PendingGenericPrepareOffer = {
   readonly contradictionConflictPresent: boolean;
   readonly offeredAtIso: string;
   readonly offerFingerprint: string;
+  /** Mission-effect fidelity (Pass 02). Absent on ancient in-memory shapes → treat as empty. */
+  readonly missionEffects?: PendingGenericPrepareMissionEffects;
 };

 type StoreSlot = {
@@ -55,6 +89,30 @@ function offerKey(projectId: string, sessionKey: string): string {
   return `${projectId.trim()}::${sessionKey.trim() || "default"}`;
 }

+function freezeMissionEffects(
+  effects: PendingGenericPrepareMissionEffects | undefined,
+): PendingGenericPrepareMissionEffects | undefined {
+  if (!effects) return undefined;
+  return Object.freeze({
+    intentKind: effects.intentKind,
+    artifactType: effects.artifactType,
+    proposedTargetPath: effects.proposedTargetPath,
+    proposedArtifactFileName: effects.proposedArtifactFileName,
+    proposedTargetRepositoryRef: effects.proposedTargetRepositoryRef,
+    artifactBrief: effects.artifactBrief,
+    contentRequirements: Object.freeze([...effects.contentRequirements]),
+    expectedOutputs: Object.freeze([...effects.expectedOutputs]),
+    proposedRequiredCapabilities: Object.freeze([
+      ...effects.proposedRequiredCapabilities,
+    ]),
+    validationExpectations: Object.freeze([...effects.validationExpectations]),
+    evidenceRequirements: Object.freeze([...effects.evidenceRequirements]),
+    requestedOperation: effects.requestedOperation,
+    reversibilityExpectation: effects.reversibilityExpectation,
+    exitRequirementKinds: Object.freeze([...effects.exitRequirementKinds]),
+  });
+}
+
 export function resolvePrepareOfferSessionKey(input: {
   readonly sessionDbPath?: string | null;
   readonly sessionKey?: string | null;
@@ -86,6 +144,7 @@ export function rememberPendingGenericPrepareOffer(
     stopConditions: Object.freeze([...offer.stopConditions]),
     risks: Object.freeze([...offer.risks]),
     reservations: Object.freeze([...offer.reservations]),
+    missionEffects: freezeMissionEffects(offer.missionEffects),
   };
   getSlot().byKey.set(offerKey(offer.projectId, next.sessionKey), next);
   return next;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 2172b911..3d7be91e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -51,8 +51,26 @@ import {
   rememberPendingGenericPrepareOffer,
   clearPendingGenericPrepareOffer,
   resolvePrepareOfferSessionKey,
+  type PendingGenericPrepareMissionEffects,
   type PendingGenericPrepareOffer,
 } from "./pendingGenericPrepareOfferStore";
+import {
+  validateExecutionIntentPayload,
+  type ExecutionIntentPayload,
+} from "../f2/executionIntentSchema";
+import {
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  isCapabilityWithinGenericPrepareEnvelope,
+  resolveGenericPrepareCapabilityEnvelope,
+  type GenericPrepareCapabilityResolution,
+} from "./genericPrepareCapabilityEnvelope";
+
+export {
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  isCapabilityWithinGenericPrepareEnvelope,
+  resolveGenericPrepareCapabilityEnvelope,
+};
+export type { GenericPrepareCapabilityResolution };

 export type GenericMissionPrepareReadiness = {
   readonly ready: boolean;
@@ -316,13 +334,49 @@ function stableMissionKey(input: {
   return createHash("sha256").update(raw).digest("hex").slice(0, 24);
 }

+export function extractMissionEffectsFromAnalysis(
+  analysis: IntentAnalysisDto,
+): PendingGenericPrepareMissionEffects {
+  const rawEi = analysis.executionIntent ?? null;
+  const validated = rawEi ? validateExecutionIntentPayload(rawEi) : null;
+  const ei: ExecutionIntentPayload | null =
+    validated && validated.ok ? validated.payload : null;
+  const rev = ei?.reversibilityExpectation ?? null;
+  return {
+    intentKind: ei?.intentKind?.trim() || null,
+    artifactType: ei?.artifactType?.trim() || null,
+    proposedTargetPath: ei?.targetPath?.trim() || null,
+    proposedArtifactFileName: ei?.artifactFileName?.trim() || null,
+    proposedTargetRepositoryRef: ei?.targetRepositoryRef?.trim() || null,
+    artifactBrief: ei?.artifactBrief?.trim() || null,
+    contentRequirements: [...(ei?.contentRequirements ?? [])],
+    expectedOutputs: [...(ei?.expectedOutputs ?? [])],
+    proposedRequiredCapabilities: [...(ei?.requiredCapabilities ?? [])],
+    validationExpectations: [...(ei?.validationExpectations ?? [])],
+    evidenceRequirements: [...(ei?.evidenceRequirements ?? [])],
+    requestedOperation:
+      ei?.requestedOperation?.trim() ||
+      analysis.requestedOperation?.trim() ||
+      null,
+    reversibilityExpectation:
+      rev === "reversible" || rev === "irreversible" || rev === "unknown"
+        ? rev
+        : null,
+    exitRequirementKinds: [...(ei?.exitRequirementKinds ?? [])],
+  };
+}
+
 function offerFingerprintFor(input: {
   readonly projectId: string;
   readonly cycleInstanceId: string;
   readonly objective: string;
   readonly expectedOutcome: string;
   readonly scope: string;
+  readonly scopeIn: readonly string[];
+  readonly scopeOut: readonly string[];
+  readonly missionEffects: PendingGenericPrepareMissionEffects;
 }): string {
+  const e = input.missionEffects;
   return createHash("sha256")
     .update(
       [
@@ -331,6 +385,17 @@ function offerFingerprintFor(input: {
         input.objective,
         input.expectedOutcome,
         input.scope,
+        input.scopeIn.join("|"),
+        input.scopeOut.join("|"),
+        e.intentKind ?? "",
+        e.artifactType ?? "",
+        e.proposedTargetPath ?? "",
+        e.proposedArtifactFileName ?? "",
+        e.proposedRequiredCapabilities.join("|"),
+        e.expectedOutputs.join("|"),
+        e.requestedOperation ?? "",
+        e.artifactBrief ?? "",
+        e.contentRequirements.join("|"),
       ].join("\n"),
     )
     .digest("hex")
@@ -359,12 +424,16 @@ export function rememberGenericPrepareRecommendation(input: {
   const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
   const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
   const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
+  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
   const fp = offerFingerprintFor({
     projectId: input.projectId,
     cycleInstanceId: input.cycleInstanceId,
     objective,
     expectedOutcome,
     scope: scopeNarrative,
+    scopeIn,
+    scopeOut,
+    missionEffects,
   });
   rememberPendingGenericPrepareOffer({
     projectId: input.projectId,
@@ -391,6 +460,7 @@ export function rememberGenericPrepareRecommendation(input: {
     ),
     offeredAtIso: input.offeredAtIso,
     offerFingerprint: fp,
+    missionEffects,
   });
   return fp;
 }
@@ -399,6 +469,27 @@ export function rememberGenericPrepareRecommendation(input: {
 export function analysisFromPendingGenericPrepareOffer(
   offer: PendingGenericPrepareOffer,
 ): IntentAnalysisDto {
+  const effects = offer.missionEffects;
+  const intentKind = effects?.intentKind?.trim() || "other";
+  const executionIntent: NonNullable<IntentAnalysisDto["executionIntent"]> = {
+    intentKind,
+    artifactType: effects?.artifactType ?? null,
+    // Candidate only — Product pathRoot / workspace still authoritative at PREPARE.
+    targetPath: effects?.proposedTargetPath ?? null,
+    artifactFileName: effects?.proposedArtifactFileName ?? null,
+    targetRepositoryRef: effects?.proposedTargetRepositoryRef ?? null,
+    scopeIn: [...offer.scopeIn],
+    scopeOut: [...offer.scopeOut],
+    expectedOutputs: [...(effects?.expectedOutputs ?? [])],
+    requiredCapabilities: [...(effects?.proposedRequiredCapabilities ?? [])],
+    validationExpectations: [...(effects?.validationExpectations ?? [])],
+    evidenceRequirements: [...(effects?.evidenceRequirements ?? [])],
+    requestedOperation: effects?.requestedOperation ?? null,
+    reversibilityExpectation: effects?.reversibilityExpectation ?? null,
+    artifactBrief: effects?.artifactBrief ?? null,
+    contentRequirements: [...(effects?.contentRequirements ?? [])],
+    exitRequirementKinds: [...(effects?.exitRequirementKinds ?? [])],
+  };
   return {
     parseOk: true,
     intentClass: "actionable",
@@ -426,12 +517,8 @@ export function analysisFromPendingGenericPrepareOffer(
     activatedBlocks: [],
     expectedOutcome: offer.expectedOutcome,
     criticalJustification: null,
-    requestedOperation: null,
-    executionIntent: {
-      intentKind: "other",
-      scopeIn: [...offer.scopeIn],
-      scopeOut: [...offer.scopeOut],
-    } as IntentAnalysisDto["executionIntent"],
+    requestedOperation: effects?.requestedOperation ?? null,
+    executionIntent,
   };
 }

@@ -475,6 +562,18 @@ export async function prepareGenericExecutionContractDraft(
     };
   }

+  const proposedCapabilities =
+    input.analysis.executionIntent?.requiredCapabilities ?? [];
+  const capabilityResolution =
+    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
+  if (!capabilityResolution.ok) {
+    return {
+      ok: false,
+      code: capabilityResolution.code,
+      message: `Capacités hors enveloppe généraliste Product — clarification ou gate requis : ${capabilityResolution.elevated.join(", ")}. Aucune HumanDecision artificielle ; aucune élévation silencieuse.`,
+    };
+  }
+
   const materialityResolution = await resolveAuthoritativeProductMateriality({
     oa: input.oa,
     projectId: input.projectId,
@@ -515,6 +614,20 @@ export async function prepareGenericExecutionContractDraft(
   const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
   const outOfScope = input.analysis.outOfScope ?? [];
   const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
+  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
+  const documentaryExpectedOutputs = [
+    ...missionEffects.expectedOutputs,
+    ...(missionEffects.proposedTargetPath
+      ? [missionEffects.proposedTargetPath]
+      : []),
+    ...(missionEffects.proposedArtifactFileName
+      ? [missionEffects.proposedArtifactFileName]
+      : []),
+  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
+  const inspectableExpectedOutputs =
+    documentaryExpectedOutputs.length > 0
+      ? documentaryExpectedOutputs
+      : [expectedOutcome];

   // D — source grounding / trusted launch when mission implies repository work.
   const impliesGit = missionImpliesRepositoryWork(input.analysis);
@@ -670,18 +783,36 @@ export async function prepareGenericExecutionContractDraft(
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
+      // Intent fidelity — inspectable mission effects (Pass 02).
+      intentKind: missionEffects.intentKind,
+      artifactType: missionEffects.artifactType,
+      artifactBrief: missionEffects.artifactBrief,
+      contentRequirements: [...missionEffects.contentRequirements],
+      validationExpectations: [...missionEffects.validationExpectations],
+      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
+      proposedTargetPath: missionEffects.proposedTargetPath,
+      proposedArtifactFileName: missionEffects.proposedArtifactFileName,
+      proposedTargetPathAuthoritative: false,
+      proposedRequiredCapabilities: [
+        ...capabilityResolution.proposedCapabilities,
+      ],
+      capabilityResolution: capabilityResolution.resolution,
+      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
       ...launchInputs,
       ...(sourceGroundingPayload
         ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
         : {}),
       protectedPathHitsAtPrepare: collectProtectedPathHits(input.analysis),
     },
-    expectedOutputs: [expectedOutcome],
-    requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
+    expectedOutputs: inspectableExpectedOutputs,
+    requiredCapabilities: [...capabilityResolution.contractCapabilities],
     requiredAuthority,
     constraints,
     stopConditions: mergedStops,
-    evidenceRequirements: ["evreq:generic-prepare-mission-evidence"],
+    evidenceRequirements: [
+      "evreq:generic-prepare-mission-evidence",
+      ...missionEffects.evidenceRequirements,
+    ],
     reversibility: "partially_reversible",
     idempotencyKey,
     correlationId,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
index 02a8d5ee..14f478e7 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
@@ -22,7 +22,7 @@ import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { IntentAnalysisDto } from "../f2/types";
-import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";
+import { isCapabilityWithinGenericPrepareEnvelope } from "./genericPrepareCapabilityEnvelope";

 export type ProductMaterialityCurrentness = {
   readonly lpsId: string;
@@ -70,6 +70,12 @@ export function collectConcreteMissionPaths(
     if (typeof p === "string") push(p);
   }
   if (typeof analysis.scope === "string") push(analysis.scope);
+  // Intent-fidelity WHERE candidates (Nora proposals) — still subject to pathRoot.
+  const ei = analysis.executionIntent;
+  if (typeof ei?.targetPath === "string") push(ei.targetPath);
+  for (const p of ei?.expectedOutputs ?? []) {
+    if (typeof p === "string") push(p);
+  }
   return out;
 }

@@ -178,11 +184,10 @@ function deriveAuthorityEnvelopeExpanded(input: {
       basis: "mission_paths_outside_repository_path_root",
     };
   }
+  // Pass 02 — docs_write effect-class is within Generic PREPARE envelope
+  // (resolved onto studio.cursor.generalist). Other elevated caps remain structural.
   const elevated = input.requestedCapabilities.filter(
-    (c) =>
-      c.trim().length > 0 &&
-      c.trim() !== PRODUCT_CANONICAL_EXECUTION_CAPABILITY &&
-      !c.includes("generalist"),
+    (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
   );
   if (elevated.length > 0) {
     return {

```

## 11. Fichier créé Pass 02 — genericPrepareCapabilityEnvelope.ts (complet)

```typescript
/**
 * Generic PREPARE capability envelope — shared by offer reconstruction,
 * materiality, and ExecutionContract PREPARE.
 *
 * Documentary effect-class `cap:cursor.docs_write` may be proposed by Nora.
 * Product Generic PREPARE resolves it onto studio.cursor.generalist — never
 * silently dropped, never treated as elevated authority by itself.
 */

import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";

export const GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY =
  "cap:cursor.docs_write" as const;

export function isCapabilityWithinGenericPrepareEnvelope(cap: string): boolean {
  const c = cap.trim();
  if (!c) return true;
  if (c === PRODUCT_CANONICAL_EXECUTION_CAPABILITY) return true;
  if (c.includes("generalist")) return true;
  if (c === GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY) return true;
  return false;
}

export type GenericPrepareCapabilityResolution =
  | {
      readonly ok: true;
      readonly contractCapabilities: readonly [
        typeof PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ];
      readonly proposedCapabilities: readonly string[];
      readonly resolution:
        | "no_proposed_capabilities_default_generalist"
        | "docs_write_effect_resolved_onto_generalist_product_surface"
        | "already_generalist_envelope";
    }
  | {
      readonly ok: false;
      readonly code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE";
      readonly elevated: readonly string[];
      readonly proposedCapabilities: readonly string[];
    };

export function resolveGenericPrepareCapabilityEnvelope(
  proposed: readonly string[] | null | undefined,
): GenericPrepareCapabilityResolution {
  const cleaned = (proposed ?? [])
    .map((c) => c.trim())
    .filter((c) => c.length > 0);
  if (cleaned.length === 0) {
    return {
      ok: true,
      contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
      proposedCapabilities: [],
      resolution: "no_proposed_capabilities_default_generalist",
    };
  }
  const elevated = cleaned.filter(
    (c) => !isCapabilityWithinGenericPrepareEnvelope(c),
  );
  if (elevated.length > 0) {
    return {
      ok: false,
      code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
      elevated,
      proposedCapabilities: cleaned,
    };
  }
  const hasDocsWrite = cleaned.includes(
    GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
  );
  return {
    ok: true,
    contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
    proposedCapabilities: cleaned,
    resolution: hasDocsWrite
      ? "docs_write_effect_resolved_onto_generalist_product_surface"
      : "already_generalist_envelope",
  };
}

```

## 12. Test F05 (complet, Pass 01+02)

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
  analysisFromPendingGenericPrepareOffer,
  rememberGenericPrepareRecommendation,
  resolveGenericPrepareCapabilityEnvelope,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
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
    // Pass 02 — offer retains documentary mission effects (not stripped).
    expect(offer?.missionEffects?.intentKind).toBe("docs_write");
    expect(offer?.missionEffects?.proposedTargetPath).toMatch(/note-cadrage\.md$/);
    expect(offer?.missionEffects?.artifactBrief).toBeTruthy();
    expect(offer?.missionEffects?.contentRequirements.length).toBeGreaterThan(0);
    expect(offer?.missionEffects?.proposedRequiredCapabilities).toContain(
      "cap:cursor.docs_write",
    );
    const rebuilt = analysisFromPendingGenericPrepareOffer(offer!);
    expect(rebuilt.executionIntent?.intentKind).toBe("docs_write");
    expect(rebuilt.executionIntent?.intentKind).not.toBe("other");

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
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.intentKind).toBe("docs_write");
    expect(inputs.proposedTargetPathAuthoritative).toBe(false);
    expect(inputs.capabilityResolution).toBe(
      "docs_write_effect_resolved_onto_generalist_product_surface",
    );
    expect(loaded.contract.requiredCapabilities).toEqual([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);
    expect(
      (loaded.contract.expectedOutputs ?? []).some((o) =>
        /note-cadrage\.md/.test(o),
      ),
    ).toBe(true);

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

  it("Pass02-T01/T05 — fingerprint distinguishes path/capability; reconstruction keeps docs_write", async () => {
    const { projectId, cycleInstanceId } = await seedProject({ suffix: "fp" });
    const base = optionalDocumentaryAnalysis();
    const fpA = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId,
      analysis: base,
      offeredAtIso: "2026-10-15T18:00:00.000Z",
      sessionDbPath,
    });
    const offerA = getPendingGenericPrepareOffer(
      projectId,
      resolvePrepareOfferSessionKey({ sessionDbPath }),
    );
    expect(offerA?.offerFingerprint).toBe(fpA);
    expect(analysisFromPendingGenericPrepareOffer(offerA!).executionIntent?.intentKind).toBe(
      "docs_write",
    );

    const otherPath = optionalDocumentaryAnalysis();
    (
      otherPath.executionIntent as { targetPath: string }
    ).targetPath = "projects/demo/docs/autre-note.md";
    (
      otherPath.executionIntent as { expectedOutputs: string[] }
    ).expectedOutputs = ["projects/demo/docs/autre-note.md"];
    const fpB = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId,
      analysis: otherPath,
      offeredAtIso: "2026-10-15T18:01:00.000Z",
      sessionDbPath,
    });
    expect(fpB).not.toBe(fpA);

    const elevated = resolveGenericPrepareCapabilityEnvelope([
      "cap:cursor.docs_write",
      "cap:github.pr.merge",
    ]);
    expect(elevated.ok).toBe(false);
    if (!elevated.ok) {
      expect(elevated.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
      expect(elevated.elevated).toContain("cap:github.pr.merge");
    }
    const docsOnly = resolveGenericPrepareCapabilityEnvelope([
      "cap:cursor.docs_write",
    ]);
    expect(docsOnly.ok).toBe(true);
    if (docsOnly.ok) {
      expect(docsOnly.resolution).toBe(
        "docs_write_effect_resolved_onto_generalist_product_surface",
      );
      expect(docsOnly.contractCapabilities).toEqual([
        PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ]);
    }
  });
});

```

## 13. DIFF CUMULÉ FINAL (tracked Product)

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
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
index d1297e66..ea199c2f 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
@@ -4,6 +4,10 @@
  * Keyed by projectId + sessionKey to prevent cross-session bind (CR-P6-04).
  * Same durability class as mw5ChallengeSessionStore — NOT Product SQLite.
  *
+ * P6-HQA-F05-GD4-01 Pass 02 — retains mission-effect fields needed for
+ * intent fidelity (docs_write / documentary outputs / proposed capabilities)
+ * without treating Nora proposals as Product path authority.
+ *
  * LIMITATION (documented debt):
  * - Lost on process restart → no stale PREPARE from prior process.
  * - Not multi-instance durable.
@@ -14,6 +18,34 @@

 const STORE_KEY = "__SFIA_F2_PENDING_GENERIC_PREPARE_OFFER__" as const;

+/**
+ * Mission-effect slice remembered with the CURRENT prepare offer.
+ * Proposals (targetPath, artifactFileName, requiredCapabilities, …) are
+ * NON-AUTHORITATIVE Nora candidates until Product resolve / pathRoot /
+ * generalist capability resolution run at PREPARE.
+ */
+export type PendingGenericPrepareMissionEffects = {
+  readonly intentKind: string | null;
+  readonly artifactType: string | null;
+  /** Nora candidate — never Product Git authority by itself (D-PC-09). */
+  readonly proposedTargetPath: string | null;
+  readonly proposedArtifactFileName: string | null;
+  readonly proposedTargetRepositoryRef: string | null;
+  readonly artifactBrief: string | null;
+  readonly contentRequirements: readonly string[];
+  readonly expectedOutputs: readonly string[];
+  readonly proposedRequiredCapabilities: readonly string[];
+  readonly validationExpectations: readonly string[];
+  readonly evidenceRequirements: readonly string[];
+  readonly requestedOperation: string | null;
+  readonly reversibilityExpectation:
+    | "reversible"
+    | "irreversible"
+    | "unknown"
+    | null;
+  readonly exitRequirementKinds: readonly string[];
+};
+
 export type PendingGenericPrepareOffer = {
   readonly projectId: string;
   /** Conversation/session discriminator — never cross-bind without match. */
@@ -37,6 +69,8 @@ export type PendingGenericPrepareOffer = {
   readonly contradictionConflictPresent: boolean;
   readonly offeredAtIso: string;
   readonly offerFingerprint: string;
+  /** Mission-effect fidelity (Pass 02). Absent on ancient in-memory shapes → treat as empty. */
+  readonly missionEffects?: PendingGenericPrepareMissionEffects;
 };

 type StoreSlot = {
@@ -55,6 +89,30 @@ function offerKey(projectId: string, sessionKey: string): string {
   return `${projectId.trim()}::${sessionKey.trim() || "default"}`;
 }

+function freezeMissionEffects(
+  effects: PendingGenericPrepareMissionEffects | undefined,
+): PendingGenericPrepareMissionEffects | undefined {
+  if (!effects) return undefined;
+  return Object.freeze({
+    intentKind: effects.intentKind,
+    artifactType: effects.artifactType,
+    proposedTargetPath: effects.proposedTargetPath,
+    proposedArtifactFileName: effects.proposedArtifactFileName,
+    proposedTargetRepositoryRef: effects.proposedTargetRepositoryRef,
+    artifactBrief: effects.artifactBrief,
+    contentRequirements: Object.freeze([...effects.contentRequirements]),
+    expectedOutputs: Object.freeze([...effects.expectedOutputs]),
+    proposedRequiredCapabilities: Object.freeze([
+      ...effects.proposedRequiredCapabilities,
+    ]),
+    validationExpectations: Object.freeze([...effects.validationExpectations]),
+    evidenceRequirements: Object.freeze([...effects.evidenceRequirements]),
+    requestedOperation: effects.requestedOperation,
+    reversibilityExpectation: effects.reversibilityExpectation,
+    exitRequirementKinds: Object.freeze([...effects.exitRequirementKinds]),
+  });
+}
+
 export function resolvePrepareOfferSessionKey(input: {
   readonly sessionDbPath?: string | null;
   readonly sessionKey?: string | null;
@@ -86,6 +144,7 @@ export function rememberPendingGenericPrepareOffer(
     stopConditions: Object.freeze([...offer.stopConditions]),
     risks: Object.freeze([...offer.risks]),
     reservations: Object.freeze([...offer.reservations]),
+    missionEffects: freezeMissionEffects(offer.missionEffects),
   };
   getSlot().byKey.set(offerKey(offer.projectId, next.sessionKey), next);
   return next;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 2172b911..3d7be91e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -51,8 +51,26 @@ import {
   rememberPendingGenericPrepareOffer,
   clearPendingGenericPrepareOffer,
   resolvePrepareOfferSessionKey,
+  type PendingGenericPrepareMissionEffects,
   type PendingGenericPrepareOffer,
 } from "./pendingGenericPrepareOfferStore";
+import {
+  validateExecutionIntentPayload,
+  type ExecutionIntentPayload,
+} from "../f2/executionIntentSchema";
+import {
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  isCapabilityWithinGenericPrepareEnvelope,
+  resolveGenericPrepareCapabilityEnvelope,
+  type GenericPrepareCapabilityResolution,
+} from "./genericPrepareCapabilityEnvelope";
+
+export {
+  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
+  isCapabilityWithinGenericPrepareEnvelope,
+  resolveGenericPrepareCapabilityEnvelope,
+};
+export type { GenericPrepareCapabilityResolution };

 export type GenericMissionPrepareReadiness = {
   readonly ready: boolean;
@@ -316,13 +334,49 @@ function stableMissionKey(input: {
   return createHash("sha256").update(raw).digest("hex").slice(0, 24);
 }

+export function extractMissionEffectsFromAnalysis(
+  analysis: IntentAnalysisDto,
+): PendingGenericPrepareMissionEffects {
+  const rawEi = analysis.executionIntent ?? null;
+  const validated = rawEi ? validateExecutionIntentPayload(rawEi) : null;
+  const ei: ExecutionIntentPayload | null =
+    validated && validated.ok ? validated.payload : null;
+  const rev = ei?.reversibilityExpectation ?? null;
+  return {
+    intentKind: ei?.intentKind?.trim() || null,
+    artifactType: ei?.artifactType?.trim() || null,
+    proposedTargetPath: ei?.targetPath?.trim() || null,
+    proposedArtifactFileName: ei?.artifactFileName?.trim() || null,
+    proposedTargetRepositoryRef: ei?.targetRepositoryRef?.trim() || null,
+    artifactBrief: ei?.artifactBrief?.trim() || null,
+    contentRequirements: [...(ei?.contentRequirements ?? [])],
+    expectedOutputs: [...(ei?.expectedOutputs ?? [])],
+    proposedRequiredCapabilities: [...(ei?.requiredCapabilities ?? [])],
+    validationExpectations: [...(ei?.validationExpectations ?? [])],
+    evidenceRequirements: [...(ei?.evidenceRequirements ?? [])],
+    requestedOperation:
+      ei?.requestedOperation?.trim() ||
+      analysis.requestedOperation?.trim() ||
+      null,
+    reversibilityExpectation:
+      rev === "reversible" || rev === "irreversible" || rev === "unknown"
+        ? rev
+        : null,
+    exitRequirementKinds: [...(ei?.exitRequirementKinds ?? [])],
+  };
+}
+
 function offerFingerprintFor(input: {
   readonly projectId: string;
   readonly cycleInstanceId: string;
   readonly objective: string;
   readonly expectedOutcome: string;
   readonly scope: string;
+  readonly scopeIn: readonly string[];
+  readonly scopeOut: readonly string[];
+  readonly missionEffects: PendingGenericPrepareMissionEffects;
 }): string {
+  const e = input.missionEffects;
   return createHash("sha256")
     .update(
       [
@@ -331,6 +385,17 @@ function offerFingerprintFor(input: {
         input.objective,
         input.expectedOutcome,
         input.scope,
+        input.scopeIn.join("|"),
+        input.scopeOut.join("|"),
+        e.intentKind ?? "",
+        e.artifactType ?? "",
+        e.proposedTargetPath ?? "",
+        e.proposedArtifactFileName ?? "",
+        e.proposedRequiredCapabilities.join("|"),
+        e.expectedOutputs.join("|"),
+        e.requestedOperation ?? "",
+        e.artifactBrief ?? "",
+        e.contentRequirements.join("|"),
       ].join("\n"),
     )
     .digest("hex")
@@ -359,12 +424,16 @@ export function rememberGenericPrepareRecommendation(input: {
   const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
   const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
   const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
+  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
   const fp = offerFingerprintFor({
     projectId: input.projectId,
     cycleInstanceId: input.cycleInstanceId,
     objective,
     expectedOutcome,
     scope: scopeNarrative,
+    scopeIn,
+    scopeOut,
+    missionEffects,
   });
   rememberPendingGenericPrepareOffer({
     projectId: input.projectId,
@@ -391,6 +460,7 @@ export function rememberGenericPrepareRecommendation(input: {
     ),
     offeredAtIso: input.offeredAtIso,
     offerFingerprint: fp,
+    missionEffects,
   });
   return fp;
 }
@@ -399,6 +469,27 @@ export function rememberGenericPrepareRecommendation(input: {
 export function analysisFromPendingGenericPrepareOffer(
   offer: PendingGenericPrepareOffer,
 ): IntentAnalysisDto {
+  const effects = offer.missionEffects;
+  const intentKind = effects?.intentKind?.trim() || "other";
+  const executionIntent: NonNullable<IntentAnalysisDto["executionIntent"]> = {
+    intentKind,
+    artifactType: effects?.artifactType ?? null,
+    // Candidate only — Product pathRoot / workspace still authoritative at PREPARE.
+    targetPath: effects?.proposedTargetPath ?? null,
+    artifactFileName: effects?.proposedArtifactFileName ?? null,
+    targetRepositoryRef: effects?.proposedTargetRepositoryRef ?? null,
+    scopeIn: [...offer.scopeIn],
+    scopeOut: [...offer.scopeOut],
+    expectedOutputs: [...(effects?.expectedOutputs ?? [])],
+    requiredCapabilities: [...(effects?.proposedRequiredCapabilities ?? [])],
+    validationExpectations: [...(effects?.validationExpectations ?? [])],
+    evidenceRequirements: [...(effects?.evidenceRequirements ?? [])],
+    requestedOperation: effects?.requestedOperation ?? null,
+    reversibilityExpectation: effects?.reversibilityExpectation ?? null,
+    artifactBrief: effects?.artifactBrief ?? null,
+    contentRequirements: [...(effects?.contentRequirements ?? [])],
+    exitRequirementKinds: [...(effects?.exitRequirementKinds ?? [])],
+  };
   return {
     parseOk: true,
     intentClass: "actionable",
@@ -426,12 +517,8 @@ export function analysisFromPendingGenericPrepareOffer(
     activatedBlocks: [],
     expectedOutcome: offer.expectedOutcome,
     criticalJustification: null,
-    requestedOperation: null,
-    executionIntent: {
-      intentKind: "other",
-      scopeIn: [...offer.scopeIn],
-      scopeOut: [...offer.scopeOut],
-    } as IntentAnalysisDto["executionIntent"],
+    requestedOperation: effects?.requestedOperation ?? null,
+    executionIntent,
   };
 }

@@ -475,6 +562,18 @@ export async function prepareGenericExecutionContractDraft(
     };
   }

+  const proposedCapabilities =
+    input.analysis.executionIntent?.requiredCapabilities ?? [];
+  const capabilityResolution =
+    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
+  if (!capabilityResolution.ok) {
+    return {
+      ok: false,
+      code: capabilityResolution.code,
+      message: `Capacités hors enveloppe généraliste Product — clarification ou gate requis : ${capabilityResolution.elevated.join(", ")}. Aucune HumanDecision artificielle ; aucune élévation silencieuse.`,
+    };
+  }
+
   const materialityResolution = await resolveAuthoritativeProductMateriality({
     oa: input.oa,
     projectId: input.projectId,
@@ -515,6 +614,20 @@ export async function prepareGenericExecutionContractDraft(
   const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
   const outOfScope = input.analysis.outOfScope ?? [];
   const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
+  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
+  const documentaryExpectedOutputs = [
+    ...missionEffects.expectedOutputs,
+    ...(missionEffects.proposedTargetPath
+      ? [missionEffects.proposedTargetPath]
+      : []),
+    ...(missionEffects.proposedArtifactFileName
+      ? [missionEffects.proposedArtifactFileName]
+      : []),
+  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
+  const inspectableExpectedOutputs =
+    documentaryExpectedOutputs.length > 0
+      ? documentaryExpectedOutputs
+      : [expectedOutcome];

   // D — source grounding / trusted launch when mission implies repository work.
   const impliesGit = missionImpliesRepositoryWork(input.analysis);
@@ -670,18 +783,36 @@ export async function prepareGenericExecutionContractDraft(
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
+      // Intent fidelity — inspectable mission effects (Pass 02).
+      intentKind: missionEffects.intentKind,
+      artifactType: missionEffects.artifactType,
+      artifactBrief: missionEffects.artifactBrief,
+      contentRequirements: [...missionEffects.contentRequirements],
+      validationExpectations: [...missionEffects.validationExpectations],
+      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
+      proposedTargetPath: missionEffects.proposedTargetPath,
+      proposedArtifactFileName: missionEffects.proposedArtifactFileName,
+      proposedTargetPathAuthoritative: false,
+      proposedRequiredCapabilities: [
+        ...capabilityResolution.proposedCapabilities,
+      ],
+      capabilityResolution: capabilityResolution.resolution,
+      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
       ...launchInputs,
       ...(sourceGroundingPayload
         ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
         : {}),
       protectedPathHitsAtPrepare: collectProtectedPathHits(input.analysis),
     },
-    expectedOutputs: [expectedOutcome],
-    requiredCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
+    expectedOutputs: inspectableExpectedOutputs,
+    requiredCapabilities: [...capabilityResolution.contractCapabilities],
     requiredAuthority,
     constraints,
     stopConditions: mergedStops,
-    evidenceRequirements: ["evreq:generic-prepare-mission-evidence"],
+    evidenceRequirements: [
+      "evreq:generic-prepare-mission-evidence",
+      ...missionEffects.evidenceRequirements,
+    ],
     reversibility: "partially_reversible",
     idempotencyKey,
     correlationId,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
index 02a8d5ee..14f478e7 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
@@ -22,7 +22,7 @@ import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { IntentAnalysisDto } from "../f2/types";
-import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";
+import { isCapabilityWithinGenericPrepareEnvelope } from "./genericPrepareCapabilityEnvelope";

 export type ProductMaterialityCurrentness = {
   readonly lpsId: string;
@@ -70,6 +70,12 @@ export function collectConcreteMissionPaths(
     if (typeof p === "string") push(p);
   }
   if (typeof analysis.scope === "string") push(analysis.scope);
+  // Intent-fidelity WHERE candidates (Nora proposals) — still subject to pathRoot.
+  const ei = analysis.executionIntent;
+  if (typeof ei?.targetPath === "string") push(ei.targetPath);
+  for (const p of ei?.expectedOutputs ?? []) {
+    if (typeof p === "string") push(p);
+  }
   return out;
 }

@@ -178,11 +184,10 @@ function deriveAuthorityEnvelopeExpanded(input: {
       basis: "mission_paths_outside_repository_path_root",
     };
   }
+  // Pass 02 — docs_write effect-class is within Generic PREPARE envelope
+  // (resolved onto studio.cursor.generalist). Other elevated caps remain structural.
   const elevated = input.requestedCapabilities.filter(
-    (c) =>
-      c.trim().length > 0 &&
-      c.trim() !== PRODUCT_CANONICAL_EXECUTION_CAPABILITY &&
-      !c.includes("generalist"),
+    (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
   );
   if (elevated.length > 0) {
     return {
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

## 14. Validations

| Suite | Résultat |
|---|---|
| F05 optional routing (6) | PASS |
| Artifact Continuity Corr01 | PASS |
| Artifact Applicability Bridge | PASS |
| G-D4 generic PREPARE | PASS |
| P6 Product Continuity | PASS |
| CI-HQA-F01 | PASS |
| Repository Currentness | PASS |
| **Total batch** | **59/59 PASS** (Pass 01 était 58/58 ; +1 test Pass 02) |
| typecheck | PASS |
| lint | PASS |
| OpenAI REAL / Cursor REAL / :3020 / e66 | NON |

## 15. Fake / Real

- DETERMINISTIC PRODUCT PATH PROVEN AT PASS 02 TESTED SCOPE
- Gaps : OpenAI LIVE, e66, pathRoot managed, Auth Pilote, Cursor REAL, Evidence REAL, process-local offer
- Gate Morris REAL : NON CONSOMMÉ

## 16. Réserves

- Pending offer process-local (restart-safe NOT PROVEN)
- proposedTargetPath reste candidat ; composition workspace server-owned à l'exécution REAL (hors pass)
- Correctif non déployé sur :3020
- Branche fix non poussée (GO Integration distinct)

## 17. Git Truth final

```
branch=fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare
HEAD=52f3688476e41cbab8fbe230f0ef4ddddb9aa56e
origin/main=52f3688476e41cbab8fbe230f0ef4ddddb9aa56e
status:
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts

diff --stat (product):
 .../f2/activeCycleGovernedContinuation.ts          |  21 ++-
 .../features/project-assistant/f2/orchestrateF2.ts |  16 ++-
 .../w2/pendingGenericPrepareOfferStore.ts          |  59 ++++++++
 .../w2/prepareGenericExecutionContractDraft.ts     | 149 +++++++++++++++++++--
 .../w2/resolveAuthoritativeProductMateriality.ts   |  15 ++-
 .../app/lib/platform/ai/fakeProvider.ts            |  64 +++++++++
 6 files changed, 307 insertions(+), 17 deletions(-)

cached: (vide)
```

## 18. Gates Morris

1. Critical Closure Review ChatGPT (Pass 01+02)
2. GO Git Integration (commit/push/PR)
3. Redéploiement :3020
4. Human QA e66
5. Qualification P6

## 19. Verdict

**LOCAL CORRECTION COMPLETE**
**INTENT FIDELITY VERIFIED**
**AUTHORITY CONTINUITY VERIFIED**
**DETERMINISTIC VALIDATION PASS**
**READY FOR CHATGPT CRITICAL CLOSURE REVIEW**

## 20. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier Pass 01 préservé ; Pass 02 intégré ; fidélité intent/effets/caps ; chemin documentaire non autoritatif ; matérialité ; Artifact obligatoire ; tests 59/59 ; diffs ; commit/blob distant ; réserves ; gates.

Produire : **SFIA STUDIO — P6-HQA-F05-GD4-01 CRITICAL CLOSURE REVIEW PASS 01 + PASS 02**.
