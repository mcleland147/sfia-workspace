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
