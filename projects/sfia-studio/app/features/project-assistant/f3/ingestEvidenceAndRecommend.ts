/**
 * IngestExecutionAttemptEvidence → CreateReviewBundle → RecommendNextGate
 * → bounded Nora/provider post-Evidence analysis (GAP-4).
 * Recommendation-only; HARD refs passed through; no auto-launch.
 * M5-B W1: when projectServices present, append factual LPS evidence/RB ids.
 */

import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type { ExecutionAttemptServices } from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
import {
  deriveAttemptProvenance,
  type DerivedAttemptProvenance,
} from "./deriveAttemptProvenance";
import {
  F3_LABELS,
  F3_MODE,
  F3_OPEN_HARD_RESERVATION_REFS,
} from "./constants";
import {
  analyzePostEvidenceWithProvider,
  formatPostEvidenceAnalysisForLps,
} from "./postEvidenceNoraAnalysis";
import type {
  F3EvidenceDto,
  F3RecommendationDto,
  F3ReviewBundleDto,
} from "./types";

export type IngestRecommendDeps = {
  evidenceReviewServices: EvidenceReviewServices;
  /** When present (product path), perform M5-B W1 LPS factual link append. */
  projectServices?: Pick<
    ProjectServices,
    "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
  >;
  executionAttemptServices?: Pick<
    ExecutionAttemptServices,
    "getExecutionAttempt" | "registry"
  >;
  executionContractServices?: Pick<
    ExecutionContractServices,
    "getExecutionContract"
  >;
};

export type IngestRecommendResult =
  | {
      ok: true;
      evidence: F3EvidenceDto;
      reviewBundle: F3ReviewBundleDto;
      recommendation: F3RecommendationDto;
      lpsVersion?: number;
      provenance: DerivedAttemptProvenance;
    }
  | { ok: false; code: string; message: string };

async function resolveProvenance(input: {
  attemptId: string;
  deps: IngestRecommendDeps;
  provenance?: DerivedAttemptProvenance;
}): Promise<DerivedAttemptProvenance> {
  if (input.provenance) return input.provenance;
  const attemptServices = input.deps.executionAttemptServices;
  if (!attemptServices) {
    const segment = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
    return {
      mode: F3_MODE,
      adapterRef: "adp:f3-test-fixture",
      executionMode: "adapter_sync_fixture",
      realProcessInvoked: false,
      realExecution: false,
      externalEffects: false,
      evidenceId: `ev:f3-fixture:${segment}`,
      reviewBundleId: `rb:f3-fixture:${segment}`,
    };
  }
  const loaded = await attemptServices.getExecutionAttempt.execute({
    attemptId: input.attemptId,
  });
  if (!loaded.ok) {
    const segment = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
    return {
      mode: F3_MODE,
      adapterRef: "adp:f3-test-fixture",
      executionMode: "adapter_sync_fixture",
      realProcessInvoked: false,
      realExecution: false,
      externalEffects: false,
      evidenceId: `ev:f3-fixture:${segment}`,
      reviewBundleId: `rb:f3-fixture:${segment}`,
    };
  }
  const agent = attemptServices.registry.getAgent(
    loaded.attempt.selectedAgentRef,
  );
  return deriveAttemptProvenance({ attempt: loaded.attempt, agent });
}

export async function ingestEvidenceAndRecommend(input: {
  projectId: string;
  attemptId: string;
  executionContractId: string;
  deps: IngestRecommendDeps;
  provenance?: DerivedAttemptProvenance;
  executionObservation?: {
    processRef: string;
    exitCode: number | null;
    timedOut: boolean;
    durationMs: number;
    realProcessInvoked: boolean;
    technicalResultRef: string | null;
    stdout: string;
    stderr: string;
  } | null;
}): Promise<IngestRecommendResult> {
  const provenance = await resolveProvenance({
    attemptId: input.attemptId,
    deps: input.deps,
    provenance: input.provenance,
  });
  const evidenceId = provenance.evidenceId;
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

  const reviewBundleId = provenance.reviewBundleId;
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

  let contractStatus = "unknown";
  let contractAction = "unknown";
  let attemptStatus = "unknown";
  let selectedAgentRef = "unknown";
  if (input.deps.executionContractServices) {
    const loaded =
      await input.deps.executionContractServices.getExecutionContract.execute({
        executionContractId: input.executionContractId,
      });
    if (loaded.ok) {
      contractStatus = loaded.contract.status;
      contractAction = loaded.contract.action;
    }
  }
  if (input.deps.executionAttemptServices) {
    const loaded =
      await input.deps.executionAttemptServices.getExecutionAttempt.execute({
        attemptId: input.attemptId,
      });
    if (loaded.ok) {
      attemptStatus = loaded.attempt.status;
      selectedAgentRef = loaded.attempt.selectedAgentRef;
    }
  }

  const analysis = await analyzePostEvidenceWithProvider({
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    executionContractStatus: contractStatus,
    executionContractAction: contractAction,
    attemptId: input.attemptId,
    attemptStatus,
    selectedAgentRef,
    adapterRef: provenance.adapterRef,
    executionMode: provenance.executionMode,
    realProcessInvoked: provenance.realProcessInvoked,
    evidenceId: ingested.evidence.evidenceId,
    reviewBundleId: bundle.reviewBundle.reviewBundleId,
    technicalResultRef: ingested.evidence.technicalResultRef ?? null,
    reservations: [
      ...F3_OPEN_HARD_RESERVATION_REFS,
      "HARD remain OPEN — BLOCKS REAL",
    ],
    processRef: input.executionObservation?.processRef,
    exitCode: input.executionObservation?.exitCode,
    timedOut: input.executionObservation?.timedOut,
    durationMs: input.executionObservation?.durationMs,
    stdout: input.executionObservation?.stdout,
    stderr: input.executionObservation?.stderr,
  });

  const analysisNote = formatPostEvidenceAnalysisForLps(
    analysis.ok
      ? { analysisText: analysis.text }
      : { unavailableReason: analysis.message },
  );

  let lpsVersion: number | undefined;
  if (input.deps.projectServices) {
    const linked = await appendEvidenceOutcomeToLps({
      projectId: input.projectId,
      evidenceId: ingested.evidence.evidenceId,
      reviewBundleId: bundle.reviewBundle.reviewBundleId,
      projectServices: input.deps.projectServices,
      analysisNote,
    });
    if (!linked.ok) {
      return {
        ok: false,
        code: linked.code,
        message: linked.message,
      };
    }
    lpsVersion = linked.lpsVersion;
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
    evidence: {
      evidenceId: ingested.evidence.evidenceId,
      status: ingested.evidence.status,
      sourceKind: ingested.evidence.sourceKind,
      technicalResultRef: ingested.evidence.technicalResultRef ?? null,
      verified: false,
      mode: provenance.mode,
    },
    reviewBundle: {
      reviewBundleId: bundle.reviewBundle.reviewBundleId,
      status: bundle.reviewBundle.status,
      version: bundle.reviewBundle.version,
      evidenceRefs: [...bundle.reviewBundle.evidenceRefs],
      mode: provenance.mode,
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
      mode: provenance.mode,
      analysisStatus: analysis.ok ? "available" : "unavailable",
      analysisText: analysis.ok ? analysis.text : null,
      analysisProviderId: analysis.ok
        ? analysis.providerId
        : analysis.providerId,
      analysisUnavailableReason: analysis.ok ? null : analysis.message,
    },
    lpsVersion,
    provenance,
  };
}
