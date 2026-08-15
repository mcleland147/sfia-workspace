/**
 * M5 durable Nora/F3 readback — STRICTLY read-only.
 * current LPS → evidenceIds / reviewBundleIds → durable readers → RecommendNextGate.
 * Does not write LPS, create Decision, consume gate, or launch Attempt.
 */

import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import {
  F3_LABELS,
  F3_MODE,
  F3_OPEN_HARD_RESERVATION_REFS,
} from "./constants";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "./systemFactualWriter";
import type {
  F3EvidenceDto,
  F3RecommendationDto,
  F3ReviewBundleDto,
} from "./types";

export type RehydrateEvidenceOutcomeDeps = {
  projectServices: Pick<ProjectServices, "getCurrentLivingProjectState">;
  evidenceReviewServices: Pick<
    EvidenceReviewServices,
    "evidenceReader" | "reviewBundleReader" | "recommendNextGate"
  >;
};

export type RehydrateEvidenceOutcomeResult =
  | {
      ok: true;
      projectId: string;
      lpsVersion: number;
      evidenceIds: string[];
      reviewBundleIds: string[];
      evidence: F3EvidenceDto[];
      reviewBundles: F3ReviewBundleDto[];
      subjectRef: string | null;
      recommendation: F3RecommendationDto;
    }
  | { ok: false; code: string; message: string };

export async function rehydrateEvidenceOutcomeFromLps(input: {
  projectId: string;
  deps: RehydrateEvidenceOutcomeDeps;
}): Promise<RehydrateEvidenceOutcomeResult> {
  const current =
    await input.deps.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!current.ok) {
    return {
      ok: false,
      code: current.error.detailCode,
      message: current.error.message,
    };
  }

  const lps = current.livingProjectState;
  const evidenceIds = [...(lps.evidenceIds ?? [])];
  const reviewBundleIds = [...(lps.reviewBundleIds ?? [])];

  if (evidenceIds.length === 0 && reviewBundleIds.length === 0) {
    return {
      ok: false,
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "LPS courant sans evidenceIds/reviewBundleIds.",
    };
  }

  const evidenceDtos: F3EvidenceDto[] = [];
  let subjectRef: string | null = null;

  for (const evidenceId of evidenceIds) {
    const evidence =
      await input.deps.evidenceReviewServices.evidenceReader.findById(
        evidenceId,
      );
    if (!evidence) {
      return {
        ok: false,
        code: "EVIDENCE_REF_MISSING",
        message: `Evidence ${evidenceId} référencée par LPS absente.`,
      };
    }
    const boundProject = evidence.bindings.projectId;
    if (boundProject && boundProject !== input.projectId) {
      return {
        ok: false,
        code: "EVIDENCE_PROJECT_MISMATCH",
        message: `Evidence ${evidenceId} project mismatch.`,
      };
    }
    const contractId = evidence.bindings.executionContractId;
    if (contractId) {
      if (subjectRef && subjectRef !== contractId) {
        return {
          ok: false,
          code: "EVIDENCE_CONTRACT_MISMATCH",
          message: "Evidence refs span multiple executionContractId.",
        };
      }
      subjectRef = contractId;
    }
    evidenceDtos.push({
      evidenceId: evidence.evidenceId,
      status: evidence.status,
      sourceKind: evidence.sourceKind,
      technicalResultRef: evidence.technicalResultRef ?? null,
      verified: false,
      mode: F3_MODE,
    });
  }

  const reviewBundleDtos: F3ReviewBundleDto[] = [];
  for (const reviewBundleId of reviewBundleIds) {
    const bundle =
      await input.deps.evidenceReviewServices.reviewBundleReader.findById(
        reviewBundleId,
      );
    if (!bundle) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_REF_MISSING",
        message: `ReviewBundle ${reviewBundleId} référencé par LPS absent.`,
      };
    }
    if (bundle.projectId !== input.projectId) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_PROJECT_MISMATCH",
        message: `ReviewBundle ${reviewBundleId} project mismatch.`,
      };
    }
    if (bundle.executionContractId) {
      if (subjectRef && subjectRef !== bundle.executionContractId) {
        return {
          ok: false,
          code: "REVIEW_BUNDLE_CONTRACT_MISMATCH",
          message: "ReviewBundle executionContractId incoherent with Evidence.",
        };
      }
      subjectRef = bundle.executionContractId;
    }
    reviewBundleDtos.push({
      reviewBundleId: bundle.reviewBundleId,
      status: bundle.status,
      version: bundle.version,
      evidenceRefs: [...bundle.evidenceRefs],
      mode: F3_MODE,
    });
  }

  const evidenceRefs = [];
  for (const evidenceId of evidenceIds) {
    const evidence =
      await input.deps.evidenceReviewServices.evidenceReader.findById(
        evidenceId,
      );
    if (!evidence) {
      return {
        ok: false,
        code: "EVIDENCE_REF_MISSING",
        message: `Evidence ${evidenceId} disparue pendant rehydrate.`,
      };
    }
    evidenceRefs.push({ id: evidence.evidenceId, version: evidence.version });
  }

  const reviewBundleRefs = [];
  for (const reviewBundleId of reviewBundleIds) {
    const bundle =
      await input.deps.evidenceReviewServices.reviewBundleReader.findById(
        reviewBundleId,
      );
    if (!bundle) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_REF_MISSING",
        message: `ReviewBundle ${reviewBundleId} disparu pendant rehydrate.`,
      };
    }
    reviewBundleRefs.push({
      id: bundle.reviewBundleId,
      version: bundle.version,
    });
  }

  const recommended =
    await input.deps.evidenceReviewServices.recommendNextGate.execute({
      projectId: input.projectId,
      subjectRef: subjectRef ?? undefined,
      evidenceRefs,
      reviewBundleRefs,
      openHardReservationRefs: [...F3_OPEN_HARD_RESERVATION_REFS],
      attemptAutoLaunchNextCycle: false,
      actor: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
      correlationId: `cor:m5-rehydrate:${input.projectId}:${lps.version}`,
    });

  if (!recommended.ok) {
    return {
      ok: false,
      code: recommended.error.detailCode,
      message: recommended.error.message,
    };
  }

  const coordination = recommended.coordination;
  const openHard = [...F3_OPEN_HARD_RESERVATION_REFS];
  const hardBlockers = [
    ...coordination.blockers
      .filter((b) => b.code === "hard_reservation_open")
      .map((b) => b.sourceId ?? b.code),
    ...openHard.map((ref) => `${ref} OPEN`),
  ];

  return {
    ok: true,
    projectId: input.projectId,
    lpsVersion: lps.version,
    evidenceIds,
    reviewBundleIds,
    evidence: evidenceDtos,
    reviewBundles: reviewBundleDtos,
    subjectRef,
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
