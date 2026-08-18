import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProjectPrincipalClient } from "@/features/studio-projects/ProjectPrincipalClient";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/features/project-assistant", () => ({
  ProjectAssistantPanel: ({
    onDurableFactsChanged,
    onDurableEvidenceOutcomeChange,
  }: {
    projectId: string;
    onDurableFactsChanged?: () => void;
    onDurableEvidenceOutcomeChange?: (outcome: null) => void;
  }) => (
    <div data-testid="project-assistant-panel-stub">
      <button
        type="button"
        data-testid="simulate-durable-mutation"
        onClick={() => {
          onDurableFactsChanged?.();
          onDurableEvidenceOutcomeChange?.(null);
        }}
      >
        Simuler mutation durable
      </button>
    </div>
  ),
}));

const BASE_PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:amend-rb",
    name: "Projet readback",
    shortReference: "RB",
    objective: "Objectif",
    contextSummary: "Contexte",
    constraints: [] as string[],
    criticality: "STANDARD" as const,
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:rb",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:rb",
    version: 1,
    createdAt: "2026-08-16T10:00:00.000Z",
    activeCycleInstanceId: null as string | null,
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false,
    productReady: false,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "PARTIAL",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as string[],
  },
};

afterEach(() => {
  cleanup();
  getProjectRuntimeActionMock.mockReset();
});

describe("ProjectPrincipalClient durable readback wiring", () => {
  it("reloads getProjectRuntimeAction after durable mutation callback without looping", async () => {
    getProjectRuntimeActionMock
      .mockResolvedValueOnce(BASE_PROJECT)
      .mockResolvedValueOnce({
        ...BASE_PROJECT,
        livingState: {
          ...BASE_PROJECT.livingState,
          version: 4,
        },
      });

    const user = userEvent.setup();
    render(<ProjectPrincipalClient projectId="prj:amend-rb" />);

    await waitFor(() => {
      expect(screen.getByTestId("living-project-state-panel")).toHaveTextContent(
        "v1",
      );
    });
    expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(1);

    await user.click(screen.getByTestId("simulate-durable-mutation"));

    await waitFor(() => {
      expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(2);
      expect(screen.getByTestId("living-project-state-panel")).toHaveTextContent(
        "v4",
      );
    });

    // No automatic re-fire / infinite loop after a single durable callback.
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(2);
  });
});
