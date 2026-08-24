/**
 * Shared T-A5 application helpers.
 *
 * Authority is resolved ONLY through the T-A3 AuthorityResolverPort:
 * client `authorityLevel`, `displayName` and any claimed level are ignored.
 * MORRIS = N3 verified ∧ canActAsMorris === true. N3 ≠ Morris.
 */
import { randomBytes } from "node:crypto";
import type {
  AuthorityLevel,
  AuthorityResolverPort,
  VerifyAuthorityResult,
} from "@/lib/oa/decision";
import {
  isExecutionReadyStatus,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import type { ActorReference, AuthorityClass, ProvenanceRecord } from "../domain/types";

export function newCorrelationId(): string {
  return `cor:${randomBytes(8).toString("hex")}`;
}

export function newProvenanceId(): string {
  return `prv:${randomBytes(8).toString("hex")}`;
}

export function buildAttemptProvenance(input: {
  actor: ActorReference;
  timestamp: string;
  correlationId: string;
  source?: ProvenanceRecord["source"];
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: newProvenanceId(),
    actor: structuredClone(input.actor),
    source: input.source ?? "system",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
  };
}

export function verifyAttemptAuthority(
  authority: AuthorityResolverPort,
  input: {
    requiredAuthority: AuthorityClass;
    actorId: string;
    scope: string;
    evidenceId?: string;
    claimedAuthorityLevel?: string;
    displayName?: string;
    /** Force the Morris gate regardless of the contract authority class. */
    requireMorrisGate?: boolean;
  },
): VerifyAuthorityResult {
  const requireMorrisGate =
    input.requireMorrisGate === true || input.requiredAuthority === "MORRIS";
  const requiredLevel: AuthorityLevel =
    input.requiredAuthority === "MORRIS"
      ? "N3"
      : (input.requiredAuthority as AuthorityLevel);

  return authority.verify({
    actorId: input.actorId,
    requiredLevel,
    scope: input.scope,
    evidenceId: input.evidenceId,
    requireMorrisGate,
    // Hostile injections are forwarded so the resolver can ignore them.
    authorityLevel: input.claimedAuthorityLevel as
      | AuthorityLevel
      | "none"
      | undefined,
    displayName: input.displayName,
  });
}

export function authorityFailureDetail(
  reason: VerifyAuthorityResult["reason"],
): "AUTHORITY_SCOPE_MISMATCH" | "AUTHORITY_DENIED" {
  return reason === "scope_mismatch"
    ? "AUTHORITY_SCOPE_MISMATCH"
    : "AUTHORITY_DENIED";
}

/** Contract states that refuse any new selection or start. */
export function contractGateDetail(
  contract: ExecutionContract,
):
  | "EXECUTION_CONTRACT_CANCELLED"
  | "EXECUTION_CONTRACT_SUPERSEDED"
  | "EXECUTION_CONTRACT_NOT_CONFIRMED"
  | null {
  if (contract.status === "cancelled") return "EXECUTION_CONTRACT_CANCELLED";
  if (contract.status === "superseded") return "EXECUTION_CONTRACT_SUPERSEDED";
  // N1 validated is Execute-ready only with CONFIRMATION_EVALUATED:NOT_REQUIRED (R16).
  if (!isExecutionReadyStatus(contract)) {
    return "EXECUTION_CONTRACT_NOT_CONFIRMED";
  }
  return null;
}
