/**
 * GrantGateD — Gate D GD-1 grant use-case (D-M4-04).
 * Grant ≠ consume. StartExecution consumes with CREATED atomically.
 * Never starts execution / never launches Cursor.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import type { AttemptDetailCode, ActorReference } from "../domain/types";
import type { GateDGrant } from "../domain/realLaunchSafety";
import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
import {
  authorityFailureDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";

export type GrantGateDRequest = {
  readonly grantId: string;
  readonly attemptId: string;
  readonly actor: ActorReference;
  readonly expiresAt: string;
  readonly authorityEvidenceId?: string;
  readonly correlationId?: string;
  readonly expectedAttemptVersion?: number;
  readonly expectedContractVersion?: number;
  readonly claimedAuthorityLevel?: string;
  readonly nowIso?: string;
};

export type GrantGateDSuccess = {
  readonly ok: true;
  readonly grant: GateDGrant;
  readonly durationMs: number;
};

export type GrantGateDFailure = {
  readonly ok: false;
  readonly error: ReturnType<typeof createAttemptError>;
  readonly durationMs: number;
};

export type GrantGateDResult = GrantGateDSuccess | GrantGateDFailure;

/** @deprecated Prefer GrantGateDRequest. */
export type GrantRealExecutionGateRequest = GrantGateDRequest;
/** @deprecated Prefer GrantGateDResult. */
export type GrantRealExecutionGateResult = GrantGateDResult;

export class GrantGateD {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly registry: AgentRegistryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly safetyJournal: RealLaunchSafetyJournalPort,
    private readonly clock: ClockPort,
  ) {}

  async execute(request: GrantGateDRequest): Promise<GrantGateDResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: AttemptDetailCode,
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]>,
    ): GrantGateDFailure => ({
      ok: false,
      error: createAttemptError({
        detailCode,
        timestamp,
        correlationId,
        attemptId: request.attemptId,
        internalCauseRef,
        ...extra,
      }),
      durationMs: Date.now() - started,
    });

    try {
      if (!request.actor?.actorId || !request.grantId || !request.expiresAt) {
        return fail("ATTEMPT_INVALID", "gate_d_input_invalid");
      }
      if (Date.parse(request.expiresAt) <= Date.parse(timestamp)) {
        return fail("GATE_D_EXPIRED", "gate_d_expires_at_not_future");
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      if (attempt.status !== "accepted") {
        return fail("ATTEMPT_STATE_CONFLICT", `attempt_status_${attempt.status}`);
      }
      if (
        request.expectedAttemptVersion !== undefined &&
        request.expectedAttemptVersion !== attempt.version
      ) {
        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
          expectedVersion: request.expectedAttemptVersion,
          currentVersion: attempt.version,
        });
      }

      const contract = await this.contracts.findById(attempt.executionContractId);
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (contract.status !== "confirmed") {
        return fail(
          "EXECUTION_CONTRACT_NOT_CONFIRMED",
          `contract_status_${contract.status}`,
        );
      }
      if (contract.version !== attempt.executionContractVersion) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_version_changed");
      }
      if (
        request.expectedContractVersion !== undefined &&
        request.expectedContractVersion !== contract.version
      ) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_occ_mismatch");
      }

      const fingerprint =
        contract.semanticFingerprint ??
        computeExecutionContractSemanticFingerprint(contract);
      if (!fingerprint) {
        return fail("ATTEMPT_INVALID", "semantic_fingerprint_missing");
      }
      if (
        contract.action.includes("UNRESOLVED") ||
        contract.target.includes("UNRESOLVED") ||
        contract.requiredCapabilities.some(
          (c) => c === "cap:unresolved" || c.includes("unresolved"),
        )
      ) {
        return fail("REAL_AGENT_PROFILE_INVALID", "unresolved_contract_refused");
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      if (!agent) return fail("AGENT_NOT_FOUND", "selected_agent_missing");
      if (!isM4BoundedReadOnlyRealAgent(agent)) {
        return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_bounded_readonly_real");
      }

      const authz = verifyAttemptAuthority(this.authority, {
        requiredAuthority: contract.requiredAuthority,
        actorId: request.actor.actorId,
        scope: contract.scope,
        evidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      });
      if (!authz.ok) {
        return fail(
          authorityFailureDetail(authz.reason),
          `gate_d_${authz.reason}`,
        );
      }

      const identity = {
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        semanticFingerprint: fingerprint,
      };
      if (await this.safetyJournal.hasAmbiguousFrontier(identity)) {
        return fail(
          "LAUNCH_RECONCILIATION_REQUIRED",
          "ambiguous_frontier_blocks_gate_d",
        );
      }

      const existing = await this.safetyJournal.findActiveGateDGrantForAttempt(
        attempt.attemptId,
      );
      if (existing) {
        return fail("GATE_D_ALREADY_GRANTED", "active_grant_exists");
      }

      const grant = await this.safetyJournal.persistGateDGrant({
        grantId: request.grantId,
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        semanticFingerprint: fingerprint,
        attemptId: attempt.attemptId,
        selectedAgentRef: attempt.selectedAgentRef,
        actorId: request.actor.actorId,
        issuedAt: timestamp,
        expiresAt: request.expiresAt,
        correlationId,
      });

      return { ok: true, grant, durationMs: Date.now() - started };
    } catch (err) {
      if (isExecutionAttemptDomainError(err)) {
        return fail(err.detailCode, err.message);
      }
      return fail("EXECUTION_PERSISTENCE_FAILED", "gate_d_persist_failed");
    }
  }
}

/** @deprecated Prefer GrantGateD. */
export { GrantGateD as GrantRealExecutionGate };
