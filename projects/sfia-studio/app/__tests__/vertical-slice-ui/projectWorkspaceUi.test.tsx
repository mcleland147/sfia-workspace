import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import axe from "axe-core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { StudioShell } from "@/components/shell/StudioShell";
import { ProjectWorkspaceClient } from "@/features/vertical-slice-ui/ProjectWorkspaceClient";
import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
import {
  isStudioProjectWorkspaceRoute,
  type StudioShellRoute,
} from "@/lib/navigation";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/lib/vertical-slice-runtime/disclosures", () => ({
  RUNTIME_DISCLOSURES: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "NOT_GUARANTEED",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "NOT_SELECTED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true,
    restartMayLoseState: true,
    messages: [],
  },
  RUNTIME_READINESS_NOT_READY: {
    status: "NOT_READY",
    hard: "OPEN",
    tA6: "INCOMPLETE",
    iam: "NOT_SELECTED",
    productPersistence: "NOT_SELECTED",
    realAgentExecution: "DISABLED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    runReady: false,
    productReady: false,
  },
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const SUCCESS_RESULT = {
  ok: true as const,
  project: {
    projectId: "prj:v2-a3-1",
    name: "Projet V2-A3",
    shortReference: "V2-A3",
    objective: "Consulter le workspace projet.",
    contextSummary: "Contexte local borné.",
    criticality: "STANDARD" as const,
    constraints: ["Sans IAM", "Sans IAM"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:v2-a3",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:v2-a3-1",
    version: 1 as const,
    createdAt: "2026-07-30T09:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: [] as const,
  },
};

const MISSING_RESULT = {
  ok: false as const,
  error: {
    code: "PROJECT_NOT_FOUND" as const,
    message: "Project not found in the local process.",
    retryable: false,
  },
  disclosures: SUCCESS_RESULT.disclosures,
};

beforeEach(() => {
  getProjectRuntimeActionMock.mockReset();
});

afterEach(() => {
  cleanup();
});

describe("V2-A3 Project Workspace UI", () => {
  it("projects Project, LPS, doctrine and runtime truths without dashboard claims", () => {
    render(
      <ProjectWorkspaceView projectId="prj:v2-a3-1" result={SUCCESS_RESULT} />,
    );

    expect(
      screen.getByRole("heading", { name: "Espace de travail projet" }),
    ).toBeVisible();
    expect(screen.getByTestId("project-workspace-projection")).toBeVisible();
    expect(screen.getByText("prj:v2-a3-1")).toBeVisible();
    expect(screen.getByText("Projet V2-A3")).toBeVisible();
    expect(screen.getByText("pkg:studio-v3-oa")).toBeVisible();
    expect(screen.getByText("lps:v2-a3-1")).toBeVisible();
    expect(screen.getAllByText("REAL_LOCAL_CORE").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
    expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
    expect(screen.getByText(/AGENT DISABLED/)).toBeVisible();
    expect(
      within(screen.getByLabelText("Contraintes")).getAllByText("Sans IAM"),
    ).toHaveLength(2);
    const continuePilotage = screen.getByTestId("workspace-continue-pilotage");
    expect(continuePilotage).toBeVisible();
    expect(continuePilotage).toHaveAttribute(
      "href",
      `/ops1/nouvelle-demande?projectId=${encodeURIComponent("prj:v2-a3-1")}`,
    );
    expect(continuePilotage).toHaveTextContent(/temporaire/i);
    expect(
      screen.getByTestId("workspace-primary-assistant-hint"),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Créer un autre projet" }),
    ).toHaveAttribute("href", "/studio/projects/new");
    expect(screen.queryByText(/\brecommendation engine\b/i)).toBeNull();
    expect(screen.queryByText(/\borchestrateur\b/i)).toBeNull();
    expect(screen.queryByRole("heading", { name: /dashboard/i })).toBeNull();
    expect(screen.queryByText(/Project lié à OPS1/i)).toBeNull();
    expect(screen.queryByText(/Workspace connecté/i)).toBeNull();
  });

  it("loads the workspace through getProjectRuntimeAction", async () => {
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
    render(<ProjectWorkspaceClient projectId="prj:v2-a3-1" />);

    expect(screen.getByTestId("project-workspace-loading")).toBeVisible();
    expect(
      await screen.findByTestId("project-workspace-projection"),
    ).toBeVisible();
    expect(getProjectRuntimeActionMock).toHaveBeenCalledWith("prj:v2-a3-1");
    expect(screen.getByText("Projet V2-A3")).toBeVisible();
  });

  it("renders a bounded missing state for unknown process-local projects", () => {
    render(
      <ProjectWorkspaceView projectId="prj:missing" result={MISSING_RESULT} />,
    );

    expect(screen.getByTestId("project-workspace-missing")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "Projet introuvable dans ce processus",
      }),
    ).toBeVisible();
    expect(screen.getByText("prj:missing")).toBeVisible();
    expect(screen.getByText("PROJECT_NOT_FOUND")).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Retour à la création" }),
    ).toHaveAttribute("href", "/studio/projects/new");
  });

  it("keeps workspace disclosures and shell defaults for V2-A3", async () => {
    const route = "/studio/projects/prj:v2-a3-1" as StudioShellRoute;
    expect(isStudioProjectWorkspaceRoute(route)).toBe(true);
    expect(isStudioProjectWorkspaceRoute("/studio/projects/new")).toBe(false);

    render(
      <StudioShell
        variant="flush"
        activeRoute={route}
        title="Projet V2-A3"
        showTabs={false}
        primaryAction={null}
        pills={[{ label: "LOCAL_PROCESS", tone: "orange" }]}
        copilot={{
          variant: "flush",
          name: "Nora · Project Copilot",
          subtitle: "Lecture seule · aucune autorité",
          avatarTone: "purple",
          levelPill: "Aucune décision",
          summary: "Lecture seule.",
          watchLabel: "GARDE-FOUS",
          watchItems: [
            { label: "État process-local volatil", dotColor: "#faa629" },
          ],
          riskTitle: "MODE LOCAL UNIQUEMENT",
          riskText: "Aucune persistance produit.",
        }}
      >
        <RuntimeDisclosureBanner surface="workspace" />
        <ProjectWorkspaceView projectId="prj:v2-a3-1" result={SUCCESS_RESULT} />
      </StudioShell>,
    );

    expect(screen.getByText(/consulte un Project et son LPS/i)).toBeVisible();
    expect(screen.queryByTestId("topbar-tabs")).toBeNull();
    expect(
      within(screen.getByTestId("topbar")).queryByRole("link", {
        name: /Nouvelle demande/i,
      }),
    ).toBeNull();

    const results = await axe.run(document.body, {
      rules: {
        "color-contrast": { enabled: false },
        region: { enabled: false },
      },
    });
    expect(results.violations).toEqual([]);
    await waitFor(() => expect(true).toBe(true));
  });
});
