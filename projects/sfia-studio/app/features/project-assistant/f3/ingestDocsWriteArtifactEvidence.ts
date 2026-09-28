/**
 * CR-GCEC-04 — ingest docs-write artifact Evidence + ReviewBundle.
 * Strong bindings: projectId, cycleInstanceId, executionContractId, executionAttemptId.
 *
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01:
 * When artifact bytes are supplied, persist under existing Evidence refs layout
 * (`external_payload_ref`) so Nora can review without hot worktree / Pilot paste.
 * CursorExecutionReport claim may be persisted alongside (still NOT Evidence).
 */
import type { Digest } from "@/lib/oa/doctrine";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import type { CursorExecutionReport } from "@/lib/oa/execution-attempt";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  persistDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "./persistDocsWriteArtifactReviewMaterial";

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
  /**
   * Independently verified artifact bytes from the hot worktree.
   * When present → durable external_payload_ref (restart-safe review).
   * When absent → legacy metadata_only (location = relative targetPath).
   */
  artifactBytes?: Buffer;
  cursorReport?: CursorExecutionReport | null;
  /** Absolute refs root (defaults beside Product SQLite). */
  refsRoot?: string;
};

export type IngestDocsWriteArtifactEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      reviewBundleId: string;
      evidenceStatus: string;
      storageMode: "metadata_only" | "external_payload_ref";
      durableArtifactAbsolutePath?: string;
      durableCursorReportAbsolutePath?: string | null;
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

  let location = input.targetPath;
  let storageMode: "metadata_only" | "external_payload_ref" = "metadata_only";
  let durableArtifactAbsolutePath: string | undefined;
  let durableCursorReportAbsolutePath: string | null | undefined;

  if (input.artifactBytes) {
    const refsRoot = resolveProductEvidenceRefsRoot(input.refsRoot);
    const persisted = persistDocsWriteArtifactReviewMaterial({
      refsRoot,
      attemptId: input.executionAttemptId,
      artifactBytes: input.artifactBytes,
      expectedDigest: input.digest,
      targetPath: input.targetPath,
      cursorReport: input.cursorReport ?? null,
    });
    if (!persisted.ok) {
      return {
        ok: false,
        code: persisted.code,
        message: persisted.message,
      };
    }
    location = persisted.artifactAbsolutePath;
    storageMode = "external_payload_ref";
    durableArtifactAbsolutePath = persisted.artifactAbsolutePath;
    durableCursorReportAbsolutePath = persisted.cursorReportAbsolutePath;
  }

  const registered = await input.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    type: "artifact",
    status: "available",
    digest,
    location,
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode,
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

  let evidenceStatus = registered.evidence.status;

  // external_payload_ref → VerifyEvidenceIntegrity when possible (filesystem probe).
  if (
    storageMode === "external_payload_ref" &&
    registered.evidence.status === "available" &&
    registered.evidence.digest
  ) {
    const verified =
      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: registered.evidence.evidenceId,
        expectedVersion: registered.evidence.version,
        actor,
        correlationId: input.correlationId ?? `cor:docs-write-verify:${segment}`,
        nowIso: input.nowIso,
      });
    if (verified.ok && verified.evidence) {
      evidenceStatus = verified.evidence.status;
    }
  }

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
    storageMode,
    ...(durableArtifactAbsolutePath
      ? { durableArtifactAbsolutePath }
      : {}),
    ...(durableCursorReportAbsolutePath !== undefined
      ? { durableCursorReportAbsolutePath }
      : {}),
  };
}
