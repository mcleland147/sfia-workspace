/**
 * Lifecycle Closure Phase B — presentation helpers + LifecycleSurface refresh.
 * ZERO REAL — mocked server actions only.
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LifecycleSurface } from "@/features/pre-m6-product-ui/surfaces/LifecycleSurface";
import type {
  FinalizationAssessment,
  FinalizationObligation,
  LifecycleRecommendationEnvelope,
  PilotLifecycleProjection,
} from "@/lib/oa/cycle";
import {
  canOfferGroupedNoGovernedEffects,
  canOfferRequireArtifact,
  classifyObligationPresentation,
  FINALIZE_HD_BLOCKER,
  formatAssessFeedback,
  groupFinalizationObligations,
  lifecycleCtaPresentation,
  lifecycleStatusBadge,
  nonHumanDecisionBlockers,
  obligationExplanation,
  readyExceptFinalizeDecision,
  showsRequireArtifactContinuation,
  summarizeFinalizationReadiness,
  blockerLabel,
} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";

function fakeFinalizeEnvelope(): LifecycleRecommendationEnvelope {
  return {
    recommendationId: "epi:lr",
    projectId: "prj:ui",
    intent: "FINALIZE_CURRENT_CYCLE",
    subjectCycleInstanceId: "cyc:ui",
    targetCycleInstanceId: null,
    targetCycleTypeId: null,
    producer: "nora",
    producedAt: "2026-09-10T20:00:00.000Z",
    statement: "Finaliser",
    basisFingerprint: "fp:test",
    basisRefs: {
      projectId: "prj:ui",
      subjectCycleInstanceId: "cyc:ui",
      subjectCycleStatus: "active",
      lpsActiveCycleInstanceId: "cyc:ui",
    },
    semanticKey: "sk:finalize",
    authority: "none",
    isHumanDecision: false,
    doesNotActivateCycle: true,
    doesNotFinalize: true,
    doesNotCreateHumanDecision: true,
    epistemicStatus: "active",
    supersedesRecommendationId: null,
    derivedCurrentness: "CURRENT",
  };
}

const { projectionMock, lifecycleActionMock } = vi.hoisted(() => ({
  projectionMock: vi.fn(),
  lifecycleActionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
    projectionMock(...args),
  projectAssistantPilotLifecycleAction: (...args: unknown[]) =>
    lifecycleActionMock(...args),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  projectionMock.mockReset();
  lifecycleActionMock.mockReset();
});

function assessment(
  overrides: Partial<FinalizationAssessment> &
    Pick<FinalizationAssessment, "blockers" | "canComplete" | "obligations">,
): FinalizationAssessment {
  return {
    cycleInstanceId: "cyc:ui",
    projectId: "prj:ui",
    finalizeDecisionId: null,
    finalizeAccepted: false,
    assessedAt: "2026-09-10T20:00:00.000Z",
    ...overrides,
  };
}

function baseProjection(
  overrides?: Partial<PilotLifecycleProjection>,
): PilotLifecycleProjection {
  return {
    projectId: "prj:ui",
    activeCycleInstanceId: "cyc:ui",
    activeCycle: null,
    pausedCycles: [],
    candidateCycles: [],
    supersededCycles: [],
    terminalCycles: [],
    selectedCycleInstanceId: "cyc:ui",
    selectedStatus: "active",
    selectionAmbiguous: false,
    assessment: null,
    cta: {
      canStart: false,
      canPause: true,
      canResume: false,
      canFinalize: true,
      canCancel: true,
    },
    currentRecommendations: [],
    ...overrides,
  };
}

describe("LC-B Phase B — lifecyclePresentation helpers (D-LC-02/03)", () => {
  it("LC-B-18 unit — readyExceptFinalize when only finalize HD blocker remains", () => {
    const a = assessment({
      canComplete: false,
      blockers: [FINALIZE_HD_BLOCKER],
      obligations: [
        {
          family: "human_decision",
          status: "MISSING",
          blocking: true,
        },
      ],
    });
    expect(nonHumanDecisionBlockers(a)).toEqual([]);
    expect(readyExceptFinalizeDecision(a)).toBe(true);
    expect(blockerLabel(FINALIZE_HD_BLOCKER)).toContain("Pilote");
  });

  it("LC-B-11 unit — non-HD blockers disable readyExceptFinalize", () => {
    const a = assessment({
      canComplete: false,
      blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
      obligations: [
        { family: "exit_criteria", status: "BLOCKING", blocking: true },
      ],
    });
    expect(readyExceptFinalizeDecision(a)).toBe(false);
    expect(nonHumanDecisionBlockers(a)).toEqual(["exit_criteria_open"]);
  });

  it("LC-B-13 unit — canOfferGroupedNoGovernedEffects when UNKNOWN families", () => {
    const a = assessment({
      canComplete: false,
      blockers: ["artifact_applicability_unknown"],
      obligations: [
        {
          family: "artifact",
          status: "PENDING",
          applicability: "UNKNOWN",
          blocking: true,
        },
        {
          family: "evidence",
          status: "PENDING",
          applicability: "UNKNOWN",
          blocking: true,
        },
      ],
    });
    expect(canOfferGroupedNoGovernedEffects(a)).toBe(true);
    expect(canOfferRequireArtifact(a)).toBe(true);
  });

  it("CORR-PROOF-06 — require-artifact offer after N/A; continuation when APPLICABLE missing", () => {
    const na = assessment({
      canComplete: false,
      blockers: [],
      obligations: [
        {
          family: "artifact",
          status: "NOT_APPLICABLE",
          applicability: "NOT_APPLICABLE",
          blocking: false,
        },
      ],
    });
    expect(canOfferGroupedNoGovernedEffects(na)).toBe(false);
    expect(canOfferRequireArtifact(na)).toBe(true);

    const missing = assessment({
      canComplete: false,
      blockers: ["artifact_missing"],
      obligations: [
        {
          family: "artifact",
          status: "MISSING",
          applicability: "APPLICABLE",
          blocking: true,
        },
      ],
    });
    expect(canOfferRequireArtifact(missing)).toBe(false);
    expect(showsRequireArtifactContinuation(missing)).toBe(true);
    const cta = lifecycleCtaPresentation(
      baseProjection({ assessment: missing }),
    );
    expect(cta.showRequireArtifactContinuation).toBe(true);
    expect(cta.finalizeEnabled).toBe(false);
  });

  it("LC-B-15 unit — APPLICABLE family blocks grouped N/A offer", () => {
    const a = assessment({
      canComplete: false,
      blockers: ["artifact_missing"],
      obligations: [
        {
          family: "artifact",
          status: "MISSING",
          applicability: "APPLICABLE",
          blocking: true,
        },
      ],
    });
    expect(canOfferGroupedNoGovernedEffects(a)).toBe(false);
  });

  it("CTA honesty — Finaliser enabled only when readyExceptFinalize", () => {
    const ready = baseProjection({
      assessment: assessment({
        canComplete: false,
        blockers: [FINALIZE_HD_BLOCKER],
        obligations: [],
      }),
      currentRecommendations: [fakeFinalizeEnvelope()],
    });
    const ctaReady = lifecycleCtaPresentation(ready);
    expect(ctaReady.finalizeEnabled).toBe(true);
    expect(ctaReady.showFinalizePrimary).toBe(true);
    expect(ctaReady.showAssess).toBe(false);
    expect(lifecycleStatusBadge(ready).status).toBe("ready_finalize");

    const blocked = baseProjection({
      assessment: assessment({
        canComplete: false,
        blockers: ["blocking_reservations", FINALIZE_HD_BLOCKER],
        obligations: [],
      }),
    });
    const ctaBlocked = lifecycleCtaPresentation(blocked);
    expect(ctaBlocked.finalizeEnabled).toBe(false);
    expect(ctaBlocked.showAssess).toBe(true);
    expect(lifecycleStatusBadge(blocked).status).toBe("finalization_open");
  });
});

describe("LC-B-01 — LifecycleSurface durableRefreshSignal", () => {
  it("bumps durableRefreshSignal → re-fetches projection (no full remount required)", async () => {
    const candidate = baseProjection({
      selectedCycleInstanceId: null,
      selectedStatus: null,
      activeCycleInstanceId: null,
      cta: {
        canStart: true,
        canPause: false,
        canResume: false,
        canFinalize: false,
        canCancel: false,
      },
    });
    const active = baseProjection({
      selectedStatus: "active",
      activeCycleInstanceId: "cyc:ui",
      selectedCycleInstanceId: "cyc:ui",
    });

    projectionMock
      .mockResolvedValueOnce({
        ok: true,
        projection: candidate,
      })
      .mockResolvedValueOnce({
        ok: true,
        projection: active,
      });

    const { rerender } = render(
      <LifecycleSurface projectId="prj:ui" durableRefreshSignal={0} />,
    );

    await waitFor(() => {
      expect(projectionMock).toHaveBeenCalledTimes(1);
    });

    rerender(<LifecycleSurface projectId="prj:ui" durableRefreshSignal={1} />);

    await waitFor(() => {
      expect(projectionMock).toHaveBeenCalledTimes(2);
    });
    expect(projectionMock).toHaveBeenLastCalledWith({ projectId: "prj:ui" });
  });
});

describe("JOURNEY-INTEGRITY — Lifecycle generic Nora CTA precedence", () => {
  it("suppressGenericNoraCta hides define-deliverable while keeping livrable facts", async () => {
    const missing = baseProjection({
      assessment: assessment({
        canComplete: false,
        blockers: ["artifact_missing"],
        obligations: [
          {
            family: "artifact",
            status: "MISSING",
            applicability: "APPLICABLE",
            blocking: true,
          },
        ],
      }),
    });
    projectionMock.mockResolvedValue({ ok: true, projection: missing });

    const { rerender } = render(
      <LifecycleSurface projectId="prj:ui" suppressGenericNoraCta={false} />,
    );
    await waitFor(() => {
      expect(
        document.querySelector("[data-testid='lifecycle-define-deliverable-cta']"),
      ).not.toBeNull();
    });

    rerender(
      <LifecycleSurface projectId="prj:ui" suppressGenericNoraCta />,
    );
    await waitFor(() => {
      expect(
        document.querySelector("[data-testid='lifecycle-define-deliverable-cta']"),
      ).toBeNull();
    });
    expect(
      document.querySelector(
        "[data-testid='lifecycle-require-artifact-continuation']",
      ),
    ).not.toBeNull();
  });
})

const governedUnknown: FinalizationObligation[] = [
  {
    family: "artifact",
    status: "PENDING",
    applicability: "UNKNOWN",
    detail: "artifact_applicability_unknown",
    blocking: false,
  },
  {
    family: "execution_contract",
    status: "PENDING",
    applicability: "UNKNOWN",
    detail: "execution_contract_applicability_unknown",
    blocking: false,
  },
  {
    family: "evidence",
    status: "PENDING",
    applicability: "UNKNOWN",
    detail: "evidence_applicability_unknown",
    blocking: false,
  },
  {
    family: "review_bundle",
    status: "PENDING",
    applicability: "UNKNOWN",
    detail: "review_bundle_applicability_unknown",
    blocking: false,
  },
  {
    family: "git_repository",
    status: "PENDING",
    applicability: "UNKNOWN",
    detail: "git_repository_applicability_unknown",
    blocking: false,
  },
];

describe("FR — finalization readiness presentation helpers", () => {
  it("J — unknown internal detail falls back to generic wording (no fabricated reason)", () => {
    expect(
      obligationExplanation({
        family: "artifact",
        status: "PENDING",
        applicability: "UNKNOWN",
        detail: "artifact_applicability_unknown",
        blocking: false,
      }),
    ).toBe("Il faut préciser si un livrable est requis pour ce cycle.");
    expect(
      obligationExplanation({
        family: "artifact",
        status: "MISSING",
        applicability: "APPLICABLE",
        detail: "totally_unknown_code_xyz",
        blocking: true,
      }),
    ).toBe("Cette condition n’est pas encore remplie.");
    expect(
      classifyObligationPresentation(
        {
          family: "artifact",
          status: "PENDING",
          applicability: "UNKNOWN",
          blocking: false,
        },
        null,
      ),
    ).toBe("TO_QUALIFY");
  });

  it("A — all governed effects UNKNOWN → group À décider + transparent families", () => {
    const a = assessment({
      canComplete: false,
      blockers: [
        "artifact_applicability_unknown",
        "execution_contract_applicability_unknown",
        "evidence_applicability_unknown",
        "review_bundle_applicability_unknown",
        "git_repository_applicability_unknown",
        FINALIZE_HD_BLOCKER,
      ],
      obligations: [
        {
          family: "exit_criteria",
          status: "SATISFIED",
          applicability: "APPLICABLE",
          detail: "trajectory_steps_closed_or_skipped",
          blocking: false,
        },
        {
          family: "blockers",
          status: "SATISFIED",
          applicability: "APPLICABLE",
          detail: "no_blocking_reservations",
          blocking: false,
        },
        ...governedUnknown,
        {
          family: "human_decision",
          status: "MISSING",
          applicability: "APPLICABLE",
          detail: "finalize_human_decision_absent",
          blocking: true,
        },
      ],
    });
    const groups = groupFinalizationObligations(a);
    const governed = groups.find((g) => g.id === "governed_effects");
    expect(governed?.allUnknownGoverned).toBe(true);
    expect(governed?.summaryLabel).toBe("À décider");
    expect(governed?.rows).toHaveLength(5);
    const summary = summarizeFinalizationReadiness(a);
    expect(summary?.toQualifyCount).toBe(5);
    expect(formatAssessFeedback(a)).toMatch(/à qualifier/);
  });
});

describe("FR — LifecycleSurface readiness guidance", () => {
  it("A — UNKNOWN governed effects use group summary, not five unexplained primary rows", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: [
            "artifact_applicability_unknown",
            "execution_contract_applicability_unknown",
            "evidence_applicability_unknown",
            "review_bundle_applicability_unknown",
            "git_repository_applicability_unknown",
            FINALIZE_HD_BLOCKER,
          ],
          obligations: [
            {
              family: "exit_criteria",
              status: "SATISFIED",
              applicability: "APPLICABLE",
              detail: "trajectory_steps_closed_or_skipped",
              blocking: false,
            },
            {
              family: "blockers",
              status: "SATISFIED",
              applicability: "APPLICABLE",
              detail: "no_blocking_reservations",
              blocking: false,
            },
            ...governedUnknown,
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector("[data-testid='lifecycle-readiness-summary']"),
      ).not.toBeNull();
    });
    expect(
      document.querySelector(
        "[data-testid='lifecycle-condition-group-governed_effects-summary']",
      )?.textContent,
    ).toMatch(/À décider/);
    expect(
      document.querySelector("[data-testid='lifecycle-obligation-policy']"),
    ).not.toBeNull();
    expect(
      document.querySelector("[data-testid='lifecycle-governed-effects-details']"),
    ).not.toBeNull();
    expect(
      document.querySelector("[data-testid='lifecycle-obligation-list']"),
    ).not.toBeNull();
  });

  it("B — exit criteria blocking + Reservations satisfied; trajectory action colocated", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
          obligations: [
            {
              family: "exit_criteria",
              status: "BLOCKING",
              applicability: "APPLICABLE",
              detail: "open_steps:step:1",
              blocking: true,
            },
            {
              family: "blockers",
              status: "SATISFIED",
              applicability: "APPLICABLE",
              detail: "no_blocking_reservations",
              blocking: false,
            },
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-complete-trajectory-step']",
        ),
      ).not.toBeNull();
    });
    const work = document.querySelector(
      "[data-testid='lifecycle-obligation-list-work']",
    );
    expect(work?.textContent).toMatch(/Étape de trajectoire|Critères de sortie/);
    expect(work?.textContent).toMatch(/Aucune réserve bloquante active/);
    expect(work?.textContent).not.toMatch(/À confirmer/);
  });

  it("C — APPLICABLE artifact MISSING → À traiter + continuation action", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: ["artifact_missing", FINALIZE_HD_BLOCKER],
          obligations: [
            {
              family: "artifact",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "artifact_required_but_proof_absent",
              blocking: true,
            },
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-define-deliverable-cta']",
        ),
      ).not.toBeNull();
    });
    const row = document.querySelector('[data-family="artifact"]');
    expect(row?.textContent).toMatch(/À traiter/);
    expect(row?.textContent).toMatch(/livrable|preuve/i);
    expect(row?.textContent).not.toMatch(/artifact_required_but_proof_absent/);
  });

  it("D — governed effects NOT_APPLICABLE show reasons, not missing", async () => {
    const naReason = "pilot_hd_obligation_policy:opt:no-governed-effects";
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: [FINALIZE_HD_BLOCKER],
          obligations: [
            {
              family: "artifact",
              status: "NOT_APPLICABLE",
              applicability: "NOT_APPLICABLE",
              notApplicableReason: naReason,
              blocking: false,
            },
            {
              family: "execution_contract",
              status: "NOT_APPLICABLE",
              applicability: "NOT_APPLICABLE",
              notApplicableReason: naReason,
              blocking: false,
            },
            {
              family: "evidence",
              status: "NOT_APPLICABLE",
              applicability: "NOT_APPLICABLE",
              notApplicableReason: naReason,
              blocking: false,
            },
            {
              family: "review_bundle",
              status: "NOT_APPLICABLE",
              applicability: "NOT_APPLICABLE",
              notApplicableReason: naReason,
              blocking: false,
            },
            {
              family: "git_repository",
              status: "NOT_APPLICABLE",
              applicability: "NOT_APPLICABLE",
              notApplicableReason: naReason,
              blocking: false,
            },
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector('[data-family="artifact"]'),
      ).not.toBeNull();
    });
    const artifact = document.querySelector('[data-family="artifact"]');
    expect(artifact?.textContent).toMatch(/Non applicable/);
    expect(artifact?.textContent).toMatch(/aucun effet gouverné/i);
    expect(artifact?.textContent).not.toMatch(/Manquant|À confirmer/);
    expect(
      document.querySelector(
        "[data-testid='lifecycle-condition-group-governed_effects-summary']",
      )?.textContent,
    ).toMatch(/Non applicable/);
  });

  it("E — only finalize HD remains → ready for Pilot + Finaliser", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: [FINALIZE_HD_BLOCKER],
          obligations: [
            {
              family: "exit_criteria",
              status: "SATISFIED",
              applicability: "APPLICABLE",
              detail: "trajectory_steps_closed_or_skipped",
              blocking: false,
            },
            {
              family: "blockers",
              status: "SATISFIED",
              applicability: "APPLICABLE",
              detail: "no_blocking_reservations",
              blocking: false,
            },
            {
              family: "artifact",
              status: "NOT_APPLICABLE",
              applicability: "NOT_APPLICABLE",
              notApplicableReason:
                "pilot_hd_obligation_policy:opt:no-governed-effects",
              blocking: false,
            },
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
        currentRecommendations: [fakeFinalizeEnvelope()],
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-finalize-from-readiness']",
        ),
      ).not.toBeNull();
    });
    expect(
      document.querySelector("[data-testid='lifecycle-readiness-summary']")
        ?.textContent,
    ).toMatch(/prêt pour décision du Pilote/i);
    expect(
      document.querySelector(
        "[data-testid='lifecycle-condition-group-pilot_authority-summary']",
      )?.textContent,
    ).toMatch(/Prêt pour décision du Pilote/);
    const finalize = document.querySelector(
      "[data-testid='lifecycle-finalize-from-readiness']",
    ) as HTMLButtonElement;
    expect(finalize.disabled).toBe(false);
  });

  it("F — blocking Reservation preserves Voir les réserves action", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: ["blocking_reservations", FINALIZE_HD_BLOCKER],
          obligations: [
            {
              family: "blockers",
              status: "BLOCKING",
              applicability: "APPLICABLE",
              detail: "res:1|blocking",
              blocking: true,
            },
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
        blockingReservations: [
          {
            epistemicItemId: "epi:res:1",
            statement: "Réserve bloquante de test",
          },
        ],
        reservationSummary: {
          activeCount: 1,
          mayAffectCount: 0,
          mustResolveCount: 1,
          toQualifyCount: 0,
        },
      }),
    });
    render(
      <LifecycleSurface
        projectId="prj:ui"
        onOpenReservations={() => undefined}
      />,
    );
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-open-reservations-from-condition']",
        ),
      ).not.toBeNull();
    });
    const blockers = document.querySelector('[data-family="blockers"]');
    expect(blockers?.textContent).toMatch(/À traiter/);
    expect(blockers?.textContent).toMatch(/réserve bloquante/i);
  });

  it("G — terminal cycle has no assessment/mutation controls", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        selectedStatus: "completed",
        assessment: null,
        cta: {
          canStart: false,
          canPause: false,
          canResume: false,
          canFinalize: false,
          canCancel: false,
        },
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector("[data-testid='lifecycle-status-badge']")
          ?.textContent,
      ).toMatch(/Terminé/);
    });
    expect(
      document.querySelector("[data-testid='lifecycle-assess-cta']"),
    ).toBeNull();
    expect(
      document.querySelector("[data-testid='lifecycle-finalize-cta-primary']"),
    ).toBeNull();
    expect(
      document.querySelector("[data-testid='lifecycle-finalize-from-readiness']"),
    ).toBeNull();
    expect(
      document.querySelector("[data-testid='lifecycle-readiness-summary']"),
    ).toBeNull();
  });

  it("H — ASSESS feedback reflects returned assessment counts; role=status", async () => {
    const before = assessment({
      canComplete: false,
      blockers: [
        "exit_criteria_open",
        "artifact_applicability_unknown",
        FINALIZE_HD_BLOCKER,
      ],
      obligations: [
        {
          family: "exit_criteria",
          status: "BLOCKING",
          applicability: "APPLICABLE",
          detail: "open_steps:step:1",
          blocking: true,
        },
        ...governedUnknown,
        {
          family: "human_decision",
          status: "MISSING",
          applicability: "APPLICABLE",
          detail: "finalize_human_decision_absent",
          blocking: true,
        },
      ],
    });
    const after = assessment({
      assessedAt: "2026-09-25T12:00:00.000Z",
      canComplete: false,
      blockers: [
        "artifact_applicability_unknown",
        "execution_contract_applicability_unknown",
        "evidence_applicability_unknown",
        "review_bundle_applicability_unknown",
        "git_repository_applicability_unknown",
        FINALIZE_HD_BLOCKER,
      ],
      obligations: [
        {
          family: "exit_criteria",
          status: "SATISFIED",
          applicability: "APPLICABLE",
          detail: "trajectory_steps_closed_or_skipped",
          blocking: false,
        },
        {
          family: "blockers",
          status: "SATISFIED",
          applicability: "APPLICABLE",
          detail: "no_blocking_reservations",
          blocking: false,
        },
        ...governedUnknown,
        {
          family: "human_decision",
          status: "MISSING",
          applicability: "APPLICABLE",
          detail: "finalize_human_decision_absent",
          blocking: true,
        },
      ],
    });
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({ assessment: before }),
    });
    lifecycleActionMock.mockResolvedValue({
      ok: true,
      assessment: after,
      projection: baseProjection({ assessment: after }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector("[data-testid='lifecycle-assess-cta']"),
      ).not.toBeNull();
    });
    fireEvent.click(
      document.querySelector(
        "[data-testid='lifecycle-assess-cta']",
      ) as HTMLButtonElement,
    );
    await waitFor(() => {
      const feedback = document.querySelector(
        "[data-testid='lifecycle-info']",
      );
      expect(feedback?.getAttribute("role")).toBe("status");
      expect(feedback?.textContent).toMatch(/Vérification terminée/);
      expect(feedback?.textContent).toMatch(/satisfaites/);
      expect(feedback?.textContent).toMatch(/à qualifier/);
      expect(feedback?.textContent).not.toBe(
        "Conditions de finalisation actualisées.",
      );
    });
  });

  it("I — finalize Recommendation clarifies cycle remains active until Pilot finalizes", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        currentRecommendations: [
          {
            ...fakeFinalizeEnvelope(),
            statement:
              "Je recommande de finaliser le cycle de Cadrage de StudyFlow.",
          },
        ],
        assessment: assessment({
          canComplete: false,
          blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
          obligations: [
            {
              family: "exit_criteria",
              status: "BLOCKING",
              applicability: "APPLICABLE",
              detail: "open_steps:step:1",
              blocking: true,
            },
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-finalize-rec-active-cycle']",
        ),
      ).not.toBeNull();
    });
    expect(
      document.querySelector("[data-testid='lifecycle-finalize-rec-notice']")
        ?.textContent,
    ).toMatch(/engager la finalisation/i);
    expect(
      document.querySelector(
        "[data-testid='lifecycle-finalize-rec-active-cycle']",
      )?.textContent,
    ).toMatch(/reste actif tant que le Pilote n’a pas finalisé/i);
  });
});


describe("RC-01 — mixed group roll-up never Satisfait with UNKNOWN", () => {
  it("A — SATISFIED + TO_QUALIFY → governed group NOT Satisfait", () => {
    const a = assessment({
      canComplete: false,
      blockers: ["artifact_applicability_unknown", FINALIZE_HD_BLOCKER],
      obligations: [
        {
          family: "artifact",
          status: "SATISFIED",
          applicability: "APPLICABLE",
          detail: "artifact_proof_present",
          blocking: false,
        },
        {
          family: "evidence",
          status: "PENDING",
          applicability: "UNKNOWN",
          detail: "evidence_applicability_unknown",
          blocking: false,
        },
      ],
    });
    const governed = groupFinalizationObligations(a).find(
      (g) => g.id === "governed_effects",
    );
    expect(governed?.summaryLabel).toBe("À qualifier");
    expect(governed?.summaryLabel).not.toBe("Satisfait");
  });

  it("B — NOT_APPLICABLE + TO_QUALIFY → group NOT Satisfait", () => {
    const a = assessment({
      canComplete: false,
      blockers: ["evidence_applicability_unknown", FINALIZE_HD_BLOCKER],
      obligations: [
        {
          family: "artifact",
          status: "NOT_APPLICABLE",
          applicability: "NOT_APPLICABLE",
          notApplicableReason: "pilot_hd_obligation_policy:opt:no-artifact",
          blocking: false,
        },
        {
          family: "evidence",
          status: "PENDING",
          applicability: "UNKNOWN",
          detail: "evidence_applicability_unknown",
          blocking: false,
        },
      ],
    });
    const governed = groupFinalizationObligations(a).find(
      (g) => g.id === "governed_effects",
    );
    expect(governed?.summaryLabel).toBe("À qualifier");
    expect(governed?.summaryLabel).not.toBe("Satisfait");
  });

  it("C — SATISFIED + NOT_APPLICABLE → Satisfait / resolved without blocker", () => {
    const a = assessment({
      canComplete: false,
      blockers: [FINALIZE_HD_BLOCKER],
      obligations: [
        {
          family: "artifact",
          status: "SATISFIED",
          applicability: "APPLICABLE",
          detail: "artifact_proof_present",
          blocking: false,
        },
        {
          family: "evidence",
          status: "NOT_APPLICABLE",
          applicability: "NOT_APPLICABLE",
          notApplicableReason: "pilot_hd_obligation_policy:opt:no-evidence",
          blocking: false,
        },
      ],
    });
    const governed = groupFinalizationObligations(a).find(
      (g) => g.id === "governed_effects",
    );
    expect(governed?.summaryLabel).toBe("Satisfait");
  });

  it("D — work_of_cycle with TO_QUALIFY → À qualifier, never Satisfait", () => {
    const a = assessment({
      canComplete: false,
      blockers: [FINALIZE_HD_BLOCKER],
      obligations: [
        {
          family: "exit_criteria",
          status: "SATISFIED",
          applicability: "APPLICABLE",
          detail: "trajectory_steps_closed_or_skipped",
          blocking: false,
        },
        {
          family: "blockers",
          status: "PENDING",
          applicability: "UNKNOWN",
          detail: "reservation_applicability_unknown",
          blocking: false,
        },
      ],
    });
    const work = groupFinalizationObligations(a).find(
      (g) => g.id === "work_of_cycle",
    );
    expect(work?.summaryLabel).toBe("À qualifier");
    expect(work?.summaryLabel).not.toBe("Satisfait");
  });
});

describe("RC-02 — Pilot decision waiting, not a to-treat work item", () => {
  it("human decision + another blocker → En attente; toTreat excludes HD; Finaliser absent", async () => {
    const a = assessment({
      canComplete: false,
      blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
      obligations: [
        {
          family: "exit_criteria",
          status: "BLOCKING",
          applicability: "APPLICABLE",
          detail: "open_steps:step:1",
          blocking: true,
        },
        {
          family: "human_decision",
          status: "MISSING",
          applicability: "APPLICABLE",
          detail: "finalize_human_decision_absent",
          blocking: true,
        },
      ],
    });
    expect(
      classifyObligationPresentation(a.obligations[1]!, a),
    ).toBe("AWAITING_PILOT_DECISION");
    const summary = summarizeFinalizationReadiness(a);
    expect(summary?.toTreatCount).toBe(1);
    expect(summary?.pilotDecisionPending).toBe(true);
    expect(summary?.awaitingPilotDecision).toBe(false);
    expect(summary?.countLine).toMatch(/décision Pilote en attente/);
    expect(summary?.countLine).not.toMatch(/2 à traiter/);
    expect(formatAssessFeedback(a)).toMatch(/décision Pilote en attente/);

    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({ assessment: a }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-condition-group-pilot_authority-summary']",
        ),
      ).not.toBeNull();
    });
    expect(
      document.querySelector(
        "[data-testid='lifecycle-condition-group-pilot_authority-summary']",
      )?.textContent,
    ).toMatch(/En attente/);
    expect(
      document.querySelector('[data-family="human_decision"]')?.textContent,
    ).toMatch(/En attente/);
    expect(
      document.querySelector("[data-testid='lifecycle-finalize-from-readiness']"),
    ).toBeNull();
    expect(
      document.querySelector("[data-testid='lifecycle-finalize-cta-primary']"),
    ).toBeNull();
  });

  it("only human decision remains → Prêt + Finaliser; N/A count when present", async () => {
    const a = assessment({
      canComplete: false,
      blockers: [FINALIZE_HD_BLOCKER],
      obligations: [
        {
          family: "artifact",
          status: "NOT_APPLICABLE",
          applicability: "NOT_APPLICABLE",
          notApplicableReason:
            "pilot_hd_obligation_policy:opt:no-governed-effects",
          blocking: false,
        },
        {
          family: "execution_contract",
          status: "NOT_APPLICABLE",
          applicability: "NOT_APPLICABLE",
          notApplicableReason:
            "pilot_hd_obligation_policy:opt:no-governed-effects",
          blocking: false,
        },
        {
          family: "evidence",
          status: "NOT_APPLICABLE",
          applicability: "NOT_APPLICABLE",
          notApplicableReason:
            "pilot_hd_obligation_policy:opt:no-governed-effects",
          blocking: false,
        },
        {
          family: "review_bundle",
          status: "NOT_APPLICABLE",
          applicability: "NOT_APPLICABLE",
          notApplicableReason:
            "pilot_hd_obligation_policy:opt:no-governed-effects",
          blocking: false,
        },
        {
          family: "git_repository",
          status: "NOT_APPLICABLE",
          applicability: "NOT_APPLICABLE",
          notApplicableReason:
            "pilot_hd_obligation_policy:opt:no-governed-effects",
          blocking: false,
        },
        {
          family: "human_decision",
          status: "MISSING",
          applicability: "APPLICABLE",
          detail: "finalize_human_decision_absent",
          blocking: true,
        },
      ],
    });
    const summary = summarizeFinalizationReadiness(a);
    expect(summary?.awaitingPilotDecision).toBe(true);
    expect(summary?.toTreatCount).toBe(0);
    expect(summary?.notApplicableCount).toBe(5);
    expect(summary?.pilotDecisionPending).toBe(true);
    expect(summary?.headline).toMatch(/prêt pour décision du Pilote/i);
    // countLine still exposes N/A accounting when useful
    expect(summary?.countLine).toMatch(/non applicable/);

    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: a,
        currentRecommendations: [fakeFinalizeEnvelope()],
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-finalize-from-readiness']",
        ),
      ).not.toBeNull();
    });
    expect(
      document.querySelector(
        "[data-testid='lifecycle-condition-group-pilot_authority-summary']",
      )?.textContent,
    ).toMatch(/Prêt pour décision du Pilote/);
  });

  it("finalize decision satisfied → presentation Satisfait", () => {
    const o = {
      family: "human_decision" as const,
      status: "SATISFIED" as const,
      applicability: "APPLICABLE" as const,
      detail: "finalize_decision:hd:1",
      blocking: false,
    };
    expect(classifyObligationPresentation(o, null)).toBe("SATISFIED");
    expect(obligationExplanation(o)).toMatch(/décision Pilote de finalisation/i);
  });
});

describe("RC-03 — never expose internal notApplicableReason codes", () => {
  it("recognized N/A reasons map to business French", () => {
    expect(
      obligationExplanation({
        family: "artifact",
        status: "NOT_APPLICABLE",
        applicability: "NOT_APPLICABLE",
        notApplicableReason: "pilot_hd_obligation_policy:opt:no-artifact",
        blocking: false,
      }),
    ).toBe("Aucun livrable n’est requis pour ce cycle.");
    expect(
      obligationExplanation({
        family: "execution_contract",
        status: "NOT_APPLICABLE",
        applicability: "NOT_APPLICABLE",
        notApplicableReason: "pilot_hd_obligation_policy:opt:no-execution",
        blocking: false,
      }),
    ).toBe("Aucune exécution gouvernée n’est requise pour ce cycle.");
    expect(
      obligationExplanation({
        family: "evidence",
        status: "NOT_APPLICABLE",
        applicability: "NOT_APPLICABLE",
        notApplicableReason: "pilot_hd_obligation_policy:opt:no-evidence",
        blocking: false,
      }),
    ).toBe("Aucune Evidence n’est requise pour ce cycle.");
    expect(
      obligationExplanation({
        family: "review_bundle",
        status: "NOT_APPLICABLE",
        applicability: "NOT_APPLICABLE",
        notApplicableReason: "pilot_hd_obligation_policy:opt:no-review",
        blocking: false,
      }),
    ).toBe("Aucun ReviewBundle n’est requis pour ce cycle.");
    expect(
      obligationExplanation({
        family: "git_repository",
        status: "NOT_APPLICABLE",
        applicability: "NOT_APPLICABLE",
        notApplicableReason: "pilot_hd_obligation_policy:opt:no-git",
        blocking: false,
      }),
    ).toBe("Aucun effet Git n’est requis pour ce cycle.");
  });

  it("unknown synthetic reason never surfaces raw code", () => {
    const reason = "some_new_internal_reason";
    const text = obligationExplanation({
      family: "artifact",
      status: "NOT_APPLICABLE",
      applicability: "NOT_APPLICABLE",
      notApplicableReason: reason,
      blocking: false,
    });
    expect(text).toBe(
      "Cette condition a été explicitement déclarée non applicable pour ce cycle.",
    );
    expect(text).not.toContain(reason);
    expect(text).not.toMatch(/some new internal reason/i);
    expect(text).not.toMatch(/_/);
  });
});

describe("RC-04 — single Finaliser affordance when guidance colocated", () => {
  it("A — assessment shown + ready → exactly one Finaliser", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: [FINALIZE_HD_BLOCKER],
          obligations: [
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
        currentRecommendations: [fakeFinalizeEnvelope()],
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-finalize-from-readiness']",
        ),
      ).not.toBeNull();
    });
    const finalizeButtons = Array.from(
      document.querySelectorAll("button"),
    ).filter((b) => b.textContent?.trim() === "Finaliser");
    expect(finalizeButtons).toHaveLength(1);
    expect(
      document.querySelector("[data-testid='lifecycle-finalize-cta-primary']"),
    ).toBeNull();
    expect(
      document.querySelector("[data-testid='lifecycle-finalize-cta-secondary']"),
    ).toBeNull();
  });

  it("B — no colocated assessment path preserves generic Finaliser", async () => {
    // Assessment absent → no grouped Pilot CTA; legacy generic Finaliser when ready.
    // readyExceptFinalize needs assessment with only HD blocker — without assessment,
    // finalizeEnabled is false. Use assessment with empty obligations but still
    // readyExceptFinalize, without pilot_authority row → generic remains.
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: [FINALIZE_HD_BLOCKER],
          obligations: [],
        }),
        currentRecommendations: [fakeFinalizeEnvelope()],
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector("[data-testid='lifecycle-finalize-cta-primary']"),
      ).not.toBeNull();
    });
    expect(
      document.querySelector(
        "[data-testid='lifecycle-finalize-from-readiness']",
      ),
    ).toBeNull();
    const finalizeButtons = Array.from(
      document.querySelectorAll("button"),
    ).filter((b) => b.textContent?.trim() === "Finaliser");
    expect(finalizeButtons).toHaveLength(1);
  });

  it("C — contextual Finaliser invokes FINALIZE once", async () => {
    projectionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        assessment: assessment({
          canComplete: false,
          blockers: [FINALIZE_HD_BLOCKER],
          obligations: [
            {
              family: "human_decision",
              status: "MISSING",
              applicability: "APPLICABLE",
              detail: "finalize_human_decision_absent",
              blocking: true,
            },
          ],
        }),
        currentRecommendations: [fakeFinalizeEnvelope()],
      }),
    });
    lifecycleActionMock.mockResolvedValue({
      ok: true,
      projection: baseProjection({
        selectedStatus: "completed",
        assessment: null,
        cta: {
          canStart: false,
          canPause: false,
          canResume: false,
          canFinalize: false,
          canCancel: false,
        },
      }),
    });
    render(<LifecycleSurface projectId="prj:ui" />);
    await waitFor(() => {
      expect(
        document.querySelector(
          "[data-testid='lifecycle-finalize-from-readiness']",
        ),
      ).not.toBeNull();
    });
    fireEvent.click(
      document.querySelector(
        "[data-testid='lifecycle-finalize-from-readiness']",
      ) as HTMLButtonElement,
    );
    await waitFor(() => {
      expect(lifecycleActionMock).toHaveBeenCalledTimes(1);
    });
    expect(lifecycleActionMock.mock.calls[0]?.[0]).toMatchObject({
      action: "FINALIZE",
    });
  });
});
