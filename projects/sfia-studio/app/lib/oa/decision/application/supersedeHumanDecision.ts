import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createDecisionError } from "../domain/errors";
import {
  cloneDecisionArrays,
  validateDecisionFields,
} from "../domain/invariants";
import type {
  AuthorityLevel,
  DecisionAuthority,
  DecisionResult,
  HumanDecision,
  OaActorReference,
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
  authority: DecisionAuthority,
): AuthorityLevel {
  if (authority === "morris") return "N3";
  if (authority === "delegated") return "N2";
  return "N1";
}

function isSupersedableStatus(status: HumanDecision["status"]): boolean {
  return (
    status === "accepted" ||
    status === "proposed" ||
    status === "required" ||
    status === "amended"
  );
}

type SupersedeSnapshot = {
  newDecisionId: string;
  supersedesDecisionId: string;
  selectedOptionId: string;
  actor: OaActorReference;
  authority: DecisionAuthority;
  reversible: boolean;
  reason: string;
  scope: string | undefined;
  nonStructuring: boolean | undefined;
  rationale: string | undefined;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
};

/**
 * SupersedeHumanDecision — immutable history: old → superseded, new with supersedes link.
 * Reason required. Re-verifies authority. OCC via expectedVersion when provided.
 *
 * B1: snapshot request fields before awaits.
 * B3: inside txn reject if prior already superseded/revoked/refused; require supersedable status.
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

      // B1 — Snapshot BEFORE any await / authority verify side effects.
      const snap: SupersedeSnapshot = {
        newDecisionId: request.newDecisionId,
        supersedesDecisionId: request.supersedesDecisionId,
        selectedOptionId: request.selectedOptionId,
        actor: structuredClone(request.actor),
        authority: request.authority,
        reversible: request.reversible,
        reason: request.reason.trim(),
        scope: request.scope,
        nonStructuring: request.nonStructuring,
        rationale: request.rationale,
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
      };

      const options =
        request.options ??
        // Will be replaced after prior load if options omitted — clone arrays now if provided.
        undefined;
      const clonedArrays = cloneDecisionArrays({
        options: options,
        reservations: request.reservations,
        evidenceRefs: request.evidenceRefs,
      });

      const prior = await this.decisions.findById(snap.supersedesDecisionId);
      if (!prior) {
        return fail("DECISION_NOT_FOUND", "missing_prior");
      }
      if (!isSupersedableStatus(prior.status)) {
        return fail("STATE_CONFLICT", `prior_status_${prior.status}`, {
          projectId: prior.projectId,
        });
      }

      const expectedPreStatus = prior.status;

      if (
        snap.expectedVersion !== undefined &&
        (prior.version ?? 1) !== snap.expectedVersion
      ) {
        return fail("VERSION_CONFLICT", "expected_version_mismatch", {
          projectId: prior.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: prior.version ?? 1,
        });
      }

      const optionsFinal =
        options !== undefined
          ? clonedArrays.options
          : structuredClone(prior.options);
      const cloned = {
        options: optionsFinal,
        reservations: clonedArrays.reservations,
        evidenceRefs: clonedArrays.evidenceRefs,
      };

      const fieldViolation = validateDecisionFields({
        decisionId: snap.newDecisionId,
        projectId: prior.projectId,
        subject: prior.subject,
        options: cloned.options,
        selectedOptionId: snap.selectedOptionId,
        authority: snap.authority,
        nonStructuring: snap.nonStructuring,
        cycleInstanceId: prior.cycleInstanceId,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason, {
          projectId: prior.projectId,
        });
      }

      const scope = snap.scope ?? prior.scope ?? prior.subject;
      const requireMorris = snap.authority === "morris";
      const requiredLevel = requiredLevelForAuthority(snap.authority);

      const verification = this.authority.verify({
        actorId: snap.actor.actorId,
        requiredLevel,
        scope,
        evidenceId: snap.authorityEvidenceId,
        authorityLevel: snap.actor.authorityLevel,
        displayName: snap.actor.displayName,
        requireMorrisGate: requireMorris,
      });

      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
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

      if (await this.decisions.exists(snap.newDecisionId)) {
        return fail("DECISION_ALREADY_EXISTS", "new_id_taken", {
          projectId: prior.projectId,
        });
      }

      let decision: HumanDecision | undefined;

      const persist = async () => {
        const current = await this.decisions.findById(
          snap.supersedesDecisionId,
        );
        if (!current) {
          throw Object.assign(new Error("missing_prior"), {
            detailCode: "DECISION_NOT_FOUND" as const,
          });
        }
        // B3 — Re-check expected pre-supersede status under mutex.
        if (current.status !== expectedPreStatus) {
          throw Object.assign(new Error(`status_race_${current.status}`), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (!isSupersedableStatus(current.status)) {
          throw Object.assign(new Error(`prior_status_${current.status}`), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          (current.version ?? 1) !== snap.expectedVersion
        ) {
          throw Object.assign(new Error("version"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version ?? 1,
          });
        }

        const superseded: HumanDecision = {
          ...current,
          status: "superseded",
          version: (current.version ?? 1) + 1,
        };
        await this.decisions.save(superseded);

        // Ensure only one accepted for subject after this write.
        const others = await this.decisions.listAcceptedBySubject(
          current.projectId,
          current.subject,
        );
        for (const other of others) {
          if (other.decisionId === current.decisionId) continue;
          await this.decisions.save({
            ...other,
            status: "superseded",
            version: (other.version ?? 1) + 1,
          });
        }

        const next: HumanDecision = {
          schemaVersion: "0.1.0-oa",
          decisionId: snap.newDecisionId,
          projectId: current.projectId,
          cycleInstanceId: current.cycleInstanceId,
          subject: current.subject,
          options: structuredClone(cloned.options),
          selectedOptionId: snap.selectedOptionId,
          actor: structuredClone(snap.actor),
          authority: snap.authority,
          status: "accepted",
          effectiveAt: timestamp,
          reversible: snap.reversible,
          scope,
          reservations:
            cloned.reservations.length > 0
              ? structuredClone(cloned.reservations)
              : undefined,
          rationale: snap.rationale ?? snap.reason,
          evidenceRefs:
            cloned.evidenceRefs.length > 0
              ? [...cloned.evidenceRefs]
              : undefined,
          supersedes: current.decisionId,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: newId("prv"),
            actor: structuredClone(snap.actor),
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
        decisionId: snap.newDecisionId,
        supersedesDecisionId: snap.supersedesDecisionId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        decision: structuredClone(decision),
        supersededDecisionIds: [snap.supersedesDecisionId],
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
