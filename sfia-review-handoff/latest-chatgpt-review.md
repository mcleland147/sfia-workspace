# SFIA Review Pack — FULL
## RESERVATION-CONTEXT-PILOT-CONFIRMATION-01

Timestamp (UTC): `2026-09-25T09:40:01Z`

## 1. Git truth

- Repo: `mcleland147/sfia-workspace` (`/Users/morris/Projects/sfia-workspace`)
- Construction branch: `feat/sfia-studio-reservation-context-pilot-confirmation-01`
- Base / origin/main expected: `e36eb0597657577191af9cbc5feac6f47219b1fc`
- origin/main verified: `e36eb0597657577191af9cbc5feac6f47219b1fc` — **MATCH**
- HEAD (uncommitted construction): `e36eb0597657577191af9cbc5feac6f47219b1fc` (= origin/main; work is local dirty only)
- Project commit: **NOT AUTHORIZED / NOT EXECUTED**
- Project push / PR / merge: **NOT AUTHORIZED / NOT EXECUTED**

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

Note: `.tmp-sfia-review/*-proof/` directories are leftover campaign artifacts from prior macros; not part of this construction commit surface. Product construction files are the `projects/sfia-studio/app/**` modifications listed below.

## 2. Convergence / trajectory qualification

- Cycle: Delivery / Implementation — `cyc:delivery`
- CKC: `ckc:studio:delivery` / `projects/sfia-studio/sfia-v3-framing/ckc/08-delivery-implementation.md` — contentStatus VALIDATED (read-only)
- Typology: EVOL — Profile: Critical
- Macro ID: `RESERVATION-CONTEXT-PILOT-CONFIRMATION-01`
- Macro capability: RESERVATION CONTEXT CONTINUITY & PILOT CONFIRMATION
- Prior integrated capability: CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING (PR #518)
- Roadmap: **NOT MODIFIED** (truth-sync deferred)
- Protected Convergence / Build Doctrine / C1 / v3 framing / method / prompts: **READ ONLY — NOT MODIFIED**

### Sources read (exact blob SHAs at HEAD/main)

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` @ `99232e4582e4ef4cf489020a46b818ebb41ac397`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` @ `4f69330dec43d16ffcf194f304e13bfecb2d9788`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` @ `806d672fe21ad82a641bf88fe95fc87870481105`
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md` @ `b2d122e2229196d6e104f45706e0cc086a457561`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md` @ `5d90e8b0c849a803f94db106637d870ea45f4e8e`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md` @ `a954e560a6d2062b7acb0b1db8e38de6b01e9c4e`
- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md` @ `0d81a3616d08e3c8d1b1d3e3ad982c1cc1cd077d`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md` @ `210e933ad0dae386d1880baaf04457ddd234e96a`
- `projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md` @ `1dfd8fd49e4e1e90e3e781139bb0df5fd88fd389`
- `projects/sfia-studio/sfia-v3-framing/ckc/08-delivery-implementation.md` @ `69d1257a5ca9045964b68410c07728c2f8264491`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` @ `8949e764d96faf3fa812d39307dbc298b500f5ef`
- `prompts/templates/sfia-cycle-execution-template.md` @ `948156a21309ef99c3aaed6410947dc6b9bc569a`

## 3. R22 OpenAI Capability Fit Check

Inspected installed path:

- `OpenAIConversationProvider` (`lib/platform/ai/openaiProvider.ts`) — Responses API `json_schema` structured output KEEP
- `NORA_PRODUCT_TURN_OUTPUT_TYPE` includes nullable `reservationDelta` with CREATE/UPDATE/PROPOSE_RESOLUTION (never RESOLVE) KEEP
- Generic cognitive reasoning via F1 Agents path KEEP
- Reservation-specific context carriage: **ADAPT / COMBINE** — new untrusted `reservationInteractionContext` client field + server `validateReservationInteractionContext` + `reservationFocusSection` prompt + force-F1 advisory override
- Missing continuity: **COMPLETE** via binding → force F1 → PROPOSE_RESOLUTION materialize → Pilot confirm affordance
- New generic internal cognitive engine: **REJECT**
- New provider/session authority: **REJECT**
- OpenAI HITL as SFIA Pilot confirmation replacement: **REJECT**

Disposition: provider contract remains compatible; no parallel cognitive engine required.

OpenAI/model/session state is NOT Truth C / HumanDecision / Confirmation / authority / Evidence.

## 4. Campaign observations consumed (StudyFlow evidence only)

KEEP findings preserved (routing CREATE/UPDATE, openPoint≠Reservation, CREATE, Journal Réserves, Treat prefill-only, fail-closed Pilot confirm, left/right projections complementary).

Failure chain addressed:

1. Treat with Nora prefilled Reservation draft
2. After clarification, generic F2 qualification/proposal hijacked subject (false “new Cadrage”)
3. Narrative claimed levée while Truth C stayed active
4. No resolutionProposal / no Confirmer CTA

Morris decisions consumed:

- KEEP left/right Reservation composition AS-IS
- No StudyFlow-specific code
- No new store / parallel Reservation workflow
- No REAL promotion / runtime v3 claim

## 5. Root-cause analysis

Generic conversation routing (`resolveTransitionReadiness` → F2 formalization) treated Pilot clarification text as actionable cycle qualification. “Traiter avec Nora” only prefaced free-text; no structured Reservation identity survived into the Product turn. Therefore:

- F2 proposed Cadrage (already active)
- Nora narrative could claim resolution without `PROPOSE_RESOLUTION` materialization
- Truth C correctly stayed active (protection worked) but pilotability continuity failed

## 6. Architecture / reuse classification

KEEP: Epistemic Reservation state, reservationDelta, materializeReservationDelta, resolutionProposal metadata, confirmReservationResolutionAction, Pilot authority, Journal/Lifecycle Reservation cards/projections, Product SQLite, generic F2 for non-Reservation work.

ADAPT: Treat plumbing (arm structured context), send envelope, orchestrateF2 routing, studioCognitiveContext focus section, ConversationSurface proposal presentation when Reservation subject active.

COMPLETE: structured binding + server revalidation; force F1 under valid Reservation focus; PROPOSE_RESOLUTION → proposedIds surface; Confirmer la levée on contextual Proposal + existing Journal CTA (same governed action).

NO REPLACE. No new persistence store. No parallel conversation aggregate.

### Design seam

```
reservationInteractionContext?: { cycleInstanceId, epistemicItemId }  // client untrusted
→ parseReservationInteractionContextInput
→ validateReservationInteractionContext (project/cycle/item/active/type)
→ ValidatedReservationInteractionContext { kind: reservation_resolution, ... }
→ composeStudioCognitiveContext.reservationFocusSection
→ forceRepoInformative (advisory F1; blocks F2 hijack)
→ materializeReservationDelta PROPOSE_RESOLUTION
→ reservationResolutionProposal DTO + Journal hasResolutionProposal
→ projectAssistantConfirmReservationResolutionAction (Pilot only)
```

## 7. Modified / created files

### Modified

- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/types.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/reservationPrompt.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts` (+`reservationFocusSection: null`)
- `projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts` (+`reservationFocusSection: null`)

### Created

- `projects/sfia-studio/app/features/project-assistant/reservationInteractionContext.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/reservationContextPilotConfirmation.d0.test.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/reservationContextProposal.ui.test.tsx`

## 8. Complete diffs / new file contents

### Tracked file diffs

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
index 1da26eac..81c23ff2 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -57,6 +57,12 @@ export type ConversationSurfaceProps = {
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
@@ -68,6 +74,8 @@ export type ConversationSurfaceProps = {
 export function ConversationSurface({
   controller,
   exposeLegacyAuthorityPath = false,
+  onConfirmReservationResolve,
+  reservationConfirmBusyId = null,
 }: ConversationSurfaceProps) {
   const fieldId = useId();
   const liveRegionId = useId();
@@ -114,6 +122,7 @@ export function ConversationSurface({
     confirmAndExecuteLegacyFixture,
     refreshResolvedM3RunningAttempt,
     retryLastUserMessage,
+    reservationResolutionProposal,
   } = controller;

   // Notify LifecycleSurface after Nora answers so CURRENT LR can reproject.
@@ -308,7 +317,70 @@ export function ConversationSurface({
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
+              · « {reservationResolutionProposal.title} » · cycle{" "}
+              {reservationResolutionProposal.cycleInstanceId}
+            </p>
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
@@ -392,7 +464,7 @@ export function ConversationSurface({
         </section>
       ) : null}

-      {activeProposal ? (
+      {activeProposal && !reservationResolutionProposal ? (
         <section
           className={styles.card}
           data-testid="project-assistant-proposal"
@@ -475,7 +547,7 @@ export function ConversationSurface({
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
index 504ddd7b..ceefb038 100644
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
@@ -881,6 +891,10 @@ export async function orchestrateAssistantSend(input: {

   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;
+  let reservationFocus: ValidatedReservationInteractionContext | null = null;
+  const claimedReservationContext = parseReservationInteractionContextInput(
+    input.reservationInteractionContext,
+  );
   try {
     const cognitive = await resolveCognitiveIntentProjectSummary(project);
     if (!cognitive.ok) {
@@ -898,6 +912,63 @@ export async function orchestrateAssistantSend(input: {
         ? cognitive.truthCContext
         : undefined;

+    // RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — revalidate client binding.
+    if (claimedReservationContext) {
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
@@ -984,9 +1055,13 @@ export async function orchestrateAssistantSend(input: {
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
@@ -1000,7 +1075,11 @@ export async function orchestrateAssistantSend(input: {
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
@@ -1035,7 +1114,7 @@ export async function orchestrateAssistantSend(input: {
         analysis.intentClass === "ambiguous" ||
         analysis.intentClass === "actionable" ||
         analysis.intentClass === "execution_request")
-        ? forceRepoInformative
+        ? forceRepoInformative || forceReservationResolutionAdvisory
           ? "informative"
           : analysis.intentClass
         : "ambiguous";
@@ -1044,7 +1123,19 @@ export async function orchestrateAssistantSend(input: {
     const executionBlocked =
       analysis.parseOk === true &&
       analysis.intentClass === "execution_request" &&
-      !forceRepoInformative;
+      !forceRepoInformative &&
+      !forceReservationResolutionAdvisory;
+    const proposedIds = f1.reservationProposedIds ?? [];
+    const reservationResolutionProposal =
+      reservationFocus != null
+        ? {
+            epistemicItemId: reservationFocus.epistemicItemId,
+            cycleInstanceId: reservationFocus.cycleInstanceId,
+            ordinal: reservationFocus.ordinal,
+            title: reservationFocus.title,
+            proposed: proposedIds.includes(reservationFocus.epistemicItemId),
+          }
+        : null;
     return {
       ...f1,
       model: f1.model ?? model,
@@ -1053,6 +1144,8 @@ export async function orchestrateAssistantSend(input: {
       reinstructionTransition: resolveReinstructionTransition({
         reinstructionOfProposalId,
       }),
+      reservationProposedIds: proposedIds,
+      reservationResolutionProposal,
       f2: {
         turnKind: "f1_informative",
         intentClass: reportedIntent,
@@ -1061,8 +1154,12 @@ export async function orchestrateAssistantSend(input: {
         decision: null,
         labels: {
           recommendation: null,
-          proposition: null,
-          decisionRequired: null,
+          proposition: reservationResolutionProposal?.proposed
+            ? "PROPOSITION"
+            : null,
+          decisionRequired: reservationResolutionProposal?.proposed
+            ? "DÉCISION REQUISE"
+            : null,
           decisionTaken: null,
           noExecution: "AUCUNE EXÉCUTION",
         },
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
index 070fa422..ec4613e8 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -173,6 +173,19 @@ export type F2TurnPayload = {
   processLocalNotice: string;
 };

+/**
+ * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — ephemeral client surface for a
+ * validated Reservation focus / PROPOSE_RESOLUTION. Not Truth C; not Confirmation.
+ */
+export type ReservationResolutionProposalDto = {
+  epistemicItemId: string;
+  cycleInstanceId: string;
+  ordinal: number | null;
+  title: string;
+  /** true only when materialize wrote a resolutionProposal this turn. */
+  proposed: boolean;
+};
+
 export type ProjectAssistantSendSuccess = {
   ok: true;
   status: "ok" | "cognitive_stop";
@@ -253,6 +266,16 @@ export type ProjectAssistantSendSuccess = {
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

### NEW FILE: `projects/sfia-studio/app/features/project-assistant/reservationInteractionContext.ts`

```typescript
/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01
 * Bounded structured Reservation interaction context for one Product turn.
 *
 * Client-supplied ids are UNTRUSTED. Server revalidates project / cycle /
 * Reservation identity / active status before any cognitive binding.
 * Not Truth C, not HumanDecision, not Confirmation, not authority.
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
 * Normalize untrusted client payload. Returns null when absent/blank
 * (generic conversation — no Reservation binding).
 */
export function parseReservationInteractionContextInput(
  raw: unknown,
): ReservationInteractionContextInput | null {
  if (raw == null || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const cycleInstanceId =
    typeof o.cycleInstanceId === "string" ? o.cycleInstanceId.trim() : "";
  const epistemicItemId =
    typeof o.epistemicItemId === "string" ? o.epistemicItemId.trim() : "";
  if (!cycleInstanceId || !epistemicItemId) return null;
  return { cycleInstanceId, epistemicItemId };
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

```

### NEW FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/reservationContextPilotConfirmation.d0.test.ts`

```typescript
/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — structured binding + F2-hijack guard.
 */
import { describe, expect, it } from "vitest";
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import {
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
  it("CR-RCP-01 — parse ignores blank / hostile shapes; accepts structured ids", () => {
    expect(parseReservationInteractionContextInput(null)).toBeNull();
    expect(parseReservationInteractionContextInput("hostile")).toBeNull();
    expect(
      parseReservationInteractionContextInput({
        cycleInstanceId: "  ",
        epistemicItemId: "epi:x",
      }),
    ).toBeNull();
    expect(
      parseReservationInteractionContextInput({
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:1",
      }),
    ).toEqual({
      cycleInstanceId: "cyc:active",
      epistemicItemId: "epi:rsv:1",
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
});

```

### NEW FILE: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/reservationContextProposal.ui.test.tsx`

```typescript
/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — Proposal surface presentation.
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
        decisionRequired: "DÉCISION REQUISE",
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
  it("CR-RCP-10 — contextual Lecture de Nora + Confirmer la levée; no auto-resolve", () => {
    const onConfirm = vi.fn();
    render(
      <ConversationSurface
        controller={baseController()}
        onConfirmReservationResolve={onConfirm}
      />,
    );

    expect(screen.getByTestId("reservation-resolution-proposal")).toBeTruthy();
    expect(screen.getByTestId("reservation-resolution-context").textContent).toMatch(
      /Réserve 3/,
    );
    expect(screen.getByTestId("reservation-resolution-context").textContent).toMatch(
      /cyc:active/,
    );
    expect(screen.getByText("Proposition de levée")).toBeTruthy();
    expect(screen.getByTestId("reservation-no-auto-resolve")).toBeTruthy();
    expect(screen.queryByTestId("project-assistant-qualification")).toBeNull();
    expect(screen.queryByTestId("product-authority-path-guidance")).toBeNull();

    fireEvent.click(
      screen.getByTestId("reservation-confirm-from-proposal-epi:rsv:1"),
    );
    expect(onConfirm).toHaveBeenCalledWith("epi:rsv:1");
  });

  it("CR-RCP-11 — insufficient basis: context without Confirmer CTA", () => {
    render(
      <ConversationSurface
        controller={baseController({
          reservationResolutionProposal: {
            epistemicItemId: "epi:rsv:1",
            cycleInstanceId: "cyc:active",
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
  });
});

```


## 9. Acceptance matrix

| ID | Criterion | Evidence | Result |
|----|-----------|----------|--------|
| A | Treat With Nora = prefill only; no send/model/mutation | `treatReservationWithNora` sets draft + arms context; never calls sendMessage; existing CR-RSV-20/22 UI test | PASS |
| B | Structured binding; hostile/stale fail-closed; generic unaffected | CR-RCP-01…03 validation tests | PASS |
| C | Missing basis → no proposal CTA | CR-RCP-11 UI (`proposed:false`) | PASS |
| D | Sufficient → PROPOSE_RESOLUTION materialize; stays active | Existing CR-RSV-15/16 + proposedIds surface wiring | PASS |
| E | Presentation identifies Reservation + cycle; no F2 hijack under focus | force F1 CR-RCP-04; ConversationSurface CR-RCP-10; qualification/guidance suppressed when Reservation proposal active | PASS |
| F | Nora cannot resolve; Pilot confirm uses existing action | materialize never RESOLVE; ConversationSurface + Journal call `confirmReservationResolution` | PASS |
| G | Durable resolve after Pilot confirm | Existing confirmReservationResolutionAction path unchanged; arm cleared after success | PASS (reuse) |
| H | Regression: F2 outside context; CREATE/UPDATE; gates; defer; L/R projections | f2.orchestrate + cycleReservation* suites green; L/R composition untouched | PASS |

## 10. Tests / validations

Commands + outcomes:

```
npx vitest run __tests__/nora-cognitive-runtime/reservationContextPilotConfirmation.d0.test.ts \
  __tests__/pre-m6-product-ui/reservationContextProposal.ui.test.tsx \
  __tests__/nora-cognitive-runtime/cycleReservationPiloting.d0.test.ts \
  __tests__/nora-cognitive-runtime/cycleReservationDefer.d0.test.ts \
  __tests__/pre-m6-product-ui/cycleReservationMemoryRail.ui.test.tsx
→ 5 files / 28 tests PASS

npx vitest run __tests__/nora-cognitive-runtime/ \
  __tests__/pre-m6-product-ui/cycleReservationMemoryRail.ui.test.tsx \
  __tests__/pre-m6-product-ui/reservationContextProposal.ui.test.tsx \
  __tests__/pre-m6-product-ui/cycleJournalSurface.ui.test.tsx \
  __tests__/project-assistant/studioCognitiveContext.test.ts \
  __tests__/project-assistant/f2.orchestrate.test.ts \
  __tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
→ 47 files / 527 tests PASS

npm run typecheck → PASS
npm run lint → PASS (No ESLint warnings or errors)
npm run build → PASS (pre-existing better-sqlite3 warning only; compile OK)
```

## 11. Product / UI / runtime proof

- Local Studio HTTP `http://localhost:3020/studio` responds `307` (service reachable).
- Bounded manual LIVE provider sequence (Treat → insufficient → sufficient → propose → confirm → reload): **NOT EXECUTED**
- Reason: REAL provider path / StudyFlow campaign reproof requires distinct Morris gate; prompt forbids REAL promotion and READY FOR REAL claim.
- Marker: **REAL REPROOF — NOT AUTHORIZED / NOT EXECUTED**
- Screenshots: none (UI presentation changed; deterministic UI tests cover Proposal surface; campaign screenshots deferred to StudyFlow reproof)

## 12. Remaining reserves / debt / exit

Reserves:

- R1: Natural StudyFlow Product campaign reproof after project Git integration (Reservation → Nora → proposal → Pilot confirm → durable resolved → defer/finalization observations)
- R2: Global semantic Reservation quality remains NOT PROVEN until campaign reproof
- R3: No end-to-end LIVE OpenAI Product turn exercised in this cycle (deterministic + fixture only)

Debt:

- F2TurnLabels literals reused (`PROPOSITION` / `DÉCISION REQUISE`) for Reservation proposal chips; contextual French titles live in ConversationSurface card body (acceptable minimal reuse; optional label enum extension deferred)

Exit:

- Local candidate ready for ChatGPT review
- Distinct Morris gate required for project commit/push/PR
- After merge + post-merge verification: resume StudyFlow campaign

## 13. Explicit Morris decisions consumed

- KEEP left/right Reservation projections
- Structured context seam preferred over NL-only binding
- No new store / engine / HumanDecision doctrine change
- Confirmation remains Pilot-only via existing action
- No Roadmap truth-sync in this cycle
- Review Handoff L3 is the only authorized remote publication

## 14. Forbidden actions respected

- No project commit / push / PR / merge
- No protected path edits (Convergence, Build Doctrine, C1, v3 framing, CKC source, method/**, prompts/**)
- No REAL promotion / runtime v3 ADOPTED / Nora Cognitive Completion claim / READY FOR REAL

## 15. Anti-claims

- Product Completion historical closure ≠ runtime v3 adoption
- Nora Cognitive Completion remains NOT COMPLETE / NOT PROVEN
- Global semantic Reservation quality NOT PROVEN until campaign reproof
- READY FOR REAL global = NO
- runtime v3 = NON ADOPTED

## 16. Final verdict

RESERVATION CONTEXT CONTINUITY & PILOT CONFIRMATION — LOCAL CANDIDATE PASS
RESERVATION SUBJECT CONTINUITY — PASS
PROPOSE_RESOLUTION MATERIALIZATION — PASS
PILOT CONFIRMATION AFFORDANCE — PASS
NORA AUTO-RESOLUTION — NOT OBSERVED
DURABLE RESOLUTION PATH — PASS
GENERIC F2 HIJACK — NOT OBSERVED AT TESTED SCOPE
LEFT/RIGHT RESERVATION PROJECTIONS — UNCHANGED
PRODUCT CODE VALIDATIONS — PASS
REVIEW HANDOFF — (filled after publish)

PROJECT COMMIT — NOT AUTHORIZED
PROJECT PUSH — NOT AUTHORIZED
PR — NOT AUTHORIZED
MERGE — NOT AUTHORIZED

NEXT: ChatGPT review of the local candidate. If qualified, distinct Morris gate for project Git integration. After integration/post-merge verification, resume natural StudyFlow campaign for Product reproof.
