/**
 * TD-C6-03 (option A-A) — AuthorityVerificationReceipt.
 *
 * Immutable snapshot of one effective-authority evaluation:
 *
 *   valid human authorization
 *   ∩ ExecutionContract scope
 *   ∩ AgentCapability / policy
 *   ∩ runtime guardrails
 *   ∩ valid required Confirmations
 *   = effective authority
 *
 * The receipt is PROOF of that evaluation, never an additional intersection
 * term: it is not a permission layer, it is not replayable to authorize a
 * later execution, and it is audit-only.
 */

import type { ActorReference, AuthorityClass } from "./types";

export type AuthorityVerificationOutcome = "authorized" | "blocked";

export type AuthorityVerificationBlockedReason =
  | "contract_not_found"
  | "inspection_required"
  | "reinspection_required_material_change"
  | "confirmation_required"
  | "contract_not_confirmed"
  | "decision_not_current"
  | "authority_denied"
  | "authority_scope_mismatch"
  | "executor_capability_insufficient"
  | "contract_state_conflict"
  | "guardrail_refused";

export type AgentCapabilitySufficiency = {
  /** Evaluated envelope, never a Cursor feature catalog. */
  evaluatedAgentRefs: string[];
  sufficientAgentRef?: string;
  sufficient: boolean;
  /** Deny-by-default reason from the agent envelope evaluation. */
  reason:
    | "sufficient"
    | "no_agent_registered"
    | "capability_not_supported"
    | "scope_not_allowed"
    | "agent_disabled"
    | "agent_unhealthy";
};

export type AuthorityVerificationReceipt = {
  schemaVersion: "0.1.0-oa";
  receiptId: string;
  projectId: string;
  executionContractId: string;
  contractVersion: number;
  semanticFingerprint?: string;
  /** Absent in W2: no ExecutionAttempt exists — nothing was executed. */
  attemptId?: string;
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
  verifiedAt: string;
  /** Structural denials — a receipt never authorizes anything by itself. */
  grantsAuthority: false;
  reusableForFutureExecution: false;
  executionTriggered: false;
};
