import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { InspectionAttestation } from "../domain/inspectionAttestation";
import {
  computeInspectionFingerprint,
  evaluateInspectionSufficiency,
} from "../domain/inspectionAttestation";
import type { InspectionSufficiency } from "../domain/inspectionAttestation";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";
import { isTa5Status } from "../domain/invariants";
import type { ActorReference, ExecutionContract } from "../domain/types";
import type { InspectionAttestationRepositoryPort } from "../ports/inspectionAttestationRepository";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";

export type RecordContractInspectionRequest = {
  executionContractId: string;
  actor: ActorReference;
  inspectedFacts: string[];
  inspectionReserves?: string[];
  /** Guards against inspecting a contract the caller no longer sees. */
  expectedVersion?: number;
  correlationId?: string;
};

export type RecordContractInspectionResult =
  | {
      ok: true;
      attestation: InspectionAttestation;
      contract: ExecutionContract;
    }
  | {
      ok: false;
      detailCode:
        | "CONTRACT_NOT_FOUND"
        | "STATE_CONFLICT"
        | "TA5_STATUS_REFUSED"
        | "CONTRACT_INVALID";
      reason: string;
    };

function newId(prefix: string): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * D-W2-04 — record a human inspection of one ExecutionContract version.
 *
 * The attestation is always bound to the version and semantic fingerprint of
 * the contract as loaded here, never to caller-supplied values: a client can
 * neither back-date an inspection nor claim to have inspected a version it
 * never saw. Recording an inspection changes no ExecutionContract status and
 * grants no authority.
 */
export class RecordContractInspection {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly attestations: InspectionAttestationRepositoryPort,
    private readonly clock: ClockPort,
  ) {}

  async execute(
    request: RecordContractInspectionRequest,
  ): Promise<RecordContractInspectionResult> {
    if (!request.actor?.actorId) {
      return {
        ok: false,
        detailCode: "CONTRACT_INVALID",
        reason: "actor_required",
      };
    }

    const contract = await this.contracts.findById(request.executionContractId);
    if (!contract) {
      return {
        ok: false,
        detailCode: "CONTRACT_NOT_FOUND",
        reason: "missing_contract",
      };
    }
    if (isTa5Status(contract.status)) {
      return {
        ok: false,
        detailCode: "TA5_STATUS_REFUSED",
        reason: `ta5_status_${contract.status}`,
      };
    }
    if (contract.status === "cancelled" || contract.status === "superseded") {
      return {
        ok: false,
        detailCode: "STATE_CONFLICT",
        reason: `status_${contract.status}`,
      };
    }
    if (
      request.expectedVersion !== undefined &&
      request.expectedVersion !== contract.version
    ) {
      return {
        ok: false,
        detailCode: "STATE_CONFLICT",
        reason: "version_conflict",
      };
    }

    const attestation: InspectionAttestation = {
      schemaVersion: "0.1.0-oa",
      attestationId: newId("insp"),
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      inspectionFingerprint: computeInspectionFingerprint(contract),
      semanticFingerprint:
        contract.semanticFingerprint ??
        computeExecutionContractSemanticFingerprint(contract),
      projectId: contract.projectId,
      actor: structuredClone(request.actor),
      inspectedAt: this.clock.nowIso(),
      inspectedFacts: [...request.inspectedFacts],
      grantsAuthority: false,
      isConfirmation: false,
    };
    if (request.inspectionReserves && request.inspectionReserves.length > 0) {
      attestation.inspectionReserves = [...request.inspectionReserves];
    }

    await this.attestations.append(attestation);
    return { ok: true, attestation, contract: structuredClone(contract) };
  }
}

export type GetContractInspectionStateResult =
  | {
      ok: true;
      contract: ExecutionContract;
      currentSemanticFingerprint: string;
      sufficiency: InspectionSufficiency;
      attestations: InspectionAttestation[];
    }
  | { ok: false; detailCode: "CONTRACT_NOT_FOUND"; reason: string };

/**
 * Read-only inspection state of a contract: full attestation trail plus the
 * deny-by-default sufficiency verdict against the contract as it exists now.
 */
export class GetContractInspectionState {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly attestations: InspectionAttestationRepositoryPort,
  ) {}

  async execute(input: {
    executionContractId: string;
  }): Promise<GetContractInspectionStateResult> {
    const contract = await this.contracts.findById(input.executionContractId);
    if (!contract) {
      return {
        ok: false,
        detailCode: "CONTRACT_NOT_FOUND",
        reason: "missing_contract",
      };
    }
    const currentSemanticFingerprint =
      contract.semanticFingerprint ??
      computeExecutionContractSemanticFingerprint(contract);
    const trail = await this.attestations.listByContract(
      contract.executionContractId,
    );
    return {
      ok: true,
      contract: structuredClone(contract),
      currentSemanticFingerprint,
      sufficiency: evaluateInspectionSufficiency({
        attestations: trail,
        executionContractId: contract.executionContractId,
        currentInspectionFingerprint: computeInspectionFingerprint(contract),
      }),
      attestations: trail,
    };
  }
}
