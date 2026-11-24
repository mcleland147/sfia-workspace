/**
 * CA-01 — Nora prepares a technical contract from a durable investigation.
 * Reuses D3 investigation + D7 technical_contracts — no second preparation engine.
 */

import { StudioError } from "@/lib/http-errors";
import {
  loadInvestigationSnapshot,
  saveInvestigationSnapshot,
} from "@/domains/conversation/investigation-persistence";
import {
  evaluateContractReadiness as evaluateInvestigationReadiness,
  type InvestigationState,
} from "@/domains/conversation/investigation-state";
import {
  createTechnicalContract,
  evaluateContractReadiness,
} from "./technical-contract";
import type { TechnicalContractBody } from "./types";

export type NoraContractPrepareInput = {
  pilotId: string;
  projectId: string;
  preparationId: string;
  contractKey: string;
  body: TechnicalContractBody;
  sourceTurnCommandId?: string | null;
  /** Server-owned: never trust client "sourcesSufficient". */
  investigationOverride?: InvestigationState | null;
  cognitiveWorkId?: string | null;
  cognitiveRevision?: number | null;
};

/**
 * Persist a DRAFT technical contract when investigation is sufficient.
 * READY is never granted here — markReady requires separate server qualification.
 */
export async function prepareTechnicalContractFromNora(
  input: NoraContractPrepareInput,
) {
  const investigation =
    input.investigationOverride ??
    (await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: input.body.title || input.body.volets.mission,
    }));

  if (!investigation) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Aucune investigation durable — Nora doit qualifier les sources avant contrat",
      { exposeMessage: true },
    );
  }

  const evaluated = evaluateInvestigationReadiness(investigation);
  // C19: when caller already persisted investigation (bridge), do not bump again.
  // Redundant saves previously advanced revision past contract filiation.
  if (!input.investigationOverride) {
    await saveInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      state: evaluated,
      workId: input.cognitiveWorkId ?? evaluated.cognitiveWorkId ?? null,
      projectId: input.projectId,
    });
  }

  // C16: incomplete DRAFT is allowed and inspectable; READY remains blocked.
  // contractReady=false → sourcesSufficient=false so status stays DRAFT.
  const unknownFromInvestigation = [
    ...evaluated.questions
      .filter((q) => q.importance === "DETERMINANT" && q.status === "BLOCKED")
      .map((q) => q.id),
    ...(evaluated.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION"
      ? ["UNKNOWN_RESTRICTION"]
      : []),
    ...(!evaluated.contractReady
      ? [evaluated.contractReadyBlockedReason ?? "INVESTIGATION_INCOMPLETE"]
      : []),
  ];

  const docReadiness = evaluateContractReadiness({
    body: input.body,
    unknownRestrictions: unknownFromInvestigation,
    // Sources judged from investigation, never from client boolean.
    sourcesSufficient: evaluated.contractReady && evaluated.sufficiency === "SUFFICIENT",
  });

  const created = await createTechnicalContract({
    pilotId: input.pilotId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    contractKey: input.contractKey,
    body: input.body,
    sourceTurnCommandId: input.sourceTurnCommandId,
    markReady: false, // always DRAFT from Nora prepare — READY is a separate server act
    unknownRestrictions: unknownFromInvestigation,
    sourcesSufficient: docReadiness.sourcesSufficient,
    cognitiveWorkId:
      input.cognitiveWorkId ?? evaluated.cognitiveWorkId ?? null,
    cognitiveRevision:
      input.cognitiveRevision ?? evaluated.cognitiveRevision ?? null,
  });

  return {
    ...created,
    investigationSufficiency: evaluated.sufficiency,
    contractReady: evaluated.contractReady,
    readiness: docReadiness,
  };
}
