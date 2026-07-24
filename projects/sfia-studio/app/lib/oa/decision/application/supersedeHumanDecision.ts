import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createDecisionError } from "../domain/errors";
import {
  cloneDecisionArrays,
  validateDecisionFields,
} from "../domain/invariants";
import type {
  AuthorityLevel,
  DecisionResult,
  HumanDecision,
  SupersedeHumanDecisionRequest,
} from "../domain/types";
import type { MemoryDecisionStore } from "../infrastructure/memoryDecisionStore";
import type { AuthorityResolverPort } from "../ports/authorityResolver";
import type { DecisionAuditPort } from "../ports/decisionAudit";
import type { DecisionRepositoryPort } from "../ports/decisionRepository";

function newId(prefix: "cor" | "prv"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function requiredLevelForAuthority(
  authority: SupersedeHumanDecisionRequest["authority"],
): AuthorityLevel {
  if (authority === "morris") return "N3";
  if (authority === "delegated") return "N2";
  return "N1";
}

/**
 * SupersedeHumanDecision — immutable history: old → superseded, new with supersedes link.
 * Reason required. Re-verifies authority. OCC via expectedVersion when provided.
 */
export class SupersedeHumanDecision {
  constructor(
    private readonly decisions: DecisionRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
    private readonly store?: MemoryDecisionStore,
  ) {}

  async execute(
    request: SupersedeHumanDecisionRequest,
  ): Promise<DecisionResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createDecisionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createDecisionError>[0]>,
    ): DecisionResult => {
      const durationMs = Date.now() - started;
      const error = createDecisionError({
        detailCode,
        timestamp,
        correlationId,
        decisionId: request.newDecisionId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.decision.superseded",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        decisionId: request.newDecisionId,
        supersedesDecisionId: request.supersedesDecisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("DECISION_INVALID", "actor_required");
      }
      if (
        typeof request.reason !== "string" ||
        request.reason.trim().length < 1
      ) {
        return fail("DECISION_INVALID", "reason_required");
      }

      const prior = await this.decisions.findById(request.supersedesDecisionId);
      if (!prior) {
        return fail("DECISION_NOT_FOUND", "missing_prior");
      }
      if (prior.status === "superseded" || prior.status === "revoked") {
        return fail("STATE_CONFLICT", `prior_status_${prior.status}`, {
          projectId: prior.projectId,
        });
      }

      if (
        request.expectedVersion !== undefined &&
        (prior.version ?? 1) !== request.expectedVersion
      ) {
        return fail("VERSION_CONFLICT", "expected_version_mismatch", {
          projectId: prior.projectId,
          expectedVersion: request.expectedVersion,
          currentVersion: prior.version ?? 1,
        });
      }

      const options =
        request.options ??
        structuredClone(prior.options);
      const cloned = cloneDecisionArrays({
        options,
        reservations: request.reservations,
        evidenceRefs: request.evidenceRefs,
      });

      const fieldViolation = validateDecisionFields({
        decisionId: request.newDecisionId,
        projectId: prior.projectId,
        subject: prior.subject,
        options: cloned.options,
        selectedOptionId: request.selectedOptionId,
        authority: request.authority,
        nonStructuring: request.nonStructuring,
        cycleInstanceId: prior.cycleInstanceId,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason, {
          projectId: prior.projectId,
        });
      }

      const scope = request.scope ?? prior.scope ?? prior.subject;
      const requireMorris = request.authority === "morris";
      const requiredLevel = requiredLevelForAuthority(request.authority);

      const verification = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel,
        scope,
        evidenceId: request.authorityEvidenceId,
        authorityLevel: request.actor.authorityLevel,
        displayName: request.actor.displayName,
        requireMorrisGate: requireMorris,
      });

      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: request.actor.actorId,
        requiredLevel,
        scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });

      if (!verification.ok) {
        const detail =
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED";
        return fail(detail, verification.reason, {
          projectId: prior.projectId,
        });
      }

      if (await this.decisions.exists(request.newDecisionId)) {
        return fail("DECISION_ALREADY_EXISTS", "new_id_taken", {
          projectId: prior.projectId,
        });
      }

      let decision: HumanDecision | undefined;

      const persist = async () => {
        const current = await this.decisions.findById(
          request.supersedesDecisionId,
        );
        if (!current) {
          throw Object.assign(new Error("missing_prior"), {
            detailCode: "DECISION_NOT_FOUND" as const,
          });
        }
        if (
          request.expectedVersion !== undefined &&
          (current.version ?? 1) !== request.expectedVersion
        ) {
          throw Object.assign(new Error("version"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: request.expectedVersion,
            currentVersion: current.version ?? 1,
          });
        }

        const superseded: HumanDecision = {
          ...current,
          status: "superseded",
          version: (current.version ?? 1) + 1,
        };
        await this.decisions.save(superseded);

        const next: HumanDecision = {
          schemaVersion: "0.1.0-oa",
          decisionId: request.newDecisionId,
          projectId: current.projectId,
          cycleInstanceId: current.cycleInstanceId,
          subject: current.subject,
          options: structuredClone(cloned.options),
          selectedOptionId: request.selectedOptionId,
          actor: structuredClone(request.actor),
          authority: request.authority,
          status: "accepted",
          effectiveAt: timestamp,
          reversible: request.reversible,
          scope,
          reservations:
            cloned.reservations.length > 0
              ? structuredClone(cloned.reservations)
              : undefined,
          rationale: request.rationale ?? request.reason.trim(),
          evidenceRefs:
            cloned.evidenceRefs.length > 0
              ? [...cloned.evidenceRefs]
              : undefined,
          supersedes: current.decisionId,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: newId("prv"),
            actor: structuredClone(request.actor),
            source: "human_decision",
            timestamp,
            correlationId,
            projectId: current.projectId,
            supersedes: current.provenance?.provenanceRecordId,
          },
          version: 1,
        };
        await this.decisions.save(next);
        decision = next;
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
            (err as { detailCode: Parameters<typeof createDecisionError>[0]["detailCode"] })
              .detailCode,
            err instanceof Error ? err.message : "race",
            {
              projectId: prior.projectId,
              expectedVersion: (err as { expectedVersion?: number })
                .expectedVersion,
              currentVersion: (err as { currentVersion?: number })
                .currentVersion,
            },
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_supersede_failed", {
          projectId: prior.projectId,
        });
      }

      if (!decision) {
        return fail("PERSISTENCE_FAILURE", "atomic_supersede_incomplete", {
          projectId: prior.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.decision.superseded",
        ts: timestamp,
        correlationId,
        projectId: prior.projectId,
        decisionId: request.newDecisionId,
        supersedesDecisionId: request.supersedesDecisionId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        decision: structuredClone(decision),
        supersededDecisionIds: [request.supersedesDecisionId],
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
