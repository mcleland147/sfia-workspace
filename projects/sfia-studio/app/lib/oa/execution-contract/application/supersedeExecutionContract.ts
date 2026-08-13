import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  assertNoSelfSupersession,
  assertNotTa5Injection,
  assertPrefixedId,
  cloneContractArrays,
  EXECUTION_CONTRACT_SCHEMA_VERSION,
  isTa5Status,
  isValidSupersessionReason,
  validateBuildFields,
} from "../domain/invariants";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";
import type {
  ActorReference,
  AuthorityClass,
  ExecutionContract,
  ExecutionContractResult,
  Reversibility,
  SupersedeExecutionContractRequest,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import { verifyRequiredAuthority } from "./authorityHelper";

function newId(prefix: "cor" | "prv"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type SupersedeSnapshot = {
  newExecutionContractId: string;
  supersedesExecutionContractId: string;
  supersessionReason: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
  action: string | undefined;
  target: string | undefined;
  scope: string | undefined;
  requiredAuthority: AuthorityClass | undefined;
  reversibility: Reversibility | undefined;
  idempotencyKey: string | undefined;
  adapterExportRef: string | undefined;
  status: "draft" | "proposed";
  selectedAgentRef: string | undefined;
};

/**
 * SupersedeExecutionContract — new id + supersedesExecutionContractId + reason.
 * Old → superseded immutable; successor becomes the current in the lineage.
 * Self-supersession rejected. Concurrent OCC via expectedVersion.
 * Reverse superseded-by is derived at read time (listSuperseding).
 * Successor initial status must be draft|proposed; T-A5 injection refused.
 */
export class SupersedeExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: SupersedeExecutionContractRequest,
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
        executionContractId: request.newExecutionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.superseded",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.newExecutionContractId,
        supersedesExecutionContractId: request.supersedesExecutionContractId,
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
      if (!isValidSupersessionReason(request.supersessionReason)) {
        return fail("SUPERSESSION_REASON_INVALID", "whitespace_zwsp_or_empty");
      }

      const ta5 = assertNotTa5Injection({
        status: request.status,
        selectedAgentRef: request.selectedAgentRef,
      });
      if (ta5) {
        return fail(ta5.detailCode, ta5.reason);
      }

      const selfErr = assertNoSelfSupersession(
        request.newExecutionContractId,
        request.supersedesExecutionContractId,
      );
      if (selfErr) {
        return fail(selfErr.detailCode, selfErr.reason);
      }

      const newIdErr = assertPrefixedId(
        request.newExecutionContractId,
        "xct:",
      );
      if (newIdErr) {
        return fail(newIdErr.detailCode, newIdErr.reason);
      }
      const oldIdErr = assertPrefixedId(
        request.supersedesExecutionContractId,
        "xct:",
      );
      if (oldIdErr) {
        return fail(oldIdErr.detailCode, oldIdErr.reason);
      }

      const initialStatus = request.status ?? "draft";
      if (initialStatus !== "draft" && initialStatus !== "proposed") {
        return fail("CONTRACT_INVALID", "supersede_status_invalid");
      }

      const cloned = cloneContractArrays({
        decisionRefs: request.decisionRefs,
        requiredCapabilities: request.requiredCapabilities,
        constraints: request.constraints,
        stopConditions: request.stopConditions,
        evidenceRequirements: request.evidenceRequirements,
        expectedOutputs: request.expectedOutputs,
        inputs: request.inputs,
      });

      const snap: SupersedeSnapshot = {
        newExecutionContractId: request.newExecutionContractId,
        supersedesExecutionContractId: request.supersedesExecutionContractId,
        supersessionReason: request.supersessionReason,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        action: request.action,
        target: request.target,
        scope: request.scope,
        requiredAuthority: request.requiredAuthority,
        reversibility: request.reversibility,
        idempotencyKey: request.idempotencyKey,
        adapterExportRef: request.adapterExportRef,
        status: initialStatus,
        selectedAgentRef: undefined,
      };
      void snap.claimedAuthorityLevel;
      void snap.selectedAgentRef;

      const prior = await this.contracts.findById(
        snap.supersedesExecutionContractId,
      );
      if (!prior) {
        return fail("CONTRACT_NOT_FOUND", "missing_prior");
      }
      if (isTa5Status(prior.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${prior.status}`, {
          projectId: prior.projectId,
        });
      }
      if (prior.status === "superseded" || prior.status === "cancelled") {
        return fail("STATE_CONFLICT", `prior_status_${prior.status}`, {
          projectId: prior.projectId,
        });
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== prior.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: prior.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: prior.version,
        });
      }

      const existingNew = await this.contracts.findById(
        snap.newExecutionContractId,
      );
      if (existingNew) {
        return fail("CONTRACT_ALREADY_EXISTS", "duplicate_successor", {
          projectId: prior.projectId,
        });
      }

      const requiredAuthority =
        snap.requiredAuthority ?? prior.requiredAuthority;
      const scope = snap.scope ?? prior.scope;
      const action = snap.action ?? prior.action;
      const target = snap.target ?? prior.target;
      const reversibility = snap.reversibility ?? prior.reversibility;
      // Explicit overrides (including empty arrays) take precedence — no silent fallback.
      const decisionRefs =
        request.decisionRefs !== undefined
          ? cloned.decisionRefs
          : [...(prior.decisionRefs ?? [])];
      const requiredCapabilities =
        request.requiredCapabilities !== undefined
          ? cloned.requiredCapabilities
          : [...prior.requiredCapabilities];
      const constraints =
        request.constraints !== undefined
          ? cloned.constraints
          : [...prior.constraints];
      const stopConditions =
        request.stopConditions !== undefined
          ? cloned.stopConditions
          : [...prior.stopConditions];
      const evidenceRequirements =
        request.evidenceRequirements !== undefined
          ? cloned.evidenceRequirements
          : [...prior.evidenceRequirements];
      const idempotencyKey =
        snap.idempotencyKey ??
        `${prior.idempotencyKey}-supersede-${snap.newExecutionContractId}`;

      // Validate successor fields like Build when overrides (or merged) present.
      const fieldViolation = validateBuildFields({
        executionContractId: snap.newExecutionContractId,
        projectId: prior.projectId,
        cycleInstanceId: prior.cycleInstanceId,
        decisionRefs,
        action,
        target,
        scope,
        requiredCapabilities,
        requiredAuthority,
        constraints,
        stopConditions,
        evidenceRequirements,
        reversibility,
        idempotencyKey,
        correlationId,
        status: snap.status,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason, {
          projectId: prior.projectId,
        });
      }

      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority,
        actorId: snap.actor.actorId,
        scope,
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
          requiredAuthority === "MORRIS" ? "N3" : requiredAuthority,
        scope,
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
          { projectId: prior.projectId },
        );
      }

      const successor: ExecutionContract = {
        schemaVersion: EXECUTION_CONTRACT_SCHEMA_VERSION,
        executionContractId: snap.newExecutionContractId,
        projectId: prior.projectId,
        cycleInstanceId: prior.cycleInstanceId,
        decisionRefs,
        doctrinePackageRef: prior.doctrinePackageRef
          ? structuredClone(prior.doctrinePackageRef)
          : undefined,
        action,
        target,
        scope,
        inputs:
          cloned.inputs !== undefined
            ? cloned.inputs
            : prior.inputs
              ? structuredClone(prior.inputs)
              : undefined,
        expectedOutputs:
          cloned.expectedOutputs.length > 0
            ? cloned.expectedOutputs
            : prior.expectedOutputs
              ? [...prior.expectedOutputs]
              : undefined,
        requiredCapabilities,
        requiredAuthority,
        constraints,
        stopConditions,
        evidenceRequirements,
        reversibility,
        idempotencyKey,
        correlationId,
        status: snap.status,
        version: 1,
        supersedesExecutionContractId: snap.supersedesExecutionContractId,
        supersessionReason: snap.supersessionReason,
        adapterExportRef: snap.adapterExportRef ?? prior.adapterExportRef,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: newId("prv"),
          actor: structuredClone(snap.actor),
          source: "execution_adapter",
          timestamp,
          correlationId,
          projectId: prior.projectId,
          cycleInstanceId: prior.cycleInstanceId,
          supersedes: snap.supersedesExecutionContractId,
        },
      };
      successor.semanticFingerprint =
        computeExecutionContractSemanticFingerprint(successor);

      let supersededContract: ExecutionContract | undefined;
      let savedSuccessor: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(
          snap.supersedesExecutionContractId,
        );
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (current.status === "superseded" || current.status === "cancelled") {
          throw Object.assign(new Error("already"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (isTa5Status(current.status)) {
          throw Object.assign(new Error("ta5"), {
            detailCode: "TA5_STATUS_REFUSED" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const again = await this.contracts.findById(
          snap.newExecutionContractId,
        );
        if (again) {
          throw Object.assign(new Error("exists"), {
            detailCode: "CONTRACT_ALREADY_EXISTS" as const,
          });
        }

        const oldNext: ExecutionContract = {
          ...current,
          status: "superseded",
          supersessionReason: snap.supersessionReason,
          version: current.version + 1,
        };
        await this.contracts.save(oldNext);
        await this.contracts.save(successor);
        supersededContract = oldNext;
        savedSuccessor = successor;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "race", {
            projectId: prior.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_supersede_failed", {
          projectId: prior.projectId,
        });
      }

      if (!savedSuccessor || !supersededContract) {
        return fail("PERSISTENCE_FAILURE", "atomic_supersede_incomplete", {
          projectId: prior.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.superseded",
        ts: timestamp,
        correlationId,
        projectId: savedSuccessor.projectId,
        executionContractId: savedSuccessor.executionContractId,
        supersedesExecutionContractId: snap.supersedesExecutionContractId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(savedSuccessor),
        supersededContract: structuredClone(supersededContract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
