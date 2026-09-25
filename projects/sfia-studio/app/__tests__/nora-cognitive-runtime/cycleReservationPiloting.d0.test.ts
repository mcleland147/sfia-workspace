/**
 * CYCLE-RESERVATION-PILOTING-01 — deterministic CR-RSV domain / gate tests.
 */
import { describe, expect, it } from "vitest";
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  listFinalizationBlockingReservations,
} from "@/lib/oa/cycle/application/deriveLifecycleBlockers";
import {
  isFinalizationGateBlockingReservation,
  isLegacyReservation,
  nextReservationOrdinal,
  presentReservationState,
  projectReservationOrdinal,
  type EpistemicReservationMetadata,
} from "@/lib/oa/cycle/domain/reservationSemantics";
import { isNoraReservationDeltaStructured } from "@/lib/nora-cognitive-runtime/reservationDelta";
import { materializeReservationDelta } from "@/features/project-assistant/materializeReservationDelta";
import { stripActiveCycleWorkReservationsWhenDeltaPresent } from "@/features/project-assistant/materializeReservationDelta";

const ACTOR = {
  actorId: "actor:test",
  displayName: "Test",
  role: "system" as const,
};

function baseItem(
  partial: Partial<EpistemicItem> &
    Pick<EpistemicItem, "epistemicItemId" | "statement">,
): EpistemicItem {
  return {
    schemaVersion: "0.1.0-oa",
    type: "Reservation",
    status: "active",
    createdBy: ACTOR,
    createdAt: "2026-09-25T00:00:00.000Z",
    relatedObjects: ["prj:test", "cyc:test"],
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prov:t",
      actor: ACTOR,
      source: "system",
      timestamp: "2026-09-25T00:00:00.000Z",
      correlationId: "cor:t",
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
    },
    ...partial,
  };
}

function meta(
  overrides: Partial<EpistemicReservationMetadata> = {},
): EpistemicReservationMetadata {
  return {
    ordinal: 1,
    title: "Titre",
    summary: "Résumé",
    impact: "major",
    attentionBy: "before_finalization",
    finalizationRelevance: "may_affect",
    rationale: "Pourquoi",
    resolutionCondition: "Quand clarifié",
    journalEntryRefs: [],
    sourceTurnRefs: [],
    ...overrides,
  };
}

describe("CYCLE-RESERVATION-PILOTING-01 domain gates", () => {
  it("CR-RSV-01/04 — open-point-like Observation never blocks; impact≠blocker", () => {
    const obs = baseItem({
      epistemicItemId: "epi:obs",
      type: "Observation",
      statement: "open point",
      blocking: true,
    });
    expect(isFinalizationGateBlockingReservation(obs)).toBe(false);
    const majorMay = baseItem({
      epistemicItemId: "epi:1",
      statement: "major may",
      reservation: meta({ impact: "major", finalizationRelevance: "may_affect" }),
    });
    expect(isFinalizationGateBlockingReservation(majorMay)).toBe(false);
    const blockers = deriveLifecycleBlockersFromEpistemicItems([majorMay, obs]);
    expect(blockers.statements).toEqual([]);
  });

  it("CR-RSV-05/36/37 — must_resolve blocks; may_affect/none do not", () => {
    const must = baseItem({
      epistemicItemId: "epi:must",
      statement: "must",
      reservation: meta({
        impact: "moderate",
        finalizationRelevance: "must_resolve",
        title: "Must resolve",
      }),
    });
    const may = baseItem({
      epistemicItemId: "epi:may",
      statement: "may",
      reservation: meta({ finalizationRelevance: "may_affect" }),
    });
    const none = baseItem({
      epistemicItemId: "epi:none",
      statement: "none",
      reservation: meta({ impact: "minor", finalizationRelevance: "none" }),
    });
    expect(isFinalizationGateBlockingReservation(must)).toBe(true);
    expect(isFinalizationGateBlockingReservation(may)).toBe(false);
    expect(isFinalizationGateBlockingReservation(none)).toBe(false);
    const snap = deriveLifecycleBlockersFromEpistemicItems([must, may, none]);
    expect(snap.statements).toEqual(["Must resolve"]);
  });

  it("CR-RSV-08/38 — legacy blocking fail-closed; resolved never blocks", () => {
    const legacy = baseItem({
      epistemicItemId: "epi:leg",
      statement: "legacy block",
      blocking: true,
    });
    expect(isLegacyReservation(legacy)).toBe(true);
    expect(isFinalizationGateBlockingReservation(legacy)).toBe(true);
    expect(presentReservationState(legacy)).toBe("to_qualify");

    const resolved = baseItem({
      epistemicItemId: "epi:res",
      statement: "resolved must",
      status: "resolved",
      reservation: meta({ finalizationRelevance: "must_resolve" }),
    });
    expect(isFinalizationGateBlockingReservation(resolved)).toBe(false);

    const legacyResolved = baseItem({
      epistemicItemId: "epi:leg2",
      statement: "legacy resolved",
      status: "resolved",
      blocking: true,
    });
    expect(isFinalizationGateBlockingReservation(legacyResolved)).toBe(false);
  });

  it("CR-RSV-03 — ordinal durable/stable projection", () => {
    const a = baseItem({
      epistemicItemId: "epi:a",
      statement: "a",
      createdAt: "2026-09-25T01:00:00.000Z",
      reservation: meta({ ordinal: 2, title: "A" }),
    });
    const b = baseItem({
      epistemicItemId: "epi:b",
      statement: "b",
      createdAt: "2026-09-25T00:00:00.000Z",
    });
    expect(nextReservationOrdinal([a], "cyc:test")).toBe(3);
    expect(projectReservationOrdinal(b, [b, a], "cyc:test")).toBe(1);
    expect(projectReservationOrdinal(a, [b, a], "cyc:test")).toBe(2);
  });

  it("CR-RSV-02 — reservationDelta schema rejects inventing RESOLVE", () => {
    expect(
      isNoraReservationDeltaStructured({
        operations: [
          {
            op: "RESOLVE",
            targetReservationId: "epi:x",
            title: null,
            summary: null,
            impact: null,
            attentionBy: null,
            finalizationRelevance: null,
            rationale: null,
            resolutionCondition: null,
            journalEntryRefs: [],
            sourceTurnRefs: [],
            basisType: null,
            basisRefs: [],
          },
        ],
      }),
    ).toBe(false);
    expect(
      isNoraReservationDeltaStructured({
        operations: [
          {
            op: "CREATE",
            targetReservationId: null,
            title: "T",
            summary: "S",
            impact: "moderate",
            attentionBy: "during_cycle",
            finalizationRelevance: "none",
            rationale: "R",
            resolutionCondition: "C",
            journalEntryRefs: ["je:1"],
            sourceTurnRefs: ["pt:1"],
            basisType: null,
            basisRefs: [],
          },
        ],
      }),
    ).toBe(true);
  });

  it("CR-RSV-10/19 — CREATE idempotent; ACW Reservation stripped when delta present", () => {
    const stripped = stripActiveCycleWorkReservationsWhenDeltaPresent({
      activeCycleWork: {
        items: [
          {
            type: "Observation",
            statement: "o",
            confidence: null,
            blocking: null,
          },
          {
            type: "Reservation",
            statement: "r",
            confidence: null,
            blocking: true,
          },
          {
            type: "Hypothesis",
            statement: "h",
            confidence: null,
            blocking: null,
          },
        ],
      },
      reservationDelta: {
        operations: [
          {
            op: "CREATE",
            targetReservationId: null,
            title: "T",
            summary: "S",
            impact: "minor",
            attentionBy: "during_cycle",
            finalizationRelevance: "none",
            rationale: "r",
            resolutionCondition: "c",
            journalEntryRefs: [],
            sourceTurnRefs: [],
            basisType: null,
            basisRefs: [],
          },
        ],
      },
    });
    expect(stripped?.items.map((i) => i.type)).toEqual([
      "Observation",
      "Hypothesis",
    ]);
  });

  it("CR-RSV-10 — materialize CREATE retry does not duplicate", async () => {
    const saved: EpistemicItem[] = [];
    const updateEpistemicState = {
      execute: async (req: {
        items: Array<{ epistemicItemId: string } & Partial<EpistemicItem>>;
      }) => {
        for (const raw of req.items) {
          const item = baseItem({
            epistemicItemId: raw.epistemicItemId,
            statement: raw.statement ?? "x",
            reservation: raw.reservation,
            blocking: raw.blocking,
            status: raw.status ?? "active",
          });
          const idx = saved.findIndex(
            (s) => s.epistemicItemId === item.epistemicItemId,
          );
          if (idx >= 0) saved[idx] = item;
          else saved.push(item);
        }
        return { ok: true as const, durationMs: 0 };
      },
    };

    const delta = {
      operations: [
        {
          op: "CREATE" as const,
          targetReservationId: null,
          title: "Fiabilité liste",
          summary: "Incertitude sur la source",
          impact: "major" as const,
          attentionBy: "before_finalization" as const,
          finalizationRelevance: "must_resolve" as const,
          rationale: "Sinon clôture trompeuse",
          resolutionCondition: "Source validée",
          journalEntryRefs: ["je:1"],
          sourceTurnRefs: ["pt:1"],
          basisType: null,
          basisRefs: [],
        },
      ],
    };

    const first = await materializeReservationDelta({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      logicalTurnId: "ltu:same",
      producedAt: "2026-09-25T12:00:00.000Z",
      delta,
      existingItems: [],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updateEpistemicState: updateEpistemicState as any,
      validJournalEntryIds: new Set(["je:1"]),
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.createdIds).toHaveLength(1);
    expect(saved).toHaveLength(1);
    expect(saved[0]!.reservation?.journalEntryRefs).toEqual(["je:1"]);
    expect(listFinalizationBlockingReservations(saved)).toHaveLength(1);

    const second = await materializeReservationDelta({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      logicalTurnId: "ltu:same",
      producedAt: "2026-09-25T12:01:00.000Z",
      delta,
      existingItems: saved,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updateEpistemicState: updateEpistemicState as any,
      validJournalEntryIds: new Set(["je:1"]),
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.createdIds).toHaveLength(0);
    expect(second.skipped.some((s) => s.startsWith("create_idempotent:"))).toBe(
      true,
    );
    expect(saved).toHaveLength(1);
  });

  it("CR-RSV-15/16 — PROPOSE_RESOLUTION keeps active; never resolves", async () => {
    const existing = baseItem({
      epistemicItemId: "epi:rsv:target",
      statement: "T — S",
      reservation: meta({
        ordinal: 1,
        title: "T",
        finalizationRelevance: "must_resolve",
      }),
      blocking: true,
    });
    const saved = [existing];
    const updateEpistemicState = {
      execute: async (req: {
        items: Array<{ epistemicItemId: string } & Partial<EpistemicItem>>;
      }) => {
        for (const raw of req.items) {
          const idx = saved.findIndex(
            (s) => s.epistemicItemId === raw.epistemicItemId,
          );
          if (idx >= 0) {
            saved[idx] = {
              ...saved[idx]!,
              statement: raw.statement ?? saved[idx]!.statement,
              status: raw.status ?? saved[idx]!.status,
              reservation: raw.reservation ?? saved[idx]!.reservation,
              blocking: raw.blocking ?? saved[idx]!.blocking,
            };
          }
        }
        return { ok: true as const, durationMs: 0 };
      },
    };
    const result = await materializeReservationDelta({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      logicalTurnId: "ltu:propose",
      producedAt: "2026-09-25T13:00:00.000Z",
      delta: {
        operations: [
          {
            op: "PROPOSE_RESOLUTION",
            targetReservationId: "epi:rsv:target",
            title: null,
            summary: null,
            impact: null,
            attentionBy: null,
            finalizationRelevance: null,
            rationale: "Clarification Pilote suffisante",
            resolutionCondition: null,
            journalEntryRefs: [],
            sourceTurnRefs: ["pt:9"],
            basisType: "clarification",
            basisRefs: ["pt:9"],
          },
        ],
      },
      existingItems: saved,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updateEpistemicState: updateEpistemicState as any,
    });
    expect(result.ok).toBe(true);
    expect(saved[0]!.status).toBe("active");
    expect(saved[0]!.reservation?.resolutionProposal?.basisType).toBe(
      "clarification",
    );
    expect(isFinalizationGateBlockingReservation(saved[0]!)).toBe(true);
  });

  it("CR-RSV-15b — PROPOSE_RESOLUTION clarification empty basisRefs defaults to logicalTurnId", async () => {
    const existing = baseItem({
      epistemicItemId: "epi:rsv:target",
      statement: "T — S",
      reservation: meta({
        ordinal: 1,
        title: "T",
        finalizationRelevance: "must_resolve",
      }),
      blocking: true,
    });
    const saved = [existing];
    const updateEpistemicState = {
      execute: async (req: {
        items: Array<{ epistemicItemId: string } & Partial<EpistemicItem>>;
      }) => {
        for (const raw of req.items) {
          const idx = saved.findIndex(
            (s) => s.epistemicItemId === raw.epistemicItemId,
          );
          if (idx >= 0) {
            saved[idx] = {
              ...saved[idx]!,
              reservation: raw.reservation ?? saved[idx]!.reservation,
            };
          }
        }
        return { ok: true as const, durationMs: 0 };
      },
    };
    const result = await materializeReservationDelta({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      logicalTurnId: "ltu:clarify-default",
      producedAt: "2026-09-25T14:00:00.000Z",
      delta: {
        operations: [
          {
            op: "PROPOSE_RESOLUTION",
            targetReservationId: "epi:rsv:target",
            title: null,
            summary: null,
            impact: null,
            attentionBy: null,
            finalizationRelevance: null,
            rationale: "Critère clarifié",
            resolutionCondition: null,
            journalEntryRefs: [],
            sourceTurnRefs: [],
            basisType: "clarification",
            basisRefs: [],
          },
        ],
      },
      existingItems: saved,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updateEpistemicState: updateEpistemicState as any,
    });
    expect(result.ok).toBe(true);
    expect(saved[0]!.reservation?.resolutionProposal?.basisRefs).toEqual([
      "ltu:clarify-default",
    ]);
  });

});
