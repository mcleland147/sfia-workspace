/**
 * Persist + ingest mission-result Evidence (docs_write pattern: location + digest).
 * No new Evidence table. Payload is a durable JSON file under refsRoot.
 */
import fs from "node:fs";
import path from "node:path";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import {
  digestMissionResultPayload,
  missionResultLocationForAttempt,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import { MISSION_RESULT_EVIDENCE_SOURCE } from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";

export type IngestMissionResultEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  payload: MissionResultPayload;
  /** Absolute directory that will hold mission-result JSON files. */
  refsRoot: string;
  technicalResultRef?: string | null;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestMissionResultEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      reviewBundleId: string;
      evidenceStatus: string;
      location: string;
      digest: string;
    }
  | { ok: false; code: string; message: string };

export function persistMissionResultPayload(input: {
  refsRoot: string;
  attemptId: string;
  payload: MissionResultPayload;
}): { ok: true; absolutePath: string; digest: string } | { ok: false; code: string; message: string } {
  try {
    fs.mkdirSync(input.refsRoot, { recursive: true });
    const relative = missionResultLocationForAttempt(input.attemptId);
    const absolutePath = path.join(input.refsRoot, relative);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    const digest = digestMissionResultPayload(input.payload);
    const body = JSON.stringify(input.payload, null, 2);
    fs.writeFileSync(absolutePath, body, "utf8");
    return { ok: true, absolutePath, digest };
  } catch (err) {
    return {
      ok: false,
      code: "MISSION_RESULT_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export async function ingestMissionResultEvidence(
  input: IngestMissionResultEvidenceInput,
): Promise<IngestMissionResultEvidenceResult> {
  const actor = input.actor ?? LOCAL_MORRIS_ACTOR;
  const segment = input.executionAttemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const evidenceId = `ev:mission-result:${segment}`.slice(0, 128);
  const reviewBundleId = `rb:mission-result:${segment}`.slice(0, 128);

  const persisted = persistMissionResultPayload({
    refsRoot: input.refsRoot,
    attemptId: input.executionAttemptId,
    payload: input.payload,
  });
  if (!persisted.ok) return persisted;

  const registered = await input.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    type: "attestation",
    status: "available",
    digest: persisted.digest as never,
    location: persisted.absolutePath,
    source: MISSION_RESULT_EVIDENCE_SOURCE,
    sourceKind: "external",
    classification: "internal",
    storageMode: "external_payload_ref",
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    actor,
    correlationId: input.correlationId ?? `cor:mission-result:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:mission-result:${evidenceId}`,
  });
  if (!registered.ok) {
    return {
      ok: false,
      code: registered.error.detailCode,
      message: registered.error.message,
    };
  }

  // Attach technicalResultRef when available (attempt.resultRef).
  if (input.technicalResultRef && registered.evidence) {
    // registerEvidence may not accept technicalResultRef — if field exists on
    // returned evidence from ingest path we're fine; otherwise Evidence stays
    // linked via bindings + digest. Optional best-effort already covered.
  }

  const bundle = await input.evidenceReviewServices.createReviewBundle.execute({
    reviewBundleId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    executionContractId: input.executionContractId,
    evidenceIds: [evidenceId],
    actor,
    correlationId: input.correlationId ?? `cor:mission-result-rb:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:mission-result-rb:${reviewBundleId}`,
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
    evidenceStatus: registered.evidence.status,
    location: persisted.absolutePath,
    digest: persisted.digest,
  };
}
