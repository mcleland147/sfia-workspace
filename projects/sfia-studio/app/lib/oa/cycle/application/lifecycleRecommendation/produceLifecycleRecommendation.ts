import type { HumanDecision } from "@/lib/oa/decision";
import type { EpistemicItem, ProvenanceRecord } from "../../domain/types";
import type { CycleInstance } from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  computeBasisFingerprint,
  candidateFromStructuredOutput,
} from "./basisFingerprint";
import { materializeLifecycleRecommendation } from "./materializeLifecycleRecommendation";
import { validateLifecycleRecommendation } from "./validateLifecycleRecommendation";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationEnvelope,
  NoraLifecycleRecommendationStructuredOutput,
} from "./types";
import { tryDecodeLifecycleRecommendationItem } from "./materializeLifecycleRecommendation";
import { deriveLifecycleRecommendationCurrentness } from "./currentness";
import type { TrajectoryBootstrapPresence } from "./greenfieldLifecycleBootstrap";

export type ProduceLifecycleRecommendationInput = {
  updateEpistemicState: UpdateEpistemicState;
  projectId: string;
  structured:
    | NoraLifecycleRecommendationStructuredOutput
    | LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  /**
   * Server-resolved canonical material basis (intent-scoped).
   * Must already include all material fields — not reconstructed from basisSeed alone.
   */
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  existingItems: readonly EpistemicItem[];
  hasTrajectoryContext?: boolean;
  trajectoryBootstrapPresence?: TrajectoryBootstrapPresence;
  decisions?: readonly HumanDecision[];
  provenance?: ProvenanceRecord;
  correlationId?: string;
};

export type ProduceLifecycleRecommendationResult =
  | {
      ok: true;
      envelope: LifecycleRecommendationEnvelope;
      item: EpistemicItem;
      supersededId: string | null;
    }
  | { ok: false; code: string; reason: string };

/**
 * Product path post-model: validate → persist canonical basis → decode envelope.
 * Used by Fake/deterministic and future REAL boundary alike (R15).
 */
export async function produceLifecycleRecommendation(
  input: ProduceLifecycleRecommendationInput,
): Promise<ProduceLifecycleRecommendationResult> {
  if (
    "authority" in input.structured &&
    input.structured.authority !== undefined &&
    input.structured.authority !== "none"
  ) {
    return {
      ok: false,
      code: "LR_AUTHORITY_FORBIDDEN",
      reason: "authority_bearing_forbidden",
    };
  }
  if (
    "isHumanDecision" in input.structured &&
    input.structured.isHumanDecision !== undefined &&
    input.structured.isHumanDecision !== false
  ) {
    return {
      ok: false,
      code: "LR_HD_FORBIDDEN",
      reason: "recommendation_is_not_human_decision",
    };
  }

  const candidate = candidateFromStructuredOutput({
    intent: input.structured.intent,
    statement: input.structured.statement,
    subjectCycleInstanceId: input.structured.subjectCycleInstanceId ?? null,
    targetCycleInstanceId: input.structured.targetCycleInstanceId ?? null,
    targetCycleTypeId: input.structured.targetCycleTypeId ?? null,
    rationale:
      "rationale" in input.structured
        ? (input.structured.rationale ?? null)
        : null,
    qualificationSignals:
      "qualificationSignals" in input.structured
        ? (input.structured.qualificationSignals ?? null)
        : undefined,
  });

  const validated = validateLifecycleRecommendation({
    projectId: input.projectId,
    candidate,
    cycles: input.cycles,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    hasTrajectoryContext: input.hasTrajectoryContext,
    trajectoryBootstrapPresence: input.trajectoryBootstrapPresence,
    decisions: input.decisions,
  });
  if (!validated.ok) {
    return { ok: false, code: validated.code, reason: validated.reason };
  }

  // Persist the server-owned canonical basis (not the thin validation seed alone).
  const basisRefs: LifecycleRecommendationBasisRefs = {
    ...input.basisRefs,
    projectId: input.projectId,
    subjectCycleInstanceId: validated.subjectCycleInstanceId,
    targetCycleInstanceId: validated.targetCycleInstanceId,
    targetCycleTypeId: validated.targetCycleTypeId,
  };

  const materialized = await materializeLifecycleRecommendation({
    updateEpistemicState: input.updateEpistemicState,
    projectId: input.projectId,
    validated,
    basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    existingItems: input.existingItems,
    provenance: input.provenance,
    correlationId: input.correlationId,
  });
  if (!materialized.ok) {
    return {
      ok: false,
      code: materialized.code,
      reason: materialized.reason,
    };
  }

  const currentness = deriveLifecycleRecommendationCurrentness({
    item: materialized.item,
    currentBasisRefs: basisRefs,
  });
  const envelope = tryDecodeLifecycleRecommendationItem(
    materialized.item,
    currentness,
  );
  if (!envelope) {
    return {
      ok: false,
      code: "LR_DECODE_FAILED",
      reason: "envelope_decode_failed",
    };
  }

  if (envelope.basisFingerprint !== computeBasisFingerprint(basisRefs)) {
    return {
      ok: false,
      code: "LR_BASIS_MISMATCH",
      reason: "basis_fingerprint_mismatch",
    };
  }

  return {
    ok: true,
    envelope: { ...envelope, basisRefs },
    item: materialized.item,
    supersededId: materialized.supersededId,
  };
}
