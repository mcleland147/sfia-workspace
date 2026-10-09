# SFIA Review Pack — FULL CRITICAL
# P6 Chat-First First Framing — Critical Correction Pass (CP-01 / CP-02 / CP-03)

## Meta
- Date / heure : 2026-10-09 22:34:43 CEST
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone : P6 — GLOBAL INTEGRATED PRODUCT QA
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Chantier : P6 Human QA — First Framing / Governed Lifecycle Continuity
- Cycle type : 8 — Delivery / implémentation
- Profil SFIA : Critical
- Typologie : INC / EVOL — Correction Pass local
- GO Morris consommé : Correction Pass ciblé AUTORISÉ ; REAL provider NON ; Human QA REAL NON ; push/PR/merge projet NON ; doctrine/Figma/Cursor REAL flag NON
- Handoff parent : e81dd383950af191a07da435ba9213959979a9f2
- Capacité : V3-F05 (+ F02 / F06 / F11-F12)
- Lien Roadmap : P6 QA existant — pas de nouvelle vague Product

## Git truth (entrée = inchangé vs handoff e81dd383)
- Repository : /Users/morris/Projects/sfia-workspace
- Branche : qa/sfia-studio-p6-global-integrated-product-qa
- HEAD : db45e9c4c17cbe35dff543eee0f366af81026c55
- origin/main : 60247eb21074c5e7be76e09bcb66d850926ded1e
- Handoff distant connu : e81dd383950af191a07da435ba9213959979a9f2
- Status entrée : candidate Delivery Option 1 + PR573 locals + C14 + p6-campaign + tmp préservés ; aucun staged
- Préservation : OUI — aucun reset/clean/stash

## Diagnostic CP-01 (confirmé puis corrigé)
```
projectAssistantSendAction
  → orchestrateAssistantSend
  → interpretPilotNarrativeStance / resolveChatFirstStartRouting
  → readFramingContinuity (Product phase)
  → [BUG antérieur] ready_to_start laissé à F01 « plus bas »
       mais resolveTransitionReadiness exige candidateCycleTypeId + signals
       → F1 advisory → F01 jamais atteint
  → [FIX] si phase ready_to_start && attempt_start
       → resolveChatFirstCycleStartGate (même gate F01)
       → LPS reload → f1_informative
```
transitionReadiness.ts : **non modifié** (contrat général intact).

## Findings
| ID | Statut | Preuve |
|---|---|---|
| CP-01 START conversationnel | CORRIGÉ | early F01 sur ready_to_start ; front-door « Je souhaite démarrer… » avec signals=null |
| CP-02 Preuve front-door | CORRIGÉ | chatFirstFramingContinuity.frontDoor.d0.test.ts via projectAssistantSendAction |
| CP-03 Nora / UX | CORRIGÉ | jargon retiré ; carte « Vous décidez » ; active → surfaces LPS + notice system ; resume turn activeCycleInstanceId |

## Fichiers (Correction Pass)
### Modifiés
- `orchestrateF2.ts` — CP-01 early F01 + messages pilot-facing
- `chatFirstFramingContinuity.ts` — copy pilot-facing
- `FramingContinuityCard.tsx` — dé-jargon
- `ConversationSurface.tsx` — slot sans active/jargon
- `useProductConversation.ts` — clear card on active ; system notice

### Nouveaux / étendus
- `chatFirstFramingContinuity.frontDoor.d0.test.ts` (NEW)
- tests d0 + UI mis à jour

### Non touchés (préservés)
- buildProjectSystemPrompt / qualToGovernedCycle (PR573)
- p6-qa-integration-state-and-reserves (C14)
- transitionReadiness.ts
- resolveChatFirstCycleStartGate.ts (REUSE)

## Contenu modifié exploitable

### chatFirstFramingContinuity.ts (FULL)
```ts
/**
 * P6 chat-first first Framing continuity — pure phase classification.
 * Does not mutate Product. Does not invent HumanDecision / START.
 *
 * Phases map Rec CURRENT → candidate → decision → prepared → active
 * using existing OA objects only.
 */

export type FramingContinuityPhase =
  | "idle"
  | "recommendation_ready"
  | "awaiting_trajectory_decision"
  | "trajectory_decided_prepare_cycle"
  | "ready_to_start"
  | "active"
  | "blocked_no_recommendation"
  | "blocked_stale_or_incomplete";

export type FramingContinuitySnapshot = {
  readonly phase: FramingContinuityPhase;
  readonly catalogLabel: string | null;
  readonly targetCycleTypeId: string | null;
  readonly recommendationId: string | null;
  readonly semanticKey: string | null;
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly presentationDigest: string | null;
  readonly approvalOptionLabel: string | null;
  readonly preparedCycleInstanceId: string | null;
  readonly activeCycleInstanceId: string | null;
  readonly hasCurrentNextCycleRecommendation: boolean;
  readonly message: string;
};

/** Pilot-facing copy — no internal governance jargon. */
export function framingContinuityPilotMessage(
  phase: FramingContinuityPhase,
  catalogLabel: string | null,
): string {
  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
  switch (phase) {
    case "recommendation_ready":
      return `Je recommande de commencer par un « ${cycle} » exploratoire. Vous pouvez préparer cette direction, puis la valider avant tout démarrage.`;
    case "awaiting_trajectory_decision":
      return `La trajectoire proposée pour « ${cycle} » est prête à examiner. Validez cette direction pour continuer — un simple « ok » ne suffit pas.`;
    case "trajectory_decided_prepare_cycle":
      return `La direction pour « ${cycle} » est validée. Préparez le cycle, puis démarrez-le quand vous serez prêt.`;
    case "ready_to_start":
      return `Le cycle « ${cycle} » est prêt. Vous pouvez le démarrer dans la conversation.`;
    case "active":
      return `Le « ${cycle} » est maintenant actif.`;
    case "blocked_no_recommendation":
      return `Aucune recommandation courante n'est disponible pour préparer le premier cycle. Reformulez avec Nora.`;
    case "blocked_stale_or_incomplete":
      return `La recommandation ou la trajectoire n'est plus à jour. Aucun démarrage n'est engagé.`;
    case "idle":
    default:
      return "";
  }
}

/**
 * Deterministic phase from already-loaded Product facts.
 * Callers must not invent CURRENT / digest / prepared ids.
 */
export function classifyFramingContinuityPhase(input: {
  readonly activeCycleInstanceId: string | null | undefined;
  readonly hasCurrentNextCycleRecommendation: boolean;
  readonly candidatePresent: boolean;
  readonly candidateProvenanceResolved: boolean;
  readonly awaitingDecisionPresentation: boolean;
  readonly decidedTrajectoryPresent: boolean;
  readonly preparedCompletePresent: boolean;
}): FramingContinuityPhase {
  const active = (input.activeCycleInstanceId ?? "").trim();
  if (active) return "active";
  if (input.preparedCompletePresent) return "ready_to_start";
  if (input.decidedTrajectoryPresent) return "trajectory_decided_prepare_cycle";
  if (input.awaitingDecisionPresentation) return "awaiting_trajectory_decision";
  if (input.candidatePresent && !input.candidateProvenanceResolved) {
    return "blocked_stale_or_incomplete";
  }
  if (input.hasCurrentNextCycleRecommendation) return "recommendation_ready";
  return "blocked_no_recommendation";
}

```

### FramingContinuityCard.tsx (FULL)
```tsx
"use client";

/**
 * P6 chat-first Framing continuity card — inline ConversationSurface.
 * Pure projection + authorized callbacks. Does not invent HD / START.
 * Visual language aligns with P3 GovernedDecisionCard / Recommendation frames.
 * Pilot-facing copy only — no internal governance jargon.
 */

import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import styles from "./GovernedDecisionCard.module.css";

export type FramingContinuityCardProps = {
  readonly continuity: FramingContinuitySnapshot;
  readonly busy: boolean;
  readonly error: string | null;
  readonly onPrepareCandidate: () => void;
  readonly onApproveCandidate: () => void;
  readonly onPrepareCycle: () => void;
  readonly onStartPrepared: () => void;
  readonly onKeepExploring?: () => void;
};

export function FramingContinuityCard({
  continuity,
  busy,
  error,
  onPrepareCandidate,
  onApproveCandidate,
  onPrepareCycle,
  onStartPrepared,
  onKeepExploring,
}: FramingContinuityCardProps) {
  const cycle = (continuity.catalogLabel ?? "").trim() || "Cadrage";
  const phase = continuity.phase;

  if (
    phase === "idle" ||
    phase === "active" ||
    phase === "blocked_no_recommendation" ||
    phase === "blocked_stale_or_incomplete"
  ) {
    return null;
  }

  const title =
    phase === "recommendation_ready"
      ? `Commencer par un « ${cycle} » exploratoire`
      : phase === "awaiting_trajectory_decision"
        ? `Examiner la trajectoire pour « ${cycle} »`
        : phase === "trajectory_decided_prepare_cycle"
          ? `Préparer le cycle « ${cycle} »`
          : phase === "ready_to_start"
            ? `Démarrer « ${cycle} »`
            : continuity.message || `Continuer vers « ${cycle} »`;

  const optionBody =
    phase === "awaiting_trajectory_decision"
      ? continuity.approvalOptionLabel?.trim() ||
        `Valider cette direction pour « ${cycle} ».`
      : continuity.message;

  const primaryLabel =
    phase === "recommendation_ready"
      ? busy
        ? "Préparation…"
        : "Préparer cette direction"
      : phase === "awaiting_trajectory_decision"
        ? busy
          ? "Enregistrement…"
          : "Valider cette direction"
        : phase === "trajectory_decided_prepare_cycle"
          ? busy
            ? "Préparation…"
            : "Préparer le cycle"
          : phase === "ready_to_start"
            ? busy
              ? "Démarrage…"
              : `Démarrer le ${cycle}`
            : null;

  const primaryDisabled =
    busy ||
    (phase === "awaiting_trajectory_decision" &&
      !continuity.presentationDigest);

  function onPrimary() {
    if (phase === "recommendation_ready") onPrepareCandidate();
    else if (phase === "awaiting_trajectory_decision") onApproveCandidate();
    else if (phase === "trajectory_decided_prepare_cycle") onPrepareCycle();
    else if (phase === "ready_to_start") onStartPrepared();
  }

  return (
    <section
      className={styles.card}
      data-testid="framing-continuity-card"
      data-phase={phase}
      aria-labelledby="framing-continuity-title"
    >
      <p className={styles.label}>
        {phase === "awaiting_trajectory_decision"
          ? "Décision"
          : phase === "ready_to_start"
            ? "Démarrage"
            : "Recommandation"}
      </p>
      <h3
        id="framing-continuity-title"
        className={styles.title}
        data-testid="framing-continuity-title"
      >
        {title}
      </h3>
      <p className={styles.youDecide} data-testid="framing-continuity-authority">
        Vous décidez
      </p>
      <div className={styles.optionBlock}>
        <p className={styles.optionEyebrow}>Prochaine étape</p>
        <p className={styles.optionBody} data-testid="framing-continuity-body">
          {optionBody}
        </p>
      </div>
      {error ? (
        <p
          className={styles.error}
          role="alert"
          data-testid="framing-continuity-error"
        >
          {error}
        </p>
      ) : null}
      <div className={styles.actions}>
        {primaryLabel ? (
          <button
            type="button"
            className={styles.primary}
            data-testid="framing-continuity-primary"
            disabled={primaryDisabled}
            onClick={onPrimary}
          >
            {primaryLabel}
          </button>
        ) : null}
        {onKeepExploring &&
        (phase === "recommendation_ready" ||
          phase === "awaiting_trajectory_decision") ? (
          <button
            type="button"
            className={styles.tertiary}
            data-testid="framing-continuity-keep-exploring"
            disabled={busy}
            onClick={onKeepExploring}
          >
            Continuer à explorer
          </button>
        ) : null}
      </div>
    </section>
  );
}

```

### orchestrateF2.ts — Framing continuity / CP-01 diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index b8823e65..8c16dfe1 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -84,6 +84,7 @@ import {
   resolveChatFirstCycleStartGate,
   resolveChatFirstStartRouting,
 } from "./resolveChatFirstCycleStartGate";
+import { interpretPilotNarrativeStance } from "./composeF2PilotFacingNarrative";
 import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
@@ -1493,6 +1494,229 @@ export async function orchestrateAssistantSend(input: {
     }
   }
 
+  // P6 chat-first Framing continuity — Rec→prepare without inventing HD.
+  // CP-01: when a unique COMPLETE prepared cycle is ready, accept_start must
+  // reach resolveChatFirstCycleStartGate HERE — transitionReadiness may still
+  // be false (missing candidateCycleTypeId / signals) and must not strand START.
+  {
+    const oaForFraming = getRuntimeApplicationService().oa;
+    if (oaForFraming) {
+      const {
+        projectAssistantReadFramingContinuityAction,
+        projectAssistantAdvanceFramingContinuityAction,
+      } = await import("../preCycleCandidateTrajectoryActions");
+      const snap = await projectAssistantReadFramingContinuityAction({
+        projectId: project.projectId,
+      });
+      if (snap.ok && snap.continuity) {
+        const phase = snap.continuity.phase;
+        const productCycleLabel =
+          snap.continuity.catalogLabel ??
+          (analysis.candidateCycleTypeId
+            ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+            : null) ??
+          analysis.candidateCycleTypeId ??
+          null;
+        const framingStance = interpretPilotNarrativeStance({
+          userContent: content,
+          cycleLabel: productCycleLabel,
+          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        });
+        const startRoutingEarly = resolveChatFirstStartRouting({
+          userContent: content,
+          cycleLabel: productCycleLabel,
+          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        });
+
+        // Already active + explicit START → honest no-op (do not strand on missing signals).
+        if (phase === "active" && startRoutingEarly.kind === "attempt_start") {
+          const cycle = productCycleLabel?.trim() || "Cadrage";
+          const activeId = snap.continuity.activeCycleInstanceId;
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: activeId
+              ? `Le cycle « ${cycle} » est déjà actif sur le projet (${activeId}). Aucun second démarrage n'a été engagé.`
+              : `Un cycle « ${cycle} » est déjà actif. Aucun second démarrage n'a été engagé.`,
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f1_informative",
+          });
+        }
+
+        // CP-01 — prepared cycle + explicit START → same F01 gate as formalization path.
+        if (
+          phase === "ready_to_start" &&
+          startRoutingEarly.kind === "attempt_start" &&
+          snap.continuity.targetCycleTypeId
+        ) {
+          await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
+          const startGate = await resolveChatFirstCycleStartGate({
+            oa: oaForFraming,
+            projectId: project.projectId,
+            targetCycleTypeId: snap.continuity.targetCycleTypeId,
+            cycleLabel: productCycleLabel ?? "Cadrage",
+          });
+          const reloadedAfterGate = await loadProjectRuntimeForAssistant(
+            project.projectId,
+          );
+          if (reloadedAfterGate.ok) project = toContextDto(reloadedAfterGate);
+          if (startGate.kind === "started") {
+            if (!reloadedAfterGate.ok) {
+              project = {
+                ...project,
+                activeCycleInstanceId: startGate.activeCycleInstanceId,
+                ...(typeof startGate.lpsVersionAfter === "number"
+                  ? { lpsVersion: startGate.lpsVersionAfter }
+                  : {}),
+              };
+            }
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: startGate.message,
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f1_informative",
+            });
+          }
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: startGate.message,
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+
+        // Prepared but not an explicit START — never auto-start from recommendation accept.
+        if (
+          phase === "ready_to_start" &&
+          (framingStance.kind === "accept_recommendation" ||
+            startRoutingEarly.kind === "suppress_mint")
+        ) {
+          const cycle = productCycleLabel?.trim() || "Cadrage";
+          const text =
+            startRoutingEarly.kind === "suppress_mint"
+              ? startRoutingEarly.message
+              : `Le cycle « ${cycle} » est préparé. Pour le démarrer, indiquez explicitement que vous souhaitez démarrer — un simple accord sur la recommandation ne démarre rien.`;
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              text,
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+
+        const wantsFramingProgress =
+          framingStance.kind === "accept_start" ||
+          framingStance.kind === "accept_recommendation";
+        if (wantsFramingProgress) {
+          if (phase === "recommendation_ready") {
+            const advanced = await projectAssistantAdvanceFramingContinuityAction(
+              {
+                projectId: project.projectId,
+                step: "prepare_candidate",
+              },
+            );
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: [
+                presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+                advanced.ok
+                  ? (advanced.continuity?.message ??
+                    "Trajectoire proposée — validez-la dans la carte avant tout démarrage.")
+                  : (advanced.message ??
+                    "Préparation de trajectoire refusée — aucune décision inventée."),
+              ].join(" "),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_clarification",
+            });
+          }
+          if (phase === "awaiting_trajectory_decision") {
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: [
+                presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+                snap.continuity.message,
+                "Validez cette direction dans la carte — un simple « ok » ne suffit pas.",
+              ].join(" "),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_clarification",
+            });
+          }
+          if (phase === "trajectory_decided_prepare_cycle") {
+            const advanced = await projectAssistantAdvanceFramingContinuityAction(
+              {
+                projectId: project.projectId,
+                step: "prepare_cycle",
+              },
+            );
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: [
+                presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+                advanced.ok
+                  ? (advanced.continuity?.message ??
+                    "Cycle préparé — vous pouvez le démarrer dans la conversation.")
+                  : (advanced.message ?? "Préparation du cycle refusée."),
+              ].join(" "),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_clarification",
+            });
+          }
+        }
+      }
+    }
+  }
+
   // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
   // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
   const forceRepoInformative =

```

### useProductConversation.ts diff
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 73225dc7..b9c7ff94 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -47,6 +47,7 @@ import type {
   ActiveDecisionSubjectReadResult,
   CurrentGovernedExecutionContinuityResult,
 } from "@/features/project-assistant/w2/types";
+import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
 
 export type ProductDecisionSubjectContinuity =
   | { readonly status: "pending" }
@@ -165,6 +166,13 @@ export function useProductConversation({
   const [governedMomentError, setGovernedMomentError] = useState<string | null>(
     null,
   );
+  /** P6 chat-first Framing continuity (Rec → traj decision → prepare → START). */
+  const [framingContinuity, setFramingContinuity] =
+    useState<FramingContinuitySnapshot | null>(null);
+  const [framingContinuityBusy, setFramingContinuityBusy] = useState(false);
+  const [framingContinuityError, setFramingContinuityError] = useState<
+    string | null
+  >(null);
   const [reservesText, setReservesText] = useState("");
   const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
   const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
@@ -371,6 +379,95 @@ export function useProductConversation({
     };
   }, [projectId, durableRefreshSignal]);
 
+  async function refreshFramingContinuity() {
+    try {
+      const { projectAssistantReadFramingContinuityAction } = await import(
+        "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+      );
+      const result = await projectAssistantReadFramingContinuityAction({
+        projectId,
+      });
+      if (!result.ok || !result.continuity) {
+        setFramingContinuity(null);
+        return;
+      }
+      const phase = result.continuity.phase;
+      if (
+        phase === "idle" ||
+        phase === "blocked_no_recommendation" ||
+        phase === "blocked_stale_or_incomplete" ||
+        phase === "active"
+      ) {
+        // Active cycle is reflected by LPS / Lifecycle surfaces + system notice.
+        // Do not present a synthetic Nora analysis for the transition.
+        setFramingContinuity(null);
+        setFramingContinuityError(null);
+        return;
+      }
+      setFramingContinuity(result.continuity);
+    } catch {
+      setFramingContinuity(null);
+    }
+  }
+
+  async function advanceFramingContinuity(
+    step:
+      | "prepare_candidate"
+      | "approve_candidate"
+      | "prepare_cycle"
+      | "start_prepared",
+  ) {
+    if (framingContinuityBusy) return;
+    setFramingContinuityBusy(true);
+    setFramingContinuityError(null);
+    try {
+      const { projectAssistantAdvanceFramingContinuityAction } = await import(
+        "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+      );
+      const digest =
+        step === "approve_candidate"
+          ? (framingContinuity?.presentationDigest ?? undefined)
+          : undefined;
+      const result = await projectAssistantAdvanceFramingContinuityAction({
+        projectId,
+        step,
+        presentationDigest: digest,
+      });
+      if (!result.ok) {
+        setFramingContinuityError(
+          result.message ?? result.code ?? "Action refusée.",
+        );
+        await refreshFramingContinuity();
+        return;
+      }
+      if (result.continuity) setFramingContinuity(result.continuity);
+      else await refreshFramingContinuity();
+      notifyDurableFactsChanged();
+      await refreshGovernedMoments();
+      if (result.activeCycleInstanceId) {
+        const label =
+          result.continuity?.catalogLabel?.trim() ||
+          framingContinuity?.catalogLabel?.trim() ||
+          "Cadrage";
+        setMessages((prev) => [
+          ...prev,
+          {
+            id: nextId("system"),
+            role: "system",
+            content:
+              result.message?.trim() ||
+              `Le « ${label} » est maintenant actif. Vous pouvez poursuivre dans la conversation.`,
+          },
+        ]);
+        setFramingContinuity(null);
+      }
+    } catch {
+      setFramingContinuityError("Impossible d'avancer la continuité de cadrage.");
+    } finally {
+      setFramingContinuityBusy(false);
+    }
+  }
+
   async function refreshGovernedMoments() {
     try {
       const {
@@ -397,6 +494,7 @@ export function useProductConversation({
       } else {
         setGovernedExecutionContinuity(continuity);
       }
+      await refreshFramingContinuity();
     } catch {
       setGovernedMomentError("Impossible de relire le moment gouverné.");
     }
@@ -931,6 +1029,12 @@ export function useProductConversation({
         }),
       );
       setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
+      if (
+        result.lifecycleRecommendationMaterialized === true ||
+        result.lifecycleRecommendationCode
+      ) {
+        void refreshFramingContinuity();
+      }
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       setMessages((prev) => [
         ...prev,
@@ -1244,6 +1348,22 @@ export function useProductConversation({
     inspectGovernedContract,
     confirmGovernedContract,
     refreshGovernedMoments,
+    framingContinuity,
+    framingContinuityBusy,
+    framingContinuityError,
+    refreshFramingContinuity,
+    prepareFramingCandidate: () => {
+      void advanceFramingContinuity("prepare_candidate");
+    },
+    approveFramingCandidate: () => {
+      void advanceFramingContinuity("approve_candidate");
+    },
+    prepareFramingCycle: () => {
+      void advanceFramingContinuity("prepare_cycle");
+    },
+    startFramingPrepared: () => {
+      void advanceFramingContinuity("start_prepared");
+    },
     reservesText,
     setReservesText,
     f3Prepare,
```

### ConversationSurface.tsx diff
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 7cfbcf82..ac65f9c9 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -35,6 +35,7 @@ import {
   GovernedDecisionCard,
   presentGovernedDecisionNoraPreface,
 } from "./GovernedDecisionCard";
+import { FramingContinuityCard } from "./FramingContinuityCard";
 import { GovernedConfirmationCard } from "./GovernedConfirmationCard";
 import styles from "./ConversationSurface.module.css";
 
@@ -201,6 +202,13 @@ export function ConversationSurface({
     revealGovernedDecisionAlternate,
     inspectGovernedContract,
     confirmGovernedContract,
+    framingContinuity,
+    framingContinuityBusy,
+    framingContinuityError,
+    prepareFramingCandidate,
+    approveFramingCandidate,
+    prepareFramingCycle,
+    startFramingPrepared,
     reservesText,
     setReservesText,
     f3Prepare,
@@ -834,6 +842,34 @@ export function ConversationSurface({
           </p>
         </aside>
       ) : null}
+      {framingContinuity &&
+      framingContinuity.phase !== "idle" &&
+      framingContinuity.phase !== "active" &&
+      framingContinuity.phase !== "blocked_no_recommendation" &&
+      framingContinuity.phase !== "blocked_stale_or_incomplete" ? (
+        <div
+          className={styles.governedMomentSlot}
+          data-testid="framing-continuity-slot"
+        >
+          <p className={styles.noraMomentLabel}>Nora</p>
+          <p className={styles.noraMomentBody}>
+            {framingContinuity.message ||
+              "Poursuivez dans la conversation pour préparer le prochain cycle."}
+          </p>
+          <FramingContinuityCard
+            continuity={framingContinuity}
+            busy={framingContinuityBusy}
+            error={framingContinuityError}
+            onPrepareCandidate={prepareFramingCandidate}
+            onApproveCandidate={approveFramingCandidate}
+            onPrepareCycle={prepareFramingCycle}
+            onStartPrepared={startFramingPrepared}
+            onKeepExploring={() => {
+              composerInputRef.current?.focus();
+            }}
+          />
+        </div>
+      ) : null}
       {boundAwaitingDecision ? (
         <div
           className={styles.governedMomentSlot}
```

### preCycleCandidateTrajectoryActions — framing Read/Advance (tail)
```ts
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    activeCycleInstanceId: result.activeCycleInstanceId,
    lpsVersionAfter: result.lpsVersionAfter,
  };
}

/**
 * P6 chat-first Framing — read-only continuity snapshot for ConversationSurface.
 * Reuses prepare/read/approval/start readers. Never invents CURRENT or digests.
 */
export async function projectAssistantReadFramingContinuityAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  continuity?: import("./f2/chatFirstFramingContinuity").FramingContinuitySnapshot;
}> {
  const {
    classifyFramingContinuityPhase,
    framingContinuityPilotMessage,
  } = await import("./f2/chatFirstFramingContinuity");

  const pre = await projectAssistantReadPreCycleCandidateTrajectoryAction({
    projectId: input.projectId,
  });
  if (!pre.ok) {
    return { ok: false, code: pre.code, message: pre.message };
  }

  const approval =
    await projectAssistantReadCandidateTrajectoryApprovalPresentationAction({
      projectId: input.projectId,
    });

  const prepared = await readPreparedTrajectoryCycleAction({
    projectId: input.projectId,
  });

  const hasCurrent = pre.hasCurrentNextCycleRecommendation === true;
  const candidate = pre.candidate ?? null;
  const presentation =
    approval.ok && approval.presentation ? approval.presentation : null;
  const alreadyDecided =
    approval.ok && approval.alreadyDecided ? approval.alreadyDecided : null;
  const preparedCycle =
    prepared.ok && prepared.prepared ? prepared.prepared : null;

  const phase = classifyFramingContinuityPhase({
    activeCycleInstanceId: pre.activeCycleInstanceId,
    hasCurrentNextCycleRecommendation: hasCurrent,
    candidatePresent: candidate != null,
    candidateProvenanceResolved: candidate?.provenanceStatus === "RESOLVED",
    awaitingDecisionPresentation: presentation != null,
    decidedTrajectoryPresent:
      alreadyDecided != null &&
      alreadyDecided.prepareBlockedReason !== "cycle_type_already_completed",
    preparedCompletePresent: preparedCycle != null,
  });

  const catalogLabel =
    presentation?.catalogLabel ??
    alreadyDecided?.catalogLabel ??
    preparedCycle?.catalogLabel ??
    candidate?.catalogLabel ??
    null;
  const targetCycleTypeId =
    presentation?.targetCycleTypeId ??
    alreadyDecided?.targetCycleTypeId ??
    preparedCycle?.cycleTypeId ??
    candidate?.targetCycleTypeId ??
    null;

  return {
    ok: true,
    continuity: {
      phase,
      catalogLabel,
      targetCycleTypeId,
      recommendationId:
        presentation?.recommendationId ?? candidate?.recommendationId ?? null,
      semanticKey: presentation?.semanticKey ?? candidate?.semanticKey ?? null,
      trajectoryId:
        presentation?.trajectoryId ??
        alreadyDecided?.trajectoryId ??
        preparedCycle?.trajectoryId ??
        candidate?.trajectoryId ??
        null,
      trajectoryVersion:
        presentation?.displayCandidateVersionHint ??
        alreadyDecided?.version ??
        preparedCycle?.trajectoryVersion ??
        candidate?.version ??
        null,
      presentationDigest: presentation?.presentationDigest ?? null,
      approvalOptionLabel: presentation?.approvalOptionLabel ?? null,
      preparedCycleInstanceId: preparedCycle?.cycleInstanceId ?? null,
      activeCycleInstanceId: pre.activeCycleInstanceId ?? null,
      hasCurrentNextCycleRecommendation: hasCurrent,
      message: framingContinuityPilotMessage(phase, catalogLabel),
    },
  };
}

/**
 * One deterministic advancement step for chat-first Framing continuity.
 * - prepare candidate from CURRENT Rec (no HD)
 * - prepare cycle from decided trajectory (no HD)
 * - start prepared cycle (Pilote authority via existing START facade)
 * Never auto-approves HumanDecision.
 */
export async function projectAssistantAdvanceFramingContinuityAction(input: {
  projectId: string;
  /**
   * Explicit step. Client must not invent digests.
   * approve requires presentationDigest from server presentation.
   */
  step:
    | "prepare_candidate"
    | "approve_candidate"
    | "prepare_cycle"
    | "start_prepared";
  presentationDigest?: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  continuity?: import("./f2/chatFirstFramingContinuity").FramingContinuitySnapshot;
  decisionId?: string;
  cycleInstanceId?: string;
  activeCycleInstanceId?: string | null;
}> {
  if (input.step === "prepare_candidate") {
    const prepared = await projectAssistantPrepareCandidateTrajectoryAction({
      projectId: input.projectId,
    });
    if (!prepared.ok) {
      return {
        ok: false,
        code: prepared.code,
        message: prepared.message ?? "Préparation de trajectoire refusée.",
      };
    }
  } else if (input.step === "approve_candidate") {
    const digest = (input.presentationDigest ?? "").trim();
    if (!digest) {
      return {
        ok: false,
        code: "PRESENTATION_DIGEST_REQUIRED",
        message:
          "Digest d'approbation manquant — aucune HumanDecision n'a été inventée.",
      };
    }
    const approved =
      await projectAssistantApprovePreCycleCandidateTrajectoryAction({
        projectId: input.projectId,
        presentationDigest: digest,
      });
    if (!approved.ok) {
      return {
        ok: false,
        code: approved.code,
        message: approved.message ?? "Décision de trajectoire refusée.",
      };
    }
    // Deterministic follow-up: prepare cycle when trajectory is decided.
    const cyclePrep = await prepareCycleFromValidatedTrajectoryAction({
      projectId: input.projectId,
    });
    if (!cyclePrep.ok) {
      const snap = await projectAssistantReadFramingContinuityAction({
        projectId: input.projectId,
      });
      return {
        ok: true,
        code: "DECISION_RECORDED_PREPARE_PENDING",
        message:
          cyclePrep.message ??
          "Décision enregistrée — préparation du cycle encore requise.",
        continuity: snap.ok ? snap.continuity : undefined,
        decisionId: approved.decisionId,
      };
    }
  } else if (input.step === "prepare_cycle") {
    const cyclePrep = await prepareCycleFromValidatedTrajectoryAction({
      projectId: input.projectId,
    });
    if (!cyclePrep.ok) {
      return {
        ok: false,
        code: cyclePrep.code,
        message: cyclePrep.message ?? "Préparation du cycle refusée.",
      };
    }
  } else if (input.step === "start_prepared") {
    const started = await startPreparedTrajectoryCycleAction({
      projectId: input.projectId,
    });
    if (!started.ok) {
      return {
        ok: false,
        code: started.code,
        message: started.message ?? "Démarrage refusé.",
      };
    }
    const snap = await projectAssistantReadFramingContinuityAction({
      projectId: input.projectId,
    });
    return {
      ok: true,
      continuity: snap.ok ? snap.continuity : undefined,
      cycleInstanceId: started.cycleInstanceId,
      activeCycleInstanceId: started.activeCycleInstanceId ?? null,
      message:
        started.catalogLabel != null
          ? `Cycle « ${started.catalogLabel} » démarré.`
          : "Cycle démarré.",
    };
  } else {
    return { ok: false, code: "UNKNOWN_STEP", message: "Étape inconnue." };
  }

  const snap = await projectAssistantReadFramingContinuityAction({
    projectId: input.projectId,
  });
  return {
    ok: true,
    continuity: snap.ok ? snap.continuity : undefined,
    message: snap.continuity?.message,
    activeCycleInstanceId: snap.continuity?.activeCycleInstanceId ?? null,
  };
}
```

### frontDoor test (FULL)
```ts
/** @vitest-environment node */
/**
 * P6 CP-02 — Chat-first Framing continuity via projectAssistantSendAction front-door.
 * Proves Rec → prepare → HD (server digest) → prepare cycle → START (F01) → LPS active
 * → next turn sees active cycle. ZERO REAL provider.
 *
 * Intentional: START analysis omits candidateCycleTypeId/signals so CP-01 is proven
 * (transitionReadiness alone would strand the turn).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  classifyTrajectoryBinding,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";
const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;
let previousMorris: string | undefined;

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function lastUserContent(messages: ProviderChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function demandeCourante(blob: string): string {
  const marker = "Demande courante (à évaluer):";
  const idx = blob.indexOf(marker);
  if (idx < 0) return blob;
  return blob.slice(idx + marker.length).trim();
}

/**
 * Fake Nora — for START utterances deliberately omits cycle/signals
 * so formalization readiness fails and CP-01 early F01 path is required.
 */
class FramingFrontDoorFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  lastUserBlobs: string[] = [];

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.n += 1;
    const current = demandeCourante(lastUserContent(messages));
    this.lastUserBlobs.push(current);
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `frm-fd-${this.n}`,
    };

    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|je\s+confirm\w*.*d[eé]marr)/i.test(
        current,
      );
    const isRefuse =
      /\b(refuse|finalement\s+je\s+refuse|ne\s+d[eé]marre)\b/i.test(current);
    const isMaybe = /\b(peut[- ]?être|éventuellement)\b/i.test(current);
    const isQuestion = /\?/.test(current) || /\b(est[- ]ce|quel\s+est)\b/i.test(current);

    // CP-01 proof: START without formalization fields.
    if (isStart && !isRefuse) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 120),
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
          pilotDecisionCandidate: null,
        })}`,
        usage,
      };
    }

    const actionable = {
      intentClass: isQuestion ? "informative" : "actionable",
      // Delivery catalog — CKC fixture available for post-START Nora resume.
      // Framing OA chain remains covered by chatFirstFramingContinuity.d0.
      candidateCycleTypeId: isQuestion ? null : "cyc:delivery",
      signals: isQuestion
        ? null
        : {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: null,
      objective: "Explorer le cadrage",
      scope: "Sans exécution",
      rephrasedRequest: current.slice(0, 120),
      outOfScope: ["Cursor"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification"],
      expectedOutcome: "Recommandation",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
      continuationKind: null,
      artifactMaterializationOperation: null,
      pilotDecisionCandidate: isRefuse
        ? {
            disposition: "refuse",
            targetKind: "current_recommendation",
            rationale: "refuse",
          }
        : isMaybe
          ? {
              disposition: "ambiguous",
              targetKind: "current_recommendation",
              rationale: "maybe",
            }
          : {
              disposition: "accept",
              targetKind: "current_recommendation",
              rationale: "ok",
            },
    };
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(actionable)}`,
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    return {
      kind: "message",
      text: "[TEST/FAKE · NON LIVE] framing-fd",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "frm-fd-round",
      },
    };
  }
}

async function bootWithCurrentFramingRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "frm-fd-"));
  tempDirs.push(dir);
  const runtime = getRuntimeApplicationService({
    // Product doctrine registry — required for post-START Nora resume CKC.
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`fd-${suffix}`),
    auditMode: "noop",
    productDbPath: path.join(dir, `${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Framing FD ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FD${suffix}`,
    idempotencyKey: `idem:fd-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Narrative Cadrage recommandée.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un Cadrage.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:delivery",
        rationale: "Prochain travail gouverné supportable.",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
  return {
    runtime,
    projectId,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

describe("chat-first Framing continuity — projectAssistantSendAction front-door", () => {
  const provider = new FramingFrontDoorFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    setConversationProviderForTests(provider);
    provider.lastUserBlobs = [];
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
  });

  it("Rec CURRENT → prepare → HD → prepare → START via send (no signals) → LPS + Nora resume context", async () => {
    const { runtime, projectId, sessionDbPath } =
      await bootWithCurrentFramingRec("e2e");
    const oa = runtime.oa!;

    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    // Progress intent — prepare candidate (no HD)
    const progress = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Delivery.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();

    // Accept recommendation again must NOT invent HD / START
    const okRec = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation.",
      sessionDbPath,
      provider,
    });
    expect(okRec.ok).toBe(true);
    if (okRec.ok) {
      expect(okRec.text).not.toMatch(/est maintenant actif/i);
    }
    const lpsIdle = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsIdle.ok).toBe(true);
    if (lpsIdle.ok) {
      expect(lpsIdle.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }

    // Explicit HD via Product server action (same seam as the card) — digest from server
    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      approved.continuity?.phase === "ready_to_start" ||
        approved.continuity?.phase === "trajectory_decided_prepare_cycle",
    ).toBe(true);
    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
      expect(prep.continuity?.phase).toBe("ready_to_start");
    }

    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    expect(ready.continuity?.preparedCycleInstanceId).toBeTruthy();

    // Adversarial: recommendation accept while ready → no START
    const noStartFromRec = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation.",
      sessionDbPath,
      provider,
    });
    expect(noStartFromRec.ok).toBe(true);
    if (noStartFromRec.ok) {
      expect(noStartFromRec.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: hypothetical
    const maybe = await projectAssistantSendAction({
      projectId,
      content: "Démarre peut-être le Delivery.",
      sessionDbPath,
      provider,
    });
    expect(maybe.ok).toBe(true);
    if (maybe.ok) {
      expect(maybe.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: late refuse
    const refuse = await projectAssistantSendAction({
      projectId,
      content: "Je confirme, mais finalement je refuse.",
      sessionDbPath,
      provider,
    });
    expect(refuse.ok).toBe(true);
    if (refuse.ok) {
      expect(refuse.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: question
    const question = await projectAssistantSendAction({
      projectId,
      content: "Quel est l'état du Delivery ?",
      sessionDbPath,
      provider,
    });
    expect(question.ok).toBe(true);
    if (question.ok) {
      expect(question.text).not.toMatch(/est maintenant actif/i);
    }

    const stillReady = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(stillReady.continuity?.phase).toBe("ready_to_start");

    // CP-01 / CP-02 — explicit START through front-door with missing signals
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Delivery.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error("start failed");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();
    expect(start.f2?.turnKind).toBe("f1_informative");

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cycles).toHaveLength(1);
    expect(cycles[0]!.status).toBe("active");
    expect(classifyTrajectoryBinding(cycles[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    expect(classifyTrajectoryBinding(cycles[0]!)).not.toBe("LEGACY_UNBOUND");

    // Idempotent second START
    const again = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Delivery.",
      sessionDbPath,
      provider,
    });
    if (!again.ok) {
      throw new Error(
        `second START unexpected failure: ${again.code ?? ""} ${again.message ?? again.status}`,
      );
    }
    expect(again.text).toMatch(/déjà actif|maintenant actif/i);
    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesFinal).toHaveLength(1);

    // CP-03 — next deterministic turn consumes active cycle context
    const resume = await projectAssistantSendAction({
      projectId,
      content: "Quel est l'état du Delivery ?",
      sessionDbPath,
      provider,
    });
    if (!resume.ok) {
      throw new Error(
        `resume turn unexpected failure: ${resume.code ?? ""} ${resume.message ?? resume.status}`,
      );
    }
    expect(resume.project.activeCycleInstanceId).toBe(
      lps.livingProjectState.activeCycleInstanceId,
    );
  });

  it("START without prepared cycle fails closed via front-door", async () => {
    const { projectId, sessionDbPath } = await bootWithCurrentFramingRec("noprep");
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Delivery.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (start.ok) {
      expect(start.text).not.toMatch(/est maintenant actif/i);
      expect(start.project.activeCycleInstanceId).toBeFalsy();
    }
  });

  it("stale digest never records HD", async () => {
    const { projectId, sessionDbPath } = await bootWithCurrentFramingRec("stale");
    await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Delivery.",
      sessionDbPath,
      provider,
    });
    const stale = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest:
        "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    expect(stale.ok).toBe(false);
    const snap = await projectAssistantReadFramingContinuityAction({ projectId });
    expect(snap.continuity?.phase).toBe("awaiting_trajectory_decision");
  });
});

```

### d0 continuity test (FULL)
```ts
/** @vitest-environment node */
/**
 * P6 chat-first Framing continuity — pure phase + OA front-door reuse.
 * ZERO REAL / ZERO provider.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  classifyFramingContinuityPhase,
  framingContinuityPilotMessage,
} from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
  };
}

async function bootWithCurrentFramingRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "framing-cont-"));
  tempDirs.push(dir);
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`frm-${suffix}`),
    auditMode: "noop",
    productDbPath: path.join(dir, `${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Framing continuity ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FRM${suffix}`,
    idempotencyKey: `idem:frm-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Narrative Cadrage recommandée.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: nextCycleLr(
        "cyc:framing",
        "Envisager un Cadrage.",
      ),
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
  return { runtime, projectId };
}

describe("classifyFramingContinuityPhase", () => {
  it("orders active > prepared > decided > awaiting > recommendation", () => {
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: "cyc:1",
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: true,
        decidedTrajectoryPresent: true,
        preparedCompletePresent: true,
      }),
    ).toBe("active");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: true,
      }),
    ).toBe("ready_to_start");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: true,
        preparedCompletePresent: false,
      }),
    ).toBe("trajectory_decided_prepare_cycle");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: true,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("awaiting_trajectory_decision");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("recommendation_ready");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: false,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("blocked_no_recommendation");
  });

  it("messages stay pilot-facing and never claim START from prose alone", () => {
    const msg = framingContinuityPilotMessage(
      "awaiting_trajectory_decision",
      "Cadrage",
    );
    expect(msg).toMatch(/ok/);
    expect(msg).not.toMatch(/HumanDecision|gate F01|Recommendation ≠/i);
    expect(msg).not.toMatch(/est maintenant actif/i);
    expect(
      framingContinuityPilotMessage("ready_to_start", "Cadrage"),
    ).toMatch(/démarrer/i);
  });
});

describe("chat-first Framing continuity OA bridge", () => {
  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
  });

  it("Rec CURRENT → prepare candidate → awaiting decision (no auto HD)", async () => {
    const { projectId } = await bootWithCurrentFramingRec("prep");
    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.ok).toBe(true);
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    const prepared = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    expect(prepared.ok).toBe(true);
    expect(prepared.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(prepared.continuity?.presentationDigest).toBeTruthy();

    const noDigest = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
    });
    expect(noDigest.ok).toBe(false);
    expect(noDigest.code).toBe("PRESENTATION_DIGEST_REQUIRED");
  });

  it("stale digest refuses HD; opening read does not mutate", async () => {
    const { projectId } = await bootWithCurrentFramingRec("stale");
    const r1 = await projectAssistantReadFramingContinuityAction({ projectId });
    const r2 = await projectAssistantReadFramingContinuityAction({ projectId });
    expect(r1.continuity?.phase).toBe(r2.continuity?.phase);
    expect(r1.continuity?.phase).toBe("recommendation_ready");

    await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    const stale = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    expect(stale.ok).toBe(false);
  });

  it("approve digest → prepare cycle → ready_to_start → START → active", async () => {
    const { projectId } = await bootWithCurrentFramingRec("e2e");
    const prepared = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    expect(prepared.ok).toBe(true);
    const digest = prepared.continuity?.presentationDigest;
    expect(digest).toBeTruthy();

    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: digest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      approved.continuity?.phase === "ready_to_start" ||
        approved.continuity?.phase === "trajectory_decided_prepare_cycle",
    ).toBe(true);

    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const cyclePrep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(cyclePrep.ok).toBe(true);
      expect(cyclePrep.continuity?.phase).toBe("ready_to_start");
    }

    const started = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(started.ok).toBe(true);
    expect(started.activeCycleInstanceId).toBeTruthy();

    const after = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(after.continuity?.phase).toBe("active");
    expect(after.continuity?.activeCycleInstanceId).toBe(
      started.activeCycleInstanceId,
    );

    // Idempotent second START must not invent a second active cycle
    const again = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(again.ok === false || again.activeCycleInstanceId === started.activeCycleInstanceId).toBe(
      true,
    );
  });

  it("START without prepared cycle fails closed", async () => {
    const { projectId } = await bootWithCurrentFramingRec("noprep");
    const started = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(started.ok).toBe(false);
  });
});

```

### UI card test (FULL)
```tsx
/** @vitest-environment jsdom */
/**
 * P6 FramingContinuityCard — presentation only. No OA mutations.
 */
import { describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { FramingContinuityCard } from "@/features/pre-m6-product-ui/surfaces/FramingContinuityCard";
import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";

afterEach(() => {
  cleanup();
});

function snap(
  partial: Partial<FramingContinuitySnapshot> &
    Pick<FramingContinuitySnapshot, "phase">,
): FramingContinuitySnapshot {
  return {
    catalogLabel: "Cadrage",
    targetCycleTypeId: "cyc:framing",
    recommendationId: "rec:1",
    semanticKey: "sk:1",
    trajectoryId: "trj:1",
    trajectoryVersion: 1,
    presentationDigest: "sha256:abc",
    approvalOptionLabel: "Valider la trajectoire initiale Cadrage.",
    preparedCycleInstanceId: null,
    activeCycleInstanceId: null,
    hasCurrentNextCycleRecommendation: true,
    message: "message",
    ...partial,
  };
}

describe("FramingContinuityCard", () => {
  it("recommendation_ready exposes prepare CTA without inventing HD", () => {
    const onPrepare = vi.fn();
    render(
      <FramingContinuityCard
        continuity={snap({ phase: "recommendation_ready" })}
        busy={false}
        error={null}
        onPrepareCandidate={onPrepare}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />,
    );
    expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
      "data-phase",
      "recommendation_ready",
    );
    expect(screen.getByTestId("framing-continuity-authority").textContent).toMatch(
      /Vous décidez/,
    );
    expect(
      screen.getByTestId("framing-continuity-card").textContent,
    ).not.toMatch(/HumanDecision|gate F01|Recommendation ≠/i);
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onPrepare).toHaveBeenCalledTimes(1);
  });

  it("awaiting_trajectory_decision requires digest; keep exploring is non-mutating", () => {
    const onApprove = vi.fn();
    const onKeep = vi.fn();
    const { rerender } = render(
      <FramingContinuityCard
        continuity={snap({
          phase: "awaiting_trajectory_decision",
          presentationDigest: null,
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={onApprove}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
        onKeepExploring={onKeep}
      />,
    );
    expect(screen.getByTestId("framing-continuity-primary")).toBeDisabled();
    fireEvent.click(screen.getByTestId("framing-continuity-keep-exploring"));
    expect(onKeep).toHaveBeenCalledTimes(1);
    expect(onApprove).not.toHaveBeenCalled();

    rerender(
      <FramingContinuityCard
        continuity={snap({ phase: "awaiting_trajectory_decision" })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={onApprove}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
        onKeepExploring={onKeep}
      />,
    );
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onApprove).toHaveBeenCalledTimes(1);
  });

  it("ready_to_start exposes START CTA; active renders nothing", () => {
    const onStart = vi.fn();
    const { rerender } = render(
      <FramingContinuityCard
        continuity={snap({
          phase: "ready_to_start",
          preparedCycleInstanceId: "cyc:prep",
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={onStart}
      />,
    );
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onStart).toHaveBeenCalledTimes(1);

    rerender(
      <FramingContinuityCard
        continuity={snap({
          phase: "active",
          activeCycleInstanceId: "cyc:live",
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />,
    );
    expect(screen.queryByTestId("framing-continuity-card")).toBeNull();
  });
});

```

## Tests exécutés
```
cd projects/sfia-studio/app
npx vitest run \
  __tests__/project-assistant/chatFirstFramingContinuity.d0.test.ts \
  __tests__/project-assistant/chatFirstFramingContinuity.frontDoor.d0.test.ts \
  __tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx \
  __tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryCycleStart.d0.test.ts \
  __tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
```
Résultat : **8 files / 89 tests PASS**

Typecheck : 0 erreur Delivery ; 4 erreurs préexistantes untracked `p6-campaign/` (baseline, non régression)
`git diff --check` : whitespace uniquement dans ancien pack (réinitialisé ici)

## Assertions d'autorité / currentness / F01
- accept_recommendation ≠ START (front-door)
- refuse / maybe / question ≠ START
- digest stale refuse HD
- START sans préparé fail-closed
- START avec signals=null atteint F01 (CP-01)
- LPS activeCycleInstanceId relu ; COMPLETE_TRAJECTORY_BOUND ; pas LEGACY_UNBOUND
- second START → déjà actif
- resume turn : project.activeCycleInstanceId = LPS

## Figma / runtime
- Captures Figma locales : `.tmp-sfia-review/figma/p6-378-2-recommendation.png`, `p6-380-2-decision.png`
- Runtime :3020 **down** → **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** (conformité visuelle forte seulement)
- Contrat code : shell P3, GovernedDecisionCard.module.css, « Vous décidez », CTA contextualisés

## Preuve reprise Nora
- Notice system honnête post-START (pas de prose Nora inventée)
- Carte retirée quand phase=active
- Tour déterministe suivant : `projectAssistantSendAction` avec activeCycleInstanceId présent dans le contexte projet

## Fake / Real
- Niveau : **FRONT-DOOR DETERMINISTIC E2E PROVEN**
- REAL provider : aucun nouvel appel
- SFIA_STUDIO_CURSOR_REAL : non modifié
- Hors scope : REAL BOUNDARY / E2E REAL / P6 PASS / Runtime v3 ADOPTED
- REC-01 CURRENT REAL : **OPEN** (non revalidé)

## Réserves
1. Screenshot runtime manquant
2. REC-01 CURRENT persistence non prouvée
3. Human QA REAL non rejoué
4. Front-door nominal utilise cyc:delivery (CKC fixture) ; chaîne Framing OA reste couverte par d0 cyc:framing

## Dette / exit
Aucune architecture parallèle. Aucune nouvelle capacité Product.

## Capacité suivante / Gates Morris
1. Revue Critical de ce Correction Pass
2. GO distinct Human QA REAL
3. Décision intégration Git séparée

## Verdict
**LOCAL CRITICAL CORRECTION CANDIDATE — READY FOR REVIEW**

Statut : READY WITH RESERVES (visuel runtime + REC-01 + REAL)
Interdit : P6 PASS / REC-01 CLOSED / REAL E2E / Runtime v3 ADOPTED / READY FOR MERGE

## Instruction ChatGPT finale (§9.1)
Lire exclusivement `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` au SHA publié.
Qualifier CP-01/02/03, F01 non contourné, front-door projectAssistantSendAction, absence de jargon Pilote, absence d'architecture parallèle.
Pas de merge/PR/REAL sans nouveau GO Morris.
