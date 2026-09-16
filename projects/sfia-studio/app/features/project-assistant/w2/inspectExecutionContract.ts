/**
 * W2 Track C — ExecutionContract inspection at the product application path.
 *
 * Reads the contract as it exists now, records the Pilote inspection through
 * the OA use case, and exposes an honest inspection state. Inspecting changes
 * no ExecutionContract status and grants no authority: after a material
 * semantic amendment the prior attestation is reported as stale and
 * re-inspection is required before authorization.
 *
 * Inspected facts are derived from the durable contract (allowlisted
 * disclosure profile). A fingerprint-matching attestation that omits required
 * execution-significant facts is insufficient.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type {
  InspectionInsufficiencyReason,
  InspectionSufficiency,
} from "@/lib/oa/execution-contract";
import {
  projectExecutionContractInspectionDisclosure,
  requiredInspectedFactsForContract,
} from "@/lib/oa/execution-contract";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type {
  ContractInspectionStateDto,
  InspectExecutionContractResult,
} from "./types";

function mapInsufficiencyReason(
  reason: InspectionInsufficiencyReason,
): ContractInspectionStateDto["reason"] {
  switch (reason) {
    case "no_attestation":
      return "no_attestation";
    case "contract_fingerprint_absent":
      return "contract_fingerprint_absent";
    case "material_change":
      return "semantic_fingerprint_changed";
    case "inspected_facts_incomplete":
      return "inspected_facts_incomplete";
    case "inspection_disclosure_incomplete":
      return "inspection_disclosure_incomplete";
  }
}

function statusLabelForInsufficiency(
  reason: InspectionInsufficiencyReason,
  hasStale: boolean,
): ContractInspectionStateDto["statusLabel"] {
  if (reason === "inspected_facts_incomplete") {
    return "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS";
  }
  if (reason === "inspection_disclosure_incomplete") {
    return "INSPECTION IMPOSSIBLE — DISCLOSURE INCOMPLÈTE";
  }
  if (hasStale || reason === "material_change") {
    return "RÉINSPECTION REQUISE — CONTRAT MODIFIÉ";
  }
  return "NON INSPECTÉ";
}

function toStateDto(input: {
  executionContractId: string;
  contractVersion: number;
  semanticFingerprint: string;
  sufficiency: InspectionSufficiency;
}): ContractInspectionStateDto {
  const { sufficiency } = input;
  if (sufficiency.sufficient) {
    return {
      executionContractId: input.executionContractId,
      contractVersion: input.contractVersion,
      semanticFingerprint: input.semanticFingerprint,
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: sufficiency.attestation.attestationId,
      attestedVersion: sufficiency.attestation.contractVersion,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    };
  }
  const stale = sufficiency.staleAttestation ?? null;
  return {
    executionContractId: input.executionContractId,
    contractVersion: input.contractVersion,
    semanticFingerprint: input.semanticFingerprint,
    statusLabel: statusLabelForInsufficiency(sufficiency.reason, stale !== null),
    inspectionSufficient: false,
    attestationRef: null,
    attestedVersion: stale?.contractVersion ?? null,
    staleAttestationRef: stale?.attestationId ?? null,
    reinspectionRequired:
      stale !== null ||
      sufficiency.reason === "inspected_facts_incomplete" ||
      sufficiency.reason === "inspection_disclosure_incomplete",
    reason: mapInsufficiencyReason(sufficiency.reason),
    grantsAuthority: false,
  };
}

export async function readContractInspectionState(input: {
  readonly oa: RuntimeOaStack;
  readonly executionContractId: string;
}): Promise<InspectExecutionContractResult> {
  const state =
    await input.oa.executionContractServices.getContractInspectionState.execute({
      executionContractId: input.executionContractId,
    });
  if (!state.ok) {
    return {
      ok: false,
      code: state.detailCode,
      message: "ExecutionContract introuvable — inspection impossible.",
    };
  }
  return {
    ok: true,
    ...toStateDto({
      executionContractId: state.contract.executionContractId,
      contractVersion: state.contract.version,
      semanticFingerprint: state.currentSemanticFingerprint,
      sufficiency: state.sufficiency,
    }),
  };
}

export type InspectExecutionContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /** Facts the Pilote confirms having read on this contract version. */
  readonly inspectedFacts?: readonly string[];
  readonly inspectionReserves?: readonly string[];
  /** Optional optimistic guard when the surface knows the version it shows. */
  readonly expectedVersion?: number;
};

export async function inspectExecutionContract(
  input: InspectExecutionContractInput,
): Promise<InspectExecutionContractResult> {
  const loaded =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "ExecutionContract introuvable — inspection impossible.",
    };
  }
  if (loaded.contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message:
        "Le contrat d'exécution n'appartient pas au projet demandé — inspection refusée.",
    };
  }

  const disclosure = projectExecutionContractInspectionDisclosure(
    loaded.contract,
  );
  if (!disclosure.ok) {
    return {
      ok: false,
      code: disclosure.code,
      message: disclosure.message,
    };
  }

  const requiredFacts = requiredInspectedFactsForContract(loaded.contract);
  if (!Array.isArray(requiredFacts)) {
    return {
      ok: false,
      code: "INSPECTION_DISCLOSURE_INCOMPLETE",
      message:
        "Disclosure d'inspection incomplète — impossible d'attester l'inspection.",
    };
  }

  const inspectedFacts = input.inspectedFacts
    ? [...input.inspectedFacts]
    : [...requiredFacts];

  const recorded =
    await input.oa.executionContractServices.recordContractInspection.execute({
      executionContractId: input.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      inspectedFacts,
      inspectionReserves: input.inspectionReserves
        ? [...input.inspectionReserves]
        : undefined,
      expectedVersion: input.expectedVersion,
      correlationId: `w2-inspect:${input.executionContractId}`,
    });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.detailCode,
      message:
        recorded.detailCode === "CONTRACT_NOT_FOUND"
          ? "ExecutionContract introuvable — inspection impossible."
          : `Inspection refusée (${recorded.reason}).`,
    };
  }

  // Re-read state so the returned verdict comes from persisted proof.
  return readContractInspectionState({
    oa: input.oa,
    executionContractId: input.executionContractId,
  });
}
