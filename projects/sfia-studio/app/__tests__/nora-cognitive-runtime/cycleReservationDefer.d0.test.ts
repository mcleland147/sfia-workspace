/**
 * CYCLE-RESERVATION-PILOTING-01 — CR-RSV-43…52 Defer + HumanDecision.
 * @vitest-environment node
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { EpistemicItem, ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
import {
  canDeferReservation,
  isFinalizationGateBlockingReservation,
  presentReservationState,
  presentReservationStateLabel,
  resolveHonestReservationDeferTarget,
  type EpistemicReservationMetadata,
} from "@/lib/oa/cycle/domain/reservationSemantics";
import {
  deferReservationAction,
  RESERVATION_DEFER_OPTION_ID,
  reservationDeferSubjectFor,
} from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  MemoryAuthorityResolver,
  registerLocalPiloteAuthority,
  M3_LOCAL_AUTHORITY_ENV,
} from "@/lib/oa/decision";

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
    title: "Critère V1 indéterminé",
    summary: "Pas de critère de succès",
    impact: "major",
    attentionBy: "before_finalization",
    finalizationRelevance: "may_affect",
    rationale: "Sinon on ne peut juger la V1",
    resolutionCondition: "Critère explicite",
    journalEntryRefs: [],
    sourceTurnRefs: [],
    ...overrides,
  };
}

const TRAJECTORY: ProjectTrajectory = {
  schemaVersion: "0.1.0-oa",
  trajectoryId: "trj:1",
  projectId: "prj:test",
  version: 1,
  status: "active",
  steps: [
    {
      stepId: "stp:1",
      order: 1,
      label: "Cadrage",
      state: "active",
      cycleTypeId: "cyc:framing",
    },
    {
      stepId: "stp:2",
      order: 2,
      label: "Conception fonctionnelle",
      state: "pending",
      cycleTypeId: "cyc:functional-design",
    },
  ],
};

describe("CR-RSV defer semantics + target", () => {
  it("CR-RSV-43/46 — deferred presentation + target preserved", () => {
    const item = baseItem({
      epistemicItemId: "epi:rsv:d",
      statement: "x",
      reservation: meta({
        deferred: {
          deferredAt: "2026-09-25T12:00:00.000Z",
          humanDecisionId: "dec:rsv-defer:1",
          targetCycleTypeId: "cyc:functional-design",
          rationale: "Reporter vers conception",
        },
      }),
    });
    expect(presentReservationState(item)).toBe("deferred");
    expect(presentReservationStateLabel("deferred")).toBe("REPORTÉE");
    expect(item.reservation?.deferred?.humanDecisionId).toBe("dec:rsv-defer:1");
    expect(item.reservation?.deferred?.targetCycleTypeId).toBe(
      "cyc:functional-design",
    );
    expect(item.status).toBe("active");
  });

  it("CR-RSV-44/12 — deferred is not resolved", () => {
    const item = baseItem({
      epistemicItemId: "epi:rsv:d2",
      statement: "x",
      reservation: meta({
        deferred: {
          deferredAt: "2026-09-25T12:00:00.000Z",
          humanDecisionId: "dec:1",
          targetCycleTypeId: "cyc:functional-design",
        },
      }),
    });
    expect(item.status).not.toBe("resolved");
    expect(presentReservationState(item)).not.toBe("resolved");
  });

  it("CR-RSV-47 — deferred nonblocking never blocks finalization", () => {
    const item = baseItem({
      epistemicItemId: "epi:rsv:d3",
      statement: "x",
      blocking: true,
      reservation: meta({
        finalizationRelevance: "must_resolve",
        deferred: {
          deferredAt: "2026-09-25T12:00:00.000Z",
          humanDecisionId: "dec:1",
          targetCycleTypeId: "cyc:functional-design",
        },
      }),
    });
    expect(isFinalizationGateBlockingReservation(item)).toBe(false);
  });

  it("CR-RSV-48 — must_resolve cannot defer (eligibility)", () => {
    const item = baseItem({
      epistemicItemId: "epi:must",
      statement: "x",
      reservation: meta({ finalizationRelevance: "must_resolve" }),
    });
    expect(canDeferReservation(item)).toBe(false);
  });

  it("CR-RSV-49 — honest target required; empty trajectory → null", () => {
    expect(
      resolveHonestReservationDeferTarget({
        trajectory: null,
        currentCycleTypeId: "cyc:framing",
      }),
    ).toBeNull();
    const target = resolveHonestReservationDeferTarget({
      trajectory: TRAJECTORY,
      currentCycleTypeId: "cyc:framing",
    });
    expect(target?.targetCycleTypeId).toBe("cyc:functional-design");
    expect(target?.targetLabel).toMatch(/Conception/i);
  });
});

describe("CR-RSV deferReservationAction + HumanDecision", () => {
  const prevEnv = process.env[M3_LOCAL_AUTHORITY_ENV];

  beforeAll(() => {
    process.env[M3_LOCAL_AUTHORITY_ENV] = "1";
  });
  afterAll(() => {
    if (prevEnv === undefined) delete process.env[M3_LOCAL_AUTHORITY_ENV];
    else process.env[M3_LOCAL_AUTHORITY_ENV] = prevEnv;
  });

  function makeHarness(input: {
    item: EpistemicItem;
    recordOk?: boolean;
    updateOk?: boolean;
    updateFailAfter?: boolean;
  }) {
    const decisionsSaved: Array<{
      decisionId: string;
      subject: string;
      authority?: string;
      selectedOptionId?: string;
    }> = [];
    const epistemicSaved: EpistemicItem[] = [structuredClone(input.item)];
    let updateCalls = 0;
    let recordCalls = 0;

    const authorityResolver = new MemoryAuthorityResolver();
    registerLocalPiloteAuthority({
      authorityResolver,
      scope: "pilot-lifecycle:cyc:test",
      issuedAt: "2026-09-25T12:00:00.000Z",
      forceEnable: true,
    });

    const decisionServices = {
      recordHumanDecision: {
        execute: async (req: {
          decisionId: string;
          subject: string;
          selectedOptionId: string;
          authority?: string;
        }) => {
          recordCalls += 1;
          if (input.recordOk === false) {
            return {
              ok: false as const,
              error: {
                detailCode: "PERSISTENCE_FAILURE",
                message: "hd_write_failed",
              },
            };
          }
          decisionsSaved.push({
            decisionId: req.decisionId,
            subject: req.subject,
            authority: req.authority,
            selectedOptionId: req.selectedOptionId,
          });
          expect(req.selectedOptionId).toBe(RESERVATION_DEFER_OPTION_ID);
          return { ok: true as const, decisionId: req.decisionId };
        },
      },
      decisions: {
        findById: async () => null,
      },
    };

    const cycleServices = {
      store: {
        runInTransaction: async <T>(fn: () => Promise<T>): Promise<T> => fn(),
      },
      cycles: {
        listByProject: async () => [{ cycleInstanceId: "cyc:test" }],
      },
      epistemic: {
        listByProject: async () => epistemicSaved,
      },
      updateEpistemicState: {
        execute: async (req: {
          items: Array<{ epistemicItemId: string } & Partial<EpistemicItem>>;
        }) => {
          updateCalls += 1;
          if (input.updateOk === false || input.updateFailAfter) {
            return {
              ok: false as const,
              error: {
                detailCode: "PERSISTENCE_FAILURE",
                message: "reservation_write_failed",
              },
            };
          }
          for (const raw of req.items) {
            const idx = epistemicSaved.findIndex(
              (e) => e.epistemicItemId === raw.epistemicItemId,
            );
            if (idx >= 0) {
              epistemicSaved[idx] = {
                ...epistemicSaved[idx]!,
                ...raw,
                reservation: raw.reservation ?? epistemicSaved[idx]!.reservation,
              } as EpistemicItem;
            }
          }
          return { ok: true as const, durationMs: 0 };
        },
      },
      pilotLifecycle: {
        assess: async () => ({
          ok: true as const,
          assessment: {
            ready: false,
            obligations: [],
            blockers: [],
          },
        }),
      },
    };

    return {
      decisionsSaved,
      epistemicSaved,
      get recordCalls() {
        return recordCalls;
      },
      get updateCalls() {
        return updateCalls;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cycleServices: cycleServices as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      decisionServices: decisionServices as any,
      authorityResolver,
    };
  }

  it("CR-RSV-43/45/46 — report writes HD then deferred metadata", async () => {
    const item = baseItem({
      epistemicItemId: "epi:rsv:ok",
      statement: "Critère — indéterminé",
      reservation: meta(),
    });
    const h = makeHarness({ item });
    const result = await deferReservationAction({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      epistemicItemId: "epi:rsv:ok",
      targetCycleTypeId: "cyc:functional-design",
      targetLabel: "Conception fonctionnelle",
      cycleServices: h.cycleServices,
      decisionServices: h.decisionServices,
      authorityResolver: h.authorityResolver,
      nowIso: () => "2026-09-25T12:00:00.000Z",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.decisionId).toBeTruthy();
    expect(h.decisionsSaved).toHaveLength(1);
    expect(h.decisionsSaved[0]!.subject).toBe(
      reservationDeferSubjectFor("epi:rsv:ok"),
    );
    expect(h.decisionsSaved[0]!.authority).toBe("pilot");
    expect(h.decisionsSaved[0]!.selectedOptionId).toBe(
      RESERVATION_DEFER_OPTION_ID,
    );
    const deferred = h.epistemicSaved[0]!.reservation?.deferred;
    expect(deferred?.humanDecisionId).toBe(result.decisionId);
    expect(deferred?.targetCycleTypeId).toBe("cyc:functional-design");
    expect(h.epistemicSaved[0]!.status).toBe("active");
    expect(presentReservationState(h.epistemicSaved[0]!)).toBe("deferred");
  });

  it("CR-RSV-48 — must_resolve refused server-side", async () => {
    const item = baseItem({
      epistemicItemId: "epi:must",
      statement: "x",
      reservation: meta({ finalizationRelevance: "must_resolve" }),
    });
    const h = makeHarness({ item });
    const result = await deferReservationAction({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      epistemicItemId: "epi:must",
      targetCycleTypeId: "cyc:functional-design",
      cycleServices: h.cycleServices,
      decisionServices: h.decisionServices,
      authorityResolver: h.authorityResolver,
      nowIso: () => "2026-09-25T12:00:00.000Z",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RESERVATION_MUST_RESOLVE");
    expect(h.recordCalls).toBe(0);
    expect(h.updateCalls).toBe(0);
    expect(h.epistemicSaved[0]!.reservation?.deferred).toBeUndefined();
  });

  it("CR-RSV-49 — empty target refused", async () => {
    const item = baseItem({
      epistemicItemId: "epi:nt",
      statement: "x",
      reservation: meta(),
    });
    const h = makeHarness({ item });
    const result = await deferReservationAction({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      epistemicItemId: "epi:nt",
      targetCycleTypeId: "   ",
      cycleServices: h.cycleServices,
      decisionServices: h.decisionServices,
      authorityResolver: h.authorityResolver,
      nowIso: () => "2026-09-25T12:00:00.000Z",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RESERVATION_DEFER_NO_TARGET");
    expect(h.recordCalls).toBe(0);
  });

  it("CR-RSV-51 — HD write failure leaves reservation non-deferred", async () => {
    const item = baseItem({
      epistemicItemId: "epi:hd-fail",
      statement: "x",
      reservation: meta(),
    });
    const h = makeHarness({ item, recordOk: false });
    const result = await deferReservationAction({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      epistemicItemId: "epi:hd-fail",
      targetCycleTypeId: "cyc:functional-design",
      cycleServices: h.cycleServices,
      decisionServices: h.decisionServices,
      authorityResolver: h.authorityResolver,
      nowIso: () => "2026-09-25T12:00:00.000Z",
    });
    expect(result.ok).toBe(false);
    expect(h.updateCalls).toBe(0);
    expect(h.epistemicSaved[0]!.reservation?.deferred).toBeUndefined();
  });

  it("CR-RSV-52 — reservation write failure does not leave deferred without coherent HD apply", async () => {
    const item = baseItem({
      epistemicItemId: "epi:rsv-fail",
      statement: "x",
      reservation: meta(),
    });
    // Memory harness: TX is not real SQLite — simulate fail-closed by ensuring
    // update failure surfaces and reservation remains non-deferred in harness state.
    const h = makeHarness({ item, updateFailAfter: true });
    const result = await deferReservationAction({
      projectId: "prj:test",
      cycleInstanceId: "cyc:test",
      epistemicItemId: "epi:rsv-fail",
      targetCycleTypeId: "cyc:functional-design",
      cycleServices: h.cycleServices,
      decisionServices: h.decisionServices,
      authorityResolver: h.authorityResolver,
      nowIso: () => "2026-09-25T12:00:00.000Z",
    });
    expect(result.ok).toBe(false);
    expect(h.epistemicSaved[0]!.reservation?.deferred).toBeUndefined();
  });
});
