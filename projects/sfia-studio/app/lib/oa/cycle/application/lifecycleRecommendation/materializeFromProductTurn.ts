/**
 * Server-owned Product materialization after Nora structured Product turn.
 * Does not call the model. Does not invent HD / Cycle mutations.
 * Material readers fail closed: UNKNOWN ≠ KNOWN EMPTY.
 */
import type { ActorReference } from "@/lib/oa/doctrine";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
} from "@/lib/oa/cycle/domain/types";
import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
import { deriveLifecycleBlockersFromEpistemicItems } from "@/lib/oa/cycle/application/deriveLifecycleBlockers";
import {
  produceLifecycleRecommendation,
  type ProduceLifecycleRecommendationResult,
} from "@/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation";
import { resolveCanonicalLifecycleRecommendationBasis } from "@/lib/oa/cycle/application/lifecycleRecommendation/resolveCanonicalBasis";
import { isNoraLifecycleRecommendationStructuredOutput } from "@/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType";
import {
  normalizeNoraProductTurnStructuredOutput,
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  type PreCycleRoutingAssessment,
  type PreCycleRoutingDisposition,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import {
  firstFailedRequiredMaterialDimension,
  materialBasisUnavailableCode,
  type LifecycleRecommendationMaterialDimension,
} from "./materialReaderContract";
import type { TrajectoryBootstrapPresence } from "./greenfieldLifecycleBootstrap";

export type LifecycleRecommendationMaterialFacts = {
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion: number | null | undefined;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory: ProjectTrajectory | null;
  /**
   * Explicit trajectory presence for greenfield bootstrap (D-RB-BOOT-01).
   * UNKNOWN must never be coerced to never/absence.
   */
  trajectoryBootstrapPresence?: TrajectoryBootstrapPresence;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  epistemicItems: readonly EpistemicItem[];
  /**
   * Dimensions whose readers failed (UNKNOWN). Must not be treated as empty.
   * Intent-scoped: only required dimensions block materialization.
   */
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
};

export type MaterializeFromProductTurnResult = {
  narrative: string | null;
  recommendationAttempted: boolean;
  materialization: ProduceLifecycleRecommendationResult | null;
  /** Non-authoritative boundary disposition when Product turn was used. */
  routingDisposition?: PreCycleRoutingDisposition | null;
  preCycleRoutingAssessment?: PreCycleRoutingAssessment | null;
  lifecycleRecommendationSuppressed?: boolean;
  /** Structured boundary contradiction code when Product turn is incoherent. */
  boundaryContradiction?: string | null;
};

export function extractLifecycleCandidateFromStructuredOutput(
  structuredOutput: unknown,
): {
  narrative: string | null;
  candidate: NoraLifecycleRecommendationStructuredOutput | null;
  kind: "product_turn" | "lr_only" | "none";
  preCycleRoutingAssessment?: PreCycleRoutingAssessment | null;
  routingDisposition?: PreCycleRoutingDisposition | null;
  lifecycleRecommendationSuppressed?: boolean;
  boundaryContradiction?: string | null;
} {
  const coherent = normalizeNoraProductTurnStructuredOutput(structuredOutput);
  if (coherent) {
    return {
      narrative: coherent.narrative,
      candidate: coherent.lifecycleRecommendation,
      kind: "product_turn",
      preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
      routingDisposition: coherent.disposition,
      lifecycleRecommendationSuppressed:
        coherent.lifecycleRecommendationSuppressed,
      boundaryContradiction: coherent.boundaryContradiction,
    };
  }
  if (isNoraLifecycleRecommendationStructuredOutput(structuredOutput)) {
    return {
      narrative: structuredOutput.statement,
      candidate: structuredOutput,
      kind: "lr_only",
    };
  }
  return { narrative: null, candidate: null, kind: "none" };
}

export async function materializeLifecycleRecommendationFromStructuredOutput(input: {
  projectId: string;
  structuredOutput: unknown;
  updateEpistemicState: UpdateEpistemicState;
  facts: LifecycleRecommendationMaterialFacts;
  producedAt: string;
  createdBy: ActorReference;
  correlationId?: string;
}): Promise<MaterializeFromProductTurnResult> {
  const extracted = extractLifecycleCandidateFromStructuredOutput(
    input.structuredOutput,
  );
  const boundaryMeta =
    extracted.kind === "product_turn"
      ? {
          routingDisposition: extracted.routingDisposition ?? null,
          preCycleRoutingAssessment:
            extracted.preCycleRoutingAssessment ?? null,
          lifecycleRecommendationSuppressed:
            extracted.lifecycleRecommendationSuppressed === true,
          boundaryContradiction: extracted.boundaryContradiction ?? null,
        }
      : {
          routingDisposition: null,
          preCycleRoutingAssessment: null,
          lifecycleRecommendationSuppressed: false,
          boundaryContradiction: null,
        };

  if (
    extracted.kind === "product_turn" &&
    extracted.boundaryContradiction ===
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION
  ) {
    // EMIT without LR — fail closed; never invent a Recommendation.
    return {
      narrative: extracted.narrative,
      recommendationAttempted: true,
      materialization: {
        ok: false,
        code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
        reason: "emit_disposition_without_lifecycle_recommendation",
      },
      ...boundaryMeta,
    };
  }

  if (extracted.kind === "product_turn" && extracted.candidate === null) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: false,
      materialization: null,
      ...boundaryMeta,
    };
  }
  if (!extracted.candidate) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: false,
      materialization: null,
      ...boundaryMeta,
    };
  }

  const candidate = extracted.candidate;
  const failed = input.facts.failedMaterialDimensions ?? new Set();
  const failedRequired = firstFailedRequiredMaterialDimension(
    candidate.intent,
    failed,
  );
  if (failedRequired) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: true,
      materialization: {
        ok: false,
        code: materialBasisUnavailableCode(failedRequired),
        reason: `material_reader_unavailable:${failedRequired}`,
      },
      ...boundaryMeta,
    };
  }

  const blockers = deriveLifecycleBlockersFromEpistemicItems(
    input.facts.epistemicItems,
  );
  const subjectId = candidate.subjectCycleInstanceId ?? null;

  const basisRefs = resolveCanonicalLifecycleRecommendationBasis({
    intent: candidate.intent,
    projectId: input.projectId,
    subjectCycleInstanceId: subjectId,
    targetCycleInstanceId: candidate.targetCycleInstanceId ?? null,
    targetCycleTypeId: candidate.targetCycleTypeId ?? null,
    cycles: input.facts.cycles,
    lpsActiveCycleInstanceId: input.facts.lpsActiveCycleInstanceId,
    lpsVersion: input.facts.lpsVersion,
    doctrinePackageId: input.facts.doctrinePackageId,
    doctrinePackageVersion: input.facts.doctrinePackageVersion,
    doctrinePackageDigest: input.facts.doctrinePackageDigest,
    trajectory: input.facts.trajectory,
    decisions: input.facts.decisions,
    evidence: input.facts.evidence,
    blockingReservationStatements: blockers.statements,
  });

  const presence =
    input.facts.trajectoryBootstrapPresence ??
    (input.facts.trajectory
      ? ({ kind: "current", trajectory: input.facts.trajectory } as const)
      : failed.has("trajectory")
        ? ({ kind: "unknown", reason: "trajectory_dimension_failed" } as const)
        : undefined);

  const materialization = await produceLifecycleRecommendation({
    updateEpistemicState: input.updateEpistemicState,
    projectId: input.projectId,
    structured: candidate,
    cycles: input.facts.cycles,
    lpsActiveCycleInstanceId: input.facts.lpsActiveCycleInstanceId,
    basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    existingItems: input.facts.epistemicItems,
    hasTrajectoryContext: Boolean(input.facts.trajectory),
    trajectoryBootstrapPresence: presence,
    decisions: input.facts.decisions,
    correlationId: input.correlationId,
  });

  return {
    narrative: extracted.narrative,
    recommendationAttempted: true,
    materialization,
    ...boundaryMeta,
  };
}
