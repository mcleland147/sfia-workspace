# SFIA Review Pack — FULL
## RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — SAME-MACRO CORRECTION RC-01 / RC-02

Timestamp (UTC): `2026-09-25T11:16:22Z`

## 1. Git truth

- Repo: `mcleland147/sfia-workspace`
- Branch: `feat/sfia-studio-reservation-context-pilot-confirmation-01`
- HEAD / origin/main: `e36eb0597657577191af9cbc5feac6f47219b1fc` / `e36eb0597657577191af9cbc5feac6f47219b1fc` — **MATCH** (`e36eb0597657577191af9cbc5feac6f47219b1fc`)
- Construction: **LOCAL DIRTY / UNCOMMITTED** (same-macro candidate preserved)
- Project commit / push / PR / merge: **NOT AUTHORIZED / NOT EXECUTED**

### git status --short

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/reservationPrompt.ts
?? .tmp-sfia-review/cycle-journal-continuity-proof/
?? .tmp-sfia-review/cycle-reservation-piloting-proof/
?? .tmp-sfia-review/nora-conversational-initiative-real-proof-02/
?? .tmp-sfia-review/nora-conversational-initiative-real-proof/
?? .tmp-sfia-review/pilotability-journal-integrity-proof/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/reservationContextPilotConfirmation.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/reservationContextProposal.ui.test.tsx
?? projects/sfia-studio/app/features/project-assistant/reservationInteractionContext.ts
```

## 2. Convergence / cycle qualification (unchanged)

- Delivery / `cyc:delivery` / EVOL / Critical
- Macro: `RESERVATION-CONTEXT-PILOT-CONFIRMATION-01`
- Protected sources READ ONLY (Build Doctrine, Roadmap, C1, v3, CKC, method, prompts)
- Roadmap not modified

## 3. R22 OpenAI Capability Fit (unchanged)

KEEP structured OpenAI path + reservationDelta; ADAPT context carriage; REJECT new engine / OpenAI HITL as Pilot confirmation.

## 4. RC-01 — Malformed Reservation context must fail closed

### Finding

`parseReservationInteractionContextInput` previously returned `null` for both:
- context absent
- context present but malformed

`orchestrateAssistantSend` treated null as « no Reservation focus » → silent generic / F2 fallback for hostile payload.

### Exact fix

Discriminated parse result:

- `{ status: "absent" }` — undefined/null only → generic conversation unchanged
- `{ status: "invalid", code: "RESERVATION_CONTEXT_INVALID", message }` — string/array/{}/missing ids/blank/non-string → explicit `validation_error`
- `{ status: "ok", value }` → existing server revalidation path

`orchestrateF2` returns immediately on `invalid` before analysis / F2 / Reservation binding.
Client arm clearing for `RESERVATION_CONTEXT_*` remains via existing `useProductConversation` handling.

### Tests

- undefined/null → absent
- "hostile", [], {}, missing id, blank id, non-string id → INVALID
- valid structured ids → ok
- stale/foreign/inactive/wrong-type → existing fail-closed PASS

## 5. RC-02 — Pilot-facing Reservation semantics

### Finding

Proposal surface showed raw `cycle <cycleInstanceId>` and reused generic F2 `DÉCISION REQUISE` for Reservation confirmation (weaker than Pilot Confirmation of resolution proposal).

### Exact fix

- `ReservationResolutionProposalDto.cycleLabel` from composed `studioCognitiveContext.activeCycle.cycleLabel` (no new lookup/store)
- ConversationSurface primary context: `Contexte : Réserve N · Cadrage actif` via local pure formatter (client-safe; avoids OA/`node:path` bundle pull)
- raw `cycleInstanceId` retained in hidden technical metadata test id
- F2 `decisionRequired` forced `null` on Reservation focus turns (global F2 enum **unchanged**)
- local surface: « Confirmation Pilote requise » when `proposed=true`
- chip row suppresses any residual `DÉCISION REQUISE` while Reservation proposal is active
- « Proposition de levée » + « Confirmer la levée » unchanged; same governed callback

## 6. KEEP (accepted candidate)

Bounded `reservationInteractionContext` seam; force-F1; focus prompt; reservationDelta; PROPOSE_RESOLUTION; Journal + Proposal confirm same action; left/right projections AS-IS; generic F2 outside focus.

## 7. Changed files (this correction + full candidate)

### Modified (relative to origin/main)

- `reservationInteractionContext.ts` (NEW)
- `f2/orchestrateF2.ts`
- `types.ts`
- `ConversationSurface.tsx`
- `useProductConversation.ts`
- `ProjectWorkspacePage.tsx`
- `actions.ts`
- `studioCognitiveContext.ts`
- `orchestrateTurn.ts`
- `reservationPrompt.ts`
- fixture null fields in studioCognitiveContext + corrProof06 tests
- NEW tests: `reservationContextPilotConfirmation.d0.test.ts`, `reservationContextProposal.ui.test.tsx`

## 8. Diffs / full new file contents

### RC-focused tracked diffs (orchestrateF2 / types / ConversationSurface)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 1da26eac..574feaaf 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -23,6 +23,19 @@ import { useEffect, useId } from "react";
 import type { ProductConversationController } from "../hooks/useProductConversation";
 import styles from "./ConversationSurface.module.css";

+/**
+ * RC-02 — human-facing active-cycle label (pure presentation; no OA import).
+ * Mirrors formatReservationActiveCycleFacingLabel without pulling server modules.
+ */
+function formatReservationActiveCycleFacingLabel(
+  cycleLabel: string | null | undefined,
+): string {
+  const t = typeof cycleLabel === "string" ? cycleLabel.trim() : "";
+  if (!t) return "Cycle actif";
+  if (/\bacti[fv]\b/i.test(t)) return t;
+  return `${t} actif`;
+}
+
 const DECISION_ACTIONS: readonly {
   kind: F2DecisionKind;
   label: string;
@@ -57,6 +70,12 @@ export type ConversationSurfaceProps = {
    * unset/false so TrajectorySurface remains the sole authority/execute chain.
    */
   exposeLegacyAuthorityPath?: boolean;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — same governed Pilot confirm
+   * as Journal « Confirmer la levée » (no duplicate mutation path).
+   */
+  onConfirmReservationResolve?: (epistemicItemId: string) => void;
+  reservationConfirmBusyId?: string | null;
 };

 /**
@@ -68,6 +87,8 @@ export type ConversationSurfaceProps = {
 export function ConversationSurface({
   controller,
   exposeLegacyAuthorityPath = false,
+  onConfirmReservationResolve,
+  reservationConfirmBusyId = null,
 }: ConversationSurfaceProps) {
   const fieldId = useId();
   const liveRegionId = useId();
@@ -114,6 +135,7 @@ export function ConversationSurface({
     confirmAndExecuteLegacyFixture,
     refreshResolvedM3RunningAttempt,
     retryLastUserMessage,
+    reservationResolutionProposal,
   } = controller;

   // Notify LifecycleSurface after Nora answers so CURRENT LR can reproject.
@@ -298,7 +320,7 @@ export function ConversationSurface({
           {f2.labels.proposition ? (
             <span className={styles.chip}>{f2.labels.proposition}</span>
           ) : null}
-          {f2.labels.decisionRequired ? (
+          {f2.labels.decisionRequired && !reservationResolutionProposal ? (
             <span className={styles.chipGold}>{f2.labels.decisionRequired}</span>
           ) : null}
           {f2.labels.decisionTaken ? (
@@ -308,7 +330,87 @@ export function ConversationSurface({
         </div>
       ) : null}

-      {f2?.qualification ? (
+      {reservationResolutionProposal ? (
+        <section
+          className={styles.card}
+          data-testid="reservation-resolution-proposal"
+          aria-labelledby={`${fieldId}-rsv-proposal`}
+        >
+          <header className={styles.cardHead}>
+            <p className={styles.cardEyebrow}>Lecture de Nora</p>
+            <h3 id={`${fieldId}-rsv-proposal`} className={styles.cardTitle}>
+              {reservationResolutionProposal.proposed
+                ? "Proposition de levée"
+                : "Traitement de réserve"}
+            </h3>
+            <p
+              className={styles.cardNote}
+              data-testid="reservation-resolution-context"
+            >
+              Contexte :{" "}
+              {reservationResolutionProposal.ordinal != null &&
+              reservationResolutionProposal.ordinal > 0
+                ? `Réserve ${reservationResolutionProposal.ordinal}`
+                : "Réserve"}{" "}
+              ·{" "}
+              {formatReservationActiveCycleFacingLabel(
+                reservationResolutionProposal.cycleLabel,
+              )}
+            </p>
+            <p
+              className={styles.cardNote}
+              data-testid="reservation-resolution-cycle-id"
+              hidden
+            >
+              {reservationResolutionProposal.cycleInstanceId}
+            </p>
+            {reservationResolutionProposal.proposed ? (
+              <p
+                className={styles.cardNote}
+                data-testid="reservation-pilot-confirmation-required"
+              >
+                Confirmation Pilote requise
+              </p>
+            ) : null}
+            <p className={styles.cardNote}>
+              {reservationResolutionProposal.proposed
+                ? "La condition paraît satisfaite. La levée attend votre confirmation Pilote — la réserve reste active."
+                : "Nora traite cette réserve. Une recommandation n’est pas une levée."}
+            </p>
+          </header>
+          {reservationResolutionProposal.proposed &&
+          onConfirmReservationResolve ? (
+            <div className={styles.decisionActions}>
+              <button
+                type="button"
+                className={styles.decisionButton}
+                data-tone="primary"
+                data-testid={`reservation-confirm-from-proposal-${reservationResolutionProposal.epistemicItemId}`}
+                disabled={
+                  busy ||
+                  reservationConfirmBusyId ===
+                    reservationResolutionProposal.epistemicItemId
+                }
+                onClick={() =>
+                  onConfirmReservationResolve(
+                    reservationResolutionProposal.epistemicItemId,
+                  )
+                }
+              >
+                {reservationConfirmBusyId ===
+                reservationResolutionProposal.epistemicItemId
+                  ? "Confirmation…"
+                  : "Confirmer la levée"}
+              </button>
+            </div>
+          ) : null}
+          <p className={styles.stamp} data-testid="reservation-no-auto-resolve">
+            AUCUNE LEVÉE AUTOMATIQUE
+          </p>
+        </section>
+      ) : null}
+
+      {f2?.qualification && !reservationResolutionProposal ? (
         <section
           className={styles.card}
           data-testid="project-assistant-qualification"
@@ -392,7 +494,7 @@ export function ConversationSurface({
         </section>
       ) : null}

-      {activeProposal ? (
+      {activeProposal && !reservationResolutionProposal ? (
         <section
           className={styles.card}
           data-testid="project-assistant-proposal"
@@ -475,7 +577,7 @@ export function ConversationSurface({
         </section>
       ) : null}

-      {gateOpen && !exposeLegacyAuthorityPath ? (
+      {gateOpen && !exposeLegacyAuthorityPath && !reservationResolutionProposal ? (
         <section
           className={styles.card}
           data-testid="product-authority-path-guidance"
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 504ddd7b..54b9213f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -71,6 +71,11 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import {
+  parseReservationInteractionContextInput,
+  validateReservationInteractionContext,
+  type ValidatedReservationInteractionContext,
+} from "../reservationInteractionContext";
 import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
 import { reconcileQualificationSignals } from "./qualificationSignalCoherence";
 import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
@@ -802,6 +807,11 @@ export async function orchestrateAssistantSend(input: {
    * Server-validated against effective pending markers; never trusted alone.
    */
   reinstructionOfProposalId?: string | null;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — untrusted client binding.
+   * Server revalidates; invalid → fail-closed product message (no retarget).
+   */
+  reservationInteractionContext?: unknown;
   /**
    * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
    * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
@@ -881,6 +891,21 @@ export async function orchestrateAssistantSend(input: {

   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;
+  let reservationFocus: ValidatedReservationInteractionContext | null = null;
+  const parsedReservationContext = parseReservationInteractionContextInput(
+    input.reservationInteractionContext,
+  );
+  // RC-01 — present-but-malformed must fail closed (never silent generic F2).
+  if (parsedReservationContext.status === "invalid") {
+    return {
+      ok: false,
+      status: "validation_error",
+      code: parsedReservationContext.code,
+      message: parsedReservationContext.message,
+      mode: modeResolution.mode,
+      retryable: true,
+    };
+  }
   try {
     const cognitive = await resolveCognitiveIntentProjectSummary(project);
     if (!cognitive.ok) {
@@ -898,6 +923,64 @@ export async function orchestrateAssistantSend(input: {
         ? cognitive.truthCContext
         : undefined;

+    // RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — revalidate client binding.
+    if (parsedReservationContext.status === "ok") {
+      const claimedReservationContext = parsedReservationContext.value;
+      const oaForRsv = getRuntimeApplicationService().oa;
+      const activeCycleId =
+        project.activeCycleInstanceId?.trim() ||
+        (await (async () => {
+          if (!oaForRsv) return null;
+          try {
+            const lps =
+              await oaForRsv.projectServices.getCurrentLivingProjectState.execute(
+                { projectId: project.projectId },
+              );
+            return lps.ok
+              ? lps.livingProjectState.activeCycleInstanceId ?? null
+              : null;
+          } catch {
+            return null;
+          }
+        })());
+      let items: Awaited<
+        ReturnType<
+          NonNullable<
+            ReturnType<typeof getRuntimeApplicationService>["oa"]
+          >["cycleServices"]["epistemic"]["listByProject"]
+        >
+      > = [];
+      if (oaForRsv) {
+        try {
+          items = await oaForRsv.cycleServices.epistemic.listByProject(
+            project.projectId,
+          );
+        } catch {
+          items = [];
+        }
+      }
+      const validated = validateReservationInteractionContext({
+        claimed: claimedReservationContext,
+        activeCycleInstanceId: activeCycleId,
+        items,
+      });
+      if (!validated.ok) {
+        return {
+          ok: false,
+          status: "validation_error",
+          code: validated.code,
+          message: validated.message,
+          mode: modeResolution.mode,
+          retryable: true,
+        };
+      }
+      reservationFocus = validated.value;
+      // Keep LPS activeCycle on DTO for downstream F1 composition.
+      if (!project.activeCycleInstanceId && activeCycleId) {
+        project = { ...project, activeCycleInstanceId: activeCycleId };
+      }
+    }
+
     // CORR-PROOF-01 D1 CR-03/CR-04 — Memory B replay semantics; EMPTY ≠ UNAVAILABLE.
     const canonicalLoad = await loadCanonicalConversationForAnalysis({
       projectId: project.projectId,
@@ -984,9 +1067,13 @@ export async function orchestrateAssistantSend(input: {
   // CORR-PROOF-02 B1 — deterministic transition gate.
   // Safe advisory (incl. ambiguous / parse-fail / incomplete formalization fields) → F1.
   // Governed formalization only when readiness is fully established.
+  // RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — valid Reservation focus suppresses
+  // generic F2 formalization hijack for this turn (keep Nora cognitive path).
+  const forceReservationResolutionAdvisory = reservationFocus != null;
   const transition = resolveTransitionReadiness({
     analysis,
-    forceRepoInformative,
+    forceRepoInformative:
+      forceRepoInformative || forceReservationResolutionAdvisory,
   });

   if (!transition.formalizationReady) {
@@ -1000,7 +1087,11 @@ export async function orchestrateAssistantSend(input: {
       registryRoot,
       truthCContext: truthCContextForF1,
       oa,
-      activeCycleInstanceId: project.activeCycleInstanceId ?? null,
+      activeCycleInstanceId:
+        reservationFocus?.cycleInstanceId ??
+        project.activeCycleInstanceId ??
+        null,
+      reservationFocus,
     });
     if (!studioComposed.ok) {
       return {
@@ -1035,7 +1126,7 @@ export async function orchestrateAssistantSend(input: {
         analysis.intentClass === "ambiguous" ||
         analysis.intentClass === "actionable" ||
         analysis.intentClass === "execution_request")
-        ? forceRepoInformative
+        ? forceRepoInformative || forceReservationResolutionAdvisory
           ? "informative"
           : analysis.intentClass
         : "ambiguous";
@@ -1044,7 +1135,25 @@ export async function orchestrateAssistantSend(input: {
     const executionBlocked =
       analysis.parseOk === true &&
       analysis.intentClass === "execution_request" &&
-      !forceRepoInformative;
+      !forceRepoInformative &&
+      !forceReservationResolutionAdvisory;
+    const proposedIds = f1.reservationProposedIds ?? [];
+    // RC-02 — human-facing cycle label from already-composed Studio context.
+    const composedCycleLabel =
+      studioCognitiveContext.activeCycle?.cycleLabel?.trim() ||
+      studioCognitiveContext.activeCycle?.cycleTypeId?.trim() ||
+      null;
+    const reservationResolutionProposal =
+      reservationFocus != null
+        ? {
+            epistemicItemId: reservationFocus.epistemicItemId,
+            cycleInstanceId: reservationFocus.cycleInstanceId,
+            cycleLabel: composedCycleLabel,
+            ordinal: reservationFocus.ordinal,
+            title: reservationFocus.title,
+            proposed: proposedIds.includes(reservationFocus.epistemicItemId),
+          }
+        : null;
     return {
       ...f1,
       model: f1.model ?? model,
@@ -1053,6 +1162,8 @@ export async function orchestrateAssistantSend(input: {
       reinstructionTransition: resolveReinstructionTransition({
         reinstructionOfProposalId,
       }),
+      reservationProposedIds: proposedIds,
+      reservationResolutionProposal,
       f2: {
         turnKind: "f1_informative",
         intentClass: reportedIntent,
@@ -1061,7 +1172,11 @@ export async function orchestrateAssistantSend(input: {
         decision: null,
         labels: {
           recommendation: null,
-          proposition: null,
+          proposition: reservationResolutionProposal?.proposed
+            ? "PROPOSITION"
+            : null,
+          // RC-02 — do not reuse generic F2 « DÉCISION REQUISE » for
+          // Reservation Pilot confirmation (local surface wording only).
           decisionRequired: null,
           decisionTaken: null,
           noExecution: "AUCUNE EXÉCUTION",
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 070fa422..daf8841d 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -173,6 +173,25 @@ export type F2TurnPayload = {
   processLocalNotice: string;
 };

+/**
+ * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — ephemeral client surface for a
+ * validated Reservation focus / PROPOSE_RESOLUTION. Not Truth C; not Confirmation.
+ */
+export type ReservationResolutionProposalDto = {
+  epistemicItemId: string;
+  cycleInstanceId: string;
+  /**
+   * Human-facing active-cycle label from composed Product context
+   * (e.g. « Cadrage »). Not a second authority; technical id remains
+   * on cycleInstanceId for tests / details.
+   */
+  cycleLabel: string | null;
+  ordinal: number | null;
+  title: string;
+  /** true only when materialize wrote a resolutionProposal this turn. */
+  proposed: boolean;
+};
+
 export type ProjectAssistantSendSuccess = {
   ok: true;
   status: "ok" | "cognitive_stop";
@@ -253,6 +272,16 @@ export type ProjectAssistantSendSuccess = {
    * Session-adjacent replay/idempotence identity; never Epistemic SoT.
    */
   logicalTurnId?: string | null;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — ids that received PROPOSE_RESOLUTION
+   * this Product turn (after durable materialize). Empty when none.
+   */
+  reservationProposedIds?: string[];
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — validated Reservation focus surface
+   * for Pilot presentation (proposal-state wording; never auto-resolved).
+   */
+  reservationResolutionProposal?: ReservationResolutionProposalDto | null;
   /**
    * MW6↔Auth — present when send used executionContractId governed composition.
    * Server-built; never a client-supplied authority object.

```

### Full tracked construction diff vs HEAD/main

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 403ce3e2..707694e1 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -157,6 +157,14 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
       null;
     controller.setDraft(reservationDraftForNora(card));
     setReservationNotice(null);
+    if (reservationCycleInstanceId && epistemicItemId.trim()) {
+      controller.armReservationInteractionContext({
+        cycleInstanceId: reservationCycleInstanceId,
+        epistemicItemId: epistemicItemId.trim(),
+      });
+    } else {
+      controller.armReservationInteractionContext(null);
+    }
     focusConversation();
   };

@@ -180,12 +188,14 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
         }
         setReservationNotice(outcome.message ?? "Levée de la réserve confirmée.");
         if (outcome.projection) setLifecycleProjection(outcome.projection);
+        controller.armReservationInteractionContext(null);
+        controller.clearReservationResolutionProposal();
         notifyDurableFactsChanged();
       } finally {
         setReservationBusyId(null);
       }
     },
-    [projectId, reservationCycleInstanceId, notifyDurableFactsChanged],
+    [projectId, reservationCycleInstanceId, notifyDurableFactsChanged, controller],
   );

   const confirmReservationDefer = useCallback(
@@ -351,7 +361,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {

         <div className={styles.main} ref={conversationRef}>
           <div className={styles.conversation} data-testid="project-conversation-main">
-            <ConversationSurface controller={controller} />
+            <ConversationSurface
+              controller={controller}
+              onConfirmReservationResolve={confirmReservationResolution}
+              reservationConfirmBusyId={reservationBusyId}
+            />
           </div>
           <HistorySurface result={success} durableOutcome={durableOutcome} />
         </div>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index b88b7d32..6d040062 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -16,6 +16,7 @@ import type {
   AssistantToolEventDto,
   F2TurnPayload,
   ProjectAssistantRehydrateEvidenceOutcomeSuccess,
+  ReservationResolutionProposalDto,
 } from "@/features/project-assistant/types";
 import type {
   F2DecisionKind,
@@ -169,6 +170,14 @@ export function useProductConversation({
   /** CORR-PROOF-11 — armed opaque proposalId for explicit reinstruction send. */
   const [armedReinstructionOfProposalId, setArmedReinstructionOfProposalId] =
     useState<string | null>(null);
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — armed structured Reservation
+   * binding for subsequent send(s). Prefill-only Treat does not send.
+   */
+  const [armedReservationInteractionContext, setArmedReservationInteractionContext] =
+    useState<{ cycleInstanceId: string; epistemicItemId: string } | null>(null);
+  const [reservationResolutionProposal, setReservationResolutionProposal] =
+    useState<ReservationResolutionProposalDto | null>(null);

   const listRef = useRef<HTMLDivElement | null>(null);
   const f3InFlightRef = useRef(false);
@@ -419,6 +428,14 @@ export function useProductConversation({
       reinstructionOfProposalId?: string | null;
       /** Fired after a successful send that included reinstructionOfProposalId. */
       onReinstructionConsumed?: () => void;
+      /**
+       * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — override armed Reservation
+       * binding for this send (tests / explicit callers).
+       */
+      reservationInteractionContext?: {
+        cycleInstanceId: string;
+        epistemicItemId: string;
+      } | null;
     },
   ) {
     const usingRetryEnvelope = Boolean(options?.turnRetryKey?.trim());
@@ -461,6 +478,10 @@ export function useProductConversation({
       typeof options?.reinstructionOfProposalId === "string"
         ? options.reinstructionOfProposalId.trim() || null
         : armedReinstructionOfProposalId;
+    const reservationInteractionContext =
+      options?.reservationInteractionContext !== undefined
+        ? options.reservationInteractionContext
+        : armedReservationInteractionContext;

     startTransition(async () => {
       setUiState("ASSISTANT_WORKING");
@@ -477,6 +498,9 @@ export function useProductConversation({
           ...(reinstructionOfProposalId
             ? { reinstructionOfProposalId }
             : {}),
+          ...(reservationInteractionContext
+            ? { reservationInteractionContext }
+            : {}),
         });
       } catch {
         // Transport / Server Action rejection before structured response.
@@ -496,6 +520,14 @@ export function useProductConversation({
         } else if (presentedLogicalTurnId) {
           lastLogicalTurnIdRef.current = presentedLogicalTurnId;
         }
+        if (
+          typeof result.code === "string" &&
+          result.code.startsWith("RESERVATION_CONTEXT_")
+        ) {
+          // Stale/hostile Reservation binding — clear arm; do not retarget.
+          setArmedReservationInteractionContext(null);
+          setReservationResolutionProposal(null);
+        }
         if (result.status === "provider_unavailable") {
           setUiState("BLOCKED");
           setModeLabel("Assistant indisponible");
@@ -520,6 +552,18 @@ export function useProductConversation({
         // A committed decision subject is a durable Epistemic marker write.
         notifyDurableFactsChanged();
       }
+      if (result.reservationResolutionProposal) {
+        setReservationResolutionProposal(result.reservationResolutionProposal);
+      } else if (!reservationInteractionContext) {
+        setReservationResolutionProposal(null);
+      }
+      if (
+        (result.reservationProposedIds?.length ?? 0) > 0 ||
+        result.reservationResolutionProposal?.proposed === true
+      ) {
+        // PROPOSE_RESOLUTION wrote durable Truth C — refresh Journal / Lifecycle.
+        notifyDurableFactsChanged();
+      }

       lastSendFailedRef.current = false;
       lastLogicalTurnIdRef.current = result.logicalTurnId ?? null;
@@ -879,6 +923,28 @@ export function useProductConversation({
       if (trimmed) setArmedReinstructionOfProposalId(trimmed);
     },
     armedReinstructionOfProposalId,
+    armReservationInteractionContext: (ctx: {
+      cycleInstanceId: string;
+      epistemicItemId: string;
+    } | null) => {
+      if (!ctx) {
+        setArmedReservationInteractionContext(null);
+        return;
+      }
+      const cycleInstanceId = ctx.cycleInstanceId.trim();
+      const epistemicItemId = ctx.epistemicItemId.trim();
+      if (!cycleInstanceId || !epistemicItemId) return;
+      setArmedReservationInteractionContext({
+        cycleInstanceId,
+        epistemicItemId,
+      });
+      setReservationResolutionProposal(null);
+    },
+    armedReservationInteractionContext,
+    reservationResolutionProposal,
+    clearReservationResolutionProposal: () => {
+      setReservationResolutionProposal(null);
+    },
     decide,
     prepareResolvedM3,
     prepareLegacyFixture,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 1da26eac..574feaaf 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -23,6 +23,19 @@ import { useEffect, useId } from "react";
 import type { ProductConversationController } from "../hooks/useProductConversation";
 import styles from "./ConversationSurface.module.css";

+/**
+ * RC-02 — human-facing active-cycle label (pure presentation; no OA import).
+ * Mirrors formatReservationActiveCycleFacingLabel without pulling server modules.
+ */
+function formatReservationActiveCycleFacingLabel(
+  cycleLabel: string | null | undefined,
+): string {
+  const t = typeof cycleLabel === "string" ? cycleLabel.trim() : "";
+  if (!t) return "Cycle actif";
+  if (/\bacti[fv]\b/i.test(t)) return t;
+  return `${t} actif`;
+}
+
 const DECISION_ACTIONS: readonly {
   kind: F2DecisionKind;
   label: string;
@@ -57,6 +70,12 @@ export type ConversationSurfaceProps = {
    * unset/false so TrajectorySurface remains the sole authority/execute chain.
    */
   exposeLegacyAuthorityPath?: boolean;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — same governed Pilot confirm
+   * as Journal « Confirmer la levée » (no duplicate mutation path).
+   */
+  onConfirmReservationResolve?: (epistemicItemId: string) => void;
+  reservationConfirmBusyId?: string | null;
 };

 /**
@@ -68,6 +87,8 @@ export type ConversationSurfaceProps = {
 export function ConversationSurface({
   controller,
   exposeLegacyAuthorityPath = false,
+  onConfirmReservationResolve,
+  reservationConfirmBusyId = null,
 }: ConversationSurfaceProps) {
   const fieldId = useId();
   const liveRegionId = useId();
@@ -114,6 +135,7 @@ export function ConversationSurface({
     confirmAndExecuteLegacyFixture,
     refreshResolvedM3RunningAttempt,
     retryLastUserMessage,
+    reservationResolutionProposal,
   } = controller;

   // Notify LifecycleSurface after Nora answers so CURRENT LR can reproject.
@@ -298,7 +320,7 @@ export function ConversationSurface({
           {f2.labels.proposition ? (
             <span className={styles.chip}>{f2.labels.proposition}</span>
           ) : null}
-          {f2.labels.decisionRequired ? (
+          {f2.labels.decisionRequired && !reservationResolutionProposal ? (
             <span className={styles.chipGold}>{f2.labels.decisionRequired}</span>
           ) : null}
           {f2.labels.decisionTaken ? (
@@ -308,7 +330,87 @@ export function ConversationSurface({
         </div>
       ) : null}

-      {f2?.qualification ? (
+      {reservationResolutionProposal ? (
+        <section
+          className={styles.card}
+          data-testid="reservation-resolution-proposal"
+          aria-labelledby={`${fieldId}-rsv-proposal`}
+        >
+          <header className={styles.cardHead}>
+            <p className={styles.cardEyebrow}>Lecture de Nora</p>
+            <h3 id={`${fieldId}-rsv-proposal`} className={styles.cardTitle}>
+              {reservationResolutionProposal.proposed
+                ? "Proposition de levée"
+                : "Traitement de réserve"}
+            </h3>
+            <p
+              className={styles.cardNote}
+              data-testid="reservation-resolution-context"
+            >
+              Contexte :{" "}
+              {reservationResolutionProposal.ordinal != null &&
+              reservationResolutionProposal.ordinal > 0
+                ? `Réserve ${reservationResolutionProposal.ordinal}`
+                : "Réserve"}{" "}
+              ·{" "}
+              {formatReservationActiveCycleFacingLabel(
+                reservationResolutionProposal.cycleLabel,
+              )}
+            </p>
+            <p
+              className={styles.cardNote}
+              data-testid="reservation-resolution-cycle-id"
+              hidden
+            >
+              {reservationResolutionProposal.cycleInstanceId}
+            </p>
+            {reservationResolutionProposal.proposed ? (
+              <p
+                className={styles.cardNote}
+                data-testid="reservation-pilot-confirmation-required"
+              >
+                Confirmation Pilote requise
+              </p>
+            ) : null}
+            <p className={styles.cardNote}>
+              {reservationResolutionProposal.proposed
+                ? "La condition paraît satisfaite. La levée attend votre confirmation Pilote — la réserve reste active."
+                : "Nora traite cette réserve. Une recommandation n’est pas une levée."}
+            </p>
+          </header>
+          {reservationResolutionProposal.proposed &&
+          onConfirmReservationResolve ? (
+            <div className={styles.decisionActions}>
+              <button
+                type="button"
+                className={styles.decisionButton}
+                data-tone="primary"
+                data-testid={`reservation-confirm-from-proposal-${reservationResolutionProposal.epistemicItemId}`}
+                disabled={
+                  busy ||
+                  reservationConfirmBusyId ===
+                    reservationResolutionProposal.epistemicItemId
+                }
+                onClick={() =>
+                  onConfirmReservationResolve(
+                    reservationResolutionProposal.epistemicItemId,
+                  )
+                }
+              >
+                {reservationConfirmBusyId ===
+                reservationResolutionProposal.epistemicItemId
+                  ? "Confirmation…"
+                  : "Confirmer la levée"}
+              </button>
+            </div>
+          ) : null}
+          <p className={styles.stamp} data-testid="reservation-no-auto-resolve">
+            AUCUNE LEVÉE AUTOMATIQUE
+          </p>
+        </section>
+      ) : null}
+
+      {f2?.qualification && !reservationResolutionProposal ? (
         <section
           className={styles.card}
           data-testid="project-assistant-qualification"
@@ -392,7 +494,7 @@ export function ConversationSurface({
         </section>
       ) : null}

-      {activeProposal ? (
+      {activeProposal && !reservationResolutionProposal ? (
         <section
           className={styles.card}
           data-testid="project-assistant-proposal"
@@ -475,7 +577,7 @@ export function ConversationSurface({
         </section>
       ) : null}

-      {gateOpen && !exposeLegacyAuthorityPath ? (
+      {gateOpen && !exposeLegacyAuthorityPath && !reservationResolutionProposal ? (
         <section
           className={styles.card}
           data-testid="product-authority-path-guidance"
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index d2caf1c2..d104b893 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -121,6 +121,14 @@ export async function projectAssistantSendAction(input: {
    * Untrusted until server validates against effective pending markers.
    */
   reinstructionOfProposalId?: string | null;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — untrusted client binding.
+   * Server revalidates project/cycle/Reservation; invalid → fail-closed.
+   */
+  reservationInteractionContext?: {
+    cycleInstanceId?: unknown;
+    epistemicItemId?: unknown;
+  } | null;
 }): Promise<ProjectAssistantSendResult> {
   const executionContractId =
     typeof input.executionContractId === "string"
@@ -161,6 +169,7 @@ export async function projectAssistantSendAction(input: {
     logicalTurnId: input.logicalTurnId,
     turnRetryKey: input.turnRetryKey,
     reinstructionOfProposalId,
+    reservationInteractionContext: input.reservationInteractionContext,
   });
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 504ddd7b..54b9213f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -71,6 +71,11 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import {
+  parseReservationInteractionContextInput,
+  validateReservationInteractionContext,
+  type ValidatedReservationInteractionContext,
+} from "../reservationInteractionContext";
 import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
 import { reconcileQualificationSignals } from "./qualificationSignalCoherence";
 import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
@@ -802,6 +807,11 @@ export async function orchestrateAssistantSend(input: {
    * Server-validated against effective pending markers; never trusted alone.
    */
   reinstructionOfProposalId?: string | null;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — untrusted client binding.
+   * Server revalidates; invalid → fail-closed product message (no retarget).
+   */
+  reservationInteractionContext?: unknown;
   /**
    * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
    * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
@@ -881,6 +891,21 @@ export async function orchestrateAssistantSend(input: {

   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;
+  let reservationFocus: ValidatedReservationInteractionContext | null = null;
+  const parsedReservationContext = parseReservationInteractionContextInput(
+    input.reservationInteractionContext,
+  );
+  // RC-01 — present-but-malformed must fail closed (never silent generic F2).
+  if (parsedReservationContext.status === "invalid") {
+    return {
+      ok: false,
+      status: "validation_error",
+      code: parsedReservationContext.code,
+      message: parsedReservationContext.message,
+      mode: modeResolution.mode,
+      retryable: true,
+    };
+  }
   try {
     const cognitive = await resolveCognitiveIntentProjectSummary(project);
     if (!cognitive.ok) {
@@ -898,6 +923,64 @@ export async function orchestrateAssistantSend(input: {
         ? cognitive.truthCContext
         : undefined;

+    // RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — revalidate client binding.
+    if (parsedReservationContext.status === "ok") {
+      const claimedReservationContext = parsedReservationContext.value;
+      const oaForRsv = getRuntimeApplicationService().oa;
+      const activeCycleId =
+        project.activeCycleInstanceId?.trim() ||
+        (await (async () => {
+          if (!oaForRsv) return null;
+          try {
+            const lps =
+              await oaForRsv.projectServices.getCurrentLivingProjectState.execute(
+                { projectId: project.projectId },
+              );
+            return lps.ok
+              ? lps.livingProjectState.activeCycleInstanceId ?? null
+              : null;
+          } catch {
+            return null;
+          }
+        })());
+      let items: Awaited<
+        ReturnType<
+          NonNullable<
+            ReturnType<typeof getRuntimeApplicationService>["oa"]
+          >["cycleServices"]["epistemic"]["listByProject"]
+        >
+      > = [];
+      if (oaForRsv) {
+        try {
+          items = await oaForRsv.cycleServices.epistemic.listByProject(
+            project.projectId,
+          );
+        } catch {
+          items = [];
+        }
+      }
+      const validated = validateReservationInteractionContext({
+        claimed: claimedReservationContext,
+        activeCycleInstanceId: activeCycleId,
+        items,
+      });
+      if (!validated.ok) {
+        return {
+          ok: false,
+          status: "validation_error",
+          code: validated.code,
+          message: validated.message,
+          mode: modeResolution.mode,
+          retryable: true,
+        };
+      }
+      reservationFocus = validated.value;
+      // Keep LPS activeCycle on DTO for downstream F1 composition.
+      if (!project.activeCycleInstanceId && activeCycleId) {
+        project = { ...project, activeCycleInstanceId: activeCycleId };
+      }
+    }
+
     // CORR-PROOF-01 D1 CR-03/CR-04 — Memory B replay semantics; EMPTY ≠ UNAVAILABLE.
     const canonicalLoad = await loadCanonicalConversationForAnalysis({
       projectId: project.projectId,
@@ -984,9 +1067,13 @@ export async function orchestrateAssistantSend(input: {
   // CORR-PROOF-02 B1 — deterministic transition gate.
   // Safe advisory (incl. ambiguous / parse-fail / incomplete formalization fields) → F1.
   // Governed formalization only when readiness is fully established.
+  // RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — valid Reservation focus suppresses
+  // generic F2 formalization hijack for this turn (keep Nora cognitive path).
+  const forceReservationResolutionAdvisory = reservationFocus != null;
   const transition = resolveTransitionReadiness({
     analysis,
-    forceRepoInformative,
+    forceRepoInformative:
+      forceRepoInformative || forceReservationResolutionAdvisory,
   });

   if (!transition.formalizationReady) {
@@ -1000,7 +1087,11 @@ export async function orchestrateAssistantSend(input: {
       registryRoot,
       truthCContext: truthCContextForF1,
       oa,
-      activeCycleInstanceId: project.activeCycleInstanceId ?? null,
+      activeCycleInstanceId:
+        reservationFocus?.cycleInstanceId ??
+        project.activeCycleInstanceId ??
+        null,
+      reservationFocus,
     });
     if (!studioComposed.ok) {
       return {
@@ -1035,7 +1126,7 @@ export async function orchestrateAssistantSend(input: {
         analysis.intentClass === "ambiguous" ||
         analysis.intentClass === "actionable" ||
         analysis.intentClass === "execution_request")
-        ? forceRepoInformative
+        ? forceRepoInformative || forceReservationResolutionAdvisory
           ? "informative"
           : analysis.intentClass
         : "ambiguous";
@@ -1044,7 +1135,25 @@ export async function orchestrateAssistantSend(input: {
     const executionBlocked =
       analysis.parseOk === true &&
       analysis.intentClass === "execution_request" &&
-      !forceRepoInformative;
+      !forceRepoInformative &&
+      !forceReservationResolutionAdvisory;
+    const proposedIds = f1.reservationProposedIds ?? [];
+    // RC-02 — human-facing cycle label from already-composed Studio context.
+    const composedCycleLabel =
+      studioCognitiveContext.activeCycle?.cycleLabel?.trim() ||
+      studioCognitiveContext.activeCycle?.cycleTypeId?.trim() ||
+      null;
+    const reservationResolutionProposal =
+      reservationFocus != null
+        ? {
+            epistemicItemId: reservationFocus.epistemicItemId,
+            cycleInstanceId: reservationFocus.cycleInstanceId,
+            cycleLabel: composedCycleLabel,
+            ordinal: reservationFocus.ordinal,
+            title: reservationFocus.title,
+            proposed: proposedIds.includes(reservationFocus.epistemicItemId),
+          }
+        : null;
     return {
       ...f1,
       model: f1.model ?? model,
@@ -1053,6 +1162,8 @@ export async function orchestrateAssistantSend(input: {
       reinstructionTransition: resolveReinstructionTransition({
         reinstructionOfProposalId,
       }),
+      reservationProposedIds: proposedIds,
+      reservationResolutionProposal,
       f2: {
         turnKind: "f1_informative",
         intentClass: reportedIntent,
@@ -1061,7 +1172,11 @@ export async function orchestrateAssistantSend(input: {
         decision: null,
         labels: {
           recommendation: null,
-          proposition: null,
+          proposition: reservationResolutionProposal?.proposed
+            ? "PROPOSITION"
+            : null,
+          // RC-02 — do not reuse generic F2 « DÉCISION REQUISE » for
+          // Reservation Pilot confirmation (local surface wording only).
           decisionRequired: null,
           decisionTaken: null,
           noExecution: "AUCUNE EXÉCUTION",
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index 32a25142..ea7a12fd 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -46,7 +46,9 @@ import { ACTIVE_CYCLE_WORK_SOURCE } from "../materializeActiveCycleWork";
 import {
   buildReservationCompactForPrompt,
   formatReservationCompactForPrompt,
+  formatReservationFocusForPrompt,
 } from "@/lib/nora-cognitive-runtime/reservationPrompt";
+import type { ValidatedReservationInteractionContext } from "../reservationInteractionContext";

 /** Conservative composition budgets — implementation policy, not doctrine. */
 export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
@@ -265,6 +267,10 @@ export type StudioCognitiveContext = {
    * CYCLE-RESERVATION-PILOTING-01 — bounded reservation prompt block (or null).
    */
   readonly reservationCompactSection: string | null;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — focused treatment block (or null).
+   */
+  readonly reservationFocusSection: string | null;
   readonly limits: {
     readonly oaAvailable: boolean;
     readonly truthOutranksConversation: true;
@@ -404,6 +410,10 @@ export async function composeStudioCognitiveContext(input: {
   truthCContext?: string | null;
   oa: RuntimeOaStack | null;
   activeCycleInstanceId?: string | null;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — server-validated focus only.
+   */
+  reservationFocus?: ValidatedReservationInteractionContext | null;
 }): Promise<ComposeStudioCognitiveContextResult> {
   const activeCycleInstanceId =
     input.activeCycleInstanceId ??
@@ -498,6 +508,7 @@ export async function composeStudioCognitiveContext(input: {
         }),
         lifecycleRecommendation: LIFECYCLE_RECOMMENDATION_UNAVAILABLE,
         reservationCompactSection: null,
+        reservationFocusSection: null,
         limits: Object.freeze({
           oaAvailable: false,
           truthOutranksConversation: true as const,
@@ -621,6 +632,7 @@ export async function composeStudioCognitiveContext(input: {
   let lifecycleRecommendation: StudioLifecycleRecommendationContinuityProjection =
     LIFECYCLE_RECOMMENDATION_NONE;
   let reservationCompactSection: string | null = null;
+  let reservationFocusSection: string | null = null;
   {
     const failedMaterialDimensions =
       new Set<LifecycleRecommendationMaterialDimension>();
@@ -742,6 +754,24 @@ export async function composeStudioCognitiveContext(input: {
           lpsActiveCycleInstanceId,
         ),
       );
+      const focus = input.reservationFocus;
+      if (
+        focus &&
+        focus.cycleInstanceId === lpsActiveCycleInstanceId
+      ) {
+        const focused = epistemicItems.find(
+          (i) => i.epistemicItemId === focus.epistemicItemId,
+        );
+        reservationFocusSection = formatReservationFocusForPrompt({
+          epistemicItemId: focus.epistemicItemId,
+          ordinal: focus.ordinal,
+          title: focus.title,
+          resolutionCondition:
+            focused?.reservation?.resolutionCondition ?? null,
+          cycleInstanceId: lpsActiveCycleInstanceId,
+          cycleLabel: activeCycle?.cycleLabel ?? null,
+        });
+      }
     }
   }

@@ -773,6 +803,7 @@ export async function composeStudioCognitiveContext(input: {
       }),
       lifecycleRecommendation,
       reservationCompactSection,
+      reservationFocusSection,
       limits: Object.freeze({
         oaAvailable: true,
         truthOutranksConversation: true as const,
@@ -877,6 +908,10 @@ export function buildStudioCognitivePromptSections(
     } else {
       lines.push("Travail cognitif cycle ACTIVE : aucun item matérialisé encore.");
     }
+    if (ctx.reservationFocusSection) {
+      lines.push("");
+      lines.push(ctx.reservationFocusSection);
+    }
     if (ctx.reservationCompactSection) {
       lines.push("");
       lines.push(ctx.reservationCompactSection);
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 497e7e83..695b9f6c 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -623,6 +623,8 @@ export async function orchestrateProjectAssistantTurn(input: {
     // D-LC-01 — same Product turn: extract → fail-closed contradiction →
     // ACW first (when present) → then LR against final post-ACW basis.
     // No second model call. No fingerprint rewrite.
+    // RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — hoist for success return.
+    let reservationProposedIds: string[] = [];
     if (turn.structuredOutput !== undefined) {
       const { extractLifecycleCandidateFromStructuredOutput } = await import(
         "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn"
@@ -922,6 +924,7 @@ export async function orchestrateProjectAssistantTurn(input: {
                 logicalTurnId,
               };
             }
+            reservationProposedIds = [...rsvMat.proposedIds];
           }
         }
       }
@@ -1230,6 +1233,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       lifecycleRecommendationContinuity,
       lifecycleRecommendationContinuityRevalidation,
       logicalTurnId,
+      reservationProposedIds,
     };
   } catch (error) {
     const message =
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 070fa422..daf8841d 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -173,6 +173,25 @@ export type F2TurnPayload = {
   processLocalNotice: string;
 };

+/**
+ * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — ephemeral client surface for a
+ * validated Reservation focus / PROPOSE_RESOLUTION. Not Truth C; not Confirmation.
+ */
+export type ReservationResolutionProposalDto = {
+  epistemicItemId: string;
+  cycleInstanceId: string;
+  /**
+   * Human-facing active-cycle label from composed Product context
+   * (e.g. « Cadrage »). Not a second authority; technical id remains
+   * on cycleInstanceId for tests / details.
+   */
+  cycleLabel: string | null;
+  ordinal: number | null;
+  title: string;
+  /** true only when materialize wrote a resolutionProposal this turn. */
+  proposed: boolean;
+};
+
 export type ProjectAssistantSendSuccess = {
   ok: true;
   status: "ok" | "cognitive_stop";
@@ -253,6 +272,16 @@ export type ProjectAssistantSendSuccess = {
    * Session-adjacent replay/idempotence identity; never Epistemic SoT.
    */
   logicalTurnId?: string | null;
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — ids that received PROPOSE_RESOLUTION
+   * this Product turn (after durable materialize). Empty when none.
+   */
+  reservationProposedIds?: string[];
+  /**
+   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — validated Reservation focus surface
+   * for Pilot presentation (proposal-state wording; never auto-resolved).
+   */
+  reservationResolutionProposal?: ReservationResolutionProposalDto | null;
   /**
    * MW6↔Auth — present when send used executionContractId governed composition.
    * Server-built; never a client-supplied authority object.
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/reservationPrompt.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/reservationPrompt.ts
index 311204f1..38e592da 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/reservationPrompt.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/reservationPrompt.ts
@@ -92,6 +92,43 @@ export function buildReservationCompactForPrompt(
   return rows.slice(0, limit);
 }

+/**
+ * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — focused treatment block.
+ * Binds Nora to one active Reservation without claiming durable resolution.
+ */
+export function formatReservationFocusForPrompt(input: {
+  epistemicItemId: string;
+  ordinal: number | null;
+  title: string;
+  resolutionCondition?: string | null;
+  cycleInstanceId: string;
+  cycleLabel?: string | null;
+}): string {
+  const label =
+    input.ordinal != null && input.ordinal > 0
+      ? `Réserve ${input.ordinal}`
+      : "Réserve";
+  const lines = [
+    "=== TRAITEMENT RÉSERVE (contexte structuré actif) ===",
+    `Sujet actif : ${label} — « ${input.title} »`,
+    `epistemicItemId=${input.epistemicItemId}`,
+    `cycleInstanceId=${input.cycleInstanceId}` +
+      (input.cycleLabel ? ` (« ${input.cycleLabel} »)` : ""),
+    "Ce tour traite CETTE réserve — pas une nouvelle qualification de cycle.",
+    "INTERDIT : proposer un « nouveau Cadrage » / F2 générique parce que le Pilote clarifie une réserve.",
+    "INTERDIT : écrire que la réserve « est levée » / « est résolue » avant confirmation Pilote.",
+    "Si la base manque : explique ce qui manque ; reservationDelta=null ou UPDATE ; PAS de PROPOSE_RESOLUTION.",
+    "Si la clarification Pilote satisfait la condition de levée : émets PROPOSE_RESOLUTION",
+    `  avec targetReservationId=${input.epistemicItemId}, rationale, basisType=clarification,`,
+    "  basisRefs non vides (tour courant inclus). NE RÉSOUT PAS.",
+    "Autorisé : « je propose de lever… », « la levée attend votre confirmation ».",
+  ];
+  if (input.resolutionCondition?.trim()) {
+    lines.push(`Condition de levée connue : ${input.resolutionCondition.trim()}`);
+  }
+  return lines.join("\n");
+}
+
 export function formatReservationCompactForPrompt(
   rows: readonly ReservationCompactPromptRow[],
 ): string {

```

### NEW/UPDATED FILE: `projects/sfia-studio/app/features/project-assistant/reservationInteractionContext.ts`

```typescript
/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01
 * Bounded structured Reservation interaction context for one Product turn.
 *
 * Client-supplied ids are UNTRUSTED. Server revalidates project / cycle /
 * Reservation identity / active status before any cognitive binding.
 * Not Truth C, not HumanDecision, not Confirmation, not authority.
 *
 * RC-01 — absent context ≠ present-but-malformed:
 *   absent → generic conversation;
 *   malformed → RESERVATION_CONTEXT_INVALID (fail closed, no F2 fallback).
 */
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import {
  reservationBelongsToCycle,
} from "@/lib/oa/cycle/domain/reservationSemantics";

export type ReservationInteractionContextInput = {
  cycleInstanceId: string;
  epistemicItemId: string;
};

export type ValidatedReservationInteractionContext = {
  kind: "reservation_resolution";
  cycleInstanceId: string;
  epistemicItemId: string;
  ordinal: number | null;
  title: string;
};

export type ReservationInteractionValidationFailure = {
  ok: false;
  code:
    | "RESERVATION_CONTEXT_INVALID"
    | "RESERVATION_CONTEXT_CYCLE_MISMATCH"
    | "RESERVATION_CONTEXT_NOT_FOUND"
    | "RESERVATION_CONTEXT_NOT_ACTIVE"
    | "RESERVATION_CONTEXT_WRONG_TYPE";
  message: string;
};

export type ReservationInteractionValidationResult =
  | { ok: true; value: ValidatedReservationInteractionContext }
  | ReservationInteractionValidationFailure;

/**
 * Parse untrusted client payload.
 * - absent (undefined / null): no Reservation interaction requested
 * - present but malformed: explicit INVALID (never silent generic fallback)
 * - well-formed ids: ok → server revalidation
 */
export type ReservationInteractionContextParseResult =
  | { status: "absent" }
  | {
      status: "invalid";
      code: "RESERVATION_CONTEXT_INVALID";
      message: string;
    }
  | { status: "ok"; value: ReservationInteractionContextInput };

const INVALID_MESSAGE =
  "Contexte de réserve invalide. Rouvrez « Traiter avec Nora » depuis une réserve active du cycle courant.";

export function parseReservationInteractionContextInput(
  raw: unknown,
): ReservationInteractionContextParseResult {
  // CASE 1 — genuinely absent: generic conversation.
  if (raw === undefined || raw === null) {
    return { status: "absent" };
  }

  // CASE 2 — present but not a plain object (string / array / number / …).
  if (typeof raw !== "object" || Array.isArray(raw)) {
    return {
      status: "invalid",
      code: "RESERVATION_CONTEXT_INVALID",
      message: INVALID_MESSAGE,
    };
  }

  const o = raw as Record<string, unknown>;
  const hasCycleKey = Object.prototype.hasOwnProperty.call(o, "cycleInstanceId");
  const hasItemKey = Object.prototype.hasOwnProperty.call(o, "epistemicItemId");

  // Empty object or missing required keys → present-invalid.
  if (!hasCycleKey || !hasItemKey) {
    return {
      status: "invalid",
      code: "RESERVATION_CONTEXT_INVALID",
      message: INVALID_MESSAGE,
    };
  }

  const cycleRaw = o.cycleInstanceId;
  const itemRaw = o.epistemicItemId;
  if (typeof cycleRaw !== "string" || typeof itemRaw !== "string") {
    return {
      status: "invalid",
      code: "RESERVATION_CONTEXT_INVALID",
      message: INVALID_MESSAGE,
    };
  }

  const cycleInstanceId = cycleRaw.trim();
  const epistemicItemId = itemRaw.trim();
  if (!cycleInstanceId || !epistemicItemId) {
    return {
      status: "invalid",
      code: "RESERVATION_CONTEXT_INVALID",
      message: INVALID_MESSAGE,
    };
  }

  return {
    status: "ok",
    value: { cycleInstanceId, epistemicItemId },
  };
}

/**
 * Fail-closed server revalidation. Does not invent or retarget another Reservation.
 */
export function validateReservationInteractionContext(input: {
  claimed: ReservationInteractionContextInput;
  /** Active / applicable cycle for this Product turn (Truth C). */
  activeCycleInstanceId: string | null | undefined;
  items: readonly EpistemicItem[];
}): ReservationInteractionValidationResult {
  const cycleId = input.activeCycleInstanceId?.trim() || "";
  if (!cycleId) {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_CYCLE_MISMATCH",
      message:
        "Aucun cycle actif pour traiter cette réserve. Revenez au cycle courant, puis réessayez.",
    };
  }
  if (input.claimed.cycleInstanceId !== cycleId) {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_CYCLE_MISMATCH",
      message:
        "Le contexte de réserve ne correspond plus au cycle actif. Rouvrez « Traiter avec Nora » depuis la réserve du cycle courant.",
    };
  }
  const item = input.items.find(
    (i) => i.epistemicItemId === input.claimed.epistemicItemId,
  );
  if (!item) {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_NOT_FOUND",
      message:
        "Cette réserve n’existe plus. Actualisez le Journal, puis réessayez.",
    };
  }
  if (item.type !== "Reservation") {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_WRONG_TYPE",
      message: "L’élément ciblé n’est pas une réserve.",
    };
  }
  if (!reservationBelongsToCycle(item, cycleId)) {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_CYCLE_MISMATCH",
      message:
        "Cette réserve n’appartient pas au cycle actif. Rouvrez le traitement depuis le Journal du cycle courant.",
    };
  }
  if (item.status !== "active") {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_NOT_ACTIVE",
      message:
        "Cette réserve n’est plus active. Actualisez le Journal avant de poursuivre.",
    };
  }
  const title =
    item.reservation?.title?.trim() || item.statement?.trim() || "Réserve";
  return {
    ok: true,
    value: {
      kind: "reservation_resolution",
      cycleInstanceId: cycleId,
      epistemicItemId: item.epistemicItemId,
      ordinal: item.reservation?.ordinal ?? null,
      title,
    },
  };
}

/**
 * RC-02 — human-facing active-cycle label for Reservation proposal context.
 * Uses composed cycle label when present; does not invent a new lookup.
 */
export function formatReservationActiveCycleFacingLabel(
  cycleLabel: string | null | undefined,
): string {
  const t = typeof cycleLabel === "string" ? cycleLabel.trim() : "";
  if (!t) return "Cycle actif";
  if (/\bacti[fv]\b/i.test(t)) return t;
  return `${t} actif`;
}

```

### NEW/UPDATED FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/reservationContextPilotConfirmation.d0.test.ts`

```typescript
/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — structured binding + F2-hijack guard.
 * RC-01 — absent ≠ present-malformed fail-closed.
 */
import { describe, expect, it } from "vitest";
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import {
  formatReservationActiveCycleFacingLabel,
  parseReservationInteractionContextInput,
  validateReservationInteractionContext,
} from "@/features/project-assistant/reservationInteractionContext";
import { resolveTransitionReadiness } from "@/features/project-assistant/f2/transitionReadiness";
import { formatReservationFocusForPrompt } from "@/lib/nora-cognitive-runtime/reservationPrompt";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

const ACTOR = {
  actorId: "actor:test",
  displayName: "Test",
  role: "system" as const,
};

function reservationItem(
  overrides: Partial<EpistemicItem> & Pick<EpistemicItem, "epistemicItemId">,
): EpistemicItem {
  return {
    schemaVersion: "0.1.0-oa",
    type: "Reservation",
    status: "active",
    statement: "Rappels exclus V1",
    createdBy: ACTOR,
    createdAt: "2026-09-25T00:00:00.000Z",
    relatedObjects: ["prj:test", "cyc:active"],
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prov:t",
      actor: ACTOR,
      source: "system",
      timestamp: "2026-09-25T00:00:00.000Z",
      correlationId: "cor:t",
      projectId: "prj:test",
      cycleInstanceId: "cyc:active",
    },
    reservation: {
      ordinal: 3,
      title: "Rappels V1",
      summary: "Exclure rappels de V1",
      impact: "major",
      attentionBy: "before_finalization",
      finalizationRelevance: "must_resolve",
      rationale: "Scope V1",
      resolutionCondition: "Rappels explicitement exclus",
      journalEntryRefs: [],
      sourceTurnRefs: [],
    },
    blocking: true,
    ...overrides,
  };
}

function actionableAnalysis(): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:cadrage",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    continuationKind: null,
    artifactMaterializationOperation: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
  };
}

describe("RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 binding", () => {
  it("CR-RCP-01 / RC-01 — absent → generic path; malformed → INVALID; valid → ok", () => {
    expect(parseReservationInteractionContextInput(undefined)).toEqual({
      status: "absent",
    });
    expect(parseReservationInteractionContextInput(null)).toEqual({
      status: "absent",
    });

    for (const hostile of [
      "hostile",
      [],
      {},
      { cycleInstanceId: "cyc:a" },
      { epistemicItemId: "epi:x" },
      { cycleInstanceId: "  ", epistemicItemId: "epi:x" },
      { cycleInstanceId: "cyc:a", epistemicItemId: "  " },
      { cycleInstanceId: 1, epistemicItemId: "epi:x" },
      { cycleInstanceId: "cyc:a", epistemicItemId: ["epi:x"] },
    ]) {
      const parsed = parseReservationInteractionContextInput(hostile);
      expect(parsed.status).toBe("invalid");
      if (parsed.status === "invalid") {
        expect(parsed.code).toBe("RESERVATION_CONTEXT_INVALID");
      }
    }

    expect(
      parseReservationInteractionContextInput({
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:1",
      }),
    ).toEqual({
      status: "ok",
      value: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:1",
      },
    });
  });

  it("CR-RCP-02 — server revalidation binds exact active Reservation", () => {
    const item = reservationItem({ epistemicItemId: "epi:rsv:1" });
    const ok = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:1",
      },
      activeCycleInstanceId: "cyc:active",
      items: [item],
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.value).toMatchObject({
      kind: "reservation_resolution",
      cycleInstanceId: "cyc:active",
      epistemicItemId: "epi:rsv:1",
      ordinal: 3,
      title: "Rappels V1",
    });
  });

  it("CR-RCP-03 — stale / foreign / inactive / wrong-type fail closed (no retarget)", () => {
    const active = reservationItem({ epistemicItemId: "epi:rsv:1" });
    const otherCycle = reservationItem({
      epistemicItemId: "epi:rsv:2",
      relatedObjects: ["prj:test", "cyc:other"],
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:t",
        actor: ACTOR,
        source: "system",
        timestamp: "2026-09-25T00:00:00.000Z",
        correlationId: "cor:t",
        projectId: "prj:test",
        cycleInstanceId: "cyc:other",
      },
    });
    const resolved = reservationItem({
      epistemicItemId: "epi:rsv:3",
      status: "resolved",
    });
    const observation: EpistemicItem = {
      ...active,
      epistemicItemId: "epi:obs",
      type: "Observation",
      reservation: undefined,
    };

    expect(
      validateReservationInteractionContext({
        claimed: {
          cycleInstanceId: "cyc:stale",
          epistemicItemId: "epi:rsv:1",
        },
        activeCycleInstanceId: "cyc:active",
        items: [active],
      }).ok,
    ).toBe(false);

    const missing = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:missing",
      },
      activeCycleInstanceId: "cyc:active",
      items: [active],
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.code).toBe("RESERVATION_CONTEXT_NOT_FOUND");

    const foreign = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:2",
      },
      activeCycleInstanceId: "cyc:active",
      items: [otherCycle],
    });
    expect(foreign.ok).toBe(false);
    if (!foreign.ok) expect(foreign.code).toBe("RESERVATION_CONTEXT_CYCLE_MISMATCH");

    const inactive = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:3",
      },
      activeCycleInstanceId: "cyc:active",
      items: [resolved],
    });
    expect(inactive.ok).toBe(false);
    if (!inactive.ok) expect(inactive.code).toBe("RESERVATION_CONTEXT_NOT_ACTIVE");

    const wrongType = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:obs",
      },
      activeCycleInstanceId: "cyc:active",
      items: [observation],
    });
    expect(wrongType.ok).toBe(false);
    if (!wrongType.ok) expect(wrongType.code).toBe("RESERVATION_CONTEXT_WRONG_TYPE");
  });

  it("CR-RCP-04 — Reservation focus forces advisory F1 (blocks generic F2 hijack)", () => {
    const without = resolveTransitionReadiness({
      analysis: actionableAnalysis(),
      forceRepoInformative: false,
    });
    expect(without.formalizationReady).toBe(true);

    const withFocus = resolveTransitionReadiness({
      analysis: actionableAnalysis(),
      forceRepoInformative: true,
    });
    expect(withFocus.formalizationReady).toBe(false);
  });

  it("CR-RCP-05 — focus prompt forbids resolved claims and new Cadrage hijack", () => {
    const section = formatReservationFocusForPrompt({
      epistemicItemId: "epi:rsv:1",
      ordinal: 3,
      title: "Rappels V1",
      resolutionCondition: "Rappels exclus",
      cycleInstanceId: "cyc:active",
      cycleLabel: "Cadrage",
    });
    expect(section).toContain("TRAITEMENT RÉSERVE");
    expect(section).toContain("epi:rsv:1");
    expect(section).toContain("cyc:active");
    expect(section).toMatch(/INTERDIT.*levé/i);
    expect(section).toMatch(/INTERDIT.*Cadrage/i);
    expect(section).toContain("PROPOSE_RESOLUTION");
    expect(section).not.toMatch(/émets RESOLVE/i);
  });

  it("RC-02 — active cycle facing label is human-readable", () => {
    expect(formatReservationActiveCycleFacingLabel("Cadrage")).toBe(
      "Cadrage actif",
    );
    expect(formatReservationActiveCycleFacingLabel("Cadrage actif")).toBe(
      "Cadrage actif",
    );
    expect(formatReservationActiveCycleFacingLabel(null)).toBe("Cycle actif");
    expect(formatReservationActiveCycleFacingLabel("")).toBe("Cycle actif");
  });
});

```

### NEW/UPDATED FILE: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/reservationContextProposal.ui.test.tsx`

```typescript
/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — Proposal surface presentation.
 * RC-02 — human-facing cycle label; no generic DÉCISION REQUISE semantics.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";

afterEach(() => {
  cleanup();
});

function baseController(
  overrides: Partial<ProductConversationController> = {},
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "ANSWERED",
    error: null,
    modeLabel: "Fixture",
    ephemeralNotice: "",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: {
      turnKind: "f1_informative",
      intentClass: "informative",
      qualification: null,
      proposal: null,
      decision: null,
      labels: {
        recommendation: null,
        proposition: "PROPOSITION",
        decisionRequired: null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: false,
      processLocalNotice: "process-local",
    },
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    transcriptAvailability: "empty",
    openContinuityPresentation: { kind: "none" },
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusTurnId: null,
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    clearFocusTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    gateOpen: false,
    recommendationFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    qualificationFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    durableOutcomeFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    reservationResolutionProposal: {
      epistemicItemId: "epi:rsv:1",
      cycleInstanceId: "cyc:active",
      cycleLabel: "Cadrage",
      ordinal: 3,
      title: "Rappels V1",
      proposed: true,
    },
    clearReservationResolutionProposal: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

describe("Reservation resolution proposal surface", () => {
  it("CR-RCP-10 / RC-02 — human cycle label + Confirmation Pilote; Confirmer once", () => {
    const onConfirm = vi.fn();
    render(
      <ConversationSurface
        controller={baseController()}
        onConfirmReservationResolve={onConfirm}
      />,
    );

    expect(screen.getByTestId("reservation-resolution-proposal")).toBeTruthy();
    const context = screen.getByTestId("reservation-resolution-context");
    expect(context.textContent).toMatch(/Réserve 3/);
    expect(context.textContent).toMatch(/Cadrage actif/);
    expect(context.textContent).not.toMatch(/cyc:active/);
    expect(screen.getByText("Proposition de levée")).toBeTruthy();
    expect(
      screen.getByTestId("reservation-pilot-confirmation-required").textContent,
    ).toMatch(/Confirmation Pilote requise/i);
    expect(screen.queryByText("DÉCISION REQUISE")).toBeNull();
    expect(screen.getByTestId("reservation-no-auto-resolve")).toBeTruthy();
    expect(screen.queryByTestId("project-assistant-qualification")).toBeNull();
    expect(screen.queryByTestId("product-authority-path-guidance")).toBeNull();
    // Technical id retained for metadata/tests, not primary context.
    expect(screen.getByTestId("reservation-resolution-cycle-id").textContent).toBe(
      "cyc:active",
    );

    fireEvent.click(
      screen.getByTestId("reservation-confirm-from-proposal-epi:rsv:1"),
    );
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onConfirm).toHaveBeenCalledWith("epi:rsv:1");
  });

  it("CR-RCP-11 — insufficient basis: context without Confirmer CTA", () => {
    render(
      <ConversationSurface
        controller={baseController({
          reservationResolutionProposal: {
            epistemicItemId: "epi:rsv:1",
            cycleInstanceId: "cyc:active",
            cycleLabel: "Cadrage",
            ordinal: 3,
            title: "Rappels V1",
            proposed: false,
          },
          f2: {
            turnKind: "f1_informative",
            intentClass: "informative",
            qualification: null,
            proposal: null,
            decision: null,
            labels: {
              recommendation: null,
              proposition: null,
              decisionRequired: null,
              decisionTaken: null,
              noExecution: "AUCUNE EXÉCUTION",
            },
            executionBlocked: false,
            processLocalNotice: "process-local",
          },
        })}
        onConfirmReservationResolve={vi.fn()}
      />,
    );

    expect(screen.getByText("Traitement de réserve")).toBeTruthy();
    expect(
      screen.queryByTestId("reservation-confirm-from-proposal-epi:rsv:1"),
    ).toBeNull();
    expect(
      screen.queryByTestId("reservation-pilot-confirmation-required"),
    ).toBeNull();
  });

  it("RC-02 — hostile DÉCISION REQUISE chip suppressed under Reservation proposal", () => {
    render(
      <ConversationSurface
        controller={baseController({
          f2: {
            turnKind: "f1_informative",
            intentClass: "informative",
            qualification: null,
            proposal: null,
            decision: null,
            labels: {
              recommendation: null,
              proposition: "PROPOSITION",
              decisionRequired: "DÉCISION REQUISE",
              decisionTaken: null,
              noExecution: "AUCUNE EXÉCUTION",
            },
            executionBlocked: false,
            processLocalNotice: "process-local",
          },
        })}
      />,
    );
    expect(screen.queryByText("DÉCISION REQUISE")).toBeNull();
    expect(
      screen.getByTestId("reservation-pilot-confirmation-required"),
    ).toBeTruthy();
  });
});

```


## 9. Acceptance / RC matrix

| ID | Result |
|----|--------|
| RC-01 absent → generic allowed | PASS |
| RC-01 malformed → RESERVATION_CONTEXT_INVALID | PASS |
| RC-01 valid → validate path | PASS |
| RC-01 stale/foreign/inactive/wrong-type | PASS |
| RC-02 human cycle label primary | PASS |
| RC-02 no primary cyc:* | PASS |
| RC-02 Confirmation Pilote requise | PASS |
| RC-02 no DÉCISION REQUISE for Reservation | PASS |
| RC-02 Confirmer la levée once | PASS |
| Subject continuity / PROPOSE / Pilot affordance | PASS |
| L/R projections unchanged | PASS |

## 10. Tests / validations

```
targeted RC + Reservation suites → 5 files / 30 tests PASS
broader adjacent suite → 47 files / 529 tests PASS
npm run typecheck → PASS
npm run lint → PASS
npm run build → PASS
  (interim failure: client import of reservationInteractionContext pulled node:path —
   fixed by inlining pure facing-label helper in ConversationSurface)
```

## 11. Product / UI proof

REAL StudyFlow / LIVE OpenAI Product sequence: **NOT AUTHORIZED / NOT EXECUTED**
Deterministic UI tests cover RC-02 presentation.

## 12. Remaining reserves

- StudyFlow campaign reproof after project Git integration
- Global semantic Reservation quality NOT PROVEN until natural Product reproof
- Nora Cognitive Completion NOT COMPLETE / NOT PROVEN

## 13. Morris decisions / forbidden actions

- Same-macro correction only; no architecture pivot; no new store; no protected edits
- Project Git actions: **NONE**
- Review Handoff L3 is the only authorized remote publication

## 14. Anti-claims

- runtime v3 = NON ADOPTED
- READY FOR REAL global = NO
- Nora Cognitive Completion = NOT COMPLETE / NOT PROVEN
- global semantic Reservation quality = NOT PROVEN until natural Product reproof

## 15. Final verdict

RESERVATION CONTEXT CONTINUITY & PILOT CONFIRMATION — SAME-MACRO CORRECTION PASS
RC-01 MALFORMED CONTEXT FAIL-CLOSED — PASS
RC-02 RESERVATION PILOT SEMANTICS — PASS
RESERVATION SUBJECT CONTINUITY — PASS
PROPOSE_RESOLUTION MATERIALIZATION — PASS
PILOT CONFIRMATION AFFORDANCE — PASS
NORA AUTO-RESOLUTION — NOT OBSERVED AT TESTED SCOPE
GENERIC F2 HIJACK — NOT OBSERVED AT TESTED SCOPE
LEFT/RIGHT RESERVATION PROJECTIONS — UNCHANGED
PRODUCT CODE VALIDATIONS — PASS
REVIEW HANDOFF — see remote verification after publish (report actual SHA/blob)

PROJECT COMMIT — NOT AUTHORIZED
PROJECT PUSH — NOT AUTHORIZED
PR — NOT AUTHORIZED
MERGE — NOT AUTHORIZED

NEXT: ChatGPT re-review. Only after PASS may a distinct Morris gate open for project commit + push + PR. REAL StudyFlow reproof remains after integration/post-merge verification.
