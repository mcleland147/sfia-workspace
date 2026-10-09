import type { ProductConversationUiState } from "../hooks/useProductConversation";

export type NoraActivityPhase =
  | "blocked"
  | "start"
  | "activity"
  | "complete"
  | "error"
  | "stopped"
  | "idle";

export type NoraActivityProjection = {
  phase: NoraActivityPhase;
  label: string;
  stopAvailable: boolean;
};

/**
 * P3 START/ACTIVITY/COMPLETE/STOPPED from observable conversation state.
 * STREAMING is not projected — not observable on this path.
 * SOURCE_LOOKUP is not live during send; post-hoc toolEvents stay in disclosure.
 */
export function projectNoraActivity(input: {
  blocked: boolean;
  busy: boolean;
  uiState: ProductConversationUiState;
  stopAvailable?: boolean;
}): NoraActivityProjection {
  const stopAvailable = input.stopAvailable === true;
  if (input.blocked) {
    return {
      phase: "blocked",
      label: "Assistant indisponible — configuration manquante.",
      stopAvailable: false,
    };
  }
  if (input.uiState === "STOPPED") {
    return {
      phase: "stopped",
      label: "Réponse interrompue",
      stopAvailable: false,
    };
  }
  if (input.uiState === "SENDING") {
    return { phase: "start", label: "Nora travaille…", stopAvailable };
  }
  // ANSWERED / ERROR win over a lingering busy latch so the transient
  // in-thread activity block never overlays a completed reply.
  if (input.uiState === "ANSWERED") {
    return { phase: "complete", label: "Réponse prête", stopAvailable: false };
  }
  if (input.uiState === "ERROR_RECOVERABLE") {
    return {
      phase: "error",
      label: "La réponse n’a pas abouti — vous pouvez réessayer.",
      stopAvailable: false,
    };
  }
  if (input.busy) {
    return { phase: "activity", label: "Nora travaille…", stopAvailable };
  }
  return { phase: "idle", label: "Prêt", stopAvailable: false };
}
