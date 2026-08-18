import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ProjectServices } from "@/lib/oa/project";
import { createExecutionError } from "../domain/errors";
import {
  assertNotTa5Injection,
  cloneContractArrays,
  contractIdempotencyFingerprint,
  EXECUTION_CONTRACT_SCHEMA_VERSION,
  validateBuildFields,
} from "../domain/invariants";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";
import type {
  ActorReference,
  AuthorityClass,
  BuildExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
  Reversibility,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import { verifyRequiredAuthority } from "./authorityHelper";

function newId(prefix: "cor" | "prv"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type BuildSnapshot = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId: string | undefined;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: AuthorityClass;
  reversibility: Reversibility;
  executionWindowClass: BuildExecutionContractRequest["executionWindowClass"];
  idempotencyKey: string;
  correlationId: string;
  status: "draft" | "proposed";
  adapterExportRef: string | undefined;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  claimedAuthorityLevel: string | undefined;
  doctrinePackageRef: BuildExecutionContractRequest["doctrinePackageRef"];
};

/**
 * BuildExecutionContract — create draft|proposed.
 * Requires project exists; decisionRefs accepted+current same project.
 * Does NOT consume Confirmation.
 * Does NOT set selectedAgentRef / T-A5 statuses.
 *
 * B1: snapshot request fields BEFORE any await (TOCTOU).
 */
export class BuildExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly projectServices: ProjectServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly decisionServices: DecisionServices,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: BuildExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        projectId: extra?.projectId ?? request.projectId,
        executionContractId:
          extra?.executionContractId ?? request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.built",
        ts: timestamp,
        correlationId,
        projectId: error.projectId ?? request.projectId,
        executionContractId:
          error.executionContractId ?? request.executionContractId,
        status: request.status ?? "draft",
        requiredAuthority: String(request.requiredAuthority),
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const ta5 = assertNotTa5Injection({
        status: request.status,
        selectedAgentRef: request.selectedAgentRef,
      });
      if (ta5) {
        return fail(ta5.detailCode, ta5.reason);
      }
      // Hostile claimedAuthorityLevel ignored after snapshot for audit trail.
      void request.claimedAuthorityLevel;

      const cloned = cloneContractArrays({
        decisionRefs: request.decisionRefs,
        requiredCapabilities: request.requiredCapabilities,
        constraints: request.constraints,
        stopConditions: request.stopConditions,
        evidenceRequirements: request.evidenceRequirements,
        expectedOutputs: request.expectedOutputs,
        inputs: request.inputs,
      });

      const snap: BuildSnapshot = {
        executionContractId: request.executionContractId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: request.action,
        target: request.target,
        scope: request.scope,
        requiredAuthority: request.requiredAuthority,
        reversibility: request.reversibility,
        executionWindowClass: request.executionWindowClass,
        idempotencyKey: request.idempotencyKey,
        correlationId,
        status: request.status ?? "draft",
        adapterExportRef: request.adapterExportRef,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        doctrinePackageRef: request.doctrinePackageRef
          ? structuredClone(request.doctrinePackageRef)
          : undefined,
      };

      const fieldViolation = validateBuildFields({
        executionContractId: snap.executionContractId,
        projectId: snap.projectId,
        cycleInstanceId: snap.cycleInstanceId,
        decisionRefs: cloned.decisionRefs,
        action: snap.action,
        target: snap.target,
        scope: snap.scope,
        requiredCapabilities: cloned.requiredCapabilities,
        requiredAuthority: snap.requiredAuthority,
        constraints: cloned.constraints,
        stopConditions: cloned.stopConditions,
        evidenceRequirements: cloned.evidenceRequirements,
        reversibility: snap.reversibility,
        executionWindowClass: snap.executionWindowClass,
        idempotencyKey: snap.idempotencyKey,
        correlationId: snap.correlationId,
        status: snap.status,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason);
      }

      const existingById = await this.contracts.findById(
        snap.executionContractId,
      );
      if (existingById) {
        return fail("CONTRACT_ALREADY_EXISTS", "duplicate_id");
      }

      const byIdem = await this.contracts.findByIdempotencyKey(
        snap.idempotencyKey,
      );
      if (byIdem) {
        const fp = contractIdempotencyFingerprint({
          projectId: snap.projectId,
          action: snap.action,
          target: snap.target,
          scope: snap.scope,
          requiredAuthority: snap.requiredAuthority,
          decisionRefs: cloned.decisionRefs,
          constraints: cloned.constraints,
          requiredCapabilities: cloned.requiredCapabilities,
          stopConditions: cloned.stopConditions,
          evidenceRequirements: cloned.evidenceRequirements,
          reversibility: snap.reversibility,
          executionWindowClass: snap.executionWindowClass,
          status: snap.status,
        });
        const existingFp = contractIdempotencyFingerprint({
          projectId: byIdem.projectId,
          action: byIdem.action,
          target: byIdem.target,
          scope: byIdem.scope,
          requiredAuthority: byIdem.requiredAuthority,
          decisionRefs: byIdem.decisionRefs ?? [],
          constraints: byIdem.constraints,
          requiredCapabilities: byIdem.requiredCapabilities,
          stopConditions: byIdem.stopConditions,
          evidenceRequirements: byIdem.evidenceRequirements,
          reversibility: byIdem.reversibility,
          executionWindowClass: byIdem.executionWindowClass,
          status: byIdem.status,
        });
        if (fp === existingFp) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.execution_contract.built",
            ts: timestamp,
            correlationId,
            projectId: byIdem.projectId,
            executionContractId: byIdem.executionContractId,
            status: byIdem.status,
            requiredAuthority: byIdem.requiredAuthority,
            result: "ok",
            durationMs,
            reusedFromIdempotencyKey: true,
          });
          return {
            ok: true,
            contract: structuredClone(byIdem),
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("CONTRACT_IDEMPOTENCY_CONFLICT", "idempotency_mismatch");
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: snap.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      if (snap.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable");
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: snap.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle");
        }
        if (cycleResult.cycle.projectId !== snap.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch");
        }
      }

      for (const decisionId of cloned.decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            executionContractId: snap.executionContractId,
            projectId: snap.projectId,
          });
        }
        const d = decisionResult.decision;
        if (d.projectId !== snap.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch");
        }
        if (d.status !== "accepted") {
          return fail("DECISION_NOT_CURRENT", `decision_status_${d.status}`);
        }
      }

      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: snap.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: snap.scope,
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
          snap.requiredAuthority === "MORRIS" ? "N3" : snap.requiredAuthority,
        scope: snap.scope,
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
        );
      }

      const contract: ExecutionContract = {
        schemaVersion: EXECUTION_CONTRACT_SCHEMA_VERSION,
        executionContractId: snap.executionContractId,
        projectId: snap.projectId,
        cycleInstanceId: snap.cycleInstanceId,
        decisionRefs: cloned.decisionRefs,
        doctrinePackageRef: snap.doctrinePackageRef
          ? structuredClone(snap.doctrinePackageRef)
          : undefined,
        action: snap.action,
        target: snap.target,
        scope: snap.scope,
        inputs: cloned.inputs,
        expectedOutputs:
          cloned.expectedOutputs.length > 0
            ? cloned.expectedOutputs
            : undefined,
        requiredCapabilities: cloned.requiredCapabilities,
        requiredAuthority: snap.requiredAuthority,
        constraints: cloned.constraints,
        stopConditions: cloned.stopConditions,
        evidenceRequirements: cloned.evidenceRequirements,
        reversibility: snap.reversibility,
        ...(snap.executionWindowClass
          ? { executionWindowClass: snap.executionWindowClass }
          : {}),
        idempotencyKey: snap.idempotencyKey,
        correlationId: snap.correlationId,
        status: snap.status,
        version: 1,
        adapterExportRef: snap.adapterExportRef,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: newId("prv"),
          actor: structuredClone(snap.actor),
          source: "execution_adapter",
          timestamp,
          correlationId,
          projectId: snap.projectId,
          cycleInstanceId: snap.cycleInstanceId,
        },
      };
      contract.semanticFingerprint =
        computeExecutionContractSemanticFingerprint(contract);

      const persist = async () => {
        const again = await this.contracts.findById(snap.executionContractId);
        if (again) {
          throw Object.assign(new Error("exists"), {
            detailCode: "CONTRACT_ALREADY_EXISTS" as const,
          });
        }
        await this.contracts.save(contract);
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (
          err &&
          typeof err === "object" &&
          "detailCode" in err
        ) {
          return fail(
            (err as { detailCode: Parameters<typeof createExecutionError>[0]["detailCode"] })
              .detailCode,
            err instanceof Error ? err.message : "race",
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_build_failed");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.built",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        status: contract.status,
        requiredAuthority: contract.requiredAuthority,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
