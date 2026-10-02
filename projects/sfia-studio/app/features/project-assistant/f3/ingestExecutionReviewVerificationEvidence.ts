/**
 * Studio Verification Evidence — VerifiedChangeSet facts via existing Evidence stack (CP2-04).
 *
 * Reuses IngestExecutionAttemptEvidence + VerifyEvidenceIntegrity.
 * NOT a second Evidence engine. NOT a Product aggregate.
 *
 * Payload is a bounded attestation of Studio observation (FACTS), distinct from
 * Cursor CLAIM report and from Mission Result diagnostic payload.
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ExecutionReviewVerificationStatus } from "./persistGenericExecutionReviewMaterial";

export const OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA =
  "oa.execution-review-verification.1" as const;

export const EXECUTION_REVIEW_VERIFICATION_ER_KEY =
  "evreq:studio-verified-changeset" as const;

export type ExecutionReviewVerificationPayload = {
  readonly schemaVersion: typeof OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA;
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly projectId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly reviewMaterialId: string;
  readonly verificationStatus: ExecutionReviewVerificationStatus;
  readonly verifiedChangeSetDigest: string | null;
  readonly verifiedChangeSetRef: string | null;
  readonly claimFactMismatch: boolean;
  readonly unclaimedObservedPaths: readonly string[];
  readonly claimedMissingPaths: readonly string[];
  readonly observedPathCount: number;
  readonly completeness: "FULL" | "PARTIAL";
  readonly reviewEndOfPresent: boolean;
};

export function executionReviewVerificationEvidenceIdForAttempt(
  attemptId: string,
): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return `ev:execution-review:${segment}`.slice(0, 128);
}

export function isExecutionReviewVerificationEvidenceId(
  evidenceId: string,
): boolean {
  return evidenceId.startsWith("ev:execution-review:");
}

export function isExecutionReviewVerificationPayload(
  value: unknown,
): value is ExecutionReviewVerificationPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_EXECUTION_REVIEW_VERIFICATION_SCHEMA &&
    typeof v.attemptId === "string" &&
    typeof v.executionContractId === "string" &&
    typeof v.projectId === "string" &&
    typeof v.verificationStatus === "string" &&
    typeof v.claimFactMismatch === "boolean"
  );
}

export function canonicalizeExecutionReviewVerificationPayload(
  payload: ExecutionReviewVerificationPayload,
): string {
  return `${JSON.stringify(payload)}\n`;
}

export function digestExecutionReviewVerificationPayload(
  payload: ExecutionReviewVerificationPayload,
): string {
  return `sha256:${createHash("sha256")
    .update(canonicalizeExecutionReviewVerificationPayload(payload))
    .digest("hex")}`;
}

export function executionReviewVerificationLocationForAttempt(
  attemptId: string,
): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return `refs/attempts/${segment}/execution-review-verification.json`;
}

export function persistExecutionReviewVerificationPayload(input: {
  refsRoot: string;
  attemptId: string;
  payload: ExecutionReviewVerificationPayload;
}):
  | { ok: true; absolutePath: string; digest: string }
  | { ok: false; code: string; message: string } {
  try {
    fs.mkdirSync(input.refsRoot, { recursive: true });
    const relative = executionReviewVerificationLocationForAttempt(
      input.attemptId,
    );
    const absolutePath = path.join(input.refsRoot, relative);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    const body = canonicalizeExecutionReviewVerificationPayload(input.payload);
    const digest = digestExecutionReviewVerificationPayload(input.payload);
    fs.writeFileSync(absolutePath, body, "utf8");
    return { ok: true, absolutePath, digest };
  } catch (err) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_VERIFICATION_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export type IngestExecutionReviewVerificationEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  payload: ExecutionReviewVerificationPayload;
  refsRoot: string;
  technicalResultRef?: string | null;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestExecutionReviewVerificationEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      evidenceStatus: string;
      location: string;
      digest: string;
    }
  | { ok: false; code: string; message: string };

export async function ingestExecutionReviewVerificationEvidence(
  input: IngestExecutionReviewVerificationEvidenceInput,
): Promise<IngestExecutionReviewVerificationEvidenceResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const evidenceId = executionReviewVerificationEvidenceIdForAttempt(
    input.executionAttemptId,
  );

  const persisted = persistExecutionReviewVerificationPayload({
    refsRoot: input.refsRoot,
    attemptId: input.executionAttemptId,
    payload: input.payload,
  });
  if (!persisted.ok) return persisted;

  const ingested =
    await input.evidenceReviewServices.ingestExecutionAttemptEvidence.execute({
      evidenceId,
      executionAttemptId: input.executionAttemptId,
      idempotencyKey: `idem:execution-review-verification:${evidenceId}`,
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
        input.correlationId ?? `cor:execution-review-verification:${evidenceId}`,
      nowIso: input.nowIso,
    });
  if (!ingested.ok || !ingested.evidence) {
    return {
      ok: false,
      code: ingested.ok
        ? "EXECUTION_REVIEW_VERIFICATION_EVIDENCE_MISSING"
        : ingested.error.detailCode,
      message: ingested.ok
        ? "IngestExecutionAttemptEvidence returned no evidence."
        : ingested.error.message,
    };
  }

  let evidence = ingested.evidence;
  if (evidence.status === "available" && evidence.digest) {
    const verified =
      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: evidence.evidenceId,
        expectedVersion: evidence.version,
        actor,
        correlationId:
          input.correlationId ??
          `cor:execution-review-verification-verify:${evidenceId}`,
        nowIso: input.nowIso,
      });
    if (verified.ok && verified.evidence) {
      evidence = verified.evidence;
    }
  }

  return {
    ok: true,
    evidenceId: evidence.evidenceId,
    evidenceStatus: evidence.status,
    location: persisted.absolutePath,
    digest: persisted.digest,
  };
}
