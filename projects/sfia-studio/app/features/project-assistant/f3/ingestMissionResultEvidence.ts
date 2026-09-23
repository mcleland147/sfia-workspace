/**
 * Persist + ingest mission-result Evidence via IngestExecutionAttemptEvidence.
 * Owns payload + Evidence + integrity verify. Does NOT create a parallel ReviewBundle —
 * W3-B materialize owns the frozen ReviewBundle consumed by EvaluateContractResult.
 */
import fs from "node:fs";
import path from "node:path";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import {
  canonicalizeMissionResultPayload,
  digestMissionResultPayload,
  missionResultLocationForAttempt,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";

export function missionResultEvidenceIdForAttempt(attemptId: string): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return `ev:mission-result:${segment}`.slice(0, 128);
}

export function isMissionResultEvidenceId(evidenceId: string): boolean {
  return evidenceId.startsWith("ev:mission-result:");
}

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
      evidenceStatus: string;
      location: string;
      digest: string;
      technicalResultRef?: string;
    }
  | { ok: false; code: string; message: string };

export function persistMissionResultPayload(input: {
  refsRoot: string;
  attemptId: string;
  payload: MissionResultPayload;
}):
  | { ok: true; absolutePath: string; digest: string }
  | { ok: false; code: string; message: string } {
  try {
    fs.mkdirSync(input.refsRoot, { recursive: true });
    const relative = missionResultLocationForAttempt(input.attemptId);
    const absolutePath = path.join(input.refsRoot, relative);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    // Same canonical representation for persist + digest (no pretty-print drift).
    const body = canonicalizeMissionResultPayload(input.payload);
    const digest = digestMissionResultPayload(input.payload);
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
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const evidenceId = missionResultEvidenceIdForAttempt(input.executionAttemptId);

  const persisted = persistMissionResultPayload({
    refsRoot: input.refsRoot,
    attemptId: input.executionAttemptId,
    payload: input.payload,
  });
  if (!persisted.ok) return persisted;

  const ingested =
    await input.evidenceReviewServices.ingestExecutionAttemptEvidence.execute({
      evidenceId,
      executionAttemptId: input.executionAttemptId,
      idempotencyKey: `idem:mission-result:${evidenceId}`,
      actor,
      classification: "internal",
      type: "attestation",
      storageMode: "external_payload_ref",
      location: persisted.absolutePath,
      digest: persisted.digest as never,
      bindings: {
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        executionContractId: input.executionContractId,
      },
      correlationId:
        input.correlationId ?? `cor:mission-result:${evidenceId}`,
      nowIso: input.nowIso,
    });
  if (!ingested.ok || !ingested.evidence) {
    return {
      ok: false,
      code: ingested.ok ? "MISSION_EVIDENCE_MISSING" : ingested.error.detailCode,
      message: ingested.ok
        ? "IngestExecutionAttemptEvidence returned no evidence."
        : ingested.error.message,
    };
  }

  // available → VerifyEvidenceIntegrity → verified (filesystem probe).
  let evidence = ingested.evidence;
  if (evidence.status === "available" && evidence.digest) {
    const verified =
      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: evidence.evidenceId,
        expectedVersion: evidence.version,
        actor,
        correlationId:
          input.correlationId ?? `cor:mission-result-verify:${evidenceId}`,
        nowIso: input.nowIso,
      });
    if (verified.ok && verified.evidence) {
      evidence = verified.evidence;
    }
    // If verify fails, Evidence stays available — Product PASS remains forbidden.
  }

  return {
    ok: true,
    evidenceId: evidence.evidenceId,
    evidenceStatus: evidence.status,
    location: persisted.absolutePath,
    digest: persisted.digest,
    ...(evidence.technicalResultRef
      ? { technicalResultRef: evidence.technicalResultRef }
      : {}),
  };
}
