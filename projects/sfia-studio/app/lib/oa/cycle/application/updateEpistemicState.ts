import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createCycleError } from "../domain/errors";
import {
  assertNoHypothesisDecisionPromotion,
  validateEpistemicItemInput,
} from "../domain/invariants";
import type {
  EpistemicItem,
  UpdateEpistemicResult,
  UpdateEpistemicStateRequest,
} from "../domain/types";
import type { MemoryCycleStore } from "../infrastructure/memoryCycleStore";
import type { MemoryEpistemicRepository } from "../infrastructure/memoryEpistemicRepository";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { EpistemicRepositoryPort } from "../ports/epistemicRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * UpdateEpistemicState — appends/supersedes items keyed by projectId.
 * Refuses Hypothesis→DecisionRef auto-promotion.
 */
export class UpdateEpistemicState {
  constructor(
    private readonly epistemic: EpistemicRepositoryPort &
      Partial<Pick<MemoryEpistemicRepository, "saveForProject">>,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
    private readonly store?: MemoryCycleStore,
  ) {}

  async execute(
    request: UpdateEpistemicStateRequest,
  ): Promise<UpdateEpistemicResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): UpdateEpistemicResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.epistemic.updated",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        itemCount: request.items.length,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.createdBy?.actorId) {
        return fail("EPISTEMIC_INVALID", "created_by_required");
      }
      if (!Array.isArray(request.items) || request.items.length < 1) {
        return fail("EPISTEMIC_INVALID", "items_required");
      }

      const persist = async () => {
        const existing = await this.epistemic.listByProject(request.projectId);

        for (const raw of request.items) {
          const fieldViolation = validateEpistemicItemInput({
            epistemicItemId: raw.epistemicItemId,
            type: raw.type,
            statement: raw.statement,
            source: raw.source,
            provenance: raw.provenance,
          });
          if (fieldViolation) {
            throw Object.assign(new Error(fieldViolation.reason), {
              detailCode: fieldViolation.detailCode,
              epistemicItemId: raw.epistemicItemId,
            });
          }

          const promotion = assertNoHypothesisDecisionPromotion({
            nextType: raw.type,
            promoteFromHypothesis: raw.promoteFromHypothesis,
            supersedes: raw.supersedes,
            existing,
          });
          if (promotion) {
            throw Object.assign(new Error(promotion.reason), {
              detailCode: promotion.detailCode,
              epistemicItemId: raw.epistemicItemId,
            });
          }

          if (raw.supersedes) {
            const prior = existing.find(
              (e) => e.epistemicItemId === raw.supersedes,
            );
            if (prior && prior.status === "active") {
              await this.epistemic.markSuperseded(raw.supersedes);
            }
          }

          const item: EpistemicItem = {
            schemaVersion: "0.1.0-oa",
            epistemicItemId: raw.epistemicItemId,
            type: raw.type,
            statement: raw.statement.trim(),
            status: raw.status ?? "active",
            confidence: raw.confidence,
            source: raw.source,
            createdBy: structuredClone(request.createdBy),
            createdAt: timestamp,
            supersedes: raw.supersedes,
            relatedObjects: raw.relatedObjects
              ? [...raw.relatedObjects]
              : [request.projectId],
            blocking: raw.blocking,
            provenance: raw.provenance
              ? structuredClone(raw.provenance)
              : undefined,
          };

          if (this.epistemic.saveForProject) {
            await this.epistemic.saveForProject(request.projectId, item);
          } else {
            await this.epistemic.save(item);
          }
          existing.push(item);
        }
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
            (
              err as {
                detailCode: Parameters<typeof createCycleError>[0]["detailCode"];
              }
            ).detailCode,
            err instanceof Error ? err.message : "epistemic_rule",
            {
              epistemicItemId: (err as { epistemicItemId?: string })
                .epistemicItemId,
            },
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_update_failed");
      }

      const items = await this.epistemic.listByProject(request.projectId);
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.epistemic.updated",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        itemCount: items.length,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        state: {
          projectId: request.projectId,
          items: structuredClone(items),
        },
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
