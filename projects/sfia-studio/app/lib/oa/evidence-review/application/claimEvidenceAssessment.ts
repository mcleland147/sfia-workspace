/**
 * Shared Evidence assessment against frozen ReviewBundle snapshot.
 * Never mutates Evidence or ReviewBundle. Never produces Maturity.
 */
import type { Evidence } from "../domain/types";
import {
  evidenceSupportsPass,
} from "../domain/claimEvaluationInvariants";
import type {
  ClaimEvidenceAssessment,
  ClaimEvidenceAssessmentCode,
} from "../domain/claimEvaluationTypes";
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { EvidenceReaderPort } from "../ports/evidenceReader";

export async function assessRequiredEvidence(input: {
  requiredEvidenceRefs: string[];
  bundle: ReviewBundle;
  evidenceReader: EvidenceReaderPort;
}): Promise<{
  assessments: ClaimEvidenceAssessment[];
  provided: string[];
  blockingCode?: ClaimEvidenceAssessmentCode;
  blockingEvidenceId?: string;
}> {
  const snapshots = input.bundle.frozenEvidenceSnapshots ?? [];
  const byId = new Map(snapshots.map((s) => [s.evidenceId, s]));
  const assessments: ClaimEvidenceAssessment[] = [];
  const provided: string[] = [];
  let blockingCode: ClaimEvidenceAssessmentCode | undefined;
  let blockingEvidenceId: string | undefined;

  const markBlock = (
    code: ClaimEvidenceAssessmentCode,
    evidenceId: string,
  ) => {
    if (!blockingCode) {
      blockingCode = code;
      blockingEvidenceId = evidenceId;
    }
  };

  for (const evidenceId of input.requiredEvidenceRefs) {
    const snap = byId.get(evidenceId);
    if (!snap) {
      assessments.push({ evidenceId, code: "not_in_bundle" });
      markBlock("not_in_bundle", evidenceId);
      continue;
    }

    // Fail-closed on frozen snapshot metadata (authoritative at freeze).
    if (
      snap.availability === "unavailable" ||
      snap.status === "unavailable"
    ) {
      assessments.push({
        evidenceId,
        expectedVersion: snap.evidenceVersion,
        status: snap.status,
        availability: snap.availability,
        code: "unavailable",
      });
      markBlock("unavailable", evidenceId);
      continue;
    }
    if (snap.status === "stale") {
      assessments.push({
        evidenceId,
        expectedVersion: snap.evidenceVersion,
        status: snap.status,
        availability: snap.availability,
        code: "stale",
      });
      markBlock("stale", evidenceId);
      continue;
    }
    if (snap.status === "incomplete") {
      assessments.push({
        evidenceId,
        expectedVersion: snap.evidenceVersion,
        status: snap.status,
        availability: snap.availability,
        code: "incomplete",
      });
      markBlock("incomplete", evidenceId);
      continue;
    }
    if (snap.status === "rejected") {
      assessments.push({
        evidenceId,
        expectedVersion: snap.evidenceVersion,
        status: snap.status,
        availability: snap.availability,
        code: "rejected",
      });
      markBlock("rejected", evidenceId);
      continue;
    }
    if (snap.status !== "verified") {
      assessments.push({
        evidenceId,
        expectedVersion: snap.evidenceVersion,
        status: snap.status,
        availability: snap.availability,
        code: "not_verified",
      });
      markBlock("not_verified", evidenceId);
      continue;
    }

    const live = await input.evidenceReader.findById(evidenceId);
    if (!live) {
      assessments.push({
        evidenceId,
        expectedVersion: snap.evidenceVersion,
        code: "missing",
      });
      markBlock("missing", evidenceId);
      continue;
    }

    const assessment = assessLiveAgainstSnapshot(live, snap.evidenceVersion);
    assessments.push(assessment);
    if (assessment.code === "ok") {
      provided.push(evidenceId);
    } else {
      markBlock(assessment.code, evidenceId);
    }
  }

  return { assessments, provided, blockingCode, blockingEvidenceId };
}

function assessLiveAgainstSnapshot(
  live: Evidence,
  expectedVersion: number,
): ClaimEvidenceAssessment {
  const base = {
    evidenceId: live.evidenceId,
    expectedVersion,
    observedVersion: live.version,
    status: live.status,
    availability: live.availability,
    freshness: live.freshness,
  };
  if (live.version !== expectedVersion) {
    return { ...base, code: "version_mismatch" };
  }
  if (
    live.availability === "unavailable" ||
    live.status === "unavailable"
  ) {
    return { ...base, code: "unavailable" };
  }
  if (live.status === "stale" || live.freshness === "stale") {
    return { ...base, code: "stale" };
  }
  if (live.status === "incomplete") {
    return { ...base, code: "incomplete" };
  }
  if (live.status === "rejected") {
    return { ...base, code: "rejected" };
  }
  if (!evidenceSupportsPass(live)) {
    return { ...base, code: "not_verified" };
  }
  return { ...base, code: "ok" };
}

export function detailCodeForAssessment(
  code: ClaimEvidenceAssessmentCode,
):
  | "CLAIM_REQUIRED_EVIDENCE_MISSING"
  | "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE"
  | "CLAIM_EVIDENCE_VERSION_MISMATCH"
  | "CLAIM_EVIDENCE_UNAVAILABLE"
  | "CLAIM_EVIDENCE_NOT_VERIFIED" {
  if (code === "not_in_bundle") return "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE";
  if (code === "version_mismatch") return "CLAIM_EVIDENCE_VERSION_MISMATCH";
  if (code === "unavailable") return "CLAIM_EVIDENCE_UNAVAILABLE";
  if (code === "missing") return "CLAIM_REQUIRED_EVIDENCE_MISSING";
  return "CLAIM_EVIDENCE_NOT_VERIFIED";
}
