/**
 * StartExecution — normative RTA5-09 sequence.
 *
 *  1. Preconditions: authorization, TTL, agent_selection Confirmation when the
 *     strategy is human_confirmed_proposal, registry revalidation, active
 *     index, OCC.
 *  2. The Attempt is ALREADY persisted `accepted` (Select did it). Start never
 *     launches before an `accepted` Attempt exists (anti launch-then-persist).
 *  3. The contract stays `confirmed` while the Attempt is `accepted`.
 *  4. Fixture path: only the injected fake adapter `launch(attemptId)` is
 *     called; it is idempotent. REAL path (`cursor_cli_real`) NEVER calls the
 *     fixture adapter — it uses RealExecutionLaunchPort + safety journal.
 *  5. Launch reject/failure → Attempt `failed`, never `executing`.
 *  6. LaunchAck → Attempt `running` persisted FIRST, then contract
 *     `executing`, then the agent_selection Confirmation is consumed.
 *  7. Contract update failure after `running` → fail-closed compensation of
 *     the Attempt, audited, with no second adapter call and no business
 *     rollback.
 *
 * Contract failure mapping by cause (RTA5-09 "selon cause" ∩ modeled matrix):
 * - launch REJECT (deterministic refusal, nothing started) → contract stays
 *   `confirmed`, so an authorized Retry remains possible;
 * - launch FAIL (indeterminate adapter error) → contract `failed`.
 *
 * M4 REAL path (D-M4-01…05): Gate D consume+CREATED is atomic and precedes
 * realLaunchPort.launch; LAUNCHED is journaled before Attempt `running`.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { DecisionServices } from "@/lib/oa/decision";
import type {
  CheckExecutionAuthorization,
  ExecutionContract,
  ExecutionContractRepositoryPort,
} from "@/lib/oa/execution-contract";
import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import {
  AGENT_SELECTION_SCOPE,
  agentMatchViolation,
  assertAgentSelectionConfirmation,
} from "../domain/invariants";
import type {
  ActorReference,
  AttemptDetailCode,
  ExecutionAttempt,
  ExecutionAttemptResult,
  StartExecutionRequest,
} from "../domain/types";
import type {
  ContractSafetyIdentity,
  GateDGrant,
} from "../domain/realLaunchSafety";
import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAdapterPort } from "../ports/executionAdapter";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import type { RealExecutionLaunchPort } from "../ports/realExecutionLaunchPort";
import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
import {
  authorityFailureDetail,
  contractGateDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

function isRealExecutionAgent(
  agent: Parameters<typeof isM4BoundedReadOnlyRealAgent>[0],
): boolean {
  return (
    agent.executionMode === "cursor_cli_real" ||
    isM4BoundedReadOnlyRealAgent(agent)
  );
}

const FULL_GIT_SHA_RE = /^[0-9a-f]{40}$/i;

/** Contract-bound baseHeadSha from ExecutionContract.inputs (T-A4 inputs already exist). */
export function extractContractBaseHeadSha(
  contract: ExecutionContract,
): string | null {
  const inputs = contract.inputs;
  if (!inputs || typeof inputs !== "object") return null;
  const raw = (inputs as Record<string, unknown>).baseHeadSha;
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!FULL_GIT_SHA_RE.test(trimmed)) return null;
  return trimmed.toLowerCase();
}

function mapRealLaunchRejectDetail(
  reason: string,
  detailCode?: string,
): AttemptDetailCode {
  if (
    detailCode === "REAL_BOUNDARY_DISABLED" ||
    detailCode === "CURSOR_UNAVAILABLE" ||
    detailCode === "REAL_WORKSPACE_INVALID" ||
    detailCode === "REAL_LAUNCH_FAILED" ||
    detailCode === "REAL_AGENT_PROFILE_INVALID"
  ) {
    return detailCode;
  }
  if (
    reason === "studio_cursor_real_disabled" ||
    reason.includes("real_disabled")
  ) {
    return "REAL_BOUNDARY_DISABLED";
  }
  if (reason === "cursor_unavailable") return "CURSOR_UNAVAILABLE";
  if (
    reason === "workspace_invalid" ||
    reason === "workspace_outside_exec_root" ||
    reason.includes("REAL_WORKSPACE_INVALID") ||
    reason.includes("base_head_sha") ||
    reason.includes("workspace_prepare")
  ) {
    return "REAL_WORKSPACE_INVALID";
  }
  if (reason === "unresolved_contract_refused") {
    return "REAL_AGENT_PROFILE_INVALID";
  }
  return "REAL_LAUNCH_FAILED";
}

export class StartExecution {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly checkExecutionAuthorization: CheckExecutionAuthorization,
    private readonly decisionServices: DecisionServices,
    private readonly authority: AuthorityResolverPort,
    private readonly registry: AgentRegistryPort,
    private readonly adapter: ExecutionAdapterPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly store?: ExecutionAttemptTechnicalStorePort,
    private readonly realLaunchPort?: RealExecutionLaunchPort,
    private readonly safetyJournal?: RealLaunchSafetyJournalPort,
  ) {}

  async execute(
    request: StartExecutionRequest,
  ): Promise<ExecutionAttemptResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ): ExecutionAttemptResult => {
      const { attempt, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const error = createAttemptError({
        detailCode,
        timestamp,
        correlationId,
        attemptId: request.attemptId,
        internalCauseRef,
        ...errorExtra,
      });
      this.audit.append({
        event: "oa.execution_attempt.started",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, attempt, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("ATTEMPT_INVALID", "actor_required");
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }

      // Crash-window replay: the Attempt is already running — return the same
      // state without calling the adapter a second time.
      if (attempt.status === "running") {
        const contract = await this.contracts.findById(
          attempt.executionContractId,
        );
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.execution_attempt.started",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: attempt.executionContractId,
          newStatus: "running",
          contractStatus: contract?.status,
          result: "ok",
          durationMs,
        });
        return {
          ok: true,
          attempt,
          contractStatus: contract?.status,
          contractVersion: contract?.version,
          replayed: true,
          durationMs,
        };
      }
      if (attempt.status !== "accepted") {
        return fail("ATTEMPT_STATE_CONFLICT", `attempt_status_${attempt.status}`, {
          executionContractId: attempt.executionContractId,
        });
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
      if (
        !attempt.selectionExpiresAt ||
        Date.parse(attempt.selectionExpiresAt) <= Date.parse(timestamp)
      ) {
        // Detection only: no auto-cancel (RTA5-08). A human Cancel disposes
        // of the expired Attempt and releases the active invariant.
        return fail("AGENT_SELECTION_EXPIRED", "selection_ttl_expired", {
          executionContractId: attempt.executionContractId,
        });
      }

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }
      const gate = contractGateDetail(contract);
      if (gate) {
        this.audit.append({
          event: "oa.execution_attempt.stale_context_detected",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractStatus: contract.status,
          result: "error",
          detailCode: gate,
          durationMs: Date.now() - started,
        });
        return fail(gate, `contract_status_${contract.status}`, {
          executionContractId: contract.executionContractId,
        });
      }
      if (contract.version !== attempt.executionContractVersion) {
        this.audit.append({
          event: "oa.execution_attempt.stale_context_detected",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractStatus: contract.status,
          result: "error",
          detailCode: "EXECUTION_CONTRACT_STALE",
          durationMs: Date.now() - started,
        });
        return fail("EXECUTION_CONTRACT_STALE", "contract_version_changed", {
          executionContractId: contract.executionContractId,
          expectedVersion: attempt.executionContractVersion,
          currentVersion: contract.version,
        });
      }
      if (
        request.expectedContractVersion !== undefined &&
        request.expectedContractVersion !== contract.version
      ) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_occ_mismatch", {
          executionContractId: contract.executionContractId,
          expectedVersion: request.expectedContractVersion,
          currentVersion: contract.version,
        });
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
        return fail(
          mapContractAuthorizationDetail(authorization.error.detailCode),
          `check_authorization_${authorization.error.detailCode}`,
          { executionContractId: contract.executionContractId },
        );
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      if (!agent) {
        return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
          selectedAgentRef: attempt.selectedAgentRef,
        });
      }
      const agentViolation = agentMatchViolation(agent, {
        requiredCapabilities: [...contract.requiredCapabilities],
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
      });
      if (agentViolation) {
        return fail(agentViolation.detailCode, agentViolation.reason, {
          selectedAgentRef: attempt.selectedAgentRef,
        });
      }

      let consumeConfirmationId: string | undefined;
      if (attempt.selectionStrategy === "human_confirmed_proposal") {
        if (!attempt.agentConfirmationRef) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_ref_missing",
          );
        }
        const confirmation = await this.decisionServices.confirmations.findById(
          attempt.agentConfirmationRef,
        );
        if (!confirmation) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_not_found",
            { confirmationId: attempt.agentConfirmationRef },
          );
        }
        const violation = assertAgentSelectionConfirmation({
          confirmationScope: confirmation.scope,
          confirmationLevel: confirmation.level,
          confirmationStatus: confirmation.status,
          confirmationActionRef: confirmation.actionRef,
          confirmationExpiresAt: confirmation.expiresAt,
          expectedBinding: {
            executionContractId: contract.executionContractId,
            executionContractVersion: contract.version,
            selectedAgentRef: attempt.selectedAgentRef,
          },
          requiredAuthority: contract.requiredAuthority,
          selectionExpiresAt: attempt.selectionExpiresAt,
          nowIso: timestamp,
        });
        if (violation) {
          return fail(violation.detailCode, violation.reason, {
            confirmationId: attempt.agentConfirmationRef,
          });
        }
        const confirmerVerification = verifyAttemptAuthority(this.authority, {
          requiredAuthority: contract.requiredAuthority,
          actorId: confirmation.requestedTo.actorId,
          scope: AGENT_SELECTION_SCOPE,
        });
        if (!confirmerVerification.ok) {
          return fail(
            authorityFailureDetail(confirmerVerification.reason),
            `confirmer_${confirmerVerification.reason}`,
            { confirmationId: attempt.agentConfirmationRef },
          );
        }
        consumeConfirmationId = attempt.agentConfirmationRef;
      }

      try {
        await this.attempts.assertActiveIndexConsistent();
      } catch (err) {
        if (isExecutionAttemptDomainError(err)) {
          return fail(err.detailCode, err.message, {
            executionContractId: contract.executionContractId,
          });
        }
        return fail("ACTIVE_INDEX_DRIFT", "active_index_check_failed");
      }
      const active = await this.attempts.findActiveByContract(
        contract.executionContractId,
      );
      if (!active || active.attemptId !== attempt.attemptId) {
        return fail("EXECUTION_ALREADY_ACTIVE", "another_attempt_is_active", {
          executionContractId: contract.executionContractId,
        });
      }

      // M4 REAL path — never touch the fixture adapter.
      if (isRealExecutionAgent(agent)) {
        return this.executeRealLaunch({
          request,
          attempt,
          contract,
          agent,
          consumeConfirmationId,
          timestamp,
          correlationId,
          started,
          fail,
        });
      }

      // Step 4 — fixture adapter ONLY (non-REAL agents).
      let launch;
      try {
        launch = await this.adapter.launch({
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          executionContractVersion: contract.version,
          selectedAgentRef: attempt.selectedAgentRef,
          adapterRef: agent.adapterRef,
          correlationId,
        });
      } catch {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_threw",
          timestamp,
          correlationId,
          started,
        });
      }

      if (launch.outcome !== "ack") {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: launch.outcome,
          reason: launch.reason,
          timestamp,
          correlationId,
          started,
        });
      }
      if (launch.attemptId !== attempt.attemptId) {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_attempt_binding_mismatch",
          timestamp,
          correlationId,
          started,
        });
      }
      if (launch.adapterId !== this.adapter.adapterId) {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_identity_binding_mismatch",
          timestamp,
          correlationId,
          started,
        });
      }

      return this.persistRunningAfterAck({
        attempt,
        contract,
        actor: request.actor,
        consumeConfirmationId,
        timestamp,
        correlationId,
        started,
        adapterIdForAudit: this.adapter.adapterId,
        fail,
      });
    } catch {
      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
    }
  }

  private async executeRealLaunch(input: {
    request: StartExecutionRequest;
    attempt: ExecutionAttempt;
    contract: ExecutionContract;
    agent: NonNullable<ReturnType<AgentRegistryPort["getAgent"]>>;
    consumeConfirmationId: string | undefined;
    timestamp: string;
    correlationId: string;
    started: number;
    fail: (
      detailCode: AttemptDetailCode,
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ) => ExecutionAttemptResult;
  }): Promise<ExecutionAttemptResult> {
    const {
      request,
      attempt,
      contract,
      agent,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      fail,
    } = input;

    if (!this.safetyJournal) {
      return fail("LAUNCH_JOURNAL_UNAVAILABLE", "safety_journal_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    if (!this.realLaunchPort) {
      return fail("REAL_BOUNDARY_DISABLED", "real_launch_port_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    if (!isM4BoundedReadOnlyRealAgent(agent)) {
      return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_bounded_readonly_real", {
        selectedAgentRef: attempt.selectedAgentRef,
      });
    }

    // Contract-bound baseHeadSha BEFORE Gate D consume / CREATED (R2).
    const baseHeadSha = extractContractBaseHeadSha(contract);
    if (!baseHeadSha) {
      const raw =
        contract.inputs &&
        typeof contract.inputs === "object" &&
        "baseHeadSha" in (contract.inputs as Record<string, unknown>)
          ? (contract.inputs as Record<string, unknown>).baseHeadSha
          : undefined;
      return fail(
        raw === undefined || raw === null || raw === ""
          ? "REAL_WORKSPACE_INVALID"
          : "REAL_WORKSPACE_INVALID",
        raw === undefined || raw === null || raw === ""
          ? "contract_base_head_sha_missing"
          : "contract_base_head_sha_invalid",
        { executionContractId: contract.executionContractId },
      );
    }

    const fingerprint =
      contract.semanticFingerprint ??
      computeExecutionContractSemanticFingerprint(contract);
    if (!fingerprint) {
      return fail("ATTEMPT_INVALID", "semantic_fingerprint_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    const identity: ContractSafetyIdentity = {
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      semanticFingerprint: fingerprint,
    };

    if (await this.safetyJournal.hasAmbiguousFrontier(identity)) {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        "ambiguous_frontier_blocks_real_start",
        { executionContractId: contract.executionContractId },
      );
    }
    const disposition =
      await this.safetyJournal.reconcileDispositionForIdentity(identity);
    if (disposition !== "CLEAR") {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        `frontier_disposition_${disposition}`,
        { executionContractId: contract.executionContractId },
      );
    }
    if (
      (await this.safetyJournal.hasKindForAttempt(
        attempt.attemptId,
        "CREATED",
      )) ||
      (await this.safetyJournal.hasKindForAttempt(
        attempt.attemptId,
        "LAUNCHED",
      ))
    ) {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        "attempt_frontier_already_present",
        { executionContractId: contract.executionContractId },
      );
    }

    const grant = await this.safetyJournal.findActiveGateDGrantForAttempt(
      attempt.attemptId,
    );
    if (!grant) {
      return fail("GATE_D_REQUIRED", "active_gate_d_grant_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    const bindingError = this.validateGateDGrantBinding({
      grant,
      attempt,
      identity,
      actorId: request.actor.actorId,
      nowIso: timestamp,
    });
    if (bindingError) {
      return fail(bindingError.detailCode, bindingError.reason, {
        executionContractId: contract.executionContractId,
      });
    }

    let consumedGrant: GateDGrant;
    try {
      const consumed = await this.safetyJournal.consumeGateDAndAppendCreated({
        grantId: grant.grantId,
        attemptId: attempt.attemptId,
        occurredAt: timestamp,
        identity,
        selectedAgentRef: attempt.selectedAgentRef,
        actorId: request.actor.actorId,
        correlationId,
      });
      consumedGrant = consumed.grant;
    } catch (err) {
      const message = err instanceof Error ? err.message : "consume_failed";
      if (message.includes("expired")) {
        return fail("GATE_D_EXPIRED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("mismatch")) {
        return fail("GATE_D_BINDING_MISMATCH", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("ambiguous") || message.includes("frontier")) {
        return fail("LAUNCH_RECONCILIATION_REQUIRED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("consumed") || message.includes("not_granted")) {
        return fail("GATE_D_ALREADY_CONSUMED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      return fail("GATE_D_INVALID", message, {
        executionContractId: contract.executionContractId,
      });
    }

    let launch;
    try {
      launch = await this.realLaunchPort.launch({
        attemptId: attempt.attemptId,
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        semanticFingerprint: fingerprint,
        selectedAgentRef: attempt.selectedAgentRef,
        adapterRef: agent.adapterRef,
        correlationId,
        baseHeadSha,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
      });
    } catch {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_threw",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: false,
      });
    }

    if (launch.outcome !== "ack" || launch.realProcessInvoked !== true) {
      const reason =
        launch.outcome === "ack" ? "real_process_not_invoked" : launch.reason;
      const detailCode = mapRealLaunchRejectDetail(
        reason,
        launch.outcome === "ack"
          ? undefined
          : "detailCode" in launch
            ? launch.detailCode
            : undefined,
      );
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode,
        reason,
        timestamp,
        correlationId,
        started,
        realProcessInvoked: Boolean(launch.realProcessInvoked),
      });
    }
    if (launch.attemptId !== attempt.attemptId) {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_attempt_binding_mismatch",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: true,
      });
    }
    if (launch.gatewayId !== this.realLaunchPort.gatewayId) {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_gateway_binding_mismatch",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: true,
      });
    }

    try {
      await this.safetyJournal.appendLaunched({
        attemptId: attempt.attemptId,
        occurredAt: timestamp,
        identity,
        selectedAgentRef: attempt.selectedAgentRef,
        actorId: request.actor.actorId,
        grantId: consumedGrant.grantId,
        correlationId,
        processRef: launch.processRef,
        payload: { gatewayId: launch.gatewayId },
      });
    } catch (err) {
      // Process invoked; LAUNCHED missing → CREATED-only UNKNOWN; no second launch.
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.launch_failed",
        ts: timestamp,
        correlationId,
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        selectedAgentRef: attempt.selectedAgentRef,
        adapterId: this.realLaunchPort.gatewayId,
        previousStatus: "accepted",
        newStatus: "accepted",
        result: "error",
        detailCode: "LAUNCH_RECONCILIATION_REQUIRED",
        durationMs,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode: "LAUNCH_RECONCILIATION_REQUIRED",
          timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          internalCauseRef:
            err instanceof Error
              ? `launched_persist_failed_after_invoke:${err.message}`
              : "launched_persist_failed_after_invoke",
        }),
        attempt,
        durationMs,
      };
    }

    return this.persistRunningAfterAck({
      attempt,
      contract,
      actor: request.actor,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      adapterIdForAudit: this.realLaunchPort.gatewayId,
      fail,
    });
  }

  private validateGateDGrantBinding(input: {
    grant: GateDGrant;
    attempt: ExecutionAttempt;
    identity: ContractSafetyIdentity;
    actorId: string;
    nowIso: string;
  }): { detailCode: AttemptDetailCode; reason: string } | null {
    const { grant, attempt, identity, actorId, nowIso } = input;
    if (grant.status === "consumed") {
      return { detailCode: "GATE_D_ALREADY_CONSUMED", reason: "grant_consumed" };
    }
    if (grant.status !== "granted") {
      return {
        detailCode: "GATE_D_INVALID",
        reason: `grant_status_${grant.status}`,
      };
    }
    if (Date.parse(grant.expiresAt) <= Date.parse(nowIso)) {
      return { detailCode: "GATE_D_EXPIRED", reason: "grant_expired" };
    }
    if (
      grant.attemptId !== attempt.attemptId ||
      grant.executionContractId !== identity.executionContractId ||
      grant.executionContractVersion !== identity.executionContractVersion ||
      grant.semanticFingerprint !== identity.semanticFingerprint ||
      grant.selectedAgentRef !== attempt.selectedAgentRef ||
      grant.actorId !== actorId
    ) {
      return {
        detailCode: "GATE_D_BINDING_MISMATCH",
        reason: "grant_binding_mismatch",
      };
    }
    return null;
  }

  private async persistRunningAfterAck(input: {
    attempt: ExecutionAttempt;
    contract: ExecutionContract;
    actor: ActorReference;
    consumeConfirmationId: string | undefined;
    timestamp: string;
    correlationId: string;
    started: number;
    adapterIdForAudit: string;
    fail: (
      detailCode: AttemptDetailCode,
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ) => ExecutionAttemptResult;
  }): Promise<ExecutionAttemptResult> {
    const {
      attempt,
      contract,
      actor,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      adapterIdForAudit,
      fail,
    } = input;

    // Step 6a — Attempt running FIRST.
    const runningAttempt: ExecutionAttempt = {
      ...attempt,
      status: "running",
      launchedAt: timestamp,
      startedAt: timestamp,
      updatedAt: timestamp,
      version: attempt.version + 1,
    };
    try {
      const persist = async () => {
        await this.attempts.update(runningAttempt, attempt.version);
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch (err) {
      // Fixture path: nothing real ran. REAL path after LAUNCHED: leave
      // attempt accepted; journal already has CREATED+LAUNCHED (reconcile).
      if (isExecutionAttemptDomainError(err)) {
        return fail(err.detailCode, `running_persist_${err.message}`, {
          executionContractId: contract.executionContractId,
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("EXECUTION_PERSISTENCE_FAILED", "running_persist_failed", {
        executionContractId: contract.executionContractId,
      });
    }

    // Step 6b — contract executing AFTER the Attempt is running.
    const contractWrite = await this.contractStatusWriter.write({
      executionContractId: contract.executionContractId,
      expectedVersion: contract.version,
      nextStatus: "executing",
      selectedAgentRef: attempt.selectedAgentRef,
      runningAttempt: {
        attemptId: runningAttempt.attemptId,
        status: runningAttempt.status,
      },
    });
    if (!contractWrite.ok) {
      const compensated = await this.compensateAfterRunning({
        attempt: runningAttempt,
        timestamp,
        correlationId,
        started,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          internalCauseRef: contractWrite.internalCauseRef,
          currentVersion: contractWrite.currentVersion,
        }),
        attempt: compensated,
        durationMs: Date.now() - started,
      };
    }

    // Step 6c — consume the agent_selection Confirmation on success only.
    if (consumeConfirmationId) {
      const consumed = await this.decisionServices.consumeConfirmation.execute({
        confirmationId: consumeConfirmationId,
        actor,
        correlationId,
        nowIso: timestamp,
      });
      if (!consumed.ok) {
        const alreadyConsumed =
          consumed.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED";
        if (!alreadyConsumed) {
          // Residual R-T-A3-2: the Attempt is running and the contract is
          // executing; cross-store consumption cannot be rolled back.
          this.audit.append({
            event: "oa.execution_attempt.started",
            ts: timestamp,
            correlationId,
            attemptId: attempt.attemptId,
            executionContractId: contract.executionContractId,
            confirmationRef: consumeConfirmationId,
            newStatus: "running",
            contractStatus: contractWrite.contract.status,
            result: "error",
            detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
            durationMs: Date.now() - started,
          });
          return {
            ok: false,
            error: createAttemptError({
              detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
              timestamp,
              correlationId,
              attemptId: attempt.attemptId,
              executionContractId: contract.executionContractId,
              confirmationId: consumeConfirmationId,
              internalCauseRef: `consume_${consumed.error.detailCode}`,
            }),
            attempt: runningAttempt,
            durationMs: Date.now() - started,
          };
        }
      }
    }

    const durationMs = Date.now() - started;
    this.audit.append({
      event: "oa.execution_attempt.started",
      ts: timestamp,
      correlationId,
      attemptId: runningAttempt.attemptId,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      selectedAgentRef: runningAttempt.selectedAgentRef,
      adapterId: adapterIdForAudit,
      confirmationRef: consumeConfirmationId,
      previousStatus: "accepted",
      newStatus: "running",
      contractStatus: contractWrite.contract.status,
      result: "ok",
      durationMs,
    });
    this.audit.append({
      event: "oa.execution_contract.status_written",
      ts: timestamp,
      correlationId,
      attemptId: runningAttempt.attemptId,
      executionContractId: contract.executionContractId,
      contractStatus: contractWrite.contract.status,
      result: "ok",
      durationMs,
    });

    return {
      ok: true,
      attempt: structuredClone(runningAttempt),
      contractStatus: contractWrite.contract.status,
      contractVersion: contractWrite.contract.version,
      durationMs,
    };
  }

  /** Launch reject/failure → Attempt failed, never executing. */
  private async failLaunch(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    cause: "reject" | "fail";
    reason: string;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttemptResult> {
    const detailCode =
      input.cause === "reject"
        ? ("EXECUTION_LAUNCH_REJECTED" as const)
        : ("EXECUTION_LAUNCH_FAILED" as const);
    const failedAttempt: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: `EXECUTION_LAUNCH_FAILED: ${input.cause}:${input.reason}`,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };

    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      const persist = async () => {
        await this.attempts.update(failedAttempt, input.attempt.version);
        await this.attempts.releaseActiveContract(
          failedAttempt.executionContractId,
          failedAttempt.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
      persistedAttempt = failedAttempt;
    } catch {
      persistedAttempt = undefined;
    }

    // Indeterminate adapter failure fails the contract; a deterministic
    // rejection leaves it `confirmed` so a Retry stays possible.
    let contractStatus: string | undefined;
    if (input.cause === "fail") {
      const write = await this.contractStatusWriter.write({
        executionContractId: input.attempt.executionContractId,
        expectedVersion: input.contractVersion,
        nextStatus: "failed",
        reason: "Launch failed before execution started",
      });
      contractStatus = write.ok ? write.contract.status : undefined;
    }

    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.launch_failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: this.adapter.adapterId,
      previousStatus: "accepted",
      newStatus: persistedAttempt ? "failed" : "accepted",
      contractStatus,
      stopReason: failedAttempt.stopReason,
      result: "error",
      detailCode,
      durationMs,
    });

    return {
      ok: false,
      error: createAttemptError({
        detailCode,
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: input.reason,
      }),
      attempt: persistedAttempt,
      durationMs,
    };
  }

  /**
   * REAL launch failed after CREATED (or without invoke). Marks Attempt failed.
   * Journal CREATED is left in place for reconciliation (no second launch).
   */
  private async failRealLaunch(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    detailCode: AttemptDetailCode;
    reason: string;
    timestamp: string;
    correlationId: string;
    started: number;
    realProcessInvoked: boolean;
  }): Promise<ExecutionAttemptResult> {
    const failedAttempt: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: `REAL_LAUNCH_FAILED: ${input.reason}`,
      irreversibleEffectsPossible: input.realProcessInvoked,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };

    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      const persist = async () => {
        await this.attempts.update(failedAttempt, input.attempt.version);
        await this.attempts.releaseActiveContract(
          failedAttempt.executionContractId,
          failedAttempt.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
      persistedAttempt = failedAttempt;
    } catch {
      persistedAttempt = undefined;
    }

    let contractStatus: string | undefined;
    const indeterminate =
      input.detailCode === "REAL_LAUNCH_FAILED" ||
      input.detailCode === "CURSOR_UNAVAILABLE";
    if (indeterminate) {
      const write = await this.contractStatusWriter.write({
        executionContractId: input.attempt.executionContractId,
        expectedVersion: input.contractVersion,
        nextStatus: "failed",
        reason: "REAL launch failed before acknowledgement",
      });
      contractStatus = write.ok ? write.contract.status : undefined;
    }

    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.launch_failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: this.realLaunchPort?.gatewayId,
      previousStatus: "accepted",
      newStatus: persistedAttempt ? "failed" : "accepted",
      contractStatus,
      stopReason: failedAttempt.stopReason,
      result: "error",
      detailCode: input.detailCode,
      durationMs,
    });

    return {
      ok: false,
      error: createAttemptError({
        detailCode: input.detailCode,
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: input.reason,
      }),
      attempt: persistedAttempt,
      durationMs,
    };
  }

  /**
   * Contract update failed AFTER the Attempt became running: compensate
   * fail-closed. No second adapter call, no business rollback.
   */
  private async compensateAfterRunning(input: {
    attempt: ExecutionAttempt;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttempt | undefined> {
    const compensated: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason:
        "EXECUTION_PERSISTENCE_FAILED: contract_executing_update_failed",
      irreversibleEffectsPossible: true,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };
    try {
      const persist = async () => {
        await this.attempts.update(compensated, input.attempt.version);
        await this.attempts.releaseActiveContract(
          compensated.executionContractId,
          compensated.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch {
      this.audit.append({
        event: "oa.execution_attempt.compensated",
        ts: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        newStatus: "running",
        result: "error",
        detailCode: "EXECUTION_PERSISTENCE_FAILED",
        durationMs: Date.now() - input.started,
      });
      return undefined;
    }

    this.audit.append({
      event: "oa.execution_attempt.compensated",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: compensated.attemptId,
      executionContractId: compensated.executionContractId,
      previousStatus: "running",
      newStatus: "failed",
      stopReason: compensated.stopReason,
      result: "ok",
      detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
      durationMs: Date.now() - input.started,
    });
    return compensated;
  }
}
