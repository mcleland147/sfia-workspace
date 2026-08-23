/**
 * W2 / D-W2-04 — ExecutionContract InspectionAttestation.
 *
 * An attestation records that a human inspected one exact ExecutionContract,
 * identified by `executionContractId` + `contractVersion` + fingerprints +
 * `actor` + `inspectedAt`.
 *
 * It is PROOF, never permission:
 *   - it introduces no new ExecutionContract business status;
 *   - it never grants authority on its own;
 *   - it becomes insufficient as soon as the contract changes materially.
 *
 * Sufficiency is decided on `inspectionFingerprint`: the execution-significant
 * material of the contract (action, target, scope, inputs, capabilities,
 * authority, constraints, stop conditions, evidence, reversibility, window,
 * idempotency, decision refs, doctrine, supersession lineage).
 *
 * Deliberately excluded from that fingerprint: `confirmationRef` and
 * `immutableAfterConfirm`. Attaching a Confirmation is the step the product
 * performs *after* inspection in the mandated order (PREPARED → INSPECTED →
 * Confirmation if required → authority). It changes no executable intent, so it
 * cannot invalidate the inspection that legitimately preceded it. Every other
 * material amendment — and any supersession, which yields a new contract
 * identity with no attestation at all — invalidates the previous attestation
 * and requires re-inspection before Confirmation/authority.
 *
 * `validated` ≠ inspected, `confirmation_required` ≠ inspected: an EC status is
 * never read as inspection proof.
 */

import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { ActorReference } from "@/lib/oa/doctrine";
import {
  executionContractSemanticMaterial,
  type ExecutionContractSemanticMaterial,
} from "./semanticFingerprint";

export type InspectionAttestation = {
  schemaVersion: "0.1.0-oa";
  attestationId: string;
  executionContractId: string;
  contractVersion: number;
  /** Execution-significant fingerprint — decides sufficiency. */
  inspectionFingerprint: string;
  /** Full contract semantic fingerprint at inspection time — audit only. */
  semanticFingerprint: string;
  projectId?: string;
  actor: ActorReference;
  inspectedAt: string;
  /** Contract facts the inspector confirmed having read. */
  inspectedFacts: string[];
  /** Free-form reserves raised during inspection (non-blocking record). */
  inspectionReserves?: string[];
  /** Structural denials — an attestation is never an authorization. */
  grantsAuthority: false;
  isConfirmation: false;
};

export type InspectionInsufficiencyReason =
  | "no_attestation"
  | "material_change"
  | "contract_fingerprint_absent";

export type InspectionSufficiency =
  | { sufficient: true; attestation: InspectionAttestation }
  | {
      sufficient: false;
      reason: InspectionInsufficiencyReason;
      staleAttestation?: InspectionAttestation;
    };

/**
 * Execution-significant fingerprint of a contract: the semantic material minus
 * the Confirmation binding fields (see module note).
 */
export function computeInspectionFingerprint(
  contract: Parameters<typeof executionContractSemanticMaterial>[0],
): string {
  const material = executionContractSemanticMaterial(contract);
  const executable: Partial<ExecutionContractSemanticMaterial> = { ...material };
  delete executable.confirmationRef;
  delete executable.immutableAfterConfirm;
  return createHash("sha256")
    .update(canonicalizeJson(executable), "utf8")
    .digest("hex");
}

/**
 * Deny-by-default sufficiency check against the contract as it exists now.
 * A contract whose fingerprint cannot be resolved can never be proved inspected.
 */
export function evaluateInspectionSufficiency(input: {
  attestations: readonly InspectionAttestation[];
  executionContractId: string;
  currentInspectionFingerprint: string | undefined;
}): InspectionSufficiency {
  const relevant = input.attestations
    .filter((a) => a.executionContractId === input.executionContractId)
    .slice()
    .sort((a, b) => (a.inspectedAt < b.inspectedAt ? 1 : -1));

  if (relevant.length === 0) {
    return { sufficient: false, reason: "no_attestation" };
  }
  if (!input.currentInspectionFingerprint) {
    return {
      sufficient: false,
      reason: "contract_fingerprint_absent",
      staleAttestation: relevant[0],
    };
  }

  const match = relevant.find(
    (a) => a.inspectionFingerprint === input.currentInspectionFingerprint,
  );
  if (match) {
    return { sufficient: true, attestation: match };
  }

  return {
    sufficient: false,
    reason: "material_change",
    staleAttestation: relevant[0]!,
  };
}
