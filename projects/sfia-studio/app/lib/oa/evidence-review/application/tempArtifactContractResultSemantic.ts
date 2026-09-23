/**
 * Contract Result semantic entry #1 — product:generate-temporary-artifact (W3-B).
 * Ported from the former hard-coded contractResultSemanticEvaluator.
 *
 * PJ-REPROOF-05 Cause E — applicability also covers canonical generic Product
 * Cursor EC when WHAT (exact EO+ER temp-artifact tokens) still identifies this
 * result semantic. Quartet = HOW; EO/ER = WHAT. No NLP / effect-class heuristics.
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

export const W3B_TEMP_ARTIFACT_RULE_REF =
  "w3b-contract-result/product-generate-temporary-artifact-v1" as const;

export const W3B_TEMP_ARTIFACT_OPERATION_KEY =
  "product:generate-temporary-artifact" as const;

export const W3B_TEMP_ARTIFACT_CAPABILITY = "cap:product-temp-artifact" as const;

export const W3B_TEMP_ARTIFACT_EO_TEMPLATE =
  "Résultat d'exécution — generate-temporary-artifact" as const;

export const W3B_TEMP_ARTIFACT_ER_KEY = "evreq:generate-temporary-artifact" as const;

/** Governed W3-A execute path mints res:w3a:<hex> — server-owned shape only. */
const W3A_RESULT_REF_PATTERN = /^res:w3a:[a-f0-9]+$/;

const W3B_USABLE_EVIDENCE_STATUSES = new Set<EvidenceStatus>([
  "available",
  "verified",
]);

/** Positive allowlist — undefined/unknown/stale/aging cannot satisfy ER. */
const W3B_USABLE_EVIDENCE_FRESHNESS = new Set(["fresh"]);

export function tempArtifactExecutionFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): boolean {
  if (input.attempt.status !== "succeeded") return false;
  const resultRef = input.attempt.resultRef?.trim();
  if (!resultRef || !W3A_RESULT_REF_PATTERN.test(resultRef)) return false;
  return input.evidence.technicalResultRef === resultRef;
}

/** W3-B bounded ER validity — stale/rejected/unavailable Evidence cannot satisfy ER. */
export function isW3bContractResultEvidenceUsable(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  const { evidence, snapshot } = input;
  if (!snapshot) return false;
  if (snapshot.evidenceId !== evidence.evidenceId) return false;
  if (snapshot.evidenceVersion !== evidence.version) return false;
  if (snapshot.availability !== "available") return false;
  if (!W3B_USABLE_EVIDENCE_STATUSES.has(snapshot.status as EvidenceStatus)) {
    return false;
  }
  if (evidence.availability !== "available") return false;
  if (!W3B_USABLE_EVIDENCE_STATUSES.has(evidence.status)) return false;
  if (
    !evidence.freshness ||
    !W3B_USABLE_EVIDENCE_FRESHNESS.has(evidence.freshness)
  ) {
    return false;
  }
  return true;
}

export function evidenceMatchesFrozenSnapshot(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  return isW3bContractResultEvidenceUsable(input);
}

export function assessTempArtifactExpectedOutput(input: {
  expectation: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): "PASS" | "NOT_PROVEN" | "FAIL" {
  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    return "FAIL";
  }
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.expectation !== W3B_TEMP_ARTIFACT_EO_TEMPLATE) return "NOT_PROVEN";
  if (!tempArtifactExecutionFactsHold(input)) return "NOT_PROVEN";
  return "PASS";
}

export function assessTempArtifactEvidenceRequirement(input: {
  requirement: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.requirement !== W3B_TEMP_ARTIFACT_ER_KEY) return "NOT_PROVEN";
  if (
    !evidenceMatchesFrozenSnapshot({
      evidence: input.evidence,
      snapshot: input.frozenSnapshot,
    })
  ) {
    return "NOT_PROVEN";
  }
  if (!tempArtifactExecutionFactsHold(input)) return "NOT_SATISFIED";
  return "SATISFIED";
}

function pickTempArtifactEvidence(
  evidences: readonly Evidence[],
  attempt: ExecutionAttemptSnapshot,
): Evidence | undefined {
  const bound = evidences.filter(
    (e) => e.bindings.executionAttemptId === attempt.attemptId,
  );
  return bound.length === 1 ? bound[0] : undefined;
}

function isLegacyTempArtifactApplicable(
  material: ContractResultSemanticApplicabilityMaterial,
): boolean {
  if (material.action !== W3B_TEMP_ARTIFACT_OPERATION_KEY) return false;
  return Boolean(
    material.requiredCapabilities?.includes(W3B_TEMP_ARTIFACT_CAPABILITY),
  );
}

/**
 * Canonical Product EC (generic Cursor quartet) + exact temp-artifact WHAT.
 * Fail-closed: missing EO or ER → not applicable.
 */
function isGenericProductTempArtifactApplicable(
  material: ContractResultSemanticApplicabilityMaterial,
): boolean {
  if (material.action !== STUDIO_CURSOR_GENERALIST_ACTION) return false;
  if (material.target !== STUDIO_CURSOR_GENERALIST_TARGET) return false;
  if (material.scope !== STUDIO_CURSOR_GENERALIST_SCOPE) return false;
  if (
    !material.requiredCapabilities?.includes(STUDIO_CURSOR_GENERALIST_CAPABILITY)
  ) {
    return false;
  }
  const outputs = material.expectedOutputs ?? [];
  const requirements = material.evidenceRequirements ?? [];
  if (!outputs.includes(W3B_TEMP_ARTIFACT_EO_TEMPLATE)) return false;
  if (!requirements.includes(W3B_TEMP_ARTIFACT_ER_KEY)) return false;
  return true;
}

export function isTempArtifactContractResultApplicable(
  material: ContractResultSemanticApplicabilityMaterial,
): boolean {
  return (
    isLegacyTempArtifactApplicable(material) ||
    isGenericProductTempArtifactApplicable(material)
  );
}

export const tempArtifactContractResultSemantic: ContractResultSemantic = {
  id: "temp-artifact",
  ruleRef: W3B_TEMP_ARTIFACT_RULE_REF,
  isApplicable(material) {
    return isTempArtifactContractResultApplicable(material);
  },
  selectEvidenceIds(input): ContractResultEvidenceSelection {
    const frozen = input.frozenSnapshots;
    if (frozen.length === 0) {
      return {
        requiredEvidenceIds: [],
        incompleteReason: "no_frozen_evidence_snapshots",
      };
    }
    // Select all frozen ids; after load, assessors require exactly one attempt-bound Evidence.
    return {
      requiredEvidenceIds: frozen.map((s) => s.evidenceId),
    };
  },
  assessExpectedOutput(input) {
    const evidence = pickTempArtifactEvidence(input.evidences, input.attempt);
    if (!evidence) return "NOT_PROVEN";
    return assessTempArtifactExpectedOutput({
      expectation: input.expectation,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
    });
  },
  assessEvidenceRequirement(input) {
    const evidence = pickTempArtifactEvidence(input.evidences, input.attempt);
    if (!evidence) return "NOT_PROVEN";
    const frozenSnapshot = input.frozenSnapshots.find(
      (s) => s.evidenceId === evidence.evidenceId,
    );
    return assessTempArtifactEvidenceRequirement({
      requirement: input.requirement,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      frozenSnapshot,
    });
  },
};

export function isTempArtifactMaterialApplicable(
  material: ContractResultSemanticApplicabilityMaterial,
): boolean {
  return tempArtifactContractResultSemantic.isApplicable(material);
}
