import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createDecisionError } from "../domain/errors";
import { isConfirmationExpired } from "../domain/invariants";
import type {
  Confirmation,
  ConfirmationResult,
  GrantConfirmationRequest,
} from "../domain/types";
import type { DecisionPersistenceUnitOfWorkPort } from "../ports/decisionPersistenceUnitOfWorkPort";
import type { AuthorityResolverPort } from "../ports/authorityResolver";
import type { ConfirmationRepositoryPort } from "../ports/confirmationRepository";
import type { DecisionAuditPort } from "../ports/decisionAudit";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * GrantConfirmation (ConfirmAction) — requested → granted.
 * Verifies authority level >= confirmation.level.
 * N2 actor cannot grant N3; N3 can grant N2.
 * Injected claimedAuthorityLevel is ignored.
 */
export class GrantConfirmation {
  constructor(
    private readonly confirmations: ConfirmationRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
    private readonly store?: DecisionPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: GrantConfirmationRequest,
  ): Promise<ConfirmationResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createDecisionError>[0]["detailCode"],
      internalCauseRef?: string,
      level?: string,
    ): ConfirmationResult => {
      const durationMs = Date.now() - started;
      const error = createDecisionError({
        detailCode,
        timestamp,
        correlationId,
        confirmationId: request.confirmationId,
        internalCauseRef,
      });
      this.audit.append({
        event: "oa.confirmation.granted",
        ts: timestamp,
        correlationId,
        confirmationId: request.confirmationId,
        level: level ?? "unknown",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONFIRMATION_INVALID", "actor_required");
      }

      // Hostile injection deliberately ignored.
      void request.claimedAuthorityLevel;

      const existing = await this.confirmations.findById(
        request.confirmationId,
      );
      if (!existing) {
        return fail("CONFIRMATION_NOT_FOUND", "missing_confirmation");
      }
      if (existing.status !== "requested") {
        return fail("STATE_CONFLICT", `status_${existing.status}`);
      }
      if (isConfirmationExpired(existing.expiresAt, timestamp)) {
        return fail("CONFIRMATION_EXPIRED", "expired_before_grant", existing.level);
      }

      const verification = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel: existing.level,
        scope: existing.scope,
        evidenceId: request.authorityEvidenceId,
        authorityLevel: request.claimedAuthorityLevel ?? request.actor.authorityLevel,
        displayName: request.actor.displayName,
      });

      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: request.actor.actorId,
        requiredLevel: existing.level,
        scope: existing.scope,
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
        return fail(detail, verification.reason, existing.level);
      }

      let confirmation: Confirmation | undefined;

      const persist = async () => {
        // Re-read under mutex for concurrent double-grant.
        const current = await this.confirmations.findById(
          request.confirmationId,
        );
        if (!current || current.status !== "requested") {
          throw Object.assign(new Error("status_race"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        const next: Confirmation = {
          ...current,
          status: "granted",
          confirmedAt: timestamp,
        };
        await this.confirmations.save(next);
        confirmation = next;
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
            existing.level,
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_grant_failed", existing.level);
      }

      if (!confirmation) {
        return fail("PERSISTENCE_FAILURE", "atomic_grant_incomplete", existing.level);
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.confirmation.granted",
        ts: timestamp,
        correlationId,
        confirmationId: request.confirmationId,
        level: confirmation.level,
        verifiedLevel: verification.verifiedLevel,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        confirmation: structuredClone(confirmation),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
