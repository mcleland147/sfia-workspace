import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import { denyByDefaultMatch, isTa5Status } from "../domain/invariants";
import type {
  ActorReference,
  CheckAuthorizationResult,
  CheckExecutionAuthorizationRequest,
} from "../domain/types";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import { verifyRequiredAuthority } from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type CheckSnapshot = {
  executionContractId: string;
  action: string;
  target: string;
  scope: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  claimedAuthorityLevel: string | undefined;
};

/**
 * CheckExecutionAuthorization — gate for T-A5 StartExecution.
 * NEVER mutates. NEVER executes. Deny-by-default on action/target/scope.
 *
 * Requires: status=confirmed, not cancelled/superseded, not T-A5 status,
 * decisions still accepted+current, Critical ack if applicable, authority OK.
 */
export class CheckExecutionAuthorization {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly decisionServices: DecisionServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
  ) {}

  async execute(
    request: CheckExecutionAuthorizationRequest,
  ): Promise<CheckAuthorizationResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): CheckAuthorizationResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.authorization_checked",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        authorized: false,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, authorized: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const snap: CheckSnapshot = {
        executionContractId: request.executionContractId,
        action: request.action,
        target: request.target,
        scope: request.scope,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      };
      void snap.claimedAuthorityLevel;

      const contract = await this.contracts.findById(snap.executionContractId);
      if (!contract) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(contract.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${contract.status}`, {
          projectId: contract.projectId,
        });
      }
      if (contract.status === "cancelled" || contract.status === "superseded") {
        return fail("STATE_CONFLICT", `status_${contract.status}`, {
          projectId: contract.projectId,
        });
      }
      if (contract.status !== "confirmed") {
        return fail("STATE_CONFLICT", `not_confirmed_${contract.status}`, {
          projectId: contract.projectId,
        });
      }

      // Current = no successor has superseded this contract.
      const successors = await this.contracts.listSuperseding(
        contract.executionContractId,
      );
      if (successors.length > 0) {
        return fail("STATE_CONFLICT", "not_current_has_successor", {
          projectId: contract.projectId,
        });
      }

      const matchErr = denyByDefaultMatch({
        contractAction: contract.action,
        contractTarget: contract.target,
        contractScope: contract.scope,
        requestedAction: snap.action,
        requestedTarget: snap.target,
        requestedScope: snap.scope,
      });
      if (matchErr) {
        return fail(matchErr.detailCode, matchErr.reason, {
          projectId: contract.projectId,
        });
      }

      if (contract.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
            projectId: contract.projectId,
          });
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: contract.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle", {
            projectId: contract.projectId,
          });
        }
        if (
          cycleResult.cycle.profile === "Critical" &&
          cycleResult.cycle.status === "proposed"
        ) {
          return fail(
            "CRITICAL_NOT_ACKNOWLEDGED",
            "critical_proposed_no_public_ack",
            { projectId: contract.projectId },
          );
        }
      }

      const decisionRefs = contract.decisionRefs ?? [];
      for (const decisionId of decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            projectId: contract.projectId,
          });
        }
        if (decisionResult.decision.projectId !== contract.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch", {
            projectId: contract.projectId,
          });
        }
        if (decisionResult.decision.status !== "accepted") {
          return fail(
            "DECISION_NOT_CURRENT",
            `decision_status_${decisionResult.decision.status}`,
            { projectId: contract.projectId },
          );
        }
      }

      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: contract.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: contract.scope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          contract.requiredAuthority === "MORRIS"
            ? "N3"
            : contract.requiredAuthority,
        scope: contract.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: contract.projectId },
        );
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.authorization_checked",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        authorized: true,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        authorized: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
