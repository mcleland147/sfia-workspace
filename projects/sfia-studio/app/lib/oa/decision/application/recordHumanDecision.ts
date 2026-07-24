import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type { ProjectServices } from "@/lib/oa/project";
import { createDecisionError } from "../domain/errors";
import {
  assertRecommendationIsNotDecision,
  cloneDecisionArrays,
  validateDecisionFields,
} from "../domain/invariants";
import type {
  AuthorityLevel,
  DecisionResult,
  HumanDecision,
  RecordHumanDecisionRequest,
} from "../domain/types";
import type { MemoryDecisionStore } from "../infrastructure/memoryDecisionStore";
import type { AuthorityResolverPort } from "../ports/authorityResolver";
import type { DecisionAuditPort } from "../ports/decisionAudit";
import type { DecisionRepositoryPort } from "../ports/decisionRepository";

function newId(prefix: "cor" | "prv" | "epi"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function requiredLevelForAuthority(
  authority: RecordHumanDecisionRequest["authority"],
): AuthorityLevel {
  if (authority === "morris") return "N3";
  if (authority === "delegated") return "N2";
  return "N1";
}

/**
 * RecordHumanDecision — create an explicit human decision.
 * Structuring (morris) requires verified N3 + canActAsMorris.
 * Never invents Morris from actorId/displayName.
 * Critical cycle stays proposed — this use-case does NOT mutate cycle status
 * (R-T-A3-1: no public AcknowledgeCriticalCycle API on T-A2).
 */
export class RecordHumanDecision {
  constructor(
    private readonly decisions: DecisionRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly projectServices: ProjectServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
    private readonly store?: MemoryDecisionStore,
  ) {}

  async execute(
    request: RecordHumanDecisionRequest,
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
        projectId: request.projectId,
        decisionId: request.decisionId,
        subject: request.subject,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.decision.recorded",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        decisionId: request.decisionId,
        subject: request.subject,
        authority: request.authority,
        status: request.status ?? "accepted",
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

      // Clone-before-validate (B1 pattern) — ignore hostile post-clone mutations.
      const cloned = cloneDecisionArrays({
        options: request.options,
        reservations: request.reservations,
        evidenceRefs: request.evidenceRefs,
      });

      const fieldViolation = validateDecisionFields({
        decisionId: request.decisionId,
        projectId: request.projectId,
        subject: request.subject,
        options: cloned.options,
        selectedOptionId: request.selectedOptionId,
        authority: request.authority,
        status: request.status,
        nonStructuring: request.nonStructuring,
        cycleInstanceId: request.cycleInstanceId,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason);
      }

      assertRecommendationIsNotDecision({
        options: cloned.options,
        selectedOptionId: request.selectedOptionId,
      });

      const projectResult = await this.projectServices.getProject.execute({
        projectId: request.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      if (request.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable");
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: request.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle");
        }
        if (cycleResult.cycle.projectId !== request.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch");
        }
        // Critical stays proposed — no auto-ack (no public T-A2 acknowledge API).
      }

      const scope = request.scope ?? request.subject;
      const requireMorris = request.authority === "morris";
      const requiredLevel = requiredLevelForAuthority(request.authority);

      // Hostile: never use actor.authorityLevel / displayName as proof.
      const verification = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel,
        scope,
        evidenceId: request.authorityEvidenceId,
        authorityLevel: request.actor.authorityLevel,
        displayName: request.actor.displayName,
        requireMorrisGate: requireMorris,
      });

      if (!verification.ok) {
        const detail =
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED";
        this.audit.append({
          event: "oa.authority.verified",
          ts: timestamp,
          correlationId,
          actorId: request.actor.actorId,
          requiredLevel,
          scope,
          ok: false,
          verifiedLevel: verification.verifiedLevel,
          reason: verification.reason,
          canActAsMorris: verification.canActAsMorris,
          durationMs: Date.now() - started,
        });
        return fail(detail, verification.reason);
      }

      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: request.actor.actorId,
        requiredLevel,
        scope,
        ok: true,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });

      if (await this.decisions.exists(request.decisionId)) {
        return fail("DECISION_ALREADY_EXISTS", "decision_id_taken");
      }

      const status = request.status ?? "accepted";
      const supersededDecisionIds: string[] = [];

      let decision: HumanDecision | undefined;
      let epistemicItemId: string | undefined;
      let livingProjectStateVersion: number | undefined;

      const persist = async () => {
        if (status === "accepted") {
          const existing = await this.decisions.listAcceptedBySubject(
            request.projectId,
            request.subject,
          );
          if (existing.length > 0) {
            if (request.supersedeExistingAccepted === false) {
              throw Object.assign(new Error("accepted_exists"), {
                detailCode: "STATE_CONFLICT" as const,
              });
            }
            for (const prior of existing) {
              const superseded: HumanDecision = {
                ...prior,
                status: "superseded",
                version: (prior.version ?? 1) + 1,
              };
              await this.decisions.save(superseded);
              supersededDecisionIds.push(prior.decisionId);
            }
          }
        }

        const next: HumanDecision = {
          schemaVersion: "0.1.0-oa",
          decisionId: request.decisionId,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
          subject: request.subject.trim(),
          options: structuredClone(cloned.options),
          selectedOptionId: request.selectedOptionId,
          actor: structuredClone(request.actor),
          authority: request.authority,
          status,
          effectiveAt: timestamp,
          reversible: request.reversible,
          scope,
          reservations:
            cloned.reservations.length > 0
              ? structuredClone(cloned.reservations)
              : undefined,
          rationale: request.rationale,
          evidenceRefs:
            cloned.evidenceRefs.length > 0
              ? [...cloned.evidenceRefs]
              : undefined,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: newId("prv"),
            actor: structuredClone(request.actor),
            source: "human_decision",
            timestamp,
            correlationId,
            projectId: request.projectId,
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
          "detailCode" in err &&
          typeof (err as { detailCode: unknown }).detailCode === "string"
        ) {
          return fail(
            (err as { detailCode: Parameters<typeof createDecisionError>[0]["detailCode"] })
              .detailCode,
            err instanceof Error ? err.message : "rule",
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_record_failed");
      }

      if (!decision) {
        return fail("PERSISTENCE_FAILURE", "atomic_record_incomplete");
      }

      // Optional epistemic DecisionRef — ONLY after accepted, via public Cycle API.
      if (
        status === "accepted" &&
        request.linkEpistemicDecisionRef &&
        this.cycleServices
      ) {
        const epiId = request.epistemicItemId ?? newId("epi");
        const epi = await this.cycleServices.updateEpistemicState.execute({
          projectId: request.projectId,
          items: [
            {
              epistemicItemId: epiId,
              type: "DecisionRef",
              statement: `Decision ${request.decisionId} accepted for ${request.subject}`,
              relatedObjects: [request.decisionId],
              source: "human_decision",
            },
          ],
          createdBy: request.actor,
          correlationId,
        });
        if (epi.ok) {
          epistemicItemId = epiId;
        }
      }

      // Optional LPS decisionIds link — via public T-A1 append only.
      if (
        status === "accepted" &&
        request.linkToLivingProjectState &&
        request.expectedLpsVersion !== undefined
      ) {
        const current =
          await this.projectServices.getCurrentLivingProjectState.execute({
            projectId: request.projectId,
          });
        if (current.ok) {
          const priorIds = current.livingProjectState.decisionIds ?? [];
          const nextIds = [...priorIds, request.decisionId];
          const appended =
            await this.projectServices.appendLivingProjectStateVersion.execute({
              projectId: request.projectId,
              expectedVersion: request.expectedLpsVersion,
              objective: current.livingProjectState.objective,
              createdBy: request.actor,
              correlationId,
              context: current.livingProjectState.context,
              scope: current.livingProjectState.scope,
              decisionIds: nextIds,
            });
          if (appended.ok) {
            livingProjectStateVersion = appended.livingProjectState.version;
          }
        }
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.decision.recorded",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        decisionId: request.decisionId,
        subject: request.subject,
        authority: request.authority,
        status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        decision: structuredClone(decision),
        supersededDecisionIds:
          supersededDecisionIds.length > 0
            ? [...supersededDecisionIds]
            : undefined,
        epistemicItemId,
        livingProjectStateVersion,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
