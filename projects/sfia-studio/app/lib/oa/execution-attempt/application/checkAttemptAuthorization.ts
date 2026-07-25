/**
 * CheckAttemptAuthorization — read-only predicate. NEVER mutates, NEVER
 * launches. Deny paths are audited so a refusal is traceable.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import type {
  CheckExecutionAuthorization,
  ExecutionContractRepositoryPort,
} from "@/lib/oa/execution-contract";
import { createAttemptError } from "../domain/errors";
import { isAttemptTerminal } from "../domain/invariants";
import type {
  CheckAttemptAuthorizationRequest,
  CheckAttemptAuthorizationResult,
} from "../domain/types";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import {
  authorityFailureDetail,
  contractGateDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

export class CheckAttemptAuthorization {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly checkExecutionAuthorization: CheckExecutionAuthorization,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
  ) {}

  async execute(
    request: CheckAttemptAuthorizationRequest,
  ): Promise<CheckAttemptAuthorizationResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const deny = (
      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
      internalCauseRef: string,
      executionContractId?: string,
    ): CheckAttemptAuthorizationResult => {
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.authorization_denied",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
        executionContractId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        authorized: false,
        error: createAttemptError({
          detailCode,
          timestamp,
          correlationId,
          attemptId: request.attemptId,
          executionContractId,
          internalCauseRef,
        }),
        durationMs,
      };
    };

    const attempt = await this.attempts.findById(request.attemptId);
    if (!attempt) {
      return deny("ATTEMPT_NOT_FOUND", "missing_attempt");
    }
    if (isAttemptTerminal(attempt.status)) {
      return deny(
        "ATTEMPT_STATE_CONFLICT",
        `attempt_terminal_${attempt.status}`,
        attempt.executionContractId,
      );
    }
    const contract = await this.contracts.findById(attempt.executionContractId);
    if (!contract) {
      return deny("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
    }
    if (attempt.status === "accepted") {
      // Pre-start: the full T-A4 gate applies (contract must be confirmed).
      const gate = contractGateDetail(contract);
      if (gate) {
        return deny(
          gate,
          `contract_status_${contract.status}`,
          contract.executionContractId,
        );
      }
      if (contract.version !== attempt.executionContractVersion) {
        return deny(
          "EXECUTION_CONTRACT_STALE",
          "contract_version_changed",
          contract.executionContractId,
        );
      }
      const authorization = await this.checkExecutionAuthorization.execute({
        executionContractId: contract.executionContractId,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        actor: request.actor,
        authorityEvidenceId: request.authorityEvidenceId,
        correlationId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      });
      if (!authorization.ok) {
        return deny(
          mapContractAuthorizationDetail(authorization.error.detailCode),
          `check_authorization_${authorization.error.detailCode}`,
          contract.executionContractId,
        );
      }
    } else {
      // Post-start: the contract is `executing`, which the T-A4 gate refuses
      // by design. Only the authority bar is re-verified here.
      const verification = verifyAttemptAuthority(this.authority, {
        requiredAuthority: contract.requiredAuthority,
        actorId: request.actor.actorId,
        scope: contract.scope,
        evidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        displayName: request.actor.displayName,
      });
      if (!verification.ok) {
        return deny(
          authorityFailureDetail(verification.reason),
          verification.reason,
          contract.executionContractId,
        );
      }
    }

    const durationMs = Date.now() - started;
    this.audit.append({
      event: "oa.execution_attempt.authorization_checked",
      ts: timestamp,
      correlationId,
      attemptId: attempt.attemptId,
      executionContractId: contract.executionContractId,
      contractStatus: contract.status,
      result: "ok",
      durationMs,
    });
    return { ok: true, authorized: true, attempt, durationMs };
  }
}
