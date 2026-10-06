/** @vitest-environment jsdom */
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectsPage } from "@/features/pre-m6-product-ui/ProjectsPage";
import { NewProjectIntentionPage } from "@/features/pre-m6-product-ui/NewProjectIntentionPage";
import { LoginClient } from "@/app/login/login-client";
import {
  absorbUserTurn,
  collectPhaseOf,
  emptyDraft,
  isMinimumSufficient,
  nextNoraPrompt,
  reopenField,
} from "@/features/pre-m6-product-ui/newProjectConversation";
import { projectNoraActivity } from "@/features/pre-m6-product-ui/surfaces/noraActivityProjection";

const { listProjectsRuntimeActionMock, createProjectRuntimeActionMock, pushMock } =
  vi.hoisted(() => ({
    listProjectsRuntimeActionMock: vi.fn(),
    createProjectRuntimeActionMock: vi.fn(),
    pushMock: vi.fn(),
  }));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  listProjectsRuntimeAction: listProjectsRuntimeActionMock,
  createProjectRuntimeAction: createProjectRuntimeActionMock,
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
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

afterEach(() => {
  cleanup();
  listProjectsRuntimeActionMock.mockReset();
  createProjectRuntimeActionMock.mockReset();
  pushMock.mockReset();
});

describe("P5-S06 CP01 explicit-phase collection", () => {
  it("records intention only while INTENTION_REQUIRED, never guesses name", () => {
    const d0 = emptyDraft();
    expect(collectPhaseOf(d0)).toBe("INTENTION_REQUIRED");
    const extra = "Il faudrait aussi prendre en compte les avenants.";
    const d1 = absorbUserTurn(d0, "Moderniser le reporting", "INTENTION_REQUIRED");
    expect(d1.intention).toContain("Moderniser");
    expect(d1.name).toBe("");
    const stillIntention = absorbUserTurn(d1, extra, "INTENTION_REQUIRED");
    expect(stillIntention.name).toBe("");
    expect(stillIntention.intention).toContain("avenants");
    expect(isMinimumSufficient(stillIntention)).toBe(false);
  });

  it("records name only after NAME_REQUIRED; later turns stay context", () => {
    let d = absorbUserTurn(emptyDraft(), "Suivre les contrats", "INTENTION_REQUIRED");
    expect(collectPhaseOf(d)).toBe("NAME_REQUIRED");
    d = absorbUserTurn(d, "Contrats Q3", "NAME_REQUIRED");
    expect(d.name).toBe("Contrats Q3");
    expect(isMinimumSufficient(d)).toBe(true);
    d = absorbUserTurn(d, "Inclure les avenants", "OPTIONAL_CONTEXT");
    expect(d.name).toBe("Contrats Q3");
    expect(d.context).toContain("avenants");
  });

  it("reopens a captured field explicitly without guessing", () => {
    const d = absorbUserTurn(
      absorbUserTurn(emptyDraft(), "Obj", "INTENTION_REQUIRED"),
      "NomX",
      "NAME_REQUIRED",
    );
    const reopened = reopenField(d, "name");
    expect(reopened.name).toBe("");
    expect(collectPhaseOf(reopened)).toBe("NAME_REQUIRED");
    expect(nextNoraPrompt("NAME_REQUIRED")).toMatch(/nom/i);
  });
});

describe("P5-S06 CP01 ProjectsPage", () => {
  it("shows empty state without inventing projects", async () => {
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [],
      disclosures: {},
    });
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(screen.getByTestId("studio-projects-empty")).toBeInTheDocument(),
    );
    expect(screen.queryByTestId("studio-projects-recent")).toBeNull();
    expect(screen.queryByText("À reprendre")).toBeNull();
  });

  it("treats updatedAt as recent activity, not next action, and searches locally", async () => {
    const recent = new Date().toISOString();
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [
        {
          projectId: "prj:a",
          title: "Alpha Reporting",
          name: "Alpha Reporting",
          status: "active",
          objective: "Reporting",
          updatedAt: recent,
        },
        {
          projectId: "prj:b",
          title: "Beta Archive",
          name: "Beta Archive",
          status: "archived",
          objective: "Old",
          updatedAt: "2020-01-01T00:00:00.000Z",
        },
      ],
      disclosures: {},
    });
    const user = userEvent.setup();
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(screen.getByTestId("studio-projects-list")).toBeInTheDocument(),
    );
    expect(screen.queryByText("À reprendre")).toBeNull();
    expect(screen.getByTestId("studio-projects-recent")).toHaveTextContent(
      "Projets récents",
    );
    expect(
      within(screen.getByTestId("studio-projects-recent")).getByText(
        "Alpha Reporting",
      ),
    ).toBeInTheDocument();
    await user.type(screen.getByTestId("studio-projects-search"), "beta");
    expect(screen.getByTestId("studio-projects-list")).toHaveTextContent(
      "Beta Archive",
    );
    expect(screen.getByTestId("studio-projects-ask-nora")).toHaveAttribute(
      "href",
      "/studio/projects/new",
    );
    expect(screen.getByTestId("studio-projects-orientation")).toHaveTextContent(
      /nouveau projet/i,
    );
    expect(screen.getByTestId("studio-projects-orientation")).not.toHaveTextContent(
      /retrouver un projet/i,
    );
  });
});

describe("P5-S06 CP01 NewProjectIntentionPage", () => {
  beforeEach(() => {
    vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000099",
    );
  });

  it("does not create a Project before explicit CTA and asks slots explicitly", async () => {
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
      /intention principale/i,
    );

    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("preview-intention")).toHaveTextContent(/contrats/i);
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
      /Quel nom/i,
    );

    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
    await user.click(screen.getByTestId("new-project-send"));
    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("preview-name")).toHaveTextContent("Contrats Q3");
    expect(screen.getByTestId("create-project-submit")).toBeEnabled();
  });

  it("does not treat a follow-up precision as name before NAME_REQUIRED", async () => {
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats",
    );
    await user.click(screen.getByTestId("new-project-send"));
    expect(screen.getByTestId("preview-name")).toHaveTextContent(
      /pas encore précisé/i,
    );
  });

  it("creates exactly one Project via canonical action then opens workspace", async () => {
    createProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      projectId: "prj:s06-1",
      project: {
        projectId: "prj:s06-1",
        name: "Contrats Q3",
        objective: "Suivre les contrats fournisseurs",
        criticality: "STANDARD",
      },
      livingState: { version: 1 },
      readiness: { status: "NOT_READY" },
      reusedFromIdempotencyKey: false,
    });
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
    await user.click(screen.getByTestId("new-project-send"));
    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(1),
    );
    const arg = createProjectRuntimeActionMock.mock.calls[0]![0];
    expect(arg.name).toBe("Contrats Q3");
    expect(arg.objective).toMatch(/contrats/i);
    expect(arg.criticality).toBe("STANDARD");
    expect(arg).not.toHaveProperty("cycleId");
    expect(arg).not.toHaveProperty("humanDecision");
    expect(pushMock).toHaveBeenCalledWith("/studio/projects/prj%3As06-1");
  });
});

describe("P5-S06 CP01 Nora activity mapping", () => {
  it("maps observable uiState without STOPPED or fake percent", () => {
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "SENDING",
      }),
    ).toMatchObject({ phase: "start", stopAvailable: false });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "SOURCE_LOOKUP",
      }),
    ).toMatchObject({ phase: "activity", label: "Nora travaille…" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "ASSISTANT_WORKING",
      }),
    ).toMatchObject({ phase: "activity", label: "Nora travaille…" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: false,
        uiState: "ANSWERED",
      }),
    ).toMatchObject({ phase: "complete" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: false,
        uiState: "ERROR_RECOVERABLE",
      }),
    ).toMatchObject({ phase: "error" });
    expect(
      projectNoraActivity({
        blocked: true,
        busy: false,
        uiState: "BLOCKED",
      }),
    ).toMatchObject({ phase: "blocked" });
    const idle = projectNoraActivity({
      blocked: false,
      busy: false,
      uiState: "READY",
    });
    expect(idle.phase).not.toBe("stopped" as never);
    expect(JSON.stringify(idle)).not.toMatch(/%|chain of thought|CoT/i);
    expect(
      projectNoraActivity({
        blocked: false,
        busy: false,
        uiState: "STOPPED",
      }),
    ).toMatchObject({ phase: "stopped", label: "Réponse interrompue", stopAvailable: false });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "ASSISTANT_WORKING",
        stopAvailable: true,
      }).stopAvailable,
    ).toBe(true);
  });
});

describe("P5-S06 CP01 Auth", () => {
  it("keeps GitHub-only Continuer avec GitHub and existing start href", () => {
    render(<LoginClient fromPath="/studio" />);
    const cta = screen.getByTestId("login-github");
    expect(cta).toHaveTextContent("Continuer avec GitHub");
    expect(cta).toHaveAttribute(
      "href",
      "/api/auth/github-start?from=%2Fstudio",
    );
  });
});
