/**
 * Pure terminal disposition for adaptive cognitive works (A.5).
 * Exported for unit tests — conductor applies the returned status at segment end.
 */

import type { CognitiveProductionState } from "./cognitive-work";
import type { NoraTurnQualification } from "./semantic-qualification";

export type CognitiveWorkTerminalStatus = "OPEN" | "COMPLETE" | "SUSPENDED";

export function resolveCognitiveWorkTerminalStatus(input: {
  suspended: boolean;
  production: Pick<CognitiveProductionState, "status">;
  qualification: NoraTurnQualification | null | undefined;
}): {
  status: CognitiveWorkTerminalStatus;
  awaitPilot: boolean;
  interruptCause: string | null;
} {
  const { suspended, production, qualification } = input;
  const disposition = qualification?.workDisposition;
  const dispositionComplete = disposition === "COMPLETE";
  // CONTINUE = Nora still expects further segments; if the conductor exits without
  // suspension while disposition remains CONTINUE, keep the work OPEN (resumable).
  const dispositionAwait =
    disposition === "AWAIT_PILOT" ||
    disposition === "SUSPEND" ||
    disposition === "CONTINUE";
  const statusNeedsClarification = qualification?.status === "NEEDS_CLARIFICATION";

  const openDeterminantStructured =
    !dispositionComplete &&
    (qualification?.determiningQuestions ?? []).some(
      (q) => q.importance === "DETERMINANT" && q.status === "OPEN",
    );

  // clarifications[] are open questions only when Nora re-evaluated them; stale non-empty
  // lists must not block COMPLETE when workDisposition already says the objective is done.
  const openClarifications =
    !dispositionComplete &&
    (qualification?.clarifications?.length ?? 0) > 0 &&
    (statusNeedsClarification || dispositionAwait);

  // IN_PROGRESS = production réellement engagée — ne pas clôturer.
  // IDLE (défaut emptyProduction kind NONE/REPLY) n'est pas une production applicable
  // en attente : un segment reply-only sans continuation doit pouvoir COMPLETE.
  const productionIncomplete = production.status === "IN_PROGRESS";

  const awaitPilot =
    dispositionAwait ||
    statusNeedsClarification ||
    openDeterminantStructured ||
    openClarifications ||
    productionIncomplete;

  const status: CognitiveWorkTerminalStatus = suspended
    ? "SUSPENDED"
    : production.status === "PARTIAL" || production.status === "FAILED"
      ? "SUSPENDED"
      : awaitPilot
        ? "OPEN"
        : "COMPLETE";

  const interruptCause = suspended
    ? null
    : awaitPilot
      ? disposition === "SUSPEND"
        ? "AWAIT_OR_SUSPEND"
        : disposition === "CONTINUE"
          ? "CONTINUE"
          : "AWAIT_PILOT"
      : null;

  return { status, awaitPilot, interruptCause };
}