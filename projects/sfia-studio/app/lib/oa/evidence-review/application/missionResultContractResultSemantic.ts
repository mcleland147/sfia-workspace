/**
 * Contract Result semantic — Product mission/diagnostic result (generic Cursor HOW).
 * PJ REAL readiness B1 — Result Semantics Registry entry (not a parallel engine).
 *
 * Applicability: exact generic Cursor quartet + PRODUCT_MISSION_FROM_DURABLE_CONTEXT
 * + evreq:mission-result-for-nora-reevaluation. Never matches temp-artifact / docs_write.
 * Attempt succeeded alone is NOT enough — verified Mission Evidence payload required.
 */
import {
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  parseContractAcceptanceCriteria,
  resolveAcceptanceCriterionForExpectedOutput,
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
} from "@/lib/oa/execution-contract";
import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import type {
  ContractResultEvidenceSelection,
  ContractResultSemantic,
  ContractResultSemanticApplicabilityMaterial,
} from "./contractResultSemantics";
import {
  MISSION_DIAGNOSTIC_EO_TEMPLATES,
  MISSION_NEXT_STEP_EO_TEMPLATES,
  MISSION_RESULT_ER_KEY,
  MISSION_TRACE_EO_PREFIX,
  PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
  digestMissionResultPayload,
  isMissionResultPayload,
  missionResultHasForbiddenEffects,
  type MissionResultPayload,
} from "./missionResultPayload";
import fs from "node:fs";
import path from "node:path";
import {
  EXECUTION_REVIEW_VERIFICATION_ER_KEY,
  digestExecutionReviewVerificationPayload,
  executionReviewVerificationLocationForAttempt,
  isExecutionReviewVerificationEvidenceId,
  isExecutionReviewVerificationPayload,
  type ExecutionReviewVerificationPayload,
} from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import { digestUtf8 } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";

export const MISSION_RESULT_RULE_REF =
  "w3b-contract-result/product-mission-result-v1" as const;

/** Legacy/diagnostic source label — NOT PASS authority. Prefer evidenceId + sourceKind. */
export const MISSION_RESULT_EVIDENCE_SOURCE =
  "execution_attempt:mission_result" as const;

const USABLE_FROZEN_STATUSES = new Set<EvidenceStatus>(["verified"]);
const USABLE_FRESHNESS = new Set(["fresh"]);

function isGenericProductQuartet(
  material: ContractResultSemanticApplicabilityMaterial,
): boolean {
  if (material.action !== STUDIO_CURSOR_GENERALIST_ACTION) return false;
  if (material.target !== STUDIO_CURSOR_GENERALIST_TARGET) return false;
  if (material.scope !== STUDIO_CURSOR_GENERALIST_SCOPE) return false;
  return Boolean(
    material.requiredCapabilities?.includes(STUDIO_CURSOR_GENERALIST_CAPABILITY),
  );
}

export function isMissionResultContractResultApplicable(
  material: ContractResultSemanticApplicabilityMaterial,
): boolean {
  if (!isGenericProductQuartet(material)) return false;
  const constraints = material.constraints ?? [];
  if (!constraints.includes(PRODUCT_MISSION_FROM_DURABLE_CONTEXT)) return false;
  const ers = material.evidenceRequirements ?? [];
  if (!ers.includes(MISSION_RESULT_ER_KEY)) return false;
  return true;
}

export function isMissionResultEvidenceIdentity(evidence: Evidence): boolean {
  if (evidence.evidenceId.startsWith("ev:mission-result:")) return true;
  if (evidence.source === MISSION_RESULT_EVIDENCE_SOURCE) return true;
  return false;
}

function loadMissionPayload(evidence: Evidence): MissionResultPayload | null {
  const loc = evidence.location?.trim();
  if (!loc) return null;
  try {
    if (!fs.existsSync(loc)) return null;
    const raw = JSON.parse(fs.readFileSync(loc, "utf8")) as unknown;
    if (!isMissionResultPayload(raw)) return null;
    return raw;
  } catch {
    return null;
  }
}

function loadVerificationPayload(
  evidence: Evidence,
): ExecutionReviewVerificationPayload | null {
  const loc = evidence.location?.trim();
  if (!loc) return null;
  try {
    if (!fs.existsSync(loc)) return null;
    const raw = JSON.parse(fs.readFileSync(loc, "utf8")) as unknown;
    if (!isExecutionReviewVerificationPayload(raw)) return null;
    return raw;
  } catch {
    return null;
  }
}

/** True when EC evidenceRequirements demand Studio VerifiedChangeSet observation. */
export function missionRequiresStudioVerification(
  material: ContractResultSemanticApplicabilityMaterial,
): boolean {
  const ers = material.evidenceRequirements ?? [];
  return ers.includes(EXECUTION_REVIEW_VERIFICATION_ER_KEY);
}

export function verificationEvidenceFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): boolean {
  if (input.attempt.status !== "succeeded") return false;
  const e = input.evidence;
  if (!isExecutionReviewVerificationEvidenceId(e.evidenceId)) return false;
  if (e.status !== "verified") return false;
  if (e.sourceKind !== "execution_attempt") return false;
  if (e.provenance?.source !== "execution_adapter") return false;
  if (!e.digest?.startsWith("sha256:")) return false;
  if (!e.location?.trim()) return false;
  if (e.bindings.executionAttemptId !== input.attempt.attemptId) return false;
  if (
    !e.bindings.executionContractId ||
    e.bindings.executionContractId !== input.attempt.executionContractId
  ) {
    return false;
  }
  const payload = loadVerificationPayload(e);
  if (!payload) return false;
  const recomputed = digestExecutionReviewVerificationPayload(payload);
  if (recomputed !== e.digest) return false;
  if (payload.attemptId !== input.attempt.attemptId) return false;
  if (payload.executionContractId !== input.attempt.executionContractId) {
    return false;
  }
  // CP2-04 / CP3-06 — mismatch, non-OBSERVED, or missing required REO
  // cannot support PASS. REO remains CLAIM; presence is attested on Verification Evidence.
  if (payload.claimFactMismatch) return false;
  if (payload.verificationStatus !== "OBSERVED") return false;
  if (payload.reviewEndOfPresent !== true) return false;
  // CP3-04 — OBSERVED requires durable VCS digest tied to persisted bytes.
  if (payload.verifiedChangeSetDigest == null || !payload.verifiedChangeSetRef) {
    return false;
  }
  const loc = e.location.trim();
  const relPayload = executionReviewVerificationLocationForAttempt(
    input.attempt.attemptId,
  );
  const normalizedLoc = loc.replace(/\\/g, "/");
  const normalizedRel = relPayload.replace(/\\/g, "/");
  if (!normalizedLoc.endsWith(normalizedRel)) return false;
  const refsRoot = loc.slice(0, loc.length - relPayload.length).replace(
    /[/\\]$/,
    "",
  );
  const vcsAbs = path.join(refsRoot, payload.verifiedChangeSetRef);
  if (!fs.existsSync(vcsAbs)) return false;
  let durableBytes: Buffer;
  try {
    durableBytes = fs.readFileSync(vcsAbs);
  } catch {
    return false;
  }
  if (digestUtf8(durableBytes) !== payload.verifiedChangeSetDigest) {
    return false;
  }
  return true;
}

function pickVerificationEvidence(
  evidences: readonly Evidence[],
  attempt: ExecutionAttemptSnapshot,
): Evidence | undefined {
  const bound = evidences.filter(
    (e) =>
      e.bindings.executionAttemptId === attempt.attemptId &&
      isExecutionReviewVerificationEvidenceId(e.evidenceId),
  );
  return bound.length === 1 ? bound[0] : undefined;
}

export function missionResultEvidenceFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): boolean {
  if (input.attempt.status !== "succeeded") return false;
  // P5 — Attempt.resultRef must be present for Product PASS.
  if (!input.attempt.resultRef?.trim()) return false;
  const e = input.evidence;
  // Candidate identity ≠ proof authority.
  if (!isMissionResultEvidenceIdentity(e)) return false;
  // P7 — Product PASS requires integrity-verified Evidence (available ≠ verified).
  if (e.status !== "verified") return false;
  // P1 — sourceKind must be canonical ExecutionAttempt (source label is not authority).
  if (e.sourceKind !== "execution_attempt") return false;
  // P2 — provenance must be the ExecutionAttempt ingest bridge.
  if (e.provenance?.source !== "execution_adapter") return false;
  if (e.type !== "attestation" && e.type !== "artifact") return false;
  if (!e.digest?.startsWith("sha256:")) return false;
  if (!e.location?.trim()) return false;
  // P3 — Attempt binding exact.
  if (e.bindings.executionAttemptId !== input.attempt.attemptId) return false;
  // P4 — EC binding exact (missing EC binding cannot support PASS).
  if (
    !e.bindings.executionContractId ||
    e.bindings.executionContractId !== input.attempt.executionContractId
  ) {
    return false;
  }
  // P6 — technicalResultRef exact equality (missing or wrong → fail).
  if (e.technicalResultRef !== input.attempt.resultRef) return false;
  const payload = loadMissionPayload(e);
  if (!payload) return false;
  // P8 — recomputed digest must match Evidence.digest.
  const recomputed = digestMissionResultPayload(payload);
  if (recomputed !== e.digest) return false;
  // P9 / P10 — payload Attempt/EC exact.
  if (payload.attemptId !== input.attempt.attemptId) return false;
  if (payload.executionContractId !== input.attempt.executionContractId) {
    return false;
  }
  // P11 — forbidden effects rejected.
  if (missionResultHasForbiddenEffects(payload.authorizedEffectsExecuted)) {
    return false;
  }
  if (payload.status !== "succeeded") return false;
  if (!payload.diagnosticSummary.trim()) return false;
  if (!payload.recommendedNextProductStep.trim()) return false;
  return true;
}

function isUsableFrozen(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  const { evidence, snapshot } = input;
  if (!snapshot) return false;
  if (snapshot.evidenceId !== evidence.evidenceId) return false;
  if (snapshot.evidenceVersion !== evidence.version) return false;
  if (snapshot.availability !== "available") return false;
  if (!USABLE_FROZEN_STATUSES.has(snapshot.status as EvidenceStatus)) {
    return false;
  }
  if (evidence.availability !== "available") return false;
  if (evidence.status !== "verified") return false;
  if (!evidence.freshness || !USABLE_FRESHNESS.has(evidence.freshness)) {
    return false;
  }
  return true;
}

function pickMissionEvidence(
  evidences: readonly Evidence[],
  attempt: ExecutionAttemptSnapshot,
): Evidence | undefined {
  const bound = evidences.filter(
    (e) =>
      e.bindings.executionAttemptId === attempt.attemptId &&
      isMissionResultEvidenceIdentity(e),
  );
  return bound.length === 1 ? bound[0] : undefined;
}

export function assessMissionResultExpectedOutput(input: {
  expectation: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  /** Sealed contract inputs — structured acceptance criteria when present. */
  contractInputs?: Record<string, unknown>;
}): "PASS" | "NOT_PROVEN" | "FAIL" {
  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    return "FAIL";
  }
  if (!missionResultEvidenceFactsHold(input)) return "NOT_PROVEN";
  const payload = loadMissionPayload(input.evidence);
  if (!payload) return "NOT_PROVEN";

  // Sealed structured acceptance criteria outrank the fixed EO templates.
  // NONE ≠ AMBIGUOUS: ambiguity is fail-closed (no legacy PASS).
  const resolution = resolveAcceptanceCriterionForExpectedOutput(
    parseContractAcceptanceCriteria(
      input.contractInputs?.[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY],
    ),
    input.expectation,
  );
  if (resolution.kind === "ambiguous") {
    return "NOT_PROVEN";
  }
  if (resolution.kind === "unique") {
    const criterion = resolution.criterion;
    if (criterion.kind === "manual_review") {
      return "NOT_PROVEN";
    }
    if (
      criterion.kind === "mission_diagnostic" &&
      payload.diagnosticSummary.trim().length > 0
    ) {
      return "PASS";
    }
    if (
      criterion.kind === "mission_next_step" &&
      payload.recommendedNextProductStep.trim().length > 0
    ) {
      return "PASS";
    }
    if (criterion.kind === "mission_trace") {
      const trace = payload.inspectedDurableTrace?.trim() ?? "";
      if (
        trace.startsWith(MISSION_TRACE_EO_PREFIX) ||
        trace.includes(input.attempt.attemptId)
      ) {
        return "PASS";
      }
      return "NOT_PROVEN";
    }
    // Unique structured criterion present but not satisfied (or unknown
    // deterministic kind) — do not fall through to legacy templates.
    return "NOT_PROVEN";
  }

  if (
    (MISSION_DIAGNOSTIC_EO_TEMPLATES as readonly string[]).includes(
      input.expectation,
    )
  ) {
    return payload.diagnosticSummary.trim().length > 0 ? "PASS" : "NOT_PROVEN";
  }
  if (
    (MISSION_NEXT_STEP_EO_TEMPLATES as readonly string[]).includes(
      input.expectation,
    )
  ) {
    return payload.recommendedNextProductStep.trim().length > 0
      ? "PASS"
      : "NOT_PROVEN";
  }
  if (input.expectation.startsWith(MISSION_TRACE_EO_PREFIX)) {
    const trace = payload.inspectedDurableTrace?.trim() ?? "";
    return trace.startsWith(MISSION_TRACE_EO_PREFIX) ||
      trace.includes(input.attempt.attemptId)
      ? "PASS"
      : "NOT_PROVEN";
  }
  return "NOT_PROVEN";
}

export function assessMissionResultEvidenceRequirement(input: {
  requirement: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
  verificationEvidence?: Evidence;
  verificationFrozenSnapshot?: ReviewBundleEvidenceSnapshot;
  requiresVerification?: boolean;
}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
  if (
    !isUsableFrozen({
      evidence: input.evidence,
      snapshot: input.frozenSnapshot,
    })
  ) {
    return "NOT_PROVEN";
  }
  if (input.requirement === EXECUTION_REVIEW_VERIFICATION_ER_KEY) {
    if (!input.verificationEvidence) return "NOT_PROVEN";
    if (
      !isUsableFrozen({
        evidence: input.verificationEvidence,
        snapshot: input.verificationFrozenSnapshot,
      })
    ) {
      return "NOT_PROVEN";
    }
    return verificationEvidenceFactsHold({
      attempt: input.attempt,
      evidence: input.verificationEvidence,
    })
      ? "SATISFIED"
      : "NOT_SATISFIED";
  }
  if (input.requirement === "evreq:local-write") {
    // Technical effect class marker — satisfied when verification OBSERVED with
    // no mismatch OR when verification not required for this EO path.
    if (!input.requiresVerification) return "SATISFIED";
    if (!input.verificationEvidence) return "NOT_PROVEN";
    return verificationEvidenceFactsHold({
      attempt: input.attempt,
      evidence: input.verificationEvidence,
    })
      ? "SATISFIED"
      : "NOT_SATISFIED";
  }
  if (input.requirement !== MISSION_RESULT_ER_KEY) {
    if (
      input.requirement === "evreq:mission-trace-of-inspected-durable-facts" ||
      input.requirement === "evreq:read"
    ) {
      return missionResultEvidenceFactsHold(input)
        ? "SATISFIED"
        : "NOT_SATISFIED";
    }
    return "NOT_PROVEN";
  }
  if (!missionResultEvidenceFactsHold(input)) return "NOT_SATISFIED";
  // CP2-04 — when Studio verification is required, mission PASS needs both.
  if (input.requiresVerification) {
    if (!input.verificationEvidence) return "NOT_PROVEN";
    if (
      !isUsableFrozen({
        evidence: input.verificationEvidence,
        snapshot: input.verificationFrozenSnapshot,
      })
    ) {
      return "NOT_PROVEN";
    }
    if (
      !verificationEvidenceFactsHold({
        attempt: input.attempt,
        evidence: input.verificationEvidence,
      })
    ) {
      return "NOT_SATISFIED";
    }
  }
  return "SATISFIED";
}

export const missionResultContractResultSemantic: ContractResultSemantic = {
  id: "mission-result",
  ruleRef: MISSION_RESULT_RULE_REF,
  isApplicable(material) {
    return isMissionResultContractResultApplicable(material);
  },
  selectEvidenceIds(input): ContractResultEvidenceSelection {
    const frozen = input.frozenSnapshots;
    if (frozen.length === 0) {
      return {
        requiredEvidenceIds: [],
        incompleteReason: "no_frozen_evidence_snapshots",
      };
    }
    const mission = frozen.filter((s) =>
      s.evidenceId.startsWith("ev:mission-result:"),
    );
    if (mission.length === 0) {
      return {
        requiredEvidenceIds: [],
        incompleteReason: "mission_evidence_absent_from_frozen_bundle",
      };
    }
    if (mission.length > 1) {
      return {
        requiredEvidenceIds: [],
        incompleteReason: "mission_evidence_ambiguous",
      };
    }
    const requiresVerification = missionRequiresStudioVerification(
      input.material,
    );
    const verification = frozen.filter((s) =>
      isExecutionReviewVerificationEvidenceId(s.evidenceId),
    );
    if (requiresVerification) {
      if (verification.length === 0) {
        return {
          requiredEvidenceIds: [mission[0]!.evidenceId],
          incompleteReason: "verification_evidence_absent_from_frozen_bundle",
        };
      }
      if (verification.length > 1) {
        return {
          requiredEvidenceIds: [],
          incompleteReason: "verification_evidence_ambiguous",
        };
      }
      return {
        requiredEvidenceIds: [
          mission[0]!.evidenceId,
          verification[0]!.evidenceId,
        ],
      };
    }
    return {
      requiredEvidenceIds: [mission[0]!.evidenceId],
    };
  },
  assessExpectedOutput(input) {
    const evidence = pickMissionEvidence(input.evidences, input.attempt);
    if (!evidence) return "NOT_PROVEN";
    const requiresVerification = missionRequiresStudioVerification(
      input.material,
    );
    if (requiresVerification) {
      const ver = pickVerificationEvidence(input.evidences, input.attempt);
      if (!ver) return "NOT_PROVEN";
      if (
        !verificationEvidenceFactsHold({
          attempt: input.attempt,
          evidence: ver,
        })
      ) {
        // mismatch / UNAVAILABLE → never PASS (NOT_PROVEN; FAIL only if
        // deterministic contractual violation already exists elsewhere).
        return "NOT_PROVEN";
      }
    }
    return assessMissionResultExpectedOutput({
      expectation: input.expectation,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      ...(input.material.inputs
        ? { contractInputs: input.material.inputs }
        : {}),
    });
  },
  assessEvidenceRequirement(input) {
    const evidence = pickMissionEvidence(input.evidences, input.attempt);
    if (!evidence) return "NOT_PROVEN";
    const frozenSnapshot = input.frozenSnapshots.find(
      (s) => s.evidenceId === evidence.evidenceId,
    );
    const requiresVerification = missionRequiresStudioVerification(
      input.material,
    );
    const verificationEvidence = pickVerificationEvidence(
      input.evidences,
      input.attempt,
    );
    const verificationFrozenSnapshot = verificationEvidence
      ? input.frozenSnapshots.find(
          (s) => s.evidenceId === verificationEvidence.evidenceId,
        )
      : undefined;
    return assessMissionResultEvidenceRequirement({
      requirement: input.requirement,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      frozenSnapshot,
      verificationEvidence,
      verificationFrozenSnapshot,
      requiresVerification,
    });
  },
};
