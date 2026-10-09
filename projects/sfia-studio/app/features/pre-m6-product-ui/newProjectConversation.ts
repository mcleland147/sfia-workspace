/**
 * P6-HQA-NEWPROJECT-01 — New Project conversation surface helpers.
 *
 * Cognitive turns are provider-backed via runNewProjectOnboardingTurn.
 * This module keeps UI helpers + a thin compatibility surface for prior tests.
 * Scripted phase machine is no longer the REAL conversation path.
 */

export {
  INTENTION_STARTERS,
  emptyDraft,
  isMinimumSufficient,
  studioCanCreate,
  openingNoraTurn,
  objectiveFromDraft,
  startingPointFromDraft,
  understoodPointsFromDraft,
  composerPlaceholder,
  provisionalNameFromIntention,
  buildProductContextHandoff,
  mergeCognitiveIntoDraft,
  type PreProjectDraft,
  type ChatTurn,
} from "./newProjectOnboardingContract";

import type { PreProjectDraft } from "./newProjectOnboardingContract";
import {
  emptyDraft,
  provisionalNameFromIntention,
} from "./newProjectOnboardingContract";

/** @deprecated Phase labels retained for data-testid compatibility only. */
export type CollectPhase =
  | "INTENTION_REQUIRED"
  | "NAME_REQUIRED"
  | "OPTIONAL_CONTEXT";

export type CollectField = "name" | "intention";

export function collectPhaseOf(draft: PreProjectDraft): CollectPhase {
  if (!draft.intention.trim()) return "INTENTION_REQUIRED";
  if (!draft.name.trim()) return "NAME_REQUIRED";
  return "OPTIONAL_CONTEXT";
}

/**
 * Local absorb — used only for deterministic unit fixtures that do not call
 * the provider. Production UI uses newProjectOnboardingTurnAction instead.
 */
export function absorbUserTurn(
  draft: PreProjectDraft,
  raw: string,
  _phase?: CollectPhase,
): PreProjectDraft {
  void _phase;
  const text = raw.replace(/\u0000/g, "").trim().slice(0, 4000);
  if (!text) return draft;
  const next: PreProjectDraft = {
    ...draft,
    intention: draft.intention.trim()
      ? `${draft.intention}\n${text}`.slice(0, 4000)
      : text,
    intentionKind: "project_direction",
    cognitiveTurns: Math.max(draft.cognitiveTurns, 1),
  };
  if (!next.objective.trim()) next.objective = next.intention;
  if (!next.name.trim()) {
    next.name = provisionalNameFromIntention(next.intention);
    next.nameProvisional = true;
  }
  next.cognitiveCreateProposal = true;
  return next;
}

export function reopenField(
  draft: PreProjectDraft,
  field: CollectField,
): PreProjectDraft {
  if (field === "name") {
    return {
      ...draft,
      name: "",
      nameProvisional: false,
      cognitiveCreateProposal: false,
    };
  }
  return {
    ...draft,
    intention: "",
    objective: "",
    cognitiveCreateProposal: false,
  };
}

/** @deprecated Presentation helper — prefer composerPlaceholder(draft). */
export function nextNoraPrompt(phase: CollectPhase): string {
  switch (phase) {
    case "INTENTION_REQUIRED":
      return "Qu’est-ce que tu veux accomplir avec ce nouveau projet ?";
    case "NAME_REQUIRED":
      return "Quel nom voulez-vous donner à ce projet ?";
    case "OPTIONAL_CONTEXT":
      return "On peut créer le projet dès que tu es prêt — dis-moi si tu veux préciser autre chose.";
  }
}

export function proposeNameFromIntention(intention: string): string | null {
  const t = intention.trim();
  if (!t) return null;
  return provisionalNameFromIntention(t);
}

export function noraTurnAfter(): never {
  throw new Error(
    "noraTurnAfter removed — use newProjectOnboardingTurnAction / runNewProjectOnboardingTurn",
  );
}

export function resetDraftForTests(): PreProjectDraft {
  return emptyDraft();
}
