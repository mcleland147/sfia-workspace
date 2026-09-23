/**
 * Contract Result semantic — Product mission/diagnostic result (generic Cursor HOW).
 * PJ REAL readiness B1 — Result Semantics Registry entry (not a parallel engine).
 *
 * Applicability: exact generic Cursor quartet + PRODUCT_MISSION_FROM_DURABLE_CONTEXT
 * + evreq:mission-result-for-nora-reevaluation. Never matches temp-artifact / docs_write.
 * Attempt succeeded alone is NOT enough — mission Evidence payload required.
 */
import {
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
  isMissionResultPayload,
  missionResultHasForbiddenEffects,
  type MissionResultPayload,
} from "./missionResultPayload";
import fs from "node:fs";

export const MISSION_RESULT_RULE_REF =
  "w3b-contract-result/product-mission-result-v1" as const;

export const MISSION_RESULT_EVIDENCE_SOURCE =
  "execution_attempt:mission_result" as const;

const USABLE_STATUSES = new Set<EvidenceStatus>(["available", "verified"]);
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

export function missionResultEvidenceFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): boolean {
  if (input.attempt.status !== "succeeded") return false;
  if (!input.attempt.resultRef?.trim()) return false;
  const e = input.evidence;
  if (e.source !== MISSION_RESULT_EVIDENCE_SOURCE) return false;
  if (e.type !== "attestation" && e.type !== "artifact") return false;
  if (!e.digest?.startsWith("sha256:")) return false;
  if (!e.location?.trim()) return false;
  if (e.bindings.executionAttemptId !== input.attempt.attemptId) return false;
  if (
    e.bindings.executionContractId &&
    input.attempt.executionContractId &&
    e.bindings.executionContractId !== input.attempt.executionContractId
  ) {
    return false;
  }
  const payload = loadMissionPayload(e);
  if (!payload) return false;
  if (payload.attemptId !== input.attempt.attemptId) return false;
  if (
    input.attempt.executionContractId &&
    payload.executionContractId !== input.attempt.executionContractId
  ) {
    return false;
  }
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
  if (!USABLE_STATUSES.has(snapshot.status as EvidenceStatus)) return false;
  if (evidence.availability !== "available") return false;
  if (!USABLE_STATUSES.has(evidence.status)) return false;
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
      e.source === MISSION_RESULT_EVIDENCE_SOURCE,
  );
  return bound.length === 1 ? bound[0] : undefined;
}

export function assessMissionResultExpectedOutput(input: {
  expectation: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): "PASS" | "NOT_PROVEN" | "FAIL" {
  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    return "FAIL";
  }
  if (!missionResultEvidenceFactsHold(input)) return "NOT_PROVEN";
  const payload = loadMissionPayload(input.evidence);
  if (!payload) return "NOT_PROVEN";
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
  // Unknown free-form EO — fail-closed soft.
  return "NOT_PROVEN";
}

export function assessMissionResultEvidenceRequirement(input: {
  requirement: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
  if (
    !isUsableFrozen({
      evidence: input.evidence,
      snapshot: input.frozenSnapshot,
    })
  ) {
    return "NOT_PROVEN";
  }
  if (input.requirement !== MISSION_RESULT_ER_KEY) {
    // Other ERs (e.g. evreq:read, mission-trace) — soft not_proven unless
    // same mission Evidence already proves durable inspection.
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
    return {
      requiredEvidenceIds: frozen.map((s) => s.evidenceId),
    };
  },
  assessExpectedOutput(input) {
    const evidence = pickMissionEvidence(input.evidences, input.attempt);
    if (!evidence) return "NOT_PROVEN";
    return assessMissionResultExpectedOutput({
      expectation: input.expectation,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
    });
  },
  assessEvidenceRequirement(input) {
    const evidence = pickMissionEvidence(input.evidences, input.attempt);
    if (!evidence) return "NOT_PROVEN";
    const frozenSnapshot = input.frozenSnapshots.find(
      (s) => s.evidenceId === evidence.evidenceId,
    );
    return assessMissionResultEvidenceRequirement({
      requirement: input.requirement,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      frozenSnapshot,
    });
  },
};
