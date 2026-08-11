/**
 * IngestExecutionAttemptEvidence → CreateReviewBundle → RecommendNextGate.
 * Recommendation-only; HARD refs passed through; no auto-launch.
 */

import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  F3_LABELS,
  F3_MODE,
  F3_OPEN_HARD_RESERVATION_REFS,
} from "./constants";
import type {
  F3EvidenceDto,
  F3RecommendationDto,
  F3ReviewBundleDto,
} from "./types";

export type IngestRecommendDeps = {
  evidenceReviewServices: EvidenceReviewServices;
};

export type IngestRecommendResult =
  | {
      ok: true;
      evidence: F3EvidenceDto;
      reviewBundle: F3ReviewBundleDto;
      recommendation: F3RecommendationDto;
    }
  | { ok: false; code: string; message: string };

export async function ingestEvidenceAndRecommend(input: {
  projectId: string;
  attemptId: string;
  executionContractId: string;
  deps: IngestRecommendDeps;
}): Promise<IngestRecommendResult> {
  const evidenceId = `ev:f3-fixture:${input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
  const ingested =
    await input.deps.evidenceReviewServices.ingestExecutionAttemptEvidence.execute(
      {
        evidenceId,
        executionAttemptId: input.attemptId,
        idempotencyKey: `idem:f3-ev:${input.attemptId}`,
        actor: LOCAL_MORRIS_ACTOR,
        classification: "internal",
        storageMode: "metadata_only",
        bindings: {
          projectId: input.projectId,
          executionContractId: input.executionContractId,
        },
      },
    );

  if (!ingested.ok) {
    return {
      ok: false,
      code: ingested.error.detailCode,
      message: ingested.error.message,
    };
  }

  const reviewBundleId = `rb:f3-fixture:${input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
  const bundle =
    await input.deps.evidenceReviewServices.createReviewBundle.execute({
      reviewBundleId,
      idempotencyKey: `idem:f3-rb:${input.attemptId}`,
      actor: LOCAL_MORRIS_ACTOR,
      projectId: input.projectId,
      executionContractId: input.executionContractId,
      evidenceIds: [ingested.evidence.evidenceId],
      reservations: [
        ...F3_OPEN_HARD_RESERVATION_REFS,
        "HARD remain OPEN — BLOCKS REAL",
        "T-A6 COMPLETE NOT DECLARED",
        "NO READY CLAIM",
      ],
    });

  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  const recommended =
    await input.deps.evidenceReviewServices.recommendNextGate.execute({
      projectId: input.projectId,
      subjectRef: input.executionContractId,
      evidenceRefs: [
        {
          id: ingested.evidence.evidenceId,
          version: ingested.evidence.version,
        },
      ],
      reviewBundleRefs: [
        {
          id: bundle.reviewBundle.reviewBundleId,
          version: bundle.reviewBundle.version,
        },
      ],
      openHardReservationRefs: [...F3_OPEN_HARD_RESERVATION_REFS],
      attemptAutoLaunchNextCycle: false,
      actor: LOCAL_MORRIS_ACTOR,
      correlationId: `cor:f3-reco:${input.attemptId}`,
    });

  if (!recommended.ok) {
    return {
      ok: false,
      code: recommended.error.detailCode,
      message: recommended.error.message,
    };
  }

  const coordination = recommended.coordination;
  /**
   * T-A6 RecommendNextGate only materializes openHardReservationRefs as
   * hard_reservation_open blockers when a MaturityAssessment is bound.
   * Creating maturity requires claim/freeze chain beyond this fixture slice
   * without foundation changes — so HARD visibility is guaranteed on the
   * product DTO (openHardReservationRefs + hardBlockers) even when
   * coordination.blockers omit them.
   */
  const openHard = [...F3_OPEN_HARD_RESERVATION_REFS];
  const hardBlockers = [
    ...coordination.blockers
      .filter((b) => b.code === "hard_reservation_open")
      .map((b) => b.sourceId ?? b.code),
    ...openHard.map((ref) => `${ref} OPEN`),
  ];

  return {
    ok: true,
    evidence: {
      evidenceId: ingested.evidence.evidenceId,
      status: ingested.evidence.status,
      sourceKind: ingested.evidence.sourceKind,
      technicalResultRef: ingested.evidence.technicalResultRef ?? null,
      verified: false,
      mode: F3_MODE,
    },
    reviewBundle: {
      reviewBundleId: bundle.reviewBundle.reviewBundleId,
      status: bundle.reviewBundle.status,
      version: bundle.reviewBundle.version,
      evidenceRefs: [...bundle.reviewBundle.evidenceRefs],
      mode: F3_MODE,
    },
    recommendation: {
      kind: "recommendation",
      status: coordination.status,
      executionAuthority: false,
      gateConsumed: false,
      decisionCreated: false,
      attemptAutoLaunchNextCycle: false,
      openHardReservationRefs: openHard,
      hardBlockers: [...new Set(hardBlockers)],
      nextGateCode: coordination.nextGate?.gateCode ?? null,
      nextActionCode: coordination.nextAction?.actionCode ?? null,
      recommendationLabel: F3_LABELS.recommendationNotDecision,
      mode: F3_MODE,
    },
  };
}
