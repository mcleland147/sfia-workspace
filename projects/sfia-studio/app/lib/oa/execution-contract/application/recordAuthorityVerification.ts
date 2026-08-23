import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type {
  AgentCapabilitySufficiency,
  AuthorityVerificationBlockedReason,
  AuthorityVerificationOutcome,
  AuthorityVerificationReceipt,
} from "../domain/authorityVerificationReceipt";
import type { ActorReference, AuthorityClass } from "../domain/types";
import type { AuthorityVerificationReceiptRepositoryPort } from "../ports/authorityVerificationReceiptRepository";

export type RecordAuthorityVerificationRequest = {
  projectId: string;
  executionContractId: string;
  contractVersion: number;
  semanticFingerprint?: string;
  actor: ActorReference;
  decisionRefs: string[];
  confirmationRefs: string[];
  confirmationRequired: boolean;
  inspectionAttestationRef?: string;
  requiredAuthority: AuthorityClass;
  verifiedAuthorityLevel?: string;
  action: string;
  target: string;
  scope: string;
  agentCapability: AgentCapabilitySufficiency;
  authorityEvidenceIds: string[];
  outcome: AuthorityVerificationOutcome;
  blockedReason?: AuthorityVerificationBlockedReason;
  blockedDetail?: string;
};

/**
 * TD-C6-03 — materialize the audit snapshot of one effective-authority
 * evaluation. Recording a receipt is the last step of an evaluation, never a
 * precondition of it: no caller may derive permission from a receipt.
 */
export class RecordAuthorityVerification {
  constructor(
    private readonly receipts: AuthorityVerificationReceiptRepositoryPort,
    private readonly clock: ClockPort,
  ) {}

  async execute(
    request: RecordAuthorityVerificationRequest,
  ): Promise<{ receipt: AuthorityVerificationReceipt }> {
    const receipt: AuthorityVerificationReceipt = {
      schemaVersion: "0.1.0-oa",
      receiptId: `avr:${randomBytes(8).toString("hex")}`,
      projectId: request.projectId,
      executionContractId: request.executionContractId,
      contractVersion: request.contractVersion,
      actor: structuredClone(request.actor),
      decisionRefs: [...request.decisionRefs],
      confirmationRefs: [...request.confirmationRefs],
      confirmationRequired: request.confirmationRequired,
      requiredAuthority: request.requiredAuthority,
      action: request.action,
      target: request.target,
      scope: request.scope,
      agentCapability: structuredClone(request.agentCapability),
      authorityEvidenceIds: [...request.authorityEvidenceIds],
      outcome: request.outcome,
      verifiedAt: this.clock.nowIso(),
      grantsAuthority: false,
      reusableForFutureExecution: false,
      executionTriggered: false,
    };
    if (request.semanticFingerprint !== undefined) {
      receipt.semanticFingerprint = request.semanticFingerprint;
    }
    if (request.inspectionAttestationRef !== undefined) {
      receipt.inspectionAttestationRef = request.inspectionAttestationRef;
    }
    if (request.verifiedAuthorityLevel !== undefined) {
      receipt.verifiedAuthorityLevel = request.verifiedAuthorityLevel;
    }
    if (request.blockedReason !== undefined) {
      receipt.blockedReason = request.blockedReason;
    }
    if (request.blockedDetail !== undefined) {
      receipt.blockedDetail = request.blockedDetail;
    }

    await this.receipts.append(receipt);
    return { receipt };
  }
}
