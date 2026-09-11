/**
 * CR-GCEC-04 — ingest docs-write artifact Evidence + ReviewBundle.
 * Strong bindings: projectId, cycleInstanceId, executionContractId, executionAttemptId.
 */
import type { Digest } from "@/lib/oa/doctrine";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";

export type IngestDocsWriteArtifactEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  targetPath: string;
  digest: string;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestDocsWriteArtifactEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      reviewBundleId: string;
      evidenceStatus: string;
    }
  | { ok: false; code: string; message: string };

export async function ingestDocsWriteArtifactEvidence(
  input: IngestDocsWriteArtifactEvidenceInput,
): Promise<IngestDocsWriteArtifactEvidenceResult> {
  const actor = input.actor ?? LOCAL_MORRIS_ACTOR;
  const segment = input.executionAttemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
  const reviewBundleId = `rb:docs-write:${segment}`.slice(0, 128);
  const digest = input.digest as Digest;

  const registered = await input.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    type: "artifact",
    status: "available",
    digest,
    location: input.targetPath,
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    actor,
    correlationId: input.correlationId ?? `cor:docs-write:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:docs-write:${evidenceId}`,
  });
  if (!registered.ok) {
    return {
      ok: false,
      code: registered.error.detailCode,
      message: registered.error.message,
    };
  }

  const evidenceStatus = registered.evidence.status;

  const bundle = await input.evidenceReviewServices.createReviewBundle.execute({
    reviewBundleId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    executionContractId: input.executionContractId,
    evidenceIds: [evidenceId],
    actor,
    correlationId: input.correlationId ?? `cor:docs-write-rb:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:docs-write-rb:${reviewBundleId}`,
  });
  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  return {
    ok: true,
    evidenceId,
    reviewBundleId,
    evidenceStatus,
  };
}
