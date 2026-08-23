/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPrepareM3Action: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  decideMock.mockReset();
  inspectMock.mockReset();
  authorizeMock.mockReset();
});

describe("W2 TrajectorySurface", () => {
  it("labels Options and Recommendation distinctly and never auto-decides", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Trajectoire gouvernée par gates",
          intent: "Instruire puis décider",
          impacts: ["Chaque frontière est explicite"],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer un périmètre réversible",
          impacts: ["Chemin plus court"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Aucun signal critique.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);

    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getAllByText("OPTION").length).toBeGreaterThan(0);
    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    expect(screen.getByTestId("w2-proposed-trajectory")).toHaveTextContent(
      "TRAJECTOIRE PROPOSÉE",
    );
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-authorization")).toBeNull();
    expect(proposeMock).toHaveBeenCalledWith({ projectId: "prj:w2-ui" });
  });

  it("records an explicit Pilote decision and shows STOP BEFORE EXECUTE on the verdict", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Bornée.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:w2-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
    expect(screen.getByTestId("w2-decided-trajectory")).toHaveTextContent(
      "TRAJECTOIRE DÉCIDÉE / COURANTE",
    );
    expect(decideMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
      }),
    );

    const { projectAssistantPrepareM3Action } = await import(
      "@/features/project-assistant/actions"
    );
    vi.mocked(projectAssistantPrepareM3Action).mockResolvedValue({
      ok: true,
      f3: {
        contract: {
          executionContractId: "xct:w2-ui",
          version: 1,
          status: "confirmation_required",
          action: "w2:inspect-only",
          target: "studio",
          scope: "w2-ui",
          requiredAuthority: "MORRIS",
          constraints: ["AUCUNE EXÉCUTION"],
          stopConditions: ["STOP AVANT EXECUTE"],
          requiredCapabilities: ["cap:f3-fixture-docs"],
          reversibility: "reversible",
          semanticFingerprint: "abc123def456",
        },
      },
    } as never);

    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "w2:inspect-only",
    );
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:f3-fixture-docs",
    );
    // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      semanticFingerprint: "abc123def456",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:test",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );
    expect(screen.getByTestId("w2-confirm-contract")).not.toBeDisabled();

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      outcome: "BLOCKED",
      outcomeLabel: "BLOQUÉ — ACTION REQUISE",
      reasonCode: "inspection_required",
      reasonText: "Le contrat n'a pas été inspecté.",
      nextAction: "Inspecter le contrat avant toute autorisation.",
      inspection: {
        executionContractId: "xct:w2-ui",
        contractVersion: 1,
        semanticFingerprint: "abc",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: false,
        confirmationRef: null,
        statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      },
      agentCapability: {
        sufficient: false,
        evaluatedAgentRefs: [],
        sufficientAgentRef: null,
        reason: "no_agent_registered",
        statusLabel: "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
      },
      authorityReceiptRef: "avr:test",
      decisionRefs: ["dec:w2-ui"],
      requiredAuthority: "MORRIS",
      verifiedAuthorityLevel: null,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
      "BLOQUÉ — ACTION REQUISE",
    );
    expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
      "arrêt avant exécution",
    );
    expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
      "CONFIRMATION REQUISE — MANQUANTE",
    );
  });
});
