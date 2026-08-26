/**
 * ZERO REAL — Option A UI reachability for an already-authorized running Attempt.
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import {
  useProductConversation,
  type ProductConversationController,
} from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { F3ExecutePayload } from "@/features/project-assistant/f3/types";
import type { F3M3ResolvedPayload } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import {
  BOUNDED_RUNNING_REFRESH_ACTION,
  BOUNDED_RUNNING_REFRESH_HELP,
  BOUNDED_RUNNING_REFRESH_TITLE,
} from "@/features/project-assistant/presentationLabels";

const {
  projectAssistantSendActionMock,
  projectAssistantDecideActionMock,
  projectAssistantPrepareF3FixtureActionMock,
  projectAssistantConfirmAndExecuteF3FixtureActionMock,
  projectAssistantPrepareResolvedM3ActionMock,
  projectAssistantConfirmAndExecuteResolvedM3ActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  projectAssistantSendActionMock: vi.fn(),
  projectAssistantDecideActionMock: vi.fn(),
  projectAssistantPrepareF3FixtureActionMock: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureActionMock: vi.fn(),
  projectAssistantPrepareResolvedM3ActionMock: vi.fn(),
  projectAssistantConfirmAndExecuteResolvedM3ActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantSendAction: (...args: unknown[]) =>
    projectAssistantSendActionMock(...args),
  projectAssistantDecideAction: (...args: unknown[]) =>
    projectAssistantDecideActionMock(...args),
  projectAssistantPrepareF3FixtureAction: (...args: unknown[]) =>
    projectAssistantPrepareF3FixtureActionMock(...args),
  projectAssistantConfirmAndExecuteF3FixtureAction: (...args: unknown[]) =>
    projectAssistantConfirmAndExecuteF3FixtureActionMock(...args),
  projectAssistantPrepareResolvedM3Action: (...args: unknown[]) =>
    projectAssistantPrepareResolvedM3ActionMock(...args),
  projectAssistantConfirmAndExecuteResolvedM3Action: (...args: unknown[]) =>
    projectAssistantConfirmAndExecuteResolvedM3ActionMock(...args),
  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
}));

const PROJECT_ID = "prj:async-refresh";
const DECISION_ID = "dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96";
const CONTRACT_ID = "xct:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96";
const ATTEMPT_ID = "xat:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96";

const NO_EVIDENCE_OUTCOME = {
  ok: false as const,
  status: "rehydrate_error" as const,
  code: "NO_EVIDENCE_OUTCOME_REFS",
  message: "Aucune référence Evidence/ReviewBundle sur le LPS courant.",
  mode: "fixture" as const,
  retryable: false,
};

const F3_LABELS = {
  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
  noGitWrite: "AUCUN GIT WRITE PRODUIT",
  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
  cursorRealBlocked: "CURSOR REAL BLOQUÉ",
  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN",
} as const;

function baseController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: () => undefined,
    toolEvents: [],
    uiState: "ANSWERED",
    error: null,
    modeLabel: "MODE À CONFIRMER",
    ephemeralNotice: "",
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: () => undefined,
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    busy: false,
    blocked: false,
    canSend: false,
    gateOpen: false,
    recommendationFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    qualificationFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    durableOutcomeFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: () => undefined,
    decide: () => undefined,
    prepareResolvedM3: () => undefined,
    prepareLegacyFixture: () => undefined,
    confirmAndExecuteResolvedM3: () => undefined,
    confirmAndExecuteLegacyFixture: () => undefined,
    refreshResolvedM3RunningAttempt: () => undefined,
    retryLastUserMessage: () => undefined,
    ...overrides,
  } as ProductConversationController;
}

function runningExecute(overrides: Partial<F3ExecutePayload> = {}): F3ExecutePayload {
  return {
    turnKind: "f3_execute",
    mode: "CURSOR_CLI_REAL",
    proposal: null,
    decisionId: DECISION_ID,
    contract: {
      executionContractId: CONTRACT_ID,
      version: 2,
      status: "executing",
      action: "cursor.read_only.inspect",
      target: "workspace.isolated.read",
      scope: "studio.m4.real_off",
      requiredAuthority: "N2",
      mode: "CURSOR_CLI_REAL",
      constraints: [],
    },
    attempt: {
      attemptId: ATTEMPT_ID,
      status: "running",
      selectedAgentRef: "agt:m4-cursor-cli-real",
      adapterId: "adp:m4-cursor-cli-real",
      adapterRef: "adp:m4-cursor-cli-real",
      executionMode: "cursor_cli_real",
      realProcessInvoked: true,
      externalEffects: false,
      resultRef: null,
      launchCount: 1,
      selectionStrategy: "capabilities_deterministic",
      mode: "CURSOR_CLI_REAL",
    },
    evidence: {
      evidenceId: "ev:pending-real",
      status: "pending",
      sourceKind: "execution_attempt",
      technicalResultRef: null,
      verified: false,
      mode: "CURSOR_CLI_REAL",
    },
    reviewBundle: {
      reviewBundleId: "rb:pending-real",
      status: "pending",
      version: 0,
      evidenceRefs: [],
      mode: "CURSOR_CLI_REAL",
    },
    recommendation: {
      kind: "recommendation",
      status: "pending",
      executionAuthority: false,
      gateConsumed: false,
      decisionCreated: false,
      attemptAutoLaunchNextCycle: false,
      openHardReservationRefs: [],
      hardBlockers: [],
      nextGateCode: null,
      nextActionCode: null,
      recommendationLabel: F3_LABELS.recommendationNotDecision,
      mode: "CURSOR_CLI_REAL",
    },
    reusedExistingAttempt: false,
    executionPerformed: true,
    realExecution: true,
    gitWritePerformed: false,
    labels: F3_LABELS,
    processLocalNotice: "pending",
    disclosures: [],
    ...overrides,
  };
}

function succeededExecute(): F3ExecutePayload {
  return runningExecute({
    reusedExistingAttempt: true,
    contract: {
      executionContractId: CONTRACT_ID,
      version: 2,
      status: "executed",
      action: "cursor.read_only.inspect",
      target: "workspace.isolated.read",
      scope: "studio.m4.real_off",
      requiredAuthority: "N2",
      mode: "CURSOR_CLI_REAL",
      constraints: [],
    },
    attempt: {
      attemptId: ATTEMPT_ID,
      status: "succeeded",
      selectedAgentRef: "agt:m4-cursor-cli-real",
      adapterId: "adp:m4-cursor-cli-real",
      adapterRef: "adp:m4-cursor-cli-real",
      executionMode: "cursor_cli_real",
      realProcessInvoked: true,
      externalEffects: false,
      resultRef: "res:m4:done",
      launchCount: 1,
      selectionStrategy: "capabilities_deterministic",
      mode: "CURSOR_CLI_REAL",
    },
    evidence: {
      evidenceId: "ev:real-terminal",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: "res:m4:done",
      verified: false,
      mode: "CURSOR_CLI_REAL",
    },
    reviewBundle: {
      reviewBundleId: "rb:real-terminal",
      status: "composed",
      version: 1,
      evidenceRefs: ["ev:real-terminal"],
      mode: "CURSOR_CLI_REAL",
    },
    recommendation: {
      kind: "recommendation",
      status: "available",
      executionAuthority: false,
      gateConsumed: false,
      decisionCreated: false,
      attemptAutoLaunchNextCycle: false,
      openHardReservationRefs: [],
      hardBlockers: [],
      nextGateCode: null,
      nextActionCode: null,
      recommendationLabel: F3_LABELS.recommendationNotDecision,
      mode: "CURSOR_CLI_REAL",
    },
  });
}

function fixtureExecute(): F3ExecutePayload {
  return runningExecute({
    mode: "FIXTURE",
    contract: {
      executionContractId: "xct:fixture",
      version: 1,
      status: "executed",
      action: "fixture-docs-prepare",
      target: "sfia-studio/f3-fixture-only",
      scope: "f3-fixture:docs+metadata-only",
      requiredAuthority: "N2",
      mode: "FIXTURE",
      constraints: [],
    },
    attempt: {
      attemptId: "xat:fixture",
      status: "succeeded",
      selectedAgentRef: "agt:f3-fixture",
      adapterId: "adp:f3-test-fixture",
      adapterRef: "adp:f3-test-fixture",
      executionMode: "fixture",
      realProcessInvoked: false,
      externalEffects: false,
      resultRef: "res:fixture",
      launchCount: 1,
      selectionStrategy: "capabilities_deterministic",
      mode: "FIXTURE",
    },
    evidence: {
      evidenceId: "ev:fixture",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: "res:fixture",
      verified: false,
      mode: "FIXTURE",
    },
    reviewBundle: {
      reviewBundleId: "rb:fixture",
      status: "composed",
      version: 1,
      evidenceRefs: ["ev:fixture"],
      mode: "FIXTURE",
    },
  });
}

const RESOLVED_M3 = {
  turnKind: "f3_m3_resolved",
  mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
  decisionId: DECISION_ID,
  projectId: PROJECT_ID,
  original: {
    executionContractId: "xct:m3:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96",
  },
  successor: {
    executionContractId: CONTRACT_ID,
    version: 2,
    status: "prepared",
    action: "cursor.read_only.inspect",
    target: "workspace.isolated.read",
    scope: "studio.m4.real_off",
    requiredAuthority: "N2",
  },
} as unknown as F3M3ResolvedPayload;

function Harness() {
  const controller = useProductConversation({ projectId: PROJECT_ID });
  return <ConversationSurface exposeLegacyAuthorityPath controller={controller} />;
}

/** findByTestId is presence-only; GO/confirm stay disabled while startTransition keeps busy. */
async function findEnabledByTestId(testId: string) {
  const el = await screen.findByTestId(testId);
  await waitFor(() => {
    expect(el).toBeEnabled();
  });
  return el;
}

const PROJECT_CTX = {
  projectId: PROJECT_ID,
  name: "Refresh UI",
  shortReference: "RUI",
  objective: "Reachability",
  contextSummary: "ZERO REAL",
  criticality: "STANDARD",
  constraints: [] as string[],
  lpsId: "lps:refresh",
  lpsVersion: 1,
  lpsCreatedAt: "2026-08-17T10:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:refresh",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS",
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
  readiness: "NOT_READY",
};

describe("Option A running Attempt refresh UI", () => {
  afterEach(() => {
    cleanup();
  });

  it("hides Confirmer and shows Actualiser le résultat for a running REAL Attempt", () => {
    const onRefresh = vi.fn();
    render(
      <ConversationSurface
        exposeLegacyAuthorityPath
        controller={baseController({
          f3M3Resolved: RESOLVED_M3,
          f3Execute: runningExecute(),
          canRefreshResolvedM3Running: true,
          refreshResolvedM3RunningAttempt: onRefresh,
        })}
      />,
    );

    expect(screen.queryByTestId("f3-confirm-execute-button")).toBeNull();
    expect(screen.getByTestId("f3-running-refresh-title")).toHaveTextContent(
      BOUNDED_RUNNING_REFRESH_TITLE,
    );
    expect(screen.getByTestId("f3-running-refresh-help")).toHaveTextContent(
      BOUNDED_RUNNING_REFRESH_HELP,
    );
    const refresh = screen.getByTestId("f3-refresh-running-button");
    expect(refresh).toHaveTextContent(BOUNDED_RUNNING_REFRESH_ACTION);
    expect(refresh).toBeEnabled();
    expect(screen.queryByTestId("f3-evidence-card")).toBeNull();
    expect(screen.queryByRole("button", { name: /confirmer/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /relancer|réessayer/i })).toBeNull();
    expect(refresh.textContent ?? "").not.toMatch(/confirmer|relancer|réessayer/i);

    fireEvent.click(refresh);
    expect(onRefresh).toHaveBeenCalledTimes(1);
  });

  it("keeps the refresh control when continuation stays running", () => {
    render(
      <ConversationSurface
        exposeLegacyAuthorityPath
        controller={baseController({
          f3M3Resolved: RESOLVED_M3,
          f3Execute: runningExecute({ reusedExistingAttempt: true }),
          canRefreshResolvedM3Running: true,
        })}
      />,
    );
    expect(screen.getByTestId("f3-refresh-running-button")).toBeEnabled();
    expect(screen.getByTestId("f3-attempt-status")).toHaveTextContent("running");
    expect(screen.getByTestId("f3-attempt-id")).toHaveTextContent(ATTEMPT_ID);
  });

  it("shows Evidence/ReviewBundle and hides refresh after a terminal payload", () => {
    render(
      <ConversationSurface
        exposeLegacyAuthorityPath
        controller={baseController({
          f3M3Resolved: RESOLVED_M3,
          f3Execute: succeededExecute(),
          canRefreshResolvedM3Running: false,
        })}
      />,
    );
    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
    expect(screen.queryByTestId("f3-running-refresh-title")).toBeNull();
    expect(screen.getByTestId("f3-evidence-id")).toHaveTextContent("ev:real-terminal");
    expect(screen.getByTestId("f3-review-bundle-id")).toHaveTextContent(
      "rb:real-terminal",
    );
    expect(screen.getByTestId("f3-recommendation-card")).toBeInTheDocument();
  });

  it("does not offer refresh on fixture terminal or before Confirmation", () => {
    const { rerender } = render(
      <ConversationSurface
        exposeLegacyAuthorityPath
        controller={baseController({
          f3Execute: fixtureExecute(),
        })}
      />,
    );
    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
    expect(screen.getByTestId("f3-evidence-card")).toBeInTheDocument();

    rerender(
      <ConversationSurface
        exposeLegacyAuthorityPath
        controller={baseController({
          f3M3Resolved: RESOLVED_M3,
          canConfirmResolvedM3: true,
        })}
      />,
    );
    expect(screen.getByTestId("f3-confirm-execute-button")).toBeEnabled();
    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
  });

  it("disables refresh while busy to block concurrent clicks", () => {
    const onRefresh = vi.fn();
    render(
      <ConversationSurface
        exposeLegacyAuthorityPath
        controller={baseController({
          f3M3Resolved: RESOLVED_M3,
          f3Execute: runningExecute(),
          busy: true,
          canRefreshResolvedM3Running: false,
          refreshResolvedM3RunningAttempt: onRefresh,
        })}
      />,
    );
    const refresh = screen.getByTestId("f3-refresh-running-button");
    expect(refresh).toBeDisabled();
    fireEvent.click(refresh);
    expect(onRefresh).not.toHaveBeenCalled();
  });
});

describe("Option A running Attempt refresh uses the canonical M3 action", () => {
  beforeEach(() => {
    projectAssistantSendActionMock.mockReset();
    projectAssistantDecideActionMock.mockReset();
    projectAssistantPrepareF3FixtureActionMock.mockReset();
    projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
    projectAssistantPrepareResolvedM3ActionMock.mockReset();
    projectAssistantConfirmAndExecuteResolvedM3ActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      NO_EVIDENCE_OUTCOME,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("confirms once then refreshes the SAME ids; pending stays running; terminal shows Evidence", async () => {
    const proposal = {
      proposalId: "prp:refresh",
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Inspect",
      objective: "Inspect",
      cycleTypeId: "cycle:inc",
      recommendedProfile: "Standard",
      rationale: "test",
      scope: "read-only",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "ok",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "Décision",
      contextSnapshot: {
        projectId: PROJECT_ID,
        lpsId: "lps:refresh",
        lpsVersion: 1,
        doctrineDigest: "digest:refresh",
      },
      processLocalNotice: "process-local",
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    };

    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "Proposition",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT_CTX,
      ephemeralNotice: "ephemeral",
      f2: {
        turnKind: "f2_proposal",
        intentClass: "actionable",
        qualification: {
          cycleTypeId: "cycle:inc",
          cycleLabel: "INC",
          recommendedProfile: "Standard",
          rationale: "test",
          criticalSignalsPresent: false,
          requiresJustificationForCritical: false,
          capitalizationViaCycleTypeId: false,
          isMorrisDecision: false,
          catalogVersion: "1",
          catalogHash: "h",
          detailedStatus: "ok",
          disclosures: [],
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
        },
        proposal,
        decision: null,
        labels: {
          recommendation: "RECOMMANDATION",
          proposition: "PROPOSITION",
          decisionRequired: "DÉCISION REQUISE",
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked: true,
        processLocalNotice: "process-local",
      },
    });

    projectAssistantDecideActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "GO enregistré",
      mode: "fixture",
      presentation: "test_provider",
      project: PROJECT_CTX,
      ephemeralNotice: "ephemeral",
      f2: {
        turnKind: "f2_decision",
        intentClass: "actionable",
        qualification: null,
        proposal: { ...proposal, status: "APPROVED" },
        decision: {
          decisionId: DECISION_ID,
          proposalId: "prp:refresh",
          kind: "GO",
          statusLabel: "DÉCISION PRISE",
          humanDecisionStatus: "accepted",
          scope: "read-only",
          reservesText: null,
          capturedAt: "2026-08-17T10:00:00.000Z",
          readyForNextGatedStep: true,
          executionPerformed: false,
        },
        labels: {
          recommendation: "RECOMMANDATION",
          proposition: "PROPOSITION",
          decisionRequired: "DÉCISION REQUISE",
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked: true,
        processLocalNotice: "process-local",
      },
    });

    projectAssistantPrepareResolvedM3ActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "Contrat prêt",
      mode: "fixture",
      presentation: "unconfirmed",
      project: PROJECT_CTX,
      ephemeralNotice: "ephemeral",
      f3: RESOLVED_M3,
    });

    projectAssistantConfirmAndExecuteResolvedM3ActionMock
      .mockResolvedValueOnce({
        ok: true,
        status: "ok",
        text: "Attempt running",
        mode: "fixture",
        presentation: "unconfirmed",
        project: PROJECT_CTX,
        ephemeralNotice: "ephemeral",
        f3: runningExecute(),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: "ok",
        text: "Still running",
        mode: "fixture",
        presentation: "unconfirmed",
        project: PROJECT_CTX,
        ephemeralNotice: "ephemeral",
        f3: runningExecute({ reusedExistingAttempt: true }),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: "ok",
        text: "Attempt succeeded",
        mode: "fixture",
        presentation: "unconfirmed",
        project: PROJECT_CTX,
        ephemeralNotice: "ephemeral",
        f3: succeededExecute(),
      });

    render(<Harness />);

    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Inspecter le workspace" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));
    fireEvent.click(await findEnabledByTestId("f2-decide-GO"));
    fireEvent.click(await findEnabledByTestId("f3-prepare-button"));
    const confirm = await findEnabledByTestId("f3-confirm-execute-button");
    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
    fireEvent.click(confirm);

    expect(await findEnabledByTestId("f3-refresh-running-button")).toBeEnabled();
    expect(screen.queryByTestId("f3-confirm-execute-button")).toBeNull();
    expect(screen.getByTestId("f3-running-refresh-title")).toHaveTextContent(
      BOUNDED_RUNNING_REFRESH_TITLE,
    );
    expect(screen.getByTestId("f3-attempt-id")).toHaveTextContent(ATTEMPT_ID);
    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenCalledTimes(
      1,
    );
    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenLastCalledWith(
      {
        projectId: PROJECT_ID,
        decisionId: DECISION_ID,
        executionContractId: CONTRACT_ID,
        expectedContractVersion: 2,
      },
    );

    fireEvent.click(screen.getByTestId("f3-refresh-running-button"));
    await waitFor(() => {
      expect(
        projectAssistantConfirmAndExecuteResolvedM3ActionMock,
      ).toHaveBeenCalledTimes(2);
    });
    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenLastCalledWith(
      {
        projectId: PROJECT_ID,
        decisionId: DECISION_ID,
        executionContractId: CONTRACT_ID,
        expectedContractVersion: 2,
      },
    );
    expect(await findEnabledByTestId("f3-refresh-running-button")).toBeEnabled();
    expect(screen.getByTestId("f3-attempt-status")).toHaveTextContent("running");
    expect(screen.queryByTestId("f3-evidence-card")).toBeNull();

    fireEvent.click(screen.getByTestId("f3-refresh-running-button"));
    await waitFor(() => {
      expect(
        projectAssistantConfirmAndExecuteResolvedM3ActionMock,
      ).toHaveBeenCalledTimes(3);
    });
    expect(await screen.findByTestId("f3-evidence-id")).toHaveTextContent(
      "ev:real-terminal",
    );
    expect(screen.getByTestId("f3-review-bundle-id")).toHaveTextContent(
      "rb:real-terminal",
    );
    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
    expect(screen.queryByText(/Confirmer l.exécution/i)).toBeNull();
  });

  it("blocks concurrent refresh double-click before the first call returns", async () => {
    let release!: (value: unknown) => void;
    const pending = new Promise((resolve) => {
      release = resolve;
    });
    projectAssistantConfirmAndExecuteResolvedM3ActionMock.mockReturnValue(pending);

    const proposal = {
      proposalId: "prp:refresh",
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Inspect",
      objective: "Inspect",
      cycleTypeId: "cycle:inc",
      recommendedProfile: "Standard",
      rationale: "test",
      scope: "read-only",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "ok",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "Décision",
      contextSnapshot: {
        projectId: PROJECT_ID,
        lpsId: "lps:refresh",
        lpsVersion: 1,
        doctrineDigest: "digest:refresh",
      },
      processLocalNotice: "process-local",
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    };

    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "Proposition",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT_CTX,
      ephemeralNotice: "ephemeral",
      f2: {
        turnKind: "f2_proposal",
        intentClass: "actionable",
        qualification: {
          cycleTypeId: "cycle:inc",
          cycleLabel: "INC",
          recommendedProfile: "Standard",
          rationale: "test",
          criticalSignalsPresent: false,
          requiresJustificationForCritical: false,
          capitalizationViaCycleTypeId: false,
          isMorrisDecision: false,
          catalogVersion: "1",
          catalogHash: "h",
          detailedStatus: "ok",
          disclosures: [],
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
        },
        proposal,
        decision: null,
        labels: {
          recommendation: "RECOMMANDATION",
          proposition: "PROPOSITION",
          decisionRequired: "DÉCISION REQUISE",
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked: true,
        processLocalNotice: "process-local",
      },
    });
    projectAssistantDecideActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "GO enregistré",
      mode: "fixture",
      presentation: "test_provider",
      project: PROJECT_CTX,
      ephemeralNotice: "ephemeral",
      f2: {
        turnKind: "f2_decision",
        intentClass: "actionable",
        qualification: null,
        proposal: { ...proposal, status: "APPROVED" },
        decision: {
          decisionId: DECISION_ID,
          proposalId: "prp:refresh",
          kind: "GO",
          statusLabel: "DÉCISION PRISE",
          humanDecisionStatus: "accepted",
          scope: "read-only",
          reservesText: null,
          capturedAt: "2026-08-17T10:00:00.000Z",
          readyForNextGatedStep: true,
          executionPerformed: false,
        },
        labels: {
          recommendation: "RECOMMANDATION",
          proposition: "PROPOSITION",
          decisionRequired: "DÉCISION REQUISE",
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked: true,
        processLocalNotice: "process-local",
      },
    });
    projectAssistantPrepareResolvedM3ActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "Contrat prêt",
      mode: "fixture",
      presentation: "unconfirmed",
      project: PROJECT_CTX,
      ephemeralNotice: "ephemeral",
      f3: RESOLVED_M3,
    });

    render(<Harness />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Inspecter" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));
    fireEvent.click(await findEnabledByTestId("f2-decide-GO"));
    fireEvent.click(await findEnabledByTestId("f3-prepare-button"));
    const confirm = await findEnabledByTestId("f3-confirm-execute-button");
    fireEvent.click(confirm);
    fireEvent.click(confirm);
    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenCalledTimes(
      1,
    );
    release({
      ok: true,
      status: "ok",
      text: "Attempt running",
      mode: "fixture",
      presentation: "unconfirmed",
      project: PROJECT_CTX,
      ephemeralNotice: "ephemeral",
      f3: runningExecute(),
    });
    const refresh = await screen.findByTestId("f3-refresh-running-button");
    await waitFor(() => {
      expect(refresh).toBeEnabled();
    });
    expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenCalledTimes(
      1,
    );
  });
});
