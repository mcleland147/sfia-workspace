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
  DecisionAuthority,
  DecisionResult,
  HumanDecision,
  HumanDecisionStatus,
  OaActorReference,
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
  authority: DecisionAuthority,
): AuthorityLevel {
  if (authority === "morris") return "N3";
  if (authority === "delegated") return "N2";
  return "N1";
}

type DecisionFieldSnapshot = {
  decisionId: string;
  projectId: string;
  cycleInstanceId: string | undefined;
  subject: string;
  selectedOptionId: string;
  actor: OaActorReference;
  authority: DecisionAuthority;
  status: HumanDecisionStatus;
  reversible: boolean;
  scope: string;
  nonStructuring: boolean | undefined;
  rationale: string | undefined;
  authorityEvidenceId: string | undefined;
  supersedeExistingAccepted: boolean;
  linkEpistemicDecisionRef: boolean;
  epistemicItemId: string | undefined;
  linkToLivingProjectState: boolean;
  expectedLpsVersion: number | undefined;
};

/**
 * RecordHumanDecision — create an explicit human decision.
 * Structuring (morris) requires verified N3 + canActAsMorris.
 * Never invents Morris from actorId/displayName.
 * Critical cycle stays proposed — this use-case does NOT mutate cycle status
 * (R-T-A3-1: no public AcknowledgeCriticalCycle API on T-A2).
 *
 * B1: snapshot authority/actor/selectedOptionId/status/subject/scope BEFORE awaits.
 * B4: requested LPS/epistemic links fail-closed (compensate orphan decision).
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
        projectId: extra?.projectId ?? request.projectId,
        decisionId: extra?.decisionId ?? request.decisionId,
        subject: extra?.subject ?? request.subject,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.decision.recorded",
        ts: timestamp,
        correlationId,
        projectId: error.projectId ?? request.projectId,
        decisionId: error.decisionId ?? request.decisionId,
        subject: error.subject ?? request.subject,
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

      // B1 — Snapshot scalars/objects IMMEDIATELY after clone/validate path start,
      // BEFORE any await. Persist only snapshots (ignore hostile post-await mutations).
      const cloned = cloneDecisionArrays({
        options: request.options,
        reservations: request.reservations,
        evidenceRefs: request.evidenceRefs,
      });

      const snap: DecisionFieldSnapshot = {
        decisionId: request.decisionId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        subject: request.subject,
        selectedOptionId: request.selectedOptionId,
        actor: structuredClone(request.actor),
        authority: request.authority,
        status: request.status ?? "accepted",
        reversible: request.reversible,
        scope: request.scope ?? request.subject,
        nonStructuring: request.nonStructuring,
        rationale: request.rationale,
        authorityEvidenceId: request.authorityEvidenceId,
        supersedeExistingAccepted: request.supersedeExistingAccepted !== false,
        linkEpistemicDecisionRef: request.linkEpistemicDecisionRef === true,
        epistemicItemId: request.epistemicItemId,
        linkToLivingProjectState: request.linkToLivingProjectState === true,
        expectedLpsVersion: request.expectedLpsVersion,
      };

      const fieldViolation = validateDecisionFields({
        decisionId: snap.decisionId,
        projectId: snap.projectId,
        subject: snap.subject,
        options: cloned.options,
        selectedOptionId: snap.selectedOptionId,
        authority: snap.authority,
        status: snap.status,
        nonStructuring: snap.nonStructuring,
        cycleInstanceId: snap.cycleInstanceId,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason, {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      assertRecommendationIsNotDecision({
        options: cloned.options,
        selectedOptionId: snap.selectedOptionId,
      });

      const projectResult = await this.projectServices.getProject.execute({
        projectId: snap.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project", {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      if (snap.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
            projectId: snap.projectId,
            decisionId: snap.decisionId,
            subject: snap.subject,
          });
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: snap.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle", {
            projectId: snap.projectId,
            decisionId: snap.decisionId,
            subject: snap.subject,
          });
        }
        if (cycleResult.cycle.projectId !== snap.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch", {
            projectId: snap.projectId,
            decisionId: snap.decisionId,
            subject: snap.subject,
          });
        }
        // Critical stays proposed — no auto-ack (no public T-A2 acknowledge API).
      }

      const requireMorris = snap.authority === "morris";
      const requiredLevel = requiredLevelForAuthority(snap.authority);

      // Hostile: never use actor.authorityLevel / displayName as proof.
      const verification = this.authority.verify({
        actorId: snap.actor.actorId,
        requiredLevel,
        scope: snap.scope,
        evidenceId: snap.authorityEvidenceId,
        authorityLevel: snap.actor.authorityLevel,
        displayName: snap.actor.displayName,
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
          actorId: snap.actor.actorId,
          requiredLevel,
          scope: snap.scope,
          ok: false,
          verifiedLevel: verification.verifiedLevel,
          reason: verification.reason,
          canActAsMorris: verification.canActAsMorris,
          durationMs: Date.now() - started,
        });
        return fail(detail, verification.reason, {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel,
        scope: snap.scope,
        ok: true,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });

      if (await this.decisions.exists(snap.decisionId)) {
        return fail("DECISION_ALREADY_EXISTS", "decision_id_taken", {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      const status = snap.status;
      const supersededDecisionIds: string[] = [];

      let decision: HumanDecision | undefined;
      let epistemicItemId: string | undefined;
      let livingProjectStateVersion: number | undefined;

      const persist = async () => {
        if (status === "accepted") {
          const existing = await this.decisions.listAcceptedBySubject(
            snap.projectId,
            snap.subject.trim(),
          );
          if (existing.length > 0) {
            if (!snap.supersedeExistingAccepted) {
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
          decisionId: snap.decisionId,
          projectId: snap.projectId,
          cycleInstanceId: snap.cycleInstanceId,
          subject: snap.subject.trim(),
          options: structuredClone(cloned.options),
          selectedOptionId: snap.selectedOptionId,
          actor: structuredClone(snap.actor),
          authority: snap.authority,
          status,
          effectiveAt: timestamp,
          reversible: snap.reversible,
          scope: snap.scope,
          reservations:
            cloned.reservations.length > 0
              ? structuredClone(cloned.reservations)
              : undefined,
          rationale: snap.rationale,
          evidenceRefs:
            cloned.evidenceRefs.length > 0
              ? [...cloned.evidenceRefs]
              : undefined,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: newId("prv"),
            actor: structuredClone(snap.actor),
            source: "human_decision",
            timestamp,
            correlationId,
            projectId: snap.projectId,
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
            {
              projectId: snap.projectId,
              decisionId: snap.decisionId,
              subject: snap.subject,
            },
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_record_failed", {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      if (!decision) {
        return fail("PERSISTENCE_FAILURE", "atomic_record_incomplete", {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      const compensateOrphan = async (cause: string): Promise<DecisionResult> => {
        // Best-effort compensate within decision store (R-T-A3-2 residual if this fails).
        try {
          const mark = async () => {
            const current = await this.decisions.findById(snap.decisionId);
            if (!current) return;
            await this.decisions.save({
              ...current,
              status: "superseded",
              version: (current.version ?? 1) + 1,
              rationale: `${current.rationale ?? ""} [compensated:${cause}]`.trim(),
            });
          };
          if (this.store) {
            await this.store.runInTransaction(mark);
          } else {
            await mark();
          }
        } catch {
          // Documented residual of R-T-A3-2 if compensate also fails.
        }
        return fail("PERSISTENCE_FAILURE", cause, {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      };

      // B4 — Optional epistemic DecisionRef: fail-closed when requested.
      if (status === "accepted" && snap.linkEpistemicDecisionRef) {
        if (!this.cycleServices) {
          return compensateOrphan("epistemic_services_unavailable");
        }
        const epiId = snap.epistemicItemId ?? newId("epi");
        const epi = await this.cycleServices.updateEpistemicState.execute({
          projectId: snap.projectId,
          items: [
            {
              epistemicItemId: epiId,
              type: "DecisionRef",
              statement: `Decision ${snap.decisionId} accepted for ${snap.subject}`,
              relatedObjects: [snap.decisionId],
              source: "human_decision",
            },
          ],
          createdBy: snap.actor,
          correlationId,
        });
        if (!epi.ok) {
          return compensateOrphan("epistemic_link_failed");
        }
        epistemicItemId = epiId;
      }

      // B4 — Optional LPS decisionIds link: fail-closed when requested.
      if (status === "accepted" && snap.linkToLivingProjectState) {
        if (snap.expectedLpsVersion === undefined) {
          return compensateOrphan("lps_expected_version_required");
        }
        const current =
          await this.projectServices.getCurrentLivingProjectState.execute({
            projectId: snap.projectId,
          });
        if (!current.ok) {
          return compensateOrphan("lps_current_unavailable");
        }
        const priorIds = current.livingProjectState.decisionIds ?? [];
        const nextIds = [...priorIds, snap.decisionId];
        const appended =
          await this.projectServices.appendLivingProjectStateVersion.execute({
            projectId: snap.projectId,
            expectedVersion: snap.expectedLpsVersion,
            objective: current.livingProjectState.objective,
            createdBy: snap.actor,
            correlationId,
            context: current.livingProjectState.context,
            scope: current.livingProjectState.scope,
            decisionIds: nextIds,
          });
        if (!appended.ok) {
          if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
            // Compensate then surface LPS_VERSION_CONFLICT (retryable).
            try {
              const mark = async () => {
                const cur = await this.decisions.findById(snap.decisionId);
                if (!cur) return;
                await this.decisions.save({
                  ...cur,
                  status: "superseded",
                  version: (cur.version ?? 1) + 1,
                  rationale: `${cur.rationale ?? ""} [compensated:lps_version_conflict]`.trim(),
                });
              };
              if (this.store) {
                await this.store.runInTransaction(mark);
              } else {
                await mark();
              }
            } catch {
              // R-T-A3-2 residual
            }
            return fail("LPS_VERSION_CONFLICT", "lps_link_version_conflict", {
              projectId: snap.projectId,
              decisionId: snap.decisionId,
              subject: snap.subject,
              expectedVersion: snap.expectedLpsVersion,
              currentVersion: current.livingProjectState.version,
            });
          }
          return compensateOrphan("lps_link_failed");
        }
        livingProjectStateVersion = appended.livingProjectState.version;
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.decision.recorded",
        ts: timestamp,
        correlationId,
        projectId: snap.projectId,
        decisionId: snap.decisionId,
        subject: snap.subject,
        authority: snap.authority,
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
