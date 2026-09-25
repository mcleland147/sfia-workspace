/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — structured binding + F2-hijack guard.
 * RC-01 — absent ≠ present-malformed fail-closed.
 */
import { describe, expect, it } from "vitest";
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import {
  formatReservationActiveCycleFacingLabel,
  parseReservationInteractionContextInput,
  validateReservationInteractionContext,
} from "@/features/project-assistant/reservationInteractionContext";
import { resolveTransitionReadiness } from "@/features/project-assistant/f2/transitionReadiness";
import { formatReservationFocusForPrompt } from "@/lib/nora-cognitive-runtime/reservationPrompt";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

const ACTOR = {
  actorId: "actor:test",
  displayName: "Test",
  role: "system" as const,
};

function reservationItem(
  overrides: Partial<EpistemicItem> & Pick<EpistemicItem, "epistemicItemId">,
): EpistemicItem {
  return {
    schemaVersion: "0.1.0-oa",
    type: "Reservation",
    status: "active",
    statement: "Rappels exclus V1",
    createdBy: ACTOR,
    createdAt: "2026-09-25T00:00:00.000Z",
    relatedObjects: ["prj:test", "cyc:active"],
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prov:t",
      actor: ACTOR,
      source: "system",
      timestamp: "2026-09-25T00:00:00.000Z",
      correlationId: "cor:t",
      projectId: "prj:test",
      cycleInstanceId: "cyc:active",
    },
    reservation: {
      ordinal: 3,
      title: "Rappels V1",
      summary: "Exclure rappels de V1",
      impact: "major",
      attentionBy: "before_finalization",
      finalizationRelevance: "must_resolve",
      rationale: "Scope V1",
      resolutionCondition: "Rappels explicitement exclus",
      journalEntryRefs: [],
      sourceTurnRefs: [],
    },
    blocking: true,
    ...overrides,
  };
}

function actionableAnalysis(): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:cadrage",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    continuationKind: null,
    artifactMaterializationOperation: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
  };
}

describe("RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 binding", () => {
  it("CR-RCP-01 / RC-01 — absent → generic path; malformed → INVALID; valid → ok", () => {
    expect(parseReservationInteractionContextInput(undefined)).toEqual({
      status: "absent",
    });
    expect(parseReservationInteractionContextInput(null)).toEqual({
      status: "absent",
    });

    for (const hostile of [
      "hostile",
      [],
      {},
      { cycleInstanceId: "cyc:a" },
      { epistemicItemId: "epi:x" },
      { cycleInstanceId: "  ", epistemicItemId: "epi:x" },
      { cycleInstanceId: "cyc:a", epistemicItemId: "  " },
      { cycleInstanceId: 1, epistemicItemId: "epi:x" },
      { cycleInstanceId: "cyc:a", epistemicItemId: ["epi:x"] },
    ]) {
      const parsed = parseReservationInteractionContextInput(hostile);
      expect(parsed.status).toBe("invalid");
      if (parsed.status === "invalid") {
        expect(parsed.code).toBe("RESERVATION_CONTEXT_INVALID");
      }
    }

    expect(
      parseReservationInteractionContextInput({
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:1",
      }),
    ).toEqual({
      status: "ok",
      value: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:1",
      },
    });
  });

  it("CR-RCP-02 — server revalidation binds exact active Reservation", () => {
    const item = reservationItem({ epistemicItemId: "epi:rsv:1" });
    const ok = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:1",
      },
      activeCycleInstanceId: "cyc:active",
      items: [item],
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.value).toMatchObject({
      kind: "reservation_resolution",
      cycleInstanceId: "cyc:active",
      epistemicItemId: "epi:rsv:1",
      ordinal: 3,
      title: "Rappels V1",
    });
  });

  it("CR-RCP-03 — stale / foreign / inactive / wrong-type fail closed (no retarget)", () => {
    const active = reservationItem({ epistemicItemId: "epi:rsv:1" });
    const otherCycle = reservationItem({
      epistemicItemId: "epi:rsv:2",
      relatedObjects: ["prj:test", "cyc:other"],
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:t",
        actor: ACTOR,
        source: "system",
        timestamp: "2026-09-25T00:00:00.000Z",
        correlationId: "cor:t",
        projectId: "prj:test",
        cycleInstanceId: "cyc:other",
      },
    });
    const resolved = reservationItem({
      epistemicItemId: "epi:rsv:3",
      status: "resolved",
    });
    const observation: EpistemicItem = {
      ...active,
      epistemicItemId: "epi:obs",
      type: "Observation",
      reservation: undefined,
    };

    expect(
      validateReservationInteractionContext({
        claimed: {
          cycleInstanceId: "cyc:stale",
          epistemicItemId: "epi:rsv:1",
        },
        activeCycleInstanceId: "cyc:active",
        items: [active],
      }).ok,
    ).toBe(false);

    const missing = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:missing",
      },
      activeCycleInstanceId: "cyc:active",
      items: [active],
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.code).toBe("RESERVATION_CONTEXT_NOT_FOUND");

    const foreign = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:2",
      },
      activeCycleInstanceId: "cyc:active",
      items: [otherCycle],
    });
    expect(foreign.ok).toBe(false);
    if (!foreign.ok) expect(foreign.code).toBe("RESERVATION_CONTEXT_CYCLE_MISMATCH");

    const inactive = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:rsv:3",
      },
      activeCycleInstanceId: "cyc:active",
      items: [resolved],
    });
    expect(inactive.ok).toBe(false);
    if (!inactive.ok) expect(inactive.code).toBe("RESERVATION_CONTEXT_NOT_ACTIVE");

    const wrongType = validateReservationInteractionContext({
      claimed: {
        cycleInstanceId: "cyc:active",
        epistemicItemId: "epi:obs",
      },
      activeCycleInstanceId: "cyc:active",
      items: [observation],
    });
    expect(wrongType.ok).toBe(false);
    if (!wrongType.ok) expect(wrongType.code).toBe("RESERVATION_CONTEXT_WRONG_TYPE");
  });

  it("CR-RCP-04 — Reservation focus forces advisory F1 (blocks generic F2 hijack)", () => {
    const without = resolveTransitionReadiness({
      analysis: actionableAnalysis(),
      forceRepoInformative: false,
    });
    expect(without.formalizationReady).toBe(true);

    const withFocus = resolveTransitionReadiness({
      analysis: actionableAnalysis(),
      forceRepoInformative: true,
    });
    expect(withFocus.formalizationReady).toBe(false);
  });

  it("CR-RCP-05 — focus prompt forbids resolved claims and new Cadrage hijack", () => {
    const section = formatReservationFocusForPrompt({
      epistemicItemId: "epi:rsv:1",
      ordinal: 3,
      title: "Rappels V1",
      resolutionCondition: "Rappels exclus",
      cycleInstanceId: "cyc:active",
      cycleLabel: "Cadrage",
    });
    expect(section).toContain("TRAITEMENT RÉSERVE");
    expect(section).toContain("epi:rsv:1");
    expect(section).toContain("cyc:active");
    expect(section).toMatch(/INTERDIT.*levé/i);
    expect(section).toMatch(/INTERDIT.*Cadrage/i);
    expect(section).toContain("PROPOSE_RESOLUTION");
    expect(section).not.toMatch(/émets RESOLVE/i);
  });

  it("RC-02 — active cycle facing label is human-readable", () => {
    expect(formatReservationActiveCycleFacingLabel("Cadrage")).toBe(
      "Cadrage actif",
    );
    expect(formatReservationActiveCycleFacingLabel("Cadrage actif")).toBe(
      "Cadrage actif",
    );
    expect(formatReservationActiveCycleFacingLabel(null)).toBe("Cycle actif");
    expect(formatReservationActiveCycleFacingLabel("")).toBe("Cycle actif");
  });
});
